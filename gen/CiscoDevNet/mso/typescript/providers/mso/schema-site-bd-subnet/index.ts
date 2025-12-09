// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaSiteBdSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#bd_name SchemaSiteBdSubnet#bd_name}
  */
  readonly bdName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#description SchemaSiteBdSubnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#id SchemaSiteBdSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#ip SchemaSiteBdSubnet#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#no_default_gateway SchemaSiteBdSubnet#no_default_gateway}
  */
  readonly noDefaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#primary SchemaSiteBdSubnet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#querier SchemaSiteBdSubnet#querier}
  */
  readonly querier?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#schema_id SchemaSiteBdSubnet#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#scope SchemaSiteBdSubnet#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#shared SchemaSiteBdSubnet#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#site_id SchemaSiteBdSubnet#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#template_name SchemaSiteBdSubnet#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#virtual SchemaSiteBdSubnet#virtual}
  */
  readonly virtual?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet mso_schema_site_bd_subnet}
*/
export class SchemaSiteBdSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_bd_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaSiteBdSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaSiteBdSubnet to import
  * @param importFromId The id of the existing SchemaSiteBdSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaSiteBdSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_bd_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_bd_subnet mso_schema_site_bd_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaSiteBdSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaSiteBdSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_bd_subnet',
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
    this._bdName = config.bdName;
    this._description = config.description;
    this._id = config.id;
    this._ip = config.ip;
    this._noDefaultGateway = config.noDefaultGateway;
    this._primary = config.primary;
    this._querier = config.querier;
    this._schemaId = config.schemaId;
    this._scope = config.scope;
    this._shared = config.shared;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
    this._virtual = config.virtual;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bd_name - computed: false, optional: false, required: true
  private _bdName?: string; 
  public get bdName() {
    return this.getStringAttribute('bd_name');
  }
  public set bdName(value: string) {
    this._bdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdNameInput() {
    return this._bdName;
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

  // virtual - computed: true, optional: true, required: false
  private _virtual?: boolean | cdktf.IResolvable; 
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }
  public set virtual(value: boolean | cdktf.IResolvable) {
    this._virtual = value;
  }
  public resetVirtual() {
    this._virtual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInput() {
    return this._virtual;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bd_name: cdktf.stringToTerraform(this._bdName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      no_default_gateway: cdktf.booleanToTerraform(this._noDefaultGateway),
      primary: cdktf.booleanToTerraform(this._primary),
      querier: cdktf.booleanToTerraform(this._querier),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      scope: cdktf.stringToTerraform(this._scope),
      shared: cdktf.booleanToTerraform(this._shared),
      site_id: cdktf.stringToTerraform(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
      virtual: cdktf.booleanToTerraform(this._virtual),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bd_name: {
        value: cdktf.stringToHclTerraform(this._bdName),
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
      virtual: {
        value: cdktf.booleanToHclTerraform(this._virtual),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
