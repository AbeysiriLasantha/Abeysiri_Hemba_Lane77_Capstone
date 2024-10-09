const bcrypt = require('bcrypt');
const User = require('../models/users.js'); // Import the User model

// Create a new user with hashed password
const createUser = async (req, res) => {
    const { email, password, firstName, lastName, country, address, city, state, zipCode, phone } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'This email already exists' });
        }

        // Hash the password before saving
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new User({
            email,
            password: hashedPassword,  // Store the hashed password
            firstName,
            lastName,
            country,
            address,
            city,
            state,
            zipCode,
            phone
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });

    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

// Search user by email
const searchUserByEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

// Update user by email
const updateUser = async (req, res) => {
    const { email } = req.params;
    const updateFields = req.body;

    try {
        const updatedUser = await User.findOneAndUpdate({ email }, updateFields, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

// Delete user by email
const deleteUser = async (req, res) => {
    const { email } = req.params;

    try {
        const deletedUser = await User.findOneAndDelete({ email });
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

// Optional: Login user and validate password
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the plain text password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

module.exports = {
    createUser,
    searchUserByEmail,
    updateUser,
    deleteUser,
    loginUser // Optional function for logging in and validating password
};
