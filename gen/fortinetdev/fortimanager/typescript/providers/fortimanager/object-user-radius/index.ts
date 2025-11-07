// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserRadiusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#account_key_cert_field ObjectUserRadius#account_key_cert_field}
  */
  readonly accountKeyCertField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#account_key_processing ObjectUserRadius#account_key_processing}
  */
  readonly accountKeyProcessing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#acct_all_servers ObjectUserRadius#acct_all_servers}
  */
  readonly acctAllServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#acct_interim_interval ObjectUserRadius#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#adom ObjectUserRadius#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#all_usergroup ObjectUserRadius#all_usergroup}
  */
  readonly allUsergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#auth_type ObjectUserRadius#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ca_cert ObjectUserRadius#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#call_station_id_type ObjectUserRadius#call_station_id_type}
  */
  readonly callStationIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#class ObjectUserRadius#class}
  */
  readonly class?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#client_cert ObjectUserRadius#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#delimiter ObjectUserRadius#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dynamic_sort_subtable ObjectUserRadius#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#group_override_attr_type ObjectUserRadius#group_override_attr_type}
  */
  readonly groupOverrideAttrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#h3c_compatibility ObjectUserRadius#h3c_compatibility}
  */
  readonly h3CCompatibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#id ObjectUserRadius#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#interface ObjectUserRadius#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#interface_select_method ObjectUserRadius#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#mac_case ObjectUserRadius#mac_case}
  */
  readonly macCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#mac_password_delimiter ObjectUserRadius#mac_password_delimiter}
  */
  readonly macPasswordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#mac_username_delimiter ObjectUserRadius#mac_username_delimiter}
  */
  readonly macUsernameDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#name ObjectUserRadius#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#nas_id ObjectUserRadius#nas_id}
  */
  readonly nasId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#nas_id_type ObjectUserRadius#nas_id_type}
  */
  readonly nasIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#nas_ip ObjectUserRadius#nas_ip}
  */
  readonly nasIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#password_encoding ObjectUserRadius#password_encoding}
  */
  readonly passwordEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#password_renewal ObjectUserRadius#password_renewal}
  */
  readonly passwordRenewal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#radius_coa ObjectUserRadius#radius_coa}
  */
  readonly radiusCoa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#radius_port ObjectUserRadius#radius_port}
  */
  readonly radiusPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#require_message_authenticator ObjectUserRadius#require_message_authenticator}
  */
  readonly requireMessageAuthenticator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso ObjectUserRadius#rsso}
  */
  readonly rsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_context_timeout ObjectUserRadius#rsso_context_timeout}
  */
  readonly rssoContextTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_endpoint_attribute ObjectUserRadius#rsso_endpoint_attribute}
  */
  readonly rssoEndpointAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_endpoint_block_attribute ObjectUserRadius#rsso_endpoint_block_attribute}
  */
  readonly rssoEndpointBlockAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_ep_one_ip_only ObjectUserRadius#rsso_ep_one_ip_only}
  */
  readonly rssoEpOneIpOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_flush_ip_session ObjectUserRadius#rsso_flush_ip_session}
  */
  readonly rssoFlushIpSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_log_flags ObjectUserRadius#rsso_log_flags}
  */
  readonly rssoLogFlags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_log_period ObjectUserRadius#rsso_log_period}
  */
  readonly rssoLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_radius_response ObjectUserRadius#rsso_radius_response}
  */
  readonly rssoRadiusResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_radius_server_port ObjectUserRadius#rsso_radius_server_port}
  */
  readonly rssoRadiusServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_secret ObjectUserRadius#rsso_secret}
  */
  readonly rssoSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_validate_request_secret ObjectUserRadius#rsso_validate_request_secret}
  */
  readonly rssoValidateRequestSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#scopetype ObjectUserRadius#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#secondary_secret ObjectUserRadius#secondary_secret}
  */
  readonly secondarySecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#secondary_server ObjectUserRadius#secondary_server}
  */
  readonly secondaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#secret ObjectUserRadius#secret}
  */
  readonly secret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#server ObjectUserRadius#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#server_identity_check ObjectUserRadius#server_identity_check}
  */
  readonly serverIdentityCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#source_ip ObjectUserRadius#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#source_ip_interface ObjectUserRadius#source_ip_interface}
  */
  readonly sourceIpInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#sso_attribute ObjectUserRadius#sso_attribute}
  */
  readonly ssoAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#sso_attribute_key ObjectUserRadius#sso_attribute_key}
  */
  readonly ssoAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#sso_attribute_value_override ObjectUserRadius#sso_attribute_value_override}
  */
  readonly ssoAttributeValueOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#status_ttl ObjectUserRadius#status_ttl}
  */
  readonly statusTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#switch_controller_acct_fast_framedip_detect ObjectUserRadius#switch_controller_acct_fast_framedip_detect}
  */
  readonly switchControllerAcctFastFramedipDetect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#switch_controller_nas_ip_dynamic ObjectUserRadius#switch_controller_nas_ip_dynamic}
  */
  readonly switchControllerNasIpDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#switch_controller_service_type ObjectUserRadius#switch_controller_service_type}
  */
  readonly switchControllerServiceType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#tertiary_secret ObjectUserRadius#tertiary_secret}
  */
  readonly tertiarySecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#tertiary_server ObjectUserRadius#tertiary_server}
  */
  readonly tertiaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#timeout ObjectUserRadius#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#tls_min_proto_version ObjectUserRadius#tls_min_proto_version}
  */
  readonly tlsMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#transport_protocol ObjectUserRadius#transport_protocol}
  */
  readonly transportProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#use_management_vdom ObjectUserRadius#use_management_vdom}
  */
  readonly useManagementVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#username_case_sensitive ObjectUserRadius#username_case_sensitive}
  */
  readonly usernameCaseSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#vrf_select ObjectUserRadius#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * accounting_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#accounting_server ObjectUserRadius#accounting_server}
  */
  readonly accountingServer?: ObjectUserRadiusAccountingServer[] | cdktf.IResolvable;
  /**
  * dynamic_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dynamic_mapping ObjectUserRadius#dynamic_mapping}
  */
  readonly dynamicMapping?: ObjectUserRadiusDynamicMapping[] | cdktf.IResolvable;
}
export interface ObjectUserRadiusAccountingServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#id ObjectUserRadius#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#interface ObjectUserRadius#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#interface_select_method ObjectUserRadius#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#port ObjectUserRadius#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#secret ObjectUserRadius#secret}
  */
  readonly secret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#server ObjectUserRadius#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#source_ip ObjectUserRadius#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#status ObjectUserRadius#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#vrf_select ObjectUserRadius#vrf_select}
  */
  readonly vrfSelect?: number;
}

export function objectUserRadiusAccountingServerToTerraform(struct?: ObjectUserRadiusAccountingServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_select_method: cdktf.stringToTerraform(struct!.interfaceSelectMethod),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secret),
    server: cdktf.stringToTerraform(struct!.server),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    status: cdktf.stringToTerraform(struct!.status),
    vrf_select: cdktf.numberToTerraform(struct!.vrfSelect),
  }
}


