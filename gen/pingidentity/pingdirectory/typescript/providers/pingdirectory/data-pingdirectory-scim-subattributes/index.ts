// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryScimSubattributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * SCIM filter used when searching the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattributes#filter DataPingdirectoryScimSubattributes#filter}
  */
  readonly filter?: string;
  /**
  * Name of the parent SCIM Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattributes#scim_attribute_name DataPingdirectoryScimSubattributes#scim_attribute_name}
  */
  readonly scimAttributeName: string;
  /**
  * Name of the parent SCIM Schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattributes#scim_schema_name DataPingdirectoryScimSubattributes#scim_schema_name}
  */
  readonly scimSchemaName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattributes pingdirectory_scim_subattributes}
*/
export class DataPingdirectoryScimSubattributes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_scim_subattributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryScimSubattributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryScimSubattributes to import
  * @param importFromId The id of the existing DataPingdirectoryScimSubattributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryScimSubattributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_scim_subattributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattributes pingdirectory_scim_subattributes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryScimSubattributesConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryScimSubattributesConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_scim_subattributes',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._scimAttributeName = config.scimAttributeName;
    this._scimSchemaName = config.scimSchemaName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // scim_attribute_name - computed: false, optional: false, required: true
  private _scimAttributeName?: string; 
  public get scimAttributeName() {
    return this.getStringAttribute('scim_attribute_name');
  }
  public set scimAttributeName(value: string) {
    this._scimAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimAttributeNameInput() {
    return this._scimAttributeName;
  }

  // scim_schema_name - computed: false, optional: false, required: true
  private _scimSchemaName?: string; 
  public get scimSchemaName() {
    return this.getStringAttribute('scim_schema_name');
  }
  public set scimSchemaName(value: string) {
    this._scimSchemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimSchemaNameInput() {
    return this._scimSchemaName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      scim_attribute_name: cdktf.stringToTerraform(this._scimAttributeName),
      scim_schema_name: cdktf.stringToTerraform(this._scimSchemaName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_attribute_name: {
        value: cdktf.stringToHclTerraform(this._scimAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_schema_name: {
        value: cdktf.stringToHclTerraform(this._scimSchemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
