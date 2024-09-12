import db from "../db";


const Schema = db.Schema;
const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 8,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA=Z]{2,}$/.test(v);
      },
    },
  },
});

const Student = db.model("Student", studentSchema);

export default Student;
