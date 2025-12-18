// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeMaskingPoliciesMaskingColumnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}
  */
  readonly isMaskingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}
  */
  readonly maskingColumnGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}
  */
  readonly maskingPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}
  */
  readonly sensitiveTypeId?: string;
  /**
  * masking_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#masking_formats DataSafeMaskingPoliciesMaskingColumn#masking_formats}
  */
  readonly maskingFormats?: DataSafeMaskingPoliciesMaskingColumnMaskingFormats[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#timeouts DataSafeMaskingPoliciesMaskingColumn#timeouts}
  */
  readonly timeouts?: DataSafeMaskingPoliciesMaskingColumnTimeouts;
}
export interface DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}
  */
  readonly columnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#end_date DataSafeMaskingPoliciesMaskingColumn#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#end_length DataSafeMaskingPoliciesMaskingColumn#end_length}
  */
  readonly endLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#end_value DataSafeMaskingPoliciesMaskingColumn#end_value}
  */
  readonly endValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#fixed_number DataSafeMaskingPoliciesMaskingColumn#fixed_number}
  */
  readonly fixedNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#fixed_string DataSafeMaskingPoliciesMaskingColumn#fixed_string}
  */
  readonly fixedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#grouping_columns DataSafeMaskingPoliciesMaskingColumn#grouping_columns}
  */
  readonly groupingColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#length DataSafeMaskingPoliciesMaskingColumn#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#library_masking_format_id DataSafeMaskingPoliciesMaskingColumn#library_masking_format_id}
  */
  readonly libraryMaskingFormatId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#pattern DataSafeMaskingPoliciesMaskingColumn#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#post_processing_function DataSafeMaskingPoliciesMaskingColumn#post_processing_function}
  */
  readonly postProcessingFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#random_list DataSafeMaskingPoliciesMaskingColumn#random_list}
  */
  readonly randomList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#regular_expression DataSafeMaskingPoliciesMaskingColumn#regular_expression}
  */
  readonly regularExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#replace_with DataSafeMaskingPoliciesMaskingColumn#replace_with}
  */
  readonly replaceWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#sql_expression DataSafeMaskingPoliciesMaskingColumn#sql_expression}
  */
  readonly sqlExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#start_date DataSafeMaskingPoliciesMaskingColumn#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#start_length DataSafeMaskingPoliciesMaskingColumn#start_length}
  */
  readonly startLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#start_position DataSafeMaskingPoliciesMaskingColumn#start_position}
  */
  readonly startPosition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#start_value DataSafeMaskingPoliciesMaskingColumn#start_value}
  */
  readonly startValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#table_name DataSafeMaskingPoliciesMaskingColumn#table_name}
  */
  readonly tableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#type DataSafeMaskingPoliciesMaskingColumn#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#user_defined_function DataSafeMaskingPoliciesMaskingColumn#user_defined_function}
  */
  readonly userDefinedFunction?: string;
}

