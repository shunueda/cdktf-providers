// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanBaseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#auto_renew OceanBaseInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#auto_renew_period OceanBaseInstance#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#backup_retain_mode OceanBaseInstance#backup_retain_mode}
  */
  readonly backupRetainMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#cpu_arch OceanBaseInstance#cpu_arch}
  */
  readonly cpuArch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#disk_size OceanBaseInstance#disk_size}
  */
  readonly diskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#disk_type OceanBaseInstance#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#id OceanBaseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#instance_class OceanBaseInstance#instance_class}
  */
  readonly instanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#instance_name OceanBaseInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#node_num OceanBaseInstance#node_num}
  */
  readonly nodeNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#ob_version OceanBaseInstance#ob_version}
  */
  readonly obVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#payment_type OceanBaseInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#period OceanBaseInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#period_unit OceanBaseInstance#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#primary_instance OceanBaseInstance#primary_instance}
  */
  readonly primaryInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#primary_region OceanBaseInstance#primary_region}
  */
  readonly primaryRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#resource_group_id OceanBaseInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#series OceanBaseInstance#series}
  */
  readonly series: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#upgrade_spec_native OceanBaseInstance#upgrade_spec_native}
  */
  readonly upgradeSpecNative?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#zones OceanBaseInstance#zones}
  */
  readonly zones: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#timeouts OceanBaseInstance#timeouts}
  */
  readonly timeouts?: OceanBaseInstanceTimeouts;
}
export interface OceanBaseInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#create OceanBaseInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#delete OceanBaseInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#update OceanBaseInstance#update}
  */
  readonly update?: string;
}

export function oceanBaseInstanceTimeoutsToTerraform(struct?: OceanBaseInstanceTimeouts | cdktf.IResolvable): any {
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


export function oceanBaseInstanceTimeoutsToHclTerraform(struct?: OceanBaseInstanceTimeouts | cdktf.IResolvable): any {
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

export class OceanBaseInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OceanBaseInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanBaseInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance alicloud_ocean_base_instance}
*/
export class OceanBaseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ocean_base_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanBaseInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanBaseInstance to import
  * @param importFromId The id of the existing OceanBaseInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanBaseInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ocean_base_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ocean_base_instance alicloud_ocean_base_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanBaseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: OceanBaseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ocean_base_instance',
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
    this._backupRetainMode = config.backupRetainMode;
    this._cpuArch = config.cpuArch;
    this._diskSize = config.diskSize;
    this._diskType = config.diskType;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._instanceName = config.instanceName;
    this._nodeNum = config.nodeNum;
    this._obVersion = config.obVersion;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._primaryInstance = config.primaryInstance;
    this._primaryRegion = config.primaryRegion;
    this._resourceGroupId = config.resourceGroupId;
    this._series = config.series;
    this._upgradeSpecNative = config.upgradeSpecNative;
    this._zones = config.zones;
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

  // backup_retain_mode - computed: false, optional: true, required: false
  private _backupRetainMode?: string; 
  public get backupRetainMode() {
    return this.getStringAttribute('backup_retain_mode');
  }
  public set backupRetainMode(value: string) {
    this._backupRetainMode = value;
  }
  public resetBackupRetainMode() {
    this._backupRetainMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetainModeInput() {
    return this._backupRetainMode;
  }

  // commodity_code - computed: true, optional: false, required: false
  public get commodityCode() {
    return this.getStringAttribute('commodity_code');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // cpu_arch - computed: true, optional: true, required: false
  private _cpuArch?: string; 
  public get cpuArch() {
    return this.getStringAttribute('cpu_arch');
  }
  public set cpuArch(value: string) {
    this._cpuArch = value;
  }
  public resetCpuArch() {
    this._cpuArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuArchInput() {
    return this._cpuArch;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
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

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // instance_name - computed: true, optional: true, required: false
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

  // node_num - computed: true, optional: true, required: false
  private _nodeNum?: string; 
  public get nodeNum() {
    return this.getStringAttribute('node_num');
  }
  public set nodeNum(value: string) {
    this._nodeNum = value;
  }
  public resetNodeNum() {
    this._nodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumInput() {
    return this._nodeNum;
  }

  // ob_version - computed: true, optional: true, required: false
  private _obVersion?: string; 
  public get obVersion() {
    return this.getStringAttribute('ob_version');
  }
  public set obVersion(value: string) {
    this._obVersion = value;
  }
  public resetObVersion() {
    this._obVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obVersionInput() {
    return this._obVersion;
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

  // period_unit - computed: false, optional: true, required: false
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

  // primary_instance - computed: false, optional: true, required: false
  private _primaryInstance?: string; 
  public get primaryInstance() {
    return this.getStringAttribute('primary_instance');
  }
  public set primaryInstance(value: string) {
    this._primaryInstance = value;
  }
  public resetPrimaryInstance() {
    this._primaryInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInstanceInput() {
    return this._primaryInstance;
  }

  // primary_region - computed: false, optional: true, required: false
  private _primaryRegion?: string; 
  public get primaryRegion() {
    return this.getStringAttribute('primary_region');
  }
  public set primaryRegion(value: string) {
    this._primaryRegion = value;
  }
  public resetPrimaryRegion() {
    this._primaryRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryRegionInput() {
    return this._primaryRegion;
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

  // series - computed: false, optional: false, required: true
  private _series?: string; 
  public get series() {
    return this.getStringAttribute('series');
  }
  public set series(value: string) {
    this._series = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesInput() {
    return this._series;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // upgrade_spec_native - computed: false, optional: true, required: false
  private _upgradeSpecNative?: boolean | cdktf.IResolvable; 
  public get upgradeSpecNative() {
    return this.getBooleanAttribute('upgrade_spec_native');
  }
  public set upgradeSpecNative(value: boolean | cdktf.IResolvable) {
    this._upgradeSpecNative = value;
  }
  public resetUpgradeSpecNative() {
    this._upgradeSpecNative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSpecNativeInput() {
    return this._upgradeSpecNative;
  }

  // zones - computed: false, optional: false, required: true
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OceanBaseInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OceanBaseInstanceTimeouts) {
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
      backup_retain_mode: cdktf.stringToTerraform(this._backupRetainMode),
      cpu_arch: cdktf.stringToTerraform(this._cpuArch),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      disk_type: cdktf.stringToTerraform(this._diskType),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      node_num: cdktf.stringToTerraform(this._nodeNum),
      ob_version: cdktf.stringToTerraform(this._obVersion),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      primary_instance: cdktf.stringToTerraform(this._primaryInstance),
      primary_region: cdktf.stringToTerraform(this._primaryRegion),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      series: cdktf.stringToTerraform(this._series),
      upgrade_spec_native: cdktf.booleanToTerraform(this._upgradeSpecNative),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      timeouts: oceanBaseInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      backup_retain_mode: {
        value: cdktf.stringToHclTerraform(this._backupRetainMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_arch: {
        value: cdktf.stringToHclTerraform(this._cpuArch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
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
      node_num: {
        value: cdktf.stringToHclTerraform(this._nodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ob_version: {
        value: cdktf.stringToHclTerraform(this._obVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      primary_instance: {
        value: cdktf.stringToHclTerraform(this._primaryInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_region: {
        value: cdktf.stringToHclTerraform(this._primaryRegion),
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
      series: {
        value: cdktf.stringToHclTerraform(this._series),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_spec_native: {
        value: cdktf.booleanToHclTerraform(this._upgradeSpecNative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: oceanBaseInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OceanBaseInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
