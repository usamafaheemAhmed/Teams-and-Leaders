


// Supervisor Leave Each Year Start\
let supervisorNumberRange = $("#supervisorNumberRange");
let numberOfSupervisor = $("#numberOfSupervisor");
let numberOfSupervisorInstance;
let numberOfSupervisorMin = 1;
let numberOfSupervisorMax = 100;

supervisorNumberRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: numberOfSupervisorMin,
    max: numberOfSupervisorMax,
    from: 7,
    onStart: function (data) {
        numberOfSupervisor.prop("value", data.from);
    },
    onChange: function (data) {
        numberOfSupervisor.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

numberOfSupervisorInstance = supervisorNumberRange.data("ionRangeSlider");

numberOfSupervisor.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < numberOfSupervisorMin) {
        val = numberOfSupervisorMin;
    } else if (val > numberOfSupervisorMax) {
        val = numberOfSupervisorMax;
    }

    numberOfSupervisorInstance.update({
        from: val
    });
});


function changeSupervisorNumber() {
    let supervisorNumberRange = document.getElementById('supervisorNumberRange');
    supervisorNumberRange.oninput = function () {
        document.getElementById('numberOfSupervisor').value = this.value;
    }

}
// number Of Supervisor end





// Supervisor Leave Each Year Start\
let supervisorLeaveEachYear = $("#supervisorLeaveEachYear");
let numberOfSupervisorW2S = $("#numberOfSupervisorW2S");
let supervisorInstance;
let numberOfSupervisorW2SMin = 1;
let numberOfSupervisorW2SMax = 500;

supervisorLeaveEachYear.ionRangeSlider({
    skin: "big",
    type: "single",
    min: numberOfSupervisorW2SMin,
    max: numberOfSupervisorW2SMax,
    from: 9,
    onStart: function (data) {
        numberOfSupervisorW2S.prop("value", data.from);
    },
    onChange: function (data) {
        numberOfSupervisorW2S.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

supervisorInstance = supervisorLeaveEachYear.data("ionRangeSlider");

numberOfSupervisorW2S.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < numberOfSupervisorW2SMin) {
        val = numberOfSupervisorW2SMin;
    } else if (val > numberOfSupervisorW2SMax) {
        val = numberOfSupervisorW2SMax;
    }

    supervisorInstance.update({
        from: val
    });
});


function changeSupervisorLeave() {
    let supervisorLeaveEachYear = document.getElementById('supervisorLeaveEachYear');
    supervisorLeaveEachYear.oninput = function () {
        document.getElementById('numberOfSupervisorW2S').value = this.value;
    }

}
// Supervisor Leave Each Year End\

// AVERAGE SUPERVISOR HOURLY SALARY Start\
let supervisorAnnualSalary = $("#supervisorAnnualSalary");
let averageSupervisorAnnualSalary = $("#averageSupervisorAnnualSalary");
let SupervisorInstance3;
let averageSupervisorAnnualSalaryMin = 10.00;
let averageSupervisorAnnualSalaryMax = 40.00;

supervisorAnnualSalary.ionRangeSlider({
    skin: "big",
    type: "single",
    min: averageSupervisorAnnualSalaryMin,
    max: averageSupervisorAnnualSalaryMax,
    from: 20,
    onStart: function (data) {
        averageSupervisorAnnualSalary.prop("value", data.from);
    },
    onChange: function (data) {
        averageSupervisorAnnualSalary.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    step: 0.01,
});

SupervisorInstance3 = supervisorAnnualSalary.data("ionRangeSlider");

averageSupervisorAnnualSalary.on("change", function () {
    let val = $(this).prop("value");

    // validate
    // if (val < averageSupervisorAnnualSalaryMin) {
    //     val = averageSupervisorAnnualSalaryMin;
    // } else if (val > averageSupervisorAnnualSalaryMax) {
    //     val = averageSupervisorAnnualSalaryMax;
    // }

    SupervisorInstance3.update({
        from: val
    });
});


function changeSupervisorAnnualSalary() {
    let supervisorAnnualSalary = document.getElementById('supervisorAnnualSalary');
    supervisorAnnualSalary.oninput = function () {
        document.getElementById('averageSupervisorAnnualSalary').value = this.value;
    }

}
// AVERAGE SUPERVISOR HOURLY SALARY End\


// Supervisor Average Number of Days Position Vacant Start\
let averageNumberOfDaysPositionVacantForSupervisorRange = $("#averageNumberOfDaysPositionVacantForSupervisorRange");
let $averageNumberOfDaysPositionVacantForSupervisor = $("#averageNumberOfDaysPositionVacantForSupervisor");
let averageNumberOfDaysPositionVacantForSupervisorInstance;
let averageNumberOfDaysPositionVacantForSupervisorMin = 3 ;
let averageNumberOfDaysPositionVacantForSupervisorMax = 40;

averageNumberOfDaysPositionVacantForSupervisorRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: averageNumberOfDaysPositionVacantForSupervisorMin,
    max: averageNumberOfDaysPositionVacantForSupervisorMax,
    from: 15,
    onStart: function (data) {
        $averageNumberOfDaysPositionVacantForSupervisor.prop("value", data.from);
    },
    onChange: function (data) {
        $averageNumberOfDaysPositionVacantForSupervisor.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

averageNumberOfDaysPositionVacantForSupervisorInstance = averageNumberOfDaysPositionVacantForSupervisorRange.data("ionRangeSlider");

$averageNumberOfDaysPositionVacantForSupervisor.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < averageNumberOfDaysPositionVacantForSupervisorMin) {
        val = averageNumberOfDaysPositionVacantForSupervisorMin;
    } else if (val > averageNumberOfDaysPositionVacantForSupervisorMax) {
        val = averageNumberOfDaysPositionVacantForSupervisorMax;
    }

    averageNumberOfDaysPositionVacantForSupervisorInstance.update({
        from: val
    });
});


