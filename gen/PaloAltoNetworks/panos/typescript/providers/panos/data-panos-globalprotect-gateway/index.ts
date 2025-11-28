// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosGlobalprotectGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Block login for quarantined devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#block_quarantined_devices DataPanosGlobalprotectGateway#block_quarantined_devices}
  */
  readonly blockQuarantinedDevices?: boolean | cdktf.IResolvable;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#certificate_profile DataPanosGlobalprotectGateway#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#client_auth DataPanosGlobalprotectGateway#client_auth}
  */
  readonly clientAuth?: DataPanosGlobalprotectGatewayClientAuth[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#hip_notification DataPanosGlobalprotectGateway#hip_notification}
  */
  readonly hipNotification?: DataPanosGlobalprotectGatewayHipNotification[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#local_address DataPanosGlobalprotectGateway#local_address}
  */
  readonly localAddress?: DataPanosGlobalprotectGatewayLocalAddress;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#location DataPanosGlobalprotectGateway#location}
  */
  readonly location: DataPanosGlobalprotectGatewayLocation;
  /**
  * Log unsuccessful TLS handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#log_fail DataPanosGlobalprotectGateway#log_fail}
  */
  readonly logFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#log_setting DataPanosGlobalprotectGateway#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Log successful TLS handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#log_success DataPanosGlobalprotectGateway#log_success}
  */
  readonly logSuccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#name DataPanosGlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * GlobalProtect user tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#remote_user_tunnel DataPanosGlobalprotectGateway#remote_user_tunnel}
  */
  readonly remoteUserTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#remote_user_tunnel_configs DataPanosGlobalprotectGateway#remote_user_tunnel_configs}
  */
  readonly remoteUserTunnelConfigs?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#roles DataPanosGlobalprotectGateway#roles}
  */
  readonly roles?: DataPanosGlobalprotectGatewayRoles[] | cdktf.IResolvable;
  /**
  * GlobalProtect satellite tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#satellite_tunnel DataPanosGlobalprotectGateway#satellite_tunnel}
  */
  readonly satelliteTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#security_restrictions DataPanosGlobalprotectGateway#security_restrictions}
  */
  readonly securityRestrictions?: DataPanosGlobalprotectGatewaySecurityRestrictions;
  /**
  * SSL TLS service profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ssl_tls_service_profile DataPanosGlobalprotectGateway#ssl_tls_service_profile}
  */
  readonly sslTlsServiceProfile?: string;
  /**
  * Tunnel mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#tunnel_mode DataPanosGlobalprotectGateway#tunnel_mode}
  */
  readonly tunnelMode?: boolean | cdktf.IResolvable;
}
export interface DataPanosGlobalprotectGatewayClientAuth {
  /**
  * Authentication Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#authentication_message DataPanosGlobalprotectGateway#authentication_message}
  */
  readonly authenticationMessage?: string;
  /**
  * authentication profile used for this GlobalProtect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#authentication_profile DataPanosGlobalprotectGateway#authentication_profile}
  */
  readonly authenticationProfile?: string;
  /**
  * Automatically retrieve passcode from SoftToken application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#auto_retrieve_passcode DataPanosGlobalprotectGateway#auto_retrieve_passcode}
  */
  readonly autoRetrievePasscode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#name DataPanosGlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * Client OS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#os DataPanosGlobalprotectGateway#os}
  */
  readonly os?: string;
  /**
  * Password Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#password_label DataPanosGlobalprotectGateway#password_label}
  */
  readonly passwordLabel?: string;
  /**
  * Allow Authentication with User Credentials OR Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#user_credential_or_client_cert_required DataPanosGlobalprotectGateway#user_credential_or_client_cert_required}
  */
  readonly userCredentialOrClientCertRequired?: string;
  /**
  * Username Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#username_label DataPanosGlobalprotectGateway#username_label}
  */
  readonly usernameLabel?: string;
}

export function dataPanosGlobalprotectGatewayClientAuthToTerraform(struct?: DataPanosGlobalprotectGatewayClientAuth | cdktf.IResolvable): any {
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


export function dataPanosGlobalprotectGatewayClientAuthToHclTerraform(struct?: DataPanosGlobalprotectGatewayClientAuth | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayClientAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectGatewayClientAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayClientAuth | cdktf.IResolvable | undefined) {
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

  // authentication_profile - computed: true, optional: true, required: false
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

  // auto_retrieve_passcode - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosGlobalprotectGatewayClientAuthList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectGatewayClientAuth[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectGatewayClientAuthOutputReference {
    return new DataPanosGlobalprotectGatewayClientAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectGatewayHipNotificationMatchMessage {
  /**
  * Whether include matched application list in message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#include_app_list DataPanosGlobalprotectGateway#include_app_list}
  */
  readonly includeAppList?: boolean | cdktf.IResolvable;
  /**
  * Matched message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#message DataPanosGlobalprotectGateway#message}
  */
  readonly message?: string;
  /**
  * Show notification as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#show_notification_as DataPanosGlobalprotectGateway#show_notification_as}
  */
  readonly showNotificationAs?: string;
}

export function dataPanosGlobalprotectGatewayHipNotificationMatchMessageToTerraform(struct?: DataPanosGlobalprotectGatewayHipNotificationMatchMessage | cdktf.IResolvable): any {
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


export function dataPanosGlobalprotectGatewayHipNotificationMatchMessageToHclTerraform(struct?: DataPanosGlobalprotectGatewayHipNotificationMatchMessage | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayHipNotificationMatchMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayHipNotificationMatchMessage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayHipNotificationMatchMessage | cdktf.IResolvable | undefined) {
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

  // include_app_list - computed: true, optional: true, required: false
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

  // message - computed: true, optional: true, required: false
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
export interface DataPanosGlobalprotectGatewayHipNotificationNotMatchMessage {
  /**
  * Not matched message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#message DataPanosGlobalprotectGateway#message}
  */
  readonly message?: string;
  /**
  * Show notification as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#show_notification_as DataPanosGlobalprotectGateway#show_notification_as}
  */
  readonly showNotificationAs?: string;
}

export function dataPanosGlobalprotectGatewayHipNotificationNotMatchMessageToTerraform(struct?: DataPanosGlobalprotectGatewayHipNotificationNotMatchMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    show_notification_as: cdktf.stringToTerraform(struct!.showNotificationAs),
  }
}


export function dataPanosGlobalprotectGatewayHipNotificationNotMatchMessageToHclTerraform(struct?: DataPanosGlobalprotectGatewayHipNotificationNotMatchMessage | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayHipNotificationNotMatchMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayHipNotificationNotMatchMessage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayHipNotificationNotMatchMessage | cdktf.IResolvable | undefined) {
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

  // message - computed: true, optional: true, required: false
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
export interface DataPanosGlobalprotectGatewayHipNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#match_message DataPanosGlobalprotectGateway#match_message}
  */
  readonly matchMessage?: DataPanosGlobalprotectGatewayHipNotificationMatchMessage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#name DataPanosGlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#not_match_message DataPanosGlobalprotectGateway#not_match_message}
  */
  readonly notMatchMessage?: DataPanosGlobalprotectGatewayHipNotificationNotMatchMessage;
}

export function dataPanosGlobalprotectGatewayHipNotificationToTerraform(struct?: DataPanosGlobalprotectGatewayHipNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_message: dataPanosGlobalprotectGatewayHipNotificationMatchMessageToTerraform(struct!.matchMessage),
    name: cdktf.stringToTerraform(struct!.name),
    not_match_message: dataPanosGlobalprotectGatewayHipNotificationNotMatchMessageToTerraform(struct!.notMatchMessage),
  }
}


export function dataPanosGlobalprotectGatewayHipNotificationToHclTerraform(struct?: DataPanosGlobalprotectGatewayHipNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_message: {
      value: dataPanosGlobalprotectGatewayHipNotificationMatchMessageToHclTerraform(struct!.matchMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayHipNotificationMatchMessage",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_match_message: {
      value: dataPanosGlobalprotectGatewayHipNotificationNotMatchMessageToHclTerraform(struct!.notMatchMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayHipNotificationNotMatchMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectGatewayHipNotificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectGatewayHipNotification | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayHipNotification | cdktf.IResolvable | undefined) {
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

  // match_message - computed: true, optional: true, required: false
  private _matchMessage = new DataPanosGlobalprotectGatewayHipNotificationMatchMessageOutputReference(this, "match_message");
  public get matchMessage() {
    return this._matchMessage;
  }
  public putMatchMessage(value: DataPanosGlobalprotectGatewayHipNotificationMatchMessage) {
    this._matchMessage.internalValue = value;
  }
  public resetMatchMessage() {
    this._matchMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchMessageInput() {
    return this._matchMessage.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // not_match_message - computed: true, optional: true, required: false
  private _notMatchMessage = new DataPanosGlobalprotectGatewayHipNotificationNotMatchMessageOutputReference(this, "not_match_message");
  public get notMatchMessage() {
    return this._notMatchMessage;
  }
  public putNotMatchMessage(value: DataPanosGlobalprotectGatewayHipNotificationNotMatchMessage) {
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

export class DataPanosGlobalprotectGatewayHipNotificationList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectGatewayHipNotification[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectGatewayHipNotificationOutputReference {
    return new DataPanosGlobalprotectGatewayHipNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectGatewayLocalAddressFloatingIp {
  /**
  * Floating IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ipv4 DataPanosGlobalprotectGateway#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Floating IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ipv6 DataPanosGlobalprotectGateway#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosGlobalprotectGatewayLocalAddressFloatingIpToTerraform(struct?: DataPanosGlobalprotectGatewayLocalAddressFloatingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosGlobalprotectGatewayLocalAddressFloatingIpToHclTerraform(struct?: DataPanosGlobalprotectGatewayLocalAddressFloatingIp | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayLocalAddressFloatingIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayLocalAddressFloatingIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayLocalAddressFloatingIp | cdktf.IResolvable | undefined) {
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

  // ipv4 - computed: true, optional: true, required: false
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

  // ipv6 - computed: true, optional: true, required: false
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
export interface DataPanosGlobalprotectGatewayLocalAddressIp {
  /**
  * IPv4 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ipv4 DataPanosGlobalprotectGateway#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ipv6 DataPanosGlobalprotectGateway#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosGlobalprotectGatewayLocalAddressIpToTerraform(struct?: DataPanosGlobalprotectGatewayLocalAddressIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosGlobalprotectGatewayLocalAddressIpToHclTerraform(struct?: DataPanosGlobalprotectGatewayLocalAddressIp | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayLocalAddressIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayLocalAddressIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayLocalAddressIp | cdktf.IResolvable | undefined) {
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

  // ipv4 - computed: true, optional: true, required: false
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

  // ipv6 - computed: true, optional: true, required: false
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
export interface DataPanosGlobalprotectGatewayLocalAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#floating_ip DataPanosGlobalprotectGateway#floating_ip}
  */
  readonly floatingIp?: DataPanosGlobalprotectGatewayLocalAddressFloatingIp;
  /**
  * local gateway end-point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#interface DataPanosGlobalprotectGateway#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ip DataPanosGlobalprotectGateway#ip}
  */
  readonly ip?: DataPanosGlobalprotectGatewayLocalAddressIp;
  /**
  * specify the family of the local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ip_address_family DataPanosGlobalprotectGateway#ip_address_family}
  */
  readonly ipAddressFamily?: string;
}

export function dataPanosGlobalprotectGatewayLocalAddressToTerraform(struct?: DataPanosGlobalprotectGatewayLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: dataPanosGlobalprotectGatewayLocalAddressFloatingIpToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: dataPanosGlobalprotectGatewayLocalAddressIpToTerraform(struct!.ip),
    ip_address_family: cdktf.stringToTerraform(struct!.ipAddressFamily),
  }
}


export function dataPanosGlobalprotectGatewayLocalAddressToHclTerraform(struct?: DataPanosGlobalprotectGatewayLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: dataPanosGlobalprotectGatewayLocalAddressFloatingIpToHclTerraform(struct!.floatingIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayLocalAddressFloatingIp",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: dataPanosGlobalprotectGatewayLocalAddressIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayLocalAddressIp",
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

export class DataPanosGlobalprotectGatewayLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayLocalAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayLocalAddress | cdktf.IResolvable | undefined) {
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

  // floating_ip - computed: true, optional: true, required: false
  private _floatingIp = new DataPanosGlobalprotectGatewayLocalAddressFloatingIpOutputReference(this, "floating_ip");
  public get floatingIp() {
    return this._floatingIp;
  }
  public putFloatingIp(value: DataPanosGlobalprotectGatewayLocalAddressFloatingIp) {
    this._floatingIp.internalValue = value;
  }
  public resetFloatingIp() {
    this._floatingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp.internalValue;
  }

  // interface - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
  private _ip = new DataPanosGlobalprotectGatewayLocalAddressIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataPanosGlobalprotectGatewayLocalAddressIp) {
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
export interface DataPanosGlobalprotectGatewayLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#name DataPanosGlobalprotectGateway#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ngfw_device DataPanosGlobalprotectGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#panorama_device DataPanosGlobalprotectGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosGlobalprotectGatewayLocationTemplateToTerraform(struct?: DataPanosGlobalprotectGatewayLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosGlobalprotectGatewayLocationTemplateToHclTerraform(struct?: DataPanosGlobalprotectGatewayLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosGlobalprotectGatewayLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#name DataPanosGlobalprotectGateway#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ngfw_device DataPanosGlobalprotectGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#panorama_device DataPanosGlobalprotectGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosGlobalprotectGatewayLocationTemplateStackToTerraform(struct?: DataPanosGlobalprotectGatewayLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosGlobalprotectGatewayLocationTemplateStackToHclTerraform(struct?: DataPanosGlobalprotectGatewayLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosGlobalprotectGatewayLocationTemplateStackVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ngfw_device DataPanosGlobalprotectGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#panorama_device DataPanosGlobalprotectGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#template_stack DataPanosGlobalprotectGateway#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#vsys DataPanosGlobalprotectGateway#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosGlobalprotectGatewayLocationTemplateStackVsysToTerraform(struct?: DataPanosGlobalprotectGatewayLocationTemplateStackVsys | cdktf.IResolvable): any {
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


export function dataPanosGlobalprotectGatewayLocationTemplateStackVsysToHclTerraform(struct?: DataPanosGlobalprotectGatewayLocationTemplateStackVsys | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayLocationTemplateStackVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosGlobalprotectGatewayLocationTemplateVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ngfw_device DataPanosGlobalprotectGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#panorama_device DataPanosGlobalprotectGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#template DataPanosGlobalprotectGateway#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#vsys DataPanosGlobalprotectGateway#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosGlobalprotectGatewayLocationTemplateVsysToTerraform(struct?: DataPanosGlobalprotectGatewayLocationTemplateVsys | cdktf.IResolvable): any {
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


export function dataPanosGlobalprotectGatewayLocationTemplateVsysToHclTerraform(struct?: DataPanosGlobalprotectGatewayLocationTemplateVsys | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayLocationTemplateVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayLocationTemplateVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosGlobalprotectGatewayLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#name DataPanosGlobalprotectGateway#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ngfw_device DataPanosGlobalprotectGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosGlobalprotectGatewayLocationVsysToTerraform(struct?: DataPanosGlobalprotectGatewayLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosGlobalprotectGatewayLocationVsysToHclTerraform(struct?: DataPanosGlobalprotectGatewayLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosGlobalprotectGatewayLocation {
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#template DataPanosGlobalprotectGateway#template}
  */
  readonly template?: DataPanosGlobalprotectGatewayLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#template_stack DataPanosGlobalprotectGateway#template_stack}
  */
  readonly templateStack?: DataPanosGlobalprotectGatewayLocationTemplateStack;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#template_stack_vsys DataPanosGlobalprotectGateway#template_stack_vsys}
  */
  readonly templateStackVsys?: DataPanosGlobalprotectGatewayLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#template_vsys DataPanosGlobalprotectGateway#template_vsys}
  */
  readonly templateVsys?: DataPanosGlobalprotectGatewayLocationTemplateVsys;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#vsys DataPanosGlobalprotectGateway#vsys}
  */
  readonly vsys?: DataPanosGlobalprotectGatewayLocationVsys;
}

export function dataPanosGlobalprotectGatewayLocationToTerraform(struct?: DataPanosGlobalprotectGatewayLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataPanosGlobalprotectGatewayLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosGlobalprotectGatewayLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: dataPanosGlobalprotectGatewayLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: dataPanosGlobalprotectGatewayLocationTemplateVsysToTerraform(struct!.templateVsys),
    vsys: dataPanosGlobalprotectGatewayLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosGlobalprotectGatewayLocationToHclTerraform(struct?: DataPanosGlobalprotectGatewayLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataPanosGlobalprotectGatewayLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayLocationTemplate",
    },
    template_stack: {
      value: dataPanosGlobalprotectGatewayLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayLocationTemplateStack",
    },
    template_stack_vsys: {
      value: dataPanosGlobalprotectGatewayLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayLocationTemplateStackVsys",
    },
    template_vsys: {
      value: dataPanosGlobalprotectGatewayLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayLocationTemplateVsys",
    },
    vsys: {
      value: dataPanosGlobalprotectGatewayLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectGatewayLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayLocation | cdktf.IResolvable | undefined) {
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
  private _template = new DataPanosGlobalprotectGatewayLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosGlobalprotectGatewayLocationTemplate) {
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
  private _templateStack = new DataPanosGlobalprotectGatewayLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosGlobalprotectGatewayLocationTemplateStack) {
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
  private _templateStackVsys = new DataPanosGlobalprotectGatewayLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: DataPanosGlobalprotectGatewayLocationTemplateStackVsys) {
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
  private _templateVsys = new DataPanosGlobalprotectGatewayLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: DataPanosGlobalprotectGatewayLocationTemplateVsys) {
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
  private _vsys = new DataPanosGlobalprotectGatewayLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosGlobalprotectGatewayLocationVsys) {
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
export interface DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime {
  /**
  * Cookie lifetime in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#lifetime_in_days DataPanosGlobalprotectGateway#lifetime_in_days}
  */
  readonly lifetimeInDays?: number;
  /**
  * Cookie lifetime in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#lifetime_in_hours DataPanosGlobalprotectGateway#lifetime_in_hours}
  */
  readonly lifetimeInHours?: number;
  /**
  * Cookie lifetime in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#lifetime_in_minutes DataPanosGlobalprotectGateway#lifetime_in_minutes}
  */
  readonly lifetimeInMinutes?: number;
}

export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable): any {
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


export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToHclTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime | cdktf.IResolvable | undefined) {
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

  // lifetime_in_days - computed: true, optional: true, required: false
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

  // lifetime_in_hours - computed: true, optional: true, required: false
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

  // lifetime_in_minutes - computed: true, optional: true, required: false
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
export interface DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#cookie_lifetime DataPanosGlobalprotectGateway#cookie_lifetime}
  */
  readonly cookieLifetime?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime;
}

export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieToTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_lifetime: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToTerraform(struct!.cookieLifetime),
  }
}


export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieToHclTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_lifetime: {
      value: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeToHclTerraform(struct!.cookieLifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie | cdktf.IResolvable | undefined) {
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

  // cookie_lifetime - computed: true, optional: true, required: false
  private _cookieLifetime = new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetimeOutputReference(this, "cookie_lifetime");
  public get cookieLifetime() {
    return this._cookieLifetime;
  }
  public putCookieLifetime(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieCookieLifetime) {
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
export interface DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#accept_cookie DataPanosGlobalprotectGateway#accept_cookie}
  */
  readonly acceptCookie?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie;
  /**
  * Certificate to Encrypt/Decrypt Cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#cookie_encrypt_decrypt_cert DataPanosGlobalprotectGateway#cookie_encrypt_decrypt_cert}
  */
  readonly cookieEncryptDecryptCert?: string;
  /**
  * Generate cookie for authentication override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#generate_cookie DataPanosGlobalprotectGateway#generate_cookie}
  */
  readonly generateCookie?: boolean | cdktf.IResolvable;
}

export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideToTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_cookie: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieToTerraform(struct!.acceptCookie),
    cookie_encrypt_decrypt_cert: cdktf.stringToTerraform(struct!.cookieEncryptDecryptCert),
    generate_cookie: cdktf.booleanToTerraform(struct!.generateCookie),
  }
}


export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideToHclTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_cookie: {
      value: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieToHclTerraform(struct!.acceptCookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie",
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

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride | cdktf.IResolvable | undefined) {
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

  // accept_cookie - computed: true, optional: true, required: false
  private _acceptCookie = new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookieOutputReference(this, "accept_cookie");
  public get acceptCookie() {
    return this._acceptCookie;
  }
  public putAcceptCookie(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideAcceptCookie) {
    this._acceptCookie.internalValue = value;
  }
  public resetAcceptCookie() {
    this._acceptCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptCookieInput() {
    return this._acceptCookie.internalValue;
  }

  // cookie_encrypt_decrypt_cert - computed: true, optional: true, required: false
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

  // generate_cookie - computed: true, optional: true, required: false
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
export interface DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ip_address DataPanosGlobalprotectGateway#ip_address}
  */
  readonly ipAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#region DataPanosGlobalprotectGateway#region}
  */
  readonly region?: string[];
}

export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddressToTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddress),
    region: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.region),
  }
}


export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddressToHclTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress | cdktf.IResolvable | undefined) {
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

  // ip_address - computed: true, optional: true, required: false
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

  // region - computed: true, optional: true, required: false
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
export interface DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#name DataPanosGlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ports DataPanosGlobalprotectGateway#ports}
  */
  readonly ports?: number[];
}

export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructToTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructToHclTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // ports - computed: true, optional: true, required: false
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

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructOutputReference {
    return new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#list DataPanosGlobalprotectGateway#list}
  */
  readonly list?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsToTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructToTerraform, false)(struct!.list),
  }
}


export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsToHclTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructToHclTerraform, false)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains | cdktf.IResolvable | undefined) {
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

  // list - computed: true, optional: true, required: false
  private _list = new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsListStruct[] | cdktf.IResolvable) {
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
export interface DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#name DataPanosGlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ports DataPanosGlobalprotectGateway#ports}
  */
  readonly ports?: number[];
}

export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructToTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructToHclTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // ports - computed: true, optional: true, required: false
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

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructOutputReference {
    return new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#list DataPanosGlobalprotectGateway#list}
  */
  readonly list?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct[] | cdktf.IResolvable;
}

export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsToTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructToTerraform, false)(struct!.list),
  }
}


export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsToHclTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructToHclTerraform, false)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains | cdktf.IResolvable | undefined) {
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

  // list - computed: true, optional: true, required: false
  private _list = new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsListStruct[] | cdktf.IResolvable) {
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
export interface DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#access_route DataPanosGlobalprotectGateway#access_route}
  */
  readonly accessRoute?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#exclude_access_route DataPanosGlobalprotectGateway#exclude_access_route}
  */
  readonly excludeAccessRoute?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#exclude_applications DataPanosGlobalprotectGateway#exclude_applications}
  */
  readonly excludeApplications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#exclude_domains DataPanosGlobalprotectGateway#exclude_domains}
  */
  readonly excludeDomains?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#include_applications DataPanosGlobalprotectGateway#include_applications}
  */
  readonly includeApplications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#include_domains DataPanosGlobalprotectGateway#include_domains}
  */
  readonly includeDomains?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains;
}

export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingToTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_route: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessRoute),
    exclude_access_route: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeAccessRoute),
    exclude_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeApplications),
    exclude_domains: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsToTerraform(struct!.excludeDomains),
    include_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeApplications),
    include_domains: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsToTerraform(struct!.includeDomains),
  }
}


