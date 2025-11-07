// https://registry.terraform.io/providers/svenhamers/oauth/1.6.7/docs/data-sources/configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOauthConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svenhamers/oauth/1.6.7/docs/data-sources/configuration#well_known_endpoint DataOauthConfiguration#well_known_endpoint}
  */
  readonly wellKnownEndpoint: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/svenhamers/oauth/1.6.7/docs/data-sources/configuration oauth_configuration}
*/
export class DataOauthConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oauth_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOauthConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOauthConfiguration to import
  * @param importFromId The id of the existing DataOauthConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/svenhamers/oauth/1.6.7/docs/data-sources/configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOauthConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oauth_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/svenhamers/oauth/1.6.7/docs/data-sources/configuration oauth_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOauthConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOauthConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oauth_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oauth',
        providerVersion: '1.6.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._wellKnownEndpoint = config.wellKnownEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_issuer - computed: true, optional: false, required: false
  public get accessTokenIssuer() {
    return this.getStringAttribute('access_token_issuer');
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // device_authorization_endpoint - computed: true, optional: false, required: false
  public get deviceAuthorizationEndpoint() {
    return this.getStringAttribute('device_authorization_endpoint');
  }

  // end_session_endpoint - computed: true, optional: false, required: false
  public get endSessionEndpoint() {
    return this.getStringAttribute('end_session_endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // jwks_uri - computed: true, optional: false, required: false
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }

  // userinfo_endpoint - computed: true, optional: false, required: false
  public get userinfoEndpoint() {
    return this.getStringAttribute('userinfo_endpoint');
  }

  // well_known_endpoint - computed: false, optional: false, required: true
  private _wellKnownEndpoint?: string; 
  public get wellKnownEndpoint() {
    return this.getStringAttribute('well_known_endpoint');
  }
  public set wellKnownEndpoint(value: string) {
    this._wellKnownEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownEndpointInput() {
    return this._wellKnownEndpoint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      well_known_endpoint: cdktf.stringToTerraform(this._wellKnownEndpoint),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      well_known_endpoint: {
        value: cdktf.stringToHclTerraform(this._wellKnownEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
