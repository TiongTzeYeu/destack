'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var runtimeExports = {};
var runtime = {
  get exports(){ return runtimeExports; },
  set exports(v){ runtimeExports = v; },
};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (module) {
	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
	  defineProperty(
	    GeneratorFunctionPrototype,
	    "constructor",
	    { value: GeneratorFunction, configurable: true }
	  );
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    defineProperty(this, "_invoke", { value: enqueue });
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  });
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var methodName = context.method;
	    var method = delegate.iterator[methodName];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method, or a missing .next mehtod, always terminate the
	      // yield* loop.
	      context.delegate = null;

	      // Note: ["return"] must be used for ES3 parsing compatibility.
	      if (methodName === "throw" && delegate.iterator["return"]) {
	        // If the delegate iterator has a return method, give it a
	        // chance to clean up.
	        context.method = "return";
	        context.arg = undefined$1;
	        maybeInvokeDelegate(delegate, context);

	        if (context.method === "throw") {
	          // If maybeInvokeDelegate(context) changed context.method from
	          // "return" to "throw", let that override the TypeError below.
	          return ContinueSentinel;
	        }
	      }
	      if (methodName !== "return") {
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a '" + methodName + "' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  define(Gp, iteratorSymbol, function() {
	    return this;
	  });

	  define(Gp, "toString", function() {
	    return "[object Generator]";
	  });

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(val) {
	    var object = Object(val);
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, in modern engines
	  // we can explicitly access globalThis. In older engines we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
} (runtime));

const duration = 3e3;
const ToastContainer = () => {
  const mounted = React.useRef(false);
  const [show, setShow] = React.useState(false);
  const [aboutToHide, setAboutToHide] = React.useState(false);
  const [text, setText] = React.useState(null);
  const [color, setColor] = React.useState(null);
  const [icon, setIcon] = React.useState(null);
  React.useEffect(() => {
    if (mounted.current)
      return;
    const fn = (e) => {
      if (show)
        return;
      const typeTemp = e.detail.type;
      const textTemp = e.detail.message;
      if (typeTemp === "success") {
        setColor("green");
        setIcon("bi-check");
        setText(textTemp != null ? textTemp : "Success");
      } else if (typeTemp === "info") {
        setColor("gray");
        setIcon("bi-info");
        setText(textTemp != null ? textTemp : "Info");
      } else if (typeTemp === "warning") {
        setColor("orange");
        setIcon("bi-exclamation");
        setText(textTemp != null ? textTemp : "Warning");
      } else if (typeTemp === "error") {
        setColor("red");
        setIcon("bi-x");
        setText(textTemp != null ? textTemp : "Error");
      }
      setShow(true);
      setTimeout(() => setAboutToHide(true), duration);
    };
    document.addEventListener("toast", fn, false);
    mounted.current = true;
    return () => document.removeEventListener("toast", fn, false);
  }, []);
  const onAnimationEnd = (e) => {
    if (e.animationName === "hideToastAnimation") {
      setAboutToHide(false);
      setShow(false);
      setColor(null);
      setIcon(null);
      setText(null);
    }
  };
  const animationClass = !aboutToHide ? "show-toast" : "hide-toast";
  if (show && color && text && icon) {
    return /* @__PURE__ */ React__default["default"].createElement(
      "div",
      {
        className: [animationClass, "flex", "flex-col", "justify-center"].join(" "),
        style: {
          margin: "0 auto",
          maxWidth: "400px",
          padding: "0 40px",
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 1,
          bottom: "20px",
          transition: "all 0.3s ease-out"
        },
        onAnimationEnd
      },
      /* @__PURE__ */ React__default["default"].createElement(
        "div",
        {
          className: `flex items-center bg-white border-l-4 border-${color}-700 py-3 px-5 shadow-md mb-2 rounded-lg`
        },
        /* @__PURE__ */ React__default["default"].createElement("div", { className: `text-${color}-500 rounded-full bg-${color}-500 mr-3` }, /* @__PURE__ */ React__default["default"].createElement(
          "svg",
          {
            width: "1.8em",
            height: "1.8em",
            viewBox: "0 0 16 16",
            className: `bi ${icon}`,
            fill: "white",
            xmlns: "http://www.w3.org/2000/svg"
          },
          /* @__PURE__ */ React__default["default"].createElement(
            "path",
            {
              fillRule: "evenodd",
              d: "M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
            }
          )
        )),
        /* @__PURE__ */ React__default["default"].createElement(
          "div",
          {
            className: `text-gray-500 max-w-xs`,
            style: { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }
          },
          text
        )
      )
    );
  } else {
    return null;
  }
};

