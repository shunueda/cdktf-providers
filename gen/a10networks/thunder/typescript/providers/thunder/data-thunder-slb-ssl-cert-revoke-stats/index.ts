// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslCertRevokeStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#id DataThunderSlbSslCertRevokeStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#stats DataThunderSlbSslCertRevokeStats#stats}
  */
  readonly stats?: DataThunderSlbSslCertRevokeStatsStats;
}
export interface DataThunderSlbSslCertRevokeStatsStats {
  /**
  * CRL cache status good
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_cache_status_good DataThunderSlbSslCertRevokeStats#crl_cache_status_good}
  */
  readonly crlCacheStatusGood?: number;
  /**
  * CRL cache status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_cache_status_revoked DataThunderSlbSslCertRevokeStats#crl_cache_status_revoked}
  */
  readonly crlCacheStatusRevoked?: number;
  /**
  * CRL connection errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_connection_error DataThunderSlbSslCertRevokeStats#crl_connection_error}
  */
  readonly crlConnectionError?: number;
  /**
  * CRL other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_other_error DataThunderSlbSslCertRevokeStats#crl_other_error}
  */
  readonly crlOtherError?: number;
  /**
  * CRL requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_request DataThunderSlbSslCertRevokeStats#crl_request}
  */
  readonly crlRequest?: number;
  /**
  * CRL responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_response DataThunderSlbSslCertRevokeStats#crl_response}
  */
  readonly crlResponse?: number;
  /**
  * CRL response status good
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_response_status_good DataThunderSlbSslCertRevokeStats#crl_response_status_good}
  */
  readonly crlResponseStatusGood?: number;
  /**
  * CRL response status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_response_status_revoked DataThunderSlbSslCertRevokeStats#crl_response_status_revoked}
  */
  readonly crlResponseStatusRevoked?: number;
  /**
  * CRL response status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_response_status_unknown DataThunderSlbSslCertRevokeStats#crl_response_status_unknown}
  */
  readonly crlResponseStatusUnknown?: number;
  /**
  * CRL URI https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_uri_https DataThunderSlbSslCertRevokeStats#crl_uri_https}
  */
  readonly crlUriHttps?: number;
  /**
  * CRL URI not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_uri_not_found DataThunderSlbSslCertRevokeStats#crl_uri_not_found}
  */
  readonly crlUriNotFound?: number;
  /**
  * CRL URI unsupported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#crl_uri_unsupported DataThunderSlbSslCertRevokeStats#crl_uri_unsupported}
  */
  readonly crlUriUnsupported?: number;
  /**
  * OCSP cache expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_cache_expired DataThunderSlbSslCertRevokeStats#ocsp_cache_expired}
  */
  readonly ocspCacheExpired?: number;
  /**
  * OCSP cache miss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_cache_miss DataThunderSlbSslCertRevokeStats#ocsp_cache_miss}
  */
  readonly ocspCacheMiss?: number;
  /**
  * OCSP cache status good
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_cache_status_good DataThunderSlbSslCertRevokeStats#ocsp_cache_status_good}
  */
  readonly ocspCacheStatusGood?: number;
  /**
  * OCSP cache status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_cache_status_revoked DataThunderSlbSslCertRevokeStats#ocsp_cache_status_revoked}
  */
  readonly ocspCacheStatusRevoked?: number;
  /**
  * Certificate chain status good
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_chain_status_good DataThunderSlbSslCertRevokeStats#ocsp_chain_status_good}
  */
  readonly ocspChainStatusGood?: number;
  /**
  * Certificate chain status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_chain_status_revoked DataThunderSlbSslCertRevokeStats#ocsp_chain_status_revoked}
  */
  readonly ocspChainStatusRevoked?: number;
  /**
  * Certificate chain status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_chain_status_unknown DataThunderSlbSslCertRevokeStats#ocsp_chain_status_unknown}
  */
  readonly ocspChainStatusUnknown?: number;
  /**
  * OCSP connection error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_connection_error DataThunderSlbSslCertRevokeStats#ocsp_connection_error}
  */
  readonly ocspConnectionError?: number;
  /**
  * Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_other_error DataThunderSlbSslCertRevokeStats#ocsp_other_error}
  */
  readonly ocspOtherError?: number;
  /**
  * OCSP requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_request DataThunderSlbSslCertRevokeStats#ocsp_request}
  */
  readonly ocspRequest?: number;
  /**
  * OCSP responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_response DataThunderSlbSslCertRevokeStats#ocsp_response}
  */
  readonly ocspResponse?: number;
  /**
  * Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_response_no_nonce DataThunderSlbSslCertRevokeStats#ocsp_response_no_nonce}
  */
  readonly ocspResponseNoNonce?: number;
  /**
  * Log OCSP other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_response_nonce_error DataThunderSlbSslCertRevokeStats#ocsp_response_nonce_error}
  */
  readonly ocspResponseNonceError?: number;
  /**
  * OCSP response status good
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_response_status_good DataThunderSlbSslCertRevokeStats#ocsp_response_status_good}
  */
  readonly ocspResponseStatusGood?: number;
  /**
  * OCSP response status revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_response_status_revoked DataThunderSlbSslCertRevokeStats#ocsp_response_status_revoked}
  */
  readonly ocspResponseStatusRevoked?: number;
  /**
  * OCSP response status unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_response_status_unknown DataThunderSlbSslCertRevokeStats#ocsp_response_status_unknown}
  */
  readonly ocspResponseStatusUnknown?: number;
  /**
  * OCSP stapling response good
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_stapling_response_good DataThunderSlbSslCertRevokeStats#ocsp_stapling_response_good}
  */
  readonly ocspStaplingResponseGood?: number;
  /**
  * Log OCSP URI https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_uri_https DataThunderSlbSslCertRevokeStats#ocsp_uri_https}
  */
  readonly ocspUriHttps?: number;
  /**
  * OCSP URI not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_uri_not_found DataThunderSlbSslCertRevokeStats#ocsp_uri_not_found}
  */
  readonly ocspUriNotFound?: number;
  /**
  * OCSP URI unsupported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#ocsp_uri_unsupported DataThunderSlbSslCertRevokeStats#ocsp_uri_unsupported}
  */
  readonly ocspUriUnsupported?: number;
}

