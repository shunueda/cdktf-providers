// https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/data-sources/ingest_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFirehydrantIngestUrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/data-sources/ingest_url#escalation_policy_id DataFirehydrantIngestUrl#escalation_policy_id}
  */
  readonly escalationPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/data-sources/ingest_url#id DataFirehydrantIngestUrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/data-sources/ingest_url#on_call_schedule_id DataFirehydrantIngestUrl#on_call_schedule_id}
  */
  readonly onCallScheduleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/data-sources/ingest_url#team_id DataFirehydrantIngestUrl#team_id}
  */
  readonly teamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/data-sources/ingest_url#transposer DataFirehydrantIngestUrl#transposer}
  */
  readonly transposer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/data-sources/ingest_url#user_id DataFirehydrantIngestUrl#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/data-sources/ingest_url firehydrant_ingest_url}
*/
export class DataFirehydrantIngestUrl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_ingest_url";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFirehydrantIngestUrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFirehydrantIngestUrl to import
  * @param importFromId The id of the existing DataFirehydrantIngestUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/data-sources/ingest_url#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFirehydrantIngestUrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_ingest_url", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/data-sources/ingest_url firehydrant_ingest_url} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFirehydrantIngestUrlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFirehydrantIngestUrlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_ingest_url',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.14.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._escalationPolicyId = config.escalationPolicyId;
    this._id = config.id;
    this._onCallScheduleId = config.onCallScheduleId;
    this._teamId = config.teamId;
    this._transposer = config.transposer;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // escalation_policy_id - computed: false, optional: true, required: false
  private _escalationPolicyId?: string; 
  public get escalationPolicyId() {
    return this.getStringAttribute('escalation_policy_id');
  }
  public set escalationPolicyId(value: string) {
    this._escalationPolicyId = value;
  }
  public resetEscalationPolicyId() {
    this._escalationPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyIdInput() {
    return this._escalationPolicyId;
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

  // on_call_schedule_id - computed: false, optional: true, required: false
  private _onCallScheduleId?: string; 
  public get onCallScheduleId() {
    return this.getStringAttribute('on_call_schedule_id');
  }
  public set onCallScheduleId(value: string) {
    this._onCallScheduleId = value;
  }
  public resetOnCallScheduleId() {
    this._onCallScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCallScheduleIdInput() {
    return this._onCallScheduleId;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // transposer - computed: false, optional: true, required: false
  private _transposer?: string; 
  public get transposer() {
    return this.getStringAttribute('transposer');
  }
  public set transposer(value: string) {
    this._transposer = value;
  }
  public resetTransposer() {
    this._transposer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transposerInput() {
    return this._transposer;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      escalation_policy_id: cdktf.stringToTerraform(this._escalationPolicyId),
      id: cdktf.stringToTerraform(this._id),
      on_call_schedule_id: cdktf.stringToTerraform(this._onCallScheduleId),
      team_id: cdktf.stringToTerraform(this._teamId),
      transposer: cdktf.stringToTerraform(this._transposer),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      escalation_policy_id: {
        value: cdktf.stringToHclTerraform(this._escalationPolicyId),
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
      on_call_schedule_id: {
        value: cdktf.stringToHclTerraform(this._onCallScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transposer: {
        value: cdktf.stringToHclTerraform(this._transposer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
