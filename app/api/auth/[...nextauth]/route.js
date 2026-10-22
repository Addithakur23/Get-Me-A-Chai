import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"
import User from "@/models/User.js";

const authOptions={
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        GoogleProvider({
          clientId:process.env.GOOGLE_ID,
          clientSecret:process.env.GOOGLE_SECRET
        }),
         TwitterProvider({
          clientId:process.env.TWITTER_ID,
          clientSecret:process.env.TWITTER_SECRET
        })
        
    ]
    ,secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
    callbacks:{
        async jwt({token,account}){
            if(account) {
                token.provider=account.provider,
                token.providerAccountId=account.providerAccountId
            }
            return token
        },
        async session({session,user,token}){
            if (!session?.user) return session

            if (session.user.email) {
                const dbUser=await User.findOne({Email:session.user.email})
                if(dbUser){
                    session.user.username=dbUser.Username
                }
            }
            session.provider=token?.provider,
            session.providerAccountId=token?.providerAccountId
            console.log(session)
            return session
        }
    },
}

export {authOptions}
const handler=NextAuth(authOptions)

export {handler as GET,handler as POST}