// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp_rate_limit_reset_unknown_conn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemTcpRateLimitResetUnknownConnAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp_rate_limit_reset_unknown_conn#id SystemTcpRateLimitResetUnknownConnA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Log when rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp_rate_limit_reset_unknown_conn#log_for_reset_unknown_conn SystemTcpRateLimitResetUnknownConnA#log_for_reset_unknown_conn}
  */
  readonly logForResetUnknownConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp_rate_limit_reset_unknown_conn#pkt_rate_for_reset_unknown_conn SystemTcpRateLimitResetUnknownConnA#pkt_rate_for_reset_unknown_conn}
  */
  readonly pktRateForResetUnknownConn?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp_rate_limit_reset_unknown_conn#uuid SystemTcpRateLimitResetUnknownConnA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp_rate_limit_reset_unknown_conn thunder_system_tcp_rate_limit_reset_unknown_conn}
*/
export class SystemTcpRateLimitResetUnknownConnA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_tcp_rate_limit_reset_unknown_conn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemTcpRateLimitResetUnknownConnA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemTcpRateLimitResetUnknownConnA to import
  * @param importFromId The id of the existing SystemTcpRateLimitResetUnknownConnA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp_rate_limit_reset_unknown_conn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemTcpRateLimitResetUnknownConnA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_tcp_rate_limit_reset_unknown_conn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp_rate_limit_reset_unknown_conn thunder_system_tcp_rate_limit_reset_unknown_conn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemTcpRateLimitResetUnknownConnAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemTcpRateLimitResetUnknownConnAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_tcp_rate_limit_reset_unknown_conn',
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
    this._logForResetUnknownConn = config.logForResetUnknownConn;
    this._pktRateForResetUnknownConn = config.pktRateForResetUnknownConn;
    this._uuid = config.uuid;
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

  // log_for_reset_unknown_conn - computed: false, optional: true, required: false
  private _logForResetUnknownConn?: number; 
  public get logForResetUnknownConn() {
    return this.getNumberAttribute('log_for_reset_unknown_conn');
  }
  public set logForResetUnknownConn(value: number) {
    this._logForResetUnknownConn = value;
  }
  public resetLogForResetUnknownConn() {
    this._logForResetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForResetUnknownConnInput() {
    return this._logForResetUnknownConn;
  }

  // pkt_rate_for_reset_unknown_conn - computed: false, optional: true, required: false
  private _pktRateForResetUnknownConn?: number; 
  public get pktRateForResetUnknownConn() {
    return this.getNumberAttribute('pkt_rate_for_reset_unknown_conn');
  }
  public set pktRateForResetUnknownConn(value: number) {
    this._pktRateForResetUnknownConn = value;
  }
  public resetPktRateForResetUnknownConn() {
    this._pktRateForResetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateForResetUnknownConnInput() {
    return this._pktRateForResetUnknownConn;
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
      id: cdktf.stringToTerraform(this._id),
      log_for_reset_unknown_conn: cdktf.numberToTerraform(this._logForResetUnknownConn),
      pkt_rate_for_reset_unknown_conn: cdktf.numberToTerraform(this._pktRateForResetUnknownConn),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      log_for_reset_unknown_conn: {
        value: cdktf.numberToHclTerraform(this._logForResetUnknownConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkt_rate_for_reset_unknown_conn: {
        value: cdktf.numberToHclTerraform(this._pktRateForResetUnknownConn),
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
