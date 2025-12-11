// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceNowIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A template that Observability Cloud uses to create the ServiceNow PUT JSON payloads when an alert is cleared in ServiceNow. Use this optional field to send the values of Observability Cloud alert properties to specific fields in ServiceNow. See API reference for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration#alert_resolved_payload_template ServiceNowIntegration#alert_resolved_payload_template}
  */
  readonly alertResolvedPayloadTemplate?: string;
  /**
  * A template that Observability Cloud uses to create the ServiceNow POST JSON payloads when an alert sends a notification to ServiceNow. Use this optional field to send the values of Observability Cloud alert properties to specific fields in ServiceNow. See API reference for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration#alert_triggered_payload_template ServiceNowIntegration#alert_triggered_payload_template}
  */
  readonly alertTriggeredPayloadTemplate?: string;
  /**
  * Whether the integration is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration#enabled ServiceNowIntegration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration#id ServiceNowIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the ServiceNow instance, for example `myInstances.service-now.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration#instance_name ServiceNowIntegration#instance_name}
  */
  readonly instanceName: string;
  /**
  * The type of issue in standard ITIL terminology. The allowed values are `Incident` and `Problem`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration#issue_type ServiceNowIntegration#issue_type}
  */
  readonly issueType: string;
  /**
  * Name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration#name ServiceNowIntegration#name}
  */
  readonly name: string;
  /**
  * Password used to authenticate the ServiceNow integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration#password ServiceNowIntegration#password}
  */
  readonly password: string;
  /**
  * User name used to authenticate the ServiceNow integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration#username ServiceNowIntegration#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration signalfx_service_now_integration}
*/
export class ServiceNowIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_service_now_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceNowIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceNowIntegration to import
  * @param importFromId The id of the existing ServiceNowIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceNowIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_service_now_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/service_now_integration signalfx_service_now_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceNowIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceNowIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_service_now_integration',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.1',
        providerVersionConstraint: '9.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertResolvedPayloadTemplate = config.alertResolvedPayloadTemplate;
    this._alertTriggeredPayloadTemplate = config.alertTriggeredPayloadTemplate;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._issueType = config.issueType;
    this._name = config.name;
    this._password = config.password;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_resolved_payload_template - computed: false, optional: true, required: false
  private _alertResolvedPayloadTemplate?: string; 
  public get alertResolvedPayloadTemplate() {
    return this.getStringAttribute('alert_resolved_payload_template');
  }
  public set alertResolvedPayloadTemplate(value: string) {
    this._alertResolvedPayloadTemplate = value;
  }
  public resetAlertResolvedPayloadTemplate() {
    this._alertResolvedPayloadTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertResolvedPayloadTemplateInput() {
    return this._alertResolvedPayloadTemplate;
  }

  // alert_triggered_payload_template - computed: false, optional: true, required: false
  private _alertTriggeredPayloadTemplate?: string; 
  public get alertTriggeredPayloadTemplate() {
    return this.getStringAttribute('alert_triggered_payload_template');
  }
  public set alertTriggeredPayloadTemplate(value: string) {
    this._alertTriggeredPayloadTemplate = value;
  }
  public resetAlertTriggeredPayloadTemplate() {
    this._alertTriggeredPayloadTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTriggeredPayloadTemplateInput() {
    return this._alertTriggeredPayloadTemplate;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // issue_type - computed: false, optional: false, required: true
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_resolved_payload_template: cdktf.stringToTerraform(this._alertResolvedPayloadTemplate),
      alert_triggered_payload_template: cdktf.stringToTerraform(this._alertTriggeredPayloadTemplate),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      issue_type: cdktf.stringToTerraform(this._issueType),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_resolved_payload_template: {
        value: cdktf.stringToHclTerraform(this._alertResolvedPayloadTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_triggered_payload_template: {
        value: cdktf.stringToHclTerraform(this._alertTriggeredPayloadTemplate),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issue_type: {
        value: cdktf.stringToHclTerraform(this._issueType),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
