// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MqttInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authorization policy switch. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#authorization_policy MqttInstance#authorization_policy}
  */
  readonly authorizationPolicy?: boolean | cdktf.IResolvable;
  /**
  * Is the automatic registration certificate automatically activated. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#automatic_activation MqttInstance#automatic_activation}
  */
  readonly automaticActivation?: boolean | cdktf.IResolvable;
  /**
  * Indicate whether to force delete the instance. Default is `false`. If set true, the instance will be permanently deleted instead of being moved into the recycle bin. Note: only works for `PREPAID` instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#force_delete MqttInstance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#id MqttInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance type. PRO for Professional Edition; PLATINUM for Platinum Edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#instance_type MqttInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#name MqttInstance#name}
  */
  readonly name: string;
  /**
  * Payment mode (0: Postpaid; 1: Prepaid).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#pay_mode MqttInstance#pay_mode}
  */
  readonly payMode?: number;
  /**
  * Remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#remark MqttInstance#remark}
  */
  readonly remark?: string;
  /**
  * Whether to enable auto-renewal (0: Disabled; 1: Enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#renew_flag MqttInstance#renew_flag}
  */
  readonly renewFlag?: number;
  /**
  * Product SKU, available SKUs can be queried via the DescribeProductSKUList API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#sku_code MqttInstance#sku_code}
  */
  readonly skuCode: string;
  /**
  * Tags of the MQTT instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#tags MqttInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Purchase duration (unit: months).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#time_span MqttInstance#time_span}
  */
  readonly timeSpan?: number;
  /**
  * vpc_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#vpc_list MqttInstance#vpc_list}
  */
  readonly vpcList?: MqttInstanceVpcListStruct;
}
export interface MqttInstanceVpcListStruct {
  /**
  * Subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#subnet_id MqttInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#vpc_id MqttInstance#vpc_id}
  */
  readonly vpcId: string;
}

export function mqttInstanceVpcListStructToTerraform(struct?: MqttInstanceVpcListStructOutputReference | MqttInstanceVpcListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function mqttInstanceVpcListStructToHclTerraform(struct?: MqttInstanceVpcListStructOutputReference | MqttInstanceVpcListStruct): any {
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

export class MqttInstanceVpcListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MqttInstanceVpcListStruct | undefined {
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

  public set internalValue(value: MqttInstanceVpcListStruct | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance tencentcloud_mqtt_instance}
*/
export class MqttInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mqtt_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MqttInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MqttInstance to import
  * @param importFromId The id of the existing MqttInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MqttInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mqtt_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_instance tencentcloud_mqtt_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MqttInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MqttInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mqtt_instance',
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
    this._authorizationPolicy = config.authorizationPolicy;
    this._automaticActivation = config.automaticActivation;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._payMode = config.payMode;
    this._remark = config.remark;
    this._renewFlag = config.renewFlag;
    this._skuCode = config.skuCode;
    this._tags = config.tags;
    this._timeSpan = config.timeSpan;
    this._vpcList.internalValue = config.vpcList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_policy - computed: true, optional: true, required: false
  private _authorizationPolicy?: boolean | cdktf.IResolvable; 
  public get authorizationPolicy() {
    return this.getBooleanAttribute('authorization_policy');
  }
  public set authorizationPolicy(value: boolean | cdktf.IResolvable) {
    this._authorizationPolicy = value;
  }
  public resetAuthorizationPolicy() {
    this._authorizationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationPolicyInput() {
    return this._authorizationPolicy;
  }

  // automatic_activation - computed: true, optional: true, required: false
  private _automaticActivation?: boolean | cdktf.IResolvable; 
  public get automaticActivation() {
    return this.getBooleanAttribute('automatic_activation');
  }
  public set automaticActivation(value: boolean | cdktf.IResolvable) {
    this._automaticActivation = value;
  }
  public resetAutomaticActivation() {
    this._automaticActivation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticActivationInput() {
    return this._automaticActivation;
  }

  // device_certificate_provision_type - computed: true, optional: false, required: false
  public get deviceCertificateProvisionType() {
    return this.getStringAttribute('device_certificate_provision_type');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // pay_mode - computed: true, optional: true, required: false
  private _payMode?: number; 
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }
  public set payMode(value: number) {
    this._payMode = value;
  }
  public resetPayMode() {
    this._payMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
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

  // renew_flag - computed: true, optional: true, required: false
  private _renewFlag?: number; 
  public get renewFlag() {
    return this.getNumberAttribute('renew_flag');
  }
  public set renewFlag(value: number) {
    this._renewFlag = value;
  }
  public resetRenewFlag() {
    this._renewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
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

  // time_span - computed: false, optional: true, required: false
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  public resetTimeSpan() {
    this._timeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // vpc_list - computed: false, optional: true, required: false
  private _vpcList = new MqttInstanceVpcListStructOutputReference(this, "vpc_list");
  public get vpcList() {
    return this._vpcList;
  }
  public putVpcList(value: MqttInstanceVpcListStruct) {
    this._vpcList.internalValue = value;
  }
  public resetVpcList() {
    this._vpcList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcListInput() {
    return this._vpcList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_policy: cdktf.booleanToTerraform(this._authorizationPolicy),
      automatic_activation: cdktf.booleanToTerraform(this._automaticActivation),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name: cdktf.stringToTerraform(this._name),
      pay_mode: cdktf.numberToTerraform(this._payMode),
      remark: cdktf.stringToTerraform(this._remark),
      renew_flag: cdktf.numberToTerraform(this._renewFlag),
      sku_code: cdktf.stringToTerraform(this._skuCode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      vpc_list: mqttInstanceVpcListStructToTerraform(this._vpcList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_policy: {
        value: cdktf.booleanToHclTerraform(this._authorizationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automatic_activation: {
        value: cdktf.booleanToHclTerraform(this._automaticActivation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pay_mode: {
        value: cdktf.numberToHclTerraform(this._payMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_flag: {
        value: cdktf.numberToHclTerraform(this._renewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sku_code: {
        value: cdktf.stringToHclTerraform(this._skuCode),
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
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_list: {
        value: mqttInstanceVpcListStructToHclTerraform(this._vpcList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MqttInstanceVpcListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
