// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Order in which authentication methods are invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#authentication_order System#authentication_order}
  */
  readonly authenticationOrder?: string[];
  /**
  * Enable auto-snapshot when boots from alternate slice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#auto_snapshot System#auto_snapshot}
  */
  readonly autoSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Use loopback interface as source address for locally generated packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#default_address_selection System#default_address_selection}
  */
  readonly defaultAddressSelection?: boolean | cdktf.IResolvable;
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#domain_name System#domain_name}
  */
  readonly domainName?: string;
  /**
  * Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#host_name System#host_name}
  */
  readonly hostName?: string;
  /**
  * Maximum rollback configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#max_configuration_rollbacks System#max_configuration_rollbacks}
  */
  readonly maxConfigurationRollbacks?: number;
  /**
  * Number of configuration files stored on flash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#max_configurations_on_flash System#max_configurations_on_flash}
  */
  readonly maxConfigurationsOnFlash?: number;
  /**
  * DNS name servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#name_server System#name_server}
  */
  readonly nameServer?: string[];
  /**
  * Disable responding to ICMP echo requests sent to multicast group addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_multicast_echo System#no_multicast_echo}
  */
  readonly noMulticastEcho?: boolean | cdktf.IResolvable;
  /**
  * Do not insert IP address in ping replies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_ping_record_route System#no_ping_record_route}
  */
  readonly noPingRecordRoute?: boolean | cdktf.IResolvable;
  /**
  * Do not insert time stamp in ping replies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_ping_time_stamp System#no_ping_time_stamp}
  */
  readonly noPingTimeStamp?: boolean | cdktf.IResolvable;
  /**
  * Disable ICMP redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_redirects System#no_redirects}
  */
  readonly noRedirects?: boolean | cdktf.IResolvable;
  /**
  * Disable IPV6 ICMP redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_redirects_ipv6 System#no_redirects_ipv6}
  */
  readonly noRedirectsIpv6?: boolean | cdktf.IResolvable;
  /**
  * Value of NAS-ID in outgoing RADIUS packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#radius_options_attributes_nas_id System#radius_options_attributes_nas_id}
  */
  readonly radiusOptionsAttributesNasId?: string;
  /**
  * Value of NAS-IP-Address in outgoing RADIUS packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#radius_options_attributes_nas_ipaddress System#radius_options_attributes_nas_ipaddress}
  */
  readonly radiusOptionsAttributesNasIpaddress?: string;
  /**
  * Include authentication method, remote port and user-privileges in `login` accounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#radius_options_enhanced_accounting System#radius_options_enhanced_accounting}
  */
  readonly radiusOptionsEnhancedAccounting?: boolean | cdktf.IResolvable;
  /**
  * MSCHAP version 2 for password protocol used in RADIUS packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#radius_options_password_protocol_mschapv2 System#radius_options_password_protocol_mschapv2}
  */
  readonly radiusOptionsPasswordProtocolMschapv2?: boolean | cdktf.IResolvable;
  /**
  * TACACS+ authorization refresh time interval (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tacplus_options_authorization_time_interval System#tacplus_options_authorization_time_interval}
  */
  readonly tacplusOptionsAuthorizationTimeInterval?: number;
  /**
  * Include authentication method, remote port and user-privileges in `login` accounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tacplus_options_enhanced_accounting System#tacplus_options_enhanced_accounting}
  */
  readonly tacplusOptionsEnhancedAccounting?: boolean | cdktf.IResolvable;
  /**
  * In start/stop requests, do not include `cmd` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tacplus_options_exclude_cmd_attribute System#tacplus_options_exclude_cmd_attribute}
  */
  readonly tacplusOptionsExcludeCmdAttribute?: boolean | cdktf.IResolvable;
  /**
  * In start/stop requests, set `cmd` attribute value to empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tacplus_options_no_cmd_attribute_value System#tacplus_options_no_cmd_attribute_value}
  */
  readonly tacplusOptionsNoCmdAttributeValue?: boolean | cdktf.IResolvable;
  /**
  * Don't deny login if authorization request fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tacplus_options_no_strict_authorization System#tacplus_options_no_strict_authorization}
  */
  readonly tacplusOptionsNoStrictAuthorization?: boolean | cdktf.IResolvable;
  /**
  * TACACS+ service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tacplus_options_service_name System#tacplus_options_service_name}
  */
  readonly tacplusOptionsServiceName?: string;
  /**
  * Deny login if authorization request fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tacplus_options_strict_authorization System#tacplus_options_strict_authorization}
  */
  readonly tacplusOptionsStrictAuthorization?: boolean | cdktf.IResolvable;
  /**
  * In start/stop accounting packets, include `start-time`, `stop-time` and `timezone` attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tacplus_options_timestamp_and_timezone System#tacplus_options_timestamp_and_timezone}
  */
  readonly tacplusOptionsTimestampAndTimezone?: boolean | cdktf.IResolvable;
  /**
  * Time zone name or POSIX-compliant time zone string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#time_zone System#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Send trace messages to remote syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tracing_dest_override_syslog_host System#tracing_dest_override_syslog_host}
  */
  readonly tracingDestOverrideSyslogHost?: string;
  /**
  * accounting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#accounting System#accounting}
  */
  readonly accounting?: SystemAccounting;
  /**
  * archival_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#archival_configuration System#archival_configuration}
  */
  readonly archivalConfiguration?: SystemArchivalConfiguration;
  /**
  * inet6_backup_router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#inet6_backup_router System#inet6_backup_router}
  */
  readonly inet6BackupRouter?: SystemInet6BackupRouter;
  /**
  * internet_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#internet_options System#internet_options}
  */
  readonly internetOptions?: SystemInternetOptions;
  /**
  * license block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#license System#license}
  */
  readonly license?: SystemLicense;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#login System#login}
  */
  readonly login?: SystemLogin;
  /**
  * name_server_opts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#name_server_opts System#name_server_opts}
  */
  readonly nameServerOpts?: SystemNameServerOpts[] | cdktf.IResolvable;
  /**
  * ntp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ntp System#ntp}
  */
  readonly ntp?: SystemNtp;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ports System#ports}
  */
  readonly ports?: SystemPorts;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#services System#services}
  */
  readonly services?: SystemServices;
  /**
  * syslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#syslog System#syslog}
  */
  readonly syslog?: SystemSyslog;
}
export interface SystemAccountingDestinationRadiusServer {
  /**
  * RADIUS server accounting port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#accounting_port System#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * Accounting retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#accounting_retry System#accounting_retry}
  */
  readonly accountingRetry?: number;
  /**
  * Accounting request timeout period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#accounting_timeout System#accounting_timeout}
  */
  readonly accountingTimeout?: number;
  /**
  * RADIUS server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#address System#address}
  */
  readonly address: string;
  /**
  * RADIUS client dynamic request port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#dynamic_request_port System#dynamic_request_port}
  */
  readonly dynamicRequestPort?: number;
  /**
  * Maximum requests in flight to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#max_outstanding_requests System#max_outstanding_requests}
  */
  readonly maxOutstandingRequests?: number;
  /**
  * RADIUS server authentication port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#port System#port}
  */
  readonly port?: number;
  /**
  * RADIUS server preauthentication port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#preauthentication_port System#preauthentication_port}
  */
  readonly preauthenticationPort?: number;
  /**
  * Shared secret with the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#preauthentication_secret System#preauthentication_secret}
  */
  readonly preauthenticationSecret?: string;
  /**
  * Retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#retry System#retry}
  */
  readonly retry?: number;
  /**
  * Routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#routing_instance System#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Shared secret with the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#secret System#secret}
  */
  readonly secret: string;
  /**
  * Use specified address as source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#source_address System#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Request timeout period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#timeout System#timeout}
  */
  readonly timeout?: number;
}

