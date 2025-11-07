// https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource#akas Resource#akas}
  */
  readonly akas?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource#data Resource#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource#full_data Resource#full_data}
  */
  readonly fullData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource#full_metadata Resource#full_metadata}
  */
  readonly fullMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource#id Resource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource#metadata Resource#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource#parent Resource#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource#tags Resource#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource#type Resource#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource turbot_resource}
*/
export class Resource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "turbot_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Resource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resource to import
  * @param importFromId The id of the existing Resource that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "turbot_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/resource turbot_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'turbot_resource',
      terraformGeneratorMetadata: {
        providerName: 'turbot',
        providerVersion: '1.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._akas = config.akas;
    this._data = config.data;
    this._fullData = config.fullData;
    this._fullMetadata = config.fullMetadata;
    this._id = config.id;
    this._metadata = config.metadata;
    this._parent = config.parent;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // akas - computed: false, optional: true, required: false
  private _akas?: string[]; 
  public get akas() {
    return this.getListAttribute('akas');
  }
  public set akas(value: string[]) {
    this._akas = value;
  }
  public resetAkas() {
    this._akas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akasInput() {
    return this._akas;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // full_data - computed: false, optional: true, required: false
  private _fullData?: string; 
  public get fullData() {
    return this.getStringAttribute('full_data');
  }
  public set fullData(value: string) {
    this._fullData = value;
  }
  public resetFullData() {
    this._fullData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDataInput() {
    return this._fullData;
  }

  // full_metadata - computed: false, optional: true, required: false
  private _fullMetadata?: string; 
  public get fullMetadata() {
    return this.getStringAttribute('full_metadata');
  }
  public set fullMetadata(value: string) {
    this._fullMetadata = value;
  }
  public resetFullMetadata() {
    this._fullMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullMetadataInput() {
    return this._fullMetadata;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // parent_akas - computed: true, optional: false, required: false
  public get parentAkas() {
    return this.getListAttribute('parent_akas');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      akas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._akas),
      data: cdktf.stringToTerraform(this._data),
      full_data: cdktf.stringToTerraform(this._fullData),
      full_metadata: cdktf.stringToTerraform(this._fullMetadata),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.stringToTerraform(this._metadata),
      parent: cdktf.stringToTerraform(this._parent),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      akas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._akas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_data: {
        value: cdktf.stringToHclTerraform(this._fullData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_metadata: {
        value: cdktf.stringToHclTerraform(this._fullMetadata),
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
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
