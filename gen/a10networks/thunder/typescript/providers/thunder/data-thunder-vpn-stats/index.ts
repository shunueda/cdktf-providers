// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#id DataThunderVpnStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#error DataThunderVpnStats#error}
  */
  readonly error?: DataThunderVpnStatsError;
  /**
  * ike_gateway_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ike_gateway_list DataThunderVpnStats#ike_gateway_list}
  */
  readonly ikeGatewayList?: DataThunderVpnStatsIkeGatewayListStruct[] | cdktf.IResolvable;
  /**
  * ike_stats_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ike_stats_global DataThunderVpnStats#ike_stats_global}
  */
  readonly ikeStatsGlobal?: DataThunderVpnStatsIkeStatsGlobal;
  /**
  * ipsec_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ipsec_list DataThunderVpnStats#ipsec_list}
  */
  readonly ipsecList?: DataThunderVpnStatsIpsecListStruct[] | cdktf.IResolvable;
  /**
  * ipsec_sa_stats_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ipsec_sa_stats_list DataThunderVpnStats#ipsec_sa_stats_list}
  */
  readonly ipsecSaStatsList?: DataThunderVpnStatsIpsecSaStatsListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#stats DataThunderVpnStats#stats}
  */
  readonly stats?: DataThunderVpnStatsStats;
}
export interface DataThunderVpnStatsErrorStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ah_not_supported_with_gcm_gmac_sha2 DataThunderVpnStats#ah_not_supported_with_gcm_gmac_sha2}
  */
  readonly ahNotSupportedWithGcmGmacSha2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_auth_type DataThunderVpnStats#bad_auth_type}
  */
  readonly badAuthType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_checksum DataThunderVpnStats#bad_checksum}
  */
  readonly badChecksum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_encrypt_type DataThunderVpnStats#bad_encrypt_type}
  */
  readonly badEncryptType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_encrypt_type_ctr_gcm DataThunderVpnStats#bad_encrypt_type_ctr_gcm}
  */
  readonly badEncryptTypeCtrGcm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_esp_next_header DataThunderVpnStats#bad_esp_next_header}
  */
  readonly badEspNextHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_frag_size_configuration DataThunderVpnStats#bad_frag_size_configuration}
  */
  readonly badFragSizeConfiguration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_fragment_size DataThunderVpnStats#bad_fragment_size}
  */
  readonly badFragmentSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_gre_header DataThunderVpnStats#bad_gre_header}
  */
  readonly badGreHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_gre_protocol DataThunderVpnStats#bad_gre_protocol}
  */
  readonly badGreProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_inline_data DataThunderVpnStats#bad_inline_data}
  */
  readonly badInlineData?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ip_payload_type DataThunderVpnStats#bad_ip_payload_type}
  */
  readonly badIpPayloadType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ip_version DataThunderVpnStats#bad_ip_version}
  */
  readonly badIpVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ipcomp_configuration DataThunderVpnStats#bad_ipcomp_configuration}
  */
  readonly badIpcompConfiguration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ipsec_auth DataThunderVpnStats#bad_ipsec_auth}
  */
  readonly badIpsecAuth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ipsec_context DataThunderVpnStats#bad_ipsec_context}
  */
  readonly badIpsecContext?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ipsec_context_direction DataThunderVpnStats#bad_ipsec_context_direction}
  */
  readonly badIpsecContextDirection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ipsec_context_flag_mismatch DataThunderVpnStats#bad_ipsec_context_flag_mismatch}
  */
  readonly badIpsecContextFlagMismatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ipsec_padding DataThunderVpnStats#bad_ipsec_padding}
  */
  readonly badIpsecPadding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ipsec_protocol DataThunderVpnStats#bad_ipsec_protocol}
  */
  readonly badIpsecProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ipsec_spi DataThunderVpnStats#bad_ipsec_spi}
  */
  readonly badIpsecSpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_ipsec_unknown DataThunderVpnStats#bad_ipsec_unknown}
  */
  readonly badIpsecUnknown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_len DataThunderVpnStats#bad_len}
  */
  readonly badLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_min_frag_size_auth_sha384_512 DataThunderVpnStats#bad_min_frag_size_auth_sha384_512}
  */
  readonly badMinFragSizeAuthSha384512?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_opcode DataThunderVpnStats#bad_opcode}
  */
  readonly badOpcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_selector_match DataThunderVpnStats#bad_selector_match}
  */
  readonly badSelectorMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_sg_write_len DataThunderVpnStats#bad_sg_write_len}
  */
  readonly badSgWriteLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bad_srtp_auth_tag DataThunderVpnStats#bad_srtp_auth_tag}
  */
  readonly badSrtpAuthTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#dsiv_incorrect_param DataThunderVpnStats#dsiv_incorrect_param}
  */
  readonly dsivIncorrectParam?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#dummy_payload DataThunderVpnStats#dummy_payload}
  */
  readonly dummyPayload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#error_ipv6_decrypt_rh_segs_left_error DataThunderVpnStats#error_ipv6_decrypt_rh_segs_left_error}
  */
  readonly errorIpv6DecryptRhSegsLeftError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#error_ipv6_extension_header_bad DataThunderVpnStats#error_ipv6_extension_header_bad}
  */
  readonly errorIpv6ExtensionHeaderBad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ipcomp_payload DataThunderVpnStats#ipcomp_payload}
  */
  readonly ipcompPayload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ipv6_extension_headers_too_big DataThunderVpnStats#ipv6_extension_headers_too_big}
  */
  readonly ipv6ExtensionHeadersTooBig?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ipv6_hop_by_hop_error DataThunderVpnStats#ipv6_hop_by_hop_error}
  */
  readonly ipv6HopByHopError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ipv6_outbound_rh_copy_addr_error DataThunderVpnStats#ipv6_outbound_rh_copy_addr_error}
  */
  readonly ipv6OutboundRhCopyAddrError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ipv6_rh_length_error DataThunderVpnStats#ipv6_rh_length_error}
  */
  readonly ipv6RhLengthError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#tfc_padding_with_prefrag_not_supported DataThunderVpnStats#tfc_padding_with_prefrag_not_supported}
  */
  readonly tfcPaddingWithPrefragNotSupported?: number;
}

export function dataThunderVpnStatsErrorStatsToTerraform(struct?: DataThunderVpnStatsErrorStatsOutputReference | DataThunderVpnStatsErrorStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ah_not_supported_with_gcm_gmac_sha2: cdktf.numberToTerraform(struct!.ahNotSupportedWithGcmGmacSha2),
    bad_auth_type: cdktf.numberToTerraform(struct!.badAuthType),
    bad_checksum: cdktf.numberToTerraform(struct!.badChecksum),
    bad_encrypt_type: cdktf.numberToTerraform(struct!.badEncryptType),
    bad_encrypt_type_ctr_gcm: cdktf.numberToTerraform(struct!.badEncryptTypeCtrGcm),
    bad_esp_next_header: cdktf.numberToTerraform(struct!.badEspNextHeader),
    bad_frag_size_configuration: cdktf.numberToTerraform(struct!.badFragSizeConfiguration),
    bad_fragment_size: cdktf.numberToTerraform(struct!.badFragmentSize),
    bad_gre_header: cdktf.numberToTerraform(struct!.badGreHeader),
    bad_gre_protocol: cdktf.numberToTerraform(struct!.badGreProtocol),
    bad_inline_data: cdktf.numberToTerraform(struct!.badInlineData),
    bad_ip_payload_type: cdktf.numberToTerraform(struct!.badIpPayloadType),
    bad_ip_version: cdktf.numberToTerraform(struct!.badIpVersion),
    bad_ipcomp_configuration: cdktf.numberToTerraform(struct!.badIpcompConfiguration),
    bad_ipsec_auth: cdktf.numberToTerraform(struct!.badIpsecAuth),
    bad_ipsec_context: cdktf.numberToTerraform(struct!.badIpsecContext),
    bad_ipsec_context_direction: cdktf.numberToTerraform(struct!.badIpsecContextDirection),
    bad_ipsec_context_flag_mismatch: cdktf.numberToTerraform(struct!.badIpsecContextFlagMismatch),
    bad_ipsec_padding: cdktf.numberToTerraform(struct!.badIpsecPadding),
    bad_ipsec_protocol: cdktf.numberToTerraform(struct!.badIpsecProtocol),
    bad_ipsec_spi: cdktf.numberToTerraform(struct!.badIpsecSpi),
    bad_ipsec_unknown: cdktf.numberToTerraform(struct!.badIpsecUnknown),
    bad_len: cdktf.numberToTerraform(struct!.badLen),
    bad_min_frag_size_auth_sha384_512: cdktf.numberToTerraform(struct!.badMinFragSizeAuthSha384512),
    bad_opcode: cdktf.numberToTerraform(struct!.badOpcode),
    bad_selector_match: cdktf.numberToTerraform(struct!.badSelectorMatch),
    bad_sg_write_len: cdktf.numberToTerraform(struct!.badSgWriteLen),
    bad_srtp_auth_tag: cdktf.numberToTerraform(struct!.badSrtpAuthTag),
    dsiv_incorrect_param: cdktf.numberToTerraform(struct!.dsivIncorrectParam),
    dummy_payload: cdktf.numberToTerraform(struct!.dummyPayload),
    error_ipv6_decrypt_rh_segs_left_error: cdktf.numberToTerraform(struct!.errorIpv6DecryptRhSegsLeftError),
    error_ipv6_extension_header_bad: cdktf.numberToTerraform(struct!.errorIpv6ExtensionHeaderBad),
    ipcomp_payload: cdktf.numberToTerraform(struct!.ipcompPayload),
    ipv6_extension_headers_too_big: cdktf.numberToTerraform(struct!.ipv6ExtensionHeadersTooBig),
    ipv6_hop_by_hop_error: cdktf.numberToTerraform(struct!.ipv6HopByHopError),
    ipv6_outbound_rh_copy_addr_error: cdktf.numberToTerraform(struct!.ipv6OutboundRhCopyAddrError),
    ipv6_rh_length_error: cdktf.numberToTerraform(struct!.ipv6RhLengthError),
    tfc_padding_with_prefrag_not_supported: cdktf.numberToTerraform(struct!.tfcPaddingWithPrefragNotSupported),
  }
}


