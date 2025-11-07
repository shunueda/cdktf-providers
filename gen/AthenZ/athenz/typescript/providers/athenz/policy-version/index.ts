// https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy version that will be active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#active_version PolicyVersion#active_version}
  */
  readonly activeVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#audit_ref PolicyVersion#audit_ref}
  */
  readonly auditRef?: string;
  /**
  * Name of the domain that policy belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#domain PolicyVersion#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#id PolicyVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#name PolicyVersion#name}
  */
  readonly name: string;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#version PolicyVersion#version}
  */
  readonly version: PolicyVersionVersion[] | cdktf.IResolvable;
}
export interface PolicyVersionVersionAssertionConditionEnforcementstate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#operator PolicyVersion#operator}
  */
  readonly operator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#value PolicyVersion#value}
  */
  readonly value: string;
}

export function policyVersionVersionAssertionConditionEnforcementstateToTerraform(struct?: PolicyVersionVersionAssertionConditionEnforcementstateOutputReference | PolicyVersionVersionAssertionConditionEnforcementstate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.numberToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyVersionVersionAssertionConditionEnforcementstateToHclTerraform(struct?: PolicyVersionVersionAssertionConditionEnforcementstateOutputReference | PolicyVersionVersionAssertionConditionEnforcementstate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.numberToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PolicyVersionVersionAssertionConditionEnforcementstateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVersionVersionAssertionConditionEnforcementstate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVersionVersionAssertionConditionEnforcementstate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: number; 
  public get operator() {
    return this.getNumberAttribute('operator');
  }
  public set operator(value: number) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyVersionVersionAssertionConditionInstances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#operator PolicyVersion#operator}
  */
  readonly operator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#value PolicyVersion#value}
  */
  readonly value: string;
}

export function policyVersionVersionAssertionConditionInstancesToTerraform(struct?: PolicyVersionVersionAssertionConditionInstancesOutputReference | PolicyVersionVersionAssertionConditionInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.numberToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyVersionVersionAssertionConditionInstancesToHclTerraform(struct?: PolicyVersionVersionAssertionConditionInstancesOutputReference | PolicyVersionVersionAssertionConditionInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.numberToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PolicyVersionVersionAssertionConditionInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVersionVersionAssertionConditionInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVersionVersionAssertionConditionInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: number; 
  public get operator() {
    return this.getNumberAttribute('operator');
  }
  public set operator(value: number) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyVersionVersionAssertionConditionScopeall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#operator PolicyVersion#operator}
  */
  readonly operator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#value PolicyVersion#value}
  */
  readonly value: string;
}

export function policyVersionVersionAssertionConditionScopeallToTerraform(struct?: PolicyVersionVersionAssertionConditionScopeallOutputReference | PolicyVersionVersionAssertionConditionScopeall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.numberToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyVersionVersionAssertionConditionScopeallToHclTerraform(struct?: PolicyVersionVersionAssertionConditionScopeallOutputReference | PolicyVersionVersionAssertionConditionScopeall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.numberToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PolicyVersionVersionAssertionConditionScopeallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVersionVersionAssertionConditionScopeall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVersionVersionAssertionConditionScopeall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: number; 
  public get operator() {
    return this.getNumberAttribute('operator');
  }
  public set operator(value: number) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyVersionVersionAssertionConditionScopeaws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#operator PolicyVersion#operator}
  */
  readonly operator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#value PolicyVersion#value}
  */
  readonly value: string;
}

export function policyVersionVersionAssertionConditionScopeawsToTerraform(struct?: PolicyVersionVersionAssertionConditionScopeawsOutputReference | PolicyVersionVersionAssertionConditionScopeaws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.numberToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyVersionVersionAssertionConditionScopeawsToHclTerraform(struct?: PolicyVersionVersionAssertionConditionScopeawsOutputReference | PolicyVersionVersionAssertionConditionScopeaws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.numberToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PolicyVersionVersionAssertionConditionScopeawsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVersionVersionAssertionConditionScopeaws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVersionVersionAssertionConditionScopeaws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: number; 
  public get operator() {
    return this.getNumberAttribute('operator');
  }
  public set operator(value: number) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyVersionVersionAssertionConditionScopeonprem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#operator PolicyVersion#operator}
  */
  readonly operator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#value PolicyVersion#value}
  */
  readonly value: string;
}

export function policyVersionVersionAssertionConditionScopeonpremToTerraform(struct?: PolicyVersionVersionAssertionConditionScopeonpremOutputReference | PolicyVersionVersionAssertionConditionScopeonprem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.numberToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyVersionVersionAssertionConditionScopeonpremToHclTerraform(struct?: PolicyVersionVersionAssertionConditionScopeonpremOutputReference | PolicyVersionVersionAssertionConditionScopeonprem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.numberToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PolicyVersionVersionAssertionConditionScopeonpremOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVersionVersionAssertionConditionScopeonprem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVersionVersionAssertionConditionScopeonprem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: number; 
  public get operator() {
    return this.getNumberAttribute('operator');
  }
  public set operator(value: number) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyVersionVersionAssertionCondition {
  /**
  * enforcementstate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#enforcementstate PolicyVersion#enforcementstate}
  */
  readonly enforcementstate: PolicyVersionVersionAssertionConditionEnforcementstate;
  /**
  * instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#instances PolicyVersion#instances}
  */
  readonly instances: PolicyVersionVersionAssertionConditionInstances;
  /**
  * scopeall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#scopeall PolicyVersion#scopeall}
  */
  readonly scopeall: PolicyVersionVersionAssertionConditionScopeall;
  /**
  * scopeaws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#scopeaws PolicyVersion#scopeaws}
  */
  readonly scopeaws: PolicyVersionVersionAssertionConditionScopeaws;
  /**
  * scopeonprem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#scopeonprem PolicyVersion#scopeonprem}
  */
  readonly scopeonprem: PolicyVersionVersionAssertionConditionScopeonprem;
}

export function policyVersionVersionAssertionConditionToTerraform(struct?: PolicyVersionVersionAssertionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcementstate: policyVersionVersionAssertionConditionEnforcementstateToTerraform(struct!.enforcementstate),
    instances: policyVersionVersionAssertionConditionInstancesToTerraform(struct!.instances),
    scopeall: policyVersionVersionAssertionConditionScopeallToTerraform(struct!.scopeall),
    scopeaws: policyVersionVersionAssertionConditionScopeawsToTerraform(struct!.scopeaws),
    scopeonprem: policyVersionVersionAssertionConditionScopeonpremToTerraform(struct!.scopeonprem),
  }
}


export function policyVersionVersionAssertionConditionToHclTerraform(struct?: PolicyVersionVersionAssertionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcementstate: {
      value: policyVersionVersionAssertionConditionEnforcementstateToHclTerraform(struct!.enforcementstate),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyVersionVersionAssertionConditionEnforcementstateList",
    },
    instances: {
      value: policyVersionVersionAssertionConditionInstancesToHclTerraform(struct!.instances),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyVersionVersionAssertionConditionInstancesList",
    },
    scopeall: {
      value: policyVersionVersionAssertionConditionScopeallToHclTerraform(struct!.scopeall),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyVersionVersionAssertionConditionScopeallList",
    },
    scopeaws: {
      value: policyVersionVersionAssertionConditionScopeawsToHclTerraform(struct!.scopeaws),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyVersionVersionAssertionConditionScopeawsList",
    },
    scopeonprem: {
      value: policyVersionVersionAssertionConditionScopeonpremToHclTerraform(struct!.scopeonprem),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyVersionVersionAssertionConditionScopeonpremList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVersionVersionAssertionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVersionVersionAssertionCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementstate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementstate = this._enforcementstate?.internalValue;
    }
    if (this._instances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances?.internalValue;
    }
    if (this._scopeall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeall = this._scopeall?.internalValue;
    }
    if (this._scopeaws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeaws = this._scopeaws?.internalValue;
    }
    if (this._scopeonprem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeonprem = this._scopeonprem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVersionVersionAssertionCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforcementstate.internalValue = undefined;
      this._instances.internalValue = undefined;
      this._scopeall.internalValue = undefined;
      this._scopeaws.internalValue = undefined;
      this._scopeonprem.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforcementstate.internalValue = value.enforcementstate;
      this._instances.internalValue = value.instances;
      this._scopeall.internalValue = value.scopeall;
      this._scopeaws.internalValue = value.scopeaws;
      this._scopeonprem.internalValue = value.scopeonprem;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // enforcementstate - computed: false, optional: false, required: true
  private _enforcementstate = new PolicyVersionVersionAssertionConditionEnforcementstateOutputReference(this, "enforcementstate");
  public get enforcementstate() {
    return this._enforcementstate;
  }
  public putEnforcementstate(value: PolicyVersionVersionAssertionConditionEnforcementstate) {
    this._enforcementstate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementstateInput() {
    return this._enforcementstate.internalValue;
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new PolicyVersionVersionAssertionConditionInstancesOutputReference(this, "instances");
  public get instances() {
    return this._instances;
  }
  public putInstances(value: PolicyVersionVersionAssertionConditionInstances) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // scopeall - computed: false, optional: false, required: true
  private _scopeall = new PolicyVersionVersionAssertionConditionScopeallOutputReference(this, "scopeall");
  public get scopeall() {
    return this._scopeall;
  }
  public putScopeall(value: PolicyVersionVersionAssertionConditionScopeall) {
    this._scopeall.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeallInput() {
    return this._scopeall.internalValue;
  }

  // scopeaws - computed: false, optional: false, required: true
  private _scopeaws = new PolicyVersionVersionAssertionConditionScopeawsOutputReference(this, "scopeaws");
  public get scopeaws() {
    return this._scopeaws;
  }
  public putScopeaws(value: PolicyVersionVersionAssertionConditionScopeaws) {
    this._scopeaws.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeawsInput() {
    return this._scopeaws.internalValue;
  }

  // scopeonprem - computed: false, optional: false, required: true
  private _scopeonprem = new PolicyVersionVersionAssertionConditionScopeonpremOutputReference(this, "scopeonprem");
  public get scopeonprem() {
    return this._scopeonprem;
  }
  public putScopeonprem(value: PolicyVersionVersionAssertionConditionScopeonprem) {
    this._scopeonprem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeonpremInput() {
    return this._scopeonprem.internalValue;
  }
}

export class PolicyVersionVersionAssertionConditionList extends cdktf.ComplexList {
  public internalValue? : PolicyVersionVersionAssertionCondition[] | cdktf.IResolvable

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
  public get(index: number): PolicyVersionVersionAssertionConditionOutputReference {
    return new PolicyVersionVersionAssertionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyVersionVersionAssertion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#action PolicyVersion#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#case_sensitive PolicyVersion#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#effect PolicyVersion#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#resource PolicyVersion#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#role PolicyVersion#role}
  */
  readonly role: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#condition PolicyVersion#condition}
  */
  readonly condition?: PolicyVersionVersionAssertionCondition[] | cdktf.IResolvable;
}

export function policyVersionVersionAssertionToTerraform(struct?: PolicyVersionVersionAssertion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    effect: cdktf.stringToTerraform(struct!.effect),
    resource: cdktf.stringToTerraform(struct!.resource),
    role: cdktf.stringToTerraform(struct!.role),
    condition: cdktf.listMapper(policyVersionVersionAssertionConditionToTerraform, true)(struct!.condition),
  }
}


export function policyVersionVersionAssertionToHclTerraform(struct?: PolicyVersionVersionAssertion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.listMapperHcl(policyVersionVersionAssertionConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyVersionVersionAssertionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVersionVersionAssertionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVersionVersionAssertion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVersionVersionAssertion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._caseSensitive = undefined;
      this._effect = undefined;
      this._resource = undefined;
      this._role = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._caseSensitive = value.caseSensitive;
      this._effect = value.effect;
      this._resource = value.resource;
      this._role = value.role;
      this._condition.internalValue = value.condition;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new PolicyVersionVersionAssertionConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: PolicyVersionVersionAssertionCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class PolicyVersionVersionAssertionList extends cdktf.ComplexList {
  public internalValue? : PolicyVersionVersionAssertion[] | cdktf.IResolvable

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
  public get(index: number): PolicyVersionVersionAssertionOutputReference {
    return new PolicyVersionVersionAssertionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyVersionVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#version_name PolicyVersion#version_name}
  */
  readonly versionName: string;
  /**
  * assertion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#assertion PolicyVersion#assertion}
  */
  readonly assertion?: PolicyVersionVersionAssertion[] | cdktf.IResolvable;
}

export function policyVersionVersionToTerraform(struct?: PolicyVersionVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version_name: cdktf.stringToTerraform(struct!.versionName),
    assertion: cdktf.listMapper(policyVersionVersionAssertionToTerraform, true)(struct!.assertion),
  }
}


export function policyVersionVersionToHclTerraform(struct?: PolicyVersionVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version_name: {
      value: cdktf.stringToHclTerraform(struct!.versionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion: {
      value: cdktf.listMapperHcl(policyVersionVersionAssertionToHclTerraform, true)(struct!.assertion),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyVersionVersionAssertionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVersionVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVersionVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._versionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionName = this._versionName;
    }
    if (this._assertion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertion = this._assertion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVersionVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._versionName = undefined;
      this._assertion.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._versionName = value.versionName;
      this._assertion.internalValue = value.assertion;
    }
  }

  // version_name - computed: false, optional: false, required: true
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }

  // assertion - computed: false, optional: true, required: false
  private _assertion = new PolicyVersionVersionAssertionList(this, "assertion", true);
  public get assertion() {
    return this._assertion;
  }
  public putAssertion(value: PolicyVersionVersionAssertion[] | cdktf.IResolvable) {
    this._assertion.internalValue = value;
  }
  public resetAssertion() {
    this._assertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionInput() {
    return this._assertion.internalValue;
  }
}

export class PolicyVersionVersionList extends cdktf.ComplexList {
  public internalValue? : PolicyVersionVersion[] | cdktf.IResolvable

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
  public get(index: number): PolicyVersionVersionOutputReference {
    return new PolicyVersionVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version athenz_policy_version}
*/
export class PolicyVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "athenz_policy_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyVersion to import
  * @param importFromId The id of the existing PolicyVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "athenz_policy_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/policy_version athenz_policy_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyVersionConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'athenz_policy_version',
      terraformGeneratorMetadata: {
        providerName: 'athenz',
        providerVersion: '1.0.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeVersion = config.activeVersion;
    this._auditRef = config.auditRef;
    this._domain = config.domain;
    this._id = config.id;
    this._name = config.name;
    this._version.internalValue = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_version - computed: false, optional: false, required: true
  private _activeVersion?: string; 
  public get activeVersion() {
    return this.getStringAttribute('active_version');
  }
  public set activeVersion(value: string) {
    this._activeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeVersionInput() {
    return this._activeVersion;
  }

  // audit_ref - computed: false, optional: true, required: false
  private _auditRef?: string; 
  public get auditRef() {
    return this.getStringAttribute('audit_ref');
  }
  public set auditRef(value: string) {
    this._auditRef = value;
  }
  public resetAuditRef() {
    this._auditRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditRefInput() {
    return this._auditRef;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // version - computed: false, optional: false, required: true
  private _version = new PolicyVersionVersionList(this, "version", true);
  public get version() {
    return this._version;
  }
  public putVersion(value: PolicyVersionVersion[] | cdktf.IResolvable) {
    this._version.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_version: cdktf.stringToTerraform(this._activeVersion),
      audit_ref: cdktf.stringToTerraform(this._auditRef),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.listMapper(policyVersionVersionToTerraform, true)(this._version.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_version: {
        value: cdktf.stringToHclTerraform(this._activeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_ref: {
        value: cdktf.stringToHclTerraform(this._auditRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.listMapperHcl(policyVersionVersionToHclTerraform, true)(this._version.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyVersionVersionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
