// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/clb_listeners
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudClbListenersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the CLB to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/clb_listeners#clb_id DataTencentcloudClbListeners#clb_id}
  */
  readonly clbId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/clb_listeners#id DataTencentcloudClbListeners#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id of the listener to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/clb_listeners#listener_id DataTencentcloudClbListeners#listener_id}
  */
  readonly listenerId?: string;
  /**
  * Port of the CLB listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/clb_listeners#port DataTencentcloudClbListeners#port}
  */
  readonly port?: number;
  /**
  * Type of protocol within the listener, and available values are `TCP`, `UDP`, `HTTP`, `HTTPS` and `TCP_SSL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/clb_listeners#protocol DataTencentcloudClbListeners#protocol}
  */
  readonly protocol?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/clb_listeners#result_output_file DataTencentcloudClbListeners#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudClbListenersListenerListStruct {
}

export function dataTencentcloudClbListenersListenerListStructToTerraform(struct?: DataTencentcloudClbListenersListenerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbListenersListenerListStructToHclTerraform(struct?: DataTencentcloudClbListenersListenerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbListenersListenerListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudClbListenersListenerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbListenersListenerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_ca_id - computed: true, optional: false, required: false
  public get certificateCaId() {
    return this.getStringAttribute('certificate_ca_id');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // certificate_ssl_mode - computed: true, optional: false, required: false
  public get certificateSslMode() {
    return this.getStringAttribute('certificate_ssl_mode');
  }

  // clb_id - computed: true, optional: false, required: false
  public get clbId() {
    return this.getStringAttribute('clb_id');
  }

  // health_check_context_type - computed: true, optional: false, required: false
  public get healthCheckContextType() {
    return this.getStringAttribute('health_check_context_type');
  }

  // health_check_health_num - computed: true, optional: false, required: false
  public get healthCheckHealthNum() {
    return this.getNumberAttribute('health_check_health_num');
  }

  // health_check_http_code - computed: true, optional: false, required: false
  public get healthCheckHttpCode() {
    return this.getNumberAttribute('health_check_http_code');
  }

  // health_check_http_domain - computed: true, optional: false, required: false
  public get healthCheckHttpDomain() {
    return this.getStringAttribute('health_check_http_domain');
  }

  // health_check_http_method - computed: true, optional: false, required: false
  public get healthCheckHttpMethod() {
    return this.getStringAttribute('health_check_http_method');
  }

  // health_check_http_path - computed: true, optional: false, required: false
  public get healthCheckHttpPath() {
    return this.getStringAttribute('health_check_http_path');
  }

  // health_check_http_version - computed: true, optional: false, required: false
  public get healthCheckHttpVersion() {
    return this.getStringAttribute('health_check_http_version');
  }

  // health_check_interval_time - computed: true, optional: false, required: false
  public get healthCheckIntervalTime() {
    return this.getNumberAttribute('health_check_interval_time');
  }

  // health_check_port - computed: true, optional: false, required: false
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }

  // health_check_recv_context - computed: true, optional: false, required: false
  public get healthCheckRecvContext() {
    return this.getStringAttribute('health_check_recv_context');
  }

  // health_check_send_context - computed: true, optional: false, required: false
  public get healthCheckSendContext() {
    return this.getStringAttribute('health_check_send_context');
  }

  // health_check_switch - computed: true, optional: false, required: false
  public get healthCheckSwitch() {
    return this.getBooleanAttribute('health_check_switch');
  }

  // health_check_time_out - computed: true, optional: false, required: false
  public get healthCheckTimeOut() {
    return this.getNumberAttribute('health_check_time_out');
  }

  // health_check_type - computed: true, optional: false, required: false
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }

  // health_check_unhealth_num - computed: true, optional: false, required: false
  public get healthCheckUnhealthNum() {
    return this.getNumberAttribute('health_check_unhealth_num');
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // listener_name - computed: true, optional: false, required: false
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // scheduler - computed: true, optional: false, required: false
  public get scheduler() {
    return this.getStringAttribute('scheduler');
  }

  // session_expire_time - computed: true, optional: false, required: false
  public get sessionExpireTime() {
    return this.getNumberAttribute('session_expire_time');
  }

  // sni_switch - computed: true, optional: false, required: false
  public get sniSwitch() {
    return this.getBooleanAttribute('sni_switch');
  }
}

export class DataTencentcloudClbListenersListenerListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudClbListenersListenerListStructOutputReference {
    return new DataTencentcloudClbListenersListenerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/clb_listeners tencentcloud_clb_listeners}
*/
export class DataTencentcloudClbListeners extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_listeners";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudClbListeners resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudClbListeners to import
  * @param importFromId The id of the existing DataTencentcloudClbListeners that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/clb_listeners#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudClbListeners to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_listeners", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/clb_listeners tencentcloud_clb_listeners} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudClbListenersConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudClbListenersConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_listeners',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clbId = config.clbId;
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._port = config.port;
    this._protocol = config.protocol;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clb_id - computed: false, optional: false, required: true
  private _clbId?: string; 
  public get clbId() {
    return this.getStringAttribute('clb_id');
  }
  public set clbId(value: string) {
    this._clbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clbIdInput() {
    return this._clbId;
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

  // listener_id - computed: false, optional: true, required: false
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  public resetListenerId() {
    this._listenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // listener_list - computed: true, optional: false, required: false
  private _listenerList = new DataTencentcloudClbListenersListenerListStructList(this, "listener_list", false);
  public get listenerList() {
    return this._listenerList;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clb_id: cdktf.stringToTerraform(this._clbId),
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clb_id: {
        value: cdktf.stringToHclTerraform(this._clbId),
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
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
