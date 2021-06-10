<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\UploadedFile;

//use phpDocumentor\Reflection\File;
//use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\HttpFoundation\File\File;

//use PhpParser\Node\Scalar\MagicConst\File;


/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="fos_user")
 * @ORM\HasLifecycleCallbacks()
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $lastName;

   


    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $startDate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $matCNSS;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $gender;


    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @ORM\JoinColumn(nullable=true)
     */
    private $createdBy;

    /**
     * @ORM\Column(type="datetime",nullable=true)
     */
    private $modifiedAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @ORM\JoinColumn(nullable=true)
     */

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photo;

  

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="managerId")
     * @ORM\JoinColumn(name="manager_id", referencedColumnName="id")
     */
    private $user;

 

    /**
     * @Assert\Image(
     *     minWidth = 100,
     *     minHeight = 100,
     *     minWidthMessage="La largeur de la photo est petite ({{ width }}px). La largeur minimale attendue est de {{ min_width }}px.",
     *     minHeightMessage="La hauteur de la photo est petite ({{ height }}px). La hauteur minimale attendue est de {{ min_height }}px"
     * )
     */
    public $file;
    /**
     * @var array
     *
     */
    protected $roles = [];
    /**
     * @Assert\Regex(
     *     pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,}$/",
     *     match=false,
     *     message="A minimum 8 characters password contains a combination of uppercase and lowercase letter and number."
     * )
     * @Assert\NotBlank(message="A minimum 8 characters password contains a combination of uppercase and lowercase letter and number.")
     */
    protected $password;
    private $tempFilename;

    //    /**
    //     * @ORM\ManyToOne(targetEntity="App\Entity\LiveScan", inversedBy="userid")
    //     */
    //    private $liveScan;
    //
    //    /**
    //     * @ORM\OneToMany(targetEntity="App\Entity\LiveScan", mappedBy="createdBy")
    //     */
    //    private $livescan1;



    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $rib;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="usr")
     */
    private $comments;

    public function __construct()
    {
        parent::__construct();
        $this->comments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getMatCNSS(): ?string
    {
        return $this->matCNSS;
    }

    public function setMatCNSS(string $matCNSS): self
    {
        $this->matCNSS = $matCNSS;

        return $this;
    }

    public function getUsername()
    {
        return $this->username;
    }

    /**
     * {@inheritdoc}
     */
    public function getUsernameCanonical()
    {
        return $this->usernameCanonical;
    }


    /**
     * {@inheritdoc}
     */
    public function getSalt()
    {
        return $this->salt;
    }

    /**
     * {@inheritdoc}
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * {@inheritdoc}
     */
    public function getEmailCanonical()
    {
        return $this->emailCanonical;
    }

    /**
     * {@inheritdoc}
     *
     *
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * {@inheritdoc}
     */
    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    /**
     * {@inheritdoc}
     */
    public function setEmail($email)
    {
        $this->email = $email;
        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function setEmailCanonical($emailCanonical)
    {
        $this->emailCanonical = $emailCanonical;
        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function setEnabled($boolean)
    {
        $this->enabled = (bool) $boolean;
        return $this;
    }

    /**
     * {@inheritdoc}
     *
     */
    public function setPassword($password)
    {
        $this->password = $password;
        return $this;
    }

    /**
     * {@inheritdoc}
     */

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getModifiedAt(): ?\DateTimeInterface
    {
        return $this->modifiedAt;
    }

    public function setModifiedAt(?\DateTimeInterface $modifiedAt): self
    {
        $this->modifiedAt = $modifiedAt;

        return $this;
    }

    public function getCreatedBy(): ?self
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?self $createdBy): self
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    public function getModifiedBy(): ?self
    {
        return $this->modifiedBy;
    }

    public function setModifiedBy(?self $modifiedBy): self
    {
        $this->modifiedBy = $modifiedBy;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    /**
     * Retourne les rôles de l'user
     */
    public function getRoles(): array
    {
        $roles = $this->roles;


        if (empty($roles)) {
            $roles[] = 'ROLE_USER';
        }

        return array_unique($roles);
    }

    public function setRoles(array $roles): void
    {
        $this->roles = $roles;
    }

   
    /**
     * @ORM\PreUpdate
     */
    public function preUpdate()
    {
        $this->setModifiedAt(new \DateTime('now'));
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        if (is_null($this->getCreatedAt())) {
            $this->setCreatedAt(new \DateTime('now'));
        }
    }


    public function getUser(): ?self
    {
        return $this->user;
    }

    public function setUser(?self $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|self[]
     *
     */
    public function getManagerId()
    {
        return $this->managerId;
    }

    public function addManagerId(User $managerId = null)
    {
        $this->managerId = $managerId;
    }

    public function removeManagerId(self $managerId): self
    {
        if ($this->managerId->contains($managerId)) {
            $this->managerId->removeElement($managerId);
            // set the owning side to null (unless already changed)
            if ($managerId->getUser() === $this) {
                $managerId->setUser(null);
            }
        }

        return $this;
    }


    public function setFile(UploadedFile $file)
    {
        $this->file = $file;

        if (null !== $this->photo) {
            $this->tempFilename = $this->photo;

            $this->photo = null;
        }
    }

    public function getFile()
    {
        return $this->file;
    }

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function preUpload()
    {
        if (null === $this->file) {
            return;
        }

        $extension = $this->file->guessExtension();

        $this->photo = md5(uniqid('', true)) . '.' . $extension;
    }

    /**
     * @ORM\PostPersist()
     * @ORM\PostUpdate()
     */
    public function upload()
    {
        if (null === $this->file) {
            return;
        }

        if (null !== $this->tempFilename) {
            $oldFile = $this->getUploadRootDir() . '/' . $this->tempFilename;

            if (file_exists($oldFile)) {
                unlink($oldFile);
            }
        }

        $this->file->move($this->getUploadRootDir(), $this->photo);
    }

    /**
     * @ORM\PreRemove()
     */
    public function preRemoveUpload()
    {
        $this->tempFilename = $this->getUploadRootDir() . '/' . $this->photo;
    }

    /**
     * @ORM\PostRemove()
     */
    public function removeUpload()
    {
        if ($this->photo != null) {
            if (file_exists($this->tempFilename)) {
                unlink($this->tempFilename);
            }
        }
    }

    //folder
    public function getUploadDir()
    {
        return 'uploads/photos';
    }

    // path to folder web
    protected function getUploadRootDir()
    {
        return __DIR__ . '/../../public/' . $this->getUploadDir();
    }


    public function getPhotoPath()
    {
        return $this->getUploadDir() . '/' . $this->photo;
    }

    public function setManagerId(?self $managerId): self
    {
        $this->managerId = $managerId;

        return $this;
    }





    public function getRib(): ?string
    {
        return $this->rib;
    }

    public function setRib(?string $rib): self
    {
        $this->rib = $rib;


        return $this;
    }

    /**
     * @return Collection|Comment[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setUsr($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getUsr() === $this) {
                $comment->setUsr(null);
            }
        }

        return $this;
    }
}
