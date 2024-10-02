


export default function Item({name, quantity, category})
{
    return(
        <main className="p-4 m-2 bg-slate-800  ">
                <div className="font-bold">Name: {name}</div>
                <div>Quantity: {quantity}</div>
                <div className="text-sm text-gray-500">Category: {category}</div>
        </main>
    );

}