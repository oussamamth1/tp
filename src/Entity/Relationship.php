<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RelationshipRepository")
 */
class Relationship
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     */
    private $user1;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     */
    private $user2;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $request1;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $request2;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $accepted1;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $acepted2;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser1(): ?User
    {
        return $this->user1;
    }

    public function setUser1(?User $user1): self
    {
        $this->user1 = $user1;

        return $this;
    }

    public function getUser2(): ?User
    {
        return $this->user2;
    }

    public function setUser2(?User $user2): self
    {
        $this->user2 = $user2;

        return $this;
    }

    public function getRequest1(): ?string
    {
        return $this->request1;
    }

    public function setRequest1(string $request1): self
    {
        $this->request1 = $request1;

        return $this;
    }

    public function getRequest2(): ?string
    {
        return $this->request2;
    }

    public function setRequest2(string $request2): self
    {
        $this->request2 = $request2;

        return $this;
    }

    public function getAccepted1(): ?string
    {
        return $this->accepted1;
    }

    public function setAccepted1(string $accepted1): self
    {
        $this->accepted1 = $accepted1;

        return $this;
    }

    public function getAcepted2(): ?string
    {
        return $this->acepted2;
    }

    public function setAcepted2(string $acepted2): self
    {
        $this->acepted2 = $acepted2;

        return $this;
    }
}
