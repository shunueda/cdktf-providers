// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Audit trail
  *   - Choices: `on`, `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#audit_trail SecurityPolicy#audit_trail}
  */
  readonly auditTrail?: string;
  /**
  * List of policy definitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#definitions SecurityPolicy#definitions}
  */
  readonly definitions: SecurityPolicyDefinitions[] | cdktf.IResolvable;
  /**
  * The description of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#description SecurityPolicy#description}
  */
  readonly description: string;
  /**
  * Bypass firewall policy and allow all Internet traffic to/from VPN 0
  *   - Choices: `allow`, `deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#direct_internet_applications SecurityPolicy#direct_internet_applications}
  */
  readonly directInternetApplications?: string;
  /**
  * Failure mode
  *   - Choices: `open`, `close`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#failure_mode SecurityPolicy#failure_mode}
  */
  readonly failureMode?: string;
  /**
  * High Speed Logging Server IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#high_speed_logging_server_ip SecurityPolicy#high_speed_logging_server_ip}
  */
  readonly highSpeedLoggingServerIp?: string;
  /**
  * High Speed Logging Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#high_speed_logging_server_port SecurityPolicy#high_speed_logging_server_port}
  */
  readonly highSpeedLoggingServerPort?: string;
  /**
  * High Speed Logging Source Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#high_speed_logging_server_source_interface SecurityPolicy#high_speed_logging_server_source_interface}
  */
  readonly highSpeedLoggingServerSourceInterface?: string;
  /**
  * High Speed Logging VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#high_speed_logging_vpn SecurityPolicy#high_speed_logging_vpn}
  */
  readonly highSpeedLoggingVpn?: string;
  /**
  * ICMP Unreachable Allow
  *   - Choices: `on`, `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#imcp_unreachable_allow SecurityPolicy#imcp_unreachable_allow}
  */
  readonly imcpUnreachableAllow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#logging SecurityPolicy#logging}
  */
  readonly logging?: SecurityPolicyLogging[] | cdktf.IResolvable;
  /**
  * Match Statistics per-filter
  *   - Choices: `on`, `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#match_statistics_per_filter SecurityPolicy#match_statistics_per_filter}
  */
  readonly matchStatisticsPerFilter?: string;
  /**
  * Max Incomplete ICMP Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#max_incomplete_icmp_limit SecurityPolicy#max_incomplete_icmp_limit}
  */
  readonly maxIncompleteIcmpLimit?: string;
  /**
  * Max Incomplete TCP Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#max_incomplete_tcp_limit SecurityPolicy#max_incomplete_tcp_limit}
  */
  readonly maxIncompleteTcpLimit?: string;
  /**
  * Max Incomplete UDP Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#max_incomplete_udp_limit SecurityPolicy#max_incomplete_udp_limit}
  */
  readonly maxIncompleteUdpLimit?: string;
  /**
  * The policy mode
  *   - Choices: `security`, `unified`
  *   - Default value: `security`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#mode SecurityPolicy#mode}
  */
  readonly mode?: string;
  /**
  * The name of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Session Reclassify Allow
  *   - Choices: `on`, `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#session_reclassify_allow SecurityPolicy#session_reclassify_allow}
  */
  readonly sessionReclassifyAllow?: string;
  /**
  * TCP SYN Flood Limit, value from 1 to 4294967295
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#tcp_syn_flood_limit SecurityPolicy#tcp_syn_flood_limit}
  */
  readonly tcpSynFloodLimit?: string;
  /**
  * Unified Logging
  *   - Choices: `on`, `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#unified_logging SecurityPolicy#unified_logging}
  */
  readonly unifiedLogging?: string;
  /**
  * The use case of the security policy
  *   - Choices: `custom`, `compliance`, `guestAccess`, `directCloudAccess`, `directInternetAccess`, `directCloudAccess`
  *   - Default value: `custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#use_case SecurityPolicy#use_case}
  */
  readonly useCase?: string;
}
export interface SecurityPolicyDefinitionsEntries {
  /**
  * Destination Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#destination_zone SecurityPolicy#destination_zone}
  */
  readonly destinationZone?: string;
  /**
  * Source Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#source_zone SecurityPolicy#source_zone}
  */
  readonly sourceZone?: string;
}

