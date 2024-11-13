



export default function Item({name, quantity, category}){
    const [item, setItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState('');
    return(
        <main className="p-4 m-2 bg-slate-800 max-w-sm ">

            <form className="">
                
            </form>

            <div className=""></div>
                <div className="font-bold">{name}</div>
                <div>Quantity: {quantity}</div>
                <div className="text-sm text-gray-500">Category: {category}</div>
                
        </main>
        
    );

}