function averageNumberOfDaysPositionVacantForSupervisor() {
    let averageNumberOfDaysPositionVacantForSupervisorRange = document.getElementById('averageNumberOfDaysPositionVacantForSupervisorRange');
    averageNumberOfDaysPositionVacantForSupervisorRange.oninput = function () {
        document.getElementById('averageNumberOfDaysPositionVacantForSupervisor').value = this.value;
    }

}
// Supervisor Average Number of Days Position Vacant End\



// Exit Supervisor Interview Hours Start\
let exitSupervisorInterviewHoursRange = $("#exitSupervisorInterviewHoursRange");
let exitSupervisorInterviewHours = $("#exitSupervisorInterviewHours");
let exitSupervisorInterviewHoursInstance;
let exitSupervisorInterviewHoursMin = 3;
let exitSupervisorInterviewHoursMax = 32;

exitSupervisorInterviewHoursRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: exitSupervisorInterviewHoursMin,
    max: exitSupervisorInterviewHoursMax,
    from: 16,
    onStart: function (data) {
        exitSupervisorInterviewHours.prop("value", data.from);
    },
    onChange: function (data) {
        exitSupervisorInterviewHours.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

exitSupervisorInterviewHoursInstance = exitSupervisorInterviewHoursRange.data("ionRangeSlider");

exitSupervisorInterviewHours.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < exitSupervisorInterviewHoursMin) {
        val = exitSupervisorInterviewHoursMin;
    } else if (val > exitSupervisorInterviewHoursMax) {
        val = exitSupervisorInterviewHoursMax;
    }

    exitSupervisorInterviewHoursInstance.update({
        from: val
    });
});


function changeExitSupervisorInterviewHours() {
    let exitSupervisorInterviewHoursRange = document.getElementById('exitSupervisorInterviewHoursRange');
    exitSupervisorInterviewHoursRange.oninput = function () {
        document.getElementById('exitSupervisorInterviewHours').value = this.value;
    }

}
// Exit Supervisor Interview Hours End\



// miscellaneousSupervisorSeparationCosts Start\
let miscellaneousSupervisorSeparationCostsRange = $("#miscellaneousSupervisorSeparationCostsRange");
let miscellaneousSupervisorSeparationCosts = $("#miscellaneousSupervisorSeparationCosts");
let miscellaneousSupervisorSeparationCostsInstance;
let miscellaneousSupervisorSeparationCostsMin = 400;
let miscellaneousSupervisorSeparationCostsMax = 1600;

miscellaneousSupervisorSeparationCostsRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: miscellaneousSupervisorSeparationCostsMin,
    max: miscellaneousSupervisorSeparationCostsMax,
    from: 1000,
    onStart: function (data) {
        miscellaneousSupervisorSeparationCosts.prop("value", data.from);
    },
    onChange: function (data) {
        miscellaneousSupervisorSeparationCosts.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

miscellaneousSupervisorSeparationCostsInstance = miscellaneousSupervisorSeparationCostsRange.data("ionRangeSlider");

miscellaneousSupervisorSeparationCosts.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < miscellaneousSupervisorSeparationCostsMin) {
        val = miscellaneousSupervisorSeparationCostsMin;
    } else if (val > miscellaneousSupervisorSeparationCostsMax) {
        val = miscellaneousSupervisorSeparationCostsMax;
    }

    miscellaneousSupervisorSeparationCostsInstance.update({
        from: val
    });
});


