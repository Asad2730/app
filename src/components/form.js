

export const AuthForm = ({ title, inputs, onSubmit, handleChange }) => (

    <div className="flex w-screen h-screen justify-center items-center  ">

        <div className="grid-cols-1 rounded-lg bg-white w-[60%] p-4">

            {inputs.map((i, index) => (
                <div className="p-2">
                    <input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
       ring-gray-300 placeholder:text-gray-400 focus:ring-2 
      focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 "
                        key={index} placeholder={i.placeholder}
                        type={i.type}
                        onChange={(e) => handleChange(e, i.key)}
                    />
                </div>
            ))}


            <button className="mx-auto bg-blue-600 text-white rounded" onClick={onSubmit}>
                {title}
            </button>
        </div>


    </div>


) 