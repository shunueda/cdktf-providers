// https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/clientsecret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClientsecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The (entity) id of the client. Note that this should be set to client.id and not client.client_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/clientsecret#client_id Clientsecret#client_id}
  */
  readonly clientId: string;
  /**
  * A change in value for this field will force recreating the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/clientsecret#resource_taint_version Clientsecret#resource_taint_version}
  */
  readonly resourceTaintVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/clientsecret elvid_clientsecret}
*/
export class Clientsecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elvid_clientsecret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Clientsecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Clientsecret to import
  * @param importFromId The id of the existing Clientsecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/clientsecret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Clientsecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elvid_clientsecret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/clientsecret elvid_clientsecret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClientsecretConfig
  */
  public constructor(scope: Construct, id: string, config: ClientsecretConfig) {
    super(scope, id, {
      terraformResourceType: 'elvid_clientsecret',
      terraformGeneratorMetadata: {
        providerName: 'elvid',
        providerVersion: '2.1.1',
        providerVersionConstraint: '2.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._resourceTaintVersion = config.resourceTaintVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // hashed_value_starts_with - computed: true, optional: false, required: false
  public get hashedValueStartsWith() {
    return this.getStringAttribute('hashed_value_starts_with');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_taint_version - computed: true, optional: true, required: false
  private _resourceTaintVersion?: string; 
  public get resourceTaintVersion() {
    return this.getStringAttribute('resource_taint_version');
  }
  public set resourceTaintVersion(value: string) {
    this._resourceTaintVersion = value;
  }
  public resetResourceTaintVersion() {
    this._resourceTaintVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTaintVersionInput() {
    return this._resourceTaintVersion;
  }

  // secret_value - computed: true, optional: false, required: false
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      resource_taint_version: cdktf.stringToTerraform(this._resourceTaintVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_taint_version: {
        value: cdktf.stringToHclTerraform(this._resourceTaintVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
