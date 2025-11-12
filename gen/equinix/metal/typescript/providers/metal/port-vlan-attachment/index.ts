// https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/port_vlan_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortVlanAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of device to be assigned to the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/port_vlan_attachment#device_id PortVlanAttachment#device_id}
  */
  readonly deviceId: string;
  /**
  * Add port back to the bond when this resource is removed. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/port_vlan_attachment#force_bond PortVlanAttachment#force_bond}
  */
  readonly forceBond?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/port_vlan_attachment#id PortVlanAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mark this VLAN a native VLAN on the port. This can be used only if this assignment assigns second or further VLAN to the port. To ensure that this attachment is not first on a port, you can use depends_on pointing to another metal_port_vlan_attachment, just like in the layer2-individual example above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/port_vlan_attachment#native PortVlanAttachment#native}
  */
  readonly native?: boolean | cdktf.IResolvable;
  /**
  * Name of network port to be assigned to the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/port_vlan_attachment#port_name PortVlanAttachment#port_name}
  */
  readonly portName: string;
  /**
  * VXLAN Network Identifier, integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/port_vlan_attachment#vlan_vnid PortVlanAttachment#vlan_vnid}
  */
  readonly vlanVnid: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/port_vlan_attachment metal_port_vlan_attachment}
*/
export class PortVlanAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metal_port_vlan_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortVlanAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortVlanAttachment to import
  * @param importFromId The id of the existing PortVlanAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/port_vlan_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortVlanAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metal_port_vlan_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/port_vlan_attachment metal_port_vlan_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortVlanAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: PortVlanAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'metal_port_vlan_attachment',
      terraformGeneratorMetadata: {
        providerName: 'metal',
        providerVersion: '3.3.0',
        providerVersionConstraint: '3.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._forceBond = config.forceBond;
    this._id = config.id;
    this._native = config.native;
    this._portName = config.portName;
    this._vlanVnid = config.vlanVnid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // force_bond - computed: false, optional: true, required: false
  private _forceBond?: boolean | cdktf.IResolvable; 
  public get forceBond() {
    return this.getBooleanAttribute('force_bond');
  }
  public set forceBond(value: boolean | cdktf.IResolvable) {
    this._forceBond = value;
  }
  public resetForceBond() {
    this._forceBond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceBondInput() {
    return this._forceBond;
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

  // native - computed: false, optional: true, required: false
  private _native?: boolean | cdktf.IResolvable; 
  public get native() {
    return this.getBooleanAttribute('native');
  }
  public set native(value: boolean | cdktf.IResolvable) {
    this._native = value;
  }
  public resetNative() {
    this._native = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeInput() {
    return this._native;
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // port_name - computed: false, optional: false, required: true
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vlan_vnid - computed: false, optional: false, required: true
  private _vlanVnid?: number; 
  public get vlanVnid() {
    return this.getNumberAttribute('vlan_vnid');
  }
  public set vlanVnid(value: number) {
    this._vlanVnid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanVnidInput() {
    return this._vlanVnid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      force_bond: cdktf.booleanToTerraform(this._forceBond),
      id: cdktf.stringToTerraform(this._id),
      native: cdktf.booleanToTerraform(this._native),
      port_name: cdktf.stringToTerraform(this._portName),
      vlan_vnid: cdktf.numberToTerraform(this._vlanVnid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_bond: {
        value: cdktf.booleanToHclTerraform(this._forceBond),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native: {
        value: cdktf.booleanToHclTerraform(this._native),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_name: {
        value: cdktf.stringToHclTerraform(this._portName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_vnid: {
        value: cdktf.numberToHclTerraform(this._vlanVnid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
