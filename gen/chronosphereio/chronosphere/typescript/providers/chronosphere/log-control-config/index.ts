// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogControlConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#id LogControlConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#rules LogControlConfig#rules}
  */
  readonly rules?: LogControlConfigRules[] | cdktf.IResolvable;
}
export interface LogControlConfigRulesDropFieldParentPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#selector LogControlConfig#selector}
  */
  readonly selector?: string;
}

export function logControlConfigRulesDropFieldParentPathToTerraform(struct?: LogControlConfigRulesDropFieldParentPathOutputReference | LogControlConfigRulesDropFieldParentPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logControlConfigRulesDropFieldParentPathToHclTerraform(struct?: LogControlConfigRulesDropFieldParentPathOutputReference | LogControlConfigRulesDropFieldParentPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesDropFieldParentPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesDropFieldParentPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesDropFieldParentPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface LogControlConfigRulesDropField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#field_regex LogControlConfig#field_regex}
  */
  readonly fieldRegex?: string;
  /**
  * parent_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#parent_path LogControlConfig#parent_path}
  */
  readonly parentPath?: LogControlConfigRulesDropFieldParentPath;
}

export function logControlConfigRulesDropFieldToTerraform(struct?: LogControlConfigRulesDropFieldOutputReference | LogControlConfigRulesDropField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_regex: cdktf.stringToTerraform(struct!.fieldRegex),
    parent_path: logControlConfigRulesDropFieldParentPathToTerraform(struct!.parentPath),
  }
}


