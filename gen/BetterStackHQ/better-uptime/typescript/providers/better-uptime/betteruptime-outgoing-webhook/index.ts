// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeOutgoingWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the outgoing webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#name BetteruptimeOutgoingWebhook#name}
  */
  readonly name?: string;
  /**
  * Whether to trigger webhook when incident is acknowledged. Only when `trigger_type=incident_change`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#on_incident_acknowledged BetteruptimeOutgoingWebhook#on_incident_acknowledged}
  */
  readonly onIncidentAcknowledged?: boolean | cdktf.IResolvable;
  /**
  * Whether to trigger webhook when incident is resolved. Only when `trigger_type=incident_change`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#on_incident_resolved BetteruptimeOutgoingWebhook#on_incident_resolved}
  */
  readonly onIncidentResolved?: boolean | cdktf.IResolvable;
  /**
  * Whether to trigger webhook when incident starts. Only when `trigger_type=incident_change`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#on_incident_started BetteruptimeOutgoingWebhook#on_incident_started}
  */
  readonly onIncidentStarted?: boolean | cdktf.IResolvable;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#team_name BetteruptimeOutgoingWebhook#team_name}
  */
  readonly teamName?: string;
  /**
  * The type of trigger for the webhook. Only settable during creation. Available values: `incident_change`, `on_call_change`, `monitor_change`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#trigger_type BetteruptimeOutgoingWebhook#trigger_type}
  */
  readonly triggerType: string;
  /**
  * The URL to send webhooks to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#url BetteruptimeOutgoingWebhook#url}
  */
  readonly url: string;
  /**
  * custom_webhook_template_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#custom_webhook_template_attributes BetteruptimeOutgoingWebhook#custom_webhook_template_attributes}
  */
  readonly customWebhookTemplateAttributes?: BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributes;
}
export interface BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#name BetteruptimeOutgoingWebhook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#value BetteruptimeOutgoingWebhook#value}
  */
  readonly value: string;
}

