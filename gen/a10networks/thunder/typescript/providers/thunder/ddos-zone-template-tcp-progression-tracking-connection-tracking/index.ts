// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateTcpProgressionTrackingConnectionTrackingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the maximum duration time (in unit of 100ms, up to 24 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#conn_duration_max DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#conn_duration_max}
  */
  readonly connDurationMax?: number;
  /**
  * Set the minimum duration time (in unit of 100ms, up to 24 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#conn_duration_min DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#conn_duration_min}
  */
  readonly connDurationMin?: number;
  /**
  * Set the maximum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#conn_rcvd_max DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#conn_rcvd_max}
  */
  readonly connRcvdMax?: number;
  /**
  * Set the minimum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#conn_rcvd_min DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#conn_rcvd_min}
  */
  readonly connRcvdMin?: number;
  /**
  * Set the maximum received to sent ratio (in unit of milli-, 0.001)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#conn_rcvd_sent_ratio_max DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#conn_rcvd_sent_ratio_max}
  */
  readonly connRcvdSentRatioMax?: number;
  /**
  * Set the minimum received to sent ratio (in unit of milli-, 0.001)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#conn_rcvd_sent_ratio_min DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#conn_rcvd_sent_ratio_min}
  */
  readonly connRcvdSentRatioMin?: number;
  /**
  * Set the maximum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#conn_sent_max DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#conn_sent_max}
  */
  readonly connSentMax?: number;
  /**
  * Set the minimum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#conn_sent_min DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#conn_sent_min}
  */
  readonly connSentMin?: number;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#conn_violation DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#conn_violation}
  */
  readonly connViolation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#id DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#name DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#name}
  */
  readonly name: string;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#progression_tracking_conn_action DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#progression_tracking_conn_action}
  */
  readonly progressionTrackingConnAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#progression_tracking_conn_action_list_name DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#progression_tracking_conn_action_list_name}
  */
  readonly progressionTrackingConnActionListName?: string;
  /**
  * 'enable-check': Enable General Progression Tracking per Connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#progression_tracking_conn_enabled DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#progression_tracking_conn_enabled}
  */
  readonly progressionTrackingConnEnabled: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#uuid DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking thunder_ddos_zone_template_tcp_progression_tracking_connection_tracking}