export function systemAccountingDestinationRadiusServerToTerraform(struct?: SystemAccountingDestinationRadiusServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounting_port: cdktf.numberToTerraform(struct!.accountingPort),
    accounting_retry: cdktf.numberToTerraform(struct!.accountingRetry),
    accounting_timeout: cdktf.numberToTerraform(struct!.accountingTimeout),
    address: cdktf.stringToTerraform(struct!.address),
    dynamic_request_port: cdktf.numberToTerraform(struct!.dynamicRequestPort),
    max_outstanding_requests: cdktf.numberToTerraform(struct!.maxOutstandingRequests),
    port: cdktf.numberToTerraform(struct!.port),
    preauthentication_port: cdktf.numberToTerraform(struct!.preauthenticationPort),
    preauthentication_secret: cdktf.stringToTerraform(struct!.preauthenticationSecret),
    retry: cdktf.numberToTerraform(struct!.retry),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    secret: cdktf.stringToTerraform(struct!.secret),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function systemAccountingDestinationRadiusServerToHclTerraform(struct?: SystemAccountingDestinationRadiusServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounting_port: {
      value: cdktf.numberToHclTerraform(struct!.accountingPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accounting_retry: {
      value: cdktf.numberToHclTerraform(struct!.accountingRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accounting_timeout: {
      value: cdktf.numberToHclTerraform(struct!.accountingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_request_port: {
      value: cdktf.numberToHclTerraform(struct!.dynamicRequestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_outstanding_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxOutstandingRequests),
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
    preauthentication_port: {
      value: cdktf.numberToHclTerraform(struct!.preauthenticationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preauthentication_secret: {
      value: cdktf.stringToHclTerraform(struct!.preauthenticationSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAccountingDestinationRadiusServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAccountingDestinationRadiusServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountingPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingPort = this._accountingPort;
    }
    if (this._accountingRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingRetry = this._accountingRetry;
    }
    if (this._accountingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingTimeout = this._accountingTimeout;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._dynamicRequestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicRequestPort = this._dynamicRequestPort;
    }
    if (this._maxOutstandingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOutstandingRequests = this._maxOutstandingRequests;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preauthenticationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.preauthenticationPort = this._preauthenticationPort;
    }
    if (this._preauthenticationSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.preauthenticationSecret = this._preauthenticationSecret;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAccountingDestinationRadiusServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountingPort = undefined;
      this._accountingRetry = undefined;
      this._accountingTimeout = undefined;
      this._address = undefined;
      this._dynamicRequestPort = undefined;
      this._maxOutstandingRequests = undefined;
      this._port = undefined;
      this._preauthenticationPort = undefined;
      this._preauthenticationSecret = undefined;
      this._retry = undefined;
      this._routingInstance = undefined;
      this._secret = undefined;
      this._sourceAddress = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountingPort = value.accountingPort;
      this._accountingRetry = value.accountingRetry;
      this._accountingTimeout = value.accountingTimeout;
      this._address = value.address;
      this._dynamicRequestPort = value.dynamicRequestPort;
      this._maxOutstandingRequests = value.maxOutstandingRequests;
      this._port = value.port;
      this._preauthenticationPort = value.preauthenticationPort;
      this._preauthenticationSecret = value.preauthenticationSecret;
      this._retry = value.retry;
      this._routingInstance = value.routingInstance;
      this._secret = value.secret;
      this._sourceAddress = value.sourceAddress;
      this._timeout = value.timeout;
    }
  }

  // accounting_port - computed: false, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // accounting_retry - computed: false, optional: true, required: false
  private _accountingRetry?: number; 
  public get accountingRetry() {
    return this.getNumberAttribute('accounting_retry');
  }
  public set accountingRetry(value: number) {
    this._accountingRetry = value;
  }
  public resetAccountingRetry() {
    this._accountingRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingRetryInput() {
    return this._accountingRetry;
  }

  // accounting_timeout - computed: false, optional: true, required: false
  private _accountingTimeout?: number; 
  public get accountingTimeout() {
    return this.getNumberAttribute('accounting_timeout');
  }
  public set accountingTimeout(value: number) {
    this._accountingTimeout = value;
  }
  public resetAccountingTimeout() {
    this._accountingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingTimeoutInput() {
    return this._accountingTimeout;
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

  // dynamic_request_port - computed: false, optional: true, required: false
  private _dynamicRequestPort?: number; 
  public get dynamicRequestPort() {
    return this.getNumberAttribute('dynamic_request_port');
  }
  public set dynamicRequestPort(value: number) {
    this._dynamicRequestPort = value;
  }
  public resetDynamicRequestPort() {
    this._dynamicRequestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicRequestPortInput() {
    return this._dynamicRequestPort;
  }

  // max_outstanding_requests - computed: false, optional: true, required: false
  private _maxOutstandingRequests?: number; 
  public get maxOutstandingRequests() {
    return this.getNumberAttribute('max_outstanding_requests');
  }
  public set maxOutstandingRequests(value: number) {
    this._maxOutstandingRequests = value;
  }
  public resetMaxOutstandingRequests() {
    this._maxOutstandingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutstandingRequestsInput() {
    return this._maxOutstandingRequests;
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

  // preauthentication_port - computed: false, optional: true, required: false
  private _preauthenticationPort?: number; 
  public get preauthenticationPort() {
    return this.getNumberAttribute('preauthentication_port');
  }
  public set preauthenticationPort(value: number) {
    this._preauthenticationPort = value;
  }
  public resetPreauthenticationPort() {
    this._preauthenticationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preauthenticationPortInput() {
    return this._preauthenticationPort;
  }

  // preauthentication_secret - computed: false, optional: true, required: false
  private _preauthenticationSecret?: string; 
  public get preauthenticationSecret() {
    return this.getStringAttribute('preauthentication_secret');
  }
  public set preauthenticationSecret(value: string) {
    this._preauthenticationSecret = value;
  }
  public resetPreauthenticationSecret() {
    this._preauthenticationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preauthenticationSecretInput() {
    return this._preauthenticationSecret;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
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
}

export class SystemAccountingDestinationRadiusServerList extends cdktf.ComplexList {
  public internalValue? : SystemAccountingDestinationRadiusServer[] | cdktf.IResolvable

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
  public get(index: number): SystemAccountingDestinationRadiusServerOutputReference {
    return new SystemAccountingDestinationRadiusServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAccountingDestinationTacplusServer {
  /**
  * TACACS+ authentication server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#address System#address}
  */
  readonly address: string;
  /**
  * TACACS+ authentication server port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#port System#port}
  */
  readonly port?: number;
  /**
  * Routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#routing_instance System#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Shared secret with the authentication server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#secret System#secret}
  */
  readonly secret?: string;
  /**
  * Optimize TCP connection attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#single_connection System#single_connection}
  */
  readonly singleConnection?: boolean | cdktf.IResolvable;
  /**
  * Use specified address as source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#source_address System#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Request timeout period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#timeout System#timeout}
  */
  readonly timeout?: number;
}

export function systemAccountingDestinationTacplusServerToTerraform(struct?: SystemAccountingDestinationTacplusServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    secret: cdktf.stringToTerraform(struct!.secret),
    single_connection: cdktf.booleanToTerraform(struct!.singleConnection),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function systemAccountingDestinationTacplusServerToHclTerraform(struct?: SystemAccountingDestinationTacplusServer | cdktf.IResolvable): any {
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
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_connection: {
      value: cdktf.booleanToHclTerraform(struct!.singleConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAccountingDestinationTacplusServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAccountingDestinationTacplusServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._singleConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleConnection = this._singleConnection;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAccountingDestinationTacplusServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
      this._routingInstance = undefined;
      this._secret = undefined;
      this._singleConnection = undefined;
      this._sourceAddress = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
      this._routingInstance = value.routingInstance;
      this._secret = value.secret;
      this._singleConnection = value.singleConnection;
      this._sourceAddress = value.sourceAddress;
      this._timeout = value.timeout;
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

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // single_connection - computed: false, optional: true, required: false
  private _singleConnection?: boolean | cdktf.IResolvable; 
  public get singleConnection() {
    return this.getBooleanAttribute('single_connection');
  }
  public set singleConnection(value: boolean | cdktf.IResolvable) {
    this._singleConnection = value;
  }
  public resetSingleConnection() {
    this._singleConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleConnectionInput() {
    return this._singleConnection;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
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
}

export class SystemAccountingDestinationTacplusServerList extends cdktf.ComplexList {
  public internalValue? : SystemAccountingDestinationTacplusServer[] | cdktf.IResolvable

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
  public get(index: number): SystemAccountingDestinationTacplusServerOutputReference {
    return new SystemAccountingDestinationTacplusServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAccounting {
  /**
  * Send RADIUS accounting records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#destination_radius System#destination_radius}
  */
  readonly destinationRadius?: boolean | cdktf.IResolvable;
  /**
  * Send TACACS+ accounting records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#destination_tacplus System#destination_tacplus}
  */
  readonly destinationTacplus?: boolean | cdktf.IResolvable;
  /**
  * No. of AV pairs each of which can store a max of 250 Bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#enhanced_avs_max System#enhanced_avs_max}
  */
  readonly enhancedAvsMax?: number;
  /**
  * Events to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#events System#events}
  */
  readonly events?: string[];
  /**
  * destination_radius_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#destination_radius_server System#destination_radius_server}
  */
  readonly destinationRadiusServer?: SystemAccountingDestinationRadiusServer[] | cdktf.IResolvable;
  /**
  * destination_tacplus_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#destination_tacplus_server System#destination_tacplus_server}
  */
  readonly destinationTacplusServer?: SystemAccountingDestinationTacplusServer[] | cdktf.IResolvable;
}

export function systemAccountingToTerraform(struct?: SystemAccounting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_radius: cdktf.booleanToTerraform(struct!.destinationRadius),
    destination_tacplus: cdktf.booleanToTerraform(struct!.destinationTacplus),
    enhanced_avs_max: cdktf.numberToTerraform(struct!.enhancedAvsMax),
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    destination_radius_server: cdktf.listMapper(systemAccountingDestinationRadiusServerToTerraform, true)(struct!.destinationRadiusServer),
    destination_tacplus_server: cdktf.listMapper(systemAccountingDestinationTacplusServerToTerraform, true)(struct!.destinationTacplusServer),
  }
}


export function systemAccountingToHclTerraform(struct?: SystemAccounting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_radius: {
      value: cdktf.booleanToHclTerraform(struct!.destinationRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_tacplus: {
      value: cdktf.booleanToHclTerraform(struct!.destinationTacplus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enhanced_avs_max: {
      value: cdktf.numberToHclTerraform(struct!.enhancedAvsMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_radius_server: {
      value: cdktf.listMapperHcl(systemAccountingDestinationRadiusServerToHclTerraform, true)(struct!.destinationRadiusServer),
      isBlock: true,
      type: "list",
      storageClassType: "SystemAccountingDestinationRadiusServerList",
    },
    destination_tacplus_server: {
      value: cdktf.listMapperHcl(systemAccountingDestinationTacplusServerToHclTerraform, true)(struct!.destinationTacplusServer),
      isBlock: true,
      type: "list",
      storageClassType: "SystemAccountingDestinationTacplusServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAccountingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemAccounting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRadius = this._destinationRadius;
    }
    if (this._destinationTacplus !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTacplus = this._destinationTacplus;
    }
    if (this._enhancedAvsMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedAvsMax = this._enhancedAvsMax;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._destinationRadiusServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRadiusServer = this._destinationRadiusServer?.internalValue;
    }
    if (this._destinationTacplusServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTacplusServer = this._destinationTacplusServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAccounting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationRadius = undefined;
      this._destinationTacplus = undefined;
      this._enhancedAvsMax = undefined;
      this._events = undefined;
      this._destinationRadiusServer.internalValue = undefined;
      this._destinationTacplusServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationRadius = value.destinationRadius;
      this._destinationTacplus = value.destinationTacplus;
      this._enhancedAvsMax = value.enhancedAvsMax;
      this._events = value.events;
      this._destinationRadiusServer.internalValue = value.destinationRadiusServer;
      this._destinationTacplusServer.internalValue = value.destinationTacplusServer;
    }
  }

  // destination_radius - computed: false, optional: true, required: false
  private _destinationRadius?: boolean | cdktf.IResolvable; 
  public get destinationRadius() {
    return this.getBooleanAttribute('destination_radius');
  }
  public set destinationRadius(value: boolean | cdktf.IResolvable) {
    this._destinationRadius = value;
  }
  public resetDestinationRadius() {
    this._destinationRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRadiusInput() {
    return this._destinationRadius;
  }

  // destination_tacplus - computed: false, optional: true, required: false
  private _destinationTacplus?: boolean | cdktf.IResolvable; 
  public get destinationTacplus() {
    return this.getBooleanAttribute('destination_tacplus');
  }
  public set destinationTacplus(value: boolean | cdktf.IResolvable) {
    this._destinationTacplus = value;
  }
  public resetDestinationTacplus() {
    this._destinationTacplus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTacplusInput() {
    return this._destinationTacplus;
  }

  // enhanced_avs_max - computed: false, optional: true, required: false
  private _enhancedAvsMax?: number; 
  public get enhancedAvsMax() {
    return this.getNumberAttribute('enhanced_avs_max');
  }
  public set enhancedAvsMax(value: number) {
    this._enhancedAvsMax = value;
  }
  public resetEnhancedAvsMax() {
    this._enhancedAvsMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedAvsMaxInput() {
    return this._enhancedAvsMax;
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // destination_radius_server - computed: false, optional: true, required: false
  private _destinationRadiusServer = new SystemAccountingDestinationRadiusServerList(this, "destination_radius_server", false);
  public get destinationRadiusServer() {
    return this._destinationRadiusServer;
  }
  public putDestinationRadiusServer(value: SystemAccountingDestinationRadiusServer[] | cdktf.IResolvable) {
    this._destinationRadiusServer.internalValue = value;
  }
  public resetDestinationRadiusServer() {
    this._destinationRadiusServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRadiusServerInput() {
    return this._destinationRadiusServer.internalValue;
  }

  // destination_tacplus_server - computed: false, optional: true, required: false
  private _destinationTacplusServer = new SystemAccountingDestinationTacplusServerList(this, "destination_tacplus_server", false);
  public get destinationTacplusServer() {
    return this._destinationTacplusServer;
  }
  public putDestinationTacplusServer(value: SystemAccountingDestinationTacplusServer[] | cdktf.IResolvable) {
    this._destinationTacplusServer.internalValue = value;
  }
  public resetDestinationTacplusServer() {
    this._destinationTacplusServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTacplusServerInput() {
    return this._destinationTacplusServer.internalValue;
  }
}
export interface SystemArchivalConfigurationArchiveSite {
  /**
  * Password for login into the archive site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#password System#password}
  */
  readonly password?: string;
  /**
  * URLs to receive configuration files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#url System#url}
  */
  readonly url: string;
}

export function systemArchivalConfigurationArchiveSiteToTerraform(struct?: SystemArchivalConfigurationArchiveSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function systemArchivalConfigurationArchiveSiteToHclTerraform(struct?: SystemArchivalConfigurationArchiveSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemArchivalConfigurationArchiveSiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemArchivalConfigurationArchiveSite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemArchivalConfigurationArchiveSite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._url = value.url;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class SystemArchivalConfigurationArchiveSiteList extends cdktf.ComplexList {
  public internalValue? : SystemArchivalConfigurationArchiveSite[] | cdktf.IResolvable

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
  public get(index: number): SystemArchivalConfigurationArchiveSiteOutputReference {
    return new SystemArchivalConfigurationArchiveSiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemArchivalConfiguration {
  /**
  * Frequency at which file transfer happens (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#transfer_interval System#transfer_interval}
  */
  readonly transferInterval?: number;
  /**
  * Transfer after each commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#transfer_on_commit System#transfer_on_commit}
  */
  readonly transferOnCommit?: boolean | cdktf.IResolvable;
  /**
  * archive_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#archive_site System#archive_site}
  */
  readonly archiveSite?: SystemArchivalConfigurationArchiveSite[] | cdktf.IResolvable;
}

export function systemArchivalConfigurationToTerraform(struct?: SystemArchivalConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transfer_interval: cdktf.numberToTerraform(struct!.transferInterval),
    transfer_on_commit: cdktf.booleanToTerraform(struct!.transferOnCommit),
    archive_site: cdktf.listMapper(systemArchivalConfigurationArchiveSiteToTerraform, true)(struct!.archiveSite),
  }
}


export function systemArchivalConfigurationToHclTerraform(struct?: SystemArchivalConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transfer_interval: {
      value: cdktf.numberToHclTerraform(struct!.transferInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transfer_on_commit: {
      value: cdktf.booleanToHclTerraform(struct!.transferOnCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    archive_site: {
      value: cdktf.listMapperHcl(systemArchivalConfigurationArchiveSiteToHclTerraform, true)(struct!.archiveSite),
      isBlock: true,
      type: "list",
      storageClassType: "SystemArchivalConfigurationArchiveSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemArchivalConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemArchivalConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transferInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferInterval = this._transferInterval;
    }
    if (this._transferOnCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferOnCommit = this._transferOnCommit;
    }
    if (this._archiveSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveSite = this._archiveSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemArchivalConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transferInterval = undefined;
      this._transferOnCommit = undefined;
      this._archiveSite.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transferInterval = value.transferInterval;
      this._transferOnCommit = value.transferOnCommit;
      this._archiveSite.internalValue = value.archiveSite;
    }
  }

  // transfer_interval - computed: false, optional: true, required: false
  private _transferInterval?: number; 
  public get transferInterval() {
    return this.getNumberAttribute('transfer_interval');
  }
  public set transferInterval(value: number) {
    this._transferInterval = value;
  }
  public resetTransferInterval() {
    this._transferInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferIntervalInput() {
    return this._transferInterval;
  }

  // transfer_on_commit - computed: false, optional: true, required: false
  private _transferOnCommit?: boolean | cdktf.IResolvable; 
  public get transferOnCommit() {
    return this.getBooleanAttribute('transfer_on_commit');
  }
  public set transferOnCommit(value: boolean | cdktf.IResolvable) {
    this._transferOnCommit = value;
  }
  public resetTransferOnCommit() {
    this._transferOnCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferOnCommitInput() {
    return this._transferOnCommit;
  }

  // archive_site - computed: false, optional: true, required: false
  private _archiveSite = new SystemArchivalConfigurationArchiveSiteList(this, "archive_site", false);
  public get archiveSite() {
    return this._archiveSite;
  }
  public putArchiveSite(value: SystemArchivalConfigurationArchiveSite[] | cdktf.IResolvable) {
    this._archiveSite.internalValue = value;
  }
  public resetArchiveSite() {
    this._archiveSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveSiteInput() {
    return this._archiveSite.internalValue;
  }
}
export interface SystemInet6BackupRouter {
  /**
  * Address of router to use while booting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#address System#address}
  */
  readonly address?: string;
  /**
  * Destination networks reachable through the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#destination System#destination}
  */
  readonly destination?: string[];
}

export function systemInet6BackupRouterToTerraform(struct?: SystemInet6BackupRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    destination: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destination),
  }
}


export function systemInet6BackupRouterToHclTerraform(struct?: SystemInet6BackupRouter | cdktf.IResolvable): any {
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
    destination: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destination),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemInet6BackupRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemInet6BackupRouter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemInet6BackupRouter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._destination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._destination = value.destination;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string[]; 
  public get destination() {
    return cdktf.Fn.tolist(this.getListAttribute('destination'));
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface SystemInternetOptionsIcmpv4RateLimit {
  /**
  * ICMP rate-limiting maximum bucket size (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#bucket_size System#bucket_size}
  */
  readonly bucketSize?: number;
  /**
  * ICMP rate-limiting packets earned per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#packet_rate System#packet_rate}
  */
  readonly packetRate?: number;
}

export function systemInternetOptionsIcmpv4RateLimitToTerraform(struct?: SystemInternetOptionsIcmpv4RateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_size: cdktf.numberToTerraform(struct!.bucketSize),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
  }
}


export function systemInternetOptionsIcmpv4RateLimitToHclTerraform(struct?: SystemInternetOptionsIcmpv4RateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_size: {
      value: cdktf.numberToHclTerraform(struct!.bucketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemInternetOptionsIcmpv4RateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemInternetOptionsIcmpv4RateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketSize = this._bucketSize;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemInternetOptionsIcmpv4RateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketSize = undefined;
      this._packetRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketSize = value.bucketSize;
      this._packetRate = value.packetRate;
    }
  }

  // bucket_size - computed: false, optional: true, required: false
  private _bucketSize?: number; 
  public get bucketSize() {
    return this.getNumberAttribute('bucket_size');
  }
  public set bucketSize(value: number) {
    this._bucketSize = value;
  }
  public resetBucketSize() {
    this._bucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSizeInput() {
    return this._bucketSize;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }
}
export interface SystemInternetOptionsIcmpv6RateLimit {
  /**
  * ICMPv6 rate-limiting maximum bucket size (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#bucket_size System#bucket_size}
  */
  readonly bucketSize?: number;
  /**
  * ICMPv6 rate-limiting packets earned per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#packet_rate System#packet_rate}
  */
  readonly packetRate?: number;
}

export function systemInternetOptionsIcmpv6RateLimitToTerraform(struct?: SystemInternetOptionsIcmpv6RateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_size: cdktf.numberToTerraform(struct!.bucketSize),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
  }
}


export function systemInternetOptionsIcmpv6RateLimitToHclTerraform(struct?: SystemInternetOptionsIcmpv6RateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_size: {
      value: cdktf.numberToHclTerraform(struct!.bucketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemInternetOptionsIcmpv6RateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemInternetOptionsIcmpv6RateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketSize = this._bucketSize;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemInternetOptionsIcmpv6RateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketSize = undefined;
      this._packetRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketSize = value.bucketSize;
      this._packetRate = value.packetRate;
    }
  }

  // bucket_size - computed: false, optional: true, required: false
  private _bucketSize?: number; 
  public get bucketSize() {
    return this.getNumberAttribute('bucket_size');
  }
  public set bucketSize(value: number) {
    this._bucketSize = value;
  }
  public resetBucketSize() {
    this._bucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSizeInput() {
    return this._bucketSize;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }
}
export interface SystemInternetOptions {
  /**
  * Enable path MTU discovery for GRE tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#gre_path_mtu_discovery System#gre_path_mtu_discovery}
  */
  readonly grePathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Enable path MTU discovery for IP-IP tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ipip_path_mtu_discovery System#ipip_path_mtu_discovery}
  */
  readonly ipipPathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * IPv6 Duplicate address detection transmits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ipv6_duplicate_addr_detection_transmits System#ipv6_duplicate_addr_detection_transmits}
  */
  readonly ipv6DuplicateAddrDetectionTransmits?: number;
  /**
  * Enable IPv6 Path MTU discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ipv6_path_mtu_discovery System#ipv6_path_mtu_discovery}
  */
  readonly ipv6PathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * IPv6 Path MTU Discovery timeout (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ipv6_path_mtu_discovery_timeout System#ipv6_path_mtu_discovery_timeout}
  */
  readonly ipv6PathMtuDiscoveryTimeout?: number;
  /**
  * Enable dropping IPv6 packets with zero hop-limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ipv6_reject_zero_hop_limit System#ipv6_reject_zero_hop_limit}
  */
  readonly ipv6RejectZeroHopLimit?: boolean | cdktf.IResolvable;
  /**
  * Don't enable path MTU discovery for GRE tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_gre_path_mtu_discovery System#no_gre_path_mtu_discovery}
  */
  readonly noGrePathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Don't enable path MTU discovery for IP-IP tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_ipip_path_mtu_discovery System#no_ipip_path_mtu_discovery}
  */
  readonly noIpipPathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Don't enable IPv6 Path MTU discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_ipv6_path_mtu_discovery System#no_ipv6_path_mtu_discovery}
  */
  readonly noIpv6PathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Don't enable dropping IPv6 packets with zero hop-limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_ipv6_reject_zero_hop_limit System#no_ipv6_reject_zero_hop_limit}
  */
  readonly noIpv6RejectZeroHopLimit?: boolean | cdktf.IResolvable;
  /**
  * Don't enable Path MTU discovery on TCP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_path_mtu_discovery System#no_path_mtu_discovery}
  */
  readonly noPathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Don't react to incoming ICMP Source Quench messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_source_quench System#no_source_quench}
  */
  readonly noSourceQuench?: boolean | cdktf.IResolvable;
  /**
  * Do not send RST TCP packet for packets sent to non-listening ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_tcp_reset System#no_tcp_reset}
  */
  readonly noTcpReset?: string;
  /**
  * Disable RFC 1323 TCP extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_tcp_rfc1323 System#no_tcp_rfc1323}
  */
  readonly noTcpRfc1323?: boolean | cdktf.IResolvable;
  /**
  * Disable RFC 1323 Protection Against Wrapped Sequence Number extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_tcp_rfc1323_paws System#no_tcp_rfc1323_paws}
  */
  readonly noTcpRfc1323Paws?: boolean | cdktf.IResolvable;
  /**
  * Enable Path MTU discovery on TCP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#path_mtu_discovery System#path_mtu_discovery}
  */
  readonly pathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Specify upper limit of source port selection range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#source_port_upper_limit System#source_port_upper_limit}
  */
  readonly sourcePortUpperLimit?: number;
  /**
  * React to incoming ICMP Source Quench messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#source_quench System#source_quench}
  */
  readonly sourceQuench?: boolean | cdktf.IResolvable;
  /**
  * Drop TCP packets that have both SYN and FIN flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tcp_drop_synfin_set System#tcp_drop_synfin_set}
  */
  readonly tcpDropSynfinSet?: boolean | cdktf.IResolvable;
  /**
  *  Maximum value of TCP MSS for IPV4 traffic (bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tcp_mss System#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * icmpv4_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#icmpv4_rate_limit System#icmpv4_rate_limit}
  */
  readonly icmpv4RateLimit?: SystemInternetOptionsIcmpv4RateLimit;
  /**
  * icmpv6_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#icmpv6_rate_limit System#icmpv6_rate_limit}
  */
  readonly icmpv6RateLimit?: SystemInternetOptionsIcmpv6RateLimit;
}

export function systemInternetOptionsToTerraform(struct?: SystemInternetOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_path_mtu_discovery: cdktf.booleanToTerraform(struct!.grePathMtuDiscovery),
    ipip_path_mtu_discovery: cdktf.booleanToTerraform(struct!.ipipPathMtuDiscovery),
    ipv6_duplicate_addr_detection_transmits: cdktf.numberToTerraform(struct!.ipv6DuplicateAddrDetectionTransmits),
    ipv6_path_mtu_discovery: cdktf.booleanToTerraform(struct!.ipv6PathMtuDiscovery),
    ipv6_path_mtu_discovery_timeout: cdktf.numberToTerraform(struct!.ipv6PathMtuDiscoveryTimeout),
    ipv6_reject_zero_hop_limit: cdktf.booleanToTerraform(struct!.ipv6RejectZeroHopLimit),
    no_gre_path_mtu_discovery: cdktf.booleanToTerraform(struct!.noGrePathMtuDiscovery),
    no_ipip_path_mtu_discovery: cdktf.booleanToTerraform(struct!.noIpipPathMtuDiscovery),
    no_ipv6_path_mtu_discovery: cdktf.booleanToTerraform(struct!.noIpv6PathMtuDiscovery),
    no_ipv6_reject_zero_hop_limit: cdktf.booleanToTerraform(struct!.noIpv6RejectZeroHopLimit),
    no_path_mtu_discovery: cdktf.booleanToTerraform(struct!.noPathMtuDiscovery),
    no_source_quench: cdktf.booleanToTerraform(struct!.noSourceQuench),
    no_tcp_reset: cdktf.stringToTerraform(struct!.noTcpReset),
    no_tcp_rfc1323: cdktf.booleanToTerraform(struct!.noTcpRfc1323),
    no_tcp_rfc1323_paws: cdktf.booleanToTerraform(struct!.noTcpRfc1323Paws),
    path_mtu_discovery: cdktf.booleanToTerraform(struct!.pathMtuDiscovery),
    source_port_upper_limit: cdktf.numberToTerraform(struct!.sourcePortUpperLimit),
    source_quench: cdktf.booleanToTerraform(struct!.sourceQuench),
    tcp_drop_synfin_set: cdktf.booleanToTerraform(struct!.tcpDropSynfinSet),
    tcp_mss: cdktf.numberToTerraform(struct!.tcpMss),
    icmpv4_rate_limit: systemInternetOptionsIcmpv4RateLimitToTerraform(struct!.icmpv4RateLimit),
    icmpv6_rate_limit: systemInternetOptionsIcmpv6RateLimitToTerraform(struct!.icmpv6RateLimit),
  }
}


export function systemInternetOptionsToHclTerraform(struct?: SystemInternetOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.grePathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipip_path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.ipipPathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_duplicate_addr_detection_transmits: {
      value: cdktf.numberToHclTerraform(struct!.ipv6DuplicateAddrDetectionTransmits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6PathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_path_mtu_discovery_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PathMtuDiscoveryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_reject_zero_hop_limit: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6RejectZeroHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_gre_path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.noGrePathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipip_path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.noIpipPathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6_path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6PathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6_reject_zero_hop_limit: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6RejectZeroHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.noPathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_source_quench: {
      value: cdktf.booleanToHclTerraform(struct!.noSourceQuench),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_tcp_reset: {
      value: cdktf.stringToHclTerraform(struct!.noTcpReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_tcp_rfc1323: {
      value: cdktf.booleanToHclTerraform(struct!.noTcpRfc1323),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_tcp_rfc1323_paws: {
      value: cdktf.booleanToHclTerraform(struct!.noTcpRfc1323Paws),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.pathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_port_upper_limit: {
      value: cdktf.numberToHclTerraform(struct!.sourcePortUpperLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_quench: {
      value: cdktf.booleanToHclTerraform(struct!.sourceQuench),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_drop_synfin_set: {
      value: cdktf.booleanToHclTerraform(struct!.tcpDropSynfinSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_mss: {
      value: cdktf.numberToHclTerraform(struct!.tcpMss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv4_rate_limit: {
      value: systemInternetOptionsIcmpv4RateLimitToHclTerraform(struct!.icmpv4RateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemInternetOptionsIcmpv4RateLimit",
    },
    icmpv6_rate_limit: {
      value: systemInternetOptionsIcmpv6RateLimitToHclTerraform(struct!.icmpv6RateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemInternetOptionsIcmpv6RateLimit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemInternetOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemInternetOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grePathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.grePathMtuDiscovery = this._grePathMtuDiscovery;
    }
    if (this._ipipPathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipPathMtuDiscovery = this._ipipPathMtuDiscovery;
    }
    if (this._ipv6DuplicateAddrDetectionTransmits !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DuplicateAddrDetectionTransmits = this._ipv6DuplicateAddrDetectionTransmits;
    }
    if (this._ipv6PathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PathMtuDiscovery = this._ipv6PathMtuDiscovery;
    }
    if (this._ipv6PathMtuDiscoveryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PathMtuDiscoveryTimeout = this._ipv6PathMtuDiscoveryTimeout;
    }
    if (this._ipv6RejectZeroHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6RejectZeroHopLimit = this._ipv6RejectZeroHopLimit;
    }
    if (this._noGrePathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGrePathMtuDiscovery = this._noGrePathMtuDiscovery;
    }
    if (this._noIpipPathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpipPathMtuDiscovery = this._noIpipPathMtuDiscovery;
    }
    if (this._noIpv6PathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6PathMtuDiscovery = this._noIpv6PathMtuDiscovery;
    }
    if (this._noIpv6RejectZeroHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6RejectZeroHopLimit = this._noIpv6RejectZeroHopLimit;
    }
    if (this._noPathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPathMtuDiscovery = this._noPathMtuDiscovery;
    }
    if (this._noSourceQuench !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSourceQuench = this._noSourceQuench;
    }
    if (this._noTcpReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTcpReset = this._noTcpReset;
    }
    if (this._noTcpRfc1323 !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTcpRfc1323 = this._noTcpRfc1323;
    }
    if (this._noTcpRfc1323Paws !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTcpRfc1323Paws = this._noTcpRfc1323Paws;
    }
    if (this._pathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMtuDiscovery = this._pathMtuDiscovery;
    }
    if (this._sourcePortUpperLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortUpperLimit = this._sourcePortUpperLimit;
    }
    if (this._sourceQuench !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceQuench = this._sourceQuench;
    }
    if (this._tcpDropSynfinSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpDropSynfinSet = this._tcpDropSynfinSet;
    }
    if (this._tcpMss !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMss = this._tcpMss;
    }
    if (this._icmpv4RateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv4RateLimit = this._icmpv4RateLimit?.internalValue;
    }
    if (this._icmpv6RateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6RateLimit = this._icmpv6RateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemInternetOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grePathMtuDiscovery = undefined;
      this._ipipPathMtuDiscovery = undefined;
      this._ipv6DuplicateAddrDetectionTransmits = undefined;
      this._ipv6PathMtuDiscovery = undefined;
      this._ipv6PathMtuDiscoveryTimeout = undefined;
      this._ipv6RejectZeroHopLimit = undefined;
      this._noGrePathMtuDiscovery = undefined;
      this._noIpipPathMtuDiscovery = undefined;
      this._noIpv6PathMtuDiscovery = undefined;
      this._noIpv6RejectZeroHopLimit = undefined;
      this._noPathMtuDiscovery = undefined;
      this._noSourceQuench = undefined;
      this._noTcpReset = undefined;
      this._noTcpRfc1323 = undefined;
      this._noTcpRfc1323Paws = undefined;
      this._pathMtuDiscovery = undefined;
      this._sourcePortUpperLimit = undefined;
      this._sourceQuench = undefined;
      this._tcpDropSynfinSet = undefined;
      this._tcpMss = undefined;
      this._icmpv4RateLimit.internalValue = undefined;
      this._icmpv6RateLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grePathMtuDiscovery = value.grePathMtuDiscovery;
      this._ipipPathMtuDiscovery = value.ipipPathMtuDiscovery;
      this._ipv6DuplicateAddrDetectionTransmits = value.ipv6DuplicateAddrDetectionTransmits;
      this._ipv6PathMtuDiscovery = value.ipv6PathMtuDiscovery;
      this._ipv6PathMtuDiscoveryTimeout = value.ipv6PathMtuDiscoveryTimeout;
      this._ipv6RejectZeroHopLimit = value.ipv6RejectZeroHopLimit;
      this._noGrePathMtuDiscovery = value.noGrePathMtuDiscovery;
      this._noIpipPathMtuDiscovery = value.noIpipPathMtuDiscovery;
      this._noIpv6PathMtuDiscovery = value.noIpv6PathMtuDiscovery;
      this._noIpv6RejectZeroHopLimit = value.noIpv6RejectZeroHopLimit;
      this._noPathMtuDiscovery = value.noPathMtuDiscovery;
      this._noSourceQuench = value.noSourceQuench;
      this._noTcpReset = value.noTcpReset;
      this._noTcpRfc1323 = value.noTcpRfc1323;
      this._noTcpRfc1323Paws = value.noTcpRfc1323Paws;
      this._pathMtuDiscovery = value.pathMtuDiscovery;
      this._sourcePortUpperLimit = value.sourcePortUpperLimit;
      this._sourceQuench = value.sourceQuench;
      this._tcpDropSynfinSet = value.tcpDropSynfinSet;
      this._tcpMss = value.tcpMss;
      this._icmpv4RateLimit.internalValue = value.icmpv4RateLimit;
      this._icmpv6RateLimit.internalValue = value.icmpv6RateLimit;
    }
  }

  // gre_path_mtu_discovery - computed: false, optional: true, required: false
  private _grePathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get grePathMtuDiscovery() {
    return this.getBooleanAttribute('gre_path_mtu_discovery');
  }
  public set grePathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._grePathMtuDiscovery = value;
  }
  public resetGrePathMtuDiscovery() {
    this._grePathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grePathMtuDiscoveryInput() {
    return this._grePathMtuDiscovery;
  }

  // ipip_path_mtu_discovery - computed: false, optional: true, required: false
  private _ipipPathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get ipipPathMtuDiscovery() {
    return this.getBooleanAttribute('ipip_path_mtu_discovery');
  }
  public set ipipPathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._ipipPathMtuDiscovery = value;
  }
  public resetIpipPathMtuDiscovery() {
    this._ipipPathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipPathMtuDiscoveryInput() {
    return this._ipipPathMtuDiscovery;
  }

  // ipv6_duplicate_addr_detection_transmits - computed: false, optional: true, required: false
  private _ipv6DuplicateAddrDetectionTransmits?: number; 
  public get ipv6DuplicateAddrDetectionTransmits() {
    return this.getNumberAttribute('ipv6_duplicate_addr_detection_transmits');
  }
  public set ipv6DuplicateAddrDetectionTransmits(value: number) {
    this._ipv6DuplicateAddrDetectionTransmits = value;
  }
  public resetIpv6DuplicateAddrDetectionTransmits() {
    this._ipv6DuplicateAddrDetectionTransmits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DuplicateAddrDetectionTransmitsInput() {
    return this._ipv6DuplicateAddrDetectionTransmits;
  }

  // ipv6_path_mtu_discovery - computed: false, optional: true, required: false
  private _ipv6PathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get ipv6PathMtuDiscovery() {
    return this.getBooleanAttribute('ipv6_path_mtu_discovery');
  }
  public set ipv6PathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._ipv6PathMtuDiscovery = value;
  }
  public resetIpv6PathMtuDiscovery() {
    this._ipv6PathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PathMtuDiscoveryInput() {
    return this._ipv6PathMtuDiscovery;
  }

  // ipv6_path_mtu_discovery_timeout - computed: false, optional: true, required: false
  private _ipv6PathMtuDiscoveryTimeout?: number; 
  public get ipv6PathMtuDiscoveryTimeout() {
    return this.getNumberAttribute('ipv6_path_mtu_discovery_timeout');
  }
  public set ipv6PathMtuDiscoveryTimeout(value: number) {
    this._ipv6PathMtuDiscoveryTimeout = value;
  }
  public resetIpv6PathMtuDiscoveryTimeout() {
    this._ipv6PathMtuDiscoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PathMtuDiscoveryTimeoutInput() {
    return this._ipv6PathMtuDiscoveryTimeout;
  }

  // ipv6_reject_zero_hop_limit - computed: false, optional: true, required: false
  private _ipv6RejectZeroHopLimit?: boolean | cdktf.IResolvable; 
  public get ipv6RejectZeroHopLimit() {
    return this.getBooleanAttribute('ipv6_reject_zero_hop_limit');
  }
  public set ipv6RejectZeroHopLimit(value: boolean | cdktf.IResolvable) {
    this._ipv6RejectZeroHopLimit = value;
  }
  public resetIpv6RejectZeroHopLimit() {
    this._ipv6RejectZeroHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RejectZeroHopLimitInput() {
    return this._ipv6RejectZeroHopLimit;
  }

  // no_gre_path_mtu_discovery - computed: false, optional: true, required: false
  private _noGrePathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get noGrePathMtuDiscovery() {
    return this.getBooleanAttribute('no_gre_path_mtu_discovery');
  }
  public set noGrePathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._noGrePathMtuDiscovery = value;
  }
  public resetNoGrePathMtuDiscovery() {
    this._noGrePathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGrePathMtuDiscoveryInput() {
    return this._noGrePathMtuDiscovery;
  }

  // no_ipip_path_mtu_discovery - computed: false, optional: true, required: false
  private _noIpipPathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get noIpipPathMtuDiscovery() {
    return this.getBooleanAttribute('no_ipip_path_mtu_discovery');
  }
  public set noIpipPathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._noIpipPathMtuDiscovery = value;
  }
  public resetNoIpipPathMtuDiscovery() {
    this._noIpipPathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpipPathMtuDiscoveryInput() {
    return this._noIpipPathMtuDiscovery;
  }

  // no_ipv6_path_mtu_discovery - computed: false, optional: true, required: false
  private _noIpv6PathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get noIpv6PathMtuDiscovery() {
    return this.getBooleanAttribute('no_ipv6_path_mtu_discovery');
  }
  public set noIpv6PathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._noIpv6PathMtuDiscovery = value;
  }
  public resetNoIpv6PathMtuDiscovery() {
    this._noIpv6PathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6PathMtuDiscoveryInput() {
    return this._noIpv6PathMtuDiscovery;
  }

  // no_ipv6_reject_zero_hop_limit - computed: false, optional: true, required: false
  private _noIpv6RejectZeroHopLimit?: boolean | cdktf.IResolvable; 
  public get noIpv6RejectZeroHopLimit() {
    return this.getBooleanAttribute('no_ipv6_reject_zero_hop_limit');
  }
  public set noIpv6RejectZeroHopLimit(value: boolean | cdktf.IResolvable) {
    this._noIpv6RejectZeroHopLimit = value;
  }
  public resetNoIpv6RejectZeroHopLimit() {
    this._noIpv6RejectZeroHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6RejectZeroHopLimitInput() {
    return this._noIpv6RejectZeroHopLimit;
  }

  // no_path_mtu_discovery - computed: false, optional: true, required: false
  private _noPathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get noPathMtuDiscovery() {
    return this.getBooleanAttribute('no_path_mtu_discovery');
  }
  public set noPathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._noPathMtuDiscovery = value;
  }
  public resetNoPathMtuDiscovery() {
    this._noPathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPathMtuDiscoveryInput() {
    return this._noPathMtuDiscovery;
  }

  // no_source_quench - computed: false, optional: true, required: false
  private _noSourceQuench?: boolean | cdktf.IResolvable; 
  public get noSourceQuench() {
    return this.getBooleanAttribute('no_source_quench');
  }
  public set noSourceQuench(value: boolean | cdktf.IResolvable) {
    this._noSourceQuench = value;
  }
  public resetNoSourceQuench() {
    this._noSourceQuench = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSourceQuenchInput() {
    return this._noSourceQuench;
  }

  // no_tcp_reset - computed: false, optional: true, required: false
  private _noTcpReset?: string; 
  public get noTcpReset() {
    return this.getStringAttribute('no_tcp_reset');
  }
  public set noTcpReset(value: string) {
    this._noTcpReset = value;
  }
  public resetNoTcpReset() {
    this._noTcpReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTcpResetInput() {
    return this._noTcpReset;
  }

  // no_tcp_rfc1323 - computed: false, optional: true, required: false
  private _noTcpRfc1323?: boolean | cdktf.IResolvable; 
  public get noTcpRfc1323() {
    return this.getBooleanAttribute('no_tcp_rfc1323');
  }
  public set noTcpRfc1323(value: boolean | cdktf.IResolvable) {
    this._noTcpRfc1323 = value;
  }
  public resetNoTcpRfc1323() {
    this._noTcpRfc1323 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTcpRfc1323Input() {
    return this._noTcpRfc1323;
  }

  // no_tcp_rfc1323_paws - computed: false, optional: true, required: false
  private _noTcpRfc1323Paws?: boolean | cdktf.IResolvable; 
  public get noTcpRfc1323Paws() {
    return this.getBooleanAttribute('no_tcp_rfc1323_paws');
  }
  public set noTcpRfc1323Paws(value: boolean | cdktf.IResolvable) {
    this._noTcpRfc1323Paws = value;
  }
  public resetNoTcpRfc1323Paws() {
    this._noTcpRfc1323Paws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTcpRfc1323PawsInput() {
    return this._noTcpRfc1323Paws;
  }

  // path_mtu_discovery - computed: false, optional: true, required: false
  private _pathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get pathMtuDiscovery() {
    return this.getBooleanAttribute('path_mtu_discovery');
  }
  public set pathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._pathMtuDiscovery = value;
  }
  public resetPathMtuDiscovery() {
    this._pathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMtuDiscoveryInput() {
    return this._pathMtuDiscovery;
  }

  // source_port_upper_limit - computed: false, optional: true, required: false
  private _sourcePortUpperLimit?: number; 
  public get sourcePortUpperLimit() {
    return this.getNumberAttribute('source_port_upper_limit');
  }
  public set sourcePortUpperLimit(value: number) {
    this._sourcePortUpperLimit = value;
  }
  public resetSourcePortUpperLimit() {
    this._sourcePortUpperLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortUpperLimitInput() {
    return this._sourcePortUpperLimit;
  }

  // source_quench - computed: false, optional: true, required: false
  private _sourceQuench?: boolean | cdktf.IResolvable; 
  public get sourceQuench() {
    return this.getBooleanAttribute('source_quench');
  }
  public set sourceQuench(value: boolean | cdktf.IResolvable) {
    this._sourceQuench = value;
  }
  public resetSourceQuench() {
    this._sourceQuench = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceQuenchInput() {
    return this._sourceQuench;
  }

  // tcp_drop_synfin_set - computed: false, optional: true, required: false
  private _tcpDropSynfinSet?: boolean | cdktf.IResolvable; 
  public get tcpDropSynfinSet() {
    return this.getBooleanAttribute('tcp_drop_synfin_set');
  }
  public set tcpDropSynfinSet(value: boolean | cdktf.IResolvable) {
    this._tcpDropSynfinSet = value;
  }
  public resetTcpDropSynfinSet() {
    this._tcpDropSynfinSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDropSynfinSetInput() {
    return this._tcpDropSynfinSet;
  }

  // tcp_mss - computed: false, optional: true, required: false
  private _tcpMss?: number; 
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }
  public set tcpMss(value: number) {
    this._tcpMss = value;
  }
  public resetTcpMss() {
    this._tcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssInput() {
    return this._tcpMss;
  }

  // icmpv4_rate_limit - computed: false, optional: true, required: false
  private _icmpv4RateLimit = new SystemInternetOptionsIcmpv4RateLimitOutputReference(this, "icmpv4_rate_limit");
  public get icmpv4RateLimit() {
    return this._icmpv4RateLimit;
  }
  public putIcmpv4RateLimit(value: SystemInternetOptionsIcmpv4RateLimit) {
    this._icmpv4RateLimit.internalValue = value;
  }
  public resetIcmpv4RateLimit() {
    this._icmpv4RateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv4RateLimitInput() {
    return this._icmpv4RateLimit.internalValue;
  }

  // icmpv6_rate_limit - computed: false, optional: true, required: false
  private _icmpv6RateLimit = new SystemInternetOptionsIcmpv6RateLimitOutputReference(this, "icmpv6_rate_limit");
  public get icmpv6RateLimit() {
    return this._icmpv6RateLimit;
  }
  public putIcmpv6RateLimit(value: SystemInternetOptionsIcmpv6RateLimit) {
    this._icmpv6RateLimit.internalValue = value;
  }
  public resetIcmpv6RateLimit() {
    this._icmpv6RateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RateLimitInput() {
    return this._icmpv6RateLimit.internalValue;
  }
}
export interface SystemLicense {
  /**
  * Enable autoupdate license keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#autoupdate System#autoupdate}
  */
  readonly autoupdate?: boolean | cdktf.IResolvable;
  /**
  * Password for autoupdate license keys from license servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#autoupdate_password System#autoupdate_password}
  */
  readonly autoupdatePassword?: string;
  /**
  * Url for autoupdate license keys from license servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#autoupdate_url System#autoupdate_url}
  */
  readonly autoupdateUrl?: string;
  /**
  * License keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#keys System#keys}
  */
  readonly keys?: string[];
  /**
  * License renewal lead time before expiration, in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#renew_before_expiration System#renew_before_expiration}
  */
  readonly renewBeforeExpiration?: number;
  /**
  * License checking interval, in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#renew_interval System#renew_interval}
  */
  readonly renewInterval?: number;
}

export function systemLicenseToTerraform(struct?: SystemLicense | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoupdate: cdktf.booleanToTerraform(struct!.autoupdate),
    autoupdate_password: cdktf.stringToTerraform(struct!.autoupdatePassword),
    autoupdate_url: cdktf.stringToTerraform(struct!.autoupdateUrl),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    renew_before_expiration: cdktf.numberToTerraform(struct!.renewBeforeExpiration),
    renew_interval: cdktf.numberToTerraform(struct!.renewInterval),
  }
}


export function systemLicenseToHclTerraform(struct?: SystemLicense | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoupdate: {
      value: cdktf.booleanToHclTerraform(struct!.autoupdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoupdate_password: {
      value: cdktf.stringToHclTerraform(struct!.autoupdatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoupdate_url: {
      value: cdktf.stringToHclTerraform(struct!.autoupdateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    renew_before_expiration: {
      value: cdktf.numberToHclTerraform(struct!.renewBeforeExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renew_interval: {
      value: cdktf.numberToHclTerraform(struct!.renewInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemLicense | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoupdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoupdate = this._autoupdate;
    }
    if (this._autoupdatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoupdatePassword = this._autoupdatePassword;
    }
    if (this._autoupdateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoupdateUrl = this._autoupdateUrl;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._renewBeforeExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewBeforeExpiration = this._renewBeforeExpiration;
    }
    if (this._renewInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewInterval = this._renewInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLicense | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoupdate = undefined;
      this._autoupdatePassword = undefined;
      this._autoupdateUrl = undefined;
      this._keys = undefined;
      this._renewBeforeExpiration = undefined;
      this._renewInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoupdate = value.autoupdate;
      this._autoupdatePassword = value.autoupdatePassword;
      this._autoupdateUrl = value.autoupdateUrl;
      this._keys = value.keys;
      this._renewBeforeExpiration = value.renewBeforeExpiration;
      this._renewInterval = value.renewInterval;
    }
  }

  // autoupdate - computed: false, optional: true, required: false
  private _autoupdate?: boolean | cdktf.IResolvable; 
  public get autoupdate() {
    return this.getBooleanAttribute('autoupdate');
  }
  public set autoupdate(value: boolean | cdktf.IResolvable) {
    this._autoupdate = value;
  }
  public resetAutoupdate() {
    this._autoupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoupdateInput() {
    return this._autoupdate;
  }

  // autoupdate_password - computed: false, optional: true, required: false
  private _autoupdatePassword?: string; 
  public get autoupdatePassword() {
    return this.getStringAttribute('autoupdate_password');
  }
  public set autoupdatePassword(value: string) {
    this._autoupdatePassword = value;
  }
  public resetAutoupdatePassword() {
    this._autoupdatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoupdatePasswordInput() {
    return this._autoupdatePassword;
  }

  // autoupdate_url - computed: false, optional: true, required: false
  private _autoupdateUrl?: string; 
  public get autoupdateUrl() {
    return this.getStringAttribute('autoupdate_url');
  }
  public set autoupdateUrl(value: string) {
    this._autoupdateUrl = value;
  }
  public resetAutoupdateUrl() {
    this._autoupdateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoupdateUrlInput() {
    return this._autoupdateUrl;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return cdktf.Fn.tolist(this.getListAttribute('keys'));
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // renew_before_expiration - computed: false, optional: true, required: false
  private _renewBeforeExpiration?: number; 
  public get renewBeforeExpiration() {
    return this.getNumberAttribute('renew_before_expiration');
  }
  public set renewBeforeExpiration(value: number) {
    this._renewBeforeExpiration = value;
  }
  public resetRenewBeforeExpiration() {
    this._renewBeforeExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeExpirationInput() {
    return this._renewBeforeExpiration;
  }

  // renew_interval - computed: false, optional: true, required: false
  private _renewInterval?: number; 
  public get renewInterval() {
    return this.getNumberAttribute('renew_interval');
  }
  public set renewInterval(value: number) {
    this._renewInterval = value;
  }
  public resetRenewInterval() {
    this._renewInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewIntervalInput() {
    return this._renewInterval;
  }
}
export interface SystemLoginPassword {
  /**
  * Password change type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#change_type System#change_type}
  */
  readonly changeType?: string;
  /**
  * Encryption method to use for password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#format System#format}
  */
  readonly format?: string;
  /**
  * Maximum password length for all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#maximum_length System#maximum_length}
  */
  readonly maximumLength?: number;
  /**
  * Minimum number of changes in password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#minimum_changes System#minimum_changes}
  */
  readonly minimumChanges?: number;
  /**
  * Minimum number of character changes between old and new passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#minimum_character_changes System#minimum_character_changes}
  */
  readonly minimumCharacterChanges?: number;
  /**
  * Minimum password length for all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#minimum_length System#minimum_length}
  */
  readonly minimumLength?: number;
  /**
  * Minimum number of lower-case class characters in password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#minimum_lower_cases System#minimum_lower_cases}
  */
  readonly minimumLowerCases?: number;
  /**
  * Minimum number of numeric class characters in password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#minimum_numerics System#minimum_numerics}
  */
  readonly minimumNumerics?: number;
  /**
  * Minimum number of punctuation class characters in password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#minimum_punctuations System#minimum_punctuations}
  */
  readonly minimumPunctuations?: number;
  /**
  * Minimum number of old passwords which should not be same as the new password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#minimum_reuse System#minimum_reuse}
  */
  readonly minimumReuse?: number;
  /**
  * Minimum number of upper-case class characters in password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#minimum_upper_cases System#minimum_upper_cases}
  */
  readonly minimumUpperCases?: number;
}

export function systemLoginPasswordToTerraform(struct?: SystemLoginPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_type: cdktf.stringToTerraform(struct!.changeType),
    format: cdktf.stringToTerraform(struct!.format),
    maximum_length: cdktf.numberToTerraform(struct!.maximumLength),
    minimum_changes: cdktf.numberToTerraform(struct!.minimumChanges),
    minimum_character_changes: cdktf.numberToTerraform(struct!.minimumCharacterChanges),
    minimum_length: cdktf.numberToTerraform(struct!.minimumLength),
    minimum_lower_cases: cdktf.numberToTerraform(struct!.minimumLowerCases),
    minimum_numerics: cdktf.numberToTerraform(struct!.minimumNumerics),
    minimum_punctuations: cdktf.numberToTerraform(struct!.minimumPunctuations),
    minimum_reuse: cdktf.numberToTerraform(struct!.minimumReuse),
    minimum_upper_cases: cdktf.numberToTerraform(struct!.minimumUpperCases),
  }
}


export function systemLoginPasswordToHclTerraform(struct?: SystemLoginPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_type: {
      value: cdktf.stringToHclTerraform(struct!.changeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_length: {
      value: cdktf.numberToHclTerraform(struct!.maximumLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_changes: {
      value: cdktf.numberToHclTerraform(struct!.minimumChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_character_changes: {
      value: cdktf.numberToHclTerraform(struct!.minimumCharacterChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_length: {
      value: cdktf.numberToHclTerraform(struct!.minimumLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_lower_cases: {
      value: cdktf.numberToHclTerraform(struct!.minimumLowerCases),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_numerics: {
      value: cdktf.numberToHclTerraform(struct!.minimumNumerics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_punctuations: {
      value: cdktf.numberToHclTerraform(struct!.minimumPunctuations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_reuse: {
      value: cdktf.numberToHclTerraform(struct!.minimumReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_upper_cases: {
      value: cdktf.numberToHclTerraform(struct!.minimumUpperCases),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLoginPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemLoginPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeType = this._changeType;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._maximumLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLength = this._maximumLength;
    }
    if (this._minimumChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumChanges = this._minimumChanges;
    }
    if (this._minimumCharacterChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumCharacterChanges = this._minimumCharacterChanges;
    }
    if (this._minimumLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLength = this._minimumLength;
    }
    if (this._minimumLowerCases !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLowerCases = this._minimumLowerCases;
    }
    if (this._minimumNumerics !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumNumerics = this._minimumNumerics;
    }
    if (this._minimumPunctuations !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPunctuations = this._minimumPunctuations;
    }
    if (this._minimumReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumReuse = this._minimumReuse;
    }
    if (this._minimumUpperCases !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumUpperCases = this._minimumUpperCases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLoginPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changeType = undefined;
      this._format = undefined;
      this._maximumLength = undefined;
      this._minimumChanges = undefined;
      this._minimumCharacterChanges = undefined;
      this._minimumLength = undefined;
      this._minimumLowerCases = undefined;
      this._minimumNumerics = undefined;
      this._minimumPunctuations = undefined;
      this._minimumReuse = undefined;
      this._minimumUpperCases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changeType = value.changeType;
      this._format = value.format;
      this._maximumLength = value.maximumLength;
      this._minimumChanges = value.minimumChanges;
      this._minimumCharacterChanges = value.minimumCharacterChanges;
      this._minimumLength = value.minimumLength;
      this._minimumLowerCases = value.minimumLowerCases;
      this._minimumNumerics = value.minimumNumerics;
      this._minimumPunctuations = value.minimumPunctuations;
      this._minimumReuse = value.minimumReuse;
      this._minimumUpperCases = value.minimumUpperCases;
    }
  }

  // change_type - computed: false, optional: true, required: false
  private _changeType?: string; 
  public get changeType() {
    return this.getStringAttribute('change_type');
  }
  public set changeType(value: string) {
    this._changeType = value;
  }
  public resetChangeType() {
    this._changeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTypeInput() {
    return this._changeType;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // maximum_length - computed: false, optional: true, required: false
  private _maximumLength?: number; 
  public get maximumLength() {
    return this.getNumberAttribute('maximum_length');
  }
  public set maximumLength(value: number) {
    this._maximumLength = value;
  }
  public resetMaximumLength() {
    this._maximumLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLengthInput() {
    return this._maximumLength;
  }

  // minimum_changes - computed: false, optional: true, required: false
  private _minimumChanges?: number; 
  public get minimumChanges() {
    return this.getNumberAttribute('minimum_changes');
  }
  public set minimumChanges(value: number) {
    this._minimumChanges = value;
  }
  public resetMinimumChanges() {
    this._minimumChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumChangesInput() {
    return this._minimumChanges;
  }

  // minimum_character_changes - computed: false, optional: true, required: false
  private _minimumCharacterChanges?: number; 
  public get minimumCharacterChanges() {
    return this.getNumberAttribute('minimum_character_changes');
  }
  public set minimumCharacterChanges(value: number) {
    this._minimumCharacterChanges = value;
  }
  public resetMinimumCharacterChanges() {
    this._minimumCharacterChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCharacterChangesInput() {
    return this._minimumCharacterChanges;
  }

  // minimum_length - computed: false, optional: true, required: false
  private _minimumLength?: number; 
  public get minimumLength() {
    return this.getNumberAttribute('minimum_length');
  }
  public set minimumLength(value: number) {
    this._minimumLength = value;
  }
  public resetMinimumLength() {
    this._minimumLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLengthInput() {
    return this._minimumLength;
  }

  // minimum_lower_cases - computed: false, optional: true, required: false
  private _minimumLowerCases?: number; 
  public get minimumLowerCases() {
    return this.getNumberAttribute('minimum_lower_cases');
  }
  public set minimumLowerCases(value: number) {
    this._minimumLowerCases = value;
  }
  public resetMinimumLowerCases() {
    this._minimumLowerCases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLowerCasesInput() {
    return this._minimumLowerCases;
  }

  // minimum_numerics - computed: false, optional: true, required: false
  private _minimumNumerics?: number; 
  public get minimumNumerics() {
    return this.getNumberAttribute('minimum_numerics');
  }
  public set minimumNumerics(value: number) {
    this._minimumNumerics = value;
  }
  public resetMinimumNumerics() {
    this._minimumNumerics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumNumericsInput() {
    return this._minimumNumerics;
  }

  // minimum_punctuations - computed: false, optional: true, required: false
  private _minimumPunctuations?: number; 
  public get minimumPunctuations() {
    return this.getNumberAttribute('minimum_punctuations');
  }
  public set minimumPunctuations(value: number) {
    this._minimumPunctuations = value;
  }
  public resetMinimumPunctuations() {
    this._minimumPunctuations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPunctuationsInput() {
    return this._minimumPunctuations;
  }

  // minimum_reuse - computed: false, optional: true, required: false
  private _minimumReuse?: number; 
  public get minimumReuse() {
    return this.getNumberAttribute('minimum_reuse');
  }
  public set minimumReuse(value: number) {
    this._minimumReuse = value;
  }
  public resetMinimumReuse() {
    this._minimumReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumReuseInput() {
    return this._minimumReuse;
  }

  // minimum_upper_cases - computed: false, optional: true, required: false
  private _minimumUpperCases?: number; 
  public get minimumUpperCases() {
    return this.getNumberAttribute('minimum_upper_cases');
  }
  public set minimumUpperCases(value: number) {
    this._minimumUpperCases = value;
  }
  public resetMinimumUpperCases() {
    this._minimumUpperCases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumUpperCasesInput() {
    return this._minimumUpperCases;
  }
}
export interface SystemLoginRetryOptions {
  /**
  * Delay factor after `backoff-threshold` password failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#backoff_factor System#backoff_factor}
  */
  readonly backoffFactor?: number;
  /**
  * Number of password failures before delay is introduced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#backoff_threshold System#backoff_threshold}
  */
  readonly backoffThreshold?: number;
  /**
  * Amount of time user account is locked after `tries_before_disconnect` failures (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#lockout_period System#lockout_period}
  */
  readonly lockoutPeriod?: number;
  /**
  * Maximum time the connection will remain for user to enter username and password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#maximum_time System#maximum_time}
  */
  readonly maximumTime?: number;
  /**
  *  Minimum total connection time if all attempts fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#minimum_time System#minimum_time}
  */
  readonly minimumTime?: number;
  /**
  * Number of times user is allowed to try password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tries_before_disconnect System#tries_before_disconnect}
  */
  readonly triesBeforeDisconnect?: number;
}

export function systemLoginRetryOptionsToTerraform(struct?: SystemLoginRetryOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backoff_factor: cdktf.numberToTerraform(struct!.backoffFactor),
    backoff_threshold: cdktf.numberToTerraform(struct!.backoffThreshold),
    lockout_period: cdktf.numberToTerraform(struct!.lockoutPeriod),
    maximum_time: cdktf.numberToTerraform(struct!.maximumTime),
    minimum_time: cdktf.numberToTerraform(struct!.minimumTime),
    tries_before_disconnect: cdktf.numberToTerraform(struct!.triesBeforeDisconnect),
  }
}


export function systemLoginRetryOptionsToHclTerraform(struct?: SystemLoginRetryOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backoff_factor: {
      value: cdktf.numberToHclTerraform(struct!.backoffFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backoff_threshold: {
      value: cdktf.numberToHclTerraform(struct!.backoffThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout_period: {
      value: cdktf.numberToHclTerraform(struct!.lockoutPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_time: {
      value: cdktf.numberToHclTerraform(struct!.maximumTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_time: {
      value: cdktf.numberToHclTerraform(struct!.minimumTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tries_before_disconnect: {
      value: cdktf.numberToHclTerraform(struct!.triesBeforeDisconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLoginRetryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemLoginRetryOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backoffFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoffFactor = this._backoffFactor;
    }
    if (this._backoffThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoffThreshold = this._backoffThreshold;
    }
    if (this._lockoutPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutPeriod = this._lockoutPeriod;
    }
    if (this._maximumTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTime = this._maximumTime;
    }
    if (this._minimumTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumTime = this._minimumTime;
    }
    if (this._triesBeforeDisconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.triesBeforeDisconnect = this._triesBeforeDisconnect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLoginRetryOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backoffFactor = undefined;
      this._backoffThreshold = undefined;
      this._lockoutPeriod = undefined;
      this._maximumTime = undefined;
      this._minimumTime = undefined;
      this._triesBeforeDisconnect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backoffFactor = value.backoffFactor;
      this._backoffThreshold = value.backoffThreshold;
      this._lockoutPeriod = value.lockoutPeriod;
      this._maximumTime = value.maximumTime;
      this._minimumTime = value.minimumTime;
      this._triesBeforeDisconnect = value.triesBeforeDisconnect;
    }
  }

  // backoff_factor - computed: false, optional: true, required: false
  private _backoffFactor?: number; 
  public get backoffFactor() {
    return this.getNumberAttribute('backoff_factor');
  }
  public set backoffFactor(value: number) {
    this._backoffFactor = value;
  }
  public resetBackoffFactor() {
    this._backoffFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffFactorInput() {
    return this._backoffFactor;
  }

  // backoff_threshold - computed: false, optional: true, required: false
  private _backoffThreshold?: number; 
  public get backoffThreshold() {
    return this.getNumberAttribute('backoff_threshold');
  }
  public set backoffThreshold(value: number) {
    this._backoffThreshold = value;
  }
  public resetBackoffThreshold() {
    this._backoffThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffThresholdInput() {
    return this._backoffThreshold;
  }

  // lockout_period - computed: false, optional: true, required: false
  private _lockoutPeriod?: number; 
  public get lockoutPeriod() {
    return this.getNumberAttribute('lockout_period');
  }
  public set lockoutPeriod(value: number) {
    this._lockoutPeriod = value;
  }
  public resetLockoutPeriod() {
    this._lockoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutPeriodInput() {
    return this._lockoutPeriod;
  }

  // maximum_time - computed: false, optional: true, required: false
  private _maximumTime?: number; 
  public get maximumTime() {
    return this.getNumberAttribute('maximum_time');
  }
  public set maximumTime(value: number) {
    this._maximumTime = value;
  }
  public resetMaximumTime() {
    this._maximumTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTimeInput() {
    return this._maximumTime;
  }

  // minimum_time - computed: false, optional: true, required: false
  private _minimumTime?: number; 
  public get minimumTime() {
    return this.getNumberAttribute('minimum_time');
  }
  public set minimumTime(value: number) {
    this._minimumTime = value;
  }
  public resetMinimumTime() {
    this._minimumTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTimeInput() {
    return this._minimumTime;
  }

  // tries_before_disconnect - computed: false, optional: true, required: false
  private _triesBeforeDisconnect?: number; 
  public get triesBeforeDisconnect() {
    return this.getNumberAttribute('tries_before_disconnect');
  }
  public set triesBeforeDisconnect(value: number) {
    this._triesBeforeDisconnect = value;
  }
  public resetTriesBeforeDisconnect() {
    this._triesBeforeDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triesBeforeDisconnectInput() {
    return this._triesBeforeDisconnect;
  }
}
export interface SystemLogin {
  /**
  * System announcement message (displayed after login).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#announcement System#announcement}
  */
  readonly announcement?: string;
  /**
  * Sources from which logins are denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#deny_sources_address System#deny_sources_address}
  */
  readonly denySourcesAddress?: string[];
  /**
  * Maximum idle time before logout (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#idle_timeout System#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * System login message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#message System#message}
  */
  readonly message?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#password System#password}
  */
  readonly password?: SystemLoginPassword;
  /**
  * retry_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#retry_options System#retry_options}
  */
  readonly retryOptions?: SystemLoginRetryOptions;
}

export function systemLoginToTerraform(struct?: SystemLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    announcement: cdktf.stringToTerraform(struct!.announcement),
    deny_sources_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denySourcesAddress),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    message: cdktf.stringToTerraform(struct!.message),
    password: systemLoginPasswordToTerraform(struct!.password),
    retry_options: systemLoginRetryOptionsToTerraform(struct!.retryOptions),
  }
}


export function systemLoginToHclTerraform(struct?: SystemLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    announcement: {
      value: cdktf.stringToHclTerraform(struct!.announcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_sources_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denySourcesAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: systemLoginPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemLoginPassword",
    },
    retry_options: {
      value: systemLoginRetryOptionsToHclTerraform(struct!.retryOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemLoginRetryOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemLogin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._announcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.announcement = this._announcement;
    }
    if (this._denySourcesAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourcesAddress = this._denySourcesAddress;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._retryOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOptions = this._retryOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLogin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._announcement = undefined;
      this._denySourcesAddress = undefined;
      this._idleTimeout = undefined;
      this._message = undefined;
      this._password.internalValue = undefined;
      this._retryOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._announcement = value.announcement;
      this._denySourcesAddress = value.denySourcesAddress;
      this._idleTimeout = value.idleTimeout;
      this._message = value.message;
      this._password.internalValue = value.password;
      this._retryOptions.internalValue = value.retryOptions;
    }
  }

  // announcement - computed: false, optional: true, required: false
  private _announcement?: string; 
  public get announcement() {
    return this.getStringAttribute('announcement');
  }
  public set announcement(value: string) {
    this._announcement = value;
  }
  public resetAnnouncement() {
    this._announcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementInput() {
    return this._announcement;
  }

  // deny_sources_address - computed: false, optional: true, required: false
  private _denySourcesAddress?: string[]; 
  public get denySourcesAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('deny_sources_address'));
  }
  public set denySourcesAddress(value: string[]) {
    this._denySourcesAddress = value;
  }
  public resetDenySourcesAddress() {
    this._denySourcesAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourcesAddressInput() {
    return this._denySourcesAddress;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // password - computed: false, optional: true, required: false
  private _password = new SystemLoginPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: SystemLoginPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // retry_options - computed: false, optional: true, required: false
  private _retryOptions = new SystemLoginRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }
  public putRetryOptions(value: SystemLoginRetryOptions) {
    this._retryOptions.internalValue = value;
  }
  public resetRetryOptions() {
    this._retryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOptionsInput() {
    return this._retryOptions.internalValue;
  }
}
export interface SystemNameServerOpts {
  /**
  * Address of the name server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#address System#address}
  */
  readonly address: string;
  /**
  * Routing instance through which the name server is reachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#routing_instance System#routing_instance}
  */
  readonly routingInstance?: string;
}

export function systemNameServerOptsToTerraform(struct?: SystemNameServerOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
  }
}


export function systemNameServerOptsToHclTerraform(struct?: SystemNameServerOpts | cdktf.IResolvable): any {
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
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNameServerOptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemNameServerOpts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNameServerOpts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._routingInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._routingInstance = value.routingInstance;
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

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }
}

export class SystemNameServerOptsList extends cdktf.ComplexList {
  public internalValue? : SystemNameServerOpts[] | cdktf.IResolvable

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
  public get(index: number): SystemNameServerOptsOutputReference {
    return new SystemNameServerOptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemNtp {
  /**
  * Server to query during boot sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#boot_server System#boot_server}
  */
  readonly bootServer?: string;
  /**
  * Listen to broadcast NTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#broadcast_client System#broadcast_client}
  */
  readonly broadcastClient?: boolean | cdktf.IResolvable;
  /**
  * Set the minpoll and maxpoll interval range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#interval_range System#interval_range}
  */
  readonly intervalRange?: number;
  /**
  * Listen to multicast NTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#multicast_client System#multicast_client}
  */
  readonly multicastClient?: boolean | cdktf.IResolvable;
  /**
  * Multicast address to listen to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#multicast_client_address System#multicast_client_address}
  */
  readonly multicastClientAddress?: string;
  /**
  * Select actions for NTP abnormal adjustment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#threshold_action System#threshold_action}
  */
  readonly thresholdAction?: string;
  /**
  * Set the maximum threshold(sec) allowed for NTP adjustment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#threshold_value System#threshold_value}
  */
  readonly thresholdValue?: number;
}

export function systemNtpToTerraform(struct?: SystemNtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_server: cdktf.stringToTerraform(struct!.bootServer),
    broadcast_client: cdktf.booleanToTerraform(struct!.broadcastClient),
    interval_range: cdktf.numberToTerraform(struct!.intervalRange),
    multicast_client: cdktf.booleanToTerraform(struct!.multicastClient),
    multicast_client_address: cdktf.stringToTerraform(struct!.multicastClientAddress),
    threshold_action: cdktf.stringToTerraform(struct!.thresholdAction),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
  }
}


export function systemNtpToHclTerraform(struct?: SystemNtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_server: {
      value: cdktf.stringToHclTerraform(struct!.bootServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broadcast_client: {
      value: cdktf.booleanToHclTerraform(struct!.broadcastClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval_range: {
      value: cdktf.numberToHclTerraform(struct!.intervalRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multicast_client: {
      value: cdktf.booleanToHclTerraform(struct!.multicastClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multicast_client_address: {
      value: cdktf.stringToHclTerraform(struct!.multicastClientAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_action: {
      value: cdktf.stringToHclTerraform(struct!.thresholdAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemNtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootServer = this._bootServer;
    }
    if (this._broadcastClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastClient = this._broadcastClient;
    }
    if (this._intervalRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalRange = this._intervalRange;
    }
    if (this._multicastClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastClient = this._multicastClient;
    }
    if (this._multicastClientAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastClientAddress = this._multicastClientAddress;
    }
    if (this._thresholdAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAction = this._thresholdAction;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootServer = undefined;
      this._broadcastClient = undefined;
      this._intervalRange = undefined;
      this._multicastClient = undefined;
      this._multicastClientAddress = undefined;
      this._thresholdAction = undefined;
      this._thresholdValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootServer = value.bootServer;
      this._broadcastClient = value.broadcastClient;
      this._intervalRange = value.intervalRange;
      this._multicastClient = value.multicastClient;
      this._multicastClientAddress = value.multicastClientAddress;
      this._thresholdAction = value.thresholdAction;
      this._thresholdValue = value.thresholdValue;
    }
  }

  // boot_server - computed: false, optional: true, required: false
  private _bootServer?: string; 
  public get bootServer() {
    return this.getStringAttribute('boot_server');
  }
  public set bootServer(value: string) {
    this._bootServer = value;
  }
  public resetBootServer() {
    this._bootServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootServerInput() {
    return this._bootServer;
  }

  // broadcast_client - computed: false, optional: true, required: false
  private _broadcastClient?: boolean | cdktf.IResolvable; 
  public get broadcastClient() {
    return this.getBooleanAttribute('broadcast_client');
  }
  public set broadcastClient(value: boolean | cdktf.IResolvable) {
    this._broadcastClient = value;
  }
  public resetBroadcastClient() {
    this._broadcastClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastClientInput() {
    return this._broadcastClient;
  }

  // interval_range - computed: false, optional: true, required: false
  private _intervalRange?: number; 
  public get intervalRange() {
    return this.getNumberAttribute('interval_range');
  }
  public set intervalRange(value: number) {
    this._intervalRange = value;
  }
  public resetIntervalRange() {
    this._intervalRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalRangeInput() {
    return this._intervalRange;
  }

  // multicast_client - computed: false, optional: true, required: false
  private _multicastClient?: boolean | cdktf.IResolvable; 
  public get multicastClient() {
    return this.getBooleanAttribute('multicast_client');
  }
  public set multicastClient(value: boolean | cdktf.IResolvable) {
    this._multicastClient = value;
  }
  public resetMulticastClient() {
    this._multicastClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastClientInput() {
    return this._multicastClient;
  }

  // multicast_client_address - computed: false, optional: true, required: false
  private _multicastClientAddress?: string; 
  public get multicastClientAddress() {
    return this.getStringAttribute('multicast_client_address');
  }
  public set multicastClientAddress(value: string) {
    this._multicastClientAddress = value;
  }
  public resetMulticastClientAddress() {
    this._multicastClientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastClientAddressInput() {
    return this._multicastClientAddress;
  }

  // threshold_action - computed: false, optional: true, required: false
  private _thresholdAction?: string; 
  public get thresholdAction() {
    return this.getStringAttribute('threshold_action');
  }
  public set thresholdAction(value: string) {
    this._thresholdAction = value;
  }
  public resetThresholdAction() {
    this._thresholdAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdActionInput() {
    return this._thresholdAction;
  }

  // threshold_value - computed: false, optional: true, required: false
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  public resetThresholdValue() {
    this._thresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }
}
export interface SystemPorts {
  /**
  * Order in which authentication methods are invoked on auxiliary port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#auxiliary_authentication_order System#auxiliary_authentication_order}
  */
  readonly auxiliaryAuthenticationOrder?: string[];
  /**
  * Disable console on auxiliary port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#auxiliary_disable System#auxiliary_disable}
  */
  readonly auxiliaryDisable?: boolean | cdktf.IResolvable;
  /**
  * Disallow superuser access on auxiliary port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#auxiliary_insecure System#auxiliary_insecure}
  */
  readonly auxiliaryInsecure?: boolean | cdktf.IResolvable;
  /**
  * Log out the console session when cable is unplugged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#auxiliary_logout_on_disconnect System#auxiliary_logout_on_disconnect}
  */
  readonly auxiliaryLogoutOnDisconnect?: boolean | cdktf.IResolvable;
  /**
  * Terminal type on auxiliary port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#auxiliary_type System#auxiliary_type}
  */
  readonly auxiliaryType?: string;
  /**
  * Order in which authentication methods are invoked on console port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#console_authentication_order System#console_authentication_order}
  */
  readonly consoleAuthenticationOrder?: string[];
  /**
  * Disable console on console port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#console_disable System#console_disable}
  */
  readonly consoleDisable?: boolean | cdktf.IResolvable;
  /**
  * Disallow superuser access on console port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#console_insecure System#console_insecure}
  */
  readonly consoleInsecure?: boolean | cdktf.IResolvable;
  /**
  * Log out the console session when cable is unplugged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#console_logout_on_disconnect System#console_logout_on_disconnect}
  */
  readonly consoleLogoutOnDisconnect?: boolean | cdktf.IResolvable;
  /**
  * Terminal type on console port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#console_type System#console_type}
  */
  readonly consoleType?: string;
}

export function systemPortsToTerraform(struct?: SystemPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auxiliary_authentication_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.auxiliaryAuthenticationOrder),
    auxiliary_disable: cdktf.booleanToTerraform(struct!.auxiliaryDisable),
    auxiliary_insecure: cdktf.booleanToTerraform(struct!.auxiliaryInsecure),
    auxiliary_logout_on_disconnect: cdktf.booleanToTerraform(struct!.auxiliaryLogoutOnDisconnect),
    auxiliary_type: cdktf.stringToTerraform(struct!.auxiliaryType),
    console_authentication_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consoleAuthenticationOrder),
    console_disable: cdktf.booleanToTerraform(struct!.consoleDisable),
    console_insecure: cdktf.booleanToTerraform(struct!.consoleInsecure),
    console_logout_on_disconnect: cdktf.booleanToTerraform(struct!.consoleLogoutOnDisconnect),
    console_type: cdktf.stringToTerraform(struct!.consoleType),
  }
}


export function systemPortsToHclTerraform(struct?: SystemPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auxiliary_authentication_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.auxiliaryAuthenticationOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auxiliary_disable: {
      value: cdktf.booleanToHclTerraform(struct!.auxiliaryDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auxiliary_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.auxiliaryInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auxiliary_logout_on_disconnect: {
      value: cdktf.booleanToHclTerraform(struct!.auxiliaryLogoutOnDisconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auxiliary_type: {
      value: cdktf.stringToHclTerraform(struct!.auxiliaryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    console_authentication_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consoleAuthenticationOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    console_disable: {
      value: cdktf.booleanToHclTerraform(struct!.consoleDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    console_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.consoleInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    console_logout_on_disconnect: {
      value: cdktf.booleanToHclTerraform(struct!.consoleLogoutOnDisconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    console_type: {
      value: cdktf.stringToHclTerraform(struct!.consoleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auxiliaryAuthenticationOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryAuthenticationOrder = this._auxiliaryAuthenticationOrder;
    }
    if (this._auxiliaryDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryDisable = this._auxiliaryDisable;
    }
    if (this._auxiliaryInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryInsecure = this._auxiliaryInsecure;
    }
    if (this._auxiliaryLogoutOnDisconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryLogoutOnDisconnect = this._auxiliaryLogoutOnDisconnect;
    }
    if (this._auxiliaryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryType = this._auxiliaryType;
    }
    if (this._consoleAuthenticationOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleAuthenticationOrder = this._consoleAuthenticationOrder;
    }
    if (this._consoleDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleDisable = this._consoleDisable;
    }
    if (this._consoleInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleInsecure = this._consoleInsecure;
    }
    if (this._consoleLogoutOnDisconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleLogoutOnDisconnect = this._consoleLogoutOnDisconnect;
    }
    if (this._consoleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleType = this._consoleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auxiliaryAuthenticationOrder = undefined;
      this._auxiliaryDisable = undefined;
      this._auxiliaryInsecure = undefined;
      this._auxiliaryLogoutOnDisconnect = undefined;
      this._auxiliaryType = undefined;
      this._consoleAuthenticationOrder = undefined;
      this._consoleDisable = undefined;
      this._consoleInsecure = undefined;
      this._consoleLogoutOnDisconnect = undefined;
      this._consoleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auxiliaryAuthenticationOrder = value.auxiliaryAuthenticationOrder;
      this._auxiliaryDisable = value.auxiliaryDisable;
      this._auxiliaryInsecure = value.auxiliaryInsecure;
      this._auxiliaryLogoutOnDisconnect = value.auxiliaryLogoutOnDisconnect;
      this._auxiliaryType = value.auxiliaryType;
      this._consoleAuthenticationOrder = value.consoleAuthenticationOrder;
      this._consoleDisable = value.consoleDisable;
      this._consoleInsecure = value.consoleInsecure;
      this._consoleLogoutOnDisconnect = value.consoleLogoutOnDisconnect;
      this._consoleType = value.consoleType;
    }
  }

  // auxiliary_authentication_order - computed: false, optional: true, required: false
  private _auxiliaryAuthenticationOrder?: string[]; 
  public get auxiliaryAuthenticationOrder() {
    return this.getListAttribute('auxiliary_authentication_order');
  }
  public set auxiliaryAuthenticationOrder(value: string[]) {
    this._auxiliaryAuthenticationOrder = value;
  }
  public resetAuxiliaryAuthenticationOrder() {
    this._auxiliaryAuthenticationOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryAuthenticationOrderInput() {
    return this._auxiliaryAuthenticationOrder;
  }

  // auxiliary_disable - computed: false, optional: true, required: false
  private _auxiliaryDisable?: boolean | cdktf.IResolvable; 
  public get auxiliaryDisable() {
    return this.getBooleanAttribute('auxiliary_disable');
  }
  public set auxiliaryDisable(value: boolean | cdktf.IResolvable) {
    this._auxiliaryDisable = value;
  }
  public resetAuxiliaryDisable() {
    this._auxiliaryDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryDisableInput() {
    return this._auxiliaryDisable;
  }

  // auxiliary_insecure - computed: false, optional: true, required: false
  private _auxiliaryInsecure?: boolean | cdktf.IResolvable; 
  public get auxiliaryInsecure() {
    return this.getBooleanAttribute('auxiliary_insecure');
  }
  public set auxiliaryInsecure(value: boolean | cdktf.IResolvable) {
    this._auxiliaryInsecure = value;
  }
  public resetAuxiliaryInsecure() {
    this._auxiliaryInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryInsecureInput() {
    return this._auxiliaryInsecure;
  }

  // auxiliary_logout_on_disconnect - computed: false, optional: true, required: false
  private _auxiliaryLogoutOnDisconnect?: boolean | cdktf.IResolvable; 
  public get auxiliaryLogoutOnDisconnect() {
    return this.getBooleanAttribute('auxiliary_logout_on_disconnect');
  }
  public set auxiliaryLogoutOnDisconnect(value: boolean | cdktf.IResolvable) {
    this._auxiliaryLogoutOnDisconnect = value;
  }
  public resetAuxiliaryLogoutOnDisconnect() {
    this._auxiliaryLogoutOnDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryLogoutOnDisconnectInput() {
    return this._auxiliaryLogoutOnDisconnect;
  }

  // auxiliary_type - computed: false, optional: true, required: false
  private _auxiliaryType?: string; 
  public get auxiliaryType() {
    return this.getStringAttribute('auxiliary_type');
  }
  public set auxiliaryType(value: string) {
    this._auxiliaryType = value;
  }
  public resetAuxiliaryType() {
    this._auxiliaryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryTypeInput() {
    return this._auxiliaryType;
  }

  // console_authentication_order - computed: false, optional: true, required: false
  private _consoleAuthenticationOrder?: string[]; 
  public get consoleAuthenticationOrder() {
    return this.getListAttribute('console_authentication_order');
  }
  public set consoleAuthenticationOrder(value: string[]) {
    this._consoleAuthenticationOrder = value;
  }
  public resetConsoleAuthenticationOrder() {
    this._consoleAuthenticationOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleAuthenticationOrderInput() {
    return this._consoleAuthenticationOrder;
  }

  // console_disable - computed: false, optional: true, required: false
  private _consoleDisable?: boolean | cdktf.IResolvable; 
  public get consoleDisable() {
    return this.getBooleanAttribute('console_disable');
  }
  public set consoleDisable(value: boolean | cdktf.IResolvable) {
    this._consoleDisable = value;
  }
  public resetConsoleDisable() {
    this._consoleDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleDisableInput() {
    return this._consoleDisable;
  }

  // console_insecure - computed: false, optional: true, required: false
  private _consoleInsecure?: boolean | cdktf.IResolvable; 
  public get consoleInsecure() {
    return this.getBooleanAttribute('console_insecure');
  }
  public set consoleInsecure(value: boolean | cdktf.IResolvable) {
    this._consoleInsecure = value;
  }
  public resetConsoleInsecure() {
    this._consoleInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInsecureInput() {
    return this._consoleInsecure;
  }

  // console_logout_on_disconnect - computed: false, optional: true, required: false
  private _consoleLogoutOnDisconnect?: boolean | cdktf.IResolvable; 
  public get consoleLogoutOnDisconnect() {
    return this.getBooleanAttribute('console_logout_on_disconnect');
  }
  public set consoleLogoutOnDisconnect(value: boolean | cdktf.IResolvable) {
    this._consoleLogoutOnDisconnect = value;
  }
  public resetConsoleLogoutOnDisconnect() {
    this._consoleLogoutOnDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleLogoutOnDisconnectInput() {
    return this._consoleLogoutOnDisconnect;
  }

  // console_type - computed: false, optional: true, required: false
  private _consoleType?: string; 
  public get consoleType() {
    return this.getStringAttribute('console_type');
  }
  public set consoleType(value: string) {
    this._consoleType = value;
  }
  public resetConsoleType() {
    this._consoleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleTypeInput() {
    return this._consoleType;
  }
}
export interface SystemServicesNetconfSsh {
  /**
  * Threshold of missing client-alive responses that triggers a disconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#client_alive_count_max System#client_alive_count_max}
  */
  readonly clientAliveCountMax?: number;
  /**
  * Frequency of client-alive requests (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#client_alive_interval System#client_alive_interval}
  */
  readonly clientAliveInterval?: number;
  /**
  * Limit number of simultaneous connections (connections).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#connection_limit System#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Limit incoming connection rate (connections per minute).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#rate_limit System#rate_limit}
  */
  readonly rateLimit?: number;
}

export function systemServicesNetconfSshToTerraform(struct?: SystemServicesNetconfSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_alive_count_max: cdktf.numberToTerraform(struct!.clientAliveCountMax),
    client_alive_interval: cdktf.numberToTerraform(struct!.clientAliveInterval),
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
}


export function systemServicesNetconfSshToHclTerraform(struct?: SystemServicesNetconfSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_alive_count_max: {
      value: cdktf.numberToHclTerraform(struct!.clientAliveCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_alive_interval: {
      value: cdktf.numberToHclTerraform(struct!.clientAliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesNetconfSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesNetconfSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAliveCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAliveCountMax = this._clientAliveCountMax;
    }
    if (this._clientAliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAliveInterval = this._clientAliveInterval;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesNetconfSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAliveCountMax = undefined;
      this._clientAliveInterval = undefined;
      this._connectionLimit = undefined;
      this._rateLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAliveCountMax = value.clientAliveCountMax;
      this._clientAliveInterval = value.clientAliveInterval;
      this._connectionLimit = value.connectionLimit;
      this._rateLimit = value.rateLimit;
    }
  }

  // client_alive_count_max - computed: false, optional: true, required: false
  private _clientAliveCountMax?: number; 
  public get clientAliveCountMax() {
    return this.getNumberAttribute('client_alive_count_max');
  }
  public set clientAliveCountMax(value: number) {
    this._clientAliveCountMax = value;
  }
  public resetClientAliveCountMax() {
    this._clientAliveCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAliveCountMaxInput() {
    return this._clientAliveCountMax;
  }

  // client_alive_interval - computed: false, optional: true, required: false
  private _clientAliveInterval?: number; 
  public get clientAliveInterval() {
    return this.getNumberAttribute('client_alive_interval');
  }
  public set clientAliveInterval(value: number) {
    this._clientAliveInterval = value;
  }
  public resetClientAliveInterval() {
    this._clientAliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAliveIntervalInput() {
    return this._clientAliveInterval;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }
}
export interface SystemServicesNetconfTraceoptions {
  /**
  * Maximum number of trace files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#file_files System#file_files}
  */
  readonly fileFiles?: number;
  /**
  * Regular expression for lines to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#file_match System#file_match}
  */
  readonly fileMatch?: string;
  /**
  * Name of file in which to write trace information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#file_name System#file_name}
  */
  readonly fileName?: string;
  /**
  * Don't allow any user to read the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#file_no_world_readable System#file_no_world_readable}
  */
  readonly fileNoWorldReadable?: boolean | cdktf.IResolvable;
  /**
  * Maximum trace file size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#file_size System#file_size}
  */
  readonly fileSize?: number;
  /**
  * Allow any user to read the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#file_world_readable System#file_world_readable}
  */
  readonly fileWorldReadable?: boolean | cdktf.IResolvable;
  /**
  * Tracing parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#flag System#flag}
  */
  readonly flag?: string[];
  /**
  * Disable remote tracing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_remote_trace System#no_remote_trace}
  */
  readonly noRemoteTrace?: boolean | cdktf.IResolvable;
  /**
  * Enable on-demand tracing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#on_demand System#on_demand}
  */
  readonly onDemand?: boolean | cdktf.IResolvable;
}

export function systemServicesNetconfTraceoptionsToTerraform(struct?: SystemServicesNetconfTraceoptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_files: cdktf.numberToTerraform(struct!.fileFiles),
    file_match: cdktf.stringToTerraform(struct!.fileMatch),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    file_no_world_readable: cdktf.booleanToTerraform(struct!.fileNoWorldReadable),
    file_size: cdktf.numberToTerraform(struct!.fileSize),
    file_world_readable: cdktf.booleanToTerraform(struct!.fileWorldReadable),
    flag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flag),
    no_remote_trace: cdktf.booleanToTerraform(struct!.noRemoteTrace),
    on_demand: cdktf.booleanToTerraform(struct!.onDemand),
  }
}


export function systemServicesNetconfTraceoptionsToHclTerraform(struct?: SystemServicesNetconfTraceoptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_files: {
      value: cdktf.numberToHclTerraform(struct!.fileFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_match: {
      value: cdktf.stringToHclTerraform(struct!.fileMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_no_world_readable: {
      value: cdktf.booleanToHclTerraform(struct!.fileNoWorldReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_size: {
      value: cdktf.numberToHclTerraform(struct!.fileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_world_readable: {
      value: cdktf.booleanToHclTerraform(struct!.fileWorldReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flag),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    no_remote_trace: {
      value: cdktf.booleanToHclTerraform(struct!.noRemoteTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_demand: {
      value: cdktf.booleanToHclTerraform(struct!.onDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesNetconfTraceoptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesNetconfTraceoptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFiles = this._fileFiles;
    }
    if (this._fileMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMatch = this._fileMatch;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._fileNoWorldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNoWorldReadable = this._fileNoWorldReadable;
    }
    if (this._fileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSize = this._fileSize;
    }
    if (this._fileWorldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileWorldReadable = this._fileWorldReadable;
    }
    if (this._flag !== undefined) {
      hasAnyValues = true;
      internalValueResult.flag = this._flag;
    }
    if (this._noRemoteTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRemoteTrace = this._noRemoteTrace;
    }
    if (this._onDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemand = this._onDemand;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesNetconfTraceoptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileFiles = undefined;
      this._fileMatch = undefined;
      this._fileName = undefined;
      this._fileNoWorldReadable = undefined;
      this._fileSize = undefined;
      this._fileWorldReadable = undefined;
      this._flag = undefined;
      this._noRemoteTrace = undefined;
      this._onDemand = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileFiles = value.fileFiles;
      this._fileMatch = value.fileMatch;
      this._fileName = value.fileName;
      this._fileNoWorldReadable = value.fileNoWorldReadable;
      this._fileSize = value.fileSize;
      this._fileWorldReadable = value.fileWorldReadable;
      this._flag = value.flag;
      this._noRemoteTrace = value.noRemoteTrace;
      this._onDemand = value.onDemand;
    }
  }

  // file_files - computed: false, optional: true, required: false
  private _fileFiles?: number; 
  public get fileFiles() {
    return this.getNumberAttribute('file_files');
  }
  public set fileFiles(value: number) {
    this._fileFiles = value;
  }
  public resetFileFiles() {
    this._fileFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilesInput() {
    return this._fileFiles;
  }

  // file_match - computed: false, optional: true, required: false
  private _fileMatch?: string; 
  public get fileMatch() {
    return this.getStringAttribute('file_match');
  }
  public set fileMatch(value: string) {
    this._fileMatch = value;
  }
  public resetFileMatch() {
    this._fileMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMatchInput() {
    return this._fileMatch;
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

  // file_no_world_readable - computed: false, optional: true, required: false
  private _fileNoWorldReadable?: boolean | cdktf.IResolvable; 
  public get fileNoWorldReadable() {
    return this.getBooleanAttribute('file_no_world_readable');
  }
  public set fileNoWorldReadable(value: boolean | cdktf.IResolvable) {
    this._fileNoWorldReadable = value;
  }
  public resetFileNoWorldReadable() {
    this._fileNoWorldReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNoWorldReadableInput() {
    return this._fileNoWorldReadable;
  }

  // file_size - computed: false, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
  }

  // file_world_readable - computed: false, optional: true, required: false
  private _fileWorldReadable?: boolean | cdktf.IResolvable; 
  public get fileWorldReadable() {
    return this.getBooleanAttribute('file_world_readable');
  }
  public set fileWorldReadable(value: boolean | cdktf.IResolvable) {
    this._fileWorldReadable = value;
  }
  public resetFileWorldReadable() {
    this._fileWorldReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileWorldReadableInput() {
    return this._fileWorldReadable;
  }

  // flag - computed: false, optional: true, required: false
  private _flag?: string[]; 
  public get flag() {
    return cdktf.Fn.tolist(this.getListAttribute('flag'));
  }
  public set flag(value: string[]) {
    this._flag = value;
  }
  public resetFlag() {
    this._flag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
  }

  // no_remote_trace - computed: false, optional: true, required: false
  private _noRemoteTrace?: boolean | cdktf.IResolvable; 
  public get noRemoteTrace() {
    return this.getBooleanAttribute('no_remote_trace');
  }
  public set noRemoteTrace(value: boolean | cdktf.IResolvable) {
    this._noRemoteTrace = value;
  }
  public resetNoRemoteTrace() {
    this._noRemoteTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRemoteTraceInput() {
    return this._noRemoteTrace;
  }

  // on_demand - computed: false, optional: true, required: false
  private _onDemand?: boolean | cdktf.IResolvable; 
  public get onDemand() {
    return this.getBooleanAttribute('on_demand');
  }
  public set onDemand(value: boolean | cdktf.IResolvable) {
    this._onDemand = value;
  }
  public resetOnDemand() {
    this._onDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandInput() {
    return this._onDemand;
  }
}
export interface SystemServicesSsh {
  /**
  * Order in which authentication methods are invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#authentication_order System#authentication_order}
  */
  readonly authenticationOrder?: string[];
  /**
  * Specify the ciphers allowed for protocol version 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ciphers System#ciphers}
  */
  readonly ciphers?: string[];
  /**
  * Threshold of missing client-alive responses that triggers a disconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#client_alive_count_max System#client_alive_count_max}
  */
  readonly clientAliveCountMax?: number;
  /**
  * Frequency of client-alive requests (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#client_alive_interval System#client_alive_interval}
  */
  readonly clientAliveInterval?: number;
  /**
  * Maximum number of allowed connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#connection_limit System#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Configure hash algorithm used when displaying key fingerprints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#fingerprint_hash System#fingerprint_hash}
  */
  readonly fingerprintHash?: string;
  /**
  * Specify permissible SSH host-key algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#hostkey_algorithm System#hostkey_algorithm}
  */
  readonly hostkeyAlgorithm?: string[];
  /**
  * Specify ssh key-exchange for Diffie-Hellman keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#key_exchange System#key_exchange}
  */
  readonly keyExchange?: string[];
  /**
  * Log changes to authorized keys to syslog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#log_key_changes System#log_key_changes}
  */
  readonly logKeyChanges?: boolean | cdktf.IResolvable;
  /**
  * Message Authentication Code algorithms allowed (SSHv2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#macs System#macs}
  */
  readonly macs?: string[];
  /**
  * Maximum number of pre-authentication SSH packets per single SSH connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#max_pre_authentication_packets System#max_pre_authentication_packets}
  */
  readonly maxPreAuthenticationPackets?: number;
  /**
  * Maximum number of sessions per single SSH connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#max_sessions_per_connection System#max_sessions_per_connection}
  */
  readonly maxSessionsPerConnection?: number;
  /**
  * Disables ssh password based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_passwords System#no_passwords}
  */
  readonly noPasswords?: boolean | cdktf.IResolvable;
  /**
  * Disables ssh public key based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_public_keys System#no_public_keys}
  */
  readonly noPublicKeys?: boolean | cdktf.IResolvable;
  /**
  * Do not allow forwarding TCP connections via SSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_tcp_forwarding System#no_tcp_forwarding}
  */
  readonly noTcpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Port number to accept incoming connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#port System#port}
  */
  readonly port?: number;
  /**
  * Specify ssh protocol versions supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#protocol_version System#protocol_version}
  */
  readonly protocolVersion?: string[];
  /**
  * Maximum number of connections per minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#rate_limit System#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Configure root access via ssh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#root_login System#root_login}
  */
  readonly rootLogin?: string;
  /**
  * Allow forwarding TCP connections via SSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#tcp_forwarding System#tcp_forwarding}
  */
  readonly tcpForwarding?: boolean | cdktf.IResolvable;
}

export function systemServicesSshToTerraform(struct?: SystemServicesSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticationOrder),
    ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ciphers),
    client_alive_count_max: cdktf.numberToTerraform(struct!.clientAliveCountMax),
    client_alive_interval: cdktf.numberToTerraform(struct!.clientAliveInterval),
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
    fingerprint_hash: cdktf.stringToTerraform(struct!.fingerprintHash),
    hostkey_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostkeyAlgorithm),
    key_exchange: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyExchange),
    log_key_changes: cdktf.booleanToTerraform(struct!.logKeyChanges),
    macs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.macs),
    max_pre_authentication_packets: cdktf.numberToTerraform(struct!.maxPreAuthenticationPackets),
    max_sessions_per_connection: cdktf.numberToTerraform(struct!.maxSessionsPerConnection),
    no_passwords: cdktf.booleanToTerraform(struct!.noPasswords),
    no_public_keys: cdktf.booleanToTerraform(struct!.noPublicKeys),
    no_tcp_forwarding: cdktf.booleanToTerraform(struct!.noTcpForwarding),
    port: cdktf.numberToTerraform(struct!.port),
    protocol_version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocolVersion),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    root_login: cdktf.stringToTerraform(struct!.rootLogin),
    tcp_forwarding: cdktf.booleanToTerraform(struct!.tcpForwarding),
  }
}


export function systemServicesSshToHclTerraform(struct?: SystemServicesSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authenticationOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ciphers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    client_alive_count_max: {
      value: cdktf.numberToHclTerraform(struct!.clientAliveCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_alive_interval: {
      value: cdktf.numberToHclTerraform(struct!.clientAliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fingerprint_hash: {
      value: cdktf.stringToHclTerraform(struct!.fingerprintHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostkey_algorithm: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostkeyAlgorithm),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    key_exchange: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyExchange),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    log_key_changes: {
      value: cdktf.booleanToHclTerraform(struct!.logKeyChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    macs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.macs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_pre_authentication_packets: {
      value: cdktf.numberToHclTerraform(struct!.maxPreAuthenticationPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_sessions_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxSessionsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_passwords: {
      value: cdktf.booleanToHclTerraform(struct!.noPasswords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_public_keys: {
      value: cdktf.booleanToHclTerraform(struct!.noPublicKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_tcp_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.noTcpForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocolVersion),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_login: {
      value: cdktf.stringToHclTerraform(struct!.rootLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.tcpForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationOrder = this._authenticationOrder;
    }
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._clientAliveCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAliveCountMax = this._clientAliveCountMax;
    }
    if (this._clientAliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAliveInterval = this._clientAliveInterval;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._fingerprintHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprintHash = this._fingerprintHash;
    }
    if (this._hostkeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostkeyAlgorithm = this._hostkeyAlgorithm;
    }
    if (this._keyExchange !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyExchange = this._keyExchange;
    }
    if (this._logKeyChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.logKeyChanges = this._logKeyChanges;
    }
    if (this._macs !== undefined) {
      hasAnyValues = true;
      internalValueResult.macs = this._macs;
    }
    if (this._maxPreAuthenticationPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPreAuthenticationPackets = this._maxPreAuthenticationPackets;
    }
    if (this._maxSessionsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessionsPerConnection = this._maxSessionsPerConnection;
    }
    if (this._noPasswords !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPasswords = this._noPasswords;
    }
    if (this._noPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPublicKeys = this._noPublicKeys;
    }
    if (this._noTcpForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTcpForwarding = this._noTcpForwarding;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._rootLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootLogin = this._rootLogin;
    }
    if (this._tcpForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpForwarding = this._tcpForwarding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationOrder = undefined;
      this._ciphers = undefined;
      this._clientAliveCountMax = undefined;
      this._clientAliveInterval = undefined;
      this._connectionLimit = undefined;
      this._fingerprintHash = undefined;
      this._hostkeyAlgorithm = undefined;
      this._keyExchange = undefined;
      this._logKeyChanges = undefined;
      this._macs = undefined;
      this._maxPreAuthenticationPackets = undefined;
      this._maxSessionsPerConnection = undefined;
      this._noPasswords = undefined;
      this._noPublicKeys = undefined;
      this._noTcpForwarding = undefined;
      this._port = undefined;
      this._protocolVersion = undefined;
      this._rateLimit = undefined;
      this._rootLogin = undefined;
      this._tcpForwarding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationOrder = value.authenticationOrder;
      this._ciphers = value.ciphers;
      this._clientAliveCountMax = value.clientAliveCountMax;
      this._clientAliveInterval = value.clientAliveInterval;
      this._connectionLimit = value.connectionLimit;
      this._fingerprintHash = value.fingerprintHash;
      this._hostkeyAlgorithm = value.hostkeyAlgorithm;
      this._keyExchange = value.keyExchange;
      this._logKeyChanges = value.logKeyChanges;
      this._macs = value.macs;
      this._maxPreAuthenticationPackets = value.maxPreAuthenticationPackets;
      this._maxSessionsPerConnection = value.maxSessionsPerConnection;
      this._noPasswords = value.noPasswords;
      this._noPublicKeys = value.noPublicKeys;
      this._noTcpForwarding = value.noTcpForwarding;
      this._port = value.port;
      this._protocolVersion = value.protocolVersion;
      this._rateLimit = value.rateLimit;
      this._rootLogin = value.rootLogin;
      this._tcpForwarding = value.tcpForwarding;
    }
  }

  // authentication_order - computed: false, optional: true, required: false
  private _authenticationOrder?: string[]; 
  public get authenticationOrder() {
    return this.getListAttribute('authentication_order');
  }
  public set authenticationOrder(value: string[]) {
    this._authenticationOrder = value;
  }
  public resetAuthenticationOrder() {
    this._authenticationOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderInput() {
    return this._authenticationOrder;
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string[]; 
  public get ciphers() {
    return cdktf.Fn.tolist(this.getListAttribute('ciphers'));
  }
  public set ciphers(value: string[]) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // client_alive_count_max - computed: false, optional: true, required: false
  private _clientAliveCountMax?: number; 
  public get clientAliveCountMax() {
    return this.getNumberAttribute('client_alive_count_max');
  }
  public set clientAliveCountMax(value: number) {
    this._clientAliveCountMax = value;
  }
  public resetClientAliveCountMax() {
    this._clientAliveCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAliveCountMaxInput() {
    return this._clientAliveCountMax;
  }

  // client_alive_interval - computed: false, optional: true, required: false
  private _clientAliveInterval?: number; 
  public get clientAliveInterval() {
    return this.getNumberAttribute('client_alive_interval');
  }
  public set clientAliveInterval(value: number) {
    this._clientAliveInterval = value;
  }
  public resetClientAliveInterval() {
    this._clientAliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAliveIntervalInput() {
    return this._clientAliveInterval;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // fingerprint_hash - computed: false, optional: true, required: false
  private _fingerprintHash?: string; 
  public get fingerprintHash() {
    return this.getStringAttribute('fingerprint_hash');
  }
  public set fingerprintHash(value: string) {
    this._fingerprintHash = value;
  }
  public resetFingerprintHash() {
    this._fingerprintHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintHashInput() {
    return this._fingerprintHash;
  }

  // hostkey_algorithm - computed: false, optional: true, required: false
  private _hostkeyAlgorithm?: string[]; 
  public get hostkeyAlgorithm() {
    return cdktf.Fn.tolist(this.getListAttribute('hostkey_algorithm'));
  }
  public set hostkeyAlgorithm(value: string[]) {
    this._hostkeyAlgorithm = value;
  }
  public resetHostkeyAlgorithm() {
    this._hostkeyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostkeyAlgorithmInput() {
    return this._hostkeyAlgorithm;
  }

  // key_exchange - computed: false, optional: true, required: false
  private _keyExchange?: string[]; 
  public get keyExchange() {
    return cdktf.Fn.tolist(this.getListAttribute('key_exchange'));
  }
  public set keyExchange(value: string[]) {
    this._keyExchange = value;
  }
  public resetKeyExchange() {
    this._keyExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyExchangeInput() {
    return this._keyExchange;
  }

  // log_key_changes - computed: false, optional: true, required: false
  private _logKeyChanges?: boolean | cdktf.IResolvable; 
  public get logKeyChanges() {
    return this.getBooleanAttribute('log_key_changes');
  }
  public set logKeyChanges(value: boolean | cdktf.IResolvable) {
    this._logKeyChanges = value;
  }
  public resetLogKeyChanges() {
    this._logKeyChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logKeyChangesInput() {
    return this._logKeyChanges;
  }

  // macs - computed: false, optional: true, required: false
  private _macs?: string[]; 
  public get macs() {
    return cdktf.Fn.tolist(this.getListAttribute('macs'));
  }
  public set macs(value: string[]) {
    this._macs = value;
  }
  public resetMacs() {
    this._macs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsInput() {
    return this._macs;
  }

  // max_pre_authentication_packets - computed: false, optional: true, required: false
  private _maxPreAuthenticationPackets?: number; 
  public get maxPreAuthenticationPackets() {
    return this.getNumberAttribute('max_pre_authentication_packets');
  }
  public set maxPreAuthenticationPackets(value: number) {
    this._maxPreAuthenticationPackets = value;
  }
  public resetMaxPreAuthenticationPackets() {
    this._maxPreAuthenticationPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreAuthenticationPacketsInput() {
    return this._maxPreAuthenticationPackets;
  }

  // max_sessions_per_connection - computed: false, optional: true, required: false
  private _maxSessionsPerConnection?: number; 
  public get maxSessionsPerConnection() {
    return this.getNumberAttribute('max_sessions_per_connection');
  }
  public set maxSessionsPerConnection(value: number) {
    this._maxSessionsPerConnection = value;
  }
  public resetMaxSessionsPerConnection() {
    this._maxSessionsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionsPerConnectionInput() {
    return this._maxSessionsPerConnection;
  }

  // no_passwords - computed: false, optional: true, required: false
  private _noPasswords?: boolean | cdktf.IResolvable; 
  public get noPasswords() {
    return this.getBooleanAttribute('no_passwords');
  }
  public set noPasswords(value: boolean | cdktf.IResolvable) {
    this._noPasswords = value;
  }
  public resetNoPasswords() {
    this._noPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPasswordsInput() {
    return this._noPasswords;
  }

  // no_public_keys - computed: false, optional: true, required: false
  private _noPublicKeys?: boolean | cdktf.IResolvable; 
  public get noPublicKeys() {
    return this.getBooleanAttribute('no_public_keys');
  }
  public set noPublicKeys(value: boolean | cdktf.IResolvable) {
    this._noPublicKeys = value;
  }
  public resetNoPublicKeys() {
    this._noPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPublicKeysInput() {
    return this._noPublicKeys;
  }

  // no_tcp_forwarding - computed: false, optional: true, required: false
  private _noTcpForwarding?: boolean | cdktf.IResolvable; 
  public get noTcpForwarding() {
    return this.getBooleanAttribute('no_tcp_forwarding');
  }
  public set noTcpForwarding(value: boolean | cdktf.IResolvable) {
    this._noTcpForwarding = value;
  }
  public resetNoTcpForwarding() {
    this._noTcpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTcpForwardingInput() {
    return this._noTcpForwarding;
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

  // protocol_version - computed: false, optional: true, required: false
  private _protocolVersion?: string[]; 
  public get protocolVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_version'));
  }
  public set protocolVersion(value: string[]) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // root_login - computed: false, optional: true, required: false
  private _rootLogin?: string; 
  public get rootLogin() {
    return this.getStringAttribute('root_login');
  }
  public set rootLogin(value: string) {
    this._rootLogin = value;
  }
  public resetRootLogin() {
    this._rootLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootLoginInput() {
    return this._rootLogin;
  }

  // tcp_forwarding - computed: false, optional: true, required: false
  private _tcpForwarding?: boolean | cdktf.IResolvable; 
  public get tcpForwarding() {
    return this.getBooleanAttribute('tcp_forwarding');
  }
  public set tcpForwarding(value: boolean | cdktf.IResolvable) {
    this._tcpForwarding = value;
  }
  public resetTcpForwarding() {
    this._tcpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpForwardingInput() {
    return this._tcpForwarding;
  }
}
export interface SystemServicesWebManagementHttp {
  /**
  * Specify the name of one or more interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#interface System#interface}
  */
  readonly interface?: string[];
  /**
  * Port number to connect to HTTP service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#port System#port}
  */
  readonly port?: number;
}

export function systemServicesWebManagementHttpToTerraform(struct?: SystemServicesWebManagementHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function systemServicesWebManagementHttpToHclTerraform(struct?: SystemServicesWebManagementHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesWebManagementHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesWebManagementHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesWebManagementHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._port = value.port;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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
}
export interface SystemServicesWebManagementHttps {
  /**
  * Specify the name of one or more interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#interface System#interface}
  */
  readonly interface?: string[];
  /**
  * Specify the name of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#local_certificate System#local_certificate}
  */
  readonly localCertificate?: string;
  /**
  * Specify the name of the certificate that is generated by the PKI and authenticated by a CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#pki_local_certificate System#pki_local_certificate}
  */
  readonly pkiLocalCertificate?: string;
  /**
  * Port number to connect to HTTPS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#port System#port}
  */
  readonly port?: number;
  /**
  * Will automatically generate a self-signed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#system_generated_certificate System#system_generated_certificate}
  */
  readonly systemGeneratedCertificate?: boolean | cdktf.IResolvable;
}

export function systemServicesWebManagementHttpsToTerraform(struct?: SystemServicesWebManagementHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    local_certificate: cdktf.stringToTerraform(struct!.localCertificate),
    pki_local_certificate: cdktf.stringToTerraform(struct!.pkiLocalCertificate),
    port: cdktf.numberToTerraform(struct!.port),
    system_generated_certificate: cdktf.booleanToTerraform(struct!.systemGeneratedCertificate),
  }
}


export function systemServicesWebManagementHttpsToHclTerraform(struct?: SystemServicesWebManagementHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_certificate: {
      value: cdktf.stringToHclTerraform(struct!.localCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pki_local_certificate: {
      value: cdktf.stringToHclTerraform(struct!.pkiLocalCertificate),
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
    system_generated_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.systemGeneratedCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesWebManagementHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesWebManagementHttps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._localCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.localCertificate = this._localCertificate;
    }
    if (this._pkiLocalCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiLocalCertificate = this._pkiLocalCertificate;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._systemGeneratedCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemGeneratedCertificate = this._systemGeneratedCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesWebManagementHttps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._localCertificate = undefined;
      this._pkiLocalCertificate = undefined;
      this._port = undefined;
      this._systemGeneratedCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._localCertificate = value.localCertificate;
      this._pkiLocalCertificate = value.pkiLocalCertificate;
      this._port = value.port;
      this._systemGeneratedCertificate = value.systemGeneratedCertificate;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // local_certificate - computed: false, optional: true, required: false
  private _localCertificate?: string; 
  public get localCertificate() {
    return this.getStringAttribute('local_certificate');
  }
  public set localCertificate(value: string) {
    this._localCertificate = value;
  }
  public resetLocalCertificate() {
    this._localCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertificateInput() {
    return this._localCertificate;
  }

  // pki_local_certificate - computed: false, optional: true, required: false
  private _pkiLocalCertificate?: string; 
  public get pkiLocalCertificate() {
    return this.getStringAttribute('pki_local_certificate');
  }
  public set pkiLocalCertificate(value: string) {
    this._pkiLocalCertificate = value;
  }
  public resetPkiLocalCertificate() {
    this._pkiLocalCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiLocalCertificateInput() {
    return this._pkiLocalCertificate;
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

  // system_generated_certificate - computed: false, optional: true, required: false
  private _systemGeneratedCertificate?: boolean | cdktf.IResolvable; 
  public get systemGeneratedCertificate() {
    return this.getBooleanAttribute('system_generated_certificate');
  }
  public set systemGeneratedCertificate(value: boolean | cdktf.IResolvable) {
    this._systemGeneratedCertificate = value;
  }
  public resetSystemGeneratedCertificate() {
    this._systemGeneratedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemGeneratedCertificateInput() {
    return this._systemGeneratedCertificate;
  }
}
export interface SystemServices {
  /**
  * Default timeout of web-management sessions (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#web_management_session_idle_timeout System#web_management_session_idle_timeout}
  */
  readonly webManagementSessionIdleTimeout?: number;
  /**
  * Maximum number of web-management sessions to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#web_management_session_limit System#web_management_session_limit}
  */
  readonly webManagementSessionLimit?: number;
  /**
  * netconf_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#netconf_ssh System#netconf_ssh}
  */
  readonly netconfSsh?: SystemServicesNetconfSsh;
  /**
  * netconf_traceoptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#netconf_traceoptions System#netconf_traceoptions}
  */
  readonly netconfTraceoptions?: SystemServicesNetconfTraceoptions;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ssh System#ssh}
  */
  readonly ssh?: SystemServicesSsh;
  /**
  * web_management_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#web_management_http System#web_management_http}
  */
  readonly webManagementHttp?: SystemServicesWebManagementHttp;
  /**
  * web_management_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#web_management_https System#web_management_https}
  */
  readonly webManagementHttps?: SystemServicesWebManagementHttps;
}

export function systemServicesToTerraform(struct?: SystemServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    web_management_session_idle_timeout: cdktf.numberToTerraform(struct!.webManagementSessionIdleTimeout),
    web_management_session_limit: cdktf.numberToTerraform(struct!.webManagementSessionLimit),
    netconf_ssh: systemServicesNetconfSshToTerraform(struct!.netconfSsh),
    netconf_traceoptions: systemServicesNetconfTraceoptionsToTerraform(struct!.netconfTraceoptions),
    ssh: systemServicesSshToTerraform(struct!.ssh),
    web_management_http: systemServicesWebManagementHttpToTerraform(struct!.webManagementHttp),
    web_management_https: systemServicesWebManagementHttpsToTerraform(struct!.webManagementHttps),
  }
}


export function systemServicesToHclTerraform(struct?: SystemServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    web_management_session_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.webManagementSessionIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_management_session_limit: {
      value: cdktf.numberToHclTerraform(struct!.webManagementSessionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netconf_ssh: {
      value: systemServicesNetconfSshToHclTerraform(struct!.netconfSsh),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemServicesNetconfSsh",
    },
    netconf_traceoptions: {
      value: systemServicesNetconfTraceoptionsToHclTerraform(struct!.netconfTraceoptions),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemServicesNetconfTraceoptions",
    },
    ssh: {
      value: systemServicesSshToHclTerraform(struct!.ssh),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemServicesSsh",
    },
    web_management_http: {
      value: systemServicesWebManagementHttpToHclTerraform(struct!.webManagementHttp),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemServicesWebManagementHttp",
    },
    web_management_https: {
      value: systemServicesWebManagementHttpsToHclTerraform(struct!.webManagementHttps),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemServicesWebManagementHttps",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webManagementSessionIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.webManagementSessionIdleTimeout = this._webManagementSessionIdleTimeout;
    }
    if (this._webManagementSessionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.webManagementSessionLimit = this._webManagementSessionLimit;
    }
    if (this._netconfSsh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netconfSsh = this._netconfSsh?.internalValue;
    }
    if (this._netconfTraceoptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netconfTraceoptions = this._netconfTraceoptions?.internalValue;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    if (this._webManagementHttp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webManagementHttp = this._webManagementHttp?.internalValue;
    }
    if (this._webManagementHttps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webManagementHttps = this._webManagementHttps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._webManagementSessionIdleTimeout = undefined;
      this._webManagementSessionLimit = undefined;
      this._netconfSsh.internalValue = undefined;
      this._netconfTraceoptions.internalValue = undefined;
      this._ssh.internalValue = undefined;
      this._webManagementHttp.internalValue = undefined;
      this._webManagementHttps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._webManagementSessionIdleTimeout = value.webManagementSessionIdleTimeout;
      this._webManagementSessionLimit = value.webManagementSessionLimit;
      this._netconfSsh.internalValue = value.netconfSsh;
      this._netconfTraceoptions.internalValue = value.netconfTraceoptions;
      this._ssh.internalValue = value.ssh;
      this._webManagementHttp.internalValue = value.webManagementHttp;
      this._webManagementHttps.internalValue = value.webManagementHttps;
    }
  }

  // web_management_session_idle_timeout - computed: false, optional: true, required: false
  private _webManagementSessionIdleTimeout?: number; 
  public get webManagementSessionIdleTimeout() {
    return this.getNumberAttribute('web_management_session_idle_timeout');
  }
  public set webManagementSessionIdleTimeout(value: number) {
    this._webManagementSessionIdleTimeout = value;
  }
  public resetWebManagementSessionIdleTimeout() {
    this._webManagementSessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webManagementSessionIdleTimeoutInput() {
    return this._webManagementSessionIdleTimeout;
  }

  // web_management_session_limit - computed: false, optional: true, required: false
  private _webManagementSessionLimit?: number; 
  public get webManagementSessionLimit() {
    return this.getNumberAttribute('web_management_session_limit');
  }
  public set webManagementSessionLimit(value: number) {
    this._webManagementSessionLimit = value;
  }
  public resetWebManagementSessionLimit() {
    this._webManagementSessionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webManagementSessionLimitInput() {
    return this._webManagementSessionLimit;
  }

  // netconf_ssh - computed: false, optional: true, required: false
  private _netconfSsh = new SystemServicesNetconfSshOutputReference(this, "netconf_ssh");
  public get netconfSsh() {
    return this._netconfSsh;
  }
  public putNetconfSsh(value: SystemServicesNetconfSsh) {
    this._netconfSsh.internalValue = value;
  }
  public resetNetconfSsh() {
    this._netconfSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netconfSshInput() {
    return this._netconfSsh.internalValue;
  }

  // netconf_traceoptions - computed: false, optional: true, required: false
  private _netconfTraceoptions = new SystemServicesNetconfTraceoptionsOutputReference(this, "netconf_traceoptions");
  public get netconfTraceoptions() {
    return this._netconfTraceoptions;
  }
  public putNetconfTraceoptions(value: SystemServicesNetconfTraceoptions) {
    this._netconfTraceoptions.internalValue = value;
  }
  public resetNetconfTraceoptions() {
    this._netconfTraceoptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netconfTraceoptionsInput() {
    return this._netconfTraceoptions.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new SystemServicesSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: SystemServicesSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // web_management_http - computed: false, optional: true, required: false
  private _webManagementHttp = new SystemServicesWebManagementHttpOutputReference(this, "web_management_http");
  public get webManagementHttp() {
    return this._webManagementHttp;
  }
  public putWebManagementHttp(value: SystemServicesWebManagementHttp) {
    this._webManagementHttp.internalValue = value;
  }
  public resetWebManagementHttp() {
    this._webManagementHttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webManagementHttpInput() {
    return this._webManagementHttp.internalValue;
  }

  // web_management_https - computed: false, optional: true, required: false
  private _webManagementHttps = new SystemServicesWebManagementHttpsOutputReference(this, "web_management_https");
  public get webManagementHttps() {
    return this._webManagementHttps;
  }
  public putWebManagementHttps(value: SystemServicesWebManagementHttps) {
    this._webManagementHttps.internalValue = value;
  }
  public resetWebManagementHttps() {
    this._webManagementHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webManagementHttpsInput() {
    return this._webManagementHttps.internalValue;
  }
}
export interface SystemSyslogArchive {
  /**
  * ark file as if it contains binary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#binary_data System#binary_data}
  */
  readonly binaryData?: boolean | cdktf.IResolvable;
  /**
  * Number of files to be archived.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#files System#files}
  */
  readonly files?: number;
  /**
  * Don't mark file as if it contains binary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_binary_data System#no_binary_data}
  */
  readonly noBinaryData?: boolean | cdktf.IResolvable;
  /**
  * Don't allow any user to read the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#no_world_readable System#no_world_readable}
  */
  readonly noWorldReadable?: boolean | cdktf.IResolvable;
  /**
  * Size of files to be archived.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#size System#size}
  */
  readonly size?: number;
  /**
  * Allow any user to read the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#world_readable System#world_readable}
  */
  readonly worldReadable?: boolean | cdktf.IResolvable;
}

export function systemSyslogArchiveToTerraform(struct?: SystemSyslogArchive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_data: cdktf.booleanToTerraform(struct!.binaryData),
    files: cdktf.numberToTerraform(struct!.files),
    no_binary_data: cdktf.booleanToTerraform(struct!.noBinaryData),
    no_world_readable: cdktf.booleanToTerraform(struct!.noWorldReadable),
    size: cdktf.numberToTerraform(struct!.size),
    world_readable: cdktf.booleanToTerraform(struct!.worldReadable),
  }
}


export function systemSyslogArchiveToHclTerraform(struct?: SystemSyslogArchive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_data: {
      value: cdktf.booleanToHclTerraform(struct!.binaryData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    files: {
      value: cdktf.numberToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_binary_data: {
      value: cdktf.booleanToHclTerraform(struct!.noBinaryData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_world_readable: {
      value: cdktf.booleanToHclTerraform(struct!.noWorldReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    world_readable: {
      value: cdktf.booleanToHclTerraform(struct!.worldReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSyslogArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemSyslogArchive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryData !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryData = this._binaryData;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._noBinaryData !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBinaryData = this._noBinaryData;
    }
    if (this._noWorldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWorldReadable = this._noWorldReadable;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._worldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.worldReadable = this._worldReadable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSyslogArchive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binaryData = undefined;
      this._files = undefined;
      this._noBinaryData = undefined;
      this._noWorldReadable = undefined;
      this._size = undefined;
      this._worldReadable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binaryData = value.binaryData;
      this._files = value.files;
      this._noBinaryData = value.noBinaryData;
      this._noWorldReadable = value.noWorldReadable;
      this._size = value.size;
      this._worldReadable = value.worldReadable;
    }
  }

  // binary_data - computed: false, optional: true, required: false
  private _binaryData?: boolean | cdktf.IResolvable; 
  public get binaryData() {
    return this.getBooleanAttribute('binary_data');
  }
  public set binaryData(value: boolean | cdktf.IResolvable) {
    this._binaryData = value;
  }
  public resetBinaryData() {
    this._binaryData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryDataInput() {
    return this._binaryData;
  }

  // files - computed: false, optional: true, required: false
  private _files?: number; 
  public get files() {
    return this.getNumberAttribute('files');
  }
  public set files(value: number) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // no_binary_data - computed: false, optional: true, required: false
  private _noBinaryData?: boolean | cdktf.IResolvable; 
  public get noBinaryData() {
    return this.getBooleanAttribute('no_binary_data');
  }
  public set noBinaryData(value: boolean | cdktf.IResolvable) {
    this._noBinaryData = value;
  }
  public resetNoBinaryData() {
    this._noBinaryData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBinaryDataInput() {
    return this._noBinaryData;
  }

  // no_world_readable - computed: false, optional: true, required: false
  private _noWorldReadable?: boolean | cdktf.IResolvable; 
  public get noWorldReadable() {
    return this.getBooleanAttribute('no_world_readable');
  }
  public set noWorldReadable(value: boolean | cdktf.IResolvable) {
    this._noWorldReadable = value;
  }
  public resetNoWorldReadable() {
    this._noWorldReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWorldReadableInput() {
    return this._noWorldReadable;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // world_readable - computed: false, optional: true, required: false
  private _worldReadable?: boolean | cdktf.IResolvable; 
  public get worldReadable() {
    return this.getBooleanAttribute('world_readable');
  }
  public set worldReadable(value: boolean | cdktf.IResolvable) {
    this._worldReadable = value;
  }
  public resetWorldReadable() {
    this._worldReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get worldReadableInput() {
    return this._worldReadable;
  }
}
export interface SystemSyslogConsole {
  /**
  * All facilities severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#any_severity System#any_severity}
  */
  readonly anySeverity?: string;
  /**
  * Authorization system severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#authorization_severity System#authorization_severity}
  */
  readonly authorizationSeverity?: string;
  /**
  * Configuration change log severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#changelog_severity System#changelog_severity}
  */
  readonly changelogSeverity?: string;
  /**
  * Configuration conflict log severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#conflictlog_severity System#conflictlog_severity}
  */
  readonly conflictlogSeverity?: string;
  /**
  * Various system processes severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#daemon_severity System#daemon_severity}
  */
  readonly daemonSeverity?: string;
  /**
  * Dynamic flow capture severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#dfc_severity System#dfc_severity}
  */
  readonly dfcSeverity?: string;
  /**
  * Local external applications severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#external_severity System#external_severity}
  */
  readonly externalSeverity?: string;
  /**
  * Firewall filtering system severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#firewall_severity System#firewall_severity}
  */
  readonly firewallSeverity?: string;
  /**
  * FTP process severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ftp_severity System#ftp_severity}
  */
  readonly ftpSeverity?: string;
  /**
  * Commands executed by the UI severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#interactivecommands_severity System#interactivecommands_severity}
  */
  readonly interactivecommandsSeverity?: string;
  /**
  * Kernel severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#kernel_severity System#kernel_severity}
  */
  readonly kernelSeverity?: string;
  /**
  * NTP process severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#ntp_severity System#ntp_severity}
  */
  readonly ntpSeverity?: string;
  /**
  * Packet Forwarding Engine severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#pfe_severity System#pfe_severity}
  */
  readonly pfeSeverity?: string;
  /**
  * Security related severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#security_severity System#security_severity}
  */
  readonly securitySeverity?: string;
  /**
  * User processes severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#user_severity System#user_severity}
  */
  readonly userSeverity?: string;
}

export function systemSyslogConsoleToTerraform(struct?: SystemSyslogConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_severity: cdktf.stringToTerraform(struct!.anySeverity),
    authorization_severity: cdktf.stringToTerraform(struct!.authorizationSeverity),
    changelog_severity: cdktf.stringToTerraform(struct!.changelogSeverity),
    conflictlog_severity: cdktf.stringToTerraform(struct!.conflictlogSeverity),
    daemon_severity: cdktf.stringToTerraform(struct!.daemonSeverity),
    dfc_severity: cdktf.stringToTerraform(struct!.dfcSeverity),
    external_severity: cdktf.stringToTerraform(struct!.externalSeverity),
    firewall_severity: cdktf.stringToTerraform(struct!.firewallSeverity),
    ftp_severity: cdktf.stringToTerraform(struct!.ftpSeverity),
    interactivecommands_severity: cdktf.stringToTerraform(struct!.interactivecommandsSeverity),
    kernel_severity: cdktf.stringToTerraform(struct!.kernelSeverity),
    ntp_severity: cdktf.stringToTerraform(struct!.ntpSeverity),
    pfe_severity: cdktf.stringToTerraform(struct!.pfeSeverity),
    security_severity: cdktf.stringToTerraform(struct!.securitySeverity),
    user_severity: cdktf.stringToTerraform(struct!.userSeverity),
  }
}


export function systemSyslogConsoleToHclTerraform(struct?: SystemSyslogConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_severity: {
      value: cdktf.stringToHclTerraform(struct!.anySeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_severity: {
      value: cdktf.stringToHclTerraform(struct!.authorizationSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    changelog_severity: {
      value: cdktf.stringToHclTerraform(struct!.changelogSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conflictlog_severity: {
      value: cdktf.stringToHclTerraform(struct!.conflictlogSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daemon_severity: {
      value: cdktf.stringToHclTerraform(struct!.daemonSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dfc_severity: {
      value: cdktf.stringToHclTerraform(struct!.dfcSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_severity: {
      value: cdktf.stringToHclTerraform(struct!.externalSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall_severity: {
      value: cdktf.stringToHclTerraform(struct!.firewallSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftp_severity: {
      value: cdktf.stringToHclTerraform(struct!.ftpSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interactivecommands_severity: {
      value: cdktf.stringToHclTerraform(struct!.interactivecommandsSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel_severity: {
      value: cdktf.stringToHclTerraform(struct!.kernelSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_severity: {
      value: cdktf.stringToHclTerraform(struct!.ntpSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pfe_severity: {
      value: cdktf.stringToHclTerraform(struct!.pfeSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_severity: {
      value: cdktf.stringToHclTerraform(struct!.securitySeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_severity: {
      value: cdktf.stringToHclTerraform(struct!.userSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSyslogConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemSyslogConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anySeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.anySeverity = this._anySeverity;
    }
    if (this._authorizationSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationSeverity = this._authorizationSeverity;
    }
    if (this._changelogSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.changelogSeverity = this._changelogSeverity;
    }
    if (this._conflictlogSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictlogSeverity = this._conflictlogSeverity;
    }
    if (this._daemonSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonSeverity = this._daemonSeverity;
    }
    if (this._dfcSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfcSeverity = this._dfcSeverity;
    }
    if (this._externalSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSeverity = this._externalSeverity;
    }
    if (this._firewallSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallSeverity = this._firewallSeverity;
    }
    if (this._ftpSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpSeverity = this._ftpSeverity;
    }
    if (this._interactivecommandsSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactivecommandsSeverity = this._interactivecommandsSeverity;
    }
    if (this._kernelSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelSeverity = this._kernelSeverity;
    }
    if (this._ntpSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpSeverity = this._ntpSeverity;
    }
    if (this._pfeSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfeSeverity = this._pfeSeverity;
    }
    if (this._securitySeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.securitySeverity = this._securitySeverity;
    }
    if (this._userSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSeverity = this._userSeverity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSyslogConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anySeverity = undefined;
      this._authorizationSeverity = undefined;
      this._changelogSeverity = undefined;
      this._conflictlogSeverity = undefined;
      this._daemonSeverity = undefined;
      this._dfcSeverity = undefined;
      this._externalSeverity = undefined;
      this._firewallSeverity = undefined;
      this._ftpSeverity = undefined;
      this._interactivecommandsSeverity = undefined;
      this._kernelSeverity = undefined;
      this._ntpSeverity = undefined;
      this._pfeSeverity = undefined;
      this._securitySeverity = undefined;
      this._userSeverity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anySeverity = value.anySeverity;
      this._authorizationSeverity = value.authorizationSeverity;
      this._changelogSeverity = value.changelogSeverity;
      this._conflictlogSeverity = value.conflictlogSeverity;
      this._daemonSeverity = value.daemonSeverity;
      this._dfcSeverity = value.dfcSeverity;
      this._externalSeverity = value.externalSeverity;
      this._firewallSeverity = value.firewallSeverity;
      this._ftpSeverity = value.ftpSeverity;
      this._interactivecommandsSeverity = value.interactivecommandsSeverity;
      this._kernelSeverity = value.kernelSeverity;
      this._ntpSeverity = value.ntpSeverity;
      this._pfeSeverity = value.pfeSeverity;
      this._securitySeverity = value.securitySeverity;
      this._userSeverity = value.userSeverity;
    }
  }

  // any_severity - computed: false, optional: true, required: false
  private _anySeverity?: string; 
  public get anySeverity() {
    return this.getStringAttribute('any_severity');
  }
  public set anySeverity(value: string) {
    this._anySeverity = value;
  }
  public resetAnySeverity() {
    this._anySeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anySeverityInput() {
    return this._anySeverity;
  }

  // authorization_severity - computed: false, optional: true, required: false
  private _authorizationSeverity?: string; 
  public get authorizationSeverity() {
    return this.getStringAttribute('authorization_severity');
  }
  public set authorizationSeverity(value: string) {
    this._authorizationSeverity = value;
  }
  public resetAuthorizationSeverity() {
    this._authorizationSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationSeverityInput() {
    return this._authorizationSeverity;
  }

  // changelog_severity - computed: false, optional: true, required: false
  private _changelogSeverity?: string; 
  public get changelogSeverity() {
    return this.getStringAttribute('changelog_severity');
  }
  public set changelogSeverity(value: string) {
    this._changelogSeverity = value;
  }
  public resetChangelogSeverity() {
    this._changelogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogSeverityInput() {
    return this._changelogSeverity;
  }

  // conflictlog_severity - computed: false, optional: true, required: false
  private _conflictlogSeverity?: string; 
  public get conflictlogSeverity() {
    return this.getStringAttribute('conflictlog_severity');
  }
  public set conflictlogSeverity(value: string) {
    this._conflictlogSeverity = value;
  }
  public resetConflictlogSeverity() {
    this._conflictlogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictlogSeverityInput() {
    return this._conflictlogSeverity;
  }

  // daemon_severity - computed: false, optional: true, required: false
  private _daemonSeverity?: string; 
  public get daemonSeverity() {
    return this.getStringAttribute('daemon_severity');
  }
  public set daemonSeverity(value: string) {
    this._daemonSeverity = value;
  }
  public resetDaemonSeverity() {
    this._daemonSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSeverityInput() {
    return this._daemonSeverity;
  }

  // dfc_severity - computed: false, optional: true, required: false
  private _dfcSeverity?: string; 
  public get dfcSeverity() {
    return this.getStringAttribute('dfc_severity');
  }
  public set dfcSeverity(value: string) {
    this._dfcSeverity = value;
  }
  public resetDfcSeverity() {
    this._dfcSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfcSeverityInput() {
    return this._dfcSeverity;
  }

  // external_severity - computed: false, optional: true, required: false
  private _externalSeverity?: string; 
  public get externalSeverity() {
    return this.getStringAttribute('external_severity');
  }
  public set externalSeverity(value: string) {
    this._externalSeverity = value;
  }
  public resetExternalSeverity() {
    this._externalSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSeverityInput() {
    return this._externalSeverity;
  }

  // firewall_severity - computed: false, optional: true, required: false
  private _firewallSeverity?: string; 
  public get firewallSeverity() {
    return this.getStringAttribute('firewall_severity');
  }
  public set firewallSeverity(value: string) {
    this._firewallSeverity = value;
  }
  public resetFirewallSeverity() {
    this._firewallSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSeverityInput() {
    return this._firewallSeverity;
  }

  // ftp_severity - computed: false, optional: true, required: false
  private _ftpSeverity?: string; 
  public get ftpSeverity() {
    return this.getStringAttribute('ftp_severity');
  }
  public set ftpSeverity(value: string) {
    this._ftpSeverity = value;
  }
  public resetFtpSeverity() {
    this._ftpSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpSeverityInput() {
    return this._ftpSeverity;
  }

  // interactivecommands_severity - computed: false, optional: true, required: false
  private _interactivecommandsSeverity?: string; 
  public get interactivecommandsSeverity() {
    return this.getStringAttribute('interactivecommands_severity');
  }
  public set interactivecommandsSeverity(value: string) {
    this._interactivecommandsSeverity = value;
  }
  public resetInteractivecommandsSeverity() {
    this._interactivecommandsSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactivecommandsSeverityInput() {
    return this._interactivecommandsSeverity;
  }

  // kernel_severity - computed: false, optional: true, required: false
  private _kernelSeverity?: string; 
  public get kernelSeverity() {
    return this.getStringAttribute('kernel_severity');
  }
  public set kernelSeverity(value: string) {
    this._kernelSeverity = value;
  }
  public resetKernelSeverity() {
    this._kernelSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelSeverityInput() {
    return this._kernelSeverity;
  }

  // ntp_severity - computed: false, optional: true, required: false
  private _ntpSeverity?: string; 
  public get ntpSeverity() {
    return this.getStringAttribute('ntp_severity');
  }
  public set ntpSeverity(value: string) {
    this._ntpSeverity = value;
  }
  public resetNtpSeverity() {
    this._ntpSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpSeverityInput() {
    return this._ntpSeverity;
  }

  // pfe_severity - computed: false, optional: true, required: false
  private _pfeSeverity?: string; 
  public get pfeSeverity() {
    return this.getStringAttribute('pfe_severity');
  }
  public set pfeSeverity(value: string) {
    this._pfeSeverity = value;
  }
  public resetPfeSeverity() {
    this._pfeSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfeSeverityInput() {
    return this._pfeSeverity;
  }

  // security_severity - computed: false, optional: true, required: false
  private _securitySeverity?: string; 
  public get securitySeverity() {
    return this.getStringAttribute('security_severity');
  }
  public set securitySeverity(value: string) {
    this._securitySeverity = value;
  }
  public resetSecuritySeverity() {
    this._securitySeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySeverityInput() {
    return this._securitySeverity;
  }

  // user_severity - computed: false, optional: true, required: false
  private _userSeverity?: string; 
  public get userSeverity() {
    return this.getStringAttribute('user_severity');
  }
  public set userSeverity(value: string) {
    this._userSeverity = value;
  }
  public resetUserSeverity() {
    this._userSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSeverityInput() {
    return this._userSeverity;
  }
}
export interface SystemSyslog {
  /**
  * Rotate log frequency (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#log_rotate_frequency System#log_rotate_frequency}
  */
  readonly logRotateFrequency?: number;
  /**
  * Use specified address as source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#source_address System#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Include milliseconds in system log timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#time_format_millisecond System#time_format_millisecond}
  */
  readonly timeFormatMillisecond?: boolean | cdktf.IResolvable;
  /**
  * Include year in system log timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#time_format_year System#time_format_year}
  */
  readonly timeFormatYear?: boolean | cdktf.IResolvable;
  /**
  * archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#archive System#archive}
  */
  readonly archive?: SystemSyslogArchive;
  /**
  * console block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#console System#console}
  */
  readonly console?: SystemSyslogConsole;
}

export function systemSyslogToTerraform(struct?: SystemSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_rotate_frequency: cdktf.numberToTerraform(struct!.logRotateFrequency),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    time_format_millisecond: cdktf.booleanToTerraform(struct!.timeFormatMillisecond),
    time_format_year: cdktf.booleanToTerraform(struct!.timeFormatYear),
    archive: systemSyslogArchiveToTerraform(struct!.archive),
    console: systemSyslogConsoleToTerraform(struct!.console),
  }
}


export function systemSyslogToHclTerraform(struct?: SystemSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_rotate_frequency: {
      value: cdktf.numberToHclTerraform(struct!.logRotateFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format_millisecond: {
      value: cdktf.booleanToHclTerraform(struct!.timeFormatMillisecond),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_format_year: {
      value: cdktf.booleanToHclTerraform(struct!.timeFormatYear),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    archive: {
      value: systemSyslogArchiveToHclTerraform(struct!.archive),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemSyslogArchive",
    },
    console: {
      value: systemSyslogConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemSyslogConsole",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSyslogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logRotateFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRotateFrequency = this._logRotateFrequency;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._timeFormatMillisecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormatMillisecond = this._timeFormatMillisecond;
    }
    if (this._timeFormatYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormatYear = this._timeFormatYear;
    }
    if (this._archive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archive = this._archive?.internalValue;
    }
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logRotateFrequency = undefined;
      this._sourceAddress = undefined;
      this._timeFormatMillisecond = undefined;
      this._timeFormatYear = undefined;
      this._archive.internalValue = undefined;
      this._console.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logRotateFrequency = value.logRotateFrequency;
      this._sourceAddress = value.sourceAddress;
      this._timeFormatMillisecond = value.timeFormatMillisecond;
      this._timeFormatYear = value.timeFormatYear;
      this._archive.internalValue = value.archive;
      this._console.internalValue = value.console;
    }
  }

  // log_rotate_frequency - computed: false, optional: true, required: false
  private _logRotateFrequency?: number; 
  public get logRotateFrequency() {
    return this.getNumberAttribute('log_rotate_frequency');
  }
  public set logRotateFrequency(value: number) {
    this._logRotateFrequency = value;
  }
  public resetLogRotateFrequency() {
    this._logRotateFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRotateFrequencyInput() {
    return this._logRotateFrequency;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // time_format_millisecond - computed: false, optional: true, required: false
  private _timeFormatMillisecond?: boolean | cdktf.IResolvable; 
  public get timeFormatMillisecond() {
    return this.getBooleanAttribute('time_format_millisecond');
  }
  public set timeFormatMillisecond(value: boolean | cdktf.IResolvable) {
    this._timeFormatMillisecond = value;
  }
  public resetTimeFormatMillisecond() {
    this._timeFormatMillisecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatMillisecondInput() {
    return this._timeFormatMillisecond;
  }

  // time_format_year - computed: false, optional: true, required: false
  private _timeFormatYear?: boolean | cdktf.IResolvable; 
  public get timeFormatYear() {
    return this.getBooleanAttribute('time_format_year');
  }
  public set timeFormatYear(value: boolean | cdktf.IResolvable) {
    this._timeFormatYear = value;
  }
  public resetTimeFormatYear() {
    this._timeFormatYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatYearInput() {
    return this._timeFormatYear;
  }

  // archive - computed: false, optional: true, required: false
  private _archive = new SystemSyslogArchiveOutputReference(this, "archive");
  public get archive() {
    return this._archive;
  }
  public putArchive(value: SystemSyslogArchive) {
    this._archive.internalValue = value;
  }
  public resetArchive() {
    this._archive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive.internalValue;
  }

  // console - computed: false, optional: true, required: false
  private _console = new SystemSyslogConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: SystemSyslogConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system junos_system}
*/
export class System extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a System resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the System to import
  * @param importFromId The id of the existing System that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the System to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system junos_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_system',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationOrder = config.authenticationOrder;
    this._autoSnapshot = config.autoSnapshot;
    this._defaultAddressSelection = config.defaultAddressSelection;
    this._domainName = config.domainName;
    this._hostName = config.hostName;
    this._maxConfigurationRollbacks = config.maxConfigurationRollbacks;
    this._maxConfigurationsOnFlash = config.maxConfigurationsOnFlash;
    this._nameServer = config.nameServer;
    this._noMulticastEcho = config.noMulticastEcho;
    this._noPingRecordRoute = config.noPingRecordRoute;
    this._noPingTimeStamp = config.noPingTimeStamp;
    this._noRedirects = config.noRedirects;
    this._noRedirectsIpv6 = config.noRedirectsIpv6;
    this._radiusOptionsAttributesNasId = config.radiusOptionsAttributesNasId;
    this._radiusOptionsAttributesNasIpaddress = config.radiusOptionsAttributesNasIpaddress;
    this._radiusOptionsEnhancedAccounting = config.radiusOptionsEnhancedAccounting;
    this._radiusOptionsPasswordProtocolMschapv2 = config.radiusOptionsPasswordProtocolMschapv2;
    this._tacplusOptionsAuthorizationTimeInterval = config.tacplusOptionsAuthorizationTimeInterval;
    this._tacplusOptionsEnhancedAccounting = config.tacplusOptionsEnhancedAccounting;
    this._tacplusOptionsExcludeCmdAttribute = config.tacplusOptionsExcludeCmdAttribute;
    this._tacplusOptionsNoCmdAttributeValue = config.tacplusOptionsNoCmdAttributeValue;
    this._tacplusOptionsNoStrictAuthorization = config.tacplusOptionsNoStrictAuthorization;
    this._tacplusOptionsServiceName = config.tacplusOptionsServiceName;
    this._tacplusOptionsStrictAuthorization = config.tacplusOptionsStrictAuthorization;
    this._tacplusOptionsTimestampAndTimezone = config.tacplusOptionsTimestampAndTimezone;
    this._timeZone = config.timeZone;
    this._tracingDestOverrideSyslogHost = config.tracingDestOverrideSyslogHost;
    this._accounting.internalValue = config.accounting;
    this._archivalConfiguration.internalValue = config.archivalConfiguration;
    this._inet6BackupRouter.internalValue = config.inet6BackupRouter;
    this._internetOptions.internalValue = config.internetOptions;
    this._license.internalValue = config.license;
    this._login.internalValue = config.login;
    this._nameServerOpts.internalValue = config.nameServerOpts;
    this._ntp.internalValue = config.ntp;
    this._ports.internalValue = config.ports;
    this._services.internalValue = config.services;
    this._syslog.internalValue = config.syslog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_order - computed: false, optional: true, required: false
  private _authenticationOrder?: string[]; 
  public get authenticationOrder() {
    return this.getListAttribute('authentication_order');
  }
  public set authenticationOrder(value: string[]) {
    this._authenticationOrder = value;
  }
  public resetAuthenticationOrder() {
    this._authenticationOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderInput() {
    return this._authenticationOrder;
  }

  // auto_snapshot - computed: false, optional: true, required: false
  private _autoSnapshot?: boolean | cdktf.IResolvable; 
  public get autoSnapshot() {
    return this.getBooleanAttribute('auto_snapshot');
  }
  public set autoSnapshot(value: boolean | cdktf.IResolvable) {
    this._autoSnapshot = value;
  }
  public resetAutoSnapshot() {
    this._autoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotInput() {
    return this._autoSnapshot;
  }

  // default_address_selection - computed: false, optional: true, required: false
  private _defaultAddressSelection?: boolean | cdktf.IResolvable; 
  public get defaultAddressSelection() {
    return this.getBooleanAttribute('default_address_selection');
  }
  public set defaultAddressSelection(value: boolean | cdktf.IResolvable) {
    this._defaultAddressSelection = value;
  }
  public resetDefaultAddressSelection() {
    this._defaultAddressSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddressSelectionInput() {
    return this._defaultAddressSelection;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_configuration_rollbacks - computed: false, optional: true, required: false
  private _maxConfigurationRollbacks?: number; 
  public get maxConfigurationRollbacks() {
    return this.getNumberAttribute('max_configuration_rollbacks');
  }
  public set maxConfigurationRollbacks(value: number) {
    this._maxConfigurationRollbacks = value;
  }
  public resetMaxConfigurationRollbacks() {
    this._maxConfigurationRollbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConfigurationRollbacksInput() {
    return this._maxConfigurationRollbacks;
  }

  // max_configurations_on_flash - computed: false, optional: true, required: false
  private _maxConfigurationsOnFlash?: number; 
  public get maxConfigurationsOnFlash() {
    return this.getNumberAttribute('max_configurations_on_flash');
  }
  public set maxConfigurationsOnFlash(value: number) {
    this._maxConfigurationsOnFlash = value;
  }
  public resetMaxConfigurationsOnFlash() {
    this._maxConfigurationsOnFlash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConfigurationsOnFlashInput() {
    return this._maxConfigurationsOnFlash;
  }

  // name_server - computed: false, optional: true, required: false
  private _nameServer?: string[]; 
  public get nameServer() {
    return this.getListAttribute('name_server');
  }
  public set nameServer(value: string[]) {
    this._nameServer = value;
  }
  public resetNameServer() {
    this._nameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer;
  }

  // no_multicast_echo - computed: false, optional: true, required: false
  private _noMulticastEcho?: boolean | cdktf.IResolvable; 
  public get noMulticastEcho() {
    return this.getBooleanAttribute('no_multicast_echo');
  }
  public set noMulticastEcho(value: boolean | cdktf.IResolvable) {
    this._noMulticastEcho = value;
  }
  public resetNoMulticastEcho() {
    this._noMulticastEcho = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMulticastEchoInput() {
    return this._noMulticastEcho;
  }

  // no_ping_record_route - computed: false, optional: true, required: false
  private _noPingRecordRoute?: boolean | cdktf.IResolvable; 
  public get noPingRecordRoute() {
    return this.getBooleanAttribute('no_ping_record_route');
  }
  public set noPingRecordRoute(value: boolean | cdktf.IResolvable) {
    this._noPingRecordRoute = value;
  }
  public resetNoPingRecordRoute() {
    this._noPingRecordRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPingRecordRouteInput() {
    return this._noPingRecordRoute;
  }

  // no_ping_time_stamp - computed: false, optional: true, required: false
  private _noPingTimeStamp?: boolean | cdktf.IResolvable; 
  public get noPingTimeStamp() {
    return this.getBooleanAttribute('no_ping_time_stamp');
  }
  public set noPingTimeStamp(value: boolean | cdktf.IResolvable) {
    this._noPingTimeStamp = value;
  }
  public resetNoPingTimeStamp() {
    this._noPingTimeStamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPingTimeStampInput() {
    return this._noPingTimeStamp;
  }

  // no_redirects - computed: false, optional: true, required: false
  private _noRedirects?: boolean | cdktf.IResolvable; 
  public get noRedirects() {
    return this.getBooleanAttribute('no_redirects');
  }
  public set noRedirects(value: boolean | cdktf.IResolvable) {
    this._noRedirects = value;
  }
  public resetNoRedirects() {
    this._noRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRedirectsInput() {
    return this._noRedirects;
  }

  // no_redirects_ipv6 - computed: false, optional: true, required: false
  private _noRedirectsIpv6?: boolean | cdktf.IResolvable; 
  public get noRedirectsIpv6() {
    return this.getBooleanAttribute('no_redirects_ipv6');
  }
  public set noRedirectsIpv6(value: boolean | cdktf.IResolvable) {
    this._noRedirectsIpv6 = value;
  }
  public resetNoRedirectsIpv6() {
    this._noRedirectsIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRedirectsIpv6Input() {
    return this._noRedirectsIpv6;
  }

  // radius_options_attributes_nas_id - computed: false, optional: true, required: false
  private _radiusOptionsAttributesNasId?: string; 
  public get radiusOptionsAttributesNasId() {
    return this.getStringAttribute('radius_options_attributes_nas_id');
  }
  public set radiusOptionsAttributesNasId(value: string) {
    this._radiusOptionsAttributesNasId = value;
  }
  public resetRadiusOptionsAttributesNasId() {
    this._radiusOptionsAttributesNasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusOptionsAttributesNasIdInput() {
    return this._radiusOptionsAttributesNasId;
  }

  // radius_options_attributes_nas_ipaddress - computed: false, optional: true, required: false
  private _radiusOptionsAttributesNasIpaddress?: string; 
  public get radiusOptionsAttributesNasIpaddress() {
    return this.getStringAttribute('radius_options_attributes_nas_ipaddress');
  }
  public set radiusOptionsAttributesNasIpaddress(value: string) {
    this._radiusOptionsAttributesNasIpaddress = value;
  }
  public resetRadiusOptionsAttributesNasIpaddress() {
    this._radiusOptionsAttributesNasIpaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusOptionsAttributesNasIpaddressInput() {
    return this._radiusOptionsAttributesNasIpaddress;
  }

  // radius_options_enhanced_accounting - computed: false, optional: true, required: false
  private _radiusOptionsEnhancedAccounting?: boolean | cdktf.IResolvable; 
  public get radiusOptionsEnhancedAccounting() {
    return this.getBooleanAttribute('radius_options_enhanced_accounting');
  }
  public set radiusOptionsEnhancedAccounting(value: boolean | cdktf.IResolvable) {
    this._radiusOptionsEnhancedAccounting = value;
  }
  public resetRadiusOptionsEnhancedAccounting() {
    this._radiusOptionsEnhancedAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusOptionsEnhancedAccountingInput() {
    return this._radiusOptionsEnhancedAccounting;
  }

  // radius_options_password_protocol_mschapv2 - computed: false, optional: true, required: false
  private _radiusOptionsPasswordProtocolMschapv2?: boolean | cdktf.IResolvable; 
  public get radiusOptionsPasswordProtocolMschapv2() {
    return this.getBooleanAttribute('radius_options_password_protocol_mschapv2');
  }
  public set radiusOptionsPasswordProtocolMschapv2(value: boolean | cdktf.IResolvable) {
    this._radiusOptionsPasswordProtocolMschapv2 = value;
  }
  public resetRadiusOptionsPasswordProtocolMschapv2() {
    this._radiusOptionsPasswordProtocolMschapv2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusOptionsPasswordProtocolMschapv2Input() {
    return this._radiusOptionsPasswordProtocolMschapv2;
  }

  // tacplus_options_authorization_time_interval - computed: false, optional: true, required: false
  private _tacplusOptionsAuthorizationTimeInterval?: number; 
  public get tacplusOptionsAuthorizationTimeInterval() {
    return this.getNumberAttribute('tacplus_options_authorization_time_interval');
  }
  public set tacplusOptionsAuthorizationTimeInterval(value: number) {
    this._tacplusOptionsAuthorizationTimeInterval = value;
  }
  public resetTacplusOptionsAuthorizationTimeInterval() {
    this._tacplusOptionsAuthorizationTimeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusOptionsAuthorizationTimeIntervalInput() {
    return this._tacplusOptionsAuthorizationTimeInterval;
  }

  // tacplus_options_enhanced_accounting - computed: false, optional: true, required: false
  private _tacplusOptionsEnhancedAccounting?: boolean | cdktf.IResolvable; 
  public get tacplusOptionsEnhancedAccounting() {
    return this.getBooleanAttribute('tacplus_options_enhanced_accounting');
  }
  public set tacplusOptionsEnhancedAccounting(value: boolean | cdktf.IResolvable) {
    this._tacplusOptionsEnhancedAccounting = value;
  }
  public resetTacplusOptionsEnhancedAccounting() {
    this._tacplusOptionsEnhancedAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusOptionsEnhancedAccountingInput() {
    return this._tacplusOptionsEnhancedAccounting;
  }

  // tacplus_options_exclude_cmd_attribute - computed: false, optional: true, required: false
  private _tacplusOptionsExcludeCmdAttribute?: boolean | cdktf.IResolvable; 
  public get tacplusOptionsExcludeCmdAttribute() {
    return this.getBooleanAttribute('tacplus_options_exclude_cmd_attribute');
  }
  public set tacplusOptionsExcludeCmdAttribute(value: boolean | cdktf.IResolvable) {
    this._tacplusOptionsExcludeCmdAttribute = value;
  }
  public resetTacplusOptionsExcludeCmdAttribute() {
    this._tacplusOptionsExcludeCmdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusOptionsExcludeCmdAttributeInput() {
    return this._tacplusOptionsExcludeCmdAttribute;
  }

  // tacplus_options_no_cmd_attribute_value - computed: false, optional: true, required: false
  private _tacplusOptionsNoCmdAttributeValue?: boolean | cdktf.IResolvable; 
  public get tacplusOptionsNoCmdAttributeValue() {
    return this.getBooleanAttribute('tacplus_options_no_cmd_attribute_value');
  }
  public set tacplusOptionsNoCmdAttributeValue(value: boolean | cdktf.IResolvable) {
    this._tacplusOptionsNoCmdAttributeValue = value;
  }
  public resetTacplusOptionsNoCmdAttributeValue() {
    this._tacplusOptionsNoCmdAttributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusOptionsNoCmdAttributeValueInput() {
    return this._tacplusOptionsNoCmdAttributeValue;
  }

  // tacplus_options_no_strict_authorization - computed: false, optional: true, required: false
  private _tacplusOptionsNoStrictAuthorization?: boolean | cdktf.IResolvable; 
  public get tacplusOptionsNoStrictAuthorization() {
    return this.getBooleanAttribute('tacplus_options_no_strict_authorization');
  }
  public set tacplusOptionsNoStrictAuthorization(value: boolean | cdktf.IResolvable) {
    this._tacplusOptionsNoStrictAuthorization = value;
  }
  public resetTacplusOptionsNoStrictAuthorization() {
    this._tacplusOptionsNoStrictAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusOptionsNoStrictAuthorizationInput() {
    return this._tacplusOptionsNoStrictAuthorization;
  }

  // tacplus_options_service_name - computed: false, optional: true, required: false
  private _tacplusOptionsServiceName?: string; 
  public get tacplusOptionsServiceName() {
    return this.getStringAttribute('tacplus_options_service_name');
  }
  public set tacplusOptionsServiceName(value: string) {
    this._tacplusOptionsServiceName = value;
  }
  public resetTacplusOptionsServiceName() {
    this._tacplusOptionsServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusOptionsServiceNameInput() {
    return this._tacplusOptionsServiceName;
  }

  // tacplus_options_strict_authorization - computed: false, optional: true, required: false
  private _tacplusOptionsStrictAuthorization?: boolean | cdktf.IResolvable; 
  public get tacplusOptionsStrictAuthorization() {
    return this.getBooleanAttribute('tacplus_options_strict_authorization');
  }
  public set tacplusOptionsStrictAuthorization(value: boolean | cdktf.IResolvable) {
    this._tacplusOptionsStrictAuthorization = value;
  }
  public resetTacplusOptionsStrictAuthorization() {
    this._tacplusOptionsStrictAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusOptionsStrictAuthorizationInput() {
    return this._tacplusOptionsStrictAuthorization;
  }

  // tacplus_options_timestamp_and_timezone - computed: false, optional: true, required: false
  private _tacplusOptionsTimestampAndTimezone?: boolean | cdktf.IResolvable; 
  public get tacplusOptionsTimestampAndTimezone() {
    return this.getBooleanAttribute('tacplus_options_timestamp_and_timezone');
  }
  public set tacplusOptionsTimestampAndTimezone(value: boolean | cdktf.IResolvable) {
    this._tacplusOptionsTimestampAndTimezone = value;
  }
  public resetTacplusOptionsTimestampAndTimezone() {
    this._tacplusOptionsTimestampAndTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusOptionsTimestampAndTimezoneInput() {
    return this._tacplusOptionsTimestampAndTimezone;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // tracing_dest_override_syslog_host - computed: false, optional: true, required: false
  private _tracingDestOverrideSyslogHost?: string; 
  public get tracingDestOverrideSyslogHost() {
    return this.getStringAttribute('tracing_dest_override_syslog_host');
  }
  public set tracingDestOverrideSyslogHost(value: string) {
    this._tracingDestOverrideSyslogHost = value;
  }
  public resetTracingDestOverrideSyslogHost() {
    this._tracingDestOverrideSyslogHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingDestOverrideSyslogHostInput() {
    return this._tracingDestOverrideSyslogHost;
  }

  // accounting - computed: false, optional: true, required: false
  private _accounting = new SystemAccountingOutputReference(this, "accounting");
  public get accounting() {
    return this._accounting;
  }
  public putAccounting(value: SystemAccounting) {
    this._accounting.internalValue = value;
  }
  public resetAccounting() {
    this._accounting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting.internalValue;
  }

  // archival_configuration - computed: false, optional: true, required: false
  private _archivalConfiguration = new SystemArchivalConfigurationOutputReference(this, "archival_configuration");
  public get archivalConfiguration() {
    return this._archivalConfiguration;
  }
  public putArchivalConfiguration(value: SystemArchivalConfiguration) {
    this._archivalConfiguration.internalValue = value;
  }
  public resetArchivalConfiguration() {
    this._archivalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivalConfigurationInput() {
    return this._archivalConfiguration.internalValue;
  }

  // inet6_backup_router - computed: false, optional: true, required: false
  private _inet6BackupRouter = new SystemInet6BackupRouterOutputReference(this, "inet6_backup_router");
  public get inet6BackupRouter() {
    return this._inet6BackupRouter;
  }
  public putInet6BackupRouter(value: SystemInet6BackupRouter) {
    this._inet6BackupRouter.internalValue = value;
  }
  public resetInet6BackupRouter() {
    this._inet6BackupRouter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inet6BackupRouterInput() {
    return this._inet6BackupRouter.internalValue;
  }

  // internet_options - computed: false, optional: true, required: false
  private _internetOptions = new SystemInternetOptionsOutputReference(this, "internet_options");
  public get internetOptions() {
    return this._internetOptions;
  }
  public putInternetOptions(value: SystemInternetOptions) {
    this._internetOptions.internalValue = value;
  }
  public resetInternetOptions() {
    this._internetOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetOptionsInput() {
    return this._internetOptions.internalValue;
  }

  // license - computed: false, optional: true, required: false
  private _license = new SystemLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: SystemLicense) {
    this._license.internalValue = value;
  }
  public resetLicense() {
    this._license.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license.internalValue;
  }

  // login - computed: false, optional: true, required: false
  private _login = new SystemLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: SystemLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // name_server_opts - computed: false, optional: true, required: false
  private _nameServerOpts = new SystemNameServerOptsList(this, "name_server_opts", false);
  public get nameServerOpts() {
    return this._nameServerOpts;
  }
  public putNameServerOpts(value: SystemNameServerOpts[] | cdktf.IResolvable) {
    this._nameServerOpts.internalValue = value;
  }
  public resetNameServerOpts() {
    this._nameServerOpts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerOptsInput() {
    return this._nameServerOpts.internalValue;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp = new SystemNtpOutputReference(this, "ntp");
  public get ntp() {
    return this._ntp;
  }
  public putNtp(value: SystemNtp) {
    this._ntp.internalValue = value;
  }
  public resetNtp() {
    this._ntp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new SystemPortsOutputReference(this, "ports");
  public get ports() {
    return this._ports;
  }
  public putPorts(value: SystemPorts) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new SystemServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: SystemServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog = new SystemSyslogOutputReference(this, "syslog");
  public get syslog() {
    return this._syslog;
  }
  public putSyslog(value: SystemSyslog) {
    this._syslog.internalValue = value;
  }
  public resetSyslog() {
    this._syslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_order: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationOrder),
      auto_snapshot: cdktf.booleanToTerraform(this._autoSnapshot),
      default_address_selection: cdktf.booleanToTerraform(this._defaultAddressSelection),
      domain_name: cdktf.stringToTerraform(this._domainName),
      host_name: cdktf.stringToTerraform(this._hostName),
      max_configuration_rollbacks: cdktf.numberToTerraform(this._maxConfigurationRollbacks),
      max_configurations_on_flash: cdktf.numberToTerraform(this._maxConfigurationsOnFlash),
      name_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameServer),
      no_multicast_echo: cdktf.booleanToTerraform(this._noMulticastEcho),
      no_ping_record_route: cdktf.booleanToTerraform(this._noPingRecordRoute),
      no_ping_time_stamp: cdktf.booleanToTerraform(this._noPingTimeStamp),
      no_redirects: cdktf.booleanToTerraform(this._noRedirects),
      no_redirects_ipv6: cdktf.booleanToTerraform(this._noRedirectsIpv6),
      radius_options_attributes_nas_id: cdktf.stringToTerraform(this._radiusOptionsAttributesNasId),
      radius_options_attributes_nas_ipaddress: cdktf.stringToTerraform(this._radiusOptionsAttributesNasIpaddress),
      radius_options_enhanced_accounting: cdktf.booleanToTerraform(this._radiusOptionsEnhancedAccounting),
      radius_options_password_protocol_mschapv2: cdktf.booleanToTerraform(this._radiusOptionsPasswordProtocolMschapv2),
      tacplus_options_authorization_time_interval: cdktf.numberToTerraform(this._tacplusOptionsAuthorizationTimeInterval),
      tacplus_options_enhanced_accounting: cdktf.booleanToTerraform(this._tacplusOptionsEnhancedAccounting),
      tacplus_options_exclude_cmd_attribute: cdktf.booleanToTerraform(this._tacplusOptionsExcludeCmdAttribute),
      tacplus_options_no_cmd_attribute_value: cdktf.booleanToTerraform(this._tacplusOptionsNoCmdAttributeValue),
      tacplus_options_no_strict_authorization: cdktf.booleanToTerraform(this._tacplusOptionsNoStrictAuthorization),
      tacplus_options_service_name: cdktf.stringToTerraform(this._tacplusOptionsServiceName),
      tacplus_options_strict_authorization: cdktf.booleanToTerraform(this._tacplusOptionsStrictAuthorization),
      tacplus_options_timestamp_and_timezone: cdktf.booleanToTerraform(this._tacplusOptionsTimestampAndTimezone),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      tracing_dest_override_syslog_host: cdktf.stringToTerraform(this._tracingDestOverrideSyslogHost),
      accounting: systemAccountingToTerraform(this._accounting.internalValue),
      archival_configuration: systemArchivalConfigurationToTerraform(this._archivalConfiguration.internalValue),
      inet6_backup_router: systemInet6BackupRouterToTerraform(this._inet6BackupRouter.internalValue),
      internet_options: systemInternetOptionsToTerraform(this._internetOptions.internalValue),
      license: systemLicenseToTerraform(this._license.internalValue),
      login: systemLoginToTerraform(this._login.internalValue),
      name_server_opts: cdktf.listMapper(systemNameServerOptsToTerraform, true)(this._nameServerOpts.internalValue),
      ntp: systemNtpToTerraform(this._ntp.internalValue),
      ports: systemPortsToTerraform(this._ports.internalValue),
      services: systemServicesToTerraform(this._services.internalValue),
      syslog: systemSyslogToTerraform(this._syslog.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_order: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationOrder),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_snapshot: {
        value: cdktf.booleanToHclTerraform(this._autoSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_address_selection: {
        value: cdktf.booleanToHclTerraform(this._defaultAddressSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_configuration_rollbacks: {
        value: cdktf.numberToHclTerraform(this._maxConfigurationRollbacks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_configurations_on_flash: {
        value: cdktf.numberToHclTerraform(this._maxConfigurationsOnFlash),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameServer),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      no_multicast_echo: {
        value: cdktf.booleanToHclTerraform(this._noMulticastEcho),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_ping_record_route: {
        value: cdktf.booleanToHclTerraform(this._noPingRecordRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_ping_time_stamp: {
        value: cdktf.booleanToHclTerraform(this._noPingTimeStamp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_redirects: {
        value: cdktf.booleanToHclTerraform(this._noRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_redirects_ipv6: {
        value: cdktf.booleanToHclTerraform(this._noRedirectsIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_options_attributes_nas_id: {
        value: cdktf.stringToHclTerraform(this._radiusOptionsAttributesNasId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_options_attributes_nas_ipaddress: {
        value: cdktf.stringToHclTerraform(this._radiusOptionsAttributesNasIpaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_options_enhanced_accounting: {
        value: cdktf.booleanToHclTerraform(this._radiusOptionsEnhancedAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_options_password_protocol_mschapv2: {
        value: cdktf.booleanToHclTerraform(this._radiusOptionsPasswordProtocolMschapv2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tacplus_options_authorization_time_interval: {
        value: cdktf.numberToHclTerraform(this._tacplusOptionsAuthorizationTimeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tacplus_options_enhanced_accounting: {
        value: cdktf.booleanToHclTerraform(this._tacplusOptionsEnhancedAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tacplus_options_exclude_cmd_attribute: {
        value: cdktf.booleanToHclTerraform(this._tacplusOptionsExcludeCmdAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tacplus_options_no_cmd_attribute_value: {
        value: cdktf.booleanToHclTerraform(this._tacplusOptionsNoCmdAttributeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tacplus_options_no_strict_authorization: {
        value: cdktf.booleanToHclTerraform(this._tacplusOptionsNoStrictAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tacplus_options_service_name: {
        value: cdktf.stringToHclTerraform(this._tacplusOptionsServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacplus_options_strict_authorization: {
        value: cdktf.booleanToHclTerraform(this._tacplusOptionsStrictAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tacplus_options_timestamp_and_timezone: {
        value: cdktf.booleanToHclTerraform(this._tacplusOptionsTimestampAndTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracing_dest_override_syslog_host: {
        value: cdktf.stringToHclTerraform(this._tracingDestOverrideSyslogHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting: {
        value: systemAccountingToHclTerraform(this._accounting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemAccounting",
      },
      archival_configuration: {
        value: systemArchivalConfigurationToHclTerraform(this._archivalConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemArchivalConfiguration",
      },
      inet6_backup_router: {
        value: systemInet6BackupRouterToHclTerraform(this._inet6BackupRouter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemInet6BackupRouter",
      },
      internet_options: {
        value: systemInternetOptionsToHclTerraform(this._internetOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemInternetOptions",
      },
      license: {
        value: systemLicenseToHclTerraform(this._license.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemLicense",
      },
      login: {
        value: systemLoginToHclTerraform(this._login.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemLogin",
      },
      name_server_opts: {
        value: cdktf.listMapperHcl(systemNameServerOptsToHclTerraform, true)(this._nameServerOpts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemNameServerOptsList",
      },
      ntp: {
        value: systemNtpToHclTerraform(this._ntp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemNtp",
      },
      ports: {
        value: systemPortsToHclTerraform(this._ports.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemPorts",
      },
      services: {
        value: systemServicesToHclTerraform(this._services.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemServices",
      },
      syslog: {
        value: systemSyslogToHclTerraform(this._syslog.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemSyslog",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
