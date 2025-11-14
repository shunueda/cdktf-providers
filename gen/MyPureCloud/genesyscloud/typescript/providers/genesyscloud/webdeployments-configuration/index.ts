// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebdeploymentsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default language to use for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#default_language WebdeploymentsConfiguration#default_language}
  */
  readonly defaultLanguage: string;
  /**
  * Deployment description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#description WebdeploymentsConfiguration#description}
  */
  readonly description?: string;
  /**
  * Headless Mode Support which Controls UI components. When enabled, native UI components will be disabled and allows for custom-built UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#headless_mode_enabled WebdeploymentsConfiguration#headless_mode_enabled}
  */
  readonly headlessModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#id WebdeploymentsConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of languages supported on the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#languages WebdeploymentsConfiguration#languages}
  */
  readonly languages: string[];
  /**
  * Deployment name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#name WebdeploymentsConfiguration#name}
  */
  readonly name: string;
  /**
  * The current status of the deployment. Valid values: Pending, Active, Inactive, Error, Deleting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#status WebdeploymentsConfiguration#status}
  */
  readonly status?: string;
  /**
  * authentication_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#authentication_settings WebdeploymentsConfiguration#authentication_settings}
  */
  readonly authenticationSettings?: WebdeploymentsConfigurationAuthenticationSettings;
  /**
  * cobrowse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#cobrowse WebdeploymentsConfiguration#cobrowse}
  */
  readonly cobrowse?: WebdeploymentsConfigurationCobrowse;
  /**
  * custom_i18n_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#custom_i18n_labels WebdeploymentsConfiguration#custom_i18n_labels}
  */
  readonly customI18NLabels?: WebdeploymentsConfigurationCustomI18NLabels[] | cdktf.IResolvable;
  /**
  * journey_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#journey_events WebdeploymentsConfiguration#journey_events}
  */
  readonly journeyEvents?: WebdeploymentsConfigurationJourneyEvents;
  /**
  * messenger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#messenger WebdeploymentsConfiguration#messenger}
  */
  readonly messenger?: WebdeploymentsConfigurationMessenger;
  /**
  * position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#position WebdeploymentsConfiguration#position}
  */
  readonly position?: WebdeploymentsConfigurationPosition;
  /**
  * support_center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#support_center WebdeploymentsConfiguration#support_center}
  */
  readonly supportCenter?: WebdeploymentsConfigurationSupportCenter;
}
export interface WebdeploymentsConfigurationAuthenticationSettings {
  /**
  * Allow end-users to upgrade an anonymous session to authenticated conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#allow_session_upgrade WebdeploymentsConfiguration#allow_session_upgrade}
  */
  readonly allowSessionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Indicate if these auth is required for this deployment. If, for example, this flag is set to true then webmessaging sessions can not send messages unless the end-user is authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The integration identifier which contains the auth settings required on the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#integration_id WebdeploymentsConfiguration#integration_id}
  */
  readonly integrationId: string;
}

export function webdeploymentsConfigurationAuthenticationSettingsToTerraform(struct?: WebdeploymentsConfigurationAuthenticationSettingsOutputReference | WebdeploymentsConfigurationAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_session_upgrade: cdktf.booleanToTerraform(struct!.allowSessionUpgrade),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
  }
}


export function webdeploymentsConfigurationAuthenticationSettingsToHclTerraform(struct?: WebdeploymentsConfigurationAuthenticationSettingsOutputReference | WebdeploymentsConfigurationAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_session_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.allowSessionUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSessionUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSessionUpgrade = this._allowSessionUpgrade;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSessionUpgrade = undefined;
      this._enabled = undefined;
      this._integrationId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSessionUpgrade = value.allowSessionUpgrade;
      this._enabled = value.enabled;
      this._integrationId = value.integrationId;
    }
  }

  // allow_session_upgrade - computed: false, optional: true, required: false
  private _allowSessionUpgrade?: boolean | cdktf.IResolvable; 
  public get allowSessionUpgrade() {
    return this.getBooleanAttribute('allow_session_upgrade');
  }
  public set allowSessionUpgrade(value: boolean | cdktf.IResolvable) {
    this._allowSessionUpgrade = value;
  }
  public resetAllowSessionUpgrade() {
    this._allowSessionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSessionUpgradeInput() {
    return this._allowSessionUpgrade;
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

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }
}
export interface WebdeploymentsConfigurationCobrowsePauseCriteria {
  /**
  * The condition to be applied to the `url_fragment`. Conditions are 'includes', 'does_not_include', 'starts_with', 'ends_with', 'equals'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#condition WebdeploymentsConfiguration#condition}
  */
  readonly condition: string;
  /**
  * A string representing a part of the URL that, when matched according to the specified condition, will trigger a pause in the cobrowse session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#url_fragment WebdeploymentsConfiguration#url_fragment}
  */
  readonly urlFragment: string;
}

export function webdeploymentsConfigurationCobrowsePauseCriteriaToTerraform(struct?: WebdeploymentsConfigurationCobrowsePauseCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    url_fragment: cdktf.stringToTerraform(struct!.urlFragment),
  }
}


