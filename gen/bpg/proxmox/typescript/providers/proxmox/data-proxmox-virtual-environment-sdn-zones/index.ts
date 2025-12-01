// https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_sdn_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentSdnZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter zones by type (simple, vlan, qinq, vxlan, evpn).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_sdn_zones#type DataProxmoxVirtualEnvironmentSdnZones#type}
  */
  readonly type?: string;
}
export interface DataProxmoxVirtualEnvironmentSdnZonesZones {
}

export function dataProxmoxVirtualEnvironmentSdnZonesZonesToTerraform(struct?: DataProxmoxVirtualEnvironmentSdnZonesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProxmoxVirtualEnvironmentSdnZonesZonesToHclTerraform(struct?: DataProxmoxVirtualEnvironmentSdnZonesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProxmoxVirtualEnvironmentSdnZonesZonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataProxmoxVirtualEnvironmentSdnZonesZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentSdnZonesZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_subnets - computed: true, optional: false, required: false
  public get advertiseSubnets() {
    return this.getBooleanAttribute('advertise_subnets');
  }

  // bridge - computed: true, optional: false, required: false
  public get bridge() {
    return this.getStringAttribute('bridge');
  }

  // controller - computed: true, optional: false, required: false
  public get controller() {
    return this.getStringAttribute('controller');
  }

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getStringAttribute('dhcp');
  }

  // disable_arp_nd_suppression - computed: true, optional: false, required: false
  public get disableArpNdSuppression() {
    return this.getBooleanAttribute('disable_arp_nd_suppression');
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getStringAttribute('dns');
  }

  // dns_zone - computed: true, optional: false, required: false
  public get dnsZone() {
    return this.getStringAttribute('dns_zone');
  }

  // exit_nodes - computed: true, optional: false, required: false
  public get exitNodes() {
    return cdktf.Fn.tolist(this.getListAttribute('exit_nodes'));
  }

  // exit_nodes_local_routing - computed: true, optional: false, required: false
  public get exitNodesLocalRouting() {
    return this.getBooleanAttribute('exit_nodes_local_routing');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipam - computed: true, optional: false, required: false
  public get ipam() {
    return this.getStringAttribute('ipam');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return cdktf.Fn.tolist(this.getListAttribute('nodes'));
  }

  // peers - computed: true, optional: false, required: false
  public get peers() {
    return cdktf.Fn.tolist(this.getListAttribute('peers'));
  }

  // pending - computed: true, optional: false, required: false
  public get pending() {
    return this.getBooleanAttribute('pending');
  }

  // primary_exit_node - computed: true, optional: false, required: false
  public get primaryExitNode() {
    return this.getStringAttribute('primary_exit_node');
  }

  // reverse_dns - computed: true, optional: false, required: false
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
  }

  // rt_import - computed: true, optional: false, required: false
  public get rtImport() {
    return this.getStringAttribute('rt_import');
  }

  // service_vlan - computed: true, optional: false, required: false
  public get serviceVlan() {
    return this.getNumberAttribute('service_vlan');
  }

  // service_vlan_protocol - computed: true, optional: false, required: false
  public get serviceVlanProtocol() {
    return this.getStringAttribute('service_vlan_protocol');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrf_vxlan - computed: true, optional: false, required: false
  public get vrfVxlan() {
    return this.getNumberAttribute('vrf_vxlan');
  }
}

export class DataProxmoxVirtualEnvironmentSdnZonesZonesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataProxmoxVirtualEnvironmentSdnZonesZonesOutputReference {
    return new DataProxmoxVirtualEnvironmentSdnZonesZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_sdn_zones proxmox_virtual_environment_sdn_zones}
*/
export class DataProxmoxVirtualEnvironmentSdnZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_sdn_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentSdnZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentSdnZones to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentSdnZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_sdn_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentSdnZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_sdn_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_sdn_zones proxmox_virtual_environment_sdn_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentSdnZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentSdnZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_sdn_zones',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.88.0',
        providerVersionConstraint: '0.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new DataProxmoxVirtualEnvironmentSdnZonesZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
