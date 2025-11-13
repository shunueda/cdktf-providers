// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScfProvisionedConcurrencyConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the function for which to set the provisioned concurrency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#function_name ScfProvisionedConcurrencyConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#id ScfProvisionedConcurrencyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#max_capacity ScfProvisionedConcurrencyConfig#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * The minimum number of instances. It can not be smaller than 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#min_capacity ScfProvisionedConcurrencyConfig#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * Function namespace. Default value: default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#namespace ScfProvisionedConcurrencyConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the provisioned concurrency type. Default: Static provisioned concurrency. ConcurrencyUtilizationTracking: Scales the concurrency automatically according to the concurrency utilization. If ConcurrencyUtilizationTracking is passed in, TrackingTarget, MinCapacity and MaxCapacity are required, and VersionProvisionedConcurrencyNum must be 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#provisioned_type ScfProvisionedConcurrencyConfig#provisioned_type}
  */
  readonly provisionedType?: string;
  /**
  * Function version number. Note: the $LATEST version does not support provisioned concurrency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#qualifier ScfProvisionedConcurrencyConfig#qualifier}
  */
  readonly qualifier: string;
  /**
  * The target concurrency utilization. Range: (0,1) (two decimal places).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#tracking_target ScfProvisionedConcurrencyConfig#tracking_target}
  */
  readonly trackingTarget?: number;
  /**
  * Provisioned concurrency amount. Note: there is an upper limit for the sum of provisioned concurrency amounts of all versions, which currently is the function&amp;#39;s maximum concurrency quota minus 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#version_provisioned_concurrency_num ScfProvisionedConcurrencyConfig#version_provisioned_concurrency_num}
  */
  readonly versionProvisionedConcurrencyNum: number;
  /**
  * trigger_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#trigger_actions ScfProvisionedConcurrencyConfig#trigger_actions}
  */
  readonly triggerActions?: ScfProvisionedConcurrencyConfigTriggerActions[] | cdktf.IResolvable;
}
export interface ScfProvisionedConcurrencyConfigTriggerActions {
  /**
  * The provision type. Value: Default Note: This field may return null, indicating that no valid value can be found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#provisioned_type ScfProvisionedConcurrencyConfig#provisioned_type}
  */
  readonly provisionedType?: string;
  /**
  * Trigger time of the scheduled action in Cron expression. Seven fields are required and should be separated with a space. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#trigger_cron_config ScfProvisionedConcurrencyConfig#trigger_cron_config}
  */
  readonly triggerCronConfig: string;
  /**
  * Scheduled action name Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#trigger_name ScfProvisionedConcurrencyConfig#trigger_name}
  */
  readonly triggerName: string;
  /**
  * Target provisioned concurrency of the scheduled scaling action Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#trigger_provisioned_concurrency_num ScfProvisionedConcurrencyConfig#trigger_provisioned_concurrency_num}
  */
  readonly triggerProvisionedConcurrencyNum: number;
}

export function scfProvisionedConcurrencyConfigTriggerActionsToTerraform(struct?: ScfProvisionedConcurrencyConfigTriggerActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provisioned_type: cdktf.stringToTerraform(struct!.provisionedType),
    trigger_cron_config: cdktf.stringToTerraform(struct!.triggerCronConfig),
    trigger_name: cdktf.stringToTerraform(struct!.triggerName),
    trigger_provisioned_concurrency_num: cdktf.numberToTerraform(struct!.triggerProvisionedConcurrencyNum),
  }
}


