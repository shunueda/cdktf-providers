// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrocketRocketmqInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Public network bandwidth. `bandwidth` must be greater than zero when `enable_public` equal true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#bandwidth TrocketRocketmqInstance#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Whether to enable the public network. Must set `bandwidth` when `enable_public` equal true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#enable_public TrocketRocketmqInstance#enable_public}
  */
  readonly enablePublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#id TrocketRocketmqInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance type. Valid values: `EXPERIMENT`, `BASIC`, `PRO`, `PLATINUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#instance_type TrocketRocketmqInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Message retention time in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#message_retention TrocketRocketmqInstance#message_retention}
  */
  readonly messageRetention?: number;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#name TrocketRocketmqInstance#name}
  */
  readonly name: string;
  /**
  * Remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#remark TrocketRocketmqInstance#remark}
  */
  readonly remark?: string;
  /**
  * SKU code. Available specifications are as follows: experiment_500, basic_1k, basic_2k, basic_3k, basic_4k, basic_5k, basic_6k, basic_7k, basic_8k, basic_9k, basic_10k, pro_4k, pro_6k, pro_8k, pro_1w, pro_15k, pro_2w, pro_25k, pro_3w, pro_35k, pro_4w, pro_45k, pro_5w, pro_55k, pro_60k, pro_65k, pro_70k, pro_75k, pro_80k, pro_85k, pro_90k, pro_95k, pro_100k, platinum_1w, platinum_2w, platinum_3w, platinum_4w, platinum_5w, platinum_6w, platinum_7w, platinum_8w, platinum_9w, platinum_10w, platinum_12w, platinum_14w, platinum_16w, platinum_18w, platinum_20w, platinum_25w, platinum_30w, platinum_35w, platinum_40w, platinum_45w, platinum_50w, platinum_60w, platinum_70w, platinum_80w, platinum_90w, platinum_100w.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#sku_code TrocketRocketmqInstance#sku_code}
  */
  readonly skuCode: string;
  /**
  * Subnet id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#subnet_id TrocketRocketmqInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#tags TrocketRocketmqInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * VPC id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#vpc_id TrocketRocketmqInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * ip_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#ip_rules TrocketRocketmqInstance#ip_rules}
  */
  readonly ipRules?: TrocketRocketmqInstanceIpRules[] | cdktf.IResolvable;
}
export interface TrocketRocketmqInstanceIpRules {
  /**
  * Whether to allow release or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#allow TrocketRocketmqInstance#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#ip TrocketRocketmqInstance#ip}
  */
  readonly ip: string;
  /**
  * Remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#remark TrocketRocketmqInstance#remark}
  */
  readonly remark: string;
}

export function trocketRocketmqInstanceIpRulesToTerraform(struct?: TrocketRocketmqInstanceIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    ip: cdktf.stringToTerraform(struct!.ip),
    remark: cdktf.stringToTerraform(struct!.remark),
  }
}


export function trocketRocketmqInstanceIpRulesToHclTerraform(struct?: TrocketRocketmqInstanceIpRules | cdktf.IResolvable): any {
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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

export class TrocketRocketmqInstanceIpRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrocketRocketmqInstanceIpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._remark !== undefined) {
      hasAnyValues = true;
      internalValueResult.remark = this._remark;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrocketRocketmqInstanceIpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._ip = undefined;
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
      this._ip = value.ip;
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

export class TrocketRocketmqInstanceIpRulesList extends cdktf.ComplexList {
  public internalValue? : TrocketRocketmqInstanceIpRules[] | cdktf.IResolvable

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
  public get(index: number): TrocketRocketmqInstanceIpRulesOutputReference {
    return new TrocketRocketmqInstanceIpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance tencentcloud_trocket_rocketmq_instance}
*/
export class TrocketRocketmqInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_trocket_rocketmq_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrocketRocketmqInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrocketRocketmqInstance to import
  * @param importFromId The id of the existing TrocketRocketmqInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrocketRocketmqInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_trocket_rocketmq_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/trocket_rocketmq_instance tencentcloud_trocket_rocketmq_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrocketRocketmqInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: TrocketRocketmqInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_trocket_rocketmq_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._enablePublic = config.enablePublic;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._messageRetention = config.messageRetention;
    this._name = config.name;
    this._remark = config.remark;
    this._skuCode = config.skuCode;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._ipRules.internalValue = config.ipRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // enable_public - computed: true, optional: true, required: false
  private _enablePublic?: boolean | cdktf.IResolvable; 
  public get enablePublic() {
    return this.getBooleanAttribute('enable_public');
  }
  public set enablePublic(value: boolean | cdktf.IResolvable) {
    this._enablePublic = value;
  }
  public resetEnablePublic() {
    this._enablePublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicInput() {
    return this._enablePublic;
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // message_retention - computed: true, optional: true, required: false
  private _messageRetention?: number; 
  public get messageRetention() {
    return this.getNumberAttribute('message_retention');
  }
  public set messageRetention(value: number) {
    this._messageRetention = value;
  }
  public resetMessageRetention() {
    this._messageRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionInput() {
    return this._messageRetention;
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

  // public_end_point - computed: true, optional: false, required: false
  public get publicEndPoint() {
    return this.getStringAttribute('public_end_point');
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

  // sku_code - computed: false, optional: false, required: true
  private _skuCode?: string; 
  public get skuCode() {
    return this.getStringAttribute('sku_code');
  }
  public set skuCode(value: string) {
    this._skuCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuCodeInput() {
    return this._skuCode;
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

  // tags - computed: true, optional: true, required: false
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

  // vpc_end_point - computed: true, optional: false, required: false
  public get vpcEndPoint() {
    return this.getStringAttribute('vpc_end_point');
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

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules = new TrocketRocketmqInstanceIpRulesList(this, "ip_rules", false);
  public get ipRules() {
    return this._ipRules;
  }
  public putIpRules(value: TrocketRocketmqInstanceIpRules[] | cdktf.IResolvable) {
    this._ipRules.internalValue = value;
  }
  public resetIpRules() {
    this._ipRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      enable_public: cdktf.booleanToTerraform(this._enablePublic),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      message_retention: cdktf.numberToTerraform(this._messageRetention),
      name: cdktf.stringToTerraform(this._name),
      remark: cdktf.stringToTerraform(this._remark),
      sku_code: cdktf.stringToTerraform(this._skuCode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      ip_rules: cdktf.listMapper(trocketRocketmqInstanceIpRulesToTerraform, true)(this._ipRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_public: {
        value: cdktf.booleanToHclTerraform(this._enablePublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_retention: {
        value: cdktf.numberToHclTerraform(this._messageRetention),
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
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku_code: {
        value: cdktf.stringToHclTerraform(this._skuCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_rules: {
        value: cdktf.listMapperHcl(trocketRocketmqInstanceIpRulesToHclTerraform, true)(this._ipRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrocketRocketmqInstanceIpRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
