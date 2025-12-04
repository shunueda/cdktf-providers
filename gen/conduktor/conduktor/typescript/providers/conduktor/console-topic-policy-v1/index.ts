// https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleTopicPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Topic Policy name, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#name ConsoleTopicPolicyV1#name}
  */
  readonly name: string;
  /**
  * Topic Policy specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#spec ConsoleTopicPolicyV1#spec}
  */
  readonly spec: ConsoleTopicPolicyV1Spec;
}
export interface ConsoleTopicPolicyV1SpecPoliciesAllowedKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#keys ConsoleTopicPolicyV1#keys}
  */
  readonly keys: string[];
  /**
  * If set to true, the policy is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#optional ConsoleTopicPolicyV1#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function consoleTopicPolicyV1SpecPoliciesAllowedKeysToTerraform(struct?: ConsoleTopicPolicyV1SpecPoliciesAllowedKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function consoleTopicPolicyV1SpecPoliciesAllowedKeysToHclTerraform(struct?: ConsoleTopicPolicyV1SpecPoliciesAllowedKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleTopicPolicyV1SpecPoliciesAllowedKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleTopicPolicyV1SpecPoliciesAllowedKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleTopicPolicyV1SpecPoliciesAllowedKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keys = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keys = value.keys;
      this._optional = value.optional;
    }
  }

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return cdktf.Fn.tolist(this.getListAttribute('keys'));
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // optional - computed: true, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface ConsoleTopicPolicyV1SpecPoliciesMatch {
  /**
  * If set to true, the policy is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#optional ConsoleTopicPolicyV1#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#pattern ConsoleTopicPolicyV1#pattern}
  */
  readonly pattern: string;
}

export function consoleTopicPolicyV1SpecPoliciesMatchToTerraform(struct?: ConsoleTopicPolicyV1SpecPoliciesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function consoleTopicPolicyV1SpecPoliciesMatchToHclTerraform(struct?: ConsoleTopicPolicyV1SpecPoliciesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleTopicPolicyV1SpecPoliciesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleTopicPolicyV1SpecPoliciesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleTopicPolicyV1SpecPoliciesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._pattern = value.pattern;
    }
  }

  // optional - computed: true, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface ConsoleTopicPolicyV1SpecPoliciesNoneOf {
  /**
  * If set to true, the policy is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#optional ConsoleTopicPolicyV1#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#values ConsoleTopicPolicyV1#values}
  */
  readonly values: string[];
}

export function consoleTopicPolicyV1SpecPoliciesNoneOfToTerraform(struct?: ConsoleTopicPolicyV1SpecPoliciesNoneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function consoleTopicPolicyV1SpecPoliciesNoneOfToHclTerraform(struct?: ConsoleTopicPolicyV1SpecPoliciesNoneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleTopicPolicyV1SpecPoliciesNoneOfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleTopicPolicyV1SpecPoliciesNoneOf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleTopicPolicyV1SpecPoliciesNoneOf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._values = value.values;
    }
  }

  // optional - computed: true, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ConsoleTopicPolicyV1SpecPoliciesOneOf {
  /**
  * If set to true, the policy is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#optional ConsoleTopicPolicyV1#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#values ConsoleTopicPolicyV1#values}
  */
  readonly values: string[];
}

