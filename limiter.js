
function annualRevenueEmployeeProfitLimit(){
    
    let annualRevenueEmployeeProfit = parseFloat(document.getElementById('annualRevenueEmployeeProfit').value);
    //setting limits from 0 
    if(annualRevenueEmployeeProfit<=0 || isNaN(annualRevenueEmployeeProfit)){
        document.getElementById('annualRevenueEmployeeProfit').value=0;
    }
     getResult();
}

function numberOfEmployeesLimit(){

    let numberOfEmployees = parseFloat(document.getElementById('numberOfEmployees').value);
    //setting limits from 1 to 500
    if(numberOfEmployees<=1 || isNaN(numberOfEmployees)){
        document.getElementById('numberOfEmployees').value=1;
    }
    else if(numberOfEmployees>500){
        document.getElementById('numberOfEmployees').value=500;
    }
     getResult();
}

function numberOfW2SLimit(){

    let numberOfW2S = parseFloat(document.getElementById('numberOfW2S').value);
    // setting limits
    if(numberOfW2S<=1 || isNaN(numberOfW2S)){
        document.getElementById('numberOfW2S').value=1;
    }
    else if(numberOfW2S>1250){
        document.getElementById('numberOfW2S').value=1250;
    }
     getResult();
}

function averageAnnualSalaryLimit(){
    
    let averageAnnualSalary= parseFloat(document.getElementById('averageAnnualSalary').value)||7.25;
        // setting limits
    if(averageAnnualSalary<=7.25){
        document.getElementById('averageAnnualSalary').value=7.25;
    }
    else if(averageAnnualSalary>25.00){
        document.getElementById('averageAnnualSalary').value=25.00;
    }
     getResult();
}

function averageNumberOfDaysPositionVacantLimit(){

    let averageNumberOfDaysPositionVacant= parseFloat(document.getElementById('averageNumberOfDaysPositionVacant').value);
    //setting limits from 3 to 40
    if(averageNumberOfDaysPositionVacant<=2||isNaN(averageNumberOfDaysPositionVacant)){
        document.getElementById('averageNumberOfDaysPositionVacant').value=2;
    }
    else if(averageNumberOfDaysPositionVacant>40){
        document.getElementById('averageNumberOfDaysPositionVacant').value=40;
    }
     getResult();

}

function exitInterviewHoursLimit(){
    
        let exitInterviewHours= parseFloat(document.getElementById('exitInterviewHours').value);
    //setting limits from 2 to 20
    if(exitInterviewHours<=2 || isNaN(exitInterviewHours)){
        document.getElementById('exitInterviewHours').value=2;
        }
        else if(exitInterviewHours>20){
        document.getElementById('exitInterviewHours').value=20;
        }
         getResult();
}

function miscellaneousSeparationCostsLimit(){
    
        let miscellaneousSeparationCosts=parseFloat(document.getElementById('miscellaneousSeparationCosts').value);
        //setting limits from 250 to 1000
        if(miscellaneousSeparationCosts<=250 || isNaN(miscellaneousSeparationCosts)){
            document.getElementById('miscellaneousSeparationCosts').value=250;
        }
        else if(miscellaneousSeparationCosts>1000){
            document.getElementById('miscellaneousSeparationCosts').value=1000;
        }
         getResult();
}

function resumeScreeningHoursLimit(){
        
        let resumeScreeningInHours = parseFloat(document.getElementById('resumeScreeningHours').value);
        //setting limits from 6 to 24
        if(resumeScreeningInHours<=6 || isNaN(resumeScreeningInHours)){
            document.getElementById('resumeScreeningHours').value=6;
        }
        else if(resumeScreeningInHours>24){
            document.getElementById('resumeScreeningHours').value=24;
        }
         getResult();
}

function interviewingHoursLimit(){
        
            let InterviewingInHours = parseFloat(document.getElementById('interviewingHours').value);
            //setting limits from 2 to 16
            if(InterviewingInHours<=2 || isNaN(InterviewingInHours)){
                document.getElementById('interviewingHours').value=2;
            }
            else if(InterviewingInHours>16){
                document.getElementById('interviewingHours').value=16;
            }
             getResult();
}


