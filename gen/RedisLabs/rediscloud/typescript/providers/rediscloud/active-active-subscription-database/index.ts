// https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveActiveSubscriptionDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * SSL certificate to authenticate user connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#client_ssl_certificate ActiveActiveSubscriptionDatabase#client_ssl_certificate}
  */
  readonly clientSslCertificate?: string;
  /**
  * TLS certificates to authenticate user connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#client_tls_certificates ActiveActiveSubscriptionDatabase#client_tls_certificates}
  */
  readonly clientTlsCertificates?: string[];
  /**
  * Data eviction items policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#data_eviction ActiveActiveSubscriptionDatabase#data_eviction}
  */
  readonly dataEviction?: string;
  /**
  * Maximum amount of data in the dataset for this specific database in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#dataset_size_in_gb ActiveActiveSubscriptionDatabase#dataset_size_in_gb}
  */
  readonly datasetSizeInGb?: number;
  /**
  * Use TLS for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#enable_tls ActiveActiveSubscriptionDatabase#enable_tls}
  */
  readonly enableTls?: boolean | cdktf.IResolvable;
  /**
  * Should use the external endpoint for open-source (OSS) Cluster API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#external_endpoint_for_oss_cluster_api ActiveActiveSubscriptionDatabase#external_endpoint_for_oss_cluster_api}
  */
  readonly externalEndpointForOssClusterApi?: boolean | cdktf.IResolvable;
  /**
  * Rate of database data persistence (in persistent storage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#global_data_persistence ActiveActiveSubscriptionDatabase#global_data_persistence}
  */
  readonly globalDataPersistence?: string;
  /**
  * When 'true', enables connecting to the database with the 'default' user across all regions. Default: 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#global_enable_default_user ActiveActiveSubscriptionDatabase#global_enable_default_user}
  */
  readonly globalEnableDefaultUser?: boolean | cdktf.IResolvable;
  /**
  * List of modules to enable on the database. This information is only used when creating a new database and any changes will be ignored after this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#global_modules ActiveActiveSubscriptionDatabase#global_modules}
  */
  readonly globalModules?: string[];
  /**
  * Password used to access the database. If left empty, the password will be generated automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#global_password ActiveActiveSubscriptionDatabase#global_password}
  */
  readonly globalPassword?: string;
  /**
  * The initial RESP version for all databases provisioned under this AA database. This information is only used when creating a new database and any changes will be ignored after this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#global_resp_version ActiveActiveSubscriptionDatabase#global_resp_version}
  */
  readonly globalRespVersion?: string;
  /**
  * Set of CIDR addresses to allow access to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#global_source_ips ActiveActiveSubscriptionDatabase#global_source_ips}
  */
  readonly globalSourceIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#id ActiveActiveSubscriptionDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Deprecated) Maximum memory usage for this specific database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#memory_limit_in_gb ActiveActiveSubscriptionDatabase#memory_limit_in_gb}
  */
  readonly memoryLimitInGb?: number;
  /**
  * A meaningful name to identify the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#name ActiveActiveSubscriptionDatabase#name}
  */
  readonly name: string;
  /**
  * TCP port on which the database is available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#port ActiveActiveSubscriptionDatabase#port}
  */
  readonly port?: number;
  /**
  * Defines the Redis database version. If omitted, the Redis version will be set to the default version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#redis_version ActiveActiveSubscriptionDatabase#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * Identifier of the subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#subscription_id ActiveActiveSubscriptionDatabase#subscription_id}
  */
  readonly subscriptionId: number;
  /**
  * Support Redis open-source (OSS) Cluster API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#support_oss_cluster_api ActiveActiveSubscriptionDatabase#support_oss_cluster_api}
  */
  readonly supportOssClusterApi?: boolean | cdktf.IResolvable;
  /**
  * Tags for database management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#tags ActiveActiveSubscriptionDatabase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * global_alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#global_alert ActiveActiveSubscriptionDatabase#global_alert}
  */
  readonly globalAlert?: ActiveActiveSubscriptionDatabaseGlobalAlert[] | cdktf.IResolvable;
  /**
  * override_region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#override_region ActiveActiveSubscriptionDatabase#override_region}
  */
  readonly overrideRegion?: ActiveActiveSubscriptionDatabaseOverrideRegion[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#timeouts ActiveActiveSubscriptionDatabase#timeouts}
  */
  readonly timeouts?: ActiveActiveSubscriptionDatabaseTimeouts;
}
export interface ActiveActiveSubscriptionDatabaseGlobalAlert {
  /**
  * Alert name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#name ActiveActiveSubscriptionDatabase#name}
  */
  readonly name: string;
  /**
  * Alert value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#value ActiveActiveSubscriptionDatabase#value}
  */
  readonly value: number;
}

