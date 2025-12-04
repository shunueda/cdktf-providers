// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdmqRocketmqVipInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#id TdmqRocketmqVipInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#name TdmqRocketmqVipInstance#name}
  */
  readonly name: string;
  /**
  * Number of nodes, minimum 2, maximum 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#node_count TdmqRocketmqVipInstance#node_count}
  */
  readonly nodeCount: number;
  /**
  * Instance specification: Universal type, rocket-vip-basic-0, Basic type: `rocket-vip-basic-1`, Standard type: `rocket-vip-basic-2`, Advanced Type I: `rocket-vip-basic-3`, Advanced Type II: `rocket-vip-basic-4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#spec TdmqRocketmqVipInstance#spec}
  */
  readonly spec: string;
  /**
  * Single node storage space, in GB, minimum 200GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#storage_size TdmqRocketmqVipInstance#storage_size}
  */
  readonly storageSize: number;
  /**
  * Purchase period, in months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#time_span TdmqRocketmqVipInstance#time_span}
  */
  readonly timeSpan: number;
  /**
  * The Zone ID list for node deployment, such as Guangzhou Zone 1, is 100001. For details, please refer to the official website of Tencent Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#zone_ids TdmqRocketmqVipInstance#zone_ids}
  */
  readonly zoneIds: string[];
  /**
  * ip_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#ip_rules TdmqRocketmqVipInstance#ip_rules}
  */
  readonly ipRules?: TdmqRocketmqVipInstanceIpRules[] | cdktf.IResolvable;
  /**
  * vpc_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#vpc_info TdmqRocketmqVipInstance#vpc_info}
  */
  readonly vpcInfo: TdmqRocketmqVipInstanceVpcInfo;
}
export interface TdmqRocketmqVipInstanceIpRules {
  /**
  * Whether to allow or deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#allow TdmqRocketmqVipInstance#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * IP address block information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#ip_rule TdmqRocketmqVipInstance#ip_rule}
  */
  readonly ipRule: string;
  /**
  * Remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#remark TdmqRocketmqVipInstance#remark}
  */
  readonly remark: string;
}

export function tdmqRocketmqVipInstanceIpRulesToTerraform(struct?: TdmqRocketmqVipInstanceIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    ip_rule: cdktf.stringToTerraform(struct!.ipRule),
    remark: cdktf.stringToTerraform(struct!.remark),
  }
}


export function tdmqRocketmqVipInstanceIpRulesToHclTerraform(struct?: TdmqRocketmqVipInstanceIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_rule: {
      value: cdktf.stringToHclTerraform(struct!.ipRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remark: {
      value: cdktf.stringToHclTerraform(struct!.remark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TdmqRocketmqVipInstanceIpRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TdmqRocketmqVipInstanceIpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._ipRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRule = this._ipRule;
    }
    if (this._remark !== undefined) {
      hasAnyValues = true;
      internalValueResult.remark = this._remark;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TdmqRocketmqVipInstanceIpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._ipRule = undefined;
      this._remark = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._ipRule = value.ipRule;
      this._remark = value.remark;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // ip_rule - computed: false, optional: false, required: true
  private _ipRule?: string; 
  public get ipRule() {
    return this.getStringAttribute('ip_rule');
  }
  public set ipRule(value: string) {
    this._ipRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRuleInput() {
    return this._ipRule;
  }

  // remark - computed: false, optional: false, required: true
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }
}

export class TdmqRocketmqVipInstanceIpRulesList extends cdktf.ComplexList {
  public internalValue? : TdmqRocketmqVipInstanceIpRules[] | cdktf.IResolvable

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
  public get(index: number): TdmqRocketmqVipInstanceIpRulesOutputReference {
    return new TdmqRocketmqVipInstanceIpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TdmqRocketmqVipInstanceVpcInfo {
  /**
  * Subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#subnet_id TdmqRocketmqVipInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#vpc_id TdmqRocketmqVipInstance#vpc_id}
  */
  readonly vpcId: string;
}

export function tdmqRocketmqVipInstanceVpcInfoToTerraform(struct?: TdmqRocketmqVipInstanceVpcInfoOutputReference | TdmqRocketmqVipInstanceVpcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function tdmqRocketmqVipInstanceVpcInfoToHclTerraform(struct?: TdmqRocketmqVipInstanceVpcInfoOutputReference | TdmqRocketmqVipInstanceVpcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
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

export class TdmqRocketmqVipInstanceVpcInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TdmqRocketmqVipInstanceVpcInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TdmqRocketmqVipInstanceVpcInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance tencentcloud_tdmq_rocketmq_vip_instance}
*/
export class TdmqRocketmqVipInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_rocketmq_vip_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdmqRocketmqVipInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdmqRocketmqVipInstance to import
  * @param importFromId The id of the existing TdmqRocketmqVipInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdmqRocketmqVipInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_rocketmq_vip_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_vip_instance tencentcloud_tdmq_rocketmq_vip_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdmqRocketmqVipInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: TdmqRocketmqVipInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_rocketmq_vip_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._spec = config.spec;
    this._storageSize = config.storageSize;
    this._timeSpan = config.timeSpan;
    this._zoneIds = config.zoneIds;
    this._ipRules.internalValue = config.ipRules;
    this._vpcInfo.internalValue = config.vpcInfo;
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // storage_size - computed: false, optional: false, required: true
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // time_span - computed: false, optional: false, required: true
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // zone_ids - computed: false, optional: false, required: true
  private _zoneIds?: string[]; 
  public get zoneIds() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_ids'));
  }
  public set zoneIds(value: string[]) {
    this._zoneIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules = new TdmqRocketmqVipInstanceIpRulesList(this, "ip_rules", false);
  public get ipRules() {
    return this._ipRules;
  }
  public putIpRules(value: TdmqRocketmqVipInstanceIpRules[] | cdktf.IResolvable) {
    this._ipRules.internalValue = value;
  }
  public resetIpRules() {
    this._ipRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules.internalValue;
  }

  // vpc_info - computed: false, optional: false, required: true
  private _vpcInfo = new TdmqRocketmqVipInstanceVpcInfoOutputReference(this, "vpc_info");
  public get vpcInfo() {
    return this._vpcInfo;
  }
  public putVpcInfo(value: TdmqRocketmqVipInstanceVpcInfo) {
    this._vpcInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInfoInput() {
    return this._vpcInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      spec: cdktf.stringToTerraform(this._spec),
      storage_size: cdktf.numberToTerraform(this._storageSize),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      zone_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zoneIds),
      ip_rules: cdktf.listMapper(tdmqRocketmqVipInstanceIpRulesToTerraform, true)(this._ipRules.internalValue),
      vpc_info: tdmqRocketmqVipInstanceVpcInfoToTerraform(this._vpcInfo.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_size: {
        value: cdktf.numberToHclTerraform(this._storageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zoneIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_rules: {
        value: cdktf.listMapperHcl(tdmqRocketmqVipInstanceIpRulesToHclTerraform, true)(this._ipRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TdmqRocketmqVipInstanceIpRulesList",
      },
      vpc_info: {
        value: tdmqRocketmqVipInstanceVpcInfoToHclTerraform(this._vpcInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TdmqRocketmqVipInstanceVpcInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
