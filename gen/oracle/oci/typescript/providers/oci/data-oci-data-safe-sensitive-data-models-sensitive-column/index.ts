// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}
  */
  readonly sensitiveColumnKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}
  */
  readonly sensitiveDataModelId: string;
}
export interface DataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetails {
}

export function dataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsToTerraform(struct?: DataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsToHclTerraform(struct?: DataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetails | undefined) {
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

export class DataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsOutputReference {
    return new DataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column oci_data_safe_sensitive_data_models_sensitive_column}
*/
export class DataOciDataSafeSensitiveDataModelsSensitiveColumn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sensitive_data_models_sensitive_column";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelsSensitiveColumn to import
  * @param importFromId The id of the existing DataOciDataSafeSensitiveDataModelsSensitiveColumn that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelsSensitiveColumn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sensitive_data_models_sensitive_column", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column oci_data_safe_sensitive_data_models_sensitive_column} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sensitive_data_models_sensitive_column',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sensitiveColumnKey = config.sensitiveColumnKey;
    this._sensitiveDataModelId = config.sensitiveDataModelId;
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

  // column_groups - computed: true, optional: false, required: false
  public get columnGroups() {
    return this.getListAttribute('column_groups');
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
  private _confidenceLevelDetails = new DataOciDataSafeSensitiveDataModelsSensitiveColumnConfidenceLevelDetailsList(this, "confidence_level_details", false);
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

  // estimated_data_value_count - computed: true, optional: false, required: false
  public get estimatedDataValueCount() {
    return this.getStringAttribute('estimated_data_value_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // sensitive_column_key - computed: false, optional: false, required: true
  private _sensitiveColumnKey?: string; 
  public get sensitiveColumnKey() {
    return this.getStringAttribute('sensitive_column_key');
  }
  public set sensitiveColumnKey(value: string) {
    this._sensitiveColumnKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveColumnKeyInput() {
    return this._sensitiveColumnKey;
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

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sensitive_column_key: cdktf.stringToTerraform(this._sensitiveColumnKey),
      sensitive_data_model_id: cdktf.stringToTerraform(this._sensitiveDataModelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sensitive_column_key: {
        value: cdktf.stringToHclTerraform(this._sensitiveColumnKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
