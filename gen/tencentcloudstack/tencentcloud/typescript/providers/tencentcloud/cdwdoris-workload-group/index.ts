// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdwdorisWorkloadGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group#id CdwdorisWorkloadGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group#instance_id CdwdorisWorkloadGroup#instance_id}
  */
  readonly instanceId: string;
  /**
  * workload_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group#workload_group CdwdorisWorkloadGroup#workload_group}
  */
  readonly workloadGroup?: CdwdorisWorkloadGroupWorkloadGroup;
}
export interface CdwdorisWorkloadGroupWorkloadGroup {
  /**
  * Cpu hard limit. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group#cpu_hard_limit CdwdorisWorkloadGroup#cpu_hard_limit}
  */
  readonly cpuHardLimit?: string;
  /**
  * CPU weight. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group#cpu_share CdwdorisWorkloadGroup#cpu_share}
  */
  readonly cpuShare?: number;
  /**
  * Whether to allow over-allocation. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group#enable_memory_over_commit CdwdorisWorkloadGroup#enable_memory_over_commit}
  */
  readonly enableMemoryOverCommit?: boolean | cdktf.IResolvable;
  /**
  * Memory limit, the sum of the memory limit values of all resource groups should be less than or equal to 100. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group#memory_limit CdwdorisWorkloadGroup#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Workload group name. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group#workload_group_name CdwdorisWorkloadGroup#workload_group_name}
  */
  readonly workloadGroupName?: string;
}

export function cdwdorisWorkloadGroupWorkloadGroupToTerraform(struct?: CdwdorisWorkloadGroupWorkloadGroupOutputReference | CdwdorisWorkloadGroupWorkloadGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_hard_limit: cdktf.stringToTerraform(struct!.cpuHardLimit),
    cpu_share: cdktf.numberToTerraform(struct!.cpuShare),
    enable_memory_over_commit: cdktf.booleanToTerraform(struct!.enableMemoryOverCommit),
    memory_limit: cdktf.numberToTerraform(struct!.memoryLimit),
    workload_group_name: cdktf.stringToTerraform(struct!.workloadGroupName),
  }
}


export function cdwdorisWorkloadGroupWorkloadGroupToHclTerraform(struct?: CdwdorisWorkloadGroupWorkloadGroupOutputReference | CdwdorisWorkloadGroupWorkloadGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_hard_limit: {
      value: cdktf.stringToHclTerraform(struct!.cpuHardLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_share: {
      value: cdktf.numberToHclTerraform(struct!.cpuShare),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_memory_over_commit: {
      value: cdktf.booleanToHclTerraform(struct!.enableMemoryOverCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memory_limit: {
      value: cdktf.numberToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    workload_group_name: {
      value: cdktf.stringToHclTerraform(struct!.workloadGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdwdorisWorkloadGroupWorkloadGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdwdorisWorkloadGroupWorkloadGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuHardLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuHardLimit = this._cpuHardLimit;
    }
    if (this._cpuShare !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuShare = this._cpuShare;
    }
    if (this._enableMemoryOverCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMemoryOverCommit = this._enableMemoryOverCommit;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._workloadGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadGroupName = this._workloadGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdwdorisWorkloadGroupWorkloadGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuHardLimit = undefined;
      this._cpuShare = undefined;
      this._enableMemoryOverCommit = undefined;
      this._memoryLimit = undefined;
      this._workloadGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuHardLimit = value.cpuHardLimit;
      this._cpuShare = value.cpuShare;
      this._enableMemoryOverCommit = value.enableMemoryOverCommit;
      this._memoryLimit = value.memoryLimit;
      this._workloadGroupName = value.workloadGroupName;
    }
  }

  // cpu_hard_limit - computed: false, optional: true, required: false
  private _cpuHardLimit?: string; 
  public get cpuHardLimit() {
    return this.getStringAttribute('cpu_hard_limit');
  }
  public set cpuHardLimit(value: string) {
    this._cpuHardLimit = value;
  }
  public resetCpuHardLimit() {
    this._cpuHardLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuHardLimitInput() {
    return this._cpuHardLimit;
  }

  // cpu_share - computed: false, optional: true, required: false
  private _cpuShare?: number; 
  public get cpuShare() {
    return this.getNumberAttribute('cpu_share');
  }
  public set cpuShare(value: number) {
    this._cpuShare = value;
  }
  public resetCpuShare() {
    this._cpuShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuShareInput() {
    return this._cpuShare;
  }

  // enable_memory_over_commit - computed: false, optional: true, required: false
  private _enableMemoryOverCommit?: boolean | cdktf.IResolvable; 
  public get enableMemoryOverCommit() {
    return this.getBooleanAttribute('enable_memory_over_commit');
  }
  public set enableMemoryOverCommit(value: boolean | cdktf.IResolvable) {
    this._enableMemoryOverCommit = value;
  }
  public resetEnableMemoryOverCommit() {
    this._enableMemoryOverCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMemoryOverCommitInput() {
    return this._enableMemoryOverCommit;
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

  // workload_group_name - computed: false, optional: true, required: false
  private _workloadGroupName?: string; 
  public get workloadGroupName() {
    return this.getStringAttribute('workload_group_name');
  }
  public set workloadGroupName(value: string) {
    this._workloadGroupName = value;
  }
  public resetWorkloadGroupName() {
    this._workloadGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadGroupNameInput() {
    return this._workloadGroupName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group tencentcloud_cdwdoris_workload_group}
*/
export class CdwdorisWorkloadGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdwdoris_workload_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdwdorisWorkloadGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdwdorisWorkloadGroup to import
  * @param importFromId The id of the existing CdwdorisWorkloadGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdwdorisWorkloadGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdwdoris_workload_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cdwdoris_workload_group tencentcloud_cdwdoris_workload_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdwdorisWorkloadGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CdwdorisWorkloadGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdwdoris_workload_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._workloadGroup.internalValue = config.workloadGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // workload_group - computed: false, optional: true, required: false
  private _workloadGroup = new CdwdorisWorkloadGroupWorkloadGroupOutputReference(this, "workload_group");
  public get workloadGroup() {
    return this._workloadGroup;
  }
  public putWorkloadGroup(value: CdwdorisWorkloadGroupWorkloadGroup) {
    this._workloadGroup.internalValue = value;
  }
  public resetWorkloadGroup() {
    this._workloadGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadGroupInput() {
    return this._workloadGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      workload_group: cdwdorisWorkloadGroupWorkloadGroupToTerraform(this._workloadGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_group: {
        value: cdwdorisWorkloadGroupWorkloadGroupToHclTerraform(this._workloadGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdwdorisWorkloadGroupWorkloadGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