export function scfProvisionedConcurrencyConfigTriggerActionsToHclTerraform(struct?: ScfProvisionedConcurrencyConfigTriggerActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provisioned_type: {
      value: cdktf.stringToHclTerraform(struct!.provisionedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_cron_config: {
      value: cdktf.stringToHclTerraform(struct!.triggerCronConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_name: {
      value: cdktf.stringToHclTerraform(struct!.triggerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_provisioned_concurrency_num: {
      value: cdktf.numberToHclTerraform(struct!.triggerProvisionedConcurrencyNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfProvisionedConcurrencyConfigTriggerActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScfProvisionedConcurrencyConfigTriggerActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provisionedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedType = this._provisionedType;
    }
    if (this._triggerCronConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerCronConfig = this._triggerCronConfig;
    }
    if (this._triggerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerName = this._triggerName;
    }
    if (this._triggerProvisionedConcurrencyNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerProvisionedConcurrencyNum = this._triggerProvisionedConcurrencyNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfProvisionedConcurrencyConfigTriggerActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provisionedType = undefined;
      this._triggerCronConfig = undefined;
      this._triggerName = undefined;
      this._triggerProvisionedConcurrencyNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provisionedType = value.provisionedType;
      this._triggerCronConfig = value.triggerCronConfig;
      this._triggerName = value.triggerName;
      this._triggerProvisionedConcurrencyNum = value.triggerProvisionedConcurrencyNum;
    }
  }

  // provisioned_type - computed: false, optional: true, required: false
  private _provisionedType?: string; 
  public get provisionedType() {
    return this.getStringAttribute('provisioned_type');
  }
  public set provisionedType(value: string) {
    this._provisionedType = value;
  }
  public resetProvisionedType() {
    this._provisionedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedTypeInput() {
    return this._provisionedType;
  }

  // trigger_cron_config - computed: false, optional: false, required: true
  private _triggerCronConfig?: string; 
  public get triggerCronConfig() {
    return this.getStringAttribute('trigger_cron_config');
  }
  public set triggerCronConfig(value: string) {
    this._triggerCronConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerCronConfigInput() {
    return this._triggerCronConfig;
  }

  // trigger_name - computed: false, optional: false, required: true
  private _triggerName?: string; 
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }
  public set triggerName(value: string) {
    this._triggerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerNameInput() {
    return this._triggerName;
  }

  // trigger_provisioned_concurrency_num - computed: false, optional: false, required: true
  private _triggerProvisionedConcurrencyNum?: number; 
  public get triggerProvisionedConcurrencyNum() {
    return this.getNumberAttribute('trigger_provisioned_concurrency_num');
  }
  public set triggerProvisionedConcurrencyNum(value: number) {
    this._triggerProvisionedConcurrencyNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerProvisionedConcurrencyNumInput() {
    return this._triggerProvisionedConcurrencyNum;
  }
}

export class ScfProvisionedConcurrencyConfigTriggerActionsList extends cdktf.ComplexList {
  public internalValue? : ScfProvisionedConcurrencyConfigTriggerActions[] | cdktf.IResolvable

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
  public get(index: number): ScfProvisionedConcurrencyConfigTriggerActionsOutputReference {
    return new ScfProvisionedConcurrencyConfigTriggerActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config tencentcloud_scf_provisioned_concurrency_config}
*/
export class ScfProvisionedConcurrencyConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_provisioned_concurrency_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScfProvisionedConcurrencyConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScfProvisionedConcurrencyConfig to import
  * @param importFromId The id of the existing ScfProvisionedConcurrencyConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScfProvisionedConcurrencyConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_provisioned_concurrency_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/scf_provisioned_concurrency_config tencentcloud_scf_provisioned_concurrency_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScfProvisionedConcurrencyConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ScfProvisionedConcurrencyConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_provisioned_concurrency_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._functionName = config.functionName;
    this._id = config.id;
    this._maxCapacity = config.maxCapacity;
    this._minCapacity = config.minCapacity;
    this._namespace = config.namespace;
    this._provisionedType = config.provisionedType;
    this._qualifier = config.qualifier;
    this._trackingTarget = config.trackingTarget;
    this._versionProvisionedConcurrencyNum = config.versionProvisionedConcurrencyNum;
    this._triggerActions.internalValue = config.triggerActions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // provisioned_type - computed: false, optional: true, required: false
  private _provisionedType?: string; 
  public get provisionedType() {
    return this.getStringAttribute('provisioned_type');
  }
  public set provisionedType(value: string) {
    this._provisionedType = value;
  }
  public resetProvisionedType() {
    this._provisionedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedTypeInput() {
    return this._provisionedType;
  }

  // qualifier - computed: false, optional: false, required: true
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // tracking_target - computed: false, optional: true, required: false
  private _trackingTarget?: number; 
  public get trackingTarget() {
    return this.getNumberAttribute('tracking_target');
  }
  public set trackingTarget(value: number) {
    this._trackingTarget = value;
  }
  public resetTrackingTarget() {
    this._trackingTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingTargetInput() {
    return this._trackingTarget;
  }

  // version_provisioned_concurrency_num - computed: false, optional: false, required: true
  private _versionProvisionedConcurrencyNum?: number; 
  public get versionProvisionedConcurrencyNum() {
    return this.getNumberAttribute('version_provisioned_concurrency_num');
  }
  public set versionProvisionedConcurrencyNum(value: number) {
    this._versionProvisionedConcurrencyNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionProvisionedConcurrencyNumInput() {
    return this._versionProvisionedConcurrencyNum;
  }

  // trigger_actions - computed: false, optional: true, required: false
  private _triggerActions = new ScfProvisionedConcurrencyConfigTriggerActionsList(this, "trigger_actions", false);
  public get triggerActions() {
    return this._triggerActions;
  }
  public putTriggerActions(value: ScfProvisionedConcurrencyConfigTriggerActions[] | cdktf.IResolvable) {
    this._triggerActions.internalValue = value;
  }
  public resetTriggerActions() {
    this._triggerActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerActionsInput() {
    return this._triggerActions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      min_capacity: cdktf.numberToTerraform(this._minCapacity),
      namespace: cdktf.stringToTerraform(this._namespace),
      provisioned_type: cdktf.stringToTerraform(this._provisionedType),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      tracking_target: cdktf.numberToTerraform(this._trackingTarget),
      version_provisioned_concurrency_num: cdktf.numberToTerraform(this._versionProvisionedConcurrencyNum),
      trigger_actions: cdktf.listMapper(scfProvisionedConcurrencyConfigTriggerActionsToTerraform, true)(this._triggerActions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
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
      max_capacity: {
        value: cdktf.numberToHclTerraform(this._maxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_capacity: {
        value: cdktf.numberToHclTerraform(this._minCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_type: {
        value: cdktf.stringToHclTerraform(this._provisionedType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualifier: {
        value: cdktf.stringToHclTerraform(this._qualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracking_target: {
        value: cdktf.numberToHclTerraform(this._trackingTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_provisioned_concurrency_num: {
        value: cdktf.numberToHclTerraform(this._versionProvisionedConcurrencyNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger_actions: {
        value: cdktf.listMapperHcl(scfProvisionedConcurrencyConfigTriggerActionsToHclTerraform, true)(this._triggerActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfProvisionedConcurrencyConfigTriggerActionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
