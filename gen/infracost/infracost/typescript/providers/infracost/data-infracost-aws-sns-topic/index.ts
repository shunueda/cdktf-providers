// https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_sns_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfracostAwsSnsTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_sns_topic#id DataInfracostAwsSnsTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_sns_topic#resources DataInfracostAwsSnsTopic#resources}
  */
  readonly resources: string[];
  /**
  * monthly_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_sns_topic#monthly_requests DataInfracostAwsSnsTopic#monthly_requests}
  */
  readonly monthlyRequests?: DataInfracostAwsSnsTopicMonthlyRequests;
  /**
  * request_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_sns_topic#request_size DataInfracostAwsSnsTopic#request_size}
  */
  readonly requestSize?: DataInfracostAwsSnsTopicRequestSize;
}
export interface DataInfracostAwsSnsTopicMonthlyRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_sns_topic#value DataInfracostAwsSnsTopic#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsSnsTopicMonthlyRequestsToTerraform(struct?: DataInfracostAwsSnsTopicMonthlyRequestsOutputReference | DataInfracostAwsSnsTopicMonthlyRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsSnsTopicMonthlyRequestsToHclTerraform(struct?: DataInfracostAwsSnsTopicMonthlyRequestsOutputReference | DataInfracostAwsSnsTopicMonthlyRequests): any {
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

export class DataInfracostAwsSnsTopicMonthlyRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsSnsTopicMonthlyRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsSnsTopicMonthlyRequests | undefined) {
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
export interface DataInfracostAwsSnsTopicRequestSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_sns_topic#value DataInfracostAwsSnsTopic#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsSnsTopicRequestSizeToTerraform(struct?: DataInfracostAwsSnsTopicRequestSizeOutputReference | DataInfracostAwsSnsTopicRequestSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsSnsTopicRequestSizeToHclTerraform(struct?: DataInfracostAwsSnsTopicRequestSizeOutputReference | DataInfracostAwsSnsTopicRequestSize): any {
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

export class DataInfracostAwsSnsTopicRequestSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsSnsTopicRequestSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsSnsTopicRequestSize | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_sns_topic infracost_aws_sns_topic}
*/
export class DataInfracostAwsSnsTopic extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infracost_aws_sns_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfracostAwsSnsTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfracostAwsSnsTopic to import
  * @param importFromId The id of the existing DataInfracostAwsSnsTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_sns_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfracostAwsSnsTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infracost_aws_sns_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_sns_topic infracost_aws_sns_topic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfracostAwsSnsTopicConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfracostAwsSnsTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'infracost_aws_sns_topic',
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

  // monthly_requests - computed: false, optional: true, required: false
  private _monthlyRequests = new DataInfracostAwsSnsTopicMonthlyRequestsOutputReference(this, "monthly_requests");
  public get monthlyRequests() {
    return this._monthlyRequests;
  }
  public putMonthlyRequests(value: DataInfracostAwsSnsTopicMonthlyRequests) {
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
  private _requestSize = new DataInfracostAwsSnsTopicRequestSizeOutputReference(this, "request_size");
  public get requestSize() {
    return this._requestSize;
  }
  public putRequestSize(value: DataInfracostAwsSnsTopicRequestSize) {
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
      monthly_requests: dataInfracostAwsSnsTopicMonthlyRequestsToTerraform(this._monthlyRequests.internalValue),
      request_size: dataInfracostAwsSnsTopicRequestSizeToTerraform(this._requestSize.internalValue),
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
        value: dataInfracostAwsSnsTopicMonthlyRequestsToHclTerraform(this._monthlyRequests.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsSnsTopicMonthlyRequestsList",
      },
      request_size: {
        value: dataInfracostAwsSnsTopicRequestSizeToHclTerraform(this._requestSize.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsSnsTopicRequestSizeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
