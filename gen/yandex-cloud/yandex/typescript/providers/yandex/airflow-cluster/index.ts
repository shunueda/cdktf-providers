// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AirflowClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Password that is used to log in to Apache Airflow web UI under `admin` user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#admin_password AirflowCluster#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Configuration of the Apache Airflow application itself. The value of this attribute is a two-level map. Keys of top-level map are the names of [configuration sections](https://airflow.apache.org/docs/apache-airflow/stable/configurations-ref.html#airflow-configuration-options). Keys of inner maps are the names of configuration options within corresponding section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#airflow_config AirflowCluster#airflow_config}
  */
  readonly airflowConfig?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * Apache Airflow version in format `<major>.<minor>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#airflow_version AirflowCluster#airflow_version}
  */
  readonly airflowVersion?: string;
  /**
  * Parameters of the location and access to the code that will be executed in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#code_sync AirflowCluster#code_sync}
  */
  readonly codeSync: AirflowClusterCodeSync;
  /**
  * Configuration of dag-processor instances. Only for airflow version 3.*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#dag_processor AirflowCluster#dag_processor}
  */
  readonly dagProcessor?: AirflowClusterDagProcessor;
  /**
  * System packages that are installed in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#deb_packages AirflowCluster#deb_packages}
  */
  readonly debPackages?: string[];
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#deletion_protection AirflowCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#description AirflowCluster#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#folder_id AirflowCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#labels AirflowCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Configuration of Lockbox Secrets Backend. [See documentation](https://yandex.cloud/docs/managed-airflow/tutorials/lockbox-secrets-in-maf-cluster) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#lockbox_secrets_backend AirflowCluster#lockbox_secrets_backend}
  */
  readonly lockboxSecretsBackend?: AirflowClusterLockboxSecretsBackend;
  /**
  * Cloud Logging configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#logging AirflowCluster#logging}
  */
  readonly logging?: AirflowClusterLogging;
  /**
  * Configuration of window for maintenance operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#maintenance_window AirflowCluster#maintenance_window}
  */
  readonly maintenanceWindow?: AirflowClusterMaintenanceWindow;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#name AirflowCluster#name}
  */
  readonly name: string;
  /**
  * Python packages that are installed in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#pip_packages AirflowCluster#pip_packages}
  */
  readonly pipPackages?: string[];
  /**
  * Version of Python that Airflow will run on. Must be in format `<major>.<minor>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#python_version AirflowCluster#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * Configuration of scheduler instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#scheduler AirflowCluster#scheduler}
  */
  readonly scheduler: AirflowClusterScheduler;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#security_group_ids AirflowCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * [Service account](https://yandex.cloud/docs/iam/concepts/users/service-accounts) which linked to the resource. For more information, see [documentation](https://yandex.cloud/docs/managed-airflow/concepts/impersonation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#service_account_id AirflowCluster#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * The list of VPC subnets identifiers which resource is attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#subnet_ids AirflowCluster#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Configuration of `triggerer` instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#triggerer AirflowCluster#triggerer}
  */
  readonly triggerer?: AirflowClusterTriggerer;
  /**
  * Configuration of `webserver` instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#webserver AirflowCluster#webserver}
  */
  readonly webserver: AirflowClusterWebserver;
  /**
  * Configuration of worker instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#worker AirflowCluster#worker}
  */
  readonly worker: AirflowClusterWorker;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#timeouts AirflowCluster#timeouts}
  */
  readonly timeouts?: AirflowClusterTimeouts;
}
export interface AirflowClusterCodeSyncS3 {
  /**
  * The name of the Object Storage bucket that stores DAG files used in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#bucket AirflowCluster#bucket}
  */
  readonly bucket: string;
}

export function airflowClusterCodeSyncS3ToTerraform(struct?: AirflowClusterCodeSyncS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
  }
}


export function airflowClusterCodeSyncS3ToHclTerraform(struct?: AirflowClusterCodeSyncS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterCodeSyncS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterCodeSyncS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterCodeSyncS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }
}
export interface AirflowClusterCodeSync {
  /**
  * Currently only Object Storage (S3) is supported as the source of DAG files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#s3 AirflowCluster#s3}
  */
  readonly s3: AirflowClusterCodeSyncS3;
}

export function airflowClusterCodeSyncToTerraform(struct?: AirflowClusterCodeSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: airflowClusterCodeSyncS3ToTerraform(struct!.s3),
  }
}


