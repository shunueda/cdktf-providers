// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackSlbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#acl_id ApsarastackSlbListener#acl_id}
  */
  readonly aclId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#acl_status ApsarastackSlbListener#acl_status}
  */
  readonly aclStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#acl_type ApsarastackSlbListener#acl_type}
  */
  readonly aclType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#backend_port ApsarastackSlbListener#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#bandwidth ApsarastackSlbListener#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#ca_certificate_id ApsarastackSlbListener#ca_certificate_id}
  */
  readonly caCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#cookie ApsarastackSlbListener#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#cookie_timeout ApsarastackSlbListener#cookie_timeout}
  */
  readonly cookieTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#delete_protection_validation ApsarastackSlbListener#delete_protection_validation}
  */
  readonly deleteProtectionValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#description ApsarastackSlbListener#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#enable_http2 ApsarastackSlbListener#enable_http2}
  */
  readonly enableHttp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#established_timeout ApsarastackSlbListener#established_timeout}
  */
  readonly establishedTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#forward_port ApsarastackSlbListener#forward_port}
  */
  readonly forwardPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#frontend_port ApsarastackSlbListener#frontend_port}
  */
  readonly frontendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#gzip ApsarastackSlbListener#gzip}
  */
  readonly gzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#health_check ApsarastackSlbListener#health_check}
  */
  readonly healthCheck: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#health_check_connect_port ApsarastackSlbListener#health_check_connect_port}
  */
  readonly healthCheckConnectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#health_check_domain ApsarastackSlbListener#health_check_domain}
  */
  readonly healthCheckDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#health_check_http_code ApsarastackSlbListener#health_check_http_code}
  */
  readonly healthCheckHttpCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#health_check_interval ApsarastackSlbListener#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#health_check_method ApsarastackSlbListener#health_check_method}
  */
  readonly healthCheckMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#health_check_timeout ApsarastackSlbListener#health_check_timeout}
  */
  readonly healthCheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#health_check_type ApsarastackSlbListener#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#health_check_uri ApsarastackSlbListener#health_check_uri}
  */
  readonly healthCheckUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#healthy_threshold ApsarastackSlbListener#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#id ApsarastackSlbListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#listener_forward ApsarastackSlbListener#listener_forward}
  */
  readonly listenerForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#load_balancer_id ApsarastackSlbListener#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#master_slave_server_group_id ApsarastackSlbListener#master_slave_server_group_id}
  */
  readonly masterSlaveServerGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#persistence_timeout ApsarastackSlbListener#persistence_timeout}
  */
  readonly persistenceTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#protocol ApsarastackSlbListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#scheduler ApsarastackSlbListener#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#server_certificate_id ApsarastackSlbListener#server_certificate_id}
  */
  readonly serverCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#server_group_id ApsarastackSlbListener#server_group_id}
  */
  readonly serverGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#ssl_certificate_id ApsarastackSlbListener#ssl_certificate_id}
  */
  readonly sslCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#sticky_session ApsarastackSlbListener#sticky_session}
  */
  readonly stickySession: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#sticky_session_type ApsarastackSlbListener#sticky_session_type}
  */
  readonly stickySessionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#tls_cipher_policy ApsarastackSlbListener#tls_cipher_policy}
  */
  readonly tlsCipherPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#unhealthy_threshold ApsarastackSlbListener#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * logs_download_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#logs_download_attributes ApsarastackSlbListener#logs_download_attributes}
  */
  readonly logsDownloadAttributes?: ApsarastackSlbListenerLogsDownloadAttributes;
  /**
  * x_forwarded_for block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#x_forwarded_for ApsarastackSlbListener#x_forwarded_for}
  */
  readonly xForwardedFor?: ApsarastackSlbListenerXForwardedFor;
}
export interface ApsarastackSlbListenerLogsDownloadAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#log_project ApsarastackSlbListener#log_project}
  */
  readonly logProject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#log_store ApsarastackSlbListener#log_store}
  */
  readonly logStore: string;
}