function changeMiscellaneousSupervisorSeparationCosts() {
    let miscellaneousSupervisorSeparationCostsRange = document.getElementById('miscellaneousSupervisorSeparationCostsRange');
    miscellaneousSupervisorSeparationCostsRange.oninput = function () {
        document.getElementById('miscellaneousSupervisorSeparationCosts').value = this.value;
    }

}
// miscellaneousSupervisorSeparationCosts End\


// Resume Supervisor Screening (hours) Start\
let resumeSupervisorScreeningRange = $("#resumeSupervisorScreeningRange");
let resumeSupervisorScreeningHours = $("#resumeSupervisorScreeningHours");
let resumeSupervisorScreeningHoursInstance;
let resumeSupervisorScreeningHoursMin = 12;
let resumeSupervisorScreeningHoursMax = 40;

resumeSupervisorScreeningRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: resumeSupervisorScreeningHoursMin,
    max: resumeSupervisorScreeningHoursMax,
    from: 20,
    onStart: function (data) {
        resumeSupervisorScreeningHours.prop("value", data.from);
    },
    onChange: function (data) {
        resumeSupervisorScreeningHours.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

resumeSupervisorScreeningHoursInstance = resumeSupervisorScreeningRange.data("ionRangeSlider");

resumeSupervisorScreeningHours.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < resumeSupervisorScreeningHoursMin) {
        val = resumeSupervisorScreeningHoursMin;
    } else if (val > resumeSupervisorScreeningHoursMax) {
        val = resumeSupervisorScreeningHoursMax;
    }

    resumeSupervisorScreeningHoursInstance.update({
        from: val
    });
});


function changeResumeSupervisorScreeningRange() {
    let resumeSupervisorScreeningRange = document.getElementById('resumeSupervisorScreeningRange');
    resumeSupervisorScreeningRange.oninput = function () {
        document.getElementById('resumeSupervisorScreeningHours').value = this.value;
    }

}
// Resume Supervisor Screening (hours) End\



// interviewingSupervisorHoursRange Start\
let interviewingSupervisorHoursRange = $("#interviewingSupervisorHoursRange");
let interviewingSupervisorHours = $("#interviewingSupervisorHours");
let interviewingSupervisorHoursInstance;
let interviewingSupervisorHoursMin = 4;
let interviewingSupervisorHoursMax = 32;

interviewingSupervisorHoursRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: interviewingSupervisorHoursMin,
    max: interviewingSupervisorHoursMax,
    from: 16,
    onStart: function (data) {
        interviewingSupervisorHours.prop("value", data.from);
    },
    onChange: function (data) {
        interviewingSupervisorHours.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

interviewingSupervisorHoursInstance = interviewingSupervisorHoursRange.data("ionRangeSlider");

interviewingSupervisorHours.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < interviewingSupervisorHoursMin) {
        val = interviewingSupervisorHoursMin;
    } else if (val > interviewingSupervisorHoursMax) {
        val = interviewingSupervisorHoursMax;
    }

    interviewingSupervisorHoursInstance.update({
        from: val
    });
});


function changeInterviewingSupervisorHoursRange() {
    let interviewingSupervisorHoursRange = document.getElementById('interviewingSupervisorHoursRange');
    interviewingSupervisorHoursRange.oninput = function () {
        document.getElementById('interviewingSupervisorHours').value = this.value;
    }

}
// interviewingSupervisorHoursRange End\




// miscellaneousSupervisorOnboardingCostsPerPosition Start\
let miscellaneousSupervisorOnboardingCostsPerPositionRange = $("#miscellaneousSupervisorOnboardingCostsPerPositionRange");
let miscellaneousSupervisorOnboardingCostsPerPosition = $("#miscellaneousSupervisorOnboardingCostsPerPosition");
let miscellaneousSupervisorOnboardingCostsPerPositionInstance;
let miscellaneousSupervisorOnboardingCostsPerPositionMin = 100;
let miscellaneousSupervisorOnboardingCostsPerPositionMax = 2000;

