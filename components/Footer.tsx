export default function Footer() {
  return (
    <footer className="bg-[#f4f6f2] border-t border-[#556b2f] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#2f4f2f] text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Joseph Mmadubuike. All rights reserved.
        </p>
        <p className="mt-2 text-[#556b2f] text-sm sm:text-base">
          Contact:{" "}
          <a
            href="mailto:jmmadubuike@gmail.com"
            className="text-[#6b8b3d] hover:underline"
          >
            jmmadubuike@gmail.com
          </a>{" "}
          | +234 803 66 82 403
        </p>
      </div>
    </footer>
  );
}
