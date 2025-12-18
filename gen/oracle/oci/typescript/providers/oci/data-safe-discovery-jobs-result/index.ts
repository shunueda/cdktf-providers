// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_discovery_jobs_result
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeDiscoveryJobsResultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_discovery_jobs_result#discovery_job_id DataSafeDiscoveryJobsResult#discovery_job_id}
  */
  readonly discoveryJobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_discovery_jobs_result#id DataSafeDiscoveryJobsResult#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_discovery_jobs_result#timeouts DataSafeDiscoveryJobsResult#timeouts}
  */
  readonly timeouts?: DataSafeDiscoveryJobsResultTimeouts;
}
export interface DataSafeDiscoveryJobsResultConfidenceLevelDetails {
}

export function dataSafeDiscoveryJobsResultConfidenceLevelDetailsToTerraform(struct?: DataSafeDiscoveryJobsResultConfidenceLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeDiscoveryJobsResultConfidenceLevelDetailsToHclTerraform(struct?: DataSafeDiscoveryJobsResultConfidenceLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeDiscoveryJobsResultConfidenceLevelDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeDiscoveryJobsResultConfidenceLevelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeDiscoveryJobsResultConfidenceLevelDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // does_column_lead_to_pii_in_non_tables - computed: true, optional: false, required: false
  public get doesColumnLeadToPiiInNonTables() {
    return this.getBooleanAttribute('does_column_lead_to_pii_in_non_tables');
  }

  // does_column_lead_to_pii_in_same_related_tables - computed: true, optional: false, required: false
  public get doesColumnLeadToPiiInSameRelatedTables() {
    return this.getBooleanAttribute('does_column_lead_to_pii_in_same_related_tables');
  }

  // has_comment_pattern_matched - computed: true, optional: false, required: false
  public get hasCommentPatternMatched() {
    return this.getBooleanAttribute('has_comment_pattern_matched');
  }

  // has_data_pattern_matched - computed: true, optional: false, required: false
  public get hasDataPatternMatched() {
    return this.getBooleanAttribute('has_data_pattern_matched');
  }

  // has_name_pattern_matched - computed: true, optional: false, required: false
  public get hasNamePatternMatched() {
    return this.getBooleanAttribute('has_name_pattern_matched');
  }

  // is_sensitive_type_from_same_context_found_in_same_or_related_tables - computed: true, optional: false, required: false
  public get isSensitiveTypeFromSameContextFoundInSameOrRelatedTables() {
    return this.getBooleanAttribute('is_sensitive_type_from_same_context_found_in_same_or_related_tables');
  }
}

export class DataSafeDiscoveryJobsResultConfidenceLevelDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeDiscoveryJobsResultConfidenceLevelDetailsOutputReference {
    return new DataSafeDiscoveryJobsResultConfidenceLevelDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeDiscoveryJobsResultModifiedAttributes {
}

export function dataSafeDiscoveryJobsResultModifiedAttributesToTerraform(struct?: DataSafeDiscoveryJobsResultModifiedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeDiscoveryJobsResultModifiedAttributesToHclTerraform(struct?: DataSafeDiscoveryJobsResultModifiedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeDiscoveryJobsResultModifiedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeDiscoveryJobsResultModifiedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeDiscoveryJobsResultModifiedAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_defined_child_column_keys - computed: true, optional: false, required: false
  public get appDefinedChildColumnKeys() {
    return this.getListAttribute('app_defined_child_column_keys');
  }

  // db_defined_child_column_keys - computed: true, optional: false, required: false
  public get dbDefinedChildColumnKeys() {
    return this.getListAttribute('db_defined_child_column_keys');
  }
}

export class DataSafeDiscoveryJobsResultModifiedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeDiscoveryJobsResultModifiedAttributesOutputReference {
    return new DataSafeDiscoveryJobsResultModifiedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeDiscoveryJobsResultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_discovery_jobs_result#create DataSafeDiscoveryJobsResult#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_discovery_jobs_result#delete DataSafeDiscoveryJobsResult#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_discovery_jobs_result#update DataSafeDiscoveryJobsResult#update}
  */
  readonly update?: string;
}

export function dataSafeDiscoveryJobsResultTimeoutsToTerraform(struct?: DataSafeDiscoveryJobsResultTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataSafeDiscoveryJobsResultTimeoutsToHclTerraform(struct?: DataSafeDiscoveryJobsResultTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeDiscoveryJobsResultTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeDiscoveryJobsResultTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeDiscoveryJobsResultTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_discovery_jobs_result oci_data_safe_discovery_jobs_result}
*/
export class DataSafeDiscoveryJobsResult extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_discovery_jobs_result";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeDiscoveryJobsResult resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeDiscoveryJobsResult to import
  * @param importFromId The id of the existing DataSafeDiscoveryJobsResult that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_discovery_jobs_result#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeDiscoveryJobsResult to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_discovery_jobs_result", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_discovery_jobs_result oci_data_safe_discovery_jobs_result} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeDiscoveryJobsResultConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeDiscoveryJobsResultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_discovery_jobs_result',
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
    this._discoveryJobId = config.discoveryJobId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_defined_child_column_keys - computed: true, optional: false, required: false
  public get appDefinedChildColumnKeys() {
    return this.getListAttribute('app_defined_child_column_keys');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // confidence_level - computed: true, optional: false, required: false
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }

  // confidence_level_details - computed: true, optional: false, required: false
  private _confidenceLevelDetails = new DataSafeDiscoveryJobsResultConfidenceLevelDetailsList(this, "confidence_level_details", false);
  public get confidenceLevelDetails() {
    return this._confidenceLevelDetails;
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // db_defined_child_column_keys - computed: true, optional: false, required: false
  public get dbDefinedChildColumnKeys() {
    return this.getListAttribute('db_defined_child_column_keys');
  }

  // discovery_job_id - computed: false, optional: false, required: true
  private _discoveryJobId?: string; 
  public get discoveryJobId() {
    return this.getStringAttribute('discovery_job_id');
  }
  public set discoveryJobId(value: string) {
    this._discoveryJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryJobIdInput() {
    return this._discoveryJobId;
  }

  // discovery_type - computed: true, optional: false, required: false
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }

  // estimated_data_value_count - computed: true, optional: false, required: false
  public get estimatedDataValueCount() {
    return this.getStringAttribute('estimated_data_value_count');
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

  // is_result_applied - computed: true, optional: false, required: false
  public get isResultApplied() {
    return this.getBooleanAttribute('is_result_applied');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // modified_attributes - computed: true, optional: false, required: false
  private _modifiedAttributes = new DataSafeDiscoveryJobsResultModifiedAttributesList(this, "modified_attributes", false);
  public get modifiedAttributes() {
    return this._modifiedAttributes;
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // parent_column_keys - computed: true, optional: false, required: false
  public get parentColumnKeys() {
    return this.getListAttribute('parent_column_keys');
  }

  // planned_action - computed: true, optional: false, required: false
  public get plannedAction() {
    return this.getStringAttribute('planned_action');
  }

  // relation_type - computed: true, optional: false, required: false
  public get relationType() {
    return this.getStringAttribute('relation_type');
  }

  // sample_data_values - computed: true, optional: false, required: false
  public get sampleDataValues() {
    return this.getListAttribute('sample_data_values');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // sensitive_columnkey - computed: true, optional: false, required: false
  public get sensitiveColumnkey() {
    return this.getStringAttribute('sensitive_columnkey');
  }

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeDiscoveryJobsResultTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeDiscoveryJobsResultTimeouts) {
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
      discovery_job_id: cdktf.stringToTerraform(this._discoveryJobId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataSafeDiscoveryJobsResultTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      discovery_job_id: {
        value: cdktf.stringToHclTerraform(this._discoveryJobId),
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
      timeouts: {
        value: dataSafeDiscoveryJobsResultTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeDiscoveryJobsResultTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
