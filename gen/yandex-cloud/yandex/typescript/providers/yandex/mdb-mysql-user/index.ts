// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbMysqlUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication plugin. Allowed values: `MYSQL_NATIVE_PASSWORD`, `CACHING_SHA2_PASSWORD`, `SHA256_PASSWORD`, `MYSQL_NO_LOGIN`, `MDB_IAMPROXY_AUTH` (for version 5.7 `MYSQL_NATIVE_PASSWORD`, `SHA256_PASSWORD`, `MYSQL_NO_LOGIN`, `MDB_IAMPROXY_AUTH`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#authentication_plugin MdbMysqlUser#authentication_plugin}
  */
  readonly authenticationPlugin?: string;
  /**
  * The ID of the MySQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#cluster_id MdbMysqlUser#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Generate password using Connection Manager. Allowed values: `true` or `false`. It's used only during user creation and is ignored during updating.
  * 
  * ~> **Must specify either password or generate_password**.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#generate_password MdbMysqlUser#generate_password}
  */
  readonly generatePassword?: boolean | cdktf.IResolvable;
  /**
  * List user's global permissions. Allowed permissions: `REPLICATION_CLIENT`, `REPLICATION_SLAVE`, `PROCESS`, `FLUSH_OPTIMIZER_COSTS`, `SHOW_ROUTINE`, `MDB_ADMIN` for clear list use empty list. If the attribute is not specified there will be no changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#global_permissions MdbMysqlUser#global_permissions}
  */
  readonly globalPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#id MdbMysqlUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#name MdbMysqlUser#name}
  */
  readonly name: string;
  /**
  * The password of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#password MdbMysqlUser#password}
  */
  readonly password?: string;
  /**
  * connection_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#connection_limits MdbMysqlUser#connection_limits}
  */
  readonly connectionLimits?: MdbMysqlUserConnectionLimits;
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#permission MdbMysqlUser#permission}
  */
  readonly permission?: MdbMysqlUserPermission[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#timeouts MdbMysqlUser#timeouts}
  */
  readonly timeouts?: MdbMysqlUserTimeouts;
}
export interface MdbMysqlUserConnectionLimits {
  /**
  * Max connections per hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#max_connections_per_hour MdbMysqlUser#max_connections_per_hour}
  */
  readonly maxConnectionsPerHour?: number;
  /**
  * Max questions per hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#max_questions_per_hour MdbMysqlUser#max_questions_per_hour}
  */
  readonly maxQuestionsPerHour?: number;
  /**
  * Max updates per hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#max_updates_per_hour MdbMysqlUser#max_updates_per_hour}
  */
  readonly maxUpdatesPerHour?: number;
  /**
  * Max user connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#max_user_connections MdbMysqlUser#max_user_connections}
  */
  readonly maxUserConnections?: number;
}

export function mdbMysqlUserConnectionLimitsToTerraform(struct?: MdbMysqlUserConnectionLimitsOutputReference | MdbMysqlUserConnectionLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections_per_hour: cdktf.numberToTerraform(struct!.maxConnectionsPerHour),
    max_questions_per_hour: cdktf.numberToTerraform(struct!.maxQuestionsPerHour),
    max_updates_per_hour: cdktf.numberToTerraform(struct!.maxUpdatesPerHour),
    max_user_connections: cdktf.numberToTerraform(struct!.maxUserConnections),
  }
}


