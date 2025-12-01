// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaEdgeContainerAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#edge_container_app_name EsaEdgeContainerApp#edge_container_app_name}
  */
  readonly edgeContainerAppName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#health_check_fail_times EsaEdgeContainerApp#health_check_fail_times}
  */
  readonly healthCheckFailTimes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#health_check_host EsaEdgeContainerApp#health_check_host}
  */
  readonly healthCheckHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#health_check_http_code EsaEdgeContainerApp#health_check_http_code}
  */
  readonly healthCheckHttpCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#health_check_interval EsaEdgeContainerApp#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#health_check_method EsaEdgeContainerApp#health_check_method}
  */
  readonly healthCheckMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#health_check_port EsaEdgeContainerApp#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#health_check_succ_times EsaEdgeContainerApp#health_check_succ_times}
  */
  readonly healthCheckSuccTimes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#health_check_timeout EsaEdgeContainerApp#health_check_timeout}
  */
  readonly healthCheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#health_check_type EsaEdgeContainerApp#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#health_check_uri EsaEdgeContainerApp#health_check_uri}
  */
  readonly healthCheckUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#id EsaEdgeContainerApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#remarks EsaEdgeContainerApp#remarks}
  */
  readonly remarks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#service_port EsaEdgeContainerApp#service_port}
  */
  readonly servicePort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#target_port EsaEdgeContainerApp#target_port}
  */
  readonly targetPort: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#timeouts EsaEdgeContainerApp#timeouts}
  */
  readonly timeouts?: EsaEdgeContainerAppTimeouts;
}
export interface EsaEdgeContainerAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#create EsaEdgeContainerApp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#delete EsaEdgeContainerApp#delete}
  */
  readonly delete?: string;
}

export function esaEdgeContainerAppTimeoutsToTerraform(struct?: EsaEdgeContainerAppTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function esaEdgeContainerAppTimeoutsToHclTerraform(struct?: EsaEdgeContainerAppTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaEdgeContainerAppTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaEdgeContainerAppTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaEdgeContainerAppTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app alicloud_esa_edge_container_app}
*/
export class EsaEdgeContainerApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_edge_container_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaEdgeContainerApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaEdgeContainerApp to import
  * @param importFromId The id of the existing EsaEdgeContainerApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaEdgeContainerApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_edge_container_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_edge_container_app alicloud_esa_edge_container_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaEdgeContainerAppConfig
  */
  public constructor(scope: Construct, id: string, config: EsaEdgeContainerAppConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_edge_container_app',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeContainerAppName = config.edgeContainerAppName;
    this._healthCheckFailTimes = config.healthCheckFailTimes;
    this._healthCheckHost = config.healthCheckHost;
    this._healthCheckHttpCode = config.healthCheckHttpCode;
    this._healthCheckInterval = config.healthCheckInterval;
    this._healthCheckMethod = config.healthCheckMethod;
    this._healthCheckPort = config.healthCheckPort;
    this._healthCheckSuccTimes = config.healthCheckSuccTimes;
    this._healthCheckTimeout = config.healthCheckTimeout;
    this._healthCheckType = config.healthCheckType;
    this._healthCheckUri = config.healthCheckUri;
    this._id = config.id;
    this._remarks = config.remarks;
    this._servicePort = config.servicePort;
    this._targetPort = config.targetPort;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // edge_container_app_name - computed: false, optional: false, required: true
  private _edgeContainerAppName?: string; 
  public get edgeContainerAppName() {
    return this.getStringAttribute('edge_container_app_name');
  }
  public set edgeContainerAppName(value: string) {
    this._edgeContainerAppName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeContainerAppNameInput() {
    return this._edgeContainerAppName;
  }

  // health_check_fail_times - computed: false, optional: true, required: false
  private _healthCheckFailTimes?: number; 
  public get healthCheckFailTimes() {
    return this.getNumberAttribute('health_check_fail_times');
  }
  public set healthCheckFailTimes(value: number) {
    this._healthCheckFailTimes = value;
  }
  public resetHealthCheckFailTimes() {
    this._healthCheckFailTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckFailTimesInput() {
    return this._healthCheckFailTimes;
  }

  // health_check_host - computed: false, optional: true, required: false
  private _healthCheckHost?: string; 
  public get healthCheckHost() {
    return this.getStringAttribute('health_check_host');
  }
  public set healthCheckHost(value: string) {
    this._healthCheckHost = value;
  }
  public resetHealthCheckHost() {
    this._healthCheckHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHostInput() {
    return this._healthCheckHost;
  }

  // health_check_http_code - computed: true, optional: true, required: false
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

  // health_check_interval - computed: true, optional: true, required: false
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

  // health_check_port - computed: true, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_succ_times - computed: true, optional: true, required: false
  private _healthCheckSuccTimes?: number; 
  public get healthCheckSuccTimes() {
    return this.getNumberAttribute('health_check_succ_times');
  }
  public set healthCheckSuccTimes(value: number) {
    this._healthCheckSuccTimes = value;
  }
  public resetHealthCheckSuccTimes() {
    this._healthCheckSuccTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSuccTimesInput() {
    return this._healthCheckSuccTimes;
  }

  // health_check_timeout - computed: true, optional: true, required: false
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

  // health_check_type - computed: true, optional: true, required: false
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

  // health_check_uri - computed: true, optional: true, required: false
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

  // remarks - computed: false, optional: true, required: false
  private _remarks?: string; 
  public get remarks() {
    return this.getStringAttribute('remarks');
  }
  public set remarks(value: string) {
    this._remarks = value;
  }
  public resetRemarks() {
    this._remarks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarksInput() {
    return this._remarks;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaEdgeContainerAppTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaEdgeContainerAppTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_container_app_name: cdktf.stringToTerraform(this._edgeContainerAppName),
      health_check_fail_times: cdktf.numberToTerraform(this._healthCheckFailTimes),
      health_check_host: cdktf.stringToTerraform(this._healthCheckHost),
      health_check_http_code: cdktf.stringToTerraform(this._healthCheckHttpCode),
      health_check_interval: cdktf.numberToTerraform(this._healthCheckInterval),
      health_check_method: cdktf.stringToTerraform(this._healthCheckMethod),
      health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
      health_check_succ_times: cdktf.numberToTerraform(this._healthCheckSuccTimes),
      health_check_timeout: cdktf.numberToTerraform(this._healthCheckTimeout),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      health_check_uri: cdktf.stringToTerraform(this._healthCheckUri),
      id: cdktf.stringToTerraform(this._id),
      remarks: cdktf.stringToTerraform(this._remarks),
      service_port: cdktf.numberToTerraform(this._servicePort),
      target_port: cdktf.numberToTerraform(this._targetPort),
      timeouts: esaEdgeContainerAppTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_container_app_name: {
        value: cdktf.stringToHclTerraform(this._edgeContainerAppName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_fail_times: {
        value: cdktf.numberToHclTerraform(this._healthCheckFailTimes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_host: {
        value: cdktf.stringToHclTerraform(this._healthCheckHost),
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
      health_check_port: {
        value: cdktf.numberToHclTerraform(this._healthCheckPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_succ_times: {
        value: cdktf.numberToHclTerraform(this._healthCheckSuccTimes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remarks: {
        value: cdktf.stringToHclTerraform(this._remarks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_port: {
        value: cdktf.numberToHclTerraform(this._servicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_port: {
        value: cdktf.numberToHclTerraform(this._targetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: esaEdgeContainerAppTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaEdgeContainerAppTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
