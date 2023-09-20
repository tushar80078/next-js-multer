import { NextResponse } from "next/server";

export const trialControllers=(req,params)=>{
    console.log("files",req.file);

    console.log("Controller executed : 1 ------------------------------------");

    return NextResponse.json({
        value:"Tria Controller exectued 1 ------------------------------------"
    })

}