export function airflowClusterCodeSyncToHclTerraform(struct?: AirflowClusterCodeSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3: {
      value: airflowClusterCodeSyncS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "AirflowClusterCodeSyncS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterCodeSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterCodeSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterCodeSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: false, required: true
  private _s3 = new AirflowClusterCodeSyncS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: AirflowClusterCodeSyncS3) {
    this._s3.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface AirflowClusterDagProcessor {
  /**
  * The number of dag-processor instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#count AirflowCluster#count}
  */
  readonly count: number;
  /**
  * The identifier of the preset for computational resources available to an instance (CPU, memory etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#resource_preset_id AirflowCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function airflowClusterDagProcessorToTerraform(struct?: AirflowClusterDagProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function airflowClusterDagProcessorToHclTerraform(struct?: AirflowClusterDagProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterDagProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterDagProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterDagProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface AirflowClusterLockboxSecretsBackend {
  /**
  * Enables usage of Lockbox Secrets Backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#enabled AirflowCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function airflowClusterLockboxSecretsBackendToTerraform(struct?: AirflowClusterLockboxSecretsBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function airflowClusterLockboxSecretsBackendToHclTerraform(struct?: AirflowClusterLockboxSecretsBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterLockboxSecretsBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterLockboxSecretsBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterLockboxSecretsBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AirflowClusterLogging {
  /**
  * Enables delivery of logs generated by the Airflow components to [Cloud Logging](https://yandex.cloud/docs/logging/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#enabled AirflowCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Logs will be written to **default log group** of specified folder. Exactly one of the attributes `folder_id` or `log_group_id` should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#folder_id AirflowCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Logs will be written to the **specified log group**. Exactly one of the attributes `folder_id` or `log_group_id` should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#log_group_id AirflowCluster#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Minimum level of messages that will be sent to Cloud Logging. Can be either `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR` or `FATAL`. If not set then server default is applied (currently `INFO`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#min_level AirflowCluster#min_level}
  */
  readonly minLevel?: string;
}

export function airflowClusterLoggingToTerraform(struct?: AirflowClusterLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    min_level: cdktf.stringToTerraform(struct!.minLevel),
  }
}


export function airflowClusterLoggingToHclTerraform(struct?: AirflowClusterLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_level: {
      value: cdktf.stringToHclTerraform(struct!.minLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._minLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLevel = this._minLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._folderId = undefined;
      this._logGroupId = undefined;
      this._minLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._folderId = value.folderId;
      this._logGroupId = value.logGroupId;
      this._minLevel = value.minLevel;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // min_level - computed: false, optional: true, required: false
  private _minLevel?: string; 
  public get minLevel() {
    return this.getStringAttribute('min_level');
  }
  public set minLevel(value: string) {
    this._minLevel = value;
  }
  public resetMinLevel() {
    this._minLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLevelInput() {
    return this._minLevel;
  }
}
export interface AirflowClusterMaintenanceWindow {
  /**
  * Day of week for maintenance window. One of `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#day AirflowCluster#day}
  */
  readonly day?: string;
  /**
  * Hour of day in UTC time zone (1-24) for maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#hour AirflowCluster#hour}
  */
  readonly hour?: number;
  /**
  * Type of maintenance window. Can be either `ANYTIME` or `WEEKLY`. If `WEEKLY`, day and hour must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#type AirflowCluster#type}
  */
  readonly type?: string;
}

export function airflowClusterMaintenanceWindowToTerraform(struct?: AirflowClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function airflowClusterMaintenanceWindowToHclTerraform(struct?: AirflowClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hour = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hour = value.hour;
      this._type = value.type;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface AirflowClusterScheduler {
  /**
  * The number of scheduler instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#count AirflowCluster#count}
  */
  readonly count: number;
  /**
  * The identifier of the preset for computational resources available to an instance (CPU, memory etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#resource_preset_id AirflowCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function airflowClusterSchedulerToTerraform(struct?: AirflowClusterScheduler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function airflowClusterSchedulerToHclTerraform(struct?: AirflowClusterScheduler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterSchedulerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterScheduler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterScheduler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface AirflowClusterTriggerer {
  /**
  * The number of triggerer instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#count AirflowCluster#count}
  */
  readonly count: number;
  /**
  * The identifier of the preset for computational resources available to an instance (CPU, memory etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#resource_preset_id AirflowCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function airflowClusterTriggererToTerraform(struct?: AirflowClusterTriggerer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function airflowClusterTriggererToHclTerraform(struct?: AirflowClusterTriggerer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterTriggererOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterTriggerer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterTriggerer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface AirflowClusterWebserver {
  /**
  * The number of webserver instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#count AirflowCluster#count}
  */
  readonly count: number;
  /**
  * The identifier of the preset for computational resources available to an instance (CPU, memory etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#resource_preset_id AirflowCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function airflowClusterWebserverToTerraform(struct?: AirflowClusterWebserver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function airflowClusterWebserverToHclTerraform(struct?: AirflowClusterWebserver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterWebserverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterWebserver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterWebserver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface AirflowClusterWorker {
  /**
  * The maximum number of worker instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#max_count AirflowCluster#max_count}
  */
  readonly maxCount: number;
  /**
  * The minimum number of worker instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#min_count AirflowCluster#min_count}
  */
  readonly minCount: number;
  /**
  * The identifier of the preset for computational resources available to an instance (CPU, memory etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#resource_preset_id AirflowCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function airflowClusterWorkerToTerraform(struct?: AirflowClusterWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function airflowClusterWorkerToHclTerraform(struct?: AirflowClusterWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterWorker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterWorker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // max_count - computed: false, optional: false, required: true
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: false, required: true
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface AirflowClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#create AirflowCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#delete AirflowCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#update AirflowCluster#update}
  */
  readonly update?: string;
}

export function airflowClusterTimeoutsToTerraform(struct?: AirflowClusterTimeouts | cdktf.IResolvable): any {
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


export function airflowClusterTimeoutsToHclTerraform(struct?: AirflowClusterTimeouts | cdktf.IResolvable): any {
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

export class AirflowClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AirflowClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster yandex_airflow_cluster}
*/
export class AirflowCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_airflow_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AirflowCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AirflowCluster to import
  * @param importFromId The id of the existing AirflowCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AirflowCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_airflow_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/airflow_cluster yandex_airflow_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AirflowClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AirflowClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_airflow_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPassword = config.adminPassword;
    this._airflowConfig = config.airflowConfig;
    this._airflowVersion = config.airflowVersion;
    this._codeSync.internalValue = config.codeSync;
    this._dagProcessor.internalValue = config.dagProcessor;
    this._debPackages = config.debPackages;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._folderId = config.folderId;
    this._labels = config.labels;
    this._lockboxSecretsBackend.internalValue = config.lockboxSecretsBackend;
    this._logging.internalValue = config.logging;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._name = config.name;
    this._pipPackages = config.pipPackages;
    this._pythonVersion = config.pythonVersion;
    this._scheduler.internalValue = config.scheduler;
    this._securityGroupIds = config.securityGroupIds;
    this._serviceAccountId = config.serviceAccountId;
    this._subnetIds = config.subnetIds;
    this._triggerer.internalValue = config.triggerer;
    this._webserver.internalValue = config.webserver;
    this._worker.internalValue = config.worker;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // airflow_config - computed: false, optional: true, required: false
  private _airflowConfig?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get airflowConfig() {
    return this.interpolationForAttribute('airflow_config');
  }
  public set airflowConfig(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._airflowConfig = value;
  }
  public resetAirflowConfig() {
    this._airflowConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowConfigInput() {
    return this._airflowConfig;
  }

  // airflow_version - computed: true, optional: true, required: false
  private _airflowVersion?: string; 
  public get airflowVersion() {
    return this.getStringAttribute('airflow_version');
  }
  public set airflowVersion(value: string) {
    this._airflowVersion = value;
  }
  public resetAirflowVersion() {
    this._airflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowVersionInput() {
    return this._airflowVersion;
  }

  // code_sync - computed: false, optional: false, required: true
  private _codeSync = new AirflowClusterCodeSyncOutputReference(this, "code_sync");
  public get codeSync() {
    return this._codeSync;
  }
  public putCodeSync(value: AirflowClusterCodeSync) {
    this._codeSync.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSyncInput() {
    return this._codeSync.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dag_processor - computed: false, optional: true, required: false
  private _dagProcessor = new AirflowClusterDagProcessorOutputReference(this, "dag_processor");
  public get dagProcessor() {
    return this._dagProcessor;
  }
  public putDagProcessor(value: AirflowClusterDagProcessor) {
    this._dagProcessor.internalValue = value;
  }
  public resetDagProcessor() {
    this._dagProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagProcessorInput() {
    return this._dagProcessor.internalValue;
  }

  // deb_packages - computed: false, optional: true, required: false
  private _debPackages?: string[]; 
  public get debPackages() {
    return cdktf.Fn.tolist(this.getListAttribute('deb_packages'));
  }
  public set debPackages(value: string[]) {
    this._debPackages = value;
  }
  public resetDebPackages() {
    this._debPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debPackagesInput() {
    return this._debPackages;
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
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

  // lockbox_secrets_backend - computed: false, optional: true, required: false
  private _lockboxSecretsBackend = new AirflowClusterLockboxSecretsBackendOutputReference(this, "lockbox_secrets_backend");
  public get lockboxSecretsBackend() {
    return this._lockboxSecretsBackend;
  }
  public putLockboxSecretsBackend(value: AirflowClusterLockboxSecretsBackend) {
    this._lockboxSecretsBackend.internalValue = value;
  }
  public resetLockboxSecretsBackend() {
    this._lockboxSecretsBackend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretsBackendInput() {
    return this._lockboxSecretsBackend.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new AirflowClusterLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: AirflowClusterLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow = new AirflowClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: AirflowClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
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

  // pip_packages - computed: false, optional: true, required: false
  private _pipPackages?: string[]; 
  public get pipPackages() {
    return cdktf.Fn.tolist(this.getListAttribute('pip_packages'));
  }
  public set pipPackages(value: string[]) {
    this._pipPackages = value;
  }
  public resetPipPackages() {
    this._pipPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipPackagesInput() {
    return this._pipPackages;
  }

  // python_version - computed: true, optional: true, required: false
  private _pythonVersion?: string; 
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }
  public set pythonVersion(value: string) {
    this._pythonVersion = value;
  }
  public resetPythonVersion() {
    this._pythonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonVersionInput() {
    return this._pythonVersion;
  }

  // scheduler - computed: false, optional: false, required: true
  private _scheduler = new AirflowClusterSchedulerOutputReference(this, "scheduler");
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: AirflowClusterScheduler) {
    this._scheduler.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // triggerer - computed: false, optional: true, required: false
  private _triggerer = new AirflowClusterTriggererOutputReference(this, "triggerer");
  public get triggerer() {
    return this._triggerer;
  }
  public putTriggerer(value: AirflowClusterTriggerer) {
    this._triggerer.internalValue = value;
  }
  public resetTriggerer() {
    this._triggerer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggererInput() {
    return this._triggerer.internalValue;
  }

  // webserver - computed: false, optional: false, required: true
  private _webserver = new AirflowClusterWebserverOutputReference(this, "webserver");
  public get webserver() {
    return this._webserver;
  }
  public putWebserver(value: AirflowClusterWebserver) {
    this._webserver.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webserverInput() {
    return this._webserver.internalValue;
  }

  // worker - computed: false, optional: false, required: true
  private _worker = new AirflowClusterWorkerOutputReference(this, "worker");
  public get worker() {
    return this._worker;
  }
  public putWorker(value: AirflowClusterWorker) {
    this._worker.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AirflowClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AirflowClusterTimeouts) {
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
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      airflow_config: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(this._airflowConfig),
      airflow_version: cdktf.stringToTerraform(this._airflowVersion),
      code_sync: airflowClusterCodeSyncToTerraform(this._codeSync.internalValue),
      dag_processor: airflowClusterDagProcessorToTerraform(this._dagProcessor.internalValue),
      deb_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._debPackages),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      lockbox_secrets_backend: airflowClusterLockboxSecretsBackendToTerraform(this._lockboxSecretsBackend.internalValue),
      logging: airflowClusterLoggingToTerraform(this._logging.internalValue),
      maintenance_window: airflowClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      name: cdktf.stringToTerraform(this._name),
      pip_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pipPackages),
      python_version: cdktf.stringToTerraform(this._pythonVersion),
      scheduler: airflowClusterSchedulerToTerraform(this._scheduler.internalValue),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      triggerer: airflowClusterTriggererToTerraform(this._triggerer.internalValue),
      webserver: airflowClusterWebserverToTerraform(this._webserver.internalValue),
      worker: airflowClusterWorkerToTerraform(this._worker.internalValue),
      timeouts: airflowClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      airflow_config: {
        value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(this._airflowConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMapMap",
      },
      airflow_version: {
        value: cdktf.stringToHclTerraform(this._airflowVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_sync: {
        value: airflowClusterCodeSyncToHclTerraform(this._codeSync.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterCodeSync",
      },
      dag_processor: {
        value: airflowClusterDagProcessorToHclTerraform(this._dagProcessor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterDagProcessor",
      },
      deb_packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._debPackages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      lockbox_secrets_backend: {
        value: airflowClusterLockboxSecretsBackendToHclTerraform(this._lockboxSecretsBackend.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterLockboxSecretsBackend",
      },
      logging: {
        value: airflowClusterLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterLogging",
      },
      maintenance_window: {
        value: airflowClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterMaintenanceWindow",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pip_packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pipPackages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      python_version: {
        value: cdktf.stringToHclTerraform(this._pythonVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler: {
        value: airflowClusterSchedulerToHclTerraform(this._scheduler.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterScheduler",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      triggerer: {
        value: airflowClusterTriggererToHclTerraform(this._triggerer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterTriggerer",
      },
      webserver: {
        value: airflowClusterWebserverToHclTerraform(this._webserver.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterWebserver",
      },
      worker: {
        value: airflowClusterWorkerToHclTerraform(this._worker.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterWorker",
      },
      timeouts: {
        value: airflowClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
