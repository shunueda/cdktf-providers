// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerQosIpdscpmapMapAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map#cos_queue SwitchcontrollerQosIpdscpmapMapA#cos_queue}
  */
  readonly cosQueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map#device_name SwitchcontrollerQosIpdscpmapMapA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map#device_vdom SwitchcontrollerQosIpdscpmapMapA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map#diffserv SwitchcontrollerQosIpdscpmapMapA#diffserv}
  */
  readonly diffserv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map#id SwitchcontrollerQosIpdscpmapMapA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map#ip_dscp_map SwitchcontrollerQosIpdscpmapMapA#ip_dscp_map}
  */
  readonly ipDscpMap: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map#ip_precedence SwitchcontrollerQosIpdscpmapMapA#ip_precedence}
  */
  readonly ipPrecedence?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map#name SwitchcontrollerQosIpdscpmapMapA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map#value SwitchcontrollerQosIpdscpmapMapA#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map fmgdevice_switchcontroller_qos_ipdscpmap_map}
*/
export class SwitchcontrollerQosIpdscpmapMapA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_qos_ipdscpmap_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerQosIpdscpmapMapA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerQosIpdscpmapMapA to import
  * @param importFromId The id of the existing SwitchcontrollerQosIpdscpmapMapA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerQosIpdscpmapMapA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_qos_ipdscpmap_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_ipdscpmap_map fmgdevice_switchcontroller_qos_ipdscpmap_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerQosIpdscpmapMapAConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerQosIpdscpmapMapAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_qos_ipdscpmap_map',
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
    this._cosQueue = config.cosQueue;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._diffserv = config.diffserv;
    this._id = config.id;
    this._ipDscpMap = config.ipDscpMap;
    this._ipPrecedence = config.ipPrecedence;
    this._name = config.name;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cos_queue - computed: false, optional: true, required: false
  private _cosQueue?: number; 
  public get cosQueue() {
    return this.getNumberAttribute('cos_queue');
  }
  public set cosQueue(value: number) {
    this._cosQueue = value;
  }
  public resetCosQueue() {
    this._cosQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosQueueInput() {
    return this._cosQueue;
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

  // diffserv - computed: true, optional: true, required: false
  private _diffserv?: string[]; 
  public get diffserv() {
    return cdktf.Fn.tolist(this.getListAttribute('diffserv'));
  }
  public set diffserv(value: string[]) {
    this._diffserv = value;
  }
  public resetDiffserv() {
    this._diffserv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservInput() {
    return this._diffserv;
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

  // ip_dscp_map - computed: false, optional: false, required: true
  private _ipDscpMap?: string; 
  public get ipDscpMap() {
    return this.getStringAttribute('ip_dscp_map');
  }
  public set ipDscpMap(value: string) {
    this._ipDscpMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDscpMapInput() {
    return this._ipDscpMap;
  }

  // ip_precedence - computed: true, optional: true, required: false
  private _ipPrecedence?: string[]; 
  public get ipPrecedence() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_precedence'));
  }
  public set ipPrecedence(value: string[]) {
    this._ipPrecedence = value;
  }
  public resetIpPrecedence() {
    this._ipPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrecedenceInput() {
    return this._ipPrecedence;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cos_queue: cdktf.numberToTerraform(this._cosQueue),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      diffserv: cdktf.listMapper(cdktf.stringToTerraform, false)(this._diffserv),
      id: cdktf.stringToTerraform(this._id),
      ip_dscp_map: cdktf.stringToTerraform(this._ipDscpMap),
      ip_precedence: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipPrecedence),
      name: cdktf.stringToTerraform(this._name),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cos_queue: {
        value: cdktf.numberToHclTerraform(this._cosQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      diffserv: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._diffserv),
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
      ip_dscp_map: {
        value: cdktf.stringToHclTerraform(this._ipDscpMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_precedence: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipPrecedence),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
