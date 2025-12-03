// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcdbAccountPrivilegesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Global permissions. Among them, the optional value of the permission in GlobalPrivileges is: SELECT, INSERT, UPDATE, DELETE, CREATE, PROCESS, DROP, REFERENCES, INDEX, ALTER, SHOW DATABASES,  CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, EVENT, TRIGGER.  Note that if this parameter is not passed, it means that the existing permissions are reserved. If it needs to be cleared, pass an empty array in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#global_privileges DcdbAccountPrivileges#global_privileges}
  */
  readonly globalPrivileges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#id DcdbAccountPrivileges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#instance_id DcdbAccountPrivileges#instance_id}
  */
  readonly instanceId: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#account DcdbAccountPrivileges#account}
  */
  readonly account: DcdbAccountPrivilegesAccount;
  /**
  * column_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#column_privileges DcdbAccountPrivileges#column_privileges}
  */
  readonly columnPrivileges?: DcdbAccountPrivilegesColumnPrivileges;
  /**
  * database_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#database_privileges DcdbAccountPrivileges#database_privileges}
  */
  readonly databasePrivileges?: DcdbAccountPrivilegesDatabasePrivileges;
  /**
  * table_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#table_privileges DcdbAccountPrivileges#table_privileges}
  */
  readonly tablePrivileges?: DcdbAccountPrivilegesTablePrivileges;
  /**
  * view_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#view_privileges DcdbAccountPrivileges#view_privileges}
  */
  readonly viewPrivileges?: DcdbAccountPrivilegesViewPrivileges;
}
export interface DcdbAccountPrivilegesAccount {
  /**
  * account host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#host DcdbAccountPrivileges#host}
  */
  readonly host: string;
  /**
  * account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#user DcdbAccountPrivileges#user}
  */
  readonly user: string;
}

