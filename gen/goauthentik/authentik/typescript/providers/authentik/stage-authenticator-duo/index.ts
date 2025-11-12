// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageAuthenticatorDuoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo#admin_integration_key StageAuthenticatorDuo#admin_integration_key}
  */
  readonly adminIntegrationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo#admin_secret_key StageAuthenticatorDuo#admin_secret_key}
  */
  readonly adminSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo#api_hostname StageAuthenticatorDuo#api_hostname}
  */
  readonly apiHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo#client_id StageAuthenticatorDuo#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo#client_secret StageAuthenticatorDuo#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo#configure_flow StageAuthenticatorDuo#configure_flow}
  */
  readonly configureFlow?: string;
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo#friendly_name StageAuthenticatorDuo#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo#id StageAuthenticatorDuo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo#name StageAuthenticatorDuo#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo authentik_stage_authenticator_duo}
*/
export class StageAuthenticatorDuo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_authenticator_duo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageAuthenticatorDuo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageAuthenticatorDuo to import
  * @param importFromId The id of the existing StageAuthenticatorDuo that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageAuthenticatorDuo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_authenticator_duo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_duo authentik_stage_authenticator_duo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageAuthenticatorDuoConfig
  */
  public constructor(scope: Construct, id: string, config: StageAuthenticatorDuoConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_authenticator_duo',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminIntegrationKey = config.adminIntegrationKey;
    this._adminSecretKey = config.adminSecretKey;
    this._apiHostname = config.apiHostname;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._configureFlow = config.configureFlow;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_integration_key - computed: false, optional: true, required: false
  private _adminIntegrationKey?: string; 
  public get adminIntegrationKey() {
    return this.getStringAttribute('admin_integration_key');
  }
  public set adminIntegrationKey(value: string) {
    this._adminIntegrationKey = value;
  }
  public resetAdminIntegrationKey() {
    this._adminIntegrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIntegrationKeyInput() {
    return this._adminIntegrationKey;
  }

  // admin_secret_key - computed: false, optional: true, required: false
  private _adminSecretKey?: string; 
  public get adminSecretKey() {
    return this.getStringAttribute('admin_secret_key');
  }
  public set adminSecretKey(value: string) {
    this._adminSecretKey = value;
  }
  public resetAdminSecretKey() {
    this._adminSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSecretKeyInput() {
    return this._adminSecretKey;
  }

  // api_hostname - computed: false, optional: false, required: true
  private _apiHostname?: string; 
  public get apiHostname() {
    return this.getStringAttribute('api_hostname');
  }
  public set apiHostname(value: string) {
    this._apiHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHostnameInput() {
    return this._apiHostname;
  }

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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // configure_flow - computed: false, optional: true, required: false
  private _configureFlow?: string; 
  public get configureFlow() {
    return this.getStringAttribute('configure_flow');
  }
  public set configureFlow(value: string) {
    this._configureFlow = value;
  }
  public resetConfigureFlow() {
    this._configureFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureFlowInput() {
    return this._configureFlow;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_integration_key: cdktf.stringToTerraform(this._adminIntegrationKey),
      admin_secret_key: cdktf.stringToTerraform(this._adminSecretKey),
      api_hostname: cdktf.stringToTerraform(this._apiHostname),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      configure_flow: cdktf.stringToTerraform(this._configureFlow),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_integration_key: {
        value: cdktf.stringToHclTerraform(this._adminIntegrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_secret_key: {
        value: cdktf.stringToHclTerraform(this._adminSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_hostname: {
        value: cdktf.stringToHclTerraform(this._apiHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configure_flow: {
        value: cdktf.stringToHclTerraform(this._configureFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
