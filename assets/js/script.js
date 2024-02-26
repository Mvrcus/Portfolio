'use strict';

// Import tsParticles and the confetti preset
import { tsParticles } from 'https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm';
import { loadConfettiPreset } from 'https://cdn.jsdelivr.net/npm/@tsparticles/preset-confetti@3.0.2/+esm';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

// sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener('click', function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// modal variable
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener('click', function () {
    modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
    modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
    modalTitle.innerHTML = this.querySelector(
      '[data-testimonials-title]'
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      '[data-testimonials-text]'
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

// custom select variables
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === 'all') {
      filterItems[i].classList.add('active');
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;
  });
}

// Existing code for form inputs
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

// Event listener for form inputs
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener('input', function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute('disabled');
    } else {
      formBtn.setAttribute('disabled', '');
    }
  });
}

//Name formatting
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

// New handleSubmit function with a different variable name
async function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const contactForm = event.currentTarget;
  let fullName = document.querySelector('input[name="fullname"]').value;
  fullName = toTitleCase(fullName);

  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Create FormData object
  const formData = new FormData();
  formData.append('fullname', fullName);
  formData.append('email', email);
  formData.append('message', message);

  // Hide sections
  document.querySelector('.mapbox').style.display = 'none';
  document.querySelector('.contact-form').style.display = 'none';

  // Add message in a new section
  const messageSection = document.createElement('section');
  messageSection.className = 'form-success';
  messageSection.innerHTML = `<div class="confetti-wrapper">
  <svg class="success-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256"
style="fill:#40C057;">
<g fill="#40c057" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-2.17938 -0.59,-4.21686 -1.60547,-5.97852l-11.24805,11.24609c-0.187,0.187 -0.44103,0.29297 -0.70703,0.29297c-0.265,0 -0.52003,-0.10497 -0.70703,-0.29297l-4.45313,-4.45312c-0.391,-0.391 -0.391,-1.02306 0,-1.41406c0.391,-0.391 1.02306,-0.391 1.41406,0l3.74609,3.74609l10.80078,-10.80078c-2.201,-2.655 -5.52223,-4.3457 -9.24023,-4.3457zM24.24023,7.3457c0.43165,0.52058 0.81351,1.08435 1.1543,1.67383l2.3125,-2.3125c0.391,-0.392 0.391,-1.02306 0,-1.41406c-0.391,-0.391 -1.02306,-0.391 -1.41406,0z"></path></g></g>
</svg>
</div><p>Hello, ${fullName}! Thank you for submitting the contact form.</p>`;

  const contactFormSection = document.querySelector('.contact-form');
  contactFormSection.parentNode.insertBefore(
    messageSection,
    contactFormSection.nextSibling
  );

  // Trigger the confetti
  loadParticles(configs);

  // Make an asynchronous request to your Cloudflare Workers function
  try {
    const response = await fetch('https://form.marcustwilson.com/submit', {
      method: 'POST',
      body: formData, // Send FormData object
    });

    if (response.ok) {
      console.log('Data submitted to the database successfully');
    } else {
      console.error('Error submitting data to the database');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Attach the handleSubmit event listener to the existing 'form' variable
form.addEventListener('submit', handleSubmit);

//CONFETTI

async function loadParticles(options) {
  await loadConfettiPreset(tsParticles);

  // Load initial particles
  await tsParticles.load({ id: 'tsparticles', options });
}

const configs = {
  fpsLimit: 60,
  // detectRetina: true,
  fullScreen: {
    enable: true,
  },
  background: {
    color: 'transparent',
  },
  preset: 'confetti',
  particles: {
    color: {
      value: ['#48bd56'],
    },
    shape: {
      type: ['circle', 'square'],
    },
    opacity: {
      value: { min: 0, max: 1 },
      animation: {
        enable: true,
        speed: 2,
        startValue: 'max',
        destroy: 'min',
      },
    },
    size: {
      value: { min: 3, max: 7 },
    },
    life: {
      duration: {
        sync: true,
        value: 5,
      },
      count: 1,
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 20,
      },
      speed: 80,
      decay: 0.1,
      direction: 'none',
      random: false,
      straight: false,
      outModes: {
        default: 'destroy',
        top: 'none',
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: 'random',
      move: true,
      animation: {
        enable: true,
        speed: 60,
      },
    },
    tilt: {
      direction: 'random',
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 60,
      },
    },
    roll: {
      darken: {
        enable: true,
        value: 25,
      },
      enable: true,
      speed: {
        min: 15,
        max: 25,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15,
      },
    },
  },
  emitters: [
    {
      direction: 'top-right',
      rate: {
        delay: 0.1,
        quantity: 6,
      },
      position: {
        x: 0,
        y: 100,
      },
      size: {
        width: 0,
        height: 0,
      },
      particles: {
        move: {
          angle: {
            offset: -15,
            value: 60,
          },
        },
      },
      life: {
        count: 1, // Emit particles only once
        duration: 0.5,
        delay: 0.4,
      },
    },
    {
      direction: 'top-left',
      rate: {
        delay: 0.1,
        quantity: 5,
      },
      position: {
        x: 100,
        y: 100,
      },
      size: {
        width: 0,
        height: 0,
      },
      particles: {
        move: {
          angle: {
            offset: 15,
            value: 60,
          },
        },
      },
      life: {
        count: 1, // Emit particles only once
        duration: 0.5,
        delay: 0.4,
      },
    },
  ],
};

// page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add('active');
        navigationLinks[i].classList.add('active');
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove('active');
        navigationLinks[i].classList.remove('active');
      }
    }
  });
}
