// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NlbServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#address_ip_version NlbServerGroup#address_ip_version}
  */
  readonly addressIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#any_port_enabled NlbServerGroup#any_port_enabled}
  */
  readonly anyPortEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#connection_drain NlbServerGroup#connection_drain}
  */
  readonly connectionDrain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#connection_drain_enabled NlbServerGroup#connection_drain_enabled}
  */
  readonly connectionDrainEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#connection_drain_timeout NlbServerGroup#connection_drain_timeout}
  */
  readonly connectionDrainTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#id NlbServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#preserve_client_ip_enabled NlbServerGroup#preserve_client_ip_enabled}
  */
  readonly preserveClientIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#protocol NlbServerGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#resource_group_id NlbServerGroup#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#scheduler NlbServerGroup#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#server_group_name NlbServerGroup#server_group_name}
  */
  readonly serverGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#server_group_type NlbServerGroup#server_group_type}
  */
  readonly serverGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#tags NlbServerGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#vpc_id NlbServerGroup#vpc_id}
  */
  readonly vpcId: string;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check NlbServerGroup#health_check}
  */
  readonly healthCheck?: NlbServerGroupHealthCheck;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#timeouts NlbServerGroup#timeouts}
  */
  readonly timeouts?: NlbServerGroupTimeouts;
}
export interface NlbServerGroupHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check_connect_port NlbServerGroup#health_check_connect_port}
  */
  readonly healthCheckConnectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check_connect_timeout NlbServerGroup#health_check_connect_timeout}
  */
  readonly healthCheckConnectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check_domain NlbServerGroup#health_check_domain}
  */
  readonly healthCheckDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check_enabled NlbServerGroup#health_check_enabled}
  */
  readonly healthCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check_exp NlbServerGroup#health_check_exp}
  */
  readonly healthCheckExp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check_http_code NlbServerGroup#health_check_http_code}
  */
  readonly healthCheckHttpCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check_interval NlbServerGroup#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check_req NlbServerGroup#health_check_req}
  */
  readonly healthCheckReq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check_type NlbServerGroup#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#health_check_url NlbServerGroup#health_check_url}
  */
  readonly healthCheckUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#healthy_threshold NlbServerGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#http_check_method NlbServerGroup#http_check_method}
  */
  readonly httpCheckMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#unhealthy_threshold NlbServerGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function nlbServerGroupHealthCheckToTerraform(struct?: NlbServerGroupHealthCheckOutputReference | NlbServerGroupHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_connect_port: cdktf.numberToTerraform(struct!.healthCheckConnectPort),
    health_check_connect_timeout: cdktf.numberToTerraform(struct!.healthCheckConnectTimeout),
    health_check_domain: cdktf.stringToTerraform(struct!.healthCheckDomain),
    health_check_enabled: cdktf.booleanToTerraform(struct!.healthCheckEnabled),
    health_check_exp: cdktf.stringToTerraform(struct!.healthCheckExp),
    health_check_http_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthCheckHttpCode),
    health_check_interval: cdktf.numberToTerraform(struct!.healthCheckInterval),
    health_check_req: cdktf.stringToTerraform(struct!.healthCheckReq),
    health_check_type: cdktf.stringToTerraform(struct!.healthCheckType),
    health_check_url: cdktf.stringToTerraform(struct!.healthCheckUrl),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    http_check_method: cdktf.stringToTerraform(struct!.httpCheckMethod),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function nlbServerGroupHealthCheckToHclTerraform(struct?: NlbServerGroupHealthCheckOutputReference | NlbServerGroupHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_connect_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckConnectPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_domain: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.healthCheckEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_check_exp: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckExp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_http_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthCheckHttpCode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    health_check_interval: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_req: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckReq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_type: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_url: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_check_method: {
      value: cdktf.stringToHclTerraform(struct!.httpCheckMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NlbServerGroupHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NlbServerGroupHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckConnectPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckConnectPort = this._healthCheckConnectPort;
    }
    if (this._healthCheckConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckConnectTimeout = this._healthCheckConnectTimeout;
    }
    if (this._healthCheckDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckDomain = this._healthCheckDomain;
    }
    if (this._healthCheckEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckEnabled = this._healthCheckEnabled;
    }
    if (this._healthCheckExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckExp = this._healthCheckExp;
    }
    if (this._healthCheckHttpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckHttpCode = this._healthCheckHttpCode;
    }
    if (this._healthCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckInterval = this._healthCheckInterval;
    }
    if (this._healthCheckReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckReq = this._healthCheckReq;
    }
    if (this._healthCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckType = this._healthCheckType;
    }
    if (this._healthCheckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckUrl = this._healthCheckUrl;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._httpCheckMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCheckMethod = this._httpCheckMethod;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NlbServerGroupHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheckConnectPort = undefined;
      this._healthCheckConnectTimeout = undefined;
      this._healthCheckDomain = undefined;
      this._healthCheckEnabled = undefined;
      this._healthCheckExp = undefined;
      this._healthCheckHttpCode = undefined;
      this._healthCheckInterval = undefined;
      this._healthCheckReq = undefined;
      this._healthCheckType = undefined;
      this._healthCheckUrl = undefined;
      this._healthyThreshold = undefined;
      this._httpCheckMethod = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckConnectPort = value.healthCheckConnectPort;
      this._healthCheckConnectTimeout = value.healthCheckConnectTimeout;
      this._healthCheckDomain = value.healthCheckDomain;
      this._healthCheckEnabled = value.healthCheckEnabled;
      this._healthCheckExp = value.healthCheckExp;
      this._healthCheckHttpCode = value.healthCheckHttpCode;
      this._healthCheckInterval = value.healthCheckInterval;
      this._healthCheckReq = value.healthCheckReq;
      this._healthCheckType = value.healthCheckType;
      this._healthCheckUrl = value.healthCheckUrl;
      this._healthyThreshold = value.healthyThreshold;
      this._httpCheckMethod = value.httpCheckMethod;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
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

  // health_check_connect_timeout - computed: true, optional: true, required: false
  private _healthCheckConnectTimeout?: number; 
  public get healthCheckConnectTimeout() {
    return this.getNumberAttribute('health_check_connect_timeout');
  }
  public set healthCheckConnectTimeout(value: number) {
    this._healthCheckConnectTimeout = value;
  }
  public resetHealthCheckConnectTimeout() {
    this._healthCheckConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConnectTimeoutInput() {
    return this._healthCheckConnectTimeout;
  }

  // health_check_domain - computed: true, optional: true, required: false
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

  // health_check_enabled - computed: true, optional: true, required: false
  private _healthCheckEnabled?: boolean | cdktf.IResolvable; 
  public get healthCheckEnabled() {
    return this.getBooleanAttribute('health_check_enabled');
  }
  public set healthCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._healthCheckEnabled = value;
  }
  public resetHealthCheckEnabled() {
    this._healthCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckEnabledInput() {
    return this._healthCheckEnabled;
  }

  // health_check_exp - computed: false, optional: true, required: false
  private _healthCheckExp?: string; 
  public get healthCheckExp() {
    return this.getStringAttribute('health_check_exp');
  }
  public set healthCheckExp(value: string) {
    this._healthCheckExp = value;
  }
  public resetHealthCheckExp() {
    this._healthCheckExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckExpInput() {
    return this._healthCheckExp;
  }

  // health_check_http_code - computed: true, optional: true, required: false
  private _healthCheckHttpCode?: string[]; 
  public get healthCheckHttpCode() {
    return this.getListAttribute('health_check_http_code');
  }
  public set healthCheckHttpCode(value: string[]) {
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

  // health_check_req - computed: false, optional: true, required: false
  private _healthCheckReq?: string; 
  public get healthCheckReq() {
    return this.getStringAttribute('health_check_req');
  }
  public set healthCheckReq(value: string) {
    this._healthCheckReq = value;
  }
  public resetHealthCheckReq() {
    this._healthCheckReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckReqInput() {
    return this._healthCheckReq;
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

  // health_check_url - computed: true, optional: true, required: false
  private _healthCheckUrl?: string; 
  public get healthCheckUrl() {
    return this.getStringAttribute('health_check_url');
  }
  public set healthCheckUrl(value: string) {
    this._healthCheckUrl = value;
  }
  public resetHealthCheckUrl() {
    this._healthCheckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUrlInput() {
    return this._healthCheckUrl;
  }

  // healthy_threshold - computed: true, optional: true, required: false
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

  // http_check_method - computed: true, optional: true, required: false
  private _httpCheckMethod?: string; 
  public get httpCheckMethod() {
    return this.getStringAttribute('http_check_method');
  }
  public set httpCheckMethod(value: string) {
    this._httpCheckMethod = value;
  }
  public resetHttpCheckMethod() {
    this._httpCheckMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCheckMethodInput() {
    return this._httpCheckMethod;
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
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
}
export interface NlbServerGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#create NlbServerGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#delete NlbServerGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#update NlbServerGroup#update}
  */
  readonly update?: string;
}

export function nlbServerGroupTimeoutsToTerraform(struct?: NlbServerGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function nlbServerGroupTimeoutsToHclTerraform(struct?: NlbServerGroupTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NlbServerGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NlbServerGroupTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NlbServerGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group alicloud_nlb_server_group}
*/
export class NlbServerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nlb_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NlbServerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NlbServerGroup to import
  * @param importFromId The id of the existing NlbServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NlbServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nlb_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_server_group alicloud_nlb_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NlbServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: NlbServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nlb_server_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressIpVersion = config.addressIpVersion;
    this._anyPortEnabled = config.anyPortEnabled;
    this._connectionDrain = config.connectionDrain;
    this._connectionDrainEnabled = config.connectionDrainEnabled;
    this._connectionDrainTimeout = config.connectionDrainTimeout;
    this._id = config.id;
    this._preserveClientIpEnabled = config.preserveClientIpEnabled;
    this._protocol = config.protocol;
    this._resourceGroupId = config.resourceGroupId;
    this._scheduler = config.scheduler;
    this._serverGroupName = config.serverGroupName;
    this._serverGroupType = config.serverGroupType;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._healthCheck.internalValue = config.healthCheck;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ip_version - computed: true, optional: true, required: false
  private _addressIpVersion?: string; 
  public get addressIpVersion() {
    return this.getStringAttribute('address_ip_version');
  }
  public set addressIpVersion(value: string) {
    this._addressIpVersion = value;
  }
  public resetAddressIpVersion() {
    this._addressIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpVersionInput() {
    return this._addressIpVersion;
  }

  // any_port_enabled - computed: true, optional: true, required: false
  private _anyPortEnabled?: boolean | cdktf.IResolvable; 
  public get anyPortEnabled() {
    return this.getBooleanAttribute('any_port_enabled');
  }
  public set anyPortEnabled(value: boolean | cdktf.IResolvable) {
    this._anyPortEnabled = value;
  }
  public resetAnyPortEnabled() {
    this._anyPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyPortEnabledInput() {
    return this._anyPortEnabled;
  }

  // connection_drain - computed: true, optional: true, required: false
  private _connectionDrain?: boolean | cdktf.IResolvable; 
  public get connectionDrain() {
    return this.getBooleanAttribute('connection_drain');
  }
  public set connectionDrain(value: boolean | cdktf.IResolvable) {
    this._connectionDrain = value;
  }
  public resetConnectionDrain() {
    this._connectionDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainInput() {
    return this._connectionDrain;
  }

  // connection_drain_enabled - computed: true, optional: true, required: false
  private _connectionDrainEnabled?: boolean | cdktf.IResolvable; 
  public get connectionDrainEnabled() {
    return this.getBooleanAttribute('connection_drain_enabled');
  }
  public set connectionDrainEnabled(value: boolean | cdktf.IResolvable) {
    this._connectionDrainEnabled = value;
  }
  public resetConnectionDrainEnabled() {
    this._connectionDrainEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainEnabledInput() {
    return this._connectionDrainEnabled;
  }

  // connection_drain_timeout - computed: true, optional: true, required: false
  private _connectionDrainTimeout?: number; 
  public get connectionDrainTimeout() {
    return this.getNumberAttribute('connection_drain_timeout');
  }
  public set connectionDrainTimeout(value: number) {
    this._connectionDrainTimeout = value;
  }
  public resetConnectionDrainTimeout() {
    this._connectionDrainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainTimeoutInput() {
    return this._connectionDrainTimeout;
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

  // preserve_client_ip_enabled - computed: true, optional: true, required: false
  private _preserveClientIpEnabled?: boolean | cdktf.IResolvable; 
  public get preserveClientIpEnabled() {
    return this.getBooleanAttribute('preserve_client_ip_enabled');
  }
  public set preserveClientIpEnabled(value: boolean | cdktf.IResolvable) {
    this._preserveClientIpEnabled = value;
  }
  public resetPreserveClientIpEnabled() {
    this._preserveClientIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveClientIpEnabledInput() {
    return this._preserveClientIpEnabled;
  }

  // protocol - computed: true, optional: true, required: false
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // scheduler - computed: true, optional: true, required: false
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

  // server_group_name - computed: false, optional: false, required: true
  private _serverGroupName?: string; 
  public get serverGroupName() {
    return this.getStringAttribute('server_group_name');
  }
  public set serverGroupName(value: string) {
    this._serverGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupNameInput() {
    return this._serverGroupName;
  }

  // server_group_type - computed: true, optional: true, required: false
  private _serverGroupType?: string; 
  public get serverGroupType() {
    return this.getStringAttribute('server_group_type');
  }
  public set serverGroupType(value: string) {
    this._serverGroupType = value;
  }
  public resetServerGroupType() {
    this._serverGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupTypeInput() {
    return this._serverGroupType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new NlbServerGroupHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: NlbServerGroupHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NlbServerGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NlbServerGroupTimeouts) {
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
      address_ip_version: cdktf.stringToTerraform(this._addressIpVersion),
      any_port_enabled: cdktf.booleanToTerraform(this._anyPortEnabled),
      connection_drain: cdktf.booleanToTerraform(this._connectionDrain),
      connection_drain_enabled: cdktf.booleanToTerraform(this._connectionDrainEnabled),
      connection_drain_timeout: cdktf.numberToTerraform(this._connectionDrainTimeout),
      id: cdktf.stringToTerraform(this._id),
      preserve_client_ip_enabled: cdktf.booleanToTerraform(this._preserveClientIpEnabled),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      server_group_name: cdktf.stringToTerraform(this._serverGroupName),
      server_group_type: cdktf.stringToTerraform(this._serverGroupType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      health_check: nlbServerGroupHealthCheckToTerraform(this._healthCheck.internalValue),
      timeouts: nlbServerGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_ip_version: {
        value: cdktf.stringToHclTerraform(this._addressIpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      any_port_enabled: {
        value: cdktf.booleanToHclTerraform(this._anyPortEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_drain: {
        value: cdktf.booleanToHclTerraform(this._connectionDrain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_drain_enabled: {
        value: cdktf.booleanToHclTerraform(this._connectionDrainEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_drain_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionDrainTimeout),
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
      preserve_client_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._preserveClientIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      server_group_name: {
        value: cdktf.stringToHclTerraform(this._serverGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_group_type: {
        value: cdktf.stringToHclTerraform(this._serverGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: nlbServerGroupHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NlbServerGroupHealthCheckList",
      },
      timeouts: {
        value: nlbServerGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NlbServerGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
