// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVoipProfileSipAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ack_rate ObjectVoipProfileSipA#ack_rate}
  */
  readonly ackRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ack_rate_track ObjectVoipProfileSipA#ack_rate_track}
  */
  readonly ackRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#adom ObjectVoipProfileSipA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_ack ObjectVoipProfileSipA#block_ack}
  */
  readonly blockAck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_bye ObjectVoipProfileSipA#block_bye}
  */
  readonly blockBye?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_cancel ObjectVoipProfileSipA#block_cancel}
  */
  readonly blockCancel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_geo_red_options ObjectVoipProfileSipA#block_geo_red_options}
  */
  readonly blockGeoRedOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_info ObjectVoipProfileSipA#block_info}
  */
  readonly blockInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_invite ObjectVoipProfileSipA#block_invite}
  */
  readonly blockInvite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_long_lines ObjectVoipProfileSipA#block_long_lines}
  */
  readonly blockLongLines?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_message ObjectVoipProfileSipA#block_message}
  */
  readonly blockMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_notify ObjectVoipProfileSipA#block_notify}
  */
  readonly blockNotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_options ObjectVoipProfileSipA#block_options}
  */
  readonly blockOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_prack ObjectVoipProfileSipA#block_prack}
  */
  readonly blockPrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_publish ObjectVoipProfileSipA#block_publish}
  */
  readonly blockPublish?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_refer ObjectVoipProfileSipA#block_refer}
  */
  readonly blockRefer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_register ObjectVoipProfileSipA#block_register}
  */
  readonly blockRegister?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_subscribe ObjectVoipProfileSipA#block_subscribe}
  */
  readonly blockSubscribe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_unknown ObjectVoipProfileSipA#block_unknown}
  */
  readonly blockUnknown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#block_update ObjectVoipProfileSipA#block_update}
  */
  readonly blockUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#bye_rate ObjectVoipProfileSipA#bye_rate}
  */
  readonly byeRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#bye_rate_track ObjectVoipProfileSipA#bye_rate_track}
  */
  readonly byeRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#call_id_regex ObjectVoipProfileSipA#call_id_regex}
  */
  readonly callIdRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#call_keepalive ObjectVoipProfileSipA#call_keepalive}
  */
  readonly callKeepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#cancel_rate ObjectVoipProfileSipA#cancel_rate}
  */
  readonly cancelRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#cancel_rate_track ObjectVoipProfileSipA#cancel_rate_track}
  */
  readonly cancelRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#contact_fixup ObjectVoipProfileSipA#contact_fixup}
  */
  readonly contactFixup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#content_type_regex ObjectVoipProfileSipA#content_type_regex}
  */
  readonly contentTypeRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#hnt_restrict_source_ip ObjectVoipProfileSipA#hnt_restrict_source_ip}
  */
  readonly hntRestrictSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#hosted_nat_traversal ObjectVoipProfileSipA#hosted_nat_traversal}
  */
  readonly hostedNatTraversal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#id ObjectVoipProfileSipA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#info_rate ObjectVoipProfileSipA#info_rate}
  */
  readonly infoRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#info_rate_track ObjectVoipProfileSipA#info_rate_track}
  */
  readonly infoRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#invite_rate ObjectVoipProfileSipA#invite_rate}
  */
  readonly inviteRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#invite_rate_track ObjectVoipProfileSipA#invite_rate_track}
  */
  readonly inviteRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ips_rtp ObjectVoipProfileSipA#ips_rtp}
  */
  readonly ipsRtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#log_call_summary ObjectVoipProfileSipA#log_call_summary}
  */
  readonly logCallSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#log_violations ObjectVoipProfileSipA#log_violations}
  */
  readonly logViolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_allow ObjectVoipProfileSipA#malformed_header_allow}
  */
  readonly malformedHeaderAllow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_call_id ObjectVoipProfileSipA#malformed_header_call_id}
  */
  readonly malformedHeaderCallId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_contact ObjectVoipProfileSipA#malformed_header_contact}
  */
  readonly malformedHeaderContact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_content_length ObjectVoipProfileSipA#malformed_header_content_length}
  */
  readonly malformedHeaderContentLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_content_type ObjectVoipProfileSipA#malformed_header_content_type}
  */
  readonly malformedHeaderContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_cseq ObjectVoipProfileSipA#malformed_header_cseq}
  */
  readonly malformedHeaderCseq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_expires ObjectVoipProfileSipA#malformed_header_expires}
  */
  readonly malformedHeaderExpires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_from ObjectVoipProfileSipA#malformed_header_from}
  */
  readonly malformedHeaderFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_max_forwards ObjectVoipProfileSipA#malformed_header_max_forwards}
  */
  readonly malformedHeaderMaxForwards?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_no_proxy_require ObjectVoipProfileSipA#malformed_header_no_proxy_require}
  */
  readonly malformedHeaderNoProxyRequire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_no_require ObjectVoipProfileSipA#malformed_header_no_require}
  */
  readonly malformedHeaderNoRequire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_p_asserted_identity ObjectVoipProfileSipA#malformed_header_p_asserted_identity}
  */
  readonly malformedHeaderPAssertedIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_rack ObjectVoipProfileSipA#malformed_header_rack}
  */
  readonly malformedHeaderRack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_record_route ObjectVoipProfileSipA#malformed_header_record_route}
  */
  readonly malformedHeaderRecordRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_route ObjectVoipProfileSipA#malformed_header_route}
  */
  readonly malformedHeaderRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_rseq ObjectVoipProfileSipA#malformed_header_rseq}
  */
  readonly malformedHeaderRseq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_a ObjectVoipProfileSipA#malformed_header_sdp_a}
  */
  readonly malformedHeaderSdpA?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_b ObjectVoipProfileSipA#malformed_header_sdp_b}
  */
  readonly malformedHeaderSdpB?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_c ObjectVoipProfileSipA#malformed_header_sdp_c}
  */
  readonly malformedHeaderSdpC?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_i ObjectVoipProfileSipA#malformed_header_sdp_i}
  */
  readonly malformedHeaderSdpI?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_k ObjectVoipProfileSipA#malformed_header_sdp_k}
  */
  readonly malformedHeaderSdpK?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_m ObjectVoipProfileSipA#malformed_header_sdp_m}
  */
  readonly malformedHeaderSdpM?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_o ObjectVoipProfileSipA#malformed_header_sdp_o}
  */
  readonly malformedHeaderSdpO?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_r ObjectVoipProfileSipA#malformed_header_sdp_r}
  */
  readonly malformedHeaderSdpR?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_s ObjectVoipProfileSipA#malformed_header_sdp_s}
  */
  readonly malformedHeaderSdpS?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_t ObjectVoipProfileSipA#malformed_header_sdp_t}
  */
  readonly malformedHeaderSdpT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_v ObjectVoipProfileSipA#malformed_header_sdp_v}
  */
  readonly malformedHeaderSdpV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_sdp_z ObjectVoipProfileSipA#malformed_header_sdp_z}
  */
  readonly malformedHeaderSdpZ?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_to ObjectVoipProfileSipA#malformed_header_to}
  */
  readonly malformedHeaderTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_header_via ObjectVoipProfileSipA#malformed_header_via}
  */
  readonly malformedHeaderVia?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#malformed_request_line ObjectVoipProfileSipA#malformed_request_line}
  */
  readonly malformedRequestLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#max_body_length ObjectVoipProfileSipA#max_body_length}
  */
  readonly maxBodyLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#max_dialogs ObjectVoipProfileSipA#max_dialogs}
  */
  readonly maxDialogs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#max_idle_dialogs ObjectVoipProfileSipA#max_idle_dialogs}
  */
  readonly maxIdleDialogs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#max_line_length ObjectVoipProfileSipA#max_line_length}
  */
  readonly maxLineLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#message_rate ObjectVoipProfileSipA#message_rate}
  */
  readonly messageRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#message_rate_track ObjectVoipProfileSipA#message_rate_track}
  */
  readonly messageRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#nat_port_range ObjectVoipProfileSipA#nat_port_range}
  */
  readonly natPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#nat_trace ObjectVoipProfileSipA#nat_trace}
  */
  readonly natTrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#no_sdp_fixup ObjectVoipProfileSipA#no_sdp_fixup}
  */
  readonly noSdpFixup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#notify_rate ObjectVoipProfileSipA#notify_rate}
  */
  readonly notifyRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#notify_rate_track ObjectVoipProfileSipA#notify_rate_track}
  */
  readonly notifyRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#open_contact_pinhole ObjectVoipProfileSipA#open_contact_pinhole}
  */
  readonly openContactPinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#open_record_route_pinhole ObjectVoipProfileSipA#open_record_route_pinhole}
  */
  readonly openRecordRoutePinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#open_register_pinhole ObjectVoipProfileSipA#open_register_pinhole}
  */
  readonly openRegisterPinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#open_via_pinhole ObjectVoipProfileSipA#open_via_pinhole}
  */
  readonly openViaPinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#options_rate ObjectVoipProfileSipA#options_rate}
  */
  readonly optionsRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#options_rate_track ObjectVoipProfileSipA#options_rate_track}
  */
  readonly optionsRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#prack_rate ObjectVoipProfileSipA#prack_rate}
  */
  readonly prackRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#prack_rate_track ObjectVoipProfileSipA#prack_rate_track}
  */
  readonly prackRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#preserve_override ObjectVoipProfileSipA#preserve_override}
  */
  readonly preserveOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#profile ObjectVoipProfileSipA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#provisional_invite_expiry_time ObjectVoipProfileSipA#provisional_invite_expiry_time}
  */
  readonly provisionalInviteExpiryTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#publish_rate ObjectVoipProfileSipA#publish_rate}
  */
  readonly publishRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#publish_rate_track ObjectVoipProfileSipA#publish_rate_track}
  */
  readonly publishRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#refer_rate ObjectVoipProfileSipA#refer_rate}
  */
  readonly referRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#refer_rate_track ObjectVoipProfileSipA#refer_rate_track}
  */
  readonly referRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#register_contact_trace ObjectVoipProfileSipA#register_contact_trace}
  */
  readonly registerContactTrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#register_rate ObjectVoipProfileSipA#register_rate}
  */
  readonly registerRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#register_rate_track ObjectVoipProfileSipA#register_rate_track}
  */
  readonly registerRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#rfc2543_branch ObjectVoipProfileSipA#rfc2543_branch}
  */
  readonly rfc2543Branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#rtp ObjectVoipProfileSipA#rtp}
  */
  readonly rtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#scopetype ObjectVoipProfileSipA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_algorithm ObjectVoipProfileSipA#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_auth_client ObjectVoipProfileSipA#ssl_auth_client}
  */
  readonly sslAuthClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_auth_server ObjectVoipProfileSipA#ssl_auth_server}
  */
  readonly sslAuthServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_client_certificate ObjectVoipProfileSipA#ssl_client_certificate}
  */
  readonly sslClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_client_renegotiation ObjectVoipProfileSipA#ssl_client_renegotiation}
  */
  readonly sslClientRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_max_version ObjectVoipProfileSipA#ssl_max_version}
  */
  readonly sslMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_min_version ObjectVoipProfileSipA#ssl_min_version}
  */
  readonly sslMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_mode ObjectVoipProfileSipA#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_pfs ObjectVoipProfileSipA#ssl_pfs}
  */
  readonly sslPfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_send_empty_frags ObjectVoipProfileSipA#ssl_send_empty_frags}
  */
  readonly sslSendEmptyFrags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#ssl_server_certificate ObjectVoipProfileSipA#ssl_server_certificate}
  */
  readonly sslServerCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#status ObjectVoipProfileSipA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#strict_register ObjectVoipProfileSipA#strict_register}
  */
  readonly strictRegister?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#subscribe_rate ObjectVoipProfileSipA#subscribe_rate}
  */
  readonly subscribeRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#subscribe_rate_track ObjectVoipProfileSipA#subscribe_rate_track}
  */
  readonly subscribeRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#unknown_header ObjectVoipProfileSipA#unknown_header}
  */
  readonly unknownHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#update_rate ObjectVoipProfileSipA#update_rate}
  */
  readonly updateRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#update_rate_track ObjectVoipProfileSipA#update_rate_track}
  */
  readonly updateRateTrack?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip fortimanager_object_voip_profile_sip}
