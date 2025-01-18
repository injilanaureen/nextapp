"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/nav-bar";
import { cn } from "@src/lib/utils";

export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Main Page</HoveredLink>

          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} href="/product" item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Online Payment Gateway"
              href="https://algochurn.com"
              src="/online-payment-svgrepo-com.svg"
              description="Enjoy the hassle-free online payments platform with PeUnique Payment Gateway." />
            <ProductItem
              title="Offline Payments"
              href="payment-method-svgrepo-com (2).svg"
              src="/payment-method-svgrepo-com (2).svg"
              description="India’s first B2B collection solution that enables businesses to collect payments" />
            <ProductItem
              title="B2B e-collect"
              href="https://gomoonbeam.com"
              src="/secure-payment-protection-svgrepo-com.svg"
              description="With PeUnique's eNACH, recurring payments can be processed and collected through e-mandates." />
            <ProductItem
              title="eNACH"
              href="https://userogue.com"
              src="/payment-visa-svgrepo-com.svg"
              description="Payouts enable quick and easy money transfers online" />
            <ProductItem
              title="Payment Links"
              href="https://userogue.com"
              src="/online-payment-svgrepo-com.svg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
            <ProductItem
              title="Payouts"
              href="https://userogue.com"
              src="/payment-method-svgrepo-com (2).svg"
              description="Payment Link is a link-based payment solution that lets businesses collect payments through various payment methods." />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Support">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>)
  );
}
