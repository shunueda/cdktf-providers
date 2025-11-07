// https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_logins
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMssqlSqlLoginsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataMssqlSqlLoginsLogins {
}

export function dataMssqlSqlLoginsLoginsToTerraform(struct?: DataMssqlSqlLoginsLogins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMssqlSqlLoginsLoginsToHclTerraform(struct?: DataMssqlSqlLoginsLogins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMssqlSqlLoginsLoginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMssqlSqlLoginsLogins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMssqlSqlLoginsLogins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_password_expiration - computed: true, optional: false, required: false
  public get checkPasswordExpiration() {
    return this.getBooleanAttribute('check_password_expiration');
  }

  // check_password_policy - computed: true, optional: false, required: false
  public get checkPasswordPolicy() {
    return this.getBooleanAttribute('check_password_policy');
  }

  // default_database_id - computed: true, optional: false, required: false
  public get defaultDatabaseId() {
    return this.getStringAttribute('default_database_id');
  }

  // default_language - computed: true, optional: false, required: false
  public get defaultLanguage() {
    return this.getStringAttribute('default_language');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // must_change_password - computed: true, optional: false, required: false
  public get mustChangePassword() {
    return this.getBooleanAttribute('must_change_password');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
}

export class DataMssqlSqlLoginsLoginsList extends cdktf.ComplexList {

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
  public get(index: number): DataMssqlSqlLoginsLoginsOutputReference {
    return new DataMssqlSqlLoginsLoginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_logins mssql_sql_logins}
*/
export class DataMssqlSqlLogins extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mssql_sql_logins";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMssqlSqlLogins resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMssqlSqlLogins to import
  * @param importFromId The id of the existing DataMssqlSqlLogins that should be imported. Refer to the {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_logins#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMssqlSqlLogins to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mssql_sql_logins", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_logins mssql_sql_logins} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMssqlSqlLoginsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMssqlSqlLoginsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mssql_sql_logins',
      terraformGeneratorMetadata: {
        providerName: 'mssql',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logins - computed: true, optional: false, required: false
  private _logins = new DataMssqlSqlLoginsLoginsList(this, "logins", true);
  public get logins() {
    return this._logins;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
