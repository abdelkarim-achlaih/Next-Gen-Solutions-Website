function linearEase(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (changeInValue * currentIteration) / totalIterations + startValue;
}
function easeInQuad(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue * (currentIteration /= totalIterations) * currentIteration +
		startValue
	);
}
function easeOutQuad(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		-changeInValue *
			(currentIteration /= totalIterations) *
			(currentIteration - 2) +
		startValue
	);
}
function easeInOutQuad(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	if ((currentIteration /= totalIterations / 2) < 1) {
		return (
			(changeInValue / 2) * currentIteration * currentIteration + startValue
		);
	}
	return (
		(-changeInValue / 2) * (--currentIteration * (currentIteration - 2) - 1) +
		startValue
	);
}
function easeInCubic(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue * Math.pow(currentIteration / totalIterations, 3) + startValue
	);
}
function easeOutCubic(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) +
		startValue
	);
}
function easeInOutCubic(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	if ((currentIteration /= totalIterations / 2) < 1) {
		return (changeInValue / 2) * Math.pow(currentIteration, 3) + startValue;
	}
	return (
		(changeInValue / 2) * (Math.pow(currentIteration - 2, 3) + 2) + startValue
	);
}
function easeInQuart(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue * Math.pow(currentIteration / totalIterations, 4) + startValue
	);
}
function easeOutQuart(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		-changeInValue * (Math.pow(currentIteration / totalIterations - 1, 4) - 1) +
		startValue
	);
}
function easeInOutQuart(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	if ((currentIteration /= totalIterations / 2) < 1) {
		return (changeInValue / 2) * Math.pow(currentIteration, 4) + startValue;
	}
	return (
		(-changeInValue / 2) * (Math.pow(currentIteration - 2, 4) - 2) + startValue
	);
}
function easeInQuint(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue * Math.pow(currentIteration / totalIterations, 5) + startValue
	);
}
function easeOutQuint(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue * (Math.pow(currentIteration / totalIterations - 1, 5) + 1) +
		startValue
	);
}
function easeInOutQuint(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	if ((currentIteration /= totalIterations / 2) < 1) {
		return (changeInValue / 2) * Math.pow(currentIteration, 5) + startValue;
	}
	return (
		(changeInValue / 2) * (Math.pow(currentIteration - 2, 5) + 2) + startValue
	);
}
function easeInSine(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue *
			(1 - Math.cos((currentIteration / totalIterations) * (Math.PI / 2))) +
		startValue
	);
}
function easeOutSine(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue *
			Math.sin((currentIteration / totalIterations) * (Math.PI / 2)) +
		startValue
	);
}
function easeInOutSine(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		(changeInValue / 2) *
			(1 - Math.cos((Math.PI * currentIteration) / totalIterations)) +
		startValue
	);
}
function easeInExpo(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue * Math.pow(2, 10 * (currentIteration / totalIterations - 1)) +
		startValue
	);
}
function easeOutExpo(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue *
			(-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) +
		startValue
	);
}
function easeInOutExpo(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	if ((currentIteration /= totalIterations / 2) < 1) {
		return (
			(changeInValue / 2) * Math.pow(2, 10 * (currentIteration - 1)) +
			startValue
		);
	}
	return (
		(changeInValue / 2) * (-Math.pow(2, -10 * --currentIteration) + 2) +
		startValue
	);
}
function easeInCirc(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue *
			(1 -
				Math.sqrt(
					1 - (currentIteration /= totalIterations) * currentIteration
				)) +
		startValue
	);
}
function easeOutCirc(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	return (
		changeInValue *
			Math.sqrt(
				1 -
					(currentIteration = currentIteration / totalIterations - 1) *
						currentIteration
			) +
		startValue
	);
}
function easeInOutCirc(
	currentIteration,
	startValue,
	changeInValue,
	totalIterations
) {
	if ((currentIteration /= totalIterations / 2) < 1) {
		return (
			(changeInValue / 2) *
				(1 - Math.sqrt(1 - currentIteration * currentIteration)) +
			startValue
		);
	}
	return (
		(changeInValue / 2) *
			(Math.sqrt(1 - (currentIteration -= 2) * currentIteration) + 1) +
		startValue
	);
}
