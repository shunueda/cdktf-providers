// https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSchemasQueryTestDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#alias DataSchemasQueryTestData#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#channel DataSchemasQueryTestData#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#csv_content DataSchemasQueryTestData#csv_content}
  */
  readonly csvContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#csv_file_name DataSchemasQueryTestData#csv_file_name}
  */
  readonly csvFileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#csv_wave DataSchemasQueryTestData#csv_wave}
  */
  readonly csvWave?: DataSchemasQueryTestDataCsvWave[] | cdktf.IResolvable;
  /**
  * Drop percentage (the chance we will lose a point 0-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#drop_percent DataSchemasQueryTestData#drop_percent}
  */
  readonly dropPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#error_type DataSchemasQueryTestData#error_type}
  */
  readonly errorType?: string;
  /**
  * true if query is disabled (ie should not be returned to the dashboard)
  * Note this does not always imply that the query should not be executed since
  * the results from a hidden query may be used as the input to other queries (SSE etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#hide DataSchemasQueryTestData#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#labels DataSchemasQueryTestData#labels}
  */
  readonly labels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#level_column DataSchemasQueryTestData#level_column}
  */
  readonly levelColumn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#lines DataSchemasQueryTestData#lines}
  */
  readonly lines?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#nodes DataSchemasQueryTestData#nodes}
  */
  readonly nodes?: DataSchemasQueryTestDataNodes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#pulse_wave DataSchemasQueryTestData#pulse_wave}
  */
  readonly pulseWave?: DataSchemasQueryTestDataPulseWave;
  /**
  * Specify the query flavor
  * TODO make this required and give it a default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#query_type DataSchemasQueryTestData#query_type}
  */
  readonly queryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#raw_frame_content DataSchemasQueryTestData#raw_frame_content}
  */
  readonly rawFrameContent?: string;
  /**
  * A unique identifier for the query within the list of targets.
  * In server side expressions, the refId is used as a variable name to identify results.
  * By default, the UI will assign A->Z; however setting meaningful names may be useful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#ref_id DataSchemasQueryTestData#ref_id}
  */
  readonly refId: string;
  /**
  *  Defaults to "random_walk".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#scenario_id DataSchemasQueryTestData#scenario_id}
  */
  readonly scenarioId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#series_count DataSchemasQueryTestData#series_count}
  */
  readonly seriesCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#sim DataSchemasQueryTestData#sim}
  */
  readonly sim?: DataSchemasQueryTestDataSim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#span_count DataSchemasQueryTestData#span_count}
  */
  readonly spanCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#stream DataSchemasQueryTestData#stream}
  */
  readonly stream?: DataSchemasQueryTestDataStream;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#string_input DataSchemasQueryTestData#string_input}
  */
  readonly stringInput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#usa DataSchemasQueryTestData#usa}
  */
  readonly usa?: DataSchemasQueryTestDataUsa;
}
export interface DataSchemasQueryTestDataCsvWave {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#labels DataSchemasQueryTestData#labels}
  */
  readonly labels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#name DataSchemasQueryTestData#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#time_step DataSchemasQueryTestData#time_step}
  */
  readonly timeStep?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#values_csv DataSchemasQueryTestData#values_csv}
  */
  readonly valuesCsv?: string;
}

export function dataSchemasQueryTestDataCsvWaveToTerraform(struct?: DataSchemasQueryTestDataCsvWave | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.stringToTerraform(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    time_step: cdktf.numberToTerraform(struct!.timeStep),
    values_csv: cdktf.stringToTerraform(struct!.valuesCsv),
  }
}


