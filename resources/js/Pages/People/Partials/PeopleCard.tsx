export default function PeopleCard({person}:{person:any}){

    return (
        <div className=" bg-slate-100 shadow-md pt-4 px-4 pb-8">
            <img src="https://dummyjson.com/icon/emilys/128" className="mx-auto"/>
            <div className="text-center text-xl font-bold py-4">
            {person.name} 
            </div>
            <div className="font-semibold text-sm">
                Phone: {person.phone}
            </div>
        </div>
    )
}