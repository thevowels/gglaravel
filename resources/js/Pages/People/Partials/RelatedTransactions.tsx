import Dropdown from "@/Components/Dropdown";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { Button } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FormEventHandler, useState } from "react";



export default function RelatedTRansactions(){

    const transactions:any = usePage().props.transactions;
    const person:any = usePage().props.person;

    const {data, setData, post, errors, processing, reset, recentlySuccessful } = useForm(
        {
            person_id: person.id,
            amount:"",
            loan: false,
        }
    ) 


    const [addForm, setAddForm ] = useState(false);
    const closeModal = ()=>{
        setAddForm(false);
    }
    const openModal = () =>{
        setAddForm(true);
    }
    const addTransaction:FormEventHandler = (e)=>{
        e.preventDefault();
        console.log('submitted', data);
        closeModal();
        
    }
    
    console.log('RElated Transactions', transactions);
    return(
        <div className="bg-white p-4 max-w-7xl shadow sm:rounded-lg sm:p-8">

            Related Transactions
                <div className="max-w-lg mx-auto">
                {transactions && transactions.map((transaction: any) => 
                            <div className="flex justify-between items-center text-sm font-medium my-2 border-b border-gray-300 " key={transaction.id}>
                                 <div className="">{transaction.amount}</div>
                                 <div>{transaction.loan? "Loan":"Return"}</div>
                                 <div>{dayjs(transaction.created_at).format('DD/MM/YYYY HH:mm')}</div> 

                            </div>)}
                <div className="text-right mt-5 mx-4">
                    <PrimaryButton onClick={openModal}>Add</PrimaryButton>
                    <Modal show={addForm} onClose={closeModal} >
                        <form onSubmit={addTransaction} className="m-6 space-y-6 ">
                            <h2>Blah Blah</h2>
                            <div>
                                <InputLabel htmlFor="amount" value="Amount"/>
                                <TextInput
                                    id="amount"
                                    className="mt-1 block w-full"
                                    value={data.amount}
                                    onChange={(e)=>setData('amount', e.target.value)}
                                    required
                                    isFocused
                                />
                            </div>
                            <div >
                                <InputLabel htmlFor="loan" value="Loan/Return"/>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal}>
                                    Cancel
                                </SecondaryButton>

                                <PrimaryButton className="ms-3" type="submit">
                                    Add
                                </PrimaryButton>
                            </div>
                        </form>
                    </Modal>
                </div>
                </div>
            </div>


    )
}