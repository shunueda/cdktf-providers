// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenServicePlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud region name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan#cloud_name DataAivenServicePlan#cloud_name}
  */
  readonly cloudName: string;
  /**
  * Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan#project DataAivenServicePlan#project}
  */
  readonly project: string;
  /**
  * Service plan name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan#service_plan DataAivenServicePlan#service_plan}
  */
  readonly servicePlan: string;
  /**
  * Service type code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan#service_type DataAivenServicePlan#service_type}
  */
  readonly serviceType: string;
  /**
  * backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan#backup_config DataAivenServicePlan#backup_config}
  */
  readonly backupConfig?: DataAivenServicePlanBackupConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan#timeouts DataAivenServicePlan#timeouts}
  */
  readonly timeouts?: DataAivenServicePlanTimeouts;
}
export interface DataAivenServicePlanBackupConfig {
}

export function dataAivenServicePlanBackupConfigToTerraform(struct?: DataAivenServicePlanBackupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServicePlanBackupConfigToHclTerraform(struct?: DataAivenServicePlanBackupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServicePlanBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServicePlanBackupConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServicePlanBackupConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // frequent_interval_minutes - computed: true, optional: false, required: false
  public get frequentIntervalMinutes() {
    return this.getNumberAttribute('frequent_interval_minutes');
  }

  // frequent_oldest_age_minutes - computed: true, optional: false, required: false
  public get frequentOldestAgeMinutes() {
    return this.getNumberAttribute('frequent_oldest_age_minutes');
  }

  // infrequent_interval_minutes - computed: true, optional: false, required: false
  public get infrequentIntervalMinutes() {
    return this.getNumberAttribute('infrequent_interval_minutes');
  }

  // infrequent_oldest_age_minutes - computed: true, optional: false, required: false
  public get infrequentOldestAgeMinutes() {
    return this.getNumberAttribute('infrequent_oldest_age_minutes');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // recovery_mode - computed: true, optional: false, required: false
  public get recoveryMode() {
    return this.getStringAttribute('recovery_mode');
  }
}

export class DataAivenServicePlanBackupConfigList extends cdktf.ComplexList {
  public internalValue? : DataAivenServicePlanBackupConfig[] | cdktf.IResolvable

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
  public get(index: number): DataAivenServicePlanBackupConfigOutputReference {
    return new DataAivenServicePlanBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServicePlanTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan#read DataAivenServicePlan#read}
  */
  readonly read?: string;
}

export function dataAivenServicePlanTimeoutsToTerraform(struct?: DataAivenServicePlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAivenServicePlanTimeoutsToHclTerraform(struct?: DataAivenServicePlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAivenServicePlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAivenServicePlanTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServicePlanTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan aiven_service_plan}
*/
export class DataAivenServicePlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_service_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenServicePlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenServicePlan to import
  * @param importFromId The id of the existing DataAivenServicePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenServicePlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_service_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan aiven_service_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenServicePlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenServicePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_service_plan',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudName = config.cloudName;
    this._project = config.project;
    this._servicePlan = config.servicePlan;
    this._serviceType = config.serviceType;
    this._backupConfig.internalValue = config.backupConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_price_usd - computed: true, optional: false, required: false
  public get basePriceUsd() {
    return this.getStringAttribute('base_price_usd');
  }

  // cloud_name - computed: false, optional: false, required: true
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // disk_space_cap_mb - computed: true, optional: false, required: false
  public get diskSpaceCapMb() {
    return this.getNumberAttribute('disk_space_cap_mb');
  }

  // disk_space_mb - computed: true, optional: false, required: false
  public get diskSpaceMb() {
    return this.getNumberAttribute('disk_space_mb');
  }

  // disk_space_step_mb - computed: true, optional: false, required: false
  public get diskSpaceStepMb() {
    return this.getNumberAttribute('disk_space_step_mb');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_memory_percent - computed: true, optional: false, required: false
  public get maxMemoryPercent() {
    return this.getNumberAttribute('max_memory_percent');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // object_storage_gb_price_usd - computed: true, optional: false, required: false
  public get objectStorageGbPriceUsd() {
    return this.getStringAttribute('object_storage_gb_price_usd');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // service_plan - computed: false, optional: false, required: true
  private _servicePlan?: string; 
  public get servicePlan() {
    return this.getStringAttribute('service_plan');
  }
  public set servicePlan(value: string) {
    this._servicePlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePlanInput() {
    return this._servicePlan;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // shard_count - computed: true, optional: false, required: false
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }

  // backup_config - computed: false, optional: true, required: false
  private _backupConfig = new DataAivenServicePlanBackupConfigList(this, "backup_config", false);
  public get backupConfig() {
    return this._backupConfig;
  }
  public putBackupConfig(value: DataAivenServicePlanBackupConfig[] | cdktf.IResolvable) {
    this._backupConfig.internalValue = value;
  }
  public resetBackupConfig() {
    this._backupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigInput() {
    return this._backupConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAivenServicePlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAivenServicePlanTimeouts) {
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
      cloud_name: cdktf.stringToTerraform(this._cloudName),
      project: cdktf.stringToTerraform(this._project),
      service_plan: cdktf.stringToTerraform(this._servicePlan),
      service_type: cdktf.stringToTerraform(this._serviceType),
      backup_config: cdktf.listMapper(dataAivenServicePlanBackupConfigToTerraform, true)(this._backupConfig.internalValue),
      timeouts: dataAivenServicePlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_name: {
        value: cdktf.stringToHclTerraform(this._cloudName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_plan: {
        value: cdktf.stringToHclTerraform(this._servicePlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_config: {
        value: cdktf.listMapperHcl(dataAivenServicePlanBackupConfigToHclTerraform, true)(this._backupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAivenServicePlanBackupConfigList",
      },
      timeouts: {
        value: dataAivenServicePlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAivenServicePlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
