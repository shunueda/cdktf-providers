// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TraceTailSamplingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#id TraceTailSamplingRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * default_sample_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#default_sample_rate TraceTailSamplingRules#default_sample_rate}
  */
  readonly defaultSampleRate?: TraceTailSamplingRulesDefaultSampleRate;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#rules TraceTailSamplingRules#rules}
  */
  readonly rules?: TraceTailSamplingRulesRules[] | cdktf.IResolvable;
}
export interface TraceTailSamplingRulesDefaultSampleRate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#enabled TraceTailSamplingRules#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#sample_rate TraceTailSamplingRules#sample_rate}
  */
  readonly sampleRate: number;
}

export function traceTailSamplingRulesDefaultSampleRateToTerraform(struct?: TraceTailSamplingRulesDefaultSampleRateOutputReference | TraceTailSamplingRulesDefaultSampleRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}


export function traceTailSamplingRulesDefaultSampleRateToHclTerraform(struct?: TraceTailSamplingRulesDefaultSampleRateOutputReference | TraceTailSamplingRulesDefaultSampleRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesDefaultSampleRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesDefaultSampleRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesDefaultSampleRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._sampleRate = value.sampleRate;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sample_rate - computed: false, optional: false, required: true
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#max_secs TraceTailSamplingRules#max_secs}
  */
  readonly maxSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#min_secs TraceTailSamplingRules#min_secs}
  */
  readonly minSecs?: number;
}

export function traceTailSamplingRulesRulesFilterSpanDurationToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanDurationOutputReference | TraceTailSamplingRulesRulesFilterSpanDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_secs: cdktf.numberToTerraform(struct!.maxSecs),
    min_secs: cdktf.numberToTerraform(struct!.minSecs),
  }
}


export function traceTailSamplingRulesRulesFilterSpanDurationToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanDurationOutputReference | TraceTailSamplingRulesRulesFilterSpanDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_secs: {
      value: cdktf.numberToHclTerraform(struct!.maxSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_secs: {
      value: cdktf.numberToHclTerraform(struct!.minSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSecs = this._maxSecs;
    }
    if (this._minSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSecs = this._minSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSecs = undefined;
      this._minSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSecs = value.maxSecs;
      this._minSecs = value.minSecs;
    }
  }

  // max_secs - computed: false, optional: true, required: false
  private _maxSecs?: number; 
  public get maxSecs() {
    return this.getNumberAttribute('max_secs');
  }
  public set maxSecs(value: number) {
    this._maxSecs = value;
  }
  public resetMaxSecs() {
    this._maxSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSecsInput() {
    return this._maxSecs;
  }

  // min_secs - computed: false, optional: true, required: false
  private _minSecs?: number; 
  public get minSecs() {
    return this.getNumberAttribute('min_secs');
  }
  public set minSecs(value: number) {
    this._minSecs = value;
  }
  public resetMinSecs() {
    this._minSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSecsInput() {
    return this._minSecs;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#value TraceTailSamplingRules#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function traceTailSamplingRulesRulesFilterSpanErrorToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanErrorOutputReference | TraceTailSamplingRulesRulesFilterSpanError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function traceTailSamplingRulesRulesFilterSpanErrorToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanErrorOutputReference | TraceTailSamplingRulesRulesFilterSpanError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanIsRootSpan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#value TraceTailSamplingRules#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function traceTailSamplingRulesRulesFilterSpanIsRootSpanToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanIsRootSpanOutputReference | TraceTailSamplingRulesRulesFilterSpanIsRootSpan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function traceTailSamplingRulesRulesFilterSpanIsRootSpanToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanIsRootSpanOutputReference | TraceTailSamplingRulesRulesFilterSpanIsRootSpan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanIsRootSpanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanIsRootSpan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanIsRootSpan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#in_values TraceTailSamplingRules#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#match TraceTailSamplingRules#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#value TraceTailSamplingRules#value}
  */
  readonly value?: string;
}

export function traceTailSamplingRulesRulesFilterSpanOperationToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanOperationOutputReference | TraceTailSamplingRulesRulesFilterSpanOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function traceTailSamplingRulesRulesFilterSpanOperationToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanOperationOutputReference | TraceTailSamplingRulesRulesFilterSpanOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanParentOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#in_values TraceTailSamplingRules#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#match TraceTailSamplingRules#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#value TraceTailSamplingRules#value}
  */
  readonly value?: string;
}

export function traceTailSamplingRulesRulesFilterSpanParentOperationToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanParentOperationOutputReference | TraceTailSamplingRulesRulesFilterSpanParentOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function traceTailSamplingRulesRulesFilterSpanParentOperationToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanParentOperationOutputReference | TraceTailSamplingRulesRulesFilterSpanParentOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanParentOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanParentOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanParentOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanParentService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#in_values TraceTailSamplingRules#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#match TraceTailSamplingRules#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#value TraceTailSamplingRules#value}
  */
  readonly value?: string;
}

export function traceTailSamplingRulesRulesFilterSpanParentServiceToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanParentServiceOutputReference | TraceTailSamplingRulesRulesFilterSpanParentService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function traceTailSamplingRulesRulesFilterSpanParentServiceToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanParentServiceOutputReference | TraceTailSamplingRulesRulesFilterSpanParentService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanParentServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanParentService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanParentService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#in_values TraceTailSamplingRules#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#match TraceTailSamplingRules#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#value TraceTailSamplingRules#value}
  */
  readonly value?: string;
}

export function traceTailSamplingRulesRulesFilterSpanServiceToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanServiceOutputReference | TraceTailSamplingRulesRulesFilterSpanService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function traceTailSamplingRulesRulesFilterSpanServiceToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanServiceOutputReference | TraceTailSamplingRulesRulesFilterSpanService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanSpanCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#max TraceTailSamplingRules#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#min TraceTailSamplingRules#min}
  */
  readonly min?: number;
}

