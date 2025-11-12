// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificatesRevocationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate revocation CRL settings. If this attribute is omitted, CRL checks are disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#crl_settings CertificatesRevocationSettings#crl_settings}
  */
  readonly crlSettings?: CertificatesRevocationSettingsCrlSettings;
  /**
  * Certificate revocation OCSP settings. If this attribute is omitted, OCSP checks are disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#ocsp_settings CertificatesRevocationSettings#ocsp_settings}
  */
  readonly ocspSettings?: CertificatesRevocationSettingsOcspSettings;
  /**
  * If OCSP messaging is routed through a proxy server, specify the server's host (DNS name or IP address) and the port number. The same proxy information applies to CRL checking, when CRL is enabled for failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#proxy_settings CertificatesRevocationSettings#proxy_settings}
  */
  readonly proxySettings?: CertificatesRevocationSettingsProxySettings;
}
export interface CertificatesRevocationSettingsCrlSettings {
  /**
  * Next retry on next update expiration in minutes. This value defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#next_retry_mins_when_next_update_in_past CertificatesRevocationSettings#next_retry_mins_when_next_update_in_past}
  */
  readonly nextRetryMinsWhenNextUpdateInPast?: number;
  /**
  * Next retry on resolution failure in minutes. This value defaults to `1440`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#next_retry_mins_when_resolve_failed CertificatesRevocationSettings#next_retry_mins_when_resolve_failed}
  */
  readonly nextRetryMinsWhenResolveFailed?: number;
  /**
  * Treat non retrievable CRL as revoked. This setting defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#treat_non_retrievable_crl_as_revoked CertificatesRevocationSettings#treat_non_retrievable_crl_as_revoked}
  */
  readonly treatNonRetrievableCrlAsRevoked?: boolean | cdktf.IResolvable;
  /**
  * Verify CRL signature. This setting defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#verify_crl_signature CertificatesRevocationSettings#verify_crl_signature}
  */
  readonly verifyCrlSignature?: boolean | cdktf.IResolvable;
}

export function certificatesRevocationSettingsCrlSettingsToTerraform(struct?: CertificatesRevocationSettingsCrlSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_retry_mins_when_next_update_in_past: cdktf.numberToTerraform(struct!.nextRetryMinsWhenNextUpdateInPast),
    next_retry_mins_when_resolve_failed: cdktf.numberToTerraform(struct!.nextRetryMinsWhenResolveFailed),
    treat_non_retrievable_crl_as_revoked: cdktf.booleanToTerraform(struct!.treatNonRetrievableCrlAsRevoked),
    verify_crl_signature: cdktf.booleanToTerraform(struct!.verifyCrlSignature),
  }
}


