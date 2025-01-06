function skillsMember()
{
    var skill = document.getElementById('skill').value;
    var skillList = document.getElementById('skillList');
    var newSkill = document.createElement('li');
    newSkill.textContent = skill;
    skillList.appendChild(newSkill);
    document.getElementById('skill').value = '';
}