// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_logic_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsEnterpriseLogicDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_logic_database#alias DmsEnterpriseLogicDatabase#alias}
  */
  readonly alias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_logic_database#database_ids DmsEnterpriseLogicDatabase#database_ids}
  */
  readonly databaseIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_logic_database#id DmsEnterpriseLogicDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_logic_database#logic_database_id DmsEnterpriseLogicDatabase#logic_database_id}
  */
  readonly logicDatabaseId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_logic_database alicloud_dms_enterprise_logic_database}
*/
export class DmsEnterpriseLogicDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dms_enterprise_logic_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsEnterpriseLogicDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsEnterpriseLogicDatabase to import
  * @param importFromId The id of the existing DmsEnterpriseLogicDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_logic_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsEnterpriseLogicDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dms_enterprise_logic_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_logic_database alicloud_dms_enterprise_logic_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsEnterpriseLogicDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DmsEnterpriseLogicDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dms_enterprise_logic_database',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._databaseIds = config.databaseIds;
    this._id = config.id;
    this._logicDatabaseId = config.logicDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // database_ids - computed: false, optional: false, required: true
  private _databaseIds?: string[]; 
  public get databaseIds() {
    return this.getListAttribute('database_ids');
  }
  public set databaseIds(value: string[]) {
    this._databaseIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdsInput() {
    return this._databaseIds;
  }

  // db_type - computed: true, optional: false, required: false
  public get dbType() {
    return this.getStringAttribute('db_type');
  }

  // env_type - computed: true, optional: false, required: false
  public get envType() {
    return this.getStringAttribute('env_type');
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

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getBooleanAttribute('logic');
  }

  // logic_database_id - computed: true, optional: true, required: false
  private _logicDatabaseId?: string; 
  public get logicDatabaseId() {
    return this.getStringAttribute('logic_database_id');
  }
  public set logicDatabaseId(value: string) {
    this._logicDatabaseId = value;
  }
  public resetLogicDatabaseId() {
    this._logicDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicDatabaseIdInput() {
    return this._logicDatabaseId;
  }

  // owner_id_list - computed: true, optional: false, required: false
  public get ownerIdList() {
    return this.getListAttribute('owner_id_list');
  }

  // owner_name_list - computed: true, optional: false, required: false
  public get ownerNameList() {
    return this.getListAttribute('owner_name_list');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // search_name - computed: true, optional: false, required: false
  public get searchName() {
    return this.getStringAttribute('search_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      database_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._databaseIds),
      id: cdktf.stringToTerraform(this._id),
      logic_database_id: cdktf.stringToTerraform(this._logicDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._databaseIds),
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
      logic_database_id: {
        value: cdktf.stringToHclTerraform(this._logicDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
