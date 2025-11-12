// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CddcDedicatedHostGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#allocation_policy CddcDedicatedHostGroup#allocation_policy}
  */
  readonly allocationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#cpu_allocation_ratio CddcDedicatedHostGroup#cpu_allocation_ratio}
  */
  readonly cpuAllocationRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#dedicated_host_group_desc CddcDedicatedHostGroup#dedicated_host_group_desc}
  */
  readonly dedicatedHostGroupDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#disk_allocation_ratio CddcDedicatedHostGroup#disk_allocation_ratio}
  */
  readonly diskAllocationRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#engine CddcDedicatedHostGroup#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#host_replace_policy CddcDedicatedHostGroup#host_replace_policy}
  */
  readonly hostReplacePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#id CddcDedicatedHostGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#mem_allocation_ratio CddcDedicatedHostGroup#mem_allocation_ratio}
  */
  readonly memAllocationRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#open_permission CddcDedicatedHostGroup#open_permission}
  */
  readonly openPermission?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#vpc_id CddcDedicatedHostGroup#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group alicloud_cddc_dedicated_host_group}
*/
export class CddcDedicatedHostGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cddc_dedicated_host_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CddcDedicatedHostGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CddcDedicatedHostGroup to import
  * @param importFromId The id of the existing CddcDedicatedHostGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CddcDedicatedHostGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cddc_dedicated_host_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cddc_dedicated_host_group alicloud_cddc_dedicated_host_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CddcDedicatedHostGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CddcDedicatedHostGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cddc_dedicated_host_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationPolicy = config.allocationPolicy;
    this._cpuAllocationRatio = config.cpuAllocationRatio;
    this._dedicatedHostGroupDesc = config.dedicatedHostGroupDesc;
    this._diskAllocationRatio = config.diskAllocationRatio;
    this._engine = config.engine;
    this._hostReplacePolicy = config.hostReplacePolicy;
    this._id = config.id;
    this._memAllocationRatio = config.memAllocationRatio;
    this._openPermission = config.openPermission;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_policy - computed: true, optional: true, required: false
  private _allocationPolicy?: string; 
  public get allocationPolicy() {
    return this.getStringAttribute('allocation_policy');
  }
  public set allocationPolicy(value: string) {
    this._allocationPolicy = value;
  }
  public resetAllocationPolicy() {
    this._allocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPolicyInput() {
    return this._allocationPolicy;
  }

  // cpu_allocation_ratio - computed: true, optional: true, required: false
  private _cpuAllocationRatio?: number; 
  public get cpuAllocationRatio() {
    return this.getNumberAttribute('cpu_allocation_ratio');
  }
  public set cpuAllocationRatio(value: number) {
    this._cpuAllocationRatio = value;
  }
  public resetCpuAllocationRatio() {
    this._cpuAllocationRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuAllocationRatioInput() {
    return this._cpuAllocationRatio;
  }

  // dedicated_host_group_desc - computed: false, optional: true, required: false
  private _dedicatedHostGroupDesc?: string; 
  public get dedicatedHostGroupDesc() {
    return this.getStringAttribute('dedicated_host_group_desc');
  }
  public set dedicatedHostGroupDesc(value: string) {
    this._dedicatedHostGroupDesc = value;
  }
  public resetDedicatedHostGroupDesc() {
    this._dedicatedHostGroupDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostGroupDescInput() {
    return this._dedicatedHostGroupDesc;
  }

  // disk_allocation_ratio - computed: true, optional: true, required: false
  private _diskAllocationRatio?: number; 
  public get diskAllocationRatio() {
    return this.getNumberAttribute('disk_allocation_ratio');
  }
  public set diskAllocationRatio(value: number) {
    this._diskAllocationRatio = value;
  }
  public resetDiskAllocationRatio() {
    this._diskAllocationRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAllocationRatioInput() {
    return this._diskAllocationRatio;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // host_replace_policy - computed: true, optional: true, required: false
  private _hostReplacePolicy?: string; 
  public get hostReplacePolicy() {
    return this.getStringAttribute('host_replace_policy');
  }
  public set hostReplacePolicy(value: string) {
    this._hostReplacePolicy = value;
  }
  public resetHostReplacePolicy() {
    this._hostReplacePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostReplacePolicyInput() {
    return this._hostReplacePolicy;
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

  // mem_allocation_ratio - computed: true, optional: true, required: false
  private _memAllocationRatio?: number; 
  public get memAllocationRatio() {
    return this.getNumberAttribute('mem_allocation_ratio');
  }
  public set memAllocationRatio(value: number) {
    this._memAllocationRatio = value;
  }
  public resetMemAllocationRatio() {
    this._memAllocationRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memAllocationRatioInput() {
    return this._memAllocationRatio;
  }

  // open_permission - computed: true, optional: true, required: false
  private _openPermission?: boolean | cdktf.IResolvable; 
  public get openPermission() {
    return this.getBooleanAttribute('open_permission');
  }
  public set openPermission(value: boolean | cdktf.IResolvable) {
    this._openPermission = value;
  }
  public resetOpenPermission() {
    this._openPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openPermissionInput() {
    return this._openPermission;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_policy: cdktf.stringToTerraform(this._allocationPolicy),
      cpu_allocation_ratio: cdktf.numberToTerraform(this._cpuAllocationRatio),
      dedicated_host_group_desc: cdktf.stringToTerraform(this._dedicatedHostGroupDesc),
      disk_allocation_ratio: cdktf.numberToTerraform(this._diskAllocationRatio),
      engine: cdktf.stringToTerraform(this._engine),
      host_replace_policy: cdktf.stringToTerraform(this._hostReplacePolicy),
      id: cdktf.stringToTerraform(this._id),
      mem_allocation_ratio: cdktf.numberToTerraform(this._memAllocationRatio),
      open_permission: cdktf.booleanToTerraform(this._openPermission),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_policy: {
        value: cdktf.stringToHclTerraform(this._allocationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_allocation_ratio: {
        value: cdktf.numberToHclTerraform(this._cpuAllocationRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dedicated_host_group_desc: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostGroupDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_allocation_ratio: {
        value: cdktf.numberToHclTerraform(this._diskAllocationRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_replace_policy: {
        value: cdktf.stringToHclTerraform(this._hostReplacePolicy),
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
      mem_allocation_ratio: {
        value: cdktf.numberToHclTerraform(this._memAllocationRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      open_permission: {
        value: cdktf.booleanToHclTerraform(this._openPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
