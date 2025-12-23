// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthmonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#allow_duplicate_monitors Healthmonitor#allow_duplicate_monitors}
  */
  readonly allowDuplicateMonitors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#description Healthmonitor#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#disable_quickstart Healthmonitor#disable_quickstart}
  */
  readonly disableQuickstart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#failed_checks Healthmonitor#failed_checks}
  */
  readonly failedChecks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#id Healthmonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#is_federated Healthmonitor#is_federated}
  */
  readonly isFederated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#monitor_port Healthmonitor#monitor_port}
  */
  readonly monitorPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#name Healthmonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#receive_timeout Healthmonitor#receive_timeout}
  */
  readonly receiveTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#send_interval Healthmonitor#send_interval}
  */
  readonly sendInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#successful_checks Healthmonitor#successful_checks}
  */
  readonly successfulChecks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#tenant_ref Healthmonitor#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#type Healthmonitor#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#uuid Healthmonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#authentication Healthmonitor#authentication}
  */
  readonly authentication?: HealthmonitorAuthentication[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#configpb_attributes Healthmonitor#configpb_attributes}
  */
  readonly configpbAttributes?: HealthmonitorConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * dns_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#dns_monitor Healthmonitor#dns_monitor}
  */
  readonly dnsMonitor?: HealthmonitorDnsMonitor[] | cdktf.IResolvable;
  /**
  * external_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#external_monitor Healthmonitor#external_monitor}
  */
  readonly externalMonitor?: HealthmonitorExternalMonitor[] | cdktf.IResolvable;
  /**
  * ftp_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ftp_monitor Healthmonitor#ftp_monitor}
  */
  readonly ftpMonitor?: HealthmonitorFtpMonitor[] | cdktf.IResolvable;
  /**
  * ftps_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ftps_monitor Healthmonitor#ftps_monitor}
  */
  readonly ftpsMonitor?: HealthmonitorFtpsMonitor[] | cdktf.IResolvable;
  /**
  * http2_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http2_monitor Healthmonitor#http2_monitor}
  */
  readonly http2Monitor?: HealthmonitorHttp2Monitor[] | cdktf.IResolvable;
  /**
  * http2s_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http2s_monitor Healthmonitor#http2s_monitor}
  */
  readonly http2SMonitor?: HealthmonitorHttp2SMonitor[] | cdktf.IResolvable;
  /**
  * http_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_monitor Healthmonitor#http_monitor}
  */
  readonly httpMonitor?: HealthmonitorHttpMonitor[] | cdktf.IResolvable;
  /**
  * https_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#https_monitor Healthmonitor#https_monitor}
  */
  readonly httpsMonitor?: HealthmonitorHttpsMonitor[] | cdktf.IResolvable;
  /**
  * imap_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#imap_monitor Healthmonitor#imap_monitor}
  */
  readonly imapMonitor?: HealthmonitorImapMonitor[] | cdktf.IResolvable;
  /**
  * imaps_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#imaps_monitor Healthmonitor#imaps_monitor}
  */
  readonly imapsMonitor?: HealthmonitorImapsMonitor[] | cdktf.IResolvable;
  /**
  * ldap_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ldap_monitor Healthmonitor#ldap_monitor}
  */
  readonly ldapMonitor?: HealthmonitorLdapMonitor[] | cdktf.IResolvable;
  /**
  * ldaps_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ldaps_monitor Healthmonitor#ldaps_monitor}
  */
  readonly ldapsMonitor?: HealthmonitorLdapsMonitor[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#markers Healthmonitor#markers}
  */
  readonly markers?: HealthmonitorMarkers[] | cdktf.IResolvable;
  /**
  * monitor_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#monitor_ip Healthmonitor#monitor_ip}
  */
  readonly monitorIp?: HealthmonitorMonitorIp[] | cdktf.IResolvable;
  /**
  * pop3_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pop3_monitor Healthmonitor#pop3_monitor}
  */
  readonly pop3Monitor?: HealthmonitorPop3Monitor[] | cdktf.IResolvable;
  /**
  * pop3s_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pop3s_monitor Healthmonitor#pop3s_monitor}
  */
  readonly pop3SMonitor?: HealthmonitorPop3SMonitor[] | cdktf.IResolvable;
  /**
  * radius_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#radius_monitor Healthmonitor#radius_monitor}
  */
  readonly radiusMonitor?: HealthmonitorRadiusMonitor[] | cdktf.IResolvable;
  /**
  * sctp_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#sctp_monitor Healthmonitor#sctp_monitor}
  */
  readonly sctpMonitor?: HealthmonitorSctpMonitor[] | cdktf.IResolvable;
  /**
  * sip_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#sip_monitor Healthmonitor#sip_monitor}
  */
  readonly sipMonitor?: HealthmonitorSipMonitor[] | cdktf.IResolvable;
  /**
  * smtp_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#smtp_monitor Healthmonitor#smtp_monitor}
  */
  readonly smtpMonitor?: HealthmonitorSmtpMonitor[] | cdktf.IResolvable;
  /**
  * smtps_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#smtps_monitor Healthmonitor#smtps_monitor}
  */
  readonly smtpsMonitor?: HealthmonitorSmtpsMonitor[] | cdktf.IResolvable;
  /**
  * tcp_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#tcp_monitor Healthmonitor#tcp_monitor}
  */
  readonly tcpMonitor?: HealthmonitorTcpMonitor[] | cdktf.IResolvable;
  /**
  * udp_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#udp_monitor Healthmonitor#udp_monitor}
  */
  readonly udpMonitor?: HealthmonitorUdpMonitor[] | cdktf.IResolvable;
}
export interface HealthmonitorAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#password Healthmonitor#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#username Healthmonitor#username}
  */
  readonly username: string;
}

