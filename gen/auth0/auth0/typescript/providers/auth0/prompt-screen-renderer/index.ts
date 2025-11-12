// https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PromptScreenRendererConfig extends cdktf.TerraformMetaArguments {
  /**
  * Context values to make available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#context_configuration PromptScreenRenderer#context_configuration}
  */
  readonly contextConfiguration?: string[];
  /**
  * Override Universal Login default head tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#default_head_tags_disabled PromptScreenRenderer#default_head_tags_disabled}
  */
  readonly defaultHeadTagsDisabled?: boolean | cdktf.IResolvable;
  /**
  * An array of head tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#head_tags PromptScreenRenderer#head_tags}
  */
  readonly headTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#id PromptScreenRenderer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The prompt that you are configuring settings for. Options are: `signup-id`, `signup-password`, `login-id`, `login-password`, `login-passwordless`, `phone-identifier-enrollment`, `phone-identifier-challenge`, `email-identifier-challenge`, `passkeys`, `captcha`, `login`, `signup`, `reset-password`, `mfa`, `mfa-sms`, `mfa-email`, `mfa-push`, `invitation`, `organizations`, `mfa-otp`, `device-flow`, `mfa-phone`, `mfa-voice`, `mfa-recovery-code`, `common`, `email-verification`, `login-email-verification`, `logout`, `mfa-webauthn`, `consent`, `customized-consent`, `email-otp-challenge`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#prompt_type PromptScreenRenderer#prompt_type}
  */
  readonly promptType: string;
  /**
  * Rendering modeOptions are: `standard`, `advanced`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#rendering_mode PromptScreenRenderer#rendering_mode}
  */
  readonly renderingMode?: string;
  /**
  * The screen that you are configuring settings for. Options are: `signup-id`, `signup-password`, `login-id`, `login-password`, `login-passwordless-sms-otp`, `login-passwordless-email-code`, `phone-identifier-enrollment`, `phone-identifier-challenge`, `email-identifier-challenge`, `passkey-enrollment`, `passkey-enrollment-local`, `interstitial-captcha`, `login`, `signup`, `reset-password-request`, `reset-password-email`, `reset-password`, `reset-password-success`, `reset-password-error`, `reset-password-mfa-email-challenge`, `reset-password-mfa-otp-challenge`, `reset-password-mfa-push-challenge-push`, `reset-password-mfa-sms-challenge`, `mfa-detect-browser-capabilities`, `mfa-enroll-result`, `mfa-begin-enroll-options`, `mfa-login-options`, `mfa-country-codes`, `mfa-sms-challenge`, `mfa-sms-enrollment`, `mfa-sms-list`, `mfa-email-challenge`, `mfa-email-list`, `mfa-push-challenge-push`, `mfa-push-enrollment-qr`, `mfa-push-list`, `mfa-push-welcome`, `accept-invitation`, `organization-selection`, `organization-picker`, `mfa-otp-challenge`, `mfa-otp-enrollment-code`, `mfa-otp-enrollment-qr`, `device-code-activation`, `device-code-activation-allowed`, `device-code-activation-denied`, `device-code-confirmation`, `mfa-phone-challenge`, `mfa-phone-enrollment`, `mfa-voice-challenge`, `mfa-voice-enrollment`, `reset-password-mfa-phone-challenge`, `reset-password-mfa-voice-challenge`, `mfa-recovery-code-challenge`, `mfa-recovery-code-enrollment`, `reset-password-mfa-recovery-code-challenge`, `redeem-ticket`, `mfa-recovery-code-challenge-new-code`, `email-verification-result`, `login-email-verification`, `logout`, `logout-aborted`, `logout-complete`, `mfa-webauthn-change-key-nickname`, `mfa-webauthn-enrollment-success`, `mfa-webauthn-error`, `mfa-webauthn-platform-challenge`, `mfa-webauthn-platform-enrollment`, `mfa-webauthn-roaming-challenge`, `mfa-webauthn-roaming-enrollment`, `reset-password-mfa-webauthn-platform-challenge`, `reset-password-mfa-webauthn-roaming-challenge`, `consent`, `customized-consent`, `email-otp-challenge`, `mfa-webauthn-not-available-error`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#screen_name PromptScreenRenderer#screen_name}
  */
  readonly screenName: string;
  /**
  * Use page template with ACUL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#use_page_template PromptScreenRenderer#use_page_template}
  */
  readonly usePageTemplate?: boolean | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#filters PromptScreenRenderer#filters}
  */
  readonly filters?: PromptScreenRendererFilters;
}
export interface PromptScreenRendererFilters {
  /**
  * An array of clients (applications) identified by id or a metadata key/value pair. Entity Limit: 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#clients PromptScreenRenderer#clients}
  */
  readonly clients?: string;
  /**
  * An array of domains identified by id or a metadata key/value pair. Entity Limit: 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#domains PromptScreenRenderer#domains}
  */
  readonly domains?: string;
  /**
  * Type of match to apply. Options: `includes_any`, `excludes_any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#match_type PromptScreenRenderer#match_type}
  */
  readonly matchType: string;
  /**
  * An array of organizations identified by id or a metadata key/value pair. Entity Limit: 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#organizations PromptScreenRenderer#organizations}
  */
  readonly organizations?: string;
}

export function promptScreenRendererFiltersToTerraform(struct?: PromptScreenRendererFiltersOutputReference | PromptScreenRendererFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: cdktf.stringToTerraform(struct!.clients),
    domains: cdktf.stringToTerraform(struct!.domains),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    organizations: cdktf.stringToTerraform(struct!.organizations),
  }
}


export function promptScreenRendererFiltersToHclTerraform(struct?: PromptScreenRendererFiltersOutputReference | PromptScreenRendererFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: cdktf.stringToHclTerraform(struct!.clients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domains: {
      value: cdktf.stringToHclTerraform(struct!.domains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizations: {
      value: cdktf.stringToHclTerraform(struct!.organizations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PromptScreenRendererFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PromptScreenRendererFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._organizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizations = this._organizations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PromptScreenRendererFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clients = undefined;
      this._domains = undefined;
      this._matchType = undefined;
      this._organizations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clients = value.clients;
      this._domains = value.domains;
      this._matchType = value.matchType;
      this._organizations = value.organizations;
    }
  }

  // clients - computed: false, optional: true, required: false
  private _clients?: string; 
  public get clients() {
    return this.getStringAttribute('clients');
  }
  public set clients(value: string) {
    this._clients = value;
  }
  public resetClients() {
    this._clients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string; 
  public get domains() {
    return this.getStringAttribute('domains');
  }
  public set domains(value: string) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // organizations - computed: false, optional: true, required: false
  private _organizations?: string; 
  public get organizations() {
    return this.getStringAttribute('organizations');
  }
  public set organizations(value: string) {
    this._organizations = value;
  }
  public resetOrganizations() {
    this._organizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer auth0_prompt_screen_renderer}
*/
export class PromptScreenRenderer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_prompt_screen_renderer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PromptScreenRenderer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PromptScreenRenderer to import
  * @param importFromId The id of the existing PromptScreenRenderer that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PromptScreenRenderer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_prompt_screen_renderer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/prompt_screen_renderer auth0_prompt_screen_renderer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PromptScreenRendererConfig
  */
  public constructor(scope: Construct, id: string, config: PromptScreenRendererConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_prompt_screen_renderer',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.34.0',
        providerVersionConstraint: '1.34.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contextConfiguration = config.contextConfiguration;
    this._defaultHeadTagsDisabled = config.defaultHeadTagsDisabled;
    this._headTags = config.headTags;
    this._id = config.id;
    this._promptType = config.promptType;
    this._renderingMode = config.renderingMode;
    this._screenName = config.screenName;
    this._usePageTemplate = config.usePageTemplate;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context_configuration - computed: true, optional: true, required: false
  private _contextConfiguration?: string[]; 
  public get contextConfiguration() {
    return cdktf.Fn.tolist(this.getListAttribute('context_configuration'));
  }
  public set contextConfiguration(value: string[]) {
    this._contextConfiguration = value;
  }
  public resetContextConfiguration() {
    this._contextConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextConfigurationInput() {
    return this._contextConfiguration;
  }

  // default_head_tags_disabled - computed: false, optional: true, required: false
  private _defaultHeadTagsDisabled?: boolean | cdktf.IResolvable; 
  public get defaultHeadTagsDisabled() {
    return this.getBooleanAttribute('default_head_tags_disabled');
  }
  public set defaultHeadTagsDisabled(value: boolean | cdktf.IResolvable) {
    this._defaultHeadTagsDisabled = value;
  }
  public resetDefaultHeadTagsDisabled() {
    this._defaultHeadTagsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeadTagsDisabledInput() {
    return this._defaultHeadTagsDisabled;
  }

  // head_tags - computed: true, optional: true, required: false
  private _headTags?: string; 
  public get headTags() {
    return this.getStringAttribute('head_tags');
  }
  public set headTags(value: string) {
    this._headTags = value;
  }
  public resetHeadTags() {
    this._headTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headTagsInput() {
    return this._headTags;
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

  // prompt_type - computed: false, optional: false, required: true
  private _promptType?: string; 
  public get promptType() {
    return this.getStringAttribute('prompt_type');
  }
  public set promptType(value: string) {
    this._promptType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTypeInput() {
    return this._promptType;
  }

  // rendering_mode - computed: false, optional: true, required: false
  private _renderingMode?: string; 
  public get renderingMode() {
    return this.getStringAttribute('rendering_mode');
  }
  public set renderingMode(value: string) {
    this._renderingMode = value;
  }
  public resetRenderingMode() {
    this._renderingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderingModeInput() {
    return this._renderingMode;
  }

  // screen_name - computed: false, optional: false, required: true
  private _screenName?: string; 
  public get screenName() {
    return this.getStringAttribute('screen_name');
  }
  public set screenName(value: string) {
    this._screenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get screenNameInput() {
    return this._screenName;
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // use_page_template - computed: false, optional: true, required: false
  private _usePageTemplate?: boolean | cdktf.IResolvable; 
  public get usePageTemplate() {
    return this.getBooleanAttribute('use_page_template');
  }
  public set usePageTemplate(value: boolean | cdktf.IResolvable) {
    this._usePageTemplate = value;
  }
  public resetUsePageTemplate() {
    this._usePageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePageTemplateInput() {
    return this._usePageTemplate;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new PromptScreenRendererFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PromptScreenRendererFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context_configuration: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contextConfiguration),
      default_head_tags_disabled: cdktf.booleanToTerraform(this._defaultHeadTagsDisabled),
      head_tags: cdktf.stringToTerraform(this._headTags),
      id: cdktf.stringToTerraform(this._id),
      prompt_type: cdktf.stringToTerraform(this._promptType),
      rendering_mode: cdktf.stringToTerraform(this._renderingMode),
      screen_name: cdktf.stringToTerraform(this._screenName),
      use_page_template: cdktf.booleanToTerraform(this._usePageTemplate),
      filters: promptScreenRendererFiltersToTerraform(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context_configuration: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contextConfiguration),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_head_tags_disabled: {
        value: cdktf.booleanToHclTerraform(this._defaultHeadTagsDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      head_tags: {
        value: cdktf.stringToHclTerraform(this._headTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prompt_type: {
        value: cdktf.stringToHclTerraform(this._promptType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rendering_mode: {
        value: cdktf.stringToHclTerraform(this._renderingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      screen_name: {
        value: cdktf.stringToHclTerraform(this._screenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_page_template: {
        value: cdktf.booleanToHclTerraform(this._usePageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filters: {
        value: promptScreenRendererFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PromptScreenRendererFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
