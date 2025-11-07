// https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfracostAwsApigatewayv2ApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#id DataInfracostAwsApigatewayv2Api#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#resources DataInfracostAwsApigatewayv2Api#resources}
  */
  readonly resources: string[];
  /**
  * average_message_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#average_message_size DataInfracostAwsApigatewayv2Api#average_message_size}
  */
  readonly averageMessageSize?: DataInfracostAwsApigatewayv2ApiAverageMessageSize;
  /**
  * monthly_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#monthly_messages DataInfracostAwsApigatewayv2Api#monthly_messages}
  */
  readonly monthlyMessages?: DataInfracostAwsApigatewayv2ApiMonthlyMessages;
  /**
  * monthly_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#monthly_requests DataInfracostAwsApigatewayv2Api#monthly_requests}
  */
  readonly monthlyRequests?: DataInfracostAwsApigatewayv2ApiMonthlyRequests;
  /**
  * request_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#request_size DataInfracostAwsApigatewayv2Api#request_size}
  */
  readonly requestSize?: DataInfracostAwsApigatewayv2ApiRequestSize;
}
export interface DataInfracostAwsApigatewayv2ApiAverageMessageSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#value DataInfracostAwsApigatewayv2Api#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsApigatewayv2ApiAverageMessageSizeToTerraform(struct?: DataInfracostAwsApigatewayv2ApiAverageMessageSizeOutputReference | DataInfracostAwsApigatewayv2ApiAverageMessageSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsApigatewayv2ApiAverageMessageSizeToHclTerraform(struct?: DataInfracostAwsApigatewayv2ApiAverageMessageSizeOutputReference | DataInfracostAwsApigatewayv2ApiAverageMessageSize): any {
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