export function certificatesRevocationSettingsCrlSettingsToHclTerraform(struct?: CertificatesRevocationSettingsCrlSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_retry_mins_when_next_update_in_past: {
      value: cdktf.numberToHclTerraform(struct!.nextRetryMinsWhenNextUpdateInPast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_retry_mins_when_resolve_failed: {
      value: cdktf.numberToHclTerraform(struct!.nextRetryMinsWhenResolveFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    treat_non_retrievable_crl_as_revoked: {
      value: cdktf.booleanToHclTerraform(struct!.treatNonRetrievableCrlAsRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_crl_signature: {
      value: cdktf.booleanToHclTerraform(struct!.verifyCrlSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesRevocationSettingsCrlSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificatesRevocationSettingsCrlSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextRetryMinsWhenNextUpdateInPast !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextRetryMinsWhenNextUpdateInPast = this._nextRetryMinsWhenNextUpdateInPast;
    }
    if (this._nextRetryMinsWhenResolveFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextRetryMinsWhenResolveFailed = this._nextRetryMinsWhenResolveFailed;
    }
    if (this._treatNonRetrievableCrlAsRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatNonRetrievableCrlAsRevoked = this._treatNonRetrievableCrlAsRevoked;
    }
    if (this._verifyCrlSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCrlSignature = this._verifyCrlSignature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesRevocationSettingsCrlSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nextRetryMinsWhenNextUpdateInPast = undefined;
      this._nextRetryMinsWhenResolveFailed = undefined;
      this._treatNonRetrievableCrlAsRevoked = undefined;
      this._verifyCrlSignature = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nextRetryMinsWhenNextUpdateInPast = value.nextRetryMinsWhenNextUpdateInPast;
      this._nextRetryMinsWhenResolveFailed = value.nextRetryMinsWhenResolveFailed;
      this._treatNonRetrievableCrlAsRevoked = value.treatNonRetrievableCrlAsRevoked;
      this._verifyCrlSignature = value.verifyCrlSignature;
    }
  }

  // next_retry_mins_when_next_update_in_past - computed: true, optional: true, required: false
  private _nextRetryMinsWhenNextUpdateInPast?: number; 
  public get nextRetryMinsWhenNextUpdateInPast() {
    return this.getNumberAttribute('next_retry_mins_when_next_update_in_past');
  }
  public set nextRetryMinsWhenNextUpdateInPast(value: number) {
    this._nextRetryMinsWhenNextUpdateInPast = value;
  }
  public resetNextRetryMinsWhenNextUpdateInPast() {
    this._nextRetryMinsWhenNextUpdateInPast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRetryMinsWhenNextUpdateInPastInput() {
    return this._nextRetryMinsWhenNextUpdateInPast;
  }

  // next_retry_mins_when_resolve_failed - computed: true, optional: true, required: false
  private _nextRetryMinsWhenResolveFailed?: number; 
  public get nextRetryMinsWhenResolveFailed() {
    return this.getNumberAttribute('next_retry_mins_when_resolve_failed');
  }
  public set nextRetryMinsWhenResolveFailed(value: number) {
    this._nextRetryMinsWhenResolveFailed = value;
  }
  public resetNextRetryMinsWhenResolveFailed() {
    this._nextRetryMinsWhenResolveFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRetryMinsWhenResolveFailedInput() {
    return this._nextRetryMinsWhenResolveFailed;
  }

  // treat_non_retrievable_crl_as_revoked - computed: true, optional: true, required: false
  private _treatNonRetrievableCrlAsRevoked?: boolean | cdktf.IResolvable; 
  public get treatNonRetrievableCrlAsRevoked() {
    return this.getBooleanAttribute('treat_non_retrievable_crl_as_revoked');
  }
  public set treatNonRetrievableCrlAsRevoked(value: boolean | cdktf.IResolvable) {
    this._treatNonRetrievableCrlAsRevoked = value;
  }
  public resetTreatNonRetrievableCrlAsRevoked() {
    this._treatNonRetrievableCrlAsRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatNonRetrievableCrlAsRevokedInput() {
    return this._treatNonRetrievableCrlAsRevoked;
  }

  // verify_crl_signature - computed: true, optional: true, required: false
  private _verifyCrlSignature?: boolean | cdktf.IResolvable; 
  public get verifyCrlSignature() {
    return this.getBooleanAttribute('verify_crl_signature');
  }
  public set verifyCrlSignature(value: boolean | cdktf.IResolvable) {
    this._verifyCrlSignature = value;
  }
  public resetVerifyCrlSignature() {
    this._verifyCrlSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCrlSignatureInput() {
    return this._verifyCrlSignature;
  }
}
export interface CertificatesRevocationSettingsOcspSettingsResponderCertReference {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#id CertificatesRevocationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function certificatesRevocationSettingsOcspSettingsResponderCertReferenceToTerraform(struct?: CertificatesRevocationSettingsOcspSettingsResponderCertReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function certificatesRevocationSettingsOcspSettingsResponderCertReferenceToHclTerraform(struct?: CertificatesRevocationSettingsOcspSettingsResponderCertReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesRevocationSettingsOcspSettingsResponderCertReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificatesRevocationSettingsOcspSettingsResponderCertReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesRevocationSettingsOcspSettingsResponderCertReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CertificatesRevocationSettingsOcspSettings {
  /**
  * Action on responder unavailable. This value defaults to `CONTINUE`. Options are `CONTINUE`, `FAIL`, `FAILOVER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#action_on_responder_unavailable CertificatesRevocationSettings#action_on_responder_unavailable}
  */
  readonly actionOnResponderUnavailable?: string;
  /**
  * Action on status unknown. This value defaults to `FAIL`. Options are `CONTINUE`, `FAIL`, `FAILOVER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#action_on_status_unknown CertificatesRevocationSettings#action_on_status_unknown}
  */
  readonly actionOnStatusUnknown?: string;
  /**
  * Action on unsuccessful response. This value defaults to `FAIL`. Options are `CONTINUE`, `FAIL`, `FAILOVER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#action_on_unsuccessful_response CertificatesRevocationSettings#action_on_unsuccessful_response}
  */
  readonly actionOnUnsuccessfulResponse?: string;
  /**
  * Current update grace period in minutes. This value defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#current_update_grace_period CertificatesRevocationSettings#current_update_grace_period}
  */
  readonly currentUpdateGracePeriod?: number;
  /**
  * Next update grace period in minutes. This value defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#next_update_grace_period CertificatesRevocationSettings#next_update_grace_period}
  */
  readonly nextUpdateGracePeriod?: number;
  /**
  * Do not allow responder to use cached responses. This setting defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#requester_add_nonce CertificatesRevocationSettings#requester_add_nonce}
  */
  readonly requesterAddNonce?: boolean | cdktf.IResolvable;
  /**
  * Resource link to OCSP responder signature verification certificate. A previously selected certificate will be deselected if this attribute is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#responder_cert_reference CertificatesRevocationSettings#responder_cert_reference}
  */
  readonly responderCertReference?: CertificatesRevocationSettingsOcspSettingsResponderCertReference;
  /**
  * Responder connection timeout in seconds. This value defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#responder_timeout CertificatesRevocationSettings#responder_timeout}
  */
  readonly responderTimeout?: number;
  /**
  * Default responder URL. This URL is used if the certificate being checked does not specify an OCSP responder URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#responder_url CertificatesRevocationSettings#responder_url}
  */
  readonly responderUrl?: string;
  /**
  * Response cache period in hours. This value defaults to `48`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#response_cache_period CertificatesRevocationSettings#response_cache_period}
  */
  readonly responseCachePeriod?: number;
}

export function certificatesRevocationSettingsOcspSettingsToTerraform(struct?: CertificatesRevocationSettingsOcspSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_responder_unavailable: cdktf.stringToTerraform(struct!.actionOnResponderUnavailable),
    action_on_status_unknown: cdktf.stringToTerraform(struct!.actionOnStatusUnknown),
    action_on_unsuccessful_response: cdktf.stringToTerraform(struct!.actionOnUnsuccessfulResponse),
    current_update_grace_period: cdktf.numberToTerraform(struct!.currentUpdateGracePeriod),
    next_update_grace_period: cdktf.numberToTerraform(struct!.nextUpdateGracePeriod),
    requester_add_nonce: cdktf.booleanToTerraform(struct!.requesterAddNonce),
    responder_cert_reference: certificatesRevocationSettingsOcspSettingsResponderCertReferenceToTerraform(struct!.responderCertReference),
    responder_timeout: cdktf.numberToTerraform(struct!.responderTimeout),
    responder_url: cdktf.stringToTerraform(struct!.responderUrl),
    response_cache_period: cdktf.numberToTerraform(struct!.responseCachePeriod),
  }
}


export function certificatesRevocationSettingsOcspSettingsToHclTerraform(struct?: CertificatesRevocationSettingsOcspSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_on_responder_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.actionOnResponderUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_on_status_unknown: {
      value: cdktf.stringToHclTerraform(struct!.actionOnStatusUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_on_unsuccessful_response: {
      value: cdktf.stringToHclTerraform(struct!.actionOnUnsuccessfulResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_update_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.currentUpdateGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_update_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.nextUpdateGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requester_add_nonce: {
      value: cdktf.booleanToHclTerraform(struct!.requesterAddNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    responder_cert_reference: {
      value: certificatesRevocationSettingsOcspSettingsResponderCertReferenceToHclTerraform(struct!.responderCertReference),
      isBlock: true,
      type: "struct",
      storageClassType: "CertificatesRevocationSettingsOcspSettingsResponderCertReference",
    },
    responder_timeout: {
      value: cdktf.numberToHclTerraform(struct!.responderTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    responder_url: {
      value: cdktf.stringToHclTerraform(struct!.responderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_cache_period: {
      value: cdktf.numberToHclTerraform(struct!.responseCachePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesRevocationSettingsOcspSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificatesRevocationSettingsOcspSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnResponderUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnResponderUnavailable = this._actionOnResponderUnavailable;
    }
    if (this._actionOnStatusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnStatusUnknown = this._actionOnStatusUnknown;
    }
    if (this._actionOnUnsuccessfulResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnUnsuccessfulResponse = this._actionOnUnsuccessfulResponse;
    }
    if (this._currentUpdateGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentUpdateGracePeriod = this._currentUpdateGracePeriod;
    }
    if (this._nextUpdateGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpdateGracePeriod = this._nextUpdateGracePeriod;
    }
    if (this._requesterAddNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.requesterAddNonce = this._requesterAddNonce;
    }
    if (this._responderCertReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderCertReference = this._responderCertReference?.internalValue;
    }
    if (this._responderTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderTimeout = this._responderTimeout;
    }
    if (this._responderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderUrl = this._responderUrl;
    }
    if (this._responseCachePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCachePeriod = this._responseCachePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesRevocationSettingsOcspSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionOnResponderUnavailable = undefined;
      this._actionOnStatusUnknown = undefined;
      this._actionOnUnsuccessfulResponse = undefined;
      this._currentUpdateGracePeriod = undefined;
      this._nextUpdateGracePeriod = undefined;
      this._requesterAddNonce = undefined;
      this._responderCertReference.internalValue = undefined;
      this._responderTimeout = undefined;
      this._responderUrl = undefined;
      this._responseCachePeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionOnResponderUnavailable = value.actionOnResponderUnavailable;
      this._actionOnStatusUnknown = value.actionOnStatusUnknown;
      this._actionOnUnsuccessfulResponse = value.actionOnUnsuccessfulResponse;
      this._currentUpdateGracePeriod = value.currentUpdateGracePeriod;
      this._nextUpdateGracePeriod = value.nextUpdateGracePeriod;
      this._requesterAddNonce = value.requesterAddNonce;
      this._responderCertReference.internalValue = value.responderCertReference;
      this._responderTimeout = value.responderTimeout;
      this._responderUrl = value.responderUrl;
      this._responseCachePeriod = value.responseCachePeriod;
    }
  }

  // action_on_responder_unavailable - computed: true, optional: true, required: false
  private _actionOnResponderUnavailable?: string; 
  public get actionOnResponderUnavailable() {
    return this.getStringAttribute('action_on_responder_unavailable');
  }
  public set actionOnResponderUnavailable(value: string) {
    this._actionOnResponderUnavailable = value;
  }
  public resetActionOnResponderUnavailable() {
    this._actionOnResponderUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnResponderUnavailableInput() {
    return this._actionOnResponderUnavailable;
  }

  // action_on_status_unknown - computed: true, optional: true, required: false
  private _actionOnStatusUnknown?: string; 
  public get actionOnStatusUnknown() {
    return this.getStringAttribute('action_on_status_unknown');
  }
  public set actionOnStatusUnknown(value: string) {
    this._actionOnStatusUnknown = value;
  }
  public resetActionOnStatusUnknown() {
    this._actionOnStatusUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnStatusUnknownInput() {
    return this._actionOnStatusUnknown;
  }

  // action_on_unsuccessful_response - computed: true, optional: true, required: false
  private _actionOnUnsuccessfulResponse?: string; 
  public get actionOnUnsuccessfulResponse() {
    return this.getStringAttribute('action_on_unsuccessful_response');
  }
  public set actionOnUnsuccessfulResponse(value: string) {
    this._actionOnUnsuccessfulResponse = value;
  }
  public resetActionOnUnsuccessfulResponse() {
    this._actionOnUnsuccessfulResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnUnsuccessfulResponseInput() {
    return this._actionOnUnsuccessfulResponse;
  }

  // current_update_grace_period - computed: true, optional: true, required: false
  private _currentUpdateGracePeriod?: number; 
  public get currentUpdateGracePeriod() {
    return this.getNumberAttribute('current_update_grace_period');
  }
  public set currentUpdateGracePeriod(value: number) {
    this._currentUpdateGracePeriod = value;
  }
  public resetCurrentUpdateGracePeriod() {
    this._currentUpdateGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentUpdateGracePeriodInput() {
    return this._currentUpdateGracePeriod;
  }

  // next_update_grace_period - computed: true, optional: true, required: false
  private _nextUpdateGracePeriod?: number; 
  public get nextUpdateGracePeriod() {
    return this.getNumberAttribute('next_update_grace_period');
  }
  public set nextUpdateGracePeriod(value: number) {
    this._nextUpdateGracePeriod = value;
  }
  public resetNextUpdateGracePeriod() {
    this._nextUpdateGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpdateGracePeriodInput() {
    return this._nextUpdateGracePeriod;
  }

  // requester_add_nonce - computed: true, optional: true, required: false
  private _requesterAddNonce?: boolean | cdktf.IResolvable; 
  public get requesterAddNonce() {
    return this.getBooleanAttribute('requester_add_nonce');
  }
  public set requesterAddNonce(value: boolean | cdktf.IResolvable) {
    this._requesterAddNonce = value;
  }
  public resetRequesterAddNonce() {
    this._requesterAddNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterAddNonceInput() {
    return this._requesterAddNonce;
  }

  // responder_cert_reference - computed: false, optional: true, required: false
  private _responderCertReference = new CertificatesRevocationSettingsOcspSettingsResponderCertReferenceOutputReference(this, "responder_cert_reference");
  public get responderCertReference() {
    return this._responderCertReference;
  }
  public putResponderCertReference(value: CertificatesRevocationSettingsOcspSettingsResponderCertReference) {
    this._responderCertReference.internalValue = value;
  }
  public resetResponderCertReference() {
    this._responderCertReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderCertReferenceInput() {
    return this._responderCertReference.internalValue;
  }

  // responder_timeout - computed: true, optional: true, required: false
  private _responderTimeout?: number; 
  public get responderTimeout() {
    return this.getNumberAttribute('responder_timeout');
  }
  public set responderTimeout(value: number) {
    this._responderTimeout = value;
  }
  public resetResponderTimeout() {
    this._responderTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderTimeoutInput() {
    return this._responderTimeout;
  }

  // responder_url - computed: false, optional: true, required: false
  private _responderUrl?: string; 
  public get responderUrl() {
    return this.getStringAttribute('responder_url');
  }
  public set responderUrl(value: string) {
    this._responderUrl = value;
  }
  public resetResponderUrl() {
    this._responderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderUrlInput() {
    return this._responderUrl;
  }

  // response_cache_period - computed: true, optional: true, required: false
  private _responseCachePeriod?: number; 
  public get responseCachePeriod() {
    return this.getNumberAttribute('response_cache_period');
  }
  public set responseCachePeriod(value: number) {
    this._responseCachePeriod = value;
  }
  public resetResponseCachePeriod() {
    this._responseCachePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCachePeriodInput() {
    return this._responseCachePeriod;
  }
}
export interface CertificatesRevocationSettingsProxySettings {
  /**
  * Host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#host CertificatesRevocationSettings#host}
  */
  readonly host: string;
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#port CertificatesRevocationSettings#port}
  */
  readonly port: number;
}

export function certificatesRevocationSettingsProxySettingsToTerraform(struct?: CertificatesRevocationSettingsProxySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function certificatesRevocationSettingsProxySettingsToHclTerraform(struct?: CertificatesRevocationSettingsProxySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesRevocationSettingsProxySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificatesRevocationSettingsProxySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesRevocationSettingsProxySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings pingfederate_certificates_revocation_settings}
*/
export class CertificatesRevocationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_certificates_revocation_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificatesRevocationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificatesRevocationSettings to import
  * @param importFromId The id of the existing CertificatesRevocationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificatesRevocationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_certificates_revocation_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/certificates_revocation_settings pingfederate_certificates_revocation_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificatesRevocationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CertificatesRevocationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_certificates_revocation_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crlSettings.internalValue = config.crlSettings;
    this._ocspSettings.internalValue = config.ocspSettings;
    this._proxySettings.internalValue = config.proxySettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crl_settings - computed: false, optional: true, required: false
  private _crlSettings = new CertificatesRevocationSettingsCrlSettingsOutputReference(this, "crl_settings");
  public get crlSettings() {
    return this._crlSettings;
  }
  public putCrlSettings(value: CertificatesRevocationSettingsCrlSettings) {
    this._crlSettings.internalValue = value;
  }
  public resetCrlSettings() {
    this._crlSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSettingsInput() {
    return this._crlSettings.internalValue;
  }

  // ocsp_settings - computed: false, optional: true, required: false
  private _ocspSettings = new CertificatesRevocationSettingsOcspSettingsOutputReference(this, "ocsp_settings");
  public get ocspSettings() {
    return this._ocspSettings;
  }
  public putOcspSettings(value: CertificatesRevocationSettingsOcspSettings) {
    this._ocspSettings.internalValue = value;
  }
  public resetOcspSettings() {
    this._ocspSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspSettingsInput() {
    return this._ocspSettings.internalValue;
  }

  // proxy_settings - computed: false, optional: true, required: false
  private _proxySettings = new CertificatesRevocationSettingsProxySettingsOutputReference(this, "proxy_settings");
  public get proxySettings() {
    return this._proxySettings;
  }
  public putProxySettings(value: CertificatesRevocationSettingsProxySettings) {
    this._proxySettings.internalValue = value;
  }
  public resetProxySettings() {
    this._proxySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySettingsInput() {
    return this._proxySettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crl_settings: certificatesRevocationSettingsCrlSettingsToTerraform(this._crlSettings.internalValue),
      ocsp_settings: certificatesRevocationSettingsOcspSettingsToTerraform(this._ocspSettings.internalValue),
      proxy_settings: certificatesRevocationSettingsProxySettingsToTerraform(this._proxySettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crl_settings: {
        value: certificatesRevocationSettingsCrlSettingsToHclTerraform(this._crlSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificatesRevocationSettingsCrlSettings",
      },
      ocsp_settings: {
        value: certificatesRevocationSettingsOcspSettingsToHclTerraform(this._ocspSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificatesRevocationSettingsOcspSettings",
      },
      proxy_settings: {
        value: certificatesRevocationSettingsProxySettingsToHclTerraform(this._proxySettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificatesRevocationSettingsProxySettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
