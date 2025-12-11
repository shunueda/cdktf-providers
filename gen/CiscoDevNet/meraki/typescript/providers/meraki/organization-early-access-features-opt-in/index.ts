// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_early_access_features_opt_in
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationEarlyAccessFeaturesOptInConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of network IDs to apply the opt-in to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_early_access_features_opt_in#limit_scope_to_networks OrganizationEarlyAccessFeaturesOptIn#limit_scope_to_networks}
  */
  readonly limitScopeToNetworks?: string[];
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_early_access_features_opt_in#organization_id OrganizationEarlyAccessFeaturesOptIn#organization_id}
  */
  readonly organizationId: string;
  /**
  * Short name of the early access feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_early_access_features_opt_in#short_name OrganizationEarlyAccessFeaturesOptIn#short_name}
  */
  readonly shortName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_early_access_features_opt_in meraki_organization_early_access_features_opt_in}
*/
export class OrganizationEarlyAccessFeaturesOptIn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_early_access_features_opt_in";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationEarlyAccessFeaturesOptIn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationEarlyAccessFeaturesOptIn to import
  * @param importFromId The id of the existing OrganizationEarlyAccessFeaturesOptIn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_early_access_features_opt_in#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationEarlyAccessFeaturesOptIn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_early_access_features_opt_in", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_early_access_features_opt_in meraki_organization_early_access_features_opt_in} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationEarlyAccessFeaturesOptInConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationEarlyAccessFeaturesOptInConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_early_access_features_opt_in',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._limitScopeToNetworks = config.limitScopeToNetworks;
    this._organizationId = config.organizationId;
    this._shortName = config.shortName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // limit_scope_to_networks - computed: false, optional: true, required: false
  private _limitScopeToNetworks?: string[]; 
  public get limitScopeToNetworks() {
    return this.getListAttribute('limit_scope_to_networks');
  }
  public set limitScopeToNetworks(value: string[]) {
    this._limitScopeToNetworks = value;
  }
  public resetLimitScopeToNetworks() {
    this._limitScopeToNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitScopeToNetworksInput() {
    return this._limitScopeToNetworks;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // short_name - computed: false, optional: false, required: true
  private _shortName?: string; 
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      limit_scope_to_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limitScopeToNetworks),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      short_name: cdktf.stringToTerraform(this._shortName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      limit_scope_to_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._limitScopeToNetworks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_name: {
        value: cdktf.stringToHclTerraform(this._shortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