*/
export class DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_tcp_progression_tracking_connection_tracking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA to import
  * @param importFromId The id of the existing DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateTcpProgressionTrackingConnectionTrackingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_tcp_progression_tracking_connection_tracking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp_progression_tracking_connection_tracking thunder_ddos_zone_template_tcp_progression_tracking_connection_tracking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateTcpProgressionTrackingConnectionTrackingAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateTcpProgressionTrackingConnectionTrackingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_tcp_progression_tracking_connection_tracking',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connDurationMax = config.connDurationMax;
    this._connDurationMin = config.connDurationMin;
    this._connRcvdMax = config.connRcvdMax;
    this._connRcvdMin = config.connRcvdMin;
    this._connRcvdSentRatioMax = config.connRcvdSentRatioMax;
    this._connRcvdSentRatioMin = config.connRcvdSentRatioMin;
    this._connSentMax = config.connSentMax;
    this._connSentMin = config.connSentMin;
    this._connViolation = config.connViolation;
    this._id = config.id;
    this._name = config.name;
    this._progressionTrackingConnAction = config.progressionTrackingConnAction;
    this._progressionTrackingConnActionListName = config.progressionTrackingConnActionListName;
    this._progressionTrackingConnEnabled = config.progressionTrackingConnEnabled;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conn_duration_max - computed: false, optional: true, required: false
  private _connDurationMax?: number; 
  public get connDurationMax() {
    return this.getNumberAttribute('conn_duration_max');
  }
  public set connDurationMax(value: number) {
    this._connDurationMax = value;
  }
  public resetConnDurationMax() {
    this._connDurationMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connDurationMaxInput() {
    return this._connDurationMax;
  }

  // conn_duration_min - computed: false, optional: true, required: false
  private _connDurationMin?: number; 
  public get connDurationMin() {
    return this.getNumberAttribute('conn_duration_min');
  }
  public set connDurationMin(value: number) {
    this._connDurationMin = value;
  }
  public resetConnDurationMin() {
    this._connDurationMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connDurationMinInput() {
    return this._connDurationMin;
  }

  // conn_rcvd_max - computed: false, optional: true, required: false
  private _connRcvdMax?: number; 
  public get connRcvdMax() {
    return this.getNumberAttribute('conn_rcvd_max');
  }
  public set connRcvdMax(value: number) {
    this._connRcvdMax = value;
  }
  public resetConnRcvdMax() {
    this._connRcvdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdMaxInput() {
    return this._connRcvdMax;
  }

  // conn_rcvd_min - computed: false, optional: true, required: false
  private _connRcvdMin?: number; 
  public get connRcvdMin() {
    return this.getNumberAttribute('conn_rcvd_min');
  }
  public set connRcvdMin(value: number) {
    this._connRcvdMin = value;
  }
  public resetConnRcvdMin() {
    this._connRcvdMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdMinInput() {
    return this._connRcvdMin;
  }

  // conn_rcvd_sent_ratio_max - computed: false, optional: true, required: false
  private _connRcvdSentRatioMax?: number; 
  public get connRcvdSentRatioMax() {
    return this.getNumberAttribute('conn_rcvd_sent_ratio_max');
  }
  public set connRcvdSentRatioMax(value: number) {
    this._connRcvdSentRatioMax = value;
  }
  public resetConnRcvdSentRatioMax() {
    this._connRcvdSentRatioMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdSentRatioMaxInput() {
    return this._connRcvdSentRatioMax;
  }

  // conn_rcvd_sent_ratio_min - computed: false, optional: true, required: false
  private _connRcvdSentRatioMin?: number; 
  public get connRcvdSentRatioMin() {
    return this.getNumberAttribute('conn_rcvd_sent_ratio_min');
  }
  public set connRcvdSentRatioMin(value: number) {
    this._connRcvdSentRatioMin = value;
  }
  public resetConnRcvdSentRatioMin() {
    this._connRcvdSentRatioMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdSentRatioMinInput() {
    return this._connRcvdSentRatioMin;
  }

  // conn_sent_max - computed: false, optional: true, required: false
  private _connSentMax?: number; 
  public get connSentMax() {
    return this.getNumberAttribute('conn_sent_max');
  }
  public set connSentMax(value: number) {
    this._connSentMax = value;
  }
  public resetConnSentMax() {
    this._connSentMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSentMaxInput() {
    return this._connSentMax;
  }

  // conn_sent_min - computed: false, optional: true, required: false
  private _connSentMin?: number; 
  public get connSentMin() {
    return this.getNumberAttribute('conn_sent_min');
  }
  public set connSentMin(value: number) {
    this._connSentMin = value;
  }
  public resetConnSentMin() {
    this._connSentMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSentMinInput() {
    return this._connSentMin;
  }

  // conn_violation - computed: false, optional: true, required: false
  private _connViolation?: number; 
  public get connViolation() {
    return this.getNumberAttribute('conn_violation');
  }
  public set connViolation(value: number) {
    this._connViolation = value;
  }
  public resetConnViolation() {
    this._connViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connViolationInput() {
    return this._connViolation;
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

  // progression_tracking_conn_action - computed: false, optional: true, required: false
  private _progressionTrackingConnAction?: string; 
  public get progressionTrackingConnAction() {
    return this.getStringAttribute('progression_tracking_conn_action');
  }
  public set progressionTrackingConnAction(value: string) {
    this._progressionTrackingConnAction = value;
  }
  public resetProgressionTrackingConnAction() {
    this._progressionTrackingConnAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingConnActionInput() {
    return this._progressionTrackingConnAction;
  }

  // progression_tracking_conn_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingConnActionListName?: string; 
  public get progressionTrackingConnActionListName() {
    return this.getStringAttribute('progression_tracking_conn_action_list_name');
  }
  public set progressionTrackingConnActionListName(value: string) {
    this._progressionTrackingConnActionListName = value;
  }
  public resetProgressionTrackingConnActionListName() {
    this._progressionTrackingConnActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingConnActionListNameInput() {
    return this._progressionTrackingConnActionListName;
  }

  // progression_tracking_conn_enabled - computed: false, optional: false, required: true
  private _progressionTrackingConnEnabled?: string; 
  public get progressionTrackingConnEnabled() {
    return this.getStringAttribute('progression_tracking_conn_enabled');
  }
  public set progressionTrackingConnEnabled(value: string) {
    this._progressionTrackingConnEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingConnEnabledInput() {
    return this._progressionTrackingConnEnabled;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conn_duration_max: cdktf.numberToTerraform(this._connDurationMax),
      conn_duration_min: cdktf.numberToTerraform(this._connDurationMin),
      conn_rcvd_max: cdktf.numberToTerraform(this._connRcvdMax),
      conn_rcvd_min: cdktf.numberToTerraform(this._connRcvdMin),
      conn_rcvd_sent_ratio_max: cdktf.numberToTerraform(this._connRcvdSentRatioMax),
      conn_rcvd_sent_ratio_min: cdktf.numberToTerraform(this._connRcvdSentRatioMin),
      conn_sent_max: cdktf.numberToTerraform(this._connSentMax),
      conn_sent_min: cdktf.numberToTerraform(this._connSentMin),
      conn_violation: cdktf.numberToTerraform(this._connViolation),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      progression_tracking_conn_action: cdktf.stringToTerraform(this._progressionTrackingConnAction),
      progression_tracking_conn_action_list_name: cdktf.stringToTerraform(this._progressionTrackingConnActionListName),
      progression_tracking_conn_enabled: cdktf.stringToTerraform(this._progressionTrackingConnEnabled),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conn_duration_max: {
        value: cdktf.numberToHclTerraform(this._connDurationMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_duration_min: {
        value: cdktf.numberToHclTerraform(this._connDurationMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rcvd_max: {
        value: cdktf.numberToHclTerraform(this._connRcvdMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rcvd_min: {
        value: cdktf.numberToHclTerraform(this._connRcvdMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rcvd_sent_ratio_max: {
        value: cdktf.numberToHclTerraform(this._connRcvdSentRatioMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rcvd_sent_ratio_min: {
        value: cdktf.numberToHclTerraform(this._connRcvdSentRatioMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_sent_max: {
        value: cdktf.numberToHclTerraform(this._connSentMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_sent_min: {
        value: cdktf.numberToHclTerraform(this._connSentMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_violation: {
        value: cdktf.numberToHclTerraform(this._connViolation),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progression_tracking_conn_action: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingConnAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progression_tracking_conn_action_list_name: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingConnActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progression_tracking_conn_enabled: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingConnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
