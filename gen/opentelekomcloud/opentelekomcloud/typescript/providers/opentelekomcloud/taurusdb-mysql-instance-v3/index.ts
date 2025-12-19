// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaurusdbMysqlInstanceV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#availability_zone_mode TaurusdbMysqlInstanceV3#availability_zone_mode}
  */
  readonly availabilityZoneMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#configuration_id TaurusdbMysqlInstanceV3#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#dedicated_resource_id TaurusdbMysqlInstanceV3#dedicated_resource_id}
  */
  readonly dedicatedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#enterprise_project_id TaurusdbMysqlInstanceV3#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#flavor TaurusdbMysqlInstanceV3#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#id TaurusdbMysqlInstanceV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#master_availability_zone TaurusdbMysqlInstanceV3#master_availability_zone}
  */
  readonly masterAvailabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#name TaurusdbMysqlInstanceV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#password TaurusdbMysqlInstanceV3#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#port TaurusdbMysqlInstanceV3#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#read_replicas TaurusdbMysqlInstanceV3#read_replicas}
  */
  readonly readReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_enabled TaurusdbMysqlInstanceV3#seconds_level_monitoring_enabled}
  */
  readonly secondsLevelMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_period TaurusdbMysqlInstanceV3#seconds_level_monitoring_period}
  */
  readonly secondsLevelMonitoringPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#security_group_id TaurusdbMysqlInstanceV3#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#subnet_id TaurusdbMysqlInstanceV3#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#table_name_case_sensitivity TaurusdbMysqlInstanceV3#table_name_case_sensitivity}
  */
  readonly tableNameCaseSensitivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#time_zone TaurusdbMysqlInstanceV3#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#volume_size TaurusdbMysqlInstanceV3#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#vpc_id TaurusdbMysqlInstanceV3#vpc_id}
  */
  readonly vpcId: string;
  /**
  * backup_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#backup_strategy TaurusdbMysqlInstanceV3#backup_strategy}
  */
  readonly backupStrategy?: TaurusdbMysqlInstanceV3BackupStrategy;
  /**
  * datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#datastore TaurusdbMysqlInstanceV3#datastore}
  */
  readonly datastore?: TaurusdbMysqlInstanceV3Datastore;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#timeouts TaurusdbMysqlInstanceV3#timeouts}
  */
  readonly timeouts?: TaurusdbMysqlInstanceV3Timeouts;
}
export interface TaurusdbMysqlInstanceV3Nodes {
}

