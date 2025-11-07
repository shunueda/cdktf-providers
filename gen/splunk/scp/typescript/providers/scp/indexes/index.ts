// https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Valid values: (event | metric). Specifies the type of index. Can not be updated. Defaults to event. Can not be updated after creation, if changed in config file terraform will propose a replacement (delete current index and recreate with new datatype).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes#datatype Indexes#datatype}
  */
  readonly datatype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes#id Indexes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum size in MB for a hot DB to reach before a roll to warm is triggered. Defaults to 0 (unlimited).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes#max_data_size_mb Indexes#max_data_size_mb}
  */
  readonly maxDataSizeMb?: number;
  /**
  * The name of the index to create. Can not be updated after creation, if changed in config file terraform will propose a replacement (delete old index and recreate with new name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes#name Indexes#name}
  */
  readonly name: string;
  /**
  * Number of days after which indexed data rolls to frozen. Defaults to 90 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes#searchable_days Indexes#searchable_days}
  */
  readonly searchableDays?: number;
  /**
  * To create an index with DDSS enabled, you must specify the selfStorageBucketPath value in the following format: "s3://selfStorageBucket/selfStorageBucketFolder", where SelfStorageBucketFolder is optional, as you can store data buckets at root. Before you can create an index with DDSS enabled, you must configure a self-storage location for your deployment (see https://docs.splunk.com/Documentation/SplunkCloud/latest/Config/ManageDDSSlocations). Can not be set with splunk_archival_retention_days. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes#self_storage_bucket_path Indexes#self_storage_bucket_path}
  */
  readonly selfStorageBucketPath?: string;
  /**
  * To create an index with DDAA enabled, you must specify the splunkArchivalRetentionDays value which must be The value of splunkArchivalRetentionDays must be positive and greater than the SearchableDays value. Can not be set with self_storage_bucket_path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes#splunk_archival_retention_days Indexes#splunk_archival_retention_days}
  */
  readonly splunkArchivalRetentionDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes scp_indexes}
*/
export class Indexes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scp_indexes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Indexes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Indexes to import
  * @param importFromId The id of the existing Indexes that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Indexes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scp_indexes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/indexes scp_indexes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexesConfig
  */
  public constructor(scope: Construct, id: string, config: IndexesConfig) {
    super(scope, id, {
      terraformResourceType: 'scp_indexes',
      terraformGeneratorMetadata: {
        providerName: 'scp',
        providerVersion: '1.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datatype = config.datatype;
    this._id = config.id;
    this._maxDataSizeMb = config.maxDataSizeMb;
    this._name = config.name;
    this._searchableDays = config.searchableDays;
    this._selfStorageBucketPath = config.selfStorageBucketPath;
    this._splunkArchivalRetentionDays = config.splunkArchivalRetentionDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datatype - computed: true, optional: true, required: false
  private _datatype?: string; 
  public get datatype() {
    return this.getStringAttribute('datatype');
  }
  public set datatype(value: string) {
    this._datatype = value;
  }
  public resetDatatype() {
    this._datatype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datatypeInput() {
    return this._datatype;
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

  // max_data_size_mb - computed: true, optional: true, required: false
  private _maxDataSizeMb?: number; 
  public get maxDataSizeMb() {
    return this.getNumberAttribute('max_data_size_mb');
  }
  public set maxDataSizeMb(value: number) {
    this._maxDataSizeMb = value;
  }
  public resetMaxDataSizeMb() {
    this._maxDataSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDataSizeMbInput() {
    return this._maxDataSizeMb;
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

  // searchable_days - computed: true, optional: true, required: false
  private _searchableDays?: number; 
  public get searchableDays() {
    return this.getNumberAttribute('searchable_days');
  }
  public set searchableDays(value: number) {
    this._searchableDays = value;
  }
  public resetSearchableDays() {
    this._searchableDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableDaysInput() {
    return this._searchableDays;
  }

  // self_storage_bucket_path - computed: true, optional: true, required: false
  private _selfStorageBucketPath?: string; 
  public get selfStorageBucketPath() {
    return this.getStringAttribute('self_storage_bucket_path');
  }
  public set selfStorageBucketPath(value: string) {
    this._selfStorageBucketPath = value;
  }
  public resetSelfStorageBucketPath() {
    this._selfStorageBucketPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfStorageBucketPathInput() {
    return this._selfStorageBucketPath;
  }

  // splunk_archival_retention_days - computed: true, optional: true, required: false
  private _splunkArchivalRetentionDays?: number; 
  public get splunkArchivalRetentionDays() {
    return this.getNumberAttribute('splunk_archival_retention_days');
  }
  public set splunkArchivalRetentionDays(value: number) {
    this._splunkArchivalRetentionDays = value;
  }
  public resetSplunkArchivalRetentionDays() {
    this._splunkArchivalRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkArchivalRetentionDaysInput() {
    return this._splunkArchivalRetentionDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datatype: cdktf.stringToTerraform(this._datatype),
      id: cdktf.stringToTerraform(this._id),
      max_data_size_mb: cdktf.numberToTerraform(this._maxDataSizeMb),
      name: cdktf.stringToTerraform(this._name),
      searchable_days: cdktf.numberToTerraform(this._searchableDays),
      self_storage_bucket_path: cdktf.stringToTerraform(this._selfStorageBucketPath),
      splunk_archival_retention_days: cdktf.numberToTerraform(this._splunkArchivalRetentionDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datatype: {
        value: cdktf.stringToHclTerraform(this._datatype),
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
      max_data_size_mb: {
        value: cdktf.numberToHclTerraform(this._maxDataSizeMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      searchable_days: {
        value: cdktf.numberToHclTerraform(this._searchableDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      self_storage_bucket_path: {
        value: cdktf.stringToHclTerraform(this._selfStorageBucketPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splunk_archival_retention_days: {
        value: cdktf.numberToHclTerraform(this._splunkArchivalRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
