// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallSslsshprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#allowlist FirewallSslsshprofile#allowlist}
  */
  readonly allowlist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#block_blacklisted_certificates FirewallSslsshprofile#block_blacklisted_certificates}
  */
  readonly blockBlacklistedCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#block_blocklisted_certificates FirewallSslsshprofile#block_blocklisted_certificates}
  */
  readonly blockBlocklistedCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#caname FirewallSslsshprofile#caname}
  */
  readonly caname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#comment FirewallSslsshprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#dynamic_sort_subtable FirewallSslsshprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#get_all_tables FirewallSslsshprofile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#id FirewallSslsshprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#mapi_over_https FirewallSslsshprofile#mapi_over_https}
  */
  readonly mapiOverHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#name FirewallSslsshprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#rpc_over_https FirewallSslsshprofile#rpc_over_https}
  */
  readonly rpcOverHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#server_cert FirewallSslsshprofile#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#server_cert_mode FirewallSslsshprofile#server_cert_mode}
  */
  readonly serverCertMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_anomalies_log FirewallSslsshprofile#ssl_anomalies_log}
  */
  readonly sslAnomaliesLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_anomaly_log FirewallSslsshprofile#ssl_anomaly_log}
  */
  readonly sslAnomalyLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_exemption_ip_rating FirewallSslsshprofile#ssl_exemption_ip_rating}
  */
  readonly sslExemptionIpRating?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_exemption_log FirewallSslsshprofile#ssl_exemption_log}
  */
  readonly sslExemptionLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_exemptions_log FirewallSslsshprofile#ssl_exemptions_log}
  */
  readonly sslExemptionsLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_handshake_log FirewallSslsshprofile#ssl_handshake_log}
  */
  readonly sslHandshakeLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_negotiation_log FirewallSslsshprofile#ssl_negotiation_log}
  */
  readonly sslNegotiationLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_server_cert_log FirewallSslsshprofile#ssl_server_cert_log}
  */
  readonly sslServerCertLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#supported_alpn FirewallSslsshprofile#supported_alpn}
  */
  readonly supportedAlpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#untrusted_caname FirewallSslsshprofile#untrusted_caname}
  */
  readonly untrustedCaname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#use_ssl_server FirewallSslsshprofile#use_ssl_server}
  */
  readonly useSslServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#vdomparam FirewallSslsshprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#whitelist FirewallSslsshprofile#whitelist}
  */
  readonly whitelist?: string;
  /**
  * dot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#dot FirewallSslsshprofile#dot}
  */
  readonly dot?: FirewallSslsshprofileDot;
  /**
  * ech_outer_sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ech_outer_sni FirewallSslsshprofile#ech_outer_sni}
  */
  readonly echOuterSni?: FirewallSslsshprofileEchOuterSni[] | cdktf.IResolvable;
  /**
  * ftps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ftps FirewallSslsshprofile#ftps}
  */
  readonly ftps?: FirewallSslsshprofileFtps;
  /**
  * https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#https FirewallSslsshprofile#https}
  */
  readonly https?: FirewallSslsshprofileHttps;
  /**
  * imaps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#imaps FirewallSslsshprofile#imaps}
  */
  readonly imaps?: FirewallSslsshprofileImaps;
  /**
  * pop3s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#pop3s FirewallSslsshprofile#pop3s}
  */
  readonly pop3S?: FirewallSslsshprofilePop3S;
  /**
  * smtps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#smtps FirewallSslsshprofile#smtps}
  */
  readonly smtps?: FirewallSslsshprofileSmtps;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssh FirewallSslsshprofile#ssh}
  */
  readonly ssh?: FirewallSslsshprofileSsh;
  /**
  * ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl FirewallSslsshprofile#ssl}
  */
  readonly ssl?: FirewallSslsshprofileSsl;
  /**
  * ssl_exempt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_exempt FirewallSslsshprofile#ssl_exempt}
  */
  readonly sslExempt?: FirewallSslsshprofileSslExempt[] | cdktf.IResolvable;
  /**
  * ssl_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_server FirewallSslsshprofile#ssl_server}
  */
  readonly sslServer?: FirewallSslsshprofileSslServer[] | cdktf.IResolvable;
}
export interface FirewallSslsshprofileDot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_failure FirewallSslsshprofile#cert_validation_failure}
  */
  readonly certValidationFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_timeout FirewallSslsshprofile#cert_validation_timeout}
  */
  readonly certValidationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_certificate FirewallSslsshprofile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#expired_server_cert FirewallSslsshprofile#expired_server_cert}
  */
  readonly expiredServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#proxy_after_tcp_handshake FirewallSslsshprofile#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#quic FirewallSslsshprofile#quic}
  */
  readonly quic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#revoked_server_cert FirewallSslsshprofile#revoked_server_cert}
  */
  readonly revokedServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#sni_server_cert_check FirewallSslsshprofile#sni_server_cert_check}
  */
  readonly sniServerCertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#status FirewallSslsshprofile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#udp_not_quic FirewallSslsshprofile#udp_not_quic}
  */
  readonly udpNotQuic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_cipher FirewallSslsshprofile#unsupported_ssl_cipher}
  */
  readonly unsupportedSslCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_negotiation FirewallSslsshprofile#unsupported_ssl_negotiation}
  */
  readonly unsupportedSslNegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_version FirewallSslsshprofile#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#untrusted_server_cert FirewallSslsshprofile#untrusted_server_cert}
  */
  readonly untrustedServerCert?: string;
}

export function firewallSslsshprofileDotToTerraform(struct?: FirewallSslsshprofileDotOutputReference | FirewallSslsshprofileDot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_validation_failure: cdktf.stringToTerraform(struct!.certValidationFailure),
    cert_validation_timeout: cdktf.stringToTerraform(struct!.certValidationTimeout),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    expired_server_cert: cdktf.stringToTerraform(struct!.expiredServerCert),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    quic: cdktf.stringToTerraform(struct!.quic),
    revoked_server_cert: cdktf.stringToTerraform(struct!.revokedServerCert),
    sni_server_cert_check: cdktf.stringToTerraform(struct!.sniServerCertCheck),
    status: cdktf.stringToTerraform(struct!.status),
    udp_not_quic: cdktf.stringToTerraform(struct!.udpNotQuic),
    unsupported_ssl_cipher: cdktf.stringToTerraform(struct!.unsupportedSslCipher),
    unsupported_ssl_negotiation: cdktf.stringToTerraform(struct!.unsupportedSslNegotiation),
    unsupported_ssl_version: cdktf.stringToTerraform(struct!.unsupportedSslVersion),
    untrusted_server_cert: cdktf.stringToTerraform(struct!.untrustedServerCert),
  }
}


