// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwAclRuleV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}
  */
  readonly actionType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}
  */
  readonly addressType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}
  */
  readonly applications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}
  */
  readonly applicationsJsonString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}
  */
  readonly direction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}
  */
  readonly longConnectEnable: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}
  */
  readonly longConnectTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}
  */
  readonly longConnectTimeHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}
  */
  readonly longConnectTimeMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}
  */
  readonly longConnectTimeSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}
  */
  readonly status: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}
  */
  readonly type: number;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#destination CfwAclRuleV1#destination}
  */
  readonly destination: CfwAclRuleV1Destination;
  /**
  * sequence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#sequence CfwAclRuleV1#sequence}
  */
  readonly sequence: CfwAclRuleV1Sequence;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service CfwAclRuleV1#service}
  */
  readonly service: CfwAclRuleV1Service;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#source CfwAclRuleV1#source}
  */
  readonly source: CfwAclRuleV1Source;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#timeouts CfwAclRuleV1#timeouts}
  */
  readonly timeouts?: CfwAclRuleV1Timeouts;
}
export interface CfwAclRuleV1DestinationRegionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}
  */
  readonly regionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}
  */
  readonly regionType?: number;
}

export function cfwAclRuleV1DestinationRegionListStructToTerraform(struct?: CfwAclRuleV1DestinationRegionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_id: cdktf.stringToTerraform(struct!.regionId),
    region_type: cdktf.numberToTerraform(struct!.regionType),
  }
}


export function cfwAclRuleV1DestinationRegionListStructToHclTerraform(struct?: CfwAclRuleV1DestinationRegionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_type: {
      value: cdktf.numberToHclTerraform(struct!.regionType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwAclRuleV1DestinationRegionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CfwAclRuleV1DestinationRegionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._regionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionType = this._regionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwAclRuleV1DestinationRegionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionId = undefined;
      this._regionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionId = value.regionId;
      this._regionType = value.regionType;
    }
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_type - computed: false, optional: true, required: false
  private _regionType?: number; 
  public get regionType() {
    return this.getNumberAttribute('region_type');
  }
  public set regionType(value: number) {
    this._regionType = value;
  }
  public resetRegionType() {
    this._regionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionTypeInput() {
    return this._regionType;
  }
}

export class CfwAclRuleV1DestinationRegionListStructList extends cdktf.ComplexList {
  public internalValue? : CfwAclRuleV1DestinationRegionListStruct[] | cdktf.IResolvable

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
  public get(index: number): CfwAclRuleV1DestinationRegionListStructOutputReference {
    return new CfwAclRuleV1DestinationRegionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CfwAclRuleV1Destination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}
  */
  readonly addressGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}
  */
  readonly addressSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}
  */
  readonly addressSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}
  */
  readonly addressSetType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}
  */
  readonly addressType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}
  */
  readonly domainAddressName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}
  */
  readonly domainSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}
  */
  readonly domainSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}
  */
  readonly ipAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}
  */
  readonly predefinedGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}
  */
  readonly regionListJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}
  */
  readonly type: number;
  /**
  * region_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}
  */
  readonly regionList?: CfwAclRuleV1DestinationRegionListStruct[] | cdktf.IResolvable;
}

export function cfwAclRuleV1DestinationToTerraform(struct?: CfwAclRuleV1DestinationOutputReference | CfwAclRuleV1Destination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressGroup),
    address_set_id: cdktf.stringToTerraform(struct!.addressSetId),
    address_set_name: cdktf.stringToTerraform(struct!.addressSetName),
    address_set_type: cdktf.numberToTerraform(struct!.addressSetType),
    address_type: cdktf.numberToTerraform(struct!.addressType),
    domain_address_name: cdktf.stringToTerraform(struct!.domainAddressName),
    domain_set_id: cdktf.stringToTerraform(struct!.domainSetId),
    domain_set_name: cdktf.stringToTerraform(struct!.domainSetName),
    ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddress),
    predefined_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predefinedGroup),
    region_list_json: cdktf.stringToTerraform(struct!.regionListJson),
    type: cdktf.numberToTerraform(struct!.type),
    region_list: cdktf.listMapper(cfwAclRuleV1DestinationRegionListStructToTerraform, true)(struct!.regionList),
  }
}


