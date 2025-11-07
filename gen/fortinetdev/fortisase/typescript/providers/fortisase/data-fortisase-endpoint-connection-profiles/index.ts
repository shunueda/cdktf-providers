// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseEndpointConnectionProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#allow_invalid_server_certificate DataFortisaseEndpointConnectionProfiles#allow_invalid_server_certificate}
  */
  readonly allowInvalidServerCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#allow_personal_vpns DataFortisaseEndpointConnectionProfiles#allow_personal_vpns}
  */
  readonly allowPersonalVpns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#auth_before_user_logon DataFortisaseEndpointConnectionProfiles#auth_before_user_logon}
  */
  readonly authBeforeUserLogon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#available_vp_ns DataFortisaseEndpointConnectionProfiles#available_vp_ns}
  */
  readonly availableVpNs?: DataFortisaseEndpointConnectionProfilesAvailableVpNs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#connect_to_forti_sase DataFortisaseEndpointConnectionProfiles#connect_to_forti_sase}
  */
  readonly connectToFortiSase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#enable_invalid_server_cert_warning DataFortisaseEndpointConnectionProfiles#enable_invalid_server_cert_warning}
  */
  readonly enableInvalidServerCertWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#endpoint_on_net_bypass DataFortisaseEndpointConnectionProfiles#endpoint_on_net_bypass}
  */
  readonly endpointOnNetBypass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#lockdown DataFortisaseEndpointConnectionProfiles#lockdown}
  */
  readonly lockdown?: DataFortisaseEndpointConnectionProfilesLockdown;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#mtu_size DataFortisaseEndpointConnectionProfiles#mtu_size}
  */
  readonly mtuSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#off_net_split_tunnel DataFortisaseEndpointConnectionProfiles#off_net_split_tunnel}
  */
  readonly offNetSplitTunnel?: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#on_fabric_rule_set DataFortisaseEndpointConnectionProfiles#on_fabric_rule_set}
  */
  readonly onFabricRuleSet?: DataFortisaseEndpointConnectionProfilesOnFabricRuleSet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#pre_logon DataFortisaseEndpointConnectionProfiles#pre_logon}
  */
  readonly preLogon?: DataFortisaseEndpointConnectionProfilesPreLogon;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#preferred_dtls_tunnel DataFortisaseEndpointConnectionProfiles#preferred_dtls_tunnel}
  */
  readonly preferredDtlsTunnel?: string;
  /**
  * The primary key of the object. Can be found in the response from the get request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#primary_key DataFortisaseEndpointConnectionProfiles#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#secure_internet_access DataFortisaseEndpointConnectionProfiles#secure_internet_access}
  */
  readonly secureInternetAccess?: DataFortisaseEndpointConnectionProfilesSecureInternetAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#show_disconnect_btn DataFortisaseEndpointConnectionProfiles#show_disconnect_btn}
  */
  readonly showDisconnectBtn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#split_tunnel DataFortisaseEndpointConnectionProfiles#split_tunnel}
  */
  readonly splitTunnel?: DataFortisaseEndpointConnectionProfilesSplitTunnel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#use_gui_saml_auth DataFortisaseEndpointConnectionProfiles#use_gui_saml_auth}
  */
  readonly useGuiSamlAuth?: string;
}
export interface DataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#action DataFortisaseEndpointConnectionProfiles#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#check_failed_message DataFortisaseEndpointConnectionProfiles#check_failed_message}
  */
  readonly checkFailedMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#tag DataFortisaseEndpointConnectionProfiles#tag}
  */
  readonly tag?: string;
}

