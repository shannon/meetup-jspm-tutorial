import defaultMember from './export';
import * as Foo from './export';

import { Other } from './export';

Foo.Test === defaultMember;
Foo.Other === Other;