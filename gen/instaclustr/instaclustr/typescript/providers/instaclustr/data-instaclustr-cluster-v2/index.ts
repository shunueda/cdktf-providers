// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#cluster_id DataInstaclustrClusterV2#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#id DataInstaclustrClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#filter DataInstaclustrClusterV2#filter}
  */
  readonly filter?: DataInstaclustrClusterV2Filter[] | cdktf.IResolvable;
  /**
  * maintenance_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#maintenance_events DataInstaclustrClusterV2#maintenance_events}
  */
  readonly maintenanceEvents?: DataInstaclustrClusterV2MaintenanceEvents[] | cdktf.IResolvable;
}
export interface DataInstaclustrClusterV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#name DataInstaclustrClusterV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#values DataInstaclustrClusterV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrClusterV2FilterToTerraform(struct?: DataInstaclustrClusterV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrClusterV2FilterToHclTerraform(struct?: DataInstaclustrClusterV2Filter | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClusterV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClusterV2Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClusterV2Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataInstaclustrClusterV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClusterV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClusterV2FilterOutputReference {
    return new DataInstaclustrClusterV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClusterV2MaintenanceEvents {
  /**
  * ID of the cluster this maintenance event relates to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#cluster_id DataInstaclustrClusterV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * A text description of the activities being performed in this maintenance event
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#description DataInstaclustrClusterV2#description}
  */
  readonly description?: string;
  /**
  * Unique ID for this maintenance event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#id DataInstaclustrClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If this event can still be rescheduled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#is_finalized DataInstaclustrClusterV2#is_finalized}
  */
  readonly isFinalized?: boolean | cdktf.IResolvable;
  /**
  * When this maintenance event is scheduled to end in UTC time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#scheduled_end_time DataInstaclustrClusterV2#scheduled_end_time}
  */
  readonly scheduledEndTime?: string;
  /**
  * When this maintenance event is scheduled to start in UTC time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#scheduled_start_time DataInstaclustrClusterV2#scheduled_start_time}
  */
  readonly scheduledStartTime?: string;
  /**
  * The latest limit for the scheduled start time in UTC time, i.e., scheduled start time will be before this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#scheduled_start_time_max DataInstaclustrClusterV2#scheduled_start_time_max}
  */
  readonly scheduledStartTimeMax?: string;
  /**
  * The earliest limit for the scheduled start time in UTC time, i.e., scheduled start time will be after this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#scheduled_start_time_min DataInstaclustrClusterV2#scheduled_start_time_min}
  */
  readonly scheduledStartTimeMin?: string;
}

export function dataInstaclustrClusterV2MaintenanceEventsToTerraform(struct?: DataInstaclustrClusterV2MaintenanceEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    is_finalized: cdktf.booleanToTerraform(struct!.isFinalized),
    scheduled_end_time: cdktf.stringToTerraform(struct!.scheduledEndTime),
    scheduled_start_time: cdktf.stringToTerraform(struct!.scheduledStartTime),
    scheduled_start_time_max: cdktf.stringToTerraform(struct!.scheduledStartTimeMax),
    scheduled_start_time_min: cdktf.stringToTerraform(struct!.scheduledStartTimeMin),
  }
}


