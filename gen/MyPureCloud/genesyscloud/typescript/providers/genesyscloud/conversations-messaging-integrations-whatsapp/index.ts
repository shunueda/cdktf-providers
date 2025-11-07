// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsMessagingIntegrationsWhatsappConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access token returned from the embedded signup flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp#embedded_signup_access_token ConversationsMessagingIntegrationsWhatsapp#embedded_signup_access_token}
  */
  readonly embeddedSignupAccessToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp#id ConversationsMessagingIntegrationsWhatsapp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Messaging Setting for messaging platform integrations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp#messaging_setting_id ConversationsMessagingIntegrationsWhatsapp#messaging_setting_id}
  */
  readonly messagingSettingId?: string;
  /**
  * The name of the WhatsApp Integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp#name ConversationsMessagingIntegrationsWhatsapp#name}
  */
  readonly name: string;
  /**
  * Reference to supported content profile associated with the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp#supported_content_id ConversationsMessagingIntegrationsWhatsapp#supported_content_id}
  */
  readonly supportedContentId?: string;
  /**
  * activate_whatsapp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp#activate_whatsapp ConversationsMessagingIntegrationsWhatsapp#activate_whatsapp}
  */
  readonly activateWhatsapp?: ConversationsMessagingIntegrationsWhatsappActivateWhatsapp[] | cdktf.IResolvable;
}
export interface ConversationsMessagingIntegrationsWhatsappActivateWhatsapp {
  /**
  * Phone number to associate with the WhatsApp integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp#phone_number ConversationsMessagingIntegrationsWhatsapp#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * Specify the two-step verification PIN for that phone number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp#pin ConversationsMessagingIntegrationsWhatsapp#pin}
  */
  readonly pin: string;
}

export function conversationsMessagingIntegrationsWhatsappActivateWhatsappToTerraform(struct?: ConversationsMessagingIntegrationsWhatsappActivateWhatsapp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    pin: cdktf.stringToTerraform(struct!.pin),
  }
}


export function conversationsMessagingIntegrationsWhatsappActivateWhatsappToHclTerraform(struct?: ConversationsMessagingIntegrationsWhatsappActivateWhatsapp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pin: {
      value: cdktf.stringToHclTerraform(struct!.pin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingIntegrationsWhatsappActivateWhatsappOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConversationsMessagingIntegrationsWhatsappActivateWhatsapp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._pin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pin = this._pin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingIntegrationsWhatsappActivateWhatsapp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._phoneNumber = undefined;
      this._pin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._phoneNumber = value.phoneNumber;
      this._pin = value.pin;
    }
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // pin - computed: false, optional: false, required: true
  private _pin?: string; 
  public get pin() {
    return this.getStringAttribute('pin');
  }
  public set pin(value: string) {
    this._pin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pinInput() {
    return this._pin;
  }
}

export class ConversationsMessagingIntegrationsWhatsappActivateWhatsappList extends cdktf.ComplexList {
  public internalValue? : ConversationsMessagingIntegrationsWhatsappActivateWhatsapp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConversationsMessagingIntegrationsWhatsappActivateWhatsappOutputReference {
    return new ConversationsMessagingIntegrationsWhatsappActivateWhatsappOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp genesyscloud_conversations_messaging_integrations_whatsapp}
*/
export class ConversationsMessagingIntegrationsWhatsapp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_conversations_messaging_integrations_whatsapp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsMessagingIntegrationsWhatsapp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsMessagingIntegrationsWhatsapp to import
  * @param importFromId The id of the existing ConversationsMessagingIntegrationsWhatsapp that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsMessagingIntegrationsWhatsapp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_conversations_messaging_integrations_whatsapp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_whatsapp genesyscloud_conversations_messaging_integrations_whatsapp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsMessagingIntegrationsWhatsappConfig
  */
  public constructor(scope: Construct, id: string, config: ConversationsMessagingIntegrationsWhatsappConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_conversations_messaging_integrations_whatsapp',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._embeddedSignupAccessToken = config.embeddedSignupAccessToken;
    this._id = config.id;
    this._messagingSettingId = config.messagingSettingId;
    this._name = config.name;
    this._supportedContentId = config.supportedContentId;
    this._activateWhatsapp.internalValue = config.activateWhatsapp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // embedded_signup_access_token - computed: false, optional: false, required: true
  private _embeddedSignupAccessToken?: string; 
  public get embeddedSignupAccessToken() {
    return this.getStringAttribute('embedded_signup_access_token');
  }
  public set embeddedSignupAccessToken(value: string) {
    this._embeddedSignupAccessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedSignupAccessTokenInput() {
    return this._embeddedSignupAccessToken;
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

  // messaging_setting_id - computed: false, optional: true, required: false
  private _messagingSettingId?: string; 
  public get messagingSettingId() {
    return this.getStringAttribute('messaging_setting_id');
  }
  public set messagingSettingId(value: string) {
    this._messagingSettingId = value;
  }
  public resetMessagingSettingId() {
    this._messagingSettingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingSettingIdInput() {
    return this._messagingSettingId;
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

  // supported_content_id - computed: false, optional: true, required: false
  private _supportedContentId?: string; 
  public get supportedContentId() {
    return this.getStringAttribute('supported_content_id');
  }
  public set supportedContentId(value: string) {
    this._supportedContentId = value;
  }
  public resetSupportedContentId() {
    this._supportedContentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedContentIdInput() {
    return this._supportedContentId;
  }

  // activate_whatsapp - computed: false, optional: true, required: false
  private _activateWhatsapp = new ConversationsMessagingIntegrationsWhatsappActivateWhatsappList(this, "activate_whatsapp", true);
  public get activateWhatsapp() {
    return this._activateWhatsapp;
  }
  public putActivateWhatsapp(value: ConversationsMessagingIntegrationsWhatsappActivateWhatsapp[] | cdktf.IResolvable) {
    this._activateWhatsapp.internalValue = value;
  }
  public resetActivateWhatsapp() {
    this._activateWhatsapp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateWhatsappInput() {
    return this._activateWhatsapp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      embedded_signup_access_token: cdktf.stringToTerraform(this._embeddedSignupAccessToken),
      id: cdktf.stringToTerraform(this._id),
      messaging_setting_id: cdktf.stringToTerraform(this._messagingSettingId),
      name: cdktf.stringToTerraform(this._name),
      supported_content_id: cdktf.stringToTerraform(this._supportedContentId),
      activate_whatsapp: cdktf.listMapper(conversationsMessagingIntegrationsWhatsappActivateWhatsappToTerraform, true)(this._activateWhatsapp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      embedded_signup_access_token: {
        value: cdktf.stringToHclTerraform(this._embeddedSignupAccessToken),
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
      messaging_setting_id: {
        value: cdktf.stringToHclTerraform(this._messagingSettingId),
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
      supported_content_id: {
        value: cdktf.stringToHclTerraform(this._supportedContentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activate_whatsapp: {
        value: cdktf.listMapperHcl(conversationsMessagingIntegrationsWhatsappActivateWhatsappToHclTerraform, true)(this._activateWhatsapp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConversationsMessagingIntegrationsWhatsappActivateWhatsappList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
