// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Information that identifies the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#contact_info ServerSettings#contact_info}
  */
  readonly contactInfo?: ServerSettingsContactInfo;
  /**
  * Federation Info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#federation_info ServerSettings#federation_info}
  */
  readonly federationInfo: ServerSettingsFederationInfo;
  /**
  * Notification settings for license and certificate expiration events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#notifications ServerSettings#notifications}
  */
  readonly notifications?: ServerSettingsNotifications;
}
export interface ServerSettingsContactInfo {
  /**
  * Company name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#company ServerSettings#company}
  */
  readonly company?: string;
  /**
  * Contact email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#email ServerSettings#email}
  */
  readonly email?: string;
  /**
  * Contact first name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#first_name ServerSettings#first_name}
  */
  readonly firstName?: string;
  /**
  * Contact last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#last_name ServerSettings#last_name}
  */
  readonly lastName?: string;
  /**
  * Contact phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#phone ServerSettings#phone}
  */
  readonly phone?: string;
}

export function serverSettingsContactInfoToTerraform(struct?: ServerSettingsContactInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company: cdktf.stringToTerraform(struct!.company),
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    phone: cdktf.stringToTerraform(struct!.phone),
  }
}


export function serverSettingsContactInfoToHclTerraform(struct?: ServerSettingsContactInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company: {
      value: cdktf.stringToHclTerraform(struct!.company),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsContactInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsContactInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._company !== undefined) {
      hasAnyValues = true;
      internalValueResult.company = this._company;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsContactInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._company = undefined;
      this._email = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._phone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._company = value.company;
      this._email = value.email;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._phone = value.phone;
    }
  }

  // company - computed: true, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // phone - computed: true, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }
}
export interface ServerSettingsFederationInfo {
  /**
  * The fully qualified host name, port, and path (if applicable) on which the PingFederate server runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#base_url ServerSettings#base_url}
  */
  readonly baseUrl: string;
  /**
  * This ID identifies your federation server for SAML 1.x transactions. As with SAML 2.0, it is usually defined as an organization's URL or a DNS address. The SourceID used for artifact resolution is derived from this ID using SHA1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#saml_1x_issuer_id ServerSettings#saml_1x_issuer_id}
  */
  readonly saml1XIssuerId?: string;
  /**
  * If supplied, the Source ID value entered here is used for SAML 1.x, instead of being derived from the SAML 1.x Issuer/Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#saml_1x_source_id ServerSettings#saml_1x_source_id}
  */
  readonly saml1XSourceId?: string;
  /**
  * This ID defines your organization as the entity operating the server for SAML 2.0 transactions. It is usually defined as an organization's URL or a DNS address; for example: pingidentity.com. The SAML SourceID used for artifact resolution is derived from this ID using SHA1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#saml_2_entity_id ServerSettings#saml_2_entity_id}
  */
  readonly saml2EntityId: string;
  /**
  * The URI of the realm associated with the PingFederate server. A realm represents a single unit of security administration or trust.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#wsfed_realm ServerSettings#wsfed_realm}
  */
  readonly wsfedRealm?: string;
}

export function serverSettingsFederationInfoToTerraform(struct?: ServerSettingsFederationInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    saml_1x_issuer_id: cdktf.stringToTerraform(struct!.saml1XIssuerId),
    saml_1x_source_id: cdktf.stringToTerraform(struct!.saml1XSourceId),
    saml_2_entity_id: cdktf.stringToTerraform(struct!.saml2EntityId),
    wsfed_realm: cdktf.stringToTerraform(struct!.wsfedRealm),
  }
}


