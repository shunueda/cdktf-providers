// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectLogNpuserverServergroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#adom ObjectLogNpuserverServergroup#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#group_name ObjectLogNpuserverServergroup#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#id ObjectLogNpuserverServergroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#log_format ObjectLogNpuserverServergroup#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#log_gen_event ObjectLogNpuserverServergroup#log_gen_event}
  */
  readonly logGenEvent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#log_mode ObjectLogNpuserverServergroup#log_mode}
  */
  readonly logMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#log_tx_mode ObjectLogNpuserverServergroup#log_tx_mode}
  */
  readonly logTxMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#log_user_info ObjectLogNpuserverServergroup#log_user_info}
  */
  readonly logUserInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#scopetype ObjectLogNpuserverServergroup#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#server_number ObjectLogNpuserverServergroup#server_number}
  */
  readonly serverNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#server_start_id ObjectLogNpuserverServergroup#server_start_id}
  */
  readonly serverStartId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#sw_log_flags ObjectLogNpuserverServergroup#sw_log_flags}
  */
  readonly swLogFlags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup fortimanager_object_log_npuserver_servergroup}
*/
export class ObjectLogNpuserverServergroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_log_npuserver_servergroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectLogNpuserverServergroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectLogNpuserverServergroup to import
  * @param importFromId The id of the existing ObjectLogNpuserverServergroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectLogNpuserverServergroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_log_npuserver_servergroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_servergroup fortimanager_object_log_npuserver_servergroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectLogNpuserverServergroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectLogNpuserverServergroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_log_npuserver_servergroup',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._groupName = config.groupName;
    this._id = config.id;
    this._logFormat = config.logFormat;
    this._logGenEvent = config.logGenEvent;
    this._logMode = config.logMode;
    this._logTxMode = config.logTxMode;
    this._logUserInfo = config.logUserInfo;
    this._scopetype = config.scopetype;
    this._serverNumber = config.serverNumber;
    this._serverStartId = config.serverStartId;
    this._swLogFlags = config.swLogFlags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_gen_event - computed: true, optional: true, required: false
  private _logGenEvent?: string; 
  public get logGenEvent() {
    return this.getStringAttribute('log_gen_event');
  }
  public set logGenEvent(value: string) {
    this._logGenEvent = value;
  }
  public resetLogGenEvent() {
    this._logGenEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGenEventInput() {
    return this._logGenEvent;
  }

  // log_mode - computed: true, optional: true, required: false
  private _logMode?: string; 
  public get logMode() {
    return this.getStringAttribute('log_mode');
  }
  public set logMode(value: string) {
    this._logMode = value;
  }
  public resetLogMode() {
    this._logMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logModeInput() {
    return this._logMode;
  }

  // log_tx_mode - computed: true, optional: true, required: false
  private _logTxMode?: string; 
  public get logTxMode() {
    return this.getStringAttribute('log_tx_mode');
  }
  public set logTxMode(value: string) {
    this._logTxMode = value;
  }
  public resetLogTxMode() {
    this._logTxMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTxModeInput() {
    return this._logTxMode;
  }

  // log_user_info - computed: true, optional: true, required: false
  private _logUserInfo?: string; 
  public get logUserInfo() {
    return this.getStringAttribute('log_user_info');
  }
  public set logUserInfo(value: string) {
    this._logUserInfo = value;
  }
  public resetLogUserInfo() {
    this._logUserInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUserInfoInput() {
    return this._logUserInfo;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // server_number - computed: false, optional: true, required: false
  private _serverNumber?: number; 
  public get serverNumber() {
    return this.getNumberAttribute('server_number');
  }
  public set serverNumber(value: number) {
    this._serverNumber = value;
  }
  public resetServerNumber() {
    this._serverNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNumberInput() {
    return this._serverNumber;
  }

  // server_start_id - computed: false, optional: true, required: false
  private _serverStartId?: number; 
  public get serverStartId() {
    return this.getNumberAttribute('server_start_id');
  }
  public set serverStartId(value: number) {
    this._serverStartId = value;
  }
  public resetServerStartId() {
    this._serverStartId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStartIdInput() {
    return this._serverStartId;
  }

  // sw_log_flags - computed: true, optional: true, required: false
  private _swLogFlags?: string; 
  public get swLogFlags() {
    return this.getStringAttribute('sw_log_flags');
  }
  public set swLogFlags(value: string) {
    this._swLogFlags = value;
  }
  public resetSwLogFlags() {
    this._swLogFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swLogFlagsInput() {
    return this._swLogFlags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      log_format: cdktf.stringToTerraform(this._logFormat),
      log_gen_event: cdktf.stringToTerraform(this._logGenEvent),
      log_mode: cdktf.stringToTerraform(this._logMode),
      log_tx_mode: cdktf.stringToTerraform(this._logTxMode),
      log_user_info: cdktf.stringToTerraform(this._logUserInfo),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_number: cdktf.numberToTerraform(this._serverNumber),
      server_start_id: cdktf.numberToTerraform(this._serverStartId),
      sw_log_flags: cdktf.stringToTerraform(this._swLogFlags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      log_format: {
        value: cdktf.stringToHclTerraform(this._logFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_gen_event: {
        value: cdktf.stringToHclTerraform(this._logGenEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_mode: {
        value: cdktf.stringToHclTerraform(this._logMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_tx_mode: {
        value: cdktf.stringToHclTerraform(this._logTxMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_user_info: {
        value: cdktf.stringToHclTerraform(this._logUserInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_number: {
        value: cdktf.numberToHclTerraform(this._serverNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_start_id: {
        value: cdktf.numberToHclTerraform(this._serverStartId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sw_log_flags: {
        value: cdktf.stringToHclTerraform(this._swLogFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
