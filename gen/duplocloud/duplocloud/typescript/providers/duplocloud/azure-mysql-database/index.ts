// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureMysqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Administrator Login for the MySQL Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#administrator_login AzureMysqlDatabase#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * The Password associated with the `administrator_login` for the MySQL Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#administrator_login_password AzureMysqlDatabase#administrator_login_password}
  */
  readonly administratorLoginPassword?: string;
  /**
  * Backup retention days for the server, supported values are between `7` and `35` days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#backup_retention_days AzureMysqlDatabase#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Turn Geo-redundant server backups on/off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#geo_redundant_backup AzureMysqlDatabase#geo_redundant_backup}
  */
  readonly geoRedundantBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#id AzureMysqlDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the MySQL Server. Changing this forces a new resource to be created. This needs to be globally unique within Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#name AzureMysqlDatabase#name}
  */
  readonly name: string;
  /**
  * Specifies the SKU Name for this MySQL Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#sku_name AzureMysqlDatabase#sku_name}
  */
  readonly skuName: string;
  /**
  * Specifies if SSL should be enforced on connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#ssl_enforcement AzureMysqlDatabase#ssl_enforcement}
  */
  readonly sslEnforcement?: string;
  /**
  * Max storage allowed for a server. Possible values are between `5120` MB(5GB) and `1048576` MB(1TB) for the Basic SKU and between `5120` MB(5GB) and `4194304` MB(4TB) for General Purpose/Memory Optimized SKUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#storage_mb AzureMysqlDatabase#storage_mb}
  */
  readonly storageMb?: number;
  /**
  * The GUID of the tenant that the azure mysql database will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#tenant_id AzureMysqlDatabase#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Specifies the version of MySQL to use. Valid values are `5.7`, or `8.0`. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#version AzureMysqlDatabase#version}
  */
  readonly version: string;
  /**
  * Whether or not to wait until MySql Server instance to be ready, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#wait_until_ready AzureMysqlDatabase#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#timeouts AzureMysqlDatabase#timeouts}
  */
  readonly timeouts?: AzureMysqlDatabaseTimeouts;
}
export interface AzureMysqlDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#create AzureMysqlDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#delete AzureMysqlDatabase#delete}
  */
  readonly delete?: string;
}

export function azureMysqlDatabaseTimeoutsToTerraform(struct?: AzureMysqlDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function azureMysqlDatabaseTimeoutsToHclTerraform(struct?: AzureMysqlDatabaseTimeouts | cdktf.IResolvable): any {
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

export class AzureMysqlDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureMysqlDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureMysqlDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database duplocloud_azure_mysql_database}
*/
export class AzureMysqlDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_mysql_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureMysqlDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureMysqlDatabase to import
  * @param importFromId The id of the existing AzureMysqlDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureMysqlDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_mysql_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_mysql_database duplocloud_azure_mysql_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureMysqlDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: AzureMysqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_mysql_database',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
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
    this._backupRetentionDays = config.backupRetentionDays;
    this._geoRedundantBackup = config.geoRedundantBackup;
    this._id = config.id;
    this._name = config.name;
    this._skuName = config.skuName;
    this._sslEnforcement = config.sslEnforcement;
    this._storageMb = config.storageMb;
    this._tenantId = config.tenantId;
    this._version = config.version;
    this._waitUntilReady = config.waitUntilReady;
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

  // backup_retention_days - computed: true, optional: true, required: false
  private _backupRetentionDays?: number; 
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  public resetBackupRetentionDays() {
    this._backupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // geo_redundant_backup - computed: true, optional: true, required: false
  private _geoRedundantBackup?: string; 
  public get geoRedundantBackup() {
    return this.getStringAttribute('geo_redundant_backup');
  }
  public set geoRedundantBackup(value: string) {
    this._geoRedundantBackup = value;
  }
  public resetGeoRedundantBackup() {
    this._geoRedundantBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRedundantBackupInput() {
    return this._geoRedundantBackup;
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // ssl_enforcement - computed: true, optional: true, required: false
  private _sslEnforcement?: string; 
  public get sslEnforcement() {
    return this.getStringAttribute('ssl_enforcement');
  }
  public set sslEnforcement(value: string) {
    this._sslEnforcement = value;
  }
  public resetSslEnforcement() {
    this._sslEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnforcementInput() {
    return this._sslEnforcement;
  }

  // storage_mb - computed: true, optional: true, required: false
  private _storageMb?: number; 
  public get storageMb() {
    return this.getNumberAttribute('storage_mb');
  }
  public set storageMb(value: number) {
    this._storageMb = value;
  }
  public resetStorageMb() {
    this._storageMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMbInput() {
    return this._storageMb;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzureMysqlDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzureMysqlDatabaseTimeouts) {
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
      backup_retention_days: cdktf.numberToTerraform(this._backupRetentionDays),
      geo_redundant_backup: cdktf.stringToTerraform(this._geoRedundantBackup),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sku_name: cdktf.stringToTerraform(this._skuName),
      ssl_enforcement: cdktf.stringToTerraform(this._sslEnforcement),
      storage_mb: cdktf.numberToTerraform(this._storageMb),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      version: cdktf.stringToTerraform(this._version),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
      timeouts: azureMysqlDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
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
      backup_retention_days: {
        value: cdktf.numberToHclTerraform(this._backupRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_redundant_backup: {
        value: cdktf.stringToHclTerraform(this._geoRedundantBackup),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enforcement: {
        value: cdktf.stringToHclTerraform(this._sslEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_mb: {
        value: cdktf.numberToHclTerraform(this._storageMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      timeouts: {
        value: azureMysqlDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureMysqlDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
