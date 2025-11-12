// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/model_notifications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ModelNotificationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether model notifications are enabled for this environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/model_notifications#enabled ModelNotifications#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the dbt Cloud environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/model_notifications#environment_id ModelNotifications#environment_id}
  */
  readonly environmentId: string;
  /**
  * Whether to send notifications for failed model runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/model_notifications#on_failure ModelNotifications#on_failure}
  */
  readonly onFailure?: boolean | cdktf.IResolvable;
  /**
  * Whether to send notifications for skipped model runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/model_notifications#on_skipped ModelNotifications#on_skipped}
  */
  readonly onSkipped?: boolean | cdktf.IResolvable;
  /**
  * Whether to send notifications for successful model runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/model_notifications#on_success ModelNotifications#on_success}
  */
  readonly onSuccess?: boolean | cdktf.IResolvable;
  /**
  * Whether to send notifications for model runs with warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/model_notifications#on_warning ModelNotifications#on_warning}
  */
  readonly onWarning?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/model_notifications dbtcloud_model_notifications}
*/
export class ModelNotifications extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_model_notifications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ModelNotifications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ModelNotifications to import
  * @param importFromId The id of the existing ModelNotifications that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/model_notifications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ModelNotifications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_model_notifications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/model_notifications dbtcloud_model_notifications} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ModelNotificationsConfig
  */
  public constructor(scope: Construct, id: string, config: ModelNotificationsConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_model_notifications',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._environmentId = config.environmentId;
    this._onFailure = config.onFailure;
    this._onSkipped = config.onSkipped;
    this._onSuccess = config.onSuccess;
    this._onWarning = config.onWarning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // on_failure - computed: true, optional: true, required: false
  private _onFailure?: boolean | cdktf.IResolvable; 
  public get onFailure() {
    return this.getBooleanAttribute('on_failure');
  }
  public set onFailure(value: boolean | cdktf.IResolvable) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // on_skipped - computed: true, optional: true, required: false
  private _onSkipped?: boolean | cdktf.IResolvable; 
  public get onSkipped() {
    return this.getBooleanAttribute('on_skipped');
  }
  public set onSkipped(value: boolean | cdktf.IResolvable) {
    this._onSkipped = value;
  }
  public resetOnSkipped() {
    this._onSkipped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSkippedInput() {
    return this._onSkipped;
  }

  // on_success - computed: true, optional: true, required: false
  private _onSuccess?: boolean | cdktf.IResolvable; 
  public get onSuccess() {
    return this.getBooleanAttribute('on_success');
  }
  public set onSuccess(value: boolean | cdktf.IResolvable) {
    this._onSuccess = value;
  }
  public resetOnSuccess() {
    this._onSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess;
  }

  // on_warning - computed: true, optional: true, required: false
  private _onWarning?: boolean | cdktf.IResolvable; 
  public get onWarning() {
    return this.getBooleanAttribute('on_warning');
  }
  public set onWarning(value: boolean | cdktf.IResolvable) {
    this._onWarning = value;
  }
  public resetOnWarning() {
    this._onWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onWarningInput() {
    return this._onWarning;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      on_failure: cdktf.booleanToTerraform(this._onFailure),
      on_skipped: cdktf.booleanToTerraform(this._onSkipped),
      on_success: cdktf.booleanToTerraform(this._onSuccess),
      on_warning: cdktf.booleanToTerraform(this._onWarning),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_failure: {
        value: cdktf.booleanToHclTerraform(this._onFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_skipped: {
        value: cdktf.booleanToHclTerraform(this._onSkipped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_success: {
        value: cdktf.booleanToHclTerraform(this._onSuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_warning: {
        value: cdktf.booleanToHclTerraform(this._onWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
