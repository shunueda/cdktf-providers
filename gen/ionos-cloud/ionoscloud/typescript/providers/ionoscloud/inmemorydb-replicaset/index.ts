// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InmemorydbReplicasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human readable name of your replica set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#display_name InmemorydbReplicaset#display_name}
  */
  readonly displayName: string;
  /**
  * The eviction policy for the replica set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#eviction_policy InmemorydbReplicaset#eviction_policy}
  */
  readonly evictionPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of a snapshot to restore the replica set from. If set, the replica set will be created from the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#initial_snapshot_id InmemorydbReplicaset#initial_snapshot_id}
  */
  readonly initialSnapshotId?: string;
  /**
  * The replica set location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#location InmemorydbReplicaset#location}
  */
  readonly location?: string;
  /**
  * Specifies How and If data is persisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#persistence_mode InmemorydbReplicaset#persistence_mode}
  */
  readonly persistenceMode: string;
  /**
  * The total number of replicas in the replica set (one active and n-1 passive). In case of a standalone instance, the value is 1. In all other cases, the value is > 1. The replicas will not be available as read replicas, they are only standby for a failure of the active instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#replicas InmemorydbReplicaset#replicas}
  */
  readonly replicas: number;
  /**
  * The InMemoryDB version of your replica set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#version InmemorydbReplicaset#version}
  */
  readonly version: string;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#connections InmemorydbReplicaset#connections}
  */
  readonly connections: InmemorydbReplicasetConnections;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#credentials InmemorydbReplicaset#credentials}
  */
  readonly credentials: InmemorydbReplicasetCredentials;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#maintenance_window InmemorydbReplicaset#maintenance_window}
  */
  readonly maintenanceWindow?: InmemorydbReplicasetMaintenanceWindow;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#resources InmemorydbReplicaset#resources}
  */
  readonly resources: InmemorydbReplicasetResources;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#timeouts InmemorydbReplicaset#timeouts}
  */
  readonly timeouts?: InmemorydbReplicasetTimeouts;
}
export interface InmemorydbReplicasetConnections {
  /**
  * The IP and subnet for your instance. Note the following unavailable IP ranges: 10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#cidr InmemorydbReplicaset#cidr}
  */
  readonly cidr: string;
  /**
  * The datacenter to connect your instance to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#datacenter_id InmemorydbReplicaset#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * The numeric LAN ID to connect your instance to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#lan_id InmemorydbReplicaset#lan_id}
  */
  readonly lanId: string;
}

export function inmemorydbReplicasetConnectionsToTerraform(struct?: InmemorydbReplicasetConnectionsOutputReference | InmemorydbReplicasetConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    datacenter_id: cdktf.stringToTerraform(struct!.datacenterId),
    lan_id: cdktf.stringToTerraform(struct!.lanId),
  }
}


export function inmemorydbReplicasetConnectionsToHclTerraform(struct?: InmemorydbReplicasetConnectionsOutputReference | InmemorydbReplicasetConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter_id: {
      value: cdktf.stringToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_id: {
      value: cdktf.stringToHclTerraform(struct!.lanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InmemorydbReplicasetConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InmemorydbReplicasetConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._lanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanId = this._lanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InmemorydbReplicasetConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidr = undefined;
      this._datacenterId = undefined;
      this._lanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidr = value.cidr;
      this._datacenterId = value.datacenterId;
      this._lanId = value.lanId;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // lan_id - computed: false, optional: false, required: true
  private _lanId?: string; 
  public get lanId() {
    return this.getStringAttribute('lan_id');
  }
  public set lanId(value: string) {
    this._lanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lanIdInput() {
    return this._lanId;
  }
}
export interface InmemorydbReplicasetCredentialsHashedPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#algorithm InmemorydbReplicaset#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#hash InmemorydbReplicaset#hash}
  */
  readonly hash: string;
}

export function inmemorydbReplicasetCredentialsHashedPasswordToTerraform(struct?: InmemorydbReplicasetCredentialsHashedPasswordOutputReference | InmemorydbReplicasetCredentialsHashedPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    hash: cdktf.stringToTerraform(struct!.hash),
  }
}


export function inmemorydbReplicasetCredentialsHashedPasswordToHclTerraform(struct?: InmemorydbReplicasetCredentialsHashedPasswordOutputReference | InmemorydbReplicasetCredentialsHashedPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InmemorydbReplicasetCredentialsHashedPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InmemorydbReplicasetCredentialsHashedPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InmemorydbReplicasetCredentialsHashedPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._hash = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._hash = value.hash;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }
}
export interface InmemorydbReplicasetCredentials {
  /**
  * The password for a InMemoryDB user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#plain_text_password InmemorydbReplicaset#plain_text_password}
  */
  readonly plainTextPassword?: string;
  /**
  * The username for the initial InMemoryDB user. Some system usernames are restricted (e.g. 'admin', 'standby').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#username InmemorydbReplicaset#username}
  */
  readonly username: string;
  /**
  * hashed_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#hashed_password InmemorydbReplicaset#hashed_password}
  */
  readonly hashedPassword?: InmemorydbReplicasetCredentialsHashedPassword;
}

export function inmemorydbReplicasetCredentialsToTerraform(struct?: InmemorydbReplicasetCredentialsOutputReference | InmemorydbReplicasetCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text_password: cdktf.stringToTerraform(struct!.plainTextPassword),
    username: cdktf.stringToTerraform(struct!.username),
    hashed_password: inmemorydbReplicasetCredentialsHashedPasswordToTerraform(struct!.hashedPassword),
  }
}


