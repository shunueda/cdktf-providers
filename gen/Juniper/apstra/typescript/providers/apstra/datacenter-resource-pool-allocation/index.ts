// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_resource_pool_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterResourcePoolAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra ID of the Blueprint to which the Resource Pool should be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_resource_pool_allocation#blueprint_id DatacenterResourcePoolAllocation#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Apstra IDs of the Resource Pools to be allocated to the given Blueprint role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_resource_pool_allocation#pool_ids DatacenterResourcePoolAllocation#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * Fabric Role (Apstra Resource Group Name) must be one of:
  *   - access_asns
  *   - access_l3_peer_link_link_ips
  *   - access_loopback_ips
  *   - evpn_l3_vnis
  *   - generic_asns
  *   - generic_loopback_ips
  *   - generic_loopback_ips_ipv6
  *   - leaf_asns
  *   - leaf_l3_peer_links
  *   - leaf_l3_peer_links_ipv6
  *   - leaf_leaf_link_ips
  *   - leaf_loopback_ips
  *   - leaf_loopback_ips_ipv6
  *   - mlag_domain_svi_subnets
  *   - mlag_domain_svi_subnets_ipv6
  *   - spine_asns
  *   - spine_leaf_link_ips
  *   - spine_leaf_link_ips_ipv6
  *   - spine_loopback_ips
  *   - spine_loopback_ips_ipv6
  *   - spine_superspine_link_ips
  *   - spine_superspine_link_ips_ipv6
  *   - superspine_asns
  *   - superspine_loopback_ips
  *   - superspine_loopback_ips_ipv6
  *   - to_generic_link_ips
  *   - to_generic_link_ips_ipv6
  *   - virtual_network_svi_subnets
  *   - virtual_network_svi_subnets_ipv6
  *   - vni_virtual_network_ids
  *   - vtep_ips
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_resource_pool_allocation#role DatacenterResourcePoolAllocation#role}
  */
  readonly role: string;
  /**
  * Used to allocate a Resource Pool to a `role` associated with specific Routing Zone within a Blueprint, rather than to a fabric-wide `role`. `leaf_loopback_ips` and `virtual_network_svi_subnets` are examples of roles which can be allocaated to a specific Routing Zone. When omitted, the specified Resource Pools are allocated to a fabric-wide `role`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_resource_pool_allocation#routing_zone_id DatacenterResourcePoolAllocation#routing_zone_id}
  */
  readonly routingZoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_resource_pool_allocation apstra_datacenter_resource_pool_allocation}
*/
export class DatacenterResourcePoolAllocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_resource_pool_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterResourcePoolAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterResourcePoolAllocation to import
  * @param importFromId The id of the existing DatacenterResourcePoolAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_resource_pool_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterResourcePoolAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_resource_pool_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_resource_pool_allocation apstra_datacenter_resource_pool_allocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterResourcePoolAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterResourcePoolAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_resource_pool_allocation',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
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
    this._poolIds = config.poolIds;
    this._role = config.role;
    this._routingZoneId = config.routingZoneId;
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

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return cdktf.Fn.tolist(this.getListAttribute('pool_ids'));
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // routing_zone_id - computed: false, optional: true, required: false
  private _routingZoneId?: string; 
  public get routingZoneId() {
    return this.getStringAttribute('routing_zone_id');
  }
  public set routingZoneId(value: string) {
    this._routingZoneId = value;
  }
  public resetRoutingZoneId() {
    this._routingZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneIdInput() {
    return this._routingZoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._poolIds),
      role: cdktf.stringToTerraform(this._role),
      routing_zone_id: cdktf.stringToTerraform(this._routingZoneId),
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
      pool_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._poolIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_zone_id: {
        value: cdktf.stringToHclTerraform(this._routingZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
