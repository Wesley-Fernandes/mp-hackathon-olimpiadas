
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken"
import { db } from "@/lib/database";
import Env from "@/data/constants/env";


export async function POST(request:Request){
    
    try {
      const data = await request.json();

      const exist = await db.user.findUnique(
        {where:{
            email: data.email
        }, select: {
            password: true,
            id: true
        }});

      if(!exist){
        return NextResponse.json(
            { 
                title: "Falha ao tentar conectar",
                description: "Usuario não existe."
            }, {status: 401});
      }

      const valid = await compare(data.password, exist.password);

      if(!valid){
        return NextResponse.json({ 
                title: "Falha ao tentar conectar",
                description: "Dados inválidos. Por favor, tente novamente."
            }, {status: 401});
      }

      const token = sign({ id: exist.id }, Env.SECRET_PASS, { expiresIn: '1h' });

      cookies().set('token', token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
        path: '/'
      });

      return NextResponse.json({ title: "Sucesso ao tentar logar", description: "Já pode executar o login"}, {status: 201});
    } catch (error) {
      return Response.json({ error }, {status: 400});
    }
  }

  export async function DELETE(request:Request){
    cookies().set('token', '');
    return Response.json({ title: "Sucesso ao deslogar", description: "Você saiu do sistema."}, {status: 200});
  }