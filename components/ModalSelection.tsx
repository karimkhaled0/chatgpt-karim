'use client'
import useSWR from 'swr'
import Select from 'react-select'
type Props = {}

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

const ModalSelection = (props: Props) => {

    const { data: models, isLoading } = useSWR('models', fetchModels)
    const { data: model, mutate: setModel } = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })

    return (
        <div className='mt-2'>
            <Select
                options={models?.modelOptions}
                className='mt-2'
                defaultValue={model}
                isSearchable
                isLoading={isLoading}
                menuPosition='fixed'
                classNames={{
                    control: (state) => "bg-[#434654] border-[#434654] text-white",
                }}
                placeholder={model}
                onChange={(e) => setModel(e.value)}
            />
        </div>
    )
}

export default ModalSelection