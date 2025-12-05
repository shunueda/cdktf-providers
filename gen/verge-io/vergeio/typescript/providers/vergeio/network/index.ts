// https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bonding interfaces arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#bond_interfaces_args Network#bond_interfaces_args}
  */
  readonly bondInterfacesArgs?: number[];
  /**
  * Is DHCP enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#dhcp_enabled Network#dhcp_enabled}
  */
  readonly dhcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Is DHCP sequential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#dhcp_sequential Network#dhcp_sequential}
  */
  readonly dhcpSequential?: boolean | cdktf.IResolvable;
  /**
  * DHCP start address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#dhcp_start Network#dhcp_start}
  */
  readonly dhcpStart?: string;
  /**
  * DHCP stop address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#dhcp_stop Network#dhcp_stop}
  */
  readonly dhcpStop?: string;
  /**
  * Is DHCP dynamic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#dynamic_dhcp Network#dynamic_dhcp}
  */
  readonly dynamicDhcp?: boolean | cdktf.IResolvable;
  /**
  * Enable bonding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#enable_bonding Network#enable_bonding}
  */
  readonly enableBonding?: boolean | cdktf.IResolvable;
  /**
  * Network state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#enabled Network#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Key/ID of the physical network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#interface_vnet Network#interface_vnet}
  */
  readonly interfaceVnet?: number;
  /**
  * IP address assigned to network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#ipaddress Network#ipaddress}
  */
  readonly ipaddress?: string;
  /**
  * IP address type of the vnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#ipaddress_type Network#ipaddress_type}
  */
  readonly ipaddressType?: string;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#layer2_id Network#layer2_id}
  */
  readonly layer2Id?: number;
  /**
  * Layer2 type of the vnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#layer2_type Network#layer2_type}
  */
  readonly layer2Type?: string;
  /**
  * Network MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#mtu Network#mtu}
  */
  readonly mtu?: number;
  /**
  * Unique network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#name Network#name}
  */
  readonly name: string;
  /**
  * Network address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#network Network#network}
  */
  readonly network?: string;
  /**
  * What to do on power loss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#on_power_loss Network#on_power_loss}
  */
  readonly onPowerLoss?: string;
  /**
  * Power state of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#powerstate Network#powerstate}
  */
  readonly powerstate?: string;
  /**
  * Type of Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#type Network#type}
  */
  readonly type?: string;
  /**
  * Vnet default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#vnet_default_gateway Network#vnet_default_gateway}
  */
  readonly vnetDefaultGateway?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network vergeio_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vergeio_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Network to import
  * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vergeio_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/resources/network vergeio_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'vergeio_network',
      terraformGeneratorMetadata: {
        providerName: 'vergeio',
        providerVersion: '2.7.3',
        providerVersionConstraint: '2.7.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bondInterfacesArgs = config.bondInterfacesArgs;
    this._dhcpEnabled = config.dhcpEnabled;
    this._dhcpSequential = config.dhcpSequential;
    this._dhcpStart = config.dhcpStart;
    this._dhcpStop = config.dhcpStop;
    this._dynamicDhcp = config.dynamicDhcp;
    this._enableBonding = config.enableBonding;
    this._enabled = config.enabled;
    this._interfaceVnet = config.interfaceVnet;
    this._ipaddress = config.ipaddress;
    this._ipaddressType = config.ipaddressType;
    this._layer2Id = config.layer2Id;
    this._layer2Type = config.layer2Type;
    this._mtu = config.mtu;
    this._name = config.name;
    this._network = config.network;
    this._onPowerLoss = config.onPowerLoss;
    this._powerstate = config.powerstate;
    this._type = config.type;
    this._vnetDefaultGateway = config.vnetDefaultGateway;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bond_interfaces_args - computed: false, optional: true, required: false
  private _bondInterfacesArgs?: number[]; 
  public get bondInterfacesArgs() {
    return this.getNumberListAttribute('bond_interfaces_args');
  }
  public set bondInterfacesArgs(value: number[]) {
    this._bondInterfacesArgs = value;
  }
  public resetBondInterfacesArgs() {
    this._bondInterfacesArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondInterfacesArgsInput() {
    return this._bondInterfacesArgs;
  }

  // dhcp_enabled - computed: true, optional: true, required: false
  private _dhcpEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpEnabled() {
    return this.getBooleanAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
  }

  // dhcp_sequential - computed: true, optional: true, required: false
  private _dhcpSequential?: boolean | cdktf.IResolvable; 
  public get dhcpSequential() {
    return this.getBooleanAttribute('dhcp_sequential');
  }
  public set dhcpSequential(value: boolean | cdktf.IResolvable) {
    this._dhcpSequential = value;
  }
  public resetDhcpSequential() {
    this._dhcpSequential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSequentialInput() {
    return this._dhcpSequential;
  }

  // dhcp_start - computed: true, optional: true, required: false
  private _dhcpStart?: string; 
  public get dhcpStart() {
    return this.getStringAttribute('dhcp_start');
  }
  public set dhcpStart(value: string) {
    this._dhcpStart = value;
  }
  public resetDhcpStart() {
    this._dhcpStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStartInput() {
    return this._dhcpStart;
  }

  // dhcp_stop - computed: true, optional: true, required: false
  private _dhcpStop?: string; 
  public get dhcpStop() {
    return this.getStringAttribute('dhcp_stop');
  }
  public set dhcpStop(value: string) {
    this._dhcpStop = value;
  }
  public resetDhcpStop() {
    this._dhcpStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStopInput() {
    return this._dhcpStop;
  }

  // dynamic_dhcp - computed: true, optional: true, required: false
  private _dynamicDhcp?: boolean | cdktf.IResolvable; 
  public get dynamicDhcp() {
    return this.getBooleanAttribute('dynamic_dhcp');
  }
  public set dynamicDhcp(value: boolean | cdktf.IResolvable) {
    this._dynamicDhcp = value;
  }
  public resetDynamicDhcp() {
    this._dynamicDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDhcpInput() {
    return this._dynamicDhcp;
  }

  // enable_bonding - computed: true, optional: true, required: false
  private _enableBonding?: boolean | cdktf.IResolvable; 
  public get enableBonding() {
    return this.getBooleanAttribute('enable_bonding');
  }
  public set enableBonding(value: boolean | cdktf.IResolvable) {
    this._enableBonding = value;
  }
  public resetEnableBonding() {
    this._enableBonding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBondingInput() {
    return this._enableBonding;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_vnet - computed: true, optional: true, required: false
  private _interfaceVnet?: number; 
  public get interfaceVnet() {
    return this.getNumberAttribute('interface_vnet');
  }
  public set interfaceVnet(value: number) {
    this._interfaceVnet = value;
  }
  public resetInterfaceVnet() {
    this._interfaceVnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceVnetInput() {
    return this._interfaceVnet;
  }

  // ipaddress - computed: true, optional: true, required: false
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  public resetIpaddress() {
    this._ipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // ipaddress_type - computed: true, optional: true, required: false
  private _ipaddressType?: string; 
  public get ipaddressType() {
    return this.getStringAttribute('ipaddress_type');
  }
  public set ipaddressType(value: string) {
    this._ipaddressType = value;
  }
  public resetIpaddressType() {
    this._ipaddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressTypeInput() {
    return this._ipaddressType;
  }

  // layer2_id - computed: true, optional: true, required: false
  private _layer2Id?: number; 
  public get layer2Id() {
    return this.getNumberAttribute('layer2_id');
  }
  public set layer2Id(value: number) {
    this._layer2Id = value;
  }
  public resetLayer2Id() {
    this._layer2Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2IdInput() {
    return this._layer2Id;
  }

  // layer2_type - computed: true, optional: true, required: false
  private _layer2Type?: string; 
  public get layer2Type() {
    return this.getStringAttribute('layer2_type');
  }
  public set layer2Type(value: string) {
    this._layer2Type = value;
  }
  public resetLayer2Type() {
    this._layer2Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2TypeInput() {
    return this._layer2Type;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // on_power_loss - computed: true, optional: true, required: false
  private _onPowerLoss?: string; 
  public get onPowerLoss() {
    return this.getStringAttribute('on_power_loss');
  }
  public set onPowerLoss(value: string) {
    this._onPowerLoss = value;
  }
  public resetOnPowerLoss() {
    this._onPowerLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPowerLossInput() {
    return this._onPowerLoss;
  }

  // powerstate - computed: false, optional: true, required: false
  private _powerstate?: string; 
  public get powerstate() {
    return this.getStringAttribute('powerstate');
  }
  public set powerstate(value: string) {
    this._powerstate = value;
  }
  public resetPowerstate() {
    this._powerstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerstateInput() {
    return this._powerstate;
  }

  // type - computed: true, optional: true, required: false
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

  // vnet_default_gateway - computed: false, optional: true, required: false
  private _vnetDefaultGateway?: number; 
  public get vnetDefaultGateway() {
    return this.getNumberAttribute('vnet_default_gateway');
  }
  public set vnetDefaultGateway(value: number) {
    this._vnetDefaultGateway = value;
  }
  public resetVnetDefaultGateway() {
    this._vnetDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetDefaultGatewayInput() {
    return this._vnetDefaultGateway;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bond_interfaces_args: cdktf.listMapper(cdktf.numberToTerraform, false)(this._bondInterfacesArgs),
      dhcp_enabled: cdktf.booleanToTerraform(this._dhcpEnabled),
      dhcp_sequential: cdktf.booleanToTerraform(this._dhcpSequential),
      dhcp_start: cdktf.stringToTerraform(this._dhcpStart),
      dhcp_stop: cdktf.stringToTerraform(this._dhcpStop),
      dynamic_dhcp: cdktf.booleanToTerraform(this._dynamicDhcp),
      enable_bonding: cdktf.booleanToTerraform(this._enableBonding),
      enabled: cdktf.booleanToTerraform(this._enabled),
      interface_vnet: cdktf.numberToTerraform(this._interfaceVnet),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      ipaddress_type: cdktf.stringToTerraform(this._ipaddressType),
      layer2_id: cdktf.numberToTerraform(this._layer2Id),
      layer2_type: cdktf.stringToTerraform(this._layer2Type),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      on_power_loss: cdktf.stringToTerraform(this._onPowerLoss),
      powerstate: cdktf.stringToTerraform(this._powerstate),
      type: cdktf.stringToTerraform(this._type),
      vnet_default_gateway: cdktf.numberToTerraform(this._vnetDefaultGateway),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bond_interfaces_args: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._bondInterfacesArgs),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      dhcp_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_sequential: {
        value: cdktf.booleanToHclTerraform(this._dhcpSequential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_start: {
        value: cdktf.stringToHclTerraform(this._dhcpStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_stop: {
        value: cdktf.stringToHclTerraform(this._dhcpStop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_dhcp: {
        value: cdktf.booleanToHclTerraform(this._dynamicDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_bonding: {
        value: cdktf.booleanToHclTerraform(this._enableBonding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_vnet: {
        value: cdktf.numberToHclTerraform(this._interfaceVnet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipaddress_type: {
        value: cdktf.stringToHclTerraform(this._ipaddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer2_id: {
        value: cdktf.numberToHclTerraform(this._layer2Id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      layer2_type: {
        value: cdktf.stringToHclTerraform(this._layer2Type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_power_loss: {
        value: cdktf.stringToHclTerraform(this._onPowerLoss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      powerstate: {
        value: cdktf.stringToHclTerraform(this._powerstate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_default_gateway: {
        value: cdktf.numberToHclTerraform(this._vnetDefaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