export function consoleTopicPolicyV1SpecPoliciesOneOfToTerraform(struct?: ConsoleTopicPolicyV1SpecPoliciesOneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function consoleTopicPolicyV1SpecPoliciesOneOfToHclTerraform(struct?: ConsoleTopicPolicyV1SpecPoliciesOneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleTopicPolicyV1SpecPoliciesOneOfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleTopicPolicyV1SpecPoliciesOneOf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleTopicPolicyV1SpecPoliciesOneOf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._values = value.values;
    }
  }

  // optional - computed: true, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ConsoleTopicPolicyV1SpecPoliciesRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#max ConsoleTopicPolicyV1#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#min ConsoleTopicPolicyV1#min}
  */
  readonly min: number;
  /**
  * If set to true, the policy is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#optional ConsoleTopicPolicyV1#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function consoleTopicPolicyV1SpecPoliciesRangeToTerraform(struct?: ConsoleTopicPolicyV1SpecPoliciesRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function consoleTopicPolicyV1SpecPoliciesRangeToHclTerraform(struct?: ConsoleTopicPolicyV1SpecPoliciesRange | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleTopicPolicyV1SpecPoliciesRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleTopicPolicyV1SpecPoliciesRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleTopicPolicyV1SpecPoliciesRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
      this._optional = value.optional;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // optional - computed: true, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface ConsoleTopicPolicyV1SpecPolicies {
  /**
  * Validates the keys are within an allowed key list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#allowed_keys ConsoleTopicPolicyV1#allowed_keys}
  */
  readonly allowedKeys?: ConsoleTopicPolicyV1SpecPoliciesAllowedKeys;
  /**
  * Validates using Regular Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#match ConsoleTopicPolicyV1#match}
  */
  readonly match?: ConsoleTopicPolicyV1SpecPoliciesMatch;
  /**
  * Validates against a list of predefined options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#none_of ConsoleTopicPolicyV1#none_of}
  */
  readonly noneOf?: ConsoleTopicPolicyV1SpecPoliciesNoneOf;
  /**
  * Validates against a list of predefined options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#one_of ConsoleTopicPolicyV1#one_of}
  */
  readonly oneOf?: ConsoleTopicPolicyV1SpecPoliciesOneOf;
  /**
  * Validates a range of numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#range ConsoleTopicPolicyV1#range}
  */
  readonly range?: ConsoleTopicPolicyV1SpecPoliciesRange;
}

export function consoleTopicPolicyV1SpecPoliciesToTerraform(struct?: ConsoleTopicPolicyV1SpecPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_keys: consoleTopicPolicyV1SpecPoliciesAllowedKeysToTerraform(struct!.allowedKeys),
    match: consoleTopicPolicyV1SpecPoliciesMatchToTerraform(struct!.match),
    none_of: consoleTopicPolicyV1SpecPoliciesNoneOfToTerraform(struct!.noneOf),
    one_of: consoleTopicPolicyV1SpecPoliciesOneOfToTerraform(struct!.oneOf),
    range: consoleTopicPolicyV1SpecPoliciesRangeToTerraform(struct!.range),
  }
}


