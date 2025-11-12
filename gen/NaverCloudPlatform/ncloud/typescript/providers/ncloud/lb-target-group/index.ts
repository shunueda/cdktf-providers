// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbTargetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#algorithm_type LbTargetGroup#algorithm_type}
  */
  readonly algorithmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#description LbTargetGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#id LbTargetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#name LbTargetGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#port LbTargetGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#target_type LbTargetGroup#target_type}
  */
  readonly targetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#use_proxy_protocol LbTargetGroup#use_proxy_protocol}
  */
  readonly useProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#use_sticky_session LbTargetGroup#use_sticky_session}
  */
  readonly useStickySession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#vpc_no LbTargetGroup#vpc_no}
  */
  readonly vpcNo: string;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#health_check LbTargetGroup#health_check}
  */
  readonly healthCheck?: LbTargetGroupHealthCheck;
}
export interface LbTargetGroupHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#cycle LbTargetGroup#cycle}
  */
  readonly cycle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#down_threshold LbTargetGroup#down_threshold}
  */
  readonly downThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#http_method LbTargetGroup#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#port LbTargetGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#up_threshold LbTargetGroup#up_threshold}
  */
  readonly upThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#url_path LbTargetGroup#url_path}
  */
  readonly urlPath?: string;
}

export function lbTargetGroupHealthCheckToTerraform(struct?: LbTargetGroupHealthCheckOutputReference | LbTargetGroupHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cycle: cdktf.numberToTerraform(struct!.cycle),
    down_threshold: cdktf.numberToTerraform(struct!.downThreshold),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    up_threshold: cdktf.numberToTerraform(struct!.upThreshold),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}


export function lbTargetGroupHealthCheckToHclTerraform(struct?: LbTargetGroupHealthCheckOutputReference | LbTargetGroupHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cycle: {
      value: cdktf.numberToHclTerraform(struct!.cycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    down_threshold: {
      value: cdktf.numberToHclTerraform(struct!.downThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    up_threshold: {
      value: cdktf.numberToHclTerraform(struct!.upThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbTargetGroupHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbTargetGroupHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycle = this._cycle;
    }
    if (this._downThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.downThreshold = this._downThreshold;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._upThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.upThreshold = this._upThreshold;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbTargetGroupHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cycle = undefined;
      this._downThreshold = undefined;
      this._httpMethod = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._upThreshold = undefined;
      this._urlPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cycle = value.cycle;
      this._downThreshold = value.downThreshold;
      this._httpMethod = value.httpMethod;
      this._port = value.port;
      this._protocol = value.protocol;
      this._upThreshold = value.upThreshold;
      this._urlPath = value.urlPath;
    }
  }

  // cycle - computed: false, optional: true, required: false
  private _cycle?: number; 
  public get cycle() {
    return this.getNumberAttribute('cycle');
  }
  public set cycle(value: number) {
    this._cycle = value;
  }
  public resetCycle() {
    this._cycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleInput() {
    return this._cycle;
  }

  // down_threshold - computed: false, optional: true, required: false
  private _downThreshold?: number; 
  public get downThreshold() {
    return this.getNumberAttribute('down_threshold');
  }
  public set downThreshold(value: number) {
    this._downThreshold = value;
  }
  public resetDownThreshold() {
    this._downThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downThresholdInput() {
    return this._downThreshold;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
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

  // up_threshold - computed: false, optional: true, required: false
  private _upThreshold?: number; 
  public get upThreshold() {
    return this.getNumberAttribute('up_threshold');
  }
  public set upThreshold(value: number) {
    this._upThreshold = value;
  }
  public resetUpThreshold() {
    this._upThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upThresholdInput() {
    return this._upThreshold;
  }

  // url_path - computed: true, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group ncloud_lb_target_group}
*/
export class LbTargetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_lb_target_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbTargetGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbTargetGroup to import
  * @param importFromId The id of the existing LbTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbTargetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_lb_target_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/lb_target_group ncloud_lb_target_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbTargetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: LbTargetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_lb_target_group',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithmType = config.algorithmType;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._port = config.port;
    this._protocol = config.protocol;
    this._targetType = config.targetType;
    this._useProxyProtocol = config.useProxyProtocol;
    this._useStickySession = config.useStickySession;
    this._vpcNo = config.vpcNo;
    this._healthCheck.internalValue = config.healthCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm_type - computed: true, optional: true, required: false
  private _algorithmType?: string; 
  public get algorithmType() {
    return this.getStringAttribute('algorithm_type');
  }
  public set algorithmType(value: string) {
    this._algorithmType = value;
  }
  public resetAlgorithmType() {
    this._algorithmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmTypeInput() {
    return this._algorithmType;
  }

  // description - computed: false, optional: true, required: false
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

  // load_balancer_instance_no - computed: true, optional: false, required: false
  public get loadBalancerInstanceNo() {
    return this.getStringAttribute('load_balancer_instance_no');
  }

  // name - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
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

  // target_group_no - computed: true, optional: false, required: false
  public get targetGroupNo() {
    return this.getStringAttribute('target_group_no');
  }

  // target_no_list - computed: true, optional: false, required: false
  public get targetNoList() {
    return this.getListAttribute('target_no_list');
  }

  // target_type - computed: true, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // use_proxy_protocol - computed: true, optional: true, required: false
  private _useProxyProtocol?: boolean | cdktf.IResolvable; 
  public get useProxyProtocol() {
    return this.getBooleanAttribute('use_proxy_protocol');
  }
  public set useProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._useProxyProtocol = value;
  }
  public resetUseProxyProtocol() {
    this._useProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyProtocolInput() {
    return this._useProxyProtocol;
  }

  // use_sticky_session - computed: true, optional: true, required: false
  private _useStickySession?: boolean | cdktf.IResolvable; 
  public get useStickySession() {
    return this.getBooleanAttribute('use_sticky_session');
  }
  public set useStickySession(value: boolean | cdktf.IResolvable) {
    this._useStickySession = value;
  }
  public resetUseStickySession() {
    this._useStickySession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStickySessionInput() {
    return this._useStickySession;
  }

  // vpc_no - computed: false, optional: false, required: true
  private _vpcNo?: string; 
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }
  public set vpcNo(value: string) {
    this._vpcNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNoInput() {
    return this._vpcNo;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new LbTargetGroupHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: LbTargetGroupHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm_type: cdktf.stringToTerraform(this._algorithmType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      target_type: cdktf.stringToTerraform(this._targetType),
      use_proxy_protocol: cdktf.booleanToTerraform(this._useProxyProtocol),
      use_sticky_session: cdktf.booleanToTerraform(this._useStickySession),
      vpc_no: cdktf.stringToTerraform(this._vpcNo),
      health_check: lbTargetGroupHealthCheckToTerraform(this._healthCheck.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm_type: {
        value: cdktf.stringToHclTerraform(this._algorithmType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_proxy_protocol: {
        value: cdktf.booleanToHclTerraform(this._useProxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_sticky_session: {
        value: cdktf.booleanToHclTerraform(this._useStickySession),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_no: {
        value: cdktf.stringToHclTerraform(this._vpcNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: lbTargetGroupHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbTargetGroupHealthCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
