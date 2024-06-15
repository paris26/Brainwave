import { brainwave } from '../assets'
import { navigation } from '../constants/index.js'




const Header = () => {
  return (
    <div className="fixed top-0 z-50 backdrop-blur-sm bg-n8/90 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a href="#hero" className="block w-[12rem] xl:mr-8" >
                <img src={brainwave} width={190} height={40} alt="brainwave" />
            </a>
        
            <nav className='hidden fixed top-[rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                    {navigation.map((item) => (
                        <a key={item.id} href={item.url}>
                            {item.title}
                        </a>
                    ))}

                </div>
            </nav>
        
        </div>
    </div>
  )
}

export default Header
