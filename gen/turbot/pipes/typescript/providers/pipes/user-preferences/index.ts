// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserPreferencesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences#communication_community_updates UserPreferences#communication_community_updates}
  */
  readonly communicationCommunityUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences#communication_product_updates UserPreferences#communication_product_updates}
  */
  readonly communicationProductUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences#communication_tips_and_tricks UserPreferences#communication_tips_and_tricks}
  */
  readonly communicationTipsAndTricks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences#created_at UserPreferences#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences#id UserPreferences#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences#updated_at UserPreferences#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences#version_id UserPreferences#version_id}
  */
  readonly versionId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences pipes_user_preferences}
*/
export class UserPreferences extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_user_preferences";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserPreferences resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserPreferences to import
  * @param importFromId The id of the existing UserPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserPreferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_user_preferences", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_preferences pipes_user_preferences} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserPreferencesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserPreferencesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pipes_user_preferences',
      terraformGeneratorMetadata: {
        providerName: 'pipes',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communicationCommunityUpdates = config.communicationCommunityUpdates;
    this._communicationProductUpdates = config.communicationProductUpdates;
    this._communicationTipsAndTricks = config.communicationTipsAndTricks;
    this._createdAt = config.createdAt;
    this._id = config.id;
    this._updatedAt = config.updatedAt;
    this._versionId = config.versionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communication_community_updates - computed: true, optional: true, required: false
  private _communicationCommunityUpdates?: string; 
  public get communicationCommunityUpdates() {
    return this.getStringAttribute('communication_community_updates');
  }
  public set communicationCommunityUpdates(value: string) {
    this._communicationCommunityUpdates = value;
  }
  public resetCommunicationCommunityUpdates() {
    this._communicationCommunityUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationCommunityUpdatesInput() {
    return this._communicationCommunityUpdates;
  }

  // communication_product_updates - computed: true, optional: true, required: false
  private _communicationProductUpdates?: string; 
  public get communicationProductUpdates() {
    return this.getStringAttribute('communication_product_updates');
  }
  public set communicationProductUpdates(value: string) {
    this._communicationProductUpdates = value;
  }
  public resetCommunicationProductUpdates() {
    this._communicationProductUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationProductUpdatesInput() {
    return this._communicationProductUpdates;
  }

  // communication_tips_and_tricks - computed: true, optional: true, required: false
  private _communicationTipsAndTricks?: string; 
  public get communicationTipsAndTricks() {
    return this.getStringAttribute('communication_tips_and_tricks');
  }
  public set communicationTipsAndTricks(value: string) {
    this._communicationTipsAndTricks = value;
  }
  public resetCommunicationTipsAndTricks() {
    this._communicationTipsAndTricks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationTipsAndTricksInput() {
    return this._communicationTipsAndTricks;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: number; 
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }
  public set versionId(value: number) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      communication_community_updates: cdktf.stringToTerraform(this._communicationCommunityUpdates),
      communication_product_updates: cdktf.stringToTerraform(this._communicationProductUpdates),
      communication_tips_and_tricks: cdktf.stringToTerraform(this._communicationTipsAndTricks),
      created_at: cdktf.stringToTerraform(this._createdAt),
      id: cdktf.stringToTerraform(this._id),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      version_id: cdktf.numberToTerraform(this._versionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communication_community_updates: {
        value: cdktf.stringToHclTerraform(this._communicationCommunityUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_product_updates: {
        value: cdktf.stringToHclTerraform(this._communicationProductUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_tips_and_tricks: {
        value: cdktf.stringToHclTerraform(this._communicationTipsAndTricks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
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
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_id: {
        value: cdktf.numberToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
