// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaSiteAnpEpgStaticPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#anp_name DataMsoSchemaSiteAnpEpgStaticPort#anp_name}
  */
  readonly anpName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#epg_name DataMsoSchemaSiteAnpEpgStaticPort#epg_name}
  */
  readonly epgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#fex DataMsoSchemaSiteAnpEpgStaticPort#fex}
  */
  readonly fex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#id DataMsoSchemaSiteAnpEpgStaticPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#leaf DataMsoSchemaSiteAnpEpgStaticPort#leaf}
  */
  readonly leaf: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#path DataMsoSchemaSiteAnpEpgStaticPort#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#path_type DataMsoSchemaSiteAnpEpgStaticPort#path_type}
  */
  readonly pathType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#pod DataMsoSchemaSiteAnpEpgStaticPort#pod}
  */
  readonly pod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#schema_id DataMsoSchemaSiteAnpEpgStaticPort#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#site_id DataMsoSchemaSiteAnpEpgStaticPort#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#template_name DataMsoSchemaSiteAnpEpgStaticPort#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port mso_schema_site_anp_epg_static_port}
*/
export class DataMsoSchemaSiteAnpEpgStaticPort extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_anp_epg_static_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaSiteAnpEpgStaticPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaSiteAnpEpgStaticPort to import
  * @param importFromId The id of the existing DataMsoSchemaSiteAnpEpgStaticPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaSiteAnpEpgStaticPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_anp_epg_static_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_site_anp_epg_static_port mso_schema_site_anp_epg_static_port} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaSiteAnpEpgStaticPortConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaSiteAnpEpgStaticPortConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_anp_epg_static_port',
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
    this._anpName = config.anpName;
    this._epgName = config.epgName;
    this._fex = config.fex;
    this._id = config.id;
    this._leaf = config.leaf;
    this._path = config.path;
    this._pathType = config.pathType;
    this._pod = config.pod;
    this._schemaId = config.schemaId;
    this._siteId = config.siteId;
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

  // deployment_immediacy - computed: true, optional: false, required: false
  public get deploymentImmediacy() {
    return this.getStringAttribute('deployment_immediacy');
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

  // fex - computed: true, optional: true, required: false
  private _fex?: string; 
  public get fex() {
    return this.getStringAttribute('fex');
  }
  public set fex(value: string) {
    this._fex = value;
  }
  public resetFex() {
    this._fex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fexInput() {
    return this._fex;
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

  // leaf - computed: false, optional: false, required: true
  private _leaf?: string; 
  public get leaf() {
    return this.getStringAttribute('leaf');
  }
  public set leaf(value: string) {
    this._leaf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leafInput() {
    return this._leaf;
  }

  // micro_seg_vlan - computed: true, optional: false, required: false
  public get microSegVlan() {
    return this.getNumberAttribute('micro_seg_vlan');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_type - computed: false, optional: false, required: true
  private _pathType?: string; 
  public get pathType() {
    return this.getStringAttribute('path_type');
  }
  public set pathType(value: string) {
    this._pathType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }

  // pod - computed: false, optional: false, required: true
  private _pod?: string; 
  public get pod() {
    return this.getStringAttribute('pod');
  }
  public set pod(value: string) {
    this._pod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
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

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anp_name: cdktf.stringToTerraform(this._anpName),
      epg_name: cdktf.stringToTerraform(this._epgName),
      fex: cdktf.stringToTerraform(this._fex),
      id: cdktf.stringToTerraform(this._id),
      leaf: cdktf.stringToTerraform(this._leaf),
      path: cdktf.stringToTerraform(this._path),
      path_type: cdktf.stringToTerraform(this._pathType),
      pod: cdktf.stringToTerraform(this._pod),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_id: cdktf.stringToTerraform(this._siteId),
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
      epg_name: {
        value: cdktf.stringToHclTerraform(this._epgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fex: {
        value: cdktf.stringToHclTerraform(this._fex),
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
      leaf: {
        value: cdktf.stringToHclTerraform(this._leaf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_type: {
        value: cdktf.stringToHclTerraform(this._pathType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod: {
        value: cdktf.stringToHclTerraform(this._pod),
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