export function serverSettingsFederationInfoToHclTerraform(struct?: ServerSettingsFederationInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_1x_issuer_id: {
      value: cdktf.stringToHclTerraform(struct!.saml1XIssuerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_1x_source_id: {
      value: cdktf.stringToHclTerraform(struct!.saml1XSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_2_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.saml2EntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wsfed_realm: {
      value: cdktf.stringToHclTerraform(struct!.wsfedRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsFederationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsFederationInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._saml1XIssuerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml1XIssuerId = this._saml1XIssuerId;
    }
    if (this._saml1XSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml1XSourceId = this._saml1XSourceId;
    }
    if (this._saml2EntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml2EntityId = this._saml2EntityId;
    }
    if (this._wsfedRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsfedRealm = this._wsfedRealm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsFederationInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._saml1XIssuerId = undefined;
      this._saml1XSourceId = undefined;
      this._saml2EntityId = undefined;
      this._wsfedRealm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._saml1XIssuerId = value.saml1XIssuerId;
      this._saml1XSourceId = value.saml1XSourceId;
      this._saml2EntityId = value.saml2EntityId;
      this._wsfedRealm = value.wsfedRealm;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // saml_1x_issuer_id - computed: true, optional: true, required: false
  private _saml1XIssuerId?: string; 
  public get saml1XIssuerId() {
    return this.getStringAttribute('saml_1x_issuer_id');
  }
  public set saml1XIssuerId(value: string) {
    this._saml1XIssuerId = value;
  }
  public resetSaml1XIssuerId() {
    this._saml1XIssuerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml1XIssuerIdInput() {
    return this._saml1XIssuerId;
  }

  // saml_1x_source_id - computed: true, optional: true, required: false
  private _saml1XSourceId?: string; 
  public get saml1XSourceId() {
    return this.getStringAttribute('saml_1x_source_id');
  }
  public set saml1XSourceId(value: string) {
    this._saml1XSourceId = value;
  }
  public resetSaml1XSourceId() {
    this._saml1XSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml1XSourceIdInput() {
    return this._saml1XSourceId;
  }

  // saml_2_entity_id - computed: false, optional: false, required: true
  private _saml2EntityId?: string; 
  public get saml2EntityId() {
    return this.getStringAttribute('saml_2_entity_id');
  }
  public set saml2EntityId(value: string) {
    this._saml2EntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2EntityIdInput() {
    return this._saml2EntityId;
  }

  // wsfed_realm - computed: true, optional: true, required: false
  private _wsfedRealm?: string; 
  public get wsfedRealm() {
    return this.getStringAttribute('wsfed_realm');
  }
  public set wsfedRealm(value: string) {
    this._wsfedRealm = value;
  }
  public resetWsfedRealm() {
    this._wsfedRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsfedRealmInput() {
    return this._wsfedRealm;
  }
}
export interface ServerSettingsNotificationsAccountChangesNotificationPublisherRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#id ServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function serverSettingsNotificationsAccountChangesNotificationPublisherRefToTerraform(struct?: ServerSettingsNotificationsAccountChangesNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function serverSettingsNotificationsAccountChangesNotificationPublisherRefToHclTerraform(struct?: ServerSettingsNotificationsAccountChangesNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsAccountChangesNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsAccountChangesNotificationPublisherRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsAccountChangesNotificationPublisherRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#id ServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function serverSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRefToTerraform(struct?: ServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function serverSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRefToHclTerraform(struct?: ServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ServerSettingsNotificationsBulkheadAlertNotificationSettings {
  /**
  * Email address where notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#email_address ServerSettings#email_address}
  */
  readonly emailAddress?: string;
  /**
  * The mode of notification. Supported values are `NOTIFICATION_PUBLISHER` and `LOGGING_ONLY`. Set to `NOTIFICATION_PUBLISHER` to enable email notifications and server log messages. Set to `LOGGING_ONLY` to enable server log messages. Defaults to `LOGGING_ONLY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#notification_mode ServerSettings#notification_mode}
  */
  readonly notificationMode?: string;
  /**
  * Reference to the associated notification publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#notification_publisher_ref ServerSettings#notification_publisher_ref}
  */
  readonly notificationPublisherRef?: ServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef;
  /**
  * Generate a thread dump when a bulkhead reaches its warning threshold or is full. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#thread_dump_enabled ServerSettings#thread_dump_enabled}
  */
  readonly threadDumpEnabled?: boolean | cdktf.IResolvable;
}

export function serverSettingsNotificationsBulkheadAlertNotificationSettingsToTerraform(struct?: ServerSettingsNotificationsBulkheadAlertNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    notification_mode: cdktf.stringToTerraform(struct!.notificationMode),
    notification_publisher_ref: serverSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRefToTerraform(struct!.notificationPublisherRef),
    thread_dump_enabled: cdktf.booleanToTerraform(struct!.threadDumpEnabled),
  }
}


export function serverSettingsNotificationsBulkheadAlertNotificationSettingsToHclTerraform(struct?: ServerSettingsNotificationsBulkheadAlertNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_mode: {
      value: cdktf.stringToHclTerraform(struct!.notificationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_publisher_ref: {
      value: serverSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRefToHclTerraform(struct!.notificationPublisherRef),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef",
    },
    thread_dump_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.threadDumpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsBulkheadAlertNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsBulkheadAlertNotificationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._notificationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationMode = this._notificationMode;
    }
    if (this._notificationPublisherRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPublisherRef = this._notificationPublisherRef?.internalValue;
    }
    if (this._threadDumpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadDumpEnabled = this._threadDumpEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsBulkheadAlertNotificationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._notificationMode = undefined;
      this._notificationPublisherRef.internalValue = undefined;
      this._threadDumpEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._notificationMode = value.notificationMode;
      this._notificationPublisherRef.internalValue = value.notificationPublisherRef;
      this._threadDumpEnabled = value.threadDumpEnabled;
    }
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // notification_mode - computed: true, optional: true, required: false
  private _notificationMode?: string; 
  public get notificationMode() {
    return this.getStringAttribute('notification_mode');
  }
  public set notificationMode(value: string) {
    this._notificationMode = value;
  }
  public resetNotificationMode() {
    this._notificationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationModeInput() {
    return this._notificationMode;
  }

  // notification_publisher_ref - computed: true, optional: true, required: false
  private _notificationPublisherRef = new ServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }
  public putNotificationPublisherRef(value: ServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef) {
    this._notificationPublisherRef.internalValue = value;
  }
  public resetNotificationPublisherRef() {
    this._notificationPublisherRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPublisherRefInput() {
    return this._notificationPublisherRef.internalValue;
  }

  // thread_dump_enabled - computed: true, optional: true, required: false
  private _threadDumpEnabled?: boolean | cdktf.IResolvable; 
  public get threadDumpEnabled() {
    return this.getBooleanAttribute('thread_dump_enabled');
  }
  public set threadDumpEnabled(value: boolean | cdktf.IResolvable) {
    this._threadDumpEnabled = value;
  }
  public resetThreadDumpEnabled() {
    this._threadDumpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadDumpEnabledInput() {
    return this._threadDumpEnabled;
  }
}
export interface ServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#id ServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function serverSettingsNotificationsCertificateExpirationsNotificationPublisherRefToTerraform(struct?: ServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function serverSettingsNotificationsCertificateExpirationsNotificationPublisherRefToHclTerraform(struct?: ServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsCertificateExpirationsNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ServerSettingsNotificationsCertificateExpirations {
  /**
  * The email address where notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#email_address ServerSettings#email_address}
  */
  readonly emailAddress: string;
  /**
  * Time before certificate expiration when final warning is sent (in days). Must be between `1` and `99999` days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#final_warning_period ServerSettings#final_warning_period}
  */
  readonly finalWarningPeriod: number;
  /**
  * Time before certificate expiration when initial warning is sent (in days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#initial_warning_period ServerSettings#initial_warning_period}
  */
  readonly initialWarningPeriod?: number;
  /**
  * The mode of notification. Supported values are `NOTIFICATION_PUBLISHER` and `LOGGING_ONLY`. Set to `NOTIFICATION_PUBLISHER` to enable email notifications and server log messages. Set to `LOGGING_ONLY` to enable server log messages. Defaults to `NOTIFICATION_PUBLISHER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#notification_mode ServerSettings#notification_mode}
  */
  readonly notificationMode?: string;
  /**
  * Reference to the associated notification publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#notification_publisher_ref ServerSettings#notification_publisher_ref}
  */
  readonly notificationPublisherRef?: ServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef;
}

export function serverSettingsNotificationsCertificateExpirationsToTerraform(struct?: ServerSettingsNotificationsCertificateExpirations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    final_warning_period: cdktf.numberToTerraform(struct!.finalWarningPeriod),
    initial_warning_period: cdktf.numberToTerraform(struct!.initialWarningPeriod),
    notification_mode: cdktf.stringToTerraform(struct!.notificationMode),
    notification_publisher_ref: serverSettingsNotificationsCertificateExpirationsNotificationPublisherRefToTerraform(struct!.notificationPublisherRef),
  }
}


export function serverSettingsNotificationsCertificateExpirationsToHclTerraform(struct?: ServerSettingsNotificationsCertificateExpirations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    final_warning_period: {
      value: cdktf.numberToHclTerraform(struct!.finalWarningPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_warning_period: {
      value: cdktf.numberToHclTerraform(struct!.initialWarningPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification_mode: {
      value: cdktf.stringToHclTerraform(struct!.notificationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_publisher_ref: {
      value: serverSettingsNotificationsCertificateExpirationsNotificationPublisherRefToHclTerraform(struct!.notificationPublisherRef),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsCertificateExpirationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsCertificateExpirations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._finalWarningPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalWarningPeriod = this._finalWarningPeriod;
    }
    if (this._initialWarningPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialWarningPeriod = this._initialWarningPeriod;
    }
    if (this._notificationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationMode = this._notificationMode;
    }
    if (this._notificationPublisherRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPublisherRef = this._notificationPublisherRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsCertificateExpirations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._finalWarningPeriod = undefined;
      this._initialWarningPeriod = undefined;
      this._notificationMode = undefined;
      this._notificationPublisherRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._finalWarningPeriod = value.finalWarningPeriod;
      this._initialWarningPeriod = value.initialWarningPeriod;
      this._notificationMode = value.notificationMode;
      this._notificationPublisherRef.internalValue = value.notificationPublisherRef;
    }
  }

  // email_address - computed: true, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // final_warning_period - computed: true, optional: false, required: true
  private _finalWarningPeriod?: number; 
  public get finalWarningPeriod() {
    return this.getNumberAttribute('final_warning_period');
  }
  public set finalWarningPeriod(value: number) {
    this._finalWarningPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get finalWarningPeriodInput() {
    return this._finalWarningPeriod;
  }

  // initial_warning_period - computed: true, optional: true, required: false
  private _initialWarningPeriod?: number; 
  public get initialWarningPeriod() {
    return this.getNumberAttribute('initial_warning_period');
  }
  public set initialWarningPeriod(value: number) {
    this._initialWarningPeriod = value;
  }
  public resetInitialWarningPeriod() {
    this._initialWarningPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialWarningPeriodInput() {
    return this._initialWarningPeriod;
  }

  // notification_mode - computed: true, optional: true, required: false
  private _notificationMode?: string; 
  public get notificationMode() {
    return this.getStringAttribute('notification_mode');
  }
  public set notificationMode(value: string) {
    this._notificationMode = value;
  }
  public resetNotificationMode() {
    this._notificationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationModeInput() {
    return this._notificationMode;
  }

  // notification_publisher_ref - computed: true, optional: true, required: false
  private _notificationPublisherRef = new ServerSettingsNotificationsCertificateExpirationsNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }
  public putNotificationPublisherRef(value: ServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef) {
    this._notificationPublisherRef.internalValue = value;
  }
  public resetNotificationPublisherRef() {
    this._notificationPublisherRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPublisherRefInput() {
    return this._notificationPublisherRef.internalValue;
  }
}
export interface ServerSettingsNotificationsLicenseEventsNotificationPublisherRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#id ServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function serverSettingsNotificationsLicenseEventsNotificationPublisherRefToTerraform(struct?: ServerSettingsNotificationsLicenseEventsNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function serverSettingsNotificationsLicenseEventsNotificationPublisherRefToHclTerraform(struct?: ServerSettingsNotificationsLicenseEventsNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsLicenseEventsNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsLicenseEventsNotificationPublisherRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsLicenseEventsNotificationPublisherRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ServerSettingsNotificationsLicenseEvents {
  /**
  * The email address where notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#email_address ServerSettings#email_address}
  */
  readonly emailAddress: string;
  /**
  * Reference to the associated notification publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#notification_publisher_ref ServerSettings#notification_publisher_ref}
  */
  readonly notificationPublisherRef?: ServerSettingsNotificationsLicenseEventsNotificationPublisherRef;
}

export function serverSettingsNotificationsLicenseEventsToTerraform(struct?: ServerSettingsNotificationsLicenseEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    notification_publisher_ref: serverSettingsNotificationsLicenseEventsNotificationPublisherRefToTerraform(struct!.notificationPublisherRef),
  }
}


export function serverSettingsNotificationsLicenseEventsToHclTerraform(struct?: ServerSettingsNotificationsLicenseEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_publisher_ref: {
      value: serverSettingsNotificationsLicenseEventsNotificationPublisherRefToHclTerraform(struct!.notificationPublisherRef),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsLicenseEventsNotificationPublisherRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsLicenseEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsLicenseEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._notificationPublisherRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPublisherRef = this._notificationPublisherRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsLicenseEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._notificationPublisherRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._notificationPublisherRef.internalValue = value.notificationPublisherRef;
    }
  }

  // email_address - computed: true, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // notification_publisher_ref - computed: true, optional: true, required: false
  private _notificationPublisherRef = new ServerSettingsNotificationsLicenseEventsNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }
  public putNotificationPublisherRef(value: ServerSettingsNotificationsLicenseEventsNotificationPublisherRef) {
    this._notificationPublisherRef.internalValue = value;
  }
  public resetNotificationPublisherRef() {
    this._notificationPublisherRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPublisherRefInput() {
    return this._notificationPublisherRef.internalValue;
  }
}
export interface ServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#id ServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function serverSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRefToTerraform(struct?: ServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function serverSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRefToHclTerraform(struct?: ServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ServerSettingsNotificationsMetadataNotificationSettings {
  /**
  * The email address where notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#email_address ServerSettings#email_address}
  */
  readonly emailAddress: string;
  /**
  * Reference to the associated notification publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#notification_publisher_ref ServerSettings#notification_publisher_ref}
  */
  readonly notificationPublisherRef?: ServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef;
}

export function serverSettingsNotificationsMetadataNotificationSettingsToTerraform(struct?: ServerSettingsNotificationsMetadataNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    notification_publisher_ref: serverSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRefToTerraform(struct!.notificationPublisherRef),
  }
}


export function serverSettingsNotificationsMetadataNotificationSettingsToHclTerraform(struct?: ServerSettingsNotificationsMetadataNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_publisher_ref: {
      value: serverSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRefToHclTerraform(struct!.notificationPublisherRef),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsMetadataNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsMetadataNotificationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._notificationPublisherRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPublisherRef = this._notificationPublisherRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsMetadataNotificationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._notificationPublisherRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._notificationPublisherRef.internalValue = value.notificationPublisherRef;
    }
  }

  // email_address - computed: true, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // notification_publisher_ref - computed: true, optional: true, required: false
  private _notificationPublisherRef = new ServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }
  public putNotificationPublisherRef(value: ServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef) {
    this._notificationPublisherRef.internalValue = value;
  }
  public resetNotificationPublisherRef() {
    this._notificationPublisherRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPublisherRefInput() {
    return this._notificationPublisherRef.internalValue;
  }
}
export interface ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#id ServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function serverSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRefToTerraform(struct?: ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function serverSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRefToHclTerraform(struct?: ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ServerSettingsNotificationsThreadPoolExhaustionNotificationSettings {
  /**
  * Email address where notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#email_address ServerSettings#email_address}
  */
  readonly emailAddress?: string;
  /**
  * The mode of notification. Supported values are `NOTIFICATION_PUBLISHER` and `LOGGING_ONLY`. Set to `NOTIFICATION_PUBLISHER` to enable email notifications and server log messages. Set to `LOGGING_ONLY` to enable server log messages. Defaults to `LOGGING_ONLY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#notification_mode ServerSettings#notification_mode}
  */
  readonly notificationMode?: string;
  /**
  * Reference to the associated notification publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#notification_publisher_ref ServerSettings#notification_publisher_ref}
  */
  readonly notificationPublisherRef?: ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef;
  /**
  * Generate a thread dump when approaching thread pool exhaustion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#thread_dump_enabled ServerSettings#thread_dump_enabled}
  */
  readonly threadDumpEnabled?: boolean | cdktf.IResolvable;
}

export function serverSettingsNotificationsThreadPoolExhaustionNotificationSettingsToTerraform(struct?: ServerSettingsNotificationsThreadPoolExhaustionNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    notification_mode: cdktf.stringToTerraform(struct!.notificationMode),
    notification_publisher_ref: serverSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRefToTerraform(struct!.notificationPublisherRef),
    thread_dump_enabled: cdktf.booleanToTerraform(struct!.threadDumpEnabled),
  }
}


export function serverSettingsNotificationsThreadPoolExhaustionNotificationSettingsToHclTerraform(struct?: ServerSettingsNotificationsThreadPoolExhaustionNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_mode: {
      value: cdktf.stringToHclTerraform(struct!.notificationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_publisher_ref: {
      value: serverSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRefToHclTerraform(struct!.notificationPublisherRef),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef",
    },
    thread_dump_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.threadDumpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotificationsThreadPoolExhaustionNotificationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._notificationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationMode = this._notificationMode;
    }
    if (this._notificationPublisherRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPublisherRef = this._notificationPublisherRef?.internalValue;
    }
    if (this._threadDumpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadDumpEnabled = this._threadDumpEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotificationsThreadPoolExhaustionNotificationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._notificationMode = undefined;
      this._notificationPublisherRef.internalValue = undefined;
      this._threadDumpEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._notificationMode = value.notificationMode;
      this._notificationPublisherRef.internalValue = value.notificationPublisherRef;
      this._threadDumpEnabled = value.threadDumpEnabled;
    }
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // notification_mode - computed: true, optional: true, required: false
  private _notificationMode?: string; 
  public get notificationMode() {
    return this.getStringAttribute('notification_mode');
  }
  public set notificationMode(value: string) {
    this._notificationMode = value;
  }
  public resetNotificationMode() {
    this._notificationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationModeInput() {
    return this._notificationMode;
  }

  // notification_publisher_ref - computed: true, optional: true, required: false
  private _notificationPublisherRef = new ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }
  public putNotificationPublisherRef(value: ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef) {
    this._notificationPublisherRef.internalValue = value;
  }
  public resetNotificationPublisherRef() {
    this._notificationPublisherRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPublisherRefInput() {
    return this._notificationPublisherRef.internalValue;
  }

  // thread_dump_enabled - computed: true, optional: true, required: false
  private _threadDumpEnabled?: boolean | cdktf.IResolvable; 
  public get threadDumpEnabled() {
    return this.getBooleanAttribute('thread_dump_enabled');
  }
  public set threadDumpEnabled(value: boolean | cdktf.IResolvable) {
    this._threadDumpEnabled = value;
  }
  public resetThreadDumpEnabled() {
    this._threadDumpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadDumpEnabledInput() {
    return this._threadDumpEnabled;
  }
}
export interface ServerSettingsNotifications {
  /**
  * Reference to the associated notification publisher for admin user account changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#account_changes_notification_publisher_ref ServerSettings#account_changes_notification_publisher_ref}
  */
  readonly accountChangesNotificationPublisherRef?: ServerSettingsNotificationsAccountChangesNotificationPublisherRef;
  /**
  * Settings for bulkhead notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#bulkhead_alert_notification_settings ServerSettings#bulkhead_alert_notification_settings}
  */
  readonly bulkheadAlertNotificationSettings?: ServerSettingsNotificationsBulkheadAlertNotificationSettings;
  /**
  * Notification settings for certificate expiration events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#certificate_expirations ServerSettings#certificate_expirations}
  */
  readonly certificateExpirations?: ServerSettingsNotificationsCertificateExpirations;
  /**
  * Indicates the number of days prior to certificate expiry date, the administrative console warning starts. The default value is `14` days. Supported in PF `12.0` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#expired_certificate_administrative_console_warning_days ServerSettings#expired_certificate_administrative_console_warning_days}
  */
  readonly expiredCertificateAdministrativeConsoleWarningDays?: number;
  /**
  * Indicates the number of days past the certificate expiry date, the administrative console warning ends. The default value is `14` days. Supported in PF `12.0` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#expiring_certificate_administrative_console_warning_days ServerSettings#expiring_certificate_administrative_console_warning_days}
  */
  readonly expiringCertificateAdministrativeConsoleWarningDays?: number;
  /**
  * Settings for license event notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#license_events ServerSettings#license_events}
  */
  readonly licenseEvents?: ServerSettingsNotificationsLicenseEvents;
  /**
  * Settings for metadata update event notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#metadata_notification_settings ServerSettings#metadata_notification_settings}
  */
  readonly metadataNotificationSettings?: ServerSettingsNotificationsMetadataNotificationSettings;
  /**
  * Determines whether admin users are notified through email when their account is changed. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#notify_admin_user_password_changes ServerSettings#notify_admin_user_password_changes}
  */
  readonly notifyAdminUserPasswordChanges?: boolean | cdktf.IResolvable;
  /**
  * Notification settings for thread pool exhaustion events. Supported in PF `12.0` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#thread_pool_exhaustion_notification_settings ServerSettings#thread_pool_exhaustion_notification_settings}
  */
  readonly threadPoolExhaustionNotificationSettings?: ServerSettingsNotificationsThreadPoolExhaustionNotificationSettings;
}

export function serverSettingsNotificationsToTerraform(struct?: ServerSettingsNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_changes_notification_publisher_ref: serverSettingsNotificationsAccountChangesNotificationPublisherRefToTerraform(struct!.accountChangesNotificationPublisherRef),
    bulkhead_alert_notification_settings: serverSettingsNotificationsBulkheadAlertNotificationSettingsToTerraform(struct!.bulkheadAlertNotificationSettings),
    certificate_expirations: serverSettingsNotificationsCertificateExpirationsToTerraform(struct!.certificateExpirations),
    expired_certificate_administrative_console_warning_days: cdktf.numberToTerraform(struct!.expiredCertificateAdministrativeConsoleWarningDays),
    expiring_certificate_administrative_console_warning_days: cdktf.numberToTerraform(struct!.expiringCertificateAdministrativeConsoleWarningDays),
    license_events: serverSettingsNotificationsLicenseEventsToTerraform(struct!.licenseEvents),
    metadata_notification_settings: serverSettingsNotificationsMetadataNotificationSettingsToTerraform(struct!.metadataNotificationSettings),
    notify_admin_user_password_changes: cdktf.booleanToTerraform(struct!.notifyAdminUserPasswordChanges),
    thread_pool_exhaustion_notification_settings: serverSettingsNotificationsThreadPoolExhaustionNotificationSettingsToTerraform(struct!.threadPoolExhaustionNotificationSettings),
  }
}


export function serverSettingsNotificationsToHclTerraform(struct?: ServerSettingsNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_changes_notification_publisher_ref: {
      value: serverSettingsNotificationsAccountChangesNotificationPublisherRefToHclTerraform(struct!.accountChangesNotificationPublisherRef),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsAccountChangesNotificationPublisherRef",
    },
    bulkhead_alert_notification_settings: {
      value: serverSettingsNotificationsBulkheadAlertNotificationSettingsToHclTerraform(struct!.bulkheadAlertNotificationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsBulkheadAlertNotificationSettings",
    },
    certificate_expirations: {
      value: serverSettingsNotificationsCertificateExpirationsToHclTerraform(struct!.certificateExpirations),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsCertificateExpirations",
    },
    expired_certificate_administrative_console_warning_days: {
      value: cdktf.numberToHclTerraform(struct!.expiredCertificateAdministrativeConsoleWarningDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiring_certificate_administrative_console_warning_days: {
      value: cdktf.numberToHclTerraform(struct!.expiringCertificateAdministrativeConsoleWarningDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    license_events: {
      value: serverSettingsNotificationsLicenseEventsToHclTerraform(struct!.licenseEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsLicenseEvents",
    },
    metadata_notification_settings: {
      value: serverSettingsNotificationsMetadataNotificationSettingsToHclTerraform(struct!.metadataNotificationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsMetadataNotificationSettings",
    },
    notify_admin_user_password_changes: {
      value: cdktf.booleanToHclTerraform(struct!.notifyAdminUserPasswordChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    thread_pool_exhaustion_notification_settings: {
      value: serverSettingsNotificationsThreadPoolExhaustionNotificationSettingsToHclTerraform(struct!.threadPoolExhaustionNotificationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerSettingsNotificationsThreadPoolExhaustionNotificationSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountChangesNotificationPublisherRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountChangesNotificationPublisherRef = this._accountChangesNotificationPublisherRef?.internalValue;
    }
    if (this._bulkheadAlertNotificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkheadAlertNotificationSettings = this._bulkheadAlertNotificationSettings?.internalValue;
    }
    if (this._certificateExpirations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateExpirations = this._certificateExpirations?.internalValue;
    }
    if (this._expiredCertificateAdministrativeConsoleWarningDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredCertificateAdministrativeConsoleWarningDays = this._expiredCertificateAdministrativeConsoleWarningDays;
    }
    if (this._expiringCertificateAdministrativeConsoleWarningDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiringCertificateAdministrativeConsoleWarningDays = this._expiringCertificateAdministrativeConsoleWarningDays;
    }
    if (this._licenseEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseEvents = this._licenseEvents?.internalValue;
    }
    if (this._metadataNotificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataNotificationSettings = this._metadataNotificationSettings?.internalValue;
    }
    if (this._notifyAdminUserPasswordChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyAdminUserPasswordChanges = this._notifyAdminUserPasswordChanges;
    }
    if (this._threadPoolExhaustionNotificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolExhaustionNotificationSettings = this._threadPoolExhaustionNotificationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountChangesNotificationPublisherRef.internalValue = undefined;
      this._bulkheadAlertNotificationSettings.internalValue = undefined;
      this._certificateExpirations.internalValue = undefined;
      this._expiredCertificateAdministrativeConsoleWarningDays = undefined;
      this._expiringCertificateAdministrativeConsoleWarningDays = undefined;
      this._licenseEvents.internalValue = undefined;
      this._metadataNotificationSettings.internalValue = undefined;
      this._notifyAdminUserPasswordChanges = undefined;
      this._threadPoolExhaustionNotificationSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountChangesNotificationPublisherRef.internalValue = value.accountChangesNotificationPublisherRef;
      this._bulkheadAlertNotificationSettings.internalValue = value.bulkheadAlertNotificationSettings;
      this._certificateExpirations.internalValue = value.certificateExpirations;
      this._expiredCertificateAdministrativeConsoleWarningDays = value.expiredCertificateAdministrativeConsoleWarningDays;
      this._expiringCertificateAdministrativeConsoleWarningDays = value.expiringCertificateAdministrativeConsoleWarningDays;
      this._licenseEvents.internalValue = value.licenseEvents;
      this._metadataNotificationSettings.internalValue = value.metadataNotificationSettings;
      this._notifyAdminUserPasswordChanges = value.notifyAdminUserPasswordChanges;
      this._threadPoolExhaustionNotificationSettings.internalValue = value.threadPoolExhaustionNotificationSettings;
    }
  }

  // account_changes_notification_publisher_ref - computed: true, optional: true, required: false
  private _accountChangesNotificationPublisherRef = new ServerSettingsNotificationsAccountChangesNotificationPublisherRefOutputReference(this, "account_changes_notification_publisher_ref");
  public get accountChangesNotificationPublisherRef() {
    return this._accountChangesNotificationPublisherRef;
  }
  public putAccountChangesNotificationPublisherRef(value: ServerSettingsNotificationsAccountChangesNotificationPublisherRef) {
    this._accountChangesNotificationPublisherRef.internalValue = value;
  }
  public resetAccountChangesNotificationPublisherRef() {
    this._accountChangesNotificationPublisherRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountChangesNotificationPublisherRefInput() {
    return this._accountChangesNotificationPublisherRef.internalValue;
  }

  // bulkhead_alert_notification_settings - computed: true, optional: true, required: false
  private _bulkheadAlertNotificationSettings = new ServerSettingsNotificationsBulkheadAlertNotificationSettingsOutputReference(this, "bulkhead_alert_notification_settings");
  public get bulkheadAlertNotificationSettings() {
    return this._bulkheadAlertNotificationSettings;
  }
  public putBulkheadAlertNotificationSettings(value: ServerSettingsNotificationsBulkheadAlertNotificationSettings) {
    this._bulkheadAlertNotificationSettings.internalValue = value;
  }
  public resetBulkheadAlertNotificationSettings() {
    this._bulkheadAlertNotificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkheadAlertNotificationSettingsInput() {
    return this._bulkheadAlertNotificationSettings.internalValue;
  }

  // certificate_expirations - computed: true, optional: true, required: false
  private _certificateExpirations = new ServerSettingsNotificationsCertificateExpirationsOutputReference(this, "certificate_expirations");
  public get certificateExpirations() {
    return this._certificateExpirations;
  }
  public putCertificateExpirations(value: ServerSettingsNotificationsCertificateExpirations) {
    this._certificateExpirations.internalValue = value;
  }
  public resetCertificateExpirations() {
    this._certificateExpirations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateExpirationsInput() {
    return this._certificateExpirations.internalValue;
  }

  // expired_certificate_administrative_console_warning_days - computed: true, optional: true, required: false
  private _expiredCertificateAdministrativeConsoleWarningDays?: number; 
  public get expiredCertificateAdministrativeConsoleWarningDays() {
    return this.getNumberAttribute('expired_certificate_administrative_console_warning_days');
  }
  public set expiredCertificateAdministrativeConsoleWarningDays(value: number) {
    this._expiredCertificateAdministrativeConsoleWarningDays = value;
  }
  public resetExpiredCertificateAdministrativeConsoleWarningDays() {
    this._expiredCertificateAdministrativeConsoleWarningDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredCertificateAdministrativeConsoleWarningDaysInput() {
    return this._expiredCertificateAdministrativeConsoleWarningDays;
  }

  // expiring_certificate_administrative_console_warning_days - computed: true, optional: true, required: false
  private _expiringCertificateAdministrativeConsoleWarningDays?: number; 
  public get expiringCertificateAdministrativeConsoleWarningDays() {
    return this.getNumberAttribute('expiring_certificate_administrative_console_warning_days');
  }
  public set expiringCertificateAdministrativeConsoleWarningDays(value: number) {
    this._expiringCertificateAdministrativeConsoleWarningDays = value;
  }
  public resetExpiringCertificateAdministrativeConsoleWarningDays() {
    this._expiringCertificateAdministrativeConsoleWarningDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiringCertificateAdministrativeConsoleWarningDaysInput() {
    return this._expiringCertificateAdministrativeConsoleWarningDays;
  }

  // license_events - computed: true, optional: true, required: false
  private _licenseEvents = new ServerSettingsNotificationsLicenseEventsOutputReference(this, "license_events");
  public get licenseEvents() {
    return this._licenseEvents;
  }
  public putLicenseEvents(value: ServerSettingsNotificationsLicenseEvents) {
    this._licenseEvents.internalValue = value;
  }
  public resetLicenseEvents() {
    this._licenseEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseEventsInput() {
    return this._licenseEvents.internalValue;
  }

  // metadata_notification_settings - computed: true, optional: true, required: false
  private _metadataNotificationSettings = new ServerSettingsNotificationsMetadataNotificationSettingsOutputReference(this, "metadata_notification_settings");
  public get metadataNotificationSettings() {
    return this._metadataNotificationSettings;
  }
  public putMetadataNotificationSettings(value: ServerSettingsNotificationsMetadataNotificationSettings) {
    this._metadataNotificationSettings.internalValue = value;
  }
  public resetMetadataNotificationSettings() {
    this._metadataNotificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataNotificationSettingsInput() {
    return this._metadataNotificationSettings.internalValue;
  }

  // notify_admin_user_password_changes - computed: true, optional: true, required: false
  private _notifyAdminUserPasswordChanges?: boolean | cdktf.IResolvable; 
  public get notifyAdminUserPasswordChanges() {
    return this.getBooleanAttribute('notify_admin_user_password_changes');
  }
  public set notifyAdminUserPasswordChanges(value: boolean | cdktf.IResolvable) {
    this._notifyAdminUserPasswordChanges = value;
  }
  public resetNotifyAdminUserPasswordChanges() {
    this._notifyAdminUserPasswordChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAdminUserPasswordChangesInput() {
    return this._notifyAdminUserPasswordChanges;
  }

  // thread_pool_exhaustion_notification_settings - computed: true, optional: true, required: false
  private _threadPoolExhaustionNotificationSettings = new ServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsOutputReference(this, "thread_pool_exhaustion_notification_settings");
  public get threadPoolExhaustionNotificationSettings() {
    return this._threadPoolExhaustionNotificationSettings;
  }
  public putThreadPoolExhaustionNotificationSettings(value: ServerSettingsNotificationsThreadPoolExhaustionNotificationSettings) {
    this._threadPoolExhaustionNotificationSettings.internalValue = value;
  }
  public resetThreadPoolExhaustionNotificationSettings() {
    this._threadPoolExhaustionNotificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolExhaustionNotificationSettingsInput() {
    return this._threadPoolExhaustionNotificationSettings.internalValue;
  }
}
export interface ServerSettingsRolesAndProtocolsIdpRoleSaml20Profile {
}

export function serverSettingsRolesAndProtocolsIdpRoleSaml20ProfileToTerraform(struct?: ServerSettingsRolesAndProtocolsIdpRoleSaml20Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverSettingsRolesAndProtocolsIdpRoleSaml20ProfileToHclTerraform(struct?: ServerSettingsRolesAndProtocolsIdpRoleSaml20Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerSettingsRolesAndProtocolsIdpRoleSaml20ProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsRolesAndProtocolsIdpRoleSaml20Profile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsRolesAndProtocolsIdpRoleSaml20Profile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
}
export interface ServerSettingsRolesAndProtocolsIdpRole {
}

export function serverSettingsRolesAndProtocolsIdpRoleToTerraform(struct?: ServerSettingsRolesAndProtocolsIdpRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverSettingsRolesAndProtocolsIdpRoleToHclTerraform(struct?: ServerSettingsRolesAndProtocolsIdpRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerSettingsRolesAndProtocolsIdpRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsRolesAndProtocolsIdpRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsRolesAndProtocolsIdpRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // enable_outbound_provisioning - computed: true, optional: false, required: false
  public get enableOutboundProvisioning() {
    return this.getBooleanAttribute('enable_outbound_provisioning');
  }

  // enable_saml_1_0 - computed: true, optional: false, required: false
  public get enableSaml10() {
    return this.getBooleanAttribute('enable_saml_1_0');
  }

  // enable_saml_1_1 - computed: true, optional: false, required: false
  public get enableSaml11() {
    return this.getBooleanAttribute('enable_saml_1_1');
  }

  // enable_ws_fed - computed: true, optional: false, required: false
  public get enableWsFed() {
    return this.getBooleanAttribute('enable_ws_fed');
  }

  // enable_ws_trust - computed: true, optional: false, required: false
  public get enableWsTrust() {
    return this.getBooleanAttribute('enable_ws_trust');
  }

  // saml_2_0_profile - computed: true, optional: false, required: false
  private _saml20Profile = new ServerSettingsRolesAndProtocolsIdpRoleSaml20ProfileOutputReference(this, "saml_2_0_profile");
  public get saml20Profile() {
    return this._saml20Profile;
  }
}
export interface ServerSettingsRolesAndProtocolsOauthRole {
}

export function serverSettingsRolesAndProtocolsOauthRoleToTerraform(struct?: ServerSettingsRolesAndProtocolsOauthRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverSettingsRolesAndProtocolsOauthRoleToHclTerraform(struct?: ServerSettingsRolesAndProtocolsOauthRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerSettingsRolesAndProtocolsOauthRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsRolesAndProtocolsOauthRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsRolesAndProtocolsOauthRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_oauth - computed: true, optional: false, required: false
  public get enableOauth() {
    return this.getBooleanAttribute('enable_oauth');
  }

  // enable_open_id_connect - computed: true, optional: false, required: false
  public get enableOpenIdConnect() {
    return this.getBooleanAttribute('enable_open_id_connect');
  }
}
export interface ServerSettingsRolesAndProtocolsSpRoleSaml20Profile {
}

export function serverSettingsRolesAndProtocolsSpRoleSaml20ProfileToTerraform(struct?: ServerSettingsRolesAndProtocolsSpRoleSaml20Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverSettingsRolesAndProtocolsSpRoleSaml20ProfileToHclTerraform(struct?: ServerSettingsRolesAndProtocolsSpRoleSaml20Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerSettingsRolesAndProtocolsSpRoleSaml20ProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsRolesAndProtocolsSpRoleSaml20Profile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsRolesAndProtocolsSpRoleSaml20Profile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // enable_xasp - computed: true, optional: false, required: false
  public get enableXasp() {
    return this.getBooleanAttribute('enable_xasp');
  }
}
export interface ServerSettingsRolesAndProtocolsSpRole {
}

export function serverSettingsRolesAndProtocolsSpRoleToTerraform(struct?: ServerSettingsRolesAndProtocolsSpRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverSettingsRolesAndProtocolsSpRoleToHclTerraform(struct?: ServerSettingsRolesAndProtocolsSpRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerSettingsRolesAndProtocolsSpRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsRolesAndProtocolsSpRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsRolesAndProtocolsSpRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // enable_inbound_provisioning - computed: true, optional: false, required: false
  public get enableInboundProvisioning() {
    return this.getBooleanAttribute('enable_inbound_provisioning');
  }

  // enable_open_id_connect - computed: true, optional: false, required: false
  public get enableOpenIdConnect() {
    return this.getBooleanAttribute('enable_open_id_connect');
  }

  // enable_saml_1_0 - computed: true, optional: false, required: false
  public get enableSaml10() {
    return this.getBooleanAttribute('enable_saml_1_0');
  }

  // enable_saml_1_1 - computed: true, optional: false, required: false
  public get enableSaml11() {
    return this.getBooleanAttribute('enable_saml_1_1');
  }

  // enable_ws_fed - computed: true, optional: false, required: false
  public get enableWsFed() {
    return this.getBooleanAttribute('enable_ws_fed');
  }

  // enable_ws_trust - computed: true, optional: false, required: false
  public get enableWsTrust() {
    return this.getBooleanAttribute('enable_ws_trust');
  }

  // saml_2_0_profile - computed: true, optional: false, required: false
  private _saml20Profile = new ServerSettingsRolesAndProtocolsSpRoleSaml20ProfileOutputReference(this, "saml_2_0_profile");
  public get saml20Profile() {
    return this._saml20Profile;
  }
}
export interface ServerSettingsRolesAndProtocols {
}

export function serverSettingsRolesAndProtocolsToTerraform(struct?: ServerSettingsRolesAndProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverSettingsRolesAndProtocolsToHclTerraform(struct?: ServerSettingsRolesAndProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerSettingsRolesAndProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsRolesAndProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsRolesAndProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_idp_discovery - computed: true, optional: false, required: false
  public get enableIdpDiscovery() {
    return this.getBooleanAttribute('enable_idp_discovery');
  }

  // idp_role - computed: true, optional: false, required: false
  private _idpRole = new ServerSettingsRolesAndProtocolsIdpRoleOutputReference(this, "idp_role");
  public get idpRole() {
    return this._idpRole;
  }

  // oauth_role - computed: true, optional: false, required: false
  private _oauthRole = new ServerSettingsRolesAndProtocolsOauthRoleOutputReference(this, "oauth_role");
  public get oauthRole() {
    return this._oauthRole;
  }

  // sp_role - computed: true, optional: false, required: false
  private _spRole = new ServerSettingsRolesAndProtocolsSpRoleOutputReference(this, "sp_role");
  public get spRole() {
    return this._spRole;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings pingfederate_server_settings}
*/
export class ServerSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_server_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerSettings to import
  * @param importFromId The id of the existing ServerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_server_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings pingfederate_server_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ServerSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_server_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactInfo.internalValue = config.contactInfo;
    this._federationInfo.internalValue = config.federationInfo;
    this._notifications.internalValue = config.notifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_info - computed: true, optional: true, required: false
  private _contactInfo = new ServerSettingsContactInfoOutputReference(this, "contact_info");
  public get contactInfo() {
    return this._contactInfo;
  }
  public putContactInfo(value: ServerSettingsContactInfo) {
    this._contactInfo.internalValue = value;
  }
  public resetContactInfo() {
    this._contactInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInfoInput() {
    return this._contactInfo.internalValue;
  }

  // federation_info - computed: false, optional: false, required: true
  private _federationInfo = new ServerSettingsFederationInfoOutputReference(this, "federation_info");
  public get federationInfo() {
    return this._federationInfo;
  }
  public putFederationInfo(value: ServerSettingsFederationInfo) {
    this._federationInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get federationInfoInput() {
    return this._federationInfo.internalValue;
  }

  // notifications - computed: true, optional: true, required: false
  private _notifications = new ServerSettingsNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: ServerSettingsNotifications) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // roles_and_protocols - computed: true, optional: false, required: false
  private _rolesAndProtocols = new ServerSettingsRolesAndProtocolsOutputReference(this, "roles_and_protocols");
  public get rolesAndProtocols() {
    return this._rolesAndProtocols;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_info: serverSettingsContactInfoToTerraform(this._contactInfo.internalValue),
      federation_info: serverSettingsFederationInfoToTerraform(this._federationInfo.internalValue),
      notifications: serverSettingsNotificationsToTerraform(this._notifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_info: {
        value: serverSettingsContactInfoToHclTerraform(this._contactInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerSettingsContactInfo",
      },
      federation_info: {
        value: serverSettingsFederationInfoToHclTerraform(this._federationInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerSettingsFederationInfo",
      },
      notifications: {
        value: serverSettingsNotificationsToHclTerraform(this._notifications.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerSettingsNotifications",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
