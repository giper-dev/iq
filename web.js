#!/usr/bin/env node
"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object' && typeof having !== 'function')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
        }
        static toJSON() {
            return this.toString();
        }
        destructor() { }
        static destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '<>';
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        constructor(id = `$mol_wire_pub:${$mol_guid()}`) {
            super();
            this[Symbol.toStringTag] = id;
        }
        [Symbol.toStringTag];
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.length = end;
            if (end === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant, this.data[i + 1]);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    function $mol_dev_format_button(label, click) {
        return $mol_dev_format_auto({
            [$.$mol_dev_format_head]() {
                return $.$mol_dev_format_span({ color: 'cornflowerblue' }, label);
            },
            [$.$mol_dev_format_body]() {
                Promise.resolve().then(click);
                return $.$mol_dev_format_span({});
            }
        });
    }
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                try {
                    return val[$.$mol_dev_format_head]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            if (val instanceof Error) {
                return $.$mol_dev_format_span({}, $mol_dev_format_native(val), ' ', $mol_dev_format_button('throw', () => $mol_fail_hidden(val)));
            }
            if (val instanceof Promise) {
                return $.$mol_dev_format_shade($mol_dev_format_native(val), ' ', val[Symbol.toStringTag] ?? '');
            }
            if (Symbol.toStringTag in val) {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: (val, config = false) => {
            if (config)
                return false;
            if (!val)
                return false;
            if (val[$.$mol_dev_format_body])
                return true;
            return false;
        },
        body: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_body in val) {
                try {
                    return val[$.$mol_dev_format_body]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            return null;
        },
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    $.$mol_dev_format_span = $mol_dev_format_element.bind(null, 'span');
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $.$mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $.$mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $.$mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $.$mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
    class Stack extends Array {
        toString() {
            return this.join('\n');
        }
    }
    class Call extends Object {
        type;
        function;
        method;
        eval;
        source;
        offset;
        pos;
        object;
        flags;
        [Symbol.toStringTag];
        constructor(call) {
            super();
            this.type = call.getTypeName() ?? '';
            this.function = call.getFunctionName() ?? '';
            this.method = call.getMethodName() ?? '';
            if (this.method === this.function)
                this.method = '';
            this.pos = [call.getEnclosingLineNumber() ?? 0, call.getEnclosingColumnNumber() ?? 0];
            this.eval = call.getEvalOrigin() ?? '';
            this.source = call.getScriptNameOrSourceURL() ?? '';
            this.object = call.getThis();
            this.offset = call.getPosition();
            const flags = [];
            if (call.isAsync())
                flags.push('async');
            if (call.isConstructor())
                flags.push('constructor');
            if (call.isEval())
                flags.push('eval');
            if (call.isNative())
                flags.push('native');
            if (call.isPromiseAll())
                flags.push('PromiseAll');
            if (call.isToplevel())
                flags.push('top');
            this.flags = flags;
            const type = this.type ? this.type + '.' : '';
            const func = this.function || '<anon>';
            const method = this.method ? ' [' + this.method + '] ' : '';
            this[Symbol.toStringTag] = `${type}${func}${method}`;
        }
        [Symbol.toPrimitive]() {
            return this.toString();
        }
        toString() {
            const object = this.object || '';
            const label = this[Symbol.toStringTag];
            const source = `${this.source}:${this.pos.join(':')} #${this.offset}`;
            return `\tat ${object}${label} (${source})`;
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_div({}, $mol_dev_format_native(this), $.$mol_dev_format_shade(' '), ...this.object ? [
                $mol_dev_format_native(this.object),
            ] : [], ...this.method ? [$.$mol_dev_format_shade(' ', ' [', this.method, ']')] : [], $.$mol_dev_format_shade(' ', this.flags.join(', ')));
        }
    }
    Error.prepareStackTrace ??= (error, stack) => new Stack(...stack.map(call => new Call(call)));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
            }
            this.data.length = this.sub_from;
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let end = this.data.length;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                end -= 2;
                if (this.sub_from <= end)
                    this.peer_move(end, cursor);
            }
            this.data.length = end;
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale, pos = -1) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        static promise = null;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            if (!$mol_after_tick.promise)
                $mol_after_tick.promise = Promise.resolve().then(() => {
                    $mol_after_tick.promise = null;
                });
            $mol_after_tick.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        try {
            return val && typeof val === 'object' && 'then' in val && typeof val.then === 'function';
        }
        catch {
            return false;
        }
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const wrappers = new WeakMap();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_tick(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super(id);
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
            return this;
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_owning_check(this, this.cache)
                ? $mol_dev_format_auto({
                    [$mol_dev_format_head]: () => $mol_dev_format_shade(cursor),
                    [$mol_dev_format_body]: () => $mol_dev_format_native(this),
                })
                : $mol_dev_format_shade($mol_dev_format_native(this), cursor), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result).then(a => a);
                    }
                    else {
                        const put = (res) => {
                            if (this.cache === result)
                                this.put(res);
                            return res;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        wrappers.set(result, result);
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result);
                    }
                    else {
                        wrappers.set(result, result = Object.assign(result.finally(() => {
                            if (this.cache === result)
                                this.absorb();
                        }), { destructor: result.destructor || (() => { }) }));
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
            return this;
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async_raw() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await Promise.race([this.cache, this.step()]);
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
        async() {
            const promise = this.async_raw();
            if (!promise.destructor)
                promise.destructor = () => this.destructor();
            return promise;
        }
        step() {
            return new Promise(done => {
                const sub = new $mol_wire_pub_sub;
                const prev = sub.track_on();
                sub.track_next(this);
                sub.track_off(prev);
                sub.absorb = () => {
                    done(null);
                    setTimeout(() => sub.destructor());
                };
            });
        }
        destructor() {
            super.destructor();
            if (!$mol_owning_check(this, this.cache))
                return;
            try {
                this.cache.destructor();
            }
            catch (result) {
                if ($mol_promise_like(result)) {
                    const error = new Error(`Promise in ${this}.destructor()`);
                    Object.defineProperty(result, 'stack', { get: () => error.stack });
                }
                $mol_fail_hidden(result);
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    function $mol_key(value) {
        if (typeof value === 'bigint')
            return value.toString() + 'n';
        if (typeof value === 'symbol')
            return value.description;
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (typeof value === 'bigint')
                return value.toString() + 'n';
            if (typeof value === 'symbol')
                return value.description;
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            if (value instanceof TypedArray)
                return [...value];
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && $mol_compare_deep(left.stack, right.stack);
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap();
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        left_cache.set(right, true);
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        if (left instanceof DataView)
            return compare_buffer(new Uint8Array(left.buffer, left.byteOffset, left.byteLength), new Uint8Array(right.buffer, right.byteOffset, right.byteLength));
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this.$;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.entries(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i][1] === 'string') ? '%s: %s\n' : '%s: %o\n';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl.trim(), style, ...[].concat(...chunks));
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                let cause = '';
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.task !== task) {
                        cause = 'task';
                        break reuse;
                    }
                    if (existen.host !== host) {
                        cause = 'host';
                        break reuse;
                    }
                    if (!$mol_compare_deep(existen.args, args)) {
                        cause = 'args';
                        break reuse;
                    }
                    return existen;
                }
                const key = (host?.[Symbol.toStringTag] ?? host) + ('.' + task.name + '<#>');
                const next = new $mol_wire_task(key, task, host, args);
                if (existen?.temp) {
                    $$.$mol_log3_warn({
                        place: '$mol_wire_task',
                        message: `Different ${cause} on restart`,
                        sub,
                        prev: existen,
                        next,
                        hint: 'Maybe required additional memoization',
                    });
                }
                return next;
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let error;
    let result;
    let handler;
    function $mol_try(handler2) {
        handler = handler2;
        error = undefined;
        result = undefined;
        window.dispatchEvent(new Event('$mol_try'));
        const error2 = error;
        const result2 = result;
        error = undefined;
        result = undefined;
        return error2 || result2;
    }
    $.$mol_try = $mol_try;
    self.addEventListener('$mol_try', (event) => {
        result = handler();
    }, true);
    self.addEventListener('error', (event) => {
        error = event.error;
    }, true);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        $mol_try(() => { $mol_fail_hidden(error); });
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = prefix + ('.' + task.name + '<>');
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key_str = $mol_key(key);
            if (dict) {
                const existen = dict.get(key_str);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const id = prefix + ('.' + task.name) + ('<' + key_str.replace(/^"|"$/g, "'") + '>');
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(key_str, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete($mol_key(this.args[0]));
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element?.shadowRoot) {
                element = element.shadowRoot.activeElement;
            }
            while (element) {
                parents.push(element);
                const parent = element.parentNode;
                if (parent instanceof ShadowRoot)
                    element = parent.host;
                else
                    element = parent;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        function focus(event) {
            const target = event.target;
            if (target?.shadowRoot)
                watch(target.shadowRoot);
            $mol_view_selection.focused($mol_maybe(target), 'notify');
        }
        function watch(root) {
            root.removeEventListener('focus', focus, true);
            root.addEventListener('focus', focus, true);
        }
        watch($mol_dom_context.document);
        $mol_dom.document.addEventListener('keydown', event => {
            if (!event.altKey)
                return;
            const self = $mol_view_selection.focused()[0];
            if (!self)
                return;
            switch (event.keyCode) {
                case $mol_keyboard_code.down:
                    var vert = 1, hor = 0;
                    break;
                case $mol_keyboard_code.up:
                    var vert = -1, hor = 0;
                    break;
                case $mol_keyboard_code.left:
                    var hor = -1, vert = 0;
                    break;
                case $mol_keyboard_code.right:
                    var hor = 1, vert = 0;
                    break;
                default: return;
            }
            event.preventDefault();
            const self_rect = self.getBoundingClientRect();
            const center_hor = (self_rect.left + self_rect.right) / 2;
            const center_vert = (self_rect.top + self_rect.bottom) / 2;
            const all = [...$mol_dom.document.querySelectorAll(':where( [role="button"], [role="checkbox"], input, button, a ):not([disabled])')]
                .map(el => {
                const rect = el.getBoundingClientRect();
                const dist = (Math.max(0, center_hor - rect.right) + Math.max(0, rect.left - center_hor)) * vert * vert
                    + (Math.max(0, center_vert - rect.bottom) + Math.max(0, rect.top - center_vert)) * hor * hor;
                return [el, rect, dist];
            })
                .filter(([el, rect]) => {
                if (el === self)
                    return false;
                if (vert > 0 && rect.top < self_rect.bottom)
                    return false;
                if (vert < 0 && rect.bottom > self_rect.top)
                    return false;
                if (hor > 0 && rect.left < self_rect.right)
                    return false;
                if (hor < 0 && rect.right > self_rect.left)
                    return false;
                return true;
            })
                .sort(([, one, dist1], [, two, dist2]) => {
                return (dist1 - dist2) || ((one.top - two.top) * vert + (one.left - two.left) * hor);
            });
            const target = all[0]?.[0];
            target?.focus();
        });
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            const fun = function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
            Reflect.defineProperty(fun, 'name', { value: task.name + ' ' });
            return fun;
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, '()=> ', $mol_dev_format_auto(value));
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        let current = $mol_wire_auto();
        if (current.temp)
            current = current.host;
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === undefined) {
                continue;
            }
            else if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            if (val === el[key])
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_attach(id, text) {
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        const elid = `$mol_style_attach:${id}`;
        let el = doc.getElementById(elid);
        if (!el) {
            el = doc.createElement('style');
            el.id = elid;
            doc.head.appendChild(el);
        }
        if (el.innerHTML != text)
            el.innerHTML = text;
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise extends Promise {
        done;
        fail;
        constructor(executor) {
            let done;
            let fail;
            super((d, f) => {
                done = d;
                fail = f;
                executor?.(d, f);
            });
            this.done = done;
            this.fail = fail;
        }
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise_blocker extends $mol_promise {
        static [Symbol.toStringTag] = '$mol_promise_blocker';
    }
    $.$mol_promise_blocker = $mol_promise_blocker;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static linear_gradient(value) {
            return new $mol_style_func('linear-gradient', value);
        }
        static radial_gradient(value) {
            return new $mol_style_func('radial-gradient', value);
        }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_prop(prefix, keys) {
        const record = keys.reduce((rec, key) => {
            rec[key] = $mol_style_func.vary(`--${prefix}_${key}`);
            return rec;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
        'spirit',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 240deg;\n\t--mol_theme_hue_spread: 90deg;\n\tcolor-scheme: dark light;\n}\n\n:where([mol_theme]) {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n\t--mol_theme_spirit: hsl( 0deg, 0%, 0%, .75 );\n\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 10% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 20%, .25 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 8%, .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 80% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 60%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 65% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 60%, 65% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 60%, 65% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 60%, 65% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\t\n\t--mol_theme_back: oklch( 20% .03 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 30% .05 var(--mol_theme_hue) / .25 );\n\t--mol_theme_field: oklch( 15% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 80% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 60% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 80% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 70% .1 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 70% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 70% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n\t--mol_theme_spirit: hsl( 0deg, 0%, 100%, .75 );\n\t\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 92% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 100%, .5 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 100%, .75 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 0% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 40%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 40% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 80%, 30% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 80%, 30% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 80%, 30% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t--mol_theme_back: oklch( 92% .01 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 99% .01 var(--mol_theme_hue) / .5 );\n\t--mol_theme_field: oklch( 100% 0 var(--mol_theme_hue) / .5 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 20% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 50% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 60% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 40% .15 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 50% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 50% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 25% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 35% .1 var(--mol_theme_hue) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 85% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 98% .03 var(--mol_theme_hue) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 35% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 45% .15 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 83% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'block',
        'text',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString().replace(/</g, '(').replace(/>/g, ')').replaceAll(/"/g, "'");
        }
        dom_node_external(next) {
            const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            return node;
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = this.dom_node_external(next);
            $mol_dom_render_attributes(node, this.attr_static());
            const events = this.event_async();
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error)
                    ? error.constructor[Symbol.toStringTag] ?? 'Promise'
                    : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next = null) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme() ?? undefined,
            };
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return { ...$mol_wire_async(this.event()) };
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (path.length === 0 && check(this))
                return yield [this];
            try {
                const checked = new Set();
                const sub = this.sub();
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (!check(item))
                        continue;
                    checked.add(item);
                    yield [...path, this, item];
                }
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (checked.has(item))
                        continue;
                    yield* item.view_find(check, [...path, this]);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            finally {
                view.dom_node().scrollIntoView({ block: align });
            }
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_timeout(0, () => {
                this.focused(true);
            });
        }
        destructor() {
            const node = $mol_wire_probe(() => this.dom_node());
            if (!node)
                return;
            const events = $mol_wire_probe(() => this.event_async());
            if (!events)
                return;
            for (let event_name in events) {
                node.removeEventListener(event_name, events[event_name]);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_id", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "theme", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n\toverscroll-behavior: contain; /** Disable navigation gestures **/\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"], [mol_view_error=\"$mol_promise_blocker\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"$mol_promise_blocker\"]),\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps(20,end) infinite;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));

;
	($.$mol_scroll) = class $mol_scroll extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		event_scroll(next){
			if(next !== undefined) return next;
			return null;
		}
		scroll_top(next){
			if(next !== undefined) return next;
			return 0;
		}
		scroll_left(next){
			if(next !== undefined) return next;
			return 0;
		}
		attr(){
			return {...(super.attr()), "tabindex": (this.tabindex())};
		}
		event(){
			return {...(super.event()), "scroll": (next) => (this.event_scroll(next))};
		}
	};
	($mol_mem(($.$mol_scroll.prototype), "event_scroll"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_top"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_left"));


;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix of Object.keys(val).reverse()) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type of Object.keys(types).reverse()) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name of Object.keys(attrs).reverse()) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query of Object.keys(media).reverse()) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else if (key[0] === '[' && key[key.length - 1] === ']') {
                    const attr = key.slice(1, -1);
                    const vals = config[key];
                    for (let val of Object.keys(vals).reverse()) {
                        make_class(selector(prefix, path) + ':where([' + attr + '=' + JSON.stringify(val) + '])', [], vals[val]);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            display: 'grid',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            align: {
                self: 'stretch',
                items: 'flex-start',
            },
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    gridArea: '1/1',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '@media': {
                'print': {
                    overflow: 'hidden',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_page) = class $mol_page extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		Logo(){
			return null;
		}
		title_content(){
			return [(this.Logo()), (this.title())];
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("h1");
			(obj.sub) = () => ((this.title_content()));
			return obj;
		}
		tools(){
			return [];
		}
		Tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.tools()));
			return obj;
		}
		head(){
			return [(this.Title()), (this.Tools())];
		}
		Head(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (64);
			(obj.dom_name) = () => ("header");
			(obj.sub) = () => ((this.head()));
			return obj;
		}
		body_scroll_top(next){
			return (this.Body().scroll_top(next));
		}
		body(){
			return [];
		}
		Body_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.body()));
			return obj;
		}
		body_content(){
			return [(this.Body_content())];
		}
		Body(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ((this.body_content()));
			return obj;
		}
		foot(){
			return [];
		}
		Foot(){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("footer");
			(obj.sub) = () => ((this.foot()));
			return obj;
		}
		dom_name(){
			return "article";
		}
		attr(){
			return {...(super.attr()), "tabIndex": (this.tabindex())};
		}
		sub(){
			return [
				(this.Head()), 
				(this.Body()), 
				(this.Foot())
			];
		}
	};
	($mol_mem(($.$mol_page.prototype), "Title"));
	($mol_mem(($.$mol_page.prototype), "Tools"));
	($mol_mem(($.$mol_page.prototype), "Head"));
	($mol_mem(($.$mol_page.prototype), "Body_content"));
	($mol_mem(($.$mol_page.prototype), "Body"));
	($mol_mem(($.$mol_page.prototype), "Foot"));


