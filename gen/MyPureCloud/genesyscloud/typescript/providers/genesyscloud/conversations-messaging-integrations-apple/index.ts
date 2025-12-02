// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsMessagingIntegrationsAppleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the business.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#business_name ConversationsMessagingIntegrationsApple#business_name}
  */
  readonly businessName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#id ConversationsMessagingIntegrationsApple#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The url of the businesses logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#logo_url ConversationsMessagingIntegrationsApple#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * The Apple Messages for Business Id for the Apple messaging integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#messages_for_business_id ConversationsMessagingIntegrationsApple#messages_for_business_id}
  */
  readonly messagesForBusinessId: string;
  /**
  * The ID of the messaging setting configured for this integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#messaging_setting_id ConversationsMessagingIntegrationsApple#messaging_setting_id}
  */
  readonly messagingSettingId?: string;
  /**
  * The name of the Apple messaging integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#name ConversationsMessagingIntegrationsApple#name}
  */
  readonly name: string;
  /**
  * The ID of the supported content profile configured for this integration. If not set, the default supported content profile will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#supported_content_id ConversationsMessagingIntegrationsApple#supported_content_id}
  */
  readonly supportedContentId?: string;
  /**
  * apple_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#apple_authentication ConversationsMessagingIntegrationsApple#apple_authentication}
  */
  readonly appleAuthentication?: ConversationsMessagingIntegrationsAppleAppleAuthentication;
  /**
  * apple_i_message_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#apple_i_message_app ConversationsMessagingIntegrationsApple#apple_i_message_app}
  */
  readonly appleIMessageApp?: ConversationsMessagingIntegrationsAppleAppleIMessageApp;
  /**
  * apple_pay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#apple_pay ConversationsMessagingIntegrationsApple#apple_pay}
  */
  readonly applePay?: ConversationsMessagingIntegrationsAppleApplePay;
}
export interface ConversationsMessagingIntegrationsAppleAppleAuthentication {
  /**
  * The Apple Messages for Business OAuth client id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#oauth_client_id ConversationsMessagingIntegrationsApple#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * The Apple Messages for Business OAuth client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#oauth_client_secret ConversationsMessagingIntegrationsApple#oauth_client_secret}
  */
  readonly oauthClientSecret?: string;
  /**
  * The Apple Messages for Business OAuth scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#oauth_scope ConversationsMessagingIntegrationsApple#oauth_scope}
  */
  readonly oauthScope?: string;
  /**
  * The Apple Messages for Business token URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#oauth_token_url ConversationsMessagingIntegrationsApple#oauth_token_url}
  */
  readonly oauthTokenUrl?: string;
}

export function conversationsMessagingIntegrationsAppleAppleAuthenticationToTerraform(struct?: ConversationsMessagingIntegrationsAppleAppleAuthenticationOutputReference | ConversationsMessagingIntegrationsAppleAppleAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth_client_id: cdktf.stringToTerraform(struct!.oauthClientId),
    oauth_client_secret: cdktf.stringToTerraform(struct!.oauthClientSecret),
    oauth_scope: cdktf.stringToTerraform(struct!.oauthScope),
    oauth_token_url: cdktf.stringToTerraform(struct!.oauthTokenUrl),
  }
}


