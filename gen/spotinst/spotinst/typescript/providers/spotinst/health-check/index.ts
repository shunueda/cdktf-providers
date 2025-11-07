// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#id HealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#name HealthCheck#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#proxy_address HealthCheck#proxy_address}
  */
  readonly proxyAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#proxy_port HealthCheck#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#resource_id HealthCheck#resource_id}
  */
  readonly resourceId: string;
  /**
  * check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#check HealthCheck#check}
  */
  readonly check?: HealthCheckCheck;
}
export interface HealthCheckCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#end_point HealthCheck#end_point}
  */
  readonly endPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#endpoint HealthCheck#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#healthy HealthCheck#healthy}
  */
  readonly healthy: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#interval HealthCheck#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#port HealthCheck#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#protocol HealthCheck#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#time_out HealthCheck#time_out}
  */
  readonly timeOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#timeout HealthCheck#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#unhealthy HealthCheck#unhealthy}
  */
  readonly unhealthy: number;
}

export function healthCheckCheckToTerraform(struct?: HealthCheckCheckOutputReference | HealthCheckCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_point: cdktf.stringToTerraform(struct!.endPoint),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    healthy: cdktf.numberToTerraform(struct!.healthy),
    interval: cdktf.numberToTerraform(struct!.interval),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    time_out: cdktf.numberToTerraform(struct!.timeOut),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy: cdktf.numberToTerraform(struct!.unhealthy),
  }
}


export function healthCheckCheckToHclTerraform(struct?: HealthCheckCheckOutputReference | HealthCheckCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_point: {
      value: cdktf.stringToHclTerraform(struct!.endPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthy: {
      value: cdktf.numberToHclTerraform(struct!.healthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_out: {
      value: cdktf.numberToHclTerraform(struct!.timeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy: {
      value: cdktf.numberToHclTerraform(struct!.unhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthCheckCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthCheckCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPoint = this._endPoint;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._healthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOut = this._timeOut;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthy = this._unhealthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthCheckCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endPoint = undefined;
      this._endpoint = undefined;
      this._healthy = undefined;
      this._interval = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeOut = undefined;
      this._timeout = undefined;
      this._unhealthy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endPoint = value.endPoint;
      this._endpoint = value.endpoint;
      this._healthy = value.healthy;
      this._interval = value.interval;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeOut = value.timeOut;
      this._timeout = value.timeout;
      this._unhealthy = value.unhealthy;
    }
  }

  // end_point - computed: false, optional: true, required: false
  private _endPoint?: string; 
  public get endPoint() {
    return this.getStringAttribute('end_point');
  }
  public set endPoint(value: string) {
    this._endPoint = value;
  }
  public resetEndPoint() {
    this._endPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointInput() {
    return this._endPoint;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // healthy - computed: false, optional: false, required: true
  private _healthy?: number; 
  public get healthy() {
    return this.getNumberAttribute('healthy');
  }
  public set healthy(value: number) {
    this._healthy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // time_out - computed: false, optional: true, required: false
  private _timeOut?: number; 
  public get timeOut() {
    return this.getNumberAttribute('time_out');
  }
  public set timeOut(value: number) {
    this._timeOut = value;
  }
  public resetTimeOut() {
    this._timeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOutInput() {
    return this._timeOut;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy - computed: false, optional: false, required: true
  private _unhealthy?: number; 
  public get unhealthy() {
    return this.getNumberAttribute('unhealthy');
  }
  public set unhealthy(value: number) {
    this._unhealthy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyInput() {
    return this._unhealthy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check spotinst_health_check}
*/
export class HealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthCheck to import
  * @param importFromId The id of the existing HealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/health_check spotinst_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: HealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_health_check',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
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
    this._name = config.name;
    this._proxyAddress = config.proxyAddress;
    this._proxyPort = config.proxyPort;
    this._resourceId = config.resourceId;
    this._check.internalValue = config.check;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // proxy_address - computed: false, optional: false, required: true
  private _proxyAddress?: string; 
  public get proxyAddress() {
    return this.getStringAttribute('proxy_address');
  }
  public set proxyAddress(value: string) {
    this._proxyAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAddressInput() {
    return this._proxyAddress;
  }

  // proxy_port - computed: false, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // check - computed: false, optional: true, required: false
  private _check = new HealthCheckCheckOutputReference(this, "check");
  public get check() {
    return this._check;
  }
  public putCheck(value: HealthCheckCheck) {
    this._check.internalValue = value;
  }
  public resetCheck() {
    this._check.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proxy_address: cdktf.stringToTerraform(this._proxyAddress),
      proxy_port: cdktf.numberToTerraform(this._proxyPort),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      check: healthCheckCheckToTerraform(this._check.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_address: {
        value: cdktf.stringToHclTerraform(this._proxyAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_port: {
        value: cdktf.numberToHclTerraform(this._proxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check: {
        value: healthCheckCheckToHclTerraform(this._check.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthCheckCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
