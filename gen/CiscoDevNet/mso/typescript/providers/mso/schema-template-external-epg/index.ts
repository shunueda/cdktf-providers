// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateExternalEpgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#anp_name SchemaTemplateExternalEpg#anp_name}
  */
  readonly anpName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#anp_schema_id SchemaTemplateExternalEpg#anp_schema_id}
  */
  readonly anpSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#anp_template_name SchemaTemplateExternalEpg#anp_template_name}
  */
  readonly anpTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#description SchemaTemplateExternalEpg#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#display_name SchemaTemplateExternalEpg#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#external_epg_name SchemaTemplateExternalEpg#external_epg_name}
  */
  readonly externalEpgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#external_epg_type SchemaTemplateExternalEpg#external_epg_type}
  */
  readonly externalEpgType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#id SchemaTemplateExternalEpg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#include_in_preferred_group SchemaTemplateExternalEpg#include_in_preferred_group}
  */
  readonly includeInPreferredGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#l3out_name SchemaTemplateExternalEpg#l3out_name}
  */
  readonly l3OutName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#l3out_schema_id SchemaTemplateExternalEpg#l3out_schema_id}
  */
  readonly l3OutSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#l3out_template_name SchemaTemplateExternalEpg#l3out_template_name}
  */
  readonly l3OutTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#schema_id SchemaTemplateExternalEpg#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#selector_ip SchemaTemplateExternalEpg#selector_ip}
  */
  readonly selectorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#selector_name SchemaTemplateExternalEpg#selector_name}
  */
  readonly selectorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#site_id SchemaTemplateExternalEpg#site_id}
  */
  readonly siteId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#template_name SchemaTemplateExternalEpg#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#vrf_name SchemaTemplateExternalEpg#vrf_name}
  */
  readonly vrfName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#vrf_schema_id SchemaTemplateExternalEpg#vrf_schema_id}
  */
  readonly vrfSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#vrf_template_name SchemaTemplateExternalEpg#vrf_template_name}
  */
  readonly vrfTemplateName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg mso_schema_template_external_epg}
