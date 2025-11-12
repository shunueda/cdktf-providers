// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkLldpManagementAddressIpv4AddrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr#id NetworkLldpManagementAddressIpv4Addr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure lldp management-address, subtype is ipv4 (lldp management-address ipv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr#ipv4 NetworkLldpManagementAddressIpv4Addr#ipv4}
  */
  readonly ipv4: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr#uuid NetworkLldpManagementAddressIpv4Addr#uuid}
  */
  readonly uuid?: string;
  /**
  * interface_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr#interface_ipv4 NetworkLldpManagementAddressIpv4Addr#interface_ipv4}
  */
  readonly interfaceIpv4?: NetworkLldpManagementAddressIpv4AddrInterfaceIpv4;
}
export interface NetworkLldpManagementAddressIpv4AddrInterfaceIpv4 {
  /**
  * configure lldp management-address interface ethernet (lldp management-address interface port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr#ipv4_eth NetworkLldpManagementAddressIpv4Addr#ipv4_eth}
  */
  readonly ipv4Eth?: number;
  /**
  * configure lldp management-address interface management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr#ipv4_mgmt NetworkLldpManagementAddressIpv4Addr#ipv4_mgmt}
  */
  readonly ipv4Mgmt?: number;
  /**
  * configure lldp management-address interface ve (lldp management-address interface port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr#ipv4_ve NetworkLldpManagementAddressIpv4Addr#ipv4_ve}
  */
  readonly ipv4Ve?: number;
}

export function networkLldpManagementAddressIpv4AddrInterfaceIpv4ToTerraform(struct?: NetworkLldpManagementAddressIpv4AddrInterfaceIpv4OutputReference | NetworkLldpManagementAddressIpv4AddrInterfaceIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_eth: cdktf.numberToTerraform(struct!.ipv4Eth),
    ipv4_mgmt: cdktf.numberToTerraform(struct!.ipv4Mgmt),
    ipv4_ve: cdktf.numberToTerraform(struct!.ipv4Ve),
  }
}


export function networkLldpManagementAddressIpv4AddrInterfaceIpv4ToHclTerraform(struct?: NetworkLldpManagementAddressIpv4AddrInterfaceIpv4OutputReference | NetworkLldpManagementAddressIpv4AddrInterfaceIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_eth: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Eth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_mgmt: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Mgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_ve: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpManagementAddressIpv4AddrInterfaceIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLldpManagementAddressIpv4AddrInterfaceIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Eth !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Eth = this._ipv4Eth;
    }
    if (this._ipv4Mgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mgmt = this._ipv4Mgmt;
    }
    if (this._ipv4Ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Ve = this._ipv4Ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpManagementAddressIpv4AddrInterfaceIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Eth = undefined;
      this._ipv4Mgmt = undefined;
      this._ipv4Ve = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Eth = value.ipv4Eth;
      this._ipv4Mgmt = value.ipv4Mgmt;
      this._ipv4Ve = value.ipv4Ve;
    }
  }

  // ipv4_eth - computed: false, optional: true, required: false
  private _ipv4Eth?: number; 
  public get ipv4Eth() {
    return this.getNumberAttribute('ipv4_eth');
  }
  public set ipv4Eth(value: number) {
    this._ipv4Eth = value;
  }
  public resetIpv4Eth() {
    this._ipv4Eth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EthInput() {
    return this._ipv4Eth;
  }

  // ipv4_mgmt - computed: false, optional: true, required: false
  private _ipv4Mgmt?: number; 
  public get ipv4Mgmt() {
    return this.getNumberAttribute('ipv4_mgmt');
  }
  public set ipv4Mgmt(value: number) {
    this._ipv4Mgmt = value;
  }
  public resetIpv4Mgmt() {
    this._ipv4Mgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MgmtInput() {
    return this._ipv4Mgmt;
  }

  // ipv4_ve - computed: false, optional: true, required: false
  private _ipv4Ve?: number; 
  public get ipv4Ve() {
    return this.getNumberAttribute('ipv4_ve');
  }
  public set ipv4Ve(value: number) {
    this._ipv4Ve = value;
  }
  public resetIpv4Ve() {
    this._ipv4Ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VeInput() {
    return this._ipv4Ve;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr thunder_network_lldp_management_address_ipv4_addr}
*/
export class NetworkLldpManagementAddressIpv4Addr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_lldp_management_address_ipv4_addr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkLldpManagementAddressIpv4Addr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkLldpManagementAddressIpv4Addr to import
  * @param importFromId The id of the existing NetworkLldpManagementAddressIpv4Addr that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkLldpManagementAddressIpv4Addr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_lldp_management_address_ipv4_addr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp_management_address_ipv4_addr thunder_network_lldp_management_address_ipv4_addr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkLldpManagementAddressIpv4AddrConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkLldpManagementAddressIpv4AddrConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_lldp_management_address_ipv4_addr',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._ipv4 = config.ipv4;
    this._uuid = config.uuid;
    this._interfaceIpv4.internalValue = config.interfaceIpv4;
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

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
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

  // interface_ipv4 - computed: false, optional: true, required: false
  private _interfaceIpv4 = new NetworkLldpManagementAddressIpv4AddrInterfaceIpv4OutputReference(this, "interface_ipv4");
  public get interfaceIpv4() {
    return this._interfaceIpv4;
  }
  public putInterfaceIpv4(value: NetworkLldpManagementAddressIpv4AddrInterfaceIpv4) {
    this._interfaceIpv4.internalValue = value;
  }
  public resetInterfaceIpv4() {
    this._interfaceIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpv4Input() {
    return this._interfaceIpv4.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv4: cdktf.stringToTerraform(this._ipv4),
      uuid: cdktf.stringToTerraform(this._uuid),
      interface_ipv4: networkLldpManagementAddressIpv4AddrInterfaceIpv4ToTerraform(this._interfaceIpv4.internalValue),
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
      ipv4: {
        value: cdktf.stringToHclTerraform(this._ipv4),
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
      interface_ipv4: {
        value: networkLldpManagementAddressIpv4AddrInterfaceIpv4ToHclTerraform(this._interfaceIpv4.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLldpManagementAddressIpv4AddrInterfaceIpv4List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
