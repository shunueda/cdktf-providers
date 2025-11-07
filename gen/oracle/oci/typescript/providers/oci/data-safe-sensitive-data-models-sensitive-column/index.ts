// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeSensitiveDataModelsSensitiveColumnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#app_defined_child_column_keys}
  */
  readonly appDefinedChildColumnKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_name DataSafeSensitiveDataModelsSensitiveColumn#app_name}
  */
  readonly appName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#column_name DataSafeSensitiveDataModelsSensitiveColumn#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#data_type DataSafeSensitiveDataModelsSensitiveColumn#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#db_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#db_defined_child_column_keys}
  */
  readonly dbDefinedChildColumnKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#id DataSafeSensitiveDataModelsSensitiveColumn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object DataSafeSensitiveDataModelsSensitiveColumn#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object_type DataSafeSensitiveDataModelsSensitiveColumn#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#parent_column_keys DataSafeSensitiveDataModelsSensitiveColumn#parent_column_keys}
  */
  readonly parentColumnKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#relation_type DataSafeSensitiveDataModelsSensitiveColumn#relation_type}
  */
  readonly relationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#schema_name DataSafeSensitiveDataModelsSensitiveColumn#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}
  */
  readonly sensitiveDataModelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_type_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_type_id}
  */
  readonly sensitiveTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#status DataSafeSensitiveDataModelsSensitiveColumn#status}
  */
  readonly status?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#timeouts DataSafeSensitiveDataModelsSensitiveColumn#timeouts}
  */
  readonly timeouts?: DataSafeSensitiveDataModelsSensitiveColumnTimeouts;
}
export interface DataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetails {
}

