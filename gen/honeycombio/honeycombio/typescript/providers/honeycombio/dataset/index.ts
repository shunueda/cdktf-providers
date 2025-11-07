// https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The current delete protection status of the Dataset. Cannot be set to false on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/dataset#delete_protected Dataset#delete_protected}
  */
  readonly deleteProtected?: boolean | cdktf.IResolvable;
  /**
  * The Dataset's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/dataset#description Dataset#description}
  */
  readonly description?: string;
  /**
  * The maximum unpacking depth of nested JSON fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/dataset#expand_json_depth Dataset#expand_json_depth}
  */
  readonly expandJsonDepth?: number;
  /**
  * The name of the Dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/dataset honeycombio_dataset}
*/
export class Dataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dataset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dataset to import
  * @param importFromId The id of the existing Dataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/dataset honeycombio_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_dataset',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.42.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteProtected = config.deleteProtected;
    this._description = config.description;
    this._expandJsonDepth = config.expandJsonDepth;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delete_protected - computed: true, optional: true, required: false
  private _deleteProtected?: boolean | cdktf.IResolvable; 
  public get deleteProtected() {
    return this.getBooleanAttribute('delete_protected');
  }
  public set deleteProtected(value: boolean | cdktf.IResolvable) {
    this._deleteProtected = value;
  }
  public resetDeleteProtected() {
    this._deleteProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectedInput() {
    return this._deleteProtected;
  }

  // description - computed: true, optional: true, required: false
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

  // expand_json_depth - computed: true, optional: true, required: false
  private _expandJsonDepth?: number; 
  public get expandJsonDepth() {
    return this.getNumberAttribute('expand_json_depth');
  }
  public set expandJsonDepth(value: number) {
    this._expandJsonDepth = value;
  }
  public resetExpandJsonDepth() {
    this._expandJsonDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandJsonDepthInput() {
    return this._expandJsonDepth;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_written_at - computed: true, optional: false, required: false
  public get lastWrittenAt() {
    return this.getStringAttribute('last_written_at');
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

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_protected: cdktf.booleanToTerraform(this._deleteProtected),
      description: cdktf.stringToTerraform(this._description),
      expand_json_depth: cdktf.numberToTerraform(this._expandJsonDepth),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_protected: {
        value: cdktf.booleanToHclTerraform(this._deleteProtected),
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
      expand_json_depth: {
        value: cdktf.numberToHclTerraform(this._expandJsonDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
