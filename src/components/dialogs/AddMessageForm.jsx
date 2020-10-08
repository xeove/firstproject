import React from 'react';
import {fieldIsRequired, maxLengthCreator} from "../../validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../form-control/form-control";

const maxLength = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"write..."} name={"messageText"} component={Textarea} validate={[fieldIsRequired, maxLength]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogsAddMessagesForm'})(AddMessageForm)