export function dataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheckToTerraform(struct?: DataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    check_failed_message: cdktf.stringToTerraform(struct!.checkFailedMessage),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheckToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_failed_message: {
      value: cdktf.stringToHclTerraform(struct!.checkFailedMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._checkFailedMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkFailedMessage = this._checkFailedMessage;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._checkFailedMessage = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._checkFailedMessage = value.checkFailedMessage;
      this._tag = value.tag;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // check_failed_message - computed: true, optional: true, required: false
  private _checkFailedMessage?: string; 
  public get checkFailedMessage() {
    return this.getStringAttribute('check_failed_message');
  }
  public set checkFailedMessage(value: string) {
    this._checkFailedMessage = value;
  }
  public resetCheckFailedMessage() {
    this._checkFailedMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkFailedMessageInput() {
    return this._checkFailedMessage;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataFortisaseEndpointConnectionProfilesAvailableVpNs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#auth_method DataFortisaseEndpointConnectionProfiles#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#authenticate_with_sso DataFortisaseEndpointConnectionProfiles#authenticate_with_sso}
  */
  readonly authenticateWithSso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#enable_local_lan DataFortisaseEndpointConnectionProfiles#enable_local_lan}
  */
  readonly enableLocalLan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#external_browser_saml_login DataFortisaseEndpointConnectionProfiles#external_browser_saml_login}
  */
  readonly externalBrowserSamlLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#name DataFortisaseEndpointConnectionProfiles#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#port DataFortisaseEndpointConnectionProfiles#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#posture_check DataFortisaseEndpointConnectionProfiles#posture_check}
  */
  readonly postureCheck?: DataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#pre_shared_key DataFortisaseEndpointConnectionProfiles#pre_shared_key}
  */
  readonly preSharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#remote_gateway DataFortisaseEndpointConnectionProfiles#remote_gateway}
  */
  readonly remoteGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#require_certificate DataFortisaseEndpointConnectionProfiles#require_certificate}
  */
  readonly requireCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#save_username DataFortisaseEndpointConnectionProfiles#save_username}
  */
  readonly saveUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#show_always_up DataFortisaseEndpointConnectionProfiles#show_always_up}
  */
  readonly showAlwaysUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#show_auto_connect DataFortisaseEndpointConnectionProfiles#show_auto_connect}
  */
  readonly showAutoConnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#show_passcode DataFortisaseEndpointConnectionProfiles#show_passcode}
  */
  readonly showPasscode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#show_remember_password DataFortisaseEndpointConnectionProfiles#show_remember_password}
  */
  readonly showRememberPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#type DataFortisaseEndpointConnectionProfiles#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#username_prompt DataFortisaseEndpointConnectionProfiles#username_prompt}
  */
  readonly usernamePrompt?: string;
}

export function dataFortisaseEndpointConnectionProfilesAvailableVpNsToTerraform(struct?: DataFortisaseEndpointConnectionProfilesAvailableVpNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    authenticate_with_sso: cdktf.stringToTerraform(struct!.authenticateWithSso),
    enable_local_lan: cdktf.stringToTerraform(struct!.enableLocalLan),
    external_browser_saml_login: cdktf.stringToTerraform(struct!.externalBrowserSamlLogin),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    posture_check: dataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheckToTerraform(struct!.postureCheck),
    pre_shared_key: cdktf.stringToTerraform(struct!.preSharedKey),
    remote_gateway: cdktf.stringToTerraform(struct!.remoteGateway),
    require_certificate: cdktf.stringToTerraform(struct!.requireCertificate),
    save_username: cdktf.stringToTerraform(struct!.saveUsername),
    show_always_up: cdktf.stringToTerraform(struct!.showAlwaysUp),
    show_auto_connect: cdktf.stringToTerraform(struct!.showAutoConnect),
    show_passcode: cdktf.stringToTerraform(struct!.showPasscode),
    show_remember_password: cdktf.stringToTerraform(struct!.showRememberPassword),
    type: cdktf.stringToTerraform(struct!.type),
    username_prompt: cdktf.stringToTerraform(struct!.usernamePrompt),
  }
}


export function dataFortisaseEndpointConnectionProfilesAvailableVpNsToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesAvailableVpNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticate_with_sso: {
      value: cdktf.stringToHclTerraform(struct!.authenticateWithSso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_local_lan: {
      value: cdktf.stringToHclTerraform(struct!.enableLocalLan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_browser_saml_login: {
      value: cdktf.stringToHclTerraform(struct!.externalBrowserSamlLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    posture_check: {
      value: dataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheckToHclTerraform(struct!.postureCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheck",
    },
    pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_gateway: {
      value: cdktf.stringToHclTerraform(struct!.remoteGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_certificate: {
      value: cdktf.stringToHclTerraform(struct!.requireCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    save_username: {
      value: cdktf.stringToHclTerraform(struct!.saveUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_always_up: {
      value: cdktf.stringToHclTerraform(struct!.showAlwaysUp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_auto_connect: {
      value: cdktf.stringToHclTerraform(struct!.showAutoConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_passcode: {
      value: cdktf.stringToHclTerraform(struct!.showPasscode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_remember_password: {
      value: cdktf.stringToHclTerraform(struct!.showRememberPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_prompt: {
      value: cdktf.stringToHclTerraform(struct!.usernamePrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesAvailableVpNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointConnectionProfilesAvailableVpNs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._authenticateWithSso !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateWithSso = this._authenticateWithSso;
    }
    if (this._enableLocalLan !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalLan = this._enableLocalLan;
    }
    if (this._externalBrowserSamlLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBrowserSamlLogin = this._externalBrowserSamlLogin;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._postureCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postureCheck = this._postureCheck?.internalValue;
    }
    if (this._preSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKey = this._preSharedKey;
    }
    if (this._remoteGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGateway = this._remoteGateway;
    }
    if (this._requireCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCertificate = this._requireCertificate;
    }
    if (this._saveUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveUsername = this._saveUsername;
    }
    if (this._showAlwaysUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAlwaysUp = this._showAlwaysUp;
    }
    if (this._showAutoConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAutoConnect = this._showAutoConnect;
    }
    if (this._showPasscode !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPasscode = this._showPasscode;
    }
    if (this._showRememberPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.showRememberPassword = this._showRememberPassword;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usernamePrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePrompt = this._usernamePrompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesAvailableVpNs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._authenticateWithSso = undefined;
      this._enableLocalLan = undefined;
      this._externalBrowserSamlLogin = undefined;
      this._name = undefined;
      this._port = undefined;
      this._postureCheck.internalValue = undefined;
      this._preSharedKey = undefined;
      this._remoteGateway = undefined;
      this._requireCertificate = undefined;
      this._saveUsername = undefined;
      this._showAlwaysUp = undefined;
      this._showAutoConnect = undefined;
      this._showPasscode = undefined;
      this._showRememberPassword = undefined;
      this._type = undefined;
      this._usernamePrompt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._authenticateWithSso = value.authenticateWithSso;
      this._enableLocalLan = value.enableLocalLan;
      this._externalBrowserSamlLogin = value.externalBrowserSamlLogin;
      this._name = value.name;
      this._port = value.port;
      this._postureCheck.internalValue = value.postureCheck;
      this._preSharedKey = value.preSharedKey;
      this._remoteGateway = value.remoteGateway;
      this._requireCertificate = value.requireCertificate;
      this._saveUsername = value.saveUsername;
      this._showAlwaysUp = value.showAlwaysUp;
      this._showAutoConnect = value.showAutoConnect;
      this._showPasscode = value.showPasscode;
      this._showRememberPassword = value.showRememberPassword;
      this._type = value.type;
      this._usernamePrompt = value.usernamePrompt;
    }
  }

  // auth_method - computed: true, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // authenticate_with_sso - computed: true, optional: true, required: false
  private _authenticateWithSso?: string; 
  public get authenticateWithSso() {
    return this.getStringAttribute('authenticate_with_sso');
  }
  public set authenticateWithSso(value: string) {
    this._authenticateWithSso = value;
  }
  public resetAuthenticateWithSso() {
    this._authenticateWithSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateWithSsoInput() {
    return this._authenticateWithSso;
  }

  // enable_local_lan - computed: true, optional: true, required: false
  private _enableLocalLan?: string; 
  public get enableLocalLan() {
    return this.getStringAttribute('enable_local_lan');
  }
  public set enableLocalLan(value: string) {
    this._enableLocalLan = value;
  }
  public resetEnableLocalLan() {
    this._enableLocalLan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalLanInput() {
    return this._enableLocalLan;
  }

  // external_browser_saml_login - computed: true, optional: true, required: false
  private _externalBrowserSamlLogin?: string; 
  public get externalBrowserSamlLogin() {
    return this.getStringAttribute('external_browser_saml_login');
  }
  public set externalBrowserSamlLogin(value: string) {
    this._externalBrowserSamlLogin = value;
  }
  public resetExternalBrowserSamlLogin() {
    this._externalBrowserSamlLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBrowserSamlLoginInput() {
    return this._externalBrowserSamlLogin;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // posture_check - computed: true, optional: true, required: false
  private _postureCheck = new DataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheckOutputReference(this, "posture_check");
  public get postureCheck() {
    return this._postureCheck;
  }
  public putPostureCheck(value: DataFortisaseEndpointConnectionProfilesAvailableVpNsPostureCheck) {
    this._postureCheck.internalValue = value;
  }
  public resetPostureCheck() {
    this._postureCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postureCheckInput() {
    return this._postureCheck.internalValue;
  }

  // pre_shared_key - computed: true, optional: true, required: false
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  public resetPreSharedKey() {
    this._preSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // remote_gateway - computed: true, optional: true, required: false
  private _remoteGateway?: string; 
  public get remoteGateway() {
    return this.getStringAttribute('remote_gateway');
  }
  public set remoteGateway(value: string) {
    this._remoteGateway = value;
  }
  public resetRemoteGateway() {
    this._remoteGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGatewayInput() {
    return this._remoteGateway;
  }

  // require_certificate - computed: true, optional: true, required: false
  private _requireCertificate?: string; 
  public get requireCertificate() {
    return this.getStringAttribute('require_certificate');
  }
  public set requireCertificate(value: string) {
    this._requireCertificate = value;
  }
  public resetRequireCertificate() {
    this._requireCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCertificateInput() {
    return this._requireCertificate;
  }

  // save_username - computed: true, optional: true, required: false
  private _saveUsername?: string; 
  public get saveUsername() {
    return this.getStringAttribute('save_username');
  }
  public set saveUsername(value: string) {
    this._saveUsername = value;
  }
  public resetSaveUsername() {
    this._saveUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveUsernameInput() {
    return this._saveUsername;
  }

  // show_always_up - computed: true, optional: true, required: false
  private _showAlwaysUp?: string; 
  public get showAlwaysUp() {
    return this.getStringAttribute('show_always_up');
  }
  public set showAlwaysUp(value: string) {
    this._showAlwaysUp = value;
  }
  public resetShowAlwaysUp() {
    this._showAlwaysUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAlwaysUpInput() {
    return this._showAlwaysUp;
  }

  // show_auto_connect - computed: true, optional: true, required: false
  private _showAutoConnect?: string; 
  public get showAutoConnect() {
    return this.getStringAttribute('show_auto_connect');
  }
  public set showAutoConnect(value: string) {
    this._showAutoConnect = value;
  }
  public resetShowAutoConnect() {
    this._showAutoConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAutoConnectInput() {
    return this._showAutoConnect;
  }

  // show_passcode - computed: true, optional: true, required: false
  private _showPasscode?: string; 
  public get showPasscode() {
    return this.getStringAttribute('show_passcode');
  }
  public set showPasscode(value: string) {
    this._showPasscode = value;
  }
  public resetShowPasscode() {
    this._showPasscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPasscodeInput() {
    return this._showPasscode;
  }

  // show_remember_password - computed: true, optional: true, required: false
  private _showRememberPassword?: string; 
  public get showRememberPassword() {
    return this.getStringAttribute('show_remember_password');
  }
  public set showRememberPassword(value: string) {
    this._showRememberPassword = value;
  }
  public resetShowRememberPassword() {
    this._showRememberPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showRememberPasswordInput() {
    return this._showRememberPassword;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username_prompt - computed: true, optional: true, required: false
  private _usernamePrompt?: string; 
  public get usernamePrompt() {
    return this.getStringAttribute('username_prompt');
  }
  public set usernamePrompt(value: string) {
    this._usernamePrompt = value;
  }
  public resetUsernamePrompt() {
    this._usernamePrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePromptInput() {
    return this._usernamePrompt;
  }
}

export class DataFortisaseEndpointConnectionProfilesAvailableVpNsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointConnectionProfilesAvailableVpNs[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointConnectionProfilesAvailableVpNsOutputReference {
    return new DataFortisaseEndpointConnectionProfilesAvailableVpNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#status DataFortisaseEndpointConnectionProfiles#status}
  */
  readonly status?: string;
}

export function dataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortalToTerraform(struct?: DataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortalToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataFortisaseEndpointConnectionProfilesLockdownDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#address DataFortisaseEndpointConnectionProfiles#address}
  */
  readonly address?: string;
}

export function dataFortisaseEndpointConnectionProfilesLockdownDomainsToTerraform(struct?: DataFortisaseEndpointConnectionProfilesLockdownDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function dataFortisaseEndpointConnectionProfilesLockdownDomainsToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesLockdownDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesLockdownDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointConnectionProfilesLockdownDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesLockdownDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class DataFortisaseEndpointConnectionProfilesLockdownDomainsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointConnectionProfilesLockdownDomains[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointConnectionProfilesLockdownDomainsOutputReference {
    return new DataFortisaseEndpointConnectionProfilesLockdownDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointConnectionProfilesLockdownIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#ip DataFortisaseEndpointConnectionProfiles#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#port DataFortisaseEndpointConnectionProfiles#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#protocol DataFortisaseEndpointConnectionProfiles#protocol}
  */
  readonly protocol?: string;
}

export function dataFortisaseEndpointConnectionProfilesLockdownIpsToTerraform(struct?: DataFortisaseEndpointConnectionProfilesLockdownIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataFortisaseEndpointConnectionProfilesLockdownIpsToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesLockdownIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesLockdownIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointConnectionProfilesLockdownIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesLockdownIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataFortisaseEndpointConnectionProfilesLockdownIpsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointConnectionProfilesLockdownIps[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointConnectionProfilesLockdownIpsOutputReference {
    return new DataFortisaseEndpointConnectionProfilesLockdownIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointConnectionProfilesLockdown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#detect_captive_portal DataFortisaseEndpointConnectionProfiles#detect_captive_portal}
  */
  readonly detectCaptivePortal?: DataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#domains DataFortisaseEndpointConnectionProfiles#domains}
  */
  readonly domains?: DataFortisaseEndpointConnectionProfilesLockdownDomains[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#grace_period DataFortisaseEndpointConnectionProfiles#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#ips DataFortisaseEndpointConnectionProfiles#ips}
  */
  readonly ips?: DataFortisaseEndpointConnectionProfilesLockdownIps[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#max_attempts DataFortisaseEndpointConnectionProfiles#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#status DataFortisaseEndpointConnectionProfiles#status}
  */
  readonly status?: string;
}

export function dataFortisaseEndpointConnectionProfilesLockdownToTerraform(struct?: DataFortisaseEndpointConnectionProfilesLockdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detect_captive_portal: dataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortalToTerraform(struct!.detectCaptivePortal),
    domains: cdktf.listMapper(dataFortisaseEndpointConnectionProfilesLockdownDomainsToTerraform, false)(struct!.domains),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    ips: cdktf.listMapper(dataFortisaseEndpointConnectionProfilesLockdownIpsToTerraform, false)(struct!.ips),
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseEndpointConnectionProfilesLockdownToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesLockdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detect_captive_portal: {
      value: dataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortalToHclTerraform(struct!.detectCaptivePortal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortal",
    },
    domains: {
      value: cdktf.listMapperHcl(dataFortisaseEndpointConnectionProfilesLockdownDomainsToHclTerraform, false)(struct!.domains),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisaseEndpointConnectionProfilesLockdownDomainsList",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips: {
      value: cdktf.listMapperHcl(dataFortisaseEndpointConnectionProfilesLockdownIpsToHclTerraform, false)(struct!.ips),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisaseEndpointConnectionProfilesLockdownIpsList",
    },
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesLockdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesLockdown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectCaptivePortal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectCaptivePortal = this._detectCaptivePortal?.internalValue;
    }
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._ips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips?.internalValue;
    }
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesLockdown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectCaptivePortal.internalValue = undefined;
      this._domains.internalValue = undefined;
      this._gracePeriod = undefined;
      this._ips.internalValue = undefined;
      this._maxAttempts = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectCaptivePortal.internalValue = value.detectCaptivePortal;
      this._domains.internalValue = value.domains;
      this._gracePeriod = value.gracePeriod;
      this._ips.internalValue = value.ips;
      this._maxAttempts = value.maxAttempts;
      this._status = value.status;
    }
  }

  // detect_captive_portal - computed: true, optional: true, required: false
  private _detectCaptivePortal = new DataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortalOutputReference(this, "detect_captive_portal");
  public get detectCaptivePortal() {
    return this._detectCaptivePortal;
  }
  public putDetectCaptivePortal(value: DataFortisaseEndpointConnectionProfilesLockdownDetectCaptivePortal) {
    this._detectCaptivePortal.internalValue = value;
  }
  public resetDetectCaptivePortal() {
    this._detectCaptivePortal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCaptivePortalInput() {
    return this._detectCaptivePortal.internalValue;
  }

  // domains - computed: true, optional: true, required: false
  private _domains = new DataFortisaseEndpointConnectionProfilesLockdownDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: DataFortisaseEndpointConnectionProfilesLockdownDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  public resetDomains() {
    this._domains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }

  // grace_period - computed: true, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // ips - computed: true, optional: true, required: false
  private _ips = new DataFortisaseEndpointConnectionProfilesLockdownIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: DataFortisaseEndpointConnectionProfilesLockdownIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // max_attempts - computed: true, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#datasource DataFortisaseEndpointConnectionProfiles#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#primary_key DataFortisaseEndpointConnectionProfiles#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbsToTerraform(struct?: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbsToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbs[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbsOutputReference {
    return new DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#datasource DataFortisaseEndpointConnectionProfiles#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#primary_key DataFortisaseEndpointConnectionProfiles#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnetsToTerraform(struct?: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnetsToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnetsOutputReference {
    return new DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointConnectionProfilesOffNetSplitTunnel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#fqdns DataFortisaseEndpointConnectionProfiles#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#isdbs DataFortisaseEndpointConnectionProfiles#isdbs}
  */
  readonly isdbs?: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#local_apps DataFortisaseEndpointConnectionProfiles#local_apps}
  */
  readonly localApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#subnets DataFortisaseEndpointConnectionProfiles#subnets}
  */
  readonly subnets?: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#subnets_ipsec DataFortisaseEndpointConnectionProfiles#subnets_ipsec}
  */
  readonly subnetsIpsec?: string[];
}

export function dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelToTerraform(struct?: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdns),
    isdbs: cdktf.listMapper(dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbsToTerraform, false)(struct!.isdbs),
    local_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localApps),
    subnets: cdktf.listMapper(dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnetsToTerraform, false)(struct!.subnets),
    subnets_ipsec: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetsIpsec),
  }
}


export function dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    isdbs: {
      value: cdktf.listMapperHcl(dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbsToHclTerraform, false)(struct!.isdbs),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbsList",
    },
    local_apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localApps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnetsToHclTerraform, false)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnetsList",
    },
    subnets_ipsec: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetsIpsec),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesOffNetSplitTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._isdbs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isdbs = this._isdbs?.internalValue;
    }
    if (this._localApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.localApps = this._localApps;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    if (this._subnetsIpsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetsIpsec = this._subnetsIpsec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdns = undefined;
      this._isdbs.internalValue = undefined;
      this._localApps = undefined;
      this._subnets.internalValue = undefined;
      this._subnetsIpsec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdns = value.fqdns;
      this._isdbs.internalValue = value.isdbs;
      this._localApps = value.localApps;
      this._subnets.internalValue = value.subnets;
      this._subnetsIpsec = value.subnetsIpsec;
    }
  }

  // fqdns - computed: true, optional: true, required: false
  private _fqdns?: string[]; 
  public get fqdns() {
    return cdktf.Fn.tolist(this.getListAttribute('fqdns'));
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  public resetFqdns() {
    this._fqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // isdbs - computed: true, optional: true, required: false
  private _isdbs = new DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbsList(this, "isdbs", false);
  public get isdbs() {
    return this._isdbs;
  }
  public putIsdbs(value: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelIsdbs[] | cdktf.IResolvable) {
    this._isdbs.internalValue = value;
  }
  public resetIsdbs() {
    this._isdbs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isdbsInput() {
    return this._isdbs.internalValue;
  }

  // local_apps - computed: true, optional: true, required: false
  private _localApps?: string[]; 
  public get localApps() {
    return cdktf.Fn.tolist(this.getListAttribute('local_apps'));
  }
  public set localApps(value: string[]) {
    this._localApps = value;
  }
  public resetLocalApps() {
    this._localApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAppsInput() {
    return this._localApps;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets = new DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }

  // subnets_ipsec - computed: true, optional: true, required: false
  private _subnetsIpsec?: string[]; 
  public get subnetsIpsec() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets_ipsec'));
  }
  public set subnetsIpsec(value: string[]) {
    this._subnetsIpsec = value;
  }
  public resetSubnetsIpsec() {
    this._subnetsIpsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsIpsecInput() {
    return this._subnetsIpsec;
  }
}
export interface DataFortisaseEndpointConnectionProfilesOnFabricRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#datasource DataFortisaseEndpointConnectionProfiles#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#primary_key DataFortisaseEndpointConnectionProfiles#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseEndpointConnectionProfilesOnFabricRuleSetToTerraform(struct?: DataFortisaseEndpointConnectionProfilesOnFabricRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseEndpointConnectionProfilesOnFabricRuleSetToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesOnFabricRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesOnFabricRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesOnFabricRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesOnFabricRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseEndpointConnectionProfilesPreLogonCommonName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#match_type DataFortisaseEndpointConnectionProfiles#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#pattern DataFortisaseEndpointConnectionProfiles#pattern}
  */
  readonly pattern?: string;
}

export function dataFortisaseEndpointConnectionProfilesPreLogonCommonNameToTerraform(struct?: DataFortisaseEndpointConnectionProfilesPreLogonCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataFortisaseEndpointConnectionProfilesPreLogonCommonNameToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesPreLogonCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesPreLogonCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesPreLogonCommonName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesPreLogonCommonName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._pattern = value.pattern;
    }
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataFortisaseEndpointConnectionProfilesPreLogonIssuer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#match_type DataFortisaseEndpointConnectionProfiles#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#pattern DataFortisaseEndpointConnectionProfiles#pattern}
  */
  readonly pattern?: string;
}

export function dataFortisaseEndpointConnectionProfilesPreLogonIssuerToTerraform(struct?: DataFortisaseEndpointConnectionProfilesPreLogonIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataFortisaseEndpointConnectionProfilesPreLogonIssuerToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesPreLogonIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesPreLogonIssuerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesPreLogonIssuer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesPreLogonIssuer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._pattern = value.pattern;
    }
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataFortisaseEndpointConnectionProfilesPreLogon {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#common_name DataFortisaseEndpointConnectionProfiles#common_name}
  */
  readonly commonName?: DataFortisaseEndpointConnectionProfilesPreLogonCommonName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#issuer DataFortisaseEndpointConnectionProfiles#issuer}
  */
  readonly issuer?: DataFortisaseEndpointConnectionProfilesPreLogonIssuer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#port DataFortisaseEndpointConnectionProfiles#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#remote_gateway DataFortisaseEndpointConnectionProfiles#remote_gateway}
  */
  readonly remoteGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#vpn_type DataFortisaseEndpointConnectionProfiles#vpn_type}
  */
  readonly vpnType?: string;
}

export function dataFortisaseEndpointConnectionProfilesPreLogonToTerraform(struct?: DataFortisaseEndpointConnectionProfilesPreLogon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: dataFortisaseEndpointConnectionProfilesPreLogonCommonNameToTerraform(struct!.commonName),
    issuer: dataFortisaseEndpointConnectionProfilesPreLogonIssuerToTerraform(struct!.issuer),
    port: cdktf.numberToTerraform(struct!.port),
    remote_gateway: cdktf.stringToTerraform(struct!.remoteGateway),
    vpn_type: cdktf.stringToTerraform(struct!.vpnType),
  }
}


export function dataFortisaseEndpointConnectionProfilesPreLogonToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesPreLogon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: dataFortisaseEndpointConnectionProfilesPreLogonCommonNameToHclTerraform(struct!.commonName),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseEndpointConnectionProfilesPreLogonCommonName",
    },
    issuer: {
      value: dataFortisaseEndpointConnectionProfilesPreLogonIssuerToHclTerraform(struct!.issuer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseEndpointConnectionProfilesPreLogonIssuer",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_gateway: {
      value: cdktf.stringToHclTerraform(struct!.remoteGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_type: {
      value: cdktf.stringToHclTerraform(struct!.vpnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesPreLogonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesPreLogon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName?.internalValue;
    }
    if (this._issuer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._remoteGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGateway = this._remoteGateway;
    }
    if (this._vpnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnType = this._vpnType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesPreLogon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName.internalValue = undefined;
      this._issuer.internalValue = undefined;
      this._port = undefined;
      this._remoteGateway = undefined;
      this._vpnType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName.internalValue = value.commonName;
      this._issuer.internalValue = value.issuer;
      this._port = value.port;
      this._remoteGateway = value.remoteGateway;
      this._vpnType = value.vpnType;
    }
  }

  // common_name - computed: true, optional: true, required: false
  private _commonName = new DataFortisaseEndpointConnectionProfilesPreLogonCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }
  public putCommonName(value: DataFortisaseEndpointConnectionProfilesPreLogonCommonName) {
    this._commonName.internalValue = value;
  }
  public resetCommonName() {
    this._commonName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName.internalValue;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer = new DataFortisaseEndpointConnectionProfilesPreLogonIssuerOutputReference(this, "issuer");
  public get issuer() {
    return this._issuer;
  }
  public putIssuer(value: DataFortisaseEndpointConnectionProfilesPreLogonIssuer) {
    this._issuer.internalValue = value;
  }
  public resetIssuer() {
    this._issuer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer.internalValue;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // remote_gateway - computed: true, optional: true, required: false
  private _remoteGateway?: string; 
  public get remoteGateway() {
    return this.getStringAttribute('remote_gateway');
  }
  public set remoteGateway(value: string) {
    this._remoteGateway = value;
  }
  public resetRemoteGateway() {
    this._remoteGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGatewayInput() {
    return this._remoteGateway;
  }

  // vpn_type - computed: true, optional: true, required: false
  private _vpnType?: string; 
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }
  public set vpnType(value: string) {
    this._vpnType = value;
  }
  public resetVpnType() {
    this._vpnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTypeInput() {
    return this._vpnType;
  }
}
export interface DataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#action DataFortisaseEndpointConnectionProfiles#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#check_failed_message DataFortisaseEndpointConnectionProfiles#check_failed_message}
  */
  readonly checkFailedMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#tag DataFortisaseEndpointConnectionProfiles#tag}
  */
  readonly tag?: string;
}

export function dataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheckToTerraform(struct?: DataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    check_failed_message: cdktf.stringToTerraform(struct!.checkFailedMessage),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheckToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_failed_message: {
      value: cdktf.stringToHclTerraform(struct!.checkFailedMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._checkFailedMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkFailedMessage = this._checkFailedMessage;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._checkFailedMessage = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._checkFailedMessage = value.checkFailedMessage;
      this._tag = value.tag;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // check_failed_message - computed: true, optional: true, required: false
  private _checkFailedMessage?: string; 
  public get checkFailedMessage() {
    return this.getStringAttribute('check_failed_message');
  }
  public set checkFailedMessage(value: string) {
    this._checkFailedMessage = value;
  }
  public resetCheckFailedMessage() {
    this._checkFailedMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkFailedMessageInput() {
    return this._checkFailedMessage;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataFortisaseEndpointConnectionProfilesSecureInternetAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#authenticate_with_sso DataFortisaseEndpointConnectionProfiles#authenticate_with_sso}
  */
  readonly authenticateWithSso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#enable_local_lan DataFortisaseEndpointConnectionProfiles#enable_local_lan}
  */
  readonly enableLocalLan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#external_browser_saml_login DataFortisaseEndpointConnectionProfiles#external_browser_saml_login}
  */
  readonly externalBrowserSamlLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#failover_sequence DataFortisaseEndpointConnectionProfiles#failover_sequence}
  */
  readonly failoverSequence?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#posture_check DataFortisaseEndpointConnectionProfiles#posture_check}
  */
  readonly postureCheck?: DataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheck;
}

export function dataFortisaseEndpointConnectionProfilesSecureInternetAccessToTerraform(struct?: DataFortisaseEndpointConnectionProfilesSecureInternetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_with_sso: cdktf.stringToTerraform(struct!.authenticateWithSso),
    enable_local_lan: cdktf.stringToTerraform(struct!.enableLocalLan),
    external_browser_saml_login: cdktf.stringToTerraform(struct!.externalBrowserSamlLogin),
    failover_sequence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failoverSequence),
    posture_check: dataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheckToTerraform(struct!.postureCheck),
  }
}


export function dataFortisaseEndpointConnectionProfilesSecureInternetAccessToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesSecureInternetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_with_sso: {
      value: cdktf.stringToHclTerraform(struct!.authenticateWithSso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_local_lan: {
      value: cdktf.stringToHclTerraform(struct!.enableLocalLan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_browser_saml_login: {
      value: cdktf.stringToHclTerraform(struct!.externalBrowserSamlLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_sequence: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failoverSequence),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    posture_check: {
      value: dataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheckToHclTerraform(struct!.postureCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesSecureInternetAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesSecureInternetAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateWithSso !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateWithSso = this._authenticateWithSso;
    }
    if (this._enableLocalLan !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalLan = this._enableLocalLan;
    }
    if (this._externalBrowserSamlLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBrowserSamlLogin = this._externalBrowserSamlLogin;
    }
    if (this._failoverSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverSequence = this._failoverSequence;
    }
    if (this._postureCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postureCheck = this._postureCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesSecureInternetAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateWithSso = undefined;
      this._enableLocalLan = undefined;
      this._externalBrowserSamlLogin = undefined;
      this._failoverSequence = undefined;
      this._postureCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateWithSso = value.authenticateWithSso;
      this._enableLocalLan = value.enableLocalLan;
      this._externalBrowserSamlLogin = value.externalBrowserSamlLogin;
      this._failoverSequence = value.failoverSequence;
      this._postureCheck.internalValue = value.postureCheck;
    }
  }

  // authenticate_with_sso - computed: true, optional: true, required: false
  private _authenticateWithSso?: string; 
  public get authenticateWithSso() {
    return this.getStringAttribute('authenticate_with_sso');
  }
  public set authenticateWithSso(value: string) {
    this._authenticateWithSso = value;
  }
  public resetAuthenticateWithSso() {
    this._authenticateWithSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateWithSsoInput() {
    return this._authenticateWithSso;
  }

  // enable_local_lan - computed: true, optional: true, required: false
  private _enableLocalLan?: string; 
  public get enableLocalLan() {
    return this.getStringAttribute('enable_local_lan');
  }
  public set enableLocalLan(value: string) {
    this._enableLocalLan = value;
  }
  public resetEnableLocalLan() {
    this._enableLocalLan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalLanInput() {
    return this._enableLocalLan;
  }

  // external_browser_saml_login - computed: true, optional: true, required: false
  private _externalBrowserSamlLogin?: string; 
  public get externalBrowserSamlLogin() {
    return this.getStringAttribute('external_browser_saml_login');
  }
  public set externalBrowserSamlLogin(value: string) {
    this._externalBrowserSamlLogin = value;
  }
  public resetExternalBrowserSamlLogin() {
    this._externalBrowserSamlLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBrowserSamlLoginInput() {
    return this._externalBrowserSamlLogin;
  }

  // failover_sequence - computed: true, optional: true, required: false
  private _failoverSequence?: string[]; 
  public get failoverSequence() {
    return cdktf.Fn.tolist(this.getListAttribute('failover_sequence'));
  }
  public set failoverSequence(value: string[]) {
    this._failoverSequence = value;
  }
  public resetFailoverSequence() {
    this._failoverSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverSequenceInput() {
    return this._failoverSequence;
  }

  // posture_check - computed: true, optional: true, required: false
  private _postureCheck = new DataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheckOutputReference(this, "posture_check");
  public get postureCheck() {
    return this._postureCheck;
  }
  public putPostureCheck(value: DataFortisaseEndpointConnectionProfilesSecureInternetAccessPostureCheck) {
    this._postureCheck.internalValue = value;
  }
  public resetPostureCheck() {
    this._postureCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postureCheckInput() {
    return this._postureCheck.internalValue;
  }
}
export interface DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#datasource DataFortisaseEndpointConnectionProfiles#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#primary_key DataFortisaseEndpointConnectionProfiles#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseEndpointConnectionProfilesSplitTunnelIsdbsToTerraform(struct?: DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseEndpointConnectionProfilesSplitTunnelIsdbsToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbs[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbsOutputReference {
    return new DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointConnectionProfilesSplitTunnelSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#datasource DataFortisaseEndpointConnectionProfiles#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#primary_key DataFortisaseEndpointConnectionProfiles#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseEndpointConnectionProfilesSplitTunnelSubnetsToTerraform(struct?: DataFortisaseEndpointConnectionProfilesSplitTunnelSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseEndpointConnectionProfilesSplitTunnelSubnetsToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesSplitTunnelSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesSplitTunnelSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointConnectionProfilesSplitTunnelSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesSplitTunnelSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DataFortisaseEndpointConnectionProfilesSplitTunnelSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointConnectionProfilesSplitTunnelSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointConnectionProfilesSplitTunnelSubnetsOutputReference {
    return new DataFortisaseEndpointConnectionProfilesSplitTunnelSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointConnectionProfilesSplitTunnel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#fqdns DataFortisaseEndpointConnectionProfiles#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#isdbs DataFortisaseEndpointConnectionProfiles#isdbs}
  */
  readonly isdbs?: DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#local_apps DataFortisaseEndpointConnectionProfiles#local_apps}
  */
  readonly localApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#subnets DataFortisaseEndpointConnectionProfiles#subnets}
  */
  readonly subnets?: DataFortisaseEndpointConnectionProfilesSplitTunnelSubnets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#subnets_ipsec DataFortisaseEndpointConnectionProfiles#subnets_ipsec}
  */
  readonly subnetsIpsec?: string[];
}

export function dataFortisaseEndpointConnectionProfilesSplitTunnelToTerraform(struct?: DataFortisaseEndpointConnectionProfilesSplitTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdns),
    isdbs: cdktf.listMapper(dataFortisaseEndpointConnectionProfilesSplitTunnelIsdbsToTerraform, false)(struct!.isdbs),
    local_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localApps),
    subnets: cdktf.listMapper(dataFortisaseEndpointConnectionProfilesSplitTunnelSubnetsToTerraform, false)(struct!.subnets),
    subnets_ipsec: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetsIpsec),
  }
}


export function dataFortisaseEndpointConnectionProfilesSplitTunnelToHclTerraform(struct?: DataFortisaseEndpointConnectionProfilesSplitTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    isdbs: {
      value: cdktf.listMapperHcl(dataFortisaseEndpointConnectionProfilesSplitTunnelIsdbsToHclTerraform, false)(struct!.isdbs),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbsList",
    },
    local_apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localApps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(dataFortisaseEndpointConnectionProfilesSplitTunnelSubnetsToHclTerraform, false)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisaseEndpointConnectionProfilesSplitTunnelSubnetsList",
    },
    subnets_ipsec: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetsIpsec),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointConnectionProfilesSplitTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointConnectionProfilesSplitTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._isdbs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isdbs = this._isdbs?.internalValue;
    }
    if (this._localApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.localApps = this._localApps;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    if (this._subnetsIpsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetsIpsec = this._subnetsIpsec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointConnectionProfilesSplitTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdns = undefined;
      this._isdbs.internalValue = undefined;
      this._localApps = undefined;
      this._subnets.internalValue = undefined;
      this._subnetsIpsec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdns = value.fqdns;
      this._isdbs.internalValue = value.isdbs;
      this._localApps = value.localApps;
      this._subnets.internalValue = value.subnets;
      this._subnetsIpsec = value.subnetsIpsec;
    }
  }

  // fqdns - computed: true, optional: true, required: false
  private _fqdns?: string[]; 
  public get fqdns() {
    return cdktf.Fn.tolist(this.getListAttribute('fqdns'));
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  public resetFqdns() {
    this._fqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // isdbs - computed: true, optional: true, required: false
  private _isdbs = new DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbsList(this, "isdbs", false);
  public get isdbs() {
    return this._isdbs;
  }
  public putIsdbs(value: DataFortisaseEndpointConnectionProfilesSplitTunnelIsdbs[] | cdktf.IResolvable) {
    this._isdbs.internalValue = value;
  }
  public resetIsdbs() {
    this._isdbs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isdbsInput() {
    return this._isdbs.internalValue;
  }

  // local_apps - computed: true, optional: true, required: false
  private _localApps?: string[]; 
  public get localApps() {
    return cdktf.Fn.tolist(this.getListAttribute('local_apps'));
  }
  public set localApps(value: string[]) {
    this._localApps = value;
  }
  public resetLocalApps() {
    this._localApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAppsInput() {
    return this._localApps;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets = new DataFortisaseEndpointConnectionProfilesSplitTunnelSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: DataFortisaseEndpointConnectionProfilesSplitTunnelSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }

  // subnets_ipsec - computed: true, optional: true, required: false
  private _subnetsIpsec?: string[]; 
  public get subnetsIpsec() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets_ipsec'));
  }
  public set subnetsIpsec(value: string[]) {
    this._subnetsIpsec = value;
  }
  public resetSubnetsIpsec() {
    this._subnetsIpsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsIpsecInput() {
    return this._subnetsIpsec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles fortisase_endpoint_connection_profiles}
*/
export class DataFortisaseEndpointConnectionProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoint_connection_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseEndpointConnectionProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseEndpointConnectionProfiles to import
  * @param importFromId The id of the existing DataFortisaseEndpointConnectionProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseEndpointConnectionProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoint_connection_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_connection_profiles fortisase_endpoint_connection_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseEndpointConnectionProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseEndpointConnectionProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoint_connection_profiles',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowInvalidServerCertificate = config.allowInvalidServerCertificate;
    this._allowPersonalVpns = config.allowPersonalVpns;
    this._authBeforeUserLogon = config.authBeforeUserLogon;
    this._availableVpNs.internalValue = config.availableVpNs;
    this._connectToFortiSase = config.connectToFortiSase;
    this._enableInvalidServerCertWarning = config.enableInvalidServerCertWarning;
    this._endpointOnNetBypass = config.endpointOnNetBypass;
    this._lockdown.internalValue = config.lockdown;
    this._mtuSize = config.mtuSize;
    this._offNetSplitTunnel.internalValue = config.offNetSplitTunnel;
    this._onFabricRuleSet.internalValue = config.onFabricRuleSet;
    this._preLogon.internalValue = config.preLogon;
    this._preferredDtlsTunnel = config.preferredDtlsTunnel;
    this._primaryKey = config.primaryKey;
    this._secureInternetAccess.internalValue = config.secureInternetAccess;
    this._showDisconnectBtn = config.showDisconnectBtn;
    this._splitTunnel.internalValue = config.splitTunnel;
    this._useGuiSamlAuth = config.useGuiSamlAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_invalid_server_certificate - computed: true, optional: true, required: false
  private _allowInvalidServerCertificate?: string; 
  public get allowInvalidServerCertificate() {
    return this.getStringAttribute('allow_invalid_server_certificate');
  }
  public set allowInvalidServerCertificate(value: string) {
    this._allowInvalidServerCertificate = value;
  }
  public resetAllowInvalidServerCertificate() {
    this._allowInvalidServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInvalidServerCertificateInput() {
    return this._allowInvalidServerCertificate;
  }

  // allow_personal_vpns - computed: true, optional: true, required: false
  private _allowPersonalVpns?: boolean | cdktf.IResolvable; 
  public get allowPersonalVpns() {
    return this.getBooleanAttribute('allow_personal_vpns');
  }
  public set allowPersonalVpns(value: boolean | cdktf.IResolvable) {
    this._allowPersonalVpns = value;
  }
  public resetAllowPersonalVpns() {
    this._allowPersonalVpns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPersonalVpnsInput() {
    return this._allowPersonalVpns;
  }

  // auth_before_user_logon - computed: true, optional: true, required: false
  private _authBeforeUserLogon?: boolean | cdktf.IResolvable; 
  public get authBeforeUserLogon() {
    return this.getBooleanAttribute('auth_before_user_logon');
  }
  public set authBeforeUserLogon(value: boolean | cdktf.IResolvable) {
    this._authBeforeUserLogon = value;
  }
  public resetAuthBeforeUserLogon() {
    this._authBeforeUserLogon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBeforeUserLogonInput() {
    return this._authBeforeUserLogon;
  }

  // available_vp_ns - computed: true, optional: true, required: false
  private _availableVpNs = new DataFortisaseEndpointConnectionProfilesAvailableVpNsList(this, "available_vp_ns", false);
  public get availableVpNs() {
    return this._availableVpNs;
  }
  public putAvailableVpNs(value: DataFortisaseEndpointConnectionProfilesAvailableVpNs[] | cdktf.IResolvable) {
    this._availableVpNs.internalValue = value;
  }
  public resetAvailableVpNs() {
    this._availableVpNs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableVpNsInput() {
    return this._availableVpNs.internalValue;
  }

  // connect_to_forti_sase - computed: true, optional: true, required: false
  private _connectToFortiSase?: string; 
  public get connectToFortiSase() {
    return this.getStringAttribute('connect_to_forti_sase');
  }
  public set connectToFortiSase(value: string) {
    this._connectToFortiSase = value;
  }
  public resetConnectToFortiSase() {
    this._connectToFortiSase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectToFortiSaseInput() {
    return this._connectToFortiSase;
  }

  // enable_invalid_server_cert_warning - computed: true, optional: true, required: false
  private _enableInvalidServerCertWarning?: string; 
  public get enableInvalidServerCertWarning() {
    return this.getStringAttribute('enable_invalid_server_cert_warning');
  }
  public set enableInvalidServerCertWarning(value: string) {
    this._enableInvalidServerCertWarning = value;
  }
  public resetEnableInvalidServerCertWarning() {
    this._enableInvalidServerCertWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInvalidServerCertWarningInput() {
    return this._enableInvalidServerCertWarning;
  }

  // endpoint_on_net_bypass - computed: true, optional: true, required: false
  private _endpointOnNetBypass?: boolean | cdktf.IResolvable; 
  public get endpointOnNetBypass() {
    return this.getBooleanAttribute('endpoint_on_net_bypass');
  }
  public set endpointOnNetBypass(value: boolean | cdktf.IResolvable) {
    this._endpointOnNetBypass = value;
  }
  public resetEndpointOnNetBypass() {
    this._endpointOnNetBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointOnNetBypassInput() {
    return this._endpointOnNetBypass;
  }

  // lockdown - computed: true, optional: true, required: false
  private _lockdown = new DataFortisaseEndpointConnectionProfilesLockdownOutputReference(this, "lockdown");
  public get lockdown() {
    return this._lockdown;
  }
  public putLockdown(value: DataFortisaseEndpointConnectionProfilesLockdown) {
    this._lockdown.internalValue = value;
  }
  public resetLockdown() {
    this._lockdown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockdownInput() {
    return this._lockdown.internalValue;
  }

  // mtu_size - computed: true, optional: true, required: false
  private _mtuSize?: number; 
  public get mtuSize() {
    return this.getNumberAttribute('mtu_size');
  }
  public set mtuSize(value: number) {
    this._mtuSize = value;
  }
  public resetMtuSize() {
    this._mtuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuSizeInput() {
    return this._mtuSize;
  }

  // off_net_split_tunnel - computed: true, optional: true, required: false
  private _offNetSplitTunnel = new DataFortisaseEndpointConnectionProfilesOffNetSplitTunnelOutputReference(this, "off_net_split_tunnel");
  public get offNetSplitTunnel() {
    return this._offNetSplitTunnel;
  }
  public putOffNetSplitTunnel(value: DataFortisaseEndpointConnectionProfilesOffNetSplitTunnel) {
    this._offNetSplitTunnel.internalValue = value;
  }
  public resetOffNetSplitTunnel() {
    this._offNetSplitTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offNetSplitTunnelInput() {
    return this._offNetSplitTunnel.internalValue;
  }

  // on_fabric_rule_set - computed: true, optional: true, required: false
  private _onFabricRuleSet = new DataFortisaseEndpointConnectionProfilesOnFabricRuleSetOutputReference(this, "on_fabric_rule_set");
  public get onFabricRuleSet() {
    return this._onFabricRuleSet;
  }
  public putOnFabricRuleSet(value: DataFortisaseEndpointConnectionProfilesOnFabricRuleSet) {
    this._onFabricRuleSet.internalValue = value;
  }
  public resetOnFabricRuleSet() {
    this._onFabricRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFabricRuleSetInput() {
    return this._onFabricRuleSet.internalValue;
  }

  // pre_logon - computed: true, optional: true, required: false
  private _preLogon = new DataFortisaseEndpointConnectionProfilesPreLogonOutputReference(this, "pre_logon");
  public get preLogon() {
    return this._preLogon;
  }
  public putPreLogon(value: DataFortisaseEndpointConnectionProfilesPreLogon) {
    this._preLogon.internalValue = value;
  }
  public resetPreLogon() {
    this._preLogon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preLogonInput() {
    return this._preLogon.internalValue;
  }

  // preferred_dtls_tunnel - computed: true, optional: true, required: false
  private _preferredDtlsTunnel?: string; 
  public get preferredDtlsTunnel() {
    return this.getStringAttribute('preferred_dtls_tunnel');
  }
  public set preferredDtlsTunnel(value: string) {
    this._preferredDtlsTunnel = value;
  }
  public resetPreferredDtlsTunnel() {
    this._preferredDtlsTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDtlsTunnelInput() {
    return this._preferredDtlsTunnel;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // secure_internet_access - computed: true, optional: true, required: false
  private _secureInternetAccess = new DataFortisaseEndpointConnectionProfilesSecureInternetAccessOutputReference(this, "secure_internet_access");
  public get secureInternetAccess() {
    return this._secureInternetAccess;
  }
  public putSecureInternetAccess(value: DataFortisaseEndpointConnectionProfilesSecureInternetAccess) {
    this._secureInternetAccess.internalValue = value;
  }
  public resetSecureInternetAccess() {
    this._secureInternetAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInternetAccessInput() {
    return this._secureInternetAccess.internalValue;
  }

  // show_disconnect_btn - computed: true, optional: true, required: false
  private _showDisconnectBtn?: string; 
  public get showDisconnectBtn() {
    return this.getStringAttribute('show_disconnect_btn');
  }
  public set showDisconnectBtn(value: string) {
    this._showDisconnectBtn = value;
  }
  public resetShowDisconnectBtn() {
    this._showDisconnectBtn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDisconnectBtnInput() {
    return this._showDisconnectBtn;
  }

  // split_tunnel - computed: true, optional: true, required: false
  private _splitTunnel = new DataFortisaseEndpointConnectionProfilesSplitTunnelOutputReference(this, "split_tunnel");
  public get splitTunnel() {
    return this._splitTunnel;
  }
  public putSplitTunnel(value: DataFortisaseEndpointConnectionProfilesSplitTunnel) {
    this._splitTunnel.internalValue = value;
  }
  public resetSplitTunnel() {
    this._splitTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelInput() {
    return this._splitTunnel.internalValue;
  }

  // use_gui_saml_auth - computed: true, optional: true, required: false
  private _useGuiSamlAuth?: string; 
  public get useGuiSamlAuth() {
    return this.getStringAttribute('use_gui_saml_auth');
  }
  public set useGuiSamlAuth(value: string) {
    this._useGuiSamlAuth = value;
  }
  public resetUseGuiSamlAuth() {
    this._useGuiSamlAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGuiSamlAuthInput() {
    return this._useGuiSamlAuth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_invalid_server_certificate: cdktf.stringToTerraform(this._allowInvalidServerCertificate),
      allow_personal_vpns: cdktf.booleanToTerraform(this._allowPersonalVpns),
      auth_before_user_logon: cdktf.booleanToTerraform(this._authBeforeUserLogon),
      available_vp_ns: cdktf.listMapper(dataFortisaseEndpointConnectionProfilesAvailableVpNsToTerraform, false)(this._availableVpNs.internalValue),
      connect_to_forti_sase: cdktf.stringToTerraform(this._connectToFortiSase),
      enable_invalid_server_cert_warning: cdktf.stringToTerraform(this._enableInvalidServerCertWarning),
      endpoint_on_net_bypass: cdktf.booleanToTerraform(this._endpointOnNetBypass),
      lockdown: dataFortisaseEndpointConnectionProfilesLockdownToTerraform(this._lockdown.internalValue),
      mtu_size: cdktf.numberToTerraform(this._mtuSize),
      off_net_split_tunnel: dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelToTerraform(this._offNetSplitTunnel.internalValue),
      on_fabric_rule_set: dataFortisaseEndpointConnectionProfilesOnFabricRuleSetToTerraform(this._onFabricRuleSet.internalValue),
      pre_logon: dataFortisaseEndpointConnectionProfilesPreLogonToTerraform(this._preLogon.internalValue),
      preferred_dtls_tunnel: cdktf.stringToTerraform(this._preferredDtlsTunnel),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      secure_internet_access: dataFortisaseEndpointConnectionProfilesSecureInternetAccessToTerraform(this._secureInternetAccess.internalValue),
      show_disconnect_btn: cdktf.stringToTerraform(this._showDisconnectBtn),
      split_tunnel: dataFortisaseEndpointConnectionProfilesSplitTunnelToTerraform(this._splitTunnel.internalValue),
      use_gui_saml_auth: cdktf.stringToTerraform(this._useGuiSamlAuth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_invalid_server_certificate: {
        value: cdktf.stringToHclTerraform(this._allowInvalidServerCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_personal_vpns: {
        value: cdktf.booleanToHclTerraform(this._allowPersonalVpns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_before_user_logon: {
        value: cdktf.booleanToHclTerraform(this._authBeforeUserLogon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      available_vp_ns: {
        value: cdktf.listMapperHcl(dataFortisaseEndpointConnectionProfilesAvailableVpNsToHclTerraform, false)(this._availableVpNs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseEndpointConnectionProfilesAvailableVpNsList",
      },
      connect_to_forti_sase: {
        value: cdktf.stringToHclTerraform(this._connectToFortiSase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_invalid_server_cert_warning: {
        value: cdktf.stringToHclTerraform(this._enableInvalidServerCertWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_on_net_bypass: {
        value: cdktf.booleanToHclTerraform(this._endpointOnNetBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lockdown: {
        value: dataFortisaseEndpointConnectionProfilesLockdownToHclTerraform(this._lockdown.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointConnectionProfilesLockdown",
      },
      mtu_size: {
        value: cdktf.numberToHclTerraform(this._mtuSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      off_net_split_tunnel: {
        value: dataFortisaseEndpointConnectionProfilesOffNetSplitTunnelToHclTerraform(this._offNetSplitTunnel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointConnectionProfilesOffNetSplitTunnel",
      },
      on_fabric_rule_set: {
        value: dataFortisaseEndpointConnectionProfilesOnFabricRuleSetToHclTerraform(this._onFabricRuleSet.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointConnectionProfilesOnFabricRuleSet",
      },
      pre_logon: {
        value: dataFortisaseEndpointConnectionProfilesPreLogonToHclTerraform(this._preLogon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointConnectionProfilesPreLogon",
      },
      preferred_dtls_tunnel: {
        value: cdktf.stringToHclTerraform(this._preferredDtlsTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_internet_access: {
        value: dataFortisaseEndpointConnectionProfilesSecureInternetAccessToHclTerraform(this._secureInternetAccess.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointConnectionProfilesSecureInternetAccess",
      },
      show_disconnect_btn: {
        value: cdktf.stringToHclTerraform(this._showDisconnectBtn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_tunnel: {
        value: dataFortisaseEndpointConnectionProfilesSplitTunnelToHclTerraform(this._splitTunnel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointConnectionProfilesSplitTunnel",
      },
      use_gui_saml_auth: {
        value: cdktf.stringToHclTerraform(this._useGuiSamlAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
