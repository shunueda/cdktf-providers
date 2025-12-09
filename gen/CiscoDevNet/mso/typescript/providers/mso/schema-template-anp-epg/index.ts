// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateAnpEpgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#access_type SchemaTemplateAnpEpg#access_type}
  */
  readonly accessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#anp_name SchemaTemplateAnpEpg#anp_name}
  */
  readonly anpName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#bd_name SchemaTemplateAnpEpg#bd_name}
  */
  readonly bdName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#bd_schema_id SchemaTemplateAnpEpg#bd_schema_id}
  */
  readonly bdSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#bd_template_name SchemaTemplateAnpEpg#bd_template_name}
  */
  readonly bdTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#custom_service_type SchemaTemplateAnpEpg#custom_service_type}
  */
  readonly customServiceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#deployment_type SchemaTemplateAnpEpg#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#description SchemaTemplateAnpEpg#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#display_name SchemaTemplateAnpEpg#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#epg_type SchemaTemplateAnpEpg#epg_type}
  */
  readonly epgType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#id SchemaTemplateAnpEpg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#intersite_multicast_source SchemaTemplateAnpEpg#intersite_multicast_source}
  */
  readonly intersiteMulticastSource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#intra_epg SchemaTemplateAnpEpg#intra_epg}
  */
  readonly intraEpg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#name SchemaTemplateAnpEpg#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#preferred_group SchemaTemplateAnpEpg#preferred_group}
  */
  readonly preferredGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#proxy_arp SchemaTemplateAnpEpg#proxy_arp}
  */
  readonly proxyArp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#schema_id SchemaTemplateAnpEpg#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#service_type SchemaTemplateAnpEpg#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#template_name SchemaTemplateAnpEpg#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#useg_epg SchemaTemplateAnpEpg#useg_epg}
  */
  readonly usegEpg?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#vrf_name SchemaTemplateAnpEpg#vrf_name}
  */
  readonly vrfName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#vrf_schema_id SchemaTemplateAnpEpg#vrf_schema_id}
  */
  readonly vrfSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#vrf_template_name SchemaTemplateAnpEpg#vrf_template_name}
  */
  readonly vrfTemplateName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg mso_schema_template_anp_epg}
*/
export class SchemaTemplateAnpEpg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_anp_epg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateAnpEpg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateAnpEpg to import
  * @param importFromId The id of the existing SchemaTemplateAnpEpg that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateAnpEpg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_anp_epg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg mso_schema_template_anp_epg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateAnpEpgConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateAnpEpgConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_anp_epg',
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
    this._accessType = config.accessType;
    this._anpName = config.anpName;
    this._bdName = config.bdName;
    this._bdSchemaId = config.bdSchemaId;
    this._bdTemplateName = config.bdTemplateName;
    this._customServiceType = config.customServiceType;
    this._deploymentType = config.deploymentType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._epgType = config.epgType;
    this._id = config.id;
    this._intersiteMulticastSource = config.intersiteMulticastSource;
    this._intraEpg = config.intraEpg;
    this._name = config.name;
    this._preferredGroup = config.preferredGroup;
    this._proxyArp = config.proxyArp;
    this._schemaId = config.schemaId;
    this._serviceType = config.serviceType;
    this._templateName = config.templateName;
    this._usegEpg = config.usegEpg;
    this._vrfName = config.vrfName;
    this._vrfSchemaId = config.vrfSchemaId;
    this._vrfTemplateName = config.vrfTemplateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

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

  // bd_name - computed: false, optional: true, required: false
  private _bdName?: string; 
  public get bdName() {
    return this.getStringAttribute('bd_name');
  }
  public set bdName(value: string) {
    this._bdName = value;
  }
  public resetBdName() {
    this._bdName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdNameInput() {
    return this._bdName;
  }

  // bd_schema_id - computed: true, optional: true, required: false
  private _bdSchemaId?: string; 
  public get bdSchemaId() {
    return this.getStringAttribute('bd_schema_id');
  }
  public set bdSchemaId(value: string) {
    this._bdSchemaId = value;
  }
  public resetBdSchemaId() {
    this._bdSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdSchemaIdInput() {
    return this._bdSchemaId;
  }

  // bd_template_name - computed: true, optional: true, required: false
  private _bdTemplateName?: string; 
  public get bdTemplateName() {
    return this.getStringAttribute('bd_template_name');
  }
  public set bdTemplateName(value: string) {
    this._bdTemplateName = value;
  }
  public resetBdTemplateName() {
    this._bdTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdTemplateNameInput() {
    return this._bdTemplateName;
  }

  // custom_service_type - computed: false, optional: true, required: false
  private _customServiceType?: string; 
  public get customServiceType() {
    return this.getStringAttribute('custom_service_type');
  }
  public set customServiceType(value: string) {
    this._customServiceType = value;
  }
  public resetCustomServiceType() {
    this._customServiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServiceTypeInput() {
    return this._customServiceType;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // description - computed: false, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // epg_type - computed: false, optional: true, required: false
  private _epgType?: string; 
  public get epgType() {
    return this.getStringAttribute('epg_type');
  }
  public set epgType(value: string) {
    this._epgType = value;
  }
  public resetEpgType() {
    this._epgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgTypeInput() {
    return this._epgType;
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

  // intersite_multicast_source - computed: false, optional: true, required: false
  private _intersiteMulticastSource?: boolean | cdktf.IResolvable; 
  public get intersiteMulticastSource() {
    return this.getBooleanAttribute('intersite_multicast_source');
  }
  public set intersiteMulticastSource(value: boolean | cdktf.IResolvable) {
    this._intersiteMulticastSource = value;
  }
  public resetIntersiteMulticastSource() {
    this._intersiteMulticastSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intersiteMulticastSourceInput() {
    return this._intersiteMulticastSource;
  }

  // intra_epg - computed: true, optional: true, required: false
  private _intraEpg?: string; 
  public get intraEpg() {
    return this.getStringAttribute('intra_epg');
  }
  public set intraEpg(value: string) {
    this._intraEpg = value;
  }
  public resetIntraEpg() {
    this._intraEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraEpgInput() {
    return this._intraEpg;
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

  // preferred_group - computed: true, optional: true, required: false
  private _preferredGroup?: boolean | cdktf.IResolvable; 
  public get preferredGroup() {
    return this.getBooleanAttribute('preferred_group');
  }
  public set preferredGroup(value: boolean | cdktf.IResolvable) {
    this._preferredGroup = value;
  }
  public resetPreferredGroup() {
    this._preferredGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredGroupInput() {
    return this._preferredGroup;
  }

  // proxy_arp - computed: false, optional: true, required: false
  private _proxyArp?: boolean | cdktf.IResolvable; 
  public get proxyArp() {
    return this.getBooleanAttribute('proxy_arp');
  }
  public set proxyArp(value: boolean | cdktf.IResolvable) {
    this._proxyArp = value;
  }
  public resetProxyArp() {
    this._proxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyArpInput() {
    return this._proxyArp;
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

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
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

  // useg_epg - computed: true, optional: true, required: false
  private _usegEpg?: boolean | cdktf.IResolvable; 
  public get usegEpg() {
    return this.getBooleanAttribute('useg_epg');
  }
  public set usegEpg(value: boolean | cdktf.IResolvable) {
    this._usegEpg = value;
  }
  public resetUsegEpg() {
    this._usegEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usegEpgInput() {
    return this._usegEpg;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vrf_name - computed: false, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
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
      access_type: cdktf.stringToTerraform(this._accessType),
      anp_name: cdktf.stringToTerraform(this._anpName),
      bd_name: cdktf.stringToTerraform(this._bdName),
      bd_schema_id: cdktf.stringToTerraform(this._bdSchemaId),
      bd_template_name: cdktf.stringToTerraform(this._bdTemplateName),
      custom_service_type: cdktf.stringToTerraform(this._customServiceType),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      epg_type: cdktf.stringToTerraform(this._epgType),
      id: cdktf.stringToTerraform(this._id),
      intersite_multicast_source: cdktf.booleanToTerraform(this._intersiteMulticastSource),
      intra_epg: cdktf.stringToTerraform(this._intraEpg),
      name: cdktf.stringToTerraform(this._name),
      preferred_group: cdktf.booleanToTerraform(this._preferredGroup),
      proxy_arp: cdktf.booleanToTerraform(this._proxyArp),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      service_type: cdktf.stringToTerraform(this._serviceType),
      template_name: cdktf.stringToTerraform(this._templateName),
      useg_epg: cdktf.booleanToTerraform(this._usegEpg),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
      vrf_schema_id: cdktf.stringToTerraform(this._vrfSchemaId),
      vrf_template_name: cdktf.stringToTerraform(this._vrfTemplateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anp_name: {
        value: cdktf.stringToHclTerraform(this._anpName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bd_name: {
        value: cdktf.stringToHclTerraform(this._bdName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bd_schema_id: {
        value: cdktf.stringToHclTerraform(this._bdSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bd_template_name: {
        value: cdktf.stringToHclTerraform(this._bdTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_service_type: {
        value: cdktf.stringToHclTerraform(this._customServiceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
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
      epg_type: {
        value: cdktf.stringToHclTerraform(this._epgType),
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
      intersite_multicast_source: {
        value: cdktf.booleanToHclTerraform(this._intersiteMulticastSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      intra_epg: {
        value: cdktf.stringToHclTerraform(this._intraEpg),
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
      preferred_group: {
        value: cdktf.booleanToHclTerraform(this._preferredGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxy_arp: {
        value: cdktf.booleanToHclTerraform(this._proxyArp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
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
      useg_epg: {
        value: cdktf.booleanToHclTerraform(this._usegEpg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
