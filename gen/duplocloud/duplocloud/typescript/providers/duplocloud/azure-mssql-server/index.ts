// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureMssqlServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Administrator Login for the  MS sql Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#administrator_login AzureMssqlServer#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * The Password associated with the `administrator_login` for the MS sql Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#administrator_login_password AzureMssqlServer#administrator_login_password}
  */
  readonly administratorLoginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#id AzureMssqlServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Minimum TLS Version for all SQL Database and SQL Data Warehouse databases associated with the server. Valid values are: `1.0`, `1.1` and `1.2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#minimum_tls_version AzureMssqlServer#minimum_tls_version}
  */
  readonly minimumTlsVersion?: string;
  /**
  * The name of the Microsoft SQL Server. This needs to be globally unique within Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#name AzureMssqlServer#name}
  */
  readonly name: string;
  /**
  * Whether public network access is enabled or disabled for this server. Valid values are `Enabled` or `Disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#public_network_access AzureMssqlServer#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * The GUID of the tenant that the azure mssql server will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#tenant_id AzureMssqlServer#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The version for the new server. Valid values are: `2.0` (for v11 server) and `12.0` (for v12 server).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#version AzureMssqlServer#version}
  */
  readonly version: string;
  /**
  * Whether or not to wait until PostgreSQL Server instance to be ready, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#wait_until_ready AzureMssqlServer#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
  /**
  * active_directory_administrator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#active_directory_administrator AzureMssqlServer#active_directory_administrator}
  */
  readonly activeDirectoryAdministrator?: AzureMssqlServerActiveDirectoryAdministrator;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#timeouts AzureMssqlServer#timeouts}
  */
  readonly timeouts?: AzureMssqlServerTimeouts;
}
export interface AzureMssqlServerActiveDirectoryAdministrator {
  /**
  * Specifies whether only AD Users and administrators can be used to login (`true`) or also local database users (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#ad_authentication_only AzureMssqlServer#ad_authentication_only}
  */
  readonly adAuthenticationOnly?: boolean | cdktf.IResolvable;
  /**
  * Implicitly inferred. Valid value ActiveDirectory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#administrator_type AzureMssqlServer#administrator_type}
  */
  readonly administratorType?: string;
  /**
  * The login name of the principal to set as the server administrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#login AzureMssqlServer#login}
  */
  readonly login: string;
  /**
  * The ID of the principal to set as the server administrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#object_id AzureMssqlServer#object_id}
  */
  readonly objectId: string;
  /**
  * Specify the type of the principal: `User`, `Group`, or `Application`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#principal_type AzureMssqlServer#principal_type}
  */
  readonly principalType?: string;
  /**
  * The Azure Tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#tenant_id AzureMssqlServer#tenant_id}
  */
  readonly tenantId: string;
}

