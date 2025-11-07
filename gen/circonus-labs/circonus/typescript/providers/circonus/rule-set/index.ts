// https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The CID of the check that contains the metric for this rule set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#check RuleSet#check}
  */
  readonly check: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#id RuleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * URL to show users when this rule set is active (e.g. wiki)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#link RuleSet#link}
  */
  readonly link?: string;
  /**
  * The tag filter a pattern match ruleset will user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#metric_filter RuleSet#metric_filter}
  */
  readonly metricFilter?: string;
  /**
  * The name of the metric stream within a check to register the rule set with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#metric_name RuleSet#metric_name}
  */
  readonly metricName?: string;
  /**
  * The pattern match (regex) of the metric stream within a check to register the rule set with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#metric_pattern RuleSet#metric_pattern}
  */
  readonly metricPattern?: string;
  /**
  * The type of data flowing through the specified metric stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#metric_type RuleSet#metric_type}
  */
  readonly metricType?: string;
  /**
  * The name of this ruleset, if omitted will default to the metric_name (or pattern) and filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#name RuleSet#name}
  */
  readonly name?: string;
  /**
  * Notes describing this rule set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#notes RuleSet#notes}
  */
  readonly notes?: string;
  /**
  * Parent CID that must be healthy for this rule set to be active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#parent RuleSet#parent}
  */
  readonly parent?: string;
  /**
  * Tags associated with this rule set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#tags RuleSet#tags}
  */
  readonly tags?: string[];
  /**
  * Opaque data that can be supplied with the result and appears in webhooks when alerts go off
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#user_json RuleSet#user_json}
  */
  readonly userJson?: string;
  /**
  * if block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#if RuleSet#if}
  */
  readonly if: RuleSetIf[] | cdktf.IResolvable;
}
export interface RuleSetIfThen {
  /**
  * The length of time we should wait before contacting the contact groups after this ruleset has faulted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#after RuleSet#after}
  */
  readonly after?: string;
  /**
  * List of contact groups to notify at the following appropriate severity if this rule set is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#notify RuleSet#notify}
  */
  readonly notify?: string[];
  /**
  * Send a notification at this severity level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#severity RuleSet#severity}
  */
  readonly severity?: number;
}

export function ruleSetIfThenToTerraform(struct?: RuleSetIfThenOutputReference | RuleSetIfThen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: cdktf.stringToTerraform(struct!.after),
    notify: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notify),
    severity: cdktf.numberToTerraform(struct!.severity),
  }
}


export function ruleSetIfThenToHclTerraform(struct?: RuleSetIfThenOutputReference | RuleSetIfThen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: cdktf.stringToHclTerraform(struct!.after),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notify),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetIfThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleSetIfThen | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetIfThen | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._after = undefined;
      this._notify = undefined;
      this._severity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._after = value.after;
      this._notify = value.notify;
      this._severity = value.severity;
    }
  }

  // after - computed: false, optional: true, required: false
  private _after?: string; 
  public get after() {
    return this.getStringAttribute('after');
  }
  public set after(value: string) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // notify - computed: false, optional: true, required: false
  private _notify?: string[]; 
  public get notify() {
    return cdktf.Fn.tolist(this.getListAttribute('notify'));
  }
  public set notify(value: string[]) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface RuleSetIfValueOver {
  /**
  * Wait at least this long (seconds) before evaluating the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#atleast RuleSet#atleast}
  */
  readonly atleast: string;
  /**
  * Duration over which data from the last interval is examined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#last RuleSet#last}
  */
  readonly last: string;
  /**
  * Define the window function to use over the last duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#using RuleSet#using}
  */
  readonly using: string;
}

export function ruleSetIfValueOverToTerraform(struct?: RuleSetIfValueOverOutputReference | RuleSetIfValueOver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atleast: cdktf.stringToTerraform(struct!.atleast),
    last: cdktf.stringToTerraform(struct!.last),
    using: cdktf.stringToTerraform(struct!.using),
  }
}