export function conversationsMessagingIntegrationsAppleAppleAuthenticationToHclTerraform(struct?: ConversationsMessagingIntegrationsAppleAppleAuthenticationOutputReference | ConversationsMessagingIntegrationsAppleAppleAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oauthClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.oauthClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scope: {
      value: cdktf.stringToHclTerraform(struct!.oauthScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_token_url: {
      value: cdktf.stringToHclTerraform(struct!.oauthTokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingIntegrationsAppleAppleAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingIntegrationsAppleAppleAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauthClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthClientId = this._oauthClientId;
    }
    if (this._oauthClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthClientSecret = this._oauthClientSecret;
    }
    if (this._oauthScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScope = this._oauthScope;
    }
    if (this._oauthTokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenUrl = this._oauthTokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingIntegrationsAppleAppleAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauthClientId = undefined;
      this._oauthClientSecret = undefined;
      this._oauthScope = undefined;
      this._oauthTokenUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauthClientId = value.oauthClientId;
      this._oauthClientSecret = value.oauthClientSecret;
      this._oauthScope = value.oauthScope;
      this._oauthTokenUrl = value.oauthTokenUrl;
    }
  }

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: true, required: false
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }
  public set oauthClientSecret(value: string) {
    this._oauthClientSecret = value;
  }
  public resetOauthClientSecret() {
    this._oauthClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // oauth_scope - computed: false, optional: true, required: false
  private _oauthScope?: string; 
  public get oauthScope() {
    return this.getStringAttribute('oauth_scope');
  }
  public set oauthScope(value: string) {
    this._oauthScope = value;
  }
  public resetOauthScope() {
    this._oauthScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopeInput() {
    return this._oauthScope;
  }

  // oauth_token_url - computed: false, optional: true, required: false
  private _oauthTokenUrl?: string; 
  public get oauthTokenUrl() {
    return this.getStringAttribute('oauth_token_url');
  }
  public set oauthTokenUrl(value: string) {
    this._oauthTokenUrl = value;
  }
  public resetOauthTokenUrl() {
    this._oauthTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenUrlInput() {
    return this._oauthTokenUrl;
  }
}
export interface ConversationsMessagingIntegrationsAppleAppleIMessageApp {
  /**
  * Application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#application_id ConversationsMessagingIntegrationsApple#application_id}
  */
  readonly applicationId: string;
  /**
  * Application Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#application_name ConversationsMessagingIntegrationsApple#application_name}
  */
  readonly applicationName: string;
  /**
  * Bundle ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#bundle_id ConversationsMessagingIntegrationsApple#bundle_id}
  */
  readonly bundleId: string;
}

export function conversationsMessagingIntegrationsAppleAppleIMessageAppToTerraform(struct?: ConversationsMessagingIntegrationsAppleAppleIMessageAppOutputReference | ConversationsMessagingIntegrationsAppleAppleIMessageApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    bundle_id: cdktf.stringToTerraform(struct!.bundleId),
  }
}


export function conversationsMessagingIntegrationsAppleAppleIMessageAppToHclTerraform(struct?: ConversationsMessagingIntegrationsAppleAppleIMessageAppOutputReference | ConversationsMessagingIntegrationsAppleAppleIMessageApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_id: {
      value: cdktf.stringToHclTerraform(struct!.bundleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingIntegrationsAppleAppleIMessageAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingIntegrationsAppleAppleIMessageApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._bundleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleId = this._bundleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingIntegrationsAppleAppleIMessageApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._applicationName = undefined;
      this._bundleId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._applicationName = value.applicationName;
      this._bundleId = value.bundleId;
    }
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }
}
export interface ConversationsMessagingIntegrationsAppleApplePay {
  /**
  * The domain name associated with the merchant account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#domain_name ConversationsMessagingIntegrationsApple#domain_name}
  */
  readonly domainName: string;
  /**
  * The url opened in a web browser if the customers device is unable to make payments using Apple Pay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#fallback_url ConversationsMessagingIntegrationsApple#fallback_url}
  */
  readonly fallbackUrl?: string;
  /**
  * The stores merchant identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#merchant_id ConversationsMessagingIntegrationsApple#merchant_id}
  */
  readonly merchantId: string;
  /**
  * The url called after completing the order to update the order information in your system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#order_tracking_url ConversationsMessagingIntegrationsApple#order_tracking_url}
  */
  readonly orderTrackingUrl?: string;
  /**
  * The payment capabilities supported by the merchant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#payment_capabilities ConversationsMessagingIntegrationsApple#payment_capabilities}
  */
  readonly paymentCapabilities: string[];
  /**
  * The Genesys credentialId the payment certificates are stored under. Must be a valid and existing credential ID created via /api/v2/integrations/credentials endpoint. See API documentation: https://developer.genesys.cloud/devapps/api-explorer#post-api-v2-integrations-credentials. Example payload: {"type": "applePayCertificate", "credentialFields": {"merchantKey": "base-64-key", "merchantCertificate": "base-64-cert"}}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#payment_certificate_credential_id ConversationsMessagingIntegrationsApple#payment_certificate_credential_id}
  */
  readonly paymentCertificateCredentialId: string;
  /**
  * The url used to process payments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#payment_gateway_url ConversationsMessagingIntegrationsApple#payment_gateway_url}
  */
  readonly paymentGatewayUrl: string;
  /**
  * The url called when the customer changes their payment method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#payment_method_update_url ConversationsMessagingIntegrationsApple#payment_method_update_url}
  */
  readonly paymentMethodUpdateUrl?: string;
  /**
  * The url called when the customer changes their shipping address information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#shipping_contact_update_url ConversationsMessagingIntegrationsApple#shipping_contact_update_url}
  */
  readonly shippingContactUpdateUrl?: string;
  /**
  * The url called when the customer changes the shipping method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#shipping_method_update_url ConversationsMessagingIntegrationsApple#shipping_method_update_url}
  */
  readonly shippingMethodUpdateUrl?: string;
  /**
  * The name of the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#store_name ConversationsMessagingIntegrationsApple#store_name}
  */
  readonly storeName: string;
  /**
  * The payment networks supported by the merchant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#supported_payment_networks ConversationsMessagingIntegrationsApple#supported_payment_networks}
  */
  readonly supportedPaymentNetworks: string[];
}

export function conversationsMessagingIntegrationsAppleApplePayToTerraform(struct?: ConversationsMessagingIntegrationsAppleApplePayOutputReference | ConversationsMessagingIntegrationsAppleApplePay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    fallback_url: cdktf.stringToTerraform(struct!.fallbackUrl),
    merchant_id: cdktf.stringToTerraform(struct!.merchantId),
    order_tracking_url: cdktf.stringToTerraform(struct!.orderTrackingUrl),
    payment_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paymentCapabilities),
    payment_certificate_credential_id: cdktf.stringToTerraform(struct!.paymentCertificateCredentialId),
    payment_gateway_url: cdktf.stringToTerraform(struct!.paymentGatewayUrl),
    payment_method_update_url: cdktf.stringToTerraform(struct!.paymentMethodUpdateUrl),
    shipping_contact_update_url: cdktf.stringToTerraform(struct!.shippingContactUpdateUrl),
    shipping_method_update_url: cdktf.stringToTerraform(struct!.shippingMethodUpdateUrl),
    store_name: cdktf.stringToTerraform(struct!.storeName),
    supported_payment_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedPaymentNetworks),
  }
}


