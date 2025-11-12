// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of events for which this webhook will be fired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#events Webhook#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#id Webhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#is_active Webhook#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Namespace to which this webhook belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#namespace Webhook#namespace}
  */
  readonly namespace: string;
  /**
  * The package-based search query for webhooks to fire. This uses the same syntax as the standard search used for repositories, and also supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. If a package does not match, the webhook will not fire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#package_query Webhook#package_query}
  */
  readonly packageQuery?: string;
  /**
  * Repository to which this webhook belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#repository Webhook#repository}
  */
  readonly repository: string;
  /**
  * The format of the payloads for webhook requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#request_body_format Webhook#request_body_format}
  */
  readonly requestBodyFormat?: string;
  /**
  * The format of the payloads for webhook requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#request_body_template_format Webhook#request_body_template_format}
  */
  readonly requestBodyTemplateFormat?: string;
  /**
  * The value that will be sent for the 'Content Type' header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#request_content_type Webhook#request_content_type}
  */
  readonly requestContentType?: string;
  /**
  * The header to send the predefined secret in. This must be unique from existing headers or it won't be sent. You can use this as a form of authentication on the endpoint side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#secret_header Webhook#secret_header}
  */
  readonly secretHeader?: string;
  /**
  * The value for the predefined secret (note: this is treated as a passphrase and is encrypted when we store it). You can use this as a form of authentication on the endpoint side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#secret_value Webhook#secret_value}
  */
  readonly secretValue?: string;
  /**
  * The value for the signature key - This is used to generate an HMAC-based hex digest of the request body, which we send as the X-Cloudsmith-Signature header so that you can ensure that the request wasn't modified by a malicious party (note: this is treated as a passphrase and is encrypted when we store it).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#signature_key Webhook#signature_key}
  */
  readonly signatureKey?: string;
  /**
  * The destination URL that webhook payloads will be POST'ed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#target_url Webhook#target_url}
  */
  readonly targetUrl: string;
  /**
  * If enabled, SSL certificates is verified when webhooks are sent. It's recommended to leave this enabled as not verifying the integrity of SSL certificates leaves you susceptible to Man-in-the-Middle (MITM) attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#verify_ssl Webhook#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#template Webhook#template}
  */
  readonly template?: WebhookTemplate[] | cdktf.IResolvable;
}
export interface WebhookTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#event Webhook#event}
  */
  readonly event: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#template Webhook#template}
  */
  readonly template?: string;
}

export function webhookTemplateToTerraform(struct?: WebhookTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function webhookTemplateToHclTerraform(struct?: WebhookTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebhookTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebhookTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebhookTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event = value.event;
      this._template = value.template;
    }
  }

  // event - computed: false, optional: false, required: true
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // template - computed: false, optional: true, required: false
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
}

