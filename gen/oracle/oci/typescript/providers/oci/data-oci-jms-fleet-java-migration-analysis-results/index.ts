// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetJavaMigrationAnalysisResultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#application_name DataOciJmsFleetJavaMigrationAnalysisResults#application_name}
  */
  readonly applicationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#fleet_id DataOciJmsFleetJavaMigrationAnalysisResults#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#host_name DataOciJmsFleetJavaMigrationAnalysisResults#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#id DataOciJmsFleetJavaMigrationAnalysisResults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#managed_instance_id DataOciJmsFleetJavaMigrationAnalysisResults#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_end DataOciJmsFleetJavaMigrationAnalysisResults#time_end}
  */
  readonly timeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_start DataOciJmsFleetJavaMigrationAnalysisResults#time_start}
  */
  readonly timeStart?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#filter DataOciJmsFleetJavaMigrationAnalysisResults#filter}
  */
  readonly filter?: DataOciJmsFleetJavaMigrationAnalysisResultsFilter[] | cdktf.IResolvable;
}
export interface DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems {
}

export function dataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsToTerraform(struct?: DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsToHclTerraform(struct?: DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_execution_type - computed: true, optional: false, required: false
  public get applicationExecutionType() {
    return this.getStringAttribute('application_execution_type');
  }

  // application_key - computed: true, optional: false, required: false
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // application_path - computed: true, optional: false, required: false
  public get applicationPath() {
    return this.getStringAttribute('application_path');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
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

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object_list - computed: true, optional: false, required: false
  public get objectList() {
    return this.getListAttribute('object_list');
  }

  // object_storage_upload_dir_path - computed: true, optional: false, required: false
  public get objectStorageUploadDirPath() {
    return this.getStringAttribute('object_storage_upload_dir_path');
  }

  // source_jdk_version - computed: true, optional: false, required: false
  public get sourceJdkVersion() {
    return this.getStringAttribute('source_jdk_version');
  }

  // target_jdk_version - computed: true, optional: false, required: false
  public get targetJdkVersion() {
    return this.getStringAttribute('target_jdk_version');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }
}

export class DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference {
    return new DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection {
}

export function dataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionToTerraform(struct?: DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionToHclTerraform(struct?: DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference {
    return new DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetJavaMigrationAnalysisResultsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#name DataOciJmsFleetJavaMigrationAnalysisResults#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#regex DataOciJmsFleetJavaMigrationAnalysisResults#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#values DataOciJmsFleetJavaMigrationAnalysisResults#values}
  */
  readonly values: string[];
}

export function dataOciJmsFleetJavaMigrationAnalysisResultsFilterToTerraform(struct?: DataOciJmsFleetJavaMigrationAnalysisResultsFilter | cdktf.IResolvable): any {
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


export function dataOciJmsFleetJavaMigrationAnalysisResultsFilterToHclTerraform(struct?: DataOciJmsFleetJavaMigrationAnalysisResultsFilter | cdktf.IResolvable): any {
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

export class DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetJavaMigrationAnalysisResultsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciJmsFleetJavaMigrationAnalysisResultsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciJmsFleetJavaMigrationAnalysisResultsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciJmsFleetJavaMigrationAnalysisResultsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference {
    return new DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results oci_jms_fleet_java_migration_analysis_results}
*/
export class DataOciJmsFleetJavaMigrationAnalysisResults extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_java_migration_analysis_results";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetJavaMigrationAnalysisResults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetJavaMigrationAnalysisResults to import
  * @param importFromId The id of the existing DataOciJmsFleetJavaMigrationAnalysisResults that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetJavaMigrationAnalysisResults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_java_migration_analysis_results", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_java_migration_analysis_results oci_jms_fleet_java_migration_analysis_results} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetJavaMigrationAnalysisResultsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetJavaMigrationAnalysisResultsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_java_migration_analysis_results',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationName = config.applicationName;
    this._fleetId = config.fleetId;
    this._hostName = config.hostName;
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._timeEnd = config.timeEnd;
    this._timeStart = config.timeStart;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_name - computed: false, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
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

  // java_migration_analysis_result_collection - computed: true, optional: false, required: false
  private _javaMigrationAnalysisResultCollection = new DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList(this, "java_migration_analysis_result_collection", false);
  public get javaMigrationAnalysisResultCollection() {
    return this._javaMigrationAnalysisResultCollection;
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
  private _filter = new DataOciJmsFleetJavaMigrationAnalysisResultsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciJmsFleetJavaMigrationAnalysisResultsFilter[] | cdktf.IResolvable) {
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
      application_name: cdktf.stringToTerraform(this._applicationName),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      time_end: cdktf.stringToTerraform(this._timeEnd),
      time_start: cdktf.stringToTerraform(this._timeStart),
      filter: cdktf.listMapper(dataOciJmsFleetJavaMigrationAnalysisResultsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.listMapperHcl(dataOciJmsFleetJavaMigrationAnalysisResultsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciJmsFleetJavaMigrationAnalysisResultsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
