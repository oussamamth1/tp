<?php

namespace App\Form;

use App\Entity\Relationship;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RelationshipType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('request1')
            ->add('request2')
            ->add('accepted1')
            ->add('acepted2')
            ->add('user1')
            ->add('user2')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Relationship::class,
        ]);
    }
}
