// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkLldpManagementAddressIpv6AddrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr#id NetworkLldpManagementAddressIpv6Addr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure lldp management-address, subtype is ipv6 (lldp management-address ipv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr#ipv6 NetworkLldpManagementAddressIpv6Addr#ipv6}
  */
  readonly ipv6: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr#uuid NetworkLldpManagementAddressIpv6Addr#uuid}
  */
  readonly uuid?: string;
  /**
  * interface_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr#interface_ipv6 NetworkLldpManagementAddressIpv6Addr#interface_ipv6}
  */
  readonly interfaceIpv6?: NetworkLldpManagementAddressIpv6AddrInterfaceIpv6;
}
export interface NetworkLldpManagementAddressIpv6AddrInterfaceIpv6 {
  /**
  * configure lldp management-address interface ethernet (lldp management-address interface port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr#ipv6_eth NetworkLldpManagementAddressIpv6Addr#ipv6_eth}
  */
  readonly ipv6Eth?: number;
  /**
  * configure lldp management-address interface management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr#ipv6_mgmt NetworkLldpManagementAddressIpv6Addr#ipv6_mgmt}
  */
  readonly ipv6Mgmt?: number;
  /**
  * configure lldp management-address interface ve (lldp management-address interface port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr#ipv6_ve NetworkLldpManagementAddressIpv6Addr#ipv6_ve}
  */
  readonly ipv6Ve?: number;
}

export function networkLldpManagementAddressIpv6AddrInterfaceIpv6ToTerraform(struct?: NetworkLldpManagementAddressIpv6AddrInterfaceIpv6OutputReference | NetworkLldpManagementAddressIpv6AddrInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_eth: cdktf.numberToTerraform(struct!.ipv6Eth),
    ipv6_mgmt: cdktf.numberToTerraform(struct!.ipv6Mgmt),
    ipv6_ve: cdktf.numberToTerraform(struct!.ipv6Ve),
  }
}


export function networkLldpManagementAddressIpv6AddrInterfaceIpv6ToHclTerraform(struct?: NetworkLldpManagementAddressIpv6AddrInterfaceIpv6OutputReference | NetworkLldpManagementAddressIpv6AddrInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_eth: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Eth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_mgmt: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Mgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_ve: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpManagementAddressIpv6AddrInterfaceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLldpManagementAddressIpv6AddrInterfaceIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Eth !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Eth = this._ipv6Eth;
    }
    if (this._ipv6Mgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Mgmt = this._ipv6Mgmt;
    }
    if (this._ipv6Ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Ve = this._ipv6Ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpManagementAddressIpv6AddrInterfaceIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Eth = undefined;
      this._ipv6Mgmt = undefined;
      this._ipv6Ve = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Eth = value.ipv6Eth;
      this._ipv6Mgmt = value.ipv6Mgmt;
      this._ipv6Ve = value.ipv6Ve;
    }
  }

  // ipv6_eth - computed: false, optional: true, required: false
  private _ipv6Eth?: number; 
  public get ipv6Eth() {
    return this.getNumberAttribute('ipv6_eth');
  }
  public set ipv6Eth(value: number) {
    this._ipv6Eth = value;
  }
  public resetIpv6Eth() {
    this._ipv6Eth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EthInput() {
    return this._ipv6Eth;
  }

  // ipv6_mgmt - computed: false, optional: true, required: false
  private _ipv6Mgmt?: number; 
  public get ipv6Mgmt() {
    return this.getNumberAttribute('ipv6_mgmt');
  }
  public set ipv6Mgmt(value: number) {
    this._ipv6Mgmt = value;
  }
  public resetIpv6Mgmt() {
    this._ipv6Mgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MgmtInput() {
    return this._ipv6Mgmt;
  }

  // ipv6_ve - computed: false, optional: true, required: false
  private _ipv6Ve?: number; 
  public get ipv6Ve() {
    return this.getNumberAttribute('ipv6_ve');
  }
  public set ipv6Ve(value: number) {
    this._ipv6Ve = value;
  }
  public resetIpv6Ve() {
    this._ipv6Ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VeInput() {
    return this._ipv6Ve;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr thunder_network_lldp_management_address_ipv6_addr}
*/
export class NetworkLldpManagementAddressIpv6Addr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_lldp_management_address_ipv6_addr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkLldpManagementAddressIpv6Addr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkLldpManagementAddressIpv6Addr to import
  * @param importFromId The id of the existing NetworkLldpManagementAddressIpv6Addr that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkLldpManagementAddressIpv6Addr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_lldp_management_address_ipv6_addr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lldp_management_address_ipv6_addr thunder_network_lldp_management_address_ipv6_addr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkLldpManagementAddressIpv6AddrConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkLldpManagementAddressIpv6AddrConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_lldp_management_address_ipv6_addr',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._ipv6 = config.ipv6;
    this._uuid = config.uuid;
    this._interfaceIpv6.internalValue = config.interfaceIpv6;
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

  // ipv6 - computed: false, optional: false, required: true
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // interface_ipv6 - computed: false, optional: true, required: false
  private _interfaceIpv6 = new NetworkLldpManagementAddressIpv6AddrInterfaceIpv6OutputReference(this, "interface_ipv6");
  public get interfaceIpv6() {
    return this._interfaceIpv6;
  }
  public putInterfaceIpv6(value: NetworkLldpManagementAddressIpv6AddrInterfaceIpv6) {
    this._interfaceIpv6.internalValue = value;
  }
  public resetInterfaceIpv6() {
    this._interfaceIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpv6Input() {
    return this._interfaceIpv6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      uuid: cdktf.stringToTerraform(this._uuid),
      interface_ipv6: networkLldpManagementAddressIpv6AddrInterfaceIpv6ToTerraform(this._interfaceIpv6.internalValue),
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
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_ipv6: {
        value: networkLldpManagementAddressIpv6AddrInterfaceIpv6ToHclTerraform(this._interfaceIpv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLldpManagementAddressIpv6AddrInterfaceIpv6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