miscellaneousSupervisorOnboardingCostsPerPositionRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: miscellaneousSupervisorOnboardingCostsPerPositionMin,
    max: miscellaneousSupervisorOnboardingCostsPerPositionMax,
    from: 1000,
    onStart: function (data) {
        miscellaneousSupervisorOnboardingCostsPerPosition.prop("value", data.from);
    },
    onChange: function (data) {
        miscellaneousSupervisorOnboardingCostsPerPosition.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

miscellaneousSupervisorOnboardingCostsPerPositionInstance = miscellaneousSupervisorOnboardingCostsPerPositionRange.data("ionRangeSlider");

miscellaneousSupervisorOnboardingCostsPerPosition.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < miscellaneousSupervisorOnboardingCostsPerPositionMin) {
        val = miscellaneousSupervisorOnboardingCostsPerPositionMin;
    } else if (val > miscellaneousSupervisorOnboardingCostsPerPositionMax) {
        val = miscellaneousSupervisorOnboardingCostsPerPositionMax;
    }

    miscellaneousSupervisorOnboardingCostsPerPositionInstance.update({
        from: val
    });
});


function changeMiscellaneousSupervisorOnboardingCostsPerPositionRange() {
    let miscellaneousSupervisorOnboardingCostsPerPositionRange = document.getElementById('miscellaneousSupervisorOnboardingCostsPerPositionRange');
    miscellaneousSupervisorOnboardingCostsPerPositionRange.oninput = function () {
        document.getElementById('miscellaneousSupervisorOnboardingCostsPerPosition').value = this.value;
    }

}
// interviewingSupervisorHoursInterviewingSupervisorHoursRange End\



// totalSupervisorTrainingHours Start\
let totalSupervisorTrainingHoursRange = $("#totalSupervisorTrainingHoursRange");
let totalSupervisorTrainingHours = $("#totalSupervisorTrainingHours");
let totalSupervisorTrainingHoursInstance;
let totalSupervisorTrainingHoursMin = 40;
let totalSupervisorTrainingHoursMax = 400;

totalSupervisorTrainingHoursRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: totalSupervisorTrainingHoursMin,
    max: totalSupervisorTrainingHoursMax,
    from: 120,
    onStart: function (data) {
        totalSupervisorTrainingHours.prop("value", data.from);
    },
    onChange: function (data) {
        totalSupervisorTrainingHours.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

totalSupervisorTrainingHoursInstance = totalSupervisorTrainingHoursRange.data("ionRangeSlider");

totalSupervisorTrainingHours.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < totalSupervisorTrainingHoursMin) {
        val = totalSupervisorTrainingHoursMin;
    } else if (val > totalSupervisorTrainingHoursMax) {
        val = totalSupervisorTrainingHoursMax;
    }

    totalSupervisorTrainingHoursInstance.update({
        from: val
    });
});


function changeTotalSupervisorTrainingHoursRange() {
    let totalSupervisorTrainingHoursRange = document.getElementById('totalSupervisorTrainingHoursRange');
    totalSupervisorTrainingHoursRange.oninput = function () {
        document.getElementById('totalSupervisorTrainingHours').value = this.value;
    }

}
// interviewingSupervisorHoursInterviewingSupervisorHoursRange End\



// otherSupervisorTrainingCosts Start\
let otherSupervisorTrainingCostsRange = $("#otherSupervisorTrainingCostsRange");
let otherSupervisorTrainingCosts = $("#otherSupervisorTrainingCosts");
let otherSupervisorTrainingCostsInstance;
let otherSupervisorTrainingCostsMin = 500;
let otherSupervisorTrainingCostsMax = 25000;

otherSupervisorTrainingCostsRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: otherSupervisorTrainingCostsMin,
    max: otherSupervisorTrainingCostsMax,
    from: 500,
    onStart: function (data) {
        otherSupervisorTrainingCosts.prop("value", data.from);
    },
    onChange: function (data) {
        otherSupervisorTrainingCosts.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    prefix: "$",
    prettify_separator: ",", // 25,000
});

otherSupervisorTrainingCostsInstance = otherSupervisorTrainingCostsRange.data("ionRangeSlider");

otherSupervisorTrainingCosts.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < otherSupervisorTrainingCostsMin) {
        val = otherSupervisorTrainingCostsMin;
    } else if (val > otherSupervisorTrainingCostsMax) {
        val = otherSupervisorTrainingCostsMax;
    }

    otherSupervisorTrainingCostsInstance.update({
        from: val
    });
});


