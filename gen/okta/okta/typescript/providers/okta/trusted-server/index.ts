// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/trusted_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustedServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authorization server ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/trusted_server#auth_server_id TrustedServer#auth_server_id}
  */
  readonly authServerId: string;
  /**
  * A list of the authorization server IDs user want to trust
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/trusted_server#trusted TrustedServer#trusted}
  */
  readonly trusted: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/trusted_server okta_trusted_server}
*/
export class TrustedServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_trusted_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrustedServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrustedServer to import
  * @param importFromId The id of the existing TrustedServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/trusted_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrustedServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_trusted_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/trusted_server okta_trusted_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustedServerConfig
  */
  public constructor(scope: Construct, id: string, config: TrustedServerConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_trusted_server',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
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
    this._trusted = config.trusted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // trusted - computed: false, optional: false, required: true
  private _trusted?: string[]; 
  public get trusted() {
    return cdktf.Fn.tolist(this.getListAttribute('trusted'));
  }
  public set trusted(value: string[]) {
    this._trusted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedInput() {
    return this._trusted;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_server_id: cdktf.stringToTerraform(this._authServerId),
      trusted: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusted),
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
      trusted: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusted),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
