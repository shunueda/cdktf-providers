// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy#description Policy#description}
  */
  readonly description?: string;
  /**
  * Whether the policy is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy#enabled Policy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * IDs of groups that will define source in the policy scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy#from_groups Policy#from_groups}
  */
  readonly fromGroups: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy#id Policy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy#name Policy#name}
  */
  readonly name: string;
  /**
  * The `rulelist` that will be used by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy#rule_list_id Policy#rule_list_id}
  */
  readonly ruleListId: number;
  /**
  * IDs of segments that will define the policy scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy#segment_ids Policy#segment_ids}
  */
  readonly segmentIds: number[];
  /**
  * IDs of groups that will define destination in the policy scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy#to_groups Policy#to_groups}
  */
  readonly toGroups: number[];
  /**
  * IDs of zta profiles that will define a match in the policy scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy#zta_profile_ids Policy#zta_profile_ids}
  */
  readonly ztaProfileIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy alkira_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy alkira_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_policy',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
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
    this._enabled = config.enabled;
    this._fromGroups = config.fromGroups;
    this._id = config.id;
    this._name = config.name;
    this._ruleListId = config.ruleListId;
    this._segmentIds = config.segmentIds;
    this._toGroups = config.toGroups;
    this._ztaProfileIds = config.ztaProfileIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // from_groups - computed: false, optional: false, required: true
  private _fromGroups?: number[]; 
  public get fromGroups() {
    return this.getNumberListAttribute('from_groups');
  }
  public set fromGroups(value: number[]) {
    this._fromGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromGroupsInput() {
    return this._fromGroups;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // rule_list_id - computed: false, optional: false, required: true
  private _ruleListId?: number; 
  public get ruleListId() {
    return this.getNumberAttribute('rule_list_id');
  }
  public set ruleListId(value: number) {
    this._ruleListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListIdInput() {
    return this._ruleListId;
  }

  // segment_ids - computed: false, optional: false, required: true
  private _segmentIds?: number[]; 
  public get segmentIds() {
    return this.getNumberListAttribute('segment_ids');
  }
  public set segmentIds(value: number[]) {
    this._segmentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdsInput() {
    return this._segmentIds;
  }

  // to_groups - computed: false, optional: false, required: true
  private _toGroups?: number[]; 
  public get toGroups() {
    return this.getNumberListAttribute('to_groups');
  }
  public set toGroups(value: number[]) {
    this._toGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toGroupsInput() {
    return this._toGroups;
  }

  // zta_profile_ids - computed: false, optional: true, required: false
  private _ztaProfileIds?: string[]; 
  public get ztaProfileIds() {
    return this.getListAttribute('zta_profile_ids');
  }
  public set ztaProfileIds(value: string[]) {
    this._ztaProfileIds = value;
  }
  public resetZtaProfileIds() {
    this._ztaProfileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztaProfileIdsInput() {
    return this._ztaProfileIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      from_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._fromGroups),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rule_list_id: cdktf.numberToTerraform(this._ruleListId),
      segment_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._segmentIds),
      to_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._toGroups),
      zta_profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ztaProfileIds),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      from_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._fromGroups),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      rule_list_id: {
        value: cdktf.numberToHclTerraform(this._ruleListId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      segment_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._segmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      to_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._toGroups),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      zta_profile_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ztaProfileIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
