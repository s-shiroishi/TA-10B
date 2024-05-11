import TableHeaderCell from "../basics/atoms/TableHeaderCell";
import TableHeader from "../basics/molecules/TableHeader";
import TableRow from "../basics/molecules/TableRow";

const TodoTableHeader = () => (
    <TableHeader>
        <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>コメント</TableHeaderCell>
            <TableHeaderCell>状態</TableHeaderCell>
            <TableHeaderCell>操作</TableHeaderCell>
        </TableRow>
    </TableHeader>
);

export default TodoTableHeader;