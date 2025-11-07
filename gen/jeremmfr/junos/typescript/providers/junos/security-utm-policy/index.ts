// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityUtmPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of anti-spam profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#anti_spam_smtp_profile SecurityUtmPolicy#anti_spam_smtp_profile}
  */
  readonly antiSpamSmtpProfile?: string;
  /**
  * The name of security utm utm-policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#name SecurityUtmPolicy#name}
  */
  readonly name: string;
  /**
  * Web-filtering HTTP profile (local, enhanced, websense).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#web_filtering_profile SecurityUtmPolicy#web_filtering_profile}
  */
  readonly webFilteringProfile?: string;
  /**
  * anti_virus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#anti_virus SecurityUtmPolicy#anti_virus}
  */
  readonly antiVirus?: SecurityUtmPolicyAntiVirus;
  /**
  * content_filtering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#content_filtering SecurityUtmPolicy#content_filtering}
  */
  readonly contentFiltering?: SecurityUtmPolicyContentFiltering;
  /**
  * content_filtering_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#content_filtering_rule_set SecurityUtmPolicy#content_filtering_rule_set}
  */
  readonly contentFilteringRuleSet?: SecurityUtmPolicyContentFilteringRuleSet[] | cdktf.IResolvable;
  /**
  * traffic_sessions_per_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#traffic_sessions_per_client SecurityUtmPolicy#traffic_sessions_per_client}
  */
  readonly trafficSessionsPerClient?: SecurityUtmPolicyTrafficSessionsPerClient;
}
export interface SecurityUtmPolicyAntiVirus {
  /**
  * FTP download anti-virus profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#ftp_download_profile SecurityUtmPolicy#ftp_download_profile}
  */
  readonly ftpDownloadProfile?: string;
  /**
  * FTP upload anti-virus profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#ftp_upload_profile SecurityUtmPolicy#ftp_upload_profile}
  */
  readonly ftpUploadProfile?: string;
  /**
  * HTTP anti-virus profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#http_profile SecurityUtmPolicy#http_profile}
  */
  readonly httpProfile?: string;
  /**
  * IMAP anti-virus profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#imap_profile SecurityUtmPolicy#imap_profile}
  */
  readonly imapProfile?: string;
  /**
  * POP3 anti-virus profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#pop3_profile SecurityUtmPolicy#pop3_profile}
  */
  readonly pop3Profile?: string;
  /**
  * SMTP anti-virus profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#smtp_profile SecurityUtmPolicy#smtp_profile}
  */
  readonly smtpProfile?: string;
}

export function securityUtmPolicyAntiVirusToTerraform(struct?: SecurityUtmPolicyAntiVirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ftp_download_profile: cdktf.stringToTerraform(struct!.ftpDownloadProfile),
    ftp_upload_profile: cdktf.stringToTerraform(struct!.ftpUploadProfile),
    http_profile: cdktf.stringToTerraform(struct!.httpProfile),
    imap_profile: cdktf.stringToTerraform(struct!.imapProfile),
    pop3_profile: cdktf.stringToTerraform(struct!.pop3Profile),
    smtp_profile: cdktf.stringToTerraform(struct!.smtpProfile),
  }
}


