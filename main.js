document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles background
  tsParticles.load("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });

  // Screen navigation
  const screens = {
    welcome: document.getElementById('welcome-screen'),
    quran: document.getElementById('quran-screen'),
    music: document.getElementById('music-screen'),
    reasons: document.getElementById('reasons-screen'),
    wish: document.getElementById('wish-screen'),
    cakeCutting: document.getElementById('cake-cutting-screen')
  };

  // Button event listeners
  document.getElementById('start-button').addEventListener('click', () => {
    transitionScreens(screens.welcome, screens.quran);
    animateQuranVerses();
  });

  document.getElementById('quran-next').addEventListener('click', () => {
    transitionScreens(screens.quran, screens.reasons);
    animateMusicPlayer();
  });

  // document.getElementById('music-next').addEventListener('click', () => {
  //   transitionScreens(screens.music, screens.reasons);
  //   animateReasonsList();
  // });

  document.getElementById('reasons-next').addEventListener('click', () => {
    transitionScreens(screens.reasons, screens.wish);
    animateWishContent();
  });

  document.getElementById('wish-next').addEventListener('click', () => {
    transitionScreens(screens.wish, screens.cakeCutting);
    animateCakeCuttingScreen();
  });

  document.getElementById('cake-cutting-button').addEventListener('click', () => {
    cutCake();
  });

  // Screen transition function
  function transitionScreens(currentScreen, nextScreen) {
    currentScreen.classList.remove('animate__fadeIn');
    currentScreen.classList.add('animate__fadeOut');
    
    setTimeout(() => {
      currentScreen.classList.remove('active');
      currentScreen.classList.remove('animate__fadeOut');
      
      nextScreen.classList.add('active', 'animate__fadeIn');
    }, 1000);
  }

  // Animation functions
  function animateQuranVerses() {
    const verses = document.querySelectorAll('.quran-verse');
    verses.forEach((verse, index) => {
      setTimeout(() => {
        verse.classList.add('animate__fadeInUp');
      }, 500 + (index * 300));
    });

    setTimeout(() => {
      document.getElementById('quran-next').classList.add('animate__bounceIn');
    }, 2000);
  }

  function animateMusicPlayer() {
    document.querySelector('.music-container').classList.add('animate__fadeIn');
    
    setTimeout(() => {
      document.getElementById('music-next').classList.add('animate__bounceIn');
    }, 1500);
  }

  function animateReasonsList() {
    const items = document.querySelectorAll('#reasons-list li');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate__fadeInLeft');
      }, 300 + (index * 300));
    });

    setTimeout(() => {
      document.getElementById('reasons-next').classList.add('animate__bounceIn');
    }, 2500);
  }

  function animateWishContent() {
    document.querySelector('.wish-content').classList.add('animate__fadeIn');
    
    setTimeout(() => {
      document.getElementById('wish-next').classList.add('animate__bounceIn');
    }, 2000);
  }

  function animateCakeCuttingScreen() {
    document.querySelector('#cake-cutting-screen h2').classList.add('animate__heartBeat');
    document.querySelector('.cake-message').classList.add('animate__fadeIn');
    
    setTimeout(() => {
      document.getElementById('cake-cutting-button').classList.add('animate__bounceIn');
    }, 1500);
  }

  function cutCake() {
    // Animate knife
    const knife = document.querySelector('.knife');
    knife.style.opacity = '1';
    
    setTimeout(() => {
      knife.classList.add('active');
      
      // Create balloons after cake is cut
      createBalloons();
      
      // Show celebration message
      setTimeout(() => {
        Swal.fire({
          title: 'Happy Birthday!',
          html: `
            <p>May your day be as special as you are!</p>
            <p>Wishing you a year filled with blessings and joy.</p>
            <p>❤️❤️❤️</p>
          `,
          icon: 'success',
          confirmButtonText: 'Thank You!',
          background: '#fff',
          backdrop: `
            rgba(255,105,180,0.4)
            url("https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif")
            center top
            no-repeat
          `,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      }, 2000);
    }, 500);
  }

  function createBalloons() {
    const colors = [
      '#ff4b8d', '#ff6b6b', '#ffb3c1', '#ff9a9e', 
      '#fad0c4', '#fbc2eb', '#a18cd1', '#ffecd2'
    ];
    
    const balloonsContainer = document.getElementById('balloons-container');
    
    // Create 30 balloons
    for (let i = 0; i < 30; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      
      // Random position, color, size and animation delay
      const left = Math.floor(Math.random() * 100);
      const size = Math.floor(Math.random() * 30) + 30;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 5;
      
      balloon.style.left = `${left}%`;
      balloon.style.width = `${size}px`;
      balloon.style.height = `${size * 1.2}px`;
      balloon.style.background = color;
      balloon.style.animationDelay = `${delay}s`;
      
      balloonsContainer.appendChild(balloon);
    }
  }

  // Confetti function (simplified version)
  function confetti(options) {
    const colors = options.colors || ['#ff0000', '#ff4b8d', '#ff69b4'];
    const particleCount = options.particleCount || 50;
    const startPosition = options.origin || { x: 0.5, y: 0.5 };
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.zIndex = '1000';
      particle.style.width = '10px';
      particle.style.height = '10px';
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      
      // For heart shape
      if (options.shapes && options.shapes.includes('heart')) {
        particle.style.background = 'transparent';
        particle.style.width = '15px';
        particle.style.height = '15px';
        particle.style.transform = 'rotate(45deg)';
        particle.style.position = 'fixed';
        particle.style.boxShadow = `inset -5px -5px 0 ${colors[Math.floor(Math.random() * colors.length)]}`;
        particle.style.zIndex = '1000';
        
        const before = document.createElement('div');
        before.style.width = '15px';
        before.style.height = '15px';
        before.style.background = colors[Math.floor(Math.random() * colors.length)];
        before.style.borderRadius = '50%';
        before.style.position = 'absolute';
        before.style.top = '0';
        before.style.left = '-7.5px';
        
        const after = document.createElement('div');
        after.style.width = '15px';
        after.style.height = '15px';
        after.style.background = colors[Math.floor(Math.random() * colors.length)];
        after.style.borderRadius = '50%';
        after.style.position = 'absolute';
        after.style.top = '-7.5px';
        after.style.left = '0';
        
        particle.appendChild(before);
        particle.appendChild(after);
      }
      
      // Set initial position
      const startX = startPosition.x * window.innerWidth;
      const startY = startPosition.y * window.innerHeight;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      
      // Random movement
      const angle = Math.random() * Math.PI * 2;
      const speed = options.startVelocity * (0.5 + Math.random());
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      
      document.body.appendChild(particle);
      
      // Animate
      let timeLeft = options.ticks;
      const tick = () => {
        timeLeft--;
        
        const x = parseFloat(particle.style.left) + vx;
        const y = parseFloat(particle.style.top) + vy + 0.5; // Add gravity
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.opacity = timeLeft / options.ticks;
        
        if (timeLeft > 0 && 
            x > 0 && x < window.innerWidth && 
            y > 0 && y < window.innerHeight) {
          requestAnimationFrame(tick);
        } else {
          particle.remove();
        }
      };
      
      requestAnimationFrame(tick);
    }
  }
});