import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';


export default function AddUserForm(){

    const user = usePage().props.auth.user;
    const {data, setData, post, errors, processing, reset, recentlySuccessful } = 
            useForm({
                name:'',
                phone: '',

            })
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('people.store'),  { onSuccess: () => reset() });
    }
    return(
        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <section>
                <header>
                    <h2 className="text-lg font-medium text-gray-900">
                        {user.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Update your account's profile information and email address.
                    </p>
                </header>
                <form onSubmit={submit} className='mt-6 space-y-6'>
                    <div>
                        Blah Blah
                    </div>
                    <div className='flex items-center gap-4'>
                        <PrimaryButton disabled={processing}>Save</PrimaryButton>
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">
                                Saved.
                            </p>
                        </Transition>
                        
                    </div>
                </form>

            </section>
        </div>
    )
}