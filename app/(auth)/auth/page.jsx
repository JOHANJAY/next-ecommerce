"usse client";
import Logo from "@/components/logo";
import Link from "next/link";

const AuthPage = () => {
  return (
    <div className="wrapper min-h-screen flex items-center lg:justify-center bg-white lg:bg-background">
      <div className="lg:p-10 bg-white lg:shadow rounded-lg">
        <Link href={`/`} className="text-center text-3xl">
          <Logo />
        </Link>
        <div className="mt-10">
          <h2 className="font-extrabold">Sign in</h2>
          <p className="text-gray-700 text-sm mb-3">choose how you'd like to sign in</p>
          <button className="bg-blue-500 flex w-full items-center justify-center overflow-visible rounded">sign</button>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;