export function dataInstaclustrClusterV2MaintenanceEventsToHclTerraform(struct?: DataInstaclustrClusterV2MaintenanceEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_finalized: {
      value: cdktf.booleanToHclTerraform(struct!.isFinalized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduled_end_time: {
      value: cdktf.stringToHclTerraform(struct!.scheduledEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_start_time: {
      value: cdktf.stringToHclTerraform(struct!.scheduledStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_start_time_max: {
      value: cdktf.stringToHclTerraform(struct!.scheduledStartTimeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_start_time_min: {
      value: cdktf.stringToHclTerraform(struct!.scheduledStartTimeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClusterV2MaintenanceEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClusterV2MaintenanceEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isFinalized !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFinalized = this._isFinalized;
    }
    if (this._scheduledEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledEndTime = this._scheduledEndTime;
    }
    if (this._scheduledStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledStartTime = this._scheduledStartTime;
    }
    if (this._scheduledStartTimeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledStartTimeMax = this._scheduledStartTimeMax;
    }
    if (this._scheduledStartTimeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledStartTimeMin = this._scheduledStartTimeMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClusterV2MaintenanceEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._description = undefined;
      this._id = undefined;
      this._isFinalized = undefined;
      this._scheduledEndTime = undefined;
      this._scheduledStartTime = undefined;
      this._scheduledStartTimeMax = undefined;
      this._scheduledStartTimeMin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._description = value.description;
      this._id = value.id;
      this._isFinalized = value.isFinalized;
      this._scheduledEndTime = value.scheduledEndTime;
      this._scheduledStartTime = value.scheduledStartTime;
      this._scheduledStartTimeMax = value.scheduledStartTimeMax;
      this._scheduledStartTimeMin = value.scheduledStartTimeMin;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // is_finalized - computed: true, optional: true, required: false
  private _isFinalized?: boolean | cdktf.IResolvable; 
  public get isFinalized() {
    return this.getBooleanAttribute('is_finalized');
  }
  public set isFinalized(value: boolean | cdktf.IResolvable) {
    this._isFinalized = value;
  }
  public resetIsFinalized() {
    this._isFinalized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFinalizedInput() {
    return this._isFinalized;
  }

  // scheduled_end_time - computed: true, optional: true, required: false
  private _scheduledEndTime?: string; 
  public get scheduledEndTime() {
    return this.getStringAttribute('scheduled_end_time');
  }
  public set scheduledEndTime(value: string) {
    this._scheduledEndTime = value;
  }
  public resetScheduledEndTime() {
    this._scheduledEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledEndTimeInput() {
    return this._scheduledEndTime;
  }

  // scheduled_start_time - computed: true, optional: true, required: false
  private _scheduledStartTime?: string; 
  public get scheduledStartTime() {
    return this.getStringAttribute('scheduled_start_time');
  }
  public set scheduledStartTime(value: string) {
    this._scheduledStartTime = value;
  }
  public resetScheduledStartTime() {
    this._scheduledStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledStartTimeInput() {
    return this._scheduledStartTime;
  }

  // scheduled_start_time_max - computed: true, optional: true, required: false
  private _scheduledStartTimeMax?: string; 
  public get scheduledStartTimeMax() {
    return this.getStringAttribute('scheduled_start_time_max');
  }
  public set scheduledStartTimeMax(value: string) {
    this._scheduledStartTimeMax = value;
  }
  public resetScheduledStartTimeMax() {
    this._scheduledStartTimeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledStartTimeMaxInput() {
    return this._scheduledStartTimeMax;
  }

  // scheduled_start_time_min - computed: true, optional: true, required: false
  private _scheduledStartTimeMin?: string; 
  public get scheduledStartTimeMin() {
    return this.getStringAttribute('scheduled_start_time_min');
  }
  public set scheduledStartTimeMin(value: string) {
    this._scheduledStartTimeMin = value;
  }
  public resetScheduledStartTimeMin() {
    this._scheduledStartTimeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledStartTimeMinInput() {
    return this._scheduledStartTimeMin;
  }
}

export class DataInstaclustrClusterV2MaintenanceEventsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClusterV2MaintenanceEvents[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClusterV2MaintenanceEventsOutputReference {
    return new DataInstaclustrClusterV2MaintenanceEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2 instaclustr_cluster_v2}
*/
export class DataInstaclustrClusterV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClusterV2 to import
  * @param importFromId The id of the existing DataInstaclustrClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_v2 instaclustr_cluster_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.32',
        providerVersionConstraint: '2.1.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._filter.internalValue = config.filter;
    this._maintenanceEvents.internalValue = config.maintenanceEvents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrClusterV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrClusterV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // maintenance_events - computed: false, optional: true, required: false
  private _maintenanceEvents = new DataInstaclustrClusterV2MaintenanceEventsList(this, "maintenance_events", false);
  public get maintenanceEvents() {
    return this._maintenanceEvents;
  }
  public putMaintenanceEvents(value: DataInstaclustrClusterV2MaintenanceEvents[] | cdktf.IResolvable) {
    this._maintenanceEvents.internalValue = value;
  }
  public resetMaintenanceEvents() {
    this._maintenanceEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceEventsInput() {
    return this._maintenanceEvents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataInstaclustrClusterV2FilterToTerraform, true)(this._filter.internalValue),
      maintenance_events: cdktf.listMapper(dataInstaclustrClusterV2MaintenanceEventsToTerraform, true)(this._maintenanceEvents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrClusterV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrClusterV2FilterList",
      },
      maintenance_events: {
        value: cdktf.listMapperHcl(dataInstaclustrClusterV2MaintenanceEventsToHclTerraform, true)(this._maintenanceEvents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrClusterV2MaintenanceEventsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
