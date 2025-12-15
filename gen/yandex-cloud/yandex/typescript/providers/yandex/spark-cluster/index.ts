// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SparkClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration of the Spark cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#config SparkCluster#config}
  */
  readonly config: SparkClusterConfigA;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#deletion_protection SparkCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Description of the cluster. 0-256 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#description SparkCluster#description}
  */
  readonly description?: string;
  /**
  * ID of the cloud folder that the cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#folder_id SparkCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Cluster labels as key/value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#labels SparkCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Cloud Logging configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#logging SparkCluster#logging}
  */
  readonly logging: SparkClusterLogging;
  /**
  * Configuration of the window for maintenance operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#maintenance_window SparkCluster#maintenance_window}
  */
  readonly maintenanceWindow?: SparkClusterMaintenanceWindow;
  /**
  * Name of the cluster. The name is unique within the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#name SparkCluster#name}
  */
  readonly name: string;
  /**
  * Network configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#network SparkCluster#network}
  */
  readonly network: SparkClusterNetwork;
  /**
  * The service account used by the cluster to access cloud resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#service_account_id SparkCluster#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#timeouts SparkCluster#timeouts}
  */
  readonly timeouts?: SparkClusterTimeouts;
}
export interface SparkClusterConfigDependencies {
  /**
  * Deb-packages that need to be installed using system package manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#deb_packages SparkCluster#deb_packages}
  */
  readonly debPackages?: string[];
  /**
  * Python packages that need to be installed using pip (in pip requirement format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#pip_packages SparkCluster#pip_packages}
  */
  readonly pipPackages?: string[];
}

export function sparkClusterConfigDependenciesToTerraform(struct?: SparkClusterConfigDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deb_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.debPackages),
    pip_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pipPackages),
  }
}


export function sparkClusterConfigDependenciesToHclTerraform(struct?: SparkClusterConfigDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deb_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.debPackages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pip_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pipPackages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkClusterConfigDependenciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterConfigDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.debPackages = this._debPackages;
    }
    if (this._pipPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipPackages = this._pipPackages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkClusterConfigDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debPackages = undefined;
      this._pipPackages = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debPackages = value.debPackages;
      this._pipPackages = value.pipPackages;
    }
  }

  // deb_packages - computed: true, optional: true, required: false
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

  // pip_packages - computed: true, optional: true, required: false
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
}
export interface SparkClusterConfigHistoryServer {
  /**
  * Enable Spark History Server. Default: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#enabled SparkCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function sparkClusterConfigHistoryServerToTerraform(struct?: SparkClusterConfigHistoryServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function sparkClusterConfigHistoryServerToHclTerraform(struct?: SparkClusterConfigHistoryServer | cdktf.IResolvable): any {
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

export class SparkClusterConfigHistoryServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterConfigHistoryServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SparkClusterConfigHistoryServer | cdktf.IResolvable | undefined) {
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface SparkClusterConfigMetastore {
  /**
  * Metastore cluster ID for default spark configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#cluster_id SparkCluster#cluster_id}
  */
  readonly clusterId?: string;
}

export function sparkClusterConfigMetastoreToTerraform(struct?: SparkClusterConfigMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
  }
}


export function sparkClusterConfigMetastoreToHclTerraform(struct?: SparkClusterConfigMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkClusterConfigMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterConfigMetastore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkClusterConfigMetastore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }
}
export interface SparkClusterConfigResourcePoolsDriver {
  /**
  * Maximum node count for the driver pool with autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#max_size SparkCluster#max_size}
  */
  readonly maxSize?: number;
  /**
  * Minimum node count for the driver pool with autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#min_size SparkCluster#min_size}
  */
  readonly minSize?: number;
  /**
  * Resource preset ID for the driver pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#resource_preset_id SparkCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
  /**
  * Node count for the driver pool with fixed size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#size SparkCluster#size}
  */
  readonly size?: number;
}

