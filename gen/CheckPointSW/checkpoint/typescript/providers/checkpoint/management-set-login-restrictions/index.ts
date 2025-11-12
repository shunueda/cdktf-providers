// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_restrictions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSetLoginRestrictionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to display informative message upon denying access. <font color="red">Required only when</font> lockout-admin-account is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_restrictions#display_access_denied_message ManagementSetLoginRestrictions#display_access_denied_message}
  */
  readonly displayAccessDeniedMessage?: boolean | cdktf.IResolvable;
  /**
  * Number of failed authentication attempts before lockout administrator account. <font color="red">Required only when</font> lockout-admin-account is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_restrictions#failed_authentication_attempts ManagementSetLoginRestrictions#failed_authentication_attempts}
  */
  readonly failedAuthenticationAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_restrictions#id ManagementSetLoginRestrictions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether to lockout administrator's account after specified number of failed authentication attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_restrictions#lockout_admin_account ManagementSetLoginRestrictions#lockout_admin_account}
  */
  readonly lockoutAdminAccount?: boolean | cdktf.IResolvable;
  /**
  * Number of minutes of administrator account lockout. <font color="red">Required only when</font> lockout-admin-account is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_restrictions#lockout_duration ManagementSetLoginRestrictions#lockout_duration}
  */
  readonly lockoutDuration?: number;
  /**
  * Indicates whether to unlock administrator account after specified number of minutes. <font color="red">Required only when</font> lockout-admin-account is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_restrictions#unlock_admin_account ManagementSetLoginRestrictions#unlock_admin_account}
  */
  readonly unlockAdminAccount?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_restrictions checkpoint_management_set_login_restrictions}
*/
export class ManagementSetLoginRestrictions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_set_login_restrictions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSetLoginRestrictions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSetLoginRestrictions to import
  * @param importFromId The id of the existing ManagementSetLoginRestrictions that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_restrictions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSetLoginRestrictions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_set_login_restrictions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_login_restrictions checkpoint_management_set_login_restrictions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSetLoginRestrictionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementSetLoginRestrictionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_set_login_restrictions',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayAccessDeniedMessage = config.displayAccessDeniedMessage;
    this._failedAuthenticationAttempts = config.failedAuthenticationAttempts;
    this._id = config.id;
    this._lockoutAdminAccount = config.lockoutAdminAccount;
    this._lockoutDuration = config.lockoutDuration;
    this._unlockAdminAccount = config.unlockAdminAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_access_denied_message - computed: false, optional: true, required: false
  private _displayAccessDeniedMessage?: boolean | cdktf.IResolvable; 
  public get displayAccessDeniedMessage() {
    return this.getBooleanAttribute('display_access_denied_message');
  }
  public set displayAccessDeniedMessage(value: boolean | cdktf.IResolvable) {
    this._displayAccessDeniedMessage = value;
  }
  public resetDisplayAccessDeniedMessage() {
    this._displayAccessDeniedMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayAccessDeniedMessageInput() {
    return this._displayAccessDeniedMessage;
  }

  // failed_authentication_attempts - computed: false, optional: true, required: false
  private _failedAuthenticationAttempts?: number; 
  public get failedAuthenticationAttempts() {
    return this.getNumberAttribute('failed_authentication_attempts');
  }
  public set failedAuthenticationAttempts(value: number) {
    this._failedAuthenticationAttempts = value;
  }
  public resetFailedAuthenticationAttempts() {
    this._failedAuthenticationAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAuthenticationAttemptsInput() {
    return this._failedAuthenticationAttempts;
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

  // lockout_admin_account - computed: false, optional: true, required: false
  private _lockoutAdminAccount?: boolean | cdktf.IResolvable; 
  public get lockoutAdminAccount() {
    return this.getBooleanAttribute('lockout_admin_account');
  }
  public set lockoutAdminAccount(value: boolean | cdktf.IResolvable) {
    this._lockoutAdminAccount = value;
  }
  public resetLockoutAdminAccount() {
    this._lockoutAdminAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutAdminAccountInput() {
    return this._lockoutAdminAccount;
  }

  // lockout_duration - computed: false, optional: true, required: false
  private _lockoutDuration?: number; 
  public get lockoutDuration() {
    return this.getNumberAttribute('lockout_duration');
  }
  public set lockoutDuration(value: number) {
    this._lockoutDuration = value;
  }
  public resetLockoutDuration() {
    this._lockoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutDurationInput() {
    return this._lockoutDuration;
  }

  // unlock_admin_account - computed: false, optional: true, required: false
  private _unlockAdminAccount?: boolean | cdktf.IResolvable; 
  public get unlockAdminAccount() {
    return this.getBooleanAttribute('unlock_admin_account');
  }
  public set unlockAdminAccount(value: boolean | cdktf.IResolvable) {
    this._unlockAdminAccount = value;
  }
  public resetUnlockAdminAccount() {
    this._unlockAdminAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockAdminAccountInput() {
    return this._unlockAdminAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_access_denied_message: cdktf.booleanToTerraform(this._displayAccessDeniedMessage),
      failed_authentication_attempts: cdktf.numberToTerraform(this._failedAuthenticationAttempts),
      id: cdktf.stringToTerraform(this._id),
      lockout_admin_account: cdktf.booleanToTerraform(this._lockoutAdminAccount),
      lockout_duration: cdktf.numberToTerraform(this._lockoutDuration),
      unlock_admin_account: cdktf.booleanToTerraform(this._unlockAdminAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_access_denied_message: {
        value: cdktf.booleanToHclTerraform(this._displayAccessDeniedMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failed_authentication_attempts: {
        value: cdktf.numberToHclTerraform(this._failedAuthenticationAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lockout_admin_account: {
        value: cdktf.booleanToHclTerraform(this._lockoutAdminAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lockout_duration: {
        value: cdktf.numberToHclTerraform(this._lockoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unlock_admin_account: {
        value: cdktf.booleanToHclTerraform(this._unlockAdminAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
