// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProbeActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#backend ProbeAction#backend}
  */
  readonly backend: string;
  /**
  * Description of the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#description ProbeAction#description}
  */
  readonly description?: string;
  /**
  * HTTP Post backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#http_post ProbeAction#http_post}
  */
  readonly httpPost?: ProbeActionHttpPost;
  /**
  * Name of the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#name ProbeAction#name}
  */
  readonly name: string;
  /**
  * Slack incoming webhook backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#slack_incoming_webhook ProbeAction#slack_incoming_webhook}
  */
  readonly slackIncomingWebhook?: ProbeActionSlackIncomingWebhook;
}
export interface ProbeActionHttpPostHeaders {
  /**
  * Name of the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#name ProbeAction#name}
  */
  readonly name: string;
  /**
  * Value of the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#value ProbeAction#value}
  */
  readonly value: string;
}

export function probeActionHttpPostHeadersToTerraform(struct?: ProbeActionHttpPostHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function probeActionHttpPostHeadersToHclTerraform(struct?: ProbeActionHttpPostHeaders | cdktf.IResolvable): any {
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

export class ProbeActionHttpPostHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProbeActionHttpPostHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProbeActionHttpPostHeaders | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class ProbeActionHttpPostHeadersList extends cdktf.ComplexList {
  public internalValue? : ProbeActionHttpPostHeaders[] | cdktf.IResolvable

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
  public get(index: number): ProbeActionHttpPostHeadersOutputReference {
    return new ProbeActionHttpPostHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProbeActionHttpPost {
  /**
  * A set of additional HTTP headers to add to the requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#headers ProbeAction#headers}
  */
  readonly headers?: ProbeActionHttpPostHeaders[] | cdktf.IResolvable;
  /**
  * Password for basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#password ProbeAction#password}
  */
  readonly password?: string;
  /**
  * `URL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#url ProbeAction#url}
  */
  readonly url: string;
  /**
  * Username for basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#username ProbeAction#username}
  */
  readonly username?: string;
}

export function probeActionHttpPostToTerraform(struct?: ProbeActionHttpPost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(probeActionHttpPostHeadersToTerraform, false)(struct!.headers),
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function probeActionHttpPostToHclTerraform(struct?: ProbeActionHttpPost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(probeActionHttpPostHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "set",
      storageClassType: "ProbeActionHttpPostHeadersList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbeActionHttpPostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProbeActionHttpPost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbeActionHttpPost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._password = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._password = value.password;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new ProbeActionHttpPostHeadersList(this, "headers", true);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ProbeActionHttpPostHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ProbeActionSlackIncomingWebhook {
  /**
  * `URL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#url ProbeAction#url}
  */
  readonly url: string;
}

export function probeActionSlackIncomingWebhookToTerraform(struct?: ProbeActionSlackIncomingWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function probeActionSlackIncomingWebhookToHclTerraform(struct?: ProbeActionSlackIncomingWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ProbeActionSlackIncomingWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProbeActionSlackIncomingWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbeActionSlackIncomingWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action zentral_probe_action}
*/
export class ProbeAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_probe_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProbeAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProbeAction to import
  * @param importFromId The id of the existing ProbeAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProbeAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_probe_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/probe_action zentral_probe_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProbeActionConfig
  */
  public constructor(scope: Construct, id: string, config: ProbeActionConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_probe_action',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.65',
        providerVersionConstraint: '0.1.65'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backend = config.backend;
    this._description = config.description;
    this._httpPost.internalValue = config.httpPost;
    this._name = config.name;
    this._slackIncomingWebhook.internalValue = config.slackIncomingWebhook;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // description - computed: true, optional: true, required: false
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

  // http_post - computed: false, optional: true, required: false
  private _httpPost = new ProbeActionHttpPostOutputReference(this, "http_post");
  public get httpPost() {
    return this._httpPost;
  }
  public putHttpPost(value: ProbeActionHttpPost) {
    this._httpPost.internalValue = value;
  }
  public resetHttpPost() {
    this._httpPost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPostInput() {
    return this._httpPost.internalValue;
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

  // slack_incoming_webhook - computed: false, optional: true, required: false
  private _slackIncomingWebhook = new ProbeActionSlackIncomingWebhookOutputReference(this, "slack_incoming_webhook");
  public get slackIncomingWebhook() {
    return this._slackIncomingWebhook;
  }
  public putSlackIncomingWebhook(value: ProbeActionSlackIncomingWebhook) {
    this._slackIncomingWebhook.internalValue = value;
  }
  public resetSlackIncomingWebhook() {
    this._slackIncomingWebhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackIncomingWebhookInput() {
    return this._slackIncomingWebhook.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      description: cdktf.stringToTerraform(this._description),
      http_post: probeActionHttpPostToTerraform(this._httpPost.internalValue),
      name: cdktf.stringToTerraform(this._name),
      slack_incoming_webhook: probeActionSlackIncomingWebhookToTerraform(this._slackIncomingWebhook.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
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
      http_post: {
        value: probeActionHttpPostToHclTerraform(this._httpPost.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProbeActionHttpPost",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_incoming_webhook: {
        value: probeActionSlackIncomingWebhookToHclTerraform(this._slackIncomingWebhook.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProbeActionSlackIncomingWebhook",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
