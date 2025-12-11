// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcStandardEngineResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatic start (task submission automatically pulls up the resource group) 0-automatic start, 1-not automatic start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#auto_launch DlcStandardEngineResourceGroup#auto_launch}
  */
  readonly autoLaunch?: number;
  /**
  * Automatically suspend resource groups. 0 - Automatically suspend, 1 - Not automatically suspend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#auto_pause DlcStandardEngineResourceGroup#auto_pause}
  */
  readonly autoPause?: number;
  /**
  * Automatic suspension time, in minutes, with a value range of 1-999 (after no tasks have reached AutoPauseTime, the resource group will automatically suspend).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#auto_pause_time DlcStandardEngineResourceGroup#auto_pause_time}
  */
  readonly autoPauseTime?: number;
  /**
  * Standard engine name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#data_engine_name DlcStandardEngineResourceGroup#data_engine_name}
  */
  readonly dataEngineName: string;
  /**
  * Driver CU specifications: Currently supported: small (default, 1 CU), medium (2 CU), large (4 CU), xlarge (8 CU). Memory CUs are CPUs with a ratio of 1:8, m.small (1 CU memory), m.medium (2 CU memory), m.large (4 CU memory), and m.xlarge (8 CU memory).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#driver_cu_spec DlcStandardEngineResourceGroup#driver_cu_spec}
  */
  readonly driverCuSpec?: string;
  /**
  * Standard engine resource group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#engine_resource_group_name DlcStandardEngineResourceGroup#engine_resource_group_name}
  */
  readonly engineResourceGroupName: string;
  /**
  * Executor CU specifications: Currently supported: small (default, 1 CU), medium (2 CU), large (4 CU), xlarge (8 CU). Memory CUs are CPUs with a ratio of 1:8, m.small (1 CU memory), m.medium (2 CU memory), m.large (4 CU memory), and m.xlarge (8 CU memory).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#executor_cu_spec DlcStandardEngineResourceGroup#executor_cu_spec}
  */
  readonly executorCuSpec?: string;
  /**
  * The framework type of the AI type resource group, machine-learning, python, spark-ml, if not filled in, the default is machine-learning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#frame_type DlcStandardEngineResourceGroup#frame_type}
  */
  readonly frameType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#id DlcStandardEngineResourceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image Name. 
  * Example value: image-xxx. If using a built-in image (ImageType is built-in), the ImageName for different frameworks is: machine-learning: pytorch-v2.5.1, scikit-learn-v1.6.0, tensorflow-v2.18.0, python: python-v3.10, spark-m: Standard-S 1.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#image_name DlcStandardEngineResourceGroup#image_name}
  */
  readonly imageName?: string;
  /**
  * Image type, build-in: built-in, custom: custom, if not filled in, the default is build-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#image_type DlcStandardEngineResourceGroup#image_type}
  */
  readonly imageType?: string;
  /**
  * Image ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#image_version DlcStandardEngineResourceGroup#image_version}
  */
  readonly imageVersion?: string;
  /**
  * The number of concurrent tasks is 5 by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#max_concurrency DlcStandardEngineResourceGroup#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Maximum number of executors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#max_executor_nums DlcStandardEngineResourceGroup#max_executor_nums}
  */
  readonly maxExecutorNums?: number;
  /**
  * Minimum number of executors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#min_executor_nums DlcStandardEngineResourceGroup#min_executor_nums}
  */
  readonly minExecutorNums?: number;
  /**
  * Network configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#network_config_names DlcStandardEngineResourceGroup#network_config_names}
  */
  readonly networkConfigNames?: string[];
  /**
  * Customized mirror domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#public_domain DlcStandardEngineResourceGroup#public_domain}
  */
  readonly publicDomain?: string;
  /**
  * The resource limit for a Python stand-alone node in a Python resource group must be smaller than the resource limit for the resource group. Small: 1cu Medium: 2cu Large: 4cu Xlarge: 8cu 4xlarge: 16cu 8xlarge: 32cu 16xlarge: 64cu. If the resource type is high memory, add m before the type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#python_cu_spec DlcStandardEngineResourceGroup#python_cu_spec}
  */
  readonly pythonCuSpec?: string;
  /**
  * Custom image location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#region_name DlcStandardEngineResourceGroup#region_name}
  */
  readonly regionName?: string;
  /**
  * Custom image instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#registry_id DlcStandardEngineResourceGroup#registry_id}
  */
  readonly registryId?: string;
  /**
  * Resource group scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#resource_group_scene DlcStandardEngineResourceGroup#resource_group_scene}
  */
  readonly resourceGroupScene?: string;
  /**
  * The state of the resource group. true: launch standard engine resource group; false: pause standard engine resource group. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#running_state DlcStandardEngineResourceGroup#running_state}
  */
  readonly runningState?: boolean | cdktf.IResolvable;
  /**
  * The AI resource group is valid, and the upper limit of available resources in the resource group must be less than the upper limit of engine resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#size DlcStandardEngineResourceGroup#size}
  */
  readonly size?: number;
  /**
  * Only the SQL resource group resource limit, only used for the express module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#spark_size DlcStandardEngineResourceGroup#spark_size}
  */
  readonly sparkSize?: number;
  /**
  * Only SQL resource group resource configuration mode, fast: fast mode, custom: custom mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#spark_spec_mode DlcStandardEngineResourceGroup#spark_spec_mode}
  */
  readonly sparkSpecMode?: string;
  /**
  * dynamic_config_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#dynamic_config_pairs DlcStandardEngineResourceGroup#dynamic_config_pairs}
  */
  readonly dynamicConfigPairs?: DlcStandardEngineResourceGroupDynamicConfigPairs[] | cdktf.IResolvable;
  /**
  * static_config_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#static_config_pairs DlcStandardEngineResourceGroup#static_config_pairs}
  */
  readonly staticConfigPairs?: DlcStandardEngineResourceGroupStaticConfigPairs[] | cdktf.IResolvable;
}
export interface DlcStandardEngineResourceGroupDynamicConfigPairs {
  /**
  * Configuration items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#config_item DlcStandardEngineResourceGroup#config_item}
  */
  readonly configItem: string;
  /**
  * Configuration values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#config_value DlcStandardEngineResourceGroup#config_value}
  */
  readonly configValue: string;
}

