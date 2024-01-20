
import Logo from "../Logo/Logo";
import classes from "./Navbar.module.css";
import cn from "@/utils/className";
import Image from "next/image";
import { ScrollButton } from "../ui";
import { useEffect, useState } from "react";

interface Data {
    links: {
      [key: string]: string
    },
    button: string,
}

const Navbar: React.FC<{data: Data}> = ({data}) => {
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    const linksArray = Object.values(data?.links);
    setLinks(linksArray);
  }, [data]);

  return (
    <section className={cn("w-full flex justify-center", classes.section)}>
      <nav className={cn("w-full py-[10px] mx-[10px] flex justify-between items-center", classes.logo)}>
        <div className={"flex items-center gap-[50px]"}>
          <Logo />
          <ul className={cn("flex gap-[20px] list-none", classes.list)}>
            {links?.map((link, index) => {
              return(
                <li key={index} className="cursor-pointer">{link}</li>  
              )
            })}
          
          </ul>
        </div>
          <div className={cn("w-[100px] m-5", classes.button)}>
            <ScrollButton link="#Contact">
              <Image
                className={cn("cursor-pointer", classes.img)}
                src="/icons/searchIcon.svg"
                alt="searchIcon"
                width={20}
                height={20}
              />
              <p className="px-2 whitespace-nowrap">{data?.button}</p>
            </ScrollButton>
          </div>
      </nav>
    </section>
  );
};

export default Navbar;