export function activeActiveSubscriptionDatabaseGlobalAlertToTerraform(struct?: ActiveActiveSubscriptionDatabaseGlobalAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function activeActiveSubscriptionDatabaseGlobalAlertToHclTerraform(struct?: ActiveActiveSubscriptionDatabaseGlobalAlert | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveActiveSubscriptionDatabaseGlobalAlertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveActiveSubscriptionDatabaseGlobalAlert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ActiveActiveSubscriptionDatabaseGlobalAlert | cdktf.IResolvable | undefined) {
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
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ActiveActiveSubscriptionDatabaseGlobalAlertList extends cdktf.ComplexList {
  public internalValue? : ActiveActiveSubscriptionDatabaseGlobalAlert[] | cdktf.IResolvable

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
  public get(index: number): ActiveActiveSubscriptionDatabaseGlobalAlertOutputReference {
    return new ActiveActiveSubscriptionDatabaseGlobalAlertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlert {
  /**
  * Alert name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#name ActiveActiveSubscriptionDatabase#name}
  */
  readonly name: string;
  /**
  * Alert value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#value ActiveActiveSubscriptionDatabase#value}
  */
  readonly value: number;
}

export function activeActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlertToTerraform(struct?: ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function activeActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlertToHclTerraform(struct?: ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlert | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlert | cdktf.IResolvable | undefined) {
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
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlertList extends cdktf.ComplexList {
  public internalValue? : ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlert[] | cdktf.IResolvable

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
  public get(index: number): ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlertOutputReference {
    return new ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackup {
  /**
  * Defines the frequency of the automatic backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#interval ActiveActiveSubscriptionDatabase#interval}
  */
  readonly interval: string;
  /**
  * Defines a URI representing the backup storage location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#storage_path ActiveActiveSubscriptionDatabase#storage_path}
  */
  readonly storagePath: string;
  /**
  * Defines the provider of the storage location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#storage_type ActiveActiveSubscriptionDatabase#storage_type}
  */
  readonly storageType: string;
  /**
  * Defines the hour automatic backups are made - only applicable when interval is `every-12-hours` or `every-24-hours`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#time_utc ActiveActiveSubscriptionDatabase#time_utc}
  */
  readonly timeUtc?: string;
}

export function activeActiveSubscriptionDatabaseOverrideRegionRemoteBackupToTerraform(struct?: ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackupOutputReference | ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    storage_path: cdktf.stringToTerraform(struct!.storagePath),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    time_utc: cdktf.stringToTerraform(struct!.timeUtc),
  }
}


export function activeActiveSubscriptionDatabaseOverrideRegionRemoteBackupToHclTerraform(struct?: ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackupOutputReference | ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_path: {
      value: cdktf.stringToHclTerraform(struct!.storagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_utc: {
      value: cdktf.stringToHclTerraform(struct!.timeUtc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._storagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePath = this._storagePath;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._timeUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUtc = this._timeUtc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._storagePath = undefined;
      this._storageType = undefined;
      this._timeUtc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._storagePath = value.storagePath;
      this._storageType = value.storageType;
      this._timeUtc = value.timeUtc;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // storage_path - computed: false, optional: false, required: true
  private _storagePath?: string; 
  public get storagePath() {
    return this.getStringAttribute('storage_path');
  }
  public set storagePath(value: string) {
    this._storagePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePathInput() {
    return this._storagePath;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // time_utc - computed: false, optional: true, required: false
  private _timeUtc?: string; 
  public get timeUtc() {
    return this.getStringAttribute('time_utc');
  }
  public set timeUtc(value: string) {
    this._timeUtc = value;
  }
  public resetTimeUtc() {
    this._timeUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUtcInput() {
    return this._timeUtc;
  }
}
export interface ActiveActiveSubscriptionDatabaseOverrideRegion {
  /**
  * When 'true', enables connecting to the database with the 'default' user. Default: 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#enable_default_user ActiveActiveSubscriptionDatabase#enable_default_user}
  */
  readonly enableDefaultUser?: boolean | cdktf.IResolvable;
  /**
  * Region name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#name ActiveActiveSubscriptionDatabase#name}
  */
  readonly name: string;
  /**
  * Rate of database data persistence (in persistent storage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#override_global_data_persistence ActiveActiveSubscriptionDatabase#override_global_data_persistence}
  */
  readonly overrideGlobalDataPersistence?: string;
  /**
  * Password used to access the database. If left empty, the password will be generated automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#override_global_password ActiveActiveSubscriptionDatabase#override_global_password}
  */
  readonly overrideGlobalPassword?: string;
  /**
  * Set of CIDR addresses to allow access to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#override_global_source_ips ActiveActiveSubscriptionDatabase#override_global_source_ips}
  */
  readonly overrideGlobalSourceIps?: string[];
  /**
  * override_global_alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#override_global_alert ActiveActiveSubscriptionDatabase#override_global_alert}
  */
  readonly overrideGlobalAlert?: ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlert[] | cdktf.IResolvable;
  /**
  * remote_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#remote_backup ActiveActiveSubscriptionDatabase#remote_backup}
  */
  readonly remoteBackup?: ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackup;
}

export function activeActiveSubscriptionDatabaseOverrideRegionToTerraform(struct?: ActiveActiveSubscriptionDatabaseOverrideRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_default_user: cdktf.booleanToTerraform(struct!.enableDefaultUser),
    name: cdktf.stringToTerraform(struct!.name),
    override_global_data_persistence: cdktf.stringToTerraform(struct!.overrideGlobalDataPersistence),
    override_global_password: cdktf.stringToTerraform(struct!.overrideGlobalPassword),
    override_global_source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overrideGlobalSourceIps),
    override_global_alert: cdktf.listMapper(activeActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlertToTerraform, true)(struct!.overrideGlobalAlert),
    remote_backup: activeActiveSubscriptionDatabaseOverrideRegionRemoteBackupToTerraform(struct!.remoteBackup),
  }
}


export function activeActiveSubscriptionDatabaseOverrideRegionToHclTerraform(struct?: ActiveActiveSubscriptionDatabaseOverrideRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_default_user: {
      value: cdktf.booleanToHclTerraform(struct!.enableDefaultUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_global_data_persistence: {
      value: cdktf.stringToHclTerraform(struct!.overrideGlobalDataPersistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_global_password: {
      value: cdktf.stringToHclTerraform(struct!.overrideGlobalPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_global_source_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.overrideGlobalSourceIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    override_global_alert: {
      value: cdktf.listMapperHcl(activeActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlertToHclTerraform, true)(struct!.overrideGlobalAlert),
      isBlock: true,
      type: "set",
      storageClassType: "ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlertList",
    },
    remote_backup: {
      value: activeActiveSubscriptionDatabaseOverrideRegionRemoteBackupToHclTerraform(struct!.remoteBackup),
      isBlock: true,
      type: "list",
      storageClassType: "ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveActiveSubscriptionDatabaseOverrideRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveActiveSubscriptionDatabaseOverrideRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDefaultUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDefaultUser = this._enableDefaultUser;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideGlobalDataPersistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideGlobalDataPersistence = this._overrideGlobalDataPersistence;
    }
    if (this._overrideGlobalPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideGlobalPassword = this._overrideGlobalPassword;
    }
    if (this._overrideGlobalSourceIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideGlobalSourceIps = this._overrideGlobalSourceIps;
    }
    if (this._overrideGlobalAlert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideGlobalAlert = this._overrideGlobalAlert?.internalValue;
    }
    if (this._remoteBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteBackup = this._remoteBackup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveActiveSubscriptionDatabaseOverrideRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableDefaultUser = undefined;
      this._name = undefined;
      this._overrideGlobalDataPersistence = undefined;
      this._overrideGlobalPassword = undefined;
      this._overrideGlobalSourceIps = undefined;
      this._overrideGlobalAlert.internalValue = undefined;
      this._remoteBackup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableDefaultUser = value.enableDefaultUser;
      this._name = value.name;
      this._overrideGlobalDataPersistence = value.overrideGlobalDataPersistence;
      this._overrideGlobalPassword = value.overrideGlobalPassword;
      this._overrideGlobalSourceIps = value.overrideGlobalSourceIps;
      this._overrideGlobalAlert.internalValue = value.overrideGlobalAlert;
      this._remoteBackup.internalValue = value.remoteBackup;
    }
  }

  // enable_default_user - computed: false, optional: true, required: false
  private _enableDefaultUser?: boolean | cdktf.IResolvable; 
  public get enableDefaultUser() {
    return this.getBooleanAttribute('enable_default_user');
  }
  public set enableDefaultUser(value: boolean | cdktf.IResolvable) {
    this._enableDefaultUser = value;
  }
  public resetEnableDefaultUser() {
    this._enableDefaultUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultUserInput() {
    return this._enableDefaultUser;
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

  // override_global_data_persistence - computed: false, optional: true, required: false
  private _overrideGlobalDataPersistence?: string; 
  public get overrideGlobalDataPersistence() {
    return this.getStringAttribute('override_global_data_persistence');
  }
  public set overrideGlobalDataPersistence(value: string) {
    this._overrideGlobalDataPersistence = value;
  }
  public resetOverrideGlobalDataPersistence() {
    this._overrideGlobalDataPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideGlobalDataPersistenceInput() {
    return this._overrideGlobalDataPersistence;
  }

  // override_global_password - computed: false, optional: true, required: false
  private _overrideGlobalPassword?: string; 
  public get overrideGlobalPassword() {
    return this.getStringAttribute('override_global_password');
  }
  public set overrideGlobalPassword(value: string) {
    this._overrideGlobalPassword = value;
  }
  public resetOverrideGlobalPassword() {
    this._overrideGlobalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideGlobalPasswordInput() {
    return this._overrideGlobalPassword;
  }

  // override_global_source_ips - computed: false, optional: true, required: false
  private _overrideGlobalSourceIps?: string[]; 
  public get overrideGlobalSourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('override_global_source_ips'));
  }
  public set overrideGlobalSourceIps(value: string[]) {
    this._overrideGlobalSourceIps = value;
  }
  public resetOverrideGlobalSourceIps() {
    this._overrideGlobalSourceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideGlobalSourceIpsInput() {
    return this._overrideGlobalSourceIps;
  }

  // override_global_alert - computed: false, optional: true, required: false
  private _overrideGlobalAlert = new ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlertList(this, "override_global_alert", true);
  public get overrideGlobalAlert() {
    return this._overrideGlobalAlert;
  }
  public putOverrideGlobalAlert(value: ActiveActiveSubscriptionDatabaseOverrideRegionOverrideGlobalAlert[] | cdktf.IResolvable) {
    this._overrideGlobalAlert.internalValue = value;
  }
  public resetOverrideGlobalAlert() {
    this._overrideGlobalAlert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideGlobalAlertInput() {
    return this._overrideGlobalAlert.internalValue;
  }

  // remote_backup - computed: false, optional: true, required: false
  private _remoteBackup = new ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackupOutputReference(this, "remote_backup");
  public get remoteBackup() {
    return this._remoteBackup;
  }
  public putRemoteBackup(value: ActiveActiveSubscriptionDatabaseOverrideRegionRemoteBackup) {
    this._remoteBackup.internalValue = value;
  }
  public resetRemoteBackup() {
    this._remoteBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBackupInput() {
    return this._remoteBackup.internalValue;
  }
}

export class ActiveActiveSubscriptionDatabaseOverrideRegionList extends cdktf.ComplexList {
  public internalValue? : ActiveActiveSubscriptionDatabaseOverrideRegion[] | cdktf.IResolvable

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
  public get(index: number): ActiveActiveSubscriptionDatabaseOverrideRegionOutputReference {
    return new ActiveActiveSubscriptionDatabaseOverrideRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveActiveSubscriptionDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#create ActiveActiveSubscriptionDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#delete ActiveActiveSubscriptionDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#read ActiveActiveSubscriptionDatabase#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#update ActiveActiveSubscriptionDatabase#update}
  */
  readonly update?: string;
}

export function activeActiveSubscriptionDatabaseTimeoutsToTerraform(struct?: ActiveActiveSubscriptionDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function activeActiveSubscriptionDatabaseTimeoutsToHclTerraform(struct?: ActiveActiveSubscriptionDatabaseTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class ActiveActiveSubscriptionDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActiveActiveSubscriptionDatabaseTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveActiveSubscriptionDatabaseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database rediscloud_active_active_subscription_database}
*/
export class ActiveActiveSubscriptionDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_active_active_subscription_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActiveActiveSubscriptionDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActiveActiveSubscriptionDatabase to import
  * @param importFromId The id of the existing ActiveActiveSubscriptionDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActiveActiveSubscriptionDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_active_active_subscription_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_database rediscloud_active_active_subscription_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveActiveSubscriptionDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveActiveSubscriptionDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_active_active_subscription_database',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.8.0',
        providerVersionConstraint: '2.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientSslCertificate = config.clientSslCertificate;
    this._clientTlsCertificates = config.clientTlsCertificates;
    this._dataEviction = config.dataEviction;
    this._datasetSizeInGb = config.datasetSizeInGb;
    this._enableTls = config.enableTls;
    this._externalEndpointForOssClusterApi = config.externalEndpointForOssClusterApi;
    this._globalDataPersistence = config.globalDataPersistence;
    this._globalEnableDefaultUser = config.globalEnableDefaultUser;
    this._globalModules = config.globalModules;
    this._globalPassword = config.globalPassword;
    this._globalRespVersion = config.globalRespVersion;
    this._globalSourceIps = config.globalSourceIps;
    this._id = config.id;
    this._memoryLimitInGb = config.memoryLimitInGb;
    this._name = config.name;
    this._port = config.port;
    this._redisVersion = config.redisVersion;
    this._subscriptionId = config.subscriptionId;
    this._supportOssClusterApi = config.supportOssClusterApi;
    this._tags = config.tags;
    this._globalAlert.internalValue = config.globalAlert;
    this._overrideRegion.internalValue = config.overrideRegion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_ssl_certificate - computed: false, optional: true, required: false
  private _clientSslCertificate?: string; 
  public get clientSslCertificate() {
    return this.getStringAttribute('client_ssl_certificate');
  }
  public set clientSslCertificate(value: string) {
    this._clientSslCertificate = value;
  }
  public resetClientSslCertificate() {
    this._clientSslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslCertificateInput() {
    return this._clientSslCertificate;
  }

  // client_tls_certificates - computed: false, optional: true, required: false
  private _clientTlsCertificates?: string[]; 
  public get clientTlsCertificates() {
    return this.getListAttribute('client_tls_certificates');
  }
  public set clientTlsCertificates(value: string[]) {
    this._clientTlsCertificates = value;
  }
  public resetClientTlsCertificates() {
    this._clientTlsCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsCertificatesInput() {
    return this._clientTlsCertificates;
  }

  // data_eviction - computed: false, optional: true, required: false
  private _dataEviction?: string; 
  public get dataEviction() {
    return this.getStringAttribute('data_eviction');
  }
  public set dataEviction(value: string) {
    this._dataEviction = value;
  }
  public resetDataEviction() {
    this._dataEviction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEvictionInput() {
    return this._dataEviction;
  }

  // dataset_size_in_gb - computed: true, optional: true, required: false
  private _datasetSizeInGb?: number; 
  public get datasetSizeInGb() {
    return this.getNumberAttribute('dataset_size_in_gb');
  }
  public set datasetSizeInGb(value: number) {
    this._datasetSizeInGb = value;
  }
  public resetDatasetSizeInGb() {
    this._datasetSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetSizeInGbInput() {
    return this._datasetSizeInGb;
  }

  // db_id - computed: true, optional: false, required: false
  public get dbId() {
    return this.getNumberAttribute('db_id');
  }

  // enable_tls - computed: false, optional: true, required: false
  private _enableTls?: boolean | cdktf.IResolvable; 
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }
  public set enableTls(value: boolean | cdktf.IResolvable) {
    this._enableTls = value;
  }
  public resetEnableTls() {
    this._enableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsInput() {
    return this._enableTls;
  }

  // external_endpoint_for_oss_cluster_api - computed: false, optional: true, required: false
  private _externalEndpointForOssClusterApi?: boolean | cdktf.IResolvable; 
  public get externalEndpointForOssClusterApi() {
    return this.getBooleanAttribute('external_endpoint_for_oss_cluster_api');
  }
  public set externalEndpointForOssClusterApi(value: boolean | cdktf.IResolvable) {
    this._externalEndpointForOssClusterApi = value;
  }
  public resetExternalEndpointForOssClusterApi() {
    this._externalEndpointForOssClusterApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEndpointForOssClusterApiInput() {
    return this._externalEndpointForOssClusterApi;
  }

  // global_data_persistence - computed: false, optional: true, required: false
  private _globalDataPersistence?: string; 
  public get globalDataPersistence() {
    return this.getStringAttribute('global_data_persistence');
  }
  public set globalDataPersistence(value: string) {
    this._globalDataPersistence = value;
  }
  public resetGlobalDataPersistence() {
    this._globalDataPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalDataPersistenceInput() {
    return this._globalDataPersistence;
  }

  // global_enable_default_user - computed: false, optional: true, required: false
  private _globalEnableDefaultUser?: boolean | cdktf.IResolvable; 
  public get globalEnableDefaultUser() {
    return this.getBooleanAttribute('global_enable_default_user');
  }
  public set globalEnableDefaultUser(value: boolean | cdktf.IResolvable) {
    this._globalEnableDefaultUser = value;
  }
  public resetGlobalEnableDefaultUser() {
    this._globalEnableDefaultUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalEnableDefaultUserInput() {
    return this._globalEnableDefaultUser;
  }

  // global_modules - computed: false, optional: true, required: false
  private _globalModules?: string[]; 
  public get globalModules() {
    return this.getListAttribute('global_modules');
  }
  public set globalModules(value: string[]) {
    this._globalModules = value;
  }
  public resetGlobalModules() {
    this._globalModules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalModulesInput() {
    return this._globalModules;
  }

  // global_password - computed: true, optional: true, required: false
  private _globalPassword?: string; 
  public get globalPassword() {
    return this.getStringAttribute('global_password');
  }
  public set globalPassword(value: string) {
    this._globalPassword = value;
  }
  public resetGlobalPassword() {
    this._globalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPasswordInput() {
    return this._globalPassword;
  }

  // global_resp_version - computed: false, optional: true, required: false
  private _globalRespVersion?: string; 
  public get globalRespVersion() {
    return this.getStringAttribute('global_resp_version');
  }
  public set globalRespVersion(value: string) {
    this._globalRespVersion = value;
  }
  public resetGlobalRespVersion() {
    this._globalRespVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalRespVersionInput() {
    return this._globalRespVersion;
  }

  // global_source_ips - computed: false, optional: true, required: false
  private _globalSourceIps?: string[]; 
  public get globalSourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('global_source_ips'));
  }
  public set globalSourceIps(value: string[]) {
    this._globalSourceIps = value;
  }
  public resetGlobalSourceIps() {
    this._globalSourceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSourceIpsInput() {
    return this._globalSourceIps;
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

  // memory_limit_in_gb - computed: true, optional: true, required: false
  private _memoryLimitInGb?: number; 
  public get memoryLimitInGb() {
    return this.getNumberAttribute('memory_limit_in_gb');
  }
  public set memoryLimitInGb(value: number) {
    this._memoryLimitInGb = value;
  }
  public resetMemoryLimitInGb() {
    this._memoryLimitInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInGbInput() {
    return this._memoryLimitInGb;
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

  // port - computed: false, optional: true, required: false
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

  // private_endpoint - computed: true, optional: false, required: false
  private _privateEndpoint = new cdktf.StringMap(this, "private_endpoint");
  public get privateEndpoint() {
    return this._privateEndpoint;
  }

  // public_endpoint - computed: true, optional: false, required: false
  private _publicEndpoint = new cdktf.StringMap(this, "public_endpoint");
  public get publicEndpoint() {
    return this._publicEndpoint;
  }

  // redis_version - computed: true, optional: true, required: false
  private _redisVersion?: string; 
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }
  public set redisVersion(value: string) {
    this._redisVersion = value;
  }
  public resetRedisVersion() {
    this._redisVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisVersionInput() {
    return this._redisVersion;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: number; 
  public get subscriptionId() {
    return this.getNumberAttribute('subscription_id');
  }
  public set subscriptionId(value: number) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // support_oss_cluster_api - computed: false, optional: true, required: false
  private _supportOssClusterApi?: boolean | cdktf.IResolvable; 
  public get supportOssClusterApi() {
    return this.getBooleanAttribute('support_oss_cluster_api');
  }
  public set supportOssClusterApi(value: boolean | cdktf.IResolvable) {
    this._supportOssClusterApi = value;
  }
  public resetSupportOssClusterApi() {
    this._supportOssClusterApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportOssClusterApiInput() {
    return this._supportOssClusterApi;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // global_alert - computed: false, optional: true, required: false
  private _globalAlert = new ActiveActiveSubscriptionDatabaseGlobalAlertList(this, "global_alert", true);
  public get globalAlert() {
    return this._globalAlert;
  }
  public putGlobalAlert(value: ActiveActiveSubscriptionDatabaseGlobalAlert[] | cdktf.IResolvable) {
    this._globalAlert.internalValue = value;
  }
  public resetGlobalAlert() {
    this._globalAlert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAlertInput() {
    return this._globalAlert.internalValue;
  }

  // override_region - computed: false, optional: true, required: false
  private _overrideRegion = new ActiveActiveSubscriptionDatabaseOverrideRegionList(this, "override_region", true);
  public get overrideRegion() {
    return this._overrideRegion;
  }
  public putOverrideRegion(value: ActiveActiveSubscriptionDatabaseOverrideRegion[] | cdktf.IResolvable) {
    this._overrideRegion.internalValue = value;
  }
  public resetOverrideRegion() {
    this._overrideRegion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideRegionInput() {
    return this._overrideRegion.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ActiveActiveSubscriptionDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ActiveActiveSubscriptionDatabaseTimeouts) {
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
      client_ssl_certificate: cdktf.stringToTerraform(this._clientSslCertificate),
      client_tls_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientTlsCertificates),
      data_eviction: cdktf.stringToTerraform(this._dataEviction),
      dataset_size_in_gb: cdktf.numberToTerraform(this._datasetSizeInGb),
      enable_tls: cdktf.booleanToTerraform(this._enableTls),
      external_endpoint_for_oss_cluster_api: cdktf.booleanToTerraform(this._externalEndpointForOssClusterApi),
      global_data_persistence: cdktf.stringToTerraform(this._globalDataPersistence),
      global_enable_default_user: cdktf.booleanToTerraform(this._globalEnableDefaultUser),
      global_modules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalModules),
      global_password: cdktf.stringToTerraform(this._globalPassword),
      global_resp_version: cdktf.stringToTerraform(this._globalRespVersion),
      global_source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalSourceIps),
      id: cdktf.stringToTerraform(this._id),
      memory_limit_in_gb: cdktf.numberToTerraform(this._memoryLimitInGb),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      redis_version: cdktf.stringToTerraform(this._redisVersion),
      subscription_id: cdktf.numberToTerraform(this._subscriptionId),
      support_oss_cluster_api: cdktf.booleanToTerraform(this._supportOssClusterApi),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      global_alert: cdktf.listMapper(activeActiveSubscriptionDatabaseGlobalAlertToTerraform, true)(this._globalAlert.internalValue),
      override_region: cdktf.listMapper(activeActiveSubscriptionDatabaseOverrideRegionToTerraform, true)(this._overrideRegion.internalValue),
      timeouts: activeActiveSubscriptionDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._clientSslCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientTlsCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_eviction: {
        value: cdktf.stringToHclTerraform(this._dataEviction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._datasetSizeInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_tls: {
        value: cdktf.booleanToHclTerraform(this._enableTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_endpoint_for_oss_cluster_api: {
        value: cdktf.booleanToHclTerraform(this._externalEndpointForOssClusterApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_data_persistence: {
        value: cdktf.stringToHclTerraform(this._globalDataPersistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_enable_default_user: {
        value: cdktf.booleanToHclTerraform(this._globalEnableDefaultUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_modules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalModules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      global_password: {
        value: cdktf.stringToHclTerraform(this._globalPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_resp_version: {
        value: cdktf.stringToHclTerraform(this._globalRespVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_source_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalSourceIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_limit_in_gb: {
        value: cdktf.numberToHclTerraform(this._memoryLimitInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      redis_version: {
        value: cdktf.stringToHclTerraform(this._redisVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.numberToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      support_oss_cluster_api: {
        value: cdktf.booleanToHclTerraform(this._supportOssClusterApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      global_alert: {
        value: cdktf.listMapperHcl(activeActiveSubscriptionDatabaseGlobalAlertToHclTerraform, true)(this._globalAlert.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ActiveActiveSubscriptionDatabaseGlobalAlertList",
      },
      override_region: {
        value: cdktf.listMapperHcl(activeActiveSubscriptionDatabaseOverrideRegionToHclTerraform, true)(this._overrideRegion.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ActiveActiveSubscriptionDatabaseOverrideRegionList",
      },
      timeouts: {
        value: activeActiveSubscriptionDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActiveActiveSubscriptionDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
