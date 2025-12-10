// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmProductSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description, which is used to describe the purpose in detail and can contain up to 2,048 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#description SsmProductSecret#description}
  */
  readonly description?: string;
  /**
  * Domain name of the account in the form of IP. You can enter `%`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#domains SsmProductSecret#domains}
  */
  readonly domains: string[];
  /**
  * Specifies whether to enable rotation, when secret status is `Disabled`, rotation will be disabled. `True` - enable, `False` - do not enable. If this parameter is not specified, `False` will be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#enable_rotation SsmProductSecret#enable_rotation}
  */
  readonly enableRotation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#id SsmProductSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tencent Cloud service instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#instance_id SsmProductSecret#instance_id}
  */
  readonly instanceId: string;
  /**
  * Specifies the KMS CMK that encrypts the credential. If this parameter is left empty, the CMK created by Secrets Manager by default will be used for encryption.You can also specify a custom KMS CMK created in the same region for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#kms_key_id SsmProductSecret#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Name of the Tencent Cloud service bound to the credential, such as `Mysql`, `Tdsql-mysql`, `Tdsql_C_Mysql`. you can use dataSource `tencentcloud_ssm_products` to query supported products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#product_name SsmProductSecret#product_name}
  */
  readonly productName: string;
  /**
  * User-Defined rotation start time in the format of 2006-01-02 15:04:05.When `EnableRotation` is `True`, this parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#rotation_begin_time SsmProductSecret#rotation_begin_time}
  */
  readonly rotationBeginTime?: string;
  /**
  * Rotation frequency in days. Default value: 1 day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#rotation_frequency SsmProductSecret#rotation_frequency}
  */
  readonly rotationFrequency?: number;
  /**
  * Credential name, which must be unique in the same region. It can contain 128 bytes of letters, digits, hyphens, and underscores and must begin with a letter or digit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#secret_name SsmProductSecret#secret_name}
  */
  readonly secretName: string;
  /**
  * Enable or Disable Secret. Valid values is `Enabled` or `Disabled`. Default is `Enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#status SsmProductSecret#status}
  */
  readonly status?: string;
  /**
  * Tags of secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#tags SsmProductSecret#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Prefix of the user account name, which is specified by you and can contain up to 8 characters.Supported character sets include:Digits: [0, 9].Lowercase letters: [a, z].Uppercase letters: [A, Z].Special symbols: underscore.The prefix must begin with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#user_name_prefix SsmProductSecret#user_name_prefix}
  */
  readonly userNamePrefix: string;
  /**
  * privileges_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#privileges_list SsmProductSecret#privileges_list}
  */
  readonly privilegesList: SsmProductSecretPrivilegesListStruct[] | cdktf.IResolvable;
}
export interface SsmProductSecretPrivilegesListStruct {
  /**
  * This value takes effect only when `PrivilegeName` is `ColumnPrivileges`, and the following parameters are required in this case:Database: explicitly indicate the database instance.TableName: explicitly indicate the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#column_name SsmProductSecret#column_name}
  */
  readonly columnName?: string;
  /**
  * This value takes effect only when `PrivilegeName` is `DatabasePrivileges`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#database SsmProductSecret#database}
  */
  readonly database?: string;
  /**
  * Permission name. Valid values: `GlobalPrivileges`, `DatabasePrivileges`, `TablePrivileges`, `ColumnPrivileges`. When the permission is `DatabasePrivileges`, the database name must be specified by the `Database` parameter; When the permission is `TablePrivileges`, the database name and the table name in the database must be specified by the `Database` and `TableName` parameters; When the permission is `ColumnPrivileges`, the database name, table name in the database, and column name in the table must be specified by the `Database`, `TableName`, and `ColumnName` parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#privilege_name SsmProductSecret#privilege_name}
  */
  readonly privilegeName: string;
  /**
  * Permission list. For the `Mysql` service, optional permission values are: 1. Valid values of `GlobalPrivileges`: SELECT,INSERT,UPDATE,DELETE,CREATE, PROCESS, DROP,REFERENCES,INDEX,ALTER,SHOW DATABASES,CREATE TEMPORARY TABLES,LOCK TABLES,EXECUTE,CREATE VIEW,SHOW VIEW,CREATE ROUTINE,ALTER ROUTINE,EVENT,TRIGGER. Note: if this parameter is not passed in, it means to clear the permission. 2. Valid values of `DatabasePrivileges`: SELECT,INSERT,UPDATE,DELETE,CREATE, DROP,REFERENCES,INDEX,ALTER,CREATE TEMPORARY TABLES,LOCK TABLES,EXECUTE,CREATE VIEW,SHOW VIEW,CREATE ROUTINE,ALTER ROUTINE,EVENT,TRIGGER. Note: if this parameter is not passed in, it means to clear the permission. 3. Valid values of `TablePrivileges`: SELECT,INSERT,UPDATE,DELETE,CREATE, DROP,REFERENCES,INDEX,ALTER,CREATE VIEW,SHOW VIEW, TRIGGER. Note: if this parameter is not passed in, it means to clear the permission. 4. Valid values of `ColumnPrivileges`: SELECT,INSERT,UPDATE,REFERENCES.Note: if this parameter is not passed in, it means to clear the permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#privileges SsmProductSecret#privileges}
  */
  readonly privileges: string[];
  /**
  * This value takes effect only when `PrivilegeName` is `TablePrivileges`, and the `Database` parameter is required in this case to explicitly indicate the database instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#table_name SsmProductSecret#table_name}
  */
  readonly tableName?: string;
}

