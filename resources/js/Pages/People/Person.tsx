import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PersonInfo from './Partials/PersonInfo';

export default function Person({auth,person}:{auth:any,person:any}){
    console.log('people rendered ', person)
    return(
        <AuthenticatedLayout
            header={
                <div className="text-xl font-semibold leading-tight text-green-800 flex justify-between">
                    <div>
                        Person Detail
                    </div>
                </div>
            }
        >
            <Head title={person.name}/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <PersonInfo/>
                    <div className="bg-white p-4 max-w-7xl shadow sm:rounded-lg sm:p-8 flex  ">
                        Additional Todos
                    </div>
                </div>
            </div>
            

        </AuthenticatedLayout>
    )
}