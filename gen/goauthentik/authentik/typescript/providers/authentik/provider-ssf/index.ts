// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_ssf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderSsfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `days=30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_ssf#event_retention ProviderSsf#event_retention}
  */
  readonly eventRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_ssf#id ProviderSsf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * JWTs issued by any of the configured providers can be used to authenticate on behalf of this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_ssf#jwt_federation_providers ProviderSsf#jwt_federation_providers}
  */
  readonly jwtFederationProviders?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_ssf#name ProviderSsf#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_ssf#signing_key ProviderSsf#signing_key}
  */
  readonly signingKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_ssf authentik_provider_ssf}
*/
export class ProviderSsf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_provider_ssf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderSsf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderSsf to import
  * @param importFromId The id of the existing ProviderSsf that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_ssf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderSsf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_provider_ssf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/provider_ssf authentik_provider_ssf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderSsfConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderSsfConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_provider_ssf',
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
    this._eventRetention = config.eventRetention;
    this._id = config.id;
    this._jwtFederationProviders = config.jwtFederationProviders;
    this._name = config.name;
    this._signingKey = config.signingKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_retention - computed: false, optional: true, required: false
  private _eventRetention?: string; 
  public get eventRetention() {
    return this.getStringAttribute('event_retention');
  }
  public set eventRetention(value: string) {
    this._eventRetention = value;
  }
  public resetEventRetention() {
    this._eventRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRetentionInput() {
    return this._eventRetention;
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

  // jwt_federation_providers - computed: false, optional: true, required: false
  private _jwtFederationProviders?: number[]; 
  public get jwtFederationProviders() {
    return this.getNumberListAttribute('jwt_federation_providers');
  }
  public set jwtFederationProviders(value: number[]) {
    this._jwtFederationProviders = value;
  }
  public resetJwtFederationProviders() {
    this._jwtFederationProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtFederationProvidersInput() {
    return this._jwtFederationProviders;
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

  // signing_key - computed: false, optional: true, required: false
  private _signingKey?: string; 
  public get signingKey() {
    return this.getStringAttribute('signing_key');
  }
  public set signingKey(value: string) {
    this._signingKey = value;
  }
  public resetSigningKey() {
    this._signingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyInput() {
    return this._signingKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_retention: cdktf.stringToTerraform(this._eventRetention),
      id: cdktf.stringToTerraform(this._id),
      jwt_federation_providers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._jwtFederationProviders),
      name: cdktf.stringToTerraform(this._name),
      signing_key: cdktf.stringToTerraform(this._signingKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_retention: {
        value: cdktf.stringToHclTerraform(this._eventRetention),
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
      jwt_federation_providers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._jwtFederationProviders),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_key: {
        value: cdktf.stringToHclTerraform(this._signingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