function changeOtherSupervisorTrainingCostsRange() {
    let otherSupervisorTrainingCostsRange = document.getElementById('otherSupervisorTrainingCostsRange');
    otherSupervisorTrainingCostsRange.oninput = function () {
        document.getElementById('otherSupervisorTrainingCosts').value = this.value;
    }

}
// interviewingSupervisorHoursInterviewingSupervisorHoursRange End\



// daysTo100ProductivitySupervisor Start\
let daysTo100ProductivitySupervisorRange = $("#daysTo100ProductivitySupervisorRange");
let daysTo100ProductivitySupervisor = $("#daysTo100ProductivitySupervisor");
let daysTo100ProductivitySupervisorInstance;
let daysTo100ProductivitySupervisorMin = 40;
let daysTo100ProductivitySupervisorMax = 120;

daysTo100ProductivitySupervisorRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: daysTo100ProductivitySupervisorMin,
    max: daysTo100ProductivitySupervisorMax,
    from: 50,
    onStart: function (data) {
        daysTo100ProductivitySupervisor.prop("value", data.from);
    },
    onChange: function (data) {
        daysTo100ProductivitySupervisor.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

daysTo100ProductivitySupervisorInstance = daysTo100ProductivitySupervisorRange.data("ionRangeSlider");

daysTo100ProductivitySupervisor.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < daysTo100ProductivitySupervisorMin) {
        val = daysTo100ProductivitySupervisorMin;
    } else if (val > daysTo100ProductivitySupervisorMax) {
        val = daysTo100ProductivitySupervisorMax;
    }

    daysTo100ProductivitySupervisorInstance.update({
        from: val
    });
});


function changeDaysTo100ProductivitySupervisorRange() {
    let daysTo100ProductivitySupervisorRange = document.getElementById('daysTo100ProductivitySupervisorRange');
    daysTo100ProductivitySupervisorRange.oninput = function () {
        document.getElementById('daysTo100ProductivitySupervisor').value = this.value;
    }

}
// interviewingSupervisorHoursInterviewingSupervisorHoursRange End\


// just Removed annual salary range button



// Mentor / Training Manager Hourly Rate Start\
let mentorTrainingManagerHourlyRateRange = $("#mentorTrainingManagerHourlyRateRange");
let mentorTrainingManagerHourlyRate = $("#mentorTrainingManagerHourlyRate");
let mentorTrainingManagerHourlyRateInstance;
let mentorTrainingManagerHourlyRateMin = 10.00;
let mentorTrainingManagerHourlyRateMax = 50.00;

mentorTrainingManagerHourlyRateRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: mentorTrainingManagerHourlyRateMin,
    max: mentorTrainingManagerHourlyRateMax,
    from: 18,
    onStart: function (data) {
        mentorTrainingManagerHourlyRate.prop("value", data.from);
    },
    onChange: function (data) {
        mentorTrainingManagerHourlyRate.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    step: 0.01,
});

mentorTrainingManagerHourlyRateInstance = mentorTrainingManagerHourlyRateRange.data("ionRangeSlider");

mentorTrainingManagerHourlyRate.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < mentorTrainingManagerHourlyRateMin) {
        val = mentorTrainingManagerHourlyRateMin;
    } else if (val > mentorTrainingManagerHourlyRateMax) {
        val = mentorTrainingManagerHourlyRateMax;
    }

    mentorTrainingManagerHourlyRateInstance.update({
        from: val
    });
});


function changeMentorTrainingManagerHourlyRateRange() {
    let mentorTrainingManagerHourlyRateRange = document.getElementById('mentorTrainingManagerHourlyRateRange');
    mentorTrainingManagerHourlyRateRange.oninput = function () {
        document.getElementById('mentorTrainingManagerHourlyRate').value = this.value;
    }

}
// Mentor / Training Manager Hourly Rate End\




// Hiring / Termination Manager Hourly Rate Start\
let hiringTerminationManagerHourlyRateRange = $("#hiringTerminationManagerHourlyRateRange");
let hiringTerminationManagerHourlyRate = $("#hiringTerminationManagerHourlyRate");
let hiringTerminationManagerHourlyRateInstance;
let hiringTerminationManagerHourlyRateMin = 10.00;
let hiringTerminationManagerHourlyRateMax = 50.00;

hiringTerminationManagerHourlyRateRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: hiringTerminationManagerHourlyRateMin,
    max: hiringTerminationManagerHourlyRateMax,
    from: 35,
    onStart: function (data) {
        hiringTerminationManagerHourlyRate.prop("value", data.from);
    },
    onChange: function (data) {
        hiringTerminationManagerHourlyRate.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    step: 0.01,
});

