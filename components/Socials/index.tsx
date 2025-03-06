import Link from "@/components/link";
import { AppThemeSwitcher } from "@/components/theme";

import { Github, Mail, Twitter } from "lucide-react";

const Socials = () => {
  return (
    <div className="flex justify-between">
      <div className="px-[2px] text-muted">
        <h2>Socials</h2>
      </div>
      <div className="text-muted text-small flex gap-4">
        <a href="https://github.com/rohan-pckg">
          <Github width={13} />
        </a>
        <a href="https://x.com/rnsh_space">
          <Twitter width={13} />
        </a>
        <a href="mailto:rnsh.space@gmail.com">
          <Mail width={13} />
        </a>
      </div>
    </div>
  );
};

export { Socials };
