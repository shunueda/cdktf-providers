// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RocketmqInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#auto_renew RocketmqInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#auto_renew_period RocketmqInstance#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#auto_renew_period_unit RocketmqInstance#auto_renew_period_unit}
  */
  readonly autoRenewPeriodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#commodity_code RocketmqInstance#commodity_code}
  */
  readonly commodityCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#id RocketmqInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#instance_name RocketmqInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#ip_whitelists RocketmqInstance#ip_whitelists}
  */
  readonly ipWhitelists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#payment_type RocketmqInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#period RocketmqInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#period_unit RocketmqInstance#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#remark RocketmqInstance#remark}
  */
  readonly remark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#resource_group_id RocketmqInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#series_code RocketmqInstance#series_code}
  */
  readonly seriesCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#service_code RocketmqInstance#service_code}
  */
  readonly serviceCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#sub_series_code RocketmqInstance#sub_series_code}
  */
  readonly subSeriesCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#tags RocketmqInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * acl_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#acl_info RocketmqInstance#acl_info}
  */
  readonly aclInfo?: RocketmqInstanceAclInfo;
  /**
  * network_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#network_info RocketmqInstance#network_info}
  */
  readonly networkInfo: RocketmqInstanceNetworkInfo;
  /**
  * product_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#product_info RocketmqInstance#product_info}
  */
  readonly productInfo?: RocketmqInstanceProductInfo;
  /**
  * software block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#software RocketmqInstance#software}
  */
  readonly softwareAttribute?: RocketmqInstanceSoftware;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#timeouts RocketmqInstance#timeouts}
  */
  readonly timeouts?: RocketmqInstanceTimeouts;
}
export interface RocketmqInstanceAclInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#acl_types RocketmqInstance#acl_types}
  */
  readonly aclTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#default_vpc_auth_free RocketmqInstance#default_vpc_auth_free}
  */
  readonly defaultVpcAuthFree?: boolean | cdktf.IResolvable;
}

export function rocketmqInstanceAclInfoToTerraform(struct?: RocketmqInstanceAclInfoOutputReference | RocketmqInstanceAclInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aclTypes),
    default_vpc_auth_free: cdktf.booleanToTerraform(struct!.defaultVpcAuthFree),
  }
}


export function rocketmqInstanceAclInfoToHclTerraform(struct?: RocketmqInstanceAclInfoOutputReference | RocketmqInstanceAclInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aclTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_vpc_auth_free: {
      value: cdktf.booleanToHclTerraform(struct!.defaultVpcAuthFree),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RocketmqInstanceAclInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RocketmqInstanceAclInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclTypes = this._aclTypes;
    }
    if (this._defaultVpcAuthFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVpcAuthFree = this._defaultVpcAuthFree;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RocketmqInstanceAclInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclTypes = undefined;
      this._defaultVpcAuthFree = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclTypes = value.aclTypes;
      this._defaultVpcAuthFree = value.defaultVpcAuthFree;
    }
  }

  // acl_types - computed: true, optional: true, required: false
  private _aclTypes?: string[]; 
  public get aclTypes() {
    return this.getListAttribute('acl_types');
  }
  public set aclTypes(value: string[]) {
    this._aclTypes = value;
  }
  public resetAclTypes() {
    this._aclTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclTypesInput() {
    return this._aclTypes;
  }

  // default_vpc_auth_free - computed: true, optional: true, required: false
  private _defaultVpcAuthFree?: boolean | cdktf.IResolvable; 
  public get defaultVpcAuthFree() {
    return this.getBooleanAttribute('default_vpc_auth_free');
  }
  public set defaultVpcAuthFree(value: boolean | cdktf.IResolvable) {
    this._defaultVpcAuthFree = value;
  }
  public resetDefaultVpcAuthFree() {
    this._defaultVpcAuthFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVpcAuthFreeInput() {
    return this._defaultVpcAuthFree;
  }
}
export interface RocketmqInstanceNetworkInfoEndpoints {
}

export function rocketmqInstanceNetworkInfoEndpointsToTerraform(struct?: RocketmqInstanceNetworkInfoEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rocketmqInstanceNetworkInfoEndpointsToHclTerraform(struct?: RocketmqInstanceNetworkInfoEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RocketmqInstanceNetworkInfoEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RocketmqInstanceNetworkInfoEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RocketmqInstanceNetworkInfoEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }

  // ip_white_list - computed: true, optional: false, required: false
  public get ipWhiteList() {
    return this.getListAttribute('ip_white_list');
  }
}

export class RocketmqInstanceNetworkInfoEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): RocketmqInstanceNetworkInfoEndpointsOutputReference {
    return new RocketmqInstanceNetworkInfoEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RocketmqInstanceNetworkInfoInternetInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#flow_out_bandwidth RocketmqInstance#flow_out_bandwidth}
  */
  readonly flowOutBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#flow_out_type RocketmqInstance#flow_out_type}
  */
  readonly flowOutType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#internet_spec RocketmqInstance#internet_spec}
  */
  readonly internetSpec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#ip_whitelist RocketmqInstance#ip_whitelist}
  */
  readonly ipWhitelist?: string[];
}

