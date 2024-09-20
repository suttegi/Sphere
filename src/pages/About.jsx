import React from 'react'
import label from '../assets/Rectangle 14.png'
import label2 from '../assets/Rectangle 15.png'

const About = () => {
  return (
    <div className='flex flex-col mx-[120px] items-center ' >
        <div className="flex flex-row  w-full justify-start space-x-[16px] mb-[32px]">
            <a href="#">Главная</a>
            <p>/</p>
            <a href="#">О нас</a>
        </div>
        <h1 className='text-center text-[32px] font-bold leading-[44px] max-w-[800px] mb-[32px]'>
        Lorem ipsum dolor <span className='text-[#344C56]'>sit amet</span> consectetur. Tristique sollicitudin odio <span className='text-[#344C56]'>viverra tincidunt</span>.
        </h1>

        <div className="flex justify-center space-x-[64px] my-[32px] max-w-[900px]">
            <p className='text-[#333333] text-[16px] max-w-[400px]'>Lorem ipsum dolor sit amet consectetur. Ultrices et dictumst feugiat amet auctor lobortis tempus arcu. Eget faucibus nibh volutpat tincidunt adipiscing tellus id nisi ullamcorper.</p>
            <p className='text-[#333333] text-[16px] max-w-[400px]'>Mattis risus viverra nisl sollicitudin arcu ornare. Morbi purus lectus dapibus neque non egestas condimentum gravida id.</p>
        </div>

        <div className='flex justify-center space-x-[64px] mb-[140px] '>
            <div className='flex flex-col items-center'>
                <h2 className='text-[36px] text-[#FF6600] font-bold'>10k+</h2>
                <p className='text-[#333333] text-[16px]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='text-[36px] text-[#FF6600] font-bold'>65</h2>
                <p className='text-[#333333] text-[16px]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='text-[36px] text-[#FF6600] font-bold'>150+</h2>
                <p className='text-[#333333] text-[16px]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>

        <div className='flex justify-between'>
            <img  className='w-[840px] h-[740px]' src={label} alt="label" />
            <div className='flex flex-col px-[120px] py-[160px] space-y-[32px]'>
                <h3 className='font-bold text-[30px] mb-[32px]'>Ipsum ultrices diam malesuada morbi ac diam viverra lorem diam.</h3>
                <p className='text-[17px]'>Mattis risus viverra nisl sollicitudin arcu ornare. Morbi purus lectus dapibus neque non egestas condimentum gravida id. Fermentum risus aliquam est id. Ornare augue habitasse eu ultrices turpis. Ut vitae sit amet adipiscing parturient pharetra condimentum. Facilisis bibendum rhoncus venenatis sollicitudin nisi bibendum odio vel. Amet adipiscing vel nulla commodo.</p>
                <p className='text-[20px]'>Lorem ipsum dolor sit amet consectetur. Ultrices et dictumst feugiat amet auctor lobortis tempus arcu. Eget faucibus nibh volutpat tincidunt adipiscing tellus duis nisl ullamcorper. Nulla neque vitae ipsum nascetur felis eu in massa duis. Blandit risus massa quis lectus sed urna suspendisse dictum non. Consectetur eget cursus sollicitudin neque nulla risus dignissim. </p>
            </div>
            
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col px-[120px] py-[160px] space-y-[32px]'>
                <h3 className='font-bold text-[30px] mb-[32px]'>Ipsum ultrices diam malesuada morbi ac diam viverra lorem diam.</h3>
                <p className='text-[17px]'>Mattis risus viverra nisl sollicitudin arcu ornare. Morbi purus lectus dapibus neque non egestas condimentum gravida id. Fermentum risus aliquam est id. Ornare augue habitasse eu ultrices turpis. Ut vitae sit amet adipiscing parturient pharetra condimentum. Facilisis bibendum rhoncus venenatis sollicitudin nisi bibendum odio vel. Amet adipiscing vel nulla commodo.</p>
                <p className='text-[20px]'>Lorem ipsum dolor sit amet consectetur. Ultrices et dictumst feugiat amet auctor lobortis tempus arcu. Eget faucibus nibh volutpat tincidunt adipiscing tellus duis nisl ullamcorper. Nulla neque vitae ipsum nascetur felis eu in massa duis. Blandit risus massa quis lectus sed urna suspendisse dictum non. Consectetur eget cursus sollicitudin neque nulla risus dignissim. </p>
            </div>
            <img  className=' w-[840px] h-[740px]' src={label2} alt="label" />
            
        </div>



        <div  className='flex flex-col mt-[140px] space-y-10 items-center w-[60%]'>
            <h1 className='font-bold text-[35px]'>Нас выбирают потому что</h1>
            <div className='flex flex-col space-y-5 '>
                <div className='flex flex-row justify-between space-x-9'>
                    <div className='flex flex-col space-y-4'>
                        <h3 className='font-semibold'>Нас выбирают за качество</h3>
                        <p>О нашем безупречном качестве и внимании к деталям. Мы тщательно контролируем каждый этап производства и обслуживания. Наши клиенты могут быть уверены в надежности и долговечности наших продуктов. </p>
                        <p>Мы всегда стремимся к совершенству и не останавливаемся на достигнутом. Выбирая нас, вы выбираете высокое качество и надежность.</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h3 className='font-semibold'>Наши ключевые достоинства</h3>
                        <p>Узнайте о наших ключевых особенностях и преимуществах. Мы предлагаем только проверенные и надежные решения. Наши специалисты обладают высоким уровнем профессионализма и опытом. </p>
                        <p>Мы гарантируем индивидуальный подход к каждому клиенту. Наши продукты и услуги соответствуют самым высоким стандартам качества. Мы стремимся быть лучшими во всем, что делаем.</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between space-x-4'>
                    <div className='flex flex-col space-y-4'>
                        <h3 className='font-semibold'>Причины выбрать нас</h3>
                        <p>Объективные факты и доводы, которые помогут вам сделать правильный выбор. Наша компания гарантирует высокое качество, честные цены и индивидуальный подход. Мы работаем на результат и всегда стараемся превзойти ожидания наших клиентов.</p>
                        <p>Наша репутация подтверждена годами успешной работы и тысячами довольных клиентов. Мы предлагаем решения, адаптированные под ваши потребности.</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h3 className='font-semibold'>Доверие клиентов к намя</h3>
                        <p>Как мы заработали доверие тысяч клиентов по всему миру. Наша репутация строится на честности, прозрачности и высоком качестве обслуживания. Мы всегда держим слово и выполняем все обязательства перед клиентами. </p>
                        <p>Благодаря этому мы заслужили доверие и лояльность наших клиентов. Мы всегда открыты для обратной связи и стремимся улучшать наши услуги. Ваше доверие - наша главная ценность.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About