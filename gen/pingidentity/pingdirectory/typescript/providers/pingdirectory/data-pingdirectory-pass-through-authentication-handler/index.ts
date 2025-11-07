// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/pass_through_authentication_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryPassThroughAuthenticationHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/pass_through_authentication_handler#name DataPingdirectoryPassThroughAuthenticationHandler#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/pass_through_authentication_handler pingdirectory_pass_through_authentication_handler}
*/
export class DataPingdirectoryPassThroughAuthenticationHandler extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_pass_through_authentication_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryPassThroughAuthenticationHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryPassThroughAuthenticationHandler to import
  * @param importFromId The id of the existing DataPingdirectoryPassThroughAuthenticationHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/pass_through_authentication_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryPassThroughAuthenticationHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_pass_through_authentication_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/pass_through_authentication_handler pingdirectory_pass_through_authentication_handler} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryPassThroughAuthenticationHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryPassThroughAuthenticationHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_pass_through_authentication_handler',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_user_mapping_scim_filter - computed: true, optional: false, required: false
  public get additionalUserMappingScimFilter() {
    return this.getStringAttribute('additional_user_mapping_scim_filter');
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // auth_url - computed: true, optional: false, required: false
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }

  // bind_dn_pattern - computed: true, optional: false, required: false
  public get bindDnPattern() {
    return this.getStringAttribute('bind_dn_pattern');
  }

  // connection_criteria - computed: true, optional: false, required: false
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }

  // continue_on_failure_type - computed: true, optional: false, required: false
  public get continueOnFailureType() {
    return cdktf.Fn.tolist(this.getListAttribute('continue_on_failure_type'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dn_map - computed: true, optional: false, required: false
  public get dnMap() {
    return cdktf.Fn.tolist(this.getListAttribute('dn_map'));
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // http_proxy_external_server - computed: true, optional: false, required: false
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_local_entry_base_dn - computed: true, optional: false, required: false
  public get includedLocalEntryBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_local_entry_base_dn'));
  }

  // initial_connections - computed: true, optional: false, required: false
  public get initialConnections() {
    return this.getNumberAttribute('initial_connections');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // maximum_allowed_local_response_time - computed: true, optional: false, required: false
  public get maximumAllowedLocalResponseTime() {
    return this.getStringAttribute('maximum_allowed_local_response_time');
  }

  // maximum_allowed_nonlocal_response_time - computed: true, optional: false, required: false
  public get maximumAllowedNonlocalResponseTime() {
    return this.getStringAttribute('maximum_allowed_nonlocal_response_time');
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

  // oauth_client_id - computed: true, optional: false, required: false
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }

  // oauth_client_secret - computed: true, optional: false, required: false
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }

  // oauth_client_secret_passphrase_provider - computed: true, optional: false, required: false
  public get oauthClientSecretPassphraseProvider() {
    return this.getStringAttribute('oauth_client_secret_passphrase_provider');
  }

  // request_criteria - computed: true, optional: false, required: false
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }

  // search_base_dn - computed: true, optional: false, required: false
  public get searchBaseDn() {
    return this.getStringAttribute('search_base_dn');
  }

  // search_filter_pattern - computed: true, optional: false, required: false
  public get searchFilterPattern() {
    return this.getStringAttribute('search_filter_pattern');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return cdktf.Fn.tolist(this.getListAttribute('server'));
  }

  // server_access_mode - computed: true, optional: false, required: false
  public get serverAccessMode() {
    return this.getStringAttribute('server_access_mode');
  }

  // subordinate_pass_through_authentication_handler - computed: true, optional: false, required: false
  public get subordinatePassThroughAuthenticationHandler() {
    return cdktf.Fn.tolist(this.getListAttribute('subordinate_pass_through_authentication_handler'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_location - computed: true, optional: false, required: false
  public get useLocation() {
    return this.getBooleanAttribute('use_location');
  }

  // use_password_policy_control - computed: true, optional: false, required: false
  public get usePasswordPolicyControl() {
    return this.getBooleanAttribute('use_password_policy_control');
  }

  // user_mapping_local_attribute - computed: true, optional: false, required: false
  public get userMappingLocalAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('user_mapping_local_attribute'));
  }

  // user_mapping_remote_json_field - computed: true, optional: false, required: false
  public get userMappingRemoteJsonField() {
    return cdktf.Fn.tolist(this.getListAttribute('user_mapping_remote_json_field'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
