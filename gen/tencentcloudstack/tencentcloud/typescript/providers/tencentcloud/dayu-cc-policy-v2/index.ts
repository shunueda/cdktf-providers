// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuCcPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Business of resource instance. bgpip indicates anti-anti-ip ip; bgp means exclusive package; bgp-multip means shared packet; net indicates anti-anti-ip pro version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#business DayuCcPolicyV2#business}
  */
  readonly business: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#id DayuCcPolicyV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the resource instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#resource_id DayuCcPolicyV2#resource_id}
  */
  readonly resourceId: string;
  /**
  * cc_black_white_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#cc_black_white_ips DayuCcPolicyV2#cc_black_white_ips}
  */
  readonly ccBlackWhiteIps?: DayuCcPolicyV2CcBlackWhiteIps[] | cdktf.IResolvable;
  /**
  * cc_geo_ip_policys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#cc_geo_ip_policys DayuCcPolicyV2#cc_geo_ip_policys}
  */
  readonly ccGeoIpPolicys?: DayuCcPolicyV2CcGeoIpPolicys[] | cdktf.IResolvable;
  /**
  * cc_precision_policys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#cc_precision_policys DayuCcPolicyV2#cc_precision_policys}
  */
  readonly ccPrecisionPolicys?: DayuCcPolicyV2CcPrecisionPolicys[] | cdktf.IResolvable;
  /**
  * cc_precision_req_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#cc_precision_req_limits DayuCcPolicyV2#cc_precision_req_limits}
  */
  readonly ccPrecisionReqLimits?: DayuCcPolicyV2CcPrecisionReqLimits[] | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#thresholds DayuCcPolicyV2#thresholds}
  */
  readonly thresholds?: DayuCcPolicyV2Thresholds[] | cdktf.IResolvable;
}
export interface DayuCcPolicyV2CcBlackWhiteIps {
  /**
  * Blacklist and whitelist IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#black_white_ip DayuCcPolicyV2#black_white_ip}
  */
  readonly blackWhiteIp: string;
  /**
  * Create time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#create_time DayuCcPolicyV2#create_time}
  */
  readonly createTime?: string;
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#domain DayuCcPolicyV2#domain}
  */
  readonly domain: string;
  /**
  * Modify time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#modify_time DayuCcPolicyV2#modify_time}
  */
  readonly modifyTime?: string;
  /**
  * Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#protocol DayuCcPolicyV2#protocol}
  */
  readonly protocol: string;
  /**
  * IP type, value [black(blacklist IP), white (whitelist IP)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#type DayuCcPolicyV2#type}
  */
  readonly type: string;
}

