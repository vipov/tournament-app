import React, {useState, useEffect} from 'react'

function formatPrice(cents) {
    return (cents/100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}
export default function Results({entryFee, tournamentName, tournamentWinner, tournamentPrizes, tournamentPull}) {
    const [firstPrize, setFirstPrize] = useState([])
    const [secondPrize, setSecondPrize] = useState([])
    const [thirdPrize, setThirdPrize] = useState([])


    useEffect(() => {

        if(tournamentPrizes[0].amount!=0) //$ prize selected for 1st place prize
        {setFirstPrize(formatPrice(tournamentPrizes[0].amount*100))} 
        else { // pull % selected as 1st place prize
            let firstPrizeBasedOnPull = (tournamentPrizes[0].pullPercentage) * tournamentPull;
            firstPrizeBasedOnPull=formatPrice(firstPrizeBasedOnPull)
            setFirstPrize(firstPrizeBasedOnPull)
        }
        if(tournamentPrizes[1].amount!=0) //$ prize selected for 2nd place prize
        {setSecondPrize(formatPrice(tournamentPrizes[1].amount*100))} 
        else { // pull % selected as 1st place prize
            let secondPrizeBasedOnPull = (tournamentPrizes[1].pullPercentage)* tournamentPull;
            secondPrizeBasedOnPull=formatPrice(secondPrizeBasedOnPull)
            setSecondPrize(secondPrizeBasedOnPull)
        }
        if(tournamentPrizes[2].amount!=0) //$ prize selected for 3rd place prize
        {setThirdPrize(formatPrice(tournamentPrizes[2].amount*100))} 
        else { // pull % selected as 3rd place prize
            let thirdPrizeBasedOnPull = (tournamentPrizes[2].pullPercentage) * tournamentPull;
            thirdPrizeBasedOnPull=formatPrice(thirdPrizeBasedOnPull)
            setThirdPrize(thirdPrizeBasedOnPull)
        }
    }, []);
    // first render, winner undefined
    if (tournamentWinner.name===undefined) {
        return (
        <>
        {console.log('tournamentWinner,',tournamentWinner)}
            <div className="result-chits">
                <span className="pin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h2v5l-2 2v-7zm3.571-12c0-2.903 2.36-3.089 2.429-5h-10c.068 1.911 2.429 2.097 2.429 5 0 3.771-3.429 3.291-3.429 10h12c0-6.709-3.429-6.229-3.429-10z"/></svg>
                </span>
                <div className="result-chit">
                    <div className="line-center">{tournamentName}</div>
                    Entry fee: {formatPrice(entryFee*100)}
                </div>
                <div className="result-chit">
                    <div className="line-center">{tournamentName}</div>
                    Winner: pick a winner
                </div>  
            </div>
        </>
        )}
    else
    return (
        <>
        {console.log('tournamentWinner,',tournamentWinner)}
            <div className="result-chits">
                <span className="pin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h2v5l-2 2v-7zm3.571-12c0-2.903 2.36-3.089 2.429-5h-10c.068 1.911 2.429 2.097 2.429 5 0 3.771-3.429 3.291-3.429 10h12c0-6.709-3.429-6.229-3.429-10z"/></svg>
                </span>
                <div className="result-chit">
                    <div className="line-center">{tournamentName}</div>
                    <div className="line">Entry fee: {formatPrice(entryFee*100)}</div>
                    <div className="line">1st place: {firstPrize}</div>
                    <div className="line">2nd place: {secondPrize}</div>
                    <div className="line">3rd place: {thirdPrize}</div>
                </div>
                <div className="result-chit">
                    <div className="line-center">Winner: {tournamentWinner.name}</div>
                </div>  
                <div className="result-chit">
                    <div className="line-center">{tournamentWinner.name} members:</div>
                    {tournamentWinner.members.map((member, i) => {
                        return <p>{i+1}: {member.name}</p>
                    })}
                </div>  
            </div>
        </>
    )
}
