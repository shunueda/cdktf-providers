// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebproxyExplicitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#client_cert WebproxyExplicit#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#dynamic_sort_subtable WebproxyExplicit#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#empty_cert_action WebproxyExplicit#empty_cert_action}
  */
  readonly emptyCertAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#ftp_incoming_port WebproxyExplicit#ftp_incoming_port}
  */
  readonly ftpIncomingPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#ftp_over_http WebproxyExplicit#ftp_over_http}
  */
  readonly ftpOverHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#get_all_tables WebproxyExplicit#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#http_connection_mode WebproxyExplicit#http_connection_mode}
  */
  readonly httpConnectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#http_incoming_port WebproxyExplicit#http_incoming_port}
  */
  readonly httpIncomingPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#https_incoming_port WebproxyExplicit#https_incoming_port}
  */
  readonly httpsIncomingPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#https_replacement_message WebproxyExplicit#https_replacement_message}
  */
  readonly httpsReplacementMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#id WebproxyExplicit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#incoming_ip WebproxyExplicit#incoming_ip}
  */
  readonly incomingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#incoming_ip6 WebproxyExplicit#incoming_ip6}
  */
  readonly incomingIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#interface WebproxyExplicit#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#interface_select_method WebproxyExplicit#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#ipv6_status WebproxyExplicit#ipv6_status}
  */
  readonly ipv6Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#message_upon_server_error WebproxyExplicit#message_upon_server_error}
  */
  readonly messageUponServerError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#outgoing_ip WebproxyExplicit#outgoing_ip}
  */
  readonly outgoingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#outgoing_ip6 WebproxyExplicit#outgoing_ip6}
  */
  readonly outgoingIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#pac_file_data WebproxyExplicit#pac_file_data}
  */
  readonly pacFileData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#pac_file_name WebproxyExplicit#pac_file_name}
  */
  readonly pacFileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#pac_file_server_port WebproxyExplicit#pac_file_server_port}
  */
  readonly pacFileServerPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#pac_file_server_status WebproxyExplicit#pac_file_server_status}
  */
  readonly pacFileServerStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#pac_file_through_https WebproxyExplicit#pac_file_through_https}
  */
  readonly pacFileThroughHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#pac_file_url WebproxyExplicit#pac_file_url}
  */
  readonly pacFileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#pref_dns_result WebproxyExplicit#pref_dns_result}
  */
  readonly prefDnsResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#realm WebproxyExplicit#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#sec_default_action WebproxyExplicit#sec_default_action}
  */
  readonly secDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#secure_web_proxy WebproxyExplicit#secure_web_proxy}
  */
  readonly secureWebProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#socks WebproxyExplicit#socks}
  */
  readonly socks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#socks_incoming_port WebproxyExplicit#socks_incoming_port}
  */
  readonly socksIncomingPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#ssl_algorithm WebproxyExplicit#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#ssl_dh_bits WebproxyExplicit#ssl_dh_bits}
  */
  readonly sslDhBits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#status WebproxyExplicit#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#strict_guest WebproxyExplicit#strict_guest}
  */
  readonly strictGuest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#trace_auth_no_rsp WebproxyExplicit#trace_auth_no_rsp}
  */
  readonly traceAuthNoRsp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#unknown_http_version WebproxyExplicit#unknown_http_version}
  */
  readonly unknownHttpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#user_agent_detect WebproxyExplicit#user_agent_detect}
  */
  readonly userAgentDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#vdomparam WebproxyExplicit#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#vrf_select WebproxyExplicit#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * pac_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#pac_policy WebproxyExplicit#pac_policy}
  */
  readonly pacPolicy?: WebproxyExplicitPacPolicy[] | cdktf.IResolvable;
  /**
  * secure_web_proxy_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#secure_web_proxy_cert WebproxyExplicit#secure_web_proxy_cert}
  */
  readonly secureWebProxyCert?: WebproxyExplicitSecureWebProxyCert[] | cdktf.IResolvable;
}
export interface WebproxyExplicitPacPolicyDstaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#name WebproxyExplicit#name}
  */
  readonly name?: string;
}

