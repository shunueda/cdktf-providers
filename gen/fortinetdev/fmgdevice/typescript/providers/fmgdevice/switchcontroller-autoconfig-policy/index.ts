// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerAutoconfigPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy#device_name SwitchcontrollerAutoconfigPolicy#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy#device_vdom SwitchcontrollerAutoconfigPolicy#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy#id SwitchcontrollerAutoconfigPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy#igmp_flood_report SwitchcontrollerAutoconfigPolicy#igmp_flood_report}
  */
  readonly igmpFloodReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy#igmp_flood_traffic SwitchcontrollerAutoconfigPolicy#igmp_flood_traffic}
  */
  readonly igmpFloodTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy#name SwitchcontrollerAutoconfigPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy#poe_status SwitchcontrollerAutoconfigPolicy#poe_status}
  */
  readonly poeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy#qos_policy SwitchcontrollerAutoconfigPolicy#qos_policy}
  */
  readonly qosPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy#storm_control_policy SwitchcontrollerAutoconfigPolicy#storm_control_policy}
  */
  readonly stormControlPolicy?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy fmgdevice_switchcontroller_autoconfig_policy}
*/
export class SwitchcontrollerAutoconfigPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_autoconfig_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerAutoconfigPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerAutoconfigPolicy to import
  * @param importFromId The id of the existing SwitchcontrollerAutoconfigPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerAutoconfigPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_autoconfig_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_policy fmgdevice_switchcontroller_autoconfig_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerAutoconfigPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerAutoconfigPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_autoconfig_policy',
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
    this._id = config.id;
    this._igmpFloodReport = config.igmpFloodReport;
    this._igmpFloodTraffic = config.igmpFloodTraffic;
    this._name = config.name;
    this._poeStatus = config.poeStatus;
    this._qosPolicy = config.qosPolicy;
    this._stormControlPolicy = config.stormControlPolicy;
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

  // igmp_flood_report - computed: true, optional: true, required: false
  private _igmpFloodReport?: string; 
  public get igmpFloodReport() {
    return this.getStringAttribute('igmp_flood_report');
  }
  public set igmpFloodReport(value: string) {
    this._igmpFloodReport = value;
  }
  public resetIgmpFloodReport() {
    this._igmpFloodReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpFloodReportInput() {
    return this._igmpFloodReport;
  }

  // igmp_flood_traffic - computed: true, optional: true, required: false
  private _igmpFloodTraffic?: string; 
  public get igmpFloodTraffic() {
    return this.getStringAttribute('igmp_flood_traffic');
  }
  public set igmpFloodTraffic(value: string) {
    this._igmpFloodTraffic = value;
  }
  public resetIgmpFloodTraffic() {
    this._igmpFloodTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpFloodTrafficInput() {
    return this._igmpFloodTraffic;
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

  // poe_status - computed: true, optional: true, required: false
  private _poeStatus?: string; 
  public get poeStatus() {
    return this.getStringAttribute('poe_status');
  }
  public set poeStatus(value: string) {
    this._poeStatus = value;
  }
  public resetPoeStatus() {
    this._poeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeStatusInput() {
    return this._poeStatus;
  }

  // qos_policy - computed: true, optional: true, required: false
  private _qosPolicy?: string[]; 
  public get qosPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('qos_policy'));
  }
  public set qosPolicy(value: string[]) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // storm_control_policy - computed: true, optional: true, required: false
  private _stormControlPolicy?: string[]; 
  public get stormControlPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('storm_control_policy'));
  }
  public set stormControlPolicy(value: string[]) {
    this._stormControlPolicy = value;
  }
  public resetStormControlPolicy() {
    this._stormControlPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlPolicyInput() {
    return this._stormControlPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      igmp_flood_report: cdktf.stringToTerraform(this._igmpFloodReport),
      igmp_flood_traffic: cdktf.stringToTerraform(this._igmpFloodTraffic),
      name: cdktf.stringToTerraform(this._name),
      poe_status: cdktf.stringToTerraform(this._poeStatus),
      qos_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._qosPolicy),
      storm_control_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stormControlPolicy),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_flood_report: {
        value: cdktf.stringToHclTerraform(this._igmpFloodReport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_flood_traffic: {
        value: cdktf.stringToHclTerraform(this._igmpFloodTraffic),
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
      poe_status: {
        value: cdktf.stringToHclTerraform(this._poeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._qosPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storm_control_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._stormControlPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
