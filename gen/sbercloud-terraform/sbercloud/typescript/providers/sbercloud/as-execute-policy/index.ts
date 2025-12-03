// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/as_execute_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsExecutePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/as_execute_policy#id AsExecutePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/as_execute_policy#region AsExecutePolicy#region}
  */
  readonly region?: string;
  /**
  * Specifies the AS group policy ID or AS bandwidth policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/as_execute_policy#scaling_policy_id AsExecutePolicy#scaling_policy_id}
  */
  readonly scalingPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/as_execute_policy sbercloud_as_execute_policy}
*/
export class AsExecutePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_as_execute_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsExecutePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsExecutePolicy to import
  * @param importFromId The id of the existing AsExecutePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/as_execute_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsExecutePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_as_execute_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/as_execute_policy sbercloud_as_execute_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsExecutePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AsExecutePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_as_execute_policy',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.15',
        providerVersionConstraint: '1.12.15'
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
    this._region = config.region;
    this._scalingPolicyId = config.scalingPolicyId;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // scaling_policy_id - computed: false, optional: false, required: true
  private _scalingPolicyId?: string; 
  public get scalingPolicyId() {
    return this.getStringAttribute('scaling_policy_id');
  }
  public set scalingPolicyId(value: string) {
    this._scalingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyIdInput() {
    return this._scalingPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      scaling_policy_id: cdktf.stringToTerraform(this._scalingPolicyId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_policy_id: {
        value: cdktf.stringToHclTerraform(this._scalingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
