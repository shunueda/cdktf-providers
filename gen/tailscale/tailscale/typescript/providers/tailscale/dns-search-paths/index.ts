// https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_search_paths
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsSearchPathsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_search_paths#id DnsSearchPaths#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Devices on your network will use these domain suffixes to resolve DNS names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_search_paths#search_paths DnsSearchPaths#search_paths}
  */
  readonly searchPaths: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_search_paths tailscale_dns_search_paths}
*/
export class DnsSearchPaths extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailscale_dns_search_paths";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsSearchPaths resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsSearchPaths to import
  * @param importFromId The id of the existing DnsSearchPaths that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_search_paths#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsSearchPaths to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailscale_dns_search_paths", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_search_paths tailscale_dns_search_paths} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsSearchPathsConfig
  */
  public constructor(scope: Construct, id: string, config: DnsSearchPathsConfig) {
    super(scope, id, {
      terraformResourceType: 'tailscale_dns_search_paths',
      terraformGeneratorMetadata: {
        providerName: 'tailscale',
        providerVersion: '0.24.0'
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
    this._searchPaths = config.searchPaths;
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

  // search_paths - computed: false, optional: false, required: true
  private _searchPaths?: string[]; 
  public get searchPaths() {
    return this.getListAttribute('search_paths');
  }
  public set searchPaths(value: string[]) {
    this._searchPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPathsInput() {
    return this._searchPaths;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      search_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._searchPaths),
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
      search_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._searchPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
