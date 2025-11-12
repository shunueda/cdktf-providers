// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_client_allowed_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthProfileClientAllowedHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * An allowed value for the Host header.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_client_allowed_host#allowed_host OauthProfileClientAllowedHost#allowed_host}
  */
  readonly allowedHost: string;
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_client_allowed_host#oauth_profile_name OauthProfileClientAllowedHost#oauth_profile_name}
  */
  readonly oauthProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_client_allowed_host solacebroker_oauth_profile_client_allowed_host}
*/
export class OauthProfileClientAllowedHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_oauth_profile_client_allowed_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthProfileClientAllowedHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthProfileClientAllowedHost to import
  * @param importFromId The id of the existing OauthProfileClientAllowedHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_client_allowed_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthProfileClientAllowedHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_oauth_profile_client_allowed_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_client_allowed_host solacebroker_oauth_profile_client_allowed_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthProfileClientAllowedHostConfig
  */
  public constructor(scope: Construct, id: string, config: OauthProfileClientAllowedHostConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_oauth_profile_client_allowed_host',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedHost = config.allowedHost;
    this._oauthProfileName = config.oauthProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_host - computed: false, optional: false, required: true
  private _allowedHost?: string; 
  public get allowedHost() {
    return this.getStringAttribute('allowed_host');
  }
  public set allowedHost(value: string) {
    this._allowedHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostInput() {
    return this._allowedHost;
  }

  // oauth_profile_name - computed: false, optional: false, required: true
  private _oauthProfileName?: string; 
  public get oauthProfileName() {
    return this.getStringAttribute('oauth_profile_name');
  }
  public set oauthProfileName(value: string) {
    this._oauthProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProfileNameInput() {
    return this._oauthProfileName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_host: cdktf.stringToTerraform(this._allowedHost),
      oauth_profile_name: cdktf.stringToTerraform(this._oauthProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_host: {
        value: cdktf.stringToHclTerraform(this._allowedHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_profile_name: {
        value: cdktf.stringToHclTerraform(this._oauthProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
