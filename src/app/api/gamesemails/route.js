// app/api/users/route.js (O puedes cambiar el nombre de la carpeta a 'scores')

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// --- Función para OBTENER (GET) todos los puntajes ---
export async function GET(request) {
  try {
    // La consulta ahora selecciona datos de la tabla 'scores'
    const { rows } = await sql`SELECT email, score, created_at FROM scores ORDER BY score DESC;`;
    
    // Devuelve la lista de puntajes, ordenados del mayor al menor
    return NextResponse.json({ scores: rows }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// --- Función para REGISTRAR (POST) un nuevo puntaje o actualizar uno ---
export async function POST(request) {
  try {
    const { email, newScore } = await request.json(); 
    
    if (!email || typeof newScore === 'undefined') {
      return NextResponse.json({ error: "Email and score are required" }, { status: 400 });
    }

    // Usamos una consulta para insertar O actualizar si el email ya existe.
    // Esto es común cuando quieres registrar el puntaje de alguien que ya jugó.
    const result = await sql`
        INSERT INTO scores (email, score) 
        VALUES (${email}, ${newScore})
        ON CONFLICT (email) DO UPDATE 
        SET score = EXCLUDED.score;
    `;
    
    return NextResponse.json({ message: "Score registered/updated successfully" }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}