export function betteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplateToTerraform(struct?: BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function betteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplateToHclTerraform(struct?: BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplate | cdktf.IResolvable): any {
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

export class BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplateList extends cdktf.ComplexList {
  public internalValue? : BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplate[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplateOutputReference {
    return new BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributes {
  /**
  * The password to use for basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#auth_password BetteruptimeOutgoingWebhook#auth_password}
  */
  readonly authPassword?: string;
  /**
  * The username to use for basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#auth_username BetteruptimeOutgoingWebhook#auth_username}
  */
  readonly authUsername?: string;
  /**
  * The body of the webhook request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#body_template BetteruptimeOutgoingWebhook#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * The HTTP method to use when sending the webhook. Possible values: `get`, `post`, `put`, `patch` and `head`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#http_method BetteruptimeOutgoingWebhook#http_method}
  */
  readonly httpMethod?: string;
  /**
  * headers_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#headers_template BetteruptimeOutgoingWebhook#headers_template}
  */
  readonly headersTemplate?: BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplate[] | cdktf.IResolvable;
}

export function betteruptimeOutgoingWebhookCustomWebhookTemplateAttributesToTerraform(struct?: BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesOutputReference | BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_username: cdktf.stringToTerraform(struct!.authUsername),
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    headers_template: cdktf.listMapper(betteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplateToTerraform, true)(struct!.headersTemplate),
  }
}


export function betteruptimeOutgoingWebhookCustomWebhookTemplateAttributesToHclTerraform(struct?: BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesOutputReference | BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_username: {
      value: cdktf.stringToHclTerraform(struct!.authUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_template: {
      value: cdktf.stringToHclTerraform(struct!.bodyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers_template: {
      value: cdktf.listMapperHcl(betteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplateToHclTerraform, true)(struct!.headersTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUsername = this._authUsername;
    }
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._headersTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersTemplate = this._headersTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authPassword = undefined;
      this._authUsername = undefined;
      this._bodyTemplate = undefined;
      this._httpMethod = undefined;
      this._headersTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authPassword = value.authPassword;
      this._authUsername = value.authUsername;
      this._bodyTemplate = value.bodyTemplate;
      this._httpMethod = value.httpMethod;
      this._headersTemplate.internalValue = value.headersTemplate;
    }
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_username - computed: false, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // body_template - computed: false, optional: true, required: false
  private _bodyTemplate?: string; 
  public get bodyTemplate() {
    return this.getStringAttribute('body_template');
  }
  public set bodyTemplate(value: string) {
    this._bodyTemplate = value;
  }
  public resetBodyTemplate() {
    this._bodyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTemplateInput() {
    return this._bodyTemplate;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // headers_template - computed: false, optional: true, required: false
  private _headersTemplate = new BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplateList(this, "headers_template", false);
  public get headersTemplate() {
    return this._headersTemplate;
  }
  public putHeadersTemplate(value: BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesHeadersTemplate[] | cdktf.IResolvable) {
    this._headersTemplate.internalValue = value;
  }
  public resetHeadersTemplate() {
    this._headersTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersTemplateInput() {
    return this._headersTemplate.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook betteruptime_outgoing_webhook}
*/
export class BetteruptimeOutgoingWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_outgoing_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeOutgoingWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeOutgoingWebhook to import
  * @param importFromId The id of the existing BetteruptimeOutgoingWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeOutgoingWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_outgoing_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_outgoing_webhook betteruptime_outgoing_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeOutgoingWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeOutgoingWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_outgoing_webhook',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4',
        providerVersionConstraint: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._onIncidentAcknowledged = config.onIncidentAcknowledged;
    this._onIncidentResolved = config.onIncidentResolved;
    this._onIncidentStarted = config.onIncidentStarted;
    this._teamName = config.teamName;
    this._triggerType = config.triggerType;
    this._url = config.url;
    this._customWebhookTemplateAttributes.internalValue = config.customWebhookTemplateAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // on_incident_acknowledged - computed: false, optional: true, required: false
  private _onIncidentAcknowledged?: boolean | cdktf.IResolvable; 
  public get onIncidentAcknowledged() {
    return this.getBooleanAttribute('on_incident_acknowledged');
  }
  public set onIncidentAcknowledged(value: boolean | cdktf.IResolvable) {
    this._onIncidentAcknowledged = value;
  }
  public resetOnIncidentAcknowledged() {
    this._onIncidentAcknowledged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onIncidentAcknowledgedInput() {
    return this._onIncidentAcknowledged;
  }

  // on_incident_resolved - computed: false, optional: true, required: false
  private _onIncidentResolved?: boolean | cdktf.IResolvable; 
  public get onIncidentResolved() {
    return this.getBooleanAttribute('on_incident_resolved');
  }
  public set onIncidentResolved(value: boolean | cdktf.IResolvable) {
    this._onIncidentResolved = value;
  }
  public resetOnIncidentResolved() {
    this._onIncidentResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onIncidentResolvedInput() {
    return this._onIncidentResolved;
  }

  // on_incident_started - computed: false, optional: true, required: false
  private _onIncidentStarted?: boolean | cdktf.IResolvable; 
  public get onIncidentStarted() {
    return this.getBooleanAttribute('on_incident_started');
  }
  public set onIncidentStarted(value: boolean | cdktf.IResolvable) {
    this._onIncidentStarted = value;
  }
  public resetOnIncidentStarted() {
    this._onIncidentStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onIncidentStartedInput() {
    return this._onIncidentStarted;
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // custom_webhook_template_attributes - computed: false, optional: true, required: false
  private _customWebhookTemplateAttributes = new BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesOutputReference(this, "custom_webhook_template_attributes");
  public get customWebhookTemplateAttributes() {
    return this._customWebhookTemplateAttributes;
  }
  public putCustomWebhookTemplateAttributes(value: BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributes) {
    this._customWebhookTemplateAttributes.internalValue = value;
  }
  public resetCustomWebhookTemplateAttributes() {
    this._customWebhookTemplateAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customWebhookTemplateAttributesInput() {
    return this._customWebhookTemplateAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      on_incident_acknowledged: cdktf.booleanToTerraform(this._onIncidentAcknowledged),
      on_incident_resolved: cdktf.booleanToTerraform(this._onIncidentResolved),
      on_incident_started: cdktf.booleanToTerraform(this._onIncidentStarted),
      team_name: cdktf.stringToTerraform(this._teamName),
      trigger_type: cdktf.stringToTerraform(this._triggerType),
      url: cdktf.stringToTerraform(this._url),
      custom_webhook_template_attributes: betteruptimeOutgoingWebhookCustomWebhookTemplateAttributesToTerraform(this._customWebhookTemplateAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_incident_acknowledged: {
        value: cdktf.booleanToHclTerraform(this._onIncidentAcknowledged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_incident_resolved: {
        value: cdktf.booleanToHclTerraform(this._onIncidentResolved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_incident_started: {
        value: cdktf.booleanToHclTerraform(this._onIncidentStarted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_type: {
        value: cdktf.stringToHclTerraform(this._triggerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_webhook_template_attributes: {
        value: betteruptimeOutgoingWebhookCustomWebhookTemplateAttributesToHclTerraform(this._customWebhookTemplateAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeOutgoingWebhookCustomWebhookTemplateAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
