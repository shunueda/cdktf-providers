// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LiteHbaseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * AutoRenewFlag, Value range: 0: indicates NOTIFY_AND_MANUAL_RENEW; 1: indicates NOTIFY_AND_AUTO_RENEW; 2: indicates DISABLE_NOTIFY_AND_MANUAL_RENEW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#auto_renew_flag LiteHbaseInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * Instance single-node disk capacity, in GB. The single-node disk capacity must be greater than or equal to 100 and less than or equal to 250 times the number of CPU cores. The capacity adjustment step is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#disk_size LiteHbaseInstance#disk_size}
  */
  readonly diskSize: number;
  /**
  * Instance disk type, Value range: CLOUD_HSSD: indicate performance cloud storage(ESSD). CLOUD_BSSD: indicate standard cloud storage(SSD).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#disk_type LiteHbaseInstance#disk_type}
  */
  readonly diskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#id LiteHbaseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance name. Length limit is 6-36 characters. Only Chinese characters, letters, numbers, -, and _ are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#instance_name LiteHbaseInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Instance node type, can be filled in as 4C16G, 8C32G, 16C64G, 32C128G, case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#node_type LiteHbaseInstance#node_type}
  */
  readonly nodeType?: string;
  /**
  * Instance pay mode. Value range: 0: indicates post-pay mode, that is, pay-as-you-go. 1: indicates pre-pay mode, that is, monthly subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#pay_mode LiteHbaseInstance#pay_mode}
  */
  readonly payMode: number;
  /**
  * Time span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#time_span LiteHbaseInstance#time_span}
  */
  readonly timeSpan?: number;
  /**
  * Time unit, fill in m which means month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#time_unit LiteHbaseInstance#time_unit}
  */
  readonly timeUnit?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#tags LiteHbaseInstance#tags}
  */
  readonly tags?: LiteHbaseInstanceTags[] | cdktf.IResolvable;
  /**
  * zone_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#zone_settings LiteHbaseInstance#zone_settings}
  */
  readonly zoneSettings: LiteHbaseInstanceZoneSettings[] | cdktf.IResolvable;
}
export interface LiteHbaseInstanceTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#tag_key LiteHbaseInstance#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#tag_value LiteHbaseInstance#tag_value}
  */
  readonly tagValue?: string;
}

