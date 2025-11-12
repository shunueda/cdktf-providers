// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IDs of the delivery groups for the policy set to apply on.
  * 
  * ~> **Please Note** If `delivery_groups` attribute is unset or configured as an empty set, the policy set will not be assigned to any delivery group. None of the policies in the policy set will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#delivery_groups PolicySet#delivery_groups}
  */
  readonly deliveryGroups?: string[];
  /**
  * Description of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#description PolicySet#description}
  */
  readonly description?: string;
  /**
  * Name of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#name PolicySet#name}
  */
  readonly name: string;
  /**
  * Ordered list of policies. 
  * 
  * -> **Note** The order of policies in the list determines the priority of the policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#policies PolicySet#policies}
  */
  readonly policies: PolicySetPolicies[] | cdktf.IResolvable;
  /**
  * The IDs of the scopes for the policy set to be a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#scopes PolicySet#scopes}
  */
  readonly scopes?: string[];
  /**
  * Type of the policy set. Type can only be set to `DeliveryGroupPolicies`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#type PolicySet#type}
  */
  readonly type?: string;
}
export interface PolicySetPoliciesAccessControlFilters {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#allowed PolicySet#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Gateway condition for the policy filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#condition PolicySet#condition}
  */
  readonly condition: string;
  /**
  * Gateway connection for the policy filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#connection PolicySet#connection}
  */
  readonly connection: string;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Gateway for the policy filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#gateway PolicySet#gateway}
  */
  readonly gateway: string;
}

export function policySetPoliciesAccessControlFiltersToTerraform(struct?: PolicySetPoliciesAccessControlFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    condition: cdktf.stringToTerraform(struct!.condition),
    connection: cdktf.stringToTerraform(struct!.connection),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    gateway: cdktf.stringToTerraform(struct!.gateway),
  }
}


export function policySetPoliciesAccessControlFiltersToHclTerraform(struct?: PolicySetPoliciesAccessControlFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection: {
      value: cdktf.stringToHclTerraform(struct!.connection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesAccessControlFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPoliciesAccessControlFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._connection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesAccessControlFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._condition = undefined;
      this._connection = undefined;
      this._enabled = undefined;
      this._gateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._condition = value.condition;
      this._connection = value.connection;
      this._enabled = value.enabled;
      this._gateway = value.gateway;
    }
  }

  // allowed - computed: true, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // condition - computed: true, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // connection - computed: true, optional: false, required: true
  private _connection?: string; 
  public get connection() {
    return this.getStringAttribute('connection');
  }
  public set connection(value: string) {
    this._connection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // gateway - computed: true, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }
}

export class PolicySetPoliciesAccessControlFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicySetPoliciesAccessControlFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesAccessControlFiltersOutputReference {
    return new PolicySetPoliciesAccessControlFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetPoliciesBranchRepeaterFilter {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#allowed PolicySet#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
}

export function policySetPoliciesBranchRepeaterFilterToTerraform(struct?: PolicySetPoliciesBranchRepeaterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
  }
}


export function policySetPoliciesBranchRepeaterFilterToHclTerraform(struct?: PolicySetPoliciesBranchRepeaterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesBranchRepeaterFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicySetPoliciesBranchRepeaterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesBranchRepeaterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
    }
  }

  // allowed - computed: false, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }
}
export interface PolicySetPoliciesClientIpFilters {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#allowed PolicySet#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * IP Address of the client to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#ip_address PolicySet#ip_address}
  */
  readonly ipAddress: string;
}

