// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the minimum tracking active connection to start identifying slow attacker, default value is 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification#active_connection DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA#active_connection}
  */
  readonly activeConnection?: number;
  /**
  * Set the maximum percentage of slow connection (per source), default value is 75
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification#bad_connection DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA#bad_connection}
  */
  readonly badConnection?: number;
  /**
  * Progression tracking will identify slow attacker and blacklist it based on the config value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification#enable_identification DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA#enable_identification}
  */
  readonly enableIdentification?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification#id DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tcp_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification#tcp_name DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA#tcp_name}
  */
  readonly tcpName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification#uuid DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification thunder_ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification}
*/
export class DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA to import
  * @param importFromId The id of the existing DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification thunder_ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateTcpProgressionTrackingMitigationSlowAttackSlowAttackerIdentificationAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_tcp_progression_tracking_mitigation_slow_attack_slow_attacker_identification',
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
    this._activeConnection = config.activeConnection;
    this._badConnection = config.badConnection;
    this._enableIdentification = config.enableIdentification;
    this._id = config.id;
    this._tcpName = config.tcpName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_connection: cdktf.numberToTerraform(this._activeConnection),
      bad_connection: cdktf.numberToTerraform(this._badConnection),
      enable_identification: cdktf.numberToTerraform(this._enableIdentification),
      id: cdktf.stringToTerraform(this._id),
      tcp_name: cdktf.stringToTerraform(this._tcpName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_connection: {
        value: cdktf.numberToHclTerraform(this._activeConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_connection: {
        value: cdktf.numberToHclTerraform(this._badConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_identification: {
        value: cdktf.numberToHclTerraform(this._enableIdentification),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
