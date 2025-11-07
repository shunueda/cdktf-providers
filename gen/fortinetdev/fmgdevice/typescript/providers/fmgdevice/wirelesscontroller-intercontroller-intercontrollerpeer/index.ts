// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_intercontroller_intercontrollerpeer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerIntercontrollerIntercontrollerpeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_intercontroller_intercontrollerpeer#device_name WirelesscontrollerIntercontrollerIntercontrollerpeer#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_intercontroller_intercontrollerpeer#fosid WirelesscontrollerIntercontrollerIntercontrollerpeer#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_intercontroller_intercontrollerpeer#id WirelesscontrollerIntercontrollerIntercontrollerpeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_intercontroller_intercontrollerpeer#peer_ip WirelesscontrollerIntercontrollerIntercontrollerpeer#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_intercontroller_intercontrollerpeer#peer_port WirelesscontrollerIntercontrollerIntercontrollerpeer#peer_port}
  */
  readonly peerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_intercontroller_intercontrollerpeer#peer_priority WirelesscontrollerIntercontrollerIntercontrollerpeer#peer_priority}
  */
  readonly peerPriority?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_intercontroller_intercontrollerpeer fmgdevice_wirelesscontroller_intercontroller_intercontrollerpeer}
*/
export class WirelesscontrollerIntercontrollerIntercontrollerpeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_intercontroller_intercontrollerpeer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerIntercontrollerIntercontrollerpeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerIntercontrollerIntercontrollerpeer to import
  * @param importFromId The id of the existing WirelesscontrollerIntercontrollerIntercontrollerpeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_intercontroller_intercontrollerpeer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerIntercontrollerIntercontrollerpeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_intercontroller_intercontrollerpeer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_intercontroller_intercontrollerpeer fmgdevice_wirelesscontroller_intercontroller_intercontrollerpeer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerIntercontrollerIntercontrollerpeerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerIntercontrollerIntercontrollerpeerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_intercontroller_intercontrollerpeer',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
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
    this._fosid = config.fosid;
    this._id = config.id;
    this._peerIp = config.peerIp;
    this._peerPort = config.peerPort;
    this._peerPriority = config.peerPriority;
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

  // peer_ip - computed: true, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // peer_port - computed: true, optional: true, required: false
  private _peerPort?: number; 
  public get peerPort() {
    return this.getNumberAttribute('peer_port');
  }
  public set peerPort(value: number) {
    this._peerPort = value;
  }
  public resetPeerPort() {
    this._peerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPortInput() {
    return this._peerPort;
  }

  // peer_priority - computed: true, optional: true, required: false
  private _peerPriority?: string; 
  public get peerPriority() {
    return this.getStringAttribute('peer_priority');
  }
  public set peerPriority(value: string) {
    this._peerPriority = value;
  }
  public resetPeerPriority() {
    this._peerPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPriorityInput() {
    return this._peerPriority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      peer_ip: cdktf.stringToTerraform(this._peerIp),
      peer_port: cdktf.numberToTerraform(this._peerPort),
      peer_priority: cdktf.stringToTerraform(this._peerPriority),
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
      peer_ip: {
        value: cdktf.stringToHclTerraform(this._peerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_port: {
        value: cdktf.numberToHclTerraform(this._peerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_priority: {
        value: cdktf.stringToHclTerraform(this._peerPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
