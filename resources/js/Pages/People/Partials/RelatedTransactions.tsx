import { usePage } from "@inertiajs/react"

export default function RelatedTRansactions(){

    const transactions:any = usePage().props.transactions;

    console.log('RElated Transactions', transactions);
    return(
        <div className="bg-white p-4 max-w-7xl shadow sm:rounded-lg sm:p-8 flex  ">
            <div>

            Related Transactions
                <div>
                {transactions && transactions.map((transaction:any) => <div key={transaction.id}>{transaction.amount}</div>)}

                </div>
            </div>


        </div>
    )
}