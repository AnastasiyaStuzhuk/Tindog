class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this
    return `
      <div class="profile-wrapper">
        <div class="profile">
          <img class="profile__avatar" src="${avatar}" width="1068" height="1503" alt="The photo of dog">
          <div class="profile__info">
            <h2 class="profile__title">${name}, ${age}</h2>
            <p class="profile__desc">${bio}</p>
          </div>
        </div>

        <div class="profile__buttons">
          <button id="button-reject" class="profile__button profile__button_reject" type="button">
            <span class="visually-hidden">Reject</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
              <path stroke="url(#red)" stroke-linecap="round" stroke-linejoin="round" stroke-width="8.922" d="M30.875 5 5 30.875M5 5l25.875 25.875"/>
              <defs>
                <linearGradient id="red" x1="33.552" x2="2.323" y1="2.769" y2="33.106" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#E82D70"/>
                  <stop offset="1" stop-color="#F06957"/>
                </linearGradient>
              </defs>
            </svg>
          </button>
          <button id="button-accept" class="profile__button profile__button_accept" type="button">
            <span class="visually-hidden">Like</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="36" fill="none">
              <path fill="url(#green)" d="M37.714 3.183a10.746 10.746 0 0 0-3.49-2.356 10.66 10.66 0 0 0-8.23 0 10.745 10.745 0 0 0-3.49 2.356l-2.072 2.093-2.072-2.093A10.7 10.7 0 0 0 10.755 0 10.7 10.7 0 0 0 3.15 3.183 10.918 10.918 0 0 0 0 10.863c0 2.882 1.133 5.645 3.15 7.682l2.072 2.093L20.432 36l15.21-15.362 2.072-2.093a10.867 10.867 0 0 0 2.332-3.524 10.954 10.954 0 0 0 0-8.314 10.868 10.868 0 0 0-2.332-3.524Z"/>
              <defs>
                <linearGradient id="green" x1="35.189" x2="11.496" y1="2.154" y2="25.613" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00D894"/>
                  <stop offset="1" stop-color="#56E9CD"/>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    `
  }
}

export default Dog