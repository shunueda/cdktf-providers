// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateAnpEpgSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#anp_name SchemaTemplateAnpEpgSubnet#anp_name}
  */
  readonly anpName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#description SchemaTemplateAnpEpgSubnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#epg_name SchemaTemplateAnpEpgSubnet#epg_name}
  */
  readonly epgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#id SchemaTemplateAnpEpgSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#ip SchemaTemplateAnpEpgSubnet#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#no_default_gateway SchemaTemplateAnpEpgSubnet#no_default_gateway}
  */
  readonly noDefaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#primary SchemaTemplateAnpEpgSubnet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#querier SchemaTemplateAnpEpgSubnet#querier}
  */
  readonly querier?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#schema_id SchemaTemplateAnpEpgSubnet#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#scope SchemaTemplateAnpEpgSubnet#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#shared SchemaTemplateAnpEpgSubnet#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#template SchemaTemplateAnpEpgSubnet#template}
  */
  readonly template: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet mso_schema_template_anp_epg_subnet}
*/
export class SchemaTemplateAnpEpgSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_anp_epg_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateAnpEpgSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateAnpEpgSubnet to import
  * @param importFromId The id of the existing SchemaTemplateAnpEpgSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateAnpEpgSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_anp_epg_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_anp_epg_subnet mso_schema_template_anp_epg_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateAnpEpgSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateAnpEpgSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_anp_epg_subnet',
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
    this._description = config.description;
    this._epgName = config.epgName;
    this._id = config.id;
    this._ip = config.ip;
    this._noDefaultGateway = config.noDefaultGateway;
    this._primary = config.primary;
    this._querier = config.querier;
    this._schemaId = config.schemaId;
    this._scope = config.scope;
    this._shared = config.shared;
    this._template = config.template;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // no_default_gateway - computed: true, optional: true, required: false
  private _noDefaultGateway?: boolean | cdktf.IResolvable; 
  public get noDefaultGateway() {
    return this.getBooleanAttribute('no_default_gateway');
  }
  public set noDefaultGateway(value: boolean | cdktf.IResolvable) {
    this._noDefaultGateway = value;
  }
  public resetNoDefaultGateway() {
    this._noDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDefaultGatewayInput() {
    return this._noDefaultGateway;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // querier - computed: true, optional: true, required: false
  private _querier?: boolean | cdktf.IResolvable; 
  public get querier() {
    return this.getBooleanAttribute('querier');
  }
  public set querier(value: boolean | cdktf.IResolvable) {
    this._querier = value;
  }
  public resetQuerier() {
    this._querier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierInput() {
    return this._querier;
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

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // shared - computed: true, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anp_name: cdktf.stringToTerraform(this._anpName),
      description: cdktf.stringToTerraform(this._description),
      epg_name: cdktf.stringToTerraform(this._epgName),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      no_default_gateway: cdktf.booleanToTerraform(this._noDefaultGateway),
      primary: cdktf.booleanToTerraform(this._primary),
      querier: cdktf.booleanToTerraform(this._querier),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      scope: cdktf.stringToTerraform(this._scope),
      shared: cdktf.booleanToTerraform(this._shared),
      template: cdktf.stringToTerraform(this._template),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_default_gateway: {
        value: cdktf.booleanToHclTerraform(this._noDefaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary: {
        value: cdktf.booleanToHclTerraform(this._primary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      querier: {
        value: cdktf.booleanToHclTerraform(this._querier),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
