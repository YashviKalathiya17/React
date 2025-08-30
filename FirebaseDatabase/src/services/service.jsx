import { db } from "../firebase/firebase.config";
import { collection,getDocs,addDoc,deleteDoc,updateDoc,doc } from "firebase/firestore";

const StudentCollection = collection(db,"students");

//Add student
export const addStudent=async(student)=>{
    try{
        const docRef=await addDoc(StudentCollection,student);
        return docRef
    }catch(error){
        console.log("Error while adding Student :",error);
    }
};


//Delete student
export const deleteStudent = async(id)=>{
    try{
        const docRef = doc(db,"students",id);
        await deleteDoc(docRef);
    }catch(error){
        console.log("Error For Deleting :",error);
        
    }
}

//Update Studnet
export const updateStudent = async (id, student) => {
  try {
    const docRef = doc(db, "students", id);
    await updateDoc(docRef, student);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};


//To Get Student
export const getStudent = async () => {
  try {
    const data = await getDocs(StudentCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};