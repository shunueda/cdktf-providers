// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrYarnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to synchronize when closing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#disable_resource_schedule_sync EmrYarn#disable_resource_schedule_sync}
  */
  readonly disableResourceScheduleSync?: boolean | cdktf.IResolvable;
  /**
  * Whether the resource scheduling function is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#enable_resource_schedule EmrYarn#enable_resource_schedule}
  */
  readonly enableResourceSchedule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#id EmrYarn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * EMR Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#instance_id EmrYarn#instance_id}
  */
  readonly instanceId: string;
  /**
  * The latest resource scheduler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#scheduler EmrYarn#scheduler}
  */
  readonly scheduler?: string;
  /**
  * capacity_global_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#capacity_global_config EmrYarn#capacity_global_config}
  */
  readonly capacityGlobalConfig?: EmrYarnCapacityGlobalConfig[] | cdktf.IResolvable;
  /**
  * fair_global_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#fair_global_config EmrYarn#fair_global_config}
  */
  readonly fairGlobalConfig?: EmrYarnFairGlobalConfig[] | cdktf.IResolvable;
}
export interface EmrYarnCapacityGlobalConfigDefaultSettings {
  /**
  * Name, as the key for the input parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#name EmrYarn#name}
  */
  readonly name: string;
  /**
  * Value corresponding to tame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#value EmrYarn#value}
  */
  readonly value: string;
}

