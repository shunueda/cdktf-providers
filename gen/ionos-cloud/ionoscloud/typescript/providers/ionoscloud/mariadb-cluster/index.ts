// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MariadbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of CPU cores per instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#cores MariadbCluster#cores}
  */
  readonly cores: number;
  /**
  * The friendly name of your cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#display_name MariadbCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#id MariadbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The total number of instances in the cluster (one primary and n-1 secondary).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#instances MariadbCluster#instances}
  */
  readonly instances: number;
  /**
  * The cluster location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#location MariadbCluster#location}
  */
  readonly location?: string;
  /**
  * The MariaDB version of your cluster. Cannot be downgraded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#mariadb_version MariadbCluster#mariadb_version}
  */
  readonly mariadbVersion: string;
  /**
  * The amount of memory per instance in gigabytes (GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#ram MariadbCluster#ram}
  */
  readonly ram: number;
  /**
  * The amount of storage per instance in gigabytes (GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#storage_size MariadbCluster#storage_size}
  */
  readonly storageSize: number;
  /**
  * backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#backup MariadbCluster#backup}
  */
  readonly backup?: MariadbClusterBackup;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#connections MariadbCluster#connections}
  */
  readonly connections: MariadbClusterConnections;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#credentials MariadbCluster#credentials}
  */
  readonly credentials: MariadbClusterCredentials;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#maintenance_window MariadbCluster#maintenance_window}
  */
  readonly maintenanceWindow?: MariadbClusterMaintenanceWindow;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#timeouts MariadbCluster#timeouts}
  */
  readonly timeouts?: MariadbClusterTimeouts;
}
export interface MariadbClusterBackup {
  /**
  * The IONOS Object Storage location where the backups will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#location MariadbCluster#location}
  */
  readonly location: string;
}

