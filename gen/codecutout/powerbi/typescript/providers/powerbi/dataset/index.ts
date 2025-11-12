// https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The dataset mode or type. Any value from `push`, `pushStreaming` or `streaming`. `asAzure` and `asOnPrem` are not supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#default_mode Dataset#default_mode}
  */
  readonly defaultMode: string;
  /**
  * The dataset mode or type. Any value from `none` or `basicFIFO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#default_retention_policy Dataset#default_retention_policy}
  */
  readonly defaultRetentionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#id Dataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
  /**
  * Workspace ID in which the dataset will be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#workspace_id Dataset#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * relationship block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#relationship Dataset#relationship}
  */
  readonly relationship?: DatasetRelationship[] | cdktf.IResolvable;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#table Dataset#table}
  */
  readonly table: DatasetTable[] | cdktf.IResolvable;
}
export interface DatasetRelationship {
  /**
  * The filter direction of the relationship. Any value from `automatic`, `bothDirections` or `oneDirection`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#cross_filtering_behavior Dataset#cross_filtering_behavior}
  */
  readonly crossFilteringBehavior?: string;
  /**
  * The name of the foreign key column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#from_column Dataset#from_column}
  */
  readonly fromColumn: string;
  /**
  * The name of the foreign key table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#from_table Dataset#from_table}
  */
  readonly fromTable: string;
  /**
  * The relationship name and identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
  /**
  * The name of the primary key column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#to_column Dataset#to_column}
  */
  readonly toColumn: string;
  /**
  * The name of the primary key table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#to_table Dataset#to_table}
  */
  readonly toTable: string;
}

export function datasetRelationshipToTerraform(struct?: DatasetRelationship | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_filtering_behavior: cdktf.stringToTerraform(struct!.crossFilteringBehavior),
    from_column: cdktf.stringToTerraform(struct!.fromColumn),
    from_table: cdktf.stringToTerraform(struct!.fromTable),
    name: cdktf.stringToTerraform(struct!.name),
    to_column: cdktf.stringToTerraform(struct!.toColumn),
    to_table: cdktf.stringToTerraform(struct!.toTable),
  }
}


