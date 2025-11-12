// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BdsBdsInstanceOsPatchActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}
  */
  readonly clusterAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#is_dry_run BdsBdsInstanceOsPatchAction#is_dry_run}
  */
  readonly isDryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}
  */
  readonly osPatchVersion: string;
  /**
  * patching_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#patching_configs BdsBdsInstanceOsPatchAction#patching_configs}
  */
  readonly patchingConfigs?: BdsBdsInstanceOsPatchActionPatchingConfigs;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#timeouts BdsBdsInstanceOsPatchAction#timeouts}
  */
  readonly timeouts?: BdsBdsInstanceOsPatchActionTimeouts;
}
export interface BdsBdsInstanceOsPatchActionPatchingConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#batch_size BdsBdsInstanceOsPatchAction#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#patching_config_strategy BdsBdsInstanceOsPatchAction#patching_config_strategy}
  */
  readonly patchingConfigStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_batch BdsBdsInstanceOsPatchAction#tolerance_threshold_per_batch}
  */
  readonly toleranceThresholdPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_domain BdsBdsInstanceOsPatchAction#tolerance_threshold_per_domain}
  */
  readonly toleranceThresholdPerDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_batch_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_batch_in_seconds}
  */
  readonly waitTimeBetweenBatchInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_domain_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_domain_in_seconds}
  */
  readonly waitTimeBetweenDomainInSeconds?: number;
}

export function bdsBdsInstanceOsPatchActionPatchingConfigsToTerraform(struct?: BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference | BdsBdsInstanceOsPatchActionPatchingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    patching_config_strategy: cdktf.stringToTerraform(struct!.patchingConfigStrategy),
    tolerance_threshold_per_batch: cdktf.numberToTerraform(struct!.toleranceThresholdPerBatch),
    tolerance_threshold_per_domain: cdktf.numberToTerraform(struct!.toleranceThresholdPerDomain),
    wait_time_between_batch_in_seconds: cdktf.numberToTerraform(struct!.waitTimeBetweenBatchInSeconds),
    wait_time_between_domain_in_seconds: cdktf.numberToTerraform(struct!.waitTimeBetweenDomainInSeconds),
  }
}


