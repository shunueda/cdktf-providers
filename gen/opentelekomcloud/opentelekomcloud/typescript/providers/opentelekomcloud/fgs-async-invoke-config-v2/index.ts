// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FgsAsyncInvokeConfigV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}
  */
  readonly functionUrn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}
  */
  readonly maxAsyncEventAgeInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}
  */
  readonly maxAsyncRetryAttempts: number;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#on_failure FgsAsyncInvokeConfigV2#on_failure}
  */
  readonly onFailure?: FgsAsyncInvokeConfigV2OnFailure;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#on_success FgsAsyncInvokeConfigV2#on_success}
  */
  readonly onSuccess?: FgsAsyncInvokeConfigV2OnSuccess;
}
export interface FgsAsyncInvokeConfigV2OnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}
  */
  readonly param: string;
}

export function fgsAsyncInvokeConfigV2OnFailureToTerraform(struct?: FgsAsyncInvokeConfigV2OnFailureOutputReference | FgsAsyncInvokeConfigV2OnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    param: cdktf.stringToTerraform(struct!.param),
  }
}


export function fgsAsyncInvokeConfigV2OnFailureToHclTerraform(struct?: FgsAsyncInvokeConfigV2OnFailureOutputReference | FgsAsyncInvokeConfigV2OnFailure): any {
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
    param: {
      value: cdktf.stringToHclTerraform(struct!.param),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsAsyncInvokeConfigV2OnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FgsAsyncInvokeConfigV2OnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._param !== undefined) {
      hasAnyValues = true;
      internalValueResult.param = this._param;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsAsyncInvokeConfigV2OnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
      this._param = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
      this._param = value.param;
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

  // param - computed: false, optional: false, required: true
  private _param?: string; 
  public get param() {
    return this.getStringAttribute('param');
  }
  public set param(value: string) {
    this._param = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramInput() {
    return this._param;
  }
}
export interface FgsAsyncInvokeConfigV2OnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}
  */
  readonly param: string;
}

export function fgsAsyncInvokeConfigV2OnSuccessToTerraform(struct?: FgsAsyncInvokeConfigV2OnSuccessOutputReference | FgsAsyncInvokeConfigV2OnSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    param: cdktf.stringToTerraform(struct!.param),
  }
}


export function fgsAsyncInvokeConfigV2OnSuccessToHclTerraform(struct?: FgsAsyncInvokeConfigV2OnSuccessOutputReference | FgsAsyncInvokeConfigV2OnSuccess): any {
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
    param: {
      value: cdktf.stringToHclTerraform(struct!.param),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsAsyncInvokeConfigV2OnSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FgsAsyncInvokeConfigV2OnSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._param !== undefined) {
      hasAnyValues = true;
      internalValueResult.param = this._param;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsAsyncInvokeConfigV2OnSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
      this._param = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
      this._param = value.param;
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

  // param - computed: false, optional: false, required: true
  private _param?: string; 
  public get param() {
    return this.getStringAttribute('param');
  }
  public set param(value: string) {
    this._param = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramInput() {
    return this._param;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2 opentelekomcloud_fgs_async_invoke_config_v2}
*/
export class FgsAsyncInvokeConfigV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_fgs_async_invoke_config_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FgsAsyncInvokeConfigV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FgsAsyncInvokeConfigV2 to import
  * @param importFromId The id of the existing FgsAsyncInvokeConfigV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FgsAsyncInvokeConfigV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_fgs_async_invoke_config_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/fgs_async_invoke_config_v2 opentelekomcloud_fgs_async_invoke_config_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FgsAsyncInvokeConfigV2Config
  */
  public constructor(scope: Construct, id: string, config: FgsAsyncInvokeConfigV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_fgs_async_invoke_config_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._functionUrn = config.functionUrn;
    this._id = config.id;
    this._maxAsyncEventAgeInSeconds = config.maxAsyncEventAgeInSeconds;
    this._maxAsyncRetryAttempts = config.maxAsyncRetryAttempts;
    this._onFailure.internalValue = config.onFailure;
    this._onSuccess.internalValue = config.onSuccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_urn - computed: false, optional: false, required: true
  private _functionUrn?: string; 
  public get functionUrn() {
    return this.getStringAttribute('function_urn');
  }
  public set functionUrn(value: string) {
    this._functionUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionUrnInput() {
    return this._functionUrn;
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

  // max_async_event_age_in_seconds - computed: false, optional: false, required: true
  private _maxAsyncEventAgeInSeconds?: number; 
  public get maxAsyncEventAgeInSeconds() {
    return this.getNumberAttribute('max_async_event_age_in_seconds');
  }
  public set maxAsyncEventAgeInSeconds(value: number) {
    this._maxAsyncEventAgeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAsyncEventAgeInSecondsInput() {
    return this._maxAsyncEventAgeInSeconds;
  }

  // max_async_retry_attempts - computed: false, optional: false, required: true
  private _maxAsyncRetryAttempts?: number; 
  public get maxAsyncRetryAttempts() {
    return this.getNumberAttribute('max_async_retry_attempts');
  }
  public set maxAsyncRetryAttempts(value: number) {
    this._maxAsyncRetryAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAsyncRetryAttemptsInput() {
    return this._maxAsyncRetryAttempts;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new FgsAsyncInvokeConfigV2OnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: FgsAsyncInvokeConfigV2OnFailure) {
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
  private _onSuccess = new FgsAsyncInvokeConfigV2OnSuccessOutputReference(this, "on_success");
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: FgsAsyncInvokeConfigV2OnSuccess) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_urn: cdktf.stringToTerraform(this._functionUrn),
      id: cdktf.stringToTerraform(this._id),
      max_async_event_age_in_seconds: cdktf.numberToTerraform(this._maxAsyncEventAgeInSeconds),
      max_async_retry_attempts: cdktf.numberToTerraform(this._maxAsyncRetryAttempts),
      on_failure: fgsAsyncInvokeConfigV2OnFailureToTerraform(this._onFailure.internalValue),
      on_success: fgsAsyncInvokeConfigV2OnSuccessToTerraform(this._onSuccess.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_urn: {
        value: cdktf.stringToHclTerraform(this._functionUrn),
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
      on_failure: {
        value: fgsAsyncInvokeConfigV2OnFailureToHclTerraform(this._onFailure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FgsAsyncInvokeConfigV2OnFailureList",
      },
      on_success: {
        value: fgsAsyncInvokeConfigV2OnSuccessToHclTerraform(this._onSuccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FgsAsyncInvokeConfigV2OnSuccessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
