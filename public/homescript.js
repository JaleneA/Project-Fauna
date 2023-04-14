:root {
  --primary-color-hue: 252;
  --dark-color-lightness: 17%;
  --light-color-lightness: 95%;
  --white-color-lightness: 100%;

  
  --color-white:hsl(252, 30%, var(--white-color-lightness));
  --color-light:hsl(252, 30%, var(--light-color-lightness));
  --color-gray:hsl(var(--primary-color-hue), 15%, 65%);
  --color-primary:hsl(var(--primary-color-hue), 75%, 60%);
  --color-secondary:hsl(252, 100%, 90%);
  --color-success:hsl(120, 95%, 65%);
  --color-danger:hsl(0, 95%, 65%);
  --color-dark:hsl(252, 30%, var(--dark-color-lightness));
  --color-black:hsl(252, 30%, 10%);

  --border-radius: 2rem;
  --card-border-radius: 1rem;
  --btn-padding: 0.6rem 2rem;
  --search-padding: 0.6rem 1rem;
  --card-padding: 1rem;

  --sticky-top-left: 5.4rem;
  --sticky-top-right:-18rem;
  
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  border: none;
}

#instagram-photo {
  width: 100%;
  height: 100%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-dark);
  background: var(--color-light);
  overflow-x: hidden;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.profile-photo {
  width: 2.7rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
}

img {
  display: block;
  width: 100%;
}

.btn {
  display: inline-block;
  padding: var(--btn-padding);
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
}

.btn:hover {
  opacity: 0.8;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
  font-weight: bolder;
}

.text-bold {
  font-weight: 500;
}

.text-muted {
  color: var(--color-gray);
}

/* -------------------- NAVBAR -------------------*/
nav {
  width: 100%;
  background: var(--color-white);
  padding: 0.7rem 0;
  position: fixed;
  top: 0;
  z-index: 10;
}

nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-bar {
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: var(--search-padding);
}

.search-bar input[type="search"] {
  background: transparent;
  width: 30vw;
  margin-left: 1rem;
  font-size: 0.9rem;
  color: var(--color-dark);
}

nav .search-bar input[type="search"]::placeholder {
  color: var(--color-gray);
}

