// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVxlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#device_name SystemVxlan#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#device_vdom SystemVxlan#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#dstport SystemVxlan#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#evpn_id SystemVxlan#evpn_id}
  */
  readonly evpnId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#id SystemVxlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#interface SystemVxlan#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#ip_version SystemVxlan#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#learn_from_traffic SystemVxlan#learn_from_traffic}
  */
  readonly learnFromTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#multicast_ttl SystemVxlan#multicast_ttl}
  */
  readonly multicastTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#name SystemVxlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#remote_ip SystemVxlan#remote_ip}
  */
  readonly remoteIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#remote_ip6 SystemVxlan#remote_ip6}
  */
  readonly remoteIp6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#vni SystemVxlan#vni}
  */
  readonly vni?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan fmgdevice_system_vxlan}
*/
export class SystemVxlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_vxlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVxlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVxlan to import
  * @param importFromId The id of the existing SystemVxlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVxlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_vxlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vxlan fmgdevice_system_vxlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVxlanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemVxlanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_vxlan',
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dstport = config.dstport;
    this._evpnId = config.evpnId;
    this._id = config.id;
    this._interface = config.interface;
    this._ipVersion = config.ipVersion;
    this._learnFromTraffic = config.learnFromTraffic;
    this._multicastTtl = config.multicastTtl;
    this._name = config.name;
    this._remoteIp = config.remoteIp;
    this._remoteIp6 = config.remoteIp6;
    this._vni = config.vni;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dstport - computed: true, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
  }

  // evpn_id - computed: true, optional: true, required: false
  private _evpnId?: string[]; 
  public get evpnId() {
    return cdktf.Fn.tolist(this.getListAttribute('evpn_id'));
  }
  public set evpnId(value: string[]) {
    this._evpnId = value;
  }
  public resetEvpnId() {
    this._evpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnIdInput() {
    return this._evpnId;
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
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // learn_from_traffic - computed: true, optional: true, required: false
  private _learnFromTraffic?: string; 
  public get learnFromTraffic() {
    return this.getStringAttribute('learn_from_traffic');
  }
  public set learnFromTraffic(value: string) {
    this._learnFromTraffic = value;
  }
  public resetLearnFromTraffic() {
    this._learnFromTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnFromTrafficInput() {
    return this._learnFromTraffic;
  }

  // multicast_ttl - computed: false, optional: true, required: false
  private _multicastTtl?: number; 
  public get multicastTtl() {
    return this.getNumberAttribute('multicast_ttl');
  }
  public set multicastTtl(value: number) {
    this._multicastTtl = value;
  }
  public resetMulticastTtl() {
    this._multicastTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastTtlInput() {
    return this._multicastTtl;
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

  // remote_ip - computed: true, optional: true, required: false
  private _remoteIp?: string[]; 
  public get remoteIp() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_ip'));
  }
  public set remoteIp(value: string[]) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // remote_ip6 - computed: true, optional: true, required: false
  private _remoteIp6?: string[]; 
  public get remoteIp6() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_ip6'));
  }
  public set remoteIp6(value: string[]) {
    this._remoteIp6 = value;
  }
  public resetRemoteIp6() {
    this._remoteIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIp6Input() {
    return this._remoteIp6;
  }

  // vni - computed: false, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dstport: cdktf.numberToTerraform(this._dstport),
      evpn_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._evpnId),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      learn_from_traffic: cdktf.stringToTerraform(this._learnFromTraffic),
      multicast_ttl: cdktf.numberToTerraform(this._multicastTtl),
      name: cdktf.stringToTerraform(this._name),
      remote_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteIp),
      remote_ip6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteIp6),
      vni: cdktf.numberToTerraform(this._vni),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstport: {
        value: cdktf.numberToHclTerraform(this._dstport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      evpn_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._evpnId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learn_from_traffic: {
        value: cdktf.stringToHclTerraform(this._learnFromTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_ttl: {
        value: cdktf.numberToHclTerraform(this._multicastTtl),
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
      remote_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remote_ip6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteIp6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
