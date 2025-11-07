// https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/indexing_state
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexingStateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the live indexing should be running or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/indexing_state#active IndexingState#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/indexing_state#id IndexingState#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/indexing_state#object_group_name IndexingState#object_group_name}
  */
  readonly objectGroupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/indexing_state chaossearch_indexing_state}
*/
export class IndexingState extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chaossearch_indexing_state";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexingState resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexingState to import
  * @param importFromId The id of the existing IndexingState that should be imported. Refer to the {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/indexing_state#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexingState to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chaossearch_indexing_state", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/indexing_state chaossearch_indexing_state} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexingStateConfig
  */
  public constructor(scope: Construct, id: string, config: IndexingStateConfig) {
    super(scope, id, {
      terraformResourceType: 'chaossearch_indexing_state',
      terraformGeneratorMetadata: {
        providerName: 'chaossearch',
        providerVersion: '0.12.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._id = config.id;
    this._objectGroupName = config.objectGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // object_group_name - computed: false, optional: false, required: true
  private _objectGroupName?: string; 
  public get objectGroupName() {
    return this.getStringAttribute('object_group_name');
  }
  public set objectGroupName(value: string) {
    this._objectGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupNameInput() {
    return this._objectGroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      id: cdktf.stringToTerraform(this._id),
      object_group_name: cdktf.stringToTerraform(this._objectGroupName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_group_name: {
        value: cdktf.stringToHclTerraform(this._objectGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
