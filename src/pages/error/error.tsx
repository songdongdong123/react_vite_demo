interface errorProps {
    message: string,
    errorCode?: number
}
const ErrorPage: React.FC<errorProps> = ({
    message,
    errorCode
}) => (
    <div>
        <p>{message}</p>
        {
            errorCode ? errorCode : null
        }
    </div>
)

export default ErrorPage;