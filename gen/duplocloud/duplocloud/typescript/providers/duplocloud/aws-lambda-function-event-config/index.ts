// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsLambdaFunctionEventConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of Lambda function this configuration should apply to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#function_name AwsLambdaFunctionEventConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#id AwsLambdaFunctionEventConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum age of a request that Lambda sends to a function for processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#max_event_age_in_seconds AwsLambdaFunctionEventConfig#max_event_age_in_seconds}
  */
  readonly maxEventAgeInSeconds?: number;
  /**
  * Maximum number of attempts a Lambda function may retry in case of error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#max_retry_attempts AwsLambdaFunctionEventConfig#max_retry_attempts}
  */
  readonly maxRetryAttempts?: number;
  /**
  * The qualifier for the lambda event invoke configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#qualifier AwsLambdaFunctionEventConfig#qualifier}
  */
  readonly qualifier?: string;
  /**
  * The GUID of the tenant that the lambda asynchronous invocation configuration will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#tenant_id AwsLambdaFunctionEventConfig#tenant_id}
  */
  readonly tenantId: string;
  /**
  * destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#destination_config AwsLambdaFunctionEventConfig#destination_config}
  */
  readonly destinationConfig?: AwsLambdaFunctionEventConfigDestinationConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#timeouts AwsLambdaFunctionEventConfig#timeouts}
  */
  readonly timeouts?: AwsLambdaFunctionEventConfigTimeouts;
}
export interface AwsLambdaFunctionEventConfigDestinationConfigOnFailure {
  /**
  * The AWS ARN of the destination resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#destination AwsLambdaFunctionEventConfig#destination}
  */
  readonly destination: string;
}

