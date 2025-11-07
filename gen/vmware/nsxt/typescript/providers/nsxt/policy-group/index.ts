// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#description PolicyGroup#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#display_name PolicyGroup#display_name}
  */
  readonly displayName: string;
  /**
  * The domain name to use for resources. If not specified 'default' is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#domain PolicyGroup#domain}
  */
  readonly domain?: string;
  /**
  * Indicates the group type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#group_type PolicyGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#id PolicyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#nsx_id PolicyGroup#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * conjunction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#conjunction PolicyGroup#conjunction}
  */
  readonly conjunction?: PolicyGroupConjunction[] | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#context PolicyGroup#context}
  */
  readonly context?: PolicyGroupContext;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#criteria PolicyGroup#criteria}
  */
  readonly criteria?: PolicyGroupCriteria[] | cdktf.IResolvable;
  /**
  * extended_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#extended_criteria PolicyGroup#extended_criteria}
  */
  readonly extendedCriteria?: PolicyGroupExtendedCriteria;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#tag PolicyGroup#tag}
  */
  readonly tag?: PolicyGroupTag[] | cdktf.IResolvable;
}
export interface PolicyGroupConjunction {
  /**
  * The conjunction operator; either OR or AND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#operator PolicyGroup#operator}
  */
  readonly operator: string;
}

