import { NextResponse } from 'next/server';

// Mock data - replace with your Firebase logic
let testimonials: { id: number; name: string; company?: string; role?: string; email?: string; rating: number; message: string; createdAt: string }[] = [];

export async function GET() {
  try {
    // In a real app, you'd fetch this from Firebase
    return NextResponse.json(testimonials);
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, role, email, rating, message } = body;

    if (!name || !message || !rating) {
      return new NextResponse('Name, message, and rating are required', { status: 400 });
    }

    // In a real app, you'd save this to Firebase
    const newTestimonial = {
      id: testimonials.length + 1,
      name,
      company,
      role,
      email,
      rating,
      message,
      createdAt: new Date().toISOString(),
    };
    // testimonials.push(newTestimonial); // Add to the in-memory array for now

    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
