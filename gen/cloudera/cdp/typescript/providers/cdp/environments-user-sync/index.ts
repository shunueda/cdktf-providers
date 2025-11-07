// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_user_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentsUserSyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of environments to be synced. If not present, all environments will be synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_user_sync#environment_names EnvironmentsUserSync#environment_names}
  */
  readonly environmentNames?: string[];
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_user_sync#polling_options EnvironmentsUserSync#polling_options}
  */
  readonly pollingOptions?: EnvironmentsUserSyncPollingOptions;
}
export interface EnvironmentsUserSyncPollingOptions {
  /**
  * Boolean value that specifies if Terraform should wait for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_user_sync#async EnvironmentsUserSync#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_user_sync#call_failure_threshold EnvironmentsUserSync#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_user_sync#polling_timeout EnvironmentsUserSync#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function environmentsUserSyncPollingOptionsToTerraform(struct?: EnvironmentsUserSyncPollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async: cdktf.booleanToTerraform(struct!.async),
    call_failure_threshold: cdktf.numberToTerraform(struct!.callFailureThreshold),
    polling_timeout: cdktf.numberToTerraform(struct!.pollingTimeout),
  }
}


export function environmentsUserSyncPollingOptionsToHclTerraform(struct?: EnvironmentsUserSyncPollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async: {
      value: cdktf.booleanToHclTerraform(struct!.async),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    call_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.callFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsUserSyncPollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsUserSyncPollingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._async !== undefined) {
      hasAnyValues = true;
      internalValueResult.async = this._async;
    }
    if (this._callFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.callFailureThreshold = this._callFailureThreshold;
    }
    if (this._pollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingTimeout = this._pollingTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsUserSyncPollingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._async = undefined;
      this._callFailureThreshold = undefined;
      this._pollingTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._async = value.async;
      this._callFailureThreshold = value.callFailureThreshold;
      this._pollingTimeout = value.pollingTimeout;
    }
  }

  // async - computed: true, optional: true, required: false
  private _async?: boolean | cdktf.IResolvable; 
  public get async() {
    return this.getBooleanAttribute('async');
  }
  public set async(value: boolean | cdktf.IResolvable) {
    this._async = value;
  }
  public resetAsync() {
    this._async = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInput() {
    return this._async;
  }

  // call_failure_threshold - computed: true, optional: true, required: false
  private _callFailureThreshold?: number; 
  public get callFailureThreshold() {
    return this.getNumberAttribute('call_failure_threshold');
  }
  public set callFailureThreshold(value: number) {
    this._callFailureThreshold = value;
  }
  public resetCallFailureThreshold() {
    this._callFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callFailureThresholdInput() {
    return this._callFailureThreshold;
  }

  // polling_timeout - computed: true, optional: true, required: false
  private _pollingTimeout?: number; 
  public get pollingTimeout() {
    return this.getNumberAttribute('polling_timeout');
  }
  public set pollingTimeout(value: number) {
    this._pollingTimeout = value;
  }
  public resetPollingTimeout() {
    this._pollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingTimeoutInput() {
    return this._pollingTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_user_sync cdp_environments_user_sync}
*/
export class EnvironmentsUserSync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_user_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentsUserSync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentsUserSync to import
  * @param importFromId The id of the existing EnvironmentsUserSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_user_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentsUserSync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_user_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_user_sync cdp_environments_user_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentsUserSyncConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EnvironmentsUserSyncConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_user_sync',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentNames = config.environmentNames;
    this._pollingOptions.internalValue = config.pollingOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_names - computed: false, optional: true, required: false
  private _environmentNames?: string[]; 
  public get environmentNames() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_names'));
  }
  public set environmentNames(value: string[]) {
    this._environmentNames = value;
  }
  public resetEnvironmentNames() {
    this._environmentNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNamesInput() {
    return this._environmentNames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // polling_options - computed: false, optional: true, required: false
  private _pollingOptions = new EnvironmentsUserSyncPollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: EnvironmentsUserSyncPollingOptions) {
    this._pollingOptions.internalValue = value;
  }
  public resetPollingOptions() {
    this._pollingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingOptionsInput() {
    return this._pollingOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentNames),
      polling_options: environmentsUserSyncPollingOptionsToTerraform(this._pollingOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      polling_options: {
        value: environmentsUserSyncPollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsUserSyncPollingOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
