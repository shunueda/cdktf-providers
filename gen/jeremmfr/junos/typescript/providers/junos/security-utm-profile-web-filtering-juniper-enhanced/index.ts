// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityUtmProfileWebFilteringJuniperEnhancedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom block message sent to HTTP client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#custom_block_message SecurityUtmProfileWebFilteringJuniperEnhanced#custom_block_message}
  */
  readonly customBlockMessage?: string;
  /**
  * Custom message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#custom_message SecurityUtmProfileWebFilteringJuniperEnhanced#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Default action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#default_action SecurityUtmProfileWebFilteringJuniperEnhanced#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The name of security utm feature-profile web-filtering juniper-enhanced profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#name SecurityUtmProfileWebFilteringJuniperEnhanced#name}
  */
  readonly name: string;
  /**
  * Do not perform safe-search for Juniper enhanced protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#no_safe_search SecurityUtmProfileWebFilteringJuniperEnhanced#no_safe_search}
  */
  readonly noSafeSearch?: boolean | cdktf.IResolvable;
  /**
  * Quarantine custom message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#quarantine_custom_message SecurityUtmProfileWebFilteringJuniperEnhanced#quarantine_custom_message}
  */
  readonly quarantineCustomMessage?: string;
  /**
  * Set timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#timeout SecurityUtmProfileWebFilteringJuniperEnhanced#timeout}
  */
  readonly timeout?: number;
  /**
  * block_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#block_message SecurityUtmProfileWebFilteringJuniperEnhanced#block_message}
  */
  readonly blockMessage?: SecurityUtmProfileWebFilteringJuniperEnhancedBlockMessage;
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#category SecurityUtmProfileWebFilteringJuniperEnhanced#category}
  */
  readonly category?: SecurityUtmProfileWebFilteringJuniperEnhancedCategory[] | cdktf.IResolvable;
  /**
  * fallback_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#fallback_settings SecurityUtmProfileWebFilteringJuniperEnhanced#fallback_settings}
  */
  readonly fallbackSettings?: SecurityUtmProfileWebFilteringJuniperEnhancedFallbackSettings;
  /**
  * quarantine_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#quarantine_message SecurityUtmProfileWebFilteringJuniperEnhanced#quarantine_message}
  */
  readonly quarantineMessage?: SecurityUtmProfileWebFilteringJuniperEnhancedQuarantineMessage;
  /**
  * site_reputation_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#site_reputation_action SecurityUtmProfileWebFilteringJuniperEnhanced#site_reputation_action}
  */
  readonly siteReputationAction?: SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationAction[] | cdktf.IResolvable;
}
export interface SecurityUtmProfileWebFilteringJuniperEnhancedBlockMessage {
  /**
  * Enable Custom redirect URL server type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#type_custom_redirect_url SecurityUtmProfileWebFilteringJuniperEnhanced#type_custom_redirect_url}
  */
  readonly typeCustomRedirectUrl?: boolean | cdktf.IResolvable;
  /**
  * URL of block message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#url SecurityUtmProfileWebFilteringJuniperEnhanced#url}
  */
  readonly url?: string;
}

export function securityUtmProfileWebFilteringJuniperEnhancedBlockMessageToTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedBlockMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_custom_redirect_url: cdktf.booleanToTerraform(struct!.typeCustomRedirectUrl),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function securityUtmProfileWebFilteringJuniperEnhancedBlockMessageToHclTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedBlockMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_custom_redirect_url: {
      value: cdktf.booleanToHclTerraform(struct!.typeCustomRedirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class SecurityUtmProfileWebFilteringJuniperEnhancedBlockMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmProfileWebFilteringJuniperEnhancedBlockMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._typeCustomRedirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeCustomRedirectUrl = this._typeCustomRedirectUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmProfileWebFilteringJuniperEnhancedBlockMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._typeCustomRedirectUrl = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._typeCustomRedirectUrl = value.typeCustomRedirectUrl;
      this._url = value.url;
    }
  }

  // type_custom_redirect_url - computed: false, optional: true, required: false
  private _typeCustomRedirectUrl?: boolean | cdktf.IResolvable; 
  public get typeCustomRedirectUrl() {
    return this.getBooleanAttribute('type_custom_redirect_url');
  }
  public set typeCustomRedirectUrl(value: boolean | cdktf.IResolvable) {
    this._typeCustomRedirectUrl = value;
  }
  public resetTypeCustomRedirectUrl() {
    this._typeCustomRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCustomRedirectUrlInput() {
    return this._typeCustomRedirectUrl;
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
export interface SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationAction {
  /**
  * Action for site-reputation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#action SecurityUtmProfileWebFilteringJuniperEnhanced#action}
  */
  readonly action: string;
  /**
  * Level of reputation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#site_reputation SecurityUtmProfileWebFilteringJuniperEnhanced#site_reputation}
  */
  readonly siteReputation: string;
}

export function securityUtmProfileWebFilteringJuniperEnhancedCategoryReputationActionToTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    site_reputation: cdktf.stringToTerraform(struct!.siteReputation),
  }
}


