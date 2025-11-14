// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetCryptoAnalysisResultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#aggregation_mode DataOciJmsFleetCryptoAnalysisResults#aggregation_mode}
  */
  readonly aggregationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count DataOciJmsFleetCryptoAnalysisResults#finding_count}
  */
  readonly findingCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#finding_count_greater_than}
  */
  readonly findingCountGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#fleet_id DataOciJmsFleetCryptoAnalysisResults#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#host_name DataOciJmsFleetCryptoAnalysisResults#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#id DataOciJmsFleetCryptoAnalysisResults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#managed_instance_id DataOciJmsFleetCryptoAnalysisResults#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count}
  */
  readonly nonCompliantFindingCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count_greater_than}
  */
  readonly nonCompliantFindingCountGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#time_end DataOciJmsFleetCryptoAnalysisResults#time_end}
  */
  readonly timeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#time_start DataOciJmsFleetCryptoAnalysisResults#time_start}
  */
  readonly timeStart?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#filter DataOciJmsFleetCryptoAnalysisResults#filter}
  */
  readonly filter?: DataOciJmsFleetCryptoAnalysisResultsFilter[] | cdktf.IResolvable;
}
export interface DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems {
}

export function dataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsToTerraform(struct?: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsToHclTerraform(struct?: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_mode - computed: true, optional: false, required: false
  public get aggregationMode() {
    return this.getStringAttribute('aggregation_mode');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // crypto_roadmap_version - computed: true, optional: false, required: false
  public get cryptoRoadmapVersion() {
    return this.getStringAttribute('crypto_roadmap_version');
  }

  // finding_count - computed: true, optional: false, required: false
  public get findingCount() {
    return this.getNumberAttribute('finding_count');
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // non_compliant_finding_count - computed: true, optional: false, required: false
  public get nonCompliantFindingCount() {
    return this.getNumberAttribute('non_compliant_finding_count');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // summarized_event_count - computed: true, optional: false, required: false
  public get summarizedEventCount() {
    return this.getNumberAttribute('summarized_event_count');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_first_event - computed: true, optional: false, required: false
  public get timeFirstEvent() {
    return this.getStringAttribute('time_first_event');
  }

  // time_last_event - computed: true, optional: false, required: false
  public get timeLastEvent() {
    return this.getStringAttribute('time_last_event');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // total_event_count - computed: true, optional: false, required: false
  public get totalEventCount() {
    return this.getNumberAttribute('total_event_count');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }
}

export class DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference {
    return new DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection {
}

export function dataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionToTerraform(struct?: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionToHclTerraform(struct?: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference {
    return new DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetCryptoAnalysisResultsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#name DataOciJmsFleetCryptoAnalysisResults#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#regex DataOciJmsFleetCryptoAnalysisResults#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#values DataOciJmsFleetCryptoAnalysisResults#values}
  */
  readonly values: string[];
}

export function dataOciJmsFleetCryptoAnalysisResultsFilterToTerraform(struct?: DataOciJmsFleetCryptoAnalysisResultsFilter | cdktf.IResolvable): any {
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


export function dataOciJmsFleetCryptoAnalysisResultsFilterToHclTerraform(struct?: DataOciJmsFleetCryptoAnalysisResultsFilter | cdktf.IResolvable): any {
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

export class DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetCryptoAnalysisResultsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciJmsFleetCryptoAnalysisResultsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciJmsFleetCryptoAnalysisResultsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciJmsFleetCryptoAnalysisResultsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference {
    return new DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results oci_jms_fleet_crypto_analysis_results}
*/
export class DataOciJmsFleetCryptoAnalysisResults extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_crypto_analysis_results";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetCryptoAnalysisResults to import
  * @param importFromId The id of the existing DataOciJmsFleetCryptoAnalysisResults that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetCryptoAnalysisResults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_crypto_analysis_results", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_crypto_analysis_results oci_jms_fleet_crypto_analysis_results} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetCryptoAnalysisResultsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetCryptoAnalysisResultsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_crypto_analysis_results',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregationMode = config.aggregationMode;
    this._findingCount = config.findingCount;
    this._findingCountGreaterThan = config.findingCountGreaterThan;
    this._fleetId = config.fleetId;
    this._hostName = config.hostName;
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._nonCompliantFindingCount = config.nonCompliantFindingCount;
    this._nonCompliantFindingCountGreaterThan = config.nonCompliantFindingCountGreaterThan;
    this._timeEnd = config.timeEnd;
    this._timeStart = config.timeStart;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_mode - computed: false, optional: true, required: false
  private _aggregationMode?: string; 
  public get aggregationMode() {
    return this.getStringAttribute('aggregation_mode');
  }
  public set aggregationMode(value: string) {
    this._aggregationMode = value;
  }
  public resetAggregationMode() {
    this._aggregationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationModeInput() {
    return this._aggregationMode;
  }

  // crypto_analysis_result_collection - computed: true, optional: false, required: false
  private _cryptoAnalysisResultCollection = new DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList(this, "crypto_analysis_result_collection", false);
  public get cryptoAnalysisResultCollection() {
    return this._cryptoAnalysisResultCollection;
  }

  // finding_count - computed: false, optional: true, required: false
  private _findingCount?: number; 
  public get findingCount() {
    return this.getNumberAttribute('finding_count');
  }
  public set findingCount(value: number) {
    this._findingCount = value;
  }
  public resetFindingCount() {
    this._findingCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingCountInput() {
    return this._findingCount;
  }

  // finding_count_greater_than - computed: false, optional: true, required: false
  private _findingCountGreaterThan?: number; 
  public get findingCountGreaterThan() {
    return this.getNumberAttribute('finding_count_greater_than');
  }
  public set findingCountGreaterThan(value: number) {
    this._findingCountGreaterThan = value;
  }
  public resetFindingCountGreaterThan() {
    this._findingCountGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingCountGreaterThanInput() {
    return this._findingCountGreaterThan;
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // managed_instance_id - computed: false, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // non_compliant_finding_count - computed: false, optional: true, required: false
  private _nonCompliantFindingCount?: number; 
  public get nonCompliantFindingCount() {
    return this.getNumberAttribute('non_compliant_finding_count');
  }
  public set nonCompliantFindingCount(value: number) {
    this._nonCompliantFindingCount = value;
  }
  public resetNonCompliantFindingCount() {
    this._nonCompliantFindingCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCompliantFindingCountInput() {
    return this._nonCompliantFindingCount;
  }

  // non_compliant_finding_count_greater_than - computed: false, optional: true, required: false
  private _nonCompliantFindingCountGreaterThan?: number; 
  public get nonCompliantFindingCountGreaterThan() {
    return this.getNumberAttribute('non_compliant_finding_count_greater_than');
  }
  public set nonCompliantFindingCountGreaterThan(value: number) {
    this._nonCompliantFindingCountGreaterThan = value;
  }
  public resetNonCompliantFindingCountGreaterThan() {
    this._nonCompliantFindingCountGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCompliantFindingCountGreaterThanInput() {
    return this._nonCompliantFindingCountGreaterThan;
  }

  // time_end - computed: false, optional: true, required: false
  private _timeEnd?: string; 
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }
  public set timeEnd(value: string) {
    this._timeEnd = value;
  }
  public resetTimeEnd() {
    this._timeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndInput() {
    return this._timeEnd;
  }

  // time_start - computed: false, optional: true, required: false
  private _timeStart?: string; 
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
  public set timeStart(value: string) {
    this._timeStart = value;
  }
  public resetTimeStart() {
    this._timeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartInput() {
    return this._timeStart;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciJmsFleetCryptoAnalysisResultsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciJmsFleetCryptoAnalysisResultsFilter[] | cdktf.IResolvable) {
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
      aggregation_mode: cdktf.stringToTerraform(this._aggregationMode),
      finding_count: cdktf.numberToTerraform(this._findingCount),
      finding_count_greater_than: cdktf.numberToTerraform(this._findingCountGreaterThan),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      non_compliant_finding_count: cdktf.numberToTerraform(this._nonCompliantFindingCount),
      non_compliant_finding_count_greater_than: cdktf.numberToTerraform(this._nonCompliantFindingCountGreaterThan),
      time_end: cdktf.stringToTerraform(this._timeEnd),
      time_start: cdktf.stringToTerraform(this._timeStart),
      filter: cdktf.listMapper(dataOciJmsFleetCryptoAnalysisResultsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation_mode: {
        value: cdktf.stringToHclTerraform(this._aggregationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      finding_count: {
        value: cdktf.numberToHclTerraform(this._findingCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      finding_count_greater_than: {
        value: cdktf.numberToHclTerraform(this._findingCountGreaterThan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_compliant_finding_count: {
        value: cdktf.numberToHclTerraform(this._nonCompliantFindingCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      non_compliant_finding_count_greater_than: {
        value: cdktf.numberToHclTerraform(this._nonCompliantFindingCountGreaterThan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_end: {
        value: cdktf.stringToHclTerraform(this._timeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_start: {
        value: cdktf.stringToHclTerraform(this._timeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciJmsFleetCryptoAnalysisResultsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciJmsFleetCryptoAnalysisResultsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
