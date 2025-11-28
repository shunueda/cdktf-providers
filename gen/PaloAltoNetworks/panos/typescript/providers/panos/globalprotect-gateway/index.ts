// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalprotectGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Block login for quarantined devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#block_quarantined_devices GlobalprotectGateway#block_quarantined_devices}
  */
  readonly blockQuarantinedDevices?: boolean | cdktf.IResolvable;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#certificate_profile GlobalprotectGateway#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#client_auth GlobalprotectGateway#client_auth}
  */
  readonly clientAuth?: GlobalprotectGatewayClientAuth[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#hip_notification GlobalprotectGateway#hip_notification}
  */
  readonly hipNotification?: GlobalprotectGatewayHipNotification[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#local_address GlobalprotectGateway#local_address}
  */
  readonly localAddress?: GlobalprotectGatewayLocalAddress;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#location GlobalprotectGateway#location}
  */
  readonly location: GlobalprotectGatewayLocation;
  /**
  * Log unsuccessful TLS handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#log_fail GlobalprotectGateway#log_fail}
  */
  readonly logFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#log_setting GlobalprotectGateway#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Log successful TLS handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#log_success GlobalprotectGateway#log_success}
  */
  readonly logSuccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#name GlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * GlobalProtect user tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#remote_user_tunnel GlobalprotectGateway#remote_user_tunnel}
  */
  readonly remoteUserTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#remote_user_tunnel_configs GlobalprotectGateway#remote_user_tunnel_configs}
  */
  readonly remoteUserTunnelConfigs?: GlobalprotectGatewayRemoteUserTunnelConfigs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#roles GlobalprotectGateway#roles}
  */
  readonly roles?: GlobalprotectGatewayRoles[] | cdktf.IResolvable;
  /**
  * GlobalProtect satellite tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#satellite_tunnel GlobalprotectGateway#satellite_tunnel}
  */
  readonly satelliteTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#security_restrictions GlobalprotectGateway#security_restrictions}
  */
  readonly securityRestrictions?: GlobalprotectGatewaySecurityRestrictions;
  /**
  * SSL TLS service profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ssl_tls_service_profile GlobalprotectGateway#ssl_tls_service_profile}
  */
  readonly sslTlsServiceProfile?: string;
  /**
  * Tunnel mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#tunnel_mode GlobalprotectGateway#tunnel_mode}
  */
  readonly tunnelMode?: boolean | cdktf.IResolvable;
}
export interface GlobalprotectGatewayClientAuth {
  /**
  * Authentication Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#authentication_message GlobalprotectGateway#authentication_message}
  */
  readonly authenticationMessage?: string;
  /**
  * authentication profile used for this GlobalProtect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#authentication_profile GlobalprotectGateway#authentication_profile}
  */
  readonly authenticationProfile?: string;
  /**
  * Automatically retrieve passcode from SoftToken application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#auto_retrieve_passcode GlobalprotectGateway#auto_retrieve_passcode}
  */
  readonly autoRetrievePasscode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#name GlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * Client OS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#os GlobalprotectGateway#os}
  */
  readonly os?: string;
  /**
  * Password Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#password_label GlobalprotectGateway#password_label}
  */
  readonly passwordLabel?: string;
  /**
  * Allow Authentication with User Credentials OR Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#user_credential_or_client_cert_required GlobalprotectGateway#user_credential_or_client_cert_required}
  */
  readonly userCredentialOrClientCertRequired?: string;
  /**
  * Username Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#username_label GlobalprotectGateway#username_label}
  */
  readonly usernameLabel?: string;
}

export function globalprotectGatewayClientAuthToTerraform(struct?: GlobalprotectGatewayClientAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_message: cdktf.stringToTerraform(struct!.authenticationMessage),
    authentication_profile: cdktf.stringToTerraform(struct!.authenticationProfile),
    auto_retrieve_passcode: cdktf.booleanToTerraform(struct!.autoRetrievePasscode),
    name: cdktf.stringToTerraform(struct!.name),
    os: cdktf.stringToTerraform(struct!.os),
    password_label: cdktf.stringToTerraform(struct!.passwordLabel),
    user_credential_or_client_cert_required: cdktf.stringToTerraform(struct!.userCredentialOrClientCertRequired),
    username_label: cdktf.stringToTerraform(struct!.usernameLabel),
  }
}


export function globalprotectGatewayClientAuthToHclTerraform(struct?: GlobalprotectGatewayClientAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_message: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_profile: {
      value: cdktf.stringToHclTerraform(struct!.authenticationProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_retrieve_passcode: {
      value: cdktf.booleanToHclTerraform(struct!.autoRetrievePasscode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_label: {
      value: cdktf.stringToHclTerraform(struct!.passwordLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_credential_or_client_cert_required: {
      value: cdktf.stringToHclTerraform(struct!.userCredentialOrClientCertRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_label: {
      value: cdktf.stringToHclTerraform(struct!.usernameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayClientAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalprotectGatewayClientAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMessage = this._authenticationMessage;
    }
    if (this._authenticationProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationProfile = this._authenticationProfile;
    }
    if (this._autoRetrievePasscode !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRetrievePasscode = this._autoRetrievePasscode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._passwordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordLabel = this._passwordLabel;
    }
    if (this._userCredentialOrClientCertRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCredentialOrClientCertRequired = this._userCredentialOrClientCertRequired;
    }
    if (this._usernameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameLabel = this._usernameLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayClientAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationMessage = undefined;
      this._authenticationProfile = undefined;
      this._autoRetrievePasscode = undefined;
      this._name = undefined;
      this._os = undefined;
      this._passwordLabel = undefined;
      this._userCredentialOrClientCertRequired = undefined;
      this._usernameLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationMessage = value.authenticationMessage;
      this._authenticationProfile = value.authenticationProfile;
      this._autoRetrievePasscode = value.autoRetrievePasscode;
      this._name = value.name;
      this._os = value.os;
      this._passwordLabel = value.passwordLabel;
      this._userCredentialOrClientCertRequired = value.userCredentialOrClientCertRequired;
      this._usernameLabel = value.usernameLabel;
    }
  }

  // authentication_message - computed: true, optional: true, required: false
  private _authenticationMessage?: string; 
  public get authenticationMessage() {
    return this.getStringAttribute('authentication_message');
  }
  public set authenticationMessage(value: string) {
    this._authenticationMessage = value;
  }
  public resetAuthenticationMessage() {
    this._authenticationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMessageInput() {
    return this._authenticationMessage;
  }

  // authentication_profile - computed: false, optional: true, required: false
  private _authenticationProfile?: string; 
  public get authenticationProfile() {
    return this.getStringAttribute('authentication_profile');
  }
  public set authenticationProfile(value: string) {
    this._authenticationProfile = value;
  }
  public resetAuthenticationProfile() {
    this._authenticationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileInput() {
    return this._authenticationProfile;
  }

  // auto_retrieve_passcode - computed: false, optional: true, required: false
  private _autoRetrievePasscode?: boolean | cdktf.IResolvable; 
  public get autoRetrievePasscode() {
    return this.getBooleanAttribute('auto_retrieve_passcode');
  }
  public set autoRetrievePasscode(value: boolean | cdktf.IResolvable) {
    this._autoRetrievePasscode = value;
  }
  public resetAutoRetrievePasscode() {
    this._autoRetrievePasscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRetrievePasscodeInput() {
    return this._autoRetrievePasscode;
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

  // os - computed: true, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // password_label - computed: true, optional: true, required: false
  private _passwordLabel?: string; 
  public get passwordLabel() {
    return this.getStringAttribute('password_label');
  }
  public set passwordLabel(value: string) {
    this._passwordLabel = value;
  }
  public resetPasswordLabel() {
    this._passwordLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLabelInput() {
    return this._passwordLabel;
  }

  // user_credential_or_client_cert_required - computed: true, optional: true, required: false
  private _userCredentialOrClientCertRequired?: string; 
  public get userCredentialOrClientCertRequired() {
    return this.getStringAttribute('user_credential_or_client_cert_required');
  }
  public set userCredentialOrClientCertRequired(value: string) {
    this._userCredentialOrClientCertRequired = value;
  }
  public resetUserCredentialOrClientCertRequired() {
    this._userCredentialOrClientCertRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCredentialOrClientCertRequiredInput() {
    return this._userCredentialOrClientCertRequired;
  }

  // username_label - computed: true, optional: true, required: false
  private _usernameLabel?: string; 
  public get usernameLabel() {
    return this.getStringAttribute('username_label');
  }
  public set usernameLabel(value: string) {
    this._usernameLabel = value;
  }
  public resetUsernameLabel() {
    this._usernameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameLabelInput() {
    return this._usernameLabel;
  }
}

export class GlobalprotectGatewayClientAuthList extends cdktf.ComplexList {
  public internalValue? : GlobalprotectGatewayClientAuth[] | cdktf.IResolvable

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
  public get(index: number): GlobalprotectGatewayClientAuthOutputReference {
    return new GlobalprotectGatewayClientAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalprotectGatewayHipNotificationMatchMessage {
  /**
  * Whether include matched application list in message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#include_app_list GlobalprotectGateway#include_app_list}
  */
  readonly includeAppList?: boolean | cdktf.IResolvable;
  /**
  * Matched message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#message GlobalprotectGateway#message}
  */
  readonly message?: string;
  /**
  * Show notification as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#show_notification_as GlobalprotectGateway#show_notification_as}
  */
  readonly showNotificationAs?: string;
}

export function globalprotectGatewayHipNotificationMatchMessageToTerraform(struct?: GlobalprotectGatewayHipNotificationMatchMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_app_list: cdktf.booleanToTerraform(struct!.includeAppList),
    message: cdktf.stringToTerraform(struct!.message),
    show_notification_as: cdktf.stringToTerraform(struct!.showNotificationAs),
  }
}


export function globalprotectGatewayHipNotificationMatchMessageToHclTerraform(struct?: GlobalprotectGatewayHipNotificationMatchMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_app_list: {
      value: cdktf.booleanToHclTerraform(struct!.includeAppList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_notification_as: {
      value: cdktf.stringToHclTerraform(struct!.showNotificationAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayHipNotificationMatchMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayHipNotificationMatchMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAppList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAppList = this._includeAppList;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._showNotificationAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.showNotificationAs = this._showNotificationAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayHipNotificationMatchMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAppList = undefined;
      this._message = undefined;
      this._showNotificationAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAppList = value.includeAppList;
      this._message = value.message;
      this._showNotificationAs = value.showNotificationAs;
    }
  }

  // include_app_list - computed: false, optional: true, required: false
  private _includeAppList?: boolean | cdktf.IResolvable; 
  public get includeAppList() {
    return this.getBooleanAttribute('include_app_list');
  }
  public set includeAppList(value: boolean | cdktf.IResolvable) {
    this._includeAppList = value;
  }
  public resetIncludeAppList() {
    this._includeAppList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAppListInput() {
    return this._includeAppList;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // show_notification_as - computed: true, optional: true, required: false
  private _showNotificationAs?: string; 
  public get showNotificationAs() {
    return this.getStringAttribute('show_notification_as');
  }
  public set showNotificationAs(value: string) {
    this._showNotificationAs = value;
  }
  public resetShowNotificationAs() {
    this._showNotificationAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNotificationAsInput() {
    return this._showNotificationAs;
  }
}
export interface GlobalprotectGatewayHipNotificationNotMatchMessage {
  /**
  * Not matched message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#message GlobalprotectGateway#message}
  */
  readonly message?: string;
  /**
  * Show notification as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#show_notification_as GlobalprotectGateway#show_notification_as}
  */
  readonly showNotificationAs?: string;
}

export function globalprotectGatewayHipNotificationNotMatchMessageToTerraform(struct?: GlobalprotectGatewayHipNotificationNotMatchMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    show_notification_as: cdktf.stringToTerraform(struct!.showNotificationAs),
  }
}


export function globalprotectGatewayHipNotificationNotMatchMessageToHclTerraform(struct?: GlobalprotectGatewayHipNotificationNotMatchMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_notification_as: {
      value: cdktf.stringToHclTerraform(struct!.showNotificationAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayHipNotificationNotMatchMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayHipNotificationNotMatchMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._showNotificationAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.showNotificationAs = this._showNotificationAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayHipNotificationNotMatchMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._showNotificationAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._showNotificationAs = value.showNotificationAs;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // show_notification_as - computed: true, optional: true, required: false
  private _showNotificationAs?: string; 
  public get showNotificationAs() {
    return this.getStringAttribute('show_notification_as');
  }
  public set showNotificationAs(value: string) {
    this._showNotificationAs = value;
  }
  public resetShowNotificationAs() {
    this._showNotificationAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNotificationAsInput() {
    return this._showNotificationAs;
  }
}
export interface GlobalprotectGatewayHipNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#match_message GlobalprotectGateway#match_message}
  */
  readonly matchMessage?: GlobalprotectGatewayHipNotificationMatchMessage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#name GlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#not_match_message GlobalprotectGateway#not_match_message}
  */
  readonly notMatchMessage?: GlobalprotectGatewayHipNotificationNotMatchMessage;
}

export function globalprotectGatewayHipNotificationToTerraform(struct?: GlobalprotectGatewayHipNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_message: globalprotectGatewayHipNotificationMatchMessageToTerraform(struct!.matchMessage),
    name: cdktf.stringToTerraform(struct!.name),
    not_match_message: globalprotectGatewayHipNotificationNotMatchMessageToTerraform(struct!.notMatchMessage),
  }
}


export function globalprotectGatewayHipNotificationToHclTerraform(struct?: GlobalprotectGatewayHipNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_message: {
      value: globalprotectGatewayHipNotificationMatchMessageToHclTerraform(struct!.matchMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayHipNotificationMatchMessage",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_match_message: {
      value: globalprotectGatewayHipNotificationNotMatchMessageToHclTerraform(struct!.notMatchMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayHipNotificationNotMatchMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayHipNotificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalprotectGatewayHipNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchMessage = this._matchMessage?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notMatchMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notMatchMessage = this._notMatchMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayHipNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchMessage.internalValue = undefined;
      this._name = undefined;
      this._notMatchMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchMessage.internalValue = value.matchMessage;
      this._name = value.name;
      this._notMatchMessage.internalValue = value.notMatchMessage;
    }
  }

  // match_message - computed: false, optional: true, required: false
  private _matchMessage = new GlobalprotectGatewayHipNotificationMatchMessageOutputReference(this, "match_message");
  public get matchMessage() {
    return this._matchMessage;
  }
  public putMatchMessage(value: GlobalprotectGatewayHipNotificationMatchMessage) {
    this._matchMessage.internalValue = value;
  }
  public resetMatchMessage() {
    this._matchMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchMessageInput() {
    return this._matchMessage.internalValue;
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

  // not_match_message - computed: false, optional: true, required: false
  private _notMatchMessage = new GlobalprotectGatewayHipNotificationNotMatchMessageOutputReference(this, "not_match_message");
  public get notMatchMessage() {
    return this._notMatchMessage;
  }
  public putNotMatchMessage(value: GlobalprotectGatewayHipNotificationNotMatchMessage) {
    this._notMatchMessage.internalValue = value;
  }
  public resetNotMatchMessage() {
    this._notMatchMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notMatchMessageInput() {
    return this._notMatchMessage.internalValue;
  }
}

export class GlobalprotectGatewayHipNotificationList extends cdktf.ComplexList {
  public internalValue? : GlobalprotectGatewayHipNotification[] | cdktf.IResolvable

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
  public get(index: number): GlobalprotectGatewayHipNotificationOutputReference {
    return new GlobalprotectGatewayHipNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalprotectGatewayLocalAddressFloatingIp {
  /**
  * Floating IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ipv4 GlobalprotectGateway#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Floating IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ipv6 GlobalprotectGateway#ipv6}
  */
  readonly ipv6?: string;
}

export function globalprotectGatewayLocalAddressFloatingIpToTerraform(struct?: GlobalprotectGatewayLocalAddressFloatingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function globalprotectGatewayLocalAddressFloatingIpToHclTerraform(struct?: GlobalprotectGatewayLocalAddressFloatingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayLocalAddressFloatingIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayLocalAddressFloatingIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayLocalAddressFloatingIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface GlobalprotectGatewayLocalAddressIp {
  /**
  * IPv4 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ipv4 GlobalprotectGateway#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ipv6 GlobalprotectGateway#ipv6}
  */
  readonly ipv6?: string;
}

export function globalprotectGatewayLocalAddressIpToTerraform(struct?: GlobalprotectGatewayLocalAddressIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function globalprotectGatewayLocalAddressIpToHclTerraform(struct?: GlobalprotectGatewayLocalAddressIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayLocalAddressIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayLocalAddressIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayLocalAddressIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface GlobalprotectGatewayLocalAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#floating_ip GlobalprotectGateway#floating_ip}
  */
  readonly floatingIp?: GlobalprotectGatewayLocalAddressFloatingIp;
  /**
  * local gateway end-point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#interface GlobalprotectGateway#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ip GlobalprotectGateway#ip}
  */
  readonly ip?: GlobalprotectGatewayLocalAddressIp;
  /**
  * specify the family of the local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ip_address_family GlobalprotectGateway#ip_address_family}
  */
  readonly ipAddressFamily?: string;
}

export function globalprotectGatewayLocalAddressToTerraform(struct?: GlobalprotectGatewayLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: globalprotectGatewayLocalAddressFloatingIpToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: globalprotectGatewayLocalAddressIpToTerraform(struct!.ip),
    ip_address_family: cdktf.stringToTerraform(struct!.ipAddressFamily),
  }
}


export function globalprotectGatewayLocalAddressToHclTerraform(struct?: GlobalprotectGatewayLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: globalprotectGatewayLocalAddressFloatingIpToHclTerraform(struct!.floatingIp),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayLocalAddressFloatingIp",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: globalprotectGatewayLocalAddressIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayLocalAddressIp",
    },
    ip_address_family: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayLocalAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp?.internalValue;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipAddressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressFamily = this._ipAddressFamily;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayLocalAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp.internalValue = undefined;
      this._interface = undefined;
      this._ip.internalValue = undefined;
      this._ipAddressFamily = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp.internalValue = value.floatingIp;
      this._interface = value.interface;
      this._ip.internalValue = value.ip;
      this._ipAddressFamily = value.ipAddressFamily;
    }
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp = new GlobalprotectGatewayLocalAddressFloatingIpOutputReference(this, "floating_ip");
  public get floatingIp() {
    return this._floatingIp;
  }
  public putFloatingIp(value: GlobalprotectGatewayLocalAddressFloatingIp) {
    this._floatingIp.internalValue = value;
  }
  public resetFloatingIp() {
    this._floatingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new GlobalprotectGatewayLocalAddressIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: GlobalprotectGatewayLocalAddressIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ip_address_family - computed: true, optional: true, required: false
  private _ipAddressFamily?: string; 
  public get ipAddressFamily() {
    return this.getStringAttribute('ip_address_family');
  }
  public set ipAddressFamily(value: string) {
    this._ipAddressFamily = value;
  }
  public resetIpAddressFamily() {
    this._ipAddressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressFamilyInput() {
    return this._ipAddressFamily;
  }
}
export interface GlobalprotectGatewayLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#name GlobalprotectGateway#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ngfw_device GlobalprotectGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#panorama_device GlobalprotectGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function globalprotectGatewayLocationTemplateToTerraform(struct?: GlobalprotectGatewayLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function globalprotectGatewayLocationTemplateToHclTerraform(struct?: GlobalprotectGatewayLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface GlobalprotectGatewayLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#name GlobalprotectGateway#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ngfw_device GlobalprotectGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#panorama_device GlobalprotectGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function globalprotectGatewayLocationTemplateStackToTerraform(struct?: GlobalprotectGatewayLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function globalprotectGatewayLocationTemplateStackToHclTerraform(struct?: GlobalprotectGatewayLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface GlobalprotectGatewayLocationTemplateStackVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ngfw_device GlobalprotectGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#panorama_device GlobalprotectGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#template_stack GlobalprotectGateway#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#vsys GlobalprotectGateway#vsys}
  */
  readonly vsys?: string;
}

export function globalprotectGatewayLocationTemplateStackVsysToTerraform(struct?: GlobalprotectGatewayLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template_stack: cdktf.stringToTerraform(struct!.templateStack),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function globalprotectGatewayLocationTemplateStackVsysToHclTerraform(struct?: GlobalprotectGatewayLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_stack: {
      value: cdktf.stringToHclTerraform(struct!.templateStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayLocationTemplateStackVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._templateStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._templateStack = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._templateStack = value.templateStack;
      this._vsys = value.vsys;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // template_stack - computed: true, optional: true, required: false
  private _templateStack?: string; 
  public get templateStack() {
    return this.getStringAttribute('template_stack');
  }
  public set templateStack(value: string) {
    this._templateStack = value;
  }
  public resetTemplateStack() {
    this._templateStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface GlobalprotectGatewayLocationTemplateVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ngfw_device GlobalprotectGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#panorama_device GlobalprotectGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#template GlobalprotectGateway#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#vsys GlobalprotectGateway#vsys}
  */
  readonly vsys?: string;
}

export function globalprotectGatewayLocationTemplateVsysToTerraform(struct?: GlobalprotectGatewayLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template: cdktf.stringToTerraform(struct!.template),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function globalprotectGatewayLocationTemplateVsysToHclTerraform(struct?: GlobalprotectGatewayLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayLocationTemplateVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayLocationTemplateVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._template = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._template = value.template;
      this._vsys = value.vsys;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface GlobalprotectGatewayLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#name GlobalprotectGateway#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ngfw_device GlobalprotectGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function globalprotectGatewayLocationVsysToTerraform(struct?: GlobalprotectGatewayLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function globalprotectGatewayLocationVsysToHclTerraform(struct?: GlobalprotectGatewayLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayLocationVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayLocationVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface GlobalprotectGatewayLocation {
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#template GlobalprotectGateway#template}
  */
  readonly template?: GlobalprotectGatewayLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#template_stack GlobalprotectGateway#template_stack}
  */
  readonly templateStack?: GlobalprotectGatewayLocationTemplateStack;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#template_stack_vsys GlobalprotectGateway#template_stack_vsys}
  */
  readonly templateStackVsys?: GlobalprotectGatewayLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#template_vsys GlobalprotectGateway#template_vsys}
  */
  readonly templateVsys?: GlobalprotectGatewayLocationTemplateVsys;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#vsys GlobalprotectGateway#vsys}
  */
  readonly vsys?: GlobalprotectGatewayLocationVsys;
}

export function globalprotectGatewayLocationToTerraform(struct?: GlobalprotectGatewayLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: globalprotectGatewayLocationTemplateToTerraform(struct!.template),
    template_stack: globalprotectGatewayLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: globalprotectGatewayLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: globalprotectGatewayLocationTemplateVsysToTerraform(struct!.templateVsys),
    vsys: globalprotectGatewayLocationVsysToTerraform(struct!.vsys),
  }
}


export function globalprotectGatewayLocationToHclTerraform(struct?: GlobalprotectGatewayLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: globalprotectGatewayLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayLocationTemplate",
    },
    template_stack: {
      value: globalprotectGatewayLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayLocationTemplateStack",
    },
    template_stack_vsys: {
      value: globalprotectGatewayLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayLocationTemplateStackVsys",
    },
    template_vsys: {
      value: globalprotectGatewayLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayLocationTemplateVsys",
    },
    vsys: {
      value: globalprotectGatewayLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    if (this._templateStackVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStackVsys = this._templateStackVsys?.internalValue;
    }
    if (this._templateVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVsys = this._templateVsys?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._templateStackVsys.internalValue = undefined;
      this._templateVsys.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
      this._templateStackVsys.internalValue = value.templateStackVsys;
      this._templateVsys.internalValue = value.templateVsys;
      this._vsys.internalValue = value.vsys;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template = new GlobalprotectGatewayLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: GlobalprotectGatewayLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new GlobalprotectGatewayLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: GlobalprotectGatewayLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }

  // template_stack_vsys - computed: false, optional: true, required: false
  private _templateStackVsys = new GlobalprotectGatewayLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: GlobalprotectGatewayLocationTemplateStackVsys) {
    this._templateStackVsys.internalValue = value;
  }
  public resetTemplateStackVsys() {
    this._templateStackVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackVsysInput() {
    return this._templateStackVsys.internalValue;
  }

  // template_vsys - computed: false, optional: true, required: false
  private _templateVsys = new GlobalprotectGatewayLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: GlobalprotectGatewayLocationTemplateVsys) {
    this._templateVsys.internalValue = value;
  }
  public resetTemplateVsys() {
    this._templateVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVsysInput() {
    return this._templateVsys.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new GlobalprotectGatewayLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: GlobalprotectGatewayLocationVsys) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}
export interface GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime {
  /**
  * Cookie lifetime in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#lifetime_in_days GlobalprotectGateway#lifetime_in_days}
  */
  readonly lifetimeInDays?: number;
  /**
  * Cookie lifetime in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#lifetime_in_hours GlobalprotectGateway#lifetime_in_hours}
  */
  readonly lifetimeInHours?: number;
  /**
  * Cookie lifetime in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#lifetime_in_minutes GlobalprotectGateway#lifetime_in_minutes}
  */
  readonly lifetimeInMinutes?: number;
}

export function globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime_in_days: cdktf.numberToTerraform(struct!.lifetimeInDays),
    lifetime_in_hours: cdktf.numberToTerraform(struct!.lifetimeInHours),
    lifetime_in_minutes: cdktf.numberToTerraform(struct!.lifetimeInMinutes),
  }
}


export function globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToHclTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime_in_days: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifetime_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifetime_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetimeInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInDays = this._lifetimeInDays;
    }
    if (this._lifetimeInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInHours = this._lifetimeInHours;
    }
    if (this._lifetimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInMinutes = this._lifetimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetimeInDays = undefined;
      this._lifetimeInHours = undefined;
      this._lifetimeInMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetimeInDays = value.lifetimeInDays;
      this._lifetimeInHours = value.lifetimeInHours;
      this._lifetimeInMinutes = value.lifetimeInMinutes;
    }
  }

  // lifetime_in_days - computed: false, optional: true, required: false
  private _lifetimeInDays?: number; 
  public get lifetimeInDays() {
    return this.getNumberAttribute('lifetime_in_days');
  }
  public set lifetimeInDays(value: number) {
    this._lifetimeInDays = value;
  }
  public resetLifetimeInDays() {
    this._lifetimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInDaysInput() {
    return this._lifetimeInDays;
  }

  // lifetime_in_hours - computed: false, optional: true, required: false
  private _lifetimeInHours?: number; 
  public get lifetimeInHours() {
    return this.getNumberAttribute('lifetime_in_hours');
  }
  public set lifetimeInHours(value: number) {
    this._lifetimeInHours = value;
  }
  public resetLifetimeInHours() {
    this._lifetimeInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInHoursInput() {
    return this._lifetimeInHours;
  }

  // lifetime_in_minutes - computed: false, optional: true, required: false
  private _lifetimeInMinutes?: number; 
  public get lifetimeInMinutes() {
    return this.getNumberAttribute('lifetime_in_minutes');
  }
  public set lifetimeInMinutes(value: number) {
    this._lifetimeInMinutes = value;
  }
  public resetLifetimeInMinutes() {
    this._lifetimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInMinutesInput() {
    return this._lifetimeInMinutes;
  }
}
export interface GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#cookie_lifetime GlobalprotectGateway#cookie_lifetime}
  */
  readonly cookieLifetime?: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime;
}

export function globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieToTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_lifetime: globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToTerraform(struct!.cookieLifetime),
  }
}


export function globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieToHclTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_lifetime: {
      value: globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToHclTerraform(struct!.cookieLifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieLifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieLifetime = this._cookieLifetime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieLifetime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieLifetime.internalValue = value.cookieLifetime;
    }
  }

  // cookie_lifetime - computed: false, optional: true, required: false
  private _cookieLifetime = new GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeOutputReference(this, "cookie_lifetime");
  public get cookieLifetime() {
    return this._cookieLifetime;
  }
  public putCookieLifetime(value: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime) {
    this._cookieLifetime.internalValue = value;
  }
  public resetCookieLifetime() {
    this._cookieLifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieLifetimeInput() {
    return this._cookieLifetime.internalValue;
  }
}
export interface GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#accept_cookie GlobalprotectGateway#accept_cookie}
  */
  readonly acceptCookie?: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie;
  /**
  * Certificate to Encrypt/Decrypt Cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#cookie_encrypt_decrypt_cert GlobalprotectGateway#cookie_encrypt_decrypt_cert}
  */
  readonly cookieEncryptDecryptCert?: string;
  /**
  * Generate cookie for authentication override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#generate_cookie GlobalprotectGateway#generate_cookie}
  */
  readonly generateCookie?: boolean | cdktf.IResolvable;
}

export function globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideToTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_cookie: globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieToTerraform(struct!.acceptCookie),
    cookie_encrypt_decrypt_cert: cdktf.stringToTerraform(struct!.cookieEncryptDecryptCert),
    generate_cookie: cdktf.booleanToTerraform(struct!.generateCookie),
  }
}


export function globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideToHclTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_cookie: {
      value: globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieToHclTerraform(struct!.acceptCookie),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie",
    },
    cookie_encrypt_decrypt_cert: {
      value: cdktf.stringToHclTerraform(struct!.cookieEncryptDecryptCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.generateCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptCookie = this._acceptCookie?.internalValue;
    }
    if (this._cookieEncryptDecryptCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieEncryptDecryptCert = this._cookieEncryptDecryptCert;
    }
    if (this._generateCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateCookie = this._generateCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptCookie.internalValue = undefined;
      this._cookieEncryptDecryptCert = undefined;
      this._generateCookie = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptCookie.internalValue = value.acceptCookie;
      this._cookieEncryptDecryptCert = value.cookieEncryptDecryptCert;
      this._generateCookie = value.generateCookie;
    }
  }

  // accept_cookie - computed: false, optional: true, required: false
  private _acceptCookie = new GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieOutputReference(this, "accept_cookie");
  public get acceptCookie() {
    return this._acceptCookie;
  }
  public putAcceptCookie(value: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie) {
    this._acceptCookie.internalValue = value;
  }
  public resetAcceptCookie() {
    this._acceptCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptCookieInput() {
    return this._acceptCookie.internalValue;
  }

  // cookie_encrypt_decrypt_cert - computed: false, optional: true, required: false
  private _cookieEncryptDecryptCert?: string; 
  public get cookieEncryptDecryptCert() {
    return this.getStringAttribute('cookie_encrypt_decrypt_cert');
  }
  public set cookieEncryptDecryptCert(value: string) {
    this._cookieEncryptDecryptCert = value;
  }
  public resetCookieEncryptDecryptCert() {
    this._cookieEncryptDecryptCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieEncryptDecryptCertInput() {
    return this._cookieEncryptDecryptCert;
  }

  // generate_cookie - computed: false, optional: true, required: false
  private _generateCookie?: boolean | cdktf.IResolvable; 
  public get generateCookie() {
    return this.getBooleanAttribute('generate_cookie');
  }
  public set generateCookie(value: boolean | cdktf.IResolvable) {
    this._generateCookie = value;
  }
  public resetGenerateCookie() {
    this._generateCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateCookieInput() {
    return this._generateCookie;
  }
}
export interface GlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ip_address GlobalprotectGateway#ip_address}
  */
  readonly ipAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#region GlobalprotectGateway#region}
  */
  readonly region?: string[];
}

export function globalprotectGatewayRemoteUserTunnelConfigsSourceAddressToTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddress),
    region: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.region),
  }
}


export function globalprotectGatewayRemoteUserTunnelConfigsSourceAddressToHclTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.region),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsSourceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._region = value.region;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string[]; 
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }
  public set ipAddress(value: string[]) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string[]; 
  public get region() {
    return this.getListAttribute('region');
  }
  public set region(value: string[]) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#name GlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ports GlobalprotectGateway#ports}
  */
  readonly ports?: number[];
}

export function globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructToTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructToHclTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ports = value.ports;
    }
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

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructList extends cdktf.ComplexList {
  public internalValue? : GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct[] | cdktf.IResolvable

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
  public get(index: number): GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructOutputReference {
    return new GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#list GlobalprotectGateway#list}
  */
  readonly list?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct[] | cdktf.IResolvable;
}

export function globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsToTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructToTerraform, false)(struct!.list),
  }
}


export function globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsToHclTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructToHclTerraform, false)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._list.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._list.internalValue = value.list;
    }
  }

  // list - computed: false, optional: true, required: false
  private _list = new GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#name GlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ports GlobalprotectGateway#ports}
  */
  readonly ports?: number[];
}

export function globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructToTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructToHclTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ports = value.ports;
    }
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

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructList extends cdktf.ComplexList {
  public internalValue? : GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct[] | cdktf.IResolvable

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
  public get(index: number): GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructOutputReference {
    return new GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#list GlobalprotectGateway#list}
  */
  readonly list?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct[] | cdktf.IResolvable;
}

export function globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsToTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructToTerraform, false)(struct!.list),
  }
}


export function globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsToHclTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructToHclTerraform, false)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._list.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._list.internalValue = value.list;
    }
  }

  // list - computed: false, optional: true, required: false
  private _list = new GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#access_route GlobalprotectGateway#access_route}
  */
  readonly accessRoute?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#exclude_access_route GlobalprotectGateway#exclude_access_route}
  */
  readonly excludeAccessRoute?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#exclude_applications GlobalprotectGateway#exclude_applications}
  */
  readonly excludeApplications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#exclude_domains GlobalprotectGateway#exclude_domains}
  */
  readonly excludeDomains?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#include_applications GlobalprotectGateway#include_applications}
  */
  readonly includeApplications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#include_domains GlobalprotectGateway#include_domains}
  */
  readonly includeDomains?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains;
}

export function globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingToTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_route: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessRoute),
    exclude_access_route: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeAccessRoute),
    exclude_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeApplications),
    exclude_domains: globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsToTerraform(struct!.excludeDomains),
    include_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeApplications),
    include_domains: globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsToTerraform(struct!.includeDomains),
  }
}


export function globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingToHclTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_route: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessRoute),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_access_route: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeAccessRoute),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeApplications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_domains: {
      value: globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsToHclTerraform(struct!.excludeDomains),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains",
    },
    include_applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeApplications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_domains: {
      value: globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsToHclTerraform(struct!.includeDomains),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRoute = this._accessRoute;
    }
    if (this._excludeAccessRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAccessRoute = this._excludeAccessRoute;
    }
    if (this._excludeApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeApplications = this._excludeApplications;
    }
    if (this._excludeDomains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeDomains = this._excludeDomains?.internalValue;
    }
    if (this._includeApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeApplications = this._includeApplications;
    }
    if (this._includeDomains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDomains = this._includeDomains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessRoute = undefined;
      this._excludeAccessRoute = undefined;
      this._excludeApplications = undefined;
      this._excludeDomains.internalValue = undefined;
      this._includeApplications = undefined;
      this._includeDomains.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessRoute = value.accessRoute;
      this._excludeAccessRoute = value.excludeAccessRoute;
      this._excludeApplications = value.excludeApplications;
      this._excludeDomains.internalValue = value.excludeDomains;
      this._includeApplications = value.includeApplications;
      this._includeDomains.internalValue = value.includeDomains;
    }
  }

  // access_route - computed: false, optional: true, required: false
  private _accessRoute?: string[]; 
  public get accessRoute() {
    return this.getListAttribute('access_route');
  }
  public set accessRoute(value: string[]) {
    this._accessRoute = value;
  }
  public resetAccessRoute() {
    this._accessRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRouteInput() {
    return this._accessRoute;
  }

  // exclude_access_route - computed: false, optional: true, required: false
  private _excludeAccessRoute?: string[]; 
  public get excludeAccessRoute() {
    return this.getListAttribute('exclude_access_route');
  }
  public set excludeAccessRoute(value: string[]) {
    this._excludeAccessRoute = value;
  }
  public resetExcludeAccessRoute() {
    this._excludeAccessRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAccessRouteInput() {
    return this._excludeAccessRoute;
  }

  // exclude_applications - computed: false, optional: true, required: false
  private _excludeApplications?: string[]; 
  public get excludeApplications() {
    return this.getListAttribute('exclude_applications');
  }
  public set excludeApplications(value: string[]) {
    this._excludeApplications = value;
  }
  public resetExcludeApplications() {
    this._excludeApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeApplicationsInput() {
    return this._excludeApplications;
  }

  // exclude_domains - computed: false, optional: true, required: false
  private _excludeDomains = new GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsOutputReference(this, "exclude_domains");
  public get excludeDomains() {
    return this._excludeDomains;
  }
  public putExcludeDomains(value: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains) {
    this._excludeDomains.internalValue = value;
  }
  public resetExcludeDomains() {
    this._excludeDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDomainsInput() {
    return this._excludeDomains.internalValue;
  }

  // include_applications - computed: false, optional: true, required: false
  private _includeApplications?: string[]; 
  public get includeApplications() {
    return this.getListAttribute('include_applications');
  }
  public set includeApplications(value: string[]) {
    this._includeApplications = value;
  }
  public resetIncludeApplications() {
    this._includeApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeApplicationsInput() {
    return this._includeApplications;
  }

  // include_domains - computed: false, optional: true, required: false
  private _includeDomains = new GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsOutputReference(this, "include_domains");
  public get includeDomains() {
    return this._includeDomains;
  }
  public putIncludeDomains(value: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains) {
    this._includeDomains.internalValue = value;
  }
  public resetIncludeDomains() {
    this._includeDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDomainsInput() {
    return this._includeDomains.internalValue;
  }
}
export interface GlobalprotectGatewayRemoteUserTunnelConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#authentication_override GlobalprotectGateway#authentication_override}
  */
  readonly authenticationOverride?: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#authentication_server_ip_pool GlobalprotectGateway#authentication_server_ip_pool}
  */
  readonly authenticationServerIpPool?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#dns_server GlobalprotectGateway#dns_server}
  */
  readonly dnsServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#dns_suffix GlobalprotectGateway#dns_suffix}
  */
  readonly dnsSuffix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#ip_pool GlobalprotectGateway#ip_pool}
  */
  readonly ipPool?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#name GlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * No direct access to local network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#no_direct_access_to_local_network GlobalprotectGateway#no_direct_access_to_local_network}
  */
  readonly noDirectAccessToLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#os GlobalprotectGateway#os}
  */
  readonly os?: string[];
  /**
  * retrieve framed ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#retrieve_framed_ip_address GlobalprotectGateway#retrieve_framed_ip_address}
  */
  readonly retrieveFramedIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#source_address GlobalprotectGateway#source_address}
  */
  readonly sourceAddress?: GlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#source_user GlobalprotectGateway#source_user}
  */
  readonly sourceUser?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#split_tunneling GlobalprotectGateway#split_tunneling}
  */
  readonly splitTunneling?: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling;
}

export function globalprotectGatewayRemoteUserTunnelConfigsToTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_override: globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideToTerraform(struct!.authenticationOverride),
    authentication_server_ip_pool: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticationServerIpPool),
    dns_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServer),
    dns_suffix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSuffix),
    ip_pool: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPool),
    name: cdktf.stringToTerraform(struct!.name),
    no_direct_access_to_local_network: cdktf.booleanToTerraform(struct!.noDirectAccessToLocalNetwork),
    os: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.os),
    retrieve_framed_ip_address: cdktf.booleanToTerraform(struct!.retrieveFramedIpAddress),
    source_address: globalprotectGatewayRemoteUserTunnelConfigsSourceAddressToTerraform(struct!.sourceAddress),
    source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUser),
    split_tunneling: globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingToTerraform(struct!.splitTunneling),
  }
}


