// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/password_expiration_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordExpirationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Password Expiration Policy. This only applies to internal user passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/password_expiration_policy#enabled PasswordExpirationPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Name of the resource. Only used for importing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/password_expiration_policy#name PasswordExpirationPolicy#name}
  */
  readonly name: string;
  /**
  * Send mail notification before password expiration. Users will receive an email notification a few days before password will expire. Mail server must be enabled and configured correctly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/password_expiration_policy#notify_by_email PasswordExpirationPolicy#notify_by_email}
  */
  readonly notifyByEmail: boolean | cdktf.IResolvable;
  /**
  * Password expires every N days. The time interval in which users will be obligated to change their password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/password_expiration_policy#password_max_age PasswordExpirationPolicy#password_max_age}
  */
  readonly passwordMaxAge: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/password_expiration_policy artifactory_password_expiration_policy}
*/
export class PasswordExpirationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_password_expiration_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PasswordExpirationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PasswordExpirationPolicy to import
  * @param importFromId The id of the existing PasswordExpirationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/password_expiration_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PasswordExpirationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_password_expiration_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/password_expiration_policy artifactory_password_expiration_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordExpirationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PasswordExpirationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_password_expiration_policy',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.0',
        providerVersionConstraint: '12.11.0'
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
    this._name = config.name;
    this._notifyByEmail = config.notifyByEmail;
    this._passwordMaxAge = config.passwordMaxAge;
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

  // notify_by_email - computed: false, optional: false, required: true
  private _notifyByEmail?: boolean | cdktf.IResolvable; 
  public get notifyByEmail() {
    return this.getBooleanAttribute('notify_by_email');
  }
  public set notifyByEmail(value: boolean | cdktf.IResolvable) {
    this._notifyByEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyByEmailInput() {
    return this._notifyByEmail;
  }

  // password_max_age - computed: false, optional: false, required: true
  private _passwordMaxAge?: number; 
  public get passwordMaxAge() {
    return this.getNumberAttribute('password_max_age');
  }
  public set passwordMaxAge(value: number) {
    this._passwordMaxAge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMaxAgeInput() {
    return this._passwordMaxAge;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      notify_by_email: cdktf.booleanToTerraform(this._notifyByEmail),
      password_max_age: cdktf.numberToTerraform(this._passwordMaxAge),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_by_email: {
        value: cdktf.booleanToHclTerraform(this._notifyByEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_max_age: {
        value: cdktf.numberToHclTerraform(this._passwordMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
