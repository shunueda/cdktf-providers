// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Connections failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#connections_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#connections_failed}
  */
  readonly connectionsFailed?: number;
  /**
  * Enable automatic packet-capture for Failed in Certificate signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#failed_in_certificate_signing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#failed_in_certificate_signing}
  */
  readonly failedInCertificateSigning?: number;
  /**
  * Enable automatic packet-capture for Failed in Certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#failed_in_certificate_verification VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#failed_in_certificate_verification}
  */
  readonly failedInCertificateVerification?: number;
  /**
  * Enable automatic packet-capture for Failed in crypto operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#failed_in_crypto_operations VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#failed_in_crypto_operations}
  */
  readonly failedInCryptoOperations?: number;
  /**
  * Enable automatic packet-capture for Failed in SSL handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#failed_in_ssl_handshakes VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#failed_in_ssl_handshakes}
  */
  readonly failedInSslHandshakes?: number;
  /**
  * Enable automatic packet-capture for Failed in TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#failed_in_tcp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#failed_in_tcp}
  */
  readonly failedInTcp?: number;
  /**
  * Enable automatic packet-capture for Invalid OCSP Stapling Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#invalid_ocsp_stapling_response VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#invalid_ocsp_stapling_response}
  */
  readonly invalidOcspStaplingResponse?: number;
  /**
  * Enable automatic packet-capture for Revoked OCSP Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#revoked_ocsp_response VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#revoked_ocsp_response}
  */
  readonly revokedOcspResponse?: number;
  /**
  * Enable automatic packet-capture for Unsupported SSL version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#unsupported_ssl_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connections_failed: cdktf.numberToTerraform(struct!.connectionsFailed),
    failed_in_certificate_signing: cdktf.numberToTerraform(struct!.failedInCertificateSigning),
    failed_in_certificate_verification: cdktf.numberToTerraform(struct!.failedInCertificateVerification),
    failed_in_crypto_operations: cdktf.numberToTerraform(struct!.failedInCryptoOperations),
    failed_in_ssl_handshakes: cdktf.numberToTerraform(struct!.failedInSslHandshakes),
    failed_in_tcp: cdktf.numberToTerraform(struct!.failedInTcp),
    invalid_ocsp_stapling_response: cdktf.numberToTerraform(struct!.invalidOcspStaplingResponse),
    revoked_ocsp_response: cdktf.numberToTerraform(struct!.revokedOcspResponse),
    unsupported_ssl_version: cdktf.numberToTerraform(struct!.unsupportedSslVersion),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connections_failed: {
      value: cdktf.numberToHclTerraform(struct!.connectionsFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_in_certificate_signing: {
      value: cdktf.numberToHclTerraform(struct!.failedInCertificateSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_in_certificate_verification: {
      value: cdktf.numberToHclTerraform(struct!.failedInCertificateVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_in_crypto_operations: {
      value: cdktf.numberToHclTerraform(struct!.failedInCryptoOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_in_ssl_handshakes: {
      value: cdktf.numberToHclTerraform(struct!.failedInSslHandshakes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_in_tcp: {
      value: cdktf.numberToHclTerraform(struct!.failedInTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_ocsp_stapling_response: {
      value: cdktf.numberToHclTerraform(struct!.invalidOcspStaplingResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revoked_ocsp_response: {
      value: cdktf.numberToHclTerraform(struct!.revokedOcspResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_ssl_version: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedSslVersion),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionsFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionsFailed = this._connectionsFailed;
    }
    if (this._failedInCertificateSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInCertificateSigning = this._failedInCertificateSigning;
    }
    if (this._failedInCertificateVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInCertificateVerification = this._failedInCertificateVerification;
    }
    if (this._failedInCryptoOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInCryptoOperations = this._failedInCryptoOperations;
    }
    if (this._failedInSslHandshakes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInSslHandshakes = this._failedInSslHandshakes;
    }
    if (this._failedInTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInTcp = this._failedInTcp;
    }
    if (this._invalidOcspStaplingResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidOcspStaplingResponse = this._invalidOcspStaplingResponse;
    }
    if (this._revokedOcspResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedOcspResponse = this._revokedOcspResponse;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionsFailed = undefined;
      this._failedInCertificateSigning = undefined;
      this._failedInCertificateVerification = undefined;
      this._failedInCryptoOperations = undefined;
      this._failedInSslHandshakes = undefined;
      this._failedInTcp = undefined;
      this._invalidOcspStaplingResponse = undefined;
      this._revokedOcspResponse = undefined;
      this._unsupportedSslVersion = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionsFailed = value.connectionsFailed;
      this._failedInCertificateSigning = value.failedInCertificateSigning;
      this._failedInCertificateVerification = value.failedInCertificateVerification;
      this._failedInCryptoOperations = value.failedInCryptoOperations;
      this._failedInSslHandshakes = value.failedInSslHandshakes;
      this._failedInTcp = value.failedInTcp;
      this._invalidOcspStaplingResponse = value.invalidOcspStaplingResponse;
      this._revokedOcspResponse = value.revokedOcspResponse;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._uuid = value.uuid;
    }
  }

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
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Connections failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#connections_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#connections_failed}
  */
  readonly connectionsFailed?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Failed in Certificate signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#failed_in_certificate_signing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#failed_in_certificate_signing}
  */
  readonly failedInCertificateSigning?: number;
  /**
  * Enable automatic packet-capture for Failed in Certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#failed_in_certificate_verification VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#failed_in_certificate_verification}
  */
  readonly failedInCertificateVerification?: number;
  /**
  * Enable automatic packet-capture for Failed in crypto operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#failed_in_crypto_operations VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#failed_in_crypto_operations}
  */
  readonly failedInCryptoOperations?: number;
  /**
  * Enable automatic packet-capture for Failed in SSL handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#failed_in_ssl_handshakes VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#failed_in_ssl_handshakes}
  */
  readonly failedInSslHandshakes?: number;
  /**
  * Enable automatic packet-capture for Failed in TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#failed_in_tcp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#failed_in_tcp}
  */
  readonly failedInTcp?: number;
  /**
  * Enable automatic packet-capture for Invalid OCSP Stapling Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#invalid_ocsp_stapling_response VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#invalid_ocsp_stapling_response}
  */
  readonly invalidOcspStaplingResponse?: number;
  /**
  * Enable automatic packet-capture for Revoked OCSP Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#revoked_ocsp_response VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#revoked_ocsp_response}
  */
  readonly revokedOcspResponse?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Unsupported SSL version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#unsupported_ssl_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connections_failed: cdktf.numberToTerraform(struct!.connectionsFailed),
    duration: cdktf.numberToTerraform(struct!.duration),
    failed_in_certificate_signing: cdktf.numberToTerraform(struct!.failedInCertificateSigning),
    failed_in_certificate_verification: cdktf.numberToTerraform(struct!.failedInCertificateVerification),
    failed_in_crypto_operations: cdktf.numberToTerraform(struct!.failedInCryptoOperations),
    failed_in_ssl_handshakes: cdktf.numberToTerraform(struct!.failedInSslHandshakes),
    failed_in_tcp: cdktf.numberToTerraform(struct!.failedInTcp),
    invalid_ocsp_stapling_response: cdktf.numberToTerraform(struct!.invalidOcspStaplingResponse),
    revoked_ocsp_response: cdktf.numberToTerraform(struct!.revokedOcspResponse),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    unsupported_ssl_version: cdktf.numberToTerraform(struct!.unsupportedSslVersion),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connections_failed: {
      value: cdktf.numberToHclTerraform(struct!.connectionsFailed),
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
    failed_in_certificate_signing: {
      value: cdktf.numberToHclTerraform(struct!.failedInCertificateSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_in_certificate_verification: {
      value: cdktf.numberToHclTerraform(struct!.failedInCertificateVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_in_crypto_operations: {
      value: cdktf.numberToHclTerraform(struct!.failedInCryptoOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_in_ssl_handshakes: {
      value: cdktf.numberToHclTerraform(struct!.failedInSslHandshakes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_in_tcp: {
      value: cdktf.numberToHclTerraform(struct!.failedInTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_ocsp_stapling_response: {
      value: cdktf.numberToHclTerraform(struct!.invalidOcspStaplingResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revoked_ocsp_response: {
      value: cdktf.numberToHclTerraform(struct!.revokedOcspResponse),
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
    unsupported_ssl_version: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedSslVersion),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionsFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionsFailed = this._connectionsFailed;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._failedInCertificateSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInCertificateSigning = this._failedInCertificateSigning;
    }
    if (this._failedInCertificateVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInCertificateVerification = this._failedInCertificateVerification;
    }
    if (this._failedInCryptoOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInCryptoOperations = this._failedInCryptoOperations;
    }
    if (this._failedInSslHandshakes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInSslHandshakes = this._failedInSslHandshakes;
    }
    if (this._failedInTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInTcp = this._failedInTcp;
    }
    if (this._invalidOcspStaplingResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidOcspStaplingResponse = this._invalidOcspStaplingResponse;
    }
    if (this._revokedOcspResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedOcspResponse = this._revokedOcspResponse;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionsFailed = undefined;
      this._duration = undefined;
      this._failedInCertificateSigning = undefined;
      this._failedInCertificateVerification = undefined;
      this._failedInCryptoOperations = undefined;
      this._failedInSslHandshakes = undefined;
      this._failedInTcp = undefined;
      this._invalidOcspStaplingResponse = undefined;
      this._revokedOcspResponse = undefined;
      this._thresholdExceededBy = undefined;
      this._unsupportedSslVersion = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionsFailed = value.connectionsFailed;
      this._duration = value.duration;
      this._failedInCertificateSigning = value.failedInCertificateSigning;
      this._failedInCertificateVerification = value.failedInCertificateVerification;
      this._failedInCryptoOperations = value.failedInCryptoOperations;
      this._failedInSslHandshakes = value.failedInSslHandshakes;
      this._failedInTcp = value.failedInTcp;
      this._invalidOcspStaplingResponse = value.invalidOcspStaplingResponse;
      this._revokedOcspResponse = value.revokedOcspResponse;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._uuid = value.uuid;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ssl_forward_proxy',
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
    this._templateName = config.templateName;
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateA) {
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
      template_name: cdktf.stringToTerraform(this._templateName),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSslForwardProxyTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
