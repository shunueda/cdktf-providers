// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnErrorStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#id DataThunderVpnErrorStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#stats DataThunderVpnErrorStats#stats}
  */
  readonly stats?: DataThunderVpnErrorStatsStats;
}
export interface DataThunderVpnErrorStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#ah_not_supported_with_gcm_gmac_sha2 DataThunderVpnErrorStats#ah_not_supported_with_gcm_gmac_sha2}
  */
  readonly ahNotSupportedWithGcmGmacSha2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_auth_type DataThunderVpnErrorStats#bad_auth_type}
  */
  readonly badAuthType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_checksum DataThunderVpnErrorStats#bad_checksum}
  */
  readonly badChecksum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_encrypt_type DataThunderVpnErrorStats#bad_encrypt_type}
  */
  readonly badEncryptType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_encrypt_type_ctr_gcm DataThunderVpnErrorStats#bad_encrypt_type_ctr_gcm}
  */
  readonly badEncryptTypeCtrGcm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_esp_next_header DataThunderVpnErrorStats#bad_esp_next_header}
  */
  readonly badEspNextHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_frag_size_configuration DataThunderVpnErrorStats#bad_frag_size_configuration}
  */
  readonly badFragSizeConfiguration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_fragment_size DataThunderVpnErrorStats#bad_fragment_size}
  */
  readonly badFragmentSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_gre_header DataThunderVpnErrorStats#bad_gre_header}
  */
  readonly badGreHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_gre_protocol DataThunderVpnErrorStats#bad_gre_protocol}
  */
  readonly badGreProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_inline_data DataThunderVpnErrorStats#bad_inline_data}
  */
  readonly badInlineData?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ip_payload_type DataThunderVpnErrorStats#bad_ip_payload_type}
  */
  readonly badIpPayloadType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ip_version DataThunderVpnErrorStats#bad_ip_version}
  */
  readonly badIpVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ipcomp_configuration DataThunderVpnErrorStats#bad_ipcomp_configuration}
  */
  readonly badIpcompConfiguration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ipsec_auth DataThunderVpnErrorStats#bad_ipsec_auth}
  */
  readonly badIpsecAuth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ipsec_context DataThunderVpnErrorStats#bad_ipsec_context}
  */
  readonly badIpsecContext?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ipsec_context_direction DataThunderVpnErrorStats#bad_ipsec_context_direction}
  */
  readonly badIpsecContextDirection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ipsec_context_flag_mismatch DataThunderVpnErrorStats#bad_ipsec_context_flag_mismatch}
  */
  readonly badIpsecContextFlagMismatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ipsec_padding DataThunderVpnErrorStats#bad_ipsec_padding}
  */
  readonly badIpsecPadding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ipsec_protocol DataThunderVpnErrorStats#bad_ipsec_protocol}
  */
  readonly badIpsecProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ipsec_spi DataThunderVpnErrorStats#bad_ipsec_spi}
  */
  readonly badIpsecSpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_ipsec_unknown DataThunderVpnErrorStats#bad_ipsec_unknown}
  */
  readonly badIpsecUnknown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_len DataThunderVpnErrorStats#bad_len}
  */
  readonly badLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_min_frag_size_auth_sha384_512 DataThunderVpnErrorStats#bad_min_frag_size_auth_sha384_512}
  */
  readonly badMinFragSizeAuthSha384512?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_opcode DataThunderVpnErrorStats#bad_opcode}
  */
  readonly badOpcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_selector_match DataThunderVpnErrorStats#bad_selector_match}
  */
  readonly badSelectorMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_sg_write_len DataThunderVpnErrorStats#bad_sg_write_len}
  */
  readonly badSgWriteLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#bad_srtp_auth_tag DataThunderVpnErrorStats#bad_srtp_auth_tag}
  */
  readonly badSrtpAuthTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#dsiv_incorrect_param DataThunderVpnErrorStats#dsiv_incorrect_param}
  */
  readonly dsivIncorrectParam?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#dummy_payload DataThunderVpnErrorStats#dummy_payload}
  */
  readonly dummyPayload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#error_ipv6_decrypt_rh_segs_left_error DataThunderVpnErrorStats#error_ipv6_decrypt_rh_segs_left_error}
  */
  readonly errorIpv6DecryptRhSegsLeftError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#error_ipv6_extension_header_bad DataThunderVpnErrorStats#error_ipv6_extension_header_bad}
  */
  readonly errorIpv6ExtensionHeaderBad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#ipcomp_payload DataThunderVpnErrorStats#ipcomp_payload}
  */
  readonly ipcompPayload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#ipv6_extension_headers_too_big DataThunderVpnErrorStats#ipv6_extension_headers_too_big}
  */
  readonly ipv6ExtensionHeadersTooBig?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#ipv6_hop_by_hop_error DataThunderVpnErrorStats#ipv6_hop_by_hop_error}
  */
  readonly ipv6HopByHopError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#ipv6_outbound_rh_copy_addr_error DataThunderVpnErrorStats#ipv6_outbound_rh_copy_addr_error}
  */
  readonly ipv6OutboundRhCopyAddrError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#ipv6_rh_length_error DataThunderVpnErrorStats#ipv6_rh_length_error}
  */
  readonly ipv6RhLengthError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#tfc_padding_with_prefrag_not_supported DataThunderVpnErrorStats#tfc_padding_with_prefrag_not_supported}
  */
  readonly tfcPaddingWithPrefragNotSupported?: number;
}

export function dataThunderVpnErrorStatsStatsToTerraform(struct?: DataThunderVpnErrorStatsStatsOutputReference | DataThunderVpnErrorStatsStats): any {
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


export function dataThunderVpnErrorStatsStatsToHclTerraform(struct?: DataThunderVpnErrorStatsStatsOutputReference | DataThunderVpnErrorStatsStats): any {
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

export class DataThunderVpnErrorStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnErrorStatsStats | undefined {
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

  public set internalValue(value: DataThunderVpnErrorStatsStats | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats thunder_vpn_error_stats}
*/
export class DataThunderVpnErrorStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_error_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnErrorStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnErrorStats to import
  * @param importFromId The id of the existing DataThunderVpnErrorStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnErrorStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_error_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_error_stats thunder_vpn_error_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnErrorStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnErrorStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_error_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVpnErrorStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVpnErrorStatsStats) {
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
      stats: dataThunderVpnErrorStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderVpnErrorStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnErrorStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