nav .create {
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* ------------- MAIN ----------------- */
main {
  position: relative;
  top: 5.4rem;
}

main .container {
  display: grid;
  grid-template-columns: 18vw auto 20vw;
  column-gap: 2rem;
  position: relative;
}

/* --------------- LEFT ----------------- */
main .container .left {
  height: max-content;
  position: sticky;
  top: var(--sticky-top-left);
}

main .container .left .profile {
  padding: var(--card-padding);
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  display: flex;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
}

/* --------------- SIDEBAR -------------- */

.left .profile .profile-photo img {
  width: 100%;
  height: 100%;
}

.left .sidebar a {
  color: var(--color-dark);
  text-decoration: none;
}

.left .sidebar {
  margin-top: 1rem;
  background: var(--color-white);
  border-radius: var(--card-border-radius);
}

.left .sidebar .menu-item {
  display: flex;
  align-items: center;
  height: 4rem;
  cursor: pointer;
  translate: all 300ms ease;
  position: relative;
} 

.left .sidebar .menu-item:hover {
  background: var(--color-light);
}

.left .sidebar i {
  font-size: 1.4rem;
  color: var(--color-gray);
  margin-left: 2rem;
  position: relative;
}

.left .sidebar i .notification-count {
  background: var(--color-danger);
  color: var(--color-white);
  font-size: 0.7rem;
  width: fit-content;
  border-radius: 0.8rem;
  padding: 0.1rem 0.4rem;
  position: absolute;
  top: -0.2rem;
  right: -0.3rem;
}

.left .sidebar h3 {
  margin-left: 1.5rem;
  font-size: 1rem;
}

.left .sidebar .active {
  background: var(--color-light);
}

.left .sidebar .active i, .left .sidebar .active h3 {
  color: var(--color-primary);
}

.left .sidebar .active::before {
  content: '';
  display: block;
  width: 0.5rem;
  height: 100%;
  position: absolute;
  background: var(--color-primary);
}

.left .sidebar .menu-item:first-child.active {
  border-top-left-radius: var(--card-border-radius);
  overflow: hidden;
}

.left .sidebar .menu-item:last-child.active {
  border-bottom-left-radius: var(--card-border-radius);
  overflow: hidden;
}

.left .btn {
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
}

/* ----------------- NOTIFIC POPUP --------------*/ 
.left .notifications-popup img {
  width: 100%;
  height: 100%;
}

.left .notifications-popup {
  position: absolute;
  top: 0;
  left: 110%;
  width: 30rem;
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  box-shadow: 0 0 2rem hsl(var(--color-primary), 75%, 60% 25%);
  z-index: 8;
  display: none;
}

.left .notifications-popup .notifications-body::hover {
  color: var(--color-primary);
}

.left .notifications-popup::before {
  content: "";
  width: 1.2rem;
  height: 1.2rem;
  display: block;
  background: var(--color-white);
  position: absolute;
  left: -0.6rem;
  transform: rotate(45deg);
}

.left .notifications-popup > div {
  display: flex;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.left .notifications-popup small {
  display: block;
}

/* -------------- MIDDLE ----------------- */
.middle .stories {
  display: flex;
  justify-content: space-between;
  height: 12rem;
  gap: 0.5rem;
}

.middle .stories .story {
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.75rem;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.middle .stories .story::before {
  content: "";
  display: block;
  width: 100%;
  height: 5rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.75));
  position: absolute;
  bottom: 0;
}

.middle .stories .story .name {
  z-index: 2;
}

.middle .stories .story:nth-child(1) {
  background: url('https://upload.wikimedia.org/wikipedia/commons/a/a0/Picture_of_a_Dog%2C_%22Doggo%22%2C_%22Pupper%22.jpg') no-repeat center center/cover;
}

.middle .stories .story:nth-child(2) {
  background: url('https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMTIyNjAwNi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY5OTY2MTQ4MH0.1PVYDbllnhhnjkRnR3Q61Ql01x-FwzMD54iezo4vcKM/img.jpg?width=980') no-repeat center center/cover;
}

.middle .stories .story:nth-child(3) {
  background: url('https://images.immediate.co.uk/production/volatile/sites/4/2022/06/GettyImages-1282300125-2f3f54a.jpg?quality=90&resize=768,574') no-repeat center center/cover;
}

.middle .stories .story:nth-child(4) {
  background: url('https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500') no-repeat center center/cover;
}

.middle .stories .story:nth-child(5) {
  background: url('https://ontariospca.ca/wp-content/uploads/2021/04/pexels-zen-chung-5749136.jpg') no-repeat center center/cover;
}

.middle .stories .story:nth-child(6) {
  background: url('https://th-thumbnailer.cdn-si-edu.com/HPJknxrd4UYT-wjN0a32vyr-0cQ=/1072x720/filters:no_upscale():focal(3008x2005:3009x2006)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/6b/c3/6bc305cb-95dd-4e22-b45b-108c6e218200/gettyimages-1144833913.jpg') no-repeat center center/cover;
}

.middle .story .profile-photo img {
width: 100%;
  height: 100%;
}

.middle .story .profile-photo {
  width: 2rem;
  height: 2rem;
  align-self: start;
  border: 2px solid var(--color-primary);
}



/*----------- CREATE POST ----------------*/

/* Pop-up styles */
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

#uploaded-image {
  max-width: 45%;
  max-height: 45%;
  margin-top: 25px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 3px solid var(--color-primary);
}

      .popup {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
      }

      .popup-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
         width: 50%;
        height: 500px;
         border-radius: 5px;
         padding: 3rem;
        display: flex;
        text-align: center;
  justify-content: center;
  align-items: center;
      }

      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 50px;
        font-weight: bolder;
        cursor: pointer;
        color: var(--color-danger);
      }

      .custom-file-upload {
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
        border-radius: 4px;
        background-color: transparent;
        color: white;
      }

      #post-image {
        display: none;
      }

 .middle .create-post .search-bar input[type="text"]::placeholder {
  color: var(--color-gray);
}