export function logControlConfigRulesDropFieldToHclTerraform(struct?: LogControlConfigRulesDropFieldOutputReference | LogControlConfigRulesDropField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_regex: {
      value: cdktf.stringToHclTerraform(struct!.fieldRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_path: {
      value: logControlConfigRulesDropFieldParentPathToHclTerraform(struct!.parentPath),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesDropFieldParentPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesDropFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesDropField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRegex = this._fieldRegex;
    }
    if (this._parentPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentPath = this._parentPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesDropField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldRegex = undefined;
      this._parentPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldRegex = value.fieldRegex;
      this._parentPath.internalValue = value.parentPath;
    }
  }

  // field_regex - computed: false, optional: true, required: false
  private _fieldRegex?: string; 
  public get fieldRegex() {
    return this.getStringAttribute('field_regex');
  }
  public set fieldRegex(value: string) {
    this._fieldRegex = value;
  }
  public resetFieldRegex() {
    this._fieldRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRegexInput() {
    return this._fieldRegex;
  }

  // parent_path - computed: false, optional: true, required: false
  private _parentPath = new LogControlConfigRulesDropFieldParentPathOutputReference(this, "parent_path");
  public get parentPath() {
    return this._parentPath;
  }
  public putParentPath(value: LogControlConfigRulesDropFieldParentPath) {
    this._parentPath.internalValue = value;
  }
  public resetParentPath() {
    this._parentPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPathInput() {
    return this._parentPath.internalValue;
  }
}
export interface LogControlConfigRulesEmitMetricsCounterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#selector LogControlConfig#selector}
  */
  readonly selector?: string;
}

export function logControlConfigRulesEmitMetricsCounterValueToTerraform(struct?: LogControlConfigRulesEmitMetricsCounterValueOutputReference | LogControlConfigRulesEmitMetricsCounterValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logControlConfigRulesEmitMetricsCounterValueToHclTerraform(struct?: LogControlConfigRulesEmitMetricsCounterValueOutputReference | LogControlConfigRulesEmitMetricsCounterValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesEmitMetricsCounterValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesEmitMetricsCounterValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesEmitMetricsCounterValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface LogControlConfigRulesEmitMetricsCounter {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#value LogControlConfig#value}
  */
  readonly value?: LogControlConfigRulesEmitMetricsCounterValue;
}

export function logControlConfigRulesEmitMetricsCounterToTerraform(struct?: LogControlConfigRulesEmitMetricsCounterOutputReference | LogControlConfigRulesEmitMetricsCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: logControlConfigRulesEmitMetricsCounterValueToTerraform(struct!.value),
  }
}


export function logControlConfigRulesEmitMetricsCounterToHclTerraform(struct?: LogControlConfigRulesEmitMetricsCounterOutputReference | LogControlConfigRulesEmitMetricsCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: logControlConfigRulesEmitMetricsCounterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesEmitMetricsCounterValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesEmitMetricsCounterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesEmitMetricsCounter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesEmitMetricsCounter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value = new LogControlConfigRulesEmitMetricsCounterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: LogControlConfigRulesEmitMetricsCounterValue) {
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
export interface LogControlConfigRulesEmitMetricsGaugeValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#selector LogControlConfig#selector}
  */
  readonly selector?: string;
}

export function logControlConfigRulesEmitMetricsGaugeValueToTerraform(struct?: LogControlConfigRulesEmitMetricsGaugeValueOutputReference | LogControlConfigRulesEmitMetricsGaugeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logControlConfigRulesEmitMetricsGaugeValueToHclTerraform(struct?: LogControlConfigRulesEmitMetricsGaugeValueOutputReference | LogControlConfigRulesEmitMetricsGaugeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesEmitMetricsGaugeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesEmitMetricsGaugeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesEmitMetricsGaugeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface LogControlConfigRulesEmitMetricsGauge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#aggregation_type LogControlConfig#aggregation_type}
  */
  readonly aggregationType?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#value LogControlConfig#value}
  */
  readonly value?: LogControlConfigRulesEmitMetricsGaugeValue;
}

export function logControlConfigRulesEmitMetricsGaugeToTerraform(struct?: LogControlConfigRulesEmitMetricsGaugeOutputReference | LogControlConfigRulesEmitMetricsGauge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
    value: logControlConfigRulesEmitMetricsGaugeValueToTerraform(struct!.value),
  }
}


export function logControlConfigRulesEmitMetricsGaugeToHclTerraform(struct?: LogControlConfigRulesEmitMetricsGaugeOutputReference | LogControlConfigRulesEmitMetricsGauge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_type: {
      value: cdktf.stringToHclTerraform(struct!.aggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: logControlConfigRulesEmitMetricsGaugeValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesEmitMetricsGaugeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesEmitMetricsGaugeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesEmitMetricsGauge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesEmitMetricsGauge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
      this._value.internalValue = value.value;
    }
  }

  // aggregation_type - computed: false, optional: true, required: false
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  public resetAggregationType() {
    this._aggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // value - computed: false, optional: true, required: false
  private _value = new LogControlConfigRulesEmitMetricsGaugeValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: LogControlConfigRulesEmitMetricsGaugeValue) {
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
export interface LogControlConfigRulesEmitMetricsHistogramValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#selector LogControlConfig#selector}
  */
  readonly selector?: string;
}

export function logControlConfigRulesEmitMetricsHistogramValueToTerraform(struct?: LogControlConfigRulesEmitMetricsHistogramValueOutputReference | LogControlConfigRulesEmitMetricsHistogramValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logControlConfigRulesEmitMetricsHistogramValueToHclTerraform(struct?: LogControlConfigRulesEmitMetricsHistogramValueOutputReference | LogControlConfigRulesEmitMetricsHistogramValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesEmitMetricsHistogramValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesEmitMetricsHistogramValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesEmitMetricsHistogramValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface LogControlConfigRulesEmitMetricsHistogram {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#value LogControlConfig#value}
  */
  readonly value?: LogControlConfigRulesEmitMetricsHistogramValue;
}

export function logControlConfigRulesEmitMetricsHistogramToTerraform(struct?: LogControlConfigRulesEmitMetricsHistogramOutputReference | LogControlConfigRulesEmitMetricsHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: logControlConfigRulesEmitMetricsHistogramValueToTerraform(struct!.value),
  }
}


export function logControlConfigRulesEmitMetricsHistogramToHclTerraform(struct?: LogControlConfigRulesEmitMetricsHistogramOutputReference | LogControlConfigRulesEmitMetricsHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: logControlConfigRulesEmitMetricsHistogramValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesEmitMetricsHistogramValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesEmitMetricsHistogramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesEmitMetricsHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesEmitMetricsHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value = new LogControlConfigRulesEmitMetricsHistogramValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: LogControlConfigRulesEmitMetricsHistogramValue) {
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
export interface LogControlConfigRulesEmitMetricsLabelsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#selector LogControlConfig#selector}
  */
  readonly selector?: string;
}

export function logControlConfigRulesEmitMetricsLabelsValueToTerraform(struct?: LogControlConfigRulesEmitMetricsLabelsValueOutputReference | LogControlConfigRulesEmitMetricsLabelsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logControlConfigRulesEmitMetricsLabelsValueToHclTerraform(struct?: LogControlConfigRulesEmitMetricsLabelsValueOutputReference | LogControlConfigRulesEmitMetricsLabelsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesEmitMetricsLabelsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesEmitMetricsLabelsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesEmitMetricsLabelsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface LogControlConfigRulesEmitMetricsLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#key LogControlConfig#key}
  */
  readonly key?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#value LogControlConfig#value}
  */
  readonly value?: LogControlConfigRulesEmitMetricsLabelsValue;
}

export function logControlConfigRulesEmitMetricsLabelsToTerraform(struct?: LogControlConfigRulesEmitMetricsLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: logControlConfigRulesEmitMetricsLabelsValueToTerraform(struct!.value),
  }
}


export function logControlConfigRulesEmitMetricsLabelsToHclTerraform(struct?: LogControlConfigRulesEmitMetricsLabels | cdktf.IResolvable): any {
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
    value: {
      value: logControlConfigRulesEmitMetricsLabelsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesEmitMetricsLabelsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesEmitMetricsLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogControlConfigRulesEmitMetricsLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesEmitMetricsLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

  // value - computed: false, optional: true, required: false
  private _value = new LogControlConfigRulesEmitMetricsLabelsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: LogControlConfigRulesEmitMetricsLabelsValue) {
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

export class LogControlConfigRulesEmitMetricsLabelsList extends cdktf.ComplexList {
  public internalValue? : LogControlConfigRulesEmitMetricsLabels[] | cdktf.IResolvable

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
  public get(index: number): LogControlConfigRulesEmitMetricsLabelsOutputReference {
    return new LogControlConfigRulesEmitMetricsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogControlConfigRulesEmitMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#drop_log LogControlConfig#drop_log}
  */
  readonly dropLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#mode LogControlConfig#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#name LogControlConfig#name}
  */
  readonly name?: string;
  /**
  * counter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#counter LogControlConfig#counter}
  */
  readonly counter?: LogControlConfigRulesEmitMetricsCounter;
  /**
  * gauge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#gauge LogControlConfig#gauge}
  */
  readonly gauge?: LogControlConfigRulesEmitMetricsGauge;
  /**
  * histogram block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#histogram LogControlConfig#histogram}
  */
  readonly histogram?: LogControlConfigRulesEmitMetricsHistogram;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#labels LogControlConfig#labels}
  */
  readonly labels?: LogControlConfigRulesEmitMetricsLabels[] | cdktf.IResolvable;
}

export function logControlConfigRulesEmitMetricsToTerraform(struct?: LogControlConfigRulesEmitMetricsOutputReference | LogControlConfigRulesEmitMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_log: cdktf.booleanToTerraform(struct!.dropLog),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    counter: logControlConfigRulesEmitMetricsCounterToTerraform(struct!.counter),
    gauge: logControlConfigRulesEmitMetricsGaugeToTerraform(struct!.gauge),
    histogram: logControlConfigRulesEmitMetricsHistogramToTerraform(struct!.histogram),
    labels: cdktf.listMapper(logControlConfigRulesEmitMetricsLabelsToTerraform, true)(struct!.labels),
  }
}


export function logControlConfigRulesEmitMetricsToHclTerraform(struct?: LogControlConfigRulesEmitMetricsOutputReference | LogControlConfigRulesEmitMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_log: {
      value: cdktf.booleanToHclTerraform(struct!.dropLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counter: {
      value: logControlConfigRulesEmitMetricsCounterToHclTerraform(struct!.counter),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesEmitMetricsCounterList",
    },
    gauge: {
      value: logControlConfigRulesEmitMetricsGaugeToHclTerraform(struct!.gauge),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesEmitMetricsGaugeList",
    },
    histogram: {
      value: logControlConfigRulesEmitMetricsHistogramToHclTerraform(struct!.histogram),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesEmitMetricsHistogramList",
    },
    labels: {
      value: cdktf.listMapperHcl(logControlConfigRulesEmitMetricsLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesEmitMetricsLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesEmitMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesEmitMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropLog = this._dropLog;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._counter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.counter = this._counter?.internalValue;
    }
    if (this._gauge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gauge = this._gauge?.internalValue;
    }
    if (this._histogram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogram = this._histogram?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesEmitMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropLog = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._counter.internalValue = undefined;
      this._gauge.internalValue = undefined;
      this._histogram.internalValue = undefined;
      this._labels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropLog = value.dropLog;
      this._mode = value.mode;
      this._name = value.name;
      this._counter.internalValue = value.counter;
      this._gauge.internalValue = value.gauge;
      this._histogram.internalValue = value.histogram;
      this._labels.internalValue = value.labels;
    }
  }

  // drop_log - computed: false, optional: true, required: false
  private _dropLog?: boolean | cdktf.IResolvable; 
  public get dropLog() {
    return this.getBooleanAttribute('drop_log');
  }
  public set dropLog(value: boolean | cdktf.IResolvable) {
    this._dropLog = value;
  }
  public resetDropLog() {
    this._dropLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropLogInput() {
    return this._dropLog;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // counter - computed: false, optional: true, required: false
  private _counter = new LogControlConfigRulesEmitMetricsCounterOutputReference(this, "counter");
  public get counter() {
    return this._counter;
  }
  public putCounter(value: LogControlConfigRulesEmitMetricsCounter) {
    this._counter.internalValue = value;
  }
  public resetCounter() {
    this._counter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterInput() {
    return this._counter.internalValue;
  }

  // gauge - computed: false, optional: true, required: false
  private _gauge = new LogControlConfigRulesEmitMetricsGaugeOutputReference(this, "gauge");
  public get gauge() {
    return this._gauge;
  }
  public putGauge(value: LogControlConfigRulesEmitMetricsGauge) {
    this._gauge.internalValue = value;
  }
  public resetGauge() {
    this._gauge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaugeInput() {
    return this._gauge.internalValue;
  }

  // histogram - computed: false, optional: true, required: false
  private _histogram = new LogControlConfigRulesEmitMetricsHistogramOutputReference(this, "histogram");
  public get histogram() {
    return this._histogram;
  }
  public putHistogram(value: LogControlConfigRulesEmitMetricsHistogram) {
    this._histogram.internalValue = value;
  }
  public resetHistogram() {
    this._histogram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramInput() {
    return this._histogram.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new LogControlConfigRulesEmitMetricsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: LogControlConfigRulesEmitMetricsLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }
}
export interface LogControlConfigRulesReplaceFieldField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#selector LogControlConfig#selector}
  */
  readonly selector?: string;
}

export function logControlConfigRulesReplaceFieldFieldToTerraform(struct?: LogControlConfigRulesReplaceFieldFieldOutputReference | LogControlConfigRulesReplaceFieldField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logControlConfigRulesReplaceFieldFieldToHclTerraform(struct?: LogControlConfigRulesReplaceFieldFieldOutputReference | LogControlConfigRulesReplaceFieldField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesReplaceFieldFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesReplaceFieldField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesReplaceFieldField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface LogControlConfigRulesReplaceFieldMappedValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#key LogControlConfig#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#value LogControlConfig#value}
  */
  readonly value?: string;
}

export function logControlConfigRulesReplaceFieldMappedValuePairsToTerraform(struct?: LogControlConfigRulesReplaceFieldMappedValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function logControlConfigRulesReplaceFieldMappedValuePairsToHclTerraform(struct?: LogControlConfigRulesReplaceFieldMappedValuePairs | cdktf.IResolvable): any {
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

export class LogControlConfigRulesReplaceFieldMappedValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogControlConfigRulesReplaceFieldMappedValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesReplaceFieldMappedValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class LogControlConfigRulesReplaceFieldMappedValuePairsList extends cdktf.ComplexList {
  public internalValue? : LogControlConfigRulesReplaceFieldMappedValuePairs[] | cdktf.IResolvable

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
  public get(index: number): LogControlConfigRulesReplaceFieldMappedValuePairsOutputReference {
    return new LogControlConfigRulesReplaceFieldMappedValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogControlConfigRulesReplaceFieldMappedValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#default_value LogControlConfig#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#use_default LogControlConfig#use_default}
  */
  readonly useDefault?: boolean | cdktf.IResolvable;
  /**
  * pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#pairs LogControlConfig#pairs}
  */
  readonly pairs?: LogControlConfigRulesReplaceFieldMappedValuePairs[] | cdktf.IResolvable;
}

export function logControlConfigRulesReplaceFieldMappedValueToTerraform(struct?: LogControlConfigRulesReplaceFieldMappedValueOutputReference | LogControlConfigRulesReplaceFieldMappedValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    pairs: cdktf.listMapper(logControlConfigRulesReplaceFieldMappedValuePairsToTerraform, true)(struct!.pairs),
  }
}


export function logControlConfigRulesReplaceFieldMappedValueToHclTerraform(struct?: LogControlConfigRulesReplaceFieldMappedValueOutputReference | LogControlConfigRulesReplaceFieldMappedValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pairs: {
      value: cdktf.listMapperHcl(logControlConfigRulesReplaceFieldMappedValuePairsToHclTerraform, true)(struct!.pairs),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesReplaceFieldMappedValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesReplaceFieldMappedValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesReplaceFieldMappedValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._pairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairs = this._pairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesReplaceFieldMappedValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._useDefault = undefined;
      this._pairs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._useDefault = value.useDefault;
      this._pairs.internalValue = value.pairs;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // use_default - computed: false, optional: true, required: false
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  public resetUseDefault() {
    this._useDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // pairs - computed: false, optional: true, required: false
  private _pairs = new LogControlConfigRulesReplaceFieldMappedValuePairsList(this, "pairs", false);
  public get pairs() {
    return this._pairs;
  }
  public putPairs(value: LogControlConfigRulesReplaceFieldMappedValuePairs[] | cdktf.IResolvable) {
    this._pairs.internalValue = value;
  }
  public resetPairs() {
    this._pairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairsInput() {
    return this._pairs.internalValue;
  }
}
export interface LogControlConfigRulesReplaceFieldStaticValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#value LogControlConfig#value}
  */
  readonly value?: string;
}

export function logControlConfigRulesReplaceFieldStaticValueToTerraform(struct?: LogControlConfigRulesReplaceFieldStaticValueOutputReference | LogControlConfigRulesReplaceFieldStaticValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function logControlConfigRulesReplaceFieldStaticValueToHclTerraform(struct?: LogControlConfigRulesReplaceFieldStaticValueOutputReference | LogControlConfigRulesReplaceFieldStaticValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class LogControlConfigRulesReplaceFieldStaticValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesReplaceFieldStaticValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesReplaceFieldStaticValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
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
export interface LogControlConfigRulesReplaceField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#replace_all LogControlConfig#replace_all}
  */
  readonly replaceAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#replace_mode LogControlConfig#replace_mode}
  */
  readonly replaceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#replace_regex LogControlConfig#replace_regex}
  */
  readonly replaceRegex?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#field LogControlConfig#field}
  */
  readonly field?: LogControlConfigRulesReplaceFieldField;
  /**
  * mapped_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#mapped_value LogControlConfig#mapped_value}
  */
  readonly mappedValue?: LogControlConfigRulesReplaceFieldMappedValue;
  /**
  * static_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#static_value LogControlConfig#static_value}
  */
  readonly staticValue?: LogControlConfigRulesReplaceFieldStaticValue;
}

export function logControlConfigRulesReplaceFieldToTerraform(struct?: LogControlConfigRulesReplaceFieldOutputReference | LogControlConfigRulesReplaceField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replace_all: cdktf.booleanToTerraform(struct!.replaceAll),
    replace_mode: cdktf.stringToTerraform(struct!.replaceMode),
    replace_regex: cdktf.stringToTerraform(struct!.replaceRegex),
    field: logControlConfigRulesReplaceFieldFieldToTerraform(struct!.field),
    mapped_value: logControlConfigRulesReplaceFieldMappedValueToTerraform(struct!.mappedValue),
    static_value: logControlConfigRulesReplaceFieldStaticValueToTerraform(struct!.staticValue),
  }
}


export function logControlConfigRulesReplaceFieldToHclTerraform(struct?: LogControlConfigRulesReplaceFieldOutputReference | LogControlConfigRulesReplaceField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replace_all: {
      value: cdktf.booleanToHclTerraform(struct!.replaceAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_mode: {
      value: cdktf.stringToHclTerraform(struct!.replaceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_regex: {
      value: cdktf.stringToHclTerraform(struct!.replaceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: logControlConfigRulesReplaceFieldFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesReplaceFieldFieldList",
    },
    mapped_value: {
      value: logControlConfigRulesReplaceFieldMappedValueToHclTerraform(struct!.mappedValue),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesReplaceFieldMappedValueList",
    },
    static_value: {
      value: logControlConfigRulesReplaceFieldStaticValueToHclTerraform(struct!.staticValue),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesReplaceFieldStaticValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesReplaceFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesReplaceField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replaceAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceAll = this._replaceAll;
    }
    if (this._replaceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceMode = this._replaceMode;
    }
    if (this._replaceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceRegex = this._replaceRegex;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    if (this._mappedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedValue = this._mappedValue?.internalValue;
    }
    if (this._staticValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValue = this._staticValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesReplaceField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replaceAll = undefined;
      this._replaceMode = undefined;
      this._replaceRegex = undefined;
      this._field.internalValue = undefined;
      this._mappedValue.internalValue = undefined;
      this._staticValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replaceAll = value.replaceAll;
      this._replaceMode = value.replaceMode;
      this._replaceRegex = value.replaceRegex;
      this._field.internalValue = value.field;
      this._mappedValue.internalValue = value.mappedValue;
      this._staticValue.internalValue = value.staticValue;
    }
  }

  // replace_all - computed: false, optional: true, required: false
  private _replaceAll?: boolean | cdktf.IResolvable; 
  public get replaceAll() {
    return this.getBooleanAttribute('replace_all');
  }
  public set replaceAll(value: boolean | cdktf.IResolvable) {
    this._replaceAll = value;
  }
  public resetReplaceAll() {
    this._replaceAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceAllInput() {
    return this._replaceAll;
  }

  // replace_mode - computed: false, optional: true, required: false
  private _replaceMode?: string; 
  public get replaceMode() {
    return this.getStringAttribute('replace_mode');
  }
  public set replaceMode(value: string) {
    this._replaceMode = value;
  }
  public resetReplaceMode() {
    this._replaceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceModeInput() {
    return this._replaceMode;
  }

  // replace_regex - computed: false, optional: true, required: false
  private _replaceRegex?: string; 
  public get replaceRegex() {
    return this.getStringAttribute('replace_regex');
  }
  public set replaceRegex(value: string) {
    this._replaceRegex = value;
  }
  public resetReplaceRegex() {
    this._replaceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceRegexInput() {
    return this._replaceRegex;
  }

  // field - computed: false, optional: true, required: false
  private _field = new LogControlConfigRulesReplaceFieldFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: LogControlConfigRulesReplaceFieldField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }

  // mapped_value - computed: false, optional: true, required: false
  private _mappedValue = new LogControlConfigRulesReplaceFieldMappedValueOutputReference(this, "mapped_value");
  public get mappedValue() {
    return this._mappedValue;
  }
  public putMappedValue(value: LogControlConfigRulesReplaceFieldMappedValue) {
    this._mappedValue.internalValue = value;
  }
  public resetMappedValue() {
    this._mappedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedValueInput() {
    return this._mappedValue.internalValue;
  }

  // static_value - computed: false, optional: true, required: false
  private _staticValue = new LogControlConfigRulesReplaceFieldStaticValueOutputReference(this, "static_value");
  public get staticValue() {
    return this._staticValue;
  }
  public putStaticValue(value: LogControlConfigRulesReplaceFieldStaticValue) {
    this._staticValue.internalValue = value;
  }
  public resetStaticValue() {
    this._staticValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValueInput() {
    return this._staticValue.internalValue;
  }
}
export interface LogControlConfigRulesSample {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#rate LogControlConfig#rate}
  */
  readonly rate?: number;
}

export function logControlConfigRulesSampleToTerraform(struct?: LogControlConfigRulesSampleOutputReference | LogControlConfigRulesSample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function logControlConfigRulesSampleToHclTerraform(struct?: LogControlConfigRulesSampleOutputReference | LogControlConfigRulesSample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesSampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogControlConfigRulesSample | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRulesSample | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface LogControlConfigRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#filter LogControlConfig#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#mode LogControlConfig#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#name LogControlConfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#type LogControlConfig#type}
  */
  readonly type?: string;
  /**
  * drop_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#drop_field LogControlConfig#drop_field}
  */
  readonly dropField?: LogControlConfigRulesDropField;
  /**
  * emit_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#emit_metrics LogControlConfig#emit_metrics}
  */
  readonly emitMetrics?: LogControlConfigRulesEmitMetrics;
  /**
  * replace_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#replace_field LogControlConfig#replace_field}
  */
  readonly replaceField?: LogControlConfigRulesReplaceField;
  /**
  * sample block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#sample LogControlConfig#sample}
  */
  readonly sample?: LogControlConfigRulesSample;
}

export function logControlConfigRulesToTerraform(struct?: LogControlConfigRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    drop_field: logControlConfigRulesDropFieldToTerraform(struct!.dropField),
    emit_metrics: logControlConfigRulesEmitMetricsToTerraform(struct!.emitMetrics),
    replace_field: logControlConfigRulesReplaceFieldToTerraform(struct!.replaceField),
    sample: logControlConfigRulesSampleToTerraform(struct!.sample),
  }
}


export function logControlConfigRulesToHclTerraform(struct?: LogControlConfigRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_field: {
      value: logControlConfigRulesDropFieldToHclTerraform(struct!.dropField),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesDropFieldList",
    },
    emit_metrics: {
      value: logControlConfigRulesEmitMetricsToHclTerraform(struct!.emitMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesEmitMetricsList",
    },
    replace_field: {
      value: logControlConfigRulesReplaceFieldToHclTerraform(struct!.replaceField),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesReplaceFieldList",
    },
    sample: {
      value: logControlConfigRulesSampleToHclTerraform(struct!.sample),
      isBlock: true,
      type: "list",
      storageClassType: "LogControlConfigRulesSampleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogControlConfigRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogControlConfigRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dropField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropField = this._dropField?.internalValue;
    }
    if (this._emitMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitMetrics = this._emitMetrics?.internalValue;
    }
    if (this._replaceField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceField = this._replaceField?.internalValue;
    }
    if (this._sample?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sample = this._sample?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogControlConfigRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._type = undefined;
      this._dropField.internalValue = undefined;
      this._emitMetrics.internalValue = undefined;
      this._replaceField.internalValue = undefined;
      this._sample.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._mode = value.mode;
      this._name = value.name;
      this._type = value.type;
      this._dropField.internalValue = value.dropField;
      this._emitMetrics.internalValue = value.emitMetrics;
      this._replaceField.internalValue = value.replaceField;
      this._sample.internalValue = value.sample;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // drop_field - computed: false, optional: true, required: false
  private _dropField = new LogControlConfigRulesDropFieldOutputReference(this, "drop_field");
  public get dropField() {
    return this._dropField;
  }
  public putDropField(value: LogControlConfigRulesDropField) {
    this._dropField.internalValue = value;
  }
  public resetDropField() {
    this._dropField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFieldInput() {
    return this._dropField.internalValue;
  }

  // emit_metrics - computed: false, optional: true, required: false
  private _emitMetrics = new LogControlConfigRulesEmitMetricsOutputReference(this, "emit_metrics");
  public get emitMetrics() {
    return this._emitMetrics;
  }
  public putEmitMetrics(value: LogControlConfigRulesEmitMetrics) {
    this._emitMetrics.internalValue = value;
  }
  public resetEmitMetrics() {
    this._emitMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitMetricsInput() {
    return this._emitMetrics.internalValue;
  }

  // replace_field - computed: false, optional: true, required: false
  private _replaceField = new LogControlConfigRulesReplaceFieldOutputReference(this, "replace_field");
  public get replaceField() {
    return this._replaceField;
  }
  public putReplaceField(value: LogControlConfigRulesReplaceField) {
    this._replaceField.internalValue = value;
  }
  public resetReplaceField() {
    this._replaceField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceFieldInput() {
    return this._replaceField.internalValue;
  }

  // sample - computed: false, optional: true, required: false
  private _sample = new LogControlConfigRulesSampleOutputReference(this, "sample");
  public get sample() {
    return this._sample;
  }
  public putSample(value: LogControlConfigRulesSample) {
    this._sample.internalValue = value;
  }
  public resetSample() {
    this._sample.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample.internalValue;
  }
}

export class LogControlConfigRulesList extends cdktf.ComplexList {
  public internalValue? : LogControlConfigRules[] | cdktf.IResolvable

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
  public get(index: number): LogControlConfigRulesOutputReference {
    return new LogControlConfigRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config chronosphere_log_control_config}
*/
export class LogControlConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_log_control_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogControlConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogControlConfig to import
  * @param importFromId The id of the existing LogControlConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogControlConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_log_control_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_control_config chronosphere_log_control_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogControlConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogControlConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_log_control_config',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.19.0',
        providerVersionConstraint: '1.19.0'
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

  // rules - computed: false, optional: true, required: false
  private _rules = new LogControlConfigRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: LogControlConfigRules[] | cdktf.IResolvable) {
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
      rules: cdktf.listMapper(logControlConfigRulesToTerraform, true)(this._rules.internalValue),
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
      rules: {
        value: cdktf.listMapperHcl(logControlConfigRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogControlConfigRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
