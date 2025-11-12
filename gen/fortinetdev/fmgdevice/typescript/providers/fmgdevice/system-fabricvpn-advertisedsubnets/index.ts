// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFabricvpnAdvertisedsubnetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets#access SystemFabricvpnAdvertisedsubnets#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets#bgp_network SystemFabricvpnAdvertisedsubnets#bgp_network}
  */
  readonly bgpNetwork?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets#device_name SystemFabricvpnAdvertisedsubnets#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets#firewall_address SystemFabricvpnAdvertisedsubnets#firewall_address}
  */
  readonly firewallAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets#fosid SystemFabricvpnAdvertisedsubnets#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets#id SystemFabricvpnAdvertisedsubnets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets#policies SystemFabricvpnAdvertisedsubnets#policies}
  */
  readonly policies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets#prefix SystemFabricvpnAdvertisedsubnets#prefix}
  */
  readonly prefix?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets fmgdevice_system_fabricvpn_advertisedsubnets}
*/
export class SystemFabricvpnAdvertisedsubnets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_fabricvpn_advertisedsubnets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFabricvpnAdvertisedsubnets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFabricvpnAdvertisedsubnets to import
  * @param importFromId The id of the existing SystemFabricvpnAdvertisedsubnets that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFabricvpnAdvertisedsubnets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_fabricvpn_advertisedsubnets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_advertisedsubnets fmgdevice_system_fabricvpn_advertisedsubnets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFabricvpnAdvertisedsubnetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFabricvpnAdvertisedsubnetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_fabricvpn_advertisedsubnets',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._bgpNetwork = config.bgpNetwork;
    this._deviceName = config.deviceName;
    this._firewallAddress = config.firewallAddress;
    this._fosid = config.fosid;
    this._id = config.id;
    this._policies = config.policies;
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // bgp_network - computed: true, optional: true, required: false
  private _bgpNetwork?: string[]; 
  public get bgpNetwork() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_network'));
  }
  public set bgpNetwork(value: string[]) {
    this._bgpNetwork = value;
  }
  public resetBgpNetwork() {
    this._bgpNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNetworkInput() {
    return this._bgpNetwork;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // firewall_address - computed: true, optional: true, required: false
  private _firewallAddress?: string[]; 
  public get firewallAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('firewall_address'));
  }
  public set firewallAddress(value: string[]) {
    this._firewallAddress = value;
  }
  public resetFirewallAddress() {
    this._firewallAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAddressInput() {
    return this._firewallAddress;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // policies - computed: true, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      bgp_network: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bgpNetwork),
      device_name: cdktf.stringToTerraform(this._deviceName),
      firewall_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._firewallAddress),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_network: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bgpNetwork),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._firewallAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      prefix: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefix),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
