import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request)
{
     const isAuthorised = true;

     const privateRoutes = ["/auth/userhome","/auth"];

     const hasIncludes = privateRoutes.includes(request.nextUrl.pathname);

     if(hasIncludes)
     {
    
        if(isAuthorised)
        {
            return;
        }else{
            return NextResponse.redirect(new URL("/dashboard",request.url));
        }
     }

}

export const config ={
    matcher :[
       "/auth/:path*",
    "/dashboard/:path*"]
}