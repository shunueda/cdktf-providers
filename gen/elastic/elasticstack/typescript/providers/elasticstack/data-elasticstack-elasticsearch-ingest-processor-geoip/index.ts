// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_geoip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorGeoipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database filename referring to a database the module ships with (GeoLite2-City.mmdb, GeoLite2-Country.mmdb, or GeoLite2-ASN.mmdb) or a custom database in the `ingest-geoip` config directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_geoip#database_file DataElasticstackElasticsearchIngestProcessorGeoip#database_file}
  */
  readonly databaseFile?: string;
  /**
  * The field to get the ip address from for the geographical lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_geoip#field DataElasticstackElasticsearchIngestProcessorGeoip#field}
  */
  readonly field: string;
  /**
  * If `true` only first found geoip data will be returned, even if field contains array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_geoip#first_only DataElasticstackElasticsearchIngestProcessorGeoip#first_only}
  */
  readonly firstOnly?: boolean | cdktf.IResolvable;
  /**
  * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_geoip#ignore_missing DataElasticstackElasticsearchIngestProcessorGeoip#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * Controls what properties are added to the `target_field` based on the geoip lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_geoip#properties DataElasticstackElasticsearchIngestProcessorGeoip#properties}
  */
  readonly properties?: string[];
  /**
  * The field that will hold the geographical information looked up from the MaxMind database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_geoip#target_field DataElasticstackElasticsearchIngestProcessorGeoip#target_field}
  */
  readonly targetField?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_geoip elasticstack_elasticsearch_ingest_processor_geoip}
*/
export class DataElasticstackElasticsearchIngestProcessorGeoip extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_geoip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorGeoip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorGeoip to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorGeoip that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_geoip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorGeoip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_geoip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_geoip elasticstack_elasticsearch_ingest_processor_geoip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorGeoipConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorGeoipConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_geoip',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseFile = config.databaseFile;
    this._field = config.field;
    this._firstOnly = config.firstOnly;
    this._ignoreMissing = config.ignoreMissing;
    this._properties = config.properties;
    this._targetField = config.targetField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_file - computed: false, optional: true, required: false
  private _databaseFile?: string; 
  public get databaseFile() {
    return this.getStringAttribute('database_file');
  }
  public set databaseFile(value: string) {
    this._databaseFile = value;
  }
  public resetDatabaseFile() {
    this._databaseFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFileInput() {
    return this._databaseFile;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // first_only - computed: false, optional: true, required: false
  private _firstOnly?: boolean | cdktf.IResolvable; 
  public get firstOnly() {
    return this.getBooleanAttribute('first_only');
  }
  public set firstOnly(value: boolean | cdktf.IResolvable) {
    this._firstOnly = value;
  }
  public resetFirstOnly() {
    this._firstOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnlyInput() {
    return this._firstOnly;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_missing - computed: false, optional: true, required: false
  private _ignoreMissing?: boolean | cdktf.IResolvable; 
  public get ignoreMissing() {
    return this.getBooleanAttribute('ignore_missing');
  }
  public set ignoreMissing(value: boolean | cdktf.IResolvable) {
    this._ignoreMissing = value;
  }
  public resetIgnoreMissing() {
    this._ignoreMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingInput() {
    return this._ignoreMissing;
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string[]; 
  public get properties() {
    return cdktf.Fn.tolist(this.getListAttribute('properties'));
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // target_field - computed: false, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_file: cdktf.stringToTerraform(this._databaseFile),
      field: cdktf.stringToTerraform(this._field),
      first_only: cdktf.booleanToTerraform(this._firstOnly),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      properties: cdktf.listMapper(cdktf.stringToTerraform, false)(this._properties),
      target_field: cdktf.stringToTerraform(this._targetField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_file: {
        value: cdktf.stringToHclTerraform(this._databaseFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field: {
        value: cdktf.stringToHclTerraform(this._field),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_only: {
        value: cdktf.booleanToHclTerraform(this._firstOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_missing: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      properties: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._properties),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_field: {
        value: cdktf.stringToHclTerraform(this._targetField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