export function cfwAclRuleV1DestinationToHclTerraform(struct?: CfwAclRuleV1DestinationOutputReference | CfwAclRuleV1Destination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    address_set_id: {
      value: cdktf.stringToHclTerraform(struct!.addressSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_set_name: {
      value: cdktf.stringToHclTerraform(struct!.addressSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_set_type: {
      value: cdktf.numberToHclTerraform(struct!.addressSetType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    address_type: {
      value: cdktf.numberToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_address_name: {
      value: cdktf.stringToHclTerraform(struct!.domainAddressName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_set_id: {
      value: cdktf.stringToHclTerraform(struct!.domainSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_set_name: {
      value: cdktf.stringToHclTerraform(struct!.domainSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    predefined_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.predefinedGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region_list_json: {
      value: cdktf.stringToHclTerraform(struct!.regionListJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_list: {
      value: cdktf.listMapperHcl(cfwAclRuleV1DestinationRegionListStructToHclTerraform, true)(struct!.regionList),
      isBlock: true,
      type: "list",
      storageClassType: "CfwAclRuleV1DestinationRegionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwAclRuleV1DestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CfwAclRuleV1Destination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressGroup = this._addressGroup;
    }
    if (this._addressSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSetId = this._addressSetId;
    }
    if (this._addressSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSetName = this._addressSetName;
    }
    if (this._addressSetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSetType = this._addressSetType;
    }
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._domainAddressName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAddressName = this._domainAddressName;
    }
    if (this._domainSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSetId = this._domainSetId;
    }
    if (this._domainSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSetName = this._domainSetName;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._predefinedGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedGroup = this._predefinedGroup;
    }
    if (this._regionListJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionListJson = this._regionListJson;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._regionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionList = this._regionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwAclRuleV1Destination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._addressGroup = undefined;
      this._addressSetId = undefined;
      this._addressSetName = undefined;
      this._addressSetType = undefined;
      this._addressType = undefined;
      this._domainAddressName = undefined;
      this._domainSetId = undefined;
      this._domainSetName = undefined;
      this._ipAddress = undefined;
      this._predefinedGroup = undefined;
      this._regionListJson = undefined;
      this._type = undefined;
      this._regionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._addressGroup = value.addressGroup;
      this._addressSetId = value.addressSetId;
      this._addressSetName = value.addressSetName;
      this._addressSetType = value.addressSetType;
      this._addressType = value.addressType;
      this._domainAddressName = value.domainAddressName;
      this._domainSetId = value.domainSetId;
      this._domainSetName = value.domainSetName;
      this._ipAddress = value.ipAddress;
      this._predefinedGroup = value.predefinedGroup;
      this._regionListJson = value.regionListJson;
      this._type = value.type;
      this._regionList.internalValue = value.regionList;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_group - computed: false, optional: true, required: false
  private _addressGroup?: string[]; 
  public get addressGroup() {
    return this.getListAttribute('address_group');
  }
  public set addressGroup(value: string[]) {
    this._addressGroup = value;
  }
  public resetAddressGroup() {
    this._addressGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupInput() {
    return this._addressGroup;
  }

  // address_set_id - computed: false, optional: true, required: false
  private _addressSetId?: string; 
  public get addressSetId() {
    return this.getStringAttribute('address_set_id');
  }
  public set addressSetId(value: string) {
    this._addressSetId = value;
  }
  public resetAddressSetId() {
    this._addressSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetIdInput() {
    return this._addressSetId;
  }

  // address_set_name - computed: false, optional: true, required: false
  private _addressSetName?: string; 
  public get addressSetName() {
    return this.getStringAttribute('address_set_name');
  }
  public set addressSetName(value: string) {
    this._addressSetName = value;
  }
  public resetAddressSetName() {
    this._addressSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetNameInput() {
    return this._addressSetName;
  }

  // address_set_type - computed: false, optional: true, required: false
  private _addressSetType?: number; 
  public get addressSetType() {
    return this.getNumberAttribute('address_set_type');
  }
  public set addressSetType(value: number) {
    this._addressSetType = value;
  }
  public resetAddressSetType() {
    this._addressSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetTypeInput() {
    return this._addressSetType;
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: number; 
  public get addressType() {
    return this.getNumberAttribute('address_type');
  }
  public set addressType(value: number) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // domain_address_name - computed: false, optional: true, required: false
  private _domainAddressName?: string; 
  public get domainAddressName() {
    return this.getStringAttribute('domain_address_name');
  }
  public set domainAddressName(value: string) {
    this._domainAddressName = value;
  }
  public resetDomainAddressName() {
    this._domainAddressName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAddressNameInput() {
    return this._domainAddressName;
  }

  // domain_set_id - computed: false, optional: true, required: false
  private _domainSetId?: string; 
  public get domainSetId() {
    return this.getStringAttribute('domain_set_id');
  }
  public set domainSetId(value: string) {
    this._domainSetId = value;
  }
  public resetDomainSetId() {
    this._domainSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSetIdInput() {
    return this._domainSetId;
  }

  // domain_set_name - computed: false, optional: true, required: false
  private _domainSetName?: string; 
  public get domainSetName() {
    return this.getStringAttribute('domain_set_name');
  }
  public set domainSetName(value: string) {
    this._domainSetName = value;
  }
  public resetDomainSetName() {
    this._domainSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSetNameInput() {
    return this._domainSetName;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string[]; 
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }
  public set ipAddress(value: string[]) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // predefined_group - computed: false, optional: true, required: false
  private _predefinedGroup?: string[]; 
  public get predefinedGroup() {
    return this.getListAttribute('predefined_group');
  }
  public set predefinedGroup(value: string[]) {
    this._predefinedGroup = value;
  }
  public resetPredefinedGroup() {
    this._predefinedGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedGroupInput() {
    return this._predefinedGroup;
  }

  // region_list_json - computed: false, optional: true, required: false
  private _regionListJson?: string; 
  public get regionListJson() {
    return this.getStringAttribute('region_list_json');
  }
  public set regionListJson(value: string) {
    this._regionListJson = value;
  }
  public resetRegionListJson() {
    this._regionListJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListJsonInput() {
    return this._regionListJson;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // region_list - computed: false, optional: true, required: false
  private _regionList = new CfwAclRuleV1DestinationRegionListStructList(this, "region_list", false);
  public get regionList() {
    return this._regionList;
  }
  public putRegionList(value: CfwAclRuleV1DestinationRegionListStruct[] | cdktf.IResolvable) {
    this._regionList.internalValue = value;
  }
  public resetRegionList() {
    this._regionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListInput() {
    return this._regionList.internalValue;
  }
}
export interface CfwAclRuleV1Sequence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#bottom CfwAclRuleV1#bottom}
  */
  readonly bottom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_rule_id CfwAclRuleV1#dest_rule_id}
  */
  readonly destRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#top CfwAclRuleV1#top}
  */
  readonly top?: number;
}

export function cfwAclRuleV1SequenceToTerraform(struct?: CfwAclRuleV1SequenceOutputReference | CfwAclRuleV1Sequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: cdktf.numberToTerraform(struct!.bottom),
    dest_rule_id: cdktf.stringToTerraform(struct!.destRuleId),
    top: cdktf.numberToTerraform(struct!.top),
  }
}


export function cfwAclRuleV1SequenceToHclTerraform(struct?: CfwAclRuleV1SequenceOutputReference | CfwAclRuleV1Sequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bottom: {
      value: cdktf.numberToHclTerraform(struct!.bottom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.destRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top: {
      value: cdktf.numberToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwAclRuleV1SequenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CfwAclRuleV1Sequence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom;
    }
    if (this._destRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRuleId = this._destRuleId;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwAclRuleV1Sequence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bottom = undefined;
      this._destRuleId = undefined;
      this._top = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bottom = value.bottom;
      this._destRuleId = value.destRuleId;
      this._top = value.top;
    }
  }

  // bottom - computed: false, optional: true, required: false
  private _bottom?: number; 
  public get bottom() {
    return this.getNumberAttribute('bottom');
  }
  public set bottom(value: number) {
    this._bottom = value;
  }
  public resetBottom() {
    this._bottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom;
  }

  // dest_rule_id - computed: false, optional: true, required: false
  private _destRuleId?: string; 
  public get destRuleId() {
    return this.getStringAttribute('dest_rule_id');
  }
  public set destRuleId(value: string) {
    this._destRuleId = value;
  }
  public resetDestRuleId() {
    this._destRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRuleIdInput() {
    return this._destRuleId;
  }

  // top - computed: false, optional: true, required: false
  private _top?: number; 
  public get top() {
    return this.getNumberAttribute('top');
  }
  public set top(value: number) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }
}
export interface CfwAclRuleV1ServiceCustomService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}
  */
  readonly destPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}
  */
  readonly sourcePort?: string;
}

export function cfwAclRuleV1ServiceCustomServiceToTerraform(struct?: CfwAclRuleV1ServiceCustomService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dest_port: cdktf.stringToTerraform(struct!.destPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function cfwAclRuleV1ServiceCustomServiceToHclTerraform(struct?: CfwAclRuleV1ServiceCustomService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_port: {
      value: cdktf.stringToHclTerraform(struct!.destPort),
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
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwAclRuleV1ServiceCustomServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CfwAclRuleV1ServiceCustomService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwAclRuleV1ServiceCustomService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._destPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._destPort = value.destPort;
      this._name = value.name;
      this._protocol = value.protocol;
      this._sourcePort = value.sourcePort;
    }
  }

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

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: string; 
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }
  public set destPort(value: string) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}

export class CfwAclRuleV1ServiceCustomServiceList extends cdktf.ComplexList {
  public internalValue? : CfwAclRuleV1ServiceCustomService[] | cdktf.IResolvable

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
  public get(index: number): CfwAclRuleV1ServiceCustomServiceOutputReference {
    return new CfwAclRuleV1ServiceCustomServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CfwAclRuleV1ServiceServiceGroupNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}
  */
  readonly protocols?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}
  */
  readonly serviceSetType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#set_id CfwAclRuleV1#set_id}
  */
  readonly setId?: string;
}

export function cfwAclRuleV1ServiceServiceGroupNamesToTerraform(struct?: CfwAclRuleV1ServiceServiceGroupNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    protocols: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protocols),
    service_set_type: cdktf.numberToTerraform(struct!.serviceSetType),
    set_id: cdktf.stringToTerraform(struct!.setId),
  }
}


export function cfwAclRuleV1ServiceServiceGroupNamesToHclTerraform(struct?: CfwAclRuleV1ServiceServiceGroupNames | cdktf.IResolvable): any {
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
    protocols: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    service_set_type: {
      value: cdktf.numberToHclTerraform(struct!.serviceSetType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_id: {
      value: cdktf.stringToHclTerraform(struct!.setId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwAclRuleV1ServiceServiceGroupNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CfwAclRuleV1ServiceServiceGroupNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._serviceSetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSetType = this._serviceSetType;
    }
    if (this._setId !== undefined) {
      hasAnyValues = true;
      internalValueResult.setId = this._setId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwAclRuleV1ServiceServiceGroupNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._protocols = undefined;
      this._serviceSetType = undefined;
      this._setId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._protocols = value.protocols;
      this._serviceSetType = value.serviceSetType;
      this._setId = value.setId;
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

  // protocols - computed: false, optional: true, required: false
  private _protocols?: number[]; 
  public get protocols() {
    return this.getNumberListAttribute('protocols');
  }
  public set protocols(value: number[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // service_set_type - computed: false, optional: true, required: false
  private _serviceSetType?: number; 
  public get serviceSetType() {
    return this.getNumberAttribute('service_set_type');
  }
  public set serviceSetType(value: number) {
    this._serviceSetType = value;
  }
  public resetServiceSetType() {
    this._serviceSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSetTypeInput() {
    return this._serviceSetType;
  }

  // set_id - computed: false, optional: true, required: false
  private _setId?: string; 
  public get setId() {
    return this.getStringAttribute('set_id');
  }
  public set setId(value: string) {
    this._setId = value;
  }
  public resetSetId() {
    this._setId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdInput() {
    return this._setId;
  }
}

export class CfwAclRuleV1ServiceServiceGroupNamesList extends cdktf.ComplexList {
  public internalValue? : CfwAclRuleV1ServiceServiceGroupNames[] | cdktf.IResolvable

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
  public get(index: number): CfwAclRuleV1ServiceServiceGroupNamesOutputReference {
    return new CfwAclRuleV1ServiceServiceGroupNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CfwAclRuleV1Service {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}
  */
  readonly destPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}
  */
  readonly predefinedGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}
  */
  readonly protocols?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_group CfwAclRuleV1#service_group}
  */
  readonly serviceGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_id CfwAclRuleV1#service_set_id}
  */
  readonly serviceSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_name CfwAclRuleV1#service_set_name}
  */
  readonly serviceSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}
  */
  readonly serviceSetType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}
  */
  readonly type: number;
  /**
  * custom_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#custom_service CfwAclRuleV1#custom_service}
  */
  readonly customService?: CfwAclRuleV1ServiceCustomService[] | cdktf.IResolvable;
  /**
  * service_group_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_group_names CfwAclRuleV1#service_group_names}
  */
  readonly serviceGroupNames?: CfwAclRuleV1ServiceServiceGroupNames[] | cdktf.IResolvable;
}

export function cfwAclRuleV1ServiceToTerraform(struct?: CfwAclRuleV1ServiceOutputReference | CfwAclRuleV1Service): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_port: cdktf.stringToTerraform(struct!.destPort),
    predefined_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predefinedGroup),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    protocols: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protocols),
    service_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceGroup),
    service_set_id: cdktf.stringToTerraform(struct!.serviceSetId),
    service_set_name: cdktf.stringToTerraform(struct!.serviceSetName),
    service_set_type: cdktf.numberToTerraform(struct!.serviceSetType),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    type: cdktf.numberToTerraform(struct!.type),
    custom_service: cdktf.listMapper(cfwAclRuleV1ServiceCustomServiceToTerraform, true)(struct!.customService),
    service_group_names: cdktf.listMapper(cfwAclRuleV1ServiceServiceGroupNamesToTerraform, true)(struct!.serviceGroupNames),
  }
}


export function cfwAclRuleV1ServiceToHclTerraform(struct?: CfwAclRuleV1ServiceOutputReference | CfwAclRuleV1Service): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_port: {
      value: cdktf.stringToHclTerraform(struct!.destPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predefined_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.predefinedGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    service_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_set_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_set_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_set_type: {
      value: cdktf.numberToHclTerraform(struct!.serviceSetType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_service: {
      value: cdktf.listMapperHcl(cfwAclRuleV1ServiceCustomServiceToHclTerraform, true)(struct!.customService),
      isBlock: true,
      type: "list",
      storageClassType: "CfwAclRuleV1ServiceCustomServiceList",
    },
    service_group_names: {
      value: cdktf.listMapperHcl(cfwAclRuleV1ServiceServiceGroupNamesToHclTerraform, true)(struct!.serviceGroupNames),
      isBlock: true,
      type: "list",
      storageClassType: "CfwAclRuleV1ServiceServiceGroupNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwAclRuleV1ServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CfwAclRuleV1Service | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    if (this._predefinedGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedGroup = this._predefinedGroup;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._serviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroup = this._serviceGroup;
    }
    if (this._serviceSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSetId = this._serviceSetId;
    }
    if (this._serviceSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSetName = this._serviceSetName;
    }
    if (this._serviceSetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSetType = this._serviceSetType;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._customService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customService = this._customService?.internalValue;
    }
    if (this._serviceGroupNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupNames = this._serviceGroupNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwAclRuleV1Service | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destPort = undefined;
      this._predefinedGroup = undefined;
      this._protocol = undefined;
      this._protocols = undefined;
      this._serviceGroup = undefined;
      this._serviceSetId = undefined;
      this._serviceSetName = undefined;
      this._serviceSetType = undefined;
      this._sourcePort = undefined;
      this._type = undefined;
      this._customService.internalValue = undefined;
      this._serviceGroupNames.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destPort = value.destPort;
      this._predefinedGroup = value.predefinedGroup;
      this._protocol = value.protocol;
      this._protocols = value.protocols;
      this._serviceGroup = value.serviceGroup;
      this._serviceSetId = value.serviceSetId;
      this._serviceSetName = value.serviceSetName;
      this._serviceSetType = value.serviceSetType;
      this._sourcePort = value.sourcePort;
      this._type = value.type;
      this._customService.internalValue = value.customService;
      this._serviceGroupNames.internalValue = value.serviceGroupNames;
    }
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: string; 
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }
  public set destPort(value: string) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // predefined_group - computed: false, optional: true, required: false
  private _predefinedGroup?: string[]; 
  public get predefinedGroup() {
    return this.getListAttribute('predefined_group');
  }
  public set predefinedGroup(value: string[]) {
    this._predefinedGroup = value;
  }
  public resetPredefinedGroup() {
    this._predefinedGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedGroupInput() {
    return this._predefinedGroup;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: number[]; 
  public get protocols() {
    return this.getNumberListAttribute('protocols');
  }
  public set protocols(value: number[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string[]; 
  public get serviceGroup() {
    return this.getListAttribute('service_group');
  }
  public set serviceGroup(value: string[]) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // service_set_id - computed: false, optional: true, required: false
  private _serviceSetId?: string; 
  public get serviceSetId() {
    return this.getStringAttribute('service_set_id');
  }
  public set serviceSetId(value: string) {
    this._serviceSetId = value;
  }
  public resetServiceSetId() {
    this._serviceSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSetIdInput() {
    return this._serviceSetId;
  }

  // service_set_name - computed: false, optional: true, required: false
  private _serviceSetName?: string; 
  public get serviceSetName() {
    return this.getStringAttribute('service_set_name');
  }
  public set serviceSetName(value: string) {
    this._serviceSetName = value;
  }
  public resetServiceSetName() {
    this._serviceSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSetNameInput() {
    return this._serviceSetName;
  }

  // service_set_type - computed: false, optional: true, required: false
  private _serviceSetType?: number; 
  public get serviceSetType() {
    return this.getNumberAttribute('service_set_type');
  }
  public set serviceSetType(value: number) {
    this._serviceSetType = value;
  }
  public resetServiceSetType() {
    this._serviceSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSetTypeInput() {
    return this._serviceSetType;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // custom_service - computed: false, optional: true, required: false
  private _customService = new CfwAclRuleV1ServiceCustomServiceList(this, "custom_service", false);
  public get customService() {
    return this._customService;
  }
  public putCustomService(value: CfwAclRuleV1ServiceCustomService[] | cdktf.IResolvable) {
    this._customService.internalValue = value;
  }
  public resetCustomService() {
    this._customService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServiceInput() {
    return this._customService.internalValue;
  }

  // service_group_names - computed: false, optional: true, required: false
  private _serviceGroupNames = new CfwAclRuleV1ServiceServiceGroupNamesList(this, "service_group_names", false);
  public get serviceGroupNames() {
    return this._serviceGroupNames;
  }
  public putServiceGroupNames(value: CfwAclRuleV1ServiceServiceGroupNames[] | cdktf.IResolvable) {
    this._serviceGroupNames.internalValue = value;
  }
  public resetServiceGroupNames() {
    this._serviceGroupNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNamesInput() {
    return this._serviceGroupNames.internalValue;
  }
}
export interface CfwAclRuleV1SourceRegionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}
  */
  readonly regionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}
  */
  readonly regionType?: number;
}

export function cfwAclRuleV1SourceRegionListStructToTerraform(struct?: CfwAclRuleV1SourceRegionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_id: cdktf.stringToTerraform(struct!.regionId),
    region_type: cdktf.numberToTerraform(struct!.regionType),
  }
}


export function cfwAclRuleV1SourceRegionListStructToHclTerraform(struct?: CfwAclRuleV1SourceRegionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_type: {
      value: cdktf.numberToHclTerraform(struct!.regionType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwAclRuleV1SourceRegionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CfwAclRuleV1SourceRegionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._regionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionType = this._regionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwAclRuleV1SourceRegionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionId = undefined;
      this._regionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionId = value.regionId;
      this._regionType = value.regionType;
    }
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_type - computed: false, optional: true, required: false
  private _regionType?: number; 
  public get regionType() {
    return this.getNumberAttribute('region_type');
  }
  public set regionType(value: number) {
    this._regionType = value;
  }
  public resetRegionType() {
    this._regionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionTypeInput() {
    return this._regionType;
  }
}

export class CfwAclRuleV1SourceRegionListStructList extends cdktf.ComplexList {
  public internalValue? : CfwAclRuleV1SourceRegionListStruct[] | cdktf.IResolvable

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
  public get(index: number): CfwAclRuleV1SourceRegionListStructOutputReference {
    return new CfwAclRuleV1SourceRegionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CfwAclRuleV1Source {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}
  */
  readonly addressGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}
  */
  readonly addressSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}
  */
  readonly addressSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}
  */
  readonly addressSetType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}
  */
  readonly addressType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}
  */
  readonly domainAddressName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}
  */
  readonly domainSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}
  */
  readonly domainSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}
  */
  readonly ipAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}
  */
  readonly predefinedGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}
  */
  readonly regionListJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}
  */
  readonly type: number;
  /**
  * region_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}
  */
  readonly regionList?: CfwAclRuleV1SourceRegionListStruct[] | cdktf.IResolvable;
}

export function cfwAclRuleV1SourceToTerraform(struct?: CfwAclRuleV1SourceOutputReference | CfwAclRuleV1Source): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressGroup),
    address_set_id: cdktf.stringToTerraform(struct!.addressSetId),
    address_set_name: cdktf.stringToTerraform(struct!.addressSetName),
    address_set_type: cdktf.numberToTerraform(struct!.addressSetType),
    address_type: cdktf.numberToTerraform(struct!.addressType),
    domain_address_name: cdktf.stringToTerraform(struct!.domainAddressName),
    domain_set_id: cdktf.stringToTerraform(struct!.domainSetId),
    domain_set_name: cdktf.stringToTerraform(struct!.domainSetName),
    ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddress),
    predefined_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predefinedGroup),
    region_list_json: cdktf.stringToTerraform(struct!.regionListJson),
    type: cdktf.numberToTerraform(struct!.type),
    region_list: cdktf.listMapper(cfwAclRuleV1SourceRegionListStructToTerraform, true)(struct!.regionList),
  }
}


export function cfwAclRuleV1SourceToHclTerraform(struct?: CfwAclRuleV1SourceOutputReference | CfwAclRuleV1Source): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    address_set_id: {
      value: cdktf.stringToHclTerraform(struct!.addressSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_set_name: {
      value: cdktf.stringToHclTerraform(struct!.addressSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_set_type: {
      value: cdktf.numberToHclTerraform(struct!.addressSetType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    address_type: {
      value: cdktf.numberToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_address_name: {
      value: cdktf.stringToHclTerraform(struct!.domainAddressName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_set_id: {
      value: cdktf.stringToHclTerraform(struct!.domainSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_set_name: {
      value: cdktf.stringToHclTerraform(struct!.domainSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    predefined_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.predefinedGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region_list_json: {
      value: cdktf.stringToHclTerraform(struct!.regionListJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_list: {
      value: cdktf.listMapperHcl(cfwAclRuleV1SourceRegionListStructToHclTerraform, true)(struct!.regionList),
      isBlock: true,
      type: "list",
      storageClassType: "CfwAclRuleV1SourceRegionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwAclRuleV1SourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CfwAclRuleV1Source | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressGroup = this._addressGroup;
    }
    if (this._addressSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSetId = this._addressSetId;
    }
    if (this._addressSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSetName = this._addressSetName;
    }
    if (this._addressSetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSetType = this._addressSetType;
    }
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._domainAddressName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAddressName = this._domainAddressName;
    }
    if (this._domainSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSetId = this._domainSetId;
    }
    if (this._domainSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSetName = this._domainSetName;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._predefinedGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedGroup = this._predefinedGroup;
    }
    if (this._regionListJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionListJson = this._regionListJson;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._regionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionList = this._regionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwAclRuleV1Source | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._addressGroup = undefined;
      this._addressSetId = undefined;
      this._addressSetName = undefined;
      this._addressSetType = undefined;
      this._addressType = undefined;
      this._domainAddressName = undefined;
      this._domainSetId = undefined;
      this._domainSetName = undefined;
      this._ipAddress = undefined;
      this._predefinedGroup = undefined;
      this._regionListJson = undefined;
      this._type = undefined;
      this._regionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._addressGroup = value.addressGroup;
      this._addressSetId = value.addressSetId;
      this._addressSetName = value.addressSetName;
      this._addressSetType = value.addressSetType;
      this._addressType = value.addressType;
      this._domainAddressName = value.domainAddressName;
      this._domainSetId = value.domainSetId;
      this._domainSetName = value.domainSetName;
      this._ipAddress = value.ipAddress;
      this._predefinedGroup = value.predefinedGroup;
      this._regionListJson = value.regionListJson;
      this._type = value.type;
      this._regionList.internalValue = value.regionList;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_group - computed: false, optional: true, required: false
  private _addressGroup?: string[]; 
  public get addressGroup() {
    return this.getListAttribute('address_group');
  }
  public set addressGroup(value: string[]) {
    this._addressGroup = value;
  }
  public resetAddressGroup() {
    this._addressGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupInput() {
    return this._addressGroup;
  }

  // address_set_id - computed: false, optional: true, required: false
  private _addressSetId?: string; 
  public get addressSetId() {
    return this.getStringAttribute('address_set_id');
  }
  public set addressSetId(value: string) {
    this._addressSetId = value;
  }
  public resetAddressSetId() {
    this._addressSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetIdInput() {
    return this._addressSetId;
  }

  // address_set_name - computed: false, optional: true, required: false
  private _addressSetName?: string; 
  public get addressSetName() {
    return this.getStringAttribute('address_set_name');
  }
  public set addressSetName(value: string) {
    this._addressSetName = value;
  }
  public resetAddressSetName() {
    this._addressSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetNameInput() {
    return this._addressSetName;
  }

  // address_set_type - computed: false, optional: true, required: false
  private _addressSetType?: number; 
  public get addressSetType() {
    return this.getNumberAttribute('address_set_type');
  }
  public set addressSetType(value: number) {
    this._addressSetType = value;
  }
  public resetAddressSetType() {
    this._addressSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetTypeInput() {
    return this._addressSetType;
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: number; 
  public get addressType() {
    return this.getNumberAttribute('address_type');
  }
  public set addressType(value: number) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // domain_address_name - computed: false, optional: true, required: false
  private _domainAddressName?: string; 
  public get domainAddressName() {
    return this.getStringAttribute('domain_address_name');
  }
  public set domainAddressName(value: string) {
    this._domainAddressName = value;
  }
  public resetDomainAddressName() {
    this._domainAddressName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAddressNameInput() {
    return this._domainAddressName;
  }

  // domain_set_id - computed: false, optional: true, required: false
  private _domainSetId?: string; 
  public get domainSetId() {
    return this.getStringAttribute('domain_set_id');
  }
  public set domainSetId(value: string) {
    this._domainSetId = value;
  }
  public resetDomainSetId() {
    this._domainSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSetIdInput() {
    return this._domainSetId;
  }

  // domain_set_name - computed: false, optional: true, required: false
  private _domainSetName?: string; 
  public get domainSetName() {
    return this.getStringAttribute('domain_set_name');
  }
  public set domainSetName(value: string) {
    this._domainSetName = value;
  }
  public resetDomainSetName() {
    this._domainSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSetNameInput() {
    return this._domainSetName;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string[]; 
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }
  public set ipAddress(value: string[]) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // predefined_group - computed: false, optional: true, required: false
  private _predefinedGroup?: string[]; 
  public get predefinedGroup() {
    return this.getListAttribute('predefined_group');
  }
  public set predefinedGroup(value: string[]) {
    this._predefinedGroup = value;
  }
  public resetPredefinedGroup() {
    this._predefinedGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedGroupInput() {
    return this._predefinedGroup;
  }

  // region_list_json - computed: false, optional: true, required: false
  private _regionListJson?: string; 
  public get regionListJson() {
    return this.getStringAttribute('region_list_json');
  }
  public set regionListJson(value: string) {
    this._regionListJson = value;
  }
  public resetRegionListJson() {
    this._regionListJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListJsonInput() {
    return this._regionListJson;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // region_list - computed: false, optional: true, required: false
  private _regionList = new CfwAclRuleV1SourceRegionListStructList(this, "region_list", false);
  public get regionList() {
    return this._regionList;
  }
  public putRegionList(value: CfwAclRuleV1SourceRegionListStruct[] | cdktf.IResolvable) {
    this._regionList.internalValue = value;
  }
  public resetRegionList() {
    this._regionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListInput() {
    return this._regionList.internalValue;
  }
}
export interface CfwAclRuleV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#create CfwAclRuleV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#delete CfwAclRuleV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#update CfwAclRuleV1#update}
  */
  readonly update?: string;
}

export function cfwAclRuleV1TimeoutsToTerraform(struct?: CfwAclRuleV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cfwAclRuleV1TimeoutsToHclTerraform(struct?: CfwAclRuleV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwAclRuleV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CfwAclRuleV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwAclRuleV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1 opentelekomcloud_cfw_acl_rule_v1}
*/
export class CfwAclRuleV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cfw_acl_rule_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwAclRuleV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwAclRuleV1 to import
  * @param importFromId The id of the existing CfwAclRuleV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwAclRuleV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_cfw_acl_rule_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1 opentelekomcloud_cfw_acl_rule_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwAclRuleV1Config
  */
  public constructor(scope: Construct, id: string, config: CfwAclRuleV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cfw_acl_rule_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.54',
        providerVersionConstraint: '1.36.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionType = config.actionType;
    this._addressType = config.addressType;
    this._applications = config.applications;
    this._applicationsJsonString = config.applicationsJsonString;
    this._description = config.description;
    this._direction = config.direction;
    this._longConnectEnable = config.longConnectEnable;
    this._longConnectTime = config.longConnectTime;
    this._longConnectTimeHour = config.longConnectTimeHour;
    this._longConnectTimeMinute = config.longConnectTimeMinute;
    this._longConnectTimeSecond = config.longConnectTimeSecond;
    this._name = config.name;
    this._objectId = config.objectId;
    this._status = config.status;
    this._type = config.type;
    this._destination.internalValue = config.destination;
    this._sequence.internalValue = config.sequence;
    this._service.internalValue = config.service;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: false, required: true
  private _actionType?: number; 
  public get actionType() {
    return this.getNumberAttribute('action_type');
  }
  public set actionType(value: number) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // address_type - computed: false, optional: false, required: true
  private _addressType?: number; 
  public get addressType() {
    return this.getNumberAttribute('address_type');
  }
  public set addressType(value: number) {
    this._addressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // applications_json_string - computed: false, optional: true, required: false
  private _applicationsJsonString?: string; 
  public get applicationsJsonString() {
    return this.getStringAttribute('applications_json_string');
  }
  public set applicationsJsonString(value: string) {
    this._applicationsJsonString = value;
  }
  public resetApplicationsJsonString() {
    this._applicationsJsonString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsJsonStringInput() {
    return this._applicationsJsonString;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

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

  // direction - computed: false, optional: true, required: false
  private _direction?: number; 
  public get direction() {
    return this.getNumberAttribute('direction');
  }
  public set direction(value: number) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_open_time - computed: true, optional: false, required: false
  public get lastOpenTime() {
    return this.getStringAttribute('last_open_time');
  }

  // long_connect_enable - computed: false, optional: false, required: true
  private _longConnectEnable?: number; 
  public get longConnectEnable() {
    return this.getNumberAttribute('long_connect_enable');
  }
  public set longConnectEnable(value: number) {
    this._longConnectEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longConnectEnableInput() {
    return this._longConnectEnable;
  }

  // long_connect_time - computed: false, optional: true, required: false
  private _longConnectTime?: number; 
  public get longConnectTime() {
    return this.getNumberAttribute('long_connect_time');
  }
  public set longConnectTime(value: number) {
    this._longConnectTime = value;
  }
  public resetLongConnectTime() {
    this._longConnectTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longConnectTimeInput() {
    return this._longConnectTime;
  }

  // long_connect_time_hour - computed: false, optional: true, required: false
  private _longConnectTimeHour?: number; 
  public get longConnectTimeHour() {
    return this.getNumberAttribute('long_connect_time_hour');
  }
  public set longConnectTimeHour(value: number) {
    this._longConnectTimeHour = value;
  }
  public resetLongConnectTimeHour() {
    this._longConnectTimeHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longConnectTimeHourInput() {
    return this._longConnectTimeHour;
  }

  // long_connect_time_minute - computed: false, optional: true, required: false
  private _longConnectTimeMinute?: number; 
  public get longConnectTimeMinute() {
    return this.getNumberAttribute('long_connect_time_minute');
  }
  public set longConnectTimeMinute(value: number) {
    this._longConnectTimeMinute = value;
  }
  public resetLongConnectTimeMinute() {
    this._longConnectTimeMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longConnectTimeMinuteInput() {
    return this._longConnectTimeMinute;
  }

  // long_connect_time_second - computed: false, optional: true, required: false
  private _longConnectTimeSecond?: number; 
  public get longConnectTimeSecond() {
    return this.getNumberAttribute('long_connect_time_second');
  }
  public set longConnectTimeSecond(value: number) {
    this._longConnectTimeSecond = value;
  }
  public resetLongConnectTimeSecond() {
    this._longConnectTimeSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longConnectTimeSecondInput() {
    return this._longConnectTimeSecond;
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

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new CfwAclRuleV1DestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: CfwAclRuleV1Destination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // sequence - computed: false, optional: false, required: true
  private _sequence = new CfwAclRuleV1SequenceOutputReference(this, "sequence");
  public get sequence() {
    return this._sequence;
  }
  public putSequence(value: CfwAclRuleV1Sequence) {
    this._sequence.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence.internalValue;
  }

  // service - computed: false, optional: false, required: true
  private _service = new CfwAclRuleV1ServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: CfwAclRuleV1Service) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new CfwAclRuleV1SourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: CfwAclRuleV1Source) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CfwAclRuleV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CfwAclRuleV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_type: cdktf.numberToTerraform(this._actionType),
      address_type: cdktf.numberToTerraform(this._addressType),
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      applications_json_string: cdktf.stringToTerraform(this._applicationsJsonString),
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.numberToTerraform(this._direction),
      long_connect_enable: cdktf.numberToTerraform(this._longConnectEnable),
      long_connect_time: cdktf.numberToTerraform(this._longConnectTime),
      long_connect_time_hour: cdktf.numberToTerraform(this._longConnectTimeHour),
      long_connect_time_minute: cdktf.numberToTerraform(this._longConnectTimeMinute),
      long_connect_time_second: cdktf.numberToTerraform(this._longConnectTimeSecond),
      name: cdktf.stringToTerraform(this._name),
      object_id: cdktf.stringToTerraform(this._objectId),
      status: cdktf.numberToTerraform(this._status),
      type: cdktf.numberToTerraform(this._type),
      destination: cfwAclRuleV1DestinationToTerraform(this._destination.internalValue),
      sequence: cfwAclRuleV1SequenceToTerraform(this._sequence.internalValue),
      service: cfwAclRuleV1ServiceToTerraform(this._service.internalValue),
      source: cfwAclRuleV1SourceToTerraform(this._source.internalValue),
      timeouts: cfwAclRuleV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.numberToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      address_type: {
        value: cdktf.numberToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      applications_json_string: {
        value: cdktf.stringToHclTerraform(this._applicationsJsonString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.numberToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      long_connect_enable: {
        value: cdktf.numberToHclTerraform(this._longConnectEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      long_connect_time: {
        value: cdktf.numberToHclTerraform(this._longConnectTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      long_connect_time_hour: {
        value: cdktf.numberToHclTerraform(this._longConnectTimeHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      long_connect_time_minute: {
        value: cdktf.numberToHclTerraform(this._longConnectTimeMinute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      long_connect_time_second: {
        value: cdktf.numberToHclTerraform(this._longConnectTimeSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destination: {
        value: cfwAclRuleV1DestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CfwAclRuleV1DestinationList",
      },
      sequence: {
        value: cfwAclRuleV1SequenceToHclTerraform(this._sequence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CfwAclRuleV1SequenceList",
      },
      service: {
        value: cfwAclRuleV1ServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CfwAclRuleV1ServiceList",
      },
      source: {
        value: cfwAclRuleV1SourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CfwAclRuleV1SourceList",
      },
      timeouts: {
        value: cfwAclRuleV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CfwAclRuleV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
