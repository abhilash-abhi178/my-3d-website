// Initialize Supabase client
const supabaseUrl = 'https://rcntsnlzfpgstoqzbkch.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjbnRzbmx6ZnBnc3RvcXpia2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MzE0MDUsImV4cCI6MjAzNzMwNzQwNX0.HJhqUZlNQRXT4O0rtqpgO8eARW5Fm3dJR6iIbCFl5YQ'; // Replace with your Supabase Anon Key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Get elements
const container = document.getElementById('container');
const signUpForm = document.querySelector('.form-container.sign-up form');
const signInForm = document.querySelector('.form-container.sign-in form');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Handle user registration
async function registerUser(name, email, password) {
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        console.error('Registration error:', error.message);
        alert('Registration failed: ' + error.message);
    } else {
        console.log('Registration successful:', user);
        alert('Registration successful! Please check your email for confirmation.');
    }
}

// Handle user login
async function loginUser(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        console.error('Login error:', error.message);
        alert('Login failed: ' + error.message);
    } else {
        console.log('Login successful:', user);
        
        // Redirect to the dashboard or profile page
        window.location.href = 'proposal.html'; // Replace with your target page URL
    }
}

// Handle form submission for registration
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = signUpForm.querySelector('input[placeholder="Name"]').value;
    const email = signUpForm.querySelector('input[placeholder="Email"]').value;
    const password = signUpForm.querySelector('input[placeholder="Password"]').value;

    // Register the user
    registerUser(name, email, password);
});

// Handle form submission for login
signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = signInForm.querySelector('input[placeholder="Email"]').value;
    const password = signInForm.querySelector('input[placeholder="Password"]').value;

    // Log in the user
    loginUser(email, password);
});

// Toggle between sign up and sign in forms
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