export function inmemorydbReplicasetCredentialsToHclTerraform(struct?: InmemorydbReplicasetCredentialsOutputReference | InmemorydbReplicasetCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plain_text_password: {
      value: cdktf.stringToHclTerraform(struct!.plainTextPassword),
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
    hashed_password: {
      value: inmemorydbReplicasetCredentialsHashedPasswordToHclTerraform(struct!.hashedPassword),
      isBlock: true,
      type: "list",
      storageClassType: "InmemorydbReplicasetCredentialsHashedPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InmemorydbReplicasetCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InmemorydbReplicasetCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plainTextPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextPassword = this._plainTextPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._hashedPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashedPassword = this._hashedPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InmemorydbReplicasetCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plainTextPassword = undefined;
      this._username = undefined;
      this._hashedPassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plainTextPassword = value.plainTextPassword;
      this._username = value.username;
      this._hashedPassword.internalValue = value.hashedPassword;
    }
  }

  // plain_text_password - computed: false, optional: true, required: false
  private _plainTextPassword?: string; 
  public get plainTextPassword() {
    return this.getStringAttribute('plain_text_password');
  }
  public set plainTextPassword(value: string) {
    this._plainTextPassword = value;
  }
  public resetPlainTextPassword() {
    this._plainTextPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextPasswordInput() {
    return this._plainTextPassword;
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

  // hashed_password - computed: false, optional: true, required: false
  private _hashedPassword = new InmemorydbReplicasetCredentialsHashedPasswordOutputReference(this, "hashed_password");
  public get hashedPassword() {
    return this._hashedPassword;
  }
  public putHashedPassword(value: InmemorydbReplicasetCredentialsHashedPassword) {
    this._hashedPassword.internalValue = value;
  }
  public resetHashedPassword() {
    this._hashedPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashedPasswordInput() {
    return this._hashedPassword.internalValue;
  }
}
export interface InmemorydbReplicasetMaintenanceWindow {
  /**
  * The name of the week day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#day_of_the_week InmemorydbReplicaset#day_of_the_week}
  */
  readonly dayOfTheWeek: string;
  /**
  * Start of the maintenance window in UTC time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#time InmemorydbReplicaset#time}
  */
  readonly time: string;
}

export function inmemorydbReplicasetMaintenanceWindowToTerraform(struct?: InmemorydbReplicasetMaintenanceWindowOutputReference | InmemorydbReplicasetMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_the_week: cdktf.stringToTerraform(struct!.dayOfTheWeek),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function inmemorydbReplicasetMaintenanceWindowToHclTerraform(struct?: InmemorydbReplicasetMaintenanceWindowOutputReference | InmemorydbReplicasetMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_the_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfTheWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InmemorydbReplicasetMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InmemorydbReplicasetMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfTheWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfTheWeek = this._dayOfTheWeek;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InmemorydbReplicasetMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfTheWeek = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfTheWeek = value.dayOfTheWeek;
      this._time = value.time;
    }
  }

  // day_of_the_week - computed: false, optional: false, required: true
  private _dayOfTheWeek?: string; 
  public get dayOfTheWeek() {
    return this.getStringAttribute('day_of_the_week');
  }
  public set dayOfTheWeek(value: string) {
    this._dayOfTheWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfTheWeekInput() {
    return this._dayOfTheWeek;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface InmemorydbReplicasetResources {
  /**
  * The number of CPU cores per instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#cores InmemorydbReplicaset#cores}
  */
  readonly cores: number;
  /**
  * The amount of memory per instance in gigabytes (GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#ram InmemorydbReplicaset#ram}
  */
  readonly ram: number;
}

export function inmemorydbReplicasetResourcesToTerraform(struct?: InmemorydbReplicasetResourcesOutputReference | InmemorydbReplicasetResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cores: cdktf.numberToTerraform(struct!.cores),
    ram: cdktf.numberToTerraform(struct!.ram),
  }
}


export function inmemorydbReplicasetResourcesToHclTerraform(struct?: InmemorydbReplicasetResourcesOutputReference | InmemorydbReplicasetResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
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

export class InmemorydbReplicasetResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InmemorydbReplicasetResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._ram !== undefined) {
      hasAnyValues = true;
      internalValueResult.ram = this._ram;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InmemorydbReplicasetResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cores = undefined;
      this._ram = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cores = value.cores;
      this._ram = value.ram;
    }
  }

  // cores - computed: false, optional: false, required: true
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
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

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }
}
export interface InmemorydbReplicasetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#create InmemorydbReplicaset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#default InmemorydbReplicaset#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#delete InmemorydbReplicaset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#update InmemorydbReplicaset#update}
  */
  readonly update?: string;
}

