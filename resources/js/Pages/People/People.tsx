import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function People({auth,people}:{auth:any,people:any}){
    console.log('people rendered ', people)
    return(
        <AuthenticatedLayout>
            {people.name}
        </AuthenticatedLayout>
    )
}