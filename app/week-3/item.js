


export default function Item({name, quantity, category})
{
    return(
        <main className="p-4 m-2 bg-slate-800 max-w-sm ">
            <div className=""></div>
                <div className="font-bold">{name}</div>
                <div>Quantity: {quantity}</div>
                <div className="text-sm text-gray-500">Category: {category}</div>
                
        </main>
    );

}