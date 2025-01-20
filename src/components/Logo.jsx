function Logo() {
  return (
    <div className='flex items-center gap-1'>
    <a href="/" aria-label="Homepage">
      <img src="/icon.png" className="w-[120px] md:w-[260px]" alt="Logo" />
    </a>
    </div>
  );
}

export default Logo;
