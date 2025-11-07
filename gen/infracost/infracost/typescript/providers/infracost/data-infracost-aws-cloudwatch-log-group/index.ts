// https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfracostAwsCloudwatchLogGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group#id DataInfracostAwsCloudwatchLogGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group#resources DataInfracostAwsCloudwatchLogGroup#resources}
  */
  readonly resources: string[];
  /**
  * monthly_gb_data_ingestion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group#monthly_gb_data_ingestion DataInfracostAwsCloudwatchLogGroup#monthly_gb_data_ingestion}
  */
  readonly monthlyGbDataIngestion?: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestion;
  /**
  * monthly_gb_data_scanned block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group#monthly_gb_data_scanned DataInfracostAwsCloudwatchLogGroup#monthly_gb_data_scanned}
  */
  readonly monthlyGbDataScanned?: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScanned;
  /**
  * monthly_gb_data_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group#monthly_gb_data_storage DataInfracostAwsCloudwatchLogGroup#monthly_gb_data_storage}
  */
  readonly monthlyGbDataStorage?: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorage;
}
export interface DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group#value DataInfracostAwsCloudwatchLogGroup#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestionToTerraform(struct?: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestionOutputReference | DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestionToHclTerraform(struct?: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestionOutputReference | DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScanned {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group#value DataInfracostAwsCloudwatchLogGroup#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsCloudwatchLogGroupMonthlyGbDataScannedToTerraform(struct?: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScannedOutputReference | DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScanned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsCloudwatchLogGroupMonthlyGbDataScannedToHclTerraform(struct?: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScannedOutputReference | DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScanned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScannedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScanned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScanned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group#value DataInfracostAwsCloudwatchLogGroup#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorageToTerraform(struct?: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorageOutputReference | DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorageToHclTerraform(struct?: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorageOutputReference | DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group infracost_aws_cloudwatch_log_group}
*/
export class DataInfracostAwsCloudwatchLogGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infracost_aws_cloudwatch_log_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfracostAwsCloudwatchLogGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfracostAwsCloudwatchLogGroup to import
  * @param importFromId The id of the existing DataInfracostAwsCloudwatchLogGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfracostAwsCloudwatchLogGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infracost_aws_cloudwatch_log_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_cloudwatch_log_group infracost_aws_cloudwatch_log_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfracostAwsCloudwatchLogGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfracostAwsCloudwatchLogGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'infracost_aws_cloudwatch_log_group',
      terraformGeneratorMetadata: {
        providerName: 'infracost',
        providerVersion: '0.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._resources = config.resources;
    this._monthlyGbDataIngestion.internalValue = config.monthlyGbDataIngestion;
    this._monthlyGbDataScanned.internalValue = config.monthlyGbDataScanned;
    this._monthlyGbDataStorage.internalValue = config.monthlyGbDataStorage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // monthly_gb_data_ingestion - computed: false, optional: true, required: false
  private _monthlyGbDataIngestion = new DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestionOutputReference(this, "monthly_gb_data_ingestion");
  public get monthlyGbDataIngestion() {
    return this._monthlyGbDataIngestion;
  }
  public putMonthlyGbDataIngestion(value: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestion) {
    this._monthlyGbDataIngestion.internalValue = value;
  }
  public resetMonthlyGbDataIngestion() {
    this._monthlyGbDataIngestion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyGbDataIngestionInput() {
    return this._monthlyGbDataIngestion.internalValue;
  }

  // monthly_gb_data_scanned - computed: false, optional: true, required: false
  private _monthlyGbDataScanned = new DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScannedOutputReference(this, "monthly_gb_data_scanned");
  public get monthlyGbDataScanned() {
    return this._monthlyGbDataScanned;
  }
  public putMonthlyGbDataScanned(value: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScanned) {
    this._monthlyGbDataScanned.internalValue = value;
  }
  public resetMonthlyGbDataScanned() {
    this._monthlyGbDataScanned.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyGbDataScannedInput() {
    return this._monthlyGbDataScanned.internalValue;
  }

  // monthly_gb_data_storage - computed: false, optional: true, required: false
  private _monthlyGbDataStorage = new DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorageOutputReference(this, "monthly_gb_data_storage");
  public get monthlyGbDataStorage() {
    return this._monthlyGbDataStorage;
  }
  public putMonthlyGbDataStorage(value: DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorage) {
    this._monthlyGbDataStorage.internalValue = value;
  }
  public resetMonthlyGbDataStorage() {
    this._monthlyGbDataStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyGbDataStorageInput() {
    return this._monthlyGbDataStorage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
      monthly_gb_data_ingestion: dataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestionToTerraform(this._monthlyGbDataIngestion.internalValue),
      monthly_gb_data_scanned: dataInfracostAwsCloudwatchLogGroupMonthlyGbDataScannedToTerraform(this._monthlyGbDataScanned.internalValue),
      monthly_gb_data_storage: dataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorageToTerraform(this._monthlyGbDataStorage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      monthly_gb_data_ingestion: {
        value: dataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestionToHclTerraform(this._monthlyGbDataIngestion.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsCloudwatchLogGroupMonthlyGbDataIngestionList",
      },
      monthly_gb_data_scanned: {
        value: dataInfracostAwsCloudwatchLogGroupMonthlyGbDataScannedToHclTerraform(this._monthlyGbDataScanned.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsCloudwatchLogGroupMonthlyGbDataScannedList",
      },
      monthly_gb_data_storage: {
        value: dataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorageToHclTerraform(this._monthlyGbDataStorage.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsCloudwatchLogGroupMonthlyGbDataStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
