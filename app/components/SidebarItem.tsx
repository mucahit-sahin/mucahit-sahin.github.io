import Link from "next/link";

function SidebarItem({
  text,
  href,
  active,
  Icon,
}: {
  text: string;
  href: string;
  active?: boolean;
  Icon: React.ElementType;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center w-min ${
        active ? "rounded-full text-blue-500 hover:text-white" : ""
      }  hover:rounded-full hover:bg-blue-600`}
    >
      <Icon size={24} className="m-4" />
      <span
        className={`mr-5 ml-auto text-lg font-bold leading-6 ${
          active ? "text-blue-500" : "text-white"
        } `}
      >
        {text}
      </span>
    </Link>
  );
}
//veya işareti = || ile değiştirilebilir
export default SidebarItem;
