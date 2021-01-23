class EntityBase {
   #name
   #age
   #gender
   constructor({name, age, gender}) {

      this.#name = name
      this.#age = age
      this.#gender = gender

   }
   get name() {
      const preffix = this.#gender === 'male' ? 'Mr.' : 'Ms.'
      return `${preffix} ${this.#name}`
   }
   
}

module.exports = EntityBase