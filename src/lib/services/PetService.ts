

export class PetService {
  
  constructor() {
    console.log('创建了PetService')
  }
  
  public async getAllPets(): Promise<Array<any>> {
    return [
      {
        name: 'Cat',
        color: 'White'
      },
      {
        name: 'Cat',
        color: 'Yellow'
      },
      {
        name: 'Cat',
        color: 'Black'
      }
    ]
  }
  
}
