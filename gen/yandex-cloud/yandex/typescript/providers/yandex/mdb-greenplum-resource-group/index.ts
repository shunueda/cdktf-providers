// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbGreenplumResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster to which resource group belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#cluster_id MdbGreenplumResourceGroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The maximum number of concurrent transactions, including active and idle transactions, that are permitted in the resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#concurrency MdbGreenplumResourceGroup#concurrency}
  */
  readonly concurrency?: number;
  /**
  * The percentage of CPU resources available to this resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#cpu_rate_limit MdbGreenplumResourceGroup#cpu_rate_limit}
  */
  readonly cpuRateLimit?: number;
  /**
  * The percentage of reserved memory resources available to this resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#memory_limit MdbGreenplumResourceGroup#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * The percentage of reserved memory to share across transactions submitted in this resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#memory_shared_quota MdbGreenplumResourceGroup#memory_shared_quota}
  */
  readonly memorySharedQuota?: number;
  /**
  * The memory usage threshold for memory-intensive transactions. When a transaction reaches this threshold, it spills to disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#memory_spill_ratio MdbGreenplumResourceGroup#memory_spill_ratio}
  */
  readonly memorySpillRatio?: number;
  /**
  * The name of the resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#name MdbGreenplumResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#timeouts MdbGreenplumResourceGroup#timeouts}
  */
  readonly timeouts?: MdbGreenplumResourceGroupTimeouts;
}
export interface MdbGreenplumResourceGroupTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#create MdbGreenplumResourceGroup#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#delete MdbGreenplumResourceGroup#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#update MdbGreenplumResourceGroup#update}
  */
  readonly update?: string;
}

export function mdbGreenplumResourceGroupTimeoutsToTerraform(struct?: MdbGreenplumResourceGroupTimeouts | cdktf.IResolvable): any {
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


export function mdbGreenplumResourceGroupTimeoutsToHclTerraform(struct?: MdbGreenplumResourceGroupTimeouts | cdktf.IResolvable): any {
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

export class MdbGreenplumResourceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumResourceGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumResourceGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group yandex_mdb_greenplum_resource_group}
*/
export class MdbGreenplumResourceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_greenplum_resource_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbGreenplumResourceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbGreenplumResourceGroup to import
  * @param importFromId The id of the existing MdbGreenplumResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbGreenplumResourceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_greenplum_resource_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/mdb_greenplum_resource_group yandex_mdb_greenplum_resource_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbGreenplumResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MdbGreenplumResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_greenplum_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._concurrency = config.concurrency;
    this._cpuRateLimit = config.cpuRateLimit;
    this._memoryLimit = config.memoryLimit;
    this._memorySharedQuota = config.memorySharedQuota;
    this._memorySpillRatio = config.memorySpillRatio;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // cpu_rate_limit - computed: false, optional: true, required: false
  private _cpuRateLimit?: number; 
  public get cpuRateLimit() {
    return this.getNumberAttribute('cpu_rate_limit');
  }
  public set cpuRateLimit(value: number) {
    this._cpuRateLimit = value;
  }
  public resetCpuRateLimit() {
    this._cpuRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRateLimitInput() {
    return this._cpuRateLimit;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_user_defined - computed: true, optional: false, required: false
  public get isUserDefined() {
    return this.getBooleanAttribute('is_user_defined');
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_shared_quota - computed: false, optional: true, required: false
  private _memorySharedQuota?: number; 
  public get memorySharedQuota() {
    return this.getNumberAttribute('memory_shared_quota');
  }
  public set memorySharedQuota(value: number) {
    this._memorySharedQuota = value;
  }
  public resetMemorySharedQuota() {
    this._memorySharedQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySharedQuotaInput() {
    return this._memorySharedQuota;
  }

  // memory_spill_ratio - computed: false, optional: true, required: false
  private _memorySpillRatio?: number; 
  public get memorySpillRatio() {
    return this.getNumberAttribute('memory_spill_ratio');
  }
  public set memorySpillRatio(value: number) {
    this._memorySpillRatio = value;
  }
  public resetMemorySpillRatio() {
    this._memorySpillRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySpillRatioInput() {
    return this._memorySpillRatio;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbGreenplumResourceGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbGreenplumResourceGroupTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      concurrency: cdktf.numberToTerraform(this._concurrency),
      cpu_rate_limit: cdktf.numberToTerraform(this._cpuRateLimit),
      memory_limit: cdktf.numberToTerraform(this._memoryLimit),
      memory_shared_quota: cdktf.numberToTerraform(this._memorySharedQuota),
      memory_spill_ratio: cdktf.numberToTerraform(this._memorySpillRatio),
      name: cdktf.stringToTerraform(this._name),
      timeouts: mdbGreenplumResourceGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrency: {
        value: cdktf.numberToHclTerraform(this._concurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_rate_limit: {
        value: cdktf.numberToHclTerraform(this._cpuRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_limit: {
        value: cdktf.numberToHclTerraform(this._memoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_shared_quota: {
        value: cdktf.numberToHclTerraform(this._memorySharedQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_spill_ratio: {
        value: cdktf.numberToHclTerraform(this._memorySpillRatio),
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
      timeouts: {
        value: mdbGreenplumResourceGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumResourceGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
