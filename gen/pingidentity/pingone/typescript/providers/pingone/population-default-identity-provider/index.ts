// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PopulationDefaultIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment that contains the population to assign a default Identity provider to.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default_identity_provider#environment_id PopulationDefaultIdentityProvider#environment_id}
  */
  readonly environmentId: string;
  /**
  * The ID of the Identity Provider to assign as the default for the given population.  To specify PingOne as the default identity provider, leave this field undefined, or assign a null value.  When defined, must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default_identity_provider#identity_provider_id PopulationDefaultIdentityProvider#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * The ID of the population to assign the default Identity Provider to.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default_identity_provider#population_id PopulationDefaultIdentityProvider#population_id}
  */
  readonly populationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default_identity_provider pingone_population_default_identity_provider}
*/
export class PopulationDefaultIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_population_default_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PopulationDefaultIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PopulationDefaultIdentityProvider to import
  * @param importFromId The id of the existing PopulationDefaultIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PopulationDefaultIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_population_default_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/population_default_identity_provider pingone_population_default_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PopulationDefaultIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PopulationDefaultIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_population_default_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._identityProviderId = config.identityProviderId;
    this._populationId = config.populationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }

  // population_id - computed: false, optional: false, required: true
  private _populationId?: string; 
  public get populationId() {
    return this.getStringAttribute('population_id');
  }
  public set populationId(value: string) {
    this._populationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get populationIdInput() {
    return this._populationId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      identity_provider_id: cdktf.stringToTerraform(this._identityProviderId),
      population_id: cdktf.stringToTerraform(this._populationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider_id: {
        value: cdktf.stringToHclTerraform(this._identityProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      population_id: {
        value: cdktf.stringToHclTerraform(this._populationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
