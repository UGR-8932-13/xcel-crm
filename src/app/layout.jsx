import '@styles/globals.css';

export const metadata = {
    title: "Xcel-CRM/HR"
}

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            {children}
        </body>

    </html>
  )
}

export default layout