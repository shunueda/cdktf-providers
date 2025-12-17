// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Logging severity level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#buffered_severity Logging#buffered_severity}
  */
  readonly bufferedSeverity?: string;
  /**
  * DEPRECATED. Logging severity level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#buffered_severity_legacy Logging#buffered_severity_legacy}
  */
  readonly bufferedSeverityLegacy?: string;
  /**
  * Logging buffer size
  *   - Range: `4096`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#buffered_size Logging#buffered_size}
  */
  readonly bufferedSize?: number;
  /**
  * DEPRECATED. Logging buffer size
  *   - Range: `4096`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#buffered_size_legacy Logging#buffered_size_legacy}
  */
  readonly bufferedSizeLegacy?: number;
  /**
  * Set console logging parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#console Logging#console}
  */
  readonly console?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#console_severity Logging#console_severity}
  */
  readonly consoleSeverity?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#device Logging#device}
  */
  readonly device?: string;
  /**
  * Facility parameter for syslog messages
  *   - Choices: `auth`, `cron`, `daemon`, `kern`, `local0`, `local1`, `local2`, `local3`, `local4`, `local5`, `local6`, `local7`, `lpr`, `mail`, `news`, `sys10`, `sys11`, `sys12`, `sys13`, `sys14`, `sys9`, `syslog`, `user`, `uucp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#facility Logging#facility}
  */
  readonly facility?: string;
  /**
  * 
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#file_max_size Logging#file_max_size}
  */
  readonly fileMaxSize?: number;
  /**
  * 
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#file_min_size Logging#file_min_size}
  */
  readonly fileMinSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#file_name Logging#file_name}
  */
  readonly fileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#file_severity Logging#file_severity}
  */
  readonly fileSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#history_severity Logging#history_severity}
  */
  readonly historySeverity?: string;
  /**
  * Set history table size
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#history_size Logging#history_size}
  */
  readonly historySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv4_hosts Logging#ipv4_hosts}
  */
  readonly ipv4Hosts?: LoggingIpv4Hosts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv4_hosts_transport Logging#ipv4_hosts_transport}
  */
  readonly ipv4HostsTransport?: LoggingIpv4HostsTransport[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv4_vrf_hosts Logging#ipv4_vrf_hosts}
  */
  readonly ipv4VrfHosts?: LoggingIpv4VrfHosts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv4_vrf_hosts_transport Logging#ipv4_vrf_hosts_transport}
  */
  readonly ipv4VrfHostsTransport?: LoggingIpv4VrfHostsTransport[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv6_hosts Logging#ipv6_hosts}
  */
  readonly ipv6Hosts?: LoggingIpv6Hosts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv6_hosts_transport Logging#ipv6_hosts_transport}
  */
  readonly ipv6HostsTransport?: LoggingIpv6HostsTransport[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv6_vrf_hosts Logging#ipv6_vrf_hosts}
  */
  readonly ipv6VrfHosts?: LoggingIpv6VrfHosts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv6_vrf_hosts_transport Logging#ipv6_vrf_hosts_transport}
  */
  readonly ipv6VrfHostsTransport?: LoggingIpv6VrfHostsTransport[] | cdktf.IResolvable;
  /**
  * Count every log message and timestamp last occurrence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#logging_count Logging#logging_count}
  */
  readonly loggingCount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#monitor_severity Logging#monitor_severity}
  */
  readonly monitorSeverity?: string;
  /**
  * Define a unique text string as ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#origin_id_name Logging#origin_id_name}
  */
  readonly originIdName?: string;
  /**
  * Use origin hostname/ip/ipv6 as ID
  *   - Choices: `hostname`, `ip`, `ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#origin_id_type Logging#origin_id_type}
  */
  readonly originIdType?: string;
  /**
  * Batch size for writing to persistent storage
  *   - Range: `4096`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#persistent_batch Logging#persistent_batch}
  */
  readonly persistentBatch?: number;
  /**
  * Set size of individual log files
  *   - Range: `8192`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#persistent_filesize Logging#persistent_filesize}
  */
  readonly persistentFilesize?: number;
  /**
  * Write log entry to storage immediately (no buffering).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#persistent_immediate Logging#persistent_immediate}
  */
  readonly persistentImmediate?: boolean | cdktf.IResolvable;
  /**
  * Notify when show logging [persistent] is activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#persistent_notify Logging#persistent_notify}
  */
  readonly persistentNotify?: boolean | cdktf.IResolvable;
  /**
  * Eliminates manipulation on logging-persistent files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#persistent_protected Logging#persistent_protected}
  */
  readonly persistentProtected?: boolean | cdktf.IResolvable;
  /**
  * Set disk space for writing log messages
  *   - Range: `16384`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#persistent_size Logging#persistent_size}
  */
  readonly persistentSize?: number;
  /**
  * Setting threshold capacity. When setting circular logging is disabled
  *   - Range: `1`-`99`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#persistent_threshold Logging#persistent_threshold}
  */
  readonly persistentThreshold?: number;
  /**
  * URL to store logging messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#persistent_url Logging#persistent_url}
  */
  readonly persistentUrl?: string;
  /**
  * Messages per second
  *   - Range: `1`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#rate_limit_all Logging#rate_limit_all}
  */
  readonly rateLimitAll?: number;
  /**
  * Logging severity level
  *   - Choices: `alerts`, `critical`, `debugging`, `emergencies`, `errors`, `informational`, `notifications`, `warnings`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#rate_limit_all_except_severity Logging#rate_limit_all_except_severity}
  */
  readonly rateLimitAllExceptSeverity?: string;
  /**
  * Messages per second
  *   - Range: `1`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#rate_limit_console Logging#rate_limit_console}
  */
  readonly rateLimitConsole?: number;
  /**
  * Messages per second
  *   - Range: `1`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#rate_limit_console_all Logging#rate_limit_console_all}
  */
  readonly rateLimitConsoleAll?: number;
  /**
  * Logging severity level
  *   - Choices: `alerts`, `critical`, `debugging`, `emergencies`, `errors`, `informational`, `notifications`, `warnings`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#rate_limit_console_all_except_severity Logging#rate_limit_console_all_except_severity}
  */
  readonly rateLimitConsoleAllExceptSeverity?: string;
  /**
  * Logging severity level
  *   - Choices: `alerts`, `critical`, `debugging`, `emergencies`, `errors`, `informational`, `notifications`, `warnings`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#rate_limit_console_except_severity Logging#rate_limit_console_except_severity}
  */
  readonly rateLimitConsoleExceptSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#source_interface Logging#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Specify interface and vrf for source address in logging transactions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#source_interfaces_vrf Logging#source_interfaces_vrf}
  */
  readonly sourceInterfacesVrf?: LoggingSourceInterfacesVrf[] | cdktf.IResolvable;
  /**
  * Set trap server logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#trap Logging#trap}
  */
  readonly trap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#trap_severity Logging#trap_severity}
  */
  readonly trapSeverity?: string;
}
export interface LoggingIpv4Hosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv4_host Logging#ipv4_host}
  */
  readonly ipv4Host: string;
}

export function loggingIpv4HostsToTerraform(struct?: LoggingIpv4Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_host: cdktf.stringToTerraform(struct!.ipv4Host),
  }
}


export function loggingIpv4HostsToHclTerraform(struct?: LoggingIpv4Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv4HostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv4Hosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Host = this._ipv4Host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv4Hosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Host = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Host = value.ipv4Host;
    }
  }

  // ipv4_host - computed: false, optional: false, required: true
  private _ipv4Host?: string; 
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }
  public set ipv4Host(value: string) {
    this._ipv4Host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HostInput() {
    return this._ipv4Host;
  }
}

