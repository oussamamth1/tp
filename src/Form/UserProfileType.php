<?php

namespace App\Form;

use App\Entity\User;
use Doctrine\DBAL\Types\TextType;
use phpDocumentor\Reflection\Types\Integer;
use function PHPSTORM_META\type;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;


class UserProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstName', \Symfony\Component\Form\Extension\Core\Type\TextType::class, ['label' => 'Prénom'], [
                'attr' =>
                    ['placeholder' => " tapez votre prenom svp",
                    ]
            ])
            ->add('lastName', \Symfony\Component\Form\Extension\Core\Type\TextType::class, ['label' => 'Nom'], [
                'attr' =>
                    ['placeholder' => " tapez votre Nom svp",

                    ]
            ])
            ->add('file', FileType::class, array(
                'label' => 'Photo',
                'required' => false,
            ))

            ->add('gender', ChoiceType::class, array(
                'label' => 'Sexe',
                'choices' => array(
                    'homme' => 'homme',
                    'femme' => 'femme',
                ),
                'placeholder' => 'Veuillez choisir une option',
                'expanded' => true
            ))
            ->remove('username')
            ->remove('email')
            ->remove('current_password');

    }

    public function getParent()
    {
        return 'FOS\UserBundle\Form\Type\ProfileFormType';

        // Or for Symfony < 2.8
        // return 'fos_user_registration';
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'validation_groups'=> 'profile'
        ]);
    }

    public function getBlockPrefix()
    {
        return 'app_user_profile';
    }

    // For Symfony 2.x
    public function getName()
    {
        return $this->getBlockPrefix();
    }
}
