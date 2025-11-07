// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationAdaptivePolicySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of network IDs with adaptive policy enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_settings#enabled_networks OrganizationAdaptivePolicySettings#enabled_networks}
  */
  readonly enabledNetworks?: string[];
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_settings#organization_id OrganizationAdaptivePolicySettings#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_settings meraki_organization_adaptive_policy_settings}
*/
export class OrganizationAdaptivePolicySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_adaptive_policy_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationAdaptivePolicySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationAdaptivePolicySettings to import
  * @param importFromId The id of the existing OrganizationAdaptivePolicySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationAdaptivePolicySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_adaptive_policy_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_settings meraki_organization_adaptive_policy_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationAdaptivePolicySettingsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationAdaptivePolicySettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_adaptive_policy_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabledNetworks = config.enabledNetworks;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled_networks - computed: false, optional: true, required: false
  private _enabledNetworks?: string[]; 
  public get enabledNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_networks'));
  }
  public set enabledNetworks(value: string[]) {
    this._enabledNetworks = value;
  }
  public resetEnabledNetworks() {
    this._enabledNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledNetworksInput() {
    return this._enabledNetworks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledNetworks),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledNetworks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