export class WebhookTemplateList extends cdktf.ComplexList {
  public internalValue? : WebhookTemplate[] | cdktf.IResolvable

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
  public get(index: number): WebhookTemplateOutputReference {
    return new WebhookTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook cloudsmith_webhook}
*/
export class Webhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Webhook to import
  * @param importFromId The id of the existing Webhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Webhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/webhook cloudsmith_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_webhook',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.66',
        providerVersionConstraint: '0.0.66'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._events = config.events;
    this._id = config.id;
    this._isActive = config.isActive;
    this._namespace = config.namespace;
    this._packageQuery = config.packageQuery;
    this._repository = config.repository;
    this._requestBodyFormat = config.requestBodyFormat;
    this._requestBodyTemplateFormat = config.requestBodyTemplateFormat;
    this._requestContentType = config.requestContentType;
    this._secretHeader = config.secretHeader;
    this._secretValue = config.secretValue;
    this._signatureKey = config.signatureKey;
    this._targetUrl = config.targetUrl;
    this._verifySsl = config.verifySsl;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // disable_reason - computed: true, optional: false, required: false
  public get disableReason() {
    return this.getStringAttribute('disable_reason');
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
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

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // package_query - computed: false, optional: true, required: false
  private _packageQuery?: string; 
  public get packageQuery() {
    return this.getStringAttribute('package_query');
  }
  public set packageQuery(value: string) {
    this._packageQuery = value;
  }
  public resetPackageQuery() {
    this._packageQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageQueryInput() {
    return this._packageQuery;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // request_body_format - computed: true, optional: true, required: false
  private _requestBodyFormat?: string; 
  public get requestBodyFormat() {
    return this.getStringAttribute('request_body_format');
  }
  public set requestBodyFormat(value: string) {
    this._requestBodyFormat = value;
  }
  public resetRequestBodyFormat() {
    this._requestBodyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyFormatInput() {
    return this._requestBodyFormat;
  }

  // request_body_template_format - computed: true, optional: true, required: false
  private _requestBodyTemplateFormat?: string; 
  public get requestBodyTemplateFormat() {
    return this.getStringAttribute('request_body_template_format');
  }
  public set requestBodyTemplateFormat(value: string) {
    this._requestBodyTemplateFormat = value;
  }
  public resetRequestBodyTemplateFormat() {
    this._requestBodyTemplateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyTemplateFormatInput() {
    return this._requestBodyTemplateFormat;
  }

  // request_content_type - computed: false, optional: true, required: false
  private _requestContentType?: string; 
  public get requestContentType() {
    return this.getStringAttribute('request_content_type');
  }
  public set requestContentType(value: string) {
    this._requestContentType = value;
  }
  public resetRequestContentType() {
    this._requestContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestContentTypeInput() {
    return this._requestContentType;
  }

  // secret_header - computed: false, optional: true, required: false
  private _secretHeader?: string; 
  public get secretHeader() {
    return this.getStringAttribute('secret_header');
  }
  public set secretHeader(value: string) {
    this._secretHeader = value;
  }
  public resetSecretHeader() {
    this._secretHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretHeaderInput() {
    return this._secretHeader;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  public resetSecretValue() {
    this._secretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // signature_key - computed: false, optional: true, required: false
  private _signatureKey?: string; 
  public get signatureKey() {
    return this.getStringAttribute('signature_key');
  }
  public set signatureKey(value: string) {
    this._signatureKey = value;
  }
  public resetSignatureKey() {
    this._signatureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureKeyInput() {
    return this._signatureKey;
  }

  // slug_perm - computed: true, optional: false, required: false
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }

  // target_url - computed: false, optional: false, required: true
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // verify_ssl - computed: true, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
  public set verifySsl(value: boolean | cdktf.IResolvable) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
  }

  // template - computed: false, optional: true, required: false
  private _template = new WebhookTemplateList(this, "template", true);
  public get template() {
    return this._template;
  }
  public putTemplate(value: WebhookTemplate[] | cdktf.IResolvable) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._events),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      namespace: cdktf.stringToTerraform(this._namespace),
      package_query: cdktf.stringToTerraform(this._packageQuery),
      repository: cdktf.stringToTerraform(this._repository),
      request_body_format: cdktf.stringToTerraform(this._requestBodyFormat),
      request_body_template_format: cdktf.stringToTerraform(this._requestBodyTemplateFormat),
      request_content_type: cdktf.stringToTerraform(this._requestContentType),
      secret_header: cdktf.stringToTerraform(this._secretHeader),
      secret_value: cdktf.stringToTerraform(this._secretValue),
      signature_key: cdktf.stringToTerraform(this._signatureKey),
      target_url: cdktf.stringToTerraform(this._targetUrl),
      verify_ssl: cdktf.booleanToTerraform(this._verifySsl),
      template: cdktf.listMapper(webhookTemplateToTerraform, true)(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._events),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_query: {
        value: cdktf.stringToHclTerraform(this._packageQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_body_format: {
        value: cdktf.stringToHclTerraform(this._requestBodyFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_body_template_format: {
        value: cdktf.stringToHclTerraform(this._requestBodyTemplateFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_content_type: {
        value: cdktf.stringToHclTerraform(this._requestContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_header: {
        value: cdktf.stringToHclTerraform(this._secretHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_value: {
        value: cdktf.stringToHclTerraform(this._secretValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_key: {
        value: cdktf.stringToHclTerraform(this._signatureKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_url: {
        value: cdktf.stringToHclTerraform(this._targetUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_ssl: {
        value: cdktf.booleanToHclTerraform(this._verifySsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template: {
        value: cdktf.listMapperHcl(webhookTemplateToHclTerraform, true)(this._template.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebhookTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
