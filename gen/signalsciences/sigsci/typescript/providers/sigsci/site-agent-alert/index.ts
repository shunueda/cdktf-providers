// https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteAgentAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action for agent alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#action SiteAgentAlert#action}
  */
  readonly action: string;
  /**
  * The number of seconds this alert is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#block_duration_seconds SiteAgentAlert#block_duration_seconds}
  */
  readonly blockDurationSeconds?: number;
  /**
  * A flag to toggle this alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#enabled SiteAgentAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Field_name for agent alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#field_name SiteAgentAlert#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#id SiteAgentAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Integer value for interval. Must be 5, 10, or 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#interval SiteAgentAlert#interval}
  */
  readonly interval: number;
  /**
  * description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#long_name SiteAgentAlert#long_name}
  */
  readonly longName?: string;
  /**
  * Operator for agent alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#operator SiteAgentAlert#operator}
  */
  readonly operator: string;
  /**
  * Site short name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#site_short_name SiteAgentAlert#site_short_name}
  */
  readonly siteShortName: string;
  /**
  * A flag to skip notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#skip_notifications SiteAgentAlert#skip_notifications}
  */
  readonly skipNotifications?: boolean | cdktf.IResolvable;
  /**
  * The name of the tag whose occurrences the alert is watching. Must match an existing tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#tag_name SiteAgentAlert#tag_name}
  */
  readonly tagName: string;
  /**
  * The number of occurrences of the tag in the interval needed to trigger the alert. Min 0, Max 3600000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#threshold SiteAgentAlert#threshold}
  */
  readonly threshold: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert sigsci_site_agent_alert}
*/
export class SiteAgentAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sigsci_site_agent_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteAgentAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteAgentAlert to import
  * @param importFromId The id of the existing SiteAgentAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteAgentAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sigsci_site_agent_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_agent_alert sigsci_site_agent_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteAgentAlertConfig
  */
  public constructor(scope: Construct, id: string, config: SiteAgentAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'sigsci_site_agent_alert',
      terraformGeneratorMetadata: {
        providerName: 'sigsci',
        providerVersion: '3.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._blockDurationSeconds = config.blockDurationSeconds;
    this._enabled = config.enabled;
    this._fieldName = config.fieldName;
    this._id = config.id;
    this._interval = config.interval;
    this._longName = config.longName;
    this._operator = config.operator;
    this._siteShortName = config.siteShortName;
    this._skipNotifications = config.skipNotifications;
    this._tagName = config.tagName;
    this._threshold = config.threshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // block_duration_seconds - computed: false, optional: true, required: false
  private _blockDurationSeconds?: number; 
  public get blockDurationSeconds() {
    return this.getNumberAttribute('block_duration_seconds');
  }
  public set blockDurationSeconds(value: number) {
    this._blockDurationSeconds = value;
  }
  public resetBlockDurationSeconds() {
    this._blockDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationSecondsInput() {
    return this._blockDurationSeconds;
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

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
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

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // long_name - computed: false, optional: true, required: false
  private _longName?: string; 
  public get longName() {
    return this.getStringAttribute('long_name');
  }
  public set longName(value: string) {
    this._longName = value;
  }
  public resetLongName() {
    this._longName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longNameInput() {
    return this._longName;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // site_short_name - computed: false, optional: false, required: true
  private _siteShortName?: string; 
  public get siteShortName() {
    return this.getStringAttribute('site_short_name');
  }
  public set siteShortName(value: string) {
    this._siteShortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteShortNameInput() {
    return this._siteShortName;
  }

  // skip_notifications - computed: false, optional: true, required: false
  private _skipNotifications?: boolean | cdktf.IResolvable; 
  public get skipNotifications() {
    return this.getBooleanAttribute('skip_notifications');
  }
  public set skipNotifications(value: boolean | cdktf.IResolvable) {
    this._skipNotifications = value;
  }
  public resetSkipNotifications() {
    this._skipNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNotificationsInput() {
    return this._skipNotifications;
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      block_duration_seconds: cdktf.numberToTerraform(this._blockDurationSeconds),
      enabled: cdktf.booleanToTerraform(this._enabled),
      field_name: cdktf.stringToTerraform(this._fieldName),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      long_name: cdktf.stringToTerraform(this._longName),
      operator: cdktf.stringToTerraform(this._operator),
      site_short_name: cdktf.stringToTerraform(this._siteShortName),
      skip_notifications: cdktf.booleanToTerraform(this._skipNotifications),
      tag_name: cdktf.stringToTerraform(this._tagName),
      threshold: cdktf.numberToTerraform(this._threshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_duration_seconds: {
        value: cdktf.numberToHclTerraform(this._blockDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      field_name: {
        value: cdktf.stringToHclTerraform(this._fieldName),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      long_name: {
        value: cdktf.stringToHclTerraform(this._longName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operator: {
        value: cdktf.stringToHclTerraform(this._operator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_short_name: {
        value: cdktf.stringToHclTerraform(this._siteShortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_notifications: {
        value: cdktf.booleanToHclTerraform(this._skipNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_name: {
        value: cdktf.stringToHclTerraform(this._tagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
