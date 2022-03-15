render() {
    console.log(this.state.myPosts);

    const data = this.state.myPosts;

    const display = Object.keys(data).map((d, key) => {
        return (
            <div className="my-posts">
                <li key={key}>
                    {data.current_route}
                </li>
            </div>
            );
        }
    );

    return(
        <div>
            <ul>
                { display }
            </ul>
        </div>
    );
}