hiringTerminationManagerHourlyRateInstance = hiringTerminationManagerHourlyRateRange.data("ionRangeSlider");

hiringTerminationManagerHourlyRate.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < hiringTerminationManagerHourlyRateMin) {
        val = hiringTerminationManagerHourlyRateMin;
    } else if (val > hiringTerminationManagerHourlyRateMax) {
        val = hiringTerminationManagerHourlyRateMax;
    }

    hiringTerminationManagerHourlyRateInstance.update({
        from: val
    });
});


function changeHiringTerminationManagerHourlyRateRange() {
    let hiringTerminationManagerHourlyRateRange = document.getElementById('hiringTerminationManagerHourlyRateRange');
    hiringTerminationManagerHourlyRateRange.oninput = function () {
        document.getElementById('hiringTerminationManagerHourlyRate').value = this.value;
    }

}
// Hiring / Termination Manager Hourly Rate End\



// Ave hours in Working Day Start\
let aveHoursInWorkingDayRange = $("#aveHoursInWorkingDayRange");
let aveHoursInWorkingDay = $("#aveHoursInWorkingDay");
let aveHoursInWorkingDayInstance;
let aveHoursInWorkingDayMin = 4.0;
let aveHoursInWorkingDayMax = 10.0;

aveHoursInWorkingDayRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: aveHoursInWorkingDayMin,
    max: aveHoursInWorkingDayMax,
    from: 6.5,
    onStart: function (data) {
        aveHoursInWorkingDay.prop("value", data.from);
    },
    onChange: function (data) {
        aveHoursInWorkingDay.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    step: 0.1,
});

aveHoursInWorkingDayInstance = aveHoursInWorkingDayRange.data("ionRangeSlider");

aveHoursInWorkingDay.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < aveHoursInWorkingDayMin) {
        val = aveHoursInWorkingDayMin;
    } else if (val > aveHoursInWorkingDayMax) {
        val = aveHoursInWorkingDayMax;
    }

    aveHoursInWorkingDayInstance.update({
        from: val
    });
});


function changeAveHoursInWorkingDayRange() {
    let aveHoursInWorkingDayRange = document.getElementById('aveHoursInWorkingDayRange');
    aveHoursInWorkingDayRange.oninput = function () {
        document.getElementById('aveHoursInWorkingDay').value = this.value;
    }

}
// Ave hours in Working Day End\


// Annual Recruiting Costs Start\
let annualRecruitingCostsRange = $("#annualRecruitingCostsRange");
let annualRecruitingCosts = $("#annualRecruitingCosts");
let annualRecruitingCostsInstance;
let annualRecruitingCostsMin = 0;
let annualRecruitingCostsMax = 500000;

annualRecruitingCostsRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: annualRecruitingCostsMin,
    max: annualRecruitingCostsMax,
    from: 50000,
    onStart: function (data) {
        annualRecruitingCosts.prop("value", data.from);
    },
    onChange: function (data) {
        annualRecruitingCosts.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    prefix: "$",
    prettify_separator: ",",
});

annualRecruitingCostsInstance = annualRecruitingCostsRange.data("ionRangeSlider");

annualRecruitingCosts.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < annualRecruitingCostsMin) {
        val = annualRecruitingCostsMin;
    } else if (val > annualRecruitingCostsMax) {
        val = annualRecruitingCostsMax;
    }

    annualRecruitingCostsInstance.update({
        from: val
    });
});


function changeAnnualRecruitingCostsRange() {
    let annualRecruitingCostsRange = document.getElementById('annualRecruitingCostsRange');
    annualRecruitingCostsRange.oninput = function () {
        document.getElementById('annualRecruitingCosts').value = this.value;
    }

}
// annual Recruiting Costs Range End\



// ave Working Days Per Employee Start\
let aveWorkingDaysPerEmployeeRange = $("#aveWorkingDaysPerEmployeeRange");
let aveWorkingDaysPerEmployee = $("#aveWorkingDaysPerEmployee");
let aveWorkingDaysPerEmployeeInstance;
let aveWorkingDaysPerEmployeeMin = 0;
let aveWorkingDaysPerEmployeeMax = 235;

aveWorkingDaysPerEmployeeRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: aveWorkingDaysPerEmployeeMin,
    max: aveWorkingDaysPerEmployeeMax,
    from: 235,
    onStart: function (data) {
        aveWorkingDaysPerEmployee.prop("value", data.from);
    },
    onChange: function (data) {
        aveWorkingDaysPerEmployee.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
});

