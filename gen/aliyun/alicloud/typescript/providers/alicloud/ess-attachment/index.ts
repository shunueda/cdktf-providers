// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment#entrusted EssAttachment#entrusted}
  */
  readonly entrusted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment#force EssAttachment#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment#id EssAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment#instance_ids EssAttachment#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment#lifecycle_hook EssAttachment#lifecycle_hook}
  */
  readonly lifecycleHook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment#load_balancer_weights EssAttachment#load_balancer_weights}
  */
  readonly loadBalancerWeights?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment#scaling_group_id EssAttachment#scaling_group_id}
  */
  readonly scalingGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment alicloud_ess_attachment}
*/
export class EssAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssAttachment to import
  * @param importFromId The id of the existing EssAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_attachment alicloud_ess_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: EssAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entrusted = config.entrusted;
    this._force = config.force;
    this._id = config.id;
    this._instanceIds = config.instanceIds;
    this._lifecycleHook = config.lifecycleHook;
    this._loadBalancerWeights = config.loadBalancerWeights;
    this._scalingGroupId = config.scalingGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entrusted - computed: false, optional: true, required: false
  private _entrusted?: boolean | cdktf.IResolvable; 
  public get entrusted() {
    return this.getBooleanAttribute('entrusted');
  }
  public set entrusted(value: boolean | cdktf.IResolvable) {
    this._entrusted = value;
  }
  public resetEntrusted() {
    this._entrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrustedInput() {
    return this._entrusted;
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

  // instance_ids - computed: false, optional: false, required: true
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // lifecycle_hook - computed: false, optional: true, required: false
  private _lifecycleHook?: boolean | cdktf.IResolvable; 
  public get lifecycleHook() {
    return this.getBooleanAttribute('lifecycle_hook');
  }
  public set lifecycleHook(value: boolean | cdktf.IResolvable) {
    this._lifecycleHook = value;
  }
  public resetLifecycleHook() {
    this._lifecycleHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleHookInput() {
    return this._lifecycleHook;
  }

  // load_balancer_weights - computed: true, optional: true, required: false
  private _loadBalancerWeights?: number[]; 
  public get loadBalancerWeights() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('load_balancer_weights')));
  }
  public set loadBalancerWeights(value: number[]) {
    this._loadBalancerWeights = value;
  }
  public resetLoadBalancerWeights() {
    this._loadBalancerWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerWeightsInput() {
    return this._loadBalancerWeights;
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entrusted: cdktf.booleanToTerraform(this._entrusted),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      lifecycle_hook: cdktf.booleanToTerraform(this._lifecycleHook),
      load_balancer_weights: cdktf.listMapper(cdktf.numberToTerraform, false)(this._loadBalancerWeights),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entrusted: {
        value: cdktf.booleanToHclTerraform(this._entrusted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      lifecycle_hook: {
        value: cdktf.booleanToHclTerraform(this._lifecycleHook),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_balancer_weights: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._loadBalancerWeights),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
