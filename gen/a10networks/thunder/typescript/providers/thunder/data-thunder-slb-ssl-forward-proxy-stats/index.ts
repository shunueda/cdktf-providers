// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslForwardProxyStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#id DataThunderSlbSslForwardProxyStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#stats DataThunderSlbSslForwardProxyStats#stats}
  */
  readonly stats?: DataThunderSlbSslForwardProxyStatsStats;
}
export interface DataThunderSlbSslForwardProxyStatsStats {
  /**
  * Bypass triggered by aFleX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#aflex_bypass DataThunderSlbSslForwardProxyStats#aflex_bypass}
  */
  readonly aflexBypass?: number;
  /**
  * SSLi Async connections failures due to limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#async_conn_limit_drop DataThunderSlbSslForwardProxyStats#async_conn_limit_drop}
  */
  readonly asyncConnLimitDrop?: number;
  /**
  * SSLi Async connections failures due to timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#async_conn_timeout DataThunderSlbSslForwardProxyStats#async_conn_timeout}
  */
  readonly asyncConnTimeout?: number;
  /**
  * Bypass AD-group sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_ad_group_sessions DataThunderSlbSslForwardProxyStats#bypass_ad_group_sessions}
  */
  readonly bypassAdGroupSessions?: number;
  /**
  * Bypass Cert issuer sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_cert_issuer_sessions DataThunderSlbSslForwardProxyStats#bypass_cert_issuer_sessions}
  */
  readonly bypassCertIssuerSessions?: number;
  /**
  * Bypass Cert SAN sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_cert_san_sessions DataThunderSlbSslForwardProxyStats#bypass_cert_san_sessions}
  */
  readonly bypassCertSanSessions?: number;
  /**
  * Bypass Cert Subject sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_cert_subject_sessions DataThunderSlbSslForwardProxyStats#bypass_cert_subject_sessions}
  */
  readonly bypassCertSubjectSessions?: number;
  /**
  * Bypass Client Auth sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_client_auth_sessions DataThunderSlbSslForwardProxyStats#bypass_client_auth_sessions}
  */
  readonly bypassClientAuthSessions?: number;
  /**
  * Bypass Client IP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_client_ip_sessions DataThunderSlbSslForwardProxyStats#bypass_client_ip_sessions}
  */
  readonly bypassClientIpSessions?: number;
  /**
  * Bypass ESNI sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_esni_sessions DataThunderSlbSslForwardProxyStats#bypass_esni_sessions}
  */
  readonly bypassEsniSessions?: number;
  /**
  * Bypass Failsafe SSL sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_failsafe_ssl_sessions DataThunderSlbSslForwardProxyStats#bypass_failsafe_ssl_sessions}
  */
  readonly bypassFailsafeSslSessions?: number;
  /**
  * Bypass NO SNI sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_no_sni_sessions DataThunderSlbSslForwardProxyStats#bypass_no_sni_sessions}
  */
  readonly bypassNoSniSessions?: number;
  /**
  * Bypass Server IP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_server_ip_sessions DataThunderSlbSslForwardProxyStats#bypass_server_ip_sessions}
  */
  readonly bypassServerIpSessions?: number;
  /**
  * Bypass SNI sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_sni_sessions DataThunderSlbSslForwardProxyStats#bypass_sni_sessions}
  */
  readonly bypassSniSessions?: number;
  /**
  * Bypass Username sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#bypass_username_sessions DataThunderSlbSslForwardProxyStats#bypass_username_sessions}
  */
  readonly bypassUsernameSessions?: number;
  /**
  * Certificates created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#cert_create DataThunderSlbSslForwardProxyStats#cert_create}
  */
  readonly certCreate?: number;
  /**
  * Certificates expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#cert_expr DataThunderSlbSslForwardProxyStats#cert_expr}
  */
  readonly certExpr?: number;
  /**
  * Certificate cache hits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#cert_hit DataThunderSlbSslForwardProxyStats#cert_hit}
  */
  readonly certHit?: number;
  /**
  * Certificates in cache used by HC SSLi App
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#cert_in_cache DataThunderSlbSslForwardProxyStats#cert_in_cache}
  */
  readonly certInCache?: number;
  /**
  * Certificate cache miss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#cert_miss DataThunderSlbSslForwardProxyStats#cert_miss}
  */
  readonly certMiss?: number;
  /**
  * Certificates in cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#certificates_in_cache DataThunderSlbSslForwardProxyStats#certificates_in_cache}
  */
  readonly certificatesInCache?: number;
  /**
  * Connections bypassed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#conn_bypass DataThunderSlbSslForwardProxyStats#conn_bypass}
  */
  readonly connBypass?: number;
  /**
  * Connections inspected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#conn_inspect DataThunderSlbSslForwardProxyStats#conn_inspect}
  */
  readonly connInspect?: number;
  /**
  * Connections failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#connections_failed DataThunderSlbSslForwardProxyStats#connections_failed}
  */
  readonly connectionsFailed?: number;
  /**
  * Current buffered async connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#curr_conn_in_buff DataThunderSlbSslForwardProxyStats#curr_conn_in_buff}
  */
  readonly currConnInBuff?: number;
  /**
  * Drop ESNI sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#drop_esni_sessions DataThunderSlbSslForwardProxyStats#drop_esni_sessions}
  */
  readonly dropEsniSessions?: number;
  /**
  * Failed in Certificate signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#failed_in_certificate_signing DataThunderSlbSslForwardProxyStats#failed_in_certificate_signing}
  */
  readonly failedInCertificateSigning?: number;
  /**
  * Failed in Certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#failed_in_certificate_verification DataThunderSlbSslForwardProxyStats#failed_in_certificate_verification}
  */
  readonly failedInCertificateVerification?: number;
  /**
  * Failed in crypto operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#failed_in_crypto_operations DataThunderSlbSslForwardProxyStats#failed_in_crypto_operations}
  */
  readonly failedInCryptoOperations?: number;
  /**
  * Failed in SSL handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#failed_in_ssl_handshakes DataThunderSlbSslForwardProxyStats#failed_in_ssl_handshakes}
  */
  readonly failedInSslHandshakes?: number;
  /**
  * Failed in TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#failed_in_tcp DataThunderSlbSslForwardProxyStats#failed_in_tcp}
  */
  readonly failedInTcp?: number;
  /**
  * Invalid OCSP Stapling Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#invalid_ocsp_stapling_response DataThunderSlbSslForwardProxyStats#invalid_ocsp_stapling_response}
  */
  readonly invalidOcspStaplingResponse?: number;
  /**
  * Reset No SNI sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#reset_no_sni_sessions DataThunderSlbSslForwardProxyStats#reset_no_sni_sessions}
  */
  readonly resetNoSniSessions?: number;
  /**
  * Revoked OCSP Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#revoked_ocsp_response DataThunderSlbSslForwardProxyStats#revoked_ocsp_response}
  */
  readonly revokedOcspResponse?: number;
  /**
  * Total buffered async connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#tot_conn_in_buff DataThunderSlbSslForwardProxyStats#tot_conn_in_buff}
  */
  readonly totConnInBuff?: number;
  /**
  * Unsupported SSL version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#unsupported_ssl_version DataThunderSlbSslForwardProxyStats#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: number;
}

export function dataThunderSlbSslForwardProxyStatsStatsToTerraform(struct?: DataThunderSlbSslForwardProxyStatsStatsOutputReference | DataThunderSlbSslForwardProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_bypass: cdktf.numberToTerraform(struct!.aflexBypass),
    async_conn_limit_drop: cdktf.numberToTerraform(struct!.asyncConnLimitDrop),
    async_conn_timeout: cdktf.numberToTerraform(struct!.asyncConnTimeout),
    bypass_ad_group_sessions: cdktf.numberToTerraform(struct!.bypassAdGroupSessions),
    bypass_cert_issuer_sessions: cdktf.numberToTerraform(struct!.bypassCertIssuerSessions),
    bypass_cert_san_sessions: cdktf.numberToTerraform(struct!.bypassCertSanSessions),
    bypass_cert_subject_sessions: cdktf.numberToTerraform(struct!.bypassCertSubjectSessions),
    bypass_client_auth_sessions: cdktf.numberToTerraform(struct!.bypassClientAuthSessions),
    bypass_client_ip_sessions: cdktf.numberToTerraform(struct!.bypassClientIpSessions),
    bypass_esni_sessions: cdktf.numberToTerraform(struct!.bypassEsniSessions),
    bypass_failsafe_ssl_sessions: cdktf.numberToTerraform(struct!.bypassFailsafeSslSessions),
    bypass_no_sni_sessions: cdktf.numberToTerraform(struct!.bypassNoSniSessions),
    bypass_server_ip_sessions: cdktf.numberToTerraform(struct!.bypassServerIpSessions),
    bypass_sni_sessions: cdktf.numberToTerraform(struct!.bypassSniSessions),
    bypass_username_sessions: cdktf.numberToTerraform(struct!.bypassUsernameSessions),
    cert_create: cdktf.numberToTerraform(struct!.certCreate),
    cert_expr: cdktf.numberToTerraform(struct!.certExpr),
    cert_hit: cdktf.numberToTerraform(struct!.certHit),
    cert_in_cache: cdktf.numberToTerraform(struct!.certInCache),
    cert_miss: cdktf.numberToTerraform(struct!.certMiss),
    certificates_in_cache: cdktf.numberToTerraform(struct!.certificatesInCache),
    conn_bypass: cdktf.numberToTerraform(struct!.connBypass),
    conn_inspect: cdktf.numberToTerraform(struct!.connInspect),
    connections_failed: cdktf.numberToTerraform(struct!.connectionsFailed),
    curr_conn_in_buff: cdktf.numberToTerraform(struct!.currConnInBuff),
    drop_esni_sessions: cdktf.numberToTerraform(struct!.dropEsniSessions),
    failed_in_certificate_signing: cdktf.numberToTerraform(struct!.failedInCertificateSigning),
    failed_in_certificate_verification: cdktf.numberToTerraform(struct!.failedInCertificateVerification),
    failed_in_crypto_operations: cdktf.numberToTerraform(struct!.failedInCryptoOperations),
    failed_in_ssl_handshakes: cdktf.numberToTerraform(struct!.failedInSslHandshakes),
    failed_in_tcp: cdktf.numberToTerraform(struct!.failedInTcp),
    invalid_ocsp_stapling_response: cdktf.numberToTerraform(struct!.invalidOcspStaplingResponse),
    reset_no_sni_sessions: cdktf.numberToTerraform(struct!.resetNoSniSessions),
    revoked_ocsp_response: cdktf.numberToTerraform(struct!.revokedOcspResponse),
    tot_conn_in_buff: cdktf.numberToTerraform(struct!.totConnInBuff),
    unsupported_ssl_version: cdktf.numberToTerraform(struct!.unsupportedSslVersion),
  }
}


export function dataThunderSlbSslForwardProxyStatsStatsToHclTerraform(struct?: DataThunderSlbSslForwardProxyStatsStatsOutputReference | DataThunderSlbSslForwardProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_bypass: {
      value: cdktf.numberToHclTerraform(struct!.aflexBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    async_conn_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.asyncConnLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    async_conn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.asyncConnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_ad_group_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassAdGroupSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_cert_issuer_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassCertIssuerSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_cert_san_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassCertSanSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_cert_subject_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassCertSubjectSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_client_auth_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassClientAuthSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_client_ip_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassClientIpSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_esni_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassEsniSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_failsafe_ssl_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassFailsafeSslSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_no_sni_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassNoSniSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_server_ip_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassServerIpSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_sni_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassSniSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_username_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassUsernameSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_create: {
      value: cdktf.numberToHclTerraform(struct!.certCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_expr: {
      value: cdktf.numberToHclTerraform(struct!.certExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_hit: {
      value: cdktf.numberToHclTerraform(struct!.certHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_in_cache: {
      value: cdktf.numberToHclTerraform(struct!.certInCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_miss: {
      value: cdktf.numberToHclTerraform(struct!.certMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    certificates_in_cache: {
      value: cdktf.numberToHclTerraform(struct!.certificatesInCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_bypass: {
      value: cdktf.numberToHclTerraform(struct!.connBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_inspect: {
      value: cdktf.numberToHclTerraform(struct!.connInspect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connections_failed: {
      value: cdktf.numberToHclTerraform(struct!.connectionsFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_conn_in_buff: {
      value: cdktf.numberToHclTerraform(struct!.currConnInBuff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_esni_sessions: {
      value: cdktf.numberToHclTerraform(struct!.dropEsniSessions),
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
    reset_no_sni_sessions: {
      value: cdktf.numberToHclTerraform(struct!.resetNoSniSessions),
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
    tot_conn_in_buff: {
      value: cdktf.numberToHclTerraform(struct!.totConnInBuff),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslForwardProxyStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslForwardProxyStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexBypass = this._aflexBypass;
    }
    if (this._asyncConnLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncConnLimitDrop = this._asyncConnLimitDrop;
    }
    if (this._asyncConnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncConnTimeout = this._asyncConnTimeout;
    }
    if (this._bypassAdGroupSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassAdGroupSessions = this._bypassAdGroupSessions;
    }
    if (this._bypassCertIssuerSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCertIssuerSessions = this._bypassCertIssuerSessions;
    }
    if (this._bypassCertSanSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCertSanSessions = this._bypassCertSanSessions;
    }
    if (this._bypassCertSubjectSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCertSubjectSessions = this._bypassCertSubjectSessions;
    }
    if (this._bypassClientAuthSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassClientAuthSessions = this._bypassClientAuthSessions;
    }
    if (this._bypassClientIpSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassClientIpSessions = this._bypassClientIpSessions;
    }
    if (this._bypassEsniSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassEsniSessions = this._bypassEsniSessions;
    }
    if (this._bypassFailsafeSslSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassFailsafeSslSessions = this._bypassFailsafeSslSessions;
    }
    if (this._bypassNoSniSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassNoSniSessions = this._bypassNoSniSessions;
    }
    if (this._bypassServerIpSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassServerIpSessions = this._bypassServerIpSessions;
    }
    if (this._bypassSniSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassSniSessions = this._bypassSniSessions;
    }
    if (this._bypassUsernameSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassUsernameSessions = this._bypassUsernameSessions;
    }
    if (this._certCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certCreate = this._certCreate;
    }
    if (this._certExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.certExpr = this._certExpr;
    }
    if (this._certHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.certHit = this._certHit;
    }
    if (this._certInCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.certInCache = this._certInCache;
    }
    if (this._certMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.certMiss = this._certMiss;
    }
    if (this._certificatesInCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatesInCache = this._certificatesInCache;
    }
    if (this._connBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.connBypass = this._connBypass;
    }
    if (this._connInspect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connInspect = this._connInspect;
    }
    if (this._connectionsFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionsFailed = this._connectionsFailed;
    }
    if (this._currConnInBuff !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConnInBuff = this._currConnInBuff;
    }
    if (this._dropEsniSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropEsniSessions = this._dropEsniSessions;
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
    if (this._resetNoSniSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetNoSniSessions = this._resetNoSniSessions;
    }
    if (this._revokedOcspResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedOcspResponse = this._revokedOcspResponse;
    }
    if (this._totConnInBuff !== undefined) {
      hasAnyValues = true;
      internalValueResult.totConnInBuff = this._totConnInBuff;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslForwardProxyStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflexBypass = undefined;
      this._asyncConnLimitDrop = undefined;
      this._asyncConnTimeout = undefined;
      this._bypassAdGroupSessions = undefined;
      this._bypassCertIssuerSessions = undefined;
      this._bypassCertSanSessions = undefined;
      this._bypassCertSubjectSessions = undefined;
      this._bypassClientAuthSessions = undefined;
      this._bypassClientIpSessions = undefined;
      this._bypassEsniSessions = undefined;
      this._bypassFailsafeSslSessions = undefined;
      this._bypassNoSniSessions = undefined;
      this._bypassServerIpSessions = undefined;
      this._bypassSniSessions = undefined;
      this._bypassUsernameSessions = undefined;
      this._certCreate = undefined;
      this._certExpr = undefined;
      this._certHit = undefined;
      this._certInCache = undefined;
      this._certMiss = undefined;
      this._certificatesInCache = undefined;
      this._connBypass = undefined;
      this._connInspect = undefined;
      this._connectionsFailed = undefined;
      this._currConnInBuff = undefined;
      this._dropEsniSessions = undefined;
      this._failedInCertificateSigning = undefined;
      this._failedInCertificateVerification = undefined;
      this._failedInCryptoOperations = undefined;
      this._failedInSslHandshakes = undefined;
      this._failedInTcp = undefined;
      this._invalidOcspStaplingResponse = undefined;
      this._resetNoSniSessions = undefined;
      this._revokedOcspResponse = undefined;
      this._totConnInBuff = undefined;
      this._unsupportedSslVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflexBypass = value.aflexBypass;
      this._asyncConnLimitDrop = value.asyncConnLimitDrop;
      this._asyncConnTimeout = value.asyncConnTimeout;
      this._bypassAdGroupSessions = value.bypassAdGroupSessions;
      this._bypassCertIssuerSessions = value.bypassCertIssuerSessions;
      this._bypassCertSanSessions = value.bypassCertSanSessions;
      this._bypassCertSubjectSessions = value.bypassCertSubjectSessions;
      this._bypassClientAuthSessions = value.bypassClientAuthSessions;
      this._bypassClientIpSessions = value.bypassClientIpSessions;
      this._bypassEsniSessions = value.bypassEsniSessions;
      this._bypassFailsafeSslSessions = value.bypassFailsafeSslSessions;
      this._bypassNoSniSessions = value.bypassNoSniSessions;
      this._bypassServerIpSessions = value.bypassServerIpSessions;
      this._bypassSniSessions = value.bypassSniSessions;
      this._bypassUsernameSessions = value.bypassUsernameSessions;
      this._certCreate = value.certCreate;
      this._certExpr = value.certExpr;
      this._certHit = value.certHit;
      this._certInCache = value.certInCache;
      this._certMiss = value.certMiss;
      this._certificatesInCache = value.certificatesInCache;
      this._connBypass = value.connBypass;
      this._connInspect = value.connInspect;
      this._connectionsFailed = value.connectionsFailed;
      this._currConnInBuff = value.currConnInBuff;
      this._dropEsniSessions = value.dropEsniSessions;
      this._failedInCertificateSigning = value.failedInCertificateSigning;
      this._failedInCertificateVerification = value.failedInCertificateVerification;
      this._failedInCryptoOperations = value.failedInCryptoOperations;
      this._failedInSslHandshakes = value.failedInSslHandshakes;
      this._failedInTcp = value.failedInTcp;
      this._invalidOcspStaplingResponse = value.invalidOcspStaplingResponse;
      this._resetNoSniSessions = value.resetNoSniSessions;
      this._revokedOcspResponse = value.revokedOcspResponse;
      this._totConnInBuff = value.totConnInBuff;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
    }
  }

  // aflex_bypass - computed: false, optional: true, required: false
  private _aflexBypass?: number; 
  public get aflexBypass() {
    return this.getNumberAttribute('aflex_bypass');
  }
  public set aflexBypass(value: number) {
    this._aflexBypass = value;
  }
  public resetAflexBypass() {
    this._aflexBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexBypassInput() {
    return this._aflexBypass;
  }

  // async_conn_limit_drop - computed: false, optional: true, required: false
  private _asyncConnLimitDrop?: number; 
  public get asyncConnLimitDrop() {
    return this.getNumberAttribute('async_conn_limit_drop');
  }
  public set asyncConnLimitDrop(value: number) {
    this._asyncConnLimitDrop = value;
  }
  public resetAsyncConnLimitDrop() {
    this._asyncConnLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncConnLimitDropInput() {
    return this._asyncConnLimitDrop;
  }

  // async_conn_timeout - computed: false, optional: true, required: false
  private _asyncConnTimeout?: number; 
  public get asyncConnTimeout() {
    return this.getNumberAttribute('async_conn_timeout');
  }
  public set asyncConnTimeout(value: number) {
    this._asyncConnTimeout = value;
  }
  public resetAsyncConnTimeout() {
    this._asyncConnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncConnTimeoutInput() {
    return this._asyncConnTimeout;
  }

  // bypass_ad_group_sessions - computed: false, optional: true, required: false
  private _bypassAdGroupSessions?: number; 
  public get bypassAdGroupSessions() {
    return this.getNumberAttribute('bypass_ad_group_sessions');
  }
  public set bypassAdGroupSessions(value: number) {
    this._bypassAdGroupSessions = value;
  }
  public resetBypassAdGroupSessions() {
    this._bypassAdGroupSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAdGroupSessionsInput() {
    return this._bypassAdGroupSessions;
  }

  // bypass_cert_issuer_sessions - computed: false, optional: true, required: false
  private _bypassCertIssuerSessions?: number; 
  public get bypassCertIssuerSessions() {
    return this.getNumberAttribute('bypass_cert_issuer_sessions');
  }
  public set bypassCertIssuerSessions(value: number) {
    this._bypassCertIssuerSessions = value;
  }
  public resetBypassCertIssuerSessions() {
    this._bypassCertIssuerSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertIssuerSessionsInput() {
    return this._bypassCertIssuerSessions;
  }

  // bypass_cert_san_sessions - computed: false, optional: true, required: false
  private _bypassCertSanSessions?: number; 
  public get bypassCertSanSessions() {
    return this.getNumberAttribute('bypass_cert_san_sessions');
  }
  public set bypassCertSanSessions(value: number) {
    this._bypassCertSanSessions = value;
  }
  public resetBypassCertSanSessions() {
    this._bypassCertSanSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertSanSessionsInput() {
    return this._bypassCertSanSessions;
  }

  // bypass_cert_subject_sessions - computed: false, optional: true, required: false
  private _bypassCertSubjectSessions?: number; 
  public get bypassCertSubjectSessions() {
    return this.getNumberAttribute('bypass_cert_subject_sessions');
  }
  public set bypassCertSubjectSessions(value: number) {
    this._bypassCertSubjectSessions = value;
  }
  public resetBypassCertSubjectSessions() {
    this._bypassCertSubjectSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertSubjectSessionsInput() {
    return this._bypassCertSubjectSessions;
  }

  // bypass_client_auth_sessions - computed: false, optional: true, required: false
  private _bypassClientAuthSessions?: number; 
  public get bypassClientAuthSessions() {
    return this.getNumberAttribute('bypass_client_auth_sessions');
  }
  public set bypassClientAuthSessions(value: number) {
    this._bypassClientAuthSessions = value;
  }
  public resetBypassClientAuthSessions() {
    this._bypassClientAuthSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassClientAuthSessionsInput() {
    return this._bypassClientAuthSessions;
  }

  // bypass_client_ip_sessions - computed: false, optional: true, required: false
  private _bypassClientIpSessions?: number; 
  public get bypassClientIpSessions() {
    return this.getNumberAttribute('bypass_client_ip_sessions');
  }
  public set bypassClientIpSessions(value: number) {
    this._bypassClientIpSessions = value;
  }
  public resetBypassClientIpSessions() {
    this._bypassClientIpSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassClientIpSessionsInput() {
    return this._bypassClientIpSessions;
  }

  // bypass_esni_sessions - computed: false, optional: true, required: false
  private _bypassEsniSessions?: number; 
  public get bypassEsniSessions() {
    return this.getNumberAttribute('bypass_esni_sessions');
  }
  public set bypassEsniSessions(value: number) {
    this._bypassEsniSessions = value;
  }
  public resetBypassEsniSessions() {
    this._bypassEsniSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassEsniSessionsInput() {
    return this._bypassEsniSessions;
  }

  // bypass_failsafe_ssl_sessions - computed: false, optional: true, required: false
  private _bypassFailsafeSslSessions?: number; 
  public get bypassFailsafeSslSessions() {
    return this.getNumberAttribute('bypass_failsafe_ssl_sessions');
  }
  public set bypassFailsafeSslSessions(value: number) {
    this._bypassFailsafeSslSessions = value;
  }
  public resetBypassFailsafeSslSessions() {
    this._bypassFailsafeSslSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassFailsafeSslSessionsInput() {
    return this._bypassFailsafeSslSessions;
  }

  // bypass_no_sni_sessions - computed: false, optional: true, required: false
  private _bypassNoSniSessions?: number; 
  public get bypassNoSniSessions() {
    return this.getNumberAttribute('bypass_no_sni_sessions');
  }
  public set bypassNoSniSessions(value: number) {
    this._bypassNoSniSessions = value;
  }
  public resetBypassNoSniSessions() {
    this._bypassNoSniSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassNoSniSessionsInput() {
    return this._bypassNoSniSessions;
  }

  // bypass_server_ip_sessions - computed: false, optional: true, required: false
  private _bypassServerIpSessions?: number; 
  public get bypassServerIpSessions() {
    return this.getNumberAttribute('bypass_server_ip_sessions');
  }
  public set bypassServerIpSessions(value: number) {
    this._bypassServerIpSessions = value;
  }
  public resetBypassServerIpSessions() {
    this._bypassServerIpSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassServerIpSessionsInput() {
    return this._bypassServerIpSessions;
  }

  // bypass_sni_sessions - computed: false, optional: true, required: false
  private _bypassSniSessions?: number; 
  public get bypassSniSessions() {
    return this.getNumberAttribute('bypass_sni_sessions');
  }
  public set bypassSniSessions(value: number) {
    this._bypassSniSessions = value;
  }
  public resetBypassSniSessions() {
    this._bypassSniSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassSniSessionsInput() {
    return this._bypassSniSessions;
  }

  // bypass_username_sessions - computed: false, optional: true, required: false
  private _bypassUsernameSessions?: number; 
  public get bypassUsernameSessions() {
    return this.getNumberAttribute('bypass_username_sessions');
  }
  public set bypassUsernameSessions(value: number) {
    this._bypassUsernameSessions = value;
  }
  public resetBypassUsernameSessions() {
    this._bypassUsernameSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassUsernameSessionsInput() {
    return this._bypassUsernameSessions;
  }

  // cert_create - computed: false, optional: true, required: false
  private _certCreate?: number; 
  public get certCreate() {
    return this.getNumberAttribute('cert_create');
  }
  public set certCreate(value: number) {
    this._certCreate = value;
  }
  public resetCertCreate() {
    this._certCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCreateInput() {
    return this._certCreate;
  }

  // cert_expr - computed: false, optional: true, required: false
  private _certExpr?: number; 
  public get certExpr() {
    return this.getNumberAttribute('cert_expr');
  }
  public set certExpr(value: number) {
    this._certExpr = value;
  }
  public resetCertExpr() {
    this._certExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certExprInput() {
    return this._certExpr;
  }

  // cert_hit - computed: false, optional: true, required: false
  private _certHit?: number; 
  public get certHit() {
    return this.getNumberAttribute('cert_hit');
  }
  public set certHit(value: number) {
    this._certHit = value;
  }
  public resetCertHit() {
    this._certHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certHitInput() {
    return this._certHit;
  }

  // cert_in_cache - computed: false, optional: true, required: false
  private _certInCache?: number; 
  public get certInCache() {
    return this.getNumberAttribute('cert_in_cache');
  }
  public set certInCache(value: number) {
    this._certInCache = value;
  }
  public resetCertInCache() {
    this._certInCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInCacheInput() {
    return this._certInCache;
  }

  // cert_miss - computed: false, optional: true, required: false
  private _certMiss?: number; 
  public get certMiss() {
    return this.getNumberAttribute('cert_miss');
  }
  public set certMiss(value: number) {
    this._certMiss = value;
  }
  public resetCertMiss() {
    this._certMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certMissInput() {
    return this._certMiss;
  }

  // certificates_in_cache - computed: false, optional: true, required: false
  private _certificatesInCache?: number; 
  public get certificatesInCache() {
    return this.getNumberAttribute('certificates_in_cache');
  }
  public set certificatesInCache(value: number) {
    this._certificatesInCache = value;
  }
  public resetCertificatesInCache() {
    this._certificatesInCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInCacheInput() {
    return this._certificatesInCache;
  }

  // conn_bypass - computed: false, optional: true, required: false
  private _connBypass?: number; 
  public get connBypass() {
    return this.getNumberAttribute('conn_bypass');
  }
  public set connBypass(value: number) {
    this._connBypass = value;
  }
  public resetConnBypass() {
    this._connBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connBypassInput() {
    return this._connBypass;
  }

  // conn_inspect - computed: false, optional: true, required: false
  private _connInspect?: number; 
  public get connInspect() {
    return this.getNumberAttribute('conn_inspect');
  }
  public set connInspect(value: number) {
    this._connInspect = value;
  }
  public resetConnInspect() {
    this._connInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connInspectInput() {
    return this._connInspect;
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

  // curr_conn_in_buff - computed: false, optional: true, required: false
  private _currConnInBuff?: number; 
  public get currConnInBuff() {
    return this.getNumberAttribute('curr_conn_in_buff');
  }
  public set currConnInBuff(value: number) {
    this._currConnInBuff = value;
  }
  public resetCurrConnInBuff() {
    this._currConnInBuff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnInBuffInput() {
    return this._currConnInBuff;
  }

  // drop_esni_sessions - computed: false, optional: true, required: false
  private _dropEsniSessions?: number; 
  public get dropEsniSessions() {
    return this.getNumberAttribute('drop_esni_sessions');
  }
  public set dropEsniSessions(value: number) {
    this._dropEsniSessions = value;
  }
  public resetDropEsniSessions() {
    this._dropEsniSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropEsniSessionsInput() {
    return this._dropEsniSessions;
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

  // reset_no_sni_sessions - computed: false, optional: true, required: false
  private _resetNoSniSessions?: number; 
  public get resetNoSniSessions() {
    return this.getNumberAttribute('reset_no_sni_sessions');
  }
  public set resetNoSniSessions(value: number) {
    this._resetNoSniSessions = value;
  }
  public resetResetNoSniSessions() {
    this._resetNoSniSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetNoSniSessionsInput() {
    return this._resetNoSniSessions;
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

  // tot_conn_in_buff - computed: false, optional: true, required: false
  private _totConnInBuff?: number; 
  public get totConnInBuff() {
    return this.getNumberAttribute('tot_conn_in_buff');
  }
  public set totConnInBuff(value: number) {
    this._totConnInBuff = value;
  }
  public resetTotConnInBuff() {
    this._totConnInBuff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totConnInBuffInput() {
    return this._totConnInBuff;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats thunder_slb_ssl_forward_proxy_stats}
*/
export class DataThunderSlbSslForwardProxyStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_forward_proxy_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslForwardProxyStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslForwardProxyStats to import
  * @param importFromId The id of the existing DataThunderSlbSslForwardProxyStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslForwardProxyStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_forward_proxy_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_stats thunder_slb_ssl_forward_proxy_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslForwardProxyStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslForwardProxyStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_forward_proxy_stats',
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
  private _stats = new DataThunderSlbSslForwardProxyStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbSslForwardProxyStatsStats) {
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
      stats: dataThunderSlbSslForwardProxyStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbSslForwardProxyStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslForwardProxyStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