export function healthmonitorAuthenticationToTerraform(struct?: HealthmonitorAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function healthmonitorAuthenticationToHclTerraform(struct?: HealthmonitorAuthentication | cdktf.IResolvable): any {
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class HealthmonitorAuthenticationList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorAuthentication[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorAuthenticationOutputReference {
    return new HealthmonitorAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#version Healthmonitor#version}
  */
  readonly version?: string;
}

export function healthmonitorConfigpbAttributesToTerraform(struct?: HealthmonitorConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function healthmonitorConfigpbAttributesToHclTerraform(struct?: HealthmonitorConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
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

export class HealthmonitorConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorConfigpbAttributesOutputReference {
    return new HealthmonitorConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorDnsMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#qtype Healthmonitor#qtype}
  */
  readonly qtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#query_name Healthmonitor#query_name}
  */
  readonly queryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#rcode Healthmonitor#rcode}
  */
  readonly rcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#record_type Healthmonitor#record_type}
  */
  readonly recordType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#response_string Healthmonitor#response_string}
  */
  readonly responseString?: string;
}

export function healthmonitorDnsMonitorToTerraform(struct?: HealthmonitorDnsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qtype: cdktf.stringToTerraform(struct!.qtype),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    rcode: cdktf.stringToTerraform(struct!.rcode),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    response_string: cdktf.stringToTerraform(struct!.responseString),
  }
}


export function healthmonitorDnsMonitorToHclTerraform(struct?: HealthmonitorDnsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    qtype: {
      value: cdktf.stringToHclTerraform(struct!.qtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcode: {
      value: cdktf.stringToHclTerraform(struct!.rcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_string: {
      value: cdktf.stringToHclTerraform(struct!.responseString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorDnsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorDnsMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.qtype = this._qtype;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._rcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcode = this._rcode;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._responseString !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseString = this._responseString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorDnsMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._qtype = undefined;
      this._queryName = undefined;
      this._rcode = undefined;
      this._recordType = undefined;
      this._responseString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._qtype = value.qtype;
      this._queryName = value.queryName;
      this._rcode = value.rcode;
      this._recordType = value.recordType;
      this._responseString = value.responseString;
    }
  }

  // qtype - computed: false, optional: true, required: false
  private _qtype?: string; 
  public get qtype() {
    return this.getStringAttribute('qtype');
  }
  public set qtype(value: string) {
    this._qtype = value;
  }
  public resetQtype() {
    this._qtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qtypeInput() {
    return this._qtype;
  }

  // query_name - computed: false, optional: false, required: true
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // rcode - computed: false, optional: true, required: false
  private _rcode?: string; 
  public get rcode() {
    return this.getStringAttribute('rcode');
  }
  public set rcode(value: string) {
    this._rcode = value;
  }
  public resetRcode() {
    this._rcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeInput() {
    return this._rcode;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // response_string - computed: true, optional: true, required: false
  private _responseString?: string; 
  public get responseString() {
    return this.getStringAttribute('response_string');
  }
  public set responseString(value: string) {
    this._responseString = value;
  }
  public resetResponseString() {
    this._responseString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStringInput() {
    return this._responseString;
  }
}

export class HealthmonitorDnsMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorDnsMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorDnsMonitorOutputReference {
    return new HealthmonitorDnsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorExternalMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#command_code Healthmonitor#command_code}
  */
  readonly commandCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#command_parameters Healthmonitor#command_parameters}
  */
  readonly commandParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#command_path Healthmonitor#command_path}
  */
  readonly commandPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#command_variables Healthmonitor#command_variables}
  */
  readonly commandVariables?: string;
}

export function healthmonitorExternalMonitorToTerraform(struct?: HealthmonitorExternalMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_code: cdktf.stringToTerraform(struct!.commandCode),
    command_parameters: cdktf.stringToTerraform(struct!.commandParameters),
    command_path: cdktf.stringToTerraform(struct!.commandPath),
    command_variables: cdktf.stringToTerraform(struct!.commandVariables),
  }
}


export function healthmonitorExternalMonitorToHclTerraform(struct?: HealthmonitorExternalMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_code: {
      value: cdktf.stringToHclTerraform(struct!.commandCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command_parameters: {
      value: cdktf.stringToHclTerraform(struct!.commandParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command_path: {
      value: cdktf.stringToHclTerraform(struct!.commandPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command_variables: {
      value: cdktf.stringToHclTerraform(struct!.commandVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorExternalMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorExternalMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandCode = this._commandCode;
    }
    if (this._commandParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandParameters = this._commandParameters;
    }
    if (this._commandPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandPath = this._commandPath;
    }
    if (this._commandVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandVariables = this._commandVariables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorExternalMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commandCode = undefined;
      this._commandParameters = undefined;
      this._commandPath = undefined;
      this._commandVariables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commandCode = value.commandCode;
      this._commandParameters = value.commandParameters;
      this._commandPath = value.commandPath;
      this._commandVariables = value.commandVariables;
    }
  }

  // command_code - computed: false, optional: false, required: true
  private _commandCode?: string; 
  public get commandCode() {
    return this.getStringAttribute('command_code');
  }
  public set commandCode(value: string) {
    this._commandCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandCodeInput() {
    return this._commandCode;
  }

  // command_parameters - computed: true, optional: true, required: false
  private _commandParameters?: string; 
  public get commandParameters() {
    return this.getStringAttribute('command_parameters');
  }
  public set commandParameters(value: string) {
    this._commandParameters = value;
  }
  public resetCommandParameters() {
    this._commandParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandParametersInput() {
    return this._commandParameters;
  }

  // command_path - computed: true, optional: true, required: false
  private _commandPath?: string; 
  public get commandPath() {
    return this.getStringAttribute('command_path');
  }
  public set commandPath(value: string) {
    this._commandPath = value;
  }
  public resetCommandPath() {
    this._commandPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandPathInput() {
    return this._commandPath;
  }

  // command_variables - computed: true, optional: true, required: false
  private _commandVariables?: string; 
  public get commandVariables() {
    return this.getStringAttribute('command_variables');
  }
  public set commandVariables(value: string) {
    this._commandVariables = value;
  }
  public resetCommandVariables() {
    this._commandVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandVariablesInput() {
    return this._commandVariables;
  }
}

export class HealthmonitorExternalMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorExternalMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorExternalMonitorOutputReference {
    return new HealthmonitorExternalMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorFtpMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorFtpMonitorSslAttributesToTerraform(struct?: HealthmonitorFtpMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorFtpMonitorSslAttributesToHclTerraform(struct?: HealthmonitorFtpMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorFtpMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorFtpMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorFtpMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorFtpMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorFtpMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorFtpMonitorSslAttributesOutputReference {
    return new HealthmonitorFtpMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorFtpMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#filename Healthmonitor#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#mode Healthmonitor#mode}
  */
  readonly mode?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorFtpMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorFtpMonitorToTerraform(struct?: HealthmonitorFtpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    mode: cdktf.stringToTerraform(struct!.mode),
    ssl_attributes: cdktf.listMapper(healthmonitorFtpMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorFtpMonitorToHclTerraform(struct?: HealthmonitorFtpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorFtpMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorFtpMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorFtpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorFtpMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorFtpMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filename = undefined;
      this._mode = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filename = value.filename;
      this._mode = value.mode;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // mode - computed: false, optional: true, required: false
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

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorFtpMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorFtpMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorFtpMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorFtpMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorFtpMonitorOutputReference {
    return new HealthmonitorFtpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorFtpsMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorFtpsMonitorSslAttributesToTerraform(struct?: HealthmonitorFtpsMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorFtpsMonitorSslAttributesToHclTerraform(struct?: HealthmonitorFtpsMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorFtpsMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorFtpsMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorFtpsMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorFtpsMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorFtpsMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorFtpsMonitorSslAttributesOutputReference {
    return new HealthmonitorFtpsMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorFtpsMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#filename Healthmonitor#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#mode Healthmonitor#mode}
  */
  readonly mode?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorFtpsMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorFtpsMonitorToTerraform(struct?: HealthmonitorFtpsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    mode: cdktf.stringToTerraform(struct!.mode),
    ssl_attributes: cdktf.listMapper(healthmonitorFtpsMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorFtpsMonitorToHclTerraform(struct?: HealthmonitorFtpsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorFtpsMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorFtpsMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorFtpsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorFtpsMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorFtpsMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filename = undefined;
      this._mode = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filename = value.filename;
      this._mode = value.mode;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // mode - computed: false, optional: true, required: false
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

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorFtpsMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorFtpsMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorFtpsMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorFtpsMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorFtpsMonitorOutputReference {
    return new HealthmonitorFtpsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorHttp2MonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorHttp2MonitorSslAttributesToTerraform(struct?: HealthmonitorHttp2MonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorHttp2MonitorSslAttributesToHclTerraform(struct?: HealthmonitorHttp2MonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorHttp2MonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorHttp2MonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorHttp2MonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorHttp2MonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorHttp2MonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorHttp2MonitorSslAttributesOutputReference {
    return new HealthmonitorHttp2MonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorHttp2Monitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#auth_type Healthmonitor#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#exact_http_request Healthmonitor#exact_http_request}
  */
  readonly exactHttpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_headers Healthmonitor#http_headers}
  */
  readonly httpHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_method Healthmonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request Healthmonitor#http_request}
  */
  readonly httpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request_body Healthmonitor#http_request_body}
  */
  readonly httpRequestBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request_header_path Healthmonitor#http_request_header_path}
  */
  readonly httpRequestHeaderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_response Healthmonitor#http_response}
  */
  readonly httpResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_response_code Healthmonitor#http_response_code}
  */
  readonly httpResponseCode: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#maintenance_code Healthmonitor#maintenance_code}
  */
  readonly maintenanceCode?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#maintenance_response Healthmonitor#maintenance_response}
  */
  readonly maintenanceResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#response_size Healthmonitor#response_size}
  */
  readonly responseSize?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorHttp2MonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorHttp2MonitorToTerraform(struct?: HealthmonitorHttp2Monitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    exact_http_request: cdktf.stringToTerraform(struct!.exactHttpRequest),
    http_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpHeaders),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    http_request: cdktf.stringToTerraform(struct!.httpRequest),
    http_request_body: cdktf.stringToTerraform(struct!.httpRequestBody),
    http_request_header_path: cdktf.stringToTerraform(struct!.httpRequestHeaderPath),
    http_response: cdktf.stringToTerraform(struct!.httpResponse),
    http_response_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpResponseCode),
    maintenance_code: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.maintenanceCode),
    maintenance_response: cdktf.stringToTerraform(struct!.maintenanceResponse),
    response_size: cdktf.stringToTerraform(struct!.responseSize),
    ssl_attributes: cdktf.listMapper(healthmonitorHttp2MonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorHttp2MonitorToHclTerraform(struct?: HealthmonitorHttp2Monitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_http_request: {
      value: cdktf.stringToHclTerraform(struct!.exactHttpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request: {
      value: cdktf.stringToHclTerraform(struct!.httpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_body: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_header_path: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestHeaderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_response: {
      value: cdktf.stringToHclTerraform(struct!.httpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_response_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpResponseCode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maintenance_code: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.maintenanceCode),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    maintenance_response: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_size: {
      value: cdktf.stringToHclTerraform(struct!.responseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorHttp2MonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorHttp2MonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorHttp2MonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorHttp2Monitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._exactHttpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactHttpRequest = this._exactHttpRequest;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequest = this._httpRequest;
    }
    if (this._httpRequestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestBody = this._httpRequestBody;
    }
    if (this._httpRequestHeaderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestHeaderPath = this._httpRequestHeaderPath;
    }
    if (this._httpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponse = this._httpResponse;
    }
    if (this._httpResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseCode = this._httpResponseCode;
    }
    if (this._maintenanceCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceCode = this._maintenanceCode;
    }
    if (this._maintenanceResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceResponse = this._maintenanceResponse;
    }
    if (this._responseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSize = this._responseSize;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorHttp2Monitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._exactHttpRequest = undefined;
      this._httpHeaders = undefined;
      this._httpMethod = undefined;
      this._httpRequest = undefined;
      this._httpRequestBody = undefined;
      this._httpRequestHeaderPath = undefined;
      this._httpResponse = undefined;
      this._httpResponseCode = undefined;
      this._maintenanceCode = undefined;
      this._maintenanceResponse = undefined;
      this._responseSize = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._exactHttpRequest = value.exactHttpRequest;
      this._httpHeaders = value.httpHeaders;
      this._httpMethod = value.httpMethod;
      this._httpRequest = value.httpRequest;
      this._httpRequestBody = value.httpRequestBody;
      this._httpRequestHeaderPath = value.httpRequestHeaderPath;
      this._httpResponse = value.httpResponse;
      this._httpResponseCode = value.httpResponseCode;
      this._maintenanceCode = value.maintenanceCode;
      this._maintenanceResponse = value.maintenanceResponse;
      this._responseSize = value.responseSize;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // exact_http_request - computed: false, optional: true, required: false
  private _exactHttpRequest?: string; 
  public get exactHttpRequest() {
    return this.getStringAttribute('exact_http_request');
  }
  public set exactHttpRequest(value: string) {
    this._exactHttpRequest = value;
  }
  public resetExactHttpRequest() {
    this._exactHttpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactHttpRequestInput() {
    return this._exactHttpRequest;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: string[]; 
  public get httpHeaders() {
    return this.getListAttribute('http_headers');
  }
  public set httpHeaders(value: string[]) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // http_method - computed: true, optional: true, required: false
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

  // http_request - computed: false, optional: true, required: false
  private _httpRequest?: string; 
  public get httpRequest() {
    return this.getStringAttribute('http_request');
  }
  public set httpRequest(value: string) {
    this._httpRequest = value;
  }
  public resetHttpRequest() {
    this._httpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestInput() {
    return this._httpRequest;
  }

  // http_request_body - computed: true, optional: true, required: false
  private _httpRequestBody?: string; 
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }
  public set httpRequestBody(value: string) {
    this._httpRequestBody = value;
  }
  public resetHttpRequestBody() {
    this._httpRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestBodyInput() {
    return this._httpRequestBody;
  }

  // http_request_header_path - computed: true, optional: true, required: false
  private _httpRequestHeaderPath?: string; 
  public get httpRequestHeaderPath() {
    return this.getStringAttribute('http_request_header_path');
  }
  public set httpRequestHeaderPath(value: string) {
    this._httpRequestHeaderPath = value;
  }
  public resetHttpRequestHeaderPath() {
    this._httpRequestHeaderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeaderPathInput() {
    return this._httpRequestHeaderPath;
  }

  // http_response - computed: true, optional: true, required: false
  private _httpResponse?: string; 
  public get httpResponse() {
    return this.getStringAttribute('http_response');
  }
  public set httpResponse(value: string) {
    this._httpResponse = value;
  }
  public resetHttpResponse() {
    this._httpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseInput() {
    return this._httpResponse;
  }

  // http_response_code - computed: false, optional: false, required: true
  private _httpResponseCode?: string[]; 
  public get httpResponseCode() {
    return this.getListAttribute('http_response_code');
  }
  public set httpResponseCode(value: string[]) {
    this._httpResponseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseCodeInput() {
    return this._httpResponseCode;
  }

  // maintenance_code - computed: false, optional: true, required: false
  private _maintenanceCode?: number[]; 
  public get maintenanceCode() {
    return this.getNumberListAttribute('maintenance_code');
  }
  public set maintenanceCode(value: number[]) {
    this._maintenanceCode = value;
  }
  public resetMaintenanceCode() {
    this._maintenanceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceCodeInput() {
    return this._maintenanceCode;
  }

  // maintenance_response - computed: true, optional: true, required: false
  private _maintenanceResponse?: string; 
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }
  public set maintenanceResponse(value: string) {
    this._maintenanceResponse = value;
  }
  public resetMaintenanceResponse() {
    this._maintenanceResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceResponseInput() {
    return this._maintenanceResponse;
  }

  // response_size - computed: true, optional: true, required: false
  private _responseSize?: string; 
  public get responseSize() {
    return this.getStringAttribute('response_size');
  }
  public set responseSize(value: string) {
    this._responseSize = value;
  }
  public resetResponseSize() {
    this._responseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeInput() {
    return this._responseSize;
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorHttp2MonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorHttp2MonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorHttp2MonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorHttp2Monitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorHttp2MonitorOutputReference {
    return new HealthmonitorHttp2MonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorHttp2SMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorHttp2SMonitorSslAttributesToTerraform(struct?: HealthmonitorHttp2SMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorHttp2SMonitorSslAttributesToHclTerraform(struct?: HealthmonitorHttp2SMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorHttp2SMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorHttp2SMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorHttp2SMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorHttp2SMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorHttp2SMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorHttp2SMonitorSslAttributesOutputReference {
    return new HealthmonitorHttp2SMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorHttp2SMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#auth_type Healthmonitor#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#exact_http_request Healthmonitor#exact_http_request}
  */
  readonly exactHttpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_headers Healthmonitor#http_headers}
  */
  readonly httpHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_method Healthmonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request Healthmonitor#http_request}
  */
  readonly httpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request_body Healthmonitor#http_request_body}
  */
  readonly httpRequestBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request_header_path Healthmonitor#http_request_header_path}
  */
  readonly httpRequestHeaderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_response Healthmonitor#http_response}
  */
  readonly httpResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_response_code Healthmonitor#http_response_code}
  */
  readonly httpResponseCode: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#maintenance_code Healthmonitor#maintenance_code}
  */
  readonly maintenanceCode?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#maintenance_response Healthmonitor#maintenance_response}
  */
  readonly maintenanceResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#response_size Healthmonitor#response_size}
  */
  readonly responseSize?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorHttp2SMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorHttp2SMonitorToTerraform(struct?: HealthmonitorHttp2SMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    exact_http_request: cdktf.stringToTerraform(struct!.exactHttpRequest),
    http_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpHeaders),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    http_request: cdktf.stringToTerraform(struct!.httpRequest),
    http_request_body: cdktf.stringToTerraform(struct!.httpRequestBody),
    http_request_header_path: cdktf.stringToTerraform(struct!.httpRequestHeaderPath),
    http_response: cdktf.stringToTerraform(struct!.httpResponse),
    http_response_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpResponseCode),
    maintenance_code: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.maintenanceCode),
    maintenance_response: cdktf.stringToTerraform(struct!.maintenanceResponse),
    response_size: cdktf.stringToTerraform(struct!.responseSize),
    ssl_attributes: cdktf.listMapper(healthmonitorHttp2SMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorHttp2SMonitorToHclTerraform(struct?: HealthmonitorHttp2SMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_http_request: {
      value: cdktf.stringToHclTerraform(struct!.exactHttpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request: {
      value: cdktf.stringToHclTerraform(struct!.httpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_body: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_header_path: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestHeaderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_response: {
      value: cdktf.stringToHclTerraform(struct!.httpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_response_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpResponseCode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maintenance_code: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.maintenanceCode),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    maintenance_response: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_size: {
      value: cdktf.stringToHclTerraform(struct!.responseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorHttp2SMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorHttp2SMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorHttp2SMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorHttp2SMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._exactHttpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactHttpRequest = this._exactHttpRequest;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequest = this._httpRequest;
    }
    if (this._httpRequestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestBody = this._httpRequestBody;
    }
    if (this._httpRequestHeaderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestHeaderPath = this._httpRequestHeaderPath;
    }
    if (this._httpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponse = this._httpResponse;
    }
    if (this._httpResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseCode = this._httpResponseCode;
    }
    if (this._maintenanceCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceCode = this._maintenanceCode;
    }
    if (this._maintenanceResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceResponse = this._maintenanceResponse;
    }
    if (this._responseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSize = this._responseSize;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorHttp2SMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._exactHttpRequest = undefined;
      this._httpHeaders = undefined;
      this._httpMethod = undefined;
      this._httpRequest = undefined;
      this._httpRequestBody = undefined;
      this._httpRequestHeaderPath = undefined;
      this._httpResponse = undefined;
      this._httpResponseCode = undefined;
      this._maintenanceCode = undefined;
      this._maintenanceResponse = undefined;
      this._responseSize = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._exactHttpRequest = value.exactHttpRequest;
      this._httpHeaders = value.httpHeaders;
      this._httpMethod = value.httpMethod;
      this._httpRequest = value.httpRequest;
      this._httpRequestBody = value.httpRequestBody;
      this._httpRequestHeaderPath = value.httpRequestHeaderPath;
      this._httpResponse = value.httpResponse;
      this._httpResponseCode = value.httpResponseCode;
      this._maintenanceCode = value.maintenanceCode;
      this._maintenanceResponse = value.maintenanceResponse;
      this._responseSize = value.responseSize;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // exact_http_request - computed: false, optional: true, required: false
  private _exactHttpRequest?: string; 
  public get exactHttpRequest() {
    return this.getStringAttribute('exact_http_request');
  }
  public set exactHttpRequest(value: string) {
    this._exactHttpRequest = value;
  }
  public resetExactHttpRequest() {
    this._exactHttpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactHttpRequestInput() {
    return this._exactHttpRequest;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: string[]; 
  public get httpHeaders() {
    return this.getListAttribute('http_headers');
  }
  public set httpHeaders(value: string[]) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // http_method - computed: true, optional: true, required: false
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

  // http_request - computed: false, optional: true, required: false
  private _httpRequest?: string; 
  public get httpRequest() {
    return this.getStringAttribute('http_request');
  }
  public set httpRequest(value: string) {
    this._httpRequest = value;
  }
  public resetHttpRequest() {
    this._httpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestInput() {
    return this._httpRequest;
  }

  // http_request_body - computed: true, optional: true, required: false
  private _httpRequestBody?: string; 
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }
  public set httpRequestBody(value: string) {
    this._httpRequestBody = value;
  }
  public resetHttpRequestBody() {
    this._httpRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestBodyInput() {
    return this._httpRequestBody;
  }

  // http_request_header_path - computed: true, optional: true, required: false
  private _httpRequestHeaderPath?: string; 
  public get httpRequestHeaderPath() {
    return this.getStringAttribute('http_request_header_path');
  }
  public set httpRequestHeaderPath(value: string) {
    this._httpRequestHeaderPath = value;
  }
  public resetHttpRequestHeaderPath() {
    this._httpRequestHeaderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeaderPathInput() {
    return this._httpRequestHeaderPath;
  }

  // http_response - computed: true, optional: true, required: false
  private _httpResponse?: string; 
  public get httpResponse() {
    return this.getStringAttribute('http_response');
  }
  public set httpResponse(value: string) {
    this._httpResponse = value;
  }
  public resetHttpResponse() {
    this._httpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseInput() {
    return this._httpResponse;
  }

  // http_response_code - computed: false, optional: false, required: true
  private _httpResponseCode?: string[]; 
  public get httpResponseCode() {
    return this.getListAttribute('http_response_code');
  }
  public set httpResponseCode(value: string[]) {
    this._httpResponseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseCodeInput() {
    return this._httpResponseCode;
  }

  // maintenance_code - computed: false, optional: true, required: false
  private _maintenanceCode?: number[]; 
  public get maintenanceCode() {
    return this.getNumberListAttribute('maintenance_code');
  }
  public set maintenanceCode(value: number[]) {
    this._maintenanceCode = value;
  }
  public resetMaintenanceCode() {
    this._maintenanceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceCodeInput() {
    return this._maintenanceCode;
  }

  // maintenance_response - computed: true, optional: true, required: false
  private _maintenanceResponse?: string; 
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }
  public set maintenanceResponse(value: string) {
    this._maintenanceResponse = value;
  }
  public resetMaintenanceResponse() {
    this._maintenanceResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceResponseInput() {
    return this._maintenanceResponse;
  }

  // response_size - computed: true, optional: true, required: false
  private _responseSize?: string; 
  public get responseSize() {
    return this.getStringAttribute('response_size');
  }
  public set responseSize(value: string) {
    this._responseSize = value;
  }
  public resetResponseSize() {
    this._responseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeInput() {
    return this._responseSize;
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorHttp2SMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorHttp2SMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorHttp2SMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorHttp2SMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorHttp2SMonitorOutputReference {
    return new HealthmonitorHttp2SMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorHttpMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorHttpMonitorSslAttributesToTerraform(struct?: HealthmonitorHttpMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorHttpMonitorSslAttributesToHclTerraform(struct?: HealthmonitorHttpMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorHttpMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorHttpMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorHttpMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorHttpMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorHttpMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorHttpMonitorSslAttributesOutputReference {
    return new HealthmonitorHttpMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorHttpMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#auth_type Healthmonitor#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#exact_http_request Healthmonitor#exact_http_request}
  */
  readonly exactHttpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_headers Healthmonitor#http_headers}
  */
  readonly httpHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_method Healthmonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request Healthmonitor#http_request}
  */
  readonly httpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request_body Healthmonitor#http_request_body}
  */
  readonly httpRequestBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request_header_path Healthmonitor#http_request_header_path}
  */
  readonly httpRequestHeaderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_response Healthmonitor#http_response}
  */
  readonly httpResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_response_code Healthmonitor#http_response_code}
  */
  readonly httpResponseCode: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#maintenance_code Healthmonitor#maintenance_code}
  */
  readonly maintenanceCode?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#maintenance_response Healthmonitor#maintenance_response}
  */
  readonly maintenanceResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#response_size Healthmonitor#response_size}
  */
  readonly responseSize?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorHttpMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorHttpMonitorToTerraform(struct?: HealthmonitorHttpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    exact_http_request: cdktf.stringToTerraform(struct!.exactHttpRequest),
    http_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpHeaders),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    http_request: cdktf.stringToTerraform(struct!.httpRequest),
    http_request_body: cdktf.stringToTerraform(struct!.httpRequestBody),
    http_request_header_path: cdktf.stringToTerraform(struct!.httpRequestHeaderPath),
    http_response: cdktf.stringToTerraform(struct!.httpResponse),
    http_response_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpResponseCode),
    maintenance_code: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.maintenanceCode),
    maintenance_response: cdktf.stringToTerraform(struct!.maintenanceResponse),
    response_size: cdktf.stringToTerraform(struct!.responseSize),
    ssl_attributes: cdktf.listMapper(healthmonitorHttpMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorHttpMonitorToHclTerraform(struct?: HealthmonitorHttpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_http_request: {
      value: cdktf.stringToHclTerraform(struct!.exactHttpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request: {
      value: cdktf.stringToHclTerraform(struct!.httpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_body: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_header_path: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestHeaderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_response: {
      value: cdktf.stringToHclTerraform(struct!.httpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_response_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpResponseCode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maintenance_code: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.maintenanceCode),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    maintenance_response: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_size: {
      value: cdktf.stringToHclTerraform(struct!.responseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorHttpMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorHttpMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorHttpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorHttpMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._exactHttpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactHttpRequest = this._exactHttpRequest;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequest = this._httpRequest;
    }
    if (this._httpRequestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestBody = this._httpRequestBody;
    }
    if (this._httpRequestHeaderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestHeaderPath = this._httpRequestHeaderPath;
    }
    if (this._httpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponse = this._httpResponse;
    }
    if (this._httpResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseCode = this._httpResponseCode;
    }
    if (this._maintenanceCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceCode = this._maintenanceCode;
    }
    if (this._maintenanceResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceResponse = this._maintenanceResponse;
    }
    if (this._responseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSize = this._responseSize;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorHttpMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._exactHttpRequest = undefined;
      this._httpHeaders = undefined;
      this._httpMethod = undefined;
      this._httpRequest = undefined;
      this._httpRequestBody = undefined;
      this._httpRequestHeaderPath = undefined;
      this._httpResponse = undefined;
      this._httpResponseCode = undefined;
      this._maintenanceCode = undefined;
      this._maintenanceResponse = undefined;
      this._responseSize = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._exactHttpRequest = value.exactHttpRequest;
      this._httpHeaders = value.httpHeaders;
      this._httpMethod = value.httpMethod;
      this._httpRequest = value.httpRequest;
      this._httpRequestBody = value.httpRequestBody;
      this._httpRequestHeaderPath = value.httpRequestHeaderPath;
      this._httpResponse = value.httpResponse;
      this._httpResponseCode = value.httpResponseCode;
      this._maintenanceCode = value.maintenanceCode;
      this._maintenanceResponse = value.maintenanceResponse;
      this._responseSize = value.responseSize;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // exact_http_request - computed: false, optional: true, required: false
  private _exactHttpRequest?: string; 
  public get exactHttpRequest() {
    return this.getStringAttribute('exact_http_request');
  }
  public set exactHttpRequest(value: string) {
    this._exactHttpRequest = value;
  }
  public resetExactHttpRequest() {
    this._exactHttpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactHttpRequestInput() {
    return this._exactHttpRequest;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: string[]; 
  public get httpHeaders() {
    return this.getListAttribute('http_headers');
  }
  public set httpHeaders(value: string[]) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // http_method - computed: true, optional: true, required: false
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

  // http_request - computed: false, optional: true, required: false
  private _httpRequest?: string; 
  public get httpRequest() {
    return this.getStringAttribute('http_request');
  }
  public set httpRequest(value: string) {
    this._httpRequest = value;
  }
  public resetHttpRequest() {
    this._httpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestInput() {
    return this._httpRequest;
  }

  // http_request_body - computed: true, optional: true, required: false
  private _httpRequestBody?: string; 
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }
  public set httpRequestBody(value: string) {
    this._httpRequestBody = value;
  }
  public resetHttpRequestBody() {
    this._httpRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestBodyInput() {
    return this._httpRequestBody;
  }

  // http_request_header_path - computed: true, optional: true, required: false
  private _httpRequestHeaderPath?: string; 
  public get httpRequestHeaderPath() {
    return this.getStringAttribute('http_request_header_path');
  }
  public set httpRequestHeaderPath(value: string) {
    this._httpRequestHeaderPath = value;
  }
  public resetHttpRequestHeaderPath() {
    this._httpRequestHeaderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeaderPathInput() {
    return this._httpRequestHeaderPath;
  }

  // http_response - computed: true, optional: true, required: false
  private _httpResponse?: string; 
  public get httpResponse() {
    return this.getStringAttribute('http_response');
  }
  public set httpResponse(value: string) {
    this._httpResponse = value;
  }
  public resetHttpResponse() {
    this._httpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseInput() {
    return this._httpResponse;
  }

  // http_response_code - computed: false, optional: false, required: true
  private _httpResponseCode?: string[]; 
  public get httpResponseCode() {
    return this.getListAttribute('http_response_code');
  }
  public set httpResponseCode(value: string[]) {
    this._httpResponseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseCodeInput() {
    return this._httpResponseCode;
  }

  // maintenance_code - computed: false, optional: true, required: false
  private _maintenanceCode?: number[]; 
  public get maintenanceCode() {
    return this.getNumberListAttribute('maintenance_code');
  }
  public set maintenanceCode(value: number[]) {
    this._maintenanceCode = value;
  }
  public resetMaintenanceCode() {
    this._maintenanceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceCodeInput() {
    return this._maintenanceCode;
  }

  // maintenance_response - computed: true, optional: true, required: false
  private _maintenanceResponse?: string; 
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }
  public set maintenanceResponse(value: string) {
    this._maintenanceResponse = value;
  }
  public resetMaintenanceResponse() {
    this._maintenanceResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceResponseInput() {
    return this._maintenanceResponse;
  }

  // response_size - computed: true, optional: true, required: false
  private _responseSize?: string; 
  public get responseSize() {
    return this.getStringAttribute('response_size');
  }
  public set responseSize(value: string) {
    this._responseSize = value;
  }
  public resetResponseSize() {
    this._responseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeInput() {
    return this._responseSize;
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorHttpMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorHttpMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorHttpMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorHttpMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorHttpMonitorOutputReference {
    return new HealthmonitorHttpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorHttpsMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorHttpsMonitorSslAttributesToTerraform(struct?: HealthmonitorHttpsMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorHttpsMonitorSslAttributesToHclTerraform(struct?: HealthmonitorHttpsMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorHttpsMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorHttpsMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorHttpsMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorHttpsMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorHttpsMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorHttpsMonitorSslAttributesOutputReference {
    return new HealthmonitorHttpsMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorHttpsMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#auth_type Healthmonitor#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#exact_http_request Healthmonitor#exact_http_request}
  */
  readonly exactHttpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_headers Healthmonitor#http_headers}
  */
  readonly httpHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_method Healthmonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request Healthmonitor#http_request}
  */
  readonly httpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request_body Healthmonitor#http_request_body}
  */
  readonly httpRequestBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_request_header_path Healthmonitor#http_request_header_path}
  */
  readonly httpRequestHeaderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_response Healthmonitor#http_response}
  */
  readonly httpResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#http_response_code Healthmonitor#http_response_code}
  */
  readonly httpResponseCode: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#maintenance_code Healthmonitor#maintenance_code}
  */
  readonly maintenanceCode?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#maintenance_response Healthmonitor#maintenance_response}
  */
  readonly maintenanceResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#response_size Healthmonitor#response_size}
  */
  readonly responseSize?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorHttpsMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorHttpsMonitorToTerraform(struct?: HealthmonitorHttpsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    exact_http_request: cdktf.stringToTerraform(struct!.exactHttpRequest),
    http_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpHeaders),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    http_request: cdktf.stringToTerraform(struct!.httpRequest),
    http_request_body: cdktf.stringToTerraform(struct!.httpRequestBody),
    http_request_header_path: cdktf.stringToTerraform(struct!.httpRequestHeaderPath),
    http_response: cdktf.stringToTerraform(struct!.httpResponse),
    http_response_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpResponseCode),
    maintenance_code: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.maintenanceCode),
    maintenance_response: cdktf.stringToTerraform(struct!.maintenanceResponse),
    response_size: cdktf.stringToTerraform(struct!.responseSize),
    ssl_attributes: cdktf.listMapper(healthmonitorHttpsMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorHttpsMonitorToHclTerraform(struct?: HealthmonitorHttpsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_http_request: {
      value: cdktf.stringToHclTerraform(struct!.exactHttpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request: {
      value: cdktf.stringToHclTerraform(struct!.httpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_body: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_header_path: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestHeaderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_response: {
      value: cdktf.stringToHclTerraform(struct!.httpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_response_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpResponseCode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maintenance_code: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.maintenanceCode),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    maintenance_response: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_size: {
      value: cdktf.stringToHclTerraform(struct!.responseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorHttpsMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorHttpsMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorHttpsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorHttpsMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._exactHttpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactHttpRequest = this._exactHttpRequest;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequest = this._httpRequest;
    }
    if (this._httpRequestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestBody = this._httpRequestBody;
    }
    if (this._httpRequestHeaderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestHeaderPath = this._httpRequestHeaderPath;
    }
    if (this._httpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponse = this._httpResponse;
    }
    if (this._httpResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseCode = this._httpResponseCode;
    }
    if (this._maintenanceCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceCode = this._maintenanceCode;
    }
    if (this._maintenanceResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceResponse = this._maintenanceResponse;
    }
    if (this._responseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSize = this._responseSize;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorHttpsMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._exactHttpRequest = undefined;
      this._httpHeaders = undefined;
      this._httpMethod = undefined;
      this._httpRequest = undefined;
      this._httpRequestBody = undefined;
      this._httpRequestHeaderPath = undefined;
      this._httpResponse = undefined;
      this._httpResponseCode = undefined;
      this._maintenanceCode = undefined;
      this._maintenanceResponse = undefined;
      this._responseSize = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._exactHttpRequest = value.exactHttpRequest;
      this._httpHeaders = value.httpHeaders;
      this._httpMethod = value.httpMethod;
      this._httpRequest = value.httpRequest;
      this._httpRequestBody = value.httpRequestBody;
      this._httpRequestHeaderPath = value.httpRequestHeaderPath;
      this._httpResponse = value.httpResponse;
      this._httpResponseCode = value.httpResponseCode;
      this._maintenanceCode = value.maintenanceCode;
      this._maintenanceResponse = value.maintenanceResponse;
      this._responseSize = value.responseSize;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // exact_http_request - computed: false, optional: true, required: false
  private _exactHttpRequest?: string; 
  public get exactHttpRequest() {
    return this.getStringAttribute('exact_http_request');
  }
  public set exactHttpRequest(value: string) {
    this._exactHttpRequest = value;
  }
  public resetExactHttpRequest() {
    this._exactHttpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactHttpRequestInput() {
    return this._exactHttpRequest;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: string[]; 
  public get httpHeaders() {
    return this.getListAttribute('http_headers');
  }
  public set httpHeaders(value: string[]) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // http_method - computed: true, optional: true, required: false
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

  // http_request - computed: false, optional: true, required: false
  private _httpRequest?: string; 
  public get httpRequest() {
    return this.getStringAttribute('http_request');
  }
  public set httpRequest(value: string) {
    this._httpRequest = value;
  }
  public resetHttpRequest() {
    this._httpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestInput() {
    return this._httpRequest;
  }

  // http_request_body - computed: true, optional: true, required: false
  private _httpRequestBody?: string; 
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }
  public set httpRequestBody(value: string) {
    this._httpRequestBody = value;
  }
  public resetHttpRequestBody() {
    this._httpRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestBodyInput() {
    return this._httpRequestBody;
  }

  // http_request_header_path - computed: true, optional: true, required: false
  private _httpRequestHeaderPath?: string; 
  public get httpRequestHeaderPath() {
    return this.getStringAttribute('http_request_header_path');
  }
  public set httpRequestHeaderPath(value: string) {
    this._httpRequestHeaderPath = value;
  }
  public resetHttpRequestHeaderPath() {
    this._httpRequestHeaderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeaderPathInput() {
    return this._httpRequestHeaderPath;
  }

  // http_response - computed: true, optional: true, required: false
  private _httpResponse?: string; 
  public get httpResponse() {
    return this.getStringAttribute('http_response');
  }
  public set httpResponse(value: string) {
    this._httpResponse = value;
  }
  public resetHttpResponse() {
    this._httpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseInput() {
    return this._httpResponse;
  }

  // http_response_code - computed: false, optional: false, required: true
  private _httpResponseCode?: string[]; 
  public get httpResponseCode() {
    return this.getListAttribute('http_response_code');
  }
  public set httpResponseCode(value: string[]) {
    this._httpResponseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseCodeInput() {
    return this._httpResponseCode;
  }

  // maintenance_code - computed: false, optional: true, required: false
  private _maintenanceCode?: number[]; 
  public get maintenanceCode() {
    return this.getNumberListAttribute('maintenance_code');
  }
  public set maintenanceCode(value: number[]) {
    this._maintenanceCode = value;
  }
  public resetMaintenanceCode() {
    this._maintenanceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceCodeInput() {
    return this._maintenanceCode;
  }

  // maintenance_response - computed: true, optional: true, required: false
  private _maintenanceResponse?: string; 
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }
  public set maintenanceResponse(value: string) {
    this._maintenanceResponse = value;
  }
  public resetMaintenanceResponse() {
    this._maintenanceResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceResponseInput() {
    return this._maintenanceResponse;
  }

  // response_size - computed: true, optional: true, required: false
  private _responseSize?: string; 
  public get responseSize() {
    return this.getStringAttribute('response_size');
  }
  public set responseSize(value: string) {
    this._responseSize = value;
  }
  public resetResponseSize() {
    this._responseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeInput() {
    return this._responseSize;
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorHttpsMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorHttpsMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorHttpsMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorHttpsMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorHttpsMonitorOutputReference {
    return new HealthmonitorHttpsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorImapMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorImapMonitorSslAttributesToTerraform(struct?: HealthmonitorImapMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorImapMonitorSslAttributesToHclTerraform(struct?: HealthmonitorImapMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorImapMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorImapMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorImapMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorImapMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorImapMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorImapMonitorSslAttributesOutputReference {
    return new HealthmonitorImapMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorImapMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#folder Healthmonitor#folder}
  */
  readonly folder?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorImapMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorImapMonitorToTerraform(struct?: HealthmonitorImapMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder: cdktf.stringToTerraform(struct!.folder),
    ssl_attributes: cdktf.listMapper(healthmonitorImapMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorImapMonitorToHclTerraform(struct?: HealthmonitorImapMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorImapMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorImapMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorImapMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorImapMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorImapMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folder = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._folder = value.folder;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorImapMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorImapMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorImapMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorImapMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorImapMonitorOutputReference {
    return new HealthmonitorImapMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorImapsMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorImapsMonitorSslAttributesToTerraform(struct?: HealthmonitorImapsMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorImapsMonitorSslAttributesToHclTerraform(struct?: HealthmonitorImapsMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorImapsMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorImapsMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorImapsMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorImapsMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorImapsMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorImapsMonitorSslAttributesOutputReference {
    return new HealthmonitorImapsMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorImapsMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#folder Healthmonitor#folder}
  */
  readonly folder?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorImapsMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorImapsMonitorToTerraform(struct?: HealthmonitorImapsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder: cdktf.stringToTerraform(struct!.folder),
    ssl_attributes: cdktf.listMapper(healthmonitorImapsMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorImapsMonitorToHclTerraform(struct?: HealthmonitorImapsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorImapsMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorImapsMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorImapsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorImapsMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorImapsMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folder = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._folder = value.folder;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorImapsMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorImapsMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorImapsMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorImapsMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorImapsMonitorOutputReference {
    return new HealthmonitorImapsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorLdapMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorLdapMonitorSslAttributesToTerraform(struct?: HealthmonitorLdapMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorLdapMonitorSslAttributesToHclTerraform(struct?: HealthmonitorLdapMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorLdapMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorLdapMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorLdapMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorLdapMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorLdapMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorLdapMonitorSslAttributesOutputReference {
    return new HealthmonitorLdapMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorLdapMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#attributes Healthmonitor#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#base_dn Healthmonitor#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#filter Healthmonitor#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#scope Healthmonitor#scope}
  */
  readonly scope?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorLdapMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorLdapMonitorToTerraform(struct?: HealthmonitorLdapMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.stringToTerraform(struct!.attributes),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    filter: cdktf.stringToTerraform(struct!.filter),
    scope: cdktf.stringToTerraform(struct!.scope),
    ssl_attributes: cdktf.listMapper(healthmonitorLdapMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorLdapMonitorToHclTerraform(struct?: HealthmonitorLdapMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.stringToHclTerraform(struct!.attributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorLdapMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorLdapMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorLdapMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorLdapMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorLdapMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._baseDn = undefined;
      this._filter = undefined;
      this._scope = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._baseDn = value.baseDn;
      this._filter = value.filter;
      this._scope = value.scope;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorLdapMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorLdapMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorLdapMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorLdapMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorLdapMonitorOutputReference {
    return new HealthmonitorLdapMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorLdapsMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorLdapsMonitorSslAttributesToTerraform(struct?: HealthmonitorLdapsMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorLdapsMonitorSslAttributesToHclTerraform(struct?: HealthmonitorLdapsMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorLdapsMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorLdapsMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorLdapsMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorLdapsMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorLdapsMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorLdapsMonitorSslAttributesOutputReference {
    return new HealthmonitorLdapsMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorLdapsMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#attributes Healthmonitor#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#base_dn Healthmonitor#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#filter Healthmonitor#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#scope Healthmonitor#scope}
  */
  readonly scope?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorLdapsMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorLdapsMonitorToTerraform(struct?: HealthmonitorLdapsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.stringToTerraform(struct!.attributes),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    filter: cdktf.stringToTerraform(struct!.filter),
    scope: cdktf.stringToTerraform(struct!.scope),
    ssl_attributes: cdktf.listMapper(healthmonitorLdapsMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorLdapsMonitorToHclTerraform(struct?: HealthmonitorLdapsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.stringToHclTerraform(struct!.attributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorLdapsMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorLdapsMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorLdapsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorLdapsMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorLdapsMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._baseDn = undefined;
      this._filter = undefined;
      this._scope = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._baseDn = value.baseDn;
      this._filter = value.filter;
      this._scope = value.scope;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorLdapsMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorLdapsMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorLdapsMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorLdapsMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorLdapsMonitorOutputReference {
    return new HealthmonitorLdapsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#key Healthmonitor#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#values Healthmonitor#values}
  */
  readonly values?: string[];
}

export function healthmonitorMarkersToTerraform(struct?: HealthmonitorMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function healthmonitorMarkersToHclTerraform(struct?: HealthmonitorMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class HealthmonitorMarkersList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorMarkers[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorMarkersOutputReference {
    return new HealthmonitorMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorMonitorIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#addr Healthmonitor#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#type Healthmonitor#type}
  */
  readonly type: string;
}

export function healthmonitorMonitorIpToTerraform(struct?: HealthmonitorMonitorIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function healthmonitorMonitorIpToHclTerraform(struct?: HealthmonitorMonitorIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorMonitorIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorMonitorIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorMonitorIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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
}

export class HealthmonitorMonitorIpList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorMonitorIp[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorMonitorIpOutputReference {
    return new HealthmonitorMonitorIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorPop3MonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorPop3MonitorSslAttributesToTerraform(struct?: HealthmonitorPop3MonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorPop3MonitorSslAttributesToHclTerraform(struct?: HealthmonitorPop3MonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorPop3MonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorPop3MonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorPop3MonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorPop3MonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorPop3MonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorPop3MonitorSslAttributesOutputReference {
    return new HealthmonitorPop3MonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorPop3Monitor {
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorPop3MonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorPop3MonitorToTerraform(struct?: HealthmonitorPop3Monitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_attributes: cdktf.listMapper(healthmonitorPop3MonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorPop3MonitorToHclTerraform(struct?: HealthmonitorPop3Monitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorPop3MonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorPop3MonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorPop3MonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorPop3Monitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorPop3Monitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorPop3MonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorPop3MonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorPop3MonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorPop3Monitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorPop3MonitorOutputReference {
    return new HealthmonitorPop3MonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorPop3SMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorPop3SMonitorSslAttributesToTerraform(struct?: HealthmonitorPop3SMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorPop3SMonitorSslAttributesToHclTerraform(struct?: HealthmonitorPop3SMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorPop3SMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorPop3SMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorPop3SMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorPop3SMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorPop3SMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorPop3SMonitorSslAttributesOutputReference {
    return new HealthmonitorPop3SMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorPop3SMonitor {
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorPop3SMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorPop3SMonitorToTerraform(struct?: HealthmonitorPop3SMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_attributes: cdktf.listMapper(healthmonitorPop3SMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorPop3SMonitorToHclTerraform(struct?: HealthmonitorPop3SMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorPop3SMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorPop3SMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorPop3SMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorPop3SMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorPop3SMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorPop3SMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorPop3SMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorPop3SMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorPop3SMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorPop3SMonitorOutputReference {
    return new HealthmonitorPop3SMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorRadiusMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#password Healthmonitor#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#shared_secret Healthmonitor#shared_secret}
  */
  readonly sharedSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#username Healthmonitor#username}
  */
  readonly username: string;
}

export function healthmonitorRadiusMonitorToTerraform(struct?: HealthmonitorRadiusMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    shared_secret: cdktf.stringToTerraform(struct!.sharedSecret),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function healthmonitorRadiusMonitorToHclTerraform(struct?: HealthmonitorRadiusMonitor | cdktf.IResolvable): any {
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
    shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorRadiusMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorRadiusMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecret = this._sharedSecret;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorRadiusMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._sharedSecret = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._sharedSecret = value.sharedSecret;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // shared_secret - computed: false, optional: false, required: true
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class HealthmonitorRadiusMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorRadiusMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorRadiusMonitorOutputReference {
    return new HealthmonitorRadiusMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorSctpMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#sctp_request Healthmonitor#sctp_request}
  */
  readonly sctpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#sctp_response Healthmonitor#sctp_response}
  */
  readonly sctpResponse?: string;
}

export function healthmonitorSctpMonitorToTerraform(struct?: HealthmonitorSctpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sctp_request: cdktf.stringToTerraform(struct!.sctpRequest),
    sctp_response: cdktf.stringToTerraform(struct!.sctpResponse),
  }
}


export function healthmonitorSctpMonitorToHclTerraform(struct?: HealthmonitorSctpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sctp_request: {
      value: cdktf.stringToHclTerraform(struct!.sctpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_response: {
      value: cdktf.stringToHclTerraform(struct!.sctpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorSctpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorSctpMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sctpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpRequest = this._sctpRequest;
    }
    if (this._sctpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpResponse = this._sctpResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorSctpMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sctpRequest = undefined;
      this._sctpResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sctpRequest = value.sctpRequest;
      this._sctpResponse = value.sctpResponse;
    }
  }

  // sctp_request - computed: true, optional: true, required: false
  private _sctpRequest?: string; 
  public get sctpRequest() {
    return this.getStringAttribute('sctp_request');
  }
  public set sctpRequest(value: string) {
    this._sctpRequest = value;
  }
  public resetSctpRequest() {
    this._sctpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpRequestInput() {
    return this._sctpRequest;
  }

  // sctp_response - computed: true, optional: true, required: false
  private _sctpResponse?: string; 
  public get sctpResponse() {
    return this.getStringAttribute('sctp_response');
  }
  public set sctpResponse(value: string) {
    this._sctpResponse = value;
  }
  public resetSctpResponse() {
    this._sctpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpResponseInput() {
    return this._sctpResponse;
  }
}

export class HealthmonitorSctpMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorSctpMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorSctpMonitorOutputReference {
    return new HealthmonitorSctpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorSipMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#sip_monitor_transport Healthmonitor#sip_monitor_transport}
  */
  readonly sipMonitorTransport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#sip_request_code Healthmonitor#sip_request_code}
  */
  readonly sipRequestCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#sip_response Healthmonitor#sip_response}
  */
  readonly sipResponse?: string;
}

export function healthmonitorSipMonitorToTerraform(struct?: HealthmonitorSipMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sip_monitor_transport: cdktf.stringToTerraform(struct!.sipMonitorTransport),
    sip_request_code: cdktf.stringToTerraform(struct!.sipRequestCode),
    sip_response: cdktf.stringToTerraform(struct!.sipResponse),
  }
}


export function healthmonitorSipMonitorToHclTerraform(struct?: HealthmonitorSipMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sip_monitor_transport: {
      value: cdktf.stringToHclTerraform(struct!.sipMonitorTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_request_code: {
      value: cdktf.stringToHclTerraform(struct!.sipRequestCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_response: {
      value: cdktf.stringToHclTerraform(struct!.sipResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorSipMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorSipMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sipMonitorTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipMonitorTransport = this._sipMonitorTransport;
    }
    if (this._sipRequestCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipRequestCode = this._sipRequestCode;
    }
    if (this._sipResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipResponse = this._sipResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorSipMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sipMonitorTransport = undefined;
      this._sipRequestCode = undefined;
      this._sipResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sipMonitorTransport = value.sipMonitorTransport;
      this._sipRequestCode = value.sipRequestCode;
      this._sipResponse = value.sipResponse;
    }
  }

  // sip_monitor_transport - computed: false, optional: true, required: false
  private _sipMonitorTransport?: string; 
  public get sipMonitorTransport() {
    return this.getStringAttribute('sip_monitor_transport');
  }
  public set sipMonitorTransport(value: string) {
    this._sipMonitorTransport = value;
  }
  public resetSipMonitorTransport() {
    this._sipMonitorTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipMonitorTransportInput() {
    return this._sipMonitorTransport;
  }

  // sip_request_code - computed: false, optional: true, required: false
  private _sipRequestCode?: string; 
  public get sipRequestCode() {
    return this.getStringAttribute('sip_request_code');
  }
  public set sipRequestCode(value: string) {
    this._sipRequestCode = value;
  }
  public resetSipRequestCode() {
    this._sipRequestCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipRequestCodeInput() {
    return this._sipRequestCode;
  }

  // sip_response - computed: false, optional: true, required: false
  private _sipResponse?: string; 
  public get sipResponse() {
    return this.getStringAttribute('sip_response');
  }
  public set sipResponse(value: string) {
    this._sipResponse = value;
  }
  public resetSipResponse() {
    this._sipResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipResponseInput() {
    return this._sipResponse;
  }
}

export class HealthmonitorSipMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorSipMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorSipMonitorOutputReference {
    return new HealthmonitorSipMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorSmtpMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorSmtpMonitorSslAttributesToTerraform(struct?: HealthmonitorSmtpMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorSmtpMonitorSslAttributesToHclTerraform(struct?: HealthmonitorSmtpMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorSmtpMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorSmtpMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorSmtpMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorSmtpMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorSmtpMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorSmtpMonitorSslAttributesOutputReference {
    return new HealthmonitorSmtpMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorSmtpMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#domainname Healthmonitor#domainname}
  */
  readonly domainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#mail_data Healthmonitor#mail_data}
  */
  readonly mailData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#recipients_ids Healthmonitor#recipients_ids}
  */
  readonly recipientsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#sender_id Healthmonitor#sender_id}
  */
  readonly senderId?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorSmtpMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorSmtpMonitorToTerraform(struct?: HealthmonitorSmtpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domainname: cdktf.stringToTerraform(struct!.domainname),
    mail_data: cdktf.stringToTerraform(struct!.mailData),
    recipients_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipientsIds),
    sender_id: cdktf.stringToTerraform(struct!.senderId),
    ssl_attributes: cdktf.listMapper(healthmonitorSmtpMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorSmtpMonitorToHclTerraform(struct?: HealthmonitorSmtpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domainname: {
      value: cdktf.stringToHclTerraform(struct!.domainname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_data: {
      value: cdktf.stringToHclTerraform(struct!.mailData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipientsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sender_id: {
      value: cdktf.stringToHclTerraform(struct!.senderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorSmtpMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorSmtpMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorSmtpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorSmtpMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainname = this._domainname;
    }
    if (this._mailData !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailData = this._mailData;
    }
    if (this._recipientsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientsIds = this._recipientsIds;
    }
    if (this._senderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderId = this._senderId;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorSmtpMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainname = undefined;
      this._mailData = undefined;
      this._recipientsIds = undefined;
      this._senderId = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainname = value.domainname;
      this._mailData = value.mailData;
      this._recipientsIds = value.recipientsIds;
      this._senderId = value.senderId;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // domainname - computed: true, optional: true, required: false
  private _domainname?: string; 
  public get domainname() {
    return this.getStringAttribute('domainname');
  }
  public set domainname(value: string) {
    this._domainname = value;
  }
  public resetDomainname() {
    this._domainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainnameInput() {
    return this._domainname;
  }

  // mail_data - computed: true, optional: true, required: false
  private _mailData?: string; 
  public get mailData() {
    return this.getStringAttribute('mail_data');
  }
  public set mailData(value: string) {
    this._mailData = value;
  }
  public resetMailData() {
    this._mailData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailDataInput() {
    return this._mailData;
  }

  // recipients_ids - computed: false, optional: true, required: false
  private _recipientsIds?: string[]; 
  public get recipientsIds() {
    return this.getListAttribute('recipients_ids');
  }
  public set recipientsIds(value: string[]) {
    this._recipientsIds = value;
  }
  public resetRecipientsIds() {
    this._recipientsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsIdsInput() {
    return this._recipientsIds;
  }

  // sender_id - computed: true, optional: true, required: false
  private _senderId?: string; 
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }
  public set senderId(value: string) {
    this._senderId = value;
  }
  public resetSenderId() {
    this._senderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderIdInput() {
    return this._senderId;
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorSmtpMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorSmtpMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorSmtpMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorSmtpMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorSmtpMonitorOutputReference {
    return new HealthmonitorSmtpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorSmtpsMonitorSslAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#pki_profile_ref Healthmonitor#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#server_name Healthmonitor#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_key_and_certificate_ref Healthmonitor#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_profile_ref Healthmonitor#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#use_pool_sni_server_name Healthmonitor#use_pool_sni_server_name}
  */
  readonly usePoolSniServerName?: string;
}

export function healthmonitorSmtpsMonitorSslAttributesToTerraform(struct?: HealthmonitorSmtpsMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    use_pool_sni_server_name: cdktf.stringToTerraform(struct!.usePoolSniServerName),
  }
}


export function healthmonitorSmtpsMonitorSslAttributesToHclTerraform(struct?: HealthmonitorSmtpsMonitorSslAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pool_sni_server_name: {
      value: cdktf.stringToHclTerraform(struct!.usePoolSniServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorSmtpsMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorSmtpsMonitorSslAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._usePoolSniServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePoolSniServerName = this._usePoolSniServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorSmtpsMonitorSslAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._serverName = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._sslProfileRef = undefined;
      this._usePoolSniServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._serverName = value.serverName;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._sslProfileRef = value.sslProfileRef;
      this._usePoolSniServerName = value.usePoolSniServerName;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // use_pool_sni_server_name - computed: true, optional: true, required: false
  private _usePoolSniServerName?: string; 
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
  public set usePoolSniServerName(value: string) {
    this._usePoolSniServerName = value;
  }
  public resetUsePoolSniServerName() {
    this._usePoolSniServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePoolSniServerNameInput() {
    return this._usePoolSniServerName;
  }
}

export class HealthmonitorSmtpsMonitorSslAttributesList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorSmtpsMonitorSslAttributes[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorSmtpsMonitorSslAttributesOutputReference {
    return new HealthmonitorSmtpsMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorSmtpsMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#domainname Healthmonitor#domainname}
  */
  readonly domainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#mail_data Healthmonitor#mail_data}
  */
  readonly mailData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#recipients_ids Healthmonitor#recipients_ids}
  */
  readonly recipientsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#sender_id Healthmonitor#sender_id}
  */
  readonly senderId?: string;
  /**
  * ssl_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#ssl_attributes Healthmonitor#ssl_attributes}
  */
  readonly sslAttributes?: HealthmonitorSmtpsMonitorSslAttributes[] | cdktf.IResolvable;
}

export function healthmonitorSmtpsMonitorToTerraform(struct?: HealthmonitorSmtpsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domainname: cdktf.stringToTerraform(struct!.domainname),
    mail_data: cdktf.stringToTerraform(struct!.mailData),
    recipients_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipientsIds),
    sender_id: cdktf.stringToTerraform(struct!.senderId),
    ssl_attributes: cdktf.listMapper(healthmonitorSmtpsMonitorSslAttributesToTerraform, true)(struct!.sslAttributes),
  }
}


export function healthmonitorSmtpsMonitorToHclTerraform(struct?: HealthmonitorSmtpsMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domainname: {
      value: cdktf.stringToHclTerraform(struct!.domainname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_data: {
      value: cdktf.stringToHclTerraform(struct!.mailData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipientsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sender_id: {
      value: cdktf.stringToHclTerraform(struct!.senderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_attributes: {
      value: cdktf.listMapperHcl(healthmonitorSmtpsMonitorSslAttributesToHclTerraform, true)(struct!.sslAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "HealthmonitorSmtpsMonitorSslAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorSmtpsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorSmtpsMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainname = this._domainname;
    }
    if (this._mailData !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailData = this._mailData;
    }
    if (this._recipientsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientsIds = this._recipientsIds;
    }
    if (this._senderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderId = this._senderId;
    }
    if (this._sslAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAttributes = this._sslAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorSmtpsMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainname = undefined;
      this._mailData = undefined;
      this._recipientsIds = undefined;
      this._senderId = undefined;
      this._sslAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainname = value.domainname;
      this._mailData = value.mailData;
      this._recipientsIds = value.recipientsIds;
      this._senderId = value.senderId;
      this._sslAttributes.internalValue = value.sslAttributes;
    }
  }

  // domainname - computed: true, optional: true, required: false
  private _domainname?: string; 
  public get domainname() {
    return this.getStringAttribute('domainname');
  }
  public set domainname(value: string) {
    this._domainname = value;
  }
  public resetDomainname() {
    this._domainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainnameInput() {
    return this._domainname;
  }

  // mail_data - computed: true, optional: true, required: false
  private _mailData?: string; 
  public get mailData() {
    return this.getStringAttribute('mail_data');
  }
  public set mailData(value: string) {
    this._mailData = value;
  }
  public resetMailData() {
    this._mailData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailDataInput() {
    return this._mailData;
  }

  // recipients_ids - computed: false, optional: true, required: false
  private _recipientsIds?: string[]; 
  public get recipientsIds() {
    return this.getListAttribute('recipients_ids');
  }
  public set recipientsIds(value: string[]) {
    this._recipientsIds = value;
  }
  public resetRecipientsIds() {
    this._recipientsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsIdsInput() {
    return this._recipientsIds;
  }

  // sender_id - computed: true, optional: true, required: false
  private _senderId?: string; 
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }
  public set senderId(value: string) {
    this._senderId = value;
  }
  public resetSenderId() {
    this._senderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderIdInput() {
    return this._senderId;
  }

  // ssl_attributes - computed: false, optional: true, required: false
  private _sslAttributes = new HealthmonitorSmtpsMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
  public putSslAttributes(value: HealthmonitorSmtpsMonitorSslAttributes[] | cdktf.IResolvable) {
    this._sslAttributes.internalValue = value;
  }
  public resetSslAttributes() {
    this._sslAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAttributesInput() {
    return this._sslAttributes.internalValue;
  }
}

export class HealthmonitorSmtpsMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorSmtpsMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorSmtpsMonitorOutputReference {
    return new HealthmonitorSmtpsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorTcpMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#maintenance_response Healthmonitor#maintenance_response}
  */
  readonly maintenanceResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#tcp_half_open Healthmonitor#tcp_half_open}
  */
  readonly tcpHalfOpen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#tcp_request Healthmonitor#tcp_request}
  */
  readonly tcpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#tcp_response Healthmonitor#tcp_response}
  */
  readonly tcpResponse?: string;
}

export function healthmonitorTcpMonitorToTerraform(struct?: HealthmonitorTcpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_response: cdktf.stringToTerraform(struct!.maintenanceResponse),
    tcp_half_open: cdktf.stringToTerraform(struct!.tcpHalfOpen),
    tcp_request: cdktf.stringToTerraform(struct!.tcpRequest),
    tcp_response: cdktf.stringToTerraform(struct!.tcpResponse),
  }
}


export function healthmonitorTcpMonitorToHclTerraform(struct?: HealthmonitorTcpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_response: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_half_open: {
      value: cdktf.stringToHclTerraform(struct!.tcpHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_request: {
      value: cdktf.stringToHclTerraform(struct!.tcpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_response: {
      value: cdktf.stringToHclTerraform(struct!.tcpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorTcpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorTcpMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceResponse = this._maintenanceResponse;
    }
    if (this._tcpHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHalfOpen = this._tcpHalfOpen;
    }
    if (this._tcpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRequest = this._tcpRequest;
    }
    if (this._tcpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpResponse = this._tcpResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorTcpMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maintenanceResponse = undefined;
      this._tcpHalfOpen = undefined;
      this._tcpRequest = undefined;
      this._tcpResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maintenanceResponse = value.maintenanceResponse;
      this._tcpHalfOpen = value.tcpHalfOpen;
      this._tcpRequest = value.tcpRequest;
      this._tcpResponse = value.tcpResponse;
    }
  }

  // maintenance_response - computed: true, optional: true, required: false
  private _maintenanceResponse?: string; 
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }
  public set maintenanceResponse(value: string) {
    this._maintenanceResponse = value;
  }
  public resetMaintenanceResponse() {
    this._maintenanceResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceResponseInput() {
    return this._maintenanceResponse;
  }

  // tcp_half_open - computed: false, optional: true, required: false
  private _tcpHalfOpen?: string; 
  public get tcpHalfOpen() {
    return this.getStringAttribute('tcp_half_open');
  }
  public set tcpHalfOpen(value: string) {
    this._tcpHalfOpen = value;
  }
  public resetTcpHalfOpen() {
    this._tcpHalfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfOpenInput() {
    return this._tcpHalfOpen;
  }

  // tcp_request - computed: true, optional: true, required: false
  private _tcpRequest?: string; 
  public get tcpRequest() {
    return this.getStringAttribute('tcp_request');
  }
  public set tcpRequest(value: string) {
    this._tcpRequest = value;
  }
  public resetTcpRequest() {
    this._tcpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRequestInput() {
    return this._tcpRequest;
  }

  // tcp_response - computed: true, optional: true, required: false
  private _tcpResponse?: string; 
  public get tcpResponse() {
    return this.getStringAttribute('tcp_response');
  }
  public set tcpResponse(value: string) {
    this._tcpResponse = value;
  }
  public resetTcpResponse() {
    this._tcpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResponseInput() {
    return this._tcpResponse;
  }
}

export class HealthmonitorTcpMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorTcpMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorTcpMonitorOutputReference {
    return new HealthmonitorTcpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthmonitorUdpMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#maintenance_response Healthmonitor#maintenance_response}
  */
  readonly maintenanceResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#udp_request Healthmonitor#udp_request}
  */
  readonly udpRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#udp_response Healthmonitor#udp_response}
  */
  readonly udpResponse?: string;
}

export function healthmonitorUdpMonitorToTerraform(struct?: HealthmonitorUdpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_response: cdktf.stringToTerraform(struct!.maintenanceResponse),
    udp_request: cdktf.stringToTerraform(struct!.udpRequest),
    udp_response: cdktf.stringToTerraform(struct!.udpResponse),
  }
}


export function healthmonitorUdpMonitorToHclTerraform(struct?: HealthmonitorUdpMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_response: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_request: {
      value: cdktf.stringToHclTerraform(struct!.udpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_response: {
      value: cdktf.stringToHclTerraform(struct!.udpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthmonitorUdpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthmonitorUdpMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceResponse = this._maintenanceResponse;
    }
    if (this._udpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRequest = this._udpRequest;
    }
    if (this._udpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpResponse = this._udpResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthmonitorUdpMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maintenanceResponse = undefined;
      this._udpRequest = undefined;
      this._udpResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maintenanceResponse = value.maintenanceResponse;
      this._udpRequest = value.udpRequest;
      this._udpResponse = value.udpResponse;
    }
  }

  // maintenance_response - computed: true, optional: true, required: false
  private _maintenanceResponse?: string; 
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }
  public set maintenanceResponse(value: string) {
    this._maintenanceResponse = value;
  }
  public resetMaintenanceResponse() {
    this._maintenanceResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceResponseInput() {
    return this._maintenanceResponse;
  }

  // udp_request - computed: true, optional: true, required: false
  private _udpRequest?: string; 
  public get udpRequest() {
    return this.getStringAttribute('udp_request');
  }
  public set udpRequest(value: string) {
    this._udpRequest = value;
  }
  public resetUdpRequest() {
    this._udpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRequestInput() {
    return this._udpRequest;
  }

  // udp_response - computed: true, optional: true, required: false
  private _udpResponse?: string; 
  public get udpResponse() {
    return this.getStringAttribute('udp_response');
  }
  public set udpResponse(value: string) {
    this._udpResponse = value;
  }
  public resetUdpResponse() {
    this._udpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpResponseInput() {
    return this._udpResponse;
  }
}

export class HealthmonitorUdpMonitorList extends cdktf.ComplexList {
  public internalValue? : HealthmonitorUdpMonitor[] | cdktf.IResolvable

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
  public get(index: number): HealthmonitorUdpMonitorOutputReference {
    return new HealthmonitorUdpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor avi_healthmonitor}
*/
export class Healthmonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_healthmonitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Healthmonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Healthmonitor to import
  * @param importFromId The id of the existing Healthmonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Healthmonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_healthmonitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/healthmonitor avi_healthmonitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthmonitorConfig
  */
  public constructor(scope: Construct, id: string, config: HealthmonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_healthmonitor',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDuplicateMonitors = config.allowDuplicateMonitors;
    this._description = config.description;
    this._disableQuickstart = config.disableQuickstart;
    this._failedChecks = config.failedChecks;
    this._id = config.id;
    this._isFederated = config.isFederated;
    this._monitorPort = config.monitorPort;
    this._name = config.name;
    this._receiveTimeout = config.receiveTimeout;
    this._sendInterval = config.sendInterval;
    this._successfulChecks = config.successfulChecks;
    this._tenantRef = config.tenantRef;
    this._type = config.type;
    this._uuid = config.uuid;
    this._authentication.internalValue = config.authentication;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._dnsMonitor.internalValue = config.dnsMonitor;
    this._externalMonitor.internalValue = config.externalMonitor;
    this._ftpMonitor.internalValue = config.ftpMonitor;
    this._ftpsMonitor.internalValue = config.ftpsMonitor;
    this._http2Monitor.internalValue = config.http2Monitor;
    this._http2SMonitor.internalValue = config.http2SMonitor;
    this._httpMonitor.internalValue = config.httpMonitor;
    this._httpsMonitor.internalValue = config.httpsMonitor;
    this._imapMonitor.internalValue = config.imapMonitor;
    this._imapsMonitor.internalValue = config.imapsMonitor;
    this._ldapMonitor.internalValue = config.ldapMonitor;
    this._ldapsMonitor.internalValue = config.ldapsMonitor;
    this._markers.internalValue = config.markers;
    this._monitorIp.internalValue = config.monitorIp;
    this._pop3Monitor.internalValue = config.pop3Monitor;
    this._pop3SMonitor.internalValue = config.pop3SMonitor;
    this._radiusMonitor.internalValue = config.radiusMonitor;
    this._sctpMonitor.internalValue = config.sctpMonitor;
    this._sipMonitor.internalValue = config.sipMonitor;
    this._smtpMonitor.internalValue = config.smtpMonitor;
    this._smtpsMonitor.internalValue = config.smtpsMonitor;
    this._tcpMonitor.internalValue = config.tcpMonitor;
    this._udpMonitor.internalValue = config.udpMonitor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicate_monitors - computed: true, optional: true, required: false
  private _allowDuplicateMonitors?: string; 
  public get allowDuplicateMonitors() {
    return this.getStringAttribute('allow_duplicate_monitors');
  }
  public set allowDuplicateMonitors(value: string) {
    this._allowDuplicateMonitors = value;
  }
  public resetAllowDuplicateMonitors() {
    this._allowDuplicateMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateMonitorsInput() {
    return this._allowDuplicateMonitors;
  }

  // description - computed: true, optional: true, required: false
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

  // disable_quickstart - computed: true, optional: true, required: false
  private _disableQuickstart?: string; 
  public get disableQuickstart() {
    return this.getStringAttribute('disable_quickstart');
  }
  public set disableQuickstart(value: string) {
    this._disableQuickstart = value;
  }
  public resetDisableQuickstart() {
    this._disableQuickstart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableQuickstartInput() {
    return this._disableQuickstart;
  }

  // failed_checks - computed: false, optional: true, required: false
  private _failedChecks?: string; 
  public get failedChecks() {
    return this.getStringAttribute('failed_checks');
  }
  public set failedChecks(value: string) {
    this._failedChecks = value;
  }
  public resetFailedChecks() {
    this._failedChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedChecksInput() {
    return this._failedChecks;
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

  // is_federated - computed: false, optional: true, required: false
  private _isFederated?: string; 
  public get isFederated() {
    return this.getStringAttribute('is_federated');
  }
  public set isFederated(value: string) {
    this._isFederated = value;
  }
  public resetIsFederated() {
    this._isFederated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFederatedInput() {
    return this._isFederated;
  }

  // monitor_port - computed: true, optional: true, required: false
  private _monitorPort?: string; 
  public get monitorPort() {
    return this.getStringAttribute('monitor_port');
  }
  public set monitorPort(value: string) {
    this._monitorPort = value;
  }
  public resetMonitorPort() {
    this._monitorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPortInput() {
    return this._monitorPort;
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

  // receive_timeout - computed: false, optional: true, required: false
  private _receiveTimeout?: string; 
  public get receiveTimeout() {
    return this.getStringAttribute('receive_timeout');
  }
  public set receiveTimeout(value: string) {
    this._receiveTimeout = value;
  }
  public resetReceiveTimeout() {
    this._receiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveTimeoutInput() {
    return this._receiveTimeout;
  }

  // send_interval - computed: false, optional: true, required: false
  private _sendInterval?: string; 
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }
  public set sendInterval(value: string) {
    this._sendInterval = value;
  }
  public resetSendInterval() {
    this._sendInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIntervalInput() {
    return this._sendInterval;
  }

  // successful_checks - computed: false, optional: true, required: false
  private _successfulChecks?: string; 
  public get successfulChecks() {
    return this.getStringAttribute('successful_checks');
  }
  public set successfulChecks(value: string) {
    this._successfulChecks = value;
  }
  public resetSuccessfulChecks() {
    this._successfulChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulChecksInput() {
    return this._successfulChecks;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new HealthmonitorAuthenticationList(this, "authentication", true);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: HealthmonitorAuthentication[] | cdktf.IResolvable) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new HealthmonitorConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: HealthmonitorConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // dns_monitor - computed: false, optional: true, required: false
  private _dnsMonitor = new HealthmonitorDnsMonitorList(this, "dns_monitor", true);
  public get dnsMonitor() {
    return this._dnsMonitor;
  }
  public putDnsMonitor(value: HealthmonitorDnsMonitor[] | cdktf.IResolvable) {
    this._dnsMonitor.internalValue = value;
  }
  public resetDnsMonitor() {
    this._dnsMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMonitorInput() {
    return this._dnsMonitor.internalValue;
  }

  // external_monitor - computed: false, optional: true, required: false
  private _externalMonitor = new HealthmonitorExternalMonitorList(this, "external_monitor", true);
  public get externalMonitor() {
    return this._externalMonitor;
  }
  public putExternalMonitor(value: HealthmonitorExternalMonitor[] | cdktf.IResolvable) {
    this._externalMonitor.internalValue = value;
  }
  public resetExternalMonitor() {
    this._externalMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMonitorInput() {
    return this._externalMonitor.internalValue;
  }

  // ftp_monitor - computed: false, optional: true, required: false
  private _ftpMonitor = new HealthmonitorFtpMonitorList(this, "ftp_monitor", true);
  public get ftpMonitor() {
    return this._ftpMonitor;
  }
  public putFtpMonitor(value: HealthmonitorFtpMonitor[] | cdktf.IResolvable) {
    this._ftpMonitor.internalValue = value;
  }
  public resetFtpMonitor() {
    this._ftpMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpMonitorInput() {
    return this._ftpMonitor.internalValue;
  }

  // ftps_monitor - computed: false, optional: true, required: false
  private _ftpsMonitor = new HealthmonitorFtpsMonitorList(this, "ftps_monitor", true);
  public get ftpsMonitor() {
    return this._ftpsMonitor;
  }
  public putFtpsMonitor(value: HealthmonitorFtpsMonitor[] | cdktf.IResolvable) {
    this._ftpsMonitor.internalValue = value;
  }
  public resetFtpsMonitor() {
    this._ftpsMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsMonitorInput() {
    return this._ftpsMonitor.internalValue;
  }

  // http2_monitor - computed: false, optional: true, required: false
  private _http2Monitor = new HealthmonitorHttp2MonitorList(this, "http2_monitor", true);
  public get http2Monitor() {
    return this._http2Monitor;
  }
  public putHttp2Monitor(value: HealthmonitorHttp2Monitor[] | cdktf.IResolvable) {
    this._http2Monitor.internalValue = value;
  }
  public resetHttp2Monitor() {
    this._http2Monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MonitorInput() {
    return this._http2Monitor.internalValue;
  }

  // http2s_monitor - computed: false, optional: true, required: false
  private _http2SMonitor = new HealthmonitorHttp2SMonitorList(this, "http2s_monitor", true);
  public get http2SMonitor() {
    return this._http2SMonitor;
  }
  public putHttp2SMonitor(value: HealthmonitorHttp2SMonitor[] | cdktf.IResolvable) {
    this._http2SMonitor.internalValue = value;
  }
  public resetHttp2SMonitor() {
    this._http2SMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2SMonitorInput() {
    return this._http2SMonitor.internalValue;
  }

  // http_monitor - computed: false, optional: true, required: false
  private _httpMonitor = new HealthmonitorHttpMonitorList(this, "http_monitor", true);
  public get httpMonitor() {
    return this._httpMonitor;
  }
  public putHttpMonitor(value: HealthmonitorHttpMonitor[] | cdktf.IResolvable) {
    this._httpMonitor.internalValue = value;
  }
  public resetHttpMonitor() {
    this._httpMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMonitorInput() {
    return this._httpMonitor.internalValue;
  }

  // https_monitor - computed: false, optional: true, required: false
  private _httpsMonitor = new HealthmonitorHttpsMonitorList(this, "https_monitor", true);
  public get httpsMonitor() {
    return this._httpsMonitor;
  }
  public putHttpsMonitor(value: HealthmonitorHttpsMonitor[] | cdktf.IResolvable) {
    this._httpsMonitor.internalValue = value;
  }
  public resetHttpsMonitor() {
    this._httpsMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsMonitorInput() {
    return this._httpsMonitor.internalValue;
  }

  // imap_monitor - computed: false, optional: true, required: false
  private _imapMonitor = new HealthmonitorImapMonitorList(this, "imap_monitor", true);
  public get imapMonitor() {
    return this._imapMonitor;
  }
  public putImapMonitor(value: HealthmonitorImapMonitor[] | cdktf.IResolvable) {
    this._imapMonitor.internalValue = value;
  }
  public resetImapMonitor() {
    this._imapMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapMonitorInput() {
    return this._imapMonitor.internalValue;
  }

  // imaps_monitor - computed: false, optional: true, required: false
  private _imapsMonitor = new HealthmonitorImapsMonitorList(this, "imaps_monitor", true);
  public get imapsMonitor() {
    return this._imapsMonitor;
  }
  public putImapsMonitor(value: HealthmonitorImapsMonitor[] | cdktf.IResolvable) {
    this._imapsMonitor.internalValue = value;
  }
  public resetImapsMonitor() {
    this._imapsMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapsMonitorInput() {
    return this._imapsMonitor.internalValue;
  }

  // ldap_monitor - computed: false, optional: true, required: false
  private _ldapMonitor = new HealthmonitorLdapMonitorList(this, "ldap_monitor", true);
  public get ldapMonitor() {
    return this._ldapMonitor;
  }
  public putLdapMonitor(value: HealthmonitorLdapMonitor[] | cdktf.IResolvable) {
    this._ldapMonitor.internalValue = value;
  }
  public resetLdapMonitor() {
    this._ldapMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapMonitorInput() {
    return this._ldapMonitor.internalValue;
  }

  // ldaps_monitor - computed: false, optional: true, required: false
  private _ldapsMonitor = new HealthmonitorLdapsMonitorList(this, "ldaps_monitor", true);
  public get ldapsMonitor() {
    return this._ldapsMonitor;
  }
  public putLdapsMonitor(value: HealthmonitorLdapsMonitor[] | cdktf.IResolvable) {
    this._ldapsMonitor.internalValue = value;
  }
  public resetLdapsMonitor() {
    this._ldapsMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsMonitorInput() {
    return this._ldapsMonitor.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new HealthmonitorMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: HealthmonitorMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // monitor_ip - computed: false, optional: true, required: false
  private _monitorIp = new HealthmonitorMonitorIpList(this, "monitor_ip", true);
  public get monitorIp() {
    return this._monitorIp;
  }
  public putMonitorIp(value: HealthmonitorMonitorIp[] | cdktf.IResolvable) {
    this._monitorIp.internalValue = value;
  }
  public resetMonitorIp() {
    this._monitorIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIpInput() {
    return this._monitorIp.internalValue;
  }

  // pop3_monitor - computed: false, optional: true, required: false
  private _pop3Monitor = new HealthmonitorPop3MonitorList(this, "pop3_monitor", true);
  public get pop3Monitor() {
    return this._pop3Monitor;
  }
  public putPop3Monitor(value: HealthmonitorPop3Monitor[] | cdktf.IResolvable) {
    this._pop3Monitor.internalValue = value;
  }
  public resetPop3Monitor() {
    this._pop3Monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3MonitorInput() {
    return this._pop3Monitor.internalValue;
  }

  // pop3s_monitor - computed: false, optional: true, required: false
  private _pop3SMonitor = new HealthmonitorPop3SMonitorList(this, "pop3s_monitor", true);
  public get pop3SMonitor() {
    return this._pop3SMonitor;
  }
  public putPop3SMonitor(value: HealthmonitorPop3SMonitor[] | cdktf.IResolvable) {
    this._pop3SMonitor.internalValue = value;
  }
  public resetPop3SMonitor() {
    this._pop3SMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3SMonitorInput() {
    return this._pop3SMonitor.internalValue;
  }

  // radius_monitor - computed: false, optional: true, required: false
  private _radiusMonitor = new HealthmonitorRadiusMonitorList(this, "radius_monitor", true);
  public get radiusMonitor() {
    return this._radiusMonitor;
  }
  public putRadiusMonitor(value: HealthmonitorRadiusMonitor[] | cdktf.IResolvable) {
    this._radiusMonitor.internalValue = value;
  }
  public resetRadiusMonitor() {
    this._radiusMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMonitorInput() {
    return this._radiusMonitor.internalValue;
  }

  // sctp_monitor - computed: false, optional: true, required: false
  private _sctpMonitor = new HealthmonitorSctpMonitorList(this, "sctp_monitor", true);
  public get sctpMonitor() {
    return this._sctpMonitor;
  }
  public putSctpMonitor(value: HealthmonitorSctpMonitor[] | cdktf.IResolvable) {
    this._sctpMonitor.internalValue = value;
  }
  public resetSctpMonitor() {
    this._sctpMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpMonitorInput() {
    return this._sctpMonitor.internalValue;
  }

  // sip_monitor - computed: false, optional: true, required: false
  private _sipMonitor = new HealthmonitorSipMonitorList(this, "sip_monitor", true);
  public get sipMonitor() {
    return this._sipMonitor;
  }
  public putSipMonitor(value: HealthmonitorSipMonitor[] | cdktf.IResolvable) {
    this._sipMonitor.internalValue = value;
  }
  public resetSipMonitor() {
    this._sipMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipMonitorInput() {
    return this._sipMonitor.internalValue;
  }

  // smtp_monitor - computed: false, optional: true, required: false
  private _smtpMonitor = new HealthmonitorSmtpMonitorList(this, "smtp_monitor", true);
  public get smtpMonitor() {
    return this._smtpMonitor;
  }
  public putSmtpMonitor(value: HealthmonitorSmtpMonitor[] | cdktf.IResolvable) {
    this._smtpMonitor.internalValue = value;
  }
  public resetSmtpMonitor() {
    this._smtpMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpMonitorInput() {
    return this._smtpMonitor.internalValue;
  }

  // smtps_monitor - computed: false, optional: true, required: false
  private _smtpsMonitor = new HealthmonitorSmtpsMonitorList(this, "smtps_monitor", true);
  public get smtpsMonitor() {
    return this._smtpsMonitor;
  }
  public putSmtpsMonitor(value: HealthmonitorSmtpsMonitor[] | cdktf.IResolvable) {
    this._smtpsMonitor.internalValue = value;
  }
  public resetSmtpsMonitor() {
    this._smtpsMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpsMonitorInput() {
    return this._smtpsMonitor.internalValue;
  }

  // tcp_monitor - computed: false, optional: true, required: false
  private _tcpMonitor = new HealthmonitorTcpMonitorList(this, "tcp_monitor", true);
  public get tcpMonitor() {
    return this._tcpMonitor;
  }
  public putTcpMonitor(value: HealthmonitorTcpMonitor[] | cdktf.IResolvable) {
    this._tcpMonitor.internalValue = value;
  }
  public resetTcpMonitor() {
    this._tcpMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMonitorInput() {
    return this._tcpMonitor.internalValue;
  }

  // udp_monitor - computed: false, optional: true, required: false
  private _udpMonitor = new HealthmonitorUdpMonitorList(this, "udp_monitor", true);
  public get udpMonitor() {
    return this._udpMonitor;
  }
  public putUdpMonitor(value: HealthmonitorUdpMonitor[] | cdktf.IResolvable) {
    this._udpMonitor.internalValue = value;
  }
  public resetUdpMonitor() {
    this._udpMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpMonitorInput() {
    return this._udpMonitor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_duplicate_monitors: cdktf.stringToTerraform(this._allowDuplicateMonitors),
      description: cdktf.stringToTerraform(this._description),
      disable_quickstart: cdktf.stringToTerraform(this._disableQuickstart),
      failed_checks: cdktf.stringToTerraform(this._failedChecks),
      id: cdktf.stringToTerraform(this._id),
      is_federated: cdktf.stringToTerraform(this._isFederated),
      monitor_port: cdktf.stringToTerraform(this._monitorPort),
      name: cdktf.stringToTerraform(this._name),
      receive_timeout: cdktf.stringToTerraform(this._receiveTimeout),
      send_interval: cdktf.stringToTerraform(this._sendInterval),
      successful_checks: cdktf.stringToTerraform(this._successfulChecks),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      authentication: cdktf.listMapper(healthmonitorAuthenticationToTerraform, true)(this._authentication.internalValue),
      configpb_attributes: cdktf.listMapper(healthmonitorConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      dns_monitor: cdktf.listMapper(healthmonitorDnsMonitorToTerraform, true)(this._dnsMonitor.internalValue),
      external_monitor: cdktf.listMapper(healthmonitorExternalMonitorToTerraform, true)(this._externalMonitor.internalValue),
      ftp_monitor: cdktf.listMapper(healthmonitorFtpMonitorToTerraform, true)(this._ftpMonitor.internalValue),
      ftps_monitor: cdktf.listMapper(healthmonitorFtpsMonitorToTerraform, true)(this._ftpsMonitor.internalValue),
      http2_monitor: cdktf.listMapper(healthmonitorHttp2MonitorToTerraform, true)(this._http2Monitor.internalValue),
      http2s_monitor: cdktf.listMapper(healthmonitorHttp2SMonitorToTerraform, true)(this._http2SMonitor.internalValue),
      http_monitor: cdktf.listMapper(healthmonitorHttpMonitorToTerraform, true)(this._httpMonitor.internalValue),
      https_monitor: cdktf.listMapper(healthmonitorHttpsMonitorToTerraform, true)(this._httpsMonitor.internalValue),
      imap_monitor: cdktf.listMapper(healthmonitorImapMonitorToTerraform, true)(this._imapMonitor.internalValue),
      imaps_monitor: cdktf.listMapper(healthmonitorImapsMonitorToTerraform, true)(this._imapsMonitor.internalValue),
      ldap_monitor: cdktf.listMapper(healthmonitorLdapMonitorToTerraform, true)(this._ldapMonitor.internalValue),
      ldaps_monitor: cdktf.listMapper(healthmonitorLdapsMonitorToTerraform, true)(this._ldapsMonitor.internalValue),
      markers: cdktf.listMapper(healthmonitorMarkersToTerraform, true)(this._markers.internalValue),
      monitor_ip: cdktf.listMapper(healthmonitorMonitorIpToTerraform, true)(this._monitorIp.internalValue),
      pop3_monitor: cdktf.listMapper(healthmonitorPop3MonitorToTerraform, true)(this._pop3Monitor.internalValue),
      pop3s_monitor: cdktf.listMapper(healthmonitorPop3SMonitorToTerraform, true)(this._pop3SMonitor.internalValue),
      radius_monitor: cdktf.listMapper(healthmonitorRadiusMonitorToTerraform, true)(this._radiusMonitor.internalValue),
      sctp_monitor: cdktf.listMapper(healthmonitorSctpMonitorToTerraform, true)(this._sctpMonitor.internalValue),
      sip_monitor: cdktf.listMapper(healthmonitorSipMonitorToTerraform, true)(this._sipMonitor.internalValue),
      smtp_monitor: cdktf.listMapper(healthmonitorSmtpMonitorToTerraform, true)(this._smtpMonitor.internalValue),
      smtps_monitor: cdktf.listMapper(healthmonitorSmtpsMonitorToTerraform, true)(this._smtpsMonitor.internalValue),
      tcp_monitor: cdktf.listMapper(healthmonitorTcpMonitorToTerraform, true)(this._tcpMonitor.internalValue),
      udp_monitor: cdktf.listMapper(healthmonitorUdpMonitorToTerraform, true)(this._udpMonitor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_duplicate_monitors: {
        value: cdktf.stringToHclTerraform(this._allowDuplicateMonitors),
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
      disable_quickstart: {
        value: cdktf.stringToHclTerraform(this._disableQuickstart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_checks: {
        value: cdktf.stringToHclTerraform(this._failedChecks),
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
      is_federated: {
        value: cdktf.stringToHclTerraform(this._isFederated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_port: {
        value: cdktf.stringToHclTerraform(this._monitorPort),
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
      receive_timeout: {
        value: cdktf.stringToHclTerraform(this._receiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_interval: {
        value: cdktf.stringToHclTerraform(this._sendInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      successful_checks: {
        value: cdktf.stringToHclTerraform(this._successfulChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      authentication: {
        value: cdktf.listMapperHcl(healthmonitorAuthenticationToHclTerraform, true)(this._authentication.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorAuthenticationList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(healthmonitorConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorConfigpbAttributesList",
      },
      dns_monitor: {
        value: cdktf.listMapperHcl(healthmonitorDnsMonitorToHclTerraform, true)(this._dnsMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorDnsMonitorList",
      },
      external_monitor: {
        value: cdktf.listMapperHcl(healthmonitorExternalMonitorToHclTerraform, true)(this._externalMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorExternalMonitorList",
      },
      ftp_monitor: {
        value: cdktf.listMapperHcl(healthmonitorFtpMonitorToHclTerraform, true)(this._ftpMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorFtpMonitorList",
      },
      ftps_monitor: {
        value: cdktf.listMapperHcl(healthmonitorFtpsMonitorToHclTerraform, true)(this._ftpsMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorFtpsMonitorList",
      },
      http2_monitor: {
        value: cdktf.listMapperHcl(healthmonitorHttp2MonitorToHclTerraform, true)(this._http2Monitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorHttp2MonitorList",
      },
      http2s_monitor: {
        value: cdktf.listMapperHcl(healthmonitorHttp2SMonitorToHclTerraform, true)(this._http2SMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorHttp2SMonitorList",
      },
      http_monitor: {
        value: cdktf.listMapperHcl(healthmonitorHttpMonitorToHclTerraform, true)(this._httpMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorHttpMonitorList",
      },
      https_monitor: {
        value: cdktf.listMapperHcl(healthmonitorHttpsMonitorToHclTerraform, true)(this._httpsMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorHttpsMonitorList",
      },
      imap_monitor: {
        value: cdktf.listMapperHcl(healthmonitorImapMonitorToHclTerraform, true)(this._imapMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorImapMonitorList",
      },
      imaps_monitor: {
        value: cdktf.listMapperHcl(healthmonitorImapsMonitorToHclTerraform, true)(this._imapsMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorImapsMonitorList",
      },
      ldap_monitor: {
        value: cdktf.listMapperHcl(healthmonitorLdapMonitorToHclTerraform, true)(this._ldapMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorLdapMonitorList",
      },
      ldaps_monitor: {
        value: cdktf.listMapperHcl(healthmonitorLdapsMonitorToHclTerraform, true)(this._ldapsMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorLdapsMonitorList",
      },
      markers: {
        value: cdktf.listMapperHcl(healthmonitorMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthmonitorMarkersList",
      },
      monitor_ip: {
        value: cdktf.listMapperHcl(healthmonitorMonitorIpToHclTerraform, true)(this._monitorIp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorMonitorIpList",
      },
      pop3_monitor: {
        value: cdktf.listMapperHcl(healthmonitorPop3MonitorToHclTerraform, true)(this._pop3Monitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorPop3MonitorList",
      },
      pop3s_monitor: {
        value: cdktf.listMapperHcl(healthmonitorPop3SMonitorToHclTerraform, true)(this._pop3SMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorPop3SMonitorList",
      },
      radius_monitor: {
        value: cdktf.listMapperHcl(healthmonitorRadiusMonitorToHclTerraform, true)(this._radiusMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorRadiusMonitorList",
      },
      sctp_monitor: {
        value: cdktf.listMapperHcl(healthmonitorSctpMonitorToHclTerraform, true)(this._sctpMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorSctpMonitorList",
      },
      sip_monitor: {
        value: cdktf.listMapperHcl(healthmonitorSipMonitorToHclTerraform, true)(this._sipMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorSipMonitorList",
      },
      smtp_monitor: {
        value: cdktf.listMapperHcl(healthmonitorSmtpMonitorToHclTerraform, true)(this._smtpMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorSmtpMonitorList",
      },
      smtps_monitor: {
        value: cdktf.listMapperHcl(healthmonitorSmtpsMonitorToHclTerraform, true)(this._smtpsMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorSmtpsMonitorList",
      },
      tcp_monitor: {
        value: cdktf.listMapperHcl(healthmonitorTcpMonitorToHclTerraform, true)(this._tcpMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorTcpMonitorList",
      },
      udp_monitor: {
        value: cdktf.listMapperHcl(healthmonitorUdpMonitorToHclTerraform, true)(this._udpMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HealthmonitorUdpMonitorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
