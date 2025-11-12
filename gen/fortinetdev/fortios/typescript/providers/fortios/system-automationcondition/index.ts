// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAutomationconditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#condition_type SystemAutomationcondition#condition_type}
  */
  readonly conditionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#cpu_usage_percent SystemAutomationcondition#cpu_usage_percent}
  */
  readonly cpuUsagePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#description SystemAutomationcondition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#id SystemAutomationcondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#mem_usage_percent SystemAutomationcondition#mem_usage_percent}
  */
  readonly memUsagePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#name SystemAutomationcondition#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#vdom SystemAutomationcondition#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#vdomparam SystemAutomationcondition#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#vpn_tunnel_name SystemAutomationcondition#vpn_tunnel_name}
  */
  readonly vpnTunnelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#vpn_tunnel_state SystemAutomationcondition#vpn_tunnel_state}
  */
  readonly vpnTunnelState?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition fortios_system_automationcondition}
*/
export class SystemAutomationcondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_automationcondition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAutomationcondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAutomationcondition to import
  * @param importFromId The id of the existing SystemAutomationcondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAutomationcondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_automationcondition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationcondition fortios_system_automationcondition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAutomationconditionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAutomationconditionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_automationcondition',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditionType = config.conditionType;
    this._cpuUsagePercent = config.cpuUsagePercent;
    this._description = config.description;
    this._id = config.id;
    this._memUsagePercent = config.memUsagePercent;
    this._name = config.name;
    this._vdom = config.vdom;
    this._vdomparam = config.vdomparam;
    this._vpnTunnelName = config.vpnTunnelName;
    this._vpnTunnelState = config.vpnTunnelState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_type - computed: true, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // cpu_usage_percent - computed: false, optional: true, required: false
  private _cpuUsagePercent?: number; 
  public get cpuUsagePercent() {
    return this.getNumberAttribute('cpu_usage_percent');
  }
  public set cpuUsagePercent(value: number) {
    this._cpuUsagePercent = value;
  }
  public resetCpuUsagePercent() {
    this._cpuUsagePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsagePercentInput() {
    return this._cpuUsagePercent;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // mem_usage_percent - computed: false, optional: true, required: false
  private _memUsagePercent?: number; 
  public get memUsagePercent() {
    return this.getNumberAttribute('mem_usage_percent');
  }
  public set memUsagePercent(value: number) {
    this._memUsagePercent = value;
  }
  public resetMemUsagePercent() {
    this._memUsagePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memUsagePercentInput() {
    return this._memUsagePercent;
  }

  // name - computed: true, optional: true, required: false
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

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
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

  // vpn_tunnel_name - computed: false, optional: true, required: false
  private _vpnTunnelName?: string; 
  public get vpnTunnelName() {
    return this.getStringAttribute('vpn_tunnel_name');
  }
  public set vpnTunnelName(value: string) {
    this._vpnTunnelName = value;
  }
  public resetVpnTunnelName() {
    this._vpnTunnelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTunnelNameInput() {
    return this._vpnTunnelName;
  }

  // vpn_tunnel_state - computed: true, optional: true, required: false
  private _vpnTunnelState?: string; 
  public get vpnTunnelState() {
    return this.getStringAttribute('vpn_tunnel_state');
  }
  public set vpnTunnelState(value: string) {
    this._vpnTunnelState = value;
  }
  public resetVpnTunnelState() {
    this._vpnTunnelState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTunnelStateInput() {
    return this._vpnTunnelState;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition_type: cdktf.stringToTerraform(this._conditionType),
      cpu_usage_percent: cdktf.numberToTerraform(this._cpuUsagePercent),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      mem_usage_percent: cdktf.numberToTerraform(this._memUsagePercent),
      name: cdktf.stringToTerraform(this._name),
      vdom: cdktf.stringToTerraform(this._vdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vpn_tunnel_name: cdktf.stringToTerraform(this._vpnTunnelName),
      vpn_tunnel_state: cdktf.stringToTerraform(this._vpnTunnelState),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_usage_percent: {
        value: cdktf.numberToHclTerraform(this._cpuUsagePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      mem_usage_percent: {
        value: cdktf.numberToHclTerraform(this._memUsagePercent),
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
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
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
      vpn_tunnel_name: {
        value: cdktf.stringToHclTerraform(this._vpnTunnelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_tunnel_state: {
        value: cdktf.stringToHclTerraform(this._vpnTunnelState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