export function ruleSetIfValueOverToHclTerraform(struct?: RuleSetIfValueOverOutputReference | RuleSetIfValueOver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    atleast: {
      value: cdktf.stringToHclTerraform(struct!.atleast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last: {
      value: cdktf.stringToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using: {
      value: cdktf.stringToHclTerraform(struct!.using),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetIfValueOverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleSetIfValueOver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atleast !== undefined) {
      hasAnyValues = true;
      internalValueResult.atleast = this._atleast;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._using !== undefined) {
      hasAnyValues = true;
      internalValueResult.using = this._using;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetIfValueOver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atleast = undefined;
      this._last = undefined;
      this._using = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atleast = value.atleast;
      this._last = value.last;
      this._using = value.using;
    }
  }

  // atleast - computed: false, optional: false, required: true
  private _atleast?: string; 
  public get atleast() {
    return this.getStringAttribute('atleast');
  }
  public set atleast(value: string) {
    this._atleast = value;
  }
  // Temporarily expose input value. Use with caution.
  public get atleastInput() {
    return this._atleast;
  }

  // last - computed: false, optional: false, required: true
  private _last?: string; 
  public get last() {
    return this.getStringAttribute('last');
  }
  public set last(value: string) {
    this._last = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // using - computed: false, optional: false, required: true
  private _using?: string; 
  public get using() {
    return this.getStringAttribute('using');
  }
  public set using(value: string) {
    this._using = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usingInput() {
    return this._using;
  }
}
export interface RuleSetIfValue {
  /**
  * Fire the rule set if there has been no data for the given metric stream over the last duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#absent RuleSet#absent}
  */
  readonly absent?: string;
  /**
  * Boolean indicating the value has changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#changed RuleSet#changed}
  */
  readonly changed?: string;
  /**
  * Fire the rule set if the text metric contain the following string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#contains RuleSet#contains}
  */
  readonly contains?: string;
  /**
  * Fire the rule set if the numeric value equals the specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#eq_value RuleSet#eq_value}
  */
  readonly eqValue?: string;
  /**
  * Fire the rule set if the text metric exactly match the following string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#match RuleSet#match}
  */
  readonly match?: string;
  /**
  * Fire the rule set if the numeric value is more than the specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#max_value RuleSet#max_value}
  */
  readonly maxValue?: string;
  /**
  * Fire the rule set if the numeric value less than the specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#min_value RuleSet#min_value}
  */
  readonly minValue?: string;
  /**
  * Fire the rule set if the numeric value does not equal the specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#neq_value RuleSet#neq_value}
  */
  readonly neqValue?: string;
  /**
  * Fire the rule set if the text metric does not contain the following string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#not_contain RuleSet#not_contain}
  */
  readonly notContain?: string;
  /**
  * Fire the rule set if the text metric not match the following string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#not_match RuleSet#not_match}
  */
  readonly notMatch?: string;
  /**
  * over block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#over RuleSet#over}
  */
  readonly over?: RuleSetIfValueOver;
}

export function ruleSetIfValueToTerraform(struct?: RuleSetIfValueOutputReference | RuleSetIfValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absent: cdktf.stringToTerraform(struct!.absent),
    changed: cdktf.stringToTerraform(struct!.changed),
    contains: cdktf.stringToTerraform(struct!.contains),
    eq_value: cdktf.stringToTerraform(struct!.eqValue),
    match: cdktf.stringToTerraform(struct!.match),
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    neq_value: cdktf.stringToTerraform(struct!.neqValue),
    not_contain: cdktf.stringToTerraform(struct!.notContain),
    not_match: cdktf.stringToTerraform(struct!.notMatch),
    over: ruleSetIfValueOverToTerraform(struct!.over),
  }
}


export function ruleSetIfValueToHclTerraform(struct?: RuleSetIfValueOutputReference | RuleSetIfValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absent: {
      value: cdktf.stringToHclTerraform(struct!.absent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    changed: {
      value: cdktf.stringToHclTerraform(struct!.changed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eq_value: {
      value: cdktf.stringToHclTerraform(struct!.eqValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq_value: {
      value: cdktf.stringToHclTerraform(struct!.neqValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_contain: {
      value: cdktf.stringToHclTerraform(struct!.notContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_match: {
      value: cdktf.stringToHclTerraform(struct!.notMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    over: {
      value: ruleSetIfValueOverToHclTerraform(struct!.over),
      isBlock: true,
      type: "list",
      storageClassType: "RuleSetIfValueOverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetIfValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleSetIfValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absent !== undefined) {
      hasAnyValues = true;
      internalValueResult.absent = this._absent;
    }
    if (this._changed !== undefined) {
      hasAnyValues = true;
      internalValueResult.changed = this._changed;
    }
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._eqValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eqValue = this._eqValue;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._neqValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neqValue = this._neqValue;
    }
    if (this._notContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.notContain = this._notContain;
    }
    if (this._notMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.notMatch = this._notMatch;
    }
    if (this._over?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.over = this._over?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetIfValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absent = undefined;
      this._changed = undefined;
      this._contains = undefined;
      this._eqValue = undefined;
      this._match = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._neqValue = undefined;
      this._notContain = undefined;
      this._notMatch = undefined;
      this._over.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absent = value.absent;
      this._changed = value.changed;
      this._contains = value.contains;
      this._eqValue = value.eqValue;
      this._match = value.match;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._neqValue = value.neqValue;
      this._notContain = value.notContain;
      this._notMatch = value.notMatch;
      this._over.internalValue = value.over;
    }
  }

  // absent - computed: false, optional: true, required: false
  private _absent?: string; 
  public get absent() {
    return this.getStringAttribute('absent');
  }
  public set absent(value: string) {
    this._absent = value;
  }
  public resetAbsent() {
    this._absent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absentInput() {
    return this._absent;
  }

  // changed - computed: false, optional: true, required: false
  private _changed?: string; 
  public get changed() {
    return this.getStringAttribute('changed');
  }
  public set changed(value: string) {
    this._changed = value;
  }
  public resetChanged() {
    this._changed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changedInput() {
    return this._changed;
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // eq_value - computed: false, optional: true, required: false
  private _eqValue?: string; 
  public get eqValue() {
    return this.getStringAttribute('eq_value');
  }
  public set eqValue(value: string) {
    this._eqValue = value;
  }
  public resetEqValue() {
    this._eqValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqValueInput() {
    return this._eqValue;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // neq_value - computed: false, optional: true, required: false
  private _neqValue?: string; 
  public get neqValue() {
    return this.getStringAttribute('neq_value');
  }
  public set neqValue(value: string) {
    this._neqValue = value;
  }
  public resetNeqValue() {
    this._neqValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqValueInput() {
    return this._neqValue;
  }

  // not_contain - computed: false, optional: true, required: false
  private _notContain?: string; 
  public get notContain() {
    return this.getStringAttribute('not_contain');
  }
  public set notContain(value: string) {
    this._notContain = value;
  }
  public resetNotContain() {
    this._notContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notContainInput() {
    return this._notContain;
  }

  // not_match - computed: false, optional: true, required: false
  private _notMatch?: string; 
  public get notMatch() {
    return this.getStringAttribute('not_match');
  }
  public set notMatch(value: string) {
    this._notMatch = value;
  }
  public resetNotMatch() {
    this._notMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notMatchInput() {
    return this._notMatch;
  }

  // over - computed: false, optional: true, required: false
  private _over = new RuleSetIfValueOverOutputReference(this, "over");
  public get over() {
    return this._over;
  }
  public putOver(value: RuleSetIfValueOver) {
    this._over.internalValue = value;
  }
  public resetOver() {
    this._over.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overInput() {
    return this._over.internalValue;
  }
}
export interface RuleSetIf {
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#then RuleSet#then}
  */
  readonly then?: RuleSetIfThen;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#value RuleSet#value}
  */
  readonly value?: RuleSetIfValue;
}

export function ruleSetIfToTerraform(struct?: RuleSetIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    then: ruleSetIfThenToTerraform(struct!.then),
    value: ruleSetIfValueToTerraform(struct!.value),
  }
}


export function ruleSetIfToHclTerraform(struct?: RuleSetIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    then: {
      value: ruleSetIfThenToHclTerraform(struct!.then),
      isBlock: true,
      type: "list",
      storageClassType: "RuleSetIfThenList",
    },
    value: {
      value: ruleSetIfValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "RuleSetIfValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetIfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RuleSetIf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._then?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetIf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._then.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._then.internalValue = value.then;
      this._value.internalValue = value.value;
    }
  }

  // then - computed: false, optional: true, required: false
  private _then = new RuleSetIfThenOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: RuleSetIfThen) {
    this._then.internalValue = value;
  }
  public resetThen() {
    this._then.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new RuleSetIfValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: RuleSetIfValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class RuleSetIfList extends cdktf.ComplexList {
  public internalValue? : RuleSetIf[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RuleSetIfOutputReference {
    return new RuleSetIfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set circonus_rule_set}
*/
export class RuleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circonus_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RuleSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RuleSet to import
  * @param importFromId The id of the existing RuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circonus_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set circonus_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: RuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'circonus_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'circonus',
        providerVersion: '0.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._check = config.check;
    this._id = config.id;
    this._link = config.link;
    this._metricFilter = config.metricFilter;
    this._metricName = config.metricName;
    this._metricPattern = config.metricPattern;
    this._metricType = config.metricType;
    this._name = config.name;
    this._notes = config.notes;
    this._parent = config.parent;
    this._tags = config.tags;
    this._userJson = config.userJson;
    this._if.internalValue = config.if;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check - computed: false, optional: false, required: true
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // metric_filter - computed: false, optional: true, required: false
  private _metricFilter?: string; 
  public get metricFilter() {
    return this.getStringAttribute('metric_filter');
  }
  public set metricFilter(value: string) {
    this._metricFilter = value;
  }
  public resetMetricFilter() {
    this._metricFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFilterInput() {
    return this._metricFilter;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_pattern - computed: false, optional: true, required: false
  private _metricPattern?: string; 
  public get metricPattern() {
    return this.getStringAttribute('metric_pattern');
  }
  public set metricPattern(value: string) {
    this._metricPattern = value;
  }
  public resetMetricPattern() {
    this._metricPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPatternInput() {
    return this._metricPattern;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // rule_set_id - computed: true, optional: false, required: false
  public get ruleSetId() {
    return this.getStringAttribute('rule_set_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_json - computed: false, optional: true, required: false
  private _userJson?: string; 
  public get userJson() {
    return this.getStringAttribute('user_json');
  }
  public set userJson(value: string) {
    this._userJson = value;
  }
  public resetUserJson() {
    this._userJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userJsonInput() {
    return this._userJson;
  }

  // if - computed: false, optional: false, required: true
  private _if = new RuleSetIfList(this, "if", false);
  public get if() {
    return this._if;
  }
  public putIf(value: RuleSetIf[] | cdktf.IResolvable) {
    this._if.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInput() {
    return this._if.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check: cdktf.stringToTerraform(this._check),
      id: cdktf.stringToTerraform(this._id),
      link: cdktf.stringToTerraform(this._link),
      metric_filter: cdktf.stringToTerraform(this._metricFilter),
      metric_name: cdktf.stringToTerraform(this._metricName),
      metric_pattern: cdktf.stringToTerraform(this._metricPattern),
      metric_type: cdktf.stringToTerraform(this._metricType),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      parent: cdktf.stringToTerraform(this._parent),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      user_json: cdktf.stringToTerraform(this._userJson),
      if: cdktf.listMapper(ruleSetIfToTerraform, true)(this._if.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check: {
        value: cdktf.stringToHclTerraform(this._check),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link: {
        value: cdktf.stringToHclTerraform(this._link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_filter: {
        value: cdktf.stringToHclTerraform(this._metricFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_pattern: {
        value: cdktf.stringToHclTerraform(this._metricPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_json: {
        value: cdktf.stringToHclTerraform(this._userJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      if: {
        value: cdktf.listMapperHcl(ruleSetIfToHclTerraform, true)(this._if.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetIfList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
