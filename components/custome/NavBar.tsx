

import React from 'react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function NavBar() {
  return (
    <div className='border-[2px]   border-white px-8 py-2 rounded-3xl top-5 fixed z-50'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>

            <BreadcrumbLink>
              <Link href="#AboutMe">About</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="#project">Project</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="#">Services</Link>
            </BreadcrumbLink>
          </BreadcrumbItem> */}

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="#experience">Experience</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="#skills">Skills</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="#contact">Contact</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
