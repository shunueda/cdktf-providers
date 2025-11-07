// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/pingone_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PingoneConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the PingOne Connection is active. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/pingone_connection#active PingoneConnection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The persistent, unique ID of the connection. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/pingone_connection#connection_id PingoneConnection#connection_id}
  */
  readonly connectionId?: string;
  /**
  * The credential for the PingOne connection. Either this attribute or `encrypted_credential` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/pingone_connection#credential PingoneConnection#credential}
  */
  readonly credential?: string;
  /**
  * The description of the PingOne Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/pingone_connection#description PingoneConnection#description}
  */
  readonly description?: string;
  /**
  * The encrypted credential for the PingOne connection. Either this attribute or `credential` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/pingone_connection#encrypted_credential PingoneConnection#encrypted_credential}
  */
  readonly encryptedCredential?: string;
  /**
  * The name of the PingOne Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/pingone_connection#name PingoneConnection#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/pingone_connection pingfederate_pingone_connection}
*/
export class PingoneConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_pingone_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PingoneConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PingoneConnection to import
  * @param importFromId The id of the existing PingoneConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/pingone_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PingoneConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_pingone_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/pingone_connection pingfederate_pingone_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PingoneConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: PingoneConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_pingone_connection',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._connectionId = config.connectionId;
    this._credential = config.credential;
    this._description = config.description;
    this._encryptedCredential = config.encryptedCredential;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // credential - computed: false, optional: true, required: false
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  public resetCredential() {
    this._credential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
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

  // encrypted_credential - computed: true, optional: true, required: false
  private _encryptedCredential?: string; 
  public get encryptedCredential() {
    return this.getStringAttribute('encrypted_credential');
  }
  public set encryptedCredential(value: string) {
    this._encryptedCredential = value;
  }
  public resetEncryptedCredential() {
    this._encryptedCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedCredentialInput() {
    return this._encryptedCredential;
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // ping_one_authentication_api_endpoint - computed: true, optional: false, required: false
  public get pingOneAuthenticationApiEndpoint() {
    return this.getStringAttribute('ping_one_authentication_api_endpoint');
  }

  // ping_one_connection_id - computed: true, optional: false, required: false
  public get pingOneConnectionId() {
    return this.getStringAttribute('ping_one_connection_id');
  }

  // ping_one_management_api_endpoint - computed: true, optional: false, required: false
  public get pingOneManagementApiEndpoint() {
    return this.getStringAttribute('ping_one_management_api_endpoint');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      credential: cdktf.stringToTerraform(this._credential),
      description: cdktf.stringToTerraform(this._description),
      encrypted_credential: cdktf.stringToTerraform(this._encryptedCredential),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential: {
        value: cdktf.stringToHclTerraform(this._credential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted_credential: {
        value: cdktf.stringToHclTerraform(this._encryptedCredential),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