export function dataSchemasQueryTestDataCsvWaveToHclTerraform(struct?: DataSchemasQueryTestDataCsvWave | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.stringToHclTerraform(struct!.labels),
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
    time_step: {
      value: cdktf.numberToHclTerraform(struct!.timeStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    values_csv: {
      value: cdktf.stringToHclTerraform(struct!.valuesCsv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryTestDataCsvWaveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasQueryTestDataCsvWave | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStep = this._timeStep;
    }
    if (this._valuesCsv !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesCsv = this._valuesCsv;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryTestDataCsvWave | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._timeStep = undefined;
      this._valuesCsv = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._name = value.name;
      this._timeStep = value.timeStep;
      this._valuesCsv = value.valuesCsv;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // time_step - computed: false, optional: true, required: false
  private _timeStep?: number; 
  public get timeStep() {
    return this.getNumberAttribute('time_step');
  }
  public set timeStep(value: number) {
    this._timeStep = value;
  }
  public resetTimeStep() {
    this._timeStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStepInput() {
    return this._timeStep;
  }

  // values_csv - computed: false, optional: true, required: false
  private _valuesCsv?: string; 
  public get valuesCsv() {
    return this.getStringAttribute('values_csv');
  }
  public set valuesCsv(value: string) {
    this._valuesCsv = value;
  }
  public resetValuesCsv() {
    this._valuesCsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesCsvInput() {
    return this._valuesCsv;
  }
}

export class DataSchemasQueryTestDataCsvWaveList extends cdktf.ComplexList {
  public internalValue? : DataSchemasQueryTestDataCsvWave[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasQueryTestDataCsvWaveOutputReference {
    return new DataSchemasQueryTestDataCsvWaveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasQueryTestDataNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#count DataSchemasQueryTestData#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#type DataSchemasQueryTestData#type}
  */
  readonly type?: string;
}

export function dataSchemasQueryTestDataNodesToTerraform(struct?: DataSchemasQueryTestDataNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryTestDataNodesToHclTerraform(struct?: DataSchemasQueryTestDataNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryTestDataNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryTestDataNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryTestDataNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataSchemasQueryTestDataPulseWave {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#off_count DataSchemasQueryTestData#off_count}
  */
  readonly offCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#off_value DataSchemasQueryTestData#off_value}
  */
  readonly offValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#on_count DataSchemasQueryTestData#on_count}
  */
  readonly onCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#on_value DataSchemasQueryTestData#on_value}
  */
  readonly onValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#time_step DataSchemasQueryTestData#time_step}
  */
  readonly timeStep?: number;
}

export function dataSchemasQueryTestDataPulseWaveToTerraform(struct?: DataSchemasQueryTestDataPulseWave | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    off_count: cdktf.numberToTerraform(struct!.offCount),
    off_value: cdktf.numberToTerraform(struct!.offValue),
    on_count: cdktf.numberToTerraform(struct!.onCount),
    on_value: cdktf.numberToTerraform(struct!.onValue),
    time_step: cdktf.numberToTerraform(struct!.timeStep),
  }
}


export function dataSchemasQueryTestDataPulseWaveToHclTerraform(struct?: DataSchemasQueryTestDataPulseWave | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    off_count: {
      value: cdktf.numberToHclTerraform(struct!.offCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    off_value: {
      value: cdktf.numberToHclTerraform(struct!.offValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_count: {
      value: cdktf.numberToHclTerraform(struct!.onCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_value: {
      value: cdktf.numberToHclTerraform(struct!.onValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_step: {
      value: cdktf.numberToHclTerraform(struct!.timeStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryTestDataPulseWaveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryTestDataPulseWave | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.offCount = this._offCount;
    }
    if (this._offValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offValue = this._offValue;
    }
    if (this._onCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.onCount = this._onCount;
    }
    if (this._onValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onValue = this._onValue;
    }
    if (this._timeStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStep = this._timeStep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryTestDataPulseWave | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offCount = undefined;
      this._offValue = undefined;
      this._onCount = undefined;
      this._onValue = undefined;
      this._timeStep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offCount = value.offCount;
      this._offValue = value.offValue;
      this._onCount = value.onCount;
      this._onValue = value.onValue;
      this._timeStep = value.timeStep;
    }
  }

  // off_count - computed: true, optional: true, required: false
  private _offCount?: number; 
  public get offCount() {
    return this.getNumberAttribute('off_count');
  }
  public set offCount(value: number) {
    this._offCount = value;
  }
  public resetOffCount() {
    this._offCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offCountInput() {
    return this._offCount;
  }

  // off_value - computed: true, optional: true, required: false
  private _offValue?: number; 
  public get offValue() {
    return this.getNumberAttribute('off_value');
  }
  public set offValue(value: number) {
    this._offValue = value;
  }
  public resetOffValue() {
    this._offValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offValueInput() {
    return this._offValue;
  }

  // on_count - computed: true, optional: true, required: false
  private _onCount?: number; 
  public get onCount() {
    return this.getNumberAttribute('on_count');
  }
  public set onCount(value: number) {
    this._onCount = value;
  }
  public resetOnCount() {
    this._onCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCountInput() {
    return this._onCount;
  }

  // on_value - computed: true, optional: true, required: false
  private _onValue?: number; 
  public get onValue() {
    return this.getNumberAttribute('on_value');
  }
  public set onValue(value: number) {
    this._onValue = value;
  }
  public resetOnValue() {
    this._onValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onValueInput() {
    return this._onValue;
  }

  // time_step - computed: true, optional: true, required: false
  private _timeStep?: number; 
  public get timeStep() {
    return this.getNumberAttribute('time_step');
  }
  public set timeStep(value: number) {
    this._timeStep = value;
  }
  public resetTimeStep() {
    this._timeStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStepInput() {
    return this._timeStep;
  }
}
export interface DataSchemasQueryTestDataSimConfig {
}

export function dataSchemasQueryTestDataSimConfigToTerraform(struct?: DataSchemasQueryTestDataSimConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasQueryTestDataSimConfigToHclTerraform(struct?: DataSchemasQueryTestDataSimConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasQueryTestDataSimConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryTestDataSimConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryTestDataSimConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataSchemasQueryTestDataSimKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#tick DataSchemasQueryTestData#tick}
  */
  readonly tick: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#type DataSchemasQueryTestData#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#uid DataSchemasQueryTestData#uid}
  */
  readonly uid?: string;
}

export function dataSchemasQueryTestDataSimKeyToTerraform(struct?: DataSchemasQueryTestDataSimKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tick: cdktf.numberToTerraform(struct!.tick),
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasQueryTestDataSimKeyToHclTerraform(struct?: DataSchemasQueryTestDataSimKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tick: {
      value: cdktf.numberToHclTerraform(struct!.tick),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryTestDataSimKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryTestDataSimKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tick !== undefined) {
      hasAnyValues = true;
      internalValueResult.tick = this._tick;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryTestDataSimKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tick = undefined;
      this._type = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tick = value.tick;
      this._type = value.type;
      this._uid = value.uid;
    }
  }

  // tick - computed: true, optional: false, required: true
  private _tick?: number; 
  public get tick() {
    return this.getNumberAttribute('tick');
  }
  public set tick(value: number) {
    this._tick = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tickInput() {
    return this._tick;
  }

  // type - computed: true, optional: false, required: true
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

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataSchemasQueryTestDataSim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#config DataSchemasQueryTestData#config}
  */
  readonly config?: DataSchemasQueryTestDataSimConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#key DataSchemasQueryTestData#key}
  */
  readonly key?: DataSchemasQueryTestDataSimKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#last DataSchemasQueryTestData#last}
  */
  readonly last?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#stream DataSchemasQueryTestData#stream}
  */
  readonly stream?: boolean | cdktf.IResolvable;
}

export function dataSchemasQueryTestDataSimToTerraform(struct?: DataSchemasQueryTestDataSim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataSchemasQueryTestDataSimConfigToTerraform(struct!.config),
    key: dataSchemasQueryTestDataSimKeyToTerraform(struct!.key),
    last: cdktf.booleanToTerraform(struct!.last),
    stream: cdktf.booleanToTerraform(struct!.stream),
  }
}


export function dataSchemasQueryTestDataSimToHclTerraform(struct?: DataSchemasQueryTestDataSim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataSchemasQueryTestDataSimConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryTestDataSimConfig",
    },
    key: {
      value: dataSchemasQueryTestDataSimKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryTestDataSimKey",
    },
    last: {
      value: cdktf.booleanToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stream: {
      value: cdktf.booleanToHclTerraform(struct!.stream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryTestDataSimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryTestDataSim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._stream !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryTestDataSim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._key.internalValue = undefined;
      this._last = undefined;
      this._stream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._key.internalValue = value.key;
      this._last = value.last;
      this._stream = value.stream;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new DataSchemasQueryTestDataSimConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataSchemasQueryTestDataSimConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // key - computed: true, optional: true, required: false
  private _key = new DataSchemasQueryTestDataSimKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: DataSchemasQueryTestDataSimKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // last - computed: true, optional: true, required: false
  private _last?: boolean | cdktf.IResolvable; 
  public get last() {
    return this.getBooleanAttribute('last');
  }
  public set last(value: boolean | cdktf.IResolvable) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // stream - computed: true, optional: true, required: false
  private _stream?: boolean | cdktf.IResolvable; 
  public get stream() {
    return this.getBooleanAttribute('stream');
  }
  public set stream(value: boolean | cdktf.IResolvable) {
    this._stream = value;
  }
  public resetStream() {
    this._stream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream;
  }
}
export interface DataSchemasQueryTestDataStream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#bands DataSchemasQueryTestData#bands}
  */
  readonly bands?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#noise DataSchemasQueryTestData#noise}
  */
  readonly noise: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#speed DataSchemasQueryTestData#speed}
  */
  readonly speed: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#spread DataSchemasQueryTestData#spread}
  */
  readonly spread: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#type DataSchemasQueryTestData#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#url DataSchemasQueryTestData#url}
  */
  readonly url?: string;
}

export function dataSchemasQueryTestDataStreamToTerraform(struct?: DataSchemasQueryTestDataStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bands: cdktf.numberToTerraform(struct!.bands),
    noise: cdktf.numberToTerraform(struct!.noise),
    speed: cdktf.numberToTerraform(struct!.speed),
    spread: cdktf.numberToTerraform(struct!.spread),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataSchemasQueryTestDataStreamToHclTerraform(struct?: DataSchemasQueryTestDataStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bands: {
      value: cdktf.numberToHclTerraform(struct!.bands),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noise: {
      value: cdktf.numberToHclTerraform(struct!.noise),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speed: {
      value: cdktf.numberToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spread: {
      value: cdktf.numberToHclTerraform(struct!.spread),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryTestDataStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryTestDataStream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bands !== undefined) {
      hasAnyValues = true;
      internalValueResult.bands = this._bands;
    }
    if (this._noise !== undefined) {
      hasAnyValues = true;
      internalValueResult.noise = this._noise;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._spread !== undefined) {
      hasAnyValues = true;
      internalValueResult.spread = this._spread;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryTestDataStream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bands = undefined;
      this._noise = undefined;
      this._speed = undefined;
      this._spread = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bands = value.bands;
      this._noise = value.noise;
      this._speed = value.speed;
      this._spread = value.spread;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // bands - computed: true, optional: true, required: false
  private _bands?: number; 
  public get bands() {
    return this.getNumberAttribute('bands');
  }
  public set bands(value: number) {
    this._bands = value;
  }
  public resetBands() {
    this._bands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandsInput() {
    return this._bands;
  }

  // noise - computed: true, optional: false, required: true
  private _noise?: number; 
  public get noise() {
    return this.getNumberAttribute('noise');
  }
  public set noise(value: number) {
    this._noise = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noiseInput() {
    return this._noise;
  }

  // speed - computed: true, optional: false, required: true
  private _speed?: number; 
  public get speed() {
    return this.getNumberAttribute('speed');
  }
  public set speed(value: number) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // spread - computed: true, optional: false, required: true
  private _spread?: number; 
  public get spread() {
    return this.getNumberAttribute('spread');
  }
  public set spread(value: number) {
    this._spread = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spreadInput() {
    return this._spread;
  }

  // type - computed: true, optional: false, required: true
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

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataSchemasQueryTestDataUsa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#fields DataSchemasQueryTestData#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#mode DataSchemasQueryTestData#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#period DataSchemasQueryTestData#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#states DataSchemasQueryTestData#states}
  */
  readonly states?: string[];
}

export function dataSchemasQueryTestDataUsaToTerraform(struct?: DataSchemasQueryTestDataUsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    mode: cdktf.stringToTerraform(struct!.mode),
    period: cdktf.stringToTerraform(struct!.period),
    states: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.states),
  }
}


export function dataSchemasQueryTestDataUsaToHclTerraform(struct?: DataSchemasQueryTestDataUsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    states: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.states),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryTestDataUsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryTestDataUsa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._states !== undefined) {
      hasAnyValues = true;
      internalValueResult.states = this._states;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryTestDataUsa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
      this._mode = undefined;
      this._period = undefined;
      this._states = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
      this._mode = value.mode;
      this._period = value.period;
      this._states = value.states;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // period - computed: true, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // states - computed: true, optional: true, required: false
  private _states?: string[]; 
  public get states() {
    return this.getListAttribute('states');
  }
  public set states(value: string[]) {
    this._states = value;
  }
  public resetStates() {
    this._states = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statesInput() {
    return this._states;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data schemas_query_test_data}
*/
export class DataSchemasQueryTestData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemas_query_test_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSchemasQueryTestData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSchemasQueryTestData to import
  * @param importFromId The id of the existing DataSchemasQueryTestData that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSchemasQueryTestData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemas_query_test_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_test_data schemas_query_test_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSchemasQueryTestDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataSchemasQueryTestDataConfig) {
    super(scope, id, {
      terraformResourceType: 'schemas_query_test_data',
      terraformGeneratorMetadata: {
        providerName: 'schemas',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._channel = config.channel;
    this._csvContent = config.csvContent;
    this._csvFileName = config.csvFileName;
    this._csvWave.internalValue = config.csvWave;
    this._dropPercent = config.dropPercent;
    this._errorType = config.errorType;
    this._hide = config.hide;
    this._labels = config.labels;
    this._levelColumn = config.levelColumn;
    this._lines = config.lines;
    this._nodes.internalValue = config.nodes;
    this._pulseWave.internalValue = config.pulseWave;
    this._queryType = config.queryType;
    this._rawFrameContent = config.rawFrameContent;
    this._refId = config.refId;
    this._scenarioId = config.scenarioId;
    this._seriesCount = config.seriesCount;
    this._sim.internalValue = config.sim;
    this._spanCount = config.spanCount;
    this._stream.internalValue = config.stream;
    this._stringInput = config.stringInput;
    this._usa.internalValue = config.usa;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // csv_content - computed: false, optional: true, required: false
  private _csvContent?: string; 
  public get csvContent() {
    return this.getStringAttribute('csv_content');
  }
  public set csvContent(value: string) {
    this._csvContent = value;
  }
  public resetCsvContent() {
    this._csvContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvContentInput() {
    return this._csvContent;
  }

  // csv_file_name - computed: false, optional: true, required: false
  private _csvFileName?: string; 
  public get csvFileName() {
    return this.getStringAttribute('csv_file_name');
  }
  public set csvFileName(value: string) {
    this._csvFileName = value;
  }
  public resetCsvFileName() {
    this._csvFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvFileNameInput() {
    return this._csvFileName;
  }

  // csv_wave - computed: false, optional: true, required: false
  private _csvWave = new DataSchemasQueryTestDataCsvWaveList(this, "csv_wave", false);
  public get csvWave() {
    return this._csvWave;
  }
  public putCsvWave(value: DataSchemasQueryTestDataCsvWave[] | cdktf.IResolvable) {
    this._csvWave.internalValue = value;
  }
  public resetCsvWave() {
    this._csvWave.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvWaveInput() {
    return this._csvWave.internalValue;
  }

  // drop_percent - computed: false, optional: true, required: false
  private _dropPercent?: number; 
  public get dropPercent() {
    return this.getNumberAttribute('drop_percent');
  }
  public set dropPercent(value: number) {
    this._dropPercent = value;
  }
  public resetDropPercent() {
    this._dropPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropPercentInput() {
    return this._dropPercent;
  }

  // error_type - computed: false, optional: true, required: false
  private _errorType?: string; 
  public get errorType() {
    return this.getStringAttribute('error_type');
  }
  public set errorType(value: string) {
    this._errorType = value;
  }
  public resetErrorType() {
    this._errorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTypeInput() {
    return this._errorType;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: boolean | cdktf.IResolvable; 
  public get hide() {
    return this.getBooleanAttribute('hide');
  }
  public set hide(value: boolean | cdktf.IResolvable) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // level_column - computed: false, optional: true, required: false
  private _levelColumn?: boolean | cdktf.IResolvable; 
  public get levelColumn() {
    return this.getBooleanAttribute('level_column');
  }
  public set levelColumn(value: boolean | cdktf.IResolvable) {
    this._levelColumn = value;
  }
  public resetLevelColumn() {
    this._levelColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelColumnInput() {
    return this._levelColumn;
  }

  // lines - computed: false, optional: true, required: false
  private _lines?: number; 
  public get lines() {
    return this.getNumberAttribute('lines');
  }
  public set lines(value: number) {
    this._lines = value;
  }
  public resetLines() {
    this._lines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linesInput() {
    return this._lines;
  }

  // nodes - computed: true, optional: true, required: false
  private _nodes = new DataSchemasQueryTestDataNodesOutputReference(this, "nodes");
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataSchemasQueryTestDataNodes) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // pulse_wave - computed: true, optional: true, required: false
  private _pulseWave = new DataSchemasQueryTestDataPulseWaveOutputReference(this, "pulse_wave");
  public get pulseWave() {
    return this._pulseWave;
  }
  public putPulseWave(value: DataSchemasQueryTestDataPulseWave) {
    this._pulseWave.internalValue = value;
  }
  public resetPulseWave() {
    this._pulseWave.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pulseWaveInput() {
    return this._pulseWave.internalValue;
  }

  // query_type - computed: false, optional: true, required: false
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // raw_frame_content - computed: false, optional: true, required: false
  private _rawFrameContent?: string; 
  public get rawFrameContent() {
    return this.getStringAttribute('raw_frame_content');
  }
  public set rawFrameContent(value: string) {
    this._rawFrameContent = value;
  }
  public resetRawFrameContent() {
    this._rawFrameContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFrameContentInput() {
    return this._rawFrameContent;
  }

  // ref_id - computed: false, optional: false, required: true
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // rendered_json - computed: true, optional: false, required: false
  public get renderedJson() {
    return this.getStringAttribute('rendered_json');
  }

  // scenario_id - computed: true, optional: true, required: false
  private _scenarioId?: string; 
  public get scenarioId() {
    return this.getStringAttribute('scenario_id');
  }
  public set scenarioId(value: string) {
    this._scenarioId = value;
  }
  public resetScenarioId() {
    this._scenarioId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scenarioIdInput() {
    return this._scenarioId;
  }

  // series_count - computed: false, optional: true, required: false
  private _seriesCount?: number; 
  public get seriesCount() {
    return this.getNumberAttribute('series_count');
  }
  public set seriesCount(value: number) {
    this._seriesCount = value;
  }
  public resetSeriesCount() {
    this._seriesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesCountInput() {
    return this._seriesCount;
  }

  // sim - computed: true, optional: true, required: false
  private _sim = new DataSchemasQueryTestDataSimOutputReference(this, "sim");
  public get sim() {
    return this._sim;
  }
  public putSim(value: DataSchemasQueryTestDataSim) {
    this._sim.internalValue = value;
  }
  public resetSim() {
    this._sim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simInput() {
    return this._sim.internalValue;
  }

  // span_count - computed: false, optional: true, required: false
  private _spanCount?: number; 
  public get spanCount() {
    return this.getNumberAttribute('span_count');
  }
  public set spanCount(value: number) {
    this._spanCount = value;
  }
  public resetSpanCount() {
    this._spanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanCountInput() {
    return this._spanCount;
  }

  // stream - computed: true, optional: true, required: false
  private _stream = new DataSchemasQueryTestDataStreamOutputReference(this, "stream");
  public get stream() {
    return this._stream;
  }
  public putStream(value: DataSchemasQueryTestDataStream) {
    this._stream.internalValue = value;
  }
  public resetStream() {
    this._stream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream.internalValue;
  }

  // string_input - computed: false, optional: true, required: false
  private _stringInput?: string; 
  public get stringInput() {
    return this.getStringAttribute('string_input');
  }
  public set stringInput(value: string) {
    this._stringInput = value;
  }
  public resetStringInput() {
    this._stringInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInputInput() {
    return this._stringInput;
  }

  // usa - computed: true, optional: true, required: false
  private _usa = new DataSchemasQueryTestDataUsaOutputReference(this, "usa");
  public get usa() {
    return this._usa;
  }
  public putUsa(value: DataSchemasQueryTestDataUsa) {
    this._usa.internalValue = value;
  }
  public resetUsa() {
    this._usa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usaInput() {
    return this._usa.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      channel: cdktf.stringToTerraform(this._channel),
      csv_content: cdktf.stringToTerraform(this._csvContent),
      csv_file_name: cdktf.stringToTerraform(this._csvFileName),
      csv_wave: cdktf.listMapper(dataSchemasQueryTestDataCsvWaveToTerraform, false)(this._csvWave.internalValue),
      drop_percent: cdktf.numberToTerraform(this._dropPercent),
      error_type: cdktf.stringToTerraform(this._errorType),
      hide: cdktf.booleanToTerraform(this._hide),
      labels: cdktf.stringToTerraform(this._labels),
      level_column: cdktf.booleanToTerraform(this._levelColumn),
      lines: cdktf.numberToTerraform(this._lines),
      nodes: dataSchemasQueryTestDataNodesToTerraform(this._nodes.internalValue),
      pulse_wave: dataSchemasQueryTestDataPulseWaveToTerraform(this._pulseWave.internalValue),
      query_type: cdktf.stringToTerraform(this._queryType),
      raw_frame_content: cdktf.stringToTerraform(this._rawFrameContent),
      ref_id: cdktf.stringToTerraform(this._refId),
      scenario_id: cdktf.stringToTerraform(this._scenarioId),
      series_count: cdktf.numberToTerraform(this._seriesCount),
      sim: dataSchemasQueryTestDataSimToTerraform(this._sim.internalValue),
      span_count: cdktf.numberToTerraform(this._spanCount),
      stream: dataSchemasQueryTestDataStreamToTerraform(this._stream.internalValue),
      string_input: cdktf.stringToTerraform(this._stringInput),
      usa: dataSchemasQueryTestDataUsaToTerraform(this._usa.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_content: {
        value: cdktf.stringToHclTerraform(this._csvContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_file_name: {
        value: cdktf.stringToHclTerraform(this._csvFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_wave: {
        value: cdktf.listMapperHcl(dataSchemasQueryTestDataCsvWaveToHclTerraform, false)(this._csvWave.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasQueryTestDataCsvWaveList",
      },
      drop_percent: {
        value: cdktf.numberToHclTerraform(this._dropPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_type: {
        value: cdktf.stringToHclTerraform(this._errorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide: {
        value: cdktf.booleanToHclTerraform(this._hide),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.stringToHclTerraform(this._labels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level_column: {
        value: cdktf.booleanToHclTerraform(this._levelColumn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lines: {
        value: cdktf.numberToHclTerraform(this._lines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nodes: {
        value: dataSchemasQueryTestDataNodesToHclTerraform(this._nodes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasQueryTestDataNodes",
      },
      pulse_wave: {
        value: dataSchemasQueryTestDataPulseWaveToHclTerraform(this._pulseWave.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasQueryTestDataPulseWave",
      },
      query_type: {
        value: cdktf.stringToHclTerraform(this._queryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raw_frame_content: {
        value: cdktf.stringToHclTerraform(this._rawFrameContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref_id: {
        value: cdktf.stringToHclTerraform(this._refId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scenario_id: {
        value: cdktf.stringToHclTerraform(this._scenarioId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      series_count: {
        value: cdktf.numberToHclTerraform(this._seriesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sim: {
        value: dataSchemasQueryTestDataSimToHclTerraform(this._sim.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasQueryTestDataSim",
      },
      span_count: {
        value: cdktf.numberToHclTerraform(this._spanCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stream: {
        value: dataSchemasQueryTestDataStreamToHclTerraform(this._stream.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasQueryTestDataStream",
      },
      string_input: {
        value: cdktf.stringToHclTerraform(this._stringInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usa: {
        value: dataSchemasQueryTestDataUsaToHclTerraform(this._usa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasQueryTestDataUsa",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
