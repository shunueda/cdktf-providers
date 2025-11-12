// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaitingRoomConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account this waiting room belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#account_id WaitingRoom#account_id}
  */
  readonly accountId?: string;
  /**
  * The waiting room bot handling action. Determines the waiting room behavior for legitimate bots trying to access your website during peak time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#bots_action_in_queuing_mode WaitingRoom#bots_action_in_queuing_mode}
  */
  readonly botsActionInQueuingMode?: string;
  /**
  * The active users activation threshold of the waiting room. The waiting room is activated when number of active users reached specified value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#concurrent_sessions_threshold WaitingRoom#concurrent_sessions_threshold}
  */
  readonly concurrentSessionsThreshold?: number;
  /**
  * The waiting room description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#description WaitingRoom#description}
  */
  readonly description?: string;
  /**
  * whether this waiting room is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#enabled WaitingRoom#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The entrance rate activation threshold of the waiting room. The waiting room is activated when sessions per minute exceed the specified value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#entrance_rate_threshold WaitingRoom#entrance_rate_threshold}
  */
  readonly entranceRateThreshold?: number;
  /**
  * The rule conditions that determine on which sessions this waiting room applies. (no filter means the waiting room applies for the whole site)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#filter WaitingRoom#filter}
  */
  readonly filter?: string;
  /**
  * Enable to hide the user's position in waiting room queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#hide_position_in_line WaitingRoom#hide_position_in_line}
  */
  readonly hidePositionInLine?: boolean | cdktf.IResolvable;
  /**
  * The HTML template file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#html_template_base64 WaitingRoom#html_template_base64}
  */
  readonly htmlTemplateBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#id WaitingRoom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If waiting room conditions that limit the scope of the waiting room to a subset of the website have been defined, the user is considered active only when navigating the pages in scope of the conditions. A user who is inactive for a longer period of time is considered as having left the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#inactivity_timeout WaitingRoom#inactivity_timeout}
  */
  readonly inactivityTimeout?: number;
  /**
  * The waiting room name. Must be unique across all waiting room of the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#name WaitingRoom#name}
  */
  readonly name: string;
  /**
  * Queue inactivity timeout. A user in the waiting room who is inactive for a longer period of time is considered as having left the queue. On returning to the site, the user moves to the end of the queue and needs to wait in line again if the waiting room is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#queue_inactivity_timeout WaitingRoom#queue_inactivity_timeout}
  */
  readonly queueInactivityTimeout?: number;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#site_id WaitingRoom#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room incapsula_waiting_room}
