// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaussdbMysqlInstanceV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#availability_zone_mode GaussdbMysqlInstanceV3#availability_zone_mode}
  */
  readonly availabilityZoneMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#configuration_id GaussdbMysqlInstanceV3#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#configuration_name GaussdbMysqlInstanceV3#configuration_name}
  */
  readonly configurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#dedicated_resource_id GaussdbMysqlInstanceV3#dedicated_resource_id}
  */
  readonly dedicatedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#dedicated_resource_name GaussdbMysqlInstanceV3#dedicated_resource_name}
  */
  readonly dedicatedResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#flavor GaussdbMysqlInstanceV3#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#id GaussdbMysqlInstanceV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#master_availability_zone GaussdbMysqlInstanceV3#master_availability_zone}
  */
  readonly masterAvailabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#name GaussdbMysqlInstanceV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#password GaussdbMysqlInstanceV3#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#read_replicas GaussdbMysqlInstanceV3#read_replicas}
  */
  readonly readReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#region GaussdbMysqlInstanceV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#security_group_id GaussdbMysqlInstanceV3#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#subnet_id GaussdbMysqlInstanceV3#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#time_zone GaussdbMysqlInstanceV3#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#vpc_id GaussdbMysqlInstanceV3#vpc_id}
  */
  readonly vpcId: string;
  /**
  * backup_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#backup_strategy GaussdbMysqlInstanceV3#backup_strategy}
  */
  readonly backupStrategy?: GaussdbMysqlInstanceV3BackupStrategy;
  /**
  * datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#datastore GaussdbMysqlInstanceV3#datastore}
  */
  readonly datastore?: GaussdbMysqlInstanceV3Datastore;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#timeouts GaussdbMysqlInstanceV3#timeouts}
  */
  readonly timeouts?: GaussdbMysqlInstanceV3Timeouts;
}
export interface GaussdbMysqlInstanceV3Nodes {
}

export function gaussdbMysqlInstanceV3NodesToTerraform(struct?: GaussdbMysqlInstanceV3Nodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gaussdbMysqlInstanceV3NodesToHclTerraform(struct?: GaussdbMysqlInstanceV3Nodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GaussdbMysqlInstanceV3NodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaussdbMysqlInstanceV3Nodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaussdbMysqlInstanceV3Nodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // az_code - computed: true, optional: false, required: false
  public get azCode() {
    return this.getStringAttribute('az_code');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // flavor_ref - computed: true, optional: false, required: false
  public get flavorRef() {
    return this.getStringAttribute('flavor_ref');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getStringAttribute('max_connections');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // need_restart - computed: true, optional: false, required: false
  public get needRestart() {
    return this.getBooleanAttribute('need_restart');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // private_read_ips - computed: true, optional: false, required: false
  public get privateReadIps() {
    return this.getListAttribute('private_read_ips');
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getStringAttribute('ram');
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getStringAttribute('vcpus');
  }
}

export class GaussdbMysqlInstanceV3NodesList extends cdktf.ComplexList {

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
  public get(index: number): GaussdbMysqlInstanceV3NodesOutputReference {
    return new GaussdbMysqlInstanceV3NodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GaussdbMysqlInstanceV3BackupStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#keep_days GaussdbMysqlInstanceV3#keep_days}
  */
  readonly keepDays?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#start_time GaussdbMysqlInstanceV3#start_time}
  */
  readonly startTime: string;
}

export function gaussdbMysqlInstanceV3BackupStrategyToTerraform(struct?: GaussdbMysqlInstanceV3BackupStrategyOutputReference | GaussdbMysqlInstanceV3BackupStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_days: cdktf.stringToTerraform(struct!.keepDays),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function gaussdbMysqlInstanceV3BackupStrategyToHclTerraform(struct?: GaussdbMysqlInstanceV3BackupStrategyOutputReference | GaussdbMysqlInstanceV3BackupStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_days: {
      value: cdktf.stringToHclTerraform(struct!.keepDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GaussdbMysqlInstanceV3BackupStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GaussdbMysqlInstanceV3BackupStrategy | undefined {
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

  public set internalValue(value: GaussdbMysqlInstanceV3BackupStrategy | undefined) {
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
  private _keepDays?: string; 
  public get keepDays() {
    return this.getStringAttribute('keep_days');
  }
  public set keepDays(value: string) {
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
export interface GaussdbMysqlInstanceV3Datastore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#engine GaussdbMysqlInstanceV3#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#version GaussdbMysqlInstanceV3#version}
  */
  readonly version?: string;
}

export function gaussdbMysqlInstanceV3DatastoreToTerraform(struct?: GaussdbMysqlInstanceV3DatastoreOutputReference | GaussdbMysqlInstanceV3Datastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine: cdktf.stringToTerraform(struct!.engine),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function gaussdbMysqlInstanceV3DatastoreToHclTerraform(struct?: GaussdbMysqlInstanceV3DatastoreOutputReference | GaussdbMysqlInstanceV3Datastore): any {
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

export class GaussdbMysqlInstanceV3DatastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GaussdbMysqlInstanceV3Datastore | undefined {
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

  public set internalValue(value: GaussdbMysqlInstanceV3Datastore | undefined) {
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
export interface GaussdbMysqlInstanceV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#create GaussdbMysqlInstanceV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#delete GaussdbMysqlInstanceV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#update GaussdbMysqlInstanceV3#update}
  */
  readonly update?: string;
}

export function gaussdbMysqlInstanceV3TimeoutsToTerraform(struct?: GaussdbMysqlInstanceV3Timeouts | cdktf.IResolvable): any {
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


export function gaussdbMysqlInstanceV3TimeoutsToHclTerraform(struct?: GaussdbMysqlInstanceV3Timeouts | cdktf.IResolvable): any {
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

export class GaussdbMysqlInstanceV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GaussdbMysqlInstanceV3Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GaussdbMysqlInstanceV3Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3 opentelekomcloud_gaussdb_mysql_instance_v3}
*/
export class GaussdbMysqlInstanceV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_gaussdb_mysql_instance_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaussdbMysqlInstanceV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaussdbMysqlInstanceV3 to import
  * @param importFromId The id of the existing GaussdbMysqlInstanceV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaussdbMysqlInstanceV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_gaussdb_mysql_instance_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gaussdb_mysql_instance_v3 opentelekomcloud_gaussdb_mysql_instance_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaussdbMysqlInstanceV3Config
  */
  public constructor(scope: Construct, id: string, config: GaussdbMysqlInstanceV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_gaussdb_mysql_instance_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
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
    this._configurationName = config.configurationName;
    this._dedicatedResourceId = config.dedicatedResourceId;
    this._dedicatedResourceName = config.dedicatedResourceName;
    this._flavor = config.flavor;
    this._id = config.id;
    this._masterAvailabilityZone = config.masterAvailabilityZone;
    this._name = config.name;
    this._password = config.password;
    this._readReplicas = config.readReplicas;
    this._region = config.region;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
    this._timeZone = config.timeZone;
    this._vpcId = config.vpcId;
    this._backupStrategy.internalValue = config.backupStrategy;
    this._datastore.internalValue = config.datastore;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

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

  // charging_mode - computed: true, optional: false, required: false
  public get chargingMode() {
    return this.getStringAttribute('charging_mode');
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

  // configuration_name - computed: true, optional: true, required: false
  private _configurationName?: string; 
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }
  public set configurationName(value: string) {
    this._configurationName = value;
  }
  public resetConfigurationName() {
    this._configurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationNameInput() {
    return this._configurationName;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // dedicated_resource_name - computed: true, optional: true, required: false
  private _dedicatedResourceName?: string; 
  public get dedicatedResourceName() {
    return this.getStringAttribute('dedicated_resource_name');
  }
  public set dedicatedResourceName(value: string) {
    this._dedicatedResourceName = value;
  }
  public resetDedicatedResourceName() {
    this._dedicatedResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedResourceNameInput() {
    return this._dedicatedResourceName;
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

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new GaussdbMysqlInstanceV3NodesList(this, "nodes", false);
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_write_ip - computed: true, optional: false, required: false
  public get privateWriteIp() {
    return this.getListAttribute('private_write_ip');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
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
  private _backupStrategy = new GaussdbMysqlInstanceV3BackupStrategyOutputReference(this, "backup_strategy");
  public get backupStrategy() {
    return this._backupStrategy;
  }
  public putBackupStrategy(value: GaussdbMysqlInstanceV3BackupStrategy) {
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
  private _datastore = new GaussdbMysqlInstanceV3DatastoreOutputReference(this, "datastore");
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: GaussdbMysqlInstanceV3Datastore) {
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
  private _timeouts = new GaussdbMysqlInstanceV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GaussdbMysqlInstanceV3Timeouts) {
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
      configuration_name: cdktf.stringToTerraform(this._configurationName),
      dedicated_resource_id: cdktf.stringToTerraform(this._dedicatedResourceId),
      dedicated_resource_name: cdktf.stringToTerraform(this._dedicatedResourceName),
      flavor: cdktf.stringToTerraform(this._flavor),
      id: cdktf.stringToTerraform(this._id),
      master_availability_zone: cdktf.stringToTerraform(this._masterAvailabilityZone),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      read_replicas: cdktf.numberToTerraform(this._readReplicas),
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      backup_strategy: gaussdbMysqlInstanceV3BackupStrategyToTerraform(this._backupStrategy.internalValue),
      datastore: gaussdbMysqlInstanceV3DatastoreToTerraform(this._datastore.internalValue),
      timeouts: gaussdbMysqlInstanceV3TimeoutsToTerraform(this._timeouts.internalValue),
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
      configuration_name: {
        value: cdktf.stringToHclTerraform(this._configurationName),
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
      dedicated_resource_name: {
        value: cdktf.stringToHclTerraform(this._dedicatedResourceName),
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
      read_replicas: {
        value: cdktf.numberToHclTerraform(this._readReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_strategy: {
        value: gaussdbMysqlInstanceV3BackupStrategyToHclTerraform(this._backupStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GaussdbMysqlInstanceV3BackupStrategyList",
      },
      datastore: {
        value: gaussdbMysqlInstanceV3DatastoreToHclTerraform(this._datastore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GaussdbMysqlInstanceV3DatastoreList",
      },
      timeouts: {
        value: gaussdbMysqlInstanceV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GaussdbMysqlInstanceV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
