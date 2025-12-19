// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwTemplateLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'kernel': 0: Kernel; 'user': 1: User-level; 'mail': 2: Mail; 'daemon': 3: System daemons; 'security-authorization': 4: Security/authorization; 'syslog': 5: Syslog internal; 'line-printer': 6: Line printer; 'news': 7: Network news; 'uucp': 8: UUCP subsystem; 'cron': 9: Time-related; 'security-authorization-private': 10: Private security/authorization; 'ftp': 11: FTP; 'ntp': 12: NTP; 'audit': 13: Audit; 'alert': 14: Alert; 'clock': 15: Clock-related; 'local0': 16: Local use 0; 'local1': 17: Local use 1; 'local2': 18: Local use 2; 'local3': 19: Local use 3; 'local4': 20: Local use 4; 'local5': 21: Local use 5; 'local6': 22: Local use 6; 'local7': 23: Local use 7;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#facility FwTemplateLogging#facility}
  */
  readonly facility?: string;
  /**
  * 'ascii': A10 Text logging format (ASCII); 'cef': Common Event Format for logging (default); 'custom': custom format;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#format FwTemplateLogging#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#id FwTemplateLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include destination FQDN string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#include_dest_fqdn FwTemplateLogging#include_dest_fqdn}
  */
  readonly includeDestFqdn?: number;
  /**
  * include the 4-digit year in logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#include_year FwTemplateLogging#include_year}
  */
  readonly includeYear?: number;
  /**
  * Merge creation and deletion of session logs to one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#merged_style FwTemplateLogging#merged_style}
  */
  readonly mergedStyle?: number;
  /**
  * Logging Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#name FwTemplateLogging#name}
  */
  readonly name: string;
  /**
  * 'seconds': Logging timestamp resolution in seconds (default); '10-milliseconds': Logging timestamp resolution in 10s of milli-seconds;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#resolution FwTemplateLogging#resolution}
  */
  readonly resolution?: string;
  /**
  * Bind a Service Group to the logging template (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#service_group FwTemplateLogging#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * 'emergency': 0: Emergency; 'alert': 1: Alert; 'critical': 2: Critical; 'error': 3: Error; 'warning': 4: Warning; 'notice': 5: Notice; 'informational': 6: Informational; 'debug': 7: Debug;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#severity FwTemplateLogging#severity}
  */
  readonly severity?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#user_tag FwTemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#custom FwTemplateLogging#custom}
  */
  readonly custom?: FwTemplateLoggingCustom;
  /**
  * disable_log_by_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#disable_log_by_destination FwTemplateLogging#disable_log_by_destination}
  */
  readonly disableLogByDestination?: FwTemplateLoggingDisableLogByDestination;
  /**
  * enable_log_by_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#enable_log_by_destination FwTemplateLogging#enable_log_by_destination}
  */
  readonly enableLogByDestination?: FwTemplateLoggingEnableLogByDestination;
  /**
  * include_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#include_http FwTemplateLogging#include_http}
  */
  readonly includeHttp?: FwTemplateLoggingIncludeHttp;
  /**
  * include_radius_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#include_radius_attribute FwTemplateLogging#include_radius_attribute}
  */
  readonly includeRadiusAttribute?: FwTemplateLoggingIncludeRadiusAttribute;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#log FwTemplateLogging#log}
  */
  readonly log?: FwTemplateLoggingLog;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#rule FwTemplateLogging#rule}
  */
  readonly rule?: FwTemplateLoggingRule;
  /**
  * session_periodic_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#session_periodic_log FwTemplateLogging#session_periodic_log}
  */
  readonly sessionPeriodicLog?: FwTemplateLoggingSessionPeriodicLog;
  /**
  * source_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#source_address FwTemplateLogging#source_address}
  */
  readonly sourceAddress?: FwTemplateLoggingSourceAddress;
}
export interface FwTemplateLoggingCustomCustomMessage {
  /**
  * Session created (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#custom_session_created FwTemplateLogging#custom_session_created}
  */
  readonly customSessionCreated?: string;
  /**
  * Session deleted (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#custom_session_deleted FwTemplateLogging#custom_session_deleted}
  */
  readonly customSessionDeleted?: string;
}

export function fwTemplateLoggingCustomCustomMessageToTerraform(struct?: FwTemplateLoggingCustomCustomMessageOutputReference | FwTemplateLoggingCustomCustomMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_session_created: cdktf.stringToTerraform(struct!.customSessionCreated),
    custom_session_deleted: cdktf.stringToTerraform(struct!.customSessionDeleted),
  }
}


