
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head } from "@inertiajs/react";
export default function Index()
{
    return(
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    People
                </h2>
            }
        >
            <Head title="People Blah Blah"/>


        </AuthenticatedLayout>
    )
}