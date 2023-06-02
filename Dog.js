class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this
    return `
      <div>
        <img src="${avatar}" width="534" height="750" alt="The photo of dog">
        <div>${name}, ${age}</div>
        <div>${bio}</div>
      </div>
    `
  }
}

export default Dog