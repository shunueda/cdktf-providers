// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_client_authorization_parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerOauthProfileClientAuthorizationParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the authorization parameter.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_client_authorization_parameter#authorization_parameter_name SolacebrokerOauthProfileClientAuthorizationParameter#authorization_parameter_name}
  */
  readonly authorizationParameterName: string;
  /**
  * The authorization parameter value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_client_authorization_parameter#authorization_parameter_value SolacebrokerOauthProfileClientAuthorizationParameter#authorization_parameter_value}
  */
  readonly authorizationParameterValue?: string;
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_client_authorization_parameter#oauth_profile_name SolacebrokerOauthProfileClientAuthorizationParameter#oauth_profile_name}
  */
  readonly oauthProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_client_authorization_parameter solacebroker_oauth_profile_client_authorization_parameter}
*/
export class SolacebrokerOauthProfileClientAuthorizationParameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_oauth_profile_client_authorization_parameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerOauthProfileClientAuthorizationParameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerOauthProfileClientAuthorizationParameter to import
  * @param importFromId The id of the existing SolacebrokerOauthProfileClientAuthorizationParameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_client_authorization_parameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerOauthProfileClientAuthorizationParameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_oauth_profile_client_authorization_parameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_client_authorization_parameter solacebroker_oauth_profile_client_authorization_parameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerOauthProfileClientAuthorizationParameterConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerOauthProfileClientAuthorizationParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_oauth_profile_client_authorization_parameter',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
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
    this._authorizationParameterName = config.authorizationParameterName;
    this._authorizationParameterValue = config.authorizationParameterValue;
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

  // authorization_parameter_value - computed: false, optional: true, required: false
  private _authorizationParameterValue?: string; 
  public get authorizationParameterValue() {
    return this.getStringAttribute('authorization_parameter_value');
  }
  public set authorizationParameterValue(value: string) {
    this._authorizationParameterValue = value;
  }
  public resetAuthorizationParameterValue() {
    this._authorizationParameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationParameterValueInput() {
    return this._authorizationParameterValue;
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
      authorization_parameter_value: cdktf.stringToTerraform(this._authorizationParameterValue),
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
      authorization_parameter_value: {
        value: cdktf.stringToHclTerraform(this._authorizationParameterValue),
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
