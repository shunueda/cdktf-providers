// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysOcspConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the lifetime of an error response in the cache, in seconds. This value must be greater than connection_timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#cache_error_timeout SysOcsp#cache_error_timeout}
  */
  readonly cacheErrorTimeout?: number;
  /**
  * Specifies the lifetime of the OCSP response in the cache, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#cache_timeout SysOcsp#cache_timeout}
  */
  readonly cacheTimeout?: string;
  /**
  * Specifies the tolerable absolute difference in the clocks of the responder and the BIG-IP system, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#clock_skew SysOcsp#clock_skew}
  */
  readonly clockSkew?: number;
  /**
  * Specifies the maximum number of connections per second allowed for the OCSP certificate validator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#concurrent_connections_limit SysOcsp#concurrent_connections_limit}
  */
  readonly concurrentConnectionsLimit?: number;
  /**
  * Specifies the time interval that the BIG-IP system waits for before ending the connection to the OCSP responder, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#connection_timeout SysOcsp#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Specifies the internal DNS resolver the BIG-IP system uses to fetch the OCSP response. It should be of the pattern '/partition/resolver-name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#dns_resolver SysOcsp#dns_resolver}
  */
  readonly dnsResolver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#id SysOcsp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the OCSP responder. It should be of the pattern '/partition/name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#name SysOcsp#name}
  */
  readonly name: string;
  /**
  * Specifies a passphrase used to sign an OCSP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#passphrase SysOcsp#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Specifies the proxy server pool the BIG-IP system uses to fetch the OCSP response. It should be of the pattern '/partition/pool-name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#proxy_server_pool SysOcsp#proxy_server_pool}
  */
  readonly proxyServerPool?: string;
  /**
  * Specifies the URL of the OCSP responder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#responder_url SysOcsp#responder_url}
  */
  readonly responderUrl?: string;
  /**
  * Specifies the route domain for the OCSP responder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#route_domain SysOcsp#route_domain}
  */
  readonly routeDomain?: string;
  /**
  * Specifies the hash algorithm used to sign an OCSP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#sign_hash SysOcsp#sign_hash}
  */
  readonly signHash?: string;
  /**
  * Specifies a certificate used to sign an OCSP request. It should be of the pattern '/partition/cert-name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#signer_cert SysOcsp#signer_cert}
  */
  readonly signerCert?: string;
  /**
  * Specifies a key used to sign an OCSP request. It should be of the pattern '/partition/key-name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#signer_key SysOcsp#signer_key}
  */
  readonly signerKey?: string;
  /**
  * Specifies the maximum allowed lag time that the BIG-IP system accepts for the 'thisUpdate' time in the OCSP response, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#status_age SysOcsp#status_age}
  */
  readonly statusAge?: number;
  /**
  * Specifies whether the responder's certificate is checked for an OCSP signing extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#strict_resp_cert_check SysOcsp#strict_resp_cert_check}
  */
  readonly strictRespCertCheck?: string;
  /**
  * Specifies the certificates used for validating the OCSP response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#trusted_responders SysOcsp#trusted_responders}
  */
  readonly trustedResponders?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp bigip_sys_ocsp}