export function mdbMysqlUserConnectionLimitsToHclTerraform(struct?: MdbMysqlUserConnectionLimitsOutputReference | MdbMysqlUserConnectionLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections_per_hour: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionsPerHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_questions_per_hour: {
      value: cdktf.numberToHclTerraform(struct!.maxQuestionsPerHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_updates_per_hour: {
      value: cdktf.numberToHclTerraform(struct!.maxUpdatesPerHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_user_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxUserConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlUserConnectionLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlUserConnectionLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnectionsPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerHour = this._maxConnectionsPerHour;
    }
    if (this._maxQuestionsPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuestionsPerHour = this._maxQuestionsPerHour;
    }
    if (this._maxUpdatesPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpdatesPerHour = this._maxUpdatesPerHour;
    }
    if (this._maxUserConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUserConnections = this._maxUserConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlUserConnectionLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConnectionsPerHour = undefined;
      this._maxQuestionsPerHour = undefined;
      this._maxUpdatesPerHour = undefined;
      this._maxUserConnections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConnectionsPerHour = value.maxConnectionsPerHour;
      this._maxQuestionsPerHour = value.maxQuestionsPerHour;
      this._maxUpdatesPerHour = value.maxUpdatesPerHour;
      this._maxUserConnections = value.maxUserConnections;
    }
  }

  // max_connections_per_hour - computed: false, optional: true, required: false
  private _maxConnectionsPerHour?: number; 
  public get maxConnectionsPerHour() {
    return this.getNumberAttribute('max_connections_per_hour');
  }
  public set maxConnectionsPerHour(value: number) {
    this._maxConnectionsPerHour = value;
  }
  public resetMaxConnectionsPerHour() {
    this._maxConnectionsPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerHourInput() {
    return this._maxConnectionsPerHour;
  }

  // max_questions_per_hour - computed: false, optional: true, required: false
  private _maxQuestionsPerHour?: number; 
  public get maxQuestionsPerHour() {
    return this.getNumberAttribute('max_questions_per_hour');
  }
  public set maxQuestionsPerHour(value: number) {
    this._maxQuestionsPerHour = value;
  }
  public resetMaxQuestionsPerHour() {
    this._maxQuestionsPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuestionsPerHourInput() {
    return this._maxQuestionsPerHour;
  }

  // max_updates_per_hour - computed: false, optional: true, required: false
  private _maxUpdatesPerHour?: number; 
  public get maxUpdatesPerHour() {
    return this.getNumberAttribute('max_updates_per_hour');
  }
  public set maxUpdatesPerHour(value: number) {
    this._maxUpdatesPerHour = value;
  }
  public resetMaxUpdatesPerHour() {
    this._maxUpdatesPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpdatesPerHourInput() {
    return this._maxUpdatesPerHour;
  }

  // max_user_connections - computed: false, optional: true, required: false
  private _maxUserConnections?: number; 
  public get maxUserConnections() {
    return this.getNumberAttribute('max_user_connections');
  }
  public set maxUserConnections(value: number) {
    this._maxUserConnections = value;
  }
  public resetMaxUserConnections() {
    this._maxUserConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserConnectionsInput() {
    return this._maxUserConnections;
  }
}
export interface MdbMysqlUserPermission {
  /**
  * The name of the database that the permission grants access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#database_name MdbMysqlUser#database_name}
  */
  readonly databaseName: string;
  /**
  * List user's roles in the database. Allowed roles: `ALL`,`ALTER`,`ALTER_ROUTINE`,`CREATE`,`CREATE_ROUTINE`,`CREATE_TEMPORARY_TABLES`, `CREATE_VIEW`,`DELETE`,`DROP`,`EVENT`,`EXECUTE`,`INDEX`,`INSERT`,`LOCK_TABLES`,`SELECT`,`SHOW_VIEW`,`TRIGGER`,`UPDATE`,`REFERENCES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#roles MdbMysqlUser#roles}
  */
  readonly roles?: string[];
}

export function mdbMysqlUserPermissionToTerraform(struct?: MdbMysqlUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function mdbMysqlUserPermissionToHclTerraform(struct?: MdbMysqlUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlUserPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbMysqlUserPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlUserPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._roles = value.roles;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class MdbMysqlUserPermissionList extends cdktf.ComplexList {
  public internalValue? : MdbMysqlUserPermission[] | cdktf.IResolvable

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
  public get(index: number): MdbMysqlUserPermissionOutputReference {
    return new MdbMysqlUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbMysqlUserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#create MdbMysqlUser#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#delete MdbMysqlUser#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#read MdbMysqlUser#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#update MdbMysqlUser#update}
  */
  readonly update?: string;
}

export function mdbMysqlUserTimeoutsToTerraform(struct?: MdbMysqlUserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mdbMysqlUserTimeoutsToHclTerraform(struct?: MdbMysqlUserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbMysqlUserTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlUserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user yandex_mdb_mysql_user}
*/
export class MdbMysqlUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_mysql_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbMysqlUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbMysqlUser to import
  * @param importFromId The id of the existing MdbMysqlUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbMysqlUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_mysql_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_mysql_user yandex_mdb_mysql_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbMysqlUserConfig
  */
  public constructor(scope: Construct, id: string, config: MdbMysqlUserConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_mysql_user',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationPlugin = config.authenticationPlugin;
    this._clusterId = config.clusterId;
    this._generatePassword = config.generatePassword;
    this._globalPermissions = config.globalPermissions;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._connectionLimits.internalValue = config.connectionLimits;
    this._permission.internalValue = config.permission;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_plugin - computed: true, optional: true, required: false
  private _authenticationPlugin?: string; 
  public get authenticationPlugin() {
    return this.getStringAttribute('authentication_plugin');
  }
  public set authenticationPlugin(value: string) {
    this._authenticationPlugin = value;
  }
  public resetAuthenticationPlugin() {
    this._authenticationPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPluginInput() {
    return this._authenticationPlugin;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // connection_manager - computed: true, optional: false, required: false
  private _connectionManager = new cdktf.StringMap(this, "connection_manager");
  public get connectionManager() {
    return this._connectionManager;
  }

  // generate_password - computed: false, optional: true, required: false
  private _generatePassword?: boolean | cdktf.IResolvable; 
  public get generatePassword() {
    return this.getBooleanAttribute('generate_password');
  }
  public set generatePassword(value: boolean | cdktf.IResolvable) {
    this._generatePassword = value;
  }
  public resetGeneratePassword() {
    this._generatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatePasswordInput() {
    return this._generatePassword;
  }

  // global_permissions - computed: true, optional: true, required: false
  private _globalPermissions?: string[]; 
  public get globalPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('global_permissions'));
  }
  public set globalPermissions(value: string[]) {
    this._globalPermissions = value;
  }
  public resetGlobalPermissions() {
    this._globalPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPermissionsInput() {
    return this._globalPermissions;
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

  // connection_limits - computed: false, optional: true, required: false
  private _connectionLimits = new MdbMysqlUserConnectionLimitsOutputReference(this, "connection_limits");
  public get connectionLimits() {
    return this._connectionLimits;
  }
  public putConnectionLimits(value: MdbMysqlUserConnectionLimits) {
    this._connectionLimits.internalValue = value;
  }
  public resetConnectionLimits() {
    this._connectionLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitsInput() {
    return this._connectionLimits.internalValue;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new MdbMysqlUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: MdbMysqlUserPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbMysqlUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbMysqlUserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_plugin: cdktf.stringToTerraform(this._authenticationPlugin),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      generate_password: cdktf.booleanToTerraform(this._generatePassword),
      global_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalPermissions),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      connection_limits: mdbMysqlUserConnectionLimitsToTerraform(this._connectionLimits.internalValue),
      permission: cdktf.listMapper(mdbMysqlUserPermissionToTerraform, true)(this._permission.internalValue),
      timeouts: mdbMysqlUserTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_plugin: {
        value: cdktf.stringToHclTerraform(this._authenticationPlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_password: {
        value: cdktf.booleanToHclTerraform(this._generatePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalPermissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      connection_limits: {
        value: mdbMysqlUserConnectionLimitsToHclTerraform(this._connectionLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbMysqlUserConnectionLimitsList",
      },
      permission: {
        value: cdktf.listMapperHcl(mdbMysqlUserPermissionToHclTerraform, true)(this._permission.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MdbMysqlUserPermissionList",
      },
      timeouts: {
        value: mdbMysqlUserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbMysqlUserTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