export class LoggingIpv4HostsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv4Hosts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv4HostsOutputReference {
    return new LoggingIpv4HostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv4HostsTransportTransportTcpPorts {
  /**
  * Specify the TCP port number (default=601)
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
}

export function loggingIpv4HostsTransportTransportTcpPortsToTerraform(struct?: LoggingIpv4HostsTransportTransportTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
  }
}


export function loggingIpv4HostsTransportTransportTcpPortsToHclTerraform(struct?: LoggingIpv4HostsTransportTransportTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv4HostsTransportTransportTcpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv4HostsTransportTransportTcpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv4HostsTransportTransportTcpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }
}

export class LoggingIpv4HostsTransportTransportTcpPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv4HostsTransportTransportTcpPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv4HostsTransportTransportTcpPortsOutputReference {
    return new LoggingIpv4HostsTransportTransportTcpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv4HostsTransportTransportTlsPorts {
  /**
  * Specify the TLS port number (default=6514)
  *   - Range: `1025`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
  /**
  * Specify the TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#profile Logging#profile}
  */
  readonly profile?: string;
}

export function loggingIpv4HostsTransportTransportTlsPortsToTerraform(struct?: LoggingIpv4HostsTransportTransportTlsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function loggingIpv4HostsTransportTransportTlsPortsToHclTerraform(struct?: LoggingIpv4HostsTransportTransportTlsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv4HostsTransportTransportTlsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv4HostsTransportTransportTlsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv4HostsTransportTransportTlsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
      this._profile = value.profile;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

export class LoggingIpv4HostsTransportTransportTlsPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv4HostsTransportTransportTlsPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv4HostsTransportTransportTlsPortsOutputReference {
    return new LoggingIpv4HostsTransportTransportTlsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv4HostsTransportTransportUdpPorts {
  /**
  * Specify the UDP port number (default=514)
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
}

export function loggingIpv4HostsTransportTransportUdpPortsToTerraform(struct?: LoggingIpv4HostsTransportTransportUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
  }
}


export function loggingIpv4HostsTransportTransportUdpPortsToHclTerraform(struct?: LoggingIpv4HostsTransportTransportUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv4HostsTransportTransportUdpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv4HostsTransportTransportUdpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv4HostsTransportTransportUdpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }
}

export class LoggingIpv4HostsTransportTransportUdpPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv4HostsTransportTransportUdpPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv4HostsTransportTransportUdpPortsOutputReference {
    return new LoggingIpv4HostsTransportTransportUdpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv4HostsTransport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv4_host Logging#ipv4_host}
  */
  readonly ipv4Host: string;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_tcp_ports Logging#transport_tcp_ports}
  */
  readonly transportTcpPorts?: LoggingIpv4HostsTransportTransportTcpPorts[] | cdktf.IResolvable;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_tls_ports Logging#transport_tls_ports}
  */
  readonly transportTlsPorts?: LoggingIpv4HostsTransportTransportTlsPorts[] | cdktf.IResolvable;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_udp_ports Logging#transport_udp_ports}
  */
  readonly transportUdpPorts?: LoggingIpv4HostsTransportTransportUdpPorts[] | cdktf.IResolvable;
}

export function loggingIpv4HostsTransportToTerraform(struct?: LoggingIpv4HostsTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_host: cdktf.stringToTerraform(struct!.ipv4Host),
    transport_tcp_ports: cdktf.listMapper(loggingIpv4HostsTransportTransportTcpPortsToTerraform, false)(struct!.transportTcpPorts),
    transport_tls_ports: cdktf.listMapper(loggingIpv4HostsTransportTransportTlsPortsToTerraform, false)(struct!.transportTlsPorts),
    transport_udp_ports: cdktf.listMapper(loggingIpv4HostsTransportTransportUdpPortsToTerraform, false)(struct!.transportUdpPorts),
  }
}


export function loggingIpv4HostsTransportToHclTerraform(struct?: LoggingIpv4HostsTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_tcp_ports: {
      value: cdktf.listMapperHcl(loggingIpv4HostsTransportTransportTcpPortsToHclTerraform, false)(struct!.transportTcpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv4HostsTransportTransportTcpPortsList",
    },
    transport_tls_ports: {
      value: cdktf.listMapperHcl(loggingIpv4HostsTransportTransportTlsPortsToHclTerraform, false)(struct!.transportTlsPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv4HostsTransportTransportTlsPortsList",
    },
    transport_udp_ports: {
      value: cdktf.listMapperHcl(loggingIpv4HostsTransportTransportUdpPortsToHclTerraform, false)(struct!.transportUdpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv4HostsTransportTransportUdpPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv4HostsTransportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv4HostsTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Host = this._ipv4Host;
    }
    if (this._transportTcpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportTcpPorts = this._transportTcpPorts?.internalValue;
    }
    if (this._transportTlsPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportTlsPorts = this._transportTlsPorts?.internalValue;
    }
    if (this._transportUdpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportUdpPorts = this._transportUdpPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv4HostsTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Host = undefined;
      this._transportTcpPorts.internalValue = undefined;
      this._transportTlsPorts.internalValue = undefined;
      this._transportUdpPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Host = value.ipv4Host;
      this._transportTcpPorts.internalValue = value.transportTcpPorts;
      this._transportTlsPorts.internalValue = value.transportTlsPorts;
      this._transportUdpPorts.internalValue = value.transportUdpPorts;
    }
  }

  // ipv4_host - computed: false, optional: false, required: true
  private _ipv4Host?: string; 
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }
  public set ipv4Host(value: string) {
    this._ipv4Host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HostInput() {
    return this._ipv4Host;
  }

  // transport_tcp_ports - computed: false, optional: true, required: false
  private _transportTcpPorts = new LoggingIpv4HostsTransportTransportTcpPortsList(this, "transport_tcp_ports", false);
  public get transportTcpPorts() {
    return this._transportTcpPorts;
  }
  public putTransportTcpPorts(value: LoggingIpv4HostsTransportTransportTcpPorts[] | cdktf.IResolvable) {
    this._transportTcpPorts.internalValue = value;
  }
  public resetTransportTcpPorts() {
    this._transportTcpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTcpPortsInput() {
    return this._transportTcpPorts.internalValue;
  }

  // transport_tls_ports - computed: false, optional: true, required: false
  private _transportTlsPorts = new LoggingIpv4HostsTransportTransportTlsPortsList(this, "transport_tls_ports", false);
  public get transportTlsPorts() {
    return this._transportTlsPorts;
  }
  public putTransportTlsPorts(value: LoggingIpv4HostsTransportTransportTlsPorts[] | cdktf.IResolvable) {
    this._transportTlsPorts.internalValue = value;
  }
  public resetTransportTlsPorts() {
    this._transportTlsPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTlsPortsInput() {
    return this._transportTlsPorts.internalValue;
  }

  // transport_udp_ports - computed: false, optional: true, required: false
  private _transportUdpPorts = new LoggingIpv4HostsTransportTransportUdpPortsList(this, "transport_udp_ports", false);
  public get transportUdpPorts() {
    return this._transportUdpPorts;
  }
  public putTransportUdpPorts(value: LoggingIpv4HostsTransportTransportUdpPorts[] | cdktf.IResolvable) {
    this._transportUdpPorts.internalValue = value;
  }
  public resetTransportUdpPorts() {
    this._transportUdpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportUdpPortsInput() {
    return this._transportUdpPorts.internalValue;
  }
}

export class LoggingIpv4HostsTransportList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv4HostsTransport[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv4HostsTransportOutputReference {
    return new LoggingIpv4HostsTransportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv4VrfHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv4_host Logging#ipv4_host}
  */
  readonly ipv4Host: string;
  /**
  * Set VRF option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#vrf Logging#vrf}
  */
  readonly vrf: string;
}

export function loggingIpv4VrfHostsToTerraform(struct?: LoggingIpv4VrfHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_host: cdktf.stringToTerraform(struct!.ipv4Host),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function loggingIpv4VrfHostsToHclTerraform(struct?: LoggingIpv4VrfHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv4VrfHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv4VrfHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Host = this._ipv4Host;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv4VrfHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Host = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Host = value.ipv4Host;
      this._vrf = value.vrf;
    }
  }

  // ipv4_host - computed: false, optional: false, required: true
  private _ipv4Host?: string; 
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }
  public set ipv4Host(value: string) {
    this._ipv4Host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HostInput() {
    return this._ipv4Host;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class LoggingIpv4VrfHostsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv4VrfHosts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv4VrfHostsOutputReference {
    return new LoggingIpv4VrfHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv4VrfHostsTransportTransportTcpPorts {
  /**
  * Specify the TCP port number (default=601)
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
}

export function loggingIpv4VrfHostsTransportTransportTcpPortsToTerraform(struct?: LoggingIpv4VrfHostsTransportTransportTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
  }
}


export function loggingIpv4VrfHostsTransportTransportTcpPortsToHclTerraform(struct?: LoggingIpv4VrfHostsTransportTransportTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv4VrfHostsTransportTransportTcpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv4VrfHostsTransportTransportTcpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv4VrfHostsTransportTransportTcpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }
}

export class LoggingIpv4VrfHostsTransportTransportTcpPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv4VrfHostsTransportTransportTcpPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv4VrfHostsTransportTransportTcpPortsOutputReference {
    return new LoggingIpv4VrfHostsTransportTransportTcpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv4VrfHostsTransportTransportTlsPorts {
  /**
  * Specify the TLS port number (default=6514)
  *   - Range: `1025`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
  /**
  * Specify the TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#profile Logging#profile}
  */
  readonly profile?: string;
}

export function loggingIpv4VrfHostsTransportTransportTlsPortsToTerraform(struct?: LoggingIpv4VrfHostsTransportTransportTlsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function loggingIpv4VrfHostsTransportTransportTlsPortsToHclTerraform(struct?: LoggingIpv4VrfHostsTransportTransportTlsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv4VrfHostsTransportTransportTlsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv4VrfHostsTransportTransportTlsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv4VrfHostsTransportTransportTlsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
      this._profile = value.profile;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

export class LoggingIpv4VrfHostsTransportTransportTlsPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv4VrfHostsTransportTransportTlsPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv4VrfHostsTransportTransportTlsPortsOutputReference {
    return new LoggingIpv4VrfHostsTransportTransportTlsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv4VrfHostsTransportTransportUdpPorts {
  /**
  * Specify the UDP port number (default=514)
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
}

export function loggingIpv4VrfHostsTransportTransportUdpPortsToTerraform(struct?: LoggingIpv4VrfHostsTransportTransportUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
  }
}


export function loggingIpv4VrfHostsTransportTransportUdpPortsToHclTerraform(struct?: LoggingIpv4VrfHostsTransportTransportUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv4VrfHostsTransportTransportUdpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv4VrfHostsTransportTransportUdpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv4VrfHostsTransportTransportUdpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }
}

export class LoggingIpv4VrfHostsTransportTransportUdpPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv4VrfHostsTransportTransportUdpPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv4VrfHostsTransportTransportUdpPortsOutputReference {
    return new LoggingIpv4VrfHostsTransportTransportUdpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv4VrfHostsTransport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv4_host Logging#ipv4_host}
  */
  readonly ipv4Host: string;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_tcp_ports Logging#transport_tcp_ports}
  */
  readonly transportTcpPorts?: LoggingIpv4VrfHostsTransportTransportTcpPorts[] | cdktf.IResolvable;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_tls_ports Logging#transport_tls_ports}
  */
  readonly transportTlsPorts?: LoggingIpv4VrfHostsTransportTransportTlsPorts[] | cdktf.IResolvable;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_udp_ports Logging#transport_udp_ports}
  */
  readonly transportUdpPorts?: LoggingIpv4VrfHostsTransportTransportUdpPorts[] | cdktf.IResolvable;
  /**
  * Set VRF option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#vrf Logging#vrf}
  */
  readonly vrf: string;
}

export function loggingIpv4VrfHostsTransportToTerraform(struct?: LoggingIpv4VrfHostsTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_host: cdktf.stringToTerraform(struct!.ipv4Host),
    transport_tcp_ports: cdktf.listMapper(loggingIpv4VrfHostsTransportTransportTcpPortsToTerraform, false)(struct!.transportTcpPorts),
    transport_tls_ports: cdktf.listMapper(loggingIpv4VrfHostsTransportTransportTlsPortsToTerraform, false)(struct!.transportTlsPorts),
    transport_udp_ports: cdktf.listMapper(loggingIpv4VrfHostsTransportTransportUdpPortsToTerraform, false)(struct!.transportUdpPorts),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function loggingIpv4VrfHostsTransportToHclTerraform(struct?: LoggingIpv4VrfHostsTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_tcp_ports: {
      value: cdktf.listMapperHcl(loggingIpv4VrfHostsTransportTransportTcpPortsToHclTerraform, false)(struct!.transportTcpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv4VrfHostsTransportTransportTcpPortsList",
    },
    transport_tls_ports: {
      value: cdktf.listMapperHcl(loggingIpv4VrfHostsTransportTransportTlsPortsToHclTerraform, false)(struct!.transportTlsPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv4VrfHostsTransportTransportTlsPortsList",
    },
    transport_udp_ports: {
      value: cdktf.listMapperHcl(loggingIpv4VrfHostsTransportTransportUdpPortsToHclTerraform, false)(struct!.transportUdpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv4VrfHostsTransportTransportUdpPortsList",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv4VrfHostsTransportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv4VrfHostsTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Host = this._ipv4Host;
    }
    if (this._transportTcpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportTcpPorts = this._transportTcpPorts?.internalValue;
    }
    if (this._transportTlsPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportTlsPorts = this._transportTlsPorts?.internalValue;
    }
    if (this._transportUdpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportUdpPorts = this._transportUdpPorts?.internalValue;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv4VrfHostsTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Host = undefined;
      this._transportTcpPorts.internalValue = undefined;
      this._transportTlsPorts.internalValue = undefined;
      this._transportUdpPorts.internalValue = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Host = value.ipv4Host;
      this._transportTcpPorts.internalValue = value.transportTcpPorts;
      this._transportTlsPorts.internalValue = value.transportTlsPorts;
      this._transportUdpPorts.internalValue = value.transportUdpPorts;
      this._vrf = value.vrf;
    }
  }

  // ipv4_host - computed: false, optional: false, required: true
  private _ipv4Host?: string; 
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }
  public set ipv4Host(value: string) {
    this._ipv4Host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HostInput() {
    return this._ipv4Host;
  }

  // transport_tcp_ports - computed: false, optional: true, required: false
  private _transportTcpPorts = new LoggingIpv4VrfHostsTransportTransportTcpPortsList(this, "transport_tcp_ports", false);
  public get transportTcpPorts() {
    return this._transportTcpPorts;
  }
  public putTransportTcpPorts(value: LoggingIpv4VrfHostsTransportTransportTcpPorts[] | cdktf.IResolvable) {
    this._transportTcpPorts.internalValue = value;
  }
  public resetTransportTcpPorts() {
    this._transportTcpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTcpPortsInput() {
    return this._transportTcpPorts.internalValue;
  }

  // transport_tls_ports - computed: false, optional: true, required: false
  private _transportTlsPorts = new LoggingIpv4VrfHostsTransportTransportTlsPortsList(this, "transport_tls_ports", false);
  public get transportTlsPorts() {
    return this._transportTlsPorts;
  }
  public putTransportTlsPorts(value: LoggingIpv4VrfHostsTransportTransportTlsPorts[] | cdktf.IResolvable) {
    this._transportTlsPorts.internalValue = value;
  }
  public resetTransportTlsPorts() {
    this._transportTlsPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTlsPortsInput() {
    return this._transportTlsPorts.internalValue;
  }

  // transport_udp_ports - computed: false, optional: true, required: false
  private _transportUdpPorts = new LoggingIpv4VrfHostsTransportTransportUdpPortsList(this, "transport_udp_ports", false);
  public get transportUdpPorts() {
    return this._transportUdpPorts;
  }
  public putTransportUdpPorts(value: LoggingIpv4VrfHostsTransportTransportUdpPorts[] | cdktf.IResolvable) {
    this._transportUdpPorts.internalValue = value;
  }
  public resetTransportUdpPorts() {
    this._transportUdpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportUdpPortsInput() {
    return this._transportUdpPorts.internalValue;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class LoggingIpv4VrfHostsTransportList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv4VrfHostsTransport[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv4VrfHostsTransportOutputReference {
    return new LoggingIpv4VrfHostsTransportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv6Hosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv6_host Logging#ipv6_host}
  */
  readonly ipv6Host: string;
}

export function loggingIpv6HostsToTerraform(struct?: LoggingIpv6Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_host: cdktf.stringToTerraform(struct!.ipv6Host),
  }
}


export function loggingIpv6HostsToHclTerraform(struct?: LoggingIpv6Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv6HostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv6Hosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Host = this._ipv6Host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv6Hosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Host = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Host = value.ipv6Host;
    }
  }

  // ipv6_host - computed: false, optional: false, required: true
  private _ipv6Host?: string; 
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }
  public set ipv6Host(value: string) {
    this._ipv6Host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostInput() {
    return this._ipv6Host;
  }
}

export class LoggingIpv6HostsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv6Hosts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv6HostsOutputReference {
    return new LoggingIpv6HostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv6HostsTransportTransportTcpPorts {
  /**
  * Specify the TCP port number (default=601)
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
}

export function loggingIpv6HostsTransportTransportTcpPortsToTerraform(struct?: LoggingIpv6HostsTransportTransportTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
  }
}


export function loggingIpv6HostsTransportTransportTcpPortsToHclTerraform(struct?: LoggingIpv6HostsTransportTransportTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv6HostsTransportTransportTcpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv6HostsTransportTransportTcpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv6HostsTransportTransportTcpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }
}

export class LoggingIpv6HostsTransportTransportTcpPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv6HostsTransportTransportTcpPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv6HostsTransportTransportTcpPortsOutputReference {
    return new LoggingIpv6HostsTransportTransportTcpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv6HostsTransportTransportTlsPorts {
  /**
  * Specify the TLS port number (default=6514)
  *   - Range: `1025`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
  /**
  * Specify the TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#profile Logging#profile}
  */
  readonly profile?: string;
}

export function loggingIpv6HostsTransportTransportTlsPortsToTerraform(struct?: LoggingIpv6HostsTransportTransportTlsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function loggingIpv6HostsTransportTransportTlsPortsToHclTerraform(struct?: LoggingIpv6HostsTransportTransportTlsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv6HostsTransportTransportTlsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv6HostsTransportTransportTlsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv6HostsTransportTransportTlsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
      this._profile = value.profile;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

export class LoggingIpv6HostsTransportTransportTlsPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv6HostsTransportTransportTlsPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv6HostsTransportTransportTlsPortsOutputReference {
    return new LoggingIpv6HostsTransportTransportTlsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv6HostsTransportTransportUdpPorts {
  /**
  * Specify the UDP port number (default=514)
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
}

export function loggingIpv6HostsTransportTransportUdpPortsToTerraform(struct?: LoggingIpv6HostsTransportTransportUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
  }
}


export function loggingIpv6HostsTransportTransportUdpPortsToHclTerraform(struct?: LoggingIpv6HostsTransportTransportUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv6HostsTransportTransportUdpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv6HostsTransportTransportUdpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv6HostsTransportTransportUdpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }
}

export class LoggingIpv6HostsTransportTransportUdpPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv6HostsTransportTransportUdpPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv6HostsTransportTransportUdpPortsOutputReference {
    return new LoggingIpv6HostsTransportTransportUdpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv6HostsTransport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv6_host Logging#ipv6_host}
  */
  readonly ipv6Host: string;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_tcp_ports Logging#transport_tcp_ports}
  */
  readonly transportTcpPorts?: LoggingIpv6HostsTransportTransportTcpPorts[] | cdktf.IResolvable;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_tls_ports Logging#transport_tls_ports}
  */
  readonly transportTlsPorts?: LoggingIpv6HostsTransportTransportTlsPorts[] | cdktf.IResolvable;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_udp_ports Logging#transport_udp_ports}
  */
  readonly transportUdpPorts?: LoggingIpv6HostsTransportTransportUdpPorts[] | cdktf.IResolvable;
}

export function loggingIpv6HostsTransportToTerraform(struct?: LoggingIpv6HostsTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_host: cdktf.stringToTerraform(struct!.ipv6Host),
    transport_tcp_ports: cdktf.listMapper(loggingIpv6HostsTransportTransportTcpPortsToTerraform, false)(struct!.transportTcpPorts),
    transport_tls_ports: cdktf.listMapper(loggingIpv6HostsTransportTransportTlsPortsToTerraform, false)(struct!.transportTlsPorts),
    transport_udp_ports: cdktf.listMapper(loggingIpv6HostsTransportTransportUdpPortsToTerraform, false)(struct!.transportUdpPorts),
  }
}


export function loggingIpv6HostsTransportToHclTerraform(struct?: LoggingIpv6HostsTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_tcp_ports: {
      value: cdktf.listMapperHcl(loggingIpv6HostsTransportTransportTcpPortsToHclTerraform, false)(struct!.transportTcpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv6HostsTransportTransportTcpPortsList",
    },
    transport_tls_ports: {
      value: cdktf.listMapperHcl(loggingIpv6HostsTransportTransportTlsPortsToHclTerraform, false)(struct!.transportTlsPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv6HostsTransportTransportTlsPortsList",
    },
    transport_udp_ports: {
      value: cdktf.listMapperHcl(loggingIpv6HostsTransportTransportUdpPortsToHclTerraform, false)(struct!.transportUdpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv6HostsTransportTransportUdpPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv6HostsTransportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv6HostsTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Host = this._ipv6Host;
    }
    if (this._transportTcpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportTcpPorts = this._transportTcpPorts?.internalValue;
    }
    if (this._transportTlsPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportTlsPorts = this._transportTlsPorts?.internalValue;
    }
    if (this._transportUdpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportUdpPorts = this._transportUdpPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv6HostsTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Host = undefined;
      this._transportTcpPorts.internalValue = undefined;
      this._transportTlsPorts.internalValue = undefined;
      this._transportUdpPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Host = value.ipv6Host;
      this._transportTcpPorts.internalValue = value.transportTcpPorts;
      this._transportTlsPorts.internalValue = value.transportTlsPorts;
      this._transportUdpPorts.internalValue = value.transportUdpPorts;
    }
  }

  // ipv6_host - computed: false, optional: false, required: true
  private _ipv6Host?: string; 
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }
  public set ipv6Host(value: string) {
    this._ipv6Host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostInput() {
    return this._ipv6Host;
  }

  // transport_tcp_ports - computed: false, optional: true, required: false
  private _transportTcpPorts = new LoggingIpv6HostsTransportTransportTcpPortsList(this, "transport_tcp_ports", false);
  public get transportTcpPorts() {
    return this._transportTcpPorts;
  }
  public putTransportTcpPorts(value: LoggingIpv6HostsTransportTransportTcpPorts[] | cdktf.IResolvable) {
    this._transportTcpPorts.internalValue = value;
  }
  public resetTransportTcpPorts() {
    this._transportTcpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTcpPortsInput() {
    return this._transportTcpPorts.internalValue;
  }

  // transport_tls_ports - computed: false, optional: true, required: false
  private _transportTlsPorts = new LoggingIpv6HostsTransportTransportTlsPortsList(this, "transport_tls_ports", false);
  public get transportTlsPorts() {
    return this._transportTlsPorts;
  }
  public putTransportTlsPorts(value: LoggingIpv6HostsTransportTransportTlsPorts[] | cdktf.IResolvable) {
    this._transportTlsPorts.internalValue = value;
  }
  public resetTransportTlsPorts() {
    this._transportTlsPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTlsPortsInput() {
    return this._transportTlsPorts.internalValue;
  }

  // transport_udp_ports - computed: false, optional: true, required: false
  private _transportUdpPorts = new LoggingIpv6HostsTransportTransportUdpPortsList(this, "transport_udp_ports", false);
  public get transportUdpPorts() {
    return this._transportUdpPorts;
  }
  public putTransportUdpPorts(value: LoggingIpv6HostsTransportTransportUdpPorts[] | cdktf.IResolvable) {
    this._transportUdpPorts.internalValue = value;
  }
  public resetTransportUdpPorts() {
    this._transportUdpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportUdpPortsInput() {
    return this._transportUdpPorts.internalValue;
  }
}

export class LoggingIpv6HostsTransportList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv6HostsTransport[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv6HostsTransportOutputReference {
    return new LoggingIpv6HostsTransportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv6VrfHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv6_host Logging#ipv6_host}
  */
  readonly ipv6Host: string;
  /**
  * Set VRF option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#vrf Logging#vrf}
  */
  readonly vrf: string;
}

export function loggingIpv6VrfHostsToTerraform(struct?: LoggingIpv6VrfHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_host: cdktf.stringToTerraform(struct!.ipv6Host),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function loggingIpv6VrfHostsToHclTerraform(struct?: LoggingIpv6VrfHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv6VrfHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv6VrfHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Host = this._ipv6Host;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv6VrfHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Host = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Host = value.ipv6Host;
      this._vrf = value.vrf;
    }
  }

  // ipv6_host - computed: false, optional: false, required: true
  private _ipv6Host?: string; 
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }
  public set ipv6Host(value: string) {
    this._ipv6Host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostInput() {
    return this._ipv6Host;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class LoggingIpv6VrfHostsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv6VrfHosts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv6VrfHostsOutputReference {
    return new LoggingIpv6VrfHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv6VrfHostsTransportTransportTcpPorts {
  /**
  * Specify the TCP port number (default=601)
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
}

export function loggingIpv6VrfHostsTransportTransportTcpPortsToTerraform(struct?: LoggingIpv6VrfHostsTransportTransportTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
  }
}


export function loggingIpv6VrfHostsTransportTransportTcpPortsToHclTerraform(struct?: LoggingIpv6VrfHostsTransportTransportTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv6VrfHostsTransportTransportTcpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv6VrfHostsTransportTransportTcpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv6VrfHostsTransportTransportTcpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }
}

export class LoggingIpv6VrfHostsTransportTransportTcpPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv6VrfHostsTransportTransportTcpPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv6VrfHostsTransportTransportTcpPortsOutputReference {
    return new LoggingIpv6VrfHostsTransportTransportTcpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv6VrfHostsTransportTransportTlsPorts {
  /**
  * Specify the TLS port number (default=6514)
  *   - Range: `1025`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
  /**
  * Specify the TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#profile Logging#profile}
  */
  readonly profile?: string;
}

export function loggingIpv6VrfHostsTransportTransportTlsPortsToTerraform(struct?: LoggingIpv6VrfHostsTransportTransportTlsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function loggingIpv6VrfHostsTransportTransportTlsPortsToHclTerraform(struct?: LoggingIpv6VrfHostsTransportTransportTlsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv6VrfHostsTransportTransportTlsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv6VrfHostsTransportTransportTlsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv6VrfHostsTransportTransportTlsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
      this._profile = value.profile;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

export class LoggingIpv6VrfHostsTransportTransportTlsPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv6VrfHostsTransportTransportTlsPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv6VrfHostsTransportTransportTlsPortsOutputReference {
    return new LoggingIpv6VrfHostsTransportTransportTlsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv6VrfHostsTransportTransportUdpPorts {
  /**
  * Specify the UDP port number (default=514)
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#port_number Logging#port_number}
  */
  readonly portNumber: number;
}

export function loggingIpv6VrfHostsTransportTransportUdpPortsToTerraform(struct?: LoggingIpv6VrfHostsTransportTransportUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
  }
}


export function loggingIpv6VrfHostsTransportTransportUdpPortsToHclTerraform(struct?: LoggingIpv6VrfHostsTransportTransportUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv6VrfHostsTransportTransportUdpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv6VrfHostsTransportTransportUdpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv6VrfHostsTransportTransportUdpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }
}

export class LoggingIpv6VrfHostsTransportTransportUdpPortsList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv6VrfHostsTransportTransportUdpPorts[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv6VrfHostsTransportTransportUdpPortsOutputReference {
    return new LoggingIpv6VrfHostsTransportTransportUdpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingIpv6VrfHostsTransport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#ipv6_host Logging#ipv6_host}
  */
  readonly ipv6Host: string;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_tcp_ports Logging#transport_tcp_ports}
  */
  readonly transportTcpPorts?: LoggingIpv6VrfHostsTransportTransportTcpPorts[] | cdktf.IResolvable;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_tls_ports Logging#transport_tls_ports}
  */
  readonly transportTlsPorts?: LoggingIpv6VrfHostsTransportTransportTlsPorts[] | cdktf.IResolvable;
  /**
  * Port Number List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#transport_udp_ports Logging#transport_udp_ports}
  */
  readonly transportUdpPorts?: LoggingIpv6VrfHostsTransportTransportUdpPorts[] | cdktf.IResolvable;
  /**
  * Set VRF option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#vrf Logging#vrf}
  */
  readonly vrf: string;
}

export function loggingIpv6VrfHostsTransportToTerraform(struct?: LoggingIpv6VrfHostsTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_host: cdktf.stringToTerraform(struct!.ipv6Host),
    transport_tcp_ports: cdktf.listMapper(loggingIpv6VrfHostsTransportTransportTcpPortsToTerraform, false)(struct!.transportTcpPorts),
    transport_tls_ports: cdktf.listMapper(loggingIpv6VrfHostsTransportTransportTlsPortsToTerraform, false)(struct!.transportTlsPorts),
    transport_udp_ports: cdktf.listMapper(loggingIpv6VrfHostsTransportTransportUdpPortsToTerraform, false)(struct!.transportUdpPorts),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function loggingIpv6VrfHostsTransportToHclTerraform(struct?: LoggingIpv6VrfHostsTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_tcp_ports: {
      value: cdktf.listMapperHcl(loggingIpv6VrfHostsTransportTransportTcpPortsToHclTerraform, false)(struct!.transportTcpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv6VrfHostsTransportTransportTcpPortsList",
    },
    transport_tls_ports: {
      value: cdktf.listMapperHcl(loggingIpv6VrfHostsTransportTransportTlsPortsToHclTerraform, false)(struct!.transportTlsPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv6VrfHostsTransportTransportTlsPortsList",
    },
    transport_udp_ports: {
      value: cdktf.listMapperHcl(loggingIpv6VrfHostsTransportTransportUdpPortsToHclTerraform, false)(struct!.transportUdpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingIpv6VrfHostsTransportTransportUdpPortsList",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingIpv6VrfHostsTransportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingIpv6VrfHostsTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Host = this._ipv6Host;
    }
    if (this._transportTcpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportTcpPorts = this._transportTcpPorts?.internalValue;
    }
    if (this._transportTlsPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportTlsPorts = this._transportTlsPorts?.internalValue;
    }
    if (this._transportUdpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportUdpPorts = this._transportUdpPorts?.internalValue;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingIpv6VrfHostsTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Host = undefined;
      this._transportTcpPorts.internalValue = undefined;
      this._transportTlsPorts.internalValue = undefined;
      this._transportUdpPorts.internalValue = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Host = value.ipv6Host;
      this._transportTcpPorts.internalValue = value.transportTcpPorts;
      this._transportTlsPorts.internalValue = value.transportTlsPorts;
      this._transportUdpPorts.internalValue = value.transportUdpPorts;
      this._vrf = value.vrf;
    }
  }

  // ipv6_host - computed: false, optional: false, required: true
  private _ipv6Host?: string; 
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }
  public set ipv6Host(value: string) {
    this._ipv6Host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostInput() {
    return this._ipv6Host;
  }

  // transport_tcp_ports - computed: false, optional: true, required: false
  private _transportTcpPorts = new LoggingIpv6VrfHostsTransportTransportTcpPortsList(this, "transport_tcp_ports", false);
  public get transportTcpPorts() {
    return this._transportTcpPorts;
  }
  public putTransportTcpPorts(value: LoggingIpv6VrfHostsTransportTransportTcpPorts[] | cdktf.IResolvable) {
    this._transportTcpPorts.internalValue = value;
  }
  public resetTransportTcpPorts() {
    this._transportTcpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTcpPortsInput() {
    return this._transportTcpPorts.internalValue;
  }

  // transport_tls_ports - computed: false, optional: true, required: false
  private _transportTlsPorts = new LoggingIpv6VrfHostsTransportTransportTlsPortsList(this, "transport_tls_ports", false);
  public get transportTlsPorts() {
    return this._transportTlsPorts;
  }
  public putTransportTlsPorts(value: LoggingIpv6VrfHostsTransportTransportTlsPorts[] | cdktf.IResolvable) {
    this._transportTlsPorts.internalValue = value;
  }
  public resetTransportTlsPorts() {
    this._transportTlsPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTlsPortsInput() {
    return this._transportTlsPorts.internalValue;
  }

  // transport_udp_ports - computed: false, optional: true, required: false
  private _transportUdpPorts = new LoggingIpv6VrfHostsTransportTransportUdpPortsList(this, "transport_udp_ports", false);
  public get transportUdpPorts() {
    return this._transportUdpPorts;
  }
  public putTransportUdpPorts(value: LoggingIpv6VrfHostsTransportTransportUdpPorts[] | cdktf.IResolvable) {
    this._transportUdpPorts.internalValue = value;
  }
  public resetTransportUdpPorts() {
    this._transportUdpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportUdpPortsInput() {
    return this._transportUdpPorts.internalValue;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class LoggingIpv6VrfHostsTransportList extends cdktf.ComplexList {
  public internalValue? : LoggingIpv6VrfHostsTransport[] | cdktf.IResolvable

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
  public get(index: number): LoggingIpv6VrfHostsTransportOutputReference {
    return new LoggingIpv6VrfHostsTransportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingSourceInterfacesVrf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#interface_name Logging#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Specify the vrf of source interface for logging transactions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#vrf Logging#vrf}
  */
  readonly vrf: string;
}

export function loggingSourceInterfacesVrfToTerraform(struct?: LoggingSourceInterfacesVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function loggingSourceInterfacesVrfToHclTerraform(struct?: LoggingSourceInterfacesVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingSourceInterfacesVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingSourceInterfacesVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingSourceInterfacesVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._vrf = value.vrf;
    }
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class LoggingSourceInterfacesVrfList extends cdktf.ComplexList {
  public internalValue? : LoggingSourceInterfacesVrf[] | cdktf.IResolvable

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
  public get(index: number): LoggingSourceInterfacesVrfOutputReference {
    return new LoggingSourceInterfacesVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging iosxe_logging}
*/
export class Logging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Logging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Logging to import
  * @param importFromId The id of the existing Logging that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Logging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/logging iosxe_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LoggingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_logging',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bufferedSeverity = config.bufferedSeverity;
    this._bufferedSeverityLegacy = config.bufferedSeverityLegacy;
    this._bufferedSize = config.bufferedSize;
    this._bufferedSizeLegacy = config.bufferedSizeLegacy;
    this._console = config.console;
    this._consoleSeverity = config.consoleSeverity;
    this._device = config.device;
    this._facility = config.facility;
    this._fileMaxSize = config.fileMaxSize;
    this._fileMinSize = config.fileMinSize;
    this._fileName = config.fileName;
    this._fileSeverity = config.fileSeverity;
    this._historySeverity = config.historySeverity;
    this._historySize = config.historySize;
    this._ipv4Hosts.internalValue = config.ipv4Hosts;
    this._ipv4HostsTransport.internalValue = config.ipv4HostsTransport;
    this._ipv4VrfHosts.internalValue = config.ipv4VrfHosts;
    this._ipv4VrfHostsTransport.internalValue = config.ipv4VrfHostsTransport;
    this._ipv6Hosts.internalValue = config.ipv6Hosts;
    this._ipv6HostsTransport.internalValue = config.ipv6HostsTransport;
    this._ipv6VrfHosts.internalValue = config.ipv6VrfHosts;
    this._ipv6VrfHostsTransport.internalValue = config.ipv6VrfHostsTransport;
    this._loggingCount = config.loggingCount;
    this._monitorSeverity = config.monitorSeverity;
    this._originIdName = config.originIdName;
    this._originIdType = config.originIdType;
    this._persistentBatch = config.persistentBatch;
    this._persistentFilesize = config.persistentFilesize;
    this._persistentImmediate = config.persistentImmediate;
    this._persistentNotify = config.persistentNotify;
    this._persistentProtected = config.persistentProtected;
    this._persistentSize = config.persistentSize;
    this._persistentThreshold = config.persistentThreshold;
    this._persistentUrl = config.persistentUrl;
    this._rateLimitAll = config.rateLimitAll;
    this._rateLimitAllExceptSeverity = config.rateLimitAllExceptSeverity;
    this._rateLimitConsole = config.rateLimitConsole;
    this._rateLimitConsoleAll = config.rateLimitConsoleAll;
    this._rateLimitConsoleAllExceptSeverity = config.rateLimitConsoleAllExceptSeverity;
    this._rateLimitConsoleExceptSeverity = config.rateLimitConsoleExceptSeverity;
    this._sourceInterface = config.sourceInterface;
    this._sourceInterfacesVrf.internalValue = config.sourceInterfacesVrf;
    this._trap = config.trap;
    this._trapSeverity = config.trapSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buffered_severity - computed: false, optional: true, required: false
  private _bufferedSeverity?: string; 
  public get bufferedSeverity() {
    return this.getStringAttribute('buffered_severity');
  }
  public set bufferedSeverity(value: string) {
    this._bufferedSeverity = value;
  }
  public resetBufferedSeverity() {
    this._bufferedSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferedSeverityInput() {
    return this._bufferedSeverity;
  }

  // buffered_severity_legacy - computed: false, optional: true, required: false
  private _bufferedSeverityLegacy?: string; 
  public get bufferedSeverityLegacy() {
    return this.getStringAttribute('buffered_severity_legacy');
  }
  public set bufferedSeverityLegacy(value: string) {
    this._bufferedSeverityLegacy = value;
  }
  public resetBufferedSeverityLegacy() {
    this._bufferedSeverityLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferedSeverityLegacyInput() {
    return this._bufferedSeverityLegacy;
  }

  // buffered_size - computed: false, optional: true, required: false
  private _bufferedSize?: number; 
  public get bufferedSize() {
    return this.getNumberAttribute('buffered_size');
  }
  public set bufferedSize(value: number) {
    this._bufferedSize = value;
  }
  public resetBufferedSize() {
    this._bufferedSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferedSizeInput() {
    return this._bufferedSize;
  }

  // buffered_size_legacy - computed: false, optional: true, required: false
  private _bufferedSizeLegacy?: number; 
  public get bufferedSizeLegacy() {
    return this.getNumberAttribute('buffered_size_legacy');
  }
  public set bufferedSizeLegacy(value: number) {
    this._bufferedSizeLegacy = value;
  }
  public resetBufferedSizeLegacy() {
    this._bufferedSizeLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferedSizeLegacyInput() {
    return this._bufferedSizeLegacy;
  }

  // console - computed: false, optional: true, required: false
  private _console?: boolean | cdktf.IResolvable; 
  public get console() {
    return this.getBooleanAttribute('console');
  }
  public set console(value: boolean | cdktf.IResolvable) {
    this._console = value;
  }
  public resetConsole() {
    this._console = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console;
  }

  // console_severity - computed: false, optional: true, required: false
  private _consoleSeverity?: string; 
  public get consoleSeverity() {
    return this.getStringAttribute('console_severity');
  }
  public set consoleSeverity(value: string) {
    this._consoleSeverity = value;
  }
  public resetConsoleSeverity() {
    this._consoleSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleSeverityInput() {
    return this._consoleSeverity;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // facility - computed: false, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // file_max_size - computed: false, optional: true, required: false
  private _fileMaxSize?: number; 
  public get fileMaxSize() {
    return this.getNumberAttribute('file_max_size');
  }
  public set fileMaxSize(value: number) {
    this._fileMaxSize = value;
  }
  public resetFileMaxSize() {
    this._fileMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMaxSizeInput() {
    return this._fileMaxSize;
  }

  // file_min_size - computed: false, optional: true, required: false
  private _fileMinSize?: number; 
  public get fileMinSize() {
    return this.getNumberAttribute('file_min_size');
  }
  public set fileMinSize(value: number) {
    this._fileMinSize = value;
  }
  public resetFileMinSize() {
    this._fileMinSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMinSizeInput() {
    return this._fileMinSize;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // file_severity - computed: false, optional: true, required: false
  private _fileSeverity?: string; 
  public get fileSeverity() {
    return this.getStringAttribute('file_severity');
  }
  public set fileSeverity(value: string) {
    this._fileSeverity = value;
  }
  public resetFileSeverity() {
    this._fileSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSeverityInput() {
    return this._fileSeverity;
  }

  // history_severity - computed: false, optional: true, required: false
  private _historySeverity?: string; 
  public get historySeverity() {
    return this.getStringAttribute('history_severity');
  }
  public set historySeverity(value: string) {
    this._historySeverity = value;
  }
  public resetHistorySeverity() {
    this._historySeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historySeverityInput() {
    return this._historySeverity;
  }

  // history_size - computed: false, optional: true, required: false
  private _historySize?: number; 
  public get historySize() {
    return this.getNumberAttribute('history_size');
  }
  public set historySize(value: number) {
    this._historySize = value;
  }
  public resetHistorySize() {
    this._historySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historySizeInput() {
    return this._historySize;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_hosts - computed: false, optional: true, required: false
  private _ipv4Hosts = new LoggingIpv4HostsList(this, "ipv4_hosts", false);
  public get ipv4Hosts() {
    return this._ipv4Hosts;
  }
  public putIpv4Hosts(value: LoggingIpv4Hosts[] | cdktf.IResolvable) {
    this._ipv4Hosts.internalValue = value;
  }
  public resetIpv4Hosts() {
    this._ipv4Hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HostsInput() {
    return this._ipv4Hosts.internalValue;
  }

  // ipv4_hosts_transport - computed: false, optional: true, required: false
  private _ipv4HostsTransport = new LoggingIpv4HostsTransportList(this, "ipv4_hosts_transport", false);
  public get ipv4HostsTransport() {
    return this._ipv4HostsTransport;
  }
  public putIpv4HostsTransport(value: LoggingIpv4HostsTransport[] | cdktf.IResolvable) {
    this._ipv4HostsTransport.internalValue = value;
  }
  public resetIpv4HostsTransport() {
    this._ipv4HostsTransport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HostsTransportInput() {
    return this._ipv4HostsTransport.internalValue;
  }

  // ipv4_vrf_hosts - computed: false, optional: true, required: false
  private _ipv4VrfHosts = new LoggingIpv4VrfHostsList(this, "ipv4_vrf_hosts", false);
  public get ipv4VrfHosts() {
    return this._ipv4VrfHosts;
  }
  public putIpv4VrfHosts(value: LoggingIpv4VrfHosts[] | cdktf.IResolvable) {
    this._ipv4VrfHosts.internalValue = value;
  }
  public resetIpv4VrfHosts() {
    this._ipv4VrfHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VrfHostsInput() {
    return this._ipv4VrfHosts.internalValue;
  }

  // ipv4_vrf_hosts_transport - computed: false, optional: true, required: false
  private _ipv4VrfHostsTransport = new LoggingIpv4VrfHostsTransportList(this, "ipv4_vrf_hosts_transport", false);
  public get ipv4VrfHostsTransport() {
    return this._ipv4VrfHostsTransport;
  }
  public putIpv4VrfHostsTransport(value: LoggingIpv4VrfHostsTransport[] | cdktf.IResolvable) {
    this._ipv4VrfHostsTransport.internalValue = value;
  }
  public resetIpv4VrfHostsTransport() {
    this._ipv4VrfHostsTransport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VrfHostsTransportInput() {
    return this._ipv4VrfHostsTransport.internalValue;
  }

  // ipv6_hosts - computed: false, optional: true, required: false
  private _ipv6Hosts = new LoggingIpv6HostsList(this, "ipv6_hosts", false);
  public get ipv6Hosts() {
    return this._ipv6Hosts;
  }
  public putIpv6Hosts(value: LoggingIpv6Hosts[] | cdktf.IResolvable) {
    this._ipv6Hosts.internalValue = value;
  }
  public resetIpv6Hosts() {
    this._ipv6Hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostsInput() {
    return this._ipv6Hosts.internalValue;
  }

  // ipv6_hosts_transport - computed: false, optional: true, required: false
  private _ipv6HostsTransport = new LoggingIpv6HostsTransportList(this, "ipv6_hosts_transport", false);
  public get ipv6HostsTransport() {
    return this._ipv6HostsTransport;
  }
  public putIpv6HostsTransport(value: LoggingIpv6HostsTransport[] | cdktf.IResolvable) {
    this._ipv6HostsTransport.internalValue = value;
  }
  public resetIpv6HostsTransport() {
    this._ipv6HostsTransport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostsTransportInput() {
    return this._ipv6HostsTransport.internalValue;
  }

  // ipv6_vrf_hosts - computed: false, optional: true, required: false
  private _ipv6VrfHosts = new LoggingIpv6VrfHostsList(this, "ipv6_vrf_hosts", false);
  public get ipv6VrfHosts() {
    return this._ipv6VrfHosts;
  }
  public putIpv6VrfHosts(value: LoggingIpv6VrfHosts[] | cdktf.IResolvable) {
    this._ipv6VrfHosts.internalValue = value;
  }
  public resetIpv6VrfHosts() {
    this._ipv6VrfHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VrfHostsInput() {
    return this._ipv6VrfHosts.internalValue;
  }

  // ipv6_vrf_hosts_transport - computed: false, optional: true, required: false
  private _ipv6VrfHostsTransport = new LoggingIpv6VrfHostsTransportList(this, "ipv6_vrf_hosts_transport", false);
  public get ipv6VrfHostsTransport() {
    return this._ipv6VrfHostsTransport;
  }
  public putIpv6VrfHostsTransport(value: LoggingIpv6VrfHostsTransport[] | cdktf.IResolvable) {
    this._ipv6VrfHostsTransport.internalValue = value;
  }
  public resetIpv6VrfHostsTransport() {
    this._ipv6VrfHostsTransport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VrfHostsTransportInput() {
    return this._ipv6VrfHostsTransport.internalValue;
  }

  // logging_count - computed: false, optional: true, required: false
  private _loggingCount?: boolean | cdktf.IResolvable; 
  public get loggingCount() {
    return this.getBooleanAttribute('logging_count');
  }
  public set loggingCount(value: boolean | cdktf.IResolvable) {
    this._loggingCount = value;
  }
  public resetLoggingCount() {
    this._loggingCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingCountInput() {
    return this._loggingCount;
  }

  // monitor_severity - computed: false, optional: true, required: false
  private _monitorSeverity?: string; 
  public get monitorSeverity() {
    return this.getStringAttribute('monitor_severity');
  }
  public set monitorSeverity(value: string) {
    this._monitorSeverity = value;
  }
  public resetMonitorSeverity() {
    this._monitorSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorSeverityInput() {
    return this._monitorSeverity;
  }

  // origin_id_name - computed: false, optional: true, required: false
  private _originIdName?: string; 
  public get originIdName() {
    return this.getStringAttribute('origin_id_name');
  }
  public set originIdName(value: string) {
    this._originIdName = value;
  }
  public resetOriginIdName() {
    this._originIdName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdNameInput() {
    return this._originIdName;
  }

  // origin_id_type - computed: false, optional: true, required: false
  private _originIdType?: string; 
  public get originIdType() {
    return this.getStringAttribute('origin_id_type');
  }
  public set originIdType(value: string) {
    this._originIdType = value;
  }
  public resetOriginIdType() {
    this._originIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdTypeInput() {
    return this._originIdType;
  }

  // persistent_batch - computed: false, optional: true, required: false
  private _persistentBatch?: number; 
  public get persistentBatch() {
    return this.getNumberAttribute('persistent_batch');
  }
  public set persistentBatch(value: number) {
    this._persistentBatch = value;
  }
  public resetPersistentBatch() {
    this._persistentBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentBatchInput() {
    return this._persistentBatch;
  }

  // persistent_filesize - computed: false, optional: true, required: false
  private _persistentFilesize?: number; 
  public get persistentFilesize() {
    return this.getNumberAttribute('persistent_filesize');
  }
  public set persistentFilesize(value: number) {
    this._persistentFilesize = value;
  }
  public resetPersistentFilesize() {
    this._persistentFilesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentFilesizeInput() {
    return this._persistentFilesize;
  }

  // persistent_immediate - computed: false, optional: true, required: false
  private _persistentImmediate?: boolean | cdktf.IResolvable; 
  public get persistentImmediate() {
    return this.getBooleanAttribute('persistent_immediate');
  }
  public set persistentImmediate(value: boolean | cdktf.IResolvable) {
    this._persistentImmediate = value;
  }
  public resetPersistentImmediate() {
    this._persistentImmediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentImmediateInput() {
    return this._persistentImmediate;
  }

  // persistent_notify - computed: false, optional: true, required: false
  private _persistentNotify?: boolean | cdktf.IResolvable; 
  public get persistentNotify() {
    return this.getBooleanAttribute('persistent_notify');
  }
  public set persistentNotify(value: boolean | cdktf.IResolvable) {
    this._persistentNotify = value;
  }
  public resetPersistentNotify() {
    this._persistentNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentNotifyInput() {
    return this._persistentNotify;
  }

  // persistent_protected - computed: false, optional: true, required: false
  private _persistentProtected?: boolean | cdktf.IResolvable; 
  public get persistentProtected() {
    return this.getBooleanAttribute('persistent_protected');
  }
  public set persistentProtected(value: boolean | cdktf.IResolvable) {
    this._persistentProtected = value;
  }
  public resetPersistentProtected() {
    this._persistentProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentProtectedInput() {
    return this._persistentProtected;
  }

  // persistent_size - computed: false, optional: true, required: false
  private _persistentSize?: number; 
  public get persistentSize() {
    return this.getNumberAttribute('persistent_size');
  }
  public set persistentSize(value: number) {
    this._persistentSize = value;
  }
  public resetPersistentSize() {
    this._persistentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentSizeInput() {
    return this._persistentSize;
  }

  // persistent_threshold - computed: false, optional: true, required: false
  private _persistentThreshold?: number; 
  public get persistentThreshold() {
    return this.getNumberAttribute('persistent_threshold');
  }
  public set persistentThreshold(value: number) {
    this._persistentThreshold = value;
  }
  public resetPersistentThreshold() {
    this._persistentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentThresholdInput() {
    return this._persistentThreshold;
  }

  // persistent_url - computed: false, optional: true, required: false
  private _persistentUrl?: string; 
  public get persistentUrl() {
    return this.getStringAttribute('persistent_url');
  }
  public set persistentUrl(value: string) {
    this._persistentUrl = value;
  }
  public resetPersistentUrl() {
    this._persistentUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentUrlInput() {
    return this._persistentUrl;
  }

  // rate_limit_all - computed: false, optional: true, required: false
  private _rateLimitAll?: number; 
  public get rateLimitAll() {
    return this.getNumberAttribute('rate_limit_all');
  }
  public set rateLimitAll(value: number) {
    this._rateLimitAll = value;
  }
  public resetRateLimitAll() {
    this._rateLimitAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitAllInput() {
    return this._rateLimitAll;
  }

  // rate_limit_all_except_severity - computed: false, optional: true, required: false
  private _rateLimitAllExceptSeverity?: string; 
  public get rateLimitAllExceptSeverity() {
    return this.getStringAttribute('rate_limit_all_except_severity');
  }
  public set rateLimitAllExceptSeverity(value: string) {
    this._rateLimitAllExceptSeverity = value;
  }
  public resetRateLimitAllExceptSeverity() {
    this._rateLimitAllExceptSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitAllExceptSeverityInput() {
    return this._rateLimitAllExceptSeverity;
  }

  // rate_limit_console - computed: false, optional: true, required: false
  private _rateLimitConsole?: number; 
  public get rateLimitConsole() {
    return this.getNumberAttribute('rate_limit_console');
  }
  public set rateLimitConsole(value: number) {
    this._rateLimitConsole = value;
  }
  public resetRateLimitConsole() {
    this._rateLimitConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitConsoleInput() {
    return this._rateLimitConsole;
  }

  // rate_limit_console_all - computed: false, optional: true, required: false
  private _rateLimitConsoleAll?: number; 
  public get rateLimitConsoleAll() {
    return this.getNumberAttribute('rate_limit_console_all');
  }
  public set rateLimitConsoleAll(value: number) {
    this._rateLimitConsoleAll = value;
  }
  public resetRateLimitConsoleAll() {
    this._rateLimitConsoleAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitConsoleAllInput() {
    return this._rateLimitConsoleAll;
  }

  // rate_limit_console_all_except_severity - computed: false, optional: true, required: false
  private _rateLimitConsoleAllExceptSeverity?: string; 
  public get rateLimitConsoleAllExceptSeverity() {
    return this.getStringAttribute('rate_limit_console_all_except_severity');
  }
  public set rateLimitConsoleAllExceptSeverity(value: string) {
    this._rateLimitConsoleAllExceptSeverity = value;
  }
  public resetRateLimitConsoleAllExceptSeverity() {
    this._rateLimitConsoleAllExceptSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitConsoleAllExceptSeverityInput() {
    return this._rateLimitConsoleAllExceptSeverity;
  }

  // rate_limit_console_except_severity - computed: false, optional: true, required: false
  private _rateLimitConsoleExceptSeverity?: string; 
  public get rateLimitConsoleExceptSeverity() {
    return this.getStringAttribute('rate_limit_console_except_severity');
  }
  public set rateLimitConsoleExceptSeverity(value: string) {
    this._rateLimitConsoleExceptSeverity = value;
  }
  public resetRateLimitConsoleExceptSeverity() {
    this._rateLimitConsoleExceptSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitConsoleExceptSeverityInput() {
    return this._rateLimitConsoleExceptSeverity;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_interfaces_vrf - computed: false, optional: true, required: false
  private _sourceInterfacesVrf = new LoggingSourceInterfacesVrfList(this, "source_interfaces_vrf", false);
  public get sourceInterfacesVrf() {
    return this._sourceInterfacesVrf;
  }
  public putSourceInterfacesVrf(value: LoggingSourceInterfacesVrf[] | cdktf.IResolvable) {
    this._sourceInterfacesVrf.internalValue = value;
  }
  public resetSourceInterfacesVrf() {
    this._sourceInterfacesVrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfacesVrfInput() {
    return this._sourceInterfacesVrf.internalValue;
  }

  // trap - computed: false, optional: true, required: false
  private _trap?: boolean | cdktf.IResolvable; 
  public get trap() {
    return this.getBooleanAttribute('trap');
  }
  public set trap(value: boolean | cdktf.IResolvable) {
    this._trap = value;
  }
  public resetTrap() {
    this._trap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapInput() {
    return this._trap;
  }

  // trap_severity - computed: false, optional: true, required: false
  private _trapSeverity?: string; 
  public get trapSeverity() {
    return this.getStringAttribute('trap_severity');
  }
  public set trapSeverity(value: string) {
    this._trapSeverity = value;
  }
  public resetTrapSeverity() {
    this._trapSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSeverityInput() {
    return this._trapSeverity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      buffered_severity: cdktf.stringToTerraform(this._bufferedSeverity),
      buffered_severity_legacy: cdktf.stringToTerraform(this._bufferedSeverityLegacy),
      buffered_size: cdktf.numberToTerraform(this._bufferedSize),
      buffered_size_legacy: cdktf.numberToTerraform(this._bufferedSizeLegacy),
      console: cdktf.booleanToTerraform(this._console),
      console_severity: cdktf.stringToTerraform(this._consoleSeverity),
      device: cdktf.stringToTerraform(this._device),
      facility: cdktf.stringToTerraform(this._facility),
      file_max_size: cdktf.numberToTerraform(this._fileMaxSize),
      file_min_size: cdktf.numberToTerraform(this._fileMinSize),
      file_name: cdktf.stringToTerraform(this._fileName),
      file_severity: cdktf.stringToTerraform(this._fileSeverity),
      history_severity: cdktf.stringToTerraform(this._historySeverity),
      history_size: cdktf.numberToTerraform(this._historySize),
      ipv4_hosts: cdktf.listMapper(loggingIpv4HostsToTerraform, false)(this._ipv4Hosts.internalValue),
      ipv4_hosts_transport: cdktf.listMapper(loggingIpv4HostsTransportToTerraform, false)(this._ipv4HostsTransport.internalValue),
      ipv4_vrf_hosts: cdktf.listMapper(loggingIpv4VrfHostsToTerraform, false)(this._ipv4VrfHosts.internalValue),
      ipv4_vrf_hosts_transport: cdktf.listMapper(loggingIpv4VrfHostsTransportToTerraform, false)(this._ipv4VrfHostsTransport.internalValue),
      ipv6_hosts: cdktf.listMapper(loggingIpv6HostsToTerraform, false)(this._ipv6Hosts.internalValue),
      ipv6_hosts_transport: cdktf.listMapper(loggingIpv6HostsTransportToTerraform, false)(this._ipv6HostsTransport.internalValue),
      ipv6_vrf_hosts: cdktf.listMapper(loggingIpv6VrfHostsToTerraform, false)(this._ipv6VrfHosts.internalValue),
      ipv6_vrf_hosts_transport: cdktf.listMapper(loggingIpv6VrfHostsTransportToTerraform, false)(this._ipv6VrfHostsTransport.internalValue),
      logging_count: cdktf.booleanToTerraform(this._loggingCount),
      monitor_severity: cdktf.stringToTerraform(this._monitorSeverity),
      origin_id_name: cdktf.stringToTerraform(this._originIdName),
      origin_id_type: cdktf.stringToTerraform(this._originIdType),
      persistent_batch: cdktf.numberToTerraform(this._persistentBatch),
      persistent_filesize: cdktf.numberToTerraform(this._persistentFilesize),
      persistent_immediate: cdktf.booleanToTerraform(this._persistentImmediate),
      persistent_notify: cdktf.booleanToTerraform(this._persistentNotify),
      persistent_protected: cdktf.booleanToTerraform(this._persistentProtected),
      persistent_size: cdktf.numberToTerraform(this._persistentSize),
      persistent_threshold: cdktf.numberToTerraform(this._persistentThreshold),
      persistent_url: cdktf.stringToTerraform(this._persistentUrl),
      rate_limit_all: cdktf.numberToTerraform(this._rateLimitAll),
      rate_limit_all_except_severity: cdktf.stringToTerraform(this._rateLimitAllExceptSeverity),
      rate_limit_console: cdktf.numberToTerraform(this._rateLimitConsole),
      rate_limit_console_all: cdktf.numberToTerraform(this._rateLimitConsoleAll),
      rate_limit_console_all_except_severity: cdktf.stringToTerraform(this._rateLimitConsoleAllExceptSeverity),
      rate_limit_console_except_severity: cdktf.stringToTerraform(this._rateLimitConsoleExceptSeverity),
      source_interface: cdktf.stringToTerraform(this._sourceInterface),
      source_interfaces_vrf: cdktf.listMapper(loggingSourceInterfacesVrfToTerraform, false)(this._sourceInterfacesVrf.internalValue),
      trap: cdktf.booleanToTerraform(this._trap),
      trap_severity: cdktf.stringToTerraform(this._trapSeverity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buffered_severity: {
        value: cdktf.stringToHclTerraform(this._bufferedSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buffered_severity_legacy: {
        value: cdktf.stringToHclTerraform(this._bufferedSeverityLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buffered_size: {
        value: cdktf.numberToHclTerraform(this._bufferedSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      buffered_size_legacy: {
        value: cdktf.numberToHclTerraform(this._bufferedSizeLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      console: {
        value: cdktf.booleanToHclTerraform(this._console),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      console_severity: {
        value: cdktf.stringToHclTerraform(this._consoleSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      facility: {
        value: cdktf.stringToHclTerraform(this._facility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_max_size: {
        value: cdktf.numberToHclTerraform(this._fileMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_min_size: {
        value: cdktf.numberToHclTerraform(this._fileMinSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_severity: {
        value: cdktf.stringToHclTerraform(this._fileSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      history_severity: {
        value: cdktf.stringToHclTerraform(this._historySeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      history_size: {
        value: cdktf.numberToHclTerraform(this._historySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_hosts: {
        value: cdktf.listMapperHcl(loggingIpv4HostsToHclTerraform, false)(this._ipv4Hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingIpv4HostsList",
      },
      ipv4_hosts_transport: {
        value: cdktf.listMapperHcl(loggingIpv4HostsTransportToHclTerraform, false)(this._ipv4HostsTransport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingIpv4HostsTransportList",
      },
      ipv4_vrf_hosts: {
        value: cdktf.listMapperHcl(loggingIpv4VrfHostsToHclTerraform, false)(this._ipv4VrfHosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingIpv4VrfHostsList",
      },
      ipv4_vrf_hosts_transport: {
        value: cdktf.listMapperHcl(loggingIpv4VrfHostsTransportToHclTerraform, false)(this._ipv4VrfHostsTransport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingIpv4VrfHostsTransportList",
      },
      ipv6_hosts: {
        value: cdktf.listMapperHcl(loggingIpv6HostsToHclTerraform, false)(this._ipv6Hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingIpv6HostsList",
      },
      ipv6_hosts_transport: {
        value: cdktf.listMapperHcl(loggingIpv6HostsTransportToHclTerraform, false)(this._ipv6HostsTransport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingIpv6HostsTransportList",
      },
      ipv6_vrf_hosts: {
        value: cdktf.listMapperHcl(loggingIpv6VrfHostsToHclTerraform, false)(this._ipv6VrfHosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingIpv6VrfHostsList",
      },
      ipv6_vrf_hosts_transport: {
        value: cdktf.listMapperHcl(loggingIpv6VrfHostsTransportToHclTerraform, false)(this._ipv6VrfHostsTransport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingIpv6VrfHostsTransportList",
      },
      logging_count: {
        value: cdktf.booleanToHclTerraform(this._loggingCount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitor_severity: {
        value: cdktf.stringToHclTerraform(this._monitorSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_id_name: {
        value: cdktf.stringToHclTerraform(this._originIdName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_id_type: {
        value: cdktf.stringToHclTerraform(this._originIdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistent_batch: {
        value: cdktf.numberToHclTerraform(this._persistentBatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_filesize: {
        value: cdktf.numberToHclTerraform(this._persistentFilesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_immediate: {
        value: cdktf.booleanToHclTerraform(this._persistentImmediate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      persistent_notify: {
        value: cdktf.booleanToHclTerraform(this._persistentNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      persistent_protected: {
        value: cdktf.booleanToHclTerraform(this._persistentProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      persistent_size: {
        value: cdktf.numberToHclTerraform(this._persistentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_threshold: {
        value: cdktf.numberToHclTerraform(this._persistentThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_url: {
        value: cdktf.stringToHclTerraform(this._persistentUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_all: {
        value: cdktf.numberToHclTerraform(this._rateLimitAll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_all_except_severity: {
        value: cdktf.stringToHclTerraform(this._rateLimitAllExceptSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_console: {
        value: cdktf.numberToHclTerraform(this._rateLimitConsole),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_console_all: {
        value: cdktf.numberToHclTerraform(this._rateLimitConsoleAll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_console_all_except_severity: {
        value: cdktf.stringToHclTerraform(this._rateLimitConsoleAllExceptSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_console_except_severity: {
        value: cdktf.stringToHclTerraform(this._rateLimitConsoleExceptSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface: {
        value: cdktf.stringToHclTerraform(this._sourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interfaces_vrf: {
        value: cdktf.listMapperHcl(loggingSourceInterfacesVrfToHclTerraform, false)(this._sourceInterfacesVrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingSourceInterfacesVrfList",
      },
      trap: {
        value: cdktf.booleanToHclTerraform(this._trap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trap_severity: {
        value: cdktf.stringToHclTerraform(this._trapSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
