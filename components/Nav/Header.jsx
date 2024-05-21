"use client";
import React from "react";
import { useState } from "react";

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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { AlignJustify, ChevronDown } from "lucide-react";

const Header = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverOpen(false);
  };
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
                        <ul className="bg-white w-[350px] p-2 text-[#222631] border-[#222631]">
                          <Link href={"/employer-services/#executive-search"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Executive Search Solutions
                            </li>
                          </Link>
                          <Separator className="my-2" />
                          <Link
                            href={"/employer-services/#professional-search"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Professional Search Solutions
                            </li>
                          </Link>

                          <Separator className="my-2" />
                          <Link href={"/employer-services/#niche-hiring"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Niche Hiring
                            </li>
                          </Link>
                          <Separator className="my-2" />
                          <Link
                            href={"/employer-services/#recruitment-solutions"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Recruitment Efficiency Solutions
                            </li>
                          </Link>
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
                        <ul className="bg-white w-[350px] px-2 py-2 text-[#222631] border-[#222631]">
                          <Link href="/career-services/#career-opportunities">
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Career Opportunities
                            </li>
                          </Link>
                          <Separator className="my-2" />
                          <Popover open={isPopoverOpen}>
                            <PopoverTrigger asChild>
                              <li
                                className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                <Link
                                  className="flex items-center"
                                  href="/career-services/#career-enhancement">
                                  Career Enhancement Solution
                                  <ChevronDown
                                    className="relative top-[1px] ml-1 h-3 w-3 transition duration-200"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </li>
                            </PopoverTrigger>
                            <PopoverContent
                              className="bg-white w-[350px] mt-1 px-2 py-2 text-[#222631] rounded-lg border border-[#E36C0A]"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}>
                              <ul>
                                <Link href="/career-services/#career-compass">
                                  <li className="bg-white p-2 text-sm rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Career Compass
                                  </li>
                                </Link>
                                <Separator className="my-2" />
                                <Link href="/career-services/#portfolio-crafting">
                                  <li className="bg-white p-2 text-sm rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Professional Portfolio Crafting
                                  </li>
                                </Link>
                                <Separator className="my-2" />
                                <Link href="/career-services/#career-accelerator">
                                  <li className="bg-white p-2 text-sm rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Career Accelerator Program
                                  </li>
                                </Link>
                              </ul>
                            </PopoverContent>
                          </Popover>
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
                        <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="bg-white w-[350px] px-2 py-2 text-[#222631] border-[#222631]">
                          <Link href={"/about/#our-story"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Our Story
                            </li>
                          </Link>
                          <Separator className="my-2" />
                          <Link href={"/about/#advantage-innoquest"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Advantage InnoQuest
                            </li>
                          </Link>
                          <Separator className="my-2" />
                          <Link href={"/about/#industries"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Industries
                            </li>{" "}
                          </Link>
                          <Separator className="my-2" />
                          <Link href={"/about/#leadership"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Leadership Team
                            </li>{" "}
                          </Link>
                          <Separator className="my-2" />
                          <Link href={"/about/#team"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Our Teams
                            </li>{" "}
                          </Link>
                          <Separator className="my-2" />
                          <Link href={"/about/#our-values"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Our Values
                            </li>{" "}
                          </Link>
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
                      <Link href={"/"}>
                        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="bg-white w-[350px] px-2 py-2 text-[#222631] border-[#222631]">
                          <Link href={"/"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              IQ on Social Media
                            </li>
                          </Link>
                          <Separator className="my-2" />
                          <Link href={"/"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              IQ Insights
                            </li>
                          </Link>
                          <Separator className="my-2" />
                          <Link href={"/"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Newsroom
                            </li>{" "}
                          </Link>
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
                      <Link href={"/"}>
                        <NavigationMenuTrigger>
                          Work With Us
                        </NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="bg-white w-[350px] px-2 py-2 text-[#222631] border-[#222631]">
                          <Link href={"/"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Opportunities with IQ
                            </li>
                          </Link>
                          <Separator className="my-2" />
                          <Link href={"/contact"}>
                            <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                              Contact Us
                            </li>
                          </Link>
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
                            <ul className="bg-white w-[280px] lg:w-[350px] p-2 text-[#222631] border-[#222631] z-50">
                              <Link
                                href={"/employer-services/#executive-search"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Executive Search Solutions
                                  </li>
                                </SheetClose>
                              </Link>
                              <Separator className="my-2" />{" "}
                              <Link
                                href={
                                  "/employer-services/#professional-search"
                                }>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Professional Search Solutions
                                  </li>
                                </SheetClose>
                              </Link>
                              <Separator className="my-2" />
                              <Link href={"/employer-services/#niche-hiring"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Niche Hiring
                                  </li>{" "}
                                </SheetClose>
                              </Link>
                              <Separator className="my-2" />{" "}
                              <Link
                                href={
                                  "/employer-services/#recruitment-solutions"
                                }>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Recruitment Efficiency Solutions
                                  </li>
                                </SheetClose>{" "}
                              </Link>
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
                            <ul className="bg-white w-[280px] lg:w-[350px] p-2 text-[#222631] border-[#222631] z-50">
                              <Link
                                href={"/career-services/#career-opportunities"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Career Opportunities
                                  </li>
                                </SheetClose>
                              </Link>

                              <Separator className="my-2" />
                              <Popover open={isPopoverOpen}>
                                <PopoverTrigger>
                                  <li
                                    className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                                      
                                        Career Enhancement Solutions
                                    <ChevronDown
                                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200"
                                      aria-hidden="true"
                                    />
                                      
                                    
                                  </li>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="bg-white w-[280px] mt-1 px-2 py-2 text-[#222631] rounded-lg border border-[#E36C0A]"
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}>
                                  <ul>
                                    <Link
                                      href={"/career-services/#career-compass"}>
                                      <SheetClose>
                                        <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                          Career Compass
                                        </li>
                                      </SheetClose>
                                    </Link>

                                    <Separator className="my-2" />

                                    <Link
                                      href={
                                        "/career-services/#portfolio-crafting"
                                      }>
                                      <SheetClose>
                                        <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                          Professional Portfolio Crafting
                                        </li>
                                      </SheetClose>{" "}
                                    </Link>

                                    <Separator className="my-2" />

                                    <Link
                                      href={
                                        "/career-services/#career-accelerator"
                                      }>
                                      <SheetClose>
                                        <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                          Career Accelerator Program
                                        </li>
                                      </SheetClose>
                                    </Link>
                                  </ul>
                                </PopoverContent>
                              </Popover>
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
                            <ul className="bg-white w-[250px] lg:w-[350px] p-2 text-[#222631] border-[#222631]">
                              <Link href={"/about/#our-story"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Our Story
                                  </li>
                                </SheetClose>
                              </Link>

                              <Separator className="my-2" />
                              <Link href={"/about/#advantage-innoquest"}>
                                <SheetClose>
                                  {" "}
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Advantage InnoQuest
                                  </li>{" "}
                                </SheetClose>
                              </Link>

                              <Separator className="my-2" />
                              <Link href={"/about/#industries"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Industries
                                  </li>{" "}
                                </SheetClose>
                              </Link>

                              <Separator className="my-2" />
                              <Link href={"/about/#leadership"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Leadership Team
                                  </li>{" "}
                                </SheetClose>{" "}
                              </Link>

                              <Separator className="my-2" />
                              <Link href={"/about/#team"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Our Teams
                                  </li>{" "}
                                </SheetClose>{" "}
                              </Link>

                              <Separator className="my-2" />
                              <Link href={"/about/#our-values"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Our Values
                                  </li>{" "}
                                </SheetClose>{" "}
                              </Link>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>

                  <div className="z-20">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <Link href={"/"}>
                            <NavigationMenuTrigger>
                              Resources
                            </NavigationMenuTrigger>
                          </Link>
                          <NavigationMenuContent>
                            <ul className="bg-white w-[250px] lg:w-[350px] px-2 py-2 text-[#222631] border-[#222631]">
                              <Link href={"/"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    IQ on Social Media
                                  </li>
                                </SheetClose>{" "}
                              </Link>

                              <Separator className="my-2" />

                              <Link href={"/"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    IQ Insights
                                  </li>
                                </SheetClose>
                              </Link>

                              <Separator className="my-2" />

                              <Link href={"/"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Newsroom
                                  </li>{" "}
                                </SheetClose>
                              </Link>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>

                  <div className="z-10">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <Link href={"/"}>
                            <NavigationMenuTrigger>
                              Work With Us
                            </NavigationMenuTrigger>
                          </Link>
                          <NavigationMenuContent>
                            <ul className="bg-white w-[250px] lg:w-[350px] px-2 py-2 text-[#222631] border-[#222631]">
                              <Link href={"/"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Opportunities with IQ
                                  </li>
                                </SheetClose>
                              </Link>

                              <Separator className="my-2" />

                              <Link href={"/"}>
                                <SheetClose>
                                  <li className="bg-white p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                                    Contact Us
                                  </li>
                                </SheetClose>
                              </Link>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>

                  <div className="z-6">
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
