// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaTemplateExternalEpgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg#external_epg_name DataMsoSchemaTemplateExternalEpg#external_epg_name}
  */
  readonly externalEpgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg#id DataMsoSchemaTemplateExternalEpg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg#schema_id DataMsoSchemaTemplateExternalEpg#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg#template_name DataMsoSchemaTemplateExternalEpg#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg mso_schema_template_external_epg}
*/
export class DataMsoSchemaTemplateExternalEpg extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_external_epg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaTemplateExternalEpg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaTemplateExternalEpg to import
  * @param importFromId The id of the existing DataMsoSchemaTemplateExternalEpg that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaTemplateExternalEpg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_external_epg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg mso_schema_template_external_epg} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaTemplateExternalEpgConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaTemplateExternalEpgConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_external_epg',
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
    this._externalEpgName = config.externalEpgName;
    this._id = config.id;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anp_name - computed: true, optional: false, required: false
  public get anpName() {
    return this.getStringAttribute('anp_name');
  }

  // anp_schema_id - computed: true, optional: false, required: false
  public get anpSchemaId() {
    return this.getStringAttribute('anp_schema_id');
  }

  // anp_template_name - computed: true, optional: false, required: false
  public get anpTemplateName() {
    return this.getStringAttribute('anp_template_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_epg_name - computed: false, optional: false, required: true
  private _externalEpgName?: string; 
  public get externalEpgName() {
    return this.getStringAttribute('external_epg_name');
  }
  public set externalEpgName(value: string) {
    this._externalEpgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEpgNameInput() {
    return this._externalEpgName;
  }

  // external_epg_type - computed: true, optional: false, required: false
  public get externalEpgType() {
    return this.getStringAttribute('external_epg_type');
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

  // l3out_name - computed: true, optional: false, required: false
  public get l3OutName() {
    return this.getStringAttribute('l3out_name');
  }

  // l3out_schema_id - computed: true, optional: false, required: false
  public get l3OutSchemaId() {
    return this.getStringAttribute('l3out_schema_id');
  }

  // l3out_template_name - computed: true, optional: false, required: false
  public get l3OutTemplateName() {
    return this.getStringAttribute('l3out_template_name');
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

  // selector_ip - computed: true, optional: false, required: false
  public get selectorIp() {
    return this.getStringAttribute('selector_ip');
  }

  // selector_name - computed: true, optional: false, required: false
  public get selectorName() {
    return this.getStringAttribute('selector_name');
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }

  // vrf_schema_id - computed: true, optional: false, required: false
  public get vrfSchemaId() {
    return this.getStringAttribute('vrf_schema_id');
  }

  // vrf_template_name - computed: true, optional: false, required: false
  public get vrfTemplateName() {
    return this.getStringAttribute('vrf_template_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_epg_name: cdktf.stringToTerraform(this._externalEpgName),
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_epg_name: {
        value: cdktf.stringToHclTerraform(this._externalEpgName),
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
