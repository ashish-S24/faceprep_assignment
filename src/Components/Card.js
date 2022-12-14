
export const Card = ({firstName , lastName, imageUrl , contactNo}) => {
    return (
        <div className="w-full rounded overflow-hidden shadow-lg m-2 border-4 border-black-500/150 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500">
            <img className="w-full h-64 object-center" src={imageUrl} />
            <div className="px-6 py-4">
                <p>Name: {firstName} {lastName}</p>
                <p>Contact No : {contactNo}</p>
            </div>
        </div>
    );
}