export function dayuCcPolicyV2CcBlackWhiteIpsToTerraform(struct?: DayuCcPolicyV2CcBlackWhiteIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    black_white_ip: cdktf.stringToTerraform(struct!.blackWhiteIp),
    create_time: cdktf.stringToTerraform(struct!.createTime),
    domain: cdktf.stringToTerraform(struct!.domain),
    modify_time: cdktf.stringToTerraform(struct!.modifyTime),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dayuCcPolicyV2CcBlackWhiteIpsToHclTerraform(struct?: DayuCcPolicyV2CcBlackWhiteIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    black_white_ip: {
      value: cdktf.stringToHclTerraform(struct!.blackWhiteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modify_time: {
      value: cdktf.stringToHclTerraform(struct!.modifyTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuCcPolicyV2CcBlackWhiteIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuCcPolicyV2CcBlackWhiteIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackWhiteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackWhiteIp = this._blackWhiteIp;
    }
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._modifyTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyTime = this._modifyTime;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuCcPolicyV2CcBlackWhiteIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blackWhiteIp = undefined;
      this._createTime = undefined;
      this._domain = undefined;
      this._modifyTime = undefined;
      this._protocol = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blackWhiteIp = value.blackWhiteIp;
      this._createTime = value.createTime;
      this._domain = value.domain;
      this._modifyTime = value.modifyTime;
      this._protocol = value.protocol;
      this._type = value.type;
    }
  }

  // black_white_ip - computed: false, optional: false, required: true
  private _blackWhiteIp?: string; 
  public get blackWhiteIp() {
    return this.getStringAttribute('black_white_ip');
  }
  public set blackWhiteIp(value: string) {
    this._blackWhiteIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blackWhiteIpInput() {
    return this._blackWhiteIp;
  }

  // create_time - computed: true, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // modify_time - computed: true, optional: true, required: false
  private _modifyTime?: string; 
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }
  public set modifyTime(value: string) {
    this._modifyTime = value;
  }
  public resetModifyTime() {
    this._modifyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTimeInput() {
    return this._modifyTime;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DayuCcPolicyV2CcBlackWhiteIpsList extends cdktf.ComplexList {
  public internalValue? : DayuCcPolicyV2CcBlackWhiteIps[] | cdktf.IResolvable

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
  public get(index: number): DayuCcPolicyV2CcBlackWhiteIpsOutputReference {
    return new DayuCcPolicyV2CcBlackWhiteIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuCcPolicyV2CcGeoIpPolicys {
  /**
  * User action, drop or arg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#action DayuCcPolicyV2#action}
  */
  readonly action: string;
  /**
  * The list of region IDs that the user selects to block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#area_list DayuCcPolicyV2#area_list}
  */
  readonly areaList?: number[];
  /**
  * Create time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#create_time DayuCcPolicyV2#create_time}
  */
  readonly createTime?: string;
  /**
  * domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#domain DayuCcPolicyV2#domain}
  */
  readonly domain: string;
  /**
  * Modify time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#modify_time DayuCcPolicyV2#modify_time}
  */
  readonly modifyTime?: string;
  /**
  * Protocol, preferably HTTP, HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#protocol DayuCcPolicyV2#protocol}
  */
  readonly protocol: string;
  /**
  * Regional types, divided into china, oversea and customized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#region_type DayuCcPolicyV2#region_type}
  */
  readonly regionType: string;
}

export function dayuCcPolicyV2CcGeoIpPolicysToTerraform(struct?: DayuCcPolicyV2CcGeoIpPolicys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    area_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.areaList),
    create_time: cdktf.stringToTerraform(struct!.createTime),
    domain: cdktf.stringToTerraform(struct!.domain),
    modify_time: cdktf.stringToTerraform(struct!.modifyTime),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    region_type: cdktf.stringToTerraform(struct!.regionType),
  }
}


export function dayuCcPolicyV2CcGeoIpPolicysToHclTerraform(struct?: DayuCcPolicyV2CcGeoIpPolicys | cdktf.IResolvable): any {
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
    area_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.areaList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modify_time: {
      value: cdktf.stringToHclTerraform(struct!.modifyTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_type: {
      value: cdktf.stringToHclTerraform(struct!.regionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuCcPolicyV2CcGeoIpPolicysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuCcPolicyV2CcGeoIpPolicys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._areaList !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaList = this._areaList;
    }
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._modifyTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyTime = this._modifyTime;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._regionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionType = this._regionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuCcPolicyV2CcGeoIpPolicys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._areaList = undefined;
      this._createTime = undefined;
      this._domain = undefined;
      this._modifyTime = undefined;
      this._protocol = undefined;
      this._regionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._areaList = value.areaList;
      this._createTime = value.createTime;
      this._domain = value.domain;
      this._modifyTime = value.modifyTime;
      this._protocol = value.protocol;
      this._regionType = value.regionType;
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

  // area_list - computed: true, optional: true, required: false
  private _areaList?: number[]; 
  public get areaList() {
    return this.getNumberListAttribute('area_list');
  }
  public set areaList(value: number[]) {
    this._areaList = value;
  }
  public resetAreaList() {
    this._areaList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList;
  }

  // create_time - computed: true, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // modify_time - computed: true, optional: true, required: false
  private _modifyTime?: string; 
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }
  public set modifyTime(value: string) {
    this._modifyTime = value;
  }
  public resetModifyTime() {
    this._modifyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTimeInput() {
    return this._modifyTime;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // region_type - computed: false, optional: false, required: true
  private _regionType?: string; 
  public get regionType() {
    return this.getStringAttribute('region_type');
  }
  public set regionType(value: string) {
    this._regionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionTypeInput() {
    return this._regionType;
  }
}

export class DayuCcPolicyV2CcGeoIpPolicysList extends cdktf.ComplexList {
  public internalValue? : DayuCcPolicyV2CcGeoIpPolicys[] | cdktf.IResolvable

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
  public get(index: number): DayuCcPolicyV2CcGeoIpPolicysOutputReference {
    return new DayuCcPolicyV2CcGeoIpPolicysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuCcPolicyV2CcPrecisionPolicysPolicys {
  /**
  * Configuration item types, currently only support value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#field_name DayuCcPolicyV2#field_name}
  */
  readonly fieldName: string;
  /**
  * Configuration fields with the desirable values cgi, ua, cookie, referer, accept, srcip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#field_type DayuCcPolicyV2#field_type}
  */
  readonly fieldType: string;
  /**
  * Configure the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#value DayuCcPolicyV2#value}
  */
  readonly value: string;
  /**
  * Configure the item-value comparison mode, which can be taken as the value of evaluate, not_equal, include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#value_operator DayuCcPolicyV2#value_operator}
  */
  readonly valueOperator: string;
}

export function dayuCcPolicyV2CcPrecisionPolicysPolicysToTerraform(struct?: DayuCcPolicyV2CcPrecisionPolicysPolicys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    value: cdktf.stringToTerraform(struct!.value),
    value_operator: cdktf.stringToTerraform(struct!.valueOperator),
  }
}


export function dayuCcPolicyV2CcPrecisionPolicysPolicysToHclTerraform(struct?: DayuCcPolicyV2CcPrecisionPolicysPolicys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
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
    value_operator: {
      value: cdktf.stringToHclTerraform(struct!.valueOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuCcPolicyV2CcPrecisionPolicysPolicysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuCcPolicyV2CcPrecisionPolicysPolicys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueOperator = this._valueOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuCcPolicyV2CcPrecisionPolicysPolicys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._fieldType = undefined;
      this._value = undefined;
      this._valueOperator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._fieldType = value.fieldType;
      this._value = value.value;
      this._valueOperator = value.valueOperator;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
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

  // value_operator - computed: false, optional: false, required: true
  private _valueOperator?: string; 
  public get valueOperator() {
    return this.getStringAttribute('value_operator');
  }
  public set valueOperator(value: string) {
    this._valueOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueOperatorInput() {
    return this._valueOperator;
  }
}

export class DayuCcPolicyV2CcPrecisionPolicysPolicysList extends cdktf.ComplexList {
  public internalValue? : DayuCcPolicyV2CcPrecisionPolicysPolicys[] | cdktf.IResolvable

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
  public get(index: number): DayuCcPolicyV2CcPrecisionPolicysPolicysOutputReference {
    return new DayuCcPolicyV2CcPrecisionPolicysPolicysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuCcPolicyV2CcPrecisionPolicys {
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#domain DayuCcPolicyV2#domain}
  */
  readonly domain: string;
  /**
  * Ip address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#ip DayuCcPolicyV2#ip}
  */
  readonly ip: string;
  /**
  * Policy mode (discard or captcha).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#policy_action DayuCcPolicyV2#policy_action}
  */
  readonly policyAction: string;
  /**
  * Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#protocol DayuCcPolicyV2#protocol}
  */
  readonly protocol: string;
  /**
  * policys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#policys DayuCcPolicyV2#policys}
  */
  readonly policys: DayuCcPolicyV2CcPrecisionPolicysPolicys[] | cdktf.IResolvable;
}

export function dayuCcPolicyV2CcPrecisionPolicysToTerraform(struct?: DayuCcPolicyV2CcPrecisionPolicys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    ip: cdktf.stringToTerraform(struct!.ip),
    policy_action: cdktf.stringToTerraform(struct!.policyAction),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    policys: cdktf.listMapper(dayuCcPolicyV2CcPrecisionPolicysPolicysToTerraform, true)(struct!.policys),
  }
}


export function dayuCcPolicyV2CcPrecisionPolicysToHclTerraform(struct?: DayuCcPolicyV2CcPrecisionPolicys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_action: {
      value: cdktf.stringToHclTerraform(struct!.policyAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policys: {
      value: cdktf.listMapperHcl(dayuCcPolicyV2CcPrecisionPolicysPolicysToHclTerraform, true)(struct!.policys),
      isBlock: true,
      type: "list",
      storageClassType: "DayuCcPolicyV2CcPrecisionPolicysPolicysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuCcPolicyV2CcPrecisionPolicysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuCcPolicyV2CcPrecisionPolicys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._policyAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyAction = this._policyAction;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._policys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policys = this._policys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuCcPolicyV2CcPrecisionPolicys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._ip = undefined;
      this._policyAction = undefined;
      this._protocol = undefined;
      this._policys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._ip = value.ip;
      this._policyAction = value.policyAction;
      this._protocol = value.protocol;
      this._policys.internalValue = value.policys;
    }
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // policy_action - computed: false, optional: false, required: true
  private _policyAction?: string; 
  public get policyAction() {
    return this.getStringAttribute('policy_action');
  }
  public set policyAction(value: string) {
    this._policyAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyActionInput() {
    return this._policyAction;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // policys - computed: false, optional: false, required: true
  private _policys = new DayuCcPolicyV2CcPrecisionPolicysPolicysList(this, "policys", false);
  public get policys() {
    return this._policys;
  }
  public putPolicys(value: DayuCcPolicyV2CcPrecisionPolicysPolicys[] | cdktf.IResolvable) {
    this._policys.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policysInput() {
    return this._policys.internalValue;
  }
}

export class DayuCcPolicyV2CcPrecisionPolicysList extends cdktf.ComplexList {
  public internalValue? : DayuCcPolicyV2CcPrecisionPolicys[] | cdktf.IResolvable

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
  public get(index: number): DayuCcPolicyV2CcPrecisionPolicysOutputReference {
    return new DayuCcPolicyV2CcPrecisionPolicysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuCcPolicyV2CcPrecisionReqLimitsPolicys {
  /**
  * The frequency limit policy mode, the optional value of arg indicates the verification code, and drop indicates the discard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#action DayuCcPolicyV2#action}
  */
  readonly action: string;
  /**
  * Cookies, one of the three policy entries can only be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#cookie DayuCcPolicyV2#cookie}
  */
  readonly cookie?: string;
  /**
  * The duration of the frequency limit policy can be taken from 1 to 86400 per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#execute_duration DayuCcPolicyV2#execute_duration}
  */
  readonly executeDuration: number;
  /**
  * The policy item is compared, and the optional value include indicates inclusion, and equal means equal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#mode DayuCcPolicyV2#mode}
  */
  readonly mode: string;
  /**
  * Statistical period, take values 1, 10, 30, 60, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#period DayuCcPolicyV2#period}
  */
  readonly period: number;
  /**
  * The number of requests, the value is 1 to 20000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#request_num DayuCcPolicyV2#request_num}
  */
  readonly requestNum: number;
  /**
  * Uri, one of the three policy entries can only be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#uri DayuCcPolicyV2#uri}
  */
  readonly uri?: string;
  /**
  * User-Agent, only one of the three policy entries can be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#user_agent DayuCcPolicyV2#user_agent}
  */
  readonly userAgent?: string;
}

export function dayuCcPolicyV2CcPrecisionReqLimitsPolicysToTerraform(struct?: DayuCcPolicyV2CcPrecisionReqLimitsPolicys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cookie: cdktf.stringToTerraform(struct!.cookie),
    execute_duration: cdktf.numberToTerraform(struct!.executeDuration),
    mode: cdktf.stringToTerraform(struct!.mode),
    period: cdktf.numberToTerraform(struct!.period),
    request_num: cdktf.numberToTerraform(struct!.requestNum),
    uri: cdktf.stringToTerraform(struct!.uri),
    user_agent: cdktf.stringToTerraform(struct!.userAgent),
  }
}


export function dayuCcPolicyV2CcPrecisionReqLimitsPolicysToHclTerraform(struct?: DayuCcPolicyV2CcPrecisionReqLimitsPolicys | cdktf.IResolvable): any {
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
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execute_duration: {
      value: cdktf.numberToHclTerraform(struct!.executeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_num: {
      value: cdktf.numberToHclTerraform(struct!.requestNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_agent: {
      value: cdktf.stringToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuCcPolicyV2CcPrecisionReqLimitsPolicysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuCcPolicyV2CcPrecisionReqLimitsPolicys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._executeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeDuration = this._executeDuration;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._requestNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNum = this._requestNum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuCcPolicyV2CcPrecisionReqLimitsPolicys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cookie = undefined;
      this._executeDuration = undefined;
      this._mode = undefined;
      this._period = undefined;
      this._requestNum = undefined;
      this._uri = undefined;
      this._userAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cookie = value.cookie;
      this._executeDuration = value.executeDuration;
      this._mode = value.mode;
      this._period = value.period;
      this._requestNum = value.requestNum;
      this._uri = value.uri;
      this._userAgent = value.userAgent;
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

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // execute_duration - computed: false, optional: false, required: true
  private _executeDuration?: number; 
  public get executeDuration() {
    return this.getNumberAttribute('execute_duration');
  }
  public set executeDuration(value: number) {
    this._executeDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeDurationInput() {
    return this._executeDuration;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // request_num - computed: false, optional: false, required: true
  private _requestNum?: number; 
  public get requestNum() {
    return this.getNumberAttribute('request_num');
  }
  public set requestNum(value: number) {
    this._requestNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNumInput() {
    return this._requestNum;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }
}

export class DayuCcPolicyV2CcPrecisionReqLimitsPolicysList extends cdktf.ComplexList {
  public internalValue? : DayuCcPolicyV2CcPrecisionReqLimitsPolicys[] | cdktf.IResolvable

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
  public get(index: number): DayuCcPolicyV2CcPrecisionReqLimitsPolicysOutputReference {
    return new DayuCcPolicyV2CcPrecisionReqLimitsPolicysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuCcPolicyV2CcPrecisionReqLimits {
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#domain DayuCcPolicyV2#domain}
  */
  readonly domain: string;
  /**
  * Protection rating, the optional value of default means default policy, loose means loose, and strict means strict.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#level DayuCcPolicyV2#level}
  */
  readonly level: string;
  /**
  * Protocol, preferably HTTP, HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#protocol DayuCcPolicyV2#protocol}
  */
  readonly protocol: string;
  /**
  * policys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#policys DayuCcPolicyV2#policys}
  */
  readonly policys: DayuCcPolicyV2CcPrecisionReqLimitsPolicys[] | cdktf.IResolvable;
}

export function dayuCcPolicyV2CcPrecisionReqLimitsToTerraform(struct?: DayuCcPolicyV2CcPrecisionReqLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    level: cdktf.stringToTerraform(struct!.level),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    policys: cdktf.listMapper(dayuCcPolicyV2CcPrecisionReqLimitsPolicysToTerraform, true)(struct!.policys),
  }
}


export function dayuCcPolicyV2CcPrecisionReqLimitsToHclTerraform(struct?: DayuCcPolicyV2CcPrecisionReqLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policys: {
      value: cdktf.listMapperHcl(dayuCcPolicyV2CcPrecisionReqLimitsPolicysToHclTerraform, true)(struct!.policys),
      isBlock: true,
      type: "list",
      storageClassType: "DayuCcPolicyV2CcPrecisionReqLimitsPolicysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuCcPolicyV2CcPrecisionReqLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuCcPolicyV2CcPrecisionReqLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._policys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policys = this._policys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuCcPolicyV2CcPrecisionReqLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._level = undefined;
      this._protocol = undefined;
      this._policys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._level = value.level;
      this._protocol = value.protocol;
      this._policys.internalValue = value.policys;
    }
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // policys - computed: false, optional: false, required: true
  private _policys = new DayuCcPolicyV2CcPrecisionReqLimitsPolicysList(this, "policys", false);
  public get policys() {
    return this._policys;
  }
  public putPolicys(value: DayuCcPolicyV2CcPrecisionReqLimitsPolicys[] | cdktf.IResolvable) {
    this._policys.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policysInput() {
    return this._policys.internalValue;
  }
}

export class DayuCcPolicyV2CcPrecisionReqLimitsList extends cdktf.ComplexList {
  public internalValue? : DayuCcPolicyV2CcPrecisionReqLimits[] | cdktf.IResolvable

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
  public get(index: number): DayuCcPolicyV2CcPrecisionReqLimitsOutputReference {
    return new DayuCcPolicyV2CcPrecisionReqLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuCcPolicyV2Thresholds {
  /**
  * domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#domain DayuCcPolicyV2#domain}
  */
  readonly domain: string;
  /**
  * Cleaning threshold, -1 indicates that the `default` mode is turned on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#threshold DayuCcPolicyV2#threshold}
  */
  readonly threshold: number;
}

export function dayuCcPolicyV2ThresholdsToTerraform(struct?: DayuCcPolicyV2Thresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function dayuCcPolicyV2ThresholdsToHclTerraform(struct?: DayuCcPolicyV2Thresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuCcPolicyV2ThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuCcPolicyV2Thresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuCcPolicyV2Thresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._threshold = value.threshold;
    }
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

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class DayuCcPolicyV2ThresholdsList extends cdktf.ComplexList {
  public internalValue? : DayuCcPolicyV2Thresholds[] | cdktf.IResolvable

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
  public get(index: number): DayuCcPolicyV2ThresholdsOutputReference {
    return new DayuCcPolicyV2ThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2 tencentcloud_dayu_cc_policy_v2}
*/
export class DayuCcPolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_cc_policy_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuCcPolicyV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuCcPolicyV2 to import
  * @param importFromId The id of the existing DayuCcPolicyV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuCcPolicyV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_cc_policy_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dayu_cc_policy_v2 tencentcloud_dayu_cc_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuCcPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: DayuCcPolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_cc_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._business = config.business;
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._ccBlackWhiteIps.internalValue = config.ccBlackWhiteIps;
    this._ccGeoIpPolicys.internalValue = config.ccGeoIpPolicys;
    this._ccPrecisionPolicys.internalValue = config.ccPrecisionPolicys;
    this._ccPrecisionReqLimits.internalValue = config.ccPrecisionReqLimits;
    this._thresholds.internalValue = config.thresholds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business - computed: false, optional: false, required: true
  private _business?: string; 
  public get business() {
    return this.getStringAttribute('business');
  }
  public set business(value: string) {
    this._business = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInput() {
    return this._business;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // cc_black_white_ips - computed: false, optional: true, required: false
  private _ccBlackWhiteIps = new DayuCcPolicyV2CcBlackWhiteIpsList(this, "cc_black_white_ips", false);
  public get ccBlackWhiteIps() {
    return this._ccBlackWhiteIps;
  }
  public putCcBlackWhiteIps(value: DayuCcPolicyV2CcBlackWhiteIps[] | cdktf.IResolvable) {
    this._ccBlackWhiteIps.internalValue = value;
  }
  public resetCcBlackWhiteIps() {
    this._ccBlackWhiteIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccBlackWhiteIpsInput() {
    return this._ccBlackWhiteIps.internalValue;
  }

  // cc_geo_ip_policys - computed: false, optional: true, required: false
  private _ccGeoIpPolicys = new DayuCcPolicyV2CcGeoIpPolicysList(this, "cc_geo_ip_policys", false);
  public get ccGeoIpPolicys() {
    return this._ccGeoIpPolicys;
  }
  public putCcGeoIpPolicys(value: DayuCcPolicyV2CcGeoIpPolicys[] | cdktf.IResolvable) {
    this._ccGeoIpPolicys.internalValue = value;
  }
  public resetCcGeoIpPolicys() {
    this._ccGeoIpPolicys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccGeoIpPolicysInput() {
    return this._ccGeoIpPolicys.internalValue;
  }

  // cc_precision_policys - computed: false, optional: true, required: false
  private _ccPrecisionPolicys = new DayuCcPolicyV2CcPrecisionPolicysList(this, "cc_precision_policys", false);
  public get ccPrecisionPolicys() {
    return this._ccPrecisionPolicys;
  }
  public putCcPrecisionPolicys(value: DayuCcPolicyV2CcPrecisionPolicys[] | cdktf.IResolvable) {
    this._ccPrecisionPolicys.internalValue = value;
  }
  public resetCcPrecisionPolicys() {
    this._ccPrecisionPolicys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccPrecisionPolicysInput() {
    return this._ccPrecisionPolicys.internalValue;
  }

  // cc_precision_req_limits - computed: false, optional: true, required: false
  private _ccPrecisionReqLimits = new DayuCcPolicyV2CcPrecisionReqLimitsList(this, "cc_precision_req_limits", false);
  public get ccPrecisionReqLimits() {
    return this._ccPrecisionReqLimits;
  }
  public putCcPrecisionReqLimits(value: DayuCcPolicyV2CcPrecisionReqLimits[] | cdktf.IResolvable) {
    this._ccPrecisionReqLimits.internalValue = value;
  }
  public resetCcPrecisionReqLimits() {
    this._ccPrecisionReqLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccPrecisionReqLimitsInput() {
    return this._ccPrecisionReqLimits.internalValue;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new DayuCcPolicyV2ThresholdsList(this, "thresholds", false);
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DayuCcPolicyV2Thresholds[] | cdktf.IResolvable) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business: cdktf.stringToTerraform(this._business),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      cc_black_white_ips: cdktf.listMapper(dayuCcPolicyV2CcBlackWhiteIpsToTerraform, true)(this._ccBlackWhiteIps.internalValue),
      cc_geo_ip_policys: cdktf.listMapper(dayuCcPolicyV2CcGeoIpPolicysToTerraform, true)(this._ccGeoIpPolicys.internalValue),
      cc_precision_policys: cdktf.listMapper(dayuCcPolicyV2CcPrecisionPolicysToTerraform, true)(this._ccPrecisionPolicys.internalValue),
      cc_precision_req_limits: cdktf.listMapper(dayuCcPolicyV2CcPrecisionReqLimitsToTerraform, true)(this._ccPrecisionReqLimits.internalValue),
      thresholds: cdktf.listMapper(dayuCcPolicyV2ThresholdsToTerraform, true)(this._thresholds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business: {
        value: cdktf.stringToHclTerraform(this._business),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cc_black_white_ips: {
        value: cdktf.listMapperHcl(dayuCcPolicyV2CcBlackWhiteIpsToHclTerraform, true)(this._ccBlackWhiteIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuCcPolicyV2CcBlackWhiteIpsList",
      },
      cc_geo_ip_policys: {
        value: cdktf.listMapperHcl(dayuCcPolicyV2CcGeoIpPolicysToHclTerraform, true)(this._ccGeoIpPolicys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuCcPolicyV2CcGeoIpPolicysList",
      },
      cc_precision_policys: {
        value: cdktf.listMapperHcl(dayuCcPolicyV2CcPrecisionPolicysToHclTerraform, true)(this._ccPrecisionPolicys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuCcPolicyV2CcPrecisionPolicysList",
      },
      cc_precision_req_limits: {
        value: cdktf.listMapperHcl(dayuCcPolicyV2CcPrecisionReqLimitsToHclTerraform, true)(this._ccPrecisionReqLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuCcPolicyV2CcPrecisionReqLimitsList",
      },
      thresholds: {
        value: cdktf.listMapperHcl(dayuCcPolicyV2ThresholdsToHclTerraform, true)(this._thresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuCcPolicyV2ThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
