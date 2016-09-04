import * as names from './names';
import * as paths from './paths';

export default {
	[paths.FOO] () {
		name: names.FOO,
		component (resolve) { require(['../components/pages/foo'], resolve); };
	}
}
