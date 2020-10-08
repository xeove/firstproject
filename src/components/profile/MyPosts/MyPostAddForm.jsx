import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../form-control/form-control";
import {fieldIsRequired, maxLengthCreator} from "../../../validators/validators";

const maxLength = maxLengthCreator(200)

const MyPostsAddForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea} placeholder={"write something..."} validate={[fieldIsRequired, maxLength]}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "post"})(MyPostsAddForm)
