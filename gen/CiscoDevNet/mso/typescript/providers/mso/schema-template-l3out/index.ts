// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateL3OutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out#description SchemaTemplateL3Out#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out#display_name SchemaTemplateL3Out#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out#id SchemaTemplateL3Out#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out#l3out_name SchemaTemplateL3Out#l3out_name}
  */
  readonly l3OutName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out#schema_id SchemaTemplateL3Out#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out#template_name SchemaTemplateL3Out#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out#vrf_name SchemaTemplateL3Out#vrf_name}
  */
  readonly vrfName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out#vrf_schema_id SchemaTemplateL3Out#vrf_schema_id}
  */
  readonly vrfSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out#vrf_template_name SchemaTemplateL3Out#vrf_template_name}
  */
  readonly vrfTemplateName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out mso_schema_template_l3out}
*/
export class SchemaTemplateL3Out extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_l3out";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateL3Out resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateL3Out to import
  * @param importFromId The id of the existing SchemaTemplateL3Out that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateL3Out to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_l3out", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_l3out mso_schema_template_l3out} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateL3OutConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateL3OutConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_l3out',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._l3OutName = config.l3OutName;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
    this._vrfName = config.vrfName;
    this._vrfSchemaId = config.vrfSchemaId;
    this._vrfTemplateName = config.vrfTemplateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // l3out_name - computed: false, optional: false, required: true
  private _l3OutName?: string; 
  public get l3OutName() {
    return this.getStringAttribute('l3out_name');
  }
  public set l3OutName(value: string) {
    this._l3OutName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutNameInput() {
    return this._l3OutName;
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

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // vrf_schema_id - computed: true, optional: true, required: false
  private _vrfSchemaId?: string; 
  public get vrfSchemaId() {
    return this.getStringAttribute('vrf_schema_id');
  }
  public set vrfSchemaId(value: string) {
    this._vrfSchemaId = value;
  }
  public resetVrfSchemaId() {
    this._vrfSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSchemaIdInput() {
    return this._vrfSchemaId;
  }

  // vrf_template_name - computed: true, optional: true, required: false
  private _vrfTemplateName?: string; 
  public get vrfTemplateName() {
    return this.getStringAttribute('vrf_template_name');
  }
  public set vrfTemplateName(value: string) {
    this._vrfTemplateName = value;
  }
  public resetVrfTemplateName() {
    this._vrfTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTemplateNameInput() {
    return this._vrfTemplateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      l3out_name: cdktf.stringToTerraform(this._l3OutName),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
      vrf_schema_id: cdktf.stringToTerraform(this._vrfSchemaId),
      vrf_template_name: cdktf.stringToTerraform(this._vrfTemplateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      l3out_name: {
        value: cdktf.stringToHclTerraform(this._l3OutName),
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
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_schema_id: {
        value: cdktf.stringToHclTerraform(this._vrfSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_template_name: {
        value: cdktf.stringToHclTerraform(this._vrfTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
