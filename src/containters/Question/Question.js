import React, { useState } from 'react';
import { questions as AllQuestions } from '../../jsons/pain';

const Question = (props) => {

    const IsChild = props.IsChild;
    let updatedQuestions = {};
    if (IsChild) {
        updatedQuestions = {
            ...props.questions,
        }
    }
    else {
        updatedQuestions = {
            ...AllQuestions,
        }
    }
    // console.log(updatedQuestions, 'updatedQuestions');

    let [stateQuestions, setQuestions] = useState(updatedQuestions);

    let questions = {};
    if (IsChild) {
        questions = props.newQuestions;
    }
    else {
        questions = stateQuestions;
    }

    const updateOptions = (q, remainingArgs, index) => {
        const updatedOption = recursiveSet(q.options[index], remainingArgs);
        const updatedOptions = q.options.map((item, itemIndex) => {
            if (itemIndex == index) {
                return { ...updatedOption };
            }
            else {
                return { ...item };
            }
        }
        );
        return updatedOptions;
    }

    const recursiveSet = (q, args) => {
        if (args.length > 0) {
            const [index, ...remainingArgs] = args;
            return {
                ...q,
                answerIndex: index,
                options: updateOptions(q, remainingArgs, index)
            };
        }
        else {
            return { ...q };
        }

    }
    const optionChangeHandler = (...indexArg) => {
        if (IsChild) {
            props.optionChanged(...indexArg);
        }
        else {
            setQuestions((q) => {

                console.log(indexArg);
                // var data = AllQuestions;
                // indexArg.map(i => {
                //     data = data.options[i];
                // })
                // console.log(data, 'ans');
                return { ...recursiveSet(AllQuestions, indexArg) };
            });
        }

    };
    return (
        <div>
            {questions.question}

            {questions.descriptions && questions.descriptions.map(desc => {
                return <div key={desc}>-{desc}</div>
            })}
            {questions.answer && questions.answer.descriptions.map(desc => {
                return <div key={desc}>ans-{desc}</div>
            })}

            {questions.options.map((option, optionIndex) => {
                return <div key={option.label}>
                    <input type="radio" name={questions.id}
                        value={option.label}
                        checked={questions.answerIndex == optionIndex}
                        onChange={() => optionChangeHandler(optionIndex)}
                    />{option.label}
                </div>
            })}
            <br />
            {
                questions.options &&
                questions.options[questions.answerIndex] &&
                (<Question
                    IsChild={true}
                    newQuestions={questions.options[questions.answerIndex]}
                    optionChanged={(...oldargs) => optionChangeHandler(questions.answerIndex, ...oldargs)}
                    args={questions.answerIndex}
                />)
            }

        </div>
    );
};
Question.defaultProps = {
    args: null,
    IsChild: false,
};

export default Question;