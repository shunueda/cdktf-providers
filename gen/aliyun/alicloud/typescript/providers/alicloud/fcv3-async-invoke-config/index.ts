// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Fcv3AsyncInvokeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#async_task Fcv3AsyncInvokeConfig#async_task}
  */
  readonly asyncTask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#function_name Fcv3AsyncInvokeConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#id Fcv3AsyncInvokeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#max_async_event_age_in_seconds Fcv3AsyncInvokeConfig#max_async_event_age_in_seconds}
  */
  readonly maxAsyncEventAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#max_async_retry_attempts Fcv3AsyncInvokeConfig#max_async_retry_attempts}
  */
  readonly maxAsyncRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#qualifier Fcv3AsyncInvokeConfig#qualifier}
  */
  readonly qualifier?: string;
  /**
  * destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#destination_config Fcv3AsyncInvokeConfig#destination_config}
  */
  readonly destinationConfig?: Fcv3AsyncInvokeConfigDestinationConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#timeouts Fcv3AsyncInvokeConfig#timeouts}
  */
  readonly timeouts?: Fcv3AsyncInvokeConfigTimeouts;
}
export interface Fcv3AsyncInvokeConfigDestinationConfigOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#destination Fcv3AsyncInvokeConfig#destination}
  */
  readonly destination?: string;
}

