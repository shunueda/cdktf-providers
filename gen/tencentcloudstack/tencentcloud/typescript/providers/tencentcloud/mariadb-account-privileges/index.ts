// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MariadbAccountPrivilegesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Global permission. Valid values of `GlobalPrivileges`: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `PROCESS`, `DROP`, `REFERENCES`, `INDEX`, `ALTER`, `SHOW DATABASES`, `CREATE TEMPORARY TABLES`, `LOCK TABLES`, `EXECUTE`, `CREATE VIEW`, `SHOW VIEW`, `CREATE ROUTINE`, `ALTER ROUTINE`, `EVENT`, `TRIGGER`.Note: if the parameter is left empty, no change will be made to the granted global permissions. To clear the granted global permissions, set the parameter to an empty array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#global_privileges MariadbAccountPrivileges#global_privileges}
  */
  readonly globalPrivileges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#id MariadbAccountPrivileges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#instance_id MariadbAccountPrivileges#instance_id}
  */
  readonly instanceId: string;
  /**
  * accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#accounts MariadbAccountPrivileges#accounts}
  */
  readonly accounts: MariadbAccountPrivilegesAccounts;
  /**
  * column_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#column_privileges MariadbAccountPrivileges#column_privileges}
  */
  readonly columnPrivileges?: MariadbAccountPrivilegesColumnPrivileges[] | cdktf.IResolvable;
  /**
  * database_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#database_privileges MariadbAccountPrivileges#database_privileges}
  */
  readonly databasePrivileges?: MariadbAccountPrivilegesDatabasePrivileges[] | cdktf.IResolvable;
  /**
  * function_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#function_privileges MariadbAccountPrivileges#function_privileges}
  */
  readonly functionPrivileges?: MariadbAccountPrivilegesFunctionPrivileges[] | cdktf.IResolvable;
  /**
  * procedure_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#procedure_privileges MariadbAccountPrivileges#procedure_privileges}
  */
  readonly procedurePrivileges?: MariadbAccountPrivilegesProcedurePrivileges[] | cdktf.IResolvable;
  /**
  * table_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#table_privileges MariadbAccountPrivileges#table_privileges}
  */
  readonly tablePrivileges?: MariadbAccountPrivilegesTablePrivileges[] | cdktf.IResolvable;
  /**
  * view_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#view_privileges MariadbAccountPrivileges#view_privileges}
  */
  readonly viewPrivileges?: MariadbAccountPrivilegesViewPrivileges[] | cdktf.IResolvable;
}
export interface MariadbAccountPrivilegesAccounts {
  /**
  * user host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#host MariadbAccountPrivileges#host}
  */
  readonly host: string;
  /**
  * user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#user MariadbAccountPrivileges#user}
  */
  readonly user: string;
}