export function policySetPoliciesClientIpFiltersToTerraform(struct?: PolicySetPoliciesClientIpFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function policySetPoliciesClientIpFiltersToHclTerraform(struct?: PolicySetPoliciesClientIpFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesClientIpFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPoliciesClientIpFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesClientIpFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._enabled = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._enabled = value.enabled;
      this._ipAddress = value.ipAddress;
    }
  }

  // allowed - computed: true, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ip_address - computed: true, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class PolicySetPoliciesClientIpFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicySetPoliciesClientIpFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesClientIpFiltersOutputReference {
    return new PolicySetPoliciesClientIpFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetPoliciesClientNameFilters {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#allowed PolicySet#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Name of the client to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#client_name PolicySet#client_name}
  */
  readonly clientName: string;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function policySetPoliciesClientNameFiltersToTerraform(struct?: PolicySetPoliciesClientNameFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    client_name: cdktf.stringToTerraform(struct!.clientName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function policySetPoliciesClientNameFiltersToHclTerraform(struct?: PolicySetPoliciesClientNameFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_name: {
      value: cdktf.stringToHclTerraform(struct!.clientName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesClientNameFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPoliciesClientNameFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._clientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientName = this._clientName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesClientNameFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._clientName = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._clientName = value.clientName;
      this._enabled = value.enabled;
    }
  }

  // allowed - computed: true, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // client_name - computed: true, optional: false, required: true
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class PolicySetPoliciesClientNameFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicySetPoliciesClientNameFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesClientNameFiltersOutputReference {
    return new PolicySetPoliciesClientNameFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetPoliciesClientPlatformFilters {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#allowed PolicySet#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Name of the client platform to be filtered. Available values are `Windows`, `Linux`, `Mac`, `Ios`, `Android`, and `Html5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#platform PolicySet#platform}
  */
  readonly platform: string;
}

export function policySetPoliciesClientPlatformFiltersToTerraform(struct?: PolicySetPoliciesClientPlatformFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    platform: cdktf.stringToTerraform(struct!.platform),
  }
}


export function policySetPoliciesClientPlatformFiltersToHclTerraform(struct?: PolicySetPoliciesClientPlatformFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesClientPlatformFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPoliciesClientPlatformFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesClientPlatformFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._enabled = undefined;
      this._platform = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._enabled = value.enabled;
      this._platform = value.platform;
    }
  }

  // allowed - computed: true, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // platform - computed: true, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }
}

export class PolicySetPoliciesClientPlatformFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicySetPoliciesClientPlatformFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesClientPlatformFiltersOutputReference {
    return new PolicySetPoliciesClientPlatformFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetPoliciesDeliveryGroupFilters {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#allowed PolicySet#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Id of the delivery group to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#delivery_group_id PolicySet#delivery_group_id}
  */
  readonly deliveryGroupId: string;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function policySetPoliciesDeliveryGroupFiltersToTerraform(struct?: PolicySetPoliciesDeliveryGroupFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    delivery_group_id: cdktf.stringToTerraform(struct!.deliveryGroupId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function policySetPoliciesDeliveryGroupFiltersToHclTerraform(struct?: PolicySetPoliciesDeliveryGroupFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delivery_group_id: {
      value: cdktf.stringToHclTerraform(struct!.deliveryGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesDeliveryGroupFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPoliciesDeliveryGroupFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._deliveryGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryGroupId = this._deliveryGroupId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesDeliveryGroupFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._deliveryGroupId = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._deliveryGroupId = value.deliveryGroupId;
      this._enabled = value.enabled;
    }
  }

  // allowed - computed: true, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // delivery_group_id - computed: true, optional: false, required: true
  private _deliveryGroupId?: string; 
  public get deliveryGroupId() {
    return this.getStringAttribute('delivery_group_id');
  }
  public set deliveryGroupId(value: string) {
    this._deliveryGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupIdInput() {
    return this._deliveryGroupId;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class PolicySetPoliciesDeliveryGroupFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicySetPoliciesDeliveryGroupFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesDeliveryGroupFiltersOutputReference {
    return new PolicySetPoliciesDeliveryGroupFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetPoliciesDeliveryGroupTypeFilters {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#allowed PolicySet#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Type of the delivery groups to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#delivery_group_type PolicySet#delivery_group_type}
  */
  readonly deliveryGroupType: string;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function policySetPoliciesDeliveryGroupTypeFiltersToTerraform(struct?: PolicySetPoliciesDeliveryGroupTypeFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    delivery_group_type: cdktf.stringToTerraform(struct!.deliveryGroupType),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function policySetPoliciesDeliveryGroupTypeFiltersToHclTerraform(struct?: PolicySetPoliciesDeliveryGroupTypeFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delivery_group_type: {
      value: cdktf.stringToHclTerraform(struct!.deliveryGroupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesDeliveryGroupTypeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPoliciesDeliveryGroupTypeFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._deliveryGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryGroupType = this._deliveryGroupType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesDeliveryGroupTypeFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._deliveryGroupType = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._deliveryGroupType = value.deliveryGroupType;
      this._enabled = value.enabled;
    }
  }

  // allowed - computed: true, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // delivery_group_type - computed: true, optional: false, required: true
  private _deliveryGroupType?: string; 
  public get deliveryGroupType() {
    return this.getStringAttribute('delivery_group_type');
  }
  public set deliveryGroupType(value: string) {
    this._deliveryGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupTypeInput() {
    return this._deliveryGroupType;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class PolicySetPoliciesDeliveryGroupTypeFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicySetPoliciesDeliveryGroupTypeFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesDeliveryGroupTypeFiltersOutputReference {
    return new PolicySetPoliciesDeliveryGroupTypeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetPoliciesOuFilters {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#allowed PolicySet#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Organizational Unit to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#ou PolicySet#ou}
  */
  readonly ou: string;
}

export function policySetPoliciesOuFiltersToTerraform(struct?: PolicySetPoliciesOuFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ou: cdktf.stringToTerraform(struct!.ou),
  }
}


export function policySetPoliciesOuFiltersToHclTerraform(struct?: PolicySetPoliciesOuFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ou: {
      value: cdktf.stringToHclTerraform(struct!.ou),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesOuFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPoliciesOuFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ou !== undefined) {
      hasAnyValues = true;
      internalValueResult.ou = this._ou;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesOuFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._enabled = undefined;
      this._ou = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._enabled = value.enabled;
      this._ou = value.ou;
    }
  }

  // allowed - computed: true, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ou - computed: true, optional: false, required: true
  private _ou?: string; 
  public get ou() {
    return this.getStringAttribute('ou');
  }
  public set ou(value: string) {
    this._ou = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }
}

export class PolicySetPoliciesOuFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicySetPoliciesOuFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesOuFiltersOutputReference {
    return new PolicySetPoliciesOuFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetPoliciesPolicySettings {
  /**
  * Whether of the policy setting has enabled or allowed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the policy setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#name PolicySet#name}
  */
  readonly name: string;
  /**
  * Indicate whether using default value for the policy setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#use_default PolicySet#use_default}
  */
  readonly useDefault: boolean | cdktf.IResolvable;
  /**
  * Value of the policy setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#value PolicySet#value}
  */
  readonly value?: string;
}

export function policySetPoliciesPolicySettingsToTerraform(struct?: PolicySetPoliciesPolicySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policySetPoliciesPolicySettingsToHclTerraform(struct?: PolicySetPoliciesPolicySettings | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class PolicySetPoliciesPolicySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPoliciesPolicySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesPolicySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._useDefault = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._name = value.name;
      this._useDefault = value.useDefault;
      this._value = value.value;
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

  // use_default - computed: false, optional: false, required: true
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
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

export class PolicySetPoliciesPolicySettingsList extends cdktf.ComplexList {
  public internalValue? : PolicySetPoliciesPolicySettings[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesPolicySettingsOutputReference {
    return new PolicySetPoliciesPolicySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetPoliciesTagFilters {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#allowed PolicySet#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Tag to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#tag PolicySet#tag}
  */
  readonly tag: string;
}

export function policySetPoliciesTagFiltersToTerraform(struct?: PolicySetPoliciesTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policySetPoliciesTagFiltersToHclTerraform(struct?: PolicySetPoliciesTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesTagFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPoliciesTagFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesTagFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._enabled = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._enabled = value.enabled;
      this._tag = value.tag;
    }
  }

  // allowed - computed: true, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // tag - computed: true, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicySetPoliciesTagFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicySetPoliciesTagFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesTagFiltersOutputReference {
    return new PolicySetPoliciesTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetPoliciesUserFilters {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#allowed PolicySet#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * SID of the user or user group to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#sid PolicySet#sid}
  */
  readonly sid: string;
}

export function policySetPoliciesUserFiltersToTerraform(struct?: PolicySetPoliciesUserFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sid: cdktf.stringToTerraform(struct!.sid),
  }
}


export function policySetPoliciesUserFiltersToHclTerraform(struct?: PolicySetPoliciesUserFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesUserFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPoliciesUserFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPoliciesUserFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._enabled = undefined;
      this._sid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._enabled = value.enabled;
      this._sid = value.sid;
    }
  }

  // allowed - computed: true, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sid - computed: true, optional: false, required: true
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}

export class PolicySetPoliciesUserFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicySetPoliciesUserFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesUserFiltersOutputReference {
    return new PolicySetPoliciesUserFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetPolicies {
  /**
  * Set of Access control policy filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#access_control_filters PolicySet#access_control_filters}
  */
  readonly accessControlFilters?: PolicySetPoliciesAccessControlFilters[] | cdktf.IResolvable;
  /**
  * Definition of branch repeater policy filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#branch_repeater_filter PolicySet#branch_repeater_filter}
  */
  readonly branchRepeaterFilter?: PolicySetPoliciesBranchRepeaterFilter;
  /**
  * Set of Client ip policy filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#client_ip_filters PolicySet#client_ip_filters}
  */
  readonly clientIpFilters?: PolicySetPoliciesClientIpFilters[] | cdktf.IResolvable;
  /**
  * Set of Client name policy filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#client_name_filters PolicySet#client_name_filters}
  */
  readonly clientNameFilters?: PolicySetPoliciesClientNameFilters[] | cdktf.IResolvable;
  /**
  * Set of Client platform policy filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#client_platform_filters PolicySet#client_platform_filters}
  */
  readonly clientPlatformFilters?: PolicySetPoliciesClientPlatformFilters[] | cdktf.IResolvable;
  /**
  * Set of Delivery group policy filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#delivery_group_filters PolicySet#delivery_group_filters}
  */
  readonly deliveryGroupFilters?: PolicySetPoliciesDeliveryGroupFilters[] | cdktf.IResolvable;
  /**
  * Set of Delivery group type policy filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#delivery_group_type_filters PolicySet#delivery_group_type_filters}
  */
  readonly deliveryGroupTypeFilters?: PolicySetPoliciesDeliveryGroupTypeFilters[] | cdktf.IResolvable;
  /**
  * Description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#description PolicySet#description}
  */
  readonly description?: string;
  /**
  * Indicate whether the policy is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#name PolicySet#name}
  */
  readonly name: string;
  /**
  * Set of Organizational unit policy filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#ou_filters PolicySet#ou_filters}
  */
  readonly ouFilters?: PolicySetPoliciesOuFilters[] | cdktf.IResolvable;
  /**
  * Set of policy settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#policy_settings PolicySet#policy_settings}
  */
  readonly policySettings: PolicySetPoliciesPolicySettings[] | cdktf.IResolvable;
  /**
  * Set of Tag policy filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#tag_filters PolicySet#tag_filters}
  */
  readonly tagFilters?: PolicySetPoliciesTagFilters[] | cdktf.IResolvable;
  /**
  * Set of User policy filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#user_filters PolicySet#user_filters}
  */
  readonly userFilters?: PolicySetPoliciesUserFilters[] | cdktf.IResolvable;
}

export function policySetPoliciesToTerraform(struct?: PolicySetPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_filters: cdktf.listMapper(policySetPoliciesAccessControlFiltersToTerraform, false)(struct!.accessControlFilters),
    branch_repeater_filter: policySetPoliciesBranchRepeaterFilterToTerraform(struct!.branchRepeaterFilter),
    client_ip_filters: cdktf.listMapper(policySetPoliciesClientIpFiltersToTerraform, false)(struct!.clientIpFilters),
    client_name_filters: cdktf.listMapper(policySetPoliciesClientNameFiltersToTerraform, false)(struct!.clientNameFilters),
    client_platform_filters: cdktf.listMapper(policySetPoliciesClientPlatformFiltersToTerraform, false)(struct!.clientPlatformFilters),
    delivery_group_filters: cdktf.listMapper(policySetPoliciesDeliveryGroupFiltersToTerraform, false)(struct!.deliveryGroupFilters),
    delivery_group_type_filters: cdktf.listMapper(policySetPoliciesDeliveryGroupTypeFiltersToTerraform, false)(struct!.deliveryGroupTypeFilters),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    ou_filters: cdktf.listMapper(policySetPoliciesOuFiltersToTerraform, false)(struct!.ouFilters),
    policy_settings: cdktf.listMapper(policySetPoliciesPolicySettingsToTerraform, false)(struct!.policySettings),
    tag_filters: cdktf.listMapper(policySetPoliciesTagFiltersToTerraform, false)(struct!.tagFilters),
    user_filters: cdktf.listMapper(policySetPoliciesUserFiltersToTerraform, false)(struct!.userFilters),
  }
}


export function policySetPoliciesToHclTerraform(struct?: PolicySetPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_control_filters: {
      value: cdktf.listMapperHcl(policySetPoliciesAccessControlFiltersToHclTerraform, false)(struct!.accessControlFilters),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySetPoliciesAccessControlFiltersList",
    },
    branch_repeater_filter: {
      value: policySetPoliciesBranchRepeaterFilterToHclTerraform(struct!.branchRepeaterFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicySetPoliciesBranchRepeaterFilter",
    },
    client_ip_filters: {
      value: cdktf.listMapperHcl(policySetPoliciesClientIpFiltersToHclTerraform, false)(struct!.clientIpFilters),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySetPoliciesClientIpFiltersList",
    },
    client_name_filters: {
      value: cdktf.listMapperHcl(policySetPoliciesClientNameFiltersToHclTerraform, false)(struct!.clientNameFilters),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySetPoliciesClientNameFiltersList",
    },
    client_platform_filters: {
      value: cdktf.listMapperHcl(policySetPoliciesClientPlatformFiltersToHclTerraform, false)(struct!.clientPlatformFilters),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySetPoliciesClientPlatformFiltersList",
    },
    delivery_group_filters: {
      value: cdktf.listMapperHcl(policySetPoliciesDeliveryGroupFiltersToHclTerraform, false)(struct!.deliveryGroupFilters),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySetPoliciesDeliveryGroupFiltersList",
    },
    delivery_group_type_filters: {
      value: cdktf.listMapperHcl(policySetPoliciesDeliveryGroupTypeFiltersToHclTerraform, false)(struct!.deliveryGroupTypeFilters),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySetPoliciesDeliveryGroupTypeFiltersList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ou_filters: {
      value: cdktf.listMapperHcl(policySetPoliciesOuFiltersToHclTerraform, false)(struct!.ouFilters),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySetPoliciesOuFiltersList",
    },
    policy_settings: {
      value: cdktf.listMapperHcl(policySetPoliciesPolicySettingsToHclTerraform, false)(struct!.policySettings),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySetPoliciesPolicySettingsList",
    },
    tag_filters: {
      value: cdktf.listMapperHcl(policySetPoliciesTagFiltersToHclTerraform, false)(struct!.tagFilters),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySetPoliciesTagFiltersList",
    },
    user_filters: {
      value: cdktf.listMapperHcl(policySetPoliciesUserFiltersToHclTerraform, false)(struct!.userFilters),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySetPoliciesUserFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySetPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlFilters = this._accessControlFilters?.internalValue;
    }
    if (this._branchRepeaterFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchRepeaterFilter = this._branchRepeaterFilter?.internalValue;
    }
    if (this._clientIpFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpFilters = this._clientIpFilters?.internalValue;
    }
    if (this._clientNameFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientNameFilters = this._clientNameFilters?.internalValue;
    }
    if (this._clientPlatformFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPlatformFilters = this._clientPlatformFilters?.internalValue;
    }
    if (this._deliveryGroupFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryGroupFilters = this._deliveryGroupFilters?.internalValue;
    }
    if (this._deliveryGroupTypeFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryGroupTypeFilters = this._deliveryGroupTypeFilters?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ouFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ouFilters = this._ouFilters?.internalValue;
    }
    if (this._policySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policySettings = this._policySettings?.internalValue;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    if (this._userFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFilters = this._userFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControlFilters.internalValue = undefined;
      this._branchRepeaterFilter.internalValue = undefined;
      this._clientIpFilters.internalValue = undefined;
      this._clientNameFilters.internalValue = undefined;
      this._clientPlatformFilters.internalValue = undefined;
      this._deliveryGroupFilters.internalValue = undefined;
      this._deliveryGroupTypeFilters.internalValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._ouFilters.internalValue = undefined;
      this._policySettings.internalValue = undefined;
      this._tagFilters.internalValue = undefined;
      this._userFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControlFilters.internalValue = value.accessControlFilters;
      this._branchRepeaterFilter.internalValue = value.branchRepeaterFilter;
      this._clientIpFilters.internalValue = value.clientIpFilters;
      this._clientNameFilters.internalValue = value.clientNameFilters;
      this._clientPlatformFilters.internalValue = value.clientPlatformFilters;
      this._deliveryGroupFilters.internalValue = value.deliveryGroupFilters;
      this._deliveryGroupTypeFilters.internalValue = value.deliveryGroupTypeFilters;
      this._description = value.description;
      this._enabled = value.enabled;
      this._name = value.name;
      this._ouFilters.internalValue = value.ouFilters;
      this._policySettings.internalValue = value.policySettings;
      this._tagFilters.internalValue = value.tagFilters;
      this._userFilters.internalValue = value.userFilters;
    }
  }

  // access_control_filters - computed: true, optional: true, required: false
  private _accessControlFilters = new PolicySetPoliciesAccessControlFiltersList(this, "access_control_filters", true);
  public get accessControlFilters() {
    return this._accessControlFilters;
  }
  public putAccessControlFilters(value: PolicySetPoliciesAccessControlFilters[] | cdktf.IResolvable) {
    this._accessControlFilters.internalValue = value;
  }
  public resetAccessControlFilters() {
    this._accessControlFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlFiltersInput() {
    return this._accessControlFilters.internalValue;
  }

  // branch_repeater_filter - computed: false, optional: true, required: false
  private _branchRepeaterFilter = new PolicySetPoliciesBranchRepeaterFilterOutputReference(this, "branch_repeater_filter");
  public get branchRepeaterFilter() {
    return this._branchRepeaterFilter;
  }
  public putBranchRepeaterFilter(value: PolicySetPoliciesBranchRepeaterFilter) {
    this._branchRepeaterFilter.internalValue = value;
  }
  public resetBranchRepeaterFilter() {
    this._branchRepeaterFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchRepeaterFilterInput() {
    return this._branchRepeaterFilter.internalValue;
  }

  // client_ip_filters - computed: true, optional: true, required: false
  private _clientIpFilters = new PolicySetPoliciesClientIpFiltersList(this, "client_ip_filters", true);
  public get clientIpFilters() {
    return this._clientIpFilters;
  }
  public putClientIpFilters(value: PolicySetPoliciesClientIpFilters[] | cdktf.IResolvable) {
    this._clientIpFilters.internalValue = value;
  }
  public resetClientIpFilters() {
    this._clientIpFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpFiltersInput() {
    return this._clientIpFilters.internalValue;
  }

  // client_name_filters - computed: true, optional: true, required: false
  private _clientNameFilters = new PolicySetPoliciesClientNameFiltersList(this, "client_name_filters", true);
  public get clientNameFilters() {
    return this._clientNameFilters;
  }
  public putClientNameFilters(value: PolicySetPoliciesClientNameFilters[] | cdktf.IResolvable) {
    this._clientNameFilters.internalValue = value;
  }
  public resetClientNameFilters() {
    this._clientNameFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameFiltersInput() {
    return this._clientNameFilters.internalValue;
  }

  // client_platform_filters - computed: true, optional: true, required: false
  private _clientPlatformFilters = new PolicySetPoliciesClientPlatformFiltersList(this, "client_platform_filters", true);
  public get clientPlatformFilters() {
    return this._clientPlatformFilters;
  }
  public putClientPlatformFilters(value: PolicySetPoliciesClientPlatformFilters[] | cdktf.IResolvable) {
    this._clientPlatformFilters.internalValue = value;
  }
  public resetClientPlatformFilters() {
    this._clientPlatformFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPlatformFiltersInput() {
    return this._clientPlatformFilters.internalValue;
  }

  // delivery_group_filters - computed: true, optional: true, required: false
  private _deliveryGroupFilters = new PolicySetPoliciesDeliveryGroupFiltersList(this, "delivery_group_filters", true);
  public get deliveryGroupFilters() {
    return this._deliveryGroupFilters;
  }
  public putDeliveryGroupFilters(value: PolicySetPoliciesDeliveryGroupFilters[] | cdktf.IResolvable) {
    this._deliveryGroupFilters.internalValue = value;
  }
  public resetDeliveryGroupFilters() {
    this._deliveryGroupFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupFiltersInput() {
    return this._deliveryGroupFilters.internalValue;
  }

  // delivery_group_type_filters - computed: true, optional: true, required: false
  private _deliveryGroupTypeFilters = new PolicySetPoliciesDeliveryGroupTypeFiltersList(this, "delivery_group_type_filters", true);
  public get deliveryGroupTypeFilters() {
    return this._deliveryGroupTypeFilters;
  }
  public putDeliveryGroupTypeFilters(value: PolicySetPoliciesDeliveryGroupTypeFilters[] | cdktf.IResolvable) {
    this._deliveryGroupTypeFilters.internalValue = value;
  }
  public resetDeliveryGroupTypeFilters() {
    this._deliveryGroupTypeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupTypeFiltersInput() {
    return this._deliveryGroupTypeFilters.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ou_filters - computed: true, optional: true, required: false
  private _ouFilters = new PolicySetPoliciesOuFiltersList(this, "ou_filters", true);
  public get ouFilters() {
    return this._ouFilters;
  }
  public putOuFilters(value: PolicySetPoliciesOuFilters[] | cdktf.IResolvable) {
    this._ouFilters.internalValue = value;
  }
  public resetOuFilters() {
    this._ouFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouFiltersInput() {
    return this._ouFilters.internalValue;
  }

  // policy_settings - computed: false, optional: false, required: true
  private _policySettings = new PolicySetPoliciesPolicySettingsList(this, "policy_settings", true);
  public get policySettings() {
    return this._policySettings;
  }
  public putPolicySettings(value: PolicySetPoliciesPolicySettings[] | cdktf.IResolvable) {
    this._policySettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySettingsInput() {
    return this._policySettings.internalValue;
  }

  // tag_filters - computed: true, optional: true, required: false
  private _tagFilters = new PolicySetPoliciesTagFiltersList(this, "tag_filters", true);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: PolicySetPoliciesTagFilters[] | cdktf.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }

  // user_filters - computed: true, optional: true, required: false
  private _userFilters = new PolicySetPoliciesUserFiltersList(this, "user_filters", true);
  public get userFilters() {
    return this._userFilters;
  }
  public putUserFilters(value: PolicySetPoliciesUserFilters[] | cdktf.IResolvable) {
    this._userFilters.internalValue = value;
  }
  public resetUserFilters() {
    this._userFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFiltersInput() {
    return this._userFilters.internalValue;
  }
}

export class PolicySetPoliciesList extends cdktf.ComplexList {
  public internalValue? : PolicySetPolicies[] | cdktf.IResolvable

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
  public get(index: number): PolicySetPoliciesOutputReference {
    return new PolicySetPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set citrix_policy_set}
*/
export class PolicySet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_policy_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicySet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicySet to import
  * @param importFromId The id of the existing PolicySet that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicySet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_policy_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set citrix_policy_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySetConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySetConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_policy_set',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deliveryGroups = config.deliveryGroups;
    this._description = config.description;
    this._name = config.name;
    this._policies.internalValue = config.policies;
    this._scopes = config.scopes;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned - computed: true, optional: false, required: false
  public get assigned() {
    return this.getBooleanAttribute('assigned');
  }

  // delivery_groups - computed: true, optional: true, required: false
  private _deliveryGroups?: string[]; 
  public get deliveryGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_groups'));
  }
  public set deliveryGroups(value: string[]) {
    this._deliveryGroups = value;
  }
  public resetDeliveryGroups() {
    this._deliveryGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupsInput() {
    return this._deliveryGroups;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policies - computed: false, optional: false, required: true
  private _policies = new PolicySetPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: PolicySetPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // type - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deliveryGroups),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      policies: cdktf.listMapper(policySetPoliciesToTerraform, false)(this._policies.internalValue),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deliveryGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      policies: {
        value: cdktf.listMapperHcl(policySetPoliciesToHclTerraform, false)(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySetPoliciesList",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
