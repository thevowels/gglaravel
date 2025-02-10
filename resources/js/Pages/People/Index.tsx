
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage } from "@inertiajs/react";

export default function Index({people}:{auth:any,people:any})
{

        const user = usePage().props.auth.user;
        console.log(usePage().props);
    return(
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-green-800">
                    People
                </h2>
            }
        >
            <Head title="People Blah Blah"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        {user.name}
                    </div>
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        ASDFASD
                    </div>
                    
                </div>
            </div>


        </AuthenticatedLayout>
    )
}