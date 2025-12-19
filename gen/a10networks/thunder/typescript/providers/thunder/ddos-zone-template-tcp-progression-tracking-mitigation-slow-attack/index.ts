// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#id DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set client query time (in unit of 100ms). Suggested value larger than 30 secs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#init_request_max_time DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#init_request_max_time}
  */
  readonly initRequestMaxTime?: number;
  /**
  * Set server think time (in unit of 100ms). Suggested value larger than 45 secs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#init_response_max_time DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#init_response_max_time}
  */
  readonly initResponseMaxTime?: number;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'reset': Reset client connection; 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#progression_tracking_slow_action DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#progression_tracking_slow_action}
  */
  readonly progressionTrackingSlowAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#progression_tracking_slow_action_list_name DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#progression_tracking_slow_action_list_name}
  */
  readonly progressionTrackingSlowActionListName?: string;
  /**
  * Set the transferred packets per response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#response_pkt_rate_max DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#response_pkt_rate_max}
  */
  readonly responsePktRateMax?: number;
  /**
  * Tcp_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#tcp_name DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#tcp_name}
  */
  readonly tcpName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#uuid DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#uuid}
  */
  readonly uuid?: string;
  /**
  * slow_attacker_identification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#slow_attacker_identification DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#slow_attacker_identification}
  */
  readonly slowAttackerIdentification?: DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA;
}
export interface DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA {
  /**
  * Set the minimum tracking active connection to start identifying slow attacker, default value is 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#active_connection DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#active_connection}
  */
  readonly activeConnection?: number;
  /**
  * Set the maximum percentage of slow connection (per source), default value is 75
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#bad_connection DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#bad_connection}
  */
  readonly badConnection?: number;
  /**
  * Progression tracking will identify slow attacker and blacklist it based on the config value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#enable_identification DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#enable_identification}
  */
  readonly enableIdentification?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#uuid DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAToTerraform(struct?: DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAOutputReference | DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_connection: cdktf.numberToTerraform(struct!.activeConnection),
    bad_connection: cdktf.numberToTerraform(struct!.badConnection),
    enable_identification: cdktf.numberToTerraform(struct!.enableIdentification),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAToHclTerraform(struct?: DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAOutputReference | DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_connection: {
      value: cdktf.numberToHclTerraform(struct!.activeConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_connection: {
      value: cdktf.numberToHclTerraform(struct!.badConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_identification: {
      value: cdktf.numberToHclTerraform(struct!.enableIdentification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeConnection = this._activeConnection;
    }
    if (this._badConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.badConnection = this._badConnection;
    }
    if (this._enableIdentification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdentification = this._enableIdentification;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeConnection = undefined;
      this._badConnection = undefined;
      this._enableIdentification = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeConnection = value.activeConnection;
      this._badConnection = value.badConnection;
      this._enableIdentification = value.enableIdentification;
      this._uuid = value.uuid;
    }
  }

  // active_connection - computed: false, optional: true, required: false
  private _activeConnection?: number; 
  public get activeConnection() {
    return this.getNumberAttribute('active_connection');
  }
  public set activeConnection(value: number) {
    this._activeConnection = value;
  }
  public resetActiveConnection() {
    this._activeConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeConnectionInput() {
    return this._activeConnection;
  }

  // bad_connection - computed: false, optional: true, required: false
  private _badConnection?: number; 
  public get badConnection() {
    return this.getNumberAttribute('bad_connection');
  }
  public set badConnection(value: number) {
    this._badConnection = value;
  }
  public resetBadConnection() {
    this._badConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badConnectionInput() {
    return this._badConnection;
  }

  // enable_identification - computed: false, optional: true, required: false
  private _enableIdentification?: number; 
  public get enableIdentification() {
    return this.getNumberAttribute('enable_identification');
  }
  public set enableIdentification(value: number) {
    this._enableIdentification = value;
  }
  public resetEnableIdentification() {
    this._enableIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentificationInput() {
    return this._enableIdentification;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack thunder_ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack}
*/
export class DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA to import
  * @param importFromId The id of the existing DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack thunder_ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._initRequestMaxTime = config.initRequestMaxTime;
    this._initResponseMaxTime = config.initResponseMaxTime;
    this._progressionTrackingSlowAction = config.progressionTrackingSlowAction;
    this._progressionTrackingSlowActionListName = config.progressionTrackingSlowActionListName;
    this._responsePktRateMax = config.responsePktRateMax;
    this._tcpName = config.tcpName;
    this._uuid = config.uuid;
    this._slowAttackerIdentification.internalValue = config.slowAttackerIdentification;
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

  // init_request_max_time - computed: false, optional: true, required: false
  private _initRequestMaxTime?: number; 
  public get initRequestMaxTime() {
    return this.getNumberAttribute('init_request_max_time');
  }
  public set initRequestMaxTime(value: number) {
    this._initRequestMaxTime = value;
  }
  public resetInitRequestMaxTime() {
    this._initRequestMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initRequestMaxTimeInput() {
    return this._initRequestMaxTime;
  }

  // init_response_max_time - computed: false, optional: true, required: false
  private _initResponseMaxTime?: number; 
  public get initResponseMaxTime() {
    return this.getNumberAttribute('init_response_max_time');
  }
  public set initResponseMaxTime(value: number) {
    this._initResponseMaxTime = value;
  }
  public resetInitResponseMaxTime() {
    this._initResponseMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initResponseMaxTimeInput() {
    return this._initResponseMaxTime;
  }

  // progression_tracking_slow_action - computed: false, optional: true, required: false
  private _progressionTrackingSlowAction?: string; 
  public get progressionTrackingSlowAction() {
    return this.getStringAttribute('progression_tracking_slow_action');
  }
  public set progressionTrackingSlowAction(value: string) {
    this._progressionTrackingSlowAction = value;
  }
  public resetProgressionTrackingSlowAction() {
    this._progressionTrackingSlowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingSlowActionInput() {
    return this._progressionTrackingSlowAction;
  }

  // progression_tracking_slow_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingSlowActionListName?: string; 
  public get progressionTrackingSlowActionListName() {
    return this.getStringAttribute('progression_tracking_slow_action_list_name');
  }
  public set progressionTrackingSlowActionListName(value: string) {
    this._progressionTrackingSlowActionListName = value;
  }
  public resetProgressionTrackingSlowActionListName() {
    this._progressionTrackingSlowActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingSlowActionListNameInput() {
    return this._progressionTrackingSlowActionListName;
  }

  // response_pkt_rate_max - computed: false, optional: true, required: false
  private _responsePktRateMax?: number; 
  public get responsePktRateMax() {
    return this.getNumberAttribute('response_pkt_rate_max');
  }
  public set responsePktRateMax(value: number) {
    this._responsePktRateMax = value;
  }
  public resetResponsePktRateMax() {
    this._responsePktRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePktRateMaxInput() {
    return this._responsePktRateMax;
  }

  // tcp_name - computed: false, optional: false, required: true
  private _tcpName?: string; 
  public get tcpName() {
    return this.getStringAttribute('tcp_name');
  }
  public set tcpName(value: string) {
    this._tcpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNameInput() {
    return this._tcpName;
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

  // slow_attacker_identification - computed: false, optional: true, required: false
  private _slowAttackerIdentification = new DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAOutputReference(this, "slow_attacker_identification");
  public get slowAttackerIdentification() {
    return this._slowAttackerIdentification;
  }
  public putSlowAttackerIdentification(value: DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA) {
    this._slowAttackerIdentification.internalValue = value;
  }
  public resetSlowAttackerIdentification() {
    this._slowAttackerIdentification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowAttackerIdentificationInput() {
    return this._slowAttackerIdentification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      init_request_max_time: cdktf.numberToTerraform(this._initRequestMaxTime),
      init_response_max_time: cdktf.numberToTerraform(this._initResponseMaxTime),
      progression_tracking_slow_action: cdktf.stringToTerraform(this._progressionTrackingSlowAction),
      progression_tracking_slow_action_list_name: cdktf.stringToTerraform(this._progressionTrackingSlowActionListName),
      response_pkt_rate_max: cdktf.numberToTerraform(this._responsePktRateMax),
      tcp_name: cdktf.stringToTerraform(this._tcpName),
      uuid: cdktf.stringToTerraform(this._uuid),
      slow_attacker_identification: ddosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAToTerraform(this._slowAttackerIdentification.internalValue),
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
      init_request_max_time: {
        value: cdktf.numberToHclTerraform(this._initRequestMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      init_response_max_time: {
        value: cdktf.numberToHclTerraform(this._initResponseMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      progression_tracking_slow_action: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingSlowAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progression_tracking_slow_action_list_name: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingSlowActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_pkt_rate_max: {
        value: cdktf.numberToHclTerraform(this._responsePktRateMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_name: {
        value: cdktf.stringToHclTerraform(this._tcpName),
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
      slow_attacker_identification: {
        value: ddosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAToHclTerraform(this._slowAttackerIdentification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
