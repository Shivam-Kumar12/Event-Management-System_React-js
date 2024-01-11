import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {app,db} from './FirebaseConfig'
var userData = JSON.parse(localStorage.getItem('userKey'))
export const register = async({email, password})=>{
	const resp = await firebase.auth()
	.createUserWithEmailAndPassword(email, password);
	return resp.user;
}

export const login = async({email, password})=>{
	const res = await firebase.auth()
	.signInWithEmailAndPassword(email, password);
	return res.user;
}

export const verifyEmail = async(email) => {
	const res = await firebase.auth().currentUser
	
	res.sendEmailVerification();
	return res.user;
}

export const sendResetEmail = async(email) => {
	// const res = await firebase.auth()
	app.auth().sendPasswordResetEmail(email).then(() => {
		console.log('email sent!');
	  }).catch(function(error) {
		console.log(error);
	  });
}

export const createProfile = async(pData) => {
	try{
		console.log(userData.email);
		const docRef = db.collection('users').doc(userData.email).collection('profile').doc(userData.uid)
		console.log(userData);
		await docRef.set(pData);
		alert('Profile Created Succeesfully')
		return true;
	}
	catch(ex){
		alert(ex.message)
		console.log(ex);
	}
}
export const isAdmin = async(email) => {
	const adminsList = db.collection('admin').doc('lists')
	const doc = await adminsList.get();
	let isAdminVal = false;
	doc.data().admins.forEach(data => {
		if(data===email){
			isAdminVal = true;
		}
		
	});
	return isAdminVal
}
export const getProfileData = async()=>
{
	const profileRef = db.collection('users').doc(userData.email).collection('profile').doc(userData.uid)
	const doc = await profileRef.get();
	return doc.data()
	// if (!doc.exists) {
	// console.log('No such document!');
	// } else {
	// console.log('Document data:', doc.data());
	// return doc.data;
	// }

}

// export const setFacultyRequest = async(email)=>{
// 	try{
// 		const docRef = db.collection('faculty').doc('lists')
// 		await docRef.add({
// 			'email' : email,
// 			'approved' : false,
// 		});
// 		alert('Request Send Succeesfully')
// 		return true;
// 	}
// 	catch(ex){
// 		alert(ex.message)
// 		console.log(ex);
// 	}
// }

export const addFacultyRequest = async (email) => {
	try {
	  const docRef = db.collection('faculty').doc('lists');
	  await docRef.update({
		facultys: firebase.firestore.FieldValue.arrayUnion({
		  email: email,
		  approved: false
		})
	  });
	  alert('Request sent successfully');
	  return true;
	} catch (ex) {
	  alert(ex.message);
	  console.error(ex);
	}
  };
  

export const isFaculty = async(email) => {

	const facultyList = db.collection('faculty').doc('lists')
	const doc = await facultyList.get();
	const data =await doc.data()
	if(data.facultys.some(fac => fac.email === email)) {
		console.log('Exists');
		return true
	  }
	  else{
		console.log('not exists');
		return false
	  }
}