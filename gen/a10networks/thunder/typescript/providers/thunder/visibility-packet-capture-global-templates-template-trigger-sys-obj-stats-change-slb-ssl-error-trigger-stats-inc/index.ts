// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for app data in handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#app_data_in_handshake VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#app_data_in_handshake}
  */
  readonly appDataInHandshake?: number;
  /**
  * Enable automatic packet-capture for attempt to reuse sess in diff context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#attempt_to_reuse_sess_in_diff_context VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#attempt_to_reuse_sess_in_diff_context}
  */
  readonly attemptToReuseSessInDiffContext?: number;
  /**
  * Enable automatic packet-capture for bad alert record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_alert_record VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_alert_record}
  */
  readonly badAlertRecord?: number;
  /**
  * Enable automatic packet-capture for bad authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_authentication_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_authentication_type}
  */
  readonly badAuthenticationType?: number;
  /**
  * Enable automatic packet-capture for bad change cipher spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_change_cipher_spec VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_change_cipher_spec}
  */
  readonly badChangeCipherSpec?: number;
  /**
  * Enable automatic packet-capture for bad checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_checksum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_checksum}
  */
  readonly badChecksum?: number;
  /**
  * Enable automatic packet-capture for bad data returned by callback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_data_returned_by_callback VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_data_returned_by_callback}
  */
  readonly badDataReturnedByCallback?: number;
  /**
  * Enable automatic packet-capture for bad decompression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_decompression VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_decompression}
  */
  readonly badDecompression?: number;
  /**
  * Enable automatic packet-capture for bad dh g length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_dh_g_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_dh_g_length}
  */
  readonly badDhGLength?: number;
  /**
  * Enable automatic packet-capture for bad dh p length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_dh_p_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_dh_p_length}
  */
  readonly badDhPLength?: number;
  /**
  * Enable automatic packet-capture for bad dh pub key length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_dh_pub_key_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_dh_pub_key_length}
  */
  readonly badDhPubKeyLength?: number;
  /**
  * Enable automatic packet-capture for bad digest length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_digest_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_digest_length}
  */
  readonly badDigestLength?: number;
  /**
  * Enable automatic packet-capture for bad dsa signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_dsa_signature VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_dsa_signature}
  */
  readonly badDsaSignature?: number;
  /**
  * Enable automatic packet-capture for bad ecc cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_ecc_cert VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_ecc_cert}
  */
  readonly badEccCert?: number;
  /**
  * Enable automatic packet-capture for bad ecdsa sig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_ecdsa_sig VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_ecdsa_sig}
  */
  readonly badEcdsaSig?: number;
  /**
  * Enable automatic packet-capture for bad ecpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_ecpoint VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_ecpoint}
  */
  readonly badEcpoint?: number;
  /**
  * Enable automatic packet-capture for bad handshake length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_handshake_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_handshake_length}
  */
  readonly badHandshakeLength?: number;
  /**
  * Enable automatic packet-capture for bad hello request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_hello_request VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_hello_request}
  */
  readonly badHelloRequest?: number;
  /**
  * Enable automatic packet-capture for bad length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_length}
  */
  readonly badLength?: number;
  /**
  * Enable automatic packet-capture for bad mac decode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_mac_decode VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_mac_decode}
  */
  readonly badMacDecode?: number;
  /**
  * Enable automatic packet-capture for bad message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_message_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_message_type}
  */
  readonly badMessageType?: number;
  /**
  * Enable automatic packet-capture for bad packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_packet_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_packet_length}
  */
  readonly badPacketLength?: number;
  /**
  * Enable automatic packet-capture for bad protocol version counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_protocol_version_counter VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_protocol_version_counter}
  */
  readonly badProtocolVersionCounter?: number;
  /**
  * Enable automatic packet-capture for bad response argument
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_response_argument VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_response_argument}
  */
  readonly badResponseArgument?: number;
  /**
  * Enable automatic packet-capture for bad rsa decrypt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_rsa_decrypt VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_rsa_decrypt}
  */
  readonly badRsaDecrypt?: number;
  /**
  * Enable automatic packet-capture for bad rsa e length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_rsa_e_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_rsa_e_length}
  */
  readonly badRsaELength?: number;
  /**
  * Enable automatic packet-capture for bad rsa encrypt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_rsa_encrypt VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_rsa_encrypt}
  */
  readonly badRsaEncrypt?: number;
  /**
  * Enable automatic packet-capture for bad rsa modulus length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_rsa_modulus_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_rsa_modulus_length}
  */
  readonly badRsaModulusLength?: number;
  /**
  * Enable automatic packet-capture for bad rsa signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_rsa_signature VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_rsa_signature}
  */
  readonly badRsaSignature?: number;
  /**
  * Enable automatic packet-capture for bad signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_signature VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_signature}
  */
  readonly badSignature?: number;
  /**
  * Enable automatic packet-capture for bad ssl filetype
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_ssl_filetype VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_ssl_filetype}
  */
  readonly badSslFiletype?: number;
  /**
  * Enable automatic packet-capture for bad ssl session id length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_ssl_session_id_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_ssl_session_id_length}
  */
  readonly badSslSessionIdLength?: number;
  /**
  * Enable automatic packet-capture for bad state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_state VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_state}
  */
  readonly badState?: number;
  /**
  * Enable automatic packet-capture for bad write retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bad_write_retry VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bad_write_retry}
  */
  readonly badWriteRetry?: number;
  /**
  * Enable automatic packet-capture for bio not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bio_not_set VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bio_not_set}
  */
  readonly bioNotSet?: number;
  /**
  * Enable automatic packet-capture for block cipher pad is wrong
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#block_cipher_pad_is_wrong VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#block_cipher_pad_is_wrong}
  */
  readonly blockCipherPadIsWrong?: number;
  /**
  * Enable automatic packet-capture for bn lib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#bn_lib VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#bn_lib}
  */
  readonly bnLib?: number;
  /**
  * Enable automatic packet-capture for ca dn length mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ca_dn_length_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ca_dn_length_mismatch}
  */
  readonly caDnLengthMismatch?: number;
  /**
  * Enable automatic packet-capture for ca dn too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ca_dn_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ca_dn_too_long}
  */
  readonly caDnTooLong?: number;
  /**
  * Enable automatic packet-capture for ccs received early
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ccs_received_early VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ccs_received_early}
  */
  readonly ccsReceivedEarly?: number;
  /**
  * Enable automatic packet-capture for cert length mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#cert_length_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#cert_length_mismatch}
  */
  readonly certLengthMismatch?: number;
  /**
  * Enable automatic packet-capture for certificate verify failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#certificate_verify_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#certificate_verify_failed}
  */
  readonly certificateVerifyFailed?: number;
  /**
  * Enable automatic packet-capture for challenge is different
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#challenge_is_different VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#challenge_is_different}
  */
  readonly challengeIsDifferent?: number;
  /**
  * Enable automatic packet-capture for cipher code wrong length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#cipher_code_wrong_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#cipher_code_wrong_length}
  */
  readonly cipherCodeWrongLength?: number;
  /**
  * Enable automatic packet-capture for cipher or hash unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#cipher_or_hash_unavailable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#cipher_or_hash_unavailable}
  */
  readonly cipherOrHashUnavailable?: number;
  /**
  * Enable automatic packet-capture for cipher table src error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#cipher_table_src_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#cipher_table_src_error}
  */
  readonly cipherTableSrcError?: number;
  /**
  * Enable automatic packet-capture for clienthello tlsext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#clienthello_tlsext VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#clienthello_tlsext}
  */
  readonly clienthelloTlsext?: number;
  /**
  * Enable automatic packet-capture for compressed length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#compressed_length_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#compressed_length_too_long}
  */
  readonly compressedLengthTooLong?: number;
  /**
  * Enable automatic packet-capture for compression failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#compression_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#compression_failure}
  */
  readonly compressionFailure?: number;
  /**
  * Enable automatic packet-capture for compression library error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#compression_library_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#compression_library_error}
  */
  readonly compressionLibraryError?: number;
  /**
  * Enable automatic packet-capture for connection id is different
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#connection_id_is_different VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#connection_id_is_different}
  */
  readonly connectionIdIsDifferent?: number;
  /**
  * Enable automatic packet-capture for connection type not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#connection_type_not_set VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#connection_type_not_set}
  */
  readonly connectionTypeNotSet?: number;
  /**
  * Enable automatic packet-capture for cookie mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#cookie_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#cookie_mismatch}
  */
  readonly cookieMismatch?: number;
  /**
  * Enable automatic packet-capture for data between ccs and finished
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#data_between_ccs_and_finished VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#data_between_ccs_and_finished}
  */
  readonly dataBetweenCcsAndFinished?: number;
  /**
  * Enable automatic packet-capture for data length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#data_length_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#data_length_too_long}
  */
  readonly dataLengthTooLong?: number;
  /**
  * Enable automatic packet-capture for decryption failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#decryption_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#decryption_failed}
  */
  readonly decryptionFailed?: number;
  /**
  * Enable automatic packet-capture for decryption failed or bad record mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#decryption_failed_or_bad_record_mac VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#decryption_failed_or_bad_record_mac}
  */
  readonly decryptionFailedOrBadRecordMac?: number;
  /**
  * Enable automatic packet-capture for dh public value length is wrong
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#dh_public_value_length_is_wrong VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#dh_public_value_length_is_wrong}
  */
  readonly dhPublicValueLengthIsWrong?: number;
  /**
  * Enable automatic packet-capture for digest check failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#digest_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#digest_check_failed}
  */
  readonly digestCheckFailed?: number;
  /**
  * Enable automatic packet-capture for encrypted length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#encrypted_length_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#encrypted_length_too_long}
  */
  readonly encryptedLengthTooLong?: number;
  /**
  * Enable automatic packet-capture for error generating tmp rsa key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#error_generating_tmp_rsa_key VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#error_generating_tmp_rsa_key}
  */
  readonly errorGeneratingTmpRsaKey?: number;
  /**
  * Enable automatic packet-capture for error in received cipher list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#error_in_received_cipher_list VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#error_in_received_cipher_list}
  */
  readonly errorInReceivedCipherList?: number;
  /**
  * Enable automatic packet-capture for excessive message size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#excessive_message_size VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#excessive_message_size}
  */
  readonly excessiveMessageSize?: number;
  /**
  * Enable automatic packet-capture for extra data in message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#extra_data_in_message VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#extra_data_in_message}
  */
  readonly extraDataInMessage?: number;
  /**
  * Enable automatic packet-capture for got a fin before a ccs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#got_a_fin_before_a_ccs VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#got_a_fin_before_a_ccs}
  */
  readonly gotAFinBeforeACcs?: number;
  /**
  * Enable automatic packet-capture for http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#http_request VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#http_request}
  */
  readonly httpRequest?: number;
  /**
  * Enable automatic packet-capture for https proxy request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#https_proxy_request VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#https_proxy_request}
  */
  readonly httpsProxyRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for illegal padding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#illegal_padding VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#illegal_padding}
  */
  readonly illegalPadding?: number;
  /**
  * Enable automatic packet-capture for inappropriate fallback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#inappropriate_fallback VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#inappropriate_fallback}
  */
  readonly inappropriateFallback?: number;
  /**
  * Enable automatic packet-capture for invalid challenge length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#invalid_challenge_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#invalid_challenge_length}
  */
  readonly invalidChallengeLength?: number;
  /**
  * Enable automatic packet-capture for invalid command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#invalid_command VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#invalid_command}
  */
  readonly invalidCommand?: number;
  /**
  * Enable automatic packet-capture for invalid purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#invalid_purpose VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#invalid_purpose}
  */
  readonly invalidPurpose?: number;
  /**
  * Enable automatic packet-capture for invalid status response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#invalid_status_response VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#invalid_status_response}
  */
  readonly invalidStatusResponse?: number;
  /**
  * Enable automatic packet-capture for invalid trust
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#invalid_trust VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#invalid_trust}
  */
  readonly invalidTrust?: number;
  /**
  * Enable automatic packet-capture for key arg too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#key_arg_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#key_arg_too_long}
  */
  readonly keyArgTooLong?: number;
  /**
  * Enable automatic packet-capture for krb5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5 VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5}
  */
  readonly krb5?: number;
  /**
  * Enable automatic packet-capture for krb5 client cc principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5_client_cc_principal VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5_client_cc_principal}
  */
  readonly krb5ClientCcPrincipal?: number;
  /**
  * Enable automatic packet-capture for krb5 client get cred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5_client_get_cred VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5_client_get_cred}
  */
  readonly krb5ClientGetCred?: number;
  /**
  * Enable automatic packet-capture for krb5 client init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5_client_init VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5_client_init}
  */
  readonly krb5ClientInit?: number;
  /**
  * Enable automatic packet-capture for krb5 client mk_req
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5_client_mk_req VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5_client_mk_req}
  */
  readonly krb5ClientMkReq?: number;
  /**
  * Enable automatic packet-capture for krb5 server bad ticket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5_server_bad_ticket VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5_server_bad_ticket}
  */
  readonly krb5ServerBadTicket?: number;
  /**
  * Enable automatic packet-capture for krb5 server init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5_server_init VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5_server_init}
  */
  readonly krb5ServerInit?: number;
  /**
  * Enable automatic packet-capture for krb5 server rd_req
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5_server_rd_req VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5_server_rd_req}
  */
  readonly krb5ServerRdReq?: number;
  /**
  * Enable automatic packet-capture for krb5 server tkt expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5_server_tkt_expired VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5_server_tkt_expired}
  */
  readonly krb5ServerTktExpired?: number;
  /**
  * Enable automatic packet-capture for krb5 server tkt not yet valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5_server_tkt_not_yet_valid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5_server_tkt_not_yet_valid}
  */
  readonly krb5ServerTktNotYetValid?: number;
  /**
  * Enable automatic packet-capture for krb5 server tkt skew
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#krb5_server_tkt_skew VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#krb5_server_tkt_skew}
  */
  readonly krb5ServerTktSkew?: number;
  /**
  * Enable automatic packet-capture for length mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#length_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#length_mismatch}
  */
  readonly lengthMismatch?: number;
  /**
  * Enable automatic packet-capture for length too short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#length_too_short VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#length_too_short}
  */
  readonly lengthTooShort?: number;
  /**
  * Enable automatic packet-capture for library bug
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#library_bug VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#library_bug}
  */
  readonly libraryBug?: number;
  /**
  * Enable automatic packet-capture for library has no ciphers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#library_has_no_ciphers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#library_has_no_ciphers}
  */
  readonly libraryHasNoCiphers?: number;
  /**
  * Enable automatic packet-capture for mast key too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#mast_key_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#mast_key_too_long}
  */
  readonly mastKeyTooLong?: number;
  /**
  * Enable automatic packet-capture for message too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#message_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#message_too_long}
  */
  readonly messageTooLong?: number;
  /**
  * Enable automatic packet-capture for missing dh dsa cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_dh_dsa_cert VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_dh_dsa_cert}
  */
  readonly missingDhDsaCert?: number;
  /**
  * Enable automatic packet-capture for missing dh key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_dh_key VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_dh_key}
  */
  readonly missingDhKey?: number;
  /**
  * Enable automatic packet-capture for missing dh rsa cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_dh_rsa_cert VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_dh_rsa_cert}
  */
  readonly missingDhRsaCert?: number;
  /**
  * Enable automatic packet-capture for missing dsa signing cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_dsa_signing_cert VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_dsa_signing_cert}
  */
  readonly missingDsaSigningCert?: number;
  /**
  * Enable automatic packet-capture for missing export tmp dh key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_export_tmp_dh_key VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_export_tmp_dh_key}
  */
  readonly missingExportTmpDhKey?: number;
  /**
  * Enable automatic packet-capture for missing export tmp rsa key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_export_tmp_rsa_key VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_export_tmp_rsa_key}
  */
  readonly missingExportTmpRsaKey?: number;
  /**
  * Enable automatic packet-capture for missing rsa certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_rsa_certificate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_rsa_certificate}
  */
  readonly missingRsaCertificate?: number;
  /**
  * Enable automatic packet-capture for missing rsa encrypting cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_rsa_encrypting_cert VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_rsa_encrypting_cert}
  */
  readonly missingRsaEncryptingCert?: number;
  /**
  * Enable automatic packet-capture for missing rsa signing cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_rsa_signing_cert VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_rsa_signing_cert}
  */
  readonly missingRsaSigningCert?: number;
  /**
  * Enable automatic packet-capture for missing tmp dh key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_tmp_dh_key VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_tmp_dh_key}
  */
  readonly missingTmpDhKey?: number;
  /**
  * Enable automatic packet-capture for missing tmp rsa key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_tmp_rsa_key VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_tmp_rsa_key}
  */
  readonly missingTmpRsaKey?: number;
  /**
  * Enable automatic packet-capture for missing tmp rsa pkey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_tmp_rsa_pkey VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_tmp_rsa_pkey}
  */
  readonly missingTmpRsaPkey?: number;
  /**
  * Enable automatic packet-capture for missing verify message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#missing_verify_message VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#missing_verify_message}
  */
  readonly missingVerifyMessage?: number;
  /**
  * Enable automatic packet-capture for multiple sgc restarts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#multiple_sgc_restarts VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#multiple_sgc_restarts}
  */
  readonly multipleSgcRestarts?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for no certificate assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_certificate_assigned VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_certificate_assigned}
  */
  readonly noCertificateAssigned?: number;
  /**
  * Enable automatic packet-capture for no certificate returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_certificate_returned VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_certificate_returned}
  */
  readonly noCertificateReturned?: number;
  /**
  * Enable automatic packet-capture for no certificate set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_certificate_set VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_certificate_set}
  */
  readonly noCertificateSet?: number;
  /**
  * Enable automatic packet-capture for no certificate specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_certificate_specified VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_certificate_specified}
  */
  readonly noCertificateSpecified?: number;
  /**
  * Enable automatic packet-capture for no certificates returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_certificates_returned VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_certificates_returned}
  */
  readonly noCertificatesReturned?: number;
  /**
  * Enable automatic packet-capture for no cipher list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_cipher_list VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_cipher_list}
  */
  readonly noCipherList?: number;
  /**
  * Enable automatic packet-capture for no cipher match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_cipher_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_cipher_match}
  */
  readonly noCipherMatch?: number;
  /**
  * Enable automatic packet-capture for no ciphers available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_ciphers_available VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_ciphers_available}
  */
  readonly noCiphersAvailable?: number;
  /**
  * Enable automatic packet-capture for no ciphers passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_ciphers_passed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_ciphers_passed}
  */
  readonly noCiphersPassed?: number;
  /**
  * Enable automatic packet-capture for no ciphers specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_ciphers_specified VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_ciphers_specified}
  */
  readonly noCiphersSpecified?: number;
  /**
  * Enable automatic packet-capture for no client cert received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_client_cert_received VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_client_cert_received}
  */
  readonly noClientCertReceived?: number;
  /**
  * Enable automatic packet-capture for no compression specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_compression_specified VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_compression_specified}
  */
  readonly noCompressionSpecified?: number;
  /**
  * Enable automatic packet-capture for no method specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_method_specified VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_method_specified}
  */
  readonly noMethodSpecified?: number;
  /**
  * Enable automatic packet-capture for no private key assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_private_key_assigned VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_private_key_assigned}
  */
  readonly noPrivateKeyAssigned?: number;
  /**
  * Enable automatic packet-capture for no privatekey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_privatekey VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_privatekey}
  */
  readonly noPrivatekey?: number;
  /**
  * Enable automatic packet-capture for no protocols available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_protocols_available VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_protocols_available}
  */
  readonly noProtocolsAvailable?: number;
  /**
  * Enable automatic packet-capture for no publickey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_publickey VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_publickey}
  */
  readonly noPublickey?: number;
  /**
  * Enable automatic packet-capture for no required digest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_required_digest VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_required_digest}
  */
  readonly noRequiredDigest?: number;
  /**
  * Enable automatic packet-capture for no shared cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_shared_cipher VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_shared_cipher}
  */
  readonly noSharedCipher?: number;
  /**
  * Enable automatic packet-capture for no verify callback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#no_verify_callback VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#no_verify_callback}
  */
  readonly noVerifyCallback?: number;
  /**
  * Enable automatic packet-capture for non sslv2 initial packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#non_sslv2_initial_packet VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#non_sslv2_initial_packet}
  */
  readonly nonSslv2InitialPacket?: number;
  /**
  * Enable automatic packet-capture for null ssl ctx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#null_ssl_ctx VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#null_ssl_ctx}
  */
  readonly nullSslCtx?: number;
  /**
  * Enable automatic packet-capture for null ssl method passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#null_ssl_method_passed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#null_ssl_method_passed}
  */
  readonly nullSslMethodPassed?: number;
  /**
  * Enable automatic packet-capture for old session cipher not returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#old_session_cipher_not_returned VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#old_session_cipher_not_returned}
  */
  readonly oldSessionCipherNotReturned?: number;
  /**
  * Enable automatic packet-capture for packet length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#packet_length_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#packet_length_too_long}
  */
  readonly packetLengthTooLong?: number;
  /**
  * Enable automatic packet-capture for parse tlsext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#parse_tlsext VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#parse_tlsext}
  */
  readonly parseTlsext?: number;
  /**
  * Enable automatic packet-capture for path too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#path_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#path_too_long}
  */
  readonly pathTooLong?: number;
  /**
  * Enable automatic packet-capture for peer did not return a certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#peer_did_not_return_a_certificate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#peer_did_not_return_a_certificate}
  */
  readonly peerDidNotReturnACertificate?: number;
  /**
  * Enable automatic packet-capture for peer error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#peer_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#peer_error}
  */
  readonly peerError?: number;
  /**
  * Enable automatic packet-capture for peer error certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#peer_error_certificate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#peer_error_certificate}
  */
  readonly peerErrorCertificate?: number;
  /**
  * Enable automatic packet-capture for peer error no certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#peer_error_no_certificate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#peer_error_no_certificate}
  */
  readonly peerErrorNoCertificate?: number;
  /**
  * Enable automatic packet-capture for peer error no cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#peer_error_no_cipher VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#peer_error_no_cipher}
  */
  readonly peerErrorNoCipher?: number;
  /**
  * Enable automatic packet-capture for peer error unsupported certificate type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#peer_error_unsupported_certificate_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#peer_error_unsupported_certificate_type}
  */
  readonly peerErrorUnsupportedCertificateType?: number;
  /**
  * Enable automatic packet-capture for pre mac length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#pre_mac_length_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#pre_mac_length_too_long}
  */
  readonly preMacLengthTooLong?: number;
  /**
  * Enable automatic packet-capture for problems mapping cipher functions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#problems_mapping_cipher_functions VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#problems_mapping_cipher_functions}
  */
  readonly problemsMappingCipherFunctions?: number;
  /**
  * Enable automatic packet-capture for protocol is shutdown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#protocol_is_shutdown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#protocol_is_shutdown}
  */
  readonly protocolIsShutdown?: number;
  /**
  * Enable automatic packet-capture for public key encrypt error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#public_key_encrypt_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#public_key_encrypt_error}
  */
  readonly publicKeyEncryptError?: number;
  /**
  * Enable automatic packet-capture for public key is not rsa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#public_key_is_not_rsa VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#public_key_is_not_rsa}
  */
  readonly publicKeyIsNotRsa?: number;
  /**
  * Enable automatic packet-capture for public key not rsa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#public_key_not_rsa VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#public_key_not_rsa}
  */
  readonly publicKeyNotRsa?: number;
  /**
  * Enable automatic packet-capture for read bio not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#read_bio_not_set VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#read_bio_not_set}
  */
  readonly readBioNotSet?: number;
  /**
  * Enable automatic packet-capture for read wrong packet type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#read_wrong_packet_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#read_wrong_packet_type}
  */
  readonly readWrongPacketType?: number;
  /**
  * Enable automatic packet-capture for record length mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#record_length_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#record_length_mismatch}
  */
  readonly recordLengthMismatch?: number;
  /**
  * Enable automatic packet-capture for record too large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#record_too_large VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#record_too_large}
  */
  readonly recordTooLarge?: number;
  /**
  * Enable automatic packet-capture for record too small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#record_too_small VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#record_too_small}
  */
  readonly recordTooSmall?: number;
  /**
  * Enable automatic packet-capture for required cipher missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#required_cipher_missing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#required_cipher_missing}
  */
  readonly requiredCipherMissing?: number;
  /**
  * Enable automatic packet-capture for reuse cert length not zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#reuse_cert_length_not_zero VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#reuse_cert_length_not_zero}
  */
  readonly reuseCertLengthNotZero?: number;
  /**
  * Enable automatic packet-capture for reuse cert type not zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#reuse_cert_type_not_zero VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#reuse_cert_type_not_zero}
  */
  readonly reuseCertTypeNotZero?: number;
  /**
  * Enable automatic packet-capture for reuse cipher list not zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#reuse_cipher_list_not_zero VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#reuse_cipher_list_not_zero}
  */
  readonly reuseCipherListNotZero?: number;
  /**
  * Enable automatic packet-capture for scsv received when renegotiating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#scsv_received_when_renegotiating VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#scsv_received_when_renegotiating}
  */
  readonly scsvReceivedWhenRenegotiating?: number;
  /**
  * Enable automatic packet-capture for serverhello tlsext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#serverhello_tlsext VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#serverhello_tlsext}
  */
  readonly serverhelloTlsext?: number;
  /**
  * Enable automatic packet-capture for session id context uninitialized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#session_id_context_uninitialized VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#session_id_context_uninitialized}
  */
  readonly sessionIdContextUninitialized?: number;
  /**
  * Enable automatic packet-capture for short read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#short_read VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#short_read}
  */
  readonly shortRead?: number;
  /**
  * Enable automatic packet-capture for signature for non signing certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#signature_for_non_signing_certificate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#signature_for_non_signing_certificate}
  */
  readonly signatureForNonSigningCertificate?: number;
  /**
  * Enable automatic packet-capture for ssl23 doing session id reuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl23_doing_session_id_reuse VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl23_doing_session_id_reuse}
  */
  readonly ssl23DoingSessionIdReuse?: number;
  /**
  * Enable automatic packet-capture for ssl2 connection id too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl2_connection_id_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl2_connection_id_too_long}
  */
  readonly ssl2ConnectionIdTooLong?: number;
  /**
  * Enable automatic packet-capture for ssl3 ext invalid servername
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl3_ext_invalid_servername VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl3_ext_invalid_servername}
  */
  readonly ssl3ExtInvalidServername?: number;
  /**
  * Enable automatic packet-capture for ssl3 ext invalid servername type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl3_ext_invalid_servername_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl3_ext_invalid_servername_type}
  */
  readonly ssl3ExtInvalidServernameType?: number;
  /**
  * Enable automatic packet-capture for ssl3 session id too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl3_session_id_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl3_session_id_too_long}
  */
  readonly ssl3SessionIdTooLong?: number;
  /**
  * Enable automatic packet-capture for ssl3 session id too short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl3_session_id_too_short VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl3_session_id_too_short}
  */
  readonly ssl3SessionIdTooShort?: number;
  /**
  * Enable automatic packet-capture for ssl ctx has no default ssl version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl_ctx_has_no_default_ssl_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl_ctx_has_no_default_ssl_version}
  */
  readonly sslCtxHasNoDefaultSslVersion?: number;
  /**
  * Enable automatic packet-capture for ssl handshake failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl_handshake_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl_handshake_failure}
  */
  readonly sslHandshakeFailure?: number;
  /**
  * Enable automatic packet-capture for ssl library has no ciphers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl_library_has_no_ciphers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl_library_has_no_ciphers}
  */
  readonly sslLibraryHasNoCiphers?: number;
  /**
  * Enable automatic packet-capture for ssl session id callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl_session_id_callback_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl_session_id_callback_failed}
  */
  readonly sslSessionIdCallbackFailed?: number;
  /**
  * Enable automatic packet-capture for ssl session id conflict
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl_session_id_conflict VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl_session_id_conflict}
  */
  readonly sslSessionIdConflict?: number;
  /**
  * Enable automatic packet-capture for ssl session id context too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl_session_id_context_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl_session_id_context_too_long}
  */
  readonly sslSessionIdContextTooLong?: number;
  /**
  * Enable automatic packet-capture for ssl session id has bad length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl_session_id_has_bad_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl_session_id_has_bad_length}
  */
  readonly sslSessionIdHasBadLength?: number;
  /**
  * Enable automatic packet-capture for ssl session id is different
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#ssl_session_id_is_different VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#ssl_session_id_is_different}
  */
  readonly sslSessionIdIsDifferent?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert bad certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_bad_certificate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_bad_certificate}
  */
  readonly sslv3AlertBadCertificate?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert bad record mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_bad_record_mac VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_bad_record_mac}
  */
  readonly sslv3AlertBadRecordMac?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert certificate expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_certificate_expired VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_certificate_expired}
  */
  readonly sslv3AlertCertificateExpired?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert certificate revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_certificate_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_certificate_revoked}
  */
  readonly sslv3AlertCertificateRevoked?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert certificate unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_certificate_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_certificate_unknown}
  */
  readonly sslv3AlertCertificateUnknown?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert decompression failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_decompression_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_decompression_failure}
  */
  readonly sslv3AlertDecompressionFailure?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert handshake failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_handshake_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_handshake_failure}
  */
  readonly sslv3AlertHandshakeFailure?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert illegal parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_illegal_parameter VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_illegal_parameter}
  */
  readonly sslv3AlertIllegalParameter?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert no certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_no_certificate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_no_certificate}
  */
  readonly sslv3AlertNoCertificate?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert peer error cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_peer_error_cert VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_peer_error_cert}
  */
  readonly sslv3AlertPeerErrorCert?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert peer error no cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_peer_error_no_cert VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_peer_error_no_cert}
  */
  readonly sslv3AlertPeerErrorNoCert?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert peer error no cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_peer_error_no_cipher VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_peer_error_no_cipher}
  */
  readonly sslv3AlertPeerErrorNoCipher?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert peer error unsupp cert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_peer_error_unsupp_cert_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_peer_error_unsupp_cert_type}
  */
  readonly sslv3AlertPeerErrorUnsuppCertType?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert unexpected msg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_unexpected_msg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_unexpected_msg}
  */
  readonly sslv3AlertUnexpectedMsg?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert unknown remote err type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_unknown_remote_err_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_unknown_remote_err_type}
  */
  readonly sslv3AlertUnknownRemoteErrType?: number;
  /**
  * Enable automatic packet-capture for sslv3 alert unspported cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#sslv3_alert_unspported_cert VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#sslv3_alert_unspported_cert}
  */
  readonly sslv3AlertUnspportedCert?: number;
  /**
  * Enable automatic packet-capture for tls client cert req with anon cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tls_client_cert_req_with_anon_cipher VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tls_client_cert_req_with_anon_cipher}
  */
  readonly tlsClientCertReqWithAnonCipher?: number;
  /**
  * Enable automatic packet-capture for tls invalid ecpointformat list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tls_invalid_ecpointformat_list VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tls_invalid_ecpointformat_list}
  */
  readonly tlsInvalidEcpointformatList?: number;
  /**
  * Enable automatic packet-capture for tls peer did not respond with cert list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tls_peer_did_not_respond_with_cert_list VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tls_peer_did_not_respond_with_cert_list}
  */
  readonly tlsPeerDidNotRespondWithCertList?: number;
  /**
  * Enable automatic packet-capture for tls rsa encrypted value length is wrong
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tls_rsa_encrypted_value_length_is_wrong VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tls_rsa_encrypted_value_length_is_wrong}
  */
  readonly tlsRsaEncryptedValueLengthIsWrong?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert access denied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_access_denied VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_access_denied}
  */
  readonly tlsv1AlertAccessDenied?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert decode error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_decode_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_decode_error}
  */
  readonly tlsv1AlertDecodeError?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert decrypt error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_decrypt_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_decrypt_error}
  */
  readonly tlsv1AlertDecryptError?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert decryption failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_decryption_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_decryption_failed}
  */
  readonly tlsv1AlertDecryptionFailed?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert export restriction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_export_restriction VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_export_restriction}
  */
  readonly tlsv1AlertExportRestriction?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert insufficient security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_insufficient_security VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_insufficient_security}
  */
  readonly tlsv1AlertInsufficientSecurity?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert internal error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_internal_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_internal_error}
  */
  readonly tlsv1AlertInternalError?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert no renegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_no_renegotiation VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_no_renegotiation}
  */
  readonly tlsv1AlertNoRenegotiation?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert protocol version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_protocol_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_protocol_version}
  */
  readonly tlsv1AlertProtocolVersion?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert record overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_record_overflow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_record_overflow}
  */
  readonly tlsv1AlertRecordOverflow?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert unknown ca
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_unknown_ca VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_unknown_ca}
  */
  readonly tlsv1AlertUnknownCa?: number;
  /**
  * Enable automatic packet-capture for tlsv1 alert user cancelled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tlsv1_alert_user_cancelled VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tlsv1_alert_user_cancelled}
  */
  readonly tlsv1AlertUserCancelled?: number;
  /**
  * Enable automatic packet-capture for tried to use unsupported cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#tried_to_use_unsupported_cipher VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#tried_to_use_unsupported_cipher}
  */
  readonly triedToUseUnsupportedCipher?: number;
  /**
  * Enable automatic packet-capture for unable to decode dh certs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unable_to_decode_dh_certs VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unable_to_decode_dh_certs}
  */
  readonly unableToDecodeDhCerts?: number;
  /**
  * Enable automatic packet-capture for unable to extract public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unable_to_extract_public_key VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unable_to_extract_public_key}
  */
  readonly unableToExtractPublicKey?: number;
  /**
  * Enable automatic packet-capture for unable to find dh parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unable_to_find_dh_parameters VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unable_to_find_dh_parameters}
  */
  readonly unableToFindDhParameters?: number;
  /**
  * Enable automatic packet-capture for unable to find public key parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unable_to_find_public_key_parameters VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unable_to_find_public_key_parameters}
  */
  readonly unableToFindPublicKeyParameters?: number;
  /**
  * Enable automatic packet-capture for unable to find ssl method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unable_to_find_ssl_method VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unable_to_find_ssl_method}
  */
  readonly unableToFindSslMethod?: number;
  /**
  * Enable automatic packet-capture for unable to load ssl2 md5 routines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unable_to_load_ssl2_md5_routines VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unable_to_load_ssl2_md5_routines}
  */
  readonly unableToLoadSsl2Md5Routines?: number;
  /**
  * Enable automatic packet-capture for unable to load ssl3 md5 routines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unable_to_load_ssl3_md5_routines VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unable_to_load_ssl3_md5_routines}
  */
  readonly unableToLoadSsl3Md5Routines?: number;
  /**
  * Enable automatic packet-capture for unable to load ssl3 sha1 routines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unable_to_load_ssl3_sha1_routines VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unable_to_load_ssl3_sha1_routines}
  */
  readonly unableToLoadSsl3Sha1Routines?: number;
  /**
  * Enable automatic packet-capture for unexpected message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unexpected_message VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unexpected_message}
  */
  readonly unexpectedMessage?: number;
  /**
  * Enable automatic packet-capture for unexpected record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unexpected_record VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unexpected_record}
  */
  readonly unexpectedRecord?: number;
  /**
  * Enable automatic packet-capture for uninitialized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#uninitialized VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#uninitialized}
  */
  readonly uninitialized?: number;
  /**
  * Enable automatic packet-capture for unknown alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unknown_alert_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unknown_alert_type}
  */
  readonly unknownAlertType?: number;
  /**
  * Enable automatic packet-capture for unknown certificate type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unknown_certificate_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unknown_certificate_type}
  */
  readonly unknownCertificateType?: number;
  /**
  * Enable automatic packet-capture for unknown cipher returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unknown_cipher_returned VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unknown_cipher_returned}
  */
  readonly unknownCipherReturned?: number;
  /**
  * Enable automatic packet-capture for unknown cipher type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unknown_cipher_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unknown_cipher_type}
  */
  readonly unknownCipherType?: number;
  /**
  * Enable automatic packet-capture for unknown key exchange type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unknown_key_exchange_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unknown_key_exchange_type}
  */
  readonly unknownKeyExchangeType?: number;
  /**
  * Enable automatic packet-capture for unknown pkey type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unknown_pkey_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unknown_pkey_type}
  */
  readonly unknownPkeyType?: number;
  /**
  * Enable automatic packet-capture for unknown protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unknown_protocol VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unknown_protocol}
  */
  readonly unknownProtocol?: number;
  /**
  * Enable automatic packet-capture for unknown remote error type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unknown_remote_error_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unknown_remote_error_type}
  */
  readonly unknownRemoteErrorType?: number;
  /**
  * Enable automatic packet-capture for unknown ssl version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unknown_ssl_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unknown_ssl_version}
  */
  readonly unknownSslVersion?: number;
  /**
  * Enable automatic packet-capture for unknown state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unknown_state VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unknown_state}
  */
  readonly unknownState?: number;
  /**
  * Enable automatic packet-capture for unsupported cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unsupported_cipher VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unsupported_cipher}
  */
  readonly unsupportedCipher?: number;
  /**
  * Enable automatic packet-capture for unsupported compression algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unsupported_compression_algorithm VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unsupported_compression_algorithm}
  */
  readonly unsupportedCompressionAlgorithm?: number;
  /**
  * Enable automatic packet-capture for unsupported digest type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unsupported_digest_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unsupported_digest_type}
  */
  readonly unsupportedDigestType?: number;
  /**
  * Enable automatic packet-capture for unsupported elliptic curve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unsupported_elliptic_curve VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unsupported_elliptic_curve}
  */
  readonly unsupportedEllipticCurve?: number;
  /**
  * Enable automatic packet-capture for unsupported option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unsupported_option VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unsupported_option}
  */
  readonly unsupportedOption?: number;
  /**
  * Enable automatic packet-capture for unsupported protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unsupported_protocol VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unsupported_protocol}
  */
  readonly unsupportedProtocol?: number;
  /**
  * Enable automatic packet-capture for unsupported ssl version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unsupported_ssl_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: number;
  /**
  * Enable automatic packet-capture for unsupported status type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#unsupported_status_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#unsupported_status_type}
  */
  readonly unsupportedStatusType?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for write bio not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#write_bio_not_set VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#write_bio_not_set}
  */
  readonly writeBioNotSet?: number;
  /**
  * Enable automatic packet-capture for wrong cipher returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#wrong_cipher_returned VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#wrong_cipher_returned}
  */
  readonly wrongCipherReturned?: number;
  /**
  * Enable automatic packet-capture for wrong counter of key bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#wrong_counter_of_key_bits VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#wrong_counter_of_key_bits}
  */
  readonly wrongCounterOfKeyBits?: number;
  /**
  * Enable automatic packet-capture for wrong message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#wrong_message_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#wrong_message_type}
  */
  readonly wrongMessageType?: number;
  /**
  * Enable automatic packet-capture for wrong signature length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#wrong_signature_length VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#wrong_signature_length}
  */
  readonly wrongSignatureLength?: number;
  /**
  * Enable automatic packet-capture for wrong signature size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#wrong_signature_size VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#wrong_signature_size}
  */
  readonly wrongSignatureSize?: number;
  /**
  * Enable automatic packet-capture for wrong ssl version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#wrong_ssl_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#wrong_ssl_version}
  */
  readonly wrongSslVersion?: number;
  /**
  * Enable automatic packet-capture for wrong version counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#wrong_version_counter VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#wrong_version_counter}
  */
  readonly wrongVersionCounter?: number;
  /**
  * Enable automatic packet-capture for x509 lib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#x509_lib VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#x509_lib}
  */
  readonly x509Lib?: number;
  /**
  * Enable automatic packet-capture for x509 verification setup problems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#x509_verification_setup_problems VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA#x509_verification_setup_problems}
  */
  readonly x509VerificationSetupProblems?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslErrorTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_error_trigger_stats_inc',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appDataInHandshake = config.appDataInHandshake;
    this._attemptToReuseSessInDiffContext = config.attemptToReuseSessInDiffContext;
    this._badAlertRecord = config.badAlertRecord;
    this._badAuthenticationType = config.badAuthenticationType;
    this._badChangeCipherSpec = config.badChangeCipherSpec;
    this._badChecksum = config.badChecksum;
    this._badDataReturnedByCallback = config.badDataReturnedByCallback;
    this._badDecompression = config.badDecompression;
    this._badDhGLength = config.badDhGLength;
    this._badDhPLength = config.badDhPLength;
    this._badDhPubKeyLength = config.badDhPubKeyLength;
    this._badDigestLength = config.badDigestLength;
    this._badDsaSignature = config.badDsaSignature;
    this._badEccCert = config.badEccCert;
    this._badEcdsaSig = config.badEcdsaSig;
    this._badEcpoint = config.badEcpoint;
    this._badHandshakeLength = config.badHandshakeLength;
    this._badHelloRequest = config.badHelloRequest;
    this._badLength = config.badLength;
    this._badMacDecode = config.badMacDecode;
    this._badMessageType = config.badMessageType;
    this._badPacketLength = config.badPacketLength;
    this._badProtocolVersionCounter = config.badProtocolVersionCounter;
    this._badResponseArgument = config.badResponseArgument;
    this._badRsaDecrypt = config.badRsaDecrypt;
    this._badRsaELength = config.badRsaELength;
    this._badRsaEncrypt = config.badRsaEncrypt;
    this._badRsaModulusLength = config.badRsaModulusLength;
    this._badRsaSignature = config.badRsaSignature;
    this._badSignature = config.badSignature;
    this._badSslFiletype = config.badSslFiletype;
    this._badSslSessionIdLength = config.badSslSessionIdLength;
    this._badState = config.badState;
    this._badWriteRetry = config.badWriteRetry;
    this._bioNotSet = config.bioNotSet;
    this._blockCipherPadIsWrong = config.blockCipherPadIsWrong;
    this._bnLib = config.bnLib;
    this._caDnLengthMismatch = config.caDnLengthMismatch;
    this._caDnTooLong = config.caDnTooLong;
    this._ccsReceivedEarly = config.ccsReceivedEarly;
    this._certLengthMismatch = config.certLengthMismatch;
    this._certificateVerifyFailed = config.certificateVerifyFailed;
    this._challengeIsDifferent = config.challengeIsDifferent;
    this._cipherCodeWrongLength = config.cipherCodeWrongLength;
    this._cipherOrHashUnavailable = config.cipherOrHashUnavailable;
    this._cipherTableSrcError = config.cipherTableSrcError;
    this._clienthelloTlsext = config.clienthelloTlsext;
    this._compressedLengthTooLong = config.compressedLengthTooLong;
    this._compressionFailure = config.compressionFailure;
    this._compressionLibraryError = config.compressionLibraryError;
    this._connectionIdIsDifferent = config.connectionIdIsDifferent;
    this._connectionTypeNotSet = config.connectionTypeNotSet;
    this._cookieMismatch = config.cookieMismatch;
    this._dataBetweenCcsAndFinished = config.dataBetweenCcsAndFinished;
    this._dataLengthTooLong = config.dataLengthTooLong;
    this._decryptionFailed = config.decryptionFailed;
    this._decryptionFailedOrBadRecordMac = config.decryptionFailedOrBadRecordMac;
    this._dhPublicValueLengthIsWrong = config.dhPublicValueLengthIsWrong;
    this._digestCheckFailed = config.digestCheckFailed;
    this._encryptedLengthTooLong = config.encryptedLengthTooLong;
    this._errorGeneratingTmpRsaKey = config.errorGeneratingTmpRsaKey;
    this._errorInReceivedCipherList = config.errorInReceivedCipherList;
    this._excessiveMessageSize = config.excessiveMessageSize;
    this._extraDataInMessage = config.extraDataInMessage;
    this._gotAFinBeforeACcs = config.gotAFinBeforeACcs;
    this._httpRequest = config.httpRequest;
    this._httpsProxyRequest = config.httpsProxyRequest;
    this._id = config.id;
    this._illegalPadding = config.illegalPadding;
    this._inappropriateFallback = config.inappropriateFallback;
    this._invalidChallengeLength = config.invalidChallengeLength;
    this._invalidCommand = config.invalidCommand;
    this._invalidPurpose = config.invalidPurpose;
    this._invalidStatusResponse = config.invalidStatusResponse;
    this._invalidTrust = config.invalidTrust;
    this._keyArgTooLong = config.keyArgTooLong;
    this._krb5 = config.krb5;
    this._krb5ClientCcPrincipal = config.krb5ClientCcPrincipal;
    this._krb5ClientGetCred = config.krb5ClientGetCred;
    this._krb5ClientInit = config.krb5ClientInit;
    this._krb5ClientMkReq = config.krb5ClientMkReq;
    this._krb5ServerBadTicket = config.krb5ServerBadTicket;
    this._krb5ServerInit = config.krb5ServerInit;
    this._krb5ServerRdReq = config.krb5ServerRdReq;
    this._krb5ServerTktExpired = config.krb5ServerTktExpired;
    this._krb5ServerTktNotYetValid = config.krb5ServerTktNotYetValid;
    this._krb5ServerTktSkew = config.krb5ServerTktSkew;
    this._lengthMismatch = config.lengthMismatch;
    this._lengthTooShort = config.lengthTooShort;
    this._libraryBug = config.libraryBug;
    this._libraryHasNoCiphers = config.libraryHasNoCiphers;
    this._mastKeyTooLong = config.mastKeyTooLong;
    this._messageTooLong = config.messageTooLong;
    this._missingDhDsaCert = config.missingDhDsaCert;
    this._missingDhKey = config.missingDhKey;
    this._missingDhRsaCert = config.missingDhRsaCert;
    this._missingDsaSigningCert = config.missingDsaSigningCert;
    this._missingExportTmpDhKey = config.missingExportTmpDhKey;
    this._missingExportTmpRsaKey = config.missingExportTmpRsaKey;
    this._missingRsaCertificate = config.missingRsaCertificate;
    this._missingRsaEncryptingCert = config.missingRsaEncryptingCert;
    this._missingRsaSigningCert = config.missingRsaSigningCert;
    this._missingTmpDhKey = config.missingTmpDhKey;
    this._missingTmpRsaKey = config.missingTmpRsaKey;
    this._missingTmpRsaPkey = config.missingTmpRsaPkey;
    this._missingVerifyMessage = config.missingVerifyMessage;
    this._multipleSgcRestarts = config.multipleSgcRestarts;
    this._name = config.name;
    this._noCertificateAssigned = config.noCertificateAssigned;
    this._noCertificateReturned = config.noCertificateReturned;
    this._noCertificateSet = config.noCertificateSet;
    this._noCertificateSpecified = config.noCertificateSpecified;
    this._noCertificatesReturned = config.noCertificatesReturned;
    this._noCipherList = config.noCipherList;
    this._noCipherMatch = config.noCipherMatch;
    this._noCiphersAvailable = config.noCiphersAvailable;
    this._noCiphersPassed = config.noCiphersPassed;
    this._noCiphersSpecified = config.noCiphersSpecified;
    this._noClientCertReceived = config.noClientCertReceived;
    this._noCompressionSpecified = config.noCompressionSpecified;
    this._noMethodSpecified = config.noMethodSpecified;
    this._noPrivateKeyAssigned = config.noPrivateKeyAssigned;
    this._noPrivatekey = config.noPrivatekey;
    this._noProtocolsAvailable = config.noProtocolsAvailable;
    this._noPublickey = config.noPublickey;
    this._noRequiredDigest = config.noRequiredDigest;
    this._noSharedCipher = config.noSharedCipher;
    this._noVerifyCallback = config.noVerifyCallback;
    this._nonSslv2InitialPacket = config.nonSslv2InitialPacket;
    this._nullSslCtx = config.nullSslCtx;
    this._nullSslMethodPassed = config.nullSslMethodPassed;
    this._oldSessionCipherNotReturned = config.oldSessionCipherNotReturned;
    this._packetLengthTooLong = config.packetLengthTooLong;
    this._parseTlsext = config.parseTlsext;
    this._pathTooLong = config.pathTooLong;
    this._peerDidNotReturnACertificate = config.peerDidNotReturnACertificate;
    this._peerError = config.peerError;
    this._peerErrorCertificate = config.peerErrorCertificate;
    this._peerErrorNoCertificate = config.peerErrorNoCertificate;
    this._peerErrorNoCipher = config.peerErrorNoCipher;
    this._peerErrorUnsupportedCertificateType = config.peerErrorUnsupportedCertificateType;
    this._preMacLengthTooLong = config.preMacLengthTooLong;
    this._problemsMappingCipherFunctions = config.problemsMappingCipherFunctions;
    this._protocolIsShutdown = config.protocolIsShutdown;
    this._publicKeyEncryptError = config.publicKeyEncryptError;
    this._publicKeyIsNotRsa = config.publicKeyIsNotRsa;
    this._publicKeyNotRsa = config.publicKeyNotRsa;
    this._readBioNotSet = config.readBioNotSet;
    this._readWrongPacketType = config.readWrongPacketType;
    this._recordLengthMismatch = config.recordLengthMismatch;
    this._recordTooLarge = config.recordTooLarge;
    this._recordTooSmall = config.recordTooSmall;
    this._requiredCipherMissing = config.requiredCipherMissing;
    this._reuseCertLengthNotZero = config.reuseCertLengthNotZero;
    this._reuseCertTypeNotZero = config.reuseCertTypeNotZero;
    this._reuseCipherListNotZero = config.reuseCipherListNotZero;
    this._scsvReceivedWhenRenegotiating = config.scsvReceivedWhenRenegotiating;
    this._serverhelloTlsext = config.serverhelloTlsext;
    this._sessionIdContextUninitialized = config.sessionIdContextUninitialized;
    this._shortRead = config.shortRead;
    this._signatureForNonSigningCertificate = config.signatureForNonSigningCertificate;
    this._ssl23DoingSessionIdReuse = config.ssl23DoingSessionIdReuse;
    this._ssl2ConnectionIdTooLong = config.ssl2ConnectionIdTooLong;
    this._ssl3ExtInvalidServername = config.ssl3ExtInvalidServername;
    this._ssl3ExtInvalidServernameType = config.ssl3ExtInvalidServernameType;
    this._ssl3SessionIdTooLong = config.ssl3SessionIdTooLong;
    this._ssl3SessionIdTooShort = config.ssl3SessionIdTooShort;
    this._sslCtxHasNoDefaultSslVersion = config.sslCtxHasNoDefaultSslVersion;
    this._sslHandshakeFailure = config.sslHandshakeFailure;
    this._sslLibraryHasNoCiphers = config.sslLibraryHasNoCiphers;
    this._sslSessionIdCallbackFailed = config.sslSessionIdCallbackFailed;
    this._sslSessionIdConflict = config.sslSessionIdConflict;
    this._sslSessionIdContextTooLong = config.sslSessionIdContextTooLong;
    this._sslSessionIdHasBadLength = config.sslSessionIdHasBadLength;
    this._sslSessionIdIsDifferent = config.sslSessionIdIsDifferent;
    this._sslv3AlertBadCertificate = config.sslv3AlertBadCertificate;
    this._sslv3AlertBadRecordMac = config.sslv3AlertBadRecordMac;
    this._sslv3AlertCertificateExpired = config.sslv3AlertCertificateExpired;
    this._sslv3AlertCertificateRevoked = config.sslv3AlertCertificateRevoked;
    this._sslv3AlertCertificateUnknown = config.sslv3AlertCertificateUnknown;
    this._sslv3AlertDecompressionFailure = config.sslv3AlertDecompressionFailure;
    this._sslv3AlertHandshakeFailure = config.sslv3AlertHandshakeFailure;
    this._sslv3AlertIllegalParameter = config.sslv3AlertIllegalParameter;
    this._sslv3AlertNoCertificate = config.sslv3AlertNoCertificate;
    this._sslv3AlertPeerErrorCert = config.sslv3AlertPeerErrorCert;
    this._sslv3AlertPeerErrorNoCert = config.sslv3AlertPeerErrorNoCert;
    this._sslv3AlertPeerErrorNoCipher = config.sslv3AlertPeerErrorNoCipher;
    this._sslv3AlertPeerErrorUnsuppCertType = config.sslv3AlertPeerErrorUnsuppCertType;
    this._sslv3AlertUnexpectedMsg = config.sslv3AlertUnexpectedMsg;
    this._sslv3AlertUnknownRemoteErrType = config.sslv3AlertUnknownRemoteErrType;
    this._sslv3AlertUnspportedCert = config.sslv3AlertUnspportedCert;
    this._tlsClientCertReqWithAnonCipher = config.tlsClientCertReqWithAnonCipher;
    this._tlsInvalidEcpointformatList = config.tlsInvalidEcpointformatList;
    this._tlsPeerDidNotRespondWithCertList = config.tlsPeerDidNotRespondWithCertList;
    this._tlsRsaEncryptedValueLengthIsWrong = config.tlsRsaEncryptedValueLengthIsWrong;
    this._tlsv1AlertAccessDenied = config.tlsv1AlertAccessDenied;
    this._tlsv1AlertDecodeError = config.tlsv1AlertDecodeError;
    this._tlsv1AlertDecryptError = config.tlsv1AlertDecryptError;
    this._tlsv1AlertDecryptionFailed = config.tlsv1AlertDecryptionFailed;
    this._tlsv1AlertExportRestriction = config.tlsv1AlertExportRestriction;
    this._tlsv1AlertInsufficientSecurity = config.tlsv1AlertInsufficientSecurity;
    this._tlsv1AlertInternalError = config.tlsv1AlertInternalError;
    this._tlsv1AlertNoRenegotiation = config.tlsv1AlertNoRenegotiation;
    this._tlsv1AlertProtocolVersion = config.tlsv1AlertProtocolVersion;
    this._tlsv1AlertRecordOverflow = config.tlsv1AlertRecordOverflow;
    this._tlsv1AlertUnknownCa = config.tlsv1AlertUnknownCa;
    this._tlsv1AlertUserCancelled = config.tlsv1AlertUserCancelled;
    this._triedToUseUnsupportedCipher = config.triedToUseUnsupportedCipher;
    this._unableToDecodeDhCerts = config.unableToDecodeDhCerts;
    this._unableToExtractPublicKey = config.unableToExtractPublicKey;
    this._unableToFindDhParameters = config.unableToFindDhParameters;
    this._unableToFindPublicKeyParameters = config.unableToFindPublicKeyParameters;
    this._unableToFindSslMethod = config.unableToFindSslMethod;
    this._unableToLoadSsl2Md5Routines = config.unableToLoadSsl2Md5Routines;
    this._unableToLoadSsl3Md5Routines = config.unableToLoadSsl3Md5Routines;
    this._unableToLoadSsl3Sha1Routines = config.unableToLoadSsl3Sha1Routines;
    this._unexpectedMessage = config.unexpectedMessage;
    this._unexpectedRecord = config.unexpectedRecord;
    this._uninitialized = config.uninitialized;
    this._unknownAlertType = config.unknownAlertType;
    this._unknownCertificateType = config.unknownCertificateType;
    this._unknownCipherReturned = config.unknownCipherReturned;
    this._unknownCipherType = config.unknownCipherType;
    this._unknownKeyExchangeType = config.unknownKeyExchangeType;
    this._unknownPkeyType = config.unknownPkeyType;
    this._unknownProtocol = config.unknownProtocol;
    this._unknownRemoteErrorType = config.unknownRemoteErrorType;
    this._unknownSslVersion = config.unknownSslVersion;
    this._unknownState = config.unknownState;
    this._unsupportedCipher = config.unsupportedCipher;
    this._unsupportedCompressionAlgorithm = config.unsupportedCompressionAlgorithm;
    this._unsupportedDigestType = config.unsupportedDigestType;
    this._unsupportedEllipticCurve = config.unsupportedEllipticCurve;
    this._unsupportedOption = config.unsupportedOption;
    this._unsupportedProtocol = config.unsupportedProtocol;
    this._unsupportedSslVersion = config.unsupportedSslVersion;
    this._unsupportedStatusType = config.unsupportedStatusType;
    this._uuid = config.uuid;
    this._writeBioNotSet = config.writeBioNotSet;
    this._wrongCipherReturned = config.wrongCipherReturned;
    this._wrongCounterOfKeyBits = config.wrongCounterOfKeyBits;
    this._wrongMessageType = config.wrongMessageType;
    this._wrongSignatureLength = config.wrongSignatureLength;
    this._wrongSignatureSize = config.wrongSignatureSize;
    this._wrongSslVersion = config.wrongSslVersion;
    this._wrongVersionCounter = config.wrongVersionCounter;
    this._x509Lib = config.x509Lib;
    this._x509VerificationSetupProblems = config.x509VerificationSetupProblems;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_data_in_handshake - computed: false, optional: true, required: false
  private _appDataInHandshake?: number; 
  public get appDataInHandshake() {
    return this.getNumberAttribute('app_data_in_handshake');
  }
  public set appDataInHandshake(value: number) {
    this._appDataInHandshake = value;
  }
  public resetAppDataInHandshake() {
    this._appDataInHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appDataInHandshakeInput() {
    return this._appDataInHandshake;
  }

  // attempt_to_reuse_sess_in_diff_context - computed: false, optional: true, required: false
  private _attemptToReuseSessInDiffContext?: number; 
  public get attemptToReuseSessInDiffContext() {
    return this.getNumberAttribute('attempt_to_reuse_sess_in_diff_context');
  }
  public set attemptToReuseSessInDiffContext(value: number) {
    this._attemptToReuseSessInDiffContext = value;
  }
  public resetAttemptToReuseSessInDiffContext() {
    this._attemptToReuseSessInDiffContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptToReuseSessInDiffContextInput() {
    return this._attemptToReuseSessInDiffContext;
  }

  // bad_alert_record - computed: false, optional: true, required: false
  private _badAlertRecord?: number; 
  public get badAlertRecord() {
    return this.getNumberAttribute('bad_alert_record');
  }
  public set badAlertRecord(value: number) {
    this._badAlertRecord = value;
  }
  public resetBadAlertRecord() {
    this._badAlertRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badAlertRecordInput() {
    return this._badAlertRecord;
  }

  // bad_authentication_type - computed: false, optional: true, required: false
  private _badAuthenticationType?: number; 
  public get badAuthenticationType() {
    return this.getNumberAttribute('bad_authentication_type');
  }
  public set badAuthenticationType(value: number) {
    this._badAuthenticationType = value;
  }
  public resetBadAuthenticationType() {
    this._badAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badAuthenticationTypeInput() {
    return this._badAuthenticationType;
  }

  // bad_change_cipher_spec - computed: false, optional: true, required: false
  private _badChangeCipherSpec?: number; 
  public get badChangeCipherSpec() {
    return this.getNumberAttribute('bad_change_cipher_spec');
  }
  public set badChangeCipherSpec(value: number) {
    this._badChangeCipherSpec = value;
  }
  public resetBadChangeCipherSpec() {
    this._badChangeCipherSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badChangeCipherSpecInput() {
    return this._badChangeCipherSpec;
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

  // bad_data_returned_by_callback - computed: false, optional: true, required: false
  private _badDataReturnedByCallback?: number; 
  public get badDataReturnedByCallback() {
    return this.getNumberAttribute('bad_data_returned_by_callback');
  }
  public set badDataReturnedByCallback(value: number) {
    this._badDataReturnedByCallback = value;
  }
  public resetBadDataReturnedByCallback() {
    this._badDataReturnedByCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDataReturnedByCallbackInput() {
    return this._badDataReturnedByCallback;
  }

  // bad_decompression - computed: false, optional: true, required: false
  private _badDecompression?: number; 
  public get badDecompression() {
    return this.getNumberAttribute('bad_decompression');
  }
  public set badDecompression(value: number) {
    this._badDecompression = value;
  }
  public resetBadDecompression() {
    this._badDecompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDecompressionInput() {
    return this._badDecompression;
  }

  // bad_dh_g_length - computed: false, optional: true, required: false
  private _badDhGLength?: number; 
  public get badDhGLength() {
    return this.getNumberAttribute('bad_dh_g_length');
  }
  public set badDhGLength(value: number) {
    this._badDhGLength = value;
  }
  public resetBadDhGLength() {
    this._badDhGLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDhGLengthInput() {
    return this._badDhGLength;
  }

  // bad_dh_p_length - computed: false, optional: true, required: false
  private _badDhPLength?: number; 
  public get badDhPLength() {
    return this.getNumberAttribute('bad_dh_p_length');
  }
  public set badDhPLength(value: number) {
    this._badDhPLength = value;
  }
  public resetBadDhPLength() {
    this._badDhPLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDhPLengthInput() {
    return this._badDhPLength;
  }

  // bad_dh_pub_key_length - computed: false, optional: true, required: false
  private _badDhPubKeyLength?: number; 
  public get badDhPubKeyLength() {
    return this.getNumberAttribute('bad_dh_pub_key_length');
  }
  public set badDhPubKeyLength(value: number) {
    this._badDhPubKeyLength = value;
  }
  public resetBadDhPubKeyLength() {
    this._badDhPubKeyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDhPubKeyLengthInput() {
    return this._badDhPubKeyLength;
  }

  // bad_digest_length - computed: false, optional: true, required: false
  private _badDigestLength?: number; 
  public get badDigestLength() {
    return this.getNumberAttribute('bad_digest_length');
  }
  public set badDigestLength(value: number) {
    this._badDigestLength = value;
  }
  public resetBadDigestLength() {
    this._badDigestLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDigestLengthInput() {
    return this._badDigestLength;
  }

  // bad_dsa_signature - computed: false, optional: true, required: false
  private _badDsaSignature?: number; 
  public get badDsaSignature() {
    return this.getNumberAttribute('bad_dsa_signature');
  }
  public set badDsaSignature(value: number) {
    this._badDsaSignature = value;
  }
  public resetBadDsaSignature() {
    this._badDsaSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDsaSignatureInput() {
    return this._badDsaSignature;
  }

  // bad_ecc_cert - computed: false, optional: true, required: false
  private _badEccCert?: number; 
  public get badEccCert() {
    return this.getNumberAttribute('bad_ecc_cert');
  }
  public set badEccCert(value: number) {
    this._badEccCert = value;
  }
  public resetBadEccCert() {
    this._badEccCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEccCertInput() {
    return this._badEccCert;
  }

  // bad_ecdsa_sig - computed: false, optional: true, required: false
  private _badEcdsaSig?: number; 
  public get badEcdsaSig() {
    return this.getNumberAttribute('bad_ecdsa_sig');
  }
  public set badEcdsaSig(value: number) {
    this._badEcdsaSig = value;
  }
  public resetBadEcdsaSig() {
    this._badEcdsaSig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEcdsaSigInput() {
    return this._badEcdsaSig;
  }

  // bad_ecpoint - computed: false, optional: true, required: false
  private _badEcpoint?: number; 
  public get badEcpoint() {
    return this.getNumberAttribute('bad_ecpoint');
  }
  public set badEcpoint(value: number) {
    this._badEcpoint = value;
  }
  public resetBadEcpoint() {
    this._badEcpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEcpointInput() {
    return this._badEcpoint;
  }

  // bad_handshake_length - computed: false, optional: true, required: false
  private _badHandshakeLength?: number; 
  public get badHandshakeLength() {
    return this.getNumberAttribute('bad_handshake_length');
  }
  public set badHandshakeLength(value: number) {
    this._badHandshakeLength = value;
  }
  public resetBadHandshakeLength() {
    this._badHandshakeLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badHandshakeLengthInput() {
    return this._badHandshakeLength;
  }

  // bad_hello_request - computed: false, optional: true, required: false
  private _badHelloRequest?: number; 
  public get badHelloRequest() {
    return this.getNumberAttribute('bad_hello_request');
  }
  public set badHelloRequest(value: number) {
    this._badHelloRequest = value;
  }
  public resetBadHelloRequest() {
    this._badHelloRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badHelloRequestInput() {
    return this._badHelloRequest;
  }

  // bad_length - computed: false, optional: true, required: false
  private _badLength?: number; 
  public get badLength() {
    return this.getNumberAttribute('bad_length');
  }
  public set badLength(value: number) {
    this._badLength = value;
  }
  public resetBadLength() {
    this._badLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badLengthInput() {
    return this._badLength;
  }

  // bad_mac_decode - computed: false, optional: true, required: false
  private _badMacDecode?: number; 
  public get badMacDecode() {
    return this.getNumberAttribute('bad_mac_decode');
  }
  public set badMacDecode(value: number) {
    this._badMacDecode = value;
  }
  public resetBadMacDecode() {
    this._badMacDecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badMacDecodeInput() {
    return this._badMacDecode;
  }

  // bad_message_type - computed: false, optional: true, required: false
  private _badMessageType?: number; 
  public get badMessageType() {
    return this.getNumberAttribute('bad_message_type');
  }
  public set badMessageType(value: number) {
    this._badMessageType = value;
  }
  public resetBadMessageType() {
    this._badMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badMessageTypeInput() {
    return this._badMessageType;
  }

  // bad_packet_length - computed: false, optional: true, required: false
  private _badPacketLength?: number; 
  public get badPacketLength() {
    return this.getNumberAttribute('bad_packet_length');
  }
  public set badPacketLength(value: number) {
    this._badPacketLength = value;
  }
  public resetBadPacketLength() {
    this._badPacketLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badPacketLengthInput() {
    return this._badPacketLength;
  }

  // bad_protocol_version_counter - computed: false, optional: true, required: false
  private _badProtocolVersionCounter?: number; 
  public get badProtocolVersionCounter() {
    return this.getNumberAttribute('bad_protocol_version_counter');
  }
  public set badProtocolVersionCounter(value: number) {
    this._badProtocolVersionCounter = value;
  }
  public resetBadProtocolVersionCounter() {
    this._badProtocolVersionCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badProtocolVersionCounterInput() {
    return this._badProtocolVersionCounter;
  }

  // bad_response_argument - computed: false, optional: true, required: false
  private _badResponseArgument?: number; 
  public get badResponseArgument() {
    return this.getNumberAttribute('bad_response_argument');
  }
  public set badResponseArgument(value: number) {
    this._badResponseArgument = value;
  }
  public resetBadResponseArgument() {
    this._badResponseArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badResponseArgumentInput() {
    return this._badResponseArgument;
  }

  // bad_rsa_decrypt - computed: false, optional: true, required: false
  private _badRsaDecrypt?: number; 
  public get badRsaDecrypt() {
    return this.getNumberAttribute('bad_rsa_decrypt');
  }
  public set badRsaDecrypt(value: number) {
    this._badRsaDecrypt = value;
  }
  public resetBadRsaDecrypt() {
    this._badRsaDecrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRsaDecryptInput() {
    return this._badRsaDecrypt;
  }

  // bad_rsa_e_length - computed: false, optional: true, required: false
  private _badRsaELength?: number; 
  public get badRsaELength() {
    return this.getNumberAttribute('bad_rsa_e_length');
  }
  public set badRsaELength(value: number) {
    this._badRsaELength = value;
  }
  public resetBadRsaELength() {
    this._badRsaELength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRsaELengthInput() {
    return this._badRsaELength;
  }

  // bad_rsa_encrypt - computed: false, optional: true, required: false
  private _badRsaEncrypt?: number; 
  public get badRsaEncrypt() {
    return this.getNumberAttribute('bad_rsa_encrypt');
  }
  public set badRsaEncrypt(value: number) {
    this._badRsaEncrypt = value;
  }
  public resetBadRsaEncrypt() {
    this._badRsaEncrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRsaEncryptInput() {
    return this._badRsaEncrypt;
  }

  // bad_rsa_modulus_length - computed: false, optional: true, required: false
  private _badRsaModulusLength?: number; 
  public get badRsaModulusLength() {
    return this.getNumberAttribute('bad_rsa_modulus_length');
  }
  public set badRsaModulusLength(value: number) {
    this._badRsaModulusLength = value;
  }
  public resetBadRsaModulusLength() {
    this._badRsaModulusLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRsaModulusLengthInput() {
    return this._badRsaModulusLength;
  }

  // bad_rsa_signature - computed: false, optional: true, required: false
  private _badRsaSignature?: number; 
  public get badRsaSignature() {
    return this.getNumberAttribute('bad_rsa_signature');
  }
  public set badRsaSignature(value: number) {
    this._badRsaSignature = value;
  }
  public resetBadRsaSignature() {
    this._badRsaSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRsaSignatureInput() {
    return this._badRsaSignature;
  }

  // bad_signature - computed: false, optional: true, required: false
  private _badSignature?: number; 
  public get badSignature() {
    return this.getNumberAttribute('bad_signature');
  }
  public set badSignature(value: number) {
    this._badSignature = value;
  }
  public resetBadSignature() {
    this._badSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSignatureInput() {
    return this._badSignature;
  }

  // bad_ssl_filetype - computed: false, optional: true, required: false
  private _badSslFiletype?: number; 
  public get badSslFiletype() {
    return this.getNumberAttribute('bad_ssl_filetype');
  }
  public set badSslFiletype(value: number) {
    this._badSslFiletype = value;
  }
  public resetBadSslFiletype() {
    this._badSslFiletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSslFiletypeInput() {
    return this._badSslFiletype;
  }

  // bad_ssl_session_id_length - computed: false, optional: true, required: false
  private _badSslSessionIdLength?: number; 
  public get badSslSessionIdLength() {
    return this.getNumberAttribute('bad_ssl_session_id_length');
  }
  public set badSslSessionIdLength(value: number) {
    this._badSslSessionIdLength = value;
  }
  public resetBadSslSessionIdLength() {
    this._badSslSessionIdLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSslSessionIdLengthInput() {
    return this._badSslSessionIdLength;
  }

  // bad_state - computed: false, optional: true, required: false
  private _badState?: number; 
  public get badState() {
    return this.getNumberAttribute('bad_state');
  }
  public set badState(value: number) {
    this._badState = value;
  }
  public resetBadState() {
    this._badState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badStateInput() {
    return this._badState;
  }

  // bad_write_retry - computed: false, optional: true, required: false
  private _badWriteRetry?: number; 
  public get badWriteRetry() {
    return this.getNumberAttribute('bad_write_retry');
  }
  public set badWriteRetry(value: number) {
    this._badWriteRetry = value;
  }
  public resetBadWriteRetry() {
    this._badWriteRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badWriteRetryInput() {
    return this._badWriteRetry;
  }

  // bio_not_set - computed: false, optional: true, required: false
  private _bioNotSet?: number; 
  public get bioNotSet() {
    return this.getNumberAttribute('bio_not_set');
  }
  public set bioNotSet(value: number) {
    this._bioNotSet = value;
  }
  public resetBioNotSet() {
    this._bioNotSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bioNotSetInput() {
    return this._bioNotSet;
  }

  // block_cipher_pad_is_wrong - computed: false, optional: true, required: false
  private _blockCipherPadIsWrong?: number; 
  public get blockCipherPadIsWrong() {
    return this.getNumberAttribute('block_cipher_pad_is_wrong');
  }
  public set blockCipherPadIsWrong(value: number) {
    this._blockCipherPadIsWrong = value;
  }
  public resetBlockCipherPadIsWrong() {
    this._blockCipherPadIsWrong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockCipherPadIsWrongInput() {
    return this._blockCipherPadIsWrong;
  }

  // bn_lib - computed: false, optional: true, required: false
  private _bnLib?: number; 
  public get bnLib() {
    return this.getNumberAttribute('bn_lib');
  }
  public set bnLib(value: number) {
    this._bnLib = value;
  }
  public resetBnLib() {
    this._bnLib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bnLibInput() {
    return this._bnLib;
  }

  // ca_dn_length_mismatch - computed: false, optional: true, required: false
  private _caDnLengthMismatch?: number; 
  public get caDnLengthMismatch() {
    return this.getNumberAttribute('ca_dn_length_mismatch');
  }
  public set caDnLengthMismatch(value: number) {
    this._caDnLengthMismatch = value;
  }
  public resetCaDnLengthMismatch() {
    this._caDnLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDnLengthMismatchInput() {
    return this._caDnLengthMismatch;
  }

  // ca_dn_too_long - computed: false, optional: true, required: false
  private _caDnTooLong?: number; 
  public get caDnTooLong() {
    return this.getNumberAttribute('ca_dn_too_long');
  }
  public set caDnTooLong(value: number) {
    this._caDnTooLong = value;
  }
  public resetCaDnTooLong() {
    this._caDnTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDnTooLongInput() {
    return this._caDnTooLong;
  }

  // ccs_received_early - computed: false, optional: true, required: false
  private _ccsReceivedEarly?: number; 
  public get ccsReceivedEarly() {
    return this.getNumberAttribute('ccs_received_early');
  }
  public set ccsReceivedEarly(value: number) {
    this._ccsReceivedEarly = value;
  }
  public resetCcsReceivedEarly() {
    this._ccsReceivedEarly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccsReceivedEarlyInput() {
    return this._ccsReceivedEarly;
  }

  // cert_length_mismatch - computed: false, optional: true, required: false
  private _certLengthMismatch?: number; 
  public get certLengthMismatch() {
    return this.getNumberAttribute('cert_length_mismatch');
  }
  public set certLengthMismatch(value: number) {
    this._certLengthMismatch = value;
  }
  public resetCertLengthMismatch() {
    this._certLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certLengthMismatchInput() {
    return this._certLengthMismatch;
  }

  // certificate_verify_failed - computed: false, optional: true, required: false
  private _certificateVerifyFailed?: number; 
  public get certificateVerifyFailed() {
    return this.getNumberAttribute('certificate_verify_failed');
  }
  public set certificateVerifyFailed(value: number) {
    this._certificateVerifyFailed = value;
  }
  public resetCertificateVerifyFailed() {
    this._certificateVerifyFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateVerifyFailedInput() {
    return this._certificateVerifyFailed;
  }

  // challenge_is_different - computed: false, optional: true, required: false
  private _challengeIsDifferent?: number; 
  public get challengeIsDifferent() {
    return this.getNumberAttribute('challenge_is_different');
  }
  public set challengeIsDifferent(value: number) {
    this._challengeIsDifferent = value;
  }
  public resetChallengeIsDifferent() {
    this._challengeIsDifferent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeIsDifferentInput() {
    return this._challengeIsDifferent;
  }

  // cipher_code_wrong_length - computed: false, optional: true, required: false
  private _cipherCodeWrongLength?: number; 
  public get cipherCodeWrongLength() {
    return this.getNumberAttribute('cipher_code_wrong_length');
  }
  public set cipherCodeWrongLength(value: number) {
    this._cipherCodeWrongLength = value;
  }
  public resetCipherCodeWrongLength() {
    this._cipherCodeWrongLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherCodeWrongLengthInput() {
    return this._cipherCodeWrongLength;
  }

  // cipher_or_hash_unavailable - computed: false, optional: true, required: false
  private _cipherOrHashUnavailable?: number; 
  public get cipherOrHashUnavailable() {
    return this.getNumberAttribute('cipher_or_hash_unavailable');
  }
  public set cipherOrHashUnavailable(value: number) {
    this._cipherOrHashUnavailable = value;
  }
  public resetCipherOrHashUnavailable() {
    this._cipherOrHashUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherOrHashUnavailableInput() {
    return this._cipherOrHashUnavailable;
  }

  // cipher_table_src_error - computed: false, optional: true, required: false
  private _cipherTableSrcError?: number; 
  public get cipherTableSrcError() {
    return this.getNumberAttribute('cipher_table_src_error');
  }
  public set cipherTableSrcError(value: number) {
    this._cipherTableSrcError = value;
  }
  public resetCipherTableSrcError() {
    this._cipherTableSrcError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherTableSrcErrorInput() {
    return this._cipherTableSrcError;
  }

  // clienthello_tlsext - computed: false, optional: true, required: false
  private _clienthelloTlsext?: number; 
  public get clienthelloTlsext() {
    return this.getNumberAttribute('clienthello_tlsext');
  }
  public set clienthelloTlsext(value: number) {
    this._clienthelloTlsext = value;
  }
  public resetClienthelloTlsext() {
    this._clienthelloTlsext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clienthelloTlsextInput() {
    return this._clienthelloTlsext;
  }

  // compressed_length_too_long - computed: false, optional: true, required: false
  private _compressedLengthTooLong?: number; 
  public get compressedLengthTooLong() {
    return this.getNumberAttribute('compressed_length_too_long');
  }
  public set compressedLengthTooLong(value: number) {
    this._compressedLengthTooLong = value;
  }
  public resetCompressedLengthTooLong() {
    this._compressedLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedLengthTooLongInput() {
    return this._compressedLengthTooLong;
  }

  // compression_failure - computed: false, optional: true, required: false
  private _compressionFailure?: number; 
  public get compressionFailure() {
    return this.getNumberAttribute('compression_failure');
  }
  public set compressionFailure(value: number) {
    this._compressionFailure = value;
  }
  public resetCompressionFailure() {
    this._compressionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFailureInput() {
    return this._compressionFailure;
  }

  // compression_library_error - computed: false, optional: true, required: false
  private _compressionLibraryError?: number; 
  public get compressionLibraryError() {
    return this.getNumberAttribute('compression_library_error');
  }
  public set compressionLibraryError(value: number) {
    this._compressionLibraryError = value;
  }
  public resetCompressionLibraryError() {
    this._compressionLibraryError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLibraryErrorInput() {
    return this._compressionLibraryError;
  }

  // connection_id_is_different - computed: false, optional: true, required: false
  private _connectionIdIsDifferent?: number; 
  public get connectionIdIsDifferent() {
    return this.getNumberAttribute('connection_id_is_different');
  }
  public set connectionIdIsDifferent(value: number) {
    this._connectionIdIsDifferent = value;
  }
  public resetConnectionIdIsDifferent() {
    this._connectionIdIsDifferent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdIsDifferentInput() {
    return this._connectionIdIsDifferent;
  }

  // connection_type_not_set - computed: false, optional: true, required: false
  private _connectionTypeNotSet?: number; 
  public get connectionTypeNotSet() {
    return this.getNumberAttribute('connection_type_not_set');
  }
  public set connectionTypeNotSet(value: number) {
    this._connectionTypeNotSet = value;
  }
  public resetConnectionTypeNotSet() {
    this._connectionTypeNotSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeNotSetInput() {
    return this._connectionTypeNotSet;
  }

  // cookie_mismatch - computed: false, optional: true, required: false
  private _cookieMismatch?: number; 
  public get cookieMismatch() {
    return this.getNumberAttribute('cookie_mismatch');
  }
  public set cookieMismatch(value: number) {
    this._cookieMismatch = value;
  }
  public resetCookieMismatch() {
    this._cookieMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMismatchInput() {
    return this._cookieMismatch;
  }

  // data_between_ccs_and_finished - computed: false, optional: true, required: false
  private _dataBetweenCcsAndFinished?: number; 
  public get dataBetweenCcsAndFinished() {
    return this.getNumberAttribute('data_between_ccs_and_finished');
  }
  public set dataBetweenCcsAndFinished(value: number) {
    this._dataBetweenCcsAndFinished = value;
  }
  public resetDataBetweenCcsAndFinished() {
    this._dataBetweenCcsAndFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBetweenCcsAndFinishedInput() {
    return this._dataBetweenCcsAndFinished;
  }

  // data_length_too_long - computed: false, optional: true, required: false
  private _dataLengthTooLong?: number; 
  public get dataLengthTooLong() {
    return this.getNumberAttribute('data_length_too_long');
  }
  public set dataLengthTooLong(value: number) {
    this._dataLengthTooLong = value;
  }
  public resetDataLengthTooLong() {
    this._dataLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthTooLongInput() {
    return this._dataLengthTooLong;
  }

  // decryption_failed - computed: false, optional: true, required: false
  private _decryptionFailed?: number; 
  public get decryptionFailed() {
    return this.getNumberAttribute('decryption_failed');
  }
  public set decryptionFailed(value: number) {
    this._decryptionFailed = value;
  }
  public resetDecryptionFailed() {
    this._decryptionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionFailedInput() {
    return this._decryptionFailed;
  }

  // decryption_failed_or_bad_record_mac - computed: false, optional: true, required: false
  private _decryptionFailedOrBadRecordMac?: number; 
  public get decryptionFailedOrBadRecordMac() {
    return this.getNumberAttribute('decryption_failed_or_bad_record_mac');
  }
  public set decryptionFailedOrBadRecordMac(value: number) {
    this._decryptionFailedOrBadRecordMac = value;
  }
  public resetDecryptionFailedOrBadRecordMac() {
    this._decryptionFailedOrBadRecordMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionFailedOrBadRecordMacInput() {
    return this._decryptionFailedOrBadRecordMac;
  }

  // dh_public_value_length_is_wrong - computed: false, optional: true, required: false
  private _dhPublicValueLengthIsWrong?: number; 
  public get dhPublicValueLengthIsWrong() {
    return this.getNumberAttribute('dh_public_value_length_is_wrong');
  }
  public set dhPublicValueLengthIsWrong(value: number) {
    this._dhPublicValueLengthIsWrong = value;
  }
  public resetDhPublicValueLengthIsWrong() {
    this._dhPublicValueLengthIsWrong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhPublicValueLengthIsWrongInput() {
    return this._dhPublicValueLengthIsWrong;
  }

  // digest_check_failed - computed: false, optional: true, required: false
  private _digestCheckFailed?: number; 
  public get digestCheckFailed() {
    return this.getNumberAttribute('digest_check_failed');
  }
  public set digestCheckFailed(value: number) {
    this._digestCheckFailed = value;
  }
  public resetDigestCheckFailed() {
    this._digestCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestCheckFailedInput() {
    return this._digestCheckFailed;
  }

  // encrypted_length_too_long - computed: false, optional: true, required: false
  private _encryptedLengthTooLong?: number; 
  public get encryptedLengthTooLong() {
    return this.getNumberAttribute('encrypted_length_too_long');
  }
  public set encryptedLengthTooLong(value: number) {
    this._encryptedLengthTooLong = value;
  }
  public resetEncryptedLengthTooLong() {
    this._encryptedLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedLengthTooLongInput() {
    return this._encryptedLengthTooLong;
  }

  // error_generating_tmp_rsa_key - computed: false, optional: true, required: false
  private _errorGeneratingTmpRsaKey?: number; 
  public get errorGeneratingTmpRsaKey() {
    return this.getNumberAttribute('error_generating_tmp_rsa_key');
  }
  public set errorGeneratingTmpRsaKey(value: number) {
    this._errorGeneratingTmpRsaKey = value;
  }
  public resetErrorGeneratingTmpRsaKey() {
    this._errorGeneratingTmpRsaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorGeneratingTmpRsaKeyInput() {
    return this._errorGeneratingTmpRsaKey;
  }

  // error_in_received_cipher_list - computed: false, optional: true, required: false
  private _errorInReceivedCipherList?: number; 
  public get errorInReceivedCipherList() {
    return this.getNumberAttribute('error_in_received_cipher_list');
  }
  public set errorInReceivedCipherList(value: number) {
    this._errorInReceivedCipherList = value;
  }
  public resetErrorInReceivedCipherList() {
    this._errorInReceivedCipherList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInReceivedCipherListInput() {
    return this._errorInReceivedCipherList;
  }

  // excessive_message_size - computed: false, optional: true, required: false
  private _excessiveMessageSize?: number; 
  public get excessiveMessageSize() {
    return this.getNumberAttribute('excessive_message_size');
  }
  public set excessiveMessageSize(value: number) {
    this._excessiveMessageSize = value;
  }
  public resetExcessiveMessageSize() {
    this._excessiveMessageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessiveMessageSizeInput() {
    return this._excessiveMessageSize;
  }

  // extra_data_in_message - computed: false, optional: true, required: false
  private _extraDataInMessage?: number; 
  public get extraDataInMessage() {
    return this.getNumberAttribute('extra_data_in_message');
  }
  public set extraDataInMessage(value: number) {
    this._extraDataInMessage = value;
  }
  public resetExtraDataInMessage() {
    this._extraDataInMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDataInMessageInput() {
    return this._extraDataInMessage;
  }

  // got_a_fin_before_a_ccs - computed: false, optional: true, required: false
  private _gotAFinBeforeACcs?: number; 
  public get gotAFinBeforeACcs() {
    return this.getNumberAttribute('got_a_fin_before_a_ccs');
  }
  public set gotAFinBeforeACcs(value: number) {
    this._gotAFinBeforeACcs = value;
  }
  public resetGotAFinBeforeACcs() {
    this._gotAFinBeforeACcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotAFinBeforeACcsInput() {
    return this._gotAFinBeforeACcs;
  }

  // http_request - computed: false, optional: true, required: false
  private _httpRequest?: number; 
  public get httpRequest() {
    return this.getNumberAttribute('http_request');
  }
  public set httpRequest(value: number) {
    this._httpRequest = value;
  }
  public resetHttpRequest() {
    this._httpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestInput() {
    return this._httpRequest;
  }

  // https_proxy_request - computed: false, optional: true, required: false
  private _httpsProxyRequest?: number; 
  public get httpsProxyRequest() {
    return this.getNumberAttribute('https_proxy_request');
  }
  public set httpsProxyRequest(value: number) {
    this._httpsProxyRequest = value;
  }
  public resetHttpsProxyRequest() {
    this._httpsProxyRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyRequestInput() {
    return this._httpsProxyRequest;
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

  // illegal_padding - computed: false, optional: true, required: false
  private _illegalPadding?: number; 
  public get illegalPadding() {
    return this.getNumberAttribute('illegal_padding');
  }
  public set illegalPadding(value: number) {
    this._illegalPadding = value;
  }
  public resetIllegalPadding() {
    this._illegalPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalPaddingInput() {
    return this._illegalPadding;
  }

  // inappropriate_fallback - computed: false, optional: true, required: false
  private _inappropriateFallback?: number; 
  public get inappropriateFallback() {
    return this.getNumberAttribute('inappropriate_fallback');
  }
  public set inappropriateFallback(value: number) {
    this._inappropriateFallback = value;
  }
  public resetInappropriateFallback() {
    this._inappropriateFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inappropriateFallbackInput() {
    return this._inappropriateFallback;
  }

  // invalid_challenge_length - computed: false, optional: true, required: false
  private _invalidChallengeLength?: number; 
  public get invalidChallengeLength() {
    return this.getNumberAttribute('invalid_challenge_length');
  }
  public set invalidChallengeLength(value: number) {
    this._invalidChallengeLength = value;
  }
  public resetInvalidChallengeLength() {
    this._invalidChallengeLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidChallengeLengthInput() {
    return this._invalidChallengeLength;
  }

  // invalid_command - computed: false, optional: true, required: false
  private _invalidCommand?: number; 
  public get invalidCommand() {
    return this.getNumberAttribute('invalid_command');
  }
  public set invalidCommand(value: number) {
    this._invalidCommand = value;
  }
  public resetInvalidCommand() {
    this._invalidCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidCommandInput() {
    return this._invalidCommand;
  }

  // invalid_purpose - computed: false, optional: true, required: false
  private _invalidPurpose?: number; 
  public get invalidPurpose() {
    return this.getNumberAttribute('invalid_purpose');
  }
  public set invalidPurpose(value: number) {
    this._invalidPurpose = value;
  }
  public resetInvalidPurpose() {
    this._invalidPurpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidPurposeInput() {
    return this._invalidPurpose;
  }

  // invalid_status_response - computed: false, optional: true, required: false
  private _invalidStatusResponse?: number; 
  public get invalidStatusResponse() {
    return this.getNumberAttribute('invalid_status_response');
  }
  public set invalidStatusResponse(value: number) {
    this._invalidStatusResponse = value;
  }
  public resetInvalidStatusResponse() {
    this._invalidStatusResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStatusResponseInput() {
    return this._invalidStatusResponse;
  }

  // invalid_trust - computed: false, optional: true, required: false
  private _invalidTrust?: number; 
  public get invalidTrust() {
    return this.getNumberAttribute('invalid_trust');
  }
  public set invalidTrust(value: number) {
    this._invalidTrust = value;
  }
  public resetInvalidTrust() {
    this._invalidTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidTrustInput() {
    return this._invalidTrust;
  }

  // key_arg_too_long - computed: false, optional: true, required: false
  private _keyArgTooLong?: number; 
  public get keyArgTooLong() {
    return this.getNumberAttribute('key_arg_too_long');
  }
  public set keyArgTooLong(value: number) {
    this._keyArgTooLong = value;
  }
  public resetKeyArgTooLong() {
    this._keyArgTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArgTooLongInput() {
    return this._keyArgTooLong;
  }

  // krb5 - computed: false, optional: true, required: false
  private _krb5?: number; 
  public get krb5() {
    return this.getNumberAttribute('krb5');
  }
  public set krb5(value: number) {
    this._krb5 = value;
  }
  public resetKrb5() {
    this._krb5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5Input() {
    return this._krb5;
  }

  // krb5_client_cc_principal - computed: false, optional: true, required: false
  private _krb5ClientCcPrincipal?: number; 
  public get krb5ClientCcPrincipal() {
    return this.getNumberAttribute('krb5_client_cc_principal');
  }
  public set krb5ClientCcPrincipal(value: number) {
    this._krb5ClientCcPrincipal = value;
  }
  public resetKrb5ClientCcPrincipal() {
    this._krb5ClientCcPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ClientCcPrincipalInput() {
    return this._krb5ClientCcPrincipal;
  }

  // krb5_client_get_cred - computed: false, optional: true, required: false
  private _krb5ClientGetCred?: number; 
  public get krb5ClientGetCred() {
    return this.getNumberAttribute('krb5_client_get_cred');
  }
  public set krb5ClientGetCred(value: number) {
    this._krb5ClientGetCred = value;
  }
  public resetKrb5ClientGetCred() {
    this._krb5ClientGetCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ClientGetCredInput() {
    return this._krb5ClientGetCred;
  }

  // krb5_client_init - computed: false, optional: true, required: false
  private _krb5ClientInit?: number; 
  public get krb5ClientInit() {
    return this.getNumberAttribute('krb5_client_init');
  }
  public set krb5ClientInit(value: number) {
    this._krb5ClientInit = value;
  }
  public resetKrb5ClientInit() {
    this._krb5ClientInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ClientInitInput() {
    return this._krb5ClientInit;
  }

  // krb5_client_mk_req - computed: false, optional: true, required: false
  private _krb5ClientMkReq?: number; 
  public get krb5ClientMkReq() {
    return this.getNumberAttribute('krb5_client_mk_req');
  }
  public set krb5ClientMkReq(value: number) {
    this._krb5ClientMkReq = value;
  }
  public resetKrb5ClientMkReq() {
    this._krb5ClientMkReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ClientMkReqInput() {
    return this._krb5ClientMkReq;
  }

  // krb5_server_bad_ticket - computed: false, optional: true, required: false
  private _krb5ServerBadTicket?: number; 
  public get krb5ServerBadTicket() {
    return this.getNumberAttribute('krb5_server_bad_ticket');
  }
  public set krb5ServerBadTicket(value: number) {
    this._krb5ServerBadTicket = value;
  }
  public resetKrb5ServerBadTicket() {
    this._krb5ServerBadTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerBadTicketInput() {
    return this._krb5ServerBadTicket;
  }

  // krb5_server_init - computed: false, optional: true, required: false
  private _krb5ServerInit?: number; 
  public get krb5ServerInit() {
    return this.getNumberAttribute('krb5_server_init');
  }
  public set krb5ServerInit(value: number) {
    this._krb5ServerInit = value;
  }
  public resetKrb5ServerInit() {
    this._krb5ServerInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerInitInput() {
    return this._krb5ServerInit;
  }

  // krb5_server_rd_req - computed: false, optional: true, required: false
  private _krb5ServerRdReq?: number; 
  public get krb5ServerRdReq() {
    return this.getNumberAttribute('krb5_server_rd_req');
  }
  public set krb5ServerRdReq(value: number) {
    this._krb5ServerRdReq = value;
  }
  public resetKrb5ServerRdReq() {
    this._krb5ServerRdReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerRdReqInput() {
    return this._krb5ServerRdReq;
  }

  // krb5_server_tkt_expired - computed: false, optional: true, required: false
  private _krb5ServerTktExpired?: number; 
  public get krb5ServerTktExpired() {
    return this.getNumberAttribute('krb5_server_tkt_expired');
  }
  public set krb5ServerTktExpired(value: number) {
    this._krb5ServerTktExpired = value;
  }
  public resetKrb5ServerTktExpired() {
    this._krb5ServerTktExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerTktExpiredInput() {
    return this._krb5ServerTktExpired;
  }

  // krb5_server_tkt_not_yet_valid - computed: false, optional: true, required: false
  private _krb5ServerTktNotYetValid?: number; 
  public get krb5ServerTktNotYetValid() {
    return this.getNumberAttribute('krb5_server_tkt_not_yet_valid');
  }
  public set krb5ServerTktNotYetValid(value: number) {
    this._krb5ServerTktNotYetValid = value;
  }
  public resetKrb5ServerTktNotYetValid() {
    this._krb5ServerTktNotYetValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerTktNotYetValidInput() {
    return this._krb5ServerTktNotYetValid;
  }

  // krb5_server_tkt_skew - computed: false, optional: true, required: false
  private _krb5ServerTktSkew?: number; 
  public get krb5ServerTktSkew() {
    return this.getNumberAttribute('krb5_server_tkt_skew');
  }
  public set krb5ServerTktSkew(value: number) {
    this._krb5ServerTktSkew = value;
  }
  public resetKrb5ServerTktSkew() {
    this._krb5ServerTktSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerTktSkewInput() {
    return this._krb5ServerTktSkew;
  }

  // length_mismatch - computed: false, optional: true, required: false
  private _lengthMismatch?: number; 
  public get lengthMismatch() {
    return this.getNumberAttribute('length_mismatch');
  }
  public set lengthMismatch(value: number) {
    this._lengthMismatch = value;
  }
  public resetLengthMismatch() {
    this._lengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthMismatchInput() {
    return this._lengthMismatch;
  }

  // length_too_short - computed: false, optional: true, required: false
  private _lengthTooShort?: number; 
  public get lengthTooShort() {
    return this.getNumberAttribute('length_too_short');
  }
  public set lengthTooShort(value: number) {
    this._lengthTooShort = value;
  }
  public resetLengthTooShort() {
    this._lengthTooShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthTooShortInput() {
    return this._lengthTooShort;
  }

  // library_bug - computed: false, optional: true, required: false
  private _libraryBug?: number; 
  public get libraryBug() {
    return this.getNumberAttribute('library_bug');
  }
  public set libraryBug(value: number) {
    this._libraryBug = value;
  }
  public resetLibraryBug() {
    this._libraryBug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryBugInput() {
    return this._libraryBug;
  }

  // library_has_no_ciphers - computed: false, optional: true, required: false
  private _libraryHasNoCiphers?: number; 
  public get libraryHasNoCiphers() {
    return this.getNumberAttribute('library_has_no_ciphers');
  }
  public set libraryHasNoCiphers(value: number) {
    this._libraryHasNoCiphers = value;
  }
  public resetLibraryHasNoCiphers() {
    this._libraryHasNoCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryHasNoCiphersInput() {
    return this._libraryHasNoCiphers;
  }

  // mast_key_too_long - computed: false, optional: true, required: false
  private _mastKeyTooLong?: number; 
  public get mastKeyTooLong() {
    return this.getNumberAttribute('mast_key_too_long');
  }
  public set mastKeyTooLong(value: number) {
    this._mastKeyTooLong = value;
  }
  public resetMastKeyTooLong() {
    this._mastKeyTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mastKeyTooLongInput() {
    return this._mastKeyTooLong;
  }

  // message_too_long - computed: false, optional: true, required: false
  private _messageTooLong?: number; 
  public get messageTooLong() {
    return this.getNumberAttribute('message_too_long');
  }
  public set messageTooLong(value: number) {
    this._messageTooLong = value;
  }
  public resetMessageTooLong() {
    this._messageTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTooLongInput() {
    return this._messageTooLong;
  }

  // missing_dh_dsa_cert - computed: false, optional: true, required: false
  private _missingDhDsaCert?: number; 
  public get missingDhDsaCert() {
    return this.getNumberAttribute('missing_dh_dsa_cert');
  }
  public set missingDhDsaCert(value: number) {
    this._missingDhDsaCert = value;
  }
  public resetMissingDhDsaCert() {
    this._missingDhDsaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDhDsaCertInput() {
    return this._missingDhDsaCert;
  }

  // missing_dh_key - computed: false, optional: true, required: false
  private _missingDhKey?: number; 
  public get missingDhKey() {
    return this.getNumberAttribute('missing_dh_key');
  }
  public set missingDhKey(value: number) {
    this._missingDhKey = value;
  }
  public resetMissingDhKey() {
    this._missingDhKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDhKeyInput() {
    return this._missingDhKey;
  }

  // missing_dh_rsa_cert - computed: false, optional: true, required: false
  private _missingDhRsaCert?: number; 
  public get missingDhRsaCert() {
    return this.getNumberAttribute('missing_dh_rsa_cert');
  }
  public set missingDhRsaCert(value: number) {
    this._missingDhRsaCert = value;
  }
  public resetMissingDhRsaCert() {
    this._missingDhRsaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDhRsaCertInput() {
    return this._missingDhRsaCert;
  }

  // missing_dsa_signing_cert - computed: false, optional: true, required: false
  private _missingDsaSigningCert?: number; 
  public get missingDsaSigningCert() {
    return this.getNumberAttribute('missing_dsa_signing_cert');
  }
  public set missingDsaSigningCert(value: number) {
    this._missingDsaSigningCert = value;
  }
  public resetMissingDsaSigningCert() {
    this._missingDsaSigningCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDsaSigningCertInput() {
    return this._missingDsaSigningCert;
  }

  // missing_export_tmp_dh_key - computed: false, optional: true, required: false
  private _missingExportTmpDhKey?: number; 
  public get missingExportTmpDhKey() {
    return this.getNumberAttribute('missing_export_tmp_dh_key');
  }
  public set missingExportTmpDhKey(value: number) {
    this._missingExportTmpDhKey = value;
  }
  public resetMissingExportTmpDhKey() {
    this._missingExportTmpDhKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingExportTmpDhKeyInput() {
    return this._missingExportTmpDhKey;
  }

  // missing_export_tmp_rsa_key - computed: false, optional: true, required: false
  private _missingExportTmpRsaKey?: number; 
  public get missingExportTmpRsaKey() {
    return this.getNumberAttribute('missing_export_tmp_rsa_key');
  }
  public set missingExportTmpRsaKey(value: number) {
    this._missingExportTmpRsaKey = value;
  }
  public resetMissingExportTmpRsaKey() {
    this._missingExportTmpRsaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingExportTmpRsaKeyInput() {
    return this._missingExportTmpRsaKey;
  }

  // missing_rsa_certificate - computed: false, optional: true, required: false
  private _missingRsaCertificate?: number; 
  public get missingRsaCertificate() {
    return this.getNumberAttribute('missing_rsa_certificate');
  }
  public set missingRsaCertificate(value: number) {
    this._missingRsaCertificate = value;
  }
  public resetMissingRsaCertificate() {
    this._missingRsaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingRsaCertificateInput() {
    return this._missingRsaCertificate;
  }

  // missing_rsa_encrypting_cert - computed: false, optional: true, required: false
  private _missingRsaEncryptingCert?: number; 
  public get missingRsaEncryptingCert() {
    return this.getNumberAttribute('missing_rsa_encrypting_cert');
  }
  public set missingRsaEncryptingCert(value: number) {
    this._missingRsaEncryptingCert = value;
  }
  public resetMissingRsaEncryptingCert() {
    this._missingRsaEncryptingCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingRsaEncryptingCertInput() {
    return this._missingRsaEncryptingCert;
  }

  // missing_rsa_signing_cert - computed: false, optional: true, required: false
  private _missingRsaSigningCert?: number; 
  public get missingRsaSigningCert() {
    return this.getNumberAttribute('missing_rsa_signing_cert');
  }
  public set missingRsaSigningCert(value: number) {
    this._missingRsaSigningCert = value;
  }
  public resetMissingRsaSigningCert() {
    this._missingRsaSigningCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingRsaSigningCertInput() {
    return this._missingRsaSigningCert;
  }

  // missing_tmp_dh_key - computed: false, optional: true, required: false
  private _missingTmpDhKey?: number; 
  public get missingTmpDhKey() {
    return this.getNumberAttribute('missing_tmp_dh_key');
  }
  public set missingTmpDhKey(value: number) {
    this._missingTmpDhKey = value;
  }
  public resetMissingTmpDhKey() {
    this._missingTmpDhKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingTmpDhKeyInput() {
    return this._missingTmpDhKey;
  }

  // missing_tmp_rsa_key - computed: false, optional: true, required: false
  private _missingTmpRsaKey?: number; 
  public get missingTmpRsaKey() {
    return this.getNumberAttribute('missing_tmp_rsa_key');
  }
  public set missingTmpRsaKey(value: number) {
    this._missingTmpRsaKey = value;
  }
  public resetMissingTmpRsaKey() {
    this._missingTmpRsaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingTmpRsaKeyInput() {
    return this._missingTmpRsaKey;
  }

  // missing_tmp_rsa_pkey - computed: false, optional: true, required: false
  private _missingTmpRsaPkey?: number; 
  public get missingTmpRsaPkey() {
    return this.getNumberAttribute('missing_tmp_rsa_pkey');
  }
  public set missingTmpRsaPkey(value: number) {
    this._missingTmpRsaPkey = value;
  }
  public resetMissingTmpRsaPkey() {
    this._missingTmpRsaPkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingTmpRsaPkeyInput() {
    return this._missingTmpRsaPkey;
  }

  // missing_verify_message - computed: false, optional: true, required: false
  private _missingVerifyMessage?: number; 
  public get missingVerifyMessage() {
    return this.getNumberAttribute('missing_verify_message');
  }
  public set missingVerifyMessage(value: number) {
    this._missingVerifyMessage = value;
  }
  public resetMissingVerifyMessage() {
    this._missingVerifyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingVerifyMessageInput() {
    return this._missingVerifyMessage;
  }

  // multiple_sgc_restarts - computed: false, optional: true, required: false
  private _multipleSgcRestarts?: number; 
  public get multipleSgcRestarts() {
    return this.getNumberAttribute('multiple_sgc_restarts');
  }
  public set multipleSgcRestarts(value: number) {
    this._multipleSgcRestarts = value;
  }
  public resetMultipleSgcRestarts() {
    this._multipleSgcRestarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleSgcRestartsInput() {
    return this._multipleSgcRestarts;
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

  // no_certificate_assigned - computed: false, optional: true, required: false
  private _noCertificateAssigned?: number; 
  public get noCertificateAssigned() {
    return this.getNumberAttribute('no_certificate_assigned');
  }
  public set noCertificateAssigned(value: number) {
    this._noCertificateAssigned = value;
  }
  public resetNoCertificateAssigned() {
    this._noCertificateAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCertificateAssignedInput() {
    return this._noCertificateAssigned;
  }

  // no_certificate_returned - computed: false, optional: true, required: false
  private _noCertificateReturned?: number; 
  public get noCertificateReturned() {
    return this.getNumberAttribute('no_certificate_returned');
  }
  public set noCertificateReturned(value: number) {
    this._noCertificateReturned = value;
  }
  public resetNoCertificateReturned() {
    this._noCertificateReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCertificateReturnedInput() {
    return this._noCertificateReturned;
  }

  // no_certificate_set - computed: false, optional: true, required: false
  private _noCertificateSet?: number; 
  public get noCertificateSet() {
    return this.getNumberAttribute('no_certificate_set');
  }
  public set noCertificateSet(value: number) {
    this._noCertificateSet = value;
  }
  public resetNoCertificateSet() {
    this._noCertificateSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCertificateSetInput() {
    return this._noCertificateSet;
  }

  // no_certificate_specified - computed: false, optional: true, required: false
  private _noCertificateSpecified?: number; 
  public get noCertificateSpecified() {
    return this.getNumberAttribute('no_certificate_specified');
  }
  public set noCertificateSpecified(value: number) {
    this._noCertificateSpecified = value;
  }
  public resetNoCertificateSpecified() {
    this._noCertificateSpecified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCertificateSpecifiedInput() {
    return this._noCertificateSpecified;
  }

  // no_certificates_returned - computed: false, optional: true, required: false
  private _noCertificatesReturned?: number; 
  public get noCertificatesReturned() {
    return this.getNumberAttribute('no_certificates_returned');
  }
  public set noCertificatesReturned(value: number) {
    this._noCertificatesReturned = value;
  }
  public resetNoCertificatesReturned() {
    this._noCertificatesReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCertificatesReturnedInput() {
    return this._noCertificatesReturned;
  }

  // no_cipher_list - computed: false, optional: true, required: false
  private _noCipherList?: number; 
  public get noCipherList() {
    return this.getNumberAttribute('no_cipher_list');
  }
  public set noCipherList(value: number) {
    this._noCipherList = value;
  }
  public resetNoCipherList() {
    this._noCipherList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCipherListInput() {
    return this._noCipherList;
  }

  // no_cipher_match - computed: false, optional: true, required: false
  private _noCipherMatch?: number; 
  public get noCipherMatch() {
    return this.getNumberAttribute('no_cipher_match');
  }
  public set noCipherMatch(value: number) {
    this._noCipherMatch = value;
  }
  public resetNoCipherMatch() {
    this._noCipherMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCipherMatchInput() {
    return this._noCipherMatch;
  }

  // no_ciphers_available - computed: false, optional: true, required: false
  private _noCiphersAvailable?: number; 
  public get noCiphersAvailable() {
    return this.getNumberAttribute('no_ciphers_available');
  }
  public set noCiphersAvailable(value: number) {
    this._noCiphersAvailable = value;
  }
  public resetNoCiphersAvailable() {
    this._noCiphersAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCiphersAvailableInput() {
    return this._noCiphersAvailable;
  }

  // no_ciphers_passed - computed: false, optional: true, required: false
  private _noCiphersPassed?: number; 
  public get noCiphersPassed() {
    return this.getNumberAttribute('no_ciphers_passed');
  }
  public set noCiphersPassed(value: number) {
    this._noCiphersPassed = value;
  }
  public resetNoCiphersPassed() {
    this._noCiphersPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCiphersPassedInput() {
    return this._noCiphersPassed;
  }

  // no_ciphers_specified - computed: false, optional: true, required: false
  private _noCiphersSpecified?: number; 
  public get noCiphersSpecified() {
    return this.getNumberAttribute('no_ciphers_specified');
  }
  public set noCiphersSpecified(value: number) {
    this._noCiphersSpecified = value;
  }
  public resetNoCiphersSpecified() {
    this._noCiphersSpecified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCiphersSpecifiedInput() {
    return this._noCiphersSpecified;
  }

  // no_client_cert_received - computed: false, optional: true, required: false
  private _noClientCertReceived?: number; 
  public get noClientCertReceived() {
    return this.getNumberAttribute('no_client_cert_received');
  }
  public set noClientCertReceived(value: number) {
    this._noClientCertReceived = value;
  }
  public resetNoClientCertReceived() {
    this._noClientCertReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClientCertReceivedInput() {
    return this._noClientCertReceived;
  }

  // no_compression_specified - computed: false, optional: true, required: false
  private _noCompressionSpecified?: number; 
  public get noCompressionSpecified() {
    return this.getNumberAttribute('no_compression_specified');
  }
  public set noCompressionSpecified(value: number) {
    this._noCompressionSpecified = value;
  }
  public resetNoCompressionSpecified() {
    this._noCompressionSpecified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCompressionSpecifiedInput() {
    return this._noCompressionSpecified;
  }

  // no_method_specified - computed: false, optional: true, required: false
  private _noMethodSpecified?: number; 
  public get noMethodSpecified() {
    return this.getNumberAttribute('no_method_specified');
  }
  public set noMethodSpecified(value: number) {
    this._noMethodSpecified = value;
  }
  public resetNoMethodSpecified() {
    this._noMethodSpecified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMethodSpecifiedInput() {
    return this._noMethodSpecified;
  }

  // no_private_key_assigned - computed: false, optional: true, required: false
  private _noPrivateKeyAssigned?: number; 
  public get noPrivateKeyAssigned() {
    return this.getNumberAttribute('no_private_key_assigned');
  }
  public set noPrivateKeyAssigned(value: number) {
    this._noPrivateKeyAssigned = value;
  }
  public resetNoPrivateKeyAssigned() {
    this._noPrivateKeyAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPrivateKeyAssignedInput() {
    return this._noPrivateKeyAssigned;
  }

  // no_privatekey - computed: false, optional: true, required: false
  private _noPrivatekey?: number; 
  public get noPrivatekey() {
    return this.getNumberAttribute('no_privatekey');
  }
  public set noPrivatekey(value: number) {
    this._noPrivatekey = value;
  }
  public resetNoPrivatekey() {
    this._noPrivatekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPrivatekeyInput() {
    return this._noPrivatekey;
  }

  // no_protocols_available - computed: false, optional: true, required: false
  private _noProtocolsAvailable?: number; 
  public get noProtocolsAvailable() {
    return this.getNumberAttribute('no_protocols_available');
  }
  public set noProtocolsAvailable(value: number) {
    this._noProtocolsAvailable = value;
  }
  public resetNoProtocolsAvailable() {
    this._noProtocolsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProtocolsAvailableInput() {
    return this._noProtocolsAvailable;
  }

  // no_publickey - computed: false, optional: true, required: false
  private _noPublickey?: number; 
  public get noPublickey() {
    return this.getNumberAttribute('no_publickey');
  }
  public set noPublickey(value: number) {
    this._noPublickey = value;
  }
  public resetNoPublickey() {
    this._noPublickey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPublickeyInput() {
    return this._noPublickey;
  }

  // no_required_digest - computed: false, optional: true, required: false
  private _noRequiredDigest?: number; 
  public get noRequiredDigest() {
    return this.getNumberAttribute('no_required_digest');
  }
  public set noRequiredDigest(value: number) {
    this._noRequiredDigest = value;
  }
  public resetNoRequiredDigest() {
    this._noRequiredDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRequiredDigestInput() {
    return this._noRequiredDigest;
  }

  // no_shared_cipher - computed: false, optional: true, required: false
  private _noSharedCipher?: number; 
  public get noSharedCipher() {
    return this.getNumberAttribute('no_shared_cipher');
  }
  public set noSharedCipher(value: number) {
    this._noSharedCipher = value;
  }
  public resetNoSharedCipher() {
    this._noSharedCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSharedCipherInput() {
    return this._noSharedCipher;
  }

  // no_verify_callback - computed: false, optional: true, required: false
  private _noVerifyCallback?: number; 
  public get noVerifyCallback() {
    return this.getNumberAttribute('no_verify_callback');
  }
  public set noVerifyCallback(value: number) {
    this._noVerifyCallback = value;
  }
  public resetNoVerifyCallback() {
    this._noVerifyCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noVerifyCallbackInput() {
    return this._noVerifyCallback;
  }

  // non_sslv2_initial_packet - computed: false, optional: true, required: false
  private _nonSslv2InitialPacket?: number; 
  public get nonSslv2InitialPacket() {
    return this.getNumberAttribute('non_sslv2_initial_packet');
  }
  public set nonSslv2InitialPacket(value: number) {
    this._nonSslv2InitialPacket = value;
  }
  public resetNonSslv2InitialPacket() {
    this._nonSslv2InitialPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSslv2InitialPacketInput() {
    return this._nonSslv2InitialPacket;
  }

  // null_ssl_ctx - computed: false, optional: true, required: false
  private _nullSslCtx?: number; 
  public get nullSslCtx() {
    return this.getNumberAttribute('null_ssl_ctx');
  }
  public set nullSslCtx(value: number) {
    this._nullSslCtx = value;
  }
  public resetNullSslCtx() {
    this._nullSslCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullSslCtxInput() {
    return this._nullSslCtx;
  }

  // null_ssl_method_passed - computed: false, optional: true, required: false
  private _nullSslMethodPassed?: number; 
  public get nullSslMethodPassed() {
    return this.getNumberAttribute('null_ssl_method_passed');
  }
  public set nullSslMethodPassed(value: number) {
    this._nullSslMethodPassed = value;
  }
  public resetNullSslMethodPassed() {
    this._nullSslMethodPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullSslMethodPassedInput() {
    return this._nullSslMethodPassed;
  }

  // old_session_cipher_not_returned - computed: false, optional: true, required: false
  private _oldSessionCipherNotReturned?: number; 
  public get oldSessionCipherNotReturned() {
    return this.getNumberAttribute('old_session_cipher_not_returned');
  }
  public set oldSessionCipherNotReturned(value: number) {
    this._oldSessionCipherNotReturned = value;
  }
  public resetOldSessionCipherNotReturned() {
    this._oldSessionCipherNotReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldSessionCipherNotReturnedInput() {
    return this._oldSessionCipherNotReturned;
  }

  // packet_length_too_long - computed: false, optional: true, required: false
  private _packetLengthTooLong?: number; 
  public get packetLengthTooLong() {
    return this.getNumberAttribute('packet_length_too_long');
  }
  public set packetLengthTooLong(value: number) {
    this._packetLengthTooLong = value;
  }
  public resetPacketLengthTooLong() {
    this._packetLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthTooLongInput() {
    return this._packetLengthTooLong;
  }

  // parse_tlsext - computed: false, optional: true, required: false
  private _parseTlsext?: number; 
  public get parseTlsext() {
    return this.getNumberAttribute('parse_tlsext');
  }
  public set parseTlsext(value: number) {
    this._parseTlsext = value;
  }
  public resetParseTlsext() {
    this._parseTlsext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseTlsextInput() {
    return this._parseTlsext;
  }

  // path_too_long - computed: false, optional: true, required: false
  private _pathTooLong?: number; 
  public get pathTooLong() {
    return this.getNumberAttribute('path_too_long');
  }
  public set pathTooLong(value: number) {
    this._pathTooLong = value;
  }
  public resetPathTooLong() {
    this._pathTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTooLongInput() {
    return this._pathTooLong;
  }

  // peer_did_not_return_a_certificate - computed: false, optional: true, required: false
  private _peerDidNotReturnACertificate?: number; 
  public get peerDidNotReturnACertificate() {
    return this.getNumberAttribute('peer_did_not_return_a_certificate');
  }
  public set peerDidNotReturnACertificate(value: number) {
    this._peerDidNotReturnACertificate = value;
  }
  public resetPeerDidNotReturnACertificate() {
    this._peerDidNotReturnACertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDidNotReturnACertificateInput() {
    return this._peerDidNotReturnACertificate;
  }

  // peer_error - computed: false, optional: true, required: false
  private _peerError?: number; 
  public get peerError() {
    return this.getNumberAttribute('peer_error');
  }
  public set peerError(value: number) {
    this._peerError = value;
  }
  public resetPeerError() {
    this._peerError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerErrorInput() {
    return this._peerError;
  }

  // peer_error_certificate - computed: false, optional: true, required: false
  private _peerErrorCertificate?: number; 
  public get peerErrorCertificate() {
    return this.getNumberAttribute('peer_error_certificate');
  }
  public set peerErrorCertificate(value: number) {
    this._peerErrorCertificate = value;
  }
  public resetPeerErrorCertificate() {
    this._peerErrorCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerErrorCertificateInput() {
    return this._peerErrorCertificate;
  }

  // peer_error_no_certificate - computed: false, optional: true, required: false
  private _peerErrorNoCertificate?: number; 
  public get peerErrorNoCertificate() {
    return this.getNumberAttribute('peer_error_no_certificate');
  }
  public set peerErrorNoCertificate(value: number) {
    this._peerErrorNoCertificate = value;
  }
  public resetPeerErrorNoCertificate() {
    this._peerErrorNoCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerErrorNoCertificateInput() {
    return this._peerErrorNoCertificate;
  }

  // peer_error_no_cipher - computed: false, optional: true, required: false
  private _peerErrorNoCipher?: number; 
  public get peerErrorNoCipher() {
    return this.getNumberAttribute('peer_error_no_cipher');
  }
  public set peerErrorNoCipher(value: number) {
    this._peerErrorNoCipher = value;
  }
  public resetPeerErrorNoCipher() {
    this._peerErrorNoCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerErrorNoCipherInput() {
    return this._peerErrorNoCipher;
  }

  // peer_error_unsupported_certificate_type - computed: false, optional: true, required: false
  private _peerErrorUnsupportedCertificateType?: number; 
  public get peerErrorUnsupportedCertificateType() {
    return this.getNumberAttribute('peer_error_unsupported_certificate_type');
  }
  public set peerErrorUnsupportedCertificateType(value: number) {
    this._peerErrorUnsupportedCertificateType = value;
  }
  public resetPeerErrorUnsupportedCertificateType() {
    this._peerErrorUnsupportedCertificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerErrorUnsupportedCertificateTypeInput() {
    return this._peerErrorUnsupportedCertificateType;
  }

  // pre_mac_length_too_long - computed: false, optional: true, required: false
  private _preMacLengthTooLong?: number; 
  public get preMacLengthTooLong() {
    return this.getNumberAttribute('pre_mac_length_too_long');
  }
  public set preMacLengthTooLong(value: number) {
    this._preMacLengthTooLong = value;
  }
  public resetPreMacLengthTooLong() {
    this._preMacLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preMacLengthTooLongInput() {
    return this._preMacLengthTooLong;
  }

  // problems_mapping_cipher_functions - computed: false, optional: true, required: false
  private _problemsMappingCipherFunctions?: number; 
  public get problemsMappingCipherFunctions() {
    return this.getNumberAttribute('problems_mapping_cipher_functions');
  }
  public set problemsMappingCipherFunctions(value: number) {
    this._problemsMappingCipherFunctions = value;
  }
  public resetProblemsMappingCipherFunctions() {
    this._problemsMappingCipherFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get problemsMappingCipherFunctionsInput() {
    return this._problemsMappingCipherFunctions;
  }

  // protocol_is_shutdown - computed: false, optional: true, required: false
  private _protocolIsShutdown?: number; 
  public get protocolIsShutdown() {
    return this.getNumberAttribute('protocol_is_shutdown');
  }
  public set protocolIsShutdown(value: number) {
    this._protocolIsShutdown = value;
  }
  public resetProtocolIsShutdown() {
    this._protocolIsShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIsShutdownInput() {
    return this._protocolIsShutdown;
  }

  // public_key_encrypt_error - computed: false, optional: true, required: false
  private _publicKeyEncryptError?: number; 
  public get publicKeyEncryptError() {
    return this.getNumberAttribute('public_key_encrypt_error');
  }
  public set publicKeyEncryptError(value: number) {
    this._publicKeyEncryptError = value;
  }
  public resetPublicKeyEncryptError() {
    this._publicKeyEncryptError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyEncryptErrorInput() {
    return this._publicKeyEncryptError;
  }

  // public_key_is_not_rsa - computed: false, optional: true, required: false
  private _publicKeyIsNotRsa?: number; 
  public get publicKeyIsNotRsa() {
    return this.getNumberAttribute('public_key_is_not_rsa');
  }
  public set publicKeyIsNotRsa(value: number) {
    this._publicKeyIsNotRsa = value;
  }
  public resetPublicKeyIsNotRsa() {
    this._publicKeyIsNotRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyIsNotRsaInput() {
    return this._publicKeyIsNotRsa;
  }

  // public_key_not_rsa - computed: false, optional: true, required: false
  private _publicKeyNotRsa?: number; 
  public get publicKeyNotRsa() {
    return this.getNumberAttribute('public_key_not_rsa');
  }
  public set publicKeyNotRsa(value: number) {
    this._publicKeyNotRsa = value;
  }
  public resetPublicKeyNotRsa() {
    this._publicKeyNotRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyNotRsaInput() {
    return this._publicKeyNotRsa;
  }

  // read_bio_not_set - computed: false, optional: true, required: false
  private _readBioNotSet?: number; 
  public get readBioNotSet() {
    return this.getNumberAttribute('read_bio_not_set');
  }
  public set readBioNotSet(value: number) {
    this._readBioNotSet = value;
  }
  public resetReadBioNotSet() {
    this._readBioNotSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBioNotSetInput() {
    return this._readBioNotSet;
  }

  // read_wrong_packet_type - computed: false, optional: true, required: false
  private _readWrongPacketType?: number; 
  public get readWrongPacketType() {
    return this.getNumberAttribute('read_wrong_packet_type');
  }
  public set readWrongPacketType(value: number) {
    this._readWrongPacketType = value;
  }
  public resetReadWrongPacketType() {
    this._readWrongPacketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWrongPacketTypeInput() {
    return this._readWrongPacketType;
  }

  // record_length_mismatch - computed: false, optional: true, required: false
  private _recordLengthMismatch?: number; 
  public get recordLengthMismatch() {
    return this.getNumberAttribute('record_length_mismatch');
  }
  public set recordLengthMismatch(value: number) {
    this._recordLengthMismatch = value;
  }
  public resetRecordLengthMismatch() {
    this._recordLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordLengthMismatchInput() {
    return this._recordLengthMismatch;
  }

  // record_too_large - computed: false, optional: true, required: false
  private _recordTooLarge?: number; 
  public get recordTooLarge() {
    return this.getNumberAttribute('record_too_large');
  }
  public set recordTooLarge(value: number) {
    this._recordTooLarge = value;
  }
  public resetRecordTooLarge() {
    this._recordTooLarge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTooLargeInput() {
    return this._recordTooLarge;
  }

  // record_too_small - computed: false, optional: true, required: false
  private _recordTooSmall?: number; 
  public get recordTooSmall() {
    return this.getNumberAttribute('record_too_small');
  }
  public set recordTooSmall(value: number) {
    this._recordTooSmall = value;
  }
  public resetRecordTooSmall() {
    this._recordTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTooSmallInput() {
    return this._recordTooSmall;
  }

  // required_cipher_missing - computed: false, optional: true, required: false
  private _requiredCipherMissing?: number; 
  public get requiredCipherMissing() {
    return this.getNumberAttribute('required_cipher_missing');
  }
  public set requiredCipherMissing(value: number) {
    this._requiredCipherMissing = value;
  }
  public resetRequiredCipherMissing() {
    this._requiredCipherMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCipherMissingInput() {
    return this._requiredCipherMissing;
  }

  // reuse_cert_length_not_zero - computed: false, optional: true, required: false
  private _reuseCertLengthNotZero?: number; 
  public get reuseCertLengthNotZero() {
    return this.getNumberAttribute('reuse_cert_length_not_zero');
  }
  public set reuseCertLengthNotZero(value: number) {
    this._reuseCertLengthNotZero = value;
  }
  public resetReuseCertLengthNotZero() {
    this._reuseCertLengthNotZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseCertLengthNotZeroInput() {
    return this._reuseCertLengthNotZero;
  }

  // reuse_cert_type_not_zero - computed: false, optional: true, required: false
  private _reuseCertTypeNotZero?: number; 
  public get reuseCertTypeNotZero() {
    return this.getNumberAttribute('reuse_cert_type_not_zero');
  }
  public set reuseCertTypeNotZero(value: number) {
    this._reuseCertTypeNotZero = value;
  }
  public resetReuseCertTypeNotZero() {
    this._reuseCertTypeNotZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseCertTypeNotZeroInput() {
    return this._reuseCertTypeNotZero;
  }

  // reuse_cipher_list_not_zero - computed: false, optional: true, required: false
  private _reuseCipherListNotZero?: number; 
  public get reuseCipherListNotZero() {
    return this.getNumberAttribute('reuse_cipher_list_not_zero');
  }
  public set reuseCipherListNotZero(value: number) {
    this._reuseCipherListNotZero = value;
  }
  public resetReuseCipherListNotZero() {
    this._reuseCipherListNotZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseCipherListNotZeroInput() {
    return this._reuseCipherListNotZero;
  }

  // scsv_received_when_renegotiating - computed: false, optional: true, required: false
  private _scsvReceivedWhenRenegotiating?: number; 
  public get scsvReceivedWhenRenegotiating() {
    return this.getNumberAttribute('scsv_received_when_renegotiating');
  }
  public set scsvReceivedWhenRenegotiating(value: number) {
    this._scsvReceivedWhenRenegotiating = value;
  }
  public resetScsvReceivedWhenRenegotiating() {
    this._scsvReceivedWhenRenegotiating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsvReceivedWhenRenegotiatingInput() {
    return this._scsvReceivedWhenRenegotiating;
  }

  // serverhello_tlsext - computed: false, optional: true, required: false
  private _serverhelloTlsext?: number; 
  public get serverhelloTlsext() {
    return this.getNumberAttribute('serverhello_tlsext');
  }
  public set serverhelloTlsext(value: number) {
    this._serverhelloTlsext = value;
  }
  public resetServerhelloTlsext() {
    this._serverhelloTlsext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverhelloTlsextInput() {
    return this._serverhelloTlsext;
  }

  // session_id_context_uninitialized - computed: false, optional: true, required: false
  private _sessionIdContextUninitialized?: number; 
  public get sessionIdContextUninitialized() {
    return this.getNumberAttribute('session_id_context_uninitialized');
  }
  public set sessionIdContextUninitialized(value: number) {
    this._sessionIdContextUninitialized = value;
  }
  public resetSessionIdContextUninitialized() {
    this._sessionIdContextUninitialized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdContextUninitializedInput() {
    return this._sessionIdContextUninitialized;
  }

  // short_read - computed: false, optional: true, required: false
  private _shortRead?: number; 
  public get shortRead() {
    return this.getNumberAttribute('short_read');
  }
  public set shortRead(value: number) {
    this._shortRead = value;
  }
  public resetShortRead() {
    this._shortRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortReadInput() {
    return this._shortRead;
  }

  // signature_for_non_signing_certificate - computed: false, optional: true, required: false
  private _signatureForNonSigningCertificate?: number; 
  public get signatureForNonSigningCertificate() {
    return this.getNumberAttribute('signature_for_non_signing_certificate');
  }
  public set signatureForNonSigningCertificate(value: number) {
    this._signatureForNonSigningCertificate = value;
  }
  public resetSignatureForNonSigningCertificate() {
    this._signatureForNonSigningCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureForNonSigningCertificateInput() {
    return this._signatureForNonSigningCertificate;
  }

  // ssl23_doing_session_id_reuse - computed: false, optional: true, required: false
  private _ssl23DoingSessionIdReuse?: number; 
  public get ssl23DoingSessionIdReuse() {
    return this.getNumberAttribute('ssl23_doing_session_id_reuse');
  }
  public set ssl23DoingSessionIdReuse(value: number) {
    this._ssl23DoingSessionIdReuse = value;
  }
  public resetSsl23DoingSessionIdReuse() {
    this._ssl23DoingSessionIdReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl23DoingSessionIdReuseInput() {
    return this._ssl23DoingSessionIdReuse;
  }

  // ssl2_connection_id_too_long - computed: false, optional: true, required: false
  private _ssl2ConnectionIdTooLong?: number; 
  public get ssl2ConnectionIdTooLong() {
    return this.getNumberAttribute('ssl2_connection_id_too_long');
  }
  public set ssl2ConnectionIdTooLong(value: number) {
    this._ssl2ConnectionIdTooLong = value;
  }
  public resetSsl2ConnectionIdTooLong() {
    this._ssl2ConnectionIdTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl2ConnectionIdTooLongInput() {
    return this._ssl2ConnectionIdTooLong;
  }

  // ssl3_ext_invalid_servername - computed: false, optional: true, required: false
  private _ssl3ExtInvalidServername?: number; 
  public get ssl3ExtInvalidServername() {
    return this.getNumberAttribute('ssl3_ext_invalid_servername');
  }
  public set ssl3ExtInvalidServername(value: number) {
    this._ssl3ExtInvalidServername = value;
  }
  public resetSsl3ExtInvalidServername() {
    this._ssl3ExtInvalidServername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3ExtInvalidServernameInput() {
    return this._ssl3ExtInvalidServername;
  }

  // ssl3_ext_invalid_servername_type - computed: false, optional: true, required: false
  private _ssl3ExtInvalidServernameType?: number; 
  public get ssl3ExtInvalidServernameType() {
    return this.getNumberAttribute('ssl3_ext_invalid_servername_type');
  }
  public set ssl3ExtInvalidServernameType(value: number) {
    this._ssl3ExtInvalidServernameType = value;
  }
  public resetSsl3ExtInvalidServernameType() {
    this._ssl3ExtInvalidServernameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3ExtInvalidServernameTypeInput() {
    return this._ssl3ExtInvalidServernameType;
  }

  // ssl3_session_id_too_long - computed: false, optional: true, required: false
  private _ssl3SessionIdTooLong?: number; 
  public get ssl3SessionIdTooLong() {
    return this.getNumberAttribute('ssl3_session_id_too_long');
  }
  public set ssl3SessionIdTooLong(value: number) {
    this._ssl3SessionIdTooLong = value;
  }
  public resetSsl3SessionIdTooLong() {
    this._ssl3SessionIdTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3SessionIdTooLongInput() {
    return this._ssl3SessionIdTooLong;
  }

  // ssl3_session_id_too_short - computed: false, optional: true, required: false
  private _ssl3SessionIdTooShort?: number; 
  public get ssl3SessionIdTooShort() {
    return this.getNumberAttribute('ssl3_session_id_too_short');
  }
  public set ssl3SessionIdTooShort(value: number) {
    this._ssl3SessionIdTooShort = value;
  }
  public resetSsl3SessionIdTooShort() {
    this._ssl3SessionIdTooShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3SessionIdTooShortInput() {
    return this._ssl3SessionIdTooShort;
  }

  // ssl_ctx_has_no_default_ssl_version - computed: false, optional: true, required: false
  private _sslCtxHasNoDefaultSslVersion?: number; 
  public get sslCtxHasNoDefaultSslVersion() {
    return this.getNumberAttribute('ssl_ctx_has_no_default_ssl_version');
  }
  public set sslCtxHasNoDefaultSslVersion(value: number) {
    this._sslCtxHasNoDefaultSslVersion = value;
  }
  public resetSslCtxHasNoDefaultSslVersion() {
    this._sslCtxHasNoDefaultSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCtxHasNoDefaultSslVersionInput() {
    return this._sslCtxHasNoDefaultSslVersion;
  }

  // ssl_handshake_failure - computed: false, optional: true, required: false
  private _sslHandshakeFailure?: number; 
  public get sslHandshakeFailure() {
    return this.getNumberAttribute('ssl_handshake_failure');
  }
  public set sslHandshakeFailure(value: number) {
    this._sslHandshakeFailure = value;
  }
  public resetSslHandshakeFailure() {
    this._sslHandshakeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHandshakeFailureInput() {
    return this._sslHandshakeFailure;
  }

  // ssl_library_has_no_ciphers - computed: false, optional: true, required: false
  private _sslLibraryHasNoCiphers?: number; 
  public get sslLibraryHasNoCiphers() {
    return this.getNumberAttribute('ssl_library_has_no_ciphers');
  }
  public set sslLibraryHasNoCiphers(value: number) {
    this._sslLibraryHasNoCiphers = value;
  }
  public resetSslLibraryHasNoCiphers() {
    this._sslLibraryHasNoCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslLibraryHasNoCiphersInput() {
    return this._sslLibraryHasNoCiphers;
  }

  // ssl_session_id_callback_failed - computed: false, optional: true, required: false
  private _sslSessionIdCallbackFailed?: number; 
  public get sslSessionIdCallbackFailed() {
    return this.getNumberAttribute('ssl_session_id_callback_failed');
  }
  public set sslSessionIdCallbackFailed(value: number) {
    this._sslSessionIdCallbackFailed = value;
  }
  public resetSslSessionIdCallbackFailed() {
    this._sslSessionIdCallbackFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdCallbackFailedInput() {
    return this._sslSessionIdCallbackFailed;
  }

  // ssl_session_id_conflict - computed: false, optional: true, required: false
  private _sslSessionIdConflict?: number; 
  public get sslSessionIdConflict() {
    return this.getNumberAttribute('ssl_session_id_conflict');
  }
  public set sslSessionIdConflict(value: number) {
    this._sslSessionIdConflict = value;
  }
  public resetSslSessionIdConflict() {
    this._sslSessionIdConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdConflictInput() {
    return this._sslSessionIdConflict;
  }

  // ssl_session_id_context_too_long - computed: false, optional: true, required: false
  private _sslSessionIdContextTooLong?: number; 
  public get sslSessionIdContextTooLong() {
    return this.getNumberAttribute('ssl_session_id_context_too_long');
  }
  public set sslSessionIdContextTooLong(value: number) {
    this._sslSessionIdContextTooLong = value;
  }
  public resetSslSessionIdContextTooLong() {
    this._sslSessionIdContextTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdContextTooLongInput() {
    return this._sslSessionIdContextTooLong;
  }

  // ssl_session_id_has_bad_length - computed: false, optional: true, required: false
  private _sslSessionIdHasBadLength?: number; 
  public get sslSessionIdHasBadLength() {
    return this.getNumberAttribute('ssl_session_id_has_bad_length');
  }
  public set sslSessionIdHasBadLength(value: number) {
    this._sslSessionIdHasBadLength = value;
  }
  public resetSslSessionIdHasBadLength() {
    this._sslSessionIdHasBadLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdHasBadLengthInput() {
    return this._sslSessionIdHasBadLength;
  }

  // ssl_session_id_is_different - computed: false, optional: true, required: false
  private _sslSessionIdIsDifferent?: number; 
  public get sslSessionIdIsDifferent() {
    return this.getNumberAttribute('ssl_session_id_is_different');
  }
  public set sslSessionIdIsDifferent(value: number) {
    this._sslSessionIdIsDifferent = value;
  }
  public resetSslSessionIdIsDifferent() {
    this._sslSessionIdIsDifferent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdIsDifferentInput() {
    return this._sslSessionIdIsDifferent;
  }

  // sslv3_alert_bad_certificate - computed: false, optional: true, required: false
  private _sslv3AlertBadCertificate?: number; 
  public get sslv3AlertBadCertificate() {
    return this.getNumberAttribute('sslv3_alert_bad_certificate');
  }
  public set sslv3AlertBadCertificate(value: number) {
    this._sslv3AlertBadCertificate = value;
  }
  public resetSslv3AlertBadCertificate() {
    this._sslv3AlertBadCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertBadCertificateInput() {
    return this._sslv3AlertBadCertificate;
  }

  // sslv3_alert_bad_record_mac - computed: false, optional: true, required: false
  private _sslv3AlertBadRecordMac?: number; 
  public get sslv3AlertBadRecordMac() {
    return this.getNumberAttribute('sslv3_alert_bad_record_mac');
  }
  public set sslv3AlertBadRecordMac(value: number) {
    this._sslv3AlertBadRecordMac = value;
  }
  public resetSslv3AlertBadRecordMac() {
    this._sslv3AlertBadRecordMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertBadRecordMacInput() {
    return this._sslv3AlertBadRecordMac;
  }

  // sslv3_alert_certificate_expired - computed: false, optional: true, required: false
  private _sslv3AlertCertificateExpired?: number; 
  public get sslv3AlertCertificateExpired() {
    return this.getNumberAttribute('sslv3_alert_certificate_expired');
  }
  public set sslv3AlertCertificateExpired(value: number) {
    this._sslv3AlertCertificateExpired = value;
  }
  public resetSslv3AlertCertificateExpired() {
    this._sslv3AlertCertificateExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertCertificateExpiredInput() {
    return this._sslv3AlertCertificateExpired;
  }

  // sslv3_alert_certificate_revoked - computed: false, optional: true, required: false
  private _sslv3AlertCertificateRevoked?: number; 
  public get sslv3AlertCertificateRevoked() {
    return this.getNumberAttribute('sslv3_alert_certificate_revoked');
  }
  public set sslv3AlertCertificateRevoked(value: number) {
    this._sslv3AlertCertificateRevoked = value;
  }
  public resetSslv3AlertCertificateRevoked() {
    this._sslv3AlertCertificateRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertCertificateRevokedInput() {
    return this._sslv3AlertCertificateRevoked;
  }

  // sslv3_alert_certificate_unknown - computed: false, optional: true, required: false
  private _sslv3AlertCertificateUnknown?: number; 
  public get sslv3AlertCertificateUnknown() {
    return this.getNumberAttribute('sslv3_alert_certificate_unknown');
  }
  public set sslv3AlertCertificateUnknown(value: number) {
    this._sslv3AlertCertificateUnknown = value;
  }
  public resetSslv3AlertCertificateUnknown() {
    this._sslv3AlertCertificateUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertCertificateUnknownInput() {
    return this._sslv3AlertCertificateUnknown;
  }

  // sslv3_alert_decompression_failure - computed: false, optional: true, required: false
  private _sslv3AlertDecompressionFailure?: number; 
  public get sslv3AlertDecompressionFailure() {
    return this.getNumberAttribute('sslv3_alert_decompression_failure');
  }
  public set sslv3AlertDecompressionFailure(value: number) {
    this._sslv3AlertDecompressionFailure = value;
  }
  public resetSslv3AlertDecompressionFailure() {
    this._sslv3AlertDecompressionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertDecompressionFailureInput() {
    return this._sslv3AlertDecompressionFailure;
  }

  // sslv3_alert_handshake_failure - computed: false, optional: true, required: false
  private _sslv3AlertHandshakeFailure?: number; 
  public get sslv3AlertHandshakeFailure() {
    return this.getNumberAttribute('sslv3_alert_handshake_failure');
  }
  public set sslv3AlertHandshakeFailure(value: number) {
    this._sslv3AlertHandshakeFailure = value;
  }
  public resetSslv3AlertHandshakeFailure() {
    this._sslv3AlertHandshakeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertHandshakeFailureInput() {
    return this._sslv3AlertHandshakeFailure;
  }

  // sslv3_alert_illegal_parameter - computed: false, optional: true, required: false
  private _sslv3AlertIllegalParameter?: number; 
  public get sslv3AlertIllegalParameter() {
    return this.getNumberAttribute('sslv3_alert_illegal_parameter');
  }
  public set sslv3AlertIllegalParameter(value: number) {
    this._sslv3AlertIllegalParameter = value;
  }
  public resetSslv3AlertIllegalParameter() {
    this._sslv3AlertIllegalParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertIllegalParameterInput() {
    return this._sslv3AlertIllegalParameter;
  }

  // sslv3_alert_no_certificate - computed: false, optional: true, required: false
  private _sslv3AlertNoCertificate?: number; 
  public get sslv3AlertNoCertificate() {
    return this.getNumberAttribute('sslv3_alert_no_certificate');
  }
  public set sslv3AlertNoCertificate(value: number) {
    this._sslv3AlertNoCertificate = value;
  }
  public resetSslv3AlertNoCertificate() {
    this._sslv3AlertNoCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertNoCertificateInput() {
    return this._sslv3AlertNoCertificate;
  }

  // sslv3_alert_peer_error_cert - computed: false, optional: true, required: false
  private _sslv3AlertPeerErrorCert?: number; 
  public get sslv3AlertPeerErrorCert() {
    return this.getNumberAttribute('sslv3_alert_peer_error_cert');
  }
  public set sslv3AlertPeerErrorCert(value: number) {
    this._sslv3AlertPeerErrorCert = value;
  }
  public resetSslv3AlertPeerErrorCert() {
    this._sslv3AlertPeerErrorCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertPeerErrorCertInput() {
    return this._sslv3AlertPeerErrorCert;
  }

  // sslv3_alert_peer_error_no_cert - computed: false, optional: true, required: false
  private _sslv3AlertPeerErrorNoCert?: number; 
  public get sslv3AlertPeerErrorNoCert() {
    return this.getNumberAttribute('sslv3_alert_peer_error_no_cert');
  }
  public set sslv3AlertPeerErrorNoCert(value: number) {
    this._sslv3AlertPeerErrorNoCert = value;
  }
  public resetSslv3AlertPeerErrorNoCert() {
    this._sslv3AlertPeerErrorNoCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertPeerErrorNoCertInput() {
    return this._sslv3AlertPeerErrorNoCert;
  }

  // sslv3_alert_peer_error_no_cipher - computed: false, optional: true, required: false
  private _sslv3AlertPeerErrorNoCipher?: number; 
  public get sslv3AlertPeerErrorNoCipher() {
    return this.getNumberAttribute('sslv3_alert_peer_error_no_cipher');
  }
  public set sslv3AlertPeerErrorNoCipher(value: number) {
    this._sslv3AlertPeerErrorNoCipher = value;
  }
  public resetSslv3AlertPeerErrorNoCipher() {
    this._sslv3AlertPeerErrorNoCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertPeerErrorNoCipherInput() {
    return this._sslv3AlertPeerErrorNoCipher;
  }

  // sslv3_alert_peer_error_unsupp_cert_type - computed: false, optional: true, required: false
  private _sslv3AlertPeerErrorUnsuppCertType?: number; 
  public get sslv3AlertPeerErrorUnsuppCertType() {
    return this.getNumberAttribute('sslv3_alert_peer_error_unsupp_cert_type');
  }
  public set sslv3AlertPeerErrorUnsuppCertType(value: number) {
    this._sslv3AlertPeerErrorUnsuppCertType = value;
  }
  public resetSslv3AlertPeerErrorUnsuppCertType() {
    this._sslv3AlertPeerErrorUnsuppCertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertPeerErrorUnsuppCertTypeInput() {
    return this._sslv3AlertPeerErrorUnsuppCertType;
  }

  // sslv3_alert_unexpected_msg - computed: false, optional: true, required: false
  private _sslv3AlertUnexpectedMsg?: number; 
  public get sslv3AlertUnexpectedMsg() {
    return this.getNumberAttribute('sslv3_alert_unexpected_msg');
  }
  public set sslv3AlertUnexpectedMsg(value: number) {
    this._sslv3AlertUnexpectedMsg = value;
  }
  public resetSslv3AlertUnexpectedMsg() {
    this._sslv3AlertUnexpectedMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertUnexpectedMsgInput() {
    return this._sslv3AlertUnexpectedMsg;
  }

  // sslv3_alert_unknown_remote_err_type - computed: false, optional: true, required: false
  private _sslv3AlertUnknownRemoteErrType?: number; 
  public get sslv3AlertUnknownRemoteErrType() {
    return this.getNumberAttribute('sslv3_alert_unknown_remote_err_type');
  }
  public set sslv3AlertUnknownRemoteErrType(value: number) {
    this._sslv3AlertUnknownRemoteErrType = value;
  }
  public resetSslv3AlertUnknownRemoteErrType() {
    this._sslv3AlertUnknownRemoteErrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertUnknownRemoteErrTypeInput() {
    return this._sslv3AlertUnknownRemoteErrType;
  }

  // sslv3_alert_unspported_cert - computed: false, optional: true, required: false
  private _sslv3AlertUnspportedCert?: number; 
  public get sslv3AlertUnspportedCert() {
    return this.getNumberAttribute('sslv3_alert_unspported_cert');
  }
  public set sslv3AlertUnspportedCert(value: number) {
    this._sslv3AlertUnspportedCert = value;
  }
  public resetSslv3AlertUnspportedCert() {
    this._sslv3AlertUnspportedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertUnspportedCertInput() {
    return this._sslv3AlertUnspportedCert;
  }

  // tls_client_cert_req_with_anon_cipher - computed: false, optional: true, required: false
  private _tlsClientCertReqWithAnonCipher?: number; 
  public get tlsClientCertReqWithAnonCipher() {
    return this.getNumberAttribute('tls_client_cert_req_with_anon_cipher');
  }
  public set tlsClientCertReqWithAnonCipher(value: number) {
    this._tlsClientCertReqWithAnonCipher = value;
  }
  public resetTlsClientCertReqWithAnonCipher() {
    this._tlsClientCertReqWithAnonCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertReqWithAnonCipherInput() {
    return this._tlsClientCertReqWithAnonCipher;
  }

  // tls_invalid_ecpointformat_list - computed: false, optional: true, required: false
  private _tlsInvalidEcpointformatList?: number; 
  public get tlsInvalidEcpointformatList() {
    return this.getNumberAttribute('tls_invalid_ecpointformat_list');
  }
  public set tlsInvalidEcpointformatList(value: number) {
    this._tlsInvalidEcpointformatList = value;
  }
  public resetTlsInvalidEcpointformatList() {
    this._tlsInvalidEcpointformatList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInvalidEcpointformatListInput() {
    return this._tlsInvalidEcpointformatList;
  }

  // tls_peer_did_not_respond_with_cert_list - computed: false, optional: true, required: false
  private _tlsPeerDidNotRespondWithCertList?: number; 
  public get tlsPeerDidNotRespondWithCertList() {
    return this.getNumberAttribute('tls_peer_did_not_respond_with_cert_list');
  }
  public set tlsPeerDidNotRespondWithCertList(value: number) {
    this._tlsPeerDidNotRespondWithCertList = value;
  }
  public resetTlsPeerDidNotRespondWithCertList() {
    this._tlsPeerDidNotRespondWithCertList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPeerDidNotRespondWithCertListInput() {
    return this._tlsPeerDidNotRespondWithCertList;
  }

  // tls_rsa_encrypted_value_length_is_wrong - computed: false, optional: true, required: false
  private _tlsRsaEncryptedValueLengthIsWrong?: number; 
  public get tlsRsaEncryptedValueLengthIsWrong() {
    return this.getNumberAttribute('tls_rsa_encrypted_value_length_is_wrong');
  }
  public set tlsRsaEncryptedValueLengthIsWrong(value: number) {
    this._tlsRsaEncryptedValueLengthIsWrong = value;
  }
  public resetTlsRsaEncryptedValueLengthIsWrong() {
    this._tlsRsaEncryptedValueLengthIsWrong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaEncryptedValueLengthIsWrongInput() {
    return this._tlsRsaEncryptedValueLengthIsWrong;
  }

  // tlsv1_alert_access_denied - computed: false, optional: true, required: false
  private _tlsv1AlertAccessDenied?: number; 
  public get tlsv1AlertAccessDenied() {
    return this.getNumberAttribute('tlsv1_alert_access_denied');
  }
  public set tlsv1AlertAccessDenied(value: number) {
    this._tlsv1AlertAccessDenied = value;
  }
  public resetTlsv1AlertAccessDenied() {
    this._tlsv1AlertAccessDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertAccessDeniedInput() {
    return this._tlsv1AlertAccessDenied;
  }

  // tlsv1_alert_decode_error - computed: false, optional: true, required: false
  private _tlsv1AlertDecodeError?: number; 
  public get tlsv1AlertDecodeError() {
    return this.getNumberAttribute('tlsv1_alert_decode_error');
  }
  public set tlsv1AlertDecodeError(value: number) {
    this._tlsv1AlertDecodeError = value;
  }
  public resetTlsv1AlertDecodeError() {
    this._tlsv1AlertDecodeError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertDecodeErrorInput() {
    return this._tlsv1AlertDecodeError;
  }

  // tlsv1_alert_decrypt_error - computed: false, optional: true, required: false
  private _tlsv1AlertDecryptError?: number; 
  public get tlsv1AlertDecryptError() {
    return this.getNumberAttribute('tlsv1_alert_decrypt_error');
  }
  public set tlsv1AlertDecryptError(value: number) {
    this._tlsv1AlertDecryptError = value;
  }
  public resetTlsv1AlertDecryptError() {
    this._tlsv1AlertDecryptError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertDecryptErrorInput() {
    return this._tlsv1AlertDecryptError;
  }

  // tlsv1_alert_decryption_failed - computed: false, optional: true, required: false
  private _tlsv1AlertDecryptionFailed?: number; 
  public get tlsv1AlertDecryptionFailed() {
    return this.getNumberAttribute('tlsv1_alert_decryption_failed');
  }
  public set tlsv1AlertDecryptionFailed(value: number) {
    this._tlsv1AlertDecryptionFailed = value;
  }
  public resetTlsv1AlertDecryptionFailed() {
    this._tlsv1AlertDecryptionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertDecryptionFailedInput() {
    return this._tlsv1AlertDecryptionFailed;
  }

  // tlsv1_alert_export_restriction - computed: false, optional: true, required: false
  private _tlsv1AlertExportRestriction?: number; 
  public get tlsv1AlertExportRestriction() {
    return this.getNumberAttribute('tlsv1_alert_export_restriction');
  }
  public set tlsv1AlertExportRestriction(value: number) {
    this._tlsv1AlertExportRestriction = value;
  }
  public resetTlsv1AlertExportRestriction() {
    this._tlsv1AlertExportRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertExportRestrictionInput() {
    return this._tlsv1AlertExportRestriction;
  }

  // tlsv1_alert_insufficient_security - computed: false, optional: true, required: false
  private _tlsv1AlertInsufficientSecurity?: number; 
  public get tlsv1AlertInsufficientSecurity() {
    return this.getNumberAttribute('tlsv1_alert_insufficient_security');
  }
  public set tlsv1AlertInsufficientSecurity(value: number) {
    this._tlsv1AlertInsufficientSecurity = value;
  }
  public resetTlsv1AlertInsufficientSecurity() {
    this._tlsv1AlertInsufficientSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertInsufficientSecurityInput() {
    return this._tlsv1AlertInsufficientSecurity;
  }

  // tlsv1_alert_internal_error - computed: false, optional: true, required: false
  private _tlsv1AlertInternalError?: number; 
  public get tlsv1AlertInternalError() {
    return this.getNumberAttribute('tlsv1_alert_internal_error');
  }
  public set tlsv1AlertInternalError(value: number) {
    this._tlsv1AlertInternalError = value;
  }
  public resetTlsv1AlertInternalError() {
    this._tlsv1AlertInternalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertInternalErrorInput() {
    return this._tlsv1AlertInternalError;
  }

  // tlsv1_alert_no_renegotiation - computed: false, optional: true, required: false
  private _tlsv1AlertNoRenegotiation?: number; 
  public get tlsv1AlertNoRenegotiation() {
    return this.getNumberAttribute('tlsv1_alert_no_renegotiation');
  }
  public set tlsv1AlertNoRenegotiation(value: number) {
    this._tlsv1AlertNoRenegotiation = value;
  }
  public resetTlsv1AlertNoRenegotiation() {
    this._tlsv1AlertNoRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertNoRenegotiationInput() {
    return this._tlsv1AlertNoRenegotiation;
  }

  // tlsv1_alert_protocol_version - computed: false, optional: true, required: false
  private _tlsv1AlertProtocolVersion?: number; 
  public get tlsv1AlertProtocolVersion() {
    return this.getNumberAttribute('tlsv1_alert_protocol_version');
  }
  public set tlsv1AlertProtocolVersion(value: number) {
    this._tlsv1AlertProtocolVersion = value;
  }
  public resetTlsv1AlertProtocolVersion() {
    this._tlsv1AlertProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertProtocolVersionInput() {
    return this._tlsv1AlertProtocolVersion;
  }

  // tlsv1_alert_record_overflow - computed: false, optional: true, required: false
  private _tlsv1AlertRecordOverflow?: number; 
  public get tlsv1AlertRecordOverflow() {
    return this.getNumberAttribute('tlsv1_alert_record_overflow');
  }
  public set tlsv1AlertRecordOverflow(value: number) {
    this._tlsv1AlertRecordOverflow = value;
  }
  public resetTlsv1AlertRecordOverflow() {
    this._tlsv1AlertRecordOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertRecordOverflowInput() {
    return this._tlsv1AlertRecordOverflow;
  }

  // tlsv1_alert_unknown_ca - computed: false, optional: true, required: false
  private _tlsv1AlertUnknownCa?: number; 
  public get tlsv1AlertUnknownCa() {
    return this.getNumberAttribute('tlsv1_alert_unknown_ca');
  }
  public set tlsv1AlertUnknownCa(value: number) {
    this._tlsv1AlertUnknownCa = value;
  }
  public resetTlsv1AlertUnknownCa() {
    this._tlsv1AlertUnknownCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertUnknownCaInput() {
    return this._tlsv1AlertUnknownCa;
  }

  // tlsv1_alert_user_cancelled - computed: false, optional: true, required: false
  private _tlsv1AlertUserCancelled?: number; 
  public get tlsv1AlertUserCancelled() {
    return this.getNumberAttribute('tlsv1_alert_user_cancelled');
  }
  public set tlsv1AlertUserCancelled(value: number) {
    this._tlsv1AlertUserCancelled = value;
  }
  public resetTlsv1AlertUserCancelled() {
    this._tlsv1AlertUserCancelled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertUserCancelledInput() {
    return this._tlsv1AlertUserCancelled;
  }

  // tried_to_use_unsupported_cipher - computed: false, optional: true, required: false
  private _triedToUseUnsupportedCipher?: number; 
  public get triedToUseUnsupportedCipher() {
    return this.getNumberAttribute('tried_to_use_unsupported_cipher');
  }
  public set triedToUseUnsupportedCipher(value: number) {
    this._triedToUseUnsupportedCipher = value;
  }
  public resetTriedToUseUnsupportedCipher() {
    this._triedToUseUnsupportedCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triedToUseUnsupportedCipherInput() {
    return this._triedToUseUnsupportedCipher;
  }

  // unable_to_decode_dh_certs - computed: false, optional: true, required: false
  private _unableToDecodeDhCerts?: number; 
  public get unableToDecodeDhCerts() {
    return this.getNumberAttribute('unable_to_decode_dh_certs');
  }
  public set unableToDecodeDhCerts(value: number) {
    this._unableToDecodeDhCerts = value;
  }
  public resetUnableToDecodeDhCerts() {
    this._unableToDecodeDhCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToDecodeDhCertsInput() {
    return this._unableToDecodeDhCerts;
  }

  // unable_to_extract_public_key - computed: false, optional: true, required: false
  private _unableToExtractPublicKey?: number; 
  public get unableToExtractPublicKey() {
    return this.getNumberAttribute('unable_to_extract_public_key');
  }
  public set unableToExtractPublicKey(value: number) {
    this._unableToExtractPublicKey = value;
  }
  public resetUnableToExtractPublicKey() {
    this._unableToExtractPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToExtractPublicKeyInput() {
    return this._unableToExtractPublicKey;
  }

  // unable_to_find_dh_parameters - computed: false, optional: true, required: false
  private _unableToFindDhParameters?: number; 
  public get unableToFindDhParameters() {
    return this.getNumberAttribute('unable_to_find_dh_parameters');
  }
  public set unableToFindDhParameters(value: number) {
    this._unableToFindDhParameters = value;
  }
  public resetUnableToFindDhParameters() {
    this._unableToFindDhParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToFindDhParametersInput() {
    return this._unableToFindDhParameters;
  }

  // unable_to_find_public_key_parameters - computed: false, optional: true, required: false
  private _unableToFindPublicKeyParameters?: number; 
  public get unableToFindPublicKeyParameters() {
    return this.getNumberAttribute('unable_to_find_public_key_parameters');
  }
  public set unableToFindPublicKeyParameters(value: number) {
    this._unableToFindPublicKeyParameters = value;
  }
  public resetUnableToFindPublicKeyParameters() {
    this._unableToFindPublicKeyParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToFindPublicKeyParametersInput() {
    return this._unableToFindPublicKeyParameters;
  }

  // unable_to_find_ssl_method - computed: false, optional: true, required: false
  private _unableToFindSslMethod?: number; 
  public get unableToFindSslMethod() {
    return this.getNumberAttribute('unable_to_find_ssl_method');
  }
  public set unableToFindSslMethod(value: number) {
    this._unableToFindSslMethod = value;
  }
  public resetUnableToFindSslMethod() {
    this._unableToFindSslMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToFindSslMethodInput() {
    return this._unableToFindSslMethod;
  }

  // unable_to_load_ssl2_md5_routines - computed: false, optional: true, required: false
  private _unableToLoadSsl2Md5Routines?: number; 
  public get unableToLoadSsl2Md5Routines() {
    return this.getNumberAttribute('unable_to_load_ssl2_md5_routines');
  }
  public set unableToLoadSsl2Md5Routines(value: number) {
    this._unableToLoadSsl2Md5Routines = value;
  }
  public resetUnableToLoadSsl2Md5Routines() {
    this._unableToLoadSsl2Md5Routines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToLoadSsl2Md5RoutinesInput() {
    return this._unableToLoadSsl2Md5Routines;
  }

  // unable_to_load_ssl3_md5_routines - computed: false, optional: true, required: false
  private _unableToLoadSsl3Md5Routines?: number; 
  public get unableToLoadSsl3Md5Routines() {
    return this.getNumberAttribute('unable_to_load_ssl3_md5_routines');
  }
  public set unableToLoadSsl3Md5Routines(value: number) {
    this._unableToLoadSsl3Md5Routines = value;
  }
  public resetUnableToLoadSsl3Md5Routines() {
    this._unableToLoadSsl3Md5Routines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToLoadSsl3Md5RoutinesInput() {
    return this._unableToLoadSsl3Md5Routines;
  }

  // unable_to_load_ssl3_sha1_routines - computed: false, optional: true, required: false
  private _unableToLoadSsl3Sha1Routines?: number; 
  public get unableToLoadSsl3Sha1Routines() {
    return this.getNumberAttribute('unable_to_load_ssl3_sha1_routines');
  }
  public set unableToLoadSsl3Sha1Routines(value: number) {
    this._unableToLoadSsl3Sha1Routines = value;
  }
  public resetUnableToLoadSsl3Sha1Routines() {
    this._unableToLoadSsl3Sha1Routines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToLoadSsl3Sha1RoutinesInput() {
    return this._unableToLoadSsl3Sha1Routines;
  }

  // unexpected_message - computed: false, optional: true, required: false
  private _unexpectedMessage?: number; 
  public get unexpectedMessage() {
    return this.getNumberAttribute('unexpected_message');
  }
  public set unexpectedMessage(value: number) {
    this._unexpectedMessage = value;
  }
  public resetUnexpectedMessage() {
    this._unexpectedMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unexpectedMessageInput() {
    return this._unexpectedMessage;
  }

  // unexpected_record - computed: false, optional: true, required: false
  private _unexpectedRecord?: number; 
  public get unexpectedRecord() {
    return this.getNumberAttribute('unexpected_record');
  }
  public set unexpectedRecord(value: number) {
    this._unexpectedRecord = value;
  }
  public resetUnexpectedRecord() {
    this._unexpectedRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unexpectedRecordInput() {
    return this._unexpectedRecord;
  }

  // uninitialized - computed: false, optional: true, required: false
  private _uninitialized?: number; 
  public get uninitialized() {
    return this.getNumberAttribute('uninitialized');
  }
  public set uninitialized(value: number) {
    this._uninitialized = value;
  }
  public resetUninitialized() {
    this._uninitialized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uninitializedInput() {
    return this._uninitialized;
  }

  // unknown_alert_type - computed: false, optional: true, required: false
  private _unknownAlertType?: number; 
  public get unknownAlertType() {
    return this.getNumberAttribute('unknown_alert_type');
  }
  public set unknownAlertType(value: number) {
    this._unknownAlertType = value;
  }
  public resetUnknownAlertType() {
    this._unknownAlertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownAlertTypeInput() {
    return this._unknownAlertType;
  }

  // unknown_certificate_type - computed: false, optional: true, required: false
  private _unknownCertificateType?: number; 
  public get unknownCertificateType() {
    return this.getNumberAttribute('unknown_certificate_type');
  }
  public set unknownCertificateType(value: number) {
    this._unknownCertificateType = value;
  }
  public resetUnknownCertificateType() {
    this._unknownCertificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownCertificateTypeInput() {
    return this._unknownCertificateType;
  }

  // unknown_cipher_returned - computed: false, optional: true, required: false
  private _unknownCipherReturned?: number; 
  public get unknownCipherReturned() {
    return this.getNumberAttribute('unknown_cipher_returned');
  }
  public set unknownCipherReturned(value: number) {
    this._unknownCipherReturned = value;
  }
  public resetUnknownCipherReturned() {
    this._unknownCipherReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownCipherReturnedInput() {
    return this._unknownCipherReturned;
  }

  // unknown_cipher_type - computed: false, optional: true, required: false
  private _unknownCipherType?: number; 
  public get unknownCipherType() {
    return this.getNumberAttribute('unknown_cipher_type');
  }
  public set unknownCipherType(value: number) {
    this._unknownCipherType = value;
  }
  public resetUnknownCipherType() {
    this._unknownCipherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownCipherTypeInput() {
    return this._unknownCipherType;
  }

  // unknown_key_exchange_type - computed: false, optional: true, required: false
  private _unknownKeyExchangeType?: number; 
  public get unknownKeyExchangeType() {
    return this.getNumberAttribute('unknown_key_exchange_type');
  }
  public set unknownKeyExchangeType(value: number) {
    this._unknownKeyExchangeType = value;
  }
  public resetUnknownKeyExchangeType() {
    this._unknownKeyExchangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownKeyExchangeTypeInput() {
    return this._unknownKeyExchangeType;
  }

  // unknown_pkey_type - computed: false, optional: true, required: false
  private _unknownPkeyType?: number; 
  public get unknownPkeyType() {
    return this.getNumberAttribute('unknown_pkey_type');
  }
  public set unknownPkeyType(value: number) {
    this._unknownPkeyType = value;
  }
  public resetUnknownPkeyType() {
    this._unknownPkeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownPkeyTypeInput() {
    return this._unknownPkeyType;
  }

  // unknown_protocol - computed: false, optional: true, required: false
  private _unknownProtocol?: number; 
  public get unknownProtocol() {
    return this.getNumberAttribute('unknown_protocol');
  }
  public set unknownProtocol(value: number) {
    this._unknownProtocol = value;
  }
  public resetUnknownProtocol() {
    this._unknownProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownProtocolInput() {
    return this._unknownProtocol;
  }

  // unknown_remote_error_type - computed: false, optional: true, required: false
  private _unknownRemoteErrorType?: number; 
  public get unknownRemoteErrorType() {
    return this.getNumberAttribute('unknown_remote_error_type');
  }
  public set unknownRemoteErrorType(value: number) {
    this._unknownRemoteErrorType = value;
  }
  public resetUnknownRemoteErrorType() {
    this._unknownRemoteErrorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownRemoteErrorTypeInput() {
    return this._unknownRemoteErrorType;
  }

  // unknown_ssl_version - computed: false, optional: true, required: false
  private _unknownSslVersion?: number; 
  public get unknownSslVersion() {
    return this.getNumberAttribute('unknown_ssl_version');
  }
  public set unknownSslVersion(value: number) {
    this._unknownSslVersion = value;
  }
  public resetUnknownSslVersion() {
    this._unknownSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownSslVersionInput() {
    return this._unknownSslVersion;
  }

  // unknown_state - computed: false, optional: true, required: false
  private _unknownState?: number; 
  public get unknownState() {
    return this.getNumberAttribute('unknown_state');
  }
  public set unknownState(value: number) {
    this._unknownState = value;
  }
  public resetUnknownState() {
    this._unknownState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownStateInput() {
    return this._unknownState;
  }

  // unsupported_cipher - computed: false, optional: true, required: false
  private _unsupportedCipher?: number; 
  public get unsupportedCipher() {
    return this.getNumberAttribute('unsupported_cipher');
  }
  public set unsupportedCipher(value: number) {
    this._unsupportedCipher = value;
  }
  public resetUnsupportedCipher() {
    this._unsupportedCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCipherInput() {
    return this._unsupportedCipher;
  }

  // unsupported_compression_algorithm - computed: false, optional: true, required: false
  private _unsupportedCompressionAlgorithm?: number; 
  public get unsupportedCompressionAlgorithm() {
    return this.getNumberAttribute('unsupported_compression_algorithm');
  }
  public set unsupportedCompressionAlgorithm(value: number) {
    this._unsupportedCompressionAlgorithm = value;
  }
  public resetUnsupportedCompressionAlgorithm() {
    this._unsupportedCompressionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCompressionAlgorithmInput() {
    return this._unsupportedCompressionAlgorithm;
  }

  // unsupported_digest_type - computed: false, optional: true, required: false
  private _unsupportedDigestType?: number; 
  public get unsupportedDigestType() {
    return this.getNumberAttribute('unsupported_digest_type');
  }
  public set unsupportedDigestType(value: number) {
    this._unsupportedDigestType = value;
  }
  public resetUnsupportedDigestType() {
    this._unsupportedDigestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedDigestTypeInput() {
    return this._unsupportedDigestType;
  }

  // unsupported_elliptic_curve - computed: false, optional: true, required: false
  private _unsupportedEllipticCurve?: number; 
  public get unsupportedEllipticCurve() {
    return this.getNumberAttribute('unsupported_elliptic_curve');
  }
  public set unsupportedEllipticCurve(value: number) {
    this._unsupportedEllipticCurve = value;
  }
  public resetUnsupportedEllipticCurve() {
    this._unsupportedEllipticCurve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedEllipticCurveInput() {
    return this._unsupportedEllipticCurve;
  }

  // unsupported_option - computed: false, optional: true, required: false
  private _unsupportedOption?: number; 
  public get unsupportedOption() {
    return this.getNumberAttribute('unsupported_option');
  }
  public set unsupportedOption(value: number) {
    this._unsupportedOption = value;
  }
  public resetUnsupportedOption() {
    this._unsupportedOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedOptionInput() {
    return this._unsupportedOption;
  }

  // unsupported_protocol - computed: false, optional: true, required: false
  private _unsupportedProtocol?: number; 
  public get unsupportedProtocol() {
    return this.getNumberAttribute('unsupported_protocol');
  }
  public set unsupportedProtocol(value: number) {
    this._unsupportedProtocol = value;
  }
  public resetUnsupportedProtocol() {
    this._unsupportedProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedProtocolInput() {
    return this._unsupportedProtocol;
  }

  // unsupported_ssl_version - computed: false, optional: true, required: false
  private _unsupportedSslVersion?: number; 
  public get unsupportedSslVersion() {
    return this.getNumberAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: number) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // unsupported_status_type - computed: false, optional: true, required: false
  private _unsupportedStatusType?: number; 
  public get unsupportedStatusType() {
    return this.getNumberAttribute('unsupported_status_type');
  }
  public set unsupportedStatusType(value: number) {
    this._unsupportedStatusType = value;
  }
  public resetUnsupportedStatusType() {
    this._unsupportedStatusType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedStatusTypeInput() {
    return this._unsupportedStatusType;
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

  // write_bio_not_set - computed: false, optional: true, required: false
  private _writeBioNotSet?: number; 
  public get writeBioNotSet() {
    return this.getNumberAttribute('write_bio_not_set');
  }
  public set writeBioNotSet(value: number) {
    this._writeBioNotSet = value;
  }
  public resetWriteBioNotSet() {
    this._writeBioNotSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBioNotSetInput() {
    return this._writeBioNotSet;
  }

  // wrong_cipher_returned - computed: false, optional: true, required: false
  private _wrongCipherReturned?: number; 
  public get wrongCipherReturned() {
    return this.getNumberAttribute('wrong_cipher_returned');
  }
  public set wrongCipherReturned(value: number) {
    this._wrongCipherReturned = value;
  }
  public resetWrongCipherReturned() {
    this._wrongCipherReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongCipherReturnedInput() {
    return this._wrongCipherReturned;
  }

  // wrong_counter_of_key_bits - computed: false, optional: true, required: false
  private _wrongCounterOfKeyBits?: number; 
  public get wrongCounterOfKeyBits() {
    return this.getNumberAttribute('wrong_counter_of_key_bits');
  }
  public set wrongCounterOfKeyBits(value: number) {
    this._wrongCounterOfKeyBits = value;
  }
  public resetWrongCounterOfKeyBits() {
    this._wrongCounterOfKeyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongCounterOfKeyBitsInput() {
    return this._wrongCounterOfKeyBits;
  }

  // wrong_message_type - computed: false, optional: true, required: false
  private _wrongMessageType?: number; 
  public get wrongMessageType() {
    return this.getNumberAttribute('wrong_message_type');
  }
  public set wrongMessageType(value: number) {
    this._wrongMessageType = value;
  }
  public resetWrongMessageType() {
    this._wrongMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongMessageTypeInput() {
    return this._wrongMessageType;
  }

  // wrong_signature_length - computed: false, optional: true, required: false
  private _wrongSignatureLength?: number; 
  public get wrongSignatureLength() {
    return this.getNumberAttribute('wrong_signature_length');
  }
  public set wrongSignatureLength(value: number) {
    this._wrongSignatureLength = value;
  }
  public resetWrongSignatureLength() {
    this._wrongSignatureLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongSignatureLengthInput() {
    return this._wrongSignatureLength;
  }

  // wrong_signature_size - computed: false, optional: true, required: false
  private _wrongSignatureSize?: number; 
  public get wrongSignatureSize() {
    return this.getNumberAttribute('wrong_signature_size');
  }
  public set wrongSignatureSize(value: number) {
    this._wrongSignatureSize = value;
  }
  public resetWrongSignatureSize() {
    this._wrongSignatureSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongSignatureSizeInput() {
    return this._wrongSignatureSize;
  }

  // wrong_ssl_version - computed: false, optional: true, required: false
  private _wrongSslVersion?: number; 
  public get wrongSslVersion() {
    return this.getNumberAttribute('wrong_ssl_version');
  }
  public set wrongSslVersion(value: number) {
    this._wrongSslVersion = value;
  }
  public resetWrongSslVersion() {
    this._wrongSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongSslVersionInput() {
    return this._wrongSslVersion;
  }

  // wrong_version_counter - computed: false, optional: true, required: false
  private _wrongVersionCounter?: number; 
  public get wrongVersionCounter() {
    return this.getNumberAttribute('wrong_version_counter');
  }
  public set wrongVersionCounter(value: number) {
    this._wrongVersionCounter = value;
  }
  public resetWrongVersionCounter() {
    this._wrongVersionCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongVersionCounterInput() {
    return this._wrongVersionCounter;
  }

  // x509_lib - computed: false, optional: true, required: false
  private _x509Lib?: number; 
  public get x509Lib() {
    return this.getNumberAttribute('x509_lib');
  }
  public set x509Lib(value: number) {
    this._x509Lib = value;
  }
  public resetX509Lib() {
    this._x509Lib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509LibInput() {
    return this._x509Lib;
  }

  // x509_verification_setup_problems - computed: false, optional: true, required: false
  private _x509VerificationSetupProblems?: number; 
  public get x509VerificationSetupProblems() {
    return this.getNumberAttribute('x509_verification_setup_problems');
  }
  public set x509VerificationSetupProblems(value: number) {
    this._x509VerificationSetupProblems = value;
  }
  public resetX509VerificationSetupProblems() {
    this._x509VerificationSetupProblems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509VerificationSetupProblemsInput() {
    return this._x509VerificationSetupProblems;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_data_in_handshake: cdktf.numberToTerraform(this._appDataInHandshake),
      attempt_to_reuse_sess_in_diff_context: cdktf.numberToTerraform(this._attemptToReuseSessInDiffContext),
      bad_alert_record: cdktf.numberToTerraform(this._badAlertRecord),
      bad_authentication_type: cdktf.numberToTerraform(this._badAuthenticationType),
      bad_change_cipher_spec: cdktf.numberToTerraform(this._badChangeCipherSpec),
      bad_checksum: cdktf.numberToTerraform(this._badChecksum),
      bad_data_returned_by_callback: cdktf.numberToTerraform(this._badDataReturnedByCallback),
      bad_decompression: cdktf.numberToTerraform(this._badDecompression),
      bad_dh_g_length: cdktf.numberToTerraform(this._badDhGLength),
      bad_dh_p_length: cdktf.numberToTerraform(this._badDhPLength),
      bad_dh_pub_key_length: cdktf.numberToTerraform(this._badDhPubKeyLength),
      bad_digest_length: cdktf.numberToTerraform(this._badDigestLength),
      bad_dsa_signature: cdktf.numberToTerraform(this._badDsaSignature),
      bad_ecc_cert: cdktf.numberToTerraform(this._badEccCert),
      bad_ecdsa_sig: cdktf.numberToTerraform(this._badEcdsaSig),
      bad_ecpoint: cdktf.numberToTerraform(this._badEcpoint),
      bad_handshake_length: cdktf.numberToTerraform(this._badHandshakeLength),
      bad_hello_request: cdktf.numberToTerraform(this._badHelloRequest),
      bad_length: cdktf.numberToTerraform(this._badLength),
      bad_mac_decode: cdktf.numberToTerraform(this._badMacDecode),
      bad_message_type: cdktf.numberToTerraform(this._badMessageType),
      bad_packet_length: cdktf.numberToTerraform(this._badPacketLength),
      bad_protocol_version_counter: cdktf.numberToTerraform(this._badProtocolVersionCounter),
      bad_response_argument: cdktf.numberToTerraform(this._badResponseArgument),
      bad_rsa_decrypt: cdktf.numberToTerraform(this._badRsaDecrypt),
      bad_rsa_e_length: cdktf.numberToTerraform(this._badRsaELength),
      bad_rsa_encrypt: cdktf.numberToTerraform(this._badRsaEncrypt),
      bad_rsa_modulus_length: cdktf.numberToTerraform(this._badRsaModulusLength),
      bad_rsa_signature: cdktf.numberToTerraform(this._badRsaSignature),
      bad_signature: cdktf.numberToTerraform(this._badSignature),
      bad_ssl_filetype: cdktf.numberToTerraform(this._badSslFiletype),
      bad_ssl_session_id_length: cdktf.numberToTerraform(this._badSslSessionIdLength),
      bad_state: cdktf.numberToTerraform(this._badState),
      bad_write_retry: cdktf.numberToTerraform(this._badWriteRetry),
      bio_not_set: cdktf.numberToTerraform(this._bioNotSet),
      block_cipher_pad_is_wrong: cdktf.numberToTerraform(this._blockCipherPadIsWrong),
      bn_lib: cdktf.numberToTerraform(this._bnLib),
      ca_dn_length_mismatch: cdktf.numberToTerraform(this._caDnLengthMismatch),
      ca_dn_too_long: cdktf.numberToTerraform(this._caDnTooLong),
      ccs_received_early: cdktf.numberToTerraform(this._ccsReceivedEarly),
      cert_length_mismatch: cdktf.numberToTerraform(this._certLengthMismatch),
      certificate_verify_failed: cdktf.numberToTerraform(this._certificateVerifyFailed),
      challenge_is_different: cdktf.numberToTerraform(this._challengeIsDifferent),
      cipher_code_wrong_length: cdktf.numberToTerraform(this._cipherCodeWrongLength),
      cipher_or_hash_unavailable: cdktf.numberToTerraform(this._cipherOrHashUnavailable),
      cipher_table_src_error: cdktf.numberToTerraform(this._cipherTableSrcError),
      clienthello_tlsext: cdktf.numberToTerraform(this._clienthelloTlsext),
      compressed_length_too_long: cdktf.numberToTerraform(this._compressedLengthTooLong),
      compression_failure: cdktf.numberToTerraform(this._compressionFailure),
      compression_library_error: cdktf.numberToTerraform(this._compressionLibraryError),
      connection_id_is_different: cdktf.numberToTerraform(this._connectionIdIsDifferent),
      connection_type_not_set: cdktf.numberToTerraform(this._connectionTypeNotSet),
      cookie_mismatch: cdktf.numberToTerraform(this._cookieMismatch),
      data_between_ccs_and_finished: cdktf.numberToTerraform(this._dataBetweenCcsAndFinished),
      data_length_too_long: cdktf.numberToTerraform(this._dataLengthTooLong),
      decryption_failed: cdktf.numberToTerraform(this._decryptionFailed),
      decryption_failed_or_bad_record_mac: cdktf.numberToTerraform(this._decryptionFailedOrBadRecordMac),
      dh_public_value_length_is_wrong: cdktf.numberToTerraform(this._dhPublicValueLengthIsWrong),
      digest_check_failed: cdktf.numberToTerraform(this._digestCheckFailed),
      encrypted_length_too_long: cdktf.numberToTerraform(this._encryptedLengthTooLong),
      error_generating_tmp_rsa_key: cdktf.numberToTerraform(this._errorGeneratingTmpRsaKey),
      error_in_received_cipher_list: cdktf.numberToTerraform(this._errorInReceivedCipherList),
      excessive_message_size: cdktf.numberToTerraform(this._excessiveMessageSize),
      extra_data_in_message: cdktf.numberToTerraform(this._extraDataInMessage),
      got_a_fin_before_a_ccs: cdktf.numberToTerraform(this._gotAFinBeforeACcs),
      http_request: cdktf.numberToTerraform(this._httpRequest),
      https_proxy_request: cdktf.numberToTerraform(this._httpsProxyRequest),
      id: cdktf.stringToTerraform(this._id),
      illegal_padding: cdktf.numberToTerraform(this._illegalPadding),
      inappropriate_fallback: cdktf.numberToTerraform(this._inappropriateFallback),
      invalid_challenge_length: cdktf.numberToTerraform(this._invalidChallengeLength),
      invalid_command: cdktf.numberToTerraform(this._invalidCommand),
      invalid_purpose: cdktf.numberToTerraform(this._invalidPurpose),
      invalid_status_response: cdktf.numberToTerraform(this._invalidStatusResponse),
      invalid_trust: cdktf.numberToTerraform(this._invalidTrust),
      key_arg_too_long: cdktf.numberToTerraform(this._keyArgTooLong),
      krb5: cdktf.numberToTerraform(this._krb5),
      krb5_client_cc_principal: cdktf.numberToTerraform(this._krb5ClientCcPrincipal),
      krb5_client_get_cred: cdktf.numberToTerraform(this._krb5ClientGetCred),
      krb5_client_init: cdktf.numberToTerraform(this._krb5ClientInit),
      krb5_client_mk_req: cdktf.numberToTerraform(this._krb5ClientMkReq),
      krb5_server_bad_ticket: cdktf.numberToTerraform(this._krb5ServerBadTicket),
      krb5_server_init: cdktf.numberToTerraform(this._krb5ServerInit),
      krb5_server_rd_req: cdktf.numberToTerraform(this._krb5ServerRdReq),
      krb5_server_tkt_expired: cdktf.numberToTerraform(this._krb5ServerTktExpired),
      krb5_server_tkt_not_yet_valid: cdktf.numberToTerraform(this._krb5ServerTktNotYetValid),
      krb5_server_tkt_skew: cdktf.numberToTerraform(this._krb5ServerTktSkew),
      length_mismatch: cdktf.numberToTerraform(this._lengthMismatch),
      length_too_short: cdktf.numberToTerraform(this._lengthTooShort),
      library_bug: cdktf.numberToTerraform(this._libraryBug),
      library_has_no_ciphers: cdktf.numberToTerraform(this._libraryHasNoCiphers),
      mast_key_too_long: cdktf.numberToTerraform(this._mastKeyTooLong),
      message_too_long: cdktf.numberToTerraform(this._messageTooLong),
      missing_dh_dsa_cert: cdktf.numberToTerraform(this._missingDhDsaCert),
      missing_dh_key: cdktf.numberToTerraform(this._missingDhKey),
      missing_dh_rsa_cert: cdktf.numberToTerraform(this._missingDhRsaCert),
      missing_dsa_signing_cert: cdktf.numberToTerraform(this._missingDsaSigningCert),
      missing_export_tmp_dh_key: cdktf.numberToTerraform(this._missingExportTmpDhKey),
      missing_export_tmp_rsa_key: cdktf.numberToTerraform(this._missingExportTmpRsaKey),
      missing_rsa_certificate: cdktf.numberToTerraform(this._missingRsaCertificate),
      missing_rsa_encrypting_cert: cdktf.numberToTerraform(this._missingRsaEncryptingCert),
      missing_rsa_signing_cert: cdktf.numberToTerraform(this._missingRsaSigningCert),
      missing_tmp_dh_key: cdktf.numberToTerraform(this._missingTmpDhKey),
      missing_tmp_rsa_key: cdktf.numberToTerraform(this._missingTmpRsaKey),
      missing_tmp_rsa_pkey: cdktf.numberToTerraform(this._missingTmpRsaPkey),
      missing_verify_message: cdktf.numberToTerraform(this._missingVerifyMessage),
      multiple_sgc_restarts: cdktf.numberToTerraform(this._multipleSgcRestarts),
      name: cdktf.stringToTerraform(this._name),
      no_certificate_assigned: cdktf.numberToTerraform(this._noCertificateAssigned),
      no_certificate_returned: cdktf.numberToTerraform(this._noCertificateReturned),
      no_certificate_set: cdktf.numberToTerraform(this._noCertificateSet),
      no_certificate_specified: cdktf.numberToTerraform(this._noCertificateSpecified),
      no_certificates_returned: cdktf.numberToTerraform(this._noCertificatesReturned),
      no_cipher_list: cdktf.numberToTerraform(this._noCipherList),
      no_cipher_match: cdktf.numberToTerraform(this._noCipherMatch),
      no_ciphers_available: cdktf.numberToTerraform(this._noCiphersAvailable),
      no_ciphers_passed: cdktf.numberToTerraform(this._noCiphersPassed),
      no_ciphers_specified: cdktf.numberToTerraform(this._noCiphersSpecified),
      no_client_cert_received: cdktf.numberToTerraform(this._noClientCertReceived),
      no_compression_specified: cdktf.numberToTerraform(this._noCompressionSpecified),
      no_method_specified: cdktf.numberToTerraform(this._noMethodSpecified),
      no_private_key_assigned: cdktf.numberToTerraform(this._noPrivateKeyAssigned),
      no_privatekey: cdktf.numberToTerraform(this._noPrivatekey),
      no_protocols_available: cdktf.numberToTerraform(this._noProtocolsAvailable),
      no_publickey: cdktf.numberToTerraform(this._noPublickey),
      no_required_digest: cdktf.numberToTerraform(this._noRequiredDigest),
      no_shared_cipher: cdktf.numberToTerraform(this._noSharedCipher),
      no_verify_callback: cdktf.numberToTerraform(this._noVerifyCallback),
      non_sslv2_initial_packet: cdktf.numberToTerraform(this._nonSslv2InitialPacket),
      null_ssl_ctx: cdktf.numberToTerraform(this._nullSslCtx),
      null_ssl_method_passed: cdktf.numberToTerraform(this._nullSslMethodPassed),
      old_session_cipher_not_returned: cdktf.numberToTerraform(this._oldSessionCipherNotReturned),
      packet_length_too_long: cdktf.numberToTerraform(this._packetLengthTooLong),
      parse_tlsext: cdktf.numberToTerraform(this._parseTlsext),
      path_too_long: cdktf.numberToTerraform(this._pathTooLong),
      peer_did_not_return_a_certificate: cdktf.numberToTerraform(this._peerDidNotReturnACertificate),
      peer_error: cdktf.numberToTerraform(this._peerError),
      peer_error_certificate: cdktf.numberToTerraform(this._peerErrorCertificate),
      peer_error_no_certificate: cdktf.numberToTerraform(this._peerErrorNoCertificate),
      peer_error_no_cipher: cdktf.numberToTerraform(this._peerErrorNoCipher),
      peer_error_unsupported_certificate_type: cdktf.numberToTerraform(this._peerErrorUnsupportedCertificateType),
      pre_mac_length_too_long: cdktf.numberToTerraform(this._preMacLengthTooLong),
      problems_mapping_cipher_functions: cdktf.numberToTerraform(this._problemsMappingCipherFunctions),
      protocol_is_shutdown: cdktf.numberToTerraform(this._protocolIsShutdown),
      public_key_encrypt_error: cdktf.numberToTerraform(this._publicKeyEncryptError),
      public_key_is_not_rsa: cdktf.numberToTerraform(this._publicKeyIsNotRsa),
      public_key_not_rsa: cdktf.numberToTerraform(this._publicKeyNotRsa),
      read_bio_not_set: cdktf.numberToTerraform(this._readBioNotSet),
      read_wrong_packet_type: cdktf.numberToTerraform(this._readWrongPacketType),
      record_length_mismatch: cdktf.numberToTerraform(this._recordLengthMismatch),
      record_too_large: cdktf.numberToTerraform(this._recordTooLarge),
      record_too_small: cdktf.numberToTerraform(this._recordTooSmall),
      required_cipher_missing: cdktf.numberToTerraform(this._requiredCipherMissing),
      reuse_cert_length_not_zero: cdktf.numberToTerraform(this._reuseCertLengthNotZero),
      reuse_cert_type_not_zero: cdktf.numberToTerraform(this._reuseCertTypeNotZero),
      reuse_cipher_list_not_zero: cdktf.numberToTerraform(this._reuseCipherListNotZero),
      scsv_received_when_renegotiating: cdktf.numberToTerraform(this._scsvReceivedWhenRenegotiating),
      serverhello_tlsext: cdktf.numberToTerraform(this._serverhelloTlsext),
      session_id_context_uninitialized: cdktf.numberToTerraform(this._sessionIdContextUninitialized),
      short_read: cdktf.numberToTerraform(this._shortRead),
      signature_for_non_signing_certificate: cdktf.numberToTerraform(this._signatureForNonSigningCertificate),
      ssl23_doing_session_id_reuse: cdktf.numberToTerraform(this._ssl23DoingSessionIdReuse),
      ssl2_connection_id_too_long: cdktf.numberToTerraform(this._ssl2ConnectionIdTooLong),
      ssl3_ext_invalid_servername: cdktf.numberToTerraform(this._ssl3ExtInvalidServername),
      ssl3_ext_invalid_servername_type: cdktf.numberToTerraform(this._ssl3ExtInvalidServernameType),
      ssl3_session_id_too_long: cdktf.numberToTerraform(this._ssl3SessionIdTooLong),
      ssl3_session_id_too_short: cdktf.numberToTerraform(this._ssl3SessionIdTooShort),
      ssl_ctx_has_no_default_ssl_version: cdktf.numberToTerraform(this._sslCtxHasNoDefaultSslVersion),
      ssl_handshake_failure: cdktf.numberToTerraform(this._sslHandshakeFailure),
      ssl_library_has_no_ciphers: cdktf.numberToTerraform(this._sslLibraryHasNoCiphers),
      ssl_session_id_callback_failed: cdktf.numberToTerraform(this._sslSessionIdCallbackFailed),
      ssl_session_id_conflict: cdktf.numberToTerraform(this._sslSessionIdConflict),
      ssl_session_id_context_too_long: cdktf.numberToTerraform(this._sslSessionIdContextTooLong),
      ssl_session_id_has_bad_length: cdktf.numberToTerraform(this._sslSessionIdHasBadLength),
      ssl_session_id_is_different: cdktf.numberToTerraform(this._sslSessionIdIsDifferent),
      sslv3_alert_bad_certificate: cdktf.numberToTerraform(this._sslv3AlertBadCertificate),
      sslv3_alert_bad_record_mac: cdktf.numberToTerraform(this._sslv3AlertBadRecordMac),
      sslv3_alert_certificate_expired: cdktf.numberToTerraform(this._sslv3AlertCertificateExpired),
      sslv3_alert_certificate_revoked: cdktf.numberToTerraform(this._sslv3AlertCertificateRevoked),
      sslv3_alert_certificate_unknown: cdktf.numberToTerraform(this._sslv3AlertCertificateUnknown),
      sslv3_alert_decompression_failure: cdktf.numberToTerraform(this._sslv3AlertDecompressionFailure),
      sslv3_alert_handshake_failure: cdktf.numberToTerraform(this._sslv3AlertHandshakeFailure),
      sslv3_alert_illegal_parameter: cdktf.numberToTerraform(this._sslv3AlertIllegalParameter),
      sslv3_alert_no_certificate: cdktf.numberToTerraform(this._sslv3AlertNoCertificate),
      sslv3_alert_peer_error_cert: cdktf.numberToTerraform(this._sslv3AlertPeerErrorCert),
      sslv3_alert_peer_error_no_cert: cdktf.numberToTerraform(this._sslv3AlertPeerErrorNoCert),
      sslv3_alert_peer_error_no_cipher: cdktf.numberToTerraform(this._sslv3AlertPeerErrorNoCipher),
      sslv3_alert_peer_error_unsupp_cert_type: cdktf.numberToTerraform(this._sslv3AlertPeerErrorUnsuppCertType),
      sslv3_alert_unexpected_msg: cdktf.numberToTerraform(this._sslv3AlertUnexpectedMsg),
      sslv3_alert_unknown_remote_err_type: cdktf.numberToTerraform(this._sslv3AlertUnknownRemoteErrType),
      sslv3_alert_unspported_cert: cdktf.numberToTerraform(this._sslv3AlertUnspportedCert),
      tls_client_cert_req_with_anon_cipher: cdktf.numberToTerraform(this._tlsClientCertReqWithAnonCipher),
      tls_invalid_ecpointformat_list: cdktf.numberToTerraform(this._tlsInvalidEcpointformatList),
      tls_peer_did_not_respond_with_cert_list: cdktf.numberToTerraform(this._tlsPeerDidNotRespondWithCertList),
      tls_rsa_encrypted_value_length_is_wrong: cdktf.numberToTerraform(this._tlsRsaEncryptedValueLengthIsWrong),
      tlsv1_alert_access_denied: cdktf.numberToTerraform(this._tlsv1AlertAccessDenied),
      tlsv1_alert_decode_error: cdktf.numberToTerraform(this._tlsv1AlertDecodeError),
      tlsv1_alert_decrypt_error: cdktf.numberToTerraform(this._tlsv1AlertDecryptError),
      tlsv1_alert_decryption_failed: cdktf.numberToTerraform(this._tlsv1AlertDecryptionFailed),
      tlsv1_alert_export_restriction: cdktf.numberToTerraform(this._tlsv1AlertExportRestriction),
      tlsv1_alert_insufficient_security: cdktf.numberToTerraform(this._tlsv1AlertInsufficientSecurity),
      tlsv1_alert_internal_error: cdktf.numberToTerraform(this._tlsv1AlertInternalError),
      tlsv1_alert_no_renegotiation: cdktf.numberToTerraform(this._tlsv1AlertNoRenegotiation),
      tlsv1_alert_protocol_version: cdktf.numberToTerraform(this._tlsv1AlertProtocolVersion),
      tlsv1_alert_record_overflow: cdktf.numberToTerraform(this._tlsv1AlertRecordOverflow),
      tlsv1_alert_unknown_ca: cdktf.numberToTerraform(this._tlsv1AlertUnknownCa),
      tlsv1_alert_user_cancelled: cdktf.numberToTerraform(this._tlsv1AlertUserCancelled),
      tried_to_use_unsupported_cipher: cdktf.numberToTerraform(this._triedToUseUnsupportedCipher),
      unable_to_decode_dh_certs: cdktf.numberToTerraform(this._unableToDecodeDhCerts),
      unable_to_extract_public_key: cdktf.numberToTerraform(this._unableToExtractPublicKey),
      unable_to_find_dh_parameters: cdktf.numberToTerraform(this._unableToFindDhParameters),
      unable_to_find_public_key_parameters: cdktf.numberToTerraform(this._unableToFindPublicKeyParameters),
      unable_to_find_ssl_method: cdktf.numberToTerraform(this._unableToFindSslMethod),
      unable_to_load_ssl2_md5_routines: cdktf.numberToTerraform(this._unableToLoadSsl2Md5Routines),
      unable_to_load_ssl3_md5_routines: cdktf.numberToTerraform(this._unableToLoadSsl3Md5Routines),
      unable_to_load_ssl3_sha1_routines: cdktf.numberToTerraform(this._unableToLoadSsl3Sha1Routines),
      unexpected_message: cdktf.numberToTerraform(this._unexpectedMessage),
      unexpected_record: cdktf.numberToTerraform(this._unexpectedRecord),
      uninitialized: cdktf.numberToTerraform(this._uninitialized),
      unknown_alert_type: cdktf.numberToTerraform(this._unknownAlertType),
      unknown_certificate_type: cdktf.numberToTerraform(this._unknownCertificateType),
      unknown_cipher_returned: cdktf.numberToTerraform(this._unknownCipherReturned),
      unknown_cipher_type: cdktf.numberToTerraform(this._unknownCipherType),
      unknown_key_exchange_type: cdktf.numberToTerraform(this._unknownKeyExchangeType),
      unknown_pkey_type: cdktf.numberToTerraform(this._unknownPkeyType),
      unknown_protocol: cdktf.numberToTerraform(this._unknownProtocol),
      unknown_remote_error_type: cdktf.numberToTerraform(this._unknownRemoteErrorType),
      unknown_ssl_version: cdktf.numberToTerraform(this._unknownSslVersion),
      unknown_state: cdktf.numberToTerraform(this._unknownState),
      unsupported_cipher: cdktf.numberToTerraform(this._unsupportedCipher),
      unsupported_compression_algorithm: cdktf.numberToTerraform(this._unsupportedCompressionAlgorithm),
      unsupported_digest_type: cdktf.numberToTerraform(this._unsupportedDigestType),
      unsupported_elliptic_curve: cdktf.numberToTerraform(this._unsupportedEllipticCurve),
      unsupported_option: cdktf.numberToTerraform(this._unsupportedOption),
      unsupported_protocol: cdktf.numberToTerraform(this._unsupportedProtocol),
      unsupported_ssl_version: cdktf.numberToTerraform(this._unsupportedSslVersion),
      unsupported_status_type: cdktf.numberToTerraform(this._unsupportedStatusType),
      uuid: cdktf.stringToTerraform(this._uuid),
      write_bio_not_set: cdktf.numberToTerraform(this._writeBioNotSet),
      wrong_cipher_returned: cdktf.numberToTerraform(this._wrongCipherReturned),
      wrong_counter_of_key_bits: cdktf.numberToTerraform(this._wrongCounterOfKeyBits),
      wrong_message_type: cdktf.numberToTerraform(this._wrongMessageType),
      wrong_signature_length: cdktf.numberToTerraform(this._wrongSignatureLength),
      wrong_signature_size: cdktf.numberToTerraform(this._wrongSignatureSize),
      wrong_ssl_version: cdktf.numberToTerraform(this._wrongSslVersion),
      wrong_version_counter: cdktf.numberToTerraform(this._wrongVersionCounter),
      x509_lib: cdktf.numberToTerraform(this._x509Lib),
      x509_verification_setup_problems: cdktf.numberToTerraform(this._x509VerificationSetupProblems),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_data_in_handshake: {
        value: cdktf.numberToHclTerraform(this._appDataInHandshake),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attempt_to_reuse_sess_in_diff_context: {
        value: cdktf.numberToHclTerraform(this._attemptToReuseSessInDiffContext),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_alert_record: {
        value: cdktf.numberToHclTerraform(this._badAlertRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_authentication_type: {
        value: cdktf.numberToHclTerraform(this._badAuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_change_cipher_spec: {
        value: cdktf.numberToHclTerraform(this._badChangeCipherSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_checksum: {
        value: cdktf.numberToHclTerraform(this._badChecksum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_data_returned_by_callback: {
        value: cdktf.numberToHclTerraform(this._badDataReturnedByCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_decompression: {
        value: cdktf.numberToHclTerraform(this._badDecompression),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_dh_g_length: {
        value: cdktf.numberToHclTerraform(this._badDhGLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_dh_p_length: {
        value: cdktf.numberToHclTerraform(this._badDhPLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_dh_pub_key_length: {
        value: cdktf.numberToHclTerraform(this._badDhPubKeyLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_digest_length: {
        value: cdktf.numberToHclTerraform(this._badDigestLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_dsa_signature: {
        value: cdktf.numberToHclTerraform(this._badDsaSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ecc_cert: {
        value: cdktf.numberToHclTerraform(this._badEccCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ecdsa_sig: {
        value: cdktf.numberToHclTerraform(this._badEcdsaSig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ecpoint: {
        value: cdktf.numberToHclTerraform(this._badEcpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_handshake_length: {
        value: cdktf.numberToHclTerraform(this._badHandshakeLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_hello_request: {
        value: cdktf.numberToHclTerraform(this._badHelloRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_length: {
        value: cdktf.numberToHclTerraform(this._badLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_mac_decode: {
        value: cdktf.numberToHclTerraform(this._badMacDecode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_message_type: {
        value: cdktf.numberToHclTerraform(this._badMessageType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_packet_length: {
        value: cdktf.numberToHclTerraform(this._badPacketLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_protocol_version_counter: {
        value: cdktf.numberToHclTerraform(this._badProtocolVersionCounter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_response_argument: {
        value: cdktf.numberToHclTerraform(this._badResponseArgument),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_rsa_decrypt: {
        value: cdktf.numberToHclTerraform(this._badRsaDecrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_rsa_e_length: {
        value: cdktf.numberToHclTerraform(this._badRsaELength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_rsa_encrypt: {
        value: cdktf.numberToHclTerraform(this._badRsaEncrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_rsa_modulus_length: {
        value: cdktf.numberToHclTerraform(this._badRsaModulusLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_rsa_signature: {
        value: cdktf.numberToHclTerraform(this._badRsaSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_signature: {
        value: cdktf.numberToHclTerraform(this._badSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ssl_filetype: {
        value: cdktf.numberToHclTerraform(this._badSslFiletype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ssl_session_id_length: {
        value: cdktf.numberToHclTerraform(this._badSslSessionIdLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_state: {
        value: cdktf.numberToHclTerraform(this._badState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_write_retry: {
        value: cdktf.numberToHclTerraform(this._badWriteRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bio_not_set: {
        value: cdktf.numberToHclTerraform(this._bioNotSet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_cipher_pad_is_wrong: {
        value: cdktf.numberToHclTerraform(this._blockCipherPadIsWrong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bn_lib: {
        value: cdktf.numberToHclTerraform(this._bnLib),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_dn_length_mismatch: {
        value: cdktf.numberToHclTerraform(this._caDnLengthMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_dn_too_long: {
        value: cdktf.numberToHclTerraform(this._caDnTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ccs_received_early: {
        value: cdktf.numberToHclTerraform(this._ccsReceivedEarly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cert_length_mismatch: {
        value: cdktf.numberToHclTerraform(this._certLengthMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate_verify_failed: {
        value: cdktf.numberToHclTerraform(this._certificateVerifyFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      challenge_is_different: {
        value: cdktf.numberToHclTerraform(this._challengeIsDifferent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cipher_code_wrong_length: {
        value: cdktf.numberToHclTerraform(this._cipherCodeWrongLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cipher_or_hash_unavailable: {
        value: cdktf.numberToHclTerraform(this._cipherOrHashUnavailable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cipher_table_src_error: {
        value: cdktf.numberToHclTerraform(this._cipherTableSrcError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clienthello_tlsext: {
        value: cdktf.numberToHclTerraform(this._clienthelloTlsext),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compressed_length_too_long: {
        value: cdktf.numberToHclTerraform(this._compressedLengthTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_failure: {
        value: cdktf.numberToHclTerraform(this._compressionFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_library_error: {
        value: cdktf.numberToHclTerraform(this._compressionLibraryError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_id_is_different: {
        value: cdktf.numberToHclTerraform(this._connectionIdIsDifferent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_type_not_set: {
        value: cdktf.numberToHclTerraform(this._connectionTypeNotSet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookie_mismatch: {
        value: cdktf.numberToHclTerraform(this._cookieMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_between_ccs_and_finished: {
        value: cdktf.numberToHclTerraform(this._dataBetweenCcsAndFinished),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_length_too_long: {
        value: cdktf.numberToHclTerraform(this._dataLengthTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      decryption_failed: {
        value: cdktf.numberToHclTerraform(this._decryptionFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      decryption_failed_or_bad_record_mac: {
        value: cdktf.numberToHclTerraform(this._decryptionFailedOrBadRecordMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dh_public_value_length_is_wrong: {
        value: cdktf.numberToHclTerraform(this._dhPublicValueLengthIsWrong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      digest_check_failed: {
        value: cdktf.numberToHclTerraform(this._digestCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encrypted_length_too_long: {
        value: cdktf.numberToHclTerraform(this._encryptedLengthTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_generating_tmp_rsa_key: {
        value: cdktf.numberToHclTerraform(this._errorGeneratingTmpRsaKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_in_received_cipher_list: {
        value: cdktf.numberToHclTerraform(this._errorInReceivedCipherList),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      excessive_message_size: {
        value: cdktf.numberToHclTerraform(this._excessiveMessageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extra_data_in_message: {
        value: cdktf.numberToHclTerraform(this._extraDataInMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      got_a_fin_before_a_ccs: {
        value: cdktf.numberToHclTerraform(this._gotAFinBeforeACcs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_request: {
        value: cdktf.numberToHclTerraform(this._httpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_proxy_request: {
        value: cdktf.numberToHclTerraform(this._httpsProxyRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      illegal_padding: {
        value: cdktf.numberToHclTerraform(this._illegalPadding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inappropriate_fallback: {
        value: cdktf.numberToHclTerraform(this._inappropriateFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_challenge_length: {
        value: cdktf.numberToHclTerraform(this._invalidChallengeLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_command: {
        value: cdktf.numberToHclTerraform(this._invalidCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_purpose: {
        value: cdktf.numberToHclTerraform(this._invalidPurpose),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_status_response: {
        value: cdktf.numberToHclTerraform(this._invalidStatusResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_trust: {
        value: cdktf.numberToHclTerraform(this._invalidTrust),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_arg_too_long: {
        value: cdktf.numberToHclTerraform(this._keyArgTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5: {
        value: cdktf.numberToHclTerraform(this._krb5),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5_client_cc_principal: {
        value: cdktf.numberToHclTerraform(this._krb5ClientCcPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5_client_get_cred: {
        value: cdktf.numberToHclTerraform(this._krb5ClientGetCred),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5_client_init: {
        value: cdktf.numberToHclTerraform(this._krb5ClientInit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5_client_mk_req: {
        value: cdktf.numberToHclTerraform(this._krb5ClientMkReq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5_server_bad_ticket: {
        value: cdktf.numberToHclTerraform(this._krb5ServerBadTicket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5_server_init: {
        value: cdktf.numberToHclTerraform(this._krb5ServerInit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5_server_rd_req: {
        value: cdktf.numberToHclTerraform(this._krb5ServerRdReq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5_server_tkt_expired: {
        value: cdktf.numberToHclTerraform(this._krb5ServerTktExpired),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5_server_tkt_not_yet_valid: {
        value: cdktf.numberToHclTerraform(this._krb5ServerTktNotYetValid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb5_server_tkt_skew: {
        value: cdktf.numberToHclTerraform(this._krb5ServerTktSkew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      length_mismatch: {
        value: cdktf.numberToHclTerraform(this._lengthMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      length_too_short: {
        value: cdktf.numberToHclTerraform(this._lengthTooShort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      library_bug: {
        value: cdktf.numberToHclTerraform(this._libraryBug),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      library_has_no_ciphers: {
        value: cdktf.numberToHclTerraform(this._libraryHasNoCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mast_key_too_long: {
        value: cdktf.numberToHclTerraform(this._mastKeyTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_too_long: {
        value: cdktf.numberToHclTerraform(this._messageTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_dh_dsa_cert: {
        value: cdktf.numberToHclTerraform(this._missingDhDsaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_dh_key: {
        value: cdktf.numberToHclTerraform(this._missingDhKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_dh_rsa_cert: {
        value: cdktf.numberToHclTerraform(this._missingDhRsaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_dsa_signing_cert: {
        value: cdktf.numberToHclTerraform(this._missingDsaSigningCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_export_tmp_dh_key: {
        value: cdktf.numberToHclTerraform(this._missingExportTmpDhKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_export_tmp_rsa_key: {
        value: cdktf.numberToHclTerraform(this._missingExportTmpRsaKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_rsa_certificate: {
        value: cdktf.numberToHclTerraform(this._missingRsaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_rsa_encrypting_cert: {
        value: cdktf.numberToHclTerraform(this._missingRsaEncryptingCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_rsa_signing_cert: {
        value: cdktf.numberToHclTerraform(this._missingRsaSigningCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_tmp_dh_key: {
        value: cdktf.numberToHclTerraform(this._missingTmpDhKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_tmp_rsa_key: {
        value: cdktf.numberToHclTerraform(this._missingTmpRsaKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_tmp_rsa_pkey: {
        value: cdktf.numberToHclTerraform(this._missingTmpRsaPkey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_verify_message: {
        value: cdktf.numberToHclTerraform(this._missingVerifyMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multiple_sgc_restarts: {
        value: cdktf.numberToHclTerraform(this._multipleSgcRestarts),
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
      no_certificate_assigned: {
        value: cdktf.numberToHclTerraform(this._noCertificateAssigned),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_certificate_returned: {
        value: cdktf.numberToHclTerraform(this._noCertificateReturned),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_certificate_set: {
        value: cdktf.numberToHclTerraform(this._noCertificateSet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_certificate_specified: {
        value: cdktf.numberToHclTerraform(this._noCertificateSpecified),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_certificates_returned: {
        value: cdktf.numberToHclTerraform(this._noCertificatesReturned),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_cipher_list: {
        value: cdktf.numberToHclTerraform(this._noCipherList),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_cipher_match: {
        value: cdktf.numberToHclTerraform(this._noCipherMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_ciphers_available: {
        value: cdktf.numberToHclTerraform(this._noCiphersAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_ciphers_passed: {
        value: cdktf.numberToHclTerraform(this._noCiphersPassed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_ciphers_specified: {
        value: cdktf.numberToHclTerraform(this._noCiphersSpecified),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_client_cert_received: {
        value: cdktf.numberToHclTerraform(this._noClientCertReceived),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_compression_specified: {
        value: cdktf.numberToHclTerraform(this._noCompressionSpecified),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_method_specified: {
        value: cdktf.numberToHclTerraform(this._noMethodSpecified),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_private_key_assigned: {
        value: cdktf.numberToHclTerraform(this._noPrivateKeyAssigned),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_privatekey: {
        value: cdktf.numberToHclTerraform(this._noPrivatekey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_protocols_available: {
        value: cdktf.numberToHclTerraform(this._noProtocolsAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_publickey: {
        value: cdktf.numberToHclTerraform(this._noPublickey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_required_digest: {
        value: cdktf.numberToHclTerraform(this._noRequiredDigest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_shared_cipher: {
        value: cdktf.numberToHclTerraform(this._noSharedCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_verify_callback: {
        value: cdktf.numberToHclTerraform(this._noVerifyCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      non_sslv2_initial_packet: {
        value: cdktf.numberToHclTerraform(this._nonSslv2InitialPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      null_ssl_ctx: {
        value: cdktf.numberToHclTerraform(this._nullSslCtx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      null_ssl_method_passed: {
        value: cdktf.numberToHclTerraform(this._nullSslMethodPassed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      old_session_cipher_not_returned: {
        value: cdktf.numberToHclTerraform(this._oldSessionCipherNotReturned),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_length_too_long: {
        value: cdktf.numberToHclTerraform(this._packetLengthTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parse_tlsext: {
        value: cdktf.numberToHclTerraform(this._parseTlsext),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      path_too_long: {
        value: cdktf.numberToHclTerraform(this._pathTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_did_not_return_a_certificate: {
        value: cdktf.numberToHclTerraform(this._peerDidNotReturnACertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_error: {
        value: cdktf.numberToHclTerraform(this._peerError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_error_certificate: {
        value: cdktf.numberToHclTerraform(this._peerErrorCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_error_no_certificate: {
        value: cdktf.numberToHclTerraform(this._peerErrorNoCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_error_no_cipher: {
        value: cdktf.numberToHclTerraform(this._peerErrorNoCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_error_unsupported_certificate_type: {
        value: cdktf.numberToHclTerraform(this._peerErrorUnsupportedCertificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pre_mac_length_too_long: {
        value: cdktf.numberToHclTerraform(this._preMacLengthTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      problems_mapping_cipher_functions: {
        value: cdktf.numberToHclTerraform(this._problemsMappingCipherFunctions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol_is_shutdown: {
        value: cdktf.numberToHclTerraform(this._protocolIsShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_key_encrypt_error: {
        value: cdktf.numberToHclTerraform(this._publicKeyEncryptError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_key_is_not_rsa: {
        value: cdktf.numberToHclTerraform(this._publicKeyIsNotRsa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_key_not_rsa: {
        value: cdktf.numberToHclTerraform(this._publicKeyNotRsa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_bio_not_set: {
        value: cdktf.numberToHclTerraform(this._readBioNotSet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_wrong_packet_type: {
        value: cdktf.numberToHclTerraform(this._readWrongPacketType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_length_mismatch: {
        value: cdktf.numberToHclTerraform(this._recordLengthMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_too_large: {
        value: cdktf.numberToHclTerraform(this._recordTooLarge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_too_small: {
        value: cdktf.numberToHclTerraform(this._recordTooSmall),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      required_cipher_missing: {
        value: cdktf.numberToHclTerraform(this._requiredCipherMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reuse_cert_length_not_zero: {
        value: cdktf.numberToHclTerraform(this._reuseCertLengthNotZero),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reuse_cert_type_not_zero: {
        value: cdktf.numberToHclTerraform(this._reuseCertTypeNotZero),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reuse_cipher_list_not_zero: {
        value: cdktf.numberToHclTerraform(this._reuseCipherListNotZero),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scsv_received_when_renegotiating: {
        value: cdktf.numberToHclTerraform(this._scsvReceivedWhenRenegotiating),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serverhello_tlsext: {
        value: cdktf.numberToHclTerraform(this._serverhelloTlsext),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_id_context_uninitialized: {
        value: cdktf.numberToHclTerraform(this._sessionIdContextUninitialized),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      short_read: {
        value: cdktf.numberToHclTerraform(this._shortRead),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature_for_non_signing_certificate: {
        value: cdktf.numberToHclTerraform(this._signatureForNonSigningCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl23_doing_session_id_reuse: {
        value: cdktf.numberToHclTerraform(this._ssl23DoingSessionIdReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl2_connection_id_too_long: {
        value: cdktf.numberToHclTerraform(this._ssl2ConnectionIdTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl3_ext_invalid_servername: {
        value: cdktf.numberToHclTerraform(this._ssl3ExtInvalidServername),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl3_ext_invalid_servername_type: {
        value: cdktf.numberToHclTerraform(this._ssl3ExtInvalidServernameType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl3_session_id_too_long: {
        value: cdktf.numberToHclTerraform(this._ssl3SessionIdTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl3_session_id_too_short: {
        value: cdktf.numberToHclTerraform(this._ssl3SessionIdTooShort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_ctx_has_no_default_ssl_version: {
        value: cdktf.numberToHclTerraform(this._sslCtxHasNoDefaultSslVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_handshake_failure: {
        value: cdktf.numberToHclTerraform(this._sslHandshakeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_library_has_no_ciphers: {
        value: cdktf.numberToHclTerraform(this._sslLibraryHasNoCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_session_id_callback_failed: {
        value: cdktf.numberToHclTerraform(this._sslSessionIdCallbackFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_session_id_conflict: {
        value: cdktf.numberToHclTerraform(this._sslSessionIdConflict),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_session_id_context_too_long: {
        value: cdktf.numberToHclTerraform(this._sslSessionIdContextTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_session_id_has_bad_length: {
        value: cdktf.numberToHclTerraform(this._sslSessionIdHasBadLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_session_id_is_different: {
        value: cdktf.numberToHclTerraform(this._sslSessionIdIsDifferent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_bad_certificate: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertBadCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_bad_record_mac: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertBadRecordMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_certificate_expired: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertCertificateExpired),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_certificate_revoked: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertCertificateRevoked),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_certificate_unknown: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertCertificateUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_decompression_failure: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertDecompressionFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_handshake_failure: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertHandshakeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_illegal_parameter: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertIllegalParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_no_certificate: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertNoCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_peer_error_cert: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertPeerErrorCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_peer_error_no_cert: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertPeerErrorNoCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_peer_error_no_cipher: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertPeerErrorNoCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_peer_error_unsupp_cert_type: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertPeerErrorUnsuppCertType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_unexpected_msg: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertUnexpectedMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_unknown_remote_err_type: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertUnknownRemoteErrType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslv3_alert_unspported_cert: {
        value: cdktf.numberToHclTerraform(this._sslv3AlertUnspportedCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_client_cert_req_with_anon_cipher: {
        value: cdktf.numberToHclTerraform(this._tlsClientCertReqWithAnonCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_invalid_ecpointformat_list: {
        value: cdktf.numberToHclTerraform(this._tlsInvalidEcpointformatList),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_peer_did_not_respond_with_cert_list: {
        value: cdktf.numberToHclTerraform(this._tlsPeerDidNotRespondWithCertList),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_rsa_encrypted_value_length_is_wrong: {
        value: cdktf.numberToHclTerraform(this._tlsRsaEncryptedValueLengthIsWrong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_access_denied: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertAccessDenied),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_decode_error: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertDecodeError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_decrypt_error: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertDecryptError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_decryption_failed: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertDecryptionFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_export_restriction: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertExportRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_insufficient_security: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertInsufficientSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_internal_error: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertInternalError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_no_renegotiation: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertNoRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_protocol_version: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertProtocolVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_record_overflow: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertRecordOverflow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_unknown_ca: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertUnknownCa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlsv1_alert_user_cancelled: {
        value: cdktf.numberToHclTerraform(this._tlsv1AlertUserCancelled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tried_to_use_unsupported_cipher: {
        value: cdktf.numberToHclTerraform(this._triedToUseUnsupportedCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unable_to_decode_dh_certs: {
        value: cdktf.numberToHclTerraform(this._unableToDecodeDhCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unable_to_extract_public_key: {
        value: cdktf.numberToHclTerraform(this._unableToExtractPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unable_to_find_dh_parameters: {
        value: cdktf.numberToHclTerraform(this._unableToFindDhParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unable_to_find_public_key_parameters: {
        value: cdktf.numberToHclTerraform(this._unableToFindPublicKeyParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unable_to_find_ssl_method: {
        value: cdktf.numberToHclTerraform(this._unableToFindSslMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unable_to_load_ssl2_md5_routines: {
        value: cdktf.numberToHclTerraform(this._unableToLoadSsl2Md5Routines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unable_to_load_ssl3_md5_routines: {
        value: cdktf.numberToHclTerraform(this._unableToLoadSsl3Md5Routines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unable_to_load_ssl3_sha1_routines: {
        value: cdktf.numberToHclTerraform(this._unableToLoadSsl3Sha1Routines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unexpected_message: {
        value: cdktf.numberToHclTerraform(this._unexpectedMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unexpected_record: {
        value: cdktf.numberToHclTerraform(this._unexpectedRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uninitialized: {
        value: cdktf.numberToHclTerraform(this._uninitialized),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_alert_type: {
        value: cdktf.numberToHclTerraform(this._unknownAlertType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_certificate_type: {
        value: cdktf.numberToHclTerraform(this._unknownCertificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_cipher_returned: {
        value: cdktf.numberToHclTerraform(this._unknownCipherReturned),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_cipher_type: {
        value: cdktf.numberToHclTerraform(this._unknownCipherType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_key_exchange_type: {
        value: cdktf.numberToHclTerraform(this._unknownKeyExchangeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_pkey_type: {
        value: cdktf.numberToHclTerraform(this._unknownPkeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_protocol: {
        value: cdktf.numberToHclTerraform(this._unknownProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_remote_error_type: {
        value: cdktf.numberToHclTerraform(this._unknownRemoteErrorType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_ssl_version: {
        value: cdktf.numberToHclTerraform(this._unknownSslVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_state: {
        value: cdktf.numberToHclTerraform(this._unknownState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_cipher: {
        value: cdktf.numberToHclTerraform(this._unsupportedCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_compression_algorithm: {
        value: cdktf.numberToHclTerraform(this._unsupportedCompressionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_digest_type: {
        value: cdktf.numberToHclTerraform(this._unsupportedDigestType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_elliptic_curve: {
        value: cdktf.numberToHclTerraform(this._unsupportedEllipticCurve),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_option: {
        value: cdktf.numberToHclTerraform(this._unsupportedOption),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_protocol: {
        value: cdktf.numberToHclTerraform(this._unsupportedProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_ssl_version: {
        value: cdktf.numberToHclTerraform(this._unsupportedSslVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_status_type: {
        value: cdktf.numberToHclTerraform(this._unsupportedStatusType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_bio_not_set: {
        value: cdktf.numberToHclTerraform(this._writeBioNotSet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wrong_cipher_returned: {
        value: cdktf.numberToHclTerraform(this._wrongCipherReturned),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wrong_counter_of_key_bits: {
        value: cdktf.numberToHclTerraform(this._wrongCounterOfKeyBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wrong_message_type: {
        value: cdktf.numberToHclTerraform(this._wrongMessageType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wrong_signature_length: {
        value: cdktf.numberToHclTerraform(this._wrongSignatureLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wrong_signature_size: {
        value: cdktf.numberToHclTerraform(this._wrongSignatureSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wrong_ssl_version: {
        value: cdktf.numberToHclTerraform(this._wrongSslVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wrong_version_counter: {
        value: cdktf.numberToHclTerraform(this._wrongVersionCounter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      x509_lib: {
        value: cdktf.numberToHclTerraform(this._x509Lib),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      x509_verification_setup_problems: {
        value: cdktf.numberToHclTerraform(this._x509VerificationSetupProblems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
