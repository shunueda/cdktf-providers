// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsConfigurationAddressesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#address ConversationsConfigurationAddressesV1#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#address_country ConversationsConfigurationAddressesV1#address_country}
  */
  readonly addressCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#auto_creation_conversation_service_sid ConversationsConfigurationAddressesV1#auto_creation_conversation_service_sid}
  */
  readonly autoCreationConversationServiceSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#auto_creation_enabled ConversationsConfigurationAddressesV1#auto_creation_enabled}
  */
  readonly autoCreationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#auto_creation_studio_flow_sid ConversationsConfigurationAddressesV1#auto_creation_studio_flow_sid}
  */
  readonly autoCreationStudioFlowSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#auto_creation_studio_retry_count ConversationsConfigurationAddressesV1#auto_creation_studio_retry_count}
  */
  readonly autoCreationStudioRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#auto_creation_type ConversationsConfigurationAddressesV1#auto_creation_type}
  */
  readonly autoCreationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#auto_creation_webhook_filters ConversationsConfigurationAddressesV1#auto_creation_webhook_filters}
  */
  readonly autoCreationWebhookFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#auto_creation_webhook_method ConversationsConfigurationAddressesV1#auto_creation_webhook_method}
  */
  readonly autoCreationWebhookMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#auto_creation_webhook_url ConversationsConfigurationAddressesV1#auto_creation_webhook_url}
  */
  readonly autoCreationWebhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#friendly_name ConversationsConfigurationAddressesV1#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#id ConversationsConfigurationAddressesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#type ConversationsConfigurationAddressesV1#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1 twilio_conversations_configuration_addresses_v1}
