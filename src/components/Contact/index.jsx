import { ContactElements, ContactSection } from './styled';
import { Icon } from '@iconify/react';
import sendIcon from '@iconify-icons/feather/send';
import swal from 'sweetalert';
import emailJs, { init } from 'emailjs-com';
import { useForm } from 'react-hook-form';



const ContactArea = () => {
    // init(`user_VpPc8kzIuwkGpqyAeTYp4`);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange' });
    const onSubmitForm = async (data) => {
        // swal({
        //     title: 'test view',
        //     text: JSON.stringify(data)
        // })
        // let sendObj = {
        //     from_email: data.email,
        //     from_name: data.name,
        //     to_name: 'Md Mahabub Alam',
        //     message: data.message
        // }

        await emailJs.send(
            // 'gmail',
            // process.env.REACT_APP_EMAILJS_SERVICE_KEY,
            `f0fdca51ead7f20c151e69766fb3ee9b`,
            process.env.REACT_APP_EMAILJS_TEM_ID,
            data,
            `user_VpPc8kzIuwkGpqyAeTYp4`
        )
        .then(() => {
            swal({
                title: 'Message sent successfully!',
                // text: JSON.stringify(res),
                icon: 'success'
            })
        })
        .catch(err => {
            swal({
                title: err.message,
                // text: JSON.stringify(res),
                icon: 'error'
            })
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