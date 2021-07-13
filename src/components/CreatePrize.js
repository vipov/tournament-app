import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import { ErrorMessage } from "@hookform/error-message";
import {setPrizes, closeCreatePrizeWindow} from '../features/tournamentSlice';
import {FaWindowClose} from "react-icons/fa";
import { useHistory } from 'react-router-dom';

export default function CreatePrize() {

    const dispatch = useDispatch();
    const history = useHistory();
    const {
    register,
    formState: { errors },
    handleSubmit
    } = useForm({
    criteriaMode: "all"
    });
    const onSubmit = (data) => 
    {
        console.log('data:', data)
        dispatch(setPrizes(data))
        history.push("/");
    }

    const closePrizesWindow = () => {
        dispatch(closeCreatePrizeWindow())
        history.push("/");
    }


    return (
            <form onSubmit={handleSubmit(onSubmit)} className="create-prize-form">
                <div className="align-right">
                    <FaWindowClose 
                    className="nav-icon"
                    onClick={closePrizesWindow}
                    />
                </div>
                <h1>Prize for 1 place</h1>
                <div className="line">
                    <div className="input-and-description">
                        <> Cash reward </>
                        <input
                        placeholder="First place reward"
                        {...register("firstPlaceReward", {
                            // required: "This input is required.",
                            pattern: {
                            value: /\d+/,
                            message: "This input is number only.",
                            },
                        })}
                        />
                        <ErrorMessage
                        errors={errors}
                        name="firstPlaceReward"
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                                ))
                            : null;
                        }}
                        />
                    </div>
                    or 
                    <div className="input-and-description">
                        <> Pull percentage </>
                    <input
                    placeholder="% of pull for 1st place"
                    {...register("firstPlaceRewardPercentage", {
                        // required: "This input is required.",
                        pattern: {
                        // value: /^[-]?\d+(.\d+)?$/,
                        // value: /^(1\d\d|70)$/,
                        value: /\b([0-9]|[1-9][0-9]|100)\b/,
                        message: "Number between 0-100",
                        },
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="firstPlaceRewardPercentage"
                    render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                            ))
                        : null;
                    }}
                    />
                    </div>
                </div>
                <h1>Prize for 2 place</h1>
                <div className="line">
                    <div className="input-and-description">
                        <> Cash reward </>
                        <input
                        placeholder="Second place reward"
                        {...register("secondPlaceReward", {
                            // required: "This input is required.",
                            pattern: {
                            value: /\d+/,
                            message: "This input is number only.",
                            },
                        })}
                        />
                        <ErrorMessage
                        errors={errors}
                        name="secondPlaceReward"
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                                ))
                            : null;
                        }}
                        />
                    </div>
                    or 
                    <div className="input-and-description">
                        <> Pull percentage </>
                    <input
                    placeholder="% of pull for 2nd place"
                    {...register("secondPlaceRewardPercentage", {
                        // required: "This input is required.",
                        pattern: {
                        // value: /^[-]?\d+(.\d+)?$/,
                        // value: /^(1\d\d|70)$/,
                        value: /\b([0-9]|[1-9][0-9]|100)\b/,
                        message: "Number between 0-100",
                        },
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="secondPlaceRewardPercentage"
                    render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                            ))
                        : null;
                    }}
                    />
                    </div>
                </div>
                <h1>Prize for 3 place</h1>
                <div className="line">
                    <div className="input-and-description">
                        <> Cash reward </>
                        <input
                        placeholder="Third place reward"
                        {...register("thirdPlaceReward", {
                            // required: "This input is required.",
                            pattern: {
                            value: /\d+/,
                            message: "This input is number only.",
                            },
                        })}
                        />
                        <ErrorMessage
                        errors={errors}
                        name="thirdPlaceReward"
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                                ))
                            : null;
                        }}
                        />
                    </div>
                    or 
                    <div className="input-and-description">
                        <> Pull percentage </>
                    <input
                    placeholder="% of pull for 3rd place"
                    {...register("thirdPlaceRewardPercentage", {
                        // required: "This input is required.",
                        pattern: {
                        // value: /^[-]?\d+(.\d+)?$/,
                        // value: /^(1\d\d|70)$/,
                        value: /\b([0-9]|[1-9][0-9]|100)\b/,
                        message: "Number between 0-100",
                        },
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="thirdPlaceRewardPercentage"
                    render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                            ))
                        : null;
                    }}
                    />
                    </div>
                </div>
                {/* <h1>Prize for 2 place</h1>
                <div className="line">
                    <div className="input-and-description">
                        <> Cash reward </>
                        <input
                        placeholder="First place reward"
                        {...register("firstPlaceReward", {
                            required: "This input is required.",
                            pattern: {
                            value: /\d+/,
                            message: "This input is number only.",
                            },
                        })}
                        />
                        <ErrorMessage
                        errors={errors}
                        name="firstPlaceReward"
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                                ))
                            : null;
                        }}
                        />
                    </div>
                    or 
                    <div className="input-and-description">
                        <> Pull  percentage </>
                    <input
                    placeholder="First place reward"
                    {...register("firstPlaceReward", {
                        required: "This input is required.",
                        pattern: {
                        value: /\d+/,
                        message: "This input is number only.",
                        },
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="firstPlaceReward"
                    render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                            ))
                        : null;
                    }}
                    />
                    </div>
                </div>
                <h1>Prize for 3 place</h1>
                <div className="line">
                    <div className="input-and-description">
                        <> Cash reward </>
                        <input
                        placeholder="First place reward"
                        {...register("firstPlaceReward", {
                            required: "This input is required.",
                            pattern: {
                            value: /\d+/,
                            message: "This input is number only.",
                            },
                        })}
                        />
                        <ErrorMessage
                        errors={errors}
                        name="firstPlaceReward"
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                                ))
                            : null;
                        }}
                        />
                    </div>
                    or 
                    <div className="input-and-description">
                        <> Pull  percentage </>
                    <input
                    placeholder="First place reward"
                    {...register("firstPlaceReward", {
                        required: "This input is required.",
                        pattern: {
                        value: /\d+/,
                        message: "This input is number only.",
                        },
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="firstPlaceReward"
                    render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                            ))
                        : null;
                    }}
                    />
                    </div>
                </div> */}
            <input type="submit" placeholder="Submit" value="Submit" />
            </form>
  );
}

// import React from 'react'
// import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom'

// export default function CreatePrize() {
//     const history = useHistory();
//         const openCreateTeamWindow = () => {
//         console.log('create teams')
//         history.push("/ahref");
//     }
//     return (
//         <div className="create-prize">
//             <Link to='/ahref'>czy ahref posysa?</Link>

//             {console.log('i am create prize')}
//         </div>
//     )
// }
