// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/review
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReviewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/review#campaign_id Review#campaign_id}
  */
  readonly campaignId: string;
  /**
  * A note to justify the reassignment decision for the specified review.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/review#note Review#note}
  */
  readonly note: string;
  /**
  * A list of reviews (review id values) that are reassigned to the new reviewer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/review#review_ids Review#review_ids}
  */
  readonly reviewIds: string[];
  /**
  * The Okta user id of the new reviewer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/review#reviewer_id Review#reviewer_id}
  */
  readonly reviewerId: string;
  /**
  * Identifies the reviewer level of each reviews during access certification. Applicable for multi level campaigns only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/review#reviewer_level Review#reviewer_level}
  */
  readonly reviewerLevel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/review okta_review}
*/
export class Review extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_review";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Review resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Review to import
  * @param importFromId The id of the existing Review that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/review#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Review to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_review", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/review okta_review} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReviewConfig
  */
  public constructor(scope: Construct, id: string, config: ReviewConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_review',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._campaignId = config.campaignId;
    this._note = config.note;
    this._reviewIds = config.reviewIds;
    this._reviewerId = config.reviewerId;
    this._reviewerLevel = config.reviewerLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // campaign_id - computed: false, optional: false, required: true
  private _campaignId?: string; 
  public get campaignId() {
    return this.getStringAttribute('campaign_id');
  }
  public set campaignId(value: string) {
    this._campaignId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignIdInput() {
    return this._campaignId;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // decision - computed: true, optional: false, required: false
  public get decision() {
    return this.getStringAttribute('decision');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // note - computed: false, optional: false, required: true
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // review_ids - computed: false, optional: false, required: true
  private _reviewIds?: string[]; 
  public get reviewIds() {
    return this.getListAttribute('review_ids');
  }
  public set reviewIds(value: string[]) {
    this._reviewIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewIdsInput() {
    return this._reviewIds;
  }

  // reviewer_id - computed: false, optional: false, required: true
  private _reviewerId?: string; 
  public get reviewerId() {
    return this.getStringAttribute('reviewer_id');
  }
  public set reviewerId(value: string) {
    this._reviewerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerIdInput() {
    return this._reviewerId;
  }

  // reviewer_level - computed: false, optional: true, required: false
  private _reviewerLevel?: string; 
  public get reviewerLevel() {
    return this.getStringAttribute('reviewer_level');
  }
  public set reviewerLevel(value: string) {
    this._reviewerLevel = value;
  }
  public resetReviewerLevel() {
    this._reviewerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerLevelInput() {
    return this._reviewerLevel;
  }

  // reviewer_type - computed: true, optional: false, required: false
  public get reviewerType() {
    return this.getStringAttribute('reviewer_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      campaign_id: cdktf.stringToTerraform(this._campaignId),
      note: cdktf.stringToTerraform(this._note),
      review_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reviewIds),
      reviewer_id: cdktf.stringToTerraform(this._reviewerId),
      reviewer_level: cdktf.stringToTerraform(this._reviewerLevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      campaign_id: {
        value: cdktf.stringToHclTerraform(this._campaignId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      review_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reviewIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      reviewer_id: {
        value: cdktf.stringToHclTerraform(this._reviewerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reviewer_level: {
        value: cdktf.stringToHclTerraform(this._reviewerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
