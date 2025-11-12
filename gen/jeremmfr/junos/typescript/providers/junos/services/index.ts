// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clean supported lines when destroy this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#clean_on_destroy Services#clean_on_destroy}
  */
  readonly cleanOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * advanced_anti_malware block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#advanced_anti_malware Services#advanced_anti_malware}
  */
  readonly advancedAntiMalware?: ServicesAdvancedAntiMalware;
  /**
  * application_identification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#application_identification Services#application_identification}
  */
  readonly applicationIdentification?: ServicesApplicationIdentification;
  /**
  * security_intelligence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#security_intelligence Services#security_intelligence}
  */
  readonly securityIntelligence?: ServicesSecurityIntelligence;
  /**
  * user_identification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#user_identification Services#user_identification}
  */
  readonly userIdentification?: ServicesUserIdentification;
}
export interface ServicesAdvancedAntiMalwareConnection {
  /**
  * Authentication TLS profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#auth_tls_profile Services#auth_tls_profile}
  */
  readonly authTlsProfile?: string;
  /**
  * Proxy profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#proxy_profile Services#proxy_profile}
  */
  readonly proxyProfile?: string;
  /**
  * The source ip for connecting to the cloud server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#source_address Services#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * The source interface for connecting to the cloud server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#source_interface Services#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * The url of the cloud server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#url Services#url}
  */
  readonly url?: string;
}

