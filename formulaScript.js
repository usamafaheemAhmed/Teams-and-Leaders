window.onload = function() {
    getResult();
};

function getResult(){
  
    // fixed values from cell 64-68
    let mentorTrainingManagerHourlyRate = parseFloat(document.getElementById('mentorTrainingManagerHourlyRate').value)||18;
    let hiringTrainingManagerHourlyRate = parseFloat(document.getElementById('hiringTerminationManagerHourlyRate').value)||35;
    let aveHoursInWorkingDay = parseFloat(document.getElementById('aveHoursInWorkingDay').value)||6.5;
    let annualRecruitingCosts = parseFloat(document.getElementById('annualRecruitingCosts').value)||50000;
    let aveWorkingDaysPerEmployee= parseFloat(document.getElementById('aveWorkingDaysPerEmployee').value)||235;

    // fixed values from cell 64-68
    let numberOfEmployees = parseFloat(document.getElementById('numberOfEmployees').value)||1;
    let numberOfW2S = parseFloat(document.getElementById('numberOfW2S').value)||1;
    let averageAnnualSalary= parseFloat(document.getElementById('averageAnnualSalary').value)||7.25;

    let terminationSearchYear = numberOfW2S-numberOfEmployees;



    console.log('Supervisor started here');

    let numberOfSupervisor = parseFloat(document.getElementById('numberOfSupervisor').value)||7;
    let numberOfSupervisorW2S = parseFloat(document.getElementById('numberOfSupervisorW2S').value)||9;    
    let averageSupervisorAnnualSalary = parseFloat(document.getElementById('averageSupervisorAnnualSalary').value)||20;
    let terminationSupervisorSearchYear = numberOfSupervisorW2S-numberOfSupervisor;
    console.log(terminationSupervisorSearchYear);

     // Costs to Cover During Vacancy from Supervisor b23 to b25
     let averageNumberOfDaysPositionVacantForSupervisor= parseFloat(document.getElementById('averageNumberOfDaysPositionVacantForSupervisor').value)||15;

     let totalCostsToCoverByEmployeeTypeForSupervisor=(averageNumberOfDaysPositionVacantForSupervisor*aveHoursInWorkingDay)*averageSupervisorAnnualSalary;
     console.log(totalCostsToCoverByEmployeeTypeForSupervisor);

     document.getElementById('totalCostsToCoverBySupervisorsType').innerHTML='$'+toComma(totalCostsToCoverByEmployeeTypeForSupervisor);

     let annualTotalCostsToCoverForSupervisor=totalCostsToCoverByEmployeeTypeForSupervisor*terminationSupervisorSearchYear;
     console.log(annualTotalCostsToCoverForSupervisor,': ANNUAL TOTAL COSTS TO COVER FOR SUPERVISOR');
     document.getElementById('annualTotalCostsToCoverSupervisors').innerHTML='$'+toComma(annualTotalCostsToCoverForSupervisor);

     // from Supervisor b23 to b25
 
     // Costs to Separate Supervisor Employee from b28 ot b32
    let exitSupervisorInterviewHours= parseFloat(document.getElementById('exitSupervisorInterviewHours').value)||16;



     let exitInterviewCostForSupervisor=((hiringTrainingManagerHourlyRate+averageSupervisorAnnualSalary) * exitSupervisorInterviewHours);
     console.log(exitInterviewCostForSupervisor,': EXIT INTERVIEW COST');
     document.getElementById('exitInterviewCostForSupervisor').innerHTML='$'+toComma(exitInterviewCostForSupervisor); 
     let miscellaneousSupervisorSeparationCosts=parseFloat(document.getElementById('miscellaneousSupervisorSeparationCosts').value)||1000;
     
     let totalSeparationCostsByEmployeeTypeForSupervisor=miscellaneousSupervisorSeparationCosts+exitInterviewCostForSupervisor;
     console.log(totalSeparationCostsByEmployeeTypeForSupervisor,': TOTAL SEPARATION COSTS BY EMPLOYEE TYPE');
     document.getElementById('totalSeparationCostsBySupervisorType').innerHTML='$'+toComma(totalSeparationCostsByEmployeeTypeForSupervisor); 
    
     let annualTotalSeparationCostsForSupervisor=totalSeparationCostsByEmployeeTypeForSupervisor*terminationSupervisorSearchYear;
     console.log(annualTotalSeparationCostsForSupervisor,': ANNUAL TOTAL SEPARATION COSTS');
     document.getElementById('annualTotalSeparationCostsForSupervisor').innerHTML='$'+toComma(annualTotalSeparationCostsForSupervisor); 

     // from  Supervisor b28 ot b32


     
    // Costs to Hire Replacement from  35 ton 42
    let resumeSupervisorScreeningHours = parseFloat(document.getElementById('resumeSupervisorScreeningHours').value)||12;
   
    let interviewingSupervisorHours = parseFloat(document.getElementById('interviewingSupervisorHours').value)||16;
   
    let totalHiringManagerHoursToFillPositionForSupervisor=interviewingSupervisorHours+resumeSupervisorScreeningHours;
    console.log(totalHiringManagerHoursToFillPositionForSupervisor,': TOTAL HIRING MANAGER HOURS TO FILL POSITION');
    document.getElementById('totalHiringManagerHoursToFillPositionForSupervisor').innerHTML='$'+toComma(totalHiringManagerHoursToFillPositionForSupervisor); 

    let totalHiringManagerCostToFillPositionForSupervisor=(hiringTrainingManagerHourlyRate*totalHiringManagerHoursToFillPositionForSupervisor);
    console.log(totalHiringManagerCostToFillPositionForSupervisor,': TOTAL HIRING MANAGER COST TO FILL POSITION');
    document.getElementById('totalHiringManagerCostToFillPositionForSupervisor').innerHTML='$'+toComma(totalHiringManagerCostToFillPositionForSupervisor); 
   
   
    let addOfEmployedSupervisedForSupervisor=terminationSearchYear+terminationSupervisorSearchYear;
    let recruitingAndAdvertisingCostsPerPositionForSupervisor=annualRecruitingCosts/addOfEmployedSupervisedForSupervisor;
    console.log(recruitingAndAdvertisingCostsPerPositionForSupervisor,': RECRUITING AND ADVERTISING COSTS PER POSITION');
    document.getElementById('recruitingAndAdvertisingCostsPerPositionForSupervisor').innerHTML='$'+toComma(recruitingAndAdvertisingCostsPerPositionForSupervisor); 
    
    let miscellaneousSupervisorOnboardingCostsPerPosition= parseFloat(document.getElementById('miscellaneousSupervisorOnboardingCostsPerPosition').value)||1000;
  
    let totalCostToHireByEmployeeTypeForSupervisor=totalHiringManagerCostToFillPositionForSupervisor+recruitingAndAdvertisingCostsPerPositionForSupervisor+miscellaneousSupervisorOnboardingCostsPerPosition;
    console.log(totalCostToHireByEmployeeTypeForSupervisor,': TOTAL COST TO HIRE BY EMPLOYEE TYPE');
    document.getElementById('totalCostToHireByEmployeeTypeForSupervisor').innerHTML='$'+toComma(totalCostToHireByEmployeeTypeForSupervisor); 

    let annualTotalCostToHireForSupervisor=totalCostToHireByEmployeeTypeForSupervisor*terminationSupervisorSearchYear;
    console.log(annualTotalCostToHireForSupervisor,': ANNUAL TOTAL COST TO HIRE');
    document.getElementById('annualCostsToHireReplacementsForSupervisor').innerHTML='$'+toComma(annualTotalCostToHireForSupervisor); 

    // from 35 to 42

    // COST OF NEW HIRE TRAINING  from 44 to 50
    let totalSupervisorTrainingHours=parseFloat(document.getElementById('totalSupervisorTrainingHours').value)||120;
  

    let totalTrainingCostsForSupervisor=(averageSupervisorAnnualSalary*totalSupervisorTrainingHours);
    console.log(totalTrainingCostsForSupervisor,': TOTAL TRAINING COSTS');
    document.getElementById('traineeAttendanceCostForSupervisor').innerHTML='$'+toComma(totalTrainingCostsForSupervisor); 

    let mentorTrainerCostForSupervisor=mentorTrainingManagerHourlyRate*totalSupervisorTrainingHours;
    console.log(mentorTrainerCostForSupervisor,': MENTOR TRAINER COST');
    document.getElementById('mentorTrainerCostForSupervisor').innerHTML='$'+toComma(mentorTrainerCostForSupervisor);

    let otherSupervisorTrainingCosts=parseFloat(document.getElementById('otherSupervisorTrainingCosts').value)||500;
   
  
    let totalCostNewHireTrainingCostByEmployeeTypeForSupervisor=otherSupervisorTrainingCosts+totalTrainingCostsForSupervisor+mentorTrainerCostForSupervisor;
    console.log(totalCostNewHireTrainingCostByEmployeeTypeForSupervisor,': TOTAL COST NEW HIRE TRAINING COST BY EMPLOYEE TYPE');
    document.getElementById('totalCostNewHireTrainingCostByEmployeeTypeForSupervisor').innerHTML='$'+toComma(totalCostNewHireTrainingCostByEmployeeTypeForSupervisor);
    
    let annualTotalNewHireTrainingCostsForSupervisor=totalCostNewHireTrainingCostByEmployeeTypeForSupervisor*terminationSupervisorSearchYear;
    console.log(annualTotalNewHireTrainingCostsForSupervisor,': ANNUAL TOTAL NEW HIRE TRAINING COSTS');
    document.getElementById('annualTotalNewHireTrainingCostsForSupervisor').innerHTML='$'+toComma(annualTotalNewHireTrainingCostsForSupervisor);
    // form 44 to 50
    console.log("down");

    // COST OF LOST PRODUCTIVITY from 52 to 57
    let daysTo100ProductivitySupervisor=parseFloat(document.getElementById('daysTo100ProductivitySupervisor').value)||50;
  
    let dailyCostForSupervisor=aveHoursInWorkingDay*averageSupervisorAnnualSalary;
    console.log(dailyCostForSupervisor,': DAILY COST');
    document.getElementById('dailySupervisor').innerHTML='$'+toComma(dailyCostForSupervisor);

    let totalCostToReach100ProductivityForSupervisor=0.5*(daysTo100ProductivitySupervisor*dailyCostForSupervisor);
    console.log(totalCostToReach100ProductivityForSupervisor,': TOTAL COST TO REACH 100% PRODUCTIVITY');
    document.getElementById('totalCostOfLostProductivityPerEmployeeTypeForSupervisor').innerHTML='$'+toComma(totalCostToReach100ProductivityForSupervisor);

    let annualTotalLostProductivityCostsForSupervisor=totalCostToReach100ProductivityForSupervisor*terminationSupervisorSearchYear;
    console.log(annualTotalLostProductivityCostsForSupervisor,': ANNUAL TOTAL LOST PRODUCTIVITY COSTS');
    document.getElementById('annualTotalLostProductivityCostsForSupervisor').innerHTML='$'+toComma(annualTotalLostProductivityCostsForSupervisor);
    // COST OF LOST PRODUCTIVITY from 52 to 57

    // line 58
    let totalCostOfTurnoverPerEmployeeTypeForSupervisor=totalCostNewHireTrainingCostByEmployeeTypeForSupervisor+totalCostToHireByEmployeeTypeForSupervisor+totalSeparationCostsByEmployeeTypeForSupervisor+totalCostsToCoverByEmployeeTypeForSupervisor+totalCostToReach100ProductivityForSupervisor;
    console.log(totalCostOfTurnoverPerEmployeeTypeForSupervisor,': TOTAL COST OF TURNOVER PER EMPLOYEE TYPE');
     // line 58

       // line 60
       let percentOfAnnualSAlaryForSupervisor = (totalCostOfTurnoverPerEmployeeTypeForSupervisor/(aveHoursInWorkingDay*averageSupervisorAnnualSalary*aveWorkingDaysPerEmployee))*100;
       console.log(percentOfAnnualSAlaryForSupervisor,': PERCENT OF ANNUAL SALARY');
           // line 60
    let annualTotalCostOfTurnoverForSupervisor=annualTotalLostProductivityCostsForSupervisor+annualTotalNewHireTrainingCostsForSupervisor+annualTotalCostToHireForSupervisor+annualTotalSeparationCostsForSupervisor+annualTotalCostsToCoverForSupervisor;
    console.log(annualTotalCostOfTurnoverForSupervisor,': ANNUAL TOTAL COST OF TURNOVER');

    console.log('Supervisor ended here');

    console.log(terminationSearchYear);

    // Costs to Cover During Vacancy from b23 to b25
    let averageNumberOfDaysPositionVacant= parseFloat(document.getElementById('averageNumberOfDaysPositionVacant').value)||7;


    let totalCostsToCoverByEmployeeType=(averageNumberOfDaysPositionVacant*aveHoursInWorkingDay)*averageAnnualSalary;
    console.log(totalCostsToCoverByEmployeeType);
    document.getElementById('totalCostsToCoverByEmployeeType').innerHTML='$'+toComma(totalCostsToCoverByEmployeeType);
    let annualTotalCostsToCover=totalCostsToCoverByEmployeeType*terminationSearchYear;
    console.log(annualTotalCostsToCover,': ANNUAL TOTAL COSTS TO COVER');
    document.getElementById('annualTotalCostsToCoverEmployee').innerHTML='$'+toComma(annualTotalCostsToCover);
    // from b23 to b25

    // Costs to Separate Employee from b28 ot b32
    let exitInterviewHours= parseFloat(document.getElementById('exitInterviewHours').value)||8;
 
    let exitInterviewCost=((hiringTrainingManagerHourlyRate+averageAnnualSalary) * exitInterviewHours);
    console.log(exitInterviewCost,': EXIT INTERVIEW COST'); 
    document.getElementById('exitInterviewCostForEmployee').innerHTML='$'+toComma(exitInterviewCost);
    let miscellaneousSeparationCosts=parseFloat(document.getElementById('miscellaneousSeparationCosts').value)||500;
  

    let totalSeparationCostsByEmployeeType=miscellaneousSeparationCosts+exitInterviewCost;
    console.log(totalSeparationCostsByEmployeeType,': TOTAL SEPARATION COSTS BY EMPLOYEE TYPE');
    document.getElementById('totalSeparationCostsByEmployeeType').innerHTML='$'+toComma(totalSeparationCostsByEmployeeType);
    let annualTotalSeparationCosts=totalSeparationCostsByEmployeeType*terminationSearchYear;
    console.log(annualTotalSeparationCosts,': ANNUAL TOTAL SEPARATION COSTS');
    document.getElementById('annualTotalSeparationCosts').innerHTML='$'+toComma(annualTotalSeparationCosts);

    // from b28 ot b32
    

    // Costs to Hire Replacement from  35 ton 42
    let resumeScreeningInHours = parseFloat(document.getElementById('resumeScreeningHours').value)||12;
    let InterviewingInHours = parseFloat(document.getElementById('interviewingHours').value);

    let totalHiringManagerHoursToFillPosition=InterviewingInHours+resumeScreeningInHours;
    console.log(totalHiringManagerHoursToFillPosition,': TOTAL HIRING MANAGER HOURS TO FILL POSITION');
    document.getElementById('totalHiringManagerHoursToFillPositionForEmployee').innerHTML='$'+toComma(totalHiringManagerHoursToFillPosition);

    let totalHiringManagerCostToFillPosition=(hiringTrainingManagerHourlyRate*totalHiringManagerHoursToFillPosition);
    console.log(totalHiringManagerCostToFillPosition,': TOTAL HIRING MANAGER COST TO FILL POSITION');
    document.getElementById('totalHiringManagerCostToFillPositionForEmployee').innerHTML='$'+toComma(totalHiringManagerCostToFillPosition);
  
    let addOfEmployeeAndSupervisor=terminationSearchYear+terminationSupervisorSearchYear;
    let recruitingAndAdvertisingCostsPerPosition=annualRecruitingCosts/addOfEmployeeAndSupervisor;
    console.log(recruitingAndAdvertisingCostsPerPosition,': RECRUITING AND ADVERTISING COSTS PER POSITION');
    document.getElementById('recruitingAndAdvertisingCostsPerPositionForEmployee').innerHTML='$'+toComma(recruitingAndAdvertisingCostsPerPosition);

    let miscellaneousOnboardingCostsPerPosition= parseFloat(document.getElementById('miscellaneousOnboardingCostsPerPosition').value)||500;
 
    let totalCostToHireByEmployeeType=totalHiringManagerCostToFillPosition+recruitingAndAdvertisingCostsPerPosition+miscellaneousOnboardingCostsPerPosition;
    console.log(totalCostToHireByEmployeeType,': TOTAL COST TO HIRE BY EMPLOYEE TYPE');
    document.getElementById('totalCostToHireByEmployeeTypeForEmployee').innerHTML='$'+toComma(totalCostToHireByEmployeeType);

    let annualTotalCostToHire=totalCostToHireByEmployeeType*terminationSearchYear;
    console.log(annualTotalCostToHire,': ANNUAL TOTAL COST TO HIRE');
    document.getElementById('annualCostsToHireReplacementsForEmployee').innerHTML='$'+toComma(annualTotalCostToHire);

    // from 35 ton 42


    // COST OF NEW HIRE TRAINING  from 44 to 50
    let totalTrainingHours=parseFloat(document.getElementById('totalTrainingHours').value)||40;
   
    let totalTrainingCosts=(averageAnnualSalary*totalTrainingHours);
    document.getElementById('traineeAttendanceCostForEmployee').innerHTML='$'+toComma(totalTrainingCosts);

    console.log(totalTrainingCosts,': TOTAL TRAINING COSTS');
    let mentorTrainerCost=mentorTrainingManagerHourlyRate*totalTrainingHours;
    document.getElementById('mentorTrainerCostForEmployee').innerHTML='$'+toComma(mentorTrainerCost);

    console.log(mentorTrainerCost,': MENTOR TRAINER COST');
    let otherTrainingCosts=parseFloat(document.getElementById('otherTrainingCosts').value)||200;

   

    let totalCostNewHireTrainingCostByEmployeeType=otherTrainingCosts+totalTrainingCosts+mentorTrainerCost;
    console.log(totalCostNewHireTrainingCostByEmployeeType,': TOTAL COST NEW HIRE TRAINING COST BY EMPLOYEE TYPE');
    document.getElementById('totalCostNewHireTrainingCostByEmployeeTypeForEmployee').innerHTML='$'+toComma(totalCostNewHireTrainingCostByEmployeeType);

    let annualTotalNewHireTrainingCosts=totalCostNewHireTrainingCostByEmployeeType*terminationSearchYear;
    console.log(annualTotalNewHireTrainingCosts,': ANNUAL TOTAL NEW HIRE TRAINING COSTS');
    document.getElementById('annualTotalNewHireTrainingCostsForEmployee').innerHTML='$'+toComma(annualTotalNewHireTrainingCosts);
    // form 44 to 50


    // COST OF LOST PRODUCTIVITY from 52 to 57
    let daysTo100Productivity=parseFloat(document.getElementById('daysTo100Productivity').value)||28;
   
    let dailyCost=aveHoursInWorkingDay*averageAnnualSalary;
    console.log(dailyCost,': DAILY COST');
    document.getElementById('dailyCostForEmployee').innerHTML='$'+toComma(dailyCost);

    let totalCostToReach100Productivity=0.5*(daysTo100Productivity*dailyCost);
    console.log(totalCostToReach100Productivity,': TOTAL COST TO REACH 100% PRODUCTIVITY');
    document.getElementById('totalCostOfLostProductivityPerEmployeeTypeForEmployee').innerHTML='$'+toComma(totalCostToReach100Productivity);

    let annualTotalLostProductivityCosts=totalCostToReach100Productivity*terminationSearchYear;
    console.log(annualTotalLostProductivityCosts,': ANNUAL TOTAL LOST PRODUCTIVITY COSTS');
    document.getElementById('annualTotalLostProductivityCostsForEmployee').innerHTML='$'+toComma(annualTotalLostProductivityCosts);
    // COST OF LOST PRODUCTIVITY from 52 to 57

        // line 58
    let totalCostOfTurnoverPerEmployeeType = totalCostToHireByEmployeeType+totalCostNewHireTrainingCostByEmployeeType+totalCostToReach100Productivity+totalSeparationCostsByEmployeeType+totalCostsToCoverByEmployeeType;
    console.log(totalCostOfTurnoverPerEmployeeType,': TOTAL COST OF TURNOVER PER EMPLOYEE TYPE');
        // line 58
        
        // line 60
    let percentOfAnnualSAlary=((totalCostOfTurnoverPerEmployeeType/(aveWorkingDaysPerEmployee*aveHoursInWorkingDay*averageAnnualSalary))*100);
    console.log(percentOfAnnualSAlary,': PERCENT OF ANNUAL SALARY');
        // line 60


        // line 61
    let totalAnnualCosts=annualTotalCostToHire+annualTotalNewHireTrainingCosts+annualTotalLostProductivityCosts+annualTotalSeparationCosts+annualTotalCostsToCover; 
    console.log(totalAnnualCosts,': TOTAL ANNUAL COSTS');
        // line 61
    
    let totalAnnualCostOfTurnover=(totalCostOfTurnoverPerEmployeeTypeForSupervisor*terminationSupervisorSearchYear)+ (totalCostOfTurnoverPerEmployeeType*terminationSearchYear)
    console.log(totalAnnualCostOfTurnover,': TOTAL ANNUAL COST OF TURNOVER');
    // showing result 
    document.getElementById('result').innerHTML='$'+toComma(totalAnnualCostOfTurnover);
    document.getElementById('result1').innerHTML='$'+toComma(totalAnnualCostOfTurnover);



    //Annual Cost Savings, Additional Revenue & Bottom Line Profit
    // cost Saving for Expected
    let savingsExpected=parseFloat(document.getElementById('savingsExpected').value)||22.50;
 

    let costSaving=((totalAnnualCostOfTurnover)*(savingsExpected))/100;
    console.log(costSaving,': COST SAVING For EXPECTED');
    document.getElementById('costSaving').innerHTML='$'+toComma(costSaving);
    document.getElementById('costSaving1').innerHTML='$'+toComma(costSaving);
    // cost savings Typical
    let savingsTypical=parseFloat(document.getElementById('savingsTypical').value)||33.33;
    
      
    let costSavingForTypical=(totalAnnualCostOfTurnover*savingsTypical)/100;
    console.log(costSavingForTypical,': COST SAVING FOR TYPICAL');
    document.getElementById('costSavingForTypical').innerHTML='$'+toComma(costSavingForTypical);
    document.getElementById('costSavingForTypical1').innerHTML='$'+toComma(costSavingForTypical);

    // cost savings Aggressive
    let savingsAggressive = parseFloat(document.getElementById('savingsAggressive').value)||45;
 
  
    let costSavingForAggressive=(totalAnnualCostOfTurnover*savingsAggressive)/100;
    console.log(costSavingForAggressive,': COST SAVING FOR AGGRESSIVE');
    document.getElementById('costSavingForAggressive').innerHTML='$'+toComma(costSavingForAggressive);
    document.getElementById('costSavingForAggressive1').innerHTML='$'+toComma(costSavingForAggressive);


    let revenueExpected = savingsExpected/10;
    console.log(revenueExpected,': REVENUE EXPECTED');
    let revenueTypical = savingsTypical/10;
    console.log(revenueTypical,': REVENUE TYPICAL');
    let revenueAggressive = savingsAggressive/10;
    console.log(revenueAggressive,': REVENUE AGGRESSIVE');
    let expectedNonPayrollCogs =(3715/1000000)*100;
    console.log(expectedNonPayrollCogs,': Expected Non Payroll COGS');

    let annualRevenueEmployeeProfit = parseFloat(document.getElementById('annualRevenueEmployeeProfit').value)||1000000;

    let expectedAdditionalRevenueAfterCogsForExpected = (annualRevenueEmployeeProfit*revenueExpected*(1-expectedNonPayrollCogs))/100;
    console.log(expectedAdditionalRevenueAfterCogsForExpected,': Expected Additional Revenue after COGS For EXPECTED ');
    let expectedAdditionalRevenueAfterCogsForTypical = (annualRevenueEmployeeProfit*revenueTypical*(1-expectedNonPayrollCogs))/100;
    console.log(expectedAdditionalRevenueAfterCogsForTypical,': Expected Additional Revenue after COGS For TYPICAL ');
    let expectedAdditionalRevenueAfterCogsForAggressive = (annualRevenueEmployeeProfit*revenueAggressive*(1-expectedNonPayrollCogs))/100;
    console.log(expectedAdditionalRevenueAfterCogsForAggressive,': Expected Additional Revenue after COGS For AGGRESSIVE ');
    
    document.getElementById('expectedAdditionalRevenueAfterCogsForEmployee').innerHTML = '$'+toComma(expectedAdditionalRevenueAfterCogsForExpected);
    document.getElementById('expectedAdditionalRevenueAfterCogsForEmployee1').innerHTML = '$'+toComma(expectedAdditionalRevenueAfterCogsForExpected);
    document.getElementById('expectedAdditionalRevenueAfterCogsForTypical').innerHTML= '$'+toComma(expectedAdditionalRevenueAfterCogsForTypical);
    document.getElementById('expectedAdditionalRevenueAfterCogsForTypical1').innerHTML= '$'+toComma(expectedAdditionalRevenueAfterCogsForTypical);
    document.getElementById('expectedAdditionalRevenueAfterCogsForAggressive').innerHTML='$'+toComma(expectedAdditionalRevenueAfterCogsForAggressive);
    document.getElementById('expectedAdditionalRevenueAfterCogsForAggressive1').innerHTML='$'+toComma(expectedAdditionalRevenueAfterCogsForAggressive);
    // TOTAL BOTTOM LINE PROFIT

    let totalBottomLineProfit = expectedAdditionalRevenueAfterCogsForExpected+ costSaving;
    console.log(totalBottomLineProfit,': TOTAL BOTTOM LINE PROFIT');
    let totalBottomLineProfitForTypical = expectedAdditionalRevenueAfterCogsForTypical+costSavingForTypical;
    console.log(totalBottomLineProfitForTypical,': TOTAL BOTTOM LINE PROFIT FOR TYPICAL');
    let totalBottomLineProfitForAggressive = expectedAdditionalRevenueAfterCogsForAggressive+costSavingForAggressive;
    console.log(totalBottomLineProfitForAggressive,': TOTAL BOTTOM LINE PROFIT FOR AGGRESSIVE');

    document.getElementById('totalBottomLineProfit').innerHTML='$'+toComma(totalBottomLineProfit);
    document.getElementById('totalBottomLineProfit1').innerHTML='$'+toComma(totalBottomLineProfit);
    document.getElementById('totalBottomLineProfitForTypical').innerHTML='$'+toComma(totalBottomLineProfitForTypical);
    document.getElementById('totalBottomLineProfitForTypical1').innerHTML='$'+toComma(totalBottomLineProfitForTypical);
    document.getElementById('totalBottomLineProfitForAggressive').innerHTML='$'+toComma(totalBottomLineProfitForAggressive);
    document.getElementById('totalBottomLineProfitForAggressive1').innerHTML='$'+toComma(totalBottomLineProfitForAggressive);

    console.log('-----------------');
    // Employee Result
    document.getElementById('employeePerOfAnnualSalary').innerHTML=toComma(percentOfAnnualSAlary)+'%';
    document.getElementById('employeePerOfAnnualSalary1').innerHTML=toComma(percentOfAnnualSAlary)+'%';
    document.getElementById('totalCostOfTurnoverPerResourceEmployeeType').innerHTML='$'+toComma(totalCostOfTurnoverPerEmployeeType);
    document.getElementById('totalCostOfTurnoverPerResourceEmployeeType1').innerHTML='$'+toComma(totalCostOfTurnoverPerEmployeeType);
    document.getElementById('totalAnnualCostOfTurnoverEmployee').innerHTML='$'+toComma(totalAnnualCosts);
    document.getElementById('totalAnnualCostOfTurnoverEmployee1').innerHTML='$'+toComma(totalAnnualCosts);
    console.log(totalAnnualCosts,': TOTAL ANNUAL COSTS');
    // Supervisor Result
    document.getElementById('supervisorPerOfAnnualSalary').innerHTML=toComma(percentOfAnnualSAlaryForSupervisor)+'%';
    document.getElementById('supervisorPerOfAnnualSalary1').innerHTML=toComma(percentOfAnnualSAlaryForSupervisor)+'%';
    document.getElementById('totalCostOfTurnoverPerResourceSupervisorType').innerHTML='$'+toComma(totalCostOfTurnoverPerEmployeeTypeForSupervisor);
    document.getElementById('totalCostOfTurnoverPerResourceSupervisorType1').innerHTML='$'+toComma(totalCostOfTurnoverPerEmployeeTypeForSupervisor);
    document.getElementById('totalAnnualCostOfTurnoverSupervisor').innerHTML='$'+toComma(annualTotalCostOfTurnoverForSupervisor);
    document.getElementById('totalAnnualCostOfTurnoverSupervisor1').innerHTML='$'+toComma(annualTotalCostOfTurnoverForSupervisor);
    userValuesInTable();
}