export function bdsBdsInstanceOsPatchActionPatchingConfigsToHclTerraform(struct?: BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference | BdsBdsInstanceOsPatchActionPatchingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    patching_config_strategy: {
      value: cdktf.stringToHclTerraform(struct!.patchingConfigStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerance_threshold_per_batch: {
      value: cdktf.numberToHclTerraform(struct!.toleranceThresholdPerBatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerance_threshold_per_domain: {
      value: cdktf.numberToHclTerraform(struct!.toleranceThresholdPerDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_time_between_batch_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitTimeBetweenBatchInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_time_between_domain_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitTimeBetweenDomainInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceOsPatchActionPatchingConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._patchingConfigStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchingConfigStrategy = this._patchingConfigStrategy;
    }
    if (this._toleranceThresholdPerBatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleranceThresholdPerBatch = this._toleranceThresholdPerBatch;
    }
    if (this._toleranceThresholdPerDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleranceThresholdPerDomain = this._toleranceThresholdPerDomain;
    }
    if (this._waitTimeBetweenBatchInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeBetweenBatchInSeconds = this._waitTimeBetweenBatchInSeconds;
    }
    if (this._waitTimeBetweenDomainInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeBetweenDomainInSeconds = this._waitTimeBetweenDomainInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceOsPatchActionPatchingConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSize = undefined;
      this._patchingConfigStrategy = undefined;
      this._toleranceThresholdPerBatch = undefined;
      this._toleranceThresholdPerDomain = undefined;
      this._waitTimeBetweenBatchInSeconds = undefined;
      this._waitTimeBetweenDomainInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSize = value.batchSize;
      this._patchingConfigStrategy = value.patchingConfigStrategy;
      this._toleranceThresholdPerBatch = value.toleranceThresholdPerBatch;
      this._toleranceThresholdPerDomain = value.toleranceThresholdPerDomain;
      this._waitTimeBetweenBatchInSeconds = value.waitTimeBetweenBatchInSeconds;
      this._waitTimeBetweenDomainInSeconds = value.waitTimeBetweenDomainInSeconds;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // patching_config_strategy - computed: false, optional: false, required: true
  private _patchingConfigStrategy?: string; 
  public get patchingConfigStrategy() {
    return this.getStringAttribute('patching_config_strategy');
  }
  public set patchingConfigStrategy(value: string) {
    this._patchingConfigStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchingConfigStrategyInput() {
    return this._patchingConfigStrategy;
  }

  // tolerance_threshold_per_batch - computed: true, optional: true, required: false
  private _toleranceThresholdPerBatch?: number; 
  public get toleranceThresholdPerBatch() {
    return this.getNumberAttribute('tolerance_threshold_per_batch');
  }
  public set toleranceThresholdPerBatch(value: number) {
    this._toleranceThresholdPerBatch = value;
  }
  public resetToleranceThresholdPerBatch() {
    this._toleranceThresholdPerBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceThresholdPerBatchInput() {
    return this._toleranceThresholdPerBatch;
  }

  // tolerance_threshold_per_domain - computed: true, optional: true, required: false
  private _toleranceThresholdPerDomain?: number; 
  public get toleranceThresholdPerDomain() {
    return this.getNumberAttribute('tolerance_threshold_per_domain');
  }
  public set toleranceThresholdPerDomain(value: number) {
    this._toleranceThresholdPerDomain = value;
  }
  public resetToleranceThresholdPerDomain() {
    this._toleranceThresholdPerDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceThresholdPerDomainInput() {
    return this._toleranceThresholdPerDomain;
  }

  // wait_time_between_batch_in_seconds - computed: true, optional: true, required: false
  private _waitTimeBetweenBatchInSeconds?: number; 
  public get waitTimeBetweenBatchInSeconds() {
    return this.getNumberAttribute('wait_time_between_batch_in_seconds');
  }
  public set waitTimeBetweenBatchInSeconds(value: number) {
    this._waitTimeBetweenBatchInSeconds = value;
  }
  public resetWaitTimeBetweenBatchInSeconds() {
    this._waitTimeBetweenBatchInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeBetweenBatchInSecondsInput() {
    return this._waitTimeBetweenBatchInSeconds;
  }

  // wait_time_between_domain_in_seconds - computed: true, optional: true, required: false
  private _waitTimeBetweenDomainInSeconds?: number; 
  public get waitTimeBetweenDomainInSeconds() {
    return this.getNumberAttribute('wait_time_between_domain_in_seconds');
  }
  public set waitTimeBetweenDomainInSeconds(value: number) {
    this._waitTimeBetweenDomainInSeconds = value;
  }
  public resetWaitTimeBetweenDomainInSeconds() {
    this._waitTimeBetweenDomainInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeBetweenDomainInSecondsInput() {
    return this._waitTimeBetweenDomainInSeconds;
  }
}
export interface BdsBdsInstanceOsPatchActionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#create BdsBdsInstanceOsPatchAction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#delete BdsBdsInstanceOsPatchAction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#update BdsBdsInstanceOsPatchAction#update}
  */
  readonly update?: string;
}

export function bdsBdsInstanceOsPatchActionTimeoutsToTerraform(struct?: BdsBdsInstanceOsPatchActionTimeouts | cdktf.IResolvable): any {
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


export function bdsBdsInstanceOsPatchActionTimeoutsToHclTerraform(struct?: BdsBdsInstanceOsPatchActionTimeouts | cdktf.IResolvable): any {
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

export class BdsBdsInstanceOsPatchActionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BdsBdsInstanceOsPatchActionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BdsBdsInstanceOsPatchActionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action oci_bds_bds_instance_os_patch_action}
*/
export class BdsBdsInstanceOsPatchAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_os_patch_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BdsBdsInstanceOsPatchAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BdsBdsInstanceOsPatchAction to import
  * @param importFromId The id of the existing BdsBdsInstanceOsPatchAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BdsBdsInstanceOsPatchAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_os_patch_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance_os_patch_action oci_bds_bds_instance_os_patch_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BdsBdsInstanceOsPatchActionConfig
  */
  public constructor(scope: Construct, id: string, config: BdsBdsInstanceOsPatchActionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_os_patch_action',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bdsInstanceId = config.bdsInstanceId;
    this._clusterAdminPassword = config.clusterAdminPassword;
    this._id = config.id;
    this._isDryRun = config.isDryRun;
    this._osPatchVersion = config.osPatchVersion;
    this._patchingConfigs.internalValue = config.patchingConfigs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
  }

  // cluster_admin_password - computed: false, optional: false, required: true
  private _clusterAdminPassword?: string; 
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }
  public set clusterAdminPassword(value: string) {
    this._clusterAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdminPasswordInput() {
    return this._clusterAdminPassword;
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

  // is_dry_run - computed: false, optional: true, required: false
  private _isDryRun?: boolean | cdktf.IResolvable; 
  public get isDryRun() {
    return this.getBooleanAttribute('is_dry_run');
  }
  public set isDryRun(value: boolean | cdktf.IResolvable) {
    this._isDryRun = value;
  }
  public resetIsDryRun() {
    this._isDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDryRunInput() {
    return this._isDryRun;
  }

  // os_patch_version - computed: false, optional: false, required: true
  private _osPatchVersion?: string; 
  public get osPatchVersion() {
    return this.getStringAttribute('os_patch_version');
  }
  public set osPatchVersion(value: string) {
    this._osPatchVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osPatchVersionInput() {
    return this._osPatchVersion;
  }

  // patching_configs - computed: false, optional: true, required: false
  private _patchingConfigs = new BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference(this, "patching_configs");
  public get patchingConfigs() {
    return this._patchingConfigs;
  }
  public putPatchingConfigs(value: BdsBdsInstanceOsPatchActionPatchingConfigs) {
    this._patchingConfigs.internalValue = value;
  }
  public resetPatchingConfigs() {
    this._patchingConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchingConfigsInput() {
    return this._patchingConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BdsBdsInstanceOsPatchActionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BdsBdsInstanceOsPatchActionTimeouts) {
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
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      cluster_admin_password: cdktf.stringToTerraform(this._clusterAdminPassword),
      id: cdktf.stringToTerraform(this._id),
      is_dry_run: cdktf.booleanToTerraform(this._isDryRun),
      os_patch_version: cdktf.stringToTerraform(this._osPatchVersion),
      patching_configs: bdsBdsInstanceOsPatchActionPatchingConfigsToTerraform(this._patchingConfigs.internalValue),
      timeouts: bdsBdsInstanceOsPatchActionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_admin_password: {
        value: cdktf.stringToHclTerraform(this._clusterAdminPassword),
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
      is_dry_run: {
        value: cdktf.booleanToHclTerraform(this._isDryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_patch_version: {
        value: cdktf.stringToHclTerraform(this._osPatchVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patching_configs: {
        value: bdsBdsInstanceOsPatchActionPatchingConfigsToHclTerraform(this._patchingConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceOsPatchActionPatchingConfigsList",
      },
      timeouts: {
        value: bdsBdsInstanceOsPatchActionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BdsBdsInstanceOsPatchActionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
