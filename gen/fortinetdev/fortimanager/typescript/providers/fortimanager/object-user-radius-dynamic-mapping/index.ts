// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserRadiusDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#account_key_cert_field ObjectUserRadiusDynamicMappingA#account_key_cert_field}
  */
  readonly accountKeyCertField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#account_key_processing ObjectUserRadiusDynamicMappingA#account_key_processing}
  */
  readonly accountKeyProcessing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#acct_all_servers ObjectUserRadiusDynamicMappingA#acct_all_servers}
  */
  readonly acctAllServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#acct_interim_interval ObjectUserRadiusDynamicMappingA#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#adom ObjectUserRadiusDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#all_usergroup ObjectUserRadiusDynamicMappingA#all_usergroup}
  */
  readonly allUsergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#auth_type ObjectUserRadiusDynamicMappingA#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ca_cert ObjectUserRadiusDynamicMappingA#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#call_station_id_type ObjectUserRadiusDynamicMappingA#call_station_id_type}
  */
  readonly callStationIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#class ObjectUserRadiusDynamicMappingA#class}
  */
  readonly class?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#client_cert ObjectUserRadiusDynamicMappingA#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#delimiter ObjectUserRadiusDynamicMappingA#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_carrier_endpoint_attribute ObjectUserRadiusDynamicMappingA#dp_carrier_endpoint_attribute}
  */
  readonly dpCarrierEndpointAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_carrier_endpoint_block_attribute ObjectUserRadiusDynamicMappingA#dp_carrier_endpoint_block_attribute}
  */
  readonly dpCarrierEndpointBlockAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_context_timeout ObjectUserRadiusDynamicMappingA#dp_context_timeout}
  */
  readonly dpContextTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_flush_ip_session ObjectUserRadiusDynamicMappingA#dp_flush_ip_session}
  */
  readonly dpFlushIpSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_hold_time ObjectUserRadiusDynamicMappingA#dp_hold_time}
  */
  readonly dpHoldTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_http_header ObjectUserRadiusDynamicMappingA#dp_http_header}
  */
  readonly dpHttpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_http_header_fallback ObjectUserRadiusDynamicMappingA#dp_http_header_fallback}
  */
  readonly dpHttpHeaderFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_http_header_status ObjectUserRadiusDynamicMappingA#dp_http_header_status}
  */
  readonly dpHttpHeaderStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_http_header_suppress ObjectUserRadiusDynamicMappingA#dp_http_header_suppress}
  */
  readonly dpHttpHeaderSuppress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_log_dyn_flags ObjectUserRadiusDynamicMappingA#dp_log_dyn_flags}
  */
  readonly dpLogDynFlags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_log_period ObjectUserRadiusDynamicMappingA#dp_log_period}
  */
  readonly dpLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_mem_percent ObjectUserRadiusDynamicMappingA#dp_mem_percent}
  */
  readonly dpMemPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_profile_attribute ObjectUserRadiusDynamicMappingA#dp_profile_attribute}
  */
  readonly dpProfileAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_profile_attribute_key ObjectUserRadiusDynamicMappingA#dp_profile_attribute_key}
  */
  readonly dpProfileAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_radius_response ObjectUserRadiusDynamicMappingA#dp_radius_response}
  */
  readonly dpRadiusResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_radius_server_port ObjectUserRadiusDynamicMappingA#dp_radius_server_port}
  */
  readonly dpRadiusServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_secret ObjectUserRadiusDynamicMappingA#dp_secret}
  */
  readonly dpSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dp_validate_request_secret ObjectUserRadiusDynamicMappingA#dp_validate_request_secret}
  */
  readonly dpValidateRequestSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dynamic_profile ObjectUserRadiusDynamicMappingA#dynamic_profile}
  */
  readonly dynamicProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#dynamic_sort_subtable ObjectUserRadiusDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#endpoint_translation ObjectUserRadiusDynamicMappingA#endpoint_translation}
  */
  readonly endpointTranslation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_carrier_endpoint_convert_hex ObjectUserRadiusDynamicMappingA#ep_carrier_endpoint_convert_hex}
  */
  readonly epCarrierEndpointConvertHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_carrier_endpoint_header ObjectUserRadiusDynamicMappingA#ep_carrier_endpoint_header}
  */
  readonly epCarrierEndpointHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_carrier_endpoint_header_suppress ObjectUserRadiusDynamicMappingA#ep_carrier_endpoint_header_suppress}
  */
  readonly epCarrierEndpointHeaderSuppress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_carrier_endpoint_prefix ObjectUserRadiusDynamicMappingA#ep_carrier_endpoint_prefix}
  */
  readonly epCarrierEndpointPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_carrier_endpoint_prefix_range_max ObjectUserRadiusDynamicMappingA#ep_carrier_endpoint_prefix_range_max}
  */
  readonly epCarrierEndpointPrefixRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_carrier_endpoint_prefix_range_min ObjectUserRadiusDynamicMappingA#ep_carrier_endpoint_prefix_range_min}
  */
  readonly epCarrierEndpointPrefixRangeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_carrier_endpoint_prefix_string ObjectUserRadiusDynamicMappingA#ep_carrier_endpoint_prefix_string}
  */
  readonly epCarrierEndpointPrefixString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_carrier_endpoint_source ObjectUserRadiusDynamicMappingA#ep_carrier_endpoint_source}
  */
  readonly epCarrierEndpointSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_ip_header ObjectUserRadiusDynamicMappingA#ep_ip_header}
  */
  readonly epIpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_ip_header_suppress ObjectUserRadiusDynamicMappingA#ep_ip_header_suppress}
  */
  readonly epIpHeaderSuppress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_missing_header_fallback ObjectUserRadiusDynamicMappingA#ep_missing_header_fallback}
  */
  readonly epMissingHeaderFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#ep_profile_query_type ObjectUserRadiusDynamicMappingA#ep_profile_query_type}
  */
  readonly epProfileQueryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#group_override_attr_type ObjectUserRadiusDynamicMappingA#group_override_attr_type}
  */
  readonly groupOverrideAttrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#h3c_compatibility ObjectUserRadiusDynamicMappingA#h3c_compatibility}
  */
  readonly h3CCompatibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#id ObjectUserRadiusDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#interface ObjectUserRadiusDynamicMappingA#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#interface_select_method ObjectUserRadiusDynamicMappingA#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#mac_case ObjectUserRadiusDynamicMappingA#mac_case}
  */
  readonly macCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#mac_password_delimiter ObjectUserRadiusDynamicMappingA#mac_password_delimiter}
  */
  readonly macPasswordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#mac_username_delimiter ObjectUserRadiusDynamicMappingA#mac_username_delimiter}
  */
  readonly macUsernameDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#nas_id ObjectUserRadiusDynamicMappingA#nas_id}
  */
  readonly nasId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#nas_id_type ObjectUserRadiusDynamicMappingA#nas_id_type}
  */
  readonly nasIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#nas_ip ObjectUserRadiusDynamicMappingA#nas_ip}
  */
  readonly nasIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#password_encoding ObjectUserRadiusDynamicMappingA#password_encoding}
  */
  readonly passwordEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#password_renewal ObjectUserRadiusDynamicMappingA#password_renewal}
  */
  readonly passwordRenewal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#radius ObjectUserRadiusDynamicMappingA#radius}
  */
  readonly radius: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#radius_coa ObjectUserRadiusDynamicMappingA#radius_coa}
  */
  readonly radiusCoa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#radius_port ObjectUserRadiusDynamicMappingA#radius_port}
  */
  readonly radiusPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#require_message_authenticator ObjectUserRadiusDynamicMappingA#require_message_authenticator}
  */
  readonly requireMessageAuthenticator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso ObjectUserRadiusDynamicMappingA#rsso}
  */
  readonly rsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_context_timeout ObjectUserRadiusDynamicMappingA#rsso_context_timeout}
  */
  readonly rssoContextTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_endpoint_attribute ObjectUserRadiusDynamicMappingA#rsso_endpoint_attribute}
  */
  readonly rssoEndpointAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_endpoint_block_attribute ObjectUserRadiusDynamicMappingA#rsso_endpoint_block_attribute}
  */
  readonly rssoEndpointBlockAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_ep_one_ip_only ObjectUserRadiusDynamicMappingA#rsso_ep_one_ip_only}
  */
  readonly rssoEpOneIpOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_flush_ip_session ObjectUserRadiusDynamicMappingA#rsso_flush_ip_session}
  */
  readonly rssoFlushIpSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_log_flags ObjectUserRadiusDynamicMappingA#rsso_log_flags}
  */
  readonly rssoLogFlags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_log_period ObjectUserRadiusDynamicMappingA#rsso_log_period}
  */
  readonly rssoLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_radius_response ObjectUserRadiusDynamicMappingA#rsso_radius_response}
  */
  readonly rssoRadiusResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_radius_server_port ObjectUserRadiusDynamicMappingA#rsso_radius_server_port}
  */
  readonly rssoRadiusServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_secret ObjectUserRadiusDynamicMappingA#rsso_secret}
  */
  readonly rssoSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#rsso_validate_request_secret ObjectUserRadiusDynamicMappingA#rsso_validate_request_secret}
  */
  readonly rssoValidateRequestSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#scopetype ObjectUserRadiusDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#secondary_secret ObjectUserRadiusDynamicMappingA#secondary_secret}
  */
  readonly secondarySecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#secondary_server ObjectUserRadiusDynamicMappingA#secondary_server}
  */
  readonly secondaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#secret ObjectUserRadiusDynamicMappingA#secret}
  */
  readonly secret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#server ObjectUserRadiusDynamicMappingA#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#server_identity_check ObjectUserRadiusDynamicMappingA#server_identity_check}
  */
  readonly serverIdentityCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#source_ip ObjectUserRadiusDynamicMappingA#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#source_ip_interface ObjectUserRadiusDynamicMappingA#source_ip_interface}
  */
  readonly sourceIpInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#sso_attribute ObjectUserRadiusDynamicMappingA#sso_attribute}
  */
  readonly ssoAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#sso_attribute_key ObjectUserRadiusDynamicMappingA#sso_attribute_key}
  */
  readonly ssoAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#sso_attribute_value_override ObjectUserRadiusDynamicMappingA#sso_attribute_value_override}
  */
  readonly ssoAttributeValueOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#status_ttl ObjectUserRadiusDynamicMappingA#status_ttl}
  */
  readonly statusTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#switch_controller_acct_fast_framedip_detect ObjectUserRadiusDynamicMappingA#switch_controller_acct_fast_framedip_detect}
  */
  readonly switchControllerAcctFastFramedipDetect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#switch_controller_nas_ip_dynamic ObjectUserRadiusDynamicMappingA#switch_controller_nas_ip_dynamic}
  */
  readonly switchControllerNasIpDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#switch_controller_service_type ObjectUserRadiusDynamicMappingA#switch_controller_service_type}
  */
  readonly switchControllerServiceType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#tertiary_secret ObjectUserRadiusDynamicMappingA#tertiary_secret}
  */
  readonly tertiarySecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#tertiary_server ObjectUserRadiusDynamicMappingA#tertiary_server}
  */
  readonly tertiaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#timeout ObjectUserRadiusDynamicMappingA#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#tls_min_proto_version ObjectUserRadiusDynamicMappingA#tls_min_proto_version}
  */
  readonly tlsMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#transport_protocol ObjectUserRadiusDynamicMappingA#transport_protocol}
  */
  readonly transportProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#use_group_for_profile ObjectUserRadiusDynamicMappingA#use_group_for_profile}
  */
  readonly useGroupForProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#use_management_vdom ObjectUserRadiusDynamicMappingA#use_management_vdom}
  */
  readonly useManagementVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#username_case_sensitive ObjectUserRadiusDynamicMappingA#username_case_sensitive}
  */
  readonly usernameCaseSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#vrf_select ObjectUserRadiusDynamicMappingA#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#_scope ObjectUserRadiusDynamicMappingA#_scope}
  */
  readonly scope?: ObjectUserRadiusDynamicMappingScopeA[] | cdktf.IResolvable;
  /**
  * accounting_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#accounting_server ObjectUserRadiusDynamicMappingA#accounting_server}
  */
  readonly accountingServer?: ObjectUserRadiusDynamicMappingAccountingServerA[] | cdktf.IResolvable;
}
export interface ObjectUserRadiusDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#name ObjectUserRadiusDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#vdom ObjectUserRadiusDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectUserRadiusDynamicMappingScopeAToTerraform(struct?: ObjectUserRadiusDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectUserRadiusDynamicMappingScopeAToHclTerraform(struct?: ObjectUserRadiusDynamicMappingScopeA | cdktf.IResolvable): any {
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

