// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabasePostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#allow_list DatabasePostgresql#allow_list}
  */
  readonly allowList?: string[];
  /**
  * The number of Linode Instance nodes deployed to the Managed Database. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#cluster_size DatabasePostgresql#cluster_size}
  */
  readonly clusterSize?: number;
  /**
  * Whether the Managed Databases is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#encrypted DatabasePostgresql#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * The Managed Database engine in engine/version format. (e.g. mysql/8.0.30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#engine_id DatabasePostgresql#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#id DatabasePostgresql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique, user-defined string referring to the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#label DatabasePostgresql#label}
  */
  readonly label: string;
  /**
  * The region to use for the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#region DatabasePostgresql#region}
  */
  readonly region: string;
  /**
  * The synchronization level of the replicating server.Must be `local` or `off` for the `asynch` replication type. Must be `on`, `remote_write`, or `remote_apply` for the `semi_synch` replication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#replication_commit_type DatabasePostgresql#replication_commit_type}
  */
  readonly replicationCommitType?: string;
  /**
  * The replication method used for the Managed Database. Must be `none` for a single node cluster. Must be `asynch` or `semi_synch` for a high availability cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#replication_type DatabasePostgresql#replication_type}
  */
  readonly replicationType?: string;
  /**
  * Whether to require SSL credentials to establish a connection to the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#ssl_connection DatabasePostgresql#ssl_connection}
  */
  readonly sslConnection?: boolean | cdktf.IResolvable;
  /**
  * The Linode Instance type used by the Managed Database for its nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#type DatabasePostgresql#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#timeouts DatabasePostgresql#timeouts}
  */
  readonly timeouts?: DatabasePostgresqlTimeouts;
  /**
  * updates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#updates DatabasePostgresql#updates}
  */
  readonly updates?: DatabasePostgresqlUpdates;
}
export interface DatabasePostgresqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#create DatabasePostgresql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#delete DatabasePostgresql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#update DatabasePostgresql#update}
  */
  readonly update?: string;
}

