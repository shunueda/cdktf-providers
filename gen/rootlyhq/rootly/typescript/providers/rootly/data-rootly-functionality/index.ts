// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/functionality
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyFunctionalityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/functionality#backstage_id DataRootlyFunctionality#backstage_id}
  */
  readonly backstageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/functionality#cortex_id DataRootlyFunctionality#cortex_id}
  */
  readonly cortexId?: string;
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/functionality#created_at DataRootlyFunctionality#created_at}
  */
  readonly createdAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/functionality#external_id DataRootlyFunctionality#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/functionality#name DataRootlyFunctionality#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/functionality#slug DataRootlyFunctionality#slug}
  */
  readonly slug?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/functionality rootly_functionality}
*/
export class DataRootlyFunctionality extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_functionality";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyFunctionality resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyFunctionality to import
  * @param importFromId The id of the existing DataRootlyFunctionality that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/functionality#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyFunctionality to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_functionality", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/functionality rootly_functionality} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyFunctionalityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyFunctionalityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_functionality',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backstageId = config.backstageId;
    this._cortexId = config.cortexId;
    this._createdAt = config.createdAt;
    this._externalId = config.externalId;
    this._name = config.name;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backstage_id - computed: true, optional: true, required: false
  private _backstageId?: string; 
  public get backstageId() {
    return this.getStringAttribute('backstage_id');
  }
  public set backstageId(value: string) {
    this._backstageId = value;
  }
  public resetBackstageId() {
    this._backstageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backstageIdInput() {
    return this._backstageId;
  }

  // cortex_id - computed: true, optional: true, required: false
  private _cortexId?: string; 
  public get cortexId() {
    return this.getStringAttribute('cortex_id');
  }
  public set cortexId(value: string) {
    this._cortexId = value;
  }
  public resetCortexId() {
    this._cortexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cortexIdInput() {
    return this._cortexId;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: { [key: string]: string }; 
  public get createdAt() {
    return this.getStringMapAttribute('created_at');
  }
  public set createdAt(value: { [key: string]: string }) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backstage_id: cdktf.stringToTerraform(this._backstageId),
      cortex_id: cdktf.stringToTerraform(this._cortexId),
      created_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._createdAt),
      external_id: cdktf.stringToTerraform(this._externalId),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backstage_id: {
        value: cdktf.stringToHclTerraform(this._backstageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cortex_id: {
        value: cdktf.stringToHclTerraform(this._cortexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._createdAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