export function dcdbAccountPrivilegesAccountToTerraform(struct?: DcdbAccountPrivilegesAccountOutputReference | DcdbAccountPrivilegesAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dcdbAccountPrivilegesAccountToHclTerraform(struct?: DcdbAccountPrivilegesAccountOutputReference | DcdbAccountPrivilegesAccount): any {
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

export class DcdbAccountPrivilegesAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdbAccountPrivilegesAccount | undefined {
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

  public set internalValue(value: DcdbAccountPrivilegesAccount | undefined) {
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
export interface DcdbAccountPrivilegesColumnPrivileges {
  /**
  * Database column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#column DcdbAccountPrivileges#column}
  */
  readonly column: string;
  /**
  * The name of database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#database DcdbAccountPrivileges#database}
  */
  readonly database: string;
  /**
  * Permission information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#privileges DcdbAccountPrivileges#privileges}
  */
  readonly privileges: string[];
  /**
  * Database table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#table DcdbAccountPrivileges#table}
  */
  readonly table: string;
}

export function dcdbAccountPrivilegesColumnPrivilegesToTerraform(struct?: DcdbAccountPrivilegesColumnPrivilegesOutputReference | DcdbAccountPrivilegesColumnPrivileges): any {
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


export function dcdbAccountPrivilegesColumnPrivilegesToHclTerraform(struct?: DcdbAccountPrivilegesColumnPrivilegesOutputReference | DcdbAccountPrivilegesColumnPrivileges): any {
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

export class DcdbAccountPrivilegesColumnPrivilegesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdbAccountPrivilegesColumnPrivileges | undefined {
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

  public set internalValue(value: DcdbAccountPrivilegesColumnPrivileges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._database = undefined;
      this._privileges = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface DcdbAccountPrivilegesDatabasePrivileges {
  /**
  * The name of database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#database DcdbAccountPrivileges#database}
  */
  readonly database: string;
  /**
  * Permission information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#privileges DcdbAccountPrivileges#privileges}
  */
  readonly privileges: string[];
}

export function dcdbAccountPrivilegesDatabasePrivilegesToTerraform(struct?: DcdbAccountPrivilegesDatabasePrivilegesOutputReference | DcdbAccountPrivilegesDatabasePrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
  }
}


export function dcdbAccountPrivilegesDatabasePrivilegesToHclTerraform(struct?: DcdbAccountPrivilegesDatabasePrivilegesOutputReference | DcdbAccountPrivilegesDatabasePrivileges): any {
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

export class DcdbAccountPrivilegesDatabasePrivilegesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdbAccountPrivilegesDatabasePrivileges | undefined {
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

  public set internalValue(value: DcdbAccountPrivilegesDatabasePrivileges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._privileges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface DcdbAccountPrivilegesTablePrivileges {
  /**
  * The name of database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#database DcdbAccountPrivileges#database}
  */
  readonly database: string;
  /**
  * Permission information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#privileges DcdbAccountPrivileges#privileges}
  */
  readonly privileges: string[];
  /**
  * Database table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#table DcdbAccountPrivileges#table}
  */
  readonly table: string;
}

export function dcdbAccountPrivilegesTablePrivilegesToTerraform(struct?: DcdbAccountPrivilegesTablePrivilegesOutputReference | DcdbAccountPrivilegesTablePrivileges): any {
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


export function dcdbAccountPrivilegesTablePrivilegesToHclTerraform(struct?: DcdbAccountPrivilegesTablePrivilegesOutputReference | DcdbAccountPrivilegesTablePrivileges): any {
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

export class DcdbAccountPrivilegesTablePrivilegesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdbAccountPrivilegesTablePrivileges | undefined {
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

  public set internalValue(value: DcdbAccountPrivilegesTablePrivileges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._privileges = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface DcdbAccountPrivilegesViewPrivileges {
  /**
  * The name of database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#database DcdbAccountPrivileges#database}
  */
  readonly database: string;
  /**
  * Permission information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#privileges DcdbAccountPrivileges#privileges}
  */
  readonly privileges: string[];
  /**
  * Database view name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#view DcdbAccountPrivileges#view}
  */
  readonly view: string;
}

export function dcdbAccountPrivilegesViewPrivilegesToTerraform(struct?: DcdbAccountPrivilegesViewPrivilegesOutputReference | DcdbAccountPrivilegesViewPrivileges): any {
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


export function dcdbAccountPrivilegesViewPrivilegesToHclTerraform(struct?: DcdbAccountPrivilegesViewPrivilegesOutputReference | DcdbAccountPrivilegesViewPrivileges): any {
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

export class DcdbAccountPrivilegesViewPrivilegesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdbAccountPrivilegesViewPrivileges | undefined {
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

  public set internalValue(value: DcdbAccountPrivilegesViewPrivileges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._privileges = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges tencentcloud_dcdb_account_privileges}
*/
export class DcdbAccountPrivileges extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dcdb_account_privileges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcdbAccountPrivileges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcdbAccountPrivileges to import
  * @param importFromId The id of the existing DcdbAccountPrivileges that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcdbAccountPrivileges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dcdb_account_privileges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcdb_account_privileges tencentcloud_dcdb_account_privileges} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcdbAccountPrivilegesConfig
  */
  public constructor(scope: Construct, id: string, config: DcdbAccountPrivilegesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dcdb_account_privileges',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._account.internalValue = config.account;
    this._columnPrivileges.internalValue = config.columnPrivileges;
    this._databasePrivileges.internalValue = config.databasePrivileges;
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

  // account - computed: false, optional: false, required: true
  private _account = new DcdbAccountPrivilegesAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }
  public putAccount(value: DcdbAccountPrivilegesAccount) {
    this._account.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // column_privileges - computed: false, optional: true, required: false
  private _columnPrivileges = new DcdbAccountPrivilegesColumnPrivilegesOutputReference(this, "column_privileges");
  public get columnPrivileges() {
    return this._columnPrivileges;
  }
  public putColumnPrivileges(value: DcdbAccountPrivilegesColumnPrivileges) {
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
  private _databasePrivileges = new DcdbAccountPrivilegesDatabasePrivilegesOutputReference(this, "database_privileges");
  public get databasePrivileges() {
    return this._databasePrivileges;
  }
  public putDatabasePrivileges(value: DcdbAccountPrivilegesDatabasePrivileges) {
    this._databasePrivileges.internalValue = value;
  }
  public resetDatabasePrivileges() {
    this._databasePrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePrivilegesInput() {
    return this._databasePrivileges.internalValue;
  }

  // table_privileges - computed: false, optional: true, required: false
  private _tablePrivileges = new DcdbAccountPrivilegesTablePrivilegesOutputReference(this, "table_privileges");
  public get tablePrivileges() {
    return this._tablePrivileges;
  }
  public putTablePrivileges(value: DcdbAccountPrivilegesTablePrivileges) {
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
  private _viewPrivileges = new DcdbAccountPrivilegesViewPrivilegesOutputReference(this, "view_privileges");
  public get viewPrivileges() {
    return this._viewPrivileges;
  }
  public putViewPrivileges(value: DcdbAccountPrivilegesViewPrivileges) {
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
      account: dcdbAccountPrivilegesAccountToTerraform(this._account.internalValue),
      column_privileges: dcdbAccountPrivilegesColumnPrivilegesToTerraform(this._columnPrivileges.internalValue),
      database_privileges: dcdbAccountPrivilegesDatabasePrivilegesToTerraform(this._databasePrivileges.internalValue),
      table_privileges: dcdbAccountPrivilegesTablePrivilegesToTerraform(this._tablePrivileges.internalValue),
      view_privileges: dcdbAccountPrivilegesViewPrivilegesToTerraform(this._viewPrivileges.internalValue),
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
      account: {
        value: dcdbAccountPrivilegesAccountToHclTerraform(this._account.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcdbAccountPrivilegesAccountList",
      },
      column_privileges: {
        value: dcdbAccountPrivilegesColumnPrivilegesToHclTerraform(this._columnPrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcdbAccountPrivilegesColumnPrivilegesList",
      },
      database_privileges: {
        value: dcdbAccountPrivilegesDatabasePrivilegesToHclTerraform(this._databasePrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcdbAccountPrivilegesDatabasePrivilegesList",
      },
      table_privileges: {
        value: dcdbAccountPrivilegesTablePrivilegesToHclTerraform(this._tablePrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcdbAccountPrivilegesTablePrivilegesList",
      },
      view_privileges: {
        value: dcdbAccountPrivilegesViewPrivilegesToHclTerraform(this._viewPrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcdbAccountPrivilegesViewPrivilegesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
