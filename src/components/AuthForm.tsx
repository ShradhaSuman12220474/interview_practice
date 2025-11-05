"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { FormProvider, useForm } from "react-hook-form"
import * as z from "zod"
import FormField from "./FormField"
import { Button } from "./ui/button"
import Link from "next/link"
import { toast } from "sonner"

const authFormSchema = (type: FormType)=>{
    return z.object({
        name: type==='sign-up' ? z.string().min(3,"Minimun 3 char is required") : z.string().optional(),
        email: z.email(),
        password: z.string().min(3, "Length should be greater than 3")
    })
};

const AuthForm = ({type}:{type:FormType}) => {

    const signedIn = type === 'sign-in';
    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password:"",
    },
  })
   function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(data)
    try{
        // make an api call based on signedIn
        if(type === 'sign-in'){
            const {email,password} = data;
            // make an call 

            toast.success("signed In successfully");
        }
        else {
            const {name, email, password} = data;

            toast.success("signed Up successfully");
        }
    }
    catch(error){
        console.log(error);
        toast.error(`These was an error ${error}`);
    }
  }

  return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="logo" height={32} width={38}/>
                <h2 className="text-primary-100"> PrepWise</h2>
            </div>
            <h3>Practice Job Interview with AI</h3>
            <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                {/* now we have to show the form fields */}
                {!signedIn && <FormField control={form.control} 
                name="name" 
                label="Name" 
                placeholder="Your Name" 
                type="text" 
                />}
                <FormField control={form.control} 
                name="email" 
                label="Email" 
                placeholder="Your Email" 
                type="email" 
                />
                <FormField control={form.control} 
                name="password" 
                label="Password" 
                placeholder="Your Password" 
                type="password" 
                />
                <Button className="btn" type="submit">
                {signedIn ? "Sign In" : "Create an Account"}
                </Button>

            </form>
            </FormProvider>
            {signedIn? <p>Do not Have Account? 
                <Link className="font-bold text-user-primary ml-1" href={'/sign-up'}>
                Sign Up</Link> </p>
                : 
                <p>Already have an account? 
                    <Link className="font-bold text-user-primary ml-1" href={'/sign-in'}>Sign In</Link>
                    </p>}
        </div>
    </div>
  )
}

export default AuthForm