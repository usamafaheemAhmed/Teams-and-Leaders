// annual Revenue Employee Profit End\

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  let Range1 = $("#employeeNumberRange");
  let input1 = $("#numberOfEmployees");
  let instance1;
  let minimum = 1;
  let maximum = 500;
  
  Range1.ionRangeSlider({
      skin: "big",
      type: "single",
      min: minimum,
      max: maximum,
      from: 35,
      onStart: function (data) {
          input1.prop("value", data.from);
      },
      onChange: function (data) {
          input1.prop("value", data.from);
          getResult();
      },
      hide_min_max: true
  });
  
  instance1 = Range1.data("ionRangeSlider");
  
  input1.on("change blur", function () {
      let val = $(this).prop("value");
  
      // validate
      if (val < minimum) {
          val = minimum;
      } else if (val > maximum) {
          val = maximum;
      }
      instance1.update({
          from: val
      });
  });


function changeEmployeeNumber() {
    let employeeNumberRange = document.getElementById('employeeNumberRange');
    employeeNumberRange.oninput = function () {
        document.getElementById('numberOfEmployees').value = this.value;
    }
}


let Range2 = $("#employeesLeaveEachYear");
let input2 = $("#numberOfW2S");
let instance2;
let min2 = 1;
let max2 = 1250;

Range2.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min2,
    max: max2,
    from: 65,
    onStart: function (data) {
        input2.prop("value", data.from);
    },
    onChange: function (data) {
        input2.prop("value", data.from);
        getResult();
    },
    hide_min_max: true
});

instance2 = Range2.data("ionRangeSlider");

input2.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min2) {
        val = min2;
    } else if (val > max2) {
        val = max2;
    }

    instance2.update({
        from: val
    });
});


let Range3 = $("#annualSalary");
let input3 = $("#averageAnnualSalary");
let instance3;
let min3 = 7.25;
let max3 =  25.00;

Range3.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min3,
    max: max3,
    from: 11,
    onStart: function (data) {
        input3.prop("value", data.from);
    },
    onChange: function (data) {
        input3.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    step: 0.01
});

instance3 = Range3.data("ionRangeSlider");

input3.on("change", function () {
    let val = $(this).prop("value");

    if (val < min3) {
        val = min3;
    } else if (val > max3) {
        val = max3;
    }

    instance3.update({
        from: val
    });
});

function changeAnnualSalary() {
    let annualSalary = document.getElementById('annualSalary');
    annualSalary.oninput = function () {
        document.getElementById('averageAnnualSalary').value = this.value;
    }
}

let Range4 = $("#averageNumberOfDaysPositionVacantRange");
let input4 = $("#averageNumberOfDaysPositionVacant");
let instance4;
let min4 = 2;
let max4 = 40;

Range4.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min4,
    max: max4,
    from: 7,
  
    onStart: function (data) {
        input4.prop("value", data.from);
    },
    onChange: function (data) {
        input4.prop("value", data.from);
        getResult();
    },
    hide_min_max: true
});

instance4 = Range4.data("ionRangeSlider");

input4.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min4) {
        val = min4;
    } else if (val > max4) {
        val = max4;
    }

    instance4.update({
        from: val
    });
});




let Range5 = $("#exitInterviewHoursRange");
let input5 = $("#exitInterviewHours");
let instance5;
let min5 = 2;
let max5 = 20;

Range5.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min5,
    max: max5,
    from: 8,
    step: 1,
    onStart: function (data) {
        input5.prop("value", data.from);
    },
    onChange: function (data) {
        input5.prop("value", data.from);
        getResult();
    },
    hide_min_max: true
});

instance5 = Range5.data("ionRangeSlider");

input5.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min5) {
        val = min5;
    } else if (val > max5) {
        val = max5;
    }

    instance5.update({
        from: val
    });
});



let Range6 = $("#miscellaneousSeparationCostsRange");
let input6 = $("#miscellaneousSeparationCosts");
let instance6;
let min6 = 250;
let max6 = 1000;

Range6.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min6,
    max: max6,
    from: 500,
    step: 1,
    onStart: function (data) {
        input6.prop("value", data.from);
    },
    onChange: function (data) {
        input6.prop("value", data.from);
        getResult();
    },
    hide_min_max: true
});

instance6 = Range6.data("ionRangeSlider");

input6.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min6) {
        val = min6;
    } else if (val > max6) {
        val = max6;
    }

    instance6.update({
        from: val
    });
});




let Range7 = $("#resumeScreeningRange");
let input7 = $("#resumeScreeningHours");
let instance7;
let min7 = 6;
let max7 = 24;

Range7.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min7,
    max: max7,
    from: 12,
    step: 1,
    onStart: function (data) {
        input7.prop("value", data.from);
    },
    onChange: function (data) {
        input7.prop("value", data.from);
        getResult();
    },
    hide_min_max: true
});

instance7 = Range7.data("ionRangeSlider");

input7.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min7) {
        val = min7;
    } else if (val > max7) {
        val = max7;
    }

    instance7.update({
        from: val
    });
});


let Range8 = $("#interviewingHoursRange");
let input8 = $("#interviewingHours");
let instance8;
let min8 = 2;
let max8 = 16;

Range8.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min8,
    max: max8,
    from: 8,
    step: 1,
    onStart: function (data) {
        input8.prop("value", data.from);
    },
    onChange: function (data) {
        input8.prop("value", data.from);
        getResult();
    },
    hide_min_max: true
});

instance8 = Range8.data("ionRangeSlider");

input8.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min8) {
        val = min8;
    } else if (val > max8) {
        val = max8;
    }

    instance8.update({
        from: val
    });
});



