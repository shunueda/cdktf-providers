// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_library_masking_format
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeLibraryMaskingFormatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}
  */
  readonly libraryMaskingFormatId: string;
}
export interface DataOciDataSafeLibraryMaskingFormatFormatEntries {
}

export function dataOciDataSafeLibraryMaskingFormatFormatEntriesToTerraform(struct?: DataOciDataSafeLibraryMaskingFormatFormatEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeLibraryMaskingFormatFormatEntriesToHclTerraform(struct?: DataOciDataSafeLibraryMaskingFormatFormatEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeLibraryMaskingFormatFormatEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeLibraryMaskingFormatFormatEntries | undefined) {
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

export class DataOciDataSafeLibraryMaskingFormatFormatEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference {
    return new DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_library_masking_format oci_data_safe_library_masking_format}
*/
export class DataOciDataSafeLibraryMaskingFormat extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_library_masking_format";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeLibraryMaskingFormat to import
  * @param importFromId The id of the existing DataOciDataSafeLibraryMaskingFormat that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeLibraryMaskingFormat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_library_masking_format", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_library_masking_format oci_data_safe_library_masking_format} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeLibraryMaskingFormatConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeLibraryMaskingFormatConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_library_masking_format',
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
    this._libraryMaskingFormatId = config.libraryMaskingFormatId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // format_entries - computed: true, optional: false, required: false
  private _formatEntries = new DataOciDataSafeLibraryMaskingFormatFormatEntriesList(this, "format_entries", false);
  public get formatEntries() {
    return this._formatEntries;
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

  // library_masking_format_id - computed: false, optional: false, required: true
  private _libraryMaskingFormatId?: string; 
  public get libraryMaskingFormatId() {
    return this.getStringAttribute('library_masking_format_id');
  }
  public set libraryMaskingFormatId(value: string) {
    this._libraryMaskingFormatId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryMaskingFormatIdInput() {
    return this._libraryMaskingFormatId;
  }

  // sensitive_type_ids - computed: true, optional: false, required: false
  public get sensitiveTypeIds() {
    return this.getListAttribute('sensitive_type_ids');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
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
      library_masking_format_id: cdktf.stringToTerraform(this._libraryMaskingFormatId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      library_masking_format_id: {
        value: cdktf.stringToHclTerraform(this._libraryMaskingFormatId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