const cssString = `.gjs-one-bg {
  background-color: white !important;
}
.gjs-three-bg {
  color: white !important;
  background-color: #6366f1 !important;
}

.gjs-two-color {
  color: #6366f1 !important;
}

.gjs-four-color {
  color: #6366f1 !important;
}
.gjs-four-color-h:hover {
  color: #6366f1 !important;
  background-color: #f1f1f1 !important;
}

.gjs-field {
  color: #6366f1 !important;
  background-color: #f1f1f1 !important;
}

.gjs-field-checkbox input:checked + .gjs-chk-icon {
  border-color: rgba(99, 102, 241, 0.5); /* #6366f1 */
}

.gjs-category-title,
.gjs-layer-title,
.gjs-block-category .gjs-title,
.gjs-sm-sector .gjs-sm-title,
.gjs-clm-tags .gjs-sm-title {
  background-color: #f1f1f1 !important;
}

.gjs-sm-sector .gjs-sm-field input,
.gjs-clm-tags .gjs-sm-field input,
.gjs-sm-sector .gjs-clm-select input,
.gjs-clm-tags .gjs-clm-select input,
.gjs-sm-sector .gjs-clm-field input,
.gjs-clm-tags .gjs-clm-field input,
.gjs-sm-sector .gjs-sm-field select,
.gjs-clm-tags .gjs-sm-field select,
.gjs-sm-sector .gjs-clm-select select,
.gjs-clm-tags .gjs-clm-select select,
.gjs-sm-sector .gjs-clm-field select,
.gjs-clm-tags .gjs-clm-field select {
  color: #6366f1 !important;
  background-color: #f1f1f1 !important;
}

::placeholder {
  color: #6365f186;
  opacity: 1;
}

.gjs-block {
  padding: 0 !important;
  width: 100% !important;
  min-height: auto !important;
}

.gjs-color-warn {
  color: #ffa100 !important;
}

.gjs-block-label {
  color: transparent !important;
}

#gjs-clm-new {
  color: #6365f1 !important;
}

/* hides component settings panel */
/* span.gjs-pn-btn.fa.fa-cog {
  display: none !important;
} */
.gjs-pn-buttons {
  justify-content: space-around !important;
}

/* hacky way to align the device icons  */
span.gjs-pn-btn.fa.fa-desktop {
  margin-right: 4px;
}
span.gjs-pn-btn.fa.fa-tablet {
  margin-right: 4px;
}
span.gjs-pn-btn.fa.fa-mobile {
  margin-right: auto;
}

.gjs-mdl-dialog {
  max-width: 600px !important;
}

.show-toast {
  animation: showToastAnimation 0.2s ease-out forwards;
}
.hide-toast {
  animation: hideToastAnimation 0.2s ease-out forwards;
}

@keyframes showToastAnimation {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes hideToastAnimation {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

.gjs-sm-sector-title {
  display: flex;
  align-items: center;
}

.gjs-sm-sector-caret {
  width: 17px;
  height: 17px;
  min-width: 17px;
  transform: rotate(-90deg);
}

.gjs-sm-sector-label {
  margin-left: 5px;
}

.gjs-sm-open {
  border-bottom: 1px solid rgba(0,0,0,.25);
}

`;

const tailwindCssUrl = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
const ContentProvider = ({ data, showEditorInProd = false, standaloneServer = false }) => {
  const mounted = React.useRef(false);
  const [css, setCss] = React.useState();
  const [html, setHtml] = React.useState();
  const isDev = !data;
  const showEditor = isDev || showEditorInProd;
  const startServer = isDev && !showEditorInProd;
  const [tailwindLoaded, setTailwindLoaded] = React.useState(false);
  React.useEffect(() => {
    if (mounted.current)
      return;
    const $style = document.createElement("style");
    $style.innerHTML = cssString;
    document.head.appendChild($style);
    if (showEditor) {
      Promise.resolve().then(function () { return require('./initEditor-979ce1bb.js'); }).then((c) => c.initEditor(startServer, standaloneServer));
    } else {
      const templateData = data == null ? void 0 : data.find(({ name }) => name === `${location.pathname}.json`);
      if (!templateData)
        return;
      const content = JSON.parse(templateData.content);
      setCss(content.css);
      setHtml(content.html);
    }
    mounted.current = true;
  }, []);
  if (showEditor)
    return /* @__PURE__ */ React__default["default"].createElement("div", { style: { height: "100%", margin: "0 auto" } }, /* @__PURE__ */ React__default["default"].createElement("div", { id: "gjs" }));
  else
    return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement("link", { rel: "stylesheet", onLoad: () => setTailwindLoaded(true), href: tailwindCssUrl }), /* @__PURE__ */ React__default["default"].createElement("style", null, " ", css), (!standaloneServer || tailwindLoaded) && /* @__PURE__ */ React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: html != null ? html : "" } }), /* @__PURE__ */ React__default["default"].createElement(ToastContainer, null));
};

