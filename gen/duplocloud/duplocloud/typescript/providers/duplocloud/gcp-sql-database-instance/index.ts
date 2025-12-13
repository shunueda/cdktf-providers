// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpSqlDatabaseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The MySQL, PostgreSQL or SQL Server version to use.Supported values include `MYSQL_5_6`,`MYSQL_5_7`, `MYSQL_8_0`, `POSTGRES_9_6`,`POSTGRES_10`,`POSTGRES_11`,`POSTGRES_12`, `POSTGRES_13`, `POSTGRES_14`, `POSTGRES_15`,`POSTGRES_16`,`POSTGRES_17`, `SQLSERVER_2017_STANDARD`,`SQLSERVER_2017_ENTERPRISE`,`SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`,`SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`,`SQLSERVER_2019_WEB`,`SQLSERVER_2022_WEB`,`SQLSERVER_2022_EXPRESS`,`SQLSERVER_2022_ENTERPRISE`,`SQLSERVER_2022_STANDARD`.[Database Version Policies](https://cloud.google.com/sql/docs/db-versions) includes an up-to-date reference of supported versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#database_version GcpSqlDatabaseInstance#database_version}
  */
  readonly databaseVersion: string;
  /**
  * The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#disk_size GcpSqlDatabaseInstance#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Edition for the database. Valid value ENTERPRISE, ENTERPRISE_PLUS Defaults to `ENTERPRISE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#edition GcpSqlDatabaseInstance#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#id GcpSqlDatabaseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#labels GcpSqlDatabaseInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The short name of the sql database.  Duplo will add a prefix to the name.  You can retrieve the full name from the `fullname` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#name GcpSqlDatabaseInstance#name}
  */
  readonly name: string;
  /**
  * Flag to enable backup process on delete of database Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#need_backup GcpSqlDatabaseInstance#need_backup}
  */
  readonly needBackup?: boolean | cdktf.IResolvable;
  /**
  * Provide root password for specific database versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#root_password GcpSqlDatabaseInstance#root_password}
  */
  readonly rootPassword?: string;
  /**
  * The GUID of the tenant that the sql database will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#tenant_id GcpSqlDatabaseInstance#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as `db-custom-2-13312`.See the [Custom Machine Type Documentation](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) to learn about specifying custom machine types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#tier GcpSqlDatabaseInstance#tier}
  */
  readonly tier: string;
  /**
  * Whether or not to wait until sql database instance to be ready, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#wait_until_ready GcpSqlDatabaseInstance#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
  /**
  * database_flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#database_flag GcpSqlDatabaseInstance#database_flag}
  */
  readonly databaseFlag?: GcpSqlDatabaseInstanceDatabaseFlag[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#timeouts GcpSqlDatabaseInstance#timeouts}
  */
  readonly timeouts?: GcpSqlDatabaseInstanceTimeouts;
}
export interface GcpSqlDatabaseInstanceDatabaseFlag {
  /**
  * The name of the database flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#name GcpSqlDatabaseInstance#name}
  */
  readonly name: string;
  /**
  * The value of the database flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#value GcpSqlDatabaseInstance#value}
  */
  readonly value: string;
}

export function gcpSqlDatabaseInstanceDatabaseFlagToTerraform(struct?: GcpSqlDatabaseInstanceDatabaseFlag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gcpSqlDatabaseInstanceDatabaseFlagToHclTerraform(struct?: GcpSqlDatabaseInstanceDatabaseFlag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpSqlDatabaseInstanceDatabaseFlagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpSqlDatabaseInstanceDatabaseFlag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpSqlDatabaseInstanceDatabaseFlag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GcpSqlDatabaseInstanceDatabaseFlagList extends cdktf.ComplexList {
  public internalValue? : GcpSqlDatabaseInstanceDatabaseFlag[] | cdktf.IResolvable

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
  public get(index: number): GcpSqlDatabaseInstanceDatabaseFlagOutputReference {
    return new GcpSqlDatabaseInstanceDatabaseFlagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpSqlDatabaseInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#create GcpSqlDatabaseInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#delete GcpSqlDatabaseInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#update GcpSqlDatabaseInstance#update}
  */
  readonly update?: string;
}

export function gcpSqlDatabaseInstanceTimeoutsToTerraform(struct?: GcpSqlDatabaseInstanceTimeouts | cdktf.IResolvable): any {
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


export function gcpSqlDatabaseInstanceTimeoutsToHclTerraform(struct?: GcpSqlDatabaseInstanceTimeouts | cdktf.IResolvable): any {
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

export class GcpSqlDatabaseInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GcpSqlDatabaseInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GcpSqlDatabaseInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance duplocloud_gcp_sql_database_instance}
*/
export class GcpSqlDatabaseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_gcp_sql_database_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpSqlDatabaseInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpSqlDatabaseInstance to import
  * @param importFromId The id of the existing GcpSqlDatabaseInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpSqlDatabaseInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_gcp_sql_database_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/gcp_sql_database_instance duplocloud_gcp_sql_database_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpSqlDatabaseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GcpSqlDatabaseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_gcp_sql_database_instance',
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
    this._databaseVersion = config.databaseVersion;
    this._diskSize = config.diskSize;
    this._edition = config.edition;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._needBackup = config.needBackup;
    this._rootPassword = config.rootPassword;
    this._tenantId = config.tenantId;
    this._tier = config.tier;
    this._waitUntilReady = config.waitUntilReady;
    this._databaseFlag.internalValue = config.databaseFlag;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // database_version - computed: false, optional: false, required: true
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // need_backup - computed: false, optional: true, required: false
  private _needBackup?: boolean | cdktf.IResolvable; 
  public get needBackup() {
    return this.getBooleanAttribute('need_backup');
  }
  public set needBackup(value: boolean | cdktf.IResolvable) {
    this._needBackup = value;
  }
  public resetNeedBackup() {
    this._needBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needBackupInput() {
    return this._needBackup;
  }

  // root_password - computed: true, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
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

  // database_flag - computed: false, optional: true, required: false
  private _databaseFlag = new GcpSqlDatabaseInstanceDatabaseFlagList(this, "database_flag", false);
  public get databaseFlag() {
    return this._databaseFlag;
  }
  public putDatabaseFlag(value: GcpSqlDatabaseInstanceDatabaseFlag[] | cdktf.IResolvable) {
    this._databaseFlag.internalValue = value;
  }
  public resetDatabaseFlag() {
    this._databaseFlag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFlagInput() {
    return this._databaseFlag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GcpSqlDatabaseInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GcpSqlDatabaseInstanceTimeouts) {
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
      database_version: cdktf.stringToTerraform(this._databaseVersion),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      edition: cdktf.stringToTerraform(this._edition),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      need_backup: cdktf.booleanToTerraform(this._needBackup),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tier: cdktf.stringToTerraform(this._tier),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
      database_flag: cdktf.listMapper(gcpSqlDatabaseInstanceDatabaseFlagToTerraform, true)(this._databaseFlag.internalValue),
      timeouts: gcpSqlDatabaseInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_version: {
        value: cdktf.stringToHclTerraform(this._databaseVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      need_backup: {
        value: cdktf.booleanToHclTerraform(this._needBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_password: {
        value: cdktf.stringToHclTerraform(this._rootPassword),
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
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
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
      database_flag: {
        value: cdktf.listMapperHcl(gcpSqlDatabaseInstanceDatabaseFlagToHclTerraform, true)(this._databaseFlag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpSqlDatabaseInstanceDatabaseFlagList",
      },
      timeouts: {
        value: gcpSqlDatabaseInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GcpSqlDatabaseInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
