export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{background: 'linear-gradient(180deg, #fff0f5 0%, #ffffff 100%)'}}>
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide" style={{color: '#e75480'}}>Цвет, который вдохновляет</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Розовый — это не просто цвет. Это настроение, нежность и сила. Он присутствует в природе, искусстве и нашей жизни каждый день.
        </p>
        <button className="text-white px-4 py-2 text-sm transition-all duration-300 cursor-pointer w-fit uppercase tracking-wide" style={{background: '#e75480', border: '1px solid #e75480'}}
          onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = 'white'; (e.target as HTMLButtonElement).style.color = '#e75480'; }}
          onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = '#e75480'; (e.target as HTMLButtonElement).style.color = 'white'; }}>
          Узнать больше
        </button>
      </div>
    </div>
  );
}