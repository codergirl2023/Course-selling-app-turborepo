import { Button, Card, Typography } from "@mui/material";
import { Course, CoursesProps } from "types/src/index";

export function Courses({ courses }: CoursesProps) {

    return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {courses.map(course => {
            return <Course key={course._id} course={course} />
        }
        )}
    </div>
}

function Course({ course }: { course: Course }) {
    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} alt="" style={{width: 300}} />
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <Button variant="contained" size="large" onClick={() => {
                window.location.href = '/course/'+course._id;

            }}>Edit</Button>
        </div>
    </Card>

}
