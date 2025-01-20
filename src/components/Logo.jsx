function Logo() {
  return (
    <div className='relative flex items-center gap-1'>
    <a href="/" aria-label="Homepage">
      <img src="/icon.png" className="w-[120px] md:w-[200px]" alt="Logo" />
    <img
    src="flag.gif"
    className="size-16 opacity-55 transfor -rotate-3 absolute mix-blend-multiply -top-2 -left-1 w-full -z-10 transform rotate-10" // Slight tilt
    alt="Flag"
    />
    </a>
    </div>
  );
}

export default Logo;
