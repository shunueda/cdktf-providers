// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRadiusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#account_key_cert_field UserRadius#account_key_cert_field}
  */
  readonly accountKeyCertField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#account_key_processing UserRadius#account_key_processing}
  */
  readonly accountKeyProcessing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#acct_all_servers UserRadius#acct_all_servers}
  */
  readonly acctAllServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#acct_interim_interval UserRadius#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#all_usergroup UserRadius#all_usergroup}
  */
  readonly allUsergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#auth_type UserRadius#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#ca_cert UserRadius#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#call_station_id_type UserRadius#call_station_id_type}
  */
  readonly callStationIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#client_cert UserRadius#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#delimiter UserRadius#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#dynamic_sort_subtable UserRadius#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#get_all_tables UserRadius#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#group_override_attr_type UserRadius#group_override_attr_type}
  */
  readonly groupOverrideAttrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#h3c_compatibility UserRadius#h3c_compatibility}
  */
  readonly h3CCompatibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#id UserRadius#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#interface UserRadius#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#interface_select_method UserRadius#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#mac_case UserRadius#mac_case}
  */
  readonly macCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#mac_password_delimiter UserRadius#mac_password_delimiter}
  */
  readonly macPasswordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#mac_username_delimiter UserRadius#mac_username_delimiter}
  */
  readonly macUsernameDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#name UserRadius#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#nas_id UserRadius#nas_id}
  */
  readonly nasId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#nas_id_type UserRadius#nas_id_type}
  */
  readonly nasIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#nas_ip UserRadius#nas_ip}
  */
  readonly nasIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#password_encoding UserRadius#password_encoding}
  */
  readonly passwordEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#password_renewal UserRadius#password_renewal}
  */
  readonly passwordRenewal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#radius_coa UserRadius#radius_coa}
  */
  readonly radiusCoa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#radius_port UserRadius#radius_port}
  */
  readonly radiusPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#require_message_authenticator UserRadius#require_message_authenticator}
  */
  readonly requireMessageAuthenticator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso UserRadius#rsso}
  */
  readonly rsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_context_timeout UserRadius#rsso_context_timeout}
  */
  readonly rssoContextTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_endpoint_attribute UserRadius#rsso_endpoint_attribute}
  */
  readonly rssoEndpointAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_endpoint_block_attribute UserRadius#rsso_endpoint_block_attribute}
  */
  readonly rssoEndpointBlockAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_ep_one_ip_only UserRadius#rsso_ep_one_ip_only}
  */
  readonly rssoEpOneIpOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_flush_ip_session UserRadius#rsso_flush_ip_session}
  */
  readonly rssoFlushIpSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_log_flags UserRadius#rsso_log_flags}
  */
  readonly rssoLogFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_log_period UserRadius#rsso_log_period}
  */
  readonly rssoLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_radius_response UserRadius#rsso_radius_response}
  */
  readonly rssoRadiusResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_radius_server_port UserRadius#rsso_radius_server_port}
  */
  readonly rssoRadiusServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_secret UserRadius#rsso_secret}
  */
  readonly rssoSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#rsso_validate_request_secret UserRadius#rsso_validate_request_secret}
  */
  readonly rssoValidateRequestSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#secondary_secret UserRadius#secondary_secret}
  */
  readonly secondarySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#secondary_server UserRadius#secondary_server}
  */
  readonly secondaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#secret UserRadius#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#server UserRadius#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#server_identity_check UserRadius#server_identity_check}
  */
  readonly serverIdentityCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#source_ip UserRadius#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#source_ip_interface UserRadius#source_ip_interface}
  */
  readonly sourceIpInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#sso_attribute UserRadius#sso_attribute}
  */
  readonly ssoAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#sso_attribute_key UserRadius#sso_attribute_key}
  */
  readonly ssoAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#sso_attribute_value_override UserRadius#sso_attribute_value_override}
  */
  readonly ssoAttributeValueOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#status_ttl UserRadius#status_ttl}
  */
  readonly statusTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#switch_controller_acct_fast_framedip_detect UserRadius#switch_controller_acct_fast_framedip_detect}
  */
  readonly switchControllerAcctFastFramedipDetect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#switch_controller_nas_ip_dynamic UserRadius#switch_controller_nas_ip_dynamic}
  */
  readonly switchControllerNasIpDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#switch_controller_service_type UserRadius#switch_controller_service_type}
  */
  readonly switchControllerServiceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#tertiary_secret UserRadius#tertiary_secret}
  */
  readonly tertiarySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#tertiary_server UserRadius#tertiary_server}
  */
  readonly tertiaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#timeout UserRadius#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#tls_min_proto_version UserRadius#tls_min_proto_version}
  */
  readonly tlsMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#transport_protocol UserRadius#transport_protocol}
  */
  readonly transportProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#use_management_vdom UserRadius#use_management_vdom}
  */
  readonly useManagementVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#username_case_sensitive UserRadius#username_case_sensitive}
  */
  readonly usernameCaseSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#vdomparam UserRadius#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#vrf_select UserRadius#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * accounting_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#accounting_server UserRadius#accounting_server}
  */
  readonly accountingServer?: UserRadiusAccountingServer[] | cdktf.IResolvable;
  /**
  * class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#class UserRadius#class}
  */
  readonly class?: UserRadiusClass[] | cdktf.IResolvable;
}
export interface UserRadiusAccountingServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#id UserRadius#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#interface UserRadius#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#interface_select_method UserRadius#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#port UserRadius#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#secret UserRadius#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#server UserRadius#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#source_ip UserRadius#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#status UserRadius#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#vrf_select UserRadius#vrf_select}
  */
  readonly vrfSelect?: number;
}