function miscellaneousOnboardingCostsPerPositionLimit(){
    
        let miscellaneousOnboardingCostsPerPosition= parseFloat(document.getElementById('miscellaneousOnboardingCostsPerPosition').value);
        //setting limits from 50 to 1000
        if(miscellaneousOnboardingCostsPerPosition<=50 || isNaN(miscellaneousOnboardingCostsPerPosition)){
            document.getElementById('miscellaneousOnboardingCostsPerPosition').value=50;
        }
        else if(miscellaneousOnboardingCostsPerPosition>1000){
            document.getElementById('miscellaneousOnboardingCostsPerPosition').value=1000;
        }
         getResult();
}

function totalTrainingHoursLimit(){
        
        let totalTrainingHours=parseFloat(document.getElementById('totalTrainingHours').value);
        //setting limits from 10 to 100
        if(totalTrainingHours<=10 || isNaN(totalTrainingHours)){
            document.getElementById('totalTrainingHours').value=10;
        }
        else if(totalTrainingHours>100){
            document.getElementById('totalTrainingHours').value=100;
        }
         getResult();
}

function otherTrainingCostsLimit(){
        
            let otherTrainingCosts=parseFloat(document.getElementById('otherTrainingCosts').value);
            //setting limits from 200 to 5000
            if(otherTrainingCosts<=200  || isNaN(otherTrainingCosts)){
                document.getElementById('otherTrainingCosts').value=200;
            }
            else if(otherTrainingCosts>5000){
                document.getElementById('otherTrainingCosts').value=5000;
            }
             getResult();
}

function daysTo100ProductivityLimit(){
        
            let daysTo100Productivity=parseFloat(document.getElementById('daysTo100Productivity').value);
            //setting limits from 21 to 90
            if(daysTo100Productivity<=21 || isNaN(daysTo100Productivity)){
                document.getElementById('daysTo100Productivity').value=21;
            }
            else if(daysTo100Productivity>90){
                document.getElementById('daysTo100Productivity').value=90;
            }
             getResult();
}

function numberOfSupervisorLimit(){
        
        let numberOfSupervisor = parseFloat(document.getElementById('numberOfSupervisor').value);
        // setting limits
        if(numberOfSupervisor<=1||isNaN(numberOfSupervisor)){
    
            document.getElementById('numberOfSupervisor').value=1;
        }
        else if(numberOfSupervisor>100){
    
            document.getElementById('numberOfSupervisor').value=100;
        }
         getResult();
}

function numberOfSupervisorW2SLimit(){
            
            let numberOfSupervisorW2S = parseFloat(document.getElementById('numberOfSupervisorW2S').value);
            // setting limits
            if(numberOfSupervisorW2S<=1||isNaN(numberOfSupervisorW2S)){
        
                document.getElementById('numberOfSupervisorW2S').value=1;
            }
            else if(numberOfSupervisorW2S>500){
        
                document.getElementById('numberOfSupervisorW2S').value=500;
            }
             getResult();
}

function averageSupervisorAnnualSalaryLimit(){
            
            let averageSupervisorAnnualSalary = parseFloat(document.getElementById('averageSupervisorAnnualSalary').value);
            // setting limits
            if(averageSupervisorAnnualSalary<=10.00 || isNaN(averageSupervisorAnnualSalary)){
                document.getElementById('averageSupervisorAnnualSalary').value=10.00;
            }
            else if(averageSupervisorAnnualSalary>40.00){
                document.getElementById('averageSupervisorAnnualSalary').value=40.00;
            }
             getResult();
}

function averageNumberOfDaysPositionVacantForSupervisorLimit(){

    let averageNumberOfDaysPositionVacantForSupervisor= parseFloat(document.getElementById('averageNumberOfDaysPositionVacantForSupervisor').value);
    //setting limits
    if (averageNumberOfDaysPositionVacantForSupervisor<=3||isNaN(averageNumberOfDaysPositionVacantForSupervisor)){
        document.getElementById('averageNumberOfDaysPositionVacantForSupervisor').value=3;
    }

    else if(averageNumberOfDaysPositionVacantForSupervisor>40){
        document.getElementById('averageNumberOfDaysPositionVacantForSupervisor').value=40;
    }
     getResult();
}

