// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management#connector_id DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement#connector_id}
  */
  readonly connectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management#enable_external_mysql_database DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement#enable_external_mysql_database}
  */
  readonly enableExternalMysqlDatabase: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management#external_my_sql_database_id DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement#external_my_sql_database_id}
  */
  readonly externalMySqlDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management#id DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management#timeouts DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement#timeouts}
  */
  readonly timeouts?: DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeouts;
}
export interface DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management#create DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management#delete DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management#update DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement#update}
  */
  readonly update?: string;
}

export function databaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeoutsToTerraform(struct?: DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeoutsToHclTerraform(struct?: DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeouts | cdktf.IResolvable): any {
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

export class DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management oci_database_management_external_my_sql_database_external_mysql_databases_management}
*/
export class DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_my_sql_database_external_mysql_databases_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement to import
  * @param importFromId The id of the existing DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_my_sql_database_external_mysql_databases_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_management_external_my_sql_database_external_mysql_databases_management oci_database_management_external_my_sql_database_external_mysql_databases_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_my_sql_database_external_mysql_databases_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorId = config.connectorId;
    this._enableExternalMysqlDatabase = config.enableExternalMysqlDatabase;
    this._externalMySqlDatabaseId = config.externalMySqlDatabaseId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_id - computed: true, optional: true, required: false
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // enable_external_mysql_database - computed: false, optional: false, required: true
  private _enableExternalMysqlDatabase?: boolean | cdktf.IResolvable; 
  public get enableExternalMysqlDatabase() {
    return this.getBooleanAttribute('enable_external_mysql_database');
  }
  public set enableExternalMysqlDatabase(value: boolean | cdktf.IResolvable) {
    this._enableExternalMysqlDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExternalMysqlDatabaseInput() {
    return this._enableExternalMysqlDatabase;
  }

  // external_my_sql_database_id - computed: false, optional: false, required: true
  private _externalMySqlDatabaseId?: string; 
  public get externalMySqlDatabaseId() {
    return this.getStringAttribute('external_my_sql_database_id');
  }
  public set externalMySqlDatabaseId(value: string) {
    this._externalMySqlDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMySqlDatabaseIdInput() {
    return this._externalMySqlDatabaseId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeouts) {
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
      connector_id: cdktf.stringToTerraform(this._connectorId),
      enable_external_mysql_database: cdktf.booleanToTerraform(this._enableExternalMysqlDatabase),
      external_my_sql_database_id: cdktf.stringToTerraform(this._externalMySqlDatabaseId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: databaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_id: {
        value: cdktf.stringToHclTerraform(this._connectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_external_mysql_database: {
        value: cdktf.booleanToHclTerraform(this._enableExternalMysqlDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_my_sql_database_id: {
        value: cdktf.stringToHclTerraform(this._externalMySqlDatabaseId),
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
      timeouts: {
        value: databaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementExternalMySqlDatabaseExternalMysqlDatabasesManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
