import Select from "antd/es/select";
import { useEffect, useState } from "react";

interface DaysSelectProps{
  onDaysChange: (days: string[])=>void;
}

const DaysSelect: React.FC<DaysSelectProps> = ({onDaysChange})=>{
    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"]
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const filteredOptions = DAYS.filter((day) => !selectedDays.includes(day));

    useEffect(()=>{
      onDaysChange(selectedDays)
    },[selectedDays])

    return (
        <Select
          mode="multiple"
          size={"large"}
          placeholder="Select Days"
          value={selectedDays}
          onChange={setSelectedDays}
          style={{ width: '100%' }}
          options={
            filteredOptions.map((item) => ({
              value: item,
              label: item,
            }))
          }
        />
      )
}

export default DaysSelect