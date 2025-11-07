// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_authorization_parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerOauthProfileClientAuthorizationParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the authorization parameter.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_authorization_parameter#authorization_parameter_name DataSolacebrokerOauthProfileClientAuthorizationParameter#authorization_parameter_name}
  */
  readonly authorizationParameterName: string;
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_authorization_parameter#oauth_profile_name DataSolacebrokerOauthProfileClientAuthorizationParameter#oauth_profile_name}
  */
  readonly oauthProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_authorization_parameter solacebroker_oauth_profile_client_authorization_parameter}
*/
export class DataSolacebrokerOauthProfileClientAuthorizationParameter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_oauth_profile_client_authorization_parameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerOauthProfileClientAuthorizationParameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerOauthProfileClientAuthorizationParameter to import
  * @param importFromId The id of the existing DataSolacebrokerOauthProfileClientAuthorizationParameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_authorization_parameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerOauthProfileClientAuthorizationParameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_oauth_profile_client_authorization_parameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_authorization_parameter solacebroker_oauth_profile_client_authorization_parameter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerOauthProfileClientAuthorizationParameterConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerOauthProfileClientAuthorizationParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_oauth_profile_client_authorization_parameter',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizationParameterName = config.authorizationParameterName;
    this._oauthProfileName = config.oauthProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_parameter_name - computed: false, optional: false, required: true
  private _authorizationParameterName?: string; 
  public get authorizationParameterName() {
    return this.getStringAttribute('authorization_parameter_name');
  }
  public set authorizationParameterName(value: string) {
    this._authorizationParameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationParameterNameInput() {
    return this._authorizationParameterName;
  }

  // authorization_parameter_value - computed: true, optional: false, required: false
  public get authorizationParameterValue() {
    return this.getStringAttribute('authorization_parameter_value');
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
      authorization_parameter_name: cdktf.stringToTerraform(this._authorizationParameterName),
      oauth_profile_name: cdktf.stringToTerraform(this._oauthProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_parameter_name: {
        value: cdktf.stringToHclTerraform(this._authorizationParameterName),
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
