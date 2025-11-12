// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_unique_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyUniquePasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_unique_password#execution_logging PolicyUniquePassword#execution_logging}
  */
  readonly executionLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_unique_password#id PolicyUniquePassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_unique_password#name PolicyUniquePassword#name}
  */
  readonly name: string;
  /**
  * Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_unique_password#num_historical_passwords PolicyUniquePassword#num_historical_passwords}
  */
  readonly numHistoricalPasswords?: number;
  /**
  * Defaults to `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_unique_password#password_field PolicyUniquePassword#password_field}
  */
  readonly passwordField?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_unique_password authentik_policy_unique_password}
*/
export class PolicyUniquePassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_policy_unique_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyUniquePassword resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyUniquePassword to import
  * @param importFromId The id of the existing PolicyUniquePassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_unique_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyUniquePassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_policy_unique_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_unique_password authentik_policy_unique_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyUniquePasswordConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyUniquePasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_policy_unique_password',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._executionLogging = config.executionLogging;
    this._id = config.id;
    this._name = config.name;
    this._numHistoricalPasswords = config.numHistoricalPasswords;
    this._passwordField = config.passwordField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // execution_logging - computed: false, optional: true, required: false
  private _executionLogging?: boolean | cdktf.IResolvable; 
  public get executionLogging() {
    return this.getBooleanAttribute('execution_logging');
  }
  public set executionLogging(value: boolean | cdktf.IResolvable) {
    this._executionLogging = value;
  }
  public resetExecutionLogging() {
    this._executionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLoggingInput() {
    return this._executionLogging;
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

  // num_historical_passwords - computed: false, optional: true, required: false
  private _numHistoricalPasswords?: number; 
  public get numHistoricalPasswords() {
    return this.getNumberAttribute('num_historical_passwords');
  }
  public set numHistoricalPasswords(value: number) {
    this._numHistoricalPasswords = value;
  }
  public resetNumHistoricalPasswords() {
    this._numHistoricalPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numHistoricalPasswordsInput() {
    return this._numHistoricalPasswords;
  }

  // password_field - computed: false, optional: true, required: false
  private _passwordField?: string; 
  public get passwordField() {
    return this.getStringAttribute('password_field');
  }
  public set passwordField(value: string) {
    this._passwordField = value;
  }
  public resetPasswordField() {
    this._passwordField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFieldInput() {
    return this._passwordField;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_logging: cdktf.booleanToTerraform(this._executionLogging),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_historical_passwords: cdktf.numberToTerraform(this._numHistoricalPasswords),
      password_field: cdktf.stringToTerraform(this._passwordField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_logging: {
        value: cdktf.booleanToHclTerraform(this._executionLogging),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_historical_passwords: {
        value: cdktf.numberToHclTerraform(this._numHistoricalPasswords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_field: {
        value: cdktf.stringToHclTerraform(this._passwordField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
