// App.js
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';

import StdRegistration from './Components/Students/StdRegistration';
import StudentList from './Components/Students/StdList';
import EditStudent from './Components/Edit/EditStudent';
import TeacherList from './Components/Teachers/TeachList';
import SubList from './Components/Subjects/SubList';
import SubAdd from './Components/Subjects/SubAdd';
import Form from './Components/Class/Form';
import StdRegis from './Components/School/StdRegis';
import TeachRegis from './Components/School/TeachRegis';
import ClassList from './Components/Class/ClassList';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
      {/* Routes outside of the Layout */}
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Layout with nested routes */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="stdRegistration" element={<StdRegistration />} />
        <Route path="stdRegis" element={<StdRegis />} />
        <Route path="stdList" element={<StudentList />} />
        <Route path="teacherRegis" element={<TeacherList />} />
        <Route path="subList" element={<SubList />} />
        <Route path="subAdd" element={<SubAdd />} />
        <Route path="form" element={<Form />} />
        <Route path="classList" element={<ClassList />} />
        <Route path="teacherRegistration" element={<TeachRegis />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        {/* Add more routes as needed */}
      </Route>
    </Routes>
  );
}

export default App;





