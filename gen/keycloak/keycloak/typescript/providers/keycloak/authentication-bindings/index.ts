// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationBindingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Which flow should be used for BrowserFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings#browser_flow AuthenticationBindings#browser_flow}
  */
  readonly browserFlow?: string;
  /**
  * Which flow should be used for ClientAuthenticationFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings#client_authentication_flow AuthenticationBindings#client_authentication_flow}
  */
  readonly clientAuthenticationFlow?: string;
  /**
  * Which flow should be used for DirectGrantFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings#direct_grant_flow AuthenticationBindings#direct_grant_flow}
  */
  readonly directGrantFlow?: string;
  /**
  * Which flow should be used for DockerAuthenticationFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings#docker_authentication_flow AuthenticationBindings#docker_authentication_flow}
  */
  readonly dockerAuthenticationFlow?: string;
  /**
  * Which flow should be used for FirstBrokerLoginFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings#first_broker_login_flow AuthenticationBindings#first_broker_login_flow}
  */
  readonly firstBrokerLoginFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings#id AuthenticationBindings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings#realm_id AuthenticationBindings#realm_id}
  */
  readonly realmId: string;
  /**
  * Which flow should be used for RegistrationFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings#registration_flow AuthenticationBindings#registration_flow}
  */
  readonly registrationFlow?: string;
  /**
  * Which flow should be used for ResetCredentialsFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings#reset_credentials_flow AuthenticationBindings#reset_credentials_flow}
  */
  readonly resetCredentialsFlow?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings keycloak_authentication_bindings}
*/
export class AuthenticationBindings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_authentication_bindings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationBindings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationBindings to import
  * @param importFromId The id of the existing AuthenticationBindings that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationBindings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_authentication_bindings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/authentication_bindings keycloak_authentication_bindings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationBindingsConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationBindingsConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_authentication_bindings',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._browserFlow = config.browserFlow;
    this._clientAuthenticationFlow = config.clientAuthenticationFlow;
    this._directGrantFlow = config.directGrantFlow;
    this._dockerAuthenticationFlow = config.dockerAuthenticationFlow;
    this._firstBrokerLoginFlow = config.firstBrokerLoginFlow;
    this._id = config.id;
    this._realmId = config.realmId;
    this._registrationFlow = config.registrationFlow;
    this._resetCredentialsFlow = config.resetCredentialsFlow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // browser_flow - computed: true, optional: true, required: false
  private _browserFlow?: string; 
  public get browserFlow() {
    return this.getStringAttribute('browser_flow');
  }
  public set browserFlow(value: string) {
    this._browserFlow = value;
  }
  public resetBrowserFlow() {
    this._browserFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserFlowInput() {
    return this._browserFlow;
  }

  // client_authentication_flow - computed: true, optional: true, required: false
  private _clientAuthenticationFlow?: string; 
  public get clientAuthenticationFlow() {
    return this.getStringAttribute('client_authentication_flow');
  }
  public set clientAuthenticationFlow(value: string) {
    this._clientAuthenticationFlow = value;
  }
  public resetClientAuthenticationFlow() {
    this._clientAuthenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationFlowInput() {
    return this._clientAuthenticationFlow;
  }

  // direct_grant_flow - computed: true, optional: true, required: false
  private _directGrantFlow?: string; 
  public get directGrantFlow() {
    return this.getStringAttribute('direct_grant_flow');
  }
  public set directGrantFlow(value: string) {
    this._directGrantFlow = value;
  }
  public resetDirectGrantFlow() {
    this._directGrantFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directGrantFlowInput() {
    return this._directGrantFlow;
  }

  // docker_authentication_flow - computed: true, optional: true, required: false
  private _dockerAuthenticationFlow?: string; 
  public get dockerAuthenticationFlow() {
    return this.getStringAttribute('docker_authentication_flow');
  }
  public set dockerAuthenticationFlow(value: string) {
    this._dockerAuthenticationFlow = value;
  }
  public resetDockerAuthenticationFlow() {
    this._dockerAuthenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerAuthenticationFlowInput() {
    return this._dockerAuthenticationFlow;
  }

  // first_broker_login_flow - computed: true, optional: true, required: false
  private _firstBrokerLoginFlow?: string; 
  public get firstBrokerLoginFlow() {
    return this.getStringAttribute('first_broker_login_flow');
  }
  public set firstBrokerLoginFlow(value: string) {
    this._firstBrokerLoginFlow = value;
  }
  public resetFirstBrokerLoginFlow() {
    this._firstBrokerLoginFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstBrokerLoginFlowInput() {
    return this._firstBrokerLoginFlow;
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // registration_flow - computed: true, optional: true, required: false
  private _registrationFlow?: string; 
  public get registrationFlow() {
    return this.getStringAttribute('registration_flow');
  }
  public set registrationFlow(value: string) {
    this._registrationFlow = value;
  }
  public resetRegistrationFlow() {
    this._registrationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationFlowInput() {
    return this._registrationFlow;
  }

  // reset_credentials_flow - computed: true, optional: true, required: false
  private _resetCredentialsFlow?: string; 
  public get resetCredentialsFlow() {
    return this.getStringAttribute('reset_credentials_flow');
  }
  public set resetCredentialsFlow(value: string) {
    this._resetCredentialsFlow = value;
  }
  public resetResetCredentialsFlow() {
    this._resetCredentialsFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetCredentialsFlowInput() {
    return this._resetCredentialsFlow;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      browser_flow: cdktf.stringToTerraform(this._browserFlow),
      client_authentication_flow: cdktf.stringToTerraform(this._clientAuthenticationFlow),
      direct_grant_flow: cdktf.stringToTerraform(this._directGrantFlow),
      docker_authentication_flow: cdktf.stringToTerraform(this._dockerAuthenticationFlow),
      first_broker_login_flow: cdktf.stringToTerraform(this._firstBrokerLoginFlow),
      id: cdktf.stringToTerraform(this._id),
      realm_id: cdktf.stringToTerraform(this._realmId),
      registration_flow: cdktf.stringToTerraform(this._registrationFlow),
      reset_credentials_flow: cdktf.stringToTerraform(this._resetCredentialsFlow),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      browser_flow: {
        value: cdktf.stringToHclTerraform(this._browserFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_authentication_flow: {
        value: cdktf.stringToHclTerraform(this._clientAuthenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_grant_flow: {
        value: cdktf.stringToHclTerraform(this._directGrantFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_authentication_flow: {
        value: cdktf.stringToHclTerraform(this._dockerAuthenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_broker_login_flow: {
        value: cdktf.stringToHclTerraform(this._firstBrokerLoginFlow),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_flow: {
        value: cdktf.stringToHclTerraform(this._registrationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_credentials_flow: {
        value: cdktf.stringToHclTerraform(this._resetCredentialsFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
