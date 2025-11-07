// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedirectionHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * The advanced configuration used by the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#advanced_config RedirectionHost#advanced_config}
  */
  readonly advancedConfig?: string;
  /**
  * Whether exploits are blocked for the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#block_exploits RedirectionHost#block_exploits}
  */
  readonly blockExploits?: boolean | cdktf.IResolvable;
  /**
  * The Id of the certificate used by the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#certificate_id RedirectionHost#certificate_id}
  */
  readonly certificateId?: number;
  /**
  * The domain names associated with the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#domain_names RedirectionHost#domain_names}
  */
  readonly domainNames: string[];
  /**
  * Whether the redirection host is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#enabled RedirectionHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The domain name used to forward requests to the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#forward_domain_name RedirectionHost#forward_domain_name}
  */
  readonly forwardDomainName: string;
  /**
  * The HTTP code used to forward requests to the redirection host. Must be one of `300`, `301`, `302`, `303`, `307` or `308`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#forward_http_code RedirectionHost#forward_http_code}
  */
  readonly forwardHttpCode?: number;
  /**
  * The scheme used to forward requests to the redirection host. Must be one of `auto`, `http` or `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#forward_scheme RedirectionHost#forward_scheme}
  */
  readonly forwardScheme?: string;
  /**
  * Whether HSTS is enabled for the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#hsts_enabled RedirectionHost#hsts_enabled}
  */
  readonly hstsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether HSTS is enabled for subdomains of the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#hsts_subdomains RedirectionHost#hsts_subdomains}
  */
  readonly hstsSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Whether HTTP/2 is supported for the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#http2_support RedirectionHost#http2_support}
  */
  readonly http2Support?: boolean | cdktf.IResolvable;
  /**
  * Whether the path is preserved for the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#preserve_path RedirectionHost#preserve_path}
  */
  readonly preservePath?: boolean | cdktf.IResolvable;
  /**
  * Whether SSL is forced for the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#ssl_forced RedirectionHost#ssl_forced}
  */
  readonly sslForced?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host nginxproxymanager_redirection_host}