export function securityPolicyDefinitionsEntriesToTerraform(struct?: SecurityPolicyDefinitionsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_zone: cdktf.stringToTerraform(struct!.destinationZone),
    source_zone: cdktf.stringToTerraform(struct!.sourceZone),
  }
}


export function securityPolicyDefinitionsEntriesToHclTerraform(struct?: SecurityPolicyDefinitionsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_zone: {
      value: cdktf.stringToHclTerraform(struct!.destinationZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_zone: {
      value: cdktf.stringToHclTerraform(struct!.sourceZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyDefinitionsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyDefinitionsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationZone = this._destinationZone;
    }
    if (this._sourceZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceZone = this._sourceZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyDefinitionsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationZone = undefined;
      this._sourceZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationZone = value.destinationZone;
      this._sourceZone = value.sourceZone;
    }
  }

  // destination_zone - computed: false, optional: true, required: false
  private _destinationZone?: string; 
  public get destinationZone() {
    return this.getStringAttribute('destination_zone');
  }
  public set destinationZone(value: string) {
    this._destinationZone = value;
  }
  public resetDestinationZone() {
    this._destinationZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationZoneInput() {
    return this._destinationZone;
  }

  // source_zone - computed: false, optional: true, required: false
  private _sourceZone?: string; 
  public get sourceZone() {
    return this.getStringAttribute('source_zone');
  }
  public set sourceZone(value: string) {
    this._sourceZone = value;
  }
  public resetSourceZone() {
    this._sourceZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceZoneInput() {
    return this._sourceZone;
  }
}

export class SecurityPolicyDefinitionsEntriesList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyDefinitionsEntries[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyDefinitionsEntriesOutputReference {
    return new SecurityPolicyDefinitionsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyDefinitions {
  /**
  * List of zone pair definitions, Attribute conditional on `type` being equal to `zoneBasedFW`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#entries SecurityPolicy#entries}
  */
  readonly entries?: SecurityPolicyDefinitionsEntries[] | cdktf.IResolvable;
  /**
  * Policy definition ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#id SecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Policy definition type
  *   - Choices: `urlFiltering`, `zoneBasedFW`, `intrusionPrevention`, `sslDecryption`, `advancedMalwareProtection`, `dnsSecurity`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#type SecurityPolicy#type}
  */
  readonly type: string;
  /**
  * Policy definition version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#version SecurityPolicy#version}
  */
  readonly version?: number;
}

export function securityPolicyDefinitionsToTerraform(struct?: SecurityPolicyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(securityPolicyDefinitionsEntriesToTerraform, false)(struct!.entries),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function securityPolicyDefinitionsToHclTerraform(struct?: SecurityPolicyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(securityPolicyDefinitionsEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyDefinitionsEntriesList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entries.internalValue = undefined;
      this._id = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entries.internalValue = value.entries;
      this._id = value.id;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new SecurityPolicyDefinitionsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: SecurityPolicyDefinitionsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class SecurityPolicyDefinitionsList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyDefinitions[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyDefinitionsOutputReference {
    return new SecurityPolicyDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyLogging {
  /**
  * External Syslog Server IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#external_syslog_server_ip SecurityPolicy#external_syslog_server_ip}
  */
  readonly externalSyslogServerIp?: string;
  /**
  * External Syslog Server Source Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#external_syslog_server_source_interface SecurityPolicy#external_syslog_server_source_interface}
  */
  readonly externalSyslogServerSourceInterface?: string;
  /**
  * External Syslog Server VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#external_syslog_server_vpn SecurityPolicy#external_syslog_server_vpn}
  */
  readonly externalSyslogServerVpn?: string;
}

export function securityPolicyLoggingToTerraform(struct?: SecurityPolicyLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_syslog_server_ip: cdktf.stringToTerraform(struct!.externalSyslogServerIp),
    external_syslog_server_source_interface: cdktf.stringToTerraform(struct!.externalSyslogServerSourceInterface),
    external_syslog_server_vpn: cdktf.stringToTerraform(struct!.externalSyslogServerVpn),
  }
}


export function securityPolicyLoggingToHclTerraform(struct?: SecurityPolicyLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_syslog_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.externalSyslogServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_syslog_server_source_interface: {
      value: cdktf.stringToHclTerraform(struct!.externalSyslogServerSourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_syslog_server_vpn: {
      value: cdktf.stringToHclTerraform(struct!.externalSyslogServerVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalSyslogServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSyslogServerIp = this._externalSyslogServerIp;
    }
    if (this._externalSyslogServerSourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSyslogServerSourceInterface = this._externalSyslogServerSourceInterface;
    }
    if (this._externalSyslogServerVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSyslogServerVpn = this._externalSyslogServerVpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalSyslogServerIp = undefined;
      this._externalSyslogServerSourceInterface = undefined;
      this._externalSyslogServerVpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalSyslogServerIp = value.externalSyslogServerIp;
      this._externalSyslogServerSourceInterface = value.externalSyslogServerSourceInterface;
      this._externalSyslogServerVpn = value.externalSyslogServerVpn;
    }
  }

  // external_syslog_server_ip - computed: false, optional: true, required: false
  private _externalSyslogServerIp?: string; 
  public get externalSyslogServerIp() {
    return this.getStringAttribute('external_syslog_server_ip');
  }
  public set externalSyslogServerIp(value: string) {
    this._externalSyslogServerIp = value;
  }
  public resetExternalSyslogServerIp() {
    this._externalSyslogServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSyslogServerIpInput() {
    return this._externalSyslogServerIp;
  }

  // external_syslog_server_source_interface - computed: false, optional: true, required: false
  private _externalSyslogServerSourceInterface?: string; 
  public get externalSyslogServerSourceInterface() {
    return this.getStringAttribute('external_syslog_server_source_interface');
  }
  public set externalSyslogServerSourceInterface(value: string) {
    this._externalSyslogServerSourceInterface = value;
  }
  public resetExternalSyslogServerSourceInterface() {
    this._externalSyslogServerSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSyslogServerSourceInterfaceInput() {
    return this._externalSyslogServerSourceInterface;
  }

  // external_syslog_server_vpn - computed: false, optional: true, required: false
  private _externalSyslogServerVpn?: string; 
  public get externalSyslogServerVpn() {
    return this.getStringAttribute('external_syslog_server_vpn');
  }
  public set externalSyslogServerVpn(value: string) {
    this._externalSyslogServerVpn = value;
  }
  public resetExternalSyslogServerVpn() {
    this._externalSyslogServerVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSyslogServerVpnInput() {
    return this._externalSyslogServerVpn;
  }
}

export class SecurityPolicyLoggingList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyLogging[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyLoggingOutputReference {
    return new SecurityPolicyLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy sdwan_security_policy}
*/
export class SecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityPolicy to import
  * @param importFromId The id of the existing SecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_policy sdwan_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditTrail = config.auditTrail;
    this._definitions.internalValue = config.definitions;
    this._description = config.description;
    this._directInternetApplications = config.directInternetApplications;
    this._failureMode = config.failureMode;
    this._highSpeedLoggingServerIp = config.highSpeedLoggingServerIp;
    this._highSpeedLoggingServerPort = config.highSpeedLoggingServerPort;
    this._highSpeedLoggingServerSourceInterface = config.highSpeedLoggingServerSourceInterface;
    this._highSpeedLoggingVpn = config.highSpeedLoggingVpn;
    this._imcpUnreachableAllow = config.imcpUnreachableAllow;
    this._logging.internalValue = config.logging;
    this._matchStatisticsPerFilter = config.matchStatisticsPerFilter;
    this._maxIncompleteIcmpLimit = config.maxIncompleteIcmpLimit;
    this._maxIncompleteTcpLimit = config.maxIncompleteTcpLimit;
    this._maxIncompleteUdpLimit = config.maxIncompleteUdpLimit;
    this._mode = config.mode;
    this._name = config.name;
    this._sessionReclassifyAllow = config.sessionReclassifyAllow;
    this._tcpSynFloodLimit = config.tcpSynFloodLimit;
    this._unifiedLogging = config.unifiedLogging;
    this._useCase = config.useCase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_trail - computed: false, optional: true, required: false
  private _auditTrail?: string; 
  public get auditTrail() {
    return this.getStringAttribute('audit_trail');
  }
  public set auditTrail(value: string) {
    this._auditTrail = value;
  }
  public resetAuditTrail() {
    this._auditTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditTrailInput() {
    return this._auditTrail;
  }

  // definitions - computed: false, optional: false, required: true
  private _definitions = new SecurityPolicyDefinitionsList(this, "definitions", true);
  public get definitions() {
    return this._definitions;
  }
  public putDefinitions(value: SecurityPolicyDefinitions[] | cdktf.IResolvable) {
    this._definitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionsInput() {
    return this._definitions.internalValue;
  }

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

  // direct_internet_applications - computed: false, optional: true, required: false
  private _directInternetApplications?: string; 
  public get directInternetApplications() {
    return this.getStringAttribute('direct_internet_applications');
  }
  public set directInternetApplications(value: string) {
    this._directInternetApplications = value;
  }
  public resetDirectInternetApplications() {
    this._directInternetApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInternetApplicationsInput() {
    return this._directInternetApplications;
  }

  // failure_mode - computed: false, optional: true, required: false
  private _failureMode?: string; 
  public get failureMode() {
    return this.getStringAttribute('failure_mode');
  }
  public set failureMode(value: string) {
    this._failureMode = value;
  }
  public resetFailureMode() {
    this._failureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeInput() {
    return this._failureMode;
  }

  // high_speed_logging_server_ip - computed: false, optional: true, required: false
  private _highSpeedLoggingServerIp?: string; 
  public get highSpeedLoggingServerIp() {
    return this.getStringAttribute('high_speed_logging_server_ip');
  }
  public set highSpeedLoggingServerIp(value: string) {
    this._highSpeedLoggingServerIp = value;
  }
  public resetHighSpeedLoggingServerIp() {
    this._highSpeedLoggingServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highSpeedLoggingServerIpInput() {
    return this._highSpeedLoggingServerIp;
  }

  // high_speed_logging_server_port - computed: false, optional: true, required: false
  private _highSpeedLoggingServerPort?: string; 
  public get highSpeedLoggingServerPort() {
    return this.getStringAttribute('high_speed_logging_server_port');
  }
  public set highSpeedLoggingServerPort(value: string) {
    this._highSpeedLoggingServerPort = value;
  }
  public resetHighSpeedLoggingServerPort() {
    this._highSpeedLoggingServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highSpeedLoggingServerPortInput() {
    return this._highSpeedLoggingServerPort;
  }

  // high_speed_logging_server_source_interface - computed: false, optional: true, required: false
  private _highSpeedLoggingServerSourceInterface?: string; 
  public get highSpeedLoggingServerSourceInterface() {
    return this.getStringAttribute('high_speed_logging_server_source_interface');
  }
  public set highSpeedLoggingServerSourceInterface(value: string) {
    this._highSpeedLoggingServerSourceInterface = value;
  }
  public resetHighSpeedLoggingServerSourceInterface() {
    this._highSpeedLoggingServerSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highSpeedLoggingServerSourceInterfaceInput() {
    return this._highSpeedLoggingServerSourceInterface;
  }

  // high_speed_logging_vpn - computed: false, optional: true, required: false
  private _highSpeedLoggingVpn?: string; 
  public get highSpeedLoggingVpn() {
    return this.getStringAttribute('high_speed_logging_vpn');
  }
  public set highSpeedLoggingVpn(value: string) {
    this._highSpeedLoggingVpn = value;
  }
  public resetHighSpeedLoggingVpn() {
    this._highSpeedLoggingVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highSpeedLoggingVpnInput() {
    return this._highSpeedLoggingVpn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // imcp_unreachable_allow - computed: false, optional: true, required: false
  private _imcpUnreachableAllow?: string; 
  public get imcpUnreachableAllow() {
    return this.getStringAttribute('imcp_unreachable_allow');
  }
  public set imcpUnreachableAllow(value: string) {
    this._imcpUnreachableAllow = value;
  }
  public resetImcpUnreachableAllow() {
    this._imcpUnreachableAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imcpUnreachableAllowInput() {
    return this._imcpUnreachableAllow;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new SecurityPolicyLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }
  public putLogging(value: SecurityPolicyLogging[] | cdktf.IResolvable) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // match_statistics_per_filter - computed: false, optional: true, required: false
  private _matchStatisticsPerFilter?: string; 
  public get matchStatisticsPerFilter() {
    return this.getStringAttribute('match_statistics_per_filter');
  }
  public set matchStatisticsPerFilter(value: string) {
    this._matchStatisticsPerFilter = value;
  }
  public resetMatchStatisticsPerFilter() {
    this._matchStatisticsPerFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStatisticsPerFilterInput() {
    return this._matchStatisticsPerFilter;
  }

  // max_incomplete_icmp_limit - computed: false, optional: true, required: false
  private _maxIncompleteIcmpLimit?: string; 
  public get maxIncompleteIcmpLimit() {
    return this.getStringAttribute('max_incomplete_icmp_limit');
  }
  public set maxIncompleteIcmpLimit(value: string) {
    this._maxIncompleteIcmpLimit = value;
  }
  public resetMaxIncompleteIcmpLimit() {
    this._maxIncompleteIcmpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncompleteIcmpLimitInput() {
    return this._maxIncompleteIcmpLimit;
  }

  // max_incomplete_tcp_limit - computed: false, optional: true, required: false
  private _maxIncompleteTcpLimit?: string; 
  public get maxIncompleteTcpLimit() {
    return this.getStringAttribute('max_incomplete_tcp_limit');
  }
  public set maxIncompleteTcpLimit(value: string) {
    this._maxIncompleteTcpLimit = value;
  }
  public resetMaxIncompleteTcpLimit() {
    this._maxIncompleteTcpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncompleteTcpLimitInput() {
    return this._maxIncompleteTcpLimit;
  }

  // max_incomplete_udp_limit - computed: false, optional: true, required: false
  private _maxIncompleteUdpLimit?: string; 
  public get maxIncompleteUdpLimit() {
    return this.getStringAttribute('max_incomplete_udp_limit');
  }
  public set maxIncompleteUdpLimit(value: string) {
    this._maxIncompleteUdpLimit = value;
  }
  public resetMaxIncompleteUdpLimit() {
    this._maxIncompleteUdpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncompleteUdpLimitInput() {
    return this._maxIncompleteUdpLimit;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // session_reclassify_allow - computed: false, optional: true, required: false
  private _sessionReclassifyAllow?: string; 
  public get sessionReclassifyAllow() {
    return this.getStringAttribute('session_reclassify_allow');
  }
  public set sessionReclassifyAllow(value: string) {
    this._sessionReclassifyAllow = value;
  }
  public resetSessionReclassifyAllow() {
    this._sessionReclassifyAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReclassifyAllowInput() {
    return this._sessionReclassifyAllow;
  }

  // tcp_syn_flood_limit - computed: false, optional: true, required: false
  private _tcpSynFloodLimit?: string; 
  public get tcpSynFloodLimit() {
    return this.getStringAttribute('tcp_syn_flood_limit');
  }
  public set tcpSynFloodLimit(value: string) {
    this._tcpSynFloodLimit = value;
  }
  public resetTcpSynFloodLimit() {
    this._tcpSynFloodLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFloodLimitInput() {
    return this._tcpSynFloodLimit;
  }

  // unified_logging - computed: false, optional: true, required: false
  private _unifiedLogging?: string; 
  public get unifiedLogging() {
    return this.getStringAttribute('unified_logging');
  }
  public set unifiedLogging(value: string) {
    this._unifiedLogging = value;
  }
  public resetUnifiedLogging() {
    this._unifiedLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedLoggingInput() {
    return this._unifiedLogging;
  }

  // use_case - computed: true, optional: true, required: false
  private _useCase?: string; 
  public get useCase() {
    return this.getStringAttribute('use_case');
  }
  public set useCase(value: string) {
    this._useCase = value;
  }
  public resetUseCase() {
    this._useCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCaseInput() {
    return this._useCase;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_trail: cdktf.stringToTerraform(this._auditTrail),
      definitions: cdktf.listMapper(securityPolicyDefinitionsToTerraform, false)(this._definitions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      direct_internet_applications: cdktf.stringToTerraform(this._directInternetApplications),
      failure_mode: cdktf.stringToTerraform(this._failureMode),
      high_speed_logging_server_ip: cdktf.stringToTerraform(this._highSpeedLoggingServerIp),
      high_speed_logging_server_port: cdktf.stringToTerraform(this._highSpeedLoggingServerPort),
      high_speed_logging_server_source_interface: cdktf.stringToTerraform(this._highSpeedLoggingServerSourceInterface),
      high_speed_logging_vpn: cdktf.stringToTerraform(this._highSpeedLoggingVpn),
      imcp_unreachable_allow: cdktf.stringToTerraform(this._imcpUnreachableAllow),
      logging: cdktf.listMapper(securityPolicyLoggingToTerraform, false)(this._logging.internalValue),
      match_statistics_per_filter: cdktf.stringToTerraform(this._matchStatisticsPerFilter),
      max_incomplete_icmp_limit: cdktf.stringToTerraform(this._maxIncompleteIcmpLimit),
      max_incomplete_tcp_limit: cdktf.stringToTerraform(this._maxIncompleteTcpLimit),
      max_incomplete_udp_limit: cdktf.stringToTerraform(this._maxIncompleteUdpLimit),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      session_reclassify_allow: cdktf.stringToTerraform(this._sessionReclassifyAllow),
      tcp_syn_flood_limit: cdktf.stringToTerraform(this._tcpSynFloodLimit),
      unified_logging: cdktf.stringToTerraform(this._unifiedLogging),
      use_case: cdktf.stringToTerraform(this._useCase),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_trail: {
        value: cdktf.stringToHclTerraform(this._auditTrail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      definitions: {
        value: cdktf.listMapperHcl(securityPolicyDefinitionsToHclTerraform, false)(this._definitions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecurityPolicyDefinitionsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_internet_applications: {
        value: cdktf.stringToHclTerraform(this._directInternetApplications),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_mode: {
        value: cdktf.stringToHclTerraform(this._failureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_speed_logging_server_ip: {
        value: cdktf.stringToHclTerraform(this._highSpeedLoggingServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_speed_logging_server_port: {
        value: cdktf.stringToHclTerraform(this._highSpeedLoggingServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_speed_logging_server_source_interface: {
        value: cdktf.stringToHclTerraform(this._highSpeedLoggingServerSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_speed_logging_vpn: {
        value: cdktf.stringToHclTerraform(this._highSpeedLoggingVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imcp_unreachable_allow: {
        value: cdktf.stringToHclTerraform(this._imcpUnreachableAllow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.listMapperHcl(securityPolicyLoggingToHclTerraform, false)(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityPolicyLoggingList",
      },
      match_statistics_per_filter: {
        value: cdktf.stringToHclTerraform(this._matchStatisticsPerFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_incomplete_icmp_limit: {
        value: cdktf.stringToHclTerraform(this._maxIncompleteIcmpLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_incomplete_tcp_limit: {
        value: cdktf.stringToHclTerraform(this._maxIncompleteTcpLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_incomplete_udp_limit: {
        value: cdktf.stringToHclTerraform(this._maxIncompleteUdpLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      session_reclassify_allow: {
        value: cdktf.stringToHclTerraform(this._sessionReclassifyAllow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_syn_flood_limit: {
        value: cdktf.stringToHclTerraform(this._tcpSynFloodLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unified_logging: {
        value: cdktf.stringToHclTerraform(this._unifiedLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_case: {
        value: cdktf.stringToHclTerraform(this._useCase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