*/
export class WaitingRoom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_waiting_room";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaitingRoom to import
  * @param importFromId The id of the existing WaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaitingRoom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_waiting_room", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waiting_room incapsula_waiting_room} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaitingRoomConfig
  */
  public constructor(scope: Construct, id: string, config: WaitingRoomConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_waiting_room',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._botsActionInQueuingMode = config.botsActionInQueuingMode;
    this._concurrentSessionsThreshold = config.concurrentSessionsThreshold;
    this._description = config.description;
    this._enabled = config.enabled;
    this._entranceRateThreshold = config.entranceRateThreshold;
    this._filter = config.filter;
    this._hidePositionInLine = config.hidePositionInLine;
    this._htmlTemplateBase64 = config.htmlTemplateBase64;
    this._id = config.id;
    this._inactivityTimeout = config.inactivityTimeout;
    this._name = config.name;
    this._queueInactivityTimeout = config.queueInactivityTimeout;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // bots_action_in_queuing_mode - computed: false, optional: true, required: false
  private _botsActionInQueuingMode?: string; 
  public get botsActionInQueuingMode() {
    return this.getStringAttribute('bots_action_in_queuing_mode');
  }
  public set botsActionInQueuingMode(value: string) {
    this._botsActionInQueuingMode = value;
  }
  public resetBotsActionInQueuingMode() {
    this._botsActionInQueuingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botsActionInQueuingModeInput() {
    return this._botsActionInQueuingMode;
  }

  // concurrent_sessions_threshold - computed: false, optional: true, required: false
  private _concurrentSessionsThreshold?: number; 
  public get concurrentSessionsThreshold() {
    return this.getNumberAttribute('concurrent_sessions_threshold');
  }
  public set concurrentSessionsThreshold(value: number) {
    this._concurrentSessionsThreshold = value;
  }
  public resetConcurrentSessionsThreshold() {
    this._concurrentSessionsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSessionsThresholdInput() {
    return this._concurrentSessionsThreshold;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // entrance_rate_threshold - computed: false, optional: true, required: false
  private _entranceRateThreshold?: number; 
  public get entranceRateThreshold() {
    return this.getNumberAttribute('entrance_rate_threshold');
  }
  public set entranceRateThreshold(value: number) {
    this._entranceRateThreshold = value;
  }
  public resetEntranceRateThreshold() {
    this._entranceRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entranceRateThresholdInput() {
    return this._entranceRateThreshold;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // hide_position_in_line - computed: false, optional: true, required: false
  private _hidePositionInLine?: boolean | cdktf.IResolvable; 
  public get hidePositionInLine() {
    return this.getBooleanAttribute('hide_position_in_line');
  }
  public set hidePositionInLine(value: boolean | cdktf.IResolvable) {
    this._hidePositionInLine = value;
  }
  public resetHidePositionInLine() {
    this._hidePositionInLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hidePositionInLineInput() {
    return this._hidePositionInLine;
  }

  // html_template_base64 - computed: false, optional: true, required: false
  private _htmlTemplateBase64?: string; 
  public get htmlTemplateBase64() {
    return this.getStringAttribute('html_template_base64');
  }
  public set htmlTemplateBase64(value: string) {
    this._htmlTemplateBase64 = value;
  }
  public resetHtmlTemplateBase64() {
    this._htmlTemplateBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlTemplateBase64Input() {
    return this._htmlTemplateBase64;
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

  // inactivity_timeout - computed: false, optional: true, required: false
  private _inactivityTimeout?: number; 
  public get inactivityTimeout() {
    return this.getNumberAttribute('inactivity_timeout');
  }
  public set inactivityTimeout(value: number) {
    this._inactivityTimeout = value;
  }
  public resetInactivityTimeout() {
    this._inactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutInput() {
    return this._inactivityTimeout;
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // queue_inactivity_timeout - computed: false, optional: true, required: false
  private _queueInactivityTimeout?: number; 
  public get queueInactivityTimeout() {
    return this.getNumberAttribute('queue_inactivity_timeout');
  }
  public set queueInactivityTimeout(value: number) {
    this._queueInactivityTimeout = value;
  }
  public resetQueueInactivityTimeout() {
    this._queueInactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInactivityTimeoutInput() {
    return this._queueInactivityTimeout;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bots_action_in_queuing_mode: cdktf.stringToTerraform(this._botsActionInQueuingMode),
      concurrent_sessions_threshold: cdktf.numberToTerraform(this._concurrentSessionsThreshold),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entrance_rate_threshold: cdktf.numberToTerraform(this._entranceRateThreshold),
      filter: cdktf.stringToTerraform(this._filter),
      hide_position_in_line: cdktf.booleanToTerraform(this._hidePositionInLine),
      html_template_base64: cdktf.stringToTerraform(this._htmlTemplateBase64),
      id: cdktf.stringToTerraform(this._id),
      inactivity_timeout: cdktf.numberToTerraform(this._inactivityTimeout),
      name: cdktf.stringToTerraform(this._name),
      queue_inactivity_timeout: cdktf.numberToTerraform(this._queueInactivityTimeout),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bots_action_in_queuing_mode: {
        value: cdktf.stringToHclTerraform(this._botsActionInQueuingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrent_sessions_threshold: {
        value: cdktf.numberToHclTerraform(this._concurrentSessionsThreshold),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entrance_rate_threshold: {
        value: cdktf.numberToHclTerraform(this._entranceRateThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_position_in_line: {
        value: cdktf.booleanToHclTerraform(this._hidePositionInLine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      html_template_base64: {
        value: cdktf.stringToHclTerraform(this._htmlTemplateBase64),
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
      inactivity_timeout: {
        value: cdktf.numberToHclTerraform(this._inactivityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_inactivity_timeout: {
        value: cdktf.numberToHclTerraform(this._queueInactivityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
