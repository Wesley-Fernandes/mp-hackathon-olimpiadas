import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { cookies } from "next/headers";
import {hash} from "bcrypt"
import { db } from "@/lib/database";


export async function POST(request:Request){
    
    try {
      const data = await request.json();

      const exist = await db.user.findUnique({
        where:{
            email: data.email
        }, select: {
            id: true
        }});

      if(!exist){
        return NextResponse.json({ 
                title: "Falha ao tentar registar",
                description: "Usuario já existe."
            }, {status: 401});
      }

      const hashed = await hash(data.password, 10); 

      await db.user.create({
        data: {
            email: data.email,
            password: hashed,
        }
      })


      return NextResponse.json({ title: "Sucesso ao tentar logar", description: "Já pode executar o login"}, {status: 201});
    } catch (error) {
      return Response.json({ error }, {status: 400});
    }
  }

  export async function DELETE(request:Request){
    cookies().set('token', '');
    return Response.json({ title: "Sucesso ao deslogar", description: "Você saiu do sistema."}, {status: 200});
  }