*/
export class RedirectionHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_redirection_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedirectionHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedirectionHost to import
  * @param importFromId The id of the existing RedirectionHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedirectionHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_redirection_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/redirection_host nginxproxymanager_redirection_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedirectionHostConfig
  */
  public constructor(scope: Construct, id: string, config: RedirectionHostConfig) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_redirection_host',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedConfig = config.advancedConfig;
    this._blockExploits = config.blockExploits;
    this._certificateId = config.certificateId;
    this._domainNames = config.domainNames;
    this._enabled = config.enabled;
    this._forwardDomainName = config.forwardDomainName;
    this._forwardHttpCode = config.forwardHttpCode;
    this._forwardScheme = config.forwardScheme;
    this._hstsEnabled = config.hstsEnabled;
    this._hstsSubdomains = config.hstsSubdomains;
    this._http2Support = config.http2Support;
    this._preservePath = config.preservePath;
    this._sslForced = config.sslForced;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_config - computed: true, optional: true, required: false
  private _advancedConfig?: string; 
  public get advancedConfig() {
    return this.getStringAttribute('advanced_config');
  }
  public set advancedConfig(value: string) {
    this._advancedConfig = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig;
  }

  // block_exploits - computed: true, optional: true, required: false
  private _blockExploits?: boolean | cdktf.IResolvable; 
  public get blockExploits() {
    return this.getBooleanAttribute('block_exploits');
  }
  public set blockExploits(value: boolean | cdktf.IResolvable) {
    this._blockExploits = value;
  }
  public resetBlockExploits() {
    this._blockExploits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExploitsInput() {
    return this._blockExploits;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: number; 
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }
  public set certificateId(value: number) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // domain_names - computed: false, optional: false, required: true
  private _domainNames?: string[]; 
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // forward_domain_name - computed: false, optional: false, required: true
  private _forwardDomainName?: string; 
  public get forwardDomainName() {
    return this.getStringAttribute('forward_domain_name');
  }
  public set forwardDomainName(value: string) {
    this._forwardDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDomainNameInput() {
    return this._forwardDomainName;
  }

  // forward_http_code - computed: true, optional: true, required: false
  private _forwardHttpCode?: number; 
  public get forwardHttpCode() {
    return this.getNumberAttribute('forward_http_code');
  }
  public set forwardHttpCode(value: number) {
    this._forwardHttpCode = value;
  }
  public resetForwardHttpCode() {
    this._forwardHttpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHttpCodeInput() {
    return this._forwardHttpCode;
  }

  // forward_scheme - computed: true, optional: true, required: false
  private _forwardScheme?: string; 
  public get forwardScheme() {
    return this.getStringAttribute('forward_scheme');
  }
  public set forwardScheme(value: string) {
    this._forwardScheme = value;
  }
  public resetForwardScheme() {
    this._forwardScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSchemeInput() {
    return this._forwardScheme;
  }

  // hsts_enabled - computed: true, optional: true, required: false
  private _hstsEnabled?: boolean | cdktf.IResolvable; 
  public get hstsEnabled() {
    return this.getBooleanAttribute('hsts_enabled');
  }
  public set hstsEnabled(value: boolean | cdktf.IResolvable) {
    this._hstsEnabled = value;
  }
  public resetHstsEnabled() {
    this._hstsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsEnabledInput() {
    return this._hstsEnabled;
  }

  // hsts_subdomains - computed: true, optional: true, required: false
  private _hstsSubdomains?: boolean | cdktf.IResolvable; 
  public get hstsSubdomains() {
    return this.getBooleanAttribute('hsts_subdomains');
  }
  public set hstsSubdomains(value: boolean | cdktf.IResolvable) {
    this._hstsSubdomains = value;
  }
  public resetHstsSubdomains() {
    this._hstsSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsSubdomainsInput() {
    return this._hstsSubdomains;
  }

  // http2_support - computed: true, optional: true, required: false
  private _http2Support?: boolean | cdktf.IResolvable; 
  public get http2Support() {
    return this.getBooleanAttribute('http2_support');
  }
  public set http2Support(value: boolean | cdktf.IResolvable) {
    this._http2Support = value;
  }
  public resetHttp2Support() {
    this._http2Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2SupportInput() {
    return this._http2Support;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }

  // preserve_path - computed: true, optional: true, required: false
  private _preservePath?: boolean | cdktf.IResolvable; 
  public get preservePath() {
    return this.getBooleanAttribute('preserve_path');
  }
  public set preservePath(value: boolean | cdktf.IResolvable) {
    this._preservePath = value;
  }
  public resetPreservePath() {
    this._preservePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservePathInput() {
    return this._preservePath;
  }

  // ssl_forced - computed: true, optional: true, required: false
  private _sslForced?: boolean | cdktf.IResolvable; 
  public get sslForced() {
    return this.getBooleanAttribute('ssl_forced');
  }
  public set sslForced(value: boolean | cdktf.IResolvable) {
    this._sslForced = value;
  }
  public resetSslForced() {
    this._sslForced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslForcedInput() {
    return this._sslForced;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_config: cdktf.stringToTerraform(this._advancedConfig),
      block_exploits: cdktf.booleanToTerraform(this._blockExploits),
      certificate_id: cdktf.numberToTerraform(this._certificateId),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      enabled: cdktf.booleanToTerraform(this._enabled),
      forward_domain_name: cdktf.stringToTerraform(this._forwardDomainName),
      forward_http_code: cdktf.numberToTerraform(this._forwardHttpCode),
      forward_scheme: cdktf.stringToTerraform(this._forwardScheme),
      hsts_enabled: cdktf.booleanToTerraform(this._hstsEnabled),
      hsts_subdomains: cdktf.booleanToTerraform(this._hstsSubdomains),
      http2_support: cdktf.booleanToTerraform(this._http2Support),
      preserve_path: cdktf.booleanToTerraform(this._preservePath),
      ssl_forced: cdktf.booleanToTerraform(this._sslForced),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_config: {
        value: cdktf.stringToHclTerraform(this._advancedConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_exploits: {
        value: cdktf.booleanToHclTerraform(this._blockExploits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_id: {
        value: cdktf.numberToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_domain_name: {
        value: cdktf.stringToHclTerraform(this._forwardDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_http_code: {
        value: cdktf.numberToHclTerraform(this._forwardHttpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_scheme: {
        value: cdktf.stringToHclTerraform(this._forwardScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsts_enabled: {
        value: cdktf.booleanToHclTerraform(this._hstsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hsts_subdomains: {
        value: cdktf.booleanToHclTerraform(this._hstsSubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http2_support: {
        value: cdktf.booleanToHclTerraform(this._http2Support),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preserve_path: {
        value: cdktf.booleanToHclTerraform(this._preservePath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_forced: {
        value: cdktf.booleanToHclTerraform(this._sslForced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
