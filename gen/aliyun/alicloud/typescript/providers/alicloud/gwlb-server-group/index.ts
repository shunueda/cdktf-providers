// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GwlbServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#dry_run GwlbServerGroup#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#id GwlbServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#protocol GwlbServerGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#resource_group_id GwlbServerGroup#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#scheduler GwlbServerGroup#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#server_group_name GwlbServerGroup#server_group_name}
  */
  readonly serverGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#server_group_type GwlbServerGroup#server_group_type}
  */
  readonly serverGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#tags GwlbServerGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#vpc_id GwlbServerGroup#vpc_id}
  */
  readonly vpcId: string;
  /**
  * connection_drain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#connection_drain_config GwlbServerGroup#connection_drain_config}
  */
  readonly connectionDrainConfig?: GwlbServerGroupConnectionDrainConfig;
  /**
  * health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#health_check_config GwlbServerGroup#health_check_config}
  */
  readonly healthCheckConfig?: GwlbServerGroupHealthCheckConfig;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#servers GwlbServerGroup#servers}
  */
  readonly servers?: GwlbServerGroupServers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#timeouts GwlbServerGroup#timeouts}
  */
  readonly timeouts?: GwlbServerGroupTimeouts;
}
export interface GwlbServerGroupConnectionDrainConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#connection_drain_enabled GwlbServerGroup#connection_drain_enabled}
  */
  readonly connectionDrainEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#connection_drain_timeout GwlbServerGroup#connection_drain_timeout}
  */
  readonly connectionDrainTimeout?: number;
}

export function gwlbServerGroupConnectionDrainConfigToTerraform(struct?: GwlbServerGroupConnectionDrainConfigOutputReference | GwlbServerGroupConnectionDrainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_drain_enabled: cdktf.booleanToTerraform(struct!.connectionDrainEnabled),
    connection_drain_timeout: cdktf.numberToTerraform(struct!.connectionDrainTimeout),
  }
}


export function gwlbServerGroupConnectionDrainConfigToHclTerraform(struct?: GwlbServerGroupConnectionDrainConfigOutputReference | GwlbServerGroupConnectionDrainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_drain_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.connectionDrainEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection_drain_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionDrainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GwlbServerGroupConnectionDrainConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GwlbServerGroupConnectionDrainConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionDrainEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDrainEnabled = this._connectionDrainEnabled;
    }
    if (this._connectionDrainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDrainTimeout = this._connectionDrainTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GwlbServerGroupConnectionDrainConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionDrainEnabled = undefined;
      this._connectionDrainTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionDrainEnabled = value.connectionDrainEnabled;
      this._connectionDrainTimeout = value.connectionDrainTimeout;
    }
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
}
export interface GwlbServerGroupHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#health_check_connect_port GwlbServerGroup#health_check_connect_port}
  */
  readonly healthCheckConnectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#health_check_connect_timeout GwlbServerGroup#health_check_connect_timeout}
  */
  readonly healthCheckConnectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#health_check_domain GwlbServerGroup#health_check_domain}
  */
  readonly healthCheckDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#health_check_enabled GwlbServerGroup#health_check_enabled}
  */
  readonly healthCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#health_check_http_code GwlbServerGroup#health_check_http_code}
  */
  readonly healthCheckHttpCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#health_check_interval GwlbServerGroup#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#health_check_path GwlbServerGroup#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#health_check_protocol GwlbServerGroup#health_check_protocol}
  */
  readonly healthCheckProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#healthy_threshold GwlbServerGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#unhealthy_threshold GwlbServerGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function gwlbServerGroupHealthCheckConfigToTerraform(struct?: GwlbServerGroupHealthCheckConfigOutputReference | GwlbServerGroupHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_connect_port: cdktf.numberToTerraform(struct!.healthCheckConnectPort),
    health_check_connect_timeout: cdktf.numberToTerraform(struct!.healthCheckConnectTimeout),
    health_check_domain: cdktf.stringToTerraform(struct!.healthCheckDomain),
    health_check_enabled: cdktf.booleanToTerraform(struct!.healthCheckEnabled),
    health_check_http_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthCheckHttpCode),
    health_check_interval: cdktf.numberToTerraform(struct!.healthCheckInterval),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    health_check_protocol: cdktf.stringToTerraform(struct!.healthCheckProtocol),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function gwlbServerGroupHealthCheckConfigToHclTerraform(struct?: GwlbServerGroupHealthCheckConfigOutputReference | GwlbServerGroupHealthCheckConfig): any {
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
    health_check_http_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthCheckHttpCode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    health_check_interval: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_path: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_protocol: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckProtocol),
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

