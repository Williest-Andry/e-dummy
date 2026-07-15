"use client";

import { Bell, Menu, Search, SquarePen } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { useAuthStore } from "@/store/auth/auth-store";
import Image from "next/image";

export default function NavBar() {
  const { image } = useAuthStore();

  return (
    <nav className="flex justify-between items-center mt-2 px-6">
      <div className="flex gap-6 items-center">
        <Menu size={50} />
        <strong className="text-3xl font-bold">DiumMe</strong>
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex items-center">
          <SquarePen size={30} />
          <p>write</p>
        </div>

        <Bell />

        <Image
          src={image ? image : "/empty-user.jpg"}
          alt="user icon"
          className="rounded-full"
          width={50}
          height={50}
        />
      </div>
    </nav>
  );
}
