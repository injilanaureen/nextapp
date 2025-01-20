function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 z-10">
      <img
        src="/icon.png"
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        className="transform rotate-3" // Slight tilt
      />
      <span className="text-xl font-semibold text-primary-100">
        PeUnique
      </span>
      <img
        src="flag.gif"
        className="size-10 transform rotate-10" // Slight tilt
        alt="Flag"
      />
    </a>
  );
}

export default Logo;
