<?php

namespace App\Controller;

use App\Entity\Notifiction;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{
    public function navBar(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        return $this->render('includes/nav.html.twig');
    }
}