export function dataThunderSlbSslCertRevokeStatsStatsToTerraform(struct?: DataThunderSlbSslCertRevokeStatsStatsOutputReference | DataThunderSlbSslCertRevokeStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_cache_status_good: cdktf.numberToTerraform(struct!.crlCacheStatusGood),
    crl_cache_status_revoked: cdktf.numberToTerraform(struct!.crlCacheStatusRevoked),
    crl_connection_error: cdktf.numberToTerraform(struct!.crlConnectionError),
    crl_other_error: cdktf.numberToTerraform(struct!.crlOtherError),
    crl_request: cdktf.numberToTerraform(struct!.crlRequest),
    crl_response: cdktf.numberToTerraform(struct!.crlResponse),
    crl_response_status_good: cdktf.numberToTerraform(struct!.crlResponseStatusGood),
    crl_response_status_revoked: cdktf.numberToTerraform(struct!.crlResponseStatusRevoked),
    crl_response_status_unknown: cdktf.numberToTerraform(struct!.crlResponseStatusUnknown),
    crl_uri_https: cdktf.numberToTerraform(struct!.crlUriHttps),
    crl_uri_not_found: cdktf.numberToTerraform(struct!.crlUriNotFound),
    crl_uri_unsupported: cdktf.numberToTerraform(struct!.crlUriUnsupported),
    ocsp_cache_expired: cdktf.numberToTerraform(struct!.ocspCacheExpired),
    ocsp_cache_miss: cdktf.numberToTerraform(struct!.ocspCacheMiss),
    ocsp_cache_status_good: cdktf.numberToTerraform(struct!.ocspCacheStatusGood),
    ocsp_cache_status_revoked: cdktf.numberToTerraform(struct!.ocspCacheStatusRevoked),
    ocsp_chain_status_good: cdktf.numberToTerraform(struct!.ocspChainStatusGood),
    ocsp_chain_status_revoked: cdktf.numberToTerraform(struct!.ocspChainStatusRevoked),
    ocsp_chain_status_unknown: cdktf.numberToTerraform(struct!.ocspChainStatusUnknown),
    ocsp_connection_error: cdktf.numberToTerraform(struct!.ocspConnectionError),
    ocsp_other_error: cdktf.numberToTerraform(struct!.ocspOtherError),
    ocsp_request: cdktf.numberToTerraform(struct!.ocspRequest),
    ocsp_response: cdktf.numberToTerraform(struct!.ocspResponse),
    ocsp_response_no_nonce: cdktf.numberToTerraform(struct!.ocspResponseNoNonce),
    ocsp_response_nonce_error: cdktf.numberToTerraform(struct!.ocspResponseNonceError),
    ocsp_response_status_good: cdktf.numberToTerraform(struct!.ocspResponseStatusGood),
    ocsp_response_status_revoked: cdktf.numberToTerraform(struct!.ocspResponseStatusRevoked),
    ocsp_response_status_unknown: cdktf.numberToTerraform(struct!.ocspResponseStatusUnknown),
    ocsp_stapling_response_good: cdktf.numberToTerraform(struct!.ocspStaplingResponseGood),
    ocsp_uri_https: cdktf.numberToTerraform(struct!.ocspUriHttps),
    ocsp_uri_not_found: cdktf.numberToTerraform(struct!.ocspUriNotFound),
    ocsp_uri_unsupported: cdktf.numberToTerraform(struct!.ocspUriUnsupported),
  }
}