export function securityUtmPolicyAntiVirusToHclTerraform(struct?: SecurityUtmPolicyAntiVirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ftp_download_profile: {
      value: cdktf.stringToHclTerraform(struct!.ftpDownloadProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftp_upload_profile: {
      value: cdktf.stringToHclTerraform(struct!.ftpUploadProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_profile: {
      value: cdktf.stringToHclTerraform(struct!.httpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imap_profile: {
      value: cdktf.stringToHclTerraform(struct!.imapProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pop3_profile: {
      value: cdktf.stringToHclTerraform(struct!.pop3Profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_profile: {
      value: cdktf.stringToHclTerraform(struct!.smtpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmPolicyAntiVirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmPolicyAntiVirus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ftpDownloadProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpDownloadProfile = this._ftpDownloadProfile;
    }
    if (this._ftpUploadProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpUploadProfile = this._ftpUploadProfile;
    }
    if (this._httpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProfile = this._httpProfile;
    }
    if (this._imapProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapProfile = this._imapProfile;
    }
    if (this._pop3Profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3Profile = this._pop3Profile;
    }
    if (this._smtpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpProfile = this._smtpProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmPolicyAntiVirus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ftpDownloadProfile = undefined;
      this._ftpUploadProfile = undefined;
      this._httpProfile = undefined;
      this._imapProfile = undefined;
      this._pop3Profile = undefined;
      this._smtpProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ftpDownloadProfile = value.ftpDownloadProfile;
      this._ftpUploadProfile = value.ftpUploadProfile;
      this._httpProfile = value.httpProfile;
      this._imapProfile = value.imapProfile;
      this._pop3Profile = value.pop3Profile;
      this._smtpProfile = value.smtpProfile;
    }
  }

  // ftp_download_profile - computed: false, optional: true, required: false
  private _ftpDownloadProfile?: string; 
  public get ftpDownloadProfile() {
    return this.getStringAttribute('ftp_download_profile');
  }
  public set ftpDownloadProfile(value: string) {
    this._ftpDownloadProfile = value;
  }
  public resetFtpDownloadProfile() {
    this._ftpDownloadProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpDownloadProfileInput() {
    return this._ftpDownloadProfile;
  }

  // ftp_upload_profile - computed: false, optional: true, required: false
  private _ftpUploadProfile?: string; 
  public get ftpUploadProfile() {
    return this.getStringAttribute('ftp_upload_profile');
  }
  public set ftpUploadProfile(value: string) {
    this._ftpUploadProfile = value;
  }
  public resetFtpUploadProfile() {
    this._ftpUploadProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpUploadProfileInput() {
    return this._ftpUploadProfile;
  }

  // http_profile - computed: false, optional: true, required: false
  private _httpProfile?: string; 
  public get httpProfile() {
    return this.getStringAttribute('http_profile');
  }
  public set httpProfile(value: string) {
    this._httpProfile = value;
  }
  public resetHttpProfile() {
    this._httpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProfileInput() {
    return this._httpProfile;
  }

  // imap_profile - computed: false, optional: true, required: false
  private _imapProfile?: string; 
  public get imapProfile() {
    return this.getStringAttribute('imap_profile');
  }
  public set imapProfile(value: string) {
    this._imapProfile = value;
  }
  public resetImapProfile() {
    this._imapProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapProfileInput() {
    return this._imapProfile;
  }

  // pop3_profile - computed: false, optional: true, required: false
  private _pop3Profile?: string; 
  public get pop3Profile() {
    return this.getStringAttribute('pop3_profile');
  }
  public set pop3Profile(value: string) {
    this._pop3Profile = value;
  }
  public resetPop3Profile() {
    this._pop3Profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3ProfileInput() {
    return this._pop3Profile;
  }

  // smtp_profile - computed: false, optional: true, required: false
  private _smtpProfile?: string; 
  public get smtpProfile() {
    return this.getStringAttribute('smtp_profile');
  }
  public set smtpProfile(value: string) {
    this._smtpProfile = value;
  }
  public resetSmtpProfile() {
    this._smtpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpProfileInput() {
    return this._smtpProfile;
  }
}
export interface SecurityUtmPolicyContentFiltering {
  /**
  * FTP download content-filtering profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#ftp_download_profile SecurityUtmPolicy#ftp_download_profile}
  */
  readonly ftpDownloadProfile?: string;
  /**
  * FTP upload content-filtering profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#ftp_upload_profile SecurityUtmPolicy#ftp_upload_profile}
  */
  readonly ftpUploadProfile?: string;
  /**
  * HTTP content-filtering profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#http_profile SecurityUtmPolicy#http_profile}
  */
  readonly httpProfile?: string;
  /**
  * HTTP content-filtering profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#imap_profile SecurityUtmPolicy#imap_profile}
  */
  readonly imapProfile?: string;
  /**
  * POP3 content-filtering profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#pop3_profile SecurityUtmPolicy#pop3_profile}
  */
  readonly pop3Profile?: string;
  /**
  * SMTP content-filtering profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#smtp_profile SecurityUtmPolicy#smtp_profile}
  */
  readonly smtpProfile?: string;
}

export function securityUtmPolicyContentFilteringToTerraform(struct?: SecurityUtmPolicyContentFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ftp_download_profile: cdktf.stringToTerraform(struct!.ftpDownloadProfile),
    ftp_upload_profile: cdktf.stringToTerraform(struct!.ftpUploadProfile),
    http_profile: cdktf.stringToTerraform(struct!.httpProfile),
    imap_profile: cdktf.stringToTerraform(struct!.imapProfile),
    pop3_profile: cdktf.stringToTerraform(struct!.pop3Profile),
    smtp_profile: cdktf.stringToTerraform(struct!.smtpProfile),
  }
}


export function securityUtmPolicyContentFilteringToHclTerraform(struct?: SecurityUtmPolicyContentFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ftp_download_profile: {
      value: cdktf.stringToHclTerraform(struct!.ftpDownloadProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftp_upload_profile: {
      value: cdktf.stringToHclTerraform(struct!.ftpUploadProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_profile: {
      value: cdktf.stringToHclTerraform(struct!.httpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imap_profile: {
      value: cdktf.stringToHclTerraform(struct!.imapProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pop3_profile: {
      value: cdktf.stringToHclTerraform(struct!.pop3Profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_profile: {
      value: cdktf.stringToHclTerraform(struct!.smtpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmPolicyContentFilteringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmPolicyContentFiltering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ftpDownloadProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpDownloadProfile = this._ftpDownloadProfile;
    }
    if (this._ftpUploadProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpUploadProfile = this._ftpUploadProfile;
    }
    if (this._httpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProfile = this._httpProfile;
    }
    if (this._imapProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapProfile = this._imapProfile;
    }
    if (this._pop3Profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3Profile = this._pop3Profile;
    }
    if (this._smtpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpProfile = this._smtpProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmPolicyContentFiltering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ftpDownloadProfile = undefined;
      this._ftpUploadProfile = undefined;
      this._httpProfile = undefined;
      this._imapProfile = undefined;
      this._pop3Profile = undefined;
      this._smtpProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ftpDownloadProfile = value.ftpDownloadProfile;
      this._ftpUploadProfile = value.ftpUploadProfile;
      this._httpProfile = value.httpProfile;
      this._imapProfile = value.imapProfile;
      this._pop3Profile = value.pop3Profile;
      this._smtpProfile = value.smtpProfile;
    }
  }

  // ftp_download_profile - computed: false, optional: true, required: false
  private _ftpDownloadProfile?: string; 
  public get ftpDownloadProfile() {
    return this.getStringAttribute('ftp_download_profile');
  }
  public set ftpDownloadProfile(value: string) {
    this._ftpDownloadProfile = value;
  }
  public resetFtpDownloadProfile() {
    this._ftpDownloadProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpDownloadProfileInput() {
    return this._ftpDownloadProfile;
  }

  // ftp_upload_profile - computed: false, optional: true, required: false
  private _ftpUploadProfile?: string; 
  public get ftpUploadProfile() {
    return this.getStringAttribute('ftp_upload_profile');
  }
  public set ftpUploadProfile(value: string) {
    this._ftpUploadProfile = value;
  }
  public resetFtpUploadProfile() {
    this._ftpUploadProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpUploadProfileInput() {
    return this._ftpUploadProfile;
  }

  // http_profile - computed: false, optional: true, required: false
  private _httpProfile?: string; 
  public get httpProfile() {
    return this.getStringAttribute('http_profile');
  }
  public set httpProfile(value: string) {
    this._httpProfile = value;
  }
  public resetHttpProfile() {
    this._httpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProfileInput() {
    return this._httpProfile;
  }

  // imap_profile - computed: false, optional: true, required: false
  private _imapProfile?: string; 
  public get imapProfile() {
    return this.getStringAttribute('imap_profile');
  }
  public set imapProfile(value: string) {
    this._imapProfile = value;
  }
  public resetImapProfile() {
    this._imapProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapProfileInput() {
    return this._imapProfile;
  }

  // pop3_profile - computed: false, optional: true, required: false
  private _pop3Profile?: string; 
  public get pop3Profile() {
    return this.getStringAttribute('pop3_profile');
  }
  public set pop3Profile(value: string) {
    this._pop3Profile = value;
  }
  public resetPop3Profile() {
    this._pop3Profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3ProfileInput() {
    return this._pop3Profile;
  }

  // smtp_profile - computed: false, optional: true, required: false
  private _smtpProfile?: string; 
  public get smtpProfile() {
    return this.getStringAttribute('smtp_profile');
  }
  public set smtpProfile(value: string) {
    this._smtpProfile = value;
  }
  public resetSmtpProfile() {
    this._smtpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpProfileInput() {
    return this._smtpProfile;
  }
}
export interface SecurityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpoint {
  /**
  * Custom notification message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#custom_message SecurityUtmPolicy#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Notify mail sender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#notify_mail_sender SecurityUtmPolicy#notify_mail_sender}
  */
  readonly notifyMailSender?: boolean | cdktf.IResolvable;
  /**
  * Endpoint notification type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#type SecurityUtmPolicy#type}
  */
  readonly type?: string;
}

export function securityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpointToTerraform(struct?: SecurityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_message: cdktf.stringToTerraform(struct!.customMessage),
    notify_mail_sender: cdktf.booleanToTerraform(struct!.notifyMailSender),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function securityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpointToHclTerraform(struct?: SecurityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_message: {
      value: cdktf.stringToHclTerraform(struct!.customMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_mail_sender: {
      value: cdktf.booleanToHclTerraform(struct!.notifyMailSender),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMessage = this._customMessage;
    }
    if (this._notifyMailSender !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyMailSender = this._notifyMailSender;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMessage = undefined;
      this._notifyMailSender = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMessage = value.customMessage;
      this._notifyMailSender = value.notifyMailSender;
      this._type = value.type;
    }
  }

  // custom_message - computed: false, optional: true, required: false
  private _customMessage?: string; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
  }

  // notify_mail_sender - computed: false, optional: true, required: false
  private _notifyMailSender?: boolean | cdktf.IResolvable; 
  public get notifyMailSender() {
    return this.getBooleanAttribute('notify_mail_sender');
  }
  public set notifyMailSender(value: boolean | cdktf.IResolvable) {
    this._notifyMailSender = value;
  }
  public resetNotifyMailSender() {
    this._notifyMailSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyMailSenderInput() {
    return this._notifyMailSender;
  }

  // type - computed: false, optional: true, required: false
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
}
export interface SecurityUtmPolicyContentFilteringRuleSetRule {
  /**
  * List of applications to be inspected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#match_applications SecurityUtmPolicy#match_applications}
  */
  readonly matchApplications: string[];
  /**
  * Direction of the content to be inspected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#match_direction SecurityUtmPolicy#match_direction}
  */
  readonly matchDirection: string;
  /**
  * List of file-types in match criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#match_file_types SecurityUtmPolicy#match_file_types}
  */
  readonly matchFileTypes: string[];
  /**
  * UTM CF Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#name SecurityUtmPolicy#name}
  */
  readonly name: string;
  /**
  * Configure then action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#then_action SecurityUtmPolicy#then_action}
  */
  readonly thenAction?: string;
  /**
  * Generate security event if content is blocked by rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#then_notification_log SecurityUtmPolicy#then_notification_log}
  */
  readonly thenNotificationLog?: boolean | cdktf.IResolvable;
  /**
  * then_notification_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#then_notification_endpoint SecurityUtmPolicy#then_notification_endpoint}
  */
  readonly thenNotificationEndpoint?: SecurityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpoint;
}

export function securityUtmPolicyContentFilteringRuleSetRuleToTerraform(struct?: SecurityUtmPolicyContentFilteringRuleSetRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchApplications),
    match_direction: cdktf.stringToTerraform(struct!.matchDirection),
    match_file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchFileTypes),
    name: cdktf.stringToTerraform(struct!.name),
    then_action: cdktf.stringToTerraform(struct!.thenAction),
    then_notification_log: cdktf.booleanToTerraform(struct!.thenNotificationLog),
    then_notification_endpoint: securityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpointToTerraform(struct!.thenNotificationEndpoint),
  }
}


export function securityUtmPolicyContentFilteringRuleSetRuleToHclTerraform(struct?: SecurityUtmPolicyContentFilteringRuleSetRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchApplications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_direction: {
      value: cdktf.stringToHclTerraform(struct!.matchDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_file_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchFileTypes),
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
    then_action: {
      value: cdktf.stringToHclTerraform(struct!.thenAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    then_notification_log: {
      value: cdktf.booleanToHclTerraform(struct!.thenNotificationLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    then_notification_endpoint: {
      value: securityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpointToHclTerraform(struct!.thenNotificationEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpoint",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmPolicyContentFilteringRuleSetRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityUtmPolicyContentFilteringRuleSetRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchApplications = this._matchApplications;
    }
    if (this._matchDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDirection = this._matchDirection;
    }
    if (this._matchFileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFileTypes = this._matchFileTypes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._thenAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.thenAction = this._thenAction;
    }
    if (this._thenNotificationLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.thenNotificationLog = this._thenNotificationLog;
    }
    if (this._thenNotificationEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thenNotificationEndpoint = this._thenNotificationEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmPolicyContentFilteringRuleSetRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchApplications = undefined;
      this._matchDirection = undefined;
      this._matchFileTypes = undefined;
      this._name = undefined;
      this._thenAction = undefined;
      this._thenNotificationLog = undefined;
      this._thenNotificationEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchApplications = value.matchApplications;
      this._matchDirection = value.matchDirection;
      this._matchFileTypes = value.matchFileTypes;
      this._name = value.name;
      this._thenAction = value.thenAction;
      this._thenNotificationLog = value.thenNotificationLog;
      this._thenNotificationEndpoint.internalValue = value.thenNotificationEndpoint;
    }
  }

  // match_applications - computed: false, optional: false, required: true
  private _matchApplications?: string[]; 
  public get matchApplications() {
    return this.getListAttribute('match_applications');
  }
  public set matchApplications(value: string[]) {
    this._matchApplications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchApplicationsInput() {
    return this._matchApplications;
  }

  // match_direction - computed: false, optional: false, required: true
  private _matchDirection?: string; 
  public get matchDirection() {
    return this.getStringAttribute('match_direction');
  }
  public set matchDirection(value: string) {
    this._matchDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDirectionInput() {
    return this._matchDirection;
  }

  // match_file_types - computed: false, optional: false, required: true
  private _matchFileTypes?: string[]; 
  public get matchFileTypes() {
    return this.getListAttribute('match_file_types');
  }
  public set matchFileTypes(value: string[]) {
    this._matchFileTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFileTypesInput() {
    return this._matchFileTypes;
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

  // then_action - computed: false, optional: true, required: false
  private _thenAction?: string; 
  public get thenAction() {
    return this.getStringAttribute('then_action');
  }
  public set thenAction(value: string) {
    this._thenAction = value;
  }
  public resetThenAction() {
    this._thenAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenActionInput() {
    return this._thenAction;
  }

  // then_notification_log - computed: false, optional: true, required: false
  private _thenNotificationLog?: boolean | cdktf.IResolvable; 
  public get thenNotificationLog() {
    return this.getBooleanAttribute('then_notification_log');
  }
  public set thenNotificationLog(value: boolean | cdktf.IResolvable) {
    this._thenNotificationLog = value;
  }
  public resetThenNotificationLog() {
    this._thenNotificationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenNotificationLogInput() {
    return this._thenNotificationLog;
  }

  // then_notification_endpoint - computed: false, optional: true, required: false
  private _thenNotificationEndpoint = new SecurityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpointOutputReference(this, "then_notification_endpoint");
  public get thenNotificationEndpoint() {
    return this._thenNotificationEndpoint;
  }
  public putThenNotificationEndpoint(value: SecurityUtmPolicyContentFilteringRuleSetRuleThenNotificationEndpoint) {
    this._thenNotificationEndpoint.internalValue = value;
  }
  public resetThenNotificationEndpoint() {
    this._thenNotificationEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenNotificationEndpointInput() {
    return this._thenNotificationEndpoint.internalValue;
  }
}

export class SecurityUtmPolicyContentFilteringRuleSetRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityUtmPolicyContentFilteringRuleSetRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityUtmPolicyContentFilteringRuleSetRuleOutputReference {
    return new SecurityUtmPolicyContentFilteringRuleSetRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityUtmPolicyContentFilteringRuleSet {
  /**
  * UTM CF Rule-set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#name SecurityUtmPolicy#name}
  */
  readonly name: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#rule SecurityUtmPolicy#rule}
  */
  readonly rule?: SecurityUtmPolicyContentFilteringRuleSetRule[] | cdktf.IResolvable;
}

export function securityUtmPolicyContentFilteringRuleSetToTerraform(struct?: SecurityUtmPolicyContentFilteringRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rule: cdktf.listMapper(securityUtmPolicyContentFilteringRuleSetRuleToTerraform, true)(struct!.rule),
  }
}


export function securityUtmPolicyContentFilteringRuleSetToHclTerraform(struct?: SecurityUtmPolicyContentFilteringRuleSet | cdktf.IResolvable): any {
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
    rule: {
      value: cdktf.listMapperHcl(securityUtmPolicyContentFilteringRuleSetRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityUtmPolicyContentFilteringRuleSetRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmPolicyContentFilteringRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityUtmPolicyContentFilteringRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmPolicyContentFilteringRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rule.internalValue = value.rule;
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

  // rule - computed: false, optional: true, required: false
  private _rule = new SecurityUtmPolicyContentFilteringRuleSetRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityUtmPolicyContentFilteringRuleSetRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class SecurityUtmPolicyContentFilteringRuleSetList extends cdktf.ComplexList {
  public internalValue? : SecurityUtmPolicyContentFilteringRuleSet[] | cdktf.IResolvable

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
  public get(index: number): SecurityUtmPolicyContentFilteringRuleSetOutputReference {
    return new SecurityUtmPolicyContentFilteringRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityUtmPolicyTrafficSessionsPerClient {
  /**
  * Sessions limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#limit SecurityUtmPolicy#limit}
  */
  readonly limit?: number;
  /**
  * Over limit action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#over_limit SecurityUtmPolicy#over_limit}
  */
  readonly overLimit?: string;
}

export function securityUtmPolicyTrafficSessionsPerClientToTerraform(struct?: SecurityUtmPolicyTrafficSessionsPerClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    over_limit: cdktf.stringToTerraform(struct!.overLimit),
  }
}


export function securityUtmPolicyTrafficSessionsPerClientToHclTerraform(struct?: SecurityUtmPolicyTrafficSessionsPerClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    over_limit: {
      value: cdktf.stringToHclTerraform(struct!.overLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmPolicyTrafficSessionsPerClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmPolicyTrafficSessionsPerClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._overLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.overLimit = this._overLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmPolicyTrafficSessionsPerClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._overLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._overLimit = value.overLimit;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // over_limit - computed: false, optional: true, required: false
  private _overLimit?: string; 
  public get overLimit() {
    return this.getStringAttribute('over_limit');
  }
  public set overLimit(value: string) {
    this._overLimit = value;
  }
  public resetOverLimit() {
    this._overLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overLimitInput() {
    return this._overLimit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy junos_security_utm_policy}
*/
export class SecurityUtmPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_utm_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityUtmPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityUtmPolicy to import
  * @param importFromId The id of the existing SecurityUtmPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityUtmPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_utm_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_policy junos_security_utm_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityUtmPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityUtmPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_utm_policy',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antiSpamSmtpProfile = config.antiSpamSmtpProfile;
    this._name = config.name;
    this._webFilteringProfile = config.webFilteringProfile;
    this._antiVirus.internalValue = config.antiVirus;
    this._contentFiltering.internalValue = config.contentFiltering;
    this._contentFilteringRuleSet.internalValue = config.contentFilteringRuleSet;
    this._trafficSessionsPerClient.internalValue = config.trafficSessionsPerClient;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_spam_smtp_profile - computed: false, optional: true, required: false
  private _antiSpamSmtpProfile?: string; 
  public get antiSpamSmtpProfile() {
    return this.getStringAttribute('anti_spam_smtp_profile');
  }
  public set antiSpamSmtpProfile(value: string) {
    this._antiSpamSmtpProfile = value;
  }
  public resetAntiSpamSmtpProfile() {
    this._antiSpamSmtpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpamSmtpProfileInput() {
    return this._antiSpamSmtpProfile;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // web_filtering_profile - computed: false, optional: true, required: false
  private _webFilteringProfile?: string; 
  public get webFilteringProfile() {
    return this.getStringAttribute('web_filtering_profile');
  }
  public set webFilteringProfile(value: string) {
    this._webFilteringProfile = value;
  }
  public resetWebFilteringProfile() {
    this._webFilteringProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilteringProfileInput() {
    return this._webFilteringProfile;
  }

  // anti_virus - computed: false, optional: true, required: false
  private _antiVirus = new SecurityUtmPolicyAntiVirusOutputReference(this, "anti_virus");
  public get antiVirus() {
    return this._antiVirus;
  }
  public putAntiVirus(value: SecurityUtmPolicyAntiVirus) {
    this._antiVirus.internalValue = value;
  }
  public resetAntiVirus() {
    this._antiVirus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusInput() {
    return this._antiVirus.internalValue;
  }

  // content_filtering - computed: false, optional: true, required: false
  private _contentFiltering = new SecurityUtmPolicyContentFilteringOutputReference(this, "content_filtering");
  public get contentFiltering() {
    return this._contentFiltering;
  }
  public putContentFiltering(value: SecurityUtmPolicyContentFiltering) {
    this._contentFiltering.internalValue = value;
  }
  public resetContentFiltering() {
    this._contentFiltering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilteringInput() {
    return this._contentFiltering.internalValue;
  }

  // content_filtering_rule_set - computed: false, optional: true, required: false
  private _contentFilteringRuleSet = new SecurityUtmPolicyContentFilteringRuleSetList(this, "content_filtering_rule_set", false);
  public get contentFilteringRuleSet() {
    return this._contentFilteringRuleSet;
  }
  public putContentFilteringRuleSet(value: SecurityUtmPolicyContentFilteringRuleSet[] | cdktf.IResolvable) {
    this._contentFilteringRuleSet.internalValue = value;
  }
  public resetContentFilteringRuleSet() {
    this._contentFilteringRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilteringRuleSetInput() {
    return this._contentFilteringRuleSet.internalValue;
  }

  // traffic_sessions_per_client - computed: false, optional: true, required: false
  private _trafficSessionsPerClient = new SecurityUtmPolicyTrafficSessionsPerClientOutputReference(this, "traffic_sessions_per_client");
  public get trafficSessionsPerClient() {
    return this._trafficSessionsPerClient;
  }
  public putTrafficSessionsPerClient(value: SecurityUtmPolicyTrafficSessionsPerClient) {
    this._trafficSessionsPerClient.internalValue = value;
  }
  public resetTrafficSessionsPerClient() {
    this._trafficSessionsPerClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSessionsPerClientInput() {
    return this._trafficSessionsPerClient.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_spam_smtp_profile: cdktf.stringToTerraform(this._antiSpamSmtpProfile),
      name: cdktf.stringToTerraform(this._name),
      web_filtering_profile: cdktf.stringToTerraform(this._webFilteringProfile),
      anti_virus: securityUtmPolicyAntiVirusToTerraform(this._antiVirus.internalValue),
      content_filtering: securityUtmPolicyContentFilteringToTerraform(this._contentFiltering.internalValue),
      content_filtering_rule_set: cdktf.listMapper(securityUtmPolicyContentFilteringRuleSetToTerraform, true)(this._contentFilteringRuleSet.internalValue),
      traffic_sessions_per_client: securityUtmPolicyTrafficSessionsPerClientToTerraform(this._trafficSessionsPerClient.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_spam_smtp_profile: {
        value: cdktf.stringToHclTerraform(this._antiSpamSmtpProfile),
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
      web_filtering_profile: {
        value: cdktf.stringToHclTerraform(this._webFilteringProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_virus: {
        value: securityUtmPolicyAntiVirusToHclTerraform(this._antiVirus.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUtmPolicyAntiVirus",
      },
      content_filtering: {
        value: securityUtmPolicyContentFilteringToHclTerraform(this._contentFiltering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUtmPolicyContentFiltering",
      },
      content_filtering_rule_set: {
        value: cdktf.listMapperHcl(securityUtmPolicyContentFilteringRuleSetToHclTerraform, true)(this._contentFilteringRuleSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityUtmPolicyContentFilteringRuleSetList",
      },
      traffic_sessions_per_client: {
        value: securityUtmPolicyTrafficSessionsPerClientToHclTerraform(this._trafficSessionsPerClient.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUtmPolicyTrafficSessionsPerClient",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
