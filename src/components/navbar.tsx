"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { logout, useAuthStore } from "@/store/auth/auth-store";
import {
  BadgeCheckIcon,
  Bell,
  House,
  Menu,
  Search,
  SquarePen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

export default function NavBar() {
  const { image } = useAuthStore();

  const [showMenu, setShowMenu] = useState(true);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex justify-between items-center mt-2 px-6 pb-2 border-b border-b-gray-200 sticky top-10 align-top">
      <div className="flex gap-6 items-center">
        <Drawer
          swipeDirection="left"
          modal={false}
          disablePointerDismissal
          defaultOpen={true}
        >
          <DrawerTrigger
            render={
              showMenu ? (
                <DrawerClose
                  render={
                    <Button variant={"secondary"} onClick={handleShowMenu}>
                      <Menu />
                    </Button>
                  }
                />
              ) : (
                <Button variant={"secondary"} onClick={handleShowMenu}>
                  <Menu />
                </Button>
              )
            }
          />
          <DrawerContent
            className={"ml-0 mt-16.5 border border-gray-200 rounded-none w-70"}
          >
            <Item
              variant="muted"
              size="sm"
              className="rounded-none pl-6 mt-10"
              render={
                <Link href={"/posts"}>
                  <ItemMedia>
                    <House />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="text-lg font-light">Home</ItemTitle>
                  </ItemContent>
                </Link>
              }
            />
          </DrawerContent>
        </Drawer>

        <strong className="text-3xl font-bold">DiumMe</strong>
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <SquarePen size={30} />
          <p>write</p>
        </div>

        <Tooltip>
          <TooltipTrigger>
            <Bell />
          </TooltipTrigger>
          <TooltipContent>
            <p>Notifications</p>
          </TooltipContent>
        </Tooltip>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Image
                src={image ? image : "/empty-user.jpg"}
                alt="user icon"
                className="rounded-full cursor-pointer"
                width={50}
                height={50}
              />
            }
          />
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className={"text-red-500"} onClick={logout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