function exitSupervisorInterviewHoursLimit(){

    let exitSupervisorInterviewHours= parseFloat(document.getElementById('exitSupervisorInterviewHours').value);
    //setting limits
    if(exitSupervisorInterviewHours<=3 || isNaN(exitSupervisorInterviewHours)){
        document.getElementById('exitSupervisorInterviewHours').value=3;
    }
    else if(exitSupervisorInterviewHours>32){
        document.getElementById('exitSupervisorInterviewHours').value=32;
    }
     getResult();
}

function miscellaneousSupervisorSeparationCostsLimit(){
    
        let miscellaneousSupervisorSeparationCosts=parseFloat(document.getElementById('miscellaneousSupervisorSeparationCosts').value);
        //setting limits from 400 to 1600
        if(miscellaneousSupervisorSeparationCosts<=400 || isNaN(miscellaneousSupervisorSeparationCosts)){
            document.getElementById('miscellaneousSupervisorSeparationCosts').value=400;
        }
        else if(miscellaneousSupervisorSeparationCosts>1600){
            document.getElementById('miscellaneousSupervisorSeparationCosts').value=1600;
        }
         getResult();
}
function resumeSupervisorScreeningHoursLimit(){
        
            let resumeSupervisorScreeningHours=parseFloat(document.getElementById('resumeSupervisorScreeningHours').value);
            //setting limits from 12 to 40
            if(resumeSupervisorScreeningHours<=12 || isNaN(resumeSupervisorScreeningHours)){
                document.getElementById('resumeSupervisorScreeningHours').value=12;
            }
            else if(resumeSupervisorScreeningHours>40){
                document.getElementById('resumeSupervisorScreeningHours').value=40;
            }
             getResult();
}

function interviewingSupervisorHoursLimit(){
            
        let interviewingSupervisorHours=parseFloat(document.getElementById('interviewingSupervisorHours').value);
        //setting limits from 4 to 32
         if(interviewingSupervisorHours<=4 || isNaN(interviewingSupervisorHours)){
                    document.getElementById('interviewingSupervisorHours').value=4;
        }
         else if(interviewingSupervisorHours>32){
             document.getElementById('interviewingSupervisorHours').value=32;
        }
         getResult();
}

function miscellaneousSupervisorOnboardingCostsPerPositionLimit(){
                
    let miscellaneousSupervisorOnboardingCostsPerPosition= parseFloat(document.getElementById('miscellaneousSupervisorOnboardingCostsPerPosition').value);
                    //setting limits from 100 to 2000
    if(miscellaneousSupervisorOnboardingCostsPerPosition<=100 || isNaN(miscellaneousSupervisorOnboardingCostsPerPosition)){
        document.getElementById('miscellaneousSupervisorOnboardingCostsPerPosition').value=100;
    }
    else if(miscellaneousSupervisorOnboardingCostsPerPosition>2000){
        document.getElementById('miscellaneousSupervisorOnboardingCostsPerPosition').value=2000;
    }
     getResult();
}
function totalSupervisorTrainingHoursLimit(){
    let totalSupervisorTrainingHours=parseFloat(document.getElementById('totalSupervisorTrainingHours').value);
    //setting limits from 40 to 400
    if(totalSupervisorTrainingHours<=40 || isNaN(totalSupervisorTrainingHours)){
        document.getElementById('totalSupervisorTrainingHours').value=40;
    }
    else if(totalSupervisorTrainingHours>400){
        document.getElementById('totalSupervisorTrainingHours').value=400;
    }
     getResult();
}

function otherSupervisorTrainingCostsLimit(){
    let otherSupervisorTrainingCosts=parseFloat(document.getElementById('otherSupervisorTrainingCosts').value);
    //setting limits from 500 to 25000
    if(otherSupervisorTrainingCosts<=500 || isNaN(otherSupervisorTrainingCosts)){
        document.getElementById('otherSupervisorTrainingCosts').value=500;
    }
    else if(otherSupervisorTrainingCosts>25000){
        document.getElementById('otherSupervisorTrainingCosts').value=25000;
    }
     getResult();
}