.custom-file-upload {
  display: inline-block;
  color: black;
  border: none;
  padding: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.custom-file-upload i {
  font-size: 1.5rem;
  color: var(--color-gray);
}

.custom-file-upload input[type="file"] {
  display: none;
}


#post-image {
  color: transparent;
}

.middle .create-post {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  background: var(--color-white);
  padding: 0.4rem var(--card-padding);
  border-radius: var(--border-radius);
}

.middle .create-post input[type='text'] {
  justify-self: start;
  width: 100%;
  padding-left: 1rem;
  background: transparent;
  color: var(--color-dark);
  margin-right: 1rem;
}

/* ----------------- FEEDS -------------------- */ 

.middle .feeds .feed {
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  margin: 1rem 0;
  font-size: 0.85rem;
  line-height: 1.5;
}

.middle .feed .head {
  display: flex;
  justify-content: space-between;
}

.middle .feed .user {
  display: flex;
  gap: 1rem;
}

.middle .feed .photo {
  border-radius: var(--card-border-radius);
  overflow: hidden;
  margin: 0.7rem 0;
}

.middle .feed .action-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  margin: 0.6rem;
}

 .middle .feed .action-buttons .interaction-buttons span:hover {
    cursor: pointer;
  }
.middle.feed .action-buttons .interaction-buttons span:hover i {
    transition: color 0.2s ease-in-out;
  }
  .middle .feed .action-buttons .interaction-buttons span:nth-child(1):hover i {
    color: #FF69B4;
  }
  .middle .feed .action-buttons .interaction-buttons span:nth-child(2):hover i {
    color: #2196f3;
  }
  .middle .feed .action-buttons .interaction-buttons span:nth-child(3):hover i {
    color: #4caf50;
  }

.middle .feed .highlight {
  background-color: yellow;
  font-weight: bold;
}


/* --------------------------- RIGHT ---------------- */ 
main .container .right {
  height: max-content;
  position: sticky;
  top: var(--sticky-top-left);
}

category {
    display: flex;
    justify-content: center;
  }

  .right .category h6 {
    margin: 0 20px;
    cursor: pointer;
  }


  .right .active {
    color: var(--color-primary);
  }

  .right .hashtag-container {
    display: block;
    justify-content: space-between;
  }

.right .hashtag {
    display: none;
  }

 .right .active.hashtag {
    display: block;
   color: var(--color-dark);
  }

.right .hashtags .hashtag:not(.active) {
  display: none;
}

.right .hashtags {
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
}

.right .hashtags .heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.right .hashtags i {
  font-size: 1.4rem;
}

.right .hashtags .search-bar {
  display: flex;
  margin-bottom: 1rem;
}

.right .hashtags .category {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.category-container {
    display: none;
  }

.right .hashtags .category h6 {
  width: 100%;
  text-align: center;
  border-bottom: 4px solid var(--color-light);
  padding-bottom: 0.5rem;
  font-size: 0.85rem;
}

.right .hashtags .category .active {
  border-color: var(--color-dark);
}

.right .hashtags .hashtag {
  display: block;
  margin-bottom: 1rem;
  align-items: start;
  padding-top: 4px;
  padding-bottom: 5px;
  font-weight: bold;
}

.right .hashtags .hashtag:last-child {
  margin: 0;
}

.right .hashtags .hashtag:hover {
  color: var(--color-primary);
}

/* ----------------- CUSTOMIZATION ------------------ */
.customize-theme {
  background: rgb(255, 255, 255, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: center;
  display: grid;
  place-items: center;
  font-size: 0.9rem;
  display: none;
}

.customize-theme .card {
  background-color: var(--color-white);
  padding: 3rem;
  border-radius: var(--card-border-radius);
  width: 50%;
  box-shadow: 0 0 1rem var(--color-primary);
}

/* -------------- FONT SIZE ------------- */ 
.customize-theme .font-size {
  margin-top: 5rem;
}

.customize-theme .font-size > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-light);
  padding: var(--search-padding);
  border-radius: var(--card-border-radius);
}

