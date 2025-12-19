// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrelloNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#active TrelloNotification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The application key for the Trello account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#application_key TrelloNotification#application_key}
  */
  readonly applicationKey: string;
  /**
  * The application token for the Trello account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#authorization_token TrelloNotification#authorization_token}
  */
  readonly authorizationToken?: string;
  /**
  * The Trello board to which the card should be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#board_id TrelloNotification#board_id}
  */
  readonly boardId: string;
  /**
  * The description of the Trello card.   You can use same placeholders as in card text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#description TrelloNotification#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#id TrelloNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of these settings when referred to from resources requiring the REST API V1 keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#legacy_id TrelloNotification#legacy_id}
  */
  readonly legacyId?: string;
  /**
  * The Trello list to which the card should be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#list_id TrelloNotification#list_id}
  */
  readonly listId: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#name TrelloNotification#name}
  */
  readonly name: string;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#profile TrelloNotification#profile}
  */
  readonly profile: string;
  /**
  * The Trello list to which the card of the resolved problem should be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#resolved_list_id TrelloNotification#resolved_list_id}
  */
  readonly resolvedListId: string;
  /**
  * The text of the generated Trello card.  You can use the following placeholders:  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{PID}`: The ID of the reported problem.  * `{ProblemDetailsMarkdown}`: All problem event details, including root cause, as a [Markdown-formatted](https://www.markdownguide.org/cheat-sheet/) string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`.  * `{Tags}`: The list of tags that are defined for all impacted entities, separated by commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#text TrelloNotification#text}
  */
  readonly text: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification dynatrace_trello_notification}
*/
export class TrelloNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_trello_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrelloNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrelloNotification to import
  * @param importFromId The id of the existing TrelloNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrelloNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_trello_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/trello_notification dynatrace_trello_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrelloNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: TrelloNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_trello_notification',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._applicationKey = config.applicationKey;
    this._authorizationToken = config.authorizationToken;
    this._boardId = config.boardId;
    this._description = config.description;
    this._id = config.id;
    this._legacyId = config.legacyId;
    this._listId = config.listId;
    this._name = config.name;
    this._profile = config.profile;
    this._resolvedListId = config.resolvedListId;
    this._text = config.text;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // application_key - computed: false, optional: false, required: true
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // authorization_token - computed: false, optional: true, required: false
  private _authorizationToken?: string; 
  public get authorizationToken() {
    return this.getStringAttribute('authorization_token');
  }
  public set authorizationToken(value: string) {
    this._authorizationToken = value;
  }
  public resetAuthorizationToken() {
    this._authorizationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTokenInput() {
    return this._authorizationToken;
  }

  // board_id - computed: false, optional: false, required: true
  private _boardId?: string; 
  public get boardId() {
    return this.getStringAttribute('board_id');
  }
  public set boardId(value: string) {
    this._boardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boardIdInput() {
    return this._boardId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // legacy_id - computed: true, optional: true, required: false
  private _legacyId?: string; 
  public get legacyId() {
    return this.getStringAttribute('legacy_id');
  }
  public set legacyId(value: string) {
    this._legacyId = value;
  }
  public resetLegacyId() {
    this._legacyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyIdInput() {
    return this._legacyId;
  }

  // list_id - computed: false, optional: false, required: true
  private _listId?: string; 
  public get listId() {
    return this.getStringAttribute('list_id');
  }
  public set listId(value: string) {
    this._listId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listIdInput() {
    return this._listId;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // resolved_list_id - computed: false, optional: false, required: true
  private _resolvedListId?: string; 
  public get resolvedListId() {
    return this.getStringAttribute('resolved_list_id');
  }
  public set resolvedListId(value: string) {
    this._resolvedListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedListIdInput() {
    return this._resolvedListId;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      application_key: cdktf.stringToTerraform(this._applicationKey),
      authorization_token: cdktf.stringToTerraform(this._authorizationToken),
      board_id: cdktf.stringToTerraform(this._boardId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      legacy_id: cdktf.stringToTerraform(this._legacyId),
      list_id: cdktf.stringToTerraform(this._listId),
      name: cdktf.stringToTerraform(this._name),
      profile: cdktf.stringToTerraform(this._profile),
      resolved_list_id: cdktf.stringToTerraform(this._resolvedListId),
      text: cdktf.stringToTerraform(this._text),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_key: {
        value: cdktf.stringToHclTerraform(this._applicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_token: {
        value: cdktf.stringToHclTerraform(this._authorizationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      board_id: {
        value: cdktf.stringToHclTerraform(this._boardId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      legacy_id: {
        value: cdktf.stringToHclTerraform(this._legacyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_id: {
        value: cdktf.stringToHclTerraform(this._listId),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolved_list_id: {
        value: cdktf.stringToHclTerraform(this._resolvedListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
