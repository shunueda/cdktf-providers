// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoScalingGroupLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto-Scaling Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_load_balancer#asg_id AutoScalingGroupLoadBalancer#asg_id}
  */
  readonly asgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_load_balancer#id AutoScalingGroupLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LB rule ID list connected to Auto-Scaling Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_load_balancer#lb_rule_ids AutoScalingGroupLoadBalancer#lb_rule_ids}
  */
  readonly lbRuleIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_load_balancer samsungcloudplatform_auto_scaling_group_load_balancer}
*/
export class AutoScalingGroupLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_auto_scaling_group_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoScalingGroupLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoScalingGroupLoadBalancer to import
  * @param importFromId The id of the existing AutoScalingGroupLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoScalingGroupLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_auto_scaling_group_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_load_balancer samsungcloudplatform_auto_scaling_group_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoScalingGroupLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: AutoScalingGroupLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_auto_scaling_group_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asgId = config.asgId;
    this._id = config.id;
    this._lbRuleIds = config.lbRuleIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asg_id - computed: false, optional: false, required: true
  private _asgId?: string; 
  public get asgId() {
    return this.getStringAttribute('asg_id');
  }
  public set asgId(value: string) {
    this._asgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asgIdInput() {
    return this._asgId;
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

  // lb_rule_ids - computed: false, optional: false, required: true
  private _lbRuleIds?: string[]; 
  public get lbRuleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('lb_rule_ids'));
  }
  public set lbRuleIds(value: string[]) {
    this._lbRuleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbRuleIdsInput() {
    return this._lbRuleIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asg_id: cdktf.stringToTerraform(this._asgId),
      id: cdktf.stringToTerraform(this._id),
      lb_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lbRuleIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asg_id: {
        value: cdktf.stringToHclTerraform(this._asgId),
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
      lb_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lbRuleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