aveWorkingDaysPerEmployeeInstance = aveWorkingDaysPerEmployeeRange.data("ionRangeSlider");

aveWorkingDaysPerEmployee.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < aveWorkingDaysPerEmployeeMin) {
        val = aveWorkingDaysPerEmployeeMin;
    } else if (val > aveWorkingDaysPerEmployeeMax) {
        val = aveWorkingDaysPerEmployeeMax;
    }

    aveWorkingDaysPerEmployeeInstance.update({
        from: val
    });
});


function changeAveWorkingDaysPerEmployeeRange() {
    let aveWorkingDaysPerEmployeeRange = document.getElementById('aveWorkingDaysPerEmployeeRange');
    aveWorkingDaysPerEmployeeRange.oninput = function () {
        document.getElementById('aveWorkingDaysPerEmployee').value = this.value;
    }

}
// ave Working Days Per Employee Range End\


// ave Working Days Per Employee Start\
let savingsExpectedRange = $("#savingsExpectedRange");
let savingsExpected = $("#savingsExpected");
let savingsExpectedInstance ;
let savingsExpectedMin = 10;
let savingsExpectedMax = 35;

savingsExpectedRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: savingsExpectedMin,
    max: savingsExpectedMax,
    from: 22.50,
    onStart: function (data) {
        savingsExpected.prop("value", data.from);
    },
    onChange: function (data) {
        savingsExpected.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    postfix: "%",
    step:1,
});

savingsExpectedInstance  = savingsExpectedRange.data("ionRangeSlider");

savingsExpected.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < savingsExpectedMin) {
        val = savingsExpectedMin;
    } else if (val > savingsExpectedMax) {
        val = savingsExpectedMax;
    }

    savingsExpectedInstance .update({
        from: val
    });
});


function changeSavingsExpectedRange() {
    let savingsExpectedRange = document.getElementById('savingsExpectedRange');
    savingsExpectedRange.oninput = function () {
        document.getElementById('savingsExpected').value = this.value;
    }

}
// ave Working Days Per Employee Range End\



// ave Working Days Per Employee Start\
let savingsTypicalRange = $("#savingsTypicalRange");
let savingsTypical = $("#savingsTypical");
let savingsTypicalInstance ;
let savingsTypicalMin = 20;
let savingsTypicalMax = 45;

savingsTypicalRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: savingsTypicalMin,
    max: savingsTypicalMax,
    from: 33.33,
    onStart: function (data) {
        savingsTypical.prop("value", data.from);
    },
    onChange: function (data) {
        savingsTypical.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    postfix: "%",
    step:0.01,
});

savingsTypicalInstance  = savingsTypicalRange.data("ionRangeSlider");

savingsTypical.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < savingsTypicalMin) {
        val = savingsTypicalMin;
    } else if (val > savingsTypicalMax) {
        val = savingsTypicalMax;
    }

    savingsTypicalInstance .update({
        from: val
    });
});


function changeSavingsTypicalRange() {
    let savingsTypicalRange = document.getElementById('savingsTypicalRange');
    savingsTypicalRange.oninput = function () {
        document.getElementById('savingsTypical').value = this.value;
    }

}
// ave Working Days Per Employee Range End\



// ave Working Days Per Employee Start\
let savingsAggressiveRange = $("#savingsAggressiveRange");
let savingsAggressive = $("#savingsAggressive");
let savingsAggressiveInstance;
let savingsAggressiveMin = 33;
let savingsAggressiveMax = 60;

savingsAggressiveRange.ionRangeSlider({
    skin: "big",
    type: "single",
    min: savingsAggressiveMin,
    max: savingsAggressiveMax,
    from: 45,
    onStart: function (data) {
        savingsAggressive.prop("value", data.from);
    },
    onChange: function (data) {
        savingsAggressive.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    postfix: "%",
    step:1,
});

savingsAggressiveInstance = savingsAggressiveRange.data("ionRangeSlider");

savingsAggressive.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < savingsAggressiveMin) {
        val = savingsAggressiveMin;
    } else if (val > savingsAggressiveMax) {
        val = savingsAggressiveMax;
    }

    savingsAggressiveInstance.update({
        from: val
    });
});


function changeSavingsAggressiveRange() {
    let savingsAggressiveRange = document.getElementById('savingsAggressiveRange');
    savingsAggressiveRange.oninput = function () {
        document.getElementById('savingsAggressive').value = this.value;
    }

}
// ave Working Days Per Employee Range End\


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })





