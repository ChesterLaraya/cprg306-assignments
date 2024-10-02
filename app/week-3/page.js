
import ItemList from "./item-list";

export default function Page(){
    return(
    <main className="p-4">
        <h1 className="text-5xl font-bold mb-6">Shopping List</h1>
           <ItemList />
    </main>
    );
    
}