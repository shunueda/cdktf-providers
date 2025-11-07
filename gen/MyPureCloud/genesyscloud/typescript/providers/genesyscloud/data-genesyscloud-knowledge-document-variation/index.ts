// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/knowledge_document_variation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGenesyscloudKnowledgeDocumentVariationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/knowledge_document_variation#id DataGenesyscloudKnowledgeDocumentVariation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Knowledge base id of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/knowledge_document_variation#knowledge_base_id DataGenesyscloudKnowledgeDocumentVariation#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * Knowledge document id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/knowledge_document_variation#knowledge_document_id DataGenesyscloudKnowledgeDocumentVariation#knowledge_document_id}
  */
  readonly knowledgeDocumentId: string;
  /**
  * The name of the variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/knowledge_document_variation#name DataGenesyscloudKnowledgeDocumentVariation#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/knowledge_document_variation genesyscloud_knowledge_document_variation}
*/
export class DataGenesyscloudKnowledgeDocumentVariation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_knowledge_document_variation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGenesyscloudKnowledgeDocumentVariation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGenesyscloudKnowledgeDocumentVariation to import
  * @param importFromId The id of the existing DataGenesyscloudKnowledgeDocumentVariation that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/knowledge_document_variation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGenesyscloudKnowledgeDocumentVariation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_knowledge_document_variation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/knowledge_document_variation genesyscloud_knowledge_document_variation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGenesyscloudKnowledgeDocumentVariationConfig
  */
  public constructor(scope: Construct, id: string, config: DataGenesyscloudKnowledgeDocumentVariationConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_knowledge_document_variation',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
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
    this._knowledgeBaseId = config.knowledgeBaseId;
    this._knowledgeDocumentId = config.knowledgeDocumentId;
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

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }

  // knowledge_document_id - computed: false, optional: false, required: true
  private _knowledgeDocumentId?: string; 
  public get knowledgeDocumentId() {
    return this.getStringAttribute('knowledge_document_id');
  }
  public set knowledgeDocumentId(value: string) {
    this._knowledgeDocumentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeDocumentIdInput() {
    return this._knowledgeDocumentId;
  }

  // name - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      knowledge_base_id: cdktf.stringToTerraform(this._knowledgeBaseId),
      knowledge_document_id: cdktf.stringToTerraform(this._knowledgeDocumentId),
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
      knowledge_base_id: {
        value: cdktf.stringToHclTerraform(this._knowledgeBaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      knowledge_document_id: {
        value: cdktf.stringToHclTerraform(this._knowledgeDocumentId),
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
