// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_column
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeMaskingPoliciesMaskingColumnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_column#masking_column_key DataOciDataSafeMaskingPoliciesMaskingColumn#masking_column_key}
  */
  readonly maskingColumnKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_column#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumn#masking_policy_id}
  */
  readonly maskingPolicyId: string;
}
export interface DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries {
}

export function dataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesToTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesToHclTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // end_length - computed: true, optional: false, required: false
  public get endLength() {
    return this.getNumberAttribute('end_length');
  }

  // end_value - computed: true, optional: false, required: false
  public get endValue() {
    return this.getNumberAttribute('end_value');
  }

  // fixed_number - computed: true, optional: false, required: false
  public get fixedNumber() {
    return this.getNumberAttribute('fixed_number');
  }

  // fixed_string - computed: true, optional: false, required: false
  public get fixedString() {
    return this.getStringAttribute('fixed_string');
  }

  // grouping_columns - computed: true, optional: false, required: false
  public get groupingColumns() {
    return this.getListAttribute('grouping_columns');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // library_masking_format_id - computed: true, optional: false, required: false
  public get libraryMaskingFormatId() {
    return this.getStringAttribute('library_masking_format_id');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // post_processing_function - computed: true, optional: false, required: false
  public get postProcessingFunction() {
    return this.getStringAttribute('post_processing_function');
  }

  // random_list - computed: true, optional: false, required: false
  public get randomList() {
    return this.getListAttribute('random_list');
  }

  // regular_expression - computed: true, optional: false, required: false
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }

  // replace_with - computed: true, optional: false, required: false
  public get replaceWith() {
    return this.getStringAttribute('replace_with');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // sql_expression - computed: true, optional: false, required: false
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // start_length - computed: true, optional: false, required: false
  public get startLength() {
    return this.getNumberAttribute('start_length');
  }

  // start_position - computed: true, optional: false, required: false
  public get startPosition() {
    return this.getNumberAttribute('start_position');
  }

  // start_value - computed: true, optional: false, required: false
  public get startValue() {
    return this.getNumberAttribute('start_value');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_defined_function - computed: true, optional: false, required: false
  public get userDefinedFunction() {
    return this.getStringAttribute('user_defined_function');
  }
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference {
    return new DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats {
}

export function dataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsToTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsToHclTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // format_entries - computed: true, optional: false, required: false
  private _formatEntries = new DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList(this, "format_entries", false);
  public get formatEntries() {
    return this._formatEntries;
  }
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference {
    return new DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_column oci_data_safe_masking_policies_masking_column}
*/
export class DataOciDataSafeMaskingPoliciesMaskingColumn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_masking_policies_masking_column";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeMaskingPoliciesMaskingColumn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeMaskingPoliciesMaskingColumn to import
  * @param importFromId The id of the existing DataOciDataSafeMaskingPoliciesMaskingColumn that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_column#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeMaskingPoliciesMaskingColumn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_masking_policies_masking_column", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_column oci_data_safe_masking_policies_masking_column} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeMaskingPoliciesMaskingColumnConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeMaskingPoliciesMaskingColumnConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_masking_policies_masking_column',
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
    this._maskingColumnKey = config.maskingColumnKey;
    this._maskingPolicyId = config.maskingPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_columns - computed: true, optional: false, required: false
  public get childColumns() {
    return this.getListAttribute('child_columns');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_masking_enabled - computed: true, optional: false, required: false
  public get isMaskingEnabled() {
    return this.getBooleanAttribute('is_masking_enabled');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // masking_column_group - computed: true, optional: false, required: false
  public get maskingColumnGroup() {
    return this.getStringAttribute('masking_column_group');
  }

  // masking_column_key - computed: false, optional: false, required: true
  private _maskingColumnKey?: string; 
  public get maskingColumnKey() {
    return this.getStringAttribute('masking_column_key');
  }
  public set maskingColumnKey(value: string) {
    this._maskingColumnKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingColumnKeyInput() {
    return this._maskingColumnKey;
  }

  // masking_formats - computed: true, optional: false, required: false
  private _maskingFormats = new DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList(this, "masking_formats", false);
  public get maskingFormats() {
    return this._maskingFormats;
  }

  // masking_policy_id - computed: false, optional: false, required: true
  private _maskingPolicyId?: string; 
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
  }
  public set maskingPolicyId(value: string) {
    this._maskingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyIdInput() {
    return this._maskingPolicyId;
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      masking_column_key: cdktf.stringToTerraform(this._maskingColumnKey),
      masking_policy_id: cdktf.stringToTerraform(this._maskingPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      masking_column_key: {
        value: cdktf.stringToHclTerraform(this._maskingColumnKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      masking_policy_id: {
        value: cdktf.stringToHclTerraform(this._maskingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
