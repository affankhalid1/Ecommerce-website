import { useUser } from "@clerk/nextjs";


const UserProfile = () => {
  const { user } = useUser(); // Extract the authenticated user

  if(!user){
    return
  }
  else{
    const email = user.primaryEmailAddress?.emailAddress
    return
  }

  return (
    <div>
     
    </div>
  );
};

export default UserProfile;
