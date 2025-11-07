// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktapamDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The nickname or alias of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#canonical_name DataOktapamDatabase#canonical_name}
  */
  readonly canonicalName?: string;
  /**
  * Defines the type of database used and the feature set supported. A two-part string separated by a dot: '<db_engine>.level<level>'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#database_type DataOktapamDatabase#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#id DataOktapamDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A label selector to define which gateway(s) will be used to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#management_gateway_selector DataOktapamDatabase#management_gateway_selector}
  */
  readonly managementGatewaySelector?: { [key: string]: string };
  /**
  * The UUID of a Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#project DataOktapamDatabase#project}
  */
  readonly project: string;
  /**
  * The ID of a recipe book which will override the db queries used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#recipe_book DataOktapamDatabase#recipe_book}
  */
  readonly recipeBook?: string;
  /**
  * The UUID of a OktaPA Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#resource_group DataOktapamDatabase#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * management_connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#management_connection_details DataOktapamDatabase#management_connection_details}
  */
  readonly managementConnectionDetails?: DataOktapamDatabaseManagementConnectionDetails;
}
export interface DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuth {
  /**
  * The password used to authenticate to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#password DataOktapamDatabase#password}
  */
  readonly password?: string;
  /**
  * The human-readable name of the User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#username DataOktapamDatabase#username}
  */
  readonly username: string;
}

export function dataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuthToTerraform(struct?: DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuthOutputReference | DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuthToHclTerraform(struct?: DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuthOutputReference | DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuth): any {
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

export class DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuth | undefined {
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

  public set internalValue(value: DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuth | undefined) {
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
export interface DataOktapamDatabaseManagementConnectionDetailsMysql {
  /**
  * The hostname used to connect to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#hostname DataOktapamDatabase#hostname}
  */
  readonly hostname: string;
  /**
  * The port used to connect to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#port DataOktapamDatabase#port}
  */
  readonly port: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#basic_auth DataOktapamDatabase#basic_auth}
  */
  readonly basicAuth: DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuth;
}

export function dataOktapamDatabaseManagementConnectionDetailsMysqlToTerraform(struct?: DataOktapamDatabaseManagementConnectionDetailsMysqlOutputReference | DataOktapamDatabaseManagementConnectionDetailsMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.stringToTerraform(struct!.port),
    basic_auth: dataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function dataOktapamDatabaseManagementConnectionDetailsMysqlToHclTerraform(struct?: DataOktapamDatabaseManagementConnectionDetailsMysqlOutputReference | DataOktapamDatabaseManagementConnectionDetailsMysql): any {
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
      value: dataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktapamDatabaseManagementConnectionDetailsMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOktapamDatabaseManagementConnectionDetailsMysql | undefined {
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

  public set internalValue(value: DataOktapamDatabaseManagementConnectionDetailsMysql | undefined) {
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
  private _basicAuth = new DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataOktapamDatabaseManagementConnectionDetailsMysqlBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface DataOktapamDatabaseManagementConnectionDetails {
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#mysql DataOktapamDatabase#mysql}
  */
  readonly mysql: DataOktapamDatabaseManagementConnectionDetailsMysql;
}

export function dataOktapamDatabaseManagementConnectionDetailsToTerraform(struct?: DataOktapamDatabaseManagementConnectionDetailsOutputReference | DataOktapamDatabaseManagementConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql: dataOktapamDatabaseManagementConnectionDetailsMysqlToTerraform(struct!.mysql),
  }
}


export function dataOktapamDatabaseManagementConnectionDetailsToHclTerraform(struct?: DataOktapamDatabaseManagementConnectionDetailsOutputReference | DataOktapamDatabaseManagementConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql: {
      value: dataOktapamDatabaseManagementConnectionDetailsMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktapamDatabaseManagementConnectionDetailsMysqlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktapamDatabaseManagementConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOktapamDatabaseManagementConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktapamDatabaseManagementConnectionDetails | undefined) {
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
  private _mysql = new DataOktapamDatabaseManagementConnectionDetailsMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DataOktapamDatabaseManagementConnectionDetailsMysql) {
    this._mysql.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database oktapam_database}
*/
export class DataOktapamDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktapamDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktapamDatabase to import
  * @param importFromId The id of the existing DataOktapamDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktapamDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database oktapam_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktapamDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktapamDatabaseConfig) {
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
    this._id = config.id;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // management_connection_details - computed: false, optional: true, required: false
  private _managementConnectionDetails = new DataOktapamDatabaseManagementConnectionDetailsOutputReference(this, "management_connection_details");
  public get managementConnectionDetails() {
    return this._managementConnectionDetails;
  }
  public putManagementConnectionDetails(value: DataOktapamDatabaseManagementConnectionDetails) {
    this._managementConnectionDetails.internalValue = value;
  }
  public resetManagementConnectionDetails() {
    this._managementConnectionDetails.internalValue = undefined;
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
      id: cdktf.stringToTerraform(this._id),
      management_gateway_selector: cdktf.hashMapper(cdktf.stringToTerraform)(this._managementGatewaySelector),
      project: cdktf.stringToTerraform(this._project),
      recipe_book: cdktf.stringToTerraform(this._recipeBook),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      management_connection_details: dataOktapamDatabaseManagementConnectionDetailsToTerraform(this._managementConnectionDetails.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
        value: dataOktapamDatabaseManagementConnectionDetailsToHclTerraform(this._managementConnectionDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOktapamDatabaseManagementConnectionDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
