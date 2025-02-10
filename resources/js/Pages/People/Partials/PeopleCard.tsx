import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Button, Input } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { useRoute } from "../../../../../vendor/tightenco/ziggy/src/js";
export default function PeopleCard({person}:{person:any}){

    const [confirmDelete, setConfirmDelete] = useState(false);
    const route = useRoute();
    const closeModal = () => {
        setConfirmDelete(false);
    };
    const {delete:destroy}=useForm();

    function detail(){
        console.log(person.name );
    }
    const remove: FormEventHandler = (e) => {
        e.preventDefault();
        console.log('deleting ', person.name);
        console.log(route('people.destroy', person));
        destroy(route('people.destroy', person));
        setConfirmDelete(false);
    }

    return (
        <div className=" bg-slate-100 shadow-md pt-4 px-4 pb-8">
            <div className="flex justify-end">
                <DangerButton onClick={()=>setConfirmDelete(true)}>
                    X
                </DangerButton>

            </div>
            <img src="https://dummyjson.com/icon/emilys/128" className="mx-auto"/>
            <div className="text-center text-xl font-bold py-4">
            {person.name} 
            </div>
            <div className="font-semibold text-sm">
                Phone: {person.phone}
            </div>
            {true || person.picture && <div className="font-semibold text-sm">
                {person.picture}
            </div>
            }
            <div className="flex justify-center my-4">
                <PrimaryButton  onClick={detail}>
                    Details
                </PrimaryButton>
            </div>
            <Modal show={confirmDelete} onClose={closeModal}>
                <form onSubmit={remove} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete <span className="font-bold text-red-500">{person.name}</span>?
                    </h2>
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton className="ms-3" type="submit">
                            Remove Person
                        </DangerButton>
                    </div>

                </form>
            </Modal>
            
        </div>
    )
}