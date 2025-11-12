// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * If enabled, SmartConnect treats subdomains of known dns zones as the known dns zone. This is required for S3 Virtual Host domains. Defaults to True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet#allow_wildcard_subdomains Groupnet#allow_wildcard_subdomains}
  */
  readonly allowWildcardSubdomains?: boolean | cdktf.IResolvable;
  /**
  * A description of the groupnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet#description Groupnet#description}
  */
  readonly description?: string;
  /**
  * DNS caching is enabled or disabled. Defaults to True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet#dns_cache_enabled Groupnet#dns_cache_enabled}
  */
  readonly dnsCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable DNS resolver rotate. Defaults to False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet#dns_resolver_rotate Groupnet#dns_resolver_rotate}
  */
  readonly dnsResolverRotate?: boolean | cdktf.IResolvable;
  /**
  * List of DNS search suffixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet#dns_search Groupnet#dns_search}
  */
  readonly dnsSearch?: string[];
  /**
  * List of Domain Name Server IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet#dns_servers Groupnet#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * The name of the groupnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet#name Groupnet#name}
  */
  readonly name: string;
  /**
  * Enable or disable appending nodes DNS search list to client DNS inquiries directed at SmartConnect service IP. Defaults to True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet#server_side_dns_search Groupnet#server_side_dns_search}
  */
  readonly serverSideDnsSearch?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet powerscale_groupnet}
*/
export class Groupnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_groupnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Groupnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Groupnet to import
  * @param importFromId The id of the existing Groupnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Groupnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_groupnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/groupnet powerscale_groupnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupnetConfig
  */
  public constructor(scope: Construct, id: string, config: GroupnetConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_groupnet',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowWildcardSubdomains = config.allowWildcardSubdomains;
    this._description = config.description;
    this._dnsCacheEnabled = config.dnsCacheEnabled;
    this._dnsResolverRotate = config.dnsResolverRotate;
    this._dnsSearch = config.dnsSearch;
    this._dnsServers = config.dnsServers;
    this._name = config.name;
    this._serverSideDnsSearch = config.serverSideDnsSearch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_wildcard_subdomains - computed: true, optional: true, required: false
  private _allowWildcardSubdomains?: boolean | cdktf.IResolvable; 
  public get allowWildcardSubdomains() {
    return this.getBooleanAttribute('allow_wildcard_subdomains');
  }
  public set allowWildcardSubdomains(value: boolean | cdktf.IResolvable) {
    this._allowWildcardSubdomains = value;
  }
  public resetAllowWildcardSubdomains() {
    this._allowWildcardSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWildcardSubdomainsInput() {
    return this._allowWildcardSubdomains;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dns_cache_enabled - computed: true, optional: true, required: false
  private _dnsCacheEnabled?: boolean | cdktf.IResolvable; 
  public get dnsCacheEnabled() {
    return this.getBooleanAttribute('dns_cache_enabled');
  }
  public set dnsCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._dnsCacheEnabled = value;
  }
  public resetDnsCacheEnabled() {
    this._dnsCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheEnabledInput() {
    return this._dnsCacheEnabled;
  }

  // dns_resolver_rotate - computed: true, optional: true, required: false
  private _dnsResolverRotate?: boolean | cdktf.IResolvable; 
  public get dnsResolverRotate() {
    return this.getBooleanAttribute('dns_resolver_rotate');
  }
  public set dnsResolverRotate(value: boolean | cdktf.IResolvable) {
    this._dnsResolverRotate = value;
  }
  public resetDnsResolverRotate() {
    this._dnsResolverRotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolverRotateInput() {
    return this._dnsResolverRotate;
  }

  // dns_search - computed: false, optional: true, required: false
  private _dnsSearch?: string[]; 
  public get dnsSearch() {
    return this.getListAttribute('dns_search');
  }
  public set dnsSearch(value: string[]) {
    this._dnsSearch = value;
  }
  public resetDnsSearch() {
    this._dnsSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchInput() {
    return this._dnsSearch;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // server_side_dns_search - computed: true, optional: true, required: false
  private _serverSideDnsSearch?: boolean | cdktf.IResolvable; 
  public get serverSideDnsSearch() {
    return this.getBooleanAttribute('server_side_dns_search');
  }
  public set serverSideDnsSearch(value: boolean | cdktf.IResolvable) {
    this._serverSideDnsSearch = value;
  }
  public resetServerSideDnsSearch() {
    this._serverSideDnsSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideDnsSearchInput() {
    return this._serverSideDnsSearch;
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_wildcard_subdomains: cdktf.booleanToTerraform(this._allowWildcardSubdomains),
      description: cdktf.stringToTerraform(this._description),
      dns_cache_enabled: cdktf.booleanToTerraform(this._dnsCacheEnabled),
      dns_resolver_rotate: cdktf.booleanToTerraform(this._dnsResolverRotate),
      dns_search: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSearch),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      name: cdktf.stringToTerraform(this._name),
      server_side_dns_search: cdktf.booleanToTerraform(this._serverSideDnsSearch),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_wildcard_subdomains: {
        value: cdktf.booleanToHclTerraform(this._allowWildcardSubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._dnsCacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_resolver_rotate: {
        value: cdktf.booleanToHclTerraform(this._dnsResolverRotate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_search: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSearch),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_side_dns_search: {
        value: cdktf.booleanToHclTerraform(this._serverSideDnsSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
