// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateServerSslConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'fatal': Log fatal alerts;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#alert_type SlbTemplateServerSsl#alert_type}
  */
  readonly alertType?: string;
  /**
  * Cipher Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#cipher_template SlbTemplateServerSsl#cipher_template}
  */
  readonly cipherTemplate?: string;
  /**
  * Send close notification when terminate connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#close_notify SlbTemplateServerSsl#close_notify}
  */
  readonly closeNotify?: number;
  /**
  * Lower TLS/SSL version can be downgraded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#dgversion SlbTemplateServerSsl#dgversion}
  */
  readonly dgversion?: number;
  /**
  * '1024': 1024; '1024-dsa': 1024-dsa; '2048': 2048;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#dh_type SlbTemplateServerSsl#dh_type}
  */
  readonly dhType?: string;
  /**
  * Enable TLS 1.3 early data (0-RTT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#early_data SlbTemplateServerSsl#early_data}
  */
  readonly earlyData?: number;
  /**
  * Enable SSLi FTP over TLS support at which port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#enable_ssli_ftp_alg SlbTemplateServerSsl#enable_ssli_ftp_alg}
  */
  readonly enableSsliFtpAlg?: number;
  /**
  * Enable TLS alert logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#enable_tls_alert_logging SlbTemplateServerSsl#enable_tls_alert_logging}
  */
  readonly enableTlsAlertLogging?: number;
  /**
  * Enable SSL forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#forward_proxy_enable SlbTemplateServerSsl#forward_proxy_enable}
  */
  readonly forwardProxyEnable?: number;
  /**
  * Enable SSL handshake logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#handshake_logging_enable SlbTemplateServerSsl#handshake_logging_enable}
  */
  readonly handshakeLoggingEnable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#id SlbTemplateServerSsl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#name SlbTemplateServerSsl#name}
  */
  readonly name: string;
  /**
  * Enable ocsp-stapling support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#ocsp_stapling SlbTemplateServerSsl#ocsp_stapling}
  */
  readonly ocspStapling?: number;
  /**
  * Disable SSL renegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#renegotiation_disable SlbTemplateServerSsl#renegotiation_disable}
  */
  readonly renegotiationDisable?: number;
  /**
  * Specify Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#server_name SlbTemplateServerSsl#server_name}
  */
  readonly serverName?: string;
  /**
  * Session Cache Size (Maximum cache size. Default value 0 (Session ID reuse disabled))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#session_cache_size SlbTemplateServerSsl#session_cache_size}
  */
  readonly sessionCacheSize?: number;
  /**
  * Session Cache Timeout (Timeout value, in seconds. Default no timeout.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#session_cache_timeout SlbTemplateServerSsl#session_cache_timeout}
  */
  readonly sessionCacheTimeout?: number;
  /**
  * Enable server side session ticket support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#session_ticket_enable SlbTemplateServerSsl#session_ticket_enable}
  */
  readonly sessionTicketEnable?: number;
  /**
  * Reference a cipher template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#shared_partition_cipher_template SlbTemplateServerSsl#shared_partition_cipher_template}
  */
  readonly sharedPartitionCipherTemplate?: number;
  /**
  * SSLi logging level, default is error logging only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#ssli_logging SlbTemplateServerSsl#ssli_logging}
  */
  readonly ssliLogging?: number;
  /**
  * 'disable': Disable all logging; 'all': enable all logging(error, info);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#sslilogging SlbTemplateServerSsl#sslilogging}
  */
  readonly sslilogging?: string;
  /**
  * Cipher Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#template_cipher_shared SlbTemplateServerSsl#template_cipher_shared}
  */
  readonly templateCipherShared?: string;
  /**
  * use client SNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#use_client_sni SlbTemplateServerSsl#use_client_sni}
  */
  readonly useClientSni?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#user_tag SlbTemplateServerSsl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#uuid SlbTemplateServerSsl#uuid}
  */
  readonly uuid?: string;
  /**
  * TLS/SSL version, default is the highest number supported (TLS/SSL version: 30-SSLv3.0, 31-TLSv1.0, 32-TLSv1.1, 33-TLSv1.2 and 34-TLSv1.3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#version SlbTemplateServerSsl#version}
  */
  readonly version?: number;
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#ca_certs SlbTemplateServerSsl#ca_certs}
  */
  readonly caCerts?: SlbTemplateServerSslCaCerts[] | cdktf.IResolvable;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#certificate SlbTemplateServerSsl#certificate}
  */
  readonly certificate?: SlbTemplateServerSslCertificate;
  /**
  * cipher_without_prio_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#cipher_without_prio_list SlbTemplateServerSsl#cipher_without_prio_list}
  */
  readonly cipherWithoutPrioList?: SlbTemplateServerSslCipherWithoutPrioListStruct[] | cdktf.IResolvable;
  /**
  * crl_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#crl_certs SlbTemplateServerSsl#crl_certs}
  */
  readonly crlCerts?: SlbTemplateServerSslCrlCerts[] | cdktf.IResolvable;
  /**
  * ec_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#ec_list SlbTemplateServerSsl#ec_list}
  */
  readonly ecList?: SlbTemplateServerSslEcListStruct[] | cdktf.IResolvable;
  /**
  * server_certificate_error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#server_certificate_error SlbTemplateServerSsl#server_certificate_error}
  */
  readonly serverCertificateError?: SlbTemplateServerSslServerCertificateError[] | cdktf.IResolvable;
}
export interface SlbTemplateServerSslCaCerts {
  /**
  * Specify CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#ca_cert SlbTemplateServerSsl#ca_cert}
  */
  readonly caCert?: string;
  /**
  * CA Certificate Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#ca_cert_partition_shared SlbTemplateServerSsl#ca_cert_partition_shared}
  */
  readonly caCertPartitionShared?: number;
  /**
  * Specify service-group (Service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#server_ocsp_sg SlbTemplateServerSsl#server_ocsp_sg}
  */
  readonly serverOcspSg?: string;
  /**
  * Specify authentication server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#server_ocsp_srvr SlbTemplateServerSsl#server_ocsp_srvr}
  */
  readonly serverOcspSrvr?: string;
}

