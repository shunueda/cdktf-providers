// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStackMonitoringBaselineableMetricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#baselineable_metric_id DataOciStackMonitoringBaselineableMetrics#baselineable_metric_id}
  */
  readonly baselineableMetricId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#compartment_id DataOciStackMonitoringBaselineableMetrics#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#id DataOciStackMonitoringBaselineableMetrics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#is_out_of_box DataOciStackMonitoringBaselineableMetrics#is_out_of_box}
  */
  readonly isOutOfBox?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#metric_namespace DataOciStackMonitoringBaselineableMetrics#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_group DataOciStackMonitoringBaselineableMetrics#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_type DataOciStackMonitoringBaselineableMetrics#resource_type}
  */
  readonly resourceType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#filter DataOciStackMonitoringBaselineableMetrics#filter}
  */
  readonly filter?: DataOciStackMonitoringBaselineableMetricsFilter[] | cdktf.IResolvable;
}
export interface DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems {
}

export function dataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsToTerraform(struct?: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsToHclTerraform(struct?: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  public get column() {
    return this.getStringAttribute('column');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_out_of_box - computed: true, optional: false, required: false
  public get isOutOfBox() {
    return this.getBooleanAttribute('is_out_of_box');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_updated - computed: true, optional: false, required: false
  public get timeLastUpdated() {
    return this.getStringAttribute('time_last_updated');
  }
}

export class DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference {
    return new DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection {
}

export function dataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionToTerraform(struct?: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionToHclTerraform(struct?: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference {
    return new DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringBaselineableMetricsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#regex DataOciStackMonitoringBaselineableMetrics#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#values DataOciStackMonitoringBaselineableMetrics#values}
  */
  readonly values: string[];
}

export function dataOciStackMonitoringBaselineableMetricsFilterToTerraform(struct?: DataOciStackMonitoringBaselineableMetricsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciStackMonitoringBaselineableMetricsFilterToHclTerraform(struct?: DataOciStackMonitoringBaselineableMetricsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciStackMonitoringBaselineableMetricsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringBaselineableMetricsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringBaselineableMetricsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
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
      this._regex = value.regex;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

export class DataOciStackMonitoringBaselineableMetricsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciStackMonitoringBaselineableMetricsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciStackMonitoringBaselineableMetricsFilterOutputReference {
    return new DataOciStackMonitoringBaselineableMetricsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics oci_stack_monitoring_baselineable_metrics}
*/
export class DataOciStackMonitoringBaselineableMetrics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_baselineable_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStackMonitoringBaselineableMetrics to import
  * @param importFromId The id of the existing DataOciStackMonitoringBaselineableMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStackMonitoringBaselineableMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_baselineable_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics oci_stack_monitoring_baselineable_metrics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStackMonitoringBaselineableMetricsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciStackMonitoringBaselineableMetricsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_baselineable_metrics',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baselineableMetricId = config.baselineableMetricId;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._isOutOfBox = config.isOutOfBox;
    this._metricNamespace = config.metricNamespace;
    this._name = config.name;
    this._resourceGroup = config.resourceGroup;
    this._resourceType = config.resourceType;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baselineable_metric_id - computed: false, optional: true, required: false
  private _baselineableMetricId?: string; 
  public get baselineableMetricId() {
    return this.getStringAttribute('baselineable_metric_id');
  }
  public set baselineableMetricId(value: string) {
    this._baselineableMetricId = value;
  }
  public resetBaselineableMetricId() {
    this._baselineableMetricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineableMetricIdInput() {
    return this._baselineableMetricId;
  }

  // baselineable_metric_summary_collection - computed: true, optional: false, required: false
  private _baselineableMetricSummaryCollection = new DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList(this, "baselineable_metric_summary_collection", false);
  public get baselineableMetricSummaryCollection() {
    return this._baselineableMetricSummaryCollection;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // is_out_of_box - computed: false, optional: true, required: false
  private _isOutOfBox?: boolean | cdktf.IResolvable; 
  public get isOutOfBox() {
    return this.getBooleanAttribute('is_out_of_box');
  }
  public set isOutOfBox(value: boolean | cdktf.IResolvable) {
    this._isOutOfBox = value;
  }
  public resetIsOutOfBox() {
    this._isOutOfBox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOutOfBoxInput() {
    return this._isOutOfBox;
  }

  // metric_namespace - computed: false, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciStackMonitoringBaselineableMetricsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciStackMonitoringBaselineableMetricsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baselineable_metric_id: cdktf.stringToTerraform(this._baselineableMetricId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      is_out_of_box: cdktf.booleanToTerraform(this._isOutOfBox),
      metric_namespace: cdktf.stringToTerraform(this._metricNamespace),
      name: cdktf.stringToTerraform(this._name),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      filter: cdktf.listMapper(dataOciStackMonitoringBaselineableMetricsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baselineable_metric_id: {
        value: cdktf.stringToHclTerraform(this._baselineableMetricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      is_out_of_box: {
        value: cdktf.booleanToHclTerraform(this._isOutOfBox),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_namespace: {
        value: cdktf.stringToHclTerraform(this._metricNamespace),
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
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciStackMonitoringBaselineableMetricsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciStackMonitoringBaselineableMetricsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