export function rocketmqInstanceNetworkInfoInternetInfoToTerraform(struct?: RocketmqInstanceNetworkInfoInternetInfoOutputReference | RocketmqInstanceNetworkInfoInternetInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_out_bandwidth: cdktf.numberToTerraform(struct!.flowOutBandwidth),
    flow_out_type: cdktf.stringToTerraform(struct!.flowOutType),
    internet_spec: cdktf.stringToTerraform(struct!.internetSpec),
    ip_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipWhitelist),
  }
}


export function rocketmqInstanceNetworkInfoInternetInfoToHclTerraform(struct?: RocketmqInstanceNetworkInfoInternetInfoOutputReference | RocketmqInstanceNetworkInfoInternetInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_out_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.flowOutBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_out_type: {
      value: cdktf.stringToHclTerraform(struct!.flowOutType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_spec: {
      value: cdktf.stringToHclTerraform(struct!.internetSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_whitelist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipWhitelist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RocketmqInstanceNetworkInfoInternetInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RocketmqInstanceNetworkInfoInternetInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowOutBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowOutBandwidth = this._flowOutBandwidth;
    }
    if (this._flowOutType !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowOutType = this._flowOutType;
    }
    if (this._internetSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetSpec = this._internetSpec;
    }
    if (this._ipWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipWhitelist = this._ipWhitelist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RocketmqInstanceNetworkInfoInternetInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flowOutBandwidth = undefined;
      this._flowOutType = undefined;
      this._internetSpec = undefined;
      this._ipWhitelist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flowOutBandwidth = value.flowOutBandwidth;
      this._flowOutType = value.flowOutType;
      this._internetSpec = value.internetSpec;
      this._ipWhitelist = value.ipWhitelist;
    }
  }

  // flow_out_bandwidth - computed: false, optional: true, required: false
  private _flowOutBandwidth?: number; 
  public get flowOutBandwidth() {
    return this.getNumberAttribute('flow_out_bandwidth');
  }
  public set flowOutBandwidth(value: number) {
    this._flowOutBandwidth = value;
  }
  public resetFlowOutBandwidth() {
    this._flowOutBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowOutBandwidthInput() {
    return this._flowOutBandwidth;
  }

  // flow_out_type - computed: false, optional: false, required: true
  private _flowOutType?: string; 
  public get flowOutType() {
    return this.getStringAttribute('flow_out_type');
  }
  public set flowOutType(value: string) {
    this._flowOutType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowOutTypeInput() {
    return this._flowOutType;
  }

  // internet_spec - computed: false, optional: false, required: true
  private _internetSpec?: string; 
  public get internetSpec() {
    return this.getStringAttribute('internet_spec');
  }
  public set internetSpec(value: string) {
    this._internetSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSpecInput() {
    return this._internetSpec;
  }

  // ip_whitelist - computed: false, optional: true, required: false
  private _ipWhitelist?: string[]; 
  public get ipWhitelist() {
    return this.getListAttribute('ip_whitelist');
  }
  public set ipWhitelist(value: string[]) {
    this._ipWhitelist = value;
  }
  public resetIpWhitelist() {
    this._ipWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhitelistInput() {
    return this._ipWhitelist;
  }
}
export interface RocketmqInstanceNetworkInfoVpcInfoVswitches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#vswitch_id RocketmqInstance#vswitch_id}
  */
  readonly vswitchId?: string;
}

export function rocketmqInstanceNetworkInfoVpcInfoVswitchesToTerraform(struct?: RocketmqInstanceNetworkInfoVpcInfoVswitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
  }
}


export function rocketmqInstanceNetworkInfoVpcInfoVswitchesToHclTerraform(struct?: RocketmqInstanceNetworkInfoVpcInfoVswitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RocketmqInstanceNetworkInfoVpcInfoVswitchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RocketmqInstanceNetworkInfoVpcInfoVswitches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RocketmqInstanceNetworkInfoVpcInfoVswitches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vswitchId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vswitchId = value.vswitchId;
    }
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }
}

export class RocketmqInstanceNetworkInfoVpcInfoVswitchesList extends cdktf.ComplexList {
  public internalValue? : RocketmqInstanceNetworkInfoVpcInfoVswitches[] | cdktf.IResolvable

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
  public get(index: number): RocketmqInstanceNetworkInfoVpcInfoVswitchesOutputReference {
    return new RocketmqInstanceNetworkInfoVpcInfoVswitchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RocketmqInstanceNetworkInfoVpcInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#security_group_ids RocketmqInstance#security_group_ids}
  */
  readonly securityGroupIds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#vpc_id RocketmqInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#vswitch_id RocketmqInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * vswitches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#vswitches RocketmqInstance#vswitches}
  */
  readonly vswitches?: RocketmqInstanceNetworkInfoVpcInfoVswitches[] | cdktf.IResolvable;
}

export function rocketmqInstanceNetworkInfoVpcInfoToTerraform(struct?: RocketmqInstanceNetworkInfoVpcInfoOutputReference | RocketmqInstanceNetworkInfoVpcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.stringToTerraform(struct!.securityGroupIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
    vswitches: cdktf.listMapper(rocketmqInstanceNetworkInfoVpcInfoVswitchesToTerraform, true)(struct!.vswitches),
  }
}


export function rocketmqInstanceNetworkInfoVpcInfoToHclTerraform(struct?: RocketmqInstanceNetworkInfoVpcInfoOutputReference | RocketmqInstanceNetworkInfoVpcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_ids: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupIds),
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
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitches: {
      value: cdktf.listMapperHcl(rocketmqInstanceNetworkInfoVpcInfoVswitchesToHclTerraform, true)(struct!.vswitches),
      isBlock: true,
      type: "list",
      storageClassType: "RocketmqInstanceNetworkInfoVpcInfoVswitchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RocketmqInstanceNetworkInfoVpcInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RocketmqInstanceNetworkInfoVpcInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    if (this._vswitches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitches = this._vswitches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RocketmqInstanceNetworkInfoVpcInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._vpcId = undefined;
      this._vswitchId = undefined;
      this._vswitches.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._vpcId = value.vpcId;
      this._vswitchId = value.vswitchId;
      this._vswitches.internalValue = value.vswitches;
    }
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string; 
  public get securityGroupIds() {
    return this.getStringAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
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

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // vswitches - computed: false, optional: true, required: false
  private _vswitches = new RocketmqInstanceNetworkInfoVpcInfoVswitchesList(this, "vswitches", false);
  public get vswitches() {
    return this._vswitches;
  }
  public putVswitches(value: RocketmqInstanceNetworkInfoVpcInfoVswitches[] | cdktf.IResolvable) {
    this._vswitches.internalValue = value;
  }
  public resetVswitches() {
    this._vswitches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchesInput() {
    return this._vswitches.internalValue;
  }
}
export interface RocketmqInstanceNetworkInfo {
  /**
  * internet_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#internet_info RocketmqInstance#internet_info}
  */
  readonly internetInfo: RocketmqInstanceNetworkInfoInternetInfo;
  /**
  * vpc_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#vpc_info RocketmqInstance#vpc_info}
  */
  readonly vpcInfo: RocketmqInstanceNetworkInfoVpcInfo;
}

export function rocketmqInstanceNetworkInfoToTerraform(struct?: RocketmqInstanceNetworkInfoOutputReference | RocketmqInstanceNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internet_info: rocketmqInstanceNetworkInfoInternetInfoToTerraform(struct!.internetInfo),
    vpc_info: rocketmqInstanceNetworkInfoVpcInfoToTerraform(struct!.vpcInfo),
  }
}


export function rocketmqInstanceNetworkInfoToHclTerraform(struct?: RocketmqInstanceNetworkInfoOutputReference | RocketmqInstanceNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internet_info: {
      value: rocketmqInstanceNetworkInfoInternetInfoToHclTerraform(struct!.internetInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RocketmqInstanceNetworkInfoInternetInfoList",
    },
    vpc_info: {
      value: rocketmqInstanceNetworkInfoVpcInfoToHclTerraform(struct!.vpcInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RocketmqInstanceNetworkInfoVpcInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RocketmqInstanceNetworkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RocketmqInstanceNetworkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internetInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetInfo = this._internetInfo?.internalValue;
    }
    if (this._vpcInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcInfo = this._vpcInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RocketmqInstanceNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internetInfo.internalValue = undefined;
      this._vpcInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internetInfo.internalValue = value.internetInfo;
      this._vpcInfo.internalValue = value.vpcInfo;
    }
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new RocketmqInstanceNetworkInfoEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // internet_info - computed: false, optional: false, required: true
  private _internetInfo = new RocketmqInstanceNetworkInfoInternetInfoOutputReference(this, "internet_info");
  public get internetInfo() {
    return this._internetInfo;
  }
  public putInternetInfo(value: RocketmqInstanceNetworkInfoInternetInfo) {
    this._internetInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internetInfoInput() {
    return this._internetInfo.internalValue;
  }

  // vpc_info - computed: false, optional: false, required: true
  private _vpcInfo = new RocketmqInstanceNetworkInfoVpcInfoOutputReference(this, "vpc_info");
  public get vpcInfo() {
    return this._vpcInfo;
  }
  public putVpcInfo(value: RocketmqInstanceNetworkInfoVpcInfo) {
    this._vpcInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInfoInput() {
    return this._vpcInfo.internalValue;
  }
}
export interface RocketmqInstanceProductInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#auto_scaling RocketmqInstance#auto_scaling}
  */
  readonly autoScaling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#message_retention_time RocketmqInstance#message_retention_time}
  */
  readonly messageRetentionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#msg_process_spec RocketmqInstance#msg_process_spec}
  */
  readonly msgProcessSpec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#send_receive_ratio RocketmqInstance#send_receive_ratio}
  */
  readonly sendReceiveRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#storage_encryption RocketmqInstance#storage_encryption}
  */
  readonly storageEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#storage_secret_key RocketmqInstance#storage_secret_key}
  */
  readonly storageSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#trace_on RocketmqInstance#trace_on}
  */
  readonly traceOn?: boolean | cdktf.IResolvable;
}

export function rocketmqInstanceProductInfoToTerraform(struct?: RocketmqInstanceProductInfoOutputReference | RocketmqInstanceProductInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaling: cdktf.booleanToTerraform(struct!.autoScaling),
    message_retention_time: cdktf.numberToTerraform(struct!.messageRetentionTime),
    msg_process_spec: cdktf.stringToTerraform(struct!.msgProcessSpec),
    send_receive_ratio: cdktf.numberToTerraform(struct!.sendReceiveRatio),
    storage_encryption: cdktf.booleanToTerraform(struct!.storageEncryption),
    storage_secret_key: cdktf.stringToTerraform(struct!.storageSecretKey),
    trace_on: cdktf.booleanToTerraform(struct!.traceOn),
  }
}


export function rocketmqInstanceProductInfoToHclTerraform(struct?: RocketmqInstanceProductInfoOutputReference | RocketmqInstanceProductInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaling: {
      value: cdktf.booleanToHclTerraform(struct!.autoScaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.messageRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_process_spec: {
      value: cdktf.stringToHclTerraform(struct!.msgProcessSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_receive_ratio: {
      value: cdktf.numberToHclTerraform(struct!.sendReceiveRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.storageEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.storageSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trace_on: {
      value: cdktf.booleanToHclTerraform(struct!.traceOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RocketmqInstanceProductInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RocketmqInstanceProductInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaling = this._autoScaling;
    }
    if (this._messageRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageRetentionTime = this._messageRetentionTime;
    }
    if (this._msgProcessSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProcessSpec = this._msgProcessSpec;
    }
    if (this._sendReceiveRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendReceiveRatio = this._sendReceiveRatio;
    }
    if (this._storageEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageEncryption = this._storageEncryption;
    }
    if (this._storageSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSecretKey = this._storageSecretKey;
    }
    if (this._traceOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceOn = this._traceOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RocketmqInstanceProductInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScaling = undefined;
      this._messageRetentionTime = undefined;
      this._msgProcessSpec = undefined;
      this._sendReceiveRatio = undefined;
      this._storageEncryption = undefined;
      this._storageSecretKey = undefined;
      this._traceOn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScaling = value.autoScaling;
      this._messageRetentionTime = value.messageRetentionTime;
      this._msgProcessSpec = value.msgProcessSpec;
      this._sendReceiveRatio = value.sendReceiveRatio;
      this._storageEncryption = value.storageEncryption;
      this._storageSecretKey = value.storageSecretKey;
      this._traceOn = value.traceOn;
    }
  }

  // auto_scaling - computed: false, optional: true, required: false
  private _autoScaling?: boolean | cdktf.IResolvable; 
  public get autoScaling() {
    return this.getBooleanAttribute('auto_scaling');
  }
  public set autoScaling(value: boolean | cdktf.IResolvable) {
    this._autoScaling = value;
  }
  public resetAutoScaling() {
    this._autoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling;
  }

  // message_retention_time - computed: false, optional: true, required: false
  private _messageRetentionTime?: number; 
  public get messageRetentionTime() {
    return this.getNumberAttribute('message_retention_time');
  }
  public set messageRetentionTime(value: number) {
    this._messageRetentionTime = value;
  }
  public resetMessageRetentionTime() {
    this._messageRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionTimeInput() {
    return this._messageRetentionTime;
  }

  // msg_process_spec - computed: false, optional: false, required: true
  private _msgProcessSpec?: string; 
  public get msgProcessSpec() {
    return this.getStringAttribute('msg_process_spec');
  }
  public set msgProcessSpec(value: string) {
    this._msgProcessSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProcessSpecInput() {
    return this._msgProcessSpec;
  }

  // send_receive_ratio - computed: false, optional: true, required: false
  private _sendReceiveRatio?: number; 
  public get sendReceiveRatio() {
    return this.getNumberAttribute('send_receive_ratio');
  }
  public set sendReceiveRatio(value: number) {
    this._sendReceiveRatio = value;
  }
  public resetSendReceiveRatio() {
    this._sendReceiveRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendReceiveRatioInput() {
    return this._sendReceiveRatio;
  }

  // storage_encryption - computed: false, optional: true, required: false
  private _storageEncryption?: boolean | cdktf.IResolvable; 
  public get storageEncryption() {
    return this.getBooleanAttribute('storage_encryption');
  }
  public set storageEncryption(value: boolean | cdktf.IResolvable) {
    this._storageEncryption = value;
  }
  public resetStorageEncryption() {
    this._storageEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptionInput() {
    return this._storageEncryption;
  }

  // storage_secret_key - computed: false, optional: true, required: false
  private _storageSecretKey?: string; 
  public get storageSecretKey() {
    return this.getStringAttribute('storage_secret_key');
  }
  public set storageSecretKey(value: string) {
    this._storageSecretKey = value;
  }
  public resetStorageSecretKey() {
    this._storageSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSecretKeyInput() {
    return this._storageSecretKey;
  }

  // support_auto_scaling - computed: true, optional: false, required: false
  public get supportAutoScaling() {
    return this.getBooleanAttribute('support_auto_scaling');
  }

  // trace_on - computed: true, optional: true, required: false
  private _traceOn?: boolean | cdktf.IResolvable; 
  public get traceOn() {
    return this.getBooleanAttribute('trace_on');
  }
  public set traceOn(value: boolean | cdktf.IResolvable) {
    this._traceOn = value;
  }
  public resetTraceOn() {
    this._traceOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceOnInput() {
    return this._traceOn;
  }
}
export interface RocketmqInstanceSoftware {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#maintain_time RocketmqInstance#maintain_time}
  */
  readonly maintainTime?: string;
}

export function rocketmqInstanceSoftwareToTerraform(struct?: RocketmqInstanceSoftwareOutputReference | RocketmqInstanceSoftware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintain_time: cdktf.stringToTerraform(struct!.maintainTime),
  }
}


export function rocketmqInstanceSoftwareToHclTerraform(struct?: RocketmqInstanceSoftwareOutputReference | RocketmqInstanceSoftware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintain_time: {
      value: cdktf.stringToHclTerraform(struct!.maintainTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RocketmqInstanceSoftwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RocketmqInstanceSoftware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintainTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintainTime = this._maintainTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RocketmqInstanceSoftware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintainTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintainTime = value.maintainTime;
    }
  }

  // maintain_time - computed: true, optional: true, required: false
  private _maintainTime?: string; 
  public get maintainTime() {
    return this.getStringAttribute('maintain_time');
  }
  public set maintainTime(value: string) {
    this._maintainTime = value;
  }
  public resetMaintainTime() {
    this._maintainTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainTimeInput() {
    return this._maintainTime;
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // upgrade_method - computed: true, optional: false, required: false
  public get upgradeMethod() {
    return this.getStringAttribute('upgrade_method');
  }
}
export interface RocketmqInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#create RocketmqInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#delete RocketmqInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#update RocketmqInstance#update}
  */
  readonly update?: string;
}

export function rocketmqInstanceTimeoutsToTerraform(struct?: RocketmqInstanceTimeouts | cdktf.IResolvable): any {
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


export function rocketmqInstanceTimeoutsToHclTerraform(struct?: RocketmqInstanceTimeouts | cdktf.IResolvable): any {
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

export class RocketmqInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RocketmqInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RocketmqInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance alicloud_rocketmq_instance}
*/
export class RocketmqInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rocketmq_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RocketmqInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RocketmqInstance to import
  * @param importFromId The id of the existing RocketmqInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RocketmqInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rocketmq_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rocketmq_instance alicloud_rocketmq_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RocketmqInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RocketmqInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rocketmq_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._autoRenewPeriodUnit = config.autoRenewPeriodUnit;
    this._commodityCode = config.commodityCode;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ipWhitelists = config.ipWhitelists;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._remark = config.remark;
    this._resourceGroupId = config.resourceGroupId;
    this._seriesCode = config.seriesCode;
    this._serviceCode = config.serviceCode;
    this._subSeriesCode = config.subSeriesCode;
    this._tags = config.tags;
    this._aclInfo.internalValue = config.aclInfo;
    this._networkInfo.internalValue = config.networkInfo;
    this._productInfo.internalValue = config.productInfo;
    this._software.internalValue = config.softwareAttribute;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // auto_renew_period_unit - computed: true, optional: true, required: false
  private _autoRenewPeriodUnit?: string; 
  public get autoRenewPeriodUnit() {
    return this.getStringAttribute('auto_renew_period_unit');
  }
  public set autoRenewPeriodUnit(value: string) {
    this._autoRenewPeriodUnit = value;
  }
  public resetAutoRenewPeriodUnit() {
    this._autoRenewPeriodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodUnitInput() {
    return this._autoRenewPeriodUnit;
  }

  // commodity_code - computed: true, optional: true, required: false
  private _commodityCode?: string; 
  public get commodityCode() {
    return this.getStringAttribute('commodity_code');
  }
  public set commodityCode(value: string) {
    this._commodityCode = value;
  }
  public resetCommodityCode() {
    this._commodityCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commodityCodeInput() {
    return this._commodityCode;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ip_whitelists - computed: true, optional: true, required: false
  private _ipWhitelists?: string[]; 
  public get ipWhitelists() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_whitelists'));
  }
  public set ipWhitelists(value: string[]) {
    this._ipWhitelists = value;
  }
  public resetIpWhitelists() {
    this._ipWhitelists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhitelistsInput() {
    return this._ipWhitelists;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: true, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // series_code - computed: false, optional: false, required: true
  private _seriesCode?: string; 
  public get seriesCode() {
    return this.getStringAttribute('series_code');
  }
  public set seriesCode(value: string) {
    this._seriesCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesCodeInput() {
    return this._seriesCode;
  }

  // service_code - computed: false, optional: false, required: true
  private _serviceCode?: string; 
  public get serviceCode() {
    return this.getStringAttribute('service_code');
  }
  public set serviceCode(value: string) {
    this._serviceCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCodeInput() {
    return this._serviceCode;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_series_code - computed: false, optional: false, required: true
  private _subSeriesCode?: string; 
  public get subSeriesCode() {
    return this.getStringAttribute('sub_series_code');
  }
  public set subSeriesCode(value: string) {
    this._subSeriesCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subSeriesCodeInput() {
    return this._subSeriesCode;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // acl_info - computed: false, optional: true, required: false
  private _aclInfo = new RocketmqInstanceAclInfoOutputReference(this, "acl_info");
  public get aclInfo() {
    return this._aclInfo;
  }
  public putAclInfo(value: RocketmqInstanceAclInfo) {
    this._aclInfo.internalValue = value;
  }
  public resetAclInfo() {
    this._aclInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInfoInput() {
    return this._aclInfo.internalValue;
  }

  // network_info - computed: false, optional: false, required: true
  private _networkInfo = new RocketmqInstanceNetworkInfoOutputReference(this, "network_info");
  public get networkInfo() {
    return this._networkInfo;
  }
  public putNetworkInfo(value: RocketmqInstanceNetworkInfo) {
    this._networkInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo.internalValue;
  }

  // product_info - computed: false, optional: true, required: false
  private _productInfo = new RocketmqInstanceProductInfoOutputReference(this, "product_info");
  public get productInfo() {
    return this._productInfo;
  }
  public putProductInfo(value: RocketmqInstanceProductInfo) {
    this._productInfo.internalValue = value;
  }
  public resetProductInfo() {
    this._productInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInfoInput() {
    return this._productInfo.internalValue;
  }

  // software - computed: false, optional: true, required: false
  private _software = new RocketmqInstanceSoftwareOutputReference(this, "software");
  public get softwareAttribute() {
    return this._software;
  }
  public putSoftwareAttribute(value: RocketmqInstanceSoftware) {
    this._software.internalValue = value;
  }
  public resetSoftwareAttribute() {
    this._software.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAttributeInput() {
    return this._software.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RocketmqInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RocketmqInstanceTimeouts) {
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
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      auto_renew_period_unit: cdktf.stringToTerraform(this._autoRenewPeriodUnit),
      commodity_code: cdktf.stringToTerraform(this._commodityCode),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ip_whitelists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipWhitelists),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      remark: cdktf.stringToTerraform(this._remark),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      series_code: cdktf.stringToTerraform(this._seriesCode),
      service_code: cdktf.stringToTerraform(this._serviceCode),
      sub_series_code: cdktf.stringToTerraform(this._subSeriesCode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      acl_info: rocketmqInstanceAclInfoToTerraform(this._aclInfo.internalValue),
      network_info: rocketmqInstanceNetworkInfoToTerraform(this._networkInfo.internalValue),
      product_info: rocketmqInstanceProductInfoToTerraform(this._productInfo.internalValue),
      software: rocketmqInstanceSoftwareToTerraform(this._software.internalValue),
      timeouts: rocketmqInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_renew_period_unit: {
        value: cdktf.stringToHclTerraform(this._autoRenewPeriodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commodity_code: {
        value: cdktf.stringToHclTerraform(this._commodityCode),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_whitelists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipWhitelists),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      series_code: {
        value: cdktf.stringToHclTerraform(this._seriesCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_code: {
        value: cdktf.stringToHclTerraform(this._serviceCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_series_code: {
        value: cdktf.stringToHclTerraform(this._subSeriesCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      acl_info: {
        value: rocketmqInstanceAclInfoToHclTerraform(this._aclInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RocketmqInstanceAclInfoList",
      },
      network_info: {
        value: rocketmqInstanceNetworkInfoToHclTerraform(this._networkInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RocketmqInstanceNetworkInfoList",
      },
      product_info: {
        value: rocketmqInstanceProductInfoToHclTerraform(this._productInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RocketmqInstanceProductInfoList",
      },
      software: {
        value: rocketmqInstanceSoftwareToHclTerraform(this._software.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RocketmqInstanceSoftwareList",
      },
      timeouts: {
        value: rocketmqInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RocketmqInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