export function datasetRelationshipToHclTerraform(struct?: DatasetRelationship | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_filtering_behavior: {
      value: cdktf.stringToHclTerraform(struct!.crossFilteringBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_column: {
      value: cdktf.stringToHclTerraform(struct!.fromColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_table: {
      value: cdktf.stringToHclTerraform(struct!.fromTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_column: {
      value: cdktf.stringToHclTerraform(struct!.toColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_table: {
      value: cdktf.stringToHclTerraform(struct!.toTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetRelationshipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetRelationship | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossFilteringBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossFilteringBehavior = this._crossFilteringBehavior;
    }
    if (this._fromColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromColumn = this._fromColumn;
    }
    if (this._fromTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromTable = this._fromTable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._toColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.toColumn = this._toColumn;
    }
    if (this._toTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.toTable = this._toTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetRelationship | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossFilteringBehavior = undefined;
      this._fromColumn = undefined;
      this._fromTable = undefined;
      this._name = undefined;
      this._toColumn = undefined;
      this._toTable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossFilteringBehavior = value.crossFilteringBehavior;
      this._fromColumn = value.fromColumn;
      this._fromTable = value.fromTable;
      this._name = value.name;
      this._toColumn = value.toColumn;
      this._toTable = value.toTable;
    }
  }

  // cross_filtering_behavior - computed: false, optional: true, required: false
  private _crossFilteringBehavior?: string; 
  public get crossFilteringBehavior() {
    return this.getStringAttribute('cross_filtering_behavior');
  }
  public set crossFilteringBehavior(value: string) {
    this._crossFilteringBehavior = value;
  }
  public resetCrossFilteringBehavior() {
    this._crossFilteringBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossFilteringBehaviorInput() {
    return this._crossFilteringBehavior;
  }

  // from_column - computed: false, optional: false, required: true
  private _fromColumn?: string; 
  public get fromColumn() {
    return this.getStringAttribute('from_column');
  }
  public set fromColumn(value: string) {
    this._fromColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromColumnInput() {
    return this._fromColumn;
  }

  // from_table - computed: false, optional: false, required: true
  private _fromTable?: string; 
  public get fromTable() {
    return this.getStringAttribute('from_table');
  }
  public set fromTable(value: string) {
    this._fromTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTableInput() {
    return this._fromTable;
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

  // to_column - computed: false, optional: false, required: true
  private _toColumn?: string; 
  public get toColumn() {
    return this.getStringAttribute('to_column');
  }
  public set toColumn(value: string) {
    this._toColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toColumnInput() {
    return this._toColumn;
  }

  // to_table - computed: false, optional: false, required: true
  private _toTable?: string; 
  public get toTable() {
    return this.getStringAttribute('to_table');
  }
  public set toTable(value: string) {
    this._toTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toTableInput() {
    return this._toTable;
  }
}

export class DatasetRelationshipList extends cdktf.ComplexList {
  public internalValue? : DatasetRelationship[] | cdktf.IResolvable

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
  public get(index: number): DatasetRelationshipOutputReference {
    return new DatasetRelationshipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetTableColumn {
  /**
  * The column data type. Any value from `int64`, `double`, `bool`, `datetime`, `string` or `decimal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#data_type Dataset#data_type}
  */
  readonly dataType: string;
  /**
  * The format of the column as specified in [FORMAT_STRING](https://docs.microsoft.com/en-us/analysis-services/multidimensional-models/mdx/mdx-cell-properties-format-string-contents)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#format_string Dataset#format_string}
  */
  readonly formatString?: string;
  /**
  * The column name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
}

export function datasetTableColumnToTerraform(struct?: DatasetTableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    format_string: cdktf.stringToTerraform(struct!.formatString),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function datasetTableColumnToHclTerraform(struct?: DatasetTableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_string: {
      value: cdktf.stringToHclTerraform(struct!.formatString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetTableColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetTableColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._formatString !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatString = this._formatString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetTableColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._formatString = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._formatString = value.formatString;
      this._name = value.name;
    }
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // format_string - computed: false, optional: true, required: false
  private _formatString?: string; 
  public get formatString() {
    return this.getStringAttribute('format_string');
  }
  public set formatString(value: string) {
    this._formatString = value;
  }
  public resetFormatString() {
    this._formatString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatStringInput() {
    return this._formatString;
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
}

export class DatasetTableColumnList extends cdktf.ComplexList {
  public internalValue? : DatasetTableColumn[] | cdktf.IResolvable

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
  public get(index: number): DatasetTableColumnOutputReference {
    return new DatasetTableColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetTableMeasure {
  /**
  * The DAX expression for the measure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#expression Dataset#expression}
  */
  readonly expression: string;
  /**
  * The measure name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
}

export function datasetTableMeasureToTerraform(struct?: DatasetTableMeasure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function datasetTableMeasureToHclTerraform(struct?: DatasetTableMeasure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetTableMeasureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetTableMeasure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetTableMeasure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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
}

export class DatasetTableMeasureList extends cdktf.ComplexList {
  public internalValue? : DatasetTableMeasure[] | cdktf.IResolvable

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
  public get(index: number): DatasetTableMeasureOutputReference {
    return new DatasetTableMeasureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetTable {
  /**
  * The table name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#column Dataset#column}
  */
  readonly column?: DatasetTableColumn[] | cdktf.IResolvable;
  /**
  * measure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#measure Dataset#measure}
  */
  readonly measure?: DatasetTableMeasure[] | cdktf.IResolvable;
}

export function datasetTableToTerraform(struct?: DatasetTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    column: cdktf.listMapper(datasetTableColumnToTerraform, true)(struct!.column),
    measure: cdktf.listMapper(datasetTableMeasureToTerraform, true)(struct!.measure),
  }
}


export function datasetTableToHclTerraform(struct?: DatasetTable | cdktf.IResolvable): any {
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
    column: {
      value: cdktf.listMapperHcl(datasetTableColumnToHclTerraform, true)(struct!.column),
      isBlock: true,
      type: "set",
      storageClassType: "DatasetTableColumnList",
    },
    measure: {
      value: cdktf.listMapperHcl(datasetTableMeasureToHclTerraform, true)(struct!.measure),
      isBlock: true,
      type: "set",
      storageClassType: "DatasetTableMeasureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._measure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.measure = this._measure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._column.internalValue = undefined;
      this._measure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._column.internalValue = value.column;
      this._measure.internalValue = value.measure;
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

  // column - computed: false, optional: true, required: false
  private _column = new DatasetTableColumnList(this, "column", true);
  public get column() {
    return this._column;
  }
  public putColumn(value: DatasetTableColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // measure - computed: false, optional: true, required: false
  private _measure = new DatasetTableMeasureList(this, "measure", true);
  public get measure() {
    return this._measure;
  }
  public putMeasure(value: DatasetTableMeasure[] | cdktf.IResolvable) {
    this._measure.internalValue = value;
  }
  public resetMeasure() {
    this._measure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureInput() {
    return this._measure.internalValue;
  }
}

export class DatasetTableList extends cdktf.ComplexList {
  public internalValue? : DatasetTable[] | cdktf.IResolvable

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
  public get(index: number): DatasetTableOutputReference {
    return new DatasetTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset powerbi_dataset}
*/
export class Dataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerbi_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dataset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dataset to import
  * @param importFromId The id of the existing Dataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerbi_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/dataset powerbi_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'powerbi_dataset',
      terraformGeneratorMetadata: {
        providerName: 'powerbi',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultMode = config.defaultMode;
    this._defaultRetentionPolicy = config.defaultRetentionPolicy;
    this._id = config.id;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
    this._relationship.internalValue = config.relationship;
    this._table.internalValue = config.table;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_mode - computed: false, optional: false, required: true
  private _defaultMode?: string; 
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }
  public set defaultMode(value: string) {
    this._defaultMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // default_retention_policy - computed: false, optional: true, required: false
  private _defaultRetentionPolicy?: string; 
  public get defaultRetentionPolicy() {
    return this.getStringAttribute('default_retention_policy');
  }
  public set defaultRetentionPolicy(value: string) {
    this._defaultRetentionPolicy = value;
  }
  public resetDefaultRetentionPolicy() {
    this._defaultRetentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionPolicyInput() {
    return this._defaultRetentionPolicy;
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

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // relationship - computed: false, optional: true, required: false
  private _relationship = new DatasetRelationshipList(this, "relationship", true);
  public get relationship() {
    return this._relationship;
  }
  public putRelationship(value: DatasetRelationship[] | cdktf.IResolvable) {
    this._relationship.internalValue = value;
  }
  public resetRelationship() {
    this._relationship.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipInput() {
    return this._relationship.internalValue;
  }

  // table - computed: false, optional: false, required: true
  private _table = new DatasetTableList(this, "table", true);
  public get table() {
    return this._table;
  }
  public putTable(value: DatasetTable[] | cdktf.IResolvable) {
    this._table.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_mode: cdktf.stringToTerraform(this._defaultMode),
      default_retention_policy: cdktf.stringToTerraform(this._defaultRetentionPolicy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      relationship: cdktf.listMapper(datasetRelationshipToTerraform, true)(this._relationship.internalValue),
      table: cdktf.listMapper(datasetTableToTerraform, true)(this._table.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_mode: {
        value: cdktf.stringToHclTerraform(this._defaultMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_retention_policy: {
        value: cdktf.stringToHclTerraform(this._defaultRetentionPolicy),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relationship: {
        value: cdktf.listMapperHcl(datasetRelationshipToHclTerraform, true)(this._relationship.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatasetRelationshipList",
      },
      table: {
        value: cdktf.listMapperHcl(datasetTableToHclTerraform, true)(this._table.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatasetTableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
