// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CteClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Whether the CTE client is locked. The default value is false. Enable this option to lock the configuration of the CTE Agent on the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#client_locked CteClient#client_locked}
  */
  readonly clientLocked?: boolean | cdktf.IResolvable;
  /**
  * Type of CTE Client. The default value is FS. Valid values are CTE-U and FS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#client_type CteClient#client_type}
  */
  readonly clientType?: string;
  /**
  * (Updateable) Whether communication with the client is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#communication_enabled CteClient#communication_enabled}
  */
  readonly communicationEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Description of client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#description CteClient#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#id CteClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name to uniquely identify the client. This name will be visible on the CipherTrust Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#name CteClient#name}
  */
  readonly name: string;
  /**
  * (Updateable) Password for the client. Required when password_creation_method is MANUAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#password CteClient#password}
  */
  readonly password?: string;
  /**
  * (Updateable) Password creation method for the client. Valid values are MANUAL and GENERATE. The default value is GENERATE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#password_creation_method CteClient#password_creation_method}
  */
  readonly passwordCreationMethod: string;
  /**
  * (Updateable) Identifier of the Client Profile to be associated with the client. If not provided, the default profile will be linked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#profile_identifier CteClient#profile_identifier}
  */
  readonly profileIdentifier?: string;
  /**
  * (Updateable) Whether client's registration with the CipherTrust Manager is allowed. The default value is false. Set to true to allow registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#registration_allowed CteClient#registration_allowed}
  */
  readonly registrationAllowed?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Whether the system is locked. The default value is false. Enable this option to lock the important operating system files of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#system_locked CteClient#system_locked}
  */
  readonly systemLocked?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client ciphertrust_cte_client}
*/
export class CteClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_cte_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CteClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CteClient to import
  * @param importFromId The id of the existing CteClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CteClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_cte_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_client ciphertrust_cte_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CteClientConfig
  */
  public constructor(scope: Construct, id: string, config: CteClientConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_cte_client',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientLocked = config.clientLocked;
    this._clientType = config.clientType;
    this._communicationEnabled = config.communicationEnabled;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._passwordCreationMethod = config.passwordCreationMethod;
    this._profileIdentifier = config.profileIdentifier;
    this._registrationAllowed = config.registrationAllowed;
    this._systemLocked = config.systemLocked;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_locked - computed: false, optional: true, required: false
  private _clientLocked?: boolean | cdktf.IResolvable; 
  public get clientLocked() {
    return this.getBooleanAttribute('client_locked');
  }
  public set clientLocked(value: boolean | cdktf.IResolvable) {
    this._clientLocked = value;
  }
  public resetClientLocked() {
    this._clientLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLockedInput() {
    return this._clientLocked;
  }

  // client_type - computed: false, optional: true, required: false
  private _clientType?: string; 
  public get clientType() {
    return this.getStringAttribute('client_type');
  }
  public set clientType(value: string) {
    this._clientType = value;
  }
  public resetClientType() {
    this._clientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
  }

  // communication_enabled - computed: false, optional: true, required: false
  private _communicationEnabled?: boolean | cdktf.IResolvable; 
  public get communicationEnabled() {
    return this.getBooleanAttribute('communication_enabled');
  }
  public set communicationEnabled(value: boolean | cdktf.IResolvable) {
    this._communicationEnabled = value;
  }
  public resetCommunicationEnabled() {
    this._communicationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationEnabledInput() {
    return this._communicationEnabled;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // password_creation_method - computed: false, optional: false, required: true
  private _passwordCreationMethod?: string; 
  public get passwordCreationMethod() {
    return this.getStringAttribute('password_creation_method');
  }
  public set passwordCreationMethod(value: string) {
    this._passwordCreationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCreationMethodInput() {
    return this._passwordCreationMethod;
  }

  // profile_identifier - computed: false, optional: true, required: false
  private _profileIdentifier?: string; 
  public get profileIdentifier() {
    return this.getStringAttribute('profile_identifier');
  }
  public set profileIdentifier(value: string) {
    this._profileIdentifier = value;
  }
  public resetProfileIdentifier() {
    this._profileIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdentifierInput() {
    return this._profileIdentifier;
  }

  // registration_allowed - computed: false, optional: true, required: false
  private _registrationAllowed?: boolean | cdktf.IResolvable; 
  public get registrationAllowed() {
    return this.getBooleanAttribute('registration_allowed');
  }
  public set registrationAllowed(value: boolean | cdktf.IResolvable) {
    this._registrationAllowed = value;
  }
  public resetRegistrationAllowed() {
    this._registrationAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationAllowedInput() {
    return this._registrationAllowed;
  }

  // system_locked - computed: false, optional: true, required: false
  private _systemLocked?: boolean | cdktf.IResolvable; 
  public get systemLocked() {
    return this.getBooleanAttribute('system_locked');
  }
  public set systemLocked(value: boolean | cdktf.IResolvable) {
    this._systemLocked = value;
  }
  public resetSystemLocked() {
    this._systemLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLockedInput() {
    return this._systemLocked;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_locked: cdktf.booleanToTerraform(this._clientLocked),
      client_type: cdktf.stringToTerraform(this._clientType),
      communication_enabled: cdktf.booleanToTerraform(this._communicationEnabled),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_creation_method: cdktf.stringToTerraform(this._passwordCreationMethod),
      profile_identifier: cdktf.stringToTerraform(this._profileIdentifier),
      registration_allowed: cdktf.booleanToTerraform(this._registrationAllowed),
      system_locked: cdktf.booleanToTerraform(this._systemLocked),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_locked: {
        value: cdktf.booleanToHclTerraform(this._clientLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_type: {
        value: cdktf.stringToHclTerraform(this._clientType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_enabled: {
        value: cdktf.booleanToHclTerraform(this._communicationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      password_creation_method: {
        value: cdktf.stringToHclTerraform(this._passwordCreationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_identifier: {
        value: cdktf.stringToHclTerraform(this._profileIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_allowed: {
        value: cdktf.booleanToHclTerraform(this._registrationAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_locked: {
        value: cdktf.booleanToHclTerraform(this._systemLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
