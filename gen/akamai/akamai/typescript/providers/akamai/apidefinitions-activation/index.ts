// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApidefinitionsActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_activation#api_id ApidefinitionsActivation#api_id}
  */
  readonly apiId: number;
  /**
  * Automatically acknowledge all warnings for activation to continue. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_activation#auto_acknowledge_warnings ApidefinitionsActivation#auto_acknowledge_warnings}
  */
  readonly autoAcknowledgeWarnings?: boolean | cdktf.IResolvable;
  /**
  * Network on which to activate the API version (STAGING or PRODUCTION)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_activation#network ApidefinitionsActivation#network}
  */
  readonly network: string;
  /**
  * Notes describing the activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_activation#notes ApidefinitionsActivation#notes}
  */
  readonly notes?: string;
  /**
  * List of email addresses to be notified with the results of the activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_activation#notification_recipients ApidefinitionsActivation#notification_recipients}
  */
  readonly notificationRecipients?: string[];
  /**
  * Version of the API to be activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_activation#version ApidefinitionsActivation#version}
  */
  readonly version: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_activation akamai_apidefinitions_activation}
*/
export class ApidefinitionsActivation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_apidefinitions_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApidefinitionsActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApidefinitionsActivation to import
  * @param importFromId The id of the existing ApidefinitionsActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApidefinitionsActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_apidefinitions_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_activation akamai_apidefinitions_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApidefinitionsActivationConfig
  */
  public constructor(scope: Construct, id: string, config: ApidefinitionsActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_apidefinitions_activation',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiId = config.apiId;
    this._autoAcknowledgeWarnings = config.autoAcknowledgeWarnings;
    this._network = config.network;
    this._notes = config.notes;
    this._notificationRecipients = config.notificationRecipients;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: number; 
  public get apiId() {
    return this.getNumberAttribute('api_id');
  }
  public set apiId(value: number) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // auto_acknowledge_warnings - computed: true, optional: true, required: false
  private _autoAcknowledgeWarnings?: boolean | cdktf.IResolvable; 
  public get autoAcknowledgeWarnings() {
    return this.getBooleanAttribute('auto_acknowledge_warnings');
  }
  public set autoAcknowledgeWarnings(value: boolean | cdktf.IResolvable) {
    this._autoAcknowledgeWarnings = value;
  }
  public resetAutoAcknowledgeWarnings() {
    this._autoAcknowledgeWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcknowledgeWarningsInput() {
    return this._autoAcknowledgeWarnings;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // notification_recipients - computed: false, optional: true, required: false
  private _notificationRecipients?: string[]; 
  public get notificationRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_recipients'));
  }
  public set notificationRecipients(value: string[]) {
    this._notificationRecipients = value;
  }
  public resetNotificationRecipients() {
    this._notificationRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRecipientsInput() {
    return this._notificationRecipients;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.numberToTerraform(this._apiId),
      auto_acknowledge_warnings: cdktf.booleanToTerraform(this._autoAcknowledgeWarnings),
      network: cdktf.stringToTerraform(this._network),
      notes: cdktf.stringToTerraform(this._notes),
      notification_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationRecipients),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.numberToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_acknowledge_warnings: {
        value: cdktf.booleanToHclTerraform(this._autoAcknowledgeWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationRecipients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