export function azureMssqlServerActiveDirectoryAdministratorToTerraform(struct?: AzureMssqlServerActiveDirectoryAdministratorOutputReference | AzureMssqlServerActiveDirectoryAdministrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_authentication_only: cdktf.booleanToTerraform(struct!.adAuthenticationOnly),
    administrator_type: cdktf.stringToTerraform(struct!.administratorType),
    login: cdktf.stringToTerraform(struct!.login),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    principal_type: cdktf.stringToTerraform(struct!.principalType),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function azureMssqlServerActiveDirectoryAdministratorToHclTerraform(struct?: AzureMssqlServerActiveDirectoryAdministratorOutputReference | AzureMssqlServerActiveDirectoryAdministrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_authentication_only: {
      value: cdktf.booleanToHclTerraform(struct!.adAuthenticationOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    administrator_type: {
      value: cdktf.stringToHclTerraform(struct!.administratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login: {
      value: cdktf.stringToHclTerraform(struct!.login),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_type: {
      value: cdktf.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureMssqlServerActiveDirectoryAdministratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureMssqlServerActiveDirectoryAdministrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adAuthenticationOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.adAuthenticationOnly = this._adAuthenticationOnly;
    }
    if (this._administratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorType = this._administratorType;
    }
    if (this._login !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureMssqlServerActiveDirectoryAdministrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adAuthenticationOnly = undefined;
      this._administratorType = undefined;
      this._login = undefined;
      this._objectId = undefined;
      this._principalType = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adAuthenticationOnly = value.adAuthenticationOnly;
      this._administratorType = value.administratorType;
      this._login = value.login;
      this._objectId = value.objectId;
      this._principalType = value.principalType;
      this._tenantId = value.tenantId;
    }
  }

  // ad_authentication_only - computed: false, optional: true, required: false
  private _adAuthenticationOnly?: boolean | cdktf.IResolvable; 
  public get adAuthenticationOnly() {
    return this.getBooleanAttribute('ad_authentication_only');
  }
  public set adAuthenticationOnly(value: boolean | cdktf.IResolvable) {
    this._adAuthenticationOnly = value;
  }
  public resetAdAuthenticationOnly() {
    this._adAuthenticationOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adAuthenticationOnlyInput() {
    return this._adAuthenticationOnly;
  }

  // administrator_type - computed: false, optional: true, required: false
  private _administratorType?: string; 
  public get administratorType() {
    return this.getStringAttribute('administrator_type');
  }
  public set administratorType(value: string) {
    this._administratorType = value;
  }
  public resetAdministratorType() {
    this._administratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorTypeInput() {
    return this._administratorType;
  }

  // login - computed: false, optional: false, required: true
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // principal_type - computed: false, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface AzureMssqlServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#create AzureMssqlServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#delete AzureMssqlServer#delete}
  */
  readonly delete?: string;
}

export function azureMssqlServerTimeoutsToTerraform(struct?: AzureMssqlServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function azureMssqlServerTimeoutsToHclTerraform(struct?: AzureMssqlServerTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureMssqlServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureMssqlServerTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureMssqlServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server duplocloud_azure_mssql_server}
*/
export class AzureMssqlServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_mssql_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureMssqlServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureMssqlServer to import
  * @param importFromId The id of the existing AzureMssqlServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureMssqlServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_mssql_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/azure_mssql_server duplocloud_azure_mssql_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureMssqlServerConfig
  */
  public constructor(scope: Construct, id: string, config: AzureMssqlServerConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_mssql_server',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administratorLogin = config.administratorLogin;
    this._administratorLoginPassword = config.administratorLoginPassword;
    this._id = config.id;
    this._minimumTlsVersion = config.minimumTlsVersion;
    this._name = config.name;
    this._publicNetworkAccess = config.publicNetworkAccess;
    this._tenantId = config.tenantId;
    this._version = config.version;
    this._waitUntilReady = config.waitUntilReady;
    this._activeDirectoryAdministrator.internalValue = config.activeDirectoryAdministrator;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: true, optional: true, required: false
  private _administratorLogin?: string; 
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  public resetAdministratorLogin() {
    this._administratorLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin;
  }

  // administrator_login_password - computed: false, optional: true, required: false
  private _administratorLoginPassword?: string; 
  public get administratorLoginPassword() {
    return this.getStringAttribute('administrator_login_password');
  }
  public set administratorLoginPassword(value: string) {
    this._administratorLoginPassword = value;
  }
  public resetAdministratorLoginPassword() {
    this._administratorLoginPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginPasswordInput() {
    return this._administratorLoginPassword;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // minimum_tls_version - computed: true, optional: true, required: false
  private _minimumTlsVersion?: string; 
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }
  public set minimumTlsVersion(value: string) {
    this._minimumTlsVersion = value;
  }
  public resetMinimumTlsVersion() {
    this._minimumTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTlsVersionInput() {
    return this._minimumTlsVersion;
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

  // public_network_access - computed: true, optional: true, required: false
  private _publicNetworkAccess?: string; 
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }
  public set publicNetworkAccess(value: string) {
    this._publicNetworkAccess = value;
  }
  public resetPublicNetworkAccess() {
    this._publicNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessInput() {
    return this._publicNetworkAccess;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait_until_ready - computed: false, optional: true, required: false
  private _waitUntilReady?: boolean | cdktf.IResolvable; 
  public get waitUntilReady() {
    return this.getBooleanAttribute('wait_until_ready');
  }
  public set waitUntilReady(value: boolean | cdktf.IResolvable) {
    this._waitUntilReady = value;
  }
  public resetWaitUntilReady() {
    this._waitUntilReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReadyInput() {
    return this._waitUntilReady;
  }

  // active_directory_administrator - computed: false, optional: true, required: false
  private _activeDirectoryAdministrator = new AzureMssqlServerActiveDirectoryAdministratorOutputReference(this, "active_directory_administrator");
  public get activeDirectoryAdministrator() {
    return this._activeDirectoryAdministrator;
  }
  public putActiveDirectoryAdministrator(value: AzureMssqlServerActiveDirectoryAdministrator) {
    this._activeDirectoryAdministrator.internalValue = value;
  }
  public resetActiveDirectoryAdministrator() {
    this._activeDirectoryAdministrator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryAdministratorInput() {
    return this._activeDirectoryAdministrator.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzureMssqlServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzureMssqlServerTimeouts) {
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
      administrator_login: cdktf.stringToTerraform(this._administratorLogin),
      administrator_login_password: cdktf.stringToTerraform(this._administratorLoginPassword),
      id: cdktf.stringToTerraform(this._id),
      minimum_tls_version: cdktf.stringToTerraform(this._minimumTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      public_network_access: cdktf.stringToTerraform(this._publicNetworkAccess),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      version: cdktf.stringToTerraform(this._version),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
      active_directory_administrator: azureMssqlServerActiveDirectoryAdministratorToTerraform(this._activeDirectoryAdministrator.internalValue),
      timeouts: azureMssqlServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrator_login: {
        value: cdktf.stringToHclTerraform(this._administratorLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      administrator_login_password: {
        value: cdktf.stringToHclTerraform(this._administratorLoginPassword),
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
      minimum_tls_version: {
        value: cdktf.stringToHclTerraform(this._minimumTlsVersion),
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
      public_network_access: {
        value: cdktf.stringToHclTerraform(this._publicNetworkAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_ready: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      active_directory_administrator: {
        value: azureMssqlServerActiveDirectoryAdministratorToHclTerraform(this._activeDirectoryAdministrator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureMssqlServerActiveDirectoryAdministratorList",
      },
      timeouts: {
        value: azureMssqlServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureMssqlServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
