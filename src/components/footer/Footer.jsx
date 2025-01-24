import logo from '../../assets/logo.svg'
import icon1 from '../../assets/icons/check.svg'

const Footer = () => {
  return (
    <div className="bg-[#151515]">
      <div className="max-w-[1140px] mx-auto py-12 grid lg:grid-cols-4 md:grid-cols-2 gap-12 text-white">

        <div className='flex flex-col gap-4 w-[260px] mr-12'>
          <img className='max-w-[120px]' src={logo} alt="" />
          <p>Edwin Diaz is a software and web technologies engineer, 
            a life coach trainer who is also a serial .</p>
            <div className='flex gap-4'>
              <img className='max-w-[24px]' src={icon1} alt="" />
              <img className='max-w-[24px]' src={icon1} alt="" />
              <img className='max-w-[24px]' src={icon1} alt="" />
              <img className='max-w-[24px]' src={icon1} alt="" />
            </div>
        </div>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-semibold'>About</h2>
          <div className='flex flex-col gap-4'>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
          </div>
        </div>
        
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-semibold'>About</h2>
          <div className='flex flex-col gap-4'>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
          </div>
        </div>
        
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-semibold'>About</h2>
          <div className='flex flex-col gap-4'>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer