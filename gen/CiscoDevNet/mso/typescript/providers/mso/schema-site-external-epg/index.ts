// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaSiteExternalEpgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg#external_epg_name SchemaSiteExternalEpg#external_epg_name}
  */
  readonly externalEpgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg#id SchemaSiteExternalEpg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg#l3out_name SchemaSiteExternalEpg#l3out_name}
  */
  readonly l3OutName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg#l3out_on_apic SchemaSiteExternalEpg#l3out_on_apic}
  */
  readonly l3OutOnApic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg#l3out_schema_id SchemaSiteExternalEpg#l3out_schema_id}
  */
  readonly l3OutSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg#l3out_template_name SchemaSiteExternalEpg#l3out_template_name}
  */
  readonly l3OutTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg#schema_id SchemaSiteExternalEpg#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg#site_id SchemaSiteExternalEpg#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg#template_name SchemaSiteExternalEpg#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg mso_schema_site_external_epg}
*/
export class SchemaSiteExternalEpg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_external_epg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaSiteExternalEpg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaSiteExternalEpg to import
  * @param importFromId The id of the existing SchemaSiteExternalEpg that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaSiteExternalEpg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_external_epg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_external_epg mso_schema_site_external_epg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaSiteExternalEpgConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaSiteExternalEpgConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_external_epg',
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
    this._externalEpgName = config.externalEpgName;
    this._id = config.id;
    this._l3OutName = config.l3OutName;
    this._l3OutOnApic = config.l3OutOnApic;
    this._l3OutSchemaId = config.l3OutSchemaId;
    this._l3OutTemplateName = config.l3OutTemplateName;
    this._schemaId = config.schemaId;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // l3out_name - computed: true, optional: true, required: false
  private _l3OutName?: string; 
  public get l3OutName() {
    return this.getStringAttribute('l3out_name');
  }
  public set l3OutName(value: string) {
    this._l3OutName = value;
  }
  public resetL3OutName() {
    this._l3OutName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutNameInput() {
    return this._l3OutName;
  }

  // l3out_on_apic - computed: false, optional: true, required: false
  private _l3OutOnApic?: boolean | cdktf.IResolvable; 
  public get l3OutOnApic() {
    return this.getBooleanAttribute('l3out_on_apic');
  }
  public set l3OutOnApic(value: boolean | cdktf.IResolvable) {
    this._l3OutOnApic = value;
  }
  public resetL3OutOnApic() {
    this._l3OutOnApic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutOnApicInput() {
    return this._l3OutOnApic;
  }

  // l3out_schema_id - computed: true, optional: true, required: false
  private _l3OutSchemaId?: string; 
  public get l3OutSchemaId() {
    return this.getStringAttribute('l3out_schema_id');
  }
  public set l3OutSchemaId(value: string) {
    this._l3OutSchemaId = value;
  }
  public resetL3OutSchemaId() {
    this._l3OutSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutSchemaIdInput() {
    return this._l3OutSchemaId;
  }

  // l3out_template_name - computed: true, optional: true, required: false
  private _l3OutTemplateName?: string; 
  public get l3OutTemplateName() {
    return this.getStringAttribute('l3out_template_name');
  }
  public set l3OutTemplateName(value: string) {
    this._l3OutTemplateName = value;
  }
  public resetL3OutTemplateName() {
    this._l3OutTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutTemplateNameInput() {
    return this._l3OutTemplateName;
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

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
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
      external_epg_name: cdktf.stringToTerraform(this._externalEpgName),
      id: cdktf.stringToTerraform(this._id),
      l3out_name: cdktf.stringToTerraform(this._l3OutName),
      l3out_on_apic: cdktf.booleanToTerraform(this._l3OutOnApic),
      l3out_schema_id: cdktf.stringToTerraform(this._l3OutSchemaId),
      l3out_template_name: cdktf.stringToTerraform(this._l3OutTemplateName),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_id: cdktf.stringToTerraform(this._siteId),
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
      l3out_name: {
        value: cdktf.stringToHclTerraform(this._l3OutName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3out_on_apic: {
        value: cdktf.booleanToHclTerraform(this._l3OutOnApic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l3out_schema_id: {
        value: cdktf.stringToHclTerraform(this._l3OutSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3out_template_name: {
        value: cdktf.stringToHclTerraform(this._l3OutTemplateName),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
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
