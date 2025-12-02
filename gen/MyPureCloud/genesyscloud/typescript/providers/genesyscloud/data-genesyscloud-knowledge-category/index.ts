// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/knowledge_category
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGenesyscloudKnowledgeCategoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/knowledge_category#id DataGenesyscloudKnowledgeCategory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Knowledge base name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/knowledge_category#knowledge_base_name DataGenesyscloudKnowledgeCategory#knowledge_base_name}
  */
  readonly knowledgeBaseName: string;
  /**
  * Knowledge base category name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/knowledge_category#name DataGenesyscloudKnowledgeCategory#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/knowledge_category genesyscloud_knowledge_category}
*/
export class DataGenesyscloudKnowledgeCategory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_knowledge_category";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGenesyscloudKnowledgeCategory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGenesyscloudKnowledgeCategory to import
  * @param importFromId The id of the existing DataGenesyscloudKnowledgeCategory that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/knowledge_category#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGenesyscloudKnowledgeCategory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_knowledge_category", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/knowledge_category genesyscloud_knowledge_category} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGenesyscloudKnowledgeCategoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataGenesyscloudKnowledgeCategoryConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_knowledge_category',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
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
    this._knowledgeBaseName = config.knowledgeBaseName;
    this._name = config.name;
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

  // knowledge_base_name - computed: false, optional: false, required: true
  private _knowledgeBaseName?: string; 
  public get knowledgeBaseName() {
    return this.getStringAttribute('knowledge_base_name');
  }
  public set knowledgeBaseName(value: string) {
    this._knowledgeBaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseNameInput() {
    return this._knowledgeBaseName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      knowledge_base_name: cdktf.stringToTerraform(this._knowledgeBaseName),
      name: cdktf.stringToTerraform(this._name),
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
      knowledge_base_name: {
        value: cdktf.stringToHclTerraform(this._knowledgeBaseName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