export function awsLambdaFunctionEventConfigDestinationConfigOnFailureToTerraform(struct?: AwsLambdaFunctionEventConfigDestinationConfigOnFailureOutputReference | AwsLambdaFunctionEventConfigDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function awsLambdaFunctionEventConfigDestinationConfigOnFailureToHclTerraform(struct?: AwsLambdaFunctionEventConfigDestinationConfigOnFailureOutputReference | AwsLambdaFunctionEventConfigDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLambdaFunctionEventConfigDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLambdaFunctionEventConfigDestinationConfigOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLambdaFunctionEventConfigDestinationConfigOnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface AwsLambdaFunctionEventConfigDestinationConfigOnSuccess {
  /**
  * The AWS ARN of the destination resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#destination AwsLambdaFunctionEventConfig#destination}
  */
  readonly destination: string;
}

export function awsLambdaFunctionEventConfigDestinationConfigOnSuccessToTerraform(struct?: AwsLambdaFunctionEventConfigDestinationConfigOnSuccessOutputReference | AwsLambdaFunctionEventConfigDestinationConfigOnSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function awsLambdaFunctionEventConfigDestinationConfigOnSuccessToHclTerraform(struct?: AwsLambdaFunctionEventConfigDestinationConfigOnSuccessOutputReference | AwsLambdaFunctionEventConfigDestinationConfigOnSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLambdaFunctionEventConfigDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLambdaFunctionEventConfigDestinationConfigOnSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLambdaFunctionEventConfigDestinationConfigOnSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface AwsLambdaFunctionEventConfigDestinationConfig {
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#on_failure AwsLambdaFunctionEventConfig#on_failure}
  */
  readonly onFailure?: AwsLambdaFunctionEventConfigDestinationConfigOnFailure;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#on_success AwsLambdaFunctionEventConfig#on_success}
  */
  readonly onSuccess?: AwsLambdaFunctionEventConfigDestinationConfigOnSuccess;
}

export function awsLambdaFunctionEventConfigDestinationConfigToTerraform(struct?: AwsLambdaFunctionEventConfigDestinationConfigOutputReference | AwsLambdaFunctionEventConfigDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: awsLambdaFunctionEventConfigDestinationConfigOnFailureToTerraform(struct!.onFailure),
    on_success: awsLambdaFunctionEventConfigDestinationConfigOnSuccessToTerraform(struct!.onSuccess),
  }
}


export function awsLambdaFunctionEventConfigDestinationConfigToHclTerraform(struct?: AwsLambdaFunctionEventConfigDestinationConfigOutputReference | AwsLambdaFunctionEventConfigDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: awsLambdaFunctionEventConfigDestinationConfigOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLambdaFunctionEventConfigDestinationConfigOnFailureList",
    },
    on_success: {
      value: awsLambdaFunctionEventConfigDestinationConfigOnSuccessToHclTerraform(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLambdaFunctionEventConfigDestinationConfigOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLambdaFunctionEventConfigDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLambdaFunctionEventConfigDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLambdaFunctionEventConfigDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onFailure.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onFailure.internalValue = value.onFailure;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new AwsLambdaFunctionEventConfigDestinationConfigOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: AwsLambdaFunctionEventConfigDestinationConfigOnFailure) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new AwsLambdaFunctionEventConfigDestinationConfigOnSuccessOutputReference(this, "on_success");
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: AwsLambdaFunctionEventConfigDestinationConfigOnSuccess) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}
export interface AwsLambdaFunctionEventConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#create AwsLambdaFunctionEventConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#delete AwsLambdaFunctionEventConfig#delete}
  */
  readonly delete?: string;
}

export function awsLambdaFunctionEventConfigTimeoutsToTerraform(struct?: AwsLambdaFunctionEventConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function awsLambdaFunctionEventConfigTimeoutsToHclTerraform(struct?: AwsLambdaFunctionEventConfigTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLambdaFunctionEventConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsLambdaFunctionEventConfigTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLambdaFunctionEventConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config duplocloud_aws_lambda_function_event_config}
*/
export class AwsLambdaFunctionEventConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_lambda_function_event_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsLambdaFunctionEventConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsLambdaFunctionEventConfig to import
  * @param importFromId The id of the existing AwsLambdaFunctionEventConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsLambdaFunctionEventConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_lambda_function_event_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_lambda_function_event_config duplocloud_aws_lambda_function_event_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsLambdaFunctionEventConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AwsLambdaFunctionEventConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_lambda_function_event_config',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._functionName = config.functionName;
    this._id = config.id;
    this._maxEventAgeInSeconds = config.maxEventAgeInSeconds;
    this._maxRetryAttempts = config.maxRetryAttempts;
    this._qualifier = config.qualifier;
    this._tenantId = config.tenantId;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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

  // max_event_age_in_seconds - computed: false, optional: true, required: false
  private _maxEventAgeInSeconds?: number; 
  public get maxEventAgeInSeconds() {
    return this.getNumberAttribute('max_event_age_in_seconds');
  }
  public set maxEventAgeInSeconds(value: number) {
    this._maxEventAgeInSeconds = value;
  }
  public resetMaxEventAgeInSeconds() {
    this._maxEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventAgeInSecondsInput() {
    return this._maxEventAgeInSeconds;
  }

  // max_retry_attempts - computed: false, optional: true, required: false
  private _maxRetryAttempts?: number; 
  public get maxRetryAttempts() {
    return this.getNumberAttribute('max_retry_attempts');
  }
  public set maxRetryAttempts(value: number) {
    this._maxRetryAttempts = value;
  }
  public resetMaxRetryAttempts() {
    this._maxRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryAttemptsInput() {
    return this._maxRetryAttempts;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig = new AwsLambdaFunctionEventConfigDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: AwsLambdaFunctionEventConfigDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsLambdaFunctionEventConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsLambdaFunctionEventConfigTimeouts) {
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
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      max_event_age_in_seconds: cdktf.numberToTerraform(this._maxEventAgeInSeconds),
      max_retry_attempts: cdktf.numberToTerraform(this._maxRetryAttempts),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      destination_config: awsLambdaFunctionEventConfigDestinationConfigToTerraform(this._destinationConfig.internalValue),
      timeouts: awsLambdaFunctionEventConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
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
      max_event_age_in_seconds: {
        value: cdktf.numberToHclTerraform(this._maxEventAgeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retry_attempts: {
        value: cdktf.numberToHclTerraform(this._maxRetryAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qualifier: {
        value: cdktf.stringToHclTerraform(this._qualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_config: {
        value: awsLambdaFunctionEventConfigDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunctionEventConfigDestinationConfigList",
      },
      timeouts: {
        value: awsLambdaFunctionEventConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsLambdaFunctionEventConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