export function taurusdbMysqlInstanceV3NodesToTerraform(struct?: TaurusdbMysqlInstanceV3Nodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taurusdbMysqlInstanceV3NodesToHclTerraform(struct?: TaurusdbMysqlInstanceV3Nodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaurusdbMysqlInstanceV3NodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TaurusdbMysqlInstanceV3Nodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaurusdbMysqlInstanceV3Nodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_read_ip - computed: true, optional: false, required: false
  public get privateReadIp() {
    return this.getStringAttribute('private_read_ip');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class TaurusdbMysqlInstanceV3NodesList extends cdktf.ComplexList {

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
  public get(index: number): TaurusdbMysqlInstanceV3NodesOutputReference {
    return new TaurusdbMysqlInstanceV3NodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaurusdbMysqlInstanceV3BackupStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#keep_days TaurusdbMysqlInstanceV3#keep_days}
  */
  readonly keepDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#start_time TaurusdbMysqlInstanceV3#start_time}
  */
  readonly startTime: string;
}

export function taurusdbMysqlInstanceV3BackupStrategyToTerraform(struct?: TaurusdbMysqlInstanceV3BackupStrategyOutputReference | TaurusdbMysqlInstanceV3BackupStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_days: cdktf.numberToTerraform(struct!.keepDays),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function taurusdbMysqlInstanceV3BackupStrategyToHclTerraform(struct?: TaurusdbMysqlInstanceV3BackupStrategyOutputReference | TaurusdbMysqlInstanceV3BackupStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_days: {
      value: cdktf.numberToHclTerraform(struct!.keepDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TaurusdbMysqlInstanceV3BackupStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TaurusdbMysqlInstanceV3BackupStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDays = this._keepDays;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaurusdbMysqlInstanceV3BackupStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keepDays = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keepDays = value.keepDays;
      this._startTime = value.startTime;
    }
  }

  // keep_days - computed: false, optional: true, required: false
  private _keepDays?: number; 
  public get keepDays() {
    return this.getNumberAttribute('keep_days');
  }
  public set keepDays(value: number) {
    this._keepDays = value;
  }
  public resetKeepDays() {
    this._keepDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDaysInput() {
    return this._keepDays;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface TaurusdbMysqlInstanceV3Datastore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#engine TaurusdbMysqlInstanceV3#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#version TaurusdbMysqlInstanceV3#version}
  */
  readonly version?: string;
}

export function taurusdbMysqlInstanceV3DatastoreToTerraform(struct?: TaurusdbMysqlInstanceV3DatastoreOutputReference | TaurusdbMysqlInstanceV3Datastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine: cdktf.stringToTerraform(struct!.engine),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function taurusdbMysqlInstanceV3DatastoreToHclTerraform(struct?: TaurusdbMysqlInstanceV3DatastoreOutputReference | TaurusdbMysqlInstanceV3Datastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TaurusdbMysqlInstanceV3DatastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TaurusdbMysqlInstanceV3Datastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaurusdbMysqlInstanceV3Datastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engine = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engine = value.engine;
      this._version = value.version;
    }
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
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
}
export interface TaurusdbMysqlInstanceV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#create TaurusdbMysqlInstanceV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#delete TaurusdbMysqlInstanceV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#update TaurusdbMysqlInstanceV3#update}
  */
  readonly update?: string;
}

export function taurusdbMysqlInstanceV3TimeoutsToTerraform(struct?: TaurusdbMysqlInstanceV3Timeouts | cdktf.IResolvable): any {
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


export function taurusdbMysqlInstanceV3TimeoutsToHclTerraform(struct?: TaurusdbMysqlInstanceV3Timeouts | cdktf.IResolvable): any {
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

export class TaurusdbMysqlInstanceV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TaurusdbMysqlInstanceV3Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TaurusdbMysqlInstanceV3Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3 opentelekomcloud_taurusdb_mysql_instance_v3}
*/
export class TaurusdbMysqlInstanceV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_taurusdb_mysql_instance_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaurusdbMysqlInstanceV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaurusdbMysqlInstanceV3 to import
  * @param importFromId The id of the existing TaurusdbMysqlInstanceV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaurusdbMysqlInstanceV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_taurusdb_mysql_instance_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/taurusdb_mysql_instance_v3 opentelekomcloud_taurusdb_mysql_instance_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaurusdbMysqlInstanceV3Config
  */
  public constructor(scope: Construct, id: string, config: TaurusdbMysqlInstanceV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_taurusdb_mysql_instance_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.55',
        providerVersionConstraint: '1.36.55'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZoneMode = config.availabilityZoneMode;
    this._configurationId = config.configurationId;
    this._dedicatedResourceId = config.dedicatedResourceId;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._flavor = config.flavor;
    this._id = config.id;
    this._masterAvailabilityZone = config.masterAvailabilityZone;
    this._name = config.name;
    this._password = config.password;
    this._port = config.port;
    this._readReplicas = config.readReplicas;
    this._secondsLevelMonitoringEnabled = config.secondsLevelMonitoringEnabled;
    this._secondsLevelMonitoringPeriod = config.secondsLevelMonitoringPeriod;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
    this._tableNameCaseSensitivity = config.tableNameCaseSensitivity;
    this._timeZone = config.timeZone;
    this._volumeSize = config.volumeSize;
    this._vpcId = config.vpcId;
    this._backupStrategy.internalValue = config.backupStrategy;
    this._datastore.internalValue = config.datastore;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone_mode - computed: false, optional: true, required: false
  private _availabilityZoneMode?: string; 
  public get availabilityZoneMode() {
    return this.getStringAttribute('availability_zone_mode');
  }
  public set availabilityZoneMode(value: string) {
    this._availabilityZoneMode = value;
  }
  public resetAvailabilityZoneMode() {
    this._availabilityZoneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneModeInput() {
    return this._availabilityZoneMode;
  }

  // configuration_id - computed: true, optional: true, required: false
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  public resetConfigurationId() {
    this._configurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // db_user_name - computed: true, optional: false, required: false
  public get dbUserName() {
    return this.getStringAttribute('db_user_name');
  }

  // dedicated_resource_id - computed: true, optional: true, required: false
  private _dedicatedResourceId?: string; 
  public get dedicatedResourceId() {
    return this.getStringAttribute('dedicated_resource_id');
  }
  public set dedicatedResourceId(value: string) {
    this._dedicatedResourceId = value;
  }
  public resetDedicatedResourceId() {
    this._dedicatedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedResourceIdInput() {
    return this._dedicatedResourceId;
  }

  // enterprise_project_id - computed: true, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // master_availability_zone - computed: true, optional: true, required: false
  private _masterAvailabilityZone?: string; 
  public get masterAvailabilityZone() {
    return this.getStringAttribute('master_availability_zone');
  }
  public set masterAvailabilityZone(value: string) {
    this._masterAvailabilityZone = value;
  }
  public resetMasterAvailabilityZone() {
    this._masterAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAvailabilityZoneInput() {
    return this._masterAvailabilityZone;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // nodes - computed: true, optional: false, required: false
  private _nodes = new TaurusdbMysqlInstanceV3NodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_dns_name - computed: true, optional: false, required: false
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
  }

  // private_write_ip - computed: true, optional: false, required: false
  public get privateWriteIp() {
    return this.getStringAttribute('private_write_ip');
  }

  // read_replicas - computed: false, optional: true, required: false
  private _readReplicas?: number; 
  public get readReplicas() {
    return this.getNumberAttribute('read_replicas');
  }
  public set readReplicas(value: number) {
    this._readReplicas = value;
  }
  public resetReadReplicas() {
    this._readReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readReplicasInput() {
    return this._readReplicas;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // seconds_level_monitoring_enabled - computed: true, optional: true, required: false
  private _secondsLevelMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get secondsLevelMonitoringEnabled() {
    return this.getBooleanAttribute('seconds_level_monitoring_enabled');
  }
  public set secondsLevelMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._secondsLevelMonitoringEnabled = value;
  }
  public resetSecondsLevelMonitoringEnabled() {
    this._secondsLevelMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsLevelMonitoringEnabledInput() {
    return this._secondsLevelMonitoringEnabled;
  }

  // seconds_level_monitoring_period - computed: false, optional: true, required: false
  private _secondsLevelMonitoringPeriod?: number; 
  public get secondsLevelMonitoringPeriod() {
    return this.getNumberAttribute('seconds_level_monitoring_period');
  }
  public set secondsLevelMonitoringPeriod(value: number) {
    this._secondsLevelMonitoringPeriod = value;
  }
  public resetSecondsLevelMonitoringPeriod() {
    this._secondsLevelMonitoringPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsLevelMonitoringPeriodInput() {
    return this._secondsLevelMonitoringPeriod;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // table_name_case_sensitivity - computed: false, optional: true, required: false
  private _tableNameCaseSensitivity?: boolean | cdktf.IResolvable; 
  public get tableNameCaseSensitivity() {
    return this.getBooleanAttribute('table_name_case_sensitivity');
  }
  public set tableNameCaseSensitivity(value: boolean | cdktf.IResolvable) {
    this._tableNameCaseSensitivity = value;
  }
  public resetTableNameCaseSensitivity() {
    this._tableNameCaseSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameCaseSensitivityInput() {
    return this._tableNameCaseSensitivity;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // backup_strategy - computed: false, optional: true, required: false
  private _backupStrategy = new TaurusdbMysqlInstanceV3BackupStrategyOutputReference(this, "backup_strategy");
  public get backupStrategy() {
    return this._backupStrategy;
  }
  public putBackupStrategy(value: TaurusdbMysqlInstanceV3BackupStrategy) {
    this._backupStrategy.internalValue = value;
  }
  public resetBackupStrategy() {
    this._backupStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStrategyInput() {
    return this._backupStrategy.internalValue;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore = new TaurusdbMysqlInstanceV3DatastoreOutputReference(this, "datastore");
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: TaurusdbMysqlInstanceV3Datastore) {
    this._datastore.internalValue = value;
  }
  public resetDatastore() {
    this._datastore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TaurusdbMysqlInstanceV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TaurusdbMysqlInstanceV3Timeouts) {
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
      availability_zone_mode: cdktf.stringToTerraform(this._availabilityZoneMode),
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      dedicated_resource_id: cdktf.stringToTerraform(this._dedicatedResourceId),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      flavor: cdktf.stringToTerraform(this._flavor),
      id: cdktf.stringToTerraform(this._id),
      master_availability_zone: cdktf.stringToTerraform(this._masterAvailabilityZone),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      read_replicas: cdktf.numberToTerraform(this._readReplicas),
      seconds_level_monitoring_enabled: cdktf.booleanToTerraform(this._secondsLevelMonitoringEnabled),
      seconds_level_monitoring_period: cdktf.numberToTerraform(this._secondsLevelMonitoringPeriod),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      table_name_case_sensitivity: cdktf.booleanToTerraform(this._tableNameCaseSensitivity),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      volume_size: cdktf.numberToTerraform(this._volumeSize),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      backup_strategy: taurusdbMysqlInstanceV3BackupStrategyToTerraform(this._backupStrategy.internalValue),
      datastore: taurusdbMysqlInstanceV3DatastoreToTerraform(this._datastore.internalValue),
      timeouts: taurusdbMysqlInstanceV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone_mode: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_resource_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
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
      master_availability_zone: {
        value: cdktf.stringToHclTerraform(this._masterAvailabilityZone),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_replicas: {
        value: cdktf.numberToHclTerraform(this._readReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seconds_level_monitoring_enabled: {
        value: cdktf.booleanToHclTerraform(this._secondsLevelMonitoringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      seconds_level_monitoring_period: {
        value: cdktf.numberToHclTerraform(this._secondsLevelMonitoringPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name_case_sensitivity: {
        value: cdktf.booleanToHclTerraform(this._tableNameCaseSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_size: {
        value: cdktf.numberToHclTerraform(this._volumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_strategy: {
        value: taurusdbMysqlInstanceV3BackupStrategyToHclTerraform(this._backupStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TaurusdbMysqlInstanceV3BackupStrategyList",
      },
      datastore: {
        value: taurusdbMysqlInstanceV3DatastoreToHclTerraform(this._datastore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TaurusdbMysqlInstanceV3DatastoreList",
      },
      timeouts: {
        value: taurusdbMysqlInstanceV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TaurusdbMysqlInstanceV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
