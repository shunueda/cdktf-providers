// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyslogDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#description SyslogDestination#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#id SyslogDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * pce_scope for destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#pce_scope SyslogDestination#pce_scope}
  */
  readonly pceScope: string[];
  /**
  * Destination type. Allowed values are "local_syslog" and "remote_syslog"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#type SyslogDestination#type}
  */
  readonly type: string;
  /**
  * audit_event_logger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#audit_event_logger SyslogDestination#audit_event_logger}
  */
  readonly auditEventLogger: SyslogDestinationAuditEventLogger;
  /**
  * node_status_logger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#node_status_logger SyslogDestination#node_status_logger}
  */
  readonly nodeStatusLogger: SyslogDestinationNodeStatusLogger;
  /**
  * remote_syslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#remote_syslog SyslogDestination#remote_syslog}
  */
  readonly remoteSyslog?: SyslogDestinationRemoteSyslog;
  /**
  * traffic_event_logger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#traffic_event_logger SyslogDestination#traffic_event_logger}
  */
  readonly trafficEventLogger: SyslogDestinationTrafficEventLogger;
}
export interface SyslogDestinationAuditEventLogger {
  /**
  * Configuration (Northbound) auditable events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#configuration_event_included SyslogDestination#configuration_event_included}
  */
  readonly configurationEventIncluded: boolean | cdktf.IResolvable;
  /**
  * Minimum severity level of audit event messages. Allowed values are "error", "warning" and "informational"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#min_severity SyslogDestination#min_severity}
  */
  readonly minSeverity: string;
  /**
  * System (PCE) auditable events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#system_event_included SyslogDestination#system_event_included}
  */
  readonly systemEventIncluded: boolean | cdktf.IResolvable;
}

export function syslogDestinationAuditEventLoggerToTerraform(struct?: SyslogDestinationAuditEventLoggerOutputReference | SyslogDestinationAuditEventLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_event_included: cdktf.booleanToTerraform(struct!.configurationEventIncluded),
    min_severity: cdktf.stringToTerraform(struct!.minSeverity),
    system_event_included: cdktf.booleanToTerraform(struct!.systemEventIncluded),
  }
}


