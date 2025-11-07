// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/autoscaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Is auto-scaling enabled for this Virtual Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/autoscaling_policy#enabled AutoscalingPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/autoscaling_policy#id AutoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum size of the Virtual Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/autoscaling_policy#max_size AutoscalingPolicy#max_size}
  */
  readonly maxSize: string;
  /**
  * Minimum size of the Virtual Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/autoscaling_policy#min_size AutoscalingPolicy#min_size}
  */
  readonly minSize: string;
  /**
  * Unique ID of this Virtual Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/autoscaling_policy#virtual_instance_id AutoscalingPolicy#virtual_instance_id}
  */
  readonly virtualInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/autoscaling_policy rockset_autoscaling_policy}
*/
export class AutoscalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_autoscaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoscalingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalingPolicy to import
  * @param importFromId The id of the existing AutoscalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/autoscaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_autoscaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/autoscaling_policy rockset_autoscaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_autoscaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._virtualInstanceId = config.virtualInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // virtual_instance_id - computed: false, optional: false, required: true
  private _virtualInstanceId?: string; 
  public get virtualInstanceId() {
    return this.getStringAttribute('virtual_instance_id');
  }
  public set virtualInstanceId(value: string) {
    this._virtualInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInstanceIdInput() {
    return this._virtualInstanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      max_size: cdktf.stringToTerraform(this._maxSize),
      min_size: cdktf.stringToTerraform(this._minSize),
      virtual_instance_id: cdktf.stringToTerraform(this._virtualInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      max_size: {
        value: cdktf.stringToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_size: {
        value: cdktf.stringToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_instance_id: {
        value: cdktf.stringToHclTerraform(this._virtualInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
