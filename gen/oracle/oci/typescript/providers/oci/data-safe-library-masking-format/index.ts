// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeLibraryMaskingFormatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}
  */
  readonly sensitiveTypeIds?: string[];
  /**
  * format_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#format_entries DataSafeLibraryMaskingFormat#format_entries}
  */
  readonly formatEntries: DataSafeLibraryMaskingFormatFormatEntries[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#timeouts DataSafeLibraryMaskingFormat#timeouts}
  */
  readonly timeouts?: DataSafeLibraryMaskingFormatTimeouts;
}
export interface DataSafeLibraryMaskingFormatFormatEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}
  */
  readonly columnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}
  */
  readonly endLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}
  */
  readonly endValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}
  */
  readonly fixedNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}
  */
  readonly fixedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}
  */
  readonly groupingColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}
  */
  readonly libraryMaskingFormatId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}
  */
  readonly postProcessingFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}
  */
  readonly randomList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}
  */
  readonly regularExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}
  */
  readonly replaceWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}
  */
  readonly sqlExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}
  */
  readonly startLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}
  */
  readonly startPosition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}
  */
  readonly startValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}
  */
  readonly tableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}
  */
  readonly userDefinedFunction?: string;
}

export function dataSafeLibraryMaskingFormatFormatEntriesToTerraform(struct?: DataSafeLibraryMaskingFormatFormatEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    description: cdktf.stringToTerraform(struct!.description),
    end_date: cdktf.stringToTerraform(struct!.endDate),
    end_length: cdktf.numberToTerraform(struct!.endLength),
    end_value: cdktf.numberToTerraform(struct!.endValue),
    fixed_number: cdktf.numberToTerraform(struct!.fixedNumber),
    fixed_string: cdktf.stringToTerraform(struct!.fixedString),
    grouping_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupingColumns),
    length: cdktf.numberToTerraform(struct!.length),
    library_masking_format_id: cdktf.stringToTerraform(struct!.libraryMaskingFormatId),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    post_processing_function: cdktf.stringToTerraform(struct!.postProcessingFunction),
    random_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.randomList),
    regular_expression: cdktf.stringToTerraform(struct!.regularExpression),
    replace_with: cdktf.stringToTerraform(struct!.replaceWith),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    start_length: cdktf.numberToTerraform(struct!.startLength),
    start_position: cdktf.numberToTerraform(struct!.startPosition),
    start_value: cdktf.numberToTerraform(struct!.startValue),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    type: cdktf.stringToTerraform(struct!.type),
    user_defined_function: cdktf.stringToTerraform(struct!.userDefinedFunction),
  }
}