export function objectUserRadiusAccountingServerToHclTerraform(struct?: ObjectUserRadiusAccountingServer | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secret),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ObjectUserRadiusAccountingServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserRadiusAccountingServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectUserRadiusAccountingServer | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
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

  // secret - computed: true, optional: true, required: false
  private _secret?: string[]; 
  public get secret() {
    return cdktf.Fn.tolist(this.getListAttribute('secret'));
  }
  public set secret(value: string[]) {
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

export class ObjectUserRadiusAccountingServerList extends cdktf.ComplexList {
  public internalValue? : ObjectUserRadiusAccountingServer[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserRadiusAccountingServerOutputReference {
    return new ObjectUserRadiusAccountingServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectUserRadiusDynamicMappingScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#name ObjectUserRadius#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#vdom ObjectUserRadius#vdom}
  */
  readonly vdom?: string;
}

export function objectUserRadiusDynamicMappingScopeToTerraform(struct?: ObjectUserRadiusDynamicMappingScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectUserRadiusDynamicMappingScopeToHclTerraform(struct?: ObjectUserRadiusDynamicMappingScope | cdktf.IResolvable): any {
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
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectUserRadiusDynamicMappingScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserRadiusDynamicMappingScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectUserRadiusDynamicMappingScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class ObjectUserRadiusDynamicMappingScopeList extends cdktf.ComplexList {
  public internalValue? : ObjectUserRadiusDynamicMappingScope[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserRadiusDynamicMappingScopeOutputReference {
    return new ObjectUserRadiusDynamicMappingScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectUserRadiusDynamicMappingAccountingServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#id ObjectUserRadius#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#interface ObjectUserRadius#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#interface_select_method ObjectUserRadius#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#port ObjectUserRadius#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#secret ObjectUserRadius#secret}
  */
  readonly secret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#server ObjectUserRadius#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#source_ip ObjectUserRadius#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#status ObjectUserRadius#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#vrf_select ObjectUserRadius#vrf_select}
  */
  readonly vrfSelect?: number;
}

export function objectUserRadiusDynamicMappingAccountingServerToTerraform(struct?: ObjectUserRadiusDynamicMappingAccountingServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_select_method: cdktf.stringToTerraform(struct!.interfaceSelectMethod),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secret),
    server: cdktf.stringToTerraform(struct!.server),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    status: cdktf.stringToTerraform(struct!.status),
    vrf_select: cdktf.numberToTerraform(struct!.vrfSelect),
  }
}


export function objectUserRadiusDynamicMappingAccountingServerToHclTerraform(struct?: ObjectUserRadiusDynamicMappingAccountingServer | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secret),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ObjectUserRadiusDynamicMappingAccountingServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserRadiusDynamicMappingAccountingServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectUserRadiusDynamicMappingAccountingServer | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
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

  // secret - computed: true, optional: true, required: false
  private _secret?: string[]; 
  public get secret() {
    return cdktf.Fn.tolist(this.getListAttribute('secret'));
  }
  public set secret(value: string[]) {
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

export class ObjectUserRadiusDynamicMappingAccountingServerList extends cdktf.ComplexList {
  public internalValue? : ObjectUserRadiusDynamicMappingAccountingServer[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserRadiusDynamicMappingAccountingServerOutputReference {
    return new ObjectUserRadiusDynamicMappingAccountingServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectUserRadiusDynamicMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#account_key_cert_field ObjectUserRadius#account_key_cert_field}
  */
  readonly accountKeyCertField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#account_key_processing ObjectUserRadius#account_key_processing}
  */
  readonly accountKeyProcessing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#acct_all_servers ObjectUserRadius#acct_all_servers}
  */
  readonly acctAllServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#acct_interim_interval ObjectUserRadius#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#all_usergroup ObjectUserRadius#all_usergroup}
  */
  readonly allUsergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#auth_type ObjectUserRadius#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ca_cert ObjectUserRadius#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#call_station_id_type ObjectUserRadius#call_station_id_type}
  */
  readonly callStationIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#class ObjectUserRadius#class}
  */
  readonly class?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#client_cert ObjectUserRadius#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#delimiter ObjectUserRadius#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_carrier_endpoint_attribute ObjectUserRadius#dp_carrier_endpoint_attribute}
  */
  readonly dpCarrierEndpointAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_carrier_endpoint_block_attribute ObjectUserRadius#dp_carrier_endpoint_block_attribute}
  */
  readonly dpCarrierEndpointBlockAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_context_timeout ObjectUserRadius#dp_context_timeout}
  */
  readonly dpContextTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_flush_ip_session ObjectUserRadius#dp_flush_ip_session}
  */
  readonly dpFlushIpSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_hold_time ObjectUserRadius#dp_hold_time}
  */
  readonly dpHoldTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_http_header ObjectUserRadius#dp_http_header}
  */
  readonly dpHttpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_http_header_fallback ObjectUserRadius#dp_http_header_fallback}
  */
  readonly dpHttpHeaderFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_http_header_status ObjectUserRadius#dp_http_header_status}
  */
  readonly dpHttpHeaderStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_http_header_suppress ObjectUserRadius#dp_http_header_suppress}
  */
  readonly dpHttpHeaderSuppress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_log_dyn_flags ObjectUserRadius#dp_log_dyn_flags}
  */
  readonly dpLogDynFlags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_log_period ObjectUserRadius#dp_log_period}
  */
  readonly dpLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_mem_percent ObjectUserRadius#dp_mem_percent}
  */
  readonly dpMemPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_profile_attribute ObjectUserRadius#dp_profile_attribute}
  */
  readonly dpProfileAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_profile_attribute_key ObjectUserRadius#dp_profile_attribute_key}
  */
  readonly dpProfileAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_radius_response ObjectUserRadius#dp_radius_response}
  */
  readonly dpRadiusResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_radius_server_port ObjectUserRadius#dp_radius_server_port}
  */
  readonly dpRadiusServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_secret ObjectUserRadius#dp_secret}
  */
  readonly dpSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dp_validate_request_secret ObjectUserRadius#dp_validate_request_secret}
  */
  readonly dpValidateRequestSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#dynamic_profile ObjectUserRadius#dynamic_profile}
  */
  readonly dynamicProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#endpoint_translation ObjectUserRadius#endpoint_translation}
  */
  readonly endpointTranslation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_carrier_endpoint_convert_hex ObjectUserRadius#ep_carrier_endpoint_convert_hex}
  */
  readonly epCarrierEndpointConvertHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_carrier_endpoint_header ObjectUserRadius#ep_carrier_endpoint_header}
  */
  readonly epCarrierEndpointHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_carrier_endpoint_header_suppress ObjectUserRadius#ep_carrier_endpoint_header_suppress}
  */
  readonly epCarrierEndpointHeaderSuppress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_carrier_endpoint_prefix ObjectUserRadius#ep_carrier_endpoint_prefix}
  */
  readonly epCarrierEndpointPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_carrier_endpoint_prefix_range_max ObjectUserRadius#ep_carrier_endpoint_prefix_range_max}
  */
  readonly epCarrierEndpointPrefixRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_carrier_endpoint_prefix_range_min ObjectUserRadius#ep_carrier_endpoint_prefix_range_min}
  */
  readonly epCarrierEndpointPrefixRangeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_carrier_endpoint_prefix_string ObjectUserRadius#ep_carrier_endpoint_prefix_string}
  */
  readonly epCarrierEndpointPrefixString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_carrier_endpoint_source ObjectUserRadius#ep_carrier_endpoint_source}
  */
  readonly epCarrierEndpointSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_ip_header ObjectUserRadius#ep_ip_header}
  */
  readonly epIpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_ip_header_suppress ObjectUserRadius#ep_ip_header_suppress}
  */
  readonly epIpHeaderSuppress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_missing_header_fallback ObjectUserRadius#ep_missing_header_fallback}
  */
  readonly epMissingHeaderFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#ep_profile_query_type ObjectUserRadius#ep_profile_query_type}
  */
  readonly epProfileQueryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#group_override_attr_type ObjectUserRadius#group_override_attr_type}
  */
  readonly groupOverrideAttrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#h3c_compatibility ObjectUserRadius#h3c_compatibility}
  */
  readonly h3CCompatibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#interface ObjectUserRadius#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#interface_select_method ObjectUserRadius#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#mac_case ObjectUserRadius#mac_case}
  */
  readonly macCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#mac_password_delimiter ObjectUserRadius#mac_password_delimiter}
  */
  readonly macPasswordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#mac_username_delimiter ObjectUserRadius#mac_username_delimiter}
  */
  readonly macUsernameDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#nas_id ObjectUserRadius#nas_id}
  */
  readonly nasId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#nas_id_type ObjectUserRadius#nas_id_type}
  */
  readonly nasIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#nas_ip ObjectUserRadius#nas_ip}
  */
  readonly nasIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#password_encoding ObjectUserRadius#password_encoding}
  */
  readonly passwordEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#password_renewal ObjectUserRadius#password_renewal}
  */
  readonly passwordRenewal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#radius_coa ObjectUserRadius#radius_coa}
  */
  readonly radiusCoa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#radius_port ObjectUserRadius#radius_port}
  */
  readonly radiusPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#require_message_authenticator ObjectUserRadius#require_message_authenticator}
  */
  readonly requireMessageAuthenticator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso ObjectUserRadius#rsso}
  */
  readonly rsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_context_timeout ObjectUserRadius#rsso_context_timeout}
  */
  readonly rssoContextTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_endpoint_attribute ObjectUserRadius#rsso_endpoint_attribute}
  */
  readonly rssoEndpointAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_endpoint_block_attribute ObjectUserRadius#rsso_endpoint_block_attribute}
  */
  readonly rssoEndpointBlockAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_ep_one_ip_only ObjectUserRadius#rsso_ep_one_ip_only}
  */
  readonly rssoEpOneIpOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_flush_ip_session ObjectUserRadius#rsso_flush_ip_session}
  */
  readonly rssoFlushIpSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_log_flags ObjectUserRadius#rsso_log_flags}
  */
  readonly rssoLogFlags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_log_period ObjectUserRadius#rsso_log_period}
  */
  readonly rssoLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_radius_response ObjectUserRadius#rsso_radius_response}
  */
  readonly rssoRadiusResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_radius_server_port ObjectUserRadius#rsso_radius_server_port}
  */
  readonly rssoRadiusServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_secret ObjectUserRadius#rsso_secret}
  */
  readonly rssoSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#rsso_validate_request_secret ObjectUserRadius#rsso_validate_request_secret}
  */
  readonly rssoValidateRequestSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#secondary_secret ObjectUserRadius#secondary_secret}
  */
  readonly secondarySecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#secondary_server ObjectUserRadius#secondary_server}
  */
  readonly secondaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#secret ObjectUserRadius#secret}
  */
  readonly secret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#server ObjectUserRadius#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#server_identity_check ObjectUserRadius#server_identity_check}
  */
  readonly serverIdentityCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#source_ip ObjectUserRadius#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#source_ip_interface ObjectUserRadius#source_ip_interface}
  */
  readonly sourceIpInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#sso_attribute ObjectUserRadius#sso_attribute}
  */
  readonly ssoAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#sso_attribute_key ObjectUserRadius#sso_attribute_key}
  */
  readonly ssoAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#sso_attribute_value_override ObjectUserRadius#sso_attribute_value_override}
  */
  readonly ssoAttributeValueOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#status_ttl ObjectUserRadius#status_ttl}
  */
  readonly statusTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#switch_controller_acct_fast_framedip_detect ObjectUserRadius#switch_controller_acct_fast_framedip_detect}
  */
  readonly switchControllerAcctFastFramedipDetect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#switch_controller_nas_ip_dynamic ObjectUserRadius#switch_controller_nas_ip_dynamic}
  */
  readonly switchControllerNasIpDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#switch_controller_service_type ObjectUserRadius#switch_controller_service_type}
  */
  readonly switchControllerServiceType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#tertiary_secret ObjectUserRadius#tertiary_secret}
  */
  readonly tertiarySecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#tertiary_server ObjectUserRadius#tertiary_server}
  */
  readonly tertiaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#timeout ObjectUserRadius#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#tls_min_proto_version ObjectUserRadius#tls_min_proto_version}
  */
  readonly tlsMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#transport_protocol ObjectUserRadius#transport_protocol}
  */
  readonly transportProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#use_group_for_profile ObjectUserRadius#use_group_for_profile}
  */
  readonly useGroupForProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#use_management_vdom ObjectUserRadius#use_management_vdom}
  */
  readonly useManagementVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#username_case_sensitive ObjectUserRadius#username_case_sensitive}
  */
  readonly usernameCaseSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#vrf_select ObjectUserRadius#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#_scope ObjectUserRadius#_scope}
  */
  readonly scope?: ObjectUserRadiusDynamicMappingScope[] | cdktf.IResolvable;
  /**
  * accounting_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#accounting_server ObjectUserRadius#accounting_server}
  */
  readonly accountingServer?: ObjectUserRadiusDynamicMappingAccountingServer[] | cdktf.IResolvable;
}

export function objectUserRadiusDynamicMappingToTerraform(struct?: ObjectUserRadiusDynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_key_cert_field: cdktf.stringToTerraform(struct!.accountKeyCertField),
    account_key_processing: cdktf.stringToTerraform(struct!.accountKeyProcessing),
    acct_all_servers: cdktf.stringToTerraform(struct!.acctAllServers),
    acct_interim_interval: cdktf.numberToTerraform(struct!.acctInterimInterval),
    all_usergroup: cdktf.stringToTerraform(struct!.allUsergroup),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    call_station_id_type: cdktf.stringToTerraform(struct!.callStationIdType),
    class: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.class),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    dp_carrier_endpoint_attribute: cdktf.stringToTerraform(struct!.dpCarrierEndpointAttribute),
    dp_carrier_endpoint_block_attribute: cdktf.stringToTerraform(struct!.dpCarrierEndpointBlockAttribute),
    dp_context_timeout: cdktf.numberToTerraform(struct!.dpContextTimeout),
    dp_flush_ip_session: cdktf.stringToTerraform(struct!.dpFlushIpSession),
    dp_hold_time: cdktf.numberToTerraform(struct!.dpHoldTime),
    dp_http_header: cdktf.stringToTerraform(struct!.dpHttpHeader),
    dp_http_header_fallback: cdktf.stringToTerraform(struct!.dpHttpHeaderFallback),
    dp_http_header_status: cdktf.stringToTerraform(struct!.dpHttpHeaderStatus),
    dp_http_header_suppress: cdktf.stringToTerraform(struct!.dpHttpHeaderSuppress),
    dp_log_dyn_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dpLogDynFlags),
    dp_log_period: cdktf.numberToTerraform(struct!.dpLogPeriod),
    dp_mem_percent: cdktf.numberToTerraform(struct!.dpMemPercent),
    dp_profile_attribute: cdktf.stringToTerraform(struct!.dpProfileAttribute),
    dp_profile_attribute_key: cdktf.stringToTerraform(struct!.dpProfileAttributeKey),
    dp_radius_response: cdktf.stringToTerraform(struct!.dpRadiusResponse),
    dp_radius_server_port: cdktf.numberToTerraform(struct!.dpRadiusServerPort),
    dp_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dpSecret),
    dp_validate_request_secret: cdktf.stringToTerraform(struct!.dpValidateRequestSecret),
    dynamic_profile: cdktf.stringToTerraform(struct!.dynamicProfile),
    endpoint_translation: cdktf.stringToTerraform(struct!.endpointTranslation),
    ep_carrier_endpoint_convert_hex: cdktf.stringToTerraform(struct!.epCarrierEndpointConvertHex),
    ep_carrier_endpoint_header: cdktf.stringToTerraform(struct!.epCarrierEndpointHeader),
    ep_carrier_endpoint_header_suppress: cdktf.stringToTerraform(struct!.epCarrierEndpointHeaderSuppress),
    ep_carrier_endpoint_prefix: cdktf.stringToTerraform(struct!.epCarrierEndpointPrefix),
    ep_carrier_endpoint_prefix_range_max: cdktf.numberToTerraform(struct!.epCarrierEndpointPrefixRangeMax),
    ep_carrier_endpoint_prefix_range_min: cdktf.numberToTerraform(struct!.epCarrierEndpointPrefixRangeMin),
    ep_carrier_endpoint_prefix_string: cdktf.stringToTerraform(struct!.epCarrierEndpointPrefixString),
    ep_carrier_endpoint_source: cdktf.stringToTerraform(struct!.epCarrierEndpointSource),
    ep_ip_header: cdktf.stringToTerraform(struct!.epIpHeader),
    ep_ip_header_suppress: cdktf.stringToTerraform(struct!.epIpHeaderSuppress),
    ep_missing_header_fallback: cdktf.stringToTerraform(struct!.epMissingHeaderFallback),
    ep_profile_query_type: cdktf.stringToTerraform(struct!.epProfileQueryType),
    group_override_attr_type: cdktf.stringToTerraform(struct!.groupOverrideAttrType),
    h3c_compatibility: cdktf.stringToTerraform(struct!.h3CCompatibility),
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_select_method: cdktf.stringToTerraform(struct!.interfaceSelectMethod),
    mac_case: cdktf.stringToTerraform(struct!.macCase),
    mac_password_delimiter: cdktf.stringToTerraform(struct!.macPasswordDelimiter),
    mac_username_delimiter: cdktf.stringToTerraform(struct!.macUsernameDelimiter),
    nas_id: cdktf.stringToTerraform(struct!.nasId),
    nas_id_type: cdktf.stringToTerraform(struct!.nasIdType),
    nas_ip: cdktf.stringToTerraform(struct!.nasIp),
    password_encoding: cdktf.stringToTerraform(struct!.passwordEncoding),
    password_renewal: cdktf.stringToTerraform(struct!.passwordRenewal),
    radius_coa: cdktf.stringToTerraform(struct!.radiusCoa),
    radius_port: cdktf.numberToTerraform(struct!.radiusPort),
    require_message_authenticator: cdktf.stringToTerraform(struct!.requireMessageAuthenticator),
    rsso: cdktf.stringToTerraform(struct!.rsso),
    rsso_context_timeout: cdktf.numberToTerraform(struct!.rssoContextTimeout),
    rsso_endpoint_attribute: cdktf.stringToTerraform(struct!.rssoEndpointAttribute),
    rsso_endpoint_block_attribute: cdktf.stringToTerraform(struct!.rssoEndpointBlockAttribute),
    rsso_ep_one_ip_only: cdktf.stringToTerraform(struct!.rssoEpOneIpOnly),
    rsso_flush_ip_session: cdktf.stringToTerraform(struct!.rssoFlushIpSession),
    rsso_log_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rssoLogFlags),
    rsso_log_period: cdktf.numberToTerraform(struct!.rssoLogPeriod),
    rsso_radius_response: cdktf.stringToTerraform(struct!.rssoRadiusResponse),
    rsso_radius_server_port: cdktf.numberToTerraform(struct!.rssoRadiusServerPort),
    rsso_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rssoSecret),
    rsso_validate_request_secret: cdktf.stringToTerraform(struct!.rssoValidateRequestSecret),
    secondary_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondarySecret),
    secondary_server: cdktf.stringToTerraform(struct!.secondaryServer),
    secret: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secret),
    server: cdktf.stringToTerraform(struct!.server),
    server_identity_check: cdktf.stringToTerraform(struct!.serverIdentityCheck),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIpInterface),
    sso_attribute: cdktf.stringToTerraform(struct!.ssoAttribute),
    sso_attribute_key: cdktf.stringToTerraform(struct!.ssoAttributeKey),
    sso_attribute_value_override: cdktf.stringToTerraform(struct!.ssoAttributeValueOverride),
    status_ttl: cdktf.numberToTerraform(struct!.statusTtl),
    switch_controller_acct_fast_framedip_detect: cdktf.numberToTerraform(struct!.switchControllerAcctFastFramedipDetect),
    switch_controller_nas_ip_dynamic: cdktf.stringToTerraform(struct!.switchControllerNasIpDynamic),
    switch_controller_service_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switchControllerServiceType),
    tertiary_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tertiarySecret),
    tertiary_server: cdktf.stringToTerraform(struct!.tertiaryServer),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tls_min_proto_version: cdktf.stringToTerraform(struct!.tlsMinProtoVersion),
    transport_protocol: cdktf.stringToTerraform(struct!.transportProtocol),
    use_group_for_profile: cdktf.stringToTerraform(struct!.useGroupForProfile),
    use_management_vdom: cdktf.stringToTerraform(struct!.useManagementVdom),
    username_case_sensitive: cdktf.stringToTerraform(struct!.usernameCaseSensitive),
    vrf_select: cdktf.numberToTerraform(struct!.vrfSelect),
    _scope: cdktf.listMapper(objectUserRadiusDynamicMappingScopeToTerraform, true)(struct!.scope),
    accounting_server: cdktf.listMapper(objectUserRadiusDynamicMappingAccountingServerToTerraform, true)(struct!.accountingServer),
  }
}


