import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div className="flex flex-col text-center items-center justify-center h-screen px-2 text-white">
            <h1 className="text-5xl font-bold my-20">ChatGPT Karim</h1>

            <div className='flex space-x-5 text-center'>
                {/* Sun */}
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <SunIcon
                            className='h-8 w-8'
                        />
                        <h2>Examples</h2>
                    </div>
                    {/* Questions */}
                    <div className="space-y-2">
                        <p className="infoText">"Explain Something to me"</p>
                        <p className="infoText">"What is the difference between a dog and a cat ?"</p>
                        <p className="infoText">"what is the color of the sun ?"</p>
                    </div>
                </div>
                {/* Bolt */}
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <BoltIcon
                            className='h-8 w-8'
                        />
                        <h2>Capabilities</h2>
                    </div>
                    {/* Questions */}
                    <div className="space-y-2">
                        <p className="infoText">Change the ChatGPT Model to use</p>
                        <p className="infoText">Messages are stored in Firebase's Firestore</p>
                        <p className="infoText">Hot Toast notifications when ChatGPT is Thinking :{")"}</p>
                    </div>
                </div>
                {/* Exclamation */}
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <ExclamationTriangleIcon
                            className='h-8 w-8'
                        />
                        <h2>Limitations</h2>
                    </div>
                    {/* Questions */}
                    <div className="space-y-2">
                        <p className="infoText">May occasionally generate incorrect information</p>
                        <p className="infoText">May occasionally harmful instructions or biased content</p>
                        <p className="infoText">Limited knwledge of world and events after 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage