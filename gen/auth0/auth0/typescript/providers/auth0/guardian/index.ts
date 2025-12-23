// https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuardianConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether email MFA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#email Guardian#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#id Guardian#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether one time password MFA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#otp Guardian#otp}
  */
  readonly otp?: boolean | cdktf.IResolvable;
  /**
  * Policy to use. Available options are `never`, `all-applications` and `confidence-score`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#policy Guardian#policy}
  */
  readonly policy: string;
  /**
  * Indicates whether recovery code MFA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#recovery_code Guardian#recovery_code}
  */
  readonly recoveryCode?: boolean | cdktf.IResolvable;
  /**
  * duo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#duo Guardian#duo}
  */
  readonly duo?: GuardianDuo;
  /**
  * phone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#phone Guardian#phone}
  */
  readonly phone?: GuardianPhone;
  /**
  * push block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#push Guardian#push}
  */
  readonly push?: GuardianPush;
  /**
  * webauthn_platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#webauthn_platform Guardian#webauthn_platform}
  */
  readonly webauthnPlatform?: GuardianWebauthnPlatform;
  /**
  * webauthn_roaming block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#webauthn_roaming Guardian#webauthn_roaming}
  */
  readonly webauthnRoaming?: GuardianWebauthnRoaming;
}
export interface GuardianDuo {
  /**
  * Indicates whether Duo MFA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#enabled Guardian#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Duo API Hostname, see the Duo documentation for more details on Duo setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#hostname Guardian#hostname}
  */
  readonly hostname?: string;
  /**
  * Duo client ID, see the Duo documentation for more details on Duo setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#integration_key Guardian#integration_key}
  */
  readonly integrationKey?: string;
  /**
  * Duo client secret, see the Duo documentation for more details on Duo setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#secret_key Guardian#secret_key}
  */
  readonly secretKey?: string;
}

