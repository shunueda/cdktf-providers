// https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The block ID of the subdomain (in the specified stack)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/domain#block_id DataNsDomain#block_id}
  */
  readonly blockId: number;
  /**
  * The stack ID that owns this subdomain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/domain#stack_id DataNsDomain#stack_id}
  */
  readonly stackId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/domain ns_domain}
*/
export class DataNsDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsDomain to import
  * @param importFromId The id of the existing DataNsDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/domain ns_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'ns_domain',
      terraformGeneratorMetadata: {
        providerName: 'ns',
        providerVersion: '0.8.0'
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_id: cdktf.numberToTerraform(this._blockId),
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
