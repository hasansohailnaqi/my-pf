import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let isLoggedIn =true;
  const path = request.nextUrl.pathname
  if(path==='/dashboard' && !isLoggedIn){
    return NextResponse.redirect(new URL ('/login', request.url))

  }
  else if(path==='/login' && isLoggedIn){
    return NextResponse.redirect(new URL('/dashboard' , request.url))
  }

  else{
    NextResponse.next()
  }
  
  }

 
