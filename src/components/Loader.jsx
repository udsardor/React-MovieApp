function LoaderSpiner(){
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    )
}

function LoaderImg(){
    return (
        <div class="lds-roller"></div>
    )
}

export {LoaderSpiner, LoaderImg}