export function dlcStandardEngineResourceGroupDynamicConfigPairsToTerraform(struct?: DlcStandardEngineResourceGroupDynamicConfigPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_item: cdktf.stringToTerraform(struct!.configItem),
    config_value: cdktf.stringToTerraform(struct!.configValue),
  }
}


export function dlcStandardEngineResourceGroupDynamicConfigPairsToHclTerraform(struct?: DlcStandardEngineResourceGroupDynamicConfigPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_item: {
      value: cdktf.stringToHclTerraform(struct!.configItem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_value: {
      value: cdktf.stringToHclTerraform(struct!.configValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcStandardEngineResourceGroupDynamicConfigPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlcStandardEngineResourceGroupDynamicConfigPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.configItem = this._configItem;
    }
    if (this._configValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValue = this._configValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcStandardEngineResourceGroupDynamicConfigPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configItem = undefined;
      this._configValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configItem = value.configItem;
      this._configValue = value.configValue;
    }
  }

  // config_item - computed: false, optional: false, required: true
  private _configItem?: string; 
  public get configItem() {
    return this.getStringAttribute('config_item');
  }
  public set configItem(value: string) {
    this._configItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemInput() {
    return this._configItem;
  }

  // config_value - computed: false, optional: false, required: true
  private _configValue?: string; 
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
  public set configValue(value: string) {
    this._configValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configValueInput() {
    return this._configValue;
  }
}

export class DlcStandardEngineResourceGroupDynamicConfigPairsList extends cdktf.ComplexList {
  public internalValue? : DlcStandardEngineResourceGroupDynamicConfigPairs[] | cdktf.IResolvable

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
  public get(index: number): DlcStandardEngineResourceGroupDynamicConfigPairsOutputReference {
    return new DlcStandardEngineResourceGroupDynamicConfigPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlcStandardEngineResourceGroupStaticConfigPairs {
  /**
  * Configuration items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#config_item DlcStandardEngineResourceGroup#config_item}
  */
  readonly configItem: string;
  /**
  * Configuration values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#config_value DlcStandardEngineResourceGroup#config_value}
  */
  readonly configValue: string;
}

export function dlcStandardEngineResourceGroupStaticConfigPairsToTerraform(struct?: DlcStandardEngineResourceGroupStaticConfigPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_item: cdktf.stringToTerraform(struct!.configItem),
    config_value: cdktf.stringToTerraform(struct!.configValue),
  }
}


export function dlcStandardEngineResourceGroupStaticConfigPairsToHclTerraform(struct?: DlcStandardEngineResourceGroupStaticConfigPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_item: {
      value: cdktf.stringToHclTerraform(struct!.configItem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_value: {
      value: cdktf.stringToHclTerraform(struct!.configValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcStandardEngineResourceGroupStaticConfigPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlcStandardEngineResourceGroupStaticConfigPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.configItem = this._configItem;
    }
    if (this._configValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValue = this._configValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcStandardEngineResourceGroupStaticConfigPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configItem = undefined;
      this._configValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configItem = value.configItem;
      this._configValue = value.configValue;
    }
  }

  // config_item - computed: false, optional: false, required: true
  private _configItem?: string; 
  public get configItem() {
    return this.getStringAttribute('config_item');
  }
  public set configItem(value: string) {
    this._configItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemInput() {
    return this._configItem;
  }

  // config_value - computed: false, optional: false, required: true
  private _configValue?: string; 
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
  public set configValue(value: string) {
    this._configValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configValueInput() {
    return this._configValue;
  }
}

export class DlcStandardEngineResourceGroupStaticConfigPairsList extends cdktf.ComplexList {
  public internalValue? : DlcStandardEngineResourceGroupStaticConfigPairs[] | cdktf.IResolvable

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
  public get(index: number): DlcStandardEngineResourceGroupStaticConfigPairsOutputReference {
    return new DlcStandardEngineResourceGroupStaticConfigPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group tencentcloud_dlc_standard_engine_resource_group}
*/
export class DlcStandardEngineResourceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_standard_engine_resource_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcStandardEngineResourceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcStandardEngineResourceGroup to import
  * @param importFromId The id of the existing DlcStandardEngineResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcStandardEngineResourceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_standard_engine_resource_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_standard_engine_resource_group tencentcloud_dlc_standard_engine_resource_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcStandardEngineResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DlcStandardEngineResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_standard_engine_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoLaunch = config.autoLaunch;
    this._autoPause = config.autoPause;
    this._autoPauseTime = config.autoPauseTime;
    this._dataEngineName = config.dataEngineName;
    this._driverCuSpec = config.driverCuSpec;
    this._engineResourceGroupName = config.engineResourceGroupName;
    this._executorCuSpec = config.executorCuSpec;
    this._frameType = config.frameType;
    this._id = config.id;
    this._imageName = config.imageName;
    this._imageType = config.imageType;
    this._imageVersion = config.imageVersion;
    this._maxConcurrency = config.maxConcurrency;
    this._maxExecutorNums = config.maxExecutorNums;
    this._minExecutorNums = config.minExecutorNums;
    this._networkConfigNames = config.networkConfigNames;
    this._publicDomain = config.publicDomain;
    this._pythonCuSpec = config.pythonCuSpec;
    this._regionName = config.regionName;
    this._registryId = config.registryId;
    this._resourceGroupScene = config.resourceGroupScene;
    this._runningState = config.runningState;
    this._size = config.size;
    this._sparkSize = config.sparkSize;
    this._sparkSpecMode = config.sparkSpecMode;
    this._dynamicConfigPairs.internalValue = config.dynamicConfigPairs;
    this._staticConfigPairs.internalValue = config.staticConfigPairs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_launch - computed: true, optional: true, required: false
  private _autoLaunch?: number; 
  public get autoLaunch() {
    return this.getNumberAttribute('auto_launch');
  }
  public set autoLaunch(value: number) {
    this._autoLaunch = value;
  }
  public resetAutoLaunch() {
    this._autoLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLaunchInput() {
    return this._autoLaunch;
  }

  // auto_pause - computed: true, optional: true, required: false
  private _autoPause?: number; 
  public get autoPause() {
    return this.getNumberAttribute('auto_pause');
  }
  public set autoPause(value: number) {
    this._autoPause = value;
  }
  public resetAutoPause() {
    this._autoPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseInput() {
    return this._autoPause;
  }

  // auto_pause_time - computed: false, optional: true, required: false
  private _autoPauseTime?: number; 
  public get autoPauseTime() {
    return this.getNumberAttribute('auto_pause_time');
  }
  public set autoPauseTime(value: number) {
    this._autoPauseTime = value;
  }
  public resetAutoPauseTime() {
    this._autoPauseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseTimeInput() {
    return this._autoPauseTime;
  }

  // data_engine_name - computed: false, optional: false, required: true
  private _dataEngineName?: string; 
  public get dataEngineName() {
    return this.getStringAttribute('data_engine_name');
  }
  public set dataEngineName(value: string) {
    this._dataEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineNameInput() {
    return this._dataEngineName;
  }

  // driver_cu_spec - computed: true, optional: true, required: false
  private _driverCuSpec?: string; 
  public get driverCuSpec() {
    return this.getStringAttribute('driver_cu_spec');
  }
  public set driverCuSpec(value: string) {
    this._driverCuSpec = value;
  }
  public resetDriverCuSpec() {
    this._driverCuSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverCuSpecInput() {
    return this._driverCuSpec;
  }

  // engine_resource_group_id - computed: true, optional: false, required: false
  public get engineResourceGroupId() {
    return this.getStringAttribute('engine_resource_group_id');
  }

  // engine_resource_group_name - computed: false, optional: false, required: true
  private _engineResourceGroupName?: string; 
  public get engineResourceGroupName() {
    return this.getStringAttribute('engine_resource_group_name');
  }
  public set engineResourceGroupName(value: string) {
    this._engineResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineResourceGroupNameInput() {
    return this._engineResourceGroupName;
  }

  // executor_cu_spec - computed: true, optional: true, required: false
  private _executorCuSpec?: string; 
  public get executorCuSpec() {
    return this.getStringAttribute('executor_cu_spec');
  }
  public set executorCuSpec(value: string) {
    this._executorCuSpec = value;
  }
  public resetExecutorCuSpec() {
    this._executorCuSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorCuSpecInput() {
    return this._executorCuSpec;
  }

  // frame_type - computed: false, optional: true, required: false
  private _frameType?: string; 
  public get frameType() {
    return this.getStringAttribute('frame_type');
  }
  public set frameType(value: string) {
    this._frameType = value;
  }
  public resetFrameType() {
    this._frameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameTypeInput() {
    return this._frameType;
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

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // image_version - computed: false, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // max_executor_nums - computed: true, optional: true, required: false
  private _maxExecutorNums?: number; 
  public get maxExecutorNums() {
    return this.getNumberAttribute('max_executor_nums');
  }
  public set maxExecutorNums(value: number) {
    this._maxExecutorNums = value;
  }
  public resetMaxExecutorNums() {
    this._maxExecutorNums = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutorNumsInput() {
    return this._maxExecutorNums;
  }

  // min_executor_nums - computed: true, optional: true, required: false
  private _minExecutorNums?: number; 
  public get minExecutorNums() {
    return this.getNumberAttribute('min_executor_nums');
  }
  public set minExecutorNums(value: number) {
    this._minExecutorNums = value;
  }
  public resetMinExecutorNums() {
    this._minExecutorNums = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutorNumsInput() {
    return this._minExecutorNums;
  }

  // network_config_names - computed: false, optional: true, required: false
  private _networkConfigNames?: string[]; 
  public get networkConfigNames() {
    return cdktf.Fn.tolist(this.getListAttribute('network_config_names'));
  }
  public set networkConfigNames(value: string[]) {
    this._networkConfigNames = value;
  }
  public resetNetworkConfigNames() {
    this._networkConfigNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigNamesInput() {
    return this._networkConfigNames;
  }

  // public_domain - computed: false, optional: true, required: false
  private _publicDomain?: string; 
  public get publicDomain() {
    return this.getStringAttribute('public_domain');
  }
  public set publicDomain(value: string) {
    this._publicDomain = value;
  }
  public resetPublicDomain() {
    this._publicDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDomainInput() {
    return this._publicDomain;
  }

  // python_cu_spec - computed: false, optional: true, required: false
  private _pythonCuSpec?: string; 
  public get pythonCuSpec() {
    return this.getStringAttribute('python_cu_spec');
  }
  public set pythonCuSpec(value: string) {
    this._pythonCuSpec = value;
  }
  public resetPythonCuSpec() {
    this._pythonCuSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCuSpecInput() {
    return this._pythonCuSpec;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // registry_id - computed: false, optional: true, required: false
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // resource_group_scene - computed: false, optional: true, required: false
  private _resourceGroupScene?: string; 
  public get resourceGroupScene() {
    return this.getStringAttribute('resource_group_scene');
  }
  public set resourceGroupScene(value: string) {
    this._resourceGroupScene = value;
  }
  public resetResourceGroupScene() {
    this._resourceGroupScene = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupSceneInput() {
    return this._resourceGroupScene;
  }

  // running_state - computed: true, optional: true, required: false
  private _runningState?: boolean | cdktf.IResolvable; 
  public get runningState() {
    return this.getBooleanAttribute('running_state');
  }
  public set runningState(value: boolean | cdktf.IResolvable) {
    this._runningState = value;
  }
  public resetRunningState() {
    this._runningState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningStateInput() {
    return this._runningState;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // spark_size - computed: false, optional: true, required: false
  private _sparkSize?: number; 
  public get sparkSize() {
    return this.getNumberAttribute('spark_size');
  }
  public set sparkSize(value: number) {
    this._sparkSize = value;
  }
  public resetSparkSize() {
    this._sparkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSizeInput() {
    return this._sparkSize;
  }

  // spark_spec_mode - computed: false, optional: true, required: false
  private _sparkSpecMode?: string; 
  public get sparkSpecMode() {
    return this.getStringAttribute('spark_spec_mode');
  }
  public set sparkSpecMode(value: string) {
    this._sparkSpecMode = value;
  }
  public resetSparkSpecMode() {
    this._sparkSpecMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSpecModeInput() {
    return this._sparkSpecMode;
  }

  // dynamic_config_pairs - computed: false, optional: true, required: false
  private _dynamicConfigPairs = new DlcStandardEngineResourceGroupDynamicConfigPairsList(this, "dynamic_config_pairs", false);
  public get dynamicConfigPairs() {
    return this._dynamicConfigPairs;
  }
  public putDynamicConfigPairs(value: DlcStandardEngineResourceGroupDynamicConfigPairs[] | cdktf.IResolvable) {
    this._dynamicConfigPairs.internalValue = value;
  }
  public resetDynamicConfigPairs() {
    this._dynamicConfigPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicConfigPairsInput() {
    return this._dynamicConfigPairs.internalValue;
  }

  // static_config_pairs - computed: false, optional: true, required: false
  private _staticConfigPairs = new DlcStandardEngineResourceGroupStaticConfigPairsList(this, "static_config_pairs", false);
  public get staticConfigPairs() {
    return this._staticConfigPairs;
  }
  public putStaticConfigPairs(value: DlcStandardEngineResourceGroupStaticConfigPairs[] | cdktf.IResolvable) {
    this._staticConfigPairs.internalValue = value;
  }
  public resetStaticConfigPairs() {
    this._staticConfigPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticConfigPairsInput() {
    return this._staticConfigPairs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_launch: cdktf.numberToTerraform(this._autoLaunch),
      auto_pause: cdktf.numberToTerraform(this._autoPause),
      auto_pause_time: cdktf.numberToTerraform(this._autoPauseTime),
      data_engine_name: cdktf.stringToTerraform(this._dataEngineName),
      driver_cu_spec: cdktf.stringToTerraform(this._driverCuSpec),
      engine_resource_group_name: cdktf.stringToTerraform(this._engineResourceGroupName),
      executor_cu_spec: cdktf.stringToTerraform(this._executorCuSpec),
      frame_type: cdktf.stringToTerraform(this._frameType),
      id: cdktf.stringToTerraform(this._id),
      image_name: cdktf.stringToTerraform(this._imageName),
      image_type: cdktf.stringToTerraform(this._imageType),
      image_version: cdktf.stringToTerraform(this._imageVersion),
      max_concurrency: cdktf.numberToTerraform(this._maxConcurrency),
      max_executor_nums: cdktf.numberToTerraform(this._maxExecutorNums),
      min_executor_nums: cdktf.numberToTerraform(this._minExecutorNums),
      network_config_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkConfigNames),
      public_domain: cdktf.stringToTerraform(this._publicDomain),
      python_cu_spec: cdktf.stringToTerraform(this._pythonCuSpec),
      region_name: cdktf.stringToTerraform(this._regionName),
      registry_id: cdktf.stringToTerraform(this._registryId),
      resource_group_scene: cdktf.stringToTerraform(this._resourceGroupScene),
      running_state: cdktf.booleanToTerraform(this._runningState),
      size: cdktf.numberToTerraform(this._size),
      spark_size: cdktf.numberToTerraform(this._sparkSize),
      spark_spec_mode: cdktf.stringToTerraform(this._sparkSpecMode),
      dynamic_config_pairs: cdktf.listMapper(dlcStandardEngineResourceGroupDynamicConfigPairsToTerraform, true)(this._dynamicConfigPairs.internalValue),
      static_config_pairs: cdktf.listMapper(dlcStandardEngineResourceGroupStaticConfigPairsToTerraform, true)(this._staticConfigPairs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_launch: {
        value: cdktf.numberToHclTerraform(this._autoLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_pause: {
        value: cdktf.numberToHclTerraform(this._autoPause),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_pause_time: {
        value: cdktf.numberToHclTerraform(this._autoPauseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_engine_name: {
        value: cdktf.stringToHclTerraform(this._dataEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver_cu_spec: {
        value: cdktf.stringToHclTerraform(this._driverCuSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._engineResourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executor_cu_spec: {
        value: cdktf.stringToHclTerraform(this._executorCuSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frame_type: {
        value: cdktf.stringToHclTerraform(this._frameType),
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
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_type: {
        value: cdktf.stringToHclTerraform(this._imageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_version: {
        value: cdktf.stringToHclTerraform(this._imageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrency: {
        value: cdktf.numberToHclTerraform(this._maxConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_executor_nums: {
        value: cdktf.numberToHclTerraform(this._maxExecutorNums),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_executor_nums: {
        value: cdktf.numberToHclTerraform(this._minExecutorNums),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_config_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkConfigNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      public_domain: {
        value: cdktf.stringToHclTerraform(this._publicDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      python_cu_spec: {
        value: cdktf.stringToHclTerraform(this._pythonCuSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_scene: {
        value: cdktf.stringToHclTerraform(this._resourceGroupScene),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      running_state: {
        value: cdktf.booleanToHclTerraform(this._runningState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spark_size: {
        value: cdktf.numberToHclTerraform(this._sparkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spark_spec_mode: {
        value: cdktf.stringToHclTerraform(this._sparkSpecMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_config_pairs: {
        value: cdktf.listMapperHcl(dlcStandardEngineResourceGroupDynamicConfigPairsToHclTerraform, true)(this._dynamicConfigPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcStandardEngineResourceGroupDynamicConfigPairsList",
      },
      static_config_pairs: {
        value: cdktf.listMapperHcl(dlcStandardEngineResourceGroupStaticConfigPairsToHclTerraform, true)(this._staticConfigPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcStandardEngineResourceGroupStaticConfigPairsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