export function dataThunderVpnStatsErrorStatsToHclTerraform(struct?: DataThunderVpnStatsErrorStatsOutputReference | DataThunderVpnStatsErrorStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ah_not_supported_with_gcm_gmac_sha2: {
      value: cdktf.numberToHclTerraform(struct!.ahNotSupportedWithGcmGmacSha2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_auth_type: {
      value: cdktf.numberToHclTerraform(struct!.badAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_checksum: {
      value: cdktf.numberToHclTerraform(struct!.badChecksum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_encrypt_type: {
      value: cdktf.numberToHclTerraform(struct!.badEncryptType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_encrypt_type_ctr_gcm: {
      value: cdktf.numberToHclTerraform(struct!.badEncryptTypeCtrGcm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_esp_next_header: {
      value: cdktf.numberToHclTerraform(struct!.badEspNextHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_frag_size_configuration: {
      value: cdktf.numberToHclTerraform(struct!.badFragSizeConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_fragment_size: {
      value: cdktf.numberToHclTerraform(struct!.badFragmentSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_gre_header: {
      value: cdktf.numberToHclTerraform(struct!.badGreHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_gre_protocol: {
      value: cdktf.numberToHclTerraform(struct!.badGreProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_inline_data: {
      value: cdktf.numberToHclTerraform(struct!.badInlineData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_payload_type: {
      value: cdktf.numberToHclTerraform(struct!.badIpPayloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_version: {
      value: cdktf.numberToHclTerraform(struct!.badIpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ipcomp_configuration: {
      value: cdktf.numberToHclTerraform(struct!.badIpcompConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ipsec_auth: {
      value: cdktf.numberToHclTerraform(struct!.badIpsecAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ipsec_context: {
      value: cdktf.numberToHclTerraform(struct!.badIpsecContext),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ipsec_context_direction: {
      value: cdktf.numberToHclTerraform(struct!.badIpsecContextDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ipsec_context_flag_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.badIpsecContextFlagMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ipsec_padding: {
      value: cdktf.numberToHclTerraform(struct!.badIpsecPadding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ipsec_protocol: {
      value: cdktf.numberToHclTerraform(struct!.badIpsecProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ipsec_spi: {
      value: cdktf.numberToHclTerraform(struct!.badIpsecSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ipsec_unknown: {
      value: cdktf.numberToHclTerraform(struct!.badIpsecUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_len: {
      value: cdktf.numberToHclTerraform(struct!.badLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_min_frag_size_auth_sha384_512: {
      value: cdktf.numberToHclTerraform(struct!.badMinFragSizeAuthSha384512),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_opcode: {
      value: cdktf.numberToHclTerraform(struct!.badOpcode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_selector_match: {
      value: cdktf.numberToHclTerraform(struct!.badSelectorMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_sg_write_len: {
      value: cdktf.numberToHclTerraform(struct!.badSgWriteLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_srtp_auth_tag: {
      value: cdktf.numberToHclTerraform(struct!.badSrtpAuthTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dsiv_incorrect_param: {
      value: cdktf.numberToHclTerraform(struct!.dsivIncorrectParam),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dummy_payload: {
      value: cdktf.numberToHclTerraform(struct!.dummyPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_ipv6_decrypt_rh_segs_left_error: {
      value: cdktf.numberToHclTerraform(struct!.errorIpv6DecryptRhSegsLeftError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_ipv6_extension_header_bad: {
      value: cdktf.numberToHclTerraform(struct!.errorIpv6ExtensionHeaderBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipcomp_payload: {
      value: cdktf.numberToHclTerraform(struct!.ipcompPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_extension_headers_too_big: {
      value: cdktf.numberToHclTerraform(struct!.ipv6ExtensionHeadersTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_hop_by_hop_error: {
      value: cdktf.numberToHclTerraform(struct!.ipv6HopByHopError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_outbound_rh_copy_addr_error: {
      value: cdktf.numberToHclTerraform(struct!.ipv6OutboundRhCopyAddrError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_rh_length_error: {
      value: cdktf.numberToHclTerraform(struct!.ipv6RhLengthError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tfc_padding_with_prefrag_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.tfcPaddingWithPrefragNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsErrorStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnStatsErrorStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ahNotSupportedWithGcmGmacSha2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ahNotSupportedWithGcmGmacSha2 = this._ahNotSupportedWithGcmGmacSha2;
    }
    if (this._badAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.badAuthType = this._badAuthType;
    }
    if (this._badChecksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.badChecksum = this._badChecksum;
    }
    if (this._badEncryptType !== undefined) {
      hasAnyValues = true;
      internalValueResult.badEncryptType = this._badEncryptType;
    }
    if (this._badEncryptTypeCtrGcm !== undefined) {
      hasAnyValues = true;
      internalValueResult.badEncryptTypeCtrGcm = this._badEncryptTypeCtrGcm;
    }
    if (this._badEspNextHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.badEspNextHeader = this._badEspNextHeader;
    }
    if (this._badFragSizeConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.badFragSizeConfiguration = this._badFragSizeConfiguration;
    }
    if (this._badFragmentSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.badFragmentSize = this._badFragmentSize;
    }
    if (this._badGreHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.badGreHeader = this._badGreHeader;
    }
    if (this._badGreProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.badGreProtocol = this._badGreProtocol;
    }
    if (this._badInlineData !== undefined) {
      hasAnyValues = true;
      internalValueResult.badInlineData = this._badInlineData;
    }
    if (this._badIpPayloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpPayloadType = this._badIpPayloadType;
    }
    if (this._badIpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpVersion = this._badIpVersion;
    }
    if (this._badIpcompConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpcompConfiguration = this._badIpcompConfiguration;
    }
    if (this._badIpsecAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpsecAuth = this._badIpsecAuth;
    }
    if (this._badIpsecContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpsecContext = this._badIpsecContext;
    }
    if (this._badIpsecContextDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpsecContextDirection = this._badIpsecContextDirection;
    }
    if (this._badIpsecContextFlagMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpsecContextFlagMismatch = this._badIpsecContextFlagMismatch;
    }
    if (this._badIpsecPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpsecPadding = this._badIpsecPadding;
    }
    if (this._badIpsecProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpsecProtocol = this._badIpsecProtocol;
    }
    if (this._badIpsecSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpsecSpi = this._badIpsecSpi;
    }
    if (this._badIpsecUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpsecUnknown = this._badIpsecUnknown;
    }
    if (this._badLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badLen = this._badLen;
    }
    if (this._badMinFragSizeAuthSha384512 !== undefined) {
      hasAnyValues = true;
      internalValueResult.badMinFragSizeAuthSha384512 = this._badMinFragSizeAuthSha384512;
    }
    if (this._badOpcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.badOpcode = this._badOpcode;
    }
    if (this._badSelectorMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSelectorMatch = this._badSelectorMatch;
    }
    if (this._badSgWriteLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSgWriteLen = this._badSgWriteLen;
    }
    if (this._badSrtpAuthTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSrtpAuthTag = this._badSrtpAuthTag;
    }
    if (this._dsivIncorrectParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsivIncorrectParam = this._dsivIncorrectParam;
    }
    if (this._dummyPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyPayload = this._dummyPayload;
    }
    if (this._errorIpv6DecryptRhSegsLeftError !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorIpv6DecryptRhSegsLeftError = this._errorIpv6DecryptRhSegsLeftError;
    }
    if (this._errorIpv6ExtensionHeaderBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorIpv6ExtensionHeaderBad = this._errorIpv6ExtensionHeaderBad;
    }
    if (this._ipcompPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipcompPayload = this._ipcompPayload;
    }
    if (this._ipv6ExtensionHeadersTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ExtensionHeadersTooBig = this._ipv6ExtensionHeadersTooBig;
    }
    if (this._ipv6HopByHopError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6HopByHopError = this._ipv6HopByHopError;
    }
    if (this._ipv6OutboundRhCopyAddrError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6OutboundRhCopyAddrError = this._ipv6OutboundRhCopyAddrError;
    }
    if (this._ipv6RhLengthError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6RhLengthError = this._ipv6RhLengthError;
    }
    if (this._tfcPaddingWithPrefragNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.tfcPaddingWithPrefragNotSupported = this._tfcPaddingWithPrefragNotSupported;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsErrorStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ahNotSupportedWithGcmGmacSha2 = undefined;
      this._badAuthType = undefined;
      this._badChecksum = undefined;
      this._badEncryptType = undefined;
      this._badEncryptTypeCtrGcm = undefined;
      this._badEspNextHeader = undefined;
      this._badFragSizeConfiguration = undefined;
      this._badFragmentSize = undefined;
      this._badGreHeader = undefined;
      this._badGreProtocol = undefined;
      this._badInlineData = undefined;
      this._badIpPayloadType = undefined;
      this._badIpVersion = undefined;
      this._badIpcompConfiguration = undefined;
      this._badIpsecAuth = undefined;
      this._badIpsecContext = undefined;
      this._badIpsecContextDirection = undefined;
      this._badIpsecContextFlagMismatch = undefined;
      this._badIpsecPadding = undefined;
      this._badIpsecProtocol = undefined;
      this._badIpsecSpi = undefined;
      this._badIpsecUnknown = undefined;
      this._badLen = undefined;
      this._badMinFragSizeAuthSha384512 = undefined;
      this._badOpcode = undefined;
      this._badSelectorMatch = undefined;
      this._badSgWriteLen = undefined;
      this._badSrtpAuthTag = undefined;
      this._dsivIncorrectParam = undefined;
      this._dummyPayload = undefined;
      this._errorIpv6DecryptRhSegsLeftError = undefined;
      this._errorIpv6ExtensionHeaderBad = undefined;
      this._ipcompPayload = undefined;
      this._ipv6ExtensionHeadersTooBig = undefined;
      this._ipv6HopByHopError = undefined;
      this._ipv6OutboundRhCopyAddrError = undefined;
      this._ipv6RhLengthError = undefined;
      this._tfcPaddingWithPrefragNotSupported = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ahNotSupportedWithGcmGmacSha2 = value.ahNotSupportedWithGcmGmacSha2;
      this._badAuthType = value.badAuthType;
      this._badChecksum = value.badChecksum;
      this._badEncryptType = value.badEncryptType;
      this._badEncryptTypeCtrGcm = value.badEncryptTypeCtrGcm;
      this._badEspNextHeader = value.badEspNextHeader;
      this._badFragSizeConfiguration = value.badFragSizeConfiguration;
      this._badFragmentSize = value.badFragmentSize;
      this._badGreHeader = value.badGreHeader;
      this._badGreProtocol = value.badGreProtocol;
      this._badInlineData = value.badInlineData;
      this._badIpPayloadType = value.badIpPayloadType;
      this._badIpVersion = value.badIpVersion;
      this._badIpcompConfiguration = value.badIpcompConfiguration;
      this._badIpsecAuth = value.badIpsecAuth;
      this._badIpsecContext = value.badIpsecContext;
      this._badIpsecContextDirection = value.badIpsecContextDirection;
      this._badIpsecContextFlagMismatch = value.badIpsecContextFlagMismatch;
      this._badIpsecPadding = value.badIpsecPadding;
      this._badIpsecProtocol = value.badIpsecProtocol;
      this._badIpsecSpi = value.badIpsecSpi;
      this._badIpsecUnknown = value.badIpsecUnknown;
      this._badLen = value.badLen;
      this._badMinFragSizeAuthSha384512 = value.badMinFragSizeAuthSha384512;
      this._badOpcode = value.badOpcode;
      this._badSelectorMatch = value.badSelectorMatch;
      this._badSgWriteLen = value.badSgWriteLen;
      this._badSrtpAuthTag = value.badSrtpAuthTag;
      this._dsivIncorrectParam = value.dsivIncorrectParam;
      this._dummyPayload = value.dummyPayload;
      this._errorIpv6DecryptRhSegsLeftError = value.errorIpv6DecryptRhSegsLeftError;
      this._errorIpv6ExtensionHeaderBad = value.errorIpv6ExtensionHeaderBad;
      this._ipcompPayload = value.ipcompPayload;
      this._ipv6ExtensionHeadersTooBig = value.ipv6ExtensionHeadersTooBig;
      this._ipv6HopByHopError = value.ipv6HopByHopError;
      this._ipv6OutboundRhCopyAddrError = value.ipv6OutboundRhCopyAddrError;
      this._ipv6RhLengthError = value.ipv6RhLengthError;
      this._tfcPaddingWithPrefragNotSupported = value.tfcPaddingWithPrefragNotSupported;
    }
  }

  // ah_not_supported_with_gcm_gmac_sha2 - computed: false, optional: true, required: false
  private _ahNotSupportedWithGcmGmacSha2?: number; 
  public get ahNotSupportedWithGcmGmacSha2() {
    return this.getNumberAttribute('ah_not_supported_with_gcm_gmac_sha2');
  }
  public set ahNotSupportedWithGcmGmacSha2(value: number) {
    this._ahNotSupportedWithGcmGmacSha2 = value;
  }
  public resetAhNotSupportedWithGcmGmacSha2() {
    this._ahNotSupportedWithGcmGmacSha2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahNotSupportedWithGcmGmacSha2Input() {
    return this._ahNotSupportedWithGcmGmacSha2;
  }

  // bad_auth_type - computed: false, optional: true, required: false
  private _badAuthType?: number; 
  public get badAuthType() {
    return this.getNumberAttribute('bad_auth_type');
  }
  public set badAuthType(value: number) {
    this._badAuthType = value;
  }
  public resetBadAuthType() {
    this._badAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badAuthTypeInput() {
    return this._badAuthType;
  }

  // bad_checksum - computed: false, optional: true, required: false
  private _badChecksum?: number; 
  public get badChecksum() {
    return this.getNumberAttribute('bad_checksum');
  }
  public set badChecksum(value: number) {
    this._badChecksum = value;
  }
  public resetBadChecksum() {
    this._badChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badChecksumInput() {
    return this._badChecksum;
  }

  // bad_encrypt_type - computed: false, optional: true, required: false
  private _badEncryptType?: number; 
  public get badEncryptType() {
    return this.getNumberAttribute('bad_encrypt_type');
  }
  public set badEncryptType(value: number) {
    this._badEncryptType = value;
  }
  public resetBadEncryptType() {
    this._badEncryptType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEncryptTypeInput() {
    return this._badEncryptType;
  }

  // bad_encrypt_type_ctr_gcm - computed: false, optional: true, required: false
  private _badEncryptTypeCtrGcm?: number; 
  public get badEncryptTypeCtrGcm() {
    return this.getNumberAttribute('bad_encrypt_type_ctr_gcm');
  }
  public set badEncryptTypeCtrGcm(value: number) {
    this._badEncryptTypeCtrGcm = value;
  }
  public resetBadEncryptTypeCtrGcm() {
    this._badEncryptTypeCtrGcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEncryptTypeCtrGcmInput() {
    return this._badEncryptTypeCtrGcm;
  }

  // bad_esp_next_header - computed: false, optional: true, required: false
  private _badEspNextHeader?: number; 
  public get badEspNextHeader() {
    return this.getNumberAttribute('bad_esp_next_header');
  }
  public set badEspNextHeader(value: number) {
    this._badEspNextHeader = value;
  }
  public resetBadEspNextHeader() {
    this._badEspNextHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEspNextHeaderInput() {
    return this._badEspNextHeader;
  }

  // bad_frag_size_configuration - computed: false, optional: true, required: false
  private _badFragSizeConfiguration?: number; 
  public get badFragSizeConfiguration() {
    return this.getNumberAttribute('bad_frag_size_configuration');
  }
  public set badFragSizeConfiguration(value: number) {
    this._badFragSizeConfiguration = value;
  }
  public resetBadFragSizeConfiguration() {
    this._badFragSizeConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badFragSizeConfigurationInput() {
    return this._badFragSizeConfiguration;
  }

  // bad_fragment_size - computed: false, optional: true, required: false
  private _badFragmentSize?: number; 
  public get badFragmentSize() {
    return this.getNumberAttribute('bad_fragment_size');
  }
  public set badFragmentSize(value: number) {
    this._badFragmentSize = value;
  }
  public resetBadFragmentSize() {
    this._badFragmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badFragmentSizeInput() {
    return this._badFragmentSize;
  }

  // bad_gre_header - computed: false, optional: true, required: false
  private _badGreHeader?: number; 
  public get badGreHeader() {
    return this.getNumberAttribute('bad_gre_header');
  }
  public set badGreHeader(value: number) {
    this._badGreHeader = value;
  }
  public resetBadGreHeader() {
    this._badGreHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badGreHeaderInput() {
    return this._badGreHeader;
  }

  // bad_gre_protocol - computed: false, optional: true, required: false
  private _badGreProtocol?: number; 
  public get badGreProtocol() {
    return this.getNumberAttribute('bad_gre_protocol');
  }
  public set badGreProtocol(value: number) {
    this._badGreProtocol = value;
  }
  public resetBadGreProtocol() {
    this._badGreProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badGreProtocolInput() {
    return this._badGreProtocol;
  }

  // bad_inline_data - computed: false, optional: true, required: false
  private _badInlineData?: number; 
  public get badInlineData() {
    return this.getNumberAttribute('bad_inline_data');
  }
  public set badInlineData(value: number) {
    this._badInlineData = value;
  }
  public resetBadInlineData() {
    this._badInlineData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badInlineDataInput() {
    return this._badInlineData;
  }

  // bad_ip_payload_type - computed: false, optional: true, required: false
  private _badIpPayloadType?: number; 
  public get badIpPayloadType() {
    return this.getNumberAttribute('bad_ip_payload_type');
  }
  public set badIpPayloadType(value: number) {
    this._badIpPayloadType = value;
  }
  public resetBadIpPayloadType() {
    this._badIpPayloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpPayloadTypeInput() {
    return this._badIpPayloadType;
  }

  // bad_ip_version - computed: false, optional: true, required: false
  private _badIpVersion?: number; 
  public get badIpVersion() {
    return this.getNumberAttribute('bad_ip_version');
  }
  public set badIpVersion(value: number) {
    this._badIpVersion = value;
  }
  public resetBadIpVersion() {
    this._badIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpVersionInput() {
    return this._badIpVersion;
  }

  // bad_ipcomp_configuration - computed: false, optional: true, required: false
  private _badIpcompConfiguration?: number; 
  public get badIpcompConfiguration() {
    return this.getNumberAttribute('bad_ipcomp_configuration');
  }
  public set badIpcompConfiguration(value: number) {
    this._badIpcompConfiguration = value;
  }
  public resetBadIpcompConfiguration() {
    this._badIpcompConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpcompConfigurationInput() {
    return this._badIpcompConfiguration;
  }

  // bad_ipsec_auth - computed: false, optional: true, required: false
  private _badIpsecAuth?: number; 
  public get badIpsecAuth() {
    return this.getNumberAttribute('bad_ipsec_auth');
  }
  public set badIpsecAuth(value: number) {
    this._badIpsecAuth = value;
  }
  public resetBadIpsecAuth() {
    this._badIpsecAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecAuthInput() {
    return this._badIpsecAuth;
  }

  // bad_ipsec_context - computed: false, optional: true, required: false
  private _badIpsecContext?: number; 
  public get badIpsecContext() {
    return this.getNumberAttribute('bad_ipsec_context');
  }
  public set badIpsecContext(value: number) {
    this._badIpsecContext = value;
  }
  public resetBadIpsecContext() {
    this._badIpsecContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecContextInput() {
    return this._badIpsecContext;
  }

  // bad_ipsec_context_direction - computed: false, optional: true, required: false
  private _badIpsecContextDirection?: number; 
  public get badIpsecContextDirection() {
    return this.getNumberAttribute('bad_ipsec_context_direction');
  }
  public set badIpsecContextDirection(value: number) {
    this._badIpsecContextDirection = value;
  }
  public resetBadIpsecContextDirection() {
    this._badIpsecContextDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecContextDirectionInput() {
    return this._badIpsecContextDirection;
  }

  // bad_ipsec_context_flag_mismatch - computed: false, optional: true, required: false
  private _badIpsecContextFlagMismatch?: number; 
  public get badIpsecContextFlagMismatch() {
    return this.getNumberAttribute('bad_ipsec_context_flag_mismatch');
  }
  public set badIpsecContextFlagMismatch(value: number) {
    this._badIpsecContextFlagMismatch = value;
  }
  public resetBadIpsecContextFlagMismatch() {
    this._badIpsecContextFlagMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecContextFlagMismatchInput() {
    return this._badIpsecContextFlagMismatch;
  }

  // bad_ipsec_padding - computed: false, optional: true, required: false
  private _badIpsecPadding?: number; 
  public get badIpsecPadding() {
    return this.getNumberAttribute('bad_ipsec_padding');
  }
  public set badIpsecPadding(value: number) {
    this._badIpsecPadding = value;
  }
  public resetBadIpsecPadding() {
    this._badIpsecPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecPaddingInput() {
    return this._badIpsecPadding;
  }

  // bad_ipsec_protocol - computed: false, optional: true, required: false
  private _badIpsecProtocol?: number; 
  public get badIpsecProtocol() {
    return this.getNumberAttribute('bad_ipsec_protocol');
  }
  public set badIpsecProtocol(value: number) {
    this._badIpsecProtocol = value;
  }
  public resetBadIpsecProtocol() {
    this._badIpsecProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecProtocolInput() {
    return this._badIpsecProtocol;
  }

  // bad_ipsec_spi - computed: false, optional: true, required: false
  private _badIpsecSpi?: number; 
  public get badIpsecSpi() {
    return this.getNumberAttribute('bad_ipsec_spi');
  }
  public set badIpsecSpi(value: number) {
    this._badIpsecSpi = value;
  }
  public resetBadIpsecSpi() {
    this._badIpsecSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecSpiInput() {
    return this._badIpsecSpi;
  }

  // bad_ipsec_unknown - computed: false, optional: true, required: false
  private _badIpsecUnknown?: number; 
  public get badIpsecUnknown() {
    return this.getNumberAttribute('bad_ipsec_unknown');
  }
  public set badIpsecUnknown(value: number) {
    this._badIpsecUnknown = value;
  }
  public resetBadIpsecUnknown() {
    this._badIpsecUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecUnknownInput() {
    return this._badIpsecUnknown;
  }

  // bad_len - computed: false, optional: true, required: false
  private _badLen?: number; 
  public get badLen() {
    return this.getNumberAttribute('bad_len');
  }
  public set badLen(value: number) {
    this._badLen = value;
  }
  public resetBadLen() {
    this._badLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badLenInput() {
    return this._badLen;
  }

  // bad_min_frag_size_auth_sha384_512 - computed: false, optional: true, required: false
  private _badMinFragSizeAuthSha384512?: number; 
  public get badMinFragSizeAuthSha384512() {
    return this.getNumberAttribute('bad_min_frag_size_auth_sha384_512');
  }
  public set badMinFragSizeAuthSha384512(value: number) {
    this._badMinFragSizeAuthSha384512 = value;
  }
  public resetBadMinFragSizeAuthSha384512() {
    this._badMinFragSizeAuthSha384512 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badMinFragSizeAuthSha384512Input() {
    return this._badMinFragSizeAuthSha384512;
  }

  // bad_opcode - computed: false, optional: true, required: false
  private _badOpcode?: number; 
  public get badOpcode() {
    return this.getNumberAttribute('bad_opcode');
  }
  public set badOpcode(value: number) {
    this._badOpcode = value;
  }
  public resetBadOpcode() {
    this._badOpcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badOpcodeInput() {
    return this._badOpcode;
  }

  // bad_selector_match - computed: false, optional: true, required: false
  private _badSelectorMatch?: number; 
  public get badSelectorMatch() {
    return this.getNumberAttribute('bad_selector_match');
  }
  public set badSelectorMatch(value: number) {
    this._badSelectorMatch = value;
  }
  public resetBadSelectorMatch() {
    this._badSelectorMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSelectorMatchInput() {
    return this._badSelectorMatch;
  }

  // bad_sg_write_len - computed: false, optional: true, required: false
  private _badSgWriteLen?: number; 
  public get badSgWriteLen() {
    return this.getNumberAttribute('bad_sg_write_len');
  }
  public set badSgWriteLen(value: number) {
    this._badSgWriteLen = value;
  }
  public resetBadSgWriteLen() {
    this._badSgWriteLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSgWriteLenInput() {
    return this._badSgWriteLen;
  }

  // bad_srtp_auth_tag - computed: false, optional: true, required: false
  private _badSrtpAuthTag?: number; 
  public get badSrtpAuthTag() {
    return this.getNumberAttribute('bad_srtp_auth_tag');
  }
  public set badSrtpAuthTag(value: number) {
    this._badSrtpAuthTag = value;
  }
  public resetBadSrtpAuthTag() {
    this._badSrtpAuthTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSrtpAuthTagInput() {
    return this._badSrtpAuthTag;
  }

  // dsiv_incorrect_param - computed: false, optional: true, required: false
  private _dsivIncorrectParam?: number; 
  public get dsivIncorrectParam() {
    return this.getNumberAttribute('dsiv_incorrect_param');
  }
  public set dsivIncorrectParam(value: number) {
    this._dsivIncorrectParam = value;
  }
  public resetDsivIncorrectParam() {
    this._dsivIncorrectParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsivIncorrectParamInput() {
    return this._dsivIncorrectParam;
  }

  // dummy_payload - computed: false, optional: true, required: false
  private _dummyPayload?: number; 
  public get dummyPayload() {
    return this.getNumberAttribute('dummy_payload');
  }
  public set dummyPayload(value: number) {
    this._dummyPayload = value;
  }
  public resetDummyPayload() {
    this._dummyPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyPayloadInput() {
    return this._dummyPayload;
  }

  // error_ipv6_decrypt_rh_segs_left_error - computed: false, optional: true, required: false
  private _errorIpv6DecryptRhSegsLeftError?: number; 
  public get errorIpv6DecryptRhSegsLeftError() {
    return this.getNumberAttribute('error_ipv6_decrypt_rh_segs_left_error');
  }
  public set errorIpv6DecryptRhSegsLeftError(value: number) {
    this._errorIpv6DecryptRhSegsLeftError = value;
  }
  public resetErrorIpv6DecryptRhSegsLeftError() {
    this._errorIpv6DecryptRhSegsLeftError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIpv6DecryptRhSegsLeftErrorInput() {
    return this._errorIpv6DecryptRhSegsLeftError;
  }

  // error_ipv6_extension_header_bad - computed: false, optional: true, required: false
  private _errorIpv6ExtensionHeaderBad?: number; 
  public get errorIpv6ExtensionHeaderBad() {
    return this.getNumberAttribute('error_ipv6_extension_header_bad');
  }
  public set errorIpv6ExtensionHeaderBad(value: number) {
    this._errorIpv6ExtensionHeaderBad = value;
  }
  public resetErrorIpv6ExtensionHeaderBad() {
    this._errorIpv6ExtensionHeaderBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIpv6ExtensionHeaderBadInput() {
    return this._errorIpv6ExtensionHeaderBad;
  }

  // ipcomp_payload - computed: false, optional: true, required: false
  private _ipcompPayload?: number; 
  public get ipcompPayload() {
    return this.getNumberAttribute('ipcomp_payload');
  }
  public set ipcompPayload(value: number) {
    this._ipcompPayload = value;
  }
  public resetIpcompPayload() {
    this._ipcompPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcompPayloadInput() {
    return this._ipcompPayload;
  }

  // ipv6_extension_headers_too_big - computed: false, optional: true, required: false
  private _ipv6ExtensionHeadersTooBig?: number; 
  public get ipv6ExtensionHeadersTooBig() {
    return this.getNumberAttribute('ipv6_extension_headers_too_big');
  }
  public set ipv6ExtensionHeadersTooBig(value: number) {
    this._ipv6ExtensionHeadersTooBig = value;
  }
  public resetIpv6ExtensionHeadersTooBig() {
    this._ipv6ExtensionHeadersTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExtensionHeadersTooBigInput() {
    return this._ipv6ExtensionHeadersTooBig;
  }

  // ipv6_hop_by_hop_error - computed: false, optional: true, required: false
  private _ipv6HopByHopError?: number; 
  public get ipv6HopByHopError() {
    return this.getNumberAttribute('ipv6_hop_by_hop_error');
  }
  public set ipv6HopByHopError(value: number) {
    this._ipv6HopByHopError = value;
  }
  public resetIpv6HopByHopError() {
    this._ipv6HopByHopError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HopByHopErrorInput() {
    return this._ipv6HopByHopError;
  }

  // ipv6_outbound_rh_copy_addr_error - computed: false, optional: true, required: false
  private _ipv6OutboundRhCopyAddrError?: number; 
  public get ipv6OutboundRhCopyAddrError() {
    return this.getNumberAttribute('ipv6_outbound_rh_copy_addr_error');
  }
  public set ipv6OutboundRhCopyAddrError(value: number) {
    this._ipv6OutboundRhCopyAddrError = value;
  }
  public resetIpv6OutboundRhCopyAddrError() {
    this._ipv6OutboundRhCopyAddrError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OutboundRhCopyAddrErrorInput() {
    return this._ipv6OutboundRhCopyAddrError;
  }

  // ipv6_rh_length_error - computed: false, optional: true, required: false
  private _ipv6RhLengthError?: number; 
  public get ipv6RhLengthError() {
    return this.getNumberAttribute('ipv6_rh_length_error');
  }
  public set ipv6RhLengthError(value: number) {
    this._ipv6RhLengthError = value;
  }
  public resetIpv6RhLengthError() {
    this._ipv6RhLengthError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RhLengthErrorInput() {
    return this._ipv6RhLengthError;
  }

  // tfc_padding_with_prefrag_not_supported - computed: false, optional: true, required: false
  private _tfcPaddingWithPrefragNotSupported?: number; 
  public get tfcPaddingWithPrefragNotSupported() {
    return this.getNumberAttribute('tfc_padding_with_prefrag_not_supported');
  }
  public set tfcPaddingWithPrefragNotSupported(value: number) {
    this._tfcPaddingWithPrefragNotSupported = value;
  }
  public resetTfcPaddingWithPrefragNotSupported() {
    this._tfcPaddingWithPrefragNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfcPaddingWithPrefragNotSupportedInput() {
    return this._tfcPaddingWithPrefragNotSupported;
  }
}
export interface DataThunderVpnStatsError {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#stats DataThunderVpnStats#stats}
  */
  readonly stats?: DataThunderVpnStatsErrorStats;
}

export function dataThunderVpnStatsErrorToTerraform(struct?: DataThunderVpnStatsErrorOutputReference | DataThunderVpnStatsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderVpnStatsErrorStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVpnStatsErrorToHclTerraform(struct?: DataThunderVpnStatsErrorOutputReference | DataThunderVpnStatsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderVpnStatsErrorStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnStatsErrorStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnStatsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVpnStatsErrorStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVpnStatsErrorStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}
export interface DataThunderVpnStatsIkeGatewayListStats {
  /**
  * IKE version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ike_current_version DataThunderVpnStats#ike_current_version}
  */
  readonly ikeCurrentVersion?: number;
  /**
  * Invalid SPI for Child SAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_child_sa_invalid_spi DataThunderVpnStats#v1_child_sa_invalid_spi}
  */
  readonly v1ChildSaInvalidSpi?: number;
  /**
  * Incoming Aggressive Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_aggressive_req DataThunderVpnStats#v1_in_aggressive_req}
  */
  readonly v1InAggressiveReq?: number;
  /**
  * Incoming Aggressive Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_aggressive_rsp DataThunderVpnStats#v1_in_aggressive_rsp}
  */
  readonly v1InAggressiveRsp?: number;
  /**
  * Incoming Auth Only Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_auth_only_req DataThunderVpnStats#v1_in_auth_only_req}
  */
  readonly v1InAuthOnlyReq?: number;
  /**
  * Incoming Auth Only Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_auth_only_rsp DataThunderVpnStats#v1_in_auth_only_rsp}
  */
  readonly v1InAuthOnlyRsp?: number;
  /**
  * Incoming ID Protection Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_id_prot_req DataThunderVpnStats#v1_in_id_prot_req}
  */
  readonly v1InIdProtReq?: number;
  /**
  * Incoming ID Protection Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_id_prot_rsp DataThunderVpnStats#v1_in_id_prot_rsp}
  */
  readonly v1InIdProtRsp?: number;
  /**
  * Incoming Info Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_info_v1_req DataThunderVpnStats#v1_in_info_v1_req}
  */
  readonly v1InInfoV1Req?: number;
  /**
  * Incoming Info Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_info_v1_rsp DataThunderVpnStats#v1_in_info_v1_rsp}
  */
  readonly v1InInfoV1Rsp?: number;
  /**
  * Incoming New Group Mode Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_new_group_mode_req DataThunderVpnStats#v1_in_new_group_mode_req}
  */
  readonly v1InNewGroupModeReq?: number;
  /**
  * Incoming New Group Mode Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_new_group_mode_rsp DataThunderVpnStats#v1_in_new_group_mode_rsp}
  */
  readonly v1InNewGroupModeRsp?: number;
  /**
  * Incoming Quick Mode Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_quick_mode_req DataThunderVpnStats#v1_in_quick_mode_req}
  */
  readonly v1InQuickModeReq?: number;
  /**
  * Incoming Quick Mode Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_quick_mode_rsp DataThunderVpnStats#v1_in_quick_mode_rsp}
  */
  readonly v1InQuickModeRsp?: number;
  /**
  * Incoming Transaction Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_transaction_req DataThunderVpnStats#v1_in_transaction_req}
  */
  readonly v1InTransactionReq?: number;
  /**
  * Incoming Transaction Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_transaction_rsp DataThunderVpnStats#v1_in_transaction_rsp}
  */
  readonly v1InTransactionRsp?: number;
  /**
  * Outgoing Aggressive Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_aggressive_req DataThunderVpnStats#v1_out_aggressive_req}
  */
  readonly v1OutAggressiveReq?: number;
  /**
  * Outgoing Aggressive Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_aggressive_rsp DataThunderVpnStats#v1_out_aggressive_rsp}
  */
  readonly v1OutAggressiveRsp?: number;
  /**
  * Outgoing Auth Only Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_auth_only_req DataThunderVpnStats#v1_out_auth_only_req}
  */
  readonly v1OutAuthOnlyReq?: number;
  /**
  * Outgoing Auth Only Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_auth_only_rsp DataThunderVpnStats#v1_out_auth_only_rsp}
  */
  readonly v1OutAuthOnlyRsp?: number;
  /**
  * Outgoing ID Protection Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_id_prot_req DataThunderVpnStats#v1_out_id_prot_req}
  */
  readonly v1OutIdProtReq?: number;
  /**
  * Outgoing ID Protection Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_id_prot_rsp DataThunderVpnStats#v1_out_id_prot_rsp}
  */
  readonly v1OutIdProtRsp?: number;
  /**
  * Outgoing Info Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_info_v1_req DataThunderVpnStats#v1_out_info_v1_req}
  */
  readonly v1OutInfoV1Req?: number;
  /**
  * Outgoing Info Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_info_v1_rsp DataThunderVpnStats#v1_out_info_v1_rsp}
  */
  readonly v1OutInfoV1Rsp?: number;
  /**
  * Outgoing New Group Mode Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_new_group_mode_req DataThunderVpnStats#v1_out_new_group_mode_req}
  */
  readonly v1OutNewGroupModeReq?: number;
  /**
  * Outgoing New Group Mode Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_new_group_mode_rsp DataThunderVpnStats#v1_out_new_group_mode_rsp}
  */
  readonly v1OutNewGroupModeRsp?: number;
  /**
  * Outgoing Quick Mode Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_quick_mode_req DataThunderVpnStats#v1_out_quick_mode_req}
  */
  readonly v1OutQuickModeReq?: number;
  /**
  * Outgoing Quick Mode Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_quick_mode_rsp DataThunderVpnStats#v1_out_quick_mode_rsp}
  */
  readonly v1OutQuickModeRsp?: number;
  /**
  * Outgoing Transaction Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_transaction_req DataThunderVpnStats#v1_out_transaction_req}
  */
  readonly v1OutTransactionReq?: number;
  /**
  * Outgoing Transaction Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_transaction_rsp DataThunderVpnStats#v1_out_transaction_rsp}
  */
  readonly v1OutTransactionRsp?: number;
  /**
  * Invalid SPI for Child SAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_child_sa_invalid_spi DataThunderVpnStats#v2_child_sa_invalid_spi}
  */
  readonly v2ChildSaInvalidSpi?: number;
  /**
  * Child SA Rekey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_child_sa_rekey DataThunderVpnStats#v2_child_sa_rekey}
  */
  readonly v2ChildSaRekey?: number;
  /**
  * Incoming Auth Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_auth_req DataThunderVpnStats#v2_in_auth_req}
  */
  readonly v2InAuthReq?: number;
  /**
  * Incoming Auth Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_auth_rsp DataThunderVpnStats#v2_in_auth_rsp}
  */
  readonly v2InAuthRsp?: number;
  /**
  * Incoming Create Child Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_create_child_req DataThunderVpnStats#v2_in_create_child_req}
  */
  readonly v2InCreateChildReq?: number;
  /**
  * Incoming Create Child Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_create_child_rsp DataThunderVpnStats#v2_in_create_child_rsp}
  */
  readonly v2InCreateChildRsp?: number;
  /**
  * Incoming Info Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_info_req DataThunderVpnStats#v2_in_info_req}
  */
  readonly v2InInfoReq?: number;
  /**
  * Incoming Info Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_info_rsp DataThunderVpnStats#v2_in_info_rsp}
  */
  readonly v2InInfoRsp?: number;
  /**
  * Incoming Init Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_init_req DataThunderVpnStats#v2_in_init_req}
  */
  readonly v2InInitReq?: number;
  /**
  * Incoming Init Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_init_rsp DataThunderVpnStats#v2_in_init_rsp}
  */
  readonly v2InInitRsp?: number;
  /**
  * Incoming Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_invalid DataThunderVpnStats#v2_in_invalid}
  */
  readonly v2InInvalid?: number;
  /**
  * Incoming Invalid SPI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_invalid_spi DataThunderVpnStats#v2_in_invalid_spi}
  */
  readonly v2InInvalidSpi?: number;
  /**
  * Initiate Rekey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_init_rekey DataThunderVpnStats#v2_init_rekey}
  */
  readonly v2InitRekey?: number;
  /**
  * Outgoing Auth Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_auth_req DataThunderVpnStats#v2_out_auth_req}
  */
  readonly v2OutAuthReq?: number;
  /**
  * Outgoing Auth Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_auth_rsp DataThunderVpnStats#v2_out_auth_rsp}
  */
  readonly v2OutAuthRsp?: number;
  /**
  * Outgoing Create Child Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_create_child_req DataThunderVpnStats#v2_out_create_child_req}
  */
  readonly v2OutCreateChildReq?: number;
  /**
  * Outgoing Create Child Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_create_child_rsp DataThunderVpnStats#v2_out_create_child_rsp}
  */
  readonly v2OutCreateChildRsp?: number;
  /**
  * Outgoing Info Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_info_req DataThunderVpnStats#v2_out_info_req}
  */
  readonly v2OutInfoReq?: number;
  /**
  * Outgoing Info Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_info_rsp DataThunderVpnStats#v2_out_info_rsp}
  */
  readonly v2OutInfoRsp?: number;
  /**
  * Outgoing Init Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_init_req DataThunderVpnStats#v2_out_init_req}
  */
  readonly v2OutInitReq?: number;
  /**
  * Outgoing Init Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_init_rsp DataThunderVpnStats#v2_out_init_rsp}
  */
  readonly v2OutInitRsp?: number;
  /**
  * Respond Rekey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_rsp_rekey DataThunderVpnStats#v2_rsp_rekey}
  */
  readonly v2RspRekey?: number;
}

export function dataThunderVpnStatsIkeGatewayListStatsToTerraform(struct?: DataThunderVpnStatsIkeGatewayListStatsOutputReference | DataThunderVpnStatsIkeGatewayListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_current_version: cdktf.numberToTerraform(struct!.ikeCurrentVersion),
    v1_child_sa_invalid_spi: cdktf.numberToTerraform(struct!.v1ChildSaInvalidSpi),
    v1_in_aggressive_req: cdktf.numberToTerraform(struct!.v1InAggressiveReq),
    v1_in_aggressive_rsp: cdktf.numberToTerraform(struct!.v1InAggressiveRsp),
    v1_in_auth_only_req: cdktf.numberToTerraform(struct!.v1InAuthOnlyReq),
    v1_in_auth_only_rsp: cdktf.numberToTerraform(struct!.v1InAuthOnlyRsp),
    v1_in_id_prot_req: cdktf.numberToTerraform(struct!.v1InIdProtReq),
    v1_in_id_prot_rsp: cdktf.numberToTerraform(struct!.v1InIdProtRsp),
    v1_in_info_v1_req: cdktf.numberToTerraform(struct!.v1InInfoV1Req),
    v1_in_info_v1_rsp: cdktf.numberToTerraform(struct!.v1InInfoV1Rsp),
    v1_in_new_group_mode_req: cdktf.numberToTerraform(struct!.v1InNewGroupModeReq),
    v1_in_new_group_mode_rsp: cdktf.numberToTerraform(struct!.v1InNewGroupModeRsp),
    v1_in_quick_mode_req: cdktf.numberToTerraform(struct!.v1InQuickModeReq),
    v1_in_quick_mode_rsp: cdktf.numberToTerraform(struct!.v1InQuickModeRsp),
    v1_in_transaction_req: cdktf.numberToTerraform(struct!.v1InTransactionReq),
    v1_in_transaction_rsp: cdktf.numberToTerraform(struct!.v1InTransactionRsp),
    v1_out_aggressive_req: cdktf.numberToTerraform(struct!.v1OutAggressiveReq),
    v1_out_aggressive_rsp: cdktf.numberToTerraform(struct!.v1OutAggressiveRsp),
    v1_out_auth_only_req: cdktf.numberToTerraform(struct!.v1OutAuthOnlyReq),
    v1_out_auth_only_rsp: cdktf.numberToTerraform(struct!.v1OutAuthOnlyRsp),
    v1_out_id_prot_req: cdktf.numberToTerraform(struct!.v1OutIdProtReq),
    v1_out_id_prot_rsp: cdktf.numberToTerraform(struct!.v1OutIdProtRsp),
    v1_out_info_v1_req: cdktf.numberToTerraform(struct!.v1OutInfoV1Req),
    v1_out_info_v1_rsp: cdktf.numberToTerraform(struct!.v1OutInfoV1Rsp),
    v1_out_new_group_mode_req: cdktf.numberToTerraform(struct!.v1OutNewGroupModeReq),
    v1_out_new_group_mode_rsp: cdktf.numberToTerraform(struct!.v1OutNewGroupModeRsp),
    v1_out_quick_mode_req: cdktf.numberToTerraform(struct!.v1OutQuickModeReq),
    v1_out_quick_mode_rsp: cdktf.numberToTerraform(struct!.v1OutQuickModeRsp),
    v1_out_transaction_req: cdktf.numberToTerraform(struct!.v1OutTransactionReq),
    v1_out_transaction_rsp: cdktf.numberToTerraform(struct!.v1OutTransactionRsp),
    v2_child_sa_invalid_spi: cdktf.numberToTerraform(struct!.v2ChildSaInvalidSpi),
    v2_child_sa_rekey: cdktf.numberToTerraform(struct!.v2ChildSaRekey),
    v2_in_auth_req: cdktf.numberToTerraform(struct!.v2InAuthReq),
    v2_in_auth_rsp: cdktf.numberToTerraform(struct!.v2InAuthRsp),
    v2_in_create_child_req: cdktf.numberToTerraform(struct!.v2InCreateChildReq),
    v2_in_create_child_rsp: cdktf.numberToTerraform(struct!.v2InCreateChildRsp),
    v2_in_info_req: cdktf.numberToTerraform(struct!.v2InInfoReq),
    v2_in_info_rsp: cdktf.numberToTerraform(struct!.v2InInfoRsp),
    v2_in_init_req: cdktf.numberToTerraform(struct!.v2InInitReq),
    v2_in_init_rsp: cdktf.numberToTerraform(struct!.v2InInitRsp),
    v2_in_invalid: cdktf.numberToTerraform(struct!.v2InInvalid),
    v2_in_invalid_spi: cdktf.numberToTerraform(struct!.v2InInvalidSpi),
    v2_init_rekey: cdktf.numberToTerraform(struct!.v2InitRekey),
    v2_out_auth_req: cdktf.numberToTerraform(struct!.v2OutAuthReq),
    v2_out_auth_rsp: cdktf.numberToTerraform(struct!.v2OutAuthRsp),
    v2_out_create_child_req: cdktf.numberToTerraform(struct!.v2OutCreateChildReq),
    v2_out_create_child_rsp: cdktf.numberToTerraform(struct!.v2OutCreateChildRsp),
    v2_out_info_req: cdktf.numberToTerraform(struct!.v2OutInfoReq),
    v2_out_info_rsp: cdktf.numberToTerraform(struct!.v2OutInfoRsp),
    v2_out_init_req: cdktf.numberToTerraform(struct!.v2OutInitReq),
    v2_out_init_rsp: cdktf.numberToTerraform(struct!.v2OutInitRsp),
    v2_rsp_rekey: cdktf.numberToTerraform(struct!.v2RspRekey),
  }
}


export function dataThunderVpnStatsIkeGatewayListStatsToHclTerraform(struct?: DataThunderVpnStatsIkeGatewayListStatsOutputReference | DataThunderVpnStatsIkeGatewayListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_current_version: {
      value: cdktf.numberToHclTerraform(struct!.ikeCurrentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_child_sa_invalid_spi: {
      value: cdktf.numberToHclTerraform(struct!.v1ChildSaInvalidSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_aggressive_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InAggressiveReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_aggressive_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InAggressiveRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_auth_only_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InAuthOnlyReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_auth_only_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InAuthOnlyRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_id_prot_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InIdProtReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_id_prot_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InIdProtRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_info_v1_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InInfoV1Req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_info_v1_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InInfoV1Rsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_new_group_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InNewGroupModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_new_group_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InNewGroupModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_quick_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InQuickModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_quick_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InQuickModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_transaction_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InTransactionReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_transaction_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InTransactionRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_aggressive_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAggressiveReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_aggressive_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAggressiveRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_auth_only_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAuthOnlyReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_auth_only_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAuthOnlyRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_id_prot_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutIdProtReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_id_prot_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutIdProtRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_info_v1_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutInfoV1Req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_info_v1_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutInfoV1Rsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_new_group_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutNewGroupModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_new_group_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutNewGroupModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_quick_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutQuickModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_quick_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutQuickModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_transaction_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutTransactionReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_transaction_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutTransactionRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_child_sa_invalid_spi: {
      value: cdktf.numberToHclTerraform(struct!.v2ChildSaInvalidSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_child_sa_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2ChildSaRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_auth_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InAuthReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_auth_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InAuthRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_create_child_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InCreateChildReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_create_child_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InCreateChildRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_info_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InInfoReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_info_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InInfoRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_init_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InInitReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_init_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InInitRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_invalid: {
      value: cdktf.numberToHclTerraform(struct!.v2InInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_invalid_spi: {
      value: cdktf.numberToHclTerraform(struct!.v2InInvalidSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_init_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2InitRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_auth_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutAuthReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_auth_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutAuthRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_create_child_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutCreateChildReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_create_child_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutCreateChildRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_info_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInfoReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_info_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInfoRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_init_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInitReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_init_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInitRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_rsp_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2RspRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsIkeGatewayListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnStatsIkeGatewayListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeCurrentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeCurrentVersion = this._ikeCurrentVersion;
    }
    if (this._v1ChildSaInvalidSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1ChildSaInvalidSpi = this._v1ChildSaInvalidSpi;
    }
    if (this._v1InAggressiveReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAggressiveReq = this._v1InAggressiveReq;
    }
    if (this._v1InAggressiveRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAggressiveRsp = this._v1InAggressiveRsp;
    }
    if (this._v1InAuthOnlyReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAuthOnlyReq = this._v1InAuthOnlyReq;
    }
    if (this._v1InAuthOnlyRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAuthOnlyRsp = this._v1InAuthOnlyRsp;
    }
    if (this._v1InIdProtReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InIdProtReq = this._v1InIdProtReq;
    }
    if (this._v1InIdProtRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InIdProtRsp = this._v1InIdProtRsp;
    }
    if (this._v1InInfoV1Req !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InInfoV1Req = this._v1InInfoV1Req;
    }
    if (this._v1InInfoV1Rsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InInfoV1Rsp = this._v1InInfoV1Rsp;
    }
    if (this._v1InNewGroupModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InNewGroupModeReq = this._v1InNewGroupModeReq;
    }
    if (this._v1InNewGroupModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InNewGroupModeRsp = this._v1InNewGroupModeRsp;
    }
    if (this._v1InQuickModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InQuickModeReq = this._v1InQuickModeReq;
    }
    if (this._v1InQuickModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InQuickModeRsp = this._v1InQuickModeRsp;
    }
    if (this._v1InTransactionReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InTransactionReq = this._v1InTransactionReq;
    }
    if (this._v1InTransactionRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InTransactionRsp = this._v1InTransactionRsp;
    }
    if (this._v1OutAggressiveReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAggressiveReq = this._v1OutAggressiveReq;
    }
    if (this._v1OutAggressiveRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAggressiveRsp = this._v1OutAggressiveRsp;
    }
    if (this._v1OutAuthOnlyReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAuthOnlyReq = this._v1OutAuthOnlyReq;
    }
    if (this._v1OutAuthOnlyRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAuthOnlyRsp = this._v1OutAuthOnlyRsp;
    }
    if (this._v1OutIdProtReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutIdProtReq = this._v1OutIdProtReq;
    }
    if (this._v1OutIdProtRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutIdProtRsp = this._v1OutIdProtRsp;
    }
    if (this._v1OutInfoV1Req !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutInfoV1Req = this._v1OutInfoV1Req;
    }
    if (this._v1OutInfoV1Rsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutInfoV1Rsp = this._v1OutInfoV1Rsp;
    }
    if (this._v1OutNewGroupModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutNewGroupModeReq = this._v1OutNewGroupModeReq;
    }
    if (this._v1OutNewGroupModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutNewGroupModeRsp = this._v1OutNewGroupModeRsp;
    }
    if (this._v1OutQuickModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutQuickModeReq = this._v1OutQuickModeReq;
    }
    if (this._v1OutQuickModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutQuickModeRsp = this._v1OutQuickModeRsp;
    }
    if (this._v1OutTransactionReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutTransactionReq = this._v1OutTransactionReq;
    }
    if (this._v1OutTransactionRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutTransactionRsp = this._v1OutTransactionRsp;
    }
    if (this._v2ChildSaInvalidSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2ChildSaInvalidSpi = this._v2ChildSaInvalidSpi;
    }
    if (this._v2ChildSaRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2ChildSaRekey = this._v2ChildSaRekey;
    }
    if (this._v2InAuthReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InAuthReq = this._v2InAuthReq;
    }
    if (this._v2InAuthRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InAuthRsp = this._v2InAuthRsp;
    }
    if (this._v2InCreateChildReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InCreateChildReq = this._v2InCreateChildReq;
    }
    if (this._v2InCreateChildRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InCreateChildRsp = this._v2InCreateChildRsp;
    }
    if (this._v2InInfoReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInfoReq = this._v2InInfoReq;
    }
    if (this._v2InInfoRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInfoRsp = this._v2InInfoRsp;
    }
    if (this._v2InInitReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInitReq = this._v2InInitReq;
    }
    if (this._v2InInitRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInitRsp = this._v2InInitRsp;
    }
    if (this._v2InInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInvalid = this._v2InInvalid;
    }
    if (this._v2InInvalidSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInvalidSpi = this._v2InInvalidSpi;
    }
    if (this._v2InitRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InitRekey = this._v2InitRekey;
    }
    if (this._v2OutAuthReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutAuthReq = this._v2OutAuthReq;
    }
    if (this._v2OutAuthRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutAuthRsp = this._v2OutAuthRsp;
    }
    if (this._v2OutCreateChildReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutCreateChildReq = this._v2OutCreateChildReq;
    }
    if (this._v2OutCreateChildRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutCreateChildRsp = this._v2OutCreateChildRsp;
    }
    if (this._v2OutInfoReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInfoReq = this._v2OutInfoReq;
    }
    if (this._v2OutInfoRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInfoRsp = this._v2OutInfoRsp;
    }
    if (this._v2OutInitReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInitReq = this._v2OutInitReq;
    }
    if (this._v2OutInitRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInitRsp = this._v2OutInitRsp;
    }
    if (this._v2RspRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2RspRekey = this._v2RspRekey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsIkeGatewayListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeCurrentVersion = undefined;
      this._v1ChildSaInvalidSpi = undefined;
      this._v1InAggressiveReq = undefined;
      this._v1InAggressiveRsp = undefined;
      this._v1InAuthOnlyReq = undefined;
      this._v1InAuthOnlyRsp = undefined;
      this._v1InIdProtReq = undefined;
      this._v1InIdProtRsp = undefined;
      this._v1InInfoV1Req = undefined;
      this._v1InInfoV1Rsp = undefined;
      this._v1InNewGroupModeReq = undefined;
      this._v1InNewGroupModeRsp = undefined;
      this._v1InQuickModeReq = undefined;
      this._v1InQuickModeRsp = undefined;
      this._v1InTransactionReq = undefined;
      this._v1InTransactionRsp = undefined;
      this._v1OutAggressiveReq = undefined;
      this._v1OutAggressiveRsp = undefined;
      this._v1OutAuthOnlyReq = undefined;
      this._v1OutAuthOnlyRsp = undefined;
      this._v1OutIdProtReq = undefined;
      this._v1OutIdProtRsp = undefined;
      this._v1OutInfoV1Req = undefined;
      this._v1OutInfoV1Rsp = undefined;
      this._v1OutNewGroupModeReq = undefined;
      this._v1OutNewGroupModeRsp = undefined;
      this._v1OutQuickModeReq = undefined;
      this._v1OutQuickModeRsp = undefined;
      this._v1OutTransactionReq = undefined;
      this._v1OutTransactionRsp = undefined;
      this._v2ChildSaInvalidSpi = undefined;
      this._v2ChildSaRekey = undefined;
      this._v2InAuthReq = undefined;
      this._v2InAuthRsp = undefined;
      this._v2InCreateChildReq = undefined;
      this._v2InCreateChildRsp = undefined;
      this._v2InInfoReq = undefined;
      this._v2InInfoRsp = undefined;
      this._v2InInitReq = undefined;
      this._v2InInitRsp = undefined;
      this._v2InInvalid = undefined;
      this._v2InInvalidSpi = undefined;
      this._v2InitRekey = undefined;
      this._v2OutAuthReq = undefined;
      this._v2OutAuthRsp = undefined;
      this._v2OutCreateChildReq = undefined;
      this._v2OutCreateChildRsp = undefined;
      this._v2OutInfoReq = undefined;
      this._v2OutInfoRsp = undefined;
      this._v2OutInitReq = undefined;
      this._v2OutInitRsp = undefined;
      this._v2RspRekey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeCurrentVersion = value.ikeCurrentVersion;
      this._v1ChildSaInvalidSpi = value.v1ChildSaInvalidSpi;
      this._v1InAggressiveReq = value.v1InAggressiveReq;
      this._v1InAggressiveRsp = value.v1InAggressiveRsp;
      this._v1InAuthOnlyReq = value.v1InAuthOnlyReq;
      this._v1InAuthOnlyRsp = value.v1InAuthOnlyRsp;
      this._v1InIdProtReq = value.v1InIdProtReq;
      this._v1InIdProtRsp = value.v1InIdProtRsp;
      this._v1InInfoV1Req = value.v1InInfoV1Req;
      this._v1InInfoV1Rsp = value.v1InInfoV1Rsp;
      this._v1InNewGroupModeReq = value.v1InNewGroupModeReq;
      this._v1InNewGroupModeRsp = value.v1InNewGroupModeRsp;
      this._v1InQuickModeReq = value.v1InQuickModeReq;
      this._v1InQuickModeRsp = value.v1InQuickModeRsp;
      this._v1InTransactionReq = value.v1InTransactionReq;
      this._v1InTransactionRsp = value.v1InTransactionRsp;
      this._v1OutAggressiveReq = value.v1OutAggressiveReq;
      this._v1OutAggressiveRsp = value.v1OutAggressiveRsp;
      this._v1OutAuthOnlyReq = value.v1OutAuthOnlyReq;
      this._v1OutAuthOnlyRsp = value.v1OutAuthOnlyRsp;
      this._v1OutIdProtReq = value.v1OutIdProtReq;
      this._v1OutIdProtRsp = value.v1OutIdProtRsp;
      this._v1OutInfoV1Req = value.v1OutInfoV1Req;
      this._v1OutInfoV1Rsp = value.v1OutInfoV1Rsp;
      this._v1OutNewGroupModeReq = value.v1OutNewGroupModeReq;
      this._v1OutNewGroupModeRsp = value.v1OutNewGroupModeRsp;
      this._v1OutQuickModeReq = value.v1OutQuickModeReq;
      this._v1OutQuickModeRsp = value.v1OutQuickModeRsp;
      this._v1OutTransactionReq = value.v1OutTransactionReq;
      this._v1OutTransactionRsp = value.v1OutTransactionRsp;
      this._v2ChildSaInvalidSpi = value.v2ChildSaInvalidSpi;
      this._v2ChildSaRekey = value.v2ChildSaRekey;
      this._v2InAuthReq = value.v2InAuthReq;
      this._v2InAuthRsp = value.v2InAuthRsp;
      this._v2InCreateChildReq = value.v2InCreateChildReq;
      this._v2InCreateChildRsp = value.v2InCreateChildRsp;
      this._v2InInfoReq = value.v2InInfoReq;
      this._v2InInfoRsp = value.v2InInfoRsp;
      this._v2InInitReq = value.v2InInitReq;
      this._v2InInitRsp = value.v2InInitRsp;
      this._v2InInvalid = value.v2InInvalid;
      this._v2InInvalidSpi = value.v2InInvalidSpi;
      this._v2InitRekey = value.v2InitRekey;
      this._v2OutAuthReq = value.v2OutAuthReq;
      this._v2OutAuthRsp = value.v2OutAuthRsp;
      this._v2OutCreateChildReq = value.v2OutCreateChildReq;
      this._v2OutCreateChildRsp = value.v2OutCreateChildRsp;
      this._v2OutInfoReq = value.v2OutInfoReq;
      this._v2OutInfoRsp = value.v2OutInfoRsp;
      this._v2OutInitReq = value.v2OutInitReq;
      this._v2OutInitRsp = value.v2OutInitRsp;
      this._v2RspRekey = value.v2RspRekey;
    }
  }

  // ike_current_version - computed: false, optional: true, required: false
  private _ikeCurrentVersion?: number; 
  public get ikeCurrentVersion() {
    return this.getNumberAttribute('ike_current_version');
  }
  public set ikeCurrentVersion(value: number) {
    this._ikeCurrentVersion = value;
  }
  public resetIkeCurrentVersion() {
    this._ikeCurrentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeCurrentVersionInput() {
    return this._ikeCurrentVersion;
  }

  // v1_child_sa_invalid_spi - computed: false, optional: true, required: false
  private _v1ChildSaInvalidSpi?: number; 
  public get v1ChildSaInvalidSpi() {
    return this.getNumberAttribute('v1_child_sa_invalid_spi');
  }
  public set v1ChildSaInvalidSpi(value: number) {
    this._v1ChildSaInvalidSpi = value;
  }
  public resetV1ChildSaInvalidSpi() {
    this._v1ChildSaInvalidSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1ChildSaInvalidSpiInput() {
    return this._v1ChildSaInvalidSpi;
  }

  // v1_in_aggressive_req - computed: false, optional: true, required: false
  private _v1InAggressiveReq?: number; 
  public get v1InAggressiveReq() {
    return this.getNumberAttribute('v1_in_aggressive_req');
  }
  public set v1InAggressiveReq(value: number) {
    this._v1InAggressiveReq = value;
  }
  public resetV1InAggressiveReq() {
    this._v1InAggressiveReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAggressiveReqInput() {
    return this._v1InAggressiveReq;
  }

  // v1_in_aggressive_rsp - computed: false, optional: true, required: false
  private _v1InAggressiveRsp?: number; 
  public get v1InAggressiveRsp() {
    return this.getNumberAttribute('v1_in_aggressive_rsp');
  }
  public set v1InAggressiveRsp(value: number) {
    this._v1InAggressiveRsp = value;
  }
  public resetV1InAggressiveRsp() {
    this._v1InAggressiveRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAggressiveRspInput() {
    return this._v1InAggressiveRsp;
  }

  // v1_in_auth_only_req - computed: false, optional: true, required: false
  private _v1InAuthOnlyReq?: number; 
  public get v1InAuthOnlyReq() {
    return this.getNumberAttribute('v1_in_auth_only_req');
  }
  public set v1InAuthOnlyReq(value: number) {
    this._v1InAuthOnlyReq = value;
  }
  public resetV1InAuthOnlyReq() {
    this._v1InAuthOnlyReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAuthOnlyReqInput() {
    return this._v1InAuthOnlyReq;
  }

  // v1_in_auth_only_rsp - computed: false, optional: true, required: false
  private _v1InAuthOnlyRsp?: number; 
  public get v1InAuthOnlyRsp() {
    return this.getNumberAttribute('v1_in_auth_only_rsp');
  }
  public set v1InAuthOnlyRsp(value: number) {
    this._v1InAuthOnlyRsp = value;
  }
  public resetV1InAuthOnlyRsp() {
    this._v1InAuthOnlyRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAuthOnlyRspInput() {
    return this._v1InAuthOnlyRsp;
  }

  // v1_in_id_prot_req - computed: false, optional: true, required: false
  private _v1InIdProtReq?: number; 
  public get v1InIdProtReq() {
    return this.getNumberAttribute('v1_in_id_prot_req');
  }
  public set v1InIdProtReq(value: number) {
    this._v1InIdProtReq = value;
  }
  public resetV1InIdProtReq() {
    this._v1InIdProtReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InIdProtReqInput() {
    return this._v1InIdProtReq;
  }

  // v1_in_id_prot_rsp - computed: false, optional: true, required: false
  private _v1InIdProtRsp?: number; 
  public get v1InIdProtRsp() {
    return this.getNumberAttribute('v1_in_id_prot_rsp');
  }
  public set v1InIdProtRsp(value: number) {
    this._v1InIdProtRsp = value;
  }
  public resetV1InIdProtRsp() {
    this._v1InIdProtRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InIdProtRspInput() {
    return this._v1InIdProtRsp;
  }

  // v1_in_info_v1_req - computed: false, optional: true, required: false
  private _v1InInfoV1Req?: number; 
  public get v1InInfoV1Req() {
    return this.getNumberAttribute('v1_in_info_v1_req');
  }
  public set v1InInfoV1Req(value: number) {
    this._v1InInfoV1Req = value;
  }
  public resetV1InInfoV1Req() {
    this._v1InInfoV1Req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InInfoV1ReqInput() {
    return this._v1InInfoV1Req;
  }

  // v1_in_info_v1_rsp - computed: false, optional: true, required: false
  private _v1InInfoV1Rsp?: number; 
  public get v1InInfoV1Rsp() {
    return this.getNumberAttribute('v1_in_info_v1_rsp');
  }
  public set v1InInfoV1Rsp(value: number) {
    this._v1InInfoV1Rsp = value;
  }
  public resetV1InInfoV1Rsp() {
    this._v1InInfoV1Rsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InInfoV1RspInput() {
    return this._v1InInfoV1Rsp;
  }

  // v1_in_new_group_mode_req - computed: false, optional: true, required: false
  private _v1InNewGroupModeReq?: number; 
  public get v1InNewGroupModeReq() {
    return this.getNumberAttribute('v1_in_new_group_mode_req');
  }
  public set v1InNewGroupModeReq(value: number) {
    this._v1InNewGroupModeReq = value;
  }
  public resetV1InNewGroupModeReq() {
    this._v1InNewGroupModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InNewGroupModeReqInput() {
    return this._v1InNewGroupModeReq;
  }

  // v1_in_new_group_mode_rsp - computed: false, optional: true, required: false
  private _v1InNewGroupModeRsp?: number; 
  public get v1InNewGroupModeRsp() {
    return this.getNumberAttribute('v1_in_new_group_mode_rsp');
  }
  public set v1InNewGroupModeRsp(value: number) {
    this._v1InNewGroupModeRsp = value;
  }
  public resetV1InNewGroupModeRsp() {
    this._v1InNewGroupModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InNewGroupModeRspInput() {
    return this._v1InNewGroupModeRsp;
  }

  // v1_in_quick_mode_req - computed: false, optional: true, required: false
  private _v1InQuickModeReq?: number; 
  public get v1InQuickModeReq() {
    return this.getNumberAttribute('v1_in_quick_mode_req');
  }
  public set v1InQuickModeReq(value: number) {
    this._v1InQuickModeReq = value;
  }
  public resetV1InQuickModeReq() {
    this._v1InQuickModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InQuickModeReqInput() {
    return this._v1InQuickModeReq;
  }

  // v1_in_quick_mode_rsp - computed: false, optional: true, required: false
  private _v1InQuickModeRsp?: number; 
  public get v1InQuickModeRsp() {
    return this.getNumberAttribute('v1_in_quick_mode_rsp');
  }
  public set v1InQuickModeRsp(value: number) {
    this._v1InQuickModeRsp = value;
  }
  public resetV1InQuickModeRsp() {
    this._v1InQuickModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InQuickModeRspInput() {
    return this._v1InQuickModeRsp;
  }

  // v1_in_transaction_req - computed: false, optional: true, required: false
  private _v1InTransactionReq?: number; 
  public get v1InTransactionReq() {
    return this.getNumberAttribute('v1_in_transaction_req');
  }
  public set v1InTransactionReq(value: number) {
    this._v1InTransactionReq = value;
  }
  public resetV1InTransactionReq() {
    this._v1InTransactionReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InTransactionReqInput() {
    return this._v1InTransactionReq;
  }

  // v1_in_transaction_rsp - computed: false, optional: true, required: false
  private _v1InTransactionRsp?: number; 
  public get v1InTransactionRsp() {
    return this.getNumberAttribute('v1_in_transaction_rsp');
  }
  public set v1InTransactionRsp(value: number) {
    this._v1InTransactionRsp = value;
  }
  public resetV1InTransactionRsp() {
    this._v1InTransactionRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InTransactionRspInput() {
    return this._v1InTransactionRsp;
  }

  // v1_out_aggressive_req - computed: false, optional: true, required: false
  private _v1OutAggressiveReq?: number; 
  public get v1OutAggressiveReq() {
    return this.getNumberAttribute('v1_out_aggressive_req');
  }
  public set v1OutAggressiveReq(value: number) {
    this._v1OutAggressiveReq = value;
  }
  public resetV1OutAggressiveReq() {
    this._v1OutAggressiveReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAggressiveReqInput() {
    return this._v1OutAggressiveReq;
  }

  // v1_out_aggressive_rsp - computed: false, optional: true, required: false
  private _v1OutAggressiveRsp?: number; 
  public get v1OutAggressiveRsp() {
    return this.getNumberAttribute('v1_out_aggressive_rsp');
  }
  public set v1OutAggressiveRsp(value: number) {
    this._v1OutAggressiveRsp = value;
  }
  public resetV1OutAggressiveRsp() {
    this._v1OutAggressiveRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAggressiveRspInput() {
    return this._v1OutAggressiveRsp;
  }

  // v1_out_auth_only_req - computed: false, optional: true, required: false
  private _v1OutAuthOnlyReq?: number; 
  public get v1OutAuthOnlyReq() {
    return this.getNumberAttribute('v1_out_auth_only_req');
  }
  public set v1OutAuthOnlyReq(value: number) {
    this._v1OutAuthOnlyReq = value;
  }
  public resetV1OutAuthOnlyReq() {
    this._v1OutAuthOnlyReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAuthOnlyReqInput() {
    return this._v1OutAuthOnlyReq;
  }

  // v1_out_auth_only_rsp - computed: false, optional: true, required: false
  private _v1OutAuthOnlyRsp?: number; 
  public get v1OutAuthOnlyRsp() {
    return this.getNumberAttribute('v1_out_auth_only_rsp');
  }
  public set v1OutAuthOnlyRsp(value: number) {
    this._v1OutAuthOnlyRsp = value;
  }
  public resetV1OutAuthOnlyRsp() {
    this._v1OutAuthOnlyRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAuthOnlyRspInput() {
    return this._v1OutAuthOnlyRsp;
  }

  // v1_out_id_prot_req - computed: false, optional: true, required: false
  private _v1OutIdProtReq?: number; 
  public get v1OutIdProtReq() {
    return this.getNumberAttribute('v1_out_id_prot_req');
  }
  public set v1OutIdProtReq(value: number) {
    this._v1OutIdProtReq = value;
  }
  public resetV1OutIdProtReq() {
    this._v1OutIdProtReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutIdProtReqInput() {
    return this._v1OutIdProtReq;
  }

  // v1_out_id_prot_rsp - computed: false, optional: true, required: false
  private _v1OutIdProtRsp?: number; 
  public get v1OutIdProtRsp() {
    return this.getNumberAttribute('v1_out_id_prot_rsp');
  }
  public set v1OutIdProtRsp(value: number) {
    this._v1OutIdProtRsp = value;
  }
  public resetV1OutIdProtRsp() {
    this._v1OutIdProtRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutIdProtRspInput() {
    return this._v1OutIdProtRsp;
  }

  // v1_out_info_v1_req - computed: false, optional: true, required: false
  private _v1OutInfoV1Req?: number; 
  public get v1OutInfoV1Req() {
    return this.getNumberAttribute('v1_out_info_v1_req');
  }
  public set v1OutInfoV1Req(value: number) {
    this._v1OutInfoV1Req = value;
  }
  public resetV1OutInfoV1Req() {
    this._v1OutInfoV1Req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutInfoV1ReqInput() {
    return this._v1OutInfoV1Req;
  }

  // v1_out_info_v1_rsp - computed: false, optional: true, required: false
  private _v1OutInfoV1Rsp?: number; 
  public get v1OutInfoV1Rsp() {
    return this.getNumberAttribute('v1_out_info_v1_rsp');
  }
  public set v1OutInfoV1Rsp(value: number) {
    this._v1OutInfoV1Rsp = value;
  }
  public resetV1OutInfoV1Rsp() {
    this._v1OutInfoV1Rsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutInfoV1RspInput() {
    return this._v1OutInfoV1Rsp;
  }

  // v1_out_new_group_mode_req - computed: false, optional: true, required: false
  private _v1OutNewGroupModeReq?: number; 
  public get v1OutNewGroupModeReq() {
    return this.getNumberAttribute('v1_out_new_group_mode_req');
  }
  public set v1OutNewGroupModeReq(value: number) {
    this._v1OutNewGroupModeReq = value;
  }
  public resetV1OutNewGroupModeReq() {
    this._v1OutNewGroupModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutNewGroupModeReqInput() {
    return this._v1OutNewGroupModeReq;
  }

  // v1_out_new_group_mode_rsp - computed: false, optional: true, required: false
  private _v1OutNewGroupModeRsp?: number; 
  public get v1OutNewGroupModeRsp() {
    return this.getNumberAttribute('v1_out_new_group_mode_rsp');
  }
  public set v1OutNewGroupModeRsp(value: number) {
    this._v1OutNewGroupModeRsp = value;
  }
  public resetV1OutNewGroupModeRsp() {
    this._v1OutNewGroupModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutNewGroupModeRspInput() {
    return this._v1OutNewGroupModeRsp;
  }

  // v1_out_quick_mode_req - computed: false, optional: true, required: false
  private _v1OutQuickModeReq?: number; 
  public get v1OutQuickModeReq() {
    return this.getNumberAttribute('v1_out_quick_mode_req');
  }
  public set v1OutQuickModeReq(value: number) {
    this._v1OutQuickModeReq = value;
  }
  public resetV1OutQuickModeReq() {
    this._v1OutQuickModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutQuickModeReqInput() {
    return this._v1OutQuickModeReq;
  }

  // v1_out_quick_mode_rsp - computed: false, optional: true, required: false
  private _v1OutQuickModeRsp?: number; 
  public get v1OutQuickModeRsp() {
    return this.getNumberAttribute('v1_out_quick_mode_rsp');
  }
  public set v1OutQuickModeRsp(value: number) {
    this._v1OutQuickModeRsp = value;
  }
  public resetV1OutQuickModeRsp() {
    this._v1OutQuickModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutQuickModeRspInput() {
    return this._v1OutQuickModeRsp;
  }

  // v1_out_transaction_req - computed: false, optional: true, required: false
  private _v1OutTransactionReq?: number; 
  public get v1OutTransactionReq() {
    return this.getNumberAttribute('v1_out_transaction_req');
  }
  public set v1OutTransactionReq(value: number) {
    this._v1OutTransactionReq = value;
  }
  public resetV1OutTransactionReq() {
    this._v1OutTransactionReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutTransactionReqInput() {
    return this._v1OutTransactionReq;
  }

  // v1_out_transaction_rsp - computed: false, optional: true, required: false
  private _v1OutTransactionRsp?: number; 
  public get v1OutTransactionRsp() {
    return this.getNumberAttribute('v1_out_transaction_rsp');
  }
  public set v1OutTransactionRsp(value: number) {
    this._v1OutTransactionRsp = value;
  }
  public resetV1OutTransactionRsp() {
    this._v1OutTransactionRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutTransactionRspInput() {
    return this._v1OutTransactionRsp;
  }

  // v2_child_sa_invalid_spi - computed: false, optional: true, required: false
  private _v2ChildSaInvalidSpi?: number; 
  public get v2ChildSaInvalidSpi() {
    return this.getNumberAttribute('v2_child_sa_invalid_spi');
  }
  public set v2ChildSaInvalidSpi(value: number) {
    this._v2ChildSaInvalidSpi = value;
  }
  public resetV2ChildSaInvalidSpi() {
    this._v2ChildSaInvalidSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ChildSaInvalidSpiInput() {
    return this._v2ChildSaInvalidSpi;
  }

  // v2_child_sa_rekey - computed: false, optional: true, required: false
  private _v2ChildSaRekey?: number; 
  public get v2ChildSaRekey() {
    return this.getNumberAttribute('v2_child_sa_rekey');
  }
  public set v2ChildSaRekey(value: number) {
    this._v2ChildSaRekey = value;
  }
  public resetV2ChildSaRekey() {
    this._v2ChildSaRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ChildSaRekeyInput() {
    return this._v2ChildSaRekey;
  }

  // v2_in_auth_req - computed: false, optional: true, required: false
  private _v2InAuthReq?: number; 
  public get v2InAuthReq() {
    return this.getNumberAttribute('v2_in_auth_req');
  }
  public set v2InAuthReq(value: number) {
    this._v2InAuthReq = value;
  }
  public resetV2InAuthReq() {
    this._v2InAuthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InAuthReqInput() {
    return this._v2InAuthReq;
  }

  // v2_in_auth_rsp - computed: false, optional: true, required: false
  private _v2InAuthRsp?: number; 
  public get v2InAuthRsp() {
    return this.getNumberAttribute('v2_in_auth_rsp');
  }
  public set v2InAuthRsp(value: number) {
    this._v2InAuthRsp = value;
  }
  public resetV2InAuthRsp() {
    this._v2InAuthRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InAuthRspInput() {
    return this._v2InAuthRsp;
  }

  // v2_in_create_child_req - computed: false, optional: true, required: false
  private _v2InCreateChildReq?: number; 
  public get v2InCreateChildReq() {
    return this.getNumberAttribute('v2_in_create_child_req');
  }
  public set v2InCreateChildReq(value: number) {
    this._v2InCreateChildReq = value;
  }
  public resetV2InCreateChildReq() {
    this._v2InCreateChildReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InCreateChildReqInput() {
    return this._v2InCreateChildReq;
  }

  // v2_in_create_child_rsp - computed: false, optional: true, required: false
  private _v2InCreateChildRsp?: number; 
  public get v2InCreateChildRsp() {
    return this.getNumberAttribute('v2_in_create_child_rsp');
  }
  public set v2InCreateChildRsp(value: number) {
    this._v2InCreateChildRsp = value;
  }
  public resetV2InCreateChildRsp() {
    this._v2InCreateChildRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InCreateChildRspInput() {
    return this._v2InCreateChildRsp;
  }

  // v2_in_info_req - computed: false, optional: true, required: false
  private _v2InInfoReq?: number; 
  public get v2InInfoReq() {
    return this.getNumberAttribute('v2_in_info_req');
  }
  public set v2InInfoReq(value: number) {
    this._v2InInfoReq = value;
  }
  public resetV2InInfoReq() {
    this._v2InInfoReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInfoReqInput() {
    return this._v2InInfoReq;
  }

  // v2_in_info_rsp - computed: false, optional: true, required: false
  private _v2InInfoRsp?: number; 
  public get v2InInfoRsp() {
    return this.getNumberAttribute('v2_in_info_rsp');
  }
  public set v2InInfoRsp(value: number) {
    this._v2InInfoRsp = value;
  }
  public resetV2InInfoRsp() {
    this._v2InInfoRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInfoRspInput() {
    return this._v2InInfoRsp;
  }

  // v2_in_init_req - computed: false, optional: true, required: false
  private _v2InInitReq?: number; 
  public get v2InInitReq() {
    return this.getNumberAttribute('v2_in_init_req');
  }
  public set v2InInitReq(value: number) {
    this._v2InInitReq = value;
  }
  public resetV2InInitReq() {
    this._v2InInitReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInitReqInput() {
    return this._v2InInitReq;
  }

  // v2_in_init_rsp - computed: false, optional: true, required: false
  private _v2InInitRsp?: number; 
  public get v2InInitRsp() {
    return this.getNumberAttribute('v2_in_init_rsp');
  }
  public set v2InInitRsp(value: number) {
    this._v2InInitRsp = value;
  }
  public resetV2InInitRsp() {
    this._v2InInitRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInitRspInput() {
    return this._v2InInitRsp;
  }

  // v2_in_invalid - computed: false, optional: true, required: false
  private _v2InInvalid?: number; 
  public get v2InInvalid() {
    return this.getNumberAttribute('v2_in_invalid');
  }
  public set v2InInvalid(value: number) {
    this._v2InInvalid = value;
  }
  public resetV2InInvalid() {
    this._v2InInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInvalidInput() {
    return this._v2InInvalid;
  }

  // v2_in_invalid_spi - computed: false, optional: true, required: false
  private _v2InInvalidSpi?: number; 
  public get v2InInvalidSpi() {
    return this.getNumberAttribute('v2_in_invalid_spi');
  }
  public set v2InInvalidSpi(value: number) {
    this._v2InInvalidSpi = value;
  }
  public resetV2InInvalidSpi() {
    this._v2InInvalidSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInvalidSpiInput() {
    return this._v2InInvalidSpi;
  }

  // v2_init_rekey - computed: false, optional: true, required: false
  private _v2InitRekey?: number; 
  public get v2InitRekey() {
    return this.getNumberAttribute('v2_init_rekey');
  }
  public set v2InitRekey(value: number) {
    this._v2InitRekey = value;
  }
  public resetV2InitRekey() {
    this._v2InitRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InitRekeyInput() {
    return this._v2InitRekey;
  }

  // v2_out_auth_req - computed: false, optional: true, required: false
  private _v2OutAuthReq?: number; 
  public get v2OutAuthReq() {
    return this.getNumberAttribute('v2_out_auth_req');
  }
  public set v2OutAuthReq(value: number) {
    this._v2OutAuthReq = value;
  }
  public resetV2OutAuthReq() {
    this._v2OutAuthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutAuthReqInput() {
    return this._v2OutAuthReq;
  }

  // v2_out_auth_rsp - computed: false, optional: true, required: false
  private _v2OutAuthRsp?: number; 
  public get v2OutAuthRsp() {
    return this.getNumberAttribute('v2_out_auth_rsp');
  }
  public set v2OutAuthRsp(value: number) {
    this._v2OutAuthRsp = value;
  }
  public resetV2OutAuthRsp() {
    this._v2OutAuthRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutAuthRspInput() {
    return this._v2OutAuthRsp;
  }

  // v2_out_create_child_req - computed: false, optional: true, required: false
  private _v2OutCreateChildReq?: number; 
  public get v2OutCreateChildReq() {
    return this.getNumberAttribute('v2_out_create_child_req');
  }
  public set v2OutCreateChildReq(value: number) {
    this._v2OutCreateChildReq = value;
  }
  public resetV2OutCreateChildReq() {
    this._v2OutCreateChildReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutCreateChildReqInput() {
    return this._v2OutCreateChildReq;
  }

  // v2_out_create_child_rsp - computed: false, optional: true, required: false
  private _v2OutCreateChildRsp?: number; 
  public get v2OutCreateChildRsp() {
    return this.getNumberAttribute('v2_out_create_child_rsp');
  }
  public set v2OutCreateChildRsp(value: number) {
    this._v2OutCreateChildRsp = value;
  }
  public resetV2OutCreateChildRsp() {
    this._v2OutCreateChildRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutCreateChildRspInput() {
    return this._v2OutCreateChildRsp;
  }

  // v2_out_info_req - computed: false, optional: true, required: false
  private _v2OutInfoReq?: number; 
  public get v2OutInfoReq() {
    return this.getNumberAttribute('v2_out_info_req');
  }
  public set v2OutInfoReq(value: number) {
    this._v2OutInfoReq = value;
  }
  public resetV2OutInfoReq() {
    this._v2OutInfoReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInfoReqInput() {
    return this._v2OutInfoReq;
  }

  // v2_out_info_rsp - computed: false, optional: true, required: false
  private _v2OutInfoRsp?: number; 
  public get v2OutInfoRsp() {
    return this.getNumberAttribute('v2_out_info_rsp');
  }
  public set v2OutInfoRsp(value: number) {
    this._v2OutInfoRsp = value;
  }
  public resetV2OutInfoRsp() {
    this._v2OutInfoRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInfoRspInput() {
    return this._v2OutInfoRsp;
  }

  // v2_out_init_req - computed: false, optional: true, required: false
  private _v2OutInitReq?: number; 
  public get v2OutInitReq() {
    return this.getNumberAttribute('v2_out_init_req');
  }
  public set v2OutInitReq(value: number) {
    this._v2OutInitReq = value;
  }
  public resetV2OutInitReq() {
    this._v2OutInitReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInitReqInput() {
    return this._v2OutInitReq;
  }

  // v2_out_init_rsp - computed: false, optional: true, required: false
  private _v2OutInitRsp?: number; 
  public get v2OutInitRsp() {
    return this.getNumberAttribute('v2_out_init_rsp');
  }
  public set v2OutInitRsp(value: number) {
    this._v2OutInitRsp = value;
  }
  public resetV2OutInitRsp() {
    this._v2OutInitRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInitRspInput() {
    return this._v2OutInitRsp;
  }

  // v2_rsp_rekey - computed: false, optional: true, required: false
  private _v2RspRekey?: number; 
  public get v2RspRekey() {
    return this.getNumberAttribute('v2_rsp_rekey');
  }
  public set v2RspRekey(value: number) {
    this._v2RspRekey = value;
  }
  public resetV2RspRekey() {
    this._v2RspRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2RspRekeyInput() {
    return this._v2RspRekey;
  }
}
export interface DataThunderVpnStatsIkeGatewayListStruct {
  /**
  * IKE-gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#name DataThunderVpnStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#stats DataThunderVpnStats#stats}
  */
  readonly stats?: DataThunderVpnStatsIkeGatewayListStats;
}

export function dataThunderVpnStatsIkeGatewayListStructToTerraform(struct?: DataThunderVpnStatsIkeGatewayListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats: dataThunderVpnStatsIkeGatewayListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVpnStatsIkeGatewayListStructToHclTerraform(struct?: DataThunderVpnStatsIkeGatewayListStruct | cdktf.IResolvable): any {
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
    stats: {
      value: dataThunderVpnStatsIkeGatewayListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnStatsIkeGatewayListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsIkeGatewayListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnStatsIkeGatewayListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsIkeGatewayListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._stats.internalValue = value.stats;
    }
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVpnStatsIkeGatewayListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVpnStatsIkeGatewayListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderVpnStatsIkeGatewayListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnStatsIkeGatewayListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnStatsIkeGatewayListStructOutputReference {
    return new DataThunderVpnStatsIkeGatewayListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnStatsIkeStatsGlobalStats {
  /**
  * Incoming Aggressive Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_aggressive_req DataThunderVpnStats#v1_in_aggressive_req}
  */
  readonly v1InAggressiveReq?: number;
  /**
  * Incoming Aggressive Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_aggressive_rsp DataThunderVpnStats#v1_in_aggressive_rsp}
  */
  readonly v1InAggressiveRsp?: number;
  /**
  * Incoming Auth Only Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_auth_only_req DataThunderVpnStats#v1_in_auth_only_req}
  */
  readonly v1InAuthOnlyReq?: number;
  /**
  * Incoming Auth Only Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_auth_only_rsp DataThunderVpnStats#v1_in_auth_only_rsp}
  */
  readonly v1InAuthOnlyRsp?: number;
  /**
  * Incoming ID Protection Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_id_prot_req DataThunderVpnStats#v1_in_id_prot_req}
  */
  readonly v1InIdProtReq?: number;
  /**
  * Incoming ID Protection Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_id_prot_rsp DataThunderVpnStats#v1_in_id_prot_rsp}
  */
  readonly v1InIdProtRsp?: number;
  /**
  * Incoming Info Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_info_v1_req DataThunderVpnStats#v1_in_info_v1_req}
  */
  readonly v1InInfoV1Req?: number;
  /**
  * Incoming Info Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_info_v1_rsp DataThunderVpnStats#v1_in_info_v1_rsp}
  */
  readonly v1InInfoV1Rsp?: number;
  /**
  * Incoming New Group Mode Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_new_group_mode_req DataThunderVpnStats#v1_in_new_group_mode_req}
  */
  readonly v1InNewGroupModeReq?: number;
  /**
  * Incoming New Group Mode Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_new_group_mode_rsp DataThunderVpnStats#v1_in_new_group_mode_rsp}
  */
  readonly v1InNewGroupModeRsp?: number;
  /**
  * Incoming Quick Mode Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_quick_mode_req DataThunderVpnStats#v1_in_quick_mode_req}
  */
  readonly v1InQuickModeReq?: number;
  /**
  * Incoming Quick Mode Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_quick_mode_rsp DataThunderVpnStats#v1_in_quick_mode_rsp}
  */
  readonly v1InQuickModeRsp?: number;
  /**
  * Incoming Transaction Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_transaction_req DataThunderVpnStats#v1_in_transaction_req}
  */
  readonly v1InTransactionReq?: number;
  /**
  * Incoming Transaction Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_in_transaction_rsp DataThunderVpnStats#v1_in_transaction_rsp}
  */
  readonly v1InTransactionRsp?: number;
  /**
  * Outgoing Aggressive Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_aggressive_req DataThunderVpnStats#v1_out_aggressive_req}
  */
  readonly v1OutAggressiveReq?: number;
  /**
  * Outgoing Aggressive Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_aggressive_rsp DataThunderVpnStats#v1_out_aggressive_rsp}
  */
  readonly v1OutAggressiveRsp?: number;
  /**
  * Outgoing Auth Only Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_auth_only_req DataThunderVpnStats#v1_out_auth_only_req}
  */
  readonly v1OutAuthOnlyReq?: number;
  /**
  * Outgoing Auth Only Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_auth_only_rsp DataThunderVpnStats#v1_out_auth_only_rsp}
  */
  readonly v1OutAuthOnlyRsp?: number;
  /**
  * Outgoing ID Protection Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_id_prot_req DataThunderVpnStats#v1_out_id_prot_req}
  */
  readonly v1OutIdProtReq?: number;
  /**
  * Outgoing ID Protection Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_id_prot_rsp DataThunderVpnStats#v1_out_id_prot_rsp}
  */
  readonly v1OutIdProtRsp?: number;
  /**
  * Outgoing Info Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_info_v1_req DataThunderVpnStats#v1_out_info_v1_req}
  */
  readonly v1OutInfoV1Req?: number;
  /**
  * Outgoing Info Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_info_v1_rsp DataThunderVpnStats#v1_out_info_v1_rsp}
  */
  readonly v1OutInfoV1Rsp?: number;
  /**
  * Outgoing New Group Mode Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_new_group_mode_req DataThunderVpnStats#v1_out_new_group_mode_req}
  */
  readonly v1OutNewGroupModeReq?: number;
  /**
  * Outgoing New Group Mode Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_new_group_mode_rsp DataThunderVpnStats#v1_out_new_group_mode_rsp}
  */
  readonly v1OutNewGroupModeRsp?: number;
  /**
  * Outgoing Quick Mode Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_quick_mode_req DataThunderVpnStats#v1_out_quick_mode_req}
  */
  readonly v1OutQuickModeReq?: number;
  /**
  * Outgoing Quick Mode Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_quick_mode_rsp DataThunderVpnStats#v1_out_quick_mode_rsp}
  */
  readonly v1OutQuickModeRsp?: number;
  /**
  * Outgoing Transaction Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_transaction_req DataThunderVpnStats#v1_out_transaction_req}
  */
  readonly v1OutTransactionReq?: number;
  /**
  * Outgoing Transaction Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v1_out_transaction_rsp DataThunderVpnStats#v1_out_transaction_rsp}
  */
  readonly v1OutTransactionRsp?: number;
  /**
  * Child SA Rekey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_child_sa_rekey DataThunderVpnStats#v2_child_sa_rekey}
  */
  readonly v2ChildSaRekey?: number;
  /**
  * Incoming Auth Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_auth_req DataThunderVpnStats#v2_in_auth_req}
  */
  readonly v2InAuthReq?: number;
  /**
  * Incoming Auth Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_auth_rsp DataThunderVpnStats#v2_in_auth_rsp}
  */
  readonly v2InAuthRsp?: number;
  /**
  * Incoming Create Child Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_create_child_req DataThunderVpnStats#v2_in_create_child_req}
  */
  readonly v2InCreateChildReq?: number;
  /**
  * Incoming Create Child Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_create_child_rsp DataThunderVpnStats#v2_in_create_child_rsp}
  */
  readonly v2InCreateChildRsp?: number;
  /**
  * Incoming Info Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_info_req DataThunderVpnStats#v2_in_info_req}
  */
  readonly v2InInfoReq?: number;
  /**
  * Incoming Info Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_info_rsp DataThunderVpnStats#v2_in_info_rsp}
  */
  readonly v2InInfoRsp?: number;
  /**
  * Incoming Init Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_init_req DataThunderVpnStats#v2_in_init_req}
  */
  readonly v2InInitReq?: number;
  /**
  * Incoming Init Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_init_rsp DataThunderVpnStats#v2_in_init_rsp}
  */
  readonly v2InInitRsp?: number;
  /**
  * Incoming Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_invalid DataThunderVpnStats#v2_in_invalid}
  */
  readonly v2InInvalid?: number;
  /**
  * Incoming Invalid SPI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_in_invalid_spi DataThunderVpnStats#v2_in_invalid_spi}
  */
  readonly v2InInvalidSpi?: number;
  /**
  * Initiate Rekey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_init_rekey DataThunderVpnStats#v2_init_rekey}
  */
  readonly v2InitRekey?: number;
  /**
  * Outgoing Auth Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_auth_req DataThunderVpnStats#v2_out_auth_req}
  */
  readonly v2OutAuthReq?: number;
  /**
  * Outgoing Auth Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_auth_rsp DataThunderVpnStats#v2_out_auth_rsp}
  */
  readonly v2OutAuthRsp?: number;
  /**
  * Outgoing Create Child Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_create_child_req DataThunderVpnStats#v2_out_create_child_req}
  */
  readonly v2OutCreateChildReq?: number;
  /**
  * Outgoing Create Child Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_create_child_rsp DataThunderVpnStats#v2_out_create_child_rsp}
  */
  readonly v2OutCreateChildRsp?: number;
  /**
  * Outgoing Info Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_info_req DataThunderVpnStats#v2_out_info_req}
  */
  readonly v2OutInfoReq?: number;
  /**
  * Outgoing Info Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_info_rsp DataThunderVpnStats#v2_out_info_rsp}
  */
  readonly v2OutInfoRsp?: number;
  /**
  * Outgoing Init Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_init_req DataThunderVpnStats#v2_out_init_req}
  */
  readonly v2OutInitReq?: number;
  /**
  * Outgoing Init Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_out_init_rsp DataThunderVpnStats#v2_out_init_rsp}
  */
  readonly v2OutInitRsp?: number;
  /**
  * Respond Rekey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#v2_rsp_rekey DataThunderVpnStats#v2_rsp_rekey}
  */
  readonly v2RspRekey?: number;
}

export function dataThunderVpnStatsIkeStatsGlobalStatsToTerraform(struct?: DataThunderVpnStatsIkeStatsGlobalStatsOutputReference | DataThunderVpnStatsIkeStatsGlobalStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    v1_in_aggressive_req: cdktf.numberToTerraform(struct!.v1InAggressiveReq),
    v1_in_aggressive_rsp: cdktf.numberToTerraform(struct!.v1InAggressiveRsp),
    v1_in_auth_only_req: cdktf.numberToTerraform(struct!.v1InAuthOnlyReq),
    v1_in_auth_only_rsp: cdktf.numberToTerraform(struct!.v1InAuthOnlyRsp),
    v1_in_id_prot_req: cdktf.numberToTerraform(struct!.v1InIdProtReq),
    v1_in_id_prot_rsp: cdktf.numberToTerraform(struct!.v1InIdProtRsp),
    v1_in_info_v1_req: cdktf.numberToTerraform(struct!.v1InInfoV1Req),
    v1_in_info_v1_rsp: cdktf.numberToTerraform(struct!.v1InInfoV1Rsp),
    v1_in_new_group_mode_req: cdktf.numberToTerraform(struct!.v1InNewGroupModeReq),
    v1_in_new_group_mode_rsp: cdktf.numberToTerraform(struct!.v1InNewGroupModeRsp),
    v1_in_quick_mode_req: cdktf.numberToTerraform(struct!.v1InQuickModeReq),
    v1_in_quick_mode_rsp: cdktf.numberToTerraform(struct!.v1InQuickModeRsp),
    v1_in_transaction_req: cdktf.numberToTerraform(struct!.v1InTransactionReq),
    v1_in_transaction_rsp: cdktf.numberToTerraform(struct!.v1InTransactionRsp),
    v1_out_aggressive_req: cdktf.numberToTerraform(struct!.v1OutAggressiveReq),
    v1_out_aggressive_rsp: cdktf.numberToTerraform(struct!.v1OutAggressiveRsp),
    v1_out_auth_only_req: cdktf.numberToTerraform(struct!.v1OutAuthOnlyReq),
    v1_out_auth_only_rsp: cdktf.numberToTerraform(struct!.v1OutAuthOnlyRsp),
    v1_out_id_prot_req: cdktf.numberToTerraform(struct!.v1OutIdProtReq),
    v1_out_id_prot_rsp: cdktf.numberToTerraform(struct!.v1OutIdProtRsp),
    v1_out_info_v1_req: cdktf.numberToTerraform(struct!.v1OutInfoV1Req),
    v1_out_info_v1_rsp: cdktf.numberToTerraform(struct!.v1OutInfoV1Rsp),
    v1_out_new_group_mode_req: cdktf.numberToTerraform(struct!.v1OutNewGroupModeReq),
    v1_out_new_group_mode_rsp: cdktf.numberToTerraform(struct!.v1OutNewGroupModeRsp),
    v1_out_quick_mode_req: cdktf.numberToTerraform(struct!.v1OutQuickModeReq),
    v1_out_quick_mode_rsp: cdktf.numberToTerraform(struct!.v1OutQuickModeRsp),
    v1_out_transaction_req: cdktf.numberToTerraform(struct!.v1OutTransactionReq),
    v1_out_transaction_rsp: cdktf.numberToTerraform(struct!.v1OutTransactionRsp),
    v2_child_sa_rekey: cdktf.numberToTerraform(struct!.v2ChildSaRekey),
    v2_in_auth_req: cdktf.numberToTerraform(struct!.v2InAuthReq),
    v2_in_auth_rsp: cdktf.numberToTerraform(struct!.v2InAuthRsp),
    v2_in_create_child_req: cdktf.numberToTerraform(struct!.v2InCreateChildReq),
    v2_in_create_child_rsp: cdktf.numberToTerraform(struct!.v2InCreateChildRsp),
    v2_in_info_req: cdktf.numberToTerraform(struct!.v2InInfoReq),
    v2_in_info_rsp: cdktf.numberToTerraform(struct!.v2InInfoRsp),
    v2_in_init_req: cdktf.numberToTerraform(struct!.v2InInitReq),
    v2_in_init_rsp: cdktf.numberToTerraform(struct!.v2InInitRsp),
    v2_in_invalid: cdktf.numberToTerraform(struct!.v2InInvalid),
    v2_in_invalid_spi: cdktf.numberToTerraform(struct!.v2InInvalidSpi),
    v2_init_rekey: cdktf.numberToTerraform(struct!.v2InitRekey),
    v2_out_auth_req: cdktf.numberToTerraform(struct!.v2OutAuthReq),
    v2_out_auth_rsp: cdktf.numberToTerraform(struct!.v2OutAuthRsp),
    v2_out_create_child_req: cdktf.numberToTerraform(struct!.v2OutCreateChildReq),
    v2_out_create_child_rsp: cdktf.numberToTerraform(struct!.v2OutCreateChildRsp),
    v2_out_info_req: cdktf.numberToTerraform(struct!.v2OutInfoReq),
    v2_out_info_rsp: cdktf.numberToTerraform(struct!.v2OutInfoRsp),
    v2_out_init_req: cdktf.numberToTerraform(struct!.v2OutInitReq),
    v2_out_init_rsp: cdktf.numberToTerraform(struct!.v2OutInitRsp),
    v2_rsp_rekey: cdktf.numberToTerraform(struct!.v2RspRekey),
  }
}


export function dataThunderVpnStatsIkeStatsGlobalStatsToHclTerraform(struct?: DataThunderVpnStatsIkeStatsGlobalStatsOutputReference | DataThunderVpnStatsIkeStatsGlobalStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    v1_in_aggressive_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InAggressiveReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_aggressive_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InAggressiveRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_auth_only_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InAuthOnlyReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_auth_only_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InAuthOnlyRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_id_prot_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InIdProtReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_id_prot_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InIdProtRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_info_v1_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InInfoV1Req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_info_v1_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InInfoV1Rsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_new_group_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InNewGroupModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_new_group_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InNewGroupModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_quick_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InQuickModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_quick_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InQuickModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_transaction_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InTransactionReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_transaction_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InTransactionRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_aggressive_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAggressiveReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_aggressive_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAggressiveRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_auth_only_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAuthOnlyReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_auth_only_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAuthOnlyRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_id_prot_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutIdProtReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_id_prot_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutIdProtRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_info_v1_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutInfoV1Req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_info_v1_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutInfoV1Rsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_new_group_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutNewGroupModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_new_group_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutNewGroupModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_quick_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutQuickModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_quick_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutQuickModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_transaction_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutTransactionReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_transaction_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutTransactionRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_child_sa_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2ChildSaRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_auth_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InAuthReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_auth_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InAuthRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_create_child_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InCreateChildReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_create_child_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InCreateChildRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_info_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InInfoReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_info_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InInfoRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_init_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InInitReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_init_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InInitRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_invalid: {
      value: cdktf.numberToHclTerraform(struct!.v2InInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_invalid_spi: {
      value: cdktf.numberToHclTerraform(struct!.v2InInvalidSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_init_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2InitRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_auth_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutAuthReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_auth_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutAuthRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_create_child_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutCreateChildReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_create_child_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutCreateChildRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_info_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInfoReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_info_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInfoRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_init_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInitReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_init_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInitRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_rsp_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2RspRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsIkeStatsGlobalStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnStatsIkeStatsGlobalStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._v1InAggressiveReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAggressiveReq = this._v1InAggressiveReq;
    }
    if (this._v1InAggressiveRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAggressiveRsp = this._v1InAggressiveRsp;
    }
    if (this._v1InAuthOnlyReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAuthOnlyReq = this._v1InAuthOnlyReq;
    }
    if (this._v1InAuthOnlyRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAuthOnlyRsp = this._v1InAuthOnlyRsp;
    }
    if (this._v1InIdProtReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InIdProtReq = this._v1InIdProtReq;
    }
    if (this._v1InIdProtRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InIdProtRsp = this._v1InIdProtRsp;
    }
    if (this._v1InInfoV1Req !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InInfoV1Req = this._v1InInfoV1Req;
    }
    if (this._v1InInfoV1Rsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InInfoV1Rsp = this._v1InInfoV1Rsp;
    }
    if (this._v1InNewGroupModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InNewGroupModeReq = this._v1InNewGroupModeReq;
    }
    if (this._v1InNewGroupModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InNewGroupModeRsp = this._v1InNewGroupModeRsp;
    }
    if (this._v1InQuickModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InQuickModeReq = this._v1InQuickModeReq;
    }
    if (this._v1InQuickModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InQuickModeRsp = this._v1InQuickModeRsp;
    }
    if (this._v1InTransactionReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InTransactionReq = this._v1InTransactionReq;
    }
    if (this._v1InTransactionRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InTransactionRsp = this._v1InTransactionRsp;
    }
    if (this._v1OutAggressiveReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAggressiveReq = this._v1OutAggressiveReq;
    }
    if (this._v1OutAggressiveRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAggressiveRsp = this._v1OutAggressiveRsp;
    }
    if (this._v1OutAuthOnlyReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAuthOnlyReq = this._v1OutAuthOnlyReq;
    }
    if (this._v1OutAuthOnlyRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAuthOnlyRsp = this._v1OutAuthOnlyRsp;
    }
    if (this._v1OutIdProtReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutIdProtReq = this._v1OutIdProtReq;
    }
    if (this._v1OutIdProtRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutIdProtRsp = this._v1OutIdProtRsp;
    }
    if (this._v1OutInfoV1Req !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutInfoV1Req = this._v1OutInfoV1Req;
    }
    if (this._v1OutInfoV1Rsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutInfoV1Rsp = this._v1OutInfoV1Rsp;
    }
    if (this._v1OutNewGroupModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutNewGroupModeReq = this._v1OutNewGroupModeReq;
    }
    if (this._v1OutNewGroupModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutNewGroupModeRsp = this._v1OutNewGroupModeRsp;
    }
    if (this._v1OutQuickModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutQuickModeReq = this._v1OutQuickModeReq;
    }
    if (this._v1OutQuickModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutQuickModeRsp = this._v1OutQuickModeRsp;
    }
    if (this._v1OutTransactionReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutTransactionReq = this._v1OutTransactionReq;
    }
    if (this._v1OutTransactionRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutTransactionRsp = this._v1OutTransactionRsp;
    }
    if (this._v2ChildSaRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2ChildSaRekey = this._v2ChildSaRekey;
    }
    if (this._v2InAuthReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InAuthReq = this._v2InAuthReq;
    }
    if (this._v2InAuthRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InAuthRsp = this._v2InAuthRsp;
    }
    if (this._v2InCreateChildReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InCreateChildReq = this._v2InCreateChildReq;
    }
    if (this._v2InCreateChildRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InCreateChildRsp = this._v2InCreateChildRsp;
    }
    if (this._v2InInfoReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInfoReq = this._v2InInfoReq;
    }
    if (this._v2InInfoRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInfoRsp = this._v2InInfoRsp;
    }
    if (this._v2InInitReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInitReq = this._v2InInitReq;
    }
    if (this._v2InInitRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInitRsp = this._v2InInitRsp;
    }
    if (this._v2InInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInvalid = this._v2InInvalid;
    }
    if (this._v2InInvalidSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInvalidSpi = this._v2InInvalidSpi;
    }
    if (this._v2InitRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InitRekey = this._v2InitRekey;
    }
    if (this._v2OutAuthReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutAuthReq = this._v2OutAuthReq;
    }
    if (this._v2OutAuthRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutAuthRsp = this._v2OutAuthRsp;
    }
    if (this._v2OutCreateChildReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutCreateChildReq = this._v2OutCreateChildReq;
    }
    if (this._v2OutCreateChildRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutCreateChildRsp = this._v2OutCreateChildRsp;
    }
    if (this._v2OutInfoReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInfoReq = this._v2OutInfoReq;
    }
    if (this._v2OutInfoRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInfoRsp = this._v2OutInfoRsp;
    }
    if (this._v2OutInitReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInitReq = this._v2OutInitReq;
    }
    if (this._v2OutInitRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInitRsp = this._v2OutInitRsp;
    }
    if (this._v2RspRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2RspRekey = this._v2RspRekey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsIkeStatsGlobalStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._v1InAggressiveReq = undefined;
      this._v1InAggressiveRsp = undefined;
      this._v1InAuthOnlyReq = undefined;
      this._v1InAuthOnlyRsp = undefined;
      this._v1InIdProtReq = undefined;
      this._v1InIdProtRsp = undefined;
      this._v1InInfoV1Req = undefined;
      this._v1InInfoV1Rsp = undefined;
      this._v1InNewGroupModeReq = undefined;
      this._v1InNewGroupModeRsp = undefined;
      this._v1InQuickModeReq = undefined;
      this._v1InQuickModeRsp = undefined;
      this._v1InTransactionReq = undefined;
      this._v1InTransactionRsp = undefined;
      this._v1OutAggressiveReq = undefined;
      this._v1OutAggressiveRsp = undefined;
      this._v1OutAuthOnlyReq = undefined;
      this._v1OutAuthOnlyRsp = undefined;
      this._v1OutIdProtReq = undefined;
      this._v1OutIdProtRsp = undefined;
      this._v1OutInfoV1Req = undefined;
      this._v1OutInfoV1Rsp = undefined;
      this._v1OutNewGroupModeReq = undefined;
      this._v1OutNewGroupModeRsp = undefined;
      this._v1OutQuickModeReq = undefined;
      this._v1OutQuickModeRsp = undefined;
      this._v1OutTransactionReq = undefined;
      this._v1OutTransactionRsp = undefined;
      this._v2ChildSaRekey = undefined;
      this._v2InAuthReq = undefined;
      this._v2InAuthRsp = undefined;
      this._v2InCreateChildReq = undefined;
      this._v2InCreateChildRsp = undefined;
      this._v2InInfoReq = undefined;
      this._v2InInfoRsp = undefined;
      this._v2InInitReq = undefined;
      this._v2InInitRsp = undefined;
      this._v2InInvalid = undefined;
      this._v2InInvalidSpi = undefined;
      this._v2InitRekey = undefined;
      this._v2OutAuthReq = undefined;
      this._v2OutAuthRsp = undefined;
      this._v2OutCreateChildReq = undefined;
      this._v2OutCreateChildRsp = undefined;
      this._v2OutInfoReq = undefined;
      this._v2OutInfoRsp = undefined;
      this._v2OutInitReq = undefined;
      this._v2OutInitRsp = undefined;
      this._v2RspRekey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._v1InAggressiveReq = value.v1InAggressiveReq;
      this._v1InAggressiveRsp = value.v1InAggressiveRsp;
      this._v1InAuthOnlyReq = value.v1InAuthOnlyReq;
      this._v1InAuthOnlyRsp = value.v1InAuthOnlyRsp;
      this._v1InIdProtReq = value.v1InIdProtReq;
      this._v1InIdProtRsp = value.v1InIdProtRsp;
      this._v1InInfoV1Req = value.v1InInfoV1Req;
      this._v1InInfoV1Rsp = value.v1InInfoV1Rsp;
      this._v1InNewGroupModeReq = value.v1InNewGroupModeReq;
      this._v1InNewGroupModeRsp = value.v1InNewGroupModeRsp;
      this._v1InQuickModeReq = value.v1InQuickModeReq;
      this._v1InQuickModeRsp = value.v1InQuickModeRsp;
      this._v1InTransactionReq = value.v1InTransactionReq;
      this._v1InTransactionRsp = value.v1InTransactionRsp;
      this._v1OutAggressiveReq = value.v1OutAggressiveReq;
      this._v1OutAggressiveRsp = value.v1OutAggressiveRsp;
      this._v1OutAuthOnlyReq = value.v1OutAuthOnlyReq;
      this._v1OutAuthOnlyRsp = value.v1OutAuthOnlyRsp;
      this._v1OutIdProtReq = value.v1OutIdProtReq;
      this._v1OutIdProtRsp = value.v1OutIdProtRsp;
      this._v1OutInfoV1Req = value.v1OutInfoV1Req;
      this._v1OutInfoV1Rsp = value.v1OutInfoV1Rsp;
      this._v1OutNewGroupModeReq = value.v1OutNewGroupModeReq;
      this._v1OutNewGroupModeRsp = value.v1OutNewGroupModeRsp;
      this._v1OutQuickModeReq = value.v1OutQuickModeReq;
      this._v1OutQuickModeRsp = value.v1OutQuickModeRsp;
      this._v1OutTransactionReq = value.v1OutTransactionReq;
      this._v1OutTransactionRsp = value.v1OutTransactionRsp;
      this._v2ChildSaRekey = value.v2ChildSaRekey;
      this._v2InAuthReq = value.v2InAuthReq;
      this._v2InAuthRsp = value.v2InAuthRsp;
      this._v2InCreateChildReq = value.v2InCreateChildReq;
      this._v2InCreateChildRsp = value.v2InCreateChildRsp;
      this._v2InInfoReq = value.v2InInfoReq;
      this._v2InInfoRsp = value.v2InInfoRsp;
      this._v2InInitReq = value.v2InInitReq;
      this._v2InInitRsp = value.v2InInitRsp;
      this._v2InInvalid = value.v2InInvalid;
      this._v2InInvalidSpi = value.v2InInvalidSpi;
      this._v2InitRekey = value.v2InitRekey;
      this._v2OutAuthReq = value.v2OutAuthReq;
      this._v2OutAuthRsp = value.v2OutAuthRsp;
      this._v2OutCreateChildReq = value.v2OutCreateChildReq;
      this._v2OutCreateChildRsp = value.v2OutCreateChildRsp;
      this._v2OutInfoReq = value.v2OutInfoReq;
      this._v2OutInfoRsp = value.v2OutInfoRsp;
      this._v2OutInitReq = value.v2OutInitReq;
      this._v2OutInitRsp = value.v2OutInitRsp;
      this._v2RspRekey = value.v2RspRekey;
    }
  }

  // v1_in_aggressive_req - computed: false, optional: true, required: false
  private _v1InAggressiveReq?: number; 
  public get v1InAggressiveReq() {
    return this.getNumberAttribute('v1_in_aggressive_req');
  }
  public set v1InAggressiveReq(value: number) {
    this._v1InAggressiveReq = value;
  }
  public resetV1InAggressiveReq() {
    this._v1InAggressiveReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAggressiveReqInput() {
    return this._v1InAggressiveReq;
  }

  // v1_in_aggressive_rsp - computed: false, optional: true, required: false
  private _v1InAggressiveRsp?: number; 
  public get v1InAggressiveRsp() {
    return this.getNumberAttribute('v1_in_aggressive_rsp');
  }
  public set v1InAggressiveRsp(value: number) {
    this._v1InAggressiveRsp = value;
  }
  public resetV1InAggressiveRsp() {
    this._v1InAggressiveRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAggressiveRspInput() {
    return this._v1InAggressiveRsp;
  }

  // v1_in_auth_only_req - computed: false, optional: true, required: false
  private _v1InAuthOnlyReq?: number; 
  public get v1InAuthOnlyReq() {
    return this.getNumberAttribute('v1_in_auth_only_req');
  }
  public set v1InAuthOnlyReq(value: number) {
    this._v1InAuthOnlyReq = value;
  }
  public resetV1InAuthOnlyReq() {
    this._v1InAuthOnlyReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAuthOnlyReqInput() {
    return this._v1InAuthOnlyReq;
  }

  // v1_in_auth_only_rsp - computed: false, optional: true, required: false
  private _v1InAuthOnlyRsp?: number; 
  public get v1InAuthOnlyRsp() {
    return this.getNumberAttribute('v1_in_auth_only_rsp');
  }
  public set v1InAuthOnlyRsp(value: number) {
    this._v1InAuthOnlyRsp = value;
  }
  public resetV1InAuthOnlyRsp() {
    this._v1InAuthOnlyRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAuthOnlyRspInput() {
    return this._v1InAuthOnlyRsp;
  }

  // v1_in_id_prot_req - computed: false, optional: true, required: false
  private _v1InIdProtReq?: number; 
  public get v1InIdProtReq() {
    return this.getNumberAttribute('v1_in_id_prot_req');
  }
  public set v1InIdProtReq(value: number) {
    this._v1InIdProtReq = value;
  }
  public resetV1InIdProtReq() {
    this._v1InIdProtReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InIdProtReqInput() {
    return this._v1InIdProtReq;
  }

  // v1_in_id_prot_rsp - computed: false, optional: true, required: false
  private _v1InIdProtRsp?: number; 
  public get v1InIdProtRsp() {
    return this.getNumberAttribute('v1_in_id_prot_rsp');
  }
  public set v1InIdProtRsp(value: number) {
    this._v1InIdProtRsp = value;
  }
  public resetV1InIdProtRsp() {
    this._v1InIdProtRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InIdProtRspInput() {
    return this._v1InIdProtRsp;
  }

  // v1_in_info_v1_req - computed: false, optional: true, required: false
  private _v1InInfoV1Req?: number; 
  public get v1InInfoV1Req() {
    return this.getNumberAttribute('v1_in_info_v1_req');
  }
  public set v1InInfoV1Req(value: number) {
    this._v1InInfoV1Req = value;
  }
  public resetV1InInfoV1Req() {
    this._v1InInfoV1Req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InInfoV1ReqInput() {
    return this._v1InInfoV1Req;
  }

  // v1_in_info_v1_rsp - computed: false, optional: true, required: false
  private _v1InInfoV1Rsp?: number; 
  public get v1InInfoV1Rsp() {
    return this.getNumberAttribute('v1_in_info_v1_rsp');
  }
  public set v1InInfoV1Rsp(value: number) {
    this._v1InInfoV1Rsp = value;
  }
  public resetV1InInfoV1Rsp() {
    this._v1InInfoV1Rsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InInfoV1RspInput() {
    return this._v1InInfoV1Rsp;
  }

  // v1_in_new_group_mode_req - computed: false, optional: true, required: false
  private _v1InNewGroupModeReq?: number; 
  public get v1InNewGroupModeReq() {
    return this.getNumberAttribute('v1_in_new_group_mode_req');
  }
  public set v1InNewGroupModeReq(value: number) {
    this._v1InNewGroupModeReq = value;
  }
  public resetV1InNewGroupModeReq() {
    this._v1InNewGroupModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InNewGroupModeReqInput() {
    return this._v1InNewGroupModeReq;
  }

  // v1_in_new_group_mode_rsp - computed: false, optional: true, required: false
  private _v1InNewGroupModeRsp?: number; 
  public get v1InNewGroupModeRsp() {
    return this.getNumberAttribute('v1_in_new_group_mode_rsp');
  }
  public set v1InNewGroupModeRsp(value: number) {
    this._v1InNewGroupModeRsp = value;
  }
  public resetV1InNewGroupModeRsp() {
    this._v1InNewGroupModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InNewGroupModeRspInput() {
    return this._v1InNewGroupModeRsp;
  }

  // v1_in_quick_mode_req - computed: false, optional: true, required: false
  private _v1InQuickModeReq?: number; 
  public get v1InQuickModeReq() {
    return this.getNumberAttribute('v1_in_quick_mode_req');
  }
  public set v1InQuickModeReq(value: number) {
    this._v1InQuickModeReq = value;
  }
  public resetV1InQuickModeReq() {
    this._v1InQuickModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InQuickModeReqInput() {
    return this._v1InQuickModeReq;
  }

  // v1_in_quick_mode_rsp - computed: false, optional: true, required: false
  private _v1InQuickModeRsp?: number; 
  public get v1InQuickModeRsp() {
    return this.getNumberAttribute('v1_in_quick_mode_rsp');
  }
  public set v1InQuickModeRsp(value: number) {
    this._v1InQuickModeRsp = value;
  }
  public resetV1InQuickModeRsp() {
    this._v1InQuickModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InQuickModeRspInput() {
    return this._v1InQuickModeRsp;
  }

  // v1_in_transaction_req - computed: false, optional: true, required: false
  private _v1InTransactionReq?: number; 
  public get v1InTransactionReq() {
    return this.getNumberAttribute('v1_in_transaction_req');
  }
  public set v1InTransactionReq(value: number) {
    this._v1InTransactionReq = value;
  }
  public resetV1InTransactionReq() {
    this._v1InTransactionReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InTransactionReqInput() {
    return this._v1InTransactionReq;
  }

  // v1_in_transaction_rsp - computed: false, optional: true, required: false
  private _v1InTransactionRsp?: number; 
  public get v1InTransactionRsp() {
    return this.getNumberAttribute('v1_in_transaction_rsp');
  }
  public set v1InTransactionRsp(value: number) {
    this._v1InTransactionRsp = value;
  }
  public resetV1InTransactionRsp() {
    this._v1InTransactionRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InTransactionRspInput() {
    return this._v1InTransactionRsp;
  }

  // v1_out_aggressive_req - computed: false, optional: true, required: false
  private _v1OutAggressiveReq?: number; 
  public get v1OutAggressiveReq() {
    return this.getNumberAttribute('v1_out_aggressive_req');
  }
  public set v1OutAggressiveReq(value: number) {
    this._v1OutAggressiveReq = value;
  }
  public resetV1OutAggressiveReq() {
    this._v1OutAggressiveReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAggressiveReqInput() {
    return this._v1OutAggressiveReq;
  }

  // v1_out_aggressive_rsp - computed: false, optional: true, required: false
  private _v1OutAggressiveRsp?: number; 
  public get v1OutAggressiveRsp() {
    return this.getNumberAttribute('v1_out_aggressive_rsp');
  }
  public set v1OutAggressiveRsp(value: number) {
    this._v1OutAggressiveRsp = value;
  }
  public resetV1OutAggressiveRsp() {
    this._v1OutAggressiveRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAggressiveRspInput() {
    return this._v1OutAggressiveRsp;
  }

  // v1_out_auth_only_req - computed: false, optional: true, required: false
  private _v1OutAuthOnlyReq?: number; 
  public get v1OutAuthOnlyReq() {
    return this.getNumberAttribute('v1_out_auth_only_req');
  }
  public set v1OutAuthOnlyReq(value: number) {
    this._v1OutAuthOnlyReq = value;
  }
  public resetV1OutAuthOnlyReq() {
    this._v1OutAuthOnlyReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAuthOnlyReqInput() {
    return this._v1OutAuthOnlyReq;
  }

  // v1_out_auth_only_rsp - computed: false, optional: true, required: false
  private _v1OutAuthOnlyRsp?: number; 
  public get v1OutAuthOnlyRsp() {
    return this.getNumberAttribute('v1_out_auth_only_rsp');
  }
  public set v1OutAuthOnlyRsp(value: number) {
    this._v1OutAuthOnlyRsp = value;
  }
  public resetV1OutAuthOnlyRsp() {
    this._v1OutAuthOnlyRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAuthOnlyRspInput() {
    return this._v1OutAuthOnlyRsp;
  }

  // v1_out_id_prot_req - computed: false, optional: true, required: false
  private _v1OutIdProtReq?: number; 
  public get v1OutIdProtReq() {
    return this.getNumberAttribute('v1_out_id_prot_req');
  }
  public set v1OutIdProtReq(value: number) {
    this._v1OutIdProtReq = value;
  }
  public resetV1OutIdProtReq() {
    this._v1OutIdProtReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutIdProtReqInput() {
    return this._v1OutIdProtReq;
  }

  // v1_out_id_prot_rsp - computed: false, optional: true, required: false
  private _v1OutIdProtRsp?: number; 
  public get v1OutIdProtRsp() {
    return this.getNumberAttribute('v1_out_id_prot_rsp');
  }
  public set v1OutIdProtRsp(value: number) {
    this._v1OutIdProtRsp = value;
  }
  public resetV1OutIdProtRsp() {
    this._v1OutIdProtRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutIdProtRspInput() {
    return this._v1OutIdProtRsp;
  }

  // v1_out_info_v1_req - computed: false, optional: true, required: false
  private _v1OutInfoV1Req?: number; 
  public get v1OutInfoV1Req() {
    return this.getNumberAttribute('v1_out_info_v1_req');
  }
  public set v1OutInfoV1Req(value: number) {
    this._v1OutInfoV1Req = value;
  }
  public resetV1OutInfoV1Req() {
    this._v1OutInfoV1Req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutInfoV1ReqInput() {
    return this._v1OutInfoV1Req;
  }

  // v1_out_info_v1_rsp - computed: false, optional: true, required: false
  private _v1OutInfoV1Rsp?: number; 
  public get v1OutInfoV1Rsp() {
    return this.getNumberAttribute('v1_out_info_v1_rsp');
  }
  public set v1OutInfoV1Rsp(value: number) {
    this._v1OutInfoV1Rsp = value;
  }
  public resetV1OutInfoV1Rsp() {
    this._v1OutInfoV1Rsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutInfoV1RspInput() {
    return this._v1OutInfoV1Rsp;
  }

  // v1_out_new_group_mode_req - computed: false, optional: true, required: false
  private _v1OutNewGroupModeReq?: number; 
  public get v1OutNewGroupModeReq() {
    return this.getNumberAttribute('v1_out_new_group_mode_req');
  }
  public set v1OutNewGroupModeReq(value: number) {
    this._v1OutNewGroupModeReq = value;
  }
  public resetV1OutNewGroupModeReq() {
    this._v1OutNewGroupModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutNewGroupModeReqInput() {
    return this._v1OutNewGroupModeReq;
  }

  // v1_out_new_group_mode_rsp - computed: false, optional: true, required: false
  private _v1OutNewGroupModeRsp?: number; 
  public get v1OutNewGroupModeRsp() {
    return this.getNumberAttribute('v1_out_new_group_mode_rsp');
  }
  public set v1OutNewGroupModeRsp(value: number) {
    this._v1OutNewGroupModeRsp = value;
  }
  public resetV1OutNewGroupModeRsp() {
    this._v1OutNewGroupModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutNewGroupModeRspInput() {
    return this._v1OutNewGroupModeRsp;
  }

  // v1_out_quick_mode_req - computed: false, optional: true, required: false
  private _v1OutQuickModeReq?: number; 
  public get v1OutQuickModeReq() {
    return this.getNumberAttribute('v1_out_quick_mode_req');
  }
  public set v1OutQuickModeReq(value: number) {
    this._v1OutQuickModeReq = value;
  }
  public resetV1OutQuickModeReq() {
    this._v1OutQuickModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutQuickModeReqInput() {
    return this._v1OutQuickModeReq;
  }

  // v1_out_quick_mode_rsp - computed: false, optional: true, required: false
  private _v1OutQuickModeRsp?: number; 
  public get v1OutQuickModeRsp() {
    return this.getNumberAttribute('v1_out_quick_mode_rsp');
  }
  public set v1OutQuickModeRsp(value: number) {
    this._v1OutQuickModeRsp = value;
  }
  public resetV1OutQuickModeRsp() {
    this._v1OutQuickModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutQuickModeRspInput() {
    return this._v1OutQuickModeRsp;
  }

  // v1_out_transaction_req - computed: false, optional: true, required: false
  private _v1OutTransactionReq?: number; 
  public get v1OutTransactionReq() {
    return this.getNumberAttribute('v1_out_transaction_req');
  }
  public set v1OutTransactionReq(value: number) {
    this._v1OutTransactionReq = value;
  }
  public resetV1OutTransactionReq() {
    this._v1OutTransactionReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutTransactionReqInput() {
    return this._v1OutTransactionReq;
  }

  // v1_out_transaction_rsp - computed: false, optional: true, required: false
  private _v1OutTransactionRsp?: number; 
  public get v1OutTransactionRsp() {
    return this.getNumberAttribute('v1_out_transaction_rsp');
  }
  public set v1OutTransactionRsp(value: number) {
    this._v1OutTransactionRsp = value;
  }
  public resetV1OutTransactionRsp() {
    this._v1OutTransactionRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutTransactionRspInput() {
    return this._v1OutTransactionRsp;
  }

  // v2_child_sa_rekey - computed: false, optional: true, required: false
  private _v2ChildSaRekey?: number; 
  public get v2ChildSaRekey() {
    return this.getNumberAttribute('v2_child_sa_rekey');
  }
  public set v2ChildSaRekey(value: number) {
    this._v2ChildSaRekey = value;
  }
  public resetV2ChildSaRekey() {
    this._v2ChildSaRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ChildSaRekeyInput() {
    return this._v2ChildSaRekey;
  }

  // v2_in_auth_req - computed: false, optional: true, required: false
  private _v2InAuthReq?: number; 
  public get v2InAuthReq() {
    return this.getNumberAttribute('v2_in_auth_req');
  }
  public set v2InAuthReq(value: number) {
    this._v2InAuthReq = value;
  }
  public resetV2InAuthReq() {
    this._v2InAuthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InAuthReqInput() {
    return this._v2InAuthReq;
  }

  // v2_in_auth_rsp - computed: false, optional: true, required: false
  private _v2InAuthRsp?: number; 
  public get v2InAuthRsp() {
    return this.getNumberAttribute('v2_in_auth_rsp');
  }
  public set v2InAuthRsp(value: number) {
    this._v2InAuthRsp = value;
  }
  public resetV2InAuthRsp() {
    this._v2InAuthRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InAuthRspInput() {
    return this._v2InAuthRsp;
  }

  // v2_in_create_child_req - computed: false, optional: true, required: false
  private _v2InCreateChildReq?: number; 
  public get v2InCreateChildReq() {
    return this.getNumberAttribute('v2_in_create_child_req');
  }
  public set v2InCreateChildReq(value: number) {
    this._v2InCreateChildReq = value;
  }
  public resetV2InCreateChildReq() {
    this._v2InCreateChildReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InCreateChildReqInput() {
    return this._v2InCreateChildReq;
  }

  // v2_in_create_child_rsp - computed: false, optional: true, required: false
  private _v2InCreateChildRsp?: number; 
  public get v2InCreateChildRsp() {
    return this.getNumberAttribute('v2_in_create_child_rsp');
  }
  public set v2InCreateChildRsp(value: number) {
    this._v2InCreateChildRsp = value;
  }
  public resetV2InCreateChildRsp() {
    this._v2InCreateChildRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InCreateChildRspInput() {
    return this._v2InCreateChildRsp;
  }

  // v2_in_info_req - computed: false, optional: true, required: false
  private _v2InInfoReq?: number; 
  public get v2InInfoReq() {
    return this.getNumberAttribute('v2_in_info_req');
  }
  public set v2InInfoReq(value: number) {
    this._v2InInfoReq = value;
  }
  public resetV2InInfoReq() {
    this._v2InInfoReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInfoReqInput() {
    return this._v2InInfoReq;
  }

  // v2_in_info_rsp - computed: false, optional: true, required: false
  private _v2InInfoRsp?: number; 
  public get v2InInfoRsp() {
    return this.getNumberAttribute('v2_in_info_rsp');
  }
  public set v2InInfoRsp(value: number) {
    this._v2InInfoRsp = value;
  }
  public resetV2InInfoRsp() {
    this._v2InInfoRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInfoRspInput() {
    return this._v2InInfoRsp;
  }

  // v2_in_init_req - computed: false, optional: true, required: false
  private _v2InInitReq?: number; 
  public get v2InInitReq() {
    return this.getNumberAttribute('v2_in_init_req');
  }
  public set v2InInitReq(value: number) {
    this._v2InInitReq = value;
  }
  public resetV2InInitReq() {
    this._v2InInitReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInitReqInput() {
    return this._v2InInitReq;
  }

  // v2_in_init_rsp - computed: false, optional: true, required: false
  private _v2InInitRsp?: number; 
  public get v2InInitRsp() {
    return this.getNumberAttribute('v2_in_init_rsp');
  }
  public set v2InInitRsp(value: number) {
    this._v2InInitRsp = value;
  }
  public resetV2InInitRsp() {
    this._v2InInitRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInitRspInput() {
    return this._v2InInitRsp;
  }

  // v2_in_invalid - computed: false, optional: true, required: false
  private _v2InInvalid?: number; 
  public get v2InInvalid() {
    return this.getNumberAttribute('v2_in_invalid');
  }
  public set v2InInvalid(value: number) {
    this._v2InInvalid = value;
  }
  public resetV2InInvalid() {
    this._v2InInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInvalidInput() {
    return this._v2InInvalid;
  }

  // v2_in_invalid_spi - computed: false, optional: true, required: false
  private _v2InInvalidSpi?: number; 
  public get v2InInvalidSpi() {
    return this.getNumberAttribute('v2_in_invalid_spi');
  }
  public set v2InInvalidSpi(value: number) {
    this._v2InInvalidSpi = value;
  }
  public resetV2InInvalidSpi() {
    this._v2InInvalidSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInvalidSpiInput() {
    return this._v2InInvalidSpi;
  }

  // v2_init_rekey - computed: false, optional: true, required: false
  private _v2InitRekey?: number; 
  public get v2InitRekey() {
    return this.getNumberAttribute('v2_init_rekey');
  }
  public set v2InitRekey(value: number) {
    this._v2InitRekey = value;
  }
  public resetV2InitRekey() {
    this._v2InitRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InitRekeyInput() {
    return this._v2InitRekey;
  }

  // v2_out_auth_req - computed: false, optional: true, required: false
  private _v2OutAuthReq?: number; 
  public get v2OutAuthReq() {
    return this.getNumberAttribute('v2_out_auth_req');
  }
  public set v2OutAuthReq(value: number) {
    this._v2OutAuthReq = value;
  }
  public resetV2OutAuthReq() {
    this._v2OutAuthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutAuthReqInput() {
    return this._v2OutAuthReq;
  }

  // v2_out_auth_rsp - computed: false, optional: true, required: false
  private _v2OutAuthRsp?: number; 
  public get v2OutAuthRsp() {
    return this.getNumberAttribute('v2_out_auth_rsp');
  }
  public set v2OutAuthRsp(value: number) {
    this._v2OutAuthRsp = value;
  }
  public resetV2OutAuthRsp() {
    this._v2OutAuthRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutAuthRspInput() {
    return this._v2OutAuthRsp;
  }

  // v2_out_create_child_req - computed: false, optional: true, required: false
  private _v2OutCreateChildReq?: number; 
  public get v2OutCreateChildReq() {
    return this.getNumberAttribute('v2_out_create_child_req');
  }
  public set v2OutCreateChildReq(value: number) {
    this._v2OutCreateChildReq = value;
  }
  public resetV2OutCreateChildReq() {
    this._v2OutCreateChildReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutCreateChildReqInput() {
    return this._v2OutCreateChildReq;
  }

  // v2_out_create_child_rsp - computed: false, optional: true, required: false
  private _v2OutCreateChildRsp?: number; 
  public get v2OutCreateChildRsp() {
    return this.getNumberAttribute('v2_out_create_child_rsp');
  }
  public set v2OutCreateChildRsp(value: number) {
    this._v2OutCreateChildRsp = value;
  }
  public resetV2OutCreateChildRsp() {
    this._v2OutCreateChildRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutCreateChildRspInput() {
    return this._v2OutCreateChildRsp;
  }

  // v2_out_info_req - computed: false, optional: true, required: false
  private _v2OutInfoReq?: number; 
  public get v2OutInfoReq() {
    return this.getNumberAttribute('v2_out_info_req');
  }
  public set v2OutInfoReq(value: number) {
    this._v2OutInfoReq = value;
  }
  public resetV2OutInfoReq() {
    this._v2OutInfoReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInfoReqInput() {
    return this._v2OutInfoReq;
  }

  // v2_out_info_rsp - computed: false, optional: true, required: false
  private _v2OutInfoRsp?: number; 
  public get v2OutInfoRsp() {
    return this.getNumberAttribute('v2_out_info_rsp');
  }
  public set v2OutInfoRsp(value: number) {
    this._v2OutInfoRsp = value;
  }
  public resetV2OutInfoRsp() {
    this._v2OutInfoRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInfoRspInput() {
    return this._v2OutInfoRsp;
  }

  // v2_out_init_req - computed: false, optional: true, required: false
  private _v2OutInitReq?: number; 
  public get v2OutInitReq() {
    return this.getNumberAttribute('v2_out_init_req');
  }
  public set v2OutInitReq(value: number) {
    this._v2OutInitReq = value;
  }
  public resetV2OutInitReq() {
    this._v2OutInitReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInitReqInput() {
    return this._v2OutInitReq;
  }

  // v2_out_init_rsp - computed: false, optional: true, required: false
  private _v2OutInitRsp?: number; 
  public get v2OutInitRsp() {
    return this.getNumberAttribute('v2_out_init_rsp');
  }
  public set v2OutInitRsp(value: number) {
    this._v2OutInitRsp = value;
  }
  public resetV2OutInitRsp() {
    this._v2OutInitRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInitRspInput() {
    return this._v2OutInitRsp;
  }

  // v2_rsp_rekey - computed: false, optional: true, required: false
  private _v2RspRekey?: number; 
  public get v2RspRekey() {
    return this.getNumberAttribute('v2_rsp_rekey');
  }
  public set v2RspRekey(value: number) {
    this._v2RspRekey = value;
  }
  public resetV2RspRekey() {
    this._v2RspRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2RspRekeyInput() {
    return this._v2RspRekey;
  }
}
export interface DataThunderVpnStatsIkeStatsGlobal {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#stats DataThunderVpnStats#stats}
  */
  readonly stats?: DataThunderVpnStatsIkeStatsGlobalStats;
}

export function dataThunderVpnStatsIkeStatsGlobalToTerraform(struct?: DataThunderVpnStatsIkeStatsGlobalOutputReference | DataThunderVpnStatsIkeStatsGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderVpnStatsIkeStatsGlobalStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVpnStatsIkeStatsGlobalToHclTerraform(struct?: DataThunderVpnStatsIkeStatsGlobalOutputReference | DataThunderVpnStatsIkeStatsGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderVpnStatsIkeStatsGlobalStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnStatsIkeStatsGlobalStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsIkeStatsGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnStatsIkeStatsGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsIkeStatsGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVpnStatsIkeStatsGlobalStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVpnStatsIkeStatsGlobalStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}
export interface DataThunderVpnStatsIpsecListStats {
  /**
  * Anti-Replay Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#anti_replay_num DataThunderVpnStats#anti_replay_num}
  */
  readonly antiReplayNum?: number;
  /**
  * Decrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bytes_decrypted DataThunderVpnStats#bytes_decrypted}
  */
  readonly bytesDecrypted?: number;
  /**
  * Encrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bytes_encrypted DataThunderVpnStats#bytes_encrypted}
  */
  readonly bytesEncrypted?: number;
  /**
  * CAVIUM Decrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#cavium_bytes_decrypted DataThunderVpnStats#cavium_bytes_decrypted}
  */
  readonly caviumBytesDecrypted?: number;
  /**
  * CAVIUM Encrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#cavium_bytes_encrypted DataThunderVpnStats#cavium_bytes_encrypted}
  */
  readonly caviumBytesEncrypted?: number;
  /**
  * CAVIUM Decrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#cavium_packets_decrypted DataThunderVpnStats#cavium_packets_decrypted}
  */
  readonly caviumPacketsDecrypted?: number;
  /**
  * CAVIUM Encrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#cavium_packets_encrypted DataThunderVpnStats#cavium_packets_encrypted}
  */
  readonly caviumPacketsEncrypted?: number;
  /**
  * Frag-after-encap Fragment Generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#frag_after_encap_frag_packets DataThunderVpnStats#frag_after_encap_frag_packets}
  */
  readonly fragAfterEncapFragPackets?: number;
  /**
  * Fragment Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#frag_received DataThunderVpnStats#frag_received}
  */
  readonly fragReceived?: number;
  /**
  * Packet dropped: Invalid tunnel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#invalid_tunnel_id DataThunderVpnStats#invalid_tunnel_id}
  */
  readonly invalidTunnelId?: number;
  /**
  * Packet dropped: No next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#no_next_hop DataThunderVpnStats#no_next_hop}
  */
  readonly noNextHop?: number;
  /**
  * Packet dropped: No tunnel found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#no_tunnel_found DataThunderVpnStats#no_tunnel_found}
  */
  readonly noTunnelFound?: number;
  /**
  * Decrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_decrypted DataThunderVpnStats#packets_decrypted}
  */
  readonly packetsDecrypted?: number;
  /**
  * Encrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_encrypted DataThunderVpnStats#packets_encrypted}
  */
  readonly packetsEncrypted?: number;
  /**
  * Encryption Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_encryption DataThunderVpnStats#packets_err_encryption}
  */
  readonly packetsErrEncryption?: number;
  /**
  * ICV Check Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_icv_check DataThunderVpnStats#packets_err_icv_check}
  */
  readonly packetsErrIcvCheck?: number;
  /**
  * Inactive Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_inactive DataThunderVpnStats#packets_err_inactive}
  */
  readonly packetsErrInactive?: number;
  /**
  * Lifetime Lifebytes Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_lifetime_lifebytes DataThunderVpnStats#packets_err_lifetime_lifebytes}
  */
  readonly packetsErrLifetimeLifebytes?: number;
  /**
  * Next Header Check Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_nh_check DataThunderVpnStats#packets_err_nh_check}
  */
  readonly packetsErrNhCheck?: number;
  /**
  * Pad Check Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_pad_check DataThunderVpnStats#packets_err_pad_check}
  */
  readonly packetsErrPadCheck?: number;
  /**
  * Packets Sanity Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_pkt_sanity DataThunderVpnStats#packets_err_pkt_sanity}
  */
  readonly packetsErrPktSanity?: number;
  /**
  * Packet dropped: Failed in prepare to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#pkt_fail_prep_to_send DataThunderVpnStats#pkt_fail_prep_to_send}
  */
  readonly pktFailPrepToSend?: number;
  /**
  * Packet dropped: Failed to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#pkt_fail_to_send DataThunderVpnStats#pkt_fail_to_send}
  */
  readonly pktFailToSend?: number;
  /**
  * Pre-frag Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#prefrag_error DataThunderVpnStats#prefrag_error}
  */
  readonly prefragError?: number;
  /**
  * Pre-frag Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#prefrag_success DataThunderVpnStats#prefrag_success}
  */
  readonly prefragSuccess?: number;
  /**
  * QAT Decrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#qat_bytes_decrypted DataThunderVpnStats#qat_bytes_decrypted}
  */
  readonly qatBytesDecrypted?: number;
  /**
  * QAT Encrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#qat_bytes_encrypted DataThunderVpnStats#qat_bytes_encrypted}
  */
  readonly qatBytesEncrypted?: number;
  /**
  * QAT Decrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#qat_packets_decrypted DataThunderVpnStats#qat_packets_decrypted}
  */
  readonly qatPacketsDecrypted?: number;
  /**
  * QAT Encrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#qat_packets_encrypted DataThunderVpnStats#qat_packets_encrypted}
  */
  readonly qatPacketsEncrypted?: number;
  /**
  * Rekey Times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#rekey_num DataThunderVpnStats#rekey_num}
  */
  readonly rekeyNum?: number;
  /**
  * Sequence Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#sequence_num DataThunderVpnStats#sequence_num}
  */
  readonly sequenceNum?: number;
  /**
  * Sequence Number Rollover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#sequence_num_rollover DataThunderVpnStats#sequence_num_rollover}
  */
  readonly sequenceNumRollover?: number;
  /**
  * Packet dropped: Tunnel Interface Down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#tunnel_intf_down DataThunderVpnStats#tunnel_intf_down}
  */
  readonly tunnelIntfDown?: number;
}

export function dataThunderVpnStatsIpsecListStatsToTerraform(struct?: DataThunderVpnStatsIpsecListStatsOutputReference | DataThunderVpnStatsIpsecListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_replay_num: cdktf.numberToTerraform(struct!.antiReplayNum),
    bytes_decrypted: cdktf.numberToTerraform(struct!.bytesDecrypted),
    bytes_encrypted: cdktf.numberToTerraform(struct!.bytesEncrypted),
    cavium_bytes_decrypted: cdktf.numberToTerraform(struct!.caviumBytesDecrypted),
    cavium_bytes_encrypted: cdktf.numberToTerraform(struct!.caviumBytesEncrypted),
    cavium_packets_decrypted: cdktf.numberToTerraform(struct!.caviumPacketsDecrypted),
    cavium_packets_encrypted: cdktf.numberToTerraform(struct!.caviumPacketsEncrypted),
    frag_after_encap_frag_packets: cdktf.numberToTerraform(struct!.fragAfterEncapFragPackets),
    frag_received: cdktf.numberToTerraform(struct!.fragReceived),
    invalid_tunnel_id: cdktf.numberToTerraform(struct!.invalidTunnelId),
    no_next_hop: cdktf.numberToTerraform(struct!.noNextHop),
    no_tunnel_found: cdktf.numberToTerraform(struct!.noTunnelFound),
    packets_decrypted: cdktf.numberToTerraform(struct!.packetsDecrypted),
    packets_encrypted: cdktf.numberToTerraform(struct!.packetsEncrypted),
    packets_err_encryption: cdktf.numberToTerraform(struct!.packetsErrEncryption),
    packets_err_icv_check: cdktf.numberToTerraform(struct!.packetsErrIcvCheck),
    packets_err_inactive: cdktf.numberToTerraform(struct!.packetsErrInactive),
    packets_err_lifetime_lifebytes: cdktf.numberToTerraform(struct!.packetsErrLifetimeLifebytes),
    packets_err_nh_check: cdktf.numberToTerraform(struct!.packetsErrNhCheck),
    packets_err_pad_check: cdktf.numberToTerraform(struct!.packetsErrPadCheck),
    packets_err_pkt_sanity: cdktf.numberToTerraform(struct!.packetsErrPktSanity),
    pkt_fail_prep_to_send: cdktf.numberToTerraform(struct!.pktFailPrepToSend),
    pkt_fail_to_send: cdktf.numberToTerraform(struct!.pktFailToSend),
    prefrag_error: cdktf.numberToTerraform(struct!.prefragError),
    prefrag_success: cdktf.numberToTerraform(struct!.prefragSuccess),
    qat_bytes_decrypted: cdktf.numberToTerraform(struct!.qatBytesDecrypted),
    qat_bytes_encrypted: cdktf.numberToTerraform(struct!.qatBytesEncrypted),
    qat_packets_decrypted: cdktf.numberToTerraform(struct!.qatPacketsDecrypted),
    qat_packets_encrypted: cdktf.numberToTerraform(struct!.qatPacketsEncrypted),
    rekey_num: cdktf.numberToTerraform(struct!.rekeyNum),
    sequence_num: cdktf.numberToTerraform(struct!.sequenceNum),
    sequence_num_rollover: cdktf.numberToTerraform(struct!.sequenceNumRollover),
    tunnel_intf_down: cdktf.numberToTerraform(struct!.tunnelIntfDown),
  }
}


export function dataThunderVpnStatsIpsecListStatsToHclTerraform(struct?: DataThunderVpnStatsIpsecListStatsOutputReference | DataThunderVpnStatsIpsecListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_replay_num: {
      value: cdktf.numberToHclTerraform(struct!.antiReplayNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.bytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.bytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumBytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumBytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumPacketsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumPacketsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_after_encap_frag_packets: {
      value: cdktf.numberToHclTerraform(struct!.fragAfterEncapFragPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_received: {
      value: cdktf.numberToHclTerraform(struct!.fragReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_tunnel_id: {
      value: cdktf.numberToHclTerraform(struct!.invalidTunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_next_hop: {
      value: cdktf.numberToHclTerraform(struct!.noNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_tunnel_found: {
      value: cdktf.numberToHclTerraform(struct!.noTunnelFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.packetsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.packetsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_encryption: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_icv_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrIcvCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_inactive: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrInactive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_lifetime_lifebytes: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrLifetimeLifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_nh_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrNhCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_pad_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrPadCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_pkt_sanity: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrPktSanity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_fail_prep_to_send: {
      value: cdktf.numberToHclTerraform(struct!.pktFailPrepToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_fail_to_send: {
      value: cdktf.numberToHclTerraform(struct!.pktFailToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefrag_error: {
      value: cdktf.numberToHclTerraform(struct!.prefragError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefrag_success: {
      value: cdktf.numberToHclTerraform(struct!.prefragSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatBytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatBytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatPacketsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatPacketsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rekey_num: {
      value: cdktf.numberToHclTerraform(struct!.rekeyNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_num: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_num_rollover: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumRollover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_intf_down: {
      value: cdktf.numberToHclTerraform(struct!.tunnelIntfDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsIpsecListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnStatsIpsecListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiReplayNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiReplayNum = this._antiReplayNum;
    }
    if (this._bytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesDecrypted = this._bytesDecrypted;
    }
    if (this._bytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesEncrypted = this._bytesEncrypted;
    }
    if (this._caviumBytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumBytesDecrypted = this._caviumBytesDecrypted;
    }
    if (this._caviumBytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumBytesEncrypted = this._caviumBytesEncrypted;
    }
    if (this._caviumPacketsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumPacketsDecrypted = this._caviumPacketsDecrypted;
    }
    if (this._caviumPacketsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumPacketsEncrypted = this._caviumPacketsEncrypted;
    }
    if (this._fragAfterEncapFragPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragAfterEncapFragPackets = this._fragAfterEncapFragPackets;
    }
    if (this._fragReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragReceived = this._fragReceived;
    }
    if (this._invalidTunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidTunnelId = this._invalidTunnelId;
    }
    if (this._noNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNextHop = this._noNextHop;
    }
    if (this._noTunnelFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTunnelFound = this._noTunnelFound;
    }
    if (this._packetsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsDecrypted = this._packetsDecrypted;
    }
    if (this._packetsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsEncrypted = this._packetsEncrypted;
    }
    if (this._packetsErrEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrEncryption = this._packetsErrEncryption;
    }
    if (this._packetsErrIcvCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrIcvCheck = this._packetsErrIcvCheck;
    }
    if (this._packetsErrInactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrInactive = this._packetsErrInactive;
    }
    if (this._packetsErrLifetimeLifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrLifetimeLifebytes = this._packetsErrLifetimeLifebytes;
    }
    if (this._packetsErrNhCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrNhCheck = this._packetsErrNhCheck;
    }
    if (this._packetsErrPadCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrPadCheck = this._packetsErrPadCheck;
    }
    if (this._packetsErrPktSanity !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrPktSanity = this._packetsErrPktSanity;
    }
    if (this._pktFailPrepToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktFailPrepToSend = this._pktFailPrepToSend;
    }
    if (this._pktFailToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktFailToSend = this._pktFailToSend;
    }
    if (this._prefragError !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefragError = this._prefragError;
    }
    if (this._prefragSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefragSuccess = this._prefragSuccess;
    }
    if (this._qatBytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatBytesDecrypted = this._qatBytesDecrypted;
    }
    if (this._qatBytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatBytesEncrypted = this._qatBytesEncrypted;
    }
    if (this._qatPacketsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatPacketsDecrypted = this._qatPacketsDecrypted;
    }
    if (this._qatPacketsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatPacketsEncrypted = this._qatPacketsEncrypted;
    }
    if (this._rekeyNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekeyNum = this._rekeyNum;
    }
    if (this._sequenceNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNum = this._sequenceNum;
    }
    if (this._sequenceNumRollover !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumRollover = this._sequenceNumRollover;
    }
    if (this._tunnelIntfDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelIntfDown = this._tunnelIntfDown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsIpsecListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antiReplayNum = undefined;
      this._bytesDecrypted = undefined;
      this._bytesEncrypted = undefined;
      this._caviumBytesDecrypted = undefined;
      this._caviumBytesEncrypted = undefined;
      this._caviumPacketsDecrypted = undefined;
      this._caviumPacketsEncrypted = undefined;
      this._fragAfterEncapFragPackets = undefined;
      this._fragReceived = undefined;
      this._invalidTunnelId = undefined;
      this._noNextHop = undefined;
      this._noTunnelFound = undefined;
      this._packetsDecrypted = undefined;
      this._packetsEncrypted = undefined;
      this._packetsErrEncryption = undefined;
      this._packetsErrIcvCheck = undefined;
      this._packetsErrInactive = undefined;
      this._packetsErrLifetimeLifebytes = undefined;
      this._packetsErrNhCheck = undefined;
      this._packetsErrPadCheck = undefined;
      this._packetsErrPktSanity = undefined;
      this._pktFailPrepToSend = undefined;
      this._pktFailToSend = undefined;
      this._prefragError = undefined;
      this._prefragSuccess = undefined;
      this._qatBytesDecrypted = undefined;
      this._qatBytesEncrypted = undefined;
      this._qatPacketsDecrypted = undefined;
      this._qatPacketsEncrypted = undefined;
      this._rekeyNum = undefined;
      this._sequenceNum = undefined;
      this._sequenceNumRollover = undefined;
      this._tunnelIntfDown = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antiReplayNum = value.antiReplayNum;
      this._bytesDecrypted = value.bytesDecrypted;
      this._bytesEncrypted = value.bytesEncrypted;
      this._caviumBytesDecrypted = value.caviumBytesDecrypted;
      this._caviumBytesEncrypted = value.caviumBytesEncrypted;
      this._caviumPacketsDecrypted = value.caviumPacketsDecrypted;
      this._caviumPacketsEncrypted = value.caviumPacketsEncrypted;
      this._fragAfterEncapFragPackets = value.fragAfterEncapFragPackets;
      this._fragReceived = value.fragReceived;
      this._invalidTunnelId = value.invalidTunnelId;
      this._noNextHop = value.noNextHop;
      this._noTunnelFound = value.noTunnelFound;
      this._packetsDecrypted = value.packetsDecrypted;
      this._packetsEncrypted = value.packetsEncrypted;
      this._packetsErrEncryption = value.packetsErrEncryption;
      this._packetsErrIcvCheck = value.packetsErrIcvCheck;
      this._packetsErrInactive = value.packetsErrInactive;
      this._packetsErrLifetimeLifebytes = value.packetsErrLifetimeLifebytes;
      this._packetsErrNhCheck = value.packetsErrNhCheck;
      this._packetsErrPadCheck = value.packetsErrPadCheck;
      this._packetsErrPktSanity = value.packetsErrPktSanity;
      this._pktFailPrepToSend = value.pktFailPrepToSend;
      this._pktFailToSend = value.pktFailToSend;
      this._prefragError = value.prefragError;
      this._prefragSuccess = value.prefragSuccess;
      this._qatBytesDecrypted = value.qatBytesDecrypted;
      this._qatBytesEncrypted = value.qatBytesEncrypted;
      this._qatPacketsDecrypted = value.qatPacketsDecrypted;
      this._qatPacketsEncrypted = value.qatPacketsEncrypted;
      this._rekeyNum = value.rekeyNum;
      this._sequenceNum = value.sequenceNum;
      this._sequenceNumRollover = value.sequenceNumRollover;
      this._tunnelIntfDown = value.tunnelIntfDown;
    }
  }

  // anti_replay_num - computed: false, optional: true, required: false
  private _antiReplayNum?: number; 
  public get antiReplayNum() {
    return this.getNumberAttribute('anti_replay_num');
  }
  public set antiReplayNum(value: number) {
    this._antiReplayNum = value;
  }
  public resetAntiReplayNum() {
    this._antiReplayNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayNumInput() {
    return this._antiReplayNum;
  }

  // bytes_decrypted - computed: false, optional: true, required: false
  private _bytesDecrypted?: number; 
  public get bytesDecrypted() {
    return this.getNumberAttribute('bytes_decrypted');
  }
  public set bytesDecrypted(value: number) {
    this._bytesDecrypted = value;
  }
  public resetBytesDecrypted() {
    this._bytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesDecryptedInput() {
    return this._bytesDecrypted;
  }

  // bytes_encrypted - computed: false, optional: true, required: false
  private _bytesEncrypted?: number; 
  public get bytesEncrypted() {
    return this.getNumberAttribute('bytes_encrypted');
  }
  public set bytesEncrypted(value: number) {
    this._bytesEncrypted = value;
  }
  public resetBytesEncrypted() {
    this._bytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesEncryptedInput() {
    return this._bytesEncrypted;
  }

  // cavium_bytes_decrypted - computed: false, optional: true, required: false
  private _caviumBytesDecrypted?: number; 
  public get caviumBytesDecrypted() {
    return this.getNumberAttribute('cavium_bytes_decrypted');
  }
  public set caviumBytesDecrypted(value: number) {
    this._caviumBytesDecrypted = value;
  }
  public resetCaviumBytesDecrypted() {
    this._caviumBytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumBytesDecryptedInput() {
    return this._caviumBytesDecrypted;
  }

  // cavium_bytes_encrypted - computed: false, optional: true, required: false
  private _caviumBytesEncrypted?: number; 
  public get caviumBytesEncrypted() {
    return this.getNumberAttribute('cavium_bytes_encrypted');
  }
  public set caviumBytesEncrypted(value: number) {
    this._caviumBytesEncrypted = value;
  }
  public resetCaviumBytesEncrypted() {
    this._caviumBytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumBytesEncryptedInput() {
    return this._caviumBytesEncrypted;
  }

  // cavium_packets_decrypted - computed: false, optional: true, required: false
  private _caviumPacketsDecrypted?: number; 
  public get caviumPacketsDecrypted() {
    return this.getNumberAttribute('cavium_packets_decrypted');
  }
  public set caviumPacketsDecrypted(value: number) {
    this._caviumPacketsDecrypted = value;
  }
  public resetCaviumPacketsDecrypted() {
    this._caviumPacketsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumPacketsDecryptedInput() {
    return this._caviumPacketsDecrypted;
  }

  // cavium_packets_encrypted - computed: false, optional: true, required: false
  private _caviumPacketsEncrypted?: number; 
  public get caviumPacketsEncrypted() {
    return this.getNumberAttribute('cavium_packets_encrypted');
  }
  public set caviumPacketsEncrypted(value: number) {
    this._caviumPacketsEncrypted = value;
  }
  public resetCaviumPacketsEncrypted() {
    this._caviumPacketsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumPacketsEncryptedInput() {
    return this._caviumPacketsEncrypted;
  }

  // frag_after_encap_frag_packets - computed: false, optional: true, required: false
  private _fragAfterEncapFragPackets?: number; 
  public get fragAfterEncapFragPackets() {
    return this.getNumberAttribute('frag_after_encap_frag_packets');
  }
  public set fragAfterEncapFragPackets(value: number) {
    this._fragAfterEncapFragPackets = value;
  }
  public resetFragAfterEncapFragPackets() {
    this._fragAfterEncapFragPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragAfterEncapFragPacketsInput() {
    return this._fragAfterEncapFragPackets;
  }

  // frag_received - computed: false, optional: true, required: false
  private _fragReceived?: number; 
  public get fragReceived() {
    return this.getNumberAttribute('frag_received');
  }
  public set fragReceived(value: number) {
    this._fragReceived = value;
  }
  public resetFragReceived() {
    this._fragReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragReceivedInput() {
    return this._fragReceived;
  }

  // invalid_tunnel_id - computed: false, optional: true, required: false
  private _invalidTunnelId?: number; 
  public get invalidTunnelId() {
    return this.getNumberAttribute('invalid_tunnel_id');
  }
  public set invalidTunnelId(value: number) {
    this._invalidTunnelId = value;
  }
  public resetInvalidTunnelId() {
    this._invalidTunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidTunnelIdInput() {
    return this._invalidTunnelId;
  }

  // no_next_hop - computed: false, optional: true, required: false
  private _noNextHop?: number; 
  public get noNextHop() {
    return this.getNumberAttribute('no_next_hop');
  }
  public set noNextHop(value: number) {
    this._noNextHop = value;
  }
  public resetNoNextHop() {
    this._noNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNextHopInput() {
    return this._noNextHop;
  }

  // no_tunnel_found - computed: false, optional: true, required: false
  private _noTunnelFound?: number; 
  public get noTunnelFound() {
    return this.getNumberAttribute('no_tunnel_found');
  }
  public set noTunnelFound(value: number) {
    this._noTunnelFound = value;
  }
  public resetNoTunnelFound() {
    this._noTunnelFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTunnelFoundInput() {
    return this._noTunnelFound;
  }

  // packets_decrypted - computed: false, optional: true, required: false
  private _packetsDecrypted?: number; 
  public get packetsDecrypted() {
    return this.getNumberAttribute('packets_decrypted');
  }
  public set packetsDecrypted(value: number) {
    this._packetsDecrypted = value;
  }
  public resetPacketsDecrypted() {
    this._packetsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsDecryptedInput() {
    return this._packetsDecrypted;
  }

  // packets_encrypted - computed: false, optional: true, required: false
  private _packetsEncrypted?: number; 
  public get packetsEncrypted() {
    return this.getNumberAttribute('packets_encrypted');
  }
  public set packetsEncrypted(value: number) {
    this._packetsEncrypted = value;
  }
  public resetPacketsEncrypted() {
    this._packetsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsEncryptedInput() {
    return this._packetsEncrypted;
  }

  // packets_err_encryption - computed: false, optional: true, required: false
  private _packetsErrEncryption?: number; 
  public get packetsErrEncryption() {
    return this.getNumberAttribute('packets_err_encryption');
  }
  public set packetsErrEncryption(value: number) {
    this._packetsErrEncryption = value;
  }
  public resetPacketsErrEncryption() {
    this._packetsErrEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrEncryptionInput() {
    return this._packetsErrEncryption;
  }

  // packets_err_icv_check - computed: false, optional: true, required: false
  private _packetsErrIcvCheck?: number; 
  public get packetsErrIcvCheck() {
    return this.getNumberAttribute('packets_err_icv_check');
  }
  public set packetsErrIcvCheck(value: number) {
    this._packetsErrIcvCheck = value;
  }
  public resetPacketsErrIcvCheck() {
    this._packetsErrIcvCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrIcvCheckInput() {
    return this._packetsErrIcvCheck;
  }

  // packets_err_inactive - computed: false, optional: true, required: false
  private _packetsErrInactive?: number; 
  public get packetsErrInactive() {
    return this.getNumberAttribute('packets_err_inactive');
  }
  public set packetsErrInactive(value: number) {
    this._packetsErrInactive = value;
  }
  public resetPacketsErrInactive() {
    this._packetsErrInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrInactiveInput() {
    return this._packetsErrInactive;
  }

  // packets_err_lifetime_lifebytes - computed: false, optional: true, required: false
  private _packetsErrLifetimeLifebytes?: number; 
  public get packetsErrLifetimeLifebytes() {
    return this.getNumberAttribute('packets_err_lifetime_lifebytes');
  }
  public set packetsErrLifetimeLifebytes(value: number) {
    this._packetsErrLifetimeLifebytes = value;
  }
  public resetPacketsErrLifetimeLifebytes() {
    this._packetsErrLifetimeLifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrLifetimeLifebytesInput() {
    return this._packetsErrLifetimeLifebytes;
  }

  // packets_err_nh_check - computed: false, optional: true, required: false
  private _packetsErrNhCheck?: number; 
  public get packetsErrNhCheck() {
    return this.getNumberAttribute('packets_err_nh_check');
  }
  public set packetsErrNhCheck(value: number) {
    this._packetsErrNhCheck = value;
  }
  public resetPacketsErrNhCheck() {
    this._packetsErrNhCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrNhCheckInput() {
    return this._packetsErrNhCheck;
  }

  // packets_err_pad_check - computed: false, optional: true, required: false
  private _packetsErrPadCheck?: number; 
  public get packetsErrPadCheck() {
    return this.getNumberAttribute('packets_err_pad_check');
  }
  public set packetsErrPadCheck(value: number) {
    this._packetsErrPadCheck = value;
  }
  public resetPacketsErrPadCheck() {
    this._packetsErrPadCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrPadCheckInput() {
    return this._packetsErrPadCheck;
  }

  // packets_err_pkt_sanity - computed: false, optional: true, required: false
  private _packetsErrPktSanity?: number; 
  public get packetsErrPktSanity() {
    return this.getNumberAttribute('packets_err_pkt_sanity');
  }
  public set packetsErrPktSanity(value: number) {
    this._packetsErrPktSanity = value;
  }
  public resetPacketsErrPktSanity() {
    this._packetsErrPktSanity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrPktSanityInput() {
    return this._packetsErrPktSanity;
  }

  // pkt_fail_prep_to_send - computed: false, optional: true, required: false
  private _pktFailPrepToSend?: number; 
  public get pktFailPrepToSend() {
    return this.getNumberAttribute('pkt_fail_prep_to_send');
  }
  public set pktFailPrepToSend(value: number) {
    this._pktFailPrepToSend = value;
  }
  public resetPktFailPrepToSend() {
    this._pktFailPrepToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktFailPrepToSendInput() {
    return this._pktFailPrepToSend;
  }

  // pkt_fail_to_send - computed: false, optional: true, required: false
  private _pktFailToSend?: number; 
  public get pktFailToSend() {
    return this.getNumberAttribute('pkt_fail_to_send');
  }
  public set pktFailToSend(value: number) {
    this._pktFailToSend = value;
  }
  public resetPktFailToSend() {
    this._pktFailToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktFailToSendInput() {
    return this._pktFailToSend;
  }

  // prefrag_error - computed: false, optional: true, required: false
  private _prefragError?: number; 
  public get prefragError() {
    return this.getNumberAttribute('prefrag_error');
  }
  public set prefragError(value: number) {
    this._prefragError = value;
  }
  public resetPrefragError() {
    this._prefragError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefragErrorInput() {
    return this._prefragError;
  }

  // prefrag_success - computed: false, optional: true, required: false
  private _prefragSuccess?: number; 
  public get prefragSuccess() {
    return this.getNumberAttribute('prefrag_success');
  }
  public set prefragSuccess(value: number) {
    this._prefragSuccess = value;
  }
  public resetPrefragSuccess() {
    this._prefragSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefragSuccessInput() {
    return this._prefragSuccess;
  }

  // qat_bytes_decrypted - computed: false, optional: true, required: false
  private _qatBytesDecrypted?: number; 
  public get qatBytesDecrypted() {
    return this.getNumberAttribute('qat_bytes_decrypted');
  }
  public set qatBytesDecrypted(value: number) {
    this._qatBytesDecrypted = value;
  }
  public resetQatBytesDecrypted() {
    this._qatBytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatBytesDecryptedInput() {
    return this._qatBytesDecrypted;
  }

  // qat_bytes_encrypted - computed: false, optional: true, required: false
  private _qatBytesEncrypted?: number; 
  public get qatBytesEncrypted() {
    return this.getNumberAttribute('qat_bytes_encrypted');
  }
  public set qatBytesEncrypted(value: number) {
    this._qatBytesEncrypted = value;
  }
  public resetQatBytesEncrypted() {
    this._qatBytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatBytesEncryptedInput() {
    return this._qatBytesEncrypted;
  }

  // qat_packets_decrypted - computed: false, optional: true, required: false
  private _qatPacketsDecrypted?: number; 
  public get qatPacketsDecrypted() {
    return this.getNumberAttribute('qat_packets_decrypted');
  }
  public set qatPacketsDecrypted(value: number) {
    this._qatPacketsDecrypted = value;
  }
  public resetQatPacketsDecrypted() {
    this._qatPacketsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatPacketsDecryptedInput() {
    return this._qatPacketsDecrypted;
  }

  // qat_packets_encrypted - computed: false, optional: true, required: false
  private _qatPacketsEncrypted?: number; 
  public get qatPacketsEncrypted() {
    return this.getNumberAttribute('qat_packets_encrypted');
  }
  public set qatPacketsEncrypted(value: number) {
    this._qatPacketsEncrypted = value;
  }
  public resetQatPacketsEncrypted() {
    this._qatPacketsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatPacketsEncryptedInput() {
    return this._qatPacketsEncrypted;
  }

  // rekey_num - computed: false, optional: true, required: false
  private _rekeyNum?: number; 
  public get rekeyNum() {
    return this.getNumberAttribute('rekey_num');
  }
  public set rekeyNum(value: number) {
    this._rekeyNum = value;
  }
  public resetRekeyNum() {
    this._rekeyNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyNumInput() {
    return this._rekeyNum;
  }

  // sequence_num - computed: false, optional: true, required: false
  private _sequenceNum?: number; 
  public get sequenceNum() {
    return this.getNumberAttribute('sequence_num');
  }
  public set sequenceNum(value: number) {
    this._sequenceNum = value;
  }
  public resetSequenceNum() {
    this._sequenceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumInput() {
    return this._sequenceNum;
  }

  // sequence_num_rollover - computed: false, optional: true, required: false
  private _sequenceNumRollover?: number; 
  public get sequenceNumRollover() {
    return this.getNumberAttribute('sequence_num_rollover');
  }
  public set sequenceNumRollover(value: number) {
    this._sequenceNumRollover = value;
  }
  public resetSequenceNumRollover() {
    this._sequenceNumRollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumRolloverInput() {
    return this._sequenceNumRollover;
  }

  // tunnel_intf_down - computed: false, optional: true, required: false
  private _tunnelIntfDown?: number; 
  public get tunnelIntfDown() {
    return this.getNumberAttribute('tunnel_intf_down');
  }
  public set tunnelIntfDown(value: number) {
    this._tunnelIntfDown = value;
  }
  public resetTunnelIntfDown() {
    this._tunnelIntfDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIntfDownInput() {
    return this._tunnelIntfDown;
  }
}
export interface DataThunderVpnStatsIpsecListStruct {
  /**
  * IPsec name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#name DataThunderVpnStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#stats DataThunderVpnStats#stats}
  */
  readonly stats?: DataThunderVpnStatsIpsecListStats;
}

export function dataThunderVpnStatsIpsecListStructToTerraform(struct?: DataThunderVpnStatsIpsecListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats: dataThunderVpnStatsIpsecListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVpnStatsIpsecListStructToHclTerraform(struct?: DataThunderVpnStatsIpsecListStruct | cdktf.IResolvable): any {
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
    stats: {
      value: dataThunderVpnStatsIpsecListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnStatsIpsecListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsIpsecListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnStatsIpsecListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsIpsecListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._stats.internalValue = value.stats;
    }
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVpnStatsIpsecListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVpnStatsIpsecListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderVpnStatsIpsecListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnStatsIpsecListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnStatsIpsecListStructOutputReference {
    return new DataThunderVpnStatsIpsecListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnStatsIpsecSaStatsListStats {
  /**
  * Anti-Replay Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#anti_replay_num DataThunderVpnStats#anti_replay_num}
  */
  readonly antiReplayNum?: number;
  /**
  * Decrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bytes_decrypted DataThunderVpnStats#bytes_decrypted}
  */
  readonly bytesDecrypted?: number;
  /**
  * Encrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#bytes_encrypted DataThunderVpnStats#bytes_encrypted}
  */
  readonly bytesEncrypted?: number;
  /**
  * CAVIUM Decrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#cavium_bytes_decrypted DataThunderVpnStats#cavium_bytes_decrypted}
  */
  readonly caviumBytesDecrypted?: number;
  /**
  * CAVIUM Encrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#cavium_bytes_encrypted DataThunderVpnStats#cavium_bytes_encrypted}
  */
  readonly caviumBytesEncrypted?: number;
  /**
  * CAVIUM Decrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#cavium_packets_decrypted DataThunderVpnStats#cavium_packets_decrypted}
  */
  readonly caviumPacketsDecrypted?: number;
  /**
  * CAVIUM Encrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#cavium_packets_encrypted DataThunderVpnStats#cavium_packets_encrypted}
  */
  readonly caviumPacketsEncrypted?: number;
  /**
  * Frag-after-encap Fragment Generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#frag_after_encap_frag_packets DataThunderVpnStats#frag_after_encap_frag_packets}
  */
  readonly fragAfterEncapFragPackets?: number;
  /**
  * Fragment Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#frag_received DataThunderVpnStats#frag_received}
  */
  readonly fragReceived?: number;
  /**
  * Packet dropped: Invalid tunnel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#invalid_tunnel_id DataThunderVpnStats#invalid_tunnel_id}
  */
  readonly invalidTunnelId?: number;
  /**
  * Packet dropped: No next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#no_next_hop DataThunderVpnStats#no_next_hop}
  */
  readonly noNextHop?: number;
  /**
  * Packet dropped: No tunnel found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#no_tunnel_found DataThunderVpnStats#no_tunnel_found}
  */
  readonly noTunnelFound?: number;
  /**
  * Decrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_decrypted DataThunderVpnStats#packets_decrypted}
  */
  readonly packetsDecrypted?: number;
  /**
  * Encrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_encrypted DataThunderVpnStats#packets_encrypted}
  */
  readonly packetsEncrypted?: number;
  /**
  * Encryption Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_encryption DataThunderVpnStats#packets_err_encryption}
  */
  readonly packetsErrEncryption?: number;
  /**
  * ICV Check Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_icv_check DataThunderVpnStats#packets_err_icv_check}
  */
  readonly packetsErrIcvCheck?: number;
  /**
  * Inactive Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_inactive DataThunderVpnStats#packets_err_inactive}
  */
  readonly packetsErrInactive?: number;
  /**
  * Lifetime Lifebytes Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_lifetime_lifebytes DataThunderVpnStats#packets_err_lifetime_lifebytes}
  */
  readonly packetsErrLifetimeLifebytes?: number;
  /**
  * Next Header Check Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_nh_check DataThunderVpnStats#packets_err_nh_check}
  */
  readonly packetsErrNhCheck?: number;
  /**
  * Pad Check Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_pad_check DataThunderVpnStats#packets_err_pad_check}
  */
  readonly packetsErrPadCheck?: number;
  /**
  * Packets Sanity Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#packets_err_pkt_sanity DataThunderVpnStats#packets_err_pkt_sanity}
  */
  readonly packetsErrPktSanity?: number;
  /**
  * Packet dropped: Failed in prepare to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#pkt_fail_prep_to_send DataThunderVpnStats#pkt_fail_prep_to_send}
  */
  readonly pktFailPrepToSend?: number;
  /**
  * Packet dropped: Failed to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#pkt_fail_to_send DataThunderVpnStats#pkt_fail_to_send}
  */
  readonly pktFailToSend?: number;
  /**
  * Pre-frag Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#prefrag_error DataThunderVpnStats#prefrag_error}
  */
  readonly prefragError?: number;
  /**
  * Pre-frag Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#prefrag_success DataThunderVpnStats#prefrag_success}
  */
  readonly prefragSuccess?: number;
  /**
  * QAT Decrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#qat_bytes_decrypted DataThunderVpnStats#qat_bytes_decrypted}
  */
  readonly qatBytesDecrypted?: number;
  /**
  * QAT Encrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#qat_bytes_encrypted DataThunderVpnStats#qat_bytes_encrypted}
  */
  readonly qatBytesEncrypted?: number;
  /**
  * QAT Decrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#qat_packets_decrypted DataThunderVpnStats#qat_packets_decrypted}
  */
  readonly qatPacketsDecrypted?: number;
  /**
  * QAT Encrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#qat_packets_encrypted DataThunderVpnStats#qat_packets_encrypted}
  */
  readonly qatPacketsEncrypted?: number;
  /**
  * Rekey Times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#rekey_num DataThunderVpnStats#rekey_num}
  */
  readonly rekeyNum?: number;
  /**
  * Sequence Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#sequence_num DataThunderVpnStats#sequence_num}
  */
  readonly sequenceNum?: number;
  /**
  * Sequence Number Rollover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#sequence_num_rollover DataThunderVpnStats#sequence_num_rollover}
  */
  readonly sequenceNumRollover?: number;
  /**
  * Packet dropped: Tunnel Interface Down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#tunnel_intf_down DataThunderVpnStats#tunnel_intf_down}
  */
  readonly tunnelIntfDown?: number;
}

export function dataThunderVpnStatsIpsecSaStatsListStatsToTerraform(struct?: DataThunderVpnStatsIpsecSaStatsListStatsOutputReference | DataThunderVpnStatsIpsecSaStatsListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_replay_num: cdktf.numberToTerraform(struct!.antiReplayNum),
    bytes_decrypted: cdktf.numberToTerraform(struct!.bytesDecrypted),
    bytes_encrypted: cdktf.numberToTerraform(struct!.bytesEncrypted),
    cavium_bytes_decrypted: cdktf.numberToTerraform(struct!.caviumBytesDecrypted),
    cavium_bytes_encrypted: cdktf.numberToTerraform(struct!.caviumBytesEncrypted),
    cavium_packets_decrypted: cdktf.numberToTerraform(struct!.caviumPacketsDecrypted),
    cavium_packets_encrypted: cdktf.numberToTerraform(struct!.caviumPacketsEncrypted),
    frag_after_encap_frag_packets: cdktf.numberToTerraform(struct!.fragAfterEncapFragPackets),
    frag_received: cdktf.numberToTerraform(struct!.fragReceived),
    invalid_tunnel_id: cdktf.numberToTerraform(struct!.invalidTunnelId),
    no_next_hop: cdktf.numberToTerraform(struct!.noNextHop),
    no_tunnel_found: cdktf.numberToTerraform(struct!.noTunnelFound),
    packets_decrypted: cdktf.numberToTerraform(struct!.packetsDecrypted),
    packets_encrypted: cdktf.numberToTerraform(struct!.packetsEncrypted),
    packets_err_encryption: cdktf.numberToTerraform(struct!.packetsErrEncryption),
    packets_err_icv_check: cdktf.numberToTerraform(struct!.packetsErrIcvCheck),
    packets_err_inactive: cdktf.numberToTerraform(struct!.packetsErrInactive),
    packets_err_lifetime_lifebytes: cdktf.numberToTerraform(struct!.packetsErrLifetimeLifebytes),
    packets_err_nh_check: cdktf.numberToTerraform(struct!.packetsErrNhCheck),
    packets_err_pad_check: cdktf.numberToTerraform(struct!.packetsErrPadCheck),
    packets_err_pkt_sanity: cdktf.numberToTerraform(struct!.packetsErrPktSanity),
    pkt_fail_prep_to_send: cdktf.numberToTerraform(struct!.pktFailPrepToSend),
    pkt_fail_to_send: cdktf.numberToTerraform(struct!.pktFailToSend),
    prefrag_error: cdktf.numberToTerraform(struct!.prefragError),
    prefrag_success: cdktf.numberToTerraform(struct!.prefragSuccess),
    qat_bytes_decrypted: cdktf.numberToTerraform(struct!.qatBytesDecrypted),
    qat_bytes_encrypted: cdktf.numberToTerraform(struct!.qatBytesEncrypted),
    qat_packets_decrypted: cdktf.numberToTerraform(struct!.qatPacketsDecrypted),
    qat_packets_encrypted: cdktf.numberToTerraform(struct!.qatPacketsEncrypted),
    rekey_num: cdktf.numberToTerraform(struct!.rekeyNum),
    sequence_num: cdktf.numberToTerraform(struct!.sequenceNum),
    sequence_num_rollover: cdktf.numberToTerraform(struct!.sequenceNumRollover),
    tunnel_intf_down: cdktf.numberToTerraform(struct!.tunnelIntfDown),
  }
}


export function dataThunderVpnStatsIpsecSaStatsListStatsToHclTerraform(struct?: DataThunderVpnStatsIpsecSaStatsListStatsOutputReference | DataThunderVpnStatsIpsecSaStatsListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_replay_num: {
      value: cdktf.numberToHclTerraform(struct!.antiReplayNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.bytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.bytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumBytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumBytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumPacketsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumPacketsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_after_encap_frag_packets: {
      value: cdktf.numberToHclTerraform(struct!.fragAfterEncapFragPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_received: {
      value: cdktf.numberToHclTerraform(struct!.fragReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_tunnel_id: {
      value: cdktf.numberToHclTerraform(struct!.invalidTunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_next_hop: {
      value: cdktf.numberToHclTerraform(struct!.noNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_tunnel_found: {
      value: cdktf.numberToHclTerraform(struct!.noTunnelFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.packetsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.packetsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_encryption: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_icv_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrIcvCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_inactive: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrInactive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_lifetime_lifebytes: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrLifetimeLifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_nh_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrNhCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_pad_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrPadCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_pkt_sanity: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrPktSanity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_fail_prep_to_send: {
      value: cdktf.numberToHclTerraform(struct!.pktFailPrepToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_fail_to_send: {
      value: cdktf.numberToHclTerraform(struct!.pktFailToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefrag_error: {
      value: cdktf.numberToHclTerraform(struct!.prefragError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefrag_success: {
      value: cdktf.numberToHclTerraform(struct!.prefragSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatBytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatBytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatPacketsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatPacketsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rekey_num: {
      value: cdktf.numberToHclTerraform(struct!.rekeyNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_num: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_num_rollover: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumRollover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_intf_down: {
      value: cdktf.numberToHclTerraform(struct!.tunnelIntfDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsIpsecSaStatsListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnStatsIpsecSaStatsListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiReplayNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiReplayNum = this._antiReplayNum;
    }
    if (this._bytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesDecrypted = this._bytesDecrypted;
    }
    if (this._bytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesEncrypted = this._bytesEncrypted;
    }
    if (this._caviumBytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumBytesDecrypted = this._caviumBytesDecrypted;
    }
    if (this._caviumBytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumBytesEncrypted = this._caviumBytesEncrypted;
    }
    if (this._caviumPacketsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumPacketsDecrypted = this._caviumPacketsDecrypted;
    }
    if (this._caviumPacketsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumPacketsEncrypted = this._caviumPacketsEncrypted;
    }
    if (this._fragAfterEncapFragPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragAfterEncapFragPackets = this._fragAfterEncapFragPackets;
    }
    if (this._fragReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragReceived = this._fragReceived;
    }
    if (this._invalidTunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidTunnelId = this._invalidTunnelId;
    }
    if (this._noNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNextHop = this._noNextHop;
    }
    if (this._noTunnelFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTunnelFound = this._noTunnelFound;
    }
    if (this._packetsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsDecrypted = this._packetsDecrypted;
    }
    if (this._packetsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsEncrypted = this._packetsEncrypted;
    }
    if (this._packetsErrEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrEncryption = this._packetsErrEncryption;
    }
    if (this._packetsErrIcvCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrIcvCheck = this._packetsErrIcvCheck;
    }
    if (this._packetsErrInactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrInactive = this._packetsErrInactive;
    }
    if (this._packetsErrLifetimeLifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrLifetimeLifebytes = this._packetsErrLifetimeLifebytes;
    }
    if (this._packetsErrNhCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrNhCheck = this._packetsErrNhCheck;
    }
    if (this._packetsErrPadCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrPadCheck = this._packetsErrPadCheck;
    }
    if (this._packetsErrPktSanity !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrPktSanity = this._packetsErrPktSanity;
    }
    if (this._pktFailPrepToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktFailPrepToSend = this._pktFailPrepToSend;
    }
    if (this._pktFailToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktFailToSend = this._pktFailToSend;
    }
    if (this._prefragError !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefragError = this._prefragError;
    }
    if (this._prefragSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefragSuccess = this._prefragSuccess;
    }
    if (this._qatBytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatBytesDecrypted = this._qatBytesDecrypted;
    }
    if (this._qatBytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatBytesEncrypted = this._qatBytesEncrypted;
    }
    if (this._qatPacketsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatPacketsDecrypted = this._qatPacketsDecrypted;
    }
    if (this._qatPacketsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatPacketsEncrypted = this._qatPacketsEncrypted;
    }
    if (this._rekeyNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekeyNum = this._rekeyNum;
    }
    if (this._sequenceNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNum = this._sequenceNum;
    }
    if (this._sequenceNumRollover !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumRollover = this._sequenceNumRollover;
    }
    if (this._tunnelIntfDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelIntfDown = this._tunnelIntfDown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsIpsecSaStatsListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antiReplayNum = undefined;
      this._bytesDecrypted = undefined;
      this._bytesEncrypted = undefined;
      this._caviumBytesDecrypted = undefined;
      this._caviumBytesEncrypted = undefined;
      this._caviumPacketsDecrypted = undefined;
      this._caviumPacketsEncrypted = undefined;
      this._fragAfterEncapFragPackets = undefined;
      this._fragReceived = undefined;
      this._invalidTunnelId = undefined;
      this._noNextHop = undefined;
      this._noTunnelFound = undefined;
      this._packetsDecrypted = undefined;
      this._packetsEncrypted = undefined;
      this._packetsErrEncryption = undefined;
      this._packetsErrIcvCheck = undefined;
      this._packetsErrInactive = undefined;
      this._packetsErrLifetimeLifebytes = undefined;
      this._packetsErrNhCheck = undefined;
      this._packetsErrPadCheck = undefined;
      this._packetsErrPktSanity = undefined;
      this._pktFailPrepToSend = undefined;
      this._pktFailToSend = undefined;
      this._prefragError = undefined;
      this._prefragSuccess = undefined;
      this._qatBytesDecrypted = undefined;
      this._qatBytesEncrypted = undefined;
      this._qatPacketsDecrypted = undefined;
      this._qatPacketsEncrypted = undefined;
      this._rekeyNum = undefined;
      this._sequenceNum = undefined;
      this._sequenceNumRollover = undefined;
      this._tunnelIntfDown = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antiReplayNum = value.antiReplayNum;
      this._bytesDecrypted = value.bytesDecrypted;
      this._bytesEncrypted = value.bytesEncrypted;
      this._caviumBytesDecrypted = value.caviumBytesDecrypted;
      this._caviumBytesEncrypted = value.caviumBytesEncrypted;
      this._caviumPacketsDecrypted = value.caviumPacketsDecrypted;
      this._caviumPacketsEncrypted = value.caviumPacketsEncrypted;
      this._fragAfterEncapFragPackets = value.fragAfterEncapFragPackets;
      this._fragReceived = value.fragReceived;
      this._invalidTunnelId = value.invalidTunnelId;
      this._noNextHop = value.noNextHop;
      this._noTunnelFound = value.noTunnelFound;
      this._packetsDecrypted = value.packetsDecrypted;
      this._packetsEncrypted = value.packetsEncrypted;
      this._packetsErrEncryption = value.packetsErrEncryption;
      this._packetsErrIcvCheck = value.packetsErrIcvCheck;
      this._packetsErrInactive = value.packetsErrInactive;
      this._packetsErrLifetimeLifebytes = value.packetsErrLifetimeLifebytes;
      this._packetsErrNhCheck = value.packetsErrNhCheck;
      this._packetsErrPadCheck = value.packetsErrPadCheck;
      this._packetsErrPktSanity = value.packetsErrPktSanity;
      this._pktFailPrepToSend = value.pktFailPrepToSend;
      this._pktFailToSend = value.pktFailToSend;
      this._prefragError = value.prefragError;
      this._prefragSuccess = value.prefragSuccess;
      this._qatBytesDecrypted = value.qatBytesDecrypted;
      this._qatBytesEncrypted = value.qatBytesEncrypted;
      this._qatPacketsDecrypted = value.qatPacketsDecrypted;
      this._qatPacketsEncrypted = value.qatPacketsEncrypted;
      this._rekeyNum = value.rekeyNum;
      this._sequenceNum = value.sequenceNum;
      this._sequenceNumRollover = value.sequenceNumRollover;
      this._tunnelIntfDown = value.tunnelIntfDown;
    }
  }

  // anti_replay_num - computed: false, optional: true, required: false
  private _antiReplayNum?: number; 
  public get antiReplayNum() {
    return this.getNumberAttribute('anti_replay_num');
  }
  public set antiReplayNum(value: number) {
    this._antiReplayNum = value;
  }
  public resetAntiReplayNum() {
    this._antiReplayNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayNumInput() {
    return this._antiReplayNum;
  }

  // bytes_decrypted - computed: false, optional: true, required: false
  private _bytesDecrypted?: number; 
  public get bytesDecrypted() {
    return this.getNumberAttribute('bytes_decrypted');
  }
  public set bytesDecrypted(value: number) {
    this._bytesDecrypted = value;
  }
  public resetBytesDecrypted() {
    this._bytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesDecryptedInput() {
    return this._bytesDecrypted;
  }

  // bytes_encrypted - computed: false, optional: true, required: false
  private _bytesEncrypted?: number; 
  public get bytesEncrypted() {
    return this.getNumberAttribute('bytes_encrypted');
  }
  public set bytesEncrypted(value: number) {
    this._bytesEncrypted = value;
  }
  public resetBytesEncrypted() {
    this._bytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesEncryptedInput() {
    return this._bytesEncrypted;
  }

  // cavium_bytes_decrypted - computed: false, optional: true, required: false
  private _caviumBytesDecrypted?: number; 
  public get caviumBytesDecrypted() {
    return this.getNumberAttribute('cavium_bytes_decrypted');
  }
  public set caviumBytesDecrypted(value: number) {
    this._caviumBytesDecrypted = value;
  }
  public resetCaviumBytesDecrypted() {
    this._caviumBytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumBytesDecryptedInput() {
    return this._caviumBytesDecrypted;
  }

  // cavium_bytes_encrypted - computed: false, optional: true, required: false
  private _caviumBytesEncrypted?: number; 
  public get caviumBytesEncrypted() {
    return this.getNumberAttribute('cavium_bytes_encrypted');
  }
  public set caviumBytesEncrypted(value: number) {
    this._caviumBytesEncrypted = value;
  }
  public resetCaviumBytesEncrypted() {
    this._caviumBytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumBytesEncryptedInput() {
    return this._caviumBytesEncrypted;
  }

  // cavium_packets_decrypted - computed: false, optional: true, required: false
  private _caviumPacketsDecrypted?: number; 
  public get caviumPacketsDecrypted() {
    return this.getNumberAttribute('cavium_packets_decrypted');
  }
  public set caviumPacketsDecrypted(value: number) {
    this._caviumPacketsDecrypted = value;
  }
  public resetCaviumPacketsDecrypted() {
    this._caviumPacketsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumPacketsDecryptedInput() {
    return this._caviumPacketsDecrypted;
  }

  // cavium_packets_encrypted - computed: false, optional: true, required: false
  private _caviumPacketsEncrypted?: number; 
  public get caviumPacketsEncrypted() {
    return this.getNumberAttribute('cavium_packets_encrypted');
  }
  public set caviumPacketsEncrypted(value: number) {
    this._caviumPacketsEncrypted = value;
  }
  public resetCaviumPacketsEncrypted() {
    this._caviumPacketsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumPacketsEncryptedInput() {
    return this._caviumPacketsEncrypted;
  }

  // frag_after_encap_frag_packets - computed: false, optional: true, required: false
  private _fragAfterEncapFragPackets?: number; 
  public get fragAfterEncapFragPackets() {
    return this.getNumberAttribute('frag_after_encap_frag_packets');
  }
  public set fragAfterEncapFragPackets(value: number) {
    this._fragAfterEncapFragPackets = value;
  }
  public resetFragAfterEncapFragPackets() {
    this._fragAfterEncapFragPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragAfterEncapFragPacketsInput() {
    return this._fragAfterEncapFragPackets;
  }

  // frag_received - computed: false, optional: true, required: false
  private _fragReceived?: number; 
  public get fragReceived() {
    return this.getNumberAttribute('frag_received');
  }
  public set fragReceived(value: number) {
    this._fragReceived = value;
  }
  public resetFragReceived() {
    this._fragReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragReceivedInput() {
    return this._fragReceived;
  }

  // invalid_tunnel_id - computed: false, optional: true, required: false
  private _invalidTunnelId?: number; 
  public get invalidTunnelId() {
    return this.getNumberAttribute('invalid_tunnel_id');
  }
  public set invalidTunnelId(value: number) {
    this._invalidTunnelId = value;
  }
  public resetInvalidTunnelId() {
    this._invalidTunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidTunnelIdInput() {
    return this._invalidTunnelId;
  }

  // no_next_hop - computed: false, optional: true, required: false
  private _noNextHop?: number; 
  public get noNextHop() {
    return this.getNumberAttribute('no_next_hop');
  }
  public set noNextHop(value: number) {
    this._noNextHop = value;
  }
  public resetNoNextHop() {
    this._noNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNextHopInput() {
    return this._noNextHop;
  }

  // no_tunnel_found - computed: false, optional: true, required: false
  private _noTunnelFound?: number; 
  public get noTunnelFound() {
    return this.getNumberAttribute('no_tunnel_found');
  }
  public set noTunnelFound(value: number) {
    this._noTunnelFound = value;
  }
  public resetNoTunnelFound() {
    this._noTunnelFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTunnelFoundInput() {
    return this._noTunnelFound;
  }

  // packets_decrypted - computed: false, optional: true, required: false
  private _packetsDecrypted?: number; 
  public get packetsDecrypted() {
    return this.getNumberAttribute('packets_decrypted');
  }
  public set packetsDecrypted(value: number) {
    this._packetsDecrypted = value;
  }
  public resetPacketsDecrypted() {
    this._packetsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsDecryptedInput() {
    return this._packetsDecrypted;
  }

  // packets_encrypted - computed: false, optional: true, required: false
  private _packetsEncrypted?: number; 
  public get packetsEncrypted() {
    return this.getNumberAttribute('packets_encrypted');
  }
  public set packetsEncrypted(value: number) {
    this._packetsEncrypted = value;
  }
  public resetPacketsEncrypted() {
    this._packetsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsEncryptedInput() {
    return this._packetsEncrypted;
  }

  // packets_err_encryption - computed: false, optional: true, required: false
  private _packetsErrEncryption?: number; 
  public get packetsErrEncryption() {
    return this.getNumberAttribute('packets_err_encryption');
  }
  public set packetsErrEncryption(value: number) {
    this._packetsErrEncryption = value;
  }
  public resetPacketsErrEncryption() {
    this._packetsErrEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrEncryptionInput() {
    return this._packetsErrEncryption;
  }

  // packets_err_icv_check - computed: false, optional: true, required: false
  private _packetsErrIcvCheck?: number; 
  public get packetsErrIcvCheck() {
    return this.getNumberAttribute('packets_err_icv_check');
  }
  public set packetsErrIcvCheck(value: number) {
    this._packetsErrIcvCheck = value;
  }
  public resetPacketsErrIcvCheck() {
    this._packetsErrIcvCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrIcvCheckInput() {
    return this._packetsErrIcvCheck;
  }

  // packets_err_inactive - computed: false, optional: true, required: false
  private _packetsErrInactive?: number; 
  public get packetsErrInactive() {
    return this.getNumberAttribute('packets_err_inactive');
  }
  public set packetsErrInactive(value: number) {
    this._packetsErrInactive = value;
  }
  public resetPacketsErrInactive() {
    this._packetsErrInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrInactiveInput() {
    return this._packetsErrInactive;
  }

  // packets_err_lifetime_lifebytes - computed: false, optional: true, required: false
  private _packetsErrLifetimeLifebytes?: number; 
  public get packetsErrLifetimeLifebytes() {
    return this.getNumberAttribute('packets_err_lifetime_lifebytes');
  }
  public set packetsErrLifetimeLifebytes(value: number) {
    this._packetsErrLifetimeLifebytes = value;
  }
  public resetPacketsErrLifetimeLifebytes() {
    this._packetsErrLifetimeLifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrLifetimeLifebytesInput() {
    return this._packetsErrLifetimeLifebytes;
  }

  // packets_err_nh_check - computed: false, optional: true, required: false
  private _packetsErrNhCheck?: number; 
  public get packetsErrNhCheck() {
    return this.getNumberAttribute('packets_err_nh_check');
  }
  public set packetsErrNhCheck(value: number) {
    this._packetsErrNhCheck = value;
  }
  public resetPacketsErrNhCheck() {
    this._packetsErrNhCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrNhCheckInput() {
    return this._packetsErrNhCheck;
  }

  // packets_err_pad_check - computed: false, optional: true, required: false
  private _packetsErrPadCheck?: number; 
  public get packetsErrPadCheck() {
    return this.getNumberAttribute('packets_err_pad_check');
  }
  public set packetsErrPadCheck(value: number) {
    this._packetsErrPadCheck = value;
  }
  public resetPacketsErrPadCheck() {
    this._packetsErrPadCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrPadCheckInput() {
    return this._packetsErrPadCheck;
  }

  // packets_err_pkt_sanity - computed: false, optional: true, required: false
  private _packetsErrPktSanity?: number; 
  public get packetsErrPktSanity() {
    return this.getNumberAttribute('packets_err_pkt_sanity');
  }
  public set packetsErrPktSanity(value: number) {
    this._packetsErrPktSanity = value;
  }
  public resetPacketsErrPktSanity() {
    this._packetsErrPktSanity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrPktSanityInput() {
    return this._packetsErrPktSanity;
  }

  // pkt_fail_prep_to_send - computed: false, optional: true, required: false
  private _pktFailPrepToSend?: number; 
  public get pktFailPrepToSend() {
    return this.getNumberAttribute('pkt_fail_prep_to_send');
  }
  public set pktFailPrepToSend(value: number) {
    this._pktFailPrepToSend = value;
  }
  public resetPktFailPrepToSend() {
    this._pktFailPrepToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktFailPrepToSendInput() {
    return this._pktFailPrepToSend;
  }

  // pkt_fail_to_send - computed: false, optional: true, required: false
  private _pktFailToSend?: number; 
  public get pktFailToSend() {
    return this.getNumberAttribute('pkt_fail_to_send');
  }
  public set pktFailToSend(value: number) {
    this._pktFailToSend = value;
  }
  public resetPktFailToSend() {
    this._pktFailToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktFailToSendInput() {
    return this._pktFailToSend;
  }

  // prefrag_error - computed: false, optional: true, required: false
  private _prefragError?: number; 
  public get prefragError() {
    return this.getNumberAttribute('prefrag_error');
  }
  public set prefragError(value: number) {
    this._prefragError = value;
  }
  public resetPrefragError() {
    this._prefragError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefragErrorInput() {
    return this._prefragError;
  }

  // prefrag_success - computed: false, optional: true, required: false
  private _prefragSuccess?: number; 
  public get prefragSuccess() {
    return this.getNumberAttribute('prefrag_success');
  }
  public set prefragSuccess(value: number) {
    this._prefragSuccess = value;
  }
  public resetPrefragSuccess() {
    this._prefragSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefragSuccessInput() {
    return this._prefragSuccess;
  }

  // qat_bytes_decrypted - computed: false, optional: true, required: false
  private _qatBytesDecrypted?: number; 
  public get qatBytesDecrypted() {
    return this.getNumberAttribute('qat_bytes_decrypted');
  }
  public set qatBytesDecrypted(value: number) {
    this._qatBytesDecrypted = value;
  }
  public resetQatBytesDecrypted() {
    this._qatBytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatBytesDecryptedInput() {
    return this._qatBytesDecrypted;
  }

  // qat_bytes_encrypted - computed: false, optional: true, required: false
  private _qatBytesEncrypted?: number; 
  public get qatBytesEncrypted() {
    return this.getNumberAttribute('qat_bytes_encrypted');
  }
  public set qatBytesEncrypted(value: number) {
    this._qatBytesEncrypted = value;
  }
  public resetQatBytesEncrypted() {
    this._qatBytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatBytesEncryptedInput() {
    return this._qatBytesEncrypted;
  }

  // qat_packets_decrypted - computed: false, optional: true, required: false
  private _qatPacketsDecrypted?: number; 
  public get qatPacketsDecrypted() {
    return this.getNumberAttribute('qat_packets_decrypted');
  }
  public set qatPacketsDecrypted(value: number) {
    this._qatPacketsDecrypted = value;
  }
  public resetQatPacketsDecrypted() {
    this._qatPacketsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatPacketsDecryptedInput() {
    return this._qatPacketsDecrypted;
  }

  // qat_packets_encrypted - computed: false, optional: true, required: false
  private _qatPacketsEncrypted?: number; 
  public get qatPacketsEncrypted() {
    return this.getNumberAttribute('qat_packets_encrypted');
  }
  public set qatPacketsEncrypted(value: number) {
    this._qatPacketsEncrypted = value;
  }
  public resetQatPacketsEncrypted() {
    this._qatPacketsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatPacketsEncryptedInput() {
    return this._qatPacketsEncrypted;
  }

  // rekey_num - computed: false, optional: true, required: false
  private _rekeyNum?: number; 
  public get rekeyNum() {
    return this.getNumberAttribute('rekey_num');
  }
  public set rekeyNum(value: number) {
    this._rekeyNum = value;
  }
  public resetRekeyNum() {
    this._rekeyNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyNumInput() {
    return this._rekeyNum;
  }

  // sequence_num - computed: false, optional: true, required: false
  private _sequenceNum?: number; 
  public get sequenceNum() {
    return this.getNumberAttribute('sequence_num');
  }
  public set sequenceNum(value: number) {
    this._sequenceNum = value;
  }
  public resetSequenceNum() {
    this._sequenceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumInput() {
    return this._sequenceNum;
  }

  // sequence_num_rollover - computed: false, optional: true, required: false
  private _sequenceNumRollover?: number; 
  public get sequenceNumRollover() {
    return this.getNumberAttribute('sequence_num_rollover');
  }
  public set sequenceNumRollover(value: number) {
    this._sequenceNumRollover = value;
  }
  public resetSequenceNumRollover() {
    this._sequenceNumRollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumRolloverInput() {
    return this._sequenceNumRollover;
  }

  // tunnel_intf_down - computed: false, optional: true, required: false
  private _tunnelIntfDown?: number; 
  public get tunnelIntfDown() {
    return this.getNumberAttribute('tunnel_intf_down');
  }
  public set tunnelIntfDown(value: number) {
    this._tunnelIntfDown = value;
  }
  public resetTunnelIntfDown() {
    this._tunnelIntfDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIntfDownInput() {
    return this._tunnelIntfDown;
  }
}
export interface DataThunderVpnStatsIpsecSaStatsListStruct {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#stats DataThunderVpnStats#stats}
  */
  readonly stats?: DataThunderVpnStatsIpsecSaStatsListStats;
}

export function dataThunderVpnStatsIpsecSaStatsListStructToTerraform(struct?: DataThunderVpnStatsIpsecSaStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderVpnStatsIpsecSaStatsListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVpnStatsIpsecSaStatsListStructToHclTerraform(struct?: DataThunderVpnStatsIpsecSaStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderVpnStatsIpsecSaStatsListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnStatsIpsecSaStatsListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsIpsecSaStatsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnStatsIpsecSaStatsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsIpsecSaStatsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVpnStatsIpsecSaStatsListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVpnStatsIpsecSaStatsListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderVpnStatsIpsecSaStatsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnStatsIpsecSaStatsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnStatsIpsecSaStatsListStructOutputReference {
    return new DataThunderVpnStatsIpsecSaStatsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#ha_standby_drop DataThunderVpnStats#ha_standby_drop}
  */
  readonly haStandbyDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#passthrough DataThunderVpnStats#passthrough}
  */
  readonly passthrough?: number;
}

export function dataThunderVpnStatsStatsToTerraform(struct?: DataThunderVpnStatsStatsOutputReference | DataThunderVpnStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_standby_drop: cdktf.numberToTerraform(struct!.haStandbyDrop),
    passthrough: cdktf.numberToTerraform(struct!.passthrough),
  }
}


export function dataThunderVpnStatsStatsToHclTerraform(struct?: DataThunderVpnStatsStatsOutputReference | DataThunderVpnStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_standby_drop: {
      value: cdktf.numberToHclTerraform(struct!.haStandbyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passthrough: {
      value: cdktf.numberToHclTerraform(struct!.passthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haStandbyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.haStandbyDrop = this._haStandbyDrop;
    }
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._haStandbyDrop = undefined;
      this._passthrough = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._haStandbyDrop = value.haStandbyDrop;
      this._passthrough = value.passthrough;
    }
  }

  // ha_standby_drop - computed: false, optional: true, required: false
  private _haStandbyDrop?: number; 
  public get haStandbyDrop() {
    return this.getNumberAttribute('ha_standby_drop');
  }
  public set haStandbyDrop(value: number) {
    this._haStandbyDrop = value;
  }
  public resetHaStandbyDrop() {
    this._haStandbyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStandbyDropInput() {
    return this._haStandbyDrop;
  }

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: number; 
  public get passthrough() {
    return this.getNumberAttribute('passthrough');
  }
  public set passthrough(value: number) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats thunder_vpn_stats}
*/
export class DataThunderVpnStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnStats to import
  * @param importFromId The id of the existing DataThunderVpnStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_stats thunder_vpn_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_stats',
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
    this._id = config.id;
    this._error.internalValue = config.error;
    this._ikeGatewayList.internalValue = config.ikeGatewayList;
    this._ikeStatsGlobal.internalValue = config.ikeStatsGlobal;
    this._ipsecList.internalValue = config.ipsecList;
    this._ipsecSaStatsList.internalValue = config.ipsecSaStatsList;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // error - computed: false, optional: true, required: false
  private _error = new DataThunderVpnStatsErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataThunderVpnStatsError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // ike_gateway_list - computed: false, optional: true, required: false
  private _ikeGatewayList = new DataThunderVpnStatsIkeGatewayListStructList(this, "ike_gateway_list", false);
  public get ikeGatewayList() {
    return this._ikeGatewayList;
  }
  public putIkeGatewayList(value: DataThunderVpnStatsIkeGatewayListStruct[] | cdktf.IResolvable) {
    this._ikeGatewayList.internalValue = value;
  }
  public resetIkeGatewayList() {
    this._ikeGatewayList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayListInput() {
    return this._ikeGatewayList.internalValue;
  }

  // ike_stats_global - computed: false, optional: true, required: false
  private _ikeStatsGlobal = new DataThunderVpnStatsIkeStatsGlobalOutputReference(this, "ike_stats_global");
  public get ikeStatsGlobal() {
    return this._ikeStatsGlobal;
  }
  public putIkeStatsGlobal(value: DataThunderVpnStatsIkeStatsGlobal) {
    this._ikeStatsGlobal.internalValue = value;
  }
  public resetIkeStatsGlobal() {
    this._ikeStatsGlobal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeStatsGlobalInput() {
    return this._ikeStatsGlobal.internalValue;
  }

  // ipsec_list - computed: false, optional: true, required: false
  private _ipsecList = new DataThunderVpnStatsIpsecListStructList(this, "ipsec_list", false);
  public get ipsecList() {
    return this._ipsecList;
  }
  public putIpsecList(value: DataThunderVpnStatsIpsecListStruct[] | cdktf.IResolvable) {
    this._ipsecList.internalValue = value;
  }
  public resetIpsecList() {
    this._ipsecList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecListInput() {
    return this._ipsecList.internalValue;
  }

  // ipsec_sa_stats_list - computed: false, optional: true, required: false
  private _ipsecSaStatsList = new DataThunderVpnStatsIpsecSaStatsListStructList(this, "ipsec_sa_stats_list", false);
  public get ipsecSaStatsList() {
    return this._ipsecSaStatsList;
  }
  public putIpsecSaStatsList(value: DataThunderVpnStatsIpsecSaStatsListStruct[] | cdktf.IResolvable) {
    this._ipsecSaStatsList.internalValue = value;
  }
  public resetIpsecSaStatsList() {
    this._ipsecSaStatsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaStatsListInput() {
    return this._ipsecSaStatsList.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVpnStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVpnStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      error: dataThunderVpnStatsErrorToTerraform(this._error.internalValue),
      ike_gateway_list: cdktf.listMapper(dataThunderVpnStatsIkeGatewayListStructToTerraform, true)(this._ikeGatewayList.internalValue),
      ike_stats_global: dataThunderVpnStatsIkeStatsGlobalToTerraform(this._ikeStatsGlobal.internalValue),
      ipsec_list: cdktf.listMapper(dataThunderVpnStatsIpsecListStructToTerraform, true)(this._ipsecList.internalValue),
      ipsec_sa_stats_list: cdktf.listMapper(dataThunderVpnStatsIpsecSaStatsListStructToTerraform, true)(this._ipsecSaStatsList.internalValue),
      stats: dataThunderVpnStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error: {
        value: dataThunderVpnStatsErrorToHclTerraform(this._error.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnStatsErrorList",
      },
      ike_gateway_list: {
        value: cdktf.listMapperHcl(dataThunderVpnStatsIkeGatewayListStructToHclTerraform, true)(this._ikeGatewayList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnStatsIkeGatewayListStructList",
      },
      ike_stats_global: {
        value: dataThunderVpnStatsIkeStatsGlobalToHclTerraform(this._ikeStatsGlobal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnStatsIkeStatsGlobalList",
      },
      ipsec_list: {
        value: cdktf.listMapperHcl(dataThunderVpnStatsIpsecListStructToHclTerraform, true)(this._ipsecList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnStatsIpsecListStructList",
      },
      ipsec_sa_stats_list: {
        value: cdktf.listMapperHcl(dataThunderVpnStatsIpsecSaStatsListStructToHclTerraform, true)(this._ipsecSaStatsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnStatsIpsecSaStatsListStructList",
      },
      stats: {
        value: dataThunderVpnStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
