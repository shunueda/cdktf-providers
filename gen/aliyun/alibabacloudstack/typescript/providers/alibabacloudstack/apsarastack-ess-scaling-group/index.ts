// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackEssScalingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#db_instance_ids ApsarastackEssScalingGroup#db_instance_ids}
  */
  readonly dbInstanceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#default_cooldown ApsarastackEssScalingGroup#default_cooldown}
  */
  readonly defaultCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#id ApsarastackEssScalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#loadbalancer_ids ApsarastackEssScalingGroup#loadbalancer_ids}
  */
  readonly loadbalancerIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#max_size ApsarastackEssScalingGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#min_size ApsarastackEssScalingGroup#min_size}
  */
  readonly minSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#multi_az_policy ApsarastackEssScalingGroup#multi_az_policy}
  */
  readonly multiAzPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#removal_policies ApsarastackEssScalingGroup#removal_policies}
  */
  readonly removalPolicies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#scaling_group_name ApsarastackEssScalingGroup#scaling_group_name}
  */
  readonly scalingGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#vswitch_ids ApsarastackEssScalingGroup#vswitch_ids}
  */
  readonly vswitchIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group apsarastack_ess_scaling_group}
*/
export class ApsarastackEssScalingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ess_scaling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackEssScalingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackEssScalingGroup to import
  * @param importFromId The id of the existing ApsarastackEssScalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackEssScalingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ess_scaling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ess_scaling_group apsarastack_ess_scaling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackEssScalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackEssScalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ess_scaling_group',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceIds = config.dbInstanceIds;
    this._defaultCooldown = config.defaultCooldown;
    this._id = config.id;
    this._loadbalancerIds = config.loadbalancerIds;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._multiAzPolicy = config.multiAzPolicy;
    this._removalPolicies = config.removalPolicies;
    this._scalingGroupName = config.scalingGroupName;
    this._vswitchIds = config.vswitchIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_ids - computed: false, optional: true, required: false
  private _dbInstanceIds?: string[]; 
  public get dbInstanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('db_instance_ids'));
  }
  public set dbInstanceIds(value: string[]) {
    this._dbInstanceIds = value;
  }
  public resetDbInstanceIds() {
    this._dbInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdsInput() {
    return this._dbInstanceIds;
  }

  // default_cooldown - computed: false, optional: true, required: false
  private _defaultCooldown?: number; 
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }
  public set defaultCooldown(value: number) {
    this._defaultCooldown = value;
  }
  public resetDefaultCooldown() {
    this._defaultCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCooldownInput() {
    return this._defaultCooldown;
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

  // loadbalancer_ids - computed: false, optional: true, required: false
  private _loadbalancerIds?: string[]; 
  public get loadbalancerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('loadbalancer_ids'));
  }
  public set loadbalancerIds(value: string[]) {
    this._loadbalancerIds = value;
  }
  public resetLoadbalancerIds() {
    this._loadbalancerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdsInput() {
    return this._loadbalancerIds;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // multi_az_policy - computed: true, optional: true, required: false
  private _multiAzPolicy?: string; 
  public get multiAzPolicy() {
    return this.getStringAttribute('multi_az_policy');
  }
  public set multiAzPolicy(value: string) {
    this._multiAzPolicy = value;
  }
  public resetMultiAzPolicy() {
    this._multiAzPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzPolicyInput() {
    return this._multiAzPolicy;
  }

  // removal_policies - computed: true, optional: true, required: false
  private _removalPolicies?: string[]; 
  public get removalPolicies() {
    return this.getListAttribute('removal_policies');
  }
  public set removalPolicies(value: string[]) {
    this._removalPolicies = value;
  }
  public resetRemovalPolicies() {
    this._removalPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removalPoliciesInput() {
    return this._removalPolicies;
  }

  // scaling_group_name - computed: false, optional: true, required: false
  private _scalingGroupName?: string; 
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }
  public set scalingGroupName(value: string) {
    this._scalingGroupName = value;
  }
  public resetScalingGroupName() {
    this._scalingGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupNameInput() {
    return this._scalingGroupName;
  }

  // vswitch_ids - computed: false, optional: true, required: false
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vswitch_ids'));
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  public resetVswitchIds() {
    this._vswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbInstanceIds),
      default_cooldown: cdktf.numberToTerraform(this._defaultCooldown),
      id: cdktf.stringToTerraform(this._id),
      loadbalancer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadbalancerIds),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      multi_az_policy: cdktf.stringToTerraform(this._multiAzPolicy),
      removal_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._removalPolicies),
      scaling_group_name: cdktf.stringToTerraform(this._scalingGroupName),
      vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vswitchIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbInstanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_cooldown: {
        value: cdktf.numberToHclTerraform(this._defaultCooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loadbalancer_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loadbalancerIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_az_policy: {
        value: cdktf.stringToHclTerraform(this._multiAzPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      removal_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._removalPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scaling_group_name: {
        value: cdktf.stringToHclTerraform(this._scalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vswitchIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