export function consoleTopicPolicyV1SpecPoliciesToHclTerraform(struct?: ConsoleTopicPolicyV1SpecPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_keys: {
      value: consoleTopicPolicyV1SpecPoliciesAllowedKeysToHclTerraform(struct!.allowedKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleTopicPolicyV1SpecPoliciesAllowedKeys",
    },
    match: {
      value: consoleTopicPolicyV1SpecPoliciesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleTopicPolicyV1SpecPoliciesMatch",
    },
    none_of: {
      value: consoleTopicPolicyV1SpecPoliciesNoneOfToHclTerraform(struct!.noneOf),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleTopicPolicyV1SpecPoliciesNoneOf",
    },
    one_of: {
      value: consoleTopicPolicyV1SpecPoliciesOneOfToHclTerraform(struct!.oneOf),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleTopicPolicyV1SpecPoliciesOneOf",
    },
    range: {
      value: consoleTopicPolicyV1SpecPoliciesRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleTopicPolicyV1SpecPoliciesRange",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleTopicPolicyV1SpecPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ConsoleTopicPolicyV1SpecPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedKeys = this._allowedKeys?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._noneOf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noneOf = this._noneOf?.internalValue;
    }
    if (this._oneOf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneOf = this._oneOf?.internalValue;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleTopicPolicyV1SpecPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedKeys.internalValue = undefined;
      this._match.internalValue = undefined;
      this._noneOf.internalValue = undefined;
      this._oneOf.internalValue = undefined;
      this._range.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedKeys.internalValue = value.allowedKeys;
      this._match.internalValue = value.match;
      this._noneOf.internalValue = value.noneOf;
      this._oneOf.internalValue = value.oneOf;
      this._range.internalValue = value.range;
    }
  }

  // allowed_keys - computed: false, optional: true, required: false
  private _allowedKeys = new ConsoleTopicPolicyV1SpecPoliciesAllowedKeysOutputReference(this, "allowed_keys");
  public get allowedKeys() {
    return this._allowedKeys;
  }
  public putAllowedKeys(value: ConsoleTopicPolicyV1SpecPoliciesAllowedKeys) {
    this._allowedKeys.internalValue = value;
  }
  public resetAllowedKeys() {
    this._allowedKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedKeysInput() {
    return this._allowedKeys.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new ConsoleTopicPolicyV1SpecPoliciesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: ConsoleTopicPolicyV1SpecPoliciesMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // none_of - computed: false, optional: true, required: false
  private _noneOf = new ConsoleTopicPolicyV1SpecPoliciesNoneOfOutputReference(this, "none_of");
  public get noneOf() {
    return this._noneOf;
  }
  public putNoneOf(value: ConsoleTopicPolicyV1SpecPoliciesNoneOf) {
    this._noneOf.internalValue = value;
  }
  public resetNoneOf() {
    this._noneOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneOfInput() {
    return this._noneOf.internalValue;
  }

  // one_of - computed: false, optional: true, required: false
  private _oneOf = new ConsoleTopicPolicyV1SpecPoliciesOneOfOutputReference(this, "one_of");
  public get oneOf() {
    return this._oneOf;
  }
  public putOneOf(value: ConsoleTopicPolicyV1SpecPoliciesOneOf) {
    this._oneOf.internalValue = value;
  }
  public resetOneOf() {
    this._oneOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneOfInput() {
    return this._oneOf.internalValue;
  }

  // range - computed: false, optional: true, required: false
  private _range = new ConsoleTopicPolicyV1SpecPoliciesRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: ConsoleTopicPolicyV1SpecPoliciesRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}

export class ConsoleTopicPolicyV1SpecPoliciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ConsoleTopicPolicyV1SpecPolicies } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ConsoleTopicPolicyV1SpecPoliciesOutputReference {
    return new ConsoleTopicPolicyV1SpecPoliciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ConsoleTopicPolicyV1Spec {
  /**
  * Map of policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#policies ConsoleTopicPolicyV1#policies}
  */
  readonly policies: { [key: string]: ConsoleTopicPolicyV1SpecPolicies } | cdktf.IResolvable;
}

export function consoleTopicPolicyV1SpecToTerraform(struct?: ConsoleTopicPolicyV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.hashMapper(consoleTopicPolicyV1SpecPoliciesToTerraform)(struct!.policies),
  }
}


export function consoleTopicPolicyV1SpecToHclTerraform(struct?: ConsoleTopicPolicyV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.hashMapperHcl(consoleTopicPolicyV1SpecPoliciesToHclTerraform)(struct!.policies),
      isBlock: true,
      type: "map",
      storageClassType: "ConsoleTopicPolicyV1SpecPoliciesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleTopicPolicyV1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleTopicPolicyV1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleTopicPolicyV1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policies.internalValue = value.policies;
    }
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new ConsoleTopicPolicyV1SpecPoliciesMap(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: { [key: string]: ConsoleTopicPolicyV1SpecPolicies } | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1 conduktor_console_topic_policy_v1}
*/
export class ConsoleTopicPolicyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_topic_policy_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleTopicPolicyV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleTopicPolicyV1 to import
  * @param importFromId The id of the existing ConsoleTopicPolicyV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleTopicPolicyV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_topic_policy_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_policy_v1 conduktor_console_topic_policy_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleTopicPolicyV1Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleTopicPolicyV1Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_topic_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new ConsoleTopicPolicyV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleTopicPolicyV1Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      spec: consoleTopicPolicyV1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: consoleTopicPolicyV1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleTopicPolicyV1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