export function securityUtmProfileWebFilteringJuniperEnhancedCategoryReputationActionToHclTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationAction | cdktf.IResolvable): any {
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
    site_reputation: {
      value: cdktf.stringToHclTerraform(struct!.siteReputation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._siteReputation !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteReputation = this._siteReputation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._siteReputation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._siteReputation = value.siteReputation;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // site_reputation - computed: false, optional: false, required: true
  private _siteReputation?: string; 
  public get siteReputation() {
    return this.getStringAttribute('site_reputation');
  }
  public set siteReputation(value: string) {
    this._siteReputation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteReputationInput() {
    return this._siteReputation;
  }
}

export class SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationActionList extends cdktf.ComplexList {
  public internalValue? : SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationAction[] | cdktf.IResolvable

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
  public get(index: number): SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationActionOutputReference {
    return new SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityUtmProfileWebFilteringJuniperEnhancedCategory {
  /**
  * Action when web traffic matches category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#action SecurityUtmProfileWebFilteringJuniperEnhanced#action}
  */
  readonly action: string;
  /**
  * Custom message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#custom_message SecurityUtmProfileWebFilteringJuniperEnhanced#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Name of category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#name SecurityUtmProfileWebFilteringJuniperEnhanced#name}
  */
  readonly name: string;
  /**
  * reputation_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#reputation_action SecurityUtmProfileWebFilteringJuniperEnhanced#reputation_action}
  */
  readonly reputationAction?: SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationAction[] | cdktf.IResolvable;
}

export function securityUtmProfileWebFilteringJuniperEnhancedCategoryToTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    custom_message: cdktf.stringToTerraform(struct!.customMessage),
    name: cdktf.stringToTerraform(struct!.name),
    reputation_action: cdktf.listMapper(securityUtmProfileWebFilteringJuniperEnhancedCategoryReputationActionToTerraform, true)(struct!.reputationAction),
  }
}


export function securityUtmProfileWebFilteringJuniperEnhancedCategoryToHclTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedCategory | cdktf.IResolvable): any {
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
    custom_message: {
      value: cdktf.stringToHclTerraform(struct!.customMessage),
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
    reputation_action: {
      value: cdktf.listMapperHcl(securityUtmProfileWebFilteringJuniperEnhancedCategoryReputationActionToHclTerraform, true)(struct!.reputationAction),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmProfileWebFilteringJuniperEnhancedCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityUtmProfileWebFilteringJuniperEnhancedCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._customMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMessage = this._customMessage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reputationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationAction = this._reputationAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmProfileWebFilteringJuniperEnhancedCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._customMessage = undefined;
      this._name = undefined;
      this._reputationAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._customMessage = value.customMessage;
      this._name = value.name;
      this._reputationAction.internalValue = value.reputationAction;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // reputation_action - computed: false, optional: true, required: false
  private _reputationAction = new SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationActionList(this, "reputation_action", false);
  public get reputationAction() {
    return this._reputationAction;
  }
  public putReputationAction(value: SecurityUtmProfileWebFilteringJuniperEnhancedCategoryReputationAction[] | cdktf.IResolvable) {
    this._reputationAction.internalValue = value;
  }
  public resetReputationAction() {
    this._reputationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationActionInput() {
    return this._reputationAction.internalValue;
  }
}

export class SecurityUtmProfileWebFilteringJuniperEnhancedCategoryList extends cdktf.ComplexList {
  public internalValue? : SecurityUtmProfileWebFilteringJuniperEnhancedCategory[] | cdktf.IResolvable

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
  public get(index: number): SecurityUtmProfileWebFilteringJuniperEnhancedCategoryOutputReference {
    return new SecurityUtmProfileWebFilteringJuniperEnhancedCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityUtmProfileWebFilteringJuniperEnhancedFallbackSettings {
  /**
  * Default action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#default SecurityUtmProfileWebFilteringJuniperEnhanced#default}
  */
  readonly default?: string;
  /**
  * Action when device cannot connect to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#server_connectivity SecurityUtmProfileWebFilteringJuniperEnhanced#server_connectivity}
  */
  readonly serverConnectivity?: string;
  /**
  * Action when connection to server timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#timeout SecurityUtmProfileWebFilteringJuniperEnhanced#timeout}
  */
  readonly timeout?: string;
  /**
  * Action when requests exceed the limit of engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#too_many_requests SecurityUtmProfileWebFilteringJuniperEnhanced#too_many_requests}
  */
  readonly tooManyRequests?: string;
}

export function securityUtmProfileWebFilteringJuniperEnhancedFallbackSettingsToTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedFallbackSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    server_connectivity: cdktf.stringToTerraform(struct!.serverConnectivity),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    too_many_requests: cdktf.stringToTerraform(struct!.tooManyRequests),
  }
}


export function securityUtmProfileWebFilteringJuniperEnhancedFallbackSettingsToHclTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedFallbackSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_connectivity: {
      value: cdktf.stringToHclTerraform(struct!.serverConnectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    too_many_requests: {
      value: cdktf.stringToHclTerraform(struct!.tooManyRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmProfileWebFilteringJuniperEnhancedFallbackSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmProfileWebFilteringJuniperEnhancedFallbackSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._serverConnectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnectivity = this._serverConnectivity;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tooManyRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyRequests = this._tooManyRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmProfileWebFilteringJuniperEnhancedFallbackSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._serverConnectivity = undefined;
      this._timeout = undefined;
      this._tooManyRequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._serverConnectivity = value.serverConnectivity;
      this._timeout = value.timeout;
      this._tooManyRequests = value.tooManyRequests;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // server_connectivity - computed: false, optional: true, required: false
  private _serverConnectivity?: string; 
  public get serverConnectivity() {
    return this.getStringAttribute('server_connectivity');
  }
  public set serverConnectivity(value: string) {
    this._serverConnectivity = value;
  }
  public resetServerConnectivity() {
    this._serverConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnectivityInput() {
    return this._serverConnectivity;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // too_many_requests - computed: false, optional: true, required: false
  private _tooManyRequests?: string; 
  public get tooManyRequests() {
    return this.getStringAttribute('too_many_requests');
  }
  public set tooManyRequests(value: string) {
    this._tooManyRequests = value;
  }
  public resetTooManyRequests() {
    this._tooManyRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyRequestsInput() {
    return this._tooManyRequests;
  }
}
export interface SecurityUtmProfileWebFilteringJuniperEnhancedQuarantineMessage {
  /**
  * Enable Custom redirect URL server type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#type_custom_redirect_url SecurityUtmProfileWebFilteringJuniperEnhanced#type_custom_redirect_url}
  */
  readonly typeCustomRedirectUrl?: boolean | cdktf.IResolvable;
  /**
  * URL of quarantine message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#url SecurityUtmProfileWebFilteringJuniperEnhanced#url}
  */
  readonly url?: string;
}

export function securityUtmProfileWebFilteringJuniperEnhancedQuarantineMessageToTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedQuarantineMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_custom_redirect_url: cdktf.booleanToTerraform(struct!.typeCustomRedirectUrl),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function securityUtmProfileWebFilteringJuniperEnhancedQuarantineMessageToHclTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedQuarantineMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_custom_redirect_url: {
      value: cdktf.booleanToHclTerraform(struct!.typeCustomRedirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class SecurityUtmProfileWebFilteringJuniperEnhancedQuarantineMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmProfileWebFilteringJuniperEnhancedQuarantineMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._typeCustomRedirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeCustomRedirectUrl = this._typeCustomRedirectUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmProfileWebFilteringJuniperEnhancedQuarantineMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._typeCustomRedirectUrl = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._typeCustomRedirectUrl = value.typeCustomRedirectUrl;
      this._url = value.url;
    }
  }

  // type_custom_redirect_url - computed: false, optional: true, required: false
  private _typeCustomRedirectUrl?: boolean | cdktf.IResolvable; 
  public get typeCustomRedirectUrl() {
    return this.getBooleanAttribute('type_custom_redirect_url');
  }
  public set typeCustomRedirectUrl(value: boolean | cdktf.IResolvable) {
    this._typeCustomRedirectUrl = value;
  }
  public resetTypeCustomRedirectUrl() {
    this._typeCustomRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCustomRedirectUrlInput() {
    return this._typeCustomRedirectUrl;
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
export interface SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationAction {
  /**
  * Action for site-reputation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#action SecurityUtmProfileWebFilteringJuniperEnhanced#action}
  */
  readonly action: string;
  /**
  * Level of reputation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#site_reputation SecurityUtmProfileWebFilteringJuniperEnhanced#site_reputation}
  */
  readonly siteReputation: string;
}

export function securityUtmProfileWebFilteringJuniperEnhancedSiteReputationActionToTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    site_reputation: cdktf.stringToTerraform(struct!.siteReputation),
  }
}


export function securityUtmProfileWebFilteringJuniperEnhancedSiteReputationActionToHclTerraform(struct?: SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationAction | cdktf.IResolvable): any {
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
    site_reputation: {
      value: cdktf.stringToHclTerraform(struct!.siteReputation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._siteReputation !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteReputation = this._siteReputation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._siteReputation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._siteReputation = value.siteReputation;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // site_reputation - computed: false, optional: false, required: true
  private _siteReputation?: string; 
  public get siteReputation() {
    return this.getStringAttribute('site_reputation');
  }
  public set siteReputation(value: string) {
    this._siteReputation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteReputationInput() {
    return this._siteReputation;
  }
}

export class SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationActionList extends cdktf.ComplexList {
  public internalValue? : SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationAction[] | cdktf.IResolvable

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
  public get(index: number): SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationActionOutputReference {
    return new SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced junos_security_utm_profile_web_filtering_juniper_enhanced}
*/
export class SecurityUtmProfileWebFilteringJuniperEnhanced extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_utm_profile_web_filtering_juniper_enhanced";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityUtmProfileWebFilteringJuniperEnhanced resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityUtmProfileWebFilteringJuniperEnhanced to import
  * @param importFromId The id of the existing SecurityUtmProfileWebFilteringJuniperEnhanced that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityUtmProfileWebFilteringJuniperEnhanced to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_utm_profile_web_filtering_juniper_enhanced", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_enhanced junos_security_utm_profile_web_filtering_juniper_enhanced} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityUtmProfileWebFilteringJuniperEnhancedConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityUtmProfileWebFilteringJuniperEnhancedConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_utm_profile_web_filtering_juniper_enhanced',
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
    this._customBlockMessage = config.customBlockMessage;
    this._customMessage = config.customMessage;
    this._defaultAction = config.defaultAction;
    this._name = config.name;
    this._noSafeSearch = config.noSafeSearch;
    this._quarantineCustomMessage = config.quarantineCustomMessage;
    this._timeout = config.timeout;
    this._blockMessage.internalValue = config.blockMessage;
    this._category.internalValue = config.category;
    this._fallbackSettings.internalValue = config.fallbackSettings;
    this._quarantineMessage.internalValue = config.quarantineMessage;
    this._siteReputationAction.internalValue = config.siteReputationAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_block_message - computed: false, optional: true, required: false
  private _customBlockMessage?: string; 
  public get customBlockMessage() {
    return this.getStringAttribute('custom_block_message');
  }
  public set customBlockMessage(value: string) {
    this._customBlockMessage = value;
  }
  public resetCustomBlockMessage() {
    this._customBlockMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockMessageInput() {
    return this._customBlockMessage;
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

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
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

  // no_safe_search - computed: false, optional: true, required: false
  private _noSafeSearch?: boolean | cdktf.IResolvable; 
  public get noSafeSearch() {
    return this.getBooleanAttribute('no_safe_search');
  }
  public set noSafeSearch(value: boolean | cdktf.IResolvable) {
    this._noSafeSearch = value;
  }
  public resetNoSafeSearch() {
    this._noSafeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSafeSearchInput() {
    return this._noSafeSearch;
  }

  // quarantine_custom_message - computed: false, optional: true, required: false
  private _quarantineCustomMessage?: string; 
  public get quarantineCustomMessage() {
    return this.getStringAttribute('quarantine_custom_message');
  }
  public set quarantineCustomMessage(value: string) {
    this._quarantineCustomMessage = value;
  }
  public resetQuarantineCustomMessage() {
    this._quarantineCustomMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineCustomMessageInput() {
    return this._quarantineCustomMessage;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // block_message - computed: false, optional: true, required: false
  private _blockMessage = new SecurityUtmProfileWebFilteringJuniperEnhancedBlockMessageOutputReference(this, "block_message");
  public get blockMessage() {
    return this._blockMessage;
  }
  public putBlockMessage(value: SecurityUtmProfileWebFilteringJuniperEnhancedBlockMessage) {
    this._blockMessage.internalValue = value;
  }
  public resetBlockMessage() {
    this._blockMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMessageInput() {
    return this._blockMessage.internalValue;
  }

  // category - computed: false, optional: true, required: false
  private _category = new SecurityUtmProfileWebFilteringJuniperEnhancedCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: SecurityUtmProfileWebFilteringJuniperEnhancedCategory[] | cdktf.IResolvable) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // fallback_settings - computed: false, optional: true, required: false
  private _fallbackSettings = new SecurityUtmProfileWebFilteringJuniperEnhancedFallbackSettingsOutputReference(this, "fallback_settings");
  public get fallbackSettings() {
    return this._fallbackSettings;
  }
  public putFallbackSettings(value: SecurityUtmProfileWebFilteringJuniperEnhancedFallbackSettings) {
    this._fallbackSettings.internalValue = value;
  }
  public resetFallbackSettings() {
    this._fallbackSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackSettingsInput() {
    return this._fallbackSettings.internalValue;
  }

  // quarantine_message - computed: false, optional: true, required: false
  private _quarantineMessage = new SecurityUtmProfileWebFilteringJuniperEnhancedQuarantineMessageOutputReference(this, "quarantine_message");
  public get quarantineMessage() {
    return this._quarantineMessage;
  }
  public putQuarantineMessage(value: SecurityUtmProfileWebFilteringJuniperEnhancedQuarantineMessage) {
    this._quarantineMessage.internalValue = value;
  }
  public resetQuarantineMessage() {
    this._quarantineMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineMessageInput() {
    return this._quarantineMessage.internalValue;
  }

  // site_reputation_action - computed: false, optional: true, required: false
  private _siteReputationAction = new SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationActionList(this, "site_reputation_action", false);
  public get siteReputationAction() {
    return this._siteReputationAction;
  }
  public putSiteReputationAction(value: SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationAction[] | cdktf.IResolvable) {
    this._siteReputationAction.internalValue = value;
  }
  public resetSiteReputationAction() {
    this._siteReputationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteReputationActionInput() {
    return this._siteReputationAction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_block_message: cdktf.stringToTerraform(this._customBlockMessage),
      custom_message: cdktf.stringToTerraform(this._customMessage),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      name: cdktf.stringToTerraform(this._name),
      no_safe_search: cdktf.booleanToTerraform(this._noSafeSearch),
      quarantine_custom_message: cdktf.stringToTerraform(this._quarantineCustomMessage),
      timeout: cdktf.numberToTerraform(this._timeout),
      block_message: securityUtmProfileWebFilteringJuniperEnhancedBlockMessageToTerraform(this._blockMessage.internalValue),
      category: cdktf.listMapper(securityUtmProfileWebFilteringJuniperEnhancedCategoryToTerraform, true)(this._category.internalValue),
      fallback_settings: securityUtmProfileWebFilteringJuniperEnhancedFallbackSettingsToTerraform(this._fallbackSettings.internalValue),
      quarantine_message: securityUtmProfileWebFilteringJuniperEnhancedQuarantineMessageToTerraform(this._quarantineMessage.internalValue),
      site_reputation_action: cdktf.listMapper(securityUtmProfileWebFilteringJuniperEnhancedSiteReputationActionToTerraform, true)(this._siteReputationAction.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_block_message: {
        value: cdktf.stringToHclTerraform(this._customBlockMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_message: {
        value: cdktf.stringToHclTerraform(this._customMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
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
      no_safe_search: {
        value: cdktf.booleanToHclTerraform(this._noSafeSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      quarantine_custom_message: {
        value: cdktf.stringToHclTerraform(this._quarantineCustomMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_message: {
        value: securityUtmProfileWebFilteringJuniperEnhancedBlockMessageToHclTerraform(this._blockMessage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUtmProfileWebFilteringJuniperEnhancedBlockMessage",
      },
      category: {
        value: cdktf.listMapperHcl(securityUtmProfileWebFilteringJuniperEnhancedCategoryToHclTerraform, true)(this._category.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityUtmProfileWebFilteringJuniperEnhancedCategoryList",
      },
      fallback_settings: {
        value: securityUtmProfileWebFilteringJuniperEnhancedFallbackSettingsToHclTerraform(this._fallbackSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUtmProfileWebFilteringJuniperEnhancedFallbackSettings",
      },
      quarantine_message: {
        value: securityUtmProfileWebFilteringJuniperEnhancedQuarantineMessageToHclTerraform(this._quarantineMessage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUtmProfileWebFilteringJuniperEnhancedQuarantineMessage",
      },
      site_reputation_action: {
        value: cdktf.listMapperHcl(securityUtmProfileWebFilteringJuniperEnhancedSiteReputationActionToHclTerraform, true)(this._siteReputationAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityUtmProfileWebFilteringJuniperEnhancedSiteReputationActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
