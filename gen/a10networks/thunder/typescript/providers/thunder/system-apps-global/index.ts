// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAppsGlobalAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set threshold for the total Connections Per Second across the system (Enter threshold number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global#cps_threshold SystemAppsGlobalA#cps_threshold}
  */
  readonly cpsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global#id SystemAppsGlobalA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Send TCP session creation log on completion of 3-way handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global#log_session_on_established SystemAppsGlobalA#log_session_on_established}
  */
  readonly logSessionOnEstablished?: number;
  /**
  * Configure maximum session life, default is 2 seconds (1-39 seconds, default is 2 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global#msl_time SystemAppsGlobalA#msl_time}
  */
  readonly mslTime?: number;
  /**
  * Set threshold for total sessions across the system (Enter threshold number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global#sessions_threshold SystemAppsGlobalA#sessions_threshold}
  */
  readonly sessionsThreshold?: number;
  /**
  * Set timer wheel walk limit (0-1024, 0 is unlimited, default is 100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global#timer_wheel_walk_limit SystemAppsGlobalA#timer_wheel_walk_limit}
  */
  readonly timerWheelWalkLimit?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global#uuid SystemAppsGlobalA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global thunder_system_apps_global}
*/
export class SystemAppsGlobalA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_apps_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAppsGlobalA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAppsGlobalA to import
  * @param importFromId The id of the existing SystemAppsGlobalA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAppsGlobalA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_apps_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_apps_global thunder_system_apps_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAppsGlobalAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAppsGlobalAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_apps_global',
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
    this._logSessionOnEstablished = config.logSessionOnEstablished;
    this._mslTime = config.mslTime;
    this._sessionsThreshold = config.sessionsThreshold;
    this._timerWheelWalkLimit = config.timerWheelWalkLimit;
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

  // log_session_on_established - computed: false, optional: true, required: false
  private _logSessionOnEstablished?: number; 
  public get logSessionOnEstablished() {
    return this.getNumberAttribute('log_session_on_established');
  }
  public set logSessionOnEstablished(value: number) {
    this._logSessionOnEstablished = value;
  }
  public resetLogSessionOnEstablished() {
    this._logSessionOnEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSessionOnEstablishedInput() {
    return this._logSessionOnEstablished;
  }

  // msl_time - computed: false, optional: true, required: false
  private _mslTime?: number; 
  public get mslTime() {
    return this.getNumberAttribute('msl_time');
  }
  public set mslTime(value: number) {
    this._mslTime = value;
  }
  public resetMslTime() {
    this._mslTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mslTimeInput() {
    return this._mslTime;
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

  // timer_wheel_walk_limit - computed: false, optional: true, required: false
  private _timerWheelWalkLimit?: number; 
  public get timerWheelWalkLimit() {
    return this.getNumberAttribute('timer_wheel_walk_limit');
  }
  public set timerWheelWalkLimit(value: number) {
    this._timerWheelWalkLimit = value;
  }
  public resetTimerWheelWalkLimit() {
    this._timerWheelWalkLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerWheelWalkLimitInput() {
    return this._timerWheelWalkLimit;
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
      log_session_on_established: cdktf.numberToTerraform(this._logSessionOnEstablished),
      msl_time: cdktf.numberToTerraform(this._mslTime),
      sessions_threshold: cdktf.numberToTerraform(this._sessionsThreshold),
      timer_wheel_walk_limit: cdktf.numberToTerraform(this._timerWheelWalkLimit),
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
      log_session_on_established: {
        value: cdktf.numberToHclTerraform(this._logSessionOnEstablished),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msl_time: {
        value: cdktf.numberToHclTerraform(this._mslTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sessions_threshold: {
        value: cdktf.numberToHclTerraform(this._sessionsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timer_wheel_walk_limit: {
        value: cdktf.numberToHclTerraform(this._timerWheelWalkLimit),
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
