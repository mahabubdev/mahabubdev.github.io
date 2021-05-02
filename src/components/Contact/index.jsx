import { ContactElements, ContactSection } from './styled';
import { Icon } from '@iconify/react';
import sendIcon from '@iconify-icons/feather/send';



const ContactArea = () => {
    return (
        <ContactSection>
            <h2>contact with me</h2>

            <ContactElements>
                <form autoComplete="off">
                    <div className="inputs">
                        <input type="text" name="name" placeholder="Full Name" />
                        <input type="email" name="email" placeholder="Email Address" />
                        <textarea name="message" placeholder="Write your message"></textarea>
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