const standaloneServerPort = 12785;

const elementExists = (el) => typeof el !== "undefined" && el !== null;
const fetchJSON = async ({ method, url, data }) => {
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "text/plain" },
    body: data ? JSON.stringify(data) : void 0
  });
  return res.text();
};
const escapeName = (name) => `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");
const getPngHtml = (png) => {
  const img = new Image();
  img.src = png;
  img.style.width = "100%";
  img.style.objectFit = "cover";
  img.style.aspectRatio = "1.81";
  return img.outerHTML;
};
const getBaseUrl = (standaloneServer) => {
  return standaloneServer ? `http://localhost:${standaloneServerPort}` : "";
};
const saveTemplate = async (data, standaloneServer) => {
  const baseUrl = getBaseUrl(standaloneServer);
  await fetchJSON({
    method: "post",
    url: `${baseUrl}/api/builder/handle?type=data&path=${location.pathname}&ext=json`,
    data
  });
};
const loadTemplate = async (standaloneServer) => {
  const baseUrl = getBaseUrl(standaloneServer);
  const data = await fetchJSON({
    method: "get",
    url: `${baseUrl}/api/builder/handle?type=data&path=${location.pathname}&ext=json`
  });
  console.log(data);
  return data;
};
const getPngFromId = (theme, id, standaloneServer) => getPngHtml(getImageUrl(standaloneServer, `/themes/${theme}/${id}/preview.png`));
const getThemeUrl = (standaloneServer, themeFolder) => {
  const baseUrl = getBaseUrl(standaloneServer);
  return `${baseUrl}/api/builder/handle?type=theme&name=${themeFolder}`;
};
const getImageUrl = (standaloneServer, imageSrc) => {
  const baseUrl = getBaseUrl(standaloneServer);
  return `${baseUrl}/api/builder/handle?type=asset&path=${imageSrc}`;
};
const uploadFile = async (file, standaloneServer) => {
  const formData = new FormData();
  formData.append("file-0", file);
  const baseUrl = getBaseUrl(standaloneServer);
  const res = await fetch(`${baseUrl}/api/builder/handle?type=data`, {
    method: "POST",
    body: formData
  });
  return await res.json();
};

const isDev = "_self" in React__default["default"].createElement("div");
const ContentProviderReact = () => {
  const mounted = React.useRef(false);
  const [loaded, setLoaded] = React.useState(false);
  const [data, setData] = React.useState();
  const loadData = async () => {
    const data2 = await loadTemplate(true);
    if (!data2)
      return;
    const content = JSON.parse(data2);
    if (!content.components)
      return;
    setData(content);
    setLoaded(true);
  };
  React.useEffect(() => {
    if (mounted.current)
      return;
    if (!isDev) {
      loadData();
    } else {
      setData(void 0);
      setLoaded(true);
    }
    mounted.current = true;
  }, []);
  return /* @__PURE__ */ React__default["default"].createElement("div", { style: { height: "100%" } }, loaded && /* @__PURE__ */ React__default["default"].createElement(ContentProvider, { data, standaloneServer: true, showEditorInProd: false }));
};

exports.ContentProvider = ContentProvider;
exports.ContentProviderReact = ContentProviderReact;
exports.elementExists = elementExists;
exports.escapeName = escapeName;
exports.getPngFromId = getPngFromId;
exports.getPngHtml = getPngHtml;
exports.getThemeUrl = getThemeUrl;
exports.loadTemplate = loadTemplate;
exports.saveTemplate = saveTemplate;
exports.tailwindCssUrl = tailwindCssUrl;
exports.uploadFile = uploadFile;