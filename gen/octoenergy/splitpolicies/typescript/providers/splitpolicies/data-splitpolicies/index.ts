// https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs/data-sources/splitpolicies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSplitpoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs/data-sources/splitpolicies#maximum_chunk_size DataSplitpolicies#maximum_chunk_size}
  */
  readonly maximumChunkSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs/data-sources/splitpolicies#policies DataSplitpolicies#policies}
  */
  readonly policies: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs/data-sources/splitpolicies splitpolicies}
*/
export class DataSplitpolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splitpolicies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSplitpolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSplitpolicies to import
  * @param importFromId The id of the existing DataSplitpolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs/data-sources/splitpolicies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSplitpolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splitpolicies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs/data-sources/splitpolicies splitpolicies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSplitpoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSplitpoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'splitpolicies',
      terraformGeneratorMetadata: {
        providerName: 'splitpolicies',
        providerVersion: '0.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._maximumChunkSize = config.maximumChunkSize;
    this._policies = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chunks - computed: true, optional: false, required: false
  private _chunks = new cdktf.StringListMap(this, "chunks");
  public get chunks() {
    return this._chunks;
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_chunk_size - computed: false, optional: true, required: false
  private _maximumChunkSize?: number; 
  public get maximumChunkSize() {
    return this.getNumberAttribute('maximum_chunk_size');
  }
  public set maximumChunkSize(value: number) {
    this._maximumChunkSize = value;
  }
  public resetMaximumChunkSize() {
    this._maximumChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumChunkSizeInput() {
    return this._maximumChunkSize;
  }

  // policies - computed: false, optional: false, required: true
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      maximum_chunk_size: cdktf.numberToTerraform(this._maximumChunkSize),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      maximum_chunk_size: {
        value: cdktf.numberToHclTerraform(this._maximumChunkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
