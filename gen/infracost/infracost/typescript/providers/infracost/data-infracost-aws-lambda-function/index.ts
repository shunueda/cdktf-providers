// https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_lambda_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfracostAwsLambdaFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_lambda_function#id DataInfracostAwsLambdaFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_lambda_function#resources DataInfracostAwsLambdaFunction#resources}
  */
  readonly resources: string[];
  /**
  * average_request_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_lambda_function#average_request_duration DataInfracostAwsLambdaFunction#average_request_duration}
  */
  readonly averageRequestDuration?: DataInfracostAwsLambdaFunctionAverageRequestDuration;
  /**
  * monthly_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_lambda_function#monthly_requests DataInfracostAwsLambdaFunction#monthly_requests}
  */
  readonly monthlyRequests?: DataInfracostAwsLambdaFunctionMonthlyRequests;
}
export interface DataInfracostAwsLambdaFunctionAverageRequestDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_lambda_function#value DataInfracostAwsLambdaFunction#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsLambdaFunctionAverageRequestDurationToTerraform(struct?: DataInfracostAwsLambdaFunctionAverageRequestDurationOutputReference | DataInfracostAwsLambdaFunctionAverageRequestDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsLambdaFunctionAverageRequestDurationToHclTerraform(struct?: DataInfracostAwsLambdaFunctionAverageRequestDurationOutputReference | DataInfracostAwsLambdaFunctionAverageRequestDuration): any {
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

export class DataInfracostAwsLambdaFunctionAverageRequestDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsLambdaFunctionAverageRequestDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsLambdaFunctionAverageRequestDuration | undefined) {
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
export interface DataInfracostAwsLambdaFunctionMonthlyRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_lambda_function#value DataInfracostAwsLambdaFunction#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsLambdaFunctionMonthlyRequestsToTerraform(struct?: DataInfracostAwsLambdaFunctionMonthlyRequestsOutputReference | DataInfracostAwsLambdaFunctionMonthlyRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsLambdaFunctionMonthlyRequestsToHclTerraform(struct?: DataInfracostAwsLambdaFunctionMonthlyRequestsOutputReference | DataInfracostAwsLambdaFunctionMonthlyRequests): any {
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

export class DataInfracostAwsLambdaFunctionMonthlyRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsLambdaFunctionMonthlyRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsLambdaFunctionMonthlyRequests | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_lambda_function infracost_aws_lambda_function}
*/
export class DataInfracostAwsLambdaFunction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infracost_aws_lambda_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfracostAwsLambdaFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfracostAwsLambdaFunction to import
  * @param importFromId The id of the existing DataInfracostAwsLambdaFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_lambda_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfracostAwsLambdaFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infracost_aws_lambda_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_lambda_function infracost_aws_lambda_function} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfracostAwsLambdaFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfracostAwsLambdaFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'infracost_aws_lambda_function',
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
    this._averageRequestDuration.internalValue = config.averageRequestDuration;
    this._monthlyRequests.internalValue = config.monthlyRequests;
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

  // average_request_duration - computed: false, optional: true, required: false
  private _averageRequestDuration = new DataInfracostAwsLambdaFunctionAverageRequestDurationOutputReference(this, "average_request_duration");
  public get averageRequestDuration() {
    return this._averageRequestDuration;
  }
  public putAverageRequestDuration(value: DataInfracostAwsLambdaFunctionAverageRequestDuration) {
    this._averageRequestDuration.internalValue = value;
  }
  public resetAverageRequestDuration() {
    this._averageRequestDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageRequestDurationInput() {
    return this._averageRequestDuration.internalValue;
  }

  // monthly_requests - computed: false, optional: true, required: false
  private _monthlyRequests = new DataInfracostAwsLambdaFunctionMonthlyRequestsOutputReference(this, "monthly_requests");
  public get monthlyRequests() {
    return this._monthlyRequests;
  }
  public putMonthlyRequests(value: DataInfracostAwsLambdaFunctionMonthlyRequests) {
    this._monthlyRequests.internalValue = value;
  }
  public resetMonthlyRequests() {
    this._monthlyRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyRequestsInput() {
    return this._monthlyRequests.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
      average_request_duration: dataInfracostAwsLambdaFunctionAverageRequestDurationToTerraform(this._averageRequestDuration.internalValue),
      monthly_requests: dataInfracostAwsLambdaFunctionMonthlyRequestsToTerraform(this._monthlyRequests.internalValue),
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
      average_request_duration: {
        value: dataInfracostAwsLambdaFunctionAverageRequestDurationToHclTerraform(this._averageRequestDuration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsLambdaFunctionAverageRequestDurationList",
      },
      monthly_requests: {
        value: dataInfracostAwsLambdaFunctionMonthlyRequestsToHclTerraform(this._monthlyRequests.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsLambdaFunctionMonthlyRequestsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