export function objectUserRadiusDynamicMappingToHclTerraform(struct?: ObjectUserRadiusDynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_key_cert_field: {
      value: cdktf.stringToHclTerraform(struct!.accountKeyCertField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_key_processing: {
      value: cdktf.stringToHclTerraform(struct!.accountKeyProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acct_all_servers: {
      value: cdktf.stringToHclTerraform(struct!.acctAllServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acct_interim_interval: {
      value: cdktf.numberToHclTerraform(struct!.acctInterimInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_usergroup: {
      value: cdktf.stringToHclTerraform(struct!.allUsergroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_station_id_type: {
      value: cdktf.stringToHclTerraform(struct!.callStationIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.class),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_carrier_endpoint_attribute: {
      value: cdktf.stringToHclTerraform(struct!.dpCarrierEndpointAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_carrier_endpoint_block_attribute: {
      value: cdktf.stringToHclTerraform(struct!.dpCarrierEndpointBlockAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_context_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dpContextTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dp_flush_ip_session: {
      value: cdktf.stringToHclTerraform(struct!.dpFlushIpSession),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_hold_time: {
      value: cdktf.numberToHclTerraform(struct!.dpHoldTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dp_http_header: {
      value: cdktf.stringToHclTerraform(struct!.dpHttpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_http_header_fallback: {
      value: cdktf.stringToHclTerraform(struct!.dpHttpHeaderFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_http_header_status: {
      value: cdktf.stringToHclTerraform(struct!.dpHttpHeaderStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_http_header_suppress: {
      value: cdktf.stringToHclTerraform(struct!.dpHttpHeaderSuppress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_log_dyn_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dpLogDynFlags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dp_log_period: {
      value: cdktf.numberToHclTerraform(struct!.dpLogPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dp_mem_percent: {
      value: cdktf.numberToHclTerraform(struct!.dpMemPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dp_profile_attribute: {
      value: cdktf.stringToHclTerraform(struct!.dpProfileAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_profile_attribute_key: {
      value: cdktf.stringToHclTerraform(struct!.dpProfileAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_radius_response: {
      value: cdktf.stringToHclTerraform(struct!.dpRadiusResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_radius_server_port: {
      value: cdktf.numberToHclTerraform(struct!.dpRadiusServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dp_secret: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dpSecret),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dp_validate_request_secret: {
      value: cdktf.stringToHclTerraform(struct!.dpValidateRequestSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_profile: {
      value: cdktf.stringToHclTerraform(struct!.dynamicProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_translation: {
      value: cdktf.stringToHclTerraform(struct!.endpointTranslation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_carrier_endpoint_convert_hex: {
      value: cdktf.stringToHclTerraform(struct!.epCarrierEndpointConvertHex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_carrier_endpoint_header: {
      value: cdktf.stringToHclTerraform(struct!.epCarrierEndpointHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_carrier_endpoint_header_suppress: {
      value: cdktf.stringToHclTerraform(struct!.epCarrierEndpointHeaderSuppress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_carrier_endpoint_prefix: {
      value: cdktf.stringToHclTerraform(struct!.epCarrierEndpointPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_carrier_endpoint_prefix_range_max: {
      value: cdktf.numberToHclTerraform(struct!.epCarrierEndpointPrefixRangeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ep_carrier_endpoint_prefix_range_min: {
      value: cdktf.numberToHclTerraform(struct!.epCarrierEndpointPrefixRangeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ep_carrier_endpoint_prefix_string: {
      value: cdktf.stringToHclTerraform(struct!.epCarrierEndpointPrefixString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_carrier_endpoint_source: {
      value: cdktf.stringToHclTerraform(struct!.epCarrierEndpointSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_ip_header: {
      value: cdktf.stringToHclTerraform(struct!.epIpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_ip_header_suppress: {
      value: cdktf.stringToHclTerraform(struct!.epIpHeaderSuppress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_missing_header_fallback: {
      value: cdktf.stringToHclTerraform(struct!.epMissingHeaderFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_profile_query_type: {
      value: cdktf.stringToHclTerraform(struct!.epProfileQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_override_attr_type: {
      value: cdktf.stringToHclTerraform(struct!.groupOverrideAttrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    h3c_compatibility: {
      value: cdktf.stringToHclTerraform(struct!.h3CCompatibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    mac_case: {
      value: cdktf.stringToHclTerraform(struct!.macCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_password_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.macPasswordDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_username_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.macUsernameDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nas_id: {
      value: cdktf.stringToHclTerraform(struct!.nasId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nas_id_type: {
      value: cdktf.stringToHclTerraform(struct!.nasIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nas_ip: {
      value: cdktf.stringToHclTerraform(struct!.nasIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_encoding: {
      value: cdktf.stringToHclTerraform(struct!.passwordEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_renewal: {
      value: cdktf.stringToHclTerraform(struct!.passwordRenewal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_coa: {
      value: cdktf.stringToHclTerraform(struct!.radiusCoa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_port: {
      value: cdktf.numberToHclTerraform(struct!.radiusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_message_authenticator: {
      value: cdktf.stringToHclTerraform(struct!.requireMessageAuthenticator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsso: {
      value: cdktf.stringToHclTerraform(struct!.rsso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsso_context_timeout: {
      value: cdktf.numberToHclTerraform(struct!.rssoContextTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsso_endpoint_attribute: {
      value: cdktf.stringToHclTerraform(struct!.rssoEndpointAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsso_endpoint_block_attribute: {
      value: cdktf.stringToHclTerraform(struct!.rssoEndpointBlockAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsso_ep_one_ip_only: {
      value: cdktf.stringToHclTerraform(struct!.rssoEpOneIpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsso_flush_ip_session: {
      value: cdktf.stringToHclTerraform(struct!.rssoFlushIpSession),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsso_log_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rssoLogFlags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rsso_log_period: {
      value: cdktf.numberToHclTerraform(struct!.rssoLogPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsso_radius_response: {
      value: cdktf.stringToHclTerraform(struct!.rssoRadiusResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsso_radius_server_port: {
      value: cdktf.numberToHclTerraform(struct!.rssoRadiusServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsso_secret: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rssoSecret),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rsso_validate_request_secret: {
      value: cdktf.stringToHclTerraform(struct!.rssoValidateRequestSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_secret: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secondarySecret),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    secondary_server: {
      value: cdktf.stringToHclTerraform(struct!.secondaryServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secret),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_identity_check: {
      value: cdktf.stringToHclTerraform(struct!.serverIdentityCheck),
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
    source_ip_interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIpInterface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sso_attribute: {
      value: cdktf.stringToHclTerraform(struct!.ssoAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_attribute_key: {
      value: cdktf.stringToHclTerraform(struct!.ssoAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_attribute_value_override: {
      value: cdktf.stringToHclTerraform(struct!.ssoAttributeValueOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_ttl: {
      value: cdktf.numberToHclTerraform(struct!.statusTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch_controller_acct_fast_framedip_detect: {
      value: cdktf.numberToHclTerraform(struct!.switchControllerAcctFastFramedipDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch_controller_nas_ip_dynamic: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerNasIpDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_service_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.switchControllerServiceType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tertiary_secret: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tertiarySecret),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tertiary_server: {
      value: cdktf.stringToHclTerraform(struct!.tertiaryServer),
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
    tls_min_proto_version: {
      value: cdktf.stringToHclTerraform(struct!.tlsMinProtoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_protocol: {
      value: cdktf.stringToHclTerraform(struct!.transportProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_group_for_profile: {
      value: cdktf.stringToHclTerraform(struct!.useGroupForProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_management_vdom: {
      value: cdktf.stringToHclTerraform(struct!.useManagementVdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_case_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.usernameCaseSensitive),
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
    _scope: {
      value: cdktf.listMapperHcl(objectUserRadiusDynamicMappingScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectUserRadiusDynamicMappingScopeList",
    },
    accounting_server: {
      value: cdktf.listMapperHcl(objectUserRadiusDynamicMappingAccountingServerToHclTerraform, true)(struct!.accountingServer),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectUserRadiusDynamicMappingAccountingServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectUserRadiusDynamicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserRadiusDynamicMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKeyCertField !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKeyCertField = this._accountKeyCertField;
    }
    if (this._accountKeyProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKeyProcessing = this._accountKeyProcessing;
    }
    if (this._acctAllServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctAllServers = this._acctAllServers;
    }
    if (this._acctInterimInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctInterimInterval = this._acctInterimInterval;
    }
    if (this._allUsergroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.allUsergroup = this._allUsergroup;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._callStationIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.callStationIdType = this._callStationIdType;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._dpCarrierEndpointAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpCarrierEndpointAttribute = this._dpCarrierEndpointAttribute;
    }
    if (this._dpCarrierEndpointBlockAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpCarrierEndpointBlockAttribute = this._dpCarrierEndpointBlockAttribute;
    }
    if (this._dpContextTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpContextTimeout = this._dpContextTimeout;
    }
    if (this._dpFlushIpSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpFlushIpSession = this._dpFlushIpSession;
    }
    if (this._dpHoldTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpHoldTime = this._dpHoldTime;
    }
    if (this._dpHttpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpHttpHeader = this._dpHttpHeader;
    }
    if (this._dpHttpHeaderFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpHttpHeaderFallback = this._dpHttpHeaderFallback;
    }
    if (this._dpHttpHeaderStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpHttpHeaderStatus = this._dpHttpHeaderStatus;
    }
    if (this._dpHttpHeaderSuppress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpHttpHeaderSuppress = this._dpHttpHeaderSuppress;
    }
    if (this._dpLogDynFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpLogDynFlags = this._dpLogDynFlags;
    }
    if (this._dpLogPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpLogPeriod = this._dpLogPeriod;
    }
    if (this._dpMemPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpMemPercent = this._dpMemPercent;
    }
    if (this._dpProfileAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpProfileAttribute = this._dpProfileAttribute;
    }
    if (this._dpProfileAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpProfileAttributeKey = this._dpProfileAttributeKey;
    }
    if (this._dpRadiusResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpRadiusResponse = this._dpRadiusResponse;
    }
    if (this._dpRadiusServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpRadiusServerPort = this._dpRadiusServerPort;
    }
    if (this._dpSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpSecret = this._dpSecret;
    }
    if (this._dpValidateRequestSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpValidateRequestSecret = this._dpValidateRequestSecret;
    }
    if (this._dynamicProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicProfile = this._dynamicProfile;
    }
    if (this._endpointTranslation !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointTranslation = this._endpointTranslation;
    }
    if (this._epCarrierEndpointConvertHex !== undefined) {
      hasAnyValues = true;
      internalValueResult.epCarrierEndpointConvertHex = this._epCarrierEndpointConvertHex;
    }
    if (this._epCarrierEndpointHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.epCarrierEndpointHeader = this._epCarrierEndpointHeader;
    }
    if (this._epCarrierEndpointHeaderSuppress !== undefined) {
      hasAnyValues = true;
      internalValueResult.epCarrierEndpointHeaderSuppress = this._epCarrierEndpointHeaderSuppress;
    }
    if (this._epCarrierEndpointPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.epCarrierEndpointPrefix = this._epCarrierEndpointPrefix;
    }
    if (this._epCarrierEndpointPrefixRangeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.epCarrierEndpointPrefixRangeMax = this._epCarrierEndpointPrefixRangeMax;
    }
    if (this._epCarrierEndpointPrefixRangeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.epCarrierEndpointPrefixRangeMin = this._epCarrierEndpointPrefixRangeMin;
    }
    if (this._epCarrierEndpointPrefixString !== undefined) {
      hasAnyValues = true;
      internalValueResult.epCarrierEndpointPrefixString = this._epCarrierEndpointPrefixString;
    }
    if (this._epCarrierEndpointSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.epCarrierEndpointSource = this._epCarrierEndpointSource;
    }
    if (this._epIpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.epIpHeader = this._epIpHeader;
    }
    if (this._epIpHeaderSuppress !== undefined) {
      hasAnyValues = true;
      internalValueResult.epIpHeaderSuppress = this._epIpHeaderSuppress;
    }
    if (this._epMissingHeaderFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.epMissingHeaderFallback = this._epMissingHeaderFallback;
    }
    if (this._epProfileQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.epProfileQueryType = this._epProfileQueryType;
    }
    if (this._groupOverrideAttrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupOverrideAttrType = this._groupOverrideAttrType;
    }
    if (this._h3CCompatibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3CCompatibility = this._h3CCompatibility;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceSelectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceSelectMethod = this._interfaceSelectMethod;
    }
    if (this._macCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.macCase = this._macCase;
    }
    if (this._macPasswordDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.macPasswordDelimiter = this._macPasswordDelimiter;
    }
    if (this._macUsernameDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.macUsernameDelimiter = this._macUsernameDelimiter;
    }
    if (this._nasId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nasId = this._nasId;
    }
    if (this._nasIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nasIdType = this._nasIdType;
    }
    if (this._nasIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nasIp = this._nasIp;
    }
    if (this._passwordEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordEncoding = this._passwordEncoding;
    }
    if (this._passwordRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRenewal = this._passwordRenewal;
    }
    if (this._radiusCoa !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCoa = this._radiusCoa;
    }
    if (this._radiusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusPort = this._radiusPort;
    }
    if (this._requireMessageAuthenticator !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMessageAuthenticator = this._requireMessageAuthenticator;
    }
    if (this._rsso !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsso = this._rsso;
    }
    if (this._rssoContextTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoContextTimeout = this._rssoContextTimeout;
    }
    if (this._rssoEndpointAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoEndpointAttribute = this._rssoEndpointAttribute;
    }
    if (this._rssoEndpointBlockAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoEndpointBlockAttribute = this._rssoEndpointBlockAttribute;
    }
    if (this._rssoEpOneIpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoEpOneIpOnly = this._rssoEpOneIpOnly;
    }
    if (this._rssoFlushIpSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoFlushIpSession = this._rssoFlushIpSession;
    }
    if (this._rssoLogFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoLogFlags = this._rssoLogFlags;
    }
    if (this._rssoLogPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoLogPeriod = this._rssoLogPeriod;
    }
    if (this._rssoRadiusResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoRadiusResponse = this._rssoRadiusResponse;
    }
    if (this._rssoRadiusServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoRadiusServerPort = this._rssoRadiusServerPort;
    }
    if (this._rssoSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoSecret = this._rssoSecret;
    }
    if (this._rssoValidateRequestSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssoValidateRequestSecret = this._rssoValidateRequestSecret;
    }
    if (this._secondarySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondarySecret = this._secondarySecret;
    }
    if (this._secondaryServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryServer = this._secondaryServer;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._serverIdentityCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIdentityCheck = this._serverIdentityCheck;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIpInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpInterface = this._sourceIpInterface;
    }
    if (this._ssoAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoAttribute = this._ssoAttribute;
    }
    if (this._ssoAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoAttributeKey = this._ssoAttributeKey;
    }
    if (this._ssoAttributeValueOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoAttributeValueOverride = this._ssoAttributeValueOverride;
    }
    if (this._statusTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusTtl = this._statusTtl;
    }
    if (this._switchControllerAcctFastFramedipDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerAcctFastFramedipDetect = this._switchControllerAcctFastFramedipDetect;
    }
    if (this._switchControllerNasIpDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerNasIpDynamic = this._switchControllerNasIpDynamic;
    }
    if (this._switchControllerServiceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerServiceType = this._switchControllerServiceType;
    }
    if (this._tertiarySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tertiarySecret = this._tertiarySecret;
    }
    if (this._tertiaryServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.tertiaryServer = this._tertiaryServer;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tlsMinProtoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMinProtoVersion = this._tlsMinProtoVersion;
    }
    if (this._transportProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportProtocol = this._transportProtocol;
    }
    if (this._useGroupForProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGroupForProfile = this._useGroupForProfile;
    }
    if (this._useManagementVdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.useManagementVdom = this._useManagementVdom;
    }
    if (this._usernameCaseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameCaseSensitive = this._usernameCaseSensitive;
    }
    if (this._vrfSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfSelect = this._vrfSelect;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._accountingServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingServer = this._accountingServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectUserRadiusDynamicMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountKeyCertField = undefined;
      this._accountKeyProcessing = undefined;
      this._acctAllServers = undefined;
      this._acctInterimInterval = undefined;
      this._allUsergroup = undefined;
      this._authType = undefined;
      this._caCert = undefined;
      this._callStationIdType = undefined;
      this._class = undefined;
      this._clientCert = undefined;
      this._delimiter = undefined;
      this._dpCarrierEndpointAttribute = undefined;
      this._dpCarrierEndpointBlockAttribute = undefined;
      this._dpContextTimeout = undefined;
      this._dpFlushIpSession = undefined;
      this._dpHoldTime = undefined;
      this._dpHttpHeader = undefined;
      this._dpHttpHeaderFallback = undefined;
      this._dpHttpHeaderStatus = undefined;
      this._dpHttpHeaderSuppress = undefined;
      this._dpLogDynFlags = undefined;
      this._dpLogPeriod = undefined;
      this._dpMemPercent = undefined;
      this._dpProfileAttribute = undefined;
      this._dpProfileAttributeKey = undefined;
      this._dpRadiusResponse = undefined;
      this._dpRadiusServerPort = undefined;
      this._dpSecret = undefined;
      this._dpValidateRequestSecret = undefined;
      this._dynamicProfile = undefined;
      this._endpointTranslation = undefined;
      this._epCarrierEndpointConvertHex = undefined;
      this._epCarrierEndpointHeader = undefined;
      this._epCarrierEndpointHeaderSuppress = undefined;
      this._epCarrierEndpointPrefix = undefined;
      this._epCarrierEndpointPrefixRangeMax = undefined;
      this._epCarrierEndpointPrefixRangeMin = undefined;
      this._epCarrierEndpointPrefixString = undefined;
      this._epCarrierEndpointSource = undefined;
      this._epIpHeader = undefined;
      this._epIpHeaderSuppress = undefined;
      this._epMissingHeaderFallback = undefined;
      this._epProfileQueryType = undefined;
      this._groupOverrideAttrType = undefined;
      this._h3CCompatibility = undefined;
      this._interface = undefined;
      this._interfaceSelectMethod = undefined;
      this._macCase = undefined;
      this._macPasswordDelimiter = undefined;
      this._macUsernameDelimiter = undefined;
      this._nasId = undefined;
      this._nasIdType = undefined;
      this._nasIp = undefined;
      this._passwordEncoding = undefined;
      this._passwordRenewal = undefined;
      this._radiusCoa = undefined;
      this._radiusPort = undefined;
      this._requireMessageAuthenticator = undefined;
      this._rsso = undefined;
      this._rssoContextTimeout = undefined;
      this._rssoEndpointAttribute = undefined;
      this._rssoEndpointBlockAttribute = undefined;
      this._rssoEpOneIpOnly = undefined;
      this._rssoFlushIpSession = undefined;
      this._rssoLogFlags = undefined;
      this._rssoLogPeriod = undefined;
      this._rssoRadiusResponse = undefined;
      this._rssoRadiusServerPort = undefined;
      this._rssoSecret = undefined;
      this._rssoValidateRequestSecret = undefined;
      this._secondarySecret = undefined;
      this._secondaryServer = undefined;
      this._secret = undefined;
      this._server = undefined;
      this._serverIdentityCheck = undefined;
      this._sourceIp = undefined;
      this._sourceIpInterface = undefined;
      this._ssoAttribute = undefined;
      this._ssoAttributeKey = undefined;
      this._ssoAttributeValueOverride = undefined;
      this._statusTtl = undefined;
      this._switchControllerAcctFastFramedipDetect = undefined;
      this._switchControllerNasIpDynamic = undefined;
      this._switchControllerServiceType = undefined;
      this._tertiarySecret = undefined;
      this._tertiaryServer = undefined;
      this._timeout = undefined;
      this._tlsMinProtoVersion = undefined;
      this._transportProtocol = undefined;
      this._useGroupForProfile = undefined;
      this._useManagementVdom = undefined;
      this._usernameCaseSensitive = undefined;
      this._vrfSelect = undefined;
      this._scope.internalValue = undefined;
      this._accountingServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountKeyCertField = value.accountKeyCertField;
      this._accountKeyProcessing = value.accountKeyProcessing;
      this._acctAllServers = value.acctAllServers;
      this._acctInterimInterval = value.acctInterimInterval;
      this._allUsergroup = value.allUsergroup;
      this._authType = value.authType;
      this._caCert = value.caCert;
      this._callStationIdType = value.callStationIdType;
      this._class = value.class;
      this._clientCert = value.clientCert;
      this._delimiter = value.delimiter;
      this._dpCarrierEndpointAttribute = value.dpCarrierEndpointAttribute;
      this._dpCarrierEndpointBlockAttribute = value.dpCarrierEndpointBlockAttribute;
      this._dpContextTimeout = value.dpContextTimeout;
      this._dpFlushIpSession = value.dpFlushIpSession;
      this._dpHoldTime = value.dpHoldTime;
      this._dpHttpHeader = value.dpHttpHeader;
      this._dpHttpHeaderFallback = value.dpHttpHeaderFallback;
      this._dpHttpHeaderStatus = value.dpHttpHeaderStatus;
      this._dpHttpHeaderSuppress = value.dpHttpHeaderSuppress;
      this._dpLogDynFlags = value.dpLogDynFlags;
      this._dpLogPeriod = value.dpLogPeriod;
      this._dpMemPercent = value.dpMemPercent;
      this._dpProfileAttribute = value.dpProfileAttribute;
      this._dpProfileAttributeKey = value.dpProfileAttributeKey;
      this._dpRadiusResponse = value.dpRadiusResponse;
      this._dpRadiusServerPort = value.dpRadiusServerPort;
      this._dpSecret = value.dpSecret;
      this._dpValidateRequestSecret = value.dpValidateRequestSecret;
      this._dynamicProfile = value.dynamicProfile;
      this._endpointTranslation = value.endpointTranslation;
      this._epCarrierEndpointConvertHex = value.epCarrierEndpointConvertHex;
      this._epCarrierEndpointHeader = value.epCarrierEndpointHeader;
      this._epCarrierEndpointHeaderSuppress = value.epCarrierEndpointHeaderSuppress;
      this._epCarrierEndpointPrefix = value.epCarrierEndpointPrefix;
      this._epCarrierEndpointPrefixRangeMax = value.epCarrierEndpointPrefixRangeMax;
      this._epCarrierEndpointPrefixRangeMin = value.epCarrierEndpointPrefixRangeMin;
      this._epCarrierEndpointPrefixString = value.epCarrierEndpointPrefixString;
      this._epCarrierEndpointSource = value.epCarrierEndpointSource;
      this._epIpHeader = value.epIpHeader;
      this._epIpHeaderSuppress = value.epIpHeaderSuppress;
      this._epMissingHeaderFallback = value.epMissingHeaderFallback;
      this._epProfileQueryType = value.epProfileQueryType;
      this._groupOverrideAttrType = value.groupOverrideAttrType;
      this._h3CCompatibility = value.h3CCompatibility;
      this._interface = value.interface;
      this._interfaceSelectMethod = value.interfaceSelectMethod;
      this._macCase = value.macCase;
      this._macPasswordDelimiter = value.macPasswordDelimiter;
      this._macUsernameDelimiter = value.macUsernameDelimiter;
      this._nasId = value.nasId;
      this._nasIdType = value.nasIdType;
      this._nasIp = value.nasIp;
      this._passwordEncoding = value.passwordEncoding;
      this._passwordRenewal = value.passwordRenewal;
      this._radiusCoa = value.radiusCoa;
      this._radiusPort = value.radiusPort;
      this._requireMessageAuthenticator = value.requireMessageAuthenticator;
      this._rsso = value.rsso;
      this._rssoContextTimeout = value.rssoContextTimeout;
      this._rssoEndpointAttribute = value.rssoEndpointAttribute;
      this._rssoEndpointBlockAttribute = value.rssoEndpointBlockAttribute;
      this._rssoEpOneIpOnly = value.rssoEpOneIpOnly;
      this._rssoFlushIpSession = value.rssoFlushIpSession;
      this._rssoLogFlags = value.rssoLogFlags;
      this._rssoLogPeriod = value.rssoLogPeriod;
      this._rssoRadiusResponse = value.rssoRadiusResponse;
      this._rssoRadiusServerPort = value.rssoRadiusServerPort;
      this._rssoSecret = value.rssoSecret;
      this._rssoValidateRequestSecret = value.rssoValidateRequestSecret;
      this._secondarySecret = value.secondarySecret;
      this._secondaryServer = value.secondaryServer;
      this._secret = value.secret;
      this._server = value.server;
      this._serverIdentityCheck = value.serverIdentityCheck;
      this._sourceIp = value.sourceIp;
      this._sourceIpInterface = value.sourceIpInterface;
      this._ssoAttribute = value.ssoAttribute;
      this._ssoAttributeKey = value.ssoAttributeKey;
      this._ssoAttributeValueOverride = value.ssoAttributeValueOverride;
      this._statusTtl = value.statusTtl;
      this._switchControllerAcctFastFramedipDetect = value.switchControllerAcctFastFramedipDetect;
      this._switchControllerNasIpDynamic = value.switchControllerNasIpDynamic;
      this._switchControllerServiceType = value.switchControllerServiceType;
      this._tertiarySecret = value.tertiarySecret;
      this._tertiaryServer = value.tertiaryServer;
      this._timeout = value.timeout;
      this._tlsMinProtoVersion = value.tlsMinProtoVersion;
      this._transportProtocol = value.transportProtocol;
      this._useGroupForProfile = value.useGroupForProfile;
      this._useManagementVdom = value.useManagementVdom;
      this._usernameCaseSensitive = value.usernameCaseSensitive;
      this._vrfSelect = value.vrfSelect;
      this._scope.internalValue = value.scope;
      this._accountingServer.internalValue = value.accountingServer;
    }
  }

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

  // class - computed: true, optional: true, required: false
  private _class?: string[]; 
  public get class() {
    return cdktf.Fn.tolist(this.getListAttribute('class'));
  }
  public set class(value: string[]) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
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

  // dp_carrier_endpoint_attribute - computed: false, optional: true, required: false
  private _dpCarrierEndpointAttribute?: string; 
  public get dpCarrierEndpointAttribute() {
    return this.getStringAttribute('dp_carrier_endpoint_attribute');
  }
  public set dpCarrierEndpointAttribute(value: string) {
    this._dpCarrierEndpointAttribute = value;
  }
  public resetDpCarrierEndpointAttribute() {
    this._dpCarrierEndpointAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpCarrierEndpointAttributeInput() {
    return this._dpCarrierEndpointAttribute;
  }

  // dp_carrier_endpoint_block_attribute - computed: false, optional: true, required: false
  private _dpCarrierEndpointBlockAttribute?: string; 
  public get dpCarrierEndpointBlockAttribute() {
    return this.getStringAttribute('dp_carrier_endpoint_block_attribute');
  }
  public set dpCarrierEndpointBlockAttribute(value: string) {
    this._dpCarrierEndpointBlockAttribute = value;
  }
  public resetDpCarrierEndpointBlockAttribute() {
    this._dpCarrierEndpointBlockAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpCarrierEndpointBlockAttributeInput() {
    return this._dpCarrierEndpointBlockAttribute;
  }

  // dp_context_timeout - computed: false, optional: true, required: false
  private _dpContextTimeout?: number; 
  public get dpContextTimeout() {
    return this.getNumberAttribute('dp_context_timeout');
  }
  public set dpContextTimeout(value: number) {
    this._dpContextTimeout = value;
  }
  public resetDpContextTimeout() {
    this._dpContextTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpContextTimeoutInput() {
    return this._dpContextTimeout;
  }

  // dp_flush_ip_session - computed: false, optional: true, required: false
  private _dpFlushIpSession?: string; 
  public get dpFlushIpSession() {
    return this.getStringAttribute('dp_flush_ip_session');
  }
  public set dpFlushIpSession(value: string) {
    this._dpFlushIpSession = value;
  }
  public resetDpFlushIpSession() {
    this._dpFlushIpSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpFlushIpSessionInput() {
    return this._dpFlushIpSession;
  }

  // dp_hold_time - computed: false, optional: true, required: false
  private _dpHoldTime?: number; 
  public get dpHoldTime() {
    return this.getNumberAttribute('dp_hold_time');
  }
  public set dpHoldTime(value: number) {
    this._dpHoldTime = value;
  }
  public resetDpHoldTime() {
    this._dpHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpHoldTimeInput() {
    return this._dpHoldTime;
  }

  // dp_http_header - computed: false, optional: true, required: false
  private _dpHttpHeader?: string; 
  public get dpHttpHeader() {
    return this.getStringAttribute('dp_http_header');
  }
  public set dpHttpHeader(value: string) {
    this._dpHttpHeader = value;
  }
  public resetDpHttpHeader() {
    this._dpHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpHttpHeaderInput() {
    return this._dpHttpHeader;
  }

  // dp_http_header_fallback - computed: false, optional: true, required: false
  private _dpHttpHeaderFallback?: string; 
  public get dpHttpHeaderFallback() {
    return this.getStringAttribute('dp_http_header_fallback');
  }
  public set dpHttpHeaderFallback(value: string) {
    this._dpHttpHeaderFallback = value;
  }
  public resetDpHttpHeaderFallback() {
    this._dpHttpHeaderFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpHttpHeaderFallbackInput() {
    return this._dpHttpHeaderFallback;
  }

  // dp_http_header_status - computed: false, optional: true, required: false
  private _dpHttpHeaderStatus?: string; 
  public get dpHttpHeaderStatus() {
    return this.getStringAttribute('dp_http_header_status');
  }
  public set dpHttpHeaderStatus(value: string) {
    this._dpHttpHeaderStatus = value;
  }
  public resetDpHttpHeaderStatus() {
    this._dpHttpHeaderStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpHttpHeaderStatusInput() {
    return this._dpHttpHeaderStatus;
  }

  // dp_http_header_suppress - computed: false, optional: true, required: false
  private _dpHttpHeaderSuppress?: string; 
  public get dpHttpHeaderSuppress() {
    return this.getStringAttribute('dp_http_header_suppress');
  }
  public set dpHttpHeaderSuppress(value: string) {
    this._dpHttpHeaderSuppress = value;
  }
  public resetDpHttpHeaderSuppress() {
    this._dpHttpHeaderSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpHttpHeaderSuppressInput() {
    return this._dpHttpHeaderSuppress;
  }

  // dp_log_dyn_flags - computed: true, optional: true, required: false
  private _dpLogDynFlags?: string[]; 
  public get dpLogDynFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('dp_log_dyn_flags'));
  }
  public set dpLogDynFlags(value: string[]) {
    this._dpLogDynFlags = value;
  }
  public resetDpLogDynFlags() {
    this._dpLogDynFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpLogDynFlagsInput() {
    return this._dpLogDynFlags;
  }

  // dp_log_period - computed: false, optional: true, required: false
  private _dpLogPeriod?: number; 
  public get dpLogPeriod() {
    return this.getNumberAttribute('dp_log_period');
  }
  public set dpLogPeriod(value: number) {
    this._dpLogPeriod = value;
  }
  public resetDpLogPeriod() {
    this._dpLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpLogPeriodInput() {
    return this._dpLogPeriod;
  }

  // dp_mem_percent - computed: false, optional: true, required: false
  private _dpMemPercent?: number; 
  public get dpMemPercent() {
    return this.getNumberAttribute('dp_mem_percent');
  }
  public set dpMemPercent(value: number) {
    this._dpMemPercent = value;
  }
  public resetDpMemPercent() {
    this._dpMemPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpMemPercentInput() {
    return this._dpMemPercent;
  }

  // dp_profile_attribute - computed: false, optional: true, required: false
  private _dpProfileAttribute?: string; 
  public get dpProfileAttribute() {
    return this.getStringAttribute('dp_profile_attribute');
  }
  public set dpProfileAttribute(value: string) {
    this._dpProfileAttribute = value;
  }
  public resetDpProfileAttribute() {
    this._dpProfileAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpProfileAttributeInput() {
    return this._dpProfileAttribute;
  }

  // dp_profile_attribute_key - computed: false, optional: true, required: false
  private _dpProfileAttributeKey?: string; 
  public get dpProfileAttributeKey() {
    return this.getStringAttribute('dp_profile_attribute_key');
  }
  public set dpProfileAttributeKey(value: string) {
    this._dpProfileAttributeKey = value;
  }
  public resetDpProfileAttributeKey() {
    this._dpProfileAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpProfileAttributeKeyInput() {
    return this._dpProfileAttributeKey;
  }

  // dp_radius_response - computed: false, optional: true, required: false
  private _dpRadiusResponse?: string; 
  public get dpRadiusResponse() {
    return this.getStringAttribute('dp_radius_response');
  }
  public set dpRadiusResponse(value: string) {
    this._dpRadiusResponse = value;
  }
  public resetDpRadiusResponse() {
    this._dpRadiusResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpRadiusResponseInput() {
    return this._dpRadiusResponse;
  }

  // dp_radius_server_port - computed: false, optional: true, required: false
  private _dpRadiusServerPort?: number; 
  public get dpRadiusServerPort() {
    return this.getNumberAttribute('dp_radius_server_port');
  }
  public set dpRadiusServerPort(value: number) {
    this._dpRadiusServerPort = value;
  }
  public resetDpRadiusServerPort() {
    this._dpRadiusServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpRadiusServerPortInput() {
    return this._dpRadiusServerPort;
  }

  // dp_secret - computed: true, optional: true, required: false
  private _dpSecret?: string[]; 
  public get dpSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('dp_secret'));
  }
  public set dpSecret(value: string[]) {
    this._dpSecret = value;
  }
  public resetDpSecret() {
    this._dpSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpSecretInput() {
    return this._dpSecret;
  }

  // dp_validate_request_secret - computed: false, optional: true, required: false
  private _dpValidateRequestSecret?: string; 
  public get dpValidateRequestSecret() {
    return this.getStringAttribute('dp_validate_request_secret');
  }
  public set dpValidateRequestSecret(value: string) {
    this._dpValidateRequestSecret = value;
  }
  public resetDpValidateRequestSecret() {
    this._dpValidateRequestSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpValidateRequestSecretInput() {
    return this._dpValidateRequestSecret;
  }

  // dynamic_profile - computed: false, optional: true, required: false
  private _dynamicProfile?: string; 
  public get dynamicProfile() {
    return this.getStringAttribute('dynamic_profile');
  }
  public set dynamicProfile(value: string) {
    this._dynamicProfile = value;
  }
  public resetDynamicProfile() {
    this._dynamicProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileInput() {
    return this._dynamicProfile;
  }

  // endpoint_translation - computed: false, optional: true, required: false
  private _endpointTranslation?: string; 
  public get endpointTranslation() {
    return this.getStringAttribute('endpoint_translation');
  }
  public set endpointTranslation(value: string) {
    this._endpointTranslation = value;
  }
  public resetEndpointTranslation() {
    this._endpointTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTranslationInput() {
    return this._endpointTranslation;
  }

  // ep_carrier_endpoint_convert_hex - computed: false, optional: true, required: false
  private _epCarrierEndpointConvertHex?: string; 
  public get epCarrierEndpointConvertHex() {
    return this.getStringAttribute('ep_carrier_endpoint_convert_hex');
  }
  public set epCarrierEndpointConvertHex(value: string) {
    this._epCarrierEndpointConvertHex = value;
  }
  public resetEpCarrierEndpointConvertHex() {
    this._epCarrierEndpointConvertHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epCarrierEndpointConvertHexInput() {
    return this._epCarrierEndpointConvertHex;
  }

  // ep_carrier_endpoint_header - computed: false, optional: true, required: false
  private _epCarrierEndpointHeader?: string; 
  public get epCarrierEndpointHeader() {
    return this.getStringAttribute('ep_carrier_endpoint_header');
  }
  public set epCarrierEndpointHeader(value: string) {
    this._epCarrierEndpointHeader = value;
  }
  public resetEpCarrierEndpointHeader() {
    this._epCarrierEndpointHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epCarrierEndpointHeaderInput() {
    return this._epCarrierEndpointHeader;
  }

  // ep_carrier_endpoint_header_suppress - computed: false, optional: true, required: false
  private _epCarrierEndpointHeaderSuppress?: string; 
  public get epCarrierEndpointHeaderSuppress() {
    return this.getStringAttribute('ep_carrier_endpoint_header_suppress');
  }
  public set epCarrierEndpointHeaderSuppress(value: string) {
    this._epCarrierEndpointHeaderSuppress = value;
  }
  public resetEpCarrierEndpointHeaderSuppress() {
    this._epCarrierEndpointHeaderSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epCarrierEndpointHeaderSuppressInput() {
    return this._epCarrierEndpointHeaderSuppress;
  }

  // ep_carrier_endpoint_prefix - computed: false, optional: true, required: false
  private _epCarrierEndpointPrefix?: string; 
  public get epCarrierEndpointPrefix() {
    return this.getStringAttribute('ep_carrier_endpoint_prefix');
  }
  public set epCarrierEndpointPrefix(value: string) {
    this._epCarrierEndpointPrefix = value;
  }
  public resetEpCarrierEndpointPrefix() {
    this._epCarrierEndpointPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epCarrierEndpointPrefixInput() {
    return this._epCarrierEndpointPrefix;
  }

  // ep_carrier_endpoint_prefix_range_max - computed: false, optional: true, required: false
  private _epCarrierEndpointPrefixRangeMax?: number; 
  public get epCarrierEndpointPrefixRangeMax() {
    return this.getNumberAttribute('ep_carrier_endpoint_prefix_range_max');
  }
  public set epCarrierEndpointPrefixRangeMax(value: number) {
    this._epCarrierEndpointPrefixRangeMax = value;
  }
  public resetEpCarrierEndpointPrefixRangeMax() {
    this._epCarrierEndpointPrefixRangeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epCarrierEndpointPrefixRangeMaxInput() {
    return this._epCarrierEndpointPrefixRangeMax;
  }

  // ep_carrier_endpoint_prefix_range_min - computed: false, optional: true, required: false
  private _epCarrierEndpointPrefixRangeMin?: number; 
  public get epCarrierEndpointPrefixRangeMin() {
    return this.getNumberAttribute('ep_carrier_endpoint_prefix_range_min');
  }
  public set epCarrierEndpointPrefixRangeMin(value: number) {
    this._epCarrierEndpointPrefixRangeMin = value;
  }
  public resetEpCarrierEndpointPrefixRangeMin() {
    this._epCarrierEndpointPrefixRangeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epCarrierEndpointPrefixRangeMinInput() {
    return this._epCarrierEndpointPrefixRangeMin;
  }

  // ep_carrier_endpoint_prefix_string - computed: false, optional: true, required: false
  private _epCarrierEndpointPrefixString?: string; 
  public get epCarrierEndpointPrefixString() {
    return this.getStringAttribute('ep_carrier_endpoint_prefix_string');
  }
  public set epCarrierEndpointPrefixString(value: string) {
    this._epCarrierEndpointPrefixString = value;
  }
  public resetEpCarrierEndpointPrefixString() {
    this._epCarrierEndpointPrefixString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epCarrierEndpointPrefixStringInput() {
    return this._epCarrierEndpointPrefixString;
  }

  // ep_carrier_endpoint_source - computed: false, optional: true, required: false
  private _epCarrierEndpointSource?: string; 
  public get epCarrierEndpointSource() {
    return this.getStringAttribute('ep_carrier_endpoint_source');
  }
  public set epCarrierEndpointSource(value: string) {
    this._epCarrierEndpointSource = value;
  }
  public resetEpCarrierEndpointSource() {
    this._epCarrierEndpointSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epCarrierEndpointSourceInput() {
    return this._epCarrierEndpointSource;
  }

  // ep_ip_header - computed: false, optional: true, required: false
  private _epIpHeader?: string; 
  public get epIpHeader() {
    return this.getStringAttribute('ep_ip_header');
  }
  public set epIpHeader(value: string) {
    this._epIpHeader = value;
  }
  public resetEpIpHeader() {
    this._epIpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epIpHeaderInput() {
    return this._epIpHeader;
  }

  // ep_ip_header_suppress - computed: false, optional: true, required: false
  private _epIpHeaderSuppress?: string; 
  public get epIpHeaderSuppress() {
    return this.getStringAttribute('ep_ip_header_suppress');
  }
  public set epIpHeaderSuppress(value: string) {
    this._epIpHeaderSuppress = value;
  }
  public resetEpIpHeaderSuppress() {
    this._epIpHeaderSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epIpHeaderSuppressInput() {
    return this._epIpHeaderSuppress;
  }

  // ep_missing_header_fallback - computed: false, optional: true, required: false
  private _epMissingHeaderFallback?: string; 
  public get epMissingHeaderFallback() {
    return this.getStringAttribute('ep_missing_header_fallback');
  }
  public set epMissingHeaderFallback(value: string) {
    this._epMissingHeaderFallback = value;
  }
  public resetEpMissingHeaderFallback() {
    this._epMissingHeaderFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epMissingHeaderFallbackInput() {
    return this._epMissingHeaderFallback;
  }

  // ep_profile_query_type - computed: false, optional: true, required: false
  private _epProfileQueryType?: string; 
  public get epProfileQueryType() {
    return this.getStringAttribute('ep_profile_query_type');
  }
  public set epProfileQueryType(value: string) {
    this._epProfileQueryType = value;
  }
  public resetEpProfileQueryType() {
    this._epProfileQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epProfileQueryTypeInput() {
    return this._epProfileQueryType;
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

  // rsso_context_timeout - computed: false, optional: true, required: false
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

  // rsso_endpoint_attribute - computed: false, optional: true, required: false
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

  // rsso_flush_ip_session - computed: false, optional: true, required: false
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
  private _rssoLogFlags?: string[]; 
  public get rssoLogFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('rsso_log_flags'));
  }
  public set rssoLogFlags(value: string[]) {
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

  // rsso_radius_response - computed: false, optional: true, required: false
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

  // rsso_radius_server_port - computed: false, optional: true, required: false
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

  // rsso_secret - computed: true, optional: true, required: false
  private _rssoSecret?: string[]; 
  public get rssoSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('rsso_secret'));
  }
  public set rssoSecret(value: string[]) {
    this._rssoSecret = value;
  }
  public resetRssoSecret() {
    this._rssoSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoSecretInput() {
    return this._rssoSecret;
  }

  // rsso_validate_request_secret - computed: false, optional: true, required: false
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

  // secondary_secret - computed: true, optional: true, required: false
  private _secondarySecret?: string[]; 
  public get secondarySecret() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_secret'));
  }
  public set secondarySecret(value: string[]) {
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

  // secret - computed: true, optional: true, required: false
  private _secret?: string[]; 
  public get secret() {
    return cdktf.Fn.tolist(this.getListAttribute('secret'));
  }
  public set secret(value: string[]) {
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

  // source_ip_interface - computed: true, optional: true, required: false
  private _sourceIpInterface?: string[]; 
  public get sourceIpInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_interface'));
  }
  public set sourceIpInterface(value: string[]) {
    this._sourceIpInterface = value;
  }
  public resetSourceIpInterface() {
    this._sourceIpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInterfaceInput() {
    return this._sourceIpInterface;
  }

  // sso_attribute - computed: false, optional: true, required: false
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

  // switch_controller_service_type - computed: true, optional: true, required: false
  private _switchControllerServiceType?: string[]; 
  public get switchControllerServiceType() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_controller_service_type'));
  }
  public set switchControllerServiceType(value: string[]) {
    this._switchControllerServiceType = value;
  }
  public resetSwitchControllerServiceType() {
    this._switchControllerServiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerServiceTypeInput() {
    return this._switchControllerServiceType;
  }

  // tertiary_secret - computed: true, optional: true, required: false
  private _tertiarySecret?: string[]; 
  public get tertiarySecret() {
    return cdktf.Fn.tolist(this.getListAttribute('tertiary_secret'));
  }
  public set tertiarySecret(value: string[]) {
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

  // use_group_for_profile - computed: false, optional: true, required: false
  private _useGroupForProfile?: string; 
  public get useGroupForProfile() {
    return this.getStringAttribute('use_group_for_profile');
  }
  public set useGroupForProfile(value: string) {
    this._useGroupForProfile = value;
  }
  public resetUseGroupForProfile() {
    this._useGroupForProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGroupForProfileInput() {
    return this._useGroupForProfile;
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

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectUserRadiusDynamicMappingScopeList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectUserRadiusDynamicMappingScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // accounting_server - computed: false, optional: true, required: false
  private _accountingServer = new ObjectUserRadiusDynamicMappingAccountingServerList(this, "accounting_server", false);
  public get accountingServer() {
    return this._accountingServer;
  }
  public putAccountingServer(value: ObjectUserRadiusDynamicMappingAccountingServer[] | cdktf.IResolvable) {
    this._accountingServer.internalValue = value;
  }
  public resetAccountingServer() {
    this._accountingServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingServerInput() {
    return this._accountingServer.internalValue;
  }
}

export class ObjectUserRadiusDynamicMappingList extends cdktf.ComplexList {
  public internalValue? : ObjectUserRadiusDynamicMapping[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserRadiusDynamicMappingOutputReference {
    return new ObjectUserRadiusDynamicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius fortimanager_object_user_radius}
*/
export class ObjectUserRadius extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserRadius resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserRadius to import
  * @param importFromId The id of the existing ObjectUserRadius that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserRadius to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius fortimanager_object_user_radius} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserRadiusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectUserRadiusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_radius',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._adom = config.adom;
    this._allUsergroup = config.allUsergroup;
    this._authType = config.authType;
    this._caCert = config.caCert;
    this._callStationIdType = config.callStationIdType;
    this._class = config.class;
    this._clientCert = config.clientCert;
    this._delimiter = config.delimiter;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
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
    this._scopetype = config.scopetype;
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
    this._vrfSelect = config.vrfSelect;
    this._accountingServer.internalValue = config.accountingServer;
    this._dynamicMapping.internalValue = config.dynamicMapping;
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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // class - computed: true, optional: true, required: false
  private _class?: string[]; 
  public get class() {
    return cdktf.Fn.tolist(this.getListAttribute('class'));
  }
  public set class(value: string[]) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
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

  // rsso_context_timeout - computed: false, optional: true, required: false
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

  // rsso_endpoint_attribute - computed: false, optional: true, required: false
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

  // rsso_flush_ip_session - computed: false, optional: true, required: false
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
  private _rssoLogFlags?: string[]; 
  public get rssoLogFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('rsso_log_flags'));
  }
  public set rssoLogFlags(value: string[]) {
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

  // rsso_radius_response - computed: false, optional: true, required: false
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

  // rsso_radius_server_port - computed: false, optional: true, required: false
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

  // rsso_secret - computed: true, optional: true, required: false
  private _rssoSecret?: string[]; 
  public get rssoSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('rsso_secret'));
  }
  public set rssoSecret(value: string[]) {
    this._rssoSecret = value;
  }
  public resetRssoSecret() {
    this._rssoSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoSecretInput() {
    return this._rssoSecret;
  }

  // rsso_validate_request_secret - computed: false, optional: true, required: false
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // secondary_secret - computed: true, optional: true, required: false
  private _secondarySecret?: string[]; 
  public get secondarySecret() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_secret'));
  }
  public set secondarySecret(value: string[]) {
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

  // secret - computed: true, optional: true, required: false
  private _secret?: string[]; 
  public get secret() {
    return cdktf.Fn.tolist(this.getListAttribute('secret'));
  }
  public set secret(value: string[]) {
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

  // source_ip_interface - computed: true, optional: true, required: false
  private _sourceIpInterface?: string[]; 
  public get sourceIpInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_interface'));
  }
  public set sourceIpInterface(value: string[]) {
    this._sourceIpInterface = value;
  }
  public resetSourceIpInterface() {
    this._sourceIpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInterfaceInput() {
    return this._sourceIpInterface;
  }

  // sso_attribute - computed: false, optional: true, required: false
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

  // switch_controller_service_type - computed: true, optional: true, required: false
  private _switchControllerServiceType?: string[]; 
  public get switchControllerServiceType() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_controller_service_type'));
  }
  public set switchControllerServiceType(value: string[]) {
    this._switchControllerServiceType = value;
  }
  public resetSwitchControllerServiceType() {
    this._switchControllerServiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerServiceTypeInput() {
    return this._switchControllerServiceType;
  }

  // tertiary_secret - computed: true, optional: true, required: false
  private _tertiarySecret?: string[]; 
  public get tertiarySecret() {
    return cdktf.Fn.tolist(this.getListAttribute('tertiary_secret'));
  }
  public set tertiarySecret(value: string[]) {
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
  private _accountingServer = new ObjectUserRadiusAccountingServerList(this, "accounting_server", false);
  public get accountingServer() {
    return this._accountingServer;
  }
  public putAccountingServer(value: ObjectUserRadiusAccountingServer[] | cdktf.IResolvable) {
    this._accountingServer.internalValue = value;
  }
  public resetAccountingServer() {
    this._accountingServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingServerInput() {
    return this._accountingServer.internalValue;
  }

  // dynamic_mapping - computed: false, optional: true, required: false
  private _dynamicMapping = new ObjectUserRadiusDynamicMappingList(this, "dynamic_mapping", false);
  public get dynamicMapping() {
    return this._dynamicMapping;
  }
  public putDynamicMapping(value: ObjectUserRadiusDynamicMapping[] | cdktf.IResolvable) {
    this._dynamicMapping.internalValue = value;
  }
  public resetDynamicMapping() {
    this._dynamicMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingInput() {
    return this._dynamicMapping.internalValue;
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
      adom: cdktf.stringToTerraform(this._adom),
      all_usergroup: cdktf.stringToTerraform(this._allUsergroup),
      auth_type: cdktf.stringToTerraform(this._authType),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      call_station_id_type: cdktf.stringToTerraform(this._callStationIdType),
      class: cdktf.listMapper(cdktf.stringToTerraform, false)(this._class),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      delimiter: cdktf.stringToTerraform(this._delimiter),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
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
      rsso_log_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rssoLogFlags),
      rsso_log_period: cdktf.numberToTerraform(this._rssoLogPeriod),
      rsso_radius_response: cdktf.stringToTerraform(this._rssoRadiusResponse),
      rsso_radius_server_port: cdktf.numberToTerraform(this._rssoRadiusServerPort),
      rsso_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rssoSecret),
      rsso_validate_request_secret: cdktf.stringToTerraform(this._rssoValidateRequestSecret),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      secondary_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondarySecret),
      secondary_server: cdktf.stringToTerraform(this._secondaryServer),
      secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secret),
      server: cdktf.stringToTerraform(this._server),
      server_identity_check: cdktf.stringToTerraform(this._serverIdentityCheck),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIpInterface),
      sso_attribute: cdktf.stringToTerraform(this._ssoAttribute),
      sso_attribute_key: cdktf.stringToTerraform(this._ssoAttributeKey),
      sso_attribute_value_override: cdktf.stringToTerraform(this._ssoAttributeValueOverride),
      status_ttl: cdktf.numberToTerraform(this._statusTtl),
      switch_controller_acct_fast_framedip_detect: cdktf.numberToTerraform(this._switchControllerAcctFastFramedipDetect),
      switch_controller_nas_ip_dynamic: cdktf.stringToTerraform(this._switchControllerNasIpDynamic),
      switch_controller_service_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchControllerServiceType),
      tertiary_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tertiarySecret),
      tertiary_server: cdktf.stringToTerraform(this._tertiaryServer),
      timeout: cdktf.numberToTerraform(this._timeout),
      tls_min_proto_version: cdktf.stringToTerraform(this._tlsMinProtoVersion),
      transport_protocol: cdktf.stringToTerraform(this._transportProtocol),
      use_management_vdom: cdktf.stringToTerraform(this._useManagementVdom),
      username_case_sensitive: cdktf.stringToTerraform(this._usernameCaseSensitive),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      accounting_server: cdktf.listMapper(objectUserRadiusAccountingServerToTerraform, true)(this._accountingServer.internalValue),
      dynamic_mapping: cdktf.listMapper(objectUserRadiusDynamicMappingToTerraform, true)(this._dynamicMapping.internalValue),
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
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      class: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._class),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rssoLogFlags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rssoSecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rsso_validate_request_secret: {
        value: cdktf.stringToHclTerraform(this._rssoValidateRequestSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondarySecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secondary_server: {
        value: cdktf.stringToHclTerraform(this._secondaryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIpInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._switchControllerServiceType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tertiary_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tertiarySecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      accounting_server: {
        value: cdktf.listMapperHcl(objectUserRadiusAccountingServerToHclTerraform, true)(this._accountingServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserRadiusAccountingServerList",
      },
      dynamic_mapping: {
        value: cdktf.listMapperHcl(objectUserRadiusDynamicMappingToHclTerraform, true)(this._dynamicMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserRadiusDynamicMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
