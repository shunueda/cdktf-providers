// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UrlAccessProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#alert UrlAccessProfile#alert}
  */
  readonly alert?: string[];
  /**
  * Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#allow UrlAccessProfile#allow}
  */
  readonly allow?: string[];
  /**
  * Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#block UrlAccessProfile#block}
  */
  readonly block?: string[];
  /**
  * Cloud inline cat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#cloud_inline_cat UrlAccessProfile#cloud_inline_cat}
  */
  readonly cloudInlineCat?: boolean | cdktf.IResolvable;
  /**
  * Continue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#continue UrlAccessProfile#continue}
  */
  readonly continue?: string[];
  /**
  * Credential enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#credential_enforcement UrlAccessProfile#credential_enforcement}
  */
  readonly credentialEnforcement?: UrlAccessProfileCredentialEnforcement;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#description UrlAccessProfile#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#device UrlAccessProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#folder UrlAccessProfile#folder}
  */
  readonly folder?: string;
  /**
  * Local inline cat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#local_inline_cat UrlAccessProfile#local_inline_cat}
  */
  readonly localInlineCat?: boolean | cdktf.IResolvable;
  /**
  * Log container page only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#log_container_page_only UrlAccessProfile#log_container_page_only}
  */
  readonly logContainerPageOnly?: boolean | cdktf.IResolvable;
  /**
  * Log http hdr referer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#log_http_hdr_referer UrlAccessProfile#log_http_hdr_referer}
  */
  readonly logHttpHdrReferer?: boolean | cdktf.IResolvable;
  /**
  * Log http hdr user agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#log_http_hdr_user_agent UrlAccessProfile#log_http_hdr_user_agent}
  */
  readonly logHttpHdrUserAgent?: boolean | cdktf.IResolvable;
  /**
  * Log http hdr xff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#log_http_hdr_xff UrlAccessProfile#log_http_hdr_xff}
  */
  readonly logHttpHdrXff?: boolean | cdktf.IResolvable;
  /**
  * Mlav category exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#mlav_category_exception UrlAccessProfile#mlav_category_exception}
  */
  readonly mlavCategoryException?: string[];
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#name UrlAccessProfile#name}
  */
  readonly name: string;
  /**
  * Redirect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#redirect UrlAccessProfile#redirect}
  */
  readonly redirect?: string[];
  /**
  * Safe search enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#safe_search_enforcement UrlAccessProfile#safe_search_enforcement}
  */
  readonly safeSearchEnforcement?: boolean | cdktf.IResolvable;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#snippet UrlAccessProfile#snippet}
  */
  readonly snippet?: string;
}
export interface UrlAccessProfileCredentialEnforcementModeDisabled {
}

