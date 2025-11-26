// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PreventionPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host Group ids to attach to the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_attachment#host_groups PreventionPolicyAttachment#host_groups}
  */
  readonly hostGroups?: string[];
  /**
  * The prevention policy id you want to attach to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_attachment#id PreventionPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IOA Rule Group to attach to the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_attachment#ioa_rule_groups PreventionPolicyAttachment#ioa_rule_groups}
  */
  readonly ioaRuleGroups?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_attachment crowdstrike_prevention_policy_attachment}
*/
export class PreventionPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_prevention_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PreventionPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PreventionPolicyAttachment to import
  * @param importFromId The id of the existing PreventionPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PreventionPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_prevention_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_attachment crowdstrike_prevention_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PreventionPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: PreventionPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_prevention_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.49',
        providerVersionConstraint: '0.0.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostGroups = config.hostGroups;
    this._id = config.id;
    this._ioaRuleGroups = config.ioaRuleGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_groups - computed: false, optional: true, required: false
  private _hostGroups?: string[]; 
  public get hostGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('host_groups'));
  }
  public set hostGroups(value: string[]) {
    this._hostGroups = value;
  }
  public resetHostGroups() {
    this._hostGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupsInput() {
    return this._hostGroups;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ioa_rule_groups - computed: false, optional: true, required: false
  private _ioaRuleGroups?: string[]; 
  public get ioaRuleGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('ioa_rule_groups'));
  }
  public set ioaRuleGroups(value: string[]) {
    this._ioaRuleGroups = value;
  }
  public resetIoaRuleGroups() {
    this._ioaRuleGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioaRuleGroupsInput() {
    return this._ioaRuleGroups;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroups),
      id: cdktf.stringToTerraform(this._id),
      ioa_rule_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ioaRuleGroups),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ioa_rule_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ioaRuleGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
