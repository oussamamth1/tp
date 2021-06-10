<?php

/*
 * This file is part of the FOSUserBundle package.
 *
 * (c) FriendsOfSymfony <http://friendsofsymfony.github.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Controller;

use App\Entity\User;
use App\Entity\Post;

use Symfony\Component\HttpFoundation\Request;

use FOS\UserBundle\Form\Factory\FactoryInterface;
use FOS\UserBundle\Model\UserInterface;
use FOS\UserBundle\Model\UserManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * Controller managing the user profile.
 *
 * @author Christophe Coevoet <stof@notk.org>
 */
class ProfileController extends Controller
{

    /**
     * Show the user.
     * @Route("/profile", name="profile")
     *@IsGranted("IS_AUTHENTICATED_REMEMBERED")
     */
    public function showAction(Request $request)
    {
        $user = $this->getUser();
        $request->setLocale('fr');


        $users = $this->getDoctrine()
            ->getRepository(User::class)
            ->findAll();
        $posts = $this->getDoctrine()
            ->getRepository(Post::class)
            ->findAll();


        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }

        return $this->render('bundles/FOSUserBundle/Profile/show.html.twig', array(
            'user' => $user,
            'users' => $users,
            'posts' => $posts,
           

        ));
    }

    /**
     * @Route("/myProfil", name="my_profile")
     *@IsGranted("IS_AUTHENTICATED_REMEMBERED")
     */
    public function showMyprofil(Request $request)
    {
        $user = $this->getUser();
        $request->setLocale('fr');
        $posts = $this->getDoctrine()
            ->getRepository(Post::class)
            ->findAll();


        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }

        return $this->render('bundles/FOSUserBundle/Profile/MyProfil.html.twig', array(
            'user' => $user,
            'posts' => $posts,


        ));
    }





}
