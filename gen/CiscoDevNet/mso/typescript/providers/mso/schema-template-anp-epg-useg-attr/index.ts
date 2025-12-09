// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateAnpEpgUsegAttrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#anp_name SchemaTemplateAnpEpgUsegAttr#anp_name}
  */
  readonly anpName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#category SchemaTemplateAnpEpgUsegAttr#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#description SchemaTemplateAnpEpgUsegAttr#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#epg_name SchemaTemplateAnpEpgUsegAttr#epg_name}
  */
  readonly epgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#id SchemaTemplateAnpEpgUsegAttr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#name SchemaTemplateAnpEpgUsegAttr#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#operator SchemaTemplateAnpEpgUsegAttr#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#schema_id SchemaTemplateAnpEpgUsegAttr#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#template_name SchemaTemplateAnpEpgUsegAttr#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#useg_subnet SchemaTemplateAnpEpgUsegAttr#useg_subnet}
  */
  readonly usegSubnet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#useg_type SchemaTemplateAnpEpgUsegAttr#useg_type}
  */
  readonly usegType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#value SchemaTemplateAnpEpgUsegAttr#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr mso_schema_template_anp_epg_useg_attr}
*/
export class SchemaTemplateAnpEpgUsegAttr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_anp_epg_useg_attr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateAnpEpgUsegAttr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateAnpEpgUsegAttr to import
  * @param importFromId The id of the existing SchemaTemplateAnpEpgUsegAttr that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateAnpEpgUsegAttr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_anp_epg_useg_attr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_useg_attr mso_schema_template_anp_epg_useg_attr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateAnpEpgUsegAttrConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateAnpEpgUsegAttrConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_anp_epg_useg_attr',
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
    this._category = config.category;
    this._description = config.description;
    this._epgName = config.epgName;
    this._id = config.id;
    this._name = config.name;
    this._operator = config.operator;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
    this._usegSubnet = config.usegSubnet;
    this._usegType = config.usegType;
    this._value = config.value;
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

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // useg_subnet - computed: true, optional: true, required: false
  private _usegSubnet?: boolean | cdktf.IResolvable; 
  public get usegSubnet() {
    return this.getBooleanAttribute('useg_subnet');
  }
  public set usegSubnet(value: boolean | cdktf.IResolvable) {
    this._usegSubnet = value;
  }
  public resetUsegSubnet() {
    this._usegSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usegSubnetInput() {
    return this._usegSubnet;
  }

  // useg_type - computed: false, optional: false, required: true
  private _usegType?: string; 
  public get usegType() {
    return this.getStringAttribute('useg_type');
  }
  public set usegType(value: string) {
    this._usegType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usegTypeInput() {
    return this._usegType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anp_name: cdktf.stringToTerraform(this._anpName),
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      epg_name: cdktf.stringToTerraform(this._epgName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      operator: cdktf.stringToTerraform(this._operator),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
      useg_subnet: cdktf.booleanToTerraform(this._usegSubnet),
      useg_type: cdktf.stringToTerraform(this._usegType),
      value: cdktf.stringToTerraform(this._value),
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
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operator: {
        value: cdktf.stringToHclTerraform(this._operator),
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
      useg_subnet: {
        value: cdktf.booleanToHclTerraform(this._usegSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      useg_type: {
        value: cdktf.stringToHclTerraform(this._usegType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