export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingToHclTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling | cdktf.IResolvable): any {
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
      value: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsToHclTerraform(struct!.excludeDomains),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains",
    },
    include_applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeApplications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_domains: {
      value: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsToHclTerraform(struct!.includeDomains),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling | cdktf.IResolvable | undefined) {
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

  // access_route - computed: true, optional: true, required: false
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

  // exclude_access_route - computed: true, optional: true, required: false
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

  // exclude_applications - computed: true, optional: true, required: false
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

  // exclude_domains - computed: true, optional: true, required: false
  private _excludeDomains = new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomainsOutputReference(this, "exclude_domains");
  public get excludeDomains() {
    return this._excludeDomains;
  }
  public putExcludeDomains(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingExcludeDomains) {
    this._excludeDomains.internalValue = value;
  }
  public resetExcludeDomains() {
    this._excludeDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDomainsInput() {
    return this._excludeDomains.internalValue;
  }

  // include_applications - computed: true, optional: true, required: false
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

  // include_domains - computed: true, optional: true, required: false
  private _includeDomains = new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomainsOutputReference(this, "include_domains");
  public get includeDomains() {
    return this._includeDomains;
  }
  public putIncludeDomains(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingIncludeDomains) {
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
export interface DataPanosGlobalprotectGatewayRemoteUserTunnelConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#authentication_override DataPanosGlobalprotectGateway#authentication_override}
  */
  readonly authenticationOverride?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#authentication_server_ip_pool DataPanosGlobalprotectGateway#authentication_server_ip_pool}
  */
  readonly authenticationServerIpPool?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#dns_server DataPanosGlobalprotectGateway#dns_server}
  */
  readonly dnsServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#dns_suffix DataPanosGlobalprotectGateway#dns_suffix}
  */
  readonly dnsSuffix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#ip_pool DataPanosGlobalprotectGateway#ip_pool}
  */
  readonly ipPool?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#name DataPanosGlobalprotectGateway#name}
  */
  readonly name: string;
  /**
  * No direct access to local network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#no_direct_access_to_local_network DataPanosGlobalprotectGateway#no_direct_access_to_local_network}
  */
  readonly noDirectAccessToLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#os DataPanosGlobalprotectGateway#os}
  */
  readonly os?: string[];
  /**
  * retrieve framed ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#retrieve_framed_ip_address DataPanosGlobalprotectGateway#retrieve_framed_ip_address}
  */
  readonly retrieveFramedIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#source_address DataPanosGlobalprotectGateway#source_address}
  */
  readonly sourceAddress?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#source_user DataPanosGlobalprotectGateway#source_user}
  */
  readonly sourceUser?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#split_tunneling DataPanosGlobalprotectGateway#split_tunneling}
  */
  readonly splitTunneling?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling;
}

export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsToTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_override: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideToTerraform(struct!.authenticationOverride),
    authentication_server_ip_pool: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticationServerIpPool),
    dns_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServer),
    dns_suffix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSuffix),
    ip_pool: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPool),
    name: cdktf.stringToTerraform(struct!.name),
    no_direct_access_to_local_network: cdktf.booleanToTerraform(struct!.noDirectAccessToLocalNetwork),
    os: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.os),
    retrieve_framed_ip_address: cdktf.booleanToTerraform(struct!.retrieveFramedIpAddress),
    source_address: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddressToTerraform(struct!.sourceAddress),
    source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUser),
    split_tunneling: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingToTerraform(struct!.splitTunneling),
  }
}