export class GwlbServerGroupHealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GwlbServerGroupHealthCheckConfig | undefined {
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
    if (this._healthCheckHttpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckHttpCode = this._healthCheckHttpCode;
    }
    if (this._healthCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckInterval = this._healthCheckInterval;
    }
    if (this._healthCheckPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPath = this._healthCheckPath;
    }
    if (this._healthCheckProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckProtocol = this._healthCheckProtocol;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GwlbServerGroupHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheckConnectPort = undefined;
      this._healthCheckConnectTimeout = undefined;
      this._healthCheckDomain = undefined;
      this._healthCheckEnabled = undefined;
      this._healthCheckHttpCode = undefined;
      this._healthCheckInterval = undefined;
      this._healthCheckPath = undefined;
      this._healthCheckProtocol = undefined;
      this._healthyThreshold = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckConnectPort = value.healthCheckConnectPort;
      this._healthCheckConnectTimeout = value.healthCheckConnectTimeout;
      this._healthCheckDomain = value.healthCheckDomain;
      this._healthCheckEnabled = value.healthCheckEnabled;
      this._healthCheckHttpCode = value.healthCheckHttpCode;
      this._healthCheckInterval = value.healthCheckInterval;
      this._healthCheckPath = value.healthCheckPath;
      this._healthCheckProtocol = value.healthCheckProtocol;
      this._healthyThreshold = value.healthyThreshold;
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

  // health_check_http_code - computed: false, optional: true, required: false
  private _healthCheckHttpCode?: string[]; 
  public get healthCheckHttpCode() {
    return cdktf.Fn.tolist(this.getListAttribute('health_check_http_code'));
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

  // health_check_path - computed: true, optional: true, required: false
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
  }

  // health_check_protocol - computed: true, optional: true, required: false
  private _healthCheckProtocol?: string; 
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
  }
  public set healthCheckProtocol(value: string) {
    this._healthCheckProtocol = value;
  }
  public resetHealthCheckProtocol() {
    this._healthCheckProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtocolInput() {
    return this._healthCheckProtocol;
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
export interface GwlbServerGroupServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#server_id GwlbServerGroup#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#server_ip GwlbServerGroup#server_ip}
  */
  readonly serverIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#server_type GwlbServerGroup#server_type}
  */
  readonly serverType: string;
}

export function gwlbServerGroupServersToTerraform(struct?: GwlbServerGroupServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_id: cdktf.stringToTerraform(struct!.serverId),
    server_ip: cdktf.stringToTerraform(struct!.serverIp),
    server_type: cdktf.stringToTerraform(struct!.serverType),
  }
}


export function gwlbServerGroupServersToHclTerraform(struct?: GwlbServerGroupServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_id: {
      value: cdktf.stringToHclTerraform(struct!.serverId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ip: {
      value: cdktf.stringToHclTerraform(struct!.serverIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GwlbServerGroupServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GwlbServerGroupServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverId = this._serverId;
    }
    if (this._serverIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIp = this._serverIp;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GwlbServerGroupServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverId = undefined;
      this._serverIp = undefined;
      this._serverType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverId = value.serverId;
      this._serverIp = value.serverIp;
      this._serverType = value.serverType;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_group_id - computed: true, optional: false, required: false
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // server_ip - computed: true, optional: true, required: false
  private _serverIp?: string; 
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
  public set serverIp(value: string) {
    this._serverIp = value;
  }
  public resetServerIp() {
    this._serverIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpInput() {
    return this._serverIp;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class GwlbServerGroupServersList extends cdktf.ComplexList {
  public internalValue? : GwlbServerGroupServers[] | cdktf.IResolvable

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
  public get(index: number): GwlbServerGroupServersOutputReference {
    return new GwlbServerGroupServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GwlbServerGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#create GwlbServerGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#delete GwlbServerGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#update GwlbServerGroup#update}
  */
  readonly update?: string;
}

export function gwlbServerGroupTimeoutsToTerraform(struct?: GwlbServerGroupTimeouts | cdktf.IResolvable): any {
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


export function gwlbServerGroupTimeoutsToHclTerraform(struct?: GwlbServerGroupTimeouts | cdktf.IResolvable): any {
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

export class GwlbServerGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GwlbServerGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GwlbServerGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group alicloud_gwlb_server_group}
*/
export class GwlbServerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_gwlb_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GwlbServerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GwlbServerGroup to import
  * @param importFromId The id of the existing GwlbServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GwlbServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_gwlb_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gwlb_server_group alicloud_gwlb_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GwlbServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GwlbServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_gwlb_server_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._protocol = config.protocol;
    this._resourceGroupId = config.resourceGroupId;
    this._scheduler = config.scheduler;
    this._serverGroupName = config.serverGroupName;
    this._serverGroupType = config.serverGroupType;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._connectionDrainConfig.internalValue = config.connectionDrainConfig;
    this._healthCheckConfig.internalValue = config.healthCheckConfig;
    this._servers.internalValue = config.servers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // server_group_name - computed: false, optional: true, required: false
  private _serverGroupName?: string; 
  public get serverGroupName() {
    return this.getStringAttribute('server_group_name');
  }
  public set serverGroupName(value: string) {
    this._serverGroupName = value;
  }
  public resetServerGroupName() {
    this._serverGroupName = undefined;
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

  // connection_drain_config - computed: false, optional: true, required: false
  private _connectionDrainConfig = new GwlbServerGroupConnectionDrainConfigOutputReference(this, "connection_drain_config");
  public get connectionDrainConfig() {
    return this._connectionDrainConfig;
  }
  public putConnectionDrainConfig(value: GwlbServerGroupConnectionDrainConfig) {
    this._connectionDrainConfig.internalValue = value;
  }
  public resetConnectionDrainConfig() {
    this._connectionDrainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainConfigInput() {
    return this._connectionDrainConfig.internalValue;
  }

  // health_check_config - computed: false, optional: true, required: false
  private _healthCheckConfig = new GwlbServerGroupHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public putHealthCheckConfig(value: GwlbServerGroupHealthCheckConfig) {
    this._healthCheckConfig.internalValue = value;
  }
  public resetHealthCheckConfig() {
    this._healthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new GwlbServerGroupServersList(this, "servers", true);
  public get servers() {
    return this._servers;
  }
  public putServers(value: GwlbServerGroupServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GwlbServerGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GwlbServerGroupTimeouts) {
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
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      server_group_name: cdktf.stringToTerraform(this._serverGroupName),
      server_group_type: cdktf.stringToTerraform(this._serverGroupType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      connection_drain_config: gwlbServerGroupConnectionDrainConfigToTerraform(this._connectionDrainConfig.internalValue),
      health_check_config: gwlbServerGroupHealthCheckConfigToTerraform(this._healthCheckConfig.internalValue),
      servers: cdktf.listMapper(gwlbServerGroupServersToTerraform, true)(this._servers.internalValue),
      timeouts: gwlbServerGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      connection_drain_config: {
        value: gwlbServerGroupConnectionDrainConfigToHclTerraform(this._connectionDrainConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GwlbServerGroupConnectionDrainConfigList",
      },
      health_check_config: {
        value: gwlbServerGroupHealthCheckConfigToHclTerraform(this._healthCheckConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GwlbServerGroupHealthCheckConfigList",
      },
      servers: {
        value: cdktf.listMapperHcl(gwlbServerGroupServersToHclTerraform, true)(this._servers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GwlbServerGroupServersList",
      },
      timeouts: {
        value: gwlbServerGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GwlbServerGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