// arrow code
  function ArrowHandling1() {
    let Option = document.getElementById("up1").classList;
    if (Option.contains("d-none")) {
        document.getElementById("up1").classList.remove("d-none");
        document.getElementById("down1").classList.add("d-none");
    } else {
        document.getElementById("up1").classList.add("d-none");
        document.getElementById("down1").classList.remove("d-none");
    }

    let Option2 = document.getElementById("up7").classList;
    if (Option2.contains("d-none")) {
        document.getElementById("up7").classList.remove("d-none");
        document.getElementById("down7").classList.add("d-none");
    } else {
        document.getElementById("up7").classList.add("d-none");
        document.getElementById("down7").classList.remove("d-none");
    }
}

function ArrowHandling2() {
    let Option = document.getElementById("up2").classList;
    if (Option.contains("d-none")) {
        document.getElementById("up2").classList.remove("d-none");
        document.getElementById("down2").classList.add("d-none");
    } else {
        document.getElementById("up2").classList.add("d-none");
        document.getElementById("down2").classList.remove("d-none");
    }

    let Option2 = document.getElementById("up7").classList;
    if (Option2.contains("d-none")) {
        document.getElementById("up7").classList.remove("d-none");
        document.getElementById("down7").classList.add("d-none");
    } else {
        document.getElementById("up7").classList.add("d-none");
        document.getElementById("down7").classList.remove("d-none");
    }

}

function ArrowHandling3() {
    let Option = document.getElementById("up3").classList;
    if (Option.contains("d-none")) {
        document.getElementById("up3").classList.remove("d-none");
        document.getElementById("down3").classList.add("d-none");
    } else {
        document.getElementById("up3").classList.add("d-none");
        document.getElementById("down3").classList.remove("d-none");
    }

    let Option2 = document.getElementById("up7").classList;
    if (Option2.contains("d-none")) {
        document.getElementById("up7").classList.remove("d-none");
        document.getElementById("down7").classList.add("d-none");
    } else {
        document.getElementById("up7").classList.add("d-none");
        document.getElementById("down7").classList.remove("d-none");
    }

}

function ArrowHandling4() {
    let Option = document.getElementById("up4").classList;
    if (Option.contains("d-none")) {
        document.getElementById("up4").classList.remove("d-none");
        document.getElementById("down4").classList.add("d-none");
    } else {
        document.getElementById("up4").classList.add("d-none");
        document.getElementById("down4").classList.remove("d-none");
    }

    let Option2 = document.getElementById("up7").classList;
    if (Option2.contains("d-none")) {
        document.getElementById("up7").classList.remove("d-none");
        document.getElementById("down7").classList.add("d-none");
    } else {
        document.getElementById("up7").classList.add("d-none");
        document.getElementById("down7").classList.remove("d-none");
    }

}

function ArrowHandling5() {
    let Option = document.getElementById("up5").classList;
    if (Option.contains("d-none")) {
        document.getElementById("up5").classList.remove("d-none");
        document.getElementById("down5").classList.add("d-none");
    } else {
        document.getElementById("up5").classList.add("d-none");
        document.getElementById("down5").classList.remove("d-none");
    }

    let Option2 = document.getElementById("up7").classList;
    if (Option2.contains("d-none")) {
        document.getElementById("up7").classList.remove("d-none");
        document.getElementById("down7").classList.add("d-none");
    } else {
        document.getElementById("up7").classList.add("d-none");
        document.getElementById("down7").classList.remove("d-none");
    }


}

function HideAllButtonDives() {

    let Option = document.getElementById("up7").classList;
    if (Option.contains("d-none")) {
        document.getElementById("up7").classList.remove("d-none");
        document.getElementById("down7").classList.add("d-none");
    } else {
        document.getElementById("up7").classList.add("d-none");
        document.getElementById("down7").classList.remove("d-none");
    }
}


function advanceOptions() {

    let Option = document.getElementById("up8").classList;
    if (Option.contains("d-none")) {
        document.getElementById("up8").classList.remove("d-none");
        document.getElementById("down8").classList.add("d-none");
    } else {
        document.getElementById("up8").classList.add("d-none");
        document.getElementById("down8").classList.remove("d-none");
    }
}


function calculatePreSet() {

    let Option = document.getElementById("up6").classList;
    if (Option.contains("d-none")) {
        document.getElementById("up6").classList.remove("d-none");
        document.getElementById("down6").classList.add("d-none");
    } else {
        document.getElementById("up6").classList.add("d-none");
        document.getElementById("down6").classList.remove("d-none");
    }
}