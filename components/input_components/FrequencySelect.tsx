import { Frequency } from "@/data/models/ServiceModel";
import Select from "antd/es/select";

interface FrequencySelectProps{
    frequencyOnChange: (value: Frequency)=>void
}

const FrequencySelect: React.FC<FrequencySelectProps> = ({frequencyOnChange})=>{
   
    return (
        <Select
            size={"large"}
            // defaultValue={Frequency.ONCE}
            onChange={frequencyOnChange}
            style={{
                width: "100%",
            }}
            options={options}
            placeholder="Select Frequency"
            />
    )
}


const options = [
    {
        value: Frequency.ONCE,
        label: "Once",
    },
    {
        value: Frequency.DAILY,
        label: "Daily",
    },
    {
        value: Frequency.WEEKLY,
        label: "Weekly",
    },
    {
        value: Frequency.MONTHLY,
        label: "Monthly",
    }
];


export default FrequencySelect