import NavBar from "../ui/nav-bar";
import { yusei } from "@/app/ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${yusei.className} flex h-screen flex-col`}>
      <NavBar />
      <div className="flex-grow">{children}</div>
    </div>
  );
}
