// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/owner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OwnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The amount of time (in minutes) before the next reviewer is notified. Use 0 to remove escalation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/owner#access_request_escalation_period Owner#access_request_escalation_period}
  */
  readonly accessRequestEscalationPeriod?: number;
  /**
  * A description of the owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/owner#description Owner#description}
  */
  readonly description?: string;
  /**
  * The name of the owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/owner#name Owner#name}
  */
  readonly name: string;
  /**
  * The message channel id for the reviewer channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/owner#reviewer_message_channel_id Owner#reviewer_message_channel_id}
  */
  readonly reviewerMessageChannelId?: string;
  /**
  * Sync this owner's user list with a source group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/owner#source_group_id Owner#source_group_id}
  */
  readonly sourceGroupId?: string;
  /**
  * Users to add to the created owner. If setting a source_group_id this list must be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/owner#user_ids Owner#user_ids}
  */
  readonly userIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/owner opal_owner}
*/
export class Owner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_owner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Owner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Owner to import
  * @param importFromId The id of the existing Owner that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/owner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Owner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_owner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/owner opal_owner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OwnerConfig
  */
  public constructor(scope: Construct, id: string, config: OwnerConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_owner',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessRequestEscalationPeriod = config.accessRequestEscalationPeriod;
    this._description = config.description;
    this._name = config.name;
    this._reviewerMessageChannelId = config.reviewerMessageChannelId;
    this._sourceGroupId = config.sourceGroupId;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_request_escalation_period - computed: true, optional: true, required: false
  private _accessRequestEscalationPeriod?: number; 
  public get accessRequestEscalationPeriod() {
    return this.getNumberAttribute('access_request_escalation_period');
  }
  public set accessRequestEscalationPeriod(value: number) {
    this._accessRequestEscalationPeriod = value;
  }
  public resetAccessRequestEscalationPeriod() {
    this._accessRequestEscalationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRequestEscalationPeriodInput() {
    return this._accessRequestEscalationPeriod;
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
    return this.getStringAttribute('id');
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

  // reviewer_message_channel_id - computed: true, optional: true, required: false
  private _reviewerMessageChannelId?: string; 
  public get reviewerMessageChannelId() {
    return this.getStringAttribute('reviewer_message_channel_id');
  }
  public set reviewerMessageChannelId(value: string) {
    this._reviewerMessageChannelId = value;
  }
  public resetReviewerMessageChannelId() {
    this._reviewerMessageChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerMessageChannelIdInput() {
    return this._reviewerMessageChannelId;
  }

  // source_group_id - computed: true, optional: true, required: false
  private _sourceGroupId?: string; 
  public get sourceGroupId() {
    return this.getStringAttribute('source_group_id');
  }
  public set sourceGroupId(value: string) {
    this._sourceGroupId = value;
  }
  public resetSourceGroupId() {
    this._sourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupIdInput() {
    return this._sourceGroupId;
  }

  // user_ids - computed: false, optional: false, required: true
  private _userIds?: string[]; 
  public get userIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ids'));
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_request_escalation_period: cdktf.numberToTerraform(this._accessRequestEscalationPeriod),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      reviewer_message_channel_id: cdktf.stringToTerraform(this._reviewerMessageChannelId),
      source_group_id: cdktf.stringToTerraform(this._sourceGroupId),
      user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_request_escalation_period: {
        value: cdktf.numberToHclTerraform(this._accessRequestEscalationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      reviewer_message_channel_id: {
        value: cdktf.stringToHclTerraform(this._reviewerMessageChannelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_group_id: {
        value: cdktf.stringToHclTerraform(this._sourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
