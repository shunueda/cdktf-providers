// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderRacConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac#authentication_flow ProviderRac#authentication_flow}
  */
  readonly authenticationFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac#authorization_flow ProviderRac#authorization_flow}
  */
  readonly authorizationFlow: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `seconds=0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac#connection_expiry ProviderRac#connection_expiry}
  */
  readonly connectionExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac#id ProviderRac#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac#name ProviderRac#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac#property_mappings ProviderRac#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * JSON format expected. Use `jsonencode()` to pass objects. Defaults to `{}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac#settings ProviderRac#settings}
  */
  readonly settings?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac authentik_provider_rac}
*/
export class ProviderRac extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_provider_rac";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderRac resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderRac to import
  * @param importFromId The id of the existing ProviderRac that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderRac to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_provider_rac", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_rac authentik_provider_rac} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderRacConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderRacConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_provider_rac',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationFlow = config.authenticationFlow;
    this._authorizationFlow = config.authorizationFlow;
    this._connectionExpiry = config.connectionExpiry;
    this._id = config.id;
    this._name = config.name;
    this._propertyMappings = config.propertyMappings;
    this._settings = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_flow - computed: false, optional: true, required: false
  private _authenticationFlow?: string; 
  public get authenticationFlow() {
    return this.getStringAttribute('authentication_flow');
  }
  public set authenticationFlow(value: string) {
    this._authenticationFlow = value;
  }
  public resetAuthenticationFlow() {
    this._authenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowInput() {
    return this._authenticationFlow;
  }

  // authorization_flow - computed: false, optional: false, required: true
  private _authorizationFlow?: string; 
  public get authorizationFlow() {
    return this.getStringAttribute('authorization_flow');
  }
  public set authorizationFlow(value: string) {
    this._authorizationFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationFlowInput() {
    return this._authorizationFlow;
  }

  // connection_expiry - computed: false, optional: true, required: false
  private _connectionExpiry?: string; 
  public get connectionExpiry() {
    return this.getStringAttribute('connection_expiry');
  }
  public set connectionExpiry(value: string) {
    this._connectionExpiry = value;
  }
  public resetConnectionExpiry() {
    this._connectionExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionExpiryInput() {
    return this._connectionExpiry;
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

  // property_mappings - computed: false, optional: true, required: false
  private _propertyMappings?: string[]; 
  public get propertyMappings() {
    return this.getListAttribute('property_mappings');
  }
  public set propertyMappings(value: string[]) {
    this._propertyMappings = value;
  }
  public resetPropertyMappings() {
    this._propertyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsInput() {
    return this._propertyMappings;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_flow: cdktf.stringToTerraform(this._authenticationFlow),
      authorization_flow: cdktf.stringToTerraform(this._authorizationFlow),
      connection_expiry: cdktf.stringToTerraform(this._connectionExpiry),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      settings: cdktf.stringToTerraform(this._settings),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_flow: {
        value: cdktf.stringToHclTerraform(this._authenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_flow: {
        value: cdktf.stringToHclTerraform(this._authorizationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_expiry: {
        value: cdktf.stringToHclTerraform(this._connectionExpiry),
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
      property_mappings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      settings: {
        value: cdktf.stringToHclTerraform(this._settings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
