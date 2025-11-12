// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_serversettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogfetchServersettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_serversettings#id SystemLogfetchServersettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_serversettings#max_conn_per_session SystemLogfetchServersettings#max_conn_per_session}
  */
  readonly maxConnPerSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_serversettings#max_sessions SystemLogfetchServersettings#max_sessions}
  */
  readonly maxSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_serversettings#session_timeout SystemLogfetchServersettings#session_timeout}
  */
  readonly sessionTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_serversettings fortimanager_system_logfetch_serversettings}
*/
export class SystemLogfetchServersettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_logfetch_serversettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogfetchServersettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogfetchServersettings to import
  * @param importFromId The id of the existing SystemLogfetchServersettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_serversettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogfetchServersettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_logfetch_serversettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_serversettings fortimanager_system_logfetch_serversettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogfetchServersettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogfetchServersettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_logfetch_serversettings',
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
    this._id = config.id;
    this._maxConnPerSession = config.maxConnPerSession;
    this._maxSessions = config.maxSessions;
    this._sessionTimeout = config.sessionTimeout;
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

  // max_conn_per_session - computed: true, optional: true, required: false
  private _maxConnPerSession?: number; 
  public get maxConnPerSession() {
    return this.getNumberAttribute('max_conn_per_session');
  }
  public set maxConnPerSession(value: number) {
    this._maxConnPerSession = value;
  }
  public resetMaxConnPerSession() {
    this._maxConnPerSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnPerSessionInput() {
    return this._maxConnPerSession;
  }

  // max_sessions - computed: true, optional: true, required: false
  private _maxSessions?: number; 
  public get maxSessions() {
    return this.getNumberAttribute('max_sessions');
  }
  public set maxSessions(value: number) {
    this._maxSessions = value;
  }
  public resetMaxSessions() {
    this._maxSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionsInput() {
    return this._maxSessions;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_conn_per_session: cdktf.numberToTerraform(this._maxConnPerSession),
      max_sessions: cdktf.numberToTerraform(this._maxSessions),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
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
      max_conn_per_session: {
        value: cdktf.numberToHclTerraform(this._maxConnPerSession),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_sessions: {
        value: cdktf.numberToHclTerraform(this._maxSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
