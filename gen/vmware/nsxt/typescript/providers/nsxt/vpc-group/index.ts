// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#description VpcGroup#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#display_name VpcGroup#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates the group type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#group_type VpcGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#id VpcGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#nsx_id VpcGroup#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * conjunction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#conjunction VpcGroup#conjunction}
  */
  readonly conjunction?: VpcGroupConjunction[] | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#context VpcGroup#context}
  */
  readonly context: VpcGroupContext;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#criteria VpcGroup#criteria}
  */
  readonly criteria?: VpcGroupCriteria[] | cdktf.IResolvable;
  /**
  * extended_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#extended_criteria VpcGroup#extended_criteria}
  */
  readonly extendedCriteria?: VpcGroupExtendedCriteria;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#tag VpcGroup#tag}
  */
  readonly tag?: VpcGroupTag[] | cdktf.IResolvable;
}
export interface VpcGroupConjunction {
  /**
  * The conjunction operator; either OR or AND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#operator VpcGroup#operator}
  */
  readonly operator: string;
}

export function vpcGroupConjunctionToTerraform(struct?: VpcGroupConjunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function vpcGroupConjunctionToHclTerraform(struct?: VpcGroupConjunction | cdktf.IResolvable): any {
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

export class VpcGroupConjunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGroupConjunction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcGroupConjunction | cdktf.IResolvable | undefined) {
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

export class VpcGroupConjunctionList extends cdktf.ComplexList {
  public internalValue? : VpcGroupConjunction[] | cdktf.IResolvable

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
  public get(index: number): VpcGroupConjunctionOutputReference {
    return new VpcGroupConjunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGroupContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#project_id VpcGroup#project_id}
  */
  readonly projectId: string;
  /**
  * Id of the VPC which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#vpc_id VpcGroup#vpc_id}
  */
  readonly vpcId: string;
}

export function vpcGroupContextToTerraform(struct?: VpcGroupContextOutputReference | VpcGroupContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function vpcGroupContextToHclTerraform(struct?: VpcGroupContextOutputReference | VpcGroupContext): any {
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
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGroupContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcGroupContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGroupContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
      this._vpcId = value.vpcId;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface VpcGroupCriteriaCondition {
  /**
  * The resource key attribute to apply the condition to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#key VpcGroup#key}
  */
  readonly key: string;
  /**
  * The NSX member to apply the condition to. Can be one of; IPSet, LogicalPort, LogicalSwitch, Segment, SegmentPort or VirtualMachine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#member_type VpcGroup#member_type}
  */
  readonly memberType: string;
  /**
  * The operator to use for the condition. Can be one of; CONTAINS, ENDSWITH, EQUALS, NOTEQUALS or STARTSWITH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#operator VpcGroup#operator}
  */
  readonly operator: string;
  /**
  * The value to check for in the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#value VpcGroup#value}
  */
  readonly value: string;
}

export function vpcGroupCriteriaConditionToTerraform(struct?: VpcGroupCriteriaCondition | cdktf.IResolvable): any {
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


export function vpcGroupCriteriaConditionToHclTerraform(struct?: VpcGroupCriteriaCondition | cdktf.IResolvable): any {
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

export class VpcGroupCriteriaConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGroupCriteriaCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcGroupCriteriaCondition | cdktf.IResolvable | undefined) {
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

export class VpcGroupCriteriaConditionList extends cdktf.ComplexList {
  public internalValue? : VpcGroupCriteriaCondition[] | cdktf.IResolvable

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
  public get(index: number): VpcGroupCriteriaConditionOutputReference {
    return new VpcGroupCriteriaConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGroupCriteriaExternalIdExpression {
  /**
  * List of external IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#external_ids VpcGroup#external_ids}
  */
  readonly externalIds: string[];
  /**
  * External ID member type, default to virtual machine if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#member_type VpcGroup#member_type}
  */
  readonly memberType?: string;
}

export function vpcGroupCriteriaExternalIdExpressionToTerraform(struct?: VpcGroupCriteriaExternalIdExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalIds),
    member_type: cdktf.stringToTerraform(struct!.memberType),
  }
}


export function vpcGroupCriteriaExternalIdExpressionToHclTerraform(struct?: VpcGroupCriteriaExternalIdExpression | cdktf.IResolvable): any {
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

export class VpcGroupCriteriaExternalIdExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGroupCriteriaExternalIdExpression | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcGroupCriteriaExternalIdExpression | cdktf.IResolvable | undefined) {
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

export class VpcGroupCriteriaExternalIdExpressionList extends cdktf.ComplexList {
  public internalValue? : VpcGroupCriteriaExternalIdExpression[] | cdktf.IResolvable

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
  public get(index: number): VpcGroupCriteriaExternalIdExpressionOutputReference {
    return new VpcGroupCriteriaExternalIdExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGroupCriteriaIpaddressExpression {
  /**
  * List of single IP addresses, IP address ranges or Subnets. Cannot mix IPv4 and IPv6 in a single list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#ip_addresses VpcGroup#ip_addresses}
  */
  readonly ipAddresses: string[];
}

export function vpcGroupCriteriaIpaddressExpressionToTerraform(struct?: VpcGroupCriteriaIpaddressExpressionOutputReference | VpcGroupCriteriaIpaddressExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
  }
}


export function vpcGroupCriteriaIpaddressExpressionToHclTerraform(struct?: VpcGroupCriteriaIpaddressExpressionOutputReference | VpcGroupCriteriaIpaddressExpression): any {
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

export class VpcGroupCriteriaIpaddressExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcGroupCriteriaIpaddressExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGroupCriteriaIpaddressExpression | undefined) {
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
export interface VpcGroupCriteriaMacaddressExpression {
  /**
  * List of Mac Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#mac_addresses VpcGroup#mac_addresses}
  */
  readonly macAddresses: string[];
}

export function vpcGroupCriteriaMacaddressExpressionToTerraform(struct?: VpcGroupCriteriaMacaddressExpressionOutputReference | VpcGroupCriteriaMacaddressExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.macAddresses),
  }
}


export function vpcGroupCriteriaMacaddressExpressionToHclTerraform(struct?: VpcGroupCriteriaMacaddressExpressionOutputReference | VpcGroupCriteriaMacaddressExpression): any {
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

export class VpcGroupCriteriaMacaddressExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcGroupCriteriaMacaddressExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddresses = this._macAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGroupCriteriaMacaddressExpression | undefined) {
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
export interface VpcGroupCriteriaPathExpression {
  /**
  * List of policy paths of direct group members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#member_paths VpcGroup#member_paths}
  */
  readonly memberPaths: string[];
}

export function vpcGroupCriteriaPathExpressionToTerraform(struct?: VpcGroupCriteriaPathExpressionOutputReference | VpcGroupCriteriaPathExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.memberPaths),
  }
}


export function vpcGroupCriteriaPathExpressionToHclTerraform(struct?: VpcGroupCriteriaPathExpressionOutputReference | VpcGroupCriteriaPathExpression): any {
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

export class VpcGroupCriteriaPathExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcGroupCriteriaPathExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberPaths = this._memberPaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGroupCriteriaPathExpression | undefined) {
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
export interface VpcGroupCriteria {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#condition VpcGroup#condition}
  */
  readonly condition?: VpcGroupCriteriaCondition[] | cdktf.IResolvable;
  /**
  * external_id_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#external_id_expression VpcGroup#external_id_expression}
  */
  readonly externalIdExpression?: VpcGroupCriteriaExternalIdExpression[] | cdktf.IResolvable;
  /**
  * ipaddress_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#ipaddress_expression VpcGroup#ipaddress_expression}
  */
  readonly ipaddressExpression?: VpcGroupCriteriaIpaddressExpression;
  /**
  * macaddress_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#macaddress_expression VpcGroup#macaddress_expression}
  */
  readonly macaddressExpression?: VpcGroupCriteriaMacaddressExpression;
  /**
  * path_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#path_expression VpcGroup#path_expression}
  */
  readonly pathExpression?: VpcGroupCriteriaPathExpression;
}

export function vpcGroupCriteriaToTerraform(struct?: VpcGroupCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(vpcGroupCriteriaConditionToTerraform, true)(struct!.condition),
    external_id_expression: cdktf.listMapper(vpcGroupCriteriaExternalIdExpressionToTerraform, true)(struct!.externalIdExpression),
    ipaddress_expression: vpcGroupCriteriaIpaddressExpressionToTerraform(struct!.ipaddressExpression),
    macaddress_expression: vpcGroupCriteriaMacaddressExpressionToTerraform(struct!.macaddressExpression),
    path_expression: vpcGroupCriteriaPathExpressionToTerraform(struct!.pathExpression),
  }
}


export function vpcGroupCriteriaToHclTerraform(struct?: VpcGroupCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(vpcGroupCriteriaConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "VpcGroupCriteriaConditionList",
    },
    external_id_expression: {
      value: cdktf.listMapperHcl(vpcGroupCriteriaExternalIdExpressionToHclTerraform, true)(struct!.externalIdExpression),
      isBlock: true,
      type: "list",
      storageClassType: "VpcGroupCriteriaExternalIdExpressionList",
    },
    ipaddress_expression: {
      value: vpcGroupCriteriaIpaddressExpressionToHclTerraform(struct!.ipaddressExpression),
      isBlock: true,
      type: "list",
      storageClassType: "VpcGroupCriteriaIpaddressExpressionList",
    },
    macaddress_expression: {
      value: vpcGroupCriteriaMacaddressExpressionToHclTerraform(struct!.macaddressExpression),
      isBlock: true,
      type: "list",
      storageClassType: "VpcGroupCriteriaMacaddressExpressionList",
    },
    path_expression: {
      value: vpcGroupCriteriaPathExpressionToHclTerraform(struct!.pathExpression),
      isBlock: true,
      type: "list",
      storageClassType: "VpcGroupCriteriaPathExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGroupCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGroupCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcGroupCriteria | cdktf.IResolvable | undefined) {
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
  private _condition = new VpcGroupCriteriaConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: VpcGroupCriteriaCondition[] | cdktf.IResolvable) {
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
  private _externalIdExpression = new VpcGroupCriteriaExternalIdExpressionList(this, "external_id_expression", false);
  public get externalIdExpression() {
    return this._externalIdExpression;
  }
  public putExternalIdExpression(value: VpcGroupCriteriaExternalIdExpression[] | cdktf.IResolvable) {
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
  private _ipaddressExpression = new VpcGroupCriteriaIpaddressExpressionOutputReference(this, "ipaddress_expression");
  public get ipaddressExpression() {
    return this._ipaddressExpression;
  }
  public putIpaddressExpression(value: VpcGroupCriteriaIpaddressExpression) {
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
  private _macaddressExpression = new VpcGroupCriteriaMacaddressExpressionOutputReference(this, "macaddress_expression");
  public get macaddressExpression() {
    return this._macaddressExpression;
  }
  public putMacaddressExpression(value: VpcGroupCriteriaMacaddressExpression) {
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
  private _pathExpression = new VpcGroupCriteriaPathExpressionOutputReference(this, "path_expression");
  public get pathExpression() {
    return this._pathExpression;
  }
  public putPathExpression(value: VpcGroupCriteriaPathExpression) {
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

export class VpcGroupCriteriaList extends cdktf.ComplexList {
  public internalValue? : VpcGroupCriteria[] | cdktf.IResolvable

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
  public get(index: number): VpcGroupCriteriaOutputReference {
    return new VpcGroupCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGroupExtendedCriteriaIdentityGroup {
  /**
  * LDAP distinguished name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#distinguished_name VpcGroup#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * Identity (Directory) domain base distinguished name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#domain_base_distinguished_name VpcGroup#domain_base_distinguished_name}
  */
  readonly domainBaseDistinguishedName?: string;
  /**
  * Identity (Directory) Group SID (security identifier)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#sid VpcGroup#sid}
  */
  readonly sid?: string;
}

export function vpcGroupExtendedCriteriaIdentityGroupToTerraform(struct?: VpcGroupExtendedCriteriaIdentityGroup | cdktf.IResolvable): any {
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


export function vpcGroupExtendedCriteriaIdentityGroupToHclTerraform(struct?: VpcGroupExtendedCriteriaIdentityGroup | cdktf.IResolvable): any {
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

export class VpcGroupExtendedCriteriaIdentityGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGroupExtendedCriteriaIdentityGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcGroupExtendedCriteriaIdentityGroup | cdktf.IResolvable | undefined) {
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

export class VpcGroupExtendedCriteriaIdentityGroupList extends cdktf.ComplexList {
  public internalValue? : VpcGroupExtendedCriteriaIdentityGroup[] | cdktf.IResolvable

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
  public get(index: number): VpcGroupExtendedCriteriaIdentityGroupOutputReference {
    return new VpcGroupExtendedCriteriaIdentityGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGroupExtendedCriteria {
  /**
  * identity_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#identity_group VpcGroup#identity_group}
  */
  readonly identityGroup: VpcGroupExtendedCriteriaIdentityGroup[] | cdktf.IResolvable;
}

export function vpcGroupExtendedCriteriaToTerraform(struct?: VpcGroupExtendedCriteriaOutputReference | VpcGroupExtendedCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_group: cdktf.listMapper(vpcGroupExtendedCriteriaIdentityGroupToTerraform, true)(struct!.identityGroup),
  }
}


export function vpcGroupExtendedCriteriaToHclTerraform(struct?: VpcGroupExtendedCriteriaOutputReference | VpcGroupExtendedCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_group: {
      value: cdktf.listMapperHcl(vpcGroupExtendedCriteriaIdentityGroupToHclTerraform, true)(struct!.identityGroup),
      isBlock: true,
      type: "set",
      storageClassType: "VpcGroupExtendedCriteriaIdentityGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGroupExtendedCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcGroupExtendedCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityGroup = this._identityGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGroupExtendedCriteria | undefined) {
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
  private _identityGroup = new VpcGroupExtendedCriteriaIdentityGroupList(this, "identity_group", true);
  public get identityGroup() {
    return this._identityGroup;
  }
  public putIdentityGroup(value: VpcGroupExtendedCriteriaIdentityGroup[] | cdktf.IResolvable) {
    this._identityGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityGroupInput() {
    return this._identityGroup.internalValue;
  }
}
export interface VpcGroupTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#scope VpcGroup#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#tag VpcGroup#tag}
  */
  readonly tag?: string;
}

export function vpcGroupTagToTerraform(struct?: VpcGroupTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function vpcGroupTagToHclTerraform(struct?: VpcGroupTag | cdktf.IResolvable): any {
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

export class VpcGroupTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGroupTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcGroupTag | cdktf.IResolvable | undefined) {
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

export class VpcGroupTagList extends cdktf.ComplexList {
  public internalValue? : VpcGroupTag[] | cdktf.IResolvable

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
  public get(index: number): VpcGroupTagOutputReference {
    return new VpcGroupTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group nsxt_vpc_group}
*/
export class VpcGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcGroup to import
  * @param importFromId The id of the existing VpcGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_group nsxt_vpc_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VpcGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_group',
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
  private _conjunction = new VpcGroupConjunctionList(this, "conjunction", false);
  public get conjunction() {
    return this._conjunction;
  }
  public putConjunction(value: VpcGroupConjunction[] | cdktf.IResolvable) {
    this._conjunction.internalValue = value;
  }
  public resetConjunction() {
    this._conjunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conjunctionInput() {
    return this._conjunction.internalValue;
  }

  // context - computed: false, optional: false, required: true
  private _context = new VpcGroupContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: VpcGroupContext) {
    this._context.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new VpcGroupCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: VpcGroupCriteria[] | cdktf.IResolvable) {
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
  private _extendedCriteria = new VpcGroupExtendedCriteriaOutputReference(this, "extended_criteria");
  public get extendedCriteria() {
    return this._extendedCriteria;
  }
  public putExtendedCriteria(value: VpcGroupExtendedCriteria) {
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
  private _tag = new VpcGroupTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: VpcGroupTag[] | cdktf.IResolvable) {
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
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      conjunction: cdktf.listMapper(vpcGroupConjunctionToTerraform, true)(this._conjunction.internalValue),
      context: vpcGroupContextToTerraform(this._context.internalValue),
      criteria: cdktf.listMapper(vpcGroupCriteriaToTerraform, true)(this._criteria.internalValue),
      extended_criteria: vpcGroupExtendedCriteriaToTerraform(this._extendedCriteria.internalValue),
      tag: cdktf.listMapper(vpcGroupTagToTerraform, true)(this._tag.internalValue),
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
        value: cdktf.listMapperHcl(vpcGroupConjunctionToHclTerraform, true)(this._conjunction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcGroupConjunctionList",
      },
      context: {
        value: vpcGroupContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcGroupContextList",
      },
      criteria: {
        value: cdktf.listMapperHcl(vpcGroupCriteriaToHclTerraform, true)(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcGroupCriteriaList",
      },
      extended_criteria: {
        value: vpcGroupExtendedCriteriaToHclTerraform(this._extendedCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcGroupExtendedCriteriaList",
      },
      tag: {
        value: cdktf.listMapperHcl(vpcGroupTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcGroupTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