export function servicesAdvancedAntiMalwareConnectionToTerraform(struct?: ServicesAdvancedAntiMalwareConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_tls_profile: cdktf.stringToTerraform(struct!.authTlsProfile),
    proxy_profile: cdktf.stringToTerraform(struct!.proxyProfile),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function servicesAdvancedAntiMalwareConnectionToHclTerraform(struct?: ServicesAdvancedAntiMalwareConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_tls_profile: {
      value: cdktf.stringToHclTerraform(struct!.authTlsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_profile: {
      value: cdktf.stringToHclTerraform(struct!.proxyProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesAdvancedAntiMalwareConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesAdvancedAntiMalwareConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authTlsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.authTlsProfile = this._authTlsProfile;
    }
    if (this._proxyProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProfile = this._proxyProfile;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesAdvancedAntiMalwareConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authTlsProfile = undefined;
      this._proxyProfile = undefined;
      this._sourceAddress = undefined;
      this._sourceInterface = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authTlsProfile = value.authTlsProfile;
      this._proxyProfile = value.proxyProfile;
      this._sourceAddress = value.sourceAddress;
      this._sourceInterface = value.sourceInterface;
      this._url = value.url;
    }
  }

  // auth_tls_profile - computed: true, optional: true, required: false
  private _authTlsProfile?: string; 
  public get authTlsProfile() {
    return this.getStringAttribute('auth_tls_profile');
  }
  public set authTlsProfile(value: string) {
    this._authTlsProfile = value;
  }
  public resetAuthTlsProfile() {
    this._authTlsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTlsProfileInput() {
    return this._authTlsProfile;
  }

  // proxy_profile - computed: false, optional: true, required: false
  private _proxyProfile?: string; 
  public get proxyProfile() {
    return this.getStringAttribute('proxy_profile');
  }
  public set proxyProfile(value: string) {
    this._proxyProfile = value;
  }
  public resetProxyProfile() {
    this._proxyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProfileInput() {
    return this._proxyProfile;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ServicesAdvancedAntiMalwareDefaultPolicy {
  /**
  * Logging option for Advanced Anti-malware blacklist hit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#blacklist_notification_log Services#blacklist_notification_log}
  */
  readonly blacklistNotificationLog?: boolean | cdktf.IResolvable;
  /**
  * Logging option for Advanced Anti-malware action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#default_notification_log Services#default_notification_log}
  */
  readonly defaultNotificationLog?: boolean | cdktf.IResolvable;
  /**
  * Notification action taken for fallback action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#fallback_options_action Services#fallback_options_action}
  */
  readonly fallbackOptionsAction?: string;
  /**
  * Logging option for Advanced Anti-malware fallback action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#fallback_options_notification_log Services#fallback_options_notification_log}
  */
  readonly fallbackOptionsNotificationLog?: boolean | cdktf.IResolvable;
  /**
  * Action taken for contents with verdict meet threshold for HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#http_action Services#http_action}
  */
  readonly httpAction?: string;
  /**
  * File name for http response to client notification action taken for contents with verdict meet threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#http_client_notify_file Services#http_client_notify_file}
  */
  readonly httpClientNotifyFile?: string;
  /**
  * Block message to client notification action taken for contents with verdict meet threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#http_client_notify_message Services#http_client_notify_message}
  */
  readonly httpClientNotifyMessage?: string;
  /**
  * Redirect url to client notification action taken for contents with verdict meet threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#http_client_notify_redirect_url Services#http_client_notify_redirect_url}
  */
  readonly httpClientNotifyRedirectUrl?: string;
  /**
  * Action taken for contents with verdict unknown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#http_file_verdict_unknown Services#http_file_verdict_unknown}
  */
  readonly httpFileVerdictUnknown?: string;
  /**
  * Advanced Anti-malware inspection-profile name for HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#http_inspection_profile Services#http_inspection_profile}
  */
  readonly httpInspectionProfile?: string;
  /**
  * Logging option for Advanced Anti-malware actions for HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#http_notification_log Services#http_notification_log}
  */
  readonly httpNotificationLog?: boolean | cdktf.IResolvable;
  /**
  * Advanced Anti-malware inspection-profile name for IMAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#imap_inspection_profile Services#imap_inspection_profile}
  */
  readonly imapInspectionProfile?: string;
  /**
  * Logging option for Advanced Anti-malware actions for IMAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#imap_notification_log Services#imap_notification_log}
  */
  readonly imapNotificationLog?: boolean | cdktf.IResolvable;
  /**
  * Advanced Anti-malware inspection-profile name for SMTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#smtp_inspection_profile Services#smtp_inspection_profile}
  */
  readonly smtpInspectionProfile?: string;
  /**
  * Logging option for Advanced Anti-malware actions for SMTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#smtp_notification_log Services#smtp_notification_log}
  */
  readonly smtpNotificationLog?: boolean | cdktf.IResolvable;
  /**
  * Verdict threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#verdict_threshold Services#verdict_threshold}
  */
  readonly verdictThreshold?: string;
  /**
  * Logging option for Advanced Anti-malware whitelist hit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#whitelist_notification_log Services#whitelist_notification_log}
  */
  readonly whitelistNotificationLog?: boolean | cdktf.IResolvable;
}

export function servicesAdvancedAntiMalwareDefaultPolicyToTerraform(struct?: ServicesAdvancedAntiMalwareDefaultPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blacklist_notification_log: cdktf.booleanToTerraform(struct!.blacklistNotificationLog),
    default_notification_log: cdktf.booleanToTerraform(struct!.defaultNotificationLog),
    fallback_options_action: cdktf.stringToTerraform(struct!.fallbackOptionsAction),
    fallback_options_notification_log: cdktf.booleanToTerraform(struct!.fallbackOptionsNotificationLog),
    http_action: cdktf.stringToTerraform(struct!.httpAction),
    http_client_notify_file: cdktf.stringToTerraform(struct!.httpClientNotifyFile),
    http_client_notify_message: cdktf.stringToTerraform(struct!.httpClientNotifyMessage),
    http_client_notify_redirect_url: cdktf.stringToTerraform(struct!.httpClientNotifyRedirectUrl),
    http_file_verdict_unknown: cdktf.stringToTerraform(struct!.httpFileVerdictUnknown),
    http_inspection_profile: cdktf.stringToTerraform(struct!.httpInspectionProfile),
    http_notification_log: cdktf.booleanToTerraform(struct!.httpNotificationLog),
    imap_inspection_profile: cdktf.stringToTerraform(struct!.imapInspectionProfile),
    imap_notification_log: cdktf.booleanToTerraform(struct!.imapNotificationLog),
    smtp_inspection_profile: cdktf.stringToTerraform(struct!.smtpInspectionProfile),
    smtp_notification_log: cdktf.booleanToTerraform(struct!.smtpNotificationLog),
    verdict_threshold: cdktf.stringToTerraform(struct!.verdictThreshold),
    whitelist_notification_log: cdktf.booleanToTerraform(struct!.whitelistNotificationLog),
  }
}


export function servicesAdvancedAntiMalwareDefaultPolicyToHclTerraform(struct?: ServicesAdvancedAntiMalwareDefaultPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blacklist_notification_log: {
      value: cdktf.booleanToHclTerraform(struct!.blacklistNotificationLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_notification_log: {
      value: cdktf.booleanToHclTerraform(struct!.defaultNotificationLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_options_action: {
      value: cdktf.stringToHclTerraform(struct!.fallbackOptionsAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fallback_options_notification_log: {
      value: cdktf.booleanToHclTerraform(struct!.fallbackOptionsNotificationLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_action: {
      value: cdktf.stringToHclTerraform(struct!.httpAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_client_notify_file: {
      value: cdktf.stringToHclTerraform(struct!.httpClientNotifyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_client_notify_message: {
      value: cdktf.stringToHclTerraform(struct!.httpClientNotifyMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_client_notify_redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.httpClientNotifyRedirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_file_verdict_unknown: {
      value: cdktf.stringToHclTerraform(struct!.httpFileVerdictUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_inspection_profile: {
      value: cdktf.stringToHclTerraform(struct!.httpInspectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_notification_log: {
      value: cdktf.booleanToHclTerraform(struct!.httpNotificationLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    imap_inspection_profile: {
      value: cdktf.stringToHclTerraform(struct!.imapInspectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imap_notification_log: {
      value: cdktf.booleanToHclTerraform(struct!.imapNotificationLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    smtp_inspection_profile: {
      value: cdktf.stringToHclTerraform(struct!.smtpInspectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_notification_log: {
      value: cdktf.booleanToHclTerraform(struct!.smtpNotificationLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verdict_threshold: {
      value: cdktf.stringToHclTerraform(struct!.verdictThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelist_notification_log: {
      value: cdktf.booleanToHclTerraform(struct!.whitelistNotificationLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesAdvancedAntiMalwareDefaultPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesAdvancedAntiMalwareDefaultPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blacklistNotificationLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistNotificationLog = this._blacklistNotificationLog;
    }
    if (this._defaultNotificationLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNotificationLog = this._defaultNotificationLog;
    }
    if (this._fallbackOptionsAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackOptionsAction = this._fallbackOptionsAction;
    }
    if (this._fallbackOptionsNotificationLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackOptionsNotificationLog = this._fallbackOptionsNotificationLog;
    }
    if (this._httpAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAction = this._httpAction;
    }
    if (this._httpClientNotifyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpClientNotifyFile = this._httpClientNotifyFile;
    }
    if (this._httpClientNotifyMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpClientNotifyMessage = this._httpClientNotifyMessage;
    }
    if (this._httpClientNotifyRedirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpClientNotifyRedirectUrl = this._httpClientNotifyRedirectUrl;
    }
    if (this._httpFileVerdictUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFileVerdictUnknown = this._httpFileVerdictUnknown;
    }
    if (this._httpInspectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpInspectionProfile = this._httpInspectionProfile;
    }
    if (this._httpNotificationLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpNotificationLog = this._httpNotificationLog;
    }
    if (this._imapInspectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapInspectionProfile = this._imapInspectionProfile;
    }
    if (this._imapNotificationLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapNotificationLog = this._imapNotificationLog;
    }
    if (this._smtpInspectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpInspectionProfile = this._smtpInspectionProfile;
    }
    if (this._smtpNotificationLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpNotificationLog = this._smtpNotificationLog;
    }
    if (this._verdictThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.verdictThreshold = this._verdictThreshold;
    }
    if (this._whitelistNotificationLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistNotificationLog = this._whitelistNotificationLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesAdvancedAntiMalwareDefaultPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blacklistNotificationLog = undefined;
      this._defaultNotificationLog = undefined;
      this._fallbackOptionsAction = undefined;
      this._fallbackOptionsNotificationLog = undefined;
      this._httpAction = undefined;
      this._httpClientNotifyFile = undefined;
      this._httpClientNotifyMessage = undefined;
      this._httpClientNotifyRedirectUrl = undefined;
      this._httpFileVerdictUnknown = undefined;
      this._httpInspectionProfile = undefined;
      this._httpNotificationLog = undefined;
      this._imapInspectionProfile = undefined;
      this._imapNotificationLog = undefined;
      this._smtpInspectionProfile = undefined;
      this._smtpNotificationLog = undefined;
      this._verdictThreshold = undefined;
      this._whitelistNotificationLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blacklistNotificationLog = value.blacklistNotificationLog;
      this._defaultNotificationLog = value.defaultNotificationLog;
      this._fallbackOptionsAction = value.fallbackOptionsAction;
      this._fallbackOptionsNotificationLog = value.fallbackOptionsNotificationLog;
      this._httpAction = value.httpAction;
      this._httpClientNotifyFile = value.httpClientNotifyFile;
      this._httpClientNotifyMessage = value.httpClientNotifyMessage;
      this._httpClientNotifyRedirectUrl = value.httpClientNotifyRedirectUrl;
      this._httpFileVerdictUnknown = value.httpFileVerdictUnknown;
      this._httpInspectionProfile = value.httpInspectionProfile;
      this._httpNotificationLog = value.httpNotificationLog;
      this._imapInspectionProfile = value.imapInspectionProfile;
      this._imapNotificationLog = value.imapNotificationLog;
      this._smtpInspectionProfile = value.smtpInspectionProfile;
      this._smtpNotificationLog = value.smtpNotificationLog;
      this._verdictThreshold = value.verdictThreshold;
      this._whitelistNotificationLog = value.whitelistNotificationLog;
    }
  }

  // blacklist_notification_log - computed: false, optional: true, required: false
  private _blacklistNotificationLog?: boolean | cdktf.IResolvable; 
  public get blacklistNotificationLog() {
    return this.getBooleanAttribute('blacklist_notification_log');
  }
  public set blacklistNotificationLog(value: boolean | cdktf.IResolvable) {
    this._blacklistNotificationLog = value;
  }
  public resetBlacklistNotificationLog() {
    this._blacklistNotificationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistNotificationLogInput() {
    return this._blacklistNotificationLog;
  }

  // default_notification_log - computed: false, optional: true, required: false
  private _defaultNotificationLog?: boolean | cdktf.IResolvable; 
  public get defaultNotificationLog() {
    return this.getBooleanAttribute('default_notification_log');
  }
  public set defaultNotificationLog(value: boolean | cdktf.IResolvable) {
    this._defaultNotificationLog = value;
  }
  public resetDefaultNotificationLog() {
    this._defaultNotificationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNotificationLogInput() {
    return this._defaultNotificationLog;
  }

  // fallback_options_action - computed: false, optional: true, required: false
  private _fallbackOptionsAction?: string; 
  public get fallbackOptionsAction() {
    return this.getStringAttribute('fallback_options_action');
  }
  public set fallbackOptionsAction(value: string) {
    this._fallbackOptionsAction = value;
  }
  public resetFallbackOptionsAction() {
    this._fallbackOptionsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackOptionsActionInput() {
    return this._fallbackOptionsAction;
  }

  // fallback_options_notification_log - computed: false, optional: true, required: false
  private _fallbackOptionsNotificationLog?: boolean | cdktf.IResolvable; 
  public get fallbackOptionsNotificationLog() {
    return this.getBooleanAttribute('fallback_options_notification_log');
  }
  public set fallbackOptionsNotificationLog(value: boolean | cdktf.IResolvable) {
    this._fallbackOptionsNotificationLog = value;
  }
  public resetFallbackOptionsNotificationLog() {
    this._fallbackOptionsNotificationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackOptionsNotificationLogInput() {
    return this._fallbackOptionsNotificationLog;
  }

  // http_action - computed: false, optional: true, required: false
  private _httpAction?: string; 
  public get httpAction() {
    return this.getStringAttribute('http_action');
  }
  public set httpAction(value: string) {
    this._httpAction = value;
  }
  public resetHttpAction() {
    this._httpAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpActionInput() {
    return this._httpAction;
  }

  // http_client_notify_file - computed: false, optional: true, required: false
  private _httpClientNotifyFile?: string; 
  public get httpClientNotifyFile() {
    return this.getStringAttribute('http_client_notify_file');
  }
  public set httpClientNotifyFile(value: string) {
    this._httpClientNotifyFile = value;
  }
  public resetHttpClientNotifyFile() {
    this._httpClientNotifyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientNotifyFileInput() {
    return this._httpClientNotifyFile;
  }

  // http_client_notify_message - computed: false, optional: true, required: false
  private _httpClientNotifyMessage?: string; 
  public get httpClientNotifyMessage() {
    return this.getStringAttribute('http_client_notify_message');
  }
  public set httpClientNotifyMessage(value: string) {
    this._httpClientNotifyMessage = value;
  }
  public resetHttpClientNotifyMessage() {
    this._httpClientNotifyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientNotifyMessageInput() {
    return this._httpClientNotifyMessage;
  }

  // http_client_notify_redirect_url - computed: false, optional: true, required: false
  private _httpClientNotifyRedirectUrl?: string; 
  public get httpClientNotifyRedirectUrl() {
    return this.getStringAttribute('http_client_notify_redirect_url');
  }
  public set httpClientNotifyRedirectUrl(value: string) {
    this._httpClientNotifyRedirectUrl = value;
  }
  public resetHttpClientNotifyRedirectUrl() {
    this._httpClientNotifyRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientNotifyRedirectUrlInput() {
    return this._httpClientNotifyRedirectUrl;
  }

  // http_file_verdict_unknown - computed: false, optional: true, required: false
  private _httpFileVerdictUnknown?: string; 
  public get httpFileVerdictUnknown() {
    return this.getStringAttribute('http_file_verdict_unknown');
  }
  public set httpFileVerdictUnknown(value: string) {
    this._httpFileVerdictUnknown = value;
  }
  public resetHttpFileVerdictUnknown() {
    this._httpFileVerdictUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFileVerdictUnknownInput() {
    return this._httpFileVerdictUnknown;
  }

  // http_inspection_profile - computed: false, optional: true, required: false
  private _httpInspectionProfile?: string; 
  public get httpInspectionProfile() {
    return this.getStringAttribute('http_inspection_profile');
  }
  public set httpInspectionProfile(value: string) {
    this._httpInspectionProfile = value;
  }
  public resetHttpInspectionProfile() {
    this._httpInspectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInspectionProfileInput() {
    return this._httpInspectionProfile;
  }

  // http_notification_log - computed: false, optional: true, required: false
  private _httpNotificationLog?: boolean | cdktf.IResolvable; 
  public get httpNotificationLog() {
    return this.getBooleanAttribute('http_notification_log');
  }
  public set httpNotificationLog(value: boolean | cdktf.IResolvable) {
    this._httpNotificationLog = value;
  }
  public resetHttpNotificationLog() {
    this._httpNotificationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpNotificationLogInput() {
    return this._httpNotificationLog;
  }

  // imap_inspection_profile - computed: false, optional: true, required: false
  private _imapInspectionProfile?: string; 
  public get imapInspectionProfile() {
    return this.getStringAttribute('imap_inspection_profile');
  }
  public set imapInspectionProfile(value: string) {
    this._imapInspectionProfile = value;
  }
  public resetImapInspectionProfile() {
    this._imapInspectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapInspectionProfileInput() {
    return this._imapInspectionProfile;
  }

  // imap_notification_log - computed: false, optional: true, required: false
  private _imapNotificationLog?: boolean | cdktf.IResolvable; 
  public get imapNotificationLog() {
    return this.getBooleanAttribute('imap_notification_log');
  }
  public set imapNotificationLog(value: boolean | cdktf.IResolvable) {
    this._imapNotificationLog = value;
  }
  public resetImapNotificationLog() {
    this._imapNotificationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapNotificationLogInput() {
    return this._imapNotificationLog;
  }

  // smtp_inspection_profile - computed: false, optional: true, required: false
  private _smtpInspectionProfile?: string; 
  public get smtpInspectionProfile() {
    return this.getStringAttribute('smtp_inspection_profile');
  }
  public set smtpInspectionProfile(value: string) {
    this._smtpInspectionProfile = value;
  }
  public resetSmtpInspectionProfile() {
    this._smtpInspectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInspectionProfileInput() {
    return this._smtpInspectionProfile;
  }

  // smtp_notification_log - computed: false, optional: true, required: false
  private _smtpNotificationLog?: boolean | cdktf.IResolvable; 
  public get smtpNotificationLog() {
    return this.getBooleanAttribute('smtp_notification_log');
  }
  public set smtpNotificationLog(value: boolean | cdktf.IResolvable) {
    this._smtpNotificationLog = value;
  }
  public resetSmtpNotificationLog() {
    this._smtpNotificationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpNotificationLogInput() {
    return this._smtpNotificationLog;
  }

  // verdict_threshold - computed: false, optional: true, required: false
  private _verdictThreshold?: string; 
  public get verdictThreshold() {
    return this.getStringAttribute('verdict_threshold');
  }
  public set verdictThreshold(value: string) {
    this._verdictThreshold = value;
  }
  public resetVerdictThreshold() {
    this._verdictThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verdictThresholdInput() {
    return this._verdictThreshold;
  }

  // whitelist_notification_log - computed: false, optional: true, required: false
  private _whitelistNotificationLog?: boolean | cdktf.IResolvable; 
  public get whitelistNotificationLog() {
    return this.getBooleanAttribute('whitelist_notification_log');
  }
  public set whitelistNotificationLog(value: boolean | cdktf.IResolvable) {
    this._whitelistNotificationLog = value;
  }
  public resetWhitelistNotificationLog() {
    this._whitelistNotificationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistNotificationLogInput() {
    return this._whitelistNotificationLog;
  }
}
export interface ServicesAdvancedAntiMalware {
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#connection Services#connection}
  */
  readonly connection?: ServicesAdvancedAntiMalwareConnection;
  /**
  * default_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#default_policy Services#default_policy}
  */
  readonly defaultPolicy?: ServicesAdvancedAntiMalwareDefaultPolicy;
}

export function servicesAdvancedAntiMalwareToTerraform(struct?: ServicesAdvancedAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: servicesAdvancedAntiMalwareConnectionToTerraform(struct!.connection),
    default_policy: servicesAdvancedAntiMalwareDefaultPolicyToTerraform(struct!.defaultPolicy),
  }
}


export function servicesAdvancedAntiMalwareToHclTerraform(struct?: ServicesAdvancedAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: servicesAdvancedAntiMalwareConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesAdvancedAntiMalwareConnection",
    },
    default_policy: {
      value: servicesAdvancedAntiMalwareDefaultPolicyToHclTerraform(struct!.defaultPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesAdvancedAntiMalwareDefaultPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesAdvancedAntiMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesAdvancedAntiMalware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._defaultPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPolicy = this._defaultPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesAdvancedAntiMalware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connection.internalValue = undefined;
      this._defaultPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connection.internalValue = value.connection;
      this._defaultPolicy.internalValue = value.defaultPolicy;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new ServicesAdvancedAntiMalwareConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: ServicesAdvancedAntiMalwareConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // default_policy - computed: false, optional: true, required: false
  private _defaultPolicy = new ServicesAdvancedAntiMalwareDefaultPolicyOutputReference(this, "default_policy");
  public get defaultPolicy() {
    return this._defaultPolicy;
  }
  public putDefaultPolicy(value: ServicesAdvancedAntiMalwareDefaultPolicy) {
    this._defaultPolicy.internalValue = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy.internalValue;
  }
}
export interface ServicesApplicationIdentificationApplicationSystemCache {
  /**
  * Disable ASC for miscellaneous services APBR,...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#no_miscellaneous_services Services#no_miscellaneous_services}
  */
  readonly noMiscellaneousServices?: boolean | cdktf.IResolvable;
  /**
  * Enable ASC for security services (appfw, appqos, idp, skyatp..).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#security_services Services#security_services}
  */
  readonly securityServices?: boolean | cdktf.IResolvable;
}

export function servicesApplicationIdentificationApplicationSystemCacheToTerraform(struct?: ServicesApplicationIdentificationApplicationSystemCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_miscellaneous_services: cdktf.booleanToTerraform(struct!.noMiscellaneousServices),
    security_services: cdktf.booleanToTerraform(struct!.securityServices),
  }
}


export function servicesApplicationIdentificationApplicationSystemCacheToHclTerraform(struct?: ServicesApplicationIdentificationApplicationSystemCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_miscellaneous_services: {
      value: cdktf.booleanToHclTerraform(struct!.noMiscellaneousServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_services: {
      value: cdktf.booleanToHclTerraform(struct!.securityServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesApplicationIdentificationApplicationSystemCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesApplicationIdentificationApplicationSystemCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMiscellaneousServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMiscellaneousServices = this._noMiscellaneousServices;
    }
    if (this._securityServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityServices = this._securityServices;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesApplicationIdentificationApplicationSystemCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noMiscellaneousServices = undefined;
      this._securityServices = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noMiscellaneousServices = value.noMiscellaneousServices;
      this._securityServices = value.securityServices;
    }
  }

  // no_miscellaneous_services - computed: false, optional: true, required: false
  private _noMiscellaneousServices?: boolean | cdktf.IResolvable; 
  public get noMiscellaneousServices() {
    return this.getBooleanAttribute('no_miscellaneous_services');
  }
  public set noMiscellaneousServices(value: boolean | cdktf.IResolvable) {
    this._noMiscellaneousServices = value;
  }
  public resetNoMiscellaneousServices() {
    this._noMiscellaneousServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMiscellaneousServicesInput() {
    return this._noMiscellaneousServices;
  }

  // security_services - computed: false, optional: true, required: false
  private _securityServices?: boolean | cdktf.IResolvable; 
  public get securityServices() {
    return this.getBooleanAttribute('security_services');
  }
  public set securityServices(value: boolean | cdktf.IResolvable) {
    this._securityServices = value;
  }
  public resetSecurityServices() {
    this._securityServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityServicesInput() {
    return this._securityServices;
  }
}
export interface ServicesApplicationIdentificationDownload {
  /**
  * Attempt to download new application package (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#automatic_interval Services#automatic_interval}
  */
  readonly automaticInterval?: number;
  /**
  * Start time to scheduled download and update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#automatic_start_time Services#automatic_start_time}
  */
  readonly automaticStartTime?: string;
  /**
  * Disable server authentication for Application Signature download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#ignore_server_validation Services#ignore_server_validation}
  */
  readonly ignoreServerValidation?: boolean | cdktf.IResolvable;
  /**
  * Configure web proxy for Application signature download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#proxy_profile Services#proxy_profile}
  */
  readonly proxyProfile?: string;
  /**
  * URL for application package download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#url Services#url}
  */
  readonly url?: string;
}

export function servicesApplicationIdentificationDownloadToTerraform(struct?: ServicesApplicationIdentificationDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_interval: cdktf.numberToTerraform(struct!.automaticInterval),
    automatic_start_time: cdktf.stringToTerraform(struct!.automaticStartTime),
    ignore_server_validation: cdktf.booleanToTerraform(struct!.ignoreServerValidation),
    proxy_profile: cdktf.stringToTerraform(struct!.proxyProfile),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function servicesApplicationIdentificationDownloadToHclTerraform(struct?: ServicesApplicationIdentificationDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_interval: {
      value: cdktf.numberToHclTerraform(struct!.automaticInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    automatic_start_time: {
      value: cdktf.stringToHclTerraform(struct!.automaticStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_server_validation: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreServerValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_profile: {
      value: cdktf.stringToHclTerraform(struct!.proxyProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesApplicationIdentificationDownloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesApplicationIdentificationDownload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticInterval = this._automaticInterval;
    }
    if (this._automaticStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticStartTime = this._automaticStartTime;
    }
    if (this._ignoreServerValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreServerValidation = this._ignoreServerValidation;
    }
    if (this._proxyProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProfile = this._proxyProfile;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesApplicationIdentificationDownload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automaticInterval = undefined;
      this._automaticStartTime = undefined;
      this._ignoreServerValidation = undefined;
      this._proxyProfile = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automaticInterval = value.automaticInterval;
      this._automaticStartTime = value.automaticStartTime;
      this._ignoreServerValidation = value.ignoreServerValidation;
      this._proxyProfile = value.proxyProfile;
      this._url = value.url;
    }
  }

  // automatic_interval - computed: false, optional: true, required: false
  private _automaticInterval?: number; 
  public get automaticInterval() {
    return this.getNumberAttribute('automatic_interval');
  }
  public set automaticInterval(value: number) {
    this._automaticInterval = value;
  }
  public resetAutomaticInterval() {
    this._automaticInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticIntervalInput() {
    return this._automaticInterval;
  }

  // automatic_start_time - computed: false, optional: true, required: false
  private _automaticStartTime?: string; 
  public get automaticStartTime() {
    return this.getStringAttribute('automatic_start_time');
  }
  public set automaticStartTime(value: string) {
    this._automaticStartTime = value;
  }
  public resetAutomaticStartTime() {
    this._automaticStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticStartTimeInput() {
    return this._automaticStartTime;
  }

  // ignore_server_validation - computed: false, optional: true, required: false
  private _ignoreServerValidation?: boolean | cdktf.IResolvable; 
  public get ignoreServerValidation() {
    return this.getBooleanAttribute('ignore_server_validation');
  }
  public set ignoreServerValidation(value: boolean | cdktf.IResolvable) {
    this._ignoreServerValidation = value;
  }
  public resetIgnoreServerValidation() {
    this._ignoreServerValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreServerValidationInput() {
    return this._ignoreServerValidation;
  }

  // proxy_profile - computed: false, optional: true, required: false
  private _proxyProfile?: string; 
  public get proxyProfile() {
    return this.getStringAttribute('proxy_profile');
  }
  public set proxyProfile(value: string) {
    this._proxyProfile = value;
  }
  public resetProxyProfile() {
    this._proxyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProfileInput() {
    return this._proxyProfile;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ServicesApplicationIdentificationEnablePerformanceMode {
  /**
  * Set the maximum packet threshold for DPI performance mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#max_packet_threshold Services#max_packet_threshold}
  */
  readonly maxPacketThreshold?: number;
}

export function servicesApplicationIdentificationEnablePerformanceModeToTerraform(struct?: ServicesApplicationIdentificationEnablePerformanceMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_packet_threshold: cdktf.numberToTerraform(struct!.maxPacketThreshold),
  }
}


export function servicesApplicationIdentificationEnablePerformanceModeToHclTerraform(struct?: ServicesApplicationIdentificationEnablePerformanceMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_packet_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxPacketThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesApplicationIdentificationEnablePerformanceModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesApplicationIdentificationEnablePerformanceMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPacketThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPacketThreshold = this._maxPacketThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesApplicationIdentificationEnablePerformanceMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPacketThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPacketThreshold = value.maxPacketThreshold;
    }
  }

  // max_packet_threshold - computed: false, optional: true, required: false
  private _maxPacketThreshold?: number; 
  public get maxPacketThreshold() {
    return this.getNumberAttribute('max_packet_threshold');
  }
  public set maxPacketThreshold(value: number) {
    this._maxPacketThreshold = value;
  }
  public resetMaxPacketThreshold() {
    this._maxPacketThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketThresholdInput() {
    return this._maxPacketThreshold;
  }
}
export interface ServicesApplicationIdentificationInspectionLimitTcp {
  /**
  * TCP byte inspection limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#byte_limit Services#byte_limit}
  */
  readonly byteLimit?: number;
  /**
  * TCP packet inspection limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#packet_limit Services#packet_limit}
  */
  readonly packetLimit?: number;
}

export function servicesApplicationIdentificationInspectionLimitTcpToTerraform(struct?: ServicesApplicationIdentificationInspectionLimitTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_limit: cdktf.numberToTerraform(struct!.byteLimit),
    packet_limit: cdktf.numberToTerraform(struct!.packetLimit),
  }
}


export function servicesApplicationIdentificationInspectionLimitTcpToHclTerraform(struct?: ServicesApplicationIdentificationInspectionLimitTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byte_limit: {
      value: cdktf.numberToHclTerraform(struct!.byteLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_limit: {
      value: cdktf.numberToHclTerraform(struct!.packetLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesApplicationIdentificationInspectionLimitTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesApplicationIdentificationInspectionLimitTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteLimit = this._byteLimit;
    }
    if (this._packetLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLimit = this._packetLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesApplicationIdentificationInspectionLimitTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteLimit = undefined;
      this._packetLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byteLimit = value.byteLimit;
      this._packetLimit = value.packetLimit;
    }
  }

  // byte_limit - computed: false, optional: true, required: false
  private _byteLimit?: number; 
  public get byteLimit() {
    return this.getNumberAttribute('byte_limit');
  }
  public set byteLimit(value: number) {
    this._byteLimit = value;
  }
  public resetByteLimit() {
    this._byteLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteLimitInput() {
    return this._byteLimit;
  }

  // packet_limit - computed: false, optional: true, required: false
  private _packetLimit?: number; 
  public get packetLimit() {
    return this.getNumberAttribute('packet_limit');
  }
  public set packetLimit(value: number) {
    this._packetLimit = value;
  }
  public resetPacketLimit() {
    this._packetLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLimitInput() {
    return this._packetLimit;
  }
}
export interface ServicesApplicationIdentificationInspectionLimitUdp {
  /**
  * UDP byte inspection limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#byte_limit Services#byte_limit}
  */
  readonly byteLimit?: number;
  /**
  * UDP packet inspection limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#packet_limit Services#packet_limit}
  */
  readonly packetLimit?: number;
}

export function servicesApplicationIdentificationInspectionLimitUdpToTerraform(struct?: ServicesApplicationIdentificationInspectionLimitUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_limit: cdktf.numberToTerraform(struct!.byteLimit),
    packet_limit: cdktf.numberToTerraform(struct!.packetLimit),
  }
}


export function servicesApplicationIdentificationInspectionLimitUdpToHclTerraform(struct?: ServicesApplicationIdentificationInspectionLimitUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byte_limit: {
      value: cdktf.numberToHclTerraform(struct!.byteLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_limit: {
      value: cdktf.numberToHclTerraform(struct!.packetLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesApplicationIdentificationInspectionLimitUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesApplicationIdentificationInspectionLimitUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteLimit = this._byteLimit;
    }
    if (this._packetLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLimit = this._packetLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesApplicationIdentificationInspectionLimitUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteLimit = undefined;
      this._packetLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byteLimit = value.byteLimit;
      this._packetLimit = value.packetLimit;
    }
  }

  // byte_limit - computed: false, optional: true, required: false
  private _byteLimit?: number; 
  public get byteLimit() {
    return this.getNumberAttribute('byte_limit');
  }
  public set byteLimit(value: number) {
    this._byteLimit = value;
  }
  public resetByteLimit() {
    this._byteLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteLimitInput() {
    return this._byteLimit;
  }

  // packet_limit - computed: false, optional: true, required: false
  private _packetLimit?: number; 
  public get packetLimit() {
    return this.getNumberAttribute('packet_limit');
  }
  public set packetLimit(value: number) {
    this._packetLimit = value;
  }
  public resetPacketLimit() {
    this._packetLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLimitInput() {
    return this._packetLimit;
  }
}
export interface ServicesApplicationIdentification {
  /**
  * Application system cache entry lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#application_system_cache_timeout Services#application_system_cache_timeout}
  */
  readonly applicationSystemCacheTimeout?: number;
  /**
  * Global byte limit to offload AppID inspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#global_offload_byte_limit Services#global_offload_byte_limit}
  */
  readonly globalOffloadByteLimit?: number;
  /**
  * IMAP cache size, it will be effective only after next appid sigpack install.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#imap_cache_size Services#imap_cache_size}
  */
  readonly imapCacheSize?: number;
  /**
  * IMAP cache entry timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#imap_cache_timeout Services#imap_cache_timeout}
  */
  readonly imapCacheTimeout?: number;
  /**
  * Maximum amount of object cache memory JDPI can use (in MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#max_memory Services#max_memory}
  */
  readonly maxMemory?: number;
  /**
  * Number of transaction finals to terminate application classification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#max_transactions Services#max_transactions}
  */
  readonly maxTransactions?: number;
  /**
  * Enable Micro Apps identifcation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#micro_apps Services#micro_apps}
  */
  readonly microApps?: boolean | cdktf.IResolvable;
  /**
  * Disable storing AI result in application system cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#no_application_system_cache Services#no_application_system_cache}
  */
  readonly noApplicationSystemCache?: boolean | cdktf.IResolvable;
  /**
  * Configure application statistics information with collection interval (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#statistics_interval Services#statistics_interval}
  */
  readonly statisticsInterval?: number;
  /**
  * application_system_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#application_system_cache Services#application_system_cache}
  */
  readonly applicationSystemCache?: ServicesApplicationIdentificationApplicationSystemCache;
  /**
  * download block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#download Services#download}
  */
  readonly download?: ServicesApplicationIdentificationDownload;
  /**
  * enable_performance_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#enable_performance_mode Services#enable_performance_mode}
  */
  readonly enablePerformanceMode?: ServicesApplicationIdentificationEnablePerformanceMode;
  /**
  * inspection_limit_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#inspection_limit_tcp Services#inspection_limit_tcp}
  */
  readonly inspectionLimitTcp?: ServicesApplicationIdentificationInspectionLimitTcp;
  /**
  * inspection_limit_udp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#inspection_limit_udp Services#inspection_limit_udp}
  */
  readonly inspectionLimitUdp?: ServicesApplicationIdentificationInspectionLimitUdp;
}

export function servicesApplicationIdentificationToTerraform(struct?: ServicesApplicationIdentification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_system_cache_timeout: cdktf.numberToTerraform(struct!.applicationSystemCacheTimeout),
    global_offload_byte_limit: cdktf.numberToTerraform(struct!.globalOffloadByteLimit),
    imap_cache_size: cdktf.numberToTerraform(struct!.imapCacheSize),
    imap_cache_timeout: cdktf.numberToTerraform(struct!.imapCacheTimeout),
    max_memory: cdktf.numberToTerraform(struct!.maxMemory),
    max_transactions: cdktf.numberToTerraform(struct!.maxTransactions),
    micro_apps: cdktf.booleanToTerraform(struct!.microApps),
    no_application_system_cache: cdktf.booleanToTerraform(struct!.noApplicationSystemCache),
    statistics_interval: cdktf.numberToTerraform(struct!.statisticsInterval),
    application_system_cache: servicesApplicationIdentificationApplicationSystemCacheToTerraform(struct!.applicationSystemCache),
    download: servicesApplicationIdentificationDownloadToTerraform(struct!.download),
    enable_performance_mode: servicesApplicationIdentificationEnablePerformanceModeToTerraform(struct!.enablePerformanceMode),
    inspection_limit_tcp: servicesApplicationIdentificationInspectionLimitTcpToTerraform(struct!.inspectionLimitTcp),
    inspection_limit_udp: servicesApplicationIdentificationInspectionLimitUdpToTerraform(struct!.inspectionLimitUdp),
  }
}


export function servicesApplicationIdentificationToHclTerraform(struct?: ServicesApplicationIdentification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_system_cache_timeout: {
      value: cdktf.numberToHclTerraform(struct!.applicationSystemCacheTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_offload_byte_limit: {
      value: cdktf.numberToHclTerraform(struct!.globalOffloadByteLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imap_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.imapCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imap_cache_timeout: {
      value: cdktf.numberToHclTerraform(struct!.imapCacheTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory: {
      value: cdktf.numberToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_transactions: {
      value: cdktf.numberToHclTerraform(struct!.maxTransactions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    micro_apps: {
      value: cdktf.booleanToHclTerraform(struct!.microApps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_application_system_cache: {
      value: cdktf.booleanToHclTerraform(struct!.noApplicationSystemCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    statistics_interval: {
      value: cdktf.numberToHclTerraform(struct!.statisticsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    application_system_cache: {
      value: servicesApplicationIdentificationApplicationSystemCacheToHclTerraform(struct!.applicationSystemCache),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesApplicationIdentificationApplicationSystemCache",
    },
    download: {
      value: servicesApplicationIdentificationDownloadToHclTerraform(struct!.download),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesApplicationIdentificationDownload",
    },
    enable_performance_mode: {
      value: servicesApplicationIdentificationEnablePerformanceModeToHclTerraform(struct!.enablePerformanceMode),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesApplicationIdentificationEnablePerformanceMode",
    },
    inspection_limit_tcp: {
      value: servicesApplicationIdentificationInspectionLimitTcpToHclTerraform(struct!.inspectionLimitTcp),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesApplicationIdentificationInspectionLimitTcp",
    },
    inspection_limit_udp: {
      value: servicesApplicationIdentificationInspectionLimitUdpToHclTerraform(struct!.inspectionLimitUdp),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesApplicationIdentificationInspectionLimitUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesApplicationIdentificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesApplicationIdentification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationSystemCacheTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSystemCacheTimeout = this._applicationSystemCacheTimeout;
    }
    if (this._globalOffloadByteLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalOffloadByteLimit = this._globalOffloadByteLimit;
    }
    if (this._imapCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapCacheSize = this._imapCacheSize;
    }
    if (this._imapCacheTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapCacheTimeout = this._imapCacheTimeout;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._maxTransactions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTransactions = this._maxTransactions;
    }
    if (this._microApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.microApps = this._microApps;
    }
    if (this._noApplicationSystemCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.noApplicationSystemCache = this._noApplicationSystemCache;
    }
    if (this._statisticsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticsInterval = this._statisticsInterval;
    }
    if (this._applicationSystemCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSystemCache = this._applicationSystemCache?.internalValue;
    }
    if (this._download?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.download = this._download?.internalValue;
    }
    if (this._enablePerformanceMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePerformanceMode = this._enablePerformanceMode?.internalValue;
    }
    if (this._inspectionLimitTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionLimitTcp = this._inspectionLimitTcp?.internalValue;
    }
    if (this._inspectionLimitUdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionLimitUdp = this._inspectionLimitUdp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesApplicationIdentification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationSystemCacheTimeout = undefined;
      this._globalOffloadByteLimit = undefined;
      this._imapCacheSize = undefined;
      this._imapCacheTimeout = undefined;
      this._maxMemory = undefined;
      this._maxTransactions = undefined;
      this._microApps = undefined;
      this._noApplicationSystemCache = undefined;
      this._statisticsInterval = undefined;
      this._applicationSystemCache.internalValue = undefined;
      this._download.internalValue = undefined;
      this._enablePerformanceMode.internalValue = undefined;
      this._inspectionLimitTcp.internalValue = undefined;
      this._inspectionLimitUdp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationSystemCacheTimeout = value.applicationSystemCacheTimeout;
      this._globalOffloadByteLimit = value.globalOffloadByteLimit;
      this._imapCacheSize = value.imapCacheSize;
      this._imapCacheTimeout = value.imapCacheTimeout;
      this._maxMemory = value.maxMemory;
      this._maxTransactions = value.maxTransactions;
      this._microApps = value.microApps;
      this._noApplicationSystemCache = value.noApplicationSystemCache;
      this._statisticsInterval = value.statisticsInterval;
      this._applicationSystemCache.internalValue = value.applicationSystemCache;
      this._download.internalValue = value.download;
      this._enablePerformanceMode.internalValue = value.enablePerformanceMode;
      this._inspectionLimitTcp.internalValue = value.inspectionLimitTcp;
      this._inspectionLimitUdp.internalValue = value.inspectionLimitUdp;
    }
  }

  // application_system_cache_timeout - computed: false, optional: true, required: false
  private _applicationSystemCacheTimeout?: number; 
  public get applicationSystemCacheTimeout() {
    return this.getNumberAttribute('application_system_cache_timeout');
  }
  public set applicationSystemCacheTimeout(value: number) {
    this._applicationSystemCacheTimeout = value;
  }
  public resetApplicationSystemCacheTimeout() {
    this._applicationSystemCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSystemCacheTimeoutInput() {
    return this._applicationSystemCacheTimeout;
  }

  // global_offload_byte_limit - computed: false, optional: true, required: false
  private _globalOffloadByteLimit?: number; 
  public get globalOffloadByteLimit() {
    return this.getNumberAttribute('global_offload_byte_limit');
  }
  public set globalOffloadByteLimit(value: number) {
    this._globalOffloadByteLimit = value;
  }
  public resetGlobalOffloadByteLimit() {
    this._globalOffloadByteLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOffloadByteLimitInput() {
    return this._globalOffloadByteLimit;
  }

  // imap_cache_size - computed: false, optional: true, required: false
  private _imapCacheSize?: number; 
  public get imapCacheSize() {
    return this.getNumberAttribute('imap_cache_size');
  }
  public set imapCacheSize(value: number) {
    this._imapCacheSize = value;
  }
  public resetImapCacheSize() {
    this._imapCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapCacheSizeInput() {
    return this._imapCacheSize;
  }

  // imap_cache_timeout - computed: false, optional: true, required: false
  private _imapCacheTimeout?: number; 
  public get imapCacheTimeout() {
    return this.getNumberAttribute('imap_cache_timeout');
  }
  public set imapCacheTimeout(value: number) {
    this._imapCacheTimeout = value;
  }
  public resetImapCacheTimeout() {
    this._imapCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapCacheTimeoutInput() {
    return this._imapCacheTimeout;
  }

  // max_memory - computed: false, optional: true, required: false
  private _maxMemory?: number; 
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
  }
  public set maxMemory(value: number) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // max_transactions - computed: false, optional: true, required: false
  private _maxTransactions?: number; 
  public get maxTransactions() {
    return this.getNumberAttribute('max_transactions');
  }
  public set maxTransactions(value: number) {
    this._maxTransactions = value;
  }
  public resetMaxTransactions() {
    this._maxTransactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTransactionsInput() {
    return this._maxTransactions;
  }

  // micro_apps - computed: false, optional: true, required: false
  private _microApps?: boolean | cdktf.IResolvable; 
  public get microApps() {
    return this.getBooleanAttribute('micro_apps');
  }
  public set microApps(value: boolean | cdktf.IResolvable) {
    this._microApps = value;
  }
  public resetMicroApps() {
    this._microApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microAppsInput() {
    return this._microApps;
  }

  // no_application_system_cache - computed: false, optional: true, required: false
  private _noApplicationSystemCache?: boolean | cdktf.IResolvable; 
  public get noApplicationSystemCache() {
    return this.getBooleanAttribute('no_application_system_cache');
  }
  public set noApplicationSystemCache(value: boolean | cdktf.IResolvable) {
    this._noApplicationSystemCache = value;
  }
  public resetNoApplicationSystemCache() {
    this._noApplicationSystemCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noApplicationSystemCacheInput() {
    return this._noApplicationSystemCache;
  }

  // statistics_interval - computed: false, optional: true, required: false
  private _statisticsInterval?: number; 
  public get statisticsInterval() {
    return this.getNumberAttribute('statistics_interval');
  }
  public set statisticsInterval(value: number) {
    this._statisticsInterval = value;
  }
  public resetStatisticsInterval() {
    this._statisticsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsIntervalInput() {
    return this._statisticsInterval;
  }

  // application_system_cache - computed: false, optional: true, required: false
  private _applicationSystemCache = new ServicesApplicationIdentificationApplicationSystemCacheOutputReference(this, "application_system_cache");
  public get applicationSystemCache() {
    return this._applicationSystemCache;
  }
  public putApplicationSystemCache(value: ServicesApplicationIdentificationApplicationSystemCache) {
    this._applicationSystemCache.internalValue = value;
  }
  public resetApplicationSystemCache() {
    this._applicationSystemCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSystemCacheInput() {
    return this._applicationSystemCache.internalValue;
  }

  // download - computed: false, optional: true, required: false
  private _download = new ServicesApplicationIdentificationDownloadOutputReference(this, "download");
  public get download() {
    return this._download;
  }
  public putDownload(value: ServicesApplicationIdentificationDownload) {
    this._download.internalValue = value;
  }
  public resetDownload() {
    this._download.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download.internalValue;
  }

  // enable_performance_mode - computed: false, optional: true, required: false
  private _enablePerformanceMode = new ServicesApplicationIdentificationEnablePerformanceModeOutputReference(this, "enable_performance_mode");
  public get enablePerformanceMode() {
    return this._enablePerformanceMode;
  }
  public putEnablePerformanceMode(value: ServicesApplicationIdentificationEnablePerformanceMode) {
    this._enablePerformanceMode.internalValue = value;
  }
  public resetEnablePerformanceMode() {
    this._enablePerformanceMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerformanceModeInput() {
    return this._enablePerformanceMode.internalValue;
  }

  // inspection_limit_tcp - computed: false, optional: true, required: false
  private _inspectionLimitTcp = new ServicesApplicationIdentificationInspectionLimitTcpOutputReference(this, "inspection_limit_tcp");
  public get inspectionLimitTcp() {
    return this._inspectionLimitTcp;
  }
  public putInspectionLimitTcp(value: ServicesApplicationIdentificationInspectionLimitTcp) {
    this._inspectionLimitTcp.internalValue = value;
  }
  public resetInspectionLimitTcp() {
    this._inspectionLimitTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionLimitTcpInput() {
    return this._inspectionLimitTcp.internalValue;
  }

  // inspection_limit_udp - computed: false, optional: true, required: false
  private _inspectionLimitUdp = new ServicesApplicationIdentificationInspectionLimitUdpOutputReference(this, "inspection_limit_udp");
  public get inspectionLimitUdp() {
    return this._inspectionLimitUdp;
  }
  public putInspectionLimitUdp(value: ServicesApplicationIdentificationInspectionLimitUdp) {
    this._inspectionLimitUdp.internalValue = value;
  }
  public resetInspectionLimitUdp() {
    this._inspectionLimitUdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionLimitUdpInput() {
    return this._inspectionLimitUdp.internalValue;
  }
}
export interface ServicesSecurityIntelligenceDefaultPolicy {
  /**
  * Name of security intelligence category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#category_name Services#category_name}
  */
  readonly categoryName: string;
  /**
  * Name of profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#profile_name Services#profile_name}
  */
  readonly profileName: string;
}

export function servicesSecurityIntelligenceDefaultPolicyToTerraform(struct?: ServicesSecurityIntelligenceDefaultPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_name: cdktf.stringToTerraform(struct!.categoryName),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
  }
}


export function servicesSecurityIntelligenceDefaultPolicyToHclTerraform(struct?: ServicesSecurityIntelligenceDefaultPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_name: {
      value: cdktf.stringToHclTerraform(struct!.categoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesSecurityIntelligenceDefaultPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicesSecurityIntelligenceDefaultPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryName = this._categoryName;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesSecurityIntelligenceDefaultPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryName = undefined;
      this._profileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryName = value.categoryName;
      this._profileName = value.profileName;
    }
  }

  // category_name - computed: false, optional: false, required: true
  private _categoryName?: string; 
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }
  public set categoryName(value: string) {
    this._categoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryNameInput() {
    return this._categoryName;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }
}

export class ServicesSecurityIntelligenceDefaultPolicyList extends cdktf.ComplexList {
  public internalValue? : ServicesSecurityIntelligenceDefaultPolicy[] | cdktf.IResolvable

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
  public get(index: number): ServicesSecurityIntelligenceDefaultPolicyOutputReference {
    return new ServicesSecurityIntelligenceDefaultPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicesSecurityIntelligence {
  /**
  * TLS profile for authentication to use feed update services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#authentication_tls_profile Services#authentication_tls_profile}
  */
  readonly authenticationTlsProfile?: string;
  /**
  * Token string for authentication to use feed update services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#authentication_token Services#authentication_token}
  */
  readonly authenticationToken?: string;
  /**
  * Categories to be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#category_disable Services#category_disable}
  */
  readonly categoryDisable?: string[];
  /**
  * The proxy profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#proxy_profile Services#proxy_profile}
  */
  readonly proxyProfile?: string;
  /**
  * Configure the url of feed server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#url Services#url}
  */
  readonly url?: string;
  /**
  * Configure the parameter of url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#url_parameter Services#url_parameter}
  */
  readonly urlParameter?: string;
  /**
  * default_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#default_policy Services#default_policy}
  */
  readonly defaultPolicy?: ServicesSecurityIntelligenceDefaultPolicy[] | cdktf.IResolvable;
}

export function servicesSecurityIntelligenceToTerraform(struct?: ServicesSecurityIntelligence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_tls_profile: cdktf.stringToTerraform(struct!.authenticationTlsProfile),
    authentication_token: cdktf.stringToTerraform(struct!.authenticationToken),
    category_disable: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryDisable),
    proxy_profile: cdktf.stringToTerraform(struct!.proxyProfile),
    url: cdktf.stringToTerraform(struct!.url),
    url_parameter: cdktf.stringToTerraform(struct!.urlParameter),
    default_policy: cdktf.listMapper(servicesSecurityIntelligenceDefaultPolicyToTerraform, true)(struct!.defaultPolicy),
  }
}


export function servicesSecurityIntelligenceToHclTerraform(struct?: ServicesSecurityIntelligence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_tls_profile: {
      value: cdktf.stringToHclTerraform(struct!.authenticationTlsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_token: {
      value: cdktf.stringToHclTerraform(struct!.authenticationToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category_disable: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categoryDisable),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    proxy_profile: {
      value: cdktf.stringToHclTerraform(struct!.proxyProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_parameter: {
      value: cdktf.stringToHclTerraform(struct!.urlParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_policy: {
      value: cdktf.listMapperHcl(servicesSecurityIntelligenceDefaultPolicyToHclTerraform, true)(struct!.defaultPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ServicesSecurityIntelligenceDefaultPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesSecurityIntelligenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesSecurityIntelligence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationTlsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTlsProfile = this._authenticationTlsProfile;
    }
    if (this._authenticationToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationToken = this._authenticationToken;
    }
    if (this._categoryDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryDisable = this._categoryDisable;
    }
    if (this._proxyProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProfile = this._proxyProfile;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urlParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlParameter = this._urlParameter;
    }
    if (this._defaultPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPolicy = this._defaultPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesSecurityIntelligence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationTlsProfile = undefined;
      this._authenticationToken = undefined;
      this._categoryDisable = undefined;
      this._proxyProfile = undefined;
      this._url = undefined;
      this._urlParameter = undefined;
      this._defaultPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationTlsProfile = value.authenticationTlsProfile;
      this._authenticationToken = value.authenticationToken;
      this._categoryDisable = value.categoryDisable;
      this._proxyProfile = value.proxyProfile;
      this._url = value.url;
      this._urlParameter = value.urlParameter;
      this._defaultPolicy.internalValue = value.defaultPolicy;
    }
  }

  // authentication_tls_profile - computed: true, optional: true, required: false
  private _authenticationTlsProfile?: string; 
  public get authenticationTlsProfile() {
    return this.getStringAttribute('authentication_tls_profile');
  }
  public set authenticationTlsProfile(value: string) {
    this._authenticationTlsProfile = value;
  }
  public resetAuthenticationTlsProfile() {
    this._authenticationTlsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTlsProfileInput() {
    return this._authenticationTlsProfile;
  }

  // authentication_token - computed: true, optional: true, required: false
  private _authenticationToken?: string; 
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
  }
  public set authenticationToken(value: string) {
    this._authenticationToken = value;
  }
  public resetAuthenticationToken() {
    this._authenticationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenInput() {
    return this._authenticationToken;
  }

  // category_disable - computed: false, optional: true, required: false
  private _categoryDisable?: string[]; 
  public get categoryDisable() {
    return cdktf.Fn.tolist(this.getListAttribute('category_disable'));
  }
  public set categoryDisable(value: string[]) {
    this._categoryDisable = value;
  }
  public resetCategoryDisable() {
    this._categoryDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryDisableInput() {
    return this._categoryDisable;
  }

  // proxy_profile - computed: false, optional: true, required: false
  private _proxyProfile?: string; 
  public get proxyProfile() {
    return this.getStringAttribute('proxy_profile');
  }
  public set proxyProfile(value: string) {
    this._proxyProfile = value;
  }
  public resetProxyProfile() {
    this._proxyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProfileInput() {
    return this._proxyProfile;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_parameter - computed: false, optional: true, required: false
  private _urlParameter?: string; 
  public get urlParameter() {
    return this.getStringAttribute('url_parameter');
  }
  public set urlParameter(value: string) {
    this._urlParameter = value;
  }
  public resetUrlParameter() {
    this._urlParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParameterInput() {
    return this._urlParameter;
  }

  // default_policy - computed: false, optional: true, required: false
  private _defaultPolicy = new ServicesSecurityIntelligenceDefaultPolicyList(this, "default_policy", false);
  public get defaultPolicy() {
    return this._defaultPolicy;
  }
  public putDefaultPolicy(value: ServicesSecurityIntelligenceDefaultPolicy[] | cdktf.IResolvable) {
    this._defaultPolicy.internalValue = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy.internalValue;
  }
}
export interface ServicesUserIdentificationAdAccess {
  /**
  * Authentication entry timeout number (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#auth_entry_timeout Services#auth_entry_timeout}
  */
  readonly authEntryTimeout?: number;
  /**
  * Exclude addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#filter_exclude Services#filter_exclude}
  */
  readonly filterExclude?: string[];
  /**
  * Include addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#filter_include Services#filter_include}
  */
  readonly filterInclude?: string[];
  /**
  * Firewall auth fallback authentication entry forced timeout number (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#firewall_auth_forced_timeout Services#firewall_auth_forced_timeout}
  */
  readonly firewallAuthForcedTimeout?: number;
  /**
  * Invalid authentication entry timeout number (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#invalid_auth_entry_timeout Services#invalid_auth_entry_timeout}
  */
  readonly invalidAuthEntryTimeout?: number;
  /**
  * Disable on-demand probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#no_on_demand_probe Services#no_on_demand_probe}
  */
  readonly noOnDemandProbe?: boolean | cdktf.IResolvable;
  /**
  * Wmi timeout number (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#wmi_timeout Services#wmi_timeout}
  */
  readonly wmiTimeout?: number;
}

export function servicesUserIdentificationAdAccessToTerraform(struct?: ServicesUserIdentificationAdAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_entry_timeout: cdktf.numberToTerraform(struct!.authEntryTimeout),
    filter_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterExclude),
    filter_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterInclude),
    firewall_auth_forced_timeout: cdktf.numberToTerraform(struct!.firewallAuthForcedTimeout),
    invalid_auth_entry_timeout: cdktf.numberToTerraform(struct!.invalidAuthEntryTimeout),
    no_on_demand_probe: cdktf.booleanToTerraform(struct!.noOnDemandProbe),
    wmi_timeout: cdktf.numberToTerraform(struct!.wmiTimeout),
  }
}


export function servicesUserIdentificationAdAccessToHclTerraform(struct?: ServicesUserIdentificationAdAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_entry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.authEntryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterExclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterInclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    firewall_auth_forced_timeout: {
      value: cdktf.numberToHclTerraform(struct!.firewallAuthForcedTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_auth_entry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.invalidAuthEntryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_on_demand_probe: {
      value: cdktf.booleanToHclTerraform(struct!.noOnDemandProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wmi_timeout: {
      value: cdktf.numberToHclTerraform(struct!.wmiTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesUserIdentificationAdAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesUserIdentificationAdAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEntryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEntryTimeout = this._authEntryTimeout;
    }
    if (this._filterExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExclude = this._filterExclude;
    }
    if (this._filterInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterInclude = this._filterInclude;
    }
    if (this._firewallAuthForcedTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallAuthForcedTimeout = this._firewallAuthForcedTimeout;
    }
    if (this._invalidAuthEntryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidAuthEntryTimeout = this._invalidAuthEntryTimeout;
    }
    if (this._noOnDemandProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOnDemandProbe = this._noOnDemandProbe;
    }
    if (this._wmiTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmiTimeout = this._wmiTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesUserIdentificationAdAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authEntryTimeout = undefined;
      this._filterExclude = undefined;
      this._filterInclude = undefined;
      this._firewallAuthForcedTimeout = undefined;
      this._invalidAuthEntryTimeout = undefined;
      this._noOnDemandProbe = undefined;
      this._wmiTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authEntryTimeout = value.authEntryTimeout;
      this._filterExclude = value.filterExclude;
      this._filterInclude = value.filterInclude;
      this._firewallAuthForcedTimeout = value.firewallAuthForcedTimeout;
      this._invalidAuthEntryTimeout = value.invalidAuthEntryTimeout;
      this._noOnDemandProbe = value.noOnDemandProbe;
      this._wmiTimeout = value.wmiTimeout;
    }
  }

  // auth_entry_timeout - computed: false, optional: true, required: false
  private _authEntryTimeout?: number; 
  public get authEntryTimeout() {
    return this.getNumberAttribute('auth_entry_timeout');
  }
  public set authEntryTimeout(value: number) {
    this._authEntryTimeout = value;
  }
  public resetAuthEntryTimeout() {
    this._authEntryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEntryTimeoutInput() {
    return this._authEntryTimeout;
  }

  // filter_exclude - computed: false, optional: true, required: false
  private _filterExclude?: string[]; 
  public get filterExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_exclude'));
  }
  public set filterExclude(value: string[]) {
    this._filterExclude = value;
  }
  public resetFilterExclude() {
    this._filterExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExcludeInput() {
    return this._filterExclude;
  }

  // filter_include - computed: false, optional: true, required: false
  private _filterInclude?: string[]; 
  public get filterInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_include'));
  }
  public set filterInclude(value: string[]) {
    this._filterInclude = value;
  }
  public resetFilterInclude() {
    this._filterInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIncludeInput() {
    return this._filterInclude;
  }

  // firewall_auth_forced_timeout - computed: false, optional: true, required: false
  private _firewallAuthForcedTimeout?: number; 
  public get firewallAuthForcedTimeout() {
    return this.getNumberAttribute('firewall_auth_forced_timeout');
  }
  public set firewallAuthForcedTimeout(value: number) {
    this._firewallAuthForcedTimeout = value;
  }
  public resetFirewallAuthForcedTimeout() {
    this._firewallAuthForcedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAuthForcedTimeoutInput() {
    return this._firewallAuthForcedTimeout;
  }

  // invalid_auth_entry_timeout - computed: false, optional: true, required: false
  private _invalidAuthEntryTimeout?: number; 
  public get invalidAuthEntryTimeout() {
    return this.getNumberAttribute('invalid_auth_entry_timeout');
  }
  public set invalidAuthEntryTimeout(value: number) {
    this._invalidAuthEntryTimeout = value;
  }
  public resetInvalidAuthEntryTimeout() {
    this._invalidAuthEntryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidAuthEntryTimeoutInput() {
    return this._invalidAuthEntryTimeout;
  }

  // no_on_demand_probe - computed: false, optional: true, required: false
  private _noOnDemandProbe?: boolean | cdktf.IResolvable; 
  public get noOnDemandProbe() {
    return this.getBooleanAttribute('no_on_demand_probe');
  }
  public set noOnDemandProbe(value: boolean | cdktf.IResolvable) {
    this._noOnDemandProbe = value;
  }
  public resetNoOnDemandProbe() {
    this._noOnDemandProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOnDemandProbeInput() {
    return this._noOnDemandProbe;
  }

  // wmi_timeout - computed: false, optional: true, required: false
  private _wmiTimeout?: number; 
  public get wmiTimeout() {
    return this.getNumberAttribute('wmi_timeout');
  }
  public set wmiTimeout(value: number) {
    this._wmiTimeout = value;
  }
  public resetWmiTimeout() {
    this._wmiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmiTimeoutInput() {
    return this._wmiTimeout;
  }
}
export interface ServicesUserIdentificationIdentityManagementConnection {
  /**
  * Method of connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#connect_method Services#connect_method}
  */
  readonly connectMethod?: string;
  /**
  * Server port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#port Services#port}
  */
  readonly port?: number;
  /**
  * IP address of Primary server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#primary_address Services#primary_address}
  */
  readonly primaryAddress?: string;
  /**
  * Ca-certificate file name of Primary server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#primary_ca_certificate Services#primary_ca_certificate}
  */
  readonly primaryCaCertificate?: string;
  /**
  * Client ID of Primary server for OAuth2 grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#primary_client_id Services#primary_client_id}
  */
  readonly primaryClientId?: string;
  /**
  * Client secret of Primary server for OAuth2 grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#primary_client_secret Services#primary_client_secret}
  */
  readonly primaryClientSecret?: string;
  /**
  * Query API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#query_api Services#query_api}
  */
  readonly queryApi?: string;
  /**
  * IP address of Secondary server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#secondary_address Services#secondary_address}
  */
  readonly secondaryAddress?: string;
  /**
  * Ca-certificate file name of Secondary server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#secondary_ca_certificate Services#secondary_ca_certificate}
  */
  readonly secondaryCaCertificate?: string;
  /**
  * Client ID of Secondary server for OAuth2 grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#secondary_client_id Services#secondary_client_id}
  */
  readonly secondaryClientId?: string;
  /**
  * Client secret of Secondary server for OAuth2 grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#secondary_client_secret Services#secondary_client_secret}
  */
  readonly secondaryClientSecret?: string;
  /**
  * API of acquiring token for OAuth2 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#token_api Services#token_api}
  */
  readonly tokenApi?: string;
}

export function servicesUserIdentificationIdentityManagementConnectionToTerraform(struct?: ServicesUserIdentificationIdentityManagementConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_method: cdktf.stringToTerraform(struct!.connectMethod),
    port: cdktf.numberToTerraform(struct!.port),
    primary_address: cdktf.stringToTerraform(struct!.primaryAddress),
    primary_ca_certificate: cdktf.stringToTerraform(struct!.primaryCaCertificate),
    primary_client_id: cdktf.stringToTerraform(struct!.primaryClientId),
    primary_client_secret: cdktf.stringToTerraform(struct!.primaryClientSecret),
    query_api: cdktf.stringToTerraform(struct!.queryApi),
    secondary_address: cdktf.stringToTerraform(struct!.secondaryAddress),
    secondary_ca_certificate: cdktf.stringToTerraform(struct!.secondaryCaCertificate),
    secondary_client_id: cdktf.stringToTerraform(struct!.secondaryClientId),
    secondary_client_secret: cdktf.stringToTerraform(struct!.secondaryClientSecret),
    token_api: cdktf.stringToTerraform(struct!.tokenApi),
  }
}


export function servicesUserIdentificationIdentityManagementConnectionToHclTerraform(struct?: ServicesUserIdentificationIdentityManagementConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_method: {
      value: cdktf.stringToHclTerraform(struct!.connectMethod),
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
    primary_address: {
      value: cdktf.stringToHclTerraform(struct!.primaryAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.primaryCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_client_id: {
      value: cdktf.stringToHclTerraform(struct!.primaryClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.primaryClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_api: {
      value: cdktf.stringToHclTerraform(struct!.queryApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_address: {
      value: cdktf.stringToHclTerraform(struct!.secondaryAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.secondaryCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_client_id: {
      value: cdktf.stringToHclTerraform(struct!.secondaryClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.secondaryClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_api: {
      value: cdktf.stringToHclTerraform(struct!.tokenApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesUserIdentificationIdentityManagementConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesUserIdentificationIdentityManagementConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectMethod = this._connectMethod;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._primaryAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryAddress = this._primaryAddress;
    }
    if (this._primaryCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryCaCertificate = this._primaryCaCertificate;
    }
    if (this._primaryClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryClientId = this._primaryClientId;
    }
    if (this._primaryClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryClientSecret = this._primaryClientSecret;
    }
    if (this._queryApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryApi = this._queryApi;
    }
    if (this._secondaryAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAddress = this._secondaryAddress;
    }
    if (this._secondaryCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryCaCertificate = this._secondaryCaCertificate;
    }
    if (this._secondaryClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryClientId = this._secondaryClientId;
    }
    if (this._secondaryClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryClientSecret = this._secondaryClientSecret;
    }
    if (this._tokenApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenApi = this._tokenApi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesUserIdentificationIdentityManagementConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectMethod = undefined;
      this._port = undefined;
      this._primaryAddress = undefined;
      this._primaryCaCertificate = undefined;
      this._primaryClientId = undefined;
      this._primaryClientSecret = undefined;
      this._queryApi = undefined;
      this._secondaryAddress = undefined;
      this._secondaryCaCertificate = undefined;
      this._secondaryClientId = undefined;
      this._secondaryClientSecret = undefined;
      this._tokenApi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectMethod = value.connectMethod;
      this._port = value.port;
      this._primaryAddress = value.primaryAddress;
      this._primaryCaCertificate = value.primaryCaCertificate;
      this._primaryClientId = value.primaryClientId;
      this._primaryClientSecret = value.primaryClientSecret;
      this._queryApi = value.queryApi;
      this._secondaryAddress = value.secondaryAddress;
      this._secondaryCaCertificate = value.secondaryCaCertificate;
      this._secondaryClientId = value.secondaryClientId;
      this._secondaryClientSecret = value.secondaryClientSecret;
      this._tokenApi = value.tokenApi;
    }
  }

  // connect_method - computed: false, optional: true, required: false
  private _connectMethod?: string; 
  public get connectMethod() {
    return this.getStringAttribute('connect_method');
  }
  public set connectMethod(value: string) {
    this._connectMethod = value;
  }
  public resetConnectMethod() {
    this._connectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectMethodInput() {
    return this._connectMethod;
  }

  // port - computed: false, optional: true, required: false
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

  // primary_address - computed: false, optional: true, required: false
  private _primaryAddress?: string; 
  public get primaryAddress() {
    return this.getStringAttribute('primary_address');
  }
  public set primaryAddress(value: string) {
    this._primaryAddress = value;
  }
  public resetPrimaryAddress() {
    this._primaryAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryAddressInput() {
    return this._primaryAddress;
  }

  // primary_ca_certificate - computed: false, optional: true, required: false
  private _primaryCaCertificate?: string; 
  public get primaryCaCertificate() {
    return this.getStringAttribute('primary_ca_certificate');
  }
  public set primaryCaCertificate(value: string) {
    this._primaryCaCertificate = value;
  }
  public resetPrimaryCaCertificate() {
    this._primaryCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryCaCertificateInput() {
    return this._primaryCaCertificate;
  }

  // primary_client_id - computed: false, optional: true, required: false
  private _primaryClientId?: string; 
  public get primaryClientId() {
    return this.getStringAttribute('primary_client_id');
  }
  public set primaryClientId(value: string) {
    this._primaryClientId = value;
  }
  public resetPrimaryClientId() {
    this._primaryClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryClientIdInput() {
    return this._primaryClientId;
  }

  // primary_client_secret - computed: false, optional: true, required: false
  private _primaryClientSecret?: string; 
  public get primaryClientSecret() {
    return this.getStringAttribute('primary_client_secret');
  }
  public set primaryClientSecret(value: string) {
    this._primaryClientSecret = value;
  }
  public resetPrimaryClientSecret() {
    this._primaryClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryClientSecretInput() {
    return this._primaryClientSecret;
  }

  // query_api - computed: false, optional: true, required: false
  private _queryApi?: string; 
  public get queryApi() {
    return this.getStringAttribute('query_api');
  }
  public set queryApi(value: string) {
    this._queryApi = value;
  }
  public resetQueryApi() {
    this._queryApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryApiInput() {
    return this._queryApi;
  }

  // secondary_address - computed: false, optional: true, required: false
  private _secondaryAddress?: string; 
  public get secondaryAddress() {
    return this.getStringAttribute('secondary_address');
  }
  public set secondaryAddress(value: string) {
    this._secondaryAddress = value;
  }
  public resetSecondaryAddress() {
    this._secondaryAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAddressInput() {
    return this._secondaryAddress;
  }

  // secondary_ca_certificate - computed: false, optional: true, required: false
  private _secondaryCaCertificate?: string; 
  public get secondaryCaCertificate() {
    return this.getStringAttribute('secondary_ca_certificate');
  }
  public set secondaryCaCertificate(value: string) {
    this._secondaryCaCertificate = value;
  }
  public resetSecondaryCaCertificate() {
    this._secondaryCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryCaCertificateInput() {
    return this._secondaryCaCertificate;
  }

  // secondary_client_id - computed: false, optional: true, required: false
  private _secondaryClientId?: string; 
  public get secondaryClientId() {
    return this.getStringAttribute('secondary_client_id');
  }
  public set secondaryClientId(value: string) {
    this._secondaryClientId = value;
  }
  public resetSecondaryClientId() {
    this._secondaryClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryClientIdInput() {
    return this._secondaryClientId;
  }

  // secondary_client_secret - computed: false, optional: true, required: false
  private _secondaryClientSecret?: string; 
  public get secondaryClientSecret() {
    return this.getStringAttribute('secondary_client_secret');
  }
  public set secondaryClientSecret(value: string) {
    this._secondaryClientSecret = value;
  }
  public resetSecondaryClientSecret() {
    this._secondaryClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryClientSecretInput() {
    return this._secondaryClientSecret;
  }

  // token_api - computed: false, optional: true, required: false
  private _tokenApi?: string; 
  public get tokenApi() {
    return this.getStringAttribute('token_api');
  }
  public set tokenApi(value: string) {
    this._tokenApi = value;
  }
  public resetTokenApi() {
    this._tokenApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenApiInput() {
    return this._tokenApi;
  }
}
export interface ServicesUserIdentificationIdentityManagement {
  /**
  * Authentication entry timeout number (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#authentication_entry_timeout Services#authentication_entry_timeout}
  */
  readonly authenticationEntryTimeout?: number;
  /**
  * Query interval for batch query (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#batch_query_interval Services#batch_query_interval}
  */
  readonly batchQueryInterval?: number;
  /**
  * Items number per batch query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#batch_query_items_per_batch Services#batch_query_items_per_batch}
  */
  readonly batchQueryItemsPerBatch?: number;
  /**
  * Domain filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#filter_domain Services#filter_domain}
  */
  readonly filterDomain?: string[];
  /**
  * Referenced address book to exclude IP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#filter_exclude_ip_address_book Services#filter_exclude_ip_address_book}
  */
  readonly filterExcludeIpAddressBook?: string;
  /**
  * Referenced address set to exclude IP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#filter_exclude_ip_address_set Services#filter_exclude_ip_address_set}
  */
  readonly filterExcludeIpAddressSet?: string;
  /**
  * Referenced address book to include IP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#filter_include_ip_address_book Services#filter_include_ip_address_book}
  */
  readonly filterIncludeIpAddressBook?: string;
  /**
  * Referenced address set to include IP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#filter_include_ip_address_set Services#filter_include_ip_address_set}
  */
  readonly filterIncludeIpAddressSet?: string;
  /**
  * Invalid authentication entry timeout number (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#invalid_authentication_entry_timeout Services#invalid_authentication_entry_timeout}
  */
  readonly invalidAuthenticationEntryTimeout?: number;
  /**
  * Delay time to send IP query (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#ip_query_delay_time Services#ip_query_delay_time}
  */
  readonly ipQueryDelayTime?: number;
  /**
  * Disable IP query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#ip_query_disable Services#ip_query_disable}
  */
  readonly ipQueryDisable?: boolean | cdktf.IResolvable;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#connection Services#connection}
  */
  readonly connection?: ServicesUserIdentificationIdentityManagementConnection;
}

export function servicesUserIdentificationIdentityManagementToTerraform(struct?: ServicesUserIdentificationIdentityManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_entry_timeout: cdktf.numberToTerraform(struct!.authenticationEntryTimeout),
    batch_query_interval: cdktf.numberToTerraform(struct!.batchQueryInterval),
    batch_query_items_per_batch: cdktf.numberToTerraform(struct!.batchQueryItemsPerBatch),
    filter_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterDomain),
    filter_exclude_ip_address_book: cdktf.stringToTerraform(struct!.filterExcludeIpAddressBook),
    filter_exclude_ip_address_set: cdktf.stringToTerraform(struct!.filterExcludeIpAddressSet),
    filter_include_ip_address_book: cdktf.stringToTerraform(struct!.filterIncludeIpAddressBook),
    filter_include_ip_address_set: cdktf.stringToTerraform(struct!.filterIncludeIpAddressSet),
    invalid_authentication_entry_timeout: cdktf.numberToTerraform(struct!.invalidAuthenticationEntryTimeout),
    ip_query_delay_time: cdktf.numberToTerraform(struct!.ipQueryDelayTime),
    ip_query_disable: cdktf.booleanToTerraform(struct!.ipQueryDisable),
    connection: servicesUserIdentificationIdentityManagementConnectionToTerraform(struct!.connection),
  }
}


export function servicesUserIdentificationIdentityManagementToHclTerraform(struct?: ServicesUserIdentificationIdentityManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_entry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.authenticationEntryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_query_interval: {
      value: cdktf.numberToHclTerraform(struct!.batchQueryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_query_items_per_batch: {
      value: cdktf.numberToHclTerraform(struct!.batchQueryItemsPerBatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_domain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterDomain),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_exclude_ip_address_book: {
      value: cdktf.stringToHclTerraform(struct!.filterExcludeIpAddressBook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_exclude_ip_address_set: {
      value: cdktf.stringToHclTerraform(struct!.filterExcludeIpAddressSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_include_ip_address_book: {
      value: cdktf.stringToHclTerraform(struct!.filterIncludeIpAddressBook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_include_ip_address_set: {
      value: cdktf.stringToHclTerraform(struct!.filterIncludeIpAddressSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_authentication_entry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.invalidAuthenticationEntryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_query_delay_time: {
      value: cdktf.numberToHclTerraform(struct!.ipQueryDelayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_query_disable: {
      value: cdktf.booleanToHclTerraform(struct!.ipQueryDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection: {
      value: servicesUserIdentificationIdentityManagementConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesUserIdentificationIdentityManagementConnection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesUserIdentificationIdentityManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesUserIdentificationIdentityManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationEntryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationEntryTimeout = this._authenticationEntryTimeout;
    }
    if (this._batchQueryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchQueryInterval = this._batchQueryInterval;
    }
    if (this._batchQueryItemsPerBatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchQueryItemsPerBatch = this._batchQueryItemsPerBatch;
    }
    if (this._filterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDomain = this._filterDomain;
    }
    if (this._filterExcludeIpAddressBook !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExcludeIpAddressBook = this._filterExcludeIpAddressBook;
    }
    if (this._filterExcludeIpAddressSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExcludeIpAddressSet = this._filterExcludeIpAddressSet;
    }
    if (this._filterIncludeIpAddressBook !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterIncludeIpAddressBook = this._filterIncludeIpAddressBook;
    }
    if (this._filterIncludeIpAddressSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterIncludeIpAddressSet = this._filterIncludeIpAddressSet;
    }
    if (this._invalidAuthenticationEntryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidAuthenticationEntryTimeout = this._invalidAuthenticationEntryTimeout;
    }
    if (this._ipQueryDelayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipQueryDelayTime = this._ipQueryDelayTime;
    }
    if (this._ipQueryDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipQueryDisable = this._ipQueryDisable;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesUserIdentificationIdentityManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationEntryTimeout = undefined;
      this._batchQueryInterval = undefined;
      this._batchQueryItemsPerBatch = undefined;
      this._filterDomain = undefined;
      this._filterExcludeIpAddressBook = undefined;
      this._filterExcludeIpAddressSet = undefined;
      this._filterIncludeIpAddressBook = undefined;
      this._filterIncludeIpAddressSet = undefined;
      this._invalidAuthenticationEntryTimeout = undefined;
      this._ipQueryDelayTime = undefined;
      this._ipQueryDisable = undefined;
      this._connection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationEntryTimeout = value.authenticationEntryTimeout;
      this._batchQueryInterval = value.batchQueryInterval;
      this._batchQueryItemsPerBatch = value.batchQueryItemsPerBatch;
      this._filterDomain = value.filterDomain;
      this._filterExcludeIpAddressBook = value.filterExcludeIpAddressBook;
      this._filterExcludeIpAddressSet = value.filterExcludeIpAddressSet;
      this._filterIncludeIpAddressBook = value.filterIncludeIpAddressBook;
      this._filterIncludeIpAddressSet = value.filterIncludeIpAddressSet;
      this._invalidAuthenticationEntryTimeout = value.invalidAuthenticationEntryTimeout;
      this._ipQueryDelayTime = value.ipQueryDelayTime;
      this._ipQueryDisable = value.ipQueryDisable;
      this._connection.internalValue = value.connection;
    }
  }

  // authentication_entry_timeout - computed: false, optional: true, required: false
  private _authenticationEntryTimeout?: number; 
  public get authenticationEntryTimeout() {
    return this.getNumberAttribute('authentication_entry_timeout');
  }
  public set authenticationEntryTimeout(value: number) {
    this._authenticationEntryTimeout = value;
  }
  public resetAuthenticationEntryTimeout() {
    this._authenticationEntryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEntryTimeoutInput() {
    return this._authenticationEntryTimeout;
  }

  // batch_query_interval - computed: false, optional: true, required: false
  private _batchQueryInterval?: number; 
  public get batchQueryInterval() {
    return this.getNumberAttribute('batch_query_interval');
  }
  public set batchQueryInterval(value: number) {
    this._batchQueryInterval = value;
  }
  public resetBatchQueryInterval() {
    this._batchQueryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchQueryIntervalInput() {
    return this._batchQueryInterval;
  }

  // batch_query_items_per_batch - computed: false, optional: true, required: false
  private _batchQueryItemsPerBatch?: number; 
  public get batchQueryItemsPerBatch() {
    return this.getNumberAttribute('batch_query_items_per_batch');
  }
  public set batchQueryItemsPerBatch(value: number) {
    this._batchQueryItemsPerBatch = value;
  }
  public resetBatchQueryItemsPerBatch() {
    this._batchQueryItemsPerBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchQueryItemsPerBatchInput() {
    return this._batchQueryItemsPerBatch;
  }

  // filter_domain - computed: false, optional: true, required: false
  private _filterDomain?: string[]; 
  public get filterDomain() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_domain'));
  }
  public set filterDomain(value: string[]) {
    this._filterDomain = value;
  }
  public resetFilterDomain() {
    this._filterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDomainInput() {
    return this._filterDomain;
  }

  // filter_exclude_ip_address_book - computed: false, optional: true, required: false
  private _filterExcludeIpAddressBook?: string; 
  public get filterExcludeIpAddressBook() {
    return this.getStringAttribute('filter_exclude_ip_address_book');
  }
  public set filterExcludeIpAddressBook(value: string) {
    this._filterExcludeIpAddressBook = value;
  }
  public resetFilterExcludeIpAddressBook() {
    this._filterExcludeIpAddressBook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExcludeIpAddressBookInput() {
    return this._filterExcludeIpAddressBook;
  }

  // filter_exclude_ip_address_set - computed: false, optional: true, required: false
  private _filterExcludeIpAddressSet?: string; 
  public get filterExcludeIpAddressSet() {
    return this.getStringAttribute('filter_exclude_ip_address_set');
  }
  public set filterExcludeIpAddressSet(value: string) {
    this._filterExcludeIpAddressSet = value;
  }
  public resetFilterExcludeIpAddressSet() {
    this._filterExcludeIpAddressSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExcludeIpAddressSetInput() {
    return this._filterExcludeIpAddressSet;
  }

  // filter_include_ip_address_book - computed: false, optional: true, required: false
  private _filterIncludeIpAddressBook?: string; 
  public get filterIncludeIpAddressBook() {
    return this.getStringAttribute('filter_include_ip_address_book');
  }
  public set filterIncludeIpAddressBook(value: string) {
    this._filterIncludeIpAddressBook = value;
  }
  public resetFilterIncludeIpAddressBook() {
    this._filterIncludeIpAddressBook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIncludeIpAddressBookInput() {
    return this._filterIncludeIpAddressBook;
  }

  // filter_include_ip_address_set - computed: false, optional: true, required: false
  private _filterIncludeIpAddressSet?: string; 
  public get filterIncludeIpAddressSet() {
    return this.getStringAttribute('filter_include_ip_address_set');
  }
  public set filterIncludeIpAddressSet(value: string) {
    this._filterIncludeIpAddressSet = value;
  }
  public resetFilterIncludeIpAddressSet() {
    this._filterIncludeIpAddressSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIncludeIpAddressSetInput() {
    return this._filterIncludeIpAddressSet;
  }

  // invalid_authentication_entry_timeout - computed: false, optional: true, required: false
  private _invalidAuthenticationEntryTimeout?: number; 
  public get invalidAuthenticationEntryTimeout() {
    return this.getNumberAttribute('invalid_authentication_entry_timeout');
  }
  public set invalidAuthenticationEntryTimeout(value: number) {
    this._invalidAuthenticationEntryTimeout = value;
  }
  public resetInvalidAuthenticationEntryTimeout() {
    this._invalidAuthenticationEntryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidAuthenticationEntryTimeoutInput() {
    return this._invalidAuthenticationEntryTimeout;
  }

  // ip_query_delay_time - computed: false, optional: true, required: false
  private _ipQueryDelayTime?: number; 
  public get ipQueryDelayTime() {
    return this.getNumberAttribute('ip_query_delay_time');
  }
  public set ipQueryDelayTime(value: number) {
    this._ipQueryDelayTime = value;
  }
  public resetIpQueryDelayTime() {
    this._ipQueryDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipQueryDelayTimeInput() {
    return this._ipQueryDelayTime;
  }

  // ip_query_disable - computed: false, optional: true, required: false
  private _ipQueryDisable?: boolean | cdktf.IResolvable; 
  public get ipQueryDisable() {
    return this.getBooleanAttribute('ip_query_disable');
  }
  public set ipQueryDisable(value: boolean | cdktf.IResolvable) {
    this._ipQueryDisable = value;
  }
  public resetIpQueryDisable() {
    this._ipQueryDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipQueryDisableInput() {
    return this._ipQueryDisable;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new ServicesUserIdentificationIdentityManagementConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: ServicesUserIdentificationIdentityManagementConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}
export interface ServicesUserIdentification {
  /**
  * Configure authentication-source on device information configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#device_info_auth_source Services#device_info_auth_source}
  */
  readonly deviceInfoAuthSource?: string;
  /**
  * ad_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#ad_access Services#ad_access}
  */
  readonly adAccess?: ServicesUserIdentificationAdAccess;
  /**
  * identity_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#identity_management Services#identity_management}
  */
  readonly identityManagement?: ServicesUserIdentificationIdentityManagement;
}

export function servicesUserIdentificationToTerraform(struct?: ServicesUserIdentification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_info_auth_source: cdktf.stringToTerraform(struct!.deviceInfoAuthSource),
    ad_access: servicesUserIdentificationAdAccessToTerraform(struct!.adAccess),
    identity_management: servicesUserIdentificationIdentityManagementToTerraform(struct!.identityManagement),
  }
}


export function servicesUserIdentificationToHclTerraform(struct?: ServicesUserIdentification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_info_auth_source: {
      value: cdktf.stringToHclTerraform(struct!.deviceInfoAuthSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ad_access: {
      value: servicesUserIdentificationAdAccessToHclTerraform(struct!.adAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesUserIdentificationAdAccess",
    },
    identity_management: {
      value: servicesUserIdentificationIdentityManagementToHclTerraform(struct!.identityManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesUserIdentificationIdentityManagement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesUserIdentificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesUserIdentification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceInfoAuthSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceInfoAuthSource = this._deviceInfoAuthSource;
    }
    if (this._adAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adAccess = this._adAccess?.internalValue;
    }
    if (this._identityManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityManagement = this._identityManagement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesUserIdentification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceInfoAuthSource = undefined;
      this._adAccess.internalValue = undefined;
      this._identityManagement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceInfoAuthSource = value.deviceInfoAuthSource;
      this._adAccess.internalValue = value.adAccess;
      this._identityManagement.internalValue = value.identityManagement;
    }
  }

  // device_info_auth_source - computed: false, optional: true, required: false
  private _deviceInfoAuthSource?: string; 
  public get deviceInfoAuthSource() {
    return this.getStringAttribute('device_info_auth_source');
  }
  public set deviceInfoAuthSource(value: string) {
    this._deviceInfoAuthSource = value;
  }
  public resetDeviceInfoAuthSource() {
    this._deviceInfoAuthSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInfoAuthSourceInput() {
    return this._deviceInfoAuthSource;
  }

  // ad_access - computed: false, optional: true, required: false
  private _adAccess = new ServicesUserIdentificationAdAccessOutputReference(this, "ad_access");
  public get adAccess() {
    return this._adAccess;
  }
  public putAdAccess(value: ServicesUserIdentificationAdAccess) {
    this._adAccess.internalValue = value;
  }
  public resetAdAccess() {
    this._adAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adAccessInput() {
    return this._adAccess.internalValue;
  }

  // identity_management - computed: false, optional: true, required: false
  private _identityManagement = new ServicesUserIdentificationIdentityManagementOutputReference(this, "identity_management");
  public get identityManagement() {
    return this._identityManagement;
  }
  public putIdentityManagement(value: ServicesUserIdentificationIdentityManagement) {
    this._identityManagement.internalValue = value;
  }
  public resetIdentityManagement() {
    this._identityManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityManagementInput() {
    return this._identityManagement.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services junos_services}
*/
export class Services extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Services resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Services to import
  * @param importFromId The id of the existing Services that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Services to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services junos_services} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_services',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cleanOnDestroy = config.cleanOnDestroy;
    this._advancedAntiMalware.internalValue = config.advancedAntiMalware;
    this._applicationIdentification.internalValue = config.applicationIdentification;
    this._securityIntelligence.internalValue = config.securityIntelligence;
    this._userIdentification.internalValue = config.userIdentification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clean_on_destroy - computed: false, optional: true, required: false
  private _cleanOnDestroy?: boolean | cdktf.IResolvable; 
  public get cleanOnDestroy() {
    return this.getBooleanAttribute('clean_on_destroy');
  }
  public set cleanOnDestroy(value: boolean | cdktf.IResolvable) {
    this._cleanOnDestroy = value;
  }
  public resetCleanOnDestroy() {
    this._cleanOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanOnDestroyInput() {
    return this._cleanOnDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // advanced_anti_malware - computed: false, optional: true, required: false
  private _advancedAntiMalware = new ServicesAdvancedAntiMalwareOutputReference(this, "advanced_anti_malware");
  public get advancedAntiMalware() {
    return this._advancedAntiMalware;
  }
  public putAdvancedAntiMalware(value: ServicesAdvancedAntiMalware) {
    this._advancedAntiMalware.internalValue = value;
  }
  public resetAdvancedAntiMalware() {
    this._advancedAntiMalware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedAntiMalwareInput() {
    return this._advancedAntiMalware.internalValue;
  }

  // application_identification - computed: false, optional: true, required: false
  private _applicationIdentification = new ServicesApplicationIdentificationOutputReference(this, "application_identification");
  public get applicationIdentification() {
    return this._applicationIdentification;
  }
  public putApplicationIdentification(value: ServicesApplicationIdentification) {
    this._applicationIdentification.internalValue = value;
  }
  public resetApplicationIdentification() {
    this._applicationIdentification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdentificationInput() {
    return this._applicationIdentification.internalValue;
  }

  // security_intelligence - computed: false, optional: true, required: false
  private _securityIntelligence = new ServicesSecurityIntelligenceOutputReference(this, "security_intelligence");
  public get securityIntelligence() {
    return this._securityIntelligence;
  }
  public putSecurityIntelligence(value: ServicesSecurityIntelligence) {
    this._securityIntelligence.internalValue = value;
  }
  public resetSecurityIntelligence() {
    this._securityIntelligence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIntelligenceInput() {
    return this._securityIntelligence.internalValue;
  }

  // user_identification - computed: false, optional: true, required: false
  private _userIdentification = new ServicesUserIdentificationOutputReference(this, "user_identification");
  public get userIdentification() {
    return this._userIdentification;
  }
  public putUserIdentification(value: ServicesUserIdentification) {
    this._userIdentification.internalValue = value;
  }
  public resetUserIdentification() {
    this._userIdentification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentificationInput() {
    return this._userIdentification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clean_on_destroy: cdktf.booleanToTerraform(this._cleanOnDestroy),
      advanced_anti_malware: servicesAdvancedAntiMalwareToTerraform(this._advancedAntiMalware.internalValue),
      application_identification: servicesApplicationIdentificationToTerraform(this._applicationIdentification.internalValue),
      security_intelligence: servicesSecurityIntelligenceToTerraform(this._securityIntelligence.internalValue),
      user_identification: servicesUserIdentificationToTerraform(this._userIdentification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clean_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._cleanOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advanced_anti_malware: {
        value: servicesAdvancedAntiMalwareToHclTerraform(this._advancedAntiMalware.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicesAdvancedAntiMalware",
      },
      application_identification: {
        value: servicesApplicationIdentificationToHclTerraform(this._applicationIdentification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicesApplicationIdentification",
      },
      security_intelligence: {
        value: servicesSecurityIntelligenceToHclTerraform(this._securityIntelligence.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicesSecurityIntelligence",
      },
      user_identification: {
        value: servicesUserIdentificationToHclTerraform(this._userIdentification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicesUserIdentification",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
