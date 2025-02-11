
import { usePage } from "@inertiajs/react"

export default function UserSummary(){
    const transactions:any = usePage().props.transactions;

    const accumulatedResult = transactions.reduce((a:any,b:any)=> {
        if(b.loan){
            a.loan+=b.amount;
        }else{
            a.repay+=b.amount;
        }
        return a;
    },{loan:0,repay:0});

    console.log('User summary ' ,transactions);
    console.log('User summary ' ,transactions.slice(0,5));
    console.log('Summary' , accumulatedResult);
    return(
        <div>
        <section id="summary" className='overflow-hidden bg-white shadow-sm sm:rounded-md mt-8'>
            <div className="p-6 ">
                <a  href="#summary">User Summary</a>
                <div className="flex max-w-sm justify-between mx-auto text-lg font-semibold font-serif text-center">
                    <div>
                        Total Loan
                        <div className="font-sans text-red-600">
                            {accumulatedResult.loan}
                        </div>
                    </div>
                    <div>
                        Total Return
                        <div className="font-sans text-green-600">
                            {accumulatedResult.repay}
                        </div>
                    </div>
                </div>
                <div className="flex max-w-sm justify-center mx-auto text-lg font-semibold font-serif text-center">
                    <div>
                        Net Loan
                        <div className="font-sans">
                            {accumulatedResult.loan - accumulatedResult.repay}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="transactions" className='overflow-hidden bg-white shadow-sm sm:rounded-md mt-8'>
            <div className="p-6 ">
                Transactions
                {transactions.slice(0,5).map((transaction: any) => <div className="flex justify-between mx-8" key={transaction.id}> <div>{transaction.people.name}</div> <div>{transaction.amount}</div><div>{transaction.created_at}</div> </div>)}
                <div>
                    Load More
                </div>
            </div>

        </section>
        </div>
    )
}