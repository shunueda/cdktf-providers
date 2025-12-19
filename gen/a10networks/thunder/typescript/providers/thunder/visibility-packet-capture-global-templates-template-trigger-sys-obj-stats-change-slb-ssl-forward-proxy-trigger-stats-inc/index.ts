// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Connections failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#connections_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#connections_failed}
  */
  readonly connectionsFailed?: number;
  /**
  * Enable automatic packet-capture for Failed in Certificate signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#failed_in_certificate_signing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#failed_in_certificate_signing}
  */
  readonly failedInCertificateSigning?: number;
  /**
  * Enable automatic packet-capture for Failed in Certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#failed_in_certificate_verification VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#failed_in_certificate_verification}
  */
  readonly failedInCertificateVerification?: number;
  /**
  * Enable automatic packet-capture for Failed in crypto operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#failed_in_crypto_operations VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#failed_in_crypto_operations}
  */
  readonly failedInCryptoOperations?: number;
  /**
  * Enable automatic packet-capture for Failed in SSL handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#failed_in_ssl_handshakes VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#failed_in_ssl_handshakes}
  */
  readonly failedInSslHandshakes?: number;
  /**
  * Enable automatic packet-capture for Failed in TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#failed_in_tcp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#failed_in_tcp}
  */
  readonly failedInTcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Invalid OCSP Stapling Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#invalid_ocsp_stapling_response VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#invalid_ocsp_stapling_response}
  */
  readonly invalidOcspStaplingResponse?: number;
  /**
  * Enable automatic packet-capture for Revoked OCSP Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#revoked_ocsp_response VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#revoked_ocsp_response}
  */
  readonly revokedOcspResponse?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#template_name}
  */
  readonly templateName: string;
  /**
  * Enable automatic packet-capture for Unsupported SSL version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#unsupported_ssl_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy_trigger_stats_inc',
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
    this._connectionsFailed = config.connectionsFailed;
    this._failedInCertificateSigning = config.failedInCertificateSigning;
    this._failedInCertificateVerification = config.failedInCertificateVerification;
    this._failedInCryptoOperations = config.failedInCryptoOperations;
    this._failedInSslHandshakes = config.failedInSslHandshakes;
    this._failedInTcp = config.failedInTcp;
    this._id = config.id;
    this._invalidOcspStaplingResponse = config.invalidOcspStaplingResponse;
    this._revokedOcspResponse = config.revokedOcspResponse;
    this._templateName = config.templateName;
    this._unsupportedSslVersion = config.unsupportedSslVersion;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connections_failed - computed: false, optional: true, required: false
  private _connectionsFailed?: number; 
  public get connectionsFailed() {
    return this.getNumberAttribute('connections_failed');
  }
  public set connectionsFailed(value: number) {
    this._connectionsFailed = value;
  }
  public resetConnectionsFailed() {
    this._connectionsFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsFailedInput() {
    return this._connectionsFailed;
  }

  // failed_in_certificate_signing - computed: false, optional: true, required: false
  private _failedInCertificateSigning?: number; 
  public get failedInCertificateSigning() {
    return this.getNumberAttribute('failed_in_certificate_signing');
  }
  public set failedInCertificateSigning(value: number) {
    this._failedInCertificateSigning = value;
  }
  public resetFailedInCertificateSigning() {
    this._failedInCertificateSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInCertificateSigningInput() {
    return this._failedInCertificateSigning;
  }

  // failed_in_certificate_verification - computed: false, optional: true, required: false
  private _failedInCertificateVerification?: number; 
  public get failedInCertificateVerification() {
    return this.getNumberAttribute('failed_in_certificate_verification');
  }
  public set failedInCertificateVerification(value: number) {
    this._failedInCertificateVerification = value;
  }
  public resetFailedInCertificateVerification() {
    this._failedInCertificateVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInCertificateVerificationInput() {
    return this._failedInCertificateVerification;
  }

  // failed_in_crypto_operations - computed: false, optional: true, required: false
  private _failedInCryptoOperations?: number; 
  public get failedInCryptoOperations() {
    return this.getNumberAttribute('failed_in_crypto_operations');
  }
  public set failedInCryptoOperations(value: number) {
    this._failedInCryptoOperations = value;
  }
  public resetFailedInCryptoOperations() {
    this._failedInCryptoOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInCryptoOperationsInput() {
    return this._failedInCryptoOperations;
  }

  // failed_in_ssl_handshakes - computed: false, optional: true, required: false
  private _failedInSslHandshakes?: number; 
  public get failedInSslHandshakes() {
    return this.getNumberAttribute('failed_in_ssl_handshakes');
  }
  public set failedInSslHandshakes(value: number) {
    this._failedInSslHandshakes = value;
  }
  public resetFailedInSslHandshakes() {
    this._failedInSslHandshakes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInSslHandshakesInput() {
    return this._failedInSslHandshakes;
  }

  // failed_in_tcp - computed: false, optional: true, required: false
  private _failedInTcp?: number; 
  public get failedInTcp() {
    return this.getNumberAttribute('failed_in_tcp');
  }
  public set failedInTcp(value: number) {
    this._failedInTcp = value;
  }
  public resetFailedInTcp() {
    this._failedInTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInTcpInput() {
    return this._failedInTcp;
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

  // invalid_ocsp_stapling_response - computed: false, optional: true, required: false
  private _invalidOcspStaplingResponse?: number; 
  public get invalidOcspStaplingResponse() {
    return this.getNumberAttribute('invalid_ocsp_stapling_response');
  }
  public set invalidOcspStaplingResponse(value: number) {
    this._invalidOcspStaplingResponse = value;
  }
  public resetInvalidOcspStaplingResponse() {
    this._invalidOcspStaplingResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidOcspStaplingResponseInput() {
    return this._invalidOcspStaplingResponse;
  }

  // revoked_ocsp_response - computed: false, optional: true, required: false
  private _revokedOcspResponse?: number; 
  public get revokedOcspResponse() {
    return this.getNumberAttribute('revoked_ocsp_response');
  }
  public set revokedOcspResponse(value: number) {
    this._revokedOcspResponse = value;
  }
  public resetRevokedOcspResponse() {
    this._revokedOcspResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedOcspResponseInput() {
    return this._revokedOcspResponse;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
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
      connections_failed: cdktf.numberToTerraform(this._connectionsFailed),
      failed_in_certificate_signing: cdktf.numberToTerraform(this._failedInCertificateSigning),
      failed_in_certificate_verification: cdktf.numberToTerraform(this._failedInCertificateVerification),
      failed_in_crypto_operations: cdktf.numberToTerraform(this._failedInCryptoOperations),
      failed_in_ssl_handshakes: cdktf.numberToTerraform(this._failedInSslHandshakes),
      failed_in_tcp: cdktf.numberToTerraform(this._failedInTcp),
      id: cdktf.stringToTerraform(this._id),
      invalid_ocsp_stapling_response: cdktf.numberToTerraform(this._invalidOcspStaplingResponse),
      revoked_ocsp_response: cdktf.numberToTerraform(this._revokedOcspResponse),
      template_name: cdktf.stringToTerraform(this._templateName),
      unsupported_ssl_version: cdktf.numberToTerraform(this._unsupportedSslVersion),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connections_failed: {
        value: cdktf.numberToHclTerraform(this._connectionsFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_in_certificate_signing: {
        value: cdktf.numberToHclTerraform(this._failedInCertificateSigning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_in_certificate_verification: {
        value: cdktf.numberToHclTerraform(this._failedInCertificateVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_in_crypto_operations: {
        value: cdktf.numberToHclTerraform(this._failedInCryptoOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_in_ssl_handshakes: {
        value: cdktf.numberToHclTerraform(this._failedInSslHandshakes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_in_tcp: {
        value: cdktf.numberToHclTerraform(this._failedInTcp),
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
      invalid_ocsp_stapling_response: {
        value: cdktf.numberToHclTerraform(this._invalidOcspStaplingResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      revoked_ocsp_response: {
        value: cdktf.numberToHclTerraform(this._revokedOcspResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsupported_ssl_version: {
        value: cdktf.numberToHclTerraform(this._unsupportedSslVersion),
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
