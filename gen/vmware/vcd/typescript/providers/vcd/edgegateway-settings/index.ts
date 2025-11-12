// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgegatewaySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the edge gateway. Required when 'edge_gateway_name' is not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#edge_gateway_id EdgegatewaySettings#edge_gateway_id}
  */
  readonly edgeGatewayId?: string;
  /**
  * Name of the edge gateway. Required when 'edge_gateway_id' is not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#edge_gateway_name EdgegatewaySettings#edge_gateway_name}
  */
  readonly edgeGatewayName?: string;
  /**
  * 'accept' or 'deny'. Default 'deny'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#fw_default_rule_action EdgegatewaySettings#fw_default_rule_action}
  */
  readonly fwDefaultRuleAction?: string;
  /**
  * Enable logging for default rule. Default 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#fw_default_rule_logging_enabled EdgegatewaySettings#fw_default_rule_logging_enabled}
  */
  readonly fwDefaultRuleLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable firewall. Default 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#fw_enabled EdgegatewaySettings#fw_enabled}
  */
  readonly fwEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#id EdgegatewaySettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable load balancer acceleration. (Disabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#lb_acceleration_enabled EdgegatewaySettings#lb_acceleration_enabled}
  */
  readonly lbAccelerationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable load balancing. (Disabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#lb_enabled EdgegatewaySettings#lb_enabled}
  */
  readonly lbEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable load balancer logging. (Disabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#lb_logging_enabled EdgegatewaySettings#lb_logging_enabled}
  */
  readonly lbLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Log level. One of 'emergency', 'alert', 'critical', 'error', 'warning', 'notice', 'info', 'debug'. ('info' by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#lb_loglevel EdgegatewaySettings#lb_loglevel}
  */
  readonly lbLoglevel?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#org EdgegatewaySettings#org}
  */
  readonly org?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#vdc EdgegatewaySettings#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings vcd_edgegateway_settings}
*/
export class EdgegatewaySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_edgegateway_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgegatewaySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgegatewaySettings to import
  * @param importFromId The id of the existing EdgegatewaySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgegatewaySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_edgegateway_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_settings vcd_edgegateway_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgegatewaySettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EdgegatewaySettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_edgegateway_settings',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeGatewayId = config.edgeGatewayId;
    this._edgeGatewayName = config.edgeGatewayName;
    this._fwDefaultRuleAction = config.fwDefaultRuleAction;
    this._fwDefaultRuleLoggingEnabled = config.fwDefaultRuleLoggingEnabled;
    this._fwEnabled = config.fwEnabled;
    this._id = config.id;
    this._lbAccelerationEnabled = config.lbAccelerationEnabled;
    this._lbEnabled = config.lbEnabled;
    this._lbLoggingEnabled = config.lbLoggingEnabled;
    this._lbLoglevel = config.lbLoglevel;
    this._org = config.org;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_gateway_id - computed: true, optional: true, required: false
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  public resetEdgeGatewayId() {
    this._edgeGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
  }

  // edge_gateway_name - computed: true, optional: true, required: false
  private _edgeGatewayName?: string; 
  public get edgeGatewayName() {
    return this.getStringAttribute('edge_gateway_name');
  }
  public set edgeGatewayName(value: string) {
    this._edgeGatewayName = value;
  }
  public resetEdgeGatewayName() {
    this._edgeGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayNameInput() {
    return this._edgeGatewayName;
  }

  // fw_default_rule_action - computed: false, optional: true, required: false
  private _fwDefaultRuleAction?: string; 
  public get fwDefaultRuleAction() {
    return this.getStringAttribute('fw_default_rule_action');
  }
  public set fwDefaultRuleAction(value: string) {
    this._fwDefaultRuleAction = value;
  }
  public resetFwDefaultRuleAction() {
    this._fwDefaultRuleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDefaultRuleActionInput() {
    return this._fwDefaultRuleAction;
  }

  // fw_default_rule_logging_enabled - computed: false, optional: true, required: false
  private _fwDefaultRuleLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get fwDefaultRuleLoggingEnabled() {
    return this.getBooleanAttribute('fw_default_rule_logging_enabled');
  }
  public set fwDefaultRuleLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._fwDefaultRuleLoggingEnabled = value;
  }
  public resetFwDefaultRuleLoggingEnabled() {
    this._fwDefaultRuleLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDefaultRuleLoggingEnabledInput() {
    return this._fwDefaultRuleLoggingEnabled;
  }

  // fw_enabled - computed: false, optional: true, required: false
  private _fwEnabled?: boolean | cdktf.IResolvable; 
  public get fwEnabled() {
    return this.getBooleanAttribute('fw_enabled');
  }
  public set fwEnabled(value: boolean | cdktf.IResolvable) {
    this._fwEnabled = value;
  }
  public resetFwEnabled() {
    this._fwEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwEnabledInput() {
    return this._fwEnabled;
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

  // lb_acceleration_enabled - computed: false, optional: true, required: false
  private _lbAccelerationEnabled?: boolean | cdktf.IResolvable; 
  public get lbAccelerationEnabled() {
    return this.getBooleanAttribute('lb_acceleration_enabled');
  }
  public set lbAccelerationEnabled(value: boolean | cdktf.IResolvable) {
    this._lbAccelerationEnabled = value;
  }
  public resetLbAccelerationEnabled() {
    this._lbAccelerationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAccelerationEnabledInput() {
    return this._lbAccelerationEnabled;
  }

  // lb_enabled - computed: false, optional: true, required: false
  private _lbEnabled?: boolean | cdktf.IResolvable; 
  public get lbEnabled() {
    return this.getBooleanAttribute('lb_enabled');
  }
  public set lbEnabled(value: boolean | cdktf.IResolvable) {
    this._lbEnabled = value;
  }
  public resetLbEnabled() {
    this._lbEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbEnabledInput() {
    return this._lbEnabled;
  }

  // lb_logging_enabled - computed: false, optional: true, required: false
  private _lbLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get lbLoggingEnabled() {
    return this.getBooleanAttribute('lb_logging_enabled');
  }
  public set lbLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._lbLoggingEnabled = value;
  }
  public resetLbLoggingEnabled() {
    this._lbLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbLoggingEnabledInput() {
    return this._lbLoggingEnabled;
  }

  // lb_loglevel - computed: false, optional: true, required: false
  private _lbLoglevel?: string; 
  public get lbLoglevel() {
    return this.getStringAttribute('lb_loglevel');
  }
  public set lbLoglevel(value: string) {
    this._lbLoglevel = value;
  }
  public resetLbLoglevel() {
    this._lbLoglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbLoglevelInput() {
    return this._lbLoglevel;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      edge_gateway_name: cdktf.stringToTerraform(this._edgeGatewayName),
      fw_default_rule_action: cdktf.stringToTerraform(this._fwDefaultRuleAction),
      fw_default_rule_logging_enabled: cdktf.booleanToTerraform(this._fwDefaultRuleLoggingEnabled),
      fw_enabled: cdktf.booleanToTerraform(this._fwEnabled),
      id: cdktf.stringToTerraform(this._id),
      lb_acceleration_enabled: cdktf.booleanToTerraform(this._lbAccelerationEnabled),
      lb_enabled: cdktf.booleanToTerraform(this._lbEnabled),
      lb_logging_enabled: cdktf.booleanToTerraform(this._lbLoggingEnabled),
      lb_loglevel: cdktf.stringToTerraform(this._lbLoglevel),
      org: cdktf.stringToTerraform(this._org),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_gateway_name: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fw_default_rule_action: {
        value: cdktf.stringToHclTerraform(this._fwDefaultRuleAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fw_default_rule_logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._fwDefaultRuleLoggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fw_enabled: {
        value: cdktf.booleanToHclTerraform(this._fwEnabled),
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
      lb_acceleration_enabled: {
        value: cdktf.booleanToHclTerraform(this._lbAccelerationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lb_enabled: {
        value: cdktf.booleanToHclTerraform(this._lbEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lb_logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._lbLoggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lb_loglevel: {
        value: cdktf.stringToHclTerraform(this._lbLoglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
