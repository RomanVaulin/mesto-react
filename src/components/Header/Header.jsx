import logo from '../../images/Vector.svg'
export default function Header() {
    return (
        <header className="header">
            <img
            src={logo}
            alt="лого место"
            className="logo"
            />
        </header>
    )
}