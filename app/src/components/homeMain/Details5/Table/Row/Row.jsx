import React,{useState} from "react";
import { PieChart } from '@mui/x-charts/PieChart';

export default function Row(props) {

    const [value,upValue] = useState(props.progress);
    const [value1,upValue1] = useState(100 - value);

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.content}</td>
            <td className="chart"><PieChart
                colors={['#50af55', '#eeeeee',]}
                series={[
                    {
                        data: [
                            { id: 0, value: value },
                            { id: 1, value: value1 },
                        ],
                        outerRadius: 100,
                    },
                ]}
                width={400}
                height={200}
            /></td>
            <td>{props.date}</td>
        </tr>
    );
}