export function webproxyExplicitPacPolicyDstaddrToTerraform(struct?: WebproxyExplicitPacPolicyDstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webproxyExplicitPacPolicyDstaddrToHclTerraform(struct?: WebproxyExplicitPacPolicyDstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebproxyExplicitPacPolicyDstaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebproxyExplicitPacPolicyDstaddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebproxyExplicitPacPolicyDstaddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class WebproxyExplicitPacPolicyDstaddrList extends cdktf.ComplexList {
  public internalValue? : WebproxyExplicitPacPolicyDstaddr[] | cdktf.IResolvable

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
  public get(index: number): WebproxyExplicitPacPolicyDstaddrOutputReference {
    return new WebproxyExplicitPacPolicyDstaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebproxyExplicitPacPolicySrcaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#name WebproxyExplicit#name}
  */
  readonly name?: string;
}

export function webproxyExplicitPacPolicySrcaddrToTerraform(struct?: WebproxyExplicitPacPolicySrcaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webproxyExplicitPacPolicySrcaddrToHclTerraform(struct?: WebproxyExplicitPacPolicySrcaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebproxyExplicitPacPolicySrcaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebproxyExplicitPacPolicySrcaddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebproxyExplicitPacPolicySrcaddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class WebproxyExplicitPacPolicySrcaddrList extends cdktf.ComplexList {
  public internalValue? : WebproxyExplicitPacPolicySrcaddr[] | cdktf.IResolvable

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
  public get(index: number): WebproxyExplicitPacPolicySrcaddrOutputReference {
    return new WebproxyExplicitPacPolicySrcaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebproxyExplicitPacPolicySrcaddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#name WebproxyExplicit#name}
  */
  readonly name?: string;
}

export function webproxyExplicitPacPolicySrcaddr6ToTerraform(struct?: WebproxyExplicitPacPolicySrcaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webproxyExplicitPacPolicySrcaddr6ToHclTerraform(struct?: WebproxyExplicitPacPolicySrcaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebproxyExplicitPacPolicySrcaddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebproxyExplicitPacPolicySrcaddr6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebproxyExplicitPacPolicySrcaddr6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class WebproxyExplicitPacPolicySrcaddr6List extends cdktf.ComplexList {
  public internalValue? : WebproxyExplicitPacPolicySrcaddr6[] | cdktf.IResolvable

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
  public get(index: number): WebproxyExplicitPacPolicySrcaddr6OutputReference {
    return new WebproxyExplicitPacPolicySrcaddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebproxyExplicitPacPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#comments WebproxyExplicit#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#pac_file_data WebproxyExplicit#pac_file_data}
  */
  readonly pacFileData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#pac_file_name WebproxyExplicit#pac_file_name}
  */
  readonly pacFileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#policyid WebproxyExplicit#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#status WebproxyExplicit#status}
  */
  readonly status?: string;
  /**
  * dstaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#dstaddr WebproxyExplicit#dstaddr}
  */
  readonly dstaddr?: WebproxyExplicitPacPolicyDstaddr[] | cdktf.IResolvable;
  /**
  * srcaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#srcaddr WebproxyExplicit#srcaddr}
  */
  readonly srcaddr?: WebproxyExplicitPacPolicySrcaddr[] | cdktf.IResolvable;
  /**
  * srcaddr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#srcaddr6 WebproxyExplicit#srcaddr6}
  */
  readonly srcaddr6?: WebproxyExplicitPacPolicySrcaddr6[] | cdktf.IResolvable;
}

export function webproxyExplicitPacPolicyToTerraform(struct?: WebproxyExplicitPacPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    pac_file_data: cdktf.stringToTerraform(struct!.pacFileData),
    pac_file_name: cdktf.stringToTerraform(struct!.pacFileName),
    policyid: cdktf.numberToTerraform(struct!.policyid),
    status: cdktf.stringToTerraform(struct!.status),
    dstaddr: cdktf.listMapper(webproxyExplicitPacPolicyDstaddrToTerraform, true)(struct!.dstaddr),
    srcaddr: cdktf.listMapper(webproxyExplicitPacPolicySrcaddrToTerraform, true)(struct!.srcaddr),
    srcaddr6: cdktf.listMapper(webproxyExplicitPacPolicySrcaddr6ToTerraform, true)(struct!.srcaddr6),
  }
}


export function webproxyExplicitPacPolicyToHclTerraform(struct?: WebproxyExplicitPacPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pac_file_data: {
      value: cdktf.stringToHclTerraform(struct!.pacFileData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pac_file_name: {
      value: cdktf.stringToHclTerraform(struct!.pacFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policyid: {
      value: cdktf.numberToHclTerraform(struct!.policyid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstaddr: {
      value: cdktf.listMapperHcl(webproxyExplicitPacPolicyDstaddrToHclTerraform, true)(struct!.dstaddr),
      isBlock: true,
      type: "set",
      storageClassType: "WebproxyExplicitPacPolicyDstaddrList",
    },
    srcaddr: {
      value: cdktf.listMapperHcl(webproxyExplicitPacPolicySrcaddrToHclTerraform, true)(struct!.srcaddr),
      isBlock: true,
      type: "set",
      storageClassType: "WebproxyExplicitPacPolicySrcaddrList",
    },
    srcaddr6: {
      value: cdktf.listMapperHcl(webproxyExplicitPacPolicySrcaddr6ToHclTerraform, true)(struct!.srcaddr6),
      isBlock: true,
      type: "set",
      storageClassType: "WebproxyExplicitPacPolicySrcaddr6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebproxyExplicitPacPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebproxyExplicitPacPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._pacFileData !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacFileData = this._pacFileData;
    }
    if (this._pacFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacFileName = this._pacFileName;
    }
    if (this._policyid !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyid = this._policyid;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._dstaddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr = this._dstaddr?.internalValue;
    }
    if (this._srcaddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr = this._srcaddr?.internalValue;
    }
    if (this._srcaddr6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr6 = this._srcaddr6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebproxyExplicitPacPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comments = undefined;
      this._pacFileData = undefined;
      this._pacFileName = undefined;
      this._policyid = undefined;
      this._status = undefined;
      this._dstaddr.internalValue = undefined;
      this._srcaddr.internalValue = undefined;
      this._srcaddr6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comments = value.comments;
      this._pacFileData = value.pacFileData;
      this._pacFileName = value.pacFileName;
      this._policyid = value.policyid;
      this._status = value.status;
      this._dstaddr.internalValue = value.dstaddr;
      this._srcaddr.internalValue = value.srcaddr;
      this._srcaddr6.internalValue = value.srcaddr6;
    }
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // pac_file_data - computed: false, optional: true, required: false
  private _pacFileData?: string; 
  public get pacFileData() {
    return this.getStringAttribute('pac_file_data');
  }
  public set pacFileData(value: string) {
    this._pacFileData = value;
  }
  public resetPacFileData() {
    this._pacFileData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileDataInput() {
    return this._pacFileData;
  }

  // pac_file_name - computed: true, optional: true, required: false
  private _pacFileName?: string; 
  public get pacFileName() {
    return this.getStringAttribute('pac_file_name');
  }
  public set pacFileName(value: string) {
    this._pacFileName = value;
  }
  public resetPacFileName() {
    this._pacFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileNameInput() {
    return this._pacFileName;
  }

  // policyid - computed: false, optional: true, required: false
  private _policyid?: number; 
  public get policyid() {
    return this.getNumberAttribute('policyid');
  }
  public set policyid(value: number) {
    this._policyid = value;
  }
  public resetPolicyid() {
    this._policyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // dstaddr - computed: false, optional: true, required: false
  private _dstaddr = new WebproxyExplicitPacPolicyDstaddrList(this, "dstaddr", true);
  public get dstaddr() {
    return this._dstaddr;
  }
  public putDstaddr(value: WebproxyExplicitPacPolicyDstaddr[] | cdktf.IResolvable) {
    this._dstaddr.internalValue = value;
  }
  public resetDstaddr() {
    this._dstaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr.internalValue;
  }

  // srcaddr - computed: false, optional: true, required: false
  private _srcaddr = new WebproxyExplicitPacPolicySrcaddrList(this, "srcaddr", true);
  public get srcaddr() {
    return this._srcaddr;
  }
  public putSrcaddr(value: WebproxyExplicitPacPolicySrcaddr[] | cdktf.IResolvable) {
    this._srcaddr.internalValue = value;
  }
  public resetSrcaddr() {
    this._srcaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr.internalValue;
  }

  // srcaddr6 - computed: false, optional: true, required: false
  private _srcaddr6 = new WebproxyExplicitPacPolicySrcaddr6List(this, "srcaddr6", true);
  public get srcaddr6() {
    return this._srcaddr6;
  }
  public putSrcaddr6(value: WebproxyExplicitPacPolicySrcaddr6[] | cdktf.IResolvable) {
    this._srcaddr6.internalValue = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6.internalValue;
  }
}

export class WebproxyExplicitPacPolicyList extends cdktf.ComplexList {
  public internalValue? : WebproxyExplicitPacPolicy[] | cdktf.IResolvable

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
  public get(index: number): WebproxyExplicitPacPolicyOutputReference {
    return new WebproxyExplicitPacPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebproxyExplicitSecureWebProxyCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#name WebproxyExplicit#name}
  */
  readonly name?: string;
}

export function webproxyExplicitSecureWebProxyCertToTerraform(struct?: WebproxyExplicitSecureWebProxyCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webproxyExplicitSecureWebProxyCertToHclTerraform(struct?: WebproxyExplicitSecureWebProxyCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebproxyExplicitSecureWebProxyCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebproxyExplicitSecureWebProxyCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebproxyExplicitSecureWebProxyCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class WebproxyExplicitSecureWebProxyCertList extends cdktf.ComplexList {
  public internalValue? : WebproxyExplicitSecureWebProxyCert[] | cdktf.IResolvable

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
  public get(index: number): WebproxyExplicitSecureWebProxyCertOutputReference {
    return new WebproxyExplicitSecureWebProxyCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit fortios_webproxy_explicit}
*/
export class WebproxyExplicit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_webproxy_explicit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebproxyExplicit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebproxyExplicit to import
  * @param importFromId The id of the existing WebproxyExplicit that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebproxyExplicit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_webproxy_explicit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_explicit fortios_webproxy_explicit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebproxyExplicitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebproxyExplicitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_webproxy_explicit',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientCert = config.clientCert;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emptyCertAction = config.emptyCertAction;
    this._ftpIncomingPort = config.ftpIncomingPort;
    this._ftpOverHttp = config.ftpOverHttp;
    this._getAllTables = config.fetchAllTables;
    this._httpConnectionMode = config.httpConnectionMode;
    this._httpIncomingPort = config.httpIncomingPort;
    this._httpsIncomingPort = config.httpsIncomingPort;
    this._httpsReplacementMessage = config.httpsReplacementMessage;
    this._id = config.id;
    this._incomingIp = config.incomingIp;
    this._incomingIp6 = config.incomingIp6;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ipv6Status = config.ipv6Status;
    this._messageUponServerError = config.messageUponServerError;
    this._outgoingIp = config.outgoingIp;
    this._outgoingIp6 = config.outgoingIp6;
    this._pacFileData = config.pacFileData;
    this._pacFileName = config.pacFileName;
    this._pacFileServerPort = config.pacFileServerPort;
    this._pacFileServerStatus = config.pacFileServerStatus;
    this._pacFileThroughHttps = config.pacFileThroughHttps;
    this._pacFileUrl = config.pacFileUrl;
    this._prefDnsResult = config.prefDnsResult;
    this._realm = config.realm;
    this._secDefaultAction = config.secDefaultAction;
    this._secureWebProxy = config.secureWebProxy;
    this._socks = config.socks;
    this._socksIncomingPort = config.socksIncomingPort;
    this._sslAlgorithm = config.sslAlgorithm;
    this._sslDhBits = config.sslDhBits;
    this._status = config.status;
    this._strictGuest = config.strictGuest;
    this._traceAuthNoRsp = config.traceAuthNoRsp;
    this._unknownHttpVersion = config.unknownHttpVersion;
    this._userAgentDetect = config.userAgentDetect;
    this._vdomparam = config.vdomparam;
    this._vrfSelect = config.vrfSelect;
    this._pacPolicy.internalValue = config.pacPolicy;
    this._secureWebProxyCert.internalValue = config.secureWebProxyCert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_cert - computed: true, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // empty_cert_action - computed: true, optional: true, required: false
  private _emptyCertAction?: string; 
  public get emptyCertAction() {
    return this.getStringAttribute('empty_cert_action');
  }
  public set emptyCertAction(value: string) {
    this._emptyCertAction = value;
  }
  public resetEmptyCertAction() {
    this._emptyCertAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyCertActionInput() {
    return this._emptyCertAction;
  }

  // ftp_incoming_port - computed: false, optional: true, required: false
  private _ftpIncomingPort?: string; 
  public get ftpIncomingPort() {
    return this.getStringAttribute('ftp_incoming_port');
  }
  public set ftpIncomingPort(value: string) {
    this._ftpIncomingPort = value;
  }
  public resetFtpIncomingPort() {
    this._ftpIncomingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpIncomingPortInput() {
    return this._ftpIncomingPort;
  }

  // ftp_over_http - computed: true, optional: true, required: false
  private _ftpOverHttp?: string; 
  public get ftpOverHttp() {
    return this.getStringAttribute('ftp_over_http');
  }
  public set ftpOverHttp(value: string) {
    this._ftpOverHttp = value;
  }
  public resetFtpOverHttp() {
    this._ftpOverHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpOverHttpInput() {
    return this._ftpOverHttp;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // http_connection_mode - computed: true, optional: true, required: false
  private _httpConnectionMode?: string; 
  public get httpConnectionMode() {
    return this.getStringAttribute('http_connection_mode');
  }
  public set httpConnectionMode(value: string) {
    this._httpConnectionMode = value;
  }
  public resetHttpConnectionMode() {
    this._httpConnectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectionModeInput() {
    return this._httpConnectionMode;
  }

  // http_incoming_port - computed: false, optional: true, required: false
  private _httpIncomingPort?: string; 
  public get httpIncomingPort() {
    return this.getStringAttribute('http_incoming_port');
  }
  public set httpIncomingPort(value: string) {
    this._httpIncomingPort = value;
  }
  public resetHttpIncomingPort() {
    this._httpIncomingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpIncomingPortInput() {
    return this._httpIncomingPort;
  }

  // https_incoming_port - computed: false, optional: true, required: false
  private _httpsIncomingPort?: string; 
  public get httpsIncomingPort() {
    return this.getStringAttribute('https_incoming_port');
  }
  public set httpsIncomingPort(value: string) {
    this._httpsIncomingPort = value;
  }
  public resetHttpsIncomingPort() {
    this._httpsIncomingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsIncomingPortInput() {
    return this._httpsIncomingPort;
  }

  // https_replacement_message - computed: true, optional: true, required: false
  private _httpsReplacementMessage?: string; 
  public get httpsReplacementMessage() {
    return this.getStringAttribute('https_replacement_message');
  }
  public set httpsReplacementMessage(value: string) {
    this._httpsReplacementMessage = value;
  }
  public resetHttpsReplacementMessage() {
    this._httpsReplacementMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsReplacementMessageInput() {
    return this._httpsReplacementMessage;
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

  // incoming_ip - computed: true, optional: true, required: false
  private _incomingIp?: string; 
  public get incomingIp() {
    return this.getStringAttribute('incoming_ip');
  }
  public set incomingIp(value: string) {
    this._incomingIp = value;
  }
  public resetIncomingIp() {
    this._incomingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingIpInput() {
    return this._incomingIp;
  }

  // incoming_ip6 - computed: true, optional: true, required: false
  private _incomingIp6?: string; 
  public get incomingIp6() {
    return this.getStringAttribute('incoming_ip6');
  }
  public set incomingIp6(value: string) {
    this._incomingIp6 = value;
  }
  public resetIncomingIp6() {
    this._incomingIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingIp6Input() {
    return this._incomingIp6;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // ipv6_status - computed: true, optional: true, required: false
  private _ipv6Status?: string; 
  public get ipv6Status() {
    return this.getStringAttribute('ipv6_status');
  }
  public set ipv6Status(value: string) {
    this._ipv6Status = value;
  }
  public resetIpv6Status() {
    this._ipv6Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6StatusInput() {
    return this._ipv6Status;
  }

  // message_upon_server_error - computed: true, optional: true, required: false
  private _messageUponServerError?: string; 
  public get messageUponServerError() {
    return this.getStringAttribute('message_upon_server_error');
  }
  public set messageUponServerError(value: string) {
    this._messageUponServerError = value;
  }
  public resetMessageUponServerError() {
    this._messageUponServerError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageUponServerErrorInput() {
    return this._messageUponServerError;
  }

  // outgoing_ip - computed: false, optional: true, required: false
  private _outgoingIp?: string; 
  public get outgoingIp() {
    return this.getStringAttribute('outgoing_ip');
  }
  public set outgoingIp(value: string) {
    this._outgoingIp = value;
  }
  public resetOutgoingIp() {
    this._outgoingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingIpInput() {
    return this._outgoingIp;
  }

  // outgoing_ip6 - computed: false, optional: true, required: false
  private _outgoingIp6?: string; 
  public get outgoingIp6() {
    return this.getStringAttribute('outgoing_ip6');
  }
  public set outgoingIp6(value: string) {
    this._outgoingIp6 = value;
  }
  public resetOutgoingIp6() {
    this._outgoingIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingIp6Input() {
    return this._outgoingIp6;
  }

  // pac_file_data - computed: false, optional: true, required: false
  private _pacFileData?: string; 
  public get pacFileData() {
    return this.getStringAttribute('pac_file_data');
  }
  public set pacFileData(value: string) {
    this._pacFileData = value;
  }
  public resetPacFileData() {
    this._pacFileData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileDataInput() {
    return this._pacFileData;
  }

  // pac_file_name - computed: true, optional: true, required: false
  private _pacFileName?: string; 
  public get pacFileName() {
    return this.getStringAttribute('pac_file_name');
  }
  public set pacFileName(value: string) {
    this._pacFileName = value;
  }
  public resetPacFileName() {
    this._pacFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileNameInput() {
    return this._pacFileName;
  }

  // pac_file_server_port - computed: false, optional: true, required: false
  private _pacFileServerPort?: string; 
  public get pacFileServerPort() {
    return this.getStringAttribute('pac_file_server_port');
  }
  public set pacFileServerPort(value: string) {
    this._pacFileServerPort = value;
  }
  public resetPacFileServerPort() {
    this._pacFileServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileServerPortInput() {
    return this._pacFileServerPort;
  }

  // pac_file_server_status - computed: true, optional: true, required: false
  private _pacFileServerStatus?: string; 
  public get pacFileServerStatus() {
    return this.getStringAttribute('pac_file_server_status');
  }
  public set pacFileServerStatus(value: string) {
    this._pacFileServerStatus = value;
  }
  public resetPacFileServerStatus() {
    this._pacFileServerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileServerStatusInput() {
    return this._pacFileServerStatus;
  }

  // pac_file_through_https - computed: true, optional: true, required: false
  private _pacFileThroughHttps?: string; 
  public get pacFileThroughHttps() {
    return this.getStringAttribute('pac_file_through_https');
  }
  public set pacFileThroughHttps(value: string) {
    this._pacFileThroughHttps = value;
  }
  public resetPacFileThroughHttps() {
    this._pacFileThroughHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileThroughHttpsInput() {
    return this._pacFileThroughHttps;
  }

  // pac_file_url - computed: false, optional: true, required: false
  private _pacFileUrl?: string; 
  public get pacFileUrl() {
    return this.getStringAttribute('pac_file_url');
  }
  public set pacFileUrl(value: string) {
    this._pacFileUrl = value;
  }
  public resetPacFileUrl() {
    this._pacFileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileUrlInput() {
    return this._pacFileUrl;
  }

  // pref_dns_result - computed: true, optional: true, required: false
  private _prefDnsResult?: string; 
  public get prefDnsResult() {
    return this.getStringAttribute('pref_dns_result');
  }
  public set prefDnsResult(value: string) {
    this._prefDnsResult = value;
  }
  public resetPrefDnsResult() {
    this._prefDnsResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefDnsResultInput() {
    return this._prefDnsResult;
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // sec_default_action - computed: true, optional: true, required: false
  private _secDefaultAction?: string; 
  public get secDefaultAction() {
    return this.getStringAttribute('sec_default_action');
  }
  public set secDefaultAction(value: string) {
    this._secDefaultAction = value;
  }
  public resetSecDefaultAction() {
    this._secDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secDefaultActionInput() {
    return this._secDefaultAction;
  }

  // secure_web_proxy - computed: true, optional: true, required: false
  private _secureWebProxy?: string; 
  public get secureWebProxy() {
    return this.getStringAttribute('secure_web_proxy');
  }
  public set secureWebProxy(value: string) {
    this._secureWebProxy = value;
  }
  public resetSecureWebProxy() {
    this._secureWebProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureWebProxyInput() {
    return this._secureWebProxy;
  }

  // socks - computed: true, optional: true, required: false
  private _socks?: string; 
  public get socks() {
    return this.getStringAttribute('socks');
  }
  public set socks(value: string) {
    this._socks = value;
  }
  public resetSocks() {
    this._socks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socksInput() {
    return this._socks;
  }

  // socks_incoming_port - computed: false, optional: true, required: false
  private _socksIncomingPort?: string; 
  public get socksIncomingPort() {
    return this.getStringAttribute('socks_incoming_port');
  }
  public set socksIncomingPort(value: string) {
    this._socksIncomingPort = value;
  }
  public resetSocksIncomingPort() {
    this._socksIncomingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socksIncomingPortInput() {
    return this._socksIncomingPort;
  }

  // ssl_algorithm - computed: true, optional: true, required: false
  private _sslAlgorithm?: string; 
  public get sslAlgorithm() {
    return this.getStringAttribute('ssl_algorithm');
  }
  public set sslAlgorithm(value: string) {
    this._sslAlgorithm = value;
  }
  public resetSslAlgorithm() {
    this._sslAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAlgorithmInput() {
    return this._sslAlgorithm;
  }

  // ssl_dh_bits - computed: true, optional: true, required: false
  private _sslDhBits?: string; 
  public get sslDhBits() {
    return this.getStringAttribute('ssl_dh_bits');
  }
  public set sslDhBits(value: string) {
    this._sslDhBits = value;
  }
  public resetSslDhBits() {
    this._sslDhBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDhBitsInput() {
    return this._sslDhBits;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // strict_guest - computed: true, optional: true, required: false
  private _strictGuest?: string; 
  public get strictGuest() {
    return this.getStringAttribute('strict_guest');
  }
  public set strictGuest(value: string) {
    this._strictGuest = value;
  }
  public resetStrictGuest() {
    this._strictGuest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictGuestInput() {
    return this._strictGuest;
  }

  // trace_auth_no_rsp - computed: true, optional: true, required: false
  private _traceAuthNoRsp?: string; 
  public get traceAuthNoRsp() {
    return this.getStringAttribute('trace_auth_no_rsp');
  }
  public set traceAuthNoRsp(value: string) {
    this._traceAuthNoRsp = value;
  }
  public resetTraceAuthNoRsp() {
    this._traceAuthNoRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceAuthNoRspInput() {
    return this._traceAuthNoRsp;
  }

  // unknown_http_version - computed: true, optional: true, required: false
  private _unknownHttpVersion?: string; 
  public get unknownHttpVersion() {
    return this.getStringAttribute('unknown_http_version');
  }
  public set unknownHttpVersion(value: string) {
    this._unknownHttpVersion = value;
  }
  public resetUnknownHttpVersion() {
    this._unknownHttpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownHttpVersionInput() {
    return this._unknownHttpVersion;
  }

  // user_agent_detect - computed: true, optional: true, required: false
  private _userAgentDetect?: string; 
  public get userAgentDetect() {
    return this.getStringAttribute('user_agent_detect');
  }
  public set userAgentDetect(value: string) {
    this._userAgentDetect = value;
  }
  public resetUserAgentDetect() {
    this._userAgentDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentDetectInput() {
    return this._userAgentDetect;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vrf_select - computed: true, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // pac_policy - computed: false, optional: true, required: false
  private _pacPolicy = new WebproxyExplicitPacPolicyList(this, "pac_policy", false);
  public get pacPolicy() {
    return this._pacPolicy;
  }
  public putPacPolicy(value: WebproxyExplicitPacPolicy[] | cdktf.IResolvable) {
    this._pacPolicy.internalValue = value;
  }
  public resetPacPolicy() {
    this._pacPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacPolicyInput() {
    return this._pacPolicy.internalValue;
  }

  // secure_web_proxy_cert - computed: false, optional: true, required: false
  private _secureWebProxyCert = new WebproxyExplicitSecureWebProxyCertList(this, "secure_web_proxy_cert", true);
  public get secureWebProxyCert() {
    return this._secureWebProxyCert;
  }
  public putSecureWebProxyCert(value: WebproxyExplicitSecureWebProxyCert[] | cdktf.IResolvable) {
    this._secureWebProxyCert.internalValue = value;
  }
  public resetSecureWebProxyCert() {
    this._secureWebProxyCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureWebProxyCertInput() {
    return this._secureWebProxyCert.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_cert: cdktf.stringToTerraform(this._clientCert),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      empty_cert_action: cdktf.stringToTerraform(this._emptyCertAction),
      ftp_incoming_port: cdktf.stringToTerraform(this._ftpIncomingPort),
      ftp_over_http: cdktf.stringToTerraform(this._ftpOverHttp),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      http_connection_mode: cdktf.stringToTerraform(this._httpConnectionMode),
      http_incoming_port: cdktf.stringToTerraform(this._httpIncomingPort),
      https_incoming_port: cdktf.stringToTerraform(this._httpsIncomingPort),
      https_replacement_message: cdktf.stringToTerraform(this._httpsReplacementMessage),
      id: cdktf.stringToTerraform(this._id),
      incoming_ip: cdktf.stringToTerraform(this._incomingIp),
      incoming_ip6: cdktf.stringToTerraform(this._incomingIp6),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ipv6_status: cdktf.stringToTerraform(this._ipv6Status),
      message_upon_server_error: cdktf.stringToTerraform(this._messageUponServerError),
      outgoing_ip: cdktf.stringToTerraform(this._outgoingIp),
      outgoing_ip6: cdktf.stringToTerraform(this._outgoingIp6),
      pac_file_data: cdktf.stringToTerraform(this._pacFileData),
      pac_file_name: cdktf.stringToTerraform(this._pacFileName),
      pac_file_server_port: cdktf.stringToTerraform(this._pacFileServerPort),
      pac_file_server_status: cdktf.stringToTerraform(this._pacFileServerStatus),
      pac_file_through_https: cdktf.stringToTerraform(this._pacFileThroughHttps),
      pac_file_url: cdktf.stringToTerraform(this._pacFileUrl),
      pref_dns_result: cdktf.stringToTerraform(this._prefDnsResult),
      realm: cdktf.stringToTerraform(this._realm),
      sec_default_action: cdktf.stringToTerraform(this._secDefaultAction),
      secure_web_proxy: cdktf.stringToTerraform(this._secureWebProxy),
      socks: cdktf.stringToTerraform(this._socks),
      socks_incoming_port: cdktf.stringToTerraform(this._socksIncomingPort),
      ssl_algorithm: cdktf.stringToTerraform(this._sslAlgorithm),
      ssl_dh_bits: cdktf.stringToTerraform(this._sslDhBits),
      status: cdktf.stringToTerraform(this._status),
      strict_guest: cdktf.stringToTerraform(this._strictGuest),
      trace_auth_no_rsp: cdktf.stringToTerraform(this._traceAuthNoRsp),
      unknown_http_version: cdktf.stringToTerraform(this._unknownHttpVersion),
      user_agent_detect: cdktf.stringToTerraform(this._userAgentDetect),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      pac_policy: cdktf.listMapper(webproxyExplicitPacPolicyToTerraform, true)(this._pacPolicy.internalValue),
      secure_web_proxy_cert: cdktf.listMapper(webproxyExplicitSecureWebProxyCertToTerraform, true)(this._secureWebProxyCert.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      empty_cert_action: {
        value: cdktf.stringToHclTerraform(this._emptyCertAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp_incoming_port: {
        value: cdktf.stringToHclTerraform(this._ftpIncomingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp_over_http: {
        value: cdktf.stringToHclTerraform(this._ftpOverHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_connection_mode: {
        value: cdktf.stringToHclTerraform(this._httpConnectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_incoming_port: {
        value: cdktf.stringToHclTerraform(this._httpIncomingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_incoming_port: {
        value: cdktf.stringToHclTerraform(this._httpsIncomingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_replacement_message: {
        value: cdktf.stringToHclTerraform(this._httpsReplacementMessage),
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
      incoming_ip: {
        value: cdktf.stringToHclTerraform(this._incomingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incoming_ip6: {
        value: cdktf.stringToHclTerraform(this._incomingIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_status: {
        value: cdktf.stringToHclTerraform(this._ipv6Status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_upon_server_error: {
        value: cdktf.stringToHclTerraform(this._messageUponServerError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outgoing_ip: {
        value: cdktf.stringToHclTerraform(this._outgoingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outgoing_ip6: {
        value: cdktf.stringToHclTerraform(this._outgoingIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pac_file_data: {
        value: cdktf.stringToHclTerraform(this._pacFileData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pac_file_name: {
        value: cdktf.stringToHclTerraform(this._pacFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pac_file_server_port: {
        value: cdktf.stringToHclTerraform(this._pacFileServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pac_file_server_status: {
        value: cdktf.stringToHclTerraform(this._pacFileServerStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pac_file_through_https: {
        value: cdktf.stringToHclTerraform(this._pacFileThroughHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pac_file_url: {
        value: cdktf.stringToHclTerraform(this._pacFileUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pref_dns_result: {
        value: cdktf.stringToHclTerraform(this._prefDnsResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sec_default_action: {
        value: cdktf.stringToHclTerraform(this._secDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_web_proxy: {
        value: cdktf.stringToHclTerraform(this._secureWebProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      socks: {
        value: cdktf.stringToHclTerraform(this._socks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      socks_incoming_port: {
        value: cdktf.stringToHclTerraform(this._socksIncomingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_algorithm: {
        value: cdktf.stringToHclTerraform(this._sslAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_dh_bits: {
        value: cdktf.stringToHclTerraform(this._sslDhBits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_guest: {
        value: cdktf.stringToHclTerraform(this._strictGuest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_auth_no_rsp: {
        value: cdktf.stringToHclTerraform(this._traceAuthNoRsp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_http_version: {
        value: cdktf.stringToHclTerraform(this._unknownHttpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_agent_detect: {
        value: cdktf.stringToHclTerraform(this._userAgentDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pac_policy: {
        value: cdktf.listMapperHcl(webproxyExplicitPacPolicyToHclTerraform, true)(this._pacPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebproxyExplicitPacPolicyList",
      },
      secure_web_proxy_cert: {
        value: cdktf.listMapperHcl(webproxyExplicitSecureWebProxyCertToHclTerraform, true)(this._secureWebProxyCert.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebproxyExplicitSecureWebProxyCertList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
