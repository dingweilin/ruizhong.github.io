import logo from '@/assets/images/logo.png';
const LogoSearch = () => {
  return (
    <div className="w-full flex justify-between items-center bg-{#fff} py-[15px] max-w-64 mx-auto">
      <div className='flex items-center' >
        <img className='w-[418px] h-[134px] object-contain' src={logo} alt="logo" />
      </div>
      <div className='lex flex-col items-end mr-[20px] '>
        <div className='flex w-[400px] h-[42px] border border-solid border-[#E0E0E0] rounded-[4px]
         overflow-hidden transition-shadow duration-300 ease-in-out'>
          <input className='flex-1 h-full px-[15px] outline-none text-[14px] text-[#333] ' type="text" placeholder='请输入搜索内容...' />
          <button className='w-[80px] h-full border-0 bg-[#4682B4] outline-none text-[14px] text-[#fff] flex items-center justify-center'>
            <i className='inline-block w-[16px] h-[16px] mr-[5px]' style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"
            }}></i>
            <span className='mr-[5px]'>搜索</span>
          </button>
        </div>
      </div>
    </div>
  )

}

export default LogoSearch;