*/
export class SysOcsp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_sys_ocsp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysOcsp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysOcsp to import
  * @param importFromId The id of the existing SysOcsp that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysOcsp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_sys_ocsp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_ocsp bigip_sys_ocsp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysOcspConfig
  */
  public constructor(scope: Construct, id: string, config: SysOcspConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_sys_ocsp',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheErrorTimeout = config.cacheErrorTimeout;
    this._cacheTimeout = config.cacheTimeout;
    this._clockSkew = config.clockSkew;
    this._concurrentConnectionsLimit = config.concurrentConnectionsLimit;
    this._connectionTimeout = config.connectionTimeout;
    this._dnsResolver = config.dnsResolver;
    this._id = config.id;
    this._name = config.name;
    this._passphrase = config.passphrase;
    this._proxyServerPool = config.proxyServerPool;
    this._responderUrl = config.responderUrl;
    this._routeDomain = config.routeDomain;
    this._signHash = config.signHash;
    this._signerCert = config.signerCert;
    this._signerKey = config.signerKey;
    this._statusAge = config.statusAge;
    this._strictRespCertCheck = config.strictRespCertCheck;
    this._trustedResponders = config.trustedResponders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_error_timeout - computed: false, optional: true, required: false
  private _cacheErrorTimeout?: number; 
  public get cacheErrorTimeout() {
    return this.getNumberAttribute('cache_error_timeout');
  }
  public set cacheErrorTimeout(value: number) {
    this._cacheErrorTimeout = value;
  }
  public resetCacheErrorTimeout() {
    this._cacheErrorTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheErrorTimeoutInput() {
    return this._cacheErrorTimeout;
  }

  // cache_timeout - computed: false, optional: true, required: false
  private _cacheTimeout?: string; 
  public get cacheTimeout() {
    return this.getStringAttribute('cache_timeout');
  }
  public set cacheTimeout(value: string) {
    this._cacheTimeout = value;
  }
  public resetCacheTimeout() {
    this._cacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutInput() {
    return this._cacheTimeout;
  }

  // clock_skew - computed: false, optional: true, required: false
  private _clockSkew?: number; 
  public get clockSkew() {
    return this.getNumberAttribute('clock_skew');
  }
  public set clockSkew(value: number) {
    this._clockSkew = value;
  }
  public resetClockSkew() {
    this._clockSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewInput() {
    return this._clockSkew;
  }

  // concurrent_connections_limit - computed: false, optional: true, required: false
  private _concurrentConnectionsLimit?: number; 
  public get concurrentConnectionsLimit() {
    return this.getNumberAttribute('concurrent_connections_limit');
  }
  public set concurrentConnectionsLimit(value: number) {
    this._concurrentConnectionsLimit = value;
  }
  public resetConcurrentConnectionsLimit() {
    this._concurrentConnectionsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentConnectionsLimitInput() {
    return this._concurrentConnectionsLimit;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // dns_resolver - computed: false, optional: true, required: false
  private _dnsResolver?: string; 
  public get dnsResolver() {
    return this.getStringAttribute('dns_resolver');
  }
  public set dnsResolver(value: string) {
    this._dnsResolver = value;
  }
  public resetDnsResolver() {
    this._dnsResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolverInput() {
    return this._dnsResolver;
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

  // proxy_server_pool - computed: false, optional: true, required: false
  private _proxyServerPool?: string; 
  public get proxyServerPool() {
    return this.getStringAttribute('proxy_server_pool');
  }
  public set proxyServerPool(value: string) {
    this._proxyServerPool = value;
  }
  public resetProxyServerPool() {
    this._proxyServerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerPoolInput() {
    return this._proxyServerPool;
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

  // route_domain - computed: false, optional: true, required: false
  private _routeDomain?: string; 
  public get routeDomain() {
    return this.getStringAttribute('route_domain');
  }
  public set routeDomain(value: string) {
    this._routeDomain = value;
  }
  public resetRouteDomain() {
    this._routeDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDomainInput() {
    return this._routeDomain;
  }

  // sign_hash - computed: false, optional: true, required: false
  private _signHash?: string; 
  public get signHash() {
    return this.getStringAttribute('sign_hash');
  }
  public set signHash(value: string) {
    this._signHash = value;
  }
  public resetSignHash() {
    this._signHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signHashInput() {
    return this._signHash;
  }

  // signer_cert - computed: false, optional: true, required: false
  private _signerCert?: string; 
  public get signerCert() {
    return this.getStringAttribute('signer_cert');
  }
  public set signerCert(value: string) {
    this._signerCert = value;
  }
  public resetSignerCert() {
    this._signerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerCertInput() {
    return this._signerCert;
  }

  // signer_key - computed: false, optional: true, required: false
  private _signerKey?: string; 
  public get signerKey() {
    return this.getStringAttribute('signer_key');
  }
  public set signerKey(value: string) {
    this._signerKey = value;
  }
  public resetSignerKey() {
    this._signerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerKeyInput() {
    return this._signerKey;
  }

  // status_age - computed: false, optional: true, required: false
  private _statusAge?: number; 
  public get statusAge() {
    return this.getNumberAttribute('status_age');
  }
  public set statusAge(value: number) {
    this._statusAge = value;
  }
  public resetStatusAge() {
    this._statusAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusAgeInput() {
    return this._statusAge;
  }

  // strict_resp_cert_check - computed: false, optional: true, required: false
  private _strictRespCertCheck?: string; 
  public get strictRespCertCheck() {
    return this.getStringAttribute('strict_resp_cert_check');
  }
  public set strictRespCertCheck(value: string) {
    this._strictRespCertCheck = value;
  }
  public resetStrictRespCertCheck() {
    this._strictRespCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictRespCertCheckInput() {
    return this._strictRespCertCheck;
  }

  // trusted_responders - computed: false, optional: true, required: false
  private _trustedResponders?: string; 
  public get trustedResponders() {
    return this.getStringAttribute('trusted_responders');
  }
  public set trustedResponders(value: string) {
    this._trustedResponders = value;
  }
  public resetTrustedResponders() {
    this._trustedResponders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedRespondersInput() {
    return this._trustedResponders;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_error_timeout: cdktf.numberToTerraform(this._cacheErrorTimeout),
      cache_timeout: cdktf.stringToTerraform(this._cacheTimeout),
      clock_skew: cdktf.numberToTerraform(this._clockSkew),
      concurrent_connections_limit: cdktf.numberToTerraform(this._concurrentConnectionsLimit),
      connection_timeout: cdktf.numberToTerraform(this._connectionTimeout),
      dns_resolver: cdktf.stringToTerraform(this._dnsResolver),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      proxy_server_pool: cdktf.stringToTerraform(this._proxyServerPool),
      responder_url: cdktf.stringToTerraform(this._responderUrl),
      route_domain: cdktf.stringToTerraform(this._routeDomain),
      sign_hash: cdktf.stringToTerraform(this._signHash),
      signer_cert: cdktf.stringToTerraform(this._signerCert),
      signer_key: cdktf.stringToTerraform(this._signerKey),
      status_age: cdktf.numberToTerraform(this._statusAge),
      strict_resp_cert_check: cdktf.stringToTerraform(this._strictRespCertCheck),
      trusted_responders: cdktf.stringToTerraform(this._trustedResponders),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_error_timeout: {
        value: cdktf.numberToHclTerraform(this._cacheErrorTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_timeout: {
        value: cdktf.stringToHclTerraform(this._cacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clock_skew: {
        value: cdktf.numberToHclTerraform(this._clockSkew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_connections_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentConnectionsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_resolver: {
        value: cdktf.stringToHclTerraform(this._dnsResolver),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_server_pool: {
        value: cdktf.stringToHclTerraform(this._proxyServerPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responder_url: {
        value: cdktf.stringToHclTerraform(this._responderUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_domain: {
        value: cdktf.stringToHclTerraform(this._routeDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_hash: {
        value: cdktf.stringToHclTerraform(this._signHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signer_cert: {
        value: cdktf.stringToHclTerraform(this._signerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signer_key: {
        value: cdktf.stringToHclTerraform(this._signerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_age: {
        value: cdktf.numberToHclTerraform(this._statusAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      strict_resp_cert_check: {
        value: cdktf.stringToHclTerraform(this._strictRespCertCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_responders: {
        value: cdktf.stringToHclTerraform(this._trustedResponders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