export function slbTemplateServerSslCaCertsToTerraform(struct?: SlbTemplateServerSslCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    ca_cert_partition_shared: cdktf.numberToTerraform(struct!.caCertPartitionShared),
    server_ocsp_sg: cdktf.stringToTerraform(struct!.serverOcspSg),
    server_ocsp_srvr: cdktf.stringToTerraform(struct!.serverOcspSrvr),
  }
}


export function slbTemplateServerSslCaCertsToHclTerraform(struct?: SlbTemplateServerSslCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert_partition_shared: {
      value: cdktf.numberToHclTerraform(struct!.caCertPartitionShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ocsp_sg: {
      value: cdktf.stringToHclTerraform(struct!.serverOcspSg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ocsp_srvr: {
      value: cdktf.stringToHclTerraform(struct!.serverOcspSrvr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateServerSslCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateServerSslCaCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._caCertPartitionShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertPartitionShared = this._caCertPartitionShared;
    }
    if (this._serverOcspSg !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverOcspSg = this._serverOcspSg;
    }
    if (this._serverOcspSrvr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverOcspSrvr = this._serverOcspSrvr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateServerSslCaCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert = undefined;
      this._caCertPartitionShared = undefined;
      this._serverOcspSg = undefined;
      this._serverOcspSrvr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert = value.caCert;
      this._caCertPartitionShared = value.caCertPartitionShared;
      this._serverOcspSg = value.serverOcspSg;
      this._serverOcspSrvr = value.serverOcspSrvr;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_cert_partition_shared - computed: false, optional: true, required: false
  private _caCertPartitionShared?: number; 
  public get caCertPartitionShared() {
    return this.getNumberAttribute('ca_cert_partition_shared');
  }
  public set caCertPartitionShared(value: number) {
    this._caCertPartitionShared = value;
  }
  public resetCaCertPartitionShared() {
    this._caCertPartitionShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPartitionSharedInput() {
    return this._caCertPartitionShared;
  }

  // server_ocsp_sg - computed: false, optional: true, required: false
  private _serverOcspSg?: string; 
  public get serverOcspSg() {
    return this.getStringAttribute('server_ocsp_sg');
  }
  public set serverOcspSg(value: string) {
    this._serverOcspSg = value;
  }
  public resetServerOcspSg() {
    this._serverOcspSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOcspSgInput() {
    return this._serverOcspSg;
  }

  // server_ocsp_srvr - computed: false, optional: true, required: false
  private _serverOcspSrvr?: string; 
  public get serverOcspSrvr() {
    return this.getStringAttribute('server_ocsp_srvr');
  }
  public set serverOcspSrvr(value: string) {
    this._serverOcspSrvr = value;
  }
  public resetServerOcspSrvr() {
    this._serverOcspSrvr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOcspSrvrInput() {
    return this._serverOcspSrvr;
  }
}

export class SlbTemplateServerSslCaCertsList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateServerSslCaCerts[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateServerSslCaCertsOutputReference {
    return new SlbTemplateServerSslCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateServerSslCertificate {
  /**
  * Certificate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#cert SlbTemplateServerSsl#cert}
  */
  readonly cert?: string;
  /**
  * Client private-key (Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#key SlbTemplateServerSsl#key}
  */
  readonly key?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#passphrase SlbTemplateServerSsl#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Client Certificate and Key Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#shared SlbTemplateServerSsl#shared}
  */
  readonly shared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#uuid SlbTemplateServerSsl#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateServerSslCertificateToTerraform(struct?: SlbTemplateServerSslCertificateOutputReference | SlbTemplateServerSslCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    shared: cdktf.numberToTerraform(struct!.shared),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateServerSslCertificateToHclTerraform(struct?: SlbTemplateServerSslCertificateOutputReference | SlbTemplateServerSslCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
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

export class SlbTemplateServerSslCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateServerSslCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateServerSslCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._key = undefined;
      this._passphrase = undefined;
      this._shared = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._key = value.key;
      this._passphrase = value.passphrase;
      this._shared = value.shared;
      this._uuid = value.uuid;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
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
export interface SlbTemplateServerSslCipherWithoutPrioListStruct {
  /**
  * 'SSL3_RSA_DES_192_CBC3_SHA': TLS_RSA_WITH_3DES_EDE_CBC_SHA (0x000A); 'SSL3_RSA_RC4_128_MD5': TLS_RSA_WITH_RC4_128_MD5 (0x0004); 'SSL3_RSA_RC4_128_SHA': TLS_RSA_WITH_RC4_128_SHA (0x0005); 'TLS1_RSA_AES_128_SHA': TLS_RSA_WITH_AES_128_CBC_SHA (0x002F); 'TLS1_RSA_AES_256_SHA': TLS_RSA_WITH_AES_256_CBC_SHA (0x0035); 'TLS1_RSA_AES_128_SHA256': TLS_RSA_WITH_AES_128_CBC_SHA256 (0x003C); 'TLS1_RSA_AES_256_SHA256': TLS_RSA_WITH_AES_256_CBC_SHA256 (0x003D); 'TLS1_DHE_RSA_AES_128_GCM_SHA256': TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 (0x009E); 'TLS1_DHE_RSA_AES_128_SHA': TLS_DHE_RSA_WITH_AES_128_CBC_SHA (0x0033); 'TLS1_DHE_RSA_AES_128_SHA256': TLS_DHE_RSA_WITH_AES_128_CBC_SHA256 (0x0067); 'TLS1_DHE_RSA_AES_256_GCM_SHA384': TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 (0x009F); 'TLS1_DHE_RSA_AES_256_SHA': TLS_DHE_RSA_WITH_AES_256_CBC_SHA (0x0039); 'TLS1_DHE_RSA_AES_256_SHA256': TLS_DHE_RSA_WITH_AES_256_CBC_SHA256 (0x006B); 'TLS1_ECDHE_ECDSA_AES_128_GCM_SHA256': TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 (0xC02B); 'TLS1_ECDHE_ECDSA_AES_128_SHA': TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (0xC009); 'TLS1_ECDHE_ECDSA_AES_128_SHA256': TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 (0xC023); 'TLS1_ECDHE_ECDSA_AES_256_GCM_SHA384': TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 (0xC02C); 'TLS1_ECDHE_ECDSA_AES_256_SHA': TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (0xC00A); 'TLS1_ECDHE_RSA_AES_128_GCM_SHA256': TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xC02F); 'TLS1_ECDHE_RSA_AES_128_SHA': TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (0xC013); 'TLS1_ECDHE_RSA_AES_128_SHA256': TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 (0xC027); 'TLS1_ECDHE_RSA_AES_256_GCM_SHA384': TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xC030); 'TLS1_ECDHE_RSA_AES_256_SHA': TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (0xC014); 'TLS1_RSA_AES_128_GCM_SHA256': TLS_RSA_WITH_AES_128_GCM_SHA256 (0x009C); 'TLS1_RSA_AES_256_GCM_SHA384': TLS_RSA_WITH_AES_256_GCM_SHA384 (0x009D); 'TLS1_ECDHE_RSA_AES_256_SHA384': TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 (0xC028); 'TLS1_ECDHE_ECDSA_AES_256_SHA384': TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 (0xC024); 'TLS1_ECDHE_RSA_CHACHA20_POLY1305_SHA256': TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (0xCCA8); 'TLS1_ECDHE_ECDSA_CHACHA20_POLY1305_SHA256': TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 (0xCCA9); 'TLS1_DHE_RSA_CHACHA20_POLY1305_SHA256': TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (0xCCAA);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#cipher_wo_prio SlbTemplateServerSsl#cipher_wo_prio}
  */
  readonly cipherWoPrio?: string;
}

export function slbTemplateServerSslCipherWithoutPrioListStructToTerraform(struct?: SlbTemplateServerSslCipherWithoutPrioListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_wo_prio: cdktf.stringToTerraform(struct!.cipherWoPrio),
  }
}


export function slbTemplateServerSslCipherWithoutPrioListStructToHclTerraform(struct?: SlbTemplateServerSslCipherWithoutPrioListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_wo_prio: {
      value: cdktf.stringToHclTerraform(struct!.cipherWoPrio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateServerSslCipherWithoutPrioListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateServerSslCipherWithoutPrioListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherWoPrio !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherWoPrio = this._cipherWoPrio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateServerSslCipherWithoutPrioListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherWoPrio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherWoPrio = value.cipherWoPrio;
    }
  }

  // cipher_wo_prio - computed: false, optional: true, required: false
  private _cipherWoPrio?: string; 
  public get cipherWoPrio() {
    return this.getStringAttribute('cipher_wo_prio');
  }
  public set cipherWoPrio(value: string) {
    this._cipherWoPrio = value;
  }
  public resetCipherWoPrio() {
    this._cipherWoPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherWoPrioInput() {
    return this._cipherWoPrio;
  }
}

export class SlbTemplateServerSslCipherWithoutPrioListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateServerSslCipherWithoutPrioListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateServerSslCipherWithoutPrioListStructOutputReference {
    return new SlbTemplateServerSslCipherWithoutPrioListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateServerSslCrlCerts {
  /**
  * Certificate Revocation Lists (Certificate Revocation Lists file name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#crl SlbTemplateServerSsl#crl}
  */
  readonly crl?: string;
  /**
  * Certificate Revocation Lists Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#crl_partition_shared SlbTemplateServerSsl#crl_partition_shared}
  */
  readonly crlPartitionShared?: number;
}

export function slbTemplateServerSslCrlCertsToTerraform(struct?: SlbTemplateServerSslCrlCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl: cdktf.stringToTerraform(struct!.crl),
    crl_partition_shared: cdktf.numberToTerraform(struct!.crlPartitionShared),
  }
}


export function slbTemplateServerSslCrlCertsToHclTerraform(struct?: SlbTemplateServerSslCrlCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl: {
      value: cdktf.stringToHclTerraform(struct!.crl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_partition_shared: {
      value: cdktf.numberToHclTerraform(struct!.crlPartitionShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateServerSslCrlCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateServerSslCrlCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crl !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl;
    }
    if (this._crlPartitionShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlPartitionShared = this._crlPartitionShared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateServerSslCrlCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crl = undefined;
      this._crlPartitionShared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crl = value.crl;
      this._crlPartitionShared = value.crlPartitionShared;
    }
  }

  // crl - computed: false, optional: true, required: false
  private _crl?: string; 
  public get crl() {
    return this.getStringAttribute('crl');
  }
  public set crl(value: string) {
    this._crl = value;
  }
  public resetCrl() {
    this._crl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl;
  }

  // crl_partition_shared - computed: false, optional: true, required: false
  private _crlPartitionShared?: number; 
  public get crlPartitionShared() {
    return this.getNumberAttribute('crl_partition_shared');
  }
  public set crlPartitionShared(value: number) {
    this._crlPartitionShared = value;
  }
  public resetCrlPartitionShared() {
    this._crlPartitionShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlPartitionSharedInput() {
    return this._crlPartitionShared;
  }
}

export class SlbTemplateServerSslCrlCertsList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateServerSslCrlCerts[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateServerSslCrlCertsOutputReference {
    return new SlbTemplateServerSslCrlCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateServerSslEcListStruct {
  /**
  * 'secp256r1': X9_62_prime256v1; 'secp384r1': secp384r1;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#ec SlbTemplateServerSsl#ec}
  */
  readonly ec?: string;
}

export function slbTemplateServerSslEcListStructToTerraform(struct?: SlbTemplateServerSslEcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ec: cdktf.stringToTerraform(struct!.ec),
  }
}


export function slbTemplateServerSslEcListStructToHclTerraform(struct?: SlbTemplateServerSslEcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ec: {
      value: cdktf.stringToHclTerraform(struct!.ec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateServerSslEcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateServerSslEcListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec = this._ec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateServerSslEcListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ec = value.ec;
    }
  }

  // ec - computed: false, optional: true, required: false
  private _ec?: string; 
  public get ec() {
    return this.getStringAttribute('ec');
  }
  public set ec(value: string) {
    this._ec = value;
  }
  public resetEc() {
    this._ec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecInput() {
    return this._ec;
  }
}

export class SlbTemplateServerSslEcListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateServerSslEcListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateServerSslEcListStructOutputReference {
    return new SlbTemplateServerSslEcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateServerSslServerCertificateError {
  /**
  * 'email': Notify the error via email; 'ignore': Ignore the error, which mean the connection can continue; 'logging': Log the error; 'trap': Notify the error by SNMP trap;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#error_type SlbTemplateServerSsl#error_type}
  */
  readonly errorType?: string;
}

export function slbTemplateServerSslServerCertificateErrorToTerraform(struct?: SlbTemplateServerSslServerCertificateError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_type: cdktf.stringToTerraform(struct!.errorType),
  }
}


export function slbTemplateServerSslServerCertificateErrorToHclTerraform(struct?: SlbTemplateServerSslServerCertificateError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_type: {
      value: cdktf.stringToHclTerraform(struct!.errorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateServerSslServerCertificateErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateServerSslServerCertificateError | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorType = this._errorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateServerSslServerCertificateError | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorType = value.errorType;
    }
  }

  // error_type - computed: false, optional: true, required: false
  private _errorType?: string; 
  public get errorType() {
    return this.getStringAttribute('error_type');
  }
  public set errorType(value: string) {
    this._errorType = value;
  }
  public resetErrorType() {
    this._errorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTypeInput() {
    return this._errorType;
  }
}

export class SlbTemplateServerSslServerCertificateErrorList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateServerSslServerCertificateError[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateServerSslServerCertificateErrorOutputReference {
    return new SlbTemplateServerSslServerCertificateErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl thunder_slb_template_server_ssl}
*/
export class SlbTemplateServerSsl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_server_ssl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateServerSsl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateServerSsl to import
  * @param importFromId The id of the existing SlbTemplateServerSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateServerSsl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_server_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_server_ssl thunder_slb_template_server_ssl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateServerSslConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateServerSslConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_server_ssl',
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
    this._alertType = config.alertType;
    this._cipherTemplate = config.cipherTemplate;
    this._closeNotify = config.closeNotify;
    this._dgversion = config.dgversion;
    this._dhType = config.dhType;
    this._earlyData = config.earlyData;
    this._enableSsliFtpAlg = config.enableSsliFtpAlg;
    this._enableTlsAlertLogging = config.enableTlsAlertLogging;
    this._forwardProxyEnable = config.forwardProxyEnable;
    this._handshakeLoggingEnable = config.handshakeLoggingEnable;
    this._id = config.id;
    this._name = config.name;
    this._ocspStapling = config.ocspStapling;
    this._renegotiationDisable = config.renegotiationDisable;
    this._serverName = config.serverName;
    this._sessionCacheSize = config.sessionCacheSize;
    this._sessionCacheTimeout = config.sessionCacheTimeout;
    this._sessionTicketEnable = config.sessionTicketEnable;
    this._sharedPartitionCipherTemplate = config.sharedPartitionCipherTemplate;
    this._ssliLogging = config.ssliLogging;
    this._sslilogging = config.sslilogging;
    this._templateCipherShared = config.templateCipherShared;
    this._useClientSni = config.useClientSni;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._version = config.version;
    this._caCerts.internalValue = config.caCerts;
    this._certificate.internalValue = config.certificate;
    this._cipherWithoutPrioList.internalValue = config.cipherWithoutPrioList;
    this._crlCerts.internalValue = config.crlCerts;
    this._ecList.internalValue = config.ecList;
    this._serverCertificateError.internalValue = config.serverCertificateError;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_type - computed: false, optional: true, required: false
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  public resetAlertType() {
    this._alertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // cipher_template - computed: false, optional: true, required: false
  private _cipherTemplate?: string; 
  public get cipherTemplate() {
    return this.getStringAttribute('cipher_template');
  }
  public set cipherTemplate(value: string) {
    this._cipherTemplate = value;
  }
  public resetCipherTemplate() {
    this._cipherTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherTemplateInput() {
    return this._cipherTemplate;
  }

  // close_notify - computed: false, optional: true, required: false
  private _closeNotify?: number; 
  public get closeNotify() {
    return this.getNumberAttribute('close_notify');
  }
  public set closeNotify(value: number) {
    this._closeNotify = value;
  }
  public resetCloseNotify() {
    this._closeNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeNotifyInput() {
    return this._closeNotify;
  }

  // dgversion - computed: false, optional: true, required: false
  private _dgversion?: number; 
  public get dgversion() {
    return this.getNumberAttribute('dgversion');
  }
  public set dgversion(value: number) {
    this._dgversion = value;
  }
  public resetDgversion() {
    this._dgversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgversionInput() {
    return this._dgversion;
  }

  // dh_type - computed: false, optional: true, required: false
  private _dhType?: string; 
  public get dhType() {
    return this.getStringAttribute('dh_type');
  }
  public set dhType(value: string) {
    this._dhType = value;
  }
  public resetDhType() {
    this._dhType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhTypeInput() {
    return this._dhType;
  }

  // early_data - computed: false, optional: true, required: false
  private _earlyData?: number; 
  public get earlyData() {
    return this.getNumberAttribute('early_data');
  }
  public set earlyData(value: number) {
    this._earlyData = value;
  }
  public resetEarlyData() {
    this._earlyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyDataInput() {
    return this._earlyData;
  }

  // enable_ssli_ftp_alg - computed: false, optional: true, required: false
  private _enableSsliFtpAlg?: number; 
  public get enableSsliFtpAlg() {
    return this.getNumberAttribute('enable_ssli_ftp_alg');
  }
  public set enableSsliFtpAlg(value: number) {
    this._enableSsliFtpAlg = value;
  }
  public resetEnableSsliFtpAlg() {
    this._enableSsliFtpAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsliFtpAlgInput() {
    return this._enableSsliFtpAlg;
  }

  // enable_tls_alert_logging - computed: false, optional: true, required: false
  private _enableTlsAlertLogging?: number; 
  public get enableTlsAlertLogging() {
    return this.getNumberAttribute('enable_tls_alert_logging');
  }
  public set enableTlsAlertLogging(value: number) {
    this._enableTlsAlertLogging = value;
  }
  public resetEnableTlsAlertLogging() {
    this._enableTlsAlertLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsAlertLoggingInput() {
    return this._enableTlsAlertLogging;
  }

  // forward_proxy_enable - computed: false, optional: true, required: false
  private _forwardProxyEnable?: number; 
  public get forwardProxyEnable() {
    return this.getNumberAttribute('forward_proxy_enable');
  }
  public set forwardProxyEnable(value: number) {
    this._forwardProxyEnable = value;
  }
  public resetForwardProxyEnable() {
    this._forwardProxyEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyEnableInput() {
    return this._forwardProxyEnable;
  }

  // handshake_logging_enable - computed: false, optional: true, required: false
  private _handshakeLoggingEnable?: number; 
  public get handshakeLoggingEnable() {
    return this.getNumberAttribute('handshake_logging_enable');
  }
  public set handshakeLoggingEnable(value: number) {
    this._handshakeLoggingEnable = value;
  }
  public resetHandshakeLoggingEnable() {
    this._handshakeLoggingEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeLoggingEnableInput() {
    return this._handshakeLoggingEnable;
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

  // ocsp_stapling - computed: false, optional: true, required: false
  private _ocspStapling?: number; 
  public get ocspStapling() {
    return this.getNumberAttribute('ocsp_stapling');
  }
  public set ocspStapling(value: number) {
    this._ocspStapling = value;
  }
  public resetOcspStapling() {
    this._ocspStapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingInput() {
    return this._ocspStapling;
  }

  // renegotiation_disable - computed: false, optional: true, required: false
  private _renegotiationDisable?: number; 
  public get renegotiationDisable() {
    return this.getNumberAttribute('renegotiation_disable');
  }
  public set renegotiationDisable(value: number) {
    this._renegotiationDisable = value;
  }
  public resetRenegotiationDisable() {
    this._renegotiationDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiationDisableInput() {
    return this._renegotiationDisable;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // session_cache_size - computed: false, optional: true, required: false
  private _sessionCacheSize?: number; 
  public get sessionCacheSize() {
    return this.getNumberAttribute('session_cache_size');
  }
  public set sessionCacheSize(value: number) {
    this._sessionCacheSize = value;
  }
  public resetSessionCacheSize() {
    this._sessionCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCacheSizeInput() {
    return this._sessionCacheSize;
  }

  // session_cache_timeout - computed: false, optional: true, required: false
  private _sessionCacheTimeout?: number; 
  public get sessionCacheTimeout() {
    return this.getNumberAttribute('session_cache_timeout');
  }
  public set sessionCacheTimeout(value: number) {
    this._sessionCacheTimeout = value;
  }
  public resetSessionCacheTimeout() {
    this._sessionCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCacheTimeoutInput() {
    return this._sessionCacheTimeout;
  }

  // session_ticket_enable - computed: false, optional: true, required: false
  private _sessionTicketEnable?: number; 
  public get sessionTicketEnable() {
    return this.getNumberAttribute('session_ticket_enable');
  }
  public set sessionTicketEnable(value: number) {
    this._sessionTicketEnable = value;
  }
  public resetSessionTicketEnable() {
    this._sessionTicketEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTicketEnableInput() {
    return this._sessionTicketEnable;
  }

  // shared_partition_cipher_template - computed: false, optional: true, required: false
  private _sharedPartitionCipherTemplate?: number; 
  public get sharedPartitionCipherTemplate() {
    return this.getNumberAttribute('shared_partition_cipher_template');
  }
  public set sharedPartitionCipherTemplate(value: number) {
    this._sharedPartitionCipherTemplate = value;
  }
  public resetSharedPartitionCipherTemplate() {
    this._sharedPartitionCipherTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionCipherTemplateInput() {
    return this._sharedPartitionCipherTemplate;
  }

  // ssli_logging - computed: false, optional: true, required: false
  private _ssliLogging?: number; 
  public get ssliLogging() {
    return this.getNumberAttribute('ssli_logging');
  }
  public set ssliLogging(value: number) {
    this._ssliLogging = value;
  }
  public resetSsliLogging() {
    this._ssliLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliLoggingInput() {
    return this._ssliLogging;
  }

  // sslilogging - computed: false, optional: true, required: false
  private _sslilogging?: string; 
  public get sslilogging() {
    return this.getStringAttribute('sslilogging');
  }
  public set sslilogging(value: string) {
    this._sslilogging = value;
  }
  public resetSslilogging() {
    this._sslilogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliloggingInput() {
    return this._sslilogging;
  }

  // template_cipher_shared - computed: false, optional: true, required: false
  private _templateCipherShared?: string; 
  public get templateCipherShared() {
    return this.getStringAttribute('template_cipher_shared');
  }
  public set templateCipherShared(value: string) {
    this._templateCipherShared = value;
  }
  public resetTemplateCipherShared() {
    this._templateCipherShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateCipherSharedInput() {
    return this._templateCipherShared;
  }

  // use_client_sni - computed: false, optional: true, required: false
  private _useClientSni?: number; 
  public get useClientSni() {
    return this.getNumberAttribute('use_client_sni');
  }
  public set useClientSni(value: number) {
    this._useClientSni = value;
  }
  public resetUseClientSni() {
    this._useClientSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClientSniInput() {
    return this._useClientSni;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // ca_certs - computed: false, optional: true, required: false
  private _caCerts = new SlbTemplateServerSslCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: SlbTemplateServerSslCaCerts[] | cdktf.IResolvable) {
    this._caCerts.internalValue = value;
  }
  public resetCaCerts() {
    this._caCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new SlbTemplateServerSslCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: SlbTemplateServerSslCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // cipher_without_prio_list - computed: false, optional: true, required: false
  private _cipherWithoutPrioList = new SlbTemplateServerSslCipherWithoutPrioListStructList(this, "cipher_without_prio_list", false);
  public get cipherWithoutPrioList() {
    return this._cipherWithoutPrioList;
  }
  public putCipherWithoutPrioList(value: SlbTemplateServerSslCipherWithoutPrioListStruct[] | cdktf.IResolvable) {
    this._cipherWithoutPrioList.internalValue = value;
  }
  public resetCipherWithoutPrioList() {
    this._cipherWithoutPrioList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherWithoutPrioListInput() {
    return this._cipherWithoutPrioList.internalValue;
  }

  // crl_certs - computed: false, optional: true, required: false
  private _crlCerts = new SlbTemplateServerSslCrlCertsList(this, "crl_certs", false);
  public get crlCerts() {
    return this._crlCerts;
  }
  public putCrlCerts(value: SlbTemplateServerSslCrlCerts[] | cdktf.IResolvable) {
    this._crlCerts.internalValue = value;
  }
  public resetCrlCerts() {
    this._crlCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCertsInput() {
    return this._crlCerts.internalValue;
  }

  // ec_list - computed: false, optional: true, required: false
  private _ecList = new SlbTemplateServerSslEcListStructList(this, "ec_list", false);
  public get ecList() {
    return this._ecList;
  }
  public putEcList(value: SlbTemplateServerSslEcListStruct[] | cdktf.IResolvable) {
    this._ecList.internalValue = value;
  }
  public resetEcList() {
    this._ecList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecListInput() {
    return this._ecList.internalValue;
  }

  // server_certificate_error - computed: false, optional: true, required: false
  private _serverCertificateError = new SlbTemplateServerSslServerCertificateErrorList(this, "server_certificate_error", false);
  public get serverCertificateError() {
    return this._serverCertificateError;
  }
  public putServerCertificateError(value: SlbTemplateServerSslServerCertificateError[] | cdktf.IResolvable) {
    this._serverCertificateError.internalValue = value;
  }
  public resetServerCertificateError() {
    this._serverCertificateError.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateErrorInput() {
    return this._serverCertificateError.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_type: cdktf.stringToTerraform(this._alertType),
      cipher_template: cdktf.stringToTerraform(this._cipherTemplate),
      close_notify: cdktf.numberToTerraform(this._closeNotify),
      dgversion: cdktf.numberToTerraform(this._dgversion),
      dh_type: cdktf.stringToTerraform(this._dhType),
      early_data: cdktf.numberToTerraform(this._earlyData),
      enable_ssli_ftp_alg: cdktf.numberToTerraform(this._enableSsliFtpAlg),
      enable_tls_alert_logging: cdktf.numberToTerraform(this._enableTlsAlertLogging),
      forward_proxy_enable: cdktf.numberToTerraform(this._forwardProxyEnable),
      handshake_logging_enable: cdktf.numberToTerraform(this._handshakeLoggingEnable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ocsp_stapling: cdktf.numberToTerraform(this._ocspStapling),
      renegotiation_disable: cdktf.numberToTerraform(this._renegotiationDisable),
      server_name: cdktf.stringToTerraform(this._serverName),
      session_cache_size: cdktf.numberToTerraform(this._sessionCacheSize),
      session_cache_timeout: cdktf.numberToTerraform(this._sessionCacheTimeout),
      session_ticket_enable: cdktf.numberToTerraform(this._sessionTicketEnable),
      shared_partition_cipher_template: cdktf.numberToTerraform(this._sharedPartitionCipherTemplate),
      ssli_logging: cdktf.numberToTerraform(this._ssliLogging),
      sslilogging: cdktf.stringToTerraform(this._sslilogging),
      template_cipher_shared: cdktf.stringToTerraform(this._templateCipherShared),
      use_client_sni: cdktf.numberToTerraform(this._useClientSni),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      version: cdktf.numberToTerraform(this._version),
      ca_certs: cdktf.listMapper(slbTemplateServerSslCaCertsToTerraform, true)(this._caCerts.internalValue),
      certificate: slbTemplateServerSslCertificateToTerraform(this._certificate.internalValue),
      cipher_without_prio_list: cdktf.listMapper(slbTemplateServerSslCipherWithoutPrioListStructToTerraform, true)(this._cipherWithoutPrioList.internalValue),
      crl_certs: cdktf.listMapper(slbTemplateServerSslCrlCertsToTerraform, true)(this._crlCerts.internalValue),
      ec_list: cdktf.listMapper(slbTemplateServerSslEcListStructToTerraform, true)(this._ecList.internalValue),
      server_certificate_error: cdktf.listMapper(slbTemplateServerSslServerCertificateErrorToTerraform, true)(this._serverCertificateError.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_type: {
        value: cdktf.stringToHclTerraform(this._alertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher_template: {
        value: cdktf.stringToHclTerraform(this._cipherTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      close_notify: {
        value: cdktf.numberToHclTerraform(this._closeNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dgversion: {
        value: cdktf.numberToHclTerraform(this._dgversion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dh_type: {
        value: cdktf.stringToHclTerraform(this._dhType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      early_data: {
        value: cdktf.numberToHclTerraform(this._earlyData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_ssli_ftp_alg: {
        value: cdktf.numberToHclTerraform(this._enableSsliFtpAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_tls_alert_logging: {
        value: cdktf.numberToHclTerraform(this._enableTlsAlertLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_enable: {
        value: cdktf.numberToHclTerraform(this._forwardProxyEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handshake_logging_enable: {
        value: cdktf.numberToHclTerraform(this._handshakeLoggingEnable),
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
      ocsp_stapling: {
        value: cdktf.numberToHclTerraform(this._ocspStapling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renegotiation_disable: {
        value: cdktf.numberToHclTerraform(this._renegotiationDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_cache_size: {
        value: cdktf.numberToHclTerraform(this._sessionCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_ticket_enable: {
        value: cdktf.numberToHclTerraform(this._sessionTicketEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_cipher_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionCipherTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssli_logging: {
        value: cdktf.numberToHclTerraform(this._ssliLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslilogging: {
        value: cdktf.stringToHclTerraform(this._sslilogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_cipher_shared: {
        value: cdktf.stringToHclTerraform(this._templateCipherShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_client_sni: {
        value: cdktf.numberToHclTerraform(this._useClientSni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_certs: {
        value: cdktf.listMapperHcl(slbTemplateServerSslCaCertsToHclTerraform, true)(this._caCerts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateServerSslCaCertsList",
      },
      certificate: {
        value: slbTemplateServerSslCertificateToHclTerraform(this._certificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateServerSslCertificateList",
      },
      cipher_without_prio_list: {
        value: cdktf.listMapperHcl(slbTemplateServerSslCipherWithoutPrioListStructToHclTerraform, true)(this._cipherWithoutPrioList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateServerSslCipherWithoutPrioListStructList",
      },
      crl_certs: {
        value: cdktf.listMapperHcl(slbTemplateServerSslCrlCertsToHclTerraform, true)(this._crlCerts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateServerSslCrlCertsList",
      },
      ec_list: {
        value: cdktf.listMapperHcl(slbTemplateServerSslEcListStructToHclTerraform, true)(this._ecList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateServerSslEcListStructList",
      },
      server_certificate_error: {
        value: cdktf.listMapperHcl(slbTemplateServerSslServerCertificateErrorToHclTerraform, true)(this._serverCertificateError.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateServerSslServerCertificateErrorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
