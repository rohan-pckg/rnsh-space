import Link from "@/components/link";
import { AppThemeSwitcher } from "@/components/theme";

const ThemeSwitcher = () => {
  return (
    <div>
      {/* <div className="px-[2px] text-muted text-small">
        Built with <Link href="https://nextjs.org/" text="Next.js" underline />
      </div> */}
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </div>
  );
};

export { ThemeSwitcher };
