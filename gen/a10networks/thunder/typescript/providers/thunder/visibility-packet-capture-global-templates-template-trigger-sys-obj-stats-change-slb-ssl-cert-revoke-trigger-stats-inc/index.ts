// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for CRL cache status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#crl_cache_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#crl_cache_status_revoked}
  */
  readonly crlCacheStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for CRL connection errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#crl_connection_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#crl_connection_error}
  */
  readonly crlConnectionError?: number;
  /**
  * Enable automatic packet-capture for CRL other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#crl_other_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#crl_other_error}
  */
  readonly crlOtherError?: number;
  /**
  * Enable automatic packet-capture for CRL response status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#crl_response_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#crl_response_status_revoked}
  */
  readonly crlResponseStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for CRL response status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#crl_response_status_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#crl_response_status_unknown}
  */
  readonly crlResponseStatusUnknown?: number;
  /**
  * Enable automatic packet-capture for CRL URI https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#crl_uri_https VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#crl_uri_https}
  */
  readonly crlUriHttps?: number;
  /**
  * Enable automatic packet-capture for CRL URI not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#crl_uri_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#crl_uri_not_found}
  */
  readonly crlUriNotFound?: number;
  /**
  * Enable automatic packet-capture for CRL URI unsupported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#crl_uri_unsupported VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#crl_uri_unsupported}
  */
  readonly crlUriUnsupported?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for OCSP cache miss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_cache_miss VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_cache_miss}
  */
  readonly ocspCacheMiss?: number;
  /**
  * Enable automatic packet-capture for OCSP cache status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_cache_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_cache_status_revoked}
  */
  readonly ocspCacheStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for Certificate chain status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_chain_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_chain_status_revoked}
  */
  readonly ocspChainStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for Certificate chain status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_chain_status_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_chain_status_unknown}
  */
  readonly ocspChainStatusUnknown?: number;
  /**
  * Enable automatic packet-capture for OCSP connection error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_connection_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_connection_error}
  */
  readonly ocspConnectionError?: number;
  /**
  * Enable automatic packet-capture for Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_other_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_other_error}
  */
  readonly ocspOtherError?: number;
  /**
  * Enable automatic packet-capture for Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_response_no_nonce VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_response_no_nonce}
  */
  readonly ocspResponseNoNonce?: number;
  /**
  * Enable automatic packet-capture for Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_response_nonce_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_response_nonce_error}
  */
  readonly ocspResponseNonceError?: number;
  /**
  * Enable automatic packet-capture for OCSP response status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_response_status_revoked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_response_status_revoked}
  */
  readonly ocspResponseStatusRevoked?: number;
  /**
  * Enable automatic packet-capture for OCSP response status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_response_status_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_response_status_unknown}
  */
  readonly ocspResponseStatusUnknown?: number;
  /**
  * Enable automatic packet-capture for Log OCSP URI https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_uri_https VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_uri_https}
  */
  readonly ocspUriHttps?: number;
  /**
  * Enable automatic packet-capture for OCSP URI not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_uri_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_uri_not_found}
  */
  readonly ocspUriNotFound?: number;
  /**
  * Enable automatic packet-capture for OCSP URI unsupported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#ocsp_uri_unsupported VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#ocsp_uri_unsupported}
  */
  readonly ocspUriUnsupported?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslCertRevokeTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_cert_revoke_trigger_stats_inc',
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
    this._crlCacheStatusRevoked = config.crlCacheStatusRevoked;
    this._crlConnectionError = config.crlConnectionError;
    this._crlOtherError = config.crlOtherError;
    this._crlResponseStatusRevoked = config.crlResponseStatusRevoked;
    this._crlResponseStatusUnknown = config.crlResponseStatusUnknown;
    this._crlUriHttps = config.crlUriHttps;
    this._crlUriNotFound = config.crlUriNotFound;
    this._crlUriUnsupported = config.crlUriUnsupported;
    this._id = config.id;
    this._name = config.name;
    this._ocspCacheMiss = config.ocspCacheMiss;
    this._ocspCacheStatusRevoked = config.ocspCacheStatusRevoked;
    this._ocspChainStatusRevoked = config.ocspChainStatusRevoked;
    this._ocspChainStatusUnknown = config.ocspChainStatusUnknown;
    this._ocspConnectionError = config.ocspConnectionError;
    this._ocspOtherError = config.ocspOtherError;
    this._ocspResponseNoNonce = config.ocspResponseNoNonce;
    this._ocspResponseNonceError = config.ocspResponseNonceError;
    this._ocspResponseStatusRevoked = config.ocspResponseStatusRevoked;
    this._ocspResponseStatusUnknown = config.ocspResponseStatusUnknown;
    this._ocspUriHttps = config.ocspUriHttps;
    this._ocspUriNotFound = config.ocspUriNotFound;
    this._ocspUriUnsupported = config.ocspUriUnsupported;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crl_cache_status_revoked: cdktf.numberToTerraform(this._crlCacheStatusRevoked),
      crl_connection_error: cdktf.numberToTerraform(this._crlConnectionError),
      crl_other_error: cdktf.numberToTerraform(this._crlOtherError),
      crl_response_status_revoked: cdktf.numberToTerraform(this._crlResponseStatusRevoked),
      crl_response_status_unknown: cdktf.numberToTerraform(this._crlResponseStatusUnknown),
      crl_uri_https: cdktf.numberToTerraform(this._crlUriHttps),
      crl_uri_not_found: cdktf.numberToTerraform(this._crlUriNotFound),
      crl_uri_unsupported: cdktf.numberToTerraform(this._crlUriUnsupported),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ocsp_cache_miss: cdktf.numberToTerraform(this._ocspCacheMiss),
      ocsp_cache_status_revoked: cdktf.numberToTerraform(this._ocspCacheStatusRevoked),
      ocsp_chain_status_revoked: cdktf.numberToTerraform(this._ocspChainStatusRevoked),
      ocsp_chain_status_unknown: cdktf.numberToTerraform(this._ocspChainStatusUnknown),
      ocsp_connection_error: cdktf.numberToTerraform(this._ocspConnectionError),
      ocsp_other_error: cdktf.numberToTerraform(this._ocspOtherError),
      ocsp_response_no_nonce: cdktf.numberToTerraform(this._ocspResponseNoNonce),
      ocsp_response_nonce_error: cdktf.numberToTerraform(this._ocspResponseNonceError),
      ocsp_response_status_revoked: cdktf.numberToTerraform(this._ocspResponseStatusRevoked),
      ocsp_response_status_unknown: cdktf.numberToTerraform(this._ocspResponseStatusUnknown),
      ocsp_uri_https: cdktf.numberToTerraform(this._ocspUriHttps),
      ocsp_uri_not_found: cdktf.numberToTerraform(this._ocspUriNotFound),
      ocsp_uri_unsupported: cdktf.numberToTerraform(this._ocspUriUnsupported),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crl_cache_status_revoked: {
        value: cdktf.numberToHclTerraform(this._crlCacheStatusRevoked),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crl_connection_error: {
        value: cdktf.numberToHclTerraform(this._crlConnectionError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crl_other_error: {
        value: cdktf.numberToHclTerraform(this._crlOtherError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crl_response_status_revoked: {
        value: cdktf.numberToHclTerraform(this._crlResponseStatusRevoked),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crl_response_status_unknown: {
        value: cdktf.numberToHclTerraform(this._crlResponseStatusUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crl_uri_https: {
        value: cdktf.numberToHclTerraform(this._crlUriHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crl_uri_not_found: {
        value: cdktf.numberToHclTerraform(this._crlUriNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crl_uri_unsupported: {
        value: cdktf.numberToHclTerraform(this._crlUriUnsupported),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_cache_miss: {
        value: cdktf.numberToHclTerraform(this._ocspCacheMiss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_cache_status_revoked: {
        value: cdktf.numberToHclTerraform(this._ocspCacheStatusRevoked),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_chain_status_revoked: {
        value: cdktf.numberToHclTerraform(this._ocspChainStatusRevoked),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_chain_status_unknown: {
        value: cdktf.numberToHclTerraform(this._ocspChainStatusUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_connection_error: {
        value: cdktf.numberToHclTerraform(this._ocspConnectionError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_other_error: {
        value: cdktf.numberToHclTerraform(this._ocspOtherError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_response_no_nonce: {
        value: cdktf.numberToHclTerraform(this._ocspResponseNoNonce),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_response_nonce_error: {
        value: cdktf.numberToHclTerraform(this._ocspResponseNonceError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_response_status_revoked: {
        value: cdktf.numberToHclTerraform(this._ocspResponseStatusRevoked),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_response_status_unknown: {
        value: cdktf.numberToHclTerraform(this._ocspResponseStatusUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_uri_https: {
        value: cdktf.numberToHclTerraform(this._ocspUriHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_uri_not_found: {
        value: cdktf.numberToHclTerraform(this._ocspUriNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_uri_unsupported: {
        value: cdktf.numberToHclTerraform(this._ocspUriUnsupported),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