export function syslogDestinationAuditEventLoggerToHclTerraform(struct?: SyslogDestinationAuditEventLoggerOutputReference | SyslogDestinationAuditEventLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_event_included: {
      value: cdktf.booleanToHclTerraform(struct!.configurationEventIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_severity: {
      value: cdktf.stringToHclTerraform(struct!.minSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_event_included: {
      value: cdktf.booleanToHclTerraform(struct!.systemEventIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyslogDestinationAuditEventLoggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyslogDestinationAuditEventLogger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationEventIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationEventIncluded = this._configurationEventIncluded;
    }
    if (this._minSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSeverity = this._minSeverity;
    }
    if (this._systemEventIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemEventIncluded = this._systemEventIncluded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyslogDestinationAuditEventLogger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationEventIncluded = undefined;
      this._minSeverity = undefined;
      this._systemEventIncluded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationEventIncluded = value.configurationEventIncluded;
      this._minSeverity = value.minSeverity;
      this._systemEventIncluded = value.systemEventIncluded;
    }
  }

  // configuration_event_included - computed: false, optional: false, required: true
  private _configurationEventIncluded?: boolean | cdktf.IResolvable; 
  public get configurationEventIncluded() {
    return this.getBooleanAttribute('configuration_event_included');
  }
  public set configurationEventIncluded(value: boolean | cdktf.IResolvable) {
    this._configurationEventIncluded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationEventIncludedInput() {
    return this._configurationEventIncluded;
  }

  // min_severity - computed: false, optional: false, required: true
  private _minSeverity?: string; 
  public get minSeverity() {
    return this.getStringAttribute('min_severity');
  }
  public set minSeverity(value: string) {
    this._minSeverity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSeverityInput() {
    return this._minSeverity;
  }

  // system_event_included - computed: false, optional: false, required: true
  private _systemEventIncluded?: boolean | cdktf.IResolvable; 
  public get systemEventIncluded() {
    return this.getBooleanAttribute('system_event_included');
  }
  public set systemEventIncluded(value: boolean | cdktf.IResolvable) {
    this._systemEventIncluded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemEventIncludedInput() {
    return this._systemEventIncluded;
  }
}
export interface SyslogDestinationNodeStatusLogger {
  /**
  * Syslog messages regarding status of the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#node_status_included SyslogDestination#node_status_included}
  */
  readonly nodeStatusIncluded: boolean | cdktf.IResolvable;
}

export function syslogDestinationNodeStatusLoggerToTerraform(struct?: SyslogDestinationNodeStatusLoggerOutputReference | SyslogDestinationNodeStatusLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_status_included: cdktf.booleanToTerraform(struct!.nodeStatusIncluded),
  }
}


export function syslogDestinationNodeStatusLoggerToHclTerraform(struct?: SyslogDestinationNodeStatusLoggerOutputReference | SyslogDestinationNodeStatusLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_status_included: {
      value: cdktf.booleanToHclTerraform(struct!.nodeStatusIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyslogDestinationNodeStatusLoggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyslogDestinationNodeStatusLogger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeStatusIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStatusIncluded = this._nodeStatusIncluded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyslogDestinationNodeStatusLogger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeStatusIncluded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeStatusIncluded = value.nodeStatusIncluded;
    }
  }

  // node_status_included - computed: false, optional: false, required: true
  private _nodeStatusIncluded?: boolean | cdktf.IResolvable; 
  public get nodeStatusIncluded() {
    return this.getBooleanAttribute('node_status_included');
  }
  public set nodeStatusIncluded(value: boolean | cdktf.IResolvable) {
    this._nodeStatusIncluded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStatusIncludedInput() {
    return this._nodeStatusIncluded;
  }
}
export interface SyslogDestinationRemoteSyslog {
  /**
  * The remote syslog IP or DNS address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#address SyslogDestination#address}
  */
  readonly address: string;
  /**
  * The remote syslog port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#port SyslogDestination#port}
  */
  readonly port: number;
  /**
  * The protocol for streaming syslog messages. Allowed values are 6 and 17
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#protocol SyslogDestination#protocol}
  */
  readonly protocol: number;
  /**
  * Trustee CA bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#tls_ca_bundle SyslogDestination#tls_ca_bundle}
  */
  readonly tlsCaBundle?: string;
  /**
  * To enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#tls_enabled SyslogDestination#tls_enabled}
  */
  readonly tlsEnabled: boolean | cdktf.IResolvable;
  /**
  * Perform TLS verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#tls_verify_cert SyslogDestination#tls_verify_cert}
  */
  readonly tlsVerifyCert: boolean | cdktf.IResolvable;
}

export function syslogDestinationRemoteSyslogToTerraform(struct?: SyslogDestinationRemoteSyslogOutputReference | SyslogDestinationRemoteSyslog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    tls_ca_bundle: cdktf.stringToTerraform(struct!.tlsCaBundle),
    tls_enabled: cdktf.booleanToTerraform(struct!.tlsEnabled),
    tls_verify_cert: cdktf.booleanToTerraform(struct!.tlsVerifyCert),
  }
}


export function syslogDestinationRemoteSyslogToHclTerraform(struct?: SyslogDestinationRemoteSyslogOutputReference | SyslogDestinationRemoteSyslog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_verify_cert: {
      value: cdktf.booleanToHclTerraform(struct!.tlsVerifyCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyslogDestinationRemoteSyslogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyslogDestinationRemoteSyslog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._tlsCaBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaBundle = this._tlsCaBundle;
    }
    if (this._tlsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEnabled = this._tlsEnabled;
    }
    if (this._tlsVerifyCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerifyCert = this._tlsVerifyCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyslogDestinationRemoteSyslog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._tlsCaBundle = undefined;
      this._tlsEnabled = undefined;
      this._tlsVerifyCert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._port = value.port;
      this._protocol = value.protocol;
      this._tlsCaBundle = value.tlsCaBundle;
      this._tlsEnabled = value.tlsEnabled;
      this._tlsVerifyCert = value.tlsVerifyCert;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tls_ca_bundle - computed: false, optional: true, required: false
  private _tlsCaBundle?: string; 
  public get tlsCaBundle() {
    return this.getStringAttribute('tls_ca_bundle');
  }
  public set tlsCaBundle(value: string) {
    this._tlsCaBundle = value;
  }
  public resetTlsCaBundle() {
    this._tlsCaBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaBundleInput() {
    return this._tlsCaBundle;
  }

  // tls_enabled - computed: false, optional: false, required: true
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // tls_verify_cert - computed: false, optional: false, required: true
  private _tlsVerifyCert?: boolean | cdktf.IResolvable; 
  public get tlsVerifyCert() {
    return this.getBooleanAttribute('tls_verify_cert');
  }
  public set tlsVerifyCert(value: boolean | cdktf.IResolvable) {
    this._tlsVerifyCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyCertInput() {
    return this._tlsVerifyCert;
  }
}
export interface SyslogDestinationTrafficEventLogger {
  /**
  * Set to enable traffic flow events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#traffic_flow_allowed_event_included SyslogDestination#traffic_flow_allowed_event_included}
  */
  readonly trafficFlowAllowedEventIncluded: boolean | cdktf.IResolvable;
  /**
  * Set to enable traffic flow events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#traffic_flow_blocked_event_included SyslogDestination#traffic_flow_blocked_event_included}
  */
  readonly trafficFlowBlockedEventIncluded: boolean | cdktf.IResolvable;
  /**
  * Set to enable traffic flow events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#traffic_flow_potentially_blocked_event_included SyslogDestination#traffic_flow_potentially_blocked_event_included}
  */
  readonly trafficFlowPotentiallyBlockedEventIncluded: boolean | cdktf.IResolvable;
}

export function syslogDestinationTrafficEventLoggerToTerraform(struct?: SyslogDestinationTrafficEventLoggerOutputReference | SyslogDestinationTrafficEventLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traffic_flow_allowed_event_included: cdktf.booleanToTerraform(struct!.trafficFlowAllowedEventIncluded),
    traffic_flow_blocked_event_included: cdktf.booleanToTerraform(struct!.trafficFlowBlockedEventIncluded),
    traffic_flow_potentially_blocked_event_included: cdktf.booleanToTerraform(struct!.trafficFlowPotentiallyBlockedEventIncluded),
  }
}


export function syslogDestinationTrafficEventLoggerToHclTerraform(struct?: SyslogDestinationTrafficEventLoggerOutputReference | SyslogDestinationTrafficEventLogger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traffic_flow_allowed_event_included: {
      value: cdktf.booleanToHclTerraform(struct!.trafficFlowAllowedEventIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traffic_flow_blocked_event_included: {
      value: cdktf.booleanToHclTerraform(struct!.trafficFlowBlockedEventIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traffic_flow_potentially_blocked_event_included: {
      value: cdktf.booleanToHclTerraform(struct!.trafficFlowPotentiallyBlockedEventIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyslogDestinationTrafficEventLoggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyslogDestinationTrafficEventLogger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficFlowAllowedEventIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficFlowAllowedEventIncluded = this._trafficFlowAllowedEventIncluded;
    }
    if (this._trafficFlowBlockedEventIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficFlowBlockedEventIncluded = this._trafficFlowBlockedEventIncluded;
    }
    if (this._trafficFlowPotentiallyBlockedEventIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficFlowPotentiallyBlockedEventIncluded = this._trafficFlowPotentiallyBlockedEventIncluded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyslogDestinationTrafficEventLogger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trafficFlowAllowedEventIncluded = undefined;
      this._trafficFlowBlockedEventIncluded = undefined;
      this._trafficFlowPotentiallyBlockedEventIncluded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trafficFlowAllowedEventIncluded = value.trafficFlowAllowedEventIncluded;
      this._trafficFlowBlockedEventIncluded = value.trafficFlowBlockedEventIncluded;
      this._trafficFlowPotentiallyBlockedEventIncluded = value.trafficFlowPotentiallyBlockedEventIncluded;
    }
  }

  // traffic_flow_allowed_event_included - computed: false, optional: false, required: true
  private _trafficFlowAllowedEventIncluded?: boolean | cdktf.IResolvable; 
  public get trafficFlowAllowedEventIncluded() {
    return this.getBooleanAttribute('traffic_flow_allowed_event_included');
  }
  public set trafficFlowAllowedEventIncluded(value: boolean | cdktf.IResolvable) {
    this._trafficFlowAllowedEventIncluded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFlowAllowedEventIncludedInput() {
    return this._trafficFlowAllowedEventIncluded;
  }

  // traffic_flow_blocked_event_included - computed: false, optional: false, required: true
  private _trafficFlowBlockedEventIncluded?: boolean | cdktf.IResolvable; 
  public get trafficFlowBlockedEventIncluded() {
    return this.getBooleanAttribute('traffic_flow_blocked_event_included');
  }
  public set trafficFlowBlockedEventIncluded(value: boolean | cdktf.IResolvable) {
    this._trafficFlowBlockedEventIncluded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFlowBlockedEventIncludedInput() {
    return this._trafficFlowBlockedEventIncluded;
  }

  // traffic_flow_potentially_blocked_event_included - computed: false, optional: false, required: true
  private _trafficFlowPotentiallyBlockedEventIncluded?: boolean | cdktf.IResolvable; 
  public get trafficFlowPotentiallyBlockedEventIncluded() {
    return this.getBooleanAttribute('traffic_flow_potentially_blocked_event_included');
  }
  public set trafficFlowPotentiallyBlockedEventIncluded(value: boolean | cdktf.IResolvable) {
    this._trafficFlowPotentiallyBlockedEventIncluded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFlowPotentiallyBlockedEventIncludedInput() {
    return this._trafficFlowPotentiallyBlockedEventIncluded;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination illumio-core_syslog_destination}
*/
export class SyslogDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_syslog_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyslogDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyslogDestination to import
  * @param importFromId The id of the existing SyslogDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyslogDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_syslog_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/syslog_destination illumio-core_syslog_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyslogDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: SyslogDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_syslog_destination',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._pceScope = config.pceScope;
    this._type = config.type;
    this._auditEventLogger.internalValue = config.auditEventLogger;
    this._nodeStatusLogger.internalValue = config.nodeStatusLogger;
    this._remoteSyslog.internalValue = config.remoteSyslog;
    this._trafficEventLogger.internalValue = config.trafficEventLogger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // pce_scope - computed: false, optional: false, required: true
  private _pceScope?: string[]; 
  public get pceScope() {
    return cdktf.Fn.tolist(this.getListAttribute('pce_scope'));
  }
  public set pceScope(value: string[]) {
    this._pceScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pceScopeInput() {
    return this._pceScope;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // audit_event_logger - computed: false, optional: false, required: true
  private _auditEventLogger = new SyslogDestinationAuditEventLoggerOutputReference(this, "audit_event_logger");
  public get auditEventLogger() {
    return this._auditEventLogger;
  }
  public putAuditEventLogger(value: SyslogDestinationAuditEventLogger) {
    this._auditEventLogger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditEventLoggerInput() {
    return this._auditEventLogger.internalValue;
  }

  // node_status_logger - computed: false, optional: false, required: true
  private _nodeStatusLogger = new SyslogDestinationNodeStatusLoggerOutputReference(this, "node_status_logger");
  public get nodeStatusLogger() {
    return this._nodeStatusLogger;
  }
  public putNodeStatusLogger(value: SyslogDestinationNodeStatusLogger) {
    this._nodeStatusLogger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStatusLoggerInput() {
    return this._nodeStatusLogger.internalValue;
  }

  // remote_syslog - computed: false, optional: true, required: false
  private _remoteSyslog = new SyslogDestinationRemoteSyslogOutputReference(this, "remote_syslog");
  public get remoteSyslog() {
    return this._remoteSyslog;
  }
  public putRemoteSyslog(value: SyslogDestinationRemoteSyslog) {
    this._remoteSyslog.internalValue = value;
  }
  public resetRemoteSyslog() {
    this._remoteSyslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSyslogInput() {
    return this._remoteSyslog.internalValue;
  }

  // traffic_event_logger - computed: false, optional: false, required: true
  private _trafficEventLogger = new SyslogDestinationTrafficEventLoggerOutputReference(this, "traffic_event_logger");
  public get trafficEventLogger() {
    return this._trafficEventLogger;
  }
  public putTrafficEventLogger(value: SyslogDestinationTrafficEventLogger) {
    this._trafficEventLogger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficEventLoggerInput() {
    return this._trafficEventLogger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      pce_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pceScope),
      type: cdktf.stringToTerraform(this._type),
      audit_event_logger: syslogDestinationAuditEventLoggerToTerraform(this._auditEventLogger.internalValue),
      node_status_logger: syslogDestinationNodeStatusLoggerToTerraform(this._nodeStatusLogger.internalValue),
      remote_syslog: syslogDestinationRemoteSyslogToTerraform(this._remoteSyslog.internalValue),
      traffic_event_logger: syslogDestinationTrafficEventLoggerToTerraform(this._trafficEventLogger.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      pce_scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pceScope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_event_logger: {
        value: syslogDestinationAuditEventLoggerToHclTerraform(this._auditEventLogger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyslogDestinationAuditEventLoggerList",
      },
      node_status_logger: {
        value: syslogDestinationNodeStatusLoggerToHclTerraform(this._nodeStatusLogger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyslogDestinationNodeStatusLoggerList",
      },
      remote_syslog: {
        value: syslogDestinationRemoteSyslogToHclTerraform(this._remoteSyslog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyslogDestinationRemoteSyslogList",
      },
      traffic_event_logger: {
        value: syslogDestinationTrafficEventLoggerToHclTerraform(this._trafficEventLogger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyslogDestinationTrafficEventLoggerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
