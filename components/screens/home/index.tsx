import { DeployButton } from "@/components/deploy";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Rohan Singh (rnsh)</h1>
            <h2>Designer & Developer</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          Currently working as a Design Engineer at{" "}
          <a href="https://bunqlabs.com">
            <em>BunqLabs</em>
          </a>
          , where I design and build innovative tools. I have a deep passion for
          software— whether it's web development, low-level systems, or just
          importing a Python library and instantly calling myself an AI engineer
          (hehe). Always experimenting, always learning—paving my way toward
          becoming a great software engineer.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
      <DeployButton />
    </FadeIn.Container>
  );
}
