function Breadcrumbs(props)
{
    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">home</li>
                {this.props.children}
            </ol>
        </nav>
    );
}
export default Breadcrumbs