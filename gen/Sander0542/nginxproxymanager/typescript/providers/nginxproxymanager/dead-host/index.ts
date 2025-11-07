// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeadHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * The advanced configuration used by the dead host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host#advanced_config DeadHost#advanced_config}
  */
  readonly advancedConfig?: string;
  /**
  * The Id of the certificate used by the dead host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host#certificate_id DeadHost#certificate_id}
  */
  readonly certificateId?: number;
  /**
  * The domain names associated with the dead host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host#domain_names DeadHost#domain_names}
  */
  readonly domainNames: string[];
  /**
  * Whether the dead host is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host#enabled DeadHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether HSTS is enabled for the dead host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host#hsts_enabled DeadHost#hsts_enabled}
  */
  readonly hstsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether HSTS is enabled for subdomains of the dead host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host#hsts_subdomains DeadHost#hsts_subdomains}
  */
  readonly hstsSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Whether HTTP/2 is supported for the dead host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host#http2_support DeadHost#http2_support}
  */
  readonly http2Support?: boolean | cdktf.IResolvable;
  /**
  * Whether SSL is forced for the dead host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host#ssl_forced DeadHost#ssl_forced}
  */
  readonly sslForced?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host nginxproxymanager_dead_host}
*/
export class DeadHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_dead_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeadHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeadHost to import
  * @param importFromId The id of the existing DeadHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeadHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_dead_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/dead_host nginxproxymanager_dead_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeadHostConfig
  */
  public constructor(scope: Construct, id: string, config: DeadHostConfig) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_dead_host',
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
    this._certificateId = config.certificateId;
    this._domainNames = config.domainNames;
    this._enabled = config.enabled;
    this._hstsEnabled = config.hstsEnabled;
    this._hstsSubdomains = config.hstsSubdomains;
    this._http2Support = config.http2Support;
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
      certificate_id: cdktf.numberToTerraform(this._certificateId),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hsts_enabled: cdktf.booleanToTerraform(this._hstsEnabled),
      hsts_subdomains: cdktf.booleanToTerraform(this._hstsSubdomains),
      http2_support: cdktf.booleanToTerraform(this._http2Support),
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
