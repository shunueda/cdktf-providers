// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_index#id ElasticsearchIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Create index metadata JSON, such as mappings, settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_index#index_meta_json ElasticsearchIndex#index_meta_json}
  */
  readonly indexMetaJson?: string;
  /**
  * index name to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_index#index_name ElasticsearchIndex#index_name}
  */
  readonly indexName: string;
  /**
  * type of the index to be created. auto: autonomous index. normal: indicates a common index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_index#index_type ElasticsearchIndex#index_type}
  */
  readonly indexType: string;
  /**
  * es instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_index#instance_id ElasticsearchIndex#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_index tencentcloud_elasticsearch_index}
*/
export class ElasticsearchIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchIndex to import
  * @param importFromId The id of the existing ElasticsearchIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_index tencentcloud_elasticsearch_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchIndexConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_index',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._indexMetaJson = config.indexMetaJson;
    this._indexName = config.indexName;
    this._indexType = config.indexType;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // index_meta_json - computed: false, optional: true, required: false
  private _indexMetaJson?: string; 
  public get indexMetaJson() {
    return this.getStringAttribute('index_meta_json');
  }
  public set indexMetaJson(value: string) {
    this._indexMetaJson = value;
  }
  public resetIndexMetaJson() {
    this._indexMetaJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexMetaJsonInput() {
    return this._indexMetaJson;
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // index_type - computed: false, optional: false, required: true
  private _indexType?: string; 
  public get indexType() {
    return this.getStringAttribute('index_type');
  }
  public set indexType(value: string) {
    this._indexType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTypeInput() {
    return this._indexType;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      index_meta_json: cdktf.stringToTerraform(this._indexMetaJson),
      index_name: cdktf.stringToTerraform(this._indexName),
      index_type: cdktf.stringToTerraform(this._indexType),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_meta_json: {
        value: cdktf.stringToHclTerraform(this._indexMetaJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_name: {
        value: cdktf.stringToHclTerraform(this._indexName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_type: {
        value: cdktf.stringToHclTerraform(this._indexType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
