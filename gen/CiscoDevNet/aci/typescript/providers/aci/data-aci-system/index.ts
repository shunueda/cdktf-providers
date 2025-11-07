// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * POD Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/system#pod_id DataAciSystem#pod_id}
  */
  readonly podId: string;
  /**
  * The identifier of the System object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/system#system_id DataAciSystem#system_id}
  */
  readonly systemId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/system aci_system}
*/
export class DataAciSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciSystem to import
  * @param importFromId The id of the existing DataAciSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/system aci_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_system',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._podId = config.podId;
    this._systemId = config.systemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // boot_strap_tate - computed: true, optional: false, required: false
  public get bootStrapTate() {
    return this.getStringAttribute('boot_strap_tate');
  }

  // bootstrap_state - computed: true, optional: false, required: false
  public get bootstrapState() {
    return this.getStringAttribute('bootstrap_state');
  }

  // child_action - computed: true, optional: false, required: false
  public get childAction() {
    return this.getStringAttribute('child_action');
  }

  // cluster_time_diff - computed: true, optional: false, required: false
  public get clusterTimeDiff() {
    return this.getStringAttribute('cluster_time_diff');
  }

  // config_issues - computed: true, optional: false, required: false
  public get configIssues() {
    return this.getStringAttribute('config_issues');
  }

  // control_plane_mtu - computed: true, optional: false, required: false
  public get controlPlaneMtu() {
    return this.getStringAttribute('control_plane_mtu');
  }

  // current_time - computed: true, optional: false, required: false
  public get currentTime() {
    return this.getStringAttribute('current_time');
  }

  // enforce_subnet_check - computed: true, optional: false, required: false
  public get enforceSubnetCheck() {
    return this.getStringAttribute('enforce_subnet_check');
  }

  // etep_addr - computed: true, optional: false, required: false
  public get etepAddr() {
    return this.getStringAttribute('etep_addr');
  }

  // external_tep_address - computed: true, optional: false, required: false
  public get externalTepAddress() {
    return this.getStringAttribute('external_tep_address');
  }

  // fabric_domain - computed: true, optional: false, required: false
  public get fabricDomain() {
    return this.getStringAttribute('fabric_domain');
  }

  // fabric_id - computed: true, optional: false, required: false
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }

  // fabric_mac - computed: true, optional: false, required: false
  public get fabricMac() {
    return this.getStringAttribute('fabric_mac');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inb_mgmt_addr - computed: true, optional: false, required: false
  public get inbMgmtAddr() {
    return this.getStringAttribute('inb_mgmt_addr');
  }

  // inb_mgmt_addr6 - computed: true, optional: false, required: false
  public get inbMgmtAddr6() {
    return this.getStringAttribute('inb_mgmt_addr6');
  }

  // inb_mgmt_addr6_mask - computed: true, optional: false, required: false
  public get inbMgmtAddr6Mask() {
    return this.getStringAttribute('inb_mgmt_addr6_mask');
  }

  // inb_mgmt_addr_mask - computed: true, optional: false, required: false
  public get inbMgmtAddrMask() {
    return this.getStringAttribute('inb_mgmt_addr_mask');
  }

  // inb_mgmt_gateway - computed: true, optional: false, required: false
  public get inbMgmtGateway() {
    return this.getStringAttribute('inb_mgmt_gateway');
  }

  // inb_mgmt_gateway6 - computed: true, optional: false, required: false
  public get inbMgmtGateway6() {
    return this.getStringAttribute('inb_mgmt_gateway6');
  }

  // inband_management_address - computed: true, optional: false, required: false
  public get inbandManagementAddress() {
    return this.getStringAttribute('inband_management_address');
  }

  // inband_management_address_ipv6 - computed: true, optional: false, required: false
  public get inbandManagementAddressIpv6() {
    return this.getStringAttribute('inband_management_address_ipv6');
  }

  // inband_management_address_mask - computed: true, optional: false, required: false
  public get inbandManagementAddressMask() {
    return this.getStringAttribute('inband_management_address_mask');
  }

  // inband_management_address_mask_ipv6 - computed: true, optional: false, required: false
  public get inbandManagementAddressMaskIpv6() {
    return this.getStringAttribute('inband_management_address_mask_ipv6');
  }

  // inband_management_gateway - computed: true, optional: false, required: false
  public get inbandManagementGateway() {
    return this.getStringAttribute('inband_management_gateway');
  }

  // inband_management_gateway_ipv6 - computed: true, optional: false, required: false
  public get inbandManagementGatewayIpv6() {
    return this.getStringAttribute('inband_management_gateway_ipv6');
  }

  // last_reboot_time - computed: true, optional: false, required: false
  public get lastRebootTime() {
    return this.getStringAttribute('last_reboot_time');
  }

  // last_reset_reason - computed: true, optional: false, required: false
  public get lastResetReason() {
    return this.getStringAttribute('last_reset_reason');
  }

  // lc_own - computed: true, optional: false, required: false
  public get lcOwn() {
    return this.getStringAttribute('lc_own');
  }

  // mod_ts - computed: true, optional: false, required: false
  public get modTs() {
    return this.getStringAttribute('mod_ts');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // mon_pol_dn - computed: true, optional: false, required: false
  public get monPolDn() {
    return this.getStringAttribute('mon_pol_dn');
  }

  // monitoring_policy_dn - computed: true, optional: false, required: false
  public get monitoringPolicyDn() {
    return this.getStringAttribute('monitoring_policy_dn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_alias - computed: true, optional: false, required: false
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // oob_mgmt_addr - computed: true, optional: false, required: false
  public get oobMgmtAddr() {
    return this.getStringAttribute('oob_mgmt_addr');
  }

  // oob_mgmt_addr6 - computed: true, optional: false, required: false
  public get oobMgmtAddr6() {
    return this.getStringAttribute('oob_mgmt_addr6');
  }

  // oob_mgmt_addr6_mask - computed: true, optional: false, required: false
  public get oobMgmtAddr6Mask() {
    return this.getStringAttribute('oob_mgmt_addr6_mask');
  }

  // oob_mgmt_addr_mask - computed: true, optional: false, required: false
  public get oobMgmtAddrMask() {
    return this.getStringAttribute('oob_mgmt_addr_mask');
  }

  // oob_mgmt_gateway - computed: true, optional: false, required: false
  public get oobMgmtGateway() {
    return this.getStringAttribute('oob_mgmt_gateway');
  }

  // oob_mgmt_gateway6 - computed: true, optional: false, required: false
  public get oobMgmtGateway6() {
    return this.getStringAttribute('oob_mgmt_gateway6');
  }

  // out_of_band_management_address - computed: true, optional: false, required: false
  public get outOfBandManagementAddress() {
    return this.getStringAttribute('out_of_band_management_address');
  }

  // out_of_band_management_address_ipv6 - computed: true, optional: false, required: false
  public get outOfBandManagementAddressIpv6() {
    return this.getStringAttribute('out_of_band_management_address_ipv6');
  }

  // out_of_band_management_address_mask - computed: true, optional: false, required: false
  public get outOfBandManagementAddressMask() {
    return this.getStringAttribute('out_of_band_management_address_mask');
  }

  // out_of_band_management_address_mask_ipv6 - computed: true, optional: false, required: false
  public get outOfBandManagementAddressMaskIpv6() {
    return this.getStringAttribute('out_of_band_management_address_mask_ipv6');
  }

  // out_of_band_management_gateway - computed: true, optional: false, required: false
  public get outOfBandManagementGateway() {
    return this.getStringAttribute('out_of_band_management_gateway');
  }

  // out_of_band_management_gateway_ipv6 - computed: true, optional: false, required: false
  public get outOfBandManagementGatewayIpv6() {
    return this.getStringAttribute('out_of_band_management_gateway_ipv6');
  }

  // pod_id - computed: false, optional: false, required: true
  private _podId?: string; 
  public get podId() {
    return this.getStringAttribute('pod_id');
  }
  public set podId(value: string) {
    this._podId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdInput() {
    return this._podId;
  }

  // remote_leaf_auto_mode - computed: true, optional: false, required: false
  public get remoteLeafAutoMode() {
    return this.getStringAttribute('remote_leaf_auto_mode');
  }

  // remote_leaf_direct_mode - computed: true, optional: false, required: false
  public get remoteLeafDirectMode() {
    return this.getStringAttribute('remote_leaf_direct_mode');
  }

  // remote_leaf_group_id - computed: true, optional: false, required: false
  public get remoteLeafGroupId() {
    return this.getStringAttribute('remote_leaf_group_id');
  }

  // remote_leaf_operational_pod_id - computed: true, optional: false, required: false
  public get remoteLeafOperationalPodId() {
    return this.getStringAttribute('remote_leaf_operational_pod_id');
  }

  // remote_leaf_routable_mode - computed: true, optional: false, required: false
  public get remoteLeafRoutableMode() {
    return this.getStringAttribute('remote_leaf_routable_mode');
  }

  // remote_network_id - computed: true, optional: false, required: false
  public get remoteNetworkId() {
    return this.getStringAttribute('remote_network_id');
  }

  // remote_node - computed: true, optional: false, required: false
  public get remoteNode() {
    return this.getStringAttribute('remote_node');
  }

  // rl_auto_mode - computed: true, optional: false, required: false
  public get rlAutoMode() {
    return this.getStringAttribute('rl_auto_mode');
  }

  // rl_group_id - computed: true, optional: false, required: false
  public get rlGroupId() {
    return this.getStringAttribute('rl_group_id');
  }

  // rl_oper_pod_id - computed: true, optional: false, required: false
  public get rlOperPodId() {
    return this.getStringAttribute('rl_oper_pod_id');
  }

  // rl_routable_mode - computed: true, optional: false, required: false
  public get rlRoutableMode() {
    return this.getStringAttribute('rl_routable_mode');
  }

  // rldirect_mode - computed: true, optional: false, required: false
  public get rldirectMode() {
    return this.getStringAttribute('rldirect_mode');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_id - computed: false, optional: false, required: true
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // system_uptime - computed: true, optional: false, required: false
  public get systemUptime() {
    return this.getStringAttribute('system_uptime');
  }

  // tep_pool - computed: true, optional: false, required: false
  public get tepPool() {
    return this.getStringAttribute('tep_pool');
  }

  // unicast_xr_endpoint_learn_disable - computed: true, optional: false, required: false
  public get unicastXrEndpointLearnDisable() {
    return this.getStringAttribute('unicast_xr_endpoint_learn_disable');
  }

  // unicast_xr_ep_learn_disable - computed: true, optional: false, required: false
  public get unicastXrEpLearnDisable() {
    return this.getStringAttribute('unicast_xr_ep_learn_disable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // virtual_mode - computed: true, optional: false, required: false
  public get virtualMode() {
    return this.getStringAttribute('virtual_mode');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pod_id: cdktf.stringToTerraform(this._podId),
      system_id: cdktf.stringToTerraform(this._systemId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pod_id: {
        value: cdktf.stringToHclTerraform(this._podId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
