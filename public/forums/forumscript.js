const messageForm = document.querySelector('#message-form');
const titleInput = document.querySelector('#title-input');
const messageInput = document.querySelector('#message-input');
const messageContainer = document.querySelector('#message-container');

// Wanted to use an API to generate forum discussions about animals but couldn't find any that didn't require an access token //
const messages = [
  { username: 'kingpengu12', title: 'Why Are Stray Dogs Following Me?', message: 'On my way home a dog would see me, then start following me straight till my house. This happened 3 times already... Any dog lovers know why?', timestamp: '2023-04-13T10:00:00Z' },
  { username: 'justlikeanimalssss', title: 'I love my cat! I trimmed her nails for the first time and she just stared at me.', message: 'I’ve heard horror stories of trimming cats nails. My first time, quite uneventful, but I’m happy with that!!!', timestamp: '2023-04-13T14:30:00Z' },
  { username: 'pikapika', title: 'Have you ever crossed a skunk?', message: 'Did it spray you? Whats the story of the encounter?', timestamp: '2023-04-11T12:30:00Z' },
  { username: 'sekiro_borne', title: 'How likely is it that my pets know each others names?', message: 'All three of my pets (three cats), respond to their own names. Its pretty obvious by their body language that they know when theyre being called. One cat in particular, Monster - will really go out of her way to make eye contact and purr when I call her. But, how likely is it that they know each others names?.', 
   timestamp: '2023-04-05T12:00:00Z' }
];

messages.forEach(message => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'message-card');
  messageElement.innerHTML = `
    <div class="message-header">
      <h3 class="message-title">${message.title}</h3>
      <span class="timestamp">${new Date(message.timestamp).toLocaleString()}</span>
    </div>
    <div class="message-body">
      <p class="message-content">${message.message}</p>
      <span><br>Auhtor: <strong>${message.username}</strong></span>
    </div>
  `;
  messageContainer.appendChild(messageElement);
});

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (messageInput.value.trim() !== '') {
    const message = {
      username: 'You',
      title: titleInput.value.trim(),
      message: messageInput.value.trim(),
      timestamp: new Date().toISOString()
    };
    messages.push(message);
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'message-card');
    messageElement.innerHTML = `
    <div class="message-header">
      <h3 class="message-title">${message.title}</h3>
      <span class="timestamp">${new Date(message.timestamp).toLocaleString()}</span>
    </div>
    <div class="message-body">
      <p class="message-content">${message.message}</p>
      <span><br>Author: <strong>${message.username}</strong></span>
    </div>
  `;
    messageContainer.insertBefore(messageElement, messageContainer.firstChild);
    messageInput.value = '';
  }
});

//------------------- FUNCTIONALITY ---------------//

const signOutButton = document.getElementById("sign-out-button");
signOutButton.addEventListener("click", () => {
  localStorage.removeItem("authToken");
  window.location.href = "https://fauna-animal-media.netlify.app/";
});

// -------------- HASTAGS --------- //
const categories = document.querySelectorAll('.category h6');
const hashtags = document.querySelectorAll('.hashtag');
const categoryLinks = document.querySelectorAll('.right .category h6');
const containers = document.querySelectorAll('.hashtag-container');

function showHashtags(category) {
  containers.forEach(container => {
    if (container.classList.contains(category)) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  });
}

categories.forEach(category => {
  category.addEventListener('click', () => {
    const activeCategory = document.querySelector('.category .active');
    if (activeCategory !== category) {
      activeCategory.classList.remove('active');
      category.classList.add('active');
      hashtags.forEach(hashtag => {
        if (hashtag.dataset.category === category.dataset.category) {
          hashtag.classList.add('active');
        } else {
          hashtag.classList.remove('active');
        }
      });
    }
    showHashtags(category.dataset.category);
  });
});

categoryLinks.forEach(link => {
  link.addEventListener('click', () => {
    const category = link.dataset.category;
    containers.forEach(container => {
      if (container.classList.contains(category)) {
        container.classList.add('active');
      } else {
        container.classList.remove('active');
      }
    });
    categoryLinks.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});
// -------------  HASHTAGS  --------------------  //

// SIDEBAR //
const menuItems = document.querySelectorAll('.menu-item');

// THEME //
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colourPalette = document.querySelectorAll('.choose-colour span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// Remove Active Class From All Menu Items //
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if (item.id != 'notifications') {
      document.querySelector('.notifications-popup').
        style.display = 'none';
    } else {
      document.querySelector('.notifications-popup').
        style.display = 'block';
      document.querySelector('#notifications .notification-count').
        style.display = 'none';
    }
  })
})

// -- THEME //
// open //
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}

// close //
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// -------------- FONTS ------------------- //
// remove active class from spans or font size selectors //
const removeSizeSelector = () => (
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
)

fontSizes.forEach(size => {

  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');


    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty('----sticky-top-right', '5.4rem');

    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty('----sticky-top-right', '-7rem');

    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      root.style.setProperty('----sticky-top-left', '-2rem');
      root.style.setProperty('----sticky-top-right', '-17rem');

    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
      root.style.setProperty('----sticky-top-left', '-5rem');
      root.style.setProperty('----sticky-top-right', '-25rem');

    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
      root.style.setProperty('----sticky-top-left', '-12rem');
      root.style.setProperty('----sticky-top-right', '-35rem');
    }

    // change font size of the root html element //
    document.querySelector('html').style.fontSize = fontSize;

  })
})

// remove active class from colours //
const changeActiveColourClass = () => {
  colourPalette.forEach(colourPicker => {
    colourPicker.classList.remove('active');
  })
}

// Colour Change //
colourPalette.forEach(colour => {
  colour.addEventListener('click', () => {
    let primary;
    // remove active class from colours //
    changeActiveColourClass();

    if (colour.classList.contains('colour-1')) {
      primaryHue = 252;
    } else if (colour.classList.contains('colour-2')) {
      primaryHue = 52;
    } else if (colour.classList.contains('colour-3')) {
      primaryHue = 22;
    } else if (colour.classList.contains('colour-4')) {
      primaryHue = 152;
    } else if (colour.classList.contains('colour-5')) {
      primaryHue = 202;
    }
    colour.classList.add('active');

    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})

// BG Theme VALUES //
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// This Function Changes Background Colour //
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

// ------------ CHANGE BACKGROUNDS ------------------ //
Bg1.addEventListener('click', () => {
  // Add Active Class //
  Bg1.classList.add('active');
  // Remove Active Class From The Rest //
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  // remove customized changes from local storage //
  window.location.reload();
});

Bg2.addEventListener('click', () => {
  lightColorLightness = '15%';
  whiteColorLightness = '20%';
  darkColorLightness = '95%';

  // Add Active Class //
  Bg2.classList.add('active');
  // Remove Active Class From The Rest //
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
});

Bg3.addEventListener('click', () => {
  lightColorLightness = '0%';
  whiteColorLightness = '10%';
  darkColorLightness = '95%';

  // Add Active Class //
  Bg3.classList.add('active');
  // Remove Active Class From The Rest //
  Bg1.classList.remove('active');
  Bg2.classList.remove('active');
  changeBG();
})
// FIN //
