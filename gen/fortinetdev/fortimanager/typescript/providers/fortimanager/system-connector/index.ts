// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#cloud_orchest_refresh_interval SystemConnector#cloud_orchest_refresh_interval}
  */
  readonly cloudOrchestRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#conn_refresh_interval SystemConnector#conn_refresh_interval}
  */
  readonly connRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#conn_ssl_protocol SystemConnector#conn_ssl_protocol}
  */
  readonly connSslProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#faznotify_msg_queue_max SystemConnector#faznotify_msg_queue_max}
  */
  readonly faznotifyMsgQueueMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#faznotify_msg_timeout SystemConnector#faznotify_msg_timeout}
  */
  readonly faznotifyMsgTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#fsso_refresh_interval SystemConnector#fsso_refresh_interval}
  */
  readonly fssoRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#fsso_sess_timeout SystemConnector#fsso_sess_timeout}
  */
  readonly fssoSessTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#id SystemConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#px_refresh_interval SystemConnector#px_refresh_interval}
  */
  readonly pxRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#px_svr_timeout SystemConnector#px_svr_timeout}
  */
  readonly pxSvrTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector fortimanager_system_connector}
*/
export class SystemConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemConnector to import
  * @param importFromId The id of the existing SystemConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_connector fortimanager_system_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConnectorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemConnectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_connector',
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
    this._cloudOrchestRefreshInterval = config.cloudOrchestRefreshInterval;
    this._connRefreshInterval = config.connRefreshInterval;
    this._connSslProtocol = config.connSslProtocol;
    this._faznotifyMsgQueueMax = config.faznotifyMsgQueueMax;
    this._faznotifyMsgTimeout = config.faznotifyMsgTimeout;
    this._fssoRefreshInterval = config.fssoRefreshInterval;
    this._fssoSessTimeout = config.fssoSessTimeout;
    this._id = config.id;
    this._pxRefreshInterval = config.pxRefreshInterval;
    this._pxSvrTimeout = config.pxSvrTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_orchest_refresh_interval - computed: true, optional: true, required: false
  private _cloudOrchestRefreshInterval?: number; 
  public get cloudOrchestRefreshInterval() {
    return this.getNumberAttribute('cloud_orchest_refresh_interval');
  }
  public set cloudOrchestRefreshInterval(value: number) {
    this._cloudOrchestRefreshInterval = value;
  }
  public resetCloudOrchestRefreshInterval() {
    this._cloudOrchestRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudOrchestRefreshIntervalInput() {
    return this._cloudOrchestRefreshInterval;
  }

  // conn_refresh_interval - computed: true, optional: true, required: false
  private _connRefreshInterval?: number; 
  public get connRefreshInterval() {
    return this.getNumberAttribute('conn_refresh_interval');
  }
  public set connRefreshInterval(value: number) {
    this._connRefreshInterval = value;
  }
  public resetConnRefreshInterval() {
    this._connRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRefreshIntervalInput() {
    return this._connRefreshInterval;
  }

  // conn_ssl_protocol - computed: true, optional: true, required: false
  private _connSslProtocol?: string; 
  public get connSslProtocol() {
    return this.getStringAttribute('conn_ssl_protocol');
  }
  public set connSslProtocol(value: string) {
    this._connSslProtocol = value;
  }
  public resetConnSslProtocol() {
    this._connSslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSslProtocolInput() {
    return this._connSslProtocol;
  }

  // faznotify_msg_queue_max - computed: true, optional: true, required: false
  private _faznotifyMsgQueueMax?: number; 
  public get faznotifyMsgQueueMax() {
    return this.getNumberAttribute('faznotify_msg_queue_max');
  }
  public set faznotifyMsgQueueMax(value: number) {
    this._faznotifyMsgQueueMax = value;
  }
  public resetFaznotifyMsgQueueMax() {
    this._faznotifyMsgQueueMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faznotifyMsgQueueMaxInput() {
    return this._faznotifyMsgQueueMax;
  }

  // faznotify_msg_timeout - computed: true, optional: true, required: false
  private _faznotifyMsgTimeout?: number; 
  public get faznotifyMsgTimeout() {
    return this.getNumberAttribute('faznotify_msg_timeout');
  }
  public set faznotifyMsgTimeout(value: number) {
    this._faznotifyMsgTimeout = value;
  }
  public resetFaznotifyMsgTimeout() {
    this._faznotifyMsgTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faznotifyMsgTimeoutInput() {
    return this._faznotifyMsgTimeout;
  }

  // fsso_refresh_interval - computed: true, optional: true, required: false
  private _fssoRefreshInterval?: number; 
  public get fssoRefreshInterval() {
    return this.getNumberAttribute('fsso_refresh_interval');
  }
  public set fssoRefreshInterval(value: number) {
    this._fssoRefreshInterval = value;
  }
  public resetFssoRefreshInterval() {
    this._fssoRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoRefreshIntervalInput() {
    return this._fssoRefreshInterval;
  }

  // fsso_sess_timeout - computed: true, optional: true, required: false
  private _fssoSessTimeout?: number; 
  public get fssoSessTimeout() {
    return this.getNumberAttribute('fsso_sess_timeout');
  }
  public set fssoSessTimeout(value: number) {
    this._fssoSessTimeout = value;
  }
  public resetFssoSessTimeout() {
    this._fssoSessTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoSessTimeoutInput() {
    return this._fssoSessTimeout;
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

  // px_refresh_interval - computed: true, optional: true, required: false
  private _pxRefreshInterval?: number; 
  public get pxRefreshInterval() {
    return this.getNumberAttribute('px_refresh_interval');
  }
  public set pxRefreshInterval(value: number) {
    this._pxRefreshInterval = value;
  }
  public resetPxRefreshInterval() {
    this._pxRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxRefreshIntervalInput() {
    return this._pxRefreshInterval;
  }

  // px_svr_timeout - computed: true, optional: true, required: false
  private _pxSvrTimeout?: number; 
  public get pxSvrTimeout() {
    return this.getNumberAttribute('px_svr_timeout');
  }
  public set pxSvrTimeout(value: number) {
    this._pxSvrTimeout = value;
  }
  public resetPxSvrTimeout() {
    this._pxSvrTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxSvrTimeoutInput() {
    return this._pxSvrTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_orchest_refresh_interval: cdktf.numberToTerraform(this._cloudOrchestRefreshInterval),
      conn_refresh_interval: cdktf.numberToTerraform(this._connRefreshInterval),
      conn_ssl_protocol: cdktf.stringToTerraform(this._connSslProtocol),
      faznotify_msg_queue_max: cdktf.numberToTerraform(this._faznotifyMsgQueueMax),
      faznotify_msg_timeout: cdktf.numberToTerraform(this._faznotifyMsgTimeout),
      fsso_refresh_interval: cdktf.numberToTerraform(this._fssoRefreshInterval),
      fsso_sess_timeout: cdktf.numberToTerraform(this._fssoSessTimeout),
      id: cdktf.stringToTerraform(this._id),
      px_refresh_interval: cdktf.numberToTerraform(this._pxRefreshInterval),
      px_svr_timeout: cdktf.numberToTerraform(this._pxSvrTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_orchest_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._cloudOrchestRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._connRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._connSslProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faznotify_msg_queue_max: {
        value: cdktf.numberToHclTerraform(this._faznotifyMsgQueueMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      faznotify_msg_timeout: {
        value: cdktf.numberToHclTerraform(this._faznotifyMsgTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fsso_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._fssoRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fsso_sess_timeout: {
        value: cdktf.numberToHclTerraform(this._fssoSessTimeout),
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
      px_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._pxRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      px_svr_timeout: {
        value: cdktf.numberToHclTerraform(this._pxSvrTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
