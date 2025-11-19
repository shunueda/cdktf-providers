// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/activegate_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActivegateTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Manually enforce ActiveGate token authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/activegate_token#auth_token_enforcement_manually_enabled ActivegateToken#auth_token_enforcement_manually_enabled}
  */
  readonly authTokenEnforcementManuallyEnabled: boolean | cdktf.IResolvable;
  /**
  * Note: ActiveGate tokens notifications are sent only when you deployed ActiveGate tokens with expiration dates in your environment and notifications are defined ([see notification settings](/ui/settings/builtin:problem.notifications))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/activegate_token#expiring_token_notifications_enabled ActivegateToken#expiring_token_notifications_enabled}
  */
  readonly expiringTokenNotificationsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/activegate_token#id ActivegateToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/activegate_token dynatrace_activegate_token}
*/
export class ActivegateToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_activegate_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActivegateToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActivegateToken to import
  * @param importFromId The id of the existing ActivegateToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/activegate_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActivegateToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_activegate_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/activegate_token dynatrace_activegate_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActivegateTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ActivegateTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_activegate_token',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authTokenEnforcementManuallyEnabled = config.authTokenEnforcementManuallyEnabled;
    this._expiringTokenNotificationsEnabled = config.expiringTokenNotificationsEnabled;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_token_enforcement_manually_enabled - computed: false, optional: false, required: true
  private _authTokenEnforcementManuallyEnabled?: boolean | cdktf.IResolvable; 
  public get authTokenEnforcementManuallyEnabled() {
    return this.getBooleanAttribute('auth_token_enforcement_manually_enabled');
  }
  public set authTokenEnforcementManuallyEnabled(value: boolean | cdktf.IResolvable) {
    this._authTokenEnforcementManuallyEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenEnforcementManuallyEnabledInput() {
    return this._authTokenEnforcementManuallyEnabled;
  }

  // expiring_token_notifications_enabled - computed: false, optional: false, required: true
  private _expiringTokenNotificationsEnabled?: boolean | cdktf.IResolvable; 
  public get expiringTokenNotificationsEnabled() {
    return this.getBooleanAttribute('expiring_token_notifications_enabled');
  }
  public set expiringTokenNotificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._expiringTokenNotificationsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiringTokenNotificationsEnabledInput() {
    return this._expiringTokenNotificationsEnabled;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_token_enforcement_manually_enabled: cdktf.booleanToTerraform(this._authTokenEnforcementManuallyEnabled),
      expiring_token_notifications_enabled: cdktf.booleanToTerraform(this._expiringTokenNotificationsEnabled),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_token_enforcement_manually_enabled: {
        value: cdktf.booleanToHclTerraform(this._authTokenEnforcementManuallyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiring_token_notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._expiringTokenNotificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