export function dataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsToTerraform(struct?: DataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsToHclTerraform(struct?: DataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetails | undefined) {
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

export class DataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsOutputReference {
    return new DataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSensitiveDataModelsSensitiveColumnTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#create DataSafeSensitiveDataModelsSensitiveColumn#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#delete DataSafeSensitiveDataModelsSensitiveColumn#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#update DataSafeSensitiveDataModelsSensitiveColumn#update}
  */
  readonly update?: string;
}

export function dataSafeSensitiveDataModelsSensitiveColumnTimeoutsToTerraform(struct?: DataSafeSensitiveDataModelsSensitiveColumnTimeouts | cdktf.IResolvable): any {
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


export function dataSafeSensitiveDataModelsSensitiveColumnTimeoutsToHclTerraform(struct?: DataSafeSensitiveDataModelsSensitiveColumnTimeouts | cdktf.IResolvable): any {
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

export class DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeSensitiveDataModelsSensitiveColumnTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeSensitiveDataModelsSensitiveColumnTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column oci_data_safe_sensitive_data_models_sensitive_column}
*/
export class DataSafeSensitiveDataModelsSensitiveColumn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sensitive_data_models_sensitive_column";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeSensitiveDataModelsSensitiveColumn to import
  * @param importFromId The id of the existing DataSafeSensitiveDataModelsSensitiveColumn that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeSensitiveDataModelsSensitiveColumn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sensitive_data_models_sensitive_column", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_models_sensitive_column oci_data_safe_sensitive_data_models_sensitive_column} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeSensitiveDataModelsSensitiveColumnConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeSensitiveDataModelsSensitiveColumnConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sensitive_data_models_sensitive_column',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appDefinedChildColumnKeys = config.appDefinedChildColumnKeys;
    this._appName = config.appName;
    this._columnName = config.columnName;
    this._dataType = config.dataType;
    this._dbDefinedChildColumnKeys = config.dbDefinedChildColumnKeys;
    this._id = config.id;
    this._object = config.object;
    this._objectType = config.objectType;
    this._parentColumnKeys = config.parentColumnKeys;
    this._relationType = config.relationType;
    this._schemaName = config.schemaName;
    this._sensitiveDataModelId = config.sensitiveDataModelId;
    this._sensitiveTypeId = config.sensitiveTypeId;
    this._status = config.status;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_defined_child_column_keys - computed: true, optional: true, required: false
  private _appDefinedChildColumnKeys?: string[]; 
  public get appDefinedChildColumnKeys() {
    return this.getListAttribute('app_defined_child_column_keys');
  }
  public set appDefinedChildColumnKeys(value: string[]) {
    this._appDefinedChildColumnKeys = value;
  }
  public resetAppDefinedChildColumnKeys() {
    this._appDefinedChildColumnKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appDefinedChildColumnKeysInput() {
    return this._appDefinedChildColumnKeys;
  }

  // app_name - computed: true, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // column_groups - computed: true, optional: false, required: false
  public get columnGroups() {
    return this.getListAttribute('column_groups');
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // confidence_level - computed: true, optional: false, required: false
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }

  // confidence_level_details - computed: true, optional: false, required: false
  private _confidenceLevelDetails = new DataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsList(this, "confidence_level_details", false);
  public get confidenceLevelDetails() {
    return this._confidenceLevelDetails;
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // db_defined_child_column_keys - computed: true, optional: true, required: false
  private _dbDefinedChildColumnKeys?: string[]; 
  public get dbDefinedChildColumnKeys() {
    return this.getListAttribute('db_defined_child_column_keys');
  }
  public set dbDefinedChildColumnKeys(value: string[]) {
    this._dbDefinedChildColumnKeys = value;
  }
  public resetDbDefinedChildColumnKeys() {
    this._dbDefinedChildColumnKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDefinedChildColumnKeysInput() {
    return this._dbDefinedChildColumnKeys;
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // parent_column_keys - computed: true, optional: true, required: false
  private _parentColumnKeys?: string[]; 
  public get parentColumnKeys() {
    return this.getListAttribute('parent_column_keys');
  }
  public set parentColumnKeys(value: string[]) {
    this._parentColumnKeys = value;
  }
  public resetParentColumnKeys() {
    this._parentColumnKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentColumnKeysInput() {
    return this._parentColumnKeys;
  }

  // relation_type - computed: true, optional: true, required: false
  private _relationType?: string; 
  public get relationType() {
    return this.getStringAttribute('relation_type');
  }
  public set relationType(value: string) {
    this._relationType = value;
  }
  public resetRelationType() {
    this._relationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationTypeInput() {
    return this._relationType;
  }

  // sample_data_values - computed: true, optional: false, required: false
  public get sampleDataValues() {
    return this.getListAttribute('sample_data_values');
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // sensitive_data_model_id - computed: false, optional: false, required: true
  private _sensitiveDataModelId?: string; 
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }
  public set sensitiveDataModelId(value: string) {
    this._sensitiveDataModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataModelIdInput() {
    return this._sensitiveDataModelId;
  }

  // sensitive_type_id - computed: true, optional: true, required: false
  private _sensitiveTypeId?: string; 
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }
  public set sensitiveTypeId(value: string) {
    this._sensitiveTypeId = value;
  }
  public resetSensitiveTypeId() {
    this._sensitiveTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeIdInput() {
    return this._sensitiveTypeId;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeSensitiveDataModelsSensitiveColumnTimeouts) {
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
      app_defined_child_column_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appDefinedChildColumnKeys),
      app_name: cdktf.stringToTerraform(this._appName),
      column_name: cdktf.stringToTerraform(this._columnName),
      data_type: cdktf.stringToTerraform(this._dataType),
      db_defined_child_column_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbDefinedChildColumnKeys),
      id: cdktf.stringToTerraform(this._id),
      object: cdktf.stringToTerraform(this._object),
      object_type: cdktf.stringToTerraform(this._objectType),
      parent_column_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._parentColumnKeys),
      relation_type: cdktf.stringToTerraform(this._relationType),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      sensitive_data_model_id: cdktf.stringToTerraform(this._sensitiveDataModelId),
      sensitive_type_id: cdktf.stringToTerraform(this._sensitiveTypeId),
      status: cdktf.stringToTerraform(this._status),
      timeouts: dataSafeSensitiveDataModelsSensitiveColumnTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_defined_child_column_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appDefinedChildColumnKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_name: {
        value: cdktf.stringToHclTerraform(this._columnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_type: {
        value: cdktf.stringToHclTerraform(this._dataType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_defined_child_column_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbDefinedChildColumnKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object: {
        value: cdktf.stringToHclTerraform(this._object),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_column_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._parentColumnKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      relation_type: {
        value: cdktf.stringToHclTerraform(this._relationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_data_model_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveDataModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_type_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSafeSensitiveDataModelsSensitiveColumnTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeSensitiveDataModelsSensitiveColumnTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