export function apsarastackSlbListenerLogsDownloadAttributesToTerraform(struct?: ApsarastackSlbListenerLogsDownloadAttributesOutputReference | ApsarastackSlbListenerLogsDownloadAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_project: cdktf.stringToTerraform(struct!.logProject),
    log_store: cdktf.stringToTerraform(struct!.logStore),
  }
}


export function apsarastackSlbListenerLogsDownloadAttributesToHclTerraform(struct?: ApsarastackSlbListenerLogsDownloadAttributesOutputReference | ApsarastackSlbListenerLogsDownloadAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_project: {
      value: cdktf.stringToHclTerraform(struct!.logProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_store: {
      value: cdktf.stringToHclTerraform(struct!.logStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackSlbListenerLogsDownloadAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApsarastackSlbListenerLogsDownloadAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.logProject = this._logProject;
    }
    if (this._logStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStore = this._logStore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackSlbListenerLogsDownloadAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logProject = undefined;
      this._logStore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logProject = value.logProject;
      this._logStore = value.logStore;
    }
  }

  // log_project - computed: false, optional: false, required: true
  private _logProject?: string; 
  public get logProject() {
    return this.getStringAttribute('log_project');
  }
  public set logProject(value: string) {
    this._logProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logProjectInput() {
    return this._logProject;
  }

  // log_store - computed: false, optional: false, required: true
  private _logStore?: string; 
  public get logStore() {
    return this.getStringAttribute('log_store');
  }
  public set logStore(value: string) {
    this._logStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStoreInput() {
    return this._logStore;
  }
}
export interface ApsarastackSlbListenerXForwardedFor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#retrive_slb_id ApsarastackSlbListener#retrive_slb_id}
  */
  readonly retriveSlbId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#retrive_slb_ip ApsarastackSlbListener#retrive_slb_ip}
  */
  readonly retriveSlbIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#retrive_slb_proto ApsarastackSlbListener#retrive_slb_proto}
  */
  readonly retriveSlbProto?: boolean | cdktf.IResolvable;
}

export function apsarastackSlbListenerXForwardedForToTerraform(struct?: ApsarastackSlbListenerXForwardedForOutputReference | ApsarastackSlbListenerXForwardedFor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retrive_slb_id: cdktf.booleanToTerraform(struct!.retriveSlbId),
    retrive_slb_ip: cdktf.booleanToTerraform(struct!.retriveSlbIp),
    retrive_slb_proto: cdktf.booleanToTerraform(struct!.retriveSlbProto),
  }
}


export function apsarastackSlbListenerXForwardedForToHclTerraform(struct?: ApsarastackSlbListenerXForwardedForOutputReference | ApsarastackSlbListenerXForwardedFor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retrive_slb_id: {
      value: cdktf.booleanToHclTerraform(struct!.retriveSlbId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retrive_slb_ip: {
      value: cdktf.booleanToHclTerraform(struct!.retriveSlbIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retrive_slb_proto: {
      value: cdktf.booleanToHclTerraform(struct!.retriveSlbProto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackSlbListenerXForwardedForOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApsarastackSlbListenerXForwardedFor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retriveSlbId !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriveSlbId = this._retriveSlbId;
    }
    if (this._retriveSlbIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriveSlbIp = this._retriveSlbIp;
    }
    if (this._retriveSlbProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriveSlbProto = this._retriveSlbProto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackSlbListenerXForwardedFor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retriveSlbId = undefined;
      this._retriveSlbIp = undefined;
      this._retriveSlbProto = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retriveSlbId = value.retriveSlbId;
      this._retriveSlbIp = value.retriveSlbIp;
      this._retriveSlbProto = value.retriveSlbProto;
    }
  }

  // retrive_client_ip - computed: true, optional: false, required: false
  public get retriveClientIp() {
    return this.getBooleanAttribute('retrive_client_ip');
  }

  // retrive_slb_id - computed: false, optional: true, required: false
  private _retriveSlbId?: boolean | cdktf.IResolvable; 
  public get retriveSlbId() {
    return this.getBooleanAttribute('retrive_slb_id');
  }
  public set retriveSlbId(value: boolean | cdktf.IResolvable) {
    this._retriveSlbId = value;
  }
  public resetRetriveSlbId() {
    this._retriveSlbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriveSlbIdInput() {
    return this._retriveSlbId;
  }

  // retrive_slb_ip - computed: false, optional: true, required: false
  private _retriveSlbIp?: boolean | cdktf.IResolvable; 
  public get retriveSlbIp() {
    return this.getBooleanAttribute('retrive_slb_ip');
  }
  public set retriveSlbIp(value: boolean | cdktf.IResolvable) {
    this._retriveSlbIp = value;
  }
  public resetRetriveSlbIp() {
    this._retriveSlbIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriveSlbIpInput() {
    return this._retriveSlbIp;
  }

  // retrive_slb_proto - computed: false, optional: true, required: false
  private _retriveSlbProto?: boolean | cdktf.IResolvable; 
  public get retriveSlbProto() {
    return this.getBooleanAttribute('retrive_slb_proto');
  }
  public set retriveSlbProto(value: boolean | cdktf.IResolvable) {
    this._retriveSlbProto = value;
  }
  public resetRetriveSlbProto() {
    this._retriveSlbProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriveSlbProtoInput() {
    return this._retriveSlbProto;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener apsarastack_slb_listener}
*/
export class ApsarastackSlbListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_slb_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackSlbListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackSlbListener to import
  * @param importFromId The id of the existing ApsarastackSlbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackSlbListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_slb_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_listener apsarastack_slb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackSlbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackSlbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_slb_listener',
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
    this._aclId = config.aclId;
    this._aclStatus = config.aclStatus;
    this._aclType = config.aclType;
    this._backendPort = config.backendPort;
    this._bandwidth = config.bandwidth;
    this._caCertificateId = config.caCertificateId;
    this._cookie = config.cookie;
    this._cookieTimeout = config.cookieTimeout;
    this._deleteProtectionValidation = config.deleteProtectionValidation;
    this._description = config.description;
    this._enableHttp2 = config.enableHttp2;
    this._establishedTimeout = config.establishedTimeout;
    this._forwardPort = config.forwardPort;
    this._frontendPort = config.frontendPort;
    this._gzip = config.gzip;
    this._healthCheck = config.healthCheck;
    this._healthCheckConnectPort = config.healthCheckConnectPort;
    this._healthCheckDomain = config.healthCheckDomain;
    this._healthCheckHttpCode = config.healthCheckHttpCode;
    this._healthCheckInterval = config.healthCheckInterval;
    this._healthCheckMethod = config.healthCheckMethod;
    this._healthCheckTimeout = config.healthCheckTimeout;
    this._healthCheckType = config.healthCheckType;
    this._healthCheckUri = config.healthCheckUri;
    this._healthyThreshold = config.healthyThreshold;
    this._id = config.id;
    this._listenerForward = config.listenerForward;
    this._loadBalancerId = config.loadBalancerId;
    this._masterSlaveServerGroupId = config.masterSlaveServerGroupId;
    this._persistenceTimeout = config.persistenceTimeout;
    this._protocol = config.protocol;
    this._scheduler = config.scheduler;
    this._serverCertificateId = config.serverCertificateId;
    this._serverGroupId = config.serverGroupId;
    this._sslCertificateId = config.sslCertificateId;
    this._stickySession = config.stickySession;
    this._stickySessionType = config.stickySessionType;
    this._tlsCipherPolicy = config.tlsCipherPolicy;
    this._unhealthyThreshold = config.unhealthyThreshold;
    this._logsDownloadAttributes.internalValue = config.logsDownloadAttributes;
    this._xForwardedFor.internalValue = config.xForwardedFor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: string; 
  public get aclId() {
    return this.getStringAttribute('acl_id');
  }
  public set aclId(value: string) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_status - computed: false, optional: true, required: false
  private _aclStatus?: string; 
  public get aclStatus() {
    return this.getStringAttribute('acl_status');
  }
  public set aclStatus(value: string) {
    this._aclStatus = value;
  }
  public resetAclStatus() {
    this._aclStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclStatusInput() {
    return this._aclStatus;
  }

  // acl_type - computed: false, optional: true, required: false
  private _aclType?: string; 
  public get aclType() {
    return this.getStringAttribute('acl_type');
  }
  public set aclType(value: string) {
    this._aclType = value;
  }
  public resetAclType() {
    this._aclType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclTypeInput() {
    return this._aclType;
  }

  // backend_port - computed: false, optional: false, required: true
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort;
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // ca_certificate_id - computed: false, optional: true, required: false
  private _caCertificateId?: string; 
  public get caCertificateId() {
    return this.getStringAttribute('ca_certificate_id');
  }
  public set caCertificateId(value: string) {
    this._caCertificateId = value;
  }
  public resetCaCertificateId() {
    this._caCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdInput() {
    return this._caCertificateId;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // cookie_timeout - computed: false, optional: true, required: false
  private _cookieTimeout?: number; 
  public get cookieTimeout() {
    return this.getNumberAttribute('cookie_timeout');
  }
  public set cookieTimeout(value: number) {
    this._cookieTimeout = value;
  }
  public resetCookieTimeout() {
    this._cookieTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieTimeoutInput() {
    return this._cookieTimeout;
  }

  // delete_protection_validation - computed: false, optional: true, required: false
  private _deleteProtectionValidation?: boolean | cdktf.IResolvable; 
  public get deleteProtectionValidation() {
    return this.getBooleanAttribute('delete_protection_validation');
  }
  public set deleteProtectionValidation(value: boolean | cdktf.IResolvable) {
    this._deleteProtectionValidation = value;
  }
  public resetDeleteProtectionValidation() {
    this._deleteProtectionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionValidationInput() {
    return this._deleteProtectionValidation;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: string; 
  public get enableHttp2() {
    return this.getStringAttribute('enable_http2');
  }
  public set enableHttp2(value: string) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
  }

  // established_timeout - computed: false, optional: true, required: false
  private _establishedTimeout?: number; 
  public get establishedTimeout() {
    return this.getNumberAttribute('established_timeout');
  }
  public set establishedTimeout(value: number) {
    this._establishedTimeout = value;
  }
  public resetEstablishedTimeout() {
    this._establishedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get establishedTimeoutInput() {
    return this._establishedTimeout;
  }

  // forward_port - computed: false, optional: true, required: false
  private _forwardPort?: number; 
  public get forwardPort() {
    return this.getNumberAttribute('forward_port');
  }
  public set forwardPort(value: number) {
    this._forwardPort = value;
  }
  public resetForwardPort() {
    this._forwardPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardPortInput() {
    return this._forwardPort;
  }

  // frontend_port - computed: false, optional: false, required: true
  private _frontendPort?: number; 
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
  }
  public set frontendPort(value: number) {
    this._frontendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort;
  }

  // gzip - computed: false, optional: true, required: false
  private _gzip?: boolean | cdktf.IResolvable; 
  public get gzip() {
    return this.getBooleanAttribute('gzip');
  }
  public set gzip(value: boolean | cdktf.IResolvable) {
    this._gzip = value;
  }
  public resetGzip() {
    this._gzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipInput() {
    return this._gzip;
  }

  // health_check - computed: false, optional: false, required: true
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_connect_port - computed: true, optional: true, required: false
  private _healthCheckConnectPort?: number; 
  public get healthCheckConnectPort() {
    return this.getNumberAttribute('health_check_connect_port');
  }
  public set healthCheckConnectPort(value: number) {
    this._healthCheckConnectPort = value;
  }
  public resetHealthCheckConnectPort() {
    this._healthCheckConnectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConnectPortInput() {
    return this._healthCheckConnectPort;
  }

  // health_check_domain - computed: false, optional: true, required: false
  private _healthCheckDomain?: string; 
  public get healthCheckDomain() {
    return this.getStringAttribute('health_check_domain');
  }
  public set healthCheckDomain(value: string) {
    this._healthCheckDomain = value;
  }
  public resetHealthCheckDomain() {
    this._healthCheckDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDomainInput() {
    return this._healthCheckDomain;
  }

  // health_check_http_code - computed: false, optional: true, required: false
  private _healthCheckHttpCode?: string; 
  public get healthCheckHttpCode() {
    return this.getStringAttribute('health_check_http_code');
  }
  public set healthCheckHttpCode(value: string) {
    this._healthCheckHttpCode = value;
  }
  public resetHealthCheckHttpCode() {
    this._healthCheckHttpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpCodeInput() {
    return this._healthCheckHttpCode;
  }

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: number; 
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: number) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // health_check_method - computed: true, optional: true, required: false
  private _healthCheckMethod?: string; 
  public get healthCheckMethod() {
    return this.getStringAttribute('health_check_method');
  }
  public set healthCheckMethod(value: string) {
    this._healthCheckMethod = value;
  }
  public resetHealthCheckMethod() {
    this._healthCheckMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckMethodInput() {
    return this._healthCheckMethod;
  }

  // health_check_timeout - computed: false, optional: true, required: false
  private _healthCheckTimeout?: number; 
  public get healthCheckTimeout() {
    return this.getNumberAttribute('health_check_timeout');
  }
  public set healthCheckTimeout(value: number) {
    this._healthCheckTimeout = value;
  }
  public resetHealthCheckTimeout() {
    this._healthCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTimeoutInput() {
    return this._healthCheckTimeout;
  }

  // health_check_type - computed: false, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // health_check_uri - computed: false, optional: true, required: false
  private _healthCheckUri?: string; 
  public get healthCheckUri() {
    return this.getStringAttribute('health_check_uri');
  }
  public set healthCheckUri(value: string) {
    this._healthCheckUri = value;
  }
  public resetHealthCheckUri() {
    this._healthCheckUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUriInput() {
    return this._healthCheckUri;
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
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

  // listener_forward - computed: true, optional: true, required: false
  private _listenerForward?: string; 
  public get listenerForward() {
    return this.getStringAttribute('listener_forward');
  }
  public set listenerForward(value: string) {
    this._listenerForward = value;
  }
  public resetListenerForward() {
    this._listenerForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerForwardInput() {
    return this._listenerForward;
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

  // master_slave_server_group_id - computed: false, optional: true, required: false
  private _masterSlaveServerGroupId?: string; 
  public get masterSlaveServerGroupId() {
    return this.getStringAttribute('master_slave_server_group_id');
  }
  public set masterSlaveServerGroupId(value: string) {
    this._masterSlaveServerGroupId = value;
  }
  public resetMasterSlaveServerGroupId() {
    this._masterSlaveServerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSlaveServerGroupIdInput() {
    return this._masterSlaveServerGroupId;
  }

  // persistence_timeout - computed: false, optional: true, required: false
  private _persistenceTimeout?: number; 
  public get persistenceTimeout() {
    return this.getNumberAttribute('persistence_timeout');
  }
  public set persistenceTimeout(value: number) {
    this._persistenceTimeout = value;
  }
  public resetPersistenceTimeout() {
    this._persistenceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceTimeoutInput() {
    return this._persistenceTimeout;
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

  // scheduler - computed: false, optional: true, required: false
  private _scheduler?: string; 
  public get scheduler() {
    return this.getStringAttribute('scheduler');
  }
  public set scheduler(value: string) {
    this._scheduler = value;
  }
  public resetScheduler() {
    this._scheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler;
  }

  // server_certificate_id - computed: false, optional: true, required: false
  private _serverCertificateId?: string; 
  public get serverCertificateId() {
    return this.getStringAttribute('server_certificate_id');
  }
  public set serverCertificateId(value: string) {
    this._serverCertificateId = value;
  }
  public resetServerCertificateId() {
    this._serverCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateIdInput() {
    return this._serverCertificateId;
  }

  // server_group_id - computed: false, optional: true, required: false
  private _serverGroupId?: string; 
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }
  public set serverGroupId(value: string) {
    this._serverGroupId = value;
  }
  public resetServerGroupId() {
    this._serverGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupIdInput() {
    return this._serverGroupId;
  }

  // ssl_certificate_id - computed: true, optional: true, required: false
  private _sslCertificateId?: string; 
  public get sslCertificateId() {
    return this.getStringAttribute('ssl_certificate_id');
  }
  public set sslCertificateId(value: string) {
    this._sslCertificateId = value;
  }
  public resetSslCertificateId() {
    this._sslCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateIdInput() {
    return this._sslCertificateId;
  }

  // sticky_session - computed: false, optional: false, required: true
  private _stickySession?: string; 
  public get stickySession() {
    return this.getStringAttribute('sticky_session');
  }
  public set stickySession(value: string) {
    this._stickySession = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionInput() {
    return this._stickySession;
  }

  // sticky_session_type - computed: false, optional: true, required: false
  private _stickySessionType?: string; 
  public get stickySessionType() {
    return this.getStringAttribute('sticky_session_type');
  }
  public set stickySessionType(value: string) {
    this._stickySessionType = value;
  }
  public resetStickySessionType() {
    this._stickySessionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionTypeInput() {
    return this._stickySessionType;
  }

  // tls_cipher_policy - computed: false, optional: true, required: false
  private _tlsCipherPolicy?: string; 
  public get tlsCipherPolicy() {
    return this.getStringAttribute('tls_cipher_policy');
  }
  public set tlsCipherPolicy(value: string) {
    this._tlsCipherPolicy = value;
  }
  public resetTlsCipherPolicy() {
    this._tlsCipherPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherPolicyInput() {
    return this._tlsCipherPolicy;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // logs_download_attributes - computed: false, optional: true, required: false
  private _logsDownloadAttributes = new ApsarastackSlbListenerLogsDownloadAttributesOutputReference(this, "logs_download_attributes");
  public get logsDownloadAttributes() {
    return this._logsDownloadAttributes;
  }
  public putLogsDownloadAttributes(value: ApsarastackSlbListenerLogsDownloadAttributes) {
    this._logsDownloadAttributes.internalValue = value;
  }
  public resetLogsDownloadAttributes() {
    this._logsDownloadAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsDownloadAttributesInput() {
    return this._logsDownloadAttributes.internalValue;
  }

  // x_forwarded_for - computed: false, optional: true, required: false
  private _xForwardedFor = new ApsarastackSlbListenerXForwardedForOutputReference(this, "x_forwarded_for");
  public get xForwardedFor() {
    return this._xForwardedFor;
  }
  public putXForwardedFor(value: ApsarastackSlbListenerXForwardedFor) {
    this._xForwardedFor.internalValue = value;
  }
  public resetXForwardedFor() {
    this._xForwardedFor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForInput() {
    return this._xForwardedFor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_id: cdktf.stringToTerraform(this._aclId),
      acl_status: cdktf.stringToTerraform(this._aclStatus),
      acl_type: cdktf.stringToTerraform(this._aclType),
      backend_port: cdktf.numberToTerraform(this._backendPort),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      ca_certificate_id: cdktf.stringToTerraform(this._caCertificateId),
      cookie: cdktf.stringToTerraform(this._cookie),
      cookie_timeout: cdktf.numberToTerraform(this._cookieTimeout),
      delete_protection_validation: cdktf.booleanToTerraform(this._deleteProtectionValidation),
      description: cdktf.stringToTerraform(this._description),
      enable_http2: cdktf.stringToTerraform(this._enableHttp2),
      established_timeout: cdktf.numberToTerraform(this._establishedTimeout),
      forward_port: cdktf.numberToTerraform(this._forwardPort),
      frontend_port: cdktf.numberToTerraform(this._frontendPort),
      gzip: cdktf.booleanToTerraform(this._gzip),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      health_check_connect_port: cdktf.numberToTerraform(this._healthCheckConnectPort),
      health_check_domain: cdktf.stringToTerraform(this._healthCheckDomain),
      health_check_http_code: cdktf.stringToTerraform(this._healthCheckHttpCode),
      health_check_interval: cdktf.numberToTerraform(this._healthCheckInterval),
      health_check_method: cdktf.stringToTerraform(this._healthCheckMethod),
      health_check_timeout: cdktf.numberToTerraform(this._healthCheckTimeout),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      health_check_uri: cdktf.stringToTerraform(this._healthCheckUri),
      healthy_threshold: cdktf.numberToTerraform(this._healthyThreshold),
      id: cdktf.stringToTerraform(this._id),
      listener_forward: cdktf.stringToTerraform(this._listenerForward),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      master_slave_server_group_id: cdktf.stringToTerraform(this._masterSlaveServerGroupId),
      persistence_timeout: cdktf.numberToTerraform(this._persistenceTimeout),
      protocol: cdktf.stringToTerraform(this._protocol),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      server_certificate_id: cdktf.stringToTerraform(this._serverCertificateId),
      server_group_id: cdktf.stringToTerraform(this._serverGroupId),
      ssl_certificate_id: cdktf.stringToTerraform(this._sslCertificateId),
      sticky_session: cdktf.stringToTerraform(this._stickySession),
      sticky_session_type: cdktf.stringToTerraform(this._stickySessionType),
      tls_cipher_policy: cdktf.stringToTerraform(this._tlsCipherPolicy),
      unhealthy_threshold: cdktf.numberToTerraform(this._unhealthyThreshold),
      logs_download_attributes: apsarastackSlbListenerLogsDownloadAttributesToTerraform(this._logsDownloadAttributes.internalValue),
      x_forwarded_for: apsarastackSlbListenerXForwardedForToTerraform(this._xForwardedFor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_id: {
        value: cdktf.stringToHclTerraform(this._aclId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_status: {
        value: cdktf.stringToHclTerraform(this._aclStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_type: {
        value: cdktf.stringToHclTerraform(this._aclType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_port: {
        value: cdktf.numberToHclTerraform(this._backendPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_certificate_id: {
        value: cdktf.stringToHclTerraform(this._caCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie: {
        value: cdktf.stringToHclTerraform(this._cookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_timeout: {
        value: cdktf.numberToHclTerraform(this._cookieTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_protection_validation: {
        value: cdktf.booleanToHclTerraform(this._deleteProtectionValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_http2: {
        value: cdktf.stringToHclTerraform(this._enableHttp2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      established_timeout: {
        value: cdktf.numberToHclTerraform(this._establishedTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_port: {
        value: cdktf.numberToHclTerraform(this._forwardPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frontend_port: {
        value: cdktf.numberToHclTerraform(this._frontendPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gzip: {
        value: cdktf.booleanToHclTerraform(this._gzip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check: {
        value: cdktf.stringToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_connect_port: {
        value: cdktf.numberToHclTerraform(this._healthCheckConnectPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_domain: {
        value: cdktf.stringToHclTerraform(this._healthCheckDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_http_code: {
        value: cdktf.stringToHclTerraform(this._healthCheckHttpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_interval: {
        value: cdktf.numberToHclTerraform(this._healthCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_method: {
        value: cdktf.stringToHclTerraform(this._healthCheckMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_timeout: {
        value: cdktf.numberToHclTerraform(this._healthCheckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_uri: {
        value: cdktf.stringToHclTerraform(this._healthCheckUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthy_threshold: {
        value: cdktf.numberToHclTerraform(this._healthyThreshold),
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
      listener_forward: {
        value: cdktf.stringToHclTerraform(this._listenerForward),
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
      master_slave_server_group_id: {
        value: cdktf.stringToHclTerraform(this._masterSlaveServerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_timeout: {
        value: cdktf.numberToHclTerraform(this._persistenceTimeout),
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
      scheduler: {
        value: cdktf.stringToHclTerraform(this._scheduler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate_id: {
        value: cdktf.stringToHclTerraform(this._serverCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_group_id: {
        value: cdktf.stringToHclTerraform(this._serverGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificate_id: {
        value: cdktf.stringToHclTerraform(this._sslCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_session: {
        value: cdktf.stringToHclTerraform(this._stickySession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_session_type: {
        value: cdktf.stringToHclTerraform(this._stickySessionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_cipher_policy: {
        value: cdktf.stringToHclTerraform(this._tlsCipherPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unhealthy_threshold: {
        value: cdktf.numberToHclTerraform(this._unhealthyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logs_download_attributes: {
        value: apsarastackSlbListenerLogsDownloadAttributesToHclTerraform(this._logsDownloadAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackSlbListenerLogsDownloadAttributesList",
      },
      x_forwarded_for: {
        value: apsarastackSlbListenerXForwardedForToHclTerraform(this._xForwardedFor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackSlbListenerXForwardedForList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