export function inmemorydbReplicasetTimeoutsToTerraform(struct?: InmemorydbReplicasetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function inmemorydbReplicasetTimeoutsToHclTerraform(struct?: InmemorydbReplicasetTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class InmemorydbReplicasetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InmemorydbReplicasetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: InmemorydbReplicasetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset ionoscloud_inmemorydb_replicaset}
*/
export class InmemorydbReplicaset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_inmemorydb_replicaset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InmemorydbReplicaset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InmemorydbReplicaset to import
  * @param importFromId The id of the existing InmemorydbReplicaset that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InmemorydbReplicaset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_inmemorydb_replicaset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/inmemorydb_replicaset ionoscloud_inmemorydb_replicaset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InmemorydbReplicasetConfig
  */
  public constructor(scope: Construct, id: string, config: InmemorydbReplicasetConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_inmemorydb_replicaset',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._evictionPolicy = config.evictionPolicy;
    this._id = config.id;
    this._initialSnapshotId = config.initialSnapshotId;
    this._location = config.location;
    this._persistenceMode = config.persistenceMode;
    this._replicas = config.replicas;
    this._version = config.version;
    this._connections.internalValue = config.connections;
    this._credentials.internalValue = config.credentials;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._resources.internalValue = config.resources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // eviction_policy - computed: false, optional: false, required: true
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
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

  // initial_snapshot_id - computed: false, optional: true, required: false
  private _initialSnapshotId?: string; 
  public get initialSnapshotId() {
    return this.getStringAttribute('initial_snapshot_id');
  }
  public set initialSnapshotId(value: string) {
    this._initialSnapshotId = value;
  }
  public resetInitialSnapshotId() {
    this._initialSnapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSnapshotIdInput() {
    return this._initialSnapshotId;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // persistence_mode - computed: false, optional: false, required: true
  private _persistenceMode?: string; 
  public get persistenceMode() {
    return this.getStringAttribute('persistence_mode');
  }
  public set persistenceMode(value: string) {
    this._persistenceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceModeInput() {
    return this._persistenceMode;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
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

  // connections - computed: false, optional: false, required: true
  private _connections = new InmemorydbReplicasetConnectionsOutputReference(this, "connections");
  public get connections() {
    return this._connections;
  }
  public putConnections(value: InmemorydbReplicasetConnections) {
    this._connections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new InmemorydbReplicasetCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: InmemorydbReplicasetCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new InmemorydbReplicasetMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: InmemorydbReplicasetMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new InmemorydbReplicasetResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: InmemorydbReplicasetResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InmemorydbReplicasetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InmemorydbReplicasetTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      id: cdktf.stringToTerraform(this._id),
      initial_snapshot_id: cdktf.stringToTerraform(this._initialSnapshotId),
      location: cdktf.stringToTerraform(this._location),
      persistence_mode: cdktf.stringToTerraform(this._persistenceMode),
      replicas: cdktf.numberToTerraform(this._replicas),
      version: cdktf.stringToTerraform(this._version),
      connections: inmemorydbReplicasetConnectionsToTerraform(this._connections.internalValue),
      credentials: inmemorydbReplicasetCredentialsToTerraform(this._credentials.internalValue),
      maintenance_window: inmemorydbReplicasetMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      resources: inmemorydbReplicasetResourcesToTerraform(this._resources.internalValue),
      timeouts: inmemorydbReplicasetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eviction_policy: {
        value: cdktf.stringToHclTerraform(this._evictionPolicy),
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
      initial_snapshot_id: {
        value: cdktf.stringToHclTerraform(this._initialSnapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_mode: {
        value: cdktf.stringToHclTerraform(this._persistenceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connections: {
        value: inmemorydbReplicasetConnectionsToHclTerraform(this._connections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InmemorydbReplicasetConnectionsList",
      },
      credentials: {
        value: inmemorydbReplicasetCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InmemorydbReplicasetCredentialsList",
      },
      maintenance_window: {
        value: inmemorydbReplicasetMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InmemorydbReplicasetMaintenanceWindowList",
      },
      resources: {
        value: inmemorydbReplicasetResourcesToHclTerraform(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InmemorydbReplicasetResourcesList",
      },
      timeouts: {
        value: inmemorydbReplicasetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InmemorydbReplicasetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
