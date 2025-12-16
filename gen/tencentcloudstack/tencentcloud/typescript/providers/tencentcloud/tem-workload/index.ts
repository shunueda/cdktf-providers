// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#application_id TemWorkload#application_id}
  */
  readonly applicationId: string;
  /**
  * cpu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#cpu_spec TemWorkload#cpu_spec}
  */
  readonly cpuSpec: number;
  /**
  * deploy mode, support IMAGE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#deploy_mode TemWorkload#deploy_mode}
  */
  readonly deployMode: string;
  /**
  * deploy version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#deploy_version TemWorkload#deploy_version}
  */
  readonly deployVersion: string;
  /**
  * environment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#environment_id TemWorkload#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#id TemWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#img_repo TemWorkload#img_repo}
  */
  readonly imgRepo: string;
  /**
  * initial pod number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#init_pod_num TemWorkload#init_pod_num}
  */
  readonly initPodNum: number;
  /**
  * mem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#memory_spec TemWorkload#memory_spec}
  */
  readonly memorySpec: number;
  /**
  * mem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#post_start TemWorkload#post_start}
  */
  readonly postStart?: string;
  /**
  * mem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#pre_stop TemWorkload#pre_stop}
  */
  readonly preStop?: string;
  /**
  * repo server addr when deploy by image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#repo_server TemWorkload#repo_server}
  */
  readonly repoServer?: string;
  /**
  * repo type when deploy: 0: tcr personal; 1: tcr enterprise; 2: public repository; 3: tem host tcr; 4: demo repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#repo_type TemWorkload#repo_type}
  */
  readonly repoType?: number;
  /**
  * security groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#security_group_ids TemWorkload#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * tcr instance id when deploy by image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#tcr_instance_id TemWorkload#tcr_instance_id}
  */
  readonly tcrInstanceId?: string;
  /**
  * deploy_strategy_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#deploy_strategy_conf TemWorkload#deploy_strategy_conf}
  */
  readonly deployStrategyConf?: TemWorkloadDeployStrategyConf;
  /**
  * env_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#env_conf TemWorkload#env_conf}
  */
  readonly envConf?: TemWorkloadEnvConf[] | cdktf.IResolvable;
  /**
  * liveness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#liveness TemWorkload#liveness}
  */
  readonly liveness?: TemWorkloadLiveness;
  /**
  * readiness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#readiness TemWorkload#readiness}
  */
  readonly readiness?: TemWorkloadReadiness;
  /**
  * startup_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#startup_probe TemWorkload#startup_probe}
  */
  readonly startupProbe?: TemWorkloadStartupProbe;
  /**
  * storage_confs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#storage_confs TemWorkload#storage_confs}
  */
  readonly storageConfs?: TemWorkloadStorageConfs[] | cdktf.IResolvable;
  /**
  * storage_mount_confs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#storage_mount_confs TemWorkload#storage_mount_confs}
  */
  readonly storageMountConfs?: TemWorkloadStorageMountConfs[] | cdktf.IResolvable;
}
export interface TemWorkloadDeployStrategyConf {
  /**
  * interval between batches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#batch_interval TemWorkload#batch_interval}
  */
  readonly batchInterval?: number;
  /**
  * beta batch number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#beta_batch_num TemWorkload#beta_batch_num}
  */
  readonly betaBatchNum?: number;
  /**
  * strategy type, 0 means auto, 1 means manual, 2 means manual with beta batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#deploy_strategy_type TemWorkload#deploy_strategy_type}
  */
  readonly deployStrategyType: number;
  /**
  * force update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#force TemWorkload#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * minimal available instances duration deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#min_available TemWorkload#min_available}
  */
  readonly minAvailable?: number;
  /**
  * total batch number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#total_batch_count TemWorkload#total_batch_count}
  */
  readonly totalBatchCount: number;
}

