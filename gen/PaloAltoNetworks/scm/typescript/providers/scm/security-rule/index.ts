// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to be taken when the rule is matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#action SecurityRule#action}
  */
  readonly action?: string;
  /**
  * Allow url category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#allow_url_category SecurityRule#allow_url_category}
  */
  readonly allowUrlCategory?: SecurityRuleAllowUrlCategory[] | cdktf.IResolvable;
  /**
  * Allow web application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#allow_web_application SecurityRule#allow_web_application}
  */
  readonly allowWebApplication?: SecurityRuleAllowWebApplication[] | cdktf.IResolvable;
  /**
  * The application(s) being accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#application SecurityRule#application}
  */
  readonly application?: string[];
  /**
  * Block url category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#block_url_category SecurityRule#block_url_category}
  */
  readonly blockUrlCategory?: string[];
  /**
  * Block web application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#block_web_application SecurityRule#block_web_application}
  */
  readonly blockWebApplication?: string[];
  /**
  * The URL categories being accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#category SecurityRule#category}
  */
  readonly category?: string[];
  /**
  * Default profile settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#default_profile_settings SecurityRule#default_profile_settings}
  */
  readonly defaultProfileSettings?: SecurityRuleDefaultProfileSettings;
  /**
  * The description of the security rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#description SecurityRule#description}
  */
  readonly description?: string;
  /**
  * The destination address(es)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#destination SecurityRule#destination}
  */
  readonly destination?: string[];
  /**
  * The destination Host Integrity Profile(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#destination_hip SecurityRule#destination_hip}
  */
  readonly destinationHip?: string[];
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#device SecurityRule#device}
  */
  readonly device?: string;
  /**
  * Devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#devices SecurityRule#devices}
  */
  readonly devices?: string[];
  /**
  * Is the security rule disabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#disabled SecurityRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#folder SecurityRule#folder}
  */
  readonly folder?: string;
  /**
  * The source security zone(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#from SecurityRule#from}
  */
  readonly from?: string[];
  /**
  * Log at session end?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#log_end SecurityRule#log_end}
  */
  readonly logEnd?: boolean | cdktf.IResolvable;
  /**
  * The external log forwarding profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#log_setting SecurityRule#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Log settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#log_settings SecurityRule#log_settings}
  */
  readonly logSettings?: SecurityRuleLogSettings;
  /**
  * Log at session start?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#log_start SecurityRule#log_start}
  */
  readonly logStart?: boolean | cdktf.IResolvable;
  /**
  * The name of the security rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#name SecurityRule#name}
  */
  readonly name?: string;
  /**
  * Negate the destination addresses(es)?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#negate_destination SecurityRule#negate_destination}
  */
  readonly negateDestination?: boolean | cdktf.IResolvable;
  /**
  * Negate the source address(es)?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#negate_source SecurityRule#negate_source}
  */
  readonly negateSource?: boolean | cdktf.IResolvable;
  /**
  * Negate user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#negate_user SecurityRule#negate_user}
  */
  readonly negateUser?: boolean | cdktf.IResolvable;
  /**
  * Policy type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#policy_type SecurityRule#policy_type}
  */
  readonly policyType?: string;
  /**
  * The position of a security rule
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#position SecurityRule#position}
  */
  readonly position?: string;
  /**
  * The security profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#profile_setting SecurityRule#profile_setting}
  */
  readonly profileSetting?: SecurityRuleProfileSetting;
  /**
  * Relative positioning rule. String must be one of these: `"before"`, `"after"`, `"top"`, `"bottom"`. If not specified, rule is created at the bottom of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#relative_position SecurityRule#relative_position}
  */
  readonly relativePosition?: string;
  /**
  * Schedule in which this rule will be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#schedule SecurityRule#schedule}
  */
  readonly schedule?: string;
  /**
  * Security settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#security_settings SecurityRule#security_settings}
  */
  readonly securitySettings?: SecurityRuleSecuritySettings;
  /**
  * The service(s) being accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#service SecurityRule#service}
  */
  readonly service?: string[];
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#snippet SecurityRule#snippet}
  */
  readonly snippet?: string;
  /**
  * The source addresses(es)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#source SecurityRule#source}
  */
  readonly source?: string[];
  /**
  * The source Host Integrity Profile(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#source_hip SecurityRule#source_hip}
  */
  readonly sourceHip?: string[];
  /**
  * List of source users and/or groups.  Reserved words include `any`, `pre-login`, `known-user`, and `unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#source_user SecurityRule#source_user}
  */
  readonly sourceUser?: string[];
  /**
  * The tags associated with the security rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#tag SecurityRule#tag}
  */
  readonly tag?: string[];
  /**
  * The name or UUID of the rule to position this rule relative to. Required when `relative_position` is `"before"` or `"after"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#target_rule SecurityRule#target_rule}
  */
  readonly targetRule?: string;
  /**
  * Tenant restrictions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#tenant_restrictions SecurityRule#tenant_restrictions}
  */
  readonly tenantRestrictions?: string[];
  /**
  * The destination security zone(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#to SecurityRule#to}
  */
  readonly to?: string[];
}
export interface SecurityRuleAllowUrlCategoryFileControl {
  /**
  * Download
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#download SecurityRule#download}
  */
  readonly download?: string;
  /**
  * Upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#upload SecurityRule#upload}
  */
  readonly upload?: string;
}

export function securityRuleAllowUrlCategoryFileControlToTerraform(struct?: SecurityRuleAllowUrlCategoryFileControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download: cdktf.stringToTerraform(struct!.download),
    upload: cdktf.stringToTerraform(struct!.upload),
  }
}