export function fwTemplateLoggingCustomCustomMessageToHclTerraform(struct?: FwTemplateLoggingCustomCustomMessageOutputReference | FwTemplateLoggingCustomCustomMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_session_created: {
      value: cdktf.stringToHclTerraform(struct!.customSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_session_deleted: {
      value: cdktf.stringToHclTerraform(struct!.customSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingCustomCustomMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingCustomCustomMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionCreated = this._customSessionCreated;
    }
    if (this._customSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionDeleted = this._customSessionDeleted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingCustomCustomMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSessionCreated = undefined;
      this._customSessionDeleted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSessionCreated = value.customSessionCreated;
      this._customSessionDeleted = value.customSessionDeleted;
    }
  }

  // custom_session_created - computed: false, optional: true, required: false
  private _customSessionCreated?: string; 
  public get customSessionCreated() {
    return this.getStringAttribute('custom_session_created');
  }
  public set customSessionCreated(value: string) {
    this._customSessionCreated = value;
  }
  public resetCustomSessionCreated() {
    this._customSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionCreatedInput() {
    return this._customSessionCreated;
  }

  // custom_session_deleted - computed: false, optional: true, required: false
  private _customSessionDeleted?: string; 
  public get customSessionDeleted() {
    return this.getStringAttribute('custom_session_deleted');
  }
  public set customSessionDeleted(value: string) {
    this._customSessionDeleted = value;
  }
  public resetCustomSessionDeleted() {
    this._customSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionDeletedInput() {
    return this._customSessionDeleted;
  }
}
export interface FwTemplateLoggingCustom {
  /**
  * custom_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#custom_message FwTemplateLogging#custom_message}
  */
  readonly customMessage?: FwTemplateLoggingCustomCustomMessage;
}

export function fwTemplateLoggingCustomToTerraform(struct?: FwTemplateLoggingCustomOutputReference | FwTemplateLoggingCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_message: fwTemplateLoggingCustomCustomMessageToTerraform(struct!.customMessage),
  }
}


export function fwTemplateLoggingCustomToHclTerraform(struct?: FwTemplateLoggingCustomOutputReference | FwTemplateLoggingCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_message: {
      value: fwTemplateLoggingCustomCustomMessageToHclTerraform(struct!.customMessage),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingCustomCustomMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMessage = this._customMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customMessage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customMessage.internalValue = value.customMessage;
    }
  }

  // custom_message - computed: false, optional: true, required: false
  private _customMessage = new FwTemplateLoggingCustomCustomMessageOutputReference(this, "custom_message");
  public get customMessage() {
    return this._customMessage;
  }
  public putCustomMessage(value: FwTemplateLoggingCustomCustomMessage) {
    this._customMessage.internalValue = value;
  }
  public resetCustomMessage() {
    this._customMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage.internalValue;
  }
}
export interface FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_end FwTemplateLogging#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_start FwTemplateLogging#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function fwTemplateLoggingDisableLogByDestinationIp6ListTcpListStructToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function fwTemplateLoggingDisableLogByDestinationIp6ListTcpListStructToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStructOutputReference {
    return new FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_end FwTemplateLogging#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_start FwTemplateLogging#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function fwTemplateLoggingDisableLogByDestinationIp6ListUdpListStructToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function fwTemplateLoggingDisableLogByDestinationIp6ListUdpListStructToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStructOutputReference {
    return new FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingDisableLogByDestinationIp6ListStruct {
  /**
  * Disable logging for the ICMP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#icmp FwTemplateLogging#icmp}
  */
  readonly icmp?: number;
  /**
  * Configure an IPv6 subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#ipv6_addr FwTemplateLogging#ipv6_addr}
  */
  readonly ipv6Addr: string;
  /**
  * Disable logging for the other layer-4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#others FwTemplateLogging#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#user_tag FwTemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_list FwTemplateLogging#tcp_list}
  */
  readonly tcpList?: FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_list FwTemplateLogging#udp_list}
  */
  readonly udpList?: FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable;
}

export function fwTemplateLoggingDisableLogByDestinationIp6ListStructToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIp6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    others: cdktf.numberToTerraform(struct!.others),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tcp_list: cdktf.listMapper(fwTemplateLoggingDisableLogByDestinationIp6ListTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(fwTemplateLoggingDisableLogByDestinationIp6ListUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function fwTemplateLoggingDisableLogByDestinationIp6ListStructToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIp6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingDisableLogByDestinationIp6ListTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingDisableLogByDestinationIp6ListUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingDisableLogByDestinationIp6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingDisableLogByDestinationIp6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingDisableLogByDestinationIp6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp = undefined;
      this._ipv6Addr = undefined;
      this._others = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp = value.icmp;
      this._ipv6Addr = value.ipv6Addr;
      this._others = value.others;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // ipv6_addr - computed: false, optional: false, required: true
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: FwTemplateLoggingDisableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: FwTemplateLoggingDisableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

export class FwTemplateLoggingDisableLogByDestinationIp6ListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingDisableLogByDestinationIp6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingDisableLogByDestinationIp6ListStructOutputReference {
    return new FwTemplateLoggingDisableLogByDestinationIp6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingDisableLogByDestinationIpListTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_end FwTemplateLogging#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_start FwTemplateLogging#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function fwTemplateLoggingDisableLogByDestinationIpListTcpListStructToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function fwTemplateLoggingDisableLogByDestinationIpListTcpListStructToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingDisableLogByDestinationIpListTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class FwTemplateLoggingDisableLogByDestinationIpListTcpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingDisableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingDisableLogByDestinationIpListTcpListStructOutputReference {
    return new FwTemplateLoggingDisableLogByDestinationIpListTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingDisableLogByDestinationIpListUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_end FwTemplateLogging#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_start FwTemplateLogging#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function fwTemplateLoggingDisableLogByDestinationIpListUdpListStructToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function fwTemplateLoggingDisableLogByDestinationIpListUdpListStructToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingDisableLogByDestinationIpListUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class FwTemplateLoggingDisableLogByDestinationIpListUdpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingDisableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingDisableLogByDestinationIpListUdpListStructOutputReference {
    return new FwTemplateLoggingDisableLogByDestinationIpListUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingDisableLogByDestinationIpListStruct {
  /**
  * Disable logging for the ICMP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#icmp FwTemplateLogging#icmp}
  */
  readonly icmp?: number;
  /**
  * Configure an IP subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#ipv4_addr FwTemplateLogging#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * Disable logging for the other layer-4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#others FwTemplateLogging#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#user_tag FwTemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_list FwTemplateLogging#tcp_list}
  */
  readonly tcpList?: FwTemplateLoggingDisableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_list FwTemplateLogging#udp_list}
  */
  readonly udpList?: FwTemplateLoggingDisableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable;
}

export function fwTemplateLoggingDisableLogByDestinationIpListStructToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    others: cdktf.numberToTerraform(struct!.others),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tcp_list: cdktf.listMapper(fwTemplateLoggingDisableLogByDestinationIpListTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(fwTemplateLoggingDisableLogByDestinationIpListUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function fwTemplateLoggingDisableLogByDestinationIpListStructToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingDisableLogByDestinationIpListTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingDisableLogByDestinationIpListTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingDisableLogByDestinationIpListUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingDisableLogByDestinationIpListUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingDisableLogByDestinationIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingDisableLogByDestinationIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingDisableLogByDestinationIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp = undefined;
      this._ipv4Addr = undefined;
      this._others = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp = value.icmp;
      this._ipv4Addr = value.ipv4Addr;
      this._others = value.others;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // ipv4_addr - computed: false, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new FwTemplateLoggingDisableLogByDestinationIpListTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: FwTemplateLoggingDisableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new FwTemplateLoggingDisableLogByDestinationIpListUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: FwTemplateLoggingDisableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

export class FwTemplateLoggingDisableLogByDestinationIpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingDisableLogByDestinationIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingDisableLogByDestinationIpListStructOutputReference {
    return new FwTemplateLoggingDisableLogByDestinationIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingDisableLogByDestinationTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_end FwTemplateLogging#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_start FwTemplateLogging#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function fwTemplateLoggingDisableLogByDestinationTcpListStructToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function fwTemplateLoggingDisableLogByDestinationTcpListStructToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingDisableLogByDestinationTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingDisableLogByDestinationTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingDisableLogByDestinationTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class FwTemplateLoggingDisableLogByDestinationTcpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingDisableLogByDestinationTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingDisableLogByDestinationTcpListStructOutputReference {
    return new FwTemplateLoggingDisableLogByDestinationTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingDisableLogByDestinationUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_end FwTemplateLogging#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_start FwTemplateLogging#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function fwTemplateLoggingDisableLogByDestinationUdpListStructToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function fwTemplateLoggingDisableLogByDestinationUdpListStructToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingDisableLogByDestinationUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingDisableLogByDestinationUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingDisableLogByDestinationUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class FwTemplateLoggingDisableLogByDestinationUdpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingDisableLogByDestinationUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingDisableLogByDestinationUdpListStructOutputReference {
    return new FwTemplateLoggingDisableLogByDestinationUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingDisableLogByDestination {
  /**
  * Disable logging for the ICMP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#icmp FwTemplateLogging#icmp}
  */
  readonly icmp?: number;
  /**
  * Disable logging for the other layer-4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#others FwTemplateLogging#others}
  */
  readonly others?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * ip6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#ip6_list FwTemplateLogging#ip6_list}
  */
  readonly ip6List?: FwTemplateLoggingDisableLogByDestinationIp6ListStruct[] | cdktf.IResolvable;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#ip_list FwTemplateLogging#ip_list}
  */
  readonly ipList?: FwTemplateLoggingDisableLogByDestinationIpListStruct[] | cdktf.IResolvable;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_list FwTemplateLogging#tcp_list}
  */
  readonly tcpList?: FwTemplateLoggingDisableLogByDestinationTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_list FwTemplateLogging#udp_list}
  */
  readonly udpList?: FwTemplateLoggingDisableLogByDestinationUdpListStruct[] | cdktf.IResolvable;
}

export function fwTemplateLoggingDisableLogByDestinationToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationOutputReference | FwTemplateLoggingDisableLogByDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    others: cdktf.numberToTerraform(struct!.others),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ip6_list: cdktf.listMapper(fwTemplateLoggingDisableLogByDestinationIp6ListStructToTerraform, true)(struct!.ip6List),
    ip_list: cdktf.listMapper(fwTemplateLoggingDisableLogByDestinationIpListStructToTerraform, true)(struct!.ipList),
    tcp_list: cdktf.listMapper(fwTemplateLoggingDisableLogByDestinationTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(fwTemplateLoggingDisableLogByDestinationUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function fwTemplateLoggingDisableLogByDestinationToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationOutputReference | FwTemplateLoggingDisableLogByDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingDisableLogByDestinationIp6ListStructToHclTerraform, true)(struct!.ip6List),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingDisableLogByDestinationIp6ListStructList",
    },
    ip_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingDisableLogByDestinationIpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingDisableLogByDestinationIpListStructList",
    },
    tcp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingDisableLogByDestinationTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingDisableLogByDestinationTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingDisableLogByDestinationUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingDisableLogByDestinationUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingDisableLogByDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingDisableLogByDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ip6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6List = this._ip6List?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingDisableLogByDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmp = undefined;
      this._others = undefined;
      this._uuid = undefined;
      this._ip6List.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmp = value.icmp;
      this._others = value.others;
      this._uuid = value.uuid;
      this._ip6List.internalValue = value.ip6List;
      this._ipList.internalValue = value.ipList;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ip6_list - computed: false, optional: true, required: false
  private _ip6List = new FwTemplateLoggingDisableLogByDestinationIp6ListStructList(this, "ip6_list", false);
  public get ip6List() {
    return this._ip6List;
  }
  public putIp6List(value: FwTemplateLoggingDisableLogByDestinationIp6ListStruct[] | cdktf.IResolvable) {
    this._ip6List.internalValue = value;
  }
  public resetIp6List() {
    this._ip6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ListInput() {
    return this._ip6List.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new FwTemplateLoggingDisableLogByDestinationIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: FwTemplateLoggingDisableLogByDestinationIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new FwTemplateLoggingDisableLogByDestinationTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: FwTemplateLoggingDisableLogByDestinationTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new FwTemplateLoggingDisableLogByDestinationUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: FwTemplateLoggingDisableLogByDestinationUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}
export interface FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_end FwTemplateLogging#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_start FwTemplateLogging#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function fwTemplateLoggingEnableLogByDestinationIp6ListTcpListStructToTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function fwTemplateLoggingEnableLogByDestinationIp6ListTcpListStructToHclTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStructOutputReference {
    return new FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_end FwTemplateLogging#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_start FwTemplateLogging#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function fwTemplateLoggingEnableLogByDestinationIp6ListUdpListStructToTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function fwTemplateLoggingEnableLogByDestinationIp6ListUdpListStructToHclTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStructOutputReference {
    return new FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingEnableLogByDestinationIp6ListStruct {
  /**
  * Enable logging for the ICMP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#icmp FwTemplateLogging#icmp}
  */
  readonly icmp?: number;
  /**
  * Configure an IPv6 subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#ipv6_addr FwTemplateLogging#ipv6_addr}
  */
  readonly ipv6Addr: string;
  /**
  * Enable logging for the other layer-4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#others FwTemplateLogging#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#user_tag FwTemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_list FwTemplateLogging#tcp_list}
  */
  readonly tcpList?: FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_list FwTemplateLogging#udp_list}
  */
  readonly udpList?: FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable;
}

export function fwTemplateLoggingEnableLogByDestinationIp6ListStructToTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIp6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    others: cdktf.numberToTerraform(struct!.others),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tcp_list: cdktf.listMapper(fwTemplateLoggingEnableLogByDestinationIp6ListTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(fwTemplateLoggingEnableLogByDestinationIp6ListUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function fwTemplateLoggingEnableLogByDestinationIp6ListStructToHclTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIp6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingEnableLogByDestinationIp6ListTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingEnableLogByDestinationIp6ListUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingEnableLogByDestinationIp6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingEnableLogByDestinationIp6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingEnableLogByDestinationIp6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp = undefined;
      this._ipv6Addr = undefined;
      this._others = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp = value.icmp;
      this._ipv6Addr = value.ipv6Addr;
      this._others = value.others;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // ipv6_addr - computed: false, optional: false, required: true
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: FwTemplateLoggingEnableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: FwTemplateLoggingEnableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

export class FwTemplateLoggingEnableLogByDestinationIp6ListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingEnableLogByDestinationIp6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingEnableLogByDestinationIp6ListStructOutputReference {
    return new FwTemplateLoggingEnableLogByDestinationIp6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingEnableLogByDestinationIpListTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_end FwTemplateLogging#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_start FwTemplateLogging#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function fwTemplateLoggingEnableLogByDestinationIpListTcpListStructToTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIpListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function fwTemplateLoggingEnableLogByDestinationIpListTcpListStructToHclTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIpListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingEnableLogByDestinationIpListTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingEnableLogByDestinationIpListTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingEnableLogByDestinationIpListTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class FwTemplateLoggingEnableLogByDestinationIpListTcpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingEnableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingEnableLogByDestinationIpListTcpListStructOutputReference {
    return new FwTemplateLoggingEnableLogByDestinationIpListTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingEnableLogByDestinationIpListUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_end FwTemplateLogging#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_start FwTemplateLogging#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function fwTemplateLoggingEnableLogByDestinationIpListUdpListStructToTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIpListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function fwTemplateLoggingEnableLogByDestinationIpListUdpListStructToHclTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIpListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingEnableLogByDestinationIpListUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingEnableLogByDestinationIpListUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingEnableLogByDestinationIpListUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class FwTemplateLoggingEnableLogByDestinationIpListUdpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingEnableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingEnableLogByDestinationIpListUdpListStructOutputReference {
    return new FwTemplateLoggingEnableLogByDestinationIpListUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingEnableLogByDestinationIpListStruct {
  /**
  * Enable logging for the ICMP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#icmp FwTemplateLogging#icmp}
  */
  readonly icmp?: number;
  /**
  * Configure an IP subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#ipv4_addr FwTemplateLogging#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * Enable logging for the other layer-4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#others FwTemplateLogging#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#user_tag FwTemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_list FwTemplateLogging#tcp_list}
  */
  readonly tcpList?: FwTemplateLoggingEnableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_list FwTemplateLogging#udp_list}
  */
  readonly udpList?: FwTemplateLoggingEnableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable;
}

export function fwTemplateLoggingEnableLogByDestinationIpListStructToTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    others: cdktf.numberToTerraform(struct!.others),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tcp_list: cdktf.listMapper(fwTemplateLoggingEnableLogByDestinationIpListTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(fwTemplateLoggingEnableLogByDestinationIpListUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function fwTemplateLoggingEnableLogByDestinationIpListStructToHclTerraform(struct?: FwTemplateLoggingEnableLogByDestinationIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingEnableLogByDestinationIpListTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingEnableLogByDestinationIpListTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingEnableLogByDestinationIpListUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingEnableLogByDestinationIpListUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingEnableLogByDestinationIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingEnableLogByDestinationIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingEnableLogByDestinationIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp = undefined;
      this._ipv4Addr = undefined;
      this._others = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp = value.icmp;
      this._ipv4Addr = value.ipv4Addr;
      this._others = value.others;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // ipv4_addr - computed: false, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new FwTemplateLoggingEnableLogByDestinationIpListTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: FwTemplateLoggingEnableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new FwTemplateLoggingEnableLogByDestinationIpListUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: FwTemplateLoggingEnableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

export class FwTemplateLoggingEnableLogByDestinationIpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingEnableLogByDestinationIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingEnableLogByDestinationIpListStructOutputReference {
    return new FwTemplateLoggingEnableLogByDestinationIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingEnableLogByDestinationTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_end FwTemplateLogging#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_port_start FwTemplateLogging#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function fwTemplateLoggingEnableLogByDestinationTcpListStructToTerraform(struct?: FwTemplateLoggingEnableLogByDestinationTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function fwTemplateLoggingEnableLogByDestinationTcpListStructToHclTerraform(struct?: FwTemplateLoggingEnableLogByDestinationTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingEnableLogByDestinationTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingEnableLogByDestinationTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingEnableLogByDestinationTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class FwTemplateLoggingEnableLogByDestinationTcpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingEnableLogByDestinationTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingEnableLogByDestinationTcpListStructOutputReference {
    return new FwTemplateLoggingEnableLogByDestinationTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingEnableLogByDestinationUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_end FwTemplateLogging#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_port_start FwTemplateLogging#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function fwTemplateLoggingEnableLogByDestinationUdpListStructToTerraform(struct?: FwTemplateLoggingEnableLogByDestinationUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function fwTemplateLoggingEnableLogByDestinationUdpListStructToHclTerraform(struct?: FwTemplateLoggingEnableLogByDestinationUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingEnableLogByDestinationUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingEnableLogByDestinationUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingEnableLogByDestinationUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class FwTemplateLoggingEnableLogByDestinationUdpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingEnableLogByDestinationUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingEnableLogByDestinationUdpListStructOutputReference {
    return new FwTemplateLoggingEnableLogByDestinationUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingEnableLogByDestination {
  /**
  * Enable logging for the ICMP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#icmp FwTemplateLogging#icmp}
  */
  readonly icmp?: number;
  /**
  * Enable logging for the other layer-4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#others FwTemplateLogging#others}
  */
  readonly others?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * ip6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#ip6_list FwTemplateLogging#ip6_list}
  */
  readonly ip6List?: FwTemplateLoggingEnableLogByDestinationIp6ListStruct[] | cdktf.IResolvable;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#ip_list FwTemplateLogging#ip_list}
  */
  readonly ipList?: FwTemplateLoggingEnableLogByDestinationIpListStruct[] | cdktf.IResolvable;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#tcp_list FwTemplateLogging#tcp_list}
  */
  readonly tcpList?: FwTemplateLoggingEnableLogByDestinationTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#udp_list FwTemplateLogging#udp_list}
  */
  readonly udpList?: FwTemplateLoggingEnableLogByDestinationUdpListStruct[] | cdktf.IResolvable;
}

export function fwTemplateLoggingEnableLogByDestinationToTerraform(struct?: FwTemplateLoggingEnableLogByDestinationOutputReference | FwTemplateLoggingEnableLogByDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    others: cdktf.numberToTerraform(struct!.others),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ip6_list: cdktf.listMapper(fwTemplateLoggingEnableLogByDestinationIp6ListStructToTerraform, true)(struct!.ip6List),
    ip_list: cdktf.listMapper(fwTemplateLoggingEnableLogByDestinationIpListStructToTerraform, true)(struct!.ipList),
    tcp_list: cdktf.listMapper(fwTemplateLoggingEnableLogByDestinationTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(fwTemplateLoggingEnableLogByDestinationUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function fwTemplateLoggingEnableLogByDestinationToHclTerraform(struct?: FwTemplateLoggingEnableLogByDestinationOutputReference | FwTemplateLoggingEnableLogByDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingEnableLogByDestinationIp6ListStructToHclTerraform, true)(struct!.ip6List),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingEnableLogByDestinationIp6ListStructList",
    },
    ip_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingEnableLogByDestinationIpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingEnableLogByDestinationIpListStructList",
    },
    tcp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingEnableLogByDestinationTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingEnableLogByDestinationTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(fwTemplateLoggingEnableLogByDestinationUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingEnableLogByDestinationUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingEnableLogByDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingEnableLogByDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ip6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6List = this._ip6List?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingEnableLogByDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmp = undefined;
      this._others = undefined;
      this._uuid = undefined;
      this._ip6List.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmp = value.icmp;
      this._others = value.others;
      this._uuid = value.uuid;
      this._ip6List.internalValue = value.ip6List;
      this._ipList.internalValue = value.ipList;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ip6_list - computed: false, optional: true, required: false
  private _ip6List = new FwTemplateLoggingEnableLogByDestinationIp6ListStructList(this, "ip6_list", false);
  public get ip6List() {
    return this._ip6List;
  }
  public putIp6List(value: FwTemplateLoggingEnableLogByDestinationIp6ListStruct[] | cdktf.IResolvable) {
    this._ip6List.internalValue = value;
  }
  public resetIp6List() {
    this._ip6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ListInput() {
    return this._ip6List.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new FwTemplateLoggingEnableLogByDestinationIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: FwTemplateLoggingEnableLogByDestinationIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new FwTemplateLoggingEnableLogByDestinationTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: FwTemplateLoggingEnableLogByDestinationTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new FwTemplateLoggingEnableLogByDestinationUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: FwTemplateLoggingEnableLogByDestinationUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}
export interface FwTemplateLoggingIncludeHttpHeaderCfg {
  /**
  * Header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#custom_header_name FwTemplateLogging#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * Max length for a HTTP request log (Max header length (Default: 100 char))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#custom_max_length FwTemplateLogging#custom_max_length}
  */
  readonly customMaxLength?: number;
  /**
  * 'cookie': Log HTTP Cookie Header; 'referer': Log HTTP Referer Header; 'user-agent': Log HTTP User-Agent Header; 'header1': Log HTTP Header 1; 'header2': Log HTTP Header 2; 'header3': Log HTTP Header 3;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#http_header FwTemplateLogging#http_header}
  */
  readonly httpHeader?: string;
  /**
  * Max length for a HTTP request log (Max header length (Default: 100 char))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#max_length FwTemplateLogging#max_length}
  */
  readonly maxLength?: number;
}

export function fwTemplateLoggingIncludeHttpHeaderCfgToTerraform(struct?: FwTemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_max_length: cdktf.numberToTerraform(struct!.customMaxLength),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
  }
}


export function fwTemplateLoggingIncludeHttpHeaderCfgToHclTerraform(struct?: FwTemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_header_name: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_max_length: {
      value: cdktf.numberToHclTerraform(struct!.customMaxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingIncludeHttpHeaderCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customMaxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMaxLength = this._customMaxLength;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customHeaderName = undefined;
      this._customMaxLength = undefined;
      this._httpHeader = undefined;
      this._maxLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customHeaderName = value.customHeaderName;
      this._customMaxLength = value.customMaxLength;
      this._httpHeader = value.httpHeader;
      this._maxLength = value.maxLength;
    }
  }

  // custom_header_name - computed: false, optional: true, required: false
  private _customHeaderName?: string; 
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }
  public set customHeaderName(value: string) {
    this._customHeaderName = value;
  }
  public resetCustomHeaderName() {
    this._customHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderNameInput() {
    return this._customHeaderName;
  }

  // custom_max_length - computed: false, optional: true, required: false
  private _customMaxLength?: number; 
  public get customMaxLength() {
    return this.getNumberAttribute('custom_max_length');
  }
  public set customMaxLength(value: number) {
    this._customMaxLength = value;
  }
  public resetCustomMaxLength() {
    this._customMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMaxLengthInput() {
    return this._customMaxLength;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }
}

export class FwTemplateLoggingIncludeHttpHeaderCfgList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingIncludeHttpHeaderCfg[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingIncludeHttpHeaderCfgOutputReference {
    return new FwTemplateLoggingIncludeHttpHeaderCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingIncludeHttp {
  /**
  * HTTP file extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#file_extension FwTemplateLogging#file_extension}
  */
  readonly fileExtension?: number;
  /**
  * Log the L4 session information of the HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#l4_session_info FwTemplateLogging#l4_session_info}
  */
  readonly l4SessionInfo?: number;
  /**
  * Log the HTTP Request Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#method FwTemplateLogging#method}
  */
  readonly method?: number;
  /**
  * HTTP Request Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#request_number FwTemplateLogging#request_number}
  */
  readonly requestNumber?: number;
  /**
  * header_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#header_cfg FwTemplateLogging#header_cfg}
  */
  readonly headerCfg?: FwTemplateLoggingIncludeHttpHeaderCfg[] | cdktf.IResolvable;
}

export function fwTemplateLoggingIncludeHttpToTerraform(struct?: FwTemplateLoggingIncludeHttpOutputReference | FwTemplateLoggingIncludeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension: cdktf.numberToTerraform(struct!.fileExtension),
    l4_session_info: cdktf.numberToTerraform(struct!.l4SessionInfo),
    method: cdktf.numberToTerraform(struct!.method),
    request_number: cdktf.numberToTerraform(struct!.requestNumber),
    header_cfg: cdktf.listMapper(fwTemplateLoggingIncludeHttpHeaderCfgToTerraform, true)(struct!.headerCfg),
  }
}


export function fwTemplateLoggingIncludeHttpToHclTerraform(struct?: FwTemplateLoggingIncludeHttpOutputReference | FwTemplateLoggingIncludeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension: {
      value: cdktf.numberToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_session_info: {
      value: cdktf.numberToHclTerraform(struct!.l4SessionInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.numberToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_number: {
      value: cdktf.numberToHclTerraform(struct!.requestNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_cfg: {
      value: cdktf.listMapperHcl(fwTemplateLoggingIncludeHttpHeaderCfgToHclTerraform, true)(struct!.headerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingIncludeHttpHeaderCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingIncludeHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingIncludeHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._l4SessionInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionInfo = this._l4SessionInfo;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._requestNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNumber = this._requestNumber;
    }
    if (this._headerCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerCfg = this._headerCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingIncludeHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtension = undefined;
      this._l4SessionInfo = undefined;
      this._method = undefined;
      this._requestNumber = undefined;
      this._headerCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtension = value.fileExtension;
      this._l4SessionInfo = value.l4SessionInfo;
      this._method = value.method;
      this._requestNumber = value.requestNumber;
      this._headerCfg.internalValue = value.headerCfg;
    }
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: number; 
  public get fileExtension() {
    return this.getNumberAttribute('file_extension');
  }
  public set fileExtension(value: number) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // l4_session_info - computed: false, optional: true, required: false
  private _l4SessionInfo?: number; 
  public get l4SessionInfo() {
    return this.getNumberAttribute('l4_session_info');
  }
  public set l4SessionInfo(value: number) {
    this._l4SessionInfo = value;
  }
  public resetL4SessionInfo() {
    this._l4SessionInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionInfoInput() {
    return this._l4SessionInfo;
  }

  // method - computed: false, optional: true, required: false
  private _method?: number; 
  public get method() {
    return this.getNumberAttribute('method');
  }
  public set method(value: number) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // request_number - computed: false, optional: true, required: false
  private _requestNumber?: number; 
  public get requestNumber() {
    return this.getNumberAttribute('request_number');
  }
  public set requestNumber(value: number) {
    this._requestNumber = value;
  }
  public resetRequestNumber() {
    this._requestNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNumberInput() {
    return this._requestNumber;
  }

  // header_cfg - computed: false, optional: true, required: false
  private _headerCfg = new FwTemplateLoggingIncludeHttpHeaderCfgList(this, "header_cfg", false);
  public get headerCfg() {
    return this._headerCfg;
  }
  public putHeaderCfg(value: FwTemplateLoggingIncludeHttpHeaderCfg[] | cdktf.IResolvable) {
    this._headerCfg.internalValue = value;
  }
  public resetHeaderCfg() {
    this._headerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerCfgInput() {
    return this._headerCfg.internalValue;
  }
}
export interface FwTemplateLoggingIncludeRadiusAttributeAttrCfg {
  /**
  * 'imei': Include IMEI; 'imsi': Include IMSI; 'msisdn': Include MSISDN; 'custom1': Customized attribute 1; 'custom2': Customized attribute 2; 'custom3': Customized attribute 3; 'custom4': Customized attribute 4; 'custom5': Customized attribute 5; 'custom6': Customized attribute 6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#attr FwTemplateLogging#attr}
  */
  readonly attr?: string;
  /**
  * 'http-requests': Include in HTTP request logs; 'sessions': Include in session logs; 'limit-policy': Include in limit policy logs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#attr_event FwTemplateLogging#attr_event}
  */
  readonly attrEvent?: string;
}

export function fwTemplateLoggingIncludeRadiusAttributeAttrCfgToTerraform(struct?: FwTemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr: cdktf.stringToTerraform(struct!.attr),
    attr_event: cdktf.stringToTerraform(struct!.attrEvent),
  }
}


export function fwTemplateLoggingIncludeRadiusAttributeAttrCfgToHclTerraform(struct?: FwTemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr: {
      value: cdktf.stringToHclTerraform(struct!.attr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_event: {
      value: cdktf.stringToHclTerraform(struct!.attrEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingIncludeRadiusAttributeAttrCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attr !== undefined) {
      hasAnyValues = true;
      internalValueResult.attr = this._attr;
    }
    if (this._attrEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrEvent = this._attrEvent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attr = undefined;
      this._attrEvent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attr = value.attr;
      this._attrEvent = value.attrEvent;
    }
  }

  // attr - computed: false, optional: true, required: false
  private _attr?: string; 
  public get attr() {
    return this.getStringAttribute('attr');
  }
  public set attr(value: string) {
    this._attr = value;
  }
  public resetAttr() {
    this._attr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrInput() {
    return this._attr;
  }

  // attr_event - computed: false, optional: true, required: false
  private _attrEvent?: string; 
  public get attrEvent() {
    return this.getStringAttribute('attr_event');
  }
  public set attrEvent(value: string) {
    this._attrEvent = value;
  }
  public resetAttrEvent() {
    this._attrEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrEventInput() {
    return this._attrEvent;
  }
}

export class FwTemplateLoggingIncludeRadiusAttributeAttrCfgList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingIncludeRadiusAttributeAttrCfg[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingIncludeRadiusAttributeAttrCfgOutputReference {
    return new FwTemplateLoggingIncludeRadiusAttributeAttrCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingIncludeRadiusAttribute {
  /**
  * Include radius attributes for the prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#framed_ipv6_prefix FwTemplateLogging#framed_ipv6_prefix}
  */
  readonly framedIpv6Prefix?: number;
  /**
  * Configure what string is to be inserted for custom RADIUS attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#insert_if_not_existing FwTemplateLogging#insert_if_not_existing}
  */
  readonly insertIfNotExisting?: number;
  /**
  * No quotation marks for RADIUS attributes in logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#no_quote FwTemplateLogging#no_quote}
  */
  readonly noQuote?: number;
  /**
  * '32': Prefix length 32; '48': Prefix length 48; '64': Prefix length 64; '80': Prefix length 80; '96': Prefix length 96; '112': Prefix length 112;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#prefix_length FwTemplateLogging#prefix_length}
  */
  readonly prefixLength?: string;
  /**
  * Insert 0000 for standard and custom attributes in log string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#zero_in_custom_attr FwTemplateLogging#zero_in_custom_attr}
  */
  readonly zeroInCustomAttr?: number;
  /**
  * attr_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#attr_cfg FwTemplateLogging#attr_cfg}
  */
  readonly attrCfg?: FwTemplateLoggingIncludeRadiusAttributeAttrCfg[] | cdktf.IResolvable;
}

export function fwTemplateLoggingIncludeRadiusAttributeToTerraform(struct?: FwTemplateLoggingIncludeRadiusAttributeOutputReference | FwTemplateLoggingIncludeRadiusAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    framed_ipv6_prefix: cdktf.numberToTerraform(struct!.framedIpv6Prefix),
    insert_if_not_existing: cdktf.numberToTerraform(struct!.insertIfNotExisting),
    no_quote: cdktf.numberToTerraform(struct!.noQuote),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    zero_in_custom_attr: cdktf.numberToTerraform(struct!.zeroInCustomAttr),
    attr_cfg: cdktf.listMapper(fwTemplateLoggingIncludeRadiusAttributeAttrCfgToTerraform, true)(struct!.attrCfg),
  }
}


export function fwTemplateLoggingIncludeRadiusAttributeToHclTerraform(struct?: FwTemplateLoggingIncludeRadiusAttributeOutputReference | FwTemplateLoggingIncludeRadiusAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    framed_ipv6_prefix: {
      value: cdktf.numberToHclTerraform(struct!.framedIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_if_not_existing: {
      value: cdktf.numberToHclTerraform(struct!.insertIfNotExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_quote: {
      value: cdktf.numberToHclTerraform(struct!.noQuote),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_in_custom_attr: {
      value: cdktf.numberToHclTerraform(struct!.zeroInCustomAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attr_cfg: {
      value: cdktf.listMapperHcl(fwTemplateLoggingIncludeRadiusAttributeAttrCfgToHclTerraform, true)(struct!.attrCfg),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingIncludeRadiusAttributeAttrCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingIncludeRadiusAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingIncludeRadiusAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._framedIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.framedIpv6Prefix = this._framedIpv6Prefix;
    }
    if (this._insertIfNotExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertIfNotExisting = this._insertIfNotExisting;
    }
    if (this._noQuote !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQuote = this._noQuote;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._zeroInCustomAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroInCustomAttr = this._zeroInCustomAttr;
    }
    if (this._attrCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrCfg = this._attrCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingIncludeRadiusAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._framedIpv6Prefix = undefined;
      this._insertIfNotExisting = undefined;
      this._noQuote = undefined;
      this._prefixLength = undefined;
      this._zeroInCustomAttr = undefined;
      this._attrCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._framedIpv6Prefix = value.framedIpv6Prefix;
      this._insertIfNotExisting = value.insertIfNotExisting;
      this._noQuote = value.noQuote;
      this._prefixLength = value.prefixLength;
      this._zeroInCustomAttr = value.zeroInCustomAttr;
      this._attrCfg.internalValue = value.attrCfg;
    }
  }

  // framed_ipv6_prefix - computed: false, optional: true, required: false
  private _framedIpv6Prefix?: number; 
  public get framedIpv6Prefix() {
    return this.getNumberAttribute('framed_ipv6_prefix');
  }
  public set framedIpv6Prefix(value: number) {
    this._framedIpv6Prefix = value;
  }
  public resetFramedIpv6Prefix() {
    this._framedIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framedIpv6PrefixInput() {
    return this._framedIpv6Prefix;
  }

  // insert_if_not_existing - computed: false, optional: true, required: false
  private _insertIfNotExisting?: number; 
  public get insertIfNotExisting() {
    return this.getNumberAttribute('insert_if_not_existing');
  }
  public set insertIfNotExisting(value: number) {
    this._insertIfNotExisting = value;
  }
  public resetInsertIfNotExisting() {
    this._insertIfNotExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertIfNotExistingInput() {
    return this._insertIfNotExisting;
  }

  // no_quote - computed: false, optional: true, required: false
  private _noQuote?: number; 
  public get noQuote() {
    return this.getNumberAttribute('no_quote');
  }
  public set noQuote(value: number) {
    this._noQuote = value;
  }
  public resetNoQuote() {
    this._noQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQuoteInput() {
    return this._noQuote;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // zero_in_custom_attr - computed: false, optional: true, required: false
  private _zeroInCustomAttr?: number; 
  public get zeroInCustomAttr() {
    return this.getNumberAttribute('zero_in_custom_attr');
  }
  public set zeroInCustomAttr(value: number) {
    this._zeroInCustomAttr = value;
  }
  public resetZeroInCustomAttr() {
    this._zeroInCustomAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroInCustomAttrInput() {
    return this._zeroInCustomAttr;
  }

  // attr_cfg - computed: false, optional: true, required: false
  private _attrCfg = new FwTemplateLoggingIncludeRadiusAttributeAttrCfgList(this, "attr_cfg", false);
  public get attrCfg() {
    return this._attrCfg;
  }
  public putAttrCfg(value: FwTemplateLoggingIncludeRadiusAttributeAttrCfg[] | cdktf.IResolvable) {
    this._attrCfg.internalValue = value;
  }
  public resetAttrCfg() {
    this._attrCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrCfgInput() {
    return this._attrCfg.internalValue;
  }
}
export interface FwTemplateLoggingLog {
  /**
  * 'host': Log the HTTP Host Header; 'url': Log the HTTP Request URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#http_requests FwTemplateLogging#http_requests}
  */
  readonly httpRequests?: string;
}

export function fwTemplateLoggingLogToTerraform(struct?: FwTemplateLoggingLogOutputReference | FwTemplateLoggingLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_requests: cdktf.stringToTerraform(struct!.httpRequests),
  }
}


export function fwTemplateLoggingLogToHclTerraform(struct?: FwTemplateLoggingLogOutputReference | FwTemplateLoggingLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_requests: {
      value: cdktf.stringToHclTerraform(struct!.httpRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequests = this._httpRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpRequests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpRequests = value.httpRequests;
    }
  }

  // http_requests - computed: false, optional: true, required: false
  private _httpRequests?: string; 
  public get httpRequests() {
    return this.getStringAttribute('http_requests');
  }
  public set httpRequests(value: string) {
    this._httpRequests = value;
  }
  public resetHttpRequests() {
    this._httpRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestsInput() {
    return this._httpRequests;
  }
}
export interface FwTemplateLoggingRuleRuleHttpRequestsDestPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#dest_port_number FwTemplateLogging#dest_port_number}
  */
  readonly destPortNumber?: number;
  /**
  * Include the byte count of HTTP Request/Response in FW session deletion logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#include_byte_count FwTemplateLogging#include_byte_count}
  */
  readonly includeByteCount?: number;
}

export function fwTemplateLoggingRuleRuleHttpRequestsDestPortToTerraform(struct?: FwTemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_port_number: cdktf.numberToTerraform(struct!.destPortNumber),
    include_byte_count: cdktf.numberToTerraform(struct!.includeByteCount),
  }
}


export function fwTemplateLoggingRuleRuleHttpRequestsDestPortToHclTerraform(struct?: FwTemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_port_number: {
      value: cdktf.numberToHclTerraform(struct!.destPortNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_byte_count: {
      value: cdktf.numberToHclTerraform(struct!.includeByteCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingRuleRuleHttpRequestsDestPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destPortNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPortNumber = this._destPortNumber;
    }
    if (this._includeByteCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeByteCount = this._includeByteCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destPortNumber = undefined;
      this._includeByteCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destPortNumber = value.destPortNumber;
      this._includeByteCount = value.includeByteCount;
    }
  }

  // dest_port_number - computed: false, optional: true, required: false
  private _destPortNumber?: number; 
  public get destPortNumber() {
    return this.getNumberAttribute('dest_port_number');
  }
  public set destPortNumber(value: number) {
    this._destPortNumber = value;
  }
  public resetDestPortNumber() {
    this._destPortNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortNumberInput() {
    return this._destPortNumber;
  }

  // include_byte_count - computed: false, optional: true, required: false
  private _includeByteCount?: number; 
  public get includeByteCount() {
    return this.getNumberAttribute('include_byte_count');
  }
  public set includeByteCount(value: number) {
    this._includeByteCount = value;
  }
  public resetIncludeByteCount() {
    this._includeByteCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeByteCountInput() {
    return this._includeByteCount;
  }
}

export class FwTemplateLoggingRuleRuleHttpRequestsDestPortList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingRuleRuleHttpRequestsDestPort[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingRuleRuleHttpRequestsDestPortOutputReference {
    return new FwTemplateLoggingRuleRuleHttpRequestsDestPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingRuleRuleHttpRequests {
  /**
  * Disable http packet sequence check and don't drop out of order packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#disable_sequence_check FwTemplateLogging#disable_sequence_check}
  */
  readonly disableSequenceCheck?: number;
  /**
  * Include all configured headers despite of absence in HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#include_all_headers FwTemplateLogging#include_all_headers}
  */
  readonly includeAllHeaders?: number;
  /**
  * Log every HTTP request in an HTTP 1.1 session (Default: Log the first HTTP request in a session)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#log_every_http_request FwTemplateLogging#log_every_http_request}
  */
  readonly logEveryHttpRequest?: number;
  /**
  * Max length of URL log (Max URL length (Default: 100 char))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#max_url_len FwTemplateLogging#max_url_len}
  */
  readonly maxUrlLen?: number;
  /**
  * dest_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#dest_port FwTemplateLogging#dest_port}
  */
  readonly destPort?: FwTemplateLoggingRuleRuleHttpRequestsDestPort[] | cdktf.IResolvable;
}

export function fwTemplateLoggingRuleRuleHttpRequestsToTerraform(struct?: FwTemplateLoggingRuleRuleHttpRequestsOutputReference | FwTemplateLoggingRuleRuleHttpRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_sequence_check: cdktf.numberToTerraform(struct!.disableSequenceCheck),
    include_all_headers: cdktf.numberToTerraform(struct!.includeAllHeaders),
    log_every_http_request: cdktf.numberToTerraform(struct!.logEveryHttpRequest),
    max_url_len: cdktf.numberToTerraform(struct!.maxUrlLen),
    dest_port: cdktf.listMapper(fwTemplateLoggingRuleRuleHttpRequestsDestPortToTerraform, true)(struct!.destPort),
  }
}


export function fwTemplateLoggingRuleRuleHttpRequestsToHclTerraform(struct?: FwTemplateLoggingRuleRuleHttpRequestsOutputReference | FwTemplateLoggingRuleRuleHttpRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_sequence_check: {
      value: cdktf.numberToHclTerraform(struct!.disableSequenceCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_all_headers: {
      value: cdktf.numberToHclTerraform(struct!.includeAllHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_every_http_request: {
      value: cdktf.numberToHclTerraform(struct!.logEveryHttpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_url_len: {
      value: cdktf.numberToHclTerraform(struct!.maxUrlLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_port: {
      value: cdktf.listMapperHcl(fwTemplateLoggingRuleRuleHttpRequestsDestPortToHclTerraform, true)(struct!.destPort),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingRuleRuleHttpRequestsDestPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingRuleRuleHttpRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingRuleRuleHttpRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSequenceCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSequenceCheck = this._disableSequenceCheck;
    }
    if (this._includeAllHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllHeaders = this._includeAllHeaders;
    }
    if (this._logEveryHttpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEveryHttpRequest = this._logEveryHttpRequest;
    }
    if (this._maxUrlLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlLen = this._maxUrlLen;
    }
    if (this._destPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingRuleRuleHttpRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSequenceCheck = undefined;
      this._includeAllHeaders = undefined;
      this._logEveryHttpRequest = undefined;
      this._maxUrlLen = undefined;
      this._destPort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSequenceCheck = value.disableSequenceCheck;
      this._includeAllHeaders = value.includeAllHeaders;
      this._logEveryHttpRequest = value.logEveryHttpRequest;
      this._maxUrlLen = value.maxUrlLen;
      this._destPort.internalValue = value.destPort;
    }
  }

  // disable_sequence_check - computed: false, optional: true, required: false
  private _disableSequenceCheck?: number; 
  public get disableSequenceCheck() {
    return this.getNumberAttribute('disable_sequence_check');
  }
  public set disableSequenceCheck(value: number) {
    this._disableSequenceCheck = value;
  }
  public resetDisableSequenceCheck() {
    this._disableSequenceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSequenceCheckInput() {
    return this._disableSequenceCheck;
  }

  // include_all_headers - computed: false, optional: true, required: false
  private _includeAllHeaders?: number; 
  public get includeAllHeaders() {
    return this.getNumberAttribute('include_all_headers');
  }
  public set includeAllHeaders(value: number) {
    this._includeAllHeaders = value;
  }
  public resetIncludeAllHeaders() {
    this._includeAllHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllHeadersInput() {
    return this._includeAllHeaders;
  }

  // log_every_http_request - computed: false, optional: true, required: false
  private _logEveryHttpRequest?: number; 
  public get logEveryHttpRequest() {
    return this.getNumberAttribute('log_every_http_request');
  }
  public set logEveryHttpRequest(value: number) {
    this._logEveryHttpRequest = value;
  }
  public resetLogEveryHttpRequest() {
    this._logEveryHttpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEveryHttpRequestInput() {
    return this._logEveryHttpRequest;
  }

  // max_url_len - computed: false, optional: true, required: false
  private _maxUrlLen?: number; 
  public get maxUrlLen() {
    return this.getNumberAttribute('max_url_len');
  }
  public set maxUrlLen(value: number) {
    this._maxUrlLen = value;
  }
  public resetMaxUrlLen() {
    this._maxUrlLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlLenInput() {
    return this._maxUrlLen;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort = new FwTemplateLoggingRuleRuleHttpRequestsDestPortList(this, "dest_port", false);
  public get destPort() {
    return this._destPort;
  }
  public putDestPort(value: FwTemplateLoggingRuleRuleHttpRequestsDestPort[] | cdktf.IResolvable) {
    this._destPort.internalValue = value;
  }
  public resetDestPort() {
    this._destPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort.internalValue;
  }
}
export interface FwTemplateLoggingRule {
  /**
  * rule_http_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#rule_http_requests FwTemplateLogging#rule_http_requests}
  */
  readonly ruleHttpRequests?: FwTemplateLoggingRuleRuleHttpRequests;
}

export function fwTemplateLoggingRuleToTerraform(struct?: FwTemplateLoggingRuleOutputReference | FwTemplateLoggingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_http_requests: fwTemplateLoggingRuleRuleHttpRequestsToTerraform(struct!.ruleHttpRequests),
  }
}


export function fwTemplateLoggingRuleToHclTerraform(struct?: FwTemplateLoggingRuleOutputReference | FwTemplateLoggingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_http_requests: {
      value: fwTemplateLoggingRuleRuleHttpRequestsToHclTerraform(struct!.ruleHttpRequests),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingRuleRuleHttpRequestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleHttpRequests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleHttpRequests = this._ruleHttpRequests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleHttpRequests.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleHttpRequests.internalValue = value.ruleHttpRequests;
    }
  }

  // rule_http_requests - computed: false, optional: true, required: false
  private _ruleHttpRequests = new FwTemplateLoggingRuleRuleHttpRequestsOutputReference(this, "rule_http_requests");
  public get ruleHttpRequests() {
    return this._ruleHttpRequests;
  }
  public putRuleHttpRequests(value: FwTemplateLoggingRuleRuleHttpRequests) {
    this._ruleHttpRequests.internalValue = value;
  }
  public resetRuleHttpRequests() {
    this._ruleHttpRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleHttpRequestsInput() {
    return this._ruleHttpRequests.internalValue;
  }
}
export interface FwTemplateLoggingSessionPeriodicLog {
  /**
  * Logging time interval (minutes) for long lived sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#interval FwTemplateLogging#interval}
  */
  readonly interval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
}

export function fwTemplateLoggingSessionPeriodicLogToTerraform(struct?: FwTemplateLoggingSessionPeriodicLogOutputReference | FwTemplateLoggingSessionPeriodicLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fwTemplateLoggingSessionPeriodicLogToHclTerraform(struct?: FwTemplateLoggingSessionPeriodicLogOutputReference | FwTemplateLoggingSessionPeriodicLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingSessionPeriodicLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingSessionPeriodicLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingSessionPeriodicLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._uuid = value.uuid;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FwTemplateLoggingSourceAddress {
  /**
  * Specify source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#ip FwTemplateLogging#ip}
  */
  readonly ip?: string;
  /**
  * Specify source IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#ipv6 FwTemplateLogging#ipv6}
  */
  readonly ipv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
}

export function fwTemplateLoggingSourceAddressToTerraform(struct?: FwTemplateLoggingSourceAddressOutputReference | FwTemplateLoggingSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fwTemplateLoggingSourceAddressToHclTerraform(struct?: FwTemplateLoggingSourceAddressOutputReference | FwTemplateLoggingSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingSourceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingSourceAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingSourceAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._uuid = value.uuid;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging thunder_fw_template_logging}
*/
export class FwTemplateLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_template_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwTemplateLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwTemplateLogging to import
  * @param importFromId The id of the existing FwTemplateLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwTemplateLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_template_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging thunder_fw_template_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwTemplateLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: FwTemplateLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_template_logging',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._facility = config.facility;
    this._format = config.format;
    this._id = config.id;
    this._includeDestFqdn = config.includeDestFqdn;
    this._includeYear = config.includeYear;
    this._mergedStyle = config.mergedStyle;
    this._name = config.name;
    this._resolution = config.resolution;
    this._serviceGroup = config.serviceGroup;
    this._severity = config.severity;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._custom.internalValue = config.custom;
    this._disableLogByDestination.internalValue = config.disableLogByDestination;
    this._enableLogByDestination.internalValue = config.enableLogByDestination;
    this._includeHttp.internalValue = config.includeHttp;
    this._includeRadiusAttribute.internalValue = config.includeRadiusAttribute;
    this._log.internalValue = config.log;
    this._rule.internalValue = config.rule;
    this._sessionPeriodicLog.internalValue = config.sessionPeriodicLog;
    this._sourceAddress.internalValue = config.sourceAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // include_dest_fqdn - computed: false, optional: true, required: false
  private _includeDestFqdn?: number; 
  public get includeDestFqdn() {
    return this.getNumberAttribute('include_dest_fqdn');
  }
  public set includeDestFqdn(value: number) {
    this._includeDestFqdn = value;
  }
  public resetIncludeDestFqdn() {
    this._includeDestFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDestFqdnInput() {
    return this._includeDestFqdn;
  }

  // include_year - computed: false, optional: true, required: false
  private _includeYear?: number; 
  public get includeYear() {
    return this.getNumberAttribute('include_year');
  }
  public set includeYear(value: number) {
    this._includeYear = value;
  }
  public resetIncludeYear() {
    this._includeYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeYearInput() {
    return this._includeYear;
  }

  // merged_style - computed: false, optional: true, required: false
  private _mergedStyle?: number; 
  public get mergedStyle() {
    return this.getNumberAttribute('merged_style');
  }
  public set mergedStyle(value: number) {
    this._mergedStyle = value;
  }
  public resetMergedStyle() {
    this._mergedStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedStyleInput() {
    return this._mergedStyle;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new FwTemplateLoggingCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: FwTemplateLoggingCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // disable_log_by_destination - computed: false, optional: true, required: false
  private _disableLogByDestination = new FwTemplateLoggingDisableLogByDestinationOutputReference(this, "disable_log_by_destination");
  public get disableLogByDestination() {
    return this._disableLogByDestination;
  }
  public putDisableLogByDestination(value: FwTemplateLoggingDisableLogByDestination) {
    this._disableLogByDestination.internalValue = value;
  }
  public resetDisableLogByDestination() {
    this._disableLogByDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLogByDestinationInput() {
    return this._disableLogByDestination.internalValue;
  }

  // enable_log_by_destination - computed: false, optional: true, required: false
  private _enableLogByDestination = new FwTemplateLoggingEnableLogByDestinationOutputReference(this, "enable_log_by_destination");
  public get enableLogByDestination() {
    return this._enableLogByDestination;
  }
  public putEnableLogByDestination(value: FwTemplateLoggingEnableLogByDestination) {
    this._enableLogByDestination.internalValue = value;
  }
  public resetEnableLogByDestination() {
    this._enableLogByDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogByDestinationInput() {
    return this._enableLogByDestination.internalValue;
  }

  // include_http - computed: false, optional: true, required: false
  private _includeHttp = new FwTemplateLoggingIncludeHttpOutputReference(this, "include_http");
  public get includeHttp() {
    return this._includeHttp;
  }
  public putIncludeHttp(value: FwTemplateLoggingIncludeHttp) {
    this._includeHttp.internalValue = value;
  }
  public resetIncludeHttp() {
    this._includeHttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHttpInput() {
    return this._includeHttp.internalValue;
  }

  // include_radius_attribute - computed: false, optional: true, required: false
  private _includeRadiusAttribute = new FwTemplateLoggingIncludeRadiusAttributeOutputReference(this, "include_radius_attribute");
  public get includeRadiusAttribute() {
    return this._includeRadiusAttribute;
  }
  public putIncludeRadiusAttribute(value: FwTemplateLoggingIncludeRadiusAttribute) {
    this._includeRadiusAttribute.internalValue = value;
  }
  public resetIncludeRadiusAttribute() {
    this._includeRadiusAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRadiusAttributeInput() {
    return this._includeRadiusAttribute.internalValue;
  }

  // log - computed: false, optional: true, required: false
  private _log = new FwTemplateLoggingLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: FwTemplateLoggingLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new FwTemplateLoggingRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: FwTemplateLoggingRule) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // session_periodic_log - computed: false, optional: true, required: false
  private _sessionPeriodicLog = new FwTemplateLoggingSessionPeriodicLogOutputReference(this, "session_periodic_log");
  public get sessionPeriodicLog() {
    return this._sessionPeriodicLog;
  }
  public putSessionPeriodicLog(value: FwTemplateLoggingSessionPeriodicLog) {
    this._sessionPeriodicLog.internalValue = value;
  }
  public resetSessionPeriodicLog() {
    this._sessionPeriodicLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPeriodicLogInput() {
    return this._sessionPeriodicLog.internalValue;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress = new FwTemplateLoggingSourceAddressOutputReference(this, "source_address");
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: FwTemplateLoggingSourceAddress) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      facility: cdktf.stringToTerraform(this._facility),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      include_dest_fqdn: cdktf.numberToTerraform(this._includeDestFqdn),
      include_year: cdktf.numberToTerraform(this._includeYear),
      merged_style: cdktf.numberToTerraform(this._mergedStyle),
      name: cdktf.stringToTerraform(this._name),
      resolution: cdktf.stringToTerraform(this._resolution),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      severity: cdktf.stringToTerraform(this._severity),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      custom: fwTemplateLoggingCustomToTerraform(this._custom.internalValue),
      disable_log_by_destination: fwTemplateLoggingDisableLogByDestinationToTerraform(this._disableLogByDestination.internalValue),
      enable_log_by_destination: fwTemplateLoggingEnableLogByDestinationToTerraform(this._enableLogByDestination.internalValue),
      include_http: fwTemplateLoggingIncludeHttpToTerraform(this._includeHttp.internalValue),
      include_radius_attribute: fwTemplateLoggingIncludeRadiusAttributeToTerraform(this._includeRadiusAttribute.internalValue),
      log: fwTemplateLoggingLogToTerraform(this._log.internalValue),
      rule: fwTemplateLoggingRuleToTerraform(this._rule.internalValue),
      session_periodic_log: fwTemplateLoggingSessionPeriodicLogToTerraform(this._sessionPeriodicLog.internalValue),
      source_address: fwTemplateLoggingSourceAddressToTerraform(this._sourceAddress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      facility: {
        value: cdktf.stringToHclTerraform(this._facility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      include_dest_fqdn: {
        value: cdktf.numberToHclTerraform(this._includeDestFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_year: {
        value: cdktf.numberToHclTerraform(this._includeYear),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      merged_style: {
        value: cdktf.numberToHclTerraform(this._mergedStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution: {
        value: cdktf.stringToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom: {
        value: fwTemplateLoggingCustomToHclTerraform(this._custom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingCustomList",
      },
      disable_log_by_destination: {
        value: fwTemplateLoggingDisableLogByDestinationToHclTerraform(this._disableLogByDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingDisableLogByDestinationList",
      },
      enable_log_by_destination: {
        value: fwTemplateLoggingEnableLogByDestinationToHclTerraform(this._enableLogByDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingEnableLogByDestinationList",
      },
      include_http: {
        value: fwTemplateLoggingIncludeHttpToHclTerraform(this._includeHttp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingIncludeHttpList",
      },
      include_radius_attribute: {
        value: fwTemplateLoggingIncludeRadiusAttributeToHclTerraform(this._includeRadiusAttribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingIncludeRadiusAttributeList",
      },
      log: {
        value: fwTemplateLoggingLogToHclTerraform(this._log.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingLogList",
      },
      rule: {
        value: fwTemplateLoggingRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingRuleList",
      },
      session_periodic_log: {
        value: fwTemplateLoggingSessionPeriodicLogToHclTerraform(this._sessionPeriodicLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingSessionPeriodicLogList",
      },
      source_address: {
        value: fwTemplateLoggingSourceAddressToHclTerraform(this._sourceAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingSourceAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
