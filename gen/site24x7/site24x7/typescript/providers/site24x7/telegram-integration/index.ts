// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelegramIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tag id’s to be associated with the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#alert_tags_id TelegramIntegration#alert_tags_id}
  */
  readonly alertTagsId?: string[];
  /**
  * Hook URL to which the message will be posted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#channel_url TelegramIntegration#channel_url}
  */
  readonly channelUrl: string;
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Critical'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#critical_alert TelegramIntegration#critical_alert}
  */
  readonly criticalAlert?: boolean | cdktf.IResolvable;
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Down'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#down_alert TelegramIntegration#down_alert}
  */
  readonly downAlert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#id TelegramIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitors to be associated with the integration when the selection_type = 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#monitors TelegramIntegration#monitors}
  */
  readonly monitors?: string[];
  /**
  * Display name for the Telegram Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#name TelegramIntegration#name}
  */
  readonly name: string;
  /**
  * Resource Type associated with this integration. Default value is '0'. Can take values 0|2|3. '0' denotes 'All Monitors', '2' denotes 'Monitors', '3' denotes 'Tags'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#selection_type TelegramIntegration#selection_type}
  */
  readonly selectionType?: number;
  /**
  * Tags to be associated with the integration when the selection_type = 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#tags TelegramIntegration#tags}
  */
  readonly tags?: string[];
  /**
  * Title of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#title TelegramIntegration#title}
  */
  readonly title: string;
  /**
  * Hook URL to which the message will be posted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#token TelegramIntegration#token}
  */
  readonly token: string;
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Trouble'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications. Default value is 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#trouble_alert TelegramIntegration#trouble_alert}
  */
  readonly troubleAlert?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration site24x7_telegram_integration}
*/
export class TelegramIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_telegram_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelegramIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelegramIntegration to import
  * @param importFromId The id of the existing TelegramIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelegramIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_telegram_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/telegram_integration site24x7_telegram_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelegramIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: TelegramIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_telegram_integration',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertTagsId = config.alertTagsId;
    this._channelUrl = config.channelUrl;
    this._criticalAlert = config.criticalAlert;
    this._downAlert = config.downAlert;
    this._id = config.id;
    this._monitors = config.monitors;
    this._name = config.name;
    this._selectionType = config.selectionType;
    this._tags = config.tags;
    this._title = config.title;
    this._token = config.token;
    this._troubleAlert = config.troubleAlert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_tags_id - computed: false, optional: true, required: false
  private _alertTagsId?: string[]; 
  public get alertTagsId() {
    return this.getListAttribute('alert_tags_id');
  }
  public set alertTagsId(value: string[]) {
    this._alertTagsId = value;
  }
  public resetAlertTagsId() {
    this._alertTagsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTagsIdInput() {
    return this._alertTagsId;
  }

  // channel_url - computed: false, optional: false, required: true
  private _channelUrl?: string; 
  public get channelUrl() {
    return this.getStringAttribute('channel_url');
  }
  public set channelUrl(value: string) {
    this._channelUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelUrlInput() {
    return this._channelUrl;
  }

  // critical_alert - computed: false, optional: true, required: false
  private _criticalAlert?: boolean | cdktf.IResolvable; 
  public get criticalAlert() {
    return this.getBooleanAttribute('critical_alert');
  }
  public set criticalAlert(value: boolean | cdktf.IResolvable) {
    this._criticalAlert = value;
  }
  public resetCriticalAlert() {
    this._criticalAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalAlertInput() {
    return this._criticalAlert;
  }

  // down_alert - computed: false, optional: true, required: false
  private _downAlert?: boolean | cdktf.IResolvable; 
  public get downAlert() {
    return this.getBooleanAttribute('down_alert');
  }
  public set downAlert(value: boolean | cdktf.IResolvable) {
    this._downAlert = value;
  }
  public resetDownAlert() {
    this._downAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downAlertInput() {
    return this._downAlert;
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

  // monitors - computed: false, optional: true, required: false
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  public resetMonitors() {
    this._monitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
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

  // selection_type - computed: false, optional: true, required: false
  private _selectionType?: number; 
  public get selectionType() {
    return this.getNumberAttribute('selection_type');
  }
  public set selectionType(value: number) {
    this._selectionType = value;
  }
  public resetSelectionType() {
    this._selectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // trouble_alert - computed: false, optional: true, required: false
  private _troubleAlert?: boolean | cdktf.IResolvable; 
  public get troubleAlert() {
    return this.getBooleanAttribute('trouble_alert');
  }
  public set troubleAlert(value: boolean | cdktf.IResolvable) {
    this._troubleAlert = value;
  }
  public resetTroubleAlert() {
    this._troubleAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get troubleAlertInput() {
    return this._troubleAlert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_tags_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertTagsId),
      channel_url: cdktf.stringToTerraform(this._channelUrl),
      critical_alert: cdktf.booleanToTerraform(this._criticalAlert),
      down_alert: cdktf.booleanToTerraform(this._downAlert),
      id: cdktf.stringToTerraform(this._id),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      name: cdktf.stringToTerraform(this._name),
      selection_type: cdktf.numberToTerraform(this._selectionType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      token: cdktf.stringToTerraform(this._token),
      trouble_alert: cdktf.booleanToTerraform(this._troubleAlert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_tags_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertTagsId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      channel_url: {
        value: cdktf.stringToHclTerraform(this._channelUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      critical_alert: {
        value: cdktf.booleanToHclTerraform(this._criticalAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      down_alert: {
        value: cdktf.booleanToHclTerraform(this._downAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selection_type: {
        value: cdktf.numberToHclTerraform(this._selectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trouble_alert: {
        value: cdktf.booleanToHclTerraform(this._troubleAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