let Range9 = $("#miscellaneousOnboardingCostsPerPositionRange");
let input9 = $("#miscellaneousOnboardingCostsPerPosition");
let instance9;
let min9 = 50;
let max9 = 1000;

Range9.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min9,
    max: max9,
    from: 500,
    step: 1,
    onStart: function (data) {
        input9.prop("value", data.from);
    },
    onChange: function (data) {
        input9.prop("value", data.from);
        getResult();
    },
    hide_min_max: true
});

instance9 = Range9.data("ionRangeSlider");

input9.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min9) {
        val = min9;
    } else if (val > max9) {
        val = max9;
    }

    instance9.update({
        from: val
    });
});


let Range10 = $("#totalTrainingHoursRange");
let input10 = $("#totalTrainingHours");
let instance10;
let min10 = 10;
let max10 = 100;

Range10.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min10,
    max: max10,
    from: 40,
    step: 1,
    onStart: function (data) {
        input10.prop("value", data.from);
    },
    onChange: function (data) {
        input10.prop("value", data.from);
        getResult();
    },
    hide_min_max: true
});

instance10 = Range10.data("ionRangeSlider");

input10.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min10) {
        val = min10;
    } else if (val > max10) {
        val = max10;
    }

    instance10.update({
        from: val
    });
});



let Range11 = $("#otherTrainingCostsRange");
let input11 = $("#otherTrainingCosts");
let instance11;
let min11 = 200;
let max11 = 5000;

Range11.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min11,
    max: max11,
    from: 200,
    step: 1,
    onStart: function (data) {
        input11.prop("value", data.from);
    },
    onChange: function (data) {
        input11.prop("value", data.from);
        getResult();
    },
    hide_min_max: true,
    prefix: "$",
    prettify_separator: ","
});

instance11 = Range11.data("ionRangeSlider");

input11.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min11) {
        val = min11;
    } else if (val > max11) {
        val = max11;
    }

    instance11.update({
        from: val
    });
});


let Range12 = $("#daysTo100ProductivityRange");
let input12 = $("#daysTo100Productivity");
let instance12;
let min12 = 21;
let max12 = 90;

Range12.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min12,
    max: max12,
    from: 28,
    step: 1,
    onStart: function (data) {
        input12.prop("value", data.from);
    },
    onChange: function (data) {
        input12.prop("value", data.from);
        getResult();
    },
    hide_min_max: true
});

instance12 = Range12.data("ionRangeSlider");

input12.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min12) {
        val = min12;
    } else if (val > max12) {
        val = max12;
    }

    instance12.update({
        from: val
    });
});
function changeDaysTo100ProductivityRange() {
    let daysTo100ProductivityRange = document.getElementById('daysTo100ProductivityRange');
    daysTo100ProductivityRange.oninput = function () {
        document.getElementById('daysTo100Productivity').value = this.value;
    }

}

function changeEmployeeLeave() {
    let employeesLeaveEachYear = document.getElementById('employeesLeaveEachYear');
    employeesLeaveEachYear.oninput = function () {
        document.getElementById('numberOfW2S').value = this.value;
    }
}



function changeSalaryForTalent() {
    let averageNumberOfDaysPositionVacantRange = document.getElementById('averageNumberOfDaysPositionVacantRange');
    averageNumberOfDaysPositionVacantRange.oninput = function () {
        document.getElementById('averageNumberOfDaysPositionVacant').value = this.value;
    }
}

function changeFillPositionDays() {
    let exitInterviewHoursRange = document.getElementById('exitInterviewHoursRange');
    exitInterviewHoursRange.oninput = function () {
        document.getElementById('exitInterviewHours').value = this.value;
    }
}

function changeRampUpHire() {
    let miscellaneousSeparationCostsRange = document.getElementById('miscellaneousSeparationCostsRange');
    miscellaneousSeparationCostsRange.oninput = function () {
        document.getElementById('miscellaneousSeparationCosts').value = this.value;
    }
}

function changeResumeScreeningRange() {
    let resumeScreeningRange = document.getElementById('resumeScreeningRange');
    resumeScreeningRange.oninput = function () {
        document.getElementById('resumeScreeningHours').value = this.value;
    }
}

function changeInterviewingHoursRange() {
    let interviewingHoursRange = document.getElementById('interviewingHoursRange');
    interviewingHoursRange.oninput = function () {
        document.getElementById('interviewingHours').value = this.value;
    }
}

function changeMiscellaneousOnboardingCostsPerPositionRange() {
    let miscellaneousOnboardingCostsPerPositionRange = document.getElementById('miscellaneousOnboardingCostsPerPositionRange');
    miscellaneousOnboardingCostsPerPositionRange.oninput = function () {
        document.getElementById('miscellaneousOnboardingCostsPerPosition').value = this.value;
    }
}

function changeTotalTrainingHoursRange() {
    let totalTrainingHoursRange = document.getElementById('totalTrainingHoursRange');
    totalTrainingHoursRange.oninput = function () {
        document.getElementById('totalTrainingHours').value = this.value;
    }
}

function changeOtherTrainingCostsRange() {
    let otherTrainingCostsRange = document.getElementById('otherTrainingCostsRange');
    otherTrainingCostsRange.oninput = function () {
        document.getElementById('otherTrainingCosts').value = (this.value);
    }
}

function changeDaysTo100ProductivityRange() {
    let daysTo100ProductivityRange = document.getElementById('daysTo100ProductivityRange');
    daysTo100ProductivityRange.oninput = function () {
        document.getElementById('daysTo100Productivity').value = this.value;
    }
}