export function userRadiusAccountingServerToTerraform(struct?: UserRadiusAccountingServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_select_method: cdktf.stringToTerraform(struct!.interfaceSelectMethod),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
    server: cdktf.stringToTerraform(struct!.server),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    status: cdktf.stringToTerraform(struct!.status),
    vrf_select: cdktf.numberToTerraform(struct!.vrfSelect),
  }
}


export function userRadiusAccountingServerToHclTerraform(struct?: UserRadiusAccountingServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_select_method: {
      value: cdktf.stringToHclTerraform(struct!.interfaceSelectMethod),
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_select: {
      value: cdktf.numberToHclTerraform(struct!.vrfSelect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRadiusAccountingServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRadiusAccountingServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceSelectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceSelectMethod = this._interfaceSelectMethod;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._vrfSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfSelect = this._vrfSelect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRadiusAccountingServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._interfaceSelectMethod = undefined;
      this._port = undefined;
      this._secret = undefined;
      this._server = undefined;
      this._sourceIp = undefined;
      this._status = undefined;
      this._vrfSelect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._interface = value.interface;
      this._interfaceSelectMethod = value.interfaceSelectMethod;
      this._port = value.port;
      this._secret = value.secret;
      this._server = value.server;
      this._sourceIp = value.sourceIp;
      this._status = value.status;
      this._vrfSelect = value.vrfSelect;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
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

  // vrf_select - computed: false, optional: true, required: false
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
}

export class UserRadiusAccountingServerList extends cdktf.ComplexList {
  public internalValue? : UserRadiusAccountingServer[] | cdktf.IResolvable

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
  public get(index: number): UserRadiusAccountingServerOutputReference {
    return new UserRadiusAccountingServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRadiusClass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#name UserRadius#name}
  */
  readonly name?: string;
}

export function userRadiusClassToTerraform(struct?: UserRadiusClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userRadiusClassToHclTerraform(struct?: UserRadiusClass | cdktf.IResolvable): any {
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

export class UserRadiusClassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRadiusClass | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserRadiusClass | cdktf.IResolvable | undefined) {
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

export class UserRadiusClassList extends cdktf.ComplexList {
  public internalValue? : UserRadiusClass[] | cdktf.IResolvable

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
  public get(index: number): UserRadiusClassOutputReference {
    return new UserRadiusClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius fortios_user_radius}
*/
export class UserRadius extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRadius resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRadius to import
  * @param importFromId The id of the existing UserRadius that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRadius to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_radius fortios_user_radius} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRadiusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserRadiusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_radius',
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
    this._accountKeyCertField = config.accountKeyCertField;
    this._accountKeyProcessing = config.accountKeyProcessing;
    this._acctAllServers = config.acctAllServers;
    this._acctInterimInterval = config.acctInterimInterval;
    this._allUsergroup = config.allUsergroup;
    this._authType = config.authType;
    this._caCert = config.caCert;
    this._callStationIdType = config.callStationIdType;
    this._clientCert = config.clientCert;
    this._delimiter = config.delimiter;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._groupOverrideAttrType = config.groupOverrideAttrType;
    this._h3CCompatibility = config.h3CCompatibility;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._macCase = config.macCase;
    this._macPasswordDelimiter = config.macPasswordDelimiter;
    this._macUsernameDelimiter = config.macUsernameDelimiter;
    this._name = config.name;
    this._nasId = config.nasId;
    this._nasIdType = config.nasIdType;
    this._nasIp = config.nasIp;
    this._passwordEncoding = config.passwordEncoding;
    this._passwordRenewal = config.passwordRenewal;
    this._radiusCoa = config.radiusCoa;
    this._radiusPort = config.radiusPort;
    this._requireMessageAuthenticator = config.requireMessageAuthenticator;
    this._rsso = config.rsso;
    this._rssoContextTimeout = config.rssoContextTimeout;
    this._rssoEndpointAttribute = config.rssoEndpointAttribute;
    this._rssoEndpointBlockAttribute = config.rssoEndpointBlockAttribute;
    this._rssoEpOneIpOnly = config.rssoEpOneIpOnly;
    this._rssoFlushIpSession = config.rssoFlushIpSession;
    this._rssoLogFlags = config.rssoLogFlags;
    this._rssoLogPeriod = config.rssoLogPeriod;
    this._rssoRadiusResponse = config.rssoRadiusResponse;
    this._rssoRadiusServerPort = config.rssoRadiusServerPort;
    this._rssoSecret = config.rssoSecret;
    this._rssoValidateRequestSecret = config.rssoValidateRequestSecret;
    this._secondarySecret = config.secondarySecret;
    this._secondaryServer = config.secondaryServer;
    this._secret = config.secret;
    this._server = config.server;
    this._serverIdentityCheck = config.serverIdentityCheck;
    this._sourceIp = config.sourceIp;
    this._sourceIpInterface = config.sourceIpInterface;
    this._ssoAttribute = config.ssoAttribute;
    this._ssoAttributeKey = config.ssoAttributeKey;
    this._ssoAttributeValueOverride = config.ssoAttributeValueOverride;
    this._statusTtl = config.statusTtl;
    this._switchControllerAcctFastFramedipDetect = config.switchControllerAcctFastFramedipDetect;
    this._switchControllerNasIpDynamic = config.switchControllerNasIpDynamic;
    this._switchControllerServiceType = config.switchControllerServiceType;
    this._tertiarySecret = config.tertiarySecret;
    this._tertiaryServer = config.tertiaryServer;
    this._timeout = config.timeout;
    this._tlsMinProtoVersion = config.tlsMinProtoVersion;
    this._transportProtocol = config.transportProtocol;
    this._useManagementVdom = config.useManagementVdom;
    this._usernameCaseSensitive = config.usernameCaseSensitive;
    this._vdomparam = config.vdomparam;
    this._vrfSelect = config.vrfSelect;
    this._accountingServer.internalValue = config.accountingServer;
    this._class.internalValue = config.class;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_key_cert_field - computed: true, optional: true, required: false
  private _accountKeyCertField?: string; 
  public get accountKeyCertField() {
    return this.getStringAttribute('account_key_cert_field');
  }
  public set accountKeyCertField(value: string) {
    this._accountKeyCertField = value;
  }
  public resetAccountKeyCertField() {
    this._accountKeyCertField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyCertFieldInput() {
    return this._accountKeyCertField;
  }

  // account_key_processing - computed: true, optional: true, required: false
  private _accountKeyProcessing?: string; 
  public get accountKeyProcessing() {
    return this.getStringAttribute('account_key_processing');
  }
  public set accountKeyProcessing(value: string) {
    this._accountKeyProcessing = value;
  }
  public resetAccountKeyProcessing() {
    this._accountKeyProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyProcessingInput() {
    return this._accountKeyProcessing;
  }

  // acct_all_servers - computed: true, optional: true, required: false
  private _acctAllServers?: string; 
  public get acctAllServers() {
    return this.getStringAttribute('acct_all_servers');
  }
  public set acctAllServers(value: string) {
    this._acctAllServers = value;
  }
  public resetAcctAllServers() {
    this._acctAllServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctAllServersInput() {
    return this._acctAllServers;
  }

  // acct_interim_interval - computed: false, optional: true, required: false
  private _acctInterimInterval?: number; 
  public get acctInterimInterval() {
    return this.getNumberAttribute('acct_interim_interval');
  }
  public set acctInterimInterval(value: number) {
    this._acctInterimInterval = value;
  }
  public resetAcctInterimInterval() {
    this._acctInterimInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctInterimIntervalInput() {
    return this._acctInterimInterval;
  }

  // all_usergroup - computed: true, optional: true, required: false
  private _allUsergroup?: string; 
  public get allUsergroup() {
    return this.getStringAttribute('all_usergroup');
  }
  public set allUsergroup(value: string) {
    this._allUsergroup = value;
  }
  public resetAllUsergroup() {
    this._allUsergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUsergroupInput() {
    return this._allUsergroup;
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

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // call_station_id_type - computed: true, optional: true, required: false
  private _callStationIdType?: string; 
  public get callStationIdType() {
    return this.getStringAttribute('call_station_id_type');
  }
  public set callStationIdType(value: string) {
    this._callStationIdType = value;
  }
  public resetCallStationIdType() {
    this._callStationIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callStationIdTypeInput() {
    return this._callStationIdType;
  }

  // client_cert - computed: false, optional: true, required: false
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

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
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

  // group_override_attr_type - computed: false, optional: true, required: false
  private _groupOverrideAttrType?: string; 
  public get groupOverrideAttrType() {
    return this.getStringAttribute('group_override_attr_type');
  }
  public set groupOverrideAttrType(value: string) {
    this._groupOverrideAttrType = value;
  }
  public resetGroupOverrideAttrType() {
    this._groupOverrideAttrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOverrideAttrTypeInput() {
    return this._groupOverrideAttrType;
  }

  // h3c_compatibility - computed: true, optional: true, required: false
  private _h3CCompatibility?: string; 
  public get h3CCompatibility() {
    return this.getStringAttribute('h3c_compatibility');
  }
  public set h3CCompatibility(value: string) {
    this._h3CCompatibility = value;
  }
  public resetH3CCompatibility() {
    this._h3CCompatibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3CCompatibilityInput() {
    return this._h3CCompatibility;
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

  // mac_case - computed: true, optional: true, required: false
  private _macCase?: string; 
  public get macCase() {
    return this.getStringAttribute('mac_case');
  }
  public set macCase(value: string) {
    this._macCase = value;
  }
  public resetMacCase() {
    this._macCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCaseInput() {
    return this._macCase;
  }

  // mac_password_delimiter - computed: true, optional: true, required: false
  private _macPasswordDelimiter?: string; 
  public get macPasswordDelimiter() {
    return this.getStringAttribute('mac_password_delimiter');
  }
  public set macPasswordDelimiter(value: string) {
    this._macPasswordDelimiter = value;
  }
  public resetMacPasswordDelimiter() {
    this._macPasswordDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macPasswordDelimiterInput() {
    return this._macPasswordDelimiter;
  }

  // mac_username_delimiter - computed: true, optional: true, required: false
  private _macUsernameDelimiter?: string; 
  public get macUsernameDelimiter() {
    return this.getStringAttribute('mac_username_delimiter');
  }
  public set macUsernameDelimiter(value: string) {
    this._macUsernameDelimiter = value;
  }
  public resetMacUsernameDelimiter() {
    this._macUsernameDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macUsernameDelimiterInput() {
    return this._macUsernameDelimiter;
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

  // nas_id - computed: false, optional: true, required: false
  private _nasId?: string; 
  public get nasId() {
    return this.getStringAttribute('nas_id');
  }
  public set nasId(value: string) {
    this._nasId = value;
  }
  public resetNasId() {
    this._nasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIdInput() {
    return this._nasId;
  }

  // nas_id_type - computed: true, optional: true, required: false
  private _nasIdType?: string; 
  public get nasIdType() {
    return this.getStringAttribute('nas_id_type');
  }
  public set nasIdType(value: string) {
    this._nasIdType = value;
  }
  public resetNasIdType() {
    this._nasIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIdTypeInput() {
    return this._nasIdType;
  }

  // nas_ip - computed: true, optional: true, required: false
  private _nasIp?: string; 
  public get nasIp() {
    return this.getStringAttribute('nas_ip');
  }
  public set nasIp(value: string) {
    this._nasIp = value;
  }
  public resetNasIp() {
    this._nasIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIpInput() {
    return this._nasIp;
  }

  // password_encoding - computed: true, optional: true, required: false
  private _passwordEncoding?: string; 
  public get passwordEncoding() {
    return this.getStringAttribute('password_encoding');
  }
  public set passwordEncoding(value: string) {
    this._passwordEncoding = value;
  }
  public resetPasswordEncoding() {
    this._passwordEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordEncodingInput() {
    return this._passwordEncoding;
  }

  // password_renewal - computed: true, optional: true, required: false
  private _passwordRenewal?: string; 
  public get passwordRenewal() {
    return this.getStringAttribute('password_renewal');
  }
  public set passwordRenewal(value: string) {
    this._passwordRenewal = value;
  }
  public resetPasswordRenewal() {
    this._passwordRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRenewalInput() {
    return this._passwordRenewal;
  }

  // radius_coa - computed: true, optional: true, required: false
  private _radiusCoa?: string; 
  public get radiusCoa() {
    return this.getStringAttribute('radius_coa');
  }
  public set radiusCoa(value: string) {
    this._radiusCoa = value;
  }
  public resetRadiusCoa() {
    this._radiusCoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCoaInput() {
    return this._radiusCoa;
  }

  // radius_port - computed: false, optional: true, required: false
  private _radiusPort?: number; 
  public get radiusPort() {
    return this.getNumberAttribute('radius_port');
  }
  public set radiusPort(value: number) {
    this._radiusPort = value;
  }
  public resetRadiusPort() {
    this._radiusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPortInput() {
    return this._radiusPort;
  }

  // require_message_authenticator - computed: true, optional: true, required: false
  private _requireMessageAuthenticator?: string; 
  public get requireMessageAuthenticator() {
    return this.getStringAttribute('require_message_authenticator');
  }
  public set requireMessageAuthenticator(value: string) {
    this._requireMessageAuthenticator = value;
  }
  public resetRequireMessageAuthenticator() {
    this._requireMessageAuthenticator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMessageAuthenticatorInput() {
    return this._requireMessageAuthenticator;
  }

  // rsso - computed: true, optional: true, required: false
  private _rsso?: string; 
  public get rsso() {
    return this.getStringAttribute('rsso');
  }
  public set rsso(value: string) {
    this._rsso = value;
  }
  public resetRsso() {
    this._rsso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoInput() {
    return this._rsso;
  }

  // rsso_context_timeout - computed: true, optional: true, required: false
  private _rssoContextTimeout?: number; 
  public get rssoContextTimeout() {
    return this.getNumberAttribute('rsso_context_timeout');
  }
  public set rssoContextTimeout(value: number) {
    this._rssoContextTimeout = value;
  }
  public resetRssoContextTimeout() {
    this._rssoContextTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoContextTimeoutInput() {
    return this._rssoContextTimeout;
  }

  // rsso_endpoint_attribute - computed: true, optional: true, required: false
  private _rssoEndpointAttribute?: string; 
  public get rssoEndpointAttribute() {
    return this.getStringAttribute('rsso_endpoint_attribute');
  }
  public set rssoEndpointAttribute(value: string) {
    this._rssoEndpointAttribute = value;
  }
  public resetRssoEndpointAttribute() {
    this._rssoEndpointAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoEndpointAttributeInput() {
    return this._rssoEndpointAttribute;
  }

  // rsso_endpoint_block_attribute - computed: false, optional: true, required: false
  private _rssoEndpointBlockAttribute?: string; 
  public get rssoEndpointBlockAttribute() {
    return this.getStringAttribute('rsso_endpoint_block_attribute');
  }
  public set rssoEndpointBlockAttribute(value: string) {
    this._rssoEndpointBlockAttribute = value;
  }
  public resetRssoEndpointBlockAttribute() {
    this._rssoEndpointBlockAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoEndpointBlockAttributeInput() {
    return this._rssoEndpointBlockAttribute;
  }

  // rsso_ep_one_ip_only - computed: true, optional: true, required: false
  private _rssoEpOneIpOnly?: string; 
  public get rssoEpOneIpOnly() {
    return this.getStringAttribute('rsso_ep_one_ip_only');
  }
  public set rssoEpOneIpOnly(value: string) {
    this._rssoEpOneIpOnly = value;
  }
  public resetRssoEpOneIpOnly() {
    this._rssoEpOneIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoEpOneIpOnlyInput() {
    return this._rssoEpOneIpOnly;
  }

  // rsso_flush_ip_session - computed: true, optional: true, required: false
  private _rssoFlushIpSession?: string; 
  public get rssoFlushIpSession() {
    return this.getStringAttribute('rsso_flush_ip_session');
  }
  public set rssoFlushIpSession(value: string) {
    this._rssoFlushIpSession = value;
  }
  public resetRssoFlushIpSession() {
    this._rssoFlushIpSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoFlushIpSessionInput() {
    return this._rssoFlushIpSession;
  }

  // rsso_log_flags - computed: true, optional: true, required: false
  private _rssoLogFlags?: string; 
  public get rssoLogFlags() {
    return this.getStringAttribute('rsso_log_flags');
  }
  public set rssoLogFlags(value: string) {
    this._rssoLogFlags = value;
  }
  public resetRssoLogFlags() {
    this._rssoLogFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoLogFlagsInput() {
    return this._rssoLogFlags;
  }

  // rsso_log_period - computed: false, optional: true, required: false
  private _rssoLogPeriod?: number; 
  public get rssoLogPeriod() {
    return this.getNumberAttribute('rsso_log_period');
  }
  public set rssoLogPeriod(value: number) {
    this._rssoLogPeriod = value;
  }
  public resetRssoLogPeriod() {
    this._rssoLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoLogPeriodInput() {
    return this._rssoLogPeriod;
  }

  // rsso_radius_response - computed: true, optional: true, required: false
  private _rssoRadiusResponse?: string; 
  public get rssoRadiusResponse() {
    return this.getStringAttribute('rsso_radius_response');
  }
  public set rssoRadiusResponse(value: string) {
    this._rssoRadiusResponse = value;
  }
  public resetRssoRadiusResponse() {
    this._rssoRadiusResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoRadiusResponseInput() {
    return this._rssoRadiusResponse;
  }

  // rsso_radius_server_port - computed: true, optional: true, required: false
  private _rssoRadiusServerPort?: number; 
  public get rssoRadiusServerPort() {
    return this.getNumberAttribute('rsso_radius_server_port');
  }
  public set rssoRadiusServerPort(value: number) {
    this._rssoRadiusServerPort = value;
  }
  public resetRssoRadiusServerPort() {
    this._rssoRadiusServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoRadiusServerPortInput() {
    return this._rssoRadiusServerPort;
  }

  // rsso_secret - computed: false, optional: true, required: false
  private _rssoSecret?: string; 
  public get rssoSecret() {
    return this.getStringAttribute('rsso_secret');
  }
  public set rssoSecret(value: string) {
    this._rssoSecret = value;
  }
  public resetRssoSecret() {
    this._rssoSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoSecretInput() {
    return this._rssoSecret;
  }

  // rsso_validate_request_secret - computed: true, optional: true, required: false
  private _rssoValidateRequestSecret?: string; 
  public get rssoValidateRequestSecret() {
    return this.getStringAttribute('rsso_validate_request_secret');
  }
  public set rssoValidateRequestSecret(value: string) {
    this._rssoValidateRequestSecret = value;
  }
  public resetRssoValidateRequestSecret() {
    this._rssoValidateRequestSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoValidateRequestSecretInput() {
    return this._rssoValidateRequestSecret;
  }

  // secondary_secret - computed: false, optional: true, required: false
  private _secondarySecret?: string; 
  public get secondarySecret() {
    return this.getStringAttribute('secondary_secret');
  }
  public set secondarySecret(value: string) {
    this._secondarySecret = value;
  }
  public resetSecondarySecret() {
    this._secondarySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySecretInput() {
    return this._secondarySecret;
  }

  // secondary_server - computed: false, optional: true, required: false
  private _secondaryServer?: string; 
  public get secondaryServer() {
    return this.getStringAttribute('secondary_server');
  }
  public set secondaryServer(value: string) {
    this._secondaryServer = value;
  }
  public resetSecondaryServer() {
    this._secondaryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryServerInput() {
    return this._secondaryServer;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_identity_check - computed: true, optional: true, required: false
  private _serverIdentityCheck?: string; 
  public get serverIdentityCheck() {
    return this.getStringAttribute('server_identity_check');
  }
  public set serverIdentityCheck(value: string) {
    this._serverIdentityCheck = value;
  }
  public resetServerIdentityCheck() {
    this._serverIdentityCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdentityCheckInput() {
    return this._serverIdentityCheck;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip_interface - computed: false, optional: true, required: false
  private _sourceIpInterface?: string; 
  public get sourceIpInterface() {
    return this.getStringAttribute('source_ip_interface');
  }
  public set sourceIpInterface(value: string) {
    this._sourceIpInterface = value;
  }
  public resetSourceIpInterface() {
    this._sourceIpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInterfaceInput() {
    return this._sourceIpInterface;
  }

  // sso_attribute - computed: true, optional: true, required: false
  private _ssoAttribute?: string; 
  public get ssoAttribute() {
    return this.getStringAttribute('sso_attribute');
  }
  public set ssoAttribute(value: string) {
    this._ssoAttribute = value;
  }
  public resetSsoAttribute() {
    this._ssoAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAttributeInput() {
    return this._ssoAttribute;
  }

  // sso_attribute_key - computed: false, optional: true, required: false
  private _ssoAttributeKey?: string; 
  public get ssoAttributeKey() {
    return this.getStringAttribute('sso_attribute_key');
  }
  public set ssoAttributeKey(value: string) {
    this._ssoAttributeKey = value;
  }
  public resetSsoAttributeKey() {
    this._ssoAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAttributeKeyInput() {
    return this._ssoAttributeKey;
  }

  // sso_attribute_value_override - computed: true, optional: true, required: false
  private _ssoAttributeValueOverride?: string; 
  public get ssoAttributeValueOverride() {
    return this.getStringAttribute('sso_attribute_value_override');
  }
  public set ssoAttributeValueOverride(value: string) {
    this._ssoAttributeValueOverride = value;
  }
  public resetSsoAttributeValueOverride() {
    this._ssoAttributeValueOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAttributeValueOverrideInput() {
    return this._ssoAttributeValueOverride;
  }

  // status_ttl - computed: true, optional: true, required: false
  private _statusTtl?: number; 
  public get statusTtl() {
    return this.getNumberAttribute('status_ttl');
  }
  public set statusTtl(value: number) {
    this._statusTtl = value;
  }
  public resetStatusTtl() {
    this._statusTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusTtlInput() {
    return this._statusTtl;
  }

  // switch_controller_acct_fast_framedip_detect - computed: true, optional: true, required: false
  private _switchControllerAcctFastFramedipDetect?: number; 
  public get switchControllerAcctFastFramedipDetect() {
    return this.getNumberAttribute('switch_controller_acct_fast_framedip_detect');
  }
  public set switchControllerAcctFastFramedipDetect(value: number) {
    this._switchControllerAcctFastFramedipDetect = value;
  }
  public resetSwitchControllerAcctFastFramedipDetect() {
    this._switchControllerAcctFastFramedipDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerAcctFastFramedipDetectInput() {
    return this._switchControllerAcctFastFramedipDetect;
  }

  // switch_controller_nas_ip_dynamic - computed: true, optional: true, required: false
  private _switchControllerNasIpDynamic?: string; 
  public get switchControllerNasIpDynamic() {
    return this.getStringAttribute('switch_controller_nas_ip_dynamic');
  }
  public set switchControllerNasIpDynamic(value: string) {
    this._switchControllerNasIpDynamic = value;
  }
  public resetSwitchControllerNasIpDynamic() {
    this._switchControllerNasIpDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerNasIpDynamicInput() {
    return this._switchControllerNasIpDynamic;
  }

  // switch_controller_service_type - computed: false, optional: true, required: false
  private _switchControllerServiceType?: string; 
  public get switchControllerServiceType() {
    return this.getStringAttribute('switch_controller_service_type');
  }
  public set switchControllerServiceType(value: string) {
    this._switchControllerServiceType = value;
  }
  public resetSwitchControllerServiceType() {
    this._switchControllerServiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerServiceTypeInput() {
    return this._switchControllerServiceType;
  }

  // tertiary_secret - computed: false, optional: true, required: false
  private _tertiarySecret?: string; 
  public get tertiarySecret() {
    return this.getStringAttribute('tertiary_secret');
  }
  public set tertiarySecret(value: string) {
    this._tertiarySecret = value;
  }
  public resetTertiarySecret() {
    this._tertiarySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiarySecretInput() {
    return this._tertiarySecret;
  }

  // tertiary_server - computed: false, optional: true, required: false
  private _tertiaryServer?: string; 
  public get tertiaryServer() {
    return this.getStringAttribute('tertiary_server');
  }
  public set tertiaryServer(value: string) {
    this._tertiaryServer = value;
  }
  public resetTertiaryServer() {
    this._tertiaryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryServerInput() {
    return this._tertiaryServer;
  }

  // timeout - computed: true, optional: true, required: false
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

  // tls_min_proto_version - computed: true, optional: true, required: false
  private _tlsMinProtoVersion?: string; 
  public get tlsMinProtoVersion() {
    return this.getStringAttribute('tls_min_proto_version');
  }
  public set tlsMinProtoVersion(value: string) {
    this._tlsMinProtoVersion = value;
  }
  public resetTlsMinProtoVersion() {
    this._tlsMinProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinProtoVersionInput() {
    return this._tlsMinProtoVersion;
  }

  // transport_protocol - computed: true, optional: true, required: false
  private _transportProtocol?: string; 
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
  public set transportProtocol(value: string) {
    this._transportProtocol = value;
  }
  public resetTransportProtocol() {
    this._transportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportProtocolInput() {
    return this._transportProtocol;
  }

  // use_management_vdom - computed: true, optional: true, required: false
  private _useManagementVdom?: string; 
  public get useManagementVdom() {
    return this.getStringAttribute('use_management_vdom');
  }
  public set useManagementVdom(value: string) {
    this._useManagementVdom = value;
  }
  public resetUseManagementVdom() {
    this._useManagementVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagementVdomInput() {
    return this._useManagementVdom;
  }

  // username_case_sensitive - computed: true, optional: true, required: false
  private _usernameCaseSensitive?: string; 
  public get usernameCaseSensitive() {
    return this.getStringAttribute('username_case_sensitive');
  }
  public set usernameCaseSensitive(value: string) {
    this._usernameCaseSensitive = value;
  }
  public resetUsernameCaseSensitive() {
    this._usernameCaseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCaseSensitiveInput() {
    return this._usernameCaseSensitive;
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

  // vrf_select - computed: false, optional: true, required: false
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

  // accounting_server - computed: false, optional: true, required: false
  private _accountingServer = new UserRadiusAccountingServerList(this, "accounting_server", false);
  public get accountingServer() {
    return this._accountingServer;
  }
  public putAccountingServer(value: UserRadiusAccountingServer[] | cdktf.IResolvable) {
    this._accountingServer.internalValue = value;
  }
  public resetAccountingServer() {
    this._accountingServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingServerInput() {
    return this._accountingServer.internalValue;
  }

  // class - computed: false, optional: true, required: false
  private _class = new UserRadiusClassList(this, "class", true);
  public get class() {
    return this._class;
  }
  public putClass(value: UserRadiusClass[] | cdktf.IResolvable) {
    this._class.internalValue = value;
  }
  public resetClass() {
    this._class.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_key_cert_field: cdktf.stringToTerraform(this._accountKeyCertField),
      account_key_processing: cdktf.stringToTerraform(this._accountKeyProcessing),
      acct_all_servers: cdktf.stringToTerraform(this._acctAllServers),
      acct_interim_interval: cdktf.numberToTerraform(this._acctInterimInterval),
      all_usergroup: cdktf.stringToTerraform(this._allUsergroup),
      auth_type: cdktf.stringToTerraform(this._authType),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      call_station_id_type: cdktf.stringToTerraform(this._callStationIdType),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      delimiter: cdktf.stringToTerraform(this._delimiter),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      group_override_attr_type: cdktf.stringToTerraform(this._groupOverrideAttrType),
      h3c_compatibility: cdktf.stringToTerraform(this._h3CCompatibility),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      mac_case: cdktf.stringToTerraform(this._macCase),
      mac_password_delimiter: cdktf.stringToTerraform(this._macPasswordDelimiter),
      mac_username_delimiter: cdktf.stringToTerraform(this._macUsernameDelimiter),
      name: cdktf.stringToTerraform(this._name),
      nas_id: cdktf.stringToTerraform(this._nasId),
      nas_id_type: cdktf.stringToTerraform(this._nasIdType),
      nas_ip: cdktf.stringToTerraform(this._nasIp),
      password_encoding: cdktf.stringToTerraform(this._passwordEncoding),
      password_renewal: cdktf.stringToTerraform(this._passwordRenewal),
      radius_coa: cdktf.stringToTerraform(this._radiusCoa),
      radius_port: cdktf.numberToTerraform(this._radiusPort),
      require_message_authenticator: cdktf.stringToTerraform(this._requireMessageAuthenticator),
      rsso: cdktf.stringToTerraform(this._rsso),
      rsso_context_timeout: cdktf.numberToTerraform(this._rssoContextTimeout),
      rsso_endpoint_attribute: cdktf.stringToTerraform(this._rssoEndpointAttribute),
      rsso_endpoint_block_attribute: cdktf.stringToTerraform(this._rssoEndpointBlockAttribute),
      rsso_ep_one_ip_only: cdktf.stringToTerraform(this._rssoEpOneIpOnly),
      rsso_flush_ip_session: cdktf.stringToTerraform(this._rssoFlushIpSession),
      rsso_log_flags: cdktf.stringToTerraform(this._rssoLogFlags),
      rsso_log_period: cdktf.numberToTerraform(this._rssoLogPeriod),
      rsso_radius_response: cdktf.stringToTerraform(this._rssoRadiusResponse),
      rsso_radius_server_port: cdktf.numberToTerraform(this._rssoRadiusServerPort),
      rsso_secret: cdktf.stringToTerraform(this._rssoSecret),
      rsso_validate_request_secret: cdktf.stringToTerraform(this._rssoValidateRequestSecret),
      secondary_secret: cdktf.stringToTerraform(this._secondarySecret),
      secondary_server: cdktf.stringToTerraform(this._secondaryServer),
      secret: cdktf.stringToTerraform(this._secret),
      server: cdktf.stringToTerraform(this._server),
      server_identity_check: cdktf.stringToTerraform(this._serverIdentityCheck),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip_interface: cdktf.stringToTerraform(this._sourceIpInterface),
      sso_attribute: cdktf.stringToTerraform(this._ssoAttribute),
      sso_attribute_key: cdktf.stringToTerraform(this._ssoAttributeKey),
      sso_attribute_value_override: cdktf.stringToTerraform(this._ssoAttributeValueOverride),
      status_ttl: cdktf.numberToTerraform(this._statusTtl),
      switch_controller_acct_fast_framedip_detect: cdktf.numberToTerraform(this._switchControllerAcctFastFramedipDetect),
      switch_controller_nas_ip_dynamic: cdktf.stringToTerraform(this._switchControllerNasIpDynamic),
      switch_controller_service_type: cdktf.stringToTerraform(this._switchControllerServiceType),
      tertiary_secret: cdktf.stringToTerraform(this._tertiarySecret),
      tertiary_server: cdktf.stringToTerraform(this._tertiaryServer),
      timeout: cdktf.numberToTerraform(this._timeout),
      tls_min_proto_version: cdktf.stringToTerraform(this._tlsMinProtoVersion),
      transport_protocol: cdktf.stringToTerraform(this._transportProtocol),
      use_management_vdom: cdktf.stringToTerraform(this._useManagementVdom),
      username_case_sensitive: cdktf.stringToTerraform(this._usernameCaseSensitive),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      accounting_server: cdktf.listMapper(userRadiusAccountingServerToTerraform, true)(this._accountingServer.internalValue),
      class: cdktf.listMapper(userRadiusClassToTerraform, true)(this._class.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_key_cert_field: {
        value: cdktf.stringToHclTerraform(this._accountKeyCertField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_key_processing: {
        value: cdktf.stringToHclTerraform(this._accountKeyProcessing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acct_all_servers: {
        value: cdktf.stringToHclTerraform(this._acctAllServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acct_interim_interval: {
        value: cdktf.numberToHclTerraform(this._acctInterimInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      all_usergroup: {
        value: cdktf.stringToHclTerraform(this._allUsergroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_station_id_type: {
        value: cdktf.stringToHclTerraform(this._callStationIdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delimiter: {
        value: cdktf.stringToHclTerraform(this._delimiter),
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_override_attr_type: {
        value: cdktf.stringToHclTerraform(this._groupOverrideAttrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      h3c_compatibility: {
        value: cdktf.stringToHclTerraform(this._h3CCompatibility),
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
      mac_case: {
        value: cdktf.stringToHclTerraform(this._macCase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_password_delimiter: {
        value: cdktf.stringToHclTerraform(this._macPasswordDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_username_delimiter: {
        value: cdktf.stringToHclTerraform(this._macUsernameDelimiter),
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
      nas_id: {
        value: cdktf.stringToHclTerraform(this._nasId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nas_id_type: {
        value: cdktf.stringToHclTerraform(this._nasIdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nas_ip: {
        value: cdktf.stringToHclTerraform(this._nasIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_encoding: {
        value: cdktf.stringToHclTerraform(this._passwordEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_renewal: {
        value: cdktf.stringToHclTerraform(this._passwordRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_coa: {
        value: cdktf.stringToHclTerraform(this._radiusCoa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_port: {
        value: cdktf.numberToHclTerraform(this._radiusPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_message_authenticator: {
        value: cdktf.stringToHclTerraform(this._requireMessageAuthenticator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso: {
        value: cdktf.stringToHclTerraform(this._rsso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso_context_timeout: {
        value: cdktf.numberToHclTerraform(this._rssoContextTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rsso_endpoint_attribute: {
        value: cdktf.stringToHclTerraform(this._rssoEndpointAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso_endpoint_block_attribute: {
        value: cdktf.stringToHclTerraform(this._rssoEndpointBlockAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso_ep_one_ip_only: {
        value: cdktf.stringToHclTerraform(this._rssoEpOneIpOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso_flush_ip_session: {
        value: cdktf.stringToHclTerraform(this._rssoFlushIpSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso_log_flags: {
        value: cdktf.stringToHclTerraform(this._rssoLogFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso_log_period: {
        value: cdktf.numberToHclTerraform(this._rssoLogPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rsso_radius_response: {
        value: cdktf.stringToHclTerraform(this._rssoRadiusResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso_radius_server_port: {
        value: cdktf.numberToHclTerraform(this._rssoRadiusServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rsso_secret: {
        value: cdktf.stringToHclTerraform(this._rssoSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso_validate_request_secret: {
        value: cdktf.stringToHclTerraform(this._rssoValidateRequestSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_secret: {
        value: cdktf.stringToHclTerraform(this._secondarySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_server: {
        value: cdktf.stringToHclTerraform(this._secondaryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_identity_check: {
        value: cdktf.stringToHclTerraform(this._serverIdentityCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_interface: {
        value: cdktf.stringToHclTerraform(this._sourceIpInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_attribute: {
        value: cdktf.stringToHclTerraform(this._ssoAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_attribute_key: {
        value: cdktf.stringToHclTerraform(this._ssoAttributeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_attribute_value_override: {
        value: cdktf.stringToHclTerraform(this._ssoAttributeValueOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_ttl: {
        value: cdktf.numberToHclTerraform(this._statusTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_controller_acct_fast_framedip_detect: {
        value: cdktf.numberToHclTerraform(this._switchControllerAcctFastFramedipDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_controller_nas_ip_dynamic: {
        value: cdktf.stringToHclTerraform(this._switchControllerNasIpDynamic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_service_type: {
        value: cdktf.stringToHclTerraform(this._switchControllerServiceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tertiary_secret: {
        value: cdktf.stringToHclTerraform(this._tertiarySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tertiary_server: {
        value: cdktf.stringToHclTerraform(this._tertiaryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_min_proto_version: {
        value: cdktf.stringToHclTerraform(this._tlsMinProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_protocol: {
        value: cdktf.stringToHclTerraform(this._transportProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_management_vdom: {
        value: cdktf.stringToHclTerraform(this._useManagementVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_case_sensitive: {
        value: cdktf.stringToHclTerraform(this._usernameCaseSensitive),
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
      accounting_server: {
        value: cdktf.listMapperHcl(userRadiusAccountingServerToHclTerraform, true)(this._accountingServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserRadiusAccountingServerList",
      },
      class: {
        value: cdktf.listMapperHcl(userRadiusClassToHclTerraform, true)(this._class.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserRadiusClassList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
