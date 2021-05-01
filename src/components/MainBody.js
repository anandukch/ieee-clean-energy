import './MainBody.css';
import Items from './Items';

const MainBody=()=>{
    
    
    return(
        <div className="main_body" >
            <div className="main_content">
                <h2>What Does Clean Energy Mean?</h2>
                <p>Clean energy is energy gained from sources that do release air pollutants, while green energy is energy derived from natural sources. There is a subtle difference between these two energy types even though they are often spoken of as being the same.

Renewable energy is power generated from sources that are constantly being replenished. These renewable energy resources won’t run out, unlike fossil fuels and gas, and include wind and solar energy.</p>
            </div>
            <h1>RESOURCES</h1>
            <Items title='Solar' imge='https://d1af89beukha9h.cloudfront.net/wp-content/uploads/2019/05/solar-energy-companies.jpg'/>
            <Items title='Water' imge='http://cleaneconomycenter.org/wp-content/uploads/2018/06/hartwell-dam.jpg'/>
            <Items title='Wind' imge='https://www.electrochem.org/wp-content/uploads/2018/10/iStock-Wind-Turbine-Farm-min.jpg'/>

            <Items title='Geothermal' imge='https://cdn.britannica.com/66/127366-050-774FDB24/Nesjavellir-Geothermal-Power-Plant-Iceland.jpg'/>

            <Items title='Nuclear' imge='https://www.foronuclear.org/wp-content/uploads/2020/04/energia-nuclear-en-el-mundo-1.jpg'/>

           

        </div>
    )
}

export default MainBody;