*/
export class ObjectVoipProfileSipA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_voip_profile_sip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVoipProfileSipA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVoipProfileSipA to import
  * @param importFromId The id of the existing ObjectVoipProfileSipA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVoipProfileSipA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_voip_profile_sip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_voip_profile_sip fortimanager_object_voip_profile_sip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVoipProfileSipAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectVoipProfileSipAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_voip_profile_sip',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ackRate = config.ackRate;
    this._ackRateTrack = config.ackRateTrack;
    this._adom = config.adom;
    this._blockAck = config.blockAck;
    this._blockBye = config.blockBye;
    this._blockCancel = config.blockCancel;
    this._blockGeoRedOptions = config.blockGeoRedOptions;
    this._blockInfo = config.blockInfo;
    this._blockInvite = config.blockInvite;
    this._blockLongLines = config.blockLongLines;
    this._blockMessage = config.blockMessage;
    this._blockNotify = config.blockNotify;
    this._blockOptions = config.blockOptions;
    this._blockPrack = config.blockPrack;
    this._blockPublish = config.blockPublish;
    this._blockRefer = config.blockRefer;
    this._blockRegister = config.blockRegister;
    this._blockSubscribe = config.blockSubscribe;
    this._blockUnknown = config.blockUnknown;
    this._blockUpdate = config.blockUpdate;
    this._byeRate = config.byeRate;
    this._byeRateTrack = config.byeRateTrack;
    this._callIdRegex = config.callIdRegex;
    this._callKeepalive = config.callKeepalive;
    this._cancelRate = config.cancelRate;
    this._cancelRateTrack = config.cancelRateTrack;
    this._contactFixup = config.contactFixup;
    this._contentTypeRegex = config.contentTypeRegex;
    this._hntRestrictSourceIp = config.hntRestrictSourceIp;
    this._hostedNatTraversal = config.hostedNatTraversal;
    this._id = config.id;
    this._infoRate = config.infoRate;
    this._infoRateTrack = config.infoRateTrack;
    this._inviteRate = config.inviteRate;
    this._inviteRateTrack = config.inviteRateTrack;
    this._ipsRtp = config.ipsRtp;
    this._logCallSummary = config.logCallSummary;
    this._logViolations = config.logViolations;
    this._malformedHeaderAllow = config.malformedHeaderAllow;
    this._malformedHeaderCallId = config.malformedHeaderCallId;
    this._malformedHeaderContact = config.malformedHeaderContact;
    this._malformedHeaderContentLength = config.malformedHeaderContentLength;
    this._malformedHeaderContentType = config.malformedHeaderContentType;
    this._malformedHeaderCseq = config.malformedHeaderCseq;
    this._malformedHeaderExpires = config.malformedHeaderExpires;
    this._malformedHeaderFrom = config.malformedHeaderFrom;
    this._malformedHeaderMaxForwards = config.malformedHeaderMaxForwards;
    this._malformedHeaderNoProxyRequire = config.malformedHeaderNoProxyRequire;
    this._malformedHeaderNoRequire = config.malformedHeaderNoRequire;
    this._malformedHeaderPAssertedIdentity = config.malformedHeaderPAssertedIdentity;
    this._malformedHeaderRack = config.malformedHeaderRack;
    this._malformedHeaderRecordRoute = config.malformedHeaderRecordRoute;
    this._malformedHeaderRoute = config.malformedHeaderRoute;
    this._malformedHeaderRseq = config.malformedHeaderRseq;
    this._malformedHeaderSdpA = config.malformedHeaderSdpA;
    this._malformedHeaderSdpB = config.malformedHeaderSdpB;
    this._malformedHeaderSdpC = config.malformedHeaderSdpC;
    this._malformedHeaderSdpI = config.malformedHeaderSdpI;
    this._malformedHeaderSdpK = config.malformedHeaderSdpK;
    this._malformedHeaderSdpM = config.malformedHeaderSdpM;
    this._malformedHeaderSdpO = config.malformedHeaderSdpO;
    this._malformedHeaderSdpR = config.malformedHeaderSdpR;
    this._malformedHeaderSdpS = config.malformedHeaderSdpS;
    this._malformedHeaderSdpT = config.malformedHeaderSdpT;
    this._malformedHeaderSdpV = config.malformedHeaderSdpV;
    this._malformedHeaderSdpZ = config.malformedHeaderSdpZ;
    this._malformedHeaderTo = config.malformedHeaderTo;
    this._malformedHeaderVia = config.malformedHeaderVia;
    this._malformedRequestLine = config.malformedRequestLine;
    this._maxBodyLength = config.maxBodyLength;
    this._maxDialogs = config.maxDialogs;
    this._maxIdleDialogs = config.maxIdleDialogs;
    this._maxLineLength = config.maxLineLength;
    this._messageRate = config.messageRate;
    this._messageRateTrack = config.messageRateTrack;
    this._natPortRange = config.natPortRange;
    this._natTrace = config.natTrace;
    this._noSdpFixup = config.noSdpFixup;
    this._notifyRate = config.notifyRate;
    this._notifyRateTrack = config.notifyRateTrack;
    this._openContactPinhole = config.openContactPinhole;
    this._openRecordRoutePinhole = config.openRecordRoutePinhole;
    this._openRegisterPinhole = config.openRegisterPinhole;
    this._openViaPinhole = config.openViaPinhole;
    this._optionsRate = config.optionsRate;
    this._optionsRateTrack = config.optionsRateTrack;
    this._prackRate = config.prackRate;
    this._prackRateTrack = config.prackRateTrack;
    this._preserveOverride = config.preserveOverride;
    this._profile = config.profile;
    this._provisionalInviteExpiryTime = config.provisionalInviteExpiryTime;
    this._publishRate = config.publishRate;
    this._publishRateTrack = config.publishRateTrack;
    this._referRate = config.referRate;
    this._referRateTrack = config.referRateTrack;
    this._registerContactTrace = config.registerContactTrace;
    this._registerRate = config.registerRate;
    this._registerRateTrack = config.registerRateTrack;
    this._rfc2543Branch = config.rfc2543Branch;
    this._rtp = config.rtp;
    this._scopetype = config.scopetype;
    this._sslAlgorithm = config.sslAlgorithm;
    this._sslAuthClient = config.sslAuthClient;
    this._sslAuthServer = config.sslAuthServer;
    this._sslClientCertificate = config.sslClientCertificate;
    this._sslClientRenegotiation = config.sslClientRenegotiation;
    this._sslMaxVersion = config.sslMaxVersion;
    this._sslMinVersion = config.sslMinVersion;
    this._sslMode = config.sslMode;
    this._sslPfs = config.sslPfs;
    this._sslSendEmptyFrags = config.sslSendEmptyFrags;
    this._sslServerCertificate = config.sslServerCertificate;
    this._status = config.status;
    this._strictRegister = config.strictRegister;
    this._subscribeRate = config.subscribeRate;
    this._subscribeRateTrack = config.subscribeRateTrack;
    this._unknownHeader = config.unknownHeader;
    this._updateRate = config.updateRate;
    this._updateRateTrack = config.updateRateTrack;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_rate - computed: false, optional: true, required: false
  private _ackRate?: number; 
  public get ackRate() {
    return this.getNumberAttribute('ack_rate');
  }
  public set ackRate(value: number) {
    this._ackRate = value;
  }
  public resetAckRate() {
    this._ackRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRateInput() {
    return this._ackRate;
  }

  // ack_rate_track - computed: true, optional: true, required: false
  private _ackRateTrack?: string; 
  public get ackRateTrack() {
    return this.getStringAttribute('ack_rate_track');
  }
  public set ackRateTrack(value: string) {
    this._ackRateTrack = value;
  }
  public resetAckRateTrack() {
    this._ackRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRateTrackInput() {
    return this._ackRateTrack;
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

  // block_ack - computed: true, optional: true, required: false
  private _blockAck?: string; 
  public get blockAck() {
    return this.getStringAttribute('block_ack');
  }
  public set blockAck(value: string) {
    this._blockAck = value;
  }
  public resetBlockAck() {
    this._blockAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAckInput() {
    return this._blockAck;
  }

  // block_bye - computed: true, optional: true, required: false
  private _blockBye?: string; 
  public get blockBye() {
    return this.getStringAttribute('block_bye');
  }
  public set blockBye(value: string) {
    this._blockBye = value;
  }
  public resetBlockBye() {
    this._blockBye = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockByeInput() {
    return this._blockBye;
  }

  // block_cancel - computed: true, optional: true, required: false
  private _blockCancel?: string; 
  public get blockCancel() {
    return this.getStringAttribute('block_cancel');
  }
  public set blockCancel(value: string) {
    this._blockCancel = value;
  }
  public resetBlockCancel() {
    this._blockCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockCancelInput() {
    return this._blockCancel;
  }

  // block_geo_red_options - computed: true, optional: true, required: false
  private _blockGeoRedOptions?: string; 
  public get blockGeoRedOptions() {
    return this.getStringAttribute('block_geo_red_options');
  }
  public set blockGeoRedOptions(value: string) {
    this._blockGeoRedOptions = value;
  }
  public resetBlockGeoRedOptions() {
    this._blockGeoRedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockGeoRedOptionsInput() {
    return this._blockGeoRedOptions;
  }

  // block_info - computed: true, optional: true, required: false
  private _blockInfo?: string; 
  public get blockInfo() {
    return this.getStringAttribute('block_info');
  }
  public set blockInfo(value: string) {
    this._blockInfo = value;
  }
  public resetBlockInfo() {
    this._blockInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInfoInput() {
    return this._blockInfo;
  }

  // block_invite - computed: true, optional: true, required: false
  private _blockInvite?: string; 
  public get blockInvite() {
    return this.getStringAttribute('block_invite');
  }
  public set blockInvite(value: string) {
    this._blockInvite = value;
  }
  public resetBlockInvite() {
    this._blockInvite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInviteInput() {
    return this._blockInvite;
  }

  // block_long_lines - computed: true, optional: true, required: false
  private _blockLongLines?: string; 
  public get blockLongLines() {
    return this.getStringAttribute('block_long_lines');
  }
  public set blockLongLines(value: string) {
    this._blockLongLines = value;
  }
  public resetBlockLongLines() {
    this._blockLongLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockLongLinesInput() {
    return this._blockLongLines;
  }

  // block_message - computed: true, optional: true, required: false
  private _blockMessage?: string; 
  public get blockMessage() {
    return this.getStringAttribute('block_message');
  }
  public set blockMessage(value: string) {
    this._blockMessage = value;
  }
  public resetBlockMessage() {
    this._blockMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMessageInput() {
    return this._blockMessage;
  }

  // block_notify - computed: true, optional: true, required: false
  private _blockNotify?: string; 
  public get blockNotify() {
    return this.getStringAttribute('block_notify');
  }
  public set blockNotify(value: string) {
    this._blockNotify = value;
  }
  public resetBlockNotify() {
    this._blockNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNotifyInput() {
    return this._blockNotify;
  }

  // block_options - computed: true, optional: true, required: false
  private _blockOptions?: string; 
  public get blockOptions() {
    return this.getStringAttribute('block_options');
  }
  public set blockOptions(value: string) {
    this._blockOptions = value;
  }
  public resetBlockOptions() {
    this._blockOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOptionsInput() {
    return this._blockOptions;
  }

  // block_prack - computed: true, optional: true, required: false
  private _blockPrack?: string; 
  public get blockPrack() {
    return this.getStringAttribute('block_prack');
  }
  public set blockPrack(value: string) {
    this._blockPrack = value;
  }
  public resetBlockPrack() {
    this._blockPrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPrackInput() {
    return this._blockPrack;
  }

  // block_publish - computed: true, optional: true, required: false
  private _blockPublish?: string; 
  public get blockPublish() {
    return this.getStringAttribute('block_publish');
  }
  public set blockPublish(value: string) {
    this._blockPublish = value;
  }
  public resetBlockPublish() {
    this._blockPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublishInput() {
    return this._blockPublish;
  }

  // block_refer - computed: true, optional: true, required: false
  private _blockRefer?: string; 
  public get blockRefer() {
    return this.getStringAttribute('block_refer');
  }
  public set blockRefer(value: string) {
    this._blockRefer = value;
  }
  public resetBlockRefer() {
    this._blockRefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockReferInput() {
    return this._blockRefer;
  }

  // block_register - computed: true, optional: true, required: false
  private _blockRegister?: string; 
  public get blockRegister() {
    return this.getStringAttribute('block_register');
  }
  public set blockRegister(value: string) {
    this._blockRegister = value;
  }
  public resetBlockRegister() {
    this._blockRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockRegisterInput() {
    return this._blockRegister;
  }

  // block_subscribe - computed: true, optional: true, required: false
  private _blockSubscribe?: string; 
  public get blockSubscribe() {
    return this.getStringAttribute('block_subscribe');
  }
  public set blockSubscribe(value: string) {
    this._blockSubscribe = value;
  }
  public resetBlockSubscribe() {
    this._blockSubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSubscribeInput() {
    return this._blockSubscribe;
  }

  // block_unknown - computed: true, optional: true, required: false
  private _blockUnknown?: string; 
  public get blockUnknown() {
    return this.getStringAttribute('block_unknown');
  }
  public set blockUnknown(value: string) {
    this._blockUnknown = value;
  }
  public resetBlockUnknown() {
    this._blockUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnknownInput() {
    return this._blockUnknown;
  }

  // block_update - computed: true, optional: true, required: false
  private _blockUpdate?: string; 
  public get blockUpdate() {
    return this.getStringAttribute('block_update');
  }
  public set blockUpdate(value: string) {
    this._blockUpdate = value;
  }
  public resetBlockUpdate() {
    this._blockUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUpdateInput() {
    return this._blockUpdate;
  }

  // bye_rate - computed: false, optional: true, required: false
  private _byeRate?: number; 
  public get byeRate() {
    return this.getNumberAttribute('bye_rate');
  }
  public set byeRate(value: number) {
    this._byeRate = value;
  }
  public resetByeRate() {
    this._byeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byeRateInput() {
    return this._byeRate;
  }

  // bye_rate_track - computed: true, optional: true, required: false
  private _byeRateTrack?: string; 
  public get byeRateTrack() {
    return this.getStringAttribute('bye_rate_track');
  }
  public set byeRateTrack(value: string) {
    this._byeRateTrack = value;
  }
  public resetByeRateTrack() {
    this._byeRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byeRateTrackInput() {
    return this._byeRateTrack;
  }

  // call_id_regex - computed: false, optional: true, required: false
  private _callIdRegex?: string; 
  public get callIdRegex() {
    return this.getStringAttribute('call_id_regex');
  }
  public set callIdRegex(value: string) {
    this._callIdRegex = value;
  }
  public resetCallIdRegex() {
    this._callIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callIdRegexInput() {
    return this._callIdRegex;
  }

  // call_keepalive - computed: false, optional: true, required: false
  private _callKeepalive?: number; 
  public get callKeepalive() {
    return this.getNumberAttribute('call_keepalive');
  }
  public set callKeepalive(value: number) {
    this._callKeepalive = value;
  }
  public resetCallKeepalive() {
    this._callKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callKeepaliveInput() {
    return this._callKeepalive;
  }

  // cancel_rate - computed: false, optional: true, required: false
  private _cancelRate?: number; 
  public get cancelRate() {
    return this.getNumberAttribute('cancel_rate');
  }
  public set cancelRate(value: number) {
    this._cancelRate = value;
  }
  public resetCancelRate() {
    this._cancelRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelRateInput() {
    return this._cancelRate;
  }

  // cancel_rate_track - computed: true, optional: true, required: false
  private _cancelRateTrack?: string; 
  public get cancelRateTrack() {
    return this.getStringAttribute('cancel_rate_track');
  }
  public set cancelRateTrack(value: string) {
    this._cancelRateTrack = value;
  }
  public resetCancelRateTrack() {
    this._cancelRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelRateTrackInput() {
    return this._cancelRateTrack;
  }

  // contact_fixup - computed: true, optional: true, required: false
  private _contactFixup?: string; 
  public get contactFixup() {
    return this.getStringAttribute('contact_fixup');
  }
  public set contactFixup(value: string) {
    this._contactFixup = value;
  }
  public resetContactFixup() {
    this._contactFixup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactFixupInput() {
    return this._contactFixup;
  }

  // content_type_regex - computed: false, optional: true, required: false
  private _contentTypeRegex?: string; 
  public get contentTypeRegex() {
    return this.getStringAttribute('content_type_regex');
  }
  public set contentTypeRegex(value: string) {
    this._contentTypeRegex = value;
  }
  public resetContentTypeRegex() {
    this._contentTypeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeRegexInput() {
    return this._contentTypeRegex;
  }

  // hnt_restrict_source_ip - computed: true, optional: true, required: false
  private _hntRestrictSourceIp?: string; 
  public get hntRestrictSourceIp() {
    return this.getStringAttribute('hnt_restrict_source_ip');
  }
  public set hntRestrictSourceIp(value: string) {
    this._hntRestrictSourceIp = value;
  }
  public resetHntRestrictSourceIp() {
    this._hntRestrictSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hntRestrictSourceIpInput() {
    return this._hntRestrictSourceIp;
  }

  // hosted_nat_traversal - computed: true, optional: true, required: false
  private _hostedNatTraversal?: string; 
  public get hostedNatTraversal() {
    return this.getStringAttribute('hosted_nat_traversal');
  }
  public set hostedNatTraversal(value: string) {
    this._hostedNatTraversal = value;
  }
  public resetHostedNatTraversal() {
    this._hostedNatTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedNatTraversalInput() {
    return this._hostedNatTraversal;
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

  // info_rate - computed: false, optional: true, required: false
  private _infoRate?: number; 
  public get infoRate() {
    return this.getNumberAttribute('info_rate');
  }
  public set infoRate(value: number) {
    this._infoRate = value;
  }
  public resetInfoRate() {
    this._infoRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoRateInput() {
    return this._infoRate;
  }

  // info_rate_track - computed: true, optional: true, required: false
  private _infoRateTrack?: string; 
  public get infoRateTrack() {
    return this.getStringAttribute('info_rate_track');
  }
  public set infoRateTrack(value: string) {
    this._infoRateTrack = value;
  }
  public resetInfoRateTrack() {
    this._infoRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoRateTrackInput() {
    return this._infoRateTrack;
  }

  // invite_rate - computed: false, optional: true, required: false
  private _inviteRate?: number; 
  public get inviteRate() {
    return this.getNumberAttribute('invite_rate');
  }
  public set inviteRate(value: number) {
    this._inviteRate = value;
  }
  public resetInviteRate() {
    this._inviteRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteRateInput() {
    return this._inviteRate;
  }

  // invite_rate_track - computed: true, optional: true, required: false
  private _inviteRateTrack?: string; 
  public get inviteRateTrack() {
    return this.getStringAttribute('invite_rate_track');
  }
  public set inviteRateTrack(value: string) {
    this._inviteRateTrack = value;
  }
  public resetInviteRateTrack() {
    this._inviteRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteRateTrackInput() {
    return this._inviteRateTrack;
  }

  // ips_rtp - computed: true, optional: true, required: false
  private _ipsRtp?: string; 
  public get ipsRtp() {
    return this.getStringAttribute('ips_rtp');
  }
  public set ipsRtp(value: string) {
    this._ipsRtp = value;
  }
  public resetIpsRtp() {
    this._ipsRtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsRtpInput() {
    return this._ipsRtp;
  }

  // log_call_summary - computed: true, optional: true, required: false
  private _logCallSummary?: string; 
  public get logCallSummary() {
    return this.getStringAttribute('log_call_summary');
  }
  public set logCallSummary(value: string) {
    this._logCallSummary = value;
  }
  public resetLogCallSummary() {
    this._logCallSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCallSummaryInput() {
    return this._logCallSummary;
  }

  // log_violations - computed: true, optional: true, required: false
  private _logViolations?: string; 
  public get logViolations() {
    return this.getStringAttribute('log_violations');
  }
  public set logViolations(value: string) {
    this._logViolations = value;
  }
  public resetLogViolations() {
    this._logViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logViolationsInput() {
    return this._logViolations;
  }

  // malformed_header_allow - computed: true, optional: true, required: false
  private _malformedHeaderAllow?: string; 
  public get malformedHeaderAllow() {
    return this.getStringAttribute('malformed_header_allow');
  }
  public set malformedHeaderAllow(value: string) {
    this._malformedHeaderAllow = value;
  }
  public resetMalformedHeaderAllow() {
    this._malformedHeaderAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderAllowInput() {
    return this._malformedHeaderAllow;
  }

  // malformed_header_call_id - computed: true, optional: true, required: false
  private _malformedHeaderCallId?: string; 
  public get malformedHeaderCallId() {
    return this.getStringAttribute('malformed_header_call_id');
  }
  public set malformedHeaderCallId(value: string) {
    this._malformedHeaderCallId = value;
  }
  public resetMalformedHeaderCallId() {
    this._malformedHeaderCallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderCallIdInput() {
    return this._malformedHeaderCallId;
  }

  // malformed_header_contact - computed: true, optional: true, required: false
  private _malformedHeaderContact?: string; 
  public get malformedHeaderContact() {
    return this.getStringAttribute('malformed_header_contact');
  }
  public set malformedHeaderContact(value: string) {
    this._malformedHeaderContact = value;
  }
  public resetMalformedHeaderContact() {
    this._malformedHeaderContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderContactInput() {
    return this._malformedHeaderContact;
  }

  // malformed_header_content_length - computed: true, optional: true, required: false
  private _malformedHeaderContentLength?: string; 
  public get malformedHeaderContentLength() {
    return this.getStringAttribute('malformed_header_content_length');
  }
  public set malformedHeaderContentLength(value: string) {
    this._malformedHeaderContentLength = value;
  }
  public resetMalformedHeaderContentLength() {
    this._malformedHeaderContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderContentLengthInput() {
    return this._malformedHeaderContentLength;
  }

  // malformed_header_content_type - computed: true, optional: true, required: false
  private _malformedHeaderContentType?: string; 
  public get malformedHeaderContentType() {
    return this.getStringAttribute('malformed_header_content_type');
  }
  public set malformedHeaderContentType(value: string) {
    this._malformedHeaderContentType = value;
  }
  public resetMalformedHeaderContentType() {
    this._malformedHeaderContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderContentTypeInput() {
    return this._malformedHeaderContentType;
  }

  // malformed_header_cseq - computed: true, optional: true, required: false
  private _malformedHeaderCseq?: string; 
  public get malformedHeaderCseq() {
    return this.getStringAttribute('malformed_header_cseq');
  }
  public set malformedHeaderCseq(value: string) {
    this._malformedHeaderCseq = value;
  }
  public resetMalformedHeaderCseq() {
    this._malformedHeaderCseq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderCseqInput() {
    return this._malformedHeaderCseq;
  }

  // malformed_header_expires - computed: true, optional: true, required: false
  private _malformedHeaderExpires?: string; 
  public get malformedHeaderExpires() {
    return this.getStringAttribute('malformed_header_expires');
  }
  public set malformedHeaderExpires(value: string) {
    this._malformedHeaderExpires = value;
  }
  public resetMalformedHeaderExpires() {
    this._malformedHeaderExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderExpiresInput() {
    return this._malformedHeaderExpires;
  }

  // malformed_header_from - computed: true, optional: true, required: false
  private _malformedHeaderFrom?: string; 
  public get malformedHeaderFrom() {
    return this.getStringAttribute('malformed_header_from');
  }
  public set malformedHeaderFrom(value: string) {
    this._malformedHeaderFrom = value;
  }
  public resetMalformedHeaderFrom() {
    this._malformedHeaderFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderFromInput() {
    return this._malformedHeaderFrom;
  }

  // malformed_header_max_forwards - computed: true, optional: true, required: false
  private _malformedHeaderMaxForwards?: string; 
  public get malformedHeaderMaxForwards() {
    return this.getStringAttribute('malformed_header_max_forwards');
  }
  public set malformedHeaderMaxForwards(value: string) {
    this._malformedHeaderMaxForwards = value;
  }
  public resetMalformedHeaderMaxForwards() {
    this._malformedHeaderMaxForwards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderMaxForwardsInput() {
    return this._malformedHeaderMaxForwards;
  }

  // malformed_header_no_proxy_require - computed: true, optional: true, required: false
  private _malformedHeaderNoProxyRequire?: string; 
  public get malformedHeaderNoProxyRequire() {
    return this.getStringAttribute('malformed_header_no_proxy_require');
  }
  public set malformedHeaderNoProxyRequire(value: string) {
    this._malformedHeaderNoProxyRequire = value;
  }
  public resetMalformedHeaderNoProxyRequire() {
    this._malformedHeaderNoProxyRequire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderNoProxyRequireInput() {
    return this._malformedHeaderNoProxyRequire;
  }

  // malformed_header_no_require - computed: true, optional: true, required: false
  private _malformedHeaderNoRequire?: string; 
  public get malformedHeaderNoRequire() {
    return this.getStringAttribute('malformed_header_no_require');
  }
  public set malformedHeaderNoRequire(value: string) {
    this._malformedHeaderNoRequire = value;
  }
  public resetMalformedHeaderNoRequire() {
    this._malformedHeaderNoRequire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderNoRequireInput() {
    return this._malformedHeaderNoRequire;
  }

  // malformed_header_p_asserted_identity - computed: true, optional: true, required: false
  private _malformedHeaderPAssertedIdentity?: string; 
  public get malformedHeaderPAssertedIdentity() {
    return this.getStringAttribute('malformed_header_p_asserted_identity');
  }
  public set malformedHeaderPAssertedIdentity(value: string) {
    this._malformedHeaderPAssertedIdentity = value;
  }
  public resetMalformedHeaderPAssertedIdentity() {
    this._malformedHeaderPAssertedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderPAssertedIdentityInput() {
    return this._malformedHeaderPAssertedIdentity;
  }

  // malformed_header_rack - computed: true, optional: true, required: false
  private _malformedHeaderRack?: string; 
  public get malformedHeaderRack() {
    return this.getStringAttribute('malformed_header_rack');
  }
  public set malformedHeaderRack(value: string) {
    this._malformedHeaderRack = value;
  }
  public resetMalformedHeaderRack() {
    this._malformedHeaderRack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderRackInput() {
    return this._malformedHeaderRack;
  }

  // malformed_header_record_route - computed: true, optional: true, required: false
  private _malformedHeaderRecordRoute?: string; 
  public get malformedHeaderRecordRoute() {
    return this.getStringAttribute('malformed_header_record_route');
  }
  public set malformedHeaderRecordRoute(value: string) {
    this._malformedHeaderRecordRoute = value;
  }
  public resetMalformedHeaderRecordRoute() {
    this._malformedHeaderRecordRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderRecordRouteInput() {
    return this._malformedHeaderRecordRoute;
  }

  // malformed_header_route - computed: true, optional: true, required: false
  private _malformedHeaderRoute?: string; 
  public get malformedHeaderRoute() {
    return this.getStringAttribute('malformed_header_route');
  }
  public set malformedHeaderRoute(value: string) {
    this._malformedHeaderRoute = value;
  }
  public resetMalformedHeaderRoute() {
    this._malformedHeaderRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderRouteInput() {
    return this._malformedHeaderRoute;
  }

  // malformed_header_rseq - computed: true, optional: true, required: false
  private _malformedHeaderRseq?: string; 
  public get malformedHeaderRseq() {
    return this.getStringAttribute('malformed_header_rseq');
  }
  public set malformedHeaderRseq(value: string) {
    this._malformedHeaderRseq = value;
  }
  public resetMalformedHeaderRseq() {
    this._malformedHeaderRseq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderRseqInput() {
    return this._malformedHeaderRseq;
  }

  // malformed_header_sdp_a - computed: true, optional: true, required: false
  private _malformedHeaderSdpA?: string; 
  public get malformedHeaderSdpA() {
    return this.getStringAttribute('malformed_header_sdp_a');
  }
  public set malformedHeaderSdpA(value: string) {
    this._malformedHeaderSdpA = value;
  }
  public resetMalformedHeaderSdpA() {
    this._malformedHeaderSdpA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpAInput() {
    return this._malformedHeaderSdpA;
  }

  // malformed_header_sdp_b - computed: true, optional: true, required: false
  private _malformedHeaderSdpB?: string; 
  public get malformedHeaderSdpB() {
    return this.getStringAttribute('malformed_header_sdp_b');
  }
  public set malformedHeaderSdpB(value: string) {
    this._malformedHeaderSdpB = value;
  }
  public resetMalformedHeaderSdpB() {
    this._malformedHeaderSdpB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpBInput() {
    return this._malformedHeaderSdpB;
  }

  // malformed_header_sdp_c - computed: true, optional: true, required: false
  private _malformedHeaderSdpC?: string; 
  public get malformedHeaderSdpC() {
    return this.getStringAttribute('malformed_header_sdp_c');
  }
  public set malformedHeaderSdpC(value: string) {
    this._malformedHeaderSdpC = value;
  }
  public resetMalformedHeaderSdpC() {
    this._malformedHeaderSdpC = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpCInput() {
    return this._malformedHeaderSdpC;
  }

  // malformed_header_sdp_i - computed: true, optional: true, required: false
  private _malformedHeaderSdpI?: string; 
  public get malformedHeaderSdpI() {
    return this.getStringAttribute('malformed_header_sdp_i');
  }
  public set malformedHeaderSdpI(value: string) {
    this._malformedHeaderSdpI = value;
  }
  public resetMalformedHeaderSdpI() {
    this._malformedHeaderSdpI = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpIInput() {
    return this._malformedHeaderSdpI;
  }

  // malformed_header_sdp_k - computed: true, optional: true, required: false
  private _malformedHeaderSdpK?: string; 
  public get malformedHeaderSdpK() {
    return this.getStringAttribute('malformed_header_sdp_k');
  }
  public set malformedHeaderSdpK(value: string) {
    this._malformedHeaderSdpK = value;
  }
  public resetMalformedHeaderSdpK() {
    this._malformedHeaderSdpK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpKInput() {
    return this._malformedHeaderSdpK;
  }

  // malformed_header_sdp_m - computed: true, optional: true, required: false
  private _malformedHeaderSdpM?: string; 
  public get malformedHeaderSdpM() {
    return this.getStringAttribute('malformed_header_sdp_m');
  }
  public set malformedHeaderSdpM(value: string) {
    this._malformedHeaderSdpM = value;
  }
  public resetMalformedHeaderSdpM() {
    this._malformedHeaderSdpM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpMInput() {
    return this._malformedHeaderSdpM;
  }

  // malformed_header_sdp_o - computed: true, optional: true, required: false
  private _malformedHeaderSdpO?: string; 
  public get malformedHeaderSdpO() {
    return this.getStringAttribute('malformed_header_sdp_o');
  }
  public set malformedHeaderSdpO(value: string) {
    this._malformedHeaderSdpO = value;
  }
  public resetMalformedHeaderSdpO() {
    this._malformedHeaderSdpO = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpOInput() {
    return this._malformedHeaderSdpO;
  }

  // malformed_header_sdp_r - computed: true, optional: true, required: false
  private _malformedHeaderSdpR?: string; 
  public get malformedHeaderSdpR() {
    return this.getStringAttribute('malformed_header_sdp_r');
  }
  public set malformedHeaderSdpR(value: string) {
    this._malformedHeaderSdpR = value;
  }
  public resetMalformedHeaderSdpR() {
    this._malformedHeaderSdpR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpRInput() {
    return this._malformedHeaderSdpR;
  }

  // malformed_header_sdp_s - computed: true, optional: true, required: false
  private _malformedHeaderSdpS?: string; 
  public get malformedHeaderSdpS() {
    return this.getStringAttribute('malformed_header_sdp_s');
  }
  public set malformedHeaderSdpS(value: string) {
    this._malformedHeaderSdpS = value;
  }
  public resetMalformedHeaderSdpS() {
    this._malformedHeaderSdpS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpSInput() {
    return this._malformedHeaderSdpS;
  }

  // malformed_header_sdp_t - computed: true, optional: true, required: false
  private _malformedHeaderSdpT?: string; 
  public get malformedHeaderSdpT() {
    return this.getStringAttribute('malformed_header_sdp_t');
  }
  public set malformedHeaderSdpT(value: string) {
    this._malformedHeaderSdpT = value;
  }
  public resetMalformedHeaderSdpT() {
    this._malformedHeaderSdpT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpTInput() {
    return this._malformedHeaderSdpT;
  }

  // malformed_header_sdp_v - computed: true, optional: true, required: false
  private _malformedHeaderSdpV?: string; 
  public get malformedHeaderSdpV() {
    return this.getStringAttribute('malformed_header_sdp_v');
  }
  public set malformedHeaderSdpV(value: string) {
    this._malformedHeaderSdpV = value;
  }
  public resetMalformedHeaderSdpV() {
    this._malformedHeaderSdpV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpVInput() {
    return this._malformedHeaderSdpV;
  }

  // malformed_header_sdp_z - computed: true, optional: true, required: false
  private _malformedHeaderSdpZ?: string; 
  public get malformedHeaderSdpZ() {
    return this.getStringAttribute('malformed_header_sdp_z');
  }
  public set malformedHeaderSdpZ(value: string) {
    this._malformedHeaderSdpZ = value;
  }
  public resetMalformedHeaderSdpZ() {
    this._malformedHeaderSdpZ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpZInput() {
    return this._malformedHeaderSdpZ;
  }

  // malformed_header_to - computed: true, optional: true, required: false
  private _malformedHeaderTo?: string; 
  public get malformedHeaderTo() {
    return this.getStringAttribute('malformed_header_to');
  }
  public set malformedHeaderTo(value: string) {
    this._malformedHeaderTo = value;
  }
  public resetMalformedHeaderTo() {
    this._malformedHeaderTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderToInput() {
    return this._malformedHeaderTo;
  }

  // malformed_header_via - computed: true, optional: true, required: false
  private _malformedHeaderVia?: string; 
  public get malformedHeaderVia() {
    return this.getStringAttribute('malformed_header_via');
  }
  public set malformedHeaderVia(value: string) {
    this._malformedHeaderVia = value;
  }
  public resetMalformedHeaderVia() {
    this._malformedHeaderVia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderViaInput() {
    return this._malformedHeaderVia;
  }

  // malformed_request_line - computed: true, optional: true, required: false
  private _malformedRequestLine?: string; 
  public get malformedRequestLine() {
    return this.getStringAttribute('malformed_request_line');
  }
  public set malformedRequestLine(value: string) {
    this._malformedRequestLine = value;
  }
  public resetMalformedRequestLine() {
    this._malformedRequestLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedRequestLineInput() {
    return this._malformedRequestLine;
  }

  // max_body_length - computed: false, optional: true, required: false
  private _maxBodyLength?: number; 
  public get maxBodyLength() {
    return this.getNumberAttribute('max_body_length');
  }
  public set maxBodyLength(value: number) {
    this._maxBodyLength = value;
  }
  public resetMaxBodyLength() {
    this._maxBodyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBodyLengthInput() {
    return this._maxBodyLength;
  }

  // max_dialogs - computed: false, optional: true, required: false
  private _maxDialogs?: number; 
  public get maxDialogs() {
    return this.getNumberAttribute('max_dialogs');
  }
  public set maxDialogs(value: number) {
    this._maxDialogs = value;
  }
  public resetMaxDialogs() {
    this._maxDialogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDialogsInput() {
    return this._maxDialogs;
  }

  // max_idle_dialogs - computed: false, optional: true, required: false
  private _maxIdleDialogs?: number; 
  public get maxIdleDialogs() {
    return this.getNumberAttribute('max_idle_dialogs');
  }
  public set maxIdleDialogs(value: number) {
    this._maxIdleDialogs = value;
  }
  public resetMaxIdleDialogs() {
    this._maxIdleDialogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleDialogsInput() {
    return this._maxIdleDialogs;
  }

  // max_line_length - computed: true, optional: true, required: false
  private _maxLineLength?: number; 
  public get maxLineLength() {
    return this.getNumberAttribute('max_line_length');
  }
  public set maxLineLength(value: number) {
    this._maxLineLength = value;
  }
  public resetMaxLineLength() {
    this._maxLineLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLineLengthInput() {
    return this._maxLineLength;
  }

  // message_rate - computed: false, optional: true, required: false
  private _messageRate?: number; 
  public get messageRate() {
    return this.getNumberAttribute('message_rate');
  }
  public set messageRate(value: number) {
    this._messageRate = value;
  }
  public resetMessageRate() {
    this._messageRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRateInput() {
    return this._messageRate;
  }

  // message_rate_track - computed: true, optional: true, required: false
  private _messageRateTrack?: string; 
  public get messageRateTrack() {
    return this.getStringAttribute('message_rate_track');
  }
  public set messageRateTrack(value: string) {
    this._messageRateTrack = value;
  }
  public resetMessageRateTrack() {
    this._messageRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRateTrackInput() {
    return this._messageRateTrack;
  }

  // nat_port_range - computed: true, optional: true, required: false
  private _natPortRange?: string; 
  public get natPortRange() {
    return this.getStringAttribute('nat_port_range');
  }
  public set natPortRange(value: string) {
    this._natPortRange = value;
  }
  public resetNatPortRange() {
    this._natPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortRangeInput() {
    return this._natPortRange;
  }

  // nat_trace - computed: true, optional: true, required: false
  private _natTrace?: string; 
  public get natTrace() {
    return this.getStringAttribute('nat_trace');
  }
  public set natTrace(value: string) {
    this._natTrace = value;
  }
  public resetNatTrace() {
    this._natTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraceInput() {
    return this._natTrace;
  }

  // no_sdp_fixup - computed: true, optional: true, required: false
  private _noSdpFixup?: string; 
  public get noSdpFixup() {
    return this.getStringAttribute('no_sdp_fixup');
  }
  public set noSdpFixup(value: string) {
    this._noSdpFixup = value;
  }
  public resetNoSdpFixup() {
    this._noSdpFixup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSdpFixupInput() {
    return this._noSdpFixup;
  }

  // notify_rate - computed: false, optional: true, required: false
  private _notifyRate?: number; 
  public get notifyRate() {
    return this.getNumberAttribute('notify_rate');
  }
  public set notifyRate(value: number) {
    this._notifyRate = value;
  }
  public resetNotifyRate() {
    this._notifyRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRateInput() {
    return this._notifyRate;
  }

  // notify_rate_track - computed: true, optional: true, required: false
  private _notifyRateTrack?: string; 
  public get notifyRateTrack() {
    return this.getStringAttribute('notify_rate_track');
  }
  public set notifyRateTrack(value: string) {
    this._notifyRateTrack = value;
  }
  public resetNotifyRateTrack() {
    this._notifyRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRateTrackInput() {
    return this._notifyRateTrack;
  }

  // open_contact_pinhole - computed: true, optional: true, required: false
  private _openContactPinhole?: string; 
  public get openContactPinhole() {
    return this.getStringAttribute('open_contact_pinhole');
  }
  public set openContactPinhole(value: string) {
    this._openContactPinhole = value;
  }
  public resetOpenContactPinhole() {
    this._openContactPinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openContactPinholeInput() {
    return this._openContactPinhole;
  }

  // open_record_route_pinhole - computed: true, optional: true, required: false
  private _openRecordRoutePinhole?: string; 
  public get openRecordRoutePinhole() {
    return this.getStringAttribute('open_record_route_pinhole');
  }
  public set openRecordRoutePinhole(value: string) {
    this._openRecordRoutePinhole = value;
  }
  public resetOpenRecordRoutePinhole() {
    this._openRecordRoutePinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openRecordRoutePinholeInput() {
    return this._openRecordRoutePinhole;
  }

  // open_register_pinhole - computed: true, optional: true, required: false
  private _openRegisterPinhole?: string; 
  public get openRegisterPinhole() {
    return this.getStringAttribute('open_register_pinhole');
  }
  public set openRegisterPinhole(value: string) {
    this._openRegisterPinhole = value;
  }
  public resetOpenRegisterPinhole() {
    this._openRegisterPinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openRegisterPinholeInput() {
    return this._openRegisterPinhole;
  }

  // open_via_pinhole - computed: true, optional: true, required: false
  private _openViaPinhole?: string; 
  public get openViaPinhole() {
    return this.getStringAttribute('open_via_pinhole');
  }
  public set openViaPinhole(value: string) {
    this._openViaPinhole = value;
  }
  public resetOpenViaPinhole() {
    this._openViaPinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openViaPinholeInput() {
    return this._openViaPinhole;
  }

  // options_rate - computed: false, optional: true, required: false
  private _optionsRate?: number; 
  public get optionsRate() {
    return this.getNumberAttribute('options_rate');
  }
  public set optionsRate(value: number) {
    this._optionsRate = value;
  }
  public resetOptionsRate() {
    this._optionsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsRateInput() {
    return this._optionsRate;
  }

  // options_rate_track - computed: true, optional: true, required: false
  private _optionsRateTrack?: string; 
  public get optionsRateTrack() {
    return this.getStringAttribute('options_rate_track');
  }
  public set optionsRateTrack(value: string) {
    this._optionsRateTrack = value;
  }
  public resetOptionsRateTrack() {
    this._optionsRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsRateTrackInput() {
    return this._optionsRateTrack;
  }

  // prack_rate - computed: false, optional: true, required: false
  private _prackRate?: number; 
  public get prackRate() {
    return this.getNumberAttribute('prack_rate');
  }
  public set prackRate(value: number) {
    this._prackRate = value;
  }
  public resetPrackRate() {
    this._prackRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prackRateInput() {
    return this._prackRate;
  }

  // prack_rate_track - computed: true, optional: true, required: false
  private _prackRateTrack?: string; 
  public get prackRateTrack() {
    return this.getStringAttribute('prack_rate_track');
  }
  public set prackRateTrack(value: string) {
    this._prackRateTrack = value;
  }
  public resetPrackRateTrack() {
    this._prackRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prackRateTrackInput() {
    return this._prackRateTrack;
  }

  // preserve_override - computed: true, optional: true, required: false
  private _preserveOverride?: string; 
  public get preserveOverride() {
    return this.getStringAttribute('preserve_override');
  }
  public set preserveOverride(value: string) {
    this._preserveOverride = value;
  }
  public resetPreserveOverride() {
    this._preserveOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveOverrideInput() {
    return this._preserveOverride;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // provisional_invite_expiry_time - computed: true, optional: true, required: false
  private _provisionalInviteExpiryTime?: number; 
  public get provisionalInviteExpiryTime() {
    return this.getNumberAttribute('provisional_invite_expiry_time');
  }
  public set provisionalInviteExpiryTime(value: number) {
    this._provisionalInviteExpiryTime = value;
  }
  public resetProvisionalInviteExpiryTime() {
    this._provisionalInviteExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionalInviteExpiryTimeInput() {
    return this._provisionalInviteExpiryTime;
  }

  // publish_rate - computed: false, optional: true, required: false
  private _publishRate?: number; 
  public get publishRate() {
    return this.getNumberAttribute('publish_rate');
  }
  public set publishRate(value: number) {
    this._publishRate = value;
  }
  public resetPublishRate() {
    this._publishRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishRateInput() {
    return this._publishRate;
  }

  // publish_rate_track - computed: true, optional: true, required: false
  private _publishRateTrack?: string; 
  public get publishRateTrack() {
    return this.getStringAttribute('publish_rate_track');
  }
  public set publishRateTrack(value: string) {
    this._publishRateTrack = value;
  }
  public resetPublishRateTrack() {
    this._publishRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishRateTrackInput() {
    return this._publishRateTrack;
  }

  // refer_rate - computed: false, optional: true, required: false
  private _referRate?: number; 
  public get referRate() {
    return this.getNumberAttribute('refer_rate');
  }
  public set referRate(value: number) {
    this._referRate = value;
  }
  public resetReferRate() {
    this._referRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referRateInput() {
    return this._referRate;
  }

  // refer_rate_track - computed: true, optional: true, required: false
  private _referRateTrack?: string; 
  public get referRateTrack() {
    return this.getStringAttribute('refer_rate_track');
  }
  public set referRateTrack(value: string) {
    this._referRateTrack = value;
  }
  public resetReferRateTrack() {
    this._referRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referRateTrackInput() {
    return this._referRateTrack;
  }

  // register_contact_trace - computed: true, optional: true, required: false
  private _registerContactTrace?: string; 
  public get registerContactTrace() {
    return this.getStringAttribute('register_contact_trace');
  }
  public set registerContactTrace(value: string) {
    this._registerContactTrace = value;
  }
  public resetRegisterContactTrace() {
    this._registerContactTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerContactTraceInput() {
    return this._registerContactTrace;
  }

  // register_rate - computed: false, optional: true, required: false
  private _registerRate?: number; 
  public get registerRate() {
    return this.getNumberAttribute('register_rate');
  }
  public set registerRate(value: number) {
    this._registerRate = value;
  }
  public resetRegisterRate() {
    this._registerRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerRateInput() {
    return this._registerRate;
  }

  // register_rate_track - computed: true, optional: true, required: false
  private _registerRateTrack?: string; 
  public get registerRateTrack() {
    return this.getStringAttribute('register_rate_track');
  }
  public set registerRateTrack(value: string) {
    this._registerRateTrack = value;
  }
  public resetRegisterRateTrack() {
    this._registerRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerRateTrackInput() {
    return this._registerRateTrack;
  }

  // rfc2543_branch - computed: true, optional: true, required: false
  private _rfc2543Branch?: string; 
  public get rfc2543Branch() {
    return this.getStringAttribute('rfc2543_branch');
  }
  public set rfc2543Branch(value: string) {
    this._rfc2543Branch = value;
  }
  public resetRfc2543Branch() {
    this._rfc2543Branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc2543BranchInput() {
    return this._rfc2543Branch;
  }

  // rtp - computed: true, optional: true, required: false
  private _rtp?: string; 
  public get rtp() {
    return this.getStringAttribute('rtp');
  }
  public set rtp(value: string) {
    this._rtp = value;
  }
  public resetRtp() {
    this._rtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpInput() {
    return this._rtp;
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

  // ssl_algorithm - computed: false, optional: true, required: false
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

  // ssl_auth_client - computed: false, optional: true, required: false
  private _sslAuthClient?: string; 
  public get sslAuthClient() {
    return this.getStringAttribute('ssl_auth_client');
  }
  public set sslAuthClient(value: string) {
    this._sslAuthClient = value;
  }
  public resetSslAuthClient() {
    this._sslAuthClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAuthClientInput() {
    return this._sslAuthClient;
  }

  // ssl_auth_server - computed: false, optional: true, required: false
  private _sslAuthServer?: string; 
  public get sslAuthServer() {
    return this.getStringAttribute('ssl_auth_server');
  }
  public set sslAuthServer(value: string) {
    this._sslAuthServer = value;
  }
  public resetSslAuthServer() {
    this._sslAuthServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAuthServerInput() {
    return this._sslAuthServer;
  }

  // ssl_client_certificate - computed: false, optional: true, required: false
  private _sslClientCertificate?: string; 
  public get sslClientCertificate() {
    return this.getStringAttribute('ssl_client_certificate');
  }
  public set sslClientCertificate(value: string) {
    this._sslClientCertificate = value;
  }
  public resetSslClientCertificate() {
    this._sslClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertificateInput() {
    return this._sslClientCertificate;
  }

  // ssl_client_renegotiation - computed: false, optional: true, required: false
  private _sslClientRenegotiation?: string; 
  public get sslClientRenegotiation() {
    return this.getStringAttribute('ssl_client_renegotiation');
  }
  public set sslClientRenegotiation(value: string) {
    this._sslClientRenegotiation = value;
  }
  public resetSslClientRenegotiation() {
    this._sslClientRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientRenegotiationInput() {
    return this._sslClientRenegotiation;
  }

  // ssl_max_version - computed: false, optional: true, required: false
  private _sslMaxVersion?: string; 
  public get sslMaxVersion() {
    return this.getStringAttribute('ssl_max_version');
  }
  public set sslMaxVersion(value: string) {
    this._sslMaxVersion = value;
  }
  public resetSslMaxVersion() {
    this._sslMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMaxVersionInput() {
    return this._sslMaxVersion;
  }

  // ssl_min_version - computed: false, optional: true, required: false
  private _sslMinVersion?: string; 
  public get sslMinVersion() {
    return this.getStringAttribute('ssl_min_version');
  }
  public set sslMinVersion(value: string) {
    this._sslMinVersion = value;
  }
  public resetSslMinVersion() {
    this._sslMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinVersionInput() {
    return this._sslMinVersion;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // ssl_pfs - computed: true, optional: true, required: false
  private _sslPfs?: string; 
  public get sslPfs() {
    return this.getStringAttribute('ssl_pfs');
  }
  public set sslPfs(value: string) {
    this._sslPfs = value;
  }
  public resetSslPfs() {
    this._sslPfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPfsInput() {
    return this._sslPfs;
  }

  // ssl_send_empty_frags - computed: false, optional: true, required: false
  private _sslSendEmptyFrags?: string; 
  public get sslSendEmptyFrags() {
    return this.getStringAttribute('ssl_send_empty_frags');
  }
  public set sslSendEmptyFrags(value: string) {
    this._sslSendEmptyFrags = value;
  }
  public resetSslSendEmptyFrags() {
    this._sslSendEmptyFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSendEmptyFragsInput() {
    return this._sslSendEmptyFrags;
  }

  // ssl_server_certificate - computed: false, optional: true, required: false
  private _sslServerCertificate?: string; 
  public get sslServerCertificate() {
    return this.getStringAttribute('ssl_server_certificate');
  }
  public set sslServerCertificate(value: string) {
    this._sslServerCertificate = value;
  }
  public resetSslServerCertificate() {
    this._sslServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerCertificateInput() {
    return this._sslServerCertificate;
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

  // strict_register - computed: true, optional: true, required: false
  private _strictRegister?: string; 
  public get strictRegister() {
    return this.getStringAttribute('strict_register');
  }
  public set strictRegister(value: string) {
    this._strictRegister = value;
  }
  public resetStrictRegister() {
    this._strictRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictRegisterInput() {
    return this._strictRegister;
  }

  // subscribe_rate - computed: false, optional: true, required: false
  private _subscribeRate?: number; 
  public get subscribeRate() {
    return this.getNumberAttribute('subscribe_rate');
  }
  public set subscribeRate(value: number) {
    this._subscribeRate = value;
  }
  public resetSubscribeRate() {
    this._subscribeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeRateInput() {
    return this._subscribeRate;
  }

  // subscribe_rate_track - computed: true, optional: true, required: false
  private _subscribeRateTrack?: string; 
  public get subscribeRateTrack() {
    return this.getStringAttribute('subscribe_rate_track');
  }
  public set subscribeRateTrack(value: string) {
    this._subscribeRateTrack = value;
  }
  public resetSubscribeRateTrack() {
    this._subscribeRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeRateTrackInput() {
    return this._subscribeRateTrack;
  }

  // unknown_header - computed: true, optional: true, required: false
  private _unknownHeader?: string; 
  public get unknownHeader() {
    return this.getStringAttribute('unknown_header');
  }
  public set unknownHeader(value: string) {
    this._unknownHeader = value;
  }
  public resetUnknownHeader() {
    this._unknownHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownHeaderInput() {
    return this._unknownHeader;
  }

  // update_rate - computed: false, optional: true, required: false
  private _updateRate?: number; 
  public get updateRate() {
    return this.getNumberAttribute('update_rate');
  }
  public set updateRate(value: number) {
    this._updateRate = value;
  }
  public resetUpdateRate() {
    this._updateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateRateInput() {
    return this._updateRate;
  }

  // update_rate_track - computed: true, optional: true, required: false
  private _updateRateTrack?: string; 
  public get updateRateTrack() {
    return this.getStringAttribute('update_rate_track');
  }
  public set updateRateTrack(value: string) {
    this._updateRateTrack = value;
  }
  public resetUpdateRateTrack() {
    this._updateRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateRateTrackInput() {
    return this._updateRateTrack;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack_rate: cdktf.numberToTerraform(this._ackRate),
      ack_rate_track: cdktf.stringToTerraform(this._ackRateTrack),
      adom: cdktf.stringToTerraform(this._adom),
      block_ack: cdktf.stringToTerraform(this._blockAck),
      block_bye: cdktf.stringToTerraform(this._blockBye),
      block_cancel: cdktf.stringToTerraform(this._blockCancel),
      block_geo_red_options: cdktf.stringToTerraform(this._blockGeoRedOptions),
      block_info: cdktf.stringToTerraform(this._blockInfo),
      block_invite: cdktf.stringToTerraform(this._blockInvite),
      block_long_lines: cdktf.stringToTerraform(this._blockLongLines),
      block_message: cdktf.stringToTerraform(this._blockMessage),
      block_notify: cdktf.stringToTerraform(this._blockNotify),
      block_options: cdktf.stringToTerraform(this._blockOptions),
      block_prack: cdktf.stringToTerraform(this._blockPrack),
      block_publish: cdktf.stringToTerraform(this._blockPublish),
      block_refer: cdktf.stringToTerraform(this._blockRefer),
      block_register: cdktf.stringToTerraform(this._blockRegister),
      block_subscribe: cdktf.stringToTerraform(this._blockSubscribe),
      block_unknown: cdktf.stringToTerraform(this._blockUnknown),
      block_update: cdktf.stringToTerraform(this._blockUpdate),
      bye_rate: cdktf.numberToTerraform(this._byeRate),
      bye_rate_track: cdktf.stringToTerraform(this._byeRateTrack),
      call_id_regex: cdktf.stringToTerraform(this._callIdRegex),
      call_keepalive: cdktf.numberToTerraform(this._callKeepalive),
      cancel_rate: cdktf.numberToTerraform(this._cancelRate),
      cancel_rate_track: cdktf.stringToTerraform(this._cancelRateTrack),
      contact_fixup: cdktf.stringToTerraform(this._contactFixup),
      content_type_regex: cdktf.stringToTerraform(this._contentTypeRegex),
      hnt_restrict_source_ip: cdktf.stringToTerraform(this._hntRestrictSourceIp),
      hosted_nat_traversal: cdktf.stringToTerraform(this._hostedNatTraversal),
      id: cdktf.stringToTerraform(this._id),
      info_rate: cdktf.numberToTerraform(this._infoRate),
      info_rate_track: cdktf.stringToTerraform(this._infoRateTrack),
      invite_rate: cdktf.numberToTerraform(this._inviteRate),
      invite_rate_track: cdktf.stringToTerraform(this._inviteRateTrack),
      ips_rtp: cdktf.stringToTerraform(this._ipsRtp),
      log_call_summary: cdktf.stringToTerraform(this._logCallSummary),
      log_violations: cdktf.stringToTerraform(this._logViolations),
      malformed_header_allow: cdktf.stringToTerraform(this._malformedHeaderAllow),
      malformed_header_call_id: cdktf.stringToTerraform(this._malformedHeaderCallId),
      malformed_header_contact: cdktf.stringToTerraform(this._malformedHeaderContact),
      malformed_header_content_length: cdktf.stringToTerraform(this._malformedHeaderContentLength),
      malformed_header_content_type: cdktf.stringToTerraform(this._malformedHeaderContentType),
      malformed_header_cseq: cdktf.stringToTerraform(this._malformedHeaderCseq),
      malformed_header_expires: cdktf.stringToTerraform(this._malformedHeaderExpires),
      malformed_header_from: cdktf.stringToTerraform(this._malformedHeaderFrom),
      malformed_header_max_forwards: cdktf.stringToTerraform(this._malformedHeaderMaxForwards),
      malformed_header_no_proxy_require: cdktf.stringToTerraform(this._malformedHeaderNoProxyRequire),
      malformed_header_no_require: cdktf.stringToTerraform(this._malformedHeaderNoRequire),
      malformed_header_p_asserted_identity: cdktf.stringToTerraform(this._malformedHeaderPAssertedIdentity),
      malformed_header_rack: cdktf.stringToTerraform(this._malformedHeaderRack),
      malformed_header_record_route: cdktf.stringToTerraform(this._malformedHeaderRecordRoute),
      malformed_header_route: cdktf.stringToTerraform(this._malformedHeaderRoute),
      malformed_header_rseq: cdktf.stringToTerraform(this._malformedHeaderRseq),
      malformed_header_sdp_a: cdktf.stringToTerraform(this._malformedHeaderSdpA),
      malformed_header_sdp_b: cdktf.stringToTerraform(this._malformedHeaderSdpB),
      malformed_header_sdp_c: cdktf.stringToTerraform(this._malformedHeaderSdpC),
      malformed_header_sdp_i: cdktf.stringToTerraform(this._malformedHeaderSdpI),
      malformed_header_sdp_k: cdktf.stringToTerraform(this._malformedHeaderSdpK),
      malformed_header_sdp_m: cdktf.stringToTerraform(this._malformedHeaderSdpM),
      malformed_header_sdp_o: cdktf.stringToTerraform(this._malformedHeaderSdpO),
      malformed_header_sdp_r: cdktf.stringToTerraform(this._malformedHeaderSdpR),
      malformed_header_sdp_s: cdktf.stringToTerraform(this._malformedHeaderSdpS),
      malformed_header_sdp_t: cdktf.stringToTerraform(this._malformedHeaderSdpT),
      malformed_header_sdp_v: cdktf.stringToTerraform(this._malformedHeaderSdpV),
      malformed_header_sdp_z: cdktf.stringToTerraform(this._malformedHeaderSdpZ),
      malformed_header_to: cdktf.stringToTerraform(this._malformedHeaderTo),
      malformed_header_via: cdktf.stringToTerraform(this._malformedHeaderVia),
      malformed_request_line: cdktf.stringToTerraform(this._malformedRequestLine),
      max_body_length: cdktf.numberToTerraform(this._maxBodyLength),
      max_dialogs: cdktf.numberToTerraform(this._maxDialogs),
      max_idle_dialogs: cdktf.numberToTerraform(this._maxIdleDialogs),
      max_line_length: cdktf.numberToTerraform(this._maxLineLength),
      message_rate: cdktf.numberToTerraform(this._messageRate),
      message_rate_track: cdktf.stringToTerraform(this._messageRateTrack),
      nat_port_range: cdktf.stringToTerraform(this._natPortRange),
      nat_trace: cdktf.stringToTerraform(this._natTrace),
      no_sdp_fixup: cdktf.stringToTerraform(this._noSdpFixup),
      notify_rate: cdktf.numberToTerraform(this._notifyRate),
      notify_rate_track: cdktf.stringToTerraform(this._notifyRateTrack),
      open_contact_pinhole: cdktf.stringToTerraform(this._openContactPinhole),
      open_record_route_pinhole: cdktf.stringToTerraform(this._openRecordRoutePinhole),
      open_register_pinhole: cdktf.stringToTerraform(this._openRegisterPinhole),
      open_via_pinhole: cdktf.stringToTerraform(this._openViaPinhole),
      options_rate: cdktf.numberToTerraform(this._optionsRate),
      options_rate_track: cdktf.stringToTerraform(this._optionsRateTrack),
      prack_rate: cdktf.numberToTerraform(this._prackRate),
      prack_rate_track: cdktf.stringToTerraform(this._prackRateTrack),
      preserve_override: cdktf.stringToTerraform(this._preserveOverride),
      profile: cdktf.stringToTerraform(this._profile),
      provisional_invite_expiry_time: cdktf.numberToTerraform(this._provisionalInviteExpiryTime),
      publish_rate: cdktf.numberToTerraform(this._publishRate),
      publish_rate_track: cdktf.stringToTerraform(this._publishRateTrack),
      refer_rate: cdktf.numberToTerraform(this._referRate),
      refer_rate_track: cdktf.stringToTerraform(this._referRateTrack),
      register_contact_trace: cdktf.stringToTerraform(this._registerContactTrace),
      register_rate: cdktf.numberToTerraform(this._registerRate),
      register_rate_track: cdktf.stringToTerraform(this._registerRateTrack),
      rfc2543_branch: cdktf.stringToTerraform(this._rfc2543Branch),
      rtp: cdktf.stringToTerraform(this._rtp),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      ssl_algorithm: cdktf.stringToTerraform(this._sslAlgorithm),
      ssl_auth_client: cdktf.stringToTerraform(this._sslAuthClient),
      ssl_auth_server: cdktf.stringToTerraform(this._sslAuthServer),
      ssl_client_certificate: cdktf.stringToTerraform(this._sslClientCertificate),
      ssl_client_renegotiation: cdktf.stringToTerraform(this._sslClientRenegotiation),
      ssl_max_version: cdktf.stringToTerraform(this._sslMaxVersion),
      ssl_min_version: cdktf.stringToTerraform(this._sslMinVersion),
      ssl_mode: cdktf.stringToTerraform(this._sslMode),
      ssl_pfs: cdktf.stringToTerraform(this._sslPfs),
      ssl_send_empty_frags: cdktf.stringToTerraform(this._sslSendEmptyFrags),
      ssl_server_certificate: cdktf.stringToTerraform(this._sslServerCertificate),
      status: cdktf.stringToTerraform(this._status),
      strict_register: cdktf.stringToTerraform(this._strictRegister),
      subscribe_rate: cdktf.numberToTerraform(this._subscribeRate),
      subscribe_rate_track: cdktf.stringToTerraform(this._subscribeRateTrack),
      unknown_header: cdktf.stringToTerraform(this._unknownHeader),
      update_rate: cdktf.numberToTerraform(this._updateRate),
      update_rate_track: cdktf.stringToTerraform(this._updateRateTrack),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack_rate: {
        value: cdktf.numberToHclTerraform(this._ackRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ack_rate_track: {
        value: cdktf.stringToHclTerraform(this._ackRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_ack: {
        value: cdktf.stringToHclTerraform(this._blockAck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_bye: {
        value: cdktf.stringToHclTerraform(this._blockBye),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_cancel: {
        value: cdktf.stringToHclTerraform(this._blockCancel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_geo_red_options: {
        value: cdktf.stringToHclTerraform(this._blockGeoRedOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_info: {
        value: cdktf.stringToHclTerraform(this._blockInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_invite: {
        value: cdktf.stringToHclTerraform(this._blockInvite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_long_lines: {
        value: cdktf.stringToHclTerraform(this._blockLongLines),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_message: {
        value: cdktf.stringToHclTerraform(this._blockMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_notify: {
        value: cdktf.stringToHclTerraform(this._blockNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_options: {
        value: cdktf.stringToHclTerraform(this._blockOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_prack: {
        value: cdktf.stringToHclTerraform(this._blockPrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_publish: {
        value: cdktf.stringToHclTerraform(this._blockPublish),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_refer: {
        value: cdktf.stringToHclTerraform(this._blockRefer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_register: {
        value: cdktf.stringToHclTerraform(this._blockRegister),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_subscribe: {
        value: cdktf.stringToHclTerraform(this._blockSubscribe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_unknown: {
        value: cdktf.stringToHclTerraform(this._blockUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_update: {
        value: cdktf.stringToHclTerraform(this._blockUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bye_rate: {
        value: cdktf.numberToHclTerraform(this._byeRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bye_rate_track: {
        value: cdktf.stringToHclTerraform(this._byeRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_id_regex: {
        value: cdktf.stringToHclTerraform(this._callIdRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_keepalive: {
        value: cdktf.numberToHclTerraform(this._callKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cancel_rate: {
        value: cdktf.numberToHclTerraform(this._cancelRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cancel_rate_track: {
        value: cdktf.stringToHclTerraform(this._cancelRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_fixup: {
        value: cdktf.stringToHclTerraform(this._contactFixup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type_regex: {
        value: cdktf.stringToHclTerraform(this._contentTypeRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hnt_restrict_source_ip: {
        value: cdktf.stringToHclTerraform(this._hntRestrictSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosted_nat_traversal: {
        value: cdktf.stringToHclTerraform(this._hostedNatTraversal),
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
      info_rate: {
        value: cdktf.numberToHclTerraform(this._infoRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      info_rate_track: {
        value: cdktf.stringToHclTerraform(this._infoRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invite_rate: {
        value: cdktf.numberToHclTerraform(this._inviteRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invite_rate_track: {
        value: cdktf.stringToHclTerraform(this._inviteRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_rtp: {
        value: cdktf.stringToHclTerraform(this._ipsRtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_call_summary: {
        value: cdktf.stringToHclTerraform(this._logCallSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_violations: {
        value: cdktf.stringToHclTerraform(this._logViolations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_allow: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderAllow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_call_id: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderCallId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_contact: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderContact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_content_length: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderContentLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_content_type: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_cseq: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderCseq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_expires: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_from: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_max_forwards: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderMaxForwards),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_no_proxy_require: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderNoProxyRequire),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_no_require: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderNoRequire),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_p_asserted_identity: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderPAssertedIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_rack: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderRack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_record_route: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderRecordRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_route: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_rseq: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderRseq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_a: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpA),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_b: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_c: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpC),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_i: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpI),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_k: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpK),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_m: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpM),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_o: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpO),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_r: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpR),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_s: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpS),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_t: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpT),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_v: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_sdp_z: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderSdpZ),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_to: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_header_via: {
        value: cdktf.stringToHclTerraform(this._malformedHeaderVia),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_request_line: {
        value: cdktf.stringToHclTerraform(this._malformedRequestLine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_body_length: {
        value: cdktf.numberToHclTerraform(this._maxBodyLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_dialogs: {
        value: cdktf.numberToHclTerraform(this._maxDialogs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_idle_dialogs: {
        value: cdktf.numberToHclTerraform(this._maxIdleDialogs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_line_length: {
        value: cdktf.numberToHclTerraform(this._maxLineLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_rate: {
        value: cdktf.numberToHclTerraform(this._messageRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_rate_track: {
        value: cdktf.stringToHclTerraform(this._messageRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_port_range: {
        value: cdktf.stringToHclTerraform(this._natPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_trace: {
        value: cdktf.stringToHclTerraform(this._natTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_sdp_fixup: {
        value: cdktf.stringToHclTerraform(this._noSdpFixup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_rate: {
        value: cdktf.numberToHclTerraform(this._notifyRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notify_rate_track: {
        value: cdktf.stringToHclTerraform(this._notifyRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_contact_pinhole: {
        value: cdktf.stringToHclTerraform(this._openContactPinhole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_record_route_pinhole: {
        value: cdktf.stringToHclTerraform(this._openRecordRoutePinhole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_register_pinhole: {
        value: cdktf.stringToHclTerraform(this._openRegisterPinhole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_via_pinhole: {
        value: cdktf.stringToHclTerraform(this._openViaPinhole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options_rate: {
        value: cdktf.numberToHclTerraform(this._optionsRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      options_rate_track: {
        value: cdktf.stringToHclTerraform(this._optionsRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prack_rate: {
        value: cdktf.numberToHclTerraform(this._prackRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prack_rate_track: {
        value: cdktf.stringToHclTerraform(this._prackRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_override: {
        value: cdktf.stringToHclTerraform(this._preserveOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisional_invite_expiry_time: {
        value: cdktf.numberToHclTerraform(this._provisionalInviteExpiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publish_rate: {
        value: cdktf.numberToHclTerraform(this._publishRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publish_rate_track: {
        value: cdktf.stringToHclTerraform(this._publishRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refer_rate: {
        value: cdktf.numberToHclTerraform(this._referRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refer_rate_track: {
        value: cdktf.stringToHclTerraform(this._referRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register_contact_trace: {
        value: cdktf.stringToHclTerraform(this._registerContactTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register_rate: {
        value: cdktf.numberToHclTerraform(this._registerRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      register_rate_track: {
        value: cdktf.stringToHclTerraform(this._registerRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rfc2543_branch: {
        value: cdktf.stringToHclTerraform(this._rfc2543Branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtp: {
        value: cdktf.stringToHclTerraform(this._rtp),
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
      ssl_algorithm: {
        value: cdktf.stringToHclTerraform(this._sslAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_auth_client: {
        value: cdktf.stringToHclTerraform(this._sslAuthClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_auth_server: {
        value: cdktf.stringToHclTerraform(this._sslAuthServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_client_certificate: {
        value: cdktf.stringToHclTerraform(this._sslClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_client_renegotiation: {
        value: cdktf.stringToHclTerraform(this._sslClientRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_max_version: {
        value: cdktf.stringToHclTerraform(this._sslMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_min_version: {
        value: cdktf.stringToHclTerraform(this._sslMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_mode: {
        value: cdktf.stringToHclTerraform(this._sslMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_pfs: {
        value: cdktf.stringToHclTerraform(this._sslPfs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_send_empty_frags: {
        value: cdktf.stringToHclTerraform(this._sslSendEmptyFrags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_server_certificate: {
        value: cdktf.stringToHclTerraform(this._sslServerCertificate),
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
      strict_register: {
        value: cdktf.stringToHclTerraform(this._strictRegister),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribe_rate: {
        value: cdktf.numberToHclTerraform(this._subscribeRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subscribe_rate_track: {
        value: cdktf.stringToHclTerraform(this._subscribeRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_header: {
        value: cdktf.stringToHclTerraform(this._unknownHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_rate: {
        value: cdktf.numberToHclTerraform(this._updateRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_rate_track: {
        value: cdktf.stringToHclTerraform(this._updateRateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
