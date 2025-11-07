// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_allow_ip_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperEnforcementsAllowIpListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Restrict IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_allow_ip_list#restrict_ip_addresses DataKeeperEnforcementsAllowIpList#restrict_ip_addresses}
  */
  readonly restrictIpAddresses?: string[];
  /**
  * Restrict vault-access from IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_allow_ip_list#restrict_vault_ip_addresses DataKeeperEnforcementsAllowIpList#restrict_vault_ip_addresses}
  */
  readonly restrictVaultIpAddresses?: string[];
  /**
  * Restrict allowed IP ranges for tip zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_allow_ip_list#tip_zone_restrict_allowed_ip_ranges DataKeeperEnforcementsAllowIpList#tip_zone_restrict_allowed_ip_ranges}
  */
  readonly tipZoneRestrictAllowedIpRanges?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_allow_ip_list keeper_enforcements_allow_ip_list}
*/
export class DataKeeperEnforcementsAllowIpList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_enforcements_allow_ip_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperEnforcementsAllowIpList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperEnforcementsAllowIpList to import
  * @param importFromId The id of the existing DataKeeperEnforcementsAllowIpList that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_allow_ip_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperEnforcementsAllowIpList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_enforcements_allow_ip_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_allow_ip_list keeper_enforcements_allow_ip_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperEnforcementsAllowIpListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperEnforcementsAllowIpListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_enforcements_allow_ip_list',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._restrictIpAddresses = config.restrictIpAddresses;
    this._restrictVaultIpAddresses = config.restrictVaultIpAddresses;
    this._tipZoneRestrictAllowedIpRanges = config.tipZoneRestrictAllowedIpRanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // restrict_ip_addresses - computed: false, optional: true, required: false
  private _restrictIpAddresses?: string[]; 
  public get restrictIpAddresses() {
    return this.getListAttribute('restrict_ip_addresses');
  }
  public set restrictIpAddresses(value: string[]) {
    this._restrictIpAddresses = value;
  }
  public resetRestrictIpAddresses() {
    this._restrictIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictIpAddressesInput() {
    return this._restrictIpAddresses;
  }

  // restrict_vault_ip_addresses - computed: false, optional: true, required: false
  private _restrictVaultIpAddresses?: string[]; 
  public get restrictVaultIpAddresses() {
    return this.getListAttribute('restrict_vault_ip_addresses');
  }
  public set restrictVaultIpAddresses(value: string[]) {
    this._restrictVaultIpAddresses = value;
  }
  public resetRestrictVaultIpAddresses() {
    this._restrictVaultIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictVaultIpAddressesInput() {
    return this._restrictVaultIpAddresses;
  }

  // tip_zone_restrict_allowed_ip_ranges - computed: false, optional: true, required: false
  private _tipZoneRestrictAllowedIpRanges?: string[]; 
  public get tipZoneRestrictAllowedIpRanges() {
    return this.getListAttribute('tip_zone_restrict_allowed_ip_ranges');
  }
  public set tipZoneRestrictAllowedIpRanges(value: string[]) {
    this._tipZoneRestrictAllowedIpRanges = value;
  }
  public resetTipZoneRestrictAllowedIpRanges() {
    this._tipZoneRestrictAllowedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tipZoneRestrictAllowedIpRangesInput() {
    return this._tipZoneRestrictAllowedIpRanges;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      restrict_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictIpAddresses),
      restrict_vault_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictVaultIpAddresses),
      tip_zone_restrict_allowed_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tipZoneRestrictAllowedIpRanges),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      restrict_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictIpAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      restrict_vault_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictVaultIpAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tip_zone_restrict_allowed_ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tipZoneRestrictAllowedIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