export function mariadbClusterBackupToTerraform(struct?: MariadbClusterBackupOutputReference | MariadbClusterBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function mariadbClusterBackupToHclTerraform(struct?: MariadbClusterBackupOutputReference | MariadbClusterBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MariadbClusterBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MariadbClusterBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariadbClusterBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}
export interface MariadbClusterConnections {
  /**
  * The IP and subnet for your cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#cidr MariadbCluster#cidr}
  */
  readonly cidr: string;
  /**
  * The datacenter to connect your cluster to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#datacenter_id MariadbCluster#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * The numeric LAN ID to connect your cluster to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#lan_id MariadbCluster#lan_id}
  */
  readonly lanId: string;
}

export function mariadbClusterConnectionsToTerraform(struct?: MariadbClusterConnectionsOutputReference | MariadbClusterConnections): any {
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


export function mariadbClusterConnectionsToHclTerraform(struct?: MariadbClusterConnectionsOutputReference | MariadbClusterConnections): any {
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

export class MariadbClusterConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MariadbClusterConnections | undefined {
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

  public set internalValue(value: MariadbClusterConnections | undefined) {
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
export interface MariadbClusterCredentials {
  /**
  * The password for a MariaDB user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#password MariadbCluster#password}
  */
  readonly password: string;
  /**
  * The username for the initial MariaDB user. Some system usernames are restricted (e.g 'mariadb', 'admin', 'standby').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#username MariadbCluster#username}
  */
  readonly username: string;
}

export function mariadbClusterCredentialsToTerraform(struct?: MariadbClusterCredentialsOutputReference | MariadbClusterCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function mariadbClusterCredentialsToHclTerraform(struct?: MariadbClusterCredentialsOutputReference | MariadbClusterCredentials): any {
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

export class MariadbClusterCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MariadbClusterCredentials | undefined {
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

  public set internalValue(value: MariadbClusterCredentials | undefined) {
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
export interface MariadbClusterMaintenanceWindow {
  /**
  * The name of the week day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#day_of_the_week MariadbCluster#day_of_the_week}
  */
  readonly dayOfTheWeek: string;
  /**
  * Start of the maintenance window in UTC time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#time MariadbCluster#time}
  */
  readonly time: string;
}

export function mariadbClusterMaintenanceWindowToTerraform(struct?: MariadbClusterMaintenanceWindowOutputReference | MariadbClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_the_week: cdktf.stringToTerraform(struct!.dayOfTheWeek),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function mariadbClusterMaintenanceWindowToHclTerraform(struct?: MariadbClusterMaintenanceWindowOutputReference | MariadbClusterMaintenanceWindow): any {
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

export class MariadbClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MariadbClusterMaintenanceWindow | undefined {
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

  public set internalValue(value: MariadbClusterMaintenanceWindow | undefined) {
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
export interface MariadbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#create MariadbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#default MariadbCluster#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#delete MariadbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#update MariadbCluster#update}
  */
  readonly update?: string;
}

export function mariadbClusterTimeoutsToTerraform(struct?: MariadbClusterTimeouts | cdktf.IResolvable): any {
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


export function mariadbClusterTimeoutsToHclTerraform(struct?: MariadbClusterTimeouts | cdktf.IResolvable): any {
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

export class MariadbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MariadbClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MariadbClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster ionoscloud_mariadb_cluster}
*/
export class MariadbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_mariadb_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MariadbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MariadbCluster to import
  * @param importFromId The id of the existing MariadbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MariadbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_mariadb_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/mariadb_cluster ionoscloud_mariadb_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MariadbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MariadbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_mariadb_cluster',
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
    this._cores = config.cores;
    this._displayName = config.displayName;
    this._id = config.id;
    this._instances = config.instances;
    this._location = config.location;
    this._mariadbVersion = config.mariadbVersion;
    this._ram = config.ram;
    this._storageSize = config.storageSize;
    this._backup.internalValue = config.backup;
    this._connections.internalValue = config.connections;
    this._credentials.internalValue = config.credentials;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instances - computed: false, optional: false, required: true
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
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

  // mariadb_version - computed: false, optional: false, required: true
  private _mariadbVersion?: string; 
  public get mariadbVersion() {
    return this.getStringAttribute('mariadb_version');
  }
  public set mariadbVersion(value: string) {
    this._mariadbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbVersionInput() {
    return this._mariadbVersion;
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

  // storage_size - computed: false, optional: false, required: true
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new MariadbClusterBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: MariadbClusterBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // connections - computed: false, optional: false, required: true
  private _connections = new MariadbClusterConnectionsOutputReference(this, "connections");
  public get connections() {
    return this._connections;
  }
  public putConnections(value: MariadbClusterConnections) {
    this._connections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new MariadbClusterCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: MariadbClusterCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new MariadbClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MariadbClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MariadbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MariadbClusterTimeouts) {
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
      cores: cdktf.numberToTerraform(this._cores),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      instances: cdktf.numberToTerraform(this._instances),
      location: cdktf.stringToTerraform(this._location),
      mariadb_version: cdktf.stringToTerraform(this._mariadbVersion),
      ram: cdktf.numberToTerraform(this._ram),
      storage_size: cdktf.numberToTerraform(this._storageSize),
      backup: mariadbClusterBackupToTerraform(this._backup.internalValue),
      connections: mariadbClusterConnectionsToTerraform(this._connections.internalValue),
      credentials: mariadbClusterCredentialsToTerraform(this._credentials.internalValue),
      maintenance_window: mariadbClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      timeouts: mariadbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cores: {
        value: cdktf.numberToHclTerraform(this._cores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      instances: {
        value: cdktf.numberToHclTerraform(this._instances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mariadb_version: {
        value: cdktf.stringToHclTerraform(this._mariadbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram: {
        value: cdktf.numberToHclTerraform(this._ram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_size: {
        value: cdktf.numberToHclTerraform(this._storageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup: {
        value: mariadbClusterBackupToHclTerraform(this._backup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbClusterBackupList",
      },
      connections: {
        value: mariadbClusterConnectionsToHclTerraform(this._connections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbClusterConnectionsList",
      },
      credentials: {
        value: mariadbClusterCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbClusterCredentialsList",
      },
      maintenance_window: {
        value: mariadbClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbClusterMaintenanceWindowList",
      },
      timeouts: {
        value: mariadbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MariadbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
