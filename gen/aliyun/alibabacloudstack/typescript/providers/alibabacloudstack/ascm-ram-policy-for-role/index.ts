// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ascm_ram_policy_for_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AscmRamPolicyForRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ascm_ram_policy_for_role#id AscmRamPolicyForRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ascm_ram_policy_for_role#ram_policy_id AscmRamPolicyForRole#ram_policy_id}
  */
  readonly ramPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ascm_ram_policy_for_role#role_id AscmRamPolicyForRole#role_id}
  */
  readonly roleId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ascm_ram_policy_for_role alibabacloudstack_ascm_ram_policy_for_role}
*/
export class AscmRamPolicyForRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ascm_ram_policy_for_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AscmRamPolicyForRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AscmRamPolicyForRole to import
  * @param importFromId The id of the existing AscmRamPolicyForRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ascm_ram_policy_for_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AscmRamPolicyForRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ascm_ram_policy_for_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ascm_ram_policy_for_role alibabacloudstack_ascm_ram_policy_for_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AscmRamPolicyForRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AscmRamPolicyForRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ascm_ram_policy_for_role',
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
    this._id = config.id;
    this._ramPolicyId = config.ramPolicyId;
    this._roleId = config.roleId;
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

  // ram_policy_id - computed: false, optional: false, required: true
  private _ramPolicyId?: string; 
  public get ramPolicyId() {
    return this.getStringAttribute('ram_policy_id');
  }
  public set ramPolicyId(value: string) {
    this._ramPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramPolicyIdInput() {
    return this._ramPolicyId;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ram_policy_id: cdktf.stringToTerraform(this._ramPolicyId),
      role_id: cdktf.numberToTerraform(this._roleId),
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
      ram_policy_id: {
        value: cdktf.stringToHclTerraform(this._ramPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
