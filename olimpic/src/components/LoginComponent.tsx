"use client"
import {ChangeEvent, FormEvent, useState} from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { LoaderCircle } from 'lucide-react';
import { imgbb } from '@/lib/imgbb'
import { api } from '@/lib/api'
import Link from 'next/link'

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [newIcon, setNewIcon] = useState<string>("");

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: {value: string },
      password: {value: string },
      name: {value: string },
      icon: HTMLInputElement,
    };

    const email = target.email.value;
    const password = target.password.value;
    const name = target.name.value;
    const icon = target.icon.files? target.icon.files[0] : null;

    if(icon){
      setIsLoading(true);
      const imgbbData = await imgbb.upload(icon);

      switch(imgbbData.status){
        case 201: 
          const archive = {
            email,
            password,
            name,
            icon: imgbbData.responseSucess.thumb.url
          }
          await api.post("/auth/register", archive)
          .then((res)=>{
            console.log(res);
            setIsLoading(false);
          }).catch((err)=>{
            console.log(err);
            setIsLoading(false);
          })
          break;
        case 500:
          console.log(imgbbData.responseError);
          setIsLoading(false);
          break;
        case 401:
          console.log(imgbbData.responseError);
          setIsLoading(false);
          break;
      }
    }
  };

  const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      const url = URL.createObjectURL(e.target.files[0] as File);
      if(!url) return;
      setNewIcon(url);
    }
  }


  return (
    <Card className='w-80 min-h-40 p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <div className='w-full flex items-center justify-center'>
          <Label htmlFor="icon">
            <Input name='icon' id='icon' type='file' required className='hidden' onChange={(e)=>handleIconChange(e)}/>
            <img src={newIcon||"/user.png"} alt="user icon"  className='w-16 h-16  border rounded-full p-1'/>
          </Label>
        </div>
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input name='name' id='name' type='text' required placeholder='John Doe'/>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input name='email' id='email' type='email' required placeholder='email@email.com'/>
        </div>
        <div>
          <Label htmlFor="password">Senha</Label>
          <Input name='password' id='password' type='password' required placeholder='********'/>
        </div>
        <hr />
        <div>
          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading? <LoaderCircle size={24} className='animate-spin'/> : 'Entrar'}
          </Button>
          <small className='flex gap-1 items-center justify-center mt-2'>Não têm conta? <Link href="/register" className='text-blue-500'>Crie uma agora!</Link></small>
        </div>
      </form>
        
    </Card>
  )
}
