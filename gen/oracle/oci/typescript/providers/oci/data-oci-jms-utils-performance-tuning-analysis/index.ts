// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsUtilsPerformanceTuningAnalysisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis#analysis_project_name DataOciJmsUtilsPerformanceTuningAnalysis#analysis_project_name}
  */
  readonly analysisProjectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis#compartment_id DataOciJmsUtilsPerformanceTuningAnalysis#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis#id DataOciJmsUtilsPerformanceTuningAnalysis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis#performance_tuning_analysis_result DataOciJmsUtilsPerformanceTuningAnalysis#performance_tuning_analysis_result}
  */
  readonly performanceTuningAnalysisResult?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis#filter DataOciJmsUtilsPerformanceTuningAnalysis#filter}
  */
  readonly filter?: DataOciJmsUtilsPerformanceTuningAnalysisFilter[] | cdktf.IResolvable;
}
export interface DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedBy {
}

export function dataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedByToTerraform(struct?: DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedByToHclTerraform(struct?: DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedByOutputReference {
    return new DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItems {
}

export function dataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsToTerraform(struct?: DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsToHclTerraform(struct?: DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis_project_name - computed: true, optional: false, required: false
  public get analysisProjectName() {
    return this.getStringAttribute('analysis_project_name');
  }

  // artifact_object_storage_path - computed: true, optional: false, required: false
  public get artifactObjectStoragePath() {
    return this.getStringAttribute('artifact_object_storage_path');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsCreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // result_object_storage_path - computed: true, optional: false, required: false
  public get resultObjectStoragePath() {
    return this.getStringAttribute('result_object_storage_path');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // warning_count - computed: true, optional: false, required: false
  public get warningCount() {
    return this.getNumberAttribute('warning_count');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }
}

export class DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsOutputReference {
    return new DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollection {
}

export function dataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionToTerraform(struct?: DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionToHclTerraform(struct?: DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionOutputReference {
    return new DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsUtilsPerformanceTuningAnalysisFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis#name DataOciJmsUtilsPerformanceTuningAnalysis#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis#regex DataOciJmsUtilsPerformanceTuningAnalysis#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis#values DataOciJmsUtilsPerformanceTuningAnalysis#values}
  */
  readonly values: string[];
}

export function dataOciJmsUtilsPerformanceTuningAnalysisFilterToTerraform(struct?: DataOciJmsUtilsPerformanceTuningAnalysisFilter | cdktf.IResolvable): any {
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


export function dataOciJmsUtilsPerformanceTuningAnalysisFilterToHclTerraform(struct?: DataOciJmsUtilsPerformanceTuningAnalysisFilter | cdktf.IResolvable): any {
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

export class DataOciJmsUtilsPerformanceTuningAnalysisFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsUtilsPerformanceTuningAnalysisFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciJmsUtilsPerformanceTuningAnalysisFilter | cdktf.IResolvable | undefined) {
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

export class DataOciJmsUtilsPerformanceTuningAnalysisFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciJmsUtilsPerformanceTuningAnalysisFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciJmsUtilsPerformanceTuningAnalysisFilterOutputReference {
    return new DataOciJmsUtilsPerformanceTuningAnalysisFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis oci_jms_utils_performance_tuning_analysis}
*/
export class DataOciJmsUtilsPerformanceTuningAnalysis extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_utils_performance_tuning_analysis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsUtilsPerformanceTuningAnalysis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsUtilsPerformanceTuningAnalysis to import
  * @param importFromId The id of the existing DataOciJmsUtilsPerformanceTuningAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsUtilsPerformanceTuningAnalysis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_utils_performance_tuning_analysis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_utils_performance_tuning_analysis oci_jms_utils_performance_tuning_analysis} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsUtilsPerformanceTuningAnalysisConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsUtilsPerformanceTuningAnalysisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_utils_performance_tuning_analysis',
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
    this._analysisProjectName = config.analysisProjectName;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._performanceTuningAnalysisResult = config.performanceTuningAnalysisResult;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analysis_project_name - computed: false, optional: true, required: false
  private _analysisProjectName?: string; 
  public get analysisProjectName() {
    return this.getStringAttribute('analysis_project_name');
  }
  public set analysisProjectName(value: string) {
    this._analysisProjectName = value;
  }
  public resetAnalysisProjectName() {
    this._analysisProjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisProjectNameInput() {
    return this._analysisProjectName;
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

  // id - computed: false, optional: true, required: false
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

  // performance_tuning_analysis_collection - computed: true, optional: false, required: false
  private _performanceTuningAnalysisCollection = new DataOciJmsUtilsPerformanceTuningAnalysisPerformanceTuningAnalysisCollectionList(this, "performance_tuning_analysis_collection", false);
  public get performanceTuningAnalysisCollection() {
    return this._performanceTuningAnalysisCollection;
  }

  // performance_tuning_analysis_result - computed: false, optional: true, required: false
  private _performanceTuningAnalysisResult?: string; 
  public get performanceTuningAnalysisResult() {
    return this.getStringAttribute('performance_tuning_analysis_result');
  }
  public set performanceTuningAnalysisResult(value: string) {
    this._performanceTuningAnalysisResult = value;
  }
  public resetPerformanceTuningAnalysisResult() {
    this._performanceTuningAnalysisResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceTuningAnalysisResultInput() {
    return this._performanceTuningAnalysisResult;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciJmsUtilsPerformanceTuningAnalysisFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciJmsUtilsPerformanceTuningAnalysisFilter[] | cdktf.IResolvable) {
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
      analysis_project_name: cdktf.stringToTerraform(this._analysisProjectName),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      performance_tuning_analysis_result: cdktf.stringToTerraform(this._performanceTuningAnalysisResult),
      filter: cdktf.listMapper(dataOciJmsUtilsPerformanceTuningAnalysisFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analysis_project_name: {
        value: cdktf.stringToHclTerraform(this._analysisProjectName),
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
      performance_tuning_analysis_result: {
        value: cdktf.stringToHclTerraform(this._performanceTuningAnalysisResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciJmsUtilsPerformanceTuningAnalysisFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciJmsUtilsPerformanceTuningAnalysisFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
