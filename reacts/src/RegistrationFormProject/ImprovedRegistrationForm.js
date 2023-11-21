import React, { useState } from 'react';

const ImprovedRegistrationForm = () => {
    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const handleRegistration = () => {
        if (!nick || !email || !gender || !age || !password || !photo || !description || !tags) {
            alert('Please fill in all fields');
            return;
        }

        console.log('Improved registration successful!');
        console.log('Nick:', nick);
        console.log('Email:', email);
        console.log('Gender:', gender);
        console.log('Age:', age);
        console.log('Password:', password);
        console.log('Photo:', photo);
        console.log('Description:', description);
        console.log('Tags:', tags);
    };

    return (
        <div>
            <label>Nick: <input type="text" value={nick} onChange={(e) => setNick(e.target.value)} /></label>
            <br />
            <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            <br />
            <label>Gender: <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} /></label>
            <br />
            <label>Age: <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></label>
            <br />
            {/* Additional fields */}
            <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
            <br />
            <label>Photo: <input type="file" value={photo} onChange={(e) => setPhoto(e.target.value)} /></label>
            <br />
            <label>Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} /></label>
            <br />
            <label>Tags: <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} /></label>
            <br />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default ImprovedRegistrationForm;