export function databasePostgresqlTimeoutsToTerraform(struct?: DatabasePostgresqlTimeouts | cdktf.IResolvable): any {
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


export function databasePostgresqlTimeoutsToHclTerraform(struct?: DatabasePostgresqlTimeouts | cdktf.IResolvable): any {
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

export class DatabasePostgresqlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabasePostgresqlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabasePostgresqlTimeouts | cdktf.IResolvable | undefined) {
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
export interface DatabasePostgresqlUpdates {
  /**
  * The day to perform maintenance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#day_of_week DatabasePostgresql#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * The maximum maintenance window time in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#duration DatabasePostgresql#duration}
  */
  readonly duration: number;
  /**
  * Whether maintenance occurs on a weekly or monthly basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#frequency DatabasePostgresql#frequency}
  */
  readonly frequency: string;
  /**
  * The hour to begin maintenance based in UTC time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#hour_of_day DatabasePostgresql#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * The week of the month to perform monthly frequency updates. Required for monthly frequency updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#week_of_month DatabasePostgresql#week_of_month}
  */
  readonly weekOfMonth?: number;
}

export function databasePostgresqlUpdatesToTerraform(struct?: DatabasePostgresqlUpdatesOutputReference | DatabasePostgresqlUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    duration: cdktf.numberToTerraform(struct!.duration),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    week_of_month: cdktf.numberToTerraform(struct!.weekOfMonth),
  }
}


export function databasePostgresqlUpdatesToHclTerraform(struct?: DatabasePostgresqlUpdatesOutputReference | DatabasePostgresqlUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    week_of_month: {
      value: cdktf.numberToHclTerraform(struct!.weekOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabasePostgresqlUpdatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabasePostgresqlUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._weekOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfMonth = this._weekOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePostgresqlUpdates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._duration = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._weekOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._duration = value.duration;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._weekOfMonth = value.weekOfMonth;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // week_of_month - computed: false, optional: true, required: false
  private _weekOfMonth?: number; 
  public get weekOfMonth() {
    return this.getNumberAttribute('week_of_month');
  }
  public set weekOfMonth(value: number) {
    this._weekOfMonth = value;
  }
  public resetWeekOfMonth() {
    this._weekOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfMonthInput() {
    return this._weekOfMonth;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql linode_database_postgresql}
*/
export class DatabasePostgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_database_postgresql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabasePostgresql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabasePostgresql to import
  * @param importFromId The id of the existing DatabasePostgresql that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabasePostgresql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_database_postgresql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/database_postgresql linode_database_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabasePostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: DatabasePostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_database_postgresql',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowList = config.allowList;
    this._clusterSize = config.clusterSize;
    this._encrypted = config.encrypted;
    this._engineId = config.engineId;
    this._id = config.id;
    this._label = config.label;
    this._region = config.region;
    this._replicationCommitType = config.replicationCommitType;
    this._replicationType = config.replicationType;
    this._sslConnection = config.sslConnection;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
    this._updates.internalValue = config.updates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: true, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_list'));
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // cluster_size - computed: false, optional: true, required: false
  private _clusterSize?: number; 
  public get clusterSize() {
    return this.getNumberAttribute('cluster_size');
  }
  public set clusterSize(value: number) {
    this._clusterSize = value;
  }
  public resetClusterSize() {
    this._clusterSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeInput() {
    return this._clusterSize;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // host_primary - computed: true, optional: false, required: false
  public get hostPrimary() {
    return this.getStringAttribute('host_primary');
  }

  // host_secondary - computed: true, optional: false, required: false
  public get hostSecondary() {
    return this.getStringAttribute('host_secondary');
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replication_commit_type - computed: false, optional: true, required: false
  private _replicationCommitType?: string; 
  public get replicationCommitType() {
    return this.getStringAttribute('replication_commit_type');
  }
  public set replicationCommitType(value: string) {
    this._replicationCommitType = value;
  }
  public resetReplicationCommitType() {
    this._replicationCommitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationCommitTypeInput() {
    return this._replicationCommitType;
  }

  // replication_type - computed: false, optional: true, required: false
  private _replicationType?: string; 
  public get replicationType() {
    return this.getStringAttribute('replication_type');
  }
  public set replicationType(value: string) {
    this._replicationType = value;
  }
  public resetReplicationType() {
    this._replicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTypeInput() {
    return this._replicationType;
  }

  // root_password - computed: true, optional: false, required: false
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }

  // root_username - computed: true, optional: false, required: false
  public get rootUsername() {
    return this.getStringAttribute('root_username');
  }

  // ssl_connection - computed: false, optional: true, required: false
  private _sslConnection?: boolean | cdktf.IResolvable; 
  public get sslConnection() {
    return this.getBooleanAttribute('ssl_connection');
  }
  public set sslConnection(value: boolean | cdktf.IResolvable) {
    this._sslConnection = value;
  }
  public resetSslConnection() {
    this._sslConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConnectionInput() {
    return this._sslConnection;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabasePostgresqlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabasePostgresqlTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // updates - computed: false, optional: true, required: false
  private _updates = new DatabasePostgresqlUpdatesOutputReference(this, "updates");
  public get updates() {
    return this._updates;
  }
  public putUpdates(value: DatabasePostgresqlUpdates) {
    this._updates.internalValue = value;
  }
  public resetUpdates() {
    this._updates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatesInput() {
    return this._updates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowList),
      cluster_size: cdktf.numberToTerraform(this._clusterSize),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      engine_id: cdktf.stringToTerraform(this._engineId),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      region: cdktf.stringToTerraform(this._region),
      replication_commit_type: cdktf.stringToTerraform(this._replicationCommitType),
      replication_type: cdktf.stringToTerraform(this._replicationType),
      ssl_connection: cdktf.booleanToTerraform(this._sslConnection),
      type: cdktf.stringToTerraform(this._type),
      timeouts: databasePostgresqlTimeoutsToTerraform(this._timeouts.internalValue),
      updates: databasePostgresqlUpdatesToTerraform(this._updates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_size: {
        value: cdktf.numberToHclTerraform(this._clusterSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      replication_commit_type: {
        value: cdktf.stringToHclTerraform(this._replicationCommitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_type: {
        value: cdktf.stringToHclTerraform(this._replicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_connection: {
        value: cdktf.booleanToHclTerraform(this._sslConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databasePostgresqlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabasePostgresqlTimeouts",
      },
      updates: {
        value: databasePostgresqlUpdatesToHclTerraform(this._updates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabasePostgresqlUpdatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
