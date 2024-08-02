import MaxWidthContainer from "../UI/MaxWidthContainer";

function Navbar() {
  return (
    <nav className="hidden md:block sticky h-20 w-full border-b backdrop-blur-sm text-foreground">
      <MaxWidthContainer>Navbar</MaxWidthContainer>
    </nav>
  );
}

export default Navbar;
