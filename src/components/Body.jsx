import Card from "./Card";

export default function Body({products}){
    return <div className="row">
        {
        products.map(p => <Card product={p} />)
        // products.map(p => <h1>{p.title}</h1>)
        }

    </div>
}