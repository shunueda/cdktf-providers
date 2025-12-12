// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_slb_listeners
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackSlbListenersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_slb_listeners#description_regex DataApsarastackSlbListeners#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_slb_listeners#frontend_port DataApsarastackSlbListeners#frontend_port}
  */
  readonly frontendPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_slb_listeners#id DataApsarastackSlbListeners#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_slb_listeners#load_balancer_id DataApsarastackSlbListeners#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_slb_listeners#output_file DataApsarastackSlbListeners#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_slb_listeners#protocol DataApsarastackSlbListeners#protocol}
  */
  readonly protocol?: string;
}
export interface DataApsarastackSlbListenersSlbListeners {
}

export function dataApsarastackSlbListenersSlbListenersToTerraform(struct?: DataApsarastackSlbListenersSlbListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackSlbListenersSlbListenersToHclTerraform(struct?: DataApsarastackSlbListenersSlbListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackSlbListenersSlbListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackSlbListenersSlbListeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackSlbListenersSlbListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_port - computed: true, optional: false, required: false
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // cookie_timeout - computed: true, optional: false, required: false
  public get cookieTimeout() {
    return this.getNumberAttribute('cookie_timeout');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // established_timeout - computed: true, optional: false, required: false
  public get establishedTimeout() {
    return this.getNumberAttribute('established_timeout');
  }

  // frontend_port - computed: true, optional: false, required: false
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
  }

  // gzip - computed: true, optional: false, required: false
  public get gzip() {
    return this.getStringAttribute('gzip');
  }

  // health_check - computed: true, optional: false, required: false
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }

  // health_check_connect_port - computed: true, optional: false, required: false
  public get healthCheckConnectPort() {
    return this.getNumberAttribute('health_check_connect_port');
  }

  // health_check_connect_timeout - computed: true, optional: false, required: false
  public get healthCheckConnectTimeout() {
    return this.getNumberAttribute('health_check_connect_timeout');
  }

  // health_check_domain - computed: true, optional: false, required: false
  public get healthCheckDomain() {
    return this.getStringAttribute('health_check_domain');
  }

  // health_check_http_code - computed: true, optional: false, required: false
  public get healthCheckHttpCode() {
    return this.getStringAttribute('health_check_http_code');
  }

  // health_check_interval - computed: true, optional: false, required: false
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }

  // health_check_timeout - computed: true, optional: false, required: false
  public get healthCheckTimeout() {
    return this.getNumberAttribute('health_check_timeout');
  }

  // health_check_type - computed: true, optional: false, required: false
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }

  // health_check_uri - computed: true, optional: false, required: false
  public get healthCheckUri() {
    return this.getStringAttribute('health_check_uri');
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // master_slave_server_group_id - computed: true, optional: false, required: false
  public get masterSlaveServerGroupId() {
    return this.getStringAttribute('master_slave_server_group_id');
  }

  // persistence_timeout - computed: true, optional: false, required: false
  public get persistenceTimeout() {
    return this.getNumberAttribute('persistence_timeout');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // scheduler - computed: true, optional: false, required: false
  public get scheduler() {
    return this.getStringAttribute('scheduler');
  }

  // security_status - computed: true, optional: false, required: false
  public get securityStatus() {
    return this.getStringAttribute('security_status');
  }

  // server_certificate_id - computed: true, optional: false, required: false
  public get serverCertificateId() {
    return this.getStringAttribute('server_certificate_id');
  }

  // server_group_id - computed: true, optional: false, required: false
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sticky_session - computed: true, optional: false, required: false
  public get stickySession() {
    return this.getStringAttribute('sticky_session');
  }

  // sticky_session_type - computed: true, optional: false, required: false
  public get stickySessionType() {
    return this.getStringAttribute('sticky_session_type');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }

  // x_forwarded_for - computed: true, optional: false, required: false
  public get xForwardedFor() {
    return this.getStringAttribute('x_forwarded_for');
  }

  // x_forwarded_for_slb_id - computed: true, optional: false, required: false
  public get xForwardedForSlbId() {
    return this.getStringAttribute('x_forwarded_for_slb_id');
  }

  // x_forwarded_for_slb_ip - computed: true, optional: false, required: false
  public get xForwardedForSlbIp() {
    return this.getStringAttribute('x_forwarded_for_slb_ip');
  }

  // x_forwarded_for_slb_proto - computed: true, optional: false, required: false
  public get xForwardedForSlbProto() {
    return this.getStringAttribute('x_forwarded_for_slb_proto');
  }
}

export class DataApsarastackSlbListenersSlbListenersList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackSlbListenersSlbListenersOutputReference {
    return new DataApsarastackSlbListenersSlbListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_slb_listeners apsarastack_slb_listeners}
*/
export class DataApsarastackSlbListeners extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_slb_listeners";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackSlbListeners resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackSlbListeners to import
  * @param importFromId The id of the existing DataApsarastackSlbListeners that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_slb_listeners#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackSlbListeners to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_slb_listeners", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_slb_listeners apsarastack_slb_listeners} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackSlbListenersConfig
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackSlbListenersConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_slb_listeners',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._descriptionRegex = config.descriptionRegex;
    this._frontendPort = config.frontendPort;
    this._id = config.id;
    this._loadBalancerId = config.loadBalancerId;
    this._outputFile = config.outputFile;
    this._protocol = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description_regex - computed: false, optional: true, required: false
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  public resetDescriptionRegex() {
    this._descriptionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
  }

  // frontend_port - computed: false, optional: true, required: false
  private _frontendPort?: number; 
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
  }
  public set frontendPort(value: number) {
    this._frontendPort = value;
  }
  public resetFrontendPort() {
    this._frontendPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort;
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

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
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

  // slb_listeners - computed: true, optional: false, required: false
  private _slbListeners = new DataApsarastackSlbListenersSlbListenersList(this, "slb_listeners", false);
  public get slbListeners() {
    return this._slbListeners;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description_regex: cdktf.stringToTerraform(this._descriptionRegex),
      frontend_port: cdktf.numberToTerraform(this._frontendPort),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      protocol: cdktf.stringToTerraform(this._protocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description_regex: {
        value: cdktf.stringToHclTerraform(this._descriptionRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frontend_port: {
        value: cdktf.numberToHclTerraform(this._frontendPort),
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
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
