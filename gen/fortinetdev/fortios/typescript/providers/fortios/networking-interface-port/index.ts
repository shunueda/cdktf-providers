// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingInterfacePortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#alias NetworkingInterfacePort#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#allowaccess NetworkingInterfacePort#allowaccess}
  */
  readonly allowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#defaultgw NetworkingInterfacePort#defaultgw}
  */
  readonly defaultgw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#description NetworkingInterfacePort#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#device_identification NetworkingInterfacePort#device_identification}
  */
  readonly deviceIdentification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#distance NetworkingInterfacePort#distance}
  */
  readonly distance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#dns_server_override NetworkingInterfacePort#dns_server_override}
  */
  readonly dnsServerOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#id NetworkingInterfacePort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#interface NetworkingInterfacePort#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#ip NetworkingInterfacePort#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#mode NetworkingInterfacePort#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#mtu NetworkingInterfacePort#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#mtu_override NetworkingInterfacePort#mtu_override}
  */
  readonly mtuOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#name NetworkingInterfacePort#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#role NetworkingInterfacePort#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#speed NetworkingInterfacePort#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#status NetworkingInterfacePort#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#tcp_mss NetworkingInterfacePort#tcp_mss}
  */
  readonly tcpMss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#type NetworkingInterfacePort#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#vdom NetworkingInterfacePort#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#vlanid NetworkingInterfacePort#vlanid}
  */
  readonly vlanid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port fortios_networking_interface_port}
*/
export class NetworkingInterfacePort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_networking_interface_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingInterfacePort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingInterfacePort to import
  * @param importFromId The id of the existing NetworkingInterfacePort that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingInterfacePort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_networking_interface_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/networking_interface_port fortios_networking_interface_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingInterfacePortConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkingInterfacePortConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_networking_interface_port',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._allowaccess = config.allowaccess;
    this._defaultgw = config.defaultgw;
    this._description = config.description;
    this._deviceIdentification = config.deviceIdentification;
    this._distance = config.distance;
    this._dnsServerOverride = config.dnsServerOverride;
    this._id = config.id;
    this._interface = config.interface;
    this._ip = config.ip;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._mtuOverride = config.mtuOverride;
    this._name = config.name;
    this._role = config.role;
    this._speed = config.speed;
    this._status = config.status;
    this._tcpMss = config.tcpMss;
    this._type = config.type;
    this._vdom = config.vdom;
    this._vlanid = config.vlanid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // allowaccess - computed: true, optional: true, required: false
  private _allowaccess?: string; 
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }
  public set allowaccess(value: string) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // defaultgw - computed: true, optional: true, required: false
  private _defaultgw?: string; 
  public get defaultgw() {
    return this.getStringAttribute('defaultgw');
  }
  public set defaultgw(value: string) {
    this._defaultgw = value;
  }
  public resetDefaultgw() {
    this._defaultgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultgwInput() {
    return this._defaultgw;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_identification - computed: true, optional: true, required: false
  private _deviceIdentification?: string; 
  public get deviceIdentification() {
    return this.getStringAttribute('device_identification');
  }
  public set deviceIdentification(value: string) {
    this._deviceIdentification = value;
  }
  public resetDeviceIdentification() {
    this._deviceIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdentificationInput() {
    return this._deviceIdentification;
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: string; 
  public get distance() {
    return this.getStringAttribute('distance');
  }
  public set distance(value: string) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // dns_server_override - computed: true, optional: true, required: false
  private _dnsServerOverride?: string; 
  public get dnsServerOverride() {
    return this.getStringAttribute('dns_server_override');
  }
  public set dnsServerOverride(value: string) {
    this._dnsServerOverride = value;
  }
  public resetDnsServerOverride() {
    this._dnsServerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerOverrideInput() {
    return this._dnsServerOverride;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_override - computed: true, optional: true, required: false
  private _mtuOverride?: string; 
  public get mtuOverride() {
    return this.getStringAttribute('mtu_override');
  }
  public set mtuOverride(value: string) {
    this._mtuOverride = value;
  }
  public resetMtuOverride() {
    this._mtuOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuOverrideInput() {
    return this._mtuOverride;
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

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // speed - computed: true, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tcp_mss - computed: true, optional: true, required: false
  private _tcpMss?: string; 
  public get tcpMss() {
    return this.getStringAttribute('tcp_mss');
  }
  public set tcpMss(value: string) {
    this._tcpMss = value;
  }
  public resetTcpMss() {
    this._tcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssInput() {
    return this._tcpMss;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vlanid - computed: true, optional: true, required: false
  private _vlanid?: string; 
  public get vlanid() {
    return this.getStringAttribute('vlanid');
  }
  public set vlanid(value: string) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      allowaccess: cdktf.stringToTerraform(this._allowaccess),
      defaultgw: cdktf.stringToTerraform(this._defaultgw),
      description: cdktf.stringToTerraform(this._description),
      device_identification: cdktf.stringToTerraform(this._deviceIdentification),
      distance: cdktf.stringToTerraform(this._distance),
      dns_server_override: cdktf.stringToTerraform(this._dnsServerOverride),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip: cdktf.stringToTerraform(this._ip),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.stringToTerraform(this._mtu),
      mtu_override: cdktf.stringToTerraform(this._mtuOverride),
      name: cdktf.stringToTerraform(this._name),
      role: cdktf.stringToTerraform(this._role),
      speed: cdktf.stringToTerraform(this._speed),
      status: cdktf.stringToTerraform(this._status),
      tcp_mss: cdktf.stringToTerraform(this._tcpMss),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
      vlanid: cdktf.stringToTerraform(this._vlanid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowaccess: {
        value: cdktf.stringToHclTerraform(this._allowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultgw: {
        value: cdktf.stringToHclTerraform(this._defaultgw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_identification: {
        value: cdktf.stringToHclTerraform(this._deviceIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.stringToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server_override: {
        value: cdktf.stringToHclTerraform(this._dnsServerOverride),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu_override: {
        value: cdktf.stringToHclTerraform(this._mtuOverride),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_mss: {
        value: cdktf.stringToHclTerraform(this._tcpMss),
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
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlanid: {
        value: cdktf.stringToHclTerraform(this._vlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
