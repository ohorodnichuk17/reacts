import React, { useState } from 'react';
import './styles.css';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nick, setNick] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const handleRegistration = () => {
        if (!email || !password || !nick || !gender || !age || !photo || !description || !tags) {
            alert('Please fill in all fields');
            return;
        }

        console.log('Registration successful!');
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Nick:', nick);
        console.log('Gender:', gender);
        console.log('Age:', age);
        console.log('Photo:', photo);
        console.log('Description:', description);
        console.log('Tags:', tags);
    };

    return (
        <section>
            <div className="signin">
                <div className="content">
                    <h2>Registration</h2>
                    <div className="form">
                        <div className="inputBox">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <i>Email</i>
                        </div>
                        <div className="inputBox">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <i>Password</i>
                        </div>
                        <div className="inputBox">
                            <input type="text" value={nick} onChange={(e) => setNick(e.target.value)} />
                            <i>Nick</i>
                        </div>
                        <div className="inputBox">
                            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                            <i>Gender</i>
                        </div>
                        <div className="inputBox">
                            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                            <i>Age</i>
                        </div>
                        <div className="inputBox">
                            <input type="file" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                            <i>Photo</i>
                        </div>
                        <div className="inputBox">
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                            <i>Description</i>
                        </div>
                        <div className="inputBox">
                            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
                            <i>Tags</i>
                        </div>
                        <div className="inputBox">
                            <button type="button" onClick={handleRegistration}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
