// Constants for activity intensity ranges
const activityConstants = {
    light: { min: 0.0001, max: 0.0005 },
    jogging: { min: 0.0005, max: 0.002 },
    sprinting: { min: 0.002, max: 0.005 },
    cycling: { min: 0.002, max: 0.005 },
};

// Calculate calories burned
function calculateCalories() {
    // Get user inputs
    const weight = parseFloat(document.getElementById("weight").value);
    const heartRate = parseFloat(document.getElementById("heart-rate").value);
    const restingHeartRate = parseFloat(
        document.getElementById("resting-heart-rate").value || 70
    );
    const activity = document.getElementById("activity").value;
    const duration = parseFloat(document.getElementById("duration").value);

    // Validate inputs
    if (isNaN(weight) || isNaN(heartRate) || isNaN(restingHeartRate) || isNaN(duration)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    // Get the constant range for the selected activity
    const { min, max } = activityConstants[activity];
    const k = (min + max) / 2; // Use the average constant

    // Calculate calories burned per minute
    const caloriesPerMinute = (heartRate - restingHeartRate) * restingHeartRate * k;

    // Calculate total calories burned
    const totalCalories = caloriesPerMinute * duration;

    // Display results
    document.getElementById("calories-per-minute").textContent = 
        `Calories burned per minute: ${caloriesPerMinute.toFixed(2)} cal/min`;
    document.getElementById("total-calories").textContent = 
        `Total calories burned: ${totalCalories.toFixed(2)} cal`;
}

// Attach event listener to the calculate button
document.getElementById("calculate-button").addEventListener("click", calculateCalories);
