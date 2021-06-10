<?php

namespace App\Controller\Administration;

use App\Entity\User;
use App\Form\UserType;
use App\Form\EditUserType;

use App\Controller\ZKlibrary;
use Symfony\Contracts\Translation\TranslatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="user_index", methods={"GET"})
     */
    public function index(Request $request): Response
    {
        $users = $this->getDoctrine()
            ->getRepository(User::class)
            ->findAll();

        return $this->render('user/index.html.twig', [
            'users' => $users,


        ]);
    }

    /**
     * @Route("/search", name="user_search", methods={"POST"})
     */
    public function search(Request $request): Response
    {
        $form = $request->request->all();
        $search=$form['search'];
        $entityManager = $this->getDoctrine()->getManager();
        $qb = $entityManager->createQueryBuilder();
        $user = $qb->select('User')
            ->from('App\Entity\User', 'User')
            ->where('User.email LIKE :key')
            ->orWhere('User.firstName LIKE :key')
            ->orWhere('User.lastName LIKE :key')
            ->setParameter('key' , '%'.$search.'%')
            ->getQuery()
            ->getResult();
;
        return $this->render('user/show.html.twig', [
            'usersearch' =>$user



        ]);
    }
    /**
     * @Route("/new", name="user_new")
     */
    public function new(Request $request): Response
    {
        $user = new User();
          $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);
        //  $user = $this->getUser();
        if ($form->isSubmitted() && $form->isValid()) {
            $user->setUsername($user->getEmail());
            $user->setUsernameCanonical(strtolower($user->getEmail()));
            $user->setEmailCanonical(strtolower($user->getEmail()));
            $user->setPlainPassword($form->get('Password')->getData());
            $user->setCreatedBy($this->getUser());
            $user->setModifiedBy($this->getUser());
            $user->addManagerId($user->getUser());
            $user->setRoles($user->getRoles());
            $entityManager = $this->getDoctrine()->getManager();
            $qb = $entityManager->createQueryBuilder();
            $Listemail = $qb->select('user')
                ->from('App\Entity\User', 'user')
                ->addOrderBy('user.email', 'ASC')
                ->getQuery()
                ->getResult();
            for ($i = 0; $i < sizeof($Listemail); $i++) {
                if ($user->getEmail() == $Listemail[$i]->getEmail()) {
                   $this->addFlash('error', 'Votre email est déja exist');
                    return $this->redirectToRoute('user_new');
                }
            }
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute('user_index');
        }
        //else{var_dump($form->getErrors());}

        return $this->render('user/new.html.twig', [
            'user' => $user,
            'formUser' => $form->createView(),
        ]);
    }

    /**
     * @Route("/show/{id}", name="user_show", methods={"GET"})
     */
    public function show(User $user): Response
    {
        return $this->render('user/profil_user.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/edit/{id}", name="user_edit")
     */
    public function edit(Request $request, User $user): Response
    {
        $form = $this->createForm(EditUserType::class, $user);


        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user->setUsername($user->getEmail());
            $user->setUsernameCanonical(strtolower($user->getEmail()));
            $user->setEmailCanonical(strtolower($user->getEmail()));
            $user->setPlainPassword($user->getPassword());
            $user->setPassword($user->getPassword());
            if ($user->getFunction() == 'manager') {
                $user->setRoles(['ROLE_ADMIN', 'ROLE_USER']);
            }
            $user->setRoles($user->getRoles());
            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute('user_index', array('alert' => 'success_add'));
        } else {
        }
        return $this->render('user/edit.html.twig', [
            'user' => $user,
            'formUser' => $form->createView(),
        ]);
    }

    /**
     * @Route("/delete/{id}", name="user_delete", methods={"DELETE"})
     */
    public function delete(Request $request, User $user): Response
    {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }
        return new JsonResponse();
    }
}
