// https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserScramCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential#id UserScramCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The password of the credential (deprecated, use password_wo instead)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential#password UserScramCredential#password}
  */
  readonly password?: string;
  /**
  * The write-only password of the credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential#password_wo UserScramCredential#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version identifier for the write-only password to track changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential#password_wo_version UserScramCredential#password_wo_version}
  */
  readonly passwordWoVersion?: string;
  /**
  * The number of SCRAM iterations used when generating the credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential#scram_iterations UserScramCredential#scram_iterations}
  */
  readonly scramIterations?: number;
  /**
  * The SCRAM mechanism used to generate the credential (SCRAM-SHA-256, SCRAM-SHA-512)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential#scram_mechanism UserScramCredential#scram_mechanism}
  */
  readonly scramMechanism: string;
  /**
  * The name of the credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential#username UserScramCredential#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential kafka_user_scram_credential}
*/
export class UserScramCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kafka_user_scram_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserScramCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserScramCredential to import
  * @param importFromId The id of the existing UserScramCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserScramCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kafka_user_scram_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/user_scram_credential kafka_user_scram_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserScramCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: UserScramCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'kafka_user_scram_credential',
      terraformGeneratorMetadata: {
        providerName: 'kafka',
        providerVersion: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._password = config.password;
    this._passwordWo = config.passwordWo;
    this._passwordWoVersion = config.passwordWoVersion;
    this._scramIterations = config.scramIterations;
    this._scramMechanism = config.scramMechanism;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: string; 
  public get passwordWoVersion() {
    return this.getStringAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: string) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // scram_iterations - computed: false, optional: true, required: false
  private _scramIterations?: number; 
  public get scramIterations() {
    return this.getNumberAttribute('scram_iterations');
  }
  public set scramIterations(value: number) {
    this._scramIterations = value;
  }
  public resetScramIterations() {
    this._scramIterations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scramIterationsInput() {
    return this._scramIterations;
  }

  // scram_mechanism - computed: false, optional: false, required: true
  private _scramMechanism?: string; 
  public get scramMechanism() {
    return this.getStringAttribute('scram_mechanism');
  }
  public set scramMechanism(value: string) {
    this._scramMechanism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scramMechanismInput() {
    return this._scramMechanism;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      password_wo: cdktf.stringToTerraform(this._passwordWo),
      password_wo_version: cdktf.stringToTerraform(this._passwordWoVersion),
      scram_iterations: cdktf.numberToTerraform(this._scramIterations),
      scram_mechanism: cdktf.stringToTerraform(this._scramMechanism),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_wo: {
        value: cdktf.stringToHclTerraform(this._passwordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_wo_version: {
        value: cdktf.stringToHclTerraform(this._passwordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scram_iterations: {
        value: cdktf.numberToHclTerraform(this._scramIterations),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scram_mechanism: {
        value: cdktf.stringToHclTerraform(this._scramMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
