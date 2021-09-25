import { useState } from "react"
import Header from "../components/header"
import { Form, Formik, Field, ErrorMessage } from "formik"
import Error from "../components/error"
import * as Yup from "yup"
const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const schemaValidate = Yup.object().shape({
    name: Yup.string().min(3).max(25).required(),
    email: Yup.string().email().required(),
    subject: Yup.string().min(15).max(150).required(),
    message: Yup.string().min(25).max(350).required(),
})
const Contact = () => {
    const [msg, setMsg] = useState("")
    const [isSended, setIsSended] = useState(false)
    const onSubmit = (values, onSubmitProps) => {
        const send = true
        console.log(values)
        if (send) {
            setMsg(`Thank you!
            Your message has been successfully sent. We will contact you very soon!`)
            setIsSended(true)
        } else {
            setMsg(`Ooops!
            Sorry Something going worng :(`)
        }
        onSubmitProps.setSubmitting(false)
    }
    return (
        <>
            <Header title="Contact" />

            <div className="contact" style={{ paddingTop: "125px", paddingBottom: "125px" }}>
                <div className="container">
                    <div className="h3 my-3 text-center">Conatct </div>
                    <p className={isSended ? "text-success text-center" : "text-danger text-center"}>
                        {msg}
                    </p>
                    <Formik initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={schemaValidate}
                    >
                        {
                            formik => {
                                return (
                                    <Form>
                                        <div className="row g-2">
                                            <div className="col-md">
                                                <Field type="text" className="form-control mt-2 " name="name" id="name" placeholder="Name" />
                                                <ErrorMessage name="name" render={error => <Error error={error} />} />
                                            </div>
                                            <div className="col-md">
                                                <Field type="email" className="form-control mt-2 " name="email" id="email" placeholder="Email" />
                                                <ErrorMessage name="email" render={error => <Error error={error} />} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <Field type="text" className="form-control mt-2 " name="subject" id="subject" placeholder="Subject" />
                                            <ErrorMessage name="subject" render={error => <Error error={error} />} />
                                        </div>
                                        <div className="form-group">
                                            <Field as="textarea" className="form-control mt-2 " rows="5" name="message" id="message" placeholder="Message" />
                                            <ErrorMessage name="message" render={error => <Error error={error} />} />
                                        </div>
                                        <div className="d-flex justify-content-end mt-2">
                                            <button type="submit" className="btn text-white bg-black rounded-0"
                                                disabled={!formik.isValid}
                                                style={{ cursor: formik.isSubmitting ? "wait" : "auto", width: "120px" }} >
                                                Send
                                            </button>
                                        </div>
                                    </Form>
                                )
                            }
                        }
                    </Formik>



                </div>
            </div>
        </>
    )
}

export default Contact
