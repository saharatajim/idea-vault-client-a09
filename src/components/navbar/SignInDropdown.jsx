import {Avatar} from "@heroui/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export function SignInDropdown({session}) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        <div className=" rounded-2xl  flex items-center gap-5"> 
              <Avatar className="scale-90">
        <Avatar.Image  alt="John Doe" src={session?.user?.image}/>
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar> </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href={'/profile'}>Profile</Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
    
          <DropdownMenuItem >
           <div>

             <button onClick={async()=>{await authClient.signOut();
              toast("sign out successfully completed")
             }}>  <Link href={'/'}> Log out</Link></button>
           
           </div>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
