import { fetchMenuItems } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import docs from "@/public/icons/docs.png";
import forms from "@/public/icons/forms.png";
import sheets from "@/public/icons/sheets.png";
import slides from "@/public/icons/slides.png";

async function MenuItems() {
  const menuItems = await fetchMenuItems("sidebar");

  const iconMap = {
    Docs: docs,
    Forms: forms,
    Sheets: sheets,
    Slides: slides,
  };

  return (
    <div className="flex flex-col border-y py-2">
      {menuItems.pages //@ts-ignore
        .map((page) => (
          <Button
            key={page.id}
            asChild
            variant={"ghost"}
            className="justify-start px-6 w-[95%] gap-x-3 rounded-r-full"
          >
            <div>
              <Image
                src={
                  iconMap[page.localizeInfos.menuTitle as keyof typeof iconMap]
                }
                alt={page.localizeInfos.menuTitle}
                width={15}
                height={15}
              />
              <p>{page.localizeInfos.menuTitle}</p>
            </div>
          </Button>
        ))}
    </div>
  );
}

export default MenuItems;