export function fcv3AsyncInvokeConfigDestinationConfigOnFailureToTerraform(struct?: Fcv3AsyncInvokeConfigDestinationConfigOnFailureOutputReference | Fcv3AsyncInvokeConfigDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function fcv3AsyncInvokeConfigDestinationConfigOnFailureToHclTerraform(struct?: Fcv3AsyncInvokeConfigDestinationConfigOnFailureOutputReference | Fcv3AsyncInvokeConfigDestinationConfigOnFailure): any {
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

export class Fcv3AsyncInvokeConfigDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3AsyncInvokeConfigDestinationConfigOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3AsyncInvokeConfigDestinationConfigOnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface Fcv3AsyncInvokeConfigDestinationConfigOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#destination Fcv3AsyncInvokeConfig#destination}
  */
  readonly destination?: string;
}

export function fcv3AsyncInvokeConfigDestinationConfigOnSuccessToTerraform(struct?: Fcv3AsyncInvokeConfigDestinationConfigOnSuccessOutputReference | Fcv3AsyncInvokeConfigDestinationConfigOnSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function fcv3AsyncInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct?: Fcv3AsyncInvokeConfigDestinationConfigOnSuccessOutputReference | Fcv3AsyncInvokeConfigDestinationConfigOnSuccess): any {
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

export class Fcv3AsyncInvokeConfigDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3AsyncInvokeConfigDestinationConfigOnSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3AsyncInvokeConfigDestinationConfigOnSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface Fcv3AsyncInvokeConfigDestinationConfig {
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#on_failure Fcv3AsyncInvokeConfig#on_failure}
  */
  readonly onFailure?: Fcv3AsyncInvokeConfigDestinationConfigOnFailure;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#on_success Fcv3AsyncInvokeConfig#on_success}
  */
  readonly onSuccess?: Fcv3AsyncInvokeConfigDestinationConfigOnSuccess;
}

export function fcv3AsyncInvokeConfigDestinationConfigToTerraform(struct?: Fcv3AsyncInvokeConfigDestinationConfigOutputReference | Fcv3AsyncInvokeConfigDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: fcv3AsyncInvokeConfigDestinationConfigOnFailureToTerraform(struct!.onFailure),
    on_success: fcv3AsyncInvokeConfigDestinationConfigOnSuccessToTerraform(struct!.onSuccess),
  }
}


export function fcv3AsyncInvokeConfigDestinationConfigToHclTerraform(struct?: Fcv3AsyncInvokeConfigDestinationConfigOutputReference | Fcv3AsyncInvokeConfigDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: fcv3AsyncInvokeConfigDestinationConfigOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3AsyncInvokeConfigDestinationConfigOnFailureList",
    },
    on_success: {
      value: fcv3AsyncInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3AsyncInvokeConfigDestinationConfigOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3AsyncInvokeConfigDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3AsyncInvokeConfigDestinationConfig | undefined {
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

  public set internalValue(value: Fcv3AsyncInvokeConfigDestinationConfig | undefined) {
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
  private _onFailure = new Fcv3AsyncInvokeConfigDestinationConfigOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: Fcv3AsyncInvokeConfigDestinationConfigOnFailure) {
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
  private _onSuccess = new Fcv3AsyncInvokeConfigDestinationConfigOnSuccessOutputReference(this, "on_success");
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: Fcv3AsyncInvokeConfigDestinationConfigOnSuccess) {
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
export interface Fcv3AsyncInvokeConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#create Fcv3AsyncInvokeConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#delete Fcv3AsyncInvokeConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#update Fcv3AsyncInvokeConfig#update}
  */
  readonly update?: string;
}

export function fcv3AsyncInvokeConfigTimeoutsToTerraform(struct?: Fcv3AsyncInvokeConfigTimeouts | cdktf.IResolvable): any {
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


export function fcv3AsyncInvokeConfigTimeoutsToHclTerraform(struct?: Fcv3AsyncInvokeConfigTimeouts | cdktf.IResolvable): any {
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

export class Fcv3AsyncInvokeConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Fcv3AsyncInvokeConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Fcv3AsyncInvokeConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config alicloud_fcv3_async_invoke_config}
*/
export class Fcv3AsyncInvokeConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_fcv3_async_invoke_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Fcv3AsyncInvokeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Fcv3AsyncInvokeConfig to import
  * @param importFromId The id of the existing Fcv3AsyncInvokeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Fcv3AsyncInvokeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_fcv3_async_invoke_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_async_invoke_config alicloud_fcv3_async_invoke_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Fcv3AsyncInvokeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: Fcv3AsyncInvokeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_fcv3_async_invoke_config',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asyncTask = config.asyncTask;
    this._functionName = config.functionName;
    this._id = config.id;
    this._maxAsyncEventAgeInSeconds = config.maxAsyncEventAgeInSeconds;
    this._maxAsyncRetryAttempts = config.maxAsyncRetryAttempts;
    this._qualifier = config.qualifier;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async_task - computed: false, optional: true, required: false
  private _asyncTask?: boolean | cdktf.IResolvable; 
  public get asyncTask() {
    return this.getBooleanAttribute('async_task');
  }
  public set asyncTask(value: boolean | cdktf.IResolvable) {
    this._asyncTask = value;
  }
  public resetAsyncTask() {
    this._asyncTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncTaskInput() {
    return this._asyncTask;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // max_async_event_age_in_seconds - computed: false, optional: true, required: false
  private _maxAsyncEventAgeInSeconds?: number; 
  public get maxAsyncEventAgeInSeconds() {
    return this.getNumberAttribute('max_async_event_age_in_seconds');
  }
  public set maxAsyncEventAgeInSeconds(value: number) {
    this._maxAsyncEventAgeInSeconds = value;
  }
  public resetMaxAsyncEventAgeInSeconds() {
    this._maxAsyncEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAsyncEventAgeInSecondsInput() {
    return this._maxAsyncEventAgeInSeconds;
  }

  // max_async_retry_attempts - computed: false, optional: true, required: false
  private _maxAsyncRetryAttempts?: number; 
  public get maxAsyncRetryAttempts() {
    return this.getNumberAttribute('max_async_retry_attempts');
  }
  public set maxAsyncRetryAttempts(value: number) {
    this._maxAsyncRetryAttempts = value;
  }
  public resetMaxAsyncRetryAttempts() {
    this._maxAsyncRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAsyncRetryAttemptsInput() {
    return this._maxAsyncRetryAttempts;
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

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig = new Fcv3AsyncInvokeConfigDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: Fcv3AsyncInvokeConfigDestinationConfig) {
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
  private _timeouts = new Fcv3AsyncInvokeConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Fcv3AsyncInvokeConfigTimeouts) {
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
      async_task: cdktf.booleanToTerraform(this._asyncTask),
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      max_async_event_age_in_seconds: cdktf.numberToTerraform(this._maxAsyncEventAgeInSeconds),
      max_async_retry_attempts: cdktf.numberToTerraform(this._maxAsyncRetryAttempts),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      destination_config: fcv3AsyncInvokeConfigDestinationConfigToTerraform(this._destinationConfig.internalValue),
      timeouts: fcv3AsyncInvokeConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      async_task: {
        value: cdktf.booleanToHclTerraform(this._asyncTask),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      max_async_event_age_in_seconds: {
        value: cdktf.numberToHclTerraform(this._maxAsyncEventAgeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_async_retry_attempts: {
        value: cdktf.numberToHclTerraform(this._maxAsyncRetryAttempts),
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
      destination_config: {
        value: fcv3AsyncInvokeConfigDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3AsyncInvokeConfigDestinationConfigList",
      },
      timeouts: {
        value: fcv3AsyncInvokeConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Fcv3AsyncInvokeConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
