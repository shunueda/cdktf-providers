// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datacatalog_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatacatalogConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datacatalog_connection#catalog_id DataOciDatacatalogConnection#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datacatalog_connection#connection_key DataOciDatacatalogConnection#connection_key}
  */
  readonly connectionKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datacatalog_connection#data_asset_key DataOciDatacatalogConnection#data_asset_key}
  */
  readonly dataAssetKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datacatalog_connection#fields DataOciDatacatalogConnection#fields}
  */
  readonly fields?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datacatalog_connection oci_datacatalog_connection}
*/
export class DataOciDatacatalogConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datacatalog_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatacatalogConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatacatalogConnection to import
  * @param importFromId The id of the existing DataOciDatacatalogConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datacatalog_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatacatalogConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datacatalog_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datacatalog_connection oci_datacatalog_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatacatalogConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatacatalogConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_connection',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogId = config.catalogId;
    this._connectionKey = config.connectionKey;
    this._dataAssetKey = config.dataAssetKey;
    this._fields = config.fields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // connection_key - computed: false, optional: false, required: true
  private _connectionKey?: string; 
  public get connectionKey() {
    return this.getStringAttribute('connection_key');
  }
  public set connectionKey(value: string) {
    this._connectionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionKeyInput() {
    return this._connectionKey;
  }

  // created_by_id - computed: true, optional: false, required: false
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }

  // data_asset_key - computed: false, optional: false, required: true
  private _dataAssetKey?: string; 
  public get dataAssetKey() {
    return this.getStringAttribute('data_asset_key');
  }
  public set dataAssetKey(value: string) {
    this._dataAssetKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAssetKeyInput() {
    return this._dataAssetKey;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enc_properties - computed: true, optional: false, required: false
  private _encProperties = new cdktf.StringMap(this, "enc_properties");
  public get encProperties() {
    return this._encProperties;
  }

  // external_key - computed: true, optional: false, required: false
  public get externalKey() {
    return this.getStringAttribute('external_key');
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_status_updated - computed: true, optional: false, required: false
  public get timeStatusUpdated() {
    return this.getStringAttribute('time_status_updated');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type_key - computed: true, optional: false, required: false
  public get typeKey() {
    return this.getStringAttribute('type_key');
  }

  // updated_by_id - computed: true, optional: false, required: false
  public get updatedById() {
    return this.getStringAttribute('updated_by_id');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      connection_key: cdktf.stringToTerraform(this._connectionKey),
      data_asset_key: cdktf.stringToTerraform(this._dataAssetKey),
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktf.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_key: {
        value: cdktf.stringToHclTerraform(this._connectionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_asset_key: {
        value: cdktf.stringToHclTerraform(this._dataAssetKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