export function traceTailSamplingRulesRulesFilterSpanSpanCountToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanSpanCountOutputReference | TraceTailSamplingRulesRulesFilterSpanSpanCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function traceTailSamplingRulesRulesFilterSpanSpanCountToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanSpanCountOutputReference | TraceTailSamplingRulesRulesFilterSpanSpanCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanSpanCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanSpanCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanSpanCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanTagNumericValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#comparison TraceTailSamplingRules#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#value TraceTailSamplingRules#value}
  */
  readonly value: number;
}

export function traceTailSamplingRulesRulesFilterSpanTagNumericValueToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanTagNumericValueOutputReference | TraceTailSamplingRulesRulesFilterSpanTagNumericValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function traceTailSamplingRulesRulesFilterSpanTagNumericValueToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanTagNumericValueOutputReference | TraceTailSamplingRulesRulesFilterSpanTagNumericValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanTagNumericValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanTagNumericValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanTagNumericValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparison = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanTagValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#in_values TraceTailSamplingRules#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#match TraceTailSamplingRules#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#value TraceTailSamplingRules#value}
  */
  readonly value?: string;
}

export function traceTailSamplingRulesRulesFilterSpanTagValueToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanTagValueOutputReference | TraceTailSamplingRulesRulesFilterSpanTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function traceTailSamplingRulesRulesFilterSpanTagValueToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanTagValueOutputReference | TraceTailSamplingRulesRulesFilterSpanTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceTailSamplingRulesRulesFilterSpanTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#key TraceTailSamplingRules#key}
  */
  readonly key?: string;
  /**
  * numeric_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#numeric_value TraceTailSamplingRules#numeric_value}
  */
  readonly numericValue?: TraceTailSamplingRulesRulesFilterSpanTagNumericValue;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#value TraceTailSamplingRules#value}
  */
  readonly value?: TraceTailSamplingRulesRulesFilterSpanTagValue;
}

