// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderRadiusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius#authorization_flow ProviderRadius#authorization_flow}
  */
  readonly authorizationFlow: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius#certificate ProviderRadius#certificate}
  */
  readonly certificate?: string;
  /**
  * Defaults to `0.0.0.0/0, ::/0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius#client_networks ProviderRadius#client_networks}
  */
  readonly clientNetworks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius#id ProviderRadius#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius#invalidation_flow ProviderRadius#invalidation_flow}
  */
  readonly invalidationFlow: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius#mfa_support ProviderRadius#mfa_support}
  */
  readonly mfaSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius#name ProviderRadius#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius#property_mappings ProviderRadius#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius#shared_secret ProviderRadius#shared_secret}
  */
  readonly sharedSecret: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius authentik_provider_radius}
*/
export class ProviderRadius extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_provider_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderRadius resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderRadius to import
  * @param importFromId The id of the existing ProviderRadius that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderRadius to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_provider_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_radius authentik_provider_radius} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderRadiusConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderRadiusConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_provider_radius',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizationFlow = config.authorizationFlow;
    this._certificate = config.certificate;
    this._clientNetworks = config.clientNetworks;
    this._id = config.id;
    this._invalidationFlow = config.invalidationFlow;
    this._mfaSupport = config.mfaSupport;
    this._name = config.name;
    this._propertyMappings = config.propertyMappings;
    this._sharedSecret = config.sharedSecret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // client_networks - computed: false, optional: true, required: false
  private _clientNetworks?: string; 
  public get clientNetworks() {
    return this.getStringAttribute('client_networks');
  }
  public set clientNetworks(value: string) {
    this._clientNetworks = value;
  }
  public resetClientNetworks() {
    this._clientNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNetworksInput() {
    return this._clientNetworks;
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

  // invalidation_flow - computed: false, optional: false, required: true
  private _invalidationFlow?: string; 
  public get invalidationFlow() {
    return this.getStringAttribute('invalidation_flow');
  }
  public set invalidationFlow(value: string) {
    this._invalidationFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidationFlowInput() {
    return this._invalidationFlow;
  }

  // mfa_support - computed: false, optional: true, required: false
  private _mfaSupport?: boolean | cdktf.IResolvable; 
  public get mfaSupport() {
    return this.getBooleanAttribute('mfa_support');
  }
  public set mfaSupport(value: boolean | cdktf.IResolvable) {
    this._mfaSupport = value;
  }
  public resetMfaSupport() {
    this._mfaSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaSupportInput() {
    return this._mfaSupport;
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

  // shared_secret - computed: false, optional: false, required: true
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_flow: cdktf.stringToTerraform(this._authorizationFlow),
      certificate: cdktf.stringToTerraform(this._certificate),
      client_networks: cdktf.stringToTerraform(this._clientNetworks),
      id: cdktf.stringToTerraform(this._id),
      invalidation_flow: cdktf.stringToTerraform(this._invalidationFlow),
      mfa_support: cdktf.booleanToTerraform(this._mfaSupport),
      name: cdktf.stringToTerraform(this._name),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      shared_secret: cdktf.stringToTerraform(this._sharedSecret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_flow: {
        value: cdktf.stringToHclTerraform(this._authorizationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_networks: {
        value: cdktf.stringToHclTerraform(this._clientNetworks),
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
      invalidation_flow: {
        value: cdktf.stringToHclTerraform(this._invalidationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_support: {
        value: cdktf.booleanToHclTerraform(this._mfaSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      shared_secret: {
        value: cdktf.stringToHclTerraform(this._sharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