export class ObjectUserRadiusDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserRadiusDynamicMappingScopeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectUserRadiusDynamicMappingScopeA | cdktf.IResolvable | undefined) {
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

export class ObjectUserRadiusDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectUserRadiusDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserRadiusDynamicMappingScopeAOutputReference {
    return new ObjectUserRadiusDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectUserRadiusDynamicMappingAccountingServerA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#id ObjectUserRadiusDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#interface ObjectUserRadiusDynamicMappingA#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#interface_select_method ObjectUserRadiusDynamicMappingA#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#port ObjectUserRadiusDynamicMappingA#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#secret ObjectUserRadiusDynamicMappingA#secret}
  */
  readonly secret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#server ObjectUserRadiusDynamicMappingA#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#source_ip ObjectUserRadiusDynamicMappingA#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#status ObjectUserRadiusDynamicMappingA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#vrf_select ObjectUserRadiusDynamicMappingA#vrf_select}
  */
  readonly vrfSelect?: number;
}

export function objectUserRadiusDynamicMappingAccountingServerAToTerraform(struct?: ObjectUserRadiusDynamicMappingAccountingServerA | cdktf.IResolvable): any {
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


export function objectUserRadiusDynamicMappingAccountingServerAToHclTerraform(struct?: ObjectUserRadiusDynamicMappingAccountingServerA | cdktf.IResolvable): any {
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

export class ObjectUserRadiusDynamicMappingAccountingServerAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserRadiusDynamicMappingAccountingServerA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectUserRadiusDynamicMappingAccountingServerA | cdktf.IResolvable | undefined) {
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

export class ObjectUserRadiusDynamicMappingAccountingServerAList extends cdktf.ComplexList {
  public internalValue? : ObjectUserRadiusDynamicMappingAccountingServerA[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserRadiusDynamicMappingAccountingServerAOutputReference {
    return new ObjectUserRadiusDynamicMappingAccountingServerAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping fortimanager_object_user_radius_dynamic_mapping}
*/
export class ObjectUserRadiusDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_radius_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserRadiusDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserRadiusDynamicMappingA to import
  * @param importFromId The id of the existing ObjectUserRadiusDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserRadiusDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_radius_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_radius_dynamic_mapping fortimanager_object_user_radius_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserRadiusDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectUserRadiusDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_radius_dynamic_mapping',
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
    this._dpCarrierEndpointAttribute = config.dpCarrierEndpointAttribute;
    this._dpCarrierEndpointBlockAttribute = config.dpCarrierEndpointBlockAttribute;
    this._dpContextTimeout = config.dpContextTimeout;
    this._dpFlushIpSession = config.dpFlushIpSession;
    this._dpHoldTime = config.dpHoldTime;
    this._dpHttpHeader = config.dpHttpHeader;
    this._dpHttpHeaderFallback = config.dpHttpHeaderFallback;
    this._dpHttpHeaderStatus = config.dpHttpHeaderStatus;
    this._dpHttpHeaderSuppress = config.dpHttpHeaderSuppress;
    this._dpLogDynFlags = config.dpLogDynFlags;
    this._dpLogPeriod = config.dpLogPeriod;
    this._dpMemPercent = config.dpMemPercent;
    this._dpProfileAttribute = config.dpProfileAttribute;
    this._dpProfileAttributeKey = config.dpProfileAttributeKey;
    this._dpRadiusResponse = config.dpRadiusResponse;
    this._dpRadiusServerPort = config.dpRadiusServerPort;
    this._dpSecret = config.dpSecret;
    this._dpValidateRequestSecret = config.dpValidateRequestSecret;
    this._dynamicProfile = config.dynamicProfile;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._endpointTranslation = config.endpointTranslation;
    this._epCarrierEndpointConvertHex = config.epCarrierEndpointConvertHex;
    this._epCarrierEndpointHeader = config.epCarrierEndpointHeader;
    this._epCarrierEndpointHeaderSuppress = config.epCarrierEndpointHeaderSuppress;
    this._epCarrierEndpointPrefix = config.epCarrierEndpointPrefix;
    this._epCarrierEndpointPrefixRangeMax = config.epCarrierEndpointPrefixRangeMax;
    this._epCarrierEndpointPrefixRangeMin = config.epCarrierEndpointPrefixRangeMin;
    this._epCarrierEndpointPrefixString = config.epCarrierEndpointPrefixString;
    this._epCarrierEndpointSource = config.epCarrierEndpointSource;
    this._epIpHeader = config.epIpHeader;
    this._epIpHeaderSuppress = config.epIpHeaderSuppress;
    this._epMissingHeaderFallback = config.epMissingHeaderFallback;
    this._epProfileQueryType = config.epProfileQueryType;
    this._groupOverrideAttrType = config.groupOverrideAttrType;
    this._h3CCompatibility = config.h3CCompatibility;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._macCase = config.macCase;
    this._macPasswordDelimiter = config.macPasswordDelimiter;
    this._macUsernameDelimiter = config.macUsernameDelimiter;
    this._nasId = config.nasId;
    this._nasIdType = config.nasIdType;
    this._nasIp = config.nasIp;
    this._passwordEncoding = config.passwordEncoding;
    this._passwordRenewal = config.passwordRenewal;
    this._radius = config.radius;
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
    this._useGroupForProfile = config.useGroupForProfile;
    this._useManagementVdom = config.useManagementVdom;
    this._usernameCaseSensitive = config.usernameCaseSensitive;
    this._vrfSelect = config.vrfSelect;
    this._scope.internalValue = config.scope;
    this._accountingServer.internalValue = config.accountingServer;
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

  // radius - computed: false, optional: false, required: true
  private _radius?: string; 
  public get radius() {
    return this.getStringAttribute('radius');
  }
  public set radius(value: string) {
    this._radius = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
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
  private _scope = new ObjectUserRadiusDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectUserRadiusDynamicMappingScopeA[] | cdktf.IResolvable) {
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
  private _accountingServer = new ObjectUserRadiusDynamicMappingAccountingServerAList(this, "accounting_server", false);
  public get accountingServer() {
    return this._accountingServer;
  }
  public putAccountingServer(value: ObjectUserRadiusDynamicMappingAccountingServerA[] | cdktf.IResolvable) {
    this._accountingServer.internalValue = value;
  }
  public resetAccountingServer() {
    this._accountingServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingServerInput() {
    return this._accountingServer.internalValue;
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
      dp_carrier_endpoint_attribute: cdktf.stringToTerraform(this._dpCarrierEndpointAttribute),
      dp_carrier_endpoint_block_attribute: cdktf.stringToTerraform(this._dpCarrierEndpointBlockAttribute),
      dp_context_timeout: cdktf.numberToTerraform(this._dpContextTimeout),
      dp_flush_ip_session: cdktf.stringToTerraform(this._dpFlushIpSession),
      dp_hold_time: cdktf.numberToTerraform(this._dpHoldTime),
      dp_http_header: cdktf.stringToTerraform(this._dpHttpHeader),
      dp_http_header_fallback: cdktf.stringToTerraform(this._dpHttpHeaderFallback),
      dp_http_header_status: cdktf.stringToTerraform(this._dpHttpHeaderStatus),
      dp_http_header_suppress: cdktf.stringToTerraform(this._dpHttpHeaderSuppress),
      dp_log_dyn_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dpLogDynFlags),
      dp_log_period: cdktf.numberToTerraform(this._dpLogPeriod),
      dp_mem_percent: cdktf.numberToTerraform(this._dpMemPercent),
      dp_profile_attribute: cdktf.stringToTerraform(this._dpProfileAttribute),
      dp_profile_attribute_key: cdktf.stringToTerraform(this._dpProfileAttributeKey),
      dp_radius_response: cdktf.stringToTerraform(this._dpRadiusResponse),
      dp_radius_server_port: cdktf.numberToTerraform(this._dpRadiusServerPort),
      dp_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dpSecret),
      dp_validate_request_secret: cdktf.stringToTerraform(this._dpValidateRequestSecret),
      dynamic_profile: cdktf.stringToTerraform(this._dynamicProfile),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      endpoint_translation: cdktf.stringToTerraform(this._endpointTranslation),
      ep_carrier_endpoint_convert_hex: cdktf.stringToTerraform(this._epCarrierEndpointConvertHex),
      ep_carrier_endpoint_header: cdktf.stringToTerraform(this._epCarrierEndpointHeader),
      ep_carrier_endpoint_header_suppress: cdktf.stringToTerraform(this._epCarrierEndpointHeaderSuppress),
      ep_carrier_endpoint_prefix: cdktf.stringToTerraform(this._epCarrierEndpointPrefix),
      ep_carrier_endpoint_prefix_range_max: cdktf.numberToTerraform(this._epCarrierEndpointPrefixRangeMax),
      ep_carrier_endpoint_prefix_range_min: cdktf.numberToTerraform(this._epCarrierEndpointPrefixRangeMin),
      ep_carrier_endpoint_prefix_string: cdktf.stringToTerraform(this._epCarrierEndpointPrefixString),
      ep_carrier_endpoint_source: cdktf.stringToTerraform(this._epCarrierEndpointSource),
      ep_ip_header: cdktf.stringToTerraform(this._epIpHeader),
      ep_ip_header_suppress: cdktf.stringToTerraform(this._epIpHeaderSuppress),
      ep_missing_header_fallback: cdktf.stringToTerraform(this._epMissingHeaderFallback),
      ep_profile_query_type: cdktf.stringToTerraform(this._epProfileQueryType),
      group_override_attr_type: cdktf.stringToTerraform(this._groupOverrideAttrType),
      h3c_compatibility: cdktf.stringToTerraform(this._h3CCompatibility),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      mac_case: cdktf.stringToTerraform(this._macCase),
      mac_password_delimiter: cdktf.stringToTerraform(this._macPasswordDelimiter),
      mac_username_delimiter: cdktf.stringToTerraform(this._macUsernameDelimiter),
      nas_id: cdktf.stringToTerraform(this._nasId),
      nas_id_type: cdktf.stringToTerraform(this._nasIdType),
      nas_ip: cdktf.stringToTerraform(this._nasIp),
      password_encoding: cdktf.stringToTerraform(this._passwordEncoding),
      password_renewal: cdktf.stringToTerraform(this._passwordRenewal),
      radius: cdktf.stringToTerraform(this._radius),
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
      use_group_for_profile: cdktf.stringToTerraform(this._useGroupForProfile),
      use_management_vdom: cdktf.stringToTerraform(this._useManagementVdom),
      username_case_sensitive: cdktf.stringToTerraform(this._usernameCaseSensitive),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      _scope: cdktf.listMapper(objectUserRadiusDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
      accounting_server: cdktf.listMapper(objectUserRadiusDynamicMappingAccountingServerAToTerraform, true)(this._accountingServer.internalValue),
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
      dp_carrier_endpoint_attribute: {
        value: cdktf.stringToHclTerraform(this._dpCarrierEndpointAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_carrier_endpoint_block_attribute: {
        value: cdktf.stringToHclTerraform(this._dpCarrierEndpointBlockAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_context_timeout: {
        value: cdktf.numberToHclTerraform(this._dpContextTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dp_flush_ip_session: {
        value: cdktf.stringToHclTerraform(this._dpFlushIpSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_hold_time: {
        value: cdktf.numberToHclTerraform(this._dpHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dp_http_header: {
        value: cdktf.stringToHclTerraform(this._dpHttpHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_http_header_fallback: {
        value: cdktf.stringToHclTerraform(this._dpHttpHeaderFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_http_header_status: {
        value: cdktf.stringToHclTerraform(this._dpHttpHeaderStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_http_header_suppress: {
        value: cdktf.stringToHclTerraform(this._dpHttpHeaderSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_log_dyn_flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dpLogDynFlags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dp_log_period: {
        value: cdktf.numberToHclTerraform(this._dpLogPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dp_mem_percent: {
        value: cdktf.numberToHclTerraform(this._dpMemPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dp_profile_attribute: {
        value: cdktf.stringToHclTerraform(this._dpProfileAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_profile_attribute_key: {
        value: cdktf.stringToHclTerraform(this._dpProfileAttributeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_radius_response: {
        value: cdktf.stringToHclTerraform(this._dpRadiusResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_radius_server_port: {
        value: cdktf.numberToHclTerraform(this._dpRadiusServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dp_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dpSecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dp_validate_request_secret: {
        value: cdktf.stringToHclTerraform(this._dpValidateRequestSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_profile: {
        value: cdktf.stringToHclTerraform(this._dynamicProfile),
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
      endpoint_translation: {
        value: cdktf.stringToHclTerraform(this._endpointTranslation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_carrier_endpoint_convert_hex: {
        value: cdktf.stringToHclTerraform(this._epCarrierEndpointConvertHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_carrier_endpoint_header: {
        value: cdktf.stringToHclTerraform(this._epCarrierEndpointHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_carrier_endpoint_header_suppress: {
        value: cdktf.stringToHclTerraform(this._epCarrierEndpointHeaderSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_carrier_endpoint_prefix: {
        value: cdktf.stringToHclTerraform(this._epCarrierEndpointPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_carrier_endpoint_prefix_range_max: {
        value: cdktf.numberToHclTerraform(this._epCarrierEndpointPrefixRangeMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ep_carrier_endpoint_prefix_range_min: {
        value: cdktf.numberToHclTerraform(this._epCarrierEndpointPrefixRangeMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ep_carrier_endpoint_prefix_string: {
        value: cdktf.stringToHclTerraform(this._epCarrierEndpointPrefixString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_carrier_endpoint_source: {
        value: cdktf.stringToHclTerraform(this._epCarrierEndpointSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_ip_header: {
        value: cdktf.stringToHclTerraform(this._epIpHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_ip_header_suppress: {
        value: cdktf.stringToHclTerraform(this._epIpHeaderSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_missing_header_fallback: {
        value: cdktf.stringToHclTerraform(this._epMissingHeaderFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_profile_query_type: {
        value: cdktf.stringToHclTerraform(this._epProfileQueryType),
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
      radius: {
        value: cdktf.stringToHclTerraform(this._radius),
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
      use_group_for_profile: {
        value: cdktf.stringToHclTerraform(this._useGroupForProfile),
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
      _scope: {
        value: cdktf.listMapperHcl(objectUserRadiusDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserRadiusDynamicMappingScopeAList",
      },
      accounting_server: {
        value: cdktf.listMapperHcl(objectUserRadiusDynamicMappingAccountingServerAToHclTerraform, true)(this._accountingServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserRadiusDynamicMappingAccountingServerAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
