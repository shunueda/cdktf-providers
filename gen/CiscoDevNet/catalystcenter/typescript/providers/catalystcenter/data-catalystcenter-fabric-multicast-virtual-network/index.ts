// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_multicast_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterFabricMulticastVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric site this multicast configuration is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_multicast_virtual_network#fabric_id DataCatalystcenterFabricMulticastVirtualNetwork#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Name of the virtual network associated with the fabric site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_multicast_virtual_network#virtual_network_name DataCatalystcenterFabricMulticastVirtualNetwork#virtual_network_name}
  */
  readonly virtualNetworkName: string;
}
export interface DataCatalystcenterFabricMulticastVirtualNetworkMulticastRps {
}

export function dataCatalystcenterFabricMulticastVirtualNetworkMulticastRpsToTerraform(struct?: DataCatalystcenterFabricMulticastVirtualNetworkMulticastRps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterFabricMulticastVirtualNetworkMulticastRpsToHclTerraform(struct?: DataCatalystcenterFabricMulticastVirtualNetworkMulticastRps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterFabricMulticastVirtualNetworkMulticastRpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterFabricMulticastVirtualNetworkMulticastRps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterFabricMulticastVirtualNetworkMulticastRps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_asm_ranges - computed: true, optional: false, required: false
  public get ipv4AsmRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_asm_ranges'));
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_asm_ranges - computed: true, optional: false, required: false
  public get ipv6AsmRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_asm_ranges'));
  }

  // is_default_v4_rp - computed: true, optional: false, required: false
  public get isDefaultV4Rp() {
    return this.getBooleanAttribute('is_default_v4_rp');
  }

  // is_default_v6_rp - computed: true, optional: false, required: false
  public get isDefaultV6Rp() {
    return this.getBooleanAttribute('is_default_v6_rp');
  }

  // network_device_ids - computed: true, optional: false, required: false
  public get networkDeviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_device_ids'));
  }

  // rp_device_location - computed: true, optional: false, required: false
  public get rpDeviceLocation() {
    return this.getStringAttribute('rp_device_location');
  }
}

export class DataCatalystcenterFabricMulticastVirtualNetworkMulticastRpsList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterFabricMulticastVirtualNetworkMulticastRpsOutputReference {
    return new DataCatalystcenterFabricMulticastVirtualNetworkMulticastRpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_multicast_virtual_network catalystcenter_fabric_multicast_virtual_network}
*/
export class DataCatalystcenterFabricMulticastVirtualNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_multicast_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterFabricMulticastVirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterFabricMulticastVirtualNetwork to import
  * @param importFromId The id of the existing DataCatalystcenterFabricMulticastVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_multicast_virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterFabricMulticastVirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_multicast_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_multicast_virtual_network catalystcenter_fabric_multicast_virtual_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterFabricMulticastVirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterFabricMulticastVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_multicast_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricId = config.fabricId;
    this._virtualNetworkName = config.virtualNetworkName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_pool_name - computed: true, optional: false, required: false
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }

  // ipv4_ssm_ranges - computed: true, optional: false, required: false
  public get ipv4SsmRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_ssm_ranges'));
  }

  // multicast_rps - computed: true, optional: false, required: false
  private _multicastRps = new DataCatalystcenterFabricMulticastVirtualNetworkMulticastRpsList(this, "multicast_rps", true);
  public get multicastRps() {
    return this._multicastRps;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
