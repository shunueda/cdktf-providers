// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp_serverinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPtpServerinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp_serverinterface#delay_mechanism SystemPtpServerinterface#delay_mechanism}
  */
  readonly delayMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp_serverinterface#device_name SystemPtpServerinterface#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp_serverinterface#fosid SystemPtpServerinterface#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp_serverinterface#id SystemPtpServerinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp_serverinterface#server_interface_name SystemPtpServerinterface#server_interface_name}
  */
  readonly serverInterfaceName?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp_serverinterface fmgdevice_system_ptp_serverinterface}
*/
export class SystemPtpServerinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_ptp_serverinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPtpServerinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPtpServerinterface to import
  * @param importFromId The id of the existing SystemPtpServerinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp_serverinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPtpServerinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_ptp_serverinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp_serverinterface fmgdevice_system_ptp_serverinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPtpServerinterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPtpServerinterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_ptp_serverinterface',
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
    this._delayMechanism = config.delayMechanism;
    this._deviceName = config.deviceName;
    this._fosid = config.fosid;
    this._id = config.id;
    this._serverInterfaceName = config.serverInterfaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_mechanism - computed: true, optional: true, required: false
  private _delayMechanism?: string; 
  public get delayMechanism() {
    return this.getStringAttribute('delay_mechanism');
  }
  public set delayMechanism(value: string) {
    this._delayMechanism = value;
  }
  public resetDelayMechanism() {
    this._delayMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayMechanismInput() {
    return this._delayMechanism;
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

  // server_interface_name - computed: true, optional: true, required: false
  private _serverInterfaceName?: string[]; 
  public get serverInterfaceName() {
    return cdktf.Fn.tolist(this.getListAttribute('server_interface_name'));
  }
  public set serverInterfaceName(value: string[]) {
    this._serverInterfaceName = value;
  }
  public resetServerInterfaceName() {
    this._serverInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInterfaceNameInput() {
    return this._serverInterfaceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay_mechanism: cdktf.stringToTerraform(this._delayMechanism),
      device_name: cdktf.stringToTerraform(this._deviceName),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      server_interface_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverInterfaceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay_mechanism: {
        value: cdktf.stringToHclTerraform(this._delayMechanism),
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
      server_interface_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverInterfaceName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