export function dataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesToTerraform(struct?: DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries | cdktf.IResolvable): any {
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


export function dataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesToHclTerraform(struct?: DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries | cdktf.IResolvable): any {
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

export class DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries | cdktf.IResolvable | undefined) {
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

export class DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList extends cdktf.ComplexList {
  public internalValue? : DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries[] | cdktf.IResolvable

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
  public get(index: number): DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference {
    return new DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeMaskingPoliciesMaskingColumnMaskingFormats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#condition DataSafeMaskingPoliciesMaskingColumn#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}
  */
  readonly description?: string;
  /**
  * format_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#format_entries DataSafeMaskingPoliciesMaskingColumn#format_entries}
  */
  readonly formatEntries: DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries[] | cdktf.IResolvable;
}

export function dataSafeMaskingPoliciesMaskingColumnMaskingFormatsToTerraform(struct?: DataSafeMaskingPoliciesMaskingColumnMaskingFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    description: cdktf.stringToTerraform(struct!.description),
    format_entries: cdktf.listMapper(dataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesToTerraform, true)(struct!.formatEntries),
  }
}


export function dataSafeMaskingPoliciesMaskingColumnMaskingFormatsToHclTerraform(struct?: DataSafeMaskingPoliciesMaskingColumnMaskingFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
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
    format_entries: {
      value: cdktf.listMapperHcl(dataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesToHclTerraform, true)(struct!.formatEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeMaskingPoliciesMaskingColumnMaskingFormats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._formatEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatEntries = this._formatEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeMaskingPoliciesMaskingColumnMaskingFormats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._description = undefined;
      this._formatEntries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._description = value.description;
      this._formatEntries.internalValue = value.formatEntries;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // format_entries - computed: false, optional: false, required: true
  private _formatEntries = new DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList(this, "format_entries", false);
  public get formatEntries() {
    return this._formatEntries;
  }
  public putFormatEntries(value: DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries[] | cdktf.IResolvable) {
    this._formatEntries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatEntriesInput() {
    return this._formatEntries.internalValue;
  }
}

export class DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList extends cdktf.ComplexList {
  public internalValue? : DataSafeMaskingPoliciesMaskingColumnMaskingFormats[] | cdktf.IResolvable

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
  public get(index: number): DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference {
    return new DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeMaskingPoliciesMaskingColumnTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#create DataSafeMaskingPoliciesMaskingColumn#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#delete DataSafeMaskingPoliciesMaskingColumn#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#update DataSafeMaskingPoliciesMaskingColumn#update}
  */
  readonly update?: string;
}

export function dataSafeMaskingPoliciesMaskingColumnTimeoutsToTerraform(struct?: DataSafeMaskingPoliciesMaskingColumnTimeouts | cdktf.IResolvable): any {
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


export function dataSafeMaskingPoliciesMaskingColumnTimeoutsToHclTerraform(struct?: DataSafeMaskingPoliciesMaskingColumnTimeouts | cdktf.IResolvable): any {
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

export class DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeMaskingPoliciesMaskingColumnTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeMaskingPoliciesMaskingColumnTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column oci_data_safe_masking_policies_masking_column}
*/
export class DataSafeMaskingPoliciesMaskingColumn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_masking_policies_masking_column";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeMaskingPoliciesMaskingColumn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeMaskingPoliciesMaskingColumn to import
  * @param importFromId The id of the existing DataSafeMaskingPoliciesMaskingColumn that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeMaskingPoliciesMaskingColumn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_masking_policies_masking_column", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_masking_policies_masking_column oci_data_safe_masking_policies_masking_column} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeMaskingPoliciesMaskingColumnConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeMaskingPoliciesMaskingColumnConfig) {
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
    this._columnName = config.columnName;
    this._id = config.id;
    this._isMaskingEnabled = config.isMaskingEnabled;
    this._maskingColumnGroup = config.maskingColumnGroup;
    this._maskingPolicyId = config.maskingPolicyId;
    this._object = config.object;
    this._objectType = config.objectType;
    this._schemaName = config.schemaName;
    this._sensitiveTypeId = config.sensitiveTypeId;
    this._maskingFormats.internalValue = config.maskingFormats;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_columns - computed: true, optional: false, required: false
  public get childColumns() {
    return this.getListAttribute('child_columns');
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

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
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

  // is_masking_enabled - computed: true, optional: true, required: false
  private _isMaskingEnabled?: boolean | cdktf.IResolvable; 
  public get isMaskingEnabled() {
    return this.getBooleanAttribute('is_masking_enabled');
  }
  public set isMaskingEnabled(value: boolean | cdktf.IResolvable) {
    this._isMaskingEnabled = value;
  }
  public resetIsMaskingEnabled() {
    this._isMaskingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMaskingEnabledInput() {
    return this._isMaskingEnabled;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // masking_column_group - computed: true, optional: true, required: false
  private _maskingColumnGroup?: string; 
  public get maskingColumnGroup() {
    return this.getStringAttribute('masking_column_group');
  }
  public set maskingColumnGroup(value: string) {
    this._maskingColumnGroup = value;
  }
  public resetMaskingColumnGroup() {
    this._maskingColumnGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingColumnGroupInput() {
    return this._maskingColumnGroup;
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

  // masking_formats - computed: false, optional: true, required: false
  private _maskingFormats = new DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList(this, "masking_formats", false);
  public get maskingFormats() {
    return this._maskingFormats;
  }
  public putMaskingFormats(value: DataSafeMaskingPoliciesMaskingColumnMaskingFormats[] | cdktf.IResolvable) {
    this._maskingFormats.internalValue = value;
  }
  public resetMaskingFormats() {
    this._maskingFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingFormatsInput() {
    return this._maskingFormats.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeMaskingPoliciesMaskingColumnTimeouts) {
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
      column_name: cdktf.stringToTerraform(this._columnName),
      id: cdktf.stringToTerraform(this._id),
      is_masking_enabled: cdktf.booleanToTerraform(this._isMaskingEnabled),
      masking_column_group: cdktf.stringToTerraform(this._maskingColumnGroup),
      masking_policy_id: cdktf.stringToTerraform(this._maskingPolicyId),
      object: cdktf.stringToTerraform(this._object),
      object_type: cdktf.stringToTerraform(this._objectType),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      sensitive_type_id: cdktf.stringToTerraform(this._sensitiveTypeId),
      masking_formats: cdktf.listMapper(dataSafeMaskingPoliciesMaskingColumnMaskingFormatsToTerraform, true)(this._maskingFormats.internalValue),
      timeouts: dataSafeMaskingPoliciesMaskingColumnTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      column_name: {
        value: cdktf.stringToHclTerraform(this._columnName),
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
      is_masking_enabled: {
        value: cdktf.booleanToHclTerraform(this._isMaskingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      masking_column_group: {
        value: cdktf.stringToHclTerraform(this._maskingColumnGroup),
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
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
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
      masking_formats: {
        value: cdktf.listMapperHcl(dataSafeMaskingPoliciesMaskingColumnMaskingFormatsToHclTerraform, true)(this._maskingFormats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList",
      },
      timeouts: {
        value: dataSafeMaskingPoliciesMaskingColumnTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeMaskingPoliciesMaskingColumnTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
