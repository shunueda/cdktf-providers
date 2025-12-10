// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/auth_server_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAuthServerKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/auth_server_keys#auth_server_id DataOktaAuthServerKeys#auth_server_id}
  */
  readonly authServerId: string;
  /**
  * The ID of the certificate key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/auth_server_keys#key_id DataOktaAuthServerKeys#key_id}
  */
  readonly keyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/auth_server_keys okta_auth_server_keys}
*/
export class DataOktaAuthServerKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_auth_server_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaAuthServerKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaAuthServerKeys to import
  * @param importFromId The id of the existing DataOktaAuthServerKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/auth_server_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaAuthServerKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_auth_server_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/auth_server_keys okta_auth_server_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAuthServerKeysConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaAuthServerKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server_keys',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authServerId = config.authServerId;
    this._keyId = config.keyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alg - computed: true, optional: false, required: false
  public get alg() {
    return this.getStringAttribute('alg');
  }

  // auth_server_id - computed: false, optional: false, required: true
  private _authServerId?: string; 
  public get authServerId() {
    return this.getStringAttribute('auth_server_id');
  }
  public set authServerId(value: string) {
    this._authServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerIdInput() {
    return this._authServerId;
  }

  // e - computed: true, optional: false, required: false
  public get e() {
    return this.getStringAttribute('e');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // n - computed: true, optional: false, required: false
  public get n() {
    return this.getStringAttribute('n');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // use - computed: true, optional: false, required: false
  public get use() {
    return this.getStringAttribute('use');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_server_id: cdktf.stringToTerraform(this._authServerId),
      key_id: cdktf.stringToTerraform(this._keyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_server_id: {
        value: cdktf.stringToHclTerraform(this._authServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