export function policyGroupConjunctionToTerraform(struct?: PolicyGroupConjunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function policyGroupConjunctionToHclTerraform(struct?: PolicyGroupConjunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGroupConjunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyGroupConjunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGroupConjunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class PolicyGroupConjunctionList extends cdktf.ComplexList {
  public internalValue? : PolicyGroupConjunction[] | cdktf.IResolvable

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
  public get(index: number): PolicyGroupConjunctionOutputReference {
    return new PolicyGroupConjunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyGroupContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#project_id PolicyGroup#project_id}
  */
  readonly projectId: string;
}

export function policyGroupContextToTerraform(struct?: PolicyGroupContextOutputReference | PolicyGroupContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyGroupContextToHclTerraform(struct?: PolicyGroupContextOutputReference | PolicyGroupContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGroupContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyGroupContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGroupContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface PolicyGroupCriteriaCondition {
  /**
  * The resource key attribute to apply the condition to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#key PolicyGroup#key}
  */
  readonly key: string;
  /**
  * The NSX member to apply the condition to. Can be one of; IPSet, LogicalPort, LogicalSwitch, Segment, SegmentPort or VirtualMachine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#member_type PolicyGroup#member_type}
  */
  readonly memberType: string;
  /**
  * The operator to use for the condition. Can be one of; CONTAINS, ENDSWITH, EQUALS, NOTEQUALS or STARTSWITH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#operator PolicyGroup#operator}
  */
  readonly operator: string;
  /**
  * The value to check for in the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#value PolicyGroup#value}
  */
  readonly value: string;
}

export function policyGroupCriteriaConditionToTerraform(struct?: PolicyGroupCriteriaCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    member_type: cdktf.stringToTerraform(struct!.memberType),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyGroupCriteriaConditionToHclTerraform(struct?: PolicyGroupCriteriaCondition | cdktf.IResolvable): any {
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
    member_type: {
      value: cdktf.stringToHclTerraform(struct!.memberType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class PolicyGroupCriteriaConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyGroupCriteriaCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._memberType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberType = this._memberType;
    }
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

  public set internalValue(value: PolicyGroupCriteriaCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._memberType = undefined;
      this._operator = undefined;
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
      this._memberType = value.memberType;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // member_type - computed: false, optional: false, required: true
  private _memberType?: string; 
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
  public set memberType(value: string) {
    this._memberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTypeInput() {
    return this._memberType;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class PolicyGroupCriteriaConditionList extends cdktf.ComplexList {
  public internalValue? : PolicyGroupCriteriaCondition[] | cdktf.IResolvable

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
  public get(index: number): PolicyGroupCriteriaConditionOutputReference {
    return new PolicyGroupCriteriaConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyGroupCriteriaExternalIdExpression {
  /**
  * List of external IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#external_ids PolicyGroup#external_ids}
  */
  readonly externalIds: string[];
  /**
  * External ID member type, default to virtual machine if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#member_type PolicyGroup#member_type}
  */
  readonly memberType?: string;
}

export function policyGroupCriteriaExternalIdExpressionToTerraform(struct?: PolicyGroupCriteriaExternalIdExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalIds),
    member_type: cdktf.stringToTerraform(struct!.memberType),
  }
}


export function policyGroupCriteriaExternalIdExpressionToHclTerraform(struct?: PolicyGroupCriteriaExternalIdExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    member_type: {
      value: cdktf.stringToHclTerraform(struct!.memberType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGroupCriteriaExternalIdExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyGroupCriteriaExternalIdExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIds = this._externalIds;
    }
    if (this._memberType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberType = this._memberType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGroupCriteriaExternalIdExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIds = undefined;
      this._memberType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIds = value.externalIds;
      this._memberType = value.memberType;
    }
  }

  // external_ids - computed: false, optional: false, required: true
  private _externalIds?: string[]; 
  public get externalIds() {
    return cdktf.Fn.tolist(this.getListAttribute('external_ids'));
  }
  public set externalIds(value: string[]) {
    this._externalIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdsInput() {
    return this._externalIds;
  }

  // member_type - computed: false, optional: true, required: false
  private _memberType?: string; 
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
  public set memberType(value: string) {
    this._memberType = value;
  }
  public resetMemberType() {
    this._memberType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTypeInput() {
    return this._memberType;
  }
}

export class PolicyGroupCriteriaExternalIdExpressionList extends cdktf.ComplexList {
  public internalValue? : PolicyGroupCriteriaExternalIdExpression[] | cdktf.IResolvable

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
  public get(index: number): PolicyGroupCriteriaExternalIdExpressionOutputReference {
    return new PolicyGroupCriteriaExternalIdExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyGroupCriteriaIpaddressExpression {
  /**
  * List of single IP addresses, IP address ranges or Subnets. Cannot mix IPv4 and IPv6 in a single list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#ip_addresses PolicyGroup#ip_addresses}
  */
  readonly ipAddresses: string[];
}

export function policyGroupCriteriaIpaddressExpressionToTerraform(struct?: PolicyGroupCriteriaIpaddressExpressionOutputReference | PolicyGroupCriteriaIpaddressExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
  }
}


export function policyGroupCriteriaIpaddressExpressionToHclTerraform(struct?: PolicyGroupCriteriaIpaddressExpressionOutputReference | PolicyGroupCriteriaIpaddressExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGroupCriteriaIpaddressExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyGroupCriteriaIpaddressExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGroupCriteriaIpaddressExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddresses = value.ipAddresses;
    }
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }
}
export interface PolicyGroupCriteriaMacaddressExpression {
  /**
  * List of Mac Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#mac_addresses PolicyGroup#mac_addresses}
  */
  readonly macAddresses: string[];
}

export function policyGroupCriteriaMacaddressExpressionToTerraform(struct?: PolicyGroupCriteriaMacaddressExpressionOutputReference | PolicyGroupCriteriaMacaddressExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.macAddresses),
  }
}


export function policyGroupCriteriaMacaddressExpressionToHclTerraform(struct?: PolicyGroupCriteriaMacaddressExpressionOutputReference | PolicyGroupCriteriaMacaddressExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.macAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGroupCriteriaMacaddressExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyGroupCriteriaMacaddressExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddresses = this._macAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGroupCriteriaMacaddressExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._macAddresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._macAddresses = value.macAddresses;
    }
  }

  // mac_addresses - computed: false, optional: false, required: true
  private _macAddresses?: string[]; 
  public get macAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('mac_addresses'));
  }
  public set macAddresses(value: string[]) {
    this._macAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressesInput() {
    return this._macAddresses;
  }
}
export interface PolicyGroupCriteriaPathExpression {
  /**
  * List of policy paths of direct group members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#member_paths PolicyGroup#member_paths}
  */
  readonly memberPaths: string[];
}

export function policyGroupCriteriaPathExpressionToTerraform(struct?: PolicyGroupCriteriaPathExpressionOutputReference | PolicyGroupCriteriaPathExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.memberPaths),
  }
}


export function policyGroupCriteriaPathExpressionToHclTerraform(struct?: PolicyGroupCriteriaPathExpressionOutputReference | PolicyGroupCriteriaPathExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.memberPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGroupCriteriaPathExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyGroupCriteriaPathExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberPaths = this._memberPaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGroupCriteriaPathExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memberPaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memberPaths = value.memberPaths;
    }
  }

  // member_paths - computed: false, optional: false, required: true
  private _memberPaths?: string[]; 
  public get memberPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('member_paths'));
  }
  public set memberPaths(value: string[]) {
    this._memberPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberPathsInput() {
    return this._memberPaths;
  }
}
export interface PolicyGroupCriteria {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#condition PolicyGroup#condition}
  */
  readonly condition?: PolicyGroupCriteriaCondition[] | cdktf.IResolvable;
  /**
  * external_id_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#external_id_expression PolicyGroup#external_id_expression}
  */
  readonly externalIdExpression?: PolicyGroupCriteriaExternalIdExpression[] | cdktf.IResolvable;
  /**
  * ipaddress_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#ipaddress_expression PolicyGroup#ipaddress_expression}
  */
  readonly ipaddressExpression?: PolicyGroupCriteriaIpaddressExpression;
  /**
  * macaddress_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#macaddress_expression PolicyGroup#macaddress_expression}
  */
  readonly macaddressExpression?: PolicyGroupCriteriaMacaddressExpression;
  /**
  * path_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#path_expression PolicyGroup#path_expression}
  */
  readonly pathExpression?: PolicyGroupCriteriaPathExpression;
}

export function policyGroupCriteriaToTerraform(struct?: PolicyGroupCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(policyGroupCriteriaConditionToTerraform, true)(struct!.condition),
    external_id_expression: cdktf.listMapper(policyGroupCriteriaExternalIdExpressionToTerraform, true)(struct!.externalIdExpression),
    ipaddress_expression: policyGroupCriteriaIpaddressExpressionToTerraform(struct!.ipaddressExpression),
    macaddress_expression: policyGroupCriteriaMacaddressExpressionToTerraform(struct!.macaddressExpression),
    path_expression: policyGroupCriteriaPathExpressionToTerraform(struct!.pathExpression),
  }
}


export function policyGroupCriteriaToHclTerraform(struct?: PolicyGroupCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(policyGroupCriteriaConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyGroupCriteriaConditionList",
    },
    external_id_expression: {
      value: cdktf.listMapperHcl(policyGroupCriteriaExternalIdExpressionToHclTerraform, true)(struct!.externalIdExpression),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyGroupCriteriaExternalIdExpressionList",
    },
    ipaddress_expression: {
      value: policyGroupCriteriaIpaddressExpressionToHclTerraform(struct!.ipaddressExpression),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyGroupCriteriaIpaddressExpressionList",
    },
    macaddress_expression: {
      value: policyGroupCriteriaMacaddressExpressionToHclTerraform(struct!.macaddressExpression),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyGroupCriteriaMacaddressExpressionList",
    },
    path_expression: {
      value: policyGroupCriteriaPathExpressionToHclTerraform(struct!.pathExpression),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyGroupCriteriaPathExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGroupCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyGroupCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._externalIdExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIdExpression = this._externalIdExpression?.internalValue;
    }
    if (this._ipaddressExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddressExpression = this._ipaddressExpression?.internalValue;
    }
    if (this._macaddressExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddressExpression = this._macaddressExpression?.internalValue;
    }
    if (this._pathExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathExpression = this._pathExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGroupCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._externalIdExpression.internalValue = undefined;
      this._ipaddressExpression.internalValue = undefined;
      this._macaddressExpression.internalValue = undefined;
      this._pathExpression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._externalIdExpression.internalValue = value.externalIdExpression;
      this._ipaddressExpression.internalValue = value.ipaddressExpression;
      this._macaddressExpression.internalValue = value.macaddressExpression;
      this._pathExpression.internalValue = value.pathExpression;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new PolicyGroupCriteriaConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: PolicyGroupCriteriaCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // external_id_expression - computed: false, optional: true, required: false
  private _externalIdExpression = new PolicyGroupCriteriaExternalIdExpressionList(this, "external_id_expression", false);
  public get externalIdExpression() {
    return this._externalIdExpression;
  }
  public putExternalIdExpression(value: PolicyGroupCriteriaExternalIdExpression[] | cdktf.IResolvable) {
    this._externalIdExpression.internalValue = value;
  }
  public resetExternalIdExpression() {
    this._externalIdExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdExpressionInput() {
    return this._externalIdExpression.internalValue;
  }

  // ipaddress_expression - computed: false, optional: true, required: false
  private _ipaddressExpression = new PolicyGroupCriteriaIpaddressExpressionOutputReference(this, "ipaddress_expression");
  public get ipaddressExpression() {
    return this._ipaddressExpression;
  }
  public putIpaddressExpression(value: PolicyGroupCriteriaIpaddressExpression) {
    this._ipaddressExpression.internalValue = value;
  }
  public resetIpaddressExpression() {
    this._ipaddressExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressExpressionInput() {
    return this._ipaddressExpression.internalValue;
  }

  // macaddress_expression - computed: false, optional: true, required: false
  private _macaddressExpression = new PolicyGroupCriteriaMacaddressExpressionOutputReference(this, "macaddress_expression");
  public get macaddressExpression() {
    return this._macaddressExpression;
  }
  public putMacaddressExpression(value: PolicyGroupCriteriaMacaddressExpression) {
    this._macaddressExpression.internalValue = value;
  }
  public resetMacaddressExpression() {
    this._macaddressExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddressExpressionInput() {
    return this._macaddressExpression.internalValue;
  }

  // path_expression - computed: false, optional: true, required: false
  private _pathExpression = new PolicyGroupCriteriaPathExpressionOutputReference(this, "path_expression");
  public get pathExpression() {
    return this._pathExpression;
  }
  public putPathExpression(value: PolicyGroupCriteriaPathExpression) {
    this._pathExpression.internalValue = value;
  }
  public resetPathExpression() {
    this._pathExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathExpressionInput() {
    return this._pathExpression.internalValue;
  }
}

export class PolicyGroupCriteriaList extends cdktf.ComplexList {
  public internalValue? : PolicyGroupCriteria[] | cdktf.IResolvable

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
  public get(index: number): PolicyGroupCriteriaOutputReference {
    return new PolicyGroupCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyGroupExtendedCriteriaIdentityGroup {
  /**
  * LDAP distinguished name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#distinguished_name PolicyGroup#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * Identity (Directory) domain base distinguished name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#domain_base_distinguished_name PolicyGroup#domain_base_distinguished_name}
  */
  readonly domainBaseDistinguishedName?: string;
  /**
  * Identity (Directory) Group SID (security identifier)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#sid PolicyGroup#sid}
  */
  readonly sid?: string;
}

export function policyGroupExtendedCriteriaIdentityGroupToTerraform(struct?: PolicyGroupExtendedCriteriaIdentityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
    domain_base_distinguished_name: cdktf.stringToTerraform(struct!.domainBaseDistinguishedName),
    sid: cdktf.stringToTerraform(struct!.sid),
  }
}


export function policyGroupExtendedCriteriaIdentityGroupToHclTerraform(struct?: PolicyGroupExtendedCriteriaIdentityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_base_distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.domainBaseDistinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class PolicyGroupExtendedCriteriaIdentityGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyGroupExtendedCriteriaIdentityGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    if (this._domainBaseDistinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainBaseDistinguishedName = this._domainBaseDistinguishedName;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGroupExtendedCriteriaIdentityGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distinguishedName = undefined;
      this._domainBaseDistinguishedName = undefined;
      this._sid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distinguishedName = value.distinguishedName;
      this._domainBaseDistinguishedName = value.domainBaseDistinguishedName;
      this._sid = value.sid;
    }
  }

  // distinguished_name - computed: false, optional: true, required: false
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }

  // domain_base_distinguished_name - computed: false, optional: true, required: false
  private _domainBaseDistinguishedName?: string; 
  public get domainBaseDistinguishedName() {
    return this.getStringAttribute('domain_base_distinguished_name');
  }
  public set domainBaseDistinguishedName(value: string) {
    this._domainBaseDistinguishedName = value;
  }
  public resetDomainBaseDistinguishedName() {
    this._domainBaseDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainBaseDistinguishedNameInput() {
    return this._domainBaseDistinguishedName;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}

export class PolicyGroupExtendedCriteriaIdentityGroupList extends cdktf.ComplexList {
  public internalValue? : PolicyGroupExtendedCriteriaIdentityGroup[] | cdktf.IResolvable

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
  public get(index: number): PolicyGroupExtendedCriteriaIdentityGroupOutputReference {
    return new PolicyGroupExtendedCriteriaIdentityGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyGroupExtendedCriteria {
  /**
  * identity_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#identity_group PolicyGroup#identity_group}
  */
  readonly identityGroup: PolicyGroupExtendedCriteriaIdentityGroup[] | cdktf.IResolvable;
}

export function policyGroupExtendedCriteriaToTerraform(struct?: PolicyGroupExtendedCriteriaOutputReference | PolicyGroupExtendedCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_group: cdktf.listMapper(policyGroupExtendedCriteriaIdentityGroupToTerraform, true)(struct!.identityGroup),
  }
}


export function policyGroupExtendedCriteriaToHclTerraform(struct?: PolicyGroupExtendedCriteriaOutputReference | PolicyGroupExtendedCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_group: {
      value: cdktf.listMapperHcl(policyGroupExtendedCriteriaIdentityGroupToHclTerraform, true)(struct!.identityGroup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyGroupExtendedCriteriaIdentityGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGroupExtendedCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyGroupExtendedCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityGroup = this._identityGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGroupExtendedCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityGroup.internalValue = value.identityGroup;
    }
  }

  // identity_group - computed: false, optional: false, required: true
  private _identityGroup = new PolicyGroupExtendedCriteriaIdentityGroupList(this, "identity_group", true);
  public get identityGroup() {
    return this._identityGroup;
  }
  public putIdentityGroup(value: PolicyGroupExtendedCriteriaIdentityGroup[] | cdktf.IResolvable) {
    this._identityGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityGroupInput() {
    return this._identityGroup.internalValue;
  }
}
export interface PolicyGroupTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#scope PolicyGroup#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#tag PolicyGroup#tag}
  */
  readonly tag?: string;
}

export function policyGroupTagToTerraform(struct?: PolicyGroupTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyGroupTagToHclTerraform(struct?: PolicyGroupTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class PolicyGroupTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyGroupTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGroupTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyGroupTagList extends cdktf.ComplexList {
  public internalValue? : PolicyGroupTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyGroupTagOutputReference {
    return new PolicyGroupTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group nsxt_policy_group}
*/
export class PolicyGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyGroup to import
  * @param importFromId The id of the existing PolicyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_group nsxt_policy_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_group',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._groupType = config.groupType;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._conjunction.internalValue = config.conjunction;
    this._context.internalValue = config.context;
    this._criteria.internalValue = config.criteria;
    this._extendedCriteria.internalValue = config.extendedCriteria;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // group_type - computed: false, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
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

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // conjunction - computed: false, optional: true, required: false
  private _conjunction = new PolicyGroupConjunctionList(this, "conjunction", false);
  public get conjunction() {
    return this._conjunction;
  }
  public putConjunction(value: PolicyGroupConjunction[] | cdktf.IResolvable) {
    this._conjunction.internalValue = value;
  }
  public resetConjunction() {
    this._conjunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conjunctionInput() {
    return this._conjunction.internalValue;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyGroupContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyGroupContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new PolicyGroupCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: PolicyGroupCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // extended_criteria - computed: false, optional: true, required: false
  private _extendedCriteria = new PolicyGroupExtendedCriteriaOutputReference(this, "extended_criteria");
  public get extendedCriteria() {
    return this._extendedCriteria;
  }
  public putExtendedCriteria(value: PolicyGroupExtendedCriteria) {
    this._extendedCriteria.internalValue = value;
  }
  public resetExtendedCriteria() {
    this._extendedCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCriteriaInput() {
    return this._extendedCriteria.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyGroupTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyGroupTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain: cdktf.stringToTerraform(this._domain),
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      conjunction: cdktf.listMapper(policyGroupConjunctionToTerraform, true)(this._conjunction.internalValue),
      context: policyGroupContextToTerraform(this._context.internalValue),
      criteria: cdktf.listMapper(policyGroupCriteriaToTerraform, true)(this._criteria.internalValue),
      extended_criteria: policyGroupExtendedCriteriaToTerraform(this._extendedCriteria.internalValue),
      tag: cdktf.listMapper(policyGroupTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conjunction: {
        value: cdktf.listMapperHcl(policyGroupConjunctionToHclTerraform, true)(this._conjunction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyGroupConjunctionList",
      },
      context: {
        value: policyGroupContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyGroupContextList",
      },
      criteria: {
        value: cdktf.listMapperHcl(policyGroupCriteriaToHclTerraform, true)(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyGroupCriteriaList",
      },
      extended_criteria: {
        value: policyGroupExtendedCriteriaToHclTerraform(this._extendedCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyGroupExtendedCriteriaList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyGroupTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyGroupTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