export function mariadbAccountPrivilegesAccountsToTerraform(struct?: MariadbAccountPrivilegesAccountsOutputReference | MariadbAccountPrivilegesAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function mariadbAccountPrivilegesAccountsToHclTerraform(struct?: MariadbAccountPrivilegesAccountsOutputReference | MariadbAccountPrivilegesAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MariadbAccountPrivilegesAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MariadbAccountPrivilegesAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariadbAccountPrivilegesAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._user = value.user;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
}
export interface MariadbAccountPrivilegesColumnPrivileges {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#column MariadbAccountPrivileges#column}
  */
  readonly column: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#database MariadbAccountPrivileges#database}
  */
  readonly database: string;
  /**
  * Permission information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#privileges MariadbAccountPrivileges#privileges}
  */
  readonly privileges: string[];
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#table MariadbAccountPrivileges#table}
  */
  readonly table: string;
}

export function mariadbAccountPrivilegesColumnPrivilegesToTerraform(struct?: MariadbAccountPrivilegesColumnPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    database: cdktf.stringToTerraform(struct!.database),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function mariadbAccountPrivilegesColumnPrivilegesToHclTerraform(struct?: MariadbAccountPrivilegesColumnPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
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
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MariadbAccountPrivilegesColumnPrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MariadbAccountPrivilegesColumnPrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariadbAccountPrivilegesColumnPrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._database = undefined;
      this._privileges = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._database = value.database;
      this._privileges = value.privileges;
      this._table = value.table;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}

export class MariadbAccountPrivilegesColumnPrivilegesList extends cdktf.ComplexList {
  public internalValue? : MariadbAccountPrivilegesColumnPrivileges[] | cdktf.IResolvable

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
  public get(index: number): MariadbAccountPrivilegesColumnPrivilegesOutputReference {
    return new MariadbAccountPrivilegesColumnPrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MariadbAccountPrivilegesDatabasePrivileges {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#database MariadbAccountPrivileges#database}
  */
  readonly database: string;
  /**
  * Permission information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#privileges MariadbAccountPrivileges#privileges}
  */
  readonly privileges: string[];
}

export function mariadbAccountPrivilegesDatabasePrivilegesToTerraform(struct?: MariadbAccountPrivilegesDatabasePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
  }
}


export function mariadbAccountPrivilegesDatabasePrivilegesToHclTerraform(struct?: MariadbAccountPrivilegesDatabasePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MariadbAccountPrivilegesDatabasePrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MariadbAccountPrivilegesDatabasePrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariadbAccountPrivilegesDatabasePrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._privileges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._privileges = value.privileges;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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
}

export class MariadbAccountPrivilegesDatabasePrivilegesList extends cdktf.ComplexList {
  public internalValue? : MariadbAccountPrivilegesDatabasePrivileges[] | cdktf.IResolvable

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
  public get(index: number): MariadbAccountPrivilegesDatabasePrivilegesOutputReference {
    return new MariadbAccountPrivilegesDatabasePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MariadbAccountPrivilegesFunctionPrivileges {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#database MariadbAccountPrivileges#database}
  */
  readonly database: string;
  /**
  * Function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#function_name MariadbAccountPrivileges#function_name}
  */
  readonly functionName: string;
  /**
  * Permission information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#privileges MariadbAccountPrivileges#privileges}
  */
  readonly privileges: string[];
}

export function mariadbAccountPrivilegesFunctionPrivilegesToTerraform(struct?: MariadbAccountPrivilegesFunctionPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
  }
}


export function mariadbAccountPrivilegesFunctionPrivilegesToHclTerraform(struct?: MariadbAccountPrivilegesFunctionPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MariadbAccountPrivilegesFunctionPrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MariadbAccountPrivilegesFunctionPrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariadbAccountPrivilegesFunctionPrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._functionName = undefined;
      this._privileges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._functionName = value.functionName;
      this._privileges = value.privileges;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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
}

export class MariadbAccountPrivilegesFunctionPrivilegesList extends cdktf.ComplexList {
  public internalValue? : MariadbAccountPrivilegesFunctionPrivileges[] | cdktf.IResolvable

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
  public get(index: number): MariadbAccountPrivilegesFunctionPrivilegesOutputReference {
    return new MariadbAccountPrivilegesFunctionPrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MariadbAccountPrivilegesProcedurePrivileges {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#database MariadbAccountPrivileges#database}
  */
  readonly database: string;
  /**
  * Permission information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#privileges MariadbAccountPrivileges#privileges}
  */
  readonly privileges: string[];
  /**
  * Procedure name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#procedure MariadbAccountPrivileges#procedure}
  */
  readonly procedure: string;
}

export function mariadbAccountPrivilegesProcedurePrivilegesToTerraform(struct?: MariadbAccountPrivilegesProcedurePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    procedure: cdktf.stringToTerraform(struct!.procedure),
  }
}


export function mariadbAccountPrivilegesProcedurePrivilegesToHclTerraform(struct?: MariadbAccountPrivilegesProcedurePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
    procedure: {
      value: cdktf.stringToHclTerraform(struct!.procedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MariadbAccountPrivilegesProcedurePrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MariadbAccountPrivilegesProcedurePrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._procedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.procedure = this._procedure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariadbAccountPrivilegesProcedurePrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._privileges = undefined;
      this._procedure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._privileges = value.privileges;
      this._procedure = value.procedure;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // procedure - computed: false, optional: false, required: true
  private _procedure?: string; 
  public get procedure() {
    return this.getStringAttribute('procedure');
  }
  public set procedure(value: string) {
    this._procedure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureInput() {
    return this._procedure;
  }
}

export class MariadbAccountPrivilegesProcedurePrivilegesList extends cdktf.ComplexList {
  public internalValue? : MariadbAccountPrivilegesProcedurePrivileges[] | cdktf.IResolvable

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
  public get(index: number): MariadbAccountPrivilegesProcedurePrivilegesOutputReference {
    return new MariadbAccountPrivilegesProcedurePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MariadbAccountPrivilegesTablePrivileges {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#database MariadbAccountPrivileges#database}
  */
  readonly database: string;
  /**
  * Permission information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#privileges MariadbAccountPrivileges#privileges}
  */
  readonly privileges: string[];
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#table MariadbAccountPrivileges#table}
  */
  readonly table: string;
}

export function mariadbAccountPrivilegesTablePrivilegesToTerraform(struct?: MariadbAccountPrivilegesTablePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function mariadbAccountPrivilegesTablePrivilegesToHclTerraform(struct?: MariadbAccountPrivilegesTablePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MariadbAccountPrivilegesTablePrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MariadbAccountPrivilegesTablePrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariadbAccountPrivilegesTablePrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._privileges = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._privileges = value.privileges;
      this._table = value.table;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}

export class MariadbAccountPrivilegesTablePrivilegesList extends cdktf.ComplexList {
  public internalValue? : MariadbAccountPrivilegesTablePrivileges[] | cdktf.IResolvable

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
  public get(index: number): MariadbAccountPrivilegesTablePrivilegesOutputReference {
    return new MariadbAccountPrivilegesTablePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MariadbAccountPrivilegesViewPrivileges {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#database MariadbAccountPrivileges#database}
  */
  readonly database: string;
  /**
  * Permission information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#privileges MariadbAccountPrivileges#privileges}
  */
  readonly privileges: string[];
  /**
  * View name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#view MariadbAccountPrivileges#view}
  */
  readonly view: string;
}

export function mariadbAccountPrivilegesViewPrivilegesToTerraform(struct?: MariadbAccountPrivilegesViewPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function mariadbAccountPrivilegesViewPrivilegesToHclTerraform(struct?: MariadbAccountPrivilegesViewPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MariadbAccountPrivilegesViewPrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MariadbAccountPrivilegesViewPrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariadbAccountPrivilegesViewPrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._privileges = undefined;
      this._view = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._privileges = value.privileges;
      this._view = value.view;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // view - computed: false, optional: false, required: true
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}

export class MariadbAccountPrivilegesViewPrivilegesList extends cdktf.ComplexList {
  public internalValue? : MariadbAccountPrivilegesViewPrivileges[] | cdktf.IResolvable

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
  public get(index: number): MariadbAccountPrivilegesViewPrivilegesOutputReference {
    return new MariadbAccountPrivilegesViewPrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges tencentcloud_mariadb_account_privileges}
*/
export class MariadbAccountPrivileges extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mariadb_account_privileges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MariadbAccountPrivileges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MariadbAccountPrivileges to import
  * @param importFromId The id of the existing MariadbAccountPrivileges that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MariadbAccountPrivileges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mariadb_account_privileges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_account_privileges tencentcloud_mariadb_account_privileges} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MariadbAccountPrivilegesConfig
  */
  public constructor(scope: Construct, id: string, config: MariadbAccountPrivilegesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mariadb_account_privileges',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._globalPrivileges = config.globalPrivileges;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._accounts.internalValue = config.accounts;
    this._columnPrivileges.internalValue = config.columnPrivileges;
    this._databasePrivileges.internalValue = config.databasePrivileges;
    this._functionPrivileges.internalValue = config.functionPrivileges;
    this._procedurePrivileges.internalValue = config.procedurePrivileges;
    this._tablePrivileges.internalValue = config.tablePrivileges;
    this._viewPrivileges.internalValue = config.viewPrivileges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // global_privileges - computed: false, optional: true, required: false
  private _globalPrivileges?: string[]; 
  public get globalPrivileges() {
    return cdktf.Fn.tolist(this.getListAttribute('global_privileges'));
  }
  public set globalPrivileges(value: string[]) {
    this._globalPrivileges = value;
  }
  public resetGlobalPrivileges() {
    this._globalPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPrivilegesInput() {
    return this._globalPrivileges;
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

  // accounts - computed: false, optional: false, required: true
  private _accounts = new MariadbAccountPrivilegesAccountsOutputReference(this, "accounts");
  public get accounts() {
    return this._accounts;
  }
  public putAccounts(value: MariadbAccountPrivilegesAccounts) {
    this._accounts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts.internalValue;
  }

  // column_privileges - computed: false, optional: true, required: false
  private _columnPrivileges = new MariadbAccountPrivilegesColumnPrivilegesList(this, "column_privileges", false);
  public get columnPrivileges() {
    return this._columnPrivileges;
  }
  public putColumnPrivileges(value: MariadbAccountPrivilegesColumnPrivileges[] | cdktf.IResolvable) {
    this._columnPrivileges.internalValue = value;
  }
  public resetColumnPrivileges() {
    this._columnPrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnPrivilegesInput() {
    return this._columnPrivileges.internalValue;
  }

  // database_privileges - computed: false, optional: true, required: false
  private _databasePrivileges = new MariadbAccountPrivilegesDatabasePrivilegesList(this, "database_privileges", false);
  public get databasePrivileges() {
    return this._databasePrivileges;
  }
  public putDatabasePrivileges(value: MariadbAccountPrivilegesDatabasePrivileges[] | cdktf.IResolvable) {
    this._databasePrivileges.internalValue = value;
  }
  public resetDatabasePrivileges() {
    this._databasePrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePrivilegesInput() {
    return this._databasePrivileges.internalValue;
  }

  // function_privileges - computed: false, optional: true, required: false
  private _functionPrivileges = new MariadbAccountPrivilegesFunctionPrivilegesList(this, "function_privileges", false);
  public get functionPrivileges() {
    return this._functionPrivileges;
  }
  public putFunctionPrivileges(value: MariadbAccountPrivilegesFunctionPrivileges[] | cdktf.IResolvable) {
    this._functionPrivileges.internalValue = value;
  }
  public resetFunctionPrivileges() {
    this._functionPrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionPrivilegesInput() {
    return this._functionPrivileges.internalValue;
  }

  // procedure_privileges - computed: false, optional: true, required: false
  private _procedurePrivileges = new MariadbAccountPrivilegesProcedurePrivilegesList(this, "procedure_privileges", false);
  public get procedurePrivileges() {
    return this._procedurePrivileges;
  }
  public putProcedurePrivileges(value: MariadbAccountPrivilegesProcedurePrivileges[] | cdktf.IResolvable) {
    this._procedurePrivileges.internalValue = value;
  }
  public resetProcedurePrivileges() {
    this._procedurePrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedurePrivilegesInput() {
    return this._procedurePrivileges.internalValue;
  }

  // table_privileges - computed: false, optional: true, required: false
  private _tablePrivileges = new MariadbAccountPrivilegesTablePrivilegesList(this, "table_privileges", false);
  public get tablePrivileges() {
    return this._tablePrivileges;
  }
  public putTablePrivileges(value: MariadbAccountPrivilegesTablePrivileges[] | cdktf.IResolvable) {
    this._tablePrivileges.internalValue = value;
  }
  public resetTablePrivileges() {
    this._tablePrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrivilegesInput() {
    return this._tablePrivileges.internalValue;
  }

  // view_privileges - computed: false, optional: true, required: false
  private _viewPrivileges = new MariadbAccountPrivilegesViewPrivilegesList(this, "view_privileges", false);
  public get viewPrivileges() {
    return this._viewPrivileges;
  }
  public putViewPrivileges(value: MariadbAccountPrivilegesViewPrivileges[] | cdktf.IResolvable) {
    this._viewPrivileges.internalValue = value;
  }
  public resetViewPrivileges() {
    this._viewPrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewPrivilegesInput() {
    return this._viewPrivileges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      global_privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalPrivileges),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      accounts: mariadbAccountPrivilegesAccountsToTerraform(this._accounts.internalValue),
      column_privileges: cdktf.listMapper(mariadbAccountPrivilegesColumnPrivilegesToTerraform, true)(this._columnPrivileges.internalValue),
      database_privileges: cdktf.listMapper(mariadbAccountPrivilegesDatabasePrivilegesToTerraform, true)(this._databasePrivileges.internalValue),
      function_privileges: cdktf.listMapper(mariadbAccountPrivilegesFunctionPrivilegesToTerraform, true)(this._functionPrivileges.internalValue),
      procedure_privileges: cdktf.listMapper(mariadbAccountPrivilegesProcedurePrivilegesToTerraform, true)(this._procedurePrivileges.internalValue),
      table_privileges: cdktf.listMapper(mariadbAccountPrivilegesTablePrivilegesToTerraform, true)(this._tablePrivileges.internalValue),
      view_privileges: cdktf.listMapper(mariadbAccountPrivilegesViewPrivilegesToTerraform, true)(this._viewPrivileges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      global_privileges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalPrivileges),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounts: {
        value: mariadbAccountPrivilegesAccountsToHclTerraform(this._accounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbAccountPrivilegesAccountsList",
      },
      column_privileges: {
        value: cdktf.listMapperHcl(mariadbAccountPrivilegesColumnPrivilegesToHclTerraform, true)(this._columnPrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbAccountPrivilegesColumnPrivilegesList",
      },
      database_privileges: {
        value: cdktf.listMapperHcl(mariadbAccountPrivilegesDatabasePrivilegesToHclTerraform, true)(this._databasePrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbAccountPrivilegesDatabasePrivilegesList",
      },
      function_privileges: {
        value: cdktf.listMapperHcl(mariadbAccountPrivilegesFunctionPrivilegesToHclTerraform, true)(this._functionPrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbAccountPrivilegesFunctionPrivilegesList",
      },
      procedure_privileges: {
        value: cdktf.listMapperHcl(mariadbAccountPrivilegesProcedurePrivilegesToHclTerraform, true)(this._procedurePrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbAccountPrivilegesProcedurePrivilegesList",
      },
      table_privileges: {
        value: cdktf.listMapperHcl(mariadbAccountPrivilegesTablePrivilegesToHclTerraform, true)(this._tablePrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbAccountPrivilegesTablePrivilegesList",
      },
      view_privileges: {
        value: cdktf.listMapperHcl(mariadbAccountPrivilegesViewPrivilegesToHclTerraform, true)(this._viewPrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbAccountPrivilegesViewPrivilegesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