*/
export class SchemaTemplateExternalEpg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_external_epg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateExternalEpg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateExternalEpg to import
  * @param importFromId The id of the existing SchemaTemplateExternalEpg that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateExternalEpg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_external_epg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_external_epg mso_schema_template_external_epg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateExternalEpgConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateExternalEpgConfig) {
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
    this._anpName = config.anpName;
    this._anpSchemaId = config.anpSchemaId;
    this._anpTemplateName = config.anpTemplateName;
    this._description = config.description;
    this._displayName = config.displayName;
    this._externalEpgName = config.externalEpgName;
    this._externalEpgType = config.externalEpgType;
    this._id = config.id;
    this._includeInPreferredGroup = config.includeInPreferredGroup;
    this._l3OutName = config.l3OutName;
    this._l3OutSchemaId = config.l3OutSchemaId;
    this._l3OutTemplateName = config.l3OutTemplateName;
    this._schemaId = config.schemaId;
    this._selectorIp = config.selectorIp;
    this._selectorName = config.selectorName;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
    this._vrfName = config.vrfName;
    this._vrfSchemaId = config.vrfSchemaId;
    this._vrfTemplateName = config.vrfTemplateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anp_name - computed: true, optional: true, required: false
  private _anpName?: string; 
  public get anpName() {
    return this.getStringAttribute('anp_name');
  }
  public set anpName(value: string) {
    this._anpName = value;
  }
  public resetAnpName() {
    this._anpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anpNameInput() {
    return this._anpName;
  }

  // anp_schema_id - computed: true, optional: true, required: false
  private _anpSchemaId?: string; 
  public get anpSchemaId() {
    return this.getStringAttribute('anp_schema_id');
  }
  public set anpSchemaId(value: string) {
    this._anpSchemaId = value;
  }
  public resetAnpSchemaId() {
    this._anpSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anpSchemaIdInput() {
    return this._anpSchemaId;
  }

  // anp_template_name - computed: true, optional: true, required: false
  private _anpTemplateName?: string; 
  public get anpTemplateName() {
    return this.getStringAttribute('anp_template_name');
  }
  public set anpTemplateName(value: string) {
    this._anpTemplateName = value;
  }
  public resetAnpTemplateName() {
    this._anpTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anpTemplateNameInput() {
    return this._anpTemplateName;
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

  // external_epg_type - computed: true, optional: true, required: false
  private _externalEpgType?: string; 
  public get externalEpgType() {
    return this.getStringAttribute('external_epg_type');
  }
  public set externalEpgType(value: string) {
    this._externalEpgType = value;
  }
  public resetExternalEpgType() {
    this._externalEpgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEpgTypeInput() {
    return this._externalEpgType;
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

  // include_in_preferred_group - computed: false, optional: true, required: false
  private _includeInPreferredGroup?: boolean | cdktf.IResolvable; 
  public get includeInPreferredGroup() {
    return this.getBooleanAttribute('include_in_preferred_group');
  }
  public set includeInPreferredGroup(value: boolean | cdktf.IResolvable) {
    this._includeInPreferredGroup = value;
  }
  public resetIncludeInPreferredGroup() {
    this._includeInPreferredGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInPreferredGroupInput() {
    return this._includeInPreferredGroup;
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

  // selector_ip - computed: true, optional: true, required: false
  private _selectorIp?: string; 
  public get selectorIp() {
    return this.getStringAttribute('selector_ip');
  }
  public set selectorIp(value: string) {
    this._selectorIp = value;
  }
  public resetSelectorIp() {
    this._selectorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorIpInput() {
    return this._selectorIp;
  }

  // selector_name - computed: true, optional: true, required: false
  private _selectorName?: string; 
  public get selectorName() {
    return this.getStringAttribute('selector_name');
  }
  public set selectorName(value: string) {
    this._selectorName = value;
  }
  public resetSelectorName() {
    this._selectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorNameInput() {
    return this._selectorName;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string[]; 
  public get siteId() {
    return this.getListAttribute('site_id');
  }
  public set siteId(value: string[]) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
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
      anp_name: cdktf.stringToTerraform(this._anpName),
      anp_schema_id: cdktf.stringToTerraform(this._anpSchemaId),
      anp_template_name: cdktf.stringToTerraform(this._anpTemplateName),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_epg_name: cdktf.stringToTerraform(this._externalEpgName),
      external_epg_type: cdktf.stringToTerraform(this._externalEpgType),
      id: cdktf.stringToTerraform(this._id),
      include_in_preferred_group: cdktf.booleanToTerraform(this._includeInPreferredGroup),
      l3out_name: cdktf.stringToTerraform(this._l3OutName),
      l3out_schema_id: cdktf.stringToTerraform(this._l3OutSchemaId),
      l3out_template_name: cdktf.stringToTerraform(this._l3OutTemplateName),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      selector_ip: cdktf.stringToTerraform(this._selectorIp),
      selector_name: cdktf.stringToTerraform(this._selectorName),
      site_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
      vrf_schema_id: cdktf.stringToTerraform(this._vrfSchemaId),
      vrf_template_name: cdktf.stringToTerraform(this._vrfTemplateName),
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
      anp_schema_id: {
        value: cdktf.stringToHclTerraform(this._anpSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anp_template_name: {
        value: cdktf.stringToHclTerraform(this._anpTemplateName),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_epg_name: {
        value: cdktf.stringToHclTerraform(this._externalEpgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_epg_type: {
        value: cdktf.stringToHclTerraform(this._externalEpgType),
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
      include_in_preferred_group: {
        value: cdktf.booleanToHclTerraform(this._includeInPreferredGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l3out_name: {
        value: cdktf.stringToHclTerraform(this._l3OutName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      selector_ip: {
        value: cdktf.stringToHclTerraform(this._selectorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selector_name: {
        value: cdktf.stringToHclTerraform(this._selectorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._siteId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
