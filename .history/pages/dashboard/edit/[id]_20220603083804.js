import react, { useEffect, useState } from "react";
import FormProduct from "../../../components/FormProduct";
import { useRouter } from "next/router";

export default function Edit(){
    const [product, setProduct] = useState({});
    const router = useRouter();

    useEffect(()=>{
        const{id} = router.query;
        console.log(id);
    }, [router?.isReady])
    return <FormProduct/>;
}