export function firewallSslsshprofileDotToHclTerraform(struct?: FirewallSslsshprofileDotOutputReference | FirewallSslsshprofileDot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_validation_failure: {
      value: cdktf.stringToHclTerraform(struct!.certValidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_validation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.certValidationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.expiredServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revoked_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.revokedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_server_cert_check: {
      value: cdktf.stringToHclTerraform(struct!.sniServerCertCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_not_quic: {
      value: cdktf.stringToHclTerraform(struct!.udpNotQuic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_cipher: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_negotiation: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untrusted_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.untrustedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofileDotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallSslsshprofileDot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certValidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationFailure = this._certValidationFailure;
    }
    if (this._certValidationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationTimeout = this._certValidationTimeout;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._expiredServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredServerCert = this._expiredServerCert;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._revokedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedServerCert = this._revokedServerCert;
    }
    if (this._sniServerCertCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniServerCertCheck = this._sniServerCertCheck;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._udpNotQuic !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpNotQuic = this._udpNotQuic;
    }
    if (this._unsupportedSslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslCipher = this._unsupportedSslCipher;
    }
    if (this._unsupportedSslNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslNegotiation = this._unsupportedSslNegotiation;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._untrustedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedServerCert = this._untrustedServerCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofileDot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certValidationFailure = undefined;
      this._certValidationTimeout = undefined;
      this._clientCertificate = undefined;
      this._expiredServerCert = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._quic = undefined;
      this._revokedServerCert = undefined;
      this._sniServerCertCheck = undefined;
      this._status = undefined;
      this._udpNotQuic = undefined;
      this._unsupportedSslCipher = undefined;
      this._unsupportedSslNegotiation = undefined;
      this._unsupportedSslVersion = undefined;
      this._untrustedServerCert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certValidationFailure = value.certValidationFailure;
      this._certValidationTimeout = value.certValidationTimeout;
      this._clientCertificate = value.clientCertificate;
      this._expiredServerCert = value.expiredServerCert;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._quic = value.quic;
      this._revokedServerCert = value.revokedServerCert;
      this._sniServerCertCheck = value.sniServerCertCheck;
      this._status = value.status;
      this._udpNotQuic = value.udpNotQuic;
      this._unsupportedSslCipher = value.unsupportedSslCipher;
      this._unsupportedSslNegotiation = value.unsupportedSslNegotiation;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._untrustedServerCert = value.untrustedServerCert;
    }
  }

  // cert_validation_failure - computed: true, optional: true, required: false
  private _certValidationFailure?: string; 
  public get certValidationFailure() {
    return this.getStringAttribute('cert_validation_failure');
  }
  public set certValidationFailure(value: string) {
    this._certValidationFailure = value;
  }
  public resetCertValidationFailure() {
    this._certValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationFailureInput() {
    return this._certValidationFailure;
  }

  // cert_validation_timeout - computed: true, optional: true, required: false
  private _certValidationTimeout?: string; 
  public get certValidationTimeout() {
    return this.getStringAttribute('cert_validation_timeout');
  }
  public set certValidationTimeout(value: string) {
    this._certValidationTimeout = value;
  }
  public resetCertValidationTimeout() {
    this._certValidationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationTimeoutInput() {
    return this._certValidationTimeout;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // expired_server_cert - computed: true, optional: true, required: false
  private _expiredServerCert?: string; 
  public get expiredServerCert() {
    return this.getStringAttribute('expired_server_cert');
  }
  public set expiredServerCert(value: string) {
    this._expiredServerCert = value;
  }
  public resetExpiredServerCert() {
    this._expiredServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredServerCertInput() {
    return this._expiredServerCert;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // quic - computed: true, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // revoked_server_cert - computed: true, optional: true, required: false
  private _revokedServerCert?: string; 
  public get revokedServerCert() {
    return this.getStringAttribute('revoked_server_cert');
  }
  public set revokedServerCert(value: string) {
    this._revokedServerCert = value;
  }
  public resetRevokedServerCert() {
    this._revokedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedServerCertInput() {
    return this._revokedServerCert;
  }

  // sni_server_cert_check - computed: true, optional: true, required: false
  private _sniServerCertCheck?: string; 
  public get sniServerCertCheck() {
    return this.getStringAttribute('sni_server_cert_check');
  }
  public set sniServerCertCheck(value: string) {
    this._sniServerCertCheck = value;
  }
  public resetSniServerCertCheck() {
    this._sniServerCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniServerCertCheckInput() {
    return this._sniServerCertCheck;
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

  // udp_not_quic - computed: true, optional: true, required: false
  private _udpNotQuic?: string; 
  public get udpNotQuic() {
    return this.getStringAttribute('udp_not_quic');
  }
  public set udpNotQuic(value: string) {
    this._udpNotQuic = value;
  }
  public resetUdpNotQuic() {
    this._udpNotQuic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpNotQuicInput() {
    return this._udpNotQuic;
  }

  // unsupported_ssl_cipher - computed: true, optional: true, required: false
  private _unsupportedSslCipher?: string; 
  public get unsupportedSslCipher() {
    return this.getStringAttribute('unsupported_ssl_cipher');
  }
  public set unsupportedSslCipher(value: string) {
    this._unsupportedSslCipher = value;
  }
  public resetUnsupportedSslCipher() {
    this._unsupportedSslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslCipherInput() {
    return this._unsupportedSslCipher;
  }

  // unsupported_ssl_negotiation - computed: true, optional: true, required: false
  private _unsupportedSslNegotiation?: string; 
  public get unsupportedSslNegotiation() {
    return this.getStringAttribute('unsupported_ssl_negotiation');
  }
  public set unsupportedSslNegotiation(value: string) {
    this._unsupportedSslNegotiation = value;
  }
  public resetUnsupportedSslNegotiation() {
    this._unsupportedSslNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslNegotiationInput() {
    return this._unsupportedSslNegotiation;
  }

  // unsupported_ssl_version - computed: true, optional: true, required: false
  private _unsupportedSslVersion?: string; 
  public get unsupportedSslVersion() {
    return this.getStringAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: string) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // untrusted_server_cert - computed: true, optional: true, required: false
  private _untrustedServerCert?: string; 
  public get untrustedServerCert() {
    return this.getStringAttribute('untrusted_server_cert');
  }
  public set untrustedServerCert(value: string) {
    this._untrustedServerCert = value;
  }
  public resetUntrustedServerCert() {
    this._untrustedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedServerCertInput() {
    return this._untrustedServerCert;
  }
}
export interface FirewallSslsshprofileEchOuterSni {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#name FirewallSslsshprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#sni FirewallSslsshprofile#sni}
  */
  readonly sni?: string;
}

export function firewallSslsshprofileEchOuterSniToTerraform(struct?: FirewallSslsshprofileEchOuterSni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sni: cdktf.stringToTerraform(struct!.sni),
  }
}


export function firewallSslsshprofileEchOuterSniToHclTerraform(struct?: FirewallSslsshprofileEchOuterSni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofileEchOuterSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallSslsshprofileEchOuterSni | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofileEchOuterSni | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sni = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sni = value.sni;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }
}

export class FirewallSslsshprofileEchOuterSniList extends cdktf.ComplexList {
  public internalValue? : FirewallSslsshprofileEchOuterSni[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallSslsshprofileEchOuterSniOutputReference {
    return new FirewallSslsshprofileEchOuterSniOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSslsshprofileFtps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_failure FirewallSslsshprofile#cert_validation_failure}
  */
  readonly certValidationFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_timeout FirewallSslsshprofile#cert_validation_timeout}
  */
  readonly certValidationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_cert_request FirewallSslsshprofile#client_cert_request}
  */
  readonly clientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_certificate FirewallSslsshprofile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#expired_server_cert FirewallSslsshprofile#expired_server_cert}
  */
  readonly expiredServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#invalid_server_cert FirewallSslsshprofile#invalid_server_cert}
  */
  readonly invalidServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#min_allowed_ssl_version FirewallSslsshprofile#min_allowed_ssl_version}
  */
  readonly minAllowedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ports FirewallSslsshprofile#ports}
  */
  readonly ports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#revoked_server_cert FirewallSslsshprofile#revoked_server_cert}
  */
  readonly revokedServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#sni_server_cert_check FirewallSslsshprofile#sni_server_cert_check}
  */
  readonly sniServerCertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#status FirewallSslsshprofile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl FirewallSslsshprofile#unsupported_ssl}
  */
  readonly unsupportedSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_cipher FirewallSslsshprofile#unsupported_ssl_cipher}
  */
  readonly unsupportedSslCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_negotiation FirewallSslsshprofile#unsupported_ssl_negotiation}
  */
  readonly unsupportedSslNegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_version FirewallSslsshprofile#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#untrusted_server_cert FirewallSslsshprofile#untrusted_server_cert}
  */
  readonly untrustedServerCert?: string;
}

export function firewallSslsshprofileFtpsToTerraform(struct?: FirewallSslsshprofileFtpsOutputReference | FirewallSslsshprofileFtps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_validation_failure: cdktf.stringToTerraform(struct!.certValidationFailure),
    cert_validation_timeout: cdktf.stringToTerraform(struct!.certValidationTimeout),
    client_cert_request: cdktf.stringToTerraform(struct!.clientCertRequest),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    expired_server_cert: cdktf.stringToTerraform(struct!.expiredServerCert),
    invalid_server_cert: cdktf.stringToTerraform(struct!.invalidServerCert),
    min_allowed_ssl_version: cdktf.stringToTerraform(struct!.minAllowedSslVersion),
    ports: cdktf.stringToTerraform(struct!.ports),
    revoked_server_cert: cdktf.stringToTerraform(struct!.revokedServerCert),
    sni_server_cert_check: cdktf.stringToTerraform(struct!.sniServerCertCheck),
    status: cdktf.stringToTerraform(struct!.status),
    unsupported_ssl: cdktf.stringToTerraform(struct!.unsupportedSsl),
    unsupported_ssl_cipher: cdktf.stringToTerraform(struct!.unsupportedSslCipher),
    unsupported_ssl_negotiation: cdktf.stringToTerraform(struct!.unsupportedSslNegotiation),
    unsupported_ssl_version: cdktf.stringToTerraform(struct!.unsupportedSslVersion),
    untrusted_server_cert: cdktf.stringToTerraform(struct!.untrustedServerCert),
  }
}


export function firewallSslsshprofileFtpsToHclTerraform(struct?: FirewallSslsshprofileFtpsOutputReference | FirewallSslsshprofileFtps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_validation_failure: {
      value: cdktf.stringToHclTerraform(struct!.certValidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_validation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.certValidationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.clientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.expiredServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.invalidServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_allowed_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.minAllowedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revoked_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.revokedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_server_cert_check: {
      value: cdktf.stringToHclTerraform(struct!.sniServerCertCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_cipher: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_negotiation: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untrusted_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.untrustedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofileFtpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallSslsshprofileFtps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certValidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationFailure = this._certValidationFailure;
    }
    if (this._certValidationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationTimeout = this._certValidationTimeout;
    }
    if (this._clientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertRequest = this._clientCertRequest;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._expiredServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredServerCert = this._expiredServerCert;
    }
    if (this._invalidServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidServerCert = this._invalidServerCert;
    }
    if (this._minAllowedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAllowedSslVersion = this._minAllowedSslVersion;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._revokedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedServerCert = this._revokedServerCert;
    }
    if (this._sniServerCertCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniServerCertCheck = this._sniServerCertCheck;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._unsupportedSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSsl = this._unsupportedSsl;
    }
    if (this._unsupportedSslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslCipher = this._unsupportedSslCipher;
    }
    if (this._unsupportedSslNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslNegotiation = this._unsupportedSslNegotiation;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._untrustedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedServerCert = this._untrustedServerCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofileFtps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certValidationFailure = undefined;
      this._certValidationTimeout = undefined;
      this._clientCertRequest = undefined;
      this._clientCertificate = undefined;
      this._expiredServerCert = undefined;
      this._invalidServerCert = undefined;
      this._minAllowedSslVersion = undefined;
      this._ports = undefined;
      this._revokedServerCert = undefined;
      this._sniServerCertCheck = undefined;
      this._status = undefined;
      this._unsupportedSsl = undefined;
      this._unsupportedSslCipher = undefined;
      this._unsupportedSslNegotiation = undefined;
      this._unsupportedSslVersion = undefined;
      this._untrustedServerCert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certValidationFailure = value.certValidationFailure;
      this._certValidationTimeout = value.certValidationTimeout;
      this._clientCertRequest = value.clientCertRequest;
      this._clientCertificate = value.clientCertificate;
      this._expiredServerCert = value.expiredServerCert;
      this._invalidServerCert = value.invalidServerCert;
      this._minAllowedSslVersion = value.minAllowedSslVersion;
      this._ports = value.ports;
      this._revokedServerCert = value.revokedServerCert;
      this._sniServerCertCheck = value.sniServerCertCheck;
      this._status = value.status;
      this._unsupportedSsl = value.unsupportedSsl;
      this._unsupportedSslCipher = value.unsupportedSslCipher;
      this._unsupportedSslNegotiation = value.unsupportedSslNegotiation;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._untrustedServerCert = value.untrustedServerCert;
    }
  }

  // cert_validation_failure - computed: true, optional: true, required: false
  private _certValidationFailure?: string; 
  public get certValidationFailure() {
    return this.getStringAttribute('cert_validation_failure');
  }
  public set certValidationFailure(value: string) {
    this._certValidationFailure = value;
  }
  public resetCertValidationFailure() {
    this._certValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationFailureInput() {
    return this._certValidationFailure;
  }

  // cert_validation_timeout - computed: true, optional: true, required: false
  private _certValidationTimeout?: string; 
  public get certValidationTimeout() {
    return this.getStringAttribute('cert_validation_timeout');
  }
  public set certValidationTimeout(value: string) {
    this._certValidationTimeout = value;
  }
  public resetCertValidationTimeout() {
    this._certValidationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationTimeoutInput() {
    return this._certValidationTimeout;
  }

  // client_cert_request - computed: false, optional: true, required: false
  private _clientCertRequest?: string; 
  public get clientCertRequest() {
    return this.getStringAttribute('client_cert_request');
  }
  public set clientCertRequest(value: string) {
    this._clientCertRequest = value;
  }
  public resetClientCertRequest() {
    this._clientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertRequestInput() {
    return this._clientCertRequest;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // expired_server_cert - computed: true, optional: true, required: false
  private _expiredServerCert?: string; 
  public get expiredServerCert() {
    return this.getStringAttribute('expired_server_cert');
  }
  public set expiredServerCert(value: string) {
    this._expiredServerCert = value;
  }
  public resetExpiredServerCert() {
    this._expiredServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredServerCertInput() {
    return this._expiredServerCert;
  }

  // invalid_server_cert - computed: false, optional: true, required: false
  private _invalidServerCert?: string; 
  public get invalidServerCert() {
    return this.getStringAttribute('invalid_server_cert');
  }
  public set invalidServerCert(value: string) {
    this._invalidServerCert = value;
  }
  public resetInvalidServerCert() {
    this._invalidServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidServerCertInput() {
    return this._invalidServerCert;
  }

  // min_allowed_ssl_version - computed: true, optional: true, required: false
  private _minAllowedSslVersion?: string; 
  public get minAllowedSslVersion() {
    return this.getStringAttribute('min_allowed_ssl_version');
  }
  public set minAllowedSslVersion(value: string) {
    this._minAllowedSslVersion = value;
  }
  public resetMinAllowedSslVersion() {
    this._minAllowedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAllowedSslVersionInput() {
    return this._minAllowedSslVersion;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // revoked_server_cert - computed: true, optional: true, required: false
  private _revokedServerCert?: string; 
  public get revokedServerCert() {
    return this.getStringAttribute('revoked_server_cert');
  }
  public set revokedServerCert(value: string) {
    this._revokedServerCert = value;
  }
  public resetRevokedServerCert() {
    this._revokedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedServerCertInput() {
    return this._revokedServerCert;
  }

  // sni_server_cert_check - computed: true, optional: true, required: false
  private _sniServerCertCheck?: string; 
  public get sniServerCertCheck() {
    return this.getStringAttribute('sni_server_cert_check');
  }
  public set sniServerCertCheck(value: string) {
    this._sniServerCertCheck = value;
  }
  public resetSniServerCertCheck() {
    this._sniServerCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniServerCertCheckInput() {
    return this._sniServerCertCheck;
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

  // unsupported_ssl - computed: false, optional: true, required: false
  private _unsupportedSsl?: string; 
  public get unsupportedSsl() {
    return this.getStringAttribute('unsupported_ssl');
  }
  public set unsupportedSsl(value: string) {
    this._unsupportedSsl = value;
  }
  public resetUnsupportedSsl() {
    this._unsupportedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslInput() {
    return this._unsupportedSsl;
  }

  // unsupported_ssl_cipher - computed: true, optional: true, required: false
  private _unsupportedSslCipher?: string; 
  public get unsupportedSslCipher() {
    return this.getStringAttribute('unsupported_ssl_cipher');
  }
  public set unsupportedSslCipher(value: string) {
    this._unsupportedSslCipher = value;
  }
  public resetUnsupportedSslCipher() {
    this._unsupportedSslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslCipherInput() {
    return this._unsupportedSslCipher;
  }

  // unsupported_ssl_negotiation - computed: true, optional: true, required: false
  private _unsupportedSslNegotiation?: string; 
  public get unsupportedSslNegotiation() {
    return this.getStringAttribute('unsupported_ssl_negotiation');
  }
  public set unsupportedSslNegotiation(value: string) {
    this._unsupportedSslNegotiation = value;
  }
  public resetUnsupportedSslNegotiation() {
    this._unsupportedSslNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslNegotiationInput() {
    return this._unsupportedSslNegotiation;
  }

  // unsupported_ssl_version - computed: true, optional: true, required: false
  private _unsupportedSslVersion?: string; 
  public get unsupportedSslVersion() {
    return this.getStringAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: string) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // untrusted_server_cert - computed: true, optional: true, required: false
  private _untrustedServerCert?: string; 
  public get untrustedServerCert() {
    return this.getStringAttribute('untrusted_server_cert');
  }
  public set untrustedServerCert(value: string) {
    this._untrustedServerCert = value;
  }
  public resetUntrustedServerCert() {
    this._untrustedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedServerCertInput() {
    return this._untrustedServerCert;
  }
}
export interface FirewallSslsshprofileHttps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_probe_failure FirewallSslsshprofile#cert_probe_failure}
  */
  readonly certProbeFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_failure FirewallSslsshprofile#cert_validation_failure}
  */
  readonly certValidationFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_timeout FirewallSslsshprofile#cert_validation_timeout}
  */
  readonly certValidationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_cert_request FirewallSslsshprofile#client_cert_request}
  */
  readonly clientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_certificate FirewallSslsshprofile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#encrypted_client_hello FirewallSslsshprofile#encrypted_client_hello}
  */
  readonly encryptedClientHello?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#expired_server_cert FirewallSslsshprofile#expired_server_cert}
  */
  readonly expiredServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#invalid_server_cert FirewallSslsshprofile#invalid_server_cert}
  */
  readonly invalidServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#min_allowed_ssl_version FirewallSslsshprofile#min_allowed_ssl_version}
  */
  readonly minAllowedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ports FirewallSslsshprofile#ports}
  */
  readonly ports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#proxy_after_tcp_handshake FirewallSslsshprofile#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#quic FirewallSslsshprofile#quic}
  */
  readonly quic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#revoked_server_cert FirewallSslsshprofile#revoked_server_cert}
  */
  readonly revokedServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#sni_server_cert_check FirewallSslsshprofile#sni_server_cert_check}
  */
  readonly sniServerCertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#status FirewallSslsshprofile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#udp_not_quic FirewallSslsshprofile#udp_not_quic}
  */
  readonly udpNotQuic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl FirewallSslsshprofile#unsupported_ssl}
  */
  readonly unsupportedSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_cipher FirewallSslsshprofile#unsupported_ssl_cipher}
  */
  readonly unsupportedSslCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_negotiation FirewallSslsshprofile#unsupported_ssl_negotiation}
  */
  readonly unsupportedSslNegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_version FirewallSslsshprofile#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#untrusted_server_cert FirewallSslsshprofile#untrusted_server_cert}
  */
  readonly untrustedServerCert?: string;
}

export function firewallSslsshprofileHttpsToTerraform(struct?: FirewallSslsshprofileHttpsOutputReference | FirewallSslsshprofileHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_probe_failure: cdktf.stringToTerraform(struct!.certProbeFailure),
    cert_validation_failure: cdktf.stringToTerraform(struct!.certValidationFailure),
    cert_validation_timeout: cdktf.stringToTerraform(struct!.certValidationTimeout),
    client_cert_request: cdktf.stringToTerraform(struct!.clientCertRequest),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    encrypted_client_hello: cdktf.stringToTerraform(struct!.encryptedClientHello),
    expired_server_cert: cdktf.stringToTerraform(struct!.expiredServerCert),
    invalid_server_cert: cdktf.stringToTerraform(struct!.invalidServerCert),
    min_allowed_ssl_version: cdktf.stringToTerraform(struct!.minAllowedSslVersion),
    ports: cdktf.stringToTerraform(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    quic: cdktf.stringToTerraform(struct!.quic),
    revoked_server_cert: cdktf.stringToTerraform(struct!.revokedServerCert),
    sni_server_cert_check: cdktf.stringToTerraform(struct!.sniServerCertCheck),
    status: cdktf.stringToTerraform(struct!.status),
    udp_not_quic: cdktf.stringToTerraform(struct!.udpNotQuic),
    unsupported_ssl: cdktf.stringToTerraform(struct!.unsupportedSsl),
    unsupported_ssl_cipher: cdktf.stringToTerraform(struct!.unsupportedSslCipher),
    unsupported_ssl_negotiation: cdktf.stringToTerraform(struct!.unsupportedSslNegotiation),
    unsupported_ssl_version: cdktf.stringToTerraform(struct!.unsupportedSslVersion),
    untrusted_server_cert: cdktf.stringToTerraform(struct!.untrustedServerCert),
  }
}


export function firewallSslsshprofileHttpsToHclTerraform(struct?: FirewallSslsshprofileHttpsOutputReference | FirewallSslsshprofileHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_probe_failure: {
      value: cdktf.stringToHclTerraform(struct!.certProbeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_validation_failure: {
      value: cdktf.stringToHclTerraform(struct!.certValidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_validation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.certValidationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.clientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_client_hello: {
      value: cdktf.stringToHclTerraform(struct!.encryptedClientHello),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.expiredServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.invalidServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_allowed_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.minAllowedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revoked_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.revokedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_server_cert_check: {
      value: cdktf.stringToHclTerraform(struct!.sniServerCertCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_not_quic: {
      value: cdktf.stringToHclTerraform(struct!.udpNotQuic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_cipher: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_negotiation: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untrusted_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.untrustedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofileHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallSslsshprofileHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certProbeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.certProbeFailure = this._certProbeFailure;
    }
    if (this._certValidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationFailure = this._certValidationFailure;
    }
    if (this._certValidationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationTimeout = this._certValidationTimeout;
    }
    if (this._clientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertRequest = this._clientCertRequest;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._encryptedClientHello !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedClientHello = this._encryptedClientHello;
    }
    if (this._expiredServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredServerCert = this._expiredServerCert;
    }
    if (this._invalidServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidServerCert = this._invalidServerCert;
    }
    if (this._minAllowedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAllowedSslVersion = this._minAllowedSslVersion;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._revokedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedServerCert = this._revokedServerCert;
    }
    if (this._sniServerCertCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniServerCertCheck = this._sniServerCertCheck;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._udpNotQuic !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpNotQuic = this._udpNotQuic;
    }
    if (this._unsupportedSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSsl = this._unsupportedSsl;
    }
    if (this._unsupportedSslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslCipher = this._unsupportedSslCipher;
    }
    if (this._unsupportedSslNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslNegotiation = this._unsupportedSslNegotiation;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._untrustedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedServerCert = this._untrustedServerCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofileHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certProbeFailure = undefined;
      this._certValidationFailure = undefined;
      this._certValidationTimeout = undefined;
      this._clientCertRequest = undefined;
      this._clientCertificate = undefined;
      this._encryptedClientHello = undefined;
      this._expiredServerCert = undefined;
      this._invalidServerCert = undefined;
      this._minAllowedSslVersion = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._quic = undefined;
      this._revokedServerCert = undefined;
      this._sniServerCertCheck = undefined;
      this._status = undefined;
      this._udpNotQuic = undefined;
      this._unsupportedSsl = undefined;
      this._unsupportedSslCipher = undefined;
      this._unsupportedSslNegotiation = undefined;
      this._unsupportedSslVersion = undefined;
      this._untrustedServerCert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certProbeFailure = value.certProbeFailure;
      this._certValidationFailure = value.certValidationFailure;
      this._certValidationTimeout = value.certValidationTimeout;
      this._clientCertRequest = value.clientCertRequest;
      this._clientCertificate = value.clientCertificate;
      this._encryptedClientHello = value.encryptedClientHello;
      this._expiredServerCert = value.expiredServerCert;
      this._invalidServerCert = value.invalidServerCert;
      this._minAllowedSslVersion = value.minAllowedSslVersion;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._quic = value.quic;
      this._revokedServerCert = value.revokedServerCert;
      this._sniServerCertCheck = value.sniServerCertCheck;
      this._status = value.status;
      this._udpNotQuic = value.udpNotQuic;
      this._unsupportedSsl = value.unsupportedSsl;
      this._unsupportedSslCipher = value.unsupportedSslCipher;
      this._unsupportedSslNegotiation = value.unsupportedSslNegotiation;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._untrustedServerCert = value.untrustedServerCert;
    }
  }

  // cert_probe_failure - computed: true, optional: true, required: false
  private _certProbeFailure?: string; 
  public get certProbeFailure() {
    return this.getStringAttribute('cert_probe_failure');
  }
  public set certProbeFailure(value: string) {
    this._certProbeFailure = value;
  }
  public resetCertProbeFailure() {
    this._certProbeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certProbeFailureInput() {
    return this._certProbeFailure;
  }

  // cert_validation_failure - computed: true, optional: true, required: false
  private _certValidationFailure?: string; 
  public get certValidationFailure() {
    return this.getStringAttribute('cert_validation_failure');
  }
  public set certValidationFailure(value: string) {
    this._certValidationFailure = value;
  }
  public resetCertValidationFailure() {
    this._certValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationFailureInput() {
    return this._certValidationFailure;
  }

  // cert_validation_timeout - computed: true, optional: true, required: false
  private _certValidationTimeout?: string; 
  public get certValidationTimeout() {
    return this.getStringAttribute('cert_validation_timeout');
  }
  public set certValidationTimeout(value: string) {
    this._certValidationTimeout = value;
  }
  public resetCertValidationTimeout() {
    this._certValidationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationTimeoutInput() {
    return this._certValidationTimeout;
  }

  // client_cert_request - computed: false, optional: true, required: false
  private _clientCertRequest?: string; 
  public get clientCertRequest() {
    return this.getStringAttribute('client_cert_request');
  }
  public set clientCertRequest(value: string) {
    this._clientCertRequest = value;
  }
  public resetClientCertRequest() {
    this._clientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertRequestInput() {
    return this._clientCertRequest;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // encrypted_client_hello - computed: true, optional: true, required: false
  private _encryptedClientHello?: string; 
  public get encryptedClientHello() {
    return this.getStringAttribute('encrypted_client_hello');
  }
  public set encryptedClientHello(value: string) {
    this._encryptedClientHello = value;
  }
  public resetEncryptedClientHello() {
    this._encryptedClientHello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedClientHelloInput() {
    return this._encryptedClientHello;
  }

  // expired_server_cert - computed: true, optional: true, required: false
  private _expiredServerCert?: string; 
  public get expiredServerCert() {
    return this.getStringAttribute('expired_server_cert');
  }
  public set expiredServerCert(value: string) {
    this._expiredServerCert = value;
  }
  public resetExpiredServerCert() {
    this._expiredServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredServerCertInput() {
    return this._expiredServerCert;
  }

  // invalid_server_cert - computed: false, optional: true, required: false
  private _invalidServerCert?: string; 
  public get invalidServerCert() {
    return this.getStringAttribute('invalid_server_cert');
  }
  public set invalidServerCert(value: string) {
    this._invalidServerCert = value;
  }
  public resetInvalidServerCert() {
    this._invalidServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidServerCertInput() {
    return this._invalidServerCert;
  }

  // min_allowed_ssl_version - computed: true, optional: true, required: false
  private _minAllowedSslVersion?: string; 
  public get minAllowedSslVersion() {
    return this.getStringAttribute('min_allowed_ssl_version');
  }
  public set minAllowedSslVersion(value: string) {
    this._minAllowedSslVersion = value;
  }
  public resetMinAllowedSslVersion() {
    this._minAllowedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAllowedSslVersionInput() {
    return this._minAllowedSslVersion;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // quic - computed: true, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // revoked_server_cert - computed: true, optional: true, required: false
  private _revokedServerCert?: string; 
  public get revokedServerCert() {
    return this.getStringAttribute('revoked_server_cert');
  }
  public set revokedServerCert(value: string) {
    this._revokedServerCert = value;
  }
  public resetRevokedServerCert() {
    this._revokedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedServerCertInput() {
    return this._revokedServerCert;
  }

  // sni_server_cert_check - computed: true, optional: true, required: false
  private _sniServerCertCheck?: string; 
  public get sniServerCertCheck() {
    return this.getStringAttribute('sni_server_cert_check');
  }
  public set sniServerCertCheck(value: string) {
    this._sniServerCertCheck = value;
  }
  public resetSniServerCertCheck() {
    this._sniServerCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniServerCertCheckInput() {
    return this._sniServerCertCheck;
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

  // udp_not_quic - computed: true, optional: true, required: false
  private _udpNotQuic?: string; 
  public get udpNotQuic() {
    return this.getStringAttribute('udp_not_quic');
  }
  public set udpNotQuic(value: string) {
    this._udpNotQuic = value;
  }
  public resetUdpNotQuic() {
    this._udpNotQuic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpNotQuicInput() {
    return this._udpNotQuic;
  }

  // unsupported_ssl - computed: false, optional: true, required: false
  private _unsupportedSsl?: string; 
  public get unsupportedSsl() {
    return this.getStringAttribute('unsupported_ssl');
  }
  public set unsupportedSsl(value: string) {
    this._unsupportedSsl = value;
  }
  public resetUnsupportedSsl() {
    this._unsupportedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslInput() {
    return this._unsupportedSsl;
  }

  // unsupported_ssl_cipher - computed: true, optional: true, required: false
  private _unsupportedSslCipher?: string; 
  public get unsupportedSslCipher() {
    return this.getStringAttribute('unsupported_ssl_cipher');
  }
  public set unsupportedSslCipher(value: string) {
    this._unsupportedSslCipher = value;
  }
  public resetUnsupportedSslCipher() {
    this._unsupportedSslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslCipherInput() {
    return this._unsupportedSslCipher;
  }

  // unsupported_ssl_negotiation - computed: true, optional: true, required: false
  private _unsupportedSslNegotiation?: string; 
  public get unsupportedSslNegotiation() {
    return this.getStringAttribute('unsupported_ssl_negotiation');
  }
  public set unsupportedSslNegotiation(value: string) {
    this._unsupportedSslNegotiation = value;
  }
  public resetUnsupportedSslNegotiation() {
    this._unsupportedSslNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslNegotiationInput() {
    return this._unsupportedSslNegotiation;
  }

  // unsupported_ssl_version - computed: true, optional: true, required: false
  private _unsupportedSslVersion?: string; 
  public get unsupportedSslVersion() {
    return this.getStringAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: string) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // untrusted_server_cert - computed: true, optional: true, required: false
  private _untrustedServerCert?: string; 
  public get untrustedServerCert() {
    return this.getStringAttribute('untrusted_server_cert');
  }
  public set untrustedServerCert(value: string) {
    this._untrustedServerCert = value;
  }
  public resetUntrustedServerCert() {
    this._untrustedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedServerCertInput() {
    return this._untrustedServerCert;
  }
}
export interface FirewallSslsshprofileImaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_failure FirewallSslsshprofile#cert_validation_failure}
  */
  readonly certValidationFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_timeout FirewallSslsshprofile#cert_validation_timeout}
  */
  readonly certValidationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_cert_request FirewallSslsshprofile#client_cert_request}
  */
  readonly clientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_certificate FirewallSslsshprofile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#expired_server_cert FirewallSslsshprofile#expired_server_cert}
  */
  readonly expiredServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#invalid_server_cert FirewallSslsshprofile#invalid_server_cert}
  */
  readonly invalidServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ports FirewallSslsshprofile#ports}
  */
  readonly ports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#proxy_after_tcp_handshake FirewallSslsshprofile#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#revoked_server_cert FirewallSslsshprofile#revoked_server_cert}
  */
  readonly revokedServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#sni_server_cert_check FirewallSslsshprofile#sni_server_cert_check}
  */
  readonly sniServerCertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#status FirewallSslsshprofile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl FirewallSslsshprofile#unsupported_ssl}
  */
  readonly unsupportedSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_cipher FirewallSslsshprofile#unsupported_ssl_cipher}
  */
  readonly unsupportedSslCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_negotiation FirewallSslsshprofile#unsupported_ssl_negotiation}
  */
  readonly unsupportedSslNegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_version FirewallSslsshprofile#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#untrusted_server_cert FirewallSslsshprofile#untrusted_server_cert}
  */
  readonly untrustedServerCert?: string;
}

export function firewallSslsshprofileImapsToTerraform(struct?: FirewallSslsshprofileImapsOutputReference | FirewallSslsshprofileImaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_validation_failure: cdktf.stringToTerraform(struct!.certValidationFailure),
    cert_validation_timeout: cdktf.stringToTerraform(struct!.certValidationTimeout),
    client_cert_request: cdktf.stringToTerraform(struct!.clientCertRequest),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    expired_server_cert: cdktf.stringToTerraform(struct!.expiredServerCert),
    invalid_server_cert: cdktf.stringToTerraform(struct!.invalidServerCert),
    ports: cdktf.stringToTerraform(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    revoked_server_cert: cdktf.stringToTerraform(struct!.revokedServerCert),
    sni_server_cert_check: cdktf.stringToTerraform(struct!.sniServerCertCheck),
    status: cdktf.stringToTerraform(struct!.status),
    unsupported_ssl: cdktf.stringToTerraform(struct!.unsupportedSsl),
    unsupported_ssl_cipher: cdktf.stringToTerraform(struct!.unsupportedSslCipher),
    unsupported_ssl_negotiation: cdktf.stringToTerraform(struct!.unsupportedSslNegotiation),
    unsupported_ssl_version: cdktf.stringToTerraform(struct!.unsupportedSslVersion),
    untrusted_server_cert: cdktf.stringToTerraform(struct!.untrustedServerCert),
  }
}


export function firewallSslsshprofileImapsToHclTerraform(struct?: FirewallSslsshprofileImapsOutputReference | FirewallSslsshprofileImaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_validation_failure: {
      value: cdktf.stringToHclTerraform(struct!.certValidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_validation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.certValidationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.clientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.expiredServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.invalidServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revoked_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.revokedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_server_cert_check: {
      value: cdktf.stringToHclTerraform(struct!.sniServerCertCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_cipher: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_negotiation: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untrusted_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.untrustedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofileImapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallSslsshprofileImaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certValidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationFailure = this._certValidationFailure;
    }
    if (this._certValidationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationTimeout = this._certValidationTimeout;
    }
    if (this._clientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertRequest = this._clientCertRequest;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._expiredServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredServerCert = this._expiredServerCert;
    }
    if (this._invalidServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidServerCert = this._invalidServerCert;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._revokedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedServerCert = this._revokedServerCert;
    }
    if (this._sniServerCertCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniServerCertCheck = this._sniServerCertCheck;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._unsupportedSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSsl = this._unsupportedSsl;
    }
    if (this._unsupportedSslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslCipher = this._unsupportedSslCipher;
    }
    if (this._unsupportedSslNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslNegotiation = this._unsupportedSslNegotiation;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._untrustedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedServerCert = this._untrustedServerCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofileImaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certValidationFailure = undefined;
      this._certValidationTimeout = undefined;
      this._clientCertRequest = undefined;
      this._clientCertificate = undefined;
      this._expiredServerCert = undefined;
      this._invalidServerCert = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._revokedServerCert = undefined;
      this._sniServerCertCheck = undefined;
      this._status = undefined;
      this._unsupportedSsl = undefined;
      this._unsupportedSslCipher = undefined;
      this._unsupportedSslNegotiation = undefined;
      this._unsupportedSslVersion = undefined;
      this._untrustedServerCert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certValidationFailure = value.certValidationFailure;
      this._certValidationTimeout = value.certValidationTimeout;
      this._clientCertRequest = value.clientCertRequest;
      this._clientCertificate = value.clientCertificate;
      this._expiredServerCert = value.expiredServerCert;
      this._invalidServerCert = value.invalidServerCert;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._revokedServerCert = value.revokedServerCert;
      this._sniServerCertCheck = value.sniServerCertCheck;
      this._status = value.status;
      this._unsupportedSsl = value.unsupportedSsl;
      this._unsupportedSslCipher = value.unsupportedSslCipher;
      this._unsupportedSslNegotiation = value.unsupportedSslNegotiation;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._untrustedServerCert = value.untrustedServerCert;
    }
  }

  // cert_validation_failure - computed: true, optional: true, required: false
  private _certValidationFailure?: string; 
  public get certValidationFailure() {
    return this.getStringAttribute('cert_validation_failure');
  }
  public set certValidationFailure(value: string) {
    this._certValidationFailure = value;
  }
  public resetCertValidationFailure() {
    this._certValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationFailureInput() {
    return this._certValidationFailure;
  }

  // cert_validation_timeout - computed: true, optional: true, required: false
  private _certValidationTimeout?: string; 
  public get certValidationTimeout() {
    return this.getStringAttribute('cert_validation_timeout');
  }
  public set certValidationTimeout(value: string) {
    this._certValidationTimeout = value;
  }
  public resetCertValidationTimeout() {
    this._certValidationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationTimeoutInput() {
    return this._certValidationTimeout;
  }

  // client_cert_request - computed: false, optional: true, required: false
  private _clientCertRequest?: string; 
  public get clientCertRequest() {
    return this.getStringAttribute('client_cert_request');
  }
  public set clientCertRequest(value: string) {
    this._clientCertRequest = value;
  }
  public resetClientCertRequest() {
    this._clientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertRequestInput() {
    return this._clientCertRequest;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // expired_server_cert - computed: true, optional: true, required: false
  private _expiredServerCert?: string; 
  public get expiredServerCert() {
    return this.getStringAttribute('expired_server_cert');
  }
  public set expiredServerCert(value: string) {
    this._expiredServerCert = value;
  }
  public resetExpiredServerCert() {
    this._expiredServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredServerCertInput() {
    return this._expiredServerCert;
  }

  // invalid_server_cert - computed: false, optional: true, required: false
  private _invalidServerCert?: string; 
  public get invalidServerCert() {
    return this.getStringAttribute('invalid_server_cert');
  }
  public set invalidServerCert(value: string) {
    this._invalidServerCert = value;
  }
  public resetInvalidServerCert() {
    this._invalidServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidServerCertInput() {
    return this._invalidServerCert;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // revoked_server_cert - computed: true, optional: true, required: false
  private _revokedServerCert?: string; 
  public get revokedServerCert() {
    return this.getStringAttribute('revoked_server_cert');
  }
  public set revokedServerCert(value: string) {
    this._revokedServerCert = value;
  }
  public resetRevokedServerCert() {
    this._revokedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedServerCertInput() {
    return this._revokedServerCert;
  }

  // sni_server_cert_check - computed: true, optional: true, required: false
  private _sniServerCertCheck?: string; 
  public get sniServerCertCheck() {
    return this.getStringAttribute('sni_server_cert_check');
  }
  public set sniServerCertCheck(value: string) {
    this._sniServerCertCheck = value;
  }
  public resetSniServerCertCheck() {
    this._sniServerCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniServerCertCheckInput() {
    return this._sniServerCertCheck;
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

  // unsupported_ssl - computed: false, optional: true, required: false
  private _unsupportedSsl?: string; 
  public get unsupportedSsl() {
    return this.getStringAttribute('unsupported_ssl');
  }
  public set unsupportedSsl(value: string) {
    this._unsupportedSsl = value;
  }
  public resetUnsupportedSsl() {
    this._unsupportedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslInput() {
    return this._unsupportedSsl;
  }

  // unsupported_ssl_cipher - computed: true, optional: true, required: false
  private _unsupportedSslCipher?: string; 
  public get unsupportedSslCipher() {
    return this.getStringAttribute('unsupported_ssl_cipher');
  }
  public set unsupportedSslCipher(value: string) {
    this._unsupportedSslCipher = value;
  }
  public resetUnsupportedSslCipher() {
    this._unsupportedSslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslCipherInput() {
    return this._unsupportedSslCipher;
  }

  // unsupported_ssl_negotiation - computed: true, optional: true, required: false
  private _unsupportedSslNegotiation?: string; 
  public get unsupportedSslNegotiation() {
    return this.getStringAttribute('unsupported_ssl_negotiation');
  }
  public set unsupportedSslNegotiation(value: string) {
    this._unsupportedSslNegotiation = value;
  }
  public resetUnsupportedSslNegotiation() {
    this._unsupportedSslNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslNegotiationInput() {
    return this._unsupportedSslNegotiation;
  }

  // unsupported_ssl_version - computed: true, optional: true, required: false
  private _unsupportedSslVersion?: string; 
  public get unsupportedSslVersion() {
    return this.getStringAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: string) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // untrusted_server_cert - computed: true, optional: true, required: false
  private _untrustedServerCert?: string; 
  public get untrustedServerCert() {
    return this.getStringAttribute('untrusted_server_cert');
  }
  public set untrustedServerCert(value: string) {
    this._untrustedServerCert = value;
  }
  public resetUntrustedServerCert() {
    this._untrustedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedServerCertInput() {
    return this._untrustedServerCert;
  }
}
export interface FirewallSslsshprofilePop3S {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_failure FirewallSslsshprofile#cert_validation_failure}
  */
  readonly certValidationFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_timeout FirewallSslsshprofile#cert_validation_timeout}
  */
  readonly certValidationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_cert_request FirewallSslsshprofile#client_cert_request}
  */
  readonly clientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_certificate FirewallSslsshprofile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#expired_server_cert FirewallSslsshprofile#expired_server_cert}
  */
  readonly expiredServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#invalid_server_cert FirewallSslsshprofile#invalid_server_cert}
  */
  readonly invalidServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ports FirewallSslsshprofile#ports}
  */
  readonly ports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#proxy_after_tcp_handshake FirewallSslsshprofile#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#revoked_server_cert FirewallSslsshprofile#revoked_server_cert}
  */
  readonly revokedServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#sni_server_cert_check FirewallSslsshprofile#sni_server_cert_check}
  */
  readonly sniServerCertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#status FirewallSslsshprofile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl FirewallSslsshprofile#unsupported_ssl}
  */
  readonly unsupportedSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_cipher FirewallSslsshprofile#unsupported_ssl_cipher}
  */
  readonly unsupportedSslCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_negotiation FirewallSslsshprofile#unsupported_ssl_negotiation}
  */
  readonly unsupportedSslNegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_version FirewallSslsshprofile#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#untrusted_server_cert FirewallSslsshprofile#untrusted_server_cert}
  */
  readonly untrustedServerCert?: string;
}

export function firewallSslsshprofilePop3SToTerraform(struct?: FirewallSslsshprofilePop3SOutputReference | FirewallSslsshprofilePop3S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_validation_failure: cdktf.stringToTerraform(struct!.certValidationFailure),
    cert_validation_timeout: cdktf.stringToTerraform(struct!.certValidationTimeout),
    client_cert_request: cdktf.stringToTerraform(struct!.clientCertRequest),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    expired_server_cert: cdktf.stringToTerraform(struct!.expiredServerCert),
    invalid_server_cert: cdktf.stringToTerraform(struct!.invalidServerCert),
    ports: cdktf.stringToTerraform(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    revoked_server_cert: cdktf.stringToTerraform(struct!.revokedServerCert),
    sni_server_cert_check: cdktf.stringToTerraform(struct!.sniServerCertCheck),
    status: cdktf.stringToTerraform(struct!.status),
    unsupported_ssl: cdktf.stringToTerraform(struct!.unsupportedSsl),
    unsupported_ssl_cipher: cdktf.stringToTerraform(struct!.unsupportedSslCipher),
    unsupported_ssl_negotiation: cdktf.stringToTerraform(struct!.unsupportedSslNegotiation),
    unsupported_ssl_version: cdktf.stringToTerraform(struct!.unsupportedSslVersion),
    untrusted_server_cert: cdktf.stringToTerraform(struct!.untrustedServerCert),
  }
}


export function firewallSslsshprofilePop3SToHclTerraform(struct?: FirewallSslsshprofilePop3SOutputReference | FirewallSslsshprofilePop3S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_validation_failure: {
      value: cdktf.stringToHclTerraform(struct!.certValidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_validation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.certValidationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.clientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.expiredServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.invalidServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revoked_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.revokedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_server_cert_check: {
      value: cdktf.stringToHclTerraform(struct!.sniServerCertCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_cipher: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_negotiation: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untrusted_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.untrustedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofilePop3SOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallSslsshprofilePop3S | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certValidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationFailure = this._certValidationFailure;
    }
    if (this._certValidationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationTimeout = this._certValidationTimeout;
    }
    if (this._clientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertRequest = this._clientCertRequest;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._expiredServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredServerCert = this._expiredServerCert;
    }
    if (this._invalidServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidServerCert = this._invalidServerCert;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._revokedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedServerCert = this._revokedServerCert;
    }
    if (this._sniServerCertCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniServerCertCheck = this._sniServerCertCheck;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._unsupportedSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSsl = this._unsupportedSsl;
    }
    if (this._unsupportedSslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslCipher = this._unsupportedSslCipher;
    }
    if (this._unsupportedSslNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslNegotiation = this._unsupportedSslNegotiation;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._untrustedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedServerCert = this._untrustedServerCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofilePop3S | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certValidationFailure = undefined;
      this._certValidationTimeout = undefined;
      this._clientCertRequest = undefined;
      this._clientCertificate = undefined;
      this._expiredServerCert = undefined;
      this._invalidServerCert = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._revokedServerCert = undefined;
      this._sniServerCertCheck = undefined;
      this._status = undefined;
      this._unsupportedSsl = undefined;
      this._unsupportedSslCipher = undefined;
      this._unsupportedSslNegotiation = undefined;
      this._unsupportedSslVersion = undefined;
      this._untrustedServerCert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certValidationFailure = value.certValidationFailure;
      this._certValidationTimeout = value.certValidationTimeout;
      this._clientCertRequest = value.clientCertRequest;
      this._clientCertificate = value.clientCertificate;
      this._expiredServerCert = value.expiredServerCert;
      this._invalidServerCert = value.invalidServerCert;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._revokedServerCert = value.revokedServerCert;
      this._sniServerCertCheck = value.sniServerCertCheck;
      this._status = value.status;
      this._unsupportedSsl = value.unsupportedSsl;
      this._unsupportedSslCipher = value.unsupportedSslCipher;
      this._unsupportedSslNegotiation = value.unsupportedSslNegotiation;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._untrustedServerCert = value.untrustedServerCert;
    }
  }

  // cert_validation_failure - computed: true, optional: true, required: false
  private _certValidationFailure?: string; 
  public get certValidationFailure() {
    return this.getStringAttribute('cert_validation_failure');
  }
  public set certValidationFailure(value: string) {
    this._certValidationFailure = value;
  }
  public resetCertValidationFailure() {
    this._certValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationFailureInput() {
    return this._certValidationFailure;
  }

  // cert_validation_timeout - computed: true, optional: true, required: false
  private _certValidationTimeout?: string; 
  public get certValidationTimeout() {
    return this.getStringAttribute('cert_validation_timeout');
  }
  public set certValidationTimeout(value: string) {
    this._certValidationTimeout = value;
  }
  public resetCertValidationTimeout() {
    this._certValidationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationTimeoutInput() {
    return this._certValidationTimeout;
  }

  // client_cert_request - computed: false, optional: true, required: false
  private _clientCertRequest?: string; 
  public get clientCertRequest() {
    return this.getStringAttribute('client_cert_request');
  }
  public set clientCertRequest(value: string) {
    this._clientCertRequest = value;
  }
  public resetClientCertRequest() {
    this._clientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertRequestInput() {
    return this._clientCertRequest;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // expired_server_cert - computed: true, optional: true, required: false
  private _expiredServerCert?: string; 
  public get expiredServerCert() {
    return this.getStringAttribute('expired_server_cert');
  }
  public set expiredServerCert(value: string) {
    this._expiredServerCert = value;
  }
  public resetExpiredServerCert() {
    this._expiredServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredServerCertInput() {
    return this._expiredServerCert;
  }

  // invalid_server_cert - computed: false, optional: true, required: false
  private _invalidServerCert?: string; 
  public get invalidServerCert() {
    return this.getStringAttribute('invalid_server_cert');
  }
  public set invalidServerCert(value: string) {
    this._invalidServerCert = value;
  }
  public resetInvalidServerCert() {
    this._invalidServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidServerCertInput() {
    return this._invalidServerCert;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // revoked_server_cert - computed: true, optional: true, required: false
  private _revokedServerCert?: string; 
  public get revokedServerCert() {
    return this.getStringAttribute('revoked_server_cert');
  }
  public set revokedServerCert(value: string) {
    this._revokedServerCert = value;
  }
  public resetRevokedServerCert() {
    this._revokedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedServerCertInput() {
    return this._revokedServerCert;
  }

  // sni_server_cert_check - computed: true, optional: true, required: false
  private _sniServerCertCheck?: string; 
  public get sniServerCertCheck() {
    return this.getStringAttribute('sni_server_cert_check');
  }
  public set sniServerCertCheck(value: string) {
    this._sniServerCertCheck = value;
  }
  public resetSniServerCertCheck() {
    this._sniServerCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniServerCertCheckInput() {
    return this._sniServerCertCheck;
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

  // unsupported_ssl - computed: false, optional: true, required: false
  private _unsupportedSsl?: string; 
  public get unsupportedSsl() {
    return this.getStringAttribute('unsupported_ssl');
  }
  public set unsupportedSsl(value: string) {
    this._unsupportedSsl = value;
  }
  public resetUnsupportedSsl() {
    this._unsupportedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslInput() {
    return this._unsupportedSsl;
  }

  // unsupported_ssl_cipher - computed: true, optional: true, required: false
  private _unsupportedSslCipher?: string; 
  public get unsupportedSslCipher() {
    return this.getStringAttribute('unsupported_ssl_cipher');
  }
  public set unsupportedSslCipher(value: string) {
    this._unsupportedSslCipher = value;
  }
  public resetUnsupportedSslCipher() {
    this._unsupportedSslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslCipherInput() {
    return this._unsupportedSslCipher;
  }

  // unsupported_ssl_negotiation - computed: true, optional: true, required: false
  private _unsupportedSslNegotiation?: string; 
  public get unsupportedSslNegotiation() {
    return this.getStringAttribute('unsupported_ssl_negotiation');
  }
  public set unsupportedSslNegotiation(value: string) {
    this._unsupportedSslNegotiation = value;
  }
  public resetUnsupportedSslNegotiation() {
    this._unsupportedSslNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslNegotiationInput() {
    return this._unsupportedSslNegotiation;
  }

  // unsupported_ssl_version - computed: true, optional: true, required: false
  private _unsupportedSslVersion?: string; 
  public get unsupportedSslVersion() {
    return this.getStringAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: string) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // untrusted_server_cert - computed: true, optional: true, required: false
  private _untrustedServerCert?: string; 
  public get untrustedServerCert() {
    return this.getStringAttribute('untrusted_server_cert');
  }
  public set untrustedServerCert(value: string) {
    this._untrustedServerCert = value;
  }
  public resetUntrustedServerCert() {
    this._untrustedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedServerCertInput() {
    return this._untrustedServerCert;
  }
}
export interface FirewallSslsshprofileSmtps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_failure FirewallSslsshprofile#cert_validation_failure}
  */
  readonly certValidationFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_timeout FirewallSslsshprofile#cert_validation_timeout}
  */
  readonly certValidationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_cert_request FirewallSslsshprofile#client_cert_request}
  */
  readonly clientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_certificate FirewallSslsshprofile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#expired_server_cert FirewallSslsshprofile#expired_server_cert}
  */
  readonly expiredServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#invalid_server_cert FirewallSslsshprofile#invalid_server_cert}
  */
  readonly invalidServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ports FirewallSslsshprofile#ports}
  */
  readonly ports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#proxy_after_tcp_handshake FirewallSslsshprofile#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#revoked_server_cert FirewallSslsshprofile#revoked_server_cert}
  */
  readonly revokedServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#sni_server_cert_check FirewallSslsshprofile#sni_server_cert_check}
  */
  readonly sniServerCertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#status FirewallSslsshprofile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl FirewallSslsshprofile#unsupported_ssl}
  */
  readonly unsupportedSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_cipher FirewallSslsshprofile#unsupported_ssl_cipher}
  */
  readonly unsupportedSslCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_negotiation FirewallSslsshprofile#unsupported_ssl_negotiation}
  */
  readonly unsupportedSslNegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_version FirewallSslsshprofile#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#untrusted_server_cert FirewallSslsshprofile#untrusted_server_cert}
  */
  readonly untrustedServerCert?: string;
}

export function firewallSslsshprofileSmtpsToTerraform(struct?: FirewallSslsshprofileSmtpsOutputReference | FirewallSslsshprofileSmtps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_validation_failure: cdktf.stringToTerraform(struct!.certValidationFailure),
    cert_validation_timeout: cdktf.stringToTerraform(struct!.certValidationTimeout),
    client_cert_request: cdktf.stringToTerraform(struct!.clientCertRequest),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    expired_server_cert: cdktf.stringToTerraform(struct!.expiredServerCert),
    invalid_server_cert: cdktf.stringToTerraform(struct!.invalidServerCert),
    ports: cdktf.stringToTerraform(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    revoked_server_cert: cdktf.stringToTerraform(struct!.revokedServerCert),
    sni_server_cert_check: cdktf.stringToTerraform(struct!.sniServerCertCheck),
    status: cdktf.stringToTerraform(struct!.status),
    unsupported_ssl: cdktf.stringToTerraform(struct!.unsupportedSsl),
    unsupported_ssl_cipher: cdktf.stringToTerraform(struct!.unsupportedSslCipher),
    unsupported_ssl_negotiation: cdktf.stringToTerraform(struct!.unsupportedSslNegotiation),
    unsupported_ssl_version: cdktf.stringToTerraform(struct!.unsupportedSslVersion),
    untrusted_server_cert: cdktf.stringToTerraform(struct!.untrustedServerCert),
  }
}


export function firewallSslsshprofileSmtpsToHclTerraform(struct?: FirewallSslsshprofileSmtpsOutputReference | FirewallSslsshprofileSmtps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_validation_failure: {
      value: cdktf.stringToHclTerraform(struct!.certValidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_validation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.certValidationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.clientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.expiredServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.invalidServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revoked_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.revokedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_server_cert_check: {
      value: cdktf.stringToHclTerraform(struct!.sniServerCertCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_cipher: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_negotiation: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untrusted_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.untrustedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofileSmtpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallSslsshprofileSmtps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certValidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationFailure = this._certValidationFailure;
    }
    if (this._certValidationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationTimeout = this._certValidationTimeout;
    }
    if (this._clientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertRequest = this._clientCertRequest;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._expiredServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredServerCert = this._expiredServerCert;
    }
    if (this._invalidServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidServerCert = this._invalidServerCert;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._revokedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedServerCert = this._revokedServerCert;
    }
    if (this._sniServerCertCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniServerCertCheck = this._sniServerCertCheck;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._unsupportedSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSsl = this._unsupportedSsl;
    }
    if (this._unsupportedSslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslCipher = this._unsupportedSslCipher;
    }
    if (this._unsupportedSslNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslNegotiation = this._unsupportedSslNegotiation;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._untrustedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedServerCert = this._untrustedServerCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofileSmtps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certValidationFailure = undefined;
      this._certValidationTimeout = undefined;
      this._clientCertRequest = undefined;
      this._clientCertificate = undefined;
      this._expiredServerCert = undefined;
      this._invalidServerCert = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._revokedServerCert = undefined;
      this._sniServerCertCheck = undefined;
      this._status = undefined;
      this._unsupportedSsl = undefined;
      this._unsupportedSslCipher = undefined;
      this._unsupportedSslNegotiation = undefined;
      this._unsupportedSslVersion = undefined;
      this._untrustedServerCert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certValidationFailure = value.certValidationFailure;
      this._certValidationTimeout = value.certValidationTimeout;
      this._clientCertRequest = value.clientCertRequest;
      this._clientCertificate = value.clientCertificate;
      this._expiredServerCert = value.expiredServerCert;
      this._invalidServerCert = value.invalidServerCert;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._revokedServerCert = value.revokedServerCert;
      this._sniServerCertCheck = value.sniServerCertCheck;
      this._status = value.status;
      this._unsupportedSsl = value.unsupportedSsl;
      this._unsupportedSslCipher = value.unsupportedSslCipher;
      this._unsupportedSslNegotiation = value.unsupportedSslNegotiation;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._untrustedServerCert = value.untrustedServerCert;
    }
  }

  // cert_validation_failure - computed: true, optional: true, required: false
  private _certValidationFailure?: string; 
  public get certValidationFailure() {
    return this.getStringAttribute('cert_validation_failure');
  }
  public set certValidationFailure(value: string) {
    this._certValidationFailure = value;
  }
  public resetCertValidationFailure() {
    this._certValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationFailureInput() {
    return this._certValidationFailure;
  }

  // cert_validation_timeout - computed: true, optional: true, required: false
  private _certValidationTimeout?: string; 
  public get certValidationTimeout() {
    return this.getStringAttribute('cert_validation_timeout');
  }
  public set certValidationTimeout(value: string) {
    this._certValidationTimeout = value;
  }
  public resetCertValidationTimeout() {
    this._certValidationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationTimeoutInput() {
    return this._certValidationTimeout;
  }

  // client_cert_request - computed: false, optional: true, required: false
  private _clientCertRequest?: string; 
  public get clientCertRequest() {
    return this.getStringAttribute('client_cert_request');
  }
  public set clientCertRequest(value: string) {
    this._clientCertRequest = value;
  }
  public resetClientCertRequest() {
    this._clientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertRequestInput() {
    return this._clientCertRequest;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // expired_server_cert - computed: true, optional: true, required: false
  private _expiredServerCert?: string; 
  public get expiredServerCert() {
    return this.getStringAttribute('expired_server_cert');
  }
  public set expiredServerCert(value: string) {
    this._expiredServerCert = value;
  }
  public resetExpiredServerCert() {
    this._expiredServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredServerCertInput() {
    return this._expiredServerCert;
  }

  // invalid_server_cert - computed: false, optional: true, required: false
  private _invalidServerCert?: string; 
  public get invalidServerCert() {
    return this.getStringAttribute('invalid_server_cert');
  }
  public set invalidServerCert(value: string) {
    this._invalidServerCert = value;
  }
  public resetInvalidServerCert() {
    this._invalidServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidServerCertInput() {
    return this._invalidServerCert;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // revoked_server_cert - computed: true, optional: true, required: false
  private _revokedServerCert?: string; 
  public get revokedServerCert() {
    return this.getStringAttribute('revoked_server_cert');
  }
  public set revokedServerCert(value: string) {
    this._revokedServerCert = value;
  }
  public resetRevokedServerCert() {
    this._revokedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedServerCertInput() {
    return this._revokedServerCert;
  }

  // sni_server_cert_check - computed: true, optional: true, required: false
  private _sniServerCertCheck?: string; 
  public get sniServerCertCheck() {
    return this.getStringAttribute('sni_server_cert_check');
  }
  public set sniServerCertCheck(value: string) {
    this._sniServerCertCheck = value;
  }
  public resetSniServerCertCheck() {
    this._sniServerCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniServerCertCheckInput() {
    return this._sniServerCertCheck;
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

  // unsupported_ssl - computed: false, optional: true, required: false
  private _unsupportedSsl?: string; 
  public get unsupportedSsl() {
    return this.getStringAttribute('unsupported_ssl');
  }
  public set unsupportedSsl(value: string) {
    this._unsupportedSsl = value;
  }
  public resetUnsupportedSsl() {
    this._unsupportedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslInput() {
    return this._unsupportedSsl;
  }

  // unsupported_ssl_cipher - computed: true, optional: true, required: false
  private _unsupportedSslCipher?: string; 
  public get unsupportedSslCipher() {
    return this.getStringAttribute('unsupported_ssl_cipher');
  }
  public set unsupportedSslCipher(value: string) {
    this._unsupportedSslCipher = value;
  }
  public resetUnsupportedSslCipher() {
    this._unsupportedSslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslCipherInput() {
    return this._unsupportedSslCipher;
  }

  // unsupported_ssl_negotiation - computed: true, optional: true, required: false
  private _unsupportedSslNegotiation?: string; 
  public get unsupportedSslNegotiation() {
    return this.getStringAttribute('unsupported_ssl_negotiation');
  }
  public set unsupportedSslNegotiation(value: string) {
    this._unsupportedSslNegotiation = value;
  }
  public resetUnsupportedSslNegotiation() {
    this._unsupportedSslNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslNegotiationInput() {
    return this._unsupportedSslNegotiation;
  }

  // unsupported_ssl_version - computed: true, optional: true, required: false
  private _unsupportedSslVersion?: string; 
  public get unsupportedSslVersion() {
    return this.getStringAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: string) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // untrusted_server_cert - computed: true, optional: true, required: false
  private _untrustedServerCert?: string; 
  public get untrustedServerCert() {
    return this.getStringAttribute('untrusted_server_cert');
  }
  public set untrustedServerCert(value: string) {
    this._untrustedServerCert = value;
  }
  public resetUntrustedServerCert() {
    this._untrustedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedServerCertInput() {
    return this._untrustedServerCert;
  }
}
export interface FirewallSslsshprofileSsh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#inspect_all FirewallSslsshprofile#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ports FirewallSslsshprofile#ports}
  */
  readonly ports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#proxy_after_tcp_handshake FirewallSslsshprofile#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssh_algorithm FirewallSslsshprofile#ssh_algorithm}
  */
  readonly sshAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssh_policy_check FirewallSslsshprofile#ssh_policy_check}
  */
  readonly sshPolicyCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssh_tun_policy_check FirewallSslsshprofile#ssh_tun_policy_check}
  */
  readonly sshTunPolicyCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#status FirewallSslsshprofile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_version FirewallSslsshprofile#unsupported_version}
  */
  readonly unsupportedVersion?: string;
}

export function firewallSslsshprofileSshToTerraform(struct?: FirewallSslsshprofileSshOutputReference | FirewallSslsshprofileSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    ports: cdktf.stringToTerraform(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    ssh_algorithm: cdktf.stringToTerraform(struct!.sshAlgorithm),
    ssh_policy_check: cdktf.stringToTerraform(struct!.sshPolicyCheck),
    ssh_tun_policy_check: cdktf.stringToTerraform(struct!.sshTunPolicyCheck),
    status: cdktf.stringToTerraform(struct!.status),
    unsupported_version: cdktf.stringToTerraform(struct!.unsupportedVersion),
  }
}


export function firewallSslsshprofileSshToHclTerraform(struct?: FirewallSslsshprofileSshOutputReference | FirewallSslsshprofileSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sshAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_policy_check: {
      value: cdktf.stringToHclTerraform(struct!.sshPolicyCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_tun_policy_check: {
      value: cdktf.stringToHclTerraform(struct!.sshTunPolicyCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_version: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofileSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallSslsshprofileSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._sshAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAlgorithm = this._sshAlgorithm;
    }
    if (this._sshPolicyCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPolicyCheck = this._sshPolicyCheck;
    }
    if (this._sshTunPolicyCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshTunPolicyCheck = this._sshTunPolicyCheck;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._unsupportedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedVersion = this._unsupportedVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofileSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectAll = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._sshAlgorithm = undefined;
      this._sshPolicyCheck = undefined;
      this._sshTunPolicyCheck = undefined;
      this._status = undefined;
      this._unsupportedVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectAll = value.inspectAll;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._sshAlgorithm = value.sshAlgorithm;
      this._sshPolicyCheck = value.sshPolicyCheck;
      this._sshTunPolicyCheck = value.sshTunPolicyCheck;
      this._status = value.status;
      this._unsupportedVersion = value.unsupportedVersion;
    }
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // ssh_algorithm - computed: true, optional: true, required: false
  private _sshAlgorithm?: string; 
  public get sshAlgorithm() {
    return this.getStringAttribute('ssh_algorithm');
  }
  public set sshAlgorithm(value: string) {
    this._sshAlgorithm = value;
  }
  public resetSshAlgorithm() {
    this._sshAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAlgorithmInput() {
    return this._sshAlgorithm;
  }

  // ssh_policy_check - computed: false, optional: true, required: false
  private _sshPolicyCheck?: string; 
  public get sshPolicyCheck() {
    return this.getStringAttribute('ssh_policy_check');
  }
  public set sshPolicyCheck(value: string) {
    this._sshPolicyCheck = value;
  }
  public resetSshPolicyCheck() {
    this._sshPolicyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPolicyCheckInput() {
    return this._sshPolicyCheck;
  }

  // ssh_tun_policy_check - computed: true, optional: true, required: false
  private _sshTunPolicyCheck?: string; 
  public get sshTunPolicyCheck() {
    return this.getStringAttribute('ssh_tun_policy_check');
  }
  public set sshTunPolicyCheck(value: string) {
    this._sshTunPolicyCheck = value;
  }
  public resetSshTunPolicyCheck() {
    this._sshTunPolicyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTunPolicyCheckInput() {
    return this._sshTunPolicyCheck;
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

  // unsupported_version - computed: true, optional: true, required: false
  private _unsupportedVersion?: string; 
  public get unsupportedVersion() {
    return this.getStringAttribute('unsupported_version');
  }
  public set unsupportedVersion(value: string) {
    this._unsupportedVersion = value;
  }
  public resetUnsupportedVersion() {
    this._unsupportedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedVersionInput() {
    return this._unsupportedVersion;
  }
}
export interface FirewallSslsshprofileSsl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_probe_failure FirewallSslsshprofile#cert_probe_failure}
  */
  readonly certProbeFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_failure FirewallSslsshprofile#cert_validation_failure}
  */
  readonly certValidationFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#cert_validation_timeout FirewallSslsshprofile#cert_validation_timeout}
  */
  readonly certValidationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_cert_request FirewallSslsshprofile#client_cert_request}
  */
  readonly clientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#client_certificate FirewallSslsshprofile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#encrypted_client_hello FirewallSslsshprofile#encrypted_client_hello}
  */
  readonly encryptedClientHello?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#expired_server_cert FirewallSslsshprofile#expired_server_cert}
  */
  readonly expiredServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#inspect_all FirewallSslsshprofile#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#invalid_server_cert FirewallSslsshprofile#invalid_server_cert}
  */
  readonly invalidServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#min_allowed_ssl_version FirewallSslsshprofile#min_allowed_ssl_version}
  */
  readonly minAllowedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#revoked_server_cert FirewallSslsshprofile#revoked_server_cert}
  */
  readonly revokedServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#sni_server_cert_check FirewallSslsshprofile#sni_server_cert_check}
  */
  readonly sniServerCertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl FirewallSslsshprofile#unsupported_ssl}
  */
  readonly unsupportedSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_cipher FirewallSslsshprofile#unsupported_ssl_cipher}
  */
  readonly unsupportedSslCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_negotiation FirewallSslsshprofile#unsupported_ssl_negotiation}
  */
  readonly unsupportedSslNegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#unsupported_ssl_version FirewallSslsshprofile#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#untrusted_server_cert FirewallSslsshprofile#untrusted_server_cert}
  */
  readonly untrustedServerCert?: string;
}

export function firewallSslsshprofileSslToTerraform(struct?: FirewallSslsshprofileSslOutputReference | FirewallSslsshprofileSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_probe_failure: cdktf.stringToTerraform(struct!.certProbeFailure),
    cert_validation_failure: cdktf.stringToTerraform(struct!.certValidationFailure),
    cert_validation_timeout: cdktf.stringToTerraform(struct!.certValidationTimeout),
    client_cert_request: cdktf.stringToTerraform(struct!.clientCertRequest),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    encrypted_client_hello: cdktf.stringToTerraform(struct!.encryptedClientHello),
    expired_server_cert: cdktf.stringToTerraform(struct!.expiredServerCert),
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    invalid_server_cert: cdktf.stringToTerraform(struct!.invalidServerCert),
    min_allowed_ssl_version: cdktf.stringToTerraform(struct!.minAllowedSslVersion),
    revoked_server_cert: cdktf.stringToTerraform(struct!.revokedServerCert),
    sni_server_cert_check: cdktf.stringToTerraform(struct!.sniServerCertCheck),
    unsupported_ssl: cdktf.stringToTerraform(struct!.unsupportedSsl),
    unsupported_ssl_cipher: cdktf.stringToTerraform(struct!.unsupportedSslCipher),
    unsupported_ssl_negotiation: cdktf.stringToTerraform(struct!.unsupportedSslNegotiation),
    unsupported_ssl_version: cdktf.stringToTerraform(struct!.unsupportedSslVersion),
    untrusted_server_cert: cdktf.stringToTerraform(struct!.untrustedServerCert),
  }
}


export function firewallSslsshprofileSslToHclTerraform(struct?: FirewallSslsshprofileSslOutputReference | FirewallSslsshprofileSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_probe_failure: {
      value: cdktf.stringToHclTerraform(struct!.certProbeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_validation_failure: {
      value: cdktf.stringToHclTerraform(struct!.certValidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_validation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.certValidationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.clientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_client_hello: {
      value: cdktf.stringToHclTerraform(struct!.encryptedClientHello),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.expiredServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.invalidServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_allowed_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.minAllowedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revoked_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.revokedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_server_cert_check: {
      value: cdktf.stringToHclTerraform(struct!.sniServerCertCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_cipher: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_negotiation: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untrusted_server_cert: {
      value: cdktf.stringToHclTerraform(struct!.untrustedServerCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofileSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallSslsshprofileSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certProbeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.certProbeFailure = this._certProbeFailure;
    }
    if (this._certValidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationFailure = this._certValidationFailure;
    }
    if (this._certValidationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidationTimeout = this._certValidationTimeout;
    }
    if (this._clientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertRequest = this._clientCertRequest;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._encryptedClientHello !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedClientHello = this._encryptedClientHello;
    }
    if (this._expiredServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredServerCert = this._expiredServerCert;
    }
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._invalidServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidServerCert = this._invalidServerCert;
    }
    if (this._minAllowedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAllowedSslVersion = this._minAllowedSslVersion;
    }
    if (this._revokedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedServerCert = this._revokedServerCert;
    }
    if (this._sniServerCertCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniServerCertCheck = this._sniServerCertCheck;
    }
    if (this._unsupportedSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSsl = this._unsupportedSsl;
    }
    if (this._unsupportedSslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslCipher = this._unsupportedSslCipher;
    }
    if (this._unsupportedSslNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslNegotiation = this._unsupportedSslNegotiation;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._untrustedServerCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedServerCert = this._untrustedServerCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofileSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certProbeFailure = undefined;
      this._certValidationFailure = undefined;
      this._certValidationTimeout = undefined;
      this._clientCertRequest = undefined;
      this._clientCertificate = undefined;
      this._encryptedClientHello = undefined;
      this._expiredServerCert = undefined;
      this._inspectAll = undefined;
      this._invalidServerCert = undefined;
      this._minAllowedSslVersion = undefined;
      this._revokedServerCert = undefined;
      this._sniServerCertCheck = undefined;
      this._unsupportedSsl = undefined;
      this._unsupportedSslCipher = undefined;
      this._unsupportedSslNegotiation = undefined;
      this._unsupportedSslVersion = undefined;
      this._untrustedServerCert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certProbeFailure = value.certProbeFailure;
      this._certValidationFailure = value.certValidationFailure;
      this._certValidationTimeout = value.certValidationTimeout;
      this._clientCertRequest = value.clientCertRequest;
      this._clientCertificate = value.clientCertificate;
      this._encryptedClientHello = value.encryptedClientHello;
      this._expiredServerCert = value.expiredServerCert;
      this._inspectAll = value.inspectAll;
      this._invalidServerCert = value.invalidServerCert;
      this._minAllowedSslVersion = value.minAllowedSslVersion;
      this._revokedServerCert = value.revokedServerCert;
      this._sniServerCertCheck = value.sniServerCertCheck;
      this._unsupportedSsl = value.unsupportedSsl;
      this._unsupportedSslCipher = value.unsupportedSslCipher;
      this._unsupportedSslNegotiation = value.unsupportedSslNegotiation;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._untrustedServerCert = value.untrustedServerCert;
    }
  }

  // cert_probe_failure - computed: true, optional: true, required: false
  private _certProbeFailure?: string; 
  public get certProbeFailure() {
    return this.getStringAttribute('cert_probe_failure');
  }
  public set certProbeFailure(value: string) {
    this._certProbeFailure = value;
  }
  public resetCertProbeFailure() {
    this._certProbeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certProbeFailureInput() {
    return this._certProbeFailure;
  }

  // cert_validation_failure - computed: true, optional: true, required: false
  private _certValidationFailure?: string; 
  public get certValidationFailure() {
    return this.getStringAttribute('cert_validation_failure');
  }
  public set certValidationFailure(value: string) {
    this._certValidationFailure = value;
  }
  public resetCertValidationFailure() {
    this._certValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationFailureInput() {
    return this._certValidationFailure;
  }

  // cert_validation_timeout - computed: true, optional: true, required: false
  private _certValidationTimeout?: string; 
  public get certValidationTimeout() {
    return this.getStringAttribute('cert_validation_timeout');
  }
  public set certValidationTimeout(value: string) {
    this._certValidationTimeout = value;
  }
  public resetCertValidationTimeout() {
    this._certValidationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationTimeoutInput() {
    return this._certValidationTimeout;
  }

  // client_cert_request - computed: false, optional: true, required: false
  private _clientCertRequest?: string; 
  public get clientCertRequest() {
    return this.getStringAttribute('client_cert_request');
  }
  public set clientCertRequest(value: string) {
    this._clientCertRequest = value;
  }
  public resetClientCertRequest() {
    this._clientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertRequestInput() {
    return this._clientCertRequest;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // encrypted_client_hello - computed: true, optional: true, required: false
  private _encryptedClientHello?: string; 
  public get encryptedClientHello() {
    return this.getStringAttribute('encrypted_client_hello');
  }
  public set encryptedClientHello(value: string) {
    this._encryptedClientHello = value;
  }
  public resetEncryptedClientHello() {
    this._encryptedClientHello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedClientHelloInput() {
    return this._encryptedClientHello;
  }

  // expired_server_cert - computed: true, optional: true, required: false
  private _expiredServerCert?: string; 
  public get expiredServerCert() {
    return this.getStringAttribute('expired_server_cert');
  }
  public set expiredServerCert(value: string) {
    this._expiredServerCert = value;
  }
  public resetExpiredServerCert() {
    this._expiredServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredServerCertInput() {
    return this._expiredServerCert;
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
  }

  // invalid_server_cert - computed: false, optional: true, required: false
  private _invalidServerCert?: string; 
  public get invalidServerCert() {
    return this.getStringAttribute('invalid_server_cert');
  }
  public set invalidServerCert(value: string) {
    this._invalidServerCert = value;
  }
  public resetInvalidServerCert() {
    this._invalidServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidServerCertInput() {
    return this._invalidServerCert;
  }

  // min_allowed_ssl_version - computed: true, optional: true, required: false
  private _minAllowedSslVersion?: string; 
  public get minAllowedSslVersion() {
    return this.getStringAttribute('min_allowed_ssl_version');
  }
  public set minAllowedSslVersion(value: string) {
    this._minAllowedSslVersion = value;
  }
  public resetMinAllowedSslVersion() {
    this._minAllowedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAllowedSslVersionInput() {
    return this._minAllowedSslVersion;
  }

  // revoked_server_cert - computed: true, optional: true, required: false
  private _revokedServerCert?: string; 
  public get revokedServerCert() {
    return this.getStringAttribute('revoked_server_cert');
  }
  public set revokedServerCert(value: string) {
    this._revokedServerCert = value;
  }
  public resetRevokedServerCert() {
    this._revokedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedServerCertInput() {
    return this._revokedServerCert;
  }

  // sni_server_cert_check - computed: true, optional: true, required: false
  private _sniServerCertCheck?: string; 
  public get sniServerCertCheck() {
    return this.getStringAttribute('sni_server_cert_check');
  }
  public set sniServerCertCheck(value: string) {
    this._sniServerCertCheck = value;
  }
  public resetSniServerCertCheck() {
    this._sniServerCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniServerCertCheckInput() {
    return this._sniServerCertCheck;
  }

  // unsupported_ssl - computed: false, optional: true, required: false
  private _unsupportedSsl?: string; 
  public get unsupportedSsl() {
    return this.getStringAttribute('unsupported_ssl');
  }
  public set unsupportedSsl(value: string) {
    this._unsupportedSsl = value;
  }
  public resetUnsupportedSsl() {
    this._unsupportedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslInput() {
    return this._unsupportedSsl;
  }

  // unsupported_ssl_cipher - computed: true, optional: true, required: false
  private _unsupportedSslCipher?: string; 
  public get unsupportedSslCipher() {
    return this.getStringAttribute('unsupported_ssl_cipher');
  }
  public set unsupportedSslCipher(value: string) {
    this._unsupportedSslCipher = value;
  }
  public resetUnsupportedSslCipher() {
    this._unsupportedSslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslCipherInput() {
    return this._unsupportedSslCipher;
  }

  // unsupported_ssl_negotiation - computed: true, optional: true, required: false
  private _unsupportedSslNegotiation?: string; 
  public get unsupportedSslNegotiation() {
    return this.getStringAttribute('unsupported_ssl_negotiation');
  }
  public set unsupportedSslNegotiation(value: string) {
    this._unsupportedSslNegotiation = value;
  }
  public resetUnsupportedSslNegotiation() {
    this._unsupportedSslNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslNegotiationInput() {
    return this._unsupportedSslNegotiation;
  }

  // unsupported_ssl_version - computed: true, optional: true, required: false
  private _unsupportedSslVersion?: string; 
  public get unsupportedSslVersion() {
    return this.getStringAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: string) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // untrusted_server_cert - computed: true, optional: true, required: false
  private _untrustedServerCert?: string; 
  public get untrustedServerCert() {
    return this.getStringAttribute('untrusted_server_cert');
  }
  public set untrustedServerCert(value: string) {
    this._untrustedServerCert = value;
  }
  public resetUntrustedServerCert() {
    this._untrustedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedServerCertInput() {
    return this._untrustedServerCert;
  }
}
export interface FirewallSslsshprofileSslExempt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#address FirewallSslsshprofile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#address6 FirewallSslsshprofile#address6}
  */
  readonly address6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#fortiguard_category FirewallSslsshprofile#fortiguard_category}
  */
  readonly fortiguardCategory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#id FirewallSslsshprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#regex FirewallSslsshprofile#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#type FirewallSslsshprofile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#wildcard_fqdn FirewallSslsshprofile#wildcard_fqdn}
  */
  readonly wildcardFqdn?: string;
}

export function firewallSslsshprofileSslExemptToTerraform(struct?: FirewallSslsshprofileSslExempt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address6: cdktf.stringToTerraform(struct!.address6),
    fortiguard_category: cdktf.numberToTerraform(struct!.fortiguardCategory),
    id: cdktf.numberToTerraform(struct!.id),
    regex: cdktf.stringToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    wildcard_fqdn: cdktf.stringToTerraform(struct!.wildcardFqdn),
  }
}


export function firewallSslsshprofileSslExemptToHclTerraform(struct?: FirewallSslsshprofileSslExempt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address6: {
      value: cdktf.stringToHclTerraform(struct!.address6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiguard_category: {
      value: cdktf.numberToHclTerraform(struct!.fortiguardCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.wildcardFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofileSslExemptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallSslsshprofileSslExempt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._address6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address6 = this._address6;
    }
    if (this._fortiguardCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiguardCategory = this._fortiguardCategory;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wildcardFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardFqdn = this._wildcardFqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofileSslExempt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._address6 = undefined;
      this._fortiguardCategory = undefined;
      this._id = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._wildcardFqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._address6 = value.address6;
      this._fortiguardCategory = value.fortiguardCategory;
      this._id = value.id;
      this._regex = value.regex;
      this._type = value.type;
      this._wildcardFqdn = value.wildcardFqdn;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address6 - computed: false, optional: true, required: false
  private _address6?: string; 
  public get address6() {
    return this.getStringAttribute('address6');
  }
  public set address6(value: string) {
    this._address6 = value;
  }
  public resetAddress6() {
    this._address6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address6Input() {
    return this._address6;
  }

  // fortiguard_category - computed: false, optional: true, required: false
  private _fortiguardCategory?: number; 
  public get fortiguardCategory() {
    return this.getNumberAttribute('fortiguard_category');
  }
  public set fortiguardCategory(value: number) {
    this._fortiguardCategory = value;
  }
  public resetFortiguardCategory() {
    this._fortiguardCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardCategoryInput() {
    return this._fortiguardCategory;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wildcard_fqdn - computed: false, optional: true, required: false
  private _wildcardFqdn?: string; 
  public get wildcardFqdn() {
    return this.getStringAttribute('wildcard_fqdn');
  }
  public set wildcardFqdn(value: string) {
    this._wildcardFqdn = value;
  }
  public resetWildcardFqdn() {
    this._wildcardFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardFqdnInput() {
    return this._wildcardFqdn;
  }
}

export class FirewallSslsshprofileSslExemptList extends cdktf.ComplexList {
  public internalValue? : FirewallSslsshprofileSslExempt[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallSslsshprofileSslExemptOutputReference {
    return new FirewallSslsshprofileSslExemptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSslsshprofileSslServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ftps_client_cert_request FirewallSslsshprofile#ftps_client_cert_request}
  */
  readonly ftpsClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ftps_client_certificate FirewallSslsshprofile#ftps_client_certificate}
  */
  readonly ftpsClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#https_client_cert_request FirewallSslsshprofile#https_client_cert_request}
  */
  readonly httpsClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#https_client_certificate FirewallSslsshprofile#https_client_certificate}
  */
  readonly httpsClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#id FirewallSslsshprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#imaps_client_cert_request FirewallSslsshprofile#imaps_client_cert_request}
  */
  readonly imapsClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#imaps_client_certificate FirewallSslsshprofile#imaps_client_certificate}
  */
  readonly imapsClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ip FirewallSslsshprofile#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#pop3s_client_cert_request FirewallSslsshprofile#pop3s_client_cert_request}
  */
  readonly pop3SClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#pop3s_client_certificate FirewallSslsshprofile#pop3s_client_certificate}
  */
  readonly pop3SClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#smtps_client_cert_request FirewallSslsshprofile#smtps_client_cert_request}
  */
  readonly smtpsClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#smtps_client_certificate FirewallSslsshprofile#smtps_client_certificate}
  */
  readonly smtpsClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_other_client_cert_request FirewallSslsshprofile#ssl_other_client_cert_request}
  */
  readonly sslOtherClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#ssl_other_client_certificate FirewallSslsshprofile#ssl_other_client_certificate}
  */
  readonly sslOtherClientCertificate?: string;
}

export function firewallSslsshprofileSslServerToTerraform(struct?: FirewallSslsshprofileSslServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ftps_client_cert_request: cdktf.stringToTerraform(struct!.ftpsClientCertRequest),
    ftps_client_certificate: cdktf.stringToTerraform(struct!.ftpsClientCertificate),
    https_client_cert_request: cdktf.stringToTerraform(struct!.httpsClientCertRequest),
    https_client_certificate: cdktf.stringToTerraform(struct!.httpsClientCertificate),
    id: cdktf.numberToTerraform(struct!.id),
    imaps_client_cert_request: cdktf.stringToTerraform(struct!.imapsClientCertRequest),
    imaps_client_certificate: cdktf.stringToTerraform(struct!.imapsClientCertificate),
    ip: cdktf.stringToTerraform(struct!.ip),
    pop3s_client_cert_request: cdktf.stringToTerraform(struct!.pop3SClientCertRequest),
    pop3s_client_certificate: cdktf.stringToTerraform(struct!.pop3SClientCertificate),
    smtps_client_cert_request: cdktf.stringToTerraform(struct!.smtpsClientCertRequest),
    smtps_client_certificate: cdktf.stringToTerraform(struct!.smtpsClientCertificate),
    ssl_other_client_cert_request: cdktf.stringToTerraform(struct!.sslOtherClientCertRequest),
    ssl_other_client_certificate: cdktf.stringToTerraform(struct!.sslOtherClientCertificate),
  }
}


export function firewallSslsshprofileSslServerToHclTerraform(struct?: FirewallSslsshprofileSslServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ftps_client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.ftpsClientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftps_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.ftpsClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.httpsClientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.httpsClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imaps_client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.imapsClientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imaps_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.imapsClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pop3s_client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.pop3SClientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pop3s_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.pop3SClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtps_client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.smtpsClientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtps_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.smtpsClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_other_client_cert_request: {
      value: cdktf.stringToHclTerraform(struct!.sslOtherClientCertRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_other_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslOtherClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSslsshprofileSslServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallSslsshprofileSslServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ftpsClientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpsClientCertRequest = this._ftpsClientCertRequest;
    }
    if (this._ftpsClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpsClientCertificate = this._ftpsClientCertificate;
    }
    if (this._httpsClientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsClientCertRequest = this._httpsClientCertRequest;
    }
    if (this._httpsClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsClientCertificate = this._httpsClientCertificate;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imapsClientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapsClientCertRequest = this._imapsClientCertRequest;
    }
    if (this._imapsClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapsClientCertificate = this._imapsClientCertificate;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._pop3SClientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3SClientCertRequest = this._pop3SClientCertRequest;
    }
    if (this._pop3SClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3SClientCertificate = this._pop3SClientCertificate;
    }
    if (this._smtpsClientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpsClientCertRequest = this._smtpsClientCertRequest;
    }
    if (this._smtpsClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpsClientCertificate = this._smtpsClientCertificate;
    }
    if (this._sslOtherClientCertRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOtherClientCertRequest = this._sslOtherClientCertRequest;
    }
    if (this._sslOtherClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOtherClientCertificate = this._sslOtherClientCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSslsshprofileSslServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ftpsClientCertRequest = undefined;
      this._ftpsClientCertificate = undefined;
      this._httpsClientCertRequest = undefined;
      this._httpsClientCertificate = undefined;
      this._id = undefined;
      this._imapsClientCertRequest = undefined;
      this._imapsClientCertificate = undefined;
      this._ip = undefined;
      this._pop3SClientCertRequest = undefined;
      this._pop3SClientCertificate = undefined;
      this._smtpsClientCertRequest = undefined;
      this._smtpsClientCertificate = undefined;
      this._sslOtherClientCertRequest = undefined;
      this._sslOtherClientCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ftpsClientCertRequest = value.ftpsClientCertRequest;
      this._ftpsClientCertificate = value.ftpsClientCertificate;
      this._httpsClientCertRequest = value.httpsClientCertRequest;
      this._httpsClientCertificate = value.httpsClientCertificate;
      this._id = value.id;
      this._imapsClientCertRequest = value.imapsClientCertRequest;
      this._imapsClientCertificate = value.imapsClientCertificate;
      this._ip = value.ip;
      this._pop3SClientCertRequest = value.pop3SClientCertRequest;
      this._pop3SClientCertificate = value.pop3SClientCertificate;
      this._smtpsClientCertRequest = value.smtpsClientCertRequest;
      this._smtpsClientCertificate = value.smtpsClientCertificate;
      this._sslOtherClientCertRequest = value.sslOtherClientCertRequest;
      this._sslOtherClientCertificate = value.sslOtherClientCertificate;
    }
  }

  // ftps_client_cert_request - computed: false, optional: true, required: false
  private _ftpsClientCertRequest?: string; 
  public get ftpsClientCertRequest() {
    return this.getStringAttribute('ftps_client_cert_request');
  }
  public set ftpsClientCertRequest(value: string) {
    this._ftpsClientCertRequest = value;
  }
  public resetFtpsClientCertRequest() {
    this._ftpsClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsClientCertRequestInput() {
    return this._ftpsClientCertRequest;
  }

  // ftps_client_certificate - computed: true, optional: true, required: false
  private _ftpsClientCertificate?: string; 
  public get ftpsClientCertificate() {
    return this.getStringAttribute('ftps_client_certificate');
  }
  public set ftpsClientCertificate(value: string) {
    this._ftpsClientCertificate = value;
  }
  public resetFtpsClientCertificate() {
    this._ftpsClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsClientCertificateInput() {
    return this._ftpsClientCertificate;
  }

  // https_client_cert_request - computed: false, optional: true, required: false
  private _httpsClientCertRequest?: string; 
  public get httpsClientCertRequest() {
    return this.getStringAttribute('https_client_cert_request');
  }
  public set httpsClientCertRequest(value: string) {
    this._httpsClientCertRequest = value;
  }
  public resetHttpsClientCertRequest() {
    this._httpsClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsClientCertRequestInput() {
    return this._httpsClientCertRequest;
  }

  // https_client_certificate - computed: true, optional: true, required: false
  private _httpsClientCertificate?: string; 
  public get httpsClientCertificate() {
    return this.getStringAttribute('https_client_certificate');
  }
  public set httpsClientCertificate(value: string) {
    this._httpsClientCertificate = value;
  }
  public resetHttpsClientCertificate() {
    this._httpsClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsClientCertificateInput() {
    return this._httpsClientCertificate;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // imaps_client_cert_request - computed: false, optional: true, required: false
  private _imapsClientCertRequest?: string; 
  public get imapsClientCertRequest() {
    return this.getStringAttribute('imaps_client_cert_request');
  }
  public set imapsClientCertRequest(value: string) {
    this._imapsClientCertRequest = value;
  }
  public resetImapsClientCertRequest() {
    this._imapsClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapsClientCertRequestInput() {
    return this._imapsClientCertRequest;
  }

  // imaps_client_certificate - computed: true, optional: true, required: false
  private _imapsClientCertificate?: string; 
  public get imapsClientCertificate() {
    return this.getStringAttribute('imaps_client_certificate');
  }
  public set imapsClientCertificate(value: string) {
    this._imapsClientCertificate = value;
  }
  public resetImapsClientCertificate() {
    this._imapsClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapsClientCertificateInput() {
    return this._imapsClientCertificate;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // pop3s_client_cert_request - computed: false, optional: true, required: false
  private _pop3SClientCertRequest?: string; 
  public get pop3SClientCertRequest() {
    return this.getStringAttribute('pop3s_client_cert_request');
  }
  public set pop3SClientCertRequest(value: string) {
    this._pop3SClientCertRequest = value;
  }
  public resetPop3SClientCertRequest() {
    this._pop3SClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3SClientCertRequestInput() {
    return this._pop3SClientCertRequest;
  }

  // pop3s_client_certificate - computed: true, optional: true, required: false
  private _pop3SClientCertificate?: string; 
  public get pop3SClientCertificate() {
    return this.getStringAttribute('pop3s_client_certificate');
  }
  public set pop3SClientCertificate(value: string) {
    this._pop3SClientCertificate = value;
  }
  public resetPop3SClientCertificate() {
    this._pop3SClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3SClientCertificateInput() {
    return this._pop3SClientCertificate;
  }

  // smtps_client_cert_request - computed: false, optional: true, required: false
  private _smtpsClientCertRequest?: string; 
  public get smtpsClientCertRequest() {
    return this.getStringAttribute('smtps_client_cert_request');
  }
  public set smtpsClientCertRequest(value: string) {
    this._smtpsClientCertRequest = value;
  }
  public resetSmtpsClientCertRequest() {
    this._smtpsClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpsClientCertRequestInput() {
    return this._smtpsClientCertRequest;
  }

  // smtps_client_certificate - computed: true, optional: true, required: false
  private _smtpsClientCertificate?: string; 
  public get smtpsClientCertificate() {
    return this.getStringAttribute('smtps_client_certificate');
  }
  public set smtpsClientCertificate(value: string) {
    this._smtpsClientCertificate = value;
  }
  public resetSmtpsClientCertificate() {
    this._smtpsClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpsClientCertificateInput() {
    return this._smtpsClientCertificate;
  }

  // ssl_other_client_cert_request - computed: false, optional: true, required: false
  private _sslOtherClientCertRequest?: string; 
  public get sslOtherClientCertRequest() {
    return this.getStringAttribute('ssl_other_client_cert_request');
  }
  public set sslOtherClientCertRequest(value: string) {
    this._sslOtherClientCertRequest = value;
  }
  public resetSslOtherClientCertRequest() {
    this._sslOtherClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOtherClientCertRequestInput() {
    return this._sslOtherClientCertRequest;
  }

  // ssl_other_client_certificate - computed: true, optional: true, required: false
  private _sslOtherClientCertificate?: string; 
  public get sslOtherClientCertificate() {
    return this.getStringAttribute('ssl_other_client_certificate');
  }
  public set sslOtherClientCertificate(value: string) {
    this._sslOtherClientCertificate = value;
  }
  public resetSslOtherClientCertificate() {
    this._sslOtherClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOtherClientCertificateInput() {
    return this._sslOtherClientCertificate;
  }
}

export class FirewallSslsshprofileSslServerList extends cdktf.ComplexList {
  public internalValue? : FirewallSslsshprofileSslServer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallSslsshprofileSslServerOutputReference {
    return new FirewallSslsshprofileSslServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile fortios_firewall_sslsshprofile}
*/
export class FirewallSslsshprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_sslsshprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallSslsshprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallSslsshprofile to import
  * @param importFromId The id of the existing FirewallSslsshprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallSslsshprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_sslsshprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sslsshprofile fortios_firewall_sslsshprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallSslsshprofileConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallSslsshprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_sslsshprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowlist = config.allowlist;
    this._blockBlacklistedCertificates = config.blockBlacklistedCertificates;
    this._blockBlocklistedCertificates = config.blockBlocklistedCertificates;
    this._caname = config.caname;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._mapiOverHttps = config.mapiOverHttps;
    this._name = config.name;
    this._rpcOverHttps = config.rpcOverHttps;
    this._serverCert = config.serverCert;
    this._serverCertMode = config.serverCertMode;
    this._sslAnomaliesLog = config.sslAnomaliesLog;
    this._sslAnomalyLog = config.sslAnomalyLog;
    this._sslExemptionIpRating = config.sslExemptionIpRating;
    this._sslExemptionLog = config.sslExemptionLog;
    this._sslExemptionsLog = config.sslExemptionsLog;
    this._sslHandshakeLog = config.sslHandshakeLog;
    this._sslNegotiationLog = config.sslNegotiationLog;
    this._sslServerCertLog = config.sslServerCertLog;
    this._supportedAlpn = config.supportedAlpn;
    this._untrustedCaname = config.untrustedCaname;
    this._useSslServer = config.useSslServer;
    this._vdomparam = config.vdomparam;
    this._whitelist = config.whitelist;
    this._dot.internalValue = config.dot;
    this._echOuterSni.internalValue = config.echOuterSni;
    this._ftps.internalValue = config.ftps;
    this._https.internalValue = config.https;
    this._imaps.internalValue = config.imaps;
    this._pop3S.internalValue = config.pop3S;
    this._smtps.internalValue = config.smtps;
    this._ssh.internalValue = config.ssh;
    this._ssl.internalValue = config.ssl;
    this._sslExempt.internalValue = config.sslExempt;
    this._sslServer.internalValue = config.sslServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowlist - computed: true, optional: true, required: false
  private _allowlist?: string; 
  public get allowlist() {
    return this.getStringAttribute('allowlist');
  }
  public set allowlist(value: string) {
    this._allowlist = value;
  }
  public resetAllowlist() {
    this._allowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist;
  }

  // block_blacklisted_certificates - computed: true, optional: true, required: false
  private _blockBlacklistedCertificates?: string; 
  public get blockBlacklistedCertificates() {
    return this.getStringAttribute('block_blacklisted_certificates');
  }
  public set blockBlacklistedCertificates(value: string) {
    this._blockBlacklistedCertificates = value;
  }
  public resetBlockBlacklistedCertificates() {
    this._blockBlacklistedCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockBlacklistedCertificatesInput() {
    return this._blockBlacklistedCertificates;
  }

  // block_blocklisted_certificates - computed: true, optional: true, required: false
  private _blockBlocklistedCertificates?: string; 
  public get blockBlocklistedCertificates() {
    return this.getStringAttribute('block_blocklisted_certificates');
  }
  public set blockBlocklistedCertificates(value: string) {
    this._blockBlocklistedCertificates = value;
  }
  public resetBlockBlocklistedCertificates() {
    this._blockBlocklistedCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockBlocklistedCertificatesInput() {
    return this._blockBlocklistedCertificates;
  }

  // caname - computed: true, optional: true, required: false
  private _caname?: string; 
  public get caname() {
    return this.getStringAttribute('caname');
  }
  public set caname(value: string) {
    this._caname = value;
  }
  public resetCaname() {
    this._caname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canameInput() {
    return this._caname;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // mapi_over_https - computed: true, optional: true, required: false
  private _mapiOverHttps?: string; 
  public get mapiOverHttps() {
    return this.getStringAttribute('mapi_over_https');
  }
  public set mapiOverHttps(value: string) {
    this._mapiOverHttps = value;
  }
  public resetMapiOverHttps() {
    this._mapiOverHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapiOverHttpsInput() {
    return this._mapiOverHttps;
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

  // rpc_over_https - computed: true, optional: true, required: false
  private _rpcOverHttps?: string; 
  public get rpcOverHttps() {
    return this.getStringAttribute('rpc_over_https');
  }
  public set rpcOverHttps(value: string) {
    this._rpcOverHttps = value;
  }
  public resetRpcOverHttps() {
    this._rpcOverHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcOverHttpsInput() {
    return this._rpcOverHttps;
  }

  // server_cert - computed: true, optional: true, required: false
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  public resetServerCert() {
    this._serverCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }

  // server_cert_mode - computed: true, optional: true, required: false
  private _serverCertMode?: string; 
  public get serverCertMode() {
    return this.getStringAttribute('server_cert_mode');
  }
  public set serverCertMode(value: string) {
    this._serverCertMode = value;
  }
  public resetServerCertMode() {
    this._serverCertMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertModeInput() {
    return this._serverCertMode;
  }

  // ssl_anomalies_log - computed: true, optional: true, required: false
  private _sslAnomaliesLog?: string; 
  public get sslAnomaliesLog() {
    return this.getStringAttribute('ssl_anomalies_log');
  }
  public set sslAnomaliesLog(value: string) {
    this._sslAnomaliesLog = value;
  }
  public resetSslAnomaliesLog() {
    this._sslAnomaliesLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAnomaliesLogInput() {
    return this._sslAnomaliesLog;
  }

  // ssl_anomaly_log - computed: true, optional: true, required: false
  private _sslAnomalyLog?: string; 
  public get sslAnomalyLog() {
    return this.getStringAttribute('ssl_anomaly_log');
  }
  public set sslAnomalyLog(value: string) {
    this._sslAnomalyLog = value;
  }
  public resetSslAnomalyLog() {
    this._sslAnomalyLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAnomalyLogInput() {
    return this._sslAnomalyLog;
  }

  // ssl_exemption_ip_rating - computed: true, optional: true, required: false
  private _sslExemptionIpRating?: string; 
  public get sslExemptionIpRating() {
    return this.getStringAttribute('ssl_exemption_ip_rating');
  }
  public set sslExemptionIpRating(value: string) {
    this._sslExemptionIpRating = value;
  }
  public resetSslExemptionIpRating() {
    this._sslExemptionIpRating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExemptionIpRatingInput() {
    return this._sslExemptionIpRating;
  }

  // ssl_exemption_log - computed: true, optional: true, required: false
  private _sslExemptionLog?: string; 
  public get sslExemptionLog() {
    return this.getStringAttribute('ssl_exemption_log');
  }
  public set sslExemptionLog(value: string) {
    this._sslExemptionLog = value;
  }
  public resetSslExemptionLog() {
    this._sslExemptionLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExemptionLogInput() {
    return this._sslExemptionLog;
  }

  // ssl_exemptions_log - computed: true, optional: true, required: false
  private _sslExemptionsLog?: string; 
  public get sslExemptionsLog() {
    return this.getStringAttribute('ssl_exemptions_log');
  }
  public set sslExemptionsLog(value: string) {
    this._sslExemptionsLog = value;
  }
  public resetSslExemptionsLog() {
    this._sslExemptionsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExemptionsLogInput() {
    return this._sslExemptionsLog;
  }

  // ssl_handshake_log - computed: true, optional: true, required: false
  private _sslHandshakeLog?: string; 
  public get sslHandshakeLog() {
    return this.getStringAttribute('ssl_handshake_log');
  }
  public set sslHandshakeLog(value: string) {
    this._sslHandshakeLog = value;
  }
  public resetSslHandshakeLog() {
    this._sslHandshakeLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHandshakeLogInput() {
    return this._sslHandshakeLog;
  }

  // ssl_negotiation_log - computed: true, optional: true, required: false
  private _sslNegotiationLog?: string; 
  public get sslNegotiationLog() {
    return this.getStringAttribute('ssl_negotiation_log');
  }
  public set sslNegotiationLog(value: string) {
    this._sslNegotiationLog = value;
  }
  public resetSslNegotiationLog() {
    this._sslNegotiationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslNegotiationLogInput() {
    return this._sslNegotiationLog;
  }

  // ssl_server_cert_log - computed: true, optional: true, required: false
  private _sslServerCertLog?: string; 
  public get sslServerCertLog() {
    return this.getStringAttribute('ssl_server_cert_log');
  }
  public set sslServerCertLog(value: string) {
    this._sslServerCertLog = value;
  }
  public resetSslServerCertLog() {
    this._sslServerCertLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerCertLogInput() {
    return this._sslServerCertLog;
  }

  // supported_alpn - computed: true, optional: true, required: false
  private _supportedAlpn?: string; 
  public get supportedAlpn() {
    return this.getStringAttribute('supported_alpn');
  }
  public set supportedAlpn(value: string) {
    this._supportedAlpn = value;
  }
  public resetSupportedAlpn() {
    this._supportedAlpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedAlpnInput() {
    return this._supportedAlpn;
  }

  // untrusted_caname - computed: true, optional: true, required: false
  private _untrustedCaname?: string; 
  public get untrustedCaname() {
    return this.getStringAttribute('untrusted_caname');
  }
  public set untrustedCaname(value: string) {
    this._untrustedCaname = value;
  }
  public resetUntrustedCaname() {
    this._untrustedCaname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedCanameInput() {
    return this._untrustedCaname;
  }

  // use_ssl_server - computed: true, optional: true, required: false
  private _useSslServer?: string; 
  public get useSslServer() {
    return this.getStringAttribute('use_ssl_server');
  }
  public set useSslServer(value: string) {
    this._useSslServer = value;
  }
  public resetUseSslServer() {
    this._useSslServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslServerInput() {
    return this._useSslServer;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // whitelist - computed: true, optional: true, required: false
  private _whitelist?: string; 
  public get whitelist() {
    return this.getStringAttribute('whitelist');
  }
  public set whitelist(value: string) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }

  // dot - computed: false, optional: true, required: false
  private _dot = new FirewallSslsshprofileDotOutputReference(this, "dot");
  public get dot() {
    return this._dot;
  }
  public putDot(value: FirewallSslsshprofileDot) {
    this._dot.internalValue = value;
  }
  public resetDot() {
    this._dot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotInput() {
    return this._dot.internalValue;
  }

  // ech_outer_sni - computed: false, optional: true, required: false
  private _echOuterSni = new FirewallSslsshprofileEchOuterSniList(this, "ech_outer_sni", false);
  public get echOuterSni() {
    return this._echOuterSni;
  }
  public putEchOuterSni(value: FirewallSslsshprofileEchOuterSni[] | cdktf.IResolvable) {
    this._echOuterSni.internalValue = value;
  }
  public resetEchOuterSni() {
    this._echOuterSni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echOuterSniInput() {
    return this._echOuterSni.internalValue;
  }

  // ftps - computed: false, optional: true, required: false
  private _ftps = new FirewallSslsshprofileFtpsOutputReference(this, "ftps");
  public get ftps() {
    return this._ftps;
  }
  public putFtps(value: FirewallSslsshprofileFtps) {
    this._ftps.internalValue = value;
  }
  public resetFtps() {
    this._ftps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsInput() {
    return this._ftps.internalValue;
  }

  // https - computed: false, optional: true, required: false
  private _https = new FirewallSslsshprofileHttpsOutputReference(this, "https");
  public get https() {
    return this._https;
  }
  public putHttps(value: FirewallSslsshprofileHttps) {
    this._https.internalValue = value;
  }
  public resetHttps() {
    this._https.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https.internalValue;
  }

  // imaps - computed: false, optional: true, required: false
  private _imaps = new FirewallSslsshprofileImapsOutputReference(this, "imaps");
  public get imaps() {
    return this._imaps;
  }
  public putImaps(value: FirewallSslsshprofileImaps) {
    this._imaps.internalValue = value;
  }
  public resetImaps() {
    this._imaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapsInput() {
    return this._imaps.internalValue;
  }

  // pop3s - computed: false, optional: true, required: false
  private _pop3S = new FirewallSslsshprofilePop3SOutputReference(this, "pop3s");
  public get pop3S() {
    return this._pop3S;
  }
  public putPop3S(value: FirewallSslsshprofilePop3S) {
    this._pop3S.internalValue = value;
  }
  public resetPop3S() {
    this._pop3S.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3SInput() {
    return this._pop3S.internalValue;
  }

  // smtps - computed: false, optional: true, required: false
  private _smtps = new FirewallSslsshprofileSmtpsOutputReference(this, "smtps");
  public get smtps() {
    return this._smtps;
  }
  public putSmtps(value: FirewallSslsshprofileSmtps) {
    this._smtps.internalValue = value;
  }
  public resetSmtps() {
    this._smtps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpsInput() {
    return this._smtps.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new FirewallSslsshprofileSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: FirewallSslsshprofileSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl = new FirewallSslsshprofileSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: FirewallSslsshprofileSsl) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }

  // ssl_exempt - computed: false, optional: true, required: false
  private _sslExempt = new FirewallSslsshprofileSslExemptList(this, "ssl_exempt", false);
  public get sslExempt() {
    return this._sslExempt;
  }
  public putSslExempt(value: FirewallSslsshprofileSslExempt[] | cdktf.IResolvable) {
    this._sslExempt.internalValue = value;
  }
  public resetSslExempt() {
    this._sslExempt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExemptInput() {
    return this._sslExempt.internalValue;
  }

  // ssl_server - computed: false, optional: true, required: false
  private _sslServer = new FirewallSslsshprofileSslServerList(this, "ssl_server", false);
  public get sslServer() {
    return this._sslServer;
  }
  public putSslServer(value: FirewallSslsshprofileSslServer[] | cdktf.IResolvable) {
    this._sslServer.internalValue = value;
  }
  public resetSslServer() {
    this._sslServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerInput() {
    return this._sslServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowlist: cdktf.stringToTerraform(this._allowlist),
      block_blacklisted_certificates: cdktf.stringToTerraform(this._blockBlacklistedCertificates),
      block_blocklisted_certificates: cdktf.stringToTerraform(this._blockBlocklistedCertificates),
      caname: cdktf.stringToTerraform(this._caname),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      mapi_over_https: cdktf.stringToTerraform(this._mapiOverHttps),
      name: cdktf.stringToTerraform(this._name),
      rpc_over_https: cdktf.stringToTerraform(this._rpcOverHttps),
      server_cert: cdktf.stringToTerraform(this._serverCert),
      server_cert_mode: cdktf.stringToTerraform(this._serverCertMode),
      ssl_anomalies_log: cdktf.stringToTerraform(this._sslAnomaliesLog),
      ssl_anomaly_log: cdktf.stringToTerraform(this._sslAnomalyLog),
      ssl_exemption_ip_rating: cdktf.stringToTerraform(this._sslExemptionIpRating),
      ssl_exemption_log: cdktf.stringToTerraform(this._sslExemptionLog),
      ssl_exemptions_log: cdktf.stringToTerraform(this._sslExemptionsLog),
      ssl_handshake_log: cdktf.stringToTerraform(this._sslHandshakeLog),
      ssl_negotiation_log: cdktf.stringToTerraform(this._sslNegotiationLog),
      ssl_server_cert_log: cdktf.stringToTerraform(this._sslServerCertLog),
      supported_alpn: cdktf.stringToTerraform(this._supportedAlpn),
      untrusted_caname: cdktf.stringToTerraform(this._untrustedCaname),
      use_ssl_server: cdktf.stringToTerraform(this._useSslServer),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      whitelist: cdktf.stringToTerraform(this._whitelist),
      dot: firewallSslsshprofileDotToTerraform(this._dot.internalValue),
      ech_outer_sni: cdktf.listMapper(firewallSslsshprofileEchOuterSniToTerraform, true)(this._echOuterSni.internalValue),
      ftps: firewallSslsshprofileFtpsToTerraform(this._ftps.internalValue),
      https: firewallSslsshprofileHttpsToTerraform(this._https.internalValue),
      imaps: firewallSslsshprofileImapsToTerraform(this._imaps.internalValue),
      pop3s: firewallSslsshprofilePop3SToTerraform(this._pop3S.internalValue),
      smtps: firewallSslsshprofileSmtpsToTerraform(this._smtps.internalValue),
      ssh: firewallSslsshprofileSshToTerraform(this._ssh.internalValue),
      ssl: firewallSslsshprofileSslToTerraform(this._ssl.internalValue),
      ssl_exempt: cdktf.listMapper(firewallSslsshprofileSslExemptToTerraform, true)(this._sslExempt.internalValue),
      ssl_server: cdktf.listMapper(firewallSslsshprofileSslServerToTerraform, true)(this._sslServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowlist: {
        value: cdktf.stringToHclTerraform(this._allowlist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_blacklisted_certificates: {
        value: cdktf.stringToHclTerraform(this._blockBlacklistedCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_blocklisted_certificates: {
        value: cdktf.stringToHclTerraform(this._blockBlocklistedCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caname: {
        value: cdktf.stringToHclTerraform(this._caname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      mapi_over_https: {
        value: cdktf.stringToHclTerraform(this._mapiOverHttps),
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
      rpc_over_https: {
        value: cdktf.stringToHclTerraform(this._rpcOverHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_cert: {
        value: cdktf.stringToHclTerraform(this._serverCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_cert_mode: {
        value: cdktf.stringToHclTerraform(this._serverCertMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_anomalies_log: {
        value: cdktf.stringToHclTerraform(this._sslAnomaliesLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_anomaly_log: {
        value: cdktf.stringToHclTerraform(this._sslAnomalyLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_exemption_ip_rating: {
        value: cdktf.stringToHclTerraform(this._sslExemptionIpRating),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_exemption_log: {
        value: cdktf.stringToHclTerraform(this._sslExemptionLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_exemptions_log: {
        value: cdktf.stringToHclTerraform(this._sslExemptionsLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_handshake_log: {
        value: cdktf.stringToHclTerraform(this._sslHandshakeLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_negotiation_log: {
        value: cdktf.stringToHclTerraform(this._sslNegotiationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_server_cert_log: {
        value: cdktf.stringToHclTerraform(this._sslServerCertLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_alpn: {
        value: cdktf.stringToHclTerraform(this._supportedAlpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untrusted_caname: {
        value: cdktf.stringToHclTerraform(this._untrustedCaname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ssl_server: {
        value: cdktf.stringToHclTerraform(this._useSslServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whitelist: {
        value: cdktf.stringToHclTerraform(this._whitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot: {
        value: firewallSslsshprofileDotToHclTerraform(this._dot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofileDotList",
      },
      ech_outer_sni: {
        value: cdktf.listMapperHcl(firewallSslsshprofileEchOuterSniToHclTerraform, true)(this._echOuterSni.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofileEchOuterSniList",
      },
      ftps: {
        value: firewallSslsshprofileFtpsToHclTerraform(this._ftps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofileFtpsList",
      },
      https: {
        value: firewallSslsshprofileHttpsToHclTerraform(this._https.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofileHttpsList",
      },
      imaps: {
        value: firewallSslsshprofileImapsToHclTerraform(this._imaps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofileImapsList",
      },
      pop3s: {
        value: firewallSslsshprofilePop3SToHclTerraform(this._pop3S.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofilePop3SList",
      },
      smtps: {
        value: firewallSslsshprofileSmtpsToHclTerraform(this._smtps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofileSmtpsList",
      },
      ssh: {
        value: firewallSslsshprofileSshToHclTerraform(this._ssh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofileSshList",
      },
      ssl: {
        value: firewallSslsshprofileSslToHclTerraform(this._ssl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofileSslList",
      },
      ssl_exempt: {
        value: cdktf.listMapperHcl(firewallSslsshprofileSslExemptToHclTerraform, true)(this._sslExempt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofileSslExemptList",
      },
      ssl_server: {
        value: cdktf.listMapperHcl(firewallSslsshprofileSslServerToHclTerraform, true)(this._sslServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSslsshprofileSslServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
