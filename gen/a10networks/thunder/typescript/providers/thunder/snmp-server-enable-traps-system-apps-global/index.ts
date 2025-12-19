// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_system_apps_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsSystemAppsGlobalAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable CPS trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_system_apps_global#cps_threshold SnmpServerEnableTrapsSystemAppsGlobalA#cps_threshold}
  */
  readonly cpsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_system_apps_global#id SnmpServerEnableTrapsSystemAppsGlobalA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable sessions threshold trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_system_apps_global#sessions_threshold SnmpServerEnableTrapsSystemAppsGlobalA#sessions_threshold}
  */
  readonly sessionsThreshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_system_apps_global#uuid SnmpServerEnableTrapsSystemAppsGlobalA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_system_apps_global thunder_snmp_server_enable_traps_system_apps_global}
*/
export class SnmpServerEnableTrapsSystemAppsGlobalA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_system_apps_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsSystemAppsGlobalA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsSystemAppsGlobalA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsSystemAppsGlobalA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_system_apps_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsSystemAppsGlobalA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_system_apps_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_system_apps_global thunder_snmp_server_enable_traps_system_apps_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsSystemAppsGlobalAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsSystemAppsGlobalAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_system_apps_global',
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
    this._cpsThreshold = config.cpsThreshold;
    this._id = config.id;
    this._sessionsThreshold = config.sessionsThreshold;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cps_threshold - computed: false, optional: true, required: false
  private _cpsThreshold?: number; 
  public get cpsThreshold() {
    return this.getNumberAttribute('cps_threshold');
  }
  public set cpsThreshold(value: number) {
    this._cpsThreshold = value;
  }
  public resetCpsThreshold() {
    this._cpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsThresholdInput() {
    return this._cpsThreshold;
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

  // sessions_threshold - computed: false, optional: true, required: false
  private _sessionsThreshold?: number; 
  public get sessionsThreshold() {
    return this.getNumberAttribute('sessions_threshold');
  }
  public set sessionsThreshold(value: number) {
    this._sessionsThreshold = value;
  }
  public resetSessionsThreshold() {
    this._sessionsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsThresholdInput() {
    return this._sessionsThreshold;
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
      cps_threshold: cdktf.numberToTerraform(this._cpsThreshold),
      id: cdktf.stringToTerraform(this._id),
      sessions_threshold: cdktf.numberToTerraform(this._sessionsThreshold),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cps_threshold: {
        value: cdktf.numberToHclTerraform(this._cpsThreshold),
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
      sessions_threshold: {
        value: cdktf.numberToHclTerraform(this._sessionsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
