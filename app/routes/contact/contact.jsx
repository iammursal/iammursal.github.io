import emailjs from '@emailjs/browser';
import { Form, useNavigation } from '@remix-run/react';
import { useRef, useState } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { baseMeta } from '~/utils/meta';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import styles from './contact.module.css';

export const meta = () => {
    return baseMeta({
        title: 'Contact',
        description:
            'Send me a message if you’re interested in discussing a project or if you just want to say hi',
    });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;


export const Contact = () => {
    const [actionData, setActionData] = useState({
        success: false,
        errors: null,
    })
    const errorRef = useRef();
    const formRef = useRef(null);
    const email = useFormInput('');
    const message = useFormInput('');
    const initDelay = tokens.base.durationS;
    const { state } = useNavigation();
    const sending = state === 'submitting';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const isBot = String(formData.get("from_name"));
        const email = String(formData.get("from_email"));
        const message = String(formData.get("message"));
        const errors = {};

        // Return without sending if a bot trips the honeypot
        if (isBot) return setActionData({ success: true, errors: null });

        // Handle input validation on the server
        if (!email || !EMAIL_PATTERN.test(email)) {
            errors.email = "Please enter a valid email address.";
        }

        if (!message) {
            errors.message = "Please enter a message.";
        }

        if (email.length > MAX_EMAIL_LENGTH) {
            errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
        }

        if (message.length > MAX_MESSAGE_LENGTH) {
            errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
        }

        if (Object.keys(errors).length > 0) {
            return setActionData({ success: false, errors });
        }

        // Send email via EmailJS
        emailjs
            .sendForm('service_v3vx65p', 'template_6xw4bxg', formRef.current, {
                publicKey: 'tlTt0aLqyEbi44Ml5',
            })
            .then(
                () => {
                    setActionData({ success: true, errors: null });
                },
                (error) => {
                    setActionData({
                        success: false,
                        errors: {
                            message: "There was an error sending your message. Please try again later or email me directly at iammursal@gmail.com"
                        }
                    });
                },
            );

    }



    return (
        <Section className={styles.contact}>
            <Transition unmount in={!actionData?.success} timeout={1600} nodeRef={formRef}>
                {({ status, nodeRef }) => (
                    <Form
                        onSubmit={handleFormSubmit}
                        unstable_viewTransition
                        className={styles.form}
                        method="post"
                        ref={nodeRef}
                    >
                        <Heading
                            className={styles.title}
                            data-status={status}
                            level={3}
                            as="h1"
                            style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
                        >
                            <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
                        </Heading>
                        <Divider
                            className={styles.divider}
                            data-status={status}
                            style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
                        />
                        {/* Hidden honeypot field to identify bots */}
                        <Input
                            className={styles.botkiller}
                            label="Name"
                            name="from_name"
                            maxLength={MAX_EMAIL_LENGTH}
                        />
                        <Input
                            required
                            className={styles.input}
                            data-status={status}
                            style={getDelay(tokens.base.durationXS, initDelay)}
                            autoComplete="email"
                            label="Your email"
                            type="email"
                            name="from_email"
                            maxLength={MAX_EMAIL_LENGTH}
                            {...email}
                        />
                        <Input
                            required
                            multiline
                            className={styles.input}
                            data-status={status}
                            style={getDelay(tokens.base.durationS, initDelay)}
                            autoComplete="off"
                            label="Message"
                            name="message"
                            maxLength={MAX_MESSAGE_LENGTH}
                            {...message}
                        />
                        <Transition
                            unmount
                            in={!sending && actionData?.errors}
                            timeout={msToNum(tokens.base.durationM)}
                        >
                            {({ status: errorStatus, nodeRef }) => (
                                <div
                                    className={styles.formError}
                                    ref={nodeRef}
                                    data-status={errorStatus}
                                    style={cssProps({
                                        height: errorStatus ? errorRef.current?.offsetHeight : 0,
                                    })}
                                >
                                    <div className={styles.formErrorContent} ref={errorRef}>
                                        <div className={styles.formErrorMessage}>
                                            <Icon className={styles.formErrorIcon} icon="error" />
                                            {actionData?.errors?.email}
                                            {actionData?.errors?.message}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Transition>
                        <Button
                            className={styles.button}
                            data-status={status}
                            data-sending={sending}
                            style={getDelay(tokens.base.durationM, initDelay)}
                            disabled={sending}
                            loading={sending}
                            loadingText="Sending..."
                            icon="send"
                            type="submit"
                        >
                            Send message
                        </Button>
                    </Form>
                )}
            </Transition>
            <Transition unmount in={actionData?.success}>
                {({ status, nodeRef }) => (
                    <div className={styles.complete} aria-live="polite" ref={nodeRef}>
                        <Heading
                            level={3}
                            as="h3"
                            className={styles.completeTitle}
                            data-status={status}
                        >
                            Message Sent
                        </Heading>
                        <Text
                            size="l"
                            as="p"
                            className={styles.completeText}
                            data-status={status}
                            style={getDelay(tokens.base.durationXS)}
                        >
                            I’ll get back to you within a couple days, sit tight
                        </Text>
                        <Button
                            secondary
                            iconHoverShift
                            className={styles.completeButton}
                            data-status={status}
                            style={getDelay(tokens.base.durationM)}
                            href="/"
                            icon="chevron-right"
                        >
                            Back to homepage
                        </Button>
                    </div>
                )}
            </Transition>
            <Footer className={styles.footer} />
        </Section>
    );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
    const numDelay = msToNum(delayMs) * multiplier;
    return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
