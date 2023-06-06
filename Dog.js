class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  setMatchStatus(bool) {
    this.hasBeenLiked = bool
    this.hasBeenSwiped = true
  }

  setBadgeImage() {
    const currentBadgeImg = this.hasBeenLiked ? "images/badge-like.png" : "images/badge-nope.png"
    return `<img src=${currentBadgeImg} width="627" height="312"/>`
  }

  getBadgeHtml() {
    const currentBadge = this.hasBeenSwiped ? this.setBadgeImage() : ""
    return `<div class="profile__badge">
              ${currentBadge}
            </div>`
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this
    const badge = this.getBadgeHtml()
    return `
      <div class="profile-wrapper">
        <div class="profile">
          <img class="profile__avatar" src="${avatar}" width="1068" height="1503" alt="The photo of dog">
          ${badge}
          <div class="profile__info">
            <h2 class="profile__title">${name}, ${age}</h2>
            <p class="profile__desc">${bio}</p>
          </div>
        </div>
      </div>
    `
  }
}

export default Dog