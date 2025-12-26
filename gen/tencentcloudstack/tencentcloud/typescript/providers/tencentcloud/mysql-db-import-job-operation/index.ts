// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlDbImportJobOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the imported target database, if it is not passed, it means that no database is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation#cos_url MysqlDbImportJobOperation#cos_url}
  */
  readonly cosUrl?: string;
  /**
  * The name of the imported target database, if it is not passed, it means that no database is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation#db_name MysqlDbImportJobOperation#db_name}
  */
  readonly dbName?: string;
  /**
  * file name. This file refers to the file that the user has uploaded to Tencent Cloud, and only .sql files are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation#file_name MysqlDbImportJobOperation#file_name}
  */
  readonly fileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation#id MysqlDbImportJobOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance ID, in the format: cdb-c1nl9rpv, is the same as the instance ID displayed on the cloud database console page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation#instance_id MysqlDbImportJobOperation#instance_id}
  */
  readonly instanceId: string;
  /**
  * The password of the user account of the cloud database instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation#password MysqlDbImportJobOperation#password}
  */
  readonly password?: string;
  /**
  * The username of the cloud database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation#user MysqlDbImportJobOperation#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation tencentcloud_mysql_db_import_job_operation}
*/
export class MysqlDbImportJobOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_db_import_job_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlDbImportJobOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlDbImportJobOperation to import
  * @param importFromId The id of the existing MysqlDbImportJobOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlDbImportJobOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_db_import_job_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mysql_db_import_job_operation tencentcloud_mysql_db_import_job_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlDbImportJobOperationConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlDbImportJobOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_db_import_job_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cosUrl = config.cosUrl;
    this._dbName = config.dbName;
    this._fileName = config.fileName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._password = config.password;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async_request_id - computed: true, optional: false, required: false
  public get asyncRequestId() {
    return this.getStringAttribute('async_request_id');
  }

  // cos_url - computed: false, optional: true, required: false
  private _cosUrl?: string; 
  public get cosUrl() {
    return this.getStringAttribute('cos_url');
  }
  public set cosUrl(value: string) {
    this._cosUrl = value;
  }
  public resetCosUrl() {
    this._cosUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosUrlInput() {
    return this._cosUrl;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cos_url: cdktf.stringToTerraform(this._cosUrl),
      db_name: cdktf.stringToTerraform(this._dbName),
      file_name: cdktf.stringToTerraform(this._fileName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      password: cdktf.stringToTerraform(this._password),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cos_url: {
        value: cdktf.stringToHclTerraform(this._cosUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
