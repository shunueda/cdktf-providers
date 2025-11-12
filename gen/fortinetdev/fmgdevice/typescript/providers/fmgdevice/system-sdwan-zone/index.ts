// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSdwanZoneAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone#advpn_health_check SystemSdwanZoneA#advpn_health_check}
  */
  readonly advpnHealthCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone#advpn_select SystemSdwanZoneA#advpn_select}
  */
  readonly advpnSelect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone#device_name SystemSdwanZoneA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone#device_vdom SystemSdwanZoneA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone#id SystemSdwanZoneA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone#minimum_sla_meet_members SystemSdwanZoneA#minimum_sla_meet_members}
  */
  readonly minimumSlaMeetMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone#name SystemSdwanZoneA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone#service_sla_tie_break SystemSdwanZoneA#service_sla_tie_break}
  */
  readonly serviceSlaTieBreak?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone fmgdevice_system_sdwan_zone}
*/
export class SystemSdwanZoneA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_sdwan_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSdwanZoneA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSdwanZoneA to import
  * @param importFromId The id of the existing SystemSdwanZoneA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSdwanZoneA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_sdwan_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_zone fmgdevice_system_sdwan_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSdwanZoneAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSdwanZoneAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_sdwan_zone',
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
    this._advpnHealthCheck = config.advpnHealthCheck;
    this._advpnSelect = config.advpnSelect;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._minimumSlaMeetMembers = config.minimumSlaMeetMembers;
    this._name = config.name;
    this._serviceSlaTieBreak = config.serviceSlaTieBreak;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advpn_health_check - computed: true, optional: true, required: false
  private _advpnHealthCheck?: string[]; 
  public get advpnHealthCheck() {
    return cdktf.Fn.tolist(this.getListAttribute('advpn_health_check'));
  }
  public set advpnHealthCheck(value: string[]) {
    this._advpnHealthCheck = value;
  }
  public resetAdvpnHealthCheck() {
    this._advpnHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advpnHealthCheckInput() {
    return this._advpnHealthCheck;
  }

  // advpn_select - computed: true, optional: true, required: false
  private _advpnSelect?: string; 
  public get advpnSelect() {
    return this.getStringAttribute('advpn_select');
  }
  public set advpnSelect(value: string) {
    this._advpnSelect = value;
  }
  public resetAdvpnSelect() {
    this._advpnSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advpnSelectInput() {
    return this._advpnSelect;
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

  // minimum_sla_meet_members - computed: true, optional: true, required: false
  private _minimumSlaMeetMembers?: number; 
  public get minimumSlaMeetMembers() {
    return this.getNumberAttribute('minimum_sla_meet_members');
  }
  public set minimumSlaMeetMembers(value: number) {
    this._minimumSlaMeetMembers = value;
  }
  public resetMinimumSlaMeetMembers() {
    this._minimumSlaMeetMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSlaMeetMembersInput() {
    return this._minimumSlaMeetMembers;
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

  // service_sla_tie_break - computed: true, optional: true, required: false
  private _serviceSlaTieBreak?: string; 
  public get serviceSlaTieBreak() {
    return this.getStringAttribute('service_sla_tie_break');
  }
  public set serviceSlaTieBreak(value: string) {
    this._serviceSlaTieBreak = value;
  }
  public resetServiceSlaTieBreak() {
    this._serviceSlaTieBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSlaTieBreakInput() {
    return this._serviceSlaTieBreak;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advpn_health_check: cdktf.listMapper(cdktf.stringToTerraform, false)(this._advpnHealthCheck),
      advpn_select: cdktf.stringToTerraform(this._advpnSelect),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      minimum_sla_meet_members: cdktf.numberToTerraform(this._minimumSlaMeetMembers),
      name: cdktf.stringToTerraform(this._name),
      service_sla_tie_break: cdktf.stringToTerraform(this._serviceSlaTieBreak),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advpn_health_check: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._advpnHealthCheck),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      advpn_select: {
        value: cdktf.stringToHclTerraform(this._advpnSelect),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_sla_meet_members: {
        value: cdktf.numberToHclTerraform(this._minimumSlaMeetMembers),
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
      service_sla_tie_break: {
        value: cdktf.stringToHclTerraform(this._serviceSlaTieBreak),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