export function globalprotectGatewayRemoteUserTunnelConfigsToHclTerraform(struct?: GlobalprotectGatewayRemoteUserTunnelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_override: {
      value: globalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideToHclTerraform(struct!.authenticationOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride",
    },
    authentication_server_ip_pool: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authenticationServerIpPool),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_suffix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSuffix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_pool: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPool),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_direct_access_to_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.noDirectAccessToLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.os),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retrieve_framed_ip_address: {
      value: cdktf.booleanToHclTerraform(struct!.retrieveFramedIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_address: {
      value: globalprotectGatewayRemoteUserTunnelConfigsSourceAddressToHclTerraform(struct!.sourceAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress",
    },
    source_user: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUser),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    split_tunneling: {
      value: globalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingToHclTerraform(struct!.splitTunneling),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalprotectGatewayRemoteUserTunnelConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationOverride = this._authenticationOverride?.internalValue;
    }
    if (this._authenticationServerIpPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationServerIpPool = this._authenticationServerIpPool;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._dnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix;
    }
    if (this._ipPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPool = this._ipPool;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noDirectAccessToLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDirectAccessToLocalNetwork = this._noDirectAccessToLocalNetwork;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._retrieveFramedIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveFramedIpAddress = this._retrieveFramedIpAddress;
    }
    if (this._sourceAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress?.internalValue;
    }
    if (this._sourceUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUser = this._sourceUser;
    }
    if (this._splitTunneling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitTunneling = this._splitTunneling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRemoteUserTunnelConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationOverride.internalValue = undefined;
      this._authenticationServerIpPool = undefined;
      this._dnsServer = undefined;
      this._dnsSuffix = undefined;
      this._ipPool = undefined;
      this._name = undefined;
      this._noDirectAccessToLocalNetwork = undefined;
      this._os = undefined;
      this._retrieveFramedIpAddress = undefined;
      this._sourceAddress.internalValue = undefined;
      this._sourceUser = undefined;
      this._splitTunneling.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationOverride.internalValue = value.authenticationOverride;
      this._authenticationServerIpPool = value.authenticationServerIpPool;
      this._dnsServer = value.dnsServer;
      this._dnsSuffix = value.dnsSuffix;
      this._ipPool = value.ipPool;
      this._name = value.name;
      this._noDirectAccessToLocalNetwork = value.noDirectAccessToLocalNetwork;
      this._os = value.os;
      this._retrieveFramedIpAddress = value.retrieveFramedIpAddress;
      this._sourceAddress.internalValue = value.sourceAddress;
      this._sourceUser = value.sourceUser;
      this._splitTunneling.internalValue = value.splitTunneling;
    }
  }

  // authentication_override - computed: false, optional: true, required: false
  private _authenticationOverride = new GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideOutputReference(this, "authentication_override");
  public get authenticationOverride() {
    return this._authenticationOverride;
  }
  public putAuthenticationOverride(value: GlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride) {
    this._authenticationOverride.internalValue = value;
  }
  public resetAuthenticationOverride() {
    this._authenticationOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOverrideInput() {
    return this._authenticationOverride.internalValue;
  }

  // authentication_server_ip_pool - computed: false, optional: true, required: false
  private _authenticationServerIpPool?: string[]; 
  public get authenticationServerIpPool() {
    return this.getListAttribute('authentication_server_ip_pool');
  }
  public set authenticationServerIpPool(value: string[]) {
    this._authenticationServerIpPool = value;
  }
  public resetAuthenticationServerIpPool() {
    this._authenticationServerIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationServerIpPoolInput() {
    return this._authenticationServerIpPool;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string[]; 
  public get dnsServer() {
    return this.getListAttribute('dns_server');
  }
  public set dnsServer(value: string[]) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string[]; 
  public get dnsSuffix() {
    return this.getListAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string[]) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // ip_pool - computed: false, optional: true, required: false
  private _ipPool?: string[]; 
  public get ipPool() {
    return this.getListAttribute('ip_pool');
  }
  public set ipPool(value: string[]) {
    this._ipPool = value;
  }
  public resetIpPool() {
    this._ipPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolInput() {
    return this._ipPool;
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

  // no_direct_access_to_local_network - computed: false, optional: true, required: false
  private _noDirectAccessToLocalNetwork?: boolean | cdktf.IResolvable; 
  public get noDirectAccessToLocalNetwork() {
    return this.getBooleanAttribute('no_direct_access_to_local_network');
  }
  public set noDirectAccessToLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._noDirectAccessToLocalNetwork = value;
  }
  public resetNoDirectAccessToLocalNetwork() {
    this._noDirectAccessToLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDirectAccessToLocalNetworkInput() {
    return this._noDirectAccessToLocalNetwork;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string[]; 
  public get os() {
    return this.getListAttribute('os');
  }
  public set os(value: string[]) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // retrieve_framed_ip_address - computed: false, optional: true, required: false
  private _retrieveFramedIpAddress?: boolean | cdktf.IResolvable; 
  public get retrieveFramedIpAddress() {
    return this.getBooleanAttribute('retrieve_framed_ip_address');
  }
  public set retrieveFramedIpAddress(value: boolean | cdktf.IResolvable) {
    this._retrieveFramedIpAddress = value;
  }
  public resetRetrieveFramedIpAddress() {
    this._retrieveFramedIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveFramedIpAddressInput() {
    return this._retrieveFramedIpAddress;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress = new GlobalprotectGatewayRemoteUserTunnelConfigsSourceAddressOutputReference(this, "source_address");
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: GlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }

  // source_user - computed: false, optional: true, required: false
  private _sourceUser?: string[]; 
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }
  public set sourceUser(value: string[]) {
    this._sourceUser = value;
  }
  public resetSourceUser() {
    this._sourceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser;
  }

  // split_tunneling - computed: false, optional: true, required: false
  private _splitTunneling = new GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingOutputReference(this, "split_tunneling");
  public get splitTunneling() {
    return this._splitTunneling;
  }
  public putSplitTunneling(value: GlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling) {
    this._splitTunneling.internalValue = value;
  }
  public resetSplitTunneling() {
    this._splitTunneling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelingInput() {
    return this._splitTunneling.internalValue;
  }
}

export class GlobalprotectGatewayRemoteUserTunnelConfigsList extends cdktf.ComplexList {
  public internalValue? : GlobalprotectGatewayRemoteUserTunnelConfigs[] | cdktf.IResolvable

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
  public get(index: number): GlobalprotectGatewayRemoteUserTunnelConfigsOutputReference {
    return new GlobalprotectGatewayRemoteUserTunnelConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalprotectGatewayRolesLoginLifetime {
  /**
  * specify lifetime in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#days GlobalprotectGateway#days}
  */
  readonly days?: number;
  /**
  * specify lifetime in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#hours GlobalprotectGateway#hours}
  */
  readonly hours?: number;
  /**
  * specify lifetime in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#minutes GlobalprotectGateway#minutes}
  */
  readonly minutes?: number;
}

export function globalprotectGatewayRolesLoginLifetimeToTerraform(struct?: GlobalprotectGatewayRolesLoginLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function globalprotectGatewayRolesLoginLifetimeToHclTerraform(struct?: GlobalprotectGatewayRolesLoginLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRolesLoginLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewayRolesLoginLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRolesLoginLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface GlobalprotectGatewayRoles {
  /**
  * Notify users on admin logout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#admin_logout_notify GlobalprotectGateway#admin_logout_notify}
  */
  readonly adminLogoutNotify?: boolean | cdktf.IResolvable;
  /**
  * Admin logout notification displayed on GP app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#admin_logout_notify_message GlobalprotectGateway#admin_logout_notify_message}
  */
  readonly adminLogoutNotifyMessage?: string;
  /**
  * Logout the GlobalProtect user session if the GlobalProtect app has not sent traffic in the specified amount of minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#inactivity_logout GlobalprotectGateway#inactivity_logout}
  */
  readonly inactivityLogout?: number;
  /**
  * Inactivity logout notification displayed on GP app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#inactivity_notify_message GlobalprotectGateway#inactivity_notify_message}
  */
  readonly inactivityNotifyMessage?: string;
  /**
  * Notify users before the inactivity timeout in the specified amount of minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#inactivity_notify_prior GlobalprotectGateway#inactivity_notify_prior}
  */
  readonly inactivityNotifyPrior?: number;
  /**
  * Lifetime expiration notification displayed on GP app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#lifetime_notify_message GlobalprotectGateway#lifetime_notify_message}
  */
  readonly lifetimeNotifyMessage?: string;
  /**
  * Notify users before the lifetime expiration in the specified amount of minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#lifetime_notify_prior GlobalprotectGateway#lifetime_notify_prior}
  */
  readonly lifetimeNotifyPrior?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#login_lifetime GlobalprotectGateway#login_lifetime}
  */
  readonly loginLifetime?: GlobalprotectGatewayRolesLoginLifetime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#name GlobalprotectGateway#name}
  */
  readonly name: string;
}

export function globalprotectGatewayRolesToTerraform(struct?: GlobalprotectGatewayRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_logout_notify: cdktf.booleanToTerraform(struct!.adminLogoutNotify),
    admin_logout_notify_message: cdktf.stringToTerraform(struct!.adminLogoutNotifyMessage),
    inactivity_logout: cdktf.numberToTerraform(struct!.inactivityLogout),
    inactivity_notify_message: cdktf.stringToTerraform(struct!.inactivityNotifyMessage),
    inactivity_notify_prior: cdktf.numberToTerraform(struct!.inactivityNotifyPrior),
    lifetime_notify_message: cdktf.stringToTerraform(struct!.lifetimeNotifyMessage),
    lifetime_notify_prior: cdktf.numberToTerraform(struct!.lifetimeNotifyPrior),
    login_lifetime: globalprotectGatewayRolesLoginLifetimeToTerraform(struct!.loginLifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalprotectGatewayRolesToHclTerraform(struct?: GlobalprotectGatewayRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_logout_notify: {
      value: cdktf.booleanToHclTerraform(struct!.adminLogoutNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    admin_logout_notify_message: {
      value: cdktf.stringToHclTerraform(struct!.adminLogoutNotifyMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inactivity_logout: {
      value: cdktf.numberToHclTerraform(struct!.inactivityLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactivity_notify_message: {
      value: cdktf.stringToHclTerraform(struct!.inactivityNotifyMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inactivity_notify_prior: {
      value: cdktf.numberToHclTerraform(struct!.inactivityNotifyPrior),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifetime_notify_message: {
      value: cdktf.stringToHclTerraform(struct!.lifetimeNotifyMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime_notify_prior: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeNotifyPrior),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    login_lifetime: {
      value: globalprotectGatewayRolesLoginLifetimeToHclTerraform(struct!.loginLifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewayRolesLoginLifetime",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewayRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalprotectGatewayRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminLogoutNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminLogoutNotify = this._adminLogoutNotify;
    }
    if (this._adminLogoutNotifyMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminLogoutNotifyMessage = this._adminLogoutNotifyMessage;
    }
    if (this._inactivityLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityLogout = this._inactivityLogout;
    }
    if (this._inactivityNotifyMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityNotifyMessage = this._inactivityNotifyMessage;
    }
    if (this._inactivityNotifyPrior !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityNotifyPrior = this._inactivityNotifyPrior;
    }
    if (this._lifetimeNotifyMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeNotifyMessage = this._lifetimeNotifyMessage;
    }
    if (this._lifetimeNotifyPrior !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeNotifyPrior = this._lifetimeNotifyPrior;
    }
    if (this._loginLifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginLifetime = this._loginLifetime?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewayRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminLogoutNotify = undefined;
      this._adminLogoutNotifyMessage = undefined;
      this._inactivityLogout = undefined;
      this._inactivityNotifyMessage = undefined;
      this._inactivityNotifyPrior = undefined;
      this._lifetimeNotifyMessage = undefined;
      this._lifetimeNotifyPrior = undefined;
      this._loginLifetime.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminLogoutNotify = value.adminLogoutNotify;
      this._adminLogoutNotifyMessage = value.adminLogoutNotifyMessage;
      this._inactivityLogout = value.inactivityLogout;
      this._inactivityNotifyMessage = value.inactivityNotifyMessage;
      this._inactivityNotifyPrior = value.inactivityNotifyPrior;
      this._lifetimeNotifyMessage = value.lifetimeNotifyMessage;
      this._lifetimeNotifyPrior = value.lifetimeNotifyPrior;
      this._loginLifetime.internalValue = value.loginLifetime;
      this._name = value.name;
    }
  }

  // admin_logout_notify - computed: false, optional: true, required: false
  private _adminLogoutNotify?: boolean | cdktf.IResolvable; 
  public get adminLogoutNotify() {
    return this.getBooleanAttribute('admin_logout_notify');
  }
  public set adminLogoutNotify(value: boolean | cdktf.IResolvable) {
    this._adminLogoutNotify = value;
  }
  public resetAdminLogoutNotify() {
    this._adminLogoutNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLogoutNotifyInput() {
    return this._adminLogoutNotify;
  }

  // admin_logout_notify_message - computed: true, optional: true, required: false
  private _adminLogoutNotifyMessage?: string; 
  public get adminLogoutNotifyMessage() {
    return this.getStringAttribute('admin_logout_notify_message');
  }
  public set adminLogoutNotifyMessage(value: string) {
    this._adminLogoutNotifyMessage = value;
  }
  public resetAdminLogoutNotifyMessage() {
    this._adminLogoutNotifyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLogoutNotifyMessageInput() {
    return this._adminLogoutNotifyMessage;
  }

  // inactivity_logout - computed: true, optional: true, required: false
  private _inactivityLogout?: number; 
  public get inactivityLogout() {
    return this.getNumberAttribute('inactivity_logout');
  }
  public set inactivityLogout(value: number) {
    this._inactivityLogout = value;
  }
  public resetInactivityLogout() {
    this._inactivityLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityLogoutInput() {
    return this._inactivityLogout;
  }

  // inactivity_notify_message - computed: true, optional: true, required: false
  private _inactivityNotifyMessage?: string; 
  public get inactivityNotifyMessage() {
    return this.getStringAttribute('inactivity_notify_message');
  }
  public set inactivityNotifyMessage(value: string) {
    this._inactivityNotifyMessage = value;
  }
  public resetInactivityNotifyMessage() {
    this._inactivityNotifyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityNotifyMessageInput() {
    return this._inactivityNotifyMessage;
  }

  // inactivity_notify_prior - computed: true, optional: true, required: false
  private _inactivityNotifyPrior?: number; 
  public get inactivityNotifyPrior() {
    return this.getNumberAttribute('inactivity_notify_prior');
  }
  public set inactivityNotifyPrior(value: number) {
    this._inactivityNotifyPrior = value;
  }
  public resetInactivityNotifyPrior() {
    this._inactivityNotifyPrior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityNotifyPriorInput() {
    return this._inactivityNotifyPrior;
  }

  // lifetime_notify_message - computed: true, optional: true, required: false
  private _lifetimeNotifyMessage?: string; 
  public get lifetimeNotifyMessage() {
    return this.getStringAttribute('lifetime_notify_message');
  }
  public set lifetimeNotifyMessage(value: string) {
    this._lifetimeNotifyMessage = value;
  }
  public resetLifetimeNotifyMessage() {
    this._lifetimeNotifyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeNotifyMessageInput() {
    return this._lifetimeNotifyMessage;
  }

  // lifetime_notify_prior - computed: true, optional: true, required: false
  private _lifetimeNotifyPrior?: number; 
  public get lifetimeNotifyPrior() {
    return this.getNumberAttribute('lifetime_notify_prior');
  }
  public set lifetimeNotifyPrior(value: number) {
    this._lifetimeNotifyPrior = value;
  }
  public resetLifetimeNotifyPrior() {
    this._lifetimeNotifyPrior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeNotifyPriorInput() {
    return this._lifetimeNotifyPrior;
  }

  // login_lifetime - computed: false, optional: true, required: false
  private _loginLifetime = new GlobalprotectGatewayRolesLoginLifetimeOutputReference(this, "login_lifetime");
  public get loginLifetime() {
    return this._loginLifetime;
  }
  public putLoginLifetime(value: GlobalprotectGatewayRolesLoginLifetime) {
    this._loginLifetime.internalValue = value;
  }
  public resetLoginLifetime() {
    this._loginLifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginLifetimeInput() {
    return this._loginLifetime.internalValue;
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
}

export class GlobalprotectGatewayRolesList extends cdktf.ComplexList {
  public internalValue? : GlobalprotectGatewayRoles[] | cdktf.IResolvable

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
  public get(index: number): GlobalprotectGatewayRolesOutputReference {
    return new GlobalprotectGatewayRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom {
  /**
  * Source IPv4 Netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#source_ipv4_netmask GlobalprotectGateway#source_ipv4_netmask}
  */
  readonly sourceIpv4Netmask?: number;
  /**
  * Source IPv6 Netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#source_ipv6_netmask GlobalprotectGateway#source_ipv6_netmask}
  */
  readonly sourceIpv6Netmask?: number;
}

export function globalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomToTerraform(struct?: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ipv4_netmask: cdktf.numberToTerraform(struct!.sourceIpv4Netmask),
    source_ipv6_netmask: cdktf.numberToTerraform(struct!.sourceIpv6Netmask),
  }
}


export function globalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomToHclTerraform(struct?: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_ipv4_netmask: {
      value: cdktf.numberToHclTerraform(struct!.sourceIpv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ipv6_netmask: {
      value: cdktf.numberToHclTerraform(struct!.sourceIpv6Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIpv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpv4Netmask = this._sourceIpv4Netmask;
    }
    if (this._sourceIpv6Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpv6Netmask = this._sourceIpv6Netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceIpv4Netmask = undefined;
      this._sourceIpv6Netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceIpv4Netmask = value.sourceIpv4Netmask;
      this._sourceIpv6Netmask = value.sourceIpv6Netmask;
    }
  }

  // source_ipv4_netmask - computed: false, optional: true, required: false
  private _sourceIpv4Netmask?: number; 
  public get sourceIpv4Netmask() {
    return this.getNumberAttribute('source_ipv4_netmask');
  }
  public set sourceIpv4Netmask(value: number) {
    this._sourceIpv4Netmask = value;
  }
  public resetSourceIpv4Netmask() {
    this._sourceIpv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpv4NetmaskInput() {
    return this._sourceIpv4Netmask;
  }

  // source_ipv6_netmask - computed: false, optional: true, required: false
  private _sourceIpv6Netmask?: number; 
  public get sourceIpv6Netmask() {
    return this.getNumberAttribute('source_ipv6_netmask');
  }
  public set sourceIpv6Netmask(value: number) {
    this._sourceIpv6Netmask = value;
  }
  public resetSourceIpv6Netmask() {
    this._sourceIpv6Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpv6NetmaskInput() {
    return this._sourceIpv6Netmask;
  }
}
export interface GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault {
}

export function globalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultToTerraform(struct?: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function globalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultToHclTerraform(struct?: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#custom GlobalprotectGateway#custom}
  */
  readonly custom?: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#default GlobalprotectGateway#default}
  */
  readonly default?: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault;
  /**
  * Allow Authentication Cookie Usage Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#enable GlobalprotectGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function globalprotectGatewaySecurityRestrictionsSourceIpEnforcementToTerraform(struct?: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: globalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomToTerraform(struct!.custom),
    default: globalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultToTerraform(struct!.default),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function globalprotectGatewaySecurityRestrictionsSourceIpEnforcementToHclTerraform(struct?: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: globalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom",
    },
    default: {
      value: globalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom.internalValue = undefined;
      this._default.internalValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom.internalValue = value.custom;
      this._default.internalValue = value.default;
      this._enable = value.enable;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default = new GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface GlobalprotectGatewaySecurityRestrictions {
  /**
  * Disallow Automatic Restoration of SSL VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#disallow_automatic_restoration GlobalprotectGateway#disallow_automatic_restoration}
  */
  readonly disallowAutomaticRestoration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#source_ip_enforcement GlobalprotectGateway#source_ip_enforcement}
  */
  readonly sourceIpEnforcement?: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement;
}

export function globalprotectGatewaySecurityRestrictionsToTerraform(struct?: GlobalprotectGatewaySecurityRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disallow_automatic_restoration: cdktf.booleanToTerraform(struct!.disallowAutomaticRestoration),
    source_ip_enforcement: globalprotectGatewaySecurityRestrictionsSourceIpEnforcementToTerraform(struct!.sourceIpEnforcement),
  }
}


export function globalprotectGatewaySecurityRestrictionsToHclTerraform(struct?: GlobalprotectGatewaySecurityRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disallow_automatic_restoration: {
      value: cdktf.booleanToHclTerraform(struct!.disallowAutomaticRestoration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_ip_enforcement: {
      value: globalprotectGatewaySecurityRestrictionsSourceIpEnforcementToHclTerraform(struct!.sourceIpEnforcement),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalprotectGatewaySecurityRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalprotectGatewaySecurityRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disallowAutomaticRestoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowAutomaticRestoration = this._disallowAutomaticRestoration;
    }
    if (this._sourceIpEnforcement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpEnforcement = this._sourceIpEnforcement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalprotectGatewaySecurityRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disallowAutomaticRestoration = undefined;
      this._sourceIpEnforcement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disallowAutomaticRestoration = value.disallowAutomaticRestoration;
      this._sourceIpEnforcement.internalValue = value.sourceIpEnforcement;
    }
  }

  // disallow_automatic_restoration - computed: false, optional: true, required: false
  private _disallowAutomaticRestoration?: boolean | cdktf.IResolvable; 
  public get disallowAutomaticRestoration() {
    return this.getBooleanAttribute('disallow_automatic_restoration');
  }
  public set disallowAutomaticRestoration(value: boolean | cdktf.IResolvable) {
    this._disallowAutomaticRestoration = value;
  }
  public resetDisallowAutomaticRestoration() {
    this._disallowAutomaticRestoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowAutomaticRestorationInput() {
    return this._disallowAutomaticRestoration;
  }

  // source_ip_enforcement - computed: false, optional: true, required: false
  private _sourceIpEnforcement = new GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementOutputReference(this, "source_ip_enforcement");
  public get sourceIpEnforcement() {
    return this._sourceIpEnforcement;
  }
  public putSourceIpEnforcement(value: GlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement) {
    this._sourceIpEnforcement.internalValue = value;
  }
  public resetSourceIpEnforcement() {
    this._sourceIpEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpEnforcementInput() {
    return this._sourceIpEnforcement.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway panos_globalprotect_gateway}
*/
export class GlobalprotectGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_globalprotect_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalprotectGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalprotectGateway to import
  * @param importFromId The id of the existing GlobalprotectGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalprotectGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_globalprotect_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/globalprotect_gateway panos_globalprotect_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalprotectGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalprotectGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_globalprotect_gateway',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockQuarantinedDevices = config.blockQuarantinedDevices;
    this._certificateProfile = config.certificateProfile;
    this._clientAuth.internalValue = config.clientAuth;
    this._hipNotification.internalValue = config.hipNotification;
    this._localAddress.internalValue = config.localAddress;
    this._location.internalValue = config.location;
    this._logFail = config.logFail;
    this._logSetting = config.logSetting;
    this._logSuccess = config.logSuccess;
    this._name = config.name;
    this._remoteUserTunnel = config.remoteUserTunnel;
    this._remoteUserTunnelConfigs.internalValue = config.remoteUserTunnelConfigs;
    this._roles.internalValue = config.roles;
    this._satelliteTunnel = config.satelliteTunnel;
    this._securityRestrictions.internalValue = config.securityRestrictions;
    this._sslTlsServiceProfile = config.sslTlsServiceProfile;
    this._tunnelMode = config.tunnelMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_quarantined_devices - computed: false, optional: true, required: false
  private _blockQuarantinedDevices?: boolean | cdktf.IResolvable; 
  public get blockQuarantinedDevices() {
    return this.getBooleanAttribute('block_quarantined_devices');
  }
  public set blockQuarantinedDevices(value: boolean | cdktf.IResolvable) {
    this._blockQuarantinedDevices = value;
  }
  public resetBlockQuarantinedDevices() {
    this._blockQuarantinedDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockQuarantinedDevicesInput() {
    return this._blockQuarantinedDevices;
  }

  // certificate_profile - computed: false, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth = new GlobalprotectGatewayClientAuthList(this, "client_auth", false);
  public get clientAuth() {
    return this._clientAuth;
  }
  public putClientAuth(value: GlobalprotectGatewayClientAuth[] | cdktf.IResolvable) {
    this._clientAuth.internalValue = value;
  }
  public resetClientAuth() {
    this._clientAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth.internalValue;
  }

  // hip_notification - computed: false, optional: true, required: false
  private _hipNotification = new GlobalprotectGatewayHipNotificationList(this, "hip_notification", false);
  public get hipNotification() {
    return this._hipNotification;
  }
  public putHipNotification(value: GlobalprotectGatewayHipNotification[] | cdktf.IResolvable) {
    this._hipNotification.internalValue = value;
  }
  public resetHipNotification() {
    this._hipNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipNotificationInput() {
    return this._hipNotification.internalValue;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress = new GlobalprotectGatewayLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: GlobalprotectGatewayLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new GlobalprotectGatewayLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: GlobalprotectGatewayLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // log_fail - computed: false, optional: true, required: false
  private _logFail?: boolean | cdktf.IResolvable; 
  public get logFail() {
    return this.getBooleanAttribute('log_fail');
  }
  public set logFail(value: boolean | cdktf.IResolvable) {
    this._logFail = value;
  }
  public resetLogFail() {
    this._logFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFailInput() {
    return this._logFail;
  }

  // log_setting - computed: false, optional: true, required: false
  private _logSetting?: string; 
  public get logSetting() {
    return this.getStringAttribute('log_setting');
  }
  public set logSetting(value: string) {
    this._logSetting = value;
  }
  public resetLogSetting() {
    this._logSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingInput() {
    return this._logSetting;
  }

  // log_success - computed: false, optional: true, required: false
  private _logSuccess?: boolean | cdktf.IResolvable; 
  public get logSuccess() {
    return this.getBooleanAttribute('log_success');
  }
  public set logSuccess(value: boolean | cdktf.IResolvable) {
    this._logSuccess = value;
  }
  public resetLogSuccess() {
    this._logSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSuccessInput() {
    return this._logSuccess;
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

  // remote_user_tunnel - computed: false, optional: true, required: false
  private _remoteUserTunnel?: string; 
  public get remoteUserTunnel() {
    return this.getStringAttribute('remote_user_tunnel');
  }
  public set remoteUserTunnel(value: string) {
    this._remoteUserTunnel = value;
  }
  public resetRemoteUserTunnel() {
    this._remoteUserTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUserTunnelInput() {
    return this._remoteUserTunnel;
  }

  // remote_user_tunnel_configs - computed: false, optional: true, required: false
  private _remoteUserTunnelConfigs = new GlobalprotectGatewayRemoteUserTunnelConfigsList(this, "remote_user_tunnel_configs", false);
  public get remoteUserTunnelConfigs() {
    return this._remoteUserTunnelConfigs;
  }
  public putRemoteUserTunnelConfigs(value: GlobalprotectGatewayRemoteUserTunnelConfigs[] | cdktf.IResolvable) {
    this._remoteUserTunnelConfigs.internalValue = value;
  }
  public resetRemoteUserTunnelConfigs() {
    this._remoteUserTunnelConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUserTunnelConfigsInput() {
    return this._remoteUserTunnelConfigs.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new GlobalprotectGatewayRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: GlobalprotectGatewayRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // satellite_tunnel - computed: false, optional: true, required: false
  private _satelliteTunnel?: string; 
  public get satelliteTunnel() {
    return this.getStringAttribute('satellite_tunnel');
  }
  public set satelliteTunnel(value: string) {
    this._satelliteTunnel = value;
  }
  public resetSatelliteTunnel() {
    this._satelliteTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satelliteTunnelInput() {
    return this._satelliteTunnel;
  }

  // security_restrictions - computed: false, optional: true, required: false
  private _securityRestrictions = new GlobalprotectGatewaySecurityRestrictionsOutputReference(this, "security_restrictions");
  public get securityRestrictions() {
    return this._securityRestrictions;
  }
  public putSecurityRestrictions(value: GlobalprotectGatewaySecurityRestrictions) {
    this._securityRestrictions.internalValue = value;
  }
  public resetSecurityRestrictions() {
    this._securityRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRestrictionsInput() {
    return this._securityRestrictions.internalValue;
  }

  // ssl_tls_service_profile - computed: false, optional: true, required: false
  private _sslTlsServiceProfile?: string; 
  public get sslTlsServiceProfile() {
    return this.getStringAttribute('ssl_tls_service_profile');
  }
  public set sslTlsServiceProfile(value: string) {
    this._sslTlsServiceProfile = value;
  }
  public resetSslTlsServiceProfile() {
    this._sslTlsServiceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTlsServiceProfileInput() {
    return this._sslTlsServiceProfile;
  }

  // tunnel_mode - computed: false, optional: true, required: false
  private _tunnelMode?: boolean | cdktf.IResolvable; 
  public get tunnelMode() {
    return this.getBooleanAttribute('tunnel_mode');
  }
  public set tunnelMode(value: boolean | cdktf.IResolvable) {
    this._tunnelMode = value;
  }
  public resetTunnelMode() {
    this._tunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelModeInput() {
    return this._tunnelMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_quarantined_devices: cdktf.booleanToTerraform(this._blockQuarantinedDevices),
      certificate_profile: cdktf.stringToTerraform(this._certificateProfile),
      client_auth: cdktf.listMapper(globalprotectGatewayClientAuthToTerraform, false)(this._clientAuth.internalValue),
      hip_notification: cdktf.listMapper(globalprotectGatewayHipNotificationToTerraform, false)(this._hipNotification.internalValue),
      local_address: globalprotectGatewayLocalAddressToTerraform(this._localAddress.internalValue),
      location: globalprotectGatewayLocationToTerraform(this._location.internalValue),
      log_fail: cdktf.booleanToTerraform(this._logFail),
      log_setting: cdktf.stringToTerraform(this._logSetting),
      log_success: cdktf.booleanToTerraform(this._logSuccess),
      name: cdktf.stringToTerraform(this._name),
      remote_user_tunnel: cdktf.stringToTerraform(this._remoteUserTunnel),
      remote_user_tunnel_configs: cdktf.listMapper(globalprotectGatewayRemoteUserTunnelConfigsToTerraform, false)(this._remoteUserTunnelConfigs.internalValue),
      roles: cdktf.listMapper(globalprotectGatewayRolesToTerraform, false)(this._roles.internalValue),
      satellite_tunnel: cdktf.stringToTerraform(this._satelliteTunnel),
      security_restrictions: globalprotectGatewaySecurityRestrictionsToTerraform(this._securityRestrictions.internalValue),
      ssl_tls_service_profile: cdktf.stringToTerraform(this._sslTlsServiceProfile),
      tunnel_mode: cdktf.booleanToTerraform(this._tunnelMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_quarantined_devices: {
        value: cdktf.booleanToHclTerraform(this._blockQuarantinedDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_profile: {
        value: cdktf.stringToHclTerraform(this._certificateProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth: {
        value: cdktf.listMapperHcl(globalprotectGatewayClientAuthToHclTerraform, false)(this._clientAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalprotectGatewayClientAuthList",
      },
      hip_notification: {
        value: cdktf.listMapperHcl(globalprotectGatewayHipNotificationToHclTerraform, false)(this._hipNotification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalprotectGatewayHipNotificationList",
      },
      local_address: {
        value: globalprotectGatewayLocalAddressToHclTerraform(this._localAddress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalprotectGatewayLocalAddress",
      },
      location: {
        value: globalprotectGatewayLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalprotectGatewayLocation",
      },
      log_fail: {
        value: cdktf.booleanToHclTerraform(this._logFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_setting: {
        value: cdktf.stringToHclTerraform(this._logSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_success: {
        value: cdktf.booleanToHclTerraform(this._logSuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_user_tunnel: {
        value: cdktf.stringToHclTerraform(this._remoteUserTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_user_tunnel_configs: {
        value: cdktf.listMapperHcl(globalprotectGatewayRemoteUserTunnelConfigsToHclTerraform, false)(this._remoteUserTunnelConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalprotectGatewayRemoteUserTunnelConfigsList",
      },
      roles: {
        value: cdktf.listMapperHcl(globalprotectGatewayRolesToHclTerraform, false)(this._roles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalprotectGatewayRolesList",
      },
      satellite_tunnel: {
        value: cdktf.stringToHclTerraform(this._satelliteTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_restrictions: {
        value: globalprotectGatewaySecurityRestrictionsToHclTerraform(this._securityRestrictions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalprotectGatewaySecurityRestrictions",
      },
      ssl_tls_service_profile: {
        value: cdktf.stringToHclTerraform(this._sslTlsServiceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_mode: {
        value: cdktf.booleanToHclTerraform(this._tunnelMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
