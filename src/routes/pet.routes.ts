import { Router, Request, Response } from 'express';
import UserService from '../services/user.service';
import PetService from '../services/pet.service';
import petService from '../services/pet.service';
import userService from '../services/user.service';

const router = Router();





router.get('/:id/pets', (req: Request, res: Response) => {
  const user = UserService.getUserById(parseInt(req.params.id));
  if(!user?.pet){
    res.status(404).send('Não encontrado!')
  }
  res.status(200).send(user?.pet)
})


router.get('/:id/pets/:idPet', (req: Request, res: Response) => {
  const user = UserService.getByFindIndex(parseInt(req.params.id));  
  const pet = PetService.getPetById(user, parseInt(req.params.idPet))
  if(!pet){
    res.status(404).send('Não encontrado!')
  }
  res.status(200).send(pet)
}
)

router.post('/:id/pets', (req: Request, res: Response) => {
  const idUser = UserService.getByFindIndex(parseInt(req.params.id));
  if(idUser === -1){
    res.status(404).send('Não encontrado!')
  }else {
    PetService.createPet(idUser, req.body) 
    res.status(201).send('Criado com sucesso!')
  }
})


router.put('/:id/pets/:idPet', (req: Request, res: Response) => {
  const idUser = UserService.getByFindIndex(parseInt(req.params.id))
  console.log(`route: ${idUser}`)

  const idPet = PetService.getPetByFindIndex(idUser, parseInt(req.params.idPet))
  console.log(`route: ${idPet}`)

if(!idPet){
  res.status(404).send('Não encontrado')
}
 const petUpdate = petService.updatePet(idUser, idPet, req.body)
console.log(`caca: ${petUpdate}`)

 res.send('criado')
})

router.delete('/:id/pets/:idPet', (req: Request, res: Response) => {
  const indexUser = UserService.getByFindIndex(parseInt(req.params.id))
  console.log(`route: ${indexUser}`)
  const indexPet = petService.getPetByFindIndex(indexUser, parseInt(req.params.idPet))
  console.log(indexPet)
if(indexPet === -1){
  res.status(404).send('não encontrado')
}else {
  petService.deletePet(indexUser, Number(indexPet))
}
res.send('sucesso')
 
})  


export default router;