export function temWorkloadDeployStrategyConfToTerraform(struct?: TemWorkloadDeployStrategyConfOutputReference | TemWorkloadDeployStrategyConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_interval: cdktf.numberToTerraform(struct!.batchInterval),
    beta_batch_num: cdktf.numberToTerraform(struct!.betaBatchNum),
    deploy_strategy_type: cdktf.numberToTerraform(struct!.deployStrategyType),
    force: cdktf.booleanToTerraform(struct!.force),
    min_available: cdktf.numberToTerraform(struct!.minAvailable),
    total_batch_count: cdktf.numberToTerraform(struct!.totalBatchCount),
  }
}


export function temWorkloadDeployStrategyConfToHclTerraform(struct?: TemWorkloadDeployStrategyConfOutputReference | TemWorkloadDeployStrategyConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_interval: {
      value: cdktf.numberToHclTerraform(struct!.batchInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    beta_batch_num: {
      value: cdktf.numberToHclTerraform(struct!.betaBatchNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deploy_strategy_type: {
      value: cdktf.numberToHclTerraform(struct!.deployStrategyType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_available: {
      value: cdktf.numberToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_batch_count: {
      value: cdktf.numberToHclTerraform(struct!.totalBatchCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemWorkloadDeployStrategyConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemWorkloadDeployStrategyConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchInterval = this._batchInterval;
    }
    if (this._betaBatchNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.betaBatchNum = this._betaBatchNum;
    }
    if (this._deployStrategyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployStrategyType = this._deployStrategyType;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    if (this._totalBatchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBatchCount = this._totalBatchCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemWorkloadDeployStrategyConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchInterval = undefined;
      this._betaBatchNum = undefined;
      this._deployStrategyType = undefined;
      this._force = undefined;
      this._minAvailable = undefined;
      this._totalBatchCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchInterval = value.batchInterval;
      this._betaBatchNum = value.betaBatchNum;
      this._deployStrategyType = value.deployStrategyType;
      this._force = value.force;
      this._minAvailable = value.minAvailable;
      this._totalBatchCount = value.totalBatchCount;
    }
  }

  // batch_interval - computed: false, optional: true, required: false
  private _batchInterval?: number; 
  public get batchInterval() {
    return this.getNumberAttribute('batch_interval');
  }
  public set batchInterval(value: number) {
    this._batchInterval = value;
  }
  public resetBatchInterval() {
    this._batchInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchIntervalInput() {
    return this._batchInterval;
  }

  // beta_batch_num - computed: false, optional: true, required: false
  private _betaBatchNum?: number; 
  public get betaBatchNum() {
    return this.getNumberAttribute('beta_batch_num');
  }
  public set betaBatchNum(value: number) {
    this._betaBatchNum = value;
  }
  public resetBetaBatchNum() {
    this._betaBatchNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betaBatchNumInput() {
    return this._betaBatchNum;
  }

  // deploy_strategy_type - computed: false, optional: false, required: true
  private _deployStrategyType?: number; 
  public get deployStrategyType() {
    return this.getNumberAttribute('deploy_strategy_type');
  }
  public set deployStrategyType(value: number) {
    this._deployStrategyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployStrategyTypeInput() {
    return this._deployStrategyType;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // min_available - computed: false, optional: true, required: false
  private _minAvailable?: number; 
  public get minAvailable() {
    return this.getNumberAttribute('min_available');
  }
  public set minAvailable(value: number) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
  }

  // total_batch_count - computed: false, optional: false, required: true
  private _totalBatchCount?: number; 
  public get totalBatchCount() {
    return this.getNumberAttribute('total_batch_count');
  }
  public set totalBatchCount(value: number) {
    this._totalBatchCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBatchCountInput() {
    return this._totalBatchCount;
  }
}
export interface TemWorkloadEnvConf {
  /**
  * referenced config name when type=referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#config TemWorkload#config}
  */
  readonly config?: string;
  /**
  * env key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#key TemWorkload#key}
  */
  readonly key: string;
  /**
  * referenced secret name when type=referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#secret TemWorkload#secret}
  */
  readonly secret?: string;
  /**
  * env type, support default, referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#type TemWorkload#type}
  */
  readonly type?: string;
  /**
  * env value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#value TemWorkload#value}
  */
  readonly value: string;
}

export function temWorkloadEnvConfToTerraform(struct?: TemWorkloadEnvConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function temWorkloadEnvConfToHclTerraform(struct?: TemWorkloadEnvConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemWorkloadEnvConfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemWorkloadEnvConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemWorkloadEnvConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._key = undefined;
      this._secret = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._key = value.key;
      this._secret = value.secret;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemWorkloadEnvConfList extends cdktf.ComplexList {
  public internalValue? : TemWorkloadEnvConf[] | cdktf.IResolvable

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
  public get(index: number): TemWorkloadEnvConfOutputReference {
    return new TemWorkloadEnvConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemWorkloadLiveness {
  /**
  * script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#exec TemWorkload#exec}
  */
  readonly exec?: string;
  /**
  * initial delay seconds for liveness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#initial_delay_seconds TemWorkload#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#path TemWorkload#path}
  */
  readonly path?: string;
  /**
  * period seconds for liveness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#period_seconds TemWorkload#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * liveness check port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#port TemWorkload#port}
  */
  readonly port?: number;
  /**
  * protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#protocol TemWorkload#protocol}
  */
  readonly protocol?: string;
  /**
  * timeout seconds for liveness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#timeout_seconds TemWorkload#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * check type, support HttpGet, TcpSocket and Exec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#type TemWorkload#type}
  */
  readonly type: string;
}

export function temWorkloadLivenessToTerraform(struct?: TemWorkloadLivenessOutputReference | TemWorkloadLiveness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.stringToTerraform(struct!.exec),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    path: cdktf.stringToTerraform(struct!.path),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function temWorkloadLivenessToHclTerraform(struct?: TemWorkloadLivenessOutputReference | TemWorkloadLiveness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: cdktf.stringToHclTerraform(struct!.exec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
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

export class TemWorkloadLivenessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemWorkloadLiveness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemWorkloadLiveness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exec = undefined;
      this._initialDelaySeconds = undefined;
      this._path = undefined;
      this._periodSeconds = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeoutSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exec = value.exec;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._path = value.path;
      this._periodSeconds = value.periodSeconds;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeoutSeconds = value.timeoutSeconds;
      this._type = value.type;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string; 
  public get exec() {
    return this.getStringAttribute('exec');
  }
  public set exec(value: string) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
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
}
export interface TemWorkloadReadiness {
  /**
  * script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#exec TemWorkload#exec}
  */
  readonly exec?: string;
  /**
  * initial delay seconds for readiness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#initial_delay_seconds TemWorkload#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#path TemWorkload#path}
  */
  readonly path?: string;
  /**
  * period seconds for readiness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#period_seconds TemWorkload#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * readiness check port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#port TemWorkload#port}
  */
  readonly port?: number;
  /**
  * protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#protocol TemWorkload#protocol}
  */
  readonly protocol?: string;
  /**
  * timeout seconds for readiness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#timeout_seconds TemWorkload#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * check type, support HttpGet, TcpSocket and Exec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#type TemWorkload#type}
  */
  readonly type: string;
}

export function temWorkloadReadinessToTerraform(struct?: TemWorkloadReadinessOutputReference | TemWorkloadReadiness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.stringToTerraform(struct!.exec),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    path: cdktf.stringToTerraform(struct!.path),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function temWorkloadReadinessToHclTerraform(struct?: TemWorkloadReadinessOutputReference | TemWorkloadReadiness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: cdktf.stringToHclTerraform(struct!.exec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
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

export class TemWorkloadReadinessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemWorkloadReadiness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemWorkloadReadiness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exec = undefined;
      this._initialDelaySeconds = undefined;
      this._path = undefined;
      this._periodSeconds = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeoutSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exec = value.exec;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._path = value.path;
      this._periodSeconds = value.periodSeconds;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeoutSeconds = value.timeoutSeconds;
      this._type = value.type;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string; 
  public get exec() {
    return this.getStringAttribute('exec');
  }
  public set exec(value: string) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
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
}
export interface TemWorkloadStartupProbe {
  /**
  * script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#exec TemWorkload#exec}
  */
  readonly exec?: string;
  /**
  * initial delay seconds for startup check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#initial_delay_seconds TemWorkload#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#path TemWorkload#path}
  */
  readonly path?: string;
  /**
  * period seconds for startup check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#period_seconds TemWorkload#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * startup check port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#port TemWorkload#port}
  */
  readonly port?: number;
  /**
  * protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#protocol TemWorkload#protocol}
  */
  readonly protocol?: string;
  /**
  * timeout seconds for startup check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#timeout_seconds TemWorkload#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * check type, support HttpGet, TcpSocket and Exec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#type TemWorkload#type}
  */
  readonly type: string;
}

export function temWorkloadStartupProbeToTerraform(struct?: TemWorkloadStartupProbeOutputReference | TemWorkloadStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.stringToTerraform(struct!.exec),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    path: cdktf.stringToTerraform(struct!.path),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function temWorkloadStartupProbeToHclTerraform(struct?: TemWorkloadStartupProbeOutputReference | TemWorkloadStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: cdktf.stringToHclTerraform(struct!.exec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
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

export class TemWorkloadStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemWorkloadStartupProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemWorkloadStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exec = undefined;
      this._initialDelaySeconds = undefined;
      this._path = undefined;
      this._periodSeconds = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeoutSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exec = value.exec;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._path = value.path;
      this._periodSeconds = value.periodSeconds;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeoutSeconds = value.timeoutSeconds;
      this._type = value.type;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string; 
  public get exec() {
    return this.getStringAttribute('exec');
  }
  public set exec(value: string) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
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
}
export interface TemWorkloadStorageConfs {
  /**
  * volume ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#storage_vol_ip TemWorkload#storage_vol_ip}
  */
  readonly storageVolIp: string;
  /**
  * volume name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#storage_vol_name TemWorkload#storage_vol_name}
  */
  readonly storageVolName: string;
  /**
  * volume path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#storage_vol_path TemWorkload#storage_vol_path}
  */
  readonly storageVolPath: string;
}

export function temWorkloadStorageConfsToTerraform(struct?: TemWorkloadStorageConfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_vol_ip: cdktf.stringToTerraform(struct!.storageVolIp),
    storage_vol_name: cdktf.stringToTerraform(struct!.storageVolName),
    storage_vol_path: cdktf.stringToTerraform(struct!.storageVolPath),
  }
}


export function temWorkloadStorageConfsToHclTerraform(struct?: TemWorkloadStorageConfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_vol_ip: {
      value: cdktf.stringToHclTerraform(struct!.storageVolIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_vol_name: {
      value: cdktf.stringToHclTerraform(struct!.storageVolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_vol_path: {
      value: cdktf.stringToHclTerraform(struct!.storageVolPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemWorkloadStorageConfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemWorkloadStorageConfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageVolIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageVolIp = this._storageVolIp;
    }
    if (this._storageVolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageVolName = this._storageVolName;
    }
    if (this._storageVolPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageVolPath = this._storageVolPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemWorkloadStorageConfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageVolIp = undefined;
      this._storageVolName = undefined;
      this._storageVolPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageVolIp = value.storageVolIp;
      this._storageVolName = value.storageVolName;
      this._storageVolPath = value.storageVolPath;
    }
  }

  // storage_vol_ip - computed: false, optional: false, required: true
  private _storageVolIp?: string; 
  public get storageVolIp() {
    return this.getStringAttribute('storage_vol_ip');
  }
  public set storageVolIp(value: string) {
    this._storageVolIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVolIpInput() {
    return this._storageVolIp;
  }

  // storage_vol_name - computed: false, optional: false, required: true
  private _storageVolName?: string; 
  public get storageVolName() {
    return this.getStringAttribute('storage_vol_name');
  }
  public set storageVolName(value: string) {
    this._storageVolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVolNameInput() {
    return this._storageVolName;
  }

  // storage_vol_path - computed: false, optional: false, required: true
  private _storageVolPath?: string; 
  public get storageVolPath() {
    return this.getStringAttribute('storage_vol_path');
  }
  public set storageVolPath(value: string) {
    this._storageVolPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVolPathInput() {
    return this._storageVolPath;
  }
}

export class TemWorkloadStorageConfsList extends cdktf.ComplexList {
  public internalValue? : TemWorkloadStorageConfs[] | cdktf.IResolvable

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
  public get(index: number): TemWorkloadStorageConfsOutputReference {
    return new TemWorkloadStorageConfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemWorkloadStorageMountConfs {
  /**
  * mount path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#mount_path TemWorkload#mount_path}
  */
  readonly mountPath: string;
  /**
  * volume name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#volume_name TemWorkload#volume_name}
  */
  readonly volumeName: string;
}

export function temWorkloadStorageMountConfsToTerraform(struct?: TemWorkloadStorageMountConfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function temWorkloadStorageMountConfsToHclTerraform(struct?: TemWorkloadStorageMountConfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemWorkloadStorageMountConfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemWorkloadStorageMountConfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemWorkloadStorageMountConfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._volumeName = value.volumeName;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class TemWorkloadStorageMountConfsList extends cdktf.ComplexList {
  public internalValue? : TemWorkloadStorageMountConfs[] | cdktf.IResolvable

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
  public get(index: number): TemWorkloadStorageMountConfsOutputReference {
    return new TemWorkloadStorageMountConfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload tencentcloud_tem_workload}
*/
export class TemWorkload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tem_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemWorkload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemWorkload to import
  * @param importFromId The id of the existing TemWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tem_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tem_workload tencentcloud_tem_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: TemWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tem_workload',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._cpuSpec = config.cpuSpec;
    this._deployMode = config.deployMode;
    this._deployVersion = config.deployVersion;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._imgRepo = config.imgRepo;
    this._initPodNum = config.initPodNum;
    this._memorySpec = config.memorySpec;
    this._postStart = config.postStart;
    this._preStop = config.preStop;
    this._repoServer = config.repoServer;
    this._repoType = config.repoType;
    this._securityGroupIds = config.securityGroupIds;
    this._tcrInstanceId = config.tcrInstanceId;
    this._deployStrategyConf.internalValue = config.deployStrategyConf;
    this._envConf.internalValue = config.envConf;
    this._liveness.internalValue = config.liveness;
    this._readiness.internalValue = config.readiness;
    this._startupProbe.internalValue = config.startupProbe;
    this._storageConfs.internalValue = config.storageConfs;
    this._storageMountConfs.internalValue = config.storageMountConfs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // cpu_spec - computed: false, optional: false, required: true
  private _cpuSpec?: number; 
  public get cpuSpec() {
    return this.getNumberAttribute('cpu_spec');
  }
  public set cpuSpec(value: number) {
    this._cpuSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSpecInput() {
    return this._cpuSpec;
  }

  // deploy_mode - computed: false, optional: false, required: true
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // deploy_version - computed: false, optional: false, required: true
  private _deployVersion?: string; 
  public get deployVersion() {
    return this.getStringAttribute('deploy_version');
  }
  public set deployVersion(value: string) {
    this._deployVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployVersionInput() {
    return this._deployVersion;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // img_repo - computed: false, optional: false, required: true
  private _imgRepo?: string; 
  public get imgRepo() {
    return this.getStringAttribute('img_repo');
  }
  public set imgRepo(value: string) {
    this._imgRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imgRepoInput() {
    return this._imgRepo;
  }

  // init_pod_num - computed: false, optional: false, required: true
  private _initPodNum?: number; 
  public get initPodNum() {
    return this.getNumberAttribute('init_pod_num');
  }
  public set initPodNum(value: number) {
    this._initPodNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initPodNumInput() {
    return this._initPodNum;
  }

  // memory_spec - computed: false, optional: false, required: true
  private _memorySpec?: number; 
  public get memorySpec() {
    return this.getNumberAttribute('memory_spec');
  }
  public set memorySpec(value: number) {
    this._memorySpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySpecInput() {
    return this._memorySpec;
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: string; 
  public get postStart() {
    return this.getStringAttribute('post_start');
  }
  public set postStart(value: string) {
    this._postStart = value;
  }
  public resetPostStart() {
    this._postStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart;
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop?: string; 
  public get preStop() {
    return this.getStringAttribute('pre_stop');
  }
  public set preStop(value: string) {
    this._preStop = value;
  }
  public resetPreStop() {
    this._preStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop;
  }

  // repo_server - computed: false, optional: true, required: false
  private _repoServer?: string; 
  public get repoServer() {
    return this.getStringAttribute('repo_server');
  }
  public set repoServer(value: string) {
    this._repoServer = value;
  }
  public resetRepoServer() {
    this._repoServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoServerInput() {
    return this._repoServer;
  }

  // repo_type - computed: false, optional: true, required: false
  private _repoType?: number; 
  public get repoType() {
    return this.getNumberAttribute('repo_type');
  }
  public set repoType(value: number) {
    this._repoType = value;
  }
  public resetRepoType() {
    this._repoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypeInput() {
    return this._repoType;
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

  // tcr_instance_id - computed: false, optional: true, required: false
  private _tcrInstanceId?: string; 
  public get tcrInstanceId() {
    return this.getStringAttribute('tcr_instance_id');
  }
  public set tcrInstanceId(value: string) {
    this._tcrInstanceId = value;
  }
  public resetTcrInstanceId() {
    this._tcrInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcrInstanceIdInput() {
    return this._tcrInstanceId;
  }

  // deploy_strategy_conf - computed: false, optional: true, required: false
  private _deployStrategyConf = new TemWorkloadDeployStrategyConfOutputReference(this, "deploy_strategy_conf");
  public get deployStrategyConf() {
    return this._deployStrategyConf;
  }
  public putDeployStrategyConf(value: TemWorkloadDeployStrategyConf) {
    this._deployStrategyConf.internalValue = value;
  }
  public resetDeployStrategyConf() {
    this._deployStrategyConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployStrategyConfInput() {
    return this._deployStrategyConf.internalValue;
  }

  // env_conf - computed: false, optional: true, required: false
  private _envConf = new TemWorkloadEnvConfList(this, "env_conf", false);
  public get envConf() {
    return this._envConf;
  }
  public putEnvConf(value: TemWorkloadEnvConf[] | cdktf.IResolvable) {
    this._envConf.internalValue = value;
  }
  public resetEnvConf() {
    this._envConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envConfInput() {
    return this._envConf.internalValue;
  }

  // liveness - computed: false, optional: true, required: false
  private _liveness = new TemWorkloadLivenessOutputReference(this, "liveness");
  public get liveness() {
    return this._liveness;
  }
  public putLiveness(value: TemWorkloadLiveness) {
    this._liveness.internalValue = value;
  }
  public resetLiveness() {
    this._liveness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessInput() {
    return this._liveness.internalValue;
  }

  // readiness - computed: false, optional: true, required: false
  private _readiness = new TemWorkloadReadinessOutputReference(this, "readiness");
  public get readiness() {
    return this._readiness;
  }
  public putReadiness(value: TemWorkloadReadiness) {
    this._readiness.internalValue = value;
  }
  public resetReadiness() {
    this._readiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessInput() {
    return this._readiness.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new TemWorkloadStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: TemWorkloadStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }

  // storage_confs - computed: false, optional: true, required: false
  private _storageConfs = new TemWorkloadStorageConfsList(this, "storage_confs", false);
  public get storageConfs() {
    return this._storageConfs;
  }
  public putStorageConfs(value: TemWorkloadStorageConfs[] | cdktf.IResolvable) {
    this._storageConfs.internalValue = value;
  }
  public resetStorageConfs() {
    this._storageConfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfsInput() {
    return this._storageConfs.internalValue;
  }

  // storage_mount_confs - computed: false, optional: true, required: false
  private _storageMountConfs = new TemWorkloadStorageMountConfsList(this, "storage_mount_confs", false);
  public get storageMountConfs() {
    return this._storageMountConfs;
  }
  public putStorageMountConfs(value: TemWorkloadStorageMountConfs[] | cdktf.IResolvable) {
    this._storageMountConfs.internalValue = value;
  }
  public resetStorageMountConfs() {
    this._storageMountConfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMountConfsInput() {
    return this._storageMountConfs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      cpu_spec: cdktf.numberToTerraform(this._cpuSpec),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      deploy_version: cdktf.stringToTerraform(this._deployVersion),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      img_repo: cdktf.stringToTerraform(this._imgRepo),
      init_pod_num: cdktf.numberToTerraform(this._initPodNum),
      memory_spec: cdktf.numberToTerraform(this._memorySpec),
      post_start: cdktf.stringToTerraform(this._postStart),
      pre_stop: cdktf.stringToTerraform(this._preStop),
      repo_server: cdktf.stringToTerraform(this._repoServer),
      repo_type: cdktf.numberToTerraform(this._repoType),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      tcr_instance_id: cdktf.stringToTerraform(this._tcrInstanceId),
      deploy_strategy_conf: temWorkloadDeployStrategyConfToTerraform(this._deployStrategyConf.internalValue),
      env_conf: cdktf.listMapper(temWorkloadEnvConfToTerraform, true)(this._envConf.internalValue),
      liveness: temWorkloadLivenessToTerraform(this._liveness.internalValue),
      readiness: temWorkloadReadinessToTerraform(this._readiness.internalValue),
      startup_probe: temWorkloadStartupProbeToTerraform(this._startupProbe.internalValue),
      storage_confs: cdktf.listMapper(temWorkloadStorageConfsToTerraform, true)(this._storageConfs.internalValue),
      storage_mount_confs: cdktf.listMapper(temWorkloadStorageMountConfsToTerraform, true)(this._storageMountConfs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_spec: {
        value: cdktf.numberToHclTerraform(this._cpuSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_version: {
        value: cdktf.stringToHclTerraform(this._deployVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      img_repo: {
        value: cdktf.stringToHclTerraform(this._imgRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init_pod_num: {
        value: cdktf.numberToHclTerraform(this._initPodNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_spec: {
        value: cdktf.numberToHclTerraform(this._memorySpec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      post_start: {
        value: cdktf.stringToHclTerraform(this._postStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_stop: {
        value: cdktf.stringToHclTerraform(this._preStop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_server: {
        value: cdktf.stringToHclTerraform(this._repoServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_type: {
        value: cdktf.numberToHclTerraform(this._repoType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tcr_instance_id: {
        value: cdktf.stringToHclTerraform(this._tcrInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_strategy_conf: {
        value: temWorkloadDeployStrategyConfToHclTerraform(this._deployStrategyConf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemWorkloadDeployStrategyConfList",
      },
      env_conf: {
        value: cdktf.listMapperHcl(temWorkloadEnvConfToHclTerraform, true)(this._envConf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemWorkloadEnvConfList",
      },
      liveness: {
        value: temWorkloadLivenessToHclTerraform(this._liveness.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemWorkloadLivenessList",
      },
      readiness: {
        value: temWorkloadReadinessToHclTerraform(this._readiness.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemWorkloadReadinessList",
      },
      startup_probe: {
        value: temWorkloadStartupProbeToHclTerraform(this._startupProbe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemWorkloadStartupProbeList",
      },
      storage_confs: {
        value: cdktf.listMapperHcl(temWorkloadStorageConfsToHclTerraform, true)(this._storageConfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemWorkloadStorageConfsList",
      },
      storage_mount_confs: {
        value: cdktf.listMapperHcl(temWorkloadStorageMountConfsToHclTerraform, true)(this._storageMountConfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemWorkloadStorageMountConfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
