// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#cross_zone_enabled AlbServerGroup#cross_zone_enabled}
  */
  readonly crossZoneEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#dry_run AlbServerGroup#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_template_id AlbServerGroup#health_check_template_id}
  */
  readonly healthCheckTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#id AlbServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#ipv6_enabled AlbServerGroup#ipv6_enabled}
  */
  readonly ipv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#protocol AlbServerGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#resource_group_id AlbServerGroup#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#scheduler AlbServerGroup#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#server_group_name AlbServerGroup#server_group_name}
  */
  readonly serverGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#server_group_type AlbServerGroup#server_group_type}
  */
  readonly serverGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#service_name AlbServerGroup#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#tags AlbServerGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#upstream_keepalive_enabled AlbServerGroup#upstream_keepalive_enabled}
  */
  readonly upstreamKeepaliveEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#vpc_id AlbServerGroup#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * connection_drain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#connection_drain_config AlbServerGroup#connection_drain_config}
  */
  readonly connectionDrainConfig?: AlbServerGroupConnectionDrainConfig;
  /**
  * health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_config AlbServerGroup#health_check_config}
  */
  readonly healthCheckConfig: AlbServerGroupHealthCheckConfig;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#servers AlbServerGroup#servers}
  */
  readonly servers?: AlbServerGroupServers[] | cdktf.IResolvable;
  /**
  * slow_start_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#slow_start_config AlbServerGroup#slow_start_config}
  */
  readonly slowStartConfig?: AlbServerGroupSlowStartConfig;
  /**
  * sticky_session_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#sticky_session_config AlbServerGroup#sticky_session_config}
  */
  readonly stickySessionConfig?: AlbServerGroupStickySessionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#timeouts AlbServerGroup#timeouts}
  */
  readonly timeouts?: AlbServerGroupTimeouts;
  /**
  * uch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#uch_config AlbServerGroup#uch_config}
  */
  readonly uchConfig?: AlbServerGroupUchConfig;
}
export interface AlbServerGroupConnectionDrainConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#connection_drain_enabled AlbServerGroup#connection_drain_enabled}
  */
  readonly connectionDrainEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#connection_drain_timeout AlbServerGroup#connection_drain_timeout}
  */
  readonly connectionDrainTimeout?: number;
}

export function albServerGroupConnectionDrainConfigToTerraform(struct?: AlbServerGroupConnectionDrainConfigOutputReference | AlbServerGroupConnectionDrainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_drain_enabled: cdktf.booleanToTerraform(struct!.connectionDrainEnabled),
    connection_drain_timeout: cdktf.numberToTerraform(struct!.connectionDrainTimeout),
  }
}


