// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/organization_org_manage_policy_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationOrgManagePolicyTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/organization_org_manage_policy_target#id OrganizationOrgManagePolicyTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/organization_org_manage_policy_target#policy_id OrganizationOrgManagePolicyTarget#policy_id}
  */
  readonly policyId: number;
  /**
  * Policy type. Default value is SERVICE_CONTROL_POLICY.
  * Valid values:
  *   - `SERVICE_CONTROL_POLICY`: Service control policy.
  *   - `TAG_POLICY`: Tag policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/organization_org_manage_policy_target#policy_type OrganizationOrgManagePolicyTarget#policy_type}
  */
  readonly policyType?: string;
  /**
  * Binding target ID of the policy. Member Uin or Department ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/organization_org_manage_policy_target#target_id OrganizationOrgManagePolicyTarget#target_id}
  */
  readonly targetId: number;
  /**
  * Target type.
  * Valid values:
  *   - `NODE`: Department.
  *   - `MEMBER`: Check Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/organization_org_manage_policy_target#target_type OrganizationOrgManagePolicyTarget#target_type}
  */
  readonly targetType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/organization_org_manage_policy_target tencentcloud_organization_org_manage_policy_target}
*/
export class OrganizationOrgManagePolicyTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_org_manage_policy_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationOrgManagePolicyTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationOrgManagePolicyTarget to import
  * @param importFromId The id of the existing OrganizationOrgManagePolicyTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/organization_org_manage_policy_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationOrgManagePolicyTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_org_manage_policy_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/organization_org_manage_policy_target tencentcloud_organization_org_manage_policy_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationOrgManagePolicyTargetConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationOrgManagePolicyTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_org_manage_policy_target',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._policyId = config.policyId;
    this._policyType = config.policyType;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: number; 
  public get targetId() {
    return this.getNumberAttribute('target_id');
  }
  public set targetId(value: number) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.numberToTerraform(this._policyId),
      policy_type: cdktf.stringToTerraform(this._policyType),
      target_id: cdktf.numberToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
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
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.numberToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
