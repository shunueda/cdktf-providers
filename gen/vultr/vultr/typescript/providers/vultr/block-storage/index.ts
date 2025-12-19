// https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage#attached_to_instance BlockStorage#attached_to_instance}
  */
  readonly attachedToInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage#block_type BlockStorage#block_type}
  */
  readonly blockType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage#id BlockStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage#label BlockStorage#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage#live BlockStorage#live}
  */
  readonly live?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage#region BlockStorage#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage#size_gb BlockStorage#size_gb}
  */
  readonly sizeGb: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage vultr_block_storage}
*/
export class BlockStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_block_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockStorage to import
  * @param importFromId The id of the existing BlockStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_block_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/block_storage vultr_block_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockStorageConfig
  */
  public constructor(scope: Construct, id: string, config: BlockStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr_block_storage',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.28.0',
        providerVersionConstraint: '2.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachedToInstance = config.attachedToInstance;
    this._blockType = config.blockType;
    this._id = config.id;
    this._label = config.label;
    this._live = config.live;
    this._region = config.region;
    this._sizeGb = config.sizeGb;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_to_instance - computed: false, optional: true, required: false
  private _attachedToInstance?: string; 
  public get attachedToInstance() {
    return this.getStringAttribute('attached_to_instance');
  }
  public set attachedToInstance(value: string) {
    this._attachedToInstance = value;
  }
  public resetAttachedToInstance() {
    this._attachedToInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedToInstanceInput() {
    return this._attachedToInstance;
  }

  // block_type - computed: true, optional: true, required: false
  private _blockType?: string; 
  public get blockType() {
    return this.getStringAttribute('block_type');
  }
  public set blockType(value: string) {
    this._blockType = value;
  }
  public resetBlockType() {
    this._blockType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTypeInput() {
    return this._blockType;
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // live - computed: false, optional: true, required: false
  private _live?: boolean | cdktf.IResolvable; 
  public get live() {
    return this.getBooleanAttribute('live');
  }
  public set live(value: boolean | cdktf.IResolvable) {
    this._live = value;
  }
  public resetLive() {
    this._live = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveInput() {
    return this._live;
  }

  // mount_id - computed: true, optional: false, required: false
  public get mountId() {
    return this.getStringAttribute('mount_id');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attached_to_instance: cdktf.stringToTerraform(this._attachedToInstance),
      block_type: cdktf.stringToTerraform(this._blockType),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      live: cdktf.booleanToTerraform(this._live),
      region: cdktf.stringToTerraform(this._region),
      size_gb: cdktf.numberToTerraform(this._sizeGb),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attached_to_instance: {
        value: cdktf.stringToHclTerraform(this._attachedToInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_type: {
        value: cdktf.stringToHclTerraform(this._blockType),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      live: {
        value: cdktf.booleanToHclTerraform(this._live),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_gb: {
        value: cdktf.numberToHclTerraform(this._sizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