export function albServerGroupConnectionDrainConfigToHclTerraform(struct?: AlbServerGroupConnectionDrainConfigOutputReference | AlbServerGroupConnectionDrainConfig): any {
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

export class AlbServerGroupConnectionDrainConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbServerGroupConnectionDrainConfig | undefined {
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

  public set internalValue(value: AlbServerGroupConnectionDrainConfig | undefined) {
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
export interface AlbServerGroupHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_codes AlbServerGroup#health_check_codes}
  */
  readonly healthCheckCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_connect_port AlbServerGroup#health_check_connect_port}
  */
  readonly healthCheckConnectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_enabled AlbServerGroup#health_check_enabled}
  */
  readonly healthCheckEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_host AlbServerGroup#health_check_host}
  */
  readonly healthCheckHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_http_version AlbServerGroup#health_check_http_version}
  */
  readonly healthCheckHttpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_interval AlbServerGroup#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_method AlbServerGroup#health_check_method}
  */
  readonly healthCheckMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_path AlbServerGroup#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_protocol AlbServerGroup#health_check_protocol}
  */
  readonly healthCheckProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#health_check_timeout AlbServerGroup#health_check_timeout}
  */
  readonly healthCheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#healthy_threshold AlbServerGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#unhealthy_threshold AlbServerGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function albServerGroupHealthCheckConfigToTerraform(struct?: AlbServerGroupHealthCheckConfigOutputReference | AlbServerGroupHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthCheckCodes),
    health_check_connect_port: cdktf.numberToTerraform(struct!.healthCheckConnectPort),
    health_check_enabled: cdktf.booleanToTerraform(struct!.healthCheckEnabled),
    health_check_host: cdktf.stringToTerraform(struct!.healthCheckHost),
    health_check_http_version: cdktf.stringToTerraform(struct!.healthCheckHttpVersion),
    health_check_interval: cdktf.numberToTerraform(struct!.healthCheckInterval),
    health_check_method: cdktf.stringToTerraform(struct!.healthCheckMethod),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    health_check_protocol: cdktf.stringToTerraform(struct!.healthCheckProtocol),
    health_check_timeout: cdktf.numberToTerraform(struct!.healthCheckTimeout),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function albServerGroupHealthCheckConfigToHclTerraform(struct?: AlbServerGroupHealthCheckConfigOutputReference | AlbServerGroupHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthCheckCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    health_check_connect_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckConnectPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.healthCheckEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_check_host: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_http_version: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckHttpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_interval: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_method: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    health_check_timeout: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class AlbServerGroupHealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbServerGroupHealthCheckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckCodes = this._healthCheckCodes;
    }
    if (this._healthCheckConnectPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckConnectPort = this._healthCheckConnectPort;
    }
    if (this._healthCheckEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckEnabled = this._healthCheckEnabled;
    }
    if (this._healthCheckHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckHost = this._healthCheckHost;
    }
    if (this._healthCheckHttpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckHttpVersion = this._healthCheckHttpVersion;
    }
    if (this._healthCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckInterval = this._healthCheckInterval;
    }
    if (this._healthCheckMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckMethod = this._healthCheckMethod;
    }
    if (this._healthCheckPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPath = this._healthCheckPath;
    }
    if (this._healthCheckProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckProtocol = this._healthCheckProtocol;
    }
    if (this._healthCheckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckTimeout = this._healthCheckTimeout;
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

  public set internalValue(value: AlbServerGroupHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheckCodes = undefined;
      this._healthCheckConnectPort = undefined;
      this._healthCheckEnabled = undefined;
      this._healthCheckHost = undefined;
      this._healthCheckHttpVersion = undefined;
      this._healthCheckInterval = undefined;
      this._healthCheckMethod = undefined;
      this._healthCheckPath = undefined;
      this._healthCheckProtocol = undefined;
      this._healthCheckTimeout = undefined;
      this._healthyThreshold = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckCodes = value.healthCheckCodes;
      this._healthCheckConnectPort = value.healthCheckConnectPort;
      this._healthCheckEnabled = value.healthCheckEnabled;
      this._healthCheckHost = value.healthCheckHost;
      this._healthCheckHttpVersion = value.healthCheckHttpVersion;
      this._healthCheckInterval = value.healthCheckInterval;
      this._healthCheckMethod = value.healthCheckMethod;
      this._healthCheckPath = value.healthCheckPath;
      this._healthCheckProtocol = value.healthCheckProtocol;
      this._healthCheckTimeout = value.healthCheckTimeout;
      this._healthyThreshold = value.healthyThreshold;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // health_check_codes - computed: true, optional: true, required: false
  private _healthCheckCodes?: string[]; 
  public get healthCheckCodes() {
    return this.getListAttribute('health_check_codes');
  }
  public set healthCheckCodes(value: string[]) {
    this._healthCheckCodes = value;
  }
  public resetHealthCheckCodes() {
    this._healthCheckCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckCodesInput() {
    return this._healthCheckCodes;
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

  // health_check_enabled - computed: false, optional: false, required: true
  private _healthCheckEnabled?: boolean | cdktf.IResolvable; 
  public get healthCheckEnabled() {
    return this.getBooleanAttribute('health_check_enabled');
  }
  public set healthCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._healthCheckEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckEnabledInput() {
    return this._healthCheckEnabled;
  }

  // health_check_host - computed: true, optional: true, required: false
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

  // health_check_http_version - computed: true, optional: true, required: false
  private _healthCheckHttpVersion?: string; 
  public get healthCheckHttpVersion() {
    return this.getStringAttribute('health_check_http_version');
  }
  public set healthCheckHttpVersion(value: string) {
    this._healthCheckHttpVersion = value;
  }
  public resetHealthCheckHttpVersion() {
    this._healthCheckHttpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpVersionInput() {
    return this._healthCheckHttpVersion;
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
export interface AlbServerGroupServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#description AlbServerGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#port AlbServerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#remote_ip_enabled AlbServerGroup#remote_ip_enabled}
  */
  readonly remoteIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#server_id AlbServerGroup#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#server_ip AlbServerGroup#server_ip}
  */
  readonly serverIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#server_type AlbServerGroup#server_type}
  */
  readonly serverType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#weight AlbServerGroup#weight}
  */
  readonly weight?: number;
}

export function albServerGroupServersToTerraform(struct?: AlbServerGroupServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    port: cdktf.numberToTerraform(struct!.port),
    remote_ip_enabled: cdktf.booleanToTerraform(struct!.remoteIpEnabled),
    server_id: cdktf.stringToTerraform(struct!.serverId),
    server_ip: cdktf.stringToTerraform(struct!.serverIp),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function albServerGroupServersToHclTerraform(struct?: AlbServerGroupServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    remote_ip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.remoteIpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbServerGroupServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbServerGroupServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._remoteIpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpEnabled = this._remoteIpEnabled;
    }
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
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbServerGroupServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._port = undefined;
      this._remoteIpEnabled = undefined;
      this._serverId = undefined;
      this._serverIp = undefined;
      this._serverType = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._port = value.port;
      this._remoteIpEnabled = value.remoteIpEnabled;
      this._serverId = value.serverId;
      this._serverIp = value.serverIp;
      this._serverType = value.serverType;
      this._weight = value.weight;
    }
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

  // remote_ip_enabled - computed: true, optional: true, required: false
  private _remoteIpEnabled?: boolean | cdktf.IResolvable; 
  public get remoteIpEnabled() {
    return this.getBooleanAttribute('remote_ip_enabled');
  }
  public set remoteIpEnabled(value: boolean | cdktf.IResolvable) {
    this._remoteIpEnabled = value;
  }
  public resetRemoteIpEnabled() {
    this._remoteIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpEnabledInput() {
    return this._remoteIpEnabled;
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

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AlbServerGroupServersList extends cdktf.ComplexList {
  public internalValue? : AlbServerGroupServers[] | cdktf.IResolvable

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
  public get(index: number): AlbServerGroupServersOutputReference {
    return new AlbServerGroupServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbServerGroupSlowStartConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#slow_start_duration AlbServerGroup#slow_start_duration}
  */
  readonly slowStartDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#slow_start_enabled AlbServerGroup#slow_start_enabled}
  */
  readonly slowStartEnabled?: boolean | cdktf.IResolvable;
}

export function albServerGroupSlowStartConfigToTerraform(struct?: AlbServerGroupSlowStartConfigOutputReference | AlbServerGroupSlowStartConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slow_start_duration: cdktf.numberToTerraform(struct!.slowStartDuration),
    slow_start_enabled: cdktf.booleanToTerraform(struct!.slowStartEnabled),
  }
}


export function albServerGroupSlowStartConfigToHclTerraform(struct?: AlbServerGroupSlowStartConfigOutputReference | AlbServerGroupSlowStartConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slow_start_duration: {
      value: cdktf.numberToHclTerraform(struct!.slowStartDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_start_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.slowStartEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbServerGroupSlowStartConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbServerGroupSlowStartConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slowStartDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStartDuration = this._slowStartDuration;
    }
    if (this._slowStartEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStartEnabled = this._slowStartEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbServerGroupSlowStartConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slowStartDuration = undefined;
      this._slowStartEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slowStartDuration = value.slowStartDuration;
      this._slowStartEnabled = value.slowStartEnabled;
    }
  }

  // slow_start_duration - computed: true, optional: true, required: false
  private _slowStartDuration?: number; 
  public get slowStartDuration() {
    return this.getNumberAttribute('slow_start_duration');
  }
  public set slowStartDuration(value: number) {
    this._slowStartDuration = value;
  }
  public resetSlowStartDuration() {
    this._slowStartDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartDurationInput() {
    return this._slowStartDuration;
  }

  // slow_start_enabled - computed: true, optional: true, required: false
  private _slowStartEnabled?: boolean | cdktf.IResolvable; 
  public get slowStartEnabled() {
    return this.getBooleanAttribute('slow_start_enabled');
  }
  public set slowStartEnabled(value: boolean | cdktf.IResolvable) {
    this._slowStartEnabled = value;
  }
  public resetSlowStartEnabled() {
    this._slowStartEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartEnabledInput() {
    return this._slowStartEnabled;
  }
}
export interface AlbServerGroupStickySessionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#cookie AlbServerGroup#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#cookie_timeout AlbServerGroup#cookie_timeout}
  */
  readonly cookieTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#sticky_session_enabled AlbServerGroup#sticky_session_enabled}
  */
  readonly stickySessionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#sticky_session_type AlbServerGroup#sticky_session_type}
  */
  readonly stickySessionType?: string;
}

export function albServerGroupStickySessionConfigToTerraform(struct?: AlbServerGroupStickySessionConfigOutputReference | AlbServerGroupStickySessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    cookie_timeout: cdktf.numberToTerraform(struct!.cookieTimeout),
    sticky_session_enabled: cdktf.booleanToTerraform(struct!.stickySessionEnabled),
    sticky_session_type: cdktf.stringToTerraform(struct!.stickySessionType),
  }
}


export function albServerGroupStickySessionConfigToHclTerraform(struct?: AlbServerGroupStickySessionConfigOutputReference | AlbServerGroupStickySessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_timeout: {
      value: cdktf.numberToHclTerraform(struct!.cookieTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sticky_session_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.stickySessionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sticky_session_type: {
      value: cdktf.stringToHclTerraform(struct!.stickySessionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbServerGroupStickySessionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbServerGroupStickySessionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._cookieTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieTimeout = this._cookieTimeout;
    }
    if (this._stickySessionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickySessionEnabled = this._stickySessionEnabled;
    }
    if (this._stickySessionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickySessionType = this._stickySessionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbServerGroupStickySessionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookie = undefined;
      this._cookieTimeout = undefined;
      this._stickySessionEnabled = undefined;
      this._stickySessionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookie = value.cookie;
      this._cookieTimeout = value.cookieTimeout;
      this._stickySessionEnabled = value.stickySessionEnabled;
      this._stickySessionType = value.stickySessionType;
    }
  }

  // cookie - computed: true, optional: true, required: false
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

  // cookie_timeout - computed: true, optional: true, required: false
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

  // sticky_session_enabled - computed: false, optional: true, required: false
  private _stickySessionEnabled?: boolean | cdktf.IResolvable; 
  public get stickySessionEnabled() {
    return this.getBooleanAttribute('sticky_session_enabled');
  }
  public set stickySessionEnabled(value: boolean | cdktf.IResolvable) {
    this._stickySessionEnabled = value;
  }
  public resetStickySessionEnabled() {
    this._stickySessionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionEnabledInput() {
    return this._stickySessionEnabled;
  }

  // sticky_session_type - computed: true, optional: true, required: false
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
}
export interface AlbServerGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#create AlbServerGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#delete AlbServerGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#update AlbServerGroup#update}
  */
  readonly update?: string;
}

export function albServerGroupTimeoutsToTerraform(struct?: AlbServerGroupTimeouts | cdktf.IResolvable): any {
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


export function albServerGroupTimeoutsToHclTerraform(struct?: AlbServerGroupTimeouts | cdktf.IResolvable): any {
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

export class AlbServerGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlbServerGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlbServerGroupTimeouts | cdktf.IResolvable | undefined) {
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
export interface AlbServerGroupUchConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#type AlbServerGroup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#value AlbServerGroup#value}
  */
  readonly value?: string;
}

export function albServerGroupUchConfigToTerraform(struct?: AlbServerGroupUchConfigOutputReference | AlbServerGroupUchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function albServerGroupUchConfigToHclTerraform(struct?: AlbServerGroupUchConfigOutputReference | AlbServerGroupUchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbServerGroupUchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbServerGroupUchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbServerGroupUchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group alicloud_alb_server_group}
*/
export class AlbServerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alb_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlbServerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlbServerGroup to import
  * @param importFromId The id of the existing AlbServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlbServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alb_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_server_group alicloud_alb_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AlbServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alb_server_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crossZoneEnabled = config.crossZoneEnabled;
    this._dryRun = config.dryRun;
    this._healthCheckTemplateId = config.healthCheckTemplateId;
    this._id = config.id;
    this._ipv6Enabled = config.ipv6Enabled;
    this._protocol = config.protocol;
    this._resourceGroupId = config.resourceGroupId;
    this._scheduler = config.scheduler;
    this._serverGroupName = config.serverGroupName;
    this._serverGroupType = config.serverGroupType;
    this._serviceName = config.serviceName;
    this._tags = config.tags;
    this._upstreamKeepaliveEnabled = config.upstreamKeepaliveEnabled;
    this._vpcId = config.vpcId;
    this._connectionDrainConfig.internalValue = config.connectionDrainConfig;
    this._healthCheckConfig.internalValue = config.healthCheckConfig;
    this._servers.internalValue = config.servers;
    this._slowStartConfig.internalValue = config.slowStartConfig;
    this._stickySessionConfig.internalValue = config.stickySessionConfig;
    this._timeouts.internalValue = config.timeouts;
    this._uchConfig.internalValue = config.uchConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cross_zone_enabled - computed: true, optional: true, required: false
  private _crossZoneEnabled?: boolean | cdktf.IResolvable; 
  public get crossZoneEnabled() {
    return this.getBooleanAttribute('cross_zone_enabled');
  }
  public set crossZoneEnabled(value: boolean | cdktf.IResolvable) {
    this._crossZoneEnabled = value;
  }
  public resetCrossZoneEnabled() {
    this._crossZoneEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossZoneEnabledInput() {
    return this._crossZoneEnabled;
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

  // health_check_template_id - computed: false, optional: true, required: false
  private _healthCheckTemplateId?: string; 
  public get healthCheckTemplateId() {
    return this.getStringAttribute('health_check_template_id');
  }
  public set healthCheckTemplateId(value: string) {
    this._healthCheckTemplateId = value;
  }
  public resetHealthCheckTemplateId() {
    this._healthCheckTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTemplateIdInput() {
    return this._healthCheckTemplateId;
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

  // ipv6_enabled - computed: false, optional: true, required: false
  private _ipv6Enabled?: boolean | cdktf.IResolvable; 
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }
  public set ipv6Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv6Enabled = value;
  }
  public resetIpv6Enabled() {
    this._ipv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnabledInput() {
    return this._ipv6Enabled;
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

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
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

  // upstream_keepalive_enabled - computed: false, optional: true, required: false
  private _upstreamKeepaliveEnabled?: boolean | cdktf.IResolvable; 
  public get upstreamKeepaliveEnabled() {
    return this.getBooleanAttribute('upstream_keepalive_enabled');
  }
  public set upstreamKeepaliveEnabled(value: boolean | cdktf.IResolvable) {
    this._upstreamKeepaliveEnabled = value;
  }
  public resetUpstreamKeepaliveEnabled() {
    this._upstreamKeepaliveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamKeepaliveEnabledInput() {
    return this._upstreamKeepaliveEnabled;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // connection_drain_config - computed: false, optional: true, required: false
  private _connectionDrainConfig = new AlbServerGroupConnectionDrainConfigOutputReference(this, "connection_drain_config");
  public get connectionDrainConfig() {
    return this._connectionDrainConfig;
  }
  public putConnectionDrainConfig(value: AlbServerGroupConnectionDrainConfig) {
    this._connectionDrainConfig.internalValue = value;
  }
  public resetConnectionDrainConfig() {
    this._connectionDrainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainConfigInput() {
    return this._connectionDrainConfig.internalValue;
  }

  // health_check_config - computed: false, optional: false, required: true
  private _healthCheckConfig = new AlbServerGroupHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public putHealthCheckConfig(value: AlbServerGroupHealthCheckConfig) {
    this._healthCheckConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new AlbServerGroupServersList(this, "servers", true);
  public get servers() {
    return this._servers;
  }
  public putServers(value: AlbServerGroupServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // slow_start_config - computed: false, optional: true, required: false
  private _slowStartConfig = new AlbServerGroupSlowStartConfigOutputReference(this, "slow_start_config");
  public get slowStartConfig() {
    return this._slowStartConfig;
  }
  public putSlowStartConfig(value: AlbServerGroupSlowStartConfig) {
    this._slowStartConfig.internalValue = value;
  }
  public resetSlowStartConfig() {
    this._slowStartConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartConfigInput() {
    return this._slowStartConfig.internalValue;
  }

  // sticky_session_config - computed: false, optional: true, required: false
  private _stickySessionConfig = new AlbServerGroupStickySessionConfigOutputReference(this, "sticky_session_config");
  public get stickySessionConfig() {
    return this._stickySessionConfig;
  }
  public putStickySessionConfig(value: AlbServerGroupStickySessionConfig) {
    this._stickySessionConfig.internalValue = value;
  }
  public resetStickySessionConfig() {
    this._stickySessionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionConfigInput() {
    return this._stickySessionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbServerGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbServerGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // uch_config - computed: false, optional: true, required: false
  private _uchConfig = new AlbServerGroupUchConfigOutputReference(this, "uch_config");
  public get uchConfig() {
    return this._uchConfig;
  }
  public putUchConfig(value: AlbServerGroupUchConfig) {
    this._uchConfig.internalValue = value;
  }
  public resetUchConfig() {
    this._uchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uchConfigInput() {
    return this._uchConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cross_zone_enabled: cdktf.booleanToTerraform(this._crossZoneEnabled),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      health_check_template_id: cdktf.stringToTerraform(this._healthCheckTemplateId),
      id: cdktf.stringToTerraform(this._id),
      ipv6_enabled: cdktf.booleanToTerraform(this._ipv6Enabled),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      server_group_name: cdktf.stringToTerraform(this._serverGroupName),
      server_group_type: cdktf.stringToTerraform(this._serverGroupType),
      service_name: cdktf.stringToTerraform(this._serviceName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upstream_keepalive_enabled: cdktf.booleanToTerraform(this._upstreamKeepaliveEnabled),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      connection_drain_config: albServerGroupConnectionDrainConfigToTerraform(this._connectionDrainConfig.internalValue),
      health_check_config: albServerGroupHealthCheckConfigToTerraform(this._healthCheckConfig.internalValue),
      servers: cdktf.listMapper(albServerGroupServersToTerraform, true)(this._servers.internalValue),
      slow_start_config: albServerGroupSlowStartConfigToTerraform(this._slowStartConfig.internalValue),
      sticky_session_config: albServerGroupStickySessionConfigToTerraform(this._stickySessionConfig.internalValue),
      timeouts: albServerGroupTimeoutsToTerraform(this._timeouts.internalValue),
      uch_config: albServerGroupUchConfigToTerraform(this._uchConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cross_zone_enabled: {
        value: cdktf.booleanToHclTerraform(this._crossZoneEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_template_id: {
        value: cdktf.stringToHclTerraform(this._healthCheckTemplateId),
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
      ipv6_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enabled),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
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
      upstream_keepalive_enabled: {
        value: cdktf.booleanToHclTerraform(this._upstreamKeepaliveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_drain_config: {
        value: albServerGroupConnectionDrainConfigToHclTerraform(this._connectionDrainConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbServerGroupConnectionDrainConfigList",
      },
      health_check_config: {
        value: albServerGroupHealthCheckConfigToHclTerraform(this._healthCheckConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbServerGroupHealthCheckConfigList",
      },
      servers: {
        value: cdktf.listMapperHcl(albServerGroupServersToHclTerraform, true)(this._servers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbServerGroupServersList",
      },
      slow_start_config: {
        value: albServerGroupSlowStartConfigToHclTerraform(this._slowStartConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbServerGroupSlowStartConfigList",
      },
      sticky_session_config: {
        value: albServerGroupStickySessionConfigToHclTerraform(this._stickySessionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbServerGroupStickySessionConfigList",
      },
      timeouts: {
        value: albServerGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlbServerGroupTimeouts",
      },
      uch_config: {
        value: albServerGroupUchConfigToHclTerraform(this._uchConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbServerGroupUchConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
