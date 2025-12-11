// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeReportDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}
  */
  readonly parentId: string;
  /**
  * column_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#column_filters DataSafeReportDefinition#column_filters}
  */
  readonly columnFilters: DataSafeReportDefinitionColumnFilters[] | cdktf.IResolvable;
  /**
  * column_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#column_info DataSafeReportDefinition#column_info}
  */
  readonly columnInfo: DataSafeReportDefinitionColumnInfo[] | cdktf.IResolvable;
  /**
  * column_sortings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#column_sortings DataSafeReportDefinition#column_sortings}
  */
  readonly columnSortings: DataSafeReportDefinitionColumnSortings[] | cdktf.IResolvable;
  /**
  * summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#summary DataSafeReportDefinition#summary}
  */
  readonly summary: DataSafeReportDefinitionSummary[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#timeouts DataSafeReportDefinition#timeouts}
  */
  readonly timeouts?: DataSafeReportDefinitionTimeouts;
}
export interface DataSafeReportDefinitionColumnFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#expressions DataSafeReportDefinition#expressions}
  */
  readonly expressions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#is_enabled DataSafeReportDefinition#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}
  */
  readonly isHidden: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#operator DataSafeReportDefinition#operator}
  */
  readonly operator: string;
}

export function dataSafeReportDefinitionColumnFiltersToTerraform(struct?: DataSafeReportDefinitionColumnFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_hidden: cdktf.booleanToTerraform(struct!.isHidden),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function dataSafeReportDefinitionColumnFiltersToHclTerraform(struct?: DataSafeReportDefinitionColumnFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_hidden: {
      value: cdktf.booleanToHclTerraform(struct!.isHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeReportDefinitionColumnFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeReportDefinitionColumnFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeReportDefinitionColumnFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions = undefined;
      this._fieldName = undefined;
      this._isEnabled = undefined;
      this._isHidden = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressions = value.expressions;
      this._fieldName = value.fieldName;
      this._isEnabled = value.isEnabled;
      this._isHidden = value.isHidden;
      this._operator = value.operator;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_hidden - computed: false, optional: false, required: true
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class DataSafeReportDefinitionColumnFiltersList extends cdktf.ComplexList {
  public internalValue? : DataSafeReportDefinitionColumnFilters[] | cdktf.IResolvable

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
  public get(index: number): DataSafeReportDefinitionColumnFiltersOutputReference {
    return new DataSafeReportDefinitionColumnFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeReportDefinitionColumnInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#applicable_operators DataSafeReportDefinition#applicable_operators}
  */
  readonly applicableOperators?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#data_type DataSafeReportDefinition#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}
  */
  readonly displayOrder: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}
  */
  readonly isHidden: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#is_virtual DataSafeReportDefinition#is_virtual}
  */
  readonly isVirtual?: boolean | cdktf.IResolvable;
}

export function dataSafeReportDefinitionColumnInfoToTerraform(struct?: DataSafeReportDefinitionColumnInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applicable_operators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicableOperators),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    display_order: cdktf.numberToTerraform(struct!.displayOrder),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    is_hidden: cdktf.booleanToTerraform(struct!.isHidden),
    is_virtual: cdktf.booleanToTerraform(struct!.isVirtual),
  }
}


export function dataSafeReportDefinitionColumnInfoToHclTerraform(struct?: DataSafeReportDefinitionColumnInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applicable_operators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicableOperators),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_order: {
      value: cdktf.numberToHclTerraform(struct!.displayOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_hidden: {
      value: cdktf.booleanToHclTerraform(struct!.isHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_virtual: {
      value: cdktf.booleanToHclTerraform(struct!.isVirtual),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeReportDefinitionColumnInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeReportDefinitionColumnInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicableOperators !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicableOperators = this._applicableOperators;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._displayOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOrder = this._displayOrder;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._isVirtual !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVirtual = this._isVirtual;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeReportDefinitionColumnInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicableOperators = undefined;
      this._dataType = undefined;
      this._displayName = undefined;
      this._displayOrder = undefined;
      this._fieldName = undefined;
      this._isHidden = undefined;
      this._isVirtual = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicableOperators = value.applicableOperators;
      this._dataType = value.dataType;
      this._displayName = value.displayName;
      this._displayOrder = value.displayOrder;
      this._fieldName = value.fieldName;
      this._isHidden = value.isHidden;
      this._isVirtual = value.isVirtual;
    }
  }

  // applicable_operators - computed: true, optional: true, required: false
  private _applicableOperators?: string[]; 
  public get applicableOperators() {
    return this.getListAttribute('applicable_operators');
  }
  public set applicableOperators(value: string[]) {
    this._applicableOperators = value;
  }
  public resetApplicableOperators() {
    this._applicableOperators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicableOperatorsInput() {
    return this._applicableOperators;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // display_order - computed: false, optional: false, required: true
  private _displayOrder?: number; 
  public get displayOrder() {
    return this.getNumberAttribute('display_order');
  }
  public set displayOrder(value: number) {
    this._displayOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOrderInput() {
    return this._displayOrder;
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // is_hidden - computed: false, optional: false, required: true
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
  }

  // is_virtual - computed: true, optional: true, required: false
  private _isVirtual?: boolean | cdktf.IResolvable; 
  public get isVirtual() {
    return this.getBooleanAttribute('is_virtual');
  }
  public set isVirtual(value: boolean | cdktf.IResolvable) {
    this._isVirtual = value;
  }
  public resetIsVirtual() {
    this._isVirtual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVirtualInput() {
    return this._isVirtual;
  }
}

export class DataSafeReportDefinitionColumnInfoList extends cdktf.ComplexList {
  public internalValue? : DataSafeReportDefinitionColumnInfo[] | cdktf.IResolvable

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
  public get(index: number): DataSafeReportDefinitionColumnInfoOutputReference {
    return new DataSafeReportDefinitionColumnInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeReportDefinitionColumnSortings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#is_ascending DataSafeReportDefinition#is_ascending}
  */
  readonly isAscending: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#sorting_order DataSafeReportDefinition#sorting_order}
  */
  readonly sortingOrder: number;
}

export function dataSafeReportDefinitionColumnSortingsToTerraform(struct?: DataSafeReportDefinitionColumnSortings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    is_ascending: cdktf.booleanToTerraform(struct!.isAscending),
    sorting_order: cdktf.numberToTerraform(struct!.sortingOrder),
  }
}


export function dataSafeReportDefinitionColumnSortingsToHclTerraform(struct?: DataSafeReportDefinitionColumnSortings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ascending: {
      value: cdktf.booleanToHclTerraform(struct!.isAscending),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sorting_order: {
      value: cdktf.numberToHclTerraform(struct!.sortingOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeReportDefinitionColumnSortingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeReportDefinitionColumnSortings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._isAscending !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAscending = this._isAscending;
    }
    if (this._sortingOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortingOrder = this._sortingOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeReportDefinitionColumnSortings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._isAscending = undefined;
      this._sortingOrder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._isAscending = value.isAscending;
      this._sortingOrder = value.sortingOrder;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // is_ascending - computed: false, optional: false, required: true
  private _isAscending?: boolean | cdktf.IResolvable; 
  public get isAscending() {
    return this.getBooleanAttribute('is_ascending');
  }
  public set isAscending(value: boolean | cdktf.IResolvable) {
    this._isAscending = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAscendingInput() {
    return this._isAscending;
  }

  // sorting_order - computed: false, optional: false, required: true
  private _sortingOrder?: number; 
  public get sortingOrder() {
    return this.getNumberAttribute('sorting_order');
  }
  public set sortingOrder(value: number) {
    this._sortingOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortingOrderInput() {
    return this._sortingOrder;
  }
}

export class DataSafeReportDefinitionColumnSortingsList extends cdktf.ComplexList {
  public internalValue? : DataSafeReportDefinitionColumnSortings[] | cdktf.IResolvable

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
  public get(index: number): DataSafeReportDefinitionColumnSortingsOutputReference {
    return new DataSafeReportDefinitionColumnSortingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeReportDefinitionSummary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#count_of DataSafeReportDefinition#count_of}
  */
  readonly countOf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}
  */
  readonly displayOrder: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#group_by_field_name DataSafeReportDefinition#group_by_field_name}
  */
  readonly groupByFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#name DataSafeReportDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#scim_filter DataSafeReportDefinition#scim_filter}
  */
  readonly scimFilter?: string;
}

export function dataSafeReportDefinitionSummaryToTerraform(struct?: DataSafeReportDefinitionSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count_of: cdktf.stringToTerraform(struct!.countOf),
    display_order: cdktf.numberToTerraform(struct!.displayOrder),
    group_by_field_name: cdktf.stringToTerraform(struct!.groupByFieldName),
    is_hidden: cdktf.booleanToTerraform(struct!.isHidden),
    name: cdktf.stringToTerraform(struct!.name),
    scim_filter: cdktf.stringToTerraform(struct!.scimFilter),
  }
}


export function dataSafeReportDefinitionSummaryToHclTerraform(struct?: DataSafeReportDefinitionSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count_of: {
      value: cdktf.stringToHclTerraform(struct!.countOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_order: {
      value: cdktf.numberToHclTerraform(struct!.displayOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_by_field_name: {
      value: cdktf.stringToHclTerraform(struct!.groupByFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_hidden: {
      value: cdktf.booleanToHclTerraform(struct!.isHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scim_filter: {
      value: cdktf.stringToHclTerraform(struct!.scimFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeReportDefinitionSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeReportDefinitionSummary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.countOf = this._countOf;
    }
    if (this._displayOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOrder = this._displayOrder;
    }
    if (this._groupByFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFieldName = this._groupByFieldName;
    }
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scimFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.scimFilter = this._scimFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeReportDefinitionSummary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countOf = undefined;
      this._displayOrder = undefined;
      this._groupByFieldName = undefined;
      this._isHidden = undefined;
      this._name = undefined;
      this._scimFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countOf = value.countOf;
      this._displayOrder = value.displayOrder;
      this._groupByFieldName = value.groupByFieldName;
      this._isHidden = value.isHidden;
      this._name = value.name;
      this._scimFilter = value.scimFilter;
    }
  }

  // count_of - computed: true, optional: true, required: false
  private _countOf?: string; 
  public get countOf() {
    return this.getStringAttribute('count_of');
  }
  public set countOf(value: string) {
    this._countOf = value;
  }
  public resetCountOf() {
    this._countOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countOfInput() {
    return this._countOf;
  }

  // display_order - computed: false, optional: false, required: true
  private _displayOrder?: number; 
  public get displayOrder() {
    return this.getNumberAttribute('display_order');
  }
  public set displayOrder(value: number) {
    this._displayOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOrderInput() {
    return this._displayOrder;
  }

  // group_by_field_name - computed: true, optional: true, required: false
  private _groupByFieldName?: string; 
  public get groupByFieldName() {
    return this.getStringAttribute('group_by_field_name');
  }
  public set groupByFieldName(value: string) {
    this._groupByFieldName = value;
  }
  public resetGroupByFieldName() {
    this._groupByFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldNameInput() {
    return this._groupByFieldName;
  }

  // is_hidden - computed: true, optional: true, required: false
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
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

  // scim_filter - computed: true, optional: true, required: false
  private _scimFilter?: string; 
  public get scimFilter() {
    return this.getStringAttribute('scim_filter');
  }
  public set scimFilter(value: string) {
    this._scimFilter = value;
  }
  public resetScimFilter() {
    this._scimFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimFilterInput() {
    return this._scimFilter;
  }
}

export class DataSafeReportDefinitionSummaryList extends cdktf.ComplexList {
  public internalValue? : DataSafeReportDefinitionSummary[] | cdktf.IResolvable

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
  public get(index: number): DataSafeReportDefinitionSummaryOutputReference {
    return new DataSafeReportDefinitionSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeReportDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#create DataSafeReportDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#delete DataSafeReportDefinition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#update DataSafeReportDefinition#update}
  */
  readonly update?: string;
}

export function dataSafeReportDefinitionTimeoutsToTerraform(struct?: DataSafeReportDefinitionTimeouts | cdktf.IResolvable): any {
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


export function dataSafeReportDefinitionTimeoutsToHclTerraform(struct?: DataSafeReportDefinitionTimeouts | cdktf.IResolvable): any {
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

export class DataSafeReportDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeReportDefinitionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeReportDefinitionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition oci_data_safe_report_definition}
*/
export class DataSafeReportDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_report_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeReportDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeReportDefinition to import
  * @param importFromId The id of the existing DataSafeReportDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeReportDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_report_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_report_definition oci_data_safe_report_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeReportDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeReportDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_report_definition',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._parentId = config.parentId;
    this._columnFilters.internalValue = config.columnFilters;
    this._columnInfo.internalValue = config.columnInfo;
    this._columnSortings.internalValue = config.columnSortings;
    this._summary.internalValue = config.summary;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

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

  // compliance_standards - computed: true, optional: false, required: false
  public get complianceStandards() {
    return this.getListAttribute('compliance_standards');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // display_order - computed: true, optional: false, required: false
  public get displayOrder() {
    return this.getNumberAttribute('display_order');
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

  // is_seeded - computed: true, optional: false, required: false
  public get isSeeded() {
    return this.getBooleanAttribute('is_seeded');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // record_time_span - computed: true, optional: false, required: false
  public get recordTimeSpan() {
    return this.getStringAttribute('record_time_span');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // scheduled_report_compartment_id - computed: true, optional: false, required: false
  public get scheduledReportCompartmentId() {
    return this.getStringAttribute('scheduled_report_compartment_id');
  }

  // scheduled_report_mime_type - computed: true, optional: false, required: false
  public get scheduledReportMimeType() {
    return this.getStringAttribute('scheduled_report_mime_type');
  }

  // scheduled_report_name - computed: true, optional: false, required: false
  public get scheduledReportName() {
    return this.getStringAttribute('scheduled_report_name');
  }

  // scheduled_report_row_limit - computed: true, optional: false, required: false
  public get scheduledReportRowLimit() {
    return this.getNumberAttribute('scheduled_report_row_limit');
  }

  // scim_filter - computed: true, optional: false, required: false
  public get scimFilter() {
    return this.getStringAttribute('scim_filter');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // column_filters - computed: false, optional: false, required: true
  private _columnFilters = new DataSafeReportDefinitionColumnFiltersList(this, "column_filters", false);
  public get columnFilters() {
    return this._columnFilters;
  }
  public putColumnFilters(value: DataSafeReportDefinitionColumnFilters[] | cdktf.IResolvable) {
    this._columnFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnFiltersInput() {
    return this._columnFilters.internalValue;
  }

  // column_info - computed: false, optional: false, required: true
  private _columnInfo = new DataSafeReportDefinitionColumnInfoList(this, "column_info", false);
  public get columnInfo() {
    return this._columnInfo;
  }
  public putColumnInfo(value: DataSafeReportDefinitionColumnInfo[] | cdktf.IResolvable) {
    this._columnInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInfoInput() {
    return this._columnInfo.internalValue;
  }

  // column_sortings - computed: false, optional: false, required: true
  private _columnSortings = new DataSafeReportDefinitionColumnSortingsList(this, "column_sortings", false);
  public get columnSortings() {
    return this._columnSortings;
  }
  public putColumnSortings(value: DataSafeReportDefinitionColumnSortings[] | cdktf.IResolvable) {
    this._columnSortings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSortingsInput() {
    return this._columnSortings.internalValue;
  }

  // summary - computed: false, optional: false, required: true
  private _summary = new DataSafeReportDefinitionSummaryList(this, "summary", false);
  public get summary() {
    return this._summary;
  }
  public putSummary(value: DataSafeReportDefinitionSummary[] | cdktf.IResolvable) {
    this._summary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeReportDefinitionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeReportDefinitionTimeouts) {
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
      parent_id: cdktf.stringToTerraform(this._parentId),
      column_filters: cdktf.listMapper(dataSafeReportDefinitionColumnFiltersToTerraform, true)(this._columnFilters.internalValue),
      column_info: cdktf.listMapper(dataSafeReportDefinitionColumnInfoToTerraform, true)(this._columnInfo.internalValue),
      column_sortings: cdktf.listMapper(dataSafeReportDefinitionColumnSortingsToTerraform, true)(this._columnSortings.internalValue),
      summary: cdktf.listMapper(dataSafeReportDefinitionSummaryToTerraform, true)(this._summary.internalValue),
      timeouts: dataSafeReportDefinitionTimeoutsToTerraform(this._timeouts.internalValue),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_filters: {
        value: cdktf.listMapperHcl(dataSafeReportDefinitionColumnFiltersToHclTerraform, true)(this._columnFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeReportDefinitionColumnFiltersList",
      },
      column_info: {
        value: cdktf.listMapperHcl(dataSafeReportDefinitionColumnInfoToHclTerraform, true)(this._columnInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeReportDefinitionColumnInfoList",
      },
      column_sortings: {
        value: cdktf.listMapperHcl(dataSafeReportDefinitionColumnSortingsToHclTerraform, true)(this._columnSortings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeReportDefinitionColumnSortingsList",
      },
      summary: {
        value: cdktf.listMapperHcl(dataSafeReportDefinitionSummaryToHclTerraform, true)(this._summary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeReportDefinitionSummaryList",
      },
      timeouts: {
        value: dataSafeReportDefinitionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeReportDefinitionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
