import * as React from 'react';

type EmailTemplateProps = {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>{firstName}</h1>
    <p>{message}</p>
    <p>From: {email}</p>
  </div>
);