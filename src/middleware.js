import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const middleware = async (request) => {
    const token = cookies(request).get('next-auth.session-token')
    console.log(token);
    

    if (!token) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/about'],
}




// export const middleware = (request) => {
//   return NextResponse.rewrite(new URL('/about/mission', request.url))
// }

// export const config = {
//   matcher: '/about',
// }




// const user = false;

// export const middleware = (request) => {
//   const cookies = request.cookies.get('token')
//   if(!cookies){
//     return NextResponse.redirect(new URL('/login', request.url))
//   }
//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/dashboard', '/services'],
// }