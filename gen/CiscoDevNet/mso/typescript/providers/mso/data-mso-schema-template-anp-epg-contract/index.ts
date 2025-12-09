// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaTemplateAnpEpgContractConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract#anp_name DataMsoSchemaTemplateAnpEpgContract#anp_name}
  */
  readonly anpName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract#contract_name DataMsoSchemaTemplateAnpEpgContract#contract_name}
  */
  readonly contractName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract#contract_schema_id DataMsoSchemaTemplateAnpEpgContract#contract_schema_id}
  */
  readonly contractSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract#contract_template_name DataMsoSchemaTemplateAnpEpgContract#contract_template_name}
  */
  readonly contractTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract#epg_name DataMsoSchemaTemplateAnpEpgContract#epg_name}
  */
  readonly epgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract#id DataMsoSchemaTemplateAnpEpgContract#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract#schema_id DataMsoSchemaTemplateAnpEpgContract#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract#template_name DataMsoSchemaTemplateAnpEpgContract#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract mso_schema_template_anp_epg_contract}
*/
export class DataMsoSchemaTemplateAnpEpgContract extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_anp_epg_contract";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaTemplateAnpEpgContract resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaTemplateAnpEpgContract to import
  * @param importFromId The id of the existing DataMsoSchemaTemplateAnpEpgContract that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaTemplateAnpEpgContract to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_anp_epg_contract", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_anp_epg_contract mso_schema_template_anp_epg_contract} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaTemplateAnpEpgContractConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaTemplateAnpEpgContractConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_anp_epg_contract',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anpName = config.anpName;
    this._contractName = config.contractName;
    this._contractSchemaId = config.contractSchemaId;
    this._contractTemplateName = config.contractTemplateName;
    this._epgName = config.epgName;
    this._id = config.id;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anp_name - computed: false, optional: false, required: true
  private _anpName?: string; 
  public get anpName() {
    return this.getStringAttribute('anp_name');
  }
  public set anpName(value: string) {
    this._anpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anpNameInput() {
    return this._anpName;
  }

  // contract_name - computed: false, optional: false, required: true
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // contract_schema_id - computed: true, optional: true, required: false
  private _contractSchemaId?: string; 
  public get contractSchemaId() {
    return this.getStringAttribute('contract_schema_id');
  }
  public set contractSchemaId(value: string) {
    this._contractSchemaId = value;
  }
  public resetContractSchemaId() {
    this._contractSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractSchemaIdInput() {
    return this._contractSchemaId;
  }

  // contract_template_name - computed: true, optional: true, required: false
  private _contractTemplateName?: string; 
  public get contractTemplateName() {
    return this.getStringAttribute('contract_template_name');
  }
  public set contractTemplateName(value: string) {
    this._contractTemplateName = value;
  }
  public resetContractTemplateName() {
    this._contractTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractTemplateNameInput() {
    return this._contractTemplateName;
  }

  // epg_name - computed: false, optional: false, required: true
  private _epgName?: string; 
  public get epgName() {
    return this.getStringAttribute('epg_name');
  }
  public set epgName(value: string) {
    this._epgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epgNameInput() {
    return this._epgName;
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

  // relationship_type - computed: true, optional: false, required: false
  public get relationshipType() {
    return this.getStringAttribute('relationship_type');
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anp_name: cdktf.stringToTerraform(this._anpName),
      contract_name: cdktf.stringToTerraform(this._contractName),
      contract_schema_id: cdktf.stringToTerraform(this._contractSchemaId),
      contract_template_name: cdktf.stringToTerraform(this._contractTemplateName),
      epg_name: cdktf.stringToTerraform(this._epgName),
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anp_name: {
        value: cdktf.stringToHclTerraform(this._anpName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_name: {
        value: cdktf.stringToHclTerraform(this._contractName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_schema_id: {
        value: cdktf.stringToHclTerraform(this._contractSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_template_name: {
        value: cdktf.stringToHclTerraform(this._contractTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epg_name: {
        value: cdktf.stringToHclTerraform(this._epgName),
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
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
