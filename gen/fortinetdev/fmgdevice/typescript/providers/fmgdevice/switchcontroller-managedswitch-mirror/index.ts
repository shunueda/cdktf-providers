// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerManagedswitchMirrorAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#device_name SwitchcontrollerManagedswitchMirrorA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#device_vdom SwitchcontrollerManagedswitchMirrorA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#dst SwitchcontrollerManagedswitchMirrorA#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#id SwitchcontrollerManagedswitchMirrorA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#managed_switch SwitchcontrollerManagedswitchMirrorA#managed_switch}
  */
  readonly managedSwitch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#name SwitchcontrollerManagedswitchMirrorA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#src_egress SwitchcontrollerManagedswitchMirrorA#src_egress}
  */
  readonly srcEgress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#src_ingress SwitchcontrollerManagedswitchMirrorA#src_ingress}
  */
  readonly srcIngress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#status SwitchcontrollerManagedswitchMirrorA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#switching_packet SwitchcontrollerManagedswitchMirrorA#switching_packet}
  */
  readonly switchingPacket?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror fmgdevice_switchcontroller_managedswitch_mirror}
*/
export class SwitchcontrollerManagedswitchMirrorA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_managedswitch_mirror";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerManagedswitchMirrorA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerManagedswitchMirrorA to import
  * @param importFromId The id of the existing SwitchcontrollerManagedswitchMirrorA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerManagedswitchMirrorA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_managedswitch_mirror", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_mirror fmgdevice_switchcontroller_managedswitch_mirror} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerManagedswitchMirrorAConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerManagedswitchMirrorAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_managedswitch_mirror',
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
    this._deviceVdom = config.deviceVdom;
    this._dst = config.dst;
    this._id = config.id;
    this._managedSwitch = config.managedSwitch;
    this._name = config.name;
    this._srcEgress = config.srcEgress;
    this._srcIngress = config.srcIngress;
    this._status = config.status;
    this._switchingPacket = config.switchingPacket;
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

  // dst - computed: false, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
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

  // managed_switch - computed: false, optional: false, required: true
  private _managedSwitch?: string; 
  public get managedSwitch() {
    return this.getStringAttribute('managed_switch');
  }
  public set managedSwitch(value: string) {
    this._managedSwitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSwitchInput() {
    return this._managedSwitch;
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

  // src_egress - computed: true, optional: true, required: false
  private _srcEgress?: string[]; 
  public get srcEgress() {
    return cdktf.Fn.tolist(this.getListAttribute('src_egress'));
  }
  public set srcEgress(value: string[]) {
    this._srcEgress = value;
  }
  public resetSrcEgress() {
    this._srcEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEgressInput() {
    return this._srcEgress;
  }

  // src_ingress - computed: true, optional: true, required: false
  private _srcIngress?: string[]; 
  public get srcIngress() {
    return cdktf.Fn.tolist(this.getListAttribute('src_ingress'));
  }
  public set srcIngress(value: string[]) {
    this._srcIngress = value;
  }
  public resetSrcIngress() {
    this._srcIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIngressInput() {
    return this._srcIngress;
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

  // switching_packet - computed: true, optional: true, required: false
  private _switchingPacket?: string; 
  public get switchingPacket() {
    return this.getStringAttribute('switching_packet');
  }
  public set switchingPacket(value: string) {
    this._switchingPacket = value;
  }
  public resetSwitchingPacket() {
    this._switchingPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingPacketInput() {
    return this._switchingPacket;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dst: cdktf.stringToTerraform(this._dst),
      id: cdktf.stringToTerraform(this._id),
      managed_switch: cdktf.stringToTerraform(this._managedSwitch),
      name: cdktf.stringToTerraform(this._name),
      src_egress: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcEgress),
      src_ingress: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcIngress),
      status: cdktf.stringToTerraform(this._status),
      switching_packet: cdktf.stringToTerraform(this._switchingPacket),
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
      dst: {
        value: cdktf.stringToHclTerraform(this._dst),
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
      managed_switch: {
        value: cdktf.stringToHclTerraform(this._managedSwitch),
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
      src_egress: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcEgress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_ingress: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcIngress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switching_packet: {
        value: cdktf.stringToHclTerraform(this._switchingPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
