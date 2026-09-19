import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-6 rounded-t-[2rem] bg-[#071329] px-6 py-8 text-white sm:px-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-3xl font-black text-transparent">
            MH
          </span>

          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-slate-400">
              Graphic Designer · IQT Student
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-400">
          © 2026 Muhammad Hanafi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
