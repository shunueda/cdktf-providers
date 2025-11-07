// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#cache_notfound_responses SystemDns#cache_notfound_responses}
  */
  readonly cacheNotfoundResponses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#dns_cache_limit SystemDns#dns_cache_limit}
  */
  readonly dnsCacheLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#dns_cache_ttl SystemDns#dns_cache_ttl}
  */
  readonly dnsCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#domain SystemDns#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#id SystemDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#ip6_primary SystemDns#ip6_primary}
  */
  readonly ip6Primary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#ip6_secondary SystemDns#ip6_secondary}
  */
  readonly ip6Secondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#primary SystemDns#primary}
  */
  readonly primary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#secondary SystemDns#secondary}
  */
  readonly secondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#source_ip SystemDns#source_ip}
  */
  readonly sourceIp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns fortiswitch_system_dns}
*/
export class SystemDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDns to import
  * @param importFromId The id of the existing SystemDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_dns fortiswitch_system_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDnsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDnsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_dns',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheNotfoundResponses = config.cacheNotfoundResponses;
    this._dnsCacheLimit = config.dnsCacheLimit;
    this._dnsCacheTtl = config.dnsCacheTtl;
    this._domain = config.domain;
    this._id = config.id;
    this._ip6Primary = config.ip6Primary;
    this._ip6Secondary = config.ip6Secondary;
    this._primary = config.primary;
    this._secondary = config.secondary;
    this._sourceIp = config.sourceIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_notfound_responses - computed: true, optional: true, required: false
  private _cacheNotfoundResponses?: string; 
  public get cacheNotfoundResponses() {
    return this.getStringAttribute('cache_notfound_responses');
  }
  public set cacheNotfoundResponses(value: string) {
    this._cacheNotfoundResponses = value;
  }
  public resetCacheNotfoundResponses() {
    this._cacheNotfoundResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNotfoundResponsesInput() {
    return this._cacheNotfoundResponses;
  }

  // dns_cache_limit - computed: true, optional: true, required: false
  private _dnsCacheLimit?: number; 
  public get dnsCacheLimit() {
    return this.getNumberAttribute('dns_cache_limit');
  }
  public set dnsCacheLimit(value: number) {
    this._dnsCacheLimit = value;
  }
  public resetDnsCacheLimit() {
    this._dnsCacheLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheLimitInput() {
    return this._dnsCacheLimit;
  }

  // dns_cache_ttl - computed: true, optional: true, required: false
  private _dnsCacheTtl?: number; 
  public get dnsCacheTtl() {
    return this.getNumberAttribute('dns_cache_ttl');
  }
  public set dnsCacheTtl(value: number) {
    this._dnsCacheTtl = value;
  }
  public resetDnsCacheTtl() {
    this._dnsCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheTtlInput() {
    return this._dnsCacheTtl;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // ip6_primary - computed: true, optional: true, required: false
  private _ip6Primary?: string; 
  public get ip6Primary() {
    return this.getStringAttribute('ip6_primary');
  }
  public set ip6Primary(value: string) {
    this._ip6Primary = value;
  }
  public resetIp6Primary() {
    this._ip6Primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrimaryInput() {
    return this._ip6Primary;
  }

  // ip6_secondary - computed: true, optional: true, required: false
  private _ip6Secondary?: string; 
  public get ip6Secondary() {
    return this.getStringAttribute('ip6_secondary');
  }
  public set ip6Secondary(value: string) {
    this._ip6Secondary = value;
  }
  public resetIp6Secondary() {
    this._ip6Secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SecondaryInput() {
    return this._ip6Secondary;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: true, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_notfound_responses: cdktf.stringToTerraform(this._cacheNotfoundResponses),
      dns_cache_limit: cdktf.numberToTerraform(this._dnsCacheLimit),
      dns_cache_ttl: cdktf.numberToTerraform(this._dnsCacheTtl),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      ip6_primary: cdktf.stringToTerraform(this._ip6Primary),
      ip6_secondary: cdktf.stringToTerraform(this._ip6Secondary),
      primary: cdktf.stringToTerraform(this._primary),
      secondary: cdktf.stringToTerraform(this._secondary),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_notfound_responses: {
        value: cdktf.stringToHclTerraform(this._cacheNotfoundResponses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_cache_limit: {
        value: cdktf.numberToHclTerraform(this._dnsCacheLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._dnsCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      ip6_primary: {
        value: cdktf.stringToHclTerraform(this._ip6Primary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_secondary: {
        value: cdktf.stringToHclTerraform(this._ip6Secondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary: {
        value: cdktf.stringToHclTerraform(this._primary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary: {
        value: cdktf.stringToHclTerraform(this._secondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
