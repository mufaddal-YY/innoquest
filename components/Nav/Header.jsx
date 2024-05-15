"use client";
import React from "react";
import { Logo } from "@/lib/Icons";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";

const Header = () => {
  return (
    <main className="bg-primary fixed w-full top-0 z-[1000]">
      <nav className="container py-3 ">
        <article className="flex flex-row justify-between items-center gap-4">
          <div className="flex flex-row justify-between items-center gap-4">
            <div>
              <Link href="/">{Logo}</Link>
            </div>

            <div className="list-none lg:flex flex-row justify-between items-center hidden">
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href={"/employer-services"}>
                        <NavigationMenuTrigger>
                          Employer Services
                        </NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="bg-[#222631] w-[350px] p-2 text-white border-[#222631]">
                          <Link href={"/employer-services/#executive-search"}>
                            <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                              Executive Search Solutions
                            </li>
                          </Link>
                          <Separator className="my-2" />
                          <Link
                            href={"/employer-services/#professional-search"}>
                            <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                              Professional Search Solutions
                            </li>
                          </Link>

                          <Separator className="my-2" />
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Niche Hiring
                          </li>
                          <Separator className="my-2" />
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Recruitment Efficiency Solutions
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>

              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href={"/career-services"}>
                        <NavigationMenuTrigger>
                          Career Services
                        </NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="bg-[#222631] w-[350px] px-2 py-2 text-white border-[#222631]">
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Career Opportunities
                          </li>
                          <Separator className="my-2" />
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Career Compass
                          </li>
                          <Separator className="my-2" />
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Professional Portfolio Crafting
                          </li>
                          <Separator className="my-2" />
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Career Accelerator Program
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>

              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href={"/about"}>
                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="bg-[#222631] w-[350px] px-2 py-2 text-white border-[#222631]">
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Our Story
                          </li>
                          <Separator className="my-2" />
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Advantage InnoQuest
                          </li>
                          <Separator className="my-2" />
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Industries
                          </li>
                          <Separator className="my-2" />
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Leadership Team
                          </li>
                          <Separator className="my-2" />
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Our Teams
                          </li>
                          <Separator className="my-2" />
                          <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                            Values
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>

              {/* <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href="/join-us" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}>
                          Join Us
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li> */}
            </div>
          </div>
          <div className="justify-end flex lg:hidden z-[1002]">
            <Sheet className="bg-[#222631]">
              <SheetTrigger asChild>
                <AlignJustify className="text-white cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="bg-[#222631]">
                <div className="grid gap-4 py-4 list-none bg-[#222631] mt-14">
                  <div className="z-50">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            <span className="z-30">Employer Services</span>
                          </NavigationMenuTrigger>

                          <NavigationMenuContent>
                            <ul className="bg-[#222631] w-[350px] p-2 text-white border-[#222631] z-50">
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Executive Search Solutions
                                </li>
                              </SheetClose>
                              <Separator className="my-2" />
                              <SheetClose>
                                {" "}
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Professional Search Solutions
                                </li>
                              </SheetClose>

                              <Separator className="my-2" />
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Niche Hiring
                                </li>
                              </SheetClose>

                              <Separator className="my-2" />
                              <SheetClose>
                                {" "}
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Recruitment Efficiency Solutions
                                </li>
                              </SheetClose>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>

                  <div className="z-40">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            <span className="z-30">Career Services</span>
                          </NavigationMenuTrigger>

                          <NavigationMenuContent>
                            <ul className="bg-[#222631] w-[350px] p-2 text-white border-[#222631] z-50">
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Career Opportunities
                                </li>
                              </SheetClose>
                              <Separator className="my-2" />
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Career Compass
                                </li>
                              </SheetClose>

                              <Separator className="my-2" />
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Professional Portfolio Crafting
                                </li>
                              </SheetClose>

                              <Separator className="my-2" />
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Career Accelerator Program
                                </li>
                              </SheetClose>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>

                  <div className="z-30">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>About</NavigationMenuTrigger>

                          <NavigationMenuContent>
                            <ul className="bg-[#222631] w-[350px] p-2 text-white border-[#222631]">
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Our Story
                                </li>
                              </SheetClose>

                              <Separator className="my-2" />
                              <SheetClose>
                                {" "}
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Advantage InnoQuest
                                </li>
                              </SheetClose>

                              <Separator className="my-2" />
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Industries
                                </li>
                              </SheetClose>

                              <Separator className="my-2" />
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Leadership Team
                                </li>
                              </SheetClose>

                              <Separator className="my-2" />
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Our Teams
                                </li>
                              </SheetClose>

                              <Separator className="my-2" />
                              <SheetClose>
                                <li className="bg-[#222631] p-2 rounded-sm hover:bg-[#282c38] cursor-pointer">
                                  Values
                                </li>
                              </SheetClose>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>

                  {/* <div className="z-20">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <Link href="/join-us" legacyBehavior passHref>
                            <SheetClose>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}>
                                Join Us
                              </NavigationMenuLink>
                            </SheetClose>
                          </Link>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div> */}
                  <div className="z-20">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <Link href="/contact" legacyBehavior passHref>
                            <SheetClose>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}>
                                Contact
                              </NavigationMenuLink>
                            </SheetClose>
                          </Link>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex">
            <Link href="/contact">
              <Button className="bg-[#E36C0A] rounded-full">Contact us</Button>
            </Link>
          </div>
        </article>
      </nav>
    </main>
  );
};

export default Header;
