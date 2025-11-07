// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterRoutingZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone#blueprint_id DatacenterRoutingZone#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Set of DHCP server IPv4 or IPv6 addresses of DHCP servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone#dhcp_servers DatacenterRoutingZone#dhcp_servers}
  */
  readonly dhcpServers?: string[];
  /**
  * Used to export routes from the EVPN VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone#export_route_targets DatacenterRoutingZone#export_route_targets}
  */
  readonly exportRouteTargets?: string[];
  /**
  * Used to import routes into the EVPN VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone#import_route_targets DatacenterRoutingZone#import_route_targets}
  */
  readonly importRouteTargets?: string[];
  /**
  * Symmetric IRB Routing for EVPN on Junos devices makes use of an L3 VNI for inter-subnet routing which is embedded into EVPN Type2-routes to support better scaling for networks with large amounts of VLANs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone#junos_evpn_irb_mode DatacenterRoutingZone#junos_evpn_irb_mode}
  */
  readonly junosEvpnIrbMode?: string;
  /**
  * Name displayed in the Apstra web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone#name DatacenterRoutingZone#name}
  */
  readonly name: string;
  /**
  * Non-EVPN blueprints must use the default policy, so this field must be null. Set this attribute in an EVPN blueprint to use a non-default policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone#routing_policy_id DatacenterRoutingZone#routing_policy_id}
  */
  readonly routingPolicyId?: string;
  /**
  * Used for VLAN tagged Layer 3 links on external connections. Leave this field blank to have it automatically assigned from a static pool in the range of 2-4094, or enter a specific value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone#vlan_id DatacenterRoutingZone#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * VxLAN VNI associated with the routing zone. Leave this field blank to have it automatically assigned from an allocated resource pool, or enter a specific value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone#vni DatacenterRoutingZone#vni}
  */
  readonly vni?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone apstra_datacenter_routing_zone}
*/
export class DatacenterRoutingZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_routing_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterRoutingZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterRoutingZone to import
  * @param importFromId The id of the existing DatacenterRoutingZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterRoutingZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_routing_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_routing_zone apstra_datacenter_routing_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterRoutingZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterRoutingZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_routing_zone',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._dhcpServers = config.dhcpServers;
    this._exportRouteTargets = config.exportRouteTargets;
    this._importRouteTargets = config.importRouteTargets;
    this._junosEvpnIrbMode = config.junosEvpnIrbMode;
    this._name = config.name;
    this._routingPolicyId = config.routingPolicyId;
    this._vlanId = config.vlanId;
    this._vni = config.vni;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // dhcp_servers - computed: false, optional: true, required: false
  private _dhcpServers?: string[]; 
  public get dhcpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_servers'));
  }
  public set dhcpServers(value: string[]) {
    this._dhcpServers = value;
  }
  public resetDhcpServers() {
    this._dhcpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServersInput() {
    return this._dhcpServers;
  }

  // export_route_targets - computed: false, optional: true, required: false
  private _exportRouteTargets?: string[]; 
  public get exportRouteTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('export_route_targets'));
  }
  public set exportRouteTargets(value: string[]) {
    this._exportRouteTargets = value;
  }
  public resetExportRouteTargets() {
    this._exportRouteTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRouteTargetsInput() {
    return this._exportRouteTargets;
  }

  // had_prior_vlan_id_config - computed: true, optional: false, required: false
  public get hadPriorVlanIdConfig() {
    return this.getBooleanAttribute('had_prior_vlan_id_config');
  }

  // had_prior_vni_config - computed: true, optional: false, required: false
  public get hadPriorVniConfig() {
    return this.getBooleanAttribute('had_prior_vni_config');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_route_targets - computed: false, optional: true, required: false
  private _importRouteTargets?: string[]; 
  public get importRouteTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('import_route_targets'));
  }
  public set importRouteTargets(value: string[]) {
    this._importRouteTargets = value;
  }
  public resetImportRouteTargets() {
    this._importRouteTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRouteTargetsInput() {
    return this._importRouteTargets;
  }

  // junos_evpn_irb_mode - computed: true, optional: true, required: false
  private _junosEvpnIrbMode?: string; 
  public get junosEvpnIrbMode() {
    return this.getStringAttribute('junos_evpn_irb_mode');
  }
  public set junosEvpnIrbMode(value: string) {
    this._junosEvpnIrbMode = value;
  }
  public resetJunosEvpnIrbMode() {
    this._junosEvpnIrbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junosEvpnIrbModeInput() {
    return this._junosEvpnIrbMode;
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

  // routing_policy_id - computed: true, optional: true, required: false
  private _routingPolicyId?: string; 
  public get routingPolicyId() {
    return this.getStringAttribute('routing_policy_id');
  }
  public set routingPolicyId(value: string) {
    this._routingPolicyId = value;
  }
  public resetRoutingPolicyId() {
    this._routingPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyIdInput() {
    return this._routingPolicyId;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vni - computed: true, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      dhcp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpServers),
      export_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportRouteTargets),
      import_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importRouteTargets),
      junos_evpn_irb_mode: cdktf.stringToTerraform(this._junosEvpnIrbMode),
      name: cdktf.stringToTerraform(this._name),
      routing_policy_id: cdktf.stringToTerraform(this._routingPolicyId),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vni: cdktf.numberToTerraform(this._vni),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      export_route_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportRouteTargets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      import_route_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importRouteTargets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      junos_evpn_irb_mode: {
        value: cdktf.stringToHclTerraform(this._junosEvpnIrbMode),
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
      routing_policy_id: {
        value: cdktf.stringToHclTerraform(this._routingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
