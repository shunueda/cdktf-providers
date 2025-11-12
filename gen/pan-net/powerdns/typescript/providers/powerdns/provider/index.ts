// https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerdnsProviderConfig {
  /**
  * REST API authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs#api_key PowerdnsProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Content or path of a Root CA to be used to verify PowerDNS's SSL certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs#ca_certificate PowerdnsProvider#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Set cache memory size in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs#cache_mem_size PowerdnsProvider#cache_mem_size}
  */
  readonly cacheMemSize?: string;
  /**
  * Enable cache REST API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs#cache_requests PowerdnsProvider#cache_requests}
  */
  readonly cacheRequests?: boolean | cdktf.IResolvable;
  /**
  * Set cache TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs#cache_ttl PowerdnsProvider#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Disable verification of the PowerDNS server's TLS certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs#insecure_https PowerdnsProvider#insecure_https}
  */
  readonly insecureHttps?: boolean | cdktf.IResolvable;
  /**
  * Location of PowerDNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs#server_url PowerdnsProvider#server_url}
  */
  readonly serverUrl: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs#alias PowerdnsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs powerdns}
*/
export class PowerdnsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerdns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerdnsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerdnsProvider to import
  * @param importFromId The id of the existing PowerdnsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerdnsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerdns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs powerdns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerdnsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PowerdnsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'powerdns',
      terraformGeneratorMetadata: {
        providerName: 'powerdns',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      terraformProviderSource: 'pan-net/powerdns'
    });
    this._apiKey = config.apiKey;
    this._caCertificate = config.caCertificate;
    this._cacheMemSize = config.cacheMemSize;
    this._cacheRequests = config.cacheRequests;
    this._cacheTtl = config.cacheTtl;
    this._insecureHttps = config.insecureHttps;
    this._serverUrl = config.serverUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this._caCertificate;
  }
  public set caCertificate(value: string | undefined) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // cache_mem_size - computed: false, optional: true, required: false
  private _cacheMemSize?: string; 
  public get cacheMemSize() {
    return this._cacheMemSize;
  }
  public set cacheMemSize(value: string | undefined) {
    this._cacheMemSize = value;
  }
  public resetCacheMemSize() {
    this._cacheMemSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMemSizeInput() {
    return this._cacheMemSize;
  }

  // cache_requests - computed: false, optional: true, required: false
  private _cacheRequests?: boolean | cdktf.IResolvable; 
  public get cacheRequests() {
    return this._cacheRequests;
  }
  public set cacheRequests(value: boolean | cdktf.IResolvable | undefined) {
    this._cacheRequests = value;
  }
  public resetCacheRequests() {
    this._cacheRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRequestsInput() {
    return this._cacheRequests;
  }

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this._cacheTtl;
  }
  public set cacheTtl(value: number | undefined) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // insecure_https - computed: false, optional: true, required: false
  private _insecureHttps?: boolean | cdktf.IResolvable; 
  public get insecureHttps() {
    return this._insecureHttps;
  }
  public set insecureHttps(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureHttps = value;
  }
  public resetInsecureHttps() {
    this._insecureHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureHttpsInput() {
    return this._insecureHttps;
  }

  // server_url - computed: false, optional: false, required: true
  private _serverUrl?: string; 
  public get serverUrl() {
    return this._serverUrl;
  }
  public set serverUrl(value: string | undefined) {
    this._serverUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      cache_mem_size: cdktf.stringToTerraform(this._cacheMemSize),
      cache_requests: cdktf.booleanToTerraform(this._cacheRequests),
      cache_ttl: cdktf.numberToTerraform(this._cacheTtl),
      insecure_https: cdktf.booleanToTerraform(this._insecureHttps),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_mem_size: {
        value: cdktf.stringToHclTerraform(this._cacheMemSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_requests: {
        value: cdktf.booleanToHclTerraform(this._cacheRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_ttl: {
        value: cdktf.numberToHclTerraform(this._cacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      insecure_https: {
        value: cdktf.booleanToHclTerraform(this._insecureHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