*/
export class ConversationsConfigurationAddressesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_conversations_configuration_addresses_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsConfigurationAddressesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsConfigurationAddressesV1 to import
  * @param importFromId The id of the existing ConversationsConfigurationAddressesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsConfigurationAddressesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_conversations_configuration_addresses_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_configuration_addresses_v1 twilio_conversations_configuration_addresses_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsConfigurationAddressesV1Config
  */
  public constructor(scope: Construct, id: string, config: ConversationsConfigurationAddressesV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_conversations_configuration_addresses_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._addressCountry = config.addressCountry;
    this._autoCreationConversationServiceSid = config.autoCreationConversationServiceSid;
    this._autoCreationEnabled = config.autoCreationEnabled;
    this._autoCreationStudioFlowSid = config.autoCreationStudioFlowSid;
    this._autoCreationStudioRetryCount = config.autoCreationStudioRetryCount;
    this._autoCreationType = config.autoCreationType;
    this._autoCreationWebhookFilters = config.autoCreationWebhookFilters;
    this._autoCreationWebhookMethod = config.autoCreationWebhookMethod;
    this._autoCreationWebhookUrl = config.autoCreationWebhookUrl;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_country - computed: true, optional: true, required: false
  private _addressCountry?: string; 
  public get addressCountry() {
    return this.getStringAttribute('address_country');
  }
  public set addressCountry(value: string) {
    this._addressCountry = value;
  }
  public resetAddressCountry() {
    this._addressCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressCountryInput() {
    return this._addressCountry;
  }

  // auto_creation_conversation_service_sid - computed: true, optional: true, required: false
  private _autoCreationConversationServiceSid?: string; 
  public get autoCreationConversationServiceSid() {
    return this.getStringAttribute('auto_creation_conversation_service_sid');
  }
  public set autoCreationConversationServiceSid(value: string) {
    this._autoCreationConversationServiceSid = value;
  }
  public resetAutoCreationConversationServiceSid() {
    this._autoCreationConversationServiceSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreationConversationServiceSidInput() {
    return this._autoCreationConversationServiceSid;
  }

  // auto_creation_enabled - computed: true, optional: true, required: false
  private _autoCreationEnabled?: boolean | cdktf.IResolvable; 
  public get autoCreationEnabled() {
    return this.getBooleanAttribute('auto_creation_enabled');
  }
  public set autoCreationEnabled(value: boolean | cdktf.IResolvable) {
    this._autoCreationEnabled = value;
  }
  public resetAutoCreationEnabled() {
    this._autoCreationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreationEnabledInput() {
    return this._autoCreationEnabled;
  }

  // auto_creation_studio_flow_sid - computed: true, optional: true, required: false
  private _autoCreationStudioFlowSid?: string; 
  public get autoCreationStudioFlowSid() {
    return this.getStringAttribute('auto_creation_studio_flow_sid');
  }
  public set autoCreationStudioFlowSid(value: string) {
    this._autoCreationStudioFlowSid = value;
  }
  public resetAutoCreationStudioFlowSid() {
    this._autoCreationStudioFlowSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreationStudioFlowSidInput() {
    return this._autoCreationStudioFlowSid;
  }

  // auto_creation_studio_retry_count - computed: true, optional: true, required: false
  private _autoCreationStudioRetryCount?: number; 
  public get autoCreationStudioRetryCount() {
    return this.getNumberAttribute('auto_creation_studio_retry_count');
  }
  public set autoCreationStudioRetryCount(value: number) {
    this._autoCreationStudioRetryCount = value;
  }
  public resetAutoCreationStudioRetryCount() {
    this._autoCreationStudioRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreationStudioRetryCountInput() {
    return this._autoCreationStudioRetryCount;
  }

  // auto_creation_type - computed: true, optional: true, required: false
  private _autoCreationType?: string; 
  public get autoCreationType() {
    return this.getStringAttribute('auto_creation_type');
  }
  public set autoCreationType(value: string) {
    this._autoCreationType = value;
  }
  public resetAutoCreationType() {
    this._autoCreationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreationTypeInput() {
    return this._autoCreationType;
  }

  // auto_creation_webhook_filters - computed: true, optional: true, required: false
  private _autoCreationWebhookFilters?: string[]; 
  public get autoCreationWebhookFilters() {
    return this.getListAttribute('auto_creation_webhook_filters');
  }
  public set autoCreationWebhookFilters(value: string[]) {
    this._autoCreationWebhookFilters = value;
  }
  public resetAutoCreationWebhookFilters() {
    this._autoCreationWebhookFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreationWebhookFiltersInput() {
    return this._autoCreationWebhookFilters;
  }

  // auto_creation_webhook_method - computed: true, optional: true, required: false
  private _autoCreationWebhookMethod?: string; 
  public get autoCreationWebhookMethod() {
    return this.getStringAttribute('auto_creation_webhook_method');
  }
  public set autoCreationWebhookMethod(value: string) {
    this._autoCreationWebhookMethod = value;
  }
  public resetAutoCreationWebhookMethod() {
    this._autoCreationWebhookMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreationWebhookMethodInput() {
    return this._autoCreationWebhookMethod;
  }

  // auto_creation_webhook_url - computed: true, optional: true, required: false
  private _autoCreationWebhookUrl?: string; 
  public get autoCreationWebhookUrl() {
    return this.getStringAttribute('auto_creation_webhook_url');
  }
  public set autoCreationWebhookUrl(value: string) {
    this._autoCreationWebhookUrl = value;
  }
  public resetAutoCreationWebhookUrl() {
    this._autoCreationWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreationWebhookUrlInput() {
    return this._autoCreationWebhookUrl;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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
      address: cdktf.stringToTerraform(this._address),
      address_country: cdktf.stringToTerraform(this._addressCountry),
      auto_creation_conversation_service_sid: cdktf.stringToTerraform(this._autoCreationConversationServiceSid),
      auto_creation_enabled: cdktf.booleanToTerraform(this._autoCreationEnabled),
      auto_creation_studio_flow_sid: cdktf.stringToTerraform(this._autoCreationStudioFlowSid),
      auto_creation_studio_retry_count: cdktf.numberToTerraform(this._autoCreationStudioRetryCount),
      auto_creation_type: cdktf.stringToTerraform(this._autoCreationType),
      auto_creation_webhook_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoCreationWebhookFilters),
      auto_creation_webhook_method: cdktf.stringToTerraform(this._autoCreationWebhookMethod),
      auto_creation_webhook_url: cdktf.stringToTerraform(this._autoCreationWebhookUrl),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_country: {
        value: cdktf.stringToHclTerraform(this._addressCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_creation_conversation_service_sid: {
        value: cdktf.stringToHclTerraform(this._autoCreationConversationServiceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_creation_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoCreationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_creation_studio_flow_sid: {
        value: cdktf.stringToHclTerraform(this._autoCreationStudioFlowSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_creation_studio_retry_count: {
        value: cdktf.numberToHclTerraform(this._autoCreationStudioRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_creation_type: {
        value: cdktf.stringToHclTerraform(this._autoCreationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_creation_webhook_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoCreationWebhookFilters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_creation_webhook_method: {
        value: cdktf.stringToHclTerraform(this._autoCreationWebhookMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_creation_webhook_url: {
        value: cdktf.stringToHclTerraform(this._autoCreationWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