export function guardianDuoToTerraform(struct?: GuardianDuoOutputReference | GuardianDuo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    integration_key: cdktf.stringToTerraform(struct!.integrationKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function guardianDuoToHclTerraform(struct?: GuardianDuoOutputReference | GuardianDuo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_key: {
      value: cdktf.stringToHclTerraform(struct!.integrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianDuoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianDuo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._integrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationKey = this._integrationKey;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianDuo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._hostname = undefined;
      this._integrationKey = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._hostname = value.hostname;
      this._integrationKey = value.integrationKey;
      this._secretKey = value.secretKey;
    }
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // integration_key - computed: false, optional: true, required: false
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  public resetIntegrationKey() {
    this._integrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface GuardianPhoneOptions {
  /**
  * AuthToken for your Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#auth_token Guardian#auth_token}
  */
  readonly authToken?: string;
  /**
  * This message will be sent whenever a user enrolls a new device for the first time using MFA. Supports Liquid syntax, see [Auth0 docs](https://auth0.com/docs/customize/customize-sms-or-voice-messages).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#enrollment_message Guardian#enrollment_message}
  */
  readonly enrollmentMessage?: string;
  /**
  * Phone number to use as the sender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#from Guardian#from}
  */
  readonly from?: string;
  /**
  * Messaging service SID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#messaging_service_sid Guardian#messaging_service_sid}
  */
  readonly messagingServiceSid?: string;
  /**
  * SID for your Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#sid Guardian#sid}
  */
  readonly sid?: string;
  /**
  * This message will be sent whenever a user logs in after the enrollment. Supports Liquid syntax, see [Auth0 docs](https://auth0.com/docs/customize/customize-sms-or-voice-messages).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#verification_message Guardian#verification_message}
  */
  readonly verificationMessage?: string;
}

export function guardianPhoneOptionsToTerraform(struct?: GuardianPhoneOptionsOutputReference | GuardianPhoneOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    enrollment_message: cdktf.stringToTerraform(struct!.enrollmentMessage),
    from: cdktf.stringToTerraform(struct!.from),
    messaging_service_sid: cdktf.stringToTerraform(struct!.messagingServiceSid),
    sid: cdktf.stringToTerraform(struct!.sid),
    verification_message: cdktf.stringToTerraform(struct!.verificationMessage),
  }
}


export function guardianPhoneOptionsToHclTerraform(struct?: GuardianPhoneOptionsOutputReference | GuardianPhoneOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enrollment_message: {
      value: cdktf.stringToHclTerraform(struct!.enrollmentMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    messaging_service_sid: {
      value: cdktf.stringToHclTerraform(struct!.messagingServiceSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification_message: {
      value: cdktf.stringToHclTerraform(struct!.verificationMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianPhoneOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianPhoneOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._enrollmentMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentMessage = this._enrollmentMessage;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._messagingServiceSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagingServiceSid = this._messagingServiceSid;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    if (this._verificationMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationMessage = this._verificationMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianPhoneOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authToken = undefined;
      this._enrollmentMessage = undefined;
      this._from = undefined;
      this._messagingServiceSid = undefined;
      this._sid = undefined;
      this._verificationMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authToken = value.authToken;
      this._enrollmentMessage = value.enrollmentMessage;
      this._from = value.from;
      this._messagingServiceSid = value.messagingServiceSid;
      this._sid = value.sid;
      this._verificationMessage = value.verificationMessage;
    }
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // enrollment_message - computed: false, optional: true, required: false
  private _enrollmentMessage?: string; 
  public get enrollmentMessage() {
    return this.getStringAttribute('enrollment_message');
  }
  public set enrollmentMessage(value: string) {
    this._enrollmentMessage = value;
  }
  public resetEnrollmentMessage() {
    this._enrollmentMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentMessageInput() {
    return this._enrollmentMessage;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // messaging_service_sid - computed: false, optional: true, required: false
  private _messagingServiceSid?: string; 
  public get messagingServiceSid() {
    return this.getStringAttribute('messaging_service_sid');
  }
  public set messagingServiceSid(value: string) {
    this._messagingServiceSid = value;
  }
  public resetMessagingServiceSid() {
    this._messagingServiceSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingServiceSidInput() {
    return this._messagingServiceSid;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // verification_message - computed: false, optional: true, required: false
  private _verificationMessage?: string; 
  public get verificationMessage() {
    return this.getStringAttribute('verification_message');
  }
  public set verificationMessage(value: string) {
    this._verificationMessage = value;
  }
  public resetVerificationMessage() {
    this._verificationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMessageInput() {
    return this._verificationMessage;
  }
}
export interface GuardianPhone {
  /**
  * Indicates whether Phone MFA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#enabled Guardian#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Message types to use, array of `sms` and/or `voice`. Adding both to the array should enable the user to choose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#message_types Guardian#message_types}
  */
  readonly messageTypes?: string[];
  /**
  * Provider to use, one of `auth0`, `twilio` or `phone-message-hook`. Selecting `phone-message-hook` will require a Phone Message Action to be created before. [Learn how](https://auth0.com/docs/customize/actions/flows-and-triggers/send-phone-message-flow).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#provider Guardian#provider}
  */
  readonly provider?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#options Guardian#options}
  */
  readonly options?: GuardianPhoneOptions;
}

export function guardianPhoneToTerraform(struct?: GuardianPhoneOutputReference | GuardianPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    message_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.messageTypes),
    provider: cdktf.stringToTerraform(struct!.provider),
    options: guardianPhoneOptionsToTerraform(struct!.options),
  }
}


export function guardianPhoneToHclTerraform(struct?: GuardianPhoneOutputReference | GuardianPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.messageTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: guardianPhoneOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "GuardianPhoneOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianPhoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianPhone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._messageTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTypes = this._messageTypes;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianPhone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._messageTypes = undefined;
      this._provider = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._messageTypes = value.messageTypes;
      this._provider = value.provider;
      this._options.internalValue = value.options;
    }
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

  // message_types - computed: false, optional: true, required: false
  private _messageTypes?: string[]; 
  public get messageTypes() {
    return this.getListAttribute('message_types');
  }
  public set messageTypes(value: string[]) {
    this._messageTypes = value;
  }
  public resetMessageTypes() {
    this._messageTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypesInput() {
    return this._messageTypes;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // options - computed: false, optional: true, required: false
  private _options = new GuardianPhoneOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GuardianPhoneOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface GuardianPushAmazonSns {
  /**
  * Your AWS Access Key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#aws_access_key_id Guardian#aws_access_key_id}
  */
  readonly awsAccessKeyId: string;
  /**
  * Your AWS application's region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#aws_region Guardian#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Your AWS Secret Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#aws_secret_access_key Guardian#aws_secret_access_key}
  */
  readonly awsSecretAccessKey: string;
  /**
  * The Amazon Resource Name for your Apple Push Notification Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#sns_apns_platform_application_arn Guardian#sns_apns_platform_application_arn}
  */
  readonly snsApnsPlatformApplicationArn: string;
  /**
  * The Amazon Resource Name for your Firebase Cloud Messaging Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#sns_gcm_platform_application_arn Guardian#sns_gcm_platform_application_arn}
  */
  readonly snsGcmPlatformApplicationArn: string;
}

export function guardianPushAmazonSnsToTerraform(struct?: GuardianPushAmazonSnsOutputReference | GuardianPushAmazonSns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
    sns_apns_platform_application_arn: cdktf.stringToTerraform(struct!.snsApnsPlatformApplicationArn),
    sns_gcm_platform_application_arn: cdktf.stringToTerraform(struct!.snsGcmPlatformApplicationArn),
  }
}


export function guardianPushAmazonSnsToHclTerraform(struct?: GuardianPushAmazonSnsOutputReference | GuardianPushAmazonSns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_apns_platform_application_arn: {
      value: cdktf.stringToHclTerraform(struct!.snsApnsPlatformApplicationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_gcm_platform_application_arn: {
      value: cdktf.stringToHclTerraform(struct!.snsGcmPlatformApplicationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianPushAmazonSnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianPushAmazonSns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    if (this._snsApnsPlatformApplicationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsApnsPlatformApplicationArn = this._snsApnsPlatformApplicationArn;
    }
    if (this._snsGcmPlatformApplicationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsGcmPlatformApplicationArn = this._snsGcmPlatformApplicationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianPushAmazonSns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccessKeyId = undefined;
      this._awsRegion = undefined;
      this._awsSecretAccessKey = undefined;
      this._snsApnsPlatformApplicationArn = undefined;
      this._snsGcmPlatformApplicationArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsRegion = value.awsRegion;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
      this._snsApnsPlatformApplicationArn = value.snsApnsPlatformApplicationArn;
      this._snsGcmPlatformApplicationArn = value.snsGcmPlatformApplicationArn;
    }
  }

  // aws_access_key_id - computed: false, optional: false, required: true
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_secret_access_key - computed: false, optional: false, required: true
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // sns_apns_platform_application_arn - computed: false, optional: false, required: true
  private _snsApnsPlatformApplicationArn?: string; 
  public get snsApnsPlatformApplicationArn() {
    return this.getStringAttribute('sns_apns_platform_application_arn');
  }
  public set snsApnsPlatformApplicationArn(value: string) {
    this._snsApnsPlatformApplicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsApnsPlatformApplicationArnInput() {
    return this._snsApnsPlatformApplicationArn;
  }

  // sns_gcm_platform_application_arn - computed: false, optional: false, required: true
  private _snsGcmPlatformApplicationArn?: string; 
  public get snsGcmPlatformApplicationArn() {
    return this.getStringAttribute('sns_gcm_platform_application_arn');
  }
  public set snsGcmPlatformApplicationArn(value: string) {
    this._snsGcmPlatformApplicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsGcmPlatformApplicationArnInput() {
    return this._snsGcmPlatformApplicationArn;
  }
}
export interface GuardianPushCustomApp {
  /**
  * Custom Application Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#app_name Guardian#app_name}
  */
  readonly appName?: string;
  /**
  * Apple App Store URL. Must be HTTPS or an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#apple_app_link Guardian#apple_app_link}
  */
  readonly appleAppLink?: string;
  /**
  * Google Store URL. Must be HTTPS or an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#google_app_link Guardian#google_app_link}
  */
  readonly googleAppLink?: string;
}

export function guardianPushCustomAppToTerraform(struct?: GuardianPushCustomAppOutputReference | GuardianPushCustomApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_name: cdktf.stringToTerraform(struct!.appName),
    apple_app_link: cdktf.stringToTerraform(struct!.appleAppLink),
    google_app_link: cdktf.stringToTerraform(struct!.googleAppLink),
  }
}


export function guardianPushCustomAppToHclTerraform(struct?: GuardianPushCustomAppOutputReference | GuardianPushCustomApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apple_app_link: {
      value: cdktf.stringToHclTerraform(struct!.appleAppLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_app_link: {
      value: cdktf.stringToHclTerraform(struct!.googleAppLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianPushCustomAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianPushCustomApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._appleAppLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.appleAppLink = this._appleAppLink;
    }
    if (this._googleAppLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAppLink = this._googleAppLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianPushCustomApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appName = undefined;
      this._appleAppLink = undefined;
      this._googleAppLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appName = value.appName;
      this._appleAppLink = value.appleAppLink;
      this._googleAppLink = value.googleAppLink;
    }
  }

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // apple_app_link - computed: false, optional: true, required: false
  private _appleAppLink?: string; 
  public get appleAppLink() {
    return this.getStringAttribute('apple_app_link');
  }
  public set appleAppLink(value: string) {
    this._appleAppLink = value;
  }
  public resetAppleAppLink() {
    this._appleAppLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleAppLinkInput() {
    return this._appleAppLink;
  }

  // google_app_link - computed: false, optional: true, required: false
  private _googleAppLink?: string; 
  public get googleAppLink() {
    return this.getStringAttribute('google_app_link');
  }
  public set googleAppLink(value: string) {
    this._googleAppLink = value;
  }
  public resetGoogleAppLink() {
    this._googleAppLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAppLinkInput() {
    return this._googleAppLink;
  }
}
export interface GuardianPushDirectApns {
  /**
  * The Apple Push Notification service Bundle ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#bundle_id Guardian#bundle_id}
  */
  readonly bundleId: string;
  /**
  * Indicates whether the Apple Push Notification service is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#enabled Guardian#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The base64 encoded certificate in P12 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#p12 Guardian#p12}
  */
  readonly p12: string;
  /**
  * Set to true to use the sandbox iOS app environment, otherwise set to false to use the production iOS app environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#sandbox Guardian#sandbox}
  */
  readonly sandbox: boolean | cdktf.IResolvable;
}

export function guardianPushDirectApnsToTerraform(struct?: GuardianPushDirectApnsOutputReference | GuardianPushDirectApns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle_id: cdktf.stringToTerraform(struct!.bundleId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    p12: cdktf.stringToTerraform(struct!.p12),
    sandbox: cdktf.booleanToTerraform(struct!.sandbox),
  }
}


export function guardianPushDirectApnsToHclTerraform(struct?: GuardianPushDirectApnsOutputReference | GuardianPushDirectApns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle_id: {
      value: cdktf.stringToHclTerraform(struct!.bundleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    p12: {
      value: cdktf.stringToHclTerraform(struct!.p12),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sandbox: {
      value: cdktf.booleanToHclTerraform(struct!.sandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianPushDirectApnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianPushDirectApns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleId = this._bundleId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._p12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.p12 = this._p12;
    }
    if (this._sandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandbox = this._sandbox;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianPushDirectApns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bundleId = undefined;
      this._enabled = undefined;
      this._p12 = undefined;
      this._sandbox = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bundleId = value.bundleId;
      this._enabled = value.enabled;
      this._p12 = value.p12;
      this._sandbox = value.sandbox;
    }
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

  // enabled - computed: true, optional: true, required: false
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

  // p12 - computed: false, optional: false, required: true
  private _p12?: string; 
  public get p12() {
    return this.getStringAttribute('p12');
  }
  public set p12(value: string) {
    this._p12 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get p12Input() {
    return this._p12;
  }

  // sandbox - computed: false, optional: false, required: true
  private _sandbox?: boolean | cdktf.IResolvable; 
  public get sandbox() {
    return this.getBooleanAttribute('sandbox');
  }
  public set sandbox(value: boolean | cdktf.IResolvable) {
    this._sandbox = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxInput() {
    return this._sandbox;
  }
}
export interface GuardianPushDirectFcm {
  /**
  * The Firebase Cloud Messaging Server Key. For security purposes, we don’t retrieve your existing FCM server key to check for drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#server_key Guardian#server_key}
  */
  readonly serverKey: string;
}

export function guardianPushDirectFcmToTerraform(struct?: GuardianPushDirectFcmOutputReference | GuardianPushDirectFcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_key: cdktf.stringToTerraform(struct!.serverKey),
  }
}


export function guardianPushDirectFcmToHclTerraform(struct?: GuardianPushDirectFcmOutputReference | GuardianPushDirectFcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_key: {
      value: cdktf.stringToHclTerraform(struct!.serverKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianPushDirectFcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianPushDirectFcm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKey = this._serverKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianPushDirectFcm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverKey = value.serverKey;
    }
  }

  // server_key - computed: false, optional: false, required: true
  private _serverKey?: string; 
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }
  public set serverKey(value: string) {
    this._serverKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyInput() {
    return this._serverKey;
  }
}
export interface GuardianPush {
  /**
  * Indicates whether Push MFA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#enabled Guardian#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Provider to use, one of `direct`, `guardian`, `sns`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#provider Guardian#provider}
  */
  readonly provider?: string;
  /**
  * amazon_sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#amazon_sns Guardian#amazon_sns}
  */
  readonly amazonSns?: GuardianPushAmazonSns;
  /**
  * custom_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#custom_app Guardian#custom_app}
  */
  readonly customApp?: GuardianPushCustomApp;
  /**
  * direct_apns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#direct_apns Guardian#direct_apns}
  */
  readonly directApns?: GuardianPushDirectApns;
  /**
  * direct_fcm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#direct_fcm Guardian#direct_fcm}
  */
  readonly directFcm?: GuardianPushDirectFcm;
}

export function guardianPushToTerraform(struct?: GuardianPushOutputReference | GuardianPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    provider: cdktf.stringToTerraform(struct!.provider),
    amazon_sns: guardianPushAmazonSnsToTerraform(struct!.amazonSns),
    custom_app: guardianPushCustomAppToTerraform(struct!.customApp),
    direct_apns: guardianPushDirectApnsToTerraform(struct!.directApns),
    direct_fcm: guardianPushDirectFcmToTerraform(struct!.directFcm),
  }
}


export function guardianPushToHclTerraform(struct?: GuardianPushOutputReference | GuardianPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amazon_sns: {
      value: guardianPushAmazonSnsToHclTerraform(struct!.amazonSns),
      isBlock: true,
      type: "list",
      storageClassType: "GuardianPushAmazonSnsList",
    },
    custom_app: {
      value: guardianPushCustomAppToHclTerraform(struct!.customApp),
      isBlock: true,
      type: "list",
      storageClassType: "GuardianPushCustomAppList",
    },
    direct_apns: {
      value: guardianPushDirectApnsToHclTerraform(struct!.directApns),
      isBlock: true,
      type: "list",
      storageClassType: "GuardianPushDirectApnsList",
    },
    direct_fcm: {
      value: guardianPushDirectFcmToHclTerraform(struct!.directFcm),
      isBlock: true,
      type: "list",
      storageClassType: "GuardianPushDirectFcmList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianPush | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._amazonSns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonSns = this._amazonSns?.internalValue;
    }
    if (this._customApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApp = this._customApp?.internalValue;
    }
    if (this._directApns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directApns = this._directApns?.internalValue;
    }
    if (this._directFcm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directFcm = this._directFcm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianPush | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._provider = undefined;
      this._amazonSns.internalValue = undefined;
      this._customApp.internalValue = undefined;
      this._directApns.internalValue = undefined;
      this._directFcm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._provider = value.provider;
      this._amazonSns.internalValue = value.amazonSns;
      this._customApp.internalValue = value.customApp;
      this._directApns.internalValue = value.directApns;
      this._directFcm.internalValue = value.directFcm;
    }
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

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // amazon_sns - computed: false, optional: true, required: false
  private _amazonSns = new GuardianPushAmazonSnsOutputReference(this, "amazon_sns");
  public get amazonSns() {
    return this._amazonSns;
  }
  public putAmazonSns(value: GuardianPushAmazonSns) {
    this._amazonSns.internalValue = value;
  }
  public resetAmazonSns() {
    this._amazonSns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSnsInput() {
    return this._amazonSns.internalValue;
  }

  // custom_app - computed: false, optional: true, required: false
  private _customApp = new GuardianPushCustomAppOutputReference(this, "custom_app");
  public get customApp() {
    return this._customApp;
  }
  public putCustomApp(value: GuardianPushCustomApp) {
    this._customApp.internalValue = value;
  }
  public resetCustomApp() {
    this._customApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAppInput() {
    return this._customApp.internalValue;
  }

  // direct_apns - computed: false, optional: true, required: false
  private _directApns = new GuardianPushDirectApnsOutputReference(this, "direct_apns");
  public get directApns() {
    return this._directApns;
  }
  public putDirectApns(value: GuardianPushDirectApns) {
    this._directApns.internalValue = value;
  }
  public resetDirectApns() {
    this._directApns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directApnsInput() {
    return this._directApns.internalValue;
  }

  // direct_fcm - computed: false, optional: true, required: false
  private _directFcm = new GuardianPushDirectFcmOutputReference(this, "direct_fcm");
  public get directFcm() {
    return this._directFcm;
  }
  public putDirectFcm(value: GuardianPushDirectFcm) {
    this._directFcm.internalValue = value;
  }
  public resetDirectFcm() {
    this._directFcm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directFcmInput() {
    return this._directFcm.internalValue;
  }
}
export interface GuardianWebauthnPlatform {
  /**
  * Indicates whether WebAuthn with FIDO Device Biometrics MFA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#enabled Guardian#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The Relying Party is the domain for which the WebAuthn keys will be issued, set to `true` if you are customizing the identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#override_relying_party Guardian#override_relying_party}
  */
  readonly overrideRelyingParty?: boolean | cdktf.IResolvable;
  /**
  * The Relying Party should be a suffix of the custom domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#relying_party_identifier Guardian#relying_party_identifier}
  */
  readonly relyingPartyIdentifier?: string;
}

export function guardianWebauthnPlatformToTerraform(struct?: GuardianWebauthnPlatformOutputReference | GuardianWebauthnPlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override_relying_party: cdktf.booleanToTerraform(struct!.overrideRelyingParty),
    relying_party_identifier: cdktf.stringToTerraform(struct!.relyingPartyIdentifier),
  }
}


export function guardianWebauthnPlatformToHclTerraform(struct?: GuardianWebauthnPlatformOutputReference | GuardianWebauthnPlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_relying_party: {
      value: cdktf.booleanToHclTerraform(struct!.overrideRelyingParty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relying_party_identifier: {
      value: cdktf.stringToHclTerraform(struct!.relyingPartyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianWebauthnPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianWebauthnPlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._overrideRelyingParty !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideRelyingParty = this._overrideRelyingParty;
    }
    if (this._relyingPartyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.relyingPartyIdentifier = this._relyingPartyIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianWebauthnPlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._overrideRelyingParty = undefined;
      this._relyingPartyIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._overrideRelyingParty = value.overrideRelyingParty;
      this._relyingPartyIdentifier = value.relyingPartyIdentifier;
    }
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

  // override_relying_party - computed: true, optional: true, required: false
  private _overrideRelyingParty?: boolean | cdktf.IResolvable; 
  public get overrideRelyingParty() {
    return this.getBooleanAttribute('override_relying_party');
  }
  public set overrideRelyingParty(value: boolean | cdktf.IResolvable) {
    this._overrideRelyingParty = value;
  }
  public resetOverrideRelyingParty() {
    this._overrideRelyingParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideRelyingPartyInput() {
    return this._overrideRelyingParty;
  }

  // relying_party_identifier - computed: true, optional: true, required: false
  private _relyingPartyIdentifier?: string; 
  public get relyingPartyIdentifier() {
    return this.getStringAttribute('relying_party_identifier');
  }
  public set relyingPartyIdentifier(value: string) {
    this._relyingPartyIdentifier = value;
  }
  public resetRelyingPartyIdentifier() {
    this._relyingPartyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingPartyIdentifierInput() {
    return this._relyingPartyIdentifier;
  }
}
export interface GuardianWebauthnRoaming {
  /**
  * Indicates whether WebAuthn with FIDO Security Keys MFA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#enabled Guardian#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The Relying Party is the domain for which the WebAuthn keys will be issued, set to `true` if you are customizing the identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#override_relying_party Guardian#override_relying_party}
  */
  readonly overrideRelyingParty?: boolean | cdktf.IResolvable;
  /**
  * The Relying Party should be a suffix of the custom domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#relying_party_identifier Guardian#relying_party_identifier}
  */
  readonly relyingPartyIdentifier?: string;
  /**
  * User verification, one of `discouraged`, `preferred` or `required`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#user_verification Guardian#user_verification}
  */
  readonly userVerification?: string;
}

export function guardianWebauthnRoamingToTerraform(struct?: GuardianWebauthnRoamingOutputReference | GuardianWebauthnRoaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override_relying_party: cdktf.booleanToTerraform(struct!.overrideRelyingParty),
    relying_party_identifier: cdktf.stringToTerraform(struct!.relyingPartyIdentifier),
    user_verification: cdktf.stringToTerraform(struct!.userVerification),
  }
}


export function guardianWebauthnRoamingToHclTerraform(struct?: GuardianWebauthnRoamingOutputReference | GuardianWebauthnRoaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_relying_party: {
      value: cdktf.booleanToHclTerraform(struct!.overrideRelyingParty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relying_party_identifier: {
      value: cdktf.stringToHclTerraform(struct!.relyingPartyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_verification: {
      value: cdktf.stringToHclTerraform(struct!.userVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianWebauthnRoamingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianWebauthnRoaming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._overrideRelyingParty !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideRelyingParty = this._overrideRelyingParty;
    }
    if (this._relyingPartyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.relyingPartyIdentifier = this._relyingPartyIdentifier;
    }
    if (this._userVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.userVerification = this._userVerification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianWebauthnRoaming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._overrideRelyingParty = undefined;
      this._relyingPartyIdentifier = undefined;
      this._userVerification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._overrideRelyingParty = value.overrideRelyingParty;
      this._relyingPartyIdentifier = value.relyingPartyIdentifier;
      this._userVerification = value.userVerification;
    }
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

  // override_relying_party - computed: true, optional: true, required: false
  private _overrideRelyingParty?: boolean | cdktf.IResolvable; 
  public get overrideRelyingParty() {
    return this.getBooleanAttribute('override_relying_party');
  }
  public set overrideRelyingParty(value: boolean | cdktf.IResolvable) {
    this._overrideRelyingParty = value;
  }
  public resetOverrideRelyingParty() {
    this._overrideRelyingParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideRelyingPartyInput() {
    return this._overrideRelyingParty;
  }

  // relying_party_identifier - computed: true, optional: true, required: false
  private _relyingPartyIdentifier?: string; 
  public get relyingPartyIdentifier() {
    return this.getStringAttribute('relying_party_identifier');
  }
  public set relyingPartyIdentifier(value: string) {
    this._relyingPartyIdentifier = value;
  }
  public resetRelyingPartyIdentifier() {
    this._relyingPartyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingPartyIdentifierInput() {
    return this._relyingPartyIdentifier;
  }

  // user_verification - computed: true, optional: true, required: false
  private _userVerification?: string; 
  public get userVerification() {
    return this.getStringAttribute('user_verification');
  }
  public set userVerification(value: string) {
    this._userVerification = value;
  }
  public resetUserVerification() {
    this._userVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVerificationInput() {
    return this._userVerification;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian auth0_guardian}
*/
export class Guardian extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_guardian";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Guardian resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Guardian to import
  * @param importFromId The id of the existing Guardian that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Guardian to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_guardian", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/guardian auth0_guardian} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuardianConfig
  */
  public constructor(scope: Construct, id: string, config: GuardianConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_guardian',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._id = config.id;
    this._otp = config.otp;
    this._policy = config.policy;
    this._recoveryCode = config.recoveryCode;
    this._duo.internalValue = config.duo;
    this._phone.internalValue = config.phone;
    this._push.internalValue = config.push;
    this._webauthnPlatform.internalValue = config.webauthnPlatform;
    this._webauthnRoaming.internalValue = config.webauthnRoaming;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // otp - computed: false, optional: true, required: false
  private _otp?: boolean | cdktf.IResolvable; 
  public get otp() {
    return this.getBooleanAttribute('otp');
  }
  public set otp(value: boolean | cdktf.IResolvable) {
    this._otp = value;
  }
  public resetOtp() {
    this._otp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // recovery_code - computed: false, optional: true, required: false
  private _recoveryCode?: boolean | cdktf.IResolvable; 
  public get recoveryCode() {
    return this.getBooleanAttribute('recovery_code');
  }
  public set recoveryCode(value: boolean | cdktf.IResolvable) {
    this._recoveryCode = value;
  }
  public resetRecoveryCode() {
    this._recoveryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCodeInput() {
    return this._recoveryCode;
  }

  // duo - computed: false, optional: true, required: false
  private _duo = new GuardianDuoOutputReference(this, "duo");
  public get duo() {
    return this._duo;
  }
  public putDuo(value: GuardianDuo) {
    this._duo.internalValue = value;
  }
  public resetDuo() {
    this._duo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoInput() {
    return this._duo.internalValue;
  }

  // phone - computed: false, optional: true, required: false
  private _phone = new GuardianPhoneOutputReference(this, "phone");
  public get phone() {
    return this._phone;
  }
  public putPhone(value: GuardianPhone) {
    this._phone.internalValue = value;
  }
  public resetPhone() {
    this._phone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push = new GuardianPushOutputReference(this, "push");
  public get push() {
    return this._push;
  }
  public putPush(value: GuardianPush) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }

  // webauthn_platform - computed: false, optional: true, required: false
  private _webauthnPlatform = new GuardianWebauthnPlatformOutputReference(this, "webauthn_platform");
  public get webauthnPlatform() {
    return this._webauthnPlatform;
  }
  public putWebauthnPlatform(value: GuardianWebauthnPlatform) {
    this._webauthnPlatform.internalValue = value;
  }
  public resetWebauthnPlatform() {
    this._webauthnPlatform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webauthnPlatformInput() {
    return this._webauthnPlatform.internalValue;
  }

  // webauthn_roaming - computed: false, optional: true, required: false
  private _webauthnRoaming = new GuardianWebauthnRoamingOutputReference(this, "webauthn_roaming");
  public get webauthnRoaming() {
    return this._webauthnRoaming;
  }
  public putWebauthnRoaming(value: GuardianWebauthnRoaming) {
    this._webauthnRoaming.internalValue = value;
  }
  public resetWebauthnRoaming() {
    this._webauthnRoaming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webauthnRoamingInput() {
    return this._webauthnRoaming.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.booleanToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      otp: cdktf.booleanToTerraform(this._otp),
      policy: cdktf.stringToTerraform(this._policy),
      recovery_code: cdktf.booleanToTerraform(this._recoveryCode),
      duo: guardianDuoToTerraform(this._duo.internalValue),
      phone: guardianPhoneToTerraform(this._phone.internalValue),
      push: guardianPushToTerraform(this._push.internalValue),
      webauthn_platform: guardianWebauthnPlatformToTerraform(this._webauthnPlatform.internalValue),
      webauthn_roaming: guardianWebauthnRoamingToTerraform(this._webauthnRoaming.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.booleanToHclTerraform(this._email),
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
      otp: {
        value: cdktf.booleanToHclTerraform(this._otp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_code: {
        value: cdktf.booleanToHclTerraform(this._recoveryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      duo: {
        value: guardianDuoToHclTerraform(this._duo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuardianDuoList",
      },
      phone: {
        value: guardianPhoneToHclTerraform(this._phone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuardianPhoneList",
      },
      push: {
        value: guardianPushToHclTerraform(this._push.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuardianPushList",
      },
      webauthn_platform: {
        value: guardianWebauthnPlatformToHclTerraform(this._webauthnPlatform.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuardianWebauthnPlatformList",
      },
      webauthn_roaming: {
        value: guardianWebauthnRoamingToHclTerraform(this._webauthnRoaming.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuardianWebauthnRoamingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
