// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Lw4O6BindingTableTunnelAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#id Cgnv6Lw4O6BindingTableTunnelAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tunnel IPv6 Endpoint Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#ipv6_tunnel_addr Cgnv6Lw4O6BindingTableTunnelAddress#ipv6_tunnel_addr}
  */
  readonly ipv6TunnelAddr: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#name Cgnv6Lw4O6BindingTableTunnelAddress#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#user_tag Cgnv6Lw4O6BindingTableTunnelAddress#user_tag}
  */
  readonly userTag?: string;
  /**
  * nat_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#nat_address_list Cgnv6Lw4O6BindingTableTunnelAddress#nat_address_list}
  */
  readonly natAddressList?: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStruct[] | cdktf.IResolvable;
}
export interface Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#port_end Cgnv6Lw4O6BindingTableTunnelAddress#port_end}
  */
  readonly portEnd: number;
  /**
  * Single Port or Port Range Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#port_start Cgnv6Lw4O6BindingTableTunnelAddress#port_start}
  */
  readonly portStart: number;
  /**
  * Configure LW-4over6 IPIP Tunnel Endpoint Address (LW-4over6 Tunnel Endpoint Address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#tunnel_endpoint_address Cgnv6Lw4O6BindingTableTunnelAddress#tunnel_endpoint_address}
  */
  readonly tunnelEndpointAddress: string;
}

export function cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStructToTerraform(struct?: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_end: cdktf.numberToTerraform(struct!.portEnd),
    port_start: cdktf.numberToTerraform(struct!.portStart),
    tunnel_endpoint_address: cdktf.stringToTerraform(struct!.tunnelEndpointAddress),
  }
}


export function cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStructToHclTerraform(struct?: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_end: {
      value: cdktf.numberToHclTerraform(struct!.portEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_start: {
      value: cdktf.numberToHclTerraform(struct!.portStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_endpoint_address: {
      value: cdktf.stringToHclTerraform(struct!.tunnelEndpointAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portEnd = this._portEnd;
    }
    if (this._portStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portStart = this._portStart;
    }
    if (this._tunnelEndpointAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEndpointAddress = this._tunnelEndpointAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portEnd = undefined;
      this._portStart = undefined;
      this._tunnelEndpointAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portEnd = value.portEnd;
      this._portStart = value.portStart;
      this._tunnelEndpointAddress = value.tunnelEndpointAddress;
    }
  }

  // port_end - computed: false, optional: false, required: true
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
  }

  // port_start - computed: false, optional: false, required: true
  private _portStart?: number; 
  public get portStart() {
    return this.getNumberAttribute('port_start');
  }
  public set portStart(value: number) {
    this._portStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portStartInput() {
    return this._portStart;
  }

  // tunnel_endpoint_address - computed: false, optional: false, required: true
  private _tunnelEndpointAddress?: string; 
  public get tunnelEndpointAddress() {
    return this.getStringAttribute('tunnel_endpoint_address');
  }
  public set tunnelEndpointAddress(value: string) {
    this._tunnelEndpointAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEndpointAddressInput() {
    return this._tunnelEndpointAddress;
  }
}

export class Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStructOutputReference {
    return new Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStruct {
  /**
  * NAT IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#ipv4_nat_addr Cgnv6Lw4O6BindingTableTunnelAddress#ipv4_nat_addr}
  */
  readonly ipv4NatAddr: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#user_tag Cgnv6Lw4O6BindingTableTunnelAddress#user_tag}
  */
  readonly userTag?: string;
  /**
  * port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#port_range_list Cgnv6Lw4O6BindingTableTunnelAddress#port_range_list}
  */
  readonly portRangeList?: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStruct[] | cdktf.IResolvable;
}

export function cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStructToTerraform(struct?: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_nat_addr: cdktf.stringToTerraform(struct!.ipv4NatAddr),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    port_range_list: cdktf.listMapper(cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStructToTerraform, true)(struct!.portRangeList),
  }
}


export function cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStructToHclTerraform(struct?: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_nat_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4NatAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range_list: {
      value: cdktf.listMapperHcl(cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStructToHclTerraform, true)(struct!.portRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4NatAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NatAddr = this._ipv4NatAddr;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._portRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeList = this._portRangeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4NatAddr = undefined;
      this._userTag = undefined;
      this._portRangeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4NatAddr = value.ipv4NatAddr;
      this._userTag = value.userTag;
      this._portRangeList.internalValue = value.portRangeList;
    }
  }

  // ipv4_nat_addr - computed: false, optional: false, required: true
  private _ipv4NatAddr?: string; 
  public get ipv4NatAddr() {
    return this.getStringAttribute('ipv4_nat_addr');
  }
  public set ipv4NatAddr(value: string) {
    this._ipv4NatAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatAddrInput() {
    return this._ipv4NatAddr;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // port_range_list - computed: false, optional: true, required: false
  private _portRangeList = new Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStructList(this, "port_range_list", false);
  public get portRangeList() {
    return this._portRangeList;
  }
  public putPortRangeList(value: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListPortRangeListStruct[] | cdktf.IResolvable) {
    this._portRangeList.internalValue = value;
  }
  public resetPortRangeList() {
    this._portRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeListInput() {
    return this._portRangeList.internalValue;
  }
}

export class Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStructOutputReference {
    return new Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address thunder_cgnv6_lw_4o6_binding_table_tunnel_address}
*/
export class Cgnv6Lw4O6BindingTableTunnelAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lw_4o6_binding_table_tunnel_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Lw4O6BindingTableTunnelAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Lw4O6BindingTableTunnelAddress to import
  * @param importFromId The id of the existing Cgnv6Lw4O6BindingTableTunnelAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Lw4O6BindingTableTunnelAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lw_4o6_binding_table_tunnel_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address thunder_cgnv6_lw_4o6_binding_table_tunnel_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Lw4O6BindingTableTunnelAddressConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Lw4O6BindingTableTunnelAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lw_4o6_binding_table_tunnel_address',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipv6TunnelAddr = config.ipv6TunnelAddr;
    this._name = config.name;
    this._userTag = config.userTag;
    this._natAddressList.internalValue = config.natAddressList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv6_tunnel_addr - computed: false, optional: false, required: true
  private _ipv6TunnelAddr?: string; 
  public get ipv6TunnelAddr() {
    return this.getStringAttribute('ipv6_tunnel_addr');
  }
  public set ipv6TunnelAddr(value: string) {
    this._ipv6TunnelAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TunnelAddrInput() {
    return this._ipv6TunnelAddr;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // nat_address_list - computed: false, optional: true, required: false
  private _natAddressList = new Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStructList(this, "nat_address_list", false);
  public get natAddressList() {
    return this._natAddressList;
  }
  public putNatAddressList(value: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStruct[] | cdktf.IResolvable) {
    this._natAddressList.internalValue = value;
  }
  public resetNatAddressList() {
    this._natAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddressListInput() {
    return this._natAddressList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv6_tunnel_addr: cdktf.stringToTerraform(this._ipv6TunnelAddr),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      nat_address_list: cdktf.listMapper(cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStructToTerraform, true)(this._natAddressList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_tunnel_addr: {
        value: cdktf.stringToHclTerraform(this._ipv6TunnelAddr),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_address_list: {
        value: cdktf.listMapperHcl(cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStructToHclTerraform, true)(this._natAddressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Lw4O6BindingTableTunnelAddressNatAddressListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