;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node_external(next) {
            return next ?? $mol_owning_get(this).host.dom_node();
        }
        render() {
            this.dom_node_actual();
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { hsla, blur } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                box: {
                    shadow: [
                        [0, `-0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                        [0, `0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                    ],
                },
                zIndex: 2,
                '@media': {
                    'print': {
                        box: {
                            shadow: [[0, `1px`, 0, 0, hsla(0, 0, 0, .25)]],
                        },
                    },
                },
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 0,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                '@media': {
                    'print': {
                        display: 'none',
                    },
                },
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Body_content: {
                padding: $mol_gap.block,
                flex: {
                    direction: 'column',
                    shrink: 1,
                    grow: 1,
                },
                justify: {
                    self: 'stretch',
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                box: {
                    shadow: [
                        [0, `-0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                        [0, `0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                    ],
                },
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hd_iq_neuron extends Map {
        value;
        depth;
        constructor(value, depth = 0) {
            super();
            this.value = value;
            this.depth = depth;
        }
        generate(limit, history = []) {
            const story = Array.from(history);
            for (let i = 0; i < limit; ++i) {
                const tail = this.locate(story);
                if (tail.depth < story.length && tail.size)
                    break;
                story.push(tail.value);
            }
            return story.slice(history.length);
        }
        predict(history, pos = history.length - 1) {
            return this.locate(history, pos).value;
        }
        remember(history) {
            let studied = false;
            while (this.study(history))
                studied = true;
            return studied;
        }
        study(history) {
            let learned = false;
            for (let pos = 0; pos < history.length; ++pos) {
                if (this.learn(history[pos], history, pos - 1))
                    learned = true;
            }
            return learned;
        }
        learn(next, history, pos = history.length - 1) {
            if (pos < 0) {
                if (this.value === next)
                    return false;
                this.value = next;
                return true;
            }
            const tail = this.locate(history, pos);
            if (tail.value === next && !tail.size)
                return false;
            const x = pos - tail.depth;
            if (x < 0)
                return false;
            tail.set(history[x], new $hd_iq_neuron(next, tail.depth + 1));
            return true;
        }
        locate(history, pos = history.length - 1) {
            if (pos < 0)
                return this;
            const kid = this.get(history[pos]);
            if (!kid)
                return this;
            return kid.locate(history, pos - 1);
        }
        population() {
            return 1 + [...this.values()].reduce((sum, kid) => kid ? sum + kid.population() : sum, 0);
        }
        toJSON() {
            return { val: this.value, way: [...this] };
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_accent($mol_dev_format_native(this), ' ', this.value);
        }
    }
    $.$hd_iq_neuron = $hd_iq_neuron;
})($ || ($ = {}));

;
	($.$mol_theme_auto) = class $mol_theme_auto extends ($.$mol_plugin) {
		dark(){
			return "$mol_theme_dark";
		}
		theme(){
			return (this.dark());
		}
		light(){
			return "$mol_theme_light";
		}
		attr(){
			return {"mol_theme": (this.theme())};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static commit() {
            $mol_dom.history.pushState($mol_dom.history.state, $mol_dom.document.title, this.href());
        }
        static go(next) {
            $mol_dom_context.location.href = this.link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "commit", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    function $mol_state_arg_change() {
        $mol_state_arg.href($mol_dom_context.location.href);
    }
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_media extends $mol_object2 {
        static match(query, next) {
            if (next !== undefined)
                return next;
            const res = this.$.$mol_dom_context.matchMedia?.(query) ?? {};
            res.onchange = () => this.match(query, res.matches);
            return res.matches;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_persist = $mol_wire_solid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const factories = new WeakMap();
    function factory(val) {
        let make = factories.get(val);
        if (make)
            return make;
        make = $mol_func_name_from((...args) => new val(...args), val);
        factories.set(val, make);
        return make;
    }
    const getters = new WeakMap();
    function get_prop(host, field) {
        let props = getters.get(host);
        let get_val = props?.[field];
        if (get_val)
            return get_val;
        get_val = (next) => {
            if (next !== undefined)
                host[field] = next;
            return host[field];
        };
        Object.defineProperty(get_val, 'name', { value: field });
        if (!props) {
            props = {};
            getters.set(host, props);
        }
        props[field] = get_val;
        return get_val;
    }
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                let val = obj[field];
                const temp = $mol_wire_task.getter(typeof val === 'function' ? val : get_prop(obj, field));
                if (typeof val !== 'function')
                    return temp(obj, []).sync();
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            set(obj, field, next) {
                const temp = $mol_wire_task.getter(get_prop(obj, field));
                temp(obj, [next]).sync();
                return true;
            },
            construct(obj, args) {
                const temp = $mol_wire_task.getter(factory(obj));
                return temp(obj, args).sync();
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                return temp(self, args).sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        static native() {
            return this.$.$mol_dom_context.navigator.storage ?? {
                persisted: async () => false,
                persist: async () => false,
                estimate: async () => ({}),
                getDirectory: async () => null,
            };
        }
        static persisted(next, cache) {
            $mol_mem_persist();
            if (cache)
                return Boolean(next);
            const native = this.native();
            if (next && !$mol_mem_cached(() => this.persisted())) {
                native.persist().then(actual => {
                    setTimeout(() => this.persisted(actual, 'cache'), 5000);
                    if (actual)
                        this.$.$mol_log3_done({ place: `$mol_storage`, message: `Persist: Yes` });
                    else
                        this.$.$mol_log3_fail({ place: `$mol_storage`, message: `Persist: No` });
                });
            }
            return next ?? $mol_wire_sync(native).persisted();
        }
        static estimate() {
            return $mol_wire_sync(this.native() ?? {}).estimate();
        }
        static dir() {
            return $mol_wire_sync(this.native()).getDirectory();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage, "native", null);
    __decorate([
        $mol_mem
    ], $mol_storage, "persisted", null);
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null) {
                this.native().removeItem(key);
            }
            else {
                this.native().setItem(key, JSON.stringify(next));
                this.$.$mol_storage.persisted(true);
            }
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? this.light() : this.dark();
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_hotkey) = class $mol_hotkey extends ($.$mol_plugin) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		key(){
			return {};
		}
		mod_ctrl(){
			return false;
		}
		mod_alt(){
			return false;
		}
		mod_shift(){
			return false;
		}
	};
	($mol_mem(($.$mol_hotkey.prototype), "keydown"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_speck) = class $mol_speck extends ($.$mol_view) {
		theme(){
			return "$mol_theme_accent";
		}
		value(){
			return null;
		}
		minimal_width(){
			return 12;
		}
		attr(){
			return {...(super.attr()), "mol_theme": (this.theme())};
		}
		style(){
			return {...(super.style()), "minHeight": "1em"};
		}
		sub(){
			return [(this.value())];
		}
	};


;
"use strict";
var $;
(function ($) {
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.2rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tvertical-align: sub;\n\tpadding: 0 .2rem;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: .9;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n\tbox-shadow: 0 0 3px rgba(0,0,0,.5);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button) = class $mol_button extends ($.$mol_view) {
		event_activate(next){
			if(next !== undefined) return next;
			return null;
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key_press(next){
			if(next !== undefined) return next;
			return null;
		}
		disabled(){
			return false;
		}
		tab_index(){
			return 0;
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		error(){
			return "";
		}
		enabled(){
			return true;
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {
				...(super.event()), 
				"click": (next) => (this.event_activate(next)), 
				"dblclick": (next) => (this.clicks(next)), 
				"keydown": (next) => (this.event_key_press(next))
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"disabled": (this.disabled()), 
				"role": "button", 
				"tabindex": (this.tab_index()), 
				"title": (this.hint_safe())
			};
		}
		sub(){
			return [(this.title())];
		}
		Speck(){
			const obj = new this.$.$mol_speck();
			(obj.value) = () => ((this.error()));
			return obj;
		}
	};
	($mol_mem(($.$mol_button.prototype), "event_activate"));
	($mol_mem(($.$mol_button.prototype), "clicks"));
	($mol_mem(($.$mol_button.prototype), "event_key_press"));
	($mol_mem(($.$mol_button.prototype), "click"));
	($mol_mem(($.$mol_button.prototype), "event_click"));
	($mol_mem(($.$mol_button.prototype), "Speck"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    Promise.resolve().then(() => this.status([error]));
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: transparent;\n\tcolor: inherit;\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$mol_button_typed) = class $mol_button_typed extends ($.$mol_button) {
		minimal_height(){
			return 40;
		}
		minimal_width(){
			return 40;
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus-visible {\n\tbox-shadow: inset 0 0 0 10rem var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_minor) = class $mol_button_minor extends ($.$mol_button_typed) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_svg) = class $mol_svg extends ($.$mol_view) {
		dom_name(){
			return "svg";
		}
		dom_name_space(){
			return "http://www.w3.org/2000/svg";
		}
		font_size(){
			return 16;
		}
		font_family(){
			return "";
		}
		style_size(){
			return {};
		}
	};


;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg_root) = class $mol_svg_root extends ($.$mol_svg) {
		view_box(){
			return "0 0 100 100";
		}
		aspect(){
			return "xMidYMid";
		}
		dom_name(){
			return "svg";
		}
		attr(){
			return {
				...(super.attr()), 
				"viewBox": (this.view_box()), 
				"preserveAspectRatio": (this.aspect())
			};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_svg_path) = class $mol_svg_path extends ($.$mol_svg) {
		geometry(){
			return "";
		}
		dom_name(){
			return "path";
		}
		attr(){
			return {...(super.attr()), "d": (this.geometry())};
		}
	};


;
"use strict";

;
	($.$mol_icon) = class $mol_icon extends ($.$mol_svg_root) {
		path(){
			return "";
		}
		Path(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.path()));
			return obj;
		}
		view_box(){
			return "0 0 24 24";
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
		sub(){
			return [(this.Path())];
		}
	};
	($mol_mem(($.$mol_icon.prototype), "Path"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_share) = class $mol_icon_share extends ($.$mol_icon) {
		path(){
			return "M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_share_variant) = class $mol_icon_share_variant extends ($.$mol_icon) {
		path(){
			return "M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z";
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_lock extends $mol_object {
        promise = null;
        async wait() {
            let next = () => { };
            let destructed = false;
            const task = $mol_wire_auto();
            if (!task)
                return next;
            const destructor = task.destructor.bind(task);
            task.destructor = () => {
                destructor();
                destructed = true;
                next();
            };
            let promise;
            do {
                promise = this.promise;
                await promise;
                if (destructed)
                    return next;
            } while (promise !== this.promise);
            this.promise = new Promise(done => { next = done; });
            return next;
        }
        grab() { return $mol_wire_sync(this).wait(); }
    }
    $.$mol_lock = $mol_lock;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $node = $node || {};

;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction extends $mol_object {
        path() { return ''; }
        modes() { return []; }
        write(options) {
            return 0;
        }
        read() {
            return new Uint8Array();
        }
        truncate(size) { }
        close() { }
        destructor() {
            this.close();
        }
    }
    $.$mol_file_transaction = $mol_file_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction_web extends $mol_file_transaction {
        write(options) {
            throw new Error('Not implemented');
        }
        truncate(size) {
            throw new Error('Not implemented');
        }
        read() {
            throw new Error('Not implemented');
        }
        close() {
            throw new Error('Not implemented');
        }
    }
    $.$mol_file_transaction_web = $mol_file_transaction_web;
    $.$mol_file_transaction = $mol_file_transaction_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_base extends $mol_object {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        exists_cut() { return this.exists(); }
        root() {
            const path = this.path();
            const base = this.constructor.base;
            return base.startsWith(path) || this == this.parent();
        }
        stat(next, virt) {
            const path = this.path();
            const parent = this.parent();
            if (!this.root()) {
                parent.version();
            }
            parent.watcher();
            if (virt)
                return next ?? null;
            return next ?? this.info(path);
        }
        static changed = new Set;
        static frame = null;
        static changed_add(type, path) {
            if (/([\/\\]\.|___$)/.test(path))
                return;
            const file = this.relative(path.at(-1) === '/' ? path.slice(0, -1) : path);
            this.changed.add(file);
            if (!this.watching)
                return;
            this.frame?.destructor();
            this.frame = new this.$.$mol_after_timeout(this.watch_debounce(), () => {
                if (!this.watching)
                    return;
                this.watching = false;
                $mol_wire_async(this).flush();
            });
        }
        static watch_debounce() { return 500; }
        static flush() {
            for (const file of this.changed) {
                const parent = file.parent();
                try {
                    if ($mol_wire_probe(() => parent.sub()))
                        parent.sub(null);
                    file.reset();
                }
                catch (error) {
                    if ($mol_fail_catch(error))
                        $mol_fail_log(error);
                }
            }
            this.changed.clear();
            this.watching = true;
        }
        static watching = true;
        static lock = new $mol_lock;
        static watch_off(path) {
            this.watching = false;
            this.flush();
            this.watching = false;
            this.changed.add(this.absolute(path));
        }
        static unwatched(side_effect, affected_dir) {
            const unlock = this.lock.grab();
            this.watch_off(affected_dir);
            try {
                const result = side_effect();
                this.flush();
                unlock();
                return result;
            }
            catch (e) {
                if (!$mol_promise_like(e)) {
                    this.flush();
                    unlock();
                }
                $mol_fail_hidden(e);
            }
        }
        reset() {
            this.stat(null);
        }
        modified() { return this.stat()?.mtime ?? null; }
        version() {
            const next = this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
            return next;
        }
        info(path) { return null; }
        ensure() { }
        drop() { }
        copy(to) { }
        read() { return new Uint8Array; }
        write(buffer) { }
        kids() {
            return [];
        }
        readable(opts) {
            return new ReadableStream;
        }
        writable(opts) {
            return new WritableStream;
        }
        buffer(next) {
            let readed = new Uint8Array();
            if (next === undefined) {
                if (this.version())
                    readed = this.read();
            }
            const prev = $mol_mem_cached(() => this.buffer());
            const changed = prev === undefined || !$mol_compare_array(prev, next ?? readed);
            if (prev !== undefined && changed) {
                this.$.$mol_log3_rise({
                    place: `$mol_file_node.buffer()`,
                    message: 'Changed',
                    path: this.relate(),
                });
            }
            if (next === undefined)
                return changed ? readed : prev;
            if (!changed && this.exists())
                return prev;
            this.parent().exists(true);
            this.stat(this.stat_make(next.length), 'virt');
            this.write(next);
            return next;
        }
        stat_make(size) {
            const now = new Date();
            return {
                type: 'file',
                size,
                atime: now,
                mtime: now,
                ctime: now,
            };
        }
        clone(to) {
            if (!this.exists())
                return null;
            const target = this.constructor.absolute(to);
            try {
                this.version();
                target.parent().exists(true);
                this.copy(to);
                target.reset();
                return target;
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    console.error(error);
                }
            }
            return null;
        }
        watcher() {
            return {
                destructor() { }
            };
        }
        exists(next) {
            const exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next) {
                this.parent().exists(true);
                this.ensure();
            }
            else {
                this.drop();
            }
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (next !== undefined)
                this.exists();
            return this.text_int(next, virt);
        }
        text_int(next, virt) {
            if (virt) {
                this.stat(this.stat_make(0), 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                const buffer = $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        sub(reset) {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            this.version();
            return this.kids().filter(file => file.exists());
        }
        resolve(path) {
            throw new Error('implement');
        }
        relate(base = this.constructor.relative('.')) {
            const base_path = base.path();
            const path = this.path();
            return path.startsWith(base_path) ? path.slice(base_path.length) : path;
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
        toJSON() {
            return this.path();
        }
        open(...modes) {
            return this.$.$mol_file_transaction.make({
                path: () => this.path(),
                modes: () => modes
            });
        }
    }
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "exists_cut", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "modified", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "version", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "readable", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "writable", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "stat_make", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "clone", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "text_int", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "size", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "open", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base, "absolute", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "flush", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "watch_off", null);
    $.$mol_file_base = $mol_file_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file extends $mol_file_base {
    }
    $.$mol_file = $mol_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        blob() {
            return $mol_wire_sync(this.native).blob();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const controller = new AbortController();
            let done = false;
            const promise = fetch(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message(), { cause: response });
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static blob(input, init) {
            return this.success(input, init).blob();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "blob", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_webdav extends $mol_file_base {
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            res = res.replace(/\/\.\.\/?$/, '');
            if (res === this.path())
                return this;
            return this.constructor.absolute(res);
        }
        static headers() { return {}; }
        headers() { return this.constructor.headers(); }
        fetch(init) {
            return this.$.$mol_fetch.success(this.path(), {
                ...init,
                headers: {
                    ...this.headers(),
                    ...init.headers,
                }
            });
        }
        read() {
            try {
                const response = this.fetch({});
                return new Uint8Array(response.buffer());
            }
            catch (error) {
                if (error instanceof Error
                    && error.cause instanceof $mol_fetch_response
                    && error.cause.native.status === 404)
                    return new Uint8Array;
                $mol_fail_hidden(error);
            }
        }
        write(body) { this.fetch({ method: 'PUT', body }); }
        ensure() { this.fetch({ method: 'MKCOL' }); }
        drop() { this.fetch({ method: 'DELETE' }); }
        copy(to) {
            this.fetch({
                method: 'COPY',
                headers: { Destination: to }
            });
        }
        kids() {
            const response = this.fetch({ method: 'PROPFIND' });
            const xml = response.xml();
            const result = [];
            for (const multistatus of xml.childNodes) {
                if (multistatus.nodeName !== 'D:multistatus')
                    continue;
                for (const response of multistatus.childNodes) {
                    let path;
                    if (response.nodeName === 'D:href')
                        path = response.textContent ?? '';
                    if (!path)
                        continue;
                    if (response.nodeName !== 'D:propstat')
                        continue;
                    const stat = webdav_stat(response);
                    const file = this.resolve(path);
                    file.stat(stat, 'virt');
                    result.push(file);
                }
            }
            return result;
        }
        readable(opts) {
            return this.fetch({
                headers: !opts.start ? {} : {
                    'Range': `bytes=${opts.start}-${opts.end ?? ''}`
                }
            }).stream() || $mol_fail(new Error('Not found'));
        }
        info() {
            return this.kids().at(0)?.stat() ?? null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_file_webdav.prototype, "readable", null);
    $.$mol_file_webdav = $mol_file_webdav;
    function webdav_stat(prop_stat) {
        const now = new Date();
        const stat = {
            type: 'file',
            size: 0,
            atime: now,
            mtime: now,
            ctime: now,
        };
        for (const prop of prop_stat.childNodes) {
            if (prop.nodeName !== 'D:prop')
                continue;
            for (const value of prop.childNodes) {
                const name = value.nodeName;
                const text = value.textContent ?? '';
                if (name === 'D:getcontenttype') {
                    stat.type = text.endsWith('directory') ? 'dir' : 'file';
                }
                if (name === 'D:getcontentlength') {
                    stat.size = Number(value.textContent || '0');
                    if (Number.isNaN(stat.size))
                        stat.size = 0;
                }
                if (name === 'D:getlastmodified')
                    stat.mtime = stat.atime = new Date(text);
                if (name === 'D:creationdate')
                    stat.ctime = new Date(text);
            }
        }
        return stat;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file_webdav {
        static base = $mol_dom_context.document?.currentScript
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        version() { return '1'; }
        info() {
            try {
                const response = this.fetch({ method: 'HEAD' });
                const headers = response.headers();
                let size = Number(headers.get('Content-Length'));
                if (Number.isNaN(size))
                    size = 0;
                const last = headers.get('Last-Modified');
                const mtime = last ? new Date(last) : new Date();
                return {
                    type: 'file',
                    size,
                    mtime,
                    atime: mtime,
                    ctime: mtime,
                };
            }
            catch (error) {
                if (error instanceof Error
                    && error.cause instanceof $mol_fetch_response
                    && error.cause.native.status === 404)
                    return null;
                $mol_fail_hidden(error);
            }
        }
    }
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));

;
	($.$mol_button_share) = class $mol_button_share extends ($.$mol_button_minor) {
		Icon(){
			const obj = new this.$.$mol_icon_share_variant();
			return obj;
		}
		title(){
			return "";
		}
		uri(){
			return "";
		}
		capture(){
			return null;
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_button_share_hint"));
		}
		sub(){
			return [(this.Icon()), (this.title())];
		}
	};
	($mol_mem(($.$mol_button_share.prototype), "Icon"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_serialize(node) {
        const serializer = new $mol_dom_context.XMLSerializer;
        return serializer.serializeToString(node);
    }
    $.$mol_dom_serialize = $mol_dom_serialize;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    async function $mol_dom_capture_svg(el) {
        function restyle(el, styles) {
            for (let i = 0; i < styles.length; ++i) {
                const prop = styles[i];
                el.style[prop] = styles[prop];
            }
        }
        function clone(el) {
            const re = el.cloneNode();
            if (el instanceof HTMLImageElement && !/^(data|blob):/.test(el.src)) {
                const canvas = $mol_jsx("canvas", { width: el.naturalWidth, height: el.naturalHeight });
                const context = canvas.getContext('2d');
                context.drawImage(el, 0, 0);
                try {
                    ;
                    re.src = canvas.toDataURL();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }
            if (re instanceof HTMLInputElement) {
                re.setAttribute('value', el.value);
                if (el.checked)
                    re.setAttribute('checked', '');
            }
            if (re instanceof HTMLTextAreaElement) {
                re.setAttribute('value', el.value);
            }
            const styles = $mol_dom_context.getComputedStyle(el);
            restyle(re, styles);
            const before = $mol_dom_context.getComputedStyle(el, ':before');
            if (before.content[0] === '"') {
                const kid = $mol_jsx("span", null, JSON.parse(before.content));
                restyle(kid, before);
                re.appendChild(kid);
            }
            for (const kid of el.childNodes) {
                const dup = (kid.nodeType === kid.ELEMENT_NODE)
                    ? clone(kid)
                    : kid.cloneNode();
                re.appendChild(dup);
            }
            const after = $mol_dom_context.getComputedStyle(el, ':after');
            if (after.content[0] === '"') {
                const kid = $mol_jsx("span", null, JSON.parse(after.content));
                restyle(kid, after);
                re.appendChild(kid);
            }
            return re;
        }
        const { width, height } = el.getBoundingClientRect();
        return $mol_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${width} ${height}`, width: String(width), height: String(height) },
            $mol_jsx("foreignObject", { xmlns: "http://www.w3.org/2000/svg", width: String(width), height: String(height) }, clone(el)));
    }
    $.$mol_dom_capture_svg = $mol_dom_capture_svg;
    async function $mol_dom_capture_image(el) {
        const xml = $mol_dom_serialize(await $mol_dom_capture_svg(el));
        const uri = 'data:image/svg+xml,' + encodeURIComponent(xml);
        const image = $mol_jsx("img", { src: uri });
        await wait_load(image);
        return image;
    }
    $.$mol_dom_capture_image = $mol_dom_capture_image;
    async function $mol_dom_capture_canvas(el) {
        const image = await $mol_dom_capture_image(el);
        const canvas = $mol_jsx("canvas", { width: image.width, height: image.height });
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);
        return canvas;
    }
    $.$mol_dom_capture_canvas = $mol_dom_capture_canvas;
    function wait_load(el) {
        return new Promise((done, fail) => {
            el.onload = () => done(el);
            el.onerror = fail;
        });
    }
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_share extends $.$mol_button_share {
            capture() {
                return this.$.$mol_dom_context.document.body;
            }
            uri() {
                return this.$.$mol_state_arg.href();
            }
            async click() {
                const title = this.title();
                const url = this.uri() ?? undefined;
                const files = [];
                let el = this.capture();
                if (el) {
                    if (el instanceof $mol_view)
                        el = el.dom_tree();
                    const canvas = await $mol_dom_capture_canvas(el);
                    const blob = await new Promise(done => canvas.toBlob(done));
                    const file = new File([blob], title + '.png', { type: blob.type });
                    files.push(file);
                }
                await this.$.$mol_dom_context.navigator.share({ title, files, url });
            }
        }
        $$.$mol_button_share = $mol_button_share;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_chip) = class $mol_chip extends ($.$mol_view) {
		hint(){
			return "";
		}
		minimal_height(){
			return 40;
		}
		attr(){
			return {...(super.attr()), "title": (this.hint())};
		}
		sub(){
			return [(this.title())];
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($mol_chip, {
            padding: $mol_gap.text,
            border: {
                radius: $mol_gap.round,
            },
            background: {
                color: $mol_theme.card,
            },
            gap: $mol_gap.block,
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_link) = class $mol_link extends ($.$mol_view) {
		uri_toggle(){
			return "";
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		target(){
			return "_self";
		}
		file_name(){
			return "";
		}
		current(){
			return false;
		}
		relation(){
			return "";
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		click(next){
			return (this.event_click(next));
		}
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		uri_off(){
			return "";
		}
		uri_native(){
			return null;
		}
		external(){
			return false;
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri_toggle()), 
				"title": (this.hint_safe()), 
				"target": (this.target()), 
				"download": (this.file_name()), 
				"mol_link_current": (this.current()), 
				"rel": (this.relation())
			};
		}
		sub(){
			return [(this.title())];
		}
		arg(){
			return {};
		}
		event(){
			return {...(super.event()), "click": (next) => (this.click(next))};
		}
	};
	($mol_mem(($.$mol_link.prototype), "event_click"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
        },
        ':focus-visible': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));

;
	($.$mol_icon_script) = class $mol_icon_script extends ($.$mol_icon) {
		path(){
			return "M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2H8C6.3,2 5,3.3 5,5V16H16V17C16,17.6 16.4,18 17,18H18V5C18,4.4 18.4,4 19,4C19.6,4 20,4.4 20,5V6H22V5C22,3.3 20.7,2 19,2Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_script_text) = class $mol_icon_script_text extends ($.$mol_icon) {
		path(){
			return "M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z";
		}
	};


;
"use strict";

;
	($.$mol_link_source) = class $mol_link_source extends ($.$mol_link) {
		Icon(){
			const obj = new this.$.$mol_icon_script_text();
			return obj;
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_link_source_hint"));
		}
		sub(){
			return [(this.Icon())];
		}
	};
	($mol_mem(($.$mol_link_source.prototype), "Icon"));


;
"use strict";

;
	($.$mol_icon_gift) = class $mol_icon_gift extends ($.$mol_icon) {
		path(){
			return "M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_gift_outline) = class $mol_icon_gift_outline extends ($.$mol_icon) {
		path(){
			return "M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A1,1 0 0,1 1,11V8A2,2 0 0,1 3,6H6.17C6.06,5.69 6,5.35 6,5A3,3 0 0,1 9,2C10,2 10.88,2.5 11.43,3.24V3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2A3,3 0 0,1 18,5C18,5.35 17.94,5.69 17.83,6H21A2,2 0 0,1 23,8V11A1,1 0 0,1 22,12M4,20H11V12H4V20M20,20V12H13V20H20M9,4A1,1 0 0,0 8,5A1,1 0 0,0 9,6A1,1 0 0,0 10,5A1,1 0 0,0 9,4M15,4A1,1 0 0,0 14,5A1,1 0 0,0 15,6A1,1 0 0,0 16,5A1,1 0 0,0 15,4M3,8V10H11V8H3M13,8V10H21V8H13Z";
		}
	};


;
"use strict";

;
	($.$mol_link_donate) = class $mol_link_donate extends ($.$mol_link) {
		Icon(){
			const obj = new this.$.$mol_icon_gift_outline();
			return obj;
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_link_donate_hint"));
		}
		sub(){
			return [(this.Icon())];
		}
	};
	($mol_mem(($.$mol_link_donate.prototype), "Icon"));


;
"use strict";

;
	($.$mol_icon_face) = class $mol_icon_face extends ($.$mol_icon) {
		path(){
			return "M9,11.75C8.31,11.75 7.75,12.31 7.75,13C7.75,13.69 8.31,14.25 9,14.25C9.69,14.25 10.25,13.69 10.25,13C10.25,12.31 9.69,11.75 9,11.75M15,11.75C14.31,11.75 13.75,12.31 13.75,13C13.75,13.69 14.31,14.25 15,14.25C15.69,14.25 16.25,13.69 16.25,13C16.25,12.31 15.69,11.75 15,11.75M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_face_agent) = class $mol_icon_face_agent extends ($.$mol_icon) {
		path(){
			return "M18.72,14.76C19.07,13.91 19.26,13 19.26,12C19.26,11.28 19.15,10.59 18.96,9.95C18.31,10.1 17.63,10.18 16.92,10.18C13.86,10.18 11.15,8.67 9.5,6.34C8.61,8.5 6.91,10.26 4.77,11.22C4.73,11.47 4.73,11.74 4.73,12A7.27,7.27 0 0,0 12,19.27C13.05,19.27 14.06,19.04 14.97,18.63C15.54,19.72 15.8,20.26 15.78,20.26C14.14,20.81 12.87,21.08 12,21.08C9.58,21.08 7.27,20.13 5.57,18.42C4.53,17.38 3.76,16.11 3.33,14.73H2V10.18H3.09C3.93,6.04 7.6,2.92 12,2.92C14.4,2.92 16.71,3.87 18.42,5.58C19.69,6.84 20.54,8.45 20.89,10.18H22V14.67H22V14.69L22,14.73H21.94L18.38,18L13.08,17.4V15.73H17.91L18.72,14.76M9.27,11.77C9.57,11.77 9.86,11.89 10.07,12.11C10.28,12.32 10.4,12.61 10.4,12.91C10.4,13.21 10.28,13.5 10.07,13.71C9.86,13.92 9.57,14.04 9.27,14.04C8.64,14.04 8.13,13.54 8.13,12.91C8.13,12.28 8.64,11.77 9.27,11.77M14.72,11.77C15.35,11.77 15.85,12.28 15.85,12.91C15.85,13.54 15.35,14.04 14.72,14.04C14.09,14.04 13.58,13.54 13.58,12.91A1.14,1.14 0 0,1 14.72,11.77Z";
		}
	};


;
"use strict";

;
	($.$mol_link_support) = class $mol_link_support extends ($.$mol_link) {
		Icon(){
			const obj = new this.$.$mol_icon_face_agent();
			return obj;
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_link_support_hint"));
		}
		sub(){
			return [(this.Icon())];
		}
	};
	($mol_mem(($.$mol_link_support.prototype), "Icon"));


;
"use strict";

;
	($.$mol_check) = class $mol_check extends ($.$mol_button_minor) {
		checked(next){
			if(next !== undefined) return next;
			return false;
		}
		aria_checked(){
			return "false";
		}
		aria_role(){
			return "checkbox";
		}
		Icon(){
			return null;
		}
		title(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		label(){
			return [(this.Title())];
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_check_checked": (this.checked()), 
				"aria-checked": (this.aria_checked()), 
				"role": (this.aria_role())
			};
		}
		sub(){
			return [(this.Icon()), (this.label())];
		}
	};
	($mol_mem(($.$mol_check.prototype), "checked"));
	($mol_mem(($.$mol_check.prototype), "Title"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\t/* align-items: flex-start; */\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_check_icon) = class $mol_check_icon extends ($.$mol_check) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon]:where([mol_check_checked]) {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_brightness_4) = class $mol_icon_brightness_4 extends ($.$mol_icon) {
		path(){
			return "M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z";
		}
	};


;
"use strict";

;
	($.$mol_lights_toggle) = class $mol_lights_toggle extends ($.$mol_check_icon) {
		Lights_icon(){
			const obj = new this.$.$mol_icon_brightness_4();
			return obj;
		}
		lights(next){
			if(next !== undefined) return next;
			return false;
		}
		Icon(){
			return (this.Lights_icon());
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_lights_toggle_hint"));
		}
		checked(next){
			return (this.lights(next));
		}
	};
	($mol_mem(($.$mol_lights_toggle.prototype), "Lights_icon"));
	($mol_mem(($.$mol_lights_toggle.prototype), "lights"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_paragraph) = class $mol_paragraph extends ($.$mol_view) {
		line_height(){
			return 24;
		}
		letter_width(){
			return 7;
		}
		width_limit(){
			return +Infinity;
		}
		row_width(){
			return 0;
		}
		sub(){
			return [(this.title())];
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
	($.$mol_svg_group) = class $mol_svg_group extends ($.$mol_svg) {
		dom_name(){
			return "g";
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_vector extends Array {
        get length() {
            return super.length;
        }
        constructor(...values) { super(...values); }
        map(convert, self) {
            return super.map(convert, self);
        }
        merged(patches, combine) {
            return this.map((value, index) => combine(value, patches[index]));
        }
        limited(limits) {
            return this.merged(limits, (value, [min, max]) => (value < min) ? min : (value > max) ? max : value);
        }
        added0(diff) {
            return this.map(value => value + diff);
        }
        added1(diff) {
            return this.merged(diff, (a, b) => a + b);
        }
        substracted1(diff) {
            return this.merged(diff, (a, b) => a - b);
        }
        multed0(mult) {
            return this.map(value => value * mult);
        }
        multed1(mults) {
            return this.merged(mults, (a, b) => a * b);
        }
        divided1(mults) {
            return this.merged(mults, (a, b) => a / b);
        }
        powered0(mult) {
            return this.map(value => value ** mult);
        }
        expanded1(point) {
            return this.merged(point, (range, value) => range.expanded0(value));
        }
        expanded2(point) {
            return this.merged(point, (range1, range2) => {
                let next = range1;
                const Range = range1.constructor;
                if (range1[0] > range2[0])
                    next = new Range(range2[0], next.max);
                if (range1[1] < range2[1])
                    next = new Range(next.min, range2[1]);
                return next;
            });
        }
        center() {
            const Result = this[0].constructor;
            return new Result(...this[0].map((_, i) => this.reduce((sum, point) => sum + point[i], 0) / this.length));
        }
        distance() {
            let distance = 0;
            for (let i = 1; i < this.length; ++i) {
                distance += this[i - 1].reduce((sum, min, j) => sum + (min - this[i][j]) ** 2, 0) ** (1 / this[i].length);
            }
            return distance;
        }
        transponed() {
            return this[0].map((_, i) => this.map(row => row[i]));
        }
        get x() { return this[0]; }
        set x(next) { this[0] = next; }
        get y() { return this[1]; }
        set y(next) { this[1] = next; }
        get z() { return this[2]; }
        set z(next) { this[2] = next; }
    }
    $.$mol_vector = $mol_vector;
    class $mol_vector_1d extends $mol_vector {
    }
    $.$mol_vector_1d = $mol_vector_1d;
    class $mol_vector_2d extends $mol_vector {
    }
    $.$mol_vector_2d = $mol_vector_2d;
    class $mol_vector_3d extends $mol_vector {
    }
    $.$mol_vector_3d = $mol_vector_3d;
    class $mol_vector_range extends $mol_vector {
        0;
        1;
        constructor(min, max = min) {
            super(min, max);
            this[0] = min;
            this[1] = max;
        }
        get min() { return this[0]; }
        set min(next) { this[0] = next; }
        get max() { return this[1]; }
        set max(next) { this[1] = next; }
        get inversed() {
            return new this.constructor(this.max, this.min);
        }
        expanded0(value) {
            const Range = this.constructor;
            let range = this;
            if (value > range.max)
                range = new Range(range.min, value);
            if (value < range.min)
                range = new Range(value, range.max);
            return range;
        }
    }
    $.$mol_vector_range = $mol_vector_range;
    $.$mol_vector_range_full = new $mol_vector_range(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    class $mol_vector_matrix extends $mol_vector {
        added2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 + b[index]));
        }
        multed2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 * b[index]));
        }
    }
    $.$mol_vector_matrix = $mol_vector_matrix;
})($ || ($ = {}));

;
	($.$mol_svg_title) = class $mol_svg_title extends ($.$mol_svg) {
		dom_name(){
			return "title";
		}
		sub(){
			return [(this.title())];
		}
	};


;
"use strict";

;
	($.$mol_plot_graph) = class $mol_plot_graph extends ($.$mol_svg_group) {
		type(){
			return "solid";
		}
		color(){
			return "";
		}
		viewport_x(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		viewport_y(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		dimensions_pane_x(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		dimensions_pane_y(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		dimensions_x(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		dimensions_y(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		gap_x(){
			const obj = new this.$.$mol_vector_range(0, 0);
			return obj;
		}
		gap_y(){
			const obj = new this.$.$mol_vector_range(0, 0);
			return obj;
		}
		title(){
			return "";
		}
		hint(){
			return (this.title());
		}
		series_x(){
			return [];
		}
		series_y(){
			return [];
		}
		attr(){
			return {...(super.attr()), "mol_plot_graph_type": (this.type())};
		}
		style(){
			return {...(super.style()), "color": (this.color())};
		}
		viewport(){
			const obj = new this.$.$mol_vector_2d((this.viewport_x()), (this.viewport_y()));
			return obj;
		}
		shift(){
			return [0, 0];
		}
		scale(){
			return [1, 1];
		}
		cursor_position(){
			const obj = new this.$.$mol_vector_2d(NaN, NaN);
			return obj;
		}
		dimensions_pane(){
			const obj = new this.$.$mol_vector_2d((this.dimensions_pane_x()), (this.dimensions_pane_y()));
			return obj;
		}
		dimensions(){
			const obj = new this.$.$mol_vector_2d((this.dimensions_x()), (this.dimensions_y()));
			return obj;
		}
		size_real(){
			const obj = new this.$.$mol_vector_2d(0, 0);
			return obj;
		}
		gap(){
			const obj = new this.$.$mol_vector_2d((this.gap_x()), (this.gap_y()));
			return obj;
		}
		repos_x(id){
			return 0;
		}
		repos_y(id){
			return 0;
		}
		indexes(){
			return [];
		}
		points(){
			return [];
		}
		front(){
			return [];
		}
		back(){
			return [];
		}
		Hint(){
			const obj = new this.$.$mol_svg_title();
			(obj.title) = () => ((this.hint()));
			return obj;
		}
		hue(next){
			if(next !== undefined) return next;
			return +NaN;
		}
		Sample(){
			return null;
		}
	};
	($mol_mem(($.$mol_plot_graph.prototype), "viewport_x"));
	($mol_mem(($.$mol_plot_graph.prototype), "viewport_y"));
	($mol_mem(($.$mol_plot_graph.prototype), "dimensions_pane_x"));
	($mol_mem(($.$mol_plot_graph.prototype), "dimensions_pane_y"));
	($mol_mem(($.$mol_plot_graph.prototype), "dimensions_x"));
	($mol_mem(($.$mol_plot_graph.prototype), "dimensions_y"));
	($mol_mem(($.$mol_plot_graph.prototype), "gap_x"));
	($mol_mem(($.$mol_plot_graph.prototype), "gap_y"));
	($mol_mem(($.$mol_plot_graph.prototype), "viewport"));
	($mol_mem(($.$mol_plot_graph.prototype), "cursor_position"));
	($mol_mem(($.$mol_plot_graph.prototype), "dimensions_pane"));
	($mol_mem(($.$mol_plot_graph.prototype), "dimensions"));
	($mol_mem(($.$mol_plot_graph.prototype), "size_real"));
	($mol_mem(($.$mol_plot_graph.prototype), "gap"));
	($mol_mem(($.$mol_plot_graph.prototype), "Hint"));
	($mol_mem(($.$mol_plot_graph.prototype), "hue"));
	($.$mol_plot_graph_sample) = class $mol_plot_graph_sample extends ($.$mol_view) {
		type(){
			return "solid";
		}
		color(){
			return "black";
		}
		attr(){
			return {...(super.attr()), "mol_plot_graph_type": (this.type())};
		}
		style(){
			return {...(super.style()), "color": (this.color())};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_graph extends $.$mol_plot_graph {
            viewport() {
                const size = this.size_real();
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(0, size.x), new this.$.$mol_vector_range(0, size.y));
            }
            indexes() {
                return this.series_x().map((_, i) => i);
            }
            repos_x(val) {
                return val;
            }
            repos_y(val) {
                return val;
            }
            points() {
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                const series_x = this.series_x();
                const series_y = this.series_y();
                return this.indexes().map(index => {
                    let point_x = Math.round(shift_x + this.repos_x(series_x[index]) * scale_x);
                    let point_y = Math.round(shift_y + this.repos_y(series_y[index]) * scale_y);
                    point_x = Math.max(Number.MIN_SAFE_INTEGER, Math.min(point_x, Number.MAX_SAFE_INTEGER));
                    point_y = Math.max(Number.MIN_SAFE_INTEGER, Math.min(point_y, Number.MAX_SAFE_INTEGER));
                    return [point_x, point_y];
                });
            }
            series_x() {
                return this.series_y().map((val, index) => index);
            }
            dimensions() {
                let next = new this.$.$mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
                const series_x = this.series_x();
                const series_y = this.series_y();
                for (let i = 0; i < series_x.length; i++) {
                    if (series_x[i] > next.x.max)
                        next.x.max = this.repos_x(series_x[i]);
                    if (series_x[i] < next.x.min)
                        next.x.min = this.repos_x(series_x[i]);
                    if (series_y[i] > next.y.max)
                        next.y.max = this.repos_y(series_y[i]);
                    if (series_y[i] < next.y.min)
                        next.y.min = this.repos_y(series_y[i]);
                }
                return next;
            }
            color() {
                const hue = this.hue();
                return hue ? `hsl( ${hue} , 100% , 35% )` : '';
            }
            front() {
                return [this];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_graph.prototype, "indexes", null);
        __decorate([
            $mol_mem
        ], $mol_plot_graph.prototype, "series_x", null);
        __decorate([
            $mol_mem
        ], $mol_plot_graph.prototype, "dimensions", null);
        $$.$mol_plot_graph = $mol_plot_graph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/graph/graph.view.css", "[mol_plot_graph] {\n\tstroke: currentColor;\n}\n\n[mol_plot_graph_sample] {\n\tborder-width: 0;\n\tborder-style: solid;\n}\n\n[mol_plot_graph_type=\"dashed\"] {\n\tstroke-dasharray: 4 4;\n\tborder-style: dashed;\n}\n");
})($ || ($ = {}));

;
	($.$mol_plot_line) = class $mol_plot_line extends ($.$mol_plot_graph) {
		curve(){
			return "";
		}
		threshold(){
			return 1;
		}
		spacing(){
			return 2;
		}
		color_fill(){
			return "none";
		}
		dom_name(){
			return "path";
		}
		attr(){
			return {...(super.attr()), "d": (this.curve())};
		}
		sub(){
			return [(this.Hint())];
		}
		Sample(){
			const obj = new this.$.$mol_plot_graph_sample();
			(obj.color) = () => ((this.color()));
			(obj.type) = () => ((this.type()));
			return obj;
		}
	};
	($mol_mem(($.$mol_plot_line.prototype), "Sample"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_line extends $.$mol_plot_line {
            sub() {
                return this.hint() ? super.sub() : [];
            }
            indexes() {
                const threshold = this.threshold();
                const { x: { min: viewport_left, max: viewport_right }, y: { min: viewport_bottom, max: viewport_top }, } = this.viewport();
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                const indexes = [];
                let last = new $mol_vector_2d(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
                let last_zone = new $mol_vector_2d(0, 0);
                const series_x = this.series_x();
                const series_y = this.series_y();
                const zone_of = (point) => new $mol_vector_2d(point.x < viewport_left ? -1
                    : point.x > viewport_right ? 1
                        : 0, point.y < viewport_bottom ? -1
                    : point.y > viewport_top ? 1
                        : 0);
                for (let i = 0; i < series_x.length - 1; i++) {
                    const scaled = new $mol_vector_2d(Math.round(shift_x + this.repos_x(series_x[i]) * scale_x), Math.round(shift_y + this.repos_y(series_y[i]) * scale_y));
                    if (Math.abs(scaled.x - last.x) < threshold
                        && Math.abs(scaled.y - last.y) < threshold)
                        continue;
                    const zone = zone_of(scaled);
                    last = scaled;
                    if (zone.x !== 0 && zone.x === last_zone.x || zone.y !== 0 && zone.y === last_zone.y) {
                        continue;
                    }
                    if (last_zone.x !== 0 || last_zone.y !== 0) {
                        indexes.push(i - 1);
                    }
                    last_zone = zone;
                    indexes.push(i);
                }
                indexes.push(series_x.length - 1);
                return indexes;
            }
            curve() {
                const points = this.points();
                if (points.length === 0)
                    return '';
                const main = points.map((point) => point.join(',')).join(' ');
                return `M ${points[0].join(' ')} L ${main}`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_line.prototype, "indexes", null);
        $$.$mol_plot_line = $mol_plot_line;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/line/line.view.css", "[mol_plot_line] {\n\tfill: none;\n\tstroke-linejoin: round;\n}\n\n[mol_plot_line_sample] {\n\theight: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tborder-width: 2px 0 0;\n\tposition: absolute;\n\ttop: .75em;\n\ttransform: translateY(-50%);\n}\n");
})($ || ($ = {}));

;
	($.$mol_plot_fill) = class $mol_plot_fill extends ($.$mol_plot_line) {
		threshold(){
			return 4;
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_fill extends $.$mol_plot_fill {
            curve() {
                const points = this.points();
                if (points.length === 0)
                    return '';
                const [, shift_y] = this.shift();
                const main = points.map(point => point.join(',')).join(' ');
                return `M ${points[0].join(' ')} L ${main} V ${shift_y} H ${points[0][0]}`;
            }
            front() {
                return [];
            }
            back() {
                return [this];
            }
        }
        $$.$mol_plot_fill = $mol_plot_fill;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/fill/fill.view.css", "[mol_plot_fill] {\n\tstroke: none;\n\tstroke-width: 0;\n\topacity: .1;\n\tfill: currentColor;\n\tpointer-events: none;\n}\n\n[mol_plot_fill_sample] {\n\topacity: .1;\n\tbackground: currentColor;\n\tposition: absolute;\n\tbottom: 0;\n\ttop: .75em;\n\tleft: 0;\n\tright: 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_plot_group) = class $mol_plot_group extends ($.$mol_plot_graph) {
		graphs(){
			return [];
		}
		graphs_enriched(){
			return (this.graphs());
		}
		graph_samples(){
			return [];
		}
		sub(){
			return (this.graphs_enriched());
		}
		Sample(){
			const obj = new this.$.$mol_plot_graph_sample();
			(obj.sub) = () => ((this.graph_samples()));
			return obj;
		}
	};
	($mol_mem(($.$mol_plot_group.prototype), "Sample"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_group extends $.$mol_plot_group {
            graphs_enriched() {
                const graphs = this.graphs();
                for (let graph of graphs) {
                    graph.shift = () => this.shift();
                    graph.scale = () => this.scale();
                    graph.size_real = () => this.size_real();
                    graph.hue = () => this.hue();
                    graph.series_x = () => this.series_x();
                    graph.series_y = () => this.series_y();
                    graph.dimensions_pane = () => this.dimensions_pane();
                    graph.viewport = () => this.viewport();
                    graph.cursor_position = () => this.cursor_position();
                    graph.gap = () => this.gap();
                    graph.title = () => this.title();
                    graph.repos_x = val => this.repos_x(val);
                    graph.repos_y = val => this.repos_y(val);
                }
                return graphs;
            }
            dimensions() {
                const graphs = this.graphs_enriched();
                let next = new this.$.$mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
                for (let graph of graphs) {
                    next = next.expanded2(graph.dimensions());
                }
                return next;
            }
            graph_samples() {
                return this.graphs_enriched().map(graph => graph.Sample());
            }
            back() {
                const graphs = this.graphs_enriched();
                const next = [];
                for (let graph of graphs)
                    next.push(...graph.back());
                return next;
            }
            front() {
                const graphs = this.graphs_enriched();
                const next = [];
                for (let graph of graphs)
                    next.push(...graph.front());
                return next;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_group.prototype, "graphs_enriched", null);
        __decorate([
            $mol_mem
        ], $mol_plot_group.prototype, "dimensions", null);
        __decorate([
            $mol_mem
        ], $mol_plot_group.prototype, "graph_samples", null);
        $$.$mol_plot_group = $mol_plot_group;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg_rect) = class $mol_svg_rect extends ($.$mol_svg) {
		width(){
			return "0";
		}
		height(){
			return "0";
		}
		pos_x(){
			return "";
		}
		pos_y(){
			return "";
		}
		dom_name(){
			return "rect";
		}
		pos(){
			return [];
		}
		attr(){
			return {
				...(super.attr()), 
				"width": (this.width()), 
				"height": (this.height()), 
				"x": (this.pos_x()), 
				"y": (this.pos_y())
			};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_rect extends $.$mol_svg_rect {
            pos_x() {
                return this.pos()[0];
            }
            pos_y() {
                return this.pos()[1];
            }
        }
        $$.$mol_svg_rect = $mol_svg_rect;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg_text) = class $mol_svg_text extends ($.$mol_svg) {
		pos_x(){
			return "";
		}
		pos_y(){
			return "";
		}
		align(){
			return "middle";
		}
		align_hor(){
			return (this.align());
		}
		align_vert(){
			return "baseline";
		}
		text(){
			return "";
		}
		dom_name(){
			return "text";
		}
		pos(){
			return [];
		}
		attr(){
			return {
				...(super.attr()), 
				"x": (this.pos_x()), 
				"y": (this.pos_y()), 
				"text-anchor": (this.align_hor()), 
				"alignment-baseline": (this.align_vert())
			};
		}
		sub(){
			return [(this.text())];
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_text extends $.$mol_svg_text {
            pos_x() {
                return this.pos()[0];
            }
            pos_y() {
                return this.pos()[1];
            }
        }
        $$.$mol_svg_text = $mol_svg_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/text/text.view.css", "[mol_svg_text] {\n\tfill: currentColor;\n\tstroke: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_plot_ruler) = class $mol_plot_ruler extends ($.$mol_plot_graph) {
		background_x(){
			return "0";
		}
		background_y(){
			return "0";
		}
		background_width(){
			return "100%";
		}
		background_height(){
			return "14";
		}
		Background(){
			const obj = new this.$.$mol_svg_rect();
			(obj.pos_x) = () => ((this.background_x()));
			(obj.pos_y) = () => ((this.background_y()));
			(obj.width) = () => ((this.background_width()));
			(obj.height) = () => ((this.background_height()));
			return obj;
		}
		curve(){
			return "";
		}
		Curve(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.curve()));
			return obj;
		}
		labels_formatted(){
			return [];
		}
		title_pos_x(){
			return "0";
		}
		title_pos_y(){
			return "100%";
		}
		title_align(){
			return "start";
		}
		Title(){
			const obj = new this.$.$mol_svg_text();
			(obj.pos_x) = () => ((this.title_pos_x()));
			(obj.pos_y) = () => ((this.title_pos_y()));
			(obj.align) = () => ((this.title_align()));
			(obj.text) = () => ((this.title()));
			return obj;
		}
		label_pos_x(id){
			return "";
		}
		label_pos_y(id){
			return "";
		}
		label_pos(id){
			return [(this.label_pos_x(id)), (this.label_pos_y(id))];
		}
		label_text(id){
			return "";
		}
		label_align(){
			return "";
		}
		step(){
			return 0;
		}
		scale_axis(){
			return 1;
		}
		scale_step(){
			return 1;
		}
		shift_axis(){
			return 1;
		}
		dimensions_axis(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		viewport_axis(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		axis_points(){
			return [];
		}
		normalize(next){
			if(next !== undefined) return next;
			return 0;
		}
		precision(){
			return 1;
		}
		sub(){
			return [
				(this.Background()), 
				(this.Curve()), 
				(this.labels_formatted()), 
				(this.Title())
			];
		}
		Label(id){
			const obj = new this.$.$mol_svg_text();
			(obj.pos) = () => ((this.label_pos(id)));
			(obj.text) = () => ((this.label_text(id)));
			(obj.align) = () => ((this.label_align()));
			return obj;
		}
	};
	($mol_mem(($.$mol_plot_ruler.prototype), "Background"));
	($mol_mem(($.$mol_plot_ruler.prototype), "Curve"));
	($mol_mem(($.$mol_plot_ruler.prototype), "Title"));
	($mol_mem(($.$mol_plot_ruler.prototype), "dimensions_axis"));
	($mol_mem(($.$mol_plot_ruler.prototype), "viewport_axis"));
	($mol_mem(($.$mol_plot_ruler.prototype), "normalize"));
	($mol_mem_key(($.$mol_plot_ruler.prototype), "Label"));


;
"use strict";
var $;
(function ($) {
    function $mol_math_round_expand(val, gap = 1) {
        if (val === 0)
            return 0;
        const val_abs = Math.abs(val);
        const val_sign = val ? Math.round(val / val_abs) : 0;
        const digits = Math.floor(Math.log(val_abs) / Math.log(10));
        const precission = Math.pow(10, digits - gap);
        const val_expanded = precission * Math.ceil(val_abs / precission);
        return val_sign * val_expanded;
    }
    $.$mol_math_round_expand = $mol_math_round_expand;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler extends $.$mol_plot_ruler {
            labels_formatted() {
                return this.axis_points().map((point, index) => this.Label(index));
            }
            step() {
                const scale = Math.abs(this.scale_step());
                const dims = this.dimensions_axis();
                const range = dims.max - dims.min;
                const min_width = (Math.abs(Math.log10(range)) + 2) * 15;
                const size = $mol_math_round_expand(range, -1);
                const count = Math.max(1, Math.pow(10, Math.floor(Math.log(size * scale / min_width) / Math.log(10))));
                let step = size / count;
                const step_max = min_width * 2 / scale;
                if (step > step_max)
                    step /= 2;
                if (step > step_max)
                    step /= 2;
                return Math.max(step, Math.abs(dims.min) / 1e10, Math.abs(dims.max) / 1e10);
            }
            snap_to_grid(coord) {
                const viewport = this.viewport_axis();
                const scale = this.scale_axis();
                const shift = this.shift_axis();
                const step = this.step();
                const val = Math.round(coord / step) * step;
                if (scale == 0)
                    return val;
                const step_scaled = step * scale;
                const scaled = val * scale + shift;
                let count = 0;
                if (scaled < viewport.min)
                    count = (scaled - viewport.min) / step_scaled;
                if (scaled > viewport.max)
                    count = (scaled - viewport.max) / step_scaled;
                return val - Math.floor(count) * step;
            }
            axis_points() {
                const dims = this.dimensions_axis();
                const start = this.snap_to_grid(dims.min);
                const end = this.snap_to_grid(dims.max);
                const step = this.step();
                const next = [];
                for (let val = start; val <= end; val += step) {
                    next.push(val);
                }
                return next;
            }
            precision() {
                const step = this.step();
                return Math.max(0, Math.min(15, (step - Math.floor(step)).toString().length - 2));
            }
            label_text(index) {
                const point = this.axis_points()[index];
                return point.toFixed(this.precision());
            }
            font_size() {
                return this.Background().font_size();
            }
            back() {
                return [this.Curve()];
            }
            front() {
                return [
                    ...this.labels_formatted(),
                    this.Title()
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_ruler.prototype, "step", null);
        __decorate([
            $mol_mem
        ], $mol_plot_ruler.prototype, "axis_points", null);
        __decorate([
            $mol_mem
        ], $mol_plot_ruler.prototype, "precision", null);
        $$.$mol_plot_ruler = $mol_plot_ruler;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/ruler/ruler.view.css", "[mol_plot_ruler_curve] {\n\tcolor: var(--mol_theme_line);\n\tstroke-width: 1px;\n\tstroke: currentColor;\n}\n\n[mol_plot_ruler_label] {\n\tcolor: var(--mol_theme_text);\n\ttext-shadow: 0 -1px var(--mol_theme_back), 0px 1px var(--mol_theme_back);\n}\n\n[mol_plot_ruler_title] {\n\tcolor: var(--mol_theme_shade);\n\tbackground-color: var(--mol_theme_back);\n\ttext-shadow: 0 -1px var(--mol_theme_back), 0px 1px var(--mol_theme_back);\n}\n\n[mol_plot_ruler_background] {\n\tstroke: none;\n\tfill: var(--mol_theme_back);\n\topacity: 0.8;\n}\n");
})($ || ($ = {}));

;
	($.$mol_plot_ruler_vert) = class $mol_plot_ruler_vert extends ($.$mol_plot_ruler) {
		title_align(){
			return "end";
		}
		label_align(){
			return "end";
		}
		title_pos_y(){
			return "14";
		}
		label_pos_x(id){
			return (this.title_pos_x());
		}
		background_height(){
			return "100%";
		}
		background_width(){
			return (this.title_pos_x());
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
            dimensions_axis() {
                return this.dimensions_pane().y;
            }
            viewport_axis() {
                return new this.$.$mol_vector_range(0, this.size_real().y);
            }
            scale_axis() {
                return this.scale()[1];
            }
            scale_step() {
                return -this.scale()[1];
            }
            shift_axis() {
                return this.shift()[1];
            }
            curve() {
                const [, shift] = this.shift();
                const [, scale] = this.scale();
                return this.axis_points().map(point => {
                    let scaled = Math.round(point * scale + shift);
                    scaled = Math.max(Number.MIN_SAFE_INTEGER, Math.min(scaled, Number.MAX_SAFE_INTEGER));
                    return `M 0 ${scaled} H 2000`;
                }).join(' ');
            }
            title_pos_x() {
                return String(this.gap().x.min);
            }
            label_pos_y(index) {
                return (this.axis_points()[index] * this.scale()[1] + this.shift()[1]).toFixed(3);
            }
        }
        $$.$mol_plot_ruler_vert = $mol_plot_ruler_vert;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/ruler/vert/vert.view.css", "[mol_plot_ruler_vert_label] {\n\ttransform: translateY( 4px );\n}\n");
})($ || ($ = {}));

;
	($.$mol_plot_ruler_hor) = class $mol_plot_ruler_hor extends ($.$mol_plot_ruler) {
		title_align(){
			return "start";
		}
		label_align(){
			return "middle";
		}
		title_pos_x(){
			return "0";
		}
		title_pos_y(){
			return "100%";
		}
		label_pos_y(id){
			return (this.title_pos_y());
		}
		background_width(){
			return "100%";
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
            dimensions_axis() {
                return this.dimensions_pane().x;
            }
            viewport_axis() {
                return new this.$.$mol_vector_range(0, this.size_real().x);
            }
            scale_axis() {
                return this.scale()[0];
            }
            scale_step() {
                return this.scale()[0];
            }
            shift_axis() {
                return this.shift()[0];
            }
            curve() {
                const [shift] = this.shift();
                const [scale] = this.scale();
                return this.axis_points().map(point => {
                    let scaled = Math.round(point * scale + shift);
                    scaled = Math.max(Number.MIN_SAFE_INTEGER, Math.min(scaled, Number.MAX_SAFE_INTEGER));
                    return `M ${scaled} 1000 V 0`;
                }).join(' ');
            }
            label_pos_x(index) {
                return (this.axis_points()[index] * this.scale()[0] + this.shift()[0]).toFixed(3);
            }
            background_y() {
                return String(this.size_real()[1] - this.font_size());
            }
            title_pos_y() {
                return String(this.size_real()[1]);
            }
            background_height() {
                return String(this.font_size());
            }
        }
        $$.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/ruler/hor/hor.view.css", "[mol_plot_ruler_hor_label] {\n\ttransform: translateY( -4px );\n}\n\n[mol_plot_ruler_hor_title] {\n\ttransform: translateY( -4px );\n}\n");
})($ || ($ = {}));

;
	($.$mol_gallery) = class $mol_gallery extends ($.$mol_view) {
		items(){
			return [];
		}
		side_size(id){
			return "1";
		}
		side_items(id){
			return [];
		}
		sub(){
			return (this.items());
		}
		Side(id){
			const obj = new this.$.$mol_gallery();
			(obj.style) = () => ({"flexGrow": (this.side_size(id))});
			(obj.items) = () => ((this.side_items(id)));
			return obj;
		}
	};
	($mol_mem_key(($.$mol_gallery.prototype), "Side"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_gallery extends $.$mol_gallery {
            sub() {
                const items = this.items();
                if (items.length <= 3)
                    return items;
                return [
                    this.Side(0),
                    this.Side(1),
                ];
            }
            side_items(id) {
                const items = this.items();
                const middle = items.length % 2
                    ? Math.ceil(items.length / 3)
                    : items.length / 2;
                return id
                    ? items.slice(middle)
                    : items.slice(0, middle);
            }
            side_size(id) {
                return String(this.side_items(id).length);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_gallery.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_gallery.prototype, "side_items", null);
        $$.$mol_gallery = $mol_gallery;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gallery/gallery.view.css", "[mol_gallery] {\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\talign-items: stretch;\n    align-content: stretch;\n}\n");
})($ || ($ = {}));

;
	($.$mol_chart_legend) = class $mol_chart_legend extends ($.$mol_scroll) {
		graph_legends(){
			return [];
		}
		Gallery(){
			const obj = new this.$.$mol_gallery();
			(obj.items) = () => ((this.graph_legends()));
			return obj;
		}
		Graph_sample(id){
			return null;
		}
		Graph_sample_box(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Graph_sample(id))]);
			return obj;
		}
		graph_title(id){
			return "";
		}
		Graph_title(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.graph_title(id))]);
			return obj;
		}
		graphs(){
			return [];
		}
		graphs_front(){
			return [];
		}
		sub(){
			return [(this.Gallery())];
		}
		Graph_legend(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Graph_sample_box(id)), (this.Graph_title(id))]);
			return obj;
		}
	};
	($mol_mem(($.$mol_chart_legend.prototype), "Gallery"));
	($mol_mem_key(($.$mol_chart_legend.prototype), "Graph_sample_box"));
	($mol_mem_key(($.$mol_chart_legend.prototype), "Graph_title"));
	($mol_mem_key(($.$mol_chart_legend.prototype), "Graph_legend"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chart_legend extends $.$mol_chart_legend {
            graphs_front() {
                return this.graphs().filter(graph => graph.Sample());
            }
            graph_legends() {
                return this.graphs_front().map((graph, index) => this.Graph_legend(index));
            }
            graph_title(index) {
                return this.graphs_front()[index].title();
            }
            Graph_sample(index) {
                return this.graphs_front()[index].Sample();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_chart_legend.prototype, "graphs_front", null);
        $$.$mol_chart_legend = $mol_chart_legend;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/chart/legend/legend.view.css", "[mol_chart_legend] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex-direction: row;\n\tflex: 0 1 auto;\n}\n\n[mol_chart_legend_graph_legend] {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex: 1 1 8rem;\n\tpadding: .5rem;\n}\n\n[mol_chart_legend_graph_title] {\n\tmargin: 0 .25rem;\n\tflex: 1 1 auto;\n}\n\n[mol_chart_legend_graph_sample_box] {\n\tposition: relative;\n\twidth: 1.5rem;\n\tflex: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_touch) = class $mol_touch extends ($.$mol_plugin) {
		event_start(next){
			if(next !== undefined) return next;
			return null;
		}
		event_move(next){
			if(next !== undefined) return next;
			return null;
		}
		event_end(next){
			if(next !== undefined) return next;
			return null;
		}
		event_leave(next){
			if(next !== undefined) return next;
			return null;
		}
		event_wheel(next){
			if(next !== undefined) return next;
			return null;
		}
		start_zoom(next){
			if(next !== undefined) return next;
			return 0;
		}
		start_distance(next){
			if(next !== undefined) return next;
			return 0;
		}
		zoom(next){
			if(next !== undefined) return next;
			return 1;
		}
		allow_draw(){
			return true;
		}
		allow_pan(){
			return true;
		}
		allow_zoom(){
			return true;
		}
		action_type(next){
			if(next !== undefined) return next;
			return "";
		}
		action_point(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_vector_2d(NaN, NaN);
			return obj;
		}
		start_pan(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		pan(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_vector_2d(0, 0);
			return obj;
		}
		pointer_center(){
			const obj = new this.$.$mol_vector_2d(NaN, NaN);
			return obj;
		}
		start_pos(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_precision(){
			return 16;
		}
		swipe_right(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_bottom(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_left(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_top(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_from_right(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_from_bottom(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_from_left(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_from_top(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_to_right(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_to_bottom(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_to_left(next){
			if(next !== undefined) return next;
			return null;
		}
		swipe_to_top(next){
			if(next !== undefined) return next;
			return null;
		}
		draw_start(next){
			if(next !== undefined) return next;
			return null;
		}
		draw(next){
			if(next !== undefined) return next;
			return null;
		}
		draw_end(next){
			if(next !== undefined) return next;
			return null;
		}
		style(){
			return {
				...(super.style()), 
				"touch-action": "none", 
				"overscroll-behavior": "none"
			};
		}
		event(){
			return {
				...(super.event()), 
				"pointerdown": (next) => (this.event_start(next)), 
				"pointermove": (next) => (this.event_move(next)), 
				"pointerup": (next) => (this.event_end(next)), 
				"pointerleave": (next) => (this.event_leave(next)), 
				"wheel": (next) => (this.event_wheel(next))
			};
		}
	};
	($mol_mem(($.$mol_touch.prototype), "event_start"));
	($mol_mem(($.$mol_touch.prototype), "event_move"));
	($mol_mem(($.$mol_touch.prototype), "event_end"));
	($mol_mem(($.$mol_touch.prototype), "event_leave"));
	($mol_mem(($.$mol_touch.prototype), "event_wheel"));
	($mol_mem(($.$mol_touch.prototype), "start_zoom"));
	($mol_mem(($.$mol_touch.prototype), "start_distance"));
	($mol_mem(($.$mol_touch.prototype), "zoom"));
	($mol_mem(($.$mol_touch.prototype), "action_type"));
	($mol_mem(($.$mol_touch.prototype), "action_point"));
	($mol_mem(($.$mol_touch.prototype), "start_pan"));
	($mol_mem(($.$mol_touch.prototype), "pan"));
	($mol_mem(($.$mol_touch.prototype), "pointer_center"));
	($mol_mem(($.$mol_touch.prototype), "start_pos"));
	($mol_mem(($.$mol_touch.prototype), "swipe_right"));
	($mol_mem(($.$mol_touch.prototype), "swipe_bottom"));
	($mol_mem(($.$mol_touch.prototype), "swipe_left"));
	($mol_mem(($.$mol_touch.prototype), "swipe_top"));
	($mol_mem(($.$mol_touch.prototype), "swipe_from_right"));
	($mol_mem(($.$mol_touch.prototype), "swipe_from_bottom"));
	($mol_mem(($.$mol_touch.prototype), "swipe_from_left"));
	($mol_mem(($.$mol_touch.prototype), "swipe_from_top"));
	($mol_mem(($.$mol_touch.prototype), "swipe_to_right"));
	($mol_mem(($.$mol_touch.prototype), "swipe_to_bottom"));
	($mol_mem(($.$mol_touch.prototype), "swipe_to_left"));
	($mol_mem(($.$mol_touch.prototype), "swipe_to_top"));
	($mol_mem(($.$mol_touch.prototype), "draw_start"));
	($mol_mem(($.$mol_touch.prototype), "draw"));
	($mol_mem(($.$mol_touch.prototype), "draw_end"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            auto() {
                this.pointer_events();
                this.start_pan();
                this.start_pos();
                this.start_distance();
                this.start_zoom();
                this.action_type();
                this.view_rect();
            }
            pointer_events(next = []) {
                return next;
            }
            pointer_coords() {
                const events = this.pointer_events();
                const touches = events.filter(e => e.pointerType === 'touch');
                const pens = events.filter(e => e.pointerType === 'pen');
                const mouses = events.filter(e => !e.pointerType || e.pointerType === 'mouse');
                const choosen = touches.length ? touches : pens.length ? pens : mouses;
                return new $mol_vector(...choosen.map(event => this.event_coords(event)));
            }
            pointer_center() {
                const coords = this.pointer_coords();
                return coords.length ? coords.center() : new $mol_vector_2d(NaN, NaN);
            }
            event_coords(event) {
                const { left, top } = this.view_rect();
                return new $mol_vector_2d(Math.round(event.pageX - left), Math.round(event.pageY - top));
            }
            action_point() {
                const coord = this.pointer_center();
                if (!coord)
                    return null;
                const zoom = this.zoom();
                const pan = this.pan();
                return new $mol_vector_2d((coord.x - pan.x) / zoom, (coord.y - pan.y) / zoom);
            }
            event_eat(event) {
                if (event instanceof PointerEvent) {
                    const events = this.pointer_events()
                        .filter(e => e instanceof PointerEvent)
                        .filter(e => e.pointerId !== event.pointerId);
                    if (event.type !== 'pointerup' && event.type !== 'pointerleave')
                        events.push(event);
                    this.pointer_events(events);
                    const touch_count = events.filter(e => e.pointerType === 'touch').length;
                    if (this.allow_zoom() && touch_count === 2) {
                        return this.action_type('zoom');
                    }
                    if (this.action_type() === 'zoom' && touch_count === 1) {
                        return this.action_type('zoom');
                    }
                    let button;
                    (function (button) {
                        button[button["left"] = 1] = "left";
                        button[button["right"] = 2] = "right";
                        button[button["middle"] = 4] = "middle";
                    })(button || (button = {}));
                    if (events.length > 0) {
                        if (event.ctrlKey && this.allow_zoom())
                            return this.action_type('zoom');
                        if (event.buttons === button.left && this.allow_draw())
                            return this.action_type('draw');
                        if (event.buttons && this.allow_pan())
                            return this.action_type('pan');
                    }
                    return this.action_type('');
                }
                if (event instanceof WheelEvent) {
                    this.pointer_events([event]);
                    if (event.shiftKey)
                        return this.action_type('pan');
                    return this.action_type('zoom');
                }
                return this.action_type('');
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                const action_type = this.event_eat(event);
                if (!action_type)
                    return;
                const coords = this.pointer_coords();
                this.start_pos(coords.center());
                if (action_type === 'draw') {
                    this.draw_start(event);
                    return;
                }
                this.start_distance(coords.distance());
                this.start_zoom(this.zoom());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const rect = this.view_rect();
                if (!rect)
                    return;
                const start_pan = this.start_pan();
                const action_type = this.event_eat(event);
                const start_pos = this.start_pos();
                let pos = this.pointer_center();
                if (!action_type)
                    return;
                if (!start_pos)
                    return;
                if (action_type === 'draw') {
                    const distance = new $mol_vector(start_pos, pos).distance();
                    if (distance >= 4) {
                        this.draw(event);
                    }
                    return;
                }
                if (action_type === 'pan') {
                    this.dom_node().setPointerCapture(event.pointerId);
                    this.pan(new $mol_vector_2d(start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]));
                }
                const precision = this.swipe_precision();
                if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                    || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                    || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                    && pos[0] - start_pos[0] > precision * 2
                    && Math.abs(pos[1] - start_pos[1]) < precision) {
                    this.swipe_right(event);
                }
                if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                    || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                    || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                    && start_pos[0] - pos[0] > precision * 2
                    && Math.abs(pos[1] - start_pos[1]) < precision) {
                    this.swipe_left(event);
                }
                if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                    || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                    || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                    && pos[1] - start_pos[1] > precision * 2
                    && Math.abs(pos[0] - start_pos[0]) < precision) {
                    this.swipe_bottom(event);
                }
                if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                    || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                    || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                    && start_pos[1] - pos[1] > precision * 2
                    && Math.abs(pos[0] - start_pos[0]) < precision) {
                    this.swipe_top(event);
                }
                if (action_type === 'zoom') {
                    const coords = this.pointer_coords();
                    const distance = coords.distance();
                    const start_distance = this.start_distance();
                    const center = coords.center();
                    const start_zoom = this.start_zoom();
                    let mult = Math.abs(distance - start_distance) < 32 ? 1 : distance / start_distance;
                    this.zoom(start_zoom * mult);
                    const pan = new $mol_vector_2d((start_pan[0] - center[0] + pos[0] - start_pos[0]) * mult + center[0], (start_pan[1] - center[1] + pos[1] - start_pos[1]) * mult + center[1]);
                    this.pan(pan);
                }
            }
            event_end(event) {
                const action = this.action_type();
                if (action === 'draw') {
                    this.draw_end(event);
                }
                this.event_leave(event);
            }
            event_leave(event) {
                this.event_eat(event);
                this.dom_node().releasePointerCapture(event.pointerId);
                this.start_pos(null);
            }
            swipe_left(event) {
                if (this.view_rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.view_rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.view_rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.view_rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            event_wheel(event) {
                if (event.defaultPrevented)
                    return;
                if (this.pan === $mol_touch.prototype.pan && this.zoom === $mol_touch.prototype.zoom)
                    return;
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const action_type = this.event_eat(event);
                if (action_type === 'zoom') {
                    const zoom_prev = this.zoom() || 0.001;
                    let zoom_next = zoom_prev * (1 - .001 * Math.min(event.deltaY, 100));
                    zoom_next = this.zoom(zoom_next);
                    const mult = zoom_next / zoom_prev;
                    const pan_prev = this.pan();
                    const center = this.pointer_center();
                    const pan_next = pan_prev.multed0(mult).added1(center.multed0(1 - mult));
                    this.pan(pan_next);
                }
                if (action_type === 'pan') {
                    const pan_prev = this.pan();
                    const pan_next = new $mol_vector_2d(pan_prev.x - event.deltaX, pan_prev.y - event.deltaY);
                    this.pan(pan_next);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_events", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_coords", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_center", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "action_point", null);
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_plot_pane) = class $mol_plot_pane extends ($.$mol_svg_root) {
		gap_x(){
			const obj = new this.$.$mol_vector_range((this.gap_left()), (this.gap_right()));
			return obj;
		}
		gap_y(){
			const obj = new this.$.$mol_vector_range((this.gap_bottom()), (this.gap_top()));
			return obj;
		}
		shift_limit_x(){
			const obj = new this.$.$mol_vector_range(0, 0);
			return obj;
		}
		shift_limit_y(){
			const obj = new this.$.$mol_vector_range(0, 0);
			return obj;
		}
		scale_limit_x(){
			const obj = new this.$.$mol_vector_range(0, Infinity);
			return obj;
		}
		scale_limit_y(){
			const obj = new this.$.$mol_vector_range(0, -Infinity);
			return obj;
		}
		dimensions_x(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		dimensions_y(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		dimensions_viewport_x(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		dimensions_viewport_y(){
			const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
			return obj;
		}
		graphs_sorted(){
			return [];
		}
		graphs(){
			return [];
		}
		graphs_positioned(){
			return (this.graphs());
		}
		graphs_visible(){
			return (this.graphs_positioned());
		}
		zoom(next){
			if(next !== undefined) return next;
			return 1;
		}
		cursor_position(){
			return (this.Touch().pointer_center());
		}
		allow_draw(){
			return true;
		}
		allow_pan(){
			return true;
		}
		allow_zoom(){
			return true;
		}
		action_type(){
			return (this.Touch().action_type());
		}
		action_point(){
			return (this.Touch().action_point());
		}
		draw_start(next){
			if(next !== undefined) return next;
			return null;
		}
		draw(next){
			if(next !== undefined) return next;
			return null;
		}
		draw_end(next){
			if(next !== undefined) return next;
			return null;
		}
		Touch(){
			const obj = new this.$.$mol_touch();
			(obj.zoom) = (next) => ((this.zoom(next)));
			(obj.pan) = (next) => ((this.shift(next)));
			(obj.allow_draw) = () => ((this.allow_draw()));
			(obj.allow_pan) = () => ((this.allow_pan()));
			(obj.allow_zoom) = () => ((this.allow_zoom()));
			(obj.draw_start) = (next) => ((this.draw_start(next)));
			(obj.draw) = (next) => ((this.draw(next)));
			(obj.draw_end) = (next) => ((this.draw_end(next)));
			return obj;
		}
		aspect(){
			return "none";
		}
		hue_base(next){
			if(next !== undefined) return next;
			return +NaN;
		}
		hue_shift(next){
			if(next !== undefined) return next;
			return 111;
		}
		gap_hor(){
			return 48;
		}
		gap_vert(){
			return 24;
		}
		gap_left(){
			return (this.gap_hor());
		}
		gap_right(){
			return (this.gap_hor());
		}
		gap_top(){
			return (this.gap_vert());
		}
		gap_bottom(){
			return (this.gap_vert());
		}
		gap(){
			const obj = new this.$.$mol_vector_2d((this.gap_x()), (this.gap_y()));
			return obj;
		}
		shift_limit(){
			const obj = new this.$.$mol_vector_2d((this.shift_limit_x()), (this.shift_limit_y()));
			return obj;
		}
		shift_default(){
			const obj = new this.$.$mol_vector_2d(0, 0);
			return obj;
		}
		shift(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_vector_2d(0, 0);
			return obj;
		}
		scale_limit(){
			const obj = new this.$.$mol_vector_2d((this.scale_limit_x()), (this.scale_limit_y()));
			return obj;
		}
		scale_default(){
			const obj = new this.$.$mol_vector_2d(0, 0);
			return obj;
		}
		scale(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_vector_2d(1, -1);
			return obj;
		}
		scale_x(next){
			if(next !== undefined) return next;
			return 1;
		}
		scale_y(next){
			if(next !== undefined) return next;
			return -1;
		}
		size(){
			const obj = new this.$.$mol_vector_2d(0, 0);
			return obj;
		}
		size_real(){
			const obj = new this.$.$mol_vector_2d(1, 1);
			return obj;
		}
		dimensions(){
			const obj = new this.$.$mol_vector_2d((this.dimensions_x()), (this.dimensions_y()));
			return obj;
		}
		dimensions_viewport(){
			const obj = new this.$.$mol_vector_2d((this.dimensions_viewport_x()), (this.dimensions_viewport_y()));
			return obj;
		}
		sub(){
			return (this.graphs_sorted());
		}
		graphs_colored(){
			return (this.graphs_visible());
		}
		plugins(){
			return [...(super.plugins()), (this.Touch())];
		}
	};
	($mol_mem(($.$mol_plot_pane.prototype), "gap_x"));
	($mol_mem(($.$mol_plot_pane.prototype), "gap_y"));
	($mol_mem(($.$mol_plot_pane.prototype), "shift_limit_x"));
	($mol_mem(($.$mol_plot_pane.prototype), "shift_limit_y"));
	($mol_mem(($.$mol_plot_pane.prototype), "scale_limit_x"));
	($mol_mem(($.$mol_plot_pane.prototype), "scale_limit_y"));
	($mol_mem(($.$mol_plot_pane.prototype), "dimensions_x"));
	($mol_mem(($.$mol_plot_pane.prototype), "dimensions_y"));
	($mol_mem(($.$mol_plot_pane.prototype), "dimensions_viewport_x"));
	($mol_mem(($.$mol_plot_pane.prototype), "dimensions_viewport_y"));
	($mol_mem(($.$mol_plot_pane.prototype), "zoom"));
	($mol_mem(($.$mol_plot_pane.prototype), "draw_start"));
	($mol_mem(($.$mol_plot_pane.prototype), "draw"));
	($mol_mem(($.$mol_plot_pane.prototype), "draw_end"));
	($mol_mem(($.$mol_plot_pane.prototype), "Touch"));
	($mol_mem(($.$mol_plot_pane.prototype), "hue_base"));
	($mol_mem(($.$mol_plot_pane.prototype), "hue_shift"));
	($mol_mem(($.$mol_plot_pane.prototype), "gap"));
	($mol_mem(($.$mol_plot_pane.prototype), "shift_limit"));
	($mol_mem(($.$mol_plot_pane.prototype), "shift_default"));
	($mol_mem(($.$mol_plot_pane.prototype), "shift"));
	($mol_mem(($.$mol_plot_pane.prototype), "scale_limit"));
	($mol_mem(($.$mol_plot_pane.prototype), "scale_default"));
	($mol_mem(($.$mol_plot_pane.prototype), "scale"));
	($mol_mem(($.$mol_plot_pane.prototype), "scale_x"));
	($mol_mem(($.$mol_plot_pane.prototype), "scale_y"));
	($mol_mem(($.$mol_plot_pane.prototype), "size"));
	($mol_mem(($.$mol_plot_pane.prototype), "size_real"));
	($mol_mem(($.$mol_plot_pane.prototype), "dimensions"));
	($mol_mem(($.$mol_plot_pane.prototype), "dimensions_viewport"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_pane extends $.$mol_plot_pane {
            dimensions() {
                const graphs = this.graphs();
                let next = new this.$.$mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
                for (let graph of graphs) {
                    next = next.expanded2(graph.dimensions());
                }
                return next;
            }
            size() {
                const dims = this.dimensions();
                return new this.$.$mol_vector_2d((dims.x.max - dims.x.min) || 1, (dims.y.max - dims.y.min) || 1);
            }
            graph_hue(index) {
                return (360 + (this.hue_base() + this.hue_shift() * index) % 360) % 360;
            }
            graphs_colored() {
                const graphs = this.graphs_visible();
                for (let index = 0; index < graphs.length; index++) {
                    graphs[index].hue(this.graph_hue(index));
                }
                return graphs;
            }
            size_real() {
                const rect = this.view_rect();
                if (!rect)
                    return new this.$.$mol_vector_2d(1, 1);
                return new this.$.$mol_vector_2d(rect.width, rect.height);
            }
            view_box() {
                const size = this.size_real();
                return `0 0 ${size.x} ${size.y}`;
            }
            scale_limit() {
                const { x: { max: right }, y: { max: top } } = super.scale_limit();
                const gap = this.gap();
                const size = this.size();
                const real = this.size_real();
                const left = +(real.x - gap.x.min - gap.x.max) / size.x;
                const bottom = -(real.y - gap.y.max - gap.y.min) / size.y;
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(left, right), new this.$.$mol_vector_range(top, bottom));
            }
            scale_default() {
                const limits = this.scale_limit();
                return new $mol_vector_2d(limits.x.min, limits.y.max);
            }
            scale(next) {
                if (next === undefined) {
                    if (!this.graph_touched)
                        return this.scale_default();
                    next = $mol_mem_cached(() => this.scale()) ?? this.scale_default();
                }
                this.graph_touched = true;
                return next.limited(this.scale_limit());
            }
            scale_x(next) {
                return this.scale(next === undefined
                    ? undefined
                    : new $mol_vector_2d(next, this.scale().y)).x;
            }
            scale_y(next) {
                return this.scale(next === undefined
                    ? undefined
                    : new $mol_vector_2d(this.scale().x, next)).y;
            }
            shift_limit() {
                const dims = this.dimensions();
                const [scale_x, scale_y] = this.scale();
                const size = this.size_real();
                const gap = this.gap();
                const left = gap.x.min - dims.x.min * scale_x;
                const right = size.x - gap.x.max - dims.x.max * scale_x;
                const top = gap.y.max - dims.y.max * scale_y;
                const bottom = size.y - gap.y.min - dims.y.min * scale_y;
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(right, left), new this.$.$mol_vector_range(bottom, top));
            }
            shift_default() {
                const limits = this.shift_limit();
                return new $mol_vector_2d(limits.x.min, limits.y.min);
            }
            graph_touched = false;
            shift(next) {
                if (next === undefined) {
                    if (!this.graph_touched)
                        return this.shift_default();
                    next = $mol_mem_cached(() => this.shift()) ?? this.shift_default();
                }
                this.graph_touched = true;
                return next.limited(this.shift_limit());
            }
            reset(event) {
                this.graph_touched = false;
                this.scale(this.scale_default());
                this.shift(this.shift_default());
            }
            graphs_visible() {
                const viewport = this.dimensions_viewport();
                const size_real = this.size_real();
                const max_x = (viewport.x.max - viewport.x.min) / size_real.x;
                const max_y = (viewport.y.max - viewport.y.min) / size_real.y;
                return this.graphs_positioned().filter(graph => {
                    const dims = graph.dimensions();
                    if (dims.x.min > dims.x.max)
                        return true;
                    if (dims.y.min > dims.y.max)
                        return true;
                    const size_x = dims.x.max - dims.x.min;
                    const size_y = dims.y.max - dims.y.min;
                    if ((size_x || size_y) && size_x < max_x && size_y < max_y)
                        return false;
                    if (dims.x.min > viewport.x.max)
                        return false;
                    if (dims.x.max < viewport.x.min)
                        return false;
                    if (dims.y.min > viewport.y.max)
                        return false;
                    if (dims.y.max < viewport.y.min)
                        return false;
                    return true;
                });
            }
            graphs_positioned() {
                const graphs = this.graphs();
                for (let graph of graphs) {
                    graph.shift = () => this.shift();
                    graph.scale = () => this.scale();
                    graph.dimensions_pane = () => this.dimensions_viewport();
                    graph.viewport = () => this.viewport();
                    graph.size_real = () => this.size_real();
                    graph.cursor_position = () => this.cursor_position();
                    graph.gap = () => this.gap();
                }
                return graphs;
            }
            dimensions_viewport() {
                const shift = this.shift().multed0(-1);
                const scale = this.scale().powered0(-1);
                return this.viewport().map((range, i) => range.added0(shift[i]).multed0(scale[i]).sort((a, b) => a - b));
            }
            viewport() {
                const size = this.size_real();
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(0, size.x), new this.$.$mol_vector_range(0, size.y));
            }
            graphs_sorted() {
                const graphs = this.graphs_colored();
                const sorted = [];
                for (let graph of graphs)
                    sorted.push(...graph.back());
                for (let graph of graphs)
                    sorted.push(...graph.front());
                return sorted;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "dimensions", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_colored", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "scale_limit", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "scale", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "shift_limit", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "shift_default", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "shift", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_visible", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_positioned", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "dimensions_viewport", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "viewport", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_sorted", null);
        $$.$mol_plot_pane = $mol_plot_pane;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/pane/pane.view.css", "[mol_plot_pane] {\n\tcolor: var(--mol_theme_control);\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tstroke-width: 2px;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_chart) = class $mol_chart extends ($.$mol_view) {
		Legend(){
			const obj = new this.$.$mol_chart_legend();
			(obj.graphs) = () => ((this.graphs_colored()));
			return obj;
		}
		zoom(next){
			return (this.Plot().scale_x(next));
		}
		graphs_colored(){
			return (this.Plot().graphs_colored());
		}
		hue_base(){
			return 210;
		}
		hue_shift(){
			return 163;
		}
		Plot(){
			const obj = new this.$.$mol_plot_pane();
			(obj.zoom) = (next) => ((this.zoom(next)));
			(obj.gap_left) = () => ((this.gap_left()));
			(obj.gap_right) = () => ((this.gap_right()));
			(obj.gap_bottom) = () => ((this.gap_bottom()));
			(obj.gap_top) = () => ((this.gap_top()));
			(obj.graphs) = () => ((this.graphs()));
			(obj.hue_base) = () => ((this.hue_base()));
			(obj.hue_shift) = () => ((this.hue_shift()));
			return obj;
		}
		gap_hor(){
			return 48;
		}
		gap_vert(){
			return 24;
		}
		gap_left(){
			return (this.gap_hor());
		}
		gap_right(){
			return (this.gap_hor());
		}
		gap_bottom(){
			return (this.gap_vert());
		}
		gap_top(){
			return (this.gap_vert());
		}
		graphs(){
			return [];
		}
		sub(){
			return [(this.Legend()), (this.Plot())];
		}
	};
	($mol_mem(($.$mol_chart.prototype), "Legend"));
	($mol_mem(($.$mol_chart.prototype), "Plot"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/chart/chart.view.css", "[mol_chart] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-self: stretch;\n\tflex: 1 1 auto;\n}\n\n[mol_chart_plot] {\n\tflex: 1 0 50%;\n\tmargin: .5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_major) = class $mol_button_major extends ($.$mol_button_minor) {
		theme(){
			return "$mol_theme_base";
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_row) = class $mol_row extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$hd_iq) = class $hd_iq extends ($.$mol_page) {
		Brain(){
			const obj = new this.$.$hd_iq_neuron(0);
			return obj;
		}
		score(){
			return 0;
		}
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		Hotkey(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({"left": (next) => (this.left(next)), "right": (next) => (this.right(next))});
			return obj;
		}
		Share(){
			const obj = new this.$.$mol_button_share();
			return obj;
		}
		Caption(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Share()), (this.Title())]);
			return obj;
		}
		Score(){
			const obj = new this.$.$mol_chip();
			(obj.sub) = () => ([(this.score())]);
			return obj;
		}
		Sources(){
			const obj = new this.$.$mol_link_source();
			(obj.uri) = () => ("https://github.com/hd4ru/iq/");
			return obj;
		}
		Donate(){
			const obj = new this.$.$mol_link_donate();
			(obj.uri) = () => ("https://boosty.to/hyoo");
			return obj;
		}
		Support(){
			const obj = new this.$.$mol_link_support();
			(obj.uri) = () => ("https://t.me/hd4ru/137");
			return obj;
		}
		Lights(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		score_final(){
			return "";
		}
		Score_final(){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.score_final())]);
			return obj;
		}
		Score_line(){
			const obj = new this.$.$mol_plot_line();
			return obj;
		}
		Score_fill(){
			const obj = new this.$.$mol_plot_fill();
			return obj;
		}
		score_series(next){
			if(next !== undefined) return next;
			return [];
		}
		Score_log(){
			const obj = new this.$.$mol_plot_group();
			(obj.graphs) = () => ([(this.Score_line()), (this.Score_fill())]);
			(obj.series_y) = () => ((this.score_series()));
			return obj;
		}
		Bad(){
			const obj = new this.$.$mol_plot_fill();
			(obj.series_x) = () => ([+0, +100]);
			(obj.series_y) = () => ([-100, -100]);
			return obj;
		}
		Good(){
			const obj = new this.$.$mol_plot_fill();
			(obj.series_x) = () => ([+0, +100]);
			(obj.series_y) = () => ([+100, +100]);
			return obj;
		}
		Ruler_vert(){
			const obj = new this.$.$mol_plot_ruler_vert();
			(obj.title) = () => ("");
			return obj;
		}
		Ruler_hor(){
			const obj = new this.$.$mol_plot_ruler_hor();
			(obj.title) = () => ("");
			return obj;
		}
		Stats(){
			const obj = new this.$.$mol_chart();
			(obj.Legend) = () => (null);
			(obj.graphs) = () => ([
				(this.Score_log()), 
				(this.Bad()), 
				(this.Good()), 
				(this.Ruler_vert()), 
				(this.Ruler_hor())
			]);
			return obj;
		}
		description(){
			return (this.$.$mol_locale.text("$hd_iq_description"));
		}
		History_log(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.description())]);
			return obj;
		}
		left_title(){
			return (this.$.$mol_locale.text("$hd_iq_left_title"));
		}
		left(next){
			if(next !== undefined) return next;
			return null;
		}
		Left(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.left_title()));
			(obj.click) = (next) => ((this.left(next)));
			return obj;
		}
		right_title(){
			return (this.$.$mol_locale.text("$hd_iq_right_title"));
		}
		right(next){
			if(next !== undefined) return next;
			return null;
		}
		Right(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.right_title()));
			(obj.click) = (next) => ((this.right(next)));
			return obj;
		}
		Choices(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Left()), (this.Right())]);
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$hd_iq_title"));
		}
		required(){
			return 200;
		}
		history(next){
			if(next !== undefined) return next;
			return [];
		}
		auto(){
			return [(this.Brain()), (this.score())];
		}
		plugins(){
			return [(this.Theme()), (this.Hotkey())];
		}
		head(){
			return [
				(this.Caption()), 
				(this.Score()), 
				(this.Tools())
			];
		}
		tools(){
			return [
				(this.Sources()), 
				(this.Donate()), 
				(this.Support()), 
				(this.Lights())
			];
		}
		body_content(){
			return [(this.Score_final()), (this.Body_content())];
		}
		ranks(){
			return {
				"XXL": (this.$.$mol_locale.text("$hd_iq_ranks_XXL")), 
				"XL": (this.$.$mol_locale.text("$hd_iq_ranks_XL")), 
				"L": (this.$.$mol_locale.text("$hd_iq_ranks_L")), 
				"M": (this.$.$mol_locale.text("$hd_iq_ranks_M")), 
				"S": (this.$.$mol_locale.text("$hd_iq_ranks_S")), 
				"XS": (this.$.$mol_locale.text("$hd_iq_ranks_XS")), 
				"XXS": (this.$.$mol_locale.text("$hd_iq_ranks_XXS"))
			};
		}
		body(){
			return [
				(this.Stats()), 
				(this.History_log()), 
				(this.Choices())
			];
		}
	};
	($mol_mem(($.$hd_iq.prototype), "Brain"));
	($mol_mem(($.$hd_iq.prototype), "Theme"));
	($mol_mem(($.$hd_iq.prototype), "Hotkey"));
	($mol_mem(($.$hd_iq.prototype), "Share"));
	($mol_mem(($.$hd_iq.prototype), "Caption"));
	($mol_mem(($.$hd_iq.prototype), "Score"));
	($mol_mem(($.$hd_iq.prototype), "Sources"));
	($mol_mem(($.$hd_iq.prototype), "Donate"));
	($mol_mem(($.$hd_iq.prototype), "Support"));
	($mol_mem(($.$hd_iq.prototype), "Lights"));
	($mol_mem(($.$hd_iq.prototype), "Score_final"));
	($mol_mem(($.$hd_iq.prototype), "Score_line"));
	($mol_mem(($.$hd_iq.prototype), "Score_fill"));
	($mol_mem(($.$hd_iq.prototype), "score_series"));
	($mol_mem(($.$hd_iq.prototype), "Score_log"));
	($mol_mem(($.$hd_iq.prototype), "Bad"));
	($mol_mem(($.$hd_iq.prototype), "Good"));
	($mol_mem(($.$hd_iq.prototype), "Ruler_vert"));
	($mol_mem(($.$hd_iq.prototype), "Ruler_hor"));
	($mol_mem(($.$hd_iq.prototype), "Stats"));
	($mol_mem(($.$hd_iq.prototype), "History_log"));
	($mol_mem(($.$hd_iq.prototype), "left"));
	($mol_mem(($.$hd_iq.prototype), "Left"));
	($mol_mem(($.$hd_iq.prototype), "right"));
	($mol_mem(($.$hd_iq.prototype), "Right"));
	($mol_mem(($.$hd_iq.prototype), "Choices"));
	($mol_mem(($.$hd_iq.prototype), "history"));


;
"use strict";
var $;
(function ($) {
    function $mol_offline() { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    function $mol_offline_web() {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                ;
                self.skipWaiting();
            });
            self.addEventListener('activate', (event) => {
                ;
                self.clients.claim();
                $$.$mol_log3_done({
                    place: '$mol_offline',
                    message: 'Activated',
                });
            });
            self.addEventListener('fetch', (event) => {
                const request = event.request;
                if (blacklist.has(request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                if (request.method !== 'GET')
                    return;
                if (!/^https?:/.test(request.url))
                    return;
                if (/\?/.test(request.url))
                    return;
                if (request.cache === 'no-store')
                    return;
                const fetch_data = () => fetch(new Request(request, { credentials: 'omit' })).then(response => {
                    if (response.status !== 200)
                        return response;
                    event.waitUntil(caches.open('$mol_offline').then(cache => cache.put(request, response)));
                    return response.clone();
                });
                const enrich = (response) => {
                    if (!response.status)
                        return response;
                    const headers = new Headers(response.headers);
                    headers.set("$mol_offline", "");
                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers,
                    });
                };
                const fresh = request.cache === 'force-cache' ? null : fetch_data();
                if (fresh)
                    event.waitUntil(fresh.then(enrich));
                event.respondWith(caches.match(request).then(cached => request.cache === 'no-cache' || request.cache === 'reload'
                    ? (cached
                        ? fresh
                            .then(actual => {
                            if (actual.status === cached.status)
                                return actual;
                            throw new Error(`${actual.status}${actual.statusText ? ` ${actual.statusText}` : ''}`, { cause: actual });
                        })
                            .catch((err) => {
                            const cloned = cached.clone();
                            const message = `${err.cause instanceof Response ? '' : '500 '}${err.message} $mol_offline fallback to cache`;
                            cloned.headers.set('$mol_offline_remote_status', message);
                            return cloned;
                        })
                        : fresh)
                    : (cached || fresh || fetch_data())).then(enrich));
            });
            self.addEventListener('beforeinstallprompt', (event) => event.prompt());
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            $mol_dom.addEventListener('DOMContentLoaded', () => {
                navigator.serviceWorker.register('web.js').then(reg => {
                });
            });
        }
    }
    $.$mol_offline_web = $mol_offline_web;
    $.$mol_offline = $mol_offline_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    try {
        $mol_offline();
    }
    catch (error) {
        console.error(error);
    }
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hd_iq extends $.$hd_iq {
            right() {
                this.choice(1);
            }
            left() {
                this.choice(0);
            }
            choice(next) {
                const brain = this.Brain();
                const history = this.history();
                let prediction = brain.predict(history);
                let teach = next;
                if (this.score() > 0 && Math.random() < .02)
                    teach = 1 - teach;
                brain.learn(teach, history);
                this.history([...history, teach]);
                if (next !== prediction)
                    this.wins(this.wins() + 1);
                this.score_series([...this.score_series(), this.score()]);
            }
            history_log() {
                return this.history().map(val => val ? '▶' : '◀').join('') || this.description();
            }
            wins(next = 0) {
                return next;
            }
            score() {
                return Math.round(this.wins() / (this.history().length + 1) * 200 - 100);
            }
            score_final() {
                if (this.history().length !== 101)
                    return $mol_mem_cached(() => this.score_final()) || '';
                return this.score().toLocaleString(undefined, { signDisplay: "exceptZero" }) + ' ' + this.rank();
            }
            rank() {
                const score = this.score();
                if (score >= +75)
                    return this.ranks().XXL;
                if (score >= +25)
                    return this.ranks().XL;
                if (score >= +10)
                    return this.ranks().L;
                if (score <= -75)
                    return this.ranks().XXS;
                if (score <= -25)
                    return this.ranks().XS;
                if (score <= -10)
                    return this.ranks().S;
                return this.ranks().M;
            }
        }
        __decorate([
            $mol_mem
        ], $hd_iq.prototype, "history_log", null);
        __decorate([
            $mol_mem
        ], $hd_iq.prototype, "wins", null);
        __decorate([
            $mol_mem
        ], $hd_iq.prototype, "score", null);
        __decorate([
            $mol_mem
        ], $hd_iq.prototype, "score_final", null);
        __decorate([
            $mol_mem
        ], $hd_iq.prototype, "rank", null);
        $$.$hd_iq = $hd_iq;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_define($hd_iq, {
        Head: {
            justify: {
                content: 'space-between',
            },
        },
        Score: {
            color: $mol_theme.special,
            textShadow: '0 0',
        },
        Body_content: {
            align: {
                self: 'stretch',
            },
        },
        History_log: {
            display: 'flex',
            padding: $mol_gap.block,
            flex: {
                direction: 'row-reverse',
            },
            align: {
                self: 'center'
            },
        },
        Choices: {
            '>': {
                $mol_button: {
                    flex: {
                        basis: '10%',
                        shrink: 1,
                        grow: 1,
                    },
                    justify: {
                        content: 'center',
                    },
                },
            },
        },
        Score_final: {
            lineHeight: '1.5em',
            justify: {
                self: 'center',
            },
            font: {
                family: 'cursive',
                size: `8vmin`,
            },
        },
    });
})($ || ($ = {}));


//# sourceMappingURL=web.js.map