export function ssmProductSecretPrivilegesListStructToTerraform(struct?: SsmProductSecretPrivilegesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    database: cdktf.stringToTerraform(struct!.database),
    privilege_name: cdktf.stringToTerraform(struct!.privilegeName),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function ssmProductSecretPrivilegesListStructToHclTerraform(struct?: SsmProductSecretPrivilegesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege_name: {
      value: cdktf.stringToHclTerraform(struct!.privilegeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmProductSecretPrivilegesListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmProductSecretPrivilegesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._privilegeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeName = this._privilegeName;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmProductSecretPrivilegesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._database = undefined;
      this._privilegeName = undefined;
      this._privileges = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._database = value.database;
      this._privilegeName = value.privilegeName;
      this._privileges = value.privileges;
      this._tableName = value.tableName;
    }
  }

  // column_name - computed: false, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // privilege_name - computed: false, optional: false, required: true
  private _privilegeName?: string; 
  public get privilegeName() {
    return this.getStringAttribute('privilege_name');
  }
  public set privilegeName(value: string) {
    this._privilegeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeNameInput() {
    return this._privilegeName;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class SsmProductSecretPrivilegesListStructList extends cdktf.ComplexList {
  public internalValue? : SsmProductSecretPrivilegesListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmProductSecretPrivilegesListStructOutputReference {
    return new SsmProductSecretPrivilegesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret tencentcloud_ssm_product_secret}
*/
export class SsmProductSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssm_product_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsmProductSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmProductSecret to import
  * @param importFromId The id of the existing SsmProductSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmProductSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssm_product_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ssm_product_secret tencentcloud_ssm_product_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmProductSecretConfig
  */
  public constructor(scope: Construct, id: string, config: SsmProductSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssm_product_secret',
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
    this._description = config.description;
    this._domains = config.domains;
    this._enableRotation = config.enableRotation;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._kmsKeyId = config.kmsKeyId;
    this._productName = config.productName;
    this._rotationBeginTime = config.rotationBeginTime;
    this._rotationFrequency = config.rotationFrequency;
    this._secretName = config.secretName;
    this._status = config.status;
    this._tags = config.tags;
    this._userNamePrefix = config.userNamePrefix;
    this._privilegesList.internalValue = config.privilegesList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
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

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // enable_rotation - computed: true, optional: true, required: false
  private _enableRotation?: boolean | cdktf.IResolvable; 
  public get enableRotation() {
    return this.getBooleanAttribute('enable_rotation');
  }
  public set enableRotation(value: boolean | cdktf.IResolvable) {
    this._enableRotation = value;
  }
  public resetEnableRotation() {
    this._enableRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRotationInput() {
    return this._enableRotation;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // product_name - computed: false, optional: false, required: true
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // rotation_begin_time - computed: true, optional: true, required: false
  private _rotationBeginTime?: string; 
  public get rotationBeginTime() {
    return this.getStringAttribute('rotation_begin_time');
  }
  public set rotationBeginTime(value: string) {
    this._rotationBeginTime = value;
  }
  public resetRotationBeginTime() {
    this._rotationBeginTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationBeginTimeInput() {
    return this._rotationBeginTime;
  }

  // rotation_frequency - computed: true, optional: true, required: false
  private _rotationFrequency?: number; 
  public get rotationFrequency() {
    return this.getNumberAttribute('rotation_frequency');
  }
  public set rotationFrequency(value: number) {
    this._rotationFrequency = value;
  }
  public resetRotationFrequency() {
    this._rotationFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationFrequencyInput() {
    return this._rotationFrequency;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_type - computed: true, optional: false, required: false
  public get secretType() {
    return this.getNumberAttribute('secret_type');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_name_prefix - computed: false, optional: false, required: true
  private _userNamePrefix?: string; 
  public get userNamePrefix() {
    return this.getStringAttribute('user_name_prefix');
  }
  public set userNamePrefix(value: string) {
    this._userNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNamePrefixInput() {
    return this._userNamePrefix;
  }

  // privileges_list - computed: false, optional: false, required: true
  private _privilegesList = new SsmProductSecretPrivilegesListStructList(this, "privileges_list", false);
  public get privilegesList() {
    return this._privilegesList;
  }
  public putPrivilegesList(value: SsmProductSecretPrivilegesListStruct[] | cdktf.IResolvable) {
    this._privilegesList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesListInput() {
    return this._privilegesList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      enable_rotation: cdktf.booleanToTerraform(this._enableRotation),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      product_name: cdktf.stringToTerraform(this._productName),
      rotation_begin_time: cdktf.stringToTerraform(this._rotationBeginTime),
      rotation_frequency: cdktf.numberToTerraform(this._rotationFrequency),
      secret_name: cdktf.stringToTerraform(this._secretName),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_name_prefix: cdktf.stringToTerraform(this._userNamePrefix),
      privileges_list: cdktf.listMapper(ssmProductSecretPrivilegesListStructToTerraform, true)(this._privilegesList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_rotation: {
        value: cdktf.booleanToHclTerraform(this._enableRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_begin_time: {
        value: cdktf.stringToHclTerraform(this._rotationBeginTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_frequency: {
        value: cdktf.numberToHclTerraform(this._rotationFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_name_prefix: {
        value: cdktf.stringToHclTerraform(this._userNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges_list: {
        value: cdktf.listMapperHcl(ssmProductSecretPrivilegesListStructToHclTerraform, true)(this._privilegesList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmProductSecretPrivilegesListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