export function securityRuleAllowUrlCategoryFileControlToHclTerraform(struct?: SecurityRuleAllowUrlCategoryFileControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download: {
      value: cdktf.stringToHclTerraform(struct!.download),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload: {
      value: cdktf.stringToHclTerraform(struct!.upload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleAllowUrlCategoryFileControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleAllowUrlCategoryFileControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._download !== undefined) {
      hasAnyValues = true;
      internalValueResult.download = this._download;
    }
    if (this._upload !== undefined) {
      hasAnyValues = true;
      internalValueResult.upload = this._upload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleAllowUrlCategoryFileControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._download = undefined;
      this._upload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._download = value.download;
      this._upload = value.upload;
    }
  }

  // download - computed: true, optional: true, required: false
  private _download?: string; 
  public get download() {
    return this.getStringAttribute('download');
  }
  public set download(value: string) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download;
  }

  // upload - computed: true, optional: true, required: false
  private _upload?: string; 
  public get upload() {
    return this.getStringAttribute('upload');
  }
  public set upload(value: string) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }
}
export interface SecurityRuleAllowUrlCategory {
  /**
  * Additional action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#additional_action SecurityRule#additional_action}
  */
  readonly additionalAction?: string;
  /**
  * Credential enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#credential_enforcement SecurityRule#credential_enforcement}
  */
  readonly credentialEnforcement?: string;
  /**
  * Decryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#decryption SecurityRule#decryption}
  */
  readonly decryption?: string;
  /**
  * Dlp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#dlp SecurityRule#dlp}
  */
  readonly dlp?: string;
  /**
  * File control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#file_control SecurityRule#file_control}
  */
  readonly fileControl?: SecurityRuleAllowUrlCategoryFileControl;
  /**
  * Isolation profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#isolation_profiles SecurityRule#isolation_profiles}
  */
  readonly isolationProfiles?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#name SecurityRule#name}
  */
  readonly name?: string;
}

