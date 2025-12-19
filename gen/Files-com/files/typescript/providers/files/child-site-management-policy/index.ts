// https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/child_site_management_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChildSiteManagementPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/child_site_management_policy#description ChildSiteManagementPolicy#description}
  */
  readonly description?: string;
  /**
  * Name for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/child_site_management_policy#name ChildSiteManagementPolicy#name}
  */
  readonly name?: string;
  /**
  * Type of policy.  Valid values: `settings`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/child_site_management_policy#policy_type ChildSiteManagementPolicy#policy_type}
  */
  readonly policyType: string;
  /**
  * IDs of child sites that this policy has been exempted from. If `skip_child_site_ids` is empty, the policy will be applied to all child sites. To apply a policy to a child site that has been exempted, remove it from `skip_child_site_ids` or set it to an empty array (`[]`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/child_site_management_policy#skip_child_site_ids ChildSiteManagementPolicy#skip_child_site_ids}
  */
  readonly skipChildSiteIds?: number[];
  /**
  * Policy configuration data. Attributes differ by policy type. For more information, refer to the Value Hash section of the developer documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/child_site_management_policy#value ChildSiteManagementPolicy#value}
  */
  readonly value?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/child_site_management_policy files_child_site_management_policy}
*/
export class ChildSiteManagementPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_child_site_management_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChildSiteManagementPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChildSiteManagementPolicy to import
  * @param importFromId The id of the existing ChildSiteManagementPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/child_site_management_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChildSiteManagementPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_child_site_management_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/child_site_management_policy files_child_site_management_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChildSiteManagementPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ChildSiteManagementPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'files_child_site_management_policy',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.417',
        providerVersionConstraint: '0.1.417'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._policyType = config.policyType;
    this._skipChildSiteIds = config.skipChildSiteIds;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applied_child_site_ids - computed: true, optional: false, required: false
  public get appliedChildSiteIds() {
    return this.getNumberListAttribute('applied_child_site_ids');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // skip_child_site_ids - computed: true, optional: true, required: false
  private _skipChildSiteIds?: number[]; 
  public get skipChildSiteIds() {
    return this.getNumberListAttribute('skip_child_site_ids');
  }
  public set skipChildSiteIds(value: number[]) {
    this._skipChildSiteIds = value;
  }
  public resetSkipChildSiteIds() {
    this._skipChildSiteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipChildSiteIdsInput() {
    return this._skipChildSiteIds;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // value - computed: true, optional: true, required: false
  private _value?: { [key: string]: any }; 
  public get value() {
    return this.getAnyMapAttribute('value');
  }
  public set value(value: { [key: string]: any }) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      policy_type: cdktf.stringToTerraform(this._policyType),
      skip_child_site_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._skipChildSiteIds),
      value: cdktf.hashMapper(cdktf.anyToTerraform)(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_child_site_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._skipChildSiteIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      value: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._value),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
