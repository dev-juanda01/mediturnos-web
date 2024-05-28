import { TData } from "@/components/Base/StyledComponents/TData"
import { ReportShiftType } from "@/types"

function ReportShift({ data }: { data: ReportShiftType }) {
  return (
    <tr>
        <TData>{ data.id }</TData>
        <TData>{ data.name }</TData>
        <TData>{ data.last_name }</TData>
        <TData>{ data.age }</TData>
    </tr>
  )
}

export default ReportShift