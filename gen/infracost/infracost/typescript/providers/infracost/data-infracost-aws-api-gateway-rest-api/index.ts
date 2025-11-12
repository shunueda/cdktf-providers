// https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_api_gateway_rest_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfracostAwsApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_api_gateway_rest_api#id DataInfracostAwsApiGatewayRestApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_api_gateway_rest_api#resources DataInfracostAwsApiGatewayRestApi#resources}
  */
  readonly resources: string[];
  /**
  * monthly_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_api_gateway_rest_api#monthly_requests DataInfracostAwsApiGatewayRestApi#monthly_requests}
  */
  readonly monthlyRequests?: DataInfracostAwsApiGatewayRestApiMonthlyRequests;
}
export interface DataInfracostAwsApiGatewayRestApiMonthlyRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_api_gateway_rest_api#value DataInfracostAwsApiGatewayRestApi#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsApiGatewayRestApiMonthlyRequestsToTerraform(struct?: DataInfracostAwsApiGatewayRestApiMonthlyRequestsOutputReference | DataInfracostAwsApiGatewayRestApiMonthlyRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsApiGatewayRestApiMonthlyRequestsToHclTerraform(struct?: DataInfracostAwsApiGatewayRestApiMonthlyRequestsOutputReference | DataInfracostAwsApiGatewayRestApiMonthlyRequests): any {
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

export class DataInfracostAwsApiGatewayRestApiMonthlyRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsApiGatewayRestApiMonthlyRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsApiGatewayRestApiMonthlyRequests | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_api_gateway_rest_api infracost_aws_api_gateway_rest_api}
*/
export class DataInfracostAwsApiGatewayRestApi extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infracost_aws_api_gateway_rest_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfracostAwsApiGatewayRestApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfracostAwsApiGatewayRestApi to import
  * @param importFromId The id of the existing DataInfracostAwsApiGatewayRestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_api_gateway_rest_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfracostAwsApiGatewayRestApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infracost_aws_api_gateway_rest_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_api_gateway_rest_api infracost_aws_api_gateway_rest_api} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfracostAwsApiGatewayRestApiConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfracostAwsApiGatewayRestApiConfig) {
    super(scope, id, {
      terraformResourceType: 'infracost_aws_api_gateway_rest_api',
      terraformGeneratorMetadata: {
        providerName: 'infracost',
        providerVersion: '0.0.9',
        providerVersionConstraint: '0.0.9'
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

  // monthly_requests - computed: false, optional: true, required: false
  private _monthlyRequests = new DataInfracostAwsApiGatewayRestApiMonthlyRequestsOutputReference(this, "monthly_requests");
  public get monthlyRequests() {
    return this._monthlyRequests;
  }
  public putMonthlyRequests(value: DataInfracostAwsApiGatewayRestApiMonthlyRequests) {
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
      monthly_requests: dataInfracostAwsApiGatewayRestApiMonthlyRequestsToTerraform(this._monthlyRequests.internalValue),
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
      monthly_requests: {
        value: dataInfracostAwsApiGatewayRestApiMonthlyRequestsToHclTerraform(this._monthlyRequests.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsApiGatewayRestApiMonthlyRequestsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
