// https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertChannelDatadogConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Datadog api key required to submit metrics and events to Datadog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog#api_key AlertChannelDatadog#api_key}
  */
  readonly apiKey: string;
  /**
  * The level of detail of logs or event stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog#datadog_service AlertChannelDatadog#datadog_service}
  */
  readonly datadogService?: string;
  /**
  * Where to store your logs, either the US or Europe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog#datadog_site AlertChannelDatadog#datadog_site}
  */
  readonly datadogSite?: string;
  /**
  * The state of the external integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog#enabled AlertChannelDatadog#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog#id AlertChannelDatadog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The integration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog#name AlertChannelDatadog#name}
  */
  readonly name: string;
  /**
  * Whether to test the integration of an alert channel upon creation and modifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog#test_integration AlertChannelDatadog#test_integration}
  */
  readonly testIntegration?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog lacework_alert_channel_datadog}
*/
export class AlertChannelDatadog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_alert_channel_datadog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertChannelDatadog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertChannelDatadog to import
  * @param importFromId The id of the existing AlertChannelDatadog that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertChannelDatadog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_alert_channel_datadog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_channel_datadog lacework_alert_channel_datadog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertChannelDatadogConfig
  */
  public constructor(scope: Construct, id: string, config: AlertChannelDatadogConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_alert_channel_datadog',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._datadogService = config.datadogService;
    this._datadogSite = config.datadogSite;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._testIntegration = config.testIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
  }

  // datadog_service - computed: false, optional: true, required: false
  private _datadogService?: string; 
  public get datadogService() {
    return this.getStringAttribute('datadog_service');
  }
  public set datadogService(value: string) {
    this._datadogService = value;
  }
  public resetDatadogService() {
    this._datadogService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogServiceInput() {
    return this._datadogService;
  }

  // datadog_site - computed: false, optional: true, required: false
  private _datadogSite?: string; 
  public get datadogSite() {
    return this.getStringAttribute('datadog_site');
  }
  public set datadogSite(value: string) {
    this._datadogSite = value;
  }
  public resetDatadogSite() {
    this._datadogSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogSiteInput() {
    return this._datadogSite;
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

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
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

  // org_level - computed: true, optional: false, required: false
  public get orgLevel() {
    return this.getBooleanAttribute('org_level');
  }

  // test_integration - computed: false, optional: true, required: false
  private _testIntegration?: boolean | cdktf.IResolvable; 
  public get testIntegration() {
    return this.getBooleanAttribute('test_integration');
  }
  public set testIntegration(value: boolean | cdktf.IResolvable) {
    this._testIntegration = value;
  }
  public resetTestIntegration() {
    this._testIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testIntegrationInput() {
    return this._testIntegration;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      datadog_service: cdktf.stringToTerraform(this._datadogService),
      datadog_site: cdktf.stringToTerraform(this._datadogSite),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      test_integration: cdktf.booleanToTerraform(this._testIntegration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datadog_service: {
        value: cdktf.stringToHclTerraform(this._datadogService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datadog_site: {
        value: cdktf.stringToHclTerraform(this._datadogSite),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      test_integration: {
        value: cdktf.booleanToHclTerraform(this._testIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
