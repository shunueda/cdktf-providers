// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenServicePlanListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan_list#project DataAivenServicePlanList#project}
  */
  readonly project: string;
  /**
  * Service type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan_list#service_type DataAivenServicePlanList#service_type}
  */
  readonly serviceType: string;
  /**
  * service_plans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan_list#service_plans DataAivenServicePlanList#service_plans}
  */
  readonly servicePlans?: DataAivenServicePlanListServicePlans[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan_list#timeouts DataAivenServicePlanList#timeouts}
  */
  readonly timeouts?: DataAivenServicePlanListTimeouts;
}
export interface DataAivenServicePlanListServicePlansRegions {
}

export function dataAivenServicePlanListServicePlansRegionsToTerraform(struct?: DataAivenServicePlanListServicePlansRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServicePlanListServicePlansRegionsToHclTerraform(struct?: DataAivenServicePlanListServicePlansRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServicePlanListServicePlansRegionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAivenServicePlanListServicePlansRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServicePlanListServicePlansRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_space_cap_mb - computed: true, optional: false, required: false
  public get diskSpaceCapMb() {
    return this.getNumberAttribute('disk_space_cap_mb');
  }

  // disk_space_gb_price_usd - computed: true, optional: false, required: false
  public get diskSpaceGbPriceUsd() {
    return this.getStringAttribute('disk_space_gb_price_usd');
  }

  // disk_space_mb - computed: true, optional: false, required: false
  public get diskSpaceMb() {
    return this.getNumberAttribute('disk_space_mb');
  }

  // disk_space_step_mb - computed: true, optional: false, required: false
  public get diskSpaceStepMb() {
    return this.getNumberAttribute('disk_space_step_mb');
  }

  // node_cpu_count - computed: true, optional: false, required: false
  public get nodeCpuCount() {
    return this.getNumberAttribute('node_cpu_count');
  }

  // node_memory_mb - computed: true, optional: false, required: false
  public get nodeMemoryMb() {
    return this.getNumberAttribute('node_memory_mb');
  }

  // object_storage_gb_price_usd - computed: true, optional: false, required: false
  public get objectStorageGbPriceUsd() {
    return this.getStringAttribute('object_storage_gb_price_usd');
  }

  // price_usd - computed: true, optional: false, required: false
  public get priceUsd() {
    return this.getStringAttribute('price_usd');
  }
}

export class DataAivenServicePlanListServicePlansRegionsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAivenServicePlanListServicePlansRegionsOutputReference {
    return new DataAivenServicePlanListServicePlansRegionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAivenServicePlanListServicePlans {
}

export function dataAivenServicePlanListServicePlansToTerraform(struct?: DataAivenServicePlanListServicePlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServicePlanListServicePlansToHclTerraform(struct?: DataAivenServicePlanListServicePlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServicePlanListServicePlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServicePlanListServicePlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServicePlanListServicePlans | cdktf.IResolvable | undefined) {
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

  // max_memory_percent - computed: true, optional: false, required: false
  public get maxMemoryPercent() {
    return this.getNumberAttribute('max_memory_percent');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new DataAivenServicePlanListServicePlansRegionsMap(this, "regions");
  public get regions() {
    return this._regions;
  }

  // service_plan - computed: true, optional: false, required: false
  public get servicePlan() {
    return this.getStringAttribute('service_plan');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // shard_count - computed: true, optional: false, required: false
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
}

export class DataAivenServicePlanListServicePlansList extends cdktf.ComplexList {
  public internalValue? : DataAivenServicePlanListServicePlans[] | cdktf.IResolvable

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
  public get(index: number): DataAivenServicePlanListServicePlansOutputReference {
    return new DataAivenServicePlanListServicePlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServicePlanListTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan_list#read DataAivenServicePlanList#read}
  */
  readonly read?: string;
}

export function dataAivenServicePlanListTimeoutsToTerraform(struct?: DataAivenServicePlanListTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAivenServicePlanListTimeoutsToHclTerraform(struct?: DataAivenServicePlanListTimeouts | cdktf.IResolvable): any {
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

export class DataAivenServicePlanListTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAivenServicePlanListTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAivenServicePlanListTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan_list aiven_service_plan_list}
*/
export class DataAivenServicePlanList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_service_plan_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenServicePlanList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenServicePlanList to import
  * @param importFromId The id of the existing DataAivenServicePlanList that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenServicePlanList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_service_plan_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_plan_list aiven_service_plan_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenServicePlanListConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenServicePlanListConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_service_plan_list',
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
    this._project = config.project;
    this._serviceType = config.serviceType;
    this._servicePlans.internalValue = config.servicePlans;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service_plans - computed: false, optional: true, required: false
  private _servicePlans = new DataAivenServicePlanListServicePlansList(this, "service_plans", false);
  public get servicePlans() {
    return this._servicePlans;
  }
  public putServicePlans(value: DataAivenServicePlanListServicePlans[] | cdktf.IResolvable) {
    this._servicePlans.internalValue = value;
  }
  public resetServicePlans() {
    this._servicePlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePlansInput() {
    return this._servicePlans.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAivenServicePlanListTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAivenServicePlanListTimeouts) {
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
      project: cdktf.stringToTerraform(this._project),
      service_type: cdktf.stringToTerraform(this._serviceType),
      service_plans: cdktf.listMapper(dataAivenServicePlanListServicePlansToTerraform, true)(this._servicePlans.internalValue),
      timeouts: dataAivenServicePlanListTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project: {
        value: cdktf.stringToHclTerraform(this._project),
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
      service_plans: {
        value: cdktf.listMapperHcl(dataAivenServicePlanListServicePlansToHclTerraform, true)(this._servicePlans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAivenServicePlanListServicePlansList",
      },
      timeouts: {
        value: dataAivenServicePlanListTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAivenServicePlanListTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
