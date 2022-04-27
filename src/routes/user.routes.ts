import { Router, Request, Response} from 'express';
import userService from '../services/user.service';


const router = Router();



router.get('/', (req: Request, res: Response) => {
  const users = userService.getAllUser(); 
  res.send(users)
})

router.get('/:id', (req: Request, res: Response) => {
  const user = userService.getUserById(parseInt(req.params.id));
  if(!user){
    res.status(404).send('Não encontrado!')
  }
  res.send(user)
})

router.post('/', (req: Request, res: Response) => {
     userService.create(req.body)
   
    res.status(201).send('Criado com sucesso!')
})

router.put('/:id', (req: Request, res: Response) => {
  const userIndex = userService.getByFindIndex(parseInt(req.params.id))
  if(userIndex === -1){
   return res.status(404).send('Não encontrado!')
  }else {
    userService.update(userIndex, req.body)
    res.status(200).send('Sucesso')
  }
})

router.delete('/:id', (req: Request, res:Response) => {
  const indexUser = userService.getByFindIndex(parseInt(req.params.id))
  if(indexUser === -1){
    res.status(404).send('não encontrado')
  }else {
    userService.deleteUser(indexUser)
    res.status(200).send('sucesso')
  }
})
export default router;