function daysTo100ProductivitySupervisorLimit(){
    let daysTo100ProductivitySupervisor=parseFloat(document.getElementById('daysTo100ProductivitySupervisor').value);
    //setting limits from 40 to 120
    if(daysTo100ProductivitySupervisor<=40 || isNaN(daysTo100ProductivitySupervisor)){
        document.getElementById('daysTo100ProductivitySupervisor').value=40;
    }
    else if(daysTo100ProductivitySupervisor>120){
        document.getElementById('daysTo100ProductivitySupervisor').value=120;
    }
     getResult();
}

function mentorTrainingManagerHourlyRateLimit(){
    let mentorTrainingManagerHourlyRate=parseFloat(document.getElementById('mentorTrainingManagerHourlyRate').value);
    //setting limits from 10 to 50
    if(mentorTrainingManagerHourlyRate<=10 || isNaN(mentorTrainingManagerHourlyRate)){
        document.getElementById('mentorTrainingManagerHourlyRate').value=10;
    }
    else if(mentorTrainingManagerHourlyRate>50){
        document.getElementById('mentorTrainingManagerHourlyRate').value=50;
    }
     getResult();
}


function hiringTerminationManagerHourlyRateLimit(){
    let hiringTerminationManagerHourlyRate=parseFloat(document.getElementById('hiringTerminationManagerHourlyRate').value);
    //setting limits from 10 to 50
    if(hiringTerminationManagerHourlyRate<=10 || isNaN(hiringTerminationManagerHourlyRate)){
        document.getElementById('hiringTerminationManagerHourlyRate').value=10;
    }
    else if(hiringTerminationManagerHourlyRate>50){
        document.getElementById('hiringTerminationManagerHourlyRate').value=50;
    }
     getResult();
}

function aveHoursInWorkingDayLimit(){
    let aveHoursInWorkingDay=parseFloat(document.getElementById('aveHoursInWorkingDay').value);
    //setting limits from 4 to 10
    if(aveHoursInWorkingDay<=4 || isNaN(aveHoursInWorkingDay)){
        document.getElementById('aveHoursInWorkingDay').value=4;
    }
    else if(aveHoursInWorkingDay>10){
        document.getElementById('aveHoursInWorkingDay').value=10;
    }
     getResult();
}

function annualRecruitingCostsLimit(){
    let annualRecruitingCosts=parseFloat(document.getElementById('annualRecruitingCosts').value);
    //setting limits from 0 to 500000
    if(annualRecruitingCosts<=0 || isNaN(annualRecruitingCosts)){
        document.getElementById('annualRecruitingCosts').value=0;
    }
    else if(annualRecruitingCosts>500000){
        document.getElementById('annualRecruitingCosts').value=500000;
    }
     getResult();
}
function aveWorkingDaysPerEmployeeLimit(){
    let aveWorkingDaysPerEmployee= parseFloat(document.getElementById('aveWorkingDaysPerEmployee').value);
    //setting limits from 0 to 235
    if(aveWorkingDaysPerEmployee<=0 || isNaN(aveWorkingDaysPerEmployee)){
        document.getElementById('aveWorkingDaysPerEmployee').value=0;
    }
    else if(aveWorkingDaysPerEmployee>235){
        document.getElementById('aveWorkingDaysPerEmployee').value=235;
    }
     getResult();
}

function savingsExpectedLimit(){
    let savingsExpected=parseFloat(document.getElementById('savingsExpected').value);
    //setting limits from 10 to 35
    if(savingsExpected<=10 || isNaN(savingsExpected)){
        document.getElementById('savingsExpected').value=10;
    }
    else if(savingsExpected>35){
        document.getElementById('savingsExpected').value=35;
    }
     getResult();
}
function savingsTypicalLimit(){
    let savingsTypical=parseFloat(document.getElementById('savingsTypical').value);
    //setting limits from 20 to 45
    if(savingsTypical<=20 || isNaN(savingsTypical)){
        document.getElementById('savingsTypical').value=20;
    }
    else if(savingsTypical>45){
        document.getElementById('savingsTypical').value=45;
    }
     getResult();
}

function savingsAggressiveLimit(){
    let savingsAggressive=parseFloat(document.getElementById('savingsAggressive').value);
    //setting limits from 33 to 60
    if(savingsAggressive<=33 || isNaN(savingsAggressive)){
        document.getElementById('savingsAggressive').value=33;
    }
    else if(savingsAggressive>60){
        document.getElementById('savingsAggressive').value=60;
    }
    getResult();
}
