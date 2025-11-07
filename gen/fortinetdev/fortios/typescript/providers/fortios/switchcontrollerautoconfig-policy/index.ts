// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerautoconfigPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy#id SwitchcontrollerautoconfigPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy#igmp_flood_report SwitchcontrollerautoconfigPolicy#igmp_flood_report}
  */
  readonly igmpFloodReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy#igmp_flood_traffic SwitchcontrollerautoconfigPolicy#igmp_flood_traffic}
  */
  readonly igmpFloodTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy#name SwitchcontrollerautoconfigPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy#poe_status SwitchcontrollerautoconfigPolicy#poe_status}
  */
  readonly poeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy#qos_policy SwitchcontrollerautoconfigPolicy#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy#storm_control_policy SwitchcontrollerautoconfigPolicy#storm_control_policy}
  */
  readonly stormControlPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy#vdomparam SwitchcontrollerautoconfigPolicy#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy fortios_switchcontrollerautoconfig_policy}
*/
export class SwitchcontrollerautoconfigPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontrollerautoconfig_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerautoconfigPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerautoconfigPolicy to import
  * @param importFromId The id of the existing SwitchcontrollerautoconfigPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerautoconfigPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontrollerautoconfig_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_policy fortios_switchcontrollerautoconfig_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerautoconfigPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerautoconfigPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontrollerautoconfig_policy',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._igmpFloodReport = config.igmpFloodReport;
    this._igmpFloodTraffic = config.igmpFloodTraffic;
    this._name = config.name;
    this._poeStatus = config.poeStatus;
    this._qosPolicy = config.qosPolicy;
    this._stormControlPolicy = config.stormControlPolicy;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
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
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
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
  private _stormControlPolicy?: string; 
  public get stormControlPolicy() {
    return this.getStringAttribute('storm_control_policy');
  }
  public set stormControlPolicy(value: string) {
    this._stormControlPolicy = value;
  }
  public resetStormControlPolicy() {
    this._stormControlPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlPolicyInput() {
    return this._stormControlPolicy;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      igmp_flood_report: cdktf.stringToTerraform(this._igmpFloodReport),
      igmp_flood_traffic: cdktf.stringToTerraform(this._igmpFloodTraffic),
      name: cdktf.stringToTerraform(this._name),
      poe_status: cdktf.stringToTerraform(this._poeStatus),
      qos_policy: cdktf.stringToTerraform(this._qosPolicy),
      storm_control_policy: cdktf.stringToTerraform(this._stormControlPolicy),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
        value: cdktf.stringToHclTerraform(this._qosPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storm_control_policy: {
        value: cdktf.stringToHclTerraform(this._stormControlPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