export function urlAccessProfileCredentialEnforcementModeDisabledToTerraform(struct?: UrlAccessProfileCredentialEnforcementModeDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function urlAccessProfileCredentialEnforcementModeDisabledToHclTerraform(struct?: UrlAccessProfileCredentialEnforcementModeDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UrlAccessProfileCredentialEnforcementModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UrlAccessProfileCredentialEnforcementModeDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlAccessProfileCredentialEnforcementModeDisabled | cdktf.IResolvable | undefined) {
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
export interface UrlAccessProfileCredentialEnforcementModeDomainCredentials {
}

export function urlAccessProfileCredentialEnforcementModeDomainCredentialsToTerraform(struct?: UrlAccessProfileCredentialEnforcementModeDomainCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function urlAccessProfileCredentialEnforcementModeDomainCredentialsToHclTerraform(struct?: UrlAccessProfileCredentialEnforcementModeDomainCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UrlAccessProfileCredentialEnforcementModeDomainCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UrlAccessProfileCredentialEnforcementModeDomainCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlAccessProfileCredentialEnforcementModeDomainCredentials | cdktf.IResolvable | undefined) {
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
export interface UrlAccessProfileCredentialEnforcementModeIpUser {
}

export function urlAccessProfileCredentialEnforcementModeIpUserToTerraform(struct?: UrlAccessProfileCredentialEnforcementModeIpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function urlAccessProfileCredentialEnforcementModeIpUserToHclTerraform(struct?: UrlAccessProfileCredentialEnforcementModeIpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UrlAccessProfileCredentialEnforcementModeIpUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UrlAccessProfileCredentialEnforcementModeIpUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlAccessProfileCredentialEnforcementModeIpUser | cdktf.IResolvable | undefined) {
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
export interface UrlAccessProfileCredentialEnforcementMode {
  /**
  * Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#disabled UrlAccessProfile#disabled}
  */
  readonly disabled?: UrlAccessProfileCredentialEnforcementModeDisabled;
  /**
  * Domain credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#domain_credentials UrlAccessProfile#domain_credentials}
  */
  readonly domainCredentials?: UrlAccessProfileCredentialEnforcementModeDomainCredentials;
  /**
  * Group mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#group_mapping UrlAccessProfile#group_mapping}
  */
  readonly groupMapping?: string;
  /**
  * Ip user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#ip_user UrlAccessProfile#ip_user}
  */
  readonly ipUser?: UrlAccessProfileCredentialEnforcementModeIpUser;
}

export function urlAccessProfileCredentialEnforcementModeToTerraform(struct?: UrlAccessProfileCredentialEnforcementMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: urlAccessProfileCredentialEnforcementModeDisabledToTerraform(struct!.disabled),
    domain_credentials: urlAccessProfileCredentialEnforcementModeDomainCredentialsToTerraform(struct!.domainCredentials),
    group_mapping: cdktf.stringToTerraform(struct!.groupMapping),
    ip_user: urlAccessProfileCredentialEnforcementModeIpUserToTerraform(struct!.ipUser),
  }
}


export function urlAccessProfileCredentialEnforcementModeToHclTerraform(struct?: UrlAccessProfileCredentialEnforcementMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: urlAccessProfileCredentialEnforcementModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "UrlAccessProfileCredentialEnforcementModeDisabled",
    },
    domain_credentials: {
      value: urlAccessProfileCredentialEnforcementModeDomainCredentialsToHclTerraform(struct!.domainCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "UrlAccessProfileCredentialEnforcementModeDomainCredentials",
    },
    group_mapping: {
      value: cdktf.stringToHclTerraform(struct!.groupMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_user: {
      value: urlAccessProfileCredentialEnforcementModeIpUserToHclTerraform(struct!.ipUser),
      isBlock: true,
      type: "struct",
      storageClassType: "UrlAccessProfileCredentialEnforcementModeIpUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlAccessProfileCredentialEnforcementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UrlAccessProfileCredentialEnforcementMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._domainCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainCredentials = this._domainCredentials?.internalValue;
    }
    if (this._groupMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMapping = this._groupMapping;
    }
    if (this._ipUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUser = this._ipUser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlAccessProfileCredentialEnforcementMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._domainCredentials.internalValue = undefined;
      this._groupMapping = undefined;
      this._ipUser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._domainCredentials.internalValue = value.domainCredentials;
      this._groupMapping = value.groupMapping;
      this._ipUser.internalValue = value.ipUser;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new UrlAccessProfileCredentialEnforcementModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: UrlAccessProfileCredentialEnforcementModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // domain_credentials - computed: false, optional: true, required: false
  private _domainCredentials = new UrlAccessProfileCredentialEnforcementModeDomainCredentialsOutputReference(this, "domain_credentials");
  public get domainCredentials() {
    return this._domainCredentials;
  }
  public putDomainCredentials(value: UrlAccessProfileCredentialEnforcementModeDomainCredentials) {
    this._domainCredentials.internalValue = value;
  }
  public resetDomainCredentials() {
    this._domainCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainCredentialsInput() {
    return this._domainCredentials.internalValue;
  }

  // group_mapping - computed: false, optional: true, required: false
  private _groupMapping?: string; 
  public get groupMapping() {
    return this.getStringAttribute('group_mapping');
  }
  public set groupMapping(value: string) {
    this._groupMapping = value;
  }
  public resetGroupMapping() {
    this._groupMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMappingInput() {
    return this._groupMapping;
  }

  // ip_user - computed: false, optional: true, required: false
  private _ipUser = new UrlAccessProfileCredentialEnforcementModeIpUserOutputReference(this, "ip_user");
  public get ipUser() {
    return this._ipUser;
  }
  public putIpUser(value: UrlAccessProfileCredentialEnforcementModeIpUser) {
    this._ipUser.internalValue = value;
  }
  public resetIpUser() {
    this._ipUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUserInput() {
    return this._ipUser.internalValue;
  }
}
export interface UrlAccessProfileCredentialEnforcement {
  /**
  * Alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#alert UrlAccessProfile#alert}
  */
  readonly alert?: string[];
  /**
  * Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#allow UrlAccessProfile#allow}
  */
  readonly allow?: string[];
  /**
  * Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#block UrlAccessProfile#block}
  */
  readonly block?: string[];
  /**
  * Continue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#continue UrlAccessProfile#continue}
  */
  readonly continue?: string[];
  /**
  * Log severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#log_severity UrlAccessProfile#log_severity}
  */
  readonly logSeverity?: string;
  /**
  * Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#mode UrlAccessProfile#mode}
  */
  readonly mode?: UrlAccessProfileCredentialEnforcementMode;
}

export function urlAccessProfileCredentialEnforcementToTerraform(struct?: UrlAccessProfileCredentialEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alert),
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.block),
    continue: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.continue),
    log_severity: cdktf.stringToTerraform(struct!.logSeverity),
    mode: urlAccessProfileCredentialEnforcementModeToTerraform(struct!.mode),
  }
}


export function urlAccessProfileCredentialEnforcementToHclTerraform(struct?: UrlAccessProfileCredentialEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alert),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allow),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.block),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    continue: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.continue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_severity: {
      value: cdktf.stringToHclTerraform(struct!.logSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: urlAccessProfileCredentialEnforcementModeToHclTerraform(struct!.mode),
      isBlock: true,
      type: "struct",
      storageClassType: "UrlAccessProfileCredentialEnforcementMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlAccessProfileCredentialEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UrlAccessProfileCredentialEnforcement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue;
    }
    if (this._logSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSeverity = this._logSeverity;
    }
    if (this._mode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlAccessProfileCredentialEnforcement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._allow = undefined;
      this._block = undefined;
      this._continue = undefined;
      this._logSeverity = undefined;
      this._mode.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._allow = value.allow;
      this._block = value.block;
      this._continue = value.continue;
      this._logSeverity = value.logSeverity;
      this._mode.internalValue = value.mode;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return this.getListAttribute('alert');
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return this.getListAttribute('allow');
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // block - computed: false, optional: true, required: false
  private _block?: string[]; 
  public get block() {
    return this.getListAttribute('block');
  }
  public set block(value: string[]) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // continue - computed: false, optional: true, required: false
  private _continue?: string[]; 
  public get continue() {
    return this.getListAttribute('continue');
  }
  public set continue(value: string[]) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
  }

  // log_severity - computed: true, optional: true, required: false
  private _logSeverity?: string; 
  public get logSeverity() {
    return this.getStringAttribute('log_severity');
  }
  public set logSeverity(value: string) {
    this._logSeverity = value;
  }
  public resetLogSeverity() {
    this._logSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSeverityInput() {
    return this._logSeverity;
  }

  // mode - computed: false, optional: true, required: false
  private _mode = new UrlAccessProfileCredentialEnforcementModeOutputReference(this, "mode");
  public get mode() {
    return this._mode;
  }
  public putMode(value: UrlAccessProfileCredentialEnforcementMode) {
    this._mode.internalValue = value;
  }
  public resetMode() {
    this._mode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile scm_url_access_profile}
*/
export class UrlAccessProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_url_access_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UrlAccessProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UrlAccessProfile to import
  * @param importFromId The id of the existing UrlAccessProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UrlAccessProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_url_access_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/url_access_profile scm_url_access_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UrlAccessProfileConfig
  */
  public constructor(scope: Construct, id: string, config: UrlAccessProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_url_access_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alert = config.alert;
    this._allow = config.allow;
    this._block = config.block;
    this._cloudInlineCat = config.cloudInlineCat;
    this._continue = config.continue;
    this._credentialEnforcement.internalValue = config.credentialEnforcement;
    this._description = config.description;
    this._device = config.device;
    this._folder = config.folder;
    this._localInlineCat = config.localInlineCat;
    this._logContainerPageOnly = config.logContainerPageOnly;
    this._logHttpHdrReferer = config.logHttpHdrReferer;
    this._logHttpHdrUserAgent = config.logHttpHdrUserAgent;
    this._logHttpHdrXff = config.logHttpHdrXff;
    this._mlavCategoryException = config.mlavCategoryException;
    this._name = config.name;
    this._redirect = config.redirect;
    this._safeSearchEnforcement = config.safeSearchEnforcement;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert - computed: false, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return this.getListAttribute('alert');
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return this.getListAttribute('allow');
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // block - computed: false, optional: true, required: false
  private _block?: string[]; 
  public get block() {
    return this.getListAttribute('block');
  }
  public set block(value: string[]) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // cloud_inline_cat - computed: false, optional: true, required: false
  private _cloudInlineCat?: boolean | cdktf.IResolvable; 
  public get cloudInlineCat() {
    return this.getBooleanAttribute('cloud_inline_cat');
  }
  public set cloudInlineCat(value: boolean | cdktf.IResolvable) {
    this._cloudInlineCat = value;
  }
  public resetCloudInlineCat() {
    this._cloudInlineCat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInlineCatInput() {
    return this._cloudInlineCat;
  }

  // continue - computed: false, optional: true, required: false
  private _continue?: string[]; 
  public get continue() {
    return this.getListAttribute('continue');
  }
  public set continue(value: string[]) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
  }

  // credential_enforcement - computed: false, optional: true, required: false
  private _credentialEnforcement = new UrlAccessProfileCredentialEnforcementOutputReference(this, "credential_enforcement");
  public get credentialEnforcement() {
    return this._credentialEnforcement;
  }
  public putCredentialEnforcement(value: UrlAccessProfileCredentialEnforcement) {
    this._credentialEnforcement.internalValue = value;
  }
  public resetCredentialEnforcement() {
    this._credentialEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialEnforcementInput() {
    return this._credentialEnforcement.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_inline_cat - computed: false, optional: true, required: false
  private _localInlineCat?: boolean | cdktf.IResolvable; 
  public get localInlineCat() {
    return this.getBooleanAttribute('local_inline_cat');
  }
  public set localInlineCat(value: boolean | cdktf.IResolvable) {
    this._localInlineCat = value;
  }
  public resetLocalInlineCat() {
    this._localInlineCat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInlineCatInput() {
    return this._localInlineCat;
  }

  // log_container_page_only - computed: true, optional: true, required: false
  private _logContainerPageOnly?: boolean | cdktf.IResolvable; 
  public get logContainerPageOnly() {
    return this.getBooleanAttribute('log_container_page_only');
  }
  public set logContainerPageOnly(value: boolean | cdktf.IResolvable) {
    this._logContainerPageOnly = value;
  }
  public resetLogContainerPageOnly() {
    this._logContainerPageOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logContainerPageOnlyInput() {
    return this._logContainerPageOnly;
  }

  // log_http_hdr_referer - computed: true, optional: true, required: false
  private _logHttpHdrReferer?: boolean | cdktf.IResolvable; 
  public get logHttpHdrReferer() {
    return this.getBooleanAttribute('log_http_hdr_referer');
  }
  public set logHttpHdrReferer(value: boolean | cdktf.IResolvable) {
    this._logHttpHdrReferer = value;
  }
  public resetLogHttpHdrReferer() {
    this._logHttpHdrReferer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHttpHdrRefererInput() {
    return this._logHttpHdrReferer;
  }

  // log_http_hdr_user_agent - computed: true, optional: true, required: false
  private _logHttpHdrUserAgent?: boolean | cdktf.IResolvable; 
  public get logHttpHdrUserAgent() {
    return this.getBooleanAttribute('log_http_hdr_user_agent');
  }
  public set logHttpHdrUserAgent(value: boolean | cdktf.IResolvable) {
    this._logHttpHdrUserAgent = value;
  }
  public resetLogHttpHdrUserAgent() {
    this._logHttpHdrUserAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHttpHdrUserAgentInput() {
    return this._logHttpHdrUserAgent;
  }

  // log_http_hdr_xff - computed: true, optional: true, required: false
  private _logHttpHdrXff?: boolean | cdktf.IResolvable; 
  public get logHttpHdrXff() {
    return this.getBooleanAttribute('log_http_hdr_xff');
  }
  public set logHttpHdrXff(value: boolean | cdktf.IResolvable) {
    this._logHttpHdrXff = value;
  }
  public resetLogHttpHdrXff() {
    this._logHttpHdrXff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHttpHdrXffInput() {
    return this._logHttpHdrXff;
  }

  // mlav_category_exception - computed: false, optional: true, required: false
  private _mlavCategoryException?: string[]; 
  public get mlavCategoryException() {
    return this.getListAttribute('mlav_category_exception');
  }
  public set mlavCategoryException(value: string[]) {
    this._mlavCategoryException = value;
  }
  public resetMlavCategoryException() {
    this._mlavCategoryException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlavCategoryExceptionInput() {
    return this._mlavCategoryException;
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

  // redirect - computed: false, optional: true, required: false
  private _redirect?: string[]; 
  public get redirect() {
    return this.getListAttribute('redirect');
  }
  public set redirect(value: string[]) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // safe_search_enforcement - computed: true, optional: true, required: false
  private _safeSearchEnforcement?: boolean | cdktf.IResolvable; 
  public get safeSearchEnforcement() {
    return this.getBooleanAttribute('safe_search_enforcement');
  }
  public set safeSearchEnforcement(value: boolean | cdktf.IResolvable) {
    this._safeSearchEnforcement = value;
  }
  public resetSafeSearchEnforcement() {
    this._safeSearchEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeSearchEnforcementInput() {
    return this._safeSearchEnforcement;
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

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alert),
      allow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allow),
      block: cdktf.listMapper(cdktf.stringToTerraform, false)(this._block),
      cloud_inline_cat: cdktf.booleanToTerraform(this._cloudInlineCat),
      continue: cdktf.listMapper(cdktf.stringToTerraform, false)(this._continue),
      credential_enforcement: urlAccessProfileCredentialEnforcementToTerraform(this._credentialEnforcement.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      local_inline_cat: cdktf.booleanToTerraform(this._localInlineCat),
      log_container_page_only: cdktf.booleanToTerraform(this._logContainerPageOnly),
      log_http_hdr_referer: cdktf.booleanToTerraform(this._logHttpHdrReferer),
      log_http_hdr_user_agent: cdktf.booleanToTerraform(this._logHttpHdrUserAgent),
      log_http_hdr_xff: cdktf.booleanToTerraform(this._logHttpHdrXff),
      mlav_category_exception: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mlavCategoryException),
      name: cdktf.stringToTerraform(this._name),
      redirect: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirect),
      safe_search_enforcement: cdktf.booleanToTerraform(this._safeSearchEnforcement),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alert),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allow),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      block: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._block),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cloud_inline_cat: {
        value: cdktf.booleanToHclTerraform(this._cloudInlineCat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      continue: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._continue),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      credential_enforcement: {
        value: urlAccessProfileCredentialEnforcementToHclTerraform(this._credentialEnforcement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UrlAccessProfileCredentialEnforcement",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_inline_cat: {
        value: cdktf.booleanToHclTerraform(this._localInlineCat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_container_page_only: {
        value: cdktf.booleanToHclTerraform(this._logContainerPageOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_http_hdr_referer: {
        value: cdktf.booleanToHclTerraform(this._logHttpHdrReferer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_http_hdr_user_agent: {
        value: cdktf.booleanToHclTerraform(this._logHttpHdrUserAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_http_hdr_xff: {
        value: cdktf.booleanToHclTerraform(this._logHttpHdrXff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mlav_category_exception: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mlavCategoryException),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirect),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      safe_search_enforcement: {
        value: cdktf.booleanToHclTerraform(this._safeSearchEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