export function conversationsMessagingIntegrationsAppleApplePayToHclTerraform(struct?: ConversationsMessagingIntegrationsAppleApplePayOutputReference | ConversationsMessagingIntegrationsAppleApplePay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fallback_url: {
      value: cdktf.stringToHclTerraform(struct!.fallbackUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merchant_id: {
      value: cdktf.stringToHclTerraform(struct!.merchantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_tracking_url: {
      value: cdktf.stringToHclTerraform(struct!.orderTrackingUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payment_capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paymentCapabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    payment_certificate_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.paymentCertificateCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payment_gateway_url: {
      value: cdktf.stringToHclTerraform(struct!.paymentGatewayUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payment_method_update_url: {
      value: cdktf.stringToHclTerraform(struct!.paymentMethodUpdateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shipping_contact_update_url: {
      value: cdktf.stringToHclTerraform(struct!.shippingContactUpdateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shipping_method_update_url: {
      value: cdktf.stringToHclTerraform(struct!.shippingMethodUpdateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_name: {
      value: cdktf.stringToHclTerraform(struct!.storeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_payment_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedPaymentNetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingIntegrationsAppleApplePayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingIntegrationsAppleApplePay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._fallbackUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackUrl = this._fallbackUrl;
    }
    if (this._merchantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.merchantId = this._merchantId;
    }
    if (this._orderTrackingUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderTrackingUrl = this._orderTrackingUrl;
    }
    if (this._paymentCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentCapabilities = this._paymentCapabilities;
    }
    if (this._paymentCertificateCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentCertificateCredentialId = this._paymentCertificateCredentialId;
    }
    if (this._paymentGatewayUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentGatewayUrl = this._paymentGatewayUrl;
    }
    if (this._paymentMethodUpdateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentMethodUpdateUrl = this._paymentMethodUpdateUrl;
    }
    if (this._shippingContactUpdateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.shippingContactUpdateUrl = this._shippingContactUpdateUrl;
    }
    if (this._shippingMethodUpdateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.shippingMethodUpdateUrl = this._shippingMethodUpdateUrl;
    }
    if (this._storeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeName = this._storeName;
    }
    if (this._supportedPaymentNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedPaymentNetworks = this._supportedPaymentNetworks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingIntegrationsAppleApplePay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._fallbackUrl = undefined;
      this._merchantId = undefined;
      this._orderTrackingUrl = undefined;
      this._paymentCapabilities = undefined;
      this._paymentCertificateCredentialId = undefined;
      this._paymentGatewayUrl = undefined;
      this._paymentMethodUpdateUrl = undefined;
      this._shippingContactUpdateUrl = undefined;
      this._shippingMethodUpdateUrl = undefined;
      this._storeName = undefined;
      this._supportedPaymentNetworks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._fallbackUrl = value.fallbackUrl;
      this._merchantId = value.merchantId;
      this._orderTrackingUrl = value.orderTrackingUrl;
      this._paymentCapabilities = value.paymentCapabilities;
      this._paymentCertificateCredentialId = value.paymentCertificateCredentialId;
      this._paymentGatewayUrl = value.paymentGatewayUrl;
      this._paymentMethodUpdateUrl = value.paymentMethodUpdateUrl;
      this._shippingContactUpdateUrl = value.shippingContactUpdateUrl;
      this._shippingMethodUpdateUrl = value.shippingMethodUpdateUrl;
      this._storeName = value.storeName;
      this._supportedPaymentNetworks = value.supportedPaymentNetworks;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // fallback_url - computed: false, optional: true, required: false
  private _fallbackUrl?: string; 
  public get fallbackUrl() {
    return this.getStringAttribute('fallback_url');
  }
  public set fallbackUrl(value: string) {
    this._fallbackUrl = value;
  }
  public resetFallbackUrl() {
    this._fallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackUrlInput() {
    return this._fallbackUrl;
  }

  // merchant_id - computed: false, optional: false, required: true
  private _merchantId?: string; 
  public get merchantId() {
    return this.getStringAttribute('merchant_id');
  }
  public set merchantId(value: string) {
    this._merchantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get merchantIdInput() {
    return this._merchantId;
  }

  // order_tracking_url - computed: false, optional: true, required: false
  private _orderTrackingUrl?: string; 
  public get orderTrackingUrl() {
    return this.getStringAttribute('order_tracking_url');
  }
  public set orderTrackingUrl(value: string) {
    this._orderTrackingUrl = value;
  }
  public resetOrderTrackingUrl() {
    this._orderTrackingUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTrackingUrlInput() {
    return this._orderTrackingUrl;
  }

  // payment_capabilities - computed: false, optional: false, required: true
  private _paymentCapabilities?: string[]; 
  public get paymentCapabilities() {
    return this.getListAttribute('payment_capabilities');
  }
  public set paymentCapabilities(value: string[]) {
    this._paymentCapabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentCapabilitiesInput() {
    return this._paymentCapabilities;
  }

  // payment_certificate_credential_id - computed: false, optional: false, required: true
  private _paymentCertificateCredentialId?: string; 
  public get paymentCertificateCredentialId() {
    return this.getStringAttribute('payment_certificate_credential_id');
  }
  public set paymentCertificateCredentialId(value: string) {
    this._paymentCertificateCredentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentCertificateCredentialIdInput() {
    return this._paymentCertificateCredentialId;
  }

  // payment_gateway_url - computed: false, optional: false, required: true
  private _paymentGatewayUrl?: string; 
  public get paymentGatewayUrl() {
    return this.getStringAttribute('payment_gateway_url');
  }
  public set paymentGatewayUrl(value: string) {
    this._paymentGatewayUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentGatewayUrlInput() {
    return this._paymentGatewayUrl;
  }

  // payment_method_update_url - computed: false, optional: true, required: false
  private _paymentMethodUpdateUrl?: string; 
  public get paymentMethodUpdateUrl() {
    return this.getStringAttribute('payment_method_update_url');
  }
  public set paymentMethodUpdateUrl(value: string) {
    this._paymentMethodUpdateUrl = value;
  }
  public resetPaymentMethodUpdateUrl() {
    this._paymentMethodUpdateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentMethodUpdateUrlInput() {
    return this._paymentMethodUpdateUrl;
  }

  // shipping_contact_update_url - computed: false, optional: true, required: false
  private _shippingContactUpdateUrl?: string; 
  public get shippingContactUpdateUrl() {
    return this.getStringAttribute('shipping_contact_update_url');
  }
  public set shippingContactUpdateUrl(value: string) {
    this._shippingContactUpdateUrl = value;
  }
  public resetShippingContactUpdateUrl() {
    this._shippingContactUpdateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingContactUpdateUrlInput() {
    return this._shippingContactUpdateUrl;
  }

  // shipping_method_update_url - computed: false, optional: true, required: false
  private _shippingMethodUpdateUrl?: string; 
  public get shippingMethodUpdateUrl() {
    return this.getStringAttribute('shipping_method_update_url');
  }
  public set shippingMethodUpdateUrl(value: string) {
    this._shippingMethodUpdateUrl = value;
  }
  public resetShippingMethodUpdateUrl() {
    this._shippingMethodUpdateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingMethodUpdateUrlInput() {
    return this._shippingMethodUpdateUrl;
  }

  // store_name - computed: false, optional: false, required: true
  private _storeName?: string; 
  public get storeName() {
    return this.getStringAttribute('store_name');
  }
  public set storeName(value: string) {
    this._storeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeNameInput() {
    return this._storeName;
  }

  // supported_payment_networks - computed: false, optional: false, required: true
  private _supportedPaymentNetworks?: string[]; 
  public get supportedPaymentNetworks() {
    return this.getListAttribute('supported_payment_networks');
  }
  public set supportedPaymentNetworks(value: string[]) {
    this._supportedPaymentNetworks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedPaymentNetworksInput() {
    return this._supportedPaymentNetworks;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple genesyscloud_conversations_messaging_integrations_apple}
*/
export class ConversationsMessagingIntegrationsApple extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_conversations_messaging_integrations_apple";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsMessagingIntegrationsApple resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsMessagingIntegrationsApple to import
  * @param importFromId The id of the existing ConversationsMessagingIntegrationsApple that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsMessagingIntegrationsApple to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_conversations_messaging_integrations_apple", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_integrations_apple genesyscloud_conversations_messaging_integrations_apple} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsMessagingIntegrationsAppleConfig
  */
  public constructor(scope: Construct, id: string, config: ConversationsMessagingIntegrationsAppleConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_conversations_messaging_integrations_apple',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._businessName = config.businessName;
    this._id = config.id;
    this._logoUrl = config.logoUrl;
    this._messagesForBusinessId = config.messagesForBusinessId;
    this._messagingSettingId = config.messagingSettingId;
    this._name = config.name;
    this._supportedContentId = config.supportedContentId;
    this._appleAuthentication.internalValue = config.appleAuthentication;
    this._appleIMessageApp.internalValue = config.appleIMessageApp;
    this._applePay.internalValue = config.applePay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_name - computed: false, optional: true, required: false
  private _businessName?: string; 
  public get businessName() {
    return this.getStringAttribute('business_name');
  }
  public set businessName(value: string) {
    this._businessName = value;
  }
  public resetBusinessName() {
    this._businessName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessNameInput() {
    return this._businessName;
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

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }

  // messages_for_business_id - computed: false, optional: false, required: true
  private _messagesForBusinessId?: string; 
  public get messagesForBusinessId() {
    return this.getStringAttribute('messages_for_business_id');
  }
  public set messagesForBusinessId(value: string) {
    this._messagesForBusinessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesForBusinessIdInput() {
    return this._messagesForBusinessId;
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

  // supported_content_id - computed: true, optional: true, required: false
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

  // apple_authentication - computed: false, optional: true, required: false
  private _appleAuthentication = new ConversationsMessagingIntegrationsAppleAppleAuthenticationOutputReference(this, "apple_authentication");
  public get appleAuthentication() {
    return this._appleAuthentication;
  }
  public putAppleAuthentication(value: ConversationsMessagingIntegrationsAppleAppleAuthentication) {
    this._appleAuthentication.internalValue = value;
  }
  public resetAppleAuthentication() {
    this._appleAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleAuthenticationInput() {
    return this._appleAuthentication.internalValue;
  }

  // apple_i_message_app - computed: false, optional: true, required: false
  private _appleIMessageApp = new ConversationsMessagingIntegrationsAppleAppleIMessageAppOutputReference(this, "apple_i_message_app");
  public get appleIMessageApp() {
    return this._appleIMessageApp;
  }
  public putAppleIMessageApp(value: ConversationsMessagingIntegrationsAppleAppleIMessageApp) {
    this._appleIMessageApp.internalValue = value;
  }
  public resetAppleIMessageApp() {
    this._appleIMessageApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleIMessageAppInput() {
    return this._appleIMessageApp.internalValue;
  }

  // apple_pay - computed: false, optional: true, required: false
  private _applePay = new ConversationsMessagingIntegrationsAppleApplePayOutputReference(this, "apple_pay");
  public get applePay() {
    return this._applePay;
  }
  public putApplePay(value: ConversationsMessagingIntegrationsAppleApplePay) {
    this._applePay.internalValue = value;
  }
  public resetApplePay() {
    this._applePay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applePayInput() {
    return this._applePay.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_name: cdktf.stringToTerraform(this._businessName),
      id: cdktf.stringToTerraform(this._id),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      messages_for_business_id: cdktf.stringToTerraform(this._messagesForBusinessId),
      messaging_setting_id: cdktf.stringToTerraform(this._messagingSettingId),
      name: cdktf.stringToTerraform(this._name),
      supported_content_id: cdktf.stringToTerraform(this._supportedContentId),
      apple_authentication: conversationsMessagingIntegrationsAppleAppleAuthenticationToTerraform(this._appleAuthentication.internalValue),
      apple_i_message_app: conversationsMessagingIntegrationsAppleAppleIMessageAppToTerraform(this._appleIMessageApp.internalValue),
      apple_pay: conversationsMessagingIntegrationsAppleApplePayToTerraform(this._applePay.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business_name: {
        value: cdktf.stringToHclTerraform(this._businessName),
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
      logo_url: {
        value: cdktf.stringToHclTerraform(this._logoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messages_for_business_id: {
        value: cdktf.stringToHclTerraform(this._messagesForBusinessId),
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
      apple_authentication: {
        value: conversationsMessagingIntegrationsAppleAppleAuthenticationToHclTerraform(this._appleAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConversationsMessagingIntegrationsAppleAppleAuthenticationList",
      },
      apple_i_message_app: {
        value: conversationsMessagingIntegrationsAppleAppleIMessageAppToHclTerraform(this._appleIMessageApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConversationsMessagingIntegrationsAppleAppleIMessageAppList",
      },
      apple_pay: {
        value: conversationsMessagingIntegrationsAppleApplePayToHclTerraform(this._applePay.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConversationsMessagingIntegrationsAppleApplePayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
