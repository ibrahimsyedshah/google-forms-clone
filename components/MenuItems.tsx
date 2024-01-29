import { fetchMenuItems } from "@/lib/data";

async function MenuItems() {
    const menuItems = await fetchMenuItems('marker');
  return (
    <div
    className="flex flex-col border-y py-2"></div>
  )
}

export default MenuItems