export function dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsToHclTerraform(struct?: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_override: {
      value: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideToHclTerraform(struct!.authenticationOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride",
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
      value: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddressToHclTerraform(struct!.sourceAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress",
    },
    source_user: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUser),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    split_tunneling: {
      value: dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingToHclTerraform(struct!.splitTunneling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigs | cdktf.IResolvable | undefined) {
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

  // authentication_override - computed: true, optional: true, required: false
  private _authenticationOverride = new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverrideOutputReference(this, "authentication_override");
  public get authenticationOverride() {
    return this._authenticationOverride;
  }
  public putAuthenticationOverride(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsAuthenticationOverride) {
    this._authenticationOverride.internalValue = value;
  }
  public resetAuthenticationOverride() {
    this._authenticationOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOverrideInput() {
    return this._authenticationOverride.internalValue;
  }

  // authentication_server_ip_pool - computed: true, optional: true, required: false
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

  // dns_server - computed: true, optional: true, required: false
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

  // dns_suffix - computed: true, optional: true, required: false
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

  // ip_pool - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

  // no_direct_access_to_local_network - computed: true, optional: true, required: false
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

  // os - computed: true, optional: true, required: false
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

  // retrieve_framed_ip_address - computed: true, optional: true, required: false
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

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress = new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddressOutputReference(this, "source_address");
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSourceAddress) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }

  // source_user - computed: true, optional: true, required: false
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

  // split_tunneling - computed: true, optional: true, required: false
  private _splitTunneling = new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunnelingOutputReference(this, "split_tunneling");
  public get splitTunneling() {
    return this._splitTunneling;
  }
  public putSplitTunneling(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsSplitTunneling) {
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

export class DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectGatewayRemoteUserTunnelConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsOutputReference {
    return new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectGatewayRolesLoginLifetime {
  /**
  * specify lifetime in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#days DataPanosGlobalprotectGateway#days}
  */
  readonly days?: number;
  /**
  * specify lifetime in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#hours DataPanosGlobalprotectGateway#hours}
  */
  readonly hours?: number;
  /**
  * specify lifetime in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#minutes DataPanosGlobalprotectGateway#minutes}
  */
  readonly minutes?: number;
}

export function dataPanosGlobalprotectGatewayRolesLoginLifetimeToTerraform(struct?: DataPanosGlobalprotectGatewayRolesLoginLifetime | cdktf.IResolvable): any {
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


export function dataPanosGlobalprotectGatewayRolesLoginLifetimeToHclTerraform(struct?: DataPanosGlobalprotectGatewayRolesLoginLifetime | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewayRolesLoginLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewayRolesLoginLifetime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRolesLoginLifetime | cdktf.IResolvable | undefined) {
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

  // days - computed: true, optional: true, required: false
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

  // hours - computed: true, optional: true, required: false
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

  // minutes - computed: true, optional: true, required: false
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
export interface DataPanosGlobalprotectGatewayRoles {
  /**
  * Notify users on admin logout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#admin_logout_notify DataPanosGlobalprotectGateway#admin_logout_notify}
  */
  readonly adminLogoutNotify?: boolean | cdktf.IResolvable;
  /**
  * Admin logout notification displayed on GP app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#admin_logout_notify_message DataPanosGlobalprotectGateway#admin_logout_notify_message}
  */
  readonly adminLogoutNotifyMessage?: string;
  /**
  * Logout the GlobalProtect user session if the GlobalProtect app has not sent traffic in the specified amount of minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#inactivity_logout DataPanosGlobalprotectGateway#inactivity_logout}
  */
  readonly inactivityLogout?: number;
  /**
  * Inactivity logout notification displayed on GP app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#inactivity_notify_message DataPanosGlobalprotectGateway#inactivity_notify_message}
  */
  readonly inactivityNotifyMessage?: string;
  /**
  * Notify users before the inactivity timeout in the specified amount of minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#inactivity_notify_prior DataPanosGlobalprotectGateway#inactivity_notify_prior}
  */
  readonly inactivityNotifyPrior?: number;
  /**
  * Lifetime expiration notification displayed on GP app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#lifetime_notify_message DataPanosGlobalprotectGateway#lifetime_notify_message}
  */
  readonly lifetimeNotifyMessage?: string;
  /**
  * Notify users before the lifetime expiration in the specified amount of minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#lifetime_notify_prior DataPanosGlobalprotectGateway#lifetime_notify_prior}
  */
  readonly lifetimeNotifyPrior?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#login_lifetime DataPanosGlobalprotectGateway#login_lifetime}
  */
  readonly loginLifetime?: DataPanosGlobalprotectGatewayRolesLoginLifetime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#name DataPanosGlobalprotectGateway#name}
  */
  readonly name: string;
}

export function dataPanosGlobalprotectGatewayRolesToTerraform(struct?: DataPanosGlobalprotectGatewayRoles | cdktf.IResolvable): any {
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
    login_lifetime: dataPanosGlobalprotectGatewayRolesLoginLifetimeToTerraform(struct!.loginLifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosGlobalprotectGatewayRolesToHclTerraform(struct?: DataPanosGlobalprotectGatewayRoles | cdktf.IResolvable): any {
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
      value: dataPanosGlobalprotectGatewayRolesLoginLifetimeToHclTerraform(struct!.loginLifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewayRolesLoginLifetime",
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

export class DataPanosGlobalprotectGatewayRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosGlobalprotectGatewayRoles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewayRoles | cdktf.IResolvable | undefined) {
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

  // admin_logout_notify - computed: true, optional: true, required: false
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

  // login_lifetime - computed: true, optional: true, required: false
  private _loginLifetime = new DataPanosGlobalprotectGatewayRolesLoginLifetimeOutputReference(this, "login_lifetime");
  public get loginLifetime() {
    return this._loginLifetime;
  }
  public putLoginLifetime(value: DataPanosGlobalprotectGatewayRolesLoginLifetime) {
    this._loginLifetime.internalValue = value;
  }
  public resetLoginLifetime() {
    this._loginLifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginLifetimeInput() {
    return this._loginLifetime.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

export class DataPanosGlobalprotectGatewayRolesList extends cdktf.ComplexList {
  public internalValue? : DataPanosGlobalprotectGatewayRoles[] | cdktf.IResolvable

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
  public get(index: number): DataPanosGlobalprotectGatewayRolesOutputReference {
    return new DataPanosGlobalprotectGatewayRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom {
  /**
  * Source IPv4 Netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#source_ipv4_netmask DataPanosGlobalprotectGateway#source_ipv4_netmask}
  */
  readonly sourceIpv4Netmask?: number;
  /**
  * Source IPv6 Netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#source_ipv6_netmask DataPanosGlobalprotectGateway#source_ipv6_netmask}
  */
  readonly sourceIpv6Netmask?: number;
}

export function dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomToTerraform(struct?: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ipv4_netmask: cdktf.numberToTerraform(struct!.sourceIpv4Netmask),
    source_ipv6_netmask: cdktf.numberToTerraform(struct!.sourceIpv6Netmask),
  }
}


export function dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomToHclTerraform(struct?: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom | cdktf.IResolvable): any {
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

export class DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom | cdktf.IResolvable | undefined) {
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

  // source_ipv4_netmask - computed: true, optional: true, required: false
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

  // source_ipv6_netmask - computed: true, optional: true, required: false
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
export interface DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault {
}

export function dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultToTerraform(struct?: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultToHclTerraform(struct?: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault | cdktf.IResolvable | undefined) {
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
export interface DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#custom DataPanosGlobalprotectGateway#custom}
  */
  readonly custom?: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#default DataPanosGlobalprotectGateway#default}
  */
  readonly default?: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault;
  /**
  * Allow Authentication Cookie Usage Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#enable DataPanosGlobalprotectGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementToTerraform(struct?: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomToTerraform(struct!.custom),
    default: dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultToTerraform(struct!.default),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementToHclTerraform(struct?: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom",
    },
    default: {
      value: dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault",
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

export class DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement | cdktf.IResolvable | undefined) {
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

  // custom - computed: true, optional: true, required: false
  private _custom = new DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // default - computed: true, optional: true, required: false
  private _default = new DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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
export interface DataPanosGlobalprotectGatewaySecurityRestrictions {
  /**
  * Disallow Automatic Restoration of SSL VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#disallow_automatic_restoration DataPanosGlobalprotectGateway#disallow_automatic_restoration}
  */
  readonly disallowAutomaticRestoration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#source_ip_enforcement DataPanosGlobalprotectGateway#source_ip_enforcement}
  */
  readonly sourceIpEnforcement?: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement;
}

export function dataPanosGlobalprotectGatewaySecurityRestrictionsToTerraform(struct?: DataPanosGlobalprotectGatewaySecurityRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disallow_automatic_restoration: cdktf.booleanToTerraform(struct!.disallowAutomaticRestoration),
    source_ip_enforcement: dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementToTerraform(struct!.sourceIpEnforcement),
  }
}


export function dataPanosGlobalprotectGatewaySecurityRestrictionsToHclTerraform(struct?: DataPanosGlobalprotectGatewaySecurityRestrictions | cdktf.IResolvable): any {
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
      value: dataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementToHclTerraform(struct!.sourceIpEnforcement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosGlobalprotectGatewaySecurityRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosGlobalprotectGatewaySecurityRestrictions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosGlobalprotectGatewaySecurityRestrictions | cdktf.IResolvable | undefined) {
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

  // disallow_automatic_restoration - computed: true, optional: true, required: false
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

  // source_ip_enforcement - computed: true, optional: true, required: false
  private _sourceIpEnforcement = new DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcementOutputReference(this, "source_ip_enforcement");
  public get sourceIpEnforcement() {
    return this._sourceIpEnforcement;
  }
  public putSourceIpEnforcement(value: DataPanosGlobalprotectGatewaySecurityRestrictionsSourceIpEnforcement) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway panos_globalprotect_gateway}
*/
export class DataPanosGlobalprotectGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_globalprotect_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosGlobalprotectGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosGlobalprotectGateway to import
  * @param importFromId The id of the existing DataPanosGlobalprotectGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosGlobalprotectGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_globalprotect_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/globalprotect_gateway panos_globalprotect_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosGlobalprotectGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosGlobalprotectGatewayConfig) {
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

  // block_quarantined_devices - computed: true, optional: true, required: false
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

  // certificate_profile - computed: true, optional: true, required: false
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

  // client_auth - computed: true, optional: true, required: false
  private _clientAuth = new DataPanosGlobalprotectGatewayClientAuthList(this, "client_auth", false);
  public get clientAuth() {
    return this._clientAuth;
  }
  public putClientAuth(value: DataPanosGlobalprotectGatewayClientAuth[] | cdktf.IResolvable) {
    this._clientAuth.internalValue = value;
  }
  public resetClientAuth() {
    this._clientAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth.internalValue;
  }

  // hip_notification - computed: true, optional: true, required: false
  private _hipNotification = new DataPanosGlobalprotectGatewayHipNotificationList(this, "hip_notification", false);
  public get hipNotification() {
    return this._hipNotification;
  }
  public putHipNotification(value: DataPanosGlobalprotectGatewayHipNotification[] | cdktf.IResolvable) {
    this._hipNotification.internalValue = value;
  }
  public resetHipNotification() {
    this._hipNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipNotificationInput() {
    return this._hipNotification.internalValue;
  }

  // local_address - computed: true, optional: true, required: false
  private _localAddress = new DataPanosGlobalprotectGatewayLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: DataPanosGlobalprotectGatewayLocalAddress) {
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
  private _location = new DataPanosGlobalprotectGatewayLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosGlobalprotectGatewayLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // log_fail - computed: true, optional: true, required: false
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

  // log_setting - computed: true, optional: true, required: false
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

  // log_success - computed: true, optional: true, required: false
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

  // remote_user_tunnel - computed: true, optional: true, required: false
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

  // remote_user_tunnel_configs - computed: true, optional: true, required: false
  private _remoteUserTunnelConfigs = new DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsList(this, "remote_user_tunnel_configs", false);
  public get remoteUserTunnelConfigs() {
    return this._remoteUserTunnelConfigs;
  }
  public putRemoteUserTunnelConfigs(value: DataPanosGlobalprotectGatewayRemoteUserTunnelConfigs[] | cdktf.IResolvable) {
    this._remoteUserTunnelConfigs.internalValue = value;
  }
  public resetRemoteUserTunnelConfigs() {
    this._remoteUserTunnelConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUserTunnelConfigsInput() {
    return this._remoteUserTunnelConfigs.internalValue;
  }

  // roles - computed: true, optional: true, required: false
  private _roles = new DataPanosGlobalprotectGatewayRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataPanosGlobalprotectGatewayRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // satellite_tunnel - computed: true, optional: true, required: false
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

  // security_restrictions - computed: true, optional: true, required: false
  private _securityRestrictions = new DataPanosGlobalprotectGatewaySecurityRestrictionsOutputReference(this, "security_restrictions");
  public get securityRestrictions() {
    return this._securityRestrictions;
  }
  public putSecurityRestrictions(value: DataPanosGlobalprotectGatewaySecurityRestrictions) {
    this._securityRestrictions.internalValue = value;
  }
  public resetSecurityRestrictions() {
    this._securityRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRestrictionsInput() {
    return this._securityRestrictions.internalValue;
  }

  // ssl_tls_service_profile - computed: true, optional: true, required: false
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

  // tunnel_mode - computed: true, optional: true, required: false
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
      client_auth: cdktf.listMapper(dataPanosGlobalprotectGatewayClientAuthToTerraform, false)(this._clientAuth.internalValue),
      hip_notification: cdktf.listMapper(dataPanosGlobalprotectGatewayHipNotificationToTerraform, false)(this._hipNotification.internalValue),
      local_address: dataPanosGlobalprotectGatewayLocalAddressToTerraform(this._localAddress.internalValue),
      location: dataPanosGlobalprotectGatewayLocationToTerraform(this._location.internalValue),
      log_fail: cdktf.booleanToTerraform(this._logFail),
      log_setting: cdktf.stringToTerraform(this._logSetting),
      log_success: cdktf.booleanToTerraform(this._logSuccess),
      name: cdktf.stringToTerraform(this._name),
      remote_user_tunnel: cdktf.stringToTerraform(this._remoteUserTunnel),
      remote_user_tunnel_configs: cdktf.listMapper(dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsToTerraform, false)(this._remoteUserTunnelConfigs.internalValue),
      roles: cdktf.listMapper(dataPanosGlobalprotectGatewayRolesToTerraform, false)(this._roles.internalValue),
      satellite_tunnel: cdktf.stringToTerraform(this._satelliteTunnel),
      security_restrictions: dataPanosGlobalprotectGatewaySecurityRestrictionsToTerraform(this._securityRestrictions.internalValue),
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
        value: cdktf.listMapperHcl(dataPanosGlobalprotectGatewayClientAuthToHclTerraform, false)(this._clientAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosGlobalprotectGatewayClientAuthList",
      },
      hip_notification: {
        value: cdktf.listMapperHcl(dataPanosGlobalprotectGatewayHipNotificationToHclTerraform, false)(this._hipNotification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosGlobalprotectGatewayHipNotificationList",
      },
      local_address: {
        value: dataPanosGlobalprotectGatewayLocalAddressToHclTerraform(this._localAddress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosGlobalprotectGatewayLocalAddress",
      },
      location: {
        value: dataPanosGlobalprotectGatewayLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosGlobalprotectGatewayLocation",
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
        value: cdktf.listMapperHcl(dataPanosGlobalprotectGatewayRemoteUserTunnelConfigsToHclTerraform, false)(this._remoteUserTunnelConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosGlobalprotectGatewayRemoteUserTunnelConfigsList",
      },
      roles: {
        value: cdktf.listMapperHcl(dataPanosGlobalprotectGatewayRolesToHclTerraform, false)(this._roles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosGlobalprotectGatewayRolesList",
      },
      satellite_tunnel: {
        value: cdktf.stringToHclTerraform(this._satelliteTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_restrictions: {
        value: dataPanosGlobalprotectGatewaySecurityRestrictionsToHclTerraform(this._securityRestrictions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosGlobalprotectGatewaySecurityRestrictions",
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
