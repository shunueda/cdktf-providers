// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemEvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn#arp_suppression SystemEvpn#arp_suppression}
  */
  readonly arpSuppression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn#device_name SystemEvpn#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn#device_vdom SystemEvpn#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn#export_rt SystemEvpn#export_rt}
  */
  readonly exportRt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn#fosid SystemEvpn#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn#id SystemEvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn#import_rt SystemEvpn#import_rt}
  */
  readonly importRt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn#ip_local_learning SystemEvpn#ip_local_learning}
  */
  readonly ipLocalLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn#rd SystemEvpn#rd}
  */
  readonly rd?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn fmgdevice_system_evpn}
*/
export class SystemEvpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_evpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemEvpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemEvpn to import
  * @param importFromId The id of the existing SystemEvpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemEvpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_evpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_evpn fmgdevice_system_evpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemEvpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemEvpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_evpn',
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
    this._arpSuppression = config.arpSuppression;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._exportRt = config.exportRt;
    this._fosid = config.fosid;
    this._id = config.id;
    this._importRt = config.importRt;
    this._ipLocalLearning = config.ipLocalLearning;
    this._rd = config.rd;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_suppression - computed: true, optional: true, required: false
  private _arpSuppression?: string; 
  public get arpSuppression() {
    return this.getStringAttribute('arp_suppression');
  }
  public set arpSuppression(value: string) {
    this._arpSuppression = value;
  }
  public resetArpSuppression() {
    this._arpSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpSuppressionInput() {
    return this._arpSuppression;
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

  // export_rt - computed: true, optional: true, required: false
  private _exportRt?: string[]; 
  public get exportRt() {
    return cdktf.Fn.tolist(this.getListAttribute('export_rt'));
  }
  public set exportRt(value: string[]) {
    this._exportRt = value;
  }
  public resetExportRt() {
    this._exportRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRtInput() {
    return this._exportRt;
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

  // import_rt - computed: true, optional: true, required: false
  private _importRt?: string[]; 
  public get importRt() {
    return cdktf.Fn.tolist(this.getListAttribute('import_rt'));
  }
  public set importRt(value: string[]) {
    this._importRt = value;
  }
  public resetImportRt() {
    this._importRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRtInput() {
    return this._importRt;
  }

  // ip_local_learning - computed: true, optional: true, required: false
  private _ipLocalLearning?: string; 
  public get ipLocalLearning() {
    return this.getStringAttribute('ip_local_learning');
  }
  public set ipLocalLearning(value: string) {
    this._ipLocalLearning = value;
  }
  public resetIpLocalLearning() {
    this._ipLocalLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipLocalLearningInput() {
    return this._ipLocalLearning;
  }

  // rd - computed: false, optional: true, required: false
  private _rd?: string; 
  public get rd() {
    return this.getStringAttribute('rd');
  }
  public set rd(value: string) {
    this._rd = value;
  }
  public resetRd() {
    this._rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdInput() {
    return this._rd;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_suppression: cdktf.stringToTerraform(this._arpSuppression),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      export_rt: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportRt),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      import_rt: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importRt),
      ip_local_learning: cdktf.stringToTerraform(this._ipLocalLearning),
      rd: cdktf.stringToTerraform(this._rd),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_suppression: {
        value: cdktf.stringToHclTerraform(this._arpSuppression),
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
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_rt: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportRt),
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
      import_rt: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importRt),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_local_learning: {
        value: cdktf.stringToHclTerraform(this._ipLocalLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd: {
        value: cdktf.stringToHclTerraform(this._rd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
