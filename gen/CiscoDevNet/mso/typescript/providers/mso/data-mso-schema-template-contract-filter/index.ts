// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaTemplateContractFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter#contract_name DataMsoSchemaTemplateContractFilter#contract_name}
  */
  readonly contractName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter#filter_name DataMsoSchemaTemplateContractFilter#filter_name}
  */
  readonly filterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter#filter_schema_id DataMsoSchemaTemplateContractFilter#filter_schema_id}
  */
  readonly filterSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter#filter_template_name DataMsoSchemaTemplateContractFilter#filter_template_name}
  */
  readonly filterTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter#filter_type DataMsoSchemaTemplateContractFilter#filter_type}
  */
  readonly filterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter#id DataMsoSchemaTemplateContractFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter#schema_id DataMsoSchemaTemplateContractFilter#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter#template_name DataMsoSchemaTemplateContractFilter#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter mso_schema_template_contract_filter}
*/
export class DataMsoSchemaTemplateContractFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_contract_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaTemplateContractFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaTemplateContractFilter to import
  * @param importFromId The id of the existing DataMsoSchemaTemplateContractFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaTemplateContractFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_contract_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_filter mso_schema_template_contract_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaTemplateContractFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaTemplateContractFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_contract_filter',
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
    this._contractName = config.contractName;
    this._filterName = config.filterName;
    this._filterSchemaId = config.filterSchemaId;
    this._filterTemplateName = config.filterTemplateName;
    this._filterType = config.filterType;
    this._id = config.id;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
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

  // directives - computed: true, optional: false, required: false
  public get directives() {
    return this.getListAttribute('directives');
  }

  // filter_name - computed: false, optional: false, required: true
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // filter_schema_id - computed: true, optional: true, required: false
  private _filterSchemaId?: string; 
  public get filterSchemaId() {
    return this.getStringAttribute('filter_schema_id');
  }
  public set filterSchemaId(value: string) {
    this._filterSchemaId = value;
  }
  public resetFilterSchemaId() {
    this._filterSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSchemaIdInput() {
    return this._filterSchemaId;
  }

  // filter_template_name - computed: true, optional: true, required: false
  private _filterTemplateName?: string; 
  public get filterTemplateName() {
    return this.getStringAttribute('filter_template_name');
  }
  public set filterTemplateName(value: string) {
    this._filterTemplateName = value;
  }
  public resetFilterTemplateName() {
    this._filterTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTemplateNameInput() {
    return this._filterTemplateName;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
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
      contract_name: cdktf.stringToTerraform(this._contractName),
      filter_name: cdktf.stringToTerraform(this._filterName),
      filter_schema_id: cdktf.stringToTerraform(this._filterSchemaId),
      filter_template_name: cdktf.stringToTerraform(this._filterTemplateName),
      filter_type: cdktf.stringToTerraform(this._filterType),
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_name: {
        value: cdktf.stringToHclTerraform(this._contractName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_name: {
        value: cdktf.stringToHclTerraform(this._filterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_schema_id: {
        value: cdktf.stringToHclTerraform(this._filterSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_template_name: {
        value: cdktf.stringToHclTerraform(this._filterTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_type: {
        value: cdktf.stringToHclTerraform(this._filterType),
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
