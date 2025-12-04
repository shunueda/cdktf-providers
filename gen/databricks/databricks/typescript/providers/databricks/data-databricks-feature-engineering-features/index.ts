// https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksFeatureEngineeringFeaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#page_size DataDatabricksFeatureEngineeringFeatures#page_size}
  */
  readonly pageSize?: number;
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#key DataDatabricksFeatureEngineeringFeatures#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#value DataDatabricksFeatureEngineeringFeatures#value}
  */
  readonly value: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference {
    return new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#extra_parameters DataDatabricksFeatureEngineeringFeatures#extra_parameters}
  */
  readonly extraParameters?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#function_type DataDatabricksFeatureEngineeringFeatures#function_type}
  */
  readonly functionType: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_parameters: cdktf.listMapper(dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersToTerraform, false)(struct!.extraParameters),
    function_type: cdktf.stringToTerraform(struct!.functionType),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_parameters: {
      value: cdktf.listMapperHcl(dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersToHclTerraform, false)(struct!.extraParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList",
    },
    function_type: {
      value: cdktf.stringToHclTerraform(struct!.functionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParameters = this._extraParameters?.internalValue;
    }
    if (this._functionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionType = this._functionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extraParameters.internalValue = undefined;
      this._functionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extraParameters.internalValue = value.extraParameters;
      this._functionType = value.functionType;
    }
  }

  // extra_parameters - computed: true, optional: true, required: false
  private _extraParameters = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList(this, "extra_parameters", false);
  public get extraParameters() {
    return this._extraParameters;
  }
  public putExtraParameters(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[] | cdktf.IResolvable) {
    this._extraParameters.internalValue = value;
  }
  public resetExtraParameters() {
    this._extraParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParametersInput() {
    return this._extraParameters.internalValue;
  }

  // function_type - computed: true, optional: false, required: true
  private _functionType?: string; 
  public get functionType() {
    return this.getStringAttribute('function_type');
  }
  public set functionType(value: string) {
    this._functionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionTypeInput() {
    return this._functionType;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#job_id DataDatabricksFeatureEngineeringFeatures#job_id}
  */
  readonly jobId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#job_run_id DataDatabricksFeatureEngineeringFeatures#job_run_id}
  */
  readonly jobRunId?: number;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_id: cdktf.numberToTerraform(struct!.jobId),
    job_run_id: cdktf.numberToTerraform(struct!.jobRunId),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_id: {
      value: cdktf.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_run_id: {
      value: cdktf.numberToHclTerraform(struct!.jobRunId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._jobRunId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobRunId = this._jobRunId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobId = undefined;
      this._jobRunId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobId = value.jobId;
      this._jobRunId = value.jobRunId;
    }
  }

  // job_id - computed: true, optional: true, required: false
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_run_id - computed: true, optional: true, required: false
  private _jobRunId?: number; 
  public get jobRunId() {
    return this.getNumberAttribute('job_run_id');
  }
  public set jobRunId(value: number) {
    this._jobRunId = value;
  }
  public resetJobRunId() {
    this._jobRunId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobRunIdInput() {
    return this._jobRunId;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#job_context DataDatabricksFeatureEngineeringFeatures#job_context}
  */
  readonly jobContext?: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#notebook_id DataDatabricksFeatureEngineeringFeatures#notebook_id}
  */
  readonly notebookId?: number;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_context: dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextToTerraform(struct!.jobContext),
    notebook_id: cdktf.numberToTerraform(struct!.notebookId),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_context: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextToHclTerraform(struct!.jobContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext",
    },
    notebook_id: {
      value: cdktf.numberToHclTerraform(struct!.notebookId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobContext = this._jobContext?.internalValue;
    }
    if (this._notebookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookId = this._notebookId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobContext.internalValue = undefined;
      this._notebookId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobContext.internalValue = value.jobContext;
      this._notebookId = value.notebookId;
    }
  }

  // job_context - computed: true, optional: true, required: false
  private _jobContext = new DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference(this, "job_context");
  public get jobContext() {
    return this._jobContext;
  }
  public putJobContext(value: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext) {
    this._jobContext.internalValue = value;
  }
  public resetJobContext() {
    this._jobContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobContextInput() {
    return this._jobContext.internalValue;
  }

  // notebook_id - computed: true, optional: true, required: false
  private _notebookId?: number; 
  public get notebookId() {
    return this.getNumberAttribute('notebook_id');
  }
  public set notebookId(value: number) {
    this._notebookId = value;
  }
  public resetNotebookId() {
    this._notebookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookIdInput() {
    return this._notebookId;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#entity_columns DataDatabricksFeatureEngineeringFeatures#entity_columns}
  */
  readonly entityColumns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#timeseries_column DataDatabricksFeatureEngineeringFeatures#timeseries_column}
  */
  readonly timeseriesColumn: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityColumns),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    timeseries_column: cdktf.stringToTerraform(struct!.timeseriesColumn),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    full_name: {
      value: cdktf.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_column: {
      value: cdktf.stringToHclTerraform(struct!.timeseriesColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityColumns = this._entityColumns;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._timeseriesColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesColumn = this._timeseriesColumn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityColumns = undefined;
      this._fullName = undefined;
      this._timeseriesColumn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityColumns = value.entityColumns;
      this._fullName = value.fullName;
      this._timeseriesColumn = value.timeseriesColumn;
    }
  }

  // entity_columns - computed: true, optional: false, required: true
  private _entityColumns?: string[]; 
  public get entityColumns() {
    return this.getListAttribute('entity_columns');
  }
  public set entityColumns(value: string[]) {
    this._entityColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityColumnsInput() {
    return this._entityColumns;
  }

  // full_name - computed: true, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // timeseries_column - computed: true, optional: false, required: true
  private _timeseriesColumn?: string; 
  public get timeseriesColumn() {
    return this.getStringAttribute('timeseries_column');
  }
  public set timeseriesColumn(value: string) {
    this._timeseriesColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesColumnInput() {
    return this._timeseriesColumn;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#variant_expr_path DataDatabricksFeatureEngineeringFeatures#variant_expr_path}
  */
  readonly variantExprPath: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variant_expr_path: cdktf.stringToTerraform(struct!.variantExprPath),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variant_expr_path: {
      value: cdktf.stringToHclTerraform(struct!.variantExprPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variantExprPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantExprPath = this._variantExprPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._variantExprPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._variantExprPath = value.variantExprPath;
    }
  }

  // variant_expr_path - computed: true, optional: false, required: true
  private _variantExprPath?: string; 
  public get variantExprPath() {
    return this.getStringAttribute('variant_expr_path');
  }
  public set variantExprPath(value: string) {
    this._variantExprPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variantExprPathInput() {
    return this._variantExprPath;
  }
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference {
    return new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#variant_expr_path DataDatabricksFeatureEngineeringFeatures#variant_expr_path}
  */
  readonly variantExprPath: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variant_expr_path: cdktf.stringToTerraform(struct!.variantExprPath),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variant_expr_path: {
      value: cdktf.stringToHclTerraform(struct!.variantExprPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variantExprPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantExprPath = this._variantExprPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._variantExprPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._variantExprPath = value.variantExprPath;
    }
  }

  // variant_expr_path - computed: true, optional: false, required: true
  private _variantExprPath?: string; 
  public get variantExprPath() {
    return this.getStringAttribute('variant_expr_path');
  }
  public set variantExprPath(value: string) {
    this._variantExprPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variantExprPathInput() {
    return this._variantExprPath;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#entity_column_identifiers DataDatabricksFeatureEngineeringFeatures#entity_column_identifiers}
  */
  readonly entityColumnIdentifiers: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#name DataDatabricksFeatureEngineeringFeatures#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#timeseries_column_identifier DataDatabricksFeatureEngineeringFeatures#timeseries_column_identifier}
  */
  readonly timeseriesColumnIdentifier: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_column_identifiers: cdktf.listMapper(dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersToTerraform, false)(struct!.entityColumnIdentifiers),
    name: cdktf.stringToTerraform(struct!.name),
    timeseries_column_identifier: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierToTerraform(struct!.timeseriesColumnIdentifier),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_column_identifiers: {
      value: cdktf.listMapperHcl(dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersToHclTerraform, false)(struct!.entityColumnIdentifiers),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_column_identifier: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierToHclTerraform(struct!.timeseriesColumnIdentifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityColumnIdentifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityColumnIdentifiers = this._entityColumnIdentifiers?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeseriesColumnIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesColumnIdentifier = this._timeseriesColumnIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityColumnIdentifiers.internalValue = undefined;
      this._name = undefined;
      this._timeseriesColumnIdentifier.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityColumnIdentifiers.internalValue = value.entityColumnIdentifiers;
      this._name = value.name;
      this._timeseriesColumnIdentifier.internalValue = value.timeseriesColumnIdentifier;
    }
  }

  // entity_column_identifiers - computed: true, optional: false, required: true
  private _entityColumnIdentifiers = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList(this, "entity_column_identifiers", false);
  public get entityColumnIdentifiers() {
    return this._entityColumnIdentifiers;
  }
  public putEntityColumnIdentifiers(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers[] | cdktf.IResolvable) {
    this._entityColumnIdentifiers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityColumnIdentifiersInput() {
    return this._entityColumnIdentifiers.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // timeseries_column_identifier - computed: true, optional: false, required: true
  private _timeseriesColumnIdentifier = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference(this, "timeseries_column_identifier");
  public get timeseriesColumnIdentifier() {
    return this._timeseriesColumnIdentifier;
  }
  public putTimeseriesColumnIdentifier(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier) {
    this._timeseriesColumnIdentifier.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesColumnIdentifierInput() {
    return this._timeseriesColumnIdentifier.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#delta_table_source DataDatabricksFeatureEngineeringFeatures#delta_table_source}
  */
  readonly deltaTableSource?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#kafka_source DataDatabricksFeatureEngineeringFeatures#kafka_source}
  */
  readonly kafkaSource?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delta_table_source: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceToTerraform(struct!.deltaTableSource),
    kafka_source: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceToTerraform(struct!.kafkaSource),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delta_table_source: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceToHclTerraform(struct!.deltaTableSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource",
    },
    kafka_source: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceToHclTerraform(struct!.kafkaSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaTableSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTableSource = this._deltaTableSource?.internalValue;
    }
    if (this._kafkaSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaSource = this._kafkaSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deltaTableSource.internalValue = undefined;
      this._kafkaSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deltaTableSource.internalValue = value.deltaTableSource;
      this._kafkaSource.internalValue = value.kafkaSource;
    }
  }

  // delta_table_source - computed: true, optional: true, required: false
  private _deltaTableSource = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference(this, "delta_table_source");
  public get deltaTableSource() {
    return this._deltaTableSource;
  }
  public putDeltaTableSource(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource) {
    this._deltaTableSource.internalValue = value;
  }
  public resetDeltaTableSource() {
    this._deltaTableSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTableSourceInput() {
    return this._deltaTableSource.internalValue;
  }

  // kafka_source - computed: true, optional: true, required: false
  private _kafkaSource = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference(this, "kafka_source");
  public get kafkaSource() {
    return this._kafkaSource;
  }
  public putKafkaSource(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource) {
    this._kafkaSource.internalValue = value;
  }
  public resetKafkaSource() {
    this._kafkaSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSourceInput() {
    return this._kafkaSource.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#offset DataDatabricksFeatureEngineeringFeatures#offset}
  */
  readonly offset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktf.stringToTerraform(struct!.offset),
    window_duration: cdktf.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offset: {
      value: cdktf.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_duration: {
      value: cdktf.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offset = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offset = value.offset;
      this._windowDuration = value.windowDuration;
    }
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#slide_duration DataDatabricksFeatureEngineeringFeatures#slide_duration}
  */
  readonly slideDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slide_duration: cdktf.stringToTerraform(struct!.slideDuration),
    window_duration: cdktf.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slide_duration: {
      value: cdktf.stringToHclTerraform(struct!.slideDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_duration: {
      value: cdktf.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slideDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.slideDuration = this._slideDuration;
    }
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slideDuration = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slideDuration = value.slideDuration;
      this._windowDuration = value.windowDuration;
    }
  }

  // slide_duration - computed: true, optional: false, required: true
  private _slideDuration?: string; 
  public get slideDuration() {
    return this.getStringAttribute('slide_duration');
  }
  public set slideDuration(value: string) {
    this._slideDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slideDurationInput() {
    return this._slideDuration;
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_duration: cdktf.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window_duration: {
      value: cdktf.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._windowDuration = value.windowDuration;
    }
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#continuous DataDatabricksFeatureEngineeringFeatures#continuous}
  */
  readonly continuous?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#sliding DataDatabricksFeatureEngineeringFeatures#sliding}
  */
  readonly sliding?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#tumbling DataDatabricksFeatureEngineeringFeatures#tumbling}
  */
  readonly tumbling?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousToTerraform(struct!.continuous),
    sliding: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingToTerraform(struct!.sliding),
    tumbling: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingToTerraform(struct!.tumbling),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuous: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousToHclTerraform(struct!.continuous),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous",
    },
    sliding: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingToHclTerraform(struct!.sliding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding",
    },
    tumbling: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingToHclTerraform(struct!.tumbling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous?.internalValue;
    }
    if (this._sliding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliding = this._sliding?.internalValue;
    }
    if (this._tumbling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tumbling = this._tumbling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continuous.internalValue = undefined;
      this._sliding.internalValue = undefined;
      this._tumbling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continuous.internalValue = value.continuous;
      this._sliding.internalValue = value.sliding;
      this._tumbling.internalValue = value.tumbling;
    }
  }

  // continuous - computed: true, optional: true, required: false
  private _continuous = new DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous) {
    this._continuous.internalValue = value;
  }
  public resetContinuous() {
    this._continuous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous.internalValue;
  }

  // sliding - computed: true, optional: true, required: false
  private _sliding = new DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference(this, "sliding");
  public get sliding() {
    return this._sliding;
  }
  public putSliding(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding) {
    this._sliding.internalValue = value;
  }
  public resetSliding() {
    this._sliding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slidingInput() {
    return this._sliding.internalValue;
  }

  // tumbling - computed: true, optional: true, required: false
  private _tumbling = new DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
  public putTumbling(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling) {
    this._tumbling.internalValue = value;
  }
  public resetTumbling() {
    this._tumbling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tumblingInput() {
    return this._tumbling.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}
  */
  readonly fullName: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_name: cdktf.stringToTerraform(struct!.fullName),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_name: {
      value: cdktf.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullName = value.fullName;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter_condition - computed: true, optional: false, required: false
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }

  // full_name - computed: true, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // function - computed: true, optional: false, required: false
  private _function = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }

  // inputs - computed: true, optional: false, required: false
  public get inputs() {
    return this.getListAttribute('inputs');
  }

  // lineage_context - computed: true, optional: false, required: false
  private _lineageContext = new DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference(this, "lineage_context");
  public get lineageContext() {
    return this._lineageContext;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // time_window - computed: true, optional: false, required: false
  private _timeWindow = new DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeaturesFeatures[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference {
    return new DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features databricks_feature_engineering_features}
*/
export class DataDatabricksFeatureEngineeringFeatures extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksFeatureEngineeringFeatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksFeatureEngineeringFeatures to import
  * @param importFromId The id of the existing DataDatabricksFeatureEngineeringFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksFeatureEngineeringFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_features databricks_feature_engineering_features} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksFeatureEngineeringFeaturesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksFeatureEngineeringFeaturesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_features',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.99.0',
        providerVersionConstraint: '1.99.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pageSize = config.pageSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // features - computed: true, optional: false, required: false
  private _features = new DataDatabricksFeatureEngineeringFeaturesFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktf.numberToTerraform(this._pageSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
