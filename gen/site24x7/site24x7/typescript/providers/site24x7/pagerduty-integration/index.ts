// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagerdutyIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tag id’s to be associated with the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#alert_tags_id PagerdutyIntegration#alert_tags_id}
  */
  readonly alertTagsId?: string[];
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Critical'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#critical_alert PagerdutyIntegration#critical_alert}
  */
  readonly criticalAlert?: boolean | cdktf.IResolvable;
  /**
  * Mandatory, if send_custom_parameters is set as true. Custom parameters to be passed while accessing the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#custom_parameters PagerdutyIntegration#custom_parameters}
  */
  readonly customParameters?: string;
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Down'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#down_alert PagerdutyIntegration#down_alert}
  */
  readonly downAlert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#id PagerdutyIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configuration to resolve the incidents manually when the monitor changes to UP status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#manual_resolve PagerdutyIntegration#manual_resolve}
  */
  readonly manualResolve?: boolean | cdktf.IResolvable;
  /**
  * Monitors to be associated with the integration when the selection_type = 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#monitors PagerdutyIntegration#monitors}
  */
  readonly monitors?: string[];
  /**
  * Display name for the PagerDuty Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#name PagerdutyIntegration#name}
  */
  readonly name: string;
  /**
  * Resource Type associated with this integration. Default value is '0'. Can take values 0|2|3. '0' denotes 'All Monitors', '2' denotes 'Monitors', '3' denotes 'Tags'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#selection_type PagerdutyIntegration#selection_type}
  */
  readonly selectionType?: number;
  /**
  * Configuration to send custom parameters while executing the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#send_custom_parameters PagerdutyIntegration#send_custom_parameters}
  */
  readonly sendCustomParameters?: boolean | cdktf.IResolvable;
  /**
  * Name of the service who posted the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#sender_name PagerdutyIntegration#sender_name}
  */
  readonly senderName: string;
  /**
  * Unique integration key provided by PagerDuty to facilitate incident creation in PagerDuty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#service_key PagerdutyIntegration#service_key}
  */
  readonly serviceKey: string;
  /**
  * Tags to be associated with the integration when the selection_type = 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#tags PagerdutyIntegration#tags}
  */
  readonly tags?: string[];
  /**
  * Title of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#title PagerdutyIntegration#title}
  */
  readonly title: string;
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Trouble'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications. Default value is 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#trouble_alert PagerdutyIntegration#trouble_alert}
  */
  readonly troubleAlert?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration site24x7_pagerduty_integration}
*/
export class PagerdutyIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_pagerduty_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PagerdutyIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PagerdutyIntegration to import
  * @param importFromId The id of the existing PagerdutyIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PagerdutyIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_pagerduty_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/pagerduty_integration site24x7_pagerduty_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagerdutyIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: PagerdutyIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_pagerduty_integration',
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
    this._criticalAlert = config.criticalAlert;
    this._customParameters = config.customParameters;
    this._downAlert = config.downAlert;
    this._id = config.id;
    this._manualResolve = config.manualResolve;
    this._monitors = config.monitors;
    this._name = config.name;
    this._selectionType = config.selectionType;
    this._sendCustomParameters = config.sendCustomParameters;
    this._senderName = config.senderName;
    this._serviceKey = config.serviceKey;
    this._tags = config.tags;
    this._title = config.title;
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

  // custom_parameters - computed: false, optional: true, required: false
  private _customParameters?: string; 
  public get customParameters() {
    return this.getStringAttribute('custom_parameters');
  }
  public set customParameters(value: string) {
    this._customParameters = value;
  }
  public resetCustomParameters() {
    this._customParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters;
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

  // manual_resolve - computed: false, optional: true, required: false
  private _manualResolve?: boolean | cdktf.IResolvable; 
  public get manualResolve() {
    return this.getBooleanAttribute('manual_resolve');
  }
  public set manualResolve(value: boolean | cdktf.IResolvable) {
    this._manualResolve = value;
  }
  public resetManualResolve() {
    this._manualResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualResolveInput() {
    return this._manualResolve;
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

  // send_custom_parameters - computed: false, optional: true, required: false
  private _sendCustomParameters?: boolean | cdktf.IResolvable; 
  public get sendCustomParameters() {
    return this.getBooleanAttribute('send_custom_parameters');
  }
  public set sendCustomParameters(value: boolean | cdktf.IResolvable) {
    this._sendCustomParameters = value;
  }
  public resetSendCustomParameters() {
    this._sendCustomParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCustomParametersInput() {
    return this._sendCustomParameters;
  }

  // sender_name - computed: false, optional: false, required: true
  private _senderName?: string; 
  public get senderName() {
    return this.getStringAttribute('sender_name');
  }
  public set senderName(value: string) {
    this._senderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderNameInput() {
    return this._senderName;
  }

  // service_key - computed: false, optional: false, required: true
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
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
      critical_alert: cdktf.booleanToTerraform(this._criticalAlert),
      custom_parameters: cdktf.stringToTerraform(this._customParameters),
      down_alert: cdktf.booleanToTerraform(this._downAlert),
      id: cdktf.stringToTerraform(this._id),
      manual_resolve: cdktf.booleanToTerraform(this._manualResolve),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      name: cdktf.stringToTerraform(this._name),
      selection_type: cdktf.numberToTerraform(this._selectionType),
      send_custom_parameters: cdktf.booleanToTerraform(this._sendCustomParameters),
      sender_name: cdktf.stringToTerraform(this._senderName),
      service_key: cdktf.stringToTerraform(this._serviceKey),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
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
      critical_alert: {
        value: cdktf.booleanToHclTerraform(this._criticalAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_parameters: {
        value: cdktf.stringToHclTerraform(this._customParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      manual_resolve: {
        value: cdktf.booleanToHclTerraform(this._manualResolve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      send_custom_parameters: {
        value: cdktf.booleanToHclTerraform(this._sendCustomParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sender_name: {
        value: cdktf.stringToHclTerraform(this._senderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_key: {
        value: cdktf.stringToHclTerraform(this._serviceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
