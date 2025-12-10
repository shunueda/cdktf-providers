// https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/subdomain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsSubdomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The block ID of the subdomain (in the specified stack)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/subdomain#block_id DataNsSubdomain#block_id}
  */
  readonly blockId: number;
  /**
  * The env ID of the subdomain (in the specified stack)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/subdomain#env_id DataNsSubdomain#env_id}
  */
  readonly envId: number;
  /**
  * The stack ID that owns this subdomain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/subdomain#stack_id DataNsSubdomain#stack_id}
  */
  readonly stackId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/subdomain ns_subdomain}
*/
export class DataNsSubdomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns_subdomain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsSubdomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsSubdomain to import
  * @param importFromId The id of the existing DataNsSubdomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/subdomain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsSubdomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns_subdomain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/subdomain ns_subdomain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsSubdomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsSubdomainConfig) {
    super(scope, id, {
      terraformResourceType: 'ns_subdomain',
      terraformGeneratorMetadata: {
        providerName: 'ns',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockId = config.blockId;
    this._envId = config.envId;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_id - computed: false, optional: false, required: true
  private _blockId?: number; 
  public get blockId() {
    return this.getNumberAttribute('block_id');
  }
  public set blockId(value: number) {
    this._blockId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdInput() {
    return this._blockId;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: number; 
  public get envId() {
    return this.getNumberAttribute('env_id');
  }
  public set envId(value: number) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: number; 
  public get stackId() {
    return this.getNumberAttribute('stack_id');
  }
  public set stackId(value: number) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // subdomain_name - computed: true, optional: false, required: false
  public get subdomainName() {
    return this.getStringAttribute('subdomain_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_id: cdktf.numberToTerraform(this._blockId),
      env_id: cdktf.numberToTerraform(this._envId),
      stack_id: cdktf.numberToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_id: {
        value: cdktf.numberToHclTerraform(this._blockId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      env_id: {
        value: cdktf.numberToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stack_id: {
        value: cdktf.numberToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
