import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { hash } from "bcrypt"
import { db } from "@/lib/database";
import { userSchema } from "@/data/schema/user-type";


export async function POST(request:Request){
    
    try { 
      const data = await request.json();
      const parsed = userSchema.parse(data);

      const exist = await db.user.findUnique({where:{email: parsed.email}, select: {id: true}});

      if(!exist){
        return NextResponse.json({title: "Falha ao tentar registar", description: "Usuario já existe."}, {status: 401});
      }

      const hashed = await hash(parsed.password, 10); 

      await db.user.create({
        data: {
            email: parsed.email,
            password: hashed,
            name: parsed.name,
            icon: parsed.icon
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