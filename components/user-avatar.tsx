"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";

interface UserAvatarProps {
  src?: string;
  className?: string;
}

const UserAvatar = ({ src, className }: UserAvatarProps) => {
  return (
    <div>
      <Avatar>
        <AvatarImage
          src={src}
          className={cn("h-7 w-7 md:h-10 md:w-10", className)}
        />
      </Avatar>
    </div>
  );
};

export default UserAvatar;
