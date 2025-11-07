// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OtsSecondaryIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index#defined_columns OtsSecondaryIndex#defined_columns}
  */
  readonly definedColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index#id OtsSecondaryIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index#include_base_data OtsSecondaryIndex#include_base_data}
  */
  readonly includeBaseData: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index#index_name OtsSecondaryIndex#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index#index_type OtsSecondaryIndex#index_type}
  */
  readonly indexType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index#instance_name OtsSecondaryIndex#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index#primary_keys OtsSecondaryIndex#primary_keys}
  */
  readonly primaryKeys: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index#table_name OtsSecondaryIndex#table_name}
  */
  readonly tableName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index alicloud_ots_secondary_index}
*/
export class OtsSecondaryIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ots_secondary_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OtsSecondaryIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OtsSecondaryIndex to import
  * @param importFromId The id of the existing OtsSecondaryIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OtsSecondaryIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ots_secondary_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ots_secondary_index alicloud_ots_secondary_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OtsSecondaryIndexConfig
  */
  public constructor(scope: Construct, id: string, config: OtsSecondaryIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ots_secondary_index',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definedColumns = config.definedColumns;
    this._id = config.id;
    this._includeBaseData = config.includeBaseData;
    this._indexName = config.indexName;
    this._indexType = config.indexType;
    this._instanceName = config.instanceName;
    this._primaryKeys = config.primaryKeys;
    this._tableName = config.tableName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defined_columns - computed: false, optional: true, required: false
  private _definedColumns?: string[]; 
  public get definedColumns() {
    return this.getListAttribute('defined_columns');
  }
  public set definedColumns(value: string[]) {
    this._definedColumns = value;
  }
  public resetDefinedColumns() {
    this._definedColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedColumnsInput() {
    return this._definedColumns;
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

  // include_base_data - computed: false, optional: false, required: true
  private _includeBaseData?: boolean | cdktf.IResolvable; 
  public get includeBaseData() {
    return this.getBooleanAttribute('include_base_data');
  }
  public set includeBaseData(value: boolean | cdktf.IResolvable) {
    this._includeBaseData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBaseDataInput() {
    return this._includeBaseData;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // primary_keys - computed: false, optional: false, required: true
  private _primaryKeys?: string[]; 
  public get primaryKeys() {
    return this.getListAttribute('primary_keys');
  }
  public set primaryKeys(value: string[]) {
    this._primaryKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeysInput() {
    return this._primaryKeys;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defined_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._definedColumns),
      id: cdktf.stringToTerraform(this._id),
      include_base_data: cdktf.booleanToTerraform(this._includeBaseData),
      index_name: cdktf.stringToTerraform(this._indexName),
      index_type: cdktf.stringToTerraform(this._indexType),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      primary_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primaryKeys),
      table_name: cdktf.stringToTerraform(this._tableName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defined_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._definedColumns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_base_data: {
        value: cdktf.booleanToHclTerraform(this._includeBaseData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._primaryKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
