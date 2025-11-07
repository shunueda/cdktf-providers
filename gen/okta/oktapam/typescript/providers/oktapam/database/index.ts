// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The nickname or alias of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#canonical_name Database#canonical_name}
  */
  readonly canonicalName?: string;
  /**
  * Defines the type of database used and the feature set supported. A two-part string separated by a dot: '<db_engine>.level<level>'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#database_type Database#database_type}
  */
  readonly databaseType?: string;
  /**
  * A label selector to define which gateway(s) will be used to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#management_gateway_selector Database#management_gateway_selector}
  */
  readonly managementGatewaySelector?: { [key: string]: string };
  /**
  * The UUID of a Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#project Database#project}
  */
  readonly project: string;
  /**
  * The ID of a recipe book which will override the db queries used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#recipe_book Database#recipe_book}
  */
  readonly recipeBook?: string;
  /**
  * The UUID of a OktaPA Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#resource_group Database#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * management_connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#management_connection_details Database#management_connection_details}
  */
  readonly managementConnectionDetails: DatabaseManagementConnectionDetails;
}
export interface DatabaseManagementConnectionDetailsMysqlBasicAuth {
  /**
  * The password used to authenticate to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#password Database#password}
  */
  readonly password?: string;
  /**
  * The human-readable name of the User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#username Database#username}
  */
  readonly username: string;
}

export function databaseManagementConnectionDetailsMysqlBasicAuthToTerraform(struct?: DatabaseManagementConnectionDetailsMysqlBasicAuthOutputReference | DatabaseManagementConnectionDetailsMysqlBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseManagementConnectionDetailsMysqlBasicAuthToHclTerraform(struct?: DatabaseManagementConnectionDetailsMysqlBasicAuthOutputReference | DatabaseManagementConnectionDetailsMysqlBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementConnectionDetailsMysqlBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementConnectionDetailsMysqlBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementConnectionDetailsMysqlBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
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

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseManagementConnectionDetailsMysql {
  /**
  * The hostname used to connect to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#hostname Database#hostname}
  */
  readonly hostname: string;
  /**
  * The port used to connect to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#port Database#port}
  */
  readonly port: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#basic_auth Database#basic_auth}
  */
  readonly basicAuth: DatabaseManagementConnectionDetailsMysqlBasicAuth;
}

export function databaseManagementConnectionDetailsMysqlToTerraform(struct?: DatabaseManagementConnectionDetailsMysqlOutputReference | DatabaseManagementConnectionDetailsMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.stringToTerraform(struct!.port),
    basic_auth: databaseManagementConnectionDetailsMysqlBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function databaseManagementConnectionDetailsMysqlToHclTerraform(struct?: DatabaseManagementConnectionDetailsMysqlOutputReference | DatabaseManagementConnectionDetailsMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: databaseManagementConnectionDetailsMysqlBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementConnectionDetailsMysqlBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementConnectionDetailsMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementConnectionDetailsMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementConnectionDetailsMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._port = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._port = value.port;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // basic_auth - computed: false, optional: false, required: true
  private _basicAuth = new DatabaseManagementConnectionDetailsMysqlBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DatabaseManagementConnectionDetailsMysqlBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface DatabaseManagementConnectionDetails {
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#mysql Database#mysql}
  */
  readonly mysql: DatabaseManagementConnectionDetailsMysql;
}

export function databaseManagementConnectionDetailsToTerraform(struct?: DatabaseManagementConnectionDetailsOutputReference | DatabaseManagementConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql: databaseManagementConnectionDetailsMysqlToTerraform(struct!.mysql),
  }
}


export function databaseManagementConnectionDetailsToHclTerraform(struct?: DatabaseManagementConnectionDetailsOutputReference | DatabaseManagementConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql: {
      value: databaseManagementConnectionDetailsMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementConnectionDetailsMysqlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysql.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysql.internalValue = value.mysql;
    }
  }

  // mysql - computed: false, optional: false, required: true
  private _mysql = new DatabaseManagementConnectionDetailsMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DatabaseManagementConnectionDetailsMysql) {
    this._mysql.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database oktapam_database}
*/
export class Database extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Database to import
  * @param importFromId The id of the existing Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Database to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/database oktapam_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_database',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canonicalName = config.canonicalName;
    this._databaseType = config.databaseType;
    this._managementGatewaySelector = config.managementGatewaySelector;
    this._project = config.project;
    this._recipeBook = config.recipeBook;
    this._resourceGroup = config.resourceGroup;
    this._managementConnectionDetails.internalValue = config.managementConnectionDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical_name - computed: false, optional: true, required: false
  private _canonicalName?: string; 
  public get canonicalName() {
    return this.getStringAttribute('canonical_name');
  }
  public set canonicalName(value: string) {
    this._canonicalName = value;
  }
  public resetCanonicalName() {
    this._canonicalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalNameInput() {
    return this._canonicalName;
  }

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_gateway_selector - computed: false, optional: true, required: false
  private _managementGatewaySelector?: { [key: string]: string }; 
  public get managementGatewaySelector() {
    return this.getStringMapAttribute('management_gateway_selector');
  }
  public set managementGatewaySelector(value: { [key: string]: string }) {
    this._managementGatewaySelector = value;
  }
  public resetManagementGatewaySelector() {
    this._managementGatewaySelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGatewaySelectorInput() {
    return this._managementGatewaySelector;
  }

  // management_gateway_selector_id - computed: true, optional: false, required: false
  public get managementGatewaySelectorId() {
    return this.getStringAttribute('management_gateway_selector_id');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // recipe_book - computed: false, optional: true, required: false
  private _recipeBook?: string; 
  public get recipeBook() {
    return this.getStringAttribute('recipe_book');
  }
  public set recipeBook(value: string) {
    this._recipeBook = value;
  }
  public resetRecipeBook() {
    this._recipeBook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeBookInput() {
    return this._recipeBook;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // management_connection_details - computed: false, optional: false, required: true
  private _managementConnectionDetails = new DatabaseManagementConnectionDetailsOutputReference(this, "management_connection_details");
  public get managementConnectionDetails() {
    return this._managementConnectionDetails;
  }
  public putManagementConnectionDetails(value: DatabaseManagementConnectionDetails) {
    this._managementConnectionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementConnectionDetailsInput() {
    return this._managementConnectionDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      canonical_name: cdktf.stringToTerraform(this._canonicalName),
      database_type: cdktf.stringToTerraform(this._databaseType),
      management_gateway_selector: cdktf.hashMapper(cdktf.stringToTerraform)(this._managementGatewaySelector),
      project: cdktf.stringToTerraform(this._project),
      recipe_book: cdktf.stringToTerraform(this._recipeBook),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      management_connection_details: databaseManagementConnectionDetailsToTerraform(this._managementConnectionDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      canonical_name: {
        value: cdktf.stringToHclTerraform(this._canonicalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_gateway_selector: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._managementGatewaySelector),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipe_book: {
        value: cdktf.stringToHclTerraform(this._recipeBook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_connection_details: {
        value: databaseManagementConnectionDetailsToHclTerraform(this._managementConnectionDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementConnectionDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
