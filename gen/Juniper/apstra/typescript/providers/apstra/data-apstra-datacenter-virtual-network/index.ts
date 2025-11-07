// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The blueprint ID where the Virtual Network is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network#blueprint_id DataApstraDatacenterVirtualNetwork#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * The id of the Virtual Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network#id DataApstraDatacenterVirtualNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Virtual Network Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network#name DataApstraDatacenterVirtualNetwork#name}
  */
  readonly name?: string;
}
export interface DataApstraDatacenterVirtualNetworkBindings {
}

export function dataApstraDatacenterVirtualNetworkBindingsToTerraform(struct?: DataApstraDatacenterVirtualNetworkBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterVirtualNetworkBindingsToHclTerraform(struct?: DataApstraDatacenterVirtualNetworkBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterVirtualNetworkBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraDatacenterVirtualNetworkBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterVirtualNetworkBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_ids - computed: true, optional: false, required: false
  public get accessIds() {
    return cdktf.Fn.tolist(this.getListAttribute('access_ids'));
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}

export class DataApstraDatacenterVirtualNetworkBindingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraDatacenterVirtualNetworkBindingsOutputReference {
    return new DataApstraDatacenterVirtualNetworkBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network apstra_datacenter_virtual_network}
*/
export class DataApstraDatacenterVirtualNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterVirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterVirtualNetwork to import
  * @param importFromId The id of the existing DataApstraDatacenterVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterVirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_virtual_network apstra_datacenter_virtual_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterVirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_virtual_network',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bindings - computed: true, optional: false, required: false
  private _bindings = new DataApstraDatacenterVirtualNetworkBindingsMap(this, "bindings");
  public get bindings() {
    return this._bindings;
  }

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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dhcp_service_enabled - computed: true, optional: false, required: false
  public get dhcpServiceEnabled() {
    return this.getBooleanAttribute('dhcp_service_enabled');
  }

  // export_route_targets - computed: true, optional: false, required: false
  public get exportRouteTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('export_route_targets'));
  }

  // had_prior_vni_config - computed: true, optional: false, required: false
  public get hadPriorVniConfig() {
    return this.getBooleanAttribute('had_prior_vni_config');
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

  // import_route_targets - computed: true, optional: false, required: false
  public get importRouteTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('import_route_targets'));
  }

  // ipv4_connectivity_enabled - computed: true, optional: false, required: false
  public get ipv4ConnectivityEnabled() {
    return this.getBooleanAttribute('ipv4_connectivity_enabled');
  }

  // ipv4_subnet - computed: true, optional: false, required: false
  public get ipv4Subnet() {
    return this.getStringAttribute('ipv4_subnet');
  }

  // ipv4_virtual_gateway - computed: true, optional: false, required: false
  public get ipv4VirtualGateway() {
    return this.getStringAttribute('ipv4_virtual_gateway');
  }

  // ipv4_virtual_gateway_enabled - computed: true, optional: false, required: false
  public get ipv4VirtualGatewayEnabled() {
    return this.getBooleanAttribute('ipv4_virtual_gateway_enabled');
  }

  // ipv6_connectivity_enabled - computed: true, optional: false, required: false
  public get ipv6ConnectivityEnabled() {
    return this.getBooleanAttribute('ipv6_connectivity_enabled');
  }

  // ipv6_subnet - computed: true, optional: false, required: false
  public get ipv6Subnet() {
    return this.getStringAttribute('ipv6_subnet');
  }

  // ipv6_virtual_gateway - computed: true, optional: false, required: false
  public get ipv6VirtualGateway() {
    return this.getStringAttribute('ipv6_virtual_gateway');
  }

  // ipv6_virtual_gateway_enabled - computed: true, optional: false, required: false
  public get ipv6VirtualGatewayEnabled() {
    return this.getBooleanAttribute('ipv6_virtual_gateway_enabled');
  }

  // l3_mtu - computed: true, optional: false, required: false
  public get l3Mtu() {
    return this.getNumberAttribute('l3_mtu');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // reserve_vlan - computed: true, optional: false, required: false
  public get reserveVlan() {
    return this.getBooleanAttribute('reserve_vlan');
  }

  // reserved_vlan_id - computed: true, optional: false, required: false
  public get reservedVlanId() {
    return this.getNumberAttribute('reserved_vlan_id');
  }

  // routing_zone_id - computed: true, optional: false, required: false
  public get routingZoneId() {
    return this.getStringAttribute('routing_zone_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vni - computed: true, optional: false, required: false
  public get vni() {
    return this.getNumberAttribute('vni');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