export function traceTailSamplingRulesRulesFilterSpanTagToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    numeric_value: traceTailSamplingRulesRulesFilterSpanTagNumericValueToTerraform(struct!.numericValue),
    value: traceTailSamplingRulesRulesFilterSpanTagValueToTerraform(struct!.value),
  }
}


export function traceTailSamplingRulesRulesFilterSpanTagToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpanTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numeric_value: {
      value: traceTailSamplingRulesRulesFilterSpanTagNumericValueToHclTerraform(struct!.numericValue),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanTagNumericValueList",
    },
    value: {
      value: traceTailSamplingRulesRulesFilterSpanTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpanTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._numericValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericValue = this._numericValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpanTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._numericValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._numericValue.internalValue = value.numericValue;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // numeric_value - computed: false, optional: true, required: false
  private _numericValue = new TraceTailSamplingRulesRulesFilterSpanTagNumericValueOutputReference(this, "numeric_value");
  public get numericValue() {
    return this._numericValue;
  }
  public putNumericValue(value: TraceTailSamplingRulesRulesFilterSpanTagNumericValue) {
    this._numericValue.internalValue = value;
  }
  public resetNumericValue() {
    this._numericValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericValueInput() {
    return this._numericValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new TraceTailSamplingRulesRulesFilterSpanTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: TraceTailSamplingRulesRulesFilterSpanTagValue) {
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

export class TraceTailSamplingRulesRulesFilterSpanTagList extends cdktf.ComplexList {
  public internalValue? : TraceTailSamplingRulesRulesFilterSpanTag[] | cdktf.IResolvable

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
  public get(index: number): TraceTailSamplingRulesRulesFilterSpanTagOutputReference {
    return new TraceTailSamplingRulesRulesFilterSpanTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TraceTailSamplingRulesRulesFilterSpan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#match_type TraceTailSamplingRules#match_type}
  */
  readonly matchType?: string;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#duration TraceTailSamplingRules#duration}
  */
  readonly duration?: TraceTailSamplingRulesRulesFilterSpanDuration;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#error TraceTailSamplingRules#error}
  */
  readonly error?: TraceTailSamplingRulesRulesFilterSpanError;
  /**
  * is_root_span block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#is_root_span TraceTailSamplingRules#is_root_span}
  */
  readonly isRootSpan?: TraceTailSamplingRulesRulesFilterSpanIsRootSpan;
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#operation TraceTailSamplingRules#operation}
  */
  readonly operation?: TraceTailSamplingRulesRulesFilterSpanOperation;
  /**
  * parent_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#parent_operation TraceTailSamplingRules#parent_operation}
  */
  readonly parentOperation?: TraceTailSamplingRulesRulesFilterSpanParentOperation;
  /**
  * parent_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#parent_service TraceTailSamplingRules#parent_service}
  */
  readonly parentService?: TraceTailSamplingRulesRulesFilterSpanParentService;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#service TraceTailSamplingRules#service}
  */
  readonly service?: TraceTailSamplingRulesRulesFilterSpanService;
  /**
  * span_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#span_count TraceTailSamplingRules#span_count}
  */
  readonly spanCount?: TraceTailSamplingRulesRulesFilterSpanSpanCount;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#tag TraceTailSamplingRules#tag}
  */
  readonly tag?: TraceTailSamplingRulesRulesFilterSpanTag[] | cdktf.IResolvable;
}

export function traceTailSamplingRulesRulesFilterSpanToTerraform(struct?: TraceTailSamplingRulesRulesFilterSpan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    duration: traceTailSamplingRulesRulesFilterSpanDurationToTerraform(struct!.duration),
    error: traceTailSamplingRulesRulesFilterSpanErrorToTerraform(struct!.error),
    is_root_span: traceTailSamplingRulesRulesFilterSpanIsRootSpanToTerraform(struct!.isRootSpan),
    operation: traceTailSamplingRulesRulesFilterSpanOperationToTerraform(struct!.operation),
    parent_operation: traceTailSamplingRulesRulesFilterSpanParentOperationToTerraform(struct!.parentOperation),
    parent_service: traceTailSamplingRulesRulesFilterSpanParentServiceToTerraform(struct!.parentService),
    service: traceTailSamplingRulesRulesFilterSpanServiceToTerraform(struct!.service),
    span_count: traceTailSamplingRulesRulesFilterSpanSpanCountToTerraform(struct!.spanCount),
    tag: cdktf.listMapper(traceTailSamplingRulesRulesFilterSpanTagToTerraform, true)(struct!.tag),
  }
}


export function traceTailSamplingRulesRulesFilterSpanToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterSpan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: traceTailSamplingRulesRulesFilterSpanDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanDurationList",
    },
    error: {
      value: traceTailSamplingRulesRulesFilterSpanErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanErrorList",
    },
    is_root_span: {
      value: traceTailSamplingRulesRulesFilterSpanIsRootSpanToHclTerraform(struct!.isRootSpan),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanIsRootSpanList",
    },
    operation: {
      value: traceTailSamplingRulesRulesFilterSpanOperationToHclTerraform(struct!.operation),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanOperationList",
    },
    parent_operation: {
      value: traceTailSamplingRulesRulesFilterSpanParentOperationToHclTerraform(struct!.parentOperation),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanParentOperationList",
    },
    parent_service: {
      value: traceTailSamplingRulesRulesFilterSpanParentServiceToHclTerraform(struct!.parentService),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanParentServiceList",
    },
    service: {
      value: traceTailSamplingRulesRulesFilterSpanServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanServiceList",
    },
    span_count: {
      value: traceTailSamplingRulesRulesFilterSpanSpanCountToHclTerraform(struct!.spanCount),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanSpanCountList",
    },
    tag: {
      value: cdktf.listMapperHcl(traceTailSamplingRulesRulesFilterSpanTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterSpanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TraceTailSamplingRulesRulesFilterSpan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    if (this._isRootSpan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRootSpan = this._isRootSpan?.internalValue;
    }
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    if (this._parentOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentOperation = this._parentOperation?.internalValue;
    }
    if (this._parentService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentService = this._parentService?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._spanCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanCount = this._spanCount?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterSpan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._duration.internalValue = undefined;
      this._error.internalValue = undefined;
      this._isRootSpan.internalValue = undefined;
      this._operation.internalValue = undefined;
      this._parentOperation.internalValue = undefined;
      this._parentService.internalValue = undefined;
      this._service.internalValue = undefined;
      this._spanCount.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._duration.internalValue = value.duration;
      this._error.internalValue = value.error;
      this._isRootSpan.internalValue = value.isRootSpan;
      this._operation.internalValue = value.operation;
      this._parentOperation.internalValue = value.parentOperation;
      this._parentService.internalValue = value.parentService;
      this._service.internalValue = value.service;
      this._spanCount.internalValue = value.spanCount;
      this._tag.internalValue = value.tag;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new TraceTailSamplingRulesRulesFilterSpanDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: TraceTailSamplingRulesRulesFilterSpanDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new TraceTailSamplingRulesRulesFilterSpanErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: TraceTailSamplingRulesRulesFilterSpanError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // is_root_span - computed: false, optional: true, required: false
  private _isRootSpan = new TraceTailSamplingRulesRulesFilterSpanIsRootSpanOutputReference(this, "is_root_span");
  public get isRootSpan() {
    return this._isRootSpan;
  }
  public putIsRootSpan(value: TraceTailSamplingRulesRulesFilterSpanIsRootSpan) {
    this._isRootSpan.internalValue = value;
  }
  public resetIsRootSpan() {
    this._isRootSpan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRootSpanInput() {
    return this._isRootSpan.internalValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation = new TraceTailSamplingRulesRulesFilterSpanOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: TraceTailSamplingRulesRulesFilterSpanOperation) {
    this._operation.internalValue = value;
  }
  public resetOperation() {
    this._operation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }

  // parent_operation - computed: false, optional: true, required: false
  private _parentOperation = new TraceTailSamplingRulesRulesFilterSpanParentOperationOutputReference(this, "parent_operation");
  public get parentOperation() {
    return this._parentOperation;
  }
  public putParentOperation(value: TraceTailSamplingRulesRulesFilterSpanParentOperation) {
    this._parentOperation.internalValue = value;
  }
  public resetParentOperation() {
    this._parentOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentOperationInput() {
    return this._parentOperation.internalValue;
  }

  // parent_service - computed: false, optional: true, required: false
  private _parentService = new TraceTailSamplingRulesRulesFilterSpanParentServiceOutputReference(this, "parent_service");
  public get parentService() {
    return this._parentService;
  }
  public putParentService(value: TraceTailSamplingRulesRulesFilterSpanParentService) {
    this._parentService.internalValue = value;
  }
  public resetParentService() {
    this._parentService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentServiceInput() {
    return this._parentService.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new TraceTailSamplingRulesRulesFilterSpanServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: TraceTailSamplingRulesRulesFilterSpanService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // span_count - computed: false, optional: true, required: false
  private _spanCount = new TraceTailSamplingRulesRulesFilterSpanSpanCountOutputReference(this, "span_count");
  public get spanCount() {
    return this._spanCount;
  }
  public putSpanCount(value: TraceTailSamplingRulesRulesFilterSpanSpanCount) {
    this._spanCount.internalValue = value;
  }
  public resetSpanCount() {
    this._spanCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanCountInput() {
    return this._spanCount.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new TraceTailSamplingRulesRulesFilterSpanTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: TraceTailSamplingRulesRulesFilterSpanTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class TraceTailSamplingRulesRulesFilterSpanList extends cdktf.ComplexList {
  public internalValue? : TraceTailSamplingRulesRulesFilterSpan[] | cdktf.IResolvable

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
  public get(index: number): TraceTailSamplingRulesRulesFilterSpanOutputReference {
    return new TraceTailSamplingRulesRulesFilterSpanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TraceTailSamplingRulesRulesFilterTraceDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#max_secs TraceTailSamplingRules#max_secs}
  */
  readonly maxSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#min_secs TraceTailSamplingRules#min_secs}
  */
  readonly minSecs?: number;
}

export function traceTailSamplingRulesRulesFilterTraceDurationToTerraform(struct?: TraceTailSamplingRulesRulesFilterTraceDurationOutputReference | TraceTailSamplingRulesRulesFilterTraceDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_secs: cdktf.numberToTerraform(struct!.maxSecs),
    min_secs: cdktf.numberToTerraform(struct!.minSecs),
  }
}


export function traceTailSamplingRulesRulesFilterTraceDurationToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterTraceDurationOutputReference | TraceTailSamplingRulesRulesFilterTraceDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_secs: {
      value: cdktf.numberToHclTerraform(struct!.maxSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_secs: {
      value: cdktf.numberToHclTerraform(struct!.minSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterTraceDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterTraceDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSecs = this._maxSecs;
    }
    if (this._minSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSecs = this._minSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterTraceDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSecs = undefined;
      this._minSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSecs = value.maxSecs;
      this._minSecs = value.minSecs;
    }
  }

  // max_secs - computed: false, optional: true, required: false
  private _maxSecs?: number; 
  public get maxSecs() {
    return this.getNumberAttribute('max_secs');
  }
  public set maxSecs(value: number) {
    this._maxSecs = value;
  }
  public resetMaxSecs() {
    this._maxSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSecsInput() {
    return this._maxSecs;
  }

  // min_secs - computed: false, optional: true, required: false
  private _minSecs?: number; 
  public get minSecs() {
    return this.getNumberAttribute('min_secs');
  }
  public set minSecs(value: number) {
    this._minSecs = value;
  }
  public resetMinSecs() {
    this._minSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSecsInput() {
    return this._minSecs;
  }
}
export interface TraceTailSamplingRulesRulesFilterTraceError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#value TraceTailSamplingRules#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function traceTailSamplingRulesRulesFilterTraceErrorToTerraform(struct?: TraceTailSamplingRulesRulesFilterTraceErrorOutputReference | TraceTailSamplingRulesRulesFilterTraceError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function traceTailSamplingRulesRulesFilterTraceErrorToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterTraceErrorOutputReference | TraceTailSamplingRulesRulesFilterTraceError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterTraceErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterTraceError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterTraceError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceTailSamplingRulesRulesFilterTrace {
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#duration TraceTailSamplingRules#duration}
  */
  readonly duration?: TraceTailSamplingRulesRulesFilterTraceDuration;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#error TraceTailSamplingRules#error}
  */
  readonly error?: TraceTailSamplingRulesRulesFilterTraceError;
}

export function traceTailSamplingRulesRulesFilterTraceToTerraform(struct?: TraceTailSamplingRulesRulesFilterTraceOutputReference | TraceTailSamplingRulesRulesFilterTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: traceTailSamplingRulesRulesFilterTraceDurationToTerraform(struct!.duration),
    error: traceTailSamplingRulesRulesFilterTraceErrorToTerraform(struct!.error),
  }
}


export function traceTailSamplingRulesRulesFilterTraceToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterTraceOutputReference | TraceTailSamplingRulesRulesFilterTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: traceTailSamplingRulesRulesFilterTraceDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterTraceDurationList",
    },
    error: {
      value: traceTailSamplingRulesRulesFilterTraceErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterTraceErrorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterTraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilterTrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilterTrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration.internalValue = undefined;
      this._error.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration.internalValue = value.duration;
      this._error.internalValue = value.error;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new TraceTailSamplingRulesRulesFilterTraceDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: TraceTailSamplingRulesRulesFilterTraceDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new TraceTailSamplingRulesRulesFilterTraceErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: TraceTailSamplingRulesRulesFilterTraceError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }
}
export interface TraceTailSamplingRulesRulesFilter {
  /**
  * span block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#span TraceTailSamplingRules#span}
  */
  readonly span?: TraceTailSamplingRulesRulesFilterSpan[] | cdktf.IResolvable;
  /**
  * trace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#trace TraceTailSamplingRules#trace}
  */
  readonly trace?: TraceTailSamplingRulesRulesFilterTrace;
}

export function traceTailSamplingRulesRulesFilterToTerraform(struct?: TraceTailSamplingRulesRulesFilterOutputReference | TraceTailSamplingRulesRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    span: cdktf.listMapper(traceTailSamplingRulesRulesFilterSpanToTerraform, true)(struct!.span),
    trace: traceTailSamplingRulesRulesFilterTraceToTerraform(struct!.trace),
  }
}


export function traceTailSamplingRulesRulesFilterToHclTerraform(struct?: TraceTailSamplingRulesRulesFilterOutputReference | TraceTailSamplingRulesRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    span: {
      value: cdktf.listMapperHcl(traceTailSamplingRulesRulesFilterSpanToHclTerraform, true)(struct!.span),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterSpanList",
    },
    trace: {
      value: traceTailSamplingRulesRulesFilterTraceToHclTerraform(struct!.trace),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterTraceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceTailSamplingRulesRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._span?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.span = this._span?.internalValue;
    }
    if (this._trace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trace = this._trace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._span.internalValue = undefined;
      this._trace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._span.internalValue = value.span;
      this._trace.internalValue = value.trace;
    }
  }

  // span - computed: false, optional: true, required: false
  private _span = new TraceTailSamplingRulesRulesFilterSpanList(this, "span", false);
  public get span() {
    return this._span;
  }
  public putSpan(value: TraceTailSamplingRulesRulesFilterSpan[] | cdktf.IResolvable) {
    this._span.internalValue = value;
  }
  public resetSpan() {
    this._span.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanInput() {
    return this._span.internalValue;
  }

  // trace - computed: false, optional: true, required: false
  private _trace = new TraceTailSamplingRulesRulesFilterTraceOutputReference(this, "trace");
  public get trace() {
    return this._trace;
  }
  public putTrace(value: TraceTailSamplingRulesRulesFilterTrace) {
    this._trace.internalValue = value;
  }
  public resetTrace() {
    this._trace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace.internalValue;
  }
}
export interface TraceTailSamplingRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#name TraceTailSamplingRules#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#sample_rate TraceTailSamplingRules#sample_rate}
  */
  readonly sampleRate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#system_name TraceTailSamplingRules#system_name}
  */
  readonly systemName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#filter TraceTailSamplingRules#filter}
  */
  readonly filter: TraceTailSamplingRulesRulesFilter;
}

export function traceTailSamplingRulesRulesToTerraform(struct?: TraceTailSamplingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
    system_name: cdktf.stringToTerraform(struct!.systemName),
    filter: traceTailSamplingRulesRulesFilterToTerraform(struct!.filter),
  }
}


export function traceTailSamplingRulesRulesToHclTerraform(struct?: TraceTailSamplingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_name: {
      value: cdktf.stringToHclTerraform(struct!.systemName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: traceTailSamplingRulesRulesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "TraceTailSamplingRulesRulesFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceTailSamplingRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TraceTailSamplingRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    if (this._systemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemName = this._systemName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceTailSamplingRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sampleRate = undefined;
      this._systemName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sampleRate = value.sampleRate;
      this._systemName = value.systemName;
      this._filter.internalValue = value.filter;
    }
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

  // sample_rate - computed: false, optional: false, required: true
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // system_name - computed: false, optional: true, required: false
  private _systemName?: string; 
  public get systemName() {
    return this.getStringAttribute('system_name');
  }
  public set systemName(value: string) {
    this._systemName = value;
  }
  public resetSystemName() {
    this._systemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new TraceTailSamplingRulesRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: TraceTailSamplingRulesRulesFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class TraceTailSamplingRulesRulesList extends cdktf.ComplexList {
  public internalValue? : TraceTailSamplingRulesRules[] | cdktf.IResolvable

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
  public get(index: number): TraceTailSamplingRulesRulesOutputReference {
    return new TraceTailSamplingRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules chronosphere_trace_tail_sampling_rules}
*/
export class TraceTailSamplingRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_trace_tail_sampling_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TraceTailSamplingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TraceTailSamplingRules to import
  * @param importFromId The id of the existing TraceTailSamplingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TraceTailSamplingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_trace_tail_sampling_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_tail_sampling_rules chronosphere_trace_tail_sampling_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TraceTailSamplingRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TraceTailSamplingRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_trace_tail_sampling_rules',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._defaultSampleRate.internalValue = config.defaultSampleRate;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_sample_rate - computed: false, optional: true, required: false
  private _defaultSampleRate = new TraceTailSamplingRulesDefaultSampleRateOutputReference(this, "default_sample_rate");
  public get defaultSampleRate() {
    return this._defaultSampleRate;
  }
  public putDefaultSampleRate(value: TraceTailSamplingRulesDefaultSampleRate) {
    this._defaultSampleRate.internalValue = value;
  }
  public resetDefaultSampleRate() {
    this._defaultSampleRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSampleRateInput() {
    return this._defaultSampleRate.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new TraceTailSamplingRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TraceTailSamplingRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      default_sample_rate: traceTailSamplingRulesDefaultSampleRateToTerraform(this._defaultSampleRate.internalValue),
      rules: cdktf.listMapper(traceTailSamplingRulesRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_sample_rate: {
        value: traceTailSamplingRulesDefaultSampleRateToHclTerraform(this._defaultSampleRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TraceTailSamplingRulesDefaultSampleRateList",
      },
      rules: {
        value: cdktf.listMapperHcl(traceTailSamplingRulesRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TraceTailSamplingRulesRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
