// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user_lock_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserLockPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable User Lock Policy. Lock user after exceeding max failed login attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user_lock_policy#enabled UserLockPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Max failed login attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user_lock_policy#login_attempts UserLockPolicy#login_attempts}
  */
  readonly loginAttempts: number;
  /**
  * Name of the resource. Only used for importing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user_lock_policy#name UserLockPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user_lock_policy artifactory_user_lock_policy}
*/
export class UserLockPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_user_lock_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserLockPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserLockPolicy to import
  * @param importFromId The id of the existing UserLockPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user_lock_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserLockPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_user_lock_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user_lock_policy artifactory_user_lock_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserLockPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: UserLockPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_user_lock_policy',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
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
    this._loginAttempts = config.loginAttempts;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // login_attempts - computed: false, optional: false, required: true
  private _loginAttempts?: number; 
  public get loginAttempts() {
    return this.getNumberAttribute('login_attempts');
  }
  public set loginAttempts(value: number) {
    this._loginAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAttemptsInput() {
    return this._loginAttempts;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      login_attempts: cdktf.numberToTerraform(this._loginAttempts),
      name: cdktf.stringToTerraform(this._name),
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
      login_attempts: {
        value: cdktf.numberToHclTerraform(this._loginAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
