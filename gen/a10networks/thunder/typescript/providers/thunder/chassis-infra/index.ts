// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChassisInfraConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable chassis infrastruture debugging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra#debug_disable ChassisInfra#debug_disable}
  */
  readonly debugDisable?: number;
  /**
  * Enable chassis infrastruture debugging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra#debug_enable ChassisInfra#debug_enable}
  */
  readonly debugEnable?: number;
  /**
  * Show chassis infrastruture debugging status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra#debug_status ChassisInfra#debug_status}
  */
  readonly debugStatus?: number;
  /**
  * Give Chassis filesystem info( USED BY TAC ONLY )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra#detailed ChassisInfra#detailed}
  */
  readonly detailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra#id ChassisInfra#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Synchronize the Master and Blade filesystems (For A10 TAC Use Only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra#sys_sync ChassisInfra#sys_sync}
  */
  readonly sysSync?: number;
  /**
  * Validate chassis filesytem synchronization status (For A10 TAC Use Only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra#system_sync_verify ChassisInfra#system_sync_verify}
  */
  readonly systemSyncVerify?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra thunder_chassis_infra}
*/
export class ChassisInfra extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_chassis_infra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChassisInfra resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChassisInfra to import
  * @param importFromId The id of the existing ChassisInfra that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChassisInfra to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_chassis_infra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/chassis_infra thunder_chassis_infra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChassisInfraConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ChassisInfraConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_chassis_infra',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._debugDisable = config.debugDisable;
    this._debugEnable = config.debugEnable;
    this._debugStatus = config.debugStatus;
    this._detailed = config.detailed;
    this._id = config.id;
    this._sysSync = config.sysSync;
    this._systemSyncVerify = config.systemSyncVerify;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_disable - computed: false, optional: true, required: false
  private _debugDisable?: number; 
  public get debugDisable() {
    return this.getNumberAttribute('debug_disable');
  }
  public set debugDisable(value: number) {
    this._debugDisable = value;
  }
  public resetDebugDisable() {
    this._debugDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDisableInput() {
    return this._debugDisable;
  }

  // debug_enable - computed: false, optional: true, required: false
  private _debugEnable?: number; 
  public get debugEnable() {
    return this.getNumberAttribute('debug_enable');
  }
  public set debugEnable(value: number) {
    this._debugEnable = value;
  }
  public resetDebugEnable() {
    this._debugEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugEnableInput() {
    return this._debugEnable;
  }

  // debug_status - computed: false, optional: true, required: false
  private _debugStatus?: number; 
  public get debugStatus() {
    return this.getNumberAttribute('debug_status');
  }
  public set debugStatus(value: number) {
    this._debugStatus = value;
  }
  public resetDebugStatus() {
    this._debugStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugStatusInput() {
    return this._debugStatus;
  }

  // detailed - computed: false, optional: true, required: false
  private _detailed?: number; 
  public get detailed() {
    return this.getNumberAttribute('detailed');
  }
  public set detailed(value: number) {
    this._detailed = value;
  }
  public resetDetailed() {
    this._detailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedInput() {
    return this._detailed;
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

  // sys_sync - computed: false, optional: true, required: false
  private _sysSync?: number; 
  public get sysSync() {
    return this.getNumberAttribute('sys_sync');
  }
  public set sysSync(value: number) {
    this._sysSync = value;
  }
  public resetSysSync() {
    this._sysSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysSyncInput() {
    return this._sysSync;
  }

  // system_sync_verify - computed: false, optional: true, required: false
  private _systemSyncVerify?: number; 
  public get systemSyncVerify() {
    return this.getNumberAttribute('system_sync_verify');
  }
  public set systemSyncVerify(value: number) {
    this._systemSyncVerify = value;
  }
  public resetSystemSyncVerify() {
    this._systemSyncVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSyncVerifyInput() {
    return this._systemSyncVerify;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      debug_disable: cdktf.numberToTerraform(this._debugDisable),
      debug_enable: cdktf.numberToTerraform(this._debugEnable),
      debug_status: cdktf.numberToTerraform(this._debugStatus),
      detailed: cdktf.numberToTerraform(this._detailed),
      id: cdktf.stringToTerraform(this._id),
      sys_sync: cdktf.numberToTerraform(this._sysSync),
      system_sync_verify: cdktf.numberToTerraform(this._systemSyncVerify),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug_disable: {
        value: cdktf.numberToHclTerraform(this._debugDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      debug_enable: {
        value: cdktf.numberToHclTerraform(this._debugEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      debug_status: {
        value: cdktf.numberToHclTerraform(this._debugStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detailed: {
        value: cdktf.numberToHclTerraform(this._detailed),
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
      sys_sync: {
        value: cdktf.numberToHclTerraform(this._sysSync),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_sync_verify: {
        value: cdktf.numberToHclTerraform(this._systemSyncVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