export function dataSafeLibraryMaskingFormatFormatEntriesToHclTerraform(struct?: DataSafeLibraryMaskingFormatFormatEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
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
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_length: {
      value: cdktf.numberToHclTerraform(struct!.endLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_value: {
      value: cdktf.numberToHclTerraform(struct!.endValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_number: {
      value: cdktf.numberToHclTerraform(struct!.fixedNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_string: {
      value: cdktf.stringToHclTerraform(struct!.fixedString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grouping_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupingColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    library_masking_format_id: {
      value: cdktf.stringToHclTerraform(struct!.libraryMaskingFormatId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_processing_function: {
      value: cdktf.stringToHclTerraform(struct!.postProcessingFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    random_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.randomList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regular_expression: {
      value: cdktf.stringToHclTerraform(struct!.regularExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_with: {
      value: cdktf.stringToHclTerraform(struct!.replaceWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_expression: {
      value: cdktf.stringToHclTerraform(struct!.sqlExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_length: {
      value: cdktf.numberToHclTerraform(struct!.startLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_position: {
      value: cdktf.numberToHclTerraform(struct!.startPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_value: {
      value: cdktf.numberToHclTerraform(struct!.startValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_defined_function: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeLibraryMaskingFormatFormatEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeLibraryMaskingFormatFormatEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._endLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.endLength = this._endLength;
    }
    if (this._endValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endValue = this._endValue;
    }
    if (this._fixedNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNumber = this._fixedNumber;
    }
    if (this._fixedString !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedString = this._fixedString;
    }
    if (this._groupingColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingColumns = this._groupingColumns;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._libraryMaskingFormatId !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryMaskingFormatId = this._libraryMaskingFormatId;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._postProcessingFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.postProcessingFunction = this._postProcessingFunction;
    }
    if (this._randomList !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomList = this._randomList;
    }
    if (this._regularExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularExpression = this._regularExpression;
    }
    if (this._replaceWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceWith = this._replaceWith;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._startLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.startLength = this._startLength;
    }
    if (this._startPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPosition = this._startPosition;
    }
    if (this._startValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startValue = this._startValue;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userDefinedFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedFunction = this._userDefinedFunction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeLibraryMaskingFormatFormatEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._description = undefined;
      this._endDate = undefined;
      this._endLength = undefined;
      this._endValue = undefined;
      this._fixedNumber = undefined;
      this._fixedString = undefined;
      this._groupingColumns = undefined;
      this._length = undefined;
      this._libraryMaskingFormatId = undefined;
      this._pattern = undefined;
      this._postProcessingFunction = undefined;
      this._randomList = undefined;
      this._regularExpression = undefined;
      this._replaceWith = undefined;
      this._schemaName = undefined;
      this._sqlExpression = undefined;
      this._startDate = undefined;
      this._startLength = undefined;
      this._startPosition = undefined;
      this._startValue = undefined;
      this._tableName = undefined;
      this._type = undefined;
      this._userDefinedFunction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._description = value.description;
      this._endDate = value.endDate;
      this._endLength = value.endLength;
      this._endValue = value.endValue;
      this._fixedNumber = value.fixedNumber;
      this._fixedString = value.fixedString;
      this._groupingColumns = value.groupingColumns;
      this._length = value.length;
      this._libraryMaskingFormatId = value.libraryMaskingFormatId;
      this._pattern = value.pattern;
      this._postProcessingFunction = value.postProcessingFunction;
      this._randomList = value.randomList;
      this._regularExpression = value.regularExpression;
      this._replaceWith = value.replaceWith;
      this._schemaName = value.schemaName;
      this._sqlExpression = value.sqlExpression;
      this._startDate = value.startDate;
      this._startLength = value.startLength;
      this._startPosition = value.startPosition;
      this._startValue = value.startValue;
      this._tableName = value.tableName;
      this._type = value.type;
      this._userDefinedFunction = value.userDefinedFunction;
    }
  }

  // column_name - computed: true, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
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

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // end_length - computed: true, optional: true, required: false
  private _endLength?: number; 
  public get endLength() {
    return this.getNumberAttribute('end_length');
  }
  public set endLength(value: number) {
    this._endLength = value;
  }
  public resetEndLength() {
    this._endLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endLengthInput() {
    return this._endLength;
  }

  // end_value - computed: true, optional: true, required: false
  private _endValue?: number; 
  public get endValue() {
    return this.getNumberAttribute('end_value');
  }
  public set endValue(value: number) {
    this._endValue = value;
  }
  public resetEndValue() {
    this._endValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endValueInput() {
    return this._endValue;
  }

  // fixed_number - computed: true, optional: true, required: false
  private _fixedNumber?: number; 
  public get fixedNumber() {
    return this.getNumberAttribute('fixed_number');
  }
  public set fixedNumber(value: number) {
    this._fixedNumber = value;
  }
  public resetFixedNumber() {
    this._fixedNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNumberInput() {
    return this._fixedNumber;
  }

  // fixed_string - computed: true, optional: true, required: false
  private _fixedString?: string; 
  public get fixedString() {
    return this.getStringAttribute('fixed_string');
  }
  public set fixedString(value: string) {
    this._fixedString = value;
  }
  public resetFixedString() {
    this._fixedString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedStringInput() {
    return this._fixedString;
  }

  // grouping_columns - computed: true, optional: true, required: false
  private _groupingColumns?: string[]; 
  public get groupingColumns() {
    return this.getListAttribute('grouping_columns');
  }
  public set groupingColumns(value: string[]) {
    this._groupingColumns = value;
  }
  public resetGroupingColumns() {
    this._groupingColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingColumnsInput() {
    return this._groupingColumns;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // library_masking_format_id - computed: true, optional: true, required: false
  private _libraryMaskingFormatId?: string; 
  public get libraryMaskingFormatId() {
    return this.getStringAttribute('library_masking_format_id');
  }
  public set libraryMaskingFormatId(value: string) {
    this._libraryMaskingFormatId = value;
  }
  public resetLibraryMaskingFormatId() {
    this._libraryMaskingFormatId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryMaskingFormatIdInput() {
    return this._libraryMaskingFormatId;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // post_processing_function - computed: true, optional: true, required: false
  private _postProcessingFunction?: string; 
  public get postProcessingFunction() {
    return this.getStringAttribute('post_processing_function');
  }
  public set postProcessingFunction(value: string) {
    this._postProcessingFunction = value;
  }
  public resetPostProcessingFunction() {
    this._postProcessingFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postProcessingFunctionInput() {
    return this._postProcessingFunction;
  }

  // random_list - computed: true, optional: true, required: false
  private _randomList?: string[]; 
  public get randomList() {
    return this.getListAttribute('random_list');
  }
  public set randomList(value: string[]) {
    this._randomList = value;
  }
  public resetRandomList() {
    this._randomList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomListInput() {
    return this._randomList;
  }

  // regular_expression - computed: true, optional: true, required: false
  private _regularExpression?: string; 
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }
  public set regularExpression(value: string) {
    this._regularExpression = value;
  }
  public resetRegularExpression() {
    this._regularExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularExpressionInput() {
    return this._regularExpression;
  }

  // replace_with - computed: true, optional: true, required: false
  private _replaceWith?: string; 
  public get replaceWith() {
    return this.getStringAttribute('replace_with');
  }
  public set replaceWith(value: string) {
    this._replaceWith = value;
  }
  public resetReplaceWith() {
    this._replaceWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceWithInput() {
    return this._replaceWith;
  }

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // sql_expression - computed: true, optional: true, required: false
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  public resetSqlExpression() {
    this._sqlExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // start_length - computed: true, optional: true, required: false
  private _startLength?: number; 
  public get startLength() {
    return this.getNumberAttribute('start_length');
  }
  public set startLength(value: number) {
    this._startLength = value;
  }
  public resetStartLength() {
    this._startLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startLengthInput() {
    return this._startLength;
  }

  // start_position - computed: true, optional: true, required: false
  private _startPosition?: number; 
  public get startPosition() {
    return this.getNumberAttribute('start_position');
  }
  public set startPosition(value: number) {
    this._startPosition = value;
  }
  public resetStartPosition() {
    this._startPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPositionInput() {
    return this._startPosition;
  }

  // start_value - computed: true, optional: true, required: false
  private _startValue?: number; 
  public get startValue() {
    return this.getNumberAttribute('start_value');
  }
  public set startValue(value: number) {
    this._startValue = value;
  }
  public resetStartValue() {
    this._startValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startValueInput() {
    return this._startValue;
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_defined_function - computed: true, optional: true, required: false
  private _userDefinedFunction?: string; 
  public get userDefinedFunction() {
    return this.getStringAttribute('user_defined_function');
  }
  public set userDefinedFunction(value: string) {
    this._userDefinedFunction = value;
  }
  public resetUserDefinedFunction() {
    this._userDefinedFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedFunctionInput() {
    return this._userDefinedFunction;
  }
}

export class DataSafeLibraryMaskingFormatFormatEntriesList extends cdktf.ComplexList {
  public internalValue? : DataSafeLibraryMaskingFormatFormatEntries[] | cdktf.IResolvable

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
  public get(index: number): DataSafeLibraryMaskingFormatFormatEntriesOutputReference {
    return new DataSafeLibraryMaskingFormatFormatEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeLibraryMaskingFormatTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}
  */
  readonly update?: string;
}

export function dataSafeLibraryMaskingFormatTimeoutsToTerraform(struct?: DataSafeLibraryMaskingFormatTimeouts | cdktf.IResolvable): any {
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


export function dataSafeLibraryMaskingFormatTimeoutsToHclTerraform(struct?: DataSafeLibraryMaskingFormatTimeouts | cdktf.IResolvable): any {
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

export class DataSafeLibraryMaskingFormatTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeLibraryMaskingFormatTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeLibraryMaskingFormatTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format oci_data_safe_library_masking_format}
*/
export class DataSafeLibraryMaskingFormat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_library_masking_format";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeLibraryMaskingFormat to import
  * @param importFromId The id of the existing DataSafeLibraryMaskingFormat that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeLibraryMaskingFormat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_library_masking_format", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_library_masking_format oci_data_safe_library_masking_format} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeLibraryMaskingFormatConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeLibraryMaskingFormatConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_library_masking_format',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._sensitiveTypeIds = config.sensitiveTypeIds;
    this._formatEntries.internalValue = config.formatEntries;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // sensitive_type_ids - computed: true, optional: true, required: false
  private _sensitiveTypeIds?: string[]; 
  public get sensitiveTypeIds() {
    return this.getListAttribute('sensitive_type_ids');
  }
  public set sensitiveTypeIds(value: string[]) {
    this._sensitiveTypeIds = value;
  }
  public resetSensitiveTypeIds() {
    this._sensitiveTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeIdsInput() {
    return this._sensitiveTypeIds;
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

  // format_entries - computed: false, optional: false, required: true
  private _formatEntries = new DataSafeLibraryMaskingFormatFormatEntriesList(this, "format_entries", false);
  public get formatEntries() {
    return this._formatEntries;
  }
  public putFormatEntries(value: DataSafeLibraryMaskingFormatFormatEntries[] | cdktf.IResolvable) {
    this._formatEntries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatEntriesInput() {
    return this._formatEntries.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeLibraryMaskingFormatTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeLibraryMaskingFormatTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      sensitive_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveTypeIds),
      format_entries: cdktf.listMapper(dataSafeLibraryMaskingFormatFormatEntriesToTerraform, true)(this._formatEntries.internalValue),
      timeouts: dataSafeLibraryMaskingFormatTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_type_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitiveTypeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      format_entries: {
        value: cdktf.listMapperHcl(dataSafeLibraryMaskingFormatFormatEntriesToHclTerraform, true)(this._formatEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeLibraryMaskingFormatFormatEntriesList",
      },
      timeouts: {
        value: dataSafeLibraryMaskingFormatTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeLibraryMaskingFormatTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
