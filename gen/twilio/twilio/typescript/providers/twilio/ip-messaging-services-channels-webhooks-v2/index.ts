// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpMessagingServicesChannelsWebhooksV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#channel_sid IpMessagingServicesChannelsWebhooksV2#channel_sid}
  */
  readonly channelSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#configuration_filters IpMessagingServicesChannelsWebhooksV2#configuration_filters}
  */
  readonly configurationFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#configuration_flow_sid IpMessagingServicesChannelsWebhooksV2#configuration_flow_sid}
  */
  readonly configurationFlowSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#configuration_method IpMessagingServicesChannelsWebhooksV2#configuration_method}
  */
  readonly configurationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#configuration_retry_count IpMessagingServicesChannelsWebhooksV2#configuration_retry_count}
  */
  readonly configurationRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#configuration_triggers IpMessagingServicesChannelsWebhooksV2#configuration_triggers}
  */
  readonly configurationTriggers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#configuration_url IpMessagingServicesChannelsWebhooksV2#configuration_url}
  */
  readonly configurationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#id IpMessagingServicesChannelsWebhooksV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#service_sid IpMessagingServicesChannelsWebhooksV2#service_sid}
  */
  readonly serviceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#type IpMessagingServicesChannelsWebhooksV2#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2 twilio_ip_messaging_services_channels_webhooks_v2}
*/
export class IpMessagingServicesChannelsWebhooksV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_ip_messaging_services_channels_webhooks_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpMessagingServicesChannelsWebhooksV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpMessagingServicesChannelsWebhooksV2 to import
  * @param importFromId The id of the existing IpMessagingServicesChannelsWebhooksV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpMessagingServicesChannelsWebhooksV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_ip_messaging_services_channels_webhooks_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_channels_webhooks_v2 twilio_ip_messaging_services_channels_webhooks_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpMessagingServicesChannelsWebhooksV2Config
  */
  public constructor(scope: Construct, id: string, config: IpMessagingServicesChannelsWebhooksV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_ip_messaging_services_channels_webhooks_v2',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channelSid = config.channelSid;
    this._configurationFilters = config.configurationFilters;
    this._configurationFlowSid = config.configurationFlowSid;
    this._configurationMethod = config.configurationMethod;
    this._configurationRetryCount = config.configurationRetryCount;
    this._configurationTriggers = config.configurationTriggers;
    this._configurationUrl = config.configurationUrl;
    this._id = config.id;
    this._serviceSid = config.serviceSid;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_sid - computed: false, optional: false, required: true
  private _channelSid?: string; 
  public get channelSid() {
    return this.getStringAttribute('channel_sid');
  }
  public set channelSid(value: string) {
    this._channelSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelSidInput() {
    return this._channelSid;
  }

  // configuration_filters - computed: true, optional: true, required: false
  private _configurationFilters?: string[]; 
  public get configurationFilters() {
    return this.getListAttribute('configuration_filters');
  }
  public set configurationFilters(value: string[]) {
    this._configurationFilters = value;
  }
  public resetConfigurationFilters() {
    this._configurationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationFiltersInput() {
    return this._configurationFilters;
  }

  // configuration_flow_sid - computed: true, optional: true, required: false
  private _configurationFlowSid?: string; 
  public get configurationFlowSid() {
    return this.getStringAttribute('configuration_flow_sid');
  }
  public set configurationFlowSid(value: string) {
    this._configurationFlowSid = value;
  }
  public resetConfigurationFlowSid() {
    this._configurationFlowSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationFlowSidInput() {
    return this._configurationFlowSid;
  }

  // configuration_method - computed: true, optional: true, required: false
  private _configurationMethod?: string; 
  public get configurationMethod() {
    return this.getStringAttribute('configuration_method');
  }
  public set configurationMethod(value: string) {
    this._configurationMethod = value;
  }
  public resetConfigurationMethod() {
    this._configurationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationMethodInput() {
    return this._configurationMethod;
  }

  // configuration_retry_count - computed: true, optional: true, required: false
  private _configurationRetryCount?: number; 
  public get configurationRetryCount() {
    return this.getNumberAttribute('configuration_retry_count');
  }
  public set configurationRetryCount(value: number) {
    this._configurationRetryCount = value;
  }
  public resetConfigurationRetryCount() {
    this._configurationRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationRetryCountInput() {
    return this._configurationRetryCount;
  }

  // configuration_triggers - computed: true, optional: true, required: false
  private _configurationTriggers?: string[]; 
  public get configurationTriggers() {
    return this.getListAttribute('configuration_triggers');
  }
  public set configurationTriggers(value: string[]) {
    this._configurationTriggers = value;
  }
  public resetConfigurationTriggers() {
    this._configurationTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTriggersInput() {
    return this._configurationTriggers;
  }

  // configuration_url - computed: true, optional: true, required: false
  private _configurationUrl?: string; 
  public get configurationUrl() {
    return this.getStringAttribute('configuration_url');
  }
  public set configurationUrl(value: string) {
    this._configurationUrl = value;
  }
  public resetConfigurationUrl() {
    this._configurationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationUrlInput() {
    return this._configurationUrl;
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

  // service_sid - computed: false, optional: false, required: true
  private _serviceSid?: string; 
  public get serviceSid() {
    return this.getStringAttribute('service_sid');
  }
  public set serviceSid(value: string) {
    this._serviceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSidInput() {
    return this._serviceSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_sid: cdktf.stringToTerraform(this._channelSid),
      configuration_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configurationFilters),
      configuration_flow_sid: cdktf.stringToTerraform(this._configurationFlowSid),
      configuration_method: cdktf.stringToTerraform(this._configurationMethod),
      configuration_retry_count: cdktf.numberToTerraform(this._configurationRetryCount),
      configuration_triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configurationTriggers),
      configuration_url: cdktf.stringToTerraform(this._configurationUrl),
      id: cdktf.stringToTerraform(this._id),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_sid: {
        value: cdktf.stringToHclTerraform(this._channelSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configurationFilters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      configuration_flow_sid: {
        value: cdktf.stringToHclTerraform(this._configurationFlowSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_method: {
        value: cdktf.stringToHclTerraform(this._configurationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_retry_count: {
        value: cdktf.numberToHclTerraform(this._configurationRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      configuration_triggers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configurationTriggers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      configuration_url: {
        value: cdktf.stringToHclTerraform(this._configurationUrl),
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
      service_sid: {
        value: cdktf.stringToHclTerraform(this._serviceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
