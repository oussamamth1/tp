<?php

namespace App\Form;

use App\Entity\User;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;


class EditUserType  extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder

            ->add('function', choiceType::class, [
                'label' => 'Fonction',
                'placeholder' => 'selectionner un choix',
                'choices' => [
                    'developpeur' => 'developpeur',
                    'manager' => 'manager',
                    'chef d\'équipe' => 'chef d\'équipe',
                ],
            ])
            ->add('user', EntityType::class, array(
                'label' => 'Manager',
                'class' => User::class,
                'choice_label' => 'email',
                'placeholder' => 'selectionner un choix',
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->where('u.function = :function')
                        ->setParameter('function', 'manager');
                }
            ))
            ->add('startDate', DateType::class, array(
                'label' => 'Date de début',

                'widget' => 'single_text'
            ))
            ->add('enabled', CheckboxType::class, [
                'label' => 'Active',
                'required' => false,]);

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }

}