export function securityRuleAllowUrlCategoryToTerraform(struct?: SecurityRuleAllowUrlCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_action: cdktf.stringToTerraform(struct!.additionalAction),
    credential_enforcement: cdktf.stringToTerraform(struct!.credentialEnforcement),
    decryption: cdktf.stringToTerraform(struct!.decryption),
    dlp: cdktf.stringToTerraform(struct!.dlp),
    file_control: securityRuleAllowUrlCategoryFileControlToTerraform(struct!.fileControl),
    isolation_profiles: cdktf.stringToTerraform(struct!.isolationProfiles),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securityRuleAllowUrlCategoryToHclTerraform(struct?: SecurityRuleAllowUrlCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_action: {
      value: cdktf.stringToHclTerraform(struct!.additionalAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_enforcement: {
      value: cdktf.stringToHclTerraform(struct!.credentialEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption: {
      value: cdktf.stringToHclTerraform(struct!.decryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlp: {
      value: cdktf.stringToHclTerraform(struct!.dlp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_control: {
      value: securityRuleAllowUrlCategoryFileControlToHclTerraform(struct!.fileControl),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityRuleAllowUrlCategoryFileControl",
    },
    isolation_profiles: {
      value: cdktf.stringToHclTerraform(struct!.isolationProfiles),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleAllowUrlCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityRuleAllowUrlCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAction = this._additionalAction;
    }
    if (this._credentialEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialEnforcement = this._credentialEnforcement;
    }
    if (this._decryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryption = this._decryption;
    }
    if (this._dlp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlp = this._dlp;
    }
    if (this._fileControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileControl = this._fileControl?.internalValue;
    }
    if (this._isolationProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolationProfiles = this._isolationProfiles;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleAllowUrlCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalAction = undefined;
      this._credentialEnforcement = undefined;
      this._decryption = undefined;
      this._dlp = undefined;
      this._fileControl.internalValue = undefined;
      this._isolationProfiles = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalAction = value.additionalAction;
      this._credentialEnforcement = value.credentialEnforcement;
      this._decryption = value.decryption;
      this._dlp = value.dlp;
      this._fileControl.internalValue = value.fileControl;
      this._isolationProfiles = value.isolationProfiles;
      this._name = value.name;
    }
  }

  // additional_action - computed: true, optional: true, required: false
  private _additionalAction?: string; 
  public get additionalAction() {
    return this.getStringAttribute('additional_action');
  }
  public set additionalAction(value: string) {
    this._additionalAction = value;
  }
  public resetAdditionalAction() {
    this._additionalAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalActionInput() {
    return this._additionalAction;
  }

  // credential_enforcement - computed: true, optional: true, required: false
  private _credentialEnforcement?: string; 
  public get credentialEnforcement() {
    return this.getStringAttribute('credential_enforcement');
  }
  public set credentialEnforcement(value: string) {
    this._credentialEnforcement = value;
  }
  public resetCredentialEnforcement() {
    this._credentialEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialEnforcementInput() {
    return this._credentialEnforcement;
  }

  // decryption - computed: true, optional: true, required: false
  private _decryption?: string; 
  public get decryption() {
    return this.getStringAttribute('decryption');
  }
  public set decryption(value: string) {
    this._decryption = value;
  }
  public resetDecryption() {
    this._decryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionInput() {
    return this._decryption;
  }

  // dlp - computed: true, optional: true, required: false
  private _dlp?: string; 
  public get dlp() {
    return this.getStringAttribute('dlp');
  }
  public set dlp(value: string) {
    this._dlp = value;
  }
  public resetDlp() {
    this._dlp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpInput() {
    return this._dlp;
  }

  // file_control - computed: true, optional: true, required: false
  private _fileControl = new SecurityRuleAllowUrlCategoryFileControlOutputReference(this, "file_control");
  public get fileControl() {
    return this._fileControl;
  }
  public putFileControl(value: SecurityRuleAllowUrlCategoryFileControl) {
    this._fileControl.internalValue = value;
  }
  public resetFileControl() {
    this._fileControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileControlInput() {
    return this._fileControl.internalValue;
  }

  // isolation_profiles - computed: true, optional: true, required: false
  private _isolationProfiles?: string; 
  public get isolationProfiles() {
    return this.getStringAttribute('isolation_profiles');
  }
  public set isolationProfiles(value: string) {
    this._isolationProfiles = value;
  }
  public resetIsolationProfiles() {
    this._isolationProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationProfilesInput() {
    return this._isolationProfiles;
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
}

export class SecurityRuleAllowUrlCategoryList extends cdktf.ComplexList {
  public internalValue? : SecurityRuleAllowUrlCategory[] | cdktf.IResolvable

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
  public get(index: number): SecurityRuleAllowUrlCategoryOutputReference {
    return new SecurityRuleAllowUrlCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityRuleAllowWebApplicationFileControl {
  /**
  * Download
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#download SecurityRule#download}
  */
  readonly download?: string;
  /**
  * Upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#upload SecurityRule#upload}
  */
  readonly upload?: string;
}

export function securityRuleAllowWebApplicationFileControlToTerraform(struct?: SecurityRuleAllowWebApplicationFileControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download: cdktf.stringToTerraform(struct!.download),
    upload: cdktf.stringToTerraform(struct!.upload),
  }
}


export function securityRuleAllowWebApplicationFileControlToHclTerraform(struct?: SecurityRuleAllowWebApplicationFileControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download: {
      value: cdktf.stringToHclTerraform(struct!.download),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload: {
      value: cdktf.stringToHclTerraform(struct!.upload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleAllowWebApplicationFileControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleAllowWebApplicationFileControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._download !== undefined) {
      hasAnyValues = true;
      internalValueResult.download = this._download;
    }
    if (this._upload !== undefined) {
      hasAnyValues = true;
      internalValueResult.upload = this._upload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleAllowWebApplicationFileControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._download = undefined;
      this._upload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._download = value.download;
      this._upload = value.upload;
    }
  }

  // download - computed: true, optional: true, required: false
  private _download?: string; 
  public get download() {
    return this.getStringAttribute('download');
  }
  public set download(value: string) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download;
  }

  // upload - computed: true, optional: true, required: false
  private _upload?: string; 
  public get upload() {
    return this.getStringAttribute('upload');
  }
  public set upload(value: string) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }
}
export interface SecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#enable SecurityRule#enable}
  */
  readonly enable?: string;
}

export function securityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccessToTerraform(struct?: SecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
  }
}


export function securityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccessToHclTerraform(struct?: SecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
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
export interface SecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#enable SecurityRule#enable}
  */
  readonly enable?: string;
  /**
  * Tenant restrictions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#tenant_restrictions SecurityRule#tenant_restrictions}
  */
  readonly tenantRestrictions?: string[];
}

export function securityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccessToTerraform(struct?: SecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    tenant_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantRestrictions),
  }
}


export function securityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccessToHclTerraform(struct?: SecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._tenantRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantRestrictions = this._tenantRestrictions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._tenantRestrictions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._tenantRestrictions = value.tenantRestrictions;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // tenant_restrictions - computed: true, optional: true, required: false
  private _tenantRestrictions?: string[]; 
  public get tenantRestrictions() {
    return this.getListAttribute('tenant_restrictions');
  }
  public set tenantRestrictions(value: string[]) {
    this._tenantRestrictions = value;
  }
  public resetTenantRestrictions() {
    this._tenantRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRestrictionsInput() {
    return this._tenantRestrictions;
  }
}
export interface SecurityRuleAllowWebApplicationSaasEnterpriseControl {
  /**
  * Consumer access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#consumer_access SecurityRule#consumer_access}
  */
  readonly consumerAccess?: SecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess;
  /**
  * Enterprise access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#enterprise_access SecurityRule#enterprise_access}
  */
  readonly enterpriseAccess?: SecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess;
}

export function securityRuleAllowWebApplicationSaasEnterpriseControlToTerraform(struct?: SecurityRuleAllowWebApplicationSaasEnterpriseControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_access: securityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccessToTerraform(struct!.consumerAccess),
    enterprise_access: securityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccessToTerraform(struct!.enterpriseAccess),
  }
}


export function securityRuleAllowWebApplicationSaasEnterpriseControlToHclTerraform(struct?: SecurityRuleAllowWebApplicationSaasEnterpriseControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_access: {
      value: securityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccessToHclTerraform(struct!.consumerAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess",
    },
    enterprise_access: {
      value: securityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccessToHclTerraform(struct!.enterpriseAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleAllowWebApplicationSaasEnterpriseControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleAllowWebApplicationSaasEnterpriseControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerAccess = this._consumerAccess?.internalValue;
    }
    if (this._enterpriseAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseAccess = this._enterpriseAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleAllowWebApplicationSaasEnterpriseControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerAccess.internalValue = undefined;
      this._enterpriseAccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerAccess.internalValue = value.consumerAccess;
      this._enterpriseAccess.internalValue = value.enterpriseAccess;
    }
  }

  // consumer_access - computed: true, optional: true, required: false
  private _consumerAccess = new SecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccessOutputReference(this, "consumer_access");
  public get consumerAccess() {
    return this._consumerAccess;
  }
  public putConsumerAccess(value: SecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess) {
    this._consumerAccess.internalValue = value;
  }
  public resetConsumerAccess() {
    this._consumerAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAccessInput() {
    return this._consumerAccess.internalValue;
  }

  // enterprise_access - computed: true, optional: true, required: false
  private _enterpriseAccess = new SecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccessOutputReference(this, "enterprise_access");
  public get enterpriseAccess() {
    return this._enterpriseAccess;
  }
  public putEnterpriseAccess(value: SecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess) {
    this._enterpriseAccess.internalValue = value;
  }
  public resetEnterpriseAccess() {
    this._enterpriseAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseAccessInput() {
    return this._enterpriseAccess.internalValue;
  }
}
export interface SecurityRuleAllowWebApplicationTenantControl {
  /**
  * Allowed activities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#allowed_activities SecurityRule#allowed_activities}
  */
  readonly allowedActivities?: string[];
  /**
  * Blocked activities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#blocked_activities SecurityRule#blocked_activities}
  */
  readonly blockedActivities?: string[];
  /**
  * Parent application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#parent_application SecurityRule#parent_application}
  */
  readonly parentApplication?: string;
  /**
  * Tenants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#tenants SecurityRule#tenants}
  */
  readonly tenants?: string[];
}

export function securityRuleAllowWebApplicationTenantControlToTerraform(struct?: SecurityRuleAllowWebApplicationTenantControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_activities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedActivities),
    blocked_activities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockedActivities),
    parent_application: cdktf.stringToTerraform(struct!.parentApplication),
    tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenants),
  }
}


export function securityRuleAllowWebApplicationTenantControlToHclTerraform(struct?: SecurityRuleAllowWebApplicationTenantControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_activities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedActivities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    blocked_activities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockedActivities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parent_application: {
      value: cdktf.stringToHclTerraform(struct!.parentApplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenants),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleAllowWebApplicationTenantControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleAllowWebApplicationTenantControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedActivities !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedActivities = this._allowedActivities;
    }
    if (this._blockedActivities !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedActivities = this._blockedActivities;
    }
    if (this._parentApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentApplication = this._parentApplication;
    }
    if (this._tenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenants = this._tenants;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleAllowWebApplicationTenantControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedActivities = undefined;
      this._blockedActivities = undefined;
      this._parentApplication = undefined;
      this._tenants = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedActivities = value.allowedActivities;
      this._blockedActivities = value.blockedActivities;
      this._parentApplication = value.parentApplication;
      this._tenants = value.tenants;
    }
  }

  // allowed_activities - computed: true, optional: true, required: false
  private _allowedActivities?: string[]; 
  public get allowedActivities() {
    return this.getListAttribute('allowed_activities');
  }
  public set allowedActivities(value: string[]) {
    this._allowedActivities = value;
  }
  public resetAllowedActivities() {
    this._allowedActivities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedActivitiesInput() {
    return this._allowedActivities;
  }

  // blocked_activities - computed: true, optional: true, required: false
  private _blockedActivities?: string[]; 
  public get blockedActivities() {
    return this.getListAttribute('blocked_activities');
  }
  public set blockedActivities(value: string[]) {
    this._blockedActivities = value;
  }
  public resetBlockedActivities() {
    this._blockedActivities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedActivitiesInput() {
    return this._blockedActivities;
  }

  // parent_application - computed: true, optional: true, required: false
  private _parentApplication?: string; 
  public get parentApplication() {
    return this.getStringAttribute('parent_application');
  }
  public set parentApplication(value: string) {
    this._parentApplication = value;
  }
  public resetParentApplication() {
    this._parentApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentApplicationInput() {
    return this._parentApplication;
  }

  // tenants - computed: true, optional: true, required: false
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  public resetTenants() {
    this._tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }
}
export interface SecurityRuleAllowWebApplication {
  /**
  * Application function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#application_function SecurityRule#application_function}
  */
  readonly applicationFunction?: string[];
  /**
  * Dlp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#dlp SecurityRule#dlp}
  */
  readonly dlp?: string;
  /**
  * File control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#file_control SecurityRule#file_control}
  */
  readonly fileControl?: SecurityRuleAllowWebApplicationFileControl;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#name SecurityRule#name}
  */
  readonly name?: string;
  /**
  * Saas enterprise control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#saas_enterprise_control SecurityRule#saas_enterprise_control}
  */
  readonly saasEnterpriseControl?: SecurityRuleAllowWebApplicationSaasEnterpriseControl;
  /**
  * Saas tenant list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#saas_tenant_list SecurityRule#saas_tenant_list}
  */
  readonly saasTenantList?: string[];
  /**
  * Saas user list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#saas_user_list SecurityRule#saas_user_list}
  */
  readonly saasUserList?: string[];
  /**
  * Tenant control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#tenant_control SecurityRule#tenant_control}
  */
  readonly tenantControl?: SecurityRuleAllowWebApplicationTenantControl;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#type SecurityRule#type}
  */
  readonly type?: string;
}

export function securityRuleAllowWebApplicationToTerraform(struct?: SecurityRuleAllowWebApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_function: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationFunction),
    dlp: cdktf.stringToTerraform(struct!.dlp),
    file_control: securityRuleAllowWebApplicationFileControlToTerraform(struct!.fileControl),
    name: cdktf.stringToTerraform(struct!.name),
    saas_enterprise_control: securityRuleAllowWebApplicationSaasEnterpriseControlToTerraform(struct!.saasEnterpriseControl),
    saas_tenant_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.saasTenantList),
    saas_user_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.saasUserList),
    tenant_control: securityRuleAllowWebApplicationTenantControlToTerraform(struct!.tenantControl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function securityRuleAllowWebApplicationToHclTerraform(struct?: SecurityRuleAllowWebApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_function: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationFunction),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dlp: {
      value: cdktf.stringToHclTerraform(struct!.dlp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_control: {
      value: securityRuleAllowWebApplicationFileControlToHclTerraform(struct!.fileControl),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityRuleAllowWebApplicationFileControl",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saas_enterprise_control: {
      value: securityRuleAllowWebApplicationSaasEnterpriseControlToHclTerraform(struct!.saasEnterpriseControl),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityRuleAllowWebApplicationSaasEnterpriseControl",
    },
    saas_tenant_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.saasTenantList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    saas_user_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.saasUserList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tenant_control: {
      value: securityRuleAllowWebApplicationTenantControlToHclTerraform(struct!.tenantControl),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityRuleAllowWebApplicationTenantControl",
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

export class SecurityRuleAllowWebApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityRuleAllowWebApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationFunction = this._applicationFunction;
    }
    if (this._dlp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlp = this._dlp;
    }
    if (this._fileControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileControl = this._fileControl?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._saasEnterpriseControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saasEnterpriseControl = this._saasEnterpriseControl?.internalValue;
    }
    if (this._saasTenantList !== undefined) {
      hasAnyValues = true;
      internalValueResult.saasTenantList = this._saasTenantList;
    }
    if (this._saasUserList !== undefined) {
      hasAnyValues = true;
      internalValueResult.saasUserList = this._saasUserList;
    }
    if (this._tenantControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantControl = this._tenantControl?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleAllowWebApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationFunction = undefined;
      this._dlp = undefined;
      this._fileControl.internalValue = undefined;
      this._name = undefined;
      this._saasEnterpriseControl.internalValue = undefined;
      this._saasTenantList = undefined;
      this._saasUserList = undefined;
      this._tenantControl.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationFunction = value.applicationFunction;
      this._dlp = value.dlp;
      this._fileControl.internalValue = value.fileControl;
      this._name = value.name;
      this._saasEnterpriseControl.internalValue = value.saasEnterpriseControl;
      this._saasTenantList = value.saasTenantList;
      this._saasUserList = value.saasUserList;
      this._tenantControl.internalValue = value.tenantControl;
      this._type = value.type;
    }
  }

  // application_function - computed: true, optional: true, required: false
  private _applicationFunction?: string[]; 
  public get applicationFunction() {
    return this.getListAttribute('application_function');
  }
  public set applicationFunction(value: string[]) {
    this._applicationFunction = value;
  }
  public resetApplicationFunction() {
    this._applicationFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFunctionInput() {
    return this._applicationFunction;
  }

  // dlp - computed: true, optional: true, required: false
  private _dlp?: string; 
  public get dlp() {
    return this.getStringAttribute('dlp');
  }
  public set dlp(value: string) {
    this._dlp = value;
  }
  public resetDlp() {
    this._dlp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpInput() {
    return this._dlp;
  }

  // file_control - computed: true, optional: true, required: false
  private _fileControl = new SecurityRuleAllowWebApplicationFileControlOutputReference(this, "file_control");
  public get fileControl() {
    return this._fileControl;
  }
  public putFileControl(value: SecurityRuleAllowWebApplicationFileControl) {
    this._fileControl.internalValue = value;
  }
  public resetFileControl() {
    this._fileControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileControlInput() {
    return this._fileControl.internalValue;
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

  // saas_enterprise_control - computed: true, optional: true, required: false
  private _saasEnterpriseControl = new SecurityRuleAllowWebApplicationSaasEnterpriseControlOutputReference(this, "saas_enterprise_control");
  public get saasEnterpriseControl() {
    return this._saasEnterpriseControl;
  }
  public putSaasEnterpriseControl(value: SecurityRuleAllowWebApplicationSaasEnterpriseControl) {
    this._saasEnterpriseControl.internalValue = value;
  }
  public resetSaasEnterpriseControl() {
    this._saasEnterpriseControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasEnterpriseControlInput() {
    return this._saasEnterpriseControl.internalValue;
  }

  // saas_tenant_list - computed: true, optional: true, required: false
  private _saasTenantList?: string[]; 
  public get saasTenantList() {
    return this.getListAttribute('saas_tenant_list');
  }
  public set saasTenantList(value: string[]) {
    this._saasTenantList = value;
  }
  public resetSaasTenantList() {
    this._saasTenantList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasTenantListInput() {
    return this._saasTenantList;
  }

  // saas_user_list - computed: true, optional: true, required: false
  private _saasUserList?: string[]; 
  public get saasUserList() {
    return this.getListAttribute('saas_user_list');
  }
  public set saasUserList(value: string[]) {
    this._saasUserList = value;
  }
  public resetSaasUserList() {
    this._saasUserList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasUserListInput() {
    return this._saasUserList;
  }

  // tenant_control - computed: true, optional: true, required: false
  private _tenantControl = new SecurityRuleAllowWebApplicationTenantControlOutputReference(this, "tenant_control");
  public get tenantControl() {
    return this._tenantControl;
  }
  public putTenantControl(value: SecurityRuleAllowWebApplicationTenantControl) {
    this._tenantControl.internalValue = value;
  }
  public resetTenantControl() {
    this._tenantControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantControlInput() {
    return this._tenantControl.internalValue;
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
}

export class SecurityRuleAllowWebApplicationList extends cdktf.ComplexList {
  public internalValue? : SecurityRuleAllowWebApplication[] | cdktf.IResolvable

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
  public get(index: number): SecurityRuleAllowWebApplicationOutputReference {
    return new SecurityRuleAllowWebApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityRuleDefaultProfileSettingsFileControl {
  /**
  * Download
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#download SecurityRule#download}
  */
  readonly download?: string;
  /**
  * Upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#upload SecurityRule#upload}
  */
  readonly upload?: string;
}

export function securityRuleDefaultProfileSettingsFileControlToTerraform(struct?: SecurityRuleDefaultProfileSettingsFileControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download: cdktf.stringToTerraform(struct!.download),
    upload: cdktf.stringToTerraform(struct!.upload),
  }
}


export function securityRuleDefaultProfileSettingsFileControlToHclTerraform(struct?: SecurityRuleDefaultProfileSettingsFileControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download: {
      value: cdktf.stringToHclTerraform(struct!.download),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload: {
      value: cdktf.stringToHclTerraform(struct!.upload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleDefaultProfileSettingsFileControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleDefaultProfileSettingsFileControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._download !== undefined) {
      hasAnyValues = true;
      internalValueResult.download = this._download;
    }
    if (this._upload !== undefined) {
      hasAnyValues = true;
      internalValueResult.upload = this._upload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleDefaultProfileSettingsFileControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._download = undefined;
      this._upload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._download = value.download;
      this._upload = value.upload;
    }
  }

  // download - computed: true, optional: true, required: false
  private _download?: string; 
  public get download() {
    return this.getStringAttribute('download');
  }
  public set download(value: string) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download;
  }

  // upload - computed: true, optional: true, required: false
  private _upload?: string; 
  public get upload() {
    return this.getStringAttribute('upload');
  }
  public set upload(value: string) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }
}
export interface SecurityRuleDefaultProfileSettings {
  /**
  * Dlp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#dlp SecurityRule#dlp}
  */
  readonly dlp?: string;
  /**
  * File control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#file_control SecurityRule#file_control}
  */
  readonly fileControl?: SecurityRuleDefaultProfileSettingsFileControl;
}

export function securityRuleDefaultProfileSettingsToTerraform(struct?: SecurityRuleDefaultProfileSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dlp: cdktf.stringToTerraform(struct!.dlp),
    file_control: securityRuleDefaultProfileSettingsFileControlToTerraform(struct!.fileControl),
  }
}


export function securityRuleDefaultProfileSettingsToHclTerraform(struct?: SecurityRuleDefaultProfileSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dlp: {
      value: cdktf.stringToHclTerraform(struct!.dlp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_control: {
      value: securityRuleDefaultProfileSettingsFileControlToHclTerraform(struct!.fileControl),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityRuleDefaultProfileSettingsFileControl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleDefaultProfileSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleDefaultProfileSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dlp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlp = this._dlp;
    }
    if (this._fileControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileControl = this._fileControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleDefaultProfileSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dlp = undefined;
      this._fileControl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dlp = value.dlp;
      this._fileControl.internalValue = value.fileControl;
    }
  }

  // dlp - computed: true, optional: true, required: false
  private _dlp?: string; 
  public get dlp() {
    return this.getStringAttribute('dlp');
  }
  public set dlp(value: string) {
    this._dlp = value;
  }
  public resetDlp() {
    this._dlp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpInput() {
    return this._dlp;
  }

  // file_control - computed: true, optional: true, required: false
  private _fileControl = new SecurityRuleDefaultProfileSettingsFileControlOutputReference(this, "file_control");
  public get fileControl() {
    return this._fileControl;
  }
  public putFileControl(value: SecurityRuleDefaultProfileSettingsFileControl) {
    this._fileControl.internalValue = value;
  }
  public resetFileControl() {
    this._fileControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileControlInput() {
    return this._fileControl.internalValue;
  }
}
export interface SecurityRuleLogSettings {
  /**
  * Log sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#log_sessions SecurityRule#log_sessions}
  */
  readonly logSessions?: boolean | cdktf.IResolvable;
}

export function securityRuleLogSettingsToTerraform(struct?: SecurityRuleLogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_sessions: cdktf.booleanToTerraform(struct!.logSessions),
  }
}


export function securityRuleLogSettingsToHclTerraform(struct?: SecurityRuleLogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_sessions: {
      value: cdktf.booleanToHclTerraform(struct!.logSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleLogSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSessions = this._logSessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleLogSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logSessions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logSessions = value.logSessions;
    }
  }

  // log_sessions - computed: true, optional: true, required: false
  private _logSessions?: boolean | cdktf.IResolvable; 
  public get logSessions() {
    return this.getBooleanAttribute('log_sessions');
  }
  public set logSessions(value: boolean | cdktf.IResolvable) {
    this._logSessions = value;
  }
  public resetLogSessions() {
    this._logSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSessionsInput() {
    return this._logSessions;
  }
}
export interface SecurityRuleProfileSetting {
  /**
  * The security profile group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#group SecurityRule#group}
  */
  readonly group?: string[];
}

export function securityRuleProfileSettingToTerraform(struct?: SecurityRuleProfileSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
  }
}


export function securityRuleProfileSettingToHclTerraform(struct?: SecurityRuleProfileSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleProfileSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleProfileSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleProfileSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return this.getListAttribute('group');
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}
export interface SecurityRuleSecuritySettings {
  /**
  * Anti spyware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#anti_spyware SecurityRule#anti_spyware}
  */
  readonly antiSpyware?: string;
  /**
  * Virus and wildfire analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#virus_and_wildfire_analysis SecurityRule#virus_and_wildfire_analysis}
  */
  readonly virusAndWildfireAnalysis?: string;
  /**
  * Vulnerability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#vulnerability SecurityRule#vulnerability}
  */
  readonly vulnerability?: string;
}

export function securityRuleSecuritySettingsToTerraform(struct?: SecurityRuleSecuritySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_spyware: cdktf.stringToTerraform(struct!.antiSpyware),
    virus_and_wildfire_analysis: cdktf.stringToTerraform(struct!.virusAndWildfireAnalysis),
    vulnerability: cdktf.stringToTerraform(struct!.vulnerability),
  }
}


export function securityRuleSecuritySettingsToHclTerraform(struct?: SecurityRuleSecuritySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_spyware: {
      value: cdktf.stringToHclTerraform(struct!.antiSpyware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virus_and_wildfire_analysis: {
      value: cdktf.stringToHclTerraform(struct!.virusAndWildfireAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerability: {
      value: cdktf.stringToHclTerraform(struct!.vulnerability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleSecuritySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityRuleSecuritySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiSpyware !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpyware = this._antiSpyware;
    }
    if (this._virusAndWildfireAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.virusAndWildfireAnalysis = this._virusAndWildfireAnalysis;
    }
    if (this._vulnerability !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerability = this._vulnerability;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleSecuritySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiSpyware = undefined;
      this._virusAndWildfireAnalysis = undefined;
      this._vulnerability = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiSpyware = value.antiSpyware;
      this._virusAndWildfireAnalysis = value.virusAndWildfireAnalysis;
      this._vulnerability = value.vulnerability;
    }
  }

  // anti_spyware - computed: true, optional: true, required: false
  private _antiSpyware?: string; 
  public get antiSpyware() {
    return this.getStringAttribute('anti_spyware');
  }
  public set antiSpyware(value: string) {
    this._antiSpyware = value;
  }
  public resetAntiSpyware() {
    this._antiSpyware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpywareInput() {
    return this._antiSpyware;
  }

  // virus_and_wildfire_analysis - computed: true, optional: true, required: false
  private _virusAndWildfireAnalysis?: string; 
  public get virusAndWildfireAnalysis() {
    return this.getStringAttribute('virus_and_wildfire_analysis');
  }
  public set virusAndWildfireAnalysis(value: string) {
    this._virusAndWildfireAnalysis = value;
  }
  public resetVirusAndWildfireAnalysis() {
    this._virusAndWildfireAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusAndWildfireAnalysisInput() {
    return this._virusAndWildfireAnalysis;
  }

  // vulnerability - computed: true, optional: true, required: false
  private _vulnerability?: string; 
  public get vulnerability() {
    return this.getStringAttribute('vulnerability');
  }
  public set vulnerability(value: string) {
    this._vulnerability = value;
  }
  public resetVulnerability() {
    this._vulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityInput() {
    return this._vulnerability;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule scm_security_rule}
*/
export class SecurityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityRule to import
  * @param importFromId The id of the existing SecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/security_rule scm_security_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._allowUrlCategory.internalValue = config.allowUrlCategory;
    this._allowWebApplication.internalValue = config.allowWebApplication;
    this._application = config.application;
    this._blockUrlCategory = config.blockUrlCategory;
    this._blockWebApplication = config.blockWebApplication;
    this._category = config.category;
    this._defaultProfileSettings.internalValue = config.defaultProfileSettings;
    this._description = config.description;
    this._destination = config.destination;
    this._destinationHip = config.destinationHip;
    this._device = config.device;
    this._devices = config.devices;
    this._disabled = config.disabled;
    this._folder = config.folder;
    this._from = config.from;
    this._logEnd = config.logEnd;
    this._logSetting = config.logSetting;
    this._logSettings.internalValue = config.logSettings;
    this._logStart = config.logStart;
    this._name = config.name;
    this._negateDestination = config.negateDestination;
    this._negateSource = config.negateSource;
    this._negateUser = config.negateUser;
    this._policyType = config.policyType;
    this._position = config.position;
    this._profileSetting.internalValue = config.profileSetting;
    this._relativePosition = config.relativePosition;
    this._schedule = config.schedule;
    this._securitySettings.internalValue = config.securitySettings;
    this._service = config.service;
    this._snippet = config.snippet;
    this._source = config.source;
    this._sourceHip = config.sourceHip;
    this._sourceUser = config.sourceUser;
    this._tag = config.tag;
    this._targetRule = config.targetRule;
    this._tenantRestrictions = config.tenantRestrictions;
    this._to = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
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

  // allow_url_category - computed: true, optional: true, required: false
  private _allowUrlCategory = new SecurityRuleAllowUrlCategoryList(this, "allow_url_category", false);
  public get allowUrlCategory() {
    return this._allowUrlCategory;
  }
  public putAllowUrlCategory(value: SecurityRuleAllowUrlCategory[] | cdktf.IResolvable) {
    this._allowUrlCategory.internalValue = value;
  }
  public resetAllowUrlCategory() {
    this._allowUrlCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUrlCategoryInput() {
    return this._allowUrlCategory.internalValue;
  }

  // allow_web_application - computed: true, optional: true, required: false
  private _allowWebApplication = new SecurityRuleAllowWebApplicationList(this, "allow_web_application", false);
  public get allowWebApplication() {
    return this._allowWebApplication;
  }
  public putAllowWebApplication(value: SecurityRuleAllowWebApplication[] | cdktf.IResolvable) {
    this._allowWebApplication.internalValue = value;
  }
  public resetAllowWebApplication() {
    this._allowWebApplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWebApplicationInput() {
    return this._allowWebApplication.internalValue;
  }

  // application - computed: true, optional: true, required: false
  private _application?: string[]; 
  public get application() {
    return this.getListAttribute('application');
  }
  public set application(value: string[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // block_url_category - computed: true, optional: true, required: false
  private _blockUrlCategory?: string[]; 
  public get blockUrlCategory() {
    return this.getListAttribute('block_url_category');
  }
  public set blockUrlCategory(value: string[]) {
    this._blockUrlCategory = value;
  }
  public resetBlockUrlCategory() {
    this._blockUrlCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUrlCategoryInput() {
    return this._blockUrlCategory;
  }

  // block_web_application - computed: true, optional: true, required: false
  private _blockWebApplication?: string[]; 
  public get blockWebApplication() {
    return this.getListAttribute('block_web_application');
  }
  public set blockWebApplication(value: string[]) {
    this._blockWebApplication = value;
  }
  public resetBlockWebApplication() {
    this._blockWebApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockWebApplicationInput() {
    return this._blockWebApplication;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string[]; 
  public get category() {
    return this.getListAttribute('category');
  }
  public set category(value: string[]) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // default_profile_settings - computed: true, optional: true, required: false
  private _defaultProfileSettings = new SecurityRuleDefaultProfileSettingsOutputReference(this, "default_profile_settings");
  public get defaultProfileSettings() {
    return this._defaultProfileSettings;
  }
  public putDefaultProfileSettings(value: SecurityRuleDefaultProfileSettings) {
    this._defaultProfileSettings.internalValue = value;
  }
  public resetDefaultProfileSettings() {
    this._defaultProfileSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProfileSettingsInput() {
    return this._defaultProfileSettings.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string[]; 
  public get destination() {
    return this.getListAttribute('destination');
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_hip - computed: true, optional: true, required: false
  private _destinationHip?: string[]; 
  public get destinationHip() {
    return this.getListAttribute('destination_hip');
  }
  public set destinationHip(value: string[]) {
    this._destinationHip = value;
  }
  public resetDestinationHip() {
    this._destinationHip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHipInput() {
    return this._destinationHip;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // devices - computed: true, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string[]; 
  public get from() {
    return this.getListAttribute('from');
  }
  public set from(value: string[]) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_end - computed: true, optional: true, required: false
  private _logEnd?: boolean | cdktf.IResolvable; 
  public get logEnd() {
    return this.getBooleanAttribute('log_end');
  }
  public set logEnd(value: boolean | cdktf.IResolvable) {
    this._logEnd = value;
  }
  public resetLogEnd() {
    this._logEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEndInput() {
    return this._logEnd;
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

  // log_settings - computed: true, optional: true, required: false
  private _logSettings = new SecurityRuleLogSettingsOutputReference(this, "log_settings");
  public get logSettings() {
    return this._logSettings;
  }
  public putLogSettings(value: SecurityRuleLogSettings) {
    this._logSettings.internalValue = value;
  }
  public resetLogSettings() {
    this._logSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingsInput() {
    return this._logSettings.internalValue;
  }

  // log_start - computed: true, optional: true, required: false
  private _logStart?: boolean | cdktf.IResolvable; 
  public get logStart() {
    return this.getBooleanAttribute('log_start');
  }
  public set logStart(value: boolean | cdktf.IResolvable) {
    this._logStart = value;
  }
  public resetLogStart() {
    this._logStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStartInput() {
    return this._logStart;
  }

  // name - computed: false, optional: true, required: false
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

  // negate_destination - computed: true, optional: true, required: false
  private _negateDestination?: boolean | cdktf.IResolvable; 
  public get negateDestination() {
    return this.getBooleanAttribute('negate_destination');
  }
  public set negateDestination(value: boolean | cdktf.IResolvable) {
    this._negateDestination = value;
  }
  public resetNegateDestination() {
    this._negateDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateDestinationInput() {
    return this._negateDestination;
  }

  // negate_source - computed: true, optional: true, required: false
  private _negateSource?: boolean | cdktf.IResolvable; 
  public get negateSource() {
    return this.getBooleanAttribute('negate_source');
  }
  public set negateSource(value: boolean | cdktf.IResolvable) {
    this._negateSource = value;
  }
  public resetNegateSource() {
    this._negateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateSourceInput() {
    return this._negateSource;
  }

  // negate_user - computed: true, optional: true, required: false
  private _negateUser?: boolean | cdktf.IResolvable; 
  public get negateUser() {
    return this.getBooleanAttribute('negate_user');
  }
  public set negateUser(value: boolean | cdktf.IResolvable) {
    this._negateUser = value;
  }
  public resetNegateUser() {
    this._negateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateUserInput() {
    return this._negateUser;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // position - computed: true, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // profile_setting - computed: true, optional: true, required: false
  private _profileSetting = new SecurityRuleProfileSettingOutputReference(this, "profile_setting");
  public get profileSetting() {
    return this._profileSetting;
  }
  public putProfileSetting(value: SecurityRuleProfileSetting) {
    this._profileSetting.internalValue = value;
  }
  public resetProfileSetting() {
    this._profileSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileSettingInput() {
    return this._profileSetting.internalValue;
  }

  // relative_position - computed: false, optional: true, required: false
  private _relativePosition?: string; 
  public get relativePosition() {
    return this.getStringAttribute('relative_position');
  }
  public set relativePosition(value: string) {
    this._relativePosition = value;
  }
  public resetRelativePosition() {
    this._relativePosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePositionInput() {
    return this._relativePosition;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // security_settings - computed: true, optional: true, required: false
  private _securitySettings = new SecurityRuleSecuritySettingsOutputReference(this, "security_settings");
  public get securitySettings() {
    return this._securitySettings;
  }
  public putSecuritySettings(value: SecurityRuleSecuritySettings) {
    this._securitySettings.internalValue = value;
  }
  public resetSecuritySettings() {
    this._securitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return this.getListAttribute('service');
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string[]; 
  public get source() {
    return this.getListAttribute('source');
  }
  public set source(value: string[]) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_hip - computed: true, optional: true, required: false
  private _sourceHip?: string[]; 
  public get sourceHip() {
    return this.getListAttribute('source_hip');
  }
  public set sourceHip(value: string[]) {
    this._sourceHip = value;
  }
  public resetSourceHip() {
    this._sourceHip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHipInput() {
    return this._sourceHip;
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // target_rule - computed: false, optional: true, required: false
  private _targetRule?: string; 
  public get targetRule() {
    return this.getStringAttribute('target_rule');
  }
  public set targetRule(value: string) {
    this._targetRule = value;
  }
  public resetTargetRule() {
    this._targetRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleInput() {
    return this._targetRule;
  }

  // tenant_restrictions - computed: true, optional: true, required: false
  private _tenantRestrictions?: string[]; 
  public get tenantRestrictions() {
    return this.getListAttribute('tenant_restrictions');
  }
  public set tenantRestrictions(value: string[]) {
    this._tenantRestrictions = value;
  }
  public resetTenantRestrictions() {
    this._tenantRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRestrictionsInput() {
    return this._tenantRestrictions;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // to - computed: false, optional: true, required: false
  private _to?: string[]; 
  public get to() {
    return this.getListAttribute('to');
  }
  public set to(value: string[]) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      allow_url_category: cdktf.listMapper(securityRuleAllowUrlCategoryToTerraform, false)(this._allowUrlCategory.internalValue),
      allow_web_application: cdktf.listMapper(securityRuleAllowWebApplicationToTerraform, false)(this._allowWebApplication.internalValue),
      application: cdktf.listMapper(cdktf.stringToTerraform, false)(this._application),
      block_url_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockUrlCategory),
      block_web_application: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockWebApplication),
      category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._category),
      default_profile_settings: securityRuleDefaultProfileSettingsToTerraform(this._defaultProfileSettings.internalValue),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      destination_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationHip),
      device: cdktf.stringToTerraform(this._device),
      devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devices),
      disabled: cdktf.booleanToTerraform(this._disabled),
      folder: cdktf.stringToTerraform(this._folder),
      from: cdktf.listMapper(cdktf.stringToTerraform, false)(this._from),
      log_end: cdktf.booleanToTerraform(this._logEnd),
      log_setting: cdktf.stringToTerraform(this._logSetting),
      log_settings: securityRuleLogSettingsToTerraform(this._logSettings.internalValue),
      log_start: cdktf.booleanToTerraform(this._logStart),
      name: cdktf.stringToTerraform(this._name),
      negate_destination: cdktf.booleanToTerraform(this._negateDestination),
      negate_source: cdktf.booleanToTerraform(this._negateSource),
      negate_user: cdktf.booleanToTerraform(this._negateUser),
      policy_type: cdktf.stringToTerraform(this._policyType),
      position: cdktf.stringToTerraform(this._position),
      profile_setting: securityRuleProfileSettingToTerraform(this._profileSetting.internalValue),
      relative_position: cdktf.stringToTerraform(this._relativePosition),
      schedule: cdktf.stringToTerraform(this._schedule),
      security_settings: securityRuleSecuritySettingsToTerraform(this._securitySettings.internalValue),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      snippet: cdktf.stringToTerraform(this._snippet),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      source_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceHip),
      source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceUser),
      tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tag),
      target_rule: cdktf.stringToTerraform(this._targetRule),
      tenant_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantRestrictions),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_url_category: {
        value: cdktf.listMapperHcl(securityRuleAllowUrlCategoryToHclTerraform, false)(this._allowUrlCategory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityRuleAllowUrlCategoryList",
      },
      allow_web_application: {
        value: cdktf.listMapperHcl(securityRuleAllowWebApplicationToHclTerraform, false)(this._allowWebApplication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityRuleAllowWebApplicationList",
      },
      application: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._application),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      block_url_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockUrlCategory),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      block_web_application: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockWebApplication),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._category),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_profile_settings: {
        value: securityRuleDefaultProfileSettingsToHclTerraform(this._defaultProfileSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityRuleDefaultProfileSettings",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destination),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destination_hip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationHip),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._from),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      log_end: {
        value: cdktf.booleanToHclTerraform(this._logEnd),
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
      log_settings: {
        value: securityRuleLogSettingsToHclTerraform(this._logSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityRuleLogSettings",
      },
      log_start: {
        value: cdktf.booleanToHclTerraform(this._logStart),
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
      negate_destination: {
        value: cdktf.booleanToHclTerraform(this._negateDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      negate_source: {
        value: cdktf.booleanToHclTerraform(this._negateSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      negate_user: {
        value: cdktf.booleanToHclTerraform(this._negateUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.stringToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_setting: {
        value: securityRuleProfileSettingToHclTerraform(this._profileSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityRuleProfileSetting",
      },
      relative_position: {
        value: cdktf.stringToHclTerraform(this._relativePosition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_settings: {
        value: securityRuleSecuritySettingsToHclTerraform(this._securitySettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityRuleSecuritySettings",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_hip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceHip),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_user: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceUser),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tag),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_rule: {
        value: cdktf.stringToHclTerraform(this._targetRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_restrictions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantRestrictions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._to),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
