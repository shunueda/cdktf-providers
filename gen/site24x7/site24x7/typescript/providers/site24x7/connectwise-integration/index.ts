// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectwiseIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tag id’s to be associated with the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#alert_tags_id ConnectwiseIntegration#alert_tags_id}
  */
  readonly alertTagsId?: string[];
  /**
  * The configuration settings to resolve or close incidents automatically in Connectwise, when the monitor status changes to UP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#close_status ConnectwiseIntegration#close_status}
  */
  readonly closeStatus: string;
  /**
  * Company for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#company ConnectwiseIntegration#company}
  */
  readonly company: string;
  /**
  * Tickets to your ConnectWise account will be assigned to this Company ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#company_id ConnectwiseIntegration#company_id}
  */
  readonly companyId: string;
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Critical'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#critical_alert ConnectwiseIntegration#critical_alert}
  */
  readonly criticalAlert?: boolean | cdktf.IResolvable;
  /**
  * Mandatory, if send_custom_parameters is set as true. Custom parameters to be passed while accessing the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#custom_parameters ConnectwiseIntegration#custom_parameters}
  */
  readonly customParameters?: string;
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Down'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#down_alert ConnectwiseIntegration#down_alert}
  */
  readonly downAlert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#id ConnectwiseIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configuration to resolve the incidents manually when the monitor changes to UP status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#manual_resolve ConnectwiseIntegration#manual_resolve}
  */
  readonly manualResolve?: boolean | cdktf.IResolvable;
  /**
  * Monitors to be associated with the integration when the selection_type = 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#monitors ConnectwiseIntegration#monitors}
  */
  readonly monitors?: string[];
  /**
  * Display name for the ConnectWise Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#name ConnectwiseIntegration#name}
  */
  readonly name: string;
  /**
  * Private Key for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#private_key ConnectwiseIntegration#private_key}
  */
  readonly privateKey: string;
  /**
  * Public Key for Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#public_key ConnectwiseIntegration#public_key}
  */
  readonly publicKey: string;
  /**
  * Resource Type associated with this integration. Default value is '0'. Can take values 0|2|3. '0' denotes 'All Monitors', '2' denotes 'Monitors', '3' denotes 'Tags'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#selection_type ConnectwiseIntegration#selection_type}
  */
  readonly selectionType?: number;
  /**
  * Configuration to send custom parameters while executing the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#send_custom_parameters ConnectwiseIntegration#send_custom_parameters}
  */
  readonly sendCustomParameters?: boolean | cdktf.IResolvable;
  /**
  * Tags to be associated with the integration when the selection_type = 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#tags ConnectwiseIntegration#tags}
  */
  readonly tags?: string[];
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Trouble'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications. Default value is 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#trouble_alert ConnectwiseIntegration#trouble_alert}
  */
  readonly troubleAlert?: boolean | cdktf.IResolvable;
  /**
  * URL to be invoked for action execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#url ConnectwiseIntegration#url}
  */
  readonly url: string;
  /**
  * User Alert Group to be notified when there is an error in ConnectWise Manage Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#user_groups ConnectwiseIntegration#user_groups}
  */
  readonly userGroups?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration site24x7_connectwise_integration}
*/
export class ConnectwiseIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_connectwise_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectwiseIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectwiseIntegration to import
  * @param importFromId The id of the existing ConnectwiseIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectwiseIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_connectwise_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/connectwise_integration site24x7_connectwise_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectwiseIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectwiseIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_connectwise_integration',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3',
        providerVersionConstraint: '2.0.3'
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
    this._closeStatus = config.closeStatus;
    this._company = config.company;
    this._companyId = config.companyId;
    this._criticalAlert = config.criticalAlert;
    this._customParameters = config.customParameters;
    this._downAlert = config.downAlert;
    this._id = config.id;
    this._manualResolve = config.manualResolve;
    this._monitors = config.monitors;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._publicKey = config.publicKey;
    this._selectionType = config.selectionType;
    this._sendCustomParameters = config.sendCustomParameters;
    this._tags = config.tags;
    this._troubleAlert = config.troubleAlert;
    this._url = config.url;
    this._userGroups = config.userGroups;
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

  // close_status - computed: false, optional: false, required: true
  private _closeStatus?: string; 
  public get closeStatus() {
    return this.getStringAttribute('close_status');
  }
  public set closeStatus(value: string) {
    this._closeStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get closeStatusInput() {
    return this._closeStatus;
  }

  // company - computed: false, optional: false, required: true
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // company_id - computed: false, optional: false, required: true
  private _companyId?: string; 
  public get companyId() {
    return this.getStringAttribute('company_id');
  }
  public set companyId(value: string) {
    this._companyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string[]; 
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_tags_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertTagsId),
      close_status: cdktf.stringToTerraform(this._closeStatus),
      company: cdktf.stringToTerraform(this._company),
      company_id: cdktf.stringToTerraform(this._companyId),
      critical_alert: cdktf.booleanToTerraform(this._criticalAlert),
      custom_parameters: cdktf.stringToTerraform(this._customParameters),
      down_alert: cdktf.booleanToTerraform(this._downAlert),
      id: cdktf.stringToTerraform(this._id),
      manual_resolve: cdktf.booleanToTerraform(this._manualResolve),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
      selection_type: cdktf.numberToTerraform(this._selectionType),
      send_custom_parameters: cdktf.booleanToTerraform(this._sendCustomParameters),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      trouble_alert: cdktf.booleanToTerraform(this._troubleAlert),
      url: cdktf.stringToTerraform(this._url),
      user_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroups),
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
      close_status: {
        value: cdktf.stringToHclTerraform(this._closeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_id: {
        value: cdktf.stringToHclTerraform(this._companyId),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trouble_alert: {
        value: cdktf.booleanToHclTerraform(this._troubleAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