////////////////////////////// Limiter FUNCTION //////////////////////////////




////////////////////////////// Limiter FUNCTION ends //////////////////////////////

function show(){

    getResult();
    
    document.getElementById('employeeTurnOver').classList.add('d-none');
    document.getElementById('resultCard').classList.remove('d-none');
}

// // Pdf Function on Print button
// function printPdf(){
    
//     var element = document.getElementById('resultCard');
// var opt = {
// // margin:       1,
// filename:     'Cost_of_Employee_&_Supervisor_Turnover_Calculator.pdf',
// image:        { type: 'jpeg', quality: 0.85 },
// html2canvas:  { scale: 2 },
// jsPDF:        { unit: 'px', format: [2400,1200], orientation: 'Landscape' }
// };

// // New Promise-based usage:
// html2pdf().set(opt).from(element).save();

// // Old monolithic-style usage:
// // html2pdf(element, opt);
// }

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })




function userValuesInTable(){
    // alert('jung');
    // Just Fetching values from inputs and storing in table 

    //user calculated or inputs 
    document.getElementById("annualRevenue").innerHTML= "$"+toComma(parseFloat(document.getElementById("annualRevenueEmployeeProfit").value));
    document.getElementById("averageStaffTeam").innerHTML=document.getElementById("numberOfEmployees").value;
    document.getElementById("averageStaffLeader").innerHTML=document.getElementById("numberOfSupervisor").value;
    document.getElementById("numberOfW2sTeam").innerHTML=document.getElementById("numberOfW2S").value;
    document.getElementById("numberOfW2sLeaders").innerHTML=document.getElementById("numberOfSupervisorW2S").value;
    document.getElementById("averageHourlySalaryTeam").innerHTML="$"+toComma(parseFloat(document.getElementById("averageAnnualSalary").value));
    document.getElementById("averageHourlySalaryLeaders").innerHTML="$"+toComma(parseFloat(document.getElementById("averageSupervisorAnnualSalary").value));
    document.getElementById("averageNumberOfDaysPositionVacantTeam").innerHTML=document.getElementById("averageNumberOfDaysPositionVacant").value;
    document.getElementById("averageNumberOfDaysPositionVacantLeaders").innerHTML=document.getElementById("averageNumberOfDaysPositionVacantForSupervisor").value;
    document.getElementById("exitInterviewHoursTeam").innerHTML=document.getElementById("exitInterviewHours").value;
    document.getElementById("exitInterviewHoursLeaders").innerHTML=document.getElementById("exitSupervisorInterviewHours").value;
    document.getElementById("miscellaneousSeparationCostsTeam").innerHTML= "$"+ toComma(parseFloat(document.getElementById("miscellaneousSeparationCosts").value));
    document.getElementById("miscellaneousSeparationCostsLeaders").innerHTML= "$"+ toComma(parseFloat(document.getElementById("miscellaneousSupervisorSeparationCosts").value));
    document.getElementById("resumeTeam").innerHTML=document.getElementById("resumeScreeningHours").value;
    document.getElementById("resumeLeaders").innerHTML=document.getElementById("resumeSupervisorScreeningHours").value;
    document.getElementById("interviewingTeam").innerHTML=document.getElementById("interviewingHours").value;
    document.getElementById("interviewingLeaders").innerHTML=document.getElementById("interviewingSupervisorHours").value;
    document.getElementById("miscellaneousTeam").innerHTML= "$"+ toComma(parseFloat(document.getElementById("miscellaneousOnboardingCostsPerPosition").value));
    document.getElementById("miscellaneousLeaders").innerHTML= "$"+ toComma(parseFloat(document.getElementById("miscellaneousSupervisorOnboardingCostsPerPosition").value));
    document.getElementById("totalTrainingHoursTeam").innerHTML=document.getElementById("totalTrainingHours").value;
    document.getElementById("totalTrainingHoursLeaders").innerHTML=document.getElementById("totalSupervisorTrainingHours").value;
    document.getElementById("otherTrainingCostsTeam").innerHTML="$"+ toComma(parseFloat(document.getElementById("otherTrainingCosts").value));
    document.getElementById("otherTrainingCostsLeaders").innerHTML="$"+ toComma(parseFloat(document.getElementById("otherSupervisorTrainingCosts").value));
    document.getElementById("daysTo100ProductivityTeam").innerHTML=document.getElementById("daysTo100Productivity").value;
    document.getElementById("daysTo100ProductivityLeaders").innerHTML=document.getElementById("daysTo100ProductivitySupervisor").value;
    //Calculator PreSet

    document.getElementById("mentorTrainingManagerHourlyRateSt").innerHTML=document.getElementById("mentorTrainingManagerHourlyRate").value;
    document.getElementById("hiringTerminationSt").innerHTML=document.getElementById("hiringTerminationManagerHourlyRate").value;
    document.getElementById("aveHoursSt").innerHTML=document.getElementById("aveHoursInWorkingDay").value;
    document.getElementById("annualRecruitingSt").innerHTML= "$"+ toComma(parseFloat(document.getElementById("annualRecruitingCosts").value));
    document.getElementById("aveWorkingSt").innerHTML=document.getElementById("aveWorkingDaysPerEmployee").value;
    document.getElementById("savingExpectedSt").innerHTML=document.getElementById("savingsExpected").value + "%";
    document.getElementById("savingTypicalSt").innerHTML=document.getElementById("savingsTypical").value + "%";
    document.getElementById("savingAggressiveSt").innerHTML=document.getElementById("savingsAggressive").value + "%";

}


let toComma = (x) => x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
let toComma2 = (x) => x.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

