import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { 
  People, 
  School, 
  PersonOutline, 
  AttachMoney,
  Notifications,
  TrendingUp,
  PersonAdd,
  AccessTime
} from '@mui/icons-material';
import SeeNotice from '../../components/SeeNotice';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';

const StatCard = ({ icon: Icon, title, value, prefix = '', trend = '+14%', color }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <span className="text-green-500 text-sm font-medium flex items-center gap-1">
        <TrendingUp className="h-4 w-4" />
        {trend}
      </span>
    </div>
    <h3 className="text-sm text-gray-600 font-medium mb-2">{title}</h3>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold text-gray-800">
        {prefix}<CountUp start={0} end={value} duration={2.5} />
      </span>
    </div>
  </div>
);

const ActivityCard = ({ icon: Icon, title, time, description, color }) => (
  <div className="flex gap-4 items-start">
    <div className={`p-2 rounded-lg ${color}`}>
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div>
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
      <span className="text-xs text-gray-400 flex items-center gap-1 mt-1">
        <AccessTime className="h-3 w-3" /> {time}
      </span>
    </div>
  </div>
);

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const { studentsList } = useSelector((state) => state.student);
  const { sclassesList } = useSelector((state) => state.sclass);
  const { teachersList } = useSelector((state) => state.teacher);
  const { currentUser } = useSelector(state => state.user);
  const adminID = currentUser._id;

  useEffect(() => {
    dispatch(getAllStudents(adminID));
    dispatch(getAllSclasses(adminID, "Sclass"));
    dispatch(getAllTeachers(adminID));
  }, [adminID, dispatch]);

  const numberOfStudents = studentsList?.length || 0;
  const numberOfClasses = sclassesList?.length || 0;
  const numberOfTeachers = teachersList?.length || 0;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Container maxWidth="xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
          <p className="text-gray-500">Welcome back, {currentUser.name}</p>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <StatCard
                icon={People}
                title="Total Students"
                value={numberOfStudents}
                color="bg-blue-500"
              />
              <StatCard
                icon={School}
                title="Total Classes"
                value={numberOfClasses}
                color="bg-purple-500"
              />
              <StatCard
                icon={PersonOutline}
                title="Total Teachers"
                value={numberOfTeachers}
                color="bg-green-500"
              />
              <StatCard
                icon={AttachMoney}
                title="Fees Collection"
                value={23000}
                prefix="$"
                color="bg-yellow-500"
              />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
                <button className="text-blue-500 text-sm font-medium">View All</button>
              </div>
              <div className="space-y-6">
                <ActivityCard
                  icon={PersonAdd}
                  title="New Student Registration"
                  description="John Doe has been enrolled in Class X"
                  time="2 hours ago"
                  color="bg-blue-500"
                />
                <ActivityCard
                  icon={Notifications}
                  title="New Notice Published"
                  description="End of term examination schedule has been posted"
                  time="5 hours ago"
                  color="bg-yellow-500"
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-800">Recent Notices</h2>
                <button className="text-blue-500 text-sm font-medium">View All</button>
              </div>
              <div className="space-y-4">
                <SeeNotice />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdminHomePage;