// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DvmdbDeviceVdomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#adom DvmdbDeviceVdom#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#comments DvmdbDeviceVdom#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#device_name DvmdbDeviceVdom#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#id DvmdbDeviceVdom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#metafields DvmdbDeviceVdom#metafields}
  */
  readonly metafields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#name DvmdbDeviceVdom#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#opmode DvmdbDeviceVdom#opmode}
  */
  readonly opmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#rtm_prof_id DvmdbDeviceVdom#rtm_prof_id}
  */
  readonly rtmProfId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#scopetype DvmdbDeviceVdom#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#status DvmdbDeviceVdom#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#vdom_type DvmdbDeviceVdom#vdom_type}
  */
  readonly vdomType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#vpn_id DvmdbDeviceVdom#vpn_id}
  */
  readonly vpnId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom fortimanager_dvmdb_device_vdom}
*/
export class DvmdbDeviceVdom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_dvmdb_device_vdom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DvmdbDeviceVdom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DvmdbDeviceVdom to import
  * @param importFromId The id of the existing DvmdbDeviceVdom that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DvmdbDeviceVdom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_dvmdb_device_vdom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_device_vdom fortimanager_dvmdb_device_vdom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DvmdbDeviceVdomConfig
  */
  public constructor(scope: Construct, id: string, config: DvmdbDeviceVdomConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_dvmdb_device_vdom',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._comments = config.comments;
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._metafields = config.metafields;
    this._name = config.name;
    this._opmode = config.opmode;
    this._rtmProfId = config.rtmProfId;
    this._scopetype = config.scopetype;
    this._status = config.status;
    this._vdomType = config.vdomType;
    this._vpnId = config.vpnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // metafields - computed: false, optional: true, required: false
  private _metafields?: string; 
  public get metafields() {
    return this.getStringAttribute('metafields');
  }
  public set metafields(value: string) {
    this._metafields = value;
  }
  public resetMetafields() {
    this._metafields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metafieldsInput() {
    return this._metafields;
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

  // opmode - computed: true, optional: true, required: false
  private _opmode?: string; 
  public get opmode() {
    return this.getStringAttribute('opmode');
  }
  public set opmode(value: string) {
    this._opmode = value;
  }
  public resetOpmode() {
    this._opmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opmodeInput() {
    return this._opmode;
  }

  // rtm_prof_id - computed: false, optional: true, required: false
  private _rtmProfId?: number; 
  public get rtmProfId() {
    return this.getNumberAttribute('rtm_prof_id');
  }
  public set rtmProfId(value: number) {
    this._rtmProfId = value;
  }
  public resetRtmProfId() {
    this._rtmProfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtmProfIdInput() {
    return this._rtmProfId;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // status - computed: false, optional: true, required: false
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

  // vdom_type - computed: true, optional: true, required: false
  private _vdomType?: string; 
  public get vdomType() {
    return this.getStringAttribute('vdom_type');
  }
  public set vdomType(value: string) {
    this._vdomType = value;
  }
  public resetVdomType() {
    this._vdomType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomTypeInput() {
    return this._vdomType;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comments: cdktf.stringToTerraform(this._comments),
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      metafields: cdktf.stringToTerraform(this._metafields),
      name: cdktf.stringToTerraform(this._name),
      opmode: cdktf.stringToTerraform(this._opmode),
      rtm_prof_id: cdktf.numberToTerraform(this._rtmProfId),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
      vdom_type: cdktf.stringToTerraform(this._vdomType),
      vpn_id: cdktf.numberToTerraform(this._vpnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      metafields: {
        value: cdktf.stringToHclTerraform(this._metafields),
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
      opmode: {
        value: cdktf.stringToHclTerraform(this._opmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtm_prof_id: {
        value: cdktf.numberToHclTerraform(this._rtmProfId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      vdom_type: {
        value: cdktf.stringToHclTerraform(this._vdomType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_id: {
        value: cdktf.numberToHclTerraform(this._vpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
