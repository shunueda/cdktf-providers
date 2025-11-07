// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for CRL cache status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_cache_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_cache_status_revoked}
  */
  readonly crlCacheStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for CRL connection errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_connection_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_connection_error}
  */
  readonly crlConnectionError?: number;
  /**
  * Enable automatic packet-capture for CRL other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_other_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_other_error}
  */
  readonly crlOtherError?: number;
  /**
  * Enable automatic packet-capture for CRL response status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_response_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_response_status_revoked}
  */
  readonly crlResponseStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for CRL response status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_response_status_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_response_status_unknown}
  */
  readonly crlResponseStatusUnknown?: number;
  /**
  * Enable automatic packet-capture for CRL URI https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_uri_https VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_uri_https}
  */
  readonly crlUriHttps?: number;
  /**
  * Enable automatic packet-capture for CRL URI not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_uri_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_uri_not_found}
  */
  readonly crlUriNotFound?: number;
  /**
  * Enable automatic packet-capture for CRL URI unsupported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_uri_unsupported VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_uri_unsupported}
  */
  readonly crlUriUnsupported?: number;
  /**
  * Enable automatic packet-capture for OCSP cache miss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_cache_miss VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_cache_miss}
  */
  readonly ocspCacheMiss?: number;
  /**
  * Enable automatic packet-capture for OCSP cache status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_cache_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_cache_status_revoked}
  */
  readonly ocspCacheStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for Certificate chain status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_chain_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_chain_status_revoked}
  */
  readonly ocspChainStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for Certificate chain status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_chain_status_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_chain_status_unknown}
  */
  readonly ocspChainStatusUnknown?: number;
  /**
  * Enable automatic packet-capture for OCSP connection error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_connection_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_connection_error}
  */
  readonly ocspConnectionError?: number;
  /**
  * Enable automatic packet-capture for Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_other_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_other_error}
  */
  readonly ocspOtherError?: number;
  /**
  * Enable automatic packet-capture for Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_response_no_nonce VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_response_no_nonce}
  */
  readonly ocspResponseNoNonce?: number;
  /**
  * Enable automatic packet-capture for Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_response_nonce_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_response_nonce_error}
  */
  readonly ocspResponseNonceError?: number;
  /**
  * Enable automatic packet-capture for OCSP response status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_response_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_response_status_revoked}
  */
  readonly ocspResponseStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for OCSP response status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_response_status_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_response_status_unknown}
  */
  readonly ocspResponseStatusUnknown?: number;
  /**
  * Enable automatic packet-capture for Log OCSP URI https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_uri_https VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_uri_https}
  */
  readonly ocspUriHttps?: number;
  /**
  * Enable automatic packet-capture for OCSP URI not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_uri_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_uri_not_found}
  */
  readonly ocspUriNotFound?: number;
  /**
  * Enable automatic packet-capture for OCSP URI unsupported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_uri_unsupported VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_uri_unsupported}
  */
  readonly ocspUriUnsupported?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_cache_status_revoked: cdktf.numberToTerraform(struct!.crlCacheStatusRevoked),
    crl_connection_error: cdktf.numberToTerraform(struct!.crlConnectionError),
    crl_other_error: cdktf.numberToTerraform(struct!.crlOtherError),
    crl_response_status_revoked: cdktf.numberToTerraform(struct!.crlResponseStatusRevoked),
    crl_response_status_unknown: cdktf.numberToTerraform(struct!.crlResponseStatusUnknown),
    crl_uri_https: cdktf.numberToTerraform(struct!.crlUriHttps),
    crl_uri_not_found: cdktf.numberToTerraform(struct!.crlUriNotFound),
    crl_uri_unsupported: cdktf.numberToTerraform(struct!.crlUriUnsupported),
    ocsp_cache_miss: cdktf.numberToTerraform(struct!.ocspCacheMiss),
    ocsp_cache_status_revoked: cdktf.numberToTerraform(struct!.ocspCacheStatusRevoked),
    ocsp_chain_status_revoked: cdktf.numberToTerraform(struct!.ocspChainStatusRevoked),
    ocsp_chain_status_unknown: cdktf.numberToTerraform(struct!.ocspChainStatusUnknown),
    ocsp_connection_error: cdktf.numberToTerraform(struct!.ocspConnectionError),
    ocsp_other_error: cdktf.numberToTerraform(struct!.ocspOtherError),
    ocsp_response_no_nonce: cdktf.numberToTerraform(struct!.ocspResponseNoNonce),
    ocsp_response_nonce_error: cdktf.numberToTerraform(struct!.ocspResponseNonceError),
    ocsp_response_status_revoked: cdktf.numberToTerraform(struct!.ocspResponseStatusRevoked),
    ocsp_response_status_unknown: cdktf.numberToTerraform(struct!.ocspResponseStatusUnknown),
    ocsp_uri_https: cdktf.numberToTerraform(struct!.ocspUriHttps),
    ocsp_uri_not_found: cdktf.numberToTerraform(struct!.ocspUriNotFound),
    ocsp_uri_unsupported: cdktf.numberToTerraform(struct!.ocspUriUnsupported),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl_cache_status_revoked: {
      value: cdktf.numberToHclTerraform(struct!.crlCacheStatusRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_connection_error: {
      value: cdktf.numberToHclTerraform(struct!.crlConnectionError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_other_error: {
      value: cdktf.numberToHclTerraform(struct!.crlOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_response_status_revoked: {
      value: cdktf.numberToHclTerraform(struct!.crlResponseStatusRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_response_status_unknown: {
      value: cdktf.numberToHclTerraform(struct!.crlResponseStatusUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_uri_https: {
      value: cdktf.numberToHclTerraform(struct!.crlUriHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_uri_not_found: {
      value: cdktf.numberToHclTerraform(struct!.crlUriNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_uri_unsupported: {
      value: cdktf.numberToHclTerraform(struct!.crlUriUnsupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_cache_miss: {
      value: cdktf.numberToHclTerraform(struct!.ocspCacheMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_cache_status_revoked: {
      value: cdktf.numberToHclTerraform(struct!.ocspCacheStatusRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_chain_status_revoked: {
      value: cdktf.numberToHclTerraform(struct!.ocspChainStatusRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_chain_status_unknown: {
      value: cdktf.numberToHclTerraform(struct!.ocspChainStatusUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_connection_error: {
      value: cdktf.numberToHclTerraform(struct!.ocspConnectionError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_other_error: {
      value: cdktf.numberToHclTerraform(struct!.ocspOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_response_no_nonce: {
      value: cdktf.numberToHclTerraform(struct!.ocspResponseNoNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_response_nonce_error: {
      value: cdktf.numberToHclTerraform(struct!.ocspResponseNonceError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_response_status_revoked: {
      value: cdktf.numberToHclTerraform(struct!.ocspResponseStatusRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_response_status_unknown: {
      value: cdktf.numberToHclTerraform(struct!.ocspResponseStatusUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_uri_https: {
      value: cdktf.numberToHclTerraform(struct!.ocspUriHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_uri_not_found: {
      value: cdktf.numberToHclTerraform(struct!.ocspUriNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_uri_unsupported: {
      value: cdktf.numberToHclTerraform(struct!.ocspUriUnsupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlCacheStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlCacheStatusRevoked = this._crlCacheStatusRevoked;
    }
    if (this._crlConnectionError !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlConnectionError = this._crlConnectionError;
    }
    if (this._crlOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlOtherError = this._crlOtherError;
    }
    if (this._crlResponseStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlResponseStatusRevoked = this._crlResponseStatusRevoked;
    }
    if (this._crlResponseStatusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlResponseStatusUnknown = this._crlResponseStatusUnknown;
    }
    if (this._crlUriHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlUriHttps = this._crlUriHttps;
    }
    if (this._crlUriNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlUriNotFound = this._crlUriNotFound;
    }
    if (this._crlUriUnsupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlUriUnsupported = this._crlUriUnsupported;
    }
    if (this._ocspCacheMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCacheMiss = this._ocspCacheMiss;
    }
    if (this._ocspCacheStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCacheStatusRevoked = this._ocspCacheStatusRevoked;
    }
    if (this._ocspChainStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspChainStatusRevoked = this._ocspChainStatusRevoked;
    }
    if (this._ocspChainStatusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspChainStatusUnknown = this._ocspChainStatusUnknown;
    }
    if (this._ocspConnectionError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspConnectionError = this._ocspConnectionError;
    }
    if (this._ocspOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspOtherError = this._ocspOtherError;
    }
    if (this._ocspResponseNoNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseNoNonce = this._ocspResponseNoNonce;
    }
    if (this._ocspResponseNonceError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseNonceError = this._ocspResponseNonceError;
    }
    if (this._ocspResponseStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseStatusRevoked = this._ocspResponseStatusRevoked;
    }
    if (this._ocspResponseStatusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseStatusUnknown = this._ocspResponseStatusUnknown;
    }
    if (this._ocspUriHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspUriHttps = this._ocspUriHttps;
    }
    if (this._ocspUriNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspUriNotFound = this._ocspUriNotFound;
    }
    if (this._ocspUriUnsupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspUriUnsupported = this._ocspUriUnsupported;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crlCacheStatusRevoked = undefined;
      this._crlConnectionError = undefined;
      this._crlOtherError = undefined;
      this._crlResponseStatusRevoked = undefined;
      this._crlResponseStatusUnknown = undefined;
      this._crlUriHttps = undefined;
      this._crlUriNotFound = undefined;
      this._crlUriUnsupported = undefined;
      this._ocspCacheMiss = undefined;
      this._ocspCacheStatusRevoked = undefined;
      this._ocspChainStatusRevoked = undefined;
      this._ocspChainStatusUnknown = undefined;
      this._ocspConnectionError = undefined;
      this._ocspOtherError = undefined;
      this._ocspResponseNoNonce = undefined;
      this._ocspResponseNonceError = undefined;
      this._ocspResponseStatusRevoked = undefined;
      this._ocspResponseStatusUnknown = undefined;
      this._ocspUriHttps = undefined;
      this._ocspUriNotFound = undefined;
      this._ocspUriUnsupported = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crlCacheStatusRevoked = value.crlCacheStatusRevoked;
      this._crlConnectionError = value.crlConnectionError;
      this._crlOtherError = value.crlOtherError;
      this._crlResponseStatusRevoked = value.crlResponseStatusRevoked;
      this._crlResponseStatusUnknown = value.crlResponseStatusUnknown;
      this._crlUriHttps = value.crlUriHttps;
      this._crlUriNotFound = value.crlUriNotFound;
      this._crlUriUnsupported = value.crlUriUnsupported;
      this._ocspCacheMiss = value.ocspCacheMiss;
      this._ocspCacheStatusRevoked = value.ocspCacheStatusRevoked;
      this._ocspChainStatusRevoked = value.ocspChainStatusRevoked;
      this._ocspChainStatusUnknown = value.ocspChainStatusUnknown;
      this._ocspConnectionError = value.ocspConnectionError;
      this._ocspOtherError = value.ocspOtherError;
      this._ocspResponseNoNonce = value.ocspResponseNoNonce;
      this._ocspResponseNonceError = value.ocspResponseNonceError;
      this._ocspResponseStatusRevoked = value.ocspResponseStatusRevoked;
      this._ocspResponseStatusUnknown = value.ocspResponseStatusUnknown;
      this._ocspUriHttps = value.ocspUriHttps;
      this._ocspUriNotFound = value.ocspUriNotFound;
      this._ocspUriUnsupported = value.ocspUriUnsupported;
      this._uuid = value.uuid;
    }
  }

  // crl_cache_status_revoked - computed: false, optional: true, required: false
  private _crlCacheStatusRevoked?: number; 
  public get crlCacheStatusRevoked() {
    return this.getNumberAttribute('crl_cache_status_revoked');
  }
  public set crlCacheStatusRevoked(value: number) {
    this._crlCacheStatusRevoked = value;
  }
  public resetCrlCacheStatusRevoked() {
    this._crlCacheStatusRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCacheStatusRevokedInput() {
    return this._crlCacheStatusRevoked;
  }

  // crl_connection_error - computed: false, optional: true, required: false
  private _crlConnectionError?: number; 
  public get crlConnectionError() {
    return this.getNumberAttribute('crl_connection_error');
  }
  public set crlConnectionError(value: number) {
    this._crlConnectionError = value;
  }
  public resetCrlConnectionError() {
    this._crlConnectionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlConnectionErrorInput() {
    return this._crlConnectionError;
  }

  // crl_other_error - computed: false, optional: true, required: false
  private _crlOtherError?: number; 
  public get crlOtherError() {
    return this.getNumberAttribute('crl_other_error');
  }
  public set crlOtherError(value: number) {
    this._crlOtherError = value;
  }
  public resetCrlOtherError() {
    this._crlOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlOtherErrorInput() {
    return this._crlOtherError;
  }

  // crl_response_status_revoked - computed: false, optional: true, required: false
  private _crlResponseStatusRevoked?: number; 
  public get crlResponseStatusRevoked() {
    return this.getNumberAttribute('crl_response_status_revoked');
  }
  public set crlResponseStatusRevoked(value: number) {
    this._crlResponseStatusRevoked = value;
  }
  public resetCrlResponseStatusRevoked() {
    this._crlResponseStatusRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlResponseStatusRevokedInput() {
    return this._crlResponseStatusRevoked;
  }

  // crl_response_status_unknown - computed: false, optional: true, required: false
  private _crlResponseStatusUnknown?: number; 
  public get crlResponseStatusUnknown() {
    return this.getNumberAttribute('crl_response_status_unknown');
  }
  public set crlResponseStatusUnknown(value: number) {
    this._crlResponseStatusUnknown = value;
  }
  public resetCrlResponseStatusUnknown() {
    this._crlResponseStatusUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlResponseStatusUnknownInput() {
    return this._crlResponseStatusUnknown;
  }

  // crl_uri_https - computed: false, optional: true, required: false
  private _crlUriHttps?: number; 
  public get crlUriHttps() {
    return this.getNumberAttribute('crl_uri_https');
  }
  public set crlUriHttps(value: number) {
    this._crlUriHttps = value;
  }
  public resetCrlUriHttps() {
    this._crlUriHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlUriHttpsInput() {
    return this._crlUriHttps;
  }

  // crl_uri_not_found - computed: false, optional: true, required: false
  private _crlUriNotFound?: number; 
  public get crlUriNotFound() {
    return this.getNumberAttribute('crl_uri_not_found');
  }
  public set crlUriNotFound(value: number) {
    this._crlUriNotFound = value;
  }
  public resetCrlUriNotFound() {
    this._crlUriNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlUriNotFoundInput() {
    return this._crlUriNotFound;
  }

  // crl_uri_unsupported - computed: false, optional: true, required: false
  private _crlUriUnsupported?: number; 
  public get crlUriUnsupported() {
    return this.getNumberAttribute('crl_uri_unsupported');
  }
  public set crlUriUnsupported(value: number) {
    this._crlUriUnsupported = value;
  }
  public resetCrlUriUnsupported() {
    this._crlUriUnsupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlUriUnsupportedInput() {
    return this._crlUriUnsupported;
  }

  // ocsp_cache_miss - computed: false, optional: true, required: false
  private _ocspCacheMiss?: number; 
  public get ocspCacheMiss() {
    return this.getNumberAttribute('ocsp_cache_miss');
  }
  public set ocspCacheMiss(value: number) {
    this._ocspCacheMiss = value;
  }
  public resetOcspCacheMiss() {
    this._ocspCacheMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCacheMissInput() {
    return this._ocspCacheMiss;
  }

  // ocsp_cache_status_revoked - computed: false, optional: true, required: false
  private _ocspCacheStatusRevoked?: number; 
  public get ocspCacheStatusRevoked() {
    return this.getNumberAttribute('ocsp_cache_status_revoked');
  }
  public set ocspCacheStatusRevoked(value: number) {
    this._ocspCacheStatusRevoked = value;
  }
  public resetOcspCacheStatusRevoked() {
    this._ocspCacheStatusRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCacheStatusRevokedInput() {
    return this._ocspCacheStatusRevoked;
  }

  // ocsp_chain_status_revoked - computed: false, optional: true, required: false
  private _ocspChainStatusRevoked?: number; 
  public get ocspChainStatusRevoked() {
    return this.getNumberAttribute('ocsp_chain_status_revoked');
  }
  public set ocspChainStatusRevoked(value: number) {
    this._ocspChainStatusRevoked = value;
  }
  public resetOcspChainStatusRevoked() {
    this._ocspChainStatusRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspChainStatusRevokedInput() {
    return this._ocspChainStatusRevoked;
  }

  // ocsp_chain_status_unknown - computed: false, optional: true, required: false
  private _ocspChainStatusUnknown?: number; 
  public get ocspChainStatusUnknown() {
    return this.getNumberAttribute('ocsp_chain_status_unknown');
  }
  public set ocspChainStatusUnknown(value: number) {
    this._ocspChainStatusUnknown = value;
  }
  public resetOcspChainStatusUnknown() {
    this._ocspChainStatusUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspChainStatusUnknownInput() {
    return this._ocspChainStatusUnknown;
  }

  // ocsp_connection_error - computed: false, optional: true, required: false
  private _ocspConnectionError?: number; 
  public get ocspConnectionError() {
    return this.getNumberAttribute('ocsp_connection_error');
  }
  public set ocspConnectionError(value: number) {
    this._ocspConnectionError = value;
  }
  public resetOcspConnectionError() {
    this._ocspConnectionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspConnectionErrorInput() {
    return this._ocspConnectionError;
  }

  // ocsp_other_error - computed: false, optional: true, required: false
  private _ocspOtherError?: number; 
  public get ocspOtherError() {
    return this.getNumberAttribute('ocsp_other_error');
  }
  public set ocspOtherError(value: number) {
    this._ocspOtherError = value;
  }
  public resetOcspOtherError() {
    this._ocspOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspOtherErrorInput() {
    return this._ocspOtherError;
  }

  // ocsp_response_no_nonce - computed: false, optional: true, required: false
  private _ocspResponseNoNonce?: number; 
  public get ocspResponseNoNonce() {
    return this.getNumberAttribute('ocsp_response_no_nonce');
  }
  public set ocspResponseNoNonce(value: number) {
    this._ocspResponseNoNonce = value;
  }
  public resetOcspResponseNoNonce() {
    this._ocspResponseNoNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseNoNonceInput() {
    return this._ocspResponseNoNonce;
  }

  // ocsp_response_nonce_error - computed: false, optional: true, required: false
  private _ocspResponseNonceError?: number; 
  public get ocspResponseNonceError() {
    return this.getNumberAttribute('ocsp_response_nonce_error');
  }
  public set ocspResponseNonceError(value: number) {
    this._ocspResponseNonceError = value;
  }
  public resetOcspResponseNonceError() {
    this._ocspResponseNonceError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseNonceErrorInput() {
    return this._ocspResponseNonceError;
  }

  // ocsp_response_status_revoked - computed: false, optional: true, required: false
  private _ocspResponseStatusRevoked?: number; 
  public get ocspResponseStatusRevoked() {
    return this.getNumberAttribute('ocsp_response_status_revoked');
  }
  public set ocspResponseStatusRevoked(value: number) {
    this._ocspResponseStatusRevoked = value;
  }
  public resetOcspResponseStatusRevoked() {
    this._ocspResponseStatusRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseStatusRevokedInput() {
    return this._ocspResponseStatusRevoked;
  }

  // ocsp_response_status_unknown - computed: false, optional: true, required: false
  private _ocspResponseStatusUnknown?: number; 
  public get ocspResponseStatusUnknown() {
    return this.getNumberAttribute('ocsp_response_status_unknown');
  }
  public set ocspResponseStatusUnknown(value: number) {
    this._ocspResponseStatusUnknown = value;
  }
  public resetOcspResponseStatusUnknown() {
    this._ocspResponseStatusUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseStatusUnknownInput() {
    return this._ocspResponseStatusUnknown;
  }

  // ocsp_uri_https - computed: false, optional: true, required: false
  private _ocspUriHttps?: number; 
  public get ocspUriHttps() {
    return this.getNumberAttribute('ocsp_uri_https');
  }
  public set ocspUriHttps(value: number) {
    this._ocspUriHttps = value;
  }
  public resetOcspUriHttps() {
    this._ocspUriHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspUriHttpsInput() {
    return this._ocspUriHttps;
  }

  // ocsp_uri_not_found - computed: false, optional: true, required: false
  private _ocspUriNotFound?: number; 
  public get ocspUriNotFound() {
    return this.getNumberAttribute('ocsp_uri_not_found');
  }
  public set ocspUriNotFound(value: number) {
    this._ocspUriNotFound = value;
  }
  public resetOcspUriNotFound() {
    this._ocspUriNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspUriNotFoundInput() {
    return this._ocspUriNotFound;
  }

  // ocsp_uri_unsupported - computed: false, optional: true, required: false
  private _ocspUriUnsupported?: number; 
  public get ocspUriUnsupported() {
    return this.getNumberAttribute('ocsp_uri_unsupported');
  }
  public set ocspUriUnsupported(value: number) {
    this._ocspUriUnsupported = value;
  }
  public resetOcspUriUnsupported() {
    this._ocspUriUnsupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspUriUnsupportedInput() {
    return this._ocspUriUnsupported;
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
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for CRL cache status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_cache_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_cache_status_revoked}
  */
  readonly crlCacheStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for CRL connection errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_connection_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_connection_error}
  */
  readonly crlConnectionError?: number;
  /**
  * Enable automatic packet-capture for CRL other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_other_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_other_error}
  */
  readonly crlOtherError?: number;
  /**
  * Enable automatic packet-capture for CRL response status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_response_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_response_status_revoked}
  */
  readonly crlResponseStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for CRL response status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_response_status_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_response_status_unknown}
  */
  readonly crlResponseStatusUnknown?: number;
  /**
  * Enable automatic packet-capture for CRL URI https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_uri_https VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_uri_https}
  */
  readonly crlUriHttps?: number;
  /**
  * Enable automatic packet-capture for CRL URI not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_uri_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_uri_not_found}
  */
  readonly crlUriNotFound?: number;
  /**
  * Enable automatic packet-capture for CRL URI unsupported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#crl_uri_unsupported VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#crl_uri_unsupported}
  */
  readonly crlUriUnsupported?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for OCSP cache miss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_cache_miss VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_cache_miss}
  */
  readonly ocspCacheMiss?: number;
  /**
  * Enable automatic packet-capture for OCSP cache status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_cache_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_cache_status_revoked}
  */
  readonly ocspCacheStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for Certificate chain status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_chain_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_chain_status_revoked}
  */
  readonly ocspChainStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for Certificate chain status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_chain_status_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_chain_status_unknown}
  */
  readonly ocspChainStatusUnknown?: number;
  /**
  * Enable automatic packet-capture for OCSP connection error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_connection_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_connection_error}
  */
  readonly ocspConnectionError?: number;
  /**
  * Enable automatic packet-capture for Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_other_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_other_error}
  */
  readonly ocspOtherError?: number;
  /**
  * Enable automatic packet-capture for Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_response_no_nonce VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_response_no_nonce}
  */
  readonly ocspResponseNoNonce?: number;
  /**
  * Enable automatic packet-capture for Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_response_nonce_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_response_nonce_error}
  */
  readonly ocspResponseNonceError?: number;
  /**
  * Enable automatic packet-capture for OCSP response status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_response_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_response_status_revoked}
  */
  readonly ocspResponseStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for OCSP response status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_response_status_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_response_status_unknown}
  */
  readonly ocspResponseStatusUnknown?: number;
  /**
  * Enable automatic packet-capture for Log OCSP URI https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_uri_https VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_uri_https}
  */
  readonly ocspUriHttps?: number;
  /**
  * Enable automatic packet-capture for OCSP URI not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_uri_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_uri_not_found}
  */
  readonly ocspUriNotFound?: number;
  /**
  * Enable automatic packet-capture for OCSP URI unsupported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#ocsp_uri_unsupported VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#ocsp_uri_unsupported}
  */
  readonly ocspUriUnsupported?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_cache_status_revoked: cdktf.numberToTerraform(struct!.crlCacheStatusRevoked),
    crl_connection_error: cdktf.numberToTerraform(struct!.crlConnectionError),
    crl_other_error: cdktf.numberToTerraform(struct!.crlOtherError),
    crl_response_status_revoked: cdktf.numberToTerraform(struct!.crlResponseStatusRevoked),
    crl_response_status_unknown: cdktf.numberToTerraform(struct!.crlResponseStatusUnknown),
    crl_uri_https: cdktf.numberToTerraform(struct!.crlUriHttps),
    crl_uri_not_found: cdktf.numberToTerraform(struct!.crlUriNotFound),
    crl_uri_unsupported: cdktf.numberToTerraform(struct!.crlUriUnsupported),
    duration: cdktf.numberToTerraform(struct!.duration),
    ocsp_cache_miss: cdktf.numberToTerraform(struct!.ocspCacheMiss),
    ocsp_cache_status_revoked: cdktf.numberToTerraform(struct!.ocspCacheStatusRevoked),
    ocsp_chain_status_revoked: cdktf.numberToTerraform(struct!.ocspChainStatusRevoked),
    ocsp_chain_status_unknown: cdktf.numberToTerraform(struct!.ocspChainStatusUnknown),
    ocsp_connection_error: cdktf.numberToTerraform(struct!.ocspConnectionError),
    ocsp_other_error: cdktf.numberToTerraform(struct!.ocspOtherError),
    ocsp_response_no_nonce: cdktf.numberToTerraform(struct!.ocspResponseNoNonce),
    ocsp_response_nonce_error: cdktf.numberToTerraform(struct!.ocspResponseNonceError),
    ocsp_response_status_revoked: cdktf.numberToTerraform(struct!.ocspResponseStatusRevoked),
    ocsp_response_status_unknown: cdktf.numberToTerraform(struct!.ocspResponseStatusUnknown),
    ocsp_uri_https: cdktf.numberToTerraform(struct!.ocspUriHttps),
    ocsp_uri_not_found: cdktf.numberToTerraform(struct!.ocspUriNotFound),
    ocsp_uri_unsupported: cdktf.numberToTerraform(struct!.ocspUriUnsupported),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl_cache_status_revoked: {
      value: cdktf.numberToHclTerraform(struct!.crlCacheStatusRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_connection_error: {
      value: cdktf.numberToHclTerraform(struct!.crlConnectionError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_other_error: {
      value: cdktf.numberToHclTerraform(struct!.crlOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_response_status_revoked: {
      value: cdktf.numberToHclTerraform(struct!.crlResponseStatusRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_response_status_unknown: {
      value: cdktf.numberToHclTerraform(struct!.crlResponseStatusUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_uri_https: {
      value: cdktf.numberToHclTerraform(struct!.crlUriHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_uri_not_found: {
      value: cdktf.numberToHclTerraform(struct!.crlUriNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_uri_unsupported: {
      value: cdktf.numberToHclTerraform(struct!.crlUriUnsupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_cache_miss: {
      value: cdktf.numberToHclTerraform(struct!.ocspCacheMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_cache_status_revoked: {
      value: cdktf.numberToHclTerraform(struct!.ocspCacheStatusRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_chain_status_revoked: {
      value: cdktf.numberToHclTerraform(struct!.ocspChainStatusRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_chain_status_unknown: {
      value: cdktf.numberToHclTerraform(struct!.ocspChainStatusUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_connection_error: {
      value: cdktf.numberToHclTerraform(struct!.ocspConnectionError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_other_error: {
      value: cdktf.numberToHclTerraform(struct!.ocspOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_response_no_nonce: {
      value: cdktf.numberToHclTerraform(struct!.ocspResponseNoNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_response_nonce_error: {
      value: cdktf.numberToHclTerraform(struct!.ocspResponseNonceError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_response_status_revoked: {
      value: cdktf.numberToHclTerraform(struct!.ocspResponseStatusRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_response_status_unknown: {
      value: cdktf.numberToHclTerraform(struct!.ocspResponseStatusUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_uri_https: {
      value: cdktf.numberToHclTerraform(struct!.ocspUriHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_uri_not_found: {
      value: cdktf.numberToHclTerraform(struct!.ocspUriNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_uri_unsupported: {
      value: cdktf.numberToHclTerraform(struct!.ocspUriUnsupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlCacheStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlCacheStatusRevoked = this._crlCacheStatusRevoked;
    }
    if (this._crlConnectionError !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlConnectionError = this._crlConnectionError;
    }
    if (this._crlOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlOtherError = this._crlOtherError;
    }
    if (this._crlResponseStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlResponseStatusRevoked = this._crlResponseStatusRevoked;
    }
    if (this._crlResponseStatusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlResponseStatusUnknown = this._crlResponseStatusUnknown;
    }
    if (this._crlUriHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlUriHttps = this._crlUriHttps;
    }
    if (this._crlUriNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlUriNotFound = this._crlUriNotFound;
    }
    if (this._crlUriUnsupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlUriUnsupported = this._crlUriUnsupported;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._ocspCacheMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCacheMiss = this._ocspCacheMiss;
    }
    if (this._ocspCacheStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCacheStatusRevoked = this._ocspCacheStatusRevoked;
    }
    if (this._ocspChainStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspChainStatusRevoked = this._ocspChainStatusRevoked;
    }
    if (this._ocspChainStatusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspChainStatusUnknown = this._ocspChainStatusUnknown;
    }
    if (this._ocspConnectionError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspConnectionError = this._ocspConnectionError;
    }
    if (this._ocspOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspOtherError = this._ocspOtherError;
    }
    if (this._ocspResponseNoNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseNoNonce = this._ocspResponseNoNonce;
    }
    if (this._ocspResponseNonceError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseNonceError = this._ocspResponseNonceError;
    }
    if (this._ocspResponseStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseStatusRevoked = this._ocspResponseStatusRevoked;
    }
    if (this._ocspResponseStatusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseStatusUnknown = this._ocspResponseStatusUnknown;
    }
    if (this._ocspUriHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspUriHttps = this._ocspUriHttps;
    }
    if (this._ocspUriNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspUriNotFound = this._ocspUriNotFound;
    }
    if (this._ocspUriUnsupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspUriUnsupported = this._ocspUriUnsupported;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crlCacheStatusRevoked = undefined;
      this._crlConnectionError = undefined;
      this._crlOtherError = undefined;
      this._crlResponseStatusRevoked = undefined;
      this._crlResponseStatusUnknown = undefined;
      this._crlUriHttps = undefined;
      this._crlUriNotFound = undefined;
      this._crlUriUnsupported = undefined;
      this._duration = undefined;
      this._ocspCacheMiss = undefined;
      this._ocspCacheStatusRevoked = undefined;
      this._ocspChainStatusRevoked = undefined;
      this._ocspChainStatusUnknown = undefined;
      this._ocspConnectionError = undefined;
      this._ocspOtherError = undefined;
      this._ocspResponseNoNonce = undefined;
      this._ocspResponseNonceError = undefined;
      this._ocspResponseStatusRevoked = undefined;
      this._ocspResponseStatusUnknown = undefined;
      this._ocspUriHttps = undefined;
      this._ocspUriNotFound = undefined;
      this._ocspUriUnsupported = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crlCacheStatusRevoked = value.crlCacheStatusRevoked;
      this._crlConnectionError = value.crlConnectionError;
      this._crlOtherError = value.crlOtherError;
      this._crlResponseStatusRevoked = value.crlResponseStatusRevoked;
      this._crlResponseStatusUnknown = value.crlResponseStatusUnknown;
      this._crlUriHttps = value.crlUriHttps;
      this._crlUriNotFound = value.crlUriNotFound;
      this._crlUriUnsupported = value.crlUriUnsupported;
      this._duration = value.duration;
      this._ocspCacheMiss = value.ocspCacheMiss;
      this._ocspCacheStatusRevoked = value.ocspCacheStatusRevoked;
      this._ocspChainStatusRevoked = value.ocspChainStatusRevoked;
      this._ocspChainStatusUnknown = value.ocspChainStatusUnknown;
      this._ocspConnectionError = value.ocspConnectionError;
      this._ocspOtherError = value.ocspOtherError;
      this._ocspResponseNoNonce = value.ocspResponseNoNonce;
      this._ocspResponseNonceError = value.ocspResponseNonceError;
      this._ocspResponseStatusRevoked = value.ocspResponseStatusRevoked;
      this._ocspResponseStatusUnknown = value.ocspResponseStatusUnknown;
      this._ocspUriHttps = value.ocspUriHttps;
      this._ocspUriNotFound = value.ocspUriNotFound;
      this._ocspUriUnsupported = value.ocspUriUnsupported;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // crl_cache_status_revoked - computed: false, optional: true, required: false
  private _crlCacheStatusRevoked?: number; 
  public get crlCacheStatusRevoked() {
    return this.getNumberAttribute('crl_cache_status_revoked');
  }
  public set crlCacheStatusRevoked(value: number) {
    this._crlCacheStatusRevoked = value;
  }
  public resetCrlCacheStatusRevoked() {
    this._crlCacheStatusRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCacheStatusRevokedInput() {
    return this._crlCacheStatusRevoked;
  }

  // crl_connection_error - computed: false, optional: true, required: false
  private _crlConnectionError?: number; 
  public get crlConnectionError() {
    return this.getNumberAttribute('crl_connection_error');
  }
  public set crlConnectionError(value: number) {
    this._crlConnectionError = value;
  }
  public resetCrlConnectionError() {
    this._crlConnectionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlConnectionErrorInput() {
    return this._crlConnectionError;
  }

  // crl_other_error - computed: false, optional: true, required: false
  private _crlOtherError?: number; 
  public get crlOtherError() {
    return this.getNumberAttribute('crl_other_error');
  }
  public set crlOtherError(value: number) {
    this._crlOtherError = value;
  }
  public resetCrlOtherError() {
    this._crlOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlOtherErrorInput() {
    return this._crlOtherError;
  }

  // crl_response_status_revoked - computed: false, optional: true, required: false
  private _crlResponseStatusRevoked?: number; 
  public get crlResponseStatusRevoked() {
    return this.getNumberAttribute('crl_response_status_revoked');
  }
  public set crlResponseStatusRevoked(value: number) {
    this._crlResponseStatusRevoked = value;
  }
  public resetCrlResponseStatusRevoked() {
    this._crlResponseStatusRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlResponseStatusRevokedInput() {
    return this._crlResponseStatusRevoked;
  }

  // crl_response_status_unknown - computed: false, optional: true, required: false
  private _crlResponseStatusUnknown?: number; 
  public get crlResponseStatusUnknown() {
    return this.getNumberAttribute('crl_response_status_unknown');
  }
  public set crlResponseStatusUnknown(value: number) {
    this._crlResponseStatusUnknown = value;
  }
  public resetCrlResponseStatusUnknown() {
    this._crlResponseStatusUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlResponseStatusUnknownInput() {
    return this._crlResponseStatusUnknown;
  }

  // crl_uri_https - computed: false, optional: true, required: false
  private _crlUriHttps?: number; 
  public get crlUriHttps() {
    return this.getNumberAttribute('crl_uri_https');
  }
  public set crlUriHttps(value: number) {
    this._crlUriHttps = value;
  }
  public resetCrlUriHttps() {
    this._crlUriHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlUriHttpsInput() {
    return this._crlUriHttps;
  }

  // crl_uri_not_found - computed: false, optional: true, required: false
  private _crlUriNotFound?: number; 
  public get crlUriNotFound() {
    return this.getNumberAttribute('crl_uri_not_found');
  }
  public set crlUriNotFound(value: number) {
    this._crlUriNotFound = value;
  }
  public resetCrlUriNotFound() {
    this._crlUriNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlUriNotFoundInput() {
    return this._crlUriNotFound;
  }

  // crl_uri_unsupported - computed: false, optional: true, required: false
  private _crlUriUnsupported?: number; 
  public get crlUriUnsupported() {
    return this.getNumberAttribute('crl_uri_unsupported');
  }
  public set crlUriUnsupported(value: number) {
    this._crlUriUnsupported = value;
  }
  public resetCrlUriUnsupported() {
    this._crlUriUnsupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlUriUnsupportedInput() {
    return this._crlUriUnsupported;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // ocsp_cache_miss - computed: false, optional: true, required: false
  private _ocspCacheMiss?: number; 
  public get ocspCacheMiss() {
    return this.getNumberAttribute('ocsp_cache_miss');
  }
  public set ocspCacheMiss(value: number) {
    this._ocspCacheMiss = value;
  }
  public resetOcspCacheMiss() {
    this._ocspCacheMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCacheMissInput() {
    return this._ocspCacheMiss;
  }

  // ocsp_cache_status_revoked - computed: false, optional: true, required: false
  private _ocspCacheStatusRevoked?: number; 
  public get ocspCacheStatusRevoked() {
    return this.getNumberAttribute('ocsp_cache_status_revoked');
  }
  public set ocspCacheStatusRevoked(value: number) {
    this._ocspCacheStatusRevoked = value;
  }
  public resetOcspCacheStatusRevoked() {
    this._ocspCacheStatusRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCacheStatusRevokedInput() {
    return this._ocspCacheStatusRevoked;
  }

  // ocsp_chain_status_revoked - computed: false, optional: true, required: false
  private _ocspChainStatusRevoked?: number; 
  public get ocspChainStatusRevoked() {
    return this.getNumberAttribute('ocsp_chain_status_revoked');
  }
  public set ocspChainStatusRevoked(value: number) {
    this._ocspChainStatusRevoked = value;
  }
  public resetOcspChainStatusRevoked() {
    this._ocspChainStatusRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspChainStatusRevokedInput() {
    return this._ocspChainStatusRevoked;
  }

  // ocsp_chain_status_unknown - computed: false, optional: true, required: false
  private _ocspChainStatusUnknown?: number; 
  public get ocspChainStatusUnknown() {
    return this.getNumberAttribute('ocsp_chain_status_unknown');
  }
  public set ocspChainStatusUnknown(value: number) {
    this._ocspChainStatusUnknown = value;
  }
  public resetOcspChainStatusUnknown() {
    this._ocspChainStatusUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspChainStatusUnknownInput() {
    return this._ocspChainStatusUnknown;
  }

  // ocsp_connection_error - computed: false, optional: true, required: false
  private _ocspConnectionError?: number; 
  public get ocspConnectionError() {
    return this.getNumberAttribute('ocsp_connection_error');
  }
  public set ocspConnectionError(value: number) {
    this._ocspConnectionError = value;
  }
  public resetOcspConnectionError() {
    this._ocspConnectionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspConnectionErrorInput() {
    return this._ocspConnectionError;
  }

  // ocsp_other_error - computed: false, optional: true, required: false
  private _ocspOtherError?: number; 
  public get ocspOtherError() {
    return this.getNumberAttribute('ocsp_other_error');
  }
  public set ocspOtherError(value: number) {
    this._ocspOtherError = value;
  }
  public resetOcspOtherError() {
    this._ocspOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspOtherErrorInput() {
    return this._ocspOtherError;
  }

  // ocsp_response_no_nonce - computed: false, optional: true, required: false
  private _ocspResponseNoNonce?: number; 
  public get ocspResponseNoNonce() {
    return this.getNumberAttribute('ocsp_response_no_nonce');
  }
  public set ocspResponseNoNonce(value: number) {
    this._ocspResponseNoNonce = value;
  }
  public resetOcspResponseNoNonce() {
    this._ocspResponseNoNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseNoNonceInput() {
    return this._ocspResponseNoNonce;
  }

  // ocsp_response_nonce_error - computed: false, optional: true, required: false
  private _ocspResponseNonceError?: number; 
  public get ocspResponseNonceError() {
    return this.getNumberAttribute('ocsp_response_nonce_error');
  }
  public set ocspResponseNonceError(value: number) {
    this._ocspResponseNonceError = value;
  }
  public resetOcspResponseNonceError() {
    this._ocspResponseNonceError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseNonceErrorInput() {
    return this._ocspResponseNonceError;
  }

  // ocsp_response_status_revoked - computed: false, optional: true, required: false
  private _ocspResponseStatusRevoked?: number; 
  public get ocspResponseStatusRevoked() {
    return this.getNumberAttribute('ocsp_response_status_revoked');
  }
  public set ocspResponseStatusRevoked(value: number) {
    this._ocspResponseStatusRevoked = value;
  }
  public resetOcspResponseStatusRevoked() {
    this._ocspResponseStatusRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseStatusRevokedInput() {
    return this._ocspResponseStatusRevoked;
  }

  // ocsp_response_status_unknown - computed: false, optional: true, required: false
  private _ocspResponseStatusUnknown?: number; 
  public get ocspResponseStatusUnknown() {
    return this.getNumberAttribute('ocsp_response_status_unknown');
  }
  public set ocspResponseStatusUnknown(value: number) {
    this._ocspResponseStatusUnknown = value;
  }
  public resetOcspResponseStatusUnknown() {
    this._ocspResponseStatusUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseStatusUnknownInput() {
    return this._ocspResponseStatusUnknown;
  }

  // ocsp_uri_https - computed: false, optional: true, required: false
  private _ocspUriHttps?: number; 
  public get ocspUriHttps() {
    return this.getNumberAttribute('ocsp_uri_https');
  }
  public set ocspUriHttps(value: number) {
    this._ocspUriHttps = value;
  }
  public resetOcspUriHttps() {
    this._ocspUriHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspUriHttpsInput() {
    return this._ocspUriHttps;
  }

  // ocsp_uri_not_found - computed: false, optional: true, required: false
  private _ocspUriNotFound?: number; 
  public get ocspUriNotFound() {
    return this.getNumberAttribute('ocsp_uri_not_found');
  }
  public set ocspUriNotFound(value: number) {
    this._ocspUriNotFound = value;
  }
  public resetOcspUriNotFound() {
    this._ocspUriNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspUriNotFoundInput() {
    return this._ocspUriNotFound;
  }

  // ocsp_uri_unsupported - computed: false, optional: true, required: false
  private _ocspUriUnsupported?: number; 
  public get ocspUriUnsupported() {
    return this.getNumberAttribute('ocsp_uri_unsupported');
  }
  public set ocspUriUnsupported(value: number) {
    this._ocspUriUnsupported = value;
  }
  public resetOcspUriUnsupported() {
    this._ocspUriUnsupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspUriUnsupportedInput() {
    return this._ocspUriUnsupported;
  }

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
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

  // trigger_stats_inc - computed: false, optional: true, required: false
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA) {
    this._triggerStatsInc.internalValue = value;
  }
  public resetTriggerStatsInc() {
    this._triggerStatsInc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsIncInput() {
    return this._triggerStatsInc.internalValue;
  }

  // trigger_stats_rate - computed: false, optional: true, required: false
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      trigger_stats_inc: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