export function dataThunderSlbSslCertRevokeStatsStatsToHclTerraform(struct?: DataThunderSlbSslCertRevokeStatsStatsOutputReference | DataThunderSlbSslCertRevokeStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl_cache_status_good: {
      value: cdktf.numberToHclTerraform(struct!.crlCacheStatusGood),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    crl_request: {
      value: cdktf.numberToHclTerraform(struct!.crlRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_response: {
      value: cdktf.numberToHclTerraform(struct!.crlResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_response_status_good: {
      value: cdktf.numberToHclTerraform(struct!.crlResponseStatusGood),
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
    ocsp_cache_expired: {
      value: cdktf.numberToHclTerraform(struct!.ocspCacheExpired),
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
    ocsp_cache_status_good: {
      value: cdktf.numberToHclTerraform(struct!.ocspCacheStatusGood),
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
    ocsp_chain_status_good: {
      value: cdktf.numberToHclTerraform(struct!.ocspChainStatusGood),
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
    ocsp_request: {
      value: cdktf.numberToHclTerraform(struct!.ocspRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_response: {
      value: cdktf.numberToHclTerraform(struct!.ocspResponse),
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
    ocsp_response_status_good: {
      value: cdktf.numberToHclTerraform(struct!.ocspResponseStatusGood),
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
    ocsp_stapling_response_good: {
      value: cdktf.numberToHclTerraform(struct!.ocspStaplingResponseGood),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslCertRevokeStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslCertRevokeStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlCacheStatusGood !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlCacheStatusGood = this._crlCacheStatusGood;
    }
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
    if (this._crlRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlRequest = this._crlRequest;
    }
    if (this._crlResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlResponse = this._crlResponse;
    }
    if (this._crlResponseStatusGood !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlResponseStatusGood = this._crlResponseStatusGood;
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
    if (this._ocspCacheExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCacheExpired = this._ocspCacheExpired;
    }
    if (this._ocspCacheMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCacheMiss = this._ocspCacheMiss;
    }
    if (this._ocspCacheStatusGood !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCacheStatusGood = this._ocspCacheStatusGood;
    }
    if (this._ocspCacheStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCacheStatusRevoked = this._ocspCacheStatusRevoked;
    }
    if (this._ocspChainStatusGood !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspChainStatusGood = this._ocspChainStatusGood;
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
    if (this._ocspRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspRequest = this._ocspRequest;
    }
    if (this._ocspResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponse = this._ocspResponse;
    }
    if (this._ocspResponseNoNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseNoNonce = this._ocspResponseNoNonce;
    }
    if (this._ocspResponseNonceError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseNonceError = this._ocspResponseNonceError;
    }
    if (this._ocspResponseStatusGood !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseStatusGood = this._ocspResponseStatusGood;
    }
    if (this._ocspResponseStatusRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseStatusRevoked = this._ocspResponseStatusRevoked;
    }
    if (this._ocspResponseStatusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponseStatusUnknown = this._ocspResponseStatusUnknown;
    }
    if (this._ocspStaplingResponseGood !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStaplingResponseGood = this._ocspStaplingResponseGood;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslCertRevokeStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crlCacheStatusGood = undefined;
      this._crlCacheStatusRevoked = undefined;
      this._crlConnectionError = undefined;
      this._crlOtherError = undefined;
      this._crlRequest = undefined;
      this._crlResponse = undefined;
      this._crlResponseStatusGood = undefined;
      this._crlResponseStatusRevoked = undefined;
      this._crlResponseStatusUnknown = undefined;
      this._crlUriHttps = undefined;
      this._crlUriNotFound = undefined;
      this._crlUriUnsupported = undefined;
      this._ocspCacheExpired = undefined;
      this._ocspCacheMiss = undefined;
      this._ocspCacheStatusGood = undefined;
      this._ocspCacheStatusRevoked = undefined;
      this._ocspChainStatusGood = undefined;
      this._ocspChainStatusRevoked = undefined;
      this._ocspChainStatusUnknown = undefined;
      this._ocspConnectionError = undefined;
      this._ocspOtherError = undefined;
      this._ocspRequest = undefined;
      this._ocspResponse = undefined;
      this._ocspResponseNoNonce = undefined;
      this._ocspResponseNonceError = undefined;
      this._ocspResponseStatusGood = undefined;
      this._ocspResponseStatusRevoked = undefined;
      this._ocspResponseStatusUnknown = undefined;
      this._ocspStaplingResponseGood = undefined;
      this._ocspUriHttps = undefined;
      this._ocspUriNotFound = undefined;
      this._ocspUriUnsupported = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crlCacheStatusGood = value.crlCacheStatusGood;
      this._crlCacheStatusRevoked = value.crlCacheStatusRevoked;
      this._crlConnectionError = value.crlConnectionError;
      this._crlOtherError = value.crlOtherError;
      this._crlRequest = value.crlRequest;
      this._crlResponse = value.crlResponse;
      this._crlResponseStatusGood = value.crlResponseStatusGood;
      this._crlResponseStatusRevoked = value.crlResponseStatusRevoked;
      this._crlResponseStatusUnknown = value.crlResponseStatusUnknown;
      this._crlUriHttps = value.crlUriHttps;
      this._crlUriNotFound = value.crlUriNotFound;
      this._crlUriUnsupported = value.crlUriUnsupported;
      this._ocspCacheExpired = value.ocspCacheExpired;
      this._ocspCacheMiss = value.ocspCacheMiss;
      this._ocspCacheStatusGood = value.ocspCacheStatusGood;
      this._ocspCacheStatusRevoked = value.ocspCacheStatusRevoked;
      this._ocspChainStatusGood = value.ocspChainStatusGood;
      this._ocspChainStatusRevoked = value.ocspChainStatusRevoked;
      this._ocspChainStatusUnknown = value.ocspChainStatusUnknown;
      this._ocspConnectionError = value.ocspConnectionError;
      this._ocspOtherError = value.ocspOtherError;
      this._ocspRequest = value.ocspRequest;
      this._ocspResponse = value.ocspResponse;
      this._ocspResponseNoNonce = value.ocspResponseNoNonce;
      this._ocspResponseNonceError = value.ocspResponseNonceError;
      this._ocspResponseStatusGood = value.ocspResponseStatusGood;
      this._ocspResponseStatusRevoked = value.ocspResponseStatusRevoked;
      this._ocspResponseStatusUnknown = value.ocspResponseStatusUnknown;
      this._ocspStaplingResponseGood = value.ocspStaplingResponseGood;
      this._ocspUriHttps = value.ocspUriHttps;
      this._ocspUriNotFound = value.ocspUriNotFound;
      this._ocspUriUnsupported = value.ocspUriUnsupported;
    }
  }

  // crl_cache_status_good - computed: false, optional: true, required: false
  private _crlCacheStatusGood?: number; 
  public get crlCacheStatusGood() {
    return this.getNumberAttribute('crl_cache_status_good');
  }
  public set crlCacheStatusGood(value: number) {
    this._crlCacheStatusGood = value;
  }
  public resetCrlCacheStatusGood() {
    this._crlCacheStatusGood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCacheStatusGoodInput() {
    return this._crlCacheStatusGood;
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

  // crl_request - computed: false, optional: true, required: false
  private _crlRequest?: number; 
  public get crlRequest() {
    return this.getNumberAttribute('crl_request');
  }
  public set crlRequest(value: number) {
    this._crlRequest = value;
  }
  public resetCrlRequest() {
    this._crlRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlRequestInput() {
    return this._crlRequest;
  }

  // crl_response - computed: false, optional: true, required: false
  private _crlResponse?: number; 
  public get crlResponse() {
    return this.getNumberAttribute('crl_response');
  }
  public set crlResponse(value: number) {
    this._crlResponse = value;
  }
  public resetCrlResponse() {
    this._crlResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlResponseInput() {
    return this._crlResponse;
  }

  // crl_response_status_good - computed: false, optional: true, required: false
  private _crlResponseStatusGood?: number; 
  public get crlResponseStatusGood() {
    return this.getNumberAttribute('crl_response_status_good');
  }
  public set crlResponseStatusGood(value: number) {
    this._crlResponseStatusGood = value;
  }
  public resetCrlResponseStatusGood() {
    this._crlResponseStatusGood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlResponseStatusGoodInput() {
    return this._crlResponseStatusGood;
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

  // ocsp_cache_expired - computed: false, optional: true, required: false
  private _ocspCacheExpired?: number; 
  public get ocspCacheExpired() {
    return this.getNumberAttribute('ocsp_cache_expired');
  }
  public set ocspCacheExpired(value: number) {
    this._ocspCacheExpired = value;
  }
  public resetOcspCacheExpired() {
    this._ocspCacheExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCacheExpiredInput() {
    return this._ocspCacheExpired;
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

  // ocsp_cache_status_good - computed: false, optional: true, required: false
  private _ocspCacheStatusGood?: number; 
  public get ocspCacheStatusGood() {
    return this.getNumberAttribute('ocsp_cache_status_good');
  }
  public set ocspCacheStatusGood(value: number) {
    this._ocspCacheStatusGood = value;
  }
  public resetOcspCacheStatusGood() {
    this._ocspCacheStatusGood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCacheStatusGoodInput() {
    return this._ocspCacheStatusGood;
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

  // ocsp_chain_status_good - computed: false, optional: true, required: false
  private _ocspChainStatusGood?: number; 
  public get ocspChainStatusGood() {
    return this.getNumberAttribute('ocsp_chain_status_good');
  }
  public set ocspChainStatusGood(value: number) {
    this._ocspChainStatusGood = value;
  }
  public resetOcspChainStatusGood() {
    this._ocspChainStatusGood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspChainStatusGoodInput() {
    return this._ocspChainStatusGood;
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

  // ocsp_request - computed: false, optional: true, required: false
  private _ocspRequest?: number; 
  public get ocspRequest() {
    return this.getNumberAttribute('ocsp_request');
  }
  public set ocspRequest(value: number) {
    this._ocspRequest = value;
  }
  public resetOcspRequest() {
    this._ocspRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspRequestInput() {
    return this._ocspRequest;
  }

  // ocsp_response - computed: false, optional: true, required: false
  private _ocspResponse?: number; 
  public get ocspResponse() {
    return this.getNumberAttribute('ocsp_response');
  }
  public set ocspResponse(value: number) {
    this._ocspResponse = value;
  }
  public resetOcspResponse() {
    this._ocspResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseInput() {
    return this._ocspResponse;
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

  // ocsp_response_status_good - computed: false, optional: true, required: false
  private _ocspResponseStatusGood?: number; 
  public get ocspResponseStatusGood() {
    return this.getNumberAttribute('ocsp_response_status_good');
  }
  public set ocspResponseStatusGood(value: number) {
    this._ocspResponseStatusGood = value;
  }
  public resetOcspResponseStatusGood() {
    this._ocspResponseStatusGood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponseStatusGoodInput() {
    return this._ocspResponseStatusGood;
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

  // ocsp_stapling_response_good - computed: false, optional: true, required: false
  private _ocspStaplingResponseGood?: number; 
  public get ocspStaplingResponseGood() {
    return this.getNumberAttribute('ocsp_stapling_response_good');
  }
  public set ocspStaplingResponseGood(value: number) {
    this._ocspStaplingResponseGood = value;
  }
  public resetOcspStaplingResponseGood() {
    this._ocspStaplingResponseGood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingResponseGoodInput() {
    return this._ocspStaplingResponseGood;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats thunder_slb_ssl_cert_revoke_stats}
*/
export class DataThunderSlbSslCertRevokeStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_cert_revoke_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslCertRevokeStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslCertRevokeStats to import
  * @param importFromId The id of the existing DataThunderSlbSslCertRevokeStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslCertRevokeStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_cert_revoke_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_revoke_stats thunder_slb_ssl_cert_revoke_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslCertRevokeStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslCertRevokeStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_cert_revoke_stats',
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
  private _stats = new DataThunderSlbSslCertRevokeStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbSslCertRevokeStatsStats) {
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
      stats: dataThunderSlbSslCertRevokeStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbSslCertRevokeStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslCertRevokeStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
