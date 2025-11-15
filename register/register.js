var participantCount = 1;

document.getElementById('add').addEventListener('click', function() {
    lastParticipant = document.querySelector('.participant' + (participantCount));
    
    participantCount++;

    lastParticipant.insertAdjacentHTML('afterend',
    `<section class="participant${participantCount}">
            <p>Participant ${participantCount}</p>
            <div class="item">
                  <label for="fname"> First Name<span>*</span></label>
                  <input id="fname${participantCount}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
                <label for="activity">Activity #<span>*</span></label>
                <input id="activity${participantCount}" type="text" name="activity" />
            </div>
            <div class="item">
                <label for="fee">Fee ($)<span>*</span></label>
                <input id="fee${participantCount}" type="number" name="fee" />
            </div>
            <div class="item">
                <label for="date">Desired Date <span>*</span></label>
                <input id="date${participantCount}" type="date" name="date" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select>
                    <option selected value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>`
    );
});

// var submitButton = document.getElementById('submit');
var form = document.getElementById('form');
form.classList.toggle("hide"); // Show the form initially

var summary = document.getElementById('summary');

function submitForm(event) {
    event.preventDefault();
    
    let cost = 0;
    for (let i = 1; i <= participantCount; i++) {
        cost += Number(document.getElementById('fee' + i).value);
    }
    let guardianName = document.getElementById('adult_name').value;

    form.classList.toggle("hide");
    summary.textContent = `Thank you ${guardianName} for registering. You have registered ${participantCount} participants and owe $${cost} in Fees.`;
    summary.classList.toggle("hide");

}
form.addEventListener('submit', submitForm);