export function webdeploymentsConfigurationCobrowsePauseCriteriaToHclTerraform(struct?: WebdeploymentsConfigurationCobrowsePauseCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_fragment: {
      value: cdktf.stringToHclTerraform(struct!.urlFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationCobrowsePauseCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationCobrowsePauseCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._urlFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFragment = this._urlFragment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationCobrowsePauseCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._urlFragment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._urlFragment = value.urlFragment;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // url_fragment - computed: false, optional: false, required: true
  private _urlFragment?: string; 
  public get urlFragment() {
    return this.getStringAttribute('url_fragment');
  }
  public set urlFragment(value: string) {
    this._urlFragment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFragmentInput() {
    return this._urlFragment;
  }
}

export class WebdeploymentsConfigurationCobrowsePauseCriteriaList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationCobrowsePauseCriteria[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationCobrowsePauseCriteriaOutputReference {
    return new WebdeploymentsConfigurationCobrowsePauseCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationCobrowse {
  /**
  * Whether agent can take control over customer's screen or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#allow_agent_control WebdeploymentsConfiguration#allow_agent_control}
  */
  readonly allowAgentControl?: boolean | cdktf.IResolvable;
  /**
  * Whether agent can use navigation feature over customer's screen or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#allow_agent_navigation WebdeploymentsConfiguration#allow_agent_navigation}
  */
  readonly allowAgentNavigation?: boolean | cdktf.IResolvable;
  /**
  * Whether drawing is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#allow_draw WebdeploymentsConfiguration#allow_draw}
  */
  readonly allowDraw?: boolean | cdktf.IResolvable;
  /**
  * List of channels through which cobrowse is available (for now only Webmessaging and Voice)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#channels WebdeploymentsConfiguration#channels}
  */
  readonly channels?: string[];
  /**
  * Whether or not cobrowse is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of CSS selectors which should be masked when screen sharing is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#mask_selectors WebdeploymentsConfiguration#mask_selectors}
  */
  readonly maskSelectors?: string[];
  /**
  * List of CSS selectors which should be read-only when screen sharing is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#readonly_selectors WebdeploymentsConfiguration#readonly_selectors}
  */
  readonly readonlySelectors?: string[];
  /**
  * pause_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#pause_criteria WebdeploymentsConfiguration#pause_criteria}
  */
  readonly pauseCriteria?: WebdeploymentsConfigurationCobrowsePauseCriteria[] | cdktf.IResolvable;
}

export function webdeploymentsConfigurationCobrowseToTerraform(struct?: WebdeploymentsConfigurationCobrowseOutputReference | WebdeploymentsConfigurationCobrowse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_agent_control: cdktf.booleanToTerraform(struct!.allowAgentControl),
    allow_agent_navigation: cdktf.booleanToTerraform(struct!.allowAgentNavigation),
    allow_draw: cdktf.booleanToTerraform(struct!.allowDraw),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mask_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maskSelectors),
    readonly_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readonlySelectors),
    pause_criteria: cdktf.listMapper(webdeploymentsConfigurationCobrowsePauseCriteriaToTerraform, true)(struct!.pauseCriteria),
  }
}


export function webdeploymentsConfigurationCobrowseToHclTerraform(struct?: WebdeploymentsConfigurationCobrowseOutputReference | WebdeploymentsConfigurationCobrowse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_agent_control: {
      value: cdktf.booleanToHclTerraform(struct!.allowAgentControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_agent_navigation: {
      value: cdktf.booleanToHclTerraform(struct!.allowAgentNavigation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_draw: {
      value: cdktf.booleanToHclTerraform(struct!.allowDraw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mask_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.maskSelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readonly_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readonlySelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pause_criteria: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationCobrowsePauseCriteriaToHclTerraform, true)(struct!.pauseCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationCobrowsePauseCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationCobrowseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationCobrowse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAgentControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAgentControl = this._allowAgentControl;
    }
    if (this._allowAgentNavigation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAgentNavigation = this._allowAgentNavigation;
    }
    if (this._allowDraw !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDraw = this._allowDraw;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maskSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskSelectors = this._maskSelectors;
    }
    if (this._readonlySelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlySelectors = this._readonlySelectors;
    }
    if (this._pauseCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseCriteria = this._pauseCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationCobrowse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAgentControl = undefined;
      this._allowAgentNavigation = undefined;
      this._allowDraw = undefined;
      this._channels = undefined;
      this._enabled = undefined;
      this._maskSelectors = undefined;
      this._readonlySelectors = undefined;
      this._pauseCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAgentControl = value.allowAgentControl;
      this._allowAgentNavigation = value.allowAgentNavigation;
      this._allowDraw = value.allowDraw;
      this._channels = value.channels;
      this._enabled = value.enabled;
      this._maskSelectors = value.maskSelectors;
      this._readonlySelectors = value.readonlySelectors;
      this._pauseCriteria.internalValue = value.pauseCriteria;
    }
  }

  // allow_agent_control - computed: true, optional: true, required: false
  private _allowAgentControl?: boolean | cdktf.IResolvable; 
  public get allowAgentControl() {
    return this.getBooleanAttribute('allow_agent_control');
  }
  public set allowAgentControl(value: boolean | cdktf.IResolvable) {
    this._allowAgentControl = value;
  }
  public resetAllowAgentControl() {
    this._allowAgentControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAgentControlInput() {
    return this._allowAgentControl;
  }

  // allow_agent_navigation - computed: true, optional: true, required: false
  private _allowAgentNavigation?: boolean | cdktf.IResolvable; 
  public get allowAgentNavigation() {
    return this.getBooleanAttribute('allow_agent_navigation');
  }
  public set allowAgentNavigation(value: boolean | cdktf.IResolvable) {
    this._allowAgentNavigation = value;
  }
  public resetAllowAgentNavigation() {
    this._allowAgentNavigation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAgentNavigationInput() {
    return this._allowAgentNavigation;
  }

  // allow_draw - computed: true, optional: true, required: false
  private _allowDraw?: boolean | cdktf.IResolvable; 
  public get allowDraw() {
    return this.getBooleanAttribute('allow_draw');
  }
  public set allowDraw(value: boolean | cdktf.IResolvable) {
    this._allowDraw = value;
  }
  public resetAllowDraw() {
    this._allowDraw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDrawInput() {
    return this._allowDraw;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
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

  // mask_selectors - computed: false, optional: true, required: false
  private _maskSelectors?: string[]; 
  public get maskSelectors() {
    return this.getListAttribute('mask_selectors');
  }
  public set maskSelectors(value: string[]) {
    this._maskSelectors = value;
  }
  public resetMaskSelectors() {
    this._maskSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskSelectorsInput() {
    return this._maskSelectors;
  }

  // readonly_selectors - computed: false, optional: true, required: false
  private _readonlySelectors?: string[]; 
  public get readonlySelectors() {
    return this.getListAttribute('readonly_selectors');
  }
  public set readonlySelectors(value: string[]) {
    this._readonlySelectors = value;
  }
  public resetReadonlySelectors() {
    this._readonlySelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlySelectorsInput() {
    return this._readonlySelectors;
  }

  // pause_criteria - computed: false, optional: true, required: false
  private _pauseCriteria = new WebdeploymentsConfigurationCobrowsePauseCriteriaList(this, "pause_criteria", false);
  public get pauseCriteria() {
    return this._pauseCriteria;
  }
  public putPauseCriteria(value: WebdeploymentsConfigurationCobrowsePauseCriteria[] | cdktf.IResolvable) {
    this._pauseCriteria.internalValue = value;
  }
  public resetPauseCriteria() {
    this._pauseCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseCriteriaInput() {
    return this._pauseCriteria.internalValue;
  }
}
export interface WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabels {
  /**
  * Contains localized label key used in messenger homescreen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#key WebdeploymentsConfiguration#key}
  */
  readonly key: string;
  /**
  * Contains localized label value used in messenger homescreen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#value WebdeploymentsConfiguration#value}
  */
  readonly value: string;
}

export function webdeploymentsConfigurationCustomI18NLabelsLocalizedLabelsToTerraform(struct?: WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webdeploymentsConfigurationCustomI18NLabelsLocalizedLabelsToHclTerraform(struct?: WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabelsList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabels[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabelsOutputReference {
    return new WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationCustomI18NLabels {
  /**
  * Language of localized labels in homescreen app (eg. en-us, de-de)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#language WebdeploymentsConfiguration#language}
  */
  readonly language?: string;
  /**
  * localized_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#localized_labels WebdeploymentsConfiguration#localized_labels}
  */
  readonly localizedLabels?: WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabels[] | cdktf.IResolvable;
}

export function webdeploymentsConfigurationCustomI18NLabelsToTerraform(struct?: WebdeploymentsConfigurationCustomI18NLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
    localized_labels: cdktf.listMapper(webdeploymentsConfigurationCustomI18NLabelsLocalizedLabelsToTerraform, true)(struct!.localizedLabels),
  }
}


export function webdeploymentsConfigurationCustomI18NLabelsToHclTerraform(struct?: WebdeploymentsConfigurationCustomI18NLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localized_labels: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationCustomI18NLabelsLocalizedLabelsToHclTerraform, true)(struct!.localizedLabels),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationCustomI18NLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationCustomI18NLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._localizedLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localizedLabels = this._localizedLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationCustomI18NLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._language = undefined;
      this._localizedLabels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._language = value.language;
      this._localizedLabels.internalValue = value.localizedLabels;
    }
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // localized_labels - computed: false, optional: true, required: false
  private _localizedLabels = new WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabelsList(this, "localized_labels", false);
  public get localizedLabels() {
    return this._localizedLabels;
  }
  public putLocalizedLabels(value: WebdeploymentsConfigurationCustomI18NLabelsLocalizedLabels[] | cdktf.IResolvable) {
    this._localizedLabels.internalValue = value;
  }
  public resetLocalizedLabels() {
    this._localizedLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedLabelsInput() {
    return this._localizedLabels.internalValue;
  }
}

export class WebdeploymentsConfigurationCustomI18NLabelsList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationCustomI18NLabels[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationCustomI18NLabelsOutputReference {
    return new WebdeploymentsConfigurationCustomI18NLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationJourneyEventsClickEvent {
  /**
  * Name of event triggered when element matching selector is interacted with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#event_name WebdeploymentsConfiguration#event_name}
  */
  readonly eventName: string;
  /**
  * Element that triggers event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#selector WebdeploymentsConfiguration#selector}
  */
  readonly selector: string;
}

export function webdeploymentsConfigurationJourneyEventsClickEventToTerraform(struct?: WebdeploymentsConfigurationJourneyEventsClickEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_name: cdktf.stringToTerraform(struct!.eventName),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function webdeploymentsConfigurationJourneyEventsClickEventToHclTerraform(struct?: WebdeploymentsConfigurationJourneyEventsClickEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_name: {
      value: cdktf.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationJourneyEventsClickEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationJourneyEventsClickEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationJourneyEventsClickEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventName = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventName = value.eventName;
      this._selector = value.selector;
    }
  }

  // event_name - computed: false, optional: false, required: true
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class WebdeploymentsConfigurationJourneyEventsClickEventList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationJourneyEventsClickEvent[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationJourneyEventsClickEventOutputReference {
    return new WebdeploymentsConfigurationJourneyEventsClickEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationJourneyEventsFormTrackEvent {
  /**
  * Whether to capture the form data in the form abandoned event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#capture_data_on_form_abandon WebdeploymentsConfiguration#capture_data_on_form_abandon}
  */
  readonly captureDataOnFormAbandon: boolean | cdktf.IResolvable;
  /**
  * Whether to capture the form data in the form submitted event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#capture_data_on_form_submit WebdeploymentsConfiguration#capture_data_on_form_submit}
  */
  readonly captureDataOnFormSubmit: boolean | cdktf.IResolvable;
  /**
  * Prefix for the form submitted or abandoned event name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#form_name WebdeploymentsConfiguration#form_name}
  */
  readonly formName: string;
  /**
  * Form element that triggers the form submitted or abandoned event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#selector WebdeploymentsConfiguration#selector}
  */
  readonly selector: string;
}

export function webdeploymentsConfigurationJourneyEventsFormTrackEventToTerraform(struct?: WebdeploymentsConfigurationJourneyEventsFormTrackEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_data_on_form_abandon: cdktf.booleanToTerraform(struct!.captureDataOnFormAbandon),
    capture_data_on_form_submit: cdktf.booleanToTerraform(struct!.captureDataOnFormSubmit),
    form_name: cdktf.stringToTerraform(struct!.formName),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function webdeploymentsConfigurationJourneyEventsFormTrackEventToHclTerraform(struct?: WebdeploymentsConfigurationJourneyEventsFormTrackEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_data_on_form_abandon: {
      value: cdktf.booleanToHclTerraform(struct!.captureDataOnFormAbandon),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capture_data_on_form_submit: {
      value: cdktf.booleanToHclTerraform(struct!.captureDataOnFormSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    form_name: {
      value: cdktf.stringToHclTerraform(struct!.formName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationJourneyEventsFormTrackEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationJourneyEventsFormTrackEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureDataOnFormAbandon !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureDataOnFormAbandon = this._captureDataOnFormAbandon;
    }
    if (this._captureDataOnFormSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureDataOnFormSubmit = this._captureDataOnFormSubmit;
    }
    if (this._formName !== undefined) {
      hasAnyValues = true;
      internalValueResult.formName = this._formName;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationJourneyEventsFormTrackEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureDataOnFormAbandon = undefined;
      this._captureDataOnFormSubmit = undefined;
      this._formName = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureDataOnFormAbandon = value.captureDataOnFormAbandon;
      this._captureDataOnFormSubmit = value.captureDataOnFormSubmit;
      this._formName = value.formName;
      this._selector = value.selector;
    }
  }

  // capture_data_on_form_abandon - computed: false, optional: false, required: true
  private _captureDataOnFormAbandon?: boolean | cdktf.IResolvable; 
  public get captureDataOnFormAbandon() {
    return this.getBooleanAttribute('capture_data_on_form_abandon');
  }
  public set captureDataOnFormAbandon(value: boolean | cdktf.IResolvable) {
    this._captureDataOnFormAbandon = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureDataOnFormAbandonInput() {
    return this._captureDataOnFormAbandon;
  }

  // capture_data_on_form_submit - computed: false, optional: false, required: true
  private _captureDataOnFormSubmit?: boolean | cdktf.IResolvable; 
  public get captureDataOnFormSubmit() {
    return this.getBooleanAttribute('capture_data_on_form_submit');
  }
  public set captureDataOnFormSubmit(value: boolean | cdktf.IResolvable) {
    this._captureDataOnFormSubmit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureDataOnFormSubmitInput() {
    return this._captureDataOnFormSubmit;
  }

  // form_name - computed: false, optional: false, required: true
  private _formName?: string; 
  public get formName() {
    return this.getStringAttribute('form_name');
  }
  public set formName(value: string) {
    this._formName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formNameInput() {
    return this._formName;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class WebdeploymentsConfigurationJourneyEventsFormTrackEventList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationJourneyEventsFormTrackEvent[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationJourneyEventsFormTrackEventOutputReference {
    return new WebdeploymentsConfigurationJourneyEventsFormTrackEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationJourneyEventsIdleEvent {
  /**
  * Name of event triggered after period of inactivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#event_name WebdeploymentsConfiguration#event_name}
  */
  readonly eventName: string;
  /**
  * Number of seconds of inactivity before an event is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#idle_after_seconds WebdeploymentsConfiguration#idle_after_seconds}
  */
  readonly idleAfterSeconds?: number;
}

export function webdeploymentsConfigurationJourneyEventsIdleEventToTerraform(struct?: WebdeploymentsConfigurationJourneyEventsIdleEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_name: cdktf.stringToTerraform(struct!.eventName),
    idle_after_seconds: cdktf.numberToTerraform(struct!.idleAfterSeconds),
  }
}


export function webdeploymentsConfigurationJourneyEventsIdleEventToHclTerraform(struct?: WebdeploymentsConfigurationJourneyEventsIdleEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_name: {
      value: cdktf.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.idleAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationJourneyEventsIdleEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationJourneyEventsIdleEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._idleAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleAfterSeconds = this._idleAfterSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationJourneyEventsIdleEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventName = undefined;
      this._idleAfterSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventName = value.eventName;
      this._idleAfterSeconds = value.idleAfterSeconds;
    }
  }

  // event_name - computed: false, optional: false, required: true
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // idle_after_seconds - computed: false, optional: true, required: false
  private _idleAfterSeconds?: number; 
  public get idleAfterSeconds() {
    return this.getNumberAttribute('idle_after_seconds');
  }
  public set idleAfterSeconds(value: number) {
    this._idleAfterSeconds = value;
  }
  public resetIdleAfterSeconds() {
    this._idleAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleAfterSecondsInput() {
    return this._idleAfterSeconds;
  }
}

export class WebdeploymentsConfigurationJourneyEventsIdleEventList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationJourneyEventsIdleEvent[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationJourneyEventsIdleEventOutputReference {
    return new WebdeploymentsConfigurationJourneyEventsIdleEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationJourneyEventsInViewportEvent {
  /**
  * Name of event triggered when element matching selector is interacted with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#event_name WebdeploymentsConfiguration#event_name}
  */
  readonly eventName: string;
  /**
  * Element that triggers event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#selector WebdeploymentsConfiguration#selector}
  */
  readonly selector: string;
}

export function webdeploymentsConfigurationJourneyEventsInViewportEventToTerraform(struct?: WebdeploymentsConfigurationJourneyEventsInViewportEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_name: cdktf.stringToTerraform(struct!.eventName),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function webdeploymentsConfigurationJourneyEventsInViewportEventToHclTerraform(struct?: WebdeploymentsConfigurationJourneyEventsInViewportEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_name: {
      value: cdktf.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationJourneyEventsInViewportEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationJourneyEventsInViewportEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationJourneyEventsInViewportEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventName = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventName = value.eventName;
      this._selector = value.selector;
    }
  }

  // event_name - computed: false, optional: false, required: true
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class WebdeploymentsConfigurationJourneyEventsInViewportEventList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationJourneyEventsInViewportEvent[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationJourneyEventsInViewportEventOutputReference {
    return new WebdeploymentsConfigurationJourneyEventsInViewportEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationJourneyEventsScrollDepthEvent {
  /**
  * Name of event triggered after scrolling to the specified percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#event_name WebdeploymentsConfiguration#event_name}
  */
  readonly eventName: string;
  /**
  * Percentage of a webpage at which an event is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#percentage WebdeploymentsConfiguration#percentage}
  */
  readonly percentage: number;
}

export function webdeploymentsConfigurationJourneyEventsScrollDepthEventToTerraform(struct?: WebdeploymentsConfigurationJourneyEventsScrollDepthEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_name: cdktf.stringToTerraform(struct!.eventName),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function webdeploymentsConfigurationJourneyEventsScrollDepthEventToHclTerraform(struct?: WebdeploymentsConfigurationJourneyEventsScrollDepthEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_name: {
      value: cdktf.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationJourneyEventsScrollDepthEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationJourneyEventsScrollDepthEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationJourneyEventsScrollDepthEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventName = undefined;
      this._percentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventName = value.eventName;
      this._percentage = value.percentage;
    }
  }

  // event_name - computed: false, optional: false, required: true
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}

export class WebdeploymentsConfigurationJourneyEventsScrollDepthEventList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationJourneyEventsScrollDepthEvent[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationJourneyEventsScrollDepthEventOutputReference {
    return new WebdeploymentsConfigurationJourneyEventsScrollDepthEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationJourneyEvents {
  /**
  * Whether or not journey event collection is enabled Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * *DEPRECATED: This field has no effect and will be removed in a later version.* List of parameters to be excluded from the query string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#excluded_query_parameters WebdeploymentsConfiguration#excluded_query_parameters}
  */
  readonly excludedQueryParameters?: string[];
  /**
  * Controls how the pageview events are tracked.Valid values: Auto, Once, Off
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#pageview_config WebdeploymentsConfiguration#pageview_config}
  */
  readonly pageviewConfig?: string;
  /**
  * *DEPRECATED: This field has no effect and will be removed in a later version.* List of query parameters used for search (e.g. 'q')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#search_query_parameters WebdeploymentsConfiguration#search_query_parameters}
  */
  readonly searchQueryParameters?: string[];
  /**
  * *DEPRECATED: This field has no effect and will be removed in a later version.* Whether or not to keep the URL fragment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#should_keep_url_fragment WebdeploymentsConfiguration#should_keep_url_fragment}
  */
  readonly shouldKeepUrlFragment?: boolean | cdktf.IResolvable;
  /**
  * click_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#click_event WebdeploymentsConfiguration#click_event}
  */
  readonly clickEvent?: WebdeploymentsConfigurationJourneyEventsClickEvent[] | cdktf.IResolvable;
  /**
  * form_track_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#form_track_event WebdeploymentsConfiguration#form_track_event}
  */
  readonly formTrackEvent?: WebdeploymentsConfigurationJourneyEventsFormTrackEvent[] | cdktf.IResolvable;
  /**
  * idle_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#idle_event WebdeploymentsConfiguration#idle_event}
  */
  readonly idleEvent?: WebdeploymentsConfigurationJourneyEventsIdleEvent[] | cdktf.IResolvable;
  /**
  * in_viewport_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#in_viewport_event WebdeploymentsConfiguration#in_viewport_event}
  */
  readonly inViewportEvent?: WebdeploymentsConfigurationJourneyEventsInViewportEvent[] | cdktf.IResolvable;
  /**
  * scroll_depth_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#scroll_depth_event WebdeploymentsConfiguration#scroll_depth_event}
  */
  readonly scrollDepthEvent?: WebdeploymentsConfigurationJourneyEventsScrollDepthEvent[] | cdktf.IResolvable;
}

export function webdeploymentsConfigurationJourneyEventsToTerraform(struct?: WebdeploymentsConfigurationJourneyEventsOutputReference | WebdeploymentsConfigurationJourneyEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excluded_query_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedQueryParameters),
    pageview_config: cdktf.stringToTerraform(struct!.pageviewConfig),
    search_query_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchQueryParameters),
    should_keep_url_fragment: cdktf.booleanToTerraform(struct!.shouldKeepUrlFragment),
    click_event: cdktf.listMapper(webdeploymentsConfigurationJourneyEventsClickEventToTerraform, true)(struct!.clickEvent),
    form_track_event: cdktf.listMapper(webdeploymentsConfigurationJourneyEventsFormTrackEventToTerraform, true)(struct!.formTrackEvent),
    idle_event: cdktf.listMapper(webdeploymentsConfigurationJourneyEventsIdleEventToTerraform, true)(struct!.idleEvent),
    in_viewport_event: cdktf.listMapper(webdeploymentsConfigurationJourneyEventsInViewportEventToTerraform, true)(struct!.inViewportEvent),
    scroll_depth_event: cdktf.listMapper(webdeploymentsConfigurationJourneyEventsScrollDepthEventToTerraform, true)(struct!.scrollDepthEvent),
  }
}


export function webdeploymentsConfigurationJourneyEventsToHclTerraform(struct?: WebdeploymentsConfigurationJourneyEventsOutputReference | WebdeploymentsConfigurationJourneyEvents): any {
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
    excluded_query_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pageview_config: {
      value: cdktf.stringToHclTerraform(struct!.pageviewConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_query_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    should_keep_url_fragment: {
      value: cdktf.booleanToHclTerraform(struct!.shouldKeepUrlFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    click_event: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationJourneyEventsClickEventToHclTerraform, true)(struct!.clickEvent),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationJourneyEventsClickEventList",
    },
    form_track_event: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationJourneyEventsFormTrackEventToHclTerraform, true)(struct!.formTrackEvent),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationJourneyEventsFormTrackEventList",
    },
    idle_event: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationJourneyEventsIdleEventToHclTerraform, true)(struct!.idleEvent),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationJourneyEventsIdleEventList",
    },
    in_viewport_event: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationJourneyEventsInViewportEventToHclTerraform, true)(struct!.inViewportEvent),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationJourneyEventsInViewportEventList",
    },
    scroll_depth_event: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationJourneyEventsScrollDepthEventToHclTerraform, true)(struct!.scrollDepthEvent),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationJourneyEventsScrollDepthEventList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationJourneyEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationJourneyEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludedQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedQueryParameters = this._excludedQueryParameters;
    }
    if (this._pageviewConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageviewConfig = this._pageviewConfig;
    }
    if (this._searchQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQueryParameters = this._searchQueryParameters;
    }
    if (this._shouldKeepUrlFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldKeepUrlFragment = this._shouldKeepUrlFragment;
    }
    if (this._clickEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickEvent = this._clickEvent?.internalValue;
    }
    if (this._formTrackEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formTrackEvent = this._formTrackEvent?.internalValue;
    }
    if (this._idleEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleEvent = this._idleEvent?.internalValue;
    }
    if (this._inViewportEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inViewportEvent = this._inViewportEvent?.internalValue;
    }
    if (this._scrollDepthEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrollDepthEvent = this._scrollDepthEvent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationJourneyEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._excludedQueryParameters = undefined;
      this._pageviewConfig = undefined;
      this._searchQueryParameters = undefined;
      this._shouldKeepUrlFragment = undefined;
      this._clickEvent.internalValue = undefined;
      this._formTrackEvent.internalValue = undefined;
      this._idleEvent.internalValue = undefined;
      this._inViewportEvent.internalValue = undefined;
      this._scrollDepthEvent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._excludedQueryParameters = value.excludedQueryParameters;
      this._pageviewConfig = value.pageviewConfig;
      this._searchQueryParameters = value.searchQueryParameters;
      this._shouldKeepUrlFragment = value.shouldKeepUrlFragment;
      this._clickEvent.internalValue = value.clickEvent;
      this._formTrackEvent.internalValue = value.formTrackEvent;
      this._idleEvent.internalValue = value.idleEvent;
      this._inViewportEvent.internalValue = value.inViewportEvent;
      this._scrollDepthEvent.internalValue = value.scrollDepthEvent;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // excluded_query_parameters - computed: false, optional: true, required: false
  private _excludedQueryParameters?: string[]; 
  public get excludedQueryParameters() {
    return this.getListAttribute('excluded_query_parameters');
  }
  public set excludedQueryParameters(value: string[]) {
    this._excludedQueryParameters = value;
  }
  public resetExcludedQueryParameters() {
    this._excludedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedQueryParametersInput() {
    return this._excludedQueryParameters;
  }

  // pageview_config - computed: false, optional: true, required: false
  private _pageviewConfig?: string; 
  public get pageviewConfig() {
    return this.getStringAttribute('pageview_config');
  }
  public set pageviewConfig(value: string) {
    this._pageviewConfig = value;
  }
  public resetPageviewConfig() {
    this._pageviewConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageviewConfigInput() {
    return this._pageviewConfig;
  }

  // search_query_parameters - computed: false, optional: true, required: false
  private _searchQueryParameters?: string[]; 
  public get searchQueryParameters() {
    return this.getListAttribute('search_query_parameters');
  }
  public set searchQueryParameters(value: string[]) {
    this._searchQueryParameters = value;
  }
  public resetSearchQueryParameters() {
    this._searchQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryParametersInput() {
    return this._searchQueryParameters;
  }

  // should_keep_url_fragment - computed: false, optional: true, required: false
  private _shouldKeepUrlFragment?: boolean | cdktf.IResolvable; 
  public get shouldKeepUrlFragment() {
    return this.getBooleanAttribute('should_keep_url_fragment');
  }
  public set shouldKeepUrlFragment(value: boolean | cdktf.IResolvable) {
    this._shouldKeepUrlFragment = value;
  }
  public resetShouldKeepUrlFragment() {
    this._shouldKeepUrlFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldKeepUrlFragmentInput() {
    return this._shouldKeepUrlFragment;
  }

  // click_event - computed: false, optional: true, required: false
  private _clickEvent = new WebdeploymentsConfigurationJourneyEventsClickEventList(this, "click_event", false);
  public get clickEvent() {
    return this._clickEvent;
  }
  public putClickEvent(value: WebdeploymentsConfigurationJourneyEventsClickEvent[] | cdktf.IResolvable) {
    this._clickEvent.internalValue = value;
  }
  public resetClickEvent() {
    this._clickEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickEventInput() {
    return this._clickEvent.internalValue;
  }

  // form_track_event - computed: false, optional: true, required: false
  private _formTrackEvent = new WebdeploymentsConfigurationJourneyEventsFormTrackEventList(this, "form_track_event", false);
  public get formTrackEvent() {
    return this._formTrackEvent;
  }
  public putFormTrackEvent(value: WebdeploymentsConfigurationJourneyEventsFormTrackEvent[] | cdktf.IResolvable) {
    this._formTrackEvent.internalValue = value;
  }
  public resetFormTrackEvent() {
    this._formTrackEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formTrackEventInput() {
    return this._formTrackEvent.internalValue;
  }

  // idle_event - computed: false, optional: true, required: false
  private _idleEvent = new WebdeploymentsConfigurationJourneyEventsIdleEventList(this, "idle_event", false);
  public get idleEvent() {
    return this._idleEvent;
  }
  public putIdleEvent(value: WebdeploymentsConfigurationJourneyEventsIdleEvent[] | cdktf.IResolvable) {
    this._idleEvent.internalValue = value;
  }
  public resetIdleEvent() {
    this._idleEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleEventInput() {
    return this._idleEvent.internalValue;
  }

  // in_viewport_event - computed: false, optional: true, required: false
  private _inViewportEvent = new WebdeploymentsConfigurationJourneyEventsInViewportEventList(this, "in_viewport_event", false);
  public get inViewportEvent() {
    return this._inViewportEvent;
  }
  public putInViewportEvent(value: WebdeploymentsConfigurationJourneyEventsInViewportEvent[] | cdktf.IResolvable) {
    this._inViewportEvent.internalValue = value;
  }
  public resetInViewportEvent() {
    this._inViewportEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inViewportEventInput() {
    return this._inViewportEvent.internalValue;
  }

  // scroll_depth_event - computed: false, optional: true, required: false
  private _scrollDepthEvent = new WebdeploymentsConfigurationJourneyEventsScrollDepthEventList(this, "scroll_depth_event", false);
  public get scrollDepthEvent() {
    return this._scrollDepthEvent;
  }
  public putScrollDepthEvent(value: WebdeploymentsConfigurationJourneyEventsScrollDepthEvent[] | cdktf.IResolvable) {
    this._scrollDepthEvent.internalValue = value;
  }
  public resetScrollDepthEvent() {
    this._scrollDepthEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrollDepthEventInput() {
    return this._scrollDepthEvent.internalValue;
  }
}
export interface WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnect {
  /**
  * whether or not conversation disconnect setting is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Conversation disconnect type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#type WebdeploymentsConfiguration#type}
  */
  readonly type?: string;
}

export function webdeploymentsConfigurationMessengerAppsConversationsConversationDisconnectToTerraform(struct?: WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnectOutputReference | WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function webdeploymentsConfigurationMessengerAppsConversationsConversationDisconnectToHclTerraform(struct?: WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnectOutputReference | WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnect): any {
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

export class WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._type = value.type;
    }
  }

  // enabled - computed: false, optional: true, required: false
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
export interface WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBot {
  /**
  * The avatar URL of the bot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#avatar_url WebdeploymentsConfiguration#avatar_url}
  */
  readonly avatarUrl?: string;
  /**
  * The name of the bot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#name WebdeploymentsConfiguration#name}
  */
  readonly name?: string;
}

export function webdeploymentsConfigurationMessengerAppsConversationsHumanizeBotToTerraform(struct?: WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBotOutputReference | WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avatar_url: cdktf.stringToTerraform(struct!.avatarUrl),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webdeploymentsConfigurationMessengerAppsConversationsHumanizeBotToHclTerraform(struct?: WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBotOutputReference | WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avatar_url: {
      value: cdktf.stringToHclTerraform(struct!.avatarUrl),
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

export class WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avatarUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.avatarUrl = this._avatarUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avatarUrl = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avatarUrl = value.avatarUrl;
      this._name = value.name;
    }
  }

  // avatar_url - computed: false, optional: true, required: false
  private _avatarUrl?: string; 
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }
  public set avatarUrl(value: string) {
    this._avatarUrl = value;
  }
  public resetAvatarUrl() {
    this._avatarUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarUrlInput() {
    return this._avatarUrl;
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
}
export interface WebdeploymentsConfigurationMessengerAppsConversationsHumanize {
  /**
  * Whether or not humanize conversations setting is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * bot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#bot WebdeploymentsConfiguration#bot}
  */
  readonly bot?: WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBot;
}

export function webdeploymentsConfigurationMessengerAppsConversationsHumanizeToTerraform(struct?: WebdeploymentsConfigurationMessengerAppsConversationsHumanizeOutputReference | WebdeploymentsConfigurationMessengerAppsConversationsHumanize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    bot: webdeploymentsConfigurationMessengerAppsConversationsHumanizeBotToTerraform(struct!.bot),
  }
}


export function webdeploymentsConfigurationMessengerAppsConversationsHumanizeToHclTerraform(struct?: WebdeploymentsConfigurationMessengerAppsConversationsHumanizeOutputReference | WebdeploymentsConfigurationMessengerAppsConversationsHumanize): any {
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
    bot: {
      value: webdeploymentsConfigurationMessengerAppsConversationsHumanizeBotToHclTerraform(struct!.bot),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationMessengerAppsConversationsHumanizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessengerAppsConversationsHumanize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._bot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bot = this._bot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerAppsConversationsHumanize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._bot.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._bot.internalValue = value.bot;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // bot - computed: false, optional: true, required: false
  private _bot = new WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBotOutputReference(this, "bot");
  public get bot() {
    return this._bot;
  }
  public putBot(value: WebdeploymentsConfigurationMessengerAppsConversationsHumanizeBot) {
    this._bot.internalValue = value;
  }
  public resetBot() {
    this._bot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botInput() {
    return this._bot.internalValue;
  }
}
export interface WebdeploymentsConfigurationMessengerAppsConversations {
  /**
  * The auto start for the messenger conversation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#auto_start_enabled WebdeploymentsConfiguration#auto_start_enabled}
  */
  readonly autoStartEnabled?: boolean | cdktf.IResolvable;
  /**
  * The conversation clear settings for the messenger app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#conversation_clear_enabled WebdeploymentsConfiguration#conversation_clear_enabled}
  */
  readonly conversationClearEnabled?: boolean | cdktf.IResolvable;
  /**
  * The toggle to enable or disable conversations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The markdown for the messenger app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#markdown_enabled WebdeploymentsConfiguration#markdown_enabled}
  */
  readonly markdownEnabled?: boolean | cdktf.IResolvable;
  /**
  * The toggle to enable or disable typing indicator for messenger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#show_agent_typing_indicator WebdeploymentsConfiguration#show_agent_typing_indicator}
  */
  readonly showAgentTypingIndicator?: boolean | cdktf.IResolvable;
  /**
  * The toggle to enable or disable typing indicator for messenger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#show_user_typing_indicator WebdeploymentsConfiguration#show_user_typing_indicator}
  */
  readonly showUserTypingIndicator?: boolean | cdktf.IResolvable;
  /**
  * conversation_disconnect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#conversation_disconnect WebdeploymentsConfiguration#conversation_disconnect}
  */
  readonly conversationDisconnect?: WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnect;
  /**
  * humanize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#humanize WebdeploymentsConfiguration#humanize}
  */
  readonly humanize?: WebdeploymentsConfigurationMessengerAppsConversationsHumanize;
}

export function webdeploymentsConfigurationMessengerAppsConversationsToTerraform(struct?: WebdeploymentsConfigurationMessengerAppsConversationsOutputReference | WebdeploymentsConfigurationMessengerAppsConversations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_start_enabled: cdktf.booleanToTerraform(struct!.autoStartEnabled),
    conversation_clear_enabled: cdktf.booleanToTerraform(struct!.conversationClearEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    markdown_enabled: cdktf.booleanToTerraform(struct!.markdownEnabled),
    show_agent_typing_indicator: cdktf.booleanToTerraform(struct!.showAgentTypingIndicator),
    show_user_typing_indicator: cdktf.booleanToTerraform(struct!.showUserTypingIndicator),
    conversation_disconnect: webdeploymentsConfigurationMessengerAppsConversationsConversationDisconnectToTerraform(struct!.conversationDisconnect),
    humanize: webdeploymentsConfigurationMessengerAppsConversationsHumanizeToTerraform(struct!.humanize),
  }
}


export function webdeploymentsConfigurationMessengerAppsConversationsToHclTerraform(struct?: WebdeploymentsConfigurationMessengerAppsConversationsOutputReference | WebdeploymentsConfigurationMessengerAppsConversations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_start_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoStartEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conversation_clear_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.conversationClearEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    markdown_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.markdownEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_agent_typing_indicator: {
      value: cdktf.booleanToHclTerraform(struct!.showAgentTypingIndicator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_user_typing_indicator: {
      value: cdktf.booleanToHclTerraform(struct!.showUserTypingIndicator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conversation_disconnect: {
      value: webdeploymentsConfigurationMessengerAppsConversationsConversationDisconnectToHclTerraform(struct!.conversationDisconnect),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnectList",
    },
    humanize: {
      value: webdeploymentsConfigurationMessengerAppsConversationsHumanizeToHclTerraform(struct!.humanize),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerAppsConversationsHumanizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationMessengerAppsConversationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessengerAppsConversations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoStartEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoStartEnabled = this._autoStartEnabled;
    }
    if (this._conversationClearEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationClearEnabled = this._conversationClearEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._markdownEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.markdownEnabled = this._markdownEnabled;
    }
    if (this._showAgentTypingIndicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAgentTypingIndicator = this._showAgentTypingIndicator;
    }
    if (this._showUserTypingIndicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.showUserTypingIndicator = this._showUserTypingIndicator;
    }
    if (this._conversationDisconnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationDisconnect = this._conversationDisconnect?.internalValue;
    }
    if (this._humanize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanize = this._humanize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerAppsConversations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoStartEnabled = undefined;
      this._conversationClearEnabled = undefined;
      this._enabled = undefined;
      this._markdownEnabled = undefined;
      this._showAgentTypingIndicator = undefined;
      this._showUserTypingIndicator = undefined;
      this._conversationDisconnect.internalValue = undefined;
      this._humanize.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoStartEnabled = value.autoStartEnabled;
      this._conversationClearEnabled = value.conversationClearEnabled;
      this._enabled = value.enabled;
      this._markdownEnabled = value.markdownEnabled;
      this._showAgentTypingIndicator = value.showAgentTypingIndicator;
      this._showUserTypingIndicator = value.showUserTypingIndicator;
      this._conversationDisconnect.internalValue = value.conversationDisconnect;
      this._humanize.internalValue = value.humanize;
    }
  }

  // auto_start_enabled - computed: true, optional: true, required: false
  private _autoStartEnabled?: boolean | cdktf.IResolvable; 
  public get autoStartEnabled() {
    return this.getBooleanAttribute('auto_start_enabled');
  }
  public set autoStartEnabled(value: boolean | cdktf.IResolvable) {
    this._autoStartEnabled = value;
  }
  public resetAutoStartEnabled() {
    this._autoStartEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartEnabledInput() {
    return this._autoStartEnabled;
  }

  // conversation_clear_enabled - computed: true, optional: true, required: false
  private _conversationClearEnabled?: boolean | cdktf.IResolvable; 
  public get conversationClearEnabled() {
    return this.getBooleanAttribute('conversation_clear_enabled');
  }
  public set conversationClearEnabled(value: boolean | cdktf.IResolvable) {
    this._conversationClearEnabled = value;
  }
  public resetConversationClearEnabled() {
    this._conversationClearEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationClearEnabledInput() {
    return this._conversationClearEnabled;
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

  // markdown_enabled - computed: true, optional: true, required: false
  private _markdownEnabled?: boolean | cdktf.IResolvable; 
  public get markdownEnabled() {
    return this.getBooleanAttribute('markdown_enabled');
  }
  public set markdownEnabled(value: boolean | cdktf.IResolvable) {
    this._markdownEnabled = value;
  }
  public resetMarkdownEnabled() {
    this._markdownEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markdownEnabledInput() {
    return this._markdownEnabled;
  }

  // show_agent_typing_indicator - computed: true, optional: true, required: false
  private _showAgentTypingIndicator?: boolean | cdktf.IResolvable; 
  public get showAgentTypingIndicator() {
    return this.getBooleanAttribute('show_agent_typing_indicator');
  }
  public set showAgentTypingIndicator(value: boolean | cdktf.IResolvable) {
    this._showAgentTypingIndicator = value;
  }
  public resetShowAgentTypingIndicator() {
    this._showAgentTypingIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAgentTypingIndicatorInput() {
    return this._showAgentTypingIndicator;
  }

  // show_user_typing_indicator - computed: true, optional: true, required: false
  private _showUserTypingIndicator?: boolean | cdktf.IResolvable; 
  public get showUserTypingIndicator() {
    return this.getBooleanAttribute('show_user_typing_indicator');
  }
  public set showUserTypingIndicator(value: boolean | cdktf.IResolvable) {
    this._showUserTypingIndicator = value;
  }
  public resetShowUserTypingIndicator() {
    this._showUserTypingIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUserTypingIndicatorInput() {
    return this._showUserTypingIndicator;
  }

  // conversation_disconnect - computed: false, optional: true, required: false
  private _conversationDisconnect = new WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnectOutputReference(this, "conversation_disconnect");
  public get conversationDisconnect() {
    return this._conversationDisconnect;
  }
  public putConversationDisconnect(value: WebdeploymentsConfigurationMessengerAppsConversationsConversationDisconnect) {
    this._conversationDisconnect.internalValue = value;
  }
  public resetConversationDisconnect() {
    this._conversationDisconnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationDisconnectInput() {
    return this._conversationDisconnect.internalValue;
  }

  // humanize - computed: false, optional: true, required: false
  private _humanize = new WebdeploymentsConfigurationMessengerAppsConversationsHumanizeOutputReference(this, "humanize");
  public get humanize() {
    return this._humanize;
  }
  public putHumanize(value: WebdeploymentsConfigurationMessengerAppsConversationsHumanize) {
    this._humanize.internalValue = value;
  }
  public resetHumanize() {
    this._humanize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanizeInput() {
    return this._humanize.internalValue;
  }
}
export interface WebdeploymentsConfigurationMessengerAppsKnowledge {
  /**
  * whether or not knowledge base is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The knowledge base for messenger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#knowledge_base_id WebdeploymentsConfiguration#knowledge_base_id}
  */
  readonly knowledgeBaseId?: string;
}

export function webdeploymentsConfigurationMessengerAppsKnowledgeToTerraform(struct?: WebdeploymentsConfigurationMessengerAppsKnowledgeOutputReference | WebdeploymentsConfigurationMessengerAppsKnowledge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    knowledge_base_id: cdktf.stringToTerraform(struct!.knowledgeBaseId),
  }
}


export function webdeploymentsConfigurationMessengerAppsKnowledgeToHclTerraform(struct?: WebdeploymentsConfigurationMessengerAppsKnowledgeOutputReference | WebdeploymentsConfigurationMessengerAppsKnowledge): any {
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
    knowledge_base_id: {
      value: cdktf.stringToHclTerraform(struct!.knowledgeBaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationMessengerAppsKnowledgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessengerAppsKnowledge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._knowledgeBaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseId = this._knowledgeBaseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerAppsKnowledge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._knowledgeBaseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._knowledgeBaseId = value.knowledgeBaseId;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // knowledge_base_id - computed: false, optional: true, required: false
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  public resetKnowledgeBaseId() {
    this._knowledgeBaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }
}
export interface WebdeploymentsConfigurationMessengerApps {
  /**
  * conversations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#conversations WebdeploymentsConfiguration#conversations}
  */
  readonly conversations?: WebdeploymentsConfigurationMessengerAppsConversations;
  /**
  * knowledge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#knowledge WebdeploymentsConfiguration#knowledge}
  */
  readonly knowledge?: WebdeploymentsConfigurationMessengerAppsKnowledge;
}

export function webdeploymentsConfigurationMessengerAppsToTerraform(struct?: WebdeploymentsConfigurationMessengerAppsOutputReference | WebdeploymentsConfigurationMessengerApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversations: webdeploymentsConfigurationMessengerAppsConversationsToTerraform(struct!.conversations),
    knowledge: webdeploymentsConfigurationMessengerAppsKnowledgeToTerraform(struct!.knowledge),
  }
}


export function webdeploymentsConfigurationMessengerAppsToHclTerraform(struct?: WebdeploymentsConfigurationMessengerAppsOutputReference | WebdeploymentsConfigurationMessengerApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conversations: {
      value: webdeploymentsConfigurationMessengerAppsConversationsToHclTerraform(struct!.conversations),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerAppsConversationsList",
    },
    knowledge: {
      value: webdeploymentsConfigurationMessengerAppsKnowledgeToHclTerraform(struct!.knowledge),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerAppsKnowledgeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationMessengerAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessengerApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversations = this._conversations?.internalValue;
    }
    if (this._knowledge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledge = this._knowledge?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conversations.internalValue = undefined;
      this._knowledge.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conversations.internalValue = value.conversations;
      this._knowledge.internalValue = value.knowledge;
    }
  }

  // conversations - computed: false, optional: true, required: false
  private _conversations = new WebdeploymentsConfigurationMessengerAppsConversationsOutputReference(this, "conversations");
  public get conversations() {
    return this._conversations;
  }
  public putConversations(value: WebdeploymentsConfigurationMessengerAppsConversations) {
    this._conversations.internalValue = value;
  }
  public resetConversations() {
    this._conversations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationsInput() {
    return this._conversations.internalValue;
  }

  // knowledge - computed: false, optional: true, required: false
  private _knowledge = new WebdeploymentsConfigurationMessengerAppsKnowledgeOutputReference(this, "knowledge");
  public get knowledge() {
    return this._knowledge;
  }
  public putKnowledge(value: WebdeploymentsConfigurationMessengerAppsKnowledge) {
    this._knowledge.internalValue = value;
  }
  public resetKnowledge() {
    this._knowledge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeInput() {
    return this._knowledge.internalValue;
  }
}
export interface WebdeploymentsConfigurationMessengerFileUploadMode {
  /**
  * A list of supported content types for uploading files.Valid values: image/jpeg, image/gif, image/png
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#file_types WebdeploymentsConfiguration#file_types}
  */
  readonly fileTypes?: string[];
  /**
  * The maximum file size for file uploads in kilobytes. Default is 10240 (10 MB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#max_file_size_kb WebdeploymentsConfiguration#max_file_size_kb}
  */
  readonly maxFileSizeKb?: number;
}

export function webdeploymentsConfigurationMessengerFileUploadModeToTerraform(struct?: WebdeploymentsConfigurationMessengerFileUploadMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileTypes),
    max_file_size_kb: cdktf.numberToTerraform(struct!.maxFileSizeKb),
  }
}


export function webdeploymentsConfigurationMessengerFileUploadModeToHclTerraform(struct?: WebdeploymentsConfigurationMessengerFileUploadMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_file_size_kb: {
      value: cdktf.numberToHclTerraform(struct!.maxFileSizeKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationMessengerFileUploadModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationMessengerFileUploadMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTypes = this._fileTypes;
    }
    if (this._maxFileSizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSizeKb = this._maxFileSizeKb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerFileUploadMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileTypes = undefined;
      this._maxFileSizeKb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileTypes = value.fileTypes;
      this._maxFileSizeKb = value.maxFileSizeKb;
    }
  }

  // file_types - computed: false, optional: true, required: false
  private _fileTypes?: string[]; 
  public get fileTypes() {
    return this.getListAttribute('file_types');
  }
  public set fileTypes(value: string[]) {
    this._fileTypes = value;
  }
  public resetFileTypes() {
    this._fileTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypesInput() {
    return this._fileTypes;
  }

  // max_file_size_kb - computed: false, optional: true, required: false
  private _maxFileSizeKb?: number; 
  public get maxFileSizeKb() {
    return this.getNumberAttribute('max_file_size_kb');
  }
  public set maxFileSizeKb(value: number) {
    this._maxFileSizeKb = value;
  }
  public resetMaxFileSizeKb() {
    this._maxFileSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeKbInput() {
    return this._maxFileSizeKb;
  }
}

export class WebdeploymentsConfigurationMessengerFileUploadModeList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationMessengerFileUploadMode[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationMessengerFileUploadModeOutputReference {
    return new WebdeploymentsConfigurationMessengerFileUploadModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationMessengerFileUpload {
  /**
  * mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#mode WebdeploymentsConfiguration#mode}
  */
  readonly mode?: WebdeploymentsConfigurationMessengerFileUploadMode[] | cdktf.IResolvable;
}

export function webdeploymentsConfigurationMessengerFileUploadToTerraform(struct?: WebdeploymentsConfigurationMessengerFileUploadOutputReference | WebdeploymentsConfigurationMessengerFileUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.listMapper(webdeploymentsConfigurationMessengerFileUploadModeToTerraform, true)(struct!.mode),
  }
}


export function webdeploymentsConfigurationMessengerFileUploadToHclTerraform(struct?: WebdeploymentsConfigurationMessengerFileUploadOutputReference | WebdeploymentsConfigurationMessengerFileUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationMessengerFileUploadModeToHclTerraform, true)(struct!.mode),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerFileUploadModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationMessengerFileUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessengerFileUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerFileUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode.internalValue = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode = new WebdeploymentsConfigurationMessengerFileUploadModeList(this, "mode", false);
  public get mode() {
    return this._mode;
  }
  public putMode(value: WebdeploymentsConfigurationMessengerFileUploadMode[] | cdktf.IResolvable) {
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
export interface WebdeploymentsConfigurationMessengerHomeScreen {
  /**
  * Whether or not home screen is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * URL for custom logo to appear in home screen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#logo_url WebdeploymentsConfiguration#logo_url}
  */
  readonly logoUrl?: string;
}

export function webdeploymentsConfigurationMessengerHomeScreenToTerraform(struct?: WebdeploymentsConfigurationMessengerHomeScreenOutputReference | WebdeploymentsConfigurationMessengerHomeScreen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    logo_url: cdktf.stringToTerraform(struct!.logoUrl),
  }
}


export function webdeploymentsConfigurationMessengerHomeScreenToHclTerraform(struct?: WebdeploymentsConfigurationMessengerHomeScreenOutputReference | WebdeploymentsConfigurationMessengerHomeScreen): any {
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
    logo_url: {
      value: cdktf.stringToHclTerraform(struct!.logoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationMessengerHomeScreenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessengerHomeScreen | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoUrl = this._logoUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerHomeScreen | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logoUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logoUrl = value.logoUrl;
    }
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

  // logo_url - computed: true, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }
}
export interface WebdeploymentsConfigurationMessengerLauncherButton {
  /**
  * The visibility settings for the button.Valid values: On, Off, OnDemand
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#visibility WebdeploymentsConfiguration#visibility}
  */
  readonly visibility?: string;
}

export function webdeploymentsConfigurationMessengerLauncherButtonToTerraform(struct?: WebdeploymentsConfigurationMessengerLauncherButtonOutputReference | WebdeploymentsConfigurationMessengerLauncherButton): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function webdeploymentsConfigurationMessengerLauncherButtonToHclTerraform(struct?: WebdeploymentsConfigurationMessengerLauncherButtonOutputReference | WebdeploymentsConfigurationMessengerLauncherButton): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationMessengerLauncherButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessengerLauncherButton | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerLauncherButton | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface WebdeploymentsConfigurationMessengerStyles {
  /**
  * The primary color of messenger in hexadecimal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#primary_color WebdeploymentsConfiguration#primary_color}
  */
  readonly primaryColor?: string;
}

export function webdeploymentsConfigurationMessengerStylesToTerraform(struct?: WebdeploymentsConfigurationMessengerStylesOutputReference | WebdeploymentsConfigurationMessengerStyles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_color: cdktf.stringToTerraform(struct!.primaryColor),
  }
}


export function webdeploymentsConfigurationMessengerStylesToHclTerraform(struct?: WebdeploymentsConfigurationMessengerStylesOutputReference | WebdeploymentsConfigurationMessengerStyles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_color: {
      value: cdktf.stringToHclTerraform(struct!.primaryColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationMessengerStylesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessengerStyles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryColor = this._primaryColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessengerStyles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryColor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryColor = value.primaryColor;
    }
  }

  // primary_color - computed: false, optional: true, required: false
  private _primaryColor?: string; 
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }
  public set primaryColor(value: string) {
    this._primaryColor = value;
  }
  public resetPrimaryColor() {
    this._primaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorInput() {
    return this._primaryColor;
  }
}
export interface WebdeploymentsConfigurationMessenger {
  /**
  * Whether or not messenger is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#apps WebdeploymentsConfiguration#apps}
  */
  readonly apps?: WebdeploymentsConfigurationMessengerApps;
  /**
  * file_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#file_upload WebdeploymentsConfiguration#file_upload}
  */
  readonly fileUpload?: WebdeploymentsConfigurationMessengerFileUpload;
  /**
  * home_screen block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#home_screen WebdeploymentsConfiguration#home_screen}
  */
  readonly homeScreen?: WebdeploymentsConfigurationMessengerHomeScreen;
  /**
  * launcher_button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#launcher_button WebdeploymentsConfiguration#launcher_button}
  */
  readonly launcherButton?: WebdeploymentsConfigurationMessengerLauncherButton;
  /**
  * styles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#styles WebdeploymentsConfiguration#styles}
  */
  readonly styles?: WebdeploymentsConfigurationMessengerStyles;
}

export function webdeploymentsConfigurationMessengerToTerraform(struct?: WebdeploymentsConfigurationMessengerOutputReference | WebdeploymentsConfigurationMessenger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    apps: webdeploymentsConfigurationMessengerAppsToTerraform(struct!.apps),
    file_upload: webdeploymentsConfigurationMessengerFileUploadToTerraform(struct!.fileUpload),
    home_screen: webdeploymentsConfigurationMessengerHomeScreenToTerraform(struct!.homeScreen),
    launcher_button: webdeploymentsConfigurationMessengerLauncherButtonToTerraform(struct!.launcherButton),
    styles: webdeploymentsConfigurationMessengerStylesToTerraform(struct!.styles),
  }
}


export function webdeploymentsConfigurationMessengerToHclTerraform(struct?: WebdeploymentsConfigurationMessengerOutputReference | WebdeploymentsConfigurationMessenger): any {
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
    apps: {
      value: webdeploymentsConfigurationMessengerAppsToHclTerraform(struct!.apps),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerAppsList",
    },
    file_upload: {
      value: webdeploymentsConfigurationMessengerFileUploadToHclTerraform(struct!.fileUpload),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerFileUploadList",
    },
    home_screen: {
      value: webdeploymentsConfigurationMessengerHomeScreenToHclTerraform(struct!.homeScreen),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerHomeScreenList",
    },
    launcher_button: {
      value: webdeploymentsConfigurationMessengerLauncherButtonToHclTerraform(struct!.launcherButton),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerLauncherButtonList",
    },
    styles: {
      value: webdeploymentsConfigurationMessengerStylesToHclTerraform(struct!.styles),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationMessengerStylesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationMessengerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationMessenger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._apps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps?.internalValue;
    }
    if (this._fileUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUpload = this._fileUpload?.internalValue;
    }
    if (this._homeScreen?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeScreen = this._homeScreen?.internalValue;
    }
    if (this._launcherButton?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launcherButton = this._launcherButton?.internalValue;
    }
    if (this._styles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.styles = this._styles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationMessenger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._apps.internalValue = undefined;
      this._fileUpload.internalValue = undefined;
      this._homeScreen.internalValue = undefined;
      this._launcherButton.internalValue = undefined;
      this._styles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._apps.internalValue = value.apps;
      this._fileUpload.internalValue = value.fileUpload;
      this._homeScreen.internalValue = value.homeScreen;
      this._launcherButton.internalValue = value.launcherButton;
      this._styles.internalValue = value.styles;
    }
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

  // apps - computed: false, optional: true, required: false
  private _apps = new WebdeploymentsConfigurationMessengerAppsOutputReference(this, "apps");
  public get apps() {
    return this._apps;
  }
  public putApps(value: WebdeploymentsConfigurationMessengerApps) {
    this._apps.internalValue = value;
  }
  public resetApps() {
    this._apps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps.internalValue;
  }

  // file_upload - computed: false, optional: true, required: false
  private _fileUpload = new WebdeploymentsConfigurationMessengerFileUploadOutputReference(this, "file_upload");
  public get fileUpload() {
    return this._fileUpload;
  }
  public putFileUpload(value: WebdeploymentsConfigurationMessengerFileUpload) {
    this._fileUpload.internalValue = value;
  }
  public resetFileUpload() {
    this._fileUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUploadInput() {
    return this._fileUpload.internalValue;
  }

  // home_screen - computed: false, optional: true, required: false
  private _homeScreen = new WebdeploymentsConfigurationMessengerHomeScreenOutputReference(this, "home_screen");
  public get homeScreen() {
    return this._homeScreen;
  }
  public putHomeScreen(value: WebdeploymentsConfigurationMessengerHomeScreen) {
    this._homeScreen.internalValue = value;
  }
  public resetHomeScreen() {
    this._homeScreen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeScreenInput() {
    return this._homeScreen.internalValue;
  }

  // launcher_button - computed: false, optional: true, required: false
  private _launcherButton = new WebdeploymentsConfigurationMessengerLauncherButtonOutputReference(this, "launcher_button");
  public get launcherButton() {
    return this._launcherButton;
  }
  public putLauncherButton(value: WebdeploymentsConfigurationMessengerLauncherButton) {
    this._launcherButton.internalValue = value;
  }
  public resetLauncherButton() {
    this._launcherButton.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launcherButtonInput() {
    return this._launcherButton.internalValue;
  }

  // styles - computed: false, optional: true, required: false
  private _styles = new WebdeploymentsConfigurationMessengerStylesOutputReference(this, "styles");
  public get styles() {
    return this._styles;
  }
  public putStyles(value: WebdeploymentsConfigurationMessengerStyles) {
    this._styles.internalValue = value;
  }
  public resetStyles() {
    this._styles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stylesInput() {
    return this._styles.internalValue;
  }
}
export interface WebdeploymentsConfigurationPosition {
  /**
  * The alignment for position
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#alignment WebdeploymentsConfiguration#alignment}
  */
  readonly alignment?: string;
  /**
  * The bottomspace value for position
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#bottom_space WebdeploymentsConfiguration#bottom_space}
  */
  readonly bottomSpace?: number;
  /**
  * The sidespace value for position
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#side_space WebdeploymentsConfiguration#side_space}
  */
  readonly sideSpace?: number;
}

export function webdeploymentsConfigurationPositionToTerraform(struct?: WebdeploymentsConfigurationPositionOutputReference | WebdeploymentsConfigurationPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment: cdktf.stringToTerraform(struct!.alignment),
    bottom_space: cdktf.numberToTerraform(struct!.bottomSpace),
    side_space: cdktf.numberToTerraform(struct!.sideSpace),
  }
}


export function webdeploymentsConfigurationPositionToHclTerraform(struct?: WebdeploymentsConfigurationPositionOutputReference | WebdeploymentsConfigurationPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment: {
      value: cdktf.stringToHclTerraform(struct!.alignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bottom_space: {
      value: cdktf.numberToHclTerraform(struct!.bottomSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    side_space: {
      value: cdktf.numberToHclTerraform(struct!.sideSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignment = this._alignment;
    }
    if (this._bottomSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottomSpace = this._bottomSpace;
    }
    if (this._sideSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.sideSpace = this._sideSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alignment = undefined;
      this._bottomSpace = undefined;
      this._sideSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alignment = value.alignment;
      this._bottomSpace = value.bottomSpace;
      this._sideSpace = value.sideSpace;
    }
  }

  // alignment - computed: false, optional: true, required: false
  private _alignment?: string; 
  public get alignment() {
    return this.getStringAttribute('alignment');
  }
  public set alignment(value: string) {
    this._alignment = value;
  }
  public resetAlignment() {
    this._alignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentInput() {
    return this._alignment;
  }

  // bottom_space - computed: false, optional: true, required: false
  private _bottomSpace?: number; 
  public get bottomSpace() {
    return this.getNumberAttribute('bottom_space');
  }
  public set bottomSpace(value: number) {
    this._bottomSpace = value;
  }
  public resetBottomSpace() {
    this._bottomSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomSpaceInput() {
    return this._bottomSpace;
  }

  // side_space - computed: false, optional: true, required: false
  private _sideSpace?: number; 
  public get sideSpace() {
    return this.getNumberAttribute('side_space');
  }
  public set sideSpace(value: number) {
    this._sideSpace = value;
  }
  public resetSideSpace() {
    this._sideSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sideSpaceInput() {
    return this._sideSpace;
  }
}
export interface WebdeploymentsConfigurationSupportCenterCustomMessages {
  /**
  * Default value for the custom message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#default_value WebdeploymentsConfiguration#default_value}
  */
  readonly defaultValue: string;
  /**
  * The custom message type. (Welcome or Fallback)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#type WebdeploymentsConfiguration#type}
  */
  readonly type: string;
}

export function webdeploymentsConfigurationSupportCenterCustomMessagesToTerraform(struct?: WebdeploymentsConfigurationSupportCenterCustomMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function webdeploymentsConfigurationSupportCenterCustomMessagesToHclTerraform(struct?: WebdeploymentsConfigurationSupportCenterCustomMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationSupportCenterCustomMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationSupportCenterCustomMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationSupportCenterCustomMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._type = value.type;
    }
  }

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WebdeploymentsConfigurationSupportCenterCustomMessagesList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationSupportCenterCustomMessages[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationSupportCenterCustomMessagesOutputReference {
    return new WebdeploymentsConfigurationSupportCenterCustomMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationSupportCenterEnabledCategories {
  /**
  * The knowledge base category id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#category_id WebdeploymentsConfiguration#category_id}
  */
  readonly categoryId: string;
  /**
  * Source URL for the featured category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#image_uri WebdeploymentsConfiguration#image_uri}
  */
  readonly imageUri?: string;
}

export function webdeploymentsConfigurationSupportCenterEnabledCategoriesToTerraform(struct?: WebdeploymentsConfigurationSupportCenterEnabledCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_id: cdktf.stringToTerraform(struct!.categoryId),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
  }
}


export function webdeploymentsConfigurationSupportCenterEnabledCategoriesToHclTerraform(struct?: WebdeploymentsConfigurationSupportCenterEnabledCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_id: {
      value: cdktf.stringToHclTerraform(struct!.categoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationSupportCenterEnabledCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationSupportCenterEnabledCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryId = this._categoryId;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationSupportCenterEnabledCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryId = undefined;
      this._imageUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryId = value.categoryId;
      this._imageUri = value.imageUri;
    }
  }

  // category_id - computed: false, optional: false, required: true
  private _categoryId?: string; 
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }
  public set categoryId(value: string) {
    this._categoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdInput() {
    return this._categoryId;
  }

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }
}

export class WebdeploymentsConfigurationSupportCenterEnabledCategoriesList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationSupportCenterEnabledCategories[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationSupportCenterEnabledCategoriesOutputReference {
    return new WebdeploymentsConfigurationSupportCenterEnabledCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplate {
  /**
  * Whether the Support Center Detailed Category Module Template is active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#active WebdeploymentsConfiguration#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Whether the Support Center Detailed Category Module Sidebar is active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#sidebar_enabled WebdeploymentsConfiguration#sidebar_enabled}
  */
  readonly sidebarEnabled: boolean | cdktf.IResolvable;
}

export function webdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplateToTerraform(struct?: WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplateOutputReference | WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    sidebar_enabled: cdktf.booleanToTerraform(struct!.sidebarEnabled),
  }
}


export function webdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplateToHclTerraform(struct?: WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplateOutputReference | WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sidebar_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sidebarEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._sidebarEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidebarEnabled = this._sidebarEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._sidebarEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._sidebarEnabled = value.sidebarEnabled;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // sidebar_enabled - computed: false, optional: false, required: true
  private _sidebarEnabled?: boolean | cdktf.IResolvable; 
  public get sidebarEnabled() {
    return this.getBooleanAttribute('sidebar_enabled');
  }
  public set sidebarEnabled(value: boolean | cdktf.IResolvable) {
    this._sidebarEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidebarEnabledInput() {
    return this._sidebarEnabled;
  }
}
export interface WebdeploymentsConfigurationSupportCenterScreensModuleSettings {
  /**
  * Whether the Support Center Compact Category Module Template is active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#compact_category_module_template_active WebdeploymentsConfiguration#compact_category_module_template_active}
  */
  readonly compactCategoryModuleTemplateActive?: boolean | cdktf.IResolvable;
  /**
  * Whether or not knowledge portal (previously support center) screen module is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Screen module type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#type WebdeploymentsConfiguration#type}
  */
  readonly type: string;
  /**
  * detailed_category_module_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#detailed_category_module_template WebdeploymentsConfiguration#detailed_category_module_template}
  */
  readonly detailedCategoryModuleTemplate?: WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplate;
}

export function webdeploymentsConfigurationSupportCenterScreensModuleSettingsToTerraform(struct?: WebdeploymentsConfigurationSupportCenterScreensModuleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compact_category_module_template_active: cdktf.booleanToTerraform(struct!.compactCategoryModuleTemplateActive),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    type: cdktf.stringToTerraform(struct!.type),
    detailed_category_module_template: webdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplateToTerraform(struct!.detailedCategoryModuleTemplate),
  }
}


export function webdeploymentsConfigurationSupportCenterScreensModuleSettingsToHclTerraform(struct?: WebdeploymentsConfigurationSupportCenterScreensModuleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compact_category_module_template_active: {
      value: cdktf.booleanToHclTerraform(struct!.compactCategoryModuleTemplateActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
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
    detailed_category_module_template: {
      value: webdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplateToHclTerraform(struct!.detailedCategoryModuleTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationSupportCenterScreensModuleSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationSupportCenterScreensModuleSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compactCategoryModuleTemplateActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactCategoryModuleTemplateActive = this._compactCategoryModuleTemplateActive;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._detailedCategoryModuleTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedCategoryModuleTemplate = this._detailedCategoryModuleTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationSupportCenterScreensModuleSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compactCategoryModuleTemplateActive = undefined;
      this._enabled = undefined;
      this._type = undefined;
      this._detailedCategoryModuleTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compactCategoryModuleTemplateActive = value.compactCategoryModuleTemplateActive;
      this._enabled = value.enabled;
      this._type = value.type;
      this._detailedCategoryModuleTemplate.internalValue = value.detailedCategoryModuleTemplate;
    }
  }

  // compact_category_module_template_active - computed: false, optional: true, required: false
  private _compactCategoryModuleTemplateActive?: boolean | cdktf.IResolvable; 
  public get compactCategoryModuleTemplateActive() {
    return this.getBooleanAttribute('compact_category_module_template_active');
  }
  public set compactCategoryModuleTemplateActive(value: boolean | cdktf.IResolvable) {
    this._compactCategoryModuleTemplateActive = value;
  }
  public resetCompactCategoryModuleTemplateActive() {
    this._compactCategoryModuleTemplateActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactCategoryModuleTemplateActiveInput() {
    return this._compactCategoryModuleTemplateActive;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // detailed_category_module_template - computed: false, optional: true, required: false
  private _detailedCategoryModuleTemplate = new WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplateOutputReference(this, "detailed_category_module_template");
  public get detailedCategoryModuleTemplate() {
    return this._detailedCategoryModuleTemplate;
  }
  public putDetailedCategoryModuleTemplate(value: WebdeploymentsConfigurationSupportCenterScreensModuleSettingsDetailedCategoryModuleTemplate) {
    this._detailedCategoryModuleTemplate.internalValue = value;
  }
  public resetDetailedCategoryModuleTemplate() {
    this._detailedCategoryModuleTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedCategoryModuleTemplateInput() {
    return this._detailedCategoryModuleTemplate.internalValue;
  }
}

export class WebdeploymentsConfigurationSupportCenterScreensModuleSettingsList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationSupportCenterScreensModuleSettings[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationSupportCenterScreensModuleSettingsOutputReference {
    return new WebdeploymentsConfigurationSupportCenterScreensModuleSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationSupportCenterScreens {
  /**
  * The type of the screen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#type WebdeploymentsConfiguration#type}
  */
  readonly type: string;
  /**
  * module_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#module_settings WebdeploymentsConfiguration#module_settings}
  */
  readonly moduleSettings: WebdeploymentsConfigurationSupportCenterScreensModuleSettings[] | cdktf.IResolvable;
}

export function webdeploymentsConfigurationSupportCenterScreensToTerraform(struct?: WebdeploymentsConfigurationSupportCenterScreens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    module_settings: cdktf.listMapper(webdeploymentsConfigurationSupportCenterScreensModuleSettingsToTerraform, true)(struct!.moduleSettings),
  }
}


export function webdeploymentsConfigurationSupportCenterScreensToHclTerraform(struct?: WebdeploymentsConfigurationSupportCenterScreens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_settings: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationSupportCenterScreensModuleSettingsToHclTerraform, true)(struct!.moduleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationSupportCenterScreensModuleSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationSupportCenterScreensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebdeploymentsConfigurationSupportCenterScreens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._moduleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleSettings = this._moduleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationSupportCenterScreens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._moduleSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._moduleSettings.internalValue = value.moduleSettings;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // module_settings - computed: false, optional: false, required: true
  private _moduleSettings = new WebdeploymentsConfigurationSupportCenterScreensModuleSettingsList(this, "module_settings", false);
  public get moduleSettings() {
    return this._moduleSettings;
  }
  public putModuleSettings(value: WebdeploymentsConfigurationSupportCenterScreensModuleSettings[] | cdktf.IResolvable) {
    this._moduleSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleSettingsInput() {
    return this._moduleSettings.internalValue;
  }
}

export class WebdeploymentsConfigurationSupportCenterScreensList extends cdktf.ComplexList {
  public internalValue? : WebdeploymentsConfigurationSupportCenterScreens[] | cdktf.IResolvable

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
  public get(index: number): WebdeploymentsConfigurationSupportCenterScreensOutputReference {
    return new WebdeploymentsConfigurationSupportCenterScreensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSetting {
  /**
  * Global background color, in hexadecimal format, eg #ffffff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#background_color WebdeploymentsConfiguration#background_color}
  */
  readonly backgroundColor: string;
  /**
  * Global font family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#font_family WebdeploymentsConfiguration#font_family}
  */
  readonly fontFamily: string;
  /**
  * Global primary color, in hexadecimal format, eg #ffffff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#primary_color WebdeploymentsConfiguration#primary_color}
  */
  readonly primaryColor: string;
  /**
  * Global dark primary color, in hexadecimal format, eg #ffffff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#primary_color_dark WebdeploymentsConfiguration#primary_color_dark}
  */
  readonly primaryColorDark: string;
  /**
  * Global light primary color, in hexadecimal format, eg #ffffff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#primary_color_light WebdeploymentsConfiguration#primary_color_light}
  */
  readonly primaryColorLight: string;
  /**
  * Global text color, in hexadecimal format, eg #ffffff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#text_color WebdeploymentsConfiguration#text_color}
  */
  readonly textColor: string;
}

export function webdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSettingToTerraform(struct?: WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSettingOutputReference | WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    font_family: cdktf.stringToTerraform(struct!.fontFamily),
    primary_color: cdktf.stringToTerraform(struct!.primaryColor),
    primary_color_dark: cdktf.stringToTerraform(struct!.primaryColorDark),
    primary_color_light: cdktf.stringToTerraform(struct!.primaryColorLight),
    text_color: cdktf.stringToTerraform(struct!.textColor),
  }
}


export function webdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSettingToHclTerraform(struct?: WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSettingOutputReference | WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_family: {
      value: cdktf.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_color: {
      value: cdktf.stringToHclTerraform(struct!.primaryColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_color_dark: {
      value: cdktf.stringToHclTerraform(struct!.primaryColorDark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_color_light: {
      value: cdktf.stringToHclTerraform(struct!.primaryColorLight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktf.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._primaryColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryColor = this._primaryColor;
    }
    if (this._primaryColorDark !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryColorDark = this._primaryColorDark;
    }
    if (this._primaryColorLight !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryColorLight = this._primaryColorLight;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._fontFamily = undefined;
      this._primaryColor = undefined;
      this._primaryColorDark = undefined;
      this._primaryColorLight = undefined;
      this._textColor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._fontFamily = value.fontFamily;
      this._primaryColor = value.primaryColor;
      this._primaryColorDark = value.primaryColorDark;
      this._primaryColorLight = value.primaryColorLight;
      this._textColor = value.textColor;
    }
  }

  // background_color - computed: false, optional: false, required: true
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // font_family - computed: false, optional: false, required: true
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // primary_color - computed: false, optional: false, required: true
  private _primaryColor?: string; 
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }
  public set primaryColor(value: string) {
    this._primaryColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorInput() {
    return this._primaryColor;
  }

  // primary_color_dark - computed: false, optional: false, required: true
  private _primaryColorDark?: string; 
  public get primaryColorDark() {
    return this.getStringAttribute('primary_color_dark');
  }
  public set primaryColorDark(value: string) {
    this._primaryColorDark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorDarkInput() {
    return this._primaryColorDark;
  }

  // primary_color_light - computed: false, optional: false, required: true
  private _primaryColorLight?: string; 
  public get primaryColorLight() {
    return this.getStringAttribute('primary_color_light');
  }
  public set primaryColorLight(value: string) {
    this._primaryColorLight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorLightInput() {
    return this._primaryColorLight;
  }

  // text_color - computed: false, optional: false, required: true
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}
export interface WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSetting {
  /**
  * Background color for hero section, in hexadecimal format, eg #ffffff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#background_color WebdeploymentsConfiguration#background_color}
  */
  readonly backgroundColor: string;
  /**
  * Background image for hero section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#image_uri WebdeploymentsConfiguration#image_uri}
  */
  readonly imageUri: string;
  /**
  * Text color for hero section, in hexadecimal format, eg #ffffff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#text_color WebdeploymentsConfiguration#text_color}
  */
  readonly textColor: string;
}

export function webdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSettingToTerraform(struct?: WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSettingOutputReference | WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    text_color: cdktf.stringToTerraform(struct!.textColor),
  }
}


export function webdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSettingToHclTerraform(struct?: WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSettingOutputReference | WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktf.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._imageUri = undefined;
      this._textColor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._imageUri = value.imageUri;
      this._textColor = value.textColor;
    }
  }

  // background_color - computed: false, optional: false, required: true
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // text_color - computed: false, optional: false, required: true
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}
export interface WebdeploymentsConfigurationSupportCenterStyleSetting {
  /**
  * global_style_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#global_style_setting WebdeploymentsConfiguration#global_style_setting}
  */
  readonly globalStyleSetting?: WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSetting;
  /**
  * hero_style_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#hero_style_setting WebdeploymentsConfiguration#hero_style_setting}
  */
  readonly heroStyleSetting?: WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSetting;
}

export function webdeploymentsConfigurationSupportCenterStyleSettingToTerraform(struct?: WebdeploymentsConfigurationSupportCenterStyleSettingOutputReference | WebdeploymentsConfigurationSupportCenterStyleSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_style_setting: webdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSettingToTerraform(struct!.globalStyleSetting),
    hero_style_setting: webdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSettingToTerraform(struct!.heroStyleSetting),
  }
}


export function webdeploymentsConfigurationSupportCenterStyleSettingToHclTerraform(struct?: WebdeploymentsConfigurationSupportCenterStyleSettingOutputReference | WebdeploymentsConfigurationSupportCenterStyleSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_style_setting: {
      value: webdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSettingToHclTerraform(struct!.globalStyleSetting),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSettingList",
    },
    hero_style_setting: {
      value: webdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSettingToHclTerraform(struct!.heroStyleSetting),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSettingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationSupportCenterStyleSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationSupportCenterStyleSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalStyleSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalStyleSetting = this._globalStyleSetting?.internalValue;
    }
    if (this._heroStyleSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.heroStyleSetting = this._heroStyleSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationSupportCenterStyleSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalStyleSetting.internalValue = undefined;
      this._heroStyleSetting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalStyleSetting.internalValue = value.globalStyleSetting;
      this._heroStyleSetting.internalValue = value.heroStyleSetting;
    }
  }

  // global_style_setting - computed: false, optional: true, required: false
  private _globalStyleSetting = new WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSettingOutputReference(this, "global_style_setting");
  public get globalStyleSetting() {
    return this._globalStyleSetting;
  }
  public putGlobalStyleSetting(value: WebdeploymentsConfigurationSupportCenterStyleSettingGlobalStyleSetting) {
    this._globalStyleSetting.internalValue = value;
  }
  public resetGlobalStyleSetting() {
    this._globalStyleSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalStyleSettingInput() {
    return this._globalStyleSetting.internalValue;
  }

  // hero_style_setting - computed: false, optional: true, required: false
  private _heroStyleSetting = new WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSettingOutputReference(this, "hero_style_setting");
  public get heroStyleSetting() {
    return this._heroStyleSetting;
  }
  public putHeroStyleSetting(value: WebdeploymentsConfigurationSupportCenterStyleSettingHeroStyleSetting) {
    this._heroStyleSetting.internalValue = value;
  }
  public resetHeroStyleSetting() {
    this._heroStyleSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heroStyleSettingInput() {
    return this._heroStyleSetting.internalValue;
  }
}
export interface WebdeploymentsConfigurationSupportCenter {
  /**
  * Whether or not knowledge portal (previously support center) is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled WebdeploymentsConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Whether or not requesting customer feedback on article content and article search results is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#feedback_enabled WebdeploymentsConfiguration#feedback_enabled}
  */
  readonly feedbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * The knowledge base for knowledge portal (previously support center)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#knowledge_base_id WebdeploymentsConfiguration#knowledge_base_id}
  */
  readonly knowledgeBaseId?: string;
  /**
  * Router type for knowledge portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#router_type WebdeploymentsConfiguration#router_type}
  */
  readonly routerType?: string;
  /**
  * custom_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#custom_messages WebdeploymentsConfiguration#custom_messages}
  */
  readonly customMessages?: WebdeploymentsConfigurationSupportCenterCustomMessages[] | cdktf.IResolvable;
  /**
  * enabled_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#enabled_categories WebdeploymentsConfiguration#enabled_categories}
  */
  readonly enabledCategories?: WebdeploymentsConfigurationSupportCenterEnabledCategories[] | cdktf.IResolvable;
  /**
  * screens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#screens WebdeploymentsConfiguration#screens}
  */
  readonly screens?: WebdeploymentsConfigurationSupportCenterScreens[] | cdktf.IResolvable;
  /**
  * style_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#style_setting WebdeploymentsConfiguration#style_setting}
  */
  readonly styleSetting?: WebdeploymentsConfigurationSupportCenterStyleSetting;
}

export function webdeploymentsConfigurationSupportCenterToTerraform(struct?: WebdeploymentsConfigurationSupportCenterOutputReference | WebdeploymentsConfigurationSupportCenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    feedback_enabled: cdktf.booleanToTerraform(struct!.feedbackEnabled),
    knowledge_base_id: cdktf.stringToTerraform(struct!.knowledgeBaseId),
    router_type: cdktf.stringToTerraform(struct!.routerType),
    custom_messages: cdktf.listMapper(webdeploymentsConfigurationSupportCenterCustomMessagesToTerraform, true)(struct!.customMessages),
    enabled_categories: cdktf.listMapper(webdeploymentsConfigurationSupportCenterEnabledCategoriesToTerraform, true)(struct!.enabledCategories),
    screens: cdktf.listMapper(webdeploymentsConfigurationSupportCenterScreensToTerraform, true)(struct!.screens),
    style_setting: webdeploymentsConfigurationSupportCenterStyleSettingToTerraform(struct!.styleSetting),
  }
}


export function webdeploymentsConfigurationSupportCenterToHclTerraform(struct?: WebdeploymentsConfigurationSupportCenterOutputReference | WebdeploymentsConfigurationSupportCenter): any {
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
    feedback_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.feedbackEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    knowledge_base_id: {
      value: cdktf.stringToHclTerraform(struct!.knowledgeBaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_type: {
      value: cdktf.stringToHclTerraform(struct!.routerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_messages: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationSupportCenterCustomMessagesToHclTerraform, true)(struct!.customMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationSupportCenterCustomMessagesList",
    },
    enabled_categories: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationSupportCenterEnabledCategoriesToHclTerraform, true)(struct!.enabledCategories),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationSupportCenterEnabledCategoriesList",
    },
    screens: {
      value: cdktf.listMapperHcl(webdeploymentsConfigurationSupportCenterScreensToHclTerraform, true)(struct!.screens),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationSupportCenterScreensList",
    },
    style_setting: {
      value: webdeploymentsConfigurationSupportCenterStyleSettingToHclTerraform(struct!.styleSetting),
      isBlock: true,
      type: "list",
      storageClassType: "WebdeploymentsConfigurationSupportCenterStyleSettingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsConfigurationSupportCenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsConfigurationSupportCenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._feedbackEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedbackEnabled = this._feedbackEnabled;
    }
    if (this._knowledgeBaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseId = this._knowledgeBaseId;
    }
    if (this._routerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerType = this._routerType;
    }
    if (this._customMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMessages = this._customMessages?.internalValue;
    }
    if (this._enabledCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledCategories = this._enabledCategories?.internalValue;
    }
    if (this._screens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.screens = this._screens?.internalValue;
    }
    if (this._styleSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.styleSetting = this._styleSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsConfigurationSupportCenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._feedbackEnabled = undefined;
      this._knowledgeBaseId = undefined;
      this._routerType = undefined;
      this._customMessages.internalValue = undefined;
      this._enabledCategories.internalValue = undefined;
      this._screens.internalValue = undefined;
      this._styleSetting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._feedbackEnabled = value.feedbackEnabled;
      this._knowledgeBaseId = value.knowledgeBaseId;
      this._routerType = value.routerType;
      this._customMessages.internalValue = value.customMessages;
      this._enabledCategories.internalValue = value.enabledCategories;
      this._screens.internalValue = value.screens;
      this._styleSetting.internalValue = value.styleSetting;
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

  // feedback_enabled - computed: false, optional: true, required: false
  private _feedbackEnabled?: boolean | cdktf.IResolvable; 
  public get feedbackEnabled() {
    return this.getBooleanAttribute('feedback_enabled');
  }
  public set feedbackEnabled(value: boolean | cdktf.IResolvable) {
    this._feedbackEnabled = value;
  }
  public resetFeedbackEnabled() {
    this._feedbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedbackEnabledInput() {
    return this._feedbackEnabled;
  }

  // knowledge_base_id - computed: false, optional: true, required: false
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  public resetKnowledgeBaseId() {
    this._knowledgeBaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }

  // router_type - computed: false, optional: true, required: false
  private _routerType?: string; 
  public get routerType() {
    return this.getStringAttribute('router_type');
  }
  public set routerType(value: string) {
    this._routerType = value;
  }
  public resetRouterType() {
    this._routerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerTypeInput() {
    return this._routerType;
  }

  // custom_messages - computed: false, optional: true, required: false
  private _customMessages = new WebdeploymentsConfigurationSupportCenterCustomMessagesList(this, "custom_messages", false);
  public get customMessages() {
    return this._customMessages;
  }
  public putCustomMessages(value: WebdeploymentsConfigurationSupportCenterCustomMessages[] | cdktf.IResolvable) {
    this._customMessages.internalValue = value;
  }
  public resetCustomMessages() {
    this._customMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessagesInput() {
    return this._customMessages.internalValue;
  }

  // enabled_categories - computed: false, optional: true, required: false
  private _enabledCategories = new WebdeploymentsConfigurationSupportCenterEnabledCategoriesList(this, "enabled_categories", false);
  public get enabledCategories() {
    return this._enabledCategories;
  }
  public putEnabledCategories(value: WebdeploymentsConfigurationSupportCenterEnabledCategories[] | cdktf.IResolvable) {
    this._enabledCategories.internalValue = value;
  }
  public resetEnabledCategories() {
    this._enabledCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledCategoriesInput() {
    return this._enabledCategories.internalValue;
  }

  // screens - computed: false, optional: true, required: false
  private _screens = new WebdeploymentsConfigurationSupportCenterScreensList(this, "screens", false);
  public get screens() {
    return this._screens;
  }
  public putScreens(value: WebdeploymentsConfigurationSupportCenterScreens[] | cdktf.IResolvable) {
    this._screens.internalValue = value;
  }
  public resetScreens() {
    this._screens.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screensInput() {
    return this._screens.internalValue;
  }

  // style_setting - computed: false, optional: true, required: false
  private _styleSetting = new WebdeploymentsConfigurationSupportCenterStyleSettingOutputReference(this, "style_setting");
  public get styleSetting() {
    return this._styleSetting;
  }
  public putStyleSetting(value: WebdeploymentsConfigurationSupportCenterStyleSetting) {
    this._styleSetting.internalValue = value;
  }
  public resetStyleSetting() {
    this._styleSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleSettingInput() {
    return this._styleSetting.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration genesyscloud_webdeployments_configuration}
*/
export class WebdeploymentsConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_webdeployments_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebdeploymentsConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebdeploymentsConfiguration to import
  * @param importFromId The id of the existing WebdeploymentsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebdeploymentsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_webdeployments_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/webdeployments_configuration genesyscloud_webdeployments_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebdeploymentsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: WebdeploymentsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_webdeployments_configuration',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultLanguage = config.defaultLanguage;
    this._description = config.description;
    this._headlessModeEnabled = config.headlessModeEnabled;
    this._id = config.id;
    this._languages = config.languages;
    this._name = config.name;
    this._status = config.status;
    this._authenticationSettings.internalValue = config.authenticationSettings;
    this._cobrowse.internalValue = config.cobrowse;
    this._customI18NLabels.internalValue = config.customI18NLabels;
    this._journeyEvents.internalValue = config.journeyEvents;
    this._messenger.internalValue = config.messenger;
    this._position.internalValue = config.position;
    this._supportCenter.internalValue = config.supportCenter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_language - computed: false, optional: false, required: true
  private _defaultLanguage?: string; 
  public get defaultLanguage() {
    return this.getStringAttribute('default_language');
  }
  public set defaultLanguage(value: string) {
    this._defaultLanguage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageInput() {
    return this._defaultLanguage;
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

  // headless_mode_enabled - computed: false, optional: true, required: false
  private _headlessModeEnabled?: boolean | cdktf.IResolvable; 
  public get headlessModeEnabled() {
    return this.getBooleanAttribute('headless_mode_enabled');
  }
  public set headlessModeEnabled(value: boolean | cdktf.IResolvable) {
    this._headlessModeEnabled = value;
  }
  public resetHeadlessModeEnabled() {
    this._headlessModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlessModeEnabledInput() {
    return this._headlessModeEnabled;
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

  // languages - computed: false, optional: false, required: true
  private _languages?: string[]; 
  public get languages() {
    return this.getListAttribute('languages');
  }
  public set languages(value: string[]) {
    this._languages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languagesInput() {
    return this._languages;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // authentication_settings - computed: false, optional: true, required: false
  private _authenticationSettings = new WebdeploymentsConfigurationAuthenticationSettingsOutputReference(this, "authentication_settings");
  public get authenticationSettings() {
    return this._authenticationSettings;
  }
  public putAuthenticationSettings(value: WebdeploymentsConfigurationAuthenticationSettings) {
    this._authenticationSettings.internalValue = value;
  }
  public resetAuthenticationSettings() {
    this._authenticationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSettingsInput() {
    return this._authenticationSettings.internalValue;
  }

  // cobrowse - computed: false, optional: true, required: false
  private _cobrowse = new WebdeploymentsConfigurationCobrowseOutputReference(this, "cobrowse");
  public get cobrowse() {
    return this._cobrowse;
  }
  public putCobrowse(value: WebdeploymentsConfigurationCobrowse) {
    this._cobrowse.internalValue = value;
  }
  public resetCobrowse() {
    this._cobrowse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cobrowseInput() {
    return this._cobrowse.internalValue;
  }

  // custom_i18n_labels - computed: false, optional: true, required: false
  private _customI18NLabels = new WebdeploymentsConfigurationCustomI18NLabelsList(this, "custom_i18n_labels", false);
  public get customI18NLabels() {
    return this._customI18NLabels;
  }
  public putCustomI18NLabels(value: WebdeploymentsConfigurationCustomI18NLabels[] | cdktf.IResolvable) {
    this._customI18NLabels.internalValue = value;
  }
  public resetCustomI18NLabels() {
    this._customI18NLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customI18NLabelsInput() {
    return this._customI18NLabels.internalValue;
  }

  // journey_events - computed: false, optional: true, required: false
  private _journeyEvents = new WebdeploymentsConfigurationJourneyEventsOutputReference(this, "journey_events");
  public get journeyEvents() {
    return this._journeyEvents;
  }
  public putJourneyEvents(value: WebdeploymentsConfigurationJourneyEvents) {
    this._journeyEvents.internalValue = value;
  }
  public resetJourneyEvents() {
    this._journeyEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get journeyEventsInput() {
    return this._journeyEvents.internalValue;
  }

  // messenger - computed: false, optional: true, required: false
  private _messenger = new WebdeploymentsConfigurationMessengerOutputReference(this, "messenger");
  public get messenger() {
    return this._messenger;
  }
  public putMessenger(value: WebdeploymentsConfigurationMessenger) {
    this._messenger.internalValue = value;
  }
  public resetMessenger() {
    this._messenger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messengerInput() {
    return this._messenger.internalValue;
  }

  // position - computed: false, optional: true, required: false
  private _position = new WebdeploymentsConfigurationPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: WebdeploymentsConfigurationPosition) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // support_center - computed: false, optional: true, required: false
  private _supportCenter = new WebdeploymentsConfigurationSupportCenterOutputReference(this, "support_center");
  public get supportCenter() {
    return this._supportCenter;
  }
  public putSupportCenter(value: WebdeploymentsConfigurationSupportCenter) {
    this._supportCenter.internalValue = value;
  }
  public resetSupportCenter() {
    this._supportCenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportCenterInput() {
    return this._supportCenter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_language: cdktf.stringToTerraform(this._defaultLanguage),
      description: cdktf.stringToTerraform(this._description),
      headless_mode_enabled: cdktf.booleanToTerraform(this._headlessModeEnabled),
      id: cdktf.stringToTerraform(this._id),
      languages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._languages),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      authentication_settings: webdeploymentsConfigurationAuthenticationSettingsToTerraform(this._authenticationSettings.internalValue),
      cobrowse: webdeploymentsConfigurationCobrowseToTerraform(this._cobrowse.internalValue),
      custom_i18n_labels: cdktf.listMapper(webdeploymentsConfigurationCustomI18NLabelsToTerraform, true)(this._customI18NLabels.internalValue),
      journey_events: webdeploymentsConfigurationJourneyEventsToTerraform(this._journeyEvents.internalValue),
      messenger: webdeploymentsConfigurationMessengerToTerraform(this._messenger.internalValue),
      position: webdeploymentsConfigurationPositionToTerraform(this._position.internalValue),
      support_center: webdeploymentsConfigurationSupportCenterToTerraform(this._supportCenter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_language: {
        value: cdktf.stringToHclTerraform(this._defaultLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headless_mode_enabled: {
        value: cdktf.booleanToHclTerraform(this._headlessModeEnabled),
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
      languages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._languages),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_settings: {
        value: webdeploymentsConfigurationAuthenticationSettingsToHclTerraform(this._authenticationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebdeploymentsConfigurationAuthenticationSettingsList",
      },
      cobrowse: {
        value: webdeploymentsConfigurationCobrowseToHclTerraform(this._cobrowse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebdeploymentsConfigurationCobrowseList",
      },
      custom_i18n_labels: {
        value: cdktf.listMapperHcl(webdeploymentsConfigurationCustomI18NLabelsToHclTerraform, true)(this._customI18NLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebdeploymentsConfigurationCustomI18NLabelsList",
      },
      journey_events: {
        value: webdeploymentsConfigurationJourneyEventsToHclTerraform(this._journeyEvents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebdeploymentsConfigurationJourneyEventsList",
      },
      messenger: {
        value: webdeploymentsConfigurationMessengerToHclTerraform(this._messenger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebdeploymentsConfigurationMessengerList",
      },
      position: {
        value: webdeploymentsConfigurationPositionToHclTerraform(this._position.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebdeploymentsConfigurationPositionList",
      },
      support_center: {
        value: webdeploymentsConfigurationSupportCenterToHclTerraform(this._supportCenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebdeploymentsConfigurationSupportCenterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
