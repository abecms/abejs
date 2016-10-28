import Handlebars from 'handlebars'
import HandlebarsIntl from 'handlebars-intl'
import handlebarsHelperSlugify from 'handlebars-helper-slugify'

/* Handlebar utilities */
import attrAbe 		from './handlebars/attrAbe'
import className 	from './handlebars/className'
import cleanTab 	from './handlebars/cleanTab'
import ifCond 		from './handlebars/ifCond'
import ifIn 			from './handlebars/ifIn'
import isTrue 		from './handlebars/isTrue'
import math 			from './handlebars/math'
import moduloIf 	from './handlebars/moduloIf'
import notEmpty 	from './handlebars/notEmpty'
import printJson 	from './handlebars/printJson'
import translate 	from './handlebars/translate'
import times 			from './handlebars/times'
import truncate 	from './handlebars/truncate'
import lowercase 	from './handlebars/lowercase'
import uppercase 	from './handlebars/uppercase'

import * as template from './template'
import * as assets from './assets'
import encodeAbeTagAsComment from './encodeAbeTagAsComment'
import insertDebugtoolUtilities from './insertDebugtoolUtilities'

/* Register utilities */
Handlebars.registerHelper('attrAbe', 		attrAbe)
Handlebars.registerHelper('className', 	className)
Handlebars.registerHelper('cleanTab', 	cleanTab)
Handlebars.registerHelper('slugify', 		handlebarsHelperSlugify({Handlebars: Handlebars}).slugify)
Handlebars.registerHelper('ifCond', 		ifCond)
Handlebars.registerHelper('ifIn', 			ifIn)
Handlebars.registerHelper('isTrue', 		isTrue)
Handlebars.registerHelper('math', 			math)
Handlebars.registerHelper('moduloIf', 	moduloIf)
Handlebars.registerHelper('notEmpty', 	notEmpty)
Handlebars.registerHelper('printJson', 	printJson)
Handlebars.registerHelper('i18nAbe', 		translate)
Handlebars.registerHelper('times', 			times)
Handlebars.registerHelper('truncate', 	truncate)
Handlebars.registerHelper('lowercase', 	lowercase)
Handlebars.registerHelper('uppercase', 	uppercase)

HandlebarsIntl.registerWith(Handlebars)

export {
	template,
	assets,
	encodeAbeTagAsComment,
	insertDebugtoolUtilities,
	attrAbe,
	className,
	cleanTab,
	ifCond,
	ifIn,
	isTrue,
	truncate,
	lowercase,
	uppercase,
	math,
	moduloIf,
	notEmpty,
	printJson,
	translate,
	times
}