export function sparkClusterConfigResourcePoolsDriverToTerraform(struct?: SparkClusterConfigResourcePoolsDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function sparkClusterConfigResourcePoolsDriverToHclTerraform(struct?: SparkClusterConfigResourcePoolsDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
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

export class SparkClusterConfigResourcePoolsDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterConfigResourcePoolsDriver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkClusterConfigResourcePoolsDriver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._resourcePresetId = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._resourcePresetId = value.resourcePresetId;
      this._size = value.size;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // size - computed: false, optional: true, required: false
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
export interface SparkClusterConfigResourcePoolsExecutor {
  /**
  * Maximum node count for the executor pool with autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#max_size SparkCluster#max_size}
  */
  readonly maxSize?: number;
  /**
  * Minimum node count for the executor pool with autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#min_size SparkCluster#min_size}
  */
  readonly minSize?: number;
  /**
  * Resource preset ID for the executor pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#resource_preset_id SparkCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
  /**
  * Node count for the executor pool with fixed size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#size SparkCluster#size}
  */
  readonly size?: number;
}

export function sparkClusterConfigResourcePoolsExecutorToTerraform(struct?: SparkClusterConfigResourcePoolsExecutor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function sparkClusterConfigResourcePoolsExecutorToHclTerraform(struct?: SparkClusterConfigResourcePoolsExecutor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
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

export class SparkClusterConfigResourcePoolsExecutorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterConfigResourcePoolsExecutor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkClusterConfigResourcePoolsExecutor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._resourcePresetId = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._resourcePresetId = value.resourcePresetId;
      this._size = value.size;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // size - computed: false, optional: true, required: false
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
export interface SparkClusterConfigResourcePools {
  /**
  * Computational resources for the driver pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#driver SparkCluster#driver}
  */
  readonly driver: SparkClusterConfigResourcePoolsDriver;
  /**
  * Computational resources for the executor pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#executor SparkCluster#executor}
  */
  readonly executor: SparkClusterConfigResourcePoolsExecutor;
}

export function sparkClusterConfigResourcePoolsToTerraform(struct?: SparkClusterConfigResourcePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: sparkClusterConfigResourcePoolsDriverToTerraform(struct!.driver),
    executor: sparkClusterConfigResourcePoolsExecutorToTerraform(struct!.executor),
  }
}


export function sparkClusterConfigResourcePoolsToHclTerraform(struct?: SparkClusterConfigResourcePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: sparkClusterConfigResourcePoolsDriverToHclTerraform(struct!.driver),
      isBlock: true,
      type: "struct",
      storageClassType: "SparkClusterConfigResourcePoolsDriver",
    },
    executor: {
      value: sparkClusterConfigResourcePoolsExecutorToHclTerraform(struct!.executor),
      isBlock: true,
      type: "struct",
      storageClassType: "SparkClusterConfigResourcePoolsExecutor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkClusterConfigResourcePoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterConfigResourcePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver?.internalValue;
    }
    if (this._executor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executor = this._executor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkClusterConfigResourcePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver.internalValue = undefined;
      this._executor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver.internalValue = value.driver;
      this._executor.internalValue = value.executor;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver = new SparkClusterConfigResourcePoolsDriverOutputReference(this, "driver");
  public get driver() {
    return this._driver;
  }
  public putDriver(value: SparkClusterConfigResourcePoolsDriver) {
    this._driver.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver.internalValue;
  }

  // executor - computed: false, optional: false, required: true
  private _executor = new SparkClusterConfigResourcePoolsExecutorOutputReference(this, "executor");
  public get executor() {
    return this._executor;
  }
  public putExecutor(value: SparkClusterConfigResourcePoolsExecutor) {
    this._executor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executorInput() {
    return this._executor.internalValue;
  }
}
export interface SparkClusterConfigA {
  /**
  * Environment dependencies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#dependencies SparkCluster#dependencies}
  */
  readonly dependencies?: SparkClusterConfigDependencies;
  /**
  * History Server configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#history_server SparkCluster#history_server}
  */
  readonly historyServer?: SparkClusterConfigHistoryServer;
  /**
  * Metastore configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#metastore SparkCluster#metastore}
  */
  readonly metastore?: SparkClusterConfigMetastore;
  /**
  * Computational resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#resource_pools SparkCluster#resource_pools}
  */
  readonly resourcePools: SparkClusterConfigResourcePools;
  /**
  * Version of Apache Spark. Format: Major.Minor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#spark_version SparkCluster#spark_version}
  */
  readonly sparkVersion?: string;
}

export function sparkClusterConfigAToTerraform(struct?: SparkClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependencies: sparkClusterConfigDependenciesToTerraform(struct!.dependencies),
    history_server: sparkClusterConfigHistoryServerToTerraform(struct!.historyServer),
    metastore: sparkClusterConfigMetastoreToTerraform(struct!.metastore),
    resource_pools: sparkClusterConfigResourcePoolsToTerraform(struct!.resourcePools),
    spark_version: cdktf.stringToTerraform(struct!.sparkVersion),
  }
}


export function sparkClusterConfigAToHclTerraform(struct?: SparkClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependencies: {
      value: sparkClusterConfigDependenciesToHclTerraform(struct!.dependencies),
      isBlock: true,
      type: "struct",
      storageClassType: "SparkClusterConfigDependencies",
    },
    history_server: {
      value: sparkClusterConfigHistoryServerToHclTerraform(struct!.historyServer),
      isBlock: true,
      type: "struct",
      storageClassType: "SparkClusterConfigHistoryServer",
    },
    metastore: {
      value: sparkClusterConfigMetastoreToHclTerraform(struct!.metastore),
      isBlock: true,
      type: "struct",
      storageClassType: "SparkClusterConfigMetastore",
    },
    resource_pools: {
      value: sparkClusterConfigResourcePoolsToHclTerraform(struct!.resourcePools),
      isBlock: true,
      type: "struct",
      storageClassType: "SparkClusterConfigResourcePools",
    },
    spark_version: {
      value: cdktf.stringToHclTerraform(struct!.sparkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._historyServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.historyServer = this._historyServer?.internalValue;
    }
    if (this._metastore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastore = this._metastore?.internalValue;
    }
    if (this._resourcePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePools = this._resourcePools?.internalValue;
    }
    if (this._sparkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkVersion = this._sparkVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkClusterConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = undefined;
      this._historyServer.internalValue = undefined;
      this._metastore.internalValue = undefined;
      this._resourcePools.internalValue = undefined;
      this._sparkVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = value.dependencies;
      this._historyServer.internalValue = value.historyServer;
      this._metastore.internalValue = value.metastore;
      this._resourcePools.internalValue = value.resourcePools;
      this._sparkVersion = value.sparkVersion;
    }
  }

  // dependencies - computed: true, optional: true, required: false
  private _dependencies = new SparkClusterConfigDependenciesOutputReference(this, "dependencies");
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: SparkClusterConfigDependencies) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // history_server - computed: true, optional: true, required: false
  private _historyServer = new SparkClusterConfigHistoryServerOutputReference(this, "history_server");
  public get historyServer() {
    return this._historyServer;
  }
  public putHistoryServer(value: SparkClusterConfigHistoryServer) {
    this._historyServer.internalValue = value;
  }
  public resetHistoryServer() {
    this._historyServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyServerInput() {
    return this._historyServer.internalValue;
  }

  // metastore - computed: true, optional: true, required: false
  private _metastore = new SparkClusterConfigMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
  public putMetastore(value: SparkClusterConfigMetastore) {
    this._metastore.internalValue = value;
  }
  public resetMetastore() {
    this._metastore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreInput() {
    return this._metastore.internalValue;
  }

  // resource_pools - computed: false, optional: false, required: true
  private _resourcePools = new SparkClusterConfigResourcePoolsOutputReference(this, "resource_pools");
  public get resourcePools() {
    return this._resourcePools;
  }
  public putResourcePools(value: SparkClusterConfigResourcePools) {
    this._resourcePools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolsInput() {
    return this._resourcePools.internalValue;
  }

  // spark_version - computed: true, optional: true, required: false
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  public resetSparkVersion() {
    this._sparkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
  }
}
export interface SparkClusterLogging {
  /**
  * Enable log delivery to Cloud Logging. Default: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#enabled SparkCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Logs will be written to **default log group** of specified folder. Exactly one of the attributes `folder_id` or `log_group_id` should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#folder_id SparkCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Logs will be written to the **specified log group**. Exactly one of the attributes `folder_id` or `log_group_id` should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#log_group_id SparkCluster#log_group_id}
  */
  readonly logGroupId?: string;
}

export function sparkClusterLoggingToTerraform(struct?: SparkClusterLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
  }
}


export function sparkClusterLoggingToHclTerraform(struct?: SparkClusterLogging | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkClusterLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterLogging | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkClusterLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._folderId = undefined;
      this._logGroupId = undefined;
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
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
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
}
export interface SparkClusterMaintenanceWindow {
  /**
  * Day of week for maintenance window. One of `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#day SparkCluster#day}
  */
  readonly day?: string;
  /**
  * Hour of day in UTC time zone (1-24) for maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#hour SparkCluster#hour}
  */
  readonly hour?: number;
  /**
  * Type of maintenance window. Can be either `ANYTIME` or `WEEKLY`. If `WEEKLY`, day and hour must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#type SparkCluster#type}
  */
  readonly type?: string;
}

export function sparkClusterMaintenanceWindowToTerraform(struct?: SparkClusterMaintenanceWindow | cdktf.IResolvable): any {
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


export function sparkClusterMaintenanceWindowToHclTerraform(struct?: SparkClusterMaintenanceWindow | cdktf.IResolvable): any {
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

export class SparkClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterMaintenanceWindow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SparkClusterMaintenanceWindow | cdktf.IResolvable | undefined) {
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
export interface SparkClusterNetwork {
  /**
  * Network security groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#security_group_ids SparkCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Network subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#subnet_ids SparkCluster#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function sparkClusterNetworkToTerraform(struct?: SparkClusterNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function sparkClusterNetworkToHclTerraform(struct?: SparkClusterNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkClusterNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkClusterNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
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
}
export interface SparkClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#create SparkCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#delete SparkCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#update SparkCluster#update}
  */
  readonly update?: string;
}

export function sparkClusterTimeoutsToTerraform(struct?: SparkClusterTimeouts | cdktf.IResolvable): any {
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


export function sparkClusterTimeoutsToHclTerraform(struct?: SparkClusterTimeouts | cdktf.IResolvable): any {
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

export class SparkClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SparkClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster yandex_spark_cluster}
*/
export class SparkCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_spark_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SparkCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SparkCluster to import
  * @param importFromId The id of the existing SparkCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SparkCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_spark_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/spark_cluster yandex_spark_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SparkClusterConfig
  */
  public constructor(scope: Construct, id: string, config: SparkClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_spark_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._folderId = config.folderId;
    this._labels = config.labels;
    this._logging.internalValue = config.logging;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._name = config.name;
    this._network.internalValue = config.network;
    this._serviceAccountId = config.serviceAccountId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new SparkClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: SparkClusterConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // logging - computed: false, optional: false, required: true
  private _logging = new SparkClusterLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: SparkClusterLogging) {
    this._logging.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow = new SparkClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: SparkClusterMaintenanceWindow) {
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

  // network - computed: false, optional: false, required: true
  private _network = new SparkClusterNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: SparkClusterNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SparkClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SparkClusterTimeouts) {
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
      config: sparkClusterConfigAToTerraform(this._config.internalValue),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      logging: sparkClusterLoggingToTerraform(this._logging.internalValue),
      maintenance_window: sparkClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network: sparkClusterNetworkToTerraform(this._network.internalValue),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      timeouts: sparkClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: sparkClusterConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkClusterConfigA",
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
      logging: {
        value: sparkClusterLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkClusterLogging",
      },
      maintenance_window: {
        value: sparkClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkClusterMaintenanceWindow",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: sparkClusterNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkClusterNetwork",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sparkClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
