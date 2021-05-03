import { ContactElements, ContactSection } from './styled';
import { Icon } from '@iconify/react';
import sendIcon from '@iconify-icons/feather/send';
import swal from 'sweetalert';
import { init, send } from 'emailjs-com';
import { useForm } from 'react-hook-form';



const ContactArea = () => {
    init(process.env.REACT_APP_EMAILJS_USER_ID);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange' });
    const onSubmitForm = async (data) => {
        await send(process.env.REACT_APP_EMAILJS_SERVICE_KEY, process.env.REACT_APP_EMAILJS_TEM_ID,{
            from_name: data.name,
            message: data.message,
            reply_to: data.email,
        })
        .then(() => {
            swal({
                title: 'Message sent successfully!',
                // text: JSON.stringify(res),
                icon: 'success'
            })
            reset();
        })
        .catch(err => {
            swal({
                title: err.message,
                // text: JSON.stringify(err),
                icon: 'error'
            })
            console.log(err);
            reset();
        })
    }

    return (
        <ContactSection>
            <h2>contact with me</h2>

            <ContactElements>
                <form autoComplete="off" onSubmit={handleSubmit(onSubmitForm)}>
                    <div className="inputs">
                        <input type="text" name="name" placeholder="Full Name"
                        {...register('name', {
                            required: {value: true, message: 'Name is required'}
                        })}
                        />
                        {errors.name && <span className="_err">{errors.name.message}</span>}


                        <input type="email" name="email" placeholder="Email Address"
                        {...register('email', {
                            required: {value: true, message: 'Email is required'}
                        })}
                        />
                        {errors.email && <span className="_err">{errors.email.message}</span>}


                        <textarea name="message" placeholder="Write your message"
                        {...register('message', {
                            required: {value: true, message: 'Message is required'}
                        })}
                        />
                        {errors.message && <span className="_err">{errors.message.message}</span>}
                    </div>

                    <div className="bottom">
                        <button type="submit">
                            <Icon icon={sendIcon} />
                            <span>send</span>
                        </button>
                    </div>
                </form>
            </ContactElements>
        </ContactSection>
    )
}

export default ContactArea;