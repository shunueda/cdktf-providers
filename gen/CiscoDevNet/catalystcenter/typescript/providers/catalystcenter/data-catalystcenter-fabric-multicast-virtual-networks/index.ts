// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/fabric_multicast_virtual_networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterFabricMulticastVirtualNetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric site this multicast configuration is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/fabric_multicast_virtual_networks#fabric_id DataCatalystcenterFabricMulticastVirtualNetworks#fabric_id}
  */
  readonly fabricId: string;
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/fabric_multicast_virtual_networks#id DataCatalystcenterFabricMulticastVirtualNetworks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRps {
}

export function dataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRpsToTerraform(struct?: DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRpsToHclTerraform(struct?: DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRps | undefined) {
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

export class DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRpsList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRpsOutputReference {
    return new DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworks {
}

export function dataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksToTerraform(struct?: DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksToHclTerraform(struct?: DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fabric_id - computed: true, optional: false, required: false
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
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
  private _multicastRps = new DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksMulticastRpsList(this, "multicast_rps", true);
  public get multicastRps() {
    return this._multicastRps;
  }

  // virtual_network_name - computed: true, optional: false, required: false
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
}

export class DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksOutputReference {
    return new DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/fabric_multicast_virtual_networks catalystcenter_fabric_multicast_virtual_networks}
*/
export class DataCatalystcenterFabricMulticastVirtualNetworks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_multicast_virtual_networks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterFabricMulticastVirtualNetworks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterFabricMulticastVirtualNetworks to import
  * @param importFromId The id of the existing DataCatalystcenterFabricMulticastVirtualNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/fabric_multicast_virtual_networks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterFabricMulticastVirtualNetworks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_multicast_virtual_networks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/fabric_multicast_virtual_networks catalystcenter_fabric_multicast_virtual_networks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterFabricMulticastVirtualNetworksConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterFabricMulticastVirtualNetworksConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_multicast_virtual_networks',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
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
    this._id = config.id;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // virtual_networks - computed: true, optional: false, required: false
  private _virtualNetworks = new DataCatalystcenterFabricMulticastVirtualNetworksVirtualNetworksList(this, "virtual_networks", true);
  public get virtualNetworks() {
    return this._virtualNetworks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
