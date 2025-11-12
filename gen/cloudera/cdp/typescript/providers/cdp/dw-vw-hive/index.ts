// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DwVwHiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * The time in seconds after which the compute group should be suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#auto_suspend_timeout_seconds DwVwHive#auto_suspend_timeout_seconds}
  */
  readonly autoSuspendTimeoutSeconds?: number;
  /**
  * AWS related configuration options that could specify various values that will be used during CDW resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#aws_options DwVwHive#aws_options}
  */
  readonly awsOptions?: DwVwHiveAwsOptions;
  /**
  * The id of the CDW Cluster which the Hive Virtual Warehouse is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#cluster_id DwVwHive#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The id of the Database Catalog which the Hive Virtual Warehouse is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#database_catalog_id DwVwHive#database_catalog_id}
  */
  readonly databaseCatalogId: string;
  /**
  * Boolean value that specifies if auto-suspend should be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#disable_auto_suspend DwVwHive#disable_auto_suspend}
  */
  readonly disableAutoSuspend?: boolean | cdktf.IResolvable;
  /**
  * Enable SSO for the Virtual Warehouse. If this field is not specified, it defaults to ‘false’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#enable_sso DwVwHive#enable_sso}
  */
  readonly enableSso?: boolean | cdktf.IResolvable;
  /**
  * Nodes per compute group. If specified, forces ‘template’ to be ‘custom’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#group_size DwVwHive#group_size}
  */
  readonly groupSize: number;
  /**
  * Set headroom node count. Nodes will be started in case there are no free nodes left to pick up new jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#headroom DwVwHive#headroom}
  */
  readonly headroom?: number;
  /**
  * The version of the Hive Virtual Warehouse image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#image_version DwVwHive#image_version}
  */
  readonly imageVersion?: string;
  /**
  * LDAP group names to be enabled to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#ldap_groups DwVwHive#ldap_groups}
  */
  readonly ldapGroups?: string[];
  /**
  * Maximum number of concurrent isolated queries. If not provided, 0 will be applied. The 0 value means the query isolation functionality will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#max_concurrent_isolated_queries DwVwHive#max_concurrent_isolated_queries}
  */
  readonly maxConcurrentIsolatedQueries?: number;
  /**
  * Maximum number of available compute groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#max_group_count DwVwHive#max_group_count}
  */
  readonly maxGroupCount: number;
  /**
  * Maximum number of nodes per isolated query. If not provided, 0 will be applied. The 0 value means the query isolation functionality will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#max_nodes_per_isolated_query DwVwHive#max_nodes_per_isolated_query}
  */
  readonly maxNodesPerIsolatedQuery?: number;
  /**
  * Minimum number of available compute groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#min_group_count DwVwHive#min_group_count}
  */
  readonly minGroupCount: number;
  /**
  * The name of the Hive Virtual Warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#name DwVwHive#name}
  */
  readonly name: string;
  /**
  * Value of ‘true’ automatically configures the Virtual Warehouse to support JWTs issued by the CDP JWT token provider. Value of ‘false’ does not enable JWT auth on the Virtual Warehouse. If this field is not specified, it defaults to ‘false’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#platform_jwt_auth DwVwHive#platform_jwt_auth}
  */
  readonly platformJwtAuth?: boolean | cdktf.IResolvable;
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#polling_options DwVwHive#polling_options}
  */
  readonly pollingOptions?: DwVwHivePollingOptions;
  /**
  * Set wait time before a scale event happens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#scale_wait_time_seconds DwVwHive#scale_wait_time_seconds}
  */
  readonly scaleWaitTimeSeconds?: number;
}
export interface DwVwHiveAwsOptions {
  /**
  * This feature works only for AWS cluster type. An availability zone to host compute instances. If not specified, defaults to a randomly selected availability zone inferred from available subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#availability_zone DwVwHive#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * This feature works only for AWS cluster type. The size of the EBS volume in GB to be used for LLAP spill storage. If not specified, defaults to no extra spill disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#ebs_llap_spill_gb DwVwHive#ebs_llap_spill_gb}
  */
  readonly ebsLlapSpillGb?: number;
  /**
  * This feature works only for AWS cluster type. Tags to be applied to the underlying compute nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#tags DwVwHive#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dwVwHiveAwsOptionsToTerraform(struct?: DwVwHiveAwsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    ebs_llap_spill_gb: cdktf.numberToTerraform(struct!.ebsLlapSpillGb),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dwVwHiveAwsOptionsToHclTerraform(struct?: DwVwHiveAwsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_llap_spill_gb: {
      value: cdktf.numberToHclTerraform(struct!.ebsLlapSpillGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwVwHiveAwsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwVwHiveAwsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._ebsLlapSpillGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsLlapSpillGb = this._ebsLlapSpillGb;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwVwHiveAwsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._ebsLlapSpillGb = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._ebsLlapSpillGb = value.ebsLlapSpillGb;
      this._tags = value.tags;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // ebs_llap_spill_gb - computed: false, optional: true, required: false
  private _ebsLlapSpillGb?: number; 
  public get ebsLlapSpillGb() {
    return this.getNumberAttribute('ebs_llap_spill_gb');
  }
  public set ebsLlapSpillGb(value: number) {
    this._ebsLlapSpillGb = value;
  }
  public resetEbsLlapSpillGb() {
    this._ebsLlapSpillGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsLlapSpillGbInput() {
    return this._ebsLlapSpillGb;
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
}
export interface DwVwHivePollingOptions {
  /**
  * Boolean value that specifies if Terraform should wait for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#async DwVwHive#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#call_failure_threshold DwVwHive#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#polling_timeout DwVwHive#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function dwVwHivePollingOptionsToTerraform(struct?: DwVwHivePollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async: cdktf.booleanToTerraform(struct!.async),
    call_failure_threshold: cdktf.numberToTerraform(struct!.callFailureThreshold),
    polling_timeout: cdktf.numberToTerraform(struct!.pollingTimeout),
  }
}


export function dwVwHivePollingOptionsToHclTerraform(struct?: DwVwHivePollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async: {
      value: cdktf.booleanToHclTerraform(struct!.async),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    call_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.callFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwVwHivePollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwVwHivePollingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._async !== undefined) {
      hasAnyValues = true;
      internalValueResult.async = this._async;
    }
    if (this._callFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.callFailureThreshold = this._callFailureThreshold;
    }
    if (this._pollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingTimeout = this._pollingTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwVwHivePollingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._async = undefined;
      this._callFailureThreshold = undefined;
      this._pollingTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._async = value.async;
      this._callFailureThreshold = value.callFailureThreshold;
      this._pollingTimeout = value.pollingTimeout;
    }
  }

  // async - computed: true, optional: true, required: false
  private _async?: boolean | cdktf.IResolvable; 
  public get async() {
    return this.getBooleanAttribute('async');
  }
  public set async(value: boolean | cdktf.IResolvable) {
    this._async = value;
  }
  public resetAsync() {
    this._async = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInput() {
    return this._async;
  }

  // call_failure_threshold - computed: true, optional: true, required: false
  private _callFailureThreshold?: number; 
  public get callFailureThreshold() {
    return this.getNumberAttribute('call_failure_threshold');
  }
  public set callFailureThreshold(value: number) {
    this._callFailureThreshold = value;
  }
  public resetCallFailureThreshold() {
    this._callFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callFailureThresholdInput() {
    return this._callFailureThreshold;
  }

  // polling_timeout - computed: true, optional: true, required: false
  private _pollingTimeout?: number; 
  public get pollingTimeout() {
    return this.getNumberAttribute('polling_timeout');
  }
  public set pollingTimeout(value: number) {
    this._pollingTimeout = value;
  }
  public resetPollingTimeout() {
    this._pollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingTimeoutInput() {
    return this._pollingTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive cdp_dw_vw_hive}
*/
export class DwVwHive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_dw_vw_hive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DwVwHive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DwVwHive to import
  * @param importFromId The id of the existing DwVwHive that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DwVwHive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_dw_vw_hive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_hive cdp_dw_vw_hive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DwVwHiveConfig
  */
  public constructor(scope: Construct, id: string, config: DwVwHiveConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_dw_vw_hive',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8',
        providerVersionConstraint: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSuspendTimeoutSeconds = config.autoSuspendTimeoutSeconds;
    this._awsOptions.internalValue = config.awsOptions;
    this._clusterId = config.clusterId;
    this._databaseCatalogId = config.databaseCatalogId;
    this._disableAutoSuspend = config.disableAutoSuspend;
    this._enableSso = config.enableSso;
    this._groupSize = config.groupSize;
    this._headroom = config.headroom;
    this._imageVersion = config.imageVersion;
    this._ldapGroups = config.ldapGroups;
    this._maxConcurrentIsolatedQueries = config.maxConcurrentIsolatedQueries;
    this._maxGroupCount = config.maxGroupCount;
    this._maxNodesPerIsolatedQuery = config.maxNodesPerIsolatedQuery;
    this._minGroupCount = config.minGroupCount;
    this._name = config.name;
    this._platformJwtAuth = config.platformJwtAuth;
    this._pollingOptions.internalValue = config.pollingOptions;
    this._scaleWaitTimeSeconds = config.scaleWaitTimeSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_suspend_timeout_seconds - computed: false, optional: true, required: false
  private _autoSuspendTimeoutSeconds?: number; 
  public get autoSuspendTimeoutSeconds() {
    return this.getNumberAttribute('auto_suspend_timeout_seconds');
  }
  public set autoSuspendTimeoutSeconds(value: number) {
    this._autoSuspendTimeoutSeconds = value;
  }
  public resetAutoSuspendTimeoutSeconds() {
    this._autoSuspendTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSuspendTimeoutSecondsInput() {
    return this._autoSuspendTimeoutSeconds;
  }

  // aws_options - computed: false, optional: true, required: false
  private _awsOptions = new DwVwHiveAwsOptionsOutputReference(this, "aws_options");
  public get awsOptions() {
    return this._awsOptions;
  }
  public putAwsOptions(value: DwVwHiveAwsOptions) {
    this._awsOptions.internalValue = value;
  }
  public resetAwsOptions() {
    this._awsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOptionsInput() {
    return this._awsOptions.internalValue;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // compactor - computed: true, optional: false, required: false
  public get compactor() {
    return this.getBooleanAttribute('compactor');
  }

  // database_catalog_id - computed: false, optional: false, required: true
  private _databaseCatalogId?: string; 
  public get databaseCatalogId() {
    return this.getStringAttribute('database_catalog_id');
  }
  public set databaseCatalogId(value: string) {
    this._databaseCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCatalogIdInput() {
    return this._databaseCatalogId;
  }

  // disable_auto_suspend - computed: true, optional: true, required: false
  private _disableAutoSuspend?: boolean | cdktf.IResolvable; 
  public get disableAutoSuspend() {
    return this.getBooleanAttribute('disable_auto_suspend');
  }
  public set disableAutoSuspend(value: boolean | cdktf.IResolvable) {
    this._disableAutoSuspend = value;
  }
  public resetDisableAutoSuspend() {
    this._disableAutoSuspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoSuspendInput() {
    return this._disableAutoSuspend;
  }

  // enable_sso - computed: true, optional: true, required: false
  private _enableSso?: boolean | cdktf.IResolvable; 
  public get enableSso() {
    return this.getBooleanAttribute('enable_sso');
  }
  public set enableSso(value: boolean | cdktf.IResolvable) {
    this._enableSso = value;
  }
  public resetEnableSso() {
    this._enableSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsoInput() {
    return this._enableSso;
  }

  // group_size - computed: false, optional: false, required: true
  private _groupSize?: number; 
  public get groupSize() {
    return this.getNumberAttribute('group_size');
  }
  public set groupSize(value: number) {
    this._groupSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSizeInput() {
    return this._groupSize;
  }

  // headroom - computed: false, optional: true, required: false
  private _headroom?: number; 
  public get headroom() {
    return this.getNumberAttribute('headroom');
  }
  public set headroom(value: number) {
    this._headroom = value;
  }
  public resetHeadroom() {
    this._headroom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headroomInput() {
    return this._headroom;
  }

  // hue_url - computed: true, optional: false, required: false
  public get hueUrl() {
    return this.getStringAttribute('hue_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // jdbc_url - computed: true, optional: false, required: false
  public get jdbcUrl() {
    return this.getStringAttribute('jdbc_url');
  }

  // jwt_connection_string - computed: true, optional: false, required: false
  public get jwtConnectionString() {
    return this.getStringAttribute('jwt_connection_string');
  }

  // jwt_token_gen_url - computed: true, optional: false, required: false
  public get jwtTokenGenUrl() {
    return this.getStringAttribute('jwt_token_gen_url');
  }

  // kerberos_jdbc_url - computed: true, optional: false, required: false
  public get kerberosJdbcUrl() {
    return this.getStringAttribute('kerberos_jdbc_url');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // ldap_groups - computed: false, optional: true, required: false
  private _ldapGroups?: string[]; 
  public get ldapGroups() {
    return this.getListAttribute('ldap_groups');
  }
  public set ldapGroups(value: string[]) {
    this._ldapGroups = value;
  }
  public resetLdapGroups() {
    this._ldapGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupsInput() {
    return this._ldapGroups;
  }

  // max_concurrent_isolated_queries - computed: false, optional: true, required: false
  private _maxConcurrentIsolatedQueries?: number; 
  public get maxConcurrentIsolatedQueries() {
    return this.getNumberAttribute('max_concurrent_isolated_queries');
  }
  public set maxConcurrentIsolatedQueries(value: number) {
    this._maxConcurrentIsolatedQueries = value;
  }
  public resetMaxConcurrentIsolatedQueries() {
    this._maxConcurrentIsolatedQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentIsolatedQueriesInput() {
    return this._maxConcurrentIsolatedQueries;
  }

  // max_group_count - computed: false, optional: false, required: true
  private _maxGroupCount?: number; 
  public get maxGroupCount() {
    return this.getNumberAttribute('max_group_count');
  }
  public set maxGroupCount(value: number) {
    this._maxGroupCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGroupCountInput() {
    return this._maxGroupCount;
  }

  // max_nodes_per_isolated_query - computed: false, optional: true, required: false
  private _maxNodesPerIsolatedQuery?: number; 
  public get maxNodesPerIsolatedQuery() {
    return this.getNumberAttribute('max_nodes_per_isolated_query');
  }
  public set maxNodesPerIsolatedQuery(value: number) {
    this._maxNodesPerIsolatedQuery = value;
  }
  public resetMaxNodesPerIsolatedQuery() {
    this._maxNodesPerIsolatedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesPerIsolatedQueryInput() {
    return this._maxNodesPerIsolatedQuery;
  }

  // min_group_count - computed: false, optional: false, required: true
  private _minGroupCount?: number; 
  public get minGroupCount() {
    return this.getNumberAttribute('min_group_count');
  }
  public set minGroupCount(value: number) {
    this._minGroupCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minGroupCountInput() {
    return this._minGroupCount;
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

  // platform_jwt_auth - computed: true, optional: true, required: false
  private _platformJwtAuth?: boolean | cdktf.IResolvable; 
  public get platformJwtAuth() {
    return this.getBooleanAttribute('platform_jwt_auth');
  }
  public set platformJwtAuth(value: boolean | cdktf.IResolvable) {
    this._platformJwtAuth = value;
  }
  public resetPlatformJwtAuth() {
    this._platformJwtAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformJwtAuthInput() {
    return this._platformJwtAuth;
  }

  // polling_options - computed: false, optional: true, required: false
  private _pollingOptions = new DwVwHivePollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: DwVwHivePollingOptions) {
    this._pollingOptions.internalValue = value;
  }
  public resetPollingOptions() {
    this._pollingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingOptionsInput() {
    return this._pollingOptions.internalValue;
  }

  // scale_wait_time_seconds - computed: false, optional: true, required: false
  private _scaleWaitTimeSeconds?: number; 
  public get scaleWaitTimeSeconds() {
    return this.getNumberAttribute('scale_wait_time_seconds');
  }
  public set scaleWaitTimeSeconds(value: number) {
    this._scaleWaitTimeSeconds = value;
  }
  public resetScaleWaitTimeSeconds() {
    this._scaleWaitTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleWaitTimeSecondsInput() {
    return this._scaleWaitTimeSeconds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_suspend_timeout_seconds: cdktf.numberToTerraform(this._autoSuspendTimeoutSeconds),
      aws_options: dwVwHiveAwsOptionsToTerraform(this._awsOptions.internalValue),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      database_catalog_id: cdktf.stringToTerraform(this._databaseCatalogId),
      disable_auto_suspend: cdktf.booleanToTerraform(this._disableAutoSuspend),
      enable_sso: cdktf.booleanToTerraform(this._enableSso),
      group_size: cdktf.numberToTerraform(this._groupSize),
      headroom: cdktf.numberToTerraform(this._headroom),
      image_version: cdktf.stringToTerraform(this._imageVersion),
      ldap_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ldapGroups),
      max_concurrent_isolated_queries: cdktf.numberToTerraform(this._maxConcurrentIsolatedQueries),
      max_group_count: cdktf.numberToTerraform(this._maxGroupCount),
      max_nodes_per_isolated_query: cdktf.numberToTerraform(this._maxNodesPerIsolatedQuery),
      min_group_count: cdktf.numberToTerraform(this._minGroupCount),
      name: cdktf.stringToTerraform(this._name),
      platform_jwt_auth: cdktf.booleanToTerraform(this._platformJwtAuth),
      polling_options: dwVwHivePollingOptionsToTerraform(this._pollingOptions.internalValue),
      scale_wait_time_seconds: cdktf.numberToTerraform(this._scaleWaitTimeSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_suspend_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._autoSuspendTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aws_options: {
        value: dwVwHiveAwsOptionsToHclTerraform(this._awsOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwVwHiveAwsOptions",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_catalog_id: {
        value: cdktf.stringToHclTerraform(this._databaseCatalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_auto_suspend: {
        value: cdktf.booleanToHclTerraform(this._disableAutoSuspend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sso: {
        value: cdktf.booleanToHclTerraform(this._enableSso),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_size: {
        value: cdktf.numberToHclTerraform(this._groupSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      headroom: {
        value: cdktf.numberToHclTerraform(this._headroom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      image_version: {
        value: cdktf.stringToHclTerraform(this._imageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ldapGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_concurrent_isolated_queries: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentIsolatedQueries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_group_count: {
        value: cdktf.numberToHclTerraform(this._maxGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_nodes_per_isolated_query: {
        value: cdktf.numberToHclTerraform(this._maxNodesPerIsolatedQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_group_count: {
        value: cdktf.numberToHclTerraform(this._minGroupCount),
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
      platform_jwt_auth: {
        value: cdktf.booleanToHclTerraform(this._platformJwtAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      polling_options: {
        value: dwVwHivePollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwVwHivePollingOptions",
      },
      scale_wait_time_seconds: {
        value: cdktf.numberToHclTerraform(this._scaleWaitTimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