export function liteHbaseInstanceTagsToTerraform(struct?: LiteHbaseInstanceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function liteHbaseInstanceTagsToHclTerraform(struct?: LiteHbaseInstanceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LiteHbaseInstanceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LiteHbaseInstanceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LiteHbaseInstanceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class LiteHbaseInstanceTagsList extends cdktf.ComplexList {
  public internalValue? : LiteHbaseInstanceTags[] | cdktf.IResolvable

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
  public get(index: number): LiteHbaseInstanceTagsOutputReference {
    return new LiteHbaseInstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LiteHbaseInstanceZoneSettingsVpcSettings {
  /**
  * Subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#subnet_id LiteHbaseInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#vpc_id LiteHbaseInstance#vpc_id}
  */
  readonly vpcId: string;
}

export function liteHbaseInstanceZoneSettingsVpcSettingsToTerraform(struct?: LiteHbaseInstanceZoneSettingsVpcSettingsOutputReference | LiteHbaseInstanceZoneSettingsVpcSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function liteHbaseInstanceZoneSettingsVpcSettingsToHclTerraform(struct?: LiteHbaseInstanceZoneSettingsVpcSettingsOutputReference | LiteHbaseInstanceZoneSettingsVpcSettings): any {
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

export class LiteHbaseInstanceZoneSettingsVpcSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LiteHbaseInstanceZoneSettingsVpcSettings | undefined {
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

  public set internalValue(value: LiteHbaseInstanceZoneSettingsVpcSettings | undefined) {
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
export interface LiteHbaseInstanceZoneSettings {
  /**
  * Number of nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#node_num LiteHbaseInstance#node_num}
  */
  readonly nodeNum: number;
  /**
  * The availability zone to which the instance belongs, such as ap-guangzhou-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#zone LiteHbaseInstance#zone}
  */
  readonly zone: string;
  /**
  * vpc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#vpc_settings LiteHbaseInstance#vpc_settings}
  */
  readonly vpcSettings: LiteHbaseInstanceZoneSettingsVpcSettings;
}

export function liteHbaseInstanceZoneSettingsToTerraform(struct?: LiteHbaseInstanceZoneSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_num: cdktf.numberToTerraform(struct!.nodeNum),
    zone: cdktf.stringToTerraform(struct!.zone),
    vpc_settings: liteHbaseInstanceZoneSettingsVpcSettingsToTerraform(struct!.vpcSettings),
  }
}


export function liteHbaseInstanceZoneSettingsToHclTerraform(struct?: LiteHbaseInstanceZoneSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_num: {
      value: cdktf.numberToHclTerraform(struct!.nodeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_settings: {
      value: liteHbaseInstanceZoneSettingsVpcSettingsToHclTerraform(struct!.vpcSettings),
      isBlock: true,
      type: "list",
      storageClassType: "LiteHbaseInstanceZoneSettingsVpcSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LiteHbaseInstanceZoneSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LiteHbaseInstanceZoneSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNum = this._nodeNum;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._vpcSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSettings = this._vpcSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LiteHbaseInstanceZoneSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeNum = undefined;
      this._zone = undefined;
      this._vpcSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeNum = value.nodeNum;
      this._zone = value.zone;
      this._vpcSettings.internalValue = value.vpcSettings;
    }
  }

  // node_num - computed: false, optional: false, required: true
  private _nodeNum?: number; 
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }
  public set nodeNum(value: number) {
    this._nodeNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumInput() {
    return this._nodeNum;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // vpc_settings - computed: false, optional: false, required: true
  private _vpcSettings = new LiteHbaseInstanceZoneSettingsVpcSettingsOutputReference(this, "vpc_settings");
  public get vpcSettings() {
    return this._vpcSettings;
  }
  public putVpcSettings(value: LiteHbaseInstanceZoneSettingsVpcSettings) {
    this._vpcSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSettingsInput() {
    return this._vpcSettings.internalValue;
  }
}

export class LiteHbaseInstanceZoneSettingsList extends cdktf.ComplexList {
  public internalValue? : LiteHbaseInstanceZoneSettings[] | cdktf.IResolvable

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
  public get(index: number): LiteHbaseInstanceZoneSettingsOutputReference {
    return new LiteHbaseInstanceZoneSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance tencentcloud_lite_hbase_instance}
*/
export class LiteHbaseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_lite_hbase_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LiteHbaseInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LiteHbaseInstance to import
  * @param importFromId The id of the existing LiteHbaseInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LiteHbaseInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_lite_hbase_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lite_hbase_instance tencentcloud_lite_hbase_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LiteHbaseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: LiteHbaseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_lite_hbase_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewFlag = config.autoRenewFlag;
    this._diskSize = config.diskSize;
    this._diskType = config.diskType;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._nodeType = config.nodeType;
    this._payMode = config.payMode;
    this._timeSpan = config.timeSpan;
    this._timeUnit = config.timeUnit;
    this._tags.internalValue = config.tags;
    this._zoneSettings.internalValue = config.zoneSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_flag - computed: true, optional: true, required: false
  private _autoRenewFlag?: number; 
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: number) {
    this._autoRenewFlag = value;
  }
  public resetAutoRenewFlag() {
    this._autoRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // pay_mode - computed: false, optional: false, required: true
  private _payMode?: number; 
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }
  public set payMode(value: number) {
    this._payMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
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

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new LiteHbaseInstanceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: LiteHbaseInstanceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // zone_settings - computed: false, optional: false, required: true
  private _zoneSettings = new LiteHbaseInstanceZoneSettingsList(this, "zone_settings", false);
  public get zoneSettings() {
    return this._zoneSettings;
  }
  public putZoneSettings(value: LiteHbaseInstanceZoneSettings[] | cdktf.IResolvable) {
    this._zoneSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSettingsInput() {
    return this._zoneSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      disk_type: cdktf.stringToTerraform(this._diskType),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      node_type: cdktf.stringToTerraform(this._nodeType),
      pay_mode: cdktf.numberToTerraform(this._payMode),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
      tags: cdktf.listMapper(liteHbaseInstanceTagsToTerraform, true)(this._tags.internalValue),
      zone_settings: cdktf.listMapper(liteHbaseInstanceZoneSettingsToTerraform, true)(this._zoneSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_flag: {
        value: cdktf.numberToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
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
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
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
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_unit: {
        value: cdktf.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(liteHbaseInstanceTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LiteHbaseInstanceTagsList",
      },
      zone_settings: {
        value: cdktf.listMapperHcl(liteHbaseInstanceZoneSettingsToHclTerraform, true)(this._zoneSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LiteHbaseInstanceZoneSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