export function emrYarnCapacityGlobalConfigDefaultSettingsToTerraform(struct?: EmrYarnCapacityGlobalConfigDefaultSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function emrYarnCapacityGlobalConfigDefaultSettingsToHclTerraform(struct?: EmrYarnCapacityGlobalConfigDefaultSettings | cdktf.IResolvable): any {
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

export class EmrYarnCapacityGlobalConfigDefaultSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrYarnCapacityGlobalConfigDefaultSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrYarnCapacityGlobalConfigDefaultSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // desc - computed: true, optional: false, required: false
  public get desc() {
    return this.getStringAttribute('desc');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
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

export class EmrYarnCapacityGlobalConfigDefaultSettingsList extends cdktf.ComplexList {
  public internalValue? : EmrYarnCapacityGlobalConfigDefaultSettings[] | cdktf.IResolvable

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
  public get(index: number): EmrYarnCapacityGlobalConfigDefaultSettingsOutputReference {
    return new EmrYarnCapacityGlobalConfigDefaultSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrYarnCapacityGlobalConfig {
  /**
  * Whether label scheduling is turned on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#enable_label EmrYarn#enable_label}
  */
  readonly enableLabel?: boolean | cdktf.IResolvable;
  /**
  * If label scheduling is enabled, the path where label information is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#label_dir EmrYarn#label_dir}
  */
  readonly labelDir?: string;
  /**
  * Whether to overwrite the user-specified queue. True means overwriting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#queue_mapping_override EmrYarn#queue_mapping_override}
  */
  readonly queueMappingOverride?: boolean | cdktf.IResolvable;
  /**
  * default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#default_settings EmrYarn#default_settings}
  */
  readonly defaultSettings?: EmrYarnCapacityGlobalConfigDefaultSettings[] | cdktf.IResolvable;
}

export function emrYarnCapacityGlobalConfigToTerraform(struct?: EmrYarnCapacityGlobalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_label: cdktf.booleanToTerraform(struct!.enableLabel),
    label_dir: cdktf.stringToTerraform(struct!.labelDir),
    queue_mapping_override: cdktf.booleanToTerraform(struct!.queueMappingOverride),
    default_settings: cdktf.listMapper(emrYarnCapacityGlobalConfigDefaultSettingsToTerraform, true)(struct!.defaultSettings),
  }
}


export function emrYarnCapacityGlobalConfigToHclTerraform(struct?: EmrYarnCapacityGlobalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_label: {
      value: cdktf.booleanToHclTerraform(struct!.enableLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_dir: {
      value: cdktf.stringToHclTerraform(struct!.labelDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_mapping_override: {
      value: cdktf.booleanToHclTerraform(struct!.queueMappingOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_settings: {
      value: cdktf.listMapperHcl(emrYarnCapacityGlobalConfigDefaultSettingsToHclTerraform, true)(struct!.defaultSettings),
      isBlock: true,
      type: "set",
      storageClassType: "EmrYarnCapacityGlobalConfigDefaultSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrYarnCapacityGlobalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrYarnCapacityGlobalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLabel = this._enableLabel;
    }
    if (this._labelDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelDir = this._labelDir;
    }
    if (this._queueMappingOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueMappingOverride = this._queueMappingOverride;
    }
    if (this._defaultSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSettings = this._defaultSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrYarnCapacityGlobalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableLabel = undefined;
      this._labelDir = undefined;
      this._queueMappingOverride = undefined;
      this._defaultSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableLabel = value.enableLabel;
      this._labelDir = value.labelDir;
      this._queueMappingOverride = value.queueMappingOverride;
      this._defaultSettings.internalValue = value.defaultSettings;
    }
  }

  // enable_label - computed: true, optional: true, required: false
  private _enableLabel?: boolean | cdktf.IResolvable; 
  public get enableLabel() {
    return this.getBooleanAttribute('enable_label');
  }
  public set enableLabel(value: boolean | cdktf.IResolvable) {
    this._enableLabel = value;
  }
  public resetEnableLabel() {
    this._enableLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLabelInput() {
    return this._enableLabel;
  }

  // label_dir - computed: true, optional: true, required: false
  private _labelDir?: string; 
  public get labelDir() {
    return this.getStringAttribute('label_dir');
  }
  public set labelDir(value: string) {
    this._labelDir = value;
  }
  public resetLabelDir() {
    this._labelDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelDirInput() {
    return this._labelDir;
  }

  // queue_mapping_override - computed: true, optional: true, required: false
  private _queueMappingOverride?: boolean | cdktf.IResolvable; 
  public get queueMappingOverride() {
    return this.getBooleanAttribute('queue_mapping_override');
  }
  public set queueMappingOverride(value: boolean | cdktf.IResolvable) {
    this._queueMappingOverride = value;
  }
  public resetQueueMappingOverride() {
    this._queueMappingOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMappingOverrideInput() {
    return this._queueMappingOverride;
  }

  // default_settings - computed: false, optional: true, required: false
  private _defaultSettings = new EmrYarnCapacityGlobalConfigDefaultSettingsList(this, "default_settings", true);
  public get defaultSettings() {
    return this._defaultSettings;
  }
  public putDefaultSettings(value: EmrYarnCapacityGlobalConfigDefaultSettings[] | cdktf.IResolvable) {
    this._defaultSettings.internalValue = value;
  }
  public resetDefaultSettings() {
    this._defaultSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsInput() {
    return this._defaultSettings.internalValue;
  }
}

export class EmrYarnCapacityGlobalConfigList extends cdktf.ComplexList {
  public internalValue? : EmrYarnCapacityGlobalConfig[] | cdktf.IResolvable

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
  public get(index: number): EmrYarnCapacityGlobalConfigOutputReference {
    return new EmrYarnCapacityGlobalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrYarnFairGlobalConfig {
  /**
  * Corresponding to the page procedural upper limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#user_max_apps_default EmrYarn#user_max_apps_default}
  */
  readonly userMaxAppsDefault?: number;
}

export function emrYarnFairGlobalConfigToTerraform(struct?: EmrYarnFairGlobalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_max_apps_default: cdktf.numberToTerraform(struct!.userMaxAppsDefault),
  }
}


export function emrYarnFairGlobalConfigToHclTerraform(struct?: EmrYarnFairGlobalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_max_apps_default: {
      value: cdktf.numberToHclTerraform(struct!.userMaxAppsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrYarnFairGlobalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrYarnFairGlobalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userMaxAppsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMaxAppsDefault = this._userMaxAppsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrYarnFairGlobalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userMaxAppsDefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userMaxAppsDefault = value.userMaxAppsDefault;
    }
  }

  // user_max_apps_default - computed: true, optional: true, required: false
  private _userMaxAppsDefault?: number; 
  public get userMaxAppsDefault() {
    return this.getNumberAttribute('user_max_apps_default');
  }
  public set userMaxAppsDefault(value: number) {
    this._userMaxAppsDefault = value;
  }
  public resetUserMaxAppsDefault() {
    this._userMaxAppsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMaxAppsDefaultInput() {
    return this._userMaxAppsDefault;
  }
}

export class EmrYarnFairGlobalConfigList extends cdktf.ComplexList {
  public internalValue? : EmrYarnFairGlobalConfig[] | cdktf.IResolvable

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
  public get(index: number): EmrYarnFairGlobalConfigOutputReference {
    return new EmrYarnFairGlobalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn tencentcloud_emr_yarn}
*/
export class EmrYarn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_emr_yarn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrYarn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrYarn to import
  * @param importFromId The id of the existing EmrYarn that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrYarn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_emr_yarn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/emr_yarn tencentcloud_emr_yarn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrYarnConfig
  */
  public constructor(scope: Construct, id: string, config: EmrYarnConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_emr_yarn',
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
    this._disableResourceScheduleSync = config.disableResourceScheduleSync;
    this._enableResourceSchedule = config.enableResourceSchedule;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._scheduler = config.scheduler;
    this._capacityGlobalConfig.internalValue = config.capacityGlobalConfig;
    this._fairGlobalConfig.internalValue = config.fairGlobalConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_scheduler - computed: true, optional: false, required: false
  public get activeScheduler() {
    return this.getStringAttribute('active_scheduler');
  }

  // disable_resource_schedule_sync - computed: false, optional: true, required: false
  private _disableResourceScheduleSync?: boolean | cdktf.IResolvable; 
  public get disableResourceScheduleSync() {
    return this.getBooleanAttribute('disable_resource_schedule_sync');
  }
  public set disableResourceScheduleSync(value: boolean | cdktf.IResolvable) {
    this._disableResourceScheduleSync = value;
  }
  public resetDisableResourceScheduleSync() {
    this._disableResourceScheduleSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResourceScheduleSyncInput() {
    return this._disableResourceScheduleSync;
  }

  // enable_resource_schedule - computed: true, optional: true, required: false
  private _enableResourceSchedule?: boolean | cdktf.IResolvable; 
  public get enableResourceSchedule() {
    return this.getBooleanAttribute('enable_resource_schedule');
  }
  public set enableResourceSchedule(value: boolean | cdktf.IResolvable) {
    this._enableResourceSchedule = value;
  }
  public resetEnableResourceSchedule() {
    this._enableResourceSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceScheduleInput() {
    return this._enableResourceSchedule;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // scheduler - computed: true, optional: true, required: false
  private _scheduler?: string; 
  public get scheduler() {
    return this.getStringAttribute('scheduler');
  }
  public set scheduler(value: string) {
    this._scheduler = value;
  }
  public resetScheduler() {
    this._scheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler;
  }

  // capacity_global_config - computed: false, optional: true, required: false
  private _capacityGlobalConfig = new EmrYarnCapacityGlobalConfigList(this, "capacity_global_config", false);
  public get capacityGlobalConfig() {
    return this._capacityGlobalConfig;
  }
  public putCapacityGlobalConfig(value: EmrYarnCapacityGlobalConfig[] | cdktf.IResolvable) {
    this._capacityGlobalConfig.internalValue = value;
  }
  public resetCapacityGlobalConfig() {
    this._capacityGlobalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityGlobalConfigInput() {
    return this._capacityGlobalConfig.internalValue;
  }

  // fair_global_config - computed: false, optional: true, required: false
  private _fairGlobalConfig = new EmrYarnFairGlobalConfigList(this, "fair_global_config", false);
  public get fairGlobalConfig() {
    return this._fairGlobalConfig;
  }
  public putFairGlobalConfig(value: EmrYarnFairGlobalConfig[] | cdktf.IResolvable) {
    this._fairGlobalConfig.internalValue = value;
  }
  public resetFairGlobalConfig() {
    this._fairGlobalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fairGlobalConfigInput() {
    return this._fairGlobalConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_resource_schedule_sync: cdktf.booleanToTerraform(this._disableResourceScheduleSync),
      enable_resource_schedule: cdktf.booleanToTerraform(this._enableResourceSchedule),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      capacity_global_config: cdktf.listMapper(emrYarnCapacityGlobalConfigToTerraform, true)(this._capacityGlobalConfig.internalValue),
      fair_global_config: cdktf.listMapper(emrYarnFairGlobalConfigToTerraform, true)(this._fairGlobalConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_resource_schedule_sync: {
        value: cdktf.booleanToHclTerraform(this._disableResourceScheduleSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_resource_schedule: {
        value: cdktf.booleanToHclTerraform(this._enableResourceSchedule),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler: {
        value: cdktf.stringToHclTerraform(this._scheduler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_global_config: {
        value: cdktf.listMapperHcl(emrYarnCapacityGlobalConfigToHclTerraform, true)(this._capacityGlobalConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrYarnCapacityGlobalConfigList",
      },
      fair_global_config: {
        value: cdktf.listMapperHcl(emrYarnFairGlobalConfigToHclTerraform, true)(this._fairGlobalConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrYarnFairGlobalConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
