import React, {useState, useEffect} from 'react'

import { useProduct } from 'vtex.product-context';

const URLGuiaTallas = () => {
    const { product } = useProduct()

    const propiedadesURLGuiaTallas = product?.properties
    const atributoURLGuiaTallas = propiedadesURLGuiaTallas?.filter(function(element){
        return element?.name == "URL guía de tallas";
    });
    console.log("Propiedades", atributoURLGuiaTallas[0]?.values[0], product?.properties);

    const valorAtributo = atributoURLGuiaTallas != undefined ? atributoURLGuiaTallas[0]?.values[0] : undefined

    const [data, setData] = useState(true)

    useEffect(() => {
        setData(valorAtributo)
    }, [])

    return(
        valorAtributo === undefined ? <span></span>
        :
        <span className='vtex-store-components-3-x-URLGuiaTallas'><img src={valorAtributo} alt="Guía de tallas" /></span>
    )
}
export default URLGuiaTallas
