// https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverflexInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Access Control List (ACL) for the SQLServer Flex instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#acl SqlserverflexInstance#acl}
  */
  readonly acl?: string[];
  /**
  * The backup schedule. Should follow the cron scheduling system format (e.g. "0 0 * * *")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#backup_schedule SqlserverflexInstance#backup_schedule}
  */
  readonly backupSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#flavor SqlserverflexInstance#flavor}
  */
  readonly flavor: SqlserverflexInstanceFlavor;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#name SqlserverflexInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#options SqlserverflexInstance#options}
  */
  readonly options?: SqlserverflexInstanceOptions;
  /**
  * STACKIT project ID to which the instance is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#project_id SqlserverflexInstance#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#region SqlserverflexInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#storage SqlserverflexInstance#storage}
  */
  readonly storage?: SqlserverflexInstanceStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#version SqlserverflexInstance#version}
  */
  readonly version?: string;
}
export interface SqlserverflexInstanceFlavor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#cpu SqlserverflexInstance#cpu}
  */
  readonly cpu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#ram SqlserverflexInstance#ram}
  */
  readonly ram: number;
}

export function sqlserverflexInstanceFlavorToTerraform(struct?: SqlserverflexInstanceFlavor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    ram: cdktf.numberToTerraform(struct!.ram),
  }
}


export function sqlserverflexInstanceFlavorToHclTerraform(struct?: SqlserverflexInstanceFlavor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ram: {
      value: cdktf.numberToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverflexInstanceFlavorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SqlserverflexInstanceFlavor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._ram !== undefined) {
      hasAnyValues = true;
      internalValueResult.ram = this._ram;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverflexInstanceFlavor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._ram = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._ram = value.ram;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ram - computed: false, optional: false, required: true
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }
}
export interface SqlserverflexInstanceOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#retention_days SqlserverflexInstance#retention_days}
  */
  readonly retentionDays?: number;
}

export function sqlserverflexInstanceOptionsToTerraform(struct?: SqlserverflexInstanceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function sqlserverflexInstanceOptionsToHclTerraform(struct?: SqlserverflexInstanceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverflexInstanceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SqlserverflexInstanceOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverflexInstanceOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retentionDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retentionDays = value.retentionDays;
    }
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // retention_days - computed: true, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface SqlserverflexInstanceStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#class SqlserverflexInstance#class}
  */
  readonly class?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#size SqlserverflexInstance#size}
  */
  readonly size?: number;
}

export function sqlserverflexInstanceStorageToTerraform(struct?: SqlserverflexInstanceStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function sqlserverflexInstanceStorageToHclTerraform(struct?: SqlserverflexInstanceStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverflexInstanceStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SqlserverflexInstanceStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverflexInstanceStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._size = value.size;
    }
  }

  // class - computed: true, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance stackit_sqlserverflex_instance}
*/
export class SqlserverflexInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_sqlserverflex_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverflexInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverflexInstance to import
  * @param importFromId The id of the existing SqlserverflexInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverflexInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_sqlserverflex_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/sqlserverflex_instance stackit_sqlserverflex_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverflexInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverflexInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_sqlserverflex_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.75.0',
        providerVersionConstraint: '0.75.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._backupSchedule = config.backupSchedule;
    this._flavor.internalValue = config.flavor;
    this._name = config.name;
    this._options.internalValue = config.options;
    this._projectId = config.projectId;
    this._region = config.region;
    this._storage.internalValue = config.storage;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: true, required: false
  private _acl?: string[]; 
  public get acl() {
    return this.getListAttribute('acl');
  }
  public set acl(value: string[]) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // backup_schedule - computed: true, optional: true, required: false
  private _backupSchedule?: string; 
  public get backupSchedule() {
    return this.getStringAttribute('backup_schedule');
  }
  public set backupSchedule(value: string) {
    this._backupSchedule = value;
  }
  public resetBackupSchedule() {
    this._backupSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor = new SqlserverflexInstanceFlavorOutputReference(this, "flavor");
  public get flavor() {
    return this._flavor;
  }
  public putFlavor(value: SqlserverflexInstanceFlavor) {
    this._flavor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
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

  // options - computed: true, optional: true, required: false
  private _options = new SqlserverflexInstanceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: SqlserverflexInstanceOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // storage - computed: true, optional: true, required: false
  private _storage = new SqlserverflexInstanceStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: SqlserverflexInstanceStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acl),
      backup_schedule: cdktf.stringToTerraform(this._backupSchedule),
      flavor: sqlserverflexInstanceFlavorToTerraform(this._flavor.internalValue),
      name: cdktf.stringToTerraform(this._name),
      options: sqlserverflexInstanceOptionsToTerraform(this._options.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      storage: sqlserverflexInstanceStorageToTerraform(this._storage.internalValue),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backup_schedule: {
        value: cdktf.stringToHclTerraform(this._backupSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: sqlserverflexInstanceFlavorToHclTerraform(this._flavor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SqlserverflexInstanceFlavor",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: sqlserverflexInstanceOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SqlserverflexInstanceOptions",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: sqlserverflexInstanceStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SqlserverflexInstanceStorage",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
