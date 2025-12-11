// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_network_security_intrusion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceNetworkSecurityIntrusionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the detection ruleset `connectivity`/`balanced`/`security` (optional - omitting will leave current config unchanged). Default value is `balanced` if none currently saved
  *   - Choices: `balanced`, `connectivity`, `security`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_network_security_intrusion#ids_rulesets ApplianceNetworkSecurityIntrusion#ids_rulesets}
  */
  readonly idsRulesets?: string;
  /**
  * Set mode to `disabled`/`detection`/`prevention` (optional - omitting will leave current config unchanged)
  *   - Choices: `detection`, `disabled`, `prevention`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_network_security_intrusion#mode ApplianceNetworkSecurityIntrusion#mode}
  */
  readonly mode?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_network_security_intrusion#network_id ApplianceNetworkSecurityIntrusion#network_id}
  */
  readonly networkId: string;
  /**
  * list of IP addresses or subnets being excluded from protection (required if `useDefault` is false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_network_security_intrusion#protected_networks_excluded_cidr ApplianceNetworkSecurityIntrusion#protected_networks_excluded_cidr}
  */
  readonly protectedNetworksExcludedCidr?: string[];
  /**
  * list of IP addresses or subnets being protected (required if `useDefault` is false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_network_security_intrusion#protected_networks_included_cidr ApplianceNetworkSecurityIntrusion#protected_networks_included_cidr}
  */
  readonly protectedNetworksIncludedCidr?: string[];
  /**
  * true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_network_security_intrusion#protected_networks_use_default ApplianceNetworkSecurityIntrusion#protected_networks_use_default}
  */
  readonly protectedNetworksUseDefault?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_network_security_intrusion meraki_appliance_network_security_intrusion}
*/
export class ApplianceNetworkSecurityIntrusion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_network_security_intrusion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceNetworkSecurityIntrusion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceNetworkSecurityIntrusion to import
  * @param importFromId The id of the existing ApplianceNetworkSecurityIntrusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_network_security_intrusion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceNetworkSecurityIntrusion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_network_security_intrusion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_network_security_intrusion meraki_appliance_network_security_intrusion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceNetworkSecurityIntrusionConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceNetworkSecurityIntrusionConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_network_security_intrusion',
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
    this._idsRulesets = config.idsRulesets;
    this._mode = config.mode;
    this._networkId = config.networkId;
    this._protectedNetworksExcludedCidr = config.protectedNetworksExcludedCidr;
    this._protectedNetworksIncludedCidr = config.protectedNetworksIncludedCidr;
    this._protectedNetworksUseDefault = config.protectedNetworksUseDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids_rulesets - computed: false, optional: true, required: false
  private _idsRulesets?: string; 
  public get idsRulesets() {
    return this.getStringAttribute('ids_rulesets');
  }
  public set idsRulesets(value: string) {
    this._idsRulesets = value;
  }
  public resetIdsRulesets() {
    this._idsRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsRulesetsInput() {
    return this._idsRulesets;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // protected_networks_excluded_cidr - computed: false, optional: true, required: false
  private _protectedNetworksExcludedCidr?: string[]; 
  public get protectedNetworksExcludedCidr() {
    return this.getListAttribute('protected_networks_excluded_cidr');
  }
  public set protectedNetworksExcludedCidr(value: string[]) {
    this._protectedNetworksExcludedCidr = value;
  }
  public resetProtectedNetworksExcludedCidr() {
    this._protectedNetworksExcludedCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedNetworksExcludedCidrInput() {
    return this._protectedNetworksExcludedCidr;
  }

  // protected_networks_included_cidr - computed: false, optional: true, required: false
  private _protectedNetworksIncludedCidr?: string[]; 
  public get protectedNetworksIncludedCidr() {
    return this.getListAttribute('protected_networks_included_cidr');
  }
  public set protectedNetworksIncludedCidr(value: string[]) {
    this._protectedNetworksIncludedCidr = value;
  }
  public resetProtectedNetworksIncludedCidr() {
    this._protectedNetworksIncludedCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedNetworksIncludedCidrInput() {
    return this._protectedNetworksIncludedCidr;
  }

  // protected_networks_use_default - computed: false, optional: true, required: false
  private _protectedNetworksUseDefault?: boolean | cdktf.IResolvable; 
  public get protectedNetworksUseDefault() {
    return this.getBooleanAttribute('protected_networks_use_default');
  }
  public set protectedNetworksUseDefault(value: boolean | cdktf.IResolvable) {
    this._protectedNetworksUseDefault = value;
  }
  public resetProtectedNetworksUseDefault() {
    this._protectedNetworksUseDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedNetworksUseDefaultInput() {
    return this._protectedNetworksUseDefault;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ids_rulesets: cdktf.stringToTerraform(this._idsRulesets),
      mode: cdktf.stringToTerraform(this._mode),
      network_id: cdktf.stringToTerraform(this._networkId),
      protected_networks_excluded_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protectedNetworksExcludedCidr),
      protected_networks_included_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protectedNetworksIncludedCidr),
      protected_networks_use_default: cdktf.booleanToTerraform(this._protectedNetworksUseDefault),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ids_rulesets: {
        value: cdktf.stringToHclTerraform(this._idsRulesets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_networks_excluded_cidr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protectedNetworksExcludedCidr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      protected_networks_included_cidr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protectedNetworksIncludedCidr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      protected_networks_use_default: {
        value: cdktf.booleanToHclTerraform(this._protectedNetworksUseDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
