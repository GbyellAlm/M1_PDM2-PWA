<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class GloboSegundaFeiraController extends AbstractController
{
    /**
     * @Route("/globo/segunda-feira", name="globo_segunda_feira")
     */
    public function index()
    {
        return $this->render('globo_segunda_feira/globoSegunda.html.twig', [
            'controller_name' => 'GloboSegundaFeiraController',
        ]);
    }
}