export class DataInfracostAwsApigatewayv2ApiAverageMessageSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsApigatewayv2ApiAverageMessageSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsApigatewayv2ApiAverageMessageSize | undefined) {
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
export interface DataInfracostAwsApigatewayv2ApiMonthlyMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#value DataInfracostAwsApigatewayv2Api#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsApigatewayv2ApiMonthlyMessagesToTerraform(struct?: DataInfracostAwsApigatewayv2ApiMonthlyMessagesOutputReference | DataInfracostAwsApigatewayv2ApiMonthlyMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsApigatewayv2ApiMonthlyMessagesToHclTerraform(struct?: DataInfracostAwsApigatewayv2ApiMonthlyMessagesOutputReference | DataInfracostAwsApigatewayv2ApiMonthlyMessages): any {
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

export class DataInfracostAwsApigatewayv2ApiMonthlyMessagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsApigatewayv2ApiMonthlyMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsApigatewayv2ApiMonthlyMessages | undefined) {
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
export interface DataInfracostAwsApigatewayv2ApiMonthlyRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#value DataInfracostAwsApigatewayv2Api#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsApigatewayv2ApiMonthlyRequestsToTerraform(struct?: DataInfracostAwsApigatewayv2ApiMonthlyRequestsOutputReference | DataInfracostAwsApigatewayv2ApiMonthlyRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsApigatewayv2ApiMonthlyRequestsToHclTerraform(struct?: DataInfracostAwsApigatewayv2ApiMonthlyRequestsOutputReference | DataInfracostAwsApigatewayv2ApiMonthlyRequests): any {
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

export class DataInfracostAwsApigatewayv2ApiMonthlyRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsApigatewayv2ApiMonthlyRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsApigatewayv2ApiMonthlyRequests | undefined) {
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
export interface DataInfracostAwsApigatewayv2ApiRequestSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#value DataInfracostAwsApigatewayv2Api#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsApigatewayv2ApiRequestSizeToTerraform(struct?: DataInfracostAwsApigatewayv2ApiRequestSizeOutputReference | DataInfracostAwsApigatewayv2ApiRequestSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsApigatewayv2ApiRequestSizeToHclTerraform(struct?: DataInfracostAwsApigatewayv2ApiRequestSizeOutputReference | DataInfracostAwsApigatewayv2ApiRequestSize): any {
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

export class DataInfracostAwsApigatewayv2ApiRequestSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsApigatewayv2ApiRequestSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsApigatewayv2ApiRequestSize | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api infracost_aws_apigatewayv2_api}
*/
export class DataInfracostAwsApigatewayv2Api extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infracost_aws_apigatewayv2_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfracostAwsApigatewayv2Api resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfracostAwsApigatewayv2Api to import
  * @param importFromId The id of the existing DataInfracostAwsApigatewayv2Api that should be imported. Refer to the {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfracostAwsApigatewayv2Api to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infracost_aws_apigatewayv2_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_apigatewayv2_api infracost_aws_apigatewayv2_api} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfracostAwsApigatewayv2ApiConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfracostAwsApigatewayv2ApiConfig) {
    super(scope, id, {
      terraformResourceType: 'infracost_aws_apigatewayv2_api',
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
    this._averageMessageSize.internalValue = config.averageMessageSize;
    this._monthlyMessages.internalValue = config.monthlyMessages;
    this._monthlyRequests.internalValue = config.monthlyRequests;
    this._requestSize.internalValue = config.requestSize;
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

  // average_message_size - computed: false, optional: true, required: false
  private _averageMessageSize = new DataInfracostAwsApigatewayv2ApiAverageMessageSizeOutputReference(this, "average_message_size");
  public get averageMessageSize() {
    return this._averageMessageSize;
  }
  public putAverageMessageSize(value: DataInfracostAwsApigatewayv2ApiAverageMessageSize) {
    this._averageMessageSize.internalValue = value;
  }
  public resetAverageMessageSize() {
    this._averageMessageSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageMessageSizeInput() {
    return this._averageMessageSize.internalValue;
  }

  // monthly_messages - computed: false, optional: true, required: false
  private _monthlyMessages = new DataInfracostAwsApigatewayv2ApiMonthlyMessagesOutputReference(this, "monthly_messages");
  public get monthlyMessages() {
    return this._monthlyMessages;
  }
  public putMonthlyMessages(value: DataInfracostAwsApigatewayv2ApiMonthlyMessages) {
    this._monthlyMessages.internalValue = value;
  }
  public resetMonthlyMessages() {
    this._monthlyMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyMessagesInput() {
    return this._monthlyMessages.internalValue;
  }

  // monthly_requests - computed: false, optional: true, required: false
  private _monthlyRequests = new DataInfracostAwsApigatewayv2ApiMonthlyRequestsOutputReference(this, "monthly_requests");
  public get monthlyRequests() {
    return this._monthlyRequests;
  }
  public putMonthlyRequests(value: DataInfracostAwsApigatewayv2ApiMonthlyRequests) {
    this._monthlyRequests.internalValue = value;
  }
  public resetMonthlyRequests() {
    this._monthlyRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyRequestsInput() {
    return this._monthlyRequests.internalValue;
  }

  // request_size - computed: false, optional: true, required: false
  private _requestSize = new DataInfracostAwsApigatewayv2ApiRequestSizeOutputReference(this, "request_size");
  public get requestSize() {
    return this._requestSize;
  }
  public putRequestSize(value: DataInfracostAwsApigatewayv2ApiRequestSize) {
    this._requestSize.internalValue = value;
  }
  public resetRequestSize() {
    this._requestSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSizeInput() {
    return this._requestSize.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
      average_message_size: dataInfracostAwsApigatewayv2ApiAverageMessageSizeToTerraform(this._averageMessageSize.internalValue),
      monthly_messages: dataInfracostAwsApigatewayv2ApiMonthlyMessagesToTerraform(this._monthlyMessages.internalValue),
      monthly_requests: dataInfracostAwsApigatewayv2ApiMonthlyRequestsToTerraform(this._monthlyRequests.internalValue),
      request_size: dataInfracostAwsApigatewayv2ApiRequestSizeToTerraform(this._requestSize.internalValue),
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
      average_message_size: {
        value: dataInfracostAwsApigatewayv2ApiAverageMessageSizeToHclTerraform(this._averageMessageSize.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsApigatewayv2ApiAverageMessageSizeList",
      },
      monthly_messages: {
        value: dataInfracostAwsApigatewayv2ApiMonthlyMessagesToHclTerraform(this._monthlyMessages.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsApigatewayv2ApiMonthlyMessagesList",
      },
      monthly_requests: {
        value: dataInfracostAwsApigatewayv2ApiMonthlyRequestsToHclTerraform(this._monthlyRequests.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsApigatewayv2ApiMonthlyRequestsList",
      },
      request_size: {
        value: dataInfracostAwsApigatewayv2ApiRequestSizeToHclTerraform(this._requestSize.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsApigatewayv2ApiRequestSizeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