.customize-theme .choose-size {
  background: var(--color-secondary);
  height: 0.3rem;
  width: 100%;
  margin: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.customize-theme .choose-size span {
  width: 1rem;
  height: 1rem;
  background: var(--color-secondary);
  border-radius: 50%;
  cursor: pointer;
}

.customize-theme .choose-size span.active {
  background: var(--color-primary);
}

/* --------------------- */ 
.customize-theme .colour {
  margin-top: 2rem;
}

.customize-theme .choose-colour {
  background: var(--color-light);
  padding: var(--search-padding);
  border-radius: var(--card-border-radius);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.customize-theme .choose-colour span {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
}

.customize-theme .choose-colour span:nth-child(1) {
  background: hsl(252, 75%, 60%);
}

.customize-theme .choose-colour span:nth-child(2) {
  background: hsl(52, 75%, 60%);
}

.customize-theme .choose-colour span:nth-child(3) {
  background: hsl(22, 75%, 60%);
}

.customize-theme .choose-colour span:nth-child(4) {
  background: hsl(152, 75%, 60%);
}

.customize-theme .choose-colour span:nth-child(5) {
  background: hsl(202, 75%, 60%);
}

.customize-theme .choose-colour span.active {
  border: 5px solid white;
}

/* ----------------- BACKGROUND ---------------- */ 
.customize-theme .background {
  margin-top: 2rem;
}

.customize-theme .choose-bg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.customize-theme .choose-bg > div {
  padding: var(--card-padding);
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.4rem;
  cursor: pointer;
}

.customize-theme .choose-bg > div.active {
  border: 2px solid var(--color-primary);
}

.customize-theme .choose-bg .bg-1 {
  background: white;
  color: black;
}

.customize-theme .choose-bg .bg-2 {
  background: hsl(252, 30%, 17%);
  color: white;
}

.customize-theme .choose-bg .bg-3 {
  background: hsl(252, 30%, 10%);
  color: white;
}

.customize-theme .choose-bg > div span {
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--color-gray);
  border-radius: 50%;
  margin-right: 1rem;
}

/* MEDIA QUERIES FOR SMALL LAPTOPS & BIG TABLETS */ 
@media screen and (max-width:  1200px) {
  .container {
    width: 96%;
  }

  main .container {
    grid-template-columns: 5rem auto 30vw;
    gap: 1rem;
  }

  .left {
  margin-top: 18rem;
  width: 5rem;
  z-index: 5;
}


  main .container .left .profile {
    display: none;
  }

  .sidebar h3 {
    display: none;
  }

  .left .btn {
    display: none;
  }

  .customize-theme .card {
    width: 80vw;
  }
  
}

/* MEDIA QUERIES FOR PHONES & SMALL TABLETS */ 
@media screen and (max-width:  992px) {
  nav .search-bar {
    display: none;
  }

  main .container {
    grid-template-columns: 0 auto 6rem;
    gap: 0;
  }

  main .container .left {
    grid-column: 3/4;
    position: fixed;
    bottom: 0;
    right: 0;
  }

  /* ----------- POPUP --------------- */
  .left .notifications-popup {
    position: absolute;
    left: -20rem;
    width: 20rem;
  }

   .left .notifications-popup::before {
    position: absolute;
    top: 1.3rem;
    left: calc(20rem - 0.6rem);
    display: block;
  }

  main .container .middle {
    grid-column: 1/3;
  }

  main .container .right {
    display: none;
  }
  
 .customize-theme {
  background: rgb(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: center;
  display: grid;
  place-items: center;
  font-size: 0.9rem;
  display: none;
}
   .customize-theme .choose-bg {
    